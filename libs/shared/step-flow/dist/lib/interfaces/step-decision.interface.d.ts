import { Store } from '@ngxs/store';
import { StepFlowConfig } from './step-flow-config.interface';
import { StepConfig } from './step-config.interface';
export type StepDecisionType = (store: Store, possibleResults: StepFlowConfig[], currentDecision?: StepFlowConfig) => StepFlowConfig;
export interface StepDecision {
    currentDecision?: StepFlowConfig;
    decisionFunction: StepDecisionType;
    possibleResults: StepFlowConfig[];
}
export declare function instanceOfStepDecision(stepConfig: StepConfig | StepDecision): boolean;
//# sourceMappingURL=step-decision.interface.d.ts.map