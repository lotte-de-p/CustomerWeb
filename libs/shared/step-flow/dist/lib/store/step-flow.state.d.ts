import { Step } from '../step.model';
import { StateContext, Store } from '@ngxs/store';
import { ETFStepValidAction, GoToFinalStepAction, GoToNextStepAction, GoToPreviousStepAction, GoToStepAction, InsertStepsAfterAction, InsertStepsBeforeAction, RemoveStepsWithStepKeysAction, ReportStepLoadTimingAction, SetCurrentDecisionOnStepFlowConfig, SetStepCompleteAction, SetStepConfigurationAction, SetStepIncompleteAction, SetStepNavigationStartTimeAction, SetStepsAction, SetStepsEnabledState, SetStepToEditAction, UpdateCurrentStepImageAction, UpdateStepAction } from './step-flow.actions';
import { StepFlowConfig } from '../interfaces/step-flow-config.interface';
import { StepFactory } from '../factories/step.factory';
import * as i0 from "@angular/core";
export interface StepFlowStateModel {
    initialized: boolean;
    stepConfiguration?: StepFlowConfig;
    steps: Step[];
    currentStep?: Step;
    reportStepLoadTiming: boolean;
    stepNavigationStartTime: number;
    isETFStepValid: boolean;
}
export declare class StepFlowState {
    store: Store;
    private readonly stepFactory;
    private readonly log;
    constructor(store: Store, stepFactory: StepFactory);
    static currentStep(state: StepFlowStateModel): Step | undefined;
    static currentStepImage(state: StepFlowStateModel): string;
    static stepNumber(state: StepFlowStateModel): number;
    static key(state: StepFlowStateModel): string;
    static steps(state: StepFlowStateModel): Step[];
    static stepNavigationStartTime(state: StepFlowStateModel): number;
    static reportStepLoadTiming(state: StepFlowStateModel): boolean;
    static isETFStepValid(state: StepFlowStateModel): boolean;
    static containsStep(type: string): (state: StepFlowStateModel) => boolean;
    initialise(ctx: StateContext<StepFlowStateModel>, action: SetStepsAction): void;
    setStepConfigurationAction(ctx: StateContext<StepFlowStateModel>, action: SetStepConfigurationAction): void;
    ReportStepLoadTimingAction(ctx: StateContext<StepFlowStateModel>, action: ReportStepLoadTimingAction): void;
    SetStepNavigationStartTimeAction(ctx: StateContext<StepFlowStateModel>, _action: SetStepNavigationStartTimeAction): void;
    goToFinalStepAction(ctx: StateContext<StepFlowStateModel>, _action: GoToFinalStepAction): void;
    goToNextStepAction(ctx: StateContext<StepFlowStateModel>, _action: GoToNextStepAction): void;
    goToPreviousStepAction(ctx: StateContext<StepFlowStateModel>, _action: GoToPreviousStepAction): void;
    setStepToEdit(ctx: StateContext<StepFlowStateModel>, action: SetStepToEditAction): void;
    setStepIncomplete(ctx: StateContext<StepFlowStateModel>, action: SetStepIncompleteAction): void;
    setStepCompleteAction(ctx: StateContext<StepFlowStateModel>, action: SetStepCompleteAction): void;
    InsertStepsBeforeAction(ctx: StateContext<StepFlowStateModel>, action: InsertStepsBeforeAction): void;
    InsertStepsAfterAction(ctx: StateContext<StepFlowStateModel>, action: InsertStepsAfterAction): void;
    RemoveStepsWithStepKeysAction(ctx: StateContext<StepFlowStateModel>, action: RemoveStepsWithStepKeysAction): void;
    setStepsEnabledState(ctx: StateContext<StepFlowStateModel>, action: SetStepsEnabledState): void;
    updateStepAction(ctx: StateContext<StepFlowStateModel>, action: UpdateStepAction): void;
    updateCurrentStepImageAction(ctx: StateContext<StepFlowStateModel>, action: UpdateCurrentStepImageAction): void;
    setCurrentDecisionOnStepFlowConfig(ctx: StateContext<StepFlowStateModel>, action: SetCurrentDecisionOnStepFlowConfig): void;
    isETFStepValid(ctx: StateContext<StepFlowStateModel>, action: ETFStepValidAction): void;
    goToStepAction(ctx: StateContext<StepFlowStateModel>, action: GoToStepAction): void;
    private decideSteps;
    private setCurrentStep;
    static ɵfac: i0.ɵɵFactoryDeclaration<StepFlowState, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StepFlowState>;
}
//# sourceMappingURL=step-flow.state.d.ts.map