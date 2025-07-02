import { Type } from '@angular/core';
import { Observable } from 'rxjs';
import { NextButtonLabelEnum } from '../enums/sales-stepper/next-button-label.enum';

export interface StepState {
  stepFeature: StepFeature;
}
export const defaultState: StepState = {
  stepFeature: {
    stepKeys: [],
    currentStepKey: '',
    showNavigation: true,
    showBackButton: true,
  },
};

export interface StepFeature {
  stepKeys: string[];
  currentStepKey: string;
  nextButtonLabel?: NextButtonLabelEnum;
  showNavigation: boolean;
  showBackButton: boolean;
}
export interface ComponentStep {
  key: string;
  component?: Type<StepComponent>;
  nextButtonLabel?: NextButtonLabelEnum;
}

export interface StepComponent {
  onNextStep(): Observable<boolean>;
}
