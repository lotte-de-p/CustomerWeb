import { Address } from '../entities/models/address.model';
import { AddressStoreInterface } from '../entities/interfaces/address-store.interface';
import { AddressRequestInterface } from '../entities/interfaces/address-request.interface';
import { RawSalesOrderRequestInterface } from '../entities/interfaces/raw-sales-order-request.interface';
import { Municipality } from '../entities/interfaces/municipality.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { LanguageEnum, OmapiProduct } from '@telenet/ng-lib-omapi';
import { LegalEntityInterface } from '../entities/interfaces/legal-entity.interface';
import { ItsMeInterface, ItsMeResponseInterface } from '../infrastructure/its-me.interface';

export interface CustomerRegistrationState {
  authorConfiguration: AuthorConfiguration;
  userInput: UserInput;
  locations: Municipality[];
  streets: string[];
  address: Address[];
  addressStore: AddressStoreInterface[];
  addressRequestInterface: AddressRequestInterface;
  salesOrderRequestData: RawSalesOrderRequestInterface;
  error: HttpErrorResponse | undefined;
  productDetails: ProductDetails;
  navsResult: NavsResult;
  searchCustomerResult: SearchCustomerResult;
  omapiProducts: OmapiProduct[];
  legalEntityDetails: LegalEntityDetails;
  boxNumbers: string[];
  subHouseNumbers: string[];
  itsMeParams: ItsMeInterface;
  itsMeResult: ItsMeResponseInterface;

  brand: string;
  category: CustomerCategory;
  language: LanguageEnum;
}

export interface SearchCustomerResult {
  firstName: string;
  lastName: string;
  id: string;
  status: string;
  type: string;
  customerNumber: string;
}
export interface NavsResult {
  navsStatus: string;
  isRevalidationRequired?: boolean;
}

export interface ProductDetails {
  minAgeLimit: string;
  isPrepaidProduct: boolean;
  isFixedProduct: boolean;
  isStandAloneMobilePlan: boolean;
}

export interface AuthorConfiguration {
  privacyPolicyUrl: string;
  marketingUrl: string;
  showSalesContactNumber: boolean;
  isPIDEnabled: boolean;
  pointOfSalesUrl: string;
  requestHelpUrl: string;
  allowAnyNavsForFixedProducts: boolean;
}

export interface UserInput {
  personalDetails: PersonalDetails;
  identityDetails: IdentityDetails;
  businessIdentityDetails: BusinessIdentityDetails;
}

export interface PersonalDetails {
  salutation: Salutation;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}

export interface IdentityDetails {
  dateOfBirth: Date | undefined;
  belgianIdentityCardNumber?: string;
  foreignIdentityCardNumber?: string;
  nationalRegistrationNumber: string;
  isBelgianIdentity?: boolean;
}

export interface BusinessIdentityDetails {
  belgianEnterpriseNumber: string;
  companyName: string;
  legalForm: string;
  installationAddressToggle: boolean;
  billingAddressToggle: boolean;
}

export enum Salutation {
  DHR = 'Dhr.',
  MVR = 'Mevr.',
}

export enum CustomerCategory {
  BUSINESS = 'Business',
  RESIDENTIAL = 'Residential.',
}

export interface LegalEntityDetails {
  domain: string;
  property: string;
  values: LegalEntityInterface[];
}

export const defaultState: CustomerRegistrationState = {
  brand: 'TELENET',
  category: CustomerCategory.RESIDENTIAL,
  authorConfiguration: {
    privacyPolicyUrl: 'string',
    marketingUrl: 'string',
    showSalesContactNumber: false,
    isPIDEnabled: false,
    pointOfSalesUrl: 'https://www2.telenet.be/residential/nl/',
    requestHelpUrl: 'https://www2.telenet.be/residential/nl/',
    allowAnyNavsForFixedProducts: false,
  },
  userInput: {
    personalDetails: {
      salutation: Salutation.DHR,
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
    },
    identityDetails: {
      dateOfBirth: undefined,
      belgianIdentityCardNumber: '',
      foreignIdentityCardNumber: '',
      nationalRegistrationNumber: '',
      isBelgianIdentity: true,
    },
    businessIdentityDetails: {
      companyName: '',
      legalForm: '',
      belgianEnterpriseNumber: '',
      installationAddressToggle: true,
      billingAddressToggle: true,
    },
  },
  locations: [],
  streets: [],
  address: [],
  addressStore: [],
  addressRequestInterface: {
    postalCode: '',
    municipality: '',
    street: '',
    streetId: '',
    houseNumber: '',
    subHouseNumber: '',
    boxNumber: '',
    country: '',
    exactAddressSearch: false,
    fields: '',
    customHeaders: {},
    addressType: '',
    tinaLocationId: '',
    addressId: '',
    id: '',
    type: '',
  },
  salesOrderRequestData: {},
  error: undefined,
  productDetails: {
    minAgeLimit: '16',
    isPrepaidProduct: false,
    isFixedProduct: false,
    isStandAloneMobilePlan: false,
  },
  navsResult: {
    navsStatus: 'Allowed',
  },
  searchCustomerResult: {
    firstName: '',
    lastName: '',
    id: '',
    status: '',
    type: '',
    customerNumber: '',
  },
  omapiProducts: [],
  legalEntityDetails: { domain: '', property: '', values: [{ name: '', id: '' }] },
  boxNumbers: [],
  subHouseNumbers: [],
  itsMeParams: {
    code: '',
    state: '',
  },
  itsMeResult: {
    rrn: '',
    firstName: '',
    lastName: '',
    gender: '',
    birthday: '',
    cardIDNumber: '',
    nationality: '',
    birthLocation: '',
    email: '',
    emailVerified: false,
    phoneNumber: '',
    customerAddress: {
      street: '',
      houseNumber: '',
      subHouseNumber: '',
      boxNumber: '',
      postalCode: '',
      municipality: '',
    },
  },
  language: LanguageEnum.NL,
};
