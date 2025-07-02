import { makeFactory } from 'factory.ts';
import { InstallationAddressInterface } from './installation-address.interface';

export const installationAddressInterfaceTestfactory = makeFactory<InstallationAddressInterface>({
  id: '123',
  street: 'Darwin Loadteststraat',
  houseNumber: '17767',
  postalCode: '3000',
  municipality: 'Leuven',
  country: 'België',
  isNew: false,
  selected: false,
  subHouseNumber: '1',
  box: '2',
  floor: '3',
});
