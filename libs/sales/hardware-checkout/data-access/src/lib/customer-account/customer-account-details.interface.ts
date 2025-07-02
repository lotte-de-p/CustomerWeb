import { CustomerAccountTypeEnum } from '../enums/customer-account-type.enum';
import { CustomerCreditClassificationTypeEnum } from '../enums/customer-credit-classification-type.enum';
import { CustomerLocation } from '../interfaces/sales-order.interface';

export enum RoleType {
  CONTRACT_HOLDER = 'Contract Holder',
  BILLING_CONTACT = 'Billing Contact',
}

export enum ContactMethodType {
  EMAIL = 'E-mail',
  MOBILE_PHONE = 'Mobile Phone',
  POST = 'Post',
}

export enum ContactMethodClassificationType {
  PRIMARY = 'Primary',
  PRIVATE = 'Private',
}

export interface ChildRole {
  name: RoleType;
  id: string;
}

export interface Role {
  name: string;
  id: string;
  role: ChildRole;
}

export interface Contact {
  lastName: string;
  firstNameOfficial: string;
  title: string;
  roles: Role[];
  contactMethods: ContactMethod[];
}

export interface CustomerAccountDetails {
  id: string;
  primaryPhone: {
    value: string;
  };
  customerCategory: {
    name: string;
  };
  primaryContact?: {
    lastName: string;
    firstNameOfficial: string;
    title: string;
    firstName: string;
    contactMethods: ContactMethod[];
  };
  customerAddress?: {
    id: string;
    name: string;
  };
  legalAddress?: {
    id: string;
    name: string;
  };
  contactMethods?: ContactMethod[];
  customerLocations?: CustomerLocation[];
  status: CustomerAccountTypeEnum;
  creditClassificationCode: CustomerCreditClassificationTypeEnum;
  contacts: Contact[];
}

export interface ContactMethod {
  id: string;
  value: string;
  '@type': ContactMethodType;
  contactMethodType?: {
    name: ContactMethodClassificationType;
  };
}
