import { AbstractMapper } from './abstract.mapper';
import { Injectable } from '@angular/core';
import { Label } from '../model/priced-cph-data.model';
import { Product } from '../../../http/cafe/product-holding/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class FixedTelMapper extends AbstractMapper {
  static readonly ICON_FIXED_TEL = 'icon-telephone';
  private readonly _key = 'ng.product-finder.step-card-offer.fixed-tel';

  constructor() {
    super(FixedTelMapper.ICON_FIXED_TEL);
  }

  protected getLabel(_product: Product, parent?: Product): Label {
    let key = this._key;
    switch (true) {
      case !parent:
        key += '-standalone';
        break;
      case this.isWigo3p(parent):
        key += '-wigo3P';
        break;
      case this.isWigo4p(parent):
        key += '-wigo4P';
        break;
      case this.isConnect5(parent):
        key += '-one';
        break;
    }
    return { key: key };
  }

  private isWigo4p(product?: Product): boolean {
    return (product?.is4P() && product?.productInfo?.isWigo()) || false;
  }

  private isWigo3p(product?: Product): boolean {
    return (product?.is3P() && product?.productInfo?.isWigo()) || false;
  }

  private isConnect5(product?: Product): boolean {
    return product?.productInfo?.isConnect5() || false;
  }
}
