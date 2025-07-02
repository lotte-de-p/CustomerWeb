import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorMessage, MessageService, MessagesModule } from '@telenet/ng-lib-message';
import {
  CharsEnum,
  KlikMobileData,
  KlikOmapiFamily,
  KlikOmapiFamilyOption,
  KlikOmapiProduct,
  KlikOptinPax,
  OmapiFamilyService,
  OmapiMobileDataKey,
  OmapiProduct,
  RawOmapiConstituentInterface,
} from '@telenet/ng-lib-omapi';
import { UrlService } from '@telenet/ng-lib-page';
import { first, includes, isEmpty, remove } from 'lodash-es';
import {
  MockCreateSalesOrderRequest,
  MockCreateSalesOrderRequestBody,
} from '../mock-marketing/models/mock-create-sales-order-request.model';
import { SelectedAddOnInterface } from '../mock-product-configurator/mock-product-configurator.component';
import { RegexConstants } from '@telenet/ng-lib-form';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslateModule } from '@ngx-translate/core';
import { MatButton } from '@angular/material/button';
import { NgFor, NgIf } from '@angular/common';

export interface TierInfo {
  tierName: OmapiMobileDataKey;
  id: string;
  count?: string;
  productInfo?: OmapiProduct;
}

@UntilDestroy()
@Component({
  selector: 'tg-marketing-nc-klik-mock-product-configurator',
  templateUrl: './klik-mock-product-configurator.component.html',
  standalone: true,
  imports: [MessagesModule, ReactiveFormsModule, NgIf, NgFor, MatButton, TranslateModule],
})
export class KlikMockProductConfiguratorComponent implements OnInit {
  @Input() title: string;
  @Input() salesUrl: string;
  MESSAGE_GROUP = 'mock-product-configurator';
  klikMockProductConfiguratorForm: FormGroup;
  showLoader = false;
  omapiFamilyResponse?: KlikOmapiFamily;
  paxList: string[] = [];
  tiers: KlikMobileData[] = [];
  entertainments: KlikOmapiProduct[] = [];
  contentPacks: KlikOmapiFamilyOption[] = [];
  optins: KlikOptinPax[] = [];
  otherOptins: KlikOmapiProduct[] = [];
  tiersInfo: TierInfo[] = [];
  mutuallyExclusiveContentPacks: string[] = [];
  selectedAddOns: SelectedAddOnInterface[] = [];
  selectedTier: KlikMobileData;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly omapiFamilyService: OmapiFamilyService,
    private readonly messageService: MessageService,
    @Inject('Window') private readonly window: Window,
    private readonly urlService: UrlService
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.getKlikFamilyDetails();
  }

  private buildForm(): void {
    this.klikMockProductConfiguratorForm = this.formBuilder.group({
      mobilePAX: ['', [Validators.required, Validators.min(1), Validators.max(10)]],
      tier: ['', [Validators.required]],
      entertainment: [''],
      locationId: ['', [Validators.pattern(RegexConstants.NUMBER_ONLY_REGEX)]],
    });
  }

  private getKlikFamilyDetails(): void {
    this.omapiFamilyService
      .getKlikFamily(this.MESSAGE_GROUP, 'klik-nc')
      .pipe(untilDestroyed(this))
      .subscribe({
        next: (response: KlikOmapiFamily) => {
          this.omapiFamilyResponse = response;
          this.setPaxList(this.omapiFamilyResponse);
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

  private setPaxList(omapiFamilyResponse: KlikOmapiFamily): void {
    const paxSet = new Set<string>();
    const mobileProduct = omapiFamilyResponse.products.find((product) => product.type === 'mobile');
    mobileProduct?.tiers.forEach((tier) => {
      tier.products.forEach((product) => {
        product.mobileData?.forEach((mobileData) => {
          if (mobileData.omapiId === 'BUND112' || mobileData.omapiId === 'BUND111') {
            paxSet.add('NA');
          } else {
            const constituents = mobileData.productInfo?.productConstituents;
            if (constituents) {
              this.tiersInfo.push(
                ...constituents
                  .filter((constituent: RawOmapiConstituentInterface) => constituent.type === 'mobile_line')
                  .map((constituent: RawOmapiConstituentInterface) => {
                    paxSet.add(constituent.maxCount);
                    return {
                      count: constituent.maxCount,
                      tierName: mobileData.key,
                      id: mobileData.omapiId,
                      productInfo: mobileData.productInfo,
                    } as TierInfo;
                  })
              );
            }
          }
        });
      });
    });
    this.paxList = [...paxSet];
  }

  onPaxSelection(mobilePax: string) {
    this.resetForm();
    this.setTierInfo(mobilePax);
    this.setEntertainments();
    this.setOtherOptins();
    this.setOptins();
  }

  private setTierInfo(mobilePax: string): void {
    if (!isEmpty(this.tiersInfo)) {
      const tiers = this.tiersInfo.filter((tier) => tier.count === mobilePax);
      tiers.forEach((tier) => {
        this.tiers.push({ key: tier.tierName, omapiId: tier.id, productInfo: tier.productInfo });
      });
    }
  }

  private resetForm(): void {
    this.tiers = [];
    this.selectedAddOns = [];
    this.contentPacks = [];
    this.optins = [];
    this.otherOptins = [];
    this.entertainments = [];
    this.klikMockProductConfiguratorForm.controls['tier'].reset();
    this.klikMockProductConfiguratorForm.controls['entertainment'].reset();
  }

  private setEntertainments(): void {
    const mobileProduct = this.omapiFamilyResponse?.products?.find((product) => product.type === 'entertainment');
    mobileProduct?.tiers?.forEach((tier) => {
      tier?.products?.forEach((product) => {
        this.entertainments.push(product);
      });
    });
  }

  private setOtherOptins(): void {
    const otherOptins = this.omapiFamilyResponse?.products?.find((product) => product?.type === 'fixedTelephony');
    otherOptins?.tiers.forEach((tier) => {
      tier?.products?.forEach((product) => {
        this.otherOptins.push(product);
      });
    });
  }

  onEntertainmentSelection(entertainment?: KlikOmapiProduct): void {
    if (entertainment) {
      this.setContentPacks();
    } else {
      this.contentPacks = [];
    }
  }

  private setContentPacks(): void {
    this.contentPacks = this.omapiFamilyResponse?.options || [];
  }

  private setOptins(): void {
    const selectedTierId = this.omapiFamilyResponse?.tiers[0]?.omapiId;
    const optins = this.omapiFamilyResponse?.optins;
    optins?.forEach((optin) => {
      optin?.tiers?.forEach((tier) => {
        const pax: KlikOptinPax | undefined = tier?.pax.find((px) => px?.omapiId === selectedTierId);
        if (pax) this.optins.push(pax);
      });
    });
  }

  onTierSelection(tier: KlikMobileData): void {
    this.selectedTier = tier;
  }

  isChecked(contentPack?: OmapiProduct): boolean {
    if (
      includes(this.mutuallyExclusiveContentPacks, contentPack?.productId) &&
      this.selectedAddOns.some((x) => x.id === contentPack?.productId)
    ) {
      remove(this.selectedAddOns, (selectedAddOn) => selectedAddOn.id === contentPack?.productId);
      this.removeMutuallyExclusiveContentPacks(
        contentPack?.getCharValue(CharsEnum.MUTUALLY_EXCLUSIVE_TO_CONTENT_PACK) || []
      );
      return false;
    }
    return true;
  }

  isDisabled(contentPack: OmapiProduct): boolean {
    return includes(this.mutuallyExclusiveContentPacks, contentPack.productId);
  }

  onToggleSelection(product: OmapiProduct, event: Event, toggleType: string): void {
    this.setMutuallyExclusiveContentPack(product, event.target?.['checked']);
    if (event.target?.['checked']) {
      this.updateSelectedAddons(product, toggleType);
    } else {
      remove(this.selectedAddOns, (selectedAddOn) => selectedAddOn.id === product.productId);
    }
  }

  private setMutuallyExclusiveContentPack(selectedContentPack: OmapiProduct, checked: boolean): void {
    const result = selectedContentPack?.getCharValue(CharsEnum.MUTUALLY_EXCLUSIVE_TO_CONTENT_PACK);
    if (result?.length) {
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

  private updateSelectedAddons(product: OmapiProduct, toggleType: string): void {
    const selectedAddOn = {
      id: product?.productId,
      type: product?.productType,
      toggleType: toggleType,
    } as SelectedAddOnInterface;
    const findObj = this.selectedAddOns.find((addOn: SelectedAddOnInterface) => addOn.id === selectedAddOn.id);
    if (!findObj) {
      this.selectedAddOns.push(selectedAddOn);
    }
  }

  onSubmit(): void {
    if (this.klikMockProductConfiguratorForm.valid) {
      this.clearErrorMessages();
      const soRequestBody = this.getRequestBody();
      this.setRequestJSONAndRedirect(soRequestBody);
    } else {
      this.klikMockProductConfiguratorForm.markAllAsTouched();
      this.messageService.addMessage(new ErrorMessage(this.MESSAGE_GROUP, 'mock-product-configurator.form-error'));
    }
  }

  private clearErrorMessages(): void {
    this.messageService.clearErrorMessages(this.MESSAGE_GROUP);
  }

  private getRequestBody(): MockCreateSalesOrderRequest {
    const mockCreateSalesOrderRequest = {
      offers: [
        {
          id: this.selectedTier?.productInfo?.productId,
          type: this.selectedTier?.productInfo?.productType,
        },
      ],
    } as MockCreateSalesOrderRequest;

    this.addSelectedAddOns(mockCreateSalesOrderRequest);
    return mockCreateSalesOrderRequest;
  }

  private addSelectedAddOns(mockCreateSalesOrderRequest: MockCreateSalesOrderRequest) {
    const offerProduct = first(mockCreateSalesOrderRequest.offers) ?? ({} as MockCreateSalesOrderRequestBody);
    offerProduct.offers = [];
    const selectedEntertainment = this.entertainments.find(
      (product) =>
        product.productInfo?.productId === this.klikMockProductConfiguratorForm.controls['entertainment'].value
    );
    if (selectedEntertainment) {
      const offer = {
        id: selectedEntertainment.productInfo?.productId,
        type: selectedEntertainment.productInfo?.productType,
      } as MockCreateSalesOrderRequestBody;
      offerProduct.offers.push(offer);
    }

    if (!isEmpty(this.selectedAddOns)) {
      this.selectedAddOns.forEach((selectedAddOn) => {
        if (selectedAddOn.toggleType === 'contentPack') {
          const contentPack = {
            id: selectedAddOn.id,
            type: selectedAddOn.type,
          } as MockCreateSalesOrderRequestBody;
          const entertainmentOffer =
            offerProduct.offers.find((offer) => offer.id === selectedEntertainment?.productInfo?.productId) ??
            ({} as MockCreateSalesOrderRequestBody);
          if (isEmpty(entertainmentOffer.offers)) {
            entertainmentOffer.offers = [];
          }
          entertainmentOffer.offers.push(contentPack);
        } else {
          const offer = {} as MockCreateSalesOrderRequestBody;
          offer.id = selectedAddOn.id;
          offer.type = selectedAddOn.type;
          offerProduct.offers.push(offer);
        }
      });
    }
  }

  private setRequestJSONAndRedirect(soRequestBody: MockCreateSalesOrderRequest, action?: string): void {
    const libng = this.window['JsonUrl'] && this.window['JsonUrl']('lzma');
    const locationId = this.klikMockProductConfiguratorForm.controls['locationId'].value;
    let redirectUrl = '';
    const innerUrlService = this.urlService;
    let baseUrl = action ? `${this.salesUrl}?flow=marketing&action=${action}` : `${this.salesUrl}?flow=marketing`;
    baseUrl = locationId ? `${baseUrl}&installationLocationId=${locationId}` : baseUrl;
    libng?.compress(soRequestBody).then(function (compressedJSON: string) {
      redirectUrl = `${baseUrl}&sdata=${compressedJSON}`;
      innerUrlService.redirectTo(redirectUrl);
    });
  }

  registration(action: string) {
    if (this.klikMockProductConfiguratorForm.valid) {
      this.clearErrorMessages();
      const soRequestBody = this.getRequestBody();
      this.setRequestJSONAndRedirect(soRequestBody, action);
    } else {
      this.klikMockProductConfiguratorForm.markAllAsTouched();
      this.messageService.addMessage(new ErrorMessage(this.MESSAGE_GROUP, 'mock-product-configurator.form-error'));
    }
  }

  isPresentInAddOns(product: OmapiProduct): boolean {
    return this.selectedAddOns.some((addOn: SelectedAddOnInterface) => addOn?.id === product?.productId);
  }
}
