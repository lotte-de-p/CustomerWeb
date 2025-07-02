import { AbstractMapper } from './abstract.mapper';
import { Label } from '../model/priced-cph-data.model';
import { Injectable } from '@angular/core';
import { Product } from '../../../http/cafe/product-holding/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class DigitalTvMapper extends AbstractMapper {
  static readonly ICON_DTV = 'icon-tv';
  private readonly _key = 'ng.product-finder.step-card-offer.dtv';

  constructor() {
    super(DigitalTvMapper.ICON_DTV);
  }

  protected getLabel(product: Product, parent?: Product): Label {
    let key = this._key;

    switch (true) {
      case product.isFlow():
        key += '-flow';
        break;
      case product.isIconic():
        key += '-terugkijk-play';
        break;
      case product.isYugoTv():
        key += '-yugo';
        break;
      case !parent:
        key += '-standalone';
        break;
      case this.isHighTierWigo(parent):
        key += '-terugkijk';
        break;
    }

    return { key: key };
  }

  private isHighTierWigo(product?: Product): boolean {
    return Boolean(product?.productInfo?.isWigo() && product?.productInfo?.isHighTier());
  }
}
