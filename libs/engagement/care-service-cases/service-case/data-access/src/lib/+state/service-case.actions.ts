import { createAction, emptyProps, props } from '@ngrx/store';
import { ServiceCase } from '../entitities/service-case.interface';

export const loadServiceCases = createAction('[service-case] loadServiceCases', emptyProps);
export const serviceCasesPageView = createAction('[service-case] serviceCasesPageView', emptyProps);

export const loadServiceCasesSuccess = createAction(
  '[service-case] loadServiceCasesSuccess',
  props<{
    serviceCases: ServiceCase[];
  }>()
);

export const loadServiceCasesFailure = createAction(
  '[service-case] loadServiceCasesFailure',
  props<{
    error: string;
  }>()
);

export const selectServiceCase = createAction(
  '[service-case] selectServiceCase',
  props<{
    selectedServiceCase: ServiceCase;
  }>()
);

export const toggleHistoryAction = createAction(
  '[service-case] toggleHistory',
  props<{
    isToggleHistory: boolean;
  }>()
);
