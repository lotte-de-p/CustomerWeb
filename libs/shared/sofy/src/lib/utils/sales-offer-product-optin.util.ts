import { SalesOfferProductOptin } from '../models';
import { ServiceTypeEnum } from '../enums/service-type.enum';

export class SalesOfferProductOptinUtil {
  public static hasMobileInternetOptin(optins: SalesOfferProductOptin[]): boolean {
    return SalesOfferProductOptinUtil.hasOptinWithServiceType(optins, ServiceTypeEnum.MOBILE_INTERNET);
  }

  public static hasOptinWithServiceType(optins: SalesOfferProductOptin[], serviceType: ServiceTypeEnum): boolean {
    return optins && optins.some((optin) => optin.productInfo && optin.productInfo.hasServiceType(serviceType));
  }
}
