import { createAction, emptyProps, props } from '@ngrx/store';
import { Device } from '../entities/device.model';
import { ReturnLabel } from '../entities/return-label.model';
import { AddressSelectorModel } from '../entities/address-selector.model';

export const getReturnLabel = createAction('[return-devices] get return label', props<{ addressId: string }>());

export const getReturnLabelSuccess = createAction(
  '[return-devices] get return label success',
  props<{ returnLabel: ReturnLabel }>()
);

export const getReturnLabelFailure = createAction(
  '[return-devices] get return label failure',
  props<{
    error: Error;
  }>()
);

export const toggleDevice = createAction('[return-devices] toggle device success', props<{ device: Device }>());

export const getReturnDevicesAndAddressLineDetails = createAction(
  '[return-devices] get return device and address selector list',
  emptyProps
);

export const getReturnDevicesAndAddressLineDetailsSuccess = createAction(
  '[return-devices] get return device and address selector list success',
  props<{ addressLines: AddressSelectorModel[]; devices: Device[] }>()
);

export const getReturnDevicesAndAddressLineDetailsFailure = createAction(
  '[return-devices] get return device and address selector list failure',
  props<{
    error: Error;
  }>()
);

export const selectedAddress = createAction(
  '[return-devices] set selected address',
  props<{ selectedAddressLine: AddressSelectorModel | null }>()
);
