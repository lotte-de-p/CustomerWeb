import { ContactDetailsCustomerCategoryEnum } from '@sales/hardware-checkout/data-access';
import { HardwareCheckoutError } from '../classes/hardware-checkout-error.class';
import { GetCustomerDataError } from '../constants/errors.constants';

export class CustomerCategoryUtil {
  public static getCustomerCategory(name: string): string {
    const residential = [
      ContactDetailsCustomerCategoryEnum.RESIDENTIAL,
      ContactDetailsCustomerCategoryEnum.EVENT_DEMO,
      ContactDetailsCustomerCategoryEnum.PRODUCTION_TEST,
    ];
    const business = [
      ContactDetailsCustomerCategoryEnum.PRODUCTION_TEST_BUSINESS,
      ContactDetailsCustomerCategoryEnum.PRD_TEST_BUSINESS,
      ContactDetailsCustomerCategoryEnum.SOHO,
    ];

    const foundResidential = residential.find((value) => name === value);
    if (foundResidential) {
      return ContactDetailsCustomerCategoryEnum.RESIDENTIAL;
    }

    const foundBusiness = business.find((value) => name === value);
    if (foundBusiness) {
      return ContactDetailsCustomerCategoryEnum.SOHO;
    }
    throw new HardwareCheckoutError(GetCustomerDataError);
  }
}
