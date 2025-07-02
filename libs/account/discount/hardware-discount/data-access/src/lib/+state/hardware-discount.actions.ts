import { createAction, emptyProps, props } from '@ngrx/store';
import { HardwareDiscount } from '../entities/hardware-discount.interface';

export const loadHardwareDiscount = createAction('[hardware-discount] loadHardwareDiscount', emptyProps);

export const loadHardwareDiscountSuccess = createAction(
  '[hardware-discount] loadHardwareDiscountSuccess',
  props<{
    hardwareDiscountObject: HardwareDiscount;
  }>()
);

export const loadHardwareDiscountFailure = createAction(
  '[hardware-discount] loadHardwareDiscountFailure',
  props<{
    error: string;
  }>()
);
