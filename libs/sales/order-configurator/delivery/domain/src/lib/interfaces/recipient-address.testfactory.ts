import { Factory } from 'fishery';
import { AddressUnit, RecipientAddress } from './recipient-address.interface';

export const addressUnitTestFactory = Factory.define<AddressUnit>(() => {
  return {
    addressUnitTypeId: '1',
    externalId: '12',
    href: 'a link',
    id: '123',
    name: 'addressUnit',
    type: 'apartment',
  };
});

export const recipientAddressTestfactory = Factory.define<RecipientAddress>(() => {
  return {
    addressUnit: addressUnitTestFactory.build(),
    country: 'België',
    countryCode: 'BE',
    box: '3',
    subHouseNumber: 'A',
    houseNumber: '9',
    municipality: 'Antwerpen',
    postalCode: '2000',
    street: 'Kiliaanstraat',
  };
});
