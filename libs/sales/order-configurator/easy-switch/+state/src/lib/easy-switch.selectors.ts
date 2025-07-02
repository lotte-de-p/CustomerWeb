import { createFeatureSelector, createSelector } from '@ngrx/store';
import { stateFeatureName } from './state.const';
import { EasySwitchState } from './easy-switch.state';

export const featureState = createFeatureSelector<EasySwitchState>(stateFeatureName);

export const selectEasySwitchChoice = createSelector(featureState, (state: EasySwitchState) => state.easySwitchWanted);
export const selectEasySwitchLoading = createSelector(featureState, (state: EasySwitchState) => state.loading);
export const selectEasySwitchError = createSelector(featureState, (state: EasySwitchState) => state.error);
