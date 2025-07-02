import { CafeRawCustomerproductholdingOptionModel } from './cafe-raw-customerproductholding-option.model';
import { CafeRawCustomerproductholdingAddressModel } from './cafe-raw-customerproductholding-address.model';
import { CafeRawCustomerproductholdingRawomapiProductModel } from './cafe-raw-customerproductholding-rawomapi-product.model';
import { OmapiProductType } from '@telenet/ng-lib-omapi';

export class CafeRawCustomerproductholdingProductModel {
  identifier: string;
  customerproductid: string;
  accountnumber: string;
  label: string;
  rateclassid: string;
  rateclassdescription: string;
  specurl: string;
  products: CafeRawCustomerproductholdingProductModel[];
  options: CafeRawCustomerproductholdingOptionModel[];
  address: CafeRawCustomerproductholdingAddressModel;
  rawOmapi: CafeRawCustomerproductholdingRawomapiProductModel;

  isProductTypeBundle?(): boolean {
    return this.rawOmapi && this.rawOmapi.product && this.rawOmapi.product.producttype === OmapiProductType.BUNDLE;
  }
}
