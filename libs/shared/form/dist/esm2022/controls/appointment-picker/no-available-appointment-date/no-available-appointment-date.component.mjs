import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@telenet/ng-lib-page";
import * as i2 from "@angular/common";
import * as i3 from "@ngx-translate/core";
const _c0 = a0 => ({ "button--disabled": a0 });
export class NoAvailableAppointmentDateComponent {
    languageService;
    loadMoreSlots = new EventEmitter();
    messageGroup;
    disableLoadMore;
    constructor(languageService) {
        this.languageService = languageService;
    }
    loadSlots() {
        this.loadMoreSlots.emit();
    }
    static ɵfac = function NoAvailableAppointmentDateComponent_Factory(t) { return new (t || NoAvailableAppointmentDateComponent)(i0.ɵɵdirectiveInject(i1.LanguageService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NoAvailableAppointmentDateComponent, selectors: [["app-no-available-appointment-date"]], inputs: { messageGroup: "messageGroup", disableLoadMore: "disableLoadMore" }, outputs: { loadMoreSlots: "loadMoreSlots" }, decls: 8, vars: 9, consts: [[1, "Container", "text-align--center", "px--xxs", "px--l--sm", "py--xxl", "background-shade_08", "border--all--r", "border-width--all--r", "border-style--all--solid", "border-color--all--shade_24"], [1, "mb--xxs"], [1, "button", "button--secondary", "width--full", "width--auto--sm", 3, "ngClass", "click"]], template: function NoAvailableAppointmentDateComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "p", 1);
            i0.ɵɵtext(2);
            i0.ɵɵpipe(3, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 2);
            i0.ɵɵlistener("click", function NoAvailableAppointmentDateComponent_Template_div_click_4_listener() { return ctx.loadSlots(); });
            i0.ɵɵelementStart(5, "span");
            i0.ɵɵtext(6);
            i0.ɵɵpipe(7, "translate");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 3, "ng." + ctx.messageGroup + ".unavailable-timeslots.lbl"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c0, ctx.disableLoadMore));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(7, 5, "ng." + ctx.messageGroup + ".load-more-timeslots.lbl"));
        } }, dependencies: [i2.NgClass, i3.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NoAvailableAppointmentDateComponent, [{
        type: Component,
        args: [{ selector: 'app-no-available-appointment-date', template: "<div\n  class=\"Container text-align--center px--xxs px--l--sm py--xxl background-shade_08 border--all--r border-width--all--r border-style--all--solid border-color--all--shade_24\">\n  <p class=\"mb--xxs\">{{'ng.' + messageGroup + '.unavailable-timeslots.lbl' | translate}}</p>\n  <div\n    class=\"button button--secondary width--full width--auto--sm\"\n    [ngClass]=\"{'button--disabled' : disableLoadMore}\"\n    (click)=\"loadSlots()\">\n    <span>{{'ng.' + messageGroup + '.load-more-timeslots.lbl' | translate}}</span>\n  </div>\n</div>\n" }]
    }], () => [{ type: i1.LanguageService }], { loadMoreSlots: [{
            type: Output
        }], messageGroup: [{
            type: Input
        }], disableLoadMore: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NoAvailableAppointmentDateComponent, { className: "NoAvailableAppointmentDateComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm8tYXZhaWxhYmxlLWFwcG9pbnRtZW50LWRhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xzL2FwcG9pbnRtZW50LXBpY2tlci9uby1hdmFpbGFibGUtYXBwb2ludG1lbnQtZGF0ZS9uby1hdmFpbGFibGUtYXBwb2ludG1lbnQtZGF0ZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9zcmMvY29udHJvbHMvYXBwb2ludG1lbnQtcGlja2VyL25vLWF2YWlsYWJsZS1hcHBvaW50bWVudC1kYXRlL25vLWF2YWlsYWJsZS1hcHBvaW50bWVudC1kYXRlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBT3ZFLE1BQU0sT0FBTyxtQ0FBbUM7SUFTbEI7SUFQNUIsYUFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFHbkMsWUFBWSxDQUFTO0lBRXJCLGVBQWUsQ0FBVTtJQUV6QixZQUE0QixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFBRyxDQUFDO0lBRWhFLFNBQVM7UUFDUCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzVCLENBQUM7NkZBYlUsbUNBQW1DOzZEQUFuQyxtQ0FBbUM7WUNQaEQsOEJBQzhLLFdBQUE7WUFDekosWUFBbUU7O1lBQUEsaUJBQUk7WUFDMUYsOEJBR3dCO1lBQXRCLDZHQUFTLGVBQVcsSUFBQztZQUNyQiw0QkFBTTtZQUFBLFlBQWlFOztZQUFBLGlCQUFPLEVBQUEsRUFBQTs7WUFMN0QsZUFBbUU7WUFBbkUsbUdBQW1FO1lBR3BGLGVBQWtEO1lBQWxELHlFQUFrRDtZQUU1QyxlQUFpRTtZQUFqRSxpR0FBaUU7OztpRkRBOUQsbUNBQW1DO2NBSi9DLFNBQVM7MkJBQ0UsbUNBQW1DO2dEQUs3QyxhQUFhO2tCQURaLE1BQU07WUFJUCxZQUFZO2tCQURYLEtBQUs7WUFHTixlQUFlO2tCQURkLEtBQUs7O2tGQU5LLG1DQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICdAdGVsZW5ldC9uZy1saWItcGFnZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1uby1hdmFpbGFibGUtYXBwb2ludG1lbnQtZGF0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9uby1hdmFpbGFibGUtYXBwb2ludG1lbnQtZGF0ZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTm9BdmFpbGFibGVBcHBvaW50bWVudERhdGVDb21wb25lbnQge1xuICBAT3V0cHV0KClcbiAgbG9hZE1vcmVTbG90cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKVxuICBtZXNzYWdlR3JvdXA6IHN0cmluZztcbiAgQElucHV0KClcbiAgZGlzYWJsZUxvYWRNb3JlOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZSkge31cblxuICBsb2FkU2xvdHMoKSB7XG4gICAgdGhpcy5sb2FkTW9yZVNsb3RzLmVtaXQoKTtcbiAgfVxufVxuIiwiPGRpdlxuICBjbGFzcz1cIkNvbnRhaW5lciB0ZXh0LWFsaWduLS1jZW50ZXIgcHgtLXh4cyBweC0tbC0tc20gcHktLXh4bCBiYWNrZ3JvdW5kLXNoYWRlXzA4IGJvcmRlci0tYWxsLS1yIGJvcmRlci13aWR0aC0tYWxsLS1yIGJvcmRlci1zdHlsZS0tYWxsLS1zb2xpZCBib3JkZXItY29sb3ItLWFsbC0tc2hhZGVfMjRcIj5cbiAgPHAgY2xhc3M9XCJtYi0teHhzXCI+e3snbmcuJyArIG1lc3NhZ2VHcm91cCArICcudW5hdmFpbGFibGUtdGltZXNsb3RzLmxibCcgfCB0cmFuc2xhdGV9fTwvcD5cbiAgPGRpdlxuICAgIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tc2Vjb25kYXJ5IHdpZHRoLS1mdWxsIHdpZHRoLS1hdXRvLS1zbVwiXG4gICAgW25nQ2xhc3NdPVwieydidXR0b24tLWRpc2FibGVkJyA6IGRpc2FibGVMb2FkTW9yZX1cIlxuICAgIChjbGljayk9XCJsb2FkU2xvdHMoKVwiPlxuICAgIDxzcGFuPnt7J25nLicgKyBtZXNzYWdlR3JvdXAgKyAnLmxvYWQtbW9yZS10aW1lc2xvdHMubGJsJyB8IHRyYW5zbGF0ZX19PC9zcGFuPlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19