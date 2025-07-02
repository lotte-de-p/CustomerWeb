var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var StepFlowState_1;
import { produce } from 'immer';
import { Action, createSelector, Selector, State } from '@ngxs/store';
import { ETFStepValidAction, GoToFinalStepAction, GoToNextStepAction, GoToPreviousStepAction, GoToStepAction, InsertStepsAfterAction, InsertStepsBeforeAction, RemoveStepsWithStepKeysAction, ReportStepLoadTimingAction, SetCurrentDecisionOnStepFlowConfig, SetStepCompleteAction, SetStepConfigurationAction, SetStepIncompleteAction, SetStepNavigationStartTimeAction, SetStepsAction, SetStepsEnabledState, SetStepToEditAction, UpdateCurrentStepImageAction, UpdateStepAction, } from './step-flow.actions';
import { Injectable } from '@angular/core';
import { StepFlowUtil } from './step-flow.util';
import { LogFactory } from '@telenet/ng-lib-shared';
import * as i0 from "@angular/core";
import * as i1 from "@ngxs/store";
import * as i2 from "../factories/step.factory";
let StepFlowState = class StepFlowState {
    static { StepFlowState_1 = this; }
    store;
    stepFactory;
    log = LogFactory.createLogger(StepFlowState_1);
    constructor(store, stepFactory) {
        this.store = store;
        this.stepFactory = stepFactory;
    }
    static currentStep(state) {
        return state.currentStep;
    }
    static currentStepImage(state) {
        return state.currentStep?.image || '';
    }
    static stepNumber(state) {
        if (!state?.currentStep) {
            return 0;
        }
        return state.steps.indexOf(state?.currentStep) + 1;
    }
    static key(state) {
        return state.currentStep?.key || '';
    }
    static steps(state) {
        return state && state.steps;
    }
    static stepNavigationStartTime(state) {
        return state.stepNavigationStartTime;
    }
    static reportStepLoadTiming(state) {
        return state.reportStepLoadTiming;
    }
    static isETFStepValid(state) {
        return state.isETFStepValid;
    }
    static containsStep(type) {
        return createSelector([StepFlowState_1], (state) => {
            return !!state.steps.find((step) => step.key === type);
        });
    }
    initialise(ctx, action) {
        ctx.setState(produce(ctx.getState(), (draft) => {
            draft.steps = action.steps;
            draft.currentStep = action.steps[0];
        }));
    }
    setStepConfigurationAction(ctx, action) {
        ctx.setState(produce(ctx.getState(), (draft) => {
            draft.stepConfiguration = action.stepFlowConfig;
        }));
        this.decideSteps(ctx, action.stepFlowConfig);
    }
    ReportStepLoadTimingAction(ctx, action) {
        ctx.setState(produce(ctx.getState(), (draft) => {
            draft.reportStepLoadTiming = action.reportStepLoadTime;
        }));
    }
    SetStepNavigationStartTimeAction(ctx, _action) {
        ctx.setState(produce(ctx.getState(), (draft) => {
            draft.stepNavigationStartTime = new Date().getTime();
        }));
    }
    goToFinalStepAction(ctx, _action) {
        const steps = ctx.getState().steps;
        let nextStep;
        steps
            .filter((step) => step && Object.keys(step).length)
            .forEach((step) => {
            if (step.isFinal()) {
                return;
            }
            else {
                if (step.isCompleted) {
                    nextStep = StepFlowUtil.getNextIncompletedStep(steps);
                }
                else {
                    step.setCompleted(true);
                    nextStep = StepFlowUtil.getStepByRelativeIndexOffset(step, steps, '+', 1);
                }
            }
        });
        ctx.setState(produce(ctx.getState(), this.setCurrentStep(nextStep)));
    }
    goToNextStepAction(ctx, _action) {
        this.decideSteps(ctx, ctx.getState().stepConfiguration);
        const currentStep = ctx.getState().currentStep;
        const steps = ctx.getState().steps;
        if (currentStep?.isFinal?.()) {
            this.log.logError('The current step is of type: FINAL. It is not possible to go to the next step.');
            return;
        }
        let nextStep;
        if (currentStep?.isCompleted) {
            nextStep = StepFlowUtil.getNextIncompletedStep(steps);
        }
        else if (currentStep) {
            currentStep.setCompleted(_action.isStepComplete ?? true);
            nextStep = StepFlowUtil.getStepByRelativeIndexOffset(currentStep, steps, '+', 1);
        }
        ctx.setState(produce(ctx.getState(), this.setCurrentStep(nextStep)));
    }
    goToPreviousStepAction(ctx, _action) {
        this.decideSteps(ctx, ctx.getState().stepConfiguration);
        let previousStep;
        const currentStep = ctx.getState().currentStep;
        const steps = ctx.getState().steps;
        if (currentStep?.isCompleted) {
            previousStep = StepFlowUtil.getNextIncompletedStep(steps);
        }
        else {
            previousStep = StepFlowUtil.getStepByRelativeIndexOffset(currentStep, steps, '-', 1);
            previousStep?.setCompleted?.(false);
        }
        ctx.setState(produce(ctx.getState(), (draft) => {
            if (previousStep) {
                draft.currentStep = previousStep;
            }
        }));
    }
    setStepToEdit(ctx, action) {
        const nextStep = ctx.getState().steps.find((step) => step.key === action.stepKey);
        ctx.setState(produce(ctx.getState(), this.setCurrentStep(nextStep)));
    }
    setStepIncomplete(ctx, action) {
        const updatedSteps = ctx.getState().steps.map((step) => {
            if (step.key === action.stepKey) {
                step.isCompleted = false;
            }
            return step;
        });
        ctx.setState(produce(ctx.getState(), (draft) => {
            draft.steps = updatedSteps;
        }));
    }
    setStepCompleteAction(ctx, action) {
        const updatedSteps = ctx.getState().steps.map((step) => {
            if (step.key === action.stepKey) {
                step.isCompleted = true;
            }
            return step;
        });
        ctx.setState(produce(ctx.getState(), (draft) => {
            draft.steps = updatedSteps;
        }));
    }
    InsertStepsBeforeAction(ctx, action) {
        const stepIndex = ctx.getState().steps.findIndex((step) => step.key === action.stepKey);
        const steps = [...ctx.getState().steps];
        steps.splice(stepIndex, 0, ...action.steps);
        ctx.setState(produce(ctx.getState(), (draft) => {
            draft.steps = steps;
        }));
    }
    InsertStepsAfterAction(ctx, action) {
        const stepIndex = ctx.getState().steps.findIndex((step) => step.key === action.stepKey) + 1;
        const steps = [...ctx.getState().steps];
        steps.splice(stepIndex, 0, ...action.steps);
        ctx.setState(produce(ctx.getState(), (draft) => {
            draft.steps = steps;
        }));
    }
    RemoveStepsWithStepKeysAction(ctx, action) {
        const steps = ctx.getState().steps.filter((step) => {
            return !action.stepKeys.includes(step.key);
        });
        ctx.setState(produce(ctx.getState(), (draft) => {
            draft.steps = steps;
        }));
    }
    setStepsEnabledState(ctx, action) {
        const updatedSteps = ctx.getState().steps.map((step) => {
            const foundStep = action.steps.find((s) => s.stepKey === step.key);
            if (foundStep) {
                step.isEnabled = foundStep.state;
            }
            return step;
        });
        ctx.setState(produce(ctx.getState(), (draft) => {
            draft.steps = updatedSteps;
        }));
    }
    updateStepAction(ctx, action) {
        const updatedSteps = ctx.getState().steps.map((step) => {
            if (step.key === action.step.key) {
                return action.step;
            }
            return step;
        });
        ctx.setState(produce(ctx.getState(), (draft) => {
            draft.steps = updatedSteps;
        }));
    }
    updateCurrentStepImageAction(ctx, action) {
        if (ctx.getState().currentStep) {
            ctx.setState(produce(ctx.getState(), (draft) => {
                if (draft.currentStep) {
                    draft.currentStep.image = action.image;
                }
            }));
        }
    }
    setCurrentDecisionOnStepFlowConfig(ctx, action) {
        const stepDecisionIndex = ctx.getState().stepConfiguration?.steps?.findIndex((step) => {
            return step === action.stepDecision;
        });
        if (stepDecisionIndex) {
            ctx.setState(produce(ctx.getState(), (draft) => {
                if (draft.stepConfiguration?.steps[stepDecisionIndex]) {
                    draft.stepConfiguration.steps[stepDecisionIndex].currentDecision =
                        action.currentFlowConfig;
                }
            }));
        }
    }
    isETFStepValid(ctx, action) {
        ctx.setState(produce(ctx.getState(), (draft) => {
            draft.isETFStepValid = action.payload;
        }));
    }
    goToStepAction(ctx, action) {
        this.decideSteps(ctx, ctx.getState().stepConfiguration);
        const steps = ctx.getState().steps;
        const nextStep = StepFlowUtil.getActiveStep(steps, action.stepKey);
        ctx.setState(produce(ctx.getState(), this.setCurrentStep(nextStep)));
    }
    decideSteps(ctx, stepFlowConfig) {
        if (stepFlowConfig) {
            const steps = this.stepFactory.createFlow(this.store, stepFlowConfig);
            ctx.setState(produce(ctx.getState(), (draft) => {
                draft.steps = steps;
                if (!ctx.getState().currentStep) {
                    draft.currentStep = steps[0];
                }
            }));
        }
    }
    setCurrentStep(nextStep) {
        return (draft) => {
            if (nextStep) {
                draft.currentStep = nextStep;
            }
        };
    }
    static ɵfac = function StepFlowState_Factory(t) { return new (t || StepFlowState)(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.StepFactory)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StepFlowState, factory: StepFlowState.ɵfac });
};
__decorate([
    Action(SetStepsAction)
], StepFlowState.prototype, "initialise", null);
__decorate([
    Action(SetStepConfigurationAction)
], StepFlowState.prototype, "setStepConfigurationAction", null);
__decorate([
    Action(ReportStepLoadTimingAction)
], StepFlowState.prototype, "ReportStepLoadTimingAction", null);
__decorate([
    Action(SetStepNavigationStartTimeAction)
], StepFlowState.prototype, "SetStepNavigationStartTimeAction", null);
__decorate([
    Action(GoToFinalStepAction)
], StepFlowState.prototype, "goToFinalStepAction", null);
__decorate([
    Action(GoToNextStepAction)
], StepFlowState.prototype, "goToNextStepAction", null);
__decorate([
    Action(GoToPreviousStepAction)
], StepFlowState.prototype, "goToPreviousStepAction", null);
__decorate([
    Action(SetStepToEditAction)
], StepFlowState.prototype, "setStepToEdit", null);
__decorate([
    Action(SetStepIncompleteAction)
], StepFlowState.prototype, "setStepIncomplete", null);
__decorate([
    Action(SetStepCompleteAction)
], StepFlowState.prototype, "setStepCompleteAction", null);
__decorate([
    Action(InsertStepsBeforeAction)
], StepFlowState.prototype, "InsertStepsBeforeAction", null);
__decorate([
    Action(InsertStepsAfterAction)
], StepFlowState.prototype, "InsertStepsAfterAction", null);
__decorate([
    Action(RemoveStepsWithStepKeysAction)
], StepFlowState.prototype, "RemoveStepsWithStepKeysAction", null);
__decorate([
    Action(SetStepsEnabledState)
], StepFlowState.prototype, "setStepsEnabledState", null);
__decorate([
    Action(UpdateStepAction)
], StepFlowState.prototype, "updateStepAction", null);
__decorate([
    Action(UpdateCurrentStepImageAction)
], StepFlowState.prototype, "updateCurrentStepImageAction", null);
__decorate([
    Action(SetCurrentDecisionOnStepFlowConfig)
], StepFlowState.prototype, "setCurrentDecisionOnStepFlowConfig", null);
__decorate([
    Action(ETFStepValidAction)
], StepFlowState.prototype, "isETFStepValid", null);
__decorate([
    Action(GoToStepAction)
], StepFlowState.prototype, "goToStepAction", null);
__decorate([
    Selector()
], StepFlowState, "currentStep", null);
__decorate([
    Selector()
], StepFlowState, "currentStepImage", null);
__decorate([
    Selector()
], StepFlowState, "stepNumber", null);
__decorate([
    Selector()
], StepFlowState, "key", null);
__decorate([
    Selector()
], StepFlowState, "steps", null);
__decorate([
    Selector()
], StepFlowState, "stepNavigationStartTime", null);
__decorate([
    Selector()
], StepFlowState, "reportStepLoadTiming", null);
__decorate([
    Selector()
], StepFlowState, "isETFStepValid", null);
StepFlowState = StepFlowState_1 = __decorate([
    State({
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
], StepFlowState);
export { StepFlowState };
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StepFlowState, [{
        type: Injectable
    }], () => [{ type: i1.Store }, { type: i2.StepFactory }], { initialise: [], setStepConfigurationAction: [], ReportStepLoadTimingAction: [], SetStepNavigationStartTimeAction: [], goToFinalStepAction: [], goToNextStepAction: [], goToPreviousStepAction: [], setStepToEdit: [], setStepIncomplete: [], setStepCompleteAction: [], InsertStepsBeforeAction: [], InsertStepsAfterAction: [], RemoveStepsWithStepKeysAction: [], setStepsEnabledState: [], updateStepAction: [], updateCurrentStepImageAction: [], setCurrentDecisionOnStepFlowConfig: [], isETFStepValid: [], goToStepAction: [] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC1mbG93LnN0YXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9zdG9yZS9zdGVwLWZsb3cuc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE9BQU8sRUFBUyxPQUFPLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFFdkMsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBdUIsTUFBTSxhQUFhLENBQUM7QUFDM0YsT0FBTyxFQUNMLGtCQUFrQixFQUNsQixtQkFBbUIsRUFDbkIsa0JBQWtCLEVBQ2xCLHNCQUFzQixFQUN0QixjQUFjLEVBQ2Qsc0JBQXNCLEVBQ3RCLHVCQUF1QixFQUN2Qiw2QkFBNkIsRUFDN0IsMEJBQTBCLEVBQzFCLGtDQUFrQyxFQUNsQyxxQkFBcUIsRUFDckIsMEJBQTBCLEVBQzFCLHVCQUF1QixFQUN2QixnQ0FBZ0MsRUFDaEMsY0FBYyxFQUNkLG9CQUFvQixFQUNwQixtQkFBbUIsRUFDbkIsNEJBQTRCLEVBQzVCLGdCQUFnQixHQUNqQixNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWhELE9BQU8sRUFBTyxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQXlCbEQsSUFBTSxhQUFhLEdBQW5CLE1BQU0sYUFBYTs7SUFJZjtJQUNVO0lBSkYsR0FBRyxHQUFRLFVBQVUsQ0FBQyxZQUFZLENBQUMsZUFBYSxDQUFDLENBQUM7SUFFbkUsWUFDUyxLQUFZLEVBQ0YsV0FBd0I7UUFEbEMsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUNGLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQ3hDLENBQUM7SUFHVSxBQUFQLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBeUI7UUFDakQsT0FBTyxLQUFLLENB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LHFCQUFxQixNQWdCckIsdUJBQXVCLE1BWXZCLHNCQUFzQixNQVl0Qiw2QkFBNkIsTUFZN0Isb0JBQW9CLE1BaUJwQixnQkFBZ0IsTUFnQmhCLDRCQUE0QixNQWE1QixrQ0FBa0MsTUFvQmxDLGNBQWMsTUFTZCxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHJhZnQsIHByb2R1Y2UgfSBmcm9tICdpbW1lcic7XG5pbXBvcnQgeyBTdGVwIH0gZnJvbSAnLi4vc3RlcC5tb2RlbCc7XG5pbXBvcnQgeyBBY3Rpb24sIGNyZWF0ZVNlbGVjdG9yLCBTZWxlY3RvciwgU3RhdGUsIFN0YXRlQ29udGV4dCwgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XG5pbXBvcnQge1xuICBFVEZTdGVwVmFsaWRBY3Rpb24sXG4gIEdvVG9GaW5hbFN0ZXBBY3Rpb24sXG4gIEdvVG9OZXh0U3RlcEFjdGlvbixcbiAgR29Ub1ByZXZpb3VzU3RlcEFjdGlvbixcbiAgR29Ub1N0ZXBBY3Rpb24sXG4gIEluc2VydFN0ZXBzQWZ0ZXJBY3Rpb24sXG4gIEluc2VydFN0ZXBzQmVmb3JlQWN0aW9uLFxuICBSZW1vdmVTdGVwc1dpdGhTdGVwS2V5c0FjdGlvbixcbiAgUmVwb3J0U3RlcExvYWRUaW1pbmdBY3Rpb24sXG4gIFNldEN1cnJlbnREZWNpc2lvbk9uU3RlcEZsb3dDb25maWcsXG4gIFNldFN0ZXBDb21wbGV0ZUFjdGlvbixcbiAgU2V0U3RlcENvbmZpZ3VyYXRpb25BY3Rpb24sXG4gIFNldFN0ZXBJbmNvbXBsZXRlQWN0aW9uLFxuICBTZXRTdGVwTmF2aWdhdGlvblN0YXJ0VGltZUFjdGlvbixcbiAgU2V0U3RlcHNBY3Rpb24sXG4gIFNldFN0ZXBzRW5hYmxlZFN0YXRlLFxuICBTZXRTdGVwVG9FZGl0QWN0aW9uLFxuICBVcGRhdGVDdXJyZW50U3RlcEltYWdlQWN0aW9uLFxuICBVcGRhdGVTdGVwQWN0aW9uLFxufSBmcm9tICcuL3N0ZXAtZmxvdy5hY3Rpb25zJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0ZXBGbG93Q29uZmlnIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zdGVwLWZsb3ctY29uZmlnLmludGVyZmFjZSc7XG5pbXBvcnQgeyBTdGVwRmFjdG9yeSB9IGZyb20gJy4uL2ZhY3Rvcmllcy9zdGVwLmZhY3RvcnknO1xuaW1wb3J0IHsgU3RlcEZsb3dVdGlsIH0gZnJvbSAnLi9zdGVwLWZsb3cudXRpbCc7XG5pbXBvcnQgeyBTdGVwRGVjaXNpb24gfSBmcm9tICcuLi9pbnRlcmZhY2VzL3N0ZXAtZGVjaXNpb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IExvZywgTG9nRmFjdG9yeSB9IGZyb20gJ0B0ZWxlbmV0L25nLWxpYi1zaGFyZWQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0ZXBGbG93U3RhdGVNb2RlbCB7XG4gIGluaXRpYWxpemVkOiBib29sZWFuO1xuICBzdGVwQ29uZmlndXJhdGlvbj86IFN0ZXBGbG93Q29uZmlnO1xuICBzdGVwczogU3RlcFtdO1xuICBjdXJyZW50U3RlcD86IFN0ZXA7XG4gIHJlcG9ydFN0ZXBMb2FkVGltaW5nOiBib29sZWFuO1xuICBzdGVwTmF2aWdhdGlvblN0YXJ0VGltZTogbnVtYmVyO1xuICBpc0VURlN0ZXBWYWxpZDogYm9vbGVhbjtcbn1cblxuQFN0YXRlPFN0ZXBGbG93U3RhdGVNb2RlbD4oe1xuICBuYW1lOiAnc3RlcEZsb3cnLFxuICBkZWZhdWx0czoge1xuICAgIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgICBzdGVwQ29uZmlndXJhdGlvbjogdW5kZWZpbmVkLFxuICAgIHN0ZXBzOiBbXSxcbiAgICBjdXJyZW50U3RlcDogdW5kZWZpbmVkLFxuICAgIHJlcG9ydFN0ZXBMb2FkVGltaW5nOiBmYWxzZSxcbiAgICBzdGVwTmF2aWdhdGlvblN0YXJ0VGltZTogMCxcbiAgICBpc0VURlN0ZXBWYWxpZDogZmFsc2UsXG4gIH0sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0ZXBGbG93U3RhdGUge1xuICBwcml2YXRlIHJlYWRvbmx5IGxvZzogTG9nID0gTG9nRmFjdG9yeS5jcmVhdGVMb2dnZXIoU3RlcEZsb3dTdGF0ZSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHN0b3JlOiBTdG9yZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IHN0ZXBGYWN0b3J5OiBTdGVwRmFjdG9yeVxuICApIHt9XG5cbiAgQFNlbGVjdG9yKClcbiAgcHVibGljIHN0YXRpYyBjdXJyZW50U3RlcChzdGF0ZTogU3RlcEZsb3dTdGF0ZU1vZGVsKTogU3RlcCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHN0YXRlLmN1cnJlbnRTdGVwO1xuICB9XG5cbiAgQFNlbGVjdG9yKClcbiAgcHVibGljIHN0YXRpYyBjdXJyZW50U3RlcEltYWdlKHN0YXRlOiBTdGVwRmxvd1N0YXRlTW9kZWwpOiBzdHJpbmcge1xuICAgIHJldHVybiBzdGF0ZS5jdXJyZW50U3RlcD8uaW1hZ2UgfHwgJyc7XG4gIH1cblxuICBAU2VsZWN0b3IoKVxuICBwdWJsaWMgc3RhdGljIHN0ZXBOdW1iZXIoc3RhdGU6IFN0ZXBGbG93U3RhdGVNb2RlbCk6IG51bWJlciB7XG4gICAgaWYgKCFzdGF0ZT8uY3VycmVudFN0ZXApIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGUuc3RlcHMuaW5kZXhPZihzdGF0ZT8uY3VycmVudFN0ZXApICsgMTtcbiAgfVxuXG4gIEBTZWxlY3RvcigpXG4gIHB1YmxpYyBzdGF0aWMga2V5KHN0YXRlOiBTdGVwRmxvd1N0YXRlTW9kZWwpOiBzdHJpbmcge1xuICAgIHJldHVybiBzdGF0ZS5jdXJyZW50U3RlcD8ua2V5IHx8ICcnO1xuICB9XG5cbiAgQFNlbGVjdG9yKClcbiAgcHVibGljIHN0YXRpYyBzdGVwcyhzdGF0ZTogU3RlcEZsb3dTdGF0ZU1vZGVsKTogU3RlcFtdIHtcbiAgICByZXR1cm4gc3RhdGUgJiYgc3RhdGUuc3RlcHM7XG4gIH1cblxuICBAU2VsZWN0b3IoKVxuICBwdWJsaWMgc3RhdGljIHN0ZXBOYXZpZ2F0aW9uU3RhcnRUaW1lKHN0YXRlOiBTdGVwRmxvd1N0YXRlTW9kZWwpOiBudW1iZXIge1xuICAgIHJldHVybiBzdGF0ZS5zdGVwTmF2aWdhdGlvblN0YXJ0VGltZTtcbiAgfVxuXG4gIEBTZWxlY3RvcigpXG4gIHB1YmxpYyBzdGF0aWMgcmVwb3J0U3RlcExvYWRUaW1pbmcoc3RhdGU6IFN0ZXBGbG93U3RhdGVNb2RlbCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBzdGF0ZS5yZXBvcnRTdGVwTG9hZFRpbWluZztcbiAgfVxuXG4gIEBTZWxlY3RvcigpXG4gIHB1YmxpYyBzdGF0aWMgaXNFVEZTdGVwVmFsaWQoc3RhdGU6IFN0ZXBGbG93U3RhdGVNb2RlbCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBzdGF0ZS5pc0VURlN0ZXBWYWxpZDtcbiAgfVxuXG4gIHN0YXRpYyBjb250YWluc1N0ZXAodHlwZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFtTdGVwRmxvd1N0YXRlXSwgKHN0YXRlOiBTdGVwRmxvd1N0YXRlTW9kZWwpID0+IHtcbiAgICAgIHJldHVybiAhIXN0YXRlLnN0ZXBzLmZpbmQoKHN0ZXApID0+IHN0ZXAua2V5ID09PSB0eXBlKTtcbiAgICB9KTtcbiAgfVxuXG4gIEBBY3Rpb24oU2V0U3RlcHNBY3Rpb24pXG4gIHB1YmxpYyBpbml0aWFsaXNlKGN0eDogU3RhdGVDb250ZXh0PFN0ZXBGbG93U3RhdGVNb2RlbD4sIGFjdGlvbjogU2V0U3RlcHNBY3Rpb24pOiB2b2lkIHtcbiAgICBjdHguc2V0U3RhdGUoXG4gICAgICBwcm9kdWNlKGN0eC5nZXRTdGF0ZSgpLCAoZHJhZnQpID0+IHtcbiAgICAgICAgZHJhZnQuc3RlcHMgPSBhY3Rpb24uc3RlcHM7XG4gICAgICAgIGRyYWZ0LmN1cnJlbnRTdGVwID0gYWN0aW9uLnN0ZXBzWzBdO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgQEFjdGlvbihTZXRTdGVwQ29uZmlndXJhdGlvbkFjdGlvbilcbiAgcHVibGljIHNldFN0ZXBDb25maWd1cmF0aW9uQWN0aW9uKGN0eDogU3RhdGVDb250ZXh0PFN0ZXBGbG93U3RhdGVNb2RlbD4sIGFjdGlvbjogU2V0U3RlcENvbmZpZ3VyYXRpb25BY3Rpb24pOiB2b2lkIHtcbiAgICBjdHguc2V0U3RhdGUoXG4gICAgICBwcm9kdWNlKGN0eC5nZXRTdGF0ZSgpLCAoZHJhZnQpID0+IHtcbiAgICAgICAgZHJhZnQuc3RlcENvbmZpZ3VyYXRpb24gPSBhY3Rpb24uc3RlcEZsb3dDb25maWc7XG4gICAgICB9KVxuICAgICk7XG4gICAgdGhpcy5kZWNpZGVTdGVwcyhjdHgsIGFjdGlvbi5zdGVwRmxvd0NvbmZpZyk7XG4gIH1cblxuICBAQWN0aW9uKFJlcG9ydFN0ZXBMb2FkVGltaW5nQWN0aW9uKVxuICBwdWJsaWMgUmVwb3J0U3RlcExvYWRUaW1pbmdBY3Rpb24oY3R4OiBTdGF0ZUNvbnRleHQ8U3RlcEZsb3dTdGF0ZU1vZGVsPiwgYWN0aW9uOiBSZXBvcnRTdGVwTG9hZFRpbWluZ0FjdGlvbikge1xuICAgIGN0eC5zZXRTdGF0ZShcbiAgICAgIHByb2R1Y2UoY3R4LmdldFN0YXRlKCksIChkcmFmdCkgPT4ge1xuICAgICAgICBkcmFmdC5yZXBvcnRTdGVwTG9hZFRpbWluZyA9IGFjdGlvbi5yZXBvcnRTdGVwTG9hZFRpbWU7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBAQWN0aW9uKFNldFN0ZXBOYXZpZ2F0aW9uU3RhcnRUaW1lQWN0aW9uKVxuICBwdWJsaWMgU2V0U3RlcE5hdmlnYXRpb25TdGFydFRpbWVBY3Rpb24oXG4gICAgY3R4OiBTdGF0ZUNvbnRleHQ8U3RlcEZsb3dTdGF0ZU1vZGVsPixcbiAgICBfYWN0aW9uOiBTZXRTdGVwTmF2aWdhdGlvblN0YXJ0VGltZUFjdGlvblxuICApIHtcbiAgICBjdHguc2V0U3RhdGUoXG4gICAgICBwcm9kdWNlKGN0eC5nZXRTdGF0ZSgpLCAoZHJhZnQpID0+IHtcbiAgICAgICAgZHJhZnQuc3RlcE5hdmlnYXRpb25TdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIEBBY3Rpb24oR29Ub0ZpbmFsU3RlcEFjdGlvbilcbiAgcHVibGljIGdvVG9GaW5hbFN0ZXBBY3Rpb24oY3R4OiBTdGF0ZUNvbnRleHQ8U3RlcEZsb3dTdGF0ZU1vZGVsPiwgX2FjdGlvbjogR29Ub0ZpbmFsU3RlcEFjdGlvbik6IHZvaWQge1xuICAgIGNvbnN0IHN0ZXBzID0gY3R4LmdldFN0YXRlKCkuc3RlcHM7XG5cbiAgICBsZXQgbmV4dFN0ZXA6IFN0ZXAgfCB1bmRlZmluZWQ7XG4gICAgc3RlcHNcbiAgICAgIC5maWx0ZXIoKHN0ZXApID0+IHN0ZXAgJiYgT2JqZWN0LmtleXMoc3RlcCkubGVuZ3RoKVxuICAgICAgLmZvckVhY2goKHN0ZXApID0+IHtcbiAgICAgICAgaWYgKHN0ZXAuaXNGaW5hbCgpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChzdGVwLmlzQ29tcGxldGVkKSB7XG4gICAgICAgICAgICBuZXh0U3RlcCA9IFN0ZXBGbG93VXRpbC5nZXROZXh0SW5jb21wbGV0ZWRTdGVwKHN0ZXBzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RlcC5zZXRDb21wbGV0ZWQodHJ1ZSk7XG4gICAgICAgICAgICBuZXh0U3RlcCA9IFN0ZXBGbG93VXRpbC5nZXRTdGVwQnlSZWxhdGl2ZUluZGV4T2Zmc2V0KHN0ZXAsIHN0ZXBzLCAnKycsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICBjdHguc2V0U3RhdGUocHJvZHVjZShjdHguZ2V0U3RhdGUoKSwgdGhpcy5zZXRDdXJyZW50U3RlcChuZXh0U3RlcCkpKTtcbiAgfVxuXG4gIEBBY3Rpb24oR29Ub05leHRTdGVwQWN0aW9uKVxuICBwdWJsaWMgZ29Ub05leHRTdGVwQWN0aW9uKGN0eDogU3RhdGVDb250ZXh0PFN0ZXBGbG93U3RhdGVNb2RlbD4sIF9hY3Rpb246IEdvVG9OZXh0U3RlcEFjdGlvbik6IHZvaWQge1xuICAgIHRoaXMuZGVjaWRlU3RlcHMoY3R4LCBjdHguZ2V0U3RhdGUoKS5zdGVwQ29uZmlndXJhdGlvbik7XG4gICAgY29uc3QgY3VycmVudFN0ZXAgPSBjdHguZ2V0U3RhdGUoKS5jdXJyZW50U3RlcDtcbiAgICBjb25zdCBzdGVwcyA9IGN0eC5nZXRTdGF0ZSgpLnN0ZXBzO1xuICAgIGlmIChjdXJyZW50U3RlcD8uaXNGaW5hbD8uKCkpIHtcbiAgICAgIHRoaXMubG9nLmxvZ0Vycm9yKCdUaGUgY3VycmVudCBzdGVwIGlzIG9mIHR5cGU6IEZJTkFMLiBJdCBpcyBub3QgcG9zc2libGUgdG8gZ28gdG8gdGhlIG5leHQgc3RlcC4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbmV4dFN0ZXA6IFN0ZXAgfCB1bmRlZmluZWQ7XG4gICAgaWYgKGN1cnJlbnRTdGVwPy5pc0NvbXBsZXRlZCkge1xuICAgICAgbmV4dFN0ZXAgPSBTdGVwRmxvd1V0aWwuZ2V0TmV4dEluY29tcGxldGVkU3RlcChzdGVwcyk7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50U3RlcCkge1xuICAgICAgY3VycmVudFN0ZXAuc2V0Q29tcGxldGVkKF9hY3Rpb24uaXNTdGVwQ29tcGxldGUgPz8gdHJ1ZSk7XG4gICAgICBuZXh0U3RlcCA9IFN0ZXBGbG93VXRpbC5nZXRTdGVwQnlSZWxhdGl2ZUluZGV4T2Zmc2V0KGN1cnJlbnRTdGVwLCBzdGVwcywgJysnLCAxKTtcbiAgICB9XG5cbiAgICBjdHguc2V0U3RhdGUocHJvZHVjZShjdHguZ2V0U3RhdGUoKSwgdGhpcy5zZXRDdXJyZW50U3RlcChuZXh0U3RlcCkpKTtcbiAgfVxuXG4gIEBBY3Rpb24oR29Ub1ByZXZpb3VzU3RlcEFjdGlvbilcbiAgcHVibGljIGdvVG9QcmV2aW91c1N0ZXBBY3Rpb24oY3R4OiBTdGF0ZUNvbnRleHQ8U3RlcEZsb3dTdGF0ZU1vZGVsPiwgX2FjdGlvbjogR29Ub1ByZXZpb3VzU3RlcEFjdGlvbik6IHZvaWQge1xuICAgIHRoaXMuZGVjaWRlU3RlcHMoY3R4LCBjdHguZ2V0U3RhdGUoKS5zdGVwQ29uZmlndXJhdGlvbik7XG5cbiAgICBsZXQgcHJldmlvdXNTdGVwOiBTdGVwIHwgdW5kZWZpbmVkO1xuICAgIGNvbnN0IGN1cnJlbnRTdGVwID0gY3R4LmdldFN0YXRlKCkuY3VycmVudFN0ZXA7XG4gICAgY29uc3Qgc3RlcHMgPSBjdHguZ2V0U3RhdGUoKS5zdGVwcztcblxuICAgIGlmIChjdXJyZW50U3RlcD8uaXNDb21wbGV0ZWQpIHtcbiAgICAgIHByZXZpb3VzU3RlcCA9IFN0ZXBGbG93VXRpbC5nZXROZXh0SW5jb21wbGV0ZWRTdGVwKHN0ZXBzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJldmlvdXNTdGVwID0gU3RlcEZsb3dVdGlsLmdldFN0ZXBCeVJlbGF0aXZlSW5kZXhPZmZzZXQoY3VycmVudFN0ZXAsIHN0ZXBzLCAnLScsIDEpO1xuXG4gICAgICBwcmV2aW91c1N0ZXA/LnNldENvbXBsZXRlZD8uKGZhbHNlKTtcbiAgICB9XG5cbiAgICBjdHguc2V0U3RhdGUoXG4gICAgICBwcm9kdWNlKGN0eC5nZXRTdGF0ZSgpLCAoZHJhZnQpID0+IHtcbiAgICAgICAgaWYgKHByZXZpb3VzU3RlcCkge1xuICAgICAgICAgIGRyYWZ0LmN1cnJlbnRTdGVwID0gcHJldmlvdXNTdGVwO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBAQWN0aW9uKFNldFN0ZXBUb0VkaXRBY3Rpb24pXG4gIHB1YmxpYyBzZXRTdGVwVG9FZGl0KGN0eDogU3RhdGVDb250ZXh0PFN0ZXBGbG93U3RhdGVNb2RlbD4sIGFjdGlvbjogU2V0U3RlcFRvRWRpdEFjdGlvbikge1xuICAgIGNvbnN0IG5leHRTdGVwID0gY3R4LmdldFN0YXRlKCkuc3RlcHMuZmluZCgoc3RlcCkgPT4gc3RlcC5rZXkgPT09IGFjdGlvbi5zdGVwS2V5KTtcbiAgICBjdHguc2V0U3RhdGUocHJvZHVjZShjdHguZ2V0U3RhdGUoKSwgdGhpcy5zZXRDdXJyZW50U3RlcChuZXh0U3RlcCkpKTtcbiAgfVxuXG4gIEBBY3Rpb24oU2V0U3RlcEluY29tcGxldGVBY3Rpb24pXG4gIHB1YmxpYyBzZXRTdGVwSW5jb21wbGV0ZShjdHg6IFN0YXRlQ29udGV4dDxTdGVwRmxvd1N0YXRlTW9kZWw+LCBhY3Rpb246IFNldFN0ZXBJbmNvbXBsZXRlQWN0aW9uKSB7XG4gICAgY29uc3QgdXBkYXRlZFN0ZXBzID0gY3R4LmdldFN0YXRlKCkuc3RlcHMubWFwKChzdGVwKSA9PiB7XG4gICAgICBpZiAoc3RlcC5rZXkgPT09IGFjdGlvbi5zdGVwS2V5KSB7XG4gICAgICAgIHN0ZXAuaXNDb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdGVwO1xuICAgIH0pO1xuXG4gICAgY3R4LnNldFN0YXRlKFxuICAgICAgcHJvZHVjZShjdHguZ2V0U3RhdGUoKSwgKGRyYWZ0KSA9PiB7XG4gICAgICAgIGRyYWZ0LnN0ZXBzID0gdXBkYXRlZFN0ZXBzO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgQEFjdGlvbihTZXRTdGVwQ29tcGxldGVBY3Rpb24pXG4gIHB1YmxpYyBzZXRTdGVwQ29tcGxldGVBY3Rpb24oY3R4OiBTdGF0ZUNvbnRleHQ8U3RlcEZsb3dTdGF0ZU1vZGVsPiwgYWN0aW9uOiBTZXRTdGVwQ29tcGxldGVBY3Rpb24pIHtcbiAgICBjb25zdCB1cGRhdGVkU3RlcHMgPSBjdHguZ2V0U3RhdGUoKS5zdGVwcy5tYXAoKHN0ZXApID0+IHtcbiAgICAgIGlmIChzdGVwLmtleSA9PT0gYWN0aW9uLnN0ZXBLZXkpIHtcbiAgICAgICAgc3RlcC5pc0NvbXBsZXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3RlcDtcbiAgICB9KTtcblxuICAgIGN0eC5zZXRTdGF0ZShcbiAgICAgIHByb2R1Y2UoY3R4LmdldFN0YXRlKCksIChkcmFmdCkgPT4ge1xuICAgICAgICBkcmFmdC5zdGVwcyA9IHVwZGF0ZWRTdGVwcztcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIEBBY3Rpb24oSW5zZXJ0U3RlcHNCZWZvcmVBY3Rpb24pXG4gIHB1YmxpYyBJbnNlcnRTdGVwc0JlZm9yZUFjdGlvbihjdHg6IFN0YXRlQ29udGV4dDxTdGVwRmxvd1N0YXRlTW9kZWw+LCBhY3Rpb246IEluc2VydFN0ZXBzQmVmb3JlQWN0aW9uKSB7XG4gICAgY29uc3Qgc3RlcEluZGV4ID0gY3R4LmdldFN0YXRlKCkuc3RlcHMuZmluZEluZGV4KChzdGVwKSA9PiBzdGVwLmtleSA9PT0gYWN0aW9uLnN0ZXBLZXkpO1xuICAgIGNvbnN0IHN0ZXBzID0gWy4uLmN0eC5nZXRTdGF0ZSgpLnN0ZXBzXTtcbiAgICBzdGVwcy5zcGxpY2Uoc3RlcEluZGV4LCAwLCAuLi5hY3Rpb24uc3RlcHMpO1xuICAgIGN0eC5zZXRTdGF0ZShcbiAgICAgIHByb2R1Y2UoY3R4LmdldFN0YXRlKCksIChkcmFmdCkgPT4ge1xuICAgICAgICBkcmFmdC5zdGVwcyA9IHN0ZXBzO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgQEFjdGlvbihJbnNlcnRTdGVwc0FmdGVyQWN0aW9uKVxuICBwdWJsaWMgSW5zZXJ0U3RlcHNBZnRlckFjdGlvbihjdHg6IFN0YXRlQ29udGV4dDxTdGVwRmxvd1N0YXRlTW9kZWw+LCBhY3Rpb246IEluc2VydFN0ZXBzQWZ0ZXJBY3Rpb24pIHtcbiAgICBjb25zdCBzdGVwSW5kZXggPSBjdHguZ2V0U3RhdGUoKS5zdGVwcy5maW5kSW5kZXgoKHN0ZXApID0+IHN0ZXAua2V5ID09PSBhY3Rpb24uc3RlcEtleSkgKyAxO1xuICAgIGNvbnN0IHN0ZXBzID0gWy4uLmN0eC5nZXRTdGF0ZSgpLnN0ZXBzXTtcbiAgICBzdGVwcy5zcGxpY2Uoc3RlcEluZGV4LCAwLCAuLi5hY3Rpb24uc3RlcHMpO1xuICAgIGN0eC5zZXRTdGF0ZShcbiAgICAgIHByb2R1Y2UoY3R4LmdldFN0YXRlKCksIChkcmFmdCkgPT4ge1xuICAgICAgICBkcmFmdC5zdGVwcyA9IHN0ZXBzO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgQEFjdGlvbihSZW1vdmVTdGVwc1dpdGhTdGVwS2V5c0FjdGlvbilcbiAgcHVibGljIFJlbW92ZVN0ZXBzV2l0aFN0ZXBLZXlzQWN0aW9uKGN0eDogU3RhdGVDb250ZXh0PFN0ZXBGbG93U3RhdGVNb2RlbD4sIGFjdGlvbjogUmVtb3ZlU3RlcHNXaXRoU3RlcEtleXNBY3Rpb24pIHtcbiAgICBjb25zdCBzdGVwcyA9IGN0eC5nZXRTdGF0ZSgpLnN0ZXBzLmZpbHRlcigoc3RlcDogU3RlcCkgPT4ge1xuICAgICAgcmV0dXJuICFhY3Rpb24uc3RlcEtleXMuaW5jbHVkZXMoc3RlcC5rZXkpO1xuICAgIH0pO1xuICAgIGN0eC5zZXRTdGF0ZShcbiAgICAgIHByb2R1Y2UoY3R4LmdldFN0YXRlKCksIChkcmFmdCkgPT4ge1xuICAgICAgICBkcmFmdC5zdGVwcyA9IHN0ZXBzO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgQEFjdGlvbihTZXRTdGVwc0VuYWJsZWRTdGF0ZSlcbiAgcHVibGljIHNldFN0ZXBzRW5hYmxlZFN0YXRlKGN0eDogU3RhdGVDb250ZXh0PFN0ZXBGbG93U3RhdGVNb2RlbD4sIGFjdGlvbjogU2V0U3RlcHNFbmFibGVkU3RhdGUpIHtcbiAgICBjb25zdCB1cGRhdGVkU3RlcHMgPSBjdHguZ2V0U3RhdGUoKS5zdGVwcy5tYXAoKHN0ZXApID0+IHtcbiAgICAgIGNvbnN0IGZvdW5kU3RlcCA9IGFjdGlvbi5zdGVwcy5maW5kKChzKSA9PiBzLnN0ZXBLZXkgPT09IHN0ZXAua2V5KTtcbiAgICAgIGlmIChmb3VuZFN0ZXApIHtcbiAgICAgICAgc3RlcC5pc0VuYWJsZWQgPSBmb3VuZFN0ZXAuc3RhdGU7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3RlcDtcbiAgICB9KTtcblxuICAgIGN0eC5zZXRTdGF0ZShcbiAgICAgIHByb2R1Y2UoY3R4LmdldFN0YXRlKCksIChkcmFmdCkgPT4ge1xuICAgICAgICBkcmFmdC5zdGVwcyA9IHVwZGF0ZWRTdGVwcztcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIEBBY3Rpb24oVXBkYXRlU3RlcEFjdGlvbilcbiAgcHVibGljIHVwZGF0ZVN0ZXBBY3Rpb24oY3R4OiBTdGF0ZUNvbnRleHQ8U3RlcEZsb3dTdGF0ZU1vZGVsPiwgYWN0aW9uOiBVcGRhdGVTdGVwQWN0aW9uKSB7XG4gICAgY29uc3QgdXBkYXRlZFN0ZXBzID0gY3R4LmdldFN0YXRlKCkuc3RlcHMubWFwKChzdGVwKSA9PiB7XG4gICAgICBpZiAoc3RlcC5rZXkgPT09IGFjdGlvbi5zdGVwLmtleSkge1xuICAgICAgICByZXR1cm4gYWN0aW9uLnN0ZXA7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3RlcDtcbiAgICB9KTtcblxuICAgIGN0eC5zZXRTdGF0ZShcbiAgICAgIHByb2R1Y2UoY3R4LmdldFN0YXRlKCksIChkcmFmdCkgPT4ge1xuICAgICAgICBkcmFmdC5zdGVwcyA9IHVwZGF0ZWRTdGVwcztcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIEBBY3Rpb24oVXBkYXRlQ3VycmVudFN0ZXBJbWFnZUFjdGlvbilcbiAgcHVibGljIHVwZGF0ZUN1cnJlbnRTdGVwSW1hZ2VBY3Rpb24oY3R4OiBTdGF0ZUNvbnRleHQ8U3RlcEZsb3dTdGF0ZU1vZGVsPiwgYWN0aW9uOiBVcGRhdGVDdXJyZW50U3RlcEltYWdlQWN0aW9uKSB7XG4gICAgaWYgKGN0eC5nZXRTdGF0ZSgpLmN1cnJlbnRTdGVwKSB7XG4gICAgICBjdHguc2V0U3RhdGUoXG4gICAgICAgIHByb2R1Y2UoY3R4LmdldFN0YXRlKCksIChkcmFmdCkgPT4ge1xuICAgICAgICAgIGlmIChkcmFmdC5jdXJyZW50U3RlcCkge1xuICAgICAgICAgICAgZHJhZnQuY3VycmVudFN0ZXAuaW1hZ2UgPSBhY3Rpb24uaW1hZ2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBAQWN0aW9uKFNldEN1cnJlbnREZWNpc2lvbk9uU3RlcEZsb3dDb25maWcpXG4gIHB1YmxpYyBzZXRDdXJyZW50RGVjaXNpb25PblN0ZXBGbG93Q29uZmlnKFxuICAgIGN0eDogU3RhdGVDb250ZXh0PFN0ZXBGbG93U3RhdGVNb2RlbD4sXG4gICAgYWN0aW9uOiBTZXRDdXJyZW50RGVjaXNpb25PblN0ZXBGbG93Q29uZmlnXG4gICkge1xuICAgIGNvbnN0IHN0ZXBEZWNpc2lvbkluZGV4ID0gY3R4LmdldFN0YXRlKCkuc3RlcENvbmZpZ3VyYXRpb24/LnN0ZXBzPy5maW5kSW5kZXgoKHN0ZXApID0+IHtcbiAgICAgIHJldHVybiBzdGVwID09PSBhY3Rpb24uc3RlcERlY2lzaW9uO1xuICAgIH0pO1xuICAgIGlmIChzdGVwRGVjaXNpb25JbmRleCkge1xuICAgICAgY3R4LnNldFN0YXRlKFxuICAgICAgICBwcm9kdWNlKGN0eC5nZXRTdGF0ZSgpLCAoZHJhZnQpID0+IHtcbiAgICAgICAgICBpZiAoZHJhZnQuc3RlcENvbmZpZ3VyYXRpb24/LnN0ZXBzW3N0ZXBEZWNpc2lvbkluZGV4XSkge1xuICAgICAgICAgICAgKGRyYWZ0LnN0ZXBDb25maWd1cmF0aW9uLnN0ZXBzW3N0ZXBEZWNpc2lvbkluZGV4XSBhcyBTdGVwRGVjaXNpb24pLmN1cnJlbnREZWNpc2lvbiA9XG4gICAgICAgICAgICAgIGFjdGlvbi5jdXJyZW50Rmxvd0NvbmZpZztcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIEBBY3Rpb24oRVRGU3RlcFZhbGlkQWN0aW9uKVxuICBwdWJsaWMgaXNFVEZTdGVwVmFsaWQoY3R4OiBTdGF0ZUNvbnRleHQ8U3RlcEZsb3dTdGF0ZU1vZGVsPiwgYWN0aW9uOiBFVEZTdGVwVmFsaWRBY3Rpb24pIHtcbiAgICBjdHguc2V0U3RhdGUoXG4gICAgICBwcm9kdWNlKGN0eC5nZXRTdGF0ZSgpLCAoZHJhZnQpID0+IHtcbiAgICAgICAgZHJhZnQuaXNFVEZTdGVwVmFsaWQgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIEBBY3Rpb24oR29Ub1N0ZXBBY3Rpb24pXG4gIHB1YmxpYyBnb1RvU3RlcEFjdGlvbihjdHg6IFN0YXRlQ29udGV4dDxTdGVwRmxvd1N0YXRlTW9kZWw+LCBhY3Rpb246IEdvVG9TdGVwQWN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5kZWNpZGVTdGVwcyhjdHgsIGN0eC5nZXRTdGF0ZSgpLnN0ZXBDb25maWd1cmF0aW9uKTtcbiAgICBjb25zdCBzdGVwcyA9IGN0eC5nZXRTdGF0ZSgpLnN0ZXBzO1xuICAgIGNvbnN0IG5leHRTdGVwID0gU3RlcEZsb3dVdGlsLmdldEFjdGl2ZVN0ZXAoc3RlcHMsIGFjdGlvbi5zdGVwS2V5KTtcblxuICAgIGN0eC5zZXRTdGF0ZShwcm9kdWNlKGN0eC5nZXRTdGF0ZSgpLCB0aGlzLnNldEN1cnJlbnRTdGVwKG5leHRTdGVwKSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBkZWNpZGVTdGVwcyhjdHg6IFN0YXRlQ29udGV4dDxTdGVwRmxvd1N0YXRlTW9kZWw+LCBzdGVwRmxvd0NvbmZpZz86IFN0ZXBGbG93Q29uZmlnKSB7XG4gICAgaWYgKHN0ZXBGbG93Q29uZmlnKSB7XG4gICAgICBjb25zdCBzdGVwcyA9IHRoaXMuc3RlcEZhY3RvcnkuY3JlYXRlRmxvdyh0aGlzLnN0b3JlLCBzdGVwRmxvd0NvbmZpZyk7XG4gICAgICBjdHguc2V0U3RhdGUoXG4gICAgICAgIHByb2R1Y2UoY3R4LmdldFN0YXRlKCksIChkcmFmdCkgPT4ge1xuICAgICAgICAgIGRyYWZ0LnN0ZXBzID0gc3RlcHM7XG4gICAgICAgICAgaWYgKCFjdHguZ2V0U3RhdGUoKS5jdXJyZW50U3RlcCkge1xuICAgICAgICAgICAgZHJhZnQuY3VycmVudFN0ZXAgPSBzdGVwc1swXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0Q3VycmVudFN0ZXAobmV4dFN0ZXA6IFN0ZXAgfCB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gKGRyYWZ0OiBEcmFmdDxTdGVwRmxvd1N0YXRlTW9kZWw+KSA9PiB7XG4gICAgICBpZiAobmV4dFN0ZXApIHtcbiAgICAgICAgZHJhZnQuY3VycmVudFN0ZXAgPSBuZXh0U3RlcDtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG4iXX0=