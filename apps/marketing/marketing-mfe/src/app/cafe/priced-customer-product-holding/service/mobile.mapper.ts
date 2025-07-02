import { AbstractMapper } from './abstract.mapper';
import { Injectable } from '@angular/core';
import { Product } from '../../../http/cafe/product-holding/models/product.model';
import { Label } from '../model/priced-cph-data.model';
import { SpecificationInterface } from '@telenet/ng-lib-omapi';

@Injectable({
  providedIn: 'root',
})
export class MobileMapper extends AbstractMapper {
  static readonly ICON_MOBILE = 'icon-mobile';
  private readonly _key = 'ng.product-finder.step-card-offer.mobile-data-';
  private readonly _gbDisplay: string = ' GB';
  private readonly _unlimitedDisplay: string = 'Unlimited';
  private readonly _mobileInternetVolume: string = 'spec.mobileinternet.volume.cap';
  private readonly _mobileInternet: string = 'MOBILE_INTERNET';

  constructor() {
    super(MobileMapper.ICON_MOBILE);
  }

  protected getLabel(product: Product, parent: Product): Label {
    let key = this._key;
    let args;
    let maxMobileLines;
    const hasParent = !parent ? true : false;

    switch (true) {
      case this.isWigo(parent):
        key += 'wigo';
        maxMobileLines = this.getMaxMobileLines(parent);
        args = { data: this.getDataForParent(product, parent), simCards: maxMobileLines };
        key += maxMobileLines > 1 ? '.multiple-sim-cards' : '.single-sim-cards';

        break;
      case this.isConnect5(parent):
        key += 'one';
        break;
      case product.isPVV():
        key += 'pvv';
        break;
      case hasParent:
        args = { data: this.getData(product) };
        key += 'standalone';
        break;
    }

    return { key: key, args: args };
  }

  private getDataForParent(product: Product, parent: Product): string {
    return product.productInfo && product.productInfo.hasUnlimitedInternetBasedOnLabelKey()
      ? this._unlimitedDisplay
      : parent?.productInfo?.getSharedMobileData() + this._gbDisplay;
  }

  private getData(product: Product): string {
    const spec: SpecificationInterface | undefined =
      product.productInfo &&
      product.productInfo.getServiceSpecificationByLabelKey(this._mobileInternetVolume, this._mobileInternet);

    return (spec && spec.value + ' ' + spec.unit) ?? '';
  }

  private isWigo(product: Product): boolean {
    return product?.productInfo?.isWigo() ?? false;
  }

  private isConnect5(product: Product): boolean {
    return product?.productInfo?.isConnect5() ?? false;
  }

  private getMaxMobileLines(product: Product): number {
    return Number(product?.productInfo?.getMaxMobileLines());
  }
}
