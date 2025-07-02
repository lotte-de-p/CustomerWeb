import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class ScrollFocusInvalidInputDirective {
    el;
    submitButtonClassName;
    constructor(el) {
        this.el = el;
    }
    onFormSubmit() {
        this.focusElement(this.el.nativeElement);
    }
    onClick(targetElement) {
        if (targetElement) {
            this.focusElement(document);
        }
    }
    focusElement(element) {
        const invalidInput = element.querySelector('.form-control.ng-invalid.ng-touched')
            ? element.querySelector('.form-control.ng-invalid.ng-touched')
            : element.querySelector('.ng-pristine.ng-touched.error:not(form)');
        if (invalidInput) {
            invalidInput.focus();
            window.scroll({
                top: this.getTopOffset(invalidInput),
                left: 0,
                behavior: 'smooth',
            });
        }
    }
    getTopOffset(controlEl) {
        const labelOffset = 50;
        return controlEl.getBoundingClientRect().top + window.scrollY - labelOffset;
    }
    static ɵfac = function ScrollFocusInvalidInputDirective_Factory(t) { return new (t || ScrollFocusInvalidInputDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ScrollFocusInvalidInputDirective, selectors: [["", "appScrollFocusInvalidInput", ""]], hostBindings: function ScrollFocusInvalidInputDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("submit", function ScrollFocusInvalidInputDirective_submit_HostBindingHandler() { return ctx.onFormSubmit(); })("click", function ScrollFocusInvalidInputDirective_click_HostBindingHandler($event) { return ctx.onClick($event.target); });
        } }, inputs: { submitButtonClassName: "submitButtonClassName" } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ScrollFocusInvalidInputDirective, [{
        type: Directive,
        args: [{
                selector: '[appScrollFocusInvalidInput]',
            }]
    }], () => [{ type: i0.ElementRef }], { submitButtonClassName: [{
            type: Input
        }], onFormSubmit: [{
            type: HostListener,
            args: ['submit']
        }], onClick: [{
            type: HostListener,
            args: ['click', ['$event.target']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLWZvY3VzLWludmFsaWQtaW5wdXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2RpcmVjdGl2ZXMvc2Nyb2xsLWZvY3VzLWludmFsaWQtaW5wdXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0UsTUFBTSxPQUFPLGdDQUFnQztJQUdkO0lBRnBCLHFCQUFxQixDQUFTO0lBRXZDLFlBQTZCLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO0lBQUcsQ0FBQztJQUcvQyxZQUFZO1FBQ1YsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFHRCxPQUFPLENBQUMsYUFBMEI7UUFDaEMsSUFBSSxhQUFhLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlCLENBQUM7SUFDSCxDQUFDO0lBRU8sWUFBWSxDQUFDLE9BQStCO1FBQ2xELE1BQU0sWUFBWSxHQUE0QixPQUFPLENBQUMsYUFBYSxDQUFDLHFDQUFxQyxDQUFDO1lBQ3hHLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLHFDQUFxQyxDQUFDO1lBQzlELENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLHlDQUF5QyxDQUFDLENBQUM7UUFFckUsSUFBSSxZQUFZLEVBQUUsQ0FBQztZQUNqQixZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFckIsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFDWixHQUFHLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUM7Z0JBQ3BDLElBQUksRUFBRSxDQUFDO2dCQUNQLFFBQVEsRUFBRSxRQUFRO2FBQ25CLENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDO0lBRU8sWUFBWSxDQUFDLFNBQXNCO1FBQ3pDLE1BQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN2QixPQUFPLFNBQVMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQztJQUM5RSxDQUFDOzBGQXBDVSxnQ0FBZ0M7NkRBQWhDLGdDQUFnQzttSEFBaEMsa0JBQWMsa0dBQWQsMEJBQXNCOzs7aUZBQXRCLGdDQUFnQztjQUg1QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjthQUN6QzsyQ0FFVSxxQkFBcUI7a0JBQTdCLEtBQUs7WUFLTixZQUFZO2tCQURYLFlBQVk7bUJBQUMsUUFBUTtZQU10QixPQUFPO2tCQUROLFlBQVk7bUJBQUMsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thcHBTY3JvbGxGb2N1c0ludmFsaWRJbnB1dF0nLFxufSlcbmV4cG9ydCBjbGFzcyBTY3JvbGxGb2N1c0ludmFsaWRJbnB1dERpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIHN1Ym1pdEJ1dHRvbkNsYXNzTmFtZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgQEhvc3RMaXN0ZW5lcignc3VibWl0JylcbiAgb25Gb3JtU3VibWl0KCkge1xuICAgIHRoaXMuZm9jdXNFbGVtZW50KHRoaXMuZWwubmF0aXZlRWxlbWVudCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50LnRhcmdldCddKVxuICBvbkNsaWNrKHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgaWYgKHRhcmdldEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZm9jdXNFbGVtZW50KGRvY3VtZW50KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZvY3VzRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCB8IERvY3VtZW50KSB7XG4gICAgY29uc3QgaW52YWxpZElucHV0OiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udHJvbC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQnKVxuICAgICAgPyBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRyb2wubmctaW52YWxpZC5uZy10b3VjaGVkJylcbiAgICAgIDogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubmctcHJpc3RpbmUubmctdG91Y2hlZC5lcnJvcjpub3QoZm9ybSknKTtcblxuICAgIGlmIChpbnZhbGlkSW5wdXQpIHtcbiAgICAgIGludmFsaWRJbnB1dC5mb2N1cygpO1xuXG4gICAgICB3aW5kb3cuc2Nyb2xsKHtcbiAgICAgICAgdG9wOiB0aGlzLmdldFRvcE9mZnNldChpbnZhbGlkSW5wdXQpLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFRvcE9mZnNldChjb250cm9sRWw6IEhUTUxFbGVtZW50KTogbnVtYmVyIHtcbiAgICBjb25zdCBsYWJlbE9mZnNldCA9IDUwO1xuICAgIHJldHVybiBjb250cm9sRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgd2luZG93LnNjcm9sbFkgLSBsYWJlbE9mZnNldDtcbiAgfVxufVxuIl19