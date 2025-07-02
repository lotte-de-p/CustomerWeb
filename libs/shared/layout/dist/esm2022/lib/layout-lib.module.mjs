import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SummaryHeaderComponent } from './summary/summary-header/summary-header.component';
import { SummaryContentRowComponent } from './summary/summary-content-row/summary-content-row.component';
import { PricePipe, TgFormsModule } from '@telenet/ng-lib-form';
import * as i0 from "@angular/core";
export class LayoutLibModule {
    static ɵfac = function LayoutLibModule_Factory(t) { return new (t || LayoutLibModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: LayoutLibModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, TranslateModule, TgFormsModule] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayoutLibModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, TranslateModule, TgFormsModule, PricePipe],
                declarations: [SummaryHeaderComponent, SummaryContentRowComponent],
                exports: [SummaryHeaderComponent, SummaryContentRowComponent],
                providers: [],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LayoutLibModule, { declarations: [SummaryHeaderComponent, SummaryContentRowComponent], imports: [CommonModule, TranslateModule, TgFormsModule, PricePipe], exports: [SummaryHeaderComponent, SummaryContentRowComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2xheW91dC1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUN6RyxPQUFPLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQVFoRSxNQUFNLE9BQU8sZUFBZTt5RUFBZixlQUFlOzREQUFmLGVBQWU7Z0VBTGhCLFlBQVksRUFBRSxlQUFlLEVBQUUsYUFBYTs7aUZBSzNDLGVBQWU7Y0FOM0IsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLFNBQVMsQ0FBQztnQkFDbEUsWUFBWSxFQUFFLENBQUMsc0JBQXNCLEVBQUUsMEJBQTBCLENBQUM7Z0JBQ2xFLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixFQUFFLDBCQUEwQixDQUFDO2dCQUM3RCxTQUFTLEVBQUUsRUFBRTthQUNkOzt3RkFDWSxlQUFlLG1CQUpYLHNCQUFzQixFQUFFLDBCQUEwQixhQUR2RCxZQUFZLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxTQUFTLGFBRXZELHNCQUFzQixFQUFFLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBTdW1tYXJ5SGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zdW1tYXJ5L3N1bW1hcnktaGVhZGVyL3N1bW1hcnktaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdW1tYXJ5Q29udGVudFJvd0NvbXBvbmVudCB9IGZyb20gJy4vc3VtbWFyeS9zdW1tYXJ5LWNvbnRlbnQtcm93L3N1bW1hcnktY29udGVudC1yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IFByaWNlUGlwZSwgVGdGb3Jtc01vZHVsZSB9IGZyb20gJ0B0ZWxlbmV0L25nLWxpYi1mb3JtJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgVHJhbnNsYXRlTW9kdWxlLCBUZ0Zvcm1zTW9kdWxlLCBQcmljZVBpcGVdLFxuICBkZWNsYXJhdGlvbnM6IFtTdW1tYXJ5SGVhZGVyQ29tcG9uZW50LCBTdW1tYXJ5Q29udGVudFJvd0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTdW1tYXJ5SGVhZGVyQ29tcG9uZW50LCBTdW1tYXJ5Q29udGVudFJvd0NvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW10sXG59KVxuZXhwb3J0IGNsYXNzIExheW91dExpYk1vZHVsZSB7fVxuIl19