import { Injectable } from '@angular/core';
import { instanceOfStepDecision } from '../interfaces/step-decision.interface';
import { StepBuilder } from '../step.builder';
import { SetCurrentDecisionOnStepFlowConfig } from '../store/step-flow.actions';
import * as i0 from "@angular/core";
import * as i1 from "./template.factory";
export class StepFactory {
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
    static ɵfac = function StepFactory_Factory(t) { return new (t || StepFactory)(i0.ɵɵinject(i1.TemplateFactory)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StepFactory, factory: StepFactory.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StepFactory, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.TemplateFactory }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9mYWN0b3JpZXMvc3RlcC5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFnQixNQUFNLHVDQUF1QyxDQUFDO0FBQzdGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7O0FBTWhGLE1BQU0sT0FBTyxXQUFXO0lBQ087SUFBN0IsWUFBNkIsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQUcsQ0FBQztJQUVqRSxVQUFVLENBQUMsS0FBWSxFQUFFLGNBQThCO1FBQ3JELElBQUksS0FBSyxHQUFXLEVBQUUsQ0FBQztRQUN2QixjQUFjLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQXFDLEVBQUUsRUFBRTtZQUNyRSxJQUFJLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7Z0JBQ3ZDLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLFVBQTBCLENBQUMsQ0FBQyxDQUFDO1lBQzNFLENBQUM7aUJBQU0sQ0FBQztnQkFDTixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBd0IsQ0FBQyxDQUFDLENBQUM7WUFDeEQsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsVUFBVSxDQUFDLFVBQXNCO1FBQy9CLE1BQU0sV0FBVyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQzthQUNwRCxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO2FBQzNDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQzthQUNqRCxhQUFhLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQzthQUNuQyxTQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ2hFLElBQUksVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzVCLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMvQixDQUFDO1FBQ0QsT0FBTyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFZLEVBQUUsWUFBMEI7UUFDakQsTUFBTSxXQUFXLEdBQUcsWUFBWSxDQUFDLGdCQUFnQixDQUMvQyxLQUFLLEVBQ0wsWUFBWSxDQUFDLGVBQWUsRUFDNUIsWUFBWSxDQUFDLGVBQWUsQ0FDN0IsQ0FBQztRQUNGLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxrQ0FBa0MsQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNsRixJQUFJLFlBQVksQ0FBQyxlQUFlLEtBQUssV0FBVyxJQUFJLE9BQU8sV0FBVyxDQUFDLGNBQWMsS0FBSyxVQUFVLEVBQUUsQ0FBQztZQUNyRyxXQUFXLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BDLENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7cUVBdkNVLFdBQVc7Z0VBQVgsV0FBVyxXQUFYLFdBQVcsbUJBRlYsTUFBTTs7aUZBRVAsV0FBVztjQUh2QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcbmltcG9ydCB7IFN0ZXBGbG93Q29uZmlnIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zdGVwLWZsb3ctY29uZmlnLmludGVyZmFjZSc7XG5pbXBvcnQgeyBTdGVwIH0gZnJvbSAnLi4vc3RlcC5tb2RlbCc7XG5pbXBvcnQgeyBTdGVwQ29uZmlnIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zdGVwLWNvbmZpZy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgaW5zdGFuY2VPZlN0ZXBEZWNpc2lvbiwgU3RlcERlY2lzaW9uIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zdGVwLWRlY2lzaW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBTdGVwQnVpbGRlciB9IGZyb20gJy4uL3N0ZXAuYnVpbGRlcic7XG5pbXBvcnQgeyBTZXRDdXJyZW50RGVjaXNpb25PblN0ZXBGbG93Q29uZmlnIH0gZnJvbSAnLi4vc3RvcmUvc3RlcC1mbG93LmFjdGlvbnMnO1xuaW1wb3J0IHsgVGVtcGxhdGVGYWN0b3J5IH0gZnJvbSAnLi90ZW1wbGF0ZS5mYWN0b3J5JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFN0ZXBGYWN0b3J5IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSB0ZW1wbGF0ZUZhY3Rvcnk6IFRlbXBsYXRlRmFjdG9yeSkge31cblxuICBjcmVhdGVGbG93KHN0b3JlOiBTdG9yZSwgc3RlcEZsb3dDb25maWc6IFN0ZXBGbG93Q29uZmlnKTogU3RlcFtdIHtcbiAgICBsZXQgc3RlcHM6IFN0ZXBbXSA9IFtdO1xuICAgIHN0ZXBGbG93Q29uZmlnLnN0ZXBzLmZvckVhY2goKHN0ZXBDb25maWc6IFN0ZXBDb25maWcgfCBTdGVwRGVjaXNpb24pID0+IHtcbiAgICAgIGlmIChpbnN0YW5jZU9mU3RlcERlY2lzaW9uKHN0ZXBDb25maWcpKSB7XG4gICAgICAgIHN0ZXBzID0gc3RlcHMuY29uY2F0KHRoaXMuZGVjaWRlRmxvdyhzdG9yZSwgc3RlcENvbmZpZyBhcyBTdGVwRGVjaXNpb24pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0ZXBzLnB1c2godGhpcy5jcmVhdGVTdGVwKHN0ZXBDb25maWcgYXMgU3RlcENvbmZpZykpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzdGVwcztcbiAgfVxuXG4gIGNyZWF0ZVN0ZXAoc3RlcENvbmZpZzogU3RlcENvbmZpZykge1xuICAgIGNvbnN0IHN0ZXBCdWlsZGVyID0gU3RlcEJ1aWxkZXIuYnVpbGRlcihzdGVwQ29uZmlnLmtleSlcbiAgICAgIC53aXRoTGF5b3V0T3B0aW9ucyhzdGVwQ29uZmlnLmxheW91dE9wdGlvbnMpXG4gICAgICAud2l0aEFuYWx5dGljc09wdGlvbnMoc3RlcENvbmZpZy5hbmFseXRpY3NPcHRpb25zKVxuICAgICAgLndpdGhDb21wb25lbnQoc3RlcENvbmZpZy5jb21wb25lbnQpXG4gICAgICAud2l0aEltYWdlKHN0ZXBDb25maWcuaW1hZ2VQYXRoKTtcbiAgICB0aGlzLnRlbXBsYXRlRmFjdG9yeS5kZXRlcm1pbmVUZW1wbGF0ZShzdGVwQnVpbGRlciwgc3RlcENvbmZpZyk7XG4gICAgaWYgKHN0ZXBDb25maWcuaXNGaW5hbFN0YXRlKSB7XG4gICAgICBzdGVwQnVpbGRlci53aXRoRmluYWxTdGF0ZSgpO1xuICAgIH1cbiAgICByZXR1cm4gc3RlcEJ1aWxkZXIuYnVpbGQoKTtcbiAgfVxuXG4gIGRlY2lkZUZsb3coc3RvcmU6IFN0b3JlLCBzdGVwRGVjaXNpb246IFN0ZXBEZWNpc2lvbik6IFN0ZXBbXSB7XG4gICAgY29uc3QgZGVjaWRlZEZsb3cgPSBzdGVwRGVjaXNpb24uZGVjaXNpb25GdW5jdGlvbihcbiAgICAgIHN0b3JlLFxuICAgICAgc3RlcERlY2lzaW9uLnBvc3NpYmxlUmVzdWx0cyxcbiAgICAgIHN0ZXBEZWNpc2lvbi5jdXJyZW50RGVjaXNpb25cbiAgICApO1xuICAgIHN0b3JlLmRpc3BhdGNoKG5ldyBTZXRDdXJyZW50RGVjaXNpb25PblN0ZXBGbG93Q29uZmlnKHN0ZXBEZWNpc2lvbiwgZGVjaWRlZEZsb3cpKTtcbiAgICBpZiAoc3RlcERlY2lzaW9uLmN1cnJlbnREZWNpc2lvbiAhPT0gZGVjaWRlZEZsb3cgJiYgdHlwZW9mIGRlY2lkZWRGbG93LmluaXRGbG93QWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBkZWNpZGVkRmxvdy5pbml0Rmxvd0FjdGlvbihzdG9yZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNyZWF0ZUZsb3coc3RvcmUsIGRlY2lkZWRGbG93KTtcbiAgfVxufVxuIl19