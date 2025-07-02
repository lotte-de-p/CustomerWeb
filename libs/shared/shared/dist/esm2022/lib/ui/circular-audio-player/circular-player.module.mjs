/**
 * This is ported because there is no support for angular 15
 * https://github.com/mgechev/ngx-circular-player
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircularPlayerComponent } from './circular-player.component';
import * as i0 from "@angular/core";
export class CircularPlayerModule {
    static ɵfac = function CircularPlayerModule_Factory(t) { return new (t || CircularPlayerModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CircularPlayerModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CircularPlayerModule, [{
        type: NgModule,
        args: [{
                declarations: [CircularPlayerComponent],
                imports: [CommonModule],
                exports: [CircularPlayerComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CircularPlayerModule, { declarations: [CircularPlayerComponent], imports: [CommonModule], exports: [CircularPlayerComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY3VsYXItcGxheWVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvdWkvY2lyY3VsYXItYXVkaW8tcGxheWVyL2NpcmN1bGFyLXBsYXllci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHO0FBQ0gsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7O0FBT3RFLE1BQU0sT0FBTyxvQkFBb0I7OEVBQXBCLG9CQUFvQjs0REFBcEIsb0JBQW9CO2dFQUhyQixZQUFZOztpRkFHWCxvQkFBb0I7Y0FMaEMsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDO2dCQUN2QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLHVCQUF1QixDQUFDO2FBQ25DOzt3RkFDWSxvQkFBb0IsbUJBSmhCLHVCQUF1QixhQUM1QixZQUFZLGFBQ1osdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGlzIHBvcnRlZCBiZWNhdXNlIHRoZXJlIGlzIG5vIHN1cHBvcnQgZm9yIGFuZ3VsYXIgMTVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tZ2VjaGV2L25neC1jaXJjdWxhci1wbGF5ZXJcbiAqL1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDaXJjdWxhclBsYXllckNvbXBvbmVudCB9IGZyb20gJy4vY2lyY3VsYXItcGxheWVyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0NpcmN1bGFyUGxheWVyQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtDaXJjdWxhclBsYXllckNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIENpcmN1bGFyUGxheWVyTW9kdWxlIHt9XG4iXX0=