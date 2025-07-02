import { createAction, props } from '@ngrx/store';
import { NextButtonLabelEnum } from '../enums/sales-stepper/next-button-label.enum';

export const setStepConfig = createAction('[Stepper] set configuration', props<{ steps: string[] }>());
export const goToStep = createAction('[Stepper] go to specific step', props<{ stepKey: string }>());
export const goToFirstStep = createAction('[Stepper] go to first step');
export const goToNextStep = createAction('[Stepper] go to next step');
export const goToPreviousStep = createAction('[Stepper] go to previous step');
export const setNextButtonLabel = createAction(
  '[Stepper] set next button label',
  props<{ nextButtonLabel?: NextButtonLabelEnum }>()
);
export const setNavigationBarVisibility = createAction(
  '[Stepper] set navigation bar visibility',
  props<{ visible: boolean }>()
);

export const setBackButtonVisibility = createAction(
  '[Stepper] set back button visibility',
  props<{ visible: boolean }>()
);
