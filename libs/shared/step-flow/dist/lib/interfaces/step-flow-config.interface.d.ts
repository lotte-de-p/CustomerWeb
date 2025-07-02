import { Store } from '@ngxs/store';
import { StepDecision } from './step-decision.interface';
import { StepConfig } from './step-config.interface';
export type InitFlowAction = (store: Store) => void;
export interface StepFlowConfig {
    key: string;
    steps: (StepConfig | StepDecision)[];
    initFlowAction?: InitFlowAction;
}
//# sourceMappingURL=step-flow-config.interface.d.ts.map