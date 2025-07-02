import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class AbstractBaseComponent {
    unsubscribe$ = new Subject();
    onDestroy() {
        // onDestroy
    }
    ngOnDestroy() {
        this.unsubscribe$.complete();
        this.onDestroy();
    }
    obs(obs) {
        return obs.pipe(takeUntil(this.unsubscribe$));
    }
    static ɵfac = function AbstractBaseComponent_Factory(t) { return new (t || AbstractBaseComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AbstractBaseComponent, selectors: [["app-abstract-base"]], decls: 0, vars: 0, template: function AbstractBaseComponent_Template(rf, ctx) { }, encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AbstractBaseComponent, [{
        type: Component,
        args: [{
                selector: 'app-abstract-base',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AbstractBaseComponent, { className: "AbstractBaseComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL3BhZ2UvY29tbW9uL2Fic3RyYWN0LWJhc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBUTNDLE1BQU0sT0FBZ0IscUJBQXFCO0lBQy9CLFlBQVksR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBRXZDLFNBQVM7UUFDUCxZQUFZO0lBQ2QsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRTdCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBSUQsR0FBRyxDQUFDLEdBQXlCO1FBQzNCLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQzsrRUFqQm1CLHFCQUFxQjs2REFBckIscUJBQXFCOztpRkFBckIscUJBQXFCO2NBTDFDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUUsRUFBRTtnQkFDWixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7a0ZBQ3FCLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG50eXBlIE9ic1R5cGVzID0gdW5rbm93biB8IHN0cmluZyB8IGJvb2xlYW4gfCBvYmplY3Q7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtYWJzdHJhY3QtYmFzZScsXG4gIHRlbXBsYXRlOiAnJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0QmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByb3RlY3RlZCB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdCgpO1xuXG4gIG9uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAvLyBvbkRlc3Ryb3lcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG5cbiAgICB0aGlzLm9uRGVzdHJveSgpO1xuICB9XG5cbiAgb2JzPFQ+KG9iczogT2JzZXJ2YWJsZTxUPik6IE9ic2VydmFibGU8VD47XG4gIG9icyhvYnM6IE9ic2VydmFibGU8T2JzVHlwZXM+KTogT2JzZXJ2YWJsZTxPYnNUeXBlcz47XG4gIG9icyhvYnM6IE9ic2VydmFibGU8T2JzVHlwZXM+KTogT2JzZXJ2YWJsZTxPYnNUeXBlcz4ge1xuICAgIHJldHVybiBvYnMucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKTtcbiAgfVxufVxuIl19