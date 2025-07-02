import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepContainerDirective, StepHostDirective, StepContainerComponent } from './step-container';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import * as i0 from "@angular/core";
export class StepFlowLibModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC1mbG93LWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL3N0ZXAtZmxvdy1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxpQkFBaUIsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3JHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7QUFRbkYsTUFBTSxPQUFPLGlCQUFpQjsyRUFBakIsaUJBQWlCOzREQUFqQixpQkFBaUI7aUVBRmpCLENBQUMsZ0JBQWdCLENBQUMsWUFIbkIsWUFBWSxFQUFFLGVBQWU7O2lGQUs1QixpQkFBaUI7Y0FON0IsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUM7Z0JBQ3hDLFlBQVksRUFBRSxDQUFDLHNCQUFzQixFQUFFLGlCQUFpQixFQUFFLHNCQUFzQixFQUFFLHNCQUFzQixDQUFDO2dCQUN6RyxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSxpQkFBaUIsRUFBRSxzQkFBc0IsQ0FBQztnQkFDcEcsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7YUFDOUI7O3dGQUNZLGlCQUFpQixtQkFKYixzQkFBc0IsRUFBRSxpQkFBaUIsRUFBRSxzQkFBc0IsRUFBRSxzQkFBc0IsYUFEOUYsWUFBWSxFQUFFLGVBQWUsYUFFN0Isc0JBQXNCLEVBQUUsc0JBQXNCLEVBQUUsaUJBQWlCLEVBQUUsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTdGVwQ29udGFpbmVyRGlyZWN0aXZlLCBTdGVwSG9zdERpcmVjdGl2ZSwgU3RlcENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vc3RlcC1jb250YWluZXInO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSwgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uQmFyQ29tcG9uZW50IH0gZnJvbSAnLi9uYXZpZ2F0aW9uLWJhci9uYXZpZ2F0aW9uLWJhci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBUcmFuc2xhdGVNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtTdGVwQ29udGFpbmVyRGlyZWN0aXZlLCBTdGVwSG9zdERpcmVjdGl2ZSwgU3RlcENvbnRhaW5lckNvbXBvbmVudCwgTmF2aWdhdGlvbkJhckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTdGVwQ29udGFpbmVyQ29tcG9uZW50LCBTdGVwQ29udGFpbmVyRGlyZWN0aXZlLCBTdGVwSG9zdERpcmVjdGl2ZSwgTmF2aWdhdGlvbkJhckNvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW1RyYW5zbGF0ZVNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBTdGVwRmxvd0xpYk1vZHVsZSB7fVxuIl19