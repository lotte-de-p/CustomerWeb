import {
  CustomerAccountDetails,
  Contact,
  RoleType,
  ContactMethodType,
  ContactMethodClassificationType,
} from './customer-account-details.interface';
import { CustomerAccountUtil } from './customer-account.util';
import { contactFactory, contactMethodFactory, customerAccountDetailsFactory } from './customer-account.testfactory';

describe('CustomerAccountUtil', () => {
  describe('getContractHolder', () => {
    it('should find the contact with role CONTRACT_HOLDER', () => {
      const customerAccountDetails: CustomerAccountDetails = customerAccountDetailsFactory.build({
        contacts: [
          contactFactory.build({
            lastName: 'Telenet',
            roles: [{ name: 'Role1', id: '1', role: { name: RoleType.CONTRACT_HOLDER, id: 'role1' } }],
          }),
        ],
      });

      const result = CustomerAccountUtil.getContractHolder(customerAccountDetails);
      expect(result).toBeDefined();
      expect(result?.lastName).toBe('Telenet');
    });
    it('should ignore contacts not having roles', () => {
      const customerAccountDetails: CustomerAccountDetails = customerAccountDetailsFactory.build({
        contacts: [
          contactFactory.build({
            lastName: 'BASE',
            roles: undefined,
          }),
          contactFactory.build({
            lastName: 'Telenet',
            roles: [{ name: 'Role1', id: '1', role: { name: RoleType.CONTRACT_HOLDER, id: 'role1' } }],
          }),
        ],
      });

      const result = CustomerAccountUtil.getContractHolder(customerAccountDetails);
      expect(result).toBeDefined();
      expect(result?.lastName).toBe('Telenet');
    });

    it('should throw an error if no contact has role CONTRACT_HOLDER', () => {
      const customerAccountDetails: CustomerAccountDetails = customerAccountDetailsFactory.build({
        contacts: [
          contactFactory.build({
            roles: [{ name: 'Role2', id: '2', role: { name: RoleType.BILLING_CONTACT, id: 'role2' } }],
          }),
        ],
      });

      expect(() => CustomerAccountUtil.getContractHolder(customerAccountDetails)).toThrowError(
        'Invalid CustomerAccountDetails'
      );
    });

    it('should throw an error if CustomerAccountDetails is invalid', () => {
      expect(() => CustomerAccountUtil.getContractHolder(null)).toThrowError('Invalid CustomerAccountDetails');
    });
  });

  describe('getContactEmail', () => {
    it('should return the email of the contact', () => {
      const contact: Contact = contactFactory.build({
        contactMethods: [
          contactMethodFactory.build({ value: 'john.doe@example.com', '@type': ContactMethodType.EMAIL }),
        ],
      });

      const result = CustomerAccountUtil.getContactEmail(contact);
      expect(result).toBe('john.doe@example.com');
    });

    it('should throw an error if the contact does not have an email', () => {
      const contact: Contact = contactFactory.build({
        contactMethods: [contactMethodFactory.build({ value: '1234567890', '@type': ContactMethodType.MOBILE_PHONE })],
      });

      expect(() => CustomerAccountUtil.getContactEmail(contact)).toThrowError('Contact email not found.');
    });

    it('should throw an error if the contactMethods are empty or undefined', () => {
      const contact: Contact = contactFactory.build({ contactMethods: [] });

      expect(() => CustomerAccountUtil.getContactEmail(contact)).toThrowError('Contact email not found.');

      const contactWithUndefinedMethods: Contact = contactFactory.build({ contactMethods: undefined });
      expect(() => CustomerAccountUtil.getContactEmail(contactWithUndefinedMethods)).toThrowError(
        'Contact email not found.'
      );
    });
  });

  describe('getContactPhoneNumber', () => {
    it('should return the mobile phone number of the contact', () => {
      const contact: Contact = contactFactory.build({
        contactMethods: [
          contactMethodFactory.build({
            value: '1234567890',
            '@type': ContactMethodType.MOBILE_PHONE,
            contactMethodType: { name: ContactMethodClassificationType.PRIMARY },
          }),
        ],
      });

      const result = CustomerAccountUtil.getContactPhoneNumber(contact);
      expect(result).toBe('1234567890');
    });

    it('should throw an error if the contact does not have a mobile phone number', () => {
      const contact: Contact = contactFactory.build({
        contactMethods: [
          contactMethodFactory.build({ value: 'john.doe@example.com', '@type': ContactMethodType.EMAIL }),
        ],
      });

      expect(() => CustomerAccountUtil.getContactPhoneNumber(contact)).toThrowError('Mobile phone number not found');
    });

    it('should throw an error if the contactMethods are empty or undefined', () => {
      const contact: Contact = contactFactory.build({ contactMethods: [] });

      expect(() => CustomerAccountUtil.getContactPhoneNumber(contact)).toThrowError('Mobile phone number not found');

      const contactWithUndefinedMethods: Contact = contactFactory.build({ contactMethods: undefined });
      expect(() => CustomerAccountUtil.getContactPhoneNumber(contactWithUndefinedMethods)).toThrowError(
        'Mobile phone number not found'
      );
    });
  });
});
