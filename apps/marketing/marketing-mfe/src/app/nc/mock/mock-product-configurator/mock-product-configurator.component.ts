import { AfterContentChecked, ChangeDetectorRef, Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {
  CharsEnum,
  OmapiFamily,
  OmapiFamilyOptin,
  OmapiFamilyOption,
  OmapiFamilyService,
  OmapiFamilyTier,
  OmapiProduct,
  OmapiProductInfo,
} from '@telenet/ng-lib-omapi';
import { isEmpty, uniqBy, remove, first, includes } from 'lodash-es';
import { ErrorMessage, MessageService, MessagesModule } from '@telenet/ng-lib-message';
import { CustomerCategoryEnum, PathCategorisationService, UrlService } from '@telenet/ng-lib-page';
import {
  MockCreateSalesOrderRequest,
  MockCreateSalesOrderRequestBody,
} from '../mock-marketing/models/mock-create-sales-order-request.model';
import { RegexConstants } from '@telenet/ng-lib-form';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslateModule } from '@ngx-translate/core';
import { MatButton } from '@angular/material/button';
import { NgFor, NgIf } from '@angular/common';

export interface SelectedAddOnInterface {
  id: string;
  type: string;
  toggleType: string;
}

const FLOW_MARKETING_REQUEST_PARAMETER = '?flow=marketing';

@UntilDestroy()
@Component({
  selector: 'tg-marketing-nc-mock-product-configurator',
  templateUrl: 'mock-product-configurator.component.html',
  standalone: true,
  imports: [MessagesModule, ReactiveFormsModule, NgFor, NgIf, MatButton, TranslateModule],
})
export class MockProductConfiguratorComponent implements OnInit, AfterContentChecked {
  @Input() title: string;
  @Input() salesUrl: string;

  MESSAGE_GROUP = 'mock-product-configurator';
  BSS_SYSTEM = 'nc';
  BASIC_CONTENT_PACK_ID = 'TVPK0002';
  mockProductConfiguratorForm: FormGroup;
  omapiFamilyResponse?: OmapiFamily;
  entertainments: OmapiProductInfo[];
  optins: OmapiFamilyOptin[];
  options: OmapiFamilyOption[];
  contentPacks?: OmapiFamilyOption[];

  selectedTier: OmapiFamilyTier;
  selectedAddOns: SelectedAddOnInterface[] = [];
  paxList: string[] = [];
  showLoader = false;
  selectedProductFamily = '';
  mutuallyExclusiveContentPacks: string[] = [];

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  productFamilies = [];

  constructor(
    @Inject('Window') private readonly window: Window,
    private readonly urlService: UrlService,
    private readonly formBuilder: FormBuilder,
    private readonly messageService: MessageService,
    private readonly omapiFamilyService: OmapiFamilyService,
    private readonly cdref: ChangeDetectorRef,
    private readonly pathCategorisationService: PathCategorisationService
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.getCategoryBasedBundle();
  }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  getCategoryBasedBundle() {
    if (this.pathCategorisationService.isBrandTelenetAndCategoryResidential()) {
      this.productFamilies = [
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        { key: 'Connect 5', value: 'connect5' },
      ];
    } else {
      this.productFamilies = [
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        { key: 'Klik', value: 'klik' },
      ];
    }
  }

  onFamilySelection(family: string): void {
    this.selectedProductFamily = family;
    family = family.concat('-').concat(this.BSS_SYSTEM);

    this.clearErrorMessages();
    this.showLoader = true;
    this.omapiFamilyService
      .getFamily(this.MESSAGE_GROUP, family)
      .pipe(untilDestroyed(this))
      .subscribe({
        next: (response: OmapiFamily) => {
          this.omapiFamilyResponse = response;
        },
        error: (error) => {
          if (error) {
            this.omapiFamilyResponse = undefined;
          }
        },
      })
      .add(() => {
        this.showLoader = false;
      });
  }

  onTierSelection(tier: OmapiFamilyTier): void {
    if (tier) {
      this.selectedTier = tier;
      this.resetForm();
      this.setEntertainments();
      this.setOptins();
      this.setOptions();
      this.setPaxList();
    }
  }

  onEntertainmentSelection(entertainment?: OmapiProductInfo): void {
    const selectedtTierId = this.mockProductConfiguratorForm.controls['tier'].value;
    if (entertainment) {
      this.setContentPacks(entertainment, selectedtTierId);
    } else {
      this.contentPacks = undefined;
    }
  }

  onToggleSelection(product: OmapiProduct, event: Event, toggleType: string): void {
    this.setMutuallyExclusiveContentPack(product, (event.target as HTMLInputElement).checked);
    if ((event.target as HTMLInputElement).checked) {
      this.updateSelectedAddons(product, toggleType);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      remove(this.selectedAddOns, (selectedAddOn) => selectedAddOn.id === product.productId);
    }
  }

  onSubmit(): void {
    if (this.mockProductConfiguratorForm.valid) {
      this.clearErrorMessages();
      const soRequestBody = this.getRequestBody();
      this.setRequestJSONAndRedirect(soRequestBody);
    } else {
      this.mockProductConfiguratorForm.markAllAsTouched();
      this.messageService.addMessage(new ErrorMessage(this.MESSAGE_GROUP, 'mock-product-configurator.form-error'));
    }
  }

  isCheckedByDefault(product: OmapiProduct, toggleType: string): boolean {
    if (product.productId === this.BASIC_CONTENT_PACK_ID) {
      this.updateSelectedAddons(product, toggleType);
      return true;
    } else {
      return false;
    }
  }

  private updateSelectedAddons(product: OmapiProduct, toggleType: string): void {
    const selectedAddOn = {
      id: product.productId,
      type: product.productType,
      toggleType: toggleType,
    } as SelectedAddOnInterface;
    const findObj = this.selectedAddOns.find((addOn: SelectedAddOnInterface) => addOn.id === selectedAddOn.id);
    if (!findObj) {
      this.selectedAddOns.push(selectedAddOn);
    }
  }

  private resetForm(): void {
    this.selectedAddOns = [];
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.contentPacks = undefined;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.optins = undefined;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.options = undefined;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.entertainments = undefined;
    this.mockProductConfiguratorForm.controls['entertainment'].reset();
  }

  private setPaxList(): void {
    const paxSet = new Set<string>();
    this.selectedTier?.mobile?.forEach((product) => {
      const constituents = product?.productInfo?.productConstituents;
      if (product.omapiId === 'BUND112' || product.omapiId === 'BUND111') {
        paxSet.add('NA');
      } else {
        if (constituents) {
          constituents.forEach((constituent) => {
            if (constituent.type === 'mobile_line') {
              paxSet.add(constituent.maxCount);
            }
          });
        }
      }
    });
    this.paxList = [...paxSet];
  }

  private buildForm(): void {
    this.mockProductConfiguratorForm = this.formBuilder.group({
      tier: [''],
      mobilePAX: ['', [Validators.required, Validators.min(1), Validators.max(10)]],
      entertainment: [''],
      locationId: ['', [Validators.pattern(RegexConstants.NUMBER_ONLY_REGEX)]],
    });
  }

  private setEntertainments(): void {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.entertainments = this.selectedTier.entertainment;
  }

  private setContentPacks(entertainment: OmapiProductInfo, selectedTier: string): void {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const currentTier = this.omapiFamilyResponse?.tiers?.find((tier) => tier?.productInfo?.productId === selectedTier);
    if (currentTier?.options) {
      this.contentPacks = currentTier.options?.filter((option: OmapiFamilyOption) => {
        if (option.type === 'entertainment') {
          if (option.parents) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return option.parents.includes(entertainment.productInfo.productId);
          } else {
            return option;
          }
        }

        return undefined;
      });
    }
  }

  private setOptins(): void {
    this.optins = uniqBy(this.selectedTier.optins, 'omapiId');
  }

  private setOptions(): void {
    this.options =
      this.selectedTier?.options?.filter((option: OmapiFamilyOption) => {
        return option?.type !== 'entertainment';
      }) || [];
  }

  private getRequestBody(): MockCreateSalesOrderRequest {
    const selectedMobileLine = this.getSelectedMobileLine();
    const mockCreateSalesOrderRequest = {
      offers: [
        {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          id: selectedMobileLine.productInfo.productId,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          type: selectedMobileLine.productInfo.productType,
        },
      ],
    } as MockCreateSalesOrderRequest;

    if (!isEmpty(this.selectedAddOns) || this.isBusinessCustomer()) {
      this.addSelectedAddOns(mockCreateSalesOrderRequest);
    }

    return mockCreateSalesOrderRequest;
  }

  private getSelectedMobileLine(): OmapiProductInfo {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const mobilePAX = this.mockProductConfiguratorForm.controls.mobilePAX.value;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.selectedTier.mobile.find((product) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const constituents = product.productInfo.productConstituents;
      if (mobilePAX === 'NA' && (product.omapiId === 'BUND111' || product.omapiId === 'BUND112')) {
        return product;
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return constituents.some((constituent) => {
        return constituent.type === 'mobile_line' && constituent.maxCount === mobilePAX;
      });
    });
  }

  private setRequestJSONAndRedirect(soRequestBody: MockCreateSalesOrderRequest, action?: string): void {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const libng = this.window['JsonUrl'] && this.window['JsonUrl']('lzma');
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const _self = this;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const locationId = this.mockProductConfiguratorForm.controls.locationId.value;

    if (locationId) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      libng.compress(soRequestBody).then(function (compressedJSON) {
        let redirectUrl = '';
        if (action) {
          redirectUrl =
            _self.salesUrl +
            FLOW_MARKETING_REQUEST_PARAMETER +
            '&installationLocationId=' +
            locationId +
            '&action=' +
            action +
            '&sdata=' +
            compressedJSON;
          _self.urlService.redirectTo(redirectUrl);
        } else {
          redirectUrl =
            _self.salesUrl +
            FLOW_MARKETING_REQUEST_PARAMETER +
            '&installationLocationId=' +
            locationId +
            '&sdata=' +
            compressedJSON;
          _self.urlService.redirectTo(redirectUrl);
        }
      });
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      libng.compress(soRequestBody).then(function (compressedJSON) {
        let redirectUrl = '';
        if (action) {
          redirectUrl =
            _self.salesUrl + FLOW_MARKETING_REQUEST_PARAMETER + '&action=' + action + '&sdata=' + compressedJSON;
          _self.urlService.redirectTo(redirectUrl);
        } else {
          redirectUrl = _self.salesUrl + FLOW_MARKETING_REQUEST_PARAMETER + '&sdata=' + compressedJSON;
          _self.urlService.redirectTo(redirectUrl);
        }
      });
    }
  }

  private clearErrorMessages(): void {
    this.messageService.clearErrorMessages(this.MESSAGE_GROUP);
  }

  public isConnect5(): boolean {
    return this.selectedProductFamily === 'connect5';
  }

  private setMutuallyExclusiveContentPack(selectedContentPack: OmapiProduct, checked: boolean): void {
    const result = selectedContentPack?.getCharValue(CharsEnum.MUTUALLY_EXCLUSIVE_TO_CONTENT_PACK);
    if (result.length) {
      if (checked) {
        this.mutuallyExclusiveContentPacks.push(...result);
      } else {
        this.removeMutuallyExclusiveContentPacks(result);
      }
    }
  }

  private removeMutuallyExclusiveContentPacks(values: string[]): void {
    values.forEach((item) => {
      const index = this.mutuallyExclusiveContentPacks.findIndex((x) => x === item);
      this.mutuallyExclusiveContentPacks.splice(index, 1);
    });
  }

  isDisabled(contentPack: OmapiProduct): boolean {
    return includes(this.mutuallyExclusiveContentPacks, contentPack.productId);
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  isChecked(contentPack: OmapiProduct): boolean {
    if (
      includes(this.mutuallyExclusiveContentPacks, contentPack.productId) &&
      this.selectedAddOns.some((x) => x.id === contentPack.productId)
    ) {
      remove(this.selectedAddOns, (selectedAddOn) => selectedAddOn.id === contentPack.productId);
      this.removeMutuallyExclusiveContentPacks(contentPack?.getCharValue(CharsEnum.MUTUALLY_EXCLUSIVE_TO_CONTENT_PACK));
      return false;
    }
  }

  registration(action: string) {
    if (this.mockProductConfiguratorForm.valid) {
      this.clearErrorMessages();
      const soRequestBody = this.getRequestBody();
      this.setRequestJSONAndRedirect(soRequestBody, action);
    } else {
      this.mockProductConfiguratorForm.markAllAsTouched();
      this.messageService.addMessage(new ErrorMessage(this.MESSAGE_GROUP, 'mock-product-configurator.form-error'));
    }
  }

  private isBusinessCustomer(): boolean {
    const customerCategory = this.pathCategorisationService.getCustomerCategory();
    return customerCategory === CustomerCategoryEnum.BUSINESS;
  }

  private addSelectedAddOns(mockCreateSalesOrderRequest: MockCreateSalesOrderRequest) {
    const offerProduct = first(mockCreateSalesOrderRequest.offers);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    offerProduct.offers = [];
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const selectedEntertainment = this.selectedTier.entertainment
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      .find(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        (product) => product.productInfo.productId === this.mockProductConfiguratorForm.controls.entertainment.value
      );
    if (selectedEntertainment) {
      const offer = {} as MockCreateSalesOrderRequestBody;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      offer.id = selectedEntertainment.productInfo.productId;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      offer.type = selectedEntertainment.productInfo.productType;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      offerProduct.offers.push(offer);
    }

    if (!isEmpty(this.selectedAddOns)) {
      this.selectedAddOns.forEach((selectedAddOn) => {
        if (selectedAddOn.toggleType === 'contentPack') {
          const contentPack = {} as MockCreateSalesOrderRequestBody;
          contentPack.id = selectedAddOn.id;
          contentPack.type = selectedAddOn.type;

          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          const entertainmentOffer = offerProduct.offers.find(
            (offer) =>
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              offer.id === selectedEntertainment.productInfo.productId
          );
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          if (isEmpty(entertainmentOffer.offers)) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            entertainmentOffer.offers = [];
          }
          if (selectedAddOn.id !== this.BASIC_CONTENT_PACK_ID) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            entertainmentOffer.offers.push(contentPack);
          }
        } else {
          const offer = {} as MockCreateSalesOrderRequestBody;
          offer.id = selectedAddOn.id;
          offer.type = selectedAddOn.type;
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          offerProduct.offers.push(offer);
        }
      });
    }
  }
}
