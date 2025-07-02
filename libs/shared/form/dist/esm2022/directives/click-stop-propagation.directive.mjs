import { Directive, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
export class ClickStopPropagationDirective {
    onClick(event) {
        event.stopPropagation();
    }
    static ɵfac = function ClickStopPropagationDirective_Factory(t) { return new (t || ClickStopPropagationDirective)(); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ClickStopPropagationDirective, selectors: [["", "appClickStopPropagation", ""]], hostBindings: function ClickStopPropagationDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function ClickStopPropagationDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
        } } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ClickStopPropagationDirective, [{
        type: Directive,
        args: [{
                selector: '[appClickStopPropagation]',
            }]
    }], null, { onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2stc3RvcC1wcm9wYWdhdGlvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGlyZWN0aXZlcy9jbGljay1zdG9wLXByb3BhZ2F0aW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLeEQsTUFBTSxPQUFPLDZCQUE2QjtJQUVqQyxPQUFPLENBQUMsS0FBWTtRQUN6QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDMUIsQ0FBQzt1RkFKVSw2QkFBNkI7NkRBQTdCLDZCQUE2QjtvSEFBN0IsbUJBQWU7OztpRkFBZiw2QkFBNkI7Y0FIekMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7YUFDdEM7Z0JBR1EsT0FBTztrQkFEYixZQUFZO21CQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thcHBDbGlja1N0b3BQcm9wYWdhdGlvbl0nLFxufSlcbmV4cG9ydCBjbGFzcyBDbGlja1N0b3BQcm9wYWdhdGlvbkRpcmVjdGl2ZSB7XG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uQ2xpY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbn1cbiJdfQ==