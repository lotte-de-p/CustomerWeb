import { createAction, emptyProps, props } from '@ngrx/store';
import { EntertainmentManagement, EntertainmentOption } from '../entities/entertainment-management.interface';

export const loadEntertainmentManagementOptions = createAction(
  '[entertainment-management] loadEntertainmentManagement',
  emptyProps
);

export const loadEntertainmentManagementSuccess = createAction(
  '[entertainment-management] loadEntertainmentManagementSuccess',
  props<{
    entertainmentManagementObject: EntertainmentManagement;
  }>()
);

export const loadEntertainmentManagementFailure = createAction(
  '[entertainment-management] loadEntertainmentManagementFailure',
  props<{
    error: string;
  }>()
);

export const loadEntertainmentOptionDetails = createAction(
  '[entertainment-management] loadEntertainmentOptionDetails',
  emptyProps
);

export const loadEntertainmentOptionDetailsSuccess = createAction(
  '[entertainment-management] loadEntertainmentOptionDetailsSuccess',
  props<{
    entertainmentManagementObject: EntertainmentOption;
  }>()
);

export const loadEntertainmentOptionDetailsFailure = createAction(
  '[entertainment-management] loadEntertainmentOptionDetailsFailure',
  props<{
    error: string;
  }>()
);
