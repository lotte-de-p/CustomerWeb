import { Injectable } from '@angular/core';
import { MapperInterface } from '@telenet/ng-lib-shared';
import { ProductTypeInterface } from '../../interfaces/products/product-type-interface';
import { RawProductTypeInterface } from '../../interfaces/products/raw-product-type.interface';

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
