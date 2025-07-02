import { AbstractMapper } from './abstract.mapper';
import { Product } from '../../../http/cafe/product-holding/models/product.model';
import { Label } from '../model/priced-cph-data.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataSimMapper extends AbstractMapper {
  private readonly _key = 'ng.product-finder.step-card-offer.mobile-data-sim';
  constructor() {
    super('icon-sim-card-data');
  }

  protected getLabel(_product: Product, _parent: Product): Label {
    return { key: this._key };
  }
}
