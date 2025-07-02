import { ServiceCase, Status } from '../entitities/service-case.interface';
import { createFeature, createReducer, on } from '@ngrx/store';
import {
  loadServiceCases,
  loadServiceCasesFailure,
  loadServiceCasesSuccess,
  selectServiceCase,
} from './service-case.actions';

export const SERVICE_CASE_FEATURE_KEY = 'service-case';

export interface ServiceCaseState {
  serviceCases: ServiceCase[];
  selectedServiceCase: ServiceCase | undefined;
  loading: boolean;
  loadError: string | undefined;
}

export interface ServiceCaseSlice {
  [SERVICE_CASE_FEATURE_KEY]: ServiceCaseState;
}

export const initialState: ServiceCaseState = {
  serviceCases: [],
  selectedServiceCase: undefined,
  loading: false,
  loadError: undefined,
};

const getOpenCase = (serviceCases: ServiceCase[]): ServiceCase | undefined =>
  serviceCases.find((serviceCase) => serviceCase.status === Status.OPEN);

export const serviceCaseFeature = createFeature({
  name: SERVICE_CASE_FEATURE_KEY,
  reducer: createReducer(
    initialState,
    on(loadServiceCases, (state: ServiceCaseState) => ({
      ...state,
      loading: true,
    })),
    on(loadServiceCasesSuccess, (state: ServiceCaseState, action) => ({
      ...state,
      selectedServiceCase: getOpenCase(action.serviceCases),
      serviceCases: action.serviceCases,
      loading: false,
      loadError: undefined,
    })),
    on(selectServiceCase, (state: ServiceCaseState, action) => ({
      ...state,
      selectedServiceCase: action.selectedServiceCase,
    })),
    on(loadServiceCasesFailure, (state: ServiceCaseState, action) => ({
      ...state,
      loading: false,
      loadError: action.error,
    }))
  ),
});
