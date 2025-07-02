import { makeFactory } from 'factory.ts';
import { SummaryPersonalInfo } from '../interfaces/personal-info.interface';
import { DeliveryInfo, DeliveryInfoAddress } from '../interfaces/delivery-info.interface';
import { BillingAddress } from '../interfaces/invoice-info.interface';
import { DepreciationItem } from '../interfaces/depriciation-item.interface';
import { SummaryState } from './summary.state';
import { orderItemTestFactory, summaryPricesTestFactory } from '../interfaces/order-item.testfactory';
import { IngenicoRequestForm } from '@sales/shared/data-access';

export const summaryPersonalInfoStateFactory = makeFactory<SummaryPersonalInfo>({
  email: 'test@test.com',
  firstname: 'firstname',
  lastname: 'lastname',
});

export const deliveryInfoAddressFactory = makeFactory<DeliveryInfoAddress>({
  addressUnitId: '123456789',
  box: 'box',
  country: 'BELGIUM',
  houseNumber: '1',
  municipality: 'Mechelen',
  street: 'Elektriciteitstraat',
  subHouseNumber: 'A',
  postalCode: '2800',
});

export const deliveryInfoStateFactory = makeFactory<DeliveryInfo>({
  personalInfo: {
    email: 'test@delivery.com',
    firstname: 'deliveryFirstname',
    lastname: 'deliveryLastname',
    mobile: '0485delivery',
  },
  address: deliveryInfoAddressFactory.build(),
});

export const invoiceInfoStateFactory = makeFactory<BillingAddress>({
  box: 'invoicebox',
  country: 'BELGIUM',
  houseNumber: '5',
  municipality: 'Leuven',
  street: 'InvoiceStreet',
  subHouseNumber: 'B',
  postalCode: '3200',
});

export const depreciationItemFactory = makeFactory<DepreciationItem>({
  name: 'Testphone 1',
  price: 100,
  duration: 12,
});

export const ingenicoFormTestFactory = makeFactory<IngenicoRequestForm>({
  PSPID: 'telenet',
  ORDERID: '12345',
  CURRENCY: 'EUR',
  AMOUNT: '20000',
  LANGUAGE: 'BE_NL',
  SHASIGN: 'HASHEDSTUFF',
  SECRET: 'SECRETSTUFF',
  EMAIL: 'test@test.com',
  OWNERADDRESS: 'Elektriciteitsstraat 23',
  OWNERZIP: '2800',
  OWNERTOWN: 'Mechelen',
  TP: '',
  DEVICE: 'Computer',
  CN: '00000',
  OWNERCTY: 'Mechelen',
  OWNERTELNO: '0476606060',
  PM: '',
  BRAND: 'Telenet',
  ALIAS: '',
  ALIASUSAGE: '',
  ALIASOPERATION: '',
  PARAMPLUS: '',
  PARAMVAR: '',
  PMLISTTYPE: '',
  ACCEPTURL: 'https://accept.com',
  DECLINEURL: 'https://decline.com',
  EXCEPTIONURL: 'https://exception.com',
  CANCELURL: 'https://cancel.com',
});

export const summaryStateTestfactory = makeFactory<SummaryState>({
  personalInfo: summaryPersonalInfoStateFactory.build(),
  deliveryInfo: deliveryInfoStateFactory.build(),
  invoiceInfo: invoiceInfoStateFactory.build(),
  depreciationItems: depreciationItemFactory.buildList(2),
  orderItems: [orderItemTestFactory.build(), orderItemTestFactory.build(), orderItemTestFactory.build()],
  prices: summaryPricesTestFactory.build(),
  contractSummaryRequired: true,
  ingenicoFormReady: true,
  ingenicoRequest: undefined,
  generalNotifications: [],
  deliveryNotifications: [],
  termsAndConditionsUrl: undefined,
  ingenicoFormUrl: undefined,
});
