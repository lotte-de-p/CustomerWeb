import { Component, EventEmitter, Input, Output, ViewChild, } from '@angular/core';
import { floor } from 'lodash-es';
import { AppointmentPickerTypeEnum } from '../appointment-picker-type.enum';
import { TimeslotMomentEnum } from '../../../enums';
import { AppointmentPickerConsumerTypeEnum } from '../../../interfaces';
import { TimeslotUtil } from '../../../utils';
import * as i0 from "@angular/core";
import * as i1 from "@telenet/ng-lib-page";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "ngx-slick-carousel";
import * as i5 from "../../../errors/form.directive";
import * as i6 from "../../../errors/message-group.directive";
import * as i7 from "../no-available-appointment-date/no-available-appointment-date.component";
import * as i8 from "@ngx-translate/core";
const _c0 = ["slickModal"];
function InputAppointmentDatePickerComponent_ng_container_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 6);
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r5 = i0.ɵɵreference(5);
    i0.ɵɵproperty("ngTemplateOutlet", _r5);
} }
function InputAppointmentDatePickerComponent_ng_container_0_ngx_slick_carousel_6_ng_container_2_ng_container_1_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵelement(1, "i", 22)(2, "i", 23)(3, "i", 24)(4, "i", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const appointmentSlot_r12 = i0.ɵɵnextContext().$implicit;
    const ctx_r14 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("disabled", !appointmentSlot_r12.hasAvailableMoment(ctx_r14.appointmentMomentEnum.MORNING));
    i0.ɵɵadvance();
    i0.ɵɵclassProp("disabled", !appointmentSlot_r12.hasAvailableMoment(ctx_r14.appointmentMomentEnum.LUNCH));
    i0.ɵɵadvance();
    i0.ɵɵclassProp("disabled", !appointmentSlot_r12.hasAvailableMoment(ctx_r14.appointmentMomentEnum.AFTERNOON));
    i0.ɵɵadvance();
    i0.ɵɵclassProp("disabled", !appointmentSlot_r12.hasAvailableMoment(ctx_r14.appointmentMomentEnum.EVENING));
} }
function InputAppointmentDatePickerComponent_ng_container_0_ngx_slick_carousel_6_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 11);
    i0.ɵɵelement(2, "input", 12);
    i0.ɵɵpipe(3, "date");
    i0.ɵɵelementStart(4, "div", 13)(5, "div", 14)(6, "div", 15)(7, "label", 16);
    i0.ɵɵlistener("click", function InputAppointmentDatePickerComponent_ng_container_0_ngx_slick_carousel_6_ng_container_2_ng_container_1_Template_label_click_7_listener() { const restoredCtx = i0.ɵɵrestoreView(_r17); const appointmentSlot_r12 = restoredCtx.$implicit; const ctx_r16 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r16.selectInstallSlotDay(appointmentSlot_r12)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 17);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 18);
    i0.ɵɵtext(12);
    i0.ɵɵpipe(13, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(14, InputAppointmentDatePickerComponent_ng_container_0_ngx_slick_carousel_6_ng_container_2_ng_container_1_div_14_Template, 5, 8, "div", 19);
    i0.ɵɵelementStart(15, "div", 20);
    i0.ɵɵtext(16);
    i0.ɵɵpipe(17, "date");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const appointmentSlot_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    const ctx_r11 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵattribute("style", ctx_r11.consumerType === ctx_r11.consumerTypeEnum.NC ? ctx_r11.getSlideUpAnimationStyling(0) : ctx_r11.getSlideUpAnimationStyling(i_r13), i0.ɵɵsanitizeStyle);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("value", i0.ɵɵpipeBind2(3, 13, appointmentSlot_r12.date, "ddmm"));
    i0.ɵɵpropertyInterpolate1("id", "day-", i_r13, "");
    i0.ɵɵproperty("disabled", ctx_r11.isDisabled(appointmentSlot_r12))("checked", appointmentSlot_r12 === ctx_r11.selectedTimeslot);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("disabled", ctx_r11.isDisabled(appointmentSlot_r12));
    i0.ɵɵattribute("data-cy", "appointment-date-picker-" + i_r13);
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate1("for", "day-", i_r13, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(10, 16, appointmentSlot_r12.date, "EEEE"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(13, 19, appointmentSlot_r12.date, "dd"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r11.shouldRenderMoment());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(17, 22, appointmentSlot_r12.date, "MMMM yyyy"), " ");
} }
function InputAppointmentDatePickerComponent_ng_container_0_ngx_slick_carousel_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, InputAppointmentDatePickerComponent_ng_container_0_ngx_slick_carousel_6_ng_container_2_ng_container_1_Template, 18, 25, "ng-container", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r9.timeslots);
} }
function InputAppointmentDatePickerComponent_ng_container_0_ngx_slick_carousel_6_form_3_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 26);
    i0.ɵɵlistener("ngSubmit", function InputAppointmentDatePickerComponent_ng_container_0_ngx_slick_carousel_6_form_3_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r18.loadMoreSlots()); });
    i0.ɵɵelement(1, "button", 27);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("disabled", ctx_r10.disableLoadMore);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 3, "ng.sales-checkout.appointment.date-loadmore.lbl"), i0.ɵɵsanitizeHtml);
} }
function InputAppointmentDatePickerComponent_ng_container_0_ngx_slick_carousel_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ngx-slick-carousel", 7, 8);
    i0.ɵɵtemplate(2, InputAppointmentDatePickerComponent_ng_container_0_ngx_slick_carousel_6_ng_container_2_Template, 2, 1, "ng-container", 0)(3, InputAppointmentDatePickerComponent_ng_container_0_ngx_slick_carousel_6_form_3_Template, 3, 5, "form", 9);
    i0.ɵɵpipe(4, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("config", ctx_r7.slideConfig);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r7.reRender);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r7.showLoadMore && !ctx_r7.reRender && i0.ɵɵpipeBind1(4, 3, ctx_r7.appointmentsAvailable$));
} }
function InputAppointmentDatePickerComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h6", 3);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, InputAppointmentDatePickerComponent_ng_container_0_ng_container_4_Template, 1, 1, "ng-container", 4);
    i0.ɵɵpipe(5, "async");
    i0.ɵɵtemplate(6, InputAppointmentDatePickerComponent_ng_container_0_ngx_slick_carousel_6_Template, 5, 5, "ngx-slick-carousel", 5);
    i0.ɵɵpipe(7, "async");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 3, ctx_r0.datePickerLabel));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !i0.ɵɵpipeBind1(5, 5, ctx_r0.appointmentsAvailable$));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(7, 7, ctx_r0.appointmentsAvailable$));
} }
const _c1 = a0 => ({ "disableLoadMore": a0 });
function InputAppointmentDatePickerComponent_ng_container_1_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 36);
} if (rf & 2) {
    const ctx_r20 = i0.ɵɵnextContext(2);
    const _r5 = i0.ɵɵreference(5);
    i0.ɵɵproperty("ngTemplateOutlet", _r5)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c1, ctx_r20.disableNext));
} }
const _c2 = (a0, a1) => ({ appointmentSlot: a0, i: a1 });
function InputAppointmentDatePickerComponent_ng_container_1_ng_container_19_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementContainer(1, 36);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const appointmentSlot_r25 = ctx.$implicit;
    const i_r26 = ctx.index;
    i0.ɵɵnextContext(3);
    const _r3 = i0.ɵɵreference(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", _r3)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c2, appointmentSlot_r25, i_r26));
} }
function InputAppointmentDatePickerComponent_ng_container_1_ng_container_19_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementContainer(1, 36);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const appointmentSlot_r27 = ctx.$implicit;
    const i_r28 = ctx.index;
    const ctx_r23 = i0.ɵɵnextContext(3);
    const _r3 = i0.ɵɵreference(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", _r3)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c2, appointmentSlot_r27, i_r28 + ctx_r23.noOfAppointmentSlotsPerPage / 2));
} }
function InputAppointmentDatePickerComponent_ng_container_1_ng_container_19_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementContainer(1, 36);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const appointmentSlot_r29 = ctx.$implicit;
    const i_r30 = ctx.index;
    const ctx_r24 = i0.ɵɵnextContext(3);
    const _r3 = i0.ɵɵreference(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", _r3)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c2, appointmentSlot_r29, i_r30 + ctx_r24.noOfAppointmentSlotsPerPage));
} }
function InputAppointmentDatePickerComponent_ng_container_1_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 37)(2, "div", 38)(3, "div", 39);
    i0.ɵɵtemplate(4, InputAppointmentDatePickerComponent_ng_container_1_ng_container_19_ng_container_4_Template, 2, 5, "ng-container", 10);
    i0.ɵɵpipe(5, "slice");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 38)(7, "div", 39);
    i0.ɵɵtemplate(8, InputAppointmentDatePickerComponent_ng_container_1_ng_container_19_ng_container_8_Template, 2, 5, "ng-container", 10);
    i0.ɵɵpipe(9, "slice");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "div", 40)(11, "div", 41)(12, "div", 42);
    i0.ɵɵtemplate(13, InputAppointmentDatePickerComponent_ng_container_1_ng_container_19_ng_container_13_Template, 2, 5, "ng-container", 10);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r21 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("style", ctx_r21.consumerType === ctx_r21.consumerTypeEnum.NC ? ctx_r21.getSlideUpAnimationStyling(0) : ctx_r21.getSlideUpAnimationStyling(0), i0.ɵɵsanitizeStyle);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind3(5, 6, ctx_r21.currentSlots, 0, ctx_r21.noOfAppointmentSlotsPerPage / 2));
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("style", ctx_r21.consumerType === ctx_r21.consumerTypeEnum.NC ? ctx_r21.getSlideUpAnimationStyling(0) : ctx_r21.getSlideUpAnimationStyling(1), i0.ɵɵsanitizeStyle);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind3(9, 10, ctx_r21.currentSlots, ctx_r21.noOfAppointmentSlotsPerPage / 2, ctx_r21.noOfAppointmentSlotsPerPage));
    i0.ɵɵadvance(3);
    i0.ɵɵattribute("style", ctx_r21.consumerType === ctx_r21.consumerTypeEnum.NC ? ctx_r21.getSlideUpAnimationStyling(0) : ctx_r21.getSlideUpAnimationStyling(0), i0.ɵɵsanitizeStyle);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r21.currentSlots);
} }
const _c3 = a0 => ({ "disabled": a0 });
function InputAppointmentDatePickerComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 28)(2, "h6", 3);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 29)(6, "a", 30);
    i0.ɵɵlistener("click", function InputAppointmentDatePickerComponent_ng_container_1_Template_a_click_6_listener() { i0.ɵɵrestoreView(_r32); const ctx_r31 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r31.loadPreviousSlots()); });
    i0.ɵɵelement(7, "i", 31);
    i0.ɵɵelementStart(8, "span", 32);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "translate");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "a", 33);
    i0.ɵɵlistener("click", function InputAppointmentDatePickerComponent_ng_container_1_Template_a_click_11_listener() { i0.ɵɵrestoreView(_r32); const ctx_r33 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r33.loadMoreSlots()); });
    i0.ɵɵelement(12, "i", 34);
    i0.ɵɵelementStart(13, "span", 32);
    i0.ɵɵtext(14);
    i0.ɵɵpipe(15, "translate");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(16, "div");
    i0.ɵɵtemplate(17, InputAppointmentDatePickerComponent_ng_container_1_ng_container_17_Template, 1, 4, "ng-container", 35);
    i0.ɵɵpipe(18, "async");
    i0.ɵɵtemplate(19, InputAppointmentDatePickerComponent_ng_container_1_ng_container_19_Template, 14, 14, "ng-container", 0);
    i0.ɵɵpipe(20, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 7, ctx_r1.datePickerLabel));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(17, _c3, ctx_r1.disablePrevious));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(10, 9, "ng.sales-checkout.appointment.previous.button"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(19, _c3, ctx_r1.disableNext));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(15, 11, "ng.sales-checkout.appointment.next.button"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !i0.ɵɵpipeBind1(18, 13, ctx_r1.appointmentsAvailable$));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.reRender && i0.ɵɵpipeBind1(20, 15, ctx_r1.appointmentsAvailable$));
} }
function InputAppointmentDatePickerComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 43)(1, "label", 44);
    i0.ɵɵlistener("click", function InputAppointmentDatePickerComponent_ng_template_2_Template_label_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r37); const appointmentSlot_r34 = restoredCtx.appointmentSlot; const ctx_r36 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r36.selectInstallSlotDay(appointmentSlot_r34)); });
    i0.ɵɵelement(2, "input", 45);
    i0.ɵɵpipe(3, "date");
    i0.ɵɵelementStart(4, "div", 46)(5, "div", 47)(6, "div", 48)(7, "div", 49);
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "titlecase");
    i0.ɵɵpipe(10, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 50);
    i0.ɵɵtext(12);
    i0.ɵɵpipe(13, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 51);
    i0.ɵɵtext(15);
    i0.ɵɵpipe(16, "date");
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const appointmentSlot_r34 = ctx.appointmentSlot;
    const i_r35 = ctx.i;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate1("for", "day-", i_r35, "");
    i0.ɵɵattribute("data-cy", "appointment-date-" + i_r35);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("value", i0.ɵɵpipeBind2(3, 9, appointmentSlot_r34.date, "ddmm"));
    i0.ɵɵpropertyInterpolate1("id", "day-", i_r35, "");
    i0.ɵɵproperty("checked", appointmentSlot_r34 === ctx_r2.selectedTimeslot)("disabled", ctx_r2.isDisabled(appointmentSlot_r34));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(9, 12, i0.ɵɵpipeBind2(10, 14, appointmentSlot_r34.date, "EEEE")));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(13, 17, appointmentSlot_r34.date, "dd/MM"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(16, 20, appointmentSlot_r34.date, "dd/MM"));
} }
function InputAppointmentDatePickerComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r40 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-no-available-appointment-date", 52);
    i0.ɵɵlistener("loadMoreSlots", function InputAppointmentDatePickerComponent_ng_template_4_Template_app_no_available_appointment_date_loadMoreSlots_0_listener() { i0.ɵɵrestoreView(_r40); const ctx_r39 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r39.loadMoreSlots()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const disableLoadMore_r38 = ctx.disableLoadMore;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("messageGroup", ctx_r4.messageGroup)("disableLoadMore", disableLoadMore_r38);
} }
export class InputAppointmentDatePickerComponent {
    languageService;
    cdr;
    messageGroup;
    startDate = new Date();
    endDate;
    timeslots;
    selectedTimeslot;
    momentFilter;
    initialSlide = 0;
    slidesToScroll;
    slidesToShow;
    updateSlots;
    showLoadMore;
    consumerType;
    disableLoadMore;
    enableAppointmentsUI;
    appointmentPickerType;
    isDeviceLandscape;
    datePickerLabel;
    appointmentSelected = new EventEmitter();
    loadMore = new EventEmitter();
    scrollTo = new EventEmitter();
    slickModal;
    appointmentsAvailable$;
    currentSlots;
    reRender = false;
    noOfAppointmentSlotsPerPage = 14;
    appointmentMomentEnum = TimeslotMomentEnum;
    disablePrevious = true;
    disableNext = false;
    startDateToDisableNext;
    currentDate = new Date();
    consumerTypeEnum = AppointmentPickerConsumerTypeEnum;
    slideConfig = {
        infinite: false,
        initialSlide: 0,
        mobileFirst: true,
        arrows: true,
        nextArrow: '<div class="cards-slider-button arrow arrow--right slick-arrow" aria-disabled="false"></div>',
        prevArrow: '<div class="cards-slider-button arrow arrow--left slick-arrow" aria-disabled="false"></div>',
        slidesToScroll: 1,
        slidesToShow: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToScroll: 6,
                    slidesToShow: 6,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToScroll: 3,
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToScroll: 2,
                    slidesToShow: 2,
                },
            },
        ],
    };
    constructor(languageService, cdr) {
        this.languageService = languageService;
        this.cdr = cdr;
    }
    selectInstallSlotDay(appointmentSlot) {
        if (appointmentSlot.hasAvailableMoments() &&
            (this.momentFilter ? appointmentSlot.hasAvailableMoment(this.momentFilter) : true)) {
            this.selectedTimeslot = appointmentSlot;
            this.appointmentSelected.emit(appointmentSlot);
            this.scrollTo.emit(AppointmentPickerTypeEnum.BY_MOMENT);
        }
    }
    isDisabled(appointmentSlot) {
        return (!appointmentSlot.hasAvailableMoments() ||
            (this.momentFilter ? !appointmentSlot.hasAvailableMoment(this.momentFilter) : false));
    }
    ngOnInit() {
        this.slideConfig.slidesToScroll = this.slidesToScroll ? this.slidesToScroll : this.slideConfig.slidesToScroll;
        this.slideConfig.slidesToShow = this.slidesToShow ? this.slidesToShow : this.slideConfig.slidesToShow;
        this.scrollToSelectedSlides();
        if (this.enableAppointmentsUI) {
            this.currentSlots = this.updateSlots?.length > 0 ? this.updateSlots : this.timeslots;
        }
    }
    scrollToSelectedSlides() {
        if (this.selectedTimeslot) {
            const selectedSlotIndex = this.timeslots.findIndex((slot) => {
                return slot.date.getTime() === this.selectedTimeslot?.date.getTime();
            });
            if (this.consumerType === AppointmentPickerConsumerTypeEnum.NC) {
                this.slideConfig.initialSlide = this.findInitialSlideForNC(selectedSlotIndex);
            }
            else {
                this.slideConfig.initialSlide = selectedSlotIndex;
            }
        }
    }
    findInitialSlideForNC(slotIndex) {
        return floor(slotIndex / this.slideConfig.slidesToScroll) * this.slideConfig.slidesToScroll;
    }
    shouldRenderMoment() {
        return !(this.consumerType === AppointmentPickerConsumerTypeEnum.NC &&
            this.appointmentPickerType === AppointmentPickerTypeEnum.BY_MOMENT);
    }
    getSlideUpAnimationStyling(index) {
        return '--animation-delay: ' + index;
    }
    ngOnChanges(changes) {
        if (changes?.['momentFilter']) {
            if (this.consumerType === AppointmentPickerConsumerTypeEnum.NC && !this.selectedTimeslot) {
                this.slideConfig.initialSlide = 0;
            }
            this.reRender = true;
            setTimeout(() => (this.reRender = false));
        }
        if (changes?.['showLoadMore']) {
            this.showLoadMore = changes['showLoadMore'].currentValue;
        }
        this.handleUpdateTimeSlots(changes);
        if (changes?.['isDeviceLandscape'] && this.consumerType === AppointmentPickerConsumerTypeEnum.NC) {
            this.configSlideConfig();
            this.reRender = true;
            setTimeout(() => {
                this.reRender = false;
                this.scrollToSelectedSlides();
            });
        }
    }
    handleUpdateTimeSlots(changes) {
        if (changes?.['updateSlots']?.currentValue) {
            if (this.enableAppointmentsUI) {
                this.currentSlots = changes['updateSlots']?.currentValue;
                this.disablePrevious =
                    undefined !==
                        this.currentSlots.find((timeSlot) => timeSlot.date.toDateString() === this.currentDate.toDateString());
                this.handleNextButtonDisable();
            }
            this.appointmentsAvailable$ = TimeslotUtil.calculateTimeSlotsAvailability(changes['updateSlots']?.currentValue);
            if (TimeslotUtil.shouldUpdateTimeSlots(this.updateSlots, this.timeslots)) {
                this.reRender = true;
                this.timeslots = this.timeslots.concat(changes['updateSlots'].currentValue);
                this.reRender = false;
                this.cdr.detectChanges();
                if (!this.enableAppointmentsUI) {
                    this.slickModal.slickGoTo(this.timeslots.length - this.updateSlots.length);
                }
            }
        }
    }
    configSlideConfig() {
        if (this.isDeviceLandscape) {
            this.slideConfig.arrows = true;
            this.slideConfig.slidesToScroll = 4;
            this.slideConfig.slidesToShow = this.slidesToShow ? this.slidesToShow : 1;
        }
        else {
            this.slideConfig.arrows = false;
            this.slideConfig.slidesToScroll = 2;
            this.slideConfig.slidesToShow = 2;
        }
    }
    loadMoreSlots() {
        this.loadMore.emit();
        if (this.enableAppointmentsUI) {
            this.appointmentSelected.emit(undefined);
            this.disablePrevious = false;
            this.handleNextButtonDisable();
        }
    }
    handleNextButtonDisable() {
        this.disableNext = this.startDate >= this.endDate;
    }
    loadPreviousSlots() {
        this.loadMore.emit(true);
        this.disableNext = false;
        this.appointmentSelected.emit(undefined);
    }
    static ɵfac = function InputAppointmentDatePickerComponent_Factory(t) { return new (t || InputAppointmentDatePickerComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputAppointmentDatePickerComponent, selectors: [["app-form-appointment-date-picker"]], viewQuery: function InputAppointmentDatePickerComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slickModal = _t.first);
        } }, inputs: { messageGroup: "messageGroup", startDate: "startDate", endDate: "endDate", timeslots: "timeslots", selectedTimeslot: "selectedTimeslot", momentFilter: "momentFilter", initialSlide: "initialSlide", slidesToScroll: "slidesToScroll", slidesToShow: "slidesToShow", updateSlots: "updateSlots", showLoadMore: "showLoadMore", consumerType: "consumerType", disableLoadMore: "disableLoadMore", enableAppointmentsUI: "enableAppointmentsUI", appointmentPickerType: "appointmentPickerType", isDeviceLandscape: "isDeviceLandscape", datePickerLabel: "datePickerLabel" }, outputs: { appointmentSelected: "appointmentSelected", loadMore: "loadMore", scrollTo: "scrollTo" }, features: [i0.ɵɵNgOnChangesFeature], decls: 6, vars: 2, consts: [[4, "ngIf"], ["slides", ""], ["noAppointmentSlots", ""], [1, "text-flow", "text-flow--h3", "section__title", "text-align--left"], [3, "ngTemplateOutlet", 4, "ngIf"], ["class", "label-modifier-box slick-slider card-date card-date-with-value", 3, "config", 4, "ngIf"], [3, "ngTemplateOutlet"], [1, "label-modifier-box", "slick-slider", "card-date", "card-date-with-value", 3, "config"], ["slickModal", "slick-carousel"], [3, "ngSubmit", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["ngxSlickItem", "", 1, "label-modifier-slot", "slick-slide", "animation-show-slide-up"], ["type", "radio", "name", "day", 1, "label-modifier-radio", 3, "value", "id", "disabled", "checked"], [1, "label-modifier--append", "label-modifier--container", "cursor--pointer"], [1, "label-modifier--body"], [1, "label-modifier--body--inner-container"], [1, "label-modifier-radio__label", 3, "for", "click"], [1, "text-flow", "text-flow--label", "label-modifier-content__header"], [1, "text-flow", "text-flow--body", "label-modifier-content__body"], ["class", "text-flow text-flow--label label-modifier-content__timing", 4, "ngIf"], [1, "text-flow", "text-flow--label", "label-modifier-content__footer"], [1, "text-flow", "text-flow--label", "label-modifier-content__timing"], [1, "icon", "icon-sunrise"], [1, "icon", "icon-sun"], [1, "icon", "icon-sun-half-semifilled"], [1, "icon", "icon-moon"], [3, "ngSubmit"], [1, "button", "button--secondary", "mt-50", 3, "innerHTML"], [1, "display--flex", "justify-content--between", "ng-star-inserted", "align-items--center--md", "flex-direction--row--md", "flex-direction--column", "mt--m"], [1, "display--flex", "justify-content--between", "justify-content--end--md", "mb--m", "mb--n--md"], ["href", "javascript:void(0)", 1, "link", "link--with-icon", "mr--l", 3, "ngClass", "click"], [1, "icon", "icon-chevron-left"], [1, "text-flow", "text-flow--button"], ["href", "javascript:void(0)", 1, "link", "link--with-icon", 3, "ngClass", "click"], [1, "icon", "icon-chevron-right", "icon--after"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "hide-until-md", "col-12"], [1, "display--flex"], [1, "select-tile--group", "display--grid", "grid-template-column--3", "grid-template-column--7--md", "gap--m", "mb--m", "col-12"], [1, "hide-from-md"], [1, "display--grid"], [1, "select-tile--group", "display--grid", "grid-template-column--3", "grid-template-column--7--md", "gap--xxs", "mb--xxs"], [1, "animation-show-slide-up"], [1, "select-tile", "position--relative", "display--flex", "align-items--start", "gap--m", "gap--l--sm", "color-text", "p--m", "p--xs--sm", "p--l--lg", "m--n", "background-white", 3, "for", "click"], ["type", "radio", "name", "day", 1, "select-tile__input", "display--flex", "align-items--center", "justify-content--center", "font--body-regular", "hidden-input-box", "cursor--pointer", 3, "value", "id", "checked", "disabled"], [1, "select-tile__content", "display--flex", "flex-direction--column", "align-self--stretch", "flex-grow"], [1, "select-tile__content--inner", "display--flex", "gap--xm"], [1, "select-tile__content_text", "display--flex", "flex-direction--column", "flex-grow", "align-items--center"], [1, "font--caption", "mb--xxs"], [1, "text-flow", "text-flow--h5", "hide-until-md"], [1, "text-flow", "text-flow--h6", "hide-from-md"], [3, "messageGroup", "disableLoadMore", "loadMoreSlots"]], template: function InputAppointmentDatePickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, InputAppointmentDatePickerComponent_ng_container_0_Template, 8, 9, "ng-container", 0)(1, InputAppointmentDatePickerComponent_ng_container_1_Template, 21, 21, "ng-container", 0)(2, InputAppointmentDatePickerComponent_ng_template_2_Template, 17, 23, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(4, InputAppointmentDatePickerComponent_ng_template_4_Template, 1, 2, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.enableAppointmentsUI);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.enableAppointmentsUI);
        } }, dependencies: [i2.NgClass, i2.NgForOf, i2.NgIf, i2.NgTemplateOutlet, i3.ɵNgNoValidate, i3.NgControlStatusGroup, i3.NgForm, i4.SlickCarouselComponent, i4.SlickItemDirective, i5.FormDirective, i6.MessageGroupDirective, i7.NoAvailableAppointmentDateComponent, i2.AsyncPipe, i2.SlicePipe, i2.TitleCasePipe, i2.DatePipe, i8.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputAppointmentDatePickerComponent, [{
        type: Component,
        args: [{ selector: 'app-form-appointment-date-picker', template: "<ng-container *ngIf=\"!enableAppointmentsUI\">\n  <h6 class=\"text-flow text-flow--h3 section__title text-align--left\">{{ datePickerLabel | translate }}</h6>\n  <ng-container *ngIf=\"!(appointmentsAvailable$ | async)\" [ngTemplateOutlet]=\"noAppointmentSlots\"></ng-container>\n  <ngx-slick-carousel\n    *ngIf=\"(appointmentsAvailable$ | async)\"\n    class=\"label-modifier-box slick-slider card-date card-date-with-value\"\n    #slickModal=\"slick-carousel\"\n    [config]=\"slideConfig\">\n    <ng-container *ngIf=\"!reRender\">\n      <ng-container *ngFor=\"let appointmentSlot of timeslots; let i = index\">\n        <div\n          ngxSlickItem\n          class=\"label-modifier-slot slick-slide animation-show-slide-up\"\n          [attr.style]=\"consumerType === consumerTypeEnum.NC ? getSlideUpAnimationStyling(0) : getSlideUpAnimationStyling(i)\">\n          <input\n            type=\"radio\"\n            name=\"day\"\n            value=\"{{ appointmentSlot.date | date:'ddmm' }}\"\n            id=\"day-{{ i }}\"\n            class=\"label-modifier-radio\"\n            [disabled]=\"isDisabled(appointmentSlot)\"\n            [checked]=\"appointmentSlot === selectedTimeslot\" />\n          <div\n            [attr.data-cy]=\"'appointment-date-picker-'+i\"\n            class=\"label-modifier--append label-modifier--container cursor--pointer\"\n            [class.disabled]=\"isDisabled(appointmentSlot)\">\n            <div class=\"label-modifier--body\">\n              <div class=\"label-modifier--body--inner-container\">\n                <label\n                  for=\"day-{{ i }}\"\n                  class=\"label-modifier-radio__label\"\n                  (click)=\"selectInstallSlotDay(appointmentSlot)\"></label>\n                <div class=\"text-flow text-flow--label label-modifier-content__header\">\n                  {{ appointmentSlot.date | date:'EEEE' }}\n                </div>\n                <div class=\"text-flow text-flow--body label-modifier-content__body\">\n                  {{ appointmentSlot.date | date:'dd' }}\n                </div>\n                <div class=\"text-flow text-flow--label label-modifier-content__timing\" *ngIf=\"shouldRenderMoment()\">\n                  <i\n                    class=\"icon icon-sunrise\"\n                    [class.disabled]=\"!appointmentSlot.hasAvailableMoment(appointmentMomentEnum.MORNING)\"></i>\n                  <i\n                    class=\"icon icon-sun\"\n                    [class.disabled]=\"!appointmentSlot.hasAvailableMoment(appointmentMomentEnum.LUNCH)\"></i>\n                  <i\n                    class=\"icon icon-sun-half-semifilled\"\n                    [class.disabled]=\"!appointmentSlot.hasAvailableMoment(appointmentMomentEnum.AFTERNOON)\"></i>\n                  <i\n                    class=\"icon icon-moon\"\n                    [class.disabled]=\"!appointmentSlot.hasAvailableMoment(appointmentMomentEnum.EVENING)\"></i>\n                </div>\n                <div class=\"text-flow text-flow--label label-modifier-content__footer\">\n                  {{ appointmentSlot.date | date:'MMMM yyyy' }}\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </ng-container>\n    </ng-container>\n    <form (ngSubmit)=\"loadMoreSlots()\" *ngIf=\"showLoadMore && !reRender && (appointmentsAvailable$ | async)\">\n      <button\n        class=\"button button--secondary mt-50\"\n        [class.disabled]=\"disableLoadMore\"\n        [innerHTML]=\"'ng.sales-checkout.appointment.date-loadmore.lbl' | translate\"></button>\n    </form>\n  </ngx-slick-carousel>\n</ng-container>\n\n<ng-container *ngIf=\"enableAppointmentsUI\">\n  <div\n    class=\"display--flex justify-content--between ng-star-inserted align-items--center--md flex-direction--row--md flex-direction--column mt--m\">\n    <h6 class=\"text-flow text-flow--h3 section__title text-align--left\">{{ datePickerLabel | translate }}</h6>\n    <div class=\"display--flex justify-content--between justify-content--end--md mb--m mb--n--md\">\n      <a\n        href=\"javascript:void(0)\"\n        (click)=\"loadPreviousSlots()\"\n        class=\"link link--with-icon mr--l\"\n        [ngClass]=\"{\n            'disabled' : disablePrevious\n          }\"\n        ><i class=\"icon icon-chevron-left\"></i\n        ><span class=\"text-flow text-flow--button\"\n          >{{'ng.sales-checkout.appointment.previous.button' | translate}}</span\n        ></a\n      >\n      <a\n        href=\"javascript:void(0)\"\n        (click)=\"loadMoreSlots()\"\n        class=\"link link--with-icon\"\n        [ngClass]=\"{\n            'disabled' : disableNext\n          }\"\n        ><i class=\"icon icon-chevron-right icon--after\"></i\n        ><span class=\"text-flow text-flow--button\">{{'ng.sales-checkout.appointment.next.button' | translate}}</span></a\n      >\n    </div>\n  </div>\n  <div>\n    <ng-container\n      *ngIf=\"!(appointmentsAvailable$ | async)\"\n      [ngTemplateOutlet]=\"noAppointmentSlots\"\n      [ngTemplateOutletContext]=\"{'disableLoadMore': disableNext}\"></ng-container>\n    <ng-container *ngIf=\"!reRender && (appointmentsAvailable$ | async)\">\n      <div class=\"hide-until-md col-12\">\n        <div\n          class=\"display--flex\"\n          [attr.style]=\"consumerType === consumerTypeEnum.NC ? getSlideUpAnimationStyling(0) : getSlideUpAnimationStyling(0)\">\n          <div\n            class=\"select-tile--group display--grid grid-template-column--3 grid-template-column--7--md gap--m mb--m col-12\">\n            <ng-container\n              *ngFor=\"let appointmentSlot of currentSlots | slice: 0:(noOfAppointmentSlotsPerPage/2); let i = index\">\n              <ng-container\n                [ngTemplateOutlet]=\"slides\"\n                [ngTemplateOutletContext]=\"\n                {appointmentSlot: appointmentSlot, i: i}\"></ng-container>\n            </ng-container>\n          </div>\n        </div>\n        <div\n          class=\"display--flex\"\n          [attr.style]=\"consumerType === consumerTypeEnum.NC ? getSlideUpAnimationStyling(0) : getSlideUpAnimationStyling(1)\">\n          <div\n            class=\"select-tile--group display--grid grid-template-column--3 grid-template-column--7--md gap--m mb--m col-12\">\n            <ng-container\n              *ngFor=\"let appointmentSlot of currentSlots | slice: (noOfAppointmentSlotsPerPage/2):noOfAppointmentSlotsPerPage; let i = index\">\n              <ng-container\n                [ngTemplateOutlet]=\"slides\"\n                [ngTemplateOutletContext]=\"\n                {appointmentSlot: appointmentSlot, i: (i+(noOfAppointmentSlotsPerPage/2))}\"></ng-container>\n            </ng-container>\n          </div>\n        </div>\n      </div>\n      <div class=\"hide-from-md\">\n        <div\n          class=\"display--grid\"\n          [attr.style]=\"consumerType === consumerTypeEnum.NC ? getSlideUpAnimationStyling(0) : getSlideUpAnimationStyling(0)\">\n          <div\n            class=\"select-tile--group display--grid grid-template-column--3 grid-template-column--7--md gap--xxs mb--xxs\">\n            <ng-container *ngFor=\"let appointmentSlot of currentSlots; let i = index\">\n              <ng-container\n                [ngTemplateOutlet]=\"slides\"\n                [ngTemplateOutletContext]=\"\n              {appointmentSlot: appointmentSlot, i: i+noOfAppointmentSlotsPerPage}\"></ng-container>\n            </ng-container>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n</ng-container>\n<ng-template #slides let-appointmentSlot=\"appointmentSlot\" let-i=\"i\">\n  <div class=\"animation-show-slide-up\">\n    <label\n      [attr.data-cy]=\"'appointment-date-'+i\"\n      (click)=\"selectInstallSlotDay(appointmentSlot)\"\n      for=\"day-{{ i }}\"\n      class=\"select-tile position--relative display--flex align-items--start gap--m gap--l--sm color-text p--m p--xs--sm p--l--lg m--n background-white\">\n      <input\n        type=\"radio\"\n        name=\"day\"\n        value=\"{{ appointmentSlot.date | date:'ddmm' }}\"\n        id=\"day-{{ i }}\"\n        class=\"select-tile__input display--flex align-items--center justify-content--center font--body-regular hidden-input-box cursor--pointer\"\n        [checked]=\"appointmentSlot === selectedTimeslot\"\n        [disabled]=\"isDisabled(appointmentSlot)\" />\n      <div class=\"select-tile__content display--flex flex-direction--column align-self--stretch flex-grow\">\n        <div class=\"select-tile__content--inner display--flex gap--xm\">\n          <div class=\"select-tile__content_text display--flex flex-direction--column flex-grow align-items--center\">\n            <div class=\"font--caption mb--xxs\">{{ appointmentSlot.date | date:'EEEE' | titlecase}}</div>\n            <div class=\"text-flow text-flow--h5 hide-until-md\">{{ appointmentSlot.date | date:'dd/MM' }}</div>\n            <div class=\"text-flow text-flow--h6 hide-from-md\">{{ appointmentSlot.date | date:'dd/MM' }}</div>\n          </div>\n        </div>\n      </div>\n    </label>\n  </div>\n</ng-template>\n\n<ng-template #noAppointmentSlots let-disableLoadMore=\"disableLoadMore\">\n  <app-no-available-appointment-date\n    (loadMoreSlots)=\"loadMoreSlots()\"\n    [messageGroup]=\"messageGroup\"\n    [disableLoadMore]=\"disableLoadMore\"></app-no-available-appointment-date>\n</ng-template>\n" }]
    }], () => [{ type: i1.LanguageService }, { type: i0.ChangeDetectorRef }], { messageGroup: [{
            type: Input
        }], startDate: [{
            type: Input
        }], endDate: [{
            type: Input
        }], timeslots: [{
            type: Input
        }], selectedTimeslot: [{
            type: Input
        }], momentFilter: [{
            type: Input
        }], initialSlide: [{
            type: Input
        }], slidesToScroll: [{
            type: Input
        }], slidesToShow: [{
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
        }], appointmentPickerType: [{
            type: Input
        }], isDeviceLandscape: [{
            type: Input
        }], datePickerLabel: [{
            type: Input
        }], appointmentSelected: [{
            type: Output
        }], loadMore: [{
            type: Output
        }], scrollTo: [{
            type: Output
        }], slickModal: [{
            type: ViewChild,
            args: ['slickModal']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputAppointmentDatePickerComponent, { className: "InputAppointmentDatePickerComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtYXBwb2ludG1lbnQtZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xzL2FwcG9pbnRtZW50LXBpY2tlci9pbnB1dC1hcHBvaW50bWVudC1kYXRlLXBpY2tlci9pbnB1dC1hcHBvaW50bWVudC1kYXRlLXBpY2tlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9zcmMvY29udHJvbHMvYXBwb2ludG1lbnQtcGlja2VyL2lucHV0LWFwcG9pbnRtZW50LWRhdGUtcGlja2VyL2lucHV0LWFwcG9pbnRtZW50LWRhdGUtcGlja2VyLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFFTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNsQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUU1RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV4RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7OztJQ2hCNUMsMkJBQStHOzs7O0lBQXZELHNDQUF1Qzs7O0lBb0NqRiwrQkFBb0c7SUFDbEcsd0JBRTRGLFlBQUEsWUFBQSxZQUFBO0lBVTlGLGlCQUFNOzs7O0lBVkYsY0FBcUY7SUFBckYsMEdBQXFGO0lBR3JGLGNBQW1GO0lBQW5GLHdHQUFtRjtJQUduRixjQUF1RjtJQUF2Riw0R0FBdUY7SUFHdkYsY0FBcUY7SUFBckYsMEdBQXFGOzs7O0lBekNuRyw2QkFBdUU7SUFDckUsK0JBR3NIO0lBQ3BILDRCQU9xRDs7SUFDckQs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Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSB9IGZyb20gJ0B0ZWxlbmV0L25nLWxpYi1wYWdlJztcbmltcG9ydCB7IGZsb29yIH0gZnJvbSAnbG9kYXNoLWVzJztcbmltcG9ydCB7IEFwcG9pbnRtZW50UGlja2VyVHlwZUVudW0gfSBmcm9tICcuLi9hcHBvaW50bWVudC1waWNrZXItdHlwZS5lbnVtJztcbmltcG9ydCB7IEFwcG9pbnRtZW50VHJhbnNmb3JtZXJTbG90IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzJztcbmltcG9ydCB7IFRpbWVzbG90TW9tZW50RW51bSB9IGZyb20gJy4uLy4uLy4uL2VudW1zJztcbmltcG9ydCB7IEFwcG9pbnRtZW50UGlja2VyQ29uc3VtZXJUeXBlRW51bSB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVGltZXNsb3RVdGlsIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgU2xpY2tDYXJvdXNlbENvbXBvbmVudCB9IGZyb20gJ25neC1zbGljay1jYXJvdXNlbCc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZm9ybS1hcHBvaW50bWVudC1kYXRlLXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC1hcHBvaW50bWVudC1kYXRlLXBpY2tlci5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRBcHBvaW50bWVudERhdGVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIG1lc3NhZ2VHcm91cDogc3RyaW5nO1xuICBASW5wdXQoKSBzdGFydERhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xuICBASW5wdXQoKSBlbmREYXRlOiBEYXRlO1xuICBASW5wdXQoKSB0aW1lc2xvdHM6IEFwcG9pbnRtZW50VHJhbnNmb3JtZXJTbG90W107XG4gIEBJbnB1dCgpIHNlbGVjdGVkVGltZXNsb3Q/OiBBcHBvaW50bWVudFRyYW5zZm9ybWVyU2xvdDtcbiAgQElucHV0KCkgbW9tZW50RmlsdGVyOiBUaW1lc2xvdE1vbWVudEVudW07XG4gIEBJbnB1dCgpIGluaXRpYWxTbGlkZSA9IDA7XG4gIEBJbnB1dCgpIHNsaWRlc1RvU2Nyb2xsOiBudW1iZXI7XG4gIEBJbnB1dCgpIHNsaWRlc1RvU2hvdzogbnVtYmVyO1xuICBASW5wdXQoKSB1cGRhdGVTbG90czogQXBwb2ludG1lbnRUcmFuc2Zvcm1lclNsb3RbXTtcbiAgQElucHV0KCkgc2hvd0xvYWRNb3JlOiBib29sZWFuO1xuICBASW5wdXQoKSBjb25zdW1lclR5cGU6IHN0cmluZztcbiAgQElucHV0KCkgZGlzYWJsZUxvYWRNb3JlOiBib29sZWFuO1xuICBASW5wdXQoKSBlbmFibGVBcHBvaW50bWVudHNVSTogYm9vbGVhbjtcbiAgQElucHV0KCkgYXBwb2ludG1lbnRQaWNrZXJUeXBlOiBBcHBvaW50bWVudFBpY2tlclR5cGVFbnVtO1xuICBASW5wdXQoKSBpc0RldmljZUxhbmRzY2FwZTogYm9vbGVhbjtcbiAgQElucHV0KCkgZGF0ZVBpY2tlckxhYmVsOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBhcHBvaW50bWVudFNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgbG9hZE1vcmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBzY3JvbGxUbyA9IG5ldyBFdmVudEVtaXR0ZXI8QXBwb2ludG1lbnRQaWNrZXJUeXBlRW51bT4oKTtcbiAgQFZpZXdDaGlsZCgnc2xpY2tNb2RhbCcpIHNsaWNrTW9kYWw6IFNsaWNrQ2Fyb3VzZWxDb21wb25lbnQ7XG5cbiAgYXBwb2ludG1lbnRzQXZhaWxhYmxlJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgY3VycmVudFNsb3RzOiBBcHBvaW50bWVudFRyYW5zZm9ybWVyU2xvdFtdO1xuXG4gIHJlUmVuZGVyID0gZmFsc2U7XG4gIG5vT2ZBcHBvaW50bWVudFNsb3RzUGVyUGFnZSA9IDE0O1xuICBhcHBvaW50bWVudE1vbWVudEVudW0gPSBUaW1lc2xvdE1vbWVudEVudW07XG4gIGRpc2FibGVQcmV2aW91cyA9IHRydWU7XG4gIGRpc2FibGVOZXh0ID0gZmFsc2U7XG4gIHN0YXJ0RGF0ZVRvRGlzYWJsZU5leHQ6IERhdGU7XG4gIGN1cnJlbnREYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcbiAgY29uc3VtZXJUeXBlRW51bSA9IEFwcG9pbnRtZW50UGlja2VyQ29uc3VtZXJUeXBlRW51bTtcbiAgc2xpZGVDb25maWcgPSB7XG4gICAgaW5maW5pdGU6IGZhbHNlLFxuICAgIGluaXRpYWxTbGlkZTogMCxcbiAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICBhcnJvd3M6IHRydWUsXG4gICAgbmV4dEFycm93OiAnPGRpdiBjbGFzcz1cImNhcmRzLXNsaWRlci1idXR0b24gYXJyb3cgYXJyb3ctLXJpZ2h0IHNsaWNrLWFycm93XCIgYXJpYS1kaXNhYmxlZD1cImZhbHNlXCI+PC9kaXY+JyxcbiAgICBwcmV2QXJyb3c6ICc8ZGl2IGNsYXNzPVwiY2FyZHMtc2xpZGVyLWJ1dHRvbiBhcnJvdyBhcnJvdy0tbGVmdCBzbGljay1hcnJvd1wiIGFyaWEtZGlzYWJsZWQ9XCJmYWxzZVwiPjwvZGl2PicsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgc2xpZGVzVG9TaG93OiAxLFxuICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiAxMDI0LFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA2LFxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogNixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDYwMCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiA0ODAsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcmVhZG9ubHkgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBjZHI6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cblxuICBzZWxlY3RJbnN0YWxsU2xvdERheShhcHBvaW50bWVudFNsb3Q6IEFwcG9pbnRtZW50VHJhbnNmb3JtZXJTbG90KTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgYXBwb2ludG1lbnRTbG90Lmhhc0F2YWlsYWJsZU1vbWVudHMoKSAmJlxuICAgICAgKHRoaXMubW9tZW50RmlsdGVyID8gYXBwb2ludG1lbnRTbG90Lmhhc0F2YWlsYWJsZU1vbWVudCh0aGlzLm1vbWVudEZpbHRlcikgOiB0cnVlKVxuICAgICkge1xuICAgICAgdGhpcy5zZWxlY3RlZFRpbWVzbG90ID0gYXBwb2ludG1lbnRTbG90O1xuICAgICAgdGhpcy5hcHBvaW50bWVudFNlbGVjdGVkLmVtaXQoYXBwb2ludG1lbnRTbG90KTtcbiAgICAgIHRoaXMuc2Nyb2xsVG8uZW1pdChBcHBvaW50bWVudFBpY2tlclR5cGVFbnVtLkJZX01PTUVOVCk7XG4gICAgfVxuICB9XG5cbiAgaXNEaXNhYmxlZChhcHBvaW50bWVudFNsb3Q6IEFwcG9pbnRtZW50VHJhbnNmb3JtZXJTbG90KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgICFhcHBvaW50bWVudFNsb3QuaGFzQXZhaWxhYmxlTW9tZW50cygpIHx8XG4gICAgICAodGhpcy5tb21lbnRGaWx0ZXIgPyAhYXBwb2ludG1lbnRTbG90Lmhhc0F2YWlsYWJsZU1vbWVudCh0aGlzLm1vbWVudEZpbHRlcikgOiBmYWxzZSlcbiAgICApO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zbGlkZUNvbmZpZy5zbGlkZXNUb1Njcm9sbCA9IHRoaXMuc2xpZGVzVG9TY3JvbGwgPyB0aGlzLnNsaWRlc1RvU2Nyb2xsIDogdGhpcy5zbGlkZUNvbmZpZy5zbGlkZXNUb1Njcm9sbDtcbiAgICB0aGlzLnNsaWRlQ29uZmlnLnNsaWRlc1RvU2hvdyA9IHRoaXMuc2xpZGVzVG9TaG93ID8gdGhpcy5zbGlkZXNUb1Nob3cgOiB0aGlzLnNsaWRlQ29uZmlnLnNsaWRlc1RvU2hvdztcbiAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWRTbGlkZXMoKTtcbiAgICBpZiAodGhpcy5lbmFibGVBcHBvaW50bWVudHNVSSkge1xuICAgICAgdGhpcy5jdXJyZW50U2xvdHMgPSB0aGlzLnVwZGF0ZVNsb3RzPy5sZW5ndGggPiAwID8gdGhpcy51cGRhdGVTbG90cyA6IHRoaXMudGltZXNsb3RzO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2Nyb2xsVG9TZWxlY3RlZFNsaWRlcygpIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZFRpbWVzbG90KSB7XG4gICAgICBjb25zdCBzZWxlY3RlZFNsb3RJbmRleCA9IHRoaXMudGltZXNsb3RzLmZpbmRJbmRleCgoc2xvdCkgPT4ge1xuICAgICAgICByZXR1cm4gc2xvdC5kYXRlLmdldFRpbWUoKSA9PT0gdGhpcy5zZWxlY3RlZFRpbWVzbG90Py5kYXRlLmdldFRpbWUoKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuY29uc3VtZXJUeXBlID09PSBBcHBvaW50bWVudFBpY2tlckNvbnN1bWVyVHlwZUVudW0uTkMpIHtcbiAgICAgICAgdGhpcy5zbGlkZUNvbmZpZy5pbml0aWFsU2xpZGUgPSB0aGlzLmZpbmRJbml0aWFsU2xpZGVGb3JOQyhzZWxlY3RlZFNsb3RJbmRleCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNsaWRlQ29uZmlnLmluaXRpYWxTbGlkZSA9IHNlbGVjdGVkU2xvdEluZGV4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZmluZEluaXRpYWxTbGlkZUZvck5DKHNsb3RJbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gZmxvb3Ioc2xvdEluZGV4IC8gdGhpcy5zbGlkZUNvbmZpZy5zbGlkZXNUb1Njcm9sbCkgKiB0aGlzLnNsaWRlQ29uZmlnLnNsaWRlc1RvU2Nyb2xsO1xuICB9XG5cbiAgc2hvdWxkUmVuZGVyTW9tZW50KCkge1xuICAgIHJldHVybiAhKFxuICAgICAgdGhpcy5jb25zdW1lclR5cGUgPT09IEFwcG9pbnRtZW50UGlja2VyQ29uc3VtZXJUeXBlRW51bS5OQyAmJlxuICAgICAgdGhpcy5hcHBvaW50bWVudFBpY2tlclR5cGUgPT09IEFwcG9pbnRtZW50UGlja2VyVHlwZUVudW0uQllfTU9NRU5UXG4gICAgKTtcbiAgfVxuXG4gIGdldFNsaWRlVXBBbmltYXRpb25TdHlsaW5nKGluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiAnLS1hbmltYXRpb24tZGVsYXk6ICcgKyBpbmRleDtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcz8uWydtb21lbnRGaWx0ZXInXSkge1xuICAgICAgaWYgKHRoaXMuY29uc3VtZXJUeXBlID09PSBBcHBvaW50bWVudFBpY2tlckNvbnN1bWVyVHlwZUVudW0uTkMgJiYgIXRoaXMuc2VsZWN0ZWRUaW1lc2xvdCkge1xuICAgICAgICB0aGlzLnNsaWRlQ29uZmlnLmluaXRpYWxTbGlkZSA9IDA7XG4gICAgICB9XG4gICAgICB0aGlzLnJlUmVuZGVyID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gKHRoaXMucmVSZW5kZXIgPSBmYWxzZSkpO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzPy5bJ3Nob3dMb2FkTW9yZSddKSB7XG4gICAgICB0aGlzLnNob3dMb2FkTW9yZSA9IGNoYW5nZXNbJ3Nob3dMb2FkTW9yZSddLmN1cnJlbnRWYWx1ZTtcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVVcGRhdGVUaW1lU2xvdHMoY2hhbmdlcyk7XG5cbiAgICBpZiAoY2hhbmdlcz8uWydpc0RldmljZUxhbmRzY2FwZSddICYmIHRoaXMuY29uc3VtZXJUeXBlID09PSBBcHBvaW50bWVudFBpY2tlckNvbnN1bWVyVHlwZUVudW0uTkMpIHtcbiAgICAgIHRoaXMuY29uZmlnU2xpZGVDb25maWcoKTtcbiAgICAgIHRoaXMucmVSZW5kZXIgPSB0cnVlO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMucmVSZW5kZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkU2xpZGVzKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVVwZGF0ZVRpbWVTbG90cyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXM/LlsndXBkYXRlU2xvdHMnXT8uY3VycmVudFZhbHVlKSB7XG4gICAgICBpZiAodGhpcy5lbmFibGVBcHBvaW50bWVudHNVSSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRTbG90cyA9IGNoYW5nZXNbJ3VwZGF0ZVNsb3RzJ10/LmN1cnJlbnRWYWx1ZTtcbiAgICAgICAgdGhpcy5kaXNhYmxlUHJldmlvdXMgPVxuICAgICAgICAgIHVuZGVmaW5lZCAhPT1cbiAgICAgICAgICB0aGlzLmN1cnJlbnRTbG90cy5maW5kKFxuICAgICAgICAgICAgKHRpbWVTbG90OiBBcHBvaW50bWVudFRyYW5zZm9ybWVyU2xvdCkgPT4gdGltZVNsb3QuZGF0ZS50b0RhdGVTdHJpbmcoKSA9PT0gdGhpcy5jdXJyZW50RGF0ZS50b0RhdGVTdHJpbmcoKVxuICAgICAgICAgICk7XG4gICAgICAgIHRoaXMuaGFuZGxlTmV4dEJ1dHRvbkRpc2FibGUoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYXBwb2ludG1lbnRzQXZhaWxhYmxlJCA9IFRpbWVzbG90VXRpbC5jYWxjdWxhdGVUaW1lU2xvdHNBdmFpbGFiaWxpdHkoY2hhbmdlc1sndXBkYXRlU2xvdHMnXT8uY3VycmVudFZhbHVlKTtcbiAgICAgIGlmIChUaW1lc2xvdFV0aWwuc2hvdWxkVXBkYXRlVGltZVNsb3RzKHRoaXMudXBkYXRlU2xvdHMsIHRoaXMudGltZXNsb3RzKSkge1xuICAgICAgICB0aGlzLnJlUmVuZGVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50aW1lc2xvdHMgPSB0aGlzLnRpbWVzbG90cy5jb25jYXQoY2hhbmdlc1sndXBkYXRlU2xvdHMnXS5jdXJyZW50VmFsdWUpO1xuICAgICAgICB0aGlzLnJlUmVuZGVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZUFwcG9pbnRtZW50c1VJKSB7XG4gICAgICAgICAgdGhpcy5zbGlja01vZGFsLnNsaWNrR29Ubyh0aGlzLnRpbWVzbG90cy5sZW5ndGggLSB0aGlzLnVwZGF0ZVNsb3RzLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNvbmZpZ1NsaWRlQ29uZmlnKCkge1xuICAgIGlmICh0aGlzLmlzRGV2aWNlTGFuZHNjYXBlKSB7XG4gICAgICB0aGlzLnNsaWRlQ29uZmlnLmFycm93cyA9IHRydWU7XG4gICAgICB0aGlzLnNsaWRlQ29uZmlnLnNsaWRlc1RvU2Nyb2xsID0gNDtcbiAgICAgIHRoaXMuc2xpZGVDb25maWcuc2xpZGVzVG9TaG93ID0gdGhpcy5zbGlkZXNUb1Nob3cgPyB0aGlzLnNsaWRlc1RvU2hvdyA6IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2xpZGVDb25maWcuYXJyb3dzID0gZmFsc2U7XG4gICAgICB0aGlzLnNsaWRlQ29uZmlnLnNsaWRlc1RvU2Nyb2xsID0gMjtcbiAgICAgIHRoaXMuc2xpZGVDb25maWcuc2xpZGVzVG9TaG93ID0gMjtcbiAgICB9XG4gIH1cblxuICBsb2FkTW9yZVNsb3RzKCkge1xuICAgIHRoaXMubG9hZE1vcmUuZW1pdCgpO1xuICAgIGlmICh0aGlzLmVuYWJsZUFwcG9pbnRtZW50c1VJKSB7XG4gICAgICB0aGlzLmFwcG9pbnRtZW50U2VsZWN0ZWQuZW1pdCh1bmRlZmluZWQpO1xuICAgICAgdGhpcy5kaXNhYmxlUHJldmlvdXMgPSBmYWxzZTtcbiAgICAgIHRoaXMuaGFuZGxlTmV4dEJ1dHRvbkRpc2FibGUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZU5leHRCdXR0b25EaXNhYmxlKCkge1xuICAgIHRoaXMuZGlzYWJsZU5leHQgPSB0aGlzLnN0YXJ0RGF0ZSA+PSB0aGlzLmVuZERhdGU7XG4gIH1cblxuICBsb2FkUHJldmlvdXNTbG90cygpIHtcbiAgICB0aGlzLmxvYWRNb3JlLmVtaXQodHJ1ZSk7XG4gICAgdGhpcy5kaXNhYmxlTmV4dCA9IGZhbHNlO1xuICAgIHRoaXMuYXBwb2ludG1lbnRTZWxlY3RlZC5lbWl0KHVuZGVmaW5lZCk7XG4gIH1cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCIhZW5hYmxlQXBwb2ludG1lbnRzVUlcIj5cbiAgPGg2IGNsYXNzPVwidGV4dC1mbG93IHRleHQtZmxvdy0taDMgc2VjdGlvbl9fdGl0bGUgdGV4dC1hbGlnbi0tbGVmdFwiPnt7IGRhdGVQaWNrZXJMYWJlbCB8IHRyYW5zbGF0ZSB9fTwvaDY+XG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCIhKGFwcG9pbnRtZW50c0F2YWlsYWJsZSQgfCBhc3luYylcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJub0FwcG9pbnRtZW50U2xvdHNcIj48L25nLWNvbnRhaW5lcj5cbiAgPG5neC1zbGljay1jYXJvdXNlbFxuICAgICpuZ0lmPVwiKGFwcG9pbnRtZW50c0F2YWlsYWJsZSQgfCBhc3luYylcIlxuICAgIGNsYXNzPVwibGFiZWwtbW9kaWZpZXItYm94IHNsaWNrLXNsaWRlciBjYXJkLWRhdGUgY2FyZC1kYXRlLXdpdGgtdmFsdWVcIlxuICAgICNzbGlja01vZGFsPVwic2xpY2stY2Fyb3VzZWxcIlxuICAgIFtjb25maWddPVwic2xpZGVDb25maWdcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXJlUmVuZGVyXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBhcHBvaW50bWVudFNsb3Qgb2YgdGltZXNsb3RzOyBsZXQgaSA9IGluZGV4XCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBuZ3hTbGlja0l0ZW1cbiAgICAgICAgICBjbGFzcz1cImxhYmVsLW1vZGlmaWVyLXNsb3Qgc2xpY2stc2xpZGUgYW5pbWF0aW9uLXNob3ctc2xpZGUtdXBcIlxuICAgICAgICAgIFthdHRyLnN0eWxlXT1cImNvbnN1bWVyVHlwZSA9PT0gY29uc3VtZXJUeXBlRW51bS5OQyA/IGdldFNsaWRlVXBBbmltYXRpb25TdHlsaW5nKDApIDogZ2V0U2xpZGVVcEFuaW1hdGlvblN0eWxpbmcoaSlcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICBuYW1lPVwiZGF5XCJcbiAgICAgICAgICAgIHZhbHVlPVwie3sgYXBwb2ludG1lbnRTbG90LmRhdGUgfCBkYXRlOidkZG1tJyB9fVwiXG4gICAgICAgICAgICBpZD1cImRheS17eyBpIH19XCJcbiAgICAgICAgICAgIGNsYXNzPVwibGFiZWwtbW9kaWZpZXItcmFkaW9cIlxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImlzRGlzYWJsZWQoYXBwb2ludG1lbnRTbG90KVwiXG4gICAgICAgICAgICBbY2hlY2tlZF09XCJhcHBvaW50bWVudFNsb3QgPT09IHNlbGVjdGVkVGltZXNsb3RcIiAvPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIFthdHRyLmRhdGEtY3ldPVwiJ2FwcG9pbnRtZW50LWRhdGUtcGlja2VyLScraVwiXG4gICAgICAgICAgICBjbGFzcz1cImxhYmVsLW1vZGlmaWVyLS1hcHBlbmQgbGFiZWwtbW9kaWZpZXItLWNvbnRhaW5lciBjdXJzb3ItLXBvaW50ZXJcIlxuICAgICAgICAgICAgW2NsYXNzLmRpc2FibGVkXT1cImlzRGlzYWJsZWQoYXBwb2ludG1lbnRTbG90KVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsLW1vZGlmaWVyLS1ib2R5XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbC1tb2RpZmllci0tYm9keS0taW5uZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICBmb3I9XCJkYXkte3sgaSB9fVwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImxhYmVsLW1vZGlmaWVyLXJhZGlvX19sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0SW5zdGFsbFNsb3REYXkoYXBwb2ludG1lbnRTbG90KVwiPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtZmxvdyB0ZXh0LWZsb3ctLWxhYmVsIGxhYmVsLW1vZGlmaWVyLWNvbnRlbnRfX2hlYWRlclwiPlxuICAgICAgICAgICAgICAgICAge3sgYXBwb2ludG1lbnRTbG90LmRhdGUgfCBkYXRlOidFRUVFJyB9fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWZsb3cgdGV4dC1mbG93LS1ib2R5IGxhYmVsLW1vZGlmaWVyLWNvbnRlbnRfX2JvZHlcIj5cbiAgICAgICAgICAgICAgICAgIHt7IGFwcG9pbnRtZW50U2xvdC5kYXRlIHwgZGF0ZTonZGQnIH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtZmxvdyB0ZXh0LWZsb3ctLWxhYmVsIGxhYmVsLW1vZGlmaWVyLWNvbnRlbnRfX3RpbWluZ1wiICpuZ0lmPVwic2hvdWxkUmVuZGVyTW9tZW50KClcIj5cbiAgICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaWNvbiBpY29uLXN1bnJpc2VcIlxuICAgICAgICAgICAgICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwiIWFwcG9pbnRtZW50U2xvdC5oYXNBdmFpbGFibGVNb21lbnQoYXBwb2ludG1lbnRNb21lbnRFbnVtLk1PUk5JTkcpXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpY29uIGljb24tc3VuXCJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmRpc2FibGVkXT1cIiFhcHBvaW50bWVudFNsb3QuaGFzQXZhaWxhYmxlTW9tZW50KGFwcG9pbnRtZW50TW9tZW50RW51bS5MVU5DSClcIj48L2k+XG4gICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImljb24gaWNvbi1zdW4taGFsZi1zZW1pZmlsbGVkXCJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmRpc2FibGVkXT1cIiFhcHBvaW50bWVudFNsb3QuaGFzQXZhaWxhYmxlTW9tZW50KGFwcG9pbnRtZW50TW9tZW50RW51bS5BRlRFUk5PT04pXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpY29uIGljb24tbW9vblwiXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCIhYXBwb2ludG1lbnRTbG90Lmhhc0F2YWlsYWJsZU1vbWVudChhcHBvaW50bWVudE1vbWVudEVudW0uRVZFTklORylcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtZmxvdyB0ZXh0LWZsb3ctLWxhYmVsIGxhYmVsLW1vZGlmaWVyLWNvbnRlbnRfX2Zvb3RlclwiPlxuICAgICAgICAgICAgICAgICAge3sgYXBwb2ludG1lbnRTbG90LmRhdGUgfCBkYXRlOidNTU1NIHl5eXknIH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPGZvcm0gKG5nU3VibWl0KT1cImxvYWRNb3JlU2xvdHMoKVwiICpuZ0lmPVwic2hvd0xvYWRNb3JlICYmICFyZVJlbmRlciAmJiAoYXBwb2ludG1lbnRzQXZhaWxhYmxlJCB8IGFzeW5jKVwiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXNlY29uZGFyeSBtdC01MFwiXG4gICAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlTG9hZE1vcmVcIlxuICAgICAgICBbaW5uZXJIVE1MXT1cIiduZy5zYWxlcy1jaGVja291dC5hcHBvaW50bWVudC5kYXRlLWxvYWRtb3JlLmxibCcgfCB0cmFuc2xhdGVcIj48L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gIDwvbmd4LXNsaWNrLWNhcm91c2VsPlxuPC9uZy1jb250YWluZXI+XG5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJlbmFibGVBcHBvaW50bWVudHNVSVwiPlxuICA8ZGl2XG4gICAgY2xhc3M9XCJkaXNwbGF5LS1mbGV4IGp1c3RpZnktY29udGVudC0tYmV0d2VlbiBuZy1zdGFyLWluc2VydGVkIGFsaWduLWl0ZW1zLS1jZW50ZXItLW1kIGZsZXgtZGlyZWN0aW9uLS1yb3ctLW1kIGZsZXgtZGlyZWN0aW9uLS1jb2x1bW4gbXQtLW1cIj5cbiAgICA8aDYgY2xhc3M9XCJ0ZXh0LWZsb3cgdGV4dC1mbG93LS1oMyBzZWN0aW9uX190aXRsZSB0ZXh0LWFsaWduLS1sZWZ0XCI+e3sgZGF0ZVBpY2tlckxhYmVsIHwgdHJhbnNsYXRlIH19PC9oNj5cbiAgICA8ZGl2IGNsYXNzPVwiZGlzcGxheS0tZmxleCBqdXN0aWZ5LWNvbnRlbnQtLWJldHdlZW4ganVzdGlmeS1jb250ZW50LS1lbmQtLW1kIG1iLS1tIG1iLS1uLS1tZFwiPlxuICAgICAgPGFcbiAgICAgICAgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiXG4gICAgICAgIChjbGljayk9XCJsb2FkUHJldmlvdXNTbG90cygpXCJcbiAgICAgICAgY2xhc3M9XCJsaW5rIGxpbmstLXdpdGgtaWNvbiBtci0tbFwiXG4gICAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAgICdkaXNhYmxlZCcgOiBkaXNhYmxlUHJldmlvdXNcbiAgICAgICAgICB9XCJcbiAgICAgICAgPjxpIGNsYXNzPVwiaWNvbiBpY29uLWNoZXZyb24tbGVmdFwiPjwvaVxuICAgICAgICA+PHNwYW4gY2xhc3M9XCJ0ZXh0LWZsb3cgdGV4dC1mbG93LS1idXR0b25cIlxuICAgICAgICAgID57eyduZy5zYWxlcy1jaGVja291dC5hcHBvaW50bWVudC5wcmV2aW91cy5idXR0b24nIHwgdHJhbnNsYXRlfX08L3NwYW5cbiAgICAgICAgPjwvYVxuICAgICAgPlxuICAgICAgPGFcbiAgICAgICAgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiXG4gICAgICAgIChjbGljayk9XCJsb2FkTW9yZVNsb3RzKClcIlxuICAgICAgICBjbGFzcz1cImxpbmsgbGluay0td2l0aC1pY29uXCJcbiAgICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICAgJ2Rpc2FibGVkJyA6IGRpc2FibGVOZXh0XG4gICAgICAgICAgfVwiXG4gICAgICAgID48aSBjbGFzcz1cImljb24gaWNvbi1jaGV2cm9uLXJpZ2h0IGljb24tLWFmdGVyXCI+PC9pXG4gICAgICAgID48c3BhbiBjbGFzcz1cInRleHQtZmxvdyB0ZXh0LWZsb3ctLWJ1dHRvblwiPnt7J25nLnNhbGVzLWNoZWNrb3V0LmFwcG9pbnRtZW50Lm5leHQuYnV0dG9uJyB8IHRyYW5zbGF0ZX19PC9zcGFuPjwvYVxuICAgICAgPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdj5cbiAgICA8bmctY29udGFpbmVyXG4gICAgICAqbmdJZj1cIiEoYXBwb2ludG1lbnRzQXZhaWxhYmxlJCB8IGFzeW5jKVwiXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJub0FwcG9pbnRtZW50U2xvdHNcIlxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsnZGlzYWJsZUxvYWRNb3JlJzogZGlzYWJsZU5leHR9XCI+PC9uZy1jb250YWluZXI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFyZVJlbmRlciAmJiAoYXBwb2ludG1lbnRzQXZhaWxhYmxlJCB8IGFzeW5jKVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImhpZGUtdW50aWwtbWQgY29sLTEyXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cImRpc3BsYXktLWZsZXhcIlxuICAgICAgICAgIFthdHRyLnN0eWxlXT1cImNvbnN1bWVyVHlwZSA9PT0gY29uc3VtZXJUeXBlRW51bS5OQyA/IGdldFNsaWRlVXBBbmltYXRpb25TdHlsaW5nKDApIDogZ2V0U2xpZGVVcEFuaW1hdGlvblN0eWxpbmcoMClcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cInNlbGVjdC10aWxlLS1ncm91cCBkaXNwbGF5LS1ncmlkIGdyaWQtdGVtcGxhdGUtY29sdW1uLS0zIGdyaWQtdGVtcGxhdGUtY29sdW1uLS03LS1tZCBnYXAtLW0gbWItLW0gY29sLTEyXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBhcHBvaW50bWVudFNsb3Qgb2YgY3VycmVudFNsb3RzIHwgc2xpY2U6IDA6KG5vT2ZBcHBvaW50bWVudFNsb3RzUGVyUGFnZS8yKTsgbGV0IGkgPSBpbmRleFwiPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwic2xpZGVzXCJcbiAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwiXG4gICAgICAgICAgICAgICAge2FwcG9pbnRtZW50U2xvdDogYXBwb2ludG1lbnRTbG90LCBpOiBpfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJkaXNwbGF5LS1mbGV4XCJcbiAgICAgICAgICBbYXR0ci5zdHlsZV09XCJjb25zdW1lclR5cGUgPT09IGNvbnN1bWVyVHlwZUVudW0uTkMgPyBnZXRTbGlkZVVwQW5pbWF0aW9uU3R5bGluZygwKSA6IGdldFNsaWRlVXBBbmltYXRpb25TdHlsaW5nKDEpXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJzZWxlY3QtdGlsZS0tZ3JvdXAgZGlzcGxheS0tZ3JpZCBncmlkLXRlbXBsYXRlLWNvbHVtbi0tMyBncmlkLXRlbXBsYXRlLWNvbHVtbi0tNy0tbWQgZ2FwLS1tIG1iLS1tIGNvbC0xMlwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgYXBwb2ludG1lbnRTbG90IG9mIGN1cnJlbnRTbG90cyB8IHNsaWNlOiAobm9PZkFwcG9pbnRtZW50U2xvdHNQZXJQYWdlLzIpOm5vT2ZBcHBvaW50bWVudFNsb3RzUGVyUGFnZTsgbGV0IGkgPSBpbmRleFwiPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwic2xpZGVzXCJcbiAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwiXG4gICAgICAgICAgICAgICAge2FwcG9pbnRtZW50U2xvdDogYXBwb2ludG1lbnRTbG90LCBpOiAoaSsobm9PZkFwcG9pbnRtZW50U2xvdHNQZXJQYWdlLzIpKX1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImhpZGUtZnJvbS1tZFwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJkaXNwbGF5LS1ncmlkXCJcbiAgICAgICAgICBbYXR0ci5zdHlsZV09XCJjb25zdW1lclR5cGUgPT09IGNvbnN1bWVyVHlwZUVudW0uTkMgPyBnZXRTbGlkZVVwQW5pbWF0aW9uU3R5bGluZygwKSA6IGdldFNsaWRlVXBBbmltYXRpb25TdHlsaW5nKDApXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJzZWxlY3QtdGlsZS0tZ3JvdXAgZGlzcGxheS0tZ3JpZCBncmlkLXRlbXBsYXRlLWNvbHVtbi0tMyBncmlkLXRlbXBsYXRlLWNvbHVtbi0tNy0tbWQgZ2FwLS14eHMgbWItLXh4c1wiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgYXBwb2ludG1lbnRTbG90IG9mIGN1cnJlbnRTbG90czsgbGV0IGkgPSBpbmRleFwiPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwic2xpZGVzXCJcbiAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwiXG4gICAgICAgICAgICAgIHthcHBvaW50bWVudFNsb3Q6IGFwcG9pbnRtZW50U2xvdCwgaTogaStub09mQXBwb2ludG1lbnRTbG90c1BlclBhZ2V9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG48L25nLWNvbnRhaW5lcj5cbjxuZy10ZW1wbGF0ZSAjc2xpZGVzIGxldC1hcHBvaW50bWVudFNsb3Q9XCJhcHBvaW50bWVudFNsb3RcIiBsZXQtaT1cImlcIj5cbiAgPGRpdiBjbGFzcz1cImFuaW1hdGlvbi1zaG93LXNsaWRlLXVwXCI+XG4gICAgPGxhYmVsXG4gICAgICBbYXR0ci5kYXRhLWN5XT1cIidhcHBvaW50bWVudC1kYXRlLScraVwiXG4gICAgICAoY2xpY2spPVwic2VsZWN0SW5zdGFsbFNsb3REYXkoYXBwb2ludG1lbnRTbG90KVwiXG4gICAgICBmb3I9XCJkYXkte3sgaSB9fVwiXG4gICAgICBjbGFzcz1cInNlbGVjdC10aWxlIHBvc2l0aW9uLS1yZWxhdGl2ZSBkaXNwbGF5LS1mbGV4IGFsaWduLWl0ZW1zLS1zdGFydCBnYXAtLW0gZ2FwLS1sLS1zbSBjb2xvci10ZXh0IHAtLW0gcC0teHMtLXNtIHAtLWwtLWxnIG0tLW4gYmFja2dyb3VuZC13aGl0ZVwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgIG5hbWU9XCJkYXlcIlxuICAgICAgICB2YWx1ZT1cInt7IGFwcG9pbnRtZW50U2xvdC5kYXRlIHwgZGF0ZTonZGRtbScgfX1cIlxuICAgICAgICBpZD1cImRheS17eyBpIH19XCJcbiAgICAgICAgY2xhc3M9XCJzZWxlY3QtdGlsZV9faW5wdXQgZGlzcGxheS0tZmxleCBhbGlnbi1pdGVtcy0tY2VudGVyIGp1c3RpZnktY29udGVudC0tY2VudGVyIGZvbnQtLWJvZHktcmVndWxhciBoaWRkZW4taW5wdXQtYm94IGN1cnNvci0tcG9pbnRlclwiXG4gICAgICAgIFtjaGVja2VkXT1cImFwcG9pbnRtZW50U2xvdCA9PT0gc2VsZWN0ZWRUaW1lc2xvdFwiXG4gICAgICAgIFtkaXNhYmxlZF09XCJpc0Rpc2FibGVkKGFwcG9pbnRtZW50U2xvdClcIiAvPlxuICAgICAgPGRpdiBjbGFzcz1cInNlbGVjdC10aWxlX19jb250ZW50IGRpc3BsYXktLWZsZXggZmxleC1kaXJlY3Rpb24tLWNvbHVtbiBhbGlnbi1zZWxmLS1zdHJldGNoIGZsZXgtZ3Jvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VsZWN0LXRpbGVfX2NvbnRlbnQtLWlubmVyIGRpc3BsYXktLWZsZXggZ2FwLS14bVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWxlY3QtdGlsZV9fY29udGVudF90ZXh0IGRpc3BsYXktLWZsZXggZmxleC1kaXJlY3Rpb24tLWNvbHVtbiBmbGV4LWdyb3cgYWxpZ24taXRlbXMtLWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnQtLWNhcHRpb24gbWItLXh4c1wiPnt7IGFwcG9pbnRtZW50U2xvdC5kYXRlIHwgZGF0ZTonRUVFRScgfCB0aXRsZWNhc2V9fTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtZmxvdyB0ZXh0LWZsb3ctLWg1IGhpZGUtdW50aWwtbWRcIj57eyBhcHBvaW50bWVudFNsb3QuZGF0ZSB8IGRhdGU6J2RkL01NJyB9fTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtZmxvdyB0ZXh0LWZsb3ctLWg2IGhpZGUtZnJvbS1tZFwiPnt7IGFwcG9pbnRtZW50U2xvdC5kYXRlIHwgZGF0ZTonZGQvTU0nIH19PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9sYWJlbD5cbiAgPC9kaXY+XG48L25nLXRlbXBsYXRlPlxuXG48bmctdGVtcGxhdGUgI25vQXBwb2ludG1lbnRTbG90cyBsZXQtZGlzYWJsZUxvYWRNb3JlPVwiZGlzYWJsZUxvYWRNb3JlXCI+XG4gIDxhcHAtbm8tYXZhaWxhYmxlLWFwcG9pbnRtZW50LWRhdGVcbiAgICAobG9hZE1vcmVTbG90cyk9XCJsb2FkTW9yZVNsb3RzKClcIlxuICAgIFttZXNzYWdlR3JvdXBdPVwibWVzc2FnZUdyb3VwXCJcbiAgICBbZGlzYWJsZUxvYWRNb3JlXT1cImRpc2FibGVMb2FkTW9yZVwiPjwvYXBwLW5vLWF2YWlsYWJsZS1hcHBvaW50bWVudC1kYXRlPlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==