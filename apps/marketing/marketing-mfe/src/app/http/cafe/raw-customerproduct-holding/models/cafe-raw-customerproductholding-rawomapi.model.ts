import { CafeRawCustomerproductholdingRawomapiAppModel } from './cafe-raw-customerproductholding-rawomapi-app.model';
import { CafeRawCustomerproductholdingRawomapiServicesModel } from './cafe-raw-customerproductholding-rawomapi-services.model';
import { CafeRawCustomerproductholdingRawomapiCharacteristicsModel } from './cafe-raw-customerproductholding-rawomapi-characteristics.model';
import { CafeRawCustomerproductholdingRawomapiSubcategoryModel } from './cafe-raw-customerproductholding-rawomapi-subcategory.model';
import { CafeRawCustomerproductholdingRawomapiLocalizedContentModel } from './cafe-raw-customerproductholding-rawomapi-localizedContent.model';
import { CafeRawCustomerproductholdingRawomapiShortdescriptionModel } from './cafe-raw-customerproductholding-rawomapi-shortdescription.model';
import { CafeRawCustomerproductholdingRawomapiRateModel } from './cafe-raw-customerproductholding-rawomapi-rate.model';
import { CafeRawCustomerproductholdingRawomapiVisibilityrulesModel } from './cafe-raw-customerproductholding-rawomapi-visibilityrules.model';

export class CafeRawCustomerproductholdingRawomapiModel {
  productid: string;
  externalProductCode: string;
  labelkey: string;
  visible: boolean;
  family: string;
  salesofferingid: string;
  producttype: string;
  weight: number;
  apps: CafeRawCustomerproductholdingRawomapiAppModel[];
  services: CafeRawCustomerproductholdingRawomapiServicesModel[];
  characteristics?: CafeRawCustomerproductholdingRawomapiCharacteristicsModel;
  customercategories: string[];
  category: string[];
  subcategory?: CafeRawCustomerproductholdingRawomapiSubcategoryModel;
  localizedcontent: CafeRawCustomerproductholdingRawomapiLocalizedContentModel[];
  shortdescription?: CafeRawCustomerproductholdingRawomapiShortdescriptionModel;
  rates: CafeRawCustomerproductholdingRawomapiRateModel[];
  visibilityrules?: CafeRawCustomerproductholdingRawomapiVisibilityrulesModel;
  unlimited: boolean;
  priceType: string;
}
