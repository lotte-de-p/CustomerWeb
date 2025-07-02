import { makeFactory, Sync } from 'factory.ts';

import { CustomerLocation } from '../interfaces/sales-order.interface';
import { CustomerAccountTypeEnum } from '../enums/customer-account-type.enum';
import { CustomerCreditClassificationTypeEnum } from '../enums/customer-credit-classification-type.enum';
import {
  ChildRole,
  Contact,
  ContactMethod,
  ContactMethodClassificationType,
  ContactMethodType,
  CustomerAccountDetails,
  Role,
  RoleType,
} from './customer-account-details.interface';

export const contactMethodFactory = makeFactory<ContactMethod>({
  id: '1',
  value: '',
  '@type': ContactMethodType.EMAIL,
  contactMethodType: {
    name: ContactMethodClassificationType.PRIVATE,
  },
});

export const childRoleFactory = makeFactory<ChildRole>({
  name: RoleType.CONTRACT_HOLDER,
  id: '9154145301713264489',
});

export const roleFactory = makeFactory<Role>({
  name: 'Contract Holder Mr. Tom Telenet',
  id: '9169868384713618104',
  role: childRoleFactory.build(),
});

export const contactFactory = makeFactory<Contact>({
  lastName: 'Telenet',
  firstNameOfficial: 'Tom',
  title: 'Mr.',
  roles: [roleFactory.build()],
  contactMethods: [
    contactMethodFactory.build({
      value: 'test@telenet.be',
      '@type': ContactMethodType.EMAIL,
      contactMethodType: {
        name: ContactMethodClassificationType.PRIVATE,
      },
    }),
    contactMethodFactory.build({
      value: '0485151515',
      '@type': ContactMethodType.MOBILE_PHONE,
      contactMethodType: {
        name: ContactMethodClassificationType.PRIMARY,
      },
    }),
  ],
});

export const customerLocationFactory = Sync.makeFactory<CustomerLocation>({
  id: '1',
  name: 'test',
  address: {
    name: 'test',
    id: '1',
  },
  easySwitchId: '123456791',
  isFleetLocation: false,
  isPseudoLocation: false,
  easySwitchInUse: false,
});

export const customerAccountDetailsFactory = makeFactory<CustomerAccountDetails>({
  id: '1',
  primaryPhone: {
    value: '0978458456',
  },
  customerCategory: {
    name: 'Residential',
  },
  primaryContact: {
    lastName: 'Lastname',
    firstNameOfficial: 'FirstnameOfficial',
    title: 'Mr',
    firstName: 'Firstname',
    contactMethods: [
      contactMethodFactory.build({
        value: 'test@telenet.be',
        '@type': ContactMethodType.EMAIL,
      }),
      contactMethodFactory.build({
        value: '0485151515',
        '@type': ContactMethodType.MOBILE_PHONE,
      }),
      contactMethodFactory.build({
        value: 'Post: België, 2800 Mechelen, Darwin Loadteststraat, h. 17767',
        '@type': ContactMethodType.POST,
      }),
    ],
  },
  customerAddress: {
    id: '9165656989113844238',
    name: '17767',
  },
  contactMethods: [
    contactMethodFactory.build({
      value: 'test@telenet.be',
      '@type': ContactMethodType.EMAIL,
      contactMethodType: {
        name: ContactMethodClassificationType.PRIVATE,
      },
    }),
    contactMethodFactory.build({
      value: '0485151515',
      '@type': ContactMethodType.MOBILE_PHONE,
      contactMethodType: {
        name: ContactMethodClassificationType.PRIMARY,
      },
    }),
    contactMethodFactory.build({
      id: '9165656989113844238',
      value: 'Post: België, 2800 Mechelen, Darwin Loadteststraat, h. 17767',
      '@type': ContactMethodType.POST,
    }),
    contactMethodFactory.build({
      id: '7165656989113844238',
      value: 'Post: België, 2800 Mechelen, Darwin Loadteststraat, h. 17767',
      '@type': ContactMethodType.POST,
    }),
    contactMethodFactory.build({
      value: 'E-mail: no-mail@telenet.be',
      '@type': ContactMethodType.EMAIL,
    }),
  ],
  customerLocations: [
    customerLocationFactory.build({
      id: '123456789',
      address: {
        name: 'matchingAddress',
        id: '9165656989113844238',
      },
    }),
    customerLocationFactory.build({
      id: '987654321',
      address: {
        name: 'matchingAddress',
        id: '84654654654651321',
      },
    }),
    customerLocationFactory.build({
      id: '5646546546546546546',
    }),
  ],
  status: CustomerAccountTypeEnum.ACTIVE,
  creditClassificationCode: CustomerCreditClassificationTypeEnum.ALL_SALES,
  contacts: [contactFactory.build()],
});

export const customerAccountDetailsSohoFactory = customerAccountDetailsFactory.extend({
  customerCategory: {
    name: 'Business',
  },
  legalAddress: {
    id: 'testid',
  },
});
