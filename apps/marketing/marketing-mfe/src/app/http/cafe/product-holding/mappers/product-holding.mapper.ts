import { Injectable } from '@angular/core';
import { MapperInterface } from '@telenet/ng-lib-shared';
import { ProductHolding } from '../models/product-holding.model';
import { RawProductInterface } from '../interfaces/raw-product-holding.interface';
import { ProductMapper } from './product.mapper';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductHoldingMapper
  implements MapperInterface<{ customerproductholding: RawProductInterface[] }, ProductHolding>
{
  constructor(private readonly productMapper: ProductMapper) {}

  toModel(data: { customerproductholding: RawProductInterface[] }, _httpStatus?: number): ProductHolding {
    return this.createCustomerProductHoldings(data.customerproductholding);
  }

  private createCustomerProductHoldings(rawProductHolding: RawProductInterface[]): ProductHolding {
    const productHolding = new ProductHolding();
    productHolding.products = this.createProducts(rawProductHolding);
    return productHolding;
  }

  private createProducts(rawProductHolding: RawProductInterface[]): Product[] {
    const products: Product[] = [];
    rawProductHolding.forEach((rawProduct) => {
      products.push(this.productMapper.toModel(rawProduct));
    });
    return products;
  }
}
