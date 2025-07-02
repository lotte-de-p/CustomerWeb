import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PRODUCT_FINDER_STEPPER_FEATURE_KEY, ProductFinderStepperState } from './product-finder-stepper.reducers';
import { ProductFinderStepEnum } from '../../entities/stepper/product-finder-step.enum';

export const featureState = createFeatureSelector<ProductFinderStepperState>(PRODUCT_FINDER_STEPPER_FEATURE_KEY);

export const selectSteps = createSelector([featureState], (state: ProductFinderStepperState) => state.steps);
export const selectCurrentStep = createSelector(
  [featureState],
  (state: ProductFinderStepperState) => state.currentStep
);
export const selectCurrentStepKey = createSelector(
  [featureState],
  (state: ProductFinderStepperState) => state.currentStep.key
);
export const selectProgressBarVisible = createSelector(
  selectCurrentStepKey,
  (key: string) => key !== ProductFinderStepEnum.INTRO
);
export const selectVisible = createSelector(
  selectCurrentStepKey,
  (key: string) => key !== ProductFinderStepEnum.RESULTS_SCREEN
);
