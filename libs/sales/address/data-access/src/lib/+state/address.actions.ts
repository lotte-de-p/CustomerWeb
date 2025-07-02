import { createAction, props } from '@ngrx/store';
import { InstallationAddressInterface } from '../interfaces/installation-address.interface';

export const setSelectedAddress = createAction(
  '[installation address] set selected address',
  props<{ selectedAddress: InstallationAddressInterface }>()
);

export const setInstallationAddresses = createAction(
  '[installation address] set installation addresses',
  props<{ addresses: InstallationAddressInterface[] }>()
);
