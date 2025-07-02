import { Component, EventEmitter, forwardRef, inject, Input, Optional, Output } from '@angular/core';
import { FormBuilder, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { DefaultDateSlideConfig, DefaultTimeslotMoments } from '../../constants';
import { AppointmentPickerUtil } from '../../utils';
import { TimeslotUtil } from '../../../../utils';
import * as i0 from "@angular/core";
import * as i1 from "@telenet/ng-lib-page";
import * as i2 from "../../../../errors";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
import * as i5 from "../moment-picker/moment-picker.component";
import * as i6 from "../date-picker/date-picker.component";
function InputNewAppointmentPickerComponent_app_form_moment_picker_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-form-moment-picker", 3);
    i0.ɵɵlistener("ngModelChange", function InputNewAppointmentPickerComponent_app_form_moment_picker_2_Template_app_form_moment_picker_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.selectMoment($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("timeslot", ctx_r0.appointment.date)("availableMoments", ctx_r0.availableMoments);
} }
export class InputNewAppointmentPickerComponent {
    languageService;
    messageGroupDirective;
    injector;
    timeslots;
    updateSlots;
    selectableMoments = DefaultTimeslotMoments;
    showLoadMore;
    dateSlideConfig = DefaultDateSlideConfig;
    loadMore = new EventEmitter();
    formBuilder = inject(FormBuilder);
    form = this.formBuilder.group({
        appointment: [null, Validators.required],
        moment: [null, Validators.required],
    });
    availableMoments;
    appointmentsAvailable$;
    appointment;
    error;
    formService;
    constructor(languageService, formService, messageGroupDirective, injector) {
        this.languageService = languageService;
        this.messageGroupDirective = messageGroupDirective;
        this.injector = injector;
        this.formService = formService;
        this.form.patchValue({
            appointment: this.appointment?.date,
            moment: this.appointment?.moment,
        });
    }
    onChange(_) {
        // empty on purpose
    }
    onTouch(_) {
        // empty on purpose
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    writeValue(value) {
        if (value) {
            this.appointment = value;
            this.availableMoments = this.setAvailableMoments(value.date);
            this.form.get('appointment')?.setValue(value.date);
            this.form.get('moment')?.setValue(value.moment);
            this.appointmentsAvailable$ = TimeslotUtil.calculateTimeSlotsAvailability(this.timeslots);
        }
        if (value && this.timeslots && this.timeslots.every((timeslot) => !timeslot.hasAvailableMoments())) {
            this.availableMoments = this.setAvailableMoments(value.date);
            this.appointmentsAvailable$ = TimeslotUtil.calculateTimeSlotsAvailability(this.timeslots);
            this.form.reset();
        }
    }
    selectInstallSlotDay(appointmentSlot) {
        this.appointment = InputNewAppointmentPickerComponent.getNewAppointment();
        this.form.get('moment')?.reset(null);
        this.appointment.date = appointmentSlot;
        this.availableMoments = this.setAvailableMoments(appointmentSlot);
        this.onChange(this.appointment);
        this.appointmentsAvailable$ = TimeslotUtil.calculateTimeSlotsAvailability(this.updateSlots ?? this.timeslots);
    }
    selectMoment(moment) {
        this.appointment.moment = moment;
        this.onChange(this.appointment);
    }
    static getNewAppointment() {
        return {
            date: undefined,
            moment: undefined,
        };
    }
    setAvailableMoments(appointmentSlot) {
        let messageGroup = '';
        if (this.messageGroupDirective && this.messageGroupDirective.messageGroup) {
            messageGroup = this.messageGroupDirective.messageGroup;
        }
        return this.selectableMoments.map((selectableMoment) => {
            return {
                timeslot: selectableMoment,
                available: appointmentSlot?.hasAvailableMoment(selectableMoment),
                displayTime: AppointmentPickerUtil.getTimeslotLabel(selectableMoment, messageGroup, 'time'),
                label: AppointmentPickerUtil.getTimeslotLabel(selectableMoment, messageGroup),
            };
        });
    }
    loadMoreSlots() {
        this.loadMore.emit();
    }
    static ɵfac = function InputNewAppointmentPickerComponent_Factory(t) { return new (t || InputNewAppointmentPickerComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(i2.FormErrorService), i0.ɵɵdirectiveInject(i2.MessageGroupDirective, 8), i0.ɵɵdirectiveInject(i0.Injector)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputNewAppointmentPickerComponent, selectors: [["app-form-new-appointment-picker"]], inputs: { timeslots: "timeslots", updateSlots: "updateSlots", selectableMoments: "selectableMoments", showLoadMore: "showLoadMore", dateSlideConfig: "dateSlideConfig" }, outputs: { loadMore: "loadMore" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputNewAppointmentPickerComponent),
                    multi: true,
                },
            ])], decls: 4, vars: 8, consts: [[3, "formGroup"], ["formControlName", "appointment", 3, "timeslots", "withMoment", "showLoadMore", "updateSlots", "loadMore", "ngModelChange"], ["formControlName", "moment", 3, "timeslot", "availableMoments", "ngModelChange", 4, "ngIf"], ["formControlName", "moment", 3, "timeslot", "availableMoments", "ngModelChange"]], template: function InputNewAppointmentPickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementContainerStart(0, 0);
            i0.ɵɵelementStart(1, "app-form-date-picker", 1);
            i0.ɵɵlistener("loadMore", function InputNewAppointmentPickerComponent_Template_app_form_date_picker_loadMore_1_listener() { return ctx.loadMoreSlots(); })("ngModelChange", function InputNewAppointmentPickerComponent_Template_app_form_date_picker_ngModelChange_1_listener($event) { return ctx.selectInstallSlotDay($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(2, InputNewAppointmentPickerComponent_app_form_moment_picker_2_Template, 1, 2, "app-form-moment-picker", 2);
            i0.ɵɵpipe(3, "async");
            i0.ɵɵelementContainerEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance();
            i0.ɵɵproperty("timeslots", ctx.timeslots)("withMoment", true)("showLoadMore", ctx.showLoadMore)("updateSlots", ctx.updateSlots);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", (ctx.appointment == null ? null : ctx.appointment.date) && i0.ɵɵpipeBind1(3, 6, ctx.appointmentsAvailable$));
        } }, dependencies: [i3.NgIf, i4.NgControlStatus, i4.NgControlStatusGroup, i4.FormGroupDirective, i4.FormControlName, i5.InputMomentPickerComponent, i6.InputDatePickerComponent, i3.AsyncPipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputNewAppointmentPickerComponent, [{
        type: Component,
        args: [{ selector: 'app-form-new-appointment-picker', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputNewAppointmentPickerComponent),
                        multi: true,
                    },
                ], template: "<ng-container [formGroup]=\"form\">\n  <app-form-date-picker\n    [timeslots]=\"timeslots\"\n    [withMoment]=\"true\"\n    [showLoadMore]=\"showLoadMore\"\n    [updateSlots]=\"updateSlots\"\n    (loadMore)=\"loadMoreSlots()\"\n    formControlName=\"appointment\"\n    (ngModelChange)=\"selectInstallSlotDay($event)\">\n  </app-form-date-picker>\n  <app-form-moment-picker\n    *ngIf=\"appointment?.date && (appointmentsAvailable$ | async)\"\n    [timeslot]=\"appointment.date\"\n    [availableMoments]=\"availableMoments\"\n    formControlName=\"moment\"\n    (ngModelChange)=\"selectMoment($event)\">\n  </app-form-moment-picker>\n</ng-container>\n" }]
    }], () => [{ type: i1.LanguageService }, { type: i2.FormErrorService }, { type: i2.MessageGroupDirective, decorators: [{
                type: Optional
            }] }, { type: i0.Injector }], { timeslots: [{
            type: Input
        }], updateSlots: [{
            type: Input
        }], selectableMoments: [{
            type: Input
        }], showLoadMore: [{
            type: Input
        }], dateSlideConfig: [{
            type: Input
        }], loadMore: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputNewAppointmentPickerComponent, { className: "InputNewAppointmentPickerComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LWFwcG9pbnRtZW50LXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29udHJvbHMvbmV3LWFwcG9pbnRtZW50LXBpY2tlci9jb21wb25lbnRzL25ldy1hcHBvaW50bWVudC1waWNrZXIvbmV3LWFwcG9pbnRtZW50LXBpY2tlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29udHJvbHMvbmV3LWFwcG9pbnRtZW50LXBpY2tlci9jb21wb25lbnRzL25ldy1hcHBvaW50bWVudC1waWNrZXIvbmV3LWFwcG9pbnRtZW50LXBpY2tlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFZLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9HLE9BQU8sRUFBd0IsV0FBVyxFQUFhLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSzdHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWpGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7Ozs7SUNBL0MsaURBS3lDO0lBQXZDLHdPQUFpQixlQUFBLDJCQUFvQixDQUFBLElBQUM7SUFDeEMsaUJBQXlCOzs7SUFKdkIsa0RBQTZCLDZDQUFBOztBRFdqQyxNQUFNLE9BQU8sa0NBQWtDO0lBc0JwQztJQUVZO0lBQ1o7SUF4QkEsU0FBUyxDQUErQjtJQUN4QyxXQUFXLENBQStCO0lBQzFDLGlCQUFpQixHQUF5QixzQkFBc0IsQ0FBQztJQUNqRSxZQUFZLENBQVU7SUFDdEIsZUFBZSxHQUF5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ZWN0LCBJbmplY3RvciwgSW5wdXQsIE9wdGlvbmFsLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBOR19WQUxVRV9BQ0NFU1NPUiwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSB9IGZyb20gJ0B0ZWxlbmV0L25nLWxpYi1wYWdlJztcbmltcG9ydCB7IFRpbWVzbG90TW9tZW50RW51bSB9IGZyb20gJy4uLy4uLy4uLy4uL2VudW1zJztcbmltcG9ydCB7IEZvcm1FcnJvclNlcnZpY2UsIE1lc3NhZ2VHcm91cERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2Vycm9ycyc7XG5pbXBvcnQgeyBBcHBvaW50bWVudFRyYW5zZm9ybWVyU2xvdCB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVscyc7XG5pbXBvcnQgeyBEZWZhdWx0RGF0ZVNsaWRlQ29uZmlnLCBEZWZhdWx0VGltZXNsb3RNb21lbnRzIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IEFwcG9pbnRtZW50SW50ZXJmYWNlLCBTbGlkZUNvbmZpZ0ludGVyZmFjZSwgVGltZXNsb3RBdmFpbGFiaWxpdHlJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEFwcG9pbnRtZW50UGlja2VyVXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFRpbWVzbG90VXRpbCB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWZvcm0tbmV3LWFwcG9pbnRtZW50LXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZXctYXBwb2ludG1lbnQtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBJbnB1dE5ld0FwcG9pbnRtZW50UGlja2VyQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIElucHV0TmV3QXBwb2ludG1lbnRQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIEBJbnB1dCgpIHRpbWVzbG90czogQXBwb2ludG1lbnRUcmFuc2Zvcm1lclNsb3RbXTtcbiAgQElucHV0KCkgdXBkYXRlU2xvdHM6IEFwcG9pbnRtZW50VHJhbnNmb3JtZXJTbG90W107XG4gIEBJbnB1dCgpIHNlbGVjdGFibGVNb21lbnRzOiBUaW1lc2xvdE1vbWVudEVudW1bXSA9IERlZmF1bHRUaW1lc2xvdE1vbWVudHM7XG4gIEBJbnB1dCgpIHNob3dMb2FkTW9yZTogYm9vbGVhbjtcbiAgQElucHV0KCkgZGF0ZVNsaWRlQ29uZmlnOiBTbGlkZUNvbmZpZ0ludGVyZmFjZSA9IERlZmF1bHREYXRlU2xpZGVDb25maWc7XG4gIEBPdXRwdXQoKSBsb2FkTW9yZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHJpdmF0ZSByZWFkb25seSBmb3JtQnVpbGRlciA9IGluamVjdChGb3JtQnVpbGRlcik7XG4gIGZvcm06IEZvcm1Hcm91cCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgIGFwcG9pbnRtZW50OiBbbnVsbCwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgbW9tZW50OiBbbnVsbCwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gIH0pO1xuXG4gIGF2YWlsYWJsZU1vbWVudHM6IFRpbWVzbG90QXZhaWxhYmlsaXR5SW50ZXJmYWNlW107XG4gIGFwcG9pbnRtZW50c0F2YWlsYWJsZSQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgYXBwb2ludG1lbnQ6IEFwcG9pbnRtZW50SW50ZXJmYWNlO1xuICBlcnJvcjogdW5rbm93bjtcblxuICBwdWJsaWMgZm9ybVNlcnZpY2U6IEZvcm1FcnJvclNlcnZpY2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgIGZvcm1TZXJ2aWNlOiBGb3JtRXJyb3JTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBtZXNzYWdlR3JvdXBEaXJlY3RpdmU6IE1lc3NhZ2VHcm91cERpcmVjdGl2ZSxcbiAgICBwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yXG4gICkge1xuICAgIHRoaXMuZm9ybVNlcnZpY2UgPSBmb3JtU2VydmljZTtcbiAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZSh7XG4gICAgICBhcHBvaW50bWVudDogdGhpcy5hcHBvaW50bWVudD8uZGF0ZSxcbiAgICAgIG1vbWVudDogdGhpcy5hcHBvaW50bWVudD8ubW9tZW50LFxuICAgIH0pO1xuICB9XG5cbiAgb25DaGFuZ2UoXzogQXBwb2ludG1lbnRJbnRlcmZhY2UpOiB2b2lkIHtcbiAgICAvLyBlbXB0eSBvbiBwdXJwb3NlXG4gIH1cblxuICBvblRvdWNoKF86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAvLyBlbXB0eSBvbiBwdXJwb3NlXG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBWb2lkRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogVm9pZEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoID0gZm47XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBBcHBvaW50bWVudEludGVyZmFjZSk6IHZvaWQge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5hcHBvaW50bWVudCA9IHZhbHVlO1xuICAgICAgdGhpcy5hdmFpbGFibGVNb21lbnRzID0gdGhpcy5zZXRBdmFpbGFibGVNb21lbnRzKHZhbHVlLmRhdGUgYXMgQXBwb2ludG1lbnRUcmFuc2Zvcm1lclNsb3QpO1xuICAgICAgdGhpcy5mb3JtLmdldCgnYXBwb2ludG1lbnQnKT8uc2V0VmFsdWUodmFsdWUuZGF0ZSk7XG4gICAgICB0aGlzLmZvcm0uZ2V0KCdtb21lbnQnKT8uc2V0VmFsdWUodmFsdWUubW9tZW50KTtcbiAgICAgIHRoaXMuYXBwb2ludG1lbnRzQXZhaWxhYmxlJCA9IFRpbWVzbG90VXRpbC5jYWxjdWxhdGVUaW1lU2xvdHNBdmFpbGFiaWxpdHkodGhpcy50aW1lc2xvdHMpO1xuICAgIH1cbiAgICBpZiAodmFsdWUgJiYgdGhpcy50aW1lc2xvdHMgJiYgdGhpcy50aW1lc2xvdHMuZXZlcnkoKHRpbWVzbG90KSA9PiAhdGltZXNsb3QuaGFzQXZhaWxhYmxlTW9tZW50cygpKSkge1xuICAgICAgdGhpcy5hdmFpbGFibGVNb21lbnRzID0gdGhpcy5zZXRBdmFpbGFibGVNb21lbnRzKHZhbHVlLmRhdGUgYXMgQXBwb2ludG1lbnRUcmFuc2Zvcm1lclNsb3QpO1xuICAgICAgdGhpcy5hcHBvaW50bWVudHNBdmFpbGFibGUkID0gVGltZXNsb3RVdGlsLmNhbGN1bGF0ZVRpbWVTbG90c0F2YWlsYWJpbGl0eSh0aGlzLnRpbWVzbG90cyk7XG4gICAgICB0aGlzLmZvcm0ucmVzZXQoKTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RJbnN0YWxsU2xvdERheShhcHBvaW50bWVudFNsb3Q6IEFwcG9pbnRtZW50VHJhbnNmb3JtZXJTbG90KTogdm9pZCB7XG4gICAgdGhpcy5hcHBvaW50bWVudCA9IElucHV0TmV3QXBwb2ludG1lbnRQaWNrZXJDb21wb25lbnQuZ2V0TmV3QXBwb2ludG1lbnQoKTtcbiAgICB0aGlzLmZvcm0uZ2V0KCdtb21lbnQnKT8ucmVzZXQobnVsbCk7XG4gICAgdGhpcy5hcHBvaW50bWVudC5kYXRlID0gYXBwb2ludG1lbnRTbG90O1xuICAgIHRoaXMuYXZhaWxhYmxlTW9tZW50cyA9IHRoaXMuc2V0QXZhaWxhYmxlTW9tZW50cyhhcHBvaW50bWVudFNsb3QpO1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy5hcHBvaW50bWVudCk7XG4gICAgdGhpcy5hcHBvaW50bWVudHNBdmFpbGFibGUkID0gVGltZXNsb3RVdGlsLmNhbGN1bGF0ZVRpbWVTbG90c0F2YWlsYWJpbGl0eSh0aGlzLnVwZGF0ZVNsb3RzID8/IHRoaXMudGltZXNsb3RzKTtcbiAgfVxuXG4gIHNlbGVjdE1vbWVudChtb21lbnQ6IFRpbWVzbG90TW9tZW50RW51bSk6IHZvaWQge1xuICAgIHRoaXMuYXBwb2ludG1lbnQubW9tZW50ID0gbW9tZW50O1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy5hcHBvaW50bWVudCk7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBnZXROZXdBcHBvaW50bWVudCgpOiBBcHBvaW50bWVudEludGVyZmFjZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGU6IHVuZGVmaW5lZCxcbiAgICAgIG1vbWVudDogdW5kZWZpbmVkLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIHNldEF2YWlsYWJsZU1vbWVudHMoYXBwb2ludG1lbnRTbG90OiBBcHBvaW50bWVudFRyYW5zZm9ybWVyU2xvdCk6IFRpbWVzbG90QXZhaWxhYmlsaXR5SW50ZXJmYWNlW10ge1xuICAgIGxldCBtZXNzYWdlR3JvdXAgPSAnJztcbiAgICBpZiAodGhpcy5tZXNzYWdlR3JvdXBEaXJlY3RpdmUgJiYgdGhpcy5tZXNzYWdlR3JvdXBEaXJlY3RpdmUubWVzc2FnZUdyb3VwKSB7XG4gICAgICBtZXNzYWdlR3JvdXAgPSB0aGlzLm1lc3NhZ2VHcm91cERpcmVjdGl2ZS5tZXNzYWdlR3JvdXA7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNlbGVjdGFibGVNb21lbnRzLm1hcCgoc2VsZWN0YWJsZU1vbWVudDogVGltZXNsb3RNb21lbnRFbnVtKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aW1lc2xvdDogc2VsZWN0YWJsZU1vbWVudCxcbiAgICAgICAgYXZhaWxhYmxlOiBhcHBvaW50bWVudFNsb3Q/Lmhhc0F2YWlsYWJsZU1vbWVudChzZWxlY3RhYmxlTW9tZW50KSxcbiAgICAgICAgZGlzcGxheVRpbWU6IEFwcG9pbnRtZW50UGlja2VyVXRpbC5nZXRUaW1lc2xvdExhYmVsKHNlbGVjdGFibGVNb21lbnQsIG1lc3NhZ2VHcm91cCwgJ3RpbWUnKSxcbiAgICAgICAgbGFiZWw6IEFwcG9pbnRtZW50UGlja2VyVXRpbC5nZXRUaW1lc2xvdExhYmVsKHNlbGVjdGFibGVNb21lbnQsIG1lc3NhZ2VHcm91cCksXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgbG9hZE1vcmVTbG90cygpIHtcbiAgICB0aGlzLmxvYWRNb3JlLmVtaXQoKTtcbiAgfVxufVxuIiwiPG5nLWNvbnRhaW5lciBbZm9ybUdyb3VwXT1cImZvcm1cIj5cbiAgPGFwcC1mb3JtLWRhdGUtcGlja2VyXG4gICAgW3RpbWVzbG90c109XCJ0aW1lc2xvdHNcIlxuICAgIFt3aXRoTW9tZW50XT1cInRydWVcIlxuICAgIFtzaG93TG9hZE1vcmVdPVwic2hvd0xvYWRNb3JlXCJcbiAgICBbdXBkYXRlU2xvdHNdPVwidXBkYXRlU2xvdHNcIlxuICAgIChsb2FkTW9yZSk9XCJsb2FkTW9yZVNsb3RzKClcIlxuICAgIGZvcm1Db250cm9sTmFtZT1cImFwcG9pbnRtZW50XCJcbiAgICAobmdNb2RlbENoYW5nZSk9XCJzZWxlY3RJbnN0YWxsU2xvdERheSgkZXZlbnQpXCI+XG4gIDwvYXBwLWZvcm0tZGF0ZS1waWNrZXI+XG4gIDxhcHAtZm9ybS1tb21lbnQtcGlja2VyXG4gICAgKm5nSWY9XCJhcHBvaW50bWVudD8uZGF0ZSAmJiAoYXBwb2ludG1lbnRzQXZhaWxhYmxlJCB8IGFzeW5jKVwiXG4gICAgW3RpbWVzbG90XT1cImFwcG9pbnRtZW50LmRhdGVcIlxuICAgIFthdmFpbGFibGVNb21lbnRzXT1cImF2YWlsYWJsZU1vbWVudHNcIlxuICAgIGZvcm1Db250cm9sTmFtZT1cIm1vbWVudFwiXG4gICAgKG5nTW9kZWxDaGFuZ2UpPVwic2VsZWN0TW9tZW50KCRldmVudClcIj5cbiAgPC9hcHAtZm9ybS1tb21lbnQtcGlja2VyPlxuPC9uZy1jb250YWluZXI+XG4iXX0=