import { Step } from '../step.model';
import { StepFlowConfig } from '../interfaces/step-flow-config.interface';
import { StepDecision } from '../interfaces/step-decision.interface';
export interface StepEnabledActionState {
    stepKey: string;
    state: boolean;
}
export declare class SetStepConfigurationAction {
    stepFlowConfig: StepFlowConfig;
    static readonly type = "[StepFlow] set the step configuration";
    constructor(stepFlowConfig: StepFlowConfig);
}
export declare class ReportStepLoadTimingAction {
    reportStepLoadTime: boolean;
    static readonly type = "[StepFlow] set whether to capture step load time or not";
    constructor(reportStepLoadTime: boolean);
}
export declare class SetStepNavigationStartTimeAction {
    static readonly type = "[StepFlow] set step navigation start time in milliseconds";
}
export declare class SetStepsAction {
    steps: Step[];
    static readonly type = "[StepFlow] set the steps for the stepflow";
    constructor(steps: Step[]);
}
export declare class GoToNextStepAction {
    isStepComplete?: boolean | undefined;
    static readonly type = "[StepFlow] Go to next step";
    constructor(isStepComplete?: boolean | undefined);
}
export declare class GoToFinalStepAction {
    static readonly type = "[StepFlow] Go to final step";
}
export declare class GoToPreviousStepAction {
    static readonly type = "[StepFlow] Go to previous step";
}
export declare class SetStepToEditAction {
    stepKey: string;
    static readonly type = "[StepFlow] set the stepflow to a certain step so it can be edited";
    constructor(stepKey: string);
}
export declare class SetStepIncompleteAction {
    stepKey: string;
    static readonly type = "[StepFlow] set a certain step to the incomplete state";
    constructor(stepKey: string);
}
export declare class SetStepCompleteAction {
    stepKey: string;
    static readonly type = "[StepFlow] set a certain step to the complete state";
    constructor(stepKey: string);
}
export declare class InsertStepsBeforeAction {
    steps: Step[];
    stepKey: string;
    static readonly type = "[StepFlow] Insert steps before a certain step with a certain key";
    constructor(steps: Step[], stepKey: string);
}
export declare class InsertStepsAfterAction {
    steps: Step[];
    stepKey: string;
    static readonly type = "[StepFlow] Insert steps behind a certain step with a certain key";
    constructor(steps: Step[], stepKey: string);
}
export declare class RemoveStepsWithStepKeysAction {
    stepKeys: string[];
    static readonly type = "[StepFlow] Remove the steps with a key in the given list";
    constructor(stepKeys: string[]);
}
export declare class SetStepsEnabledState {
    steps: StepEnabledActionState[];
    static readonly type = "[StepFlow] Set the enabled states of multiple steps";
    constructor(steps: StepEnabledActionState[]);
}
export declare class UpdateStepAction {
    step: Step;
    static readonly type = "[StepFlow] Change the properties of a certain step";
    constructor(step: Step);
}
export declare class UpdateCurrentStepImageAction {
    image: string;
    static readonly type = "[StepFlow] Update the current step image";
    constructor(image: string);
}
export declare class SetCurrentDecisionOnStepFlowConfig {
    stepDecision: StepDecision;
    currentFlowConfig: StepFlowConfig;
    static readonly type = "[StepFlow] Set the current decision on a step flow config";
    constructor(stepDecision: StepDecision, currentFlowConfig: StepFlowConfig);
}
export declare class ETFStepValidAction {
    payload: boolean;
    static readonly type = "[StepFlow] Set ETF step valid";
    constructor(payload: boolean);
}
export declare class GoToStepAction {
    stepKey: string;
    static readonly type = "[StepFlow] Change current step with given step by key";
    constructor(stepKey: string);
}
export declare class NotifyStepRendered {
    stepKey: string;
    static readonly type = "[StepFlow] Notify step rendered";
    constructor(stepKey: string);
}
//# sourceMappingURL=step-flow.actions.d.ts.map