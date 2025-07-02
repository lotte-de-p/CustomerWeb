import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../errors";
export class ScrollToErrorDirective {
    elmRef;
    formErrorService;
    formSubscription;
    constructor(elmRef, formErrorService) {
        this.elmRef = elmRef;
        this.formErrorService = formErrorService;
        this.formSubscription = this.formErrorService.submit$.subscribe(() => {
            this.scrollToFirstInvalidControl();
        });
    }
    scrollToFirstInvalidControl() {
        const firstInvalidControl = this.elmRef.nativeElement.querySelector('form input.ng-invalid, form input.ng-invalid-custom');
        if (firstInvalidControl) {
            window.scroll({
                top: ScrollToErrorDirective.getTopOffset(firstInvalidControl),
                left: 0,
                behavior: 'smooth',
            });
        }
    }
    static getTopOffset(controlEl) {
        const labelOffset = 50;
        return controlEl.getBoundingClientRect().top + window.scrollY - labelOffset;
    }
    ngOnDestroy() {
        this.formSubscription.unsubscribe();
    }
    static ɵfac = function ScrollToErrorDirective_Factory(t) { return new (t || ScrollToErrorDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.FormErrorService)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ScrollToErrorDirective, selectors: [["", "scrollToError", ""]] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ScrollToErrorDirective, [{
        type: Directive,
        args: [{
                selector: '[scrollToError]',
            }]
    }], () => [{ type: i0.ElementRef }, { type: i1.FormErrorService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXRvLWVycm9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kaXJlY3RpdmVzL3Njcm9sbC9zY3JvbGwtdG8tZXJyb3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXlCLE1BQU0sZUFBZSxDQUFDOzs7QUFRakUsTUFBTSxPQUFPLHNCQUFzQjtJQUlkO0lBQ0E7SUFKbkIsZ0JBQWdCLENBQWU7SUFFL0IsWUFDbUIsTUFBa0IsRUFDbEIsZ0JBQWtDO1FBRGxDLFdBQU0sR0FBTixNQUFNLENBQVk7UUFDbEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUVuRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ25FLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLDJCQUEyQjtRQUNqQyxNQUFNLG1CQUFtQixHQUFnQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQzlFLHFEQUFxRCxDQUN0RCxDQUFDO1FBRUYsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxNQUFNLENBQUM7Z0JBQ1osR0FBRyxFQUFFLHNCQUFzQixDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQztnQkFDN0QsSUFBSSxFQUFFLENBQUM7Z0JBQ1AsUUFBUSxFQUFFLFFBQVE7YUFDbkIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztJQUNILENBQUM7SUFFTyxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQXNCO1FBQ2hELE1BQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN2QixPQUFPLFNBQVMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQztJQUM5RSxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN0QyxDQUFDO2dGQWpDVSxzQkFBc0I7NkRBQXRCLHNCQUFzQjs7aUZBQXRCLHNCQUFzQjtjQUhsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjthQUM1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRm9ybUVycm9yU2VydmljZSB9IGZyb20gJy4uLy4uL2Vycm9ycyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tzY3JvbGxUb0Vycm9yXScsXG59KVxuZXhwb3J0IGNsYXNzIFNjcm9sbFRvRXJyb3JEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBmb3JtU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBlbG1SZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZWFkb25seSBmb3JtRXJyb3JTZXJ2aWNlOiBGb3JtRXJyb3JTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuZm9ybVN1YnNjcmlwdGlvbiA9IHRoaXMuZm9ybUVycm9yU2VydmljZS5zdWJtaXQkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnNjcm9sbFRvRmlyc3RJbnZhbGlkQ29udHJvbCgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzY3JvbGxUb0ZpcnN0SW52YWxpZENvbnRyb2woKSB7XG4gICAgY29uc3QgZmlyc3RJbnZhbGlkQ29udHJvbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsbVJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnZm9ybSBpbnB1dC5uZy1pbnZhbGlkLCBmb3JtIGlucHV0Lm5nLWludmFsaWQtY3VzdG9tJ1xuICAgICk7XG5cbiAgICBpZiAoZmlyc3RJbnZhbGlkQ29udHJvbCkge1xuICAgICAgd2luZG93LnNjcm9sbCh7XG4gICAgICAgIHRvcDogU2Nyb2xsVG9FcnJvckRpcmVjdGl2ZS5nZXRUb3BPZmZzZXQoZmlyc3RJbnZhbGlkQ29udHJvbCksXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGdldFRvcE9mZnNldChjb250cm9sRWw6IEhUTUxFbGVtZW50KTogbnVtYmVyIHtcbiAgICBjb25zdCBsYWJlbE9mZnNldCA9IDUwO1xuICAgIHJldHVybiBjb250cm9sRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgd2luZG93LnNjcm9sbFkgLSBsYWJlbE9mZnNldDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=