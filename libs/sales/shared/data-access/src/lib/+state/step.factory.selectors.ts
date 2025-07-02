import { createSelector } from '@ngrx/store';
import { StepState } from './step.state';
import { featureState } from './step.selectors';

export const selectStepByMessageGroup = (messageGroup: string) =>
  createSelector(featureState, (state: StepState) =>
    state.stepFeature.stepKeys.filter((step) => step === messageGroup)
  );
