import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AppointmentSlotOption } from '../appointment-slot-option.model';
import { TimeslotMomentEnum } from '../../../enums';
import { AppointmentPickerConsumerTypeEnum } from '../../../interfaces';
import { AbstractAppointmentPickerByTemporalComponent } from '../abstract-appointment-picker-by-temporal.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../input-appointment-date-picker/input-appointment-date-picker.component";
import * as i3 from "../input-appointment-moment-picker/input-appointment-moment-picker.component";
import * as i4 from "../../../errors/message-group.directive";
import * as i5 from "../no-available-appointment-date/no-available-appointment-date.component";
import * as i6 from "@ngx-translate/core";
const _c0 = a0 => ({ "mb-15": a0 });
function InputAppointmentPickerByMomentComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "span", 7);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c0, ctx_r0.consumerType === ctx_r0.consumerTypeEnum.NC));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 2, ctx_r0.momentPickerErrorLabel));
} }
function InputAppointmentPickerByMomentComponent_app_no_available_appointment_date_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-no-available-appointment-date", 8);
    i0.ɵɵlistener("loadMoreSlots", function InputAppointmentPickerByMomentComponent_app_no_available_appointment_date_4_Template_app_no_available_appointment_date_loadMoreSlots_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.loadMoreSlots()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("messageGroup", ctx_r1.messageGroup);
} }
function InputAppointmentPickerByMomentComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12)(1, "span", 7);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 1, ctx_r5.datePickerErrorLabel));
} }
function InputAppointmentPickerByMomentComponent_div_5_app_form_appointment_date_picker_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-form-appointment-date-picker", 13);
    i0.ɵɵlistener("appointmentSelected", function InputAppointmentPickerByMomentComponent_div_5_app_form_appointment_date_picker_2_Template_app_form_appointment_date_picker_appointmentSelected_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r7.setSelectedAppointmentSlot($event)); })("loadMore", function InputAppointmentPickerByMomentComponent_div_5_app_form_appointment_date_picker_2_Template_app_form_appointment_date_picker_loadMore_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r9 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r9.loadMoreSlots($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("messageGroup", ctx_r6.messageGroup)("timeslots", ctx_r6.timeslots)("startDate", ctx_r6.startDate)("endDate", ctx_r6.endDate)("selectedTimeslot", ctx_r6.selectedAppointmentSlot)("slidesToScroll", ctx_r6.slidesToScroll)("momentFilter", ctx_r6.selectedAppointmentMoment)("showLoadMore", ctx_r6.showLoadMore)("disableLoadMore", ctx_r6.disableLoadMore)("updateSlots", ctx_r6.updateSlots)("consumerType", ctx_r6.consumerType)("slidesToShow", ctx_r6.slidesToShow)("appointmentPickerType", ctx_r6.appointmentPickerType)("isDeviceLandscape", ctx_r6.isDeviceLandscape)("enableAppointmentsUI", ctx_r6.enableAppointmentsUI)("datePickerLabel", ctx_r6.datePickerLabel);
} }
function InputAppointmentPickerByMomentComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtemplate(1, InputAppointmentPickerByMomentComponent_div_5_div_1_Template, 4, 3, "div", 10)(2, InputAppointmentPickerByMomentComponent_div_5_app_form_appointment_date_picker_2_Template, 1, 16, "app-form-appointment-date-picker", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.hasError("day_required"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r2.timeslots == null ? null : ctx_r2.timeslots.length) || (ctx_r2.updateSlots == null ? null : ctx_r2.updateSlots.length));
} }
export class InputAppointmentPickerByMomentComponent extends AbstractAppointmentPickerByTemporalComponent {
    messageGroup;
    error;
    startDate = new Date();
    endDate;
    timeslots;
    slidesToScroll;
    initialSlide = 0;
    initialised = false;
    labelKeys;
    updateSlots;
    showLoadMore;
    consumerType;
    disableLoadMore;
    enableAppointmentsUI;
    slidesToShow;
    appointmentPickerType;
    isDeviceLandscape;
    loadMore = new EventEmitter();
    appointmentSlotSelected = new EventEmitter();
    scrollTo = new EventEmitter();
    datePickerLabel = '';
    momentPickerLabel = '';
    datePickerErrorLabel = '';
    momentPickerErrorLabel = '';
    selectedAppointmentSlot;
    selectedAppointmentMoment;
    moments = [];
    consumerTypeEnum = AppointmentPickerConsumerTypeEnum;
    constructor() {
        super();
        this.moments = this.generateMoments();
    }
    setSelectedAppointment(appointmentSlotOption) {
        this.selectedAppointmentSlot = this.timeslots.find((appointmentSlot) => {
            return (appointmentSlotOption.date &&
                InputAppointmentPickerByMomentComponent.isSelectedSlotsAvailable(appointmentSlot, appointmentSlotOption));
        });
        this.selectedAppointmentMoment = this.moments.find((moment) => {
            return moment === appointmentSlotOption.moment;
        });
        this.setInputValue();
    }
    setSelectedAppointmentSlot(appointmentSlot) {
        this.getComponent().selectedAppointmentSlot = appointmentSlot;
        this.setInputValue();
    }
    static isSelectedSlotsAvailable(slot, selectedSlot) {
        return (slot.date.getDate() === selectedSlot.date?.getDate() &&
            slot.date.getMonth() === selectedSlot.date?.getMonth() &&
            slot.date.getFullYear() === selectedSlot.date?.getFullYear());
    }
    getSelectedAppointment() {
        return new AppointmentSlotOption(this.selectedAppointmentSlot ? this.selectedAppointmentSlot.date : null, this.selectedAppointmentMoment ?? null);
    }
    generateMoments() {
        const moments = [];
        moments.push(TimeslotMomentEnum.MORNING);
        moments.push(TimeslotMomentEnum.LUNCH);
        moments.push(TimeslotMomentEnum.AFTERNOON);
        moments.push(TimeslotMomentEnum.EVENING);
        return moments;
    }
    getComponent() {
        return this;
    }
    scrollSectionTo($event) {
        super.scrollToSection($event);
    }
    static ɵfac = function InputAppointmentPickerByMomentComponent_Factory(t) { return new (t || InputAppointmentPickerByMomentComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputAppointmentPickerByMomentComponent, selectors: [["app-form-appointment-picker-by-date"]], inputs: { startDate: "startDate", endDate: "endDate", timeslots: "timeslots", slidesToScroll: "slidesToScroll", initialSlide: "initialSlide", initialised: "initialised", labelKeys: "labelKeys", updateSlots: "updateSlots", showLoadMore: "showLoadMore", consumerType: "consumerType", disableLoadMore: "disableLoadMore", enableAppointmentsUI: "enableAppointmentsUI", slidesToShow: "slidesToShow", appointmentPickerType: "appointmentPickerType", isDeviceLandscape: "isDeviceLandscape" }, outputs: { loadMore: "loadMore", appointmentSlotSelected: "appointmentSlotSelected", scrollTo: "scrollTo" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputAppointmentPickerByMomentComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 13, consts: [[1, "appointment-picker"], [1, "section-time", "mx--xs--md"], ["class", "notification notification--errorfield notification--errorfield--flow", 3, "ngClass", 4, "ngIf"], [3, "messageGroup", "timeslots", "startDate", "endDate", "selectedMoment", "consumerType", "updateSlots", "isDeviceLandscape", "enableAppointmentsUI", "momentPickerLabel", "momentSelected", "loadMore", "scrollTo"], [3, "messageGroup", "loadMoreSlots", 4, "ngIf"], ["class", "section-date mx--xs--md", 4, "ngIf"], [1, "notification", "notification--errorfield", "notification--errorfield--flow", 3, "ngClass"], [1, "icon", "icon-error-shape", "errorfield"], [3, "messageGroup", "loadMoreSlots"], [1, "section-date", "mx--xs--md"], ["class", "notification notification--errorfield notification--errorfield--flow", 4, "ngIf"], [3, "messageGroup", "timeslots", "startDate", "endDate", "selectedTimeslot", "slidesToScroll", "momentFilter", "showLoadMore", "disableLoadMore", "updateSlots", "consumerType", "slidesToShow", "appointmentPickerType", "isDeviceLandscape", "enableAppointmentsUI", "datePickerLabel", "appointmentSelected", "loadMore", 4, "ngIf"], [1, "notification", "notification--errorfield", "notification--errorfield--flow"], [3, "messageGroup", "timeslots", "startDate", "endDate", "selectedTimeslot", "slidesToScroll", "momentFilter", "showLoadMore", "disableLoadMore", "updateSlots", "consumerType", "slidesToShow", "appointmentPickerType", "isDeviceLandscape", "enableAppointmentsUI", "datePickerLabel", "appointmentSelected", "loadMore"]], template: function InputAppointmentPickerByMomentComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵtemplate(2, InputAppointmentPickerByMomentComponent_div_2_Template, 4, 6, "div", 2);
            i0.ɵɵelementStart(3, "app-form-appointment-moment-picker", 3);
            i0.ɵɵlistener("momentSelected", function InputAppointmentPickerByMomentComponent_Template_app_form_appointment_moment_picker_momentSelected_3_listener($event) { return ctx.setSelectedAppointmentMoment($event); })("loadMore", function InputAppointmentPickerByMomentComponent_Template_app_form_appointment_moment_picker_loadMore_3_listener($event) { return ctx.loadMoreSlots($event); })("scrollTo", function InputAppointmentPickerByMomentComponent_Template_app_form_appointment_moment_picker_scrollTo_3_listener($event) { return ctx.scrollSectionTo($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(4, InputAppointmentPickerByMomentComponent_app_no_available_appointment_date_4_Template, 1, 1, "app-no-available-appointment-date", 4)(5, InputAppointmentPickerByMomentComponent_div_5_Template, 3, 2, "div", 5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.hasError("slot_required"));
            i0.ɵɵadvance();
            i0.ɵɵproperty("messageGroup", ctx.messageGroup)("timeslots", ctx.timeslots)("startDate", ctx.startDate)("endDate", ctx.endDate)("selectedMoment", ctx.selectedAppointmentMoment)("consumerType", ctx.consumerType)("updateSlots", ctx.updateSlots)("isDeviceLandscape", ctx.isDeviceLandscape)("enableAppointmentsUI", ctx.enableAppointmentsUI)("momentPickerLabel", ctx.momentPickerLabel);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !(ctx.timeslots == null ? null : ctx.timeslots.length) || !(ctx.updateSlots == null ? null : ctx.updateSlots.length));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.selectedAppointmentMoment);
        } }, dependencies: [i1.NgClass, i1.NgIf, i2.InputAppointmentDatePickerComponent, i3.InputAppointmentMomentPickerComponent, i4.MessageGroupDirective, i5.NoAvailableAppointmentDateComponent, i6.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputAppointmentPickerByMomentComponent, [{
        type: Component,
        args: [{ selector: 'app-form-appointment-picker-by-date', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputAppointmentPickerByMomentComponent),
                        multi: true,
                    },
                ], template: "<div class=\"appointment-picker\">\n  <div class=\"section-time mx--xs--md\">\n    <div\n      class=\"notification notification--errorfield notification--errorfield--flow\"\n      [ngClass]=\"{'mb-15' : consumerType === consumerTypeEnum.NC}\"\n      *ngIf=\"hasError('slot_required')\">\n      <span class=\"icon icon-error-shape errorfield\">{{ momentPickerErrorLabel | translate }}</span>\n    </div>\n    <app-form-appointment-moment-picker\n      [messageGroup]=\"messageGroup\"\n      [timeslots]=\"timeslots\"\n      [startDate]=\"startDate\"\n      [endDate]=\"endDate\"\n      [selectedMoment]=\"selectedAppointmentMoment\"\n      (momentSelected)=\"setSelectedAppointmentMoment($event)\"\n      (loadMore)=\"loadMoreSlots($event)\"\n      [consumerType]=\"consumerType\"\n      [updateSlots]=\"updateSlots\"\n      (scrollTo)=\"scrollSectionTo($event)\"\n      [isDeviceLandscape]=\"isDeviceLandscape\"\n      [enableAppointmentsUI]=\"enableAppointmentsUI\"\n      [momentPickerLabel]=\"momentPickerLabel\">\n    </app-form-appointment-moment-picker>\n  </div>\n  <app-no-available-appointment-date\n    *ngIf=\"!timeslots?.length || !updateSlots?.length\"\n    (loadMoreSlots)=\"loadMoreSlots()\"\n    [messageGroup]=\"messageGroup\"></app-no-available-appointment-date>\n  <div class=\"section-date mx--xs--md\" *ngIf=\"selectedAppointmentMoment\">\n    <div class=\"notification notification--errorfield notification--errorfield--flow\" *ngIf=\"hasError('day_required')\">\n      <span class=\"icon icon-error-shape errorfield\">{{ datePickerErrorLabel | translate }}</span>\n    </div>\n    <app-form-appointment-date-picker\n      *ngIf=\"timeslots?.length || updateSlots?.length\"\n      [messageGroup]=\"messageGroup\"\n      [timeslots]=\"timeslots\"\n      [startDate]=\"startDate\"\n      [endDate]=\"endDate\"\n      [selectedTimeslot]=\"selectedAppointmentSlot\"\n      [slidesToScroll]=\"slidesToScroll\"\n      [momentFilter]=\"selectedAppointmentMoment\"\n      (appointmentSelected)=\"setSelectedAppointmentSlot($event)\"\n      [showLoadMore]=\"showLoadMore\"\n      [disableLoadMore]=\"disableLoadMore\"\n      (loadMore)=\"loadMoreSlots($event)\"\n      [updateSlots]=\"updateSlots\"\n      [consumerType]=\"consumerType\"\n      [slidesToShow]=\"slidesToShow\"\n      [appointmentPickerType]=\"appointmentPickerType\"\n      [isDeviceLandscape]=\"isDeviceLandscape\"\n      [enableAppointmentsUI]=\"enableAppointmentsUI\"\n      [datePickerLabel]=\"datePickerLabel\">\n    </app-form-appointment-date-picker>\n  </div>\n</div>\n" }]
    }], () => [], { startDate: [{
            type: Input
        }], endDate: [{
            type: Input
        }], timeslots: [{
            type: Input
        }], slidesToScroll: [{
            type: Input
        }], initialSlide: [{
            type: Input
        }], initialised: [{
            type: Input
        }], labelKeys: [{
            type: Input
        }], updateSlots: [{
            type: Input
        }], showLoadMore: [{
            type: Input
        }], consumerType: [{
            type: Input
        }], disableLoadMore: [{
            type: Input
        }], enableAppointmentsUI: [{
            type: Input
        }], slidesToShow: [{
            type: Input
        }], appointmentPickerType: [{
            type: Input
        }], isDeviceLandscape: [{
            type: Input
        }], loadMore: [{
            type: Output
        }], appointmentSlotSelected: [{
            type: Output
        }], scrollTo: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputAppointmentPickerByMomentComponent, { className: "InputAppointmentPickerByMomentComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtYXBwb2ludG1lbnQtcGlja2VyLWJ5LW1vbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29udHJvbHMvYXBwb2ludG1lbnQtcGlja2VyL2FwcG9pbnRtZW50LXBpY2tlci1ieS1tb21lbnQvaW5wdXQtYXBwb2ludG1lbnQtcGlja2VyLWJ5LW1vbWVudC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9zcmMvY29udHJvbHMvYXBwb2ludG1lbnQtcGlja2VyL2FwcG9pbnRtZW50LXBpY2tlci1ieS1tb21lbnQvaW5wdXQtYXBwb2ludG1lbnQtcGlja2VyLWJ5LW1vbWVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSW5ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXhFLE9BQU8sRUFBRSw0Q0FBNEMsRUFBRSxNQUFNLHNEQUFzRCxDQUFDOzs7Ozs7Ozs7O0lDUGhILDhCQUdvQyxjQUFBO0lBQ2EsWUFBd0M7O0lBQUEsaUJBQU8sRUFBQTs7O0lBRjlGLHdHQUE0RDtJQUViLGVBQXdDO0lBQXhDLHlFQUF3Qzs7OztJQWtCM0YsNERBR2dDO0lBRDlCLDZQQUFpQixlQUFBLHNCQUFlLENBQUEsSUFBQztJQUNILGlCQUFvQzs7O0lBQWxFLGtEQUE2Qjs7O0lBRTdCLCtCQUFtSCxjQUFBO0lBQ2xFLFlBQXNDOztJQUFBLGlCQUFPLEVBQUE7OztJQUE3QyxlQUFzQztJQUF0Qyx1RUFBc0M7Ozs7SUFFdkYsNERBbUJzQztJQVZwQyxvUkFBdUIsZUFBQSx5Q0FBa0MsQ0FBQSxJQUFDLGlQQUc5QyxlQUFBLDRCQUFxQixDQUFBLElBSHlCO0lBVzVELGlCQUFtQzs7O0lBbEJqQyxrREFBNkIsK0JBQUEsK0JBQUEsMkJBQUEsb0RBQUEseUNBQUEsa0RBQUEscUNBQUEsMkNBQUEsbUNBQUEscUNBQUEscUNBQUEsdURBQUEsK0NBQUEscURBQUEsMkNBQUE7OztJQU5qQyw4QkFBdUU7SUFDckUsK0ZBRU0sNklBQUE7SUFzQlIsaUJBQU07OztJQXhCK0UsY0FBOEI7SUFBOUIsc0RBQThCO0lBSTlHLGNBQThDO0lBQTlDLHFKQUE4Qzs7QURYckQsTUFBTSxPQUFPLHVDQUNYLFNBQVEsNENBQXFGO0lBRzdGLFlBQVksQ0FBUztJQUNyQixLQUFLLENBQVU7SUFDTixTQUFTLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUM3QixPQUFPLENBQU87SUFDZCxTQUFTLENBQStCO0lBQ3hDLGNBQWMsQ0FBUztJQUN2QixZQUFZLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDcEIsU0FBUyxDQUFXO0lBQ3BCLFdBQVcsQ0FBK0I7SUFDMUMsWUFBWSxDQUFVO0lBQ3RCLFlBQVksQ0FBUztJQUNyQixlQUFlLENBQVU7SUFDekIsb0JBQW9CLENBQVU7SUFDOUIsWUFBWSxDQUFTO0lBQ3JCLHFCQUFxQixDQUE0QjtJQUNqRCxpQkFBaUIsQ0FBVTtJQUMxQixRQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUM5Qix1QkFBdUIsR0FBRyxJQUFJLFlBQVksRUFBeUIsQ0FBQztJQUNwRSxRQUFRLEdBQUcsSUFBSSxZQUFZLEVBQTZCLENBQUM7SUFFbkUsZUFBZSxHQUFHLEVBQUUsQ0FBQztJQUNyQixpQkFBaUIsR0FBRyxFQUFFLENBQUM7SUFDdkIsb0JBQW9CLEdBQUcsRUFBRSxDQUFDO0lBQzFCLHNCQUFzQixHQUFHLEVBQUUsQ0FBQztJQUU1Qix1QkFBdUIsQ0FBOEI7SUFDckQseUJBQXlCLENBQXNCO0lBQy9DLE9BQU8sR0FBeUIsRUFBRSxDQUFDO0lBQ25DLGdCQUFnQixHQUFHLGlDQUFpQyxDQUFDO0lBRXJEO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQsc0JBQXNCLENBQUMscUJBQTRDO1FBQ2pFLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLGVBQWUsRUFBRSxFQUFFO1lBQ3JFLE9BQU8sQ0FDTCxxQkFBcUIsQ0FBQyxJQUFJO2dCQUMxQix1Q0FBdUMsQ0FBQyx3QkFBd0IsQ0FBQyxlQUFlLEVBQUUscUJBQXFCLENBQUMsQ0FDekcsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDNUQsT0FBTyxNQUFNLEtBQUsscUJBQXFCLENBQUMsTUFBTSxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCwwQkFBMEIsQ0FBQyxlQUEyQztRQUNwRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsdUJBQXVCLEdBQUcsZUFBZSxDQUFDO1FBQzlELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRU8sTUFBTSxDQUFDLHdCQUF3QixDQUFDLElBQWdDLEVBQUUsWUFBbUM7UUFDM0csT0FBTyxDQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssWUFBWSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUU7WUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxZQUFZLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRTtZQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLFlBQVksQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLENBQzdELENBQUM7SUFDSixDQUFDO0lBRU0sc0JBQXNCO1FBQzNCLE9BQU8sSUFBSSxxQkFBcUIsQ0FDOUIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQ3ZFLElBQUksQ0FBQyx5QkFBeUIsSUFBSSxJQUFJLENBQ3ZDLENBQUM7SUFDSixDQUFDO0lBRU8sZUFBZTtRQUNyQixNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbkIsT0FBTyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QyxPQUFPLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0MsT0FBTyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QyxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELGVBQWUsQ0FBQyxNQUFpQztRQUMvQyxLQUFLLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7aUdBeEZVLHVDQUF1Qzs2REFBdkMsdUNBQXVDLDBxQkFSdkM7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx1Q0FBdUMsQ0FBQztvQkFDdEUsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDRjtZQ3BCSCw4QkFBZ0MsYUFBQTtZQUU1Qix3RkFLTTtZQUNOLDZEQWEwQztZQVB4Qyx3S0FBa0Isd0NBQW9DLElBQUMsK0lBQzNDLHlCQUFxQixJQURzQiwrSUFJM0MsMkJBQXVCLElBSm9CO1lBUXpELGlCQUFxQyxFQUFBO1lBRXZDLG9KQUdvRSwyRUFBQTtZQTJCdEUsaUJBQU07O1lBakRDLGVBQStCO1lBQS9CLG9EQUErQjtZQUloQyxjQUE2QjtZQUE3QiwrQ0FBNkIsNEJBQUEsNEJBQUEsd0JBQUEsaURBQUEsa0NBQUEsZ0NBQUEsNENBQUEsa0RBQUEsNENBQUE7WUFnQjlCLGNBQWdEO1lBQWhELDJJQUFnRDtZQUdiLGNBQStCO1lBQS9CLG9EQUErQjs7O2lGRE4xRCx1Q0FBdUM7Y0FYbkQsU0FBUzsyQkFDRSxxQ0FBcUMsYUFFcEM7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsd0NBQXdDLENBQUM7d0JBQ3RFLEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO29CQVFRLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxvQkFBb0I7a0JBQTVCLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0cscUJBQXFCO2tCQUE3QixLQUFLO1lBQ0csaUJBQWlCO2tCQUF6QixLQUFLO1lBQ0ksUUFBUTtrQkFBakIsTUFBTTtZQUNHLHVCQUF1QjtrQkFBaEMsTUFBTTtZQUNHLFFBQVE7a0JBQWpCLE1BQU07O2tGQXZCSSx1Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBcHBvaW50bWVudFBpY2tlclR5cGVFbnVtIH0gZnJvbSAnLi4vYXBwb2ludG1lbnQtcGlja2VyLXR5cGUuZW51bSc7XG5pbXBvcnQgeyBBcHBvaW50bWVudFBpY2tlckNvbXBvbmVudEludGVyZmFjZSB9IGZyb20gJy4uL2FwcG9pbnRtZW50LXBpY2tlci1jb21wb25lbnQuaW50ZXJmYWNlJztcbmltcG9ydCB7IEFwcG9pbnRtZW50VHJhbnNmb3JtZXJTbG90IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzJztcbmltcG9ydCB7IEFwcG9pbnRtZW50U2xvdE9wdGlvbiB9IGZyb20gJy4uL2FwcG9pbnRtZW50LXNsb3Qtb3B0aW9uLm1vZGVsJztcbmltcG9ydCB7IFRpbWVzbG90TW9tZW50RW51bSB9IGZyb20gJy4uLy4uLy4uL2VudW1zJztcbmltcG9ydCB7IEFwcG9pbnRtZW50UGlja2VyQ29uc3VtZXJUeXBlRW51bSB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgQXBwb2ludG1lbnRQaWNrZXJCeVRlbXBvcmFsQ29tcG9uZW50SW50ZXJmYWNlIH0gZnJvbSAnLi4vYXBwb2ludG1lbnQtcGlja2VyLWJ5LXRlbXBvcmFsLWNvbXBvbmVudC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQWJzdHJhY3RBcHBvaW50bWVudFBpY2tlckJ5VGVtcG9yYWxDb21wb25lbnQgfSBmcm9tICcuLi9hYnN0cmFjdC1hcHBvaW50bWVudC1waWNrZXItYnktdGVtcG9yYWwuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWZvcm0tYXBwb2ludG1lbnQtcGlja2VyLWJ5LWRhdGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQtYXBwb2ludG1lbnQtcGlja2VyLWJ5LW1vbWVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBJbnB1dEFwcG9pbnRtZW50UGlja2VyQnlNb21lbnRDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRBcHBvaW50bWVudFBpY2tlckJ5TW9tZW50Q29tcG9uZW50XG4gIGV4dGVuZHMgQWJzdHJhY3RBcHBvaW50bWVudFBpY2tlckJ5VGVtcG9yYWxDb21wb25lbnQ8SW5wdXRBcHBvaW50bWVudFBpY2tlckJ5TW9tZW50Q29tcG9uZW50PlxuICBpbXBsZW1lbnRzIEFwcG9pbnRtZW50UGlja2VyQ29tcG9uZW50SW50ZXJmYWNlLCBBcHBvaW50bWVudFBpY2tlckJ5VGVtcG9yYWxDb21wb25lbnRJbnRlcmZhY2VcbntcbiAgbWVzc2FnZUdyb3VwOiBzdHJpbmc7XG4gIGVycm9yOiB1bmtub3duO1xuICBASW5wdXQoKSBzdGFydERhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xuICBASW5wdXQoKSBlbmREYXRlOiBEYXRlO1xuICBASW5wdXQoKSB0aW1lc2xvdHM6IEFwcG9pbnRtZW50VHJhbnNmb3JtZXJTbG90W107XG4gIEBJbnB1dCgpIHNsaWRlc1RvU2Nyb2xsOiBudW1iZXI7XG4gIEBJbnB1dCgpIGluaXRpYWxTbGlkZSA9IDA7XG4gIEBJbnB1dCgpIGluaXRpYWxpc2VkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGxhYmVsS2V5czogc3RyaW5nW107XG4gIEBJbnB1dCgpIHVwZGF0ZVNsb3RzOiBBcHBvaW50bWVudFRyYW5zZm9ybWVyU2xvdFtdO1xuICBASW5wdXQoKSBzaG93TG9hZE1vcmU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGNvbnN1bWVyVHlwZTogc3RyaW5nO1xuICBASW5wdXQoKSBkaXNhYmxlTG9hZE1vcmU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGVuYWJsZUFwcG9pbnRtZW50c1VJOiBib29sZWFuO1xuICBASW5wdXQoKSBzbGlkZXNUb1Nob3c6IG51bWJlcjtcbiAgQElucHV0KCkgYXBwb2ludG1lbnRQaWNrZXJUeXBlOiBBcHBvaW50bWVudFBpY2tlclR5cGVFbnVtO1xuICBASW5wdXQoKSBpc0RldmljZUxhbmRzY2FwZTogYm9vbGVhbjtcbiAgQE91dHB1dCgpIGxvYWRNb3JlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgYXBwb2ludG1lbnRTbG90U2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEFwcG9pbnRtZW50U2xvdE9wdGlvbj4oKTtcbiAgQE91dHB1dCgpIHNjcm9sbFRvID0gbmV3IEV2ZW50RW1pdHRlcjxBcHBvaW50bWVudFBpY2tlclR5cGVFbnVtPigpO1xuXG4gIGRhdGVQaWNrZXJMYWJlbCA9ICcnO1xuICBtb21lbnRQaWNrZXJMYWJlbCA9ICcnO1xuICBkYXRlUGlja2VyRXJyb3JMYWJlbCA9ICcnO1xuICBtb21lbnRQaWNrZXJFcnJvckxhYmVsID0gJyc7XG5cbiAgc2VsZWN0ZWRBcHBvaW50bWVudFNsb3Q/OiBBcHBvaW50bWVudFRyYW5zZm9ybWVyU2xvdDtcbiAgc2VsZWN0ZWRBcHBvaW50bWVudE1vbWVudD86IFRpbWVzbG90TW9tZW50RW51bTtcbiAgbW9tZW50czogVGltZXNsb3RNb21lbnRFbnVtW10gPSBbXTtcbiAgY29uc3VtZXJUeXBlRW51bSA9IEFwcG9pbnRtZW50UGlja2VyQ29uc3VtZXJUeXBlRW51bTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubW9tZW50cyA9IHRoaXMuZ2VuZXJhdGVNb21lbnRzKCk7XG4gIH1cblxuICBzZXRTZWxlY3RlZEFwcG9pbnRtZW50KGFwcG9pbnRtZW50U2xvdE9wdGlvbjogQXBwb2ludG1lbnRTbG90T3B0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZEFwcG9pbnRtZW50U2xvdCA9IHRoaXMudGltZXNsb3RzLmZpbmQoKGFwcG9pbnRtZW50U2xvdCkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgYXBwb2ludG1lbnRTbG90T3B0aW9uLmRhdGUgJiZcbiAgICAgICAgSW5wdXRBcHBvaW50bWVudFBpY2tlckJ5TW9tZW50Q29tcG9uZW50LmlzU2VsZWN0ZWRTbG90c0F2YWlsYWJsZShhcHBvaW50bWVudFNsb3QsIGFwcG9pbnRtZW50U2xvdE9wdGlvbilcbiAgICAgICk7XG4gICAgfSk7XG4gICAgdGhpcy5zZWxlY3RlZEFwcG9pbnRtZW50TW9tZW50ID0gdGhpcy5tb21lbnRzLmZpbmQoKG1vbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIG1vbWVudCA9PT0gYXBwb2ludG1lbnRTbG90T3B0aW9uLm1vbWVudDtcbiAgICB9KTtcbiAgICB0aGlzLnNldElucHV0VmFsdWUoKTtcbiAgfVxuXG4gIHNldFNlbGVjdGVkQXBwb2ludG1lbnRTbG90KGFwcG9pbnRtZW50U2xvdDogQXBwb2ludG1lbnRUcmFuc2Zvcm1lclNsb3QpOiB2b2lkIHtcbiAgICB0aGlzLmdldENvbXBvbmVudCgpLnNlbGVjdGVkQXBwb2ludG1lbnRTbG90ID0gYXBwb2ludG1lbnRTbG90O1xuICAgIHRoaXMuc2V0SW5wdXRWYWx1ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgaXNTZWxlY3RlZFNsb3RzQXZhaWxhYmxlKHNsb3Q6IEFwcG9pbnRtZW50VHJhbnNmb3JtZXJTbG90LCBzZWxlY3RlZFNsb3Q6IEFwcG9pbnRtZW50U2xvdE9wdGlvbikge1xuICAgIHJldHVybiAoXG4gICAgICBzbG90LmRhdGUuZ2V0RGF0ZSgpID09PSBzZWxlY3RlZFNsb3QuZGF0ZT8uZ2V0RGF0ZSgpICYmXG4gICAgICBzbG90LmRhdGUuZ2V0TW9udGgoKSA9PT0gc2VsZWN0ZWRTbG90LmRhdGU/LmdldE1vbnRoKCkgJiZcbiAgICAgIHNsb3QuZGF0ZS5nZXRGdWxsWWVhcigpID09PSBzZWxlY3RlZFNsb3QuZGF0ZT8uZ2V0RnVsbFllYXIoKVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgZ2V0U2VsZWN0ZWRBcHBvaW50bWVudCgpOiBBcHBvaW50bWVudFNsb3RPcHRpb24ge1xuICAgIHJldHVybiBuZXcgQXBwb2ludG1lbnRTbG90T3B0aW9uKFxuICAgICAgdGhpcy5zZWxlY3RlZEFwcG9pbnRtZW50U2xvdCA/IHRoaXMuc2VsZWN0ZWRBcHBvaW50bWVudFNsb3QuZGF0ZSA6IG51bGwsXG4gICAgICB0aGlzLnNlbGVjdGVkQXBwb2ludG1lbnRNb21lbnQgPz8gbnVsbFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdlbmVyYXRlTW9tZW50cygpOiBUaW1lc2xvdE1vbWVudEVudW1bXSB7XG4gICAgY29uc3QgbW9tZW50cyA9IFtdO1xuICAgIG1vbWVudHMucHVzaChUaW1lc2xvdE1vbWVudEVudW0uTU9STklORyk7XG4gICAgbW9tZW50cy5wdXNoKFRpbWVzbG90TW9tZW50RW51bS5MVU5DSCk7XG4gICAgbW9tZW50cy5wdXNoKFRpbWVzbG90TW9tZW50RW51bS5BRlRFUk5PT04pO1xuICAgIG1vbWVudHMucHVzaChUaW1lc2xvdE1vbWVudEVudW0uRVZFTklORyk7XG4gICAgcmV0dXJuIG1vbWVudHM7XG4gIH1cblxuICBnZXRDb21wb25lbnQoKTogSW5wdXRBcHBvaW50bWVudFBpY2tlckJ5TW9tZW50Q29tcG9uZW50IHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNjcm9sbFNlY3Rpb25UbygkZXZlbnQ6IEFwcG9pbnRtZW50UGlja2VyVHlwZUVudW0pIHtcbiAgICBzdXBlci5zY3JvbGxUb1NlY3Rpb24oJGV2ZW50KTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImFwcG9pbnRtZW50LXBpY2tlclwiPlxuICA8ZGl2IGNsYXNzPVwic2VjdGlvbi10aW1lIG14LS14cy0tbWRcIj5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cIm5vdGlmaWNhdGlvbiBub3RpZmljYXRpb24tLWVycm9yZmllbGQgbm90aWZpY2F0aW9uLS1lcnJvcmZpZWxkLS1mbG93XCJcbiAgICAgIFtuZ0NsYXNzXT1cInsnbWItMTUnIDogY29uc3VtZXJUeXBlID09PSBjb25zdW1lclR5cGVFbnVtLk5DfVwiXG4gICAgICAqbmdJZj1cImhhc0Vycm9yKCdzbG90X3JlcXVpcmVkJylcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpY29uLWVycm9yLXNoYXBlIGVycm9yZmllbGRcIj57eyBtb21lbnRQaWNrZXJFcnJvckxhYmVsIHwgdHJhbnNsYXRlIH19PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxhcHAtZm9ybS1hcHBvaW50bWVudC1tb21lbnQtcGlja2VyXG4gICAgICBbbWVzc2FnZUdyb3VwXT1cIm1lc3NhZ2VHcm91cFwiXG4gICAgICBbdGltZXNsb3RzXT1cInRpbWVzbG90c1wiXG4gICAgICBbc3RhcnREYXRlXT1cInN0YXJ0RGF0ZVwiXG4gICAgICBbZW5kRGF0ZV09XCJlbmREYXRlXCJcbiAgICAgIFtzZWxlY3RlZE1vbWVudF09XCJzZWxlY3RlZEFwcG9pbnRtZW50TW9tZW50XCJcbiAgICAgIChtb21lbnRTZWxlY3RlZCk9XCJzZXRTZWxlY3RlZEFwcG9pbnRtZW50TW9tZW50KCRldmVudClcIlxuICAgICAgKGxvYWRNb3JlKT1cImxvYWRNb3JlU2xvdHMoJGV2ZW50KVwiXG4gICAgICBbY29uc3VtZXJUeXBlXT1cImNvbnN1bWVyVHlwZVwiXG4gICAgICBbdXBkYXRlU2xvdHNdPVwidXBkYXRlU2xvdHNcIlxuICAgICAgKHNjcm9sbFRvKT1cInNjcm9sbFNlY3Rpb25UbygkZXZlbnQpXCJcbiAgICAgIFtpc0RldmljZUxhbmRzY2FwZV09XCJpc0RldmljZUxhbmRzY2FwZVwiXG4gICAgICBbZW5hYmxlQXBwb2ludG1lbnRzVUldPVwiZW5hYmxlQXBwb2ludG1lbnRzVUlcIlxuICAgICAgW21vbWVudFBpY2tlckxhYmVsXT1cIm1vbWVudFBpY2tlckxhYmVsXCI+XG4gICAgPC9hcHAtZm9ybS1hcHBvaW50bWVudC1tb21lbnQtcGlja2VyPlxuICA8L2Rpdj5cbiAgPGFwcC1uby1hdmFpbGFibGUtYXBwb2ludG1lbnQtZGF0ZVxuICAgICpuZ0lmPVwiIXRpbWVzbG90cz8ubGVuZ3RoIHx8ICF1cGRhdGVTbG90cz8ubGVuZ3RoXCJcbiAgICAobG9hZE1vcmVTbG90cyk9XCJsb2FkTW9yZVNsb3RzKClcIlxuICAgIFttZXNzYWdlR3JvdXBdPVwibWVzc2FnZUdyb3VwXCI+PC9hcHAtbm8tYXZhaWxhYmxlLWFwcG9pbnRtZW50LWRhdGU+XG4gIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWRhdGUgbXgtLXhzLS1tZFwiICpuZ0lmPVwic2VsZWN0ZWRBcHBvaW50bWVudE1vbWVudFwiPlxuICAgIDxkaXYgY2xhc3M9XCJub3RpZmljYXRpb24gbm90aWZpY2F0aW9uLS1lcnJvcmZpZWxkIG5vdGlmaWNhdGlvbi0tZXJyb3JmaWVsZC0tZmxvd1wiICpuZ0lmPVwiaGFzRXJyb3IoJ2RheV9yZXF1aXJlZCcpXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImljb24gaWNvbi1lcnJvci1zaGFwZSBlcnJvcmZpZWxkXCI+e3sgZGF0ZVBpY2tlckVycm9yTGFiZWwgfCB0cmFuc2xhdGUgfX08L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGFwcC1mb3JtLWFwcG9pbnRtZW50LWRhdGUtcGlja2VyXG4gICAgICAqbmdJZj1cInRpbWVzbG90cz8ubGVuZ3RoIHx8IHVwZGF0ZVNsb3RzPy5sZW5ndGhcIlxuICAgICAgW21lc3NhZ2VHcm91cF09XCJtZXNzYWdlR3JvdXBcIlxuICAgICAgW3RpbWVzbG90c109XCJ0aW1lc2xvdHNcIlxuICAgICAgW3N0YXJ0RGF0ZV09XCJzdGFydERhdGVcIlxuICAgICAgW2VuZERhdGVdPVwiZW5kRGF0ZVwiXG4gICAgICBbc2VsZWN0ZWRUaW1lc2xvdF09XCJzZWxlY3RlZEFwcG9pbnRtZW50U2xvdFwiXG4gICAgICBbc2xpZGVzVG9TY3JvbGxdPVwic2xpZGVzVG9TY3JvbGxcIlxuICAgICAgW21vbWVudEZpbHRlcl09XCJzZWxlY3RlZEFwcG9pbnRtZW50TW9tZW50XCJcbiAgICAgIChhcHBvaW50bWVudFNlbGVjdGVkKT1cInNldFNlbGVjdGVkQXBwb2ludG1lbnRTbG90KCRldmVudClcIlxuICAgICAgW3Nob3dMb2FkTW9yZV09XCJzaG93TG9hZE1vcmVcIlxuICAgICAgW2Rpc2FibGVMb2FkTW9yZV09XCJkaXNhYmxlTG9hZE1vcmVcIlxuICAgICAgKGxvYWRNb3JlKT1cImxvYWRNb3JlU2xvdHMoJGV2ZW50KVwiXG4gICAgICBbdXBkYXRlU2xvdHNdPVwidXBkYXRlU2xvdHNcIlxuICAgICAgW2NvbnN1bWVyVHlwZV09XCJjb25zdW1lclR5cGVcIlxuICAgICAgW3NsaWRlc1RvU2hvd109XCJzbGlkZXNUb1Nob3dcIlxuICAgICAgW2FwcG9pbnRtZW50UGlja2VyVHlwZV09XCJhcHBvaW50bWVudFBpY2tlclR5cGVcIlxuICAgICAgW2lzRGV2aWNlTGFuZHNjYXBlXT1cImlzRGV2aWNlTGFuZHNjYXBlXCJcbiAgICAgIFtlbmFibGVBcHBvaW50bWVudHNVSV09XCJlbmFibGVBcHBvaW50bWVudHNVSVwiXG4gICAgICBbZGF0ZVBpY2tlckxhYmVsXT1cImRhdGVQaWNrZXJMYWJlbFwiPlxuICAgIDwvYXBwLWZvcm0tYXBwb2ludG1lbnQtZGF0ZS1waWNrZXI+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=