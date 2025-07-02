import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SERVICE_CASE_FEATURE_KEY, ServiceCaseState } from './service-case.reducers';
import { Status } from '../entitities/service-case.interface';

export const selectServiceCaseFeature = createFeatureSelector<ServiceCaseState>(SERVICE_CASE_FEATURE_KEY);

export const selectServiceCases = createSelector(selectServiceCaseFeature, (state) => state.serviceCases);
export const selectOpenServiceCases = createSelector(selectServiceCaseFeature, (state) =>
  state.serviceCases.filter((serviceCase) => serviceCase.status === Status.OPEN)
);
export const selectClosedServiceCases = createSelector(selectServiceCaseFeature, (state) =>
  state.serviceCases.filter((serviceCase) => serviceCase.status === Status.RESOLVED)
);

export const selectSelectedServiceCase = createSelector(selectServiceCaseFeature, (state) => state.selectedServiceCase);

export const selectLoadError = createSelector(selectServiceCaseFeature, (state) => state.loadError);

export const selectLoading = createSelector(selectServiceCaseFeature, (state) => state.loading);
