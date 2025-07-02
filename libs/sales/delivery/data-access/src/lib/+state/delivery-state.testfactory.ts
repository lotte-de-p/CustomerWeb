import { Sync } from 'factory.ts';
import { DeliveryState } from './delivery.state';

const testData = {
  testStreet: 'Darwin Loadteststraat',
  addressId: '9165656195913790999',
  externalId: '-y52ru600as-2la7gb0001',
  href: '/api/v1/addressManagement/address/9165656195913790999',
};

export const deliveryStateTestfactory = Sync.makeFactory<DeliveryState>({
  personalInfo: {
    email: 'automation.ghpki.slzcl@staff.telenet.be',
    mobile: '0452458456',
    firstname: 'Alexandre',
    lastname: 'Bunschoten',
  },
  deliveryAddress: {
    addressUnit: {
      postalCode: '2800',
      addressUnitChain: [
        {
          addressUnitChain: [],
          type: 'Country',
          addressUnitTypeId: '9132373123813243365',
          id: '9145466696013668158',
          nameDU: 'België',
          externalId: '56',
          abbreviation: 'BE',
          name: 'België',
          href: '/api/v1/addressManagement/address/9145466696013668158',
        },
        {
          addressUnitChain: [],
          type: 'Municipality',
          addressUnitTypeId: '9148294340213629697',
          id: '9150757940513846006',
          nameDU: 'Mechelen',
          externalId: '3sl044007h-n67h0400mw',
          name: 'Mechelen',
          href: '/api/v1/addressManagement/address/9150757940513846006',
        },
        {
          addressUnitChain: [],
          type: 'Street',
          addressUnitTypeId: '9148294798613629990',
          id: testData.addressId,
          nameDU: testData.testStreet,
          externalId: testData.externalId,
          name: testData.testStreet,
          href: testData.href,
        },
      ],
      type: 'Geographical Address',
      addressUnitTypeId: '9148294798613629978',
      id: '9165656989113844238',
      externalId: '-xy22lf00at-my0riy021z',
      name: '17767',
      parent: {
        addressUnitChain: [],
        type: 'Street',
        addressUnitTypeId: '9148294798613629990',
        id: testData.addressId,
        nameDU: testData.testStreet,
        externalId: testData.externalId,
        name: testData.testStreet,
        href: testData.href,
      },
      href: '/api/v1/addressManagement/address/9165656989113844238',
    },
    municipality: 'Mechelen',
    postalCode: '2800',
    street: testData.testStreet,
    houseNumber: '17767',
    country: 'België',
  },
  availableAddresses: [],
  deliveryItems: [
    {
      productType: 'smartphone',
      deliveryInfo: {
        name: 'smartphone',
        iconType: 'mobile',
      },
      quantity: 1,
    },
    {
      productType: 'accessories',
      deliveryInfo: {
        name: 'accessories',
        iconType: 'accessories',
      },
      quantity: 1,
    },
  ],
  notifications: [],
});
