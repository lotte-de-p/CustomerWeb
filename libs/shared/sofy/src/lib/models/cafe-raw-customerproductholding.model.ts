import { OmapiProductType } from '@telenet/ng-lib-omapi';
import { SofyAddress } from './sofy-address';
import { CafeRawCustomerproductholdingOptionModel } from './cafe-raw-customerproductholding-option.model';

export class CafeRawCustomerproductholdingModel {
  identifier: string;
  customerproductid: string;
  accountnumber: string;
  label: string;
  rateclassid: string;
  rateclassdescription: string;
  specurl: string;
  products: CafeRawCustomerproductholdingModel[];
  options: CafeRawCustomerproductholdingOptionModel[];
  address: unknown | SofyAddress;
  rawOmapi: CafeRawCustomerproductholdingRawomapiProductModel;

  isProductTypeBundle(): boolean {
    return OmapiProductType.BUNDLE === this.rawOmapi?.product?.producttype;
  }
}

export class CafeRawCustomerproductholdingRawomapiProductModel {
  product: CafeRawCustomerproductholdingRawomapiModel;
}

export class CafeRawCustomerproductholdingRawomapiModel {
  productid: string;
  externalProductCode: string;
  labelkey: string;
  visible: boolean;
  family: string;
  salesofferingid: string;
  producttype: string;
  weight: number;
  apps: unknown[];
  services: unknown[];
  characteristics: unknown;
  customercategories: string[];
  category: string[];
  subcategory: unknown;
  localizedcontent: unknown[];
  shortdescription: unknown;
  rates: unknown[];
  visibilityrules: unknown;
  unlimited: boolean;
  priceType: string;
}
