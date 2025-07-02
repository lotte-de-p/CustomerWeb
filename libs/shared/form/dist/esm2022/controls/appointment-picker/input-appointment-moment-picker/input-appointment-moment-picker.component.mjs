import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TimeslotMomentEnum } from '../../../enums';
import { AppointmentPickerTypeEnum } from '../appointment-picker-type.enum';
import { AppointmentPickerConsumerTypeEnum } from '../../../interfaces';
import { LabelUtil, TimeslotUtil } from '../../../utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ngx-slick-carousel";
import * as i3 from "../../../errors/message-group.directive";
import * as i4 from "../no-available-appointment-date/no-available-appointment-date.component";
import * as i5 from "@ngx-translate/core";
import * as i6 from "../../../pipes/timeslot.pipe";
function InputAppointmentMomentPickerComponent_ng_container_3_app_no_available_appointment_date_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-no-available-appointment-date", 6);
    i0.ɵɵlistener("loadMoreSlots", function InputAppointmentMomentPickerComponent_ng_container_3_app_no_available_appointment_date_1_Template_app_no_available_appointment_date_loadMoreSlots_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r10.loadMoreSlots()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disableLoadMore", ctx_r8.startDate >= ctx_r8.endDate && ctx_r8.enableAppointmentsUI)("messageGroup", ctx_r8.messageGroup);
} }
const _c0 = (a0, a1, a2, a3, a4) => ({ moment: a0, i: a1, selectedMoment: a2, timeFormat: a3, label: a4 });
function InputAppointmentMomentPickerComponent_ng_container_3_ng_container_2_ng_container_1_ng_container_1_ngx_slick_carousel_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 12);
    i0.ɵɵelementContainer(2, 13);
    i0.ɵɵpipe(3, "timeslotFormat");
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const moment_r18 = ctx.$implicit;
    const i_r19 = ctx.index;
    const ctx_r17 = i0.ɵɵnextContext(6);
    const _r4 = i0.ɵɵreference(8);
    i0.ɵɵadvance();
    i0.ɵɵattribute("style", ctx_r17.getSlideUpAnimationStyling(i_r19), i0.ɵɵsanitizeStyle);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", _r4)("ngTemplateOutletContext", i0.ɵɵpureFunction5(7, _c0, moment_r18, i_r19, ctx_r17.selectedMoment, i0.ɵɵpipeBind1(3, 3, moment_r18), i0.ɵɵpipeBind1(4, 5, ctx_r17.getLabel(moment_r18))));
} }
function InputAppointmentMomentPickerComponent_ng_container_3_ng_container_2_ng_container_1_ng_container_1_ngx_slick_carousel_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ngx-slick-carousel", 9, 10);
    i0.ɵɵtemplate(2, InputAppointmentMomentPickerComponent_ng_container_3_ng_container_2_ng_container_1_ng_container_1_ngx_slick_carousel_1_ng_container_2_Template, 5, 13, "ng-container", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("config", ctx_r14.slideConfig);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r14.generateMoments());
} }
function InputAppointmentMomentPickerComponent_ng_container_3_ng_container_2_ng_container_1_ng_container_1_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementContainer(1, 13);
    i0.ɵɵpipe(2, "timeslotFormat");
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const moment_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    const ctx_r20 = i0.ɵɵnextContext(6);
    const _r6 = i0.ɵɵreference(10);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", _r6)("ngTemplateOutletContext", i0.ɵɵpureFunction5(6, _c0, moment_r21, i_r22, ctx_r20.selectedMoment, i0.ɵɵpipeBind1(2, 2, moment_r21), i0.ɵɵpipeBind1(3, 4, ctx_r20.getLabel(moment_r21))));
} }
function InputAppointmentMomentPickerComponent_ng_container_3_ng_container_2_ng_container_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 14);
    i0.ɵɵtemplate(2, InputAppointmentMomentPickerComponent_ng_container_3_ng_container_2_ng_container_1_ng_container_1_ng_container_2_ng_container_2_Template, 4, 12, "ng-container", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r15.generateMoments());
} }
function InputAppointmentMomentPickerComponent_ng_container_3_ng_container_2_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, InputAppointmentMomentPickerComponent_ng_container_3_ng_container_2_ng_container_1_ng_container_1_ngx_slick_carousel_1_Template, 3, 2, "ngx-slick-carousel", 8)(2, InputAppointmentMomentPickerComponent_ng_container_3_ng_container_2_ng_container_1_ng_container_1_ng_container_2_Template, 3, 1, "ng-container", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r13.enableAppointmentsUI);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r13.enableAppointmentsUI);
} }
function InputAppointmentMomentPickerComponent_ng_container_3_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, InputAppointmentMomentPickerComponent_ng_container_3_ng_container_2_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r12.reRender);
} }
function InputAppointmentMomentPickerComponent_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, InputAppointmentMomentPickerComponent_ng_container_3_ng_container_2_ng_container_1_Template, 2, 1, "ng-container", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    const _r2 = i0.ɵɵreference(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r9.consumerType === ctx_r9.consumerTypeEnum.NC)("ngIfElse", _r2);
} }
function InputAppointmentMomentPickerComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, InputAppointmentMomentPickerComponent_ng_container_3_app_no_available_appointment_date_1_Template, 1, 2, "app-no-available-appointment-date", 5)(2, InputAppointmentMomentPickerComponent_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r7 = ctx.ngIf;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !data_r7.appointmentsAvailable && !ctx_r0.selectedMoment);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", data_r7.appointmentsAvailable || ctx_r0.selectedMoment);
} }
function InputAppointmentMomentPickerComponent_ng_template_5_ng_container_1_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelementContainer(1, 13);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r28 = i0.ɵɵnextContext();
    const i_r26 = ctx_r28.index;
    const moment_r25 = ctx_r28.$implicit;
    const ctx_r27 = i0.ɵɵnextContext(3);
    const _r4 = i0.ɵɵreference(8);
    i0.ɵɵattribute("style", ctx_r27.getSlideUpAnimationStyling(i_r26), i0.ɵɵsanitizeStyle);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", _r4)("ngTemplateOutletContext", i0.ɵɵpureFunction5(7, _c0, moment_r25, i_r26, ctx_r27.selectedMoment, i0.ɵɵpipeBind1(2, 3, ctx_r27.getTimeslotMomentDisplay(moment_r25)), i0.ɵɵpipeBind1(3, 5, ctx_r27.getLabel(moment_r25))));
} }
function InputAppointmentMomentPickerComponent_ng_template_5_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, InputAppointmentMomentPickerComponent_ng_template_5_ng_container_1_ng_container_1_div_1_Template, 4, 13, "div", 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const moment_r25 = ctx.$implicit;
    const ctx_r24 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r24.getTimeslotMomentDisplay(moment_r25));
} }
function InputAppointmentMomentPickerComponent_ng_template_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, InputAppointmentMomentPickerComponent_ng_template_5_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r23 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r23.generateMoments());
} }
function InputAppointmentMomentPickerComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵtemplate(1, InputAppointmentMomentPickerComponent_ng_template_5_ng_container_1_Template, 2, 1, "ng-container", 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.reRender);
} }
function InputAppointmentMomentPickerComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelement(0, "input", 18);
    i0.ɵɵelementStart(1, "div", 19)(2, "div", 20)(3, "div", 21)(4, "label", 22);
    i0.ɵɵlistener("click", function InputAppointmentMomentPickerComponent_ng_template_7_Template_label_click_4_listener() { const restoredCtx = i0.ɵɵrestoreView(_r35); const moment_r30 = restoredCtx.moment; const ctx_r34 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r34.selectMoment(moment_r30)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 23);
    i0.ɵɵelement(6, "span", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 25)(8, "div", 26);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 27);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(12, "div");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const timeFormat_r29 = ctx.timeFormat;
    const moment_r30 = ctx.moment;
    const i_r31 = ctx.i;
    const selectedMoment_r32 = ctx.selectedMoment;
    const label_r33 = ctx.label;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("value", moment_r30);
    i0.ɵɵpropertyInterpolate1("id", "time-", i_r31, "");
    i0.ɵɵproperty("checked", moment_r30 === selectedMoment_r32);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("disabled", ctx_r3.isDisabled(moment_r30));
    i0.ɵɵattribute("data-cy", "appointment-time-picker-" + (moment_r30 == null ? null : moment_r30.toLowerCase()));
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate1("for", "time-", i_r31, "");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(label_r33);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(timeFormat_r29);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("label-modifier-box-content__timing icon icon-", ctx_r3.getIcon(moment_r30), "appointment");
} }
function InputAppointmentMomentPickerComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 28)(1, "label", 29);
    i0.ɵɵlistener("click", function InputAppointmentMomentPickerComponent_ng_template_9_Template_label_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r42); const moment_r37 = restoredCtx.moment; const ctx_r41 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r41.selectMoment(moment_r37)); });
    i0.ɵɵelement(2, "input", 30);
    i0.ɵɵelementStart(3, "div", 31)(4, "div", 32)(5, "div", 33)(6, "div", 34);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 35);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const timeFormat_r36 = ctx.timeFormat;
    const moment_r37 = ctx.moment;
    const i_r38 = ctx.i;
    const selectedMoment_r39 = ctx.selectedMoment;
    const label_r40 = ctx.label;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate1("for", "time-", i_r38, "");
    i0.ɵɵattribute("data-cy", "appointment-time-" + i_r38);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("value", moment_r37);
    i0.ɵɵpropertyInterpolate1("id", "time-", i_r38, "");
    i0.ɵɵproperty("checked", moment_r37 === selectedMoment_r39)("disabled", ctx_r5.isDisabled(moment_r37));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(label_r40);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(timeFormat_r36);
} }
const _c1 = a0 => ({ appointmentsAvailable: a0 });
export class InputAppointmentMomentPickerComponent {
    messageGroup;
    timeslots = [];
    startDate = new Date();
    endDate;
    selectedMoment;
    selectedTimeslot;
    consumerType;
    updateSlots;
    isDeviceLandscape;
    enableAppointmentsUI;
    momentPickerLabel;
    momentSelected = new EventEmitter();
    scrollTo = new EventEmitter();
    loadMore = new EventEmitter();
    appointmentsAvailable$;
    reRender = false;
    disabled;
    consumerTypeEnum = AppointmentPickerConsumerTypeEnum;
    slideConfig = {
        infinite: false,
        initialSlide: 0,
        mobileFirst: true,
        arrows: true,
        nextArrow: '<div class="cards-slider-button arrow arrow--right slick-arrow" aria-disabled="false"></div>',
        prevArrow: '<div class="cards-slider-button arrow arrow--left slick-arrow" aria-disabled="false"></div>',
        slidesToShow: 5,
        slidesToScroll: 5,
        variableWidth: true,
    };
    isDisabled(moment) {
        this.disabled = true;
        if (this.selectedTimeslot) {
            if (this.selectedTimeslot.hasAvailableMoment(moment)) {
                this.disabled = false;
            }
        }
        else if (this.timeslots) {
            this.timeslots.forEach((timeslot) => {
                if (timeslot.hasAvailableMoment(moment)) {
                    this.disabled = false;
                }
            });
        }
        return this.disabled;
    }
    ngOnInit() {
        this.reRender = true;
        const screenWidth = window.innerWidth;
        if (screenWidth >= 1024) {
            this.slideConfig.arrows = false;
            this.slideConfig.nextArrow = 'false';
            this.slideConfig.prevArrow = 'false';
        }
        setTimeout(() => {
            this.reRender = false;
            this.setSelectedMomentToInitialSlide();
        });
    }
    setSelectedMomentToInitialSlide() {
        if (this.consumerType === this.consumerTypeEnum.NC) {
            if (this.selectedMoment && !this.isDeviceLandscape) {
                this.slideConfig.initialSlide = this.generateMoments().findIndex((moment) => {
                    return moment === this.selectedMoment;
                });
            }
            else {
                this.slideConfig.initialSlide = 0;
            }
        }
    }
    generateMoments() {
        const moments = [];
        if (this.consumerType === AppointmentPickerConsumerTypeEnum.NC) {
            moments.push(TimeslotMomentEnum.DAY);
        }
        moments.push(TimeslotMomentEnum.MORNING);
        moments.push(TimeslotMomentEnum.LUNCH);
        moments.push(TimeslotMomentEnum.AFTERNOON);
        moments.push(TimeslotMomentEnum.EVENING);
        return moments;
    }
    getIcon(key) {
        switch (key) {
            case TimeslotMomentEnum.ALL_DAY:
                return 'allday';
            case TimeslotMomentEnum.DAY:
                return 'day';
            case TimeslotMomentEnum.MORNING:
                return 'morning';
            case TimeslotMomentEnum.EVENING:
                return 'evening';
            case TimeslotMomentEnum.AFTERNOON:
                return 'afternoon';
            case TimeslotMomentEnum.LUNCH:
                return 'lunch';
        }
    }
    getLabel(key, suffix) {
        let labelKey = 'timeslots.';
        if (this.messageGroup) {
            labelKey = this.messageGroup + '.timeslots.';
        }
        switch (key) {
            case TimeslotMomentEnum.DAY:
                labelKey += 'day';
                break;
            case TimeslotMomentEnum.ALL_DAY:
                labelKey += 'all-day';
                break;
            case TimeslotMomentEnum.MORNING:
                labelKey += 'morning';
                break;
            case TimeslotMomentEnum.LUNCH:
                labelKey += 'lunch';
                break;
            case TimeslotMomentEnum.EVENING:
                labelKey += 'evening';
                break;
            case TimeslotMomentEnum.AFTERNOON:
                labelKey += 'afternoon';
                break;
        }
        if (suffix) {
            labelKey += suffix;
        }
        return LabelUtil.getLabelKeyWithTypeLabel(labelKey);
    }
    selectMoment(moment) {
        this.momentSelected.emit(moment);
        this.scrollTo.emit(AppointmentPickerTypeEnum.BY_DATE);
    }
    getSlideUpAnimationStyling(index) {
        return '--animation-delay: ' + index;
    }
    ngOnChanges(changes) {
        if (changes['moments']) {
            this.reRender = true;
            setTimeout(() => (this.reRender = false));
        }
        if (changes?.['updateSlots']?.currentValue) {
            this.appointmentsAvailable$ = TimeslotUtil.calculateTimeSlotsAvailability(changes['updateSlots']?.currentValue);
            if (TimeslotUtil.shouldUpdateTimeSlots(this.updateSlots, this.timeslots)) {
                this.timeslots = this.timeslots.concat(changes['updateSlots']?.currentValue);
            }
        }
        if (changes['isDeviceLandscape']) {
            if (this.isDeviceLandscape) {
                this.slideConfig.arrows = true;
                this.slideConfig.slidesToScroll = 3;
                this.slideConfig.slidesToShow = 2;
            }
            else {
                this.slideConfig.arrows = false;
                this.slideConfig.slidesToScroll = 1;
                this.slideConfig.slidesToShow = 1;
            }
            this.setSelectedMomentToInitialSlide();
            this.reRender = true;
            setTimeout(() => (this.reRender = false));
        }
    }
    getTimeslotMomentDisplay(moment) {
        const momentObj = this.selectedTimeslot
            ? this.selectedTimeslot.getTimeslotMoment?.(moment)
            : TimeslotUtil.enumToMomentObject(moment);
        const isCustomMoment = this.timeslots && this.timeslots[0] && this.timeslots[0].isCustomMoment;
        if (!this.selectedTimeslot && isCustomMoment) {
            return this.getLabel(moment, '.timings');
        }
        if (momentObj) {
            return `${momentObj.startHours}:${momentObj.startMinutes} - ${momentObj.endHours}:${momentObj.endMinutes}`;
        }
        return '';
    }
    loadMoreSlots() {
        this.loadMore.emit();
    }
    static ɵfac = function InputAppointmentMomentPickerComponent_Factory(t) { return new (t || InputAppointmentMomentPickerComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputAppointmentMomentPickerComponent, selectors: [["app-form-appointment-moment-picker"]], inputs: { messageGroup: "messageGroup", timeslots: "timeslots", startDate: "startDate", endDate: "endDate", selectedMoment: "selectedMoment", selectedTimeslot: "selectedTimeslot", consumerType: "consumerType", updateSlots: "updateSlots", isDeviceLandscape: "isDeviceLandscape", enableAppointmentsUI: "enableAppointmentsUI", momentPickerLabel: "momentPickerLabel" }, outputs: { momentSelected: "momentSelected", scrollTo: "scrollTo", loadMore: "loadMore" }, features: [i0.ɵɵNgOnChangesFeature], decls: 11, vars: 8, consts: [[1, "text-flow", "text-flow--h3", "section__title", "text-align--left", "ml-5"], [4, "ngIf"], ["momentBAUTemplate", ""], ["slots", ""], ["slotsForReserveAppointment", ""], [3, "disableLoadMore", "messageGroup", "loadMoreSlots", 4, "ngIf"], [3, "disableLoadMore", "messageGroup", "loadMoreSlots"], [4, "ngIf", "ngIfElse"], ["class", "label-modifier-box card-mini card-mini--with-icon-and-amount card-mini--radio-circle-box", "style", "align-items: center; display: flex; flex-wrap: nowrap", 3, "config", 4, "ngIf"], [1, "label-modifier-box", "card-mini", "card-mini--with-icon-and-amount", "card-mini--radio-circle-box", 2, "align-items", "center", "display", "flex", "flex-wrap", "nowrap", 3, "config"], ["slickModalMoment", "slick-carousel"], [4, "ngFor", "ngForOf"], ["ngxSlickItem", "", 1, "label-modifier-slot", "animation-show-slide-up"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "select-tile--group", "display--grid", "grid-template-column--5--md", "grid-template-column--2", "gap--m--md", "gap--xxs"], [1, "label-modifier-box", "card-mini", "card-mini--with-icon"], ["class", "label-modifier label-modifier-slot animation-show-slide-up", 4, "ngIf"], [1, "label-modifier", "label-modifier-slot", "animation-show-slide-up"], ["type", "radio", "name", "time", 1, "label-modifier-radio", 3, "value", "id", "checked"], [1, "label-modifier--append", "label-modifier--container", "cursor--pointer"], [1, "label-modifier--body"], [1, "label-modifier--body--inner-container"], [1, "label-modifier-radio__label", 3, "for", "click"], [1, "label-modifier-content__header"], [1, "radio-circle-box", "display--inline-flex", "justify-content--center", "align-items--center", "align-self--center", "border-radius--circle"], [1, "label-modifier-content__body"], [1, "text-flow", "text-flow--button", "label-modifier-content__body-label"], [1, "text-flow", "text-flow--legal", "label-modifier-box-content__body-range"], [1, "animation-show-slide-up", "appointment-moment-picker--with-order"], [1, "select-tile", "position--relative", "display--flex", "align-items--start", "gap--m", "gap--l--sm", "color-text", "p--m", "p--l--sm", "m--n", "background-white", 2, "--animation-delay", "0", 3, "for", "click"], ["type", "radio", "name", "time", 1, "select-tile__input", "display--flex", "align-items--center", "justify-content--center", "font--body-regular", "hidden-input-box", "cursor--pointer", 3, "value", "id", "checked", "disabled"], [1, "select-tile__content", "display--flex", "flex-direction--column", "align-self--stretch", "flex-grow"], [1, "select-tile__content--inner", "display--flex", "gap--m", "gap--l--sm"], [1, "select-tile__content_text", "display--flex", "flex-direction--column", "flex-grow"], [1, "heading--6", "heading--nomargin"], [1, "font--caption-bold"]], template: function InputAppointmentMomentPickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h6", 0);
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, InputAppointmentMomentPickerComponent_ng_container_3_Template, 3, 2, "ng-container", 1);
            i0.ɵɵpipe(4, "async");
            i0.ɵɵtemplate(5, InputAppointmentMomentPickerComponent_ng_template_5_Template, 2, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(7, InputAppointmentMomentPickerComponent_ng_template_7_Template, 13, 12, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor)(9, InputAppointmentMomentPickerComponent_ng_template_9_Template, 10, 8, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 2, ctx.momentPickerLabel));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", i0.ɵɵpureFunction1(6, _c1, i0.ɵɵpipeBind1(4, 4, ctx.appointmentsAvailable$)));
        } }, dependencies: [i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet, i2.SlickCarouselComponent, i2.SlickItemDirective, i3.MessageGroupDirective, i4.NoAvailableAppointmentDateComponent, i1.AsyncPipe, i5.TranslatePipe, i6.TimeslotPipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputAppointmentMomentPickerComponent, [{
        type: Component,
        args: [{ selector: 'app-form-appointment-moment-picker', template: "<h6 class=\"text-flow text-flow--h3 section__title text-align--left ml-5\">{{ momentPickerLabel | translate }}</h6>\n<ng-container *ngIf=\"{ appointmentsAvailable: appointmentsAvailable$ | async } as data\">\n  <app-no-available-appointment-date\n    *ngIf=\"!data.appointmentsAvailable && !selectedMoment\"\n    (loadMoreSlots)=\"loadMoreSlots()\"\n    [disableLoadMore]=\"(startDate >= endDate && enableAppointmentsUI)\"\n    [messageGroup]=\"messageGroup\"></app-no-available-appointment-date>\n  <ng-container *ngIf=\"data.appointmentsAvailable || selectedMoment\">\n    <ng-container *ngIf=\"(consumerType === consumerTypeEnum.NC); else momentBAUTemplate\">\n      <ng-container *ngIf=\"!reRender\">\n        <ngx-slick-carousel\n          *ngIf=\"!enableAppointmentsUI\"\n          class=\"label-modifier-box card-mini card-mini--with-icon-and-amount card-mini--radio-circle-box\"\n          style=\"align-items: center; display: flex; flex-wrap: nowrap\"\n          #slickModalMoment=\"slick-carousel\"\n          [config]=\"slideConfig\">\n          <ng-container *ngFor=\"let moment of generateMoments(); let i = index\">\n            <div\n              ngxSlickItem\n              class=\"label-modifier-slot animation-show-slide-up\"\n              [attr.style]=\"getSlideUpAnimationStyling(i)\">\n              <ng-container\n                [ngTemplateOutlet]=\"slots\"\n                [ngTemplateOutletContext]=\"{moment: moment,\n                                                                i: i,\n                                                                selectedMoment: selectedMoment,\n                                                                timeFormat: (moment | timeslotFormat),\n                                                                label: (getLabel(moment) | translate)}\">\n              </ng-container>\n            </div>\n          </ng-container>\n        </ngx-slick-carousel>\n        <ng-container *ngIf=\"enableAppointmentsUI\">\n          <div\n            class=\"select-tile--group display--grid grid-template-column--5--md grid-template-column--2 gap--m--md gap--xxs\">\n            <ng-container *ngFor=\"let moment of generateMoments(); let i = index\">\n              <ng-container\n                [ngTemplateOutlet]=\"slotsForReserveAppointment\"\n                [ngTemplateOutletContext]=\"{moment: moment,\n                                                                  i: i,\n                                                                  selectedMoment: selectedMoment,\n                                                                  timeFormat: (moment | timeslotFormat),\n                                                                  label: (getLabel(moment) | translate)}\">\n              </ng-container>\n            </ng-container>\n          </div>\n        </ng-container>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n</ng-container>\n\n<ng-template #momentBAUTemplate>\n  <div class=\"label-modifier-box card-mini card-mini--with-icon\">\n    <ng-container *ngIf=\"!reRender\">\n      <ng-container *ngFor=\"let moment of generateMoments(); let i = index\">\n        <div\n          class=\"label-modifier label-modifier-slot animation-show-slide-up\"\n          [attr.style]=\"getSlideUpAnimationStyling(i)\"\n          *ngIf=\"getTimeslotMomentDisplay(moment)\">\n          <ng-container\n            [ngTemplateOutlet]=\"slots\"\n            [ngTemplateOutletContext]=\"\n            {moment: moment,i: i,\n            selectedMoment: selectedMoment,\n            timeFormat: (getTimeslotMomentDisplay(moment) | translate),label: (getLabel(moment) | translate)}\">\n          </ng-container>\n        </div>\n      </ng-container>\n    </ng-container>\n  </div>\n</ng-template>\n\n<ng-template\n  #slots\n  let-timeFormat=\"timeFormat\"\n  let-moment=\"moment\"\n  let-i=\"i\"\n  let-selectedMoment=\"selectedMoment\"\n  let-label=\"label\">\n  <input\n    type=\"radio\"\n    name=\"time\"\n    value=\"{{ moment }}\"\n    id=\"time-{{ i }}\"\n    class=\"label-modifier-radio\"\n    [checked]=\"moment === selectedMoment\" />\n  <div\n    [attr.data-cy]=\"'appointment-time-picker-'+moment?.toLowerCase()\"\n    class=\"label-modifier--append label-modifier--container cursor--pointer\"\n    [class.disabled]=\"isDisabled(moment)\">\n    <div class=\"label-modifier--body\">\n      <div class=\"label-modifier--body--inner-container\">\n        <label for=\"time-{{ i }}\" class=\"label-modifier-radio__label\" (click)=\"selectMoment(moment)\"></label>\n        <div class=\"label-modifier-content__header\">\n          <span\n            class=\"radio-circle-box display--inline-flex justify-content--center align-items--center align-self--center border-radius--circle\"></span>\n        </div>\n        <div class=\"label-modifier-content__body\">\n          <div class=\"text-flow text-flow--button label-modifier-content__body-label\">{{ label }}</div>\n          <div class=\"text-flow text-flow--legal label-modifier-box-content__body-range\">{{ timeFormat }}</div>\n        </div>\n        <div class=\"label-modifier-box-content__timing icon icon-{{ getIcon(moment) }}appointment\"></div>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template\n  #slotsForReserveAppointment\n  let-timeFormat=\"timeFormat\"\n  let-moment=\"moment\"\n  let-i=\"i\"\n  let-selectedMoment=\"selectedMoment\"\n  let-label=\"label\">\n  <div class=\"animation-show-slide-up appointment-moment-picker--with-order\">\n    <label\n      [attr.data-cy]=\"'appointment-time-'+i\"\n      for=\"time-{{ i }}\"\n      class=\"select-tile position--relative display--flex align-items--start gap--m gap--l--sm color-text p--m p--l--sm m--n background-white\"\n      style=\"--animation-delay: 0\"\n      (click)=\"selectMoment(moment)\">\n      <input\n        type=\"radio\"\n        name=\"time\"\n        value=\"{{ moment }}\"\n        id=\"time-{{ i }}\"\n        class=\"select-tile__input display--flex align-items--center justify-content--center font--body-regular hidden-input-box cursor--pointer\"\n        [checked]=\"moment === selectedMoment\"\n        [disabled]=\"isDisabled(moment)\" />\n      <div class=\"select-tile__content display--flex flex-direction--column align-self--stretch flex-grow\">\n        <div class=\"select-tile__content--inner display--flex gap--m gap--l--sm\">\n          <div class=\"select-tile__content_text display--flex flex-direction--column flex-grow\">\n            <div class=\"heading--6 heading--nomargin\">{{ label }}</div>\n            <div class=\"font--caption-bold\">{{ timeFormat }}</div>\n          </div>\n        </div>\n      </div>\n    </label>\n  </div>\n</ng-template>\n" }]
    }], null, { messageGroup: [{
            type: Input
        }], timeslots: [{
            type: Input
        }], startDate: [{
            type: Input
        }], endDate: [{
            type: Input
        }], selectedMoment: [{
            type: Input
        }], selectedTimeslot: [{
            type: Input
        }], consumerType: [{
            type: Input
        }], updateSlots: [{
            type: Input
        }], isDeviceLandscape: [{
            type: Input
        }], enableAppointmentsUI: [{
            type: Input
        }], momentPickerLabel: [{
            type: Input
        }], momentSelected: [{
            type: Output
        }], scrollTo: [{
            type: Output
        }], loadMore: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputAppointmentMomentPickerComponent, { className: "InputAppointmentMomentPickerComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtYXBwb2ludG1lbnQtbW9tZW50LXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29udHJvbHMvYXBwb2ludG1lbnQtcGlja2VyL2lucHV0LWFwcG9pbnRtZW50LW1vbWVudC1waWNrZXIvaW5wdXQtYXBwb2ludG1lbnQtbW9tZW50LXBpY2tlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9zcmMvY29udHJvbHMvYXBwb2ludG1lbnQtcGlja2VyL2lucHV0LWFwcG9pbnRtZW50LW1vbWVudC1waWNrZXIvaW5wdXQtYXBwb2ludG1lbnQtbW9tZW50LXBpY2tlci5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUN6RyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7O0lDSHZELDREQUlnQztJQUY5Qiw2UUFBaUIsZUFBQSx1QkFBZSxDQUFBLElBQUM7SUFFSCxpQkFBb0M7OztJQURsRSxtR0FBa0UscUNBQUE7Ozs7SUFXNUQsNkJBQXNFO0lBQ3BFLCtCQUcrQztJQUM3Qyw0QkFPZTs7O0lBQ2pCLGlCQUFNO0lBQ1IsMEJBQWU7Ozs7OztJQVZYLGNBQTRDO0lBQTVDLHNGQUE0QztJQUUxQyxjQUEwQjtJQUExQixzQ0FBMEIsd0xBQUE7OztJQVpsQyxpREFLeUI7SUFDdkIsMkxBY2U7SUFDakIsaUJBQXFCOzs7SUFoQm5CLDRDQUFzQjtJQUNXLGVB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O1lBQ0csY0FBYztrQkFBdEIsS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csaUJBQWlCO2tCQUF6QixLQUFLO1lBQ0csb0JBQW9CO2tCQUE1QixLQUFLO1lBQ0csaUJBQWlCO2tCQUF6QixLQUFLO1lBQ0ksY0FBYztrQkFBdkIsTUFBTTtZQUNHLFFBQVE7a0JBQWpCLE1BQU07WUFDRyxRQUFRO2tCQUFqQixNQUFNOztrRkFkSSxxQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRpbWVzbG90TW9tZW50RW51bSB9IGZyb20gJy4uLy4uLy4uL2VudW1zJztcbmltcG9ydCB7IEFwcG9pbnRtZW50VHJhbnNmb3JtZXJTbG90IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzJztcbmltcG9ydCB7IEFwcG9pbnRtZW50UGlja2VyVHlwZUVudW0gfSBmcm9tICcuLi9hcHBvaW50bWVudC1waWNrZXItdHlwZS5lbnVtJztcbmltcG9ydCB7IEFwcG9pbnRtZW50UGlja2VyQ29uc3VtZXJUeXBlRW51bSB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgTGFiZWxVdGlsLCBUaW1lc2xvdFV0aWwgfSBmcm9tICcuLi8uLi8uLi91dGlscyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1mb3JtLWFwcG9pbnRtZW50LW1vbWVudC1waWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQtYXBwb2ludG1lbnQtbW9tZW50LXBpY2tlci5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRBcHBvaW50bWVudE1vbWVudFBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbWVzc2FnZUdyb3VwOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRpbWVzbG90czogQXBwb2ludG1lbnRUcmFuc2Zvcm1lclNsb3RbXSA9IFtdO1xuICBASW5wdXQoKSBzdGFydERhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xuICBASW5wdXQoKSBlbmREYXRlOiBEYXRlO1xuICBASW5wdXQoKSBzZWxlY3RlZE1vbWVudD86IFRpbWVzbG90TW9tZW50RW51bTtcbiAgQElucHV0KCkgc2VsZWN0ZWRUaW1lc2xvdD86IEFwcG9pbnRtZW50VHJhbnNmb3JtZXJTbG90O1xuICBASW5wdXQoKSBjb25zdW1lclR5cGU6IHN0cmluZztcbiAgQElucHV0KCkgdXBkYXRlU2xvdHM6IEFwcG9pbnRtZW50VHJhbnNmb3JtZXJTbG90W107XG4gIEBJbnB1dCgpIGlzRGV2aWNlTGFuZHNjYXBlOiBib29sZWFuO1xuICBASW5wdXQoKSBlbmFibGVBcHBvaW50bWVudHNVSTogYm9vbGVhbjtcbiAgQElucHV0KCkgbW9tZW50UGlja2VyTGFiZWw6IHN0cmluZztcbiAgQE91dHB1dCgpIG1vbWVudFNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc2Nyb2xsVG8gPSBuZXcgRXZlbnRFbWl0dGVyPEFwcG9pbnRtZW50UGlja2VyVHlwZUVudW0+KCk7XG4gIEBPdXRwdXQoKSBsb2FkTW9yZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBhcHBvaW50bWVudHNBdmFpbGFibGUkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICByZVJlbmRlciA9IGZhbHNlO1xuICBkaXNhYmxlZDogYm9vbGVhbjtcbiAgY29uc3VtZXJUeXBlRW51bSA9IEFwcG9pbnRtZW50UGlja2VyQ29uc3VtZXJUeXBlRW51bTtcbiAgc2xpZGVDb25maWcgPSB7XG4gICAgaW5maW5pdGU6IGZhbHNlLFxuICAgIGluaXRpYWxTbGlkZTogMCxcbiAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICBhcnJvd3M6IHRydWUsXG4gICAgbmV4dEFycm93OiAnPGRpdiBjbGFzcz1cImNhcmRzLXNsaWRlci1idXR0b24gYXJyb3cgYXJyb3ctLXJpZ2h0IHNsaWNrLWFycm93XCIgYXJpYS1kaXNhYmxlZD1cImZhbHNlXCI+PC9kaXY+JyxcbiAgICBwcmV2QXJyb3c6ICc8ZGl2IGNsYXNzPVwiY2FyZHMtc2xpZGVyLWJ1dHRvbiBhcnJvdyBhcnJvdy0tbGVmdCBzbGljay1hcnJvd1wiIGFyaWEtZGlzYWJsZWQ9XCJmYWxzZVwiPjwvZGl2PicsXG4gICAgc2xpZGVzVG9TaG93OiA1LFxuICAgIHNsaWRlc1RvU2Nyb2xsOiA1LFxuICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXG4gIH07XG5cbiAgaXNEaXNhYmxlZChtb21lbnQ6IFRpbWVzbG90TW9tZW50RW51bSk6IGJvb2xlYW4ge1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgIGlmICh0aGlzLnNlbGVjdGVkVGltZXNsb3QpIHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkVGltZXNsb3QuaGFzQXZhaWxhYmxlTW9tZW50KG1vbWVudCkpIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy50aW1lc2xvdHMpIHtcbiAgICAgIHRoaXMudGltZXNsb3RzLmZvckVhY2goKHRpbWVzbG90KSA9PiB7XG4gICAgICAgIGlmICh0aW1lc2xvdC5oYXNBdmFpbGFibGVNb21lbnQobW9tZW50KSkge1xuICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmRpc2FibGVkO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yZVJlbmRlciA9IHRydWU7XG4gICAgY29uc3Qgc2NyZWVuV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBpZiAoc2NyZWVuV2lkdGggPj0gMTAyNCkge1xuICAgICAgdGhpcy5zbGlkZUNvbmZpZy5hcnJvd3MgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2xpZGVDb25maWcubmV4dEFycm93ID0gJ2ZhbHNlJztcbiAgICAgIHRoaXMuc2xpZGVDb25maWcucHJldkFycm93ID0gJ2ZhbHNlJztcbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnJlUmVuZGVyID0gZmFsc2U7XG4gICAgICB0aGlzLnNldFNlbGVjdGVkTW9tZW50VG9Jbml0aWFsU2xpZGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldFNlbGVjdGVkTW9tZW50VG9Jbml0aWFsU2xpZGUoKSB7XG4gICAgaWYgKHRoaXMuY29uc3VtZXJUeXBlID09PSB0aGlzLmNvbnN1bWVyVHlwZUVudW0uTkMpIHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkTW9tZW50ICYmICF0aGlzLmlzRGV2aWNlTGFuZHNjYXBlKSB7XG4gICAgICAgIHRoaXMuc2xpZGVDb25maWcuaW5pdGlhbFNsaWRlID0gdGhpcy5nZW5lcmF0ZU1vbWVudHMoKS5maW5kSW5kZXgoKG1vbWVudCkgPT4ge1xuICAgICAgICAgIHJldHVybiBtb21lbnQgPT09IHRoaXMuc2VsZWN0ZWRNb21lbnQ7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zbGlkZUNvbmZpZy5pbml0aWFsU2xpZGUgPSAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdlbmVyYXRlTW9tZW50cygpOiBUaW1lc2xvdE1vbWVudEVudW1bXSB7XG4gICAgY29uc3QgbW9tZW50cyA9IFtdO1xuICAgIGlmICh0aGlzLmNvbnN1bWVyVHlwZSA9PT0gQXBwb2ludG1lbnRQaWNrZXJDb25zdW1lclR5cGVFbnVtLk5DKSB7XG4gICAgICBtb21lbnRzLnB1c2goVGltZXNsb3RNb21lbnRFbnVtLkRBWSk7XG4gICAgfVxuICAgIG1vbWVudHMucHVzaChUaW1lc2xvdE1vbWVudEVudW0uTU9STklORyk7XG4gICAgbW9tZW50cy5wdXNoKFRpbWVzbG90TW9tZW50RW51bS5MVU5DSCk7XG4gICAgbW9tZW50cy5wdXNoKFRpbWVzbG90TW9tZW50RW51bS5BRlRFUk5PT04pO1xuICAgIG1vbWVudHMucHVzaChUaW1lc2xvdE1vbWVudEVudW0uRVZFTklORyk7XG4gICAgcmV0dXJuIG1vbWVudHM7XG4gIH1cblxuICBnZXRJY29uKGtleTogVGltZXNsb3RNb21lbnRFbnVtKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgY2FzZSBUaW1lc2xvdE1vbWVudEVudW0uQUxMX0RBWTpcbiAgICAgICAgcmV0dXJuICdhbGxkYXknO1xuICAgICAgY2FzZSBUaW1lc2xvdE1vbWVudEVudW0uREFZOlxuICAgICAgICByZXR1cm4gJ2RheSc7XG4gICAgICBjYXNlIFRpbWVzbG90TW9tZW50RW51bS5NT1JOSU5HOlxuICAgICAgICByZXR1cm4gJ21vcm5pbmcnO1xuICAgICAgY2FzZSBUaW1lc2xvdE1vbWVudEVudW0uRVZFTklORzpcbiAgICAgICAgcmV0dXJuICdldmVuaW5nJztcbiAgICAgIGNhc2UgVGltZXNsb3RNb21lbnRFbnVtLkFGVEVSTk9PTjpcbiAgICAgICAgcmV0dXJuICdhZnRlcm5vb24nO1xuICAgICAgY2FzZSBUaW1lc2xvdE1vbWVudEVudW0uTFVOQ0g6XG4gICAgICAgIHJldHVybiAnbHVuY2gnO1xuICAgIH1cbiAgfVxuXG4gIGdldExhYmVsKGtleTogVGltZXNsb3RNb21lbnRFbnVtLCBzdWZmaXg/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGxldCBsYWJlbEtleSA9ICd0aW1lc2xvdHMuJztcbiAgICBpZiAodGhpcy5tZXNzYWdlR3JvdXApIHtcbiAgICAgIGxhYmVsS2V5ID0gdGhpcy5tZXNzYWdlR3JvdXAgKyAnLnRpbWVzbG90cy4nO1xuICAgIH1cblxuICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICBjYXNlIFRpbWVzbG90TW9tZW50RW51bS5EQVk6XG4gICAgICAgIGxhYmVsS2V5ICs9ICdkYXknO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVGltZXNsb3RNb21lbnRFbnVtLkFMTF9EQVk6XG4gICAgICAgIGxhYmVsS2V5ICs9ICdhbGwtZGF5JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFRpbWVzbG90TW9tZW50RW51bS5NT1JOSU5HOlxuICAgICAgICBsYWJlbEtleSArPSAnbW9ybmluZyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBUaW1lc2xvdE1vbWVudEVudW0uTFVOQ0g6XG4gICAgICAgIGxhYmVsS2V5ICs9ICdsdW5jaCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBUaW1lc2xvdE1vbWVudEVudW0uRVZFTklORzpcbiAgICAgICAgbGFiZWxLZXkgKz0gJ2V2ZW5pbmcnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVGltZXNsb3RNb21lbnRFbnVtLkFGVEVSTk9PTjpcbiAgICAgICAgbGFiZWxLZXkgKz0gJ2FmdGVybm9vbic7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChzdWZmaXgpIHtcbiAgICAgIGxhYmVsS2V5ICs9IHN1ZmZpeDtcbiAgICB9XG5cbiAgICByZXR1cm4gTGFiZWxVdGlsLmdldExhYmVsS2V5V2l0aFR5cGVMYWJlbChsYWJlbEtleSk7XG4gIH1cblxuICBzZWxlY3RNb21lbnQobW9tZW50OiBUaW1lc2xvdE1vbWVudEVudW0pOiB2b2lkIHtcbiAgICB0aGlzLm1vbWVudFNlbGVjdGVkLmVtaXQobW9tZW50KTtcbiAgICB0aGlzLnNjcm9sbFRvLmVtaXQoQXBwb2ludG1lbnRQaWNrZXJUeXBlRW51bS5CWV9EQVRFKTtcbiAgfVxuXG4gIGdldFNsaWRlVXBBbmltYXRpb25TdHlsaW5nKGluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiAnLS1hbmltYXRpb24tZGVsYXk6ICcgKyBpbmRleDtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlc1snbW9tZW50cyddKSB7XG4gICAgICB0aGlzLnJlUmVuZGVyID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gKHRoaXMucmVSZW5kZXIgPSBmYWxzZSkpO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzPy5bJ3VwZGF0ZVNsb3RzJ10/LmN1cnJlbnRWYWx1ZSkge1xuICAgICAgdGhpcy5hcHBvaW50bWVudHNBdmFpbGFibGUkID0gVGltZXNsb3RVdGlsLmNhbGN1bGF0ZVRpbWVTbG90c0F2YWlsYWJpbGl0eShjaGFuZ2VzWyd1cGRhdGVTbG90cyddPy5jdXJyZW50VmFsdWUpO1xuICAgICAgaWYgKFRpbWVzbG90VXRpbC5zaG91bGRVcGRhdGVUaW1lU2xvdHModGhpcy51cGRhdGVTbG90cywgdGhpcy50aW1lc2xvdHMpKSB7XG4gICAgICAgIHRoaXMudGltZXNsb3RzID0gdGhpcy50aW1lc2xvdHMuY29uY2F0KGNoYW5nZXNbJ3VwZGF0ZVNsb3RzJ10/LmN1cnJlbnRWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXNbJ2lzRGV2aWNlTGFuZHNjYXBlJ10pIHtcbiAgICAgIGlmICh0aGlzLmlzRGV2aWNlTGFuZHNjYXBlKSB7XG4gICAgICAgIHRoaXMuc2xpZGVDb25maWcuYXJyb3dzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zbGlkZUNvbmZpZy5zbGlkZXNUb1Njcm9sbCA9IDM7XG4gICAgICAgIHRoaXMuc2xpZGVDb25maWcuc2xpZGVzVG9TaG93ID0gMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2xpZGVDb25maWcuYXJyb3dzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2xpZGVDb25maWcuc2xpZGVzVG9TY3JvbGwgPSAxO1xuICAgICAgICB0aGlzLnNsaWRlQ29uZmlnLnNsaWRlc1RvU2hvdyA9IDE7XG4gICAgICB9XG4gICAgICB0aGlzLnNldFNlbGVjdGVkTW9tZW50VG9Jbml0aWFsU2xpZGUoKTtcbiAgICAgIHRoaXMucmVSZW5kZXIgPSB0cnVlO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiAodGhpcy5yZVJlbmRlciA9IGZhbHNlKSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0VGltZXNsb3RNb21lbnREaXNwbGF5KG1vbWVudDogVGltZXNsb3RNb21lbnRFbnVtKTogc3RyaW5nIHtcbiAgICBjb25zdCBtb21lbnRPYmogPSB0aGlzLnNlbGVjdGVkVGltZXNsb3RcbiAgICAgID8gdGhpcy5zZWxlY3RlZFRpbWVzbG90LmdldFRpbWVzbG90TW9tZW50Py4obW9tZW50KVxuICAgICAgOiBUaW1lc2xvdFV0aWwuZW51bVRvTW9tZW50T2JqZWN0KG1vbWVudCk7XG5cbiAgICBjb25zdCBpc0N1c3RvbU1vbWVudCA9IHRoaXMudGltZXNsb3RzICYmIHRoaXMudGltZXNsb3RzWzBdICYmIHRoaXMudGltZXNsb3RzWzBdLmlzQ3VzdG9tTW9tZW50O1xuICAgIGlmICghdGhpcy5zZWxlY3RlZFRpbWVzbG90ICYmIGlzQ3VzdG9tTW9tZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRMYWJlbChtb21lbnQsICcudGltaW5ncycpO1xuICAgIH1cblxuICAgIGlmIChtb21lbnRPYmopIHtcbiAgICAgIHJldHVybiBgJHttb21lbnRPYmouc3RhcnRIb3Vyc306JHttb21lbnRPYmouc3RhcnRNaW51dGVzfSAtICR7bW9tZW50T2JqLmVuZEhvdXJzfToke21vbWVudE9iai5lbmRNaW51dGVzfWA7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGxvYWRNb3JlU2xvdHMoKSB7XG4gICAgdGhpcy5sb2FkTW9yZS5lbWl0KCk7XG4gIH1cbn1cbiIsIjxoNiBjbGFzcz1cInRleHQtZmxvdyB0ZXh0LWZsb3ctLWgzIHNlY3Rpb25fX3RpdGxlIHRleHQtYWxpZ24tLWxlZnQgbWwtNVwiPnt7IG1vbWVudFBpY2tlckxhYmVsIHwgdHJhbnNsYXRlIH19PC9oNj5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJ7IGFwcG9pbnRtZW50c0F2YWlsYWJsZTogYXBwb2ludG1lbnRzQXZhaWxhYmxlJCB8IGFzeW5jIH0gYXMgZGF0YVwiPlxuICA8YXBwLW5vLWF2YWlsYWJsZS1hcHBvaW50bWVudC1kYXRlXG4gICAgKm5nSWY9XCIhZGF0YS5hcHBvaW50bWVudHNBdmFpbGFibGUgJiYgIXNlbGVjdGVkTW9tZW50XCJcbiAgICAobG9hZE1vcmVTbG90cyk9XCJsb2FkTW9yZVNsb3RzKClcIlxuICAgIFtkaXNhYmxlTG9hZE1vcmVdPVwiKHN0YXJ0RGF0ZSA+PSBlbmREYXRlICYmIGVuYWJsZUFwcG9pbnRtZW50c1VJKVwiXG4gICAgW21lc3NhZ2VHcm91cF09XCJtZXNzYWdlR3JvdXBcIj48L2FwcC1uby1hdmFpbGFibGUtYXBwb2ludG1lbnQtZGF0ZT5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImRhdGEuYXBwb2ludG1lbnRzQXZhaWxhYmxlIHx8IHNlbGVjdGVkTW9tZW50XCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIihjb25zdW1lclR5cGUgPT09IGNvbnN1bWVyVHlwZUVudW0uTkMpOyBlbHNlIG1vbWVudEJBVVRlbXBsYXRlXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXJlUmVuZGVyXCI+XG4gICAgICAgIDxuZ3gtc2xpY2stY2Fyb3VzZWxcbiAgICAgICAgICAqbmdJZj1cIiFlbmFibGVBcHBvaW50bWVudHNVSVwiXG4gICAgICAgICAgY2xhc3M9XCJsYWJlbC1tb2RpZmllci1ib3ggY2FyZC1taW5pIGNhcmQtbWluaS0td2l0aC1pY29uLWFuZC1hbW91bnQgY2FyZC1taW5pLS1yYWRpby1jaXJjbGUtYm94XCJcbiAgICAgICAgICBzdHlsZT1cImFsaWduLWl0ZW1zOiBjZW50ZXI7IGRpc3BsYXk6IGZsZXg7IGZsZXgtd3JhcDogbm93cmFwXCJcbiAgICAgICAgICAjc2xpY2tNb2RhbE1vbWVudD1cInNsaWNrLWNhcm91c2VsXCJcbiAgICAgICAgICBbY29uZmlnXT1cInNsaWRlQ29uZmlnXCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbW9tZW50IG9mIGdlbmVyYXRlTW9tZW50cygpOyBsZXQgaSA9IGluZGV4XCI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIG5neFNsaWNrSXRlbVxuICAgICAgICAgICAgICBjbGFzcz1cImxhYmVsLW1vZGlmaWVyLXNsb3QgYW5pbWF0aW9uLXNob3ctc2xpZGUtdXBcIlxuICAgICAgICAgICAgICBbYXR0ci5zdHlsZV09XCJnZXRTbGlkZVVwQW5pbWF0aW9uU3R5bGluZyhpKVwiPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwic2xvdHNcIlxuICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7bW9tZW50OiBtb21lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaTogaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE1vbWVudDogc2VsZWN0ZWRNb21lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZUZvcm1hdDogKG1vbWVudCB8IHRpbWVzbG90Rm9ybWF0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogKGdldExhYmVsKG1vbWVudCkgfCB0cmFuc2xhdGUpfVwiPlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L25neC1zbGljay1jYXJvdXNlbD5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImVuYWJsZUFwcG9pbnRtZW50c1VJXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJzZWxlY3QtdGlsZS0tZ3JvdXAgZGlzcGxheS0tZ3JpZCBncmlkLXRlbXBsYXRlLWNvbHVtbi0tNS0tbWQgZ3JpZC10ZW1wbGF0ZS1jb2x1bW4tLTIgZ2FwLS1tLS1tZCBnYXAtLXh4c1wiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbW9tZW50IG9mIGdlbmVyYXRlTW9tZW50cygpOyBsZXQgaSA9IGluZGV4XCI+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJzbG90c0ZvclJlc2VydmVBcHBvaW50bWVudFwiXG4gICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInttb21lbnQ6IG1vbWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGk6IGksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE1vbWVudDogc2VsZWN0ZWRNb21lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lRm9ybWF0OiAobW9tZW50IHwgdGltZXNsb3RGb3JtYXQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IChnZXRMYWJlbChtb21lbnQpIHwgdHJhbnNsYXRlKX1cIj5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9uZy1jb250YWluZXI+XG48L25nLWNvbnRhaW5lcj5cblxuPG5nLXRlbXBsYXRlICNtb21lbnRCQVVUZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImxhYmVsLW1vZGlmaWVyLWJveCBjYXJkLW1pbmkgY2FyZC1taW5pLS13aXRoLWljb25cIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXJlUmVuZGVyXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBtb21lbnQgb2YgZ2VuZXJhdGVNb21lbnRzKCk7IGxldCBpID0gaW5kZXhcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwibGFiZWwtbW9kaWZpZXIgbGFiZWwtbW9kaWZpZXItc2xvdCBhbmltYXRpb24tc2hvdy1zbGlkZS11cFwiXG4gICAgICAgICAgW2F0dHIuc3R5bGVdPVwiZ2V0U2xpZGVVcEFuaW1hdGlvblN0eWxpbmcoaSlcIlxuICAgICAgICAgICpuZ0lmPVwiZ2V0VGltZXNsb3RNb21lbnREaXNwbGF5KG1vbWVudClcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJzbG90c1wiXG4gICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwiXG4gICAgICAgICAgICB7bW9tZW50OiBtb21lbnQsaTogaSxcbiAgICAgICAgICAgIHNlbGVjdGVkTW9tZW50OiBzZWxlY3RlZE1vbWVudCxcbiAgICAgICAgICAgIHRpbWVGb3JtYXQ6IChnZXRUaW1lc2xvdE1vbWVudERpc3BsYXkobW9tZW50KSB8IHRyYW5zbGF0ZSksbGFiZWw6IChnZXRMYWJlbChtb21lbnQpIHwgdHJhbnNsYXRlKX1cIj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG48L25nLXRlbXBsYXRlPlxuXG48bmctdGVtcGxhdGVcbiAgI3Nsb3RzXG4gIGxldC10aW1lRm9ybWF0PVwidGltZUZvcm1hdFwiXG4gIGxldC1tb21lbnQ9XCJtb21lbnRcIlxuICBsZXQtaT1cImlcIlxuICBsZXQtc2VsZWN0ZWRNb21lbnQ9XCJzZWxlY3RlZE1vbWVudFwiXG4gIGxldC1sYWJlbD1cImxhYmVsXCI+XG4gIDxpbnB1dFxuICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgbmFtZT1cInRpbWVcIlxuICAgIHZhbHVlPVwie3sgbW9tZW50IH19XCJcbiAgICBpZD1cInRpbWUte3sgaSB9fVwiXG4gICAgY2xhc3M9XCJsYWJlbC1tb2RpZmllci1yYWRpb1wiXG4gICAgW2NoZWNrZWRdPVwibW9tZW50ID09PSBzZWxlY3RlZE1vbWVudFwiIC8+XG4gIDxkaXZcbiAgICBbYXR0ci5kYXRhLWN5XT1cIidhcHBvaW50bWVudC10aW1lLXBpY2tlci0nK21vbWVudD8udG9Mb3dlckNhc2UoKVwiXG4gICAgY2xhc3M9XCJsYWJlbC1tb2RpZmllci0tYXBwZW5kIGxhYmVsLW1vZGlmaWVyLS1jb250YWluZXIgY3Vyc29yLS1wb2ludGVyXCJcbiAgICBbY2xhc3MuZGlzYWJsZWRdPVwiaXNEaXNhYmxlZChtb21lbnQpXCI+XG4gICAgPGRpdiBjbGFzcz1cImxhYmVsLW1vZGlmaWVyLS1ib2R5XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibGFiZWwtbW9kaWZpZXItLWJvZHktLWlubmVyLWNvbnRhaW5lclwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwidGltZS17eyBpIH19XCIgY2xhc3M9XCJsYWJlbC1tb2RpZmllci1yYWRpb19fbGFiZWxcIiAoY2xpY2spPVwic2VsZWN0TW9tZW50KG1vbWVudClcIj48L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWwtbW9kaWZpZXItY29udGVudF9faGVhZGVyXCI+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzPVwicmFkaW8tY2lyY2xlLWJveCBkaXNwbGF5LS1pbmxpbmUtZmxleCBqdXN0aWZ5LWNvbnRlbnQtLWNlbnRlciBhbGlnbi1pdGVtcy0tY2VudGVyIGFsaWduLXNlbGYtLWNlbnRlciBib3JkZXItcmFkaXVzLS1jaXJjbGVcIj48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWwtbW9kaWZpZXItY29udGVudF9fYm9keVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWZsb3cgdGV4dC1mbG93LS1idXR0b24gbGFiZWwtbW9kaWZpZXItY29udGVudF9fYm9keS1sYWJlbFwiPnt7IGxhYmVsIH19PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtZmxvdyB0ZXh0LWZsb3ctLWxlZ2FsIGxhYmVsLW1vZGlmaWVyLWJveC1jb250ZW50X19ib2R5LXJhbmdlXCI+e3sgdGltZUZvcm1hdCB9fTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsLW1vZGlmaWVyLWJveC1jb250ZW50X190aW1pbmcgaWNvbiBpY29uLXt7IGdldEljb24obW9tZW50KSB9fWFwcG9pbnRtZW50XCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L25nLXRlbXBsYXRlPlxuXG48bmctdGVtcGxhdGVcbiAgI3Nsb3RzRm9yUmVzZXJ2ZUFwcG9pbnRtZW50XG4gIGxldC10aW1lRm9ybWF0PVwidGltZUZvcm1hdFwiXG4gIGxldC1tb21lbnQ9XCJtb21lbnRcIlxuICBsZXQtaT1cImlcIlxuICBsZXQtc2VsZWN0ZWRNb21lbnQ9XCJzZWxlY3RlZE1vbWVudFwiXG4gIGxldC1sYWJlbD1cImxhYmVsXCI+XG4gIDxkaXYgY2xhc3M9XCJhbmltYXRpb24tc2hvdy1zbGlkZS11cCBhcHBvaW50bWVudC1tb21lbnQtcGlja2VyLS13aXRoLW9yZGVyXCI+XG4gICAgPGxhYmVsXG4gICAgICBbYXR0ci5kYXRhLWN5XT1cIidhcHBvaW50bWVudC10aW1lLScraVwiXG4gICAgICBmb3I9XCJ0aW1lLXt7IGkgfX1cIlxuICAgICAgY2xhc3M9XCJzZWxlY3QtdGlsZSBwb3NpdGlvbi0tcmVsYXRpdmUgZGlzcGxheS0tZmxleCBhbGlnbi1pdGVtcy0tc3RhcnQgZ2FwLS1tIGdhcC0tbC0tc20gY29sb3ItdGV4dCBwLS1tIHAtLWwtLXNtIG0tLW4gYmFja2dyb3VuZC13aGl0ZVwiXG4gICAgICBzdHlsZT1cIi0tYW5pbWF0aW9uLWRlbGF5OiAwXCJcbiAgICAgIChjbGljayk9XCJzZWxlY3RNb21lbnQobW9tZW50KVwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgIG5hbWU9XCJ0aW1lXCJcbiAgICAgICAgdmFsdWU9XCJ7eyBtb21lbnQgfX1cIlxuICAgICAgICBpZD1cInRpbWUte3sgaSB9fVwiXG4gICAgICAgIGNsYXNzPVwic2VsZWN0LXRpbGVfX2lucHV0IGRpc3BsYXktLWZsZXggYWxpZ24taXRlbXMtLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtLWNlbnRlciBmb250LS1ib2R5LXJlZ3VsYXIgaGlkZGVuLWlucHV0LWJveCBjdXJzb3ItLXBvaW50ZXJcIlxuICAgICAgICBbY2hlY2tlZF09XCJtb21lbnQgPT09IHNlbGVjdGVkTW9tZW50XCJcbiAgICAgICAgW2Rpc2FibGVkXT1cImlzRGlzYWJsZWQobW9tZW50KVwiIC8+XG4gICAgICA8ZGl2IGNsYXNzPVwic2VsZWN0LXRpbGVfX2NvbnRlbnQgZGlzcGxheS0tZmxleCBmbGV4LWRpcmVjdGlvbi0tY29sdW1uIGFsaWduLXNlbGYtLXN0cmV0Y2ggZmxleC1ncm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWxlY3QtdGlsZV9fY29udGVudC0taW5uZXIgZGlzcGxheS0tZmxleCBnYXAtLW0gZ2FwLS1sLS1zbVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWxlY3QtdGlsZV9fY29udGVudF90ZXh0IGRpc3BsYXktLWZsZXggZmxleC1kaXJlY3Rpb24tLWNvbHVtbiBmbGV4LWdyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkaW5nLS02IGhlYWRpbmctLW5vbWFyZ2luXCI+e3sgbGFiZWwgfX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250LS1jYXB0aW9uLWJvbGRcIj57eyB0aW1lRm9ybWF0IH19PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9sYWJlbD5cbiAgPC9kaXY+XG48L25nLXRlbXBsYXRlPlxuIl19