var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Input } from '@angular/core';
import { NavigationBarNextLabelEnum } from './navigation-bar-next-label.enum';
import { GoToNextStepAction, GoToPreviousStepAction, StepFlowState, StepFlowUtil } from '../store';
import { take, tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import * as i0 from "@angular/core";
import * as i1 from "@ngxs/store";
import * as i2 from "@telenet/ng-lib-form";
import * as i3 from "@telenet/ng-lib-page";
import * as i4 from "@angular/common";
import * as i5 from "@ngx-translate/core";
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
    static ɵfac = function NavigationBarComponent_Factory(t) { return new (t || NavigationBarComponent)(i0.ɵɵdirectiveInject(i1.Store), i0.ɵɵdirectiveInject(i2.FormErrorService), i0.ɵɵdirectiveInject(i3.LoaderService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
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
export { NavigationBarComponent };
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavigationBarComponent, [{
        type: Component,
        args: [{ selector: 'app-step-navigation-bar-monorepo', template: "<div\n  [class.disabled]=\"isLoading\"\n  [class.sticky-footer--flow__dynamic-shadow]=\"dynamicShadow\"\n  class=\"sticky-footer-v2 position--fixed background-white width--full py--m px--xm p--xm--md display--flex justify-content--center align-items--center box-sizing--inherit shadow--xs-inverse position--bottom position--left\">\n  <div\n    class=\"sticky-footer-v2__container width--full default-max-site-width display--flex justify-content--between align-items--center\">\n    <!-- left arrow and back text-->\n    <div class=\"back-section\">\n      <ng-template [ngIf]=\"styling === 'default'\">\n        <a\n          (click)=\"goToPreviousStep()\"\n          [class.disabled]=\"isLoading\"\n          [class.visibility--hide]=\"(!hasPreviousStep || previousStepDisabled) && !isCurrentStepAlternativeFirstStep()\"\n          class=\"link link--with-icon link--subtle\">\n          {{ 'ng.step-flow.previous-step-label' | translate }}\n        </a>\n      </ng-template>\n      <ng-template [ngIf]=\"styling === 'buttons'\">\n        <button\n          class=\"button button--secondary button__icon--position-left\"\n          (click)=\"goToPreviousStep()\"\n          [class.disabled]=\"isLoading\"\n          [class.display--none-important]=\"\n            (!hasPreviousStep || previousStepDisabled) && !isCurrentStepAlternativeFirstStep()\n          \">\n          <i class=\"icon icon-chevron-left\"></i>\n          <span>{{ 'ng.step-flow.previous-step-label' | translate }}</span>\n        </button>\n      </ng-template>\n    </div>\n    <div *ngIf=\"this.showStepCounter\" class=\"progress-paging\">\n      <p>{{ currentStepNumber }}/{{ stepCount }}</p>\n    </div>\n    <div\n      *ngIf=\"this.showSalesContactNumber\"\n      class=\"display--flex flex-direction--column font-weight--bold align-items--center\">\n      <div>\n        <span>{{ messageGroup + '.info.free-sales-number' }}</span>\n      </div>\n      <a\n        ><span>{{ messageGroup + '.free-sales-number' | translate }}</span></a\n      >\n      <div>\n        <span>{{ messageGroup + '.info.free-sales-number' }}</span>\n      </div>\n      <a>{{ messageGroup + '.free-sales-number' | translate }}</a>\n    </div>\n    <div [class.next-section]=\"currentStepNumber !== 1 && !isConfirmationStep\">\n      <ng-template [ngIf]=\"styling === 'default'\">\n        <a\n          (click)=\"goToNextStep()\"\n          [class.disabled]=\"isLoading\"\n          [class.visibility--hide]=\"!hasNextStep\"\n          [ngClass]=\"\n            (currentStepNumber === 1 && !isCurrentStepAlternativeFirstStep()) || isConfirmationStep\n              ? 'button button--primary'\n              : 'link link--chevron'\n          \">\n          {{ this.nextStepLabel | translate }}\n        </a>\n      </ng-template>\n      <ng-template [ngIf]=\"styling === 'buttons'\">\n        <button\n          class=\"button button--primary button__icon--position-right\"\n          (click)=\"goToNextStep()\"\n          [class.disabled]=\"isLoading\"\n          [class.visibility--hide]=\"!hasNextStep\">\n          <ng-container *ngIf=\"buttonTextOverride; else defaultLabel\">\n            <span>{{ this.buttonTextOverride | translate }}</span>\n          </ng-container>\n          <ng-template #defaultLabel>\n            <span>{{ this.nextStepLabel | translate }}</span> </ng-template\n          ><i class=\"icon icon-chevron-right\"></i>\n        </button>\n      </ng-template>\n    </div>\n  </div>\n  <div *ngIf=\"this.showStepProgressBar\" class=\"progress-bar\">\n    <div class=\"indicator-progress ready-{{ this.progressPercentage }}\"></div>\n  </div>\n</div>\n" }]
    }], () => [{ type: i1.Store }, { type: i2.FormErrorService }, { type: i3.LoaderService }, { type: i0.ChangeDetectorRef }], { dynamicShadow: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9uYXZpZ2F0aW9uLWJhci9uYXZpZ2F0aW9uLWJhci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9zcmMvbGliL25hdmlnYXRpb24tYmFyL25hdmlnYXRpb24tYmFyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBcUIsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUc1RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsc0JBQXNCLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVuRyxPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7OztJQ0M3RCw0QkFJNEM7SUFIMUMsc0tBQVMsZUFBQSx5QkFBa0IsQ0FBQSxJQUFDO0lBSTVCLFlBQ0Y7O0lBQUEsaUJBQUk7OztJQUpGLDRDQUE0Qiw2SEFBQTtJQUc1QixjQUNGO0lBREUseUZBQ0Y7Ozs7SUFHQSxpQ0FNSTtJQUpGLDRLQUFTLGVBQUEseUJBQWtCLENBQUEsSUFBQztJQUs1Qix1QkFBc0M7SUFDdEMsNEJBQU07SUFBQSxZQUFvRDs7SUFBQSxpQkFBTyxFQUFBOzs7SUFMakUsNENBQTRCLG9JQUFBO0lBS3RCLGVBQW9EO0lBQXBELDhFQUFvRDs7O0lBSWhFLCtCQUEwRCxRQUFBO0lBQ3JELFlBQXVDO0lBQUEsaUJBQUksRUFBQTs7O0lBQTNDLGVBQXVDO0lBQXZDLDhFQUF1Qzs7O0lBRTVDLCtCQUVxRixVQUFBLFdBQUE7SUFFM0UsWUFBOEM7SUFBQSxp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QixjQUE4QjtZQUE5QixnREFBOEI7WUFhdkMsY0FBMEI7WUFBMUIsMENBQTBCO1lBSTdCLGNBQWlDO1lBQWpDLGlEQUFpQztZQWEvQixjQUFxRTtZQUFyRSxzRkFBcUU7WUFDM0QsY0FBOEI7WUFBOUIsZ0RBQThCO1lBYTlCLGNBQThCO1lBQTlCLGdEQUE4QjtZQWdCekMsY0FBOEI7WUFBOUIsOENBQThCOzs7QUQ5RHpCLHNCQUFzQjtJQUxsQyxZQUFZLEVBQUU7R0FLRixzQkFBc0IsQ0F1SGxDOztpRkF2SFksc0JBQXNCO2NBSmxDLFNBQVM7MkJBQ0Usa0NBQWtDO2lJQUluQyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLG1CQUFtQjtrQkFBM0IsS0FBSztZQUNHLHNCQUFzQjtrQkFBOUIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLGtCQUFrQjtrQkFBMUIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7O2tGQVBLLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1FcnJvclNlcnZpY2UgfSBmcm9tICdAdGVsZW5ldC9uZy1saWItZm9ybSc7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25CYXJOZXh0TGFiZWxFbnVtIH0gZnJvbSAnLi9uYXZpZ2F0aW9uLWJhci1uZXh0LWxhYmVsLmVudW0nO1xuaW1wb3J0IHsgR29Ub05leHRTdGVwQWN0aW9uLCBHb1RvUHJldmlvdXNTdGVwQWN0aW9uLCBTdGVwRmxvd1N0YXRlLCBTdGVwRmxvd1V0aWwgfSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgeyBTdGVwIH0gZnJvbSAnLi4vc3RlcC5tb2RlbCc7XG5pbXBvcnQgeyB0YWtlLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBMb2FkZXJEYXRhLCBMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnQHRlbGVuZXQvbmctbGliLXBhZ2UnO1xuaW1wb3J0IHsgVW50aWxEZXN0cm95LCB1bnRpbERlc3Ryb3llZCB9IGZyb20gJ0BuZ25lYXQvdW50aWwtZGVzdHJveSc7XG5cbkBVbnRpbERlc3Ryb3koKVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXN0ZXAtbmF2aWdhdGlvbi1iYXItbW9ub3JlcG8nLFxuICB0ZW1wbGF0ZVVybDogJy4vbmF2aWdhdGlvbi1iYXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZHluYW1pY1NoYWRvdzogYm9vbGVhbjtcbiAgQElucHV0KCkgc2hvd1N0ZXBDb3VudGVyOiBib29sZWFuO1xuICBASW5wdXQoKSBzaG93U3RlcFByb2dyZXNzQmFyOiBib29sZWFuO1xuICBASW5wdXQoKSBzaG93U2FsZXNDb250YWN0TnVtYmVyOiBib29sZWFuO1xuICBASW5wdXQoKSBzdHlsaW5nOiAnZGVmYXVsdCcgfCAnYnV0dG9ucycgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIGJ1dHRvblRleHRPdmVycmlkZTogc3RyaW5nO1xuICBASW5wdXQoKSBtZXNzYWdlR3JvdXAgPSAnJztcbiAgY3VycmVudFN0ZXA6IFN0ZXA7XG4gIGlzQ29uZmlybWF0aW9uU3RlcDogYm9vbGVhbjtcbiAgc3RlcENvdW50OiBudW1iZXI7XG4gIGN1cnJlbnRTdGVwTnVtYmVyOiBudW1iZXI7XG4gIHByb2dyZXNzUGVyY2VudGFnZTogc3RyaW5nO1xuICBoYXNOZXh0U3RlcCA9IGZhbHNlO1xuICBoYXNQcmV2aW91c1N0ZXAgPSBmYWxzZTtcbiAgcHJldmlvdXNTdGVwRGlzYWJsZWQgPSBmYWxzZTtcbiAgaXNMb2FkaW5nID0gZmFsc2U7XG4gIG5leHRTdGVwTGFiZWw6IE5hdmlnYXRpb25CYXJOZXh0TGFiZWxFbnVtID0gTmF2aWdhdGlvbkJhck5leHRMYWJlbEVudW0uU1RBUlQ7XG4gIGFsdGVybmF0aXZlRmlyc3RTdGVwID0gZmFsc2U7XG4gIGJ1dHRvblR5cGVPdmVycmlkZTogTmF2aWdhdGlvbkJhck5leHRMYWJlbEVudW07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBzdG9yZTogU3RvcmUsXG4gICAgcHJpdmF0ZSByZWFkb25seSBmb3JtRXJyb3JTZXJ2aWNlOiBGb3JtRXJyb3JTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgbG9hZGVyU2VydmljZTogTG9hZGVyU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdG9yZVxuICAgICAgLnNlbGVjdChTdGVwRmxvd1N0YXRlLmN1cnJlbnRTdGVwKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHVudGlsRGVzdHJveWVkKHRoaXMpLFxuICAgICAgICB0YXAoKGN1cnJlbnRTdGVwPzogU3RlcCkgPT4ge1xuICAgICAgICAgIGlmIChjdXJyZW50U3RlcCkge1xuICAgICAgICAgICAgdGhpcy5hbHRlcm5hdGl2ZUZpcnN0U3RlcCA9IGN1cnJlbnRTdGVwLmFzQWx0ZXJuYXRpdmVGaXJzdFN0ZXA7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoY3VycmVudFN0ZXA/OiBTdGVwKSA9PiB7XG4gICAgICAgIGlmICghY3VycmVudFN0ZXApIHtcbiAgICAgICAgICB0aHJvdyBFcnJvcignQ291bGQgbm90IGluaXRpYWxpc2Ugc3RlcHBlciBuYXZpZ2F0aW9uIGJhcicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY3VycmVudFN0ZXAgPSBjdXJyZW50U3RlcDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzQ29uZmlybWF0aW9uU3RlcCA9IGN1cnJlbnRTdGVwLmlzQ29uZmlybSgpO1xuICAgICAgICBjb25zdCBzdGVwcyA9IHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoU3RlcEZsb3dTdGF0ZS5zdGVwcyk7XG4gICAgICAgIHRoaXMuc3RlcENvdW50ID0gU3RlcEZsb3dVdGlsLmdldFN0ZXBDb3VudChzdGVwcyk7XG4gICAgICAgIHRoaXMuY3VycmVudFN0ZXBOdW1iZXIgPSBTdGVwRmxvd1V0aWwuZ2V0U3RlcEluZGV4KGN1cnJlbnRTdGVwLCBzdGVwcykgKyAxO1xuICAgICAgICB0aGlzLmhhc05leHRTdGVwID0gU3RlcEZsb3dVdGlsLmhhc05leHRTdGVwKGN1cnJlbnRTdGVwLCBzdGVwcyk7XG4gICAgICAgIHRoaXMuaGFzUHJldmlvdXNTdGVwID0gU3RlcEZsb3dVdGlsLmhhc1ByZXZpb3VzU3RlcChjdXJyZW50U3RlcCwgc3RlcHMpO1xuICAgICAgICB0aGlzLnByZXZpb3VzU3RlcERpc2FibGVkID0gY3VycmVudFN0ZXAucHJldmlvdXNTdGVwRGlzYWJsZWQ7XG4gICAgICAgIHRoaXMubmV4dFN0ZXBMYWJlbCA9IHRoaXMuZ2V0TmV4dExhYmVsKCk7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NQZXJjZW50YWdlID0gdGhpcy5jYWxjdWxhdGVQcm9ncmVzcygpO1xuICAgICAgfSk7XG4gICAgdGhpcy5sb2FkZXJTZXJ2aWNlLmxvYWRpbmdTdGF0dXMucGlwZSh1bnRpbERlc3Ryb3llZCh0aGlzKSkuc3Vic2NyaWJlKChsb2FkZXJEYXRhOiBMb2FkZXJEYXRhKSA9PiB7XG4gICAgICB0aGlzLmlzTG9hZGluZyA9ICEhbG9hZGVyRGF0YS5pc0FQSUV4ZWN1dGlvbkluUHJvZ3Jlc3M7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdvVG9OZXh0U3RlcCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNMb2FkaW5nKSB7XG4gICAgICB0aGlzLmZvcm1FcnJvclNlcnZpY2Uuc3VibWl0JC5uZXh0KG51bGwpO1xuICAgICAgaWYgKHRoaXMuY3VycmVudFN0ZXAubmV4dEJ1dHRvbkNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFN0ZXBcbiAgICAgICAgICAubmV4dEJ1dHRvbkNhbGxiYWNrKClcbiAgICAgICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlOiB1bmtub3duKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR29Ub05leHRTdGVwQWN0aW9uKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR29Ub05leHRTdGVwQWN0aW9uKCkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlUHJvZ3Jlc3MoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKCh0aGlzLmN1cnJlbnRTdGVwTnVtYmVyIC8gdGhpcy5zdGVwQ291bnQpICogMTAwKS50b0ZpeGVkKDApO1xuICB9XG5cbiAgZ2V0TmV4dExhYmVsKCk6IE5hdmlnYXRpb25CYXJOZXh0TGFiZWxFbnVtIHtcbiAgICBpZiAodGhpcy5idXR0b25UeXBlT3ZlcnJpZGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmJ1dHRvblR5cGVPdmVycmlkZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNDdXJyZW50U3RlcEFsdGVybmF0aXZlRmlyc3RTdGVwKCkgfHwgdGhpcy5jdXJyZW50U3RlcC5pc0NvbmZpcm0oKSkge1xuICAgICAgcmV0dXJuIE5hdmlnYXRpb25CYXJOZXh0TGFiZWxFbnVtLkNPTkZJUk07XG4gICAgfSBlbHNlIGlmICh0aGlzLmlzQ3VycmVudFN0ZXBGaXJzdFN0ZXAoKSkge1xuICAgICAgcmV0dXJuIE5hdmlnYXRpb25CYXJOZXh0TGFiZWxFbnVtLlNUQVJUO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50U3RlcC5pc0ZpbmFsKCkpIHtcbiAgICAgIHJldHVybiBOYXZpZ2F0aW9uQmFyTmV4dExhYmVsRW51bS5GSU5BTDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE5hdmlnYXRpb25CYXJOZXh0TGFiZWxFbnVtLk5FWFQ7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpc0N1cnJlbnRTdGVwRmlyc3RTdGVwKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRTdGVwTnVtYmVyID09PSAxO1xuICB9XG5cbiAgZ29Ub1ByZXZpb3VzU3RlcCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jdXJyZW50U3RlcC5wcmV2QnV0dG9uQ2FsbGJhY2spIHtcbiAgICAgIHRoaXMuY3VycmVudFN0ZXBcbiAgICAgICAgLnByZXZCdXR0b25DYWxsYmFjaygpXG4gICAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlOiB1bmtub3duKSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHb1RvUHJldmlvdXNTdGVwQWN0aW9uKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdvVG9QcmV2aW91c1N0ZXBBY3Rpb24oKSk7XG4gICAgfVxuICB9XG5cbiAgaXNDdXJyZW50U3RlcEFsdGVybmF0aXZlRmlyc3RTdGVwKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzQ3VycmVudFN0ZXBGaXJzdFN0ZXAoKSAmJiB0aGlzLmFsdGVybmF0aXZlRmlyc3RTdGVwO1xuICB9XG59XG4iLCI8ZGl2XG4gIFtjbGFzcy5kaXNhYmxlZF09XCJpc0xvYWRpbmdcIlxuICBbY2xhc3Muc3RpY2t5LWZvb3Rlci0tZmxvd19fZHluYW1pYy1zaGFkb3ddPVwiZHluYW1pY1NoYWRvd1wiXG4gIGNsYXNzPVwic3RpY2t5LWZvb3Rlci12MiBwb3NpdGlvbi0tZml4ZWQgYmFja2dyb3VuZC13aGl0ZSB3aWR0aC0tZnVsbCBweS0tbSBweC0teG0gcC0teG0tLW1kIGRpc3BsYXktLWZsZXgganVzdGlmeS1jb250ZW50LS1jZW50ZXIgYWxpZ24taXRlbXMtLWNlbnRlciBib3gtc2l6aW5nLS1pbmhlcml0IHNoYWRvdy0teHMtaW52ZXJzZSBwb3NpdGlvbi0tYm90dG9tIHBvc2l0aW9uLS1sZWZ0XCI+XG4gIDxkaXZcbiAgICBjbGFzcz1cInN0aWNreS1mb290ZXItdjJfX2NvbnRhaW5lciB3aWR0aC0tZnVsbCBkZWZhdWx0LW1heC1zaXRlLXdpZHRoIGRpc3BsYXktLWZsZXgganVzdGlmeS1jb250ZW50LS1iZXR3ZWVuIGFsaWduLWl0ZW1zLS1jZW50ZXJcIj5cbiAgICA8IS0tIGxlZnQgYXJyb3cgYW5kIGJhY2sgdGV4dC0tPlxuICAgIDxkaXYgY2xhc3M9XCJiYWNrLXNlY3Rpb25cIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCJzdHlsaW5nID09PSAnZGVmYXVsdCdcIj5cbiAgICAgICAgPGFcbiAgICAgICAgICAoY2xpY2spPVwiZ29Ub1ByZXZpb3VzU3RlcCgpXCJcbiAgICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwiaXNMb2FkaW5nXCJcbiAgICAgICAgICBbY2xhc3MudmlzaWJpbGl0eS0taGlkZV09XCIoIWhhc1ByZXZpb3VzU3RlcCB8fCBwcmV2aW91c1N0ZXBEaXNhYmxlZCkgJiYgIWlzQ3VycmVudFN0ZXBBbHRlcm5hdGl2ZUZpcnN0U3RlcCgpXCJcbiAgICAgICAgICBjbGFzcz1cImxpbmsgbGluay0td2l0aC1pY29uIGxpbmstLXN1YnRsZVwiPlxuICAgICAgICAgIHt7ICduZy5zdGVwLWZsb3cucHJldmlvdXMtc3RlcC1sYWJlbCcgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgPC9hPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCJzdHlsaW5nID09PSAnYnV0dG9ucydcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tc2Vjb25kYXJ5IGJ1dHRvbl9faWNvbi0tcG9zaXRpb24tbGVmdFwiXG4gICAgICAgICAgKGNsaWNrKT1cImdvVG9QcmV2aW91c1N0ZXAoKVwiXG4gICAgICAgICAgW2NsYXNzLmRpc2FibGVkXT1cImlzTG9hZGluZ1wiXG4gICAgICAgICAgW2NsYXNzLmRpc3BsYXktLW5vbmUtaW1wb3J0YW50XT1cIlxuICAgICAgICAgICAgKCFoYXNQcmV2aW91c1N0ZXAgfHwgcHJldmlvdXNTdGVwRGlzYWJsZWQpICYmICFpc0N1cnJlbnRTdGVwQWx0ZXJuYXRpdmVGaXJzdFN0ZXAoKVxuICAgICAgICAgIFwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiaWNvbiBpY29uLWNoZXZyb24tbGVmdFwiPjwvaT5cbiAgICAgICAgICA8c3Bhbj57eyAnbmcuc3RlcC1mbG93LnByZXZpb3VzLXN0ZXAtbGFiZWwnIHwgdHJhbnNsYXRlIH19PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9kaXY+XG4gICAgPGRpdiAqbmdJZj1cInRoaXMuc2hvd1N0ZXBDb3VudGVyXCIgY2xhc3M9XCJwcm9ncmVzcy1wYWdpbmdcIj5cbiAgICAgIDxwPnt7IGN1cnJlbnRTdGVwTnVtYmVyIH19L3t7IHN0ZXBDb3VudCB9fTwvcD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2XG4gICAgICAqbmdJZj1cInRoaXMuc2hvd1NhbGVzQ29udGFjdE51bWJlclwiXG4gICAgICBjbGFzcz1cImRpc3BsYXktLWZsZXggZmxleC1kaXJlY3Rpb24tLWNvbHVtbiBmb250LXdlaWdodC0tYm9sZCBhbGlnbi1pdGVtcy0tY2VudGVyXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8c3Bhbj57eyBtZXNzYWdlR3JvdXAgKyAnLmluZm8uZnJlZS1zYWxlcy1udW1iZXInIH19PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8YVxuICAgICAgICA+PHNwYW4+e3sgbWVzc2FnZUdyb3VwICsgJy5mcmVlLXNhbGVzLW51bWJlcicgfCB0cmFuc2xhdGUgfX08L3NwYW4+PC9hXG4gICAgICA+XG4gICAgICA8ZGl2PlxuICAgICAgICA8c3Bhbj57eyBtZXNzYWdlR3JvdXAgKyAnLmluZm8uZnJlZS1zYWxlcy1udW1iZXInIH19PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8YT57eyBtZXNzYWdlR3JvdXAgKyAnLmZyZWUtc2FsZXMtbnVtYmVyJyB8IHRyYW5zbGF0ZSB9fTwvYT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IFtjbGFzcy5uZXh0LXNlY3Rpb25dPVwiY3VycmVudFN0ZXBOdW1iZXIgIT09IDEgJiYgIWlzQ29uZmlybWF0aW9uU3RlcFwiPlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cInN0eWxpbmcgPT09ICdkZWZhdWx0J1wiPlxuICAgICAgICA8YVxuICAgICAgICAgIChjbGljayk9XCJnb1RvTmV4dFN0ZXAoKVwiXG4gICAgICAgICAgW2NsYXNzLmRpc2FibGVkXT1cImlzTG9hZGluZ1wiXG4gICAgICAgICAgW2NsYXNzLnZpc2liaWxpdHktLWhpZGVdPVwiIWhhc05leHRTdGVwXCJcbiAgICAgICAgICBbbmdDbGFzc109XCJcbiAgICAgICAgICAgIChjdXJyZW50U3RlcE51bWJlciA9PT0gMSAmJiAhaXNDdXJyZW50U3RlcEFsdGVybmF0aXZlRmlyc3RTdGVwKCkpIHx8IGlzQ29uZmlybWF0aW9uU3RlcFxuICAgICAgICAgICAgICA/ICdidXR0b24gYnV0dG9uLS1wcmltYXJ5J1xuICAgICAgICAgICAgICA6ICdsaW5rIGxpbmstLWNoZXZyb24nXG4gICAgICAgICAgXCI+XG4gICAgICAgICAge3sgdGhpcy5uZXh0U3RlcExhYmVsIHwgdHJhbnNsYXRlIH19XG4gICAgICAgIDwvYT5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwic3R5bGluZyA9PT0gJ2J1dHRvbnMnXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXByaW1hcnkgYnV0dG9uX19pY29uLS1wb3NpdGlvbi1yaWdodFwiXG4gICAgICAgICAgKGNsaWNrKT1cImdvVG9OZXh0U3RlcCgpXCJcbiAgICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwiaXNMb2FkaW5nXCJcbiAgICAgICAgICBbY2xhc3MudmlzaWJpbGl0eS0taGlkZV09XCIhaGFzTmV4dFN0ZXBcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiYnV0dG9uVGV4dE92ZXJyaWRlOyBlbHNlIGRlZmF1bHRMYWJlbFwiPlxuICAgICAgICAgICAgPHNwYW4+e3sgdGhpcy5idXR0b25UZXh0T3ZlcnJpZGUgfCB0cmFuc2xhdGUgfX08L3NwYW4+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0TGFiZWw+XG4gICAgICAgICAgICA8c3Bhbj57eyB0aGlzLm5leHRTdGVwTGFiZWwgfCB0cmFuc2xhdGUgfX08L3NwYW4+IDwvbmctdGVtcGxhdGVcbiAgICAgICAgICA+PGkgY2xhc3M9XCJpY29uIGljb24tY2hldnJvbi1yaWdodFwiPjwvaT5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiAqbmdJZj1cInRoaXMuc2hvd1N0ZXBQcm9ncmVzc0JhclwiIGNsYXNzPVwicHJvZ3Jlc3MtYmFyXCI+XG4gICAgPGRpdiBjbGFzcz1cImluZGljYXRvci1wcm9ncmVzcyByZWFkeS17eyB0aGlzLnByb2dyZXNzUGVyY2VudGFnZSB9fVwiPjwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19