import {
  Contact,
  ContactMethodClassificationType,
  ContactMethodType,
  CustomerAccountDetails,
  RoleType,
} from './customer-account-details.interface';

export class CustomerAccountUtil {
  static getContractHolder(contactDetails: CustomerAccountDetails | null): Contact {
    if (!contactDetails || !contactDetails.contacts) {
      throw new Error('Invalid CustomerAccountDetails');
    }

    const contractHolder = contactDetails.contacts
      .filter((contact) => contact.roles)
      .find((contact) => contact.roles.some((role) => role.role.name === RoleType.CONTRACT_HOLDER));

    if (!contractHolder) {
      throw new Error('Invalid CustomerAccountDetails');
    }

    return contractHolder;
  }

  static getContactEmail(contactDetails: Contact): string {
    const emailMethod = contactDetails.contactMethods?.find(
      (method) =>
        method['@type'] === ContactMethodType.EMAIL &&
        method.contactMethodType?.name === ContactMethodClassificationType.PRIVATE
    );
    if (!emailMethod) {
      throw new Error('Contact email not found.');
    }
    return emailMethod.value;
  }

  static getContactPhoneNumber(contactDetails: Contact): string {
    const phoneNumber = contactDetails.contactMethods?.find(
      (method) =>
        method['@type'] === ContactMethodType.MOBILE_PHONE &&
        method.contactMethodType?.name === ContactMethodClassificationType.PRIMARY
    )?.value;

    if (!phoneNumber) {
      throw new Error('Mobile phone number not found');
    }

    return phoneNumber;
  }
}
