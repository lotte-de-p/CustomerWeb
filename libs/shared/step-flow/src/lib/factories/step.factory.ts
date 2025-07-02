import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { StepFlowConfig } from '../interfaces/step-flow-config.interface';
import { Step } from '../step.model';
import { StepConfig } from '../interfaces/step-config.interface';
import { instanceOfStepDecision, StepDecision } from '../interfaces/step-decision.interface';
import { StepBuilder } from '../step.builder';
import { SetCurrentDecisionOnStepFlowConfig } from '../store/step-flow.actions';
import { TemplateFactory } from './template.factory';

@Injectable({
  providedIn: 'root',
})
export class StepFactory {
  constructor(private readonly templateFactory: TemplateFactory) {}

  createFlow(store: Store, stepFlowConfig: StepFlowConfig): Step[] {
    let steps: Step[] = [];
    stepFlowConfig.steps.forEach((stepConfig: StepConfig | StepDecision) => {
      if (instanceOfStepDecision(stepConfig)) {
        steps = steps.concat(this.decideFlow(store, stepConfig as StepDecision));
      } else {
        steps.push(this.createStep(stepConfig as StepConfig));
      }
    });
    return steps;
  }

  createStep(stepConfig: StepConfig) {
    const stepBuilder = StepBuilder.builder(stepConfig.key)
      .withLayoutOptions(stepConfig.layoutOptions)
      .withAnalyticsOptions(stepConfig.analyticsOptions)
      .withComponent(stepConfig.component)
      .withImage(stepConfig.imagePath);
    this.templateFactory.determineTemplate(stepBuilder, stepConfig);
    if (stepConfig.isFinalState) {
      stepBuilder.withFinalState();
    }
    return stepBuilder.build();
  }

  decideFlow(store: Store, stepDecision: StepDecision): Step[] {
    const decidedFlow = stepDecision.decisionFunction(
      store,
      stepDecision.possibleResults,
      stepDecision.currentDecision
    );
    store.dispatch(new SetCurrentDecisionOnStepFlowConfig(stepDecision, decidedFlow));
    if (stepDecision.currentDecision !== decidedFlow && typeof decidedFlow.initFlowAction === 'function') {
      decidedFlow.initFlowAction(store);
    }
    return this.createFlow(store, decidedFlow);
  }
}
