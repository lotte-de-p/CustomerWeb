import { Injectable } from '@angular/core';
import { MapperInterface } from '@telenet/ng-lib-shared';
import { RawProductTypeInterface } from '../../interfaces/raw/raw-product-type.interface';
import { ProductTypeInterface } from '../../interfaces/product/product-type-interface';

@Injectable({
  providedIn: 'root',
})
export class ProductTypeMapper implements MapperInterface<RawProductTypeInterface, ProductTypeInterface> {
  toModel(rawProductTypeInterface: RawProductTypeInterface): ProductTypeInterface {
    const productType = {} as ProductTypeInterface;

    productType.brand = rawProductTypeInterface.brand;

    return productType;
  }
}
