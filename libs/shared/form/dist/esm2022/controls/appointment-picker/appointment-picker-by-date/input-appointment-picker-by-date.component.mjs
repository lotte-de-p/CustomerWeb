import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AppointmentSlotOption } from '../appointment-slot-option.model';
import { AppointmentPickerConsumerTypeEnum } from '../../../interfaces';
import { AbstractAppointmentPickerByTemporalComponent } from '../abstract-appointment-picker-by-temporal.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../input-appointment-date-picker/input-appointment-date-picker.component";
import * as i3 from "../input-appointment-moment-picker/input-appointment-moment-picker.component";
import * as i4 from "../../../errors/message-group.directive";
import * as i5 from "../no-available-appointment-date/no-available-appointment-date.component";
import * as i6 from "@ngx-translate/core";
function InputAppointmentPickerByDateComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "span", 7);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 1, ctx_r0.datePickerErrorLabel));
} }
function InputAppointmentPickerByDateComponent_app_no_available_appointment_date_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-no-available-appointment-date", 8);
    i0.ɵɵlistener("loadMoreSlots", function InputAppointmentPickerByDateComponent_app_no_available_appointment_date_3_Template_app_no_available_appointment_date_loadMoreSlots_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.loadMoreSlots()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("messageGroup", ctx_r1.messageGroup);
} }
function InputAppointmentPickerByDateComponent_app_form_appointment_date_picker_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-form-appointment-date-picker", 9);
    i0.ɵɵlistener("appointmentSelected", function InputAppointmentPickerByDateComponent_app_form_appointment_date_picker_4_Template_app_form_appointment_date_picker_appointmentSelected_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.setSelectedAppointmentSlot($event)); })("loadMore", function InputAppointmentPickerByDateComponent_app_form_appointment_date_picker_4_Template_app_form_appointment_date_picker_loadMore_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.loadMoreSlots($event)); })("scrollTo", function InputAppointmentPickerByDateComponent_app_form_appointment_date_picker_4_Template_app_form_appointment_date_picker_scrollTo_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r9 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r9.scrollToSection($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("messageGroup", ctx_r2.messageGroup)("timeslots", ctx_r2.timeslots)("startDate", ctx_r2.startDate)("endDate", ctx_r2.endDate)("slidesToScroll", ctx_r2.slidesToScroll)("selectedTimeslot", ctx_r2.selectedAppointmentSlot)("initialSlide", ctx_r2.initialSlide)("showLoadMore", ctx_r2.showLoadMore)("updateSlots", ctx_r2.updateSlots)("consumerType", ctx_r2.consumerType)("disableLoadMore", ctx_r2.disableLoadMore)("slidesToShow", ctx_r2.slidesToShow)("appointmentPickerType", ctx_r2.appointmentPickerType)("isDeviceLandscape", ctx_r2.isDeviceLandscape)("enableAppointmentsUI", ctx_r2.enableAppointmentsUI)("datePickerLabel", ctx_r2.datePickerLabel);
} }
const _c0 = a0 => ({ "mb-15": a0 });
function InputAppointmentPickerByDateComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13)(1, "span", 7);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c0, ctx_r10.consumerType === ctx_r10.consumerTypeEnum.NC));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 2, ctx_r10.momentPickerErrorLabel));
} }
function InputAppointmentPickerByDateComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtemplate(1, InputAppointmentPickerByDateComponent_div_5_div_1_Template, 4, 6, "div", 11);
    i0.ɵɵelementStart(2, "app-form-appointment-moment-picker", 12);
    i0.ɵɵlistener("momentSelected", function InputAppointmentPickerByDateComponent_div_5_Template_app_form_appointment_moment_picker_momentSelected_2_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r11.setSelectedAppointmentMoment($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.hasError("slot_required"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("messageGroup", ctx_r3.messageGroup)("startDate", ctx_r3.startDate)("endDate", ctx_r3.endDate)("timeslots", ctx_r3.timeslots)("updateSlots", ctx_r3.updateSlots)("selectedTimeslot", ctx_r3.selectedAppointmentSlot)("selectedMoment", ctx_r3.selectedAppointmentMoment)("consumerType", ctx_r3.consumerType)("isDeviceLandscape", ctx_r3.isDeviceLandscape)("enableAppointmentsUI", ctx_r3.enableAppointmentsUI)("momentPickerLabel", ctx_r3.momentPickerLabel);
} }
export class InputAppointmentPickerByDateComponent extends AbstractAppointmentPickerByTemporalComponent {
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
    appointmentSlotSelected = new EventEmitter();
    loadMore = new EventEmitter();
    scrollTo = new EventEmitter();
    datePickerLabel = '';
    momentPickerLabel = '';
    datePickerErrorLabel = '';
    momentPickerErrorLabel = '';
    selectedAppointmentSlot;
    selectedAppointmentMoment;
    consumerTypeEnum = AppointmentPickerConsumerTypeEnum;
    setSelectedAppointment(appointmentSlotOption) {
        if (appointmentSlotOption.date || appointmentSlotOption.moment) {
            this.selectedAppointmentSlot = this.timeslots.find((appointmentSlot) => {
                return (appointmentSlot.date.getDate() === appointmentSlotOption.date?.getDate() &&
                    appointmentSlot.date.getMonth() === appointmentSlotOption.date?.getMonth() &&
                    appointmentSlot.date.getFullYear() === appointmentSlotOption.date?.getFullYear());
            });
            if (this.selectedAppointmentSlot) {
                this.selectedAppointmentSlot.timeSlots.forEach((moment) => {
                    if (moment.code === appointmentSlotOption.moment) {
                        this.selectedAppointmentMoment = moment.code;
                    }
                });
                this.setInputValue();
            }
        }
    }
    setSelectedAppointmentSlot(appointmentSlot) {
        this.getComponent().selectedAppointmentSlot = appointmentSlot;
        this.getComponent().selectedAppointmentMoment = undefined;
        this.setInputValue();
    }
    getSelectedAppointment() {
        return new AppointmentSlotOption(this.selectedAppointmentSlot?.date || null, this.selectedAppointmentMoment);
    }
    getComponent() {
        return this;
    }
    static ɵfac = /*@__PURE__*/ (() => { let ɵInputAppointmentPickerByDateComponent_BaseFactory; return function InputAppointmentPickerByDateComponent_Factory(t) { return (ɵInputAppointmentPickerByDateComponent_BaseFactory || (ɵInputAppointmentPickerByDateComponent_BaseFactory = i0.ɵɵgetInheritedFactory(InputAppointmentPickerByDateComponent)))(t || InputAppointmentPickerByDateComponent); }; })();
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputAppointmentPickerByDateComponent, selectors: [["app-form-appointment-picker-by-date"]], inputs: { error: "error", startDate: "startDate", endDate: "endDate", timeslots: "timeslots", slidesToScroll: "slidesToScroll", initialSlide: "initialSlide", initialised: "initialised", labelKeys: "labelKeys", updateSlots: "updateSlots", showLoadMore: "showLoadMore", consumerType: "consumerType", disableLoadMore: "disableLoadMore", enableAppointmentsUI: "enableAppointmentsUI", slidesToShow: "slidesToShow", appointmentPickerType: "appointmentPickerType", isDeviceLandscape: "isDeviceLandscape" }, outputs: { appointmentSlotSelected: "appointmentSlotSelected", loadMore: "loadMore", scrollTo: "scrollTo" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputAppointmentPickerByDateComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 4, consts: [[1, "section-date", "mx--xs--md"], [1, "mt--m"], ["class", "notification notification--errorfield notification--errorfield--flow", 4, "ngIf"], [3, "messageGroup", "loadMoreSlots", 4, "ngIf"], [3, "messageGroup", "timeslots", "startDate", "endDate", "slidesToScroll", "selectedTimeslot", "initialSlide", "showLoadMore", "updateSlots", "consumerType", "disableLoadMore", "slidesToShow", "appointmentPickerType", "isDeviceLandscape", "enableAppointmentsUI", "datePickerLabel", "appointmentSelected", "loadMore", "scrollTo", 4, "ngIf"], ["class", "section-time mx--xs--md", 4, "ngIf"], [1, "notification", "notification--errorfield", "notification--errorfield--flow"], [1, "icon", "icon-error-shape", "errorfield"], [3, "messageGroup", "loadMoreSlots"], [3, "messageGroup", "timeslots", "startDate", "endDate", "slidesToScroll", "selectedTimeslot", "initialSlide", "showLoadMore", "updateSlots", "consumerType", "disableLoadMore", "slidesToShow", "appointmentPickerType", "isDeviceLandscape", "enableAppointmentsUI", "datePickerLabel", "appointmentSelected", "loadMore", "scrollTo"], [1, "section-time", "mx--xs--md"], ["class", "notification notification--errorfield notification--errorfield--flow", 3, "ngClass", 4, "ngIf"], [3, "messageGroup", "startDate", "endDate", "timeslots", "updateSlots", "selectedTimeslot", "selectedMoment", "consumerType", "isDeviceLandscape", "enableAppointmentsUI", "momentPickerLabel", "momentSelected"], [1, "notification", "notification--errorfield", "notification--errorfield--flow", 3, "ngClass"]], template: function InputAppointmentPickerByDateComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵtemplate(2, InputAppointmentPickerByDateComponent_div_2_Template, 4, 3, "div", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, InputAppointmentPickerByDateComponent_app_no_available_appointment_date_3_Template, 1, 1, "app-no-available-appointment-date", 3)(4, InputAppointmentPickerByDateComponent_app_form_appointment_date_picker_4_Template, 1, 16, "app-form-appointment-date-picker", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, InputAppointmentPickerByDateComponent_div_5_Template, 3, 12, "div", 5);
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.hasError("day_required"));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !(ctx.timeslots == null ? null : ctx.timeslots.length) && !(ctx.updateSlots == null ? null : ctx.updateSlots.length));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.initialised && ((ctx.timeslots == null ? null : ctx.timeslots.length) || (ctx.updateSlots == null ? null : ctx.updateSlots.length)));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.selectedAppointmentSlot);
        } }, dependencies: [i1.NgClass, i1.NgIf, i2.InputAppointmentDatePickerComponent, i3.InputAppointmentMomentPickerComponent, i4.MessageGroupDirective, i5.NoAvailableAppointmentDateComponent, i6.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputAppointmentPickerByDateComponent, [{
        type: Component,
        args: [{ selector: 'app-form-appointment-picker-by-date', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputAppointmentPickerByDateComponent),
                        multi: true,
                    },
                ], template: "<div class=\"section-date mx--xs--md\">\n  <div class=\"mt--m\">\n    <div class=\"notification notification--errorfield notification--errorfield--flow\" *ngIf=\"hasError('day_required')\">\n      <span class=\"icon icon-error-shape errorfield\">{{ datePickerErrorLabel | translate }}</span>\n    </div>\n  </div>\n  <app-no-available-appointment-date\n    *ngIf=\"!timeslots?.length && !updateSlots?.length\"\n    (loadMoreSlots)=\"loadMoreSlots()\"\n    [messageGroup]=\"messageGroup\"></app-no-available-appointment-date>\n  <app-form-appointment-date-picker\n    *ngIf=\"initialised && (timeslots?.length || updateSlots?.length)\"\n    [messageGroup]=\"messageGroup\"\n    [timeslots]=\"timeslots\"\n    [startDate]=\"startDate\"\n    [endDate]=\"endDate\"\n    [slidesToScroll]=\"slidesToScroll\"\n    [selectedTimeslot]=\"selectedAppointmentSlot\"\n    [initialSlide]=\"initialSlide\"\n    (appointmentSelected)=\"setSelectedAppointmentSlot($event)\"\n    [showLoadMore]=\"showLoadMore\"\n    (loadMore)=\"loadMoreSlots($event)\"\n    [updateSlots]=\"updateSlots\"\n    [consumerType]=\"consumerType\"\n    [disableLoadMore]=\"disableLoadMore\"\n    (scrollTo)=\"scrollToSection($event)\"\n    [slidesToShow]=\"slidesToShow\"\n    [appointmentPickerType]=\"appointmentPickerType\"\n    [isDeviceLandscape]=\"isDeviceLandscape\"\n    [enableAppointmentsUI]=\"enableAppointmentsUI\"\n    [datePickerLabel]=\"datePickerLabel\">\n  </app-form-appointment-date-picker>\n</div>\n<div class=\"section-time mx--xs--md\" *ngIf=\"selectedAppointmentSlot\">\n  <div\n    class=\"notification notification--errorfield notification--errorfield--flow\"\n    [ngClass]=\"{'mb-15' : consumerType === consumerTypeEnum.NC}\"\n    *ngIf=\"hasError('slot_required')\">\n    <span class=\"icon icon-error-shape errorfield\">{{ momentPickerErrorLabel | translate }}</span>\n  </div>\n  <app-form-appointment-moment-picker\n    [messageGroup]=\"messageGroup\"\n    [startDate]=\"startDate\"\n    [endDate]=\"endDate\"\n    [timeslots]=\"timeslots\"\n    [updateSlots]=\"updateSlots\"\n    [selectedTimeslot]=\"selectedAppointmentSlot\"\n    [selectedMoment]=\"selectedAppointmentMoment\"\n    (momentSelected)=\"setSelectedAppointmentMoment($event)\"\n    [consumerType]=\"consumerType\"\n    [isDeviceLandscape]=\"isDeviceLandscape\"\n    [enableAppointmentsUI]=\"enableAppointmentsUI\"\n    [momentPickerLabel]=\"momentPickerLabel\">\n  </app-form-appointment-moment-picker>\n</div>\n" }]
    }], null, { error: [{
            type: Input
        }], startDate: [{
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
        }], appointmentSlotSelected: [{
            type: Output
        }], loadMore: [{
            type: Output
        }], scrollTo: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputAppointmentPickerByDateComponent, { className: "InputAppointmentPickerByDateComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtYXBwb2ludG1lbnQtcGlja2VyLWJ5LWRhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xzL2FwcG9pbnRtZW50LXBpY2tlci9hcHBvaW50bWVudC1waWNrZXItYnktZGF0ZS9pbnB1dC1hcHBvaW50bWVudC1waWNrZXItYnktZGF0ZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9zcmMvY29udHJvbHMvYXBwb2ludG1lbnQtcGlja2VyL2FwcG9pbnRtZW50LXBpY2tlci1ieS1kYXRlL2lucHV0LWFwcG9pbnRtZW50LXBpY2tlci1ieS1kYXRlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLbkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDekUsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFeEUsT0FBTyxFQUFFLDRDQUE0QyxFQUFFLE1BQU0sc0RBQXNELENBQUM7Ozs7Ozs7OztJQ1BoSCw4QkFBbUgsY0FBQTtJQUNsRSxZQUFzQzs7SUFBQSxpQkFBTyxFQUFBOzs7SUFBN0MsZUFBc0M7SUFBdEMsdUVBQXNDOzs7O0lBR3pGLDREQUdnQztJQUQ5QiwyUEFBaUIsZUFBQSxzQkFBZSxDQUFBLElBQUM7SUFDSCxpQkFBb0M7OztJQUFsRSxrREFBNkI7Ozs7SUFDL0IsMkRBb0JzQztJQVhwQywyUUFBdUIsZUFBQSx5Q0FBa0MsQ0FBQSxJQUFDLHdPQUU5QyxlQUFBLDRCQUFxQixDQUFBLElBRnlCLHdPQU05QyxlQUFBLDhCQUF1QixDQUFBLElBTnVCO0lBWTVELGlCQUFtQzs7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QWpCLEtBQUs7WUFDRyxjQUFjO2tCQUF0QixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLG9CQUFvQjtrQkFBNUIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxxQkFBcUI7a0JBQTdCLEtBQUs7WUFDRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFDSSx1QkFBdUI7a0JBQWhDLE1BQU07WUFDRyxRQUFRO2tCQUFqQixNQUFNO1lBQ0csUUFBUTtrQkFBakIsTUFBTTs7a0ZBdkJJLHFDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFRpbWVzbG90TW9tZW50RW51bSB9IGZyb20gJy4uLy4uLy4uL2VudW1zJztcbmltcG9ydCB7IEFwcG9pbnRtZW50VHJhbnNmb3JtZXJTbG90IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzJztcbmltcG9ydCB7IEFwcG9pbnRtZW50UGlja2VyQ29tcG9uZW50SW50ZXJmYWNlIH0gZnJvbSAnLi4vYXBwb2ludG1lbnQtcGlja2VyLWNvbXBvbmVudC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQXBwb2ludG1lbnRQaWNrZXJUeXBlRW51bSB9IGZyb20gJy4uL2FwcG9pbnRtZW50LXBpY2tlci10eXBlLmVudW0nO1xuaW1wb3J0IHsgQXBwb2ludG1lbnRTbG90T3B0aW9uIH0gZnJvbSAnLi4vYXBwb2ludG1lbnQtc2xvdC1vcHRpb24ubW9kZWwnO1xuaW1wb3J0IHsgQXBwb2ludG1lbnRQaWNrZXJDb25zdW1lclR5cGVFbnVtIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBBcHBvaW50bWVudFBpY2tlckJ5VGVtcG9yYWxDb21wb25lbnRJbnRlcmZhY2UgfSBmcm9tICcuLi9hcHBvaW50bWVudC1waWNrZXItYnktdGVtcG9yYWwtY29tcG9uZW50LmludGVyZmFjZSc7XG5pbXBvcnQgeyBBYnN0cmFjdEFwcG9pbnRtZW50UGlja2VyQnlUZW1wb3JhbENvbXBvbmVudCB9IGZyb20gJy4uL2Fic3RyYWN0LWFwcG9pbnRtZW50LXBpY2tlci1ieS10ZW1wb3JhbC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZm9ybS1hcHBvaW50bWVudC1waWNrZXItYnktZGF0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC1hcHBvaW50bWVudC1waWNrZXItYnktZGF0ZS5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBJbnB1dEFwcG9pbnRtZW50UGlja2VyQnlEYXRlQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIElucHV0QXBwb2ludG1lbnRQaWNrZXJCeURhdGVDb21wb25lbnRcbiAgZXh0ZW5kcyBBYnN0cmFjdEFwcG9pbnRtZW50UGlja2VyQnlUZW1wb3JhbENvbXBvbmVudDxJbnB1dEFwcG9pbnRtZW50UGlja2VyQnlEYXRlQ29tcG9uZW50PlxuICBpbXBsZW1lbnRzIEFwcG9pbnRtZW50UGlja2VyQ29tcG9uZW50SW50ZXJmYWNlLCBBcHBvaW50bWVudFBpY2tlckJ5VGVtcG9yYWxDb21wb25lbnRJbnRlcmZhY2VcbntcbiAgbWVzc2FnZUdyb3VwOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGVycm9yOiB1bmtub3duO1xuICBASW5wdXQoKSBzdGFydERhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xuICBASW5wdXQoKSBlbmREYXRlOiBEYXRlO1xuICBASW5wdXQoKSB0aW1lc2xvdHM6IEFwcG9pbnRtZW50VHJhbnNmb3JtZXJTbG90W107XG4gIEBJbnB1dCgpIHNsaWRlc1RvU2Nyb2xsOiBudW1iZXI7XG4gIEBJbnB1dCgpIGluaXRpYWxTbGlkZSA9IDA7XG4gIEBJbnB1dCgpIGluaXRpYWxpc2VkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGxhYmVsS2V5czogc3RyaW5nW107XG4gIEBJbnB1dCgpIHVwZGF0ZVNsb3RzOiBBcHBvaW50bWVudFRyYW5zZm9ybWVyU2xvdFtdO1xuICBASW5wdXQoKSBzaG93TG9hZE1vcmU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGNvbnN1bWVyVHlwZTogc3RyaW5nO1xuICBASW5wdXQoKSBkaXNhYmxlTG9hZE1vcmU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGVuYWJsZUFwcG9pbnRtZW50c1VJOiBib29sZWFuO1xuICBASW5wdXQoKSBzbGlkZXNUb1Nob3c6IG51bWJlcjtcbiAgQElucHV0KCkgYXBwb2ludG1lbnRQaWNrZXJUeXBlOiBBcHBvaW50bWVudFBpY2tlclR5cGVFbnVtO1xuICBASW5wdXQoKSBpc0RldmljZUxhbmRzY2FwZTogYm9vbGVhbjtcbiAgQE91dHB1dCgpIGFwcG9pbnRtZW50U2xvdFNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxBcHBvaW50bWVudFNsb3RPcHRpb24+KCk7XG4gIEBPdXRwdXQoKSBsb2FkTW9yZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHNjcm9sbFRvID0gbmV3IEV2ZW50RW1pdHRlcjxBcHBvaW50bWVudFBpY2tlclR5cGVFbnVtPigpO1xuXG4gIGRhdGVQaWNrZXJMYWJlbCA9ICcnO1xuICBtb21lbnRQaWNrZXJMYWJlbCA9ICcnO1xuICBkYXRlUGlja2VyRXJyb3JMYWJlbCA9ICcnO1xuICBtb21lbnRQaWNrZXJFcnJvckxhYmVsID0gJyc7XG5cbiAgc2VsZWN0ZWRBcHBvaW50bWVudFNsb3Q/OiBBcHBvaW50bWVudFRyYW5zZm9ybWVyU2xvdDtcbiAgc2VsZWN0ZWRBcHBvaW50bWVudE1vbWVudD86IFRpbWVzbG90TW9tZW50RW51bTtcbiAgY29uc3VtZXJUeXBlRW51bSA9IEFwcG9pbnRtZW50UGlja2VyQ29uc3VtZXJUeXBlRW51bTtcblxuICBzZXRTZWxlY3RlZEFwcG9pbnRtZW50KGFwcG9pbnRtZW50U2xvdE9wdGlvbjogQXBwb2ludG1lbnRTbG90T3B0aW9uKTogdm9pZCB7XG4gICAgaWYgKGFwcG9pbnRtZW50U2xvdE9wdGlvbi5kYXRlIHx8IGFwcG9pbnRtZW50U2xvdE9wdGlvbi5tb21lbnQpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRBcHBvaW50bWVudFNsb3QgPSB0aGlzLnRpbWVzbG90cy5maW5kKChhcHBvaW50bWVudFNsb3QpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBhcHBvaW50bWVudFNsb3QuZGF0ZS5nZXREYXRlKCkgPT09IGFwcG9pbnRtZW50U2xvdE9wdGlvbi5kYXRlPy5nZXREYXRlKCkgJiZcbiAgICAgICAgICBhcHBvaW50bWVudFNsb3QuZGF0ZS5nZXRNb250aCgpID09PSBhcHBvaW50bWVudFNsb3RPcHRpb24uZGF0ZT8uZ2V0TW9udGgoKSAmJlxuICAgICAgICAgIGFwcG9pbnRtZW50U2xvdC5kYXRlLmdldEZ1bGxZZWFyKCkgPT09IGFwcG9pbnRtZW50U2xvdE9wdGlvbi5kYXRlPy5nZXRGdWxsWWVhcigpXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkQXBwb2ludG1lbnRTbG90KSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRBcHBvaW50bWVudFNsb3QudGltZVNsb3RzLmZvckVhY2goKG1vbWVudCkgPT4ge1xuICAgICAgICAgIGlmIChtb21lbnQuY29kZSA9PT0gYXBwb2ludG1lbnRTbG90T3B0aW9uLm1vbWVudCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEFwcG9pbnRtZW50TW9tZW50ID0gbW9tZW50LmNvZGU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRJbnB1dFZhbHVlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0U2VsZWN0ZWRBcHBvaW50bWVudFNsb3QoYXBwb2ludG1lbnRTbG90OiBBcHBvaW50bWVudFRyYW5zZm9ybWVyU2xvdCk6IHZvaWQge1xuICAgIHRoaXMuZ2V0Q29tcG9uZW50KCkuc2VsZWN0ZWRBcHBvaW50bWVudFNsb3QgPSBhcHBvaW50bWVudFNsb3Q7XG4gICAgdGhpcy5nZXRDb21wb25lbnQoKS5zZWxlY3RlZEFwcG9pbnRtZW50TW9tZW50ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2V0SW5wdXRWYWx1ZSgpO1xuICB9XG5cbiAgcHVibGljIGdldFNlbGVjdGVkQXBwb2ludG1lbnQoKTogQXBwb2ludG1lbnRTbG90T3B0aW9uIHtcbiAgICByZXR1cm4gbmV3IEFwcG9pbnRtZW50U2xvdE9wdGlvbihcbiAgICAgIHRoaXMuc2VsZWN0ZWRBcHBvaW50bWVudFNsb3Q/LmRhdGUgfHwgbnVsbCxcbiAgICAgIHRoaXMuc2VsZWN0ZWRBcHBvaW50bWVudE1vbWVudCBhcyBUaW1lc2xvdE1vbWVudEVudW1cbiAgICApO1xuICB9XG5cbiAgZ2V0Q29tcG9uZW50KCk6IElucHV0QXBwb2ludG1lbnRQaWNrZXJCeURhdGVDb21wb25lbnQge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwic2VjdGlvbi1kYXRlIG14LS14cy0tbWRcIj5cbiAgPGRpdiBjbGFzcz1cIm10LS1tXCI+XG4gICAgPGRpdiBjbGFzcz1cIm5vdGlmaWNhdGlvbiBub3RpZmljYXRpb24tLWVycm9yZmllbGQgbm90aWZpY2F0aW9uLS1lcnJvcmZpZWxkLS1mbG93XCIgKm5nSWY9XCJoYXNFcnJvcignZGF5X3JlcXVpcmVkJylcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpY29uLWVycm9yLXNoYXBlIGVycm9yZmllbGRcIj57eyBkYXRlUGlja2VyRXJyb3JMYWJlbCB8IHRyYW5zbGF0ZSB9fTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxhcHAtbm8tYXZhaWxhYmxlLWFwcG9pbnRtZW50LWRhdGVcbiAgICAqbmdJZj1cIiF0aW1lc2xvdHM/Lmxlbmd0aCAmJiAhdXBkYXRlU2xvdHM/Lmxlbmd0aFwiXG4gICAgKGxvYWRNb3JlU2xvdHMpPVwibG9hZE1vcmVTbG90cygpXCJcbiAgICBbbWVzc2FnZUdyb3VwXT1cIm1lc3NhZ2VHcm91cFwiPjwvYXBwLW5vLWF2YWlsYWJsZS1hcHBvaW50bWVudC1kYXRlPlxuICA8YXBwLWZvcm0tYXBwb2ludG1lbnQtZGF0ZS1waWNrZXJcbiAgICAqbmdJZj1cImluaXRpYWxpc2VkICYmICh0aW1lc2xvdHM/Lmxlbmd0aCB8fCB1cGRhdGVTbG90cz8ubGVuZ3RoKVwiXG4gICAgW21lc3NhZ2VHcm91cF09XCJtZXNzYWdlR3JvdXBcIlxuICAgIFt0aW1lc2xvdHNdPVwidGltZXNsb3RzXCJcbiAgICBbc3RhcnREYXRlXT1cInN0YXJ0RGF0ZVwiXG4gICAgW2VuZERhdGVdPVwiZW5kRGF0ZVwiXG4gICAgW3NsaWRlc1RvU2Nyb2xsXT1cInNsaWRlc1RvU2Nyb2xsXCJcbiAgICBbc2VsZWN0ZWRUaW1lc2xvdF09XCJzZWxlY3RlZEFwcG9pbnRtZW50U2xvdFwiXG4gICAgW2luaXRpYWxTbGlkZV09XCJpbml0aWFsU2xpZGVcIlxuICAgIChhcHBvaW50bWVudFNlbGVjdGVkKT1cInNldFNlbGVjdGVkQXBwb2ludG1lbnRTbG90KCRldmVudClcIlxuICAgIFtzaG93TG9hZE1vcmVdPVwic2hvd0xvYWRNb3JlXCJcbiAgICAobG9hZE1vcmUpPVwibG9hZE1vcmVTbG90cygkZXZlbnQpXCJcbiAgICBbdXBkYXRlU2xvdHNdPVwidXBkYXRlU2xvdHNcIlxuICAgIFtjb25zdW1lclR5cGVdPVwiY29uc3VtZXJUeXBlXCJcbiAgICBbZGlzYWJsZUxvYWRNb3JlXT1cImRpc2FibGVMb2FkTW9yZVwiXG4gICAgKHNjcm9sbFRvKT1cInNjcm9sbFRvU2VjdGlvbigkZXZlbnQpXCJcbiAgICBbc2xpZGVzVG9TaG93XT1cInNsaWRlc1RvU2hvd1wiXG4gICAgW2FwcG9pbnRtZW50UGlja2VyVHlwZV09XCJhcHBvaW50bWVudFBpY2tlclR5cGVcIlxuICAgIFtpc0RldmljZUxhbmRzY2FwZV09XCJpc0RldmljZUxhbmRzY2FwZVwiXG4gICAgW2VuYWJsZUFwcG9pbnRtZW50c1VJXT1cImVuYWJsZUFwcG9pbnRtZW50c1VJXCJcbiAgICBbZGF0ZVBpY2tlckxhYmVsXT1cImRhdGVQaWNrZXJMYWJlbFwiPlxuICA8L2FwcC1mb3JtLWFwcG9pbnRtZW50LWRhdGUtcGlja2VyPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwic2VjdGlvbi10aW1lIG14LS14cy0tbWRcIiAqbmdJZj1cInNlbGVjdGVkQXBwb2ludG1lbnRTbG90XCI+XG4gIDxkaXZcbiAgICBjbGFzcz1cIm5vdGlmaWNhdGlvbiBub3RpZmljYXRpb24tLWVycm9yZmllbGQgbm90aWZpY2F0aW9uLS1lcnJvcmZpZWxkLS1mbG93XCJcbiAgICBbbmdDbGFzc109XCJ7J21iLTE1JyA6IGNvbnN1bWVyVHlwZSA9PT0gY29uc3VtZXJUeXBlRW51bS5OQ31cIlxuICAgICpuZ0lmPVwiaGFzRXJyb3IoJ3Nsb3RfcmVxdWlyZWQnKVwiPlxuICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpY29uLWVycm9yLXNoYXBlIGVycm9yZmllbGRcIj57eyBtb21lbnRQaWNrZXJFcnJvckxhYmVsIHwgdHJhbnNsYXRlIH19PC9zcGFuPlxuICA8L2Rpdj5cbiAgPGFwcC1mb3JtLWFwcG9pbnRtZW50LW1vbWVudC1waWNrZXJcbiAgICBbbWVzc2FnZUdyb3VwXT1cIm1lc3NhZ2VHcm91cFwiXG4gICAgW3N0YXJ0RGF0ZV09XCJzdGFydERhdGVcIlxuICAgIFtlbmREYXRlXT1cImVuZERhdGVcIlxuICAgIFt0aW1lc2xvdHNdPVwidGltZXNsb3RzXCJcbiAgICBbdXBkYXRlU2xvdHNdPVwidXBkYXRlU2xvdHNcIlxuICAgIFtzZWxlY3RlZFRpbWVzbG90XT1cInNlbGVjdGVkQXBwb2ludG1lbnRTbG90XCJcbiAgICBbc2VsZWN0ZWRNb21lbnRdPVwic2VsZWN0ZWRBcHBvaW50bWVudE1vbWVudFwiXG4gICAgKG1vbWVudFNlbGVjdGVkKT1cInNldFNlbGVjdGVkQXBwb2ludG1lbnRNb21lbnQoJGV2ZW50KVwiXG4gICAgW2NvbnN1bWVyVHlwZV09XCJjb25zdW1lclR5cGVcIlxuICAgIFtpc0RldmljZUxhbmRzY2FwZV09XCJpc0RldmljZUxhbmRzY2FwZVwiXG4gICAgW2VuYWJsZUFwcG9pbnRtZW50c1VJXT1cImVuYWJsZUFwcG9pbnRtZW50c1VJXCJcbiAgICBbbW9tZW50UGlja2VyTGFiZWxdPVwibW9tZW50UGlja2VyTGFiZWxcIj5cbiAgPC9hcHAtZm9ybS1hcHBvaW50bWVudC1tb21lbnQtcGlja2VyPlxuPC9kaXY+XG4iXX0=