import { Draft, produce } from 'immer';
import { Step } from '../step.model';
import { Action, createSelector, Selector, State, StateContext, Store } from '@ngxs/store';
import {
  ETFStepValidAction,
  GoToFinalStepAction,
  GoToNextStepAction,
  GoToPreviousStepAction,
  GoToStepAction,
  InsertStepsAfterAction,
  InsertStepsBeforeAction,
  RemoveStepsWithStepKeysAction,
  ReportStepLoadTimingAction,
  SetCurrentDecisionOnStepFlowConfig,
  SetStepCompleteAction,
  SetStepConfigurationAction,
  SetStepIncompleteAction,
  SetStepNavigationStartTimeAction,
  SetStepsAction,
  SetStepsEnabledState,
  SetStepToEditAction,
  UpdateCurrentStepImageAction,
  UpdateStepAction,
} from './step-flow.actions';
import { Injectable } from '@angular/core';
import { StepFlowConfig } from '../interfaces/step-flow-config.interface';
import { StepFactory } from '../factories/step.factory';
import { StepFlowUtil } from './step-flow.util';
import { StepDecision } from '../interfaces/step-decision.interface';
import { Log, LogFactory } from '@telenet/ng-lib-shared';

export interface StepFlowStateModel {
  initialized: boolean;
  stepConfiguration?: StepFlowConfig;
  steps: Step[];
  currentStep?: Step;
  reportStepLoadTiming: boolean;
  stepNavigationStartTime: number;
  isETFStepValid: boolean;
}

@State<StepFlowStateModel>({
  name: 'stepFlow',
  defaults: {
    initialized: false,
    stepConfiguration: undefined,
    steps: [],
    currentStep: undefined,
    reportStepLoadTiming: false,
    stepNavigationStartTime: 0,
    isETFStepValid: false,
  },
})
@Injectable()
export class StepFlowState {
  private readonly log: Log = LogFactory.createLogger(StepFlowState);

  constructor(
    public store: Store,
    private readonly stepFactory: StepFactory
  ) {}

  @Selector()
  public static currentStep(state: StepFlowStateModel): Step | undefined {
    return state.currentStep;
  }

  @Selector()
  public static currentStepImage(state: StepFlowStateModel): string {
    return state.currentStep?.image || '';
  }

  @Selector()
  public static stepNumber(state: StepFlowStateModel): number {
    if (!state?.currentStep) {
      return 0;
    }
    return state.steps.indexOf(state?.currentStep) + 1;
  }

  @Selector()
  public static key(state: StepFlowStateModel): string {
    return state.currentStep?.key || '';
  }

  @Selector()
  public static steps(state: StepFlowStateModel): Step[] {
    return state && state.steps;
  }

  @Selector()
  public static stepNavigationStartTime(state: StepFlowStateModel): number {
    return state.stepNavigationStartTime;
  }

  @Selector()
  public static reportStepLoadTiming(state: StepFlowStateModel): boolean {
    return state.reportStepLoadTiming;
  }

  @Selector()
  public static isETFStepValid(state: StepFlowStateModel): boolean {
    return state.isETFStepValid;
  }

  static containsStep(type: string) {
    return createSelector([StepFlowState], (state: StepFlowStateModel) => {
      return !!state.steps.find((step) => step.key === type);
    });
  }

  @Action(SetStepsAction)
  public initialise(ctx: StateContext<StepFlowStateModel>, action: SetStepsAction): void {
    ctx.setState(
      produce(ctx.getState(), (draft) => {
        draft.steps = action.steps;
        draft.currentStep = action.steps[0];
      })
    );
  }

  @Action(SetStepConfigurationAction)
  public setStepConfigurationAction(ctx: StateContext<StepFlowStateModel>, action: SetStepConfigurationAction): void {
    ctx.setState(
      produce(ctx.getState(), (draft) => {
        draft.stepConfiguration = action.stepFlowConfig;
      })
    );
    this.decideSteps(ctx, action.stepFlowConfig);
  }

  @Action(ReportStepLoadTimingAction)
  public ReportStepLoadTimingAction(ctx: StateContext<StepFlowStateModel>, action: ReportStepLoadTimingAction) {
    ctx.setState(
      produce(ctx.getState(), (draft) => {
        draft.reportStepLoadTiming = action.reportStepLoadTime;
      })
    );
  }

  @Action(SetStepNavigationStartTimeAction)
  public SetStepNavigationStartTimeAction(
    ctx: StateContext<StepFlowStateModel>,
    _action: SetStepNavigationStartTimeAction
  ) {
    ctx.setState(
      produce(ctx.getState(), (draft) => {
        draft.stepNavigationStartTime = new Date().getTime();
      })
    );
  }

  @Action(GoToFinalStepAction)
  public goToFinalStepAction(ctx: StateContext<StepFlowStateModel>, _action: GoToFinalStepAction): void {
    const steps = ctx.getState().steps;

    let nextStep: Step | undefined;
    steps
      .filter((step) => step && Object.keys(step).length)
      .forEach((step) => {
        if (step.isFinal()) {
          return;
        } else {
          if (step.isCompleted) {
            nextStep = StepFlowUtil.getNextIncompletedStep(steps);
          } else {
            step.setCompleted(true);
            nextStep = StepFlowUtil.getStepByRelativeIndexOffset(step, steps, '+', 1);
          }
        }
      });

    ctx.setState(produce(ctx.getState(), this.setCurrentStep(nextStep)));
  }

  @Action(GoToNextStepAction)
  public goToNextStepAction(ctx: StateContext<StepFlowStateModel>, _action: GoToNextStepAction): void {
    this.decideSteps(ctx, ctx.getState().stepConfiguration);
    const currentStep = ctx.getState().currentStep;
    const steps = ctx.getState().steps;
    if (currentStep?.isFinal?.()) {
      this.log.logError('The current step is of type: FINAL. It is not possible to go to the next step.');
      return;
    }

    let nextStep: Step | undefined;
    if (currentStep?.isCompleted) {
      nextStep = StepFlowUtil.getNextIncompletedStep(steps);
    } else if (currentStep) {
      currentStep.setCompleted(_action.isStepComplete ?? true);
      nextStep = StepFlowUtil.getStepByRelativeIndexOffset(currentStep, steps, '+', 1);
    }

    ctx.setState(produce(ctx.getState(), this.setCurrentStep(nextStep)));
  }

  @Action(GoToPreviousStepAction)
  public goToPreviousStepAction(ctx: StateContext<StepFlowStateModel>, _action: GoToPreviousStepAction): void {
    this.decideSteps(ctx, ctx.getState().stepConfiguration);

    let previousStep: Step | undefined;
    const currentStep = ctx.getState().currentStep;
    const steps = ctx.getState().steps;

    if (currentStep?.isCompleted) {
      previousStep = StepFlowUtil.getNextIncompletedStep(steps);
    } else {
      previousStep = StepFlowUtil.getStepByRelativeIndexOffset(currentStep, steps, '-', 1);

      previousStep?.setCompleted?.(false);
    }

    ctx.setState(
      produce(ctx.getState(), (draft) => {
        if (previousStep) {
          draft.currentStep = previousStep;
        }
      })
    );
  }

  @Action(SetStepToEditAction)
  public setStepToEdit(ctx: StateContext<StepFlowStateModel>, action: SetStepToEditAction) {
    const nextStep = ctx.getState().steps.find((step) => step.key === action.stepKey);
    ctx.setState(produce(ctx.getState(), this.setCurrentStep(nextStep)));
  }

  @Action(SetStepIncompleteAction)
  public setStepIncomplete(ctx: StateContext<StepFlowStateModel>, action: SetStepIncompleteAction) {
    const updatedSteps = ctx.getState().steps.map((step) => {
      if (step.key === action.stepKey) {
        step.isCompleted = false;
      }
      return step;
    });

    ctx.setState(
      produce(ctx.getState(), (draft) => {
        draft.steps = updatedSteps;
      })
    );
  }

  @Action(SetStepCompleteAction)
  public setStepCompleteAction(ctx: StateContext<StepFlowStateModel>, action: SetStepCompleteAction) {
    const updatedSteps = ctx.getState().steps.map((step) => {
      if (step.key === action.stepKey) {
        step.isCompleted = true;
      }
      return step;
    });

    ctx.setState(
      produce(ctx.getState(), (draft) => {
        draft.steps = updatedSteps;
      })
    );
  }

  @Action(InsertStepsBeforeAction)
  public InsertStepsBeforeAction(ctx: StateContext<StepFlowStateModel>, action: InsertStepsBeforeAction) {
    const stepIndex = ctx.getState().steps.findIndex((step) => step.key === action.stepKey);
    const steps = [...ctx.getState().steps];
    steps.splice(stepIndex, 0, ...action.steps);
    ctx.setState(
      produce(ctx.getState(), (draft) => {
        draft.steps = steps;
      })
    );
  }

  @Action(InsertStepsAfterAction)
  public InsertStepsAfterAction(ctx: StateContext<StepFlowStateModel>, action: InsertStepsAfterAction) {
    const stepIndex = ctx.getState().steps.findIndex((step) => step.key === action.stepKey) + 1;
    const steps = [...ctx.getState().steps];
    steps.splice(stepIndex, 0, ...action.steps);
    ctx.setState(
      produce(ctx.getState(), (draft) => {
        draft.steps = steps;
      })
    );
  }

  @Action(RemoveStepsWithStepKeysAction)
  public RemoveStepsWithStepKeysAction(ctx: StateContext<StepFlowStateModel>, action: RemoveStepsWithStepKeysAction) {
    const steps = ctx.getState().steps.filter((step: Step) => {
      return !action.stepKeys.includes(step.key);
    });
    ctx.setState(
      produce(ctx.getState(), (draft) => {
        draft.steps = steps;
      })
    );
  }

  @Action(SetStepsEnabledState)
  public setStepsEnabledState(ctx: StateContext<StepFlowStateModel>, action: SetStepsEnabledState) {
    const updatedSteps = ctx.getState().steps.map((step) => {
      const foundStep = action.steps.find((s) => s.stepKey === step.key);
      if (foundStep) {
        step.isEnabled = foundStep.state;
      }
      return step;
    });

    ctx.setState(
      produce(ctx.getState(), (draft) => {
        draft.steps = updatedSteps;
      })
    );
  }

  @Action(UpdateStepAction)
  public updateStepAction(ctx: StateContext<StepFlowStateModel>, action: UpdateStepAction) {
    const updatedSteps = ctx.getState().steps.map((step) => {
      if (step.key === action.step.key) {
        return action.step;
      }
      return step;
    });

    ctx.setState(
      produce(ctx.getState(), (draft) => {
        draft.steps = updatedSteps;
      })
    );
  }

  @Action(UpdateCurrentStepImageAction)
  public updateCurrentStepImageAction(ctx: StateContext<StepFlowStateModel>, action: UpdateCurrentStepImageAction) {
    if (ctx.getState().currentStep) {
      ctx.setState(
        produce(ctx.getState(), (draft) => {
          if (draft.currentStep) {
            draft.currentStep.image = action.image;
          }
        })
      );
    }
  }

  @Action(SetCurrentDecisionOnStepFlowConfig)
  public setCurrentDecisionOnStepFlowConfig(
    ctx: StateContext<StepFlowStateModel>,
    action: SetCurrentDecisionOnStepFlowConfig
  ) {
    const stepDecisionIndex = ctx.getState().stepConfiguration?.steps?.findIndex((step) => {
      return step === action.stepDecision;
    });
    if (stepDecisionIndex) {
      ctx.setState(
        produce(ctx.getState(), (draft) => {
          if (draft.stepConfiguration?.steps[stepDecisionIndex]) {
            (draft.stepConfiguration.steps[stepDecisionIndex] as StepDecision).currentDecision =
              action.currentFlowConfig;
          }
        })
      );
    }
  }

  @Action(ETFStepValidAction)
  public isETFStepValid(ctx: StateContext<StepFlowStateModel>, action: ETFStepValidAction) {
    ctx.setState(
      produce(ctx.getState(), (draft) => {
        draft.isETFStepValid = action.payload;
      })
    );
  }

  @Action(GoToStepAction)
  public goToStepAction(ctx: StateContext<StepFlowStateModel>, action: GoToStepAction): void {
    this.decideSteps(ctx, ctx.getState().stepConfiguration);
    const steps = ctx.getState().steps;
    const nextStep = StepFlowUtil.getActiveStep(steps, action.stepKey);

    ctx.setState(produce(ctx.getState(), this.setCurrentStep(nextStep)));
  }

  private decideSteps(ctx: StateContext<StepFlowStateModel>, stepFlowConfig?: StepFlowConfig) {
    if (stepFlowConfig) {
      const steps = this.stepFactory.createFlow(this.store, stepFlowConfig);
      ctx.setState(
        produce(ctx.getState(), (draft) => {
          draft.steps = steps;
          if (!ctx.getState().currentStep) {
            draft.currentStep = steps[0];
          }
        })
      );
    }
  }

  private setCurrentStep(nextStep: Step | undefined) {
    return (draft: Draft<StepFlowStateModel>) => {
      if (nextStep) {
        draft.currentStep = nextStep;
      }
    };
  }
}
