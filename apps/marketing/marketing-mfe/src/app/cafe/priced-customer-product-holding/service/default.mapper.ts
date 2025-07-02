import { AbstractMapper } from './abstract.mapper';
import { Product } from '../../../http/cafe/product-holding/models/product.model';
import { Label } from '../model/priced-cph-data.model';
import { Injectable } from '@angular/core';
import { TranslateHelperService } from './translate-helper.service';

@Injectable({
  providedIn: 'root',
})
export class DefaultMapper extends AbstractMapper {
  constructor(private readonly translateHelperService: TranslateHelperService) {
    super('');
  }

  protected getKey(label: Label): string {
    return label?.args?.['itemName'] || '';
  }

  protected getLabel(product: Product, _parent: Product): Label {
    const labelKey = this.translateHelperService.getLabel('item');

    return { key: labelKey, args: { itemName: product?.productInfo?.name ?? 'unknown' } };
  }
}
