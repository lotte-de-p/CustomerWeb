import { Injectable } from '@angular/core';
import { PathCategorisationService } from '@telenet/ng-lib-page';

enum HardwareCustomerBrandCategoryEnum {
  BASE_BUSINESS_ALIAS = 'baseSoho',
  TELENET_RESIDENTIAL_ALIAS = 'telenet',
  TELENET_FLEET_ALIAS = 'telenetFleet',
  TELENET_BUSINESS_ALIAS = 'telenetSoho',
}
@Injectable({
  providedIn: 'root',
})
export class HardwareService {
  constructor(private readonly pathCategorisationService: PathCategorisationService) {}

  getCustomerBrandAndCategoryAlias(): HardwareCustomerBrandCategoryEnum {
    if (this.pathCategorisationService.isBrandBaseAndCategoryBusiness()) {
      return HardwareCustomerBrandCategoryEnum.BASE_BUSINESS_ALIAS;
    }
    if (this.pathCategorisationService.isBrandTelenetAndCategoryFleetPortal()) {
      return HardwareCustomerBrandCategoryEnum.TELENET_FLEET_ALIAS;
    }
    if (this.pathCategorisationService.isBrandTelenetAndCategoryBusiness()) {
      return HardwareCustomerBrandCategoryEnum.TELENET_BUSINESS_ALIAS;
    }
    // default
    return HardwareCustomerBrandCategoryEnum.TELENET_RESIDENTIAL_ALIAS;
  }
}
