import {
  childRoleFactory,
  contactMethodFactory,
  ContactMethodType,
  CustomerAccountDetails,
  CustomerAccountTypeEnum,
  CustomerCreditClassificationTypeEnum,
  PersonalIdentity,
  roleFactory,
  RoleType,
  ContactMethodClassificationType,
} from '@sales/hardware-checkout/data-access';
import { HardwareCheckoutError } from '../classes/hardware-checkout-error.class';
import { CustomerAccountCouldNotBeHandled, PersonalIdentityCouldNotBeHandled } from '../constants/errors.constants';
import { PersonalInfoUtil } from './personal-info.util';

describe('PersonalInfoUtil', () => {
  describe('getPersonalInfoFromIdentityAndCustomerAccount', () => {
    const customerAccountDetails: CustomerAccountDetails = {
      id: '1',
      primaryPhone: { value: '1234567890' },
      customerCategory: { name: 'Business' },
      contacts: [
        {
          lastName: 'Telenet',
          firstNameOfficial: 'Test',
          title: 'Mr.',
          roles: [
            roleFactory.build({
              role: childRoleFactory.build({ name: RoleType.BILLING_CONTACT }),
            }),
            roleFactory.build({
              role: childRoleFactory.build({ name: RoleType.CONTRACT_HOLDER }),
            }),
          ],
          contactMethods: [
            contactMethodFactory.build({
              '@type': ContactMethodType.EMAIL,
              value: 'john.doe@example.com',
              contactMethodType: { name: ContactMethodClassificationType.PRIVATE },
            }),
            contactMethodFactory.build({
              '@type': ContactMethodType.MOBILE_PHONE,
              value: '1234567890',
              contactMethodType: { name: ContactMethodClassificationType.PRIMARY },
            }),
          ],
        },
        {
          lastName: 'Telenet',
          firstNameOfficial: 'Test',
          title: 'Mr.',
          roles: [
            roleFactory.build({
              role: childRoleFactory.build({ name: RoleType.BILLING_CONTACT }),
            }),
          ],
          contactMethods: [contactMethodFactory.build()],
        },
      ],
      status: CustomerAccountTypeEnum.ACTIVE,
      creditClassificationCode: CustomerCreditClassificationTypeEnum.ALL_SALES,
    };

    const personalIdentity: PersonalIdentity = {
      'First Name': 'Jane',
      'Last Name': 'Smith',
      'Phone Number': null,
      'Fixed Phone Number': null,
      'Mobile Number': '0987654321',
      'E-Mail': 'jane.smith@example.com',
    };

    it('should return a PersonalInfo object with data from personalIdentity and customerAccountDetails', () => {
      const result = PersonalInfoUtil.getPersonalInfoFromIdentityAndCustomerAccount(
        personalIdentity,
        customerAccountDetails
      );

      expect(result).toEqual({
        firstname: 'Jane',
        lastname: 'Smith',
        mobile: '0987654321',
        email: 'jane.smith@example.com',
      });
    });

    it('should throw an error if customerAccountDetails is null', () => {
      expect(() => PersonalInfoUtil.getPersonalInfoFromIdentityAndCustomerAccount(personalIdentity, null)).toThrow(
        new HardwareCheckoutError(CustomerAccountCouldNotBeHandled)
      );
    });

    it('should throw an error if personalIdentity is null', () => {
      expect(() =>
        PersonalInfoUtil.getPersonalInfoFromIdentityAndCustomerAccount(null, customerAccountDetails)
      ).toThrow(new HardwareCheckoutError(PersonalIdentityCouldNotBeHandled));
    });
  });
});
