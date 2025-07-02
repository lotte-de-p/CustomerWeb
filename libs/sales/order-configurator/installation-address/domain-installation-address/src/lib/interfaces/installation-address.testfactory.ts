import { Factory } from 'fishery';
import { InstallationAddress } from './installation-address.interface';

export const installationAddressTestfactory = Factory.define<InstallationAddress>(() => {
  return {
    street: 'Main Street',
    houseNumber: '123',
    municipality: 'Springfield',
    subHouseNumber: 'A',
    country: 'Belgium',
  };
});

export const mechelenAddressTestFactory = Factory.define<InstallationAddress>(() => {
  return {
    id: '123',
    country: 'Belgie',
    postalCode: '2800',
    municipality: 'Mechelen',
    street: 'Oude baan',
    houseNumber: '90',
  };
});

export const antwerpAddressTestFactory = Factory.define<InstallationAddress>(() => {
  return {
    id: '356',
    country: 'Belgie',
    postalCode: '2000',
    municipality: 'Antwerpen',
    street: 'Klapdorp',
    houseNumber: '34',
    box: '301',
  };
});

export const boxSubhouseAddressTestFactory = Factory.define<InstallationAddress>(() => {
  return {
    id: '356',
    country: 'Belgie',
    postalCode: '2000',
    municipality: 'Antwerpen',
    street: 'Meir',
    houseNumber: '34',
    subHouseNumber: 'A',
    box: '221',
  };
});

export const gentAddressTestFactory = Factory.define<InstallationAddress>(() => {
  return {
    country: 'Belgie',
    postalCode: '2100',
    municipality: 'Gent',
    street: 'Joseph Gérardstraat',
    houseNumber: '8',
  };
});
