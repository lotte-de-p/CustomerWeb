import { createFeature, createReducer, on } from '@ngrx/store';
import { EntertainmentOption } from '../entities/entertainment-management.interface';
import {
  loadEntertainmentManagementOptions,
  loadEntertainmentManagementFailure,
  loadEntertainmentManagementSuccess,
  loadEntertainmentOptionDetailsSuccess,
  loadEntertainmentOptionDetails,
  loadEntertainmentOptionDetailsFailure,
} from './entertainment-management.actions';

export const ENTERTAINMENT_MANAGEMENT_FEATURE_KEY = 'entertainment-management';

export interface EntertainmentManagementState {
  entertainmentManagement: Entertainment;
  entertainmentOptionDetails: EntertainmentOption;
}

export interface Entertainment {
  activeOptions?: EntertainmentOption[];
  availableContentPacks?: EntertainmentOption[];
  availableStreamingOptions?: EntertainmentOption[];
  loading: boolean;
  loadError: string | undefined;
  isEntLoaded?: boolean;
}

export const initialState: EntertainmentManagementState = {
  entertainmentManagement: {
    activeOptions: [],
    availableContentPacks: [],
    availableStreamingOptions: [],
    loading: false,
    loadError: undefined,
  },
  entertainmentOptionDetails: {
    logo: '',
    weight: 0,
    name: {
      en: '',
      nl: '',
      fr: '',
    },
  },
};

export const entertainmentManagementReducer = createReducer(
  initialState,
  on(loadEntertainmentManagementOptions, (state: EntertainmentManagementState) => ({
    ...state,
    entertainmentManagement: { ...state.entertainmentManagement, loading: true },
  })),
  on(loadEntertainmentManagementSuccess, (state: EntertainmentManagementState, action) => ({
    ...state,
    entertainmentManagement: {
      ...state.entertainmentManagement,
      ...action.entertainmentManagementObject,
      isEntLoaded: true,
      loading: false,
      loadError: undefined,
    },
  })),
  on(loadEntertainmentManagementFailure, (state: EntertainmentManagementState, action) => ({
    ...state,
    entertainmentManagement: { ...state.entertainmentManagement, loading: false, loadError: action.error },
  })),

  on(loadEntertainmentOptionDetails, (state: EntertainmentManagementState) => ({
    ...state,
    entertainmentOptionDetails: { ...state.entertainmentOptionDetails },
  })),
  on(loadEntertainmentOptionDetailsSuccess, (state: EntertainmentManagementState, action) => ({
    ...state,
    entertainmentOptionDetails: {
      ...state.entertainmentOptionDetails,
      ...action.entertainmentManagementObject,
    },
  })),
  on(loadEntertainmentOptionDetailsFailure, (state: EntertainmentManagementState) => ({
    ...state,
    entertainmentOptionDetails: { ...state.entertainmentOptionDetails },
  }))
);

export const entertainmentManagementFeature = createFeature({
  name: ENTERTAINMENT_MANAGEMENT_FEATURE_KEY,
  reducer: entertainmentManagementReducer,
});
