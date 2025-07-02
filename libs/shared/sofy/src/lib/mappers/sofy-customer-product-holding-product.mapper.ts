import { Injectable } from '@angular/core';
import { SofyCustomerProductHoldingProduct } from '../models/sofy-customer-product-holding-product';
import { CafeRawCustomerproductholdingModel } from '../models/cafe-raw-customerproductholding.model';
import { map } from 'lodash-es';
import { CafeRawCustomerproductholdingOptionModel } from '../models/cafe-raw-customerproductholding-option.model';
import { SofyAddress } from '../models/sofy-address';

@Injectable({
  providedIn: 'root',
})
export class SofyCustomerProductHoldingProductMapper {
  public mapToSofyCustomerProductHoldingProduct(
    rawProductHoldings: CafeRawCustomerproductholdingModel[]
  ): SofyCustomerProductHoldingProduct[] {
    return map(rawProductHoldings, (rawProductHolding) => {
      const sofyCustomerProductHoldingProduct = new SofyCustomerProductHoldingProduct();
      sofyCustomerProductHoldingProduct.identifier = rawProductHolding.identifier;
      sofyCustomerProductHoldingProduct.specurl = rawProductHolding.specurl;
      sofyCustomerProductHoldingProduct.address = rawProductHolding.address as SofyAddress;
      sofyCustomerProductHoldingProduct.products = this.mapToSofyCustomerProductHoldingProduct(
        rawProductHolding.products
      );
      sofyCustomerProductHoldingProduct.options = this.mapOptions(rawProductHolding.options);

      return sofyCustomerProductHoldingProduct;
    });
  }

  private mapOptions(options: CafeRawCustomerproductholdingOptionModel[]): SofyCustomerProductHoldingProduct[] {
    return map(options, (rawProductHoldingOption) => {
      const sofyCustomerProductHoldingOption = new SofyCustomerProductHoldingProduct();
      sofyCustomerProductHoldingOption.specurl = rawProductHoldingOption.specurl;
      return sofyCustomerProductHoldingOption;
    });
  }
}
