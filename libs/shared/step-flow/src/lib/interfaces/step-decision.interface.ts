import { Store } from '@ngxs/store';
import { StepFlowConfig } from './step-flow-config.interface';
import { StepConfig } from './step-config.interface';

export type StepDecisionType = (
  store: Store,
  possibleResults: StepFlowConfig[],
  currentDecision?: StepFlowConfig
) => StepFlowConfig;

export interface StepDecision {
  currentDecision?: StepFlowConfig;
  decisionFunction: StepDecisionType;
  possibleResults: StepFlowConfig[];
}

export function instanceOfStepDecision(stepConfig: StepConfig | StepDecision) {
  return 'decisionFunction' in stepConfig;
}
