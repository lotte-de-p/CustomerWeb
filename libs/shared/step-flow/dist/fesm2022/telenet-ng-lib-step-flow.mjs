import * as i0 from '@angular/core';
import { Injectable, Directive, Component, Input, ViewChild, NgModule } from '@angular/core';
import { findIndex, isEmpty } from 'lodash-es';
import * as i2 from '@telenet/ng-lib-page';
import { AbstractBaseComponent } from '@telenet/ng-lib-page';
import { produce } from 'immer';
import * as i1 from '@ngxs/store';
import { createSelector, Action, Selector, State } from '@ngxs/store';
import { LogFactory } from '@telenet/ng-lib-shared';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';
import * as i3 from '@telenet/ng-lib-datalayer';
import * as i4 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i5 from '@ngx-translate/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { tap, take } from 'rxjs/operators';
import * as i2$1 from '@telenet/ng-lib-form';

function instanceOfStepDecision(stepConfig) {
    return 'decisionFunction' in stepConfig;
}

var StepEnum;
(function (StepEnum) {
    StepEnum[StepEnum["DEFAULT"] = 0] = "DEFAULT";
    StepEnum[StepEnum["FINAL"] = 1] = "FINAL";
    StepEnum[StepEnum["CONFIRM"] = 2] = "CONFIRM";
})(StepEnum || (StepEnum = {}));

class Step {
    key;
    type = StepEnum.DEFAULT;
    template;
    titleParameterValue;
    component;
    withNextButton;
    nextButtonLabel = 'btn.steps.next';
    nextButtonCallback;
    prevButtonCallback;
    previousStepDisabled;
    asAlternativeFirstStep;
    image;
    imageMobile;
    isImageScrollable;
    isEnabled = true;
    isCompleted = false;
    layoutOptions;
    overwriteFlowLabel;
    chosenProduct$;
    order;
    analyticsOptions;
    constructor(key) {
        this.key = key;
        this.withNextButton = true;
    }
    isFinal() {
        return this.type === StepEnum.FINAL;
    }
    setCompleted(completedState) {
        this.isCompleted = completedState;
    }
    isConfirm() {
        return this.type === StepEnum.CONFIRM;
    }
}

class StepBuilder {
    _step;
    constructor(key) {
        this._step = new Step(key);
    }
    static builder(key) {
        return new StepBuilder(key);
    }
    withLayoutOptions(layout) {
        if (layout) {
            this._step.layoutOptions = layout;
        }
        return this;
    }
    withAnalyticsOptions(analyticsOptions) {
        if (analyticsOptions) {
            this._step.analyticsOptions = analyticsOptions;
        }
        return this;
    }
    withImage(image) {
        if (image) {
            this._step.image = image;
        }
        return this;
    }
    withComponent(selector) {
        this._step.component = { selector: selector };
        return this;
    }
    withOrder(order) {
        this._step.order = order;
        return this;
    }
    withEnabledState(state = true) {
        this._step.isEnabled = state;
        return this;
    }
    withTemplate(template) {
        this._step.template = template;
        return this;
    }
    withCompletedState(state = true) {
        this._step.setCompleted(state);
        return this;
    }
    withPreviousStepDisabled(state = false) {
        this._step.previousStepDisabled = state;
        return this;
    }
    withFinalState() {
        this._step.type = StepEnum.FINAL;
        return this;
    }
    withConfirmState() {
        this._step.type = StepEnum.CONFIRM;
        return this;
    }
    withOverwriteFlowLabel(flowLabel) {
        this._step.overwriteFlowLabel = flowLabel;
        return this;
    }
    withTitleParameterValue(value) {
        this._step.titleParameterValue = value;
        return this;
    }
    withChosenProductValue(value) {
        this._step.chosenProduct$ = value;
        return this;
    }
    withMobileImage(value) {
        this._step.imageMobile = value;
        return this;
    }
    withScrollableImage(scrollable = true) {
        this._step.isImageScrollable = scrollable;
        return this;
    }
    withAsAlternativeFirstStep() {
        this._step.asAlternativeFirstStep = true;
        return this;
    }
    build() {
        return this._step;
    }
}

class SetStepConfigurationAction {
    stepFlowConfig;
    static type = '[StepFlow] set the step configuration';
    constructor(stepFlowConfig) {
        this.stepFlowConfig = stepFlowConfig;
    }
}
class ReportStepLoadTimingAction {
    reportStepLoadTime;
    static type = '[StepFlow] set whether to capture step load time or not';
    constructor(reportStepLoadTime) {
        this.reportStepLoadTime = reportStepLoadTime;
    }
}
class SetStepNavigationStartTimeAction {
    static type = '[StepFlow] set step navigation start time in milliseconds';
}
class SetStepsAction {
    steps;
    static type = '[StepFlow] set the steps for the stepflow';
    constructor(steps) {
        this.steps = steps;
    }
}
class GoToNextStepAction {
    isStepComplete;
    static type = '[StepFlow] Go to next step';
    constructor(isStepComplete) {
        this.isStepComplete = isStepComplete;
    }
}
class GoToFinalStepAction {
    static type = '[StepFlow] Go to final step';
}
class GoToPreviousStepAction {
    static type = '[StepFlow] Go to previous step';
}
class SetStepToEditAction {
    stepKey;
    static type = '[StepFlow] set the stepflow to a certain step so it can be edited';
    constructor(stepKey) {
        this.stepKey = stepKey;
    }
}
class SetStepIncompleteAction {
    stepKey;
    static type = '[StepFlow] set a certain step to the incomplete state';
    constructor(stepKey) {
        this.stepKey = stepKey;
    }
}
class SetStepCompleteAction {
    stepKey;
    static type = '[StepFlow] set a certain step to the complete state';
    constructor(stepKey) {
        this.stepKey = stepKey;
    }
}
class InsertStepsBeforeAction {
    steps;
    stepKey;
    static type = '[StepFlow] Insert steps before a certain step with a certain key';
    constructor(steps, stepKey) {
        this.steps = steps;
        this.stepKey = stepKey;
    }
}
class InsertStepsAfterAction {
    steps;
    stepKey;
    static type = '[StepFlow] Insert steps behind a certain step with a certain key';
    constructor(steps, stepKey) {
        this.steps = steps;
        this.stepKey = stepKey;
    }
}
class RemoveStepsWithStepKeysAction {
    stepKeys;
    static type = '[StepFlow] Remove the steps with a key in the given list';
    constructor(stepKeys) {
        this.stepKeys = stepKeys;
    }
}
class SetStepsEnabledState {
    steps;
    static type = '[StepFlow] Set the enabled states of multiple steps';
    constructor(steps) {
        this.steps = steps;
    }
}
class UpdateStepAction {
    step;
    static type = '[StepFlow] Change the properties of a certain step';
    constructor(step) {
        this.step = step;
    }
}
class UpdateCurrentStepImageAction {
    image;
    static type = '[StepFlow] Update the current step image';
    constructor(image) {
        this.image = image;
    }
}
class SetCurrentDecisionOnStepFlowConfig {
    stepDecision;
    currentFlowConfig;
    static type = '[StepFlow] Set the current decision on a step flow config';
    constructor(stepDecision, currentFlowConfig) {
        this.stepDecision = stepDecision;
        this.currentFlowConfig = currentFlowConfig;
    }
}
class ETFStepValidAction {
    payload;
    static type = '[StepFlow] Set ETF step valid';
    constructor(payload) {
        this.payload = payload;
    }
}
class GoToStepAction {
    stepKey;
    static type = '[StepFlow] Change current step with given step by key';
    constructor(stepKey) {
        this.stepKey = stepKey;
    }
}
class NotifyStepRendered {
    stepKey;
    static type = '[StepFlow] Notify step rendered';
    constructor(stepKey) {
        this.stepKey = stepKey;
    }
}

class TemplateFactory {
    determineTemplate(_stepBuilder, _stepConfig) {
        // default is empty
    }
    static ɵfac = function TemplateFactory_Factory(t) { return new (t || TemplateFactory)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: TemplateFactory, factory: TemplateFactory.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TemplateFactory, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();

class StepFactory {
    templateFactory;
    constructor(templateFactory) {
        this.templateFactory = templateFactory;
    }
    createFlow(store, stepFlowConfig) {
        let steps = [];
        stepFlowConfig.steps.forEach((stepConfig) => {
            if (instanceOfStepDecision(stepConfig)) {
                steps = steps.concat(this.decideFlow(store, stepConfig));
            }
            else {
                steps.push(this.createStep(stepConfig));
            }
        });
        return steps;
    }
    createStep(stepConfig) {
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
    decideFlow(store, stepDecision) {
        const decidedFlow = stepDecision.decisionFunction(store, stepDecision.possibleResults, stepDecision.currentDecision);
        store.dispatch(new SetCurrentDecisionOnStepFlowConfig(stepDecision, decidedFlow));
        if (stepDecision.currentDecision !== decidedFlow && typeof decidedFlow.initFlowAction === 'function') {
            decidedFlow.initFlowAction(store);
        }
        return this.createFlow(store, decidedFlow);
    }
    static ɵfac = function StepFactory_Factory(t) { return new (t || StepFactory)(i0.ɵɵinject(TemplateFactory)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StepFactory, factory: StepFactory.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StepFactory, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: TemplateFactory }], null); })();

class StepHostDirective {
    viewContainerRef;
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    static ɵfac = function StepHostDirective_Factory(t) { return new (t || StepHostDirective)(i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: StepHostDirective, selectors: [["", "step-host", ""]] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StepHostDirective, [{
        type: Directive,
        args: [{
                selector: '[step-host]',
            }]
    }], () => [{ type: i0.ViewContainerRef }], null); })();

class StepContainerDirective {
    viewContainerRef;
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    static ɵfac = function StepContainerDirective_Factory(t) { return new (t || StepContainerDirective)(i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: StepContainerDirective, selectors: [["", "appStepContainer", ""]] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StepContainerDirective, [{
        type: Directive,
        args: [{
                selector: '[appStepContainer]',
            }]
    }], () => [{ type: i0.ViewContainerRef }], null); })();

class StepFlowUtil {
    static hasNextStep(currentStep, steps) {
        if (currentStep?.isFinal?.()) {
            return true;
        }
        return this.getStepByRelativeIndexOffset(currentStep, steps, '+', 1) !== undefined;
    }
    static hasPreviousStep(currentStep, steps) {
        if (currentStep?.isFinal?.()) {
            return false;
        }
        return this.getStepByRelativeIndexOffset(currentStep, steps, '-', 1) !== undefined;
    }
    static getStepCount(steps) {
        return this.getActiveSteps(steps).length;
    }
    static getActiveSteps(steps) {
        return steps.filter((step) => {
            return step.isEnabled;
        });
    }
    static getStepIndex(currentStep, steps) {
        const activeSteps = this.getActiveSteps(steps);
        return findIndex(activeSteps, (step) => step.key === currentStep.key);
    }
    static getStepByRelativeIndexOffset(currentStep, steps, operator, offset) {
        const activeSteps = this.getActiveSteps(steps);
        const currentStepIndex = findIndex(activeSteps, (step) => step.key === currentStep?.key);
        switch (operator) {
            case '+':
                return currentStepIndex === undefined ? undefined : activeSteps[currentStepIndex + offset];
            case '-':
                return currentStepIndex === undefined ? undefined : activeSteps[currentStepIndex - offset];
            default:
                throw new Error(`${operator} is not a correct operator`);
        }
    }
    static getNextIncompletedStep(steps) {
        return this.getActiveSteps(steps).find((step) => !step.isCompleted);
    }
    static getActiveStep(steps, stepKey) {
        return this.getActiveSteps(steps).find((step) => step.key === stepKey);
    }
}

var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var StepFlowState_1;
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
    static ɵfac = function StepFlowState_Factory(t) { return new (t || StepFlowState)(i0.ɵɵinject(i1.Store), i0.ɵɵinject(StepFactory)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StepFlowState, factory: StepFlowState.ɵfac });
};
__decorate$2([
    Action(SetStepsAction)
], StepFlowState.prototype, "initialise", null);
__decorate$2([
    Action(SetStepConfigurationAction)
], StepFlowState.prototype, "setStepConfigurationAction", null);
__decorate$2([
    Action(ReportStepLoadTimingAction)
], StepFlowState.prototype, "ReportStepLoadTimingAction", null);
__decorate$2([
    Action(SetStepNavigationStartTimeAction)
], StepFlowState.prototype, "SetStepNavigationStartTimeAction", null);
__decorate$2([
    Action(GoToFinalStepAction)
], StepFlowState.prototype, "goToFinalStepAction", null);
__decorate$2([
    Action(GoToNextStepAction)
], StepFlowState.prototype, "goToNextStepAction", null);
__decorate$2([
    Action(GoToPreviousStepAction)
], StepFlowState.prototype, "goToPreviousStepAction", null);
__decorate$2([
    Action(SetStepToEditAction)
], StepFlowState.prototype, "setStepToEdit", null);
__decorate$2([
    Action(SetStepIncompleteAction)
], StepFlowState.prototype, "setStepIncomplete", null);
__decorate$2([
    Action(SetStepCompleteAction)
], StepFlowState.prototype, "setStepCompleteAction", null);
__decorate$2([
    Action(InsertStepsBeforeAction)
], StepFlowState.prototype, "InsertStepsBeforeAction", null);
__decorate$2([
    Action(InsertStepsAfterAction)
], StepFlowState.prototype, "InsertStepsAfterAction", null);
__decorate$2([
    Action(RemoveStepsWithStepKeysAction)
], StepFlowState.prototype, "RemoveStepsWithStepKeysAction", null);
__decorate$2([
    Action(SetStepsEnabledState)
], StepFlowState.prototype, "setStepsEnabledState", null);
__decorate$2([
    Action(UpdateStepAction)
], StepFlowState.prototype, "updateStepAction", null);
__decorate$2([
    Action(UpdateCurrentStepImageAction)
], StepFlowState.prototype, "updateCurrentStepImageAction", null);
__decorate$2([
    Action(SetCurrentDecisionOnStepFlowConfig)
], StepFlowState.prototype, "setCurrentDecisionOnStepFlowConfig", null);
__decorate$2([
    Action(ETFStepValidAction)
], StepFlowState.prototype, "isETFStepValid", null);
__decorate$2([
    Action(GoToStepAction)
], StepFlowState.prototype, "goToStepAction", null);
__decorate$2([
    Selector()
], StepFlowState, "currentStep", null);
__decorate$2([
    Selector()
], StepFlowState, "currentStepImage", null);
__decorate$2([
    Selector()
], StepFlowState, "stepNumber", null);
__decorate$2([
    Selector()
], StepFlowState, "key", null);
__decorate$2([
    Selector()
], StepFlowState, "steps", null);
__decorate$2([
    Selector()
], StepFlowState, "stepNavigationStartTime", null);
__decorate$2([
    Selector()
], StepFlowState, "reportStepLoadTiming", null);
__decorate$2([
    Selector()
], StepFlowState, "isETFStepValid", null);
StepFlowState = StepFlowState_1 = __decorate$2([
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StepFlowState, [{
        type: Injectable
    }], () => [{ type: i1.Store }, { type: StepFactory }], { initialise: [], setStepConfigurationAction: [], ReportStepLoadTimingAction: [], SetStepNavigationStartTimeAction: [], goToFinalStepAction: [], goToNextStepAction: [], goToPreviousStepAction: [], setStepToEdit: [], setStepIncomplete: [], setStepCompleteAction: [], InsertStepsBeforeAction: [], InsertStepsAfterAction: [], RemoveStepsWithStepKeysAction: [], setStepsEnabledState: [], updateStepAction: [], updateCurrentStepImageAction: [], setCurrentDecisionOnStepFlowConfig: [], isETFStepValid: [], goToStepAction: [] }); })();

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let StepContainerComponent = class StepContainerComponent extends AbstractBaseComponent {
    store;
    loaderService;
    dataLayerService;
    stepFlowAnalyticsConfig;
    messageGroup;
    stepContainer;
    previousStep;
    stepNavigationEndTime;
    constructor(store, loaderService, dataLayerService) {
        super();
        this.store = store;
        this.loaderService = loaderService;
        this.dataLayerService = dataLayerService;
    }
    ngOnInit() {
        this.obs(this.store.select(StepFlowState.currentStep))
            .pipe(untilDestroyed(this))
            .subscribe((currentStep) => {
            if (currentStep) {
                this.stepNavigationEndTime = new Date().getTime();
                this.reportStepLoadTime(currentStep);
                const viewContainerRef = this.stepContainer.viewContainerRef;
                viewContainerRef.clear();
                const componentRef = viewContainerRef.createComponent(currentStep.template);
                componentRef.instance.store = this.store;
                componentRef.instance.currentStep = currentStep;
                if (this.messageGroup) {
                    componentRef.instance.messageGroup = this.messageGroup;
                }
                if (!isEmpty(this.stepFlowAnalyticsConfig)) {
                    const attributes = {
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
    getLastAPIExecutionTime() {
        this.loaderService.loadingStatus.pipe(untilDestroyed(this)).subscribe((loaderData) => {
            if (loaderData.isAPIExecutionInProgress) {
                this.stepNavigationEndTime = 0;
            }
            else {
                this.stepNavigationEndTime = loaderData.dataCapturedOn;
            }
        });
    }
    reportStepLoadTime(currentStep) {
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
    delayStepLoadTime() {
        setTimeout((stepNavigationEndTime) => {
            if (stepNavigationEndTime === this.stepNavigationEndTime && this.stepNavigationEndTime !== 0) {
                this.fireStepLoadTimeEvent();
            }
            else {
                this.delayStepLoadTime();
            }
        }, 10, this.stepNavigationEndTime);
    }
    fireStepLoadTimeEvent() {
        const stepNavigationStartTime = this.store.selectSnapshot(StepFlowState.stepNavigationStartTime);
        const attributes = {
            itemName: stepNavigationStartTime > 0
                ? ((this.stepNavigationEndTime - stepNavigationStartTime) / 1000).toFixed(2).toString()
                : ((this.stepNavigationEndTime -
                    window.performance.getEntries()[0].fetchStart) /
                    1000)
                    .toFixed(2)
                    .toString(),
        };
        this.dataLayerService.addStepLoadTimeEvent(attributes);
    }
    getAnalyticsStepName() {
        const currentStep = this.store.selectSnapshot(StepFlowState.currentStep);
        if (currentStep?.analyticsOptions?.name) {
            return `${currentStep.analyticsOptions.name}`;
        }
        return `${currentStep?.key}`;
    }
    static ɵfac = function StepContainerComponent_Factory(t) { return new (t || StepContainerComponent)(i0.ɵɵdirectiveInject(i1.Store), i0.ɵɵdirectiveInject(i2.LoaderService), i0.ɵɵdirectiveInject(i3.DataLayerService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StepContainerComponent, selectors: [["app-step-container"]], viewQuery: function StepContainerComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(StepContainerDirective, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.stepContainer = _t.first);
        } }, inputs: { stepFlowAnalyticsConfig: "stepFlowAnalyticsConfig", messageGroup: "messageGroup" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [["appStepContainer", ""]], template: function StepContainerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementContainer(0, 0);
        } }, dependencies: [StepContainerDirective], encapsulation: 2 });
};
StepContainerComponent = __decorate$1([
    UntilDestroy()
], StepContainerComponent);
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StepContainerComponent, [{
        type: Component,
        args: [{ selector: 'app-step-container', template: "<ng-container appStepContainer></ng-container>\n" }]
    }], () => [{ type: i1.Store }, { type: i2.LoaderService }, { type: i3.DataLayerService }], { stepFlowAnalyticsConfig: [{
            type: Input
        }], messageGroup: [{
            type: Input
        }], stepContainer: [{
            type: ViewChild,
            args: [StepContainerDirective, { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StepContainerComponent, { className: "StepContainerComponent" }); })();

var NavigationBarNextLabelEnum;
(function (NavigationBarNextLabelEnum) {
    NavigationBarNextLabelEnum["START"] = "ng.step-flow.start-step-label";
    NavigationBarNextLabelEnum["NEXT"] = "ng.step-flow.next-step-label";
    NavigationBarNextLabelEnum["FINAL"] = "ng.step-flow.close-label";
    NavigationBarNextLabelEnum["CONFIRM"] = "ng.step-flow.confirm-label";
})(NavigationBarNextLabelEnum || (NavigationBarNextLabelEnum = {}));

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function NavigationBarComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 7);
    i0.ɵɵlistener("click", function NavigationBarComponent_ng_template_3_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.goToPreviousStep()); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("disabled", ctx_r0.isLoading)("visibility--hide", (!ctx_r0.hasPreviousStep || ctx_r0.previousStepDisabled) && !ctx_r0.isCurrentStepAlternativeFirstStep());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 5, "ng.step-flow.previous-step-label"), " ");
} }
function NavigationBarComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 8);
    i0.ɵɵlistener("click", function NavigationBarComponent_ng_template_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r9.goToPreviousStep()); });
    i0.ɵɵelement(1, "i", 9);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("disabled", ctx_r1.isLoading)("display--none-important", (!ctx_r1.hasPreviousStep || ctx_r1.previousStepDisabled) && !ctx_r1.isCurrentStepAlternativeFirstStep());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 5, "ng.step-flow.previous-step-label"));
} }
function NavigationBarComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10)(1, "p");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r2.currentStepNumber, "/", ctx_r2.stepCount, "");
} }
function NavigationBarComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "div")(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "a")(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div")(9, "span");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "a");
    i0.ɵɵtext(12);
    i0.ɵɵpipe(13, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r3.messageGroup + ".info.free-sales-number");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(7, 4, ctx_r3.messageGroup + ".free-sales-number"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r3.messageGroup + ".info.free-sales-number");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(13, 6, ctx_r3.messageGroup + ".free-sales-number"));
} }
function NavigationBarComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 12);
    i0.ɵɵlistener("click", function NavigationBarComponent_ng_template_8_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r11.goToNextStep()); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("disabled", ctx_r4.isLoading)("visibility--hide", !ctx_r4.hasNextStep);
    i0.ɵɵproperty("ngClass", ctx_r4.currentStepNumber === 1 && !ctx_r4.isCurrentStepAlternativeFirstStep() || ctx_r4.isConfirmationStep ? "button button--primary" : "link link--chevron");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 6, ctx_r4.nextStepLabel), " ");
} }
function NavigationBarComponent_ng_template_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 1, ctx_r13.buttonTextOverride));
} }
function NavigationBarComponent_ng_template_9_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, ctx_r14.nextStepLabel));
} }
function NavigationBarComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 13);
    i0.ɵɵlistener("click", function NavigationBarComponent_ng_template_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r16.goToNextStep()); });
    i0.ɵɵtemplate(1, NavigationBarComponent_ng_template_9_ng_container_1_Template, 4, 3, "ng-container", 14)(2, NavigationBarComponent_ng_template_9_ng_template_2_Template, 3, 3, "ng-template", null, 15, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelement(4, "i", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r15 = i0.ɵɵreference(3);
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("disabled", ctx_r5.isLoading)("visibility--hide", !ctx_r5.hasNextStep);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r5.buttonTextOverride)("ngIfElse", _r15);
} }
function NavigationBarComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelement(1, "div");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("indicator-progress ready-", ctx_r6.progressPercentage, "");
} }
let NavigationBarComponent = class NavigationBarComponent {
    store;
    formErrorService;
    loaderService;
    changeDetectorRef;
    dynamicShadow;
    showStepCounter;
    showStepProgressBar;
    showSalesContactNumber;
    styling = 'default';
    buttonTextOverride;
    messageGroup = '';
    currentStep;
    isConfirmationStep;
    stepCount;
    currentStepNumber;
    progressPercentage;
    hasNextStep = false;
    hasPreviousStep = false;
    previousStepDisabled = false;
    isLoading = false;
    nextStepLabel = NavigationBarNextLabelEnum.START;
    alternativeFirstStep = false;
    buttonTypeOverride;
    constructor(store, formErrorService, loaderService, changeDetectorRef) {
        this.store = store;
        this.formErrorService = formErrorService;
        this.loaderService = loaderService;
        this.changeDetectorRef = changeDetectorRef;
    }
    ngOnInit() {
        this.store
            .select(StepFlowState.currentStep)
            .pipe(untilDestroyed(this), tap((currentStep) => {
            if (currentStep) {
                this.alternativeFirstStep = currentStep.asAlternativeFirstStep;
            }
        }))
            .subscribe((currentStep) => {
            if (!currentStep) {
                throw Error('Could not initialise stepper navigation bar');
            }
            else {
                this.currentStep = currentStep;
            }
            this.isConfirmationStep = currentStep.isConfirm();
            const steps = this.store.selectSnapshot(StepFlowState.steps);
            this.stepCount = StepFlowUtil.getStepCount(steps);
            this.currentStepNumber = StepFlowUtil.getStepIndex(currentStep, steps) + 1;
            this.hasNextStep = StepFlowUtil.hasNextStep(currentStep, steps);
            this.hasPreviousStep = StepFlowUtil.hasPreviousStep(currentStep, steps);
            this.previousStepDisabled = currentStep.previousStepDisabled;
            this.nextStepLabel = this.getNextLabel();
            this.progressPercentage = this.calculateProgress();
        });
        this.loaderService.loadingStatus.pipe(untilDestroyed(this)).subscribe((loaderData) => {
            this.isLoading = !!loaderData.isAPIExecutionInProgress;
            this.changeDetectorRef.detectChanges();
        });
    }
    goToNextStep() {
        if (!this.isLoading) {
            this.formErrorService.submit$.next(null);
            if (this.currentStep.nextButtonCallback) {
                this.currentStep
                    .nextButtonCallback()
                    .pipe(take(1))
                    .subscribe((response) => {
                    if (response) {
                        this.store.dispatch(new GoToNextStepAction());
                    }
                });
            }
            else {
                this.store.dispatch(new GoToNextStepAction());
            }
        }
    }
    calculateProgress() {
        return ((this.currentStepNumber / this.stepCount) * 100).toFixed(0);
    }
    getNextLabel() {
        if (this.buttonTypeOverride) {
            return this.buttonTypeOverride;
        }
        else if (this.isCurrentStepAlternativeFirstStep() || this.currentStep.isConfirm()) {
            return NavigationBarNextLabelEnum.CONFIRM;
        }
        else if (this.isCurrentStepFirstStep()) {
            return NavigationBarNextLabelEnum.START;
        }
        else if (this.currentStep.isFinal()) {
            return NavigationBarNextLabelEnum.FINAL;
        }
        else {
            return NavigationBarNextLabelEnum.NEXT;
        }
    }
    isCurrentStepFirstStep() {
        return this.currentStepNumber === 1;
    }
    goToPreviousStep() {
        if (this.currentStep.prevButtonCallback) {
            this.currentStep
                .prevButtonCallback()
                .pipe(take(1))
                .subscribe((response) => {
                if (response) {
                    this.store.dispatch(new GoToPreviousStepAction());
                }
            });
        }
        else {
            this.store.dispatch(new GoToPreviousStepAction());
        }
    }
    isCurrentStepAlternativeFirstStep() {
        return this.isCurrentStepFirstStep() && this.alternativeFirstStep;
    }
    static ɵfac = function NavigationBarComponent_Factory(t) { return new (t || NavigationBarComponent)(i0.ɵɵdirectiveInject(i1.Store), i0.ɵɵdirectiveInject(i2$1.FormErrorService), i0.ɵɵdirectiveInject(i2.LoaderService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NavigationBarComponent, selectors: [["app-step-navigation-bar-monorepo"]], inputs: { dynamicShadow: "dynamicShadow", showStepCounter: "showStepCounter", showStepProgressBar: "showStepProgressBar", showSalesContactNumber: "showSalesContactNumber", styling: "styling", buttonTextOverride: "buttonTextOverride", messageGroup: "messageGroup" }, decls: 11, vars: 13, consts: [[1, "sticky-footer-v2", "position--fixed", "background-white", "width--full", "py--m", "px--xm", "p--xm--md", "display--flex", "justify-content--center", "align-items--center", "box-sizing--inherit", "shadow--xs-inverse", "position--bottom", "position--left"], [1, "sticky-footer-v2__container", "width--full", "default-max-site-width", "display--flex", "justify-content--between", "align-items--center"], [1, "back-section"], [3, "ngIf"], ["class", "progress-paging", 4, "ngIf"], ["class", "display--flex flex-direction--column font-weight--bold align-items--center", 4, "ngIf"], ["class", "progress-bar", 4, "ngIf"], [1, "link", "link--with-icon", "link--subtle", 3, "click"], [1, "button", "button--secondary", "button__icon--position-left", 3, "click"], [1, "icon", "icon-chevron-left"], [1, "progress-paging"], [1, "display--flex", "flex-direction--column", "font-weight--bold", "align-items--center"], [3, "ngClass", "click"], [1, "button", "button--primary", "button__icon--position-right", 3, "click"], [4, "ngIf", "ngIfElse"], ["defaultLabel", ""], [1, "icon", "icon-chevron-right"], [1, "progress-bar"]], template: function NavigationBarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
            i0.ɵɵtemplate(3, NavigationBarComponent_ng_template_3_Template, 3, 7, "ng-template", 3)(4, NavigationBarComponent_ng_template_4_Template, 5, 7, "ng-template", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, NavigationBarComponent_div_5_Template, 3, 2, "div", 4)(6, NavigationBarComponent_div_6_Template, 14, 8, "div", 5);
            i0.ɵɵelementStart(7, "div");
            i0.ɵɵtemplate(8, NavigationBarComponent_ng_template_8_Template, 3, 8, "ng-template", 3)(9, NavigationBarComponent_ng_template_9_Template, 5, 6, "ng-template", 3);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(10, NavigationBarComponent_div_10_Template, 2, 3, "div", 6);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassProp("disabled", ctx.isLoading)("sticky-footer--flow__dynamic-shadow", ctx.dynamicShadow);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.styling === "default");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.styling === "buttons");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showStepCounter);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showSalesContactNumber);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("next-section", ctx.currentStepNumber !== 1 && !ctx.isConfirmationStep);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.styling === "default");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.styling === "buttons");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showStepProgressBar);
        } }, dependencies: [i4.NgClass, i4.NgIf, i5.TranslatePipe], encapsulation: 2 });
};
NavigationBarComponent = __decorate([
    UntilDestroy()
], NavigationBarComponent);
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavigationBarComponent, [{
        type: Component,
        args: [{ selector: 'app-step-navigation-bar-monorepo', template: "<div\n  [class.disabled]=\"isLoading\"\n  [class.sticky-footer--flow__dynamic-shadow]=\"dynamicShadow\"\n  class=\"sticky-footer-v2 position--fixed background-white width--full py--m px--xm p--xm--md display--flex justify-content--center align-items--center box-sizing--inherit shadow--xs-inverse position--bottom position--left\">\n  <div\n    class=\"sticky-footer-v2__container width--full default-max-site-width display--flex justify-content--between align-items--center\">\n    <!-- left arrow and back text-->\n    <div class=\"back-section\">\n      <ng-template [ngIf]=\"styling === 'default'\">\n        <a\n          (click)=\"goToPreviousStep()\"\n          [class.disabled]=\"isLoading\"\n          [class.visibility--hide]=\"(!hasPreviousStep || previousStepDisabled) && !isCurrentStepAlternativeFirstStep()\"\n          class=\"link link--with-icon link--subtle\">\n          {{ 'ng.step-flow.previous-step-label' | translate }}\n        </a>\n      </ng-template>\n      <ng-template [ngIf]=\"styling === 'buttons'\">\n        <button\n          class=\"button button--secondary button__icon--position-left\"\n          (click)=\"goToPreviousStep()\"\n          [class.disabled]=\"isLoading\"\n          [class.display--none-important]=\"\n            (!hasPreviousStep || previousStepDisabled) && !isCurrentStepAlternativeFirstStep()\n          \">\n          <i class=\"icon icon-chevron-left\"></i>\n          <span>{{ 'ng.step-flow.previous-step-label' | translate }}</span>\n        </button>\n      </ng-template>\n    </div>\n    <div *ngIf=\"this.showStepCounter\" class=\"progress-paging\">\n      <p>{{ currentStepNumber }}/{{ stepCount }}</p>\n    </div>\n    <div\n      *ngIf=\"this.showSalesContactNumber\"\n      class=\"display--flex flex-direction--column font-weight--bold align-items--center\">\n      <div>\n        <span>{{ messageGroup + '.info.free-sales-number' }}</span>\n      </div>\n      <a\n        ><span>{{ messageGroup + '.free-sales-number' | translate }}</span></a\n      >\n      <div>\n        <span>{{ messageGroup + '.info.free-sales-number' }}</span>\n      </div>\n      <a>{{ messageGroup + '.free-sales-number' | translate }}</a>\n    </div>\n    <div [class.next-section]=\"currentStepNumber !== 1 && !isConfirmationStep\">\n      <ng-template [ngIf]=\"styling === 'default'\">\n        <a\n          (click)=\"goToNextStep()\"\n          [class.disabled]=\"isLoading\"\n          [class.visibility--hide]=\"!hasNextStep\"\n          [ngClass]=\"\n            (currentStepNumber === 1 && !isCurrentStepAlternativeFirstStep()) || isConfirmationStep\n              ? 'button button--primary'\n              : 'link link--chevron'\n          \">\n          {{ this.nextStepLabel | translate }}\n        </a>\n      </ng-template>\n      <ng-template [ngIf]=\"styling === 'buttons'\">\n        <button\n          class=\"button button--primary button__icon--position-right\"\n          (click)=\"goToNextStep()\"\n          [class.disabled]=\"isLoading\"\n          [class.visibility--hide]=\"!hasNextStep\">\n          <ng-container *ngIf=\"buttonTextOverride; else defaultLabel\">\n            <span>{{ this.buttonTextOverride | translate }}</span>\n          </ng-container>\n          <ng-template #defaultLabel>\n            <span>{{ this.nextStepLabel | translate }}</span> </ng-template\n          ><i class=\"icon icon-chevron-right\"></i>\n        </button>\n      </ng-template>\n    </div>\n  </div>\n  <div *ngIf=\"this.showStepProgressBar\" class=\"progress-bar\">\n    <div class=\"indicator-progress ready-{{ this.progressPercentage }}\"></div>\n  </div>\n</div>\n" }]
    }], () => [{ type: i1.Store }, { type: i2$1.FormErrorService }, { type: i2.LoaderService }, { type: i0.ChangeDetectorRef }], { dynamicShadow: [{
            type: Input
        }], showStepCounter: [{
            type: Input
        }], showStepProgressBar: [{
            type: Input
        }], showSalesContactNumber: [{
            type: Input
        }], styling: [{
            type: Input
        }], buttonTextOverride: [{
            type: Input
        }], messageGroup: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NavigationBarComponent, { className: "NavigationBarComponent" }); })();

class StepFlowLibModule {
    static ɵfac = function StepFlowLibModule_Factory(t) { return new (t || StepFlowLibModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: StepFlowLibModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [TranslateService], imports: [CommonModule, TranslateModule] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StepFlowLibModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, TranslateModule],
                declarations: [StepContainerDirective, StepHostDirective, StepContainerComponent, NavigationBarComponent],
                exports: [StepContainerComponent, StepContainerDirective, StepHostDirective, NavigationBarComponent],
                providers: [TranslateService],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(StepFlowLibModule, { declarations: [StepContainerDirective, StepHostDirective, StepContainerComponent, NavigationBarComponent], imports: [CommonModule, TranslateModule], exports: [StepContainerComponent, StepContainerDirective, StepHostDirective, NavigationBarComponent] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { ETFStepValidAction, GoToFinalStepAction, GoToNextStepAction, GoToPreviousStepAction, GoToStepAction, InsertStepsAfterAction, InsertStepsBeforeAction, NavigationBarComponent, NavigationBarNextLabelEnum, NotifyStepRendered, RemoveStepsWithStepKeysAction, ReportStepLoadTimingAction, SetCurrentDecisionOnStepFlowConfig, SetStepCompleteAction, SetStepConfigurationAction, SetStepIncompleteAction, SetStepNavigationStartTimeAction, SetStepToEditAction, SetStepsAction, SetStepsEnabledState, Step, StepBuilder, StepContainerComponent, StepContainerDirective, StepEnum, StepFactory, StepFlowLibModule, StepFlowState, StepFlowUtil, StepHostDirective, TemplateFactory, UpdateCurrentStepImageAction, UpdateStepAction, instanceOfStepDecision };
//# sourceMappingURL=telenet-ng-lib-step-flow.mjs.map
