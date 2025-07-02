import { createAction, props } from '@ngrx/store';
import { InstallationAddress } from '@sales/order-configurator/domain-installation-address';

export const setSelectedAddress = createAction(
  '[installation address] set selected address',
  props<{ selectedAddress: InstallationAddress }>()
);

export const setInstallationAddresses = createAction(
  '[installation address] set installation addresses',
  props<{ addresses: InstallationAddress[] }>()
);

export const setNewInstallationAddress = createAction(
  '[installation address] set new installation address',
  props<{ newAddress: InstallationAddress }>()
);
