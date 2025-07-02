import { MapperInterface } from '@telenet/ng-lib-shared';
import { CustomerProductHolding } from '../../../entities/product-finder/customerproductholding/customer-product-holding.interface';
import { RawCustomerProductHoldingResult } from './raw-customer-product-holding-result.interface';
import { RawCustomerProductHolding } from './raw-customer-product-holding.interface';
import { CustomerProductHoldingAddress } from '../../../entities/product-finder/customerproductholding/customer-product-holding-address.interface';
import { RawCustomerProductHoldingAddress } from './raw-customer-product-holding-address.interface';
import { RawCustomerProductHoldingProduct } from './raw-customer-product-holding-product.interface';
import { CustomerProductHoldingProduct } from '../../../entities/product-finder/customerproductholding/customer-product-holding-product.interface';
import { RawCustomerProductHoldingOption } from './raw-customer-product-holding-option.interface';
import { CustomerProductHoldingOption } from '../../../entities/product-finder/customerproductholding/customer-product-holding-option.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerProductHoldingMapper
  implements MapperInterface<RawCustomerProductHoldingResult, CustomerProductHolding[]>
{
  toModel(rawCustomerProductHoldingResult: RawCustomerProductHoldingResult): CustomerProductHolding[] {
    return rawCustomerProductHoldingResult.customerproductholding.map(
      (rawCustomerProductHolding: RawCustomerProductHolding) => ({
        identifier: rawCustomerProductHolding.identifier,
        specUrl: rawCustomerProductHolding.specurl,
        address: this.mapToCustomerProductHoldingAddress(rawCustomerProductHolding.address),
        products: this.mapToCustomerProductHoldingProducts(rawCustomerProductHolding.products),
        options: this.mapToCustomerProductHoldingOptions(rawCustomerProductHolding.options),
      })
    );
  }

  mapToCustomerProductHoldingAddress(
    rawCustomerProductHoldingAddress: RawCustomerProductHoldingAddress
  ): CustomerProductHoldingAddress {
    return {
      addressId: rawCustomerProductHoldingAddress.addressid,
      municipality: rawCustomerProductHoldingAddress.municipality,
      postalCode: rawCustomerProductHoldingAddress.postalcode,
      street: rawCustomerProductHoldingAddress.street,
      houseNr: rawCustomerProductHoldingAddress.housenr,
      country: rawCustomerProductHoldingAddress.country,
    };
  }

  mapToCustomerProductHoldingProducts(
    rawCustomerProductHoldingProducts: RawCustomerProductHoldingProduct[]
  ): CustomerProductHoldingProduct[] {
    return rawCustomerProductHoldingProducts.map(
      (rawCustomerProductHoldingProducts: RawCustomerProductHoldingProduct) =>
        this.mapToCustomerProductHoldingProduct(rawCustomerProductHoldingProducts)
    );
  }

  mapToCustomerProductHoldingProduct(
    rawCustomerProductHoldingProduct: RawCustomerProductHoldingProduct
  ): CustomerProductHoldingProduct {
    return {
      identifier: rawCustomerProductHoldingProduct.identifier,
      specUrl: rawCustomerProductHoldingProduct.specurl,
      address: rawCustomerProductHoldingProduct.address
        ? this.mapToCustomerProductHoldingAddress(rawCustomerProductHoldingProduct.address)
        : undefined,
      products: this.mapToCustomerProductHoldingProducts(rawCustomerProductHoldingProduct.products),
      options: this.mapToCustomerProductHoldingOptions(rawCustomerProductHoldingProduct.options),
    };
  }

  mapToCustomerProductHoldingOptions(
    rawCustomerProductHoldingOptions: RawCustomerProductHoldingOption[]
  ): CustomerProductHoldingOption[] {
    return rawCustomerProductHoldingOptions.map((rawCustomerProductHoldingOption: RawCustomerProductHoldingOption) => ({
      specUrl: rawCustomerProductHoldingOption.specurl,
    }));
  }
}
