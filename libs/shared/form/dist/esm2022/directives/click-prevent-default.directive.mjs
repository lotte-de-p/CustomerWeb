import { Directive, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
export class ClickPreventDefaultDirective {
    onClick(event) {
        event.preventDefault();
    }
    static ɵfac = function ClickPreventDefaultDirective_Factory(t) { return new (t || ClickPreventDefaultDirective)(); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ClickPreventDefaultDirective, selectors: [["", "appClickPreventDefault", ""]], hostBindings: function ClickPreventDefaultDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function ClickPreventDefaultDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
        } } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ClickPreventDefaultDirective, [{
        type: Directive,
        args: [{
                selector: '[appClickPreventDefault]',
            }]
    }], null, { onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2stcHJldmVudC1kZWZhdWx0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXJlY3RpdmVzL2NsaWNrLXByZXZlbnQtZGVmYXVsdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBS3hELE1BQU0sT0FBTyw0QkFBNEI7SUFFaEMsT0FBTyxDQUFDLEtBQWlCO1FBQzlCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN6QixDQUFDO3NGQUpVLDRCQUE0Qjs2REFBNUIsNEJBQTRCO21IQUE1QixtQkFBZTs7O2lGQUFmLDRCQUE0QjtjQUh4QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjthQUNyQztnQkFHUSxPQUFPO2tCQURiLFlBQVk7bUJBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FwcENsaWNrUHJldmVudERlZmF1bHRdJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2xpY2tQcmV2ZW50RGVmYXVsdERpcmVjdGl2ZSB7XG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59XG4iXX0=