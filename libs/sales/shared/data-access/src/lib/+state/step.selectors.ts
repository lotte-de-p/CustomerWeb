import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StepState } from './step.state';

export const featureState = createFeatureSelector<StepState>('stepFeature');
export const selectCurrentStepKey = createSelector([featureState], (state) => state.stepFeature.currentStepKey);
export const selectNexStepKey = createSelector([featureState], (state) => {
  const indexOf = state.stepFeature.stepKeys.indexOf(state.stepFeature.currentStepKey);
  if (indexOf !== state.stepFeature.stepKeys.length - 1) {
    return state.stepFeature.stepKeys[indexOf + 1];
  }
  return undefined;
});
export const selectStepKeys = createSelector([featureState], (state) => state.stepFeature.stepKeys);
export const isFirstStep = createSelector(
  [featureState],
  (state) => 0 === state.stepFeature.stepKeys.indexOf(state.stepFeature.currentStepKey)
);
export const nextButtonLabel = createSelector([featureState], (state) => state.stepFeature.nextButtonLabel);
export const showNavigation = createSelector([featureState], (state) => state.stepFeature.showNavigation);
export const showBackButton = createSelector([featureState], (state) => state.stepFeature.showBackButton);
