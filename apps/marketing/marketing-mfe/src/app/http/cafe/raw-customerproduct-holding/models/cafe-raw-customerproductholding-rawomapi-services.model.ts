import { CafeRawCustomerproductholdingRawomapiServicesSpecificationModel } from './cafe-raw-customerproductholding-rawomapi-services-specification.model';
import { CafeRawCustomerproductholdingRawomapiServicesExperienceModel } from './cafe-raw-customerproductholding-rawomapi-services-experience.model';

export class CafeRawCustomerproductholdingRawomapiServicesModel {
  labelkey: string;
  servicetype: string;
  experience: CafeRawCustomerproductholdingRawomapiServicesExperienceModel;
  weight: number;
  specifications: CafeRawCustomerproductholdingRawomapiServicesSpecificationModel[];
}
