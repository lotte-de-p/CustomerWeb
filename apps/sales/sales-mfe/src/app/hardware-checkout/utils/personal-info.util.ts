import { CustomerAccountDetails, CustomerAccountUtil, PersonalIdentity } from '@sales/hardware-checkout/data-access';
import { PersonalInfo } from '@sales/delivery/data-access';
import { HardwareCheckoutError } from '../classes/hardware-checkout-error.class';
import { CustomerAccountCouldNotBeHandled, PersonalIdentityCouldNotBeHandled } from '../constants/errors.constants';

export class PersonalInfoUtil {
  static getPersonalInfoFromIdentityAndCustomerAccount(
    personalIdentity: PersonalIdentity | null,
    customerAccountDetails: CustomerAccountDetails | null
  ): PersonalInfo {
    if (!customerAccountDetails) {
      throw new HardwareCheckoutError(CustomerAccountCouldNotBeHandled);
    }
    if (!personalIdentity) {
      throw new HardwareCheckoutError(PersonalIdentityCouldNotBeHandled);
    }

    const contractHolderContactDetails = CustomerAccountUtil.getContractHolder(customerAccountDetails);

    if (!contractHolderContactDetails) {
      throw new HardwareCheckoutError(CustomerAccountCouldNotBeHandled);
    }
    const { firstName, lastName } = this.getFirstAndLastName(personalIdentity);
    const { mobile, email } = this.getMobileAndEmail(personalIdentity);

    return {
      firstname: firstName ?? '',
      lastname: lastName ?? '',
      mobile: mobile ?? '',
      email: email ?? '',
    };
  }

  private static getMobileAndEmail(personalIdentity: PersonalIdentity) {
    const mobile = personalIdentity['Mobile Number'];
    const email = personalIdentity['E-Mail'];

    return { mobile, email };
  }

  private static getFirstAndLastName(personalIdentity: PersonalIdentity) {
    const firstName = personalIdentity['First Name'];
    const lastName = personalIdentity['Last Name'];

    return { firstName, lastName };
  }
}
