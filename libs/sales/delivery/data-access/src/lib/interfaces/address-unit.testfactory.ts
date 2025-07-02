import { makeFactory } from 'factory.ts';
import { AddressUnit } from './address-unit.interface';

const testStreet = 'Delivery test street';
export const parentAddressUnitTestfactory = makeFactory<AddressUnit>({
  addressUnitChain: [],
  type: 'Street',
  addressUnitTypeId: '9148294798613629991',
  id: '9165656195913790998',
  nameDU: testStreet,
  externalId: '-y52ru600as-2la7gb0000',
  name: testStreet,
  href: '/api/v1/addressManagement/address/9165656195913790998',
  abbreviation: 'TE',
});

export const addressUnitTestfactory = makeFactory<AddressUnit>({
  type: 'Geographical Address',
  addressUnitTypeId: '9148294798613629979',
  id: '9165656989113844239',
  externalId: '-xy22lf00at-my0riy0215',
  name: '17767',
  postalCode: '3000',
  href: '/api/v1/addressManagement/address/9165656989113844237',
  addressUnitChain: [
    parentAddressUnitTestfactory.build({
      addressUnitChain: [],
      type: 'Country',
      addressUnitTypeId: '9132373123813243364',
      id: '9145466696013668158',
      nameDU: 'België',
      externalId: '56',
      abbreviation: 'BE',
      name: 'België',
      href: '/api/v1/addressManagement/address/9145466696013668158',
    }),
    parentAddressUnitTestfactory.build({
      addressUnitChain: [],
      type: 'Municipality',
      addressUnitTypeId: '9148294340213629697',
      id: '9150757940513846006',
      nameDU: 'Leuven',
      externalId: '3sl044007h-n67h0400mw',
      name: 'Leuven',
      href: '/api/v1/addressManagement/address/9150757940513846006',
    }),
    parentAddressUnitTestfactory.build({
      addressUnitChain: [],
      type: 'Street',
      addressUnitTypeId: '9148294798613629990',
      id: '9165656195913790999',
      nameDU: testStreet,
      externalId: '-y52ru600as-2la7gb0001',
      name: testStreet,
      href: '/api/v1/addressManagement/address/9165656195913790999',
    }),
  ],
  parent: parentAddressUnitTestfactory.build(),
  nameDU: 'test',
  abbreviation: 'TE',
});

export const addressUnitManualAddressTestfactory = addressUnitTestfactory.extend({
  isManualAddress: true,
  id: '-1',
  type: 'manual',
});
