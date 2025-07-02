import { MapperInterface } from './mapper.interface';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { Product } from '../../../http/cafe/product-holding/models/product.model';
import { Label, PricedCphSpec } from '../model/priced-cph-data.model';

export abstract class AbstractMapper implements MapperInterface {
  private static readonly MAX_WEIGHT = 999;
  protected constructor(private readonly icon: string) {}

  map(product?: Product, parent?: Product): PricedCphSpec | undefined {
    if (!product) {
      return undefined;
    }

    const label = this.getLabel(product, parent);
    return {
      key: this.getKey(label),
      label: label,
      amount: 1,
      icon: this.icon,
      weight: this.getWeight(product?.productInfo),
    };
  }

  protected getKey(label: Label) {
    return label.key;
  }

  protected getWeight(omapiProduct?: OmapiProduct): number {
    return omapiProduct && omapiProduct.weight ? omapiProduct.weight : AbstractMapper.MAX_WEIGHT;
  }

  protected abstract getLabel(product?: Product, parent?: Product): Label;
}
