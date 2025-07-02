import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader.component';
import { TranslateModule } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export class LoaderModule {
    static ɵfac = function LoaderModule_Factory(t) { return new (t || LoaderModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: LoaderModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, TranslateModule] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoaderModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, TranslateModule],
                declarations: [LoaderComponent],
                exports: [LoaderComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LoaderModule, { declarations: [LoaderComponent], imports: [CommonModule, TranslateModule], exports: [LoaderComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvcGFnZS9sb2FkZXIvbG9hZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQU90RCxNQUFNLE9BQU8sWUFBWTtzRUFBWixZQUFZOzREQUFaLFlBQVk7Z0VBSmIsWUFBWSxFQUFFLGVBQWU7O2lGQUk1QixZQUFZO2NBTHhCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDO2dCQUN4QyxZQUFZLEVBQUUsQ0FBQyxlQUFlLENBQUM7Z0JBQy9CLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQzthQUMzQjs7d0ZBQ1ksWUFBWSxtQkFIUixlQUFlLGFBRHBCLFlBQVksRUFBRSxlQUFlLGFBRTdCLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IExvYWRlckNvbXBvbmVudCB9IGZyb20gJy4vbG9hZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgVHJhbnNsYXRlTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTG9hZGVyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0xvYWRlckNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIExvYWRlck1vZHVsZSB7fVxuIl19