import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ReturnDevicesState } from './return-devices.state';

export const returnDevicesFeatureState = createFeatureSelector<ReturnDevicesState>('returnDevicesFeature');

export const selectReturnDevices = createSelector(
  returnDevicesFeatureState,
  (state: ReturnDevicesState) => state.devices
);

export const selectReturnLabel = createSelector(
  returnDevicesFeatureState,
  (state: ReturnDevicesState) => state.returnLabel
);

export const selectReturnDevicesFailure = createSelector(
  returnDevicesFeatureState,
  (state: ReturnDevicesState) => state.error
);

export const selectReturnDeviceAddressLines = createSelector(returnDevicesFeatureState, (state) => state.addressLines);

export const selectedAddressLine = createSelector(returnDevicesFeatureState, (state) => state.selectedAddressLine);

export const selectedDevicesList = createSelector(returnDevicesFeatureState, (state) => state.selectedDevicesList);

export const selectDeviceDetailsLoaded = createSelector(
  returnDevicesFeatureState,
  (state) => state.deviceDetailsLoaded
);
