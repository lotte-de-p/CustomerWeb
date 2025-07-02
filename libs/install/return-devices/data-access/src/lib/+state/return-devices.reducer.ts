import { Action, createFeature, createReducer, on } from '@ngrx/store';
import { produce } from 'immer';
import { defaultReturnDevicesState, ReturnDevicesState } from './return-devices.state';
import {
  getReturnDevicesAndAddressLineDetailsFailure,
  getReturnDevicesAndAddressLineDetailsSuccess,
  getReturnLabelFailure,
  getReturnLabelSuccess,
  selectedAddress,
  toggleDevice,
} from './return-devices.actions';
import { Device } from '../entities/device.model';
import { ReturnLabel } from '../entities/return-label.model';
import { AddressSelectorModel } from '../entities/address-selector.model';

export const reducer = createReducer(
  defaultReturnDevicesState,
  on(getReturnLabelSuccess, (state: ReturnDevicesState, action: { returnLabel: ReturnLabel }) => ({
    ...state,
    returnLabel: action.returnLabel.label,
  })),
  on(getReturnLabelFailure, (state: ReturnDevicesState, action: { error: Error }) => ({
    ...state,
    error: action.error,
  })),
  on(toggleDevice, (state: ReturnDevicesState, action: { device: Device }) =>
    produce(state, (draft: ReturnDevicesState) => {
      draft.selectedDevicesList.forEach((device) => {
        device.isToggled = false;
      });

      const deviceToToggle = draft.selectedDevicesList.find(
        (device) => device.serialNumber === action.device.serialNumber
      );
      if (deviceToToggle) {
        deviceToToggle.isToggled = !action.device.isToggled;
      }
    })
  ),
  on(
    getReturnDevicesAndAddressLineDetailsSuccess,
    (state: ReturnDevicesState, action: { addressLines: AddressSelectorModel[]; devices: Device[] }) => ({
      ...state,
      deviceDetailsLoaded: true,
      addressLines: action.addressLines,
      selectedAddressLine: action.addressLines[0],
      devices: getSortedReturnDevices(action.devices),
    })
  ),
  on(getReturnDevicesAndAddressLineDetailsFailure, (state: ReturnDevicesState, action: { error: Error }) => ({
    ...state,
    deviceDetailsLoaded: true,
    error: action.error,
  })),
  on(selectedAddress, (state: ReturnDevicesState, action: { selectedAddressLine: AddressSelectorModel | null }) => ({
    ...state,
    selectedDevicesList: filterReturnDevices(action.selectedAddressLine, state.devices),
    selectedAddressLine: action.selectedAddressLine,
  }))
);

function filterReturnDevices(selectedReturnDevicesAddressLine: AddressSelectorModel | null, devices: Device[]) {
  const deviceList = devices.filter((device) => device.addressId === selectedReturnDevicesAddressLine?.id);
  return getSortedReturnDevices(deviceList);
}

function getSortedReturnDevices(devices: Device[]): Device[] {
  return devices.slice().sort((device1, device2) => {
    const date1 = device1.returnDueDate ? Date.parse(device1.returnDueDate) : Infinity;
    const date2 = device2.returnDueDate ? Date.parse(device2.returnDueDate) : Infinity;
    return date1 - date2;
  });
}

export function returnDevicesReducer(
  state: ReturnDevicesState = defaultReturnDevicesState,
  action: Action
): ReturnDevicesState {
  return reducer(state, action);
}

export const returnDevicesFeature = createFeature({
  name: 'returnDevicesFeature',
  reducer: returnDevicesReducer,
});
