import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CharsEnum, OmapiProduct, OmapiProductService } from '@telenet/ng-lib-omapi';
import { includes, isEmpty, remove } from 'lodash-es';
import { SelectedAddOnInterface } from '../../../mock-product-configurator/mock-product-configurator.component';
import { OptionContentPackType, ProductOptionsContentpacks } from '../../models/options-contentpacks.interface';
import { optionsList } from '../../models/options-contentpacks.model';
import { SalesConstants } from '../../../../../http/netcracker/sales/constants/sales.constant';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf, NgFor } from '@angular/common';

@UntilDestroy()
@Component({
  selector: 'tg-marketing-nc-options-contentpack',
  templateUrl: './options-contentpack.component.html',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, NgFor, TranslateModule],
})
export class OptionsContentpackComponent implements OnInit, OnDestroy {
  @Input() parentForm: FormGroup = new FormGroup({});
  @Input() idx: number;
  @Input() epc: string;
  @Input() productType: string;
  allOptionsAndContentpack: OptionContentPackType;
  isEPCPresentInList: boolean;
  options: ProductOptionsContentpacks[] = [];
  contentpacks: ProductOptionsContentpacks[] = [];
  mutuallyExclusiveContentPacks: string[] = [];
  selectedAddOns: SelectedAddOnInterface[] = [];

  optionsArr = new FormArray([]);

  constructor(private readonly omapiProductService: OmapiProductService) {}

  ngOnInit(): void {
    this.parentForm.addControl('options', new FormControl('', []));
    this.allOptionsAndContentpack = optionsList;
    this.isEPCPresentInList = this.showOptionsAndContentpack();
    if (this.showOptionsAndContentpack()) {
      this.getOptionsAndContentpacks();
    }
  }

  ngOnDestroy(): void {
    this.parentForm.removeControl('options');
  }

  isDisabled(contentPack: OmapiProduct): boolean {
    return contentPack && includes(this.mutuallyExclusiveContentPacks, contentPack.productId);
  }

  isChecked(contentPack: OmapiProduct): boolean {
    if (
      contentPack &&
      includes(this.mutuallyExclusiveContentPacks, contentPack.productId) &&
      this.selectedAddOns.some((x) => x.id === contentPack.productId)
    ) {
      remove(this.selectedAddOns, (selectedAddOn) => selectedAddOn.id === contentPack.productId);
      this.removeMutuallyExclusiveContentPacks(contentPack.getCharValue(CharsEnum.MUTUALLY_EXCLUSIVE_TO_CONTENT_PACK));
      return false;
    }
    return true;
  }

  onContentpackSelection(product: OmapiProduct, event: Event): void {
    this.setMutuallyExclusiveContentPack(product, event.target?.['checked']);
    if (event.target?.['checked']) {
      this.updateSelectedAddons(product, undefined);
    } else {
      remove(this.selectedAddOns, (selectedAddOn) => selectedAddOn.id === product.productId);
    }
  }

  onOptionSelection(option: ProductOptionsContentpacks, event: Event): void {
    if (event.target?.['checked']) {
      this.updateSelectedAddons(undefined, option);
    } else {
      remove(this.selectedAddOns, (selectedAddOn) => selectedAddOn.id === option.id);
    }
  }

  private showOptionsAndContentpack(): boolean {
    const product = this.allOptionsAndContentpack[this.productType];
    return product && Object.prototype.hasOwnProperty.call(product, this.epc);
  }

  private getOptionsAndContentpacks(): void {
    const product = this.allOptionsAndContentpack[this.productType];
    this.options = product[this.epc].option;
    this.contentpacks = product[this.epc].contentPack ?? [];
    if (!isEmpty(this.contentpacks)) {
      this.getContentPackDetails();
    }
  }

  private getContentPackDetails(): void {
    this.contentpacks.forEach((contentpack) => {
      this.omapiProductService
        .getProductById(SalesConstants.MESSAGE_GROUP, contentpack.id)
        .pipe(untilDestroyed(this))
        .subscribe((product) => {
          contentpack.productInfo = product;
        });
    });
  }

  private setMutuallyExclusiveContentPack(selectedContentPack: OmapiProduct, checked: boolean): void {
    const result = selectedContentPack.getCharValue(CharsEnum.MUTUALLY_EXCLUSIVE_TO_CONTENT_PACK);
    if (result && result.length > 0) {
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

  private updateSelectedAddons(product?: OmapiProduct, option?: ProductOptionsContentpacks): void {
    const selectedAddOn = {
      id: product !== undefined ? product.productId : option?.id,
      type: product !== undefined ? product.productType : option?.type.toUpperCase(),
    } as SelectedAddOnInterface;
    const findObj = this.selectedAddOns.find((addOn) => addOn.id === selectedAddOn.id);
    if (!findObj) {
      this.selectedAddOns.push(selectedAddOn);
    }
    this.parentForm.controls['options'].setValue(this.selectedAddOns);
  }
}
