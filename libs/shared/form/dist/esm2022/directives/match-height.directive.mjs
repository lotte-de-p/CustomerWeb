import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@telenet/ng-lib-page";
export class MatchHeightDirective {
    el;
    clientBrowserTypeService;
    static SAFARI_HEIGHT_CALCULATION_DIFFERENCE_COMPENSATOR = 1.4;
    matchHeightClass;
    constructor(el, clientBrowserTypeService) {
        this.el = el;
        this.clientBrowserTypeService = clientBrowserTypeService;
    }
    ngAfterViewChecked() {
        this.matchHeight(this.el.nativeElement);
    }
    matchHeight(parent) {
        if (!parent) {
            return;
        }
        const children = parent.getElementsByClassName(this.matchHeightClass);
        if (!children) {
            return;
        }
        Array.from(children).forEach((x) => {
            x.style.height = 'initial';
        });
        const itemHeights = Array.from(children).map((x) => {
            if (this.clientBrowserTypeService.isClientUsingSafari()) {
                return x.clientHeight * MatchHeightDirective.SAFARI_HEIGHT_CALCULATION_DIFFERENCE_COMPENSATOR;
            }
            else {
                return x.clientHeight;
            }
        });
        const maxHeight = itemHeights.reduce((prev, curr) => {
            return curr > prev ? curr : prev;
        }, 0);
        Array.from(children).forEach((x) => (x.style.height = `${maxHeight}px`));
    }
    static ɵfac = function MatchHeightDirective_Factory(t) { return new (t || MatchHeightDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.ClientBrowserTypeService)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: MatchHeightDirective, selectors: [["", "matchHeightClass", ""]], inputs: { matchHeightClass: "matchHeightClass" } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatchHeightDirective, [{
        type: Directive,
        args: [{
                selector: '[matchHeightClass]',
            }]
    }], () => [{ type: i0.ElementRef }, { type: i1.ClientBrowserTypeService }], { matchHeightClass: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2gtaGVpZ2h0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXJlY3RpdmVzL21hdGNoLWhlaWdodC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBZ0MsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFNL0UsTUFBTSxPQUFPLG9CQUFvQjtJQU9aO0lBQ0E7SUFQWCxNQUFNLENBQVUsZ0RBQWdELEdBQUcsR0FBRyxDQUFDO0lBRy9FLGdCQUFnQixDQUFTO0lBRXpCLFlBQ21CLEVBQWMsRUFDZCx3QkFBa0Q7UUFEbEQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7SUFDbEUsQ0FBQztJQUVKLGtCQUFrQjtRQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELFdBQVcsQ0FBQyxNQUFtQjtRQUM3QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDWixPQUFPO1FBQ1QsQ0FBQztRQUNELE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQWtDLENBQUM7UUFFdkcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2QsT0FBTztRQUNULENBQUM7UUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQWMsRUFBRSxFQUFFO1lBQzlDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDakQsSUFBSSxJQUFJLENBQUMsd0JBQXdCLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxDQUFDO2dCQUN4RCxPQUFPLENBQUMsQ0FBQyxZQUFZLEdBQUcsb0JBQW9CLENBQUMsZ0RBQWdELENBQUM7WUFDaEcsQ0FBQztpQkFBTSxDQUFDO2dCQUNOLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQztZQUN4QixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLFNBQVMsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFO1lBQ2xELE9BQU8sSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDbkMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRU4sS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFjLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDeEYsQ0FBQzs4RUExQ1Usb0JBQW9COzZEQUFwQixvQkFBb0I7O2lGQUFwQixvQkFBb0I7Y0FIaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7YUFDL0I7a0ZBS0MsZ0JBQWdCO2tCQURmLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0NoZWNrZWQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbGllbnRCcm93c2VyVHlwZVNlcnZpY2UgfSBmcm9tICdAdGVsZW5ldC9uZy1saWItcGFnZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttYXRjaEhlaWdodENsYXNzXScsXG59KVxuZXhwb3J0IGNsYXNzIE1hdGNoSGVpZ2h0RGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3Q2hlY2tlZCB7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFNBRkFSSV9IRUlHSFRfQ0FMQ1VMQVRJT05fRElGRkVSRU5DRV9DT01QRU5TQVRPUiA9IDEuNDtcblxuICBASW5wdXQoKVxuICBtYXRjaEhlaWdodENsYXNzOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNsaWVudEJyb3dzZXJUeXBlU2VydmljZTogQ2xpZW50QnJvd3NlclR5cGVTZXJ2aWNlXG4gICkge31cblxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAgdGhpcy5tYXRjaEhlaWdodCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpO1xuICB9XG5cbiAgbWF0Y2hIZWlnaHQocGFyZW50OiBIVE1MRWxlbWVudCkge1xuICAgIGlmICghcGFyZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNoaWxkcmVuID0gcGFyZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUodGhpcy5tYXRjaEhlaWdodENsYXNzKSBhcyBIVE1MQ29sbGVjdGlvbk9mPEhUTUxFbGVtZW50PjtcblxuICAgIGlmICghY2hpbGRyZW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBBcnJheS5mcm9tKGNoaWxkcmVuKS5mb3JFYWNoKCh4OiBIVE1MRWxlbWVudCkgPT4ge1xuICAgICAgeC5zdHlsZS5oZWlnaHQgPSAnaW5pdGlhbCc7XG4gICAgfSk7XG5cbiAgICBjb25zdCBpdGVtSGVpZ2h0cyA9IEFycmF5LmZyb20oY2hpbGRyZW4pLm1hcCgoeCkgPT4ge1xuICAgICAgaWYgKHRoaXMuY2xpZW50QnJvd3NlclR5cGVTZXJ2aWNlLmlzQ2xpZW50VXNpbmdTYWZhcmkoKSkge1xuICAgICAgICByZXR1cm4geC5jbGllbnRIZWlnaHQgKiBNYXRjaEhlaWdodERpcmVjdGl2ZS5TQUZBUklfSEVJR0hUX0NBTENVTEFUSU9OX0RJRkZFUkVOQ0VfQ09NUEVOU0FUT1I7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4geC5jbGllbnRIZWlnaHQ7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBtYXhIZWlnaHQgPSBpdGVtSGVpZ2h0cy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHtcbiAgICAgIHJldHVybiBjdXJyID4gcHJldiA/IGN1cnIgOiBwcmV2O1xuICAgIH0sIDApO1xuXG4gICAgQXJyYXkuZnJvbShjaGlsZHJlbikuZm9yRWFjaCgoeDogSFRNTEVsZW1lbnQpID0+ICh4LnN0eWxlLmhlaWdodCA9IGAke21heEhlaWdodH1weGApKTtcbiAgfVxufVxuIl19