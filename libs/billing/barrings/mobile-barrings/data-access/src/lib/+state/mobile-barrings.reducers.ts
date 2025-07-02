import { createFeature, createReducer, on } from '@ngrx/store';

import {
  fetchMobileBarringsFailure,
  fetchMobileBarringsSuccess,
  setSelectedMobileLine,
  triggerLoading,
} from './mobile-barrings.actions';
import { MobileBarringGroup } from '../entities/mobile-barrings.interface';
import { MobileLine } from '@billing/shared/data-access';

export const MOBILE_BARRINGS_FEATURE_KEY = 'mobile-barrings';

export interface MobileBarringsState {
  barringGroups: MobileBarringGroup[];
  readOnly: boolean;
  productName: string;
  loading: boolean;
  selectedMobileLine: MobileLine;
  productStatus: string;
  loadError: string | undefined;
}

export const initialState: MobileBarringsState = {
  barringGroups: [],
  readOnly: false,
  productName: '',
  loading: false,
  loadError: undefined,
  productStatus: '',
  selectedMobileLine: {
    name: '',
    msisdn: '',
    isDataOnly: false,
  },
};

export const mobileBarringsReducer = createReducer(
  initialState,
  on(triggerLoading, (state: MobileBarringsState, action) => ({
    ...state,
    loading: action.value,
  })),
  on(fetchMobileBarringsSuccess, (state: MobileBarringsState, action) => ({
    ...state,
    loading: false,
    barringGroups: action.mobileBarringObject.barringGroups,
    readOnly: !action.mobileBarringObject.updatable,
    productName: action.mobileBarringObject.productName,
    productStatus: action.mobileBarringObject.productStatus,
  })),
  on(fetchMobileBarringsFailure, (state: MobileBarringsState, action) => ({
    ...state,
    loading: false,
    loadError: action.error,
  })),
  on(setSelectedMobileLine, (state: MobileBarringsState, action) => ({
    ...state,
    loading: true,
    selectedMobileLine: action.selectedMobileLine,
  }))
);

export const mobileBarringsFeature = createFeature({
  name: MOBILE_BARRINGS_FEATURE_KEY,
  reducer: mobileBarringsReducer,
});
