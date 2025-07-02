import { Store } from '@ngxs/store';
import { StepInterface } from './step.interface';
import { StepContainerDirective } from './step-container.directive';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DataLayerAttributes, DataLayerService } from '@telenet/ng-lib-datalayer';
import { StepFlowUtil } from '../store/step-flow.util';
import { Step } from '../step.model';
import { isEmpty } from 'lodash-es';
import { AbstractBaseComponent, LoaderData, LoaderService } from '@telenet/ng-lib-page';
import { StepFlowAnalyticsConfig } from '../interfaces/step-flow-analytics-config.interface';
import { StepFlowState } from '../store/step-flow.state';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-step-container',
  templateUrl: 'step-container.component.html',
})
export class StepContainerComponent extends AbstractBaseComponent implements OnInit {
  @Input() stepFlowAnalyticsConfig: StepFlowAnalyticsConfig;
  @Input() messageGroup: string;
  @ViewChild(StepContainerDirective, { static: true }) stepContainer: StepContainerDirective;
  previousStep: Step;
  stepNavigationEndTime: number;

  constructor(
    private readonly store: Store,
    private readonly loaderService: LoaderService,
    private readonly dataLayerService: DataLayerService
  ) {
    super();
  }

  ngOnInit(): void {
    this.obs(this.store.select(StepFlowState.currentStep))
      .pipe(untilDestroyed(this))
      .subscribe((currentStep: Step | undefined) => {
        if (currentStep) {
          this.stepNavigationEndTime = new Date().getTime();
          this.reportStepLoadTime(currentStep);
          const viewContainerRef = this.stepContainer.viewContainerRef;
          viewContainerRef.clear();
          const componentRef = viewContainerRef.createComponent(currentStep.template);
          (componentRef.instance as StepInterface).store = this.store;
          (componentRef.instance as StepInterface).currentStep = currentStep;
          if (this.messageGroup) {
            (componentRef.instance as StepInterface).messageGroup = this.messageGroup;
          }

          if (!isEmpty(this.stepFlowAnalyticsConfig)) {
            const attributes: DataLayerAttributes = {
              stepId: this.getAnalyticsStepName(),
              intent: this.stepFlowAnalyticsConfig.analyticsIntent,
              flowType: this.stepFlowAnalyticsConfig.analyticsFlowType,
              cart: this.stepFlowAnalyticsConfig.cart,
            };
            this.dataLayerService.addStepViewEvent(attributes);
          }
        }
      });
    this.getLastAPIExecutionTime();
  }

  private getLastAPIExecutionTime(): void {
    this.loaderService.loadingStatus.pipe(untilDestroyed(this)).subscribe((loaderData: LoaderData) => {
      if (loaderData.isAPIExecutionInProgress) {
        this.stepNavigationEndTime = 0;
      } else {
        this.stepNavigationEndTime = loaderData.dataCapturedOn;
      }
    });
  }

  private reportStepLoadTime(currentStep: Step): void {
    const reportStepLoadTiming = this.store.selectSnapshot(StepFlowState.reportStepLoadTiming);
    if (reportStepLoadTiming) {
      const steps = this.store.selectSnapshot(StepFlowState.steps);

      const currentStepIndex = StepFlowUtil.getStepIndex(currentStep, steps);
      const previousStepIndex = this.previousStep ? StepFlowUtil.getStepIndex(this.previousStep, steps) : 0;
      if (currentStepIndex - previousStepIndex >= 0) {
        this.delayStepLoadTime();
      }
      this.previousStep = currentStep;
    }
  }

  private delayStepLoadTime(): void {
    setTimeout(
      (stepNavigationEndTime: number) => {
        if (stepNavigationEndTime === this.stepNavigationEndTime && this.stepNavigationEndTime !== 0) {
          this.fireStepLoadTimeEvent();
        } else {
          this.delayStepLoadTime();
        }
      },
      10,
      this.stepNavigationEndTime
    );
  }

  private fireStepLoadTimeEvent(): void {
    const stepNavigationStartTime = this.store.selectSnapshot(StepFlowState.stepNavigationStartTime);

    const attributes: DataLayerAttributes = {
      itemName:
        stepNavigationStartTime > 0
          ? ((this.stepNavigationEndTime - stepNavigationStartTime) / 1000).toFixed(2).toString()
          : (
              (this.stepNavigationEndTime -
                (window.performance.getEntries()[0] as PerformanceNavigationTiming).fetchStart) /
              1000
            )
              .toFixed(2)
              .toString(),
    };
    this.dataLayerService.addStepLoadTimeEvent(attributes);
  }

  private getAnalyticsStepName(): string {
    const currentStep = this.store.selectSnapshot(StepFlowState.currentStep);
    if (currentStep?.analyticsOptions?.name) {
      return `${currentStep.analyticsOptions.name}`;
    }
    return `${currentStep?.key}`;
  }
}
