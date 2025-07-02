import { Device } from '../entities/device.model';
import { AddressSelectorModel } from '../entities/address-selector.model';

export interface ReturnDevicesState {
  devices: Device[];
  returnLabel: string | undefined;
  addressLines: AddressSelectorModel[];
  selectedAddressLine: AddressSelectorModel | null;
  selectedDevicesList: Device[];
  error: Error | undefined;
  deviceDetailsLoaded: boolean;
}

export const defaultReturnDevicesState: ReturnDevicesState = {
  devices: [],
  returnLabel: undefined,
  addressLines: [],
  selectedAddressLine: null,
  selectedDevicesList: [],
  error: undefined,
  deviceDetailsLoaded: false,
};

export interface ReturnDevicesSlice {
  ['returnDevicesFeature']: ReturnDevicesState;
}
