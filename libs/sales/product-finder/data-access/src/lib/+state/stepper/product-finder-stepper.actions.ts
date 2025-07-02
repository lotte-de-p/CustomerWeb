import { createAction, props } from '@ngrx/store';
import { ProductFinderStep } from '../../entities/stepper/product-finder-step';

export const setStepConfig = createAction(
  '[Product Finder Stepper] set step config',
  props<{
    steps: ProductFinderStep[];
    currentStep: ProductFinderStep;
  }>()
);
export const goToPreviousStep = createAction('[Product Finder Stepper] go to previous step');
export const nextButtonClicked = createAction('[Product Finder Stepper] next button clicked');
export const goToNextStep = createAction('[Product Finder Stepper] go to next step');
export const redoTest = createAction('[Product Finder Stepper] redo test');
export const notifyStepRendered = createAction(
  '[Product Finder Stepper] notify step rendered',
  props<{ step: string }>()
);
