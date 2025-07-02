import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@telenet/ng-lib-page";
import * as i2 from "@ngx-translate/core";
export class NewNoAvailableAppointmentDateComponent {
    languageService;
    loadMoreSlots = new EventEmitter();
    messageGroup;
    constructor(languageService) {
        this.languageService = languageService;
    }
    loadSlots() {
        this.loadMoreSlots.emit();
    }
    static ɵfac = function NewNoAvailableAppointmentDateComponent_Factory(t) { return new (t || NewNoAvailableAppointmentDateComponent)(i0.ɵɵdirectiveInject(i1.LanguageService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NewNoAvailableAppointmentDateComponent, selectors: [["app-new-no-available-appointment-date"]], inputs: { messageGroup: "messageGroup" }, outputs: { loadMoreSlots: "loadMoreSlots" }, decls: 8, vars: 6, consts: [[1, "Container", "text-align--center", "p--xxl", "background-shade_08", "border--all--r", "border-width--all--r", "border-style--all--solid", "border-color--all--shade_24"], [1, "mb--xxs"], [1, "button", "button--secondary", 3, "click"]], template: function NewNoAvailableAppointmentDateComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "p", 1);
            i0.ɵɵtext(2);
            i0.ɵɵpipe(3, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 2);
            i0.ɵɵlistener("click", function NewNoAvailableAppointmentDateComponent_Template_div_click_4_listener() { return ctx.loadSlots(); });
            i0.ɵɵelementStart(5, "span");
            i0.ɵɵtext(6);
            i0.ɵɵpipe(7, "translate");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 2, "ng." + ctx.messageGroup + ".unavailable-timeslots.lbl"));
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(7, 4, "ng." + ctx.messageGroup + ".load-more-timeslots.lbl"));
        } }, dependencies: [i2.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NewNoAvailableAppointmentDateComponent, [{
        type: Component,
        args: [{ selector: 'app-new-no-available-appointment-date', template: "<div\n  class=\"Container text-align--center p--xxl background-shade_08 border--all--r border-width--all--r border-style--all--solid border-color--all--shade_24\">\n  <p class=\"mb--xxs\">{{'ng.' + messageGroup + '.unavailable-timeslots.lbl' | translate}}</p>\n  <div class=\"button button--secondary\" (click)=\"loadSlots()\">\n    <span>{{'ng.' + messageGroup + '.load-more-timeslots.lbl' | translate}}</span>\n  </div>\n</div>\n" }]
    }], () => [{ type: i1.LanguageService }], { loadMoreSlots: [{
            type: Output
        }], messageGroup: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NewNoAvailableAppointmentDateComponent, { className: "NewNoAvailableAppointmentDateComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LW5vLWF2YWlsYWJsZS1hcHBvaW50bWVudC1kYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb250cm9scy9uZXctYXBwb2ludG1lbnQtcGlja2VyL2NvbXBvbmVudHMvbmV3LW5vLWF2YWlsYWJsZS1hcHBvaW50bWVudC1kYXRlL25ldy1uby1hdmFpbGFibGUtYXBwb2ludG1lbnQtZGF0ZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29udHJvbHMvbmV3LWFwcG9pbnRtZW50LXBpY2tlci9jb21wb25lbnRzL25ldy1uby1hdmFpbGFibGUtYXBwb2ludG1lbnQtZGF0ZS9uZXctbm8tYXZhaWxhYmxlLWFwcG9pbnRtZW50LWRhdGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBT3ZFLE1BQU0sT0FBTyxzQ0FBc0M7SUFPckI7SUFMNUIsYUFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFHbkMsWUFBWSxDQUFTO0lBRXJCLFlBQTRCLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUFHLENBQUM7SUFFaEUsU0FBUztRQUNQLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDNUIsQ0FBQztnR0FYVSxzQ0FBc0M7NkRBQXRDLHNDQUFzQztZQ1BuRCw4QkFDMkosV0FBQTtZQUN0SSxZQUFtRTs7WUFBQSxpQkFBSTtZQUMxRiw4QkFBNEQ7WUFBdEIsZ0hBQVMsZUFBVyxJQUFDO1lBQ3pELDRCQUFNO1lBQUEsWUFBaUU7O1lBQUEsaUJBQU8sRUFBQSxFQUFBOztZQUY3RCxlQUFtRTtZQUFuRSxtR0FBbUU7WUFFOUUsZUFBaUU7WUFBakUsaUdBQWlFOzs7aUZERzlELHNDQUFzQztjQUpsRCxTQUFTOzJCQUNFLHVDQUF1QztnREFLakQsYUFBYTtrQkFEWixNQUFNO1lBSVAsWUFBWTtrQkFEWCxLQUFLOztrRkFKSyxzQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnQHRlbGVuZXQvbmctbGliLXBhZ2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbmV3LW5vLWF2YWlsYWJsZS1hcHBvaW50bWVudC1kYXRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25ldy1uby1hdmFpbGFibGUtYXBwb2ludG1lbnQtZGF0ZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTmV3Tm9BdmFpbGFibGVBcHBvaW50bWVudERhdGVDb21wb25lbnQge1xuICBAT3V0cHV0KClcbiAgbG9hZE1vcmVTbG90cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKVxuICBtZXNzYWdlR3JvdXA6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UpIHt9XG5cbiAgbG9hZFNsb3RzKCkge1xuICAgIHRoaXMubG9hZE1vcmVTbG90cy5lbWl0KCk7XG4gIH1cbn1cbiIsIjxkaXZcbiAgY2xhc3M9XCJDb250YWluZXIgdGV4dC1hbGlnbi0tY2VudGVyIHAtLXh4bCBiYWNrZ3JvdW5kLXNoYWRlXzA4IGJvcmRlci0tYWxsLS1yIGJvcmRlci13aWR0aC0tYWxsLS1yIGJvcmRlci1zdHlsZS0tYWxsLS1zb2xpZCBib3JkZXItY29sb3ItLWFsbC0tc2hhZGVfMjRcIj5cbiAgPHAgY2xhc3M9XCJtYi0teHhzXCI+e3snbmcuJyArIG1lc3NhZ2VHcm91cCArICcudW5hdmFpbGFibGUtdGltZXNsb3RzLmxibCcgfCB0cmFuc2xhdGV9fTwvcD5cbiAgPGRpdiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXNlY29uZGFyeVwiIChjbGljayk9XCJsb2FkU2xvdHMoKVwiPlxuICAgIDxzcGFuPnt7J25nLicgKyBtZXNzYWdlR3JvdXAgKyAnLmxvYWQtbW9yZS10aW1lc2xvdHMubGJsJyB8IHRyYW5zbGF0ZX19PC9zcGFuPlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19