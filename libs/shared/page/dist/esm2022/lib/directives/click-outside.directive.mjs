import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import * as i0 from "@angular/core";
export class ClickOutsideDirective {
    elementRef;
    appClickOutside = new EventEmitter();
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    onClick(event, targetElement) {
        if (!targetElement) {
            return;
        }
        const clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.appClickOutside.emit(event);
        }
    }
    static ɵfac = function ClickOutsideDirective_Factory(t) { return new (t || ClickOutsideDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ClickOutsideDirective, selectors: [["", "appClickOutside", ""]], hostBindings: function ClickOutsideDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function ClickOutsideDirective_click_HostBindingHandler($event) { return ctx.onClick($event, $event.target); }, false, i0.ɵɵresolveDocument);
        } }, outputs: { appClickOutside: "appClickOutside" }, standalone: true });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ClickOutsideDirective, [{
        type: Directive,
        args: [{
                selector: '[appClickOutside]',
                standalone: true,
            }]
    }], () => [{ type: i0.ElementRef }], { appClickOutside: [{
            type: Output
        }], onClick: [{
            type: HostListener,
            args: ['document:click', ['$event', '$event.target']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2stb3V0c2lkZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2RpcmVjdGl2ZXMvY2xpY2stb3V0c2lkZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNMUYsTUFBTSxPQUFPLHFCQUFxQjtJQUlIO0lBRnRCLGVBQWUsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO0lBRXhELFlBQTZCLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFBRyxDQUFDO0lBR2hELE9BQU8sQ0FBQyxLQUFpQixFQUFFLGFBQTJCO1FBQzNELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNuQixPQUFPO1FBQ1QsQ0FBQztRQUVELE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsQ0FBQztJQUNILENBQUM7K0VBaEJVLHFCQUFxQjs2REFBckIscUJBQXFCOzRHQUFyQixrQ0FDUjs7O2lGQURRLHFCQUFxQjtjQUpqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsVUFBVSxFQUFFLElBQUk7YUFDakI7MkNBR1EsZUFBZTtrQkFEckIsTUFBTTtZQU1BLE9BQU87a0JBRGIsWUFBWTttQkFBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsRUFBRSxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FwcENsaWNrT3V0c2lkZV0nLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBDbGlja091dHNpZGVEaXJlY3RpdmUge1xuICBAT3V0cHV0KClcbiAgcHVibGljIGFwcENsaWNrT3V0c2lkZSA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCcsICckZXZlbnQudGFyZ2V0J10pXG4gIHB1YmxpYyBvbkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50LCB0YXJnZXRFbGVtZW50PzogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRhcmdldEVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjbGlja2VkSW5zaWRlID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnModGFyZ2V0RWxlbWVudCk7XG4gICAgaWYgKCFjbGlja2VkSW5zaWRlKSB7XG4gICAgICB0aGlzLmFwcENsaWNrT3V0c2lkZS5lbWl0KGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==