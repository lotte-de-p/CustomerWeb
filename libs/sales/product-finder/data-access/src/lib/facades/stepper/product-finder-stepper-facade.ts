import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductFinderStepperSlice } from '../../+state/stepper/product-finder-stepper.reducers';
import {
  goToNextStep,
  goToPreviousStep,
  nextButtonClicked,
  notifyStepRendered,
  redoTest,
} from '../../+state/stepper/product-finder-stepper.actions';
import { ProductFinderStep } from '../../entities/stepper/product-finder-step';
import {
  selectCurrentStep,
  selectCurrentStepKey,
  selectProgressBarVisible,
  selectSteps,
  selectVisible,
} from '../../+state/stepper/product-finder-stepper.selectors';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { findIndex } from 'lodash-es';
import { ProductFinderStepEnum } from '../../entities/stepper/product-finder-step.enum';

@Injectable({ providedIn: 'root' })
export class ProductFinderStepperFacade {
  currentStep$: Observable<ProductFinderStep> = this.store.select(selectCurrentStep);
  currentStepKey$: Observable<string> = this.store.select(selectCurrentStepKey);
  steps$: Observable<ProductFinderStep[]> = this.store.select(selectSteps);
  currentStepNumber$: Observable<number> = combineLatest([this.currentStep$, this.steps$]).pipe(
    map(
      ([currentStep, steps]: [ProductFinderStep, ProductFinderStep[]]) =>
        findIndex(steps, (step: ProductFinderStep) => step.key === currentStep.key) + 1
    )
  );
  progressPercentage$: Observable<number> = combineLatest([
    this.currentStepKey$,
    this.currentStepNumber$,
    this.steps$,
  ]).pipe(
    map(([currentStepKey, currentStepNumber, steps]: [string, number, ProductFinderStep[]]) =>
      currentStepKey === ProductFinderStepEnum.PREFERENCE ? 25 : Math.round((currentStepNumber / steps.length) * 100)
    )
  );
  progressBarVisible$: Observable<boolean> = this.store.select(selectProgressBarVisible);
  visible$: Observable<boolean> = this.store.select(selectVisible);

  constructor(private readonly store: Store<ProductFinderStepperSlice>) {}

  goToPreviousStep(): void {
    this.store.dispatch(goToPreviousStep());
  }

  goToNextStep(): void {
    this.store.dispatch(goToNextStep());
  }

  nextButtonClicked(): void {
    this.store.dispatch(nextButtonClicked());
  }

  redoTest(): void {
    this.store.dispatch(redoTest());
  }

  notifyStepRendered(step: string): void {
    this.store.dispatch(notifyStepRendered({ step }));
  }
}
