import { Component, EventEmitter, forwardRef, Input, Optional, Output, ViewChild, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputAbstractComponent } from '../../../input-abstract.component';
import { TimeslotMomentEnum } from '../../../../enums';
import { DefaultDateSlideConfig } from '../../constants';
import { AppointmentPickerUtil } from '../../utils';
import { LabelUtil, TimeslotUtil } from '../../../../utils';
import * as i0 from "@angular/core";
import * as i1 from "@telenet/ng-lib-page";
import * as i2 from "../../../../errors";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
import * as i5 from "ngx-slick-carousel";
import * as i6 from "../../../../errors/form.directive";
import * as i7 from "../../../../errors/message-group.directive";
import * as i8 from "../new-no-available-appointment-date/new-no-available-appointment-date.component";
import * as i9 from "@ngx-translate/core";
const _c0 = ["slickModal"];
function InputDatePickerComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5)(1, "span", 6);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 1, ctx_r0.labels.datePickerErrorLabel));
} }
function InputDatePickerComponent_ngx_slick_carousel_5_ng_container_2_ng_container_1_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵelement(1, "i", 23)(2, "i", 24)(3, "i", 25)(4, "i", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const appointmentSlot_r7 = i0.ɵɵnextContext().$implicit;
    const ctx_r9 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("disabled", !appointmentSlot_r7.hasAvailableMoment(ctx_r9.appointmentMomentEnum.MORNING));
    i0.ɵɵadvance();
    i0.ɵɵclassProp("disabled", !appointmentSlot_r7.hasAvailableMoment(ctx_r9.appointmentMomentEnum.LUNCH));
    i0.ɵɵadvance();
    i0.ɵɵclassProp("disabled", !appointmentSlot_r7.hasAvailableMoment(ctx_r9.appointmentMomentEnum.AFTERNOON));
    i0.ɵɵadvance();
    i0.ɵɵclassProp("disabled", !appointmentSlot_r7.hasAvailableMoment(ctx_r9.appointmentMomentEnum.EVENING));
} }
function InputDatePickerComponent_ngx_slick_carousel_5_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 12);
    i0.ɵɵelement(2, "input", 13);
    i0.ɵɵpipe(3, "date");
    i0.ɵɵelementStart(4, "div", 14)(5, "div", 15)(6, "div", 16)(7, "label", 17);
    i0.ɵɵlistener("click", function InputDatePickerComponent_ngx_slick_carousel_5_ng_container_2_ng_container_1_Template_label_click_7_listener() { const restoredCtx = i0.ɵɵrestoreView(_r12); const appointmentSlot_r7 = restoredCtx.$implicit; const ctx_r11 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r11.selectInstallSlotDay(appointmentSlot_r7)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 18);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 19);
    i0.ɵɵtext(12);
    i0.ɵɵpipe(13, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(14, InputDatePickerComponent_ngx_slick_carousel_5_ng_container_2_ng_container_1_div_14_Template, 5, 8, "div", 20);
    i0.ɵɵelementStart(15, "div", 21);
    i0.ɵɵtext(16);
    i0.ɵɵpipe(17, "date");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const appointmentSlot_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r6 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵstyleMap("--animation-delay:" + (i_r8 - ctx_r6.dateSlideConfig.initialSlide));
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("value", i0.ɵɵpipeBind2(3, 14, appointmentSlot_r7.date, "ddmm"));
    i0.ɵɵpropertyInterpolate1("id", "day-", i_r8, "");
    i0.ɵɵproperty("disabled", ctx_r6.withMoment && !appointmentSlot_r7.hasAvailableMoments())("checked", appointmentSlot_r7 === ctx_r6.selectedTimeslot);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("disabled", ctx_r6.withMoment && !appointmentSlot_r7.hasAvailableMoments());
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate1("for", "day-", i_r8, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(10, 17, appointmentSlot_r7.date, "EEEE"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(13, 20, appointmentSlot_r7.date, "dd"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r6.withMoment);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(17, 23, appointmentSlot_r7.date, "MMMM yyyy"), " ");
} }
function InputDatePickerComponent_ngx_slick_carousel_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, InputDatePickerComponent_ngx_slick_carousel_5_ng_container_2_ng_container_1_Template, 18, 26, "ng-container", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r4.timeslots);
} }
function InputDatePickerComponent_ngx_slick_carousel_5_form_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 27);
    i0.ɵɵlistener("ngSubmit", function InputDatePickerComponent_ngx_slick_carousel_5_form_3_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r13.loadMoreSlots()); });
    i0.ɵɵelement(1, "button", 28);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 1, ctx_r5.labels.loadMoreLabel), i0.ɵɵsanitizeHtml);
} }
function InputDatePickerComponent_ngx_slick_carousel_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ngx-slick-carousel", 7, 8);
    i0.ɵɵtemplate(2, InputDatePickerComponent_ngx_slick_carousel_5_ng_container_2_Template, 2, 1, "ng-container", 9)(3, InputDatePickerComponent_ngx_slick_carousel_5_form_3_Template, 3, 3, "form", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("config", ctx_r1.dateSlideConfig);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.reRender);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showLoadMore && !ctx_r1.reRender);
} }
function InputDatePickerComponent_app_new_no_available_appointment_date_7_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-new-no-available-appointment-date", 29);
    i0.ɵɵlistener("loadMoreSlots", function InputDatePickerComponent_app_new_no_available_appointment_date_7_Template_app_new_no_available_appointment_date_loadMoreSlots_0_listener() { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r15.loadMoreSlots()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("messageGroup", ctx_r2.messageGroup);
} }
export class InputDatePickerComponent extends InputAbstractComponent {
    languageService;
    formService;
    messageGroupDirective;
    injector;
    cdr;
    disableNoAvailableSlots = false;
    withMoment = false;
    showLoadMore;
    timeslots;
    updateSlots;
    dateSlideConfig = DefaultDateSlideConfig;
    loadMore = new EventEmitter();
    labels;
    selectedTimeslot;
    appointmentMomentEnum = TimeslotMomentEnum;
    slickModal;
    appointmentsAvailable$;
    reRender;
    constructor(languageService, formService, messageGroupDirective, injector, cdr) {
        super(languageService, formService, messageGroupDirective, injector);
        this.languageService = languageService;
        this.formService = formService;
        this.messageGroupDirective = messageGroupDirective;
        this.injector = injector;
        this.cdr = cdr;
    }
    ngOnInit() {
        super.ngOnInit();
        this.setLabels();
        this.appointmentsAvailable$ = TimeslotUtil.calculateTimeSlotsAvailability(this.timeslots ?? [], this.disableNoAvailableSlots);
    }
    ngOnChanges(changes) {
        if (changes['showLoadMore']) {
            this.showLoadMore = changes['showLoadMore']?.currentValue;
        }
        if (changes['updateSlots'] &&
            this.updateSlots &&
            this.timeslots.length > this.updateSlots.length &&
            this.timeslots[this.timeslots.length - this.updateSlots.length - 1].date.toDateString() !==
                this.updateSlots[this.updateSlots.length - 1].date.toDateString()) {
            this.reRender = true;
            setTimeout(() => {
                this.reRender = false;
                this.cdr.detectChanges();
                this.slickModal.slickGoTo(this.timeslots.length - this.updateSlots.length);
            });
            return;
        }
        if (changes['updateSlots'] &&
            this.updateSlots &&
            this.timeslots.length > 0 &&
            this.timeslots.every((timeslot) => !timeslot.hasAvailableMoments())) {
            this.timeslots = changes['updateSlots'].currentValue;
            this.appointmentsAvailable$ = TimeslotUtil.calculateTimeSlotsAvailability(this.updateSlots, this.disableNoAvailableSlots);
        }
    }
    onChange = (_) => {
        // empty on purpose
    };
    onTouch = (_) => {
        // empty on purpose
    };
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    writeValue(value) {
        if (value) {
            this.selectedTimeslot = this.timeslots.find((timeslot) => {
                return AppointmentPickerUtil.compareDate(timeslot, value);
            });
            this.scrollToSelectedSlides();
        }
    }
    selectInstallSlotDay(appointmentSlot) {
        this.selectedTimeslot = appointmentSlot;
        this.onTouch(true);
        this.onChange(appointmentSlot);
    }
    loadMoreSlots() {
        this.loadMore.emit();
    }
    scrollToSelectedSlides() {
        if (this.selectedTimeslot) {
            const selectedSlotIndex = AppointmentPickerUtil.getSelectedDateSlotIndex(this.timeslots, this.selectedTimeslot);
            this.dateSlideConfig.initialSlide = AppointmentPickerUtil.getInitialSlideIndex(selectedSlotIndex, this.dateSlideConfig.slidesToScroll);
        }
    }
    setLabels() {
        this.labels = {
            datePickerLabel: LabelUtil.getLabelKeyWithTypeLabel([this.messageGroup, this.formControlName, 'date-picker']),
            datePickerErrorLabel: LabelUtil.getLabelKeyWithTypeLabel([
                this.messageGroup,
                this.formControlName,
                'date-picker-error',
            ]),
            loadMoreLabel: LabelUtil.getLabelKeyWithTypeLabel([this.messageGroup, this.formControlName, 'load-more']),
        };
    }
    static ɵfac = function InputDatePickerComponent_Factory(t) { return new (t || InputDatePickerComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(i2.FormErrorService), i0.ɵɵdirectiveInject(i2.MessageGroupDirective, 8), i0.ɵɵdirectiveInject(i0.Injector), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputDatePickerComponent, selectors: [["app-form-date-picker"]], viewQuery: function InputDatePickerComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slickModal = _t.first);
        } }, inputs: { disableNoAvailableSlots: "disableNoAvailableSlots", withMoment: "withMoment", showLoadMore: "showLoadMore", timeslots: "timeslots", updateSlots: "updateSlots", dateSlideConfig: "dateSlideConfig" }, outputs: { loadMore: "loadMore" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputDatePickerComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 9, vars: 10, consts: [[1, "section", "section-date", "container"], [1, "text-flow", "text-flow--h3", "section__title", "text-align--center"], ["class", "notification notification--errorfield notification--errorfield--flow", 4, "ngIf"], ["class", "label-modifier-box slick-slider card-date card-date-with-value", 3, "config", 4, "ngIf"], [3, "messageGroup", "loadMoreSlots", 4, "ngIf"], [1, "notification", "notification--errorfield", "notification--errorfield--flow"], [1, "icon", "icon-error-shape", "errorfield"], [1, "label-modifier-box", "slick-slider", "card-date", "card-date-with-value", 3, "config"], ["slickModal", "slick-carousel"], [4, "ngIf"], [3, "ngSubmit", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["ngxSlickItem", "", 1, "label-modifier-slot", "slick-slide", "animation-show-slide-up"], ["type", "radio", "name", "day", 1, "label-modifier-radio", 3, "value", "id", "disabled", "checked"], [1, "label-modifier--append", "label-modifier--container", "cursor--pointer"], [1, "label-modifier--body"], [1, "label-modifier--body--inner-container"], [1, "label-modifier-radio__label", 3, "for", "click"], [1, "text-flow", "text-flow--label", "label-modifier-content__header"], [1, "text-flow", "text-flow--body", "label-modifier-content__body"], ["class", "text-flow text-flow--label label-modifier-content__timing", 4, "ngIf"], [1, "text-flow", "text-flow--label", "label-modifier-content__footer"], [1, "text-flow", "text-flow--label", "label-modifier-content__timing"], [1, "icon", "icon-sunrise"], [1, "icon", "icon-sun"], [1, "icon", "icon-sun-half-semifilled"], [1, "icon", "icon-moon"], [3, "ngSubmit"], [1, "button", "button--secondary", "mt-50", 3, "innerHTML"], [3, "messageGroup", "loadMoreSlots"]], template: function InputDatePickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵtext(2);
            i0.ɵɵpipe(3, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, InputDatePickerComponent_div_4_Template, 4, 3, "div", 2)(5, InputDatePickerComponent_ngx_slick_carousel_5_Template, 4, 3, "ngx-slick-carousel", 3);
            i0.ɵɵpipe(6, "async");
            i0.ɵɵtemplate(7, InputDatePickerComponent_app_new_no_available_appointment_date_7_Template, 1, 1, "app-new-no-available-appointment-date", 4);
            i0.ɵɵpipe(8, "async");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 4, ctx.labels.datePickerLabel), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.error);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(6, 6, ctx.appointmentsAvailable$));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !i0.ɵɵpipeBind1(8, 8, ctx.appointmentsAvailable$));
        } }, dependencies: [i3.NgForOf, i3.NgIf, i4.ɵNgNoValidate, i4.NgControlStatusGroup, i4.NgForm, i5.SlickCarouselComponent, i5.SlickItemDirective, i6.FormDirective, i7.MessageGroupDirective, i8.NewNoAvailableAppointmentDateComponent, i3.AsyncPipe, i3.DatePipe, i9.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputDatePickerComponent, [{
        type: Component,
        args: [{ selector: 'app-form-date-picker', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputDatePickerComponent),
                        multi: true,
                    },
                ], template: "<div class=\"section section-date container\">\n  <div class=\"text-flow text-flow--h3 section__title text-align--center\">\n    {{ labels.datePickerLabel | translate }}\n  </div>\n  <div class=\"notification notification--errorfield notification--errorfield--flow\" *ngIf=\"error\">\n    <span class=\"icon icon-error-shape errorfield\">{{ labels.datePickerErrorLabel | translate }}</span>\n  </div>\n  <ngx-slick-carousel\n    *ngIf=\"appointmentsAvailable$ | async\"\n    class=\"label-modifier-box slick-slider card-date card-date-with-value\"\n    #slickModal=\"slick-carousel\"\n    [config]=\"dateSlideConfig\">\n    <ng-container *ngIf=\"!reRender\">\n      <ng-container *ngFor=\"let appointmentSlot of timeslots; let i = index\">\n        <div\n          ngxSlickItem\n          class=\"label-modifier-slot slick-slide animation-show-slide-up\"\n          style=\"{{ '--animation-delay:' + (i - this.dateSlideConfig.initialSlide) }}\">\n          <input\n            type=\"radio\"\n            name=\"day\"\n            value=\"{{ appointmentSlot.date | date: 'ddmm' }}\"\n            id=\"day-{{ i }}\"\n            class=\"label-modifier-radio\"\n            [disabled]=\"withMoment && !appointmentSlot.hasAvailableMoments()\"\n            [checked]=\"appointmentSlot === selectedTimeslot\" />\n          <div\n            class=\"label-modifier--append label-modifier--container cursor--pointer\"\n            [class.disabled]=\"withMoment && !appointmentSlot.hasAvailableMoments()\">\n            <div class=\"label-modifier--body\">\n              <div class=\"label-modifier--body--inner-container\">\n                <label\n                  for=\"day-{{ i }}\"\n                  class=\"label-modifier-radio__label\"\n                  (click)=\"selectInstallSlotDay(appointmentSlot)\"></label>\n                <div class=\"text-flow text-flow--label label-modifier-content__header\">\n                  {{ appointmentSlot.date | date: 'EEEE' }}\n                </div>\n                <div class=\"text-flow text-flow--body label-modifier-content__body\">\n                  {{ appointmentSlot.date | date: 'dd' }}\n                </div>\n                <div class=\"text-flow text-flow--label label-modifier-content__timing\" *ngIf=\"withMoment\">\n                  <i\n                    class=\"icon icon-sunrise\"\n                    [class.disabled]=\"!appointmentSlot.hasAvailableMoment(appointmentMomentEnum.MORNING)\"></i>\n                  <i\n                    class=\"icon icon-sun\"\n                    [class.disabled]=\"!appointmentSlot.hasAvailableMoment(appointmentMomentEnum.LUNCH)\"></i>\n                  <i\n                    class=\"icon icon-sun-half-semifilled\"\n                    [class.disabled]=\"!appointmentSlot.hasAvailableMoment(appointmentMomentEnum.AFTERNOON)\"></i>\n                  <i\n                    class=\"icon icon-moon\"\n                    [class.disabled]=\"!appointmentSlot.hasAvailableMoment(appointmentMomentEnum.EVENING)\"></i>\n                </div>\n                <div class=\"text-flow text-flow--label label-modifier-content__footer\">\n                  {{ appointmentSlot.date | date: 'MMMM yyyy' }}\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </ng-container>\n    </ng-container>\n    <form (ngSubmit)=\"loadMoreSlots()\" *ngIf=\"showLoadMore && !reRender\">\n      <button class=\"button button--secondary mt-50\" [innerHTML]=\"labels.loadMoreLabel | translate\"></button>\n    </form>\n  </ngx-slick-carousel>\n  <app-new-no-available-appointment-date\n    *ngIf=\"!(appointmentsAvailable$ | async)\"\n    (loadMoreSlots)=\"loadMoreSlots()\"\n    [messageGroup]=\"messageGroup\"></app-new-no-available-appointment-date>\n</div>\n" }]
    }], () => [{ type: i1.LanguageService }, { type: i2.FormErrorService }, { type: i2.MessageGroupDirective, decorators: [{
                type: Optional
            }] }, { type: i0.Injector }, { type: i0.ChangeDetectorRef }], { disableNoAvailableSlots: [{
            type: Input
        }], withMoment: [{
            type: Input
        }], showLoadMore: [{
            type: Input
        }], timeslots: [{
            type: Input
        }], updateSlots: [{
            type: Input
        }], dateSlideConfig: [{
            type: Input
        }], loadMore: [{
            type: Output
        }], slickModal: [{
            type: ViewChild,
            args: ['slickModal']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputDatePickerComponent, { className: "InputDatePickerComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xzL25ldy1hcHBvaW50bWVudC1waWNrZXIvY29tcG9uZW50cy9kYXRlLXBpY2tlci9kYXRlLXBpY2tlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29udHJvbHMvbmV3LWFwcG9pbnRtZW50LXBpY2tlci9jb21wb25lbnRzL2RhdGUtcGlja2VyL2RhdGUtcGlja2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFFVixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFFTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFM0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdkQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFekQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7Ozs7Ozs7SUNsQjFELDhCQUFnRyxjQUFBO0lBQy9DLFlBQTZDOztJQUFBLGlCQUFPLEVBQUE7OztJQUFwRCxlQUE2QztJQUE3Qyw4RUFBNkM7OztJQW9DaEYsK0JBQTBGO0lBQ3hGLHdCQUU0RixZQUFBLFlBQUEsWUFBQTtJQVU5RixpQkFBTTs7OztJQVZGLGNBQXFGO0lBQXJGLHdHQUFxRjtJQUdyRixjQUFtRjtJQUFuRixzR0FBbUY7SUFHbkYsY0FBdUY7SUFBdkYsMEdBQXVGO0lBR3ZGLGNBQXFGO0lBQXJGLHdHQUFxRjs7OztJQXhDbkcsNkJBQXVFO0lBQ3JFLCtCQUcrRTtJQUM3RSw0QkFPcUQ7O0lBQ3JELCtCQUUwRSxjQUFBLGNBQUEsZ0JBQUE7SUFNbEUsMFJBQVMsZUFBQSxnREFBcUMsQ0FBQSxJQUFDO0lBQUMsaUJBQVE7SUFDMUQsK0JBQXVFO0lBQ3JFLFlBQ0Y7O0lBQUEsaUJBQU07SUFDTixnQ0FBb0U7SUFDbEUsYUFDRjs7SUFBQSxpQkFBTTtJQUNOLCtIQWFNO0lBQ04sZ0NBQXVFO0lBQ3JFLGFBQ0Y7O0lBQUEsaUJBQU0sRUFBQSxFQUFBLEVBQUEsRUFBQTtJQUtoQiwwQkFBZTs7Ozs7SUE3Q1gsY0FBNEU7SUFBNUUsa0ZBQTRFO0lBSTFFLGNBQWlEO0lBQWpELHlGQUFpRDtJQUNqRCxpREFBZ0I7SUFFaEIseUZBQWlFLDJEQUFBO0lBSWpFLGVBQXVFO0lBQXZFLDBGQUF1RTtJQUlqRSxlQUFpQjtJQUFqQixrREFBaUI7SUFJakIsZUFDRjtJQURFLHdGQUNGO0lBRUUsZUFDRjtJQURFLHNGQUNGO0lBQ3dFLGVBQWdCO0lBQWhCLHdDQUFnQjtJQWV0RixlQUNGO0lBREUsNkZBQ0Y7OztJQTdDWiw2QkFBZ0M7SUFDOUIsa0lBaURlO0lBQ2pCLDBCQUFlOzs7SUFsRDZCLGNBQWM7SUFBZCwwQ0FBYzs7OztJQW1EMUQsZ0NBQXFFO0lBQS9ELGtNQUFZLGVBQUEsdUJBQWUsQ0FBQSxJQUFDO0lBQ2hDLDZCQUF1Rzs7SUFDekcsaUJBQU87OztJQUQwQyxjQUE4QztJQUE5QyxnR0FBOEM7OztJQTFEakcsZ0RBSTZCO0lBQzNCLGdIQW1EZSxvRkFBQTtJQUlqQixpQkFBcUI7OztJQXhEbkIsK0NBQTBCO0lBQ1gsZUFBZTtJQUFmLHVDQUFlO0lBb0RNLGNBQStCO0lBQS9CLDhEQUErQjs7OztJQUlyRSxpRUFHZ0M7SUFEOUIsd1BBQWlCLGVBQUEsdUJBQWUsQ0FBQSxJQUFDO0lBQ0gsaUJBQXdDOzs7SUFBdEUsa0RBQTZCOztBRGpDakMsTUFBTSxPQUFPLHdCQUF5QixTQUFRLHNCQUFzQjtJQWlCekQ7SUFDQTtJQUNZO0lBQ1o7SUFDVTtJQXBCVix1QkFBdUIsR0FBRyxLQUFLLENBQUM7SUFDaEMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUNuQixZQUFZLENBQVU7SUFDdEIsU0FBUyxDQUErQjtJQUN4QyxXQUFXLENBQStCO0lBQzFDLGVBQWUsR0FBeUIsc0JBQXNCLENBQUM7SUFDOUQsUUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDeEMsTUFBTSxDQUE0QjtJQUNsQyxnQkFBZ0IsQ0FBOEI7SUFDOUMscUJBQXFCLEdBQUcsa0JBQWtCLENBQUM7SUFDbEIsVUFBVSxDQUF5QjtJQUU1RCxzQkFBc0IsQ0FBc0I7SUFDNUMsUUFBUSxDQUFVO0lBRWxCLFlBQ1MsZUFBZ0MsRUFDaEMsV0FBNkIsRUFDakIscUJBQTRDLEVBQ3hELFFBQWtCLEVBQ1IsR0FBc0I7UUFFdkMsS0FBSyxDQUFDLGVBQWUsRUFBRSxXQUFXLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFOOUQsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUNqQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQ3hELGFBQVEsR0FBUixRQUFRLENBQVU7UUFDUixRQUFHLEdBQUgsR0FBRyxDQUFtQjtJQUd6QyxDQUFDO0lBRUQsUUFBUTtRQUNOLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLHNCQUFzQixHQUFHLFlBQVksQ0FBQyw4QkFBOEIsQ0FDdkUsSUFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFLEVBQ3BCLElBQUksQ0FBQyx1QkFBdUIsQ0FDN0IsQ0FBQztJQUNKLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBRSxZQUFZLENBQUM7UUFDNUQsQ0FBQztRQUVELElBQ0UsT0FBTyxDQUFDLGFBQWEsQ0FBQztZQUN0QixJQUFJLENBQUMsV0FBVztZQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU07WUFDL0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNyRixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFDbkUsQ0FBQztZQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0UsQ0FBQyxDQUFDLENBQUM7WUFDSCxPQUFPO1FBQ1QsQ0FBQztRQUVELElBQ0UsT0FBTyxDQUFDLGFBQWEsQ0FBQztZQUN0QixJQUFJLENBQUMsV0FBVztZQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLEVBQ25FLENBQUM7WUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxZQUFZLENBQUM7WUFDckQsSUFBSSxDQUFDLHNCQUFzQixHQUFHLFlBQVksQ0FBQyw4QkFBOEIsQ0FDdkUsSUFBSSxDQUFDLFdBQVcsRUFDaEIsSUFBSSxDQUFDLHVCQUF1QixDQUM3QixDQUFDO1FBQ0osQ0FBQztJQUNILENBQUM7SUFFRCxRQUFRLEdBQUcsQ0FBQyxDQUE2QixFQUFFLEVBQUU7UUFDM0MsbUJBQW1CO0lBQ3JCLENBQUMsQ0FBQztJQUVGLE9BQU8sR0FBRyxDQUFDLENBQVUsRUFBRSxFQUFFO1FBQ3ZCLG1CQUFtQjtJQUNyQixDQUFDLENBQUM7SUFFRixnQkFBZ0IsQ0FBQyxFQUFnQjtRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsaUJBQWlCLENBQUMsRUFBZ0I7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFpQztRQUMxQyxJQUFJLEtBQUssRUFBRSxDQUFDO1lBQ1YsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7Z0JBQ3ZELE9BQU8scUJBQXFCLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM1RCxDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQ2hDLENBQUM7SUFDSCxDQUFDO0lBRUQsb0JBQW9CLENBQUMsZUFBMkM7UUFDOUQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGVBQWUsQ0FBQztRQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxzQkFBc0I7UUFDNUIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUMxQixNQUFNLGlCQUFpQixHQUFHLHFCQUFxQixDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDaEgsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEdBQUcscUJBQXFCLENBQUMsb0JBQW9CLENBQzVFLGlCQUFpQixFQUNqQixJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FDcEMsQ0FBQztRQUNKLENBQUM7SUFDSCxDQUFDO0lBRU8sU0FBUztRQUNmLElBQUksQ0FBQyxNQUFNLEdBQUc7WUFDWixlQUFlLEVBQUUsU0FBUyxDQUFDLHdCQUF3QixDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1lBQzdHLG9CQUFvQixFQUFFLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDdkQsSUFBSSxDQUFDLFlBQVk7Z0JBQ2pCLElBQUksQ0FBQyxlQUFlO2dCQUNwQixtQkFBbUI7YUFDcEIsQ0FBQztZQUNGLGFBQWEsRUFBRSxTQUFTLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsV0FBVyxDQUFDLENBQUM7U0FDMUcsQ0FBQztJQUNKLENBQUM7a0ZBN0hVLHdCQUF3Qjs2REFBeEIsd0JBQXdCOzs7OztpU0FSeEI7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztvQkFDdkQsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDRjtZQ3BDSCw4QkFBNEMsYUFBQTtZQUV4QyxZQUNGOztZQUFBLGlCQUFNO1lBQ04seUVBRU0sMEZBQUE7O1lBOEROLDZJQUd3RTs7WUFDMUUsaUJBQU07O1lBdEVGLGVBQ0Y7WUFERSxpRkFDRjtZQUNtRixlQUFXO1lBQVgsZ0NBQVc7WUFJM0YsY0FBb0M7WUFBcEMsdUVBQW9DO1lBNkRwQyxlQUF1QztZQUF2Qyx3RUFBdUM7OztpRkQvQi9CLHdCQUF3QjtjQVhwQyxTQUFTOzJCQUNFLHNCQUFzQixhQUVyQjtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSx5QkFBeUIsQ0FBQzt3QkFDdkQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7O3NCQXFCRSxRQUFROzRFQWxCRix1QkFBdUI7a0JBQS9CLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNJLFFBQVE7a0JBQWpCLE1BQU07WUFJa0IsVUFBVTtrQkFBbEMsU0FBUzttQkFBQyxZQUFZOztrRkFYWix3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIEluamVjdG9yLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSB9IGZyb20gJ0B0ZWxlbmV0L25nLWxpYi1wYWdlJztcbmltcG9ydCB7IElucHV0QWJzdHJhY3RDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9pbnB1dC1hYnN0cmFjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlckxhYmVsc0ludGVyZmFjZSwgU2xpZGVDb25maWdJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IFRpbWVzbG90TW9tZW50RW51bSB9IGZyb20gJy4uLy4uLy4uLy4uL2VudW1zJztcbmltcG9ydCB7IERlZmF1bHREYXRlU2xpZGVDb25maWcgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgRm9ybUVycm9yU2VydmljZSwgTWVzc2FnZUdyb3VwRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZXJyb3JzJztcbmltcG9ydCB7IEFwcG9pbnRtZW50UGlja2VyVXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IExhYmVsVXRpbCwgVGltZXNsb3RVdGlsIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgQXBwb2ludG1lbnRUcmFuc2Zvcm1lclNsb3QgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbHMnO1xuaW1wb3J0IHsgU2xpY2tDYXJvdXNlbENvbXBvbmVudCB9IGZyb20gJ25neC1zbGljay1jYXJvdXNlbCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1mb3JtLWRhdGUtcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGUtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBJbnB1dERhdGVQaWNrZXJDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXREYXRlUGlja2VyQ29tcG9uZW50IGV4dGVuZHMgSW5wdXRBYnN0cmFjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgZGlzYWJsZU5vQXZhaWxhYmxlU2xvdHMgPSBmYWxzZTtcbiAgQElucHV0KCkgd2l0aE1vbWVudCA9IGZhbHNlO1xuICBASW5wdXQoKSBzaG93TG9hZE1vcmU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHRpbWVzbG90czogQXBwb2ludG1lbnRUcmFuc2Zvcm1lclNsb3RbXTtcbiAgQElucHV0KCkgdXBkYXRlU2xvdHM6IEFwcG9pbnRtZW50VHJhbnNmb3JtZXJTbG90W107XG4gIEBJbnB1dCgpIGRhdGVTbGlkZUNvbmZpZzogU2xpZGVDb25maWdJbnRlcmZhY2UgPSBEZWZhdWx0RGF0ZVNsaWRlQ29uZmlnO1xuICBAT3V0cHV0KCkgbG9hZE1vcmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGxhYmVsczogRGF0ZVBpY2tlckxhYmVsc0ludGVyZmFjZTtcbiAgc2VsZWN0ZWRUaW1lc2xvdD86IEFwcG9pbnRtZW50VHJhbnNmb3JtZXJTbG90O1xuICBhcHBvaW50bWVudE1vbWVudEVudW0gPSBUaW1lc2xvdE1vbWVudEVudW07XG4gIEBWaWV3Q2hpbGQoJ3NsaWNrTW9kYWwnKSBzbGlja01vZGFsOiBTbGlja0Nhcm91c2VsQ29tcG9uZW50O1xuXG4gIGFwcG9pbnRtZW50c0F2YWlsYWJsZSQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIHJlUmVuZGVyOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZSxcbiAgICBwdWJsaWMgZm9ybVNlcnZpY2U6IEZvcm1FcnJvclNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIG1lc3NhZ2VHcm91cERpcmVjdGl2ZTogTWVzc2FnZUdyb3VwRGlyZWN0aXZlLFxuICAgIHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSByZWFkb25seSBjZHI6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIHN1cGVyKGxhbmd1YWdlU2VydmljZSwgZm9ybVNlcnZpY2UsIG1lc3NhZ2VHcm91cERpcmVjdGl2ZSwgaW5qZWN0b3IpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgICB0aGlzLnNldExhYmVscygpO1xuICAgIHRoaXMuYXBwb2ludG1lbnRzQXZhaWxhYmxlJCA9IFRpbWVzbG90VXRpbC5jYWxjdWxhdGVUaW1lU2xvdHNBdmFpbGFiaWxpdHkoXG4gICAgICB0aGlzLnRpbWVzbG90cyA/PyBbXSxcbiAgICAgIHRoaXMuZGlzYWJsZU5vQXZhaWxhYmxlU2xvdHNcbiAgICApO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzWydzaG93TG9hZE1vcmUnXSkge1xuICAgICAgdGhpcy5zaG93TG9hZE1vcmUgPSBjaGFuZ2VzWydzaG93TG9hZE1vcmUnXT8uY3VycmVudFZhbHVlO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGNoYW5nZXNbJ3VwZGF0ZVNsb3RzJ10gJiZcbiAgICAgIHRoaXMudXBkYXRlU2xvdHMgJiZcbiAgICAgIHRoaXMudGltZXNsb3RzLmxlbmd0aCA+IHRoaXMudXBkYXRlU2xvdHMubGVuZ3RoICYmXG4gICAgICB0aGlzLnRpbWVzbG90c1t0aGlzLnRpbWVzbG90cy5sZW5ndGggLSB0aGlzLnVwZGF0ZVNsb3RzLmxlbmd0aCAtIDFdLmRhdGUudG9EYXRlU3RyaW5nKCkgIT09XG4gICAgICAgIHRoaXMudXBkYXRlU2xvdHNbdGhpcy51cGRhdGVTbG90cy5sZW5ndGggLSAxXS5kYXRlLnRvRGF0ZVN0cmluZygpXG4gICAgKSB7XG4gICAgICB0aGlzLnJlUmVuZGVyID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnJlUmVuZGVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgdGhpcy5zbGlja01vZGFsLnNsaWNrR29Ubyh0aGlzLnRpbWVzbG90cy5sZW5ndGggLSB0aGlzLnVwZGF0ZVNsb3RzLmxlbmd0aCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBjaGFuZ2VzWyd1cGRhdGVTbG90cyddICYmXG4gICAgICB0aGlzLnVwZGF0ZVNsb3RzICYmXG4gICAgICB0aGlzLnRpbWVzbG90cy5sZW5ndGggPiAwICYmXG4gICAgICB0aGlzLnRpbWVzbG90cy5ldmVyeSgodGltZXNsb3QpID0+ICF0aW1lc2xvdC5oYXNBdmFpbGFibGVNb21lbnRzKCkpXG4gICAgKSB7XG4gICAgICB0aGlzLnRpbWVzbG90cyA9IGNoYW5nZXNbJ3VwZGF0ZVNsb3RzJ10uY3VycmVudFZhbHVlO1xuICAgICAgdGhpcy5hcHBvaW50bWVudHNBdmFpbGFibGUkID0gVGltZXNsb3RVdGlsLmNhbGN1bGF0ZVRpbWVTbG90c0F2YWlsYWJpbGl0eShcbiAgICAgICAgdGhpcy51cGRhdGVTbG90cyxcbiAgICAgICAgdGhpcy5kaXNhYmxlTm9BdmFpbGFibGVTbG90c1xuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZSA9IChfOiBBcHBvaW50bWVudFRyYW5zZm9ybWVyU2xvdCkgPT4ge1xuICAgIC8vIGVtcHR5IG9uIHB1cnBvc2VcbiAgfTtcblxuICBvblRvdWNoID0gKF86IGJvb2xlYW4pID0+IHtcbiAgICAvLyBlbXB0eSBvbiBwdXJwb3NlXG4gIH07XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogVm9pZEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IFZvaWRGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaCA9IGZuO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogQXBwb2ludG1lbnRUcmFuc2Zvcm1lclNsb3QpOiB2b2lkIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRUaW1lc2xvdCA9IHRoaXMudGltZXNsb3RzLmZpbmQoKHRpbWVzbG90KSA9PiB7XG4gICAgICAgIHJldHVybiBBcHBvaW50bWVudFBpY2tlclV0aWwuY29tcGFyZURhdGUodGltZXNsb3QsIHZhbHVlKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkU2xpZGVzKCk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0SW5zdGFsbFNsb3REYXkoYXBwb2ludG1lbnRTbG90OiBBcHBvaW50bWVudFRyYW5zZm9ybWVyU2xvdCkge1xuICAgIHRoaXMuc2VsZWN0ZWRUaW1lc2xvdCA9IGFwcG9pbnRtZW50U2xvdDtcbiAgICB0aGlzLm9uVG91Y2godHJ1ZSk7XG4gICAgdGhpcy5vbkNoYW5nZShhcHBvaW50bWVudFNsb3QpO1xuICB9XG5cbiAgbG9hZE1vcmVTbG90cygpIHtcbiAgICB0aGlzLmxvYWRNb3JlLmVtaXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2Nyb2xsVG9TZWxlY3RlZFNsaWRlcygpIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZFRpbWVzbG90KSB7XG4gICAgICBjb25zdCBzZWxlY3RlZFNsb3RJbmRleCA9IEFwcG9pbnRtZW50UGlja2VyVXRpbC5nZXRTZWxlY3RlZERhdGVTbG90SW5kZXgodGhpcy50aW1lc2xvdHMsIHRoaXMuc2VsZWN0ZWRUaW1lc2xvdCk7XG4gICAgICB0aGlzLmRhdGVTbGlkZUNvbmZpZy5pbml0aWFsU2xpZGUgPSBBcHBvaW50bWVudFBpY2tlclV0aWwuZ2V0SW5pdGlhbFNsaWRlSW5kZXgoXG4gICAgICAgIHNlbGVjdGVkU2xvdEluZGV4LFxuICAgICAgICB0aGlzLmRhdGVTbGlkZUNvbmZpZy5zbGlkZXNUb1Njcm9sbFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldExhYmVscygpIHtcbiAgICB0aGlzLmxhYmVscyA9IHtcbiAgICAgIGRhdGVQaWNrZXJMYWJlbDogTGFiZWxVdGlsLmdldExhYmVsS2V5V2l0aFR5cGVMYWJlbChbdGhpcy5tZXNzYWdlR3JvdXAsIHRoaXMuZm9ybUNvbnRyb2xOYW1lLCAnZGF0ZS1waWNrZXInXSksXG4gICAgICBkYXRlUGlja2VyRXJyb3JMYWJlbDogTGFiZWxVdGlsLmdldExhYmVsS2V5V2l0aFR5cGVMYWJlbChbXG4gICAgICAgIHRoaXMubWVzc2FnZUdyb3VwLFxuICAgICAgICB0aGlzLmZvcm1Db250cm9sTmFtZSxcbiAgICAgICAgJ2RhdGUtcGlja2VyLWVycm9yJyxcbiAgICAgIF0pLFxuICAgICAgbG9hZE1vcmVMYWJlbDogTGFiZWxVdGlsLmdldExhYmVsS2V5V2l0aFR5cGVMYWJlbChbdGhpcy5tZXNzYWdlR3JvdXAsIHRoaXMuZm9ybUNvbnRyb2xOYW1lLCAnbG9hZC1tb3JlJ10pLFxuICAgIH07XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJzZWN0aW9uIHNlY3Rpb24tZGF0ZSBjb250YWluZXJcIj5cbiAgPGRpdiBjbGFzcz1cInRleHQtZmxvdyB0ZXh0LWZsb3ctLWgzIHNlY3Rpb25fX3RpdGxlIHRleHQtYWxpZ24tLWNlbnRlclwiPlxuICAgIHt7IGxhYmVscy5kYXRlUGlja2VyTGFiZWwgfCB0cmFuc2xhdGUgfX1cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJub3RpZmljYXRpb24gbm90aWZpY2F0aW9uLS1lcnJvcmZpZWxkIG5vdGlmaWNhdGlvbi0tZXJyb3JmaWVsZC0tZmxvd1wiICpuZ0lmPVwiZXJyb3JcIj5cbiAgICA8c3BhbiBjbGFzcz1cImljb24gaWNvbi1lcnJvci1zaGFwZSBlcnJvcmZpZWxkXCI+e3sgbGFiZWxzLmRhdGVQaWNrZXJFcnJvckxhYmVsIHwgdHJhbnNsYXRlIH19PC9zcGFuPlxuICA8L2Rpdj5cbiAgPG5neC1zbGljay1jYXJvdXNlbFxuICAgICpuZ0lmPVwiYXBwb2ludG1lbnRzQXZhaWxhYmxlJCB8IGFzeW5jXCJcbiAgICBjbGFzcz1cImxhYmVsLW1vZGlmaWVyLWJveCBzbGljay1zbGlkZXIgY2FyZC1kYXRlIGNhcmQtZGF0ZS13aXRoLXZhbHVlXCJcbiAgICAjc2xpY2tNb2RhbD1cInNsaWNrLWNhcm91c2VsXCJcbiAgICBbY29uZmlnXT1cImRhdGVTbGlkZUNvbmZpZ1wiPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhcmVSZW5kZXJcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGFwcG9pbnRtZW50U2xvdCBvZiB0aW1lc2xvdHM7IGxldCBpID0gaW5kZXhcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIG5neFNsaWNrSXRlbVxuICAgICAgICAgIGNsYXNzPVwibGFiZWwtbW9kaWZpZXItc2xvdCBzbGljay1zbGlkZSBhbmltYXRpb24tc2hvdy1zbGlkZS11cFwiXG4gICAgICAgICAgc3R5bGU9XCJ7eyAnLS1hbmltYXRpb24tZGVsYXk6JyArIChpIC0gdGhpcy5kYXRlU2xpZGVDb25maWcuaW5pdGlhbFNsaWRlKSB9fVwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgIG5hbWU9XCJkYXlcIlxuICAgICAgICAgICAgdmFsdWU9XCJ7eyBhcHBvaW50bWVudFNsb3QuZGF0ZSB8IGRhdGU6ICdkZG1tJyB9fVwiXG4gICAgICAgICAgICBpZD1cImRheS17eyBpIH19XCJcbiAgICAgICAgICAgIGNsYXNzPVwibGFiZWwtbW9kaWZpZXItcmFkaW9cIlxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cIndpdGhNb21lbnQgJiYgIWFwcG9pbnRtZW50U2xvdC5oYXNBdmFpbGFibGVNb21lbnRzKClcIlxuICAgICAgICAgICAgW2NoZWNrZWRdPVwiYXBwb2ludG1lbnRTbG90ID09PSBzZWxlY3RlZFRpbWVzbG90XCIgLz5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cImxhYmVsLW1vZGlmaWVyLS1hcHBlbmQgbGFiZWwtbW9kaWZpZXItLWNvbnRhaW5lciBjdXJzb3ItLXBvaW50ZXJcIlxuICAgICAgICAgICAgW2NsYXNzLmRpc2FibGVkXT1cIndpdGhNb21lbnQgJiYgIWFwcG9pbnRtZW50U2xvdC5oYXNBdmFpbGFibGVNb21lbnRzKClcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbC1tb2RpZmllci0tYm9keVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWwtbW9kaWZpZXItLWJvZHktLWlubmVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgZm9yPVwiZGF5LXt7IGkgfX1cIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsYWJlbC1tb2RpZmllci1yYWRpb19fbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdEluc3RhbGxTbG90RGF5KGFwcG9pbnRtZW50U2xvdClcIj48L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWZsb3cgdGV4dC1mbG93LS1sYWJlbCBsYWJlbC1tb2RpZmllci1jb250ZW50X19oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgIHt7IGFwcG9pbnRtZW50U2xvdC5kYXRlIHwgZGF0ZTogJ0VFRUUnIH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtZmxvdyB0ZXh0LWZsb3ctLWJvZHkgbGFiZWwtbW9kaWZpZXItY29udGVudF9fYm9keVwiPlxuICAgICAgICAgICAgICAgICAge3sgYXBwb2ludG1lbnRTbG90LmRhdGUgfCBkYXRlOiAnZGQnIH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtZmxvdyB0ZXh0LWZsb3ctLWxhYmVsIGxhYmVsLW1vZGlmaWVyLWNvbnRlbnRfX3RpbWluZ1wiICpuZ0lmPVwid2l0aE1vbWVudFwiPlxuICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpY29uIGljb24tc3VucmlzZVwiXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCIhYXBwb2ludG1lbnRTbG90Lmhhc0F2YWlsYWJsZU1vbWVudChhcHBvaW50bWVudE1vbWVudEVudW0uTU9STklORylcIj48L2k+XG4gICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImljb24gaWNvbi1zdW5cIlxuICAgICAgICAgICAgICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwiIWFwcG9pbnRtZW50U2xvdC5oYXNBdmFpbGFibGVNb21lbnQoYXBwb2ludG1lbnRNb21lbnRFbnVtLkxVTkNIKVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaWNvbiBpY29uLXN1bi1oYWxmLXNlbWlmaWxsZWRcIlxuICAgICAgICAgICAgICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwiIWFwcG9pbnRtZW50U2xvdC5oYXNBdmFpbGFibGVNb21lbnQoYXBwb2ludG1lbnRNb21lbnRFbnVtLkFGVEVSTk9PTilcIj48L2k+XG4gICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImljb24gaWNvbi1tb29uXCJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmRpc2FibGVkXT1cIiFhcHBvaW50bWVudFNsb3QuaGFzQXZhaWxhYmxlTW9tZW50KGFwcG9pbnRtZW50TW9tZW50RW51bS5FVkVOSU5HKVwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1mbG93IHRleHQtZmxvdy0tbGFiZWwgbGFiZWwtbW9kaWZpZXItY29udGVudF9fZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICB7eyBhcHBvaW50bWVudFNsb3QuZGF0ZSB8IGRhdGU6ICdNTU1NIHl5eXknIH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPGZvcm0gKG5nU3VibWl0KT1cImxvYWRNb3JlU2xvdHMoKVwiICpuZ0lmPVwic2hvd0xvYWRNb3JlICYmICFyZVJlbmRlclwiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXNlY29uZGFyeSBtdC01MFwiIFtpbm5lckhUTUxdPVwibGFiZWxzLmxvYWRNb3JlTGFiZWwgfCB0cmFuc2xhdGVcIj48L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gIDwvbmd4LXNsaWNrLWNhcm91c2VsPlxuICA8YXBwLW5ldy1uby1hdmFpbGFibGUtYXBwb2ludG1lbnQtZGF0ZVxuICAgICpuZ0lmPVwiIShhcHBvaW50bWVudHNBdmFpbGFibGUkIHwgYXN5bmMpXCJcbiAgICAobG9hZE1vcmVTbG90cyk9XCJsb2FkTW9yZVNsb3RzKClcIlxuICAgIFttZXNzYWdlR3JvdXBdPVwibWVzc2FnZUdyb3VwXCI+PC9hcHAtbmV3LW5vLWF2YWlsYWJsZS1hcHBvaW50bWVudC1kYXRlPlxuPC9kaXY+XG4iXX0=