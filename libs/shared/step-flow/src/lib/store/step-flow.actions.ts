import { Step } from '../step.model';
import { StepFlowConfig } from '../interfaces/step-flow-config.interface';
import { StepDecision } from '../interfaces/step-decision.interface';

export interface StepEnabledActionState {
  stepKey: string;
  state: boolean;
}

export class SetStepConfigurationAction {
  public static readonly type = '[StepFlow] set the step configuration';

  constructor(public stepFlowConfig: StepFlowConfig) {}
}

export class ReportStepLoadTimingAction {
  public static readonly type = '[StepFlow] set whether to capture step load time or not';

  constructor(public reportStepLoadTime: boolean) {}
}

export class SetStepNavigationStartTimeAction {
  public static readonly type = '[StepFlow] set step navigation start time in milliseconds';
}

export class SetStepsAction {
  public static readonly type = '[StepFlow] set the steps for the stepflow';

  constructor(public steps: Step[]) {}
}

export class GoToNextStepAction {
  public static readonly type = '[StepFlow] Go to next step';

  constructor(public isStepComplete?: boolean) {}
}

export class GoToFinalStepAction {
  public static readonly type = '[StepFlow] Go to final step';
}

export class GoToPreviousStepAction {
  public static readonly type = '[StepFlow] Go to previous step';
}

export class SetStepToEditAction {
  public static readonly type = '[StepFlow] set the stepflow to a certain step so it can be edited';

  constructor(public stepKey: string) {}
}

export class SetStepIncompleteAction {
  public static readonly type = '[StepFlow] set a certain step to the incomplete state';

  constructor(public stepKey: string) {}
}

export class SetStepCompleteAction {
  public static readonly type = '[StepFlow] set a certain step to the complete state';

  constructor(public stepKey: string) {}
}

export class InsertStepsBeforeAction {
  public static readonly type = '[StepFlow] Insert steps before a certain step with a certain key';

  constructor(
    public steps: Step[],
    public stepKey: string
  ) {}
}

export class InsertStepsAfterAction {
  public static readonly type = '[StepFlow] Insert steps behind a certain step with a certain key';

  constructor(
    public steps: Step[],
    public stepKey: string
  ) {}
}

export class RemoveStepsWithStepKeysAction {
  public static readonly type = '[StepFlow] Remove the steps with a key in the given list';

  constructor(public stepKeys: string[]) {}
}

export class SetStepsEnabledState {
  public static readonly type = '[StepFlow] Set the enabled states of multiple steps';

  constructor(public steps: StepEnabledActionState[]) {}
}

export class UpdateStepAction {
  public static readonly type = '[StepFlow] Change the properties of a certain step';

  constructor(public step: Step) {}
}

export class UpdateCurrentStepImageAction {
  public static readonly type = '[StepFlow] Update the current step image';

  constructor(public image: string) {}
}

export class SetCurrentDecisionOnStepFlowConfig {
  public static readonly type = '[StepFlow] Set the current decision on a step flow config';

  constructor(
    public stepDecision: StepDecision,
    public currentFlowConfig: StepFlowConfig
  ) {}
}

export class ETFStepValidAction {
  public static readonly type = '[StepFlow] Set ETF step valid';

  constructor(public payload: boolean) {}
}

export class GoToStepAction {
  public static readonly type = '[StepFlow] Change current step with given step by key';

  constructor(public stepKey: string) {}
}

export class NotifyStepRendered {
  public static readonly type = '[StepFlow] Notify step rendered';

  constructor(public stepKey: string) {}
}
