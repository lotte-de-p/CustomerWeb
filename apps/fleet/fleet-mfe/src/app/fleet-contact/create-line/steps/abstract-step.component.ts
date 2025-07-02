import { Component, OnInit } from '@angular/core';
import { AbstractBaseComponent } from '@telenet/ng-lib-page';
import { CreateFleetLineFlowUtil } from '../utils/create-line-flow.util';
import { CreateFleetLineFlowSelectors } from '../state/create-line-flow.selectors';
import { Store } from '@ngxs/store';
import { InputInterface } from '../models/input.interface';
import { StepSubmitInterface } from '../models/step.submit.interface';
import { Observable, of } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { CreateFleetLineFlowActions } from '../state/create-line-flow.actions';
import { filter, switchMap, takeUntil, tap } from 'rxjs/operators';
import { isEmpty } from 'lodash-es';
import { Step, StepFlowState } from '@telenet/ng-lib-step-flow';
import SetCurrentStepChanged = CreateFleetLineFlowActions.SetCurrentStepChanged;
import SetStepData = CreateFleetLineFlowActions.SetStepData;

@Component({
  selector: 'tg-abstract-step',
  template: '',
})
export abstract class AbstractStepComponent extends AbstractBaseComponent implements OnInit {
  currentStepKey: string;
  currentStep: Step;
  form: FormGroup = new FormGroup({});
  valueChanges = false;

  protected constructor(public store: Store) {
    super();
    this.currentStep = store.selectSnapshot(StepFlowState.currentStep);
    if (this.currentStep) {
      this.currentStep.nextButtonCallback = this.onSubmit.bind(this);
      this.currentStepKey = this.currentStep.key;
    }
  }

  ngOnInit(): void {
    this.initializeStepComponent();
    this.form.valueChanges.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
      if (this.valueChanges === false) {
        this.valueChanges = true;
        this.store.dispatch(new SetCurrentStepChanged(true));
      }
    });
  }

  abstract onStepSubmit(): Observable<boolean>;

  abstract setStepData(): string;

  abstract initializeStepComponent(): void;

  /* override this method and return false if your step does not require to reset next steps */
  isUserInputResetNeeded(): boolean {
    const stepUserInput = this.store.selectSnapshot(CreateFleetLineFlowSelectors.stepUserInputs);
    const nextSteps = this.findAllNextStepKeys();
    return stepUserInput.some((userInput) => nextSteps.includes(userInput.stepKey) && !isEmpty(userInput.input));
  }

  onSubmit(): Observable<StepSubmitInterface> {
    return this.onStepSubmit().pipe(
      filter((stepValid) => !!stepValid),
      tap(() => this.setStringToStepData()),
      switchMap(() => of(this.createSubmitData()))
    );
  }

  getCurrentStepData(): InputInterface {
    return this.getStepDataForStepKey(this.currentStepKey);
  }

  getStepDataForStepKey(stepKey: string): InputInterface {
    const stepUserInputInterfaces = this.store.selectSnapshot(CreateFleetLineFlowSelectors.stepUserInputs);

    return CreateFleetLineFlowUtil.getInputDataForStep(stepUserInputInterfaces, stepKey);
  }

  triggerFormValidation() {
    Object.keys(this.form.controls).forEach((key) => {
      this.form.controls[key].updateValueAndValidity();
      this.form.controls[key].markAsDirty();
    });
  }

  private createSubmitData(): StepSubmitInterface {
    const stepSubmitInterface = {} as StepSubmitInterface;

    stepSubmitInterface.shouldReset = this.isUserInputResetNeeded() && this.valueChanges;

    return stepSubmitInterface;
  }

  private setStringToStepData(): void {
    const stepData = this.setStepData();
    if (stepData) {
      this.store.dispatch(new SetStepData(this.currentStepKey, stepData));
    }
  }

  private findAllNextStepKeys(): string[] {
    const steps = this.store.selectSnapshot(StepFlowState.steps);
    const currentStep = this.store.selectSnapshot(StepFlowState.currentStep);

    return CreateFleetLineFlowUtil.findAllNextStepKeys(steps, currentStep);
  }
}
