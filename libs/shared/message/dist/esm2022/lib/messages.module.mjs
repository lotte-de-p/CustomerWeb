import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MessageComponent } from './message/message.component';
import { MessageFlowComponent } from './message/message-flow.component';
import * as i0 from "@angular/core";
export class MessagesModule {
    static ɵfac = function MessagesModule_Factory(t) { return new (t || MessagesModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: MessagesModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [TranslateService], imports: [CommonModule, TranslateModule] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MessagesModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, TranslateModule],
                declarations: [MessageComponent, MessageFlowComponent],
                exports: [MessageComponent, MessageFlowComponent],
                providers: [TranslateService],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MessagesModule, { declarations: [MessageComponent, MessageFlowComponent], imports: [CommonModule, TranslateModule], exports: [MessageComponent, MessageFlowComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9tZXNzYWdlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOztBQVF4RSxNQUFNLE9BQU8sY0FBYzt3RUFBZCxjQUFjOzREQUFkLGNBQWM7aUVBRmQsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUhuQixZQUFZLEVBQUUsZUFBZTs7aUZBSzVCLGNBQWM7Y0FOMUIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUM7Z0JBQ3hDLFlBQVksRUFBRSxDQUFDLGdCQUFnQixFQUFFLG9CQUFvQixDQUFDO2dCQUN0RCxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxvQkFBb0IsQ0FBQztnQkFDakQsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7YUFDOUI7O3dGQUNZLGNBQWMsbUJBSlYsZ0JBQWdCLEVBQUUsb0JBQW9CLGFBRDNDLFlBQVksRUFBRSxlQUFlLGFBRTdCLGdCQUFnQixFQUFFLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlLCBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IE1lc3NhZ2VGbG93Q29tcG9uZW50IH0gZnJvbSAnLi9tZXNzYWdlL21lc3NhZ2UtZmxvdy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBUcmFuc2xhdGVNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtNZXNzYWdlQ29tcG9uZW50LCBNZXNzYWdlRmxvd0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtNZXNzYWdlQ29tcG9uZW50LCBNZXNzYWdlRmxvd0NvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW1RyYW5zbGF0ZVNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlc01vZHVsZSB7fVxuIl19