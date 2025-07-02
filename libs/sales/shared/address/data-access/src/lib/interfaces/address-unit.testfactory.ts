import { makeFactory } from 'factory.ts';
import { AddressUnit } from './address-unit.interface';

const testStreet = 'Darwin Loadteststraat';
export const parentAddressUnitTestfactory = makeFactory<AddressUnit>({
  addressUnitChain: [],
  type: 'Street',
  addressUnitTypeId: '9148294798613629990',
  id: '9165656195913790999',
  nameDU: testStreet,
  externalId: '-y52ru600as-2la7gb0001',
  name: testStreet,
  href: '/api/v1/addressManagement/address/9165656195913790999',
});

export const addressUnitTestWithoutMunicipalityfactory = makeFactory<AddressUnit>({
  type: 'Geographical Address',
  addressUnitTypeId: '9148294598613629978',
  id: '9165656989133844238',
  externalId: '-xy22lf00at-my0riy021z',
  name: '15767',
  postalCode: '',
  href: '/api/v1/addressManagement/address/9165656989113844238',
  addressUnitChain: [
    parentAddressUnitTestfactory.build({
      addressUnitChain: [],
      type: 'Country',
      addressUnitTypeId: '9132373128813243365',
      id: '9145466696013638158',
      nameDU: 'België',
      externalId: '56',
      abbreviation: 'BE',
      name: 'België',
      href: '/api/v1/addressManagement/address/9145466696013668158',
    }),
    parentAddressUnitTestfactory.build({
      addressUnitChain: [],
      type: 'Street',
      addressUnitTypeId: '9148294798213629990',
      id: '9165656125913790999',
      nameDU: testStreet,
      externalId: '-y52ru600as-2la7gb0001',
      name: testStreet,
      href: '/api/v1/addressManagement/address/9165656195913790999',
    }),
  ],
  parent: parentAddressUnitTestfactory.build(),
});

export const addressUnitTestfactory = makeFactory<AddressUnit>({
  type: 'Geographical Address',
  addressUnitTypeId: '9148294798613629978',
  id: '9165656989113844238',
  externalId: '-xy22lf00at-my0riy021z',
  nameDU: 'Darwin Loadedstraat',
  nameFR: 'Darwin Loadedstraat FR',
  name: '17767',
  postalCode: '3000',
  href: '/api/v1/addressManagement/address/9165656989113844238',
  addressUnitChain: [
    parentAddressUnitTestfactory.build({
      addressUnitChain: [],
      type: 'Country',
      addressUnitTypeId: '9132373123813243365',
      id: '9145466696013668158',
      nameDU: 'België',
      nameFR: 'Belgique',
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
      nameFR: 'Louvain',
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
      nameFR: `${testStreet} FR`,
      externalId: '-y52ru600as-2la7gb0001',
      name: testStreet,
      href: '/api/v1/addressManagement/address/9165656195913790999',
    }),
  ],
  parent: parentAddressUnitTestfactory.build(),
});
