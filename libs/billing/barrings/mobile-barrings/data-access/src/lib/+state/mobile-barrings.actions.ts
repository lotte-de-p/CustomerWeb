import { createAction, props } from '@ngrx/store';
import { MobileBarrings } from '../entities/mobile-barrings.interface';
import { MobileLine } from '@billing/shared/data-access';

export const fetchMobileBarringsSuccess = createAction(
  '[mobile-barrings] fetchMobileBarringsSuccess',
  props<{
    mobileBarringObject: MobileBarrings;
  }>()
);

export const fetchMobileBarringsFailure = createAction(
  '[mobile-barrings] fetchMobileBarringsFailure',
  props<{
    error: string;
  }>()
);

export const setSelectedMobileLine = createAction(
  '[mobile-barrings] setSelectedMobileLine',
  props<{
    selectedMobileLine: MobileLine;
  }>()
);

export const triggerLoading = createAction(
  '[mobile-barrings] triggerLoading',
  props<{
    value: boolean;
  }>()
);
