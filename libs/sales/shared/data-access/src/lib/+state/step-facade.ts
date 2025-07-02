import { Injectable } from '@angular/core';
import { StepState } from './step.state';
import {
  isFirstStep,
  nextButtonLabel,
  selectCurrentStepKey,
  selectNexStepKey,
  selectStepKeys,
  showBackButton,
  showNavigation,
} from './step.selectors';
import {
  goToFirstStep,
  goToNextStep,
  goToPreviousStep,
  goToStep,
  setBackButtonVisibility,
  setNavigationBarVisibility,
  setNextButtonLabel,
  setStepConfig,
} from './step.actions';
import { Store } from '@ngrx/store';
import { NextButtonLabelEnum } from '../enums/sales-stepper/next-button-label.enum';

@Injectable({ providedIn: 'root' })
export class StepFacade {
  currentStepKey$ = this.store.select(selectCurrentStepKey);
  nextStepKey$ = this.store.select(selectNexStepKey);
  selectedSteps$ = this.store.select(selectStepKeys);

  isFirstStep$ = this.store.select(isFirstStep);
  nextButtonLabel$ = this.store.select(nextButtonLabel);
  showNavigation$ = this.store.select(showNavigation);
  showBackButton$ = this.store.select(showBackButton);

  constructor(private readonly store: Store<StepState>) {}

  setStepConfig(steps: { steps: string[] }): void {
    this.store.dispatch(setStepConfig(steps));
  }

  goToFirstStep() {
    this.store.dispatch(goToFirstStep());
  }

  goToNextStep(): void {
    this.store.dispatch(goToNextStep());
  }

  goToPreviousStep(): void {
    this.store.dispatch(goToPreviousStep());
  }

  browserBack(): void {
    window.history.back();
  }

  goToStep(stepKey: string): void {
    this.store.dispatch(goToStep({ stepKey: stepKey }));
  }

  setNextButtonLabel(nextButtonLabel?: NextButtonLabelEnum): void {
    this.store.dispatch(setNextButtonLabel({ nextButtonLabel: nextButtonLabel }));
  }

  displayNavigationBar(): void {
    this.store.dispatch(setNavigationBarVisibility({ visible: true }));
  }

  hideNavigationBar(): void {
    this.store.dispatch(setNavigationBarVisibility({ visible: false }));
  }

  hideBackButton(): void {
    this.store.dispatch(setBackButtonVisibility({ visible: false }));
  }

  showBackButton(): void {
    this.store.dispatch(setBackButtonVisibility({ visible: true }));
  }
}
