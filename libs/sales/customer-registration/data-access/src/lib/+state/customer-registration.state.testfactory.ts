import * as Factory from 'factory.ts';
import { CustomerCategory, CustomerRegistrationState, Salutation } from './customer-registration.state';
import { DisplayAddressInterface } from '../entities/interfaces/display-address.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { LanguageEnum } from '@telenet/ng-lib-page';

export const customerRegistrationFactory = Factory.Sync.makeFactory<CustomerRegistrationState>({
  brand: 'TELENET',
  category: CustomerCategory.RESIDENTIAL,
  authorConfiguration: {
    privacyPolicyUrl: 'www.privacy.be',
    marketingUrl: 'www.marketing.be',
    showSalesContactNumber: true,
    isPIDEnabled: true,
    pointOfSalesUrl: 'https://www2.telenet.be/residential/nl/',
    requestHelpUrl: 'https://www2.telenet.be/residential/nl/',
    allowAnyNavsForFixedProducts: false,
  },
  userInput: {
    personalDetails: {
      salutation: Salutation.MVR,
      firstName: 'Jane',
      lastName: 'Fonda',
      phoneNumber: '0412345678',
      email: 'jane.fonda@telenet.be',
    },
    identityDetails: {
      dateOfBirth: new Date('1995-08-12'),
      belgianIdentityCardNumber: 'OMV-6280289-24',
      foreignIdentityCardNumber: 'DIF462277647',
      nationalRegistrationNumber: '17.07.30-033.84',
      isBelgianIdentity: true,
    },
    businessIdentityDetails: {
      companyName: 'Apple',
      belgianEnterpriseNumber: 'BE0473416418',
      legalForm: 'BV',
      installationAddressToggle: true,
      billingAddressToggle: true,
    },
  },
  locations: [
    {
      postalCode: '2800',
      location: 'Mechelen',
    },
    {
      postalCode: '3000',
      location: 'Leuven',
    },
  ],
  streets: ['olivetenvest', 'Korenmarkt', 'olivetenstraat'],
  address: [
    {
      addressType: 'legalAddress',
      addressId: '9876568899876',
      streetId: '21321',
      tinaLocationId: '2',
      country: 'Belgium',
      type: 'type',
      houseNumber: '10',
      boxNumber: '06',
      subHouseNumber: '10',
      street: 'olivetenvest',
      postalCode: '2800',
      municipality: 'Mechelen',
      countryCode: '32',
      floorNumber: '10',
      getDisplayAddress: () => {
        return {} as DisplayAddressInterface;
      },
      formatPostalCode: (displayAddress, singleLine) => {
        return displayAddress + '' + singleLine + '';
      },
    },
    {
      addressType: 'installationAddress',
      addressId: '9876568899876',
      streetId: '21321',
      tinaLocationId: '2',
      country: 'Belgium',
      type: 'type',
      houseNumber: '10',
      boxNumber: '94',
      subHouseNumber: '2',
      street: 'olivetenvest',
      postalCode: '2800',
      municipality: 'Mechelen',
      countryCode: '32',
      floorNumber: '10',
      getDisplayAddress: () => {
        return {} as DisplayAddressInterface;
      },
      formatPostalCode: (displayAddress, singleLine) => {
        return displayAddress + '' + singleLine + '';
      },
    },
  ],
  addressStore: [
    {
      addressType: 'legalAddress',
      addressId: '9876568899876',
      streetId: '21321',
      tinaLocationId: '2',
      size: 1,
      country: 'Belgium',
    },
    {
      addressType: 'installationAddress',
      addressId: '9876568899876',
      streetId: '21321',
      tinaLocationId: '2',
      size: 1,
      country: 'Belgium',
    },
  ],
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
  salesOrderRequestData: {
    id: '904357869398392832',
    offers: [
      {
        id: 'BASE0000',
        type: 'Internet',
      },
    ],
  },
  error: new HttpErrorResponse({}),
  productDetails: {
    minAgeLimit: '16',
    isPrepaidProduct: false,
    isFixedProduct: true,
    isStandAloneMobilePlan: true,
  },
  navsResult: {
    isRevalidationRequired: true,
    navsStatus: '',
  },
  language: LanguageEnum.NL,
  searchCustomerResult: {
    firstName: 'Jane',
    lastName: 'Fonda',
    id: '805285',
    type: 'hard',
    customerNumber: '231938',
    status: 'Prospect',
  },
  omapiProducts: [],
  legalEntityDetails: { domain: '', property: '', values: [{ name: '', id: '' }] },
  boxNumbers: [],
  subHouseNumbers: [],
  itsMeParams: {
    code: '123435',
    state: '7648970',
  },
  itsMeResult: {
    rrn: '17073003384',
    firstName: 'JANE',
    lastName: 'FONDA',
    gender: 'female',
    birthday: '30/07/1917',
    cardIDNumber: 'OMV628028924',
    nationality: 'BE',
    birthLocation: 'Anywhere',
    email: 'jane.fonda@telenet.be',
    emailVerified: false,
    phoneNumber: '0412345678',
    customerAddress: {
      street: 'OLIVETENVEST',
      houseNumber: '10',
      subHouseNumber: '',
      boxNumber: '06',
      postalCode: '2800',
      municipality: 'MECHELEN',
    },
  },
});
