import { makeFactory } from 'factory.ts';
import { AddressState } from './address.state';
import { InstallationAddressInterface } from '../interfaces/installation-address.interface';

const mechelenAddressTestFactyory = makeFactory<InstallationAddressInterface>({
  id: '123',
  isNew: false,
  country: 'Belgie',
  postalCode: '2800',
  municipality: 'Mechelen',
  street: 'Oude baan',
  houseNumber: '90',
  selected: true,
});

export const antwerpAddressTestFactyory = makeFactory<InstallationAddressInterface>({
  id: '356',
  isNew: false,
  country: 'Belgie',
  postalCode: '2000',
  municipality: 'Antwerpen',
  street: 'Klapdorp',
  houseNumber: '34',
  box: '301',
  selected: false,
});

const boxSubhouseAddressTestFactyory = makeFactory<InstallationAddressInterface>({
  id: '356',
  isNew: false,
  country: 'Belgie',
  postalCode: '2000',
  municipality: 'Antwerpen',
  street: 'Meir',
  houseNumber: '34',
  subHouseNumber: 'A',
  box: '221',
  selected: false,
});

const gentAddressTestFactyory = makeFactory<InstallationAddressInterface>({
  isNew: true,
  country: 'Belgie',
  postalCode: '2100',
  municipality: 'Gent',
  street: 'Joseph Gérardstraat',
  houseNumber: '8',
  selected: false,
});

export const addressStateTestFactory = makeFactory<AddressState>({
  addresses: [
    mechelenAddressTestFactyory.build(),
    antwerpAddressTestFactyory.build(),
    boxSubhouseAddressTestFactyory.build(),
  ],
});

export const addressStateWithNewTestFactory = makeFactory<AddressState>({
  addresses: [mechelenAddressTestFactyory.build(), antwerpAddressTestFactyory.build(), gentAddressTestFactyory.build()],
});
