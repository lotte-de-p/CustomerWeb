var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { StepContainerDirective } from './step-container.directive';
import { Component, Input, ViewChild } from '@angular/core';
import { StepFlowUtil } from '../store/step-flow.util';
import { isEmpty } from 'lodash-es';
import { AbstractBaseComponent } from '@telenet/ng-lib-page';
import { StepFlowState } from '../store/step-flow.state';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import * as i0 from "@angular/core";
import * as i1 from "@ngxs/store";
import * as i2 from "@telenet/ng-lib-page";
import * as i3 from "@telenet/ng-lib-datalayer";
import * as i4 from "./step-container.directive";
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
        } }, dependencies: [i4.StepContainerDirective], encapsulation: 2 });
};
StepContainerComponent = __decorate([
    UntilDestroy()
], StepContainerComponent);
export { StepContainerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9zdGVwLWNvbnRhaW5lci9zdGVwLWNvbnRhaW5lci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9zcmMvbGliL3N0ZXAtY29udGFpbmVyL3N0ZXAtY29udGFpbmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFdkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNwQyxPQUFPLEVBQUUscUJBQXFCLEVBQTZCLE1BQU0sc0JBQXNCLENBQUM7QUFFeEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7OztBQU85RCxJQUFNLHNCQUFzQixHQUE1QixNQUFNLHNCQUF1QixTQUFRLHFCQUFxQjtJQVE1QztJQUNBO0lBQ0E7SUFUVix1QkFBdUIsQ0FBMEI7SUFDakQsWUFBWSxDQUFTO0lBQ3VCLGFBQWEsQ0FBeUI7SUFDM0YsWUFBWSxDQUFPO0lBQ25CLHFCQUFxQixDQUFTO0lBRTlCLFlBQ21CLEtBQVksRUFDWixhQUE0QixFQUM1QixnQkFBa0M7UUFFbkQsS0FBSyxFQUFFLENBQUM7UUFKUyxVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQ1osa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUdyRCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUks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VUFBVSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVPLG9CQUFvQjtRQUMxQixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekUsSUFBSSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFDeEMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoRCxDQUFDO1FBQ0QsT0FBTyxHQUFHLFdBQVcsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUMvQixDQUFDO2dGQTNHVSxzQkFBc0I7NkRBQXRCLHNCQUFzQjsyQkFHdEIsc0JBQXNCOzs7OztZQ3JCbkMsMkJBQThDOzs7QURrQmpDLHNCQUFzQjtJQUxsQyxZQUFZLEVBQUU7R0FLRixzQkFBc0IsQ0E0R2xDOztpRkE1R1ksc0JBQXNCO2NBSmxDLFNBQVM7MkJBQ0Usb0JBQW9CO2lHQUlyQix1QkFBdUI7a0JBQS9CLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQytDLGFBQWE7a0JBQWpFLFNBQVM7bUJBQUMsc0JBQXNCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztrRkFIeEMsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XG5pbXBvcnQgeyBTdGVwSW50ZXJmYWNlIH0gZnJvbSAnLi9zdGVwLmludGVyZmFjZSc7XG5pbXBvcnQgeyBTdGVwQ29udGFpbmVyRGlyZWN0aXZlIH0gZnJvbSAnLi9zdGVwLWNvbnRhaW5lci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFMYXllckF0dHJpYnV0ZXMsIERhdGFMYXllclNlcnZpY2UgfSBmcm9tICdAdGVsZW5ldC9uZy1saWItZGF0YWxheWVyJztcbmltcG9ydCB7IFN0ZXBGbG93VXRpbCB9IGZyb20gJy4uL3N0b3JlL3N0ZXAtZmxvdy51dGlsJztcbmltcG9ydCB7IFN0ZXAgfSBmcm9tICcuLi9zdGVwLm1vZGVsJztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICdsb2Rhc2gtZXMnO1xuaW1wb3J0IHsgQWJzdHJhY3RCYXNlQ29tcG9uZW50LCBMb2FkZXJEYXRhLCBMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnQHRlbGVuZXQvbmctbGliLXBhZ2UnO1xuaW1wb3J0IHsgU3RlcEZsb3dBbmFseXRpY3NDb25maWcgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3N0ZXAtZmxvdy1hbmFseXRpY3MtY29uZmlnLmludGVyZmFjZSc7XG5pbXBvcnQgeyBTdGVwRmxvd1N0YXRlIH0gZnJvbSAnLi4vc3RvcmUvc3RlcC1mbG93LnN0YXRlJztcbmltcG9ydCB7IFVudGlsRGVzdHJveSwgdW50aWxEZXN0cm95ZWQgfSBmcm9tICdAbmduZWF0L3VudGlsLWRlc3Ryb3knO1xuXG5AVW50aWxEZXN0cm95KClcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zdGVwLWNvbnRhaW5lcicsXG4gIHRlbXBsYXRlVXJsOiAnc3RlcC1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTdGVwQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgc3RlcEZsb3dBbmFseXRpY3NDb25maWc6IFN0ZXBGbG93QW5hbHl0aWNzQ29uZmlnO1xuICBASW5wdXQoKSBtZXNzYWdlR3JvdXA6IHN0cmluZztcbiAgQFZpZXdDaGlsZChTdGVwQ29udGFpbmVyRGlyZWN0aXZlLCB7IHN0YXRpYzogdHJ1ZSB9KSBzdGVwQ29udGFpbmVyOiBTdGVwQ29udGFpbmVyRGlyZWN0aXZlO1xuICBwcmV2aW91c1N0ZXA6IFN0ZXA7XG4gIHN0ZXBOYXZpZ2F0aW9uRW5kVGltZTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgc3RvcmU6IFN0b3JlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgbG9hZGVyU2VydmljZTogTG9hZGVyU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRhdGFMYXllclNlcnZpY2U6IERhdGFMYXllclNlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMub2JzKHRoaXMuc3RvcmUuc2VsZWN0KFN0ZXBGbG93U3RhdGUuY3VycmVudFN0ZXApKVxuICAgICAgLnBpcGUodW50aWxEZXN0cm95ZWQodGhpcykpXG4gICAgICAuc3Vic2NyaWJlKChjdXJyZW50U3RlcDogU3RlcCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgICAgICBpZiAoY3VycmVudFN0ZXApIHtcbiAgICAgICAgICB0aGlzLnN0ZXBOYXZpZ2F0aW9uRW5kVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgIHRoaXMucmVwb3J0U3RlcExvYWRUaW1lKGN1cnJlbnRTdGVwKTtcbiAgICAgICAgICBjb25zdCB2aWV3Q29udGFpbmVyUmVmID0gdGhpcy5zdGVwQ29udGFpbmVyLnZpZXdDb250YWluZXJSZWY7XG4gICAgICAgICAgdmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuICAgICAgICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGN1cnJlbnRTdGVwLnRlbXBsYXRlKTtcbiAgICAgICAgICAoY29tcG9uZW50UmVmLmluc3RhbmNlIGFzIFN0ZXBJbnRlcmZhY2UpLnN0b3JlID0gdGhpcy5zdG9yZTtcbiAgICAgICAgICAoY29tcG9uZW50UmVmLmluc3RhbmNlIGFzIFN0ZXBJbnRlcmZhY2UpLmN1cnJlbnRTdGVwID0gY3VycmVudFN0ZXA7XG4gICAgICAgICAgaWYgKHRoaXMubWVzc2FnZUdyb3VwKSB7XG4gICAgICAgICAgICAoY29tcG9uZW50UmVmLmluc3RhbmNlIGFzIFN0ZXBJbnRlcmZhY2UpLm1lc3NhZ2VHcm91cCA9IHRoaXMubWVzc2FnZUdyb3VwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghaXNFbXB0eSh0aGlzLnN0ZXBGbG93QW5hbHl0aWNzQ29uZmlnKSkge1xuICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlczogRGF0YUxheWVyQXR0cmlidXRlcyA9IHtcbiAgICAgICAgICAgICAgc3RlcElkOiB0aGlzLmdldEFuYWx5dGljc1N0ZXBOYW1lKCksXG4gICAgICAgICAgICAgIGludGVudDogdGhpcy5zdGVwRmxvd0FuYWx5dGljc0NvbmZpZy5hbmFseXRpY3NJbnRlbnQsXG4gICAgICAgICAgICAgIGZsb3dUeXBlOiB0aGlzLnN0ZXBGbG93QW5hbHl0aWNzQ29uZmlnLmFuYWx5dGljc0Zsb3dUeXBlLFxuICAgICAgICAgICAgICBjYXJ0OiB0aGlzLnN0ZXBGbG93QW5hbHl0aWNzQ29uZmlnLmNhcnQsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5kYXRhTGF5ZXJTZXJ2aWNlLmFkZFN0ZXBWaWV3RXZlbnQoYXR0cmlidXRlcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB0aGlzLmdldExhc3RBUElFeGVjdXRpb25UaW1lKCk7XG4gIH1cblxuICBwcml2YXRlIGdldExhc3RBUElFeGVjdXRpb25UaW1lKCk6IHZvaWQge1xuICAgIHRoaXMubG9hZGVyU2VydmljZS5sb2FkaW5nU3RhdHVzLnBpcGUodW50aWxEZXN0cm95ZWQodGhpcykpLnN1YnNjcmliZSgobG9hZGVyRGF0YTogTG9hZGVyRGF0YSkgPT4ge1xuICAgICAgaWYgKGxvYWRlckRhdGEuaXNBUElFeGVjdXRpb25JblByb2dyZXNzKSB7XG4gICAgICAgIHRoaXMuc3RlcE5hdmlnYXRpb25FbmRUaW1lID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3RlcE5hdmlnYXRpb25FbmRUaW1lID0gbG9hZGVyRGF0YS5kYXRhQ2FwdHVyZWRPbjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVwb3J0U3RlcExvYWRUaW1lKGN1cnJlbnRTdGVwOiBTdGVwKTogdm9pZCB7XG4gICAgY29uc3QgcmVwb3J0U3RlcExvYWRUaW1pbmcgPSB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KFN0ZXBGbG93U3RhdGUucmVwb3J0U3RlcExvYWRUaW1pbmcpO1xuICAgIGlmIChyZXBvcnRTdGVwTG9hZFRpbWluZykge1xuICAgICAgY29uc3Qgc3RlcHMgPSB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KFN0ZXBGbG93U3RhdGUuc3RlcHMpO1xuXG4gICAgICBjb25zdCBjdXJyZW50U3RlcEluZGV4ID0gU3RlcEZsb3dVdGlsLmdldFN0ZXBJbmRleChjdXJyZW50U3RlcCwgc3RlcHMpO1xuICAgICAgY29uc3QgcHJldmlvdXNTdGVwSW5kZXggPSB0aGlzLnByZXZpb3VzU3RlcCA/IFN0ZXBGbG93VXRpbC5nZXRTdGVwSW5kZXgodGhpcy5wcmV2aW91c1N0ZXAsIHN0ZXBzKSA6IDA7XG4gICAgICBpZiAoY3VycmVudFN0ZXBJbmRleCAtIHByZXZpb3VzU3RlcEluZGV4ID49IDApIHtcbiAgICAgICAgdGhpcy5kZWxheVN0ZXBMb2FkVGltZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5wcmV2aW91c1N0ZXAgPSBjdXJyZW50U3RlcDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGRlbGF5U3RlcExvYWRUaW1lKCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoXG4gICAgICAoc3RlcE5hdmlnYXRpb25FbmRUaW1lOiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKHN0ZXBOYXZpZ2F0aW9uRW5kVGltZSA9PT0gdGhpcy5zdGVwTmF2aWdhdGlvbkVuZFRpbWUgJiYgdGhpcy5zdGVwTmF2aWdhdGlvbkVuZFRpbWUgIT09IDApIHtcbiAgICAgICAgICB0aGlzLmZpcmVTdGVwTG9hZFRpbWVFdmVudCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGVsYXlTdGVwTG9hZFRpbWUoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIDEwLFxuICAgICAgdGhpcy5zdGVwTmF2aWdhdGlvbkVuZFRpbWVcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBmaXJlU3RlcExvYWRUaW1lRXZlbnQoKTogdm9pZCB7XG4gICAgY29uc3Qgc3RlcE5hdmlnYXRpb25TdGFydFRpbWUgPSB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KFN0ZXBGbG93U3RhdGUuc3RlcE5hdmlnYXRpb25TdGFydFRpbWUpO1xuXG4gICAgY29uc3QgYXR0cmlidXRlczogRGF0YUxheWVyQXR0cmlidXRlcyA9IHtcbiAgICAgIGl0ZW1OYW1lOlxuICAgICAgICBzdGVwTmF2aWdhdGlvblN0YXJ0VGltZSA+IDBcbiAgICAgICAgICA/ICgodGhpcy5zdGVwTmF2aWdhdGlvbkVuZFRpbWUgLSBzdGVwTmF2aWdhdGlvblN0YXJ0VGltZSkgLyAxMDAwKS50b0ZpeGVkKDIpLnRvU3RyaW5nKClcbiAgICAgICAgICA6IChcbiAgICAgICAgICAgICAgKHRoaXMuc3RlcE5hdmlnYXRpb25FbmRUaW1lIC1cbiAgICAgICAgICAgICAgICAod2luZG93LnBlcmZvcm1hbmNlLmdldEVudHJpZXMoKVswXSBhcyBQZXJmb3JtYW5jZU5hdmlnYXRpb25UaW1pbmcpLmZldGNoU3RhcnQpIC9cbiAgICAgICAgICAgICAgMTAwMFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAudG9GaXhlZCgyKVxuICAgICAgICAgICAgICAudG9TdHJpbmcoKSxcbiAgICB9O1xuICAgIHRoaXMuZGF0YUxheWVyU2VydmljZS5hZGRTdGVwTG9hZFRpbWVFdmVudChhdHRyaWJ1dGVzKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QW5hbHl0aWNzU3RlcE5hbWUoKTogc3RyaW5nIHtcbiAgICBjb25zdCBjdXJyZW50U3RlcCA9IHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoU3RlcEZsb3dTdGF0ZS5jdXJyZW50U3RlcCk7XG4gICAgaWYgKGN1cnJlbnRTdGVwPy5hbmFseXRpY3NPcHRpb25zPy5uYW1lKSB7XG4gICAgICByZXR1cm4gYCR7Y3VycmVudFN0ZXAuYW5hbHl0aWNzT3B0aW9ucy5uYW1lfWA7XG4gICAgfVxuICAgIHJldHVybiBgJHtjdXJyZW50U3RlcD8ua2V5fWA7XG4gIH1cbn1cbiIsIjxuZy1jb250YWluZXIgYXBwU3RlcENvbnRhaW5lcj48L25nLWNvbnRhaW5lcj5cbiJdfQ==