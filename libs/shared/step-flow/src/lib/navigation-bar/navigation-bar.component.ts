import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormErrorService } from '@telenet/ng-lib-form';
import { Store } from '@ngxs/store';
import { NavigationBarNextLabelEnum } from './navigation-bar-next-label.enum';
import { GoToNextStepAction, GoToPreviousStepAction, StepFlowState, StepFlowUtil } from '../store';
import { Step } from '../step.model';
import { take, tap } from 'rxjs/operators';
import { LoaderData, LoaderService } from '@telenet/ng-lib-page';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-step-navigation-bar-monorepo',
  templateUrl: './navigation-bar.component.html',
})
export class NavigationBarComponent implements OnInit {
  @Input() dynamicShadow: boolean;
  @Input() showStepCounter: boolean;
  @Input() showStepProgressBar: boolean;
  @Input() showSalesContactNumber: boolean;
  @Input() styling: 'default' | 'buttons' = 'default';
  @Input() buttonTextOverride: string;
  @Input() messageGroup = '';
  currentStep: Step;
  isConfirmationStep: boolean;
  stepCount: number;
  currentStepNumber: number;
  progressPercentage: string;
  hasNextStep = false;
  hasPreviousStep = false;
  previousStepDisabled = false;
  isLoading = false;
  nextStepLabel: NavigationBarNextLabelEnum = NavigationBarNextLabelEnum.START;
  alternativeFirstStep = false;
  buttonTypeOverride: NavigationBarNextLabelEnum;

  constructor(
    private readonly store: Store,
    private readonly formErrorService: FormErrorService,
    private readonly loaderService: LoaderService,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.store
      .select(StepFlowState.currentStep)
      .pipe(
        untilDestroyed(this),
        tap((currentStep?: Step) => {
          if (currentStep) {
            this.alternativeFirstStep = currentStep.asAlternativeFirstStep;
          }
        })
      )
      .subscribe((currentStep?: Step) => {
        if (!currentStep) {
          throw Error('Could not initialise stepper navigation bar');
        } else {
          this.currentStep = currentStep;
        }
        this.isConfirmationStep = currentStep.isConfirm();
        const steps = this.store.selectSnapshot(StepFlowState.steps);
        this.stepCount = StepFlowUtil.getStepCount(steps);
        this.currentStepNumber = StepFlowUtil.getStepIndex(currentStep, steps) + 1;
        this.hasNextStep = StepFlowUtil.hasNextStep(currentStep, steps);
        this.hasPreviousStep = StepFlowUtil.hasPreviousStep(currentStep, steps);
        this.previousStepDisabled = currentStep.previousStepDisabled;
        this.nextStepLabel = this.getNextLabel();
        this.progressPercentage = this.calculateProgress();
      });
    this.loaderService.loadingStatus.pipe(untilDestroyed(this)).subscribe((loaderData: LoaderData) => {
      this.isLoading = !!loaderData.isAPIExecutionInProgress;
      this.changeDetectorRef.detectChanges();
    });
  }

  goToNextStep(): void {
    if (!this.isLoading) {
      this.formErrorService.submit$.next(null);
      if (this.currentStep.nextButtonCallback) {
        this.currentStep
          .nextButtonCallback()
          .pipe(take(1))
          .subscribe((response: unknown) => {
            if (response) {
              this.store.dispatch(new GoToNextStepAction());
            }
          });
      } else {
        this.store.dispatch(new GoToNextStepAction());
      }
    }
  }

  private calculateProgress(): string {
    return ((this.currentStepNumber / this.stepCount) * 100).toFixed(0);
  }

  getNextLabel(): NavigationBarNextLabelEnum {
    if (this.buttonTypeOverride) {
      return this.buttonTypeOverride;
    } else if (this.isCurrentStepAlternativeFirstStep() || this.currentStep.isConfirm()) {
      return NavigationBarNextLabelEnum.CONFIRM;
    } else if (this.isCurrentStepFirstStep()) {
      return NavigationBarNextLabelEnum.START;
    } else if (this.currentStep.isFinal()) {
      return NavigationBarNextLabelEnum.FINAL;
    } else {
      return NavigationBarNextLabelEnum.NEXT;
    }
  }

  private isCurrentStepFirstStep() {
    return this.currentStepNumber === 1;
  }

  goToPreviousStep(): void {
    if (this.currentStep.prevButtonCallback) {
      this.currentStep
        .prevButtonCallback()
        .pipe(take(1))
        .subscribe((response: unknown) => {
          if (response) {
            this.store.dispatch(new GoToPreviousStepAction());
          }
        });
    } else {
      this.store.dispatch(new GoToPreviousStepAction());
    }
  }

  isCurrentStepAlternativeFirstStep(): boolean {
    return this.isCurrentStepFirstStep() && this.alternativeFirstStep;
  }
}
