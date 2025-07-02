(self["webpackChunkproduct_journey_mfe"] = self["webpackChunkproduct_journey_mfe"] || []).push([["libs_install_product-journey_appointments_feat-overview_src_index_ts"],{

/***/ 90189:
/*!******************************************************************************!*\
  !*** ./libs/install/product-journey/appointments/feat-overview/src/index.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppointmentsOverviewComponent: () => (/* reexport safe */ _lib_appointments_overview_component__WEBPACK_IMPORTED_MODULE_0__.AppointmentsOverviewComponent)
/* harmony export */ });
/* harmony import */ var _lib_appointments_overview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/appointments-overview.component */ 70898);


/***/ }),

/***/ 7596:
/*!********************************************************************************************************************************!*\
  !*** ./libs/install/product-journey/appointments/feat-overview/src/lib/appointment-selector/appointment-selector.component.ts ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppointmentSelectorComponent: () => (/* binding */ AppointmentSelectorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @product-journey/appointments/data-access */ 34098);
/* harmony import */ var _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/component */ 43956);
/* harmony import */ var _product_journey_appointments_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @product-journey/appointments/ui */ 68248);
/* harmony import */ var _product_journey_appointments_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_product_journey_appointments_ui__WEBPACK_IMPORTED_MODULE_4__);









const _c0 = (a0, a1) => ({
  "line-selector--title mt-0 mb-0": a0,
  "line-selector-telenet--title": a1
});
function AppointmentSelectorComponent_div_0_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).ngrxLet;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c0, ctx_r7.isBaseCustomer, !ctx_r7.isBaseCustomer));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate5"](" ", vm_r3 == null ? null : vm_r3.selectedAppointment == null ? null : vm_r3.selectedAppointment.address == null ? null : vm_r3.selectedAppointment.address.street, " ", vm_r3 == null ? null : vm_r3.selectedAppointment == null ? null : vm_r3.selectedAppointment.address == null ? null : vm_r3.selectedAppointment.address.houseNumber, "", (vm_r3 == null ? null : vm_r3.selectedAppointment == null ? null : vm_r3.selectedAppointment.address == null ? null : vm_r3.selectedAppointment.address.boxNumber) ? "/" + (vm_r3 == null ? null : vm_r3.selectedAppointment == null ? null : vm_r3.selectedAppointment.address == null ? null : vm_r3.selectedAppointment.address.boxNumber) : "", ", ", vm_r3 == null ? null : vm_r3.selectedAppointment == null ? null : vm_r3.selectedAppointment.address == null ? null : vm_r3.selectedAppointment.address.zip, " ", vm_r3 == null ? null : vm_r3.selectedAppointment == null ? null : vm_r3.selectedAppointment.address == null ? null : vm_r3.selectedAppointment.address.city, " ");
  }
}
const _c1 = (a0, a1) => ({
  "line-selector--open text-font-family--t5": a0,
  "line-selector-telenet--open": a1
});
function AppointmentSelectorComponent_div_0_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppointmentSelectorComponent_div_0_div_1_span_3_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.open());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c1, ctx_r8.isBaseCustomer, !ctx_r8.isBaseCustomer));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "ng.appointments.lbl.change-appointment"));
  }
}
const _c2 = a0 => ({
  "justify-content--normal--md justify-content--between pt--m--md": a0
});
function AppointmentSelectorComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppointmentSelectorComponent_div_0_div_1_div_1_Template, 2, 9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppointmentSelectorComponent_div_0_div_1_span_3_Template, 3, 7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const vm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngrxLet;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c2, ctx_r4.isBaseCustomer));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", vm_r3 == null ? null : vm_r3.selectedAppointment == null ? null : vm_r3.selectedAppointment.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((vm_r3 == null ? null : vm_r3.openAppointments == null ? null : vm_r3.openAppointments.length) || 0) > 1 || ((vm_r3 == null ? null : vm_r3.completedAppointments == null ? null : vm_r3.completedAppointments.length) || 0) > 1 || ((vm_r3 == null ? null : vm_r3.openAppointments == null ? null : vm_r3.openAppointments.length) || 0) + ((vm_r3 == null ? null : vm_r3.completedAppointments == null ? null : vm_r3.completedAppointments.length) || 0) > 1);
  }
}
const _c3 = (a0, a1) => ({
  "icon-chevron-up": a0,
  "icon-chevron-down": a1
});
function AppointmentSelectorComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppointmentSelectorComponent_div_0_div_5_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.showHistory = !ctx_r13.showHistory);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "appointment-show-history");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "ng.appointments.lbl.history"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c3, ctx_r5.showHistory, !ctx_r5.showHistory));
  }
}
const _c4 = (a0, a1) => ({
  appointments: a0,
  selectedAppointment: a1,
  isAppointmentClosed: true
});
function AppointmentSelectorComponent_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngrxLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c4, vm_r3 == null ? null : vm_r3.completedAppointments, vm_r3 == null ? null : vm_r3.selectedAppointment));
  }
}
const _c5 = a0 => ({
  "line-selector--header": a0
});
const _c6 = (a0, a1) => ({
  appointments: a0,
  selectedAppointment: a1
});
function AppointmentSelectorComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppointmentSelectorComponent_div_0_div_1_Template, 4, 5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tg-slide-menu", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeMenu", function AppointmentSelectorComponent_div_0_Template_tg_slide_menu_closeMenu_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r16.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppointmentSelectorComponent_div_0_div_5_Template, 5, 8, "div", 6)(6, AppointmentSelectorComponent_div_0_div_6_Template, 2, 5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const vm_r3 = ctx.ngrxLet;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c5, ctx_r0.isBaseCustomer));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", vm_r3 == null ? null : vm_r3.selectedAppointment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showMenu", ctx_r0.showMenu)("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 8, "ng.appointments.lbl.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](12, _c6, vm_r3 == null ? null : vm_r3.openAppointments, vm_r3 == null ? null : vm_r3.selectedAppointment));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (vm_r3 == null ? null : vm_r3.completedAppointments == null ? null : vm_r3.completedAppointments.length) && (vm_r3 == null ? null : vm_r3.openAppointments == null ? null : vm_r3.openAppointments.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showHistory || !(vm_r3 == null ? null : vm_r3.openAppointments == null ? null : vm_r3.openAppointments.length) && (vm_r3 == null ? null : vm_r3.completedAppointments == null ? null : vm_r3.completedAppointments.length));
  }
}
const _c7 = a0 => ({
  appointmentDate: a0
});
function AppointmentSelectorComponent_ng_template_1_li_1_div_5_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
  }
  if (rf & 2) {
    const appointment_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (appointment_r22 == null ? null : appointment_r22.getDisplayStatus) === ctx_r27.STATUS_NEW ? "status-indicator--neutral" : "status-indicator--warning")("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, "ng.appointments.lbl.appointment-status-with-date-" + (appointment_r22 == null ? null : appointment_r22.getDisplayStatus)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 8, appointment_r22 == null ? null : appointment_r22.appointmentDate, "dd/MM/yyyy"))), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "appointment-selector-status");
  }
}
function AppointmentSelectorComponent_ng_template_1_li_1_div_5_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
  }
  if (rf & 2) {
    const appointment_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (appointment_r22 == null ? null : appointment_r22.getDisplayStatus) === ctx_r28.STATUS_COMPLETED ? "status-indicator--positive" : "status-indicator--negative")("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, "ng.appointments.lbl.appointment-status-with-date-" + (appointment_r22 == null ? null : appointment_r22.getDisplayStatus)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 8, appointment_r22 == null ? null : appointment_r22.appointmentDate, "dd/MM/yyyy"))), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "appointment-side-nav-date");
  }
}
function AppointmentSelectorComponent_ng_template_1_li_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25)(1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppointmentSelectorComponent_ng_template_1_li_1_div_5_span_3_Template, 4, 13, "span", 27)(4, AppointmentSelectorComponent_ng_template_1_li_1_div_5_span_4_Template, 4, 13, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const appointment_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate5"](" ", appointment_r22 == null ? null : appointment_r22.address == null ? null : appointment_r22.address.street, " ", appointment_r22 == null ? null : appointment_r22.address == null ? null : appointment_r22.address.houseNumber, "", (appointment_r22 == null ? null : appointment_r22.address == null ? null : appointment_r22.address.boxNumber) ? "/" + (appointment_r22 == null ? null : appointment_r22.address == null ? null : appointment_r22.address.boxNumber) : "", ", ", appointment_r22 == null ? null : appointment_r22.address == null ? null : appointment_r22.address.zip, " ", appointment_r22 == null ? null : appointment_r22.address == null ? null : appointment_r22.address.city, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", appointment_r22 == null ? null : appointment_r22.isUpcomingAppointment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(appointment_r22 == null ? null : appointment_r22.isUpcomingAppointment));
  }
}
function AppointmentSelectorComponent_ng_template_1_li_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
const _c8 = a0 => ({
  "border-style--b--solid": a0
});
function AppointmentSelectorComponent_ng_template_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppointmentSelectorComponent_ng_template_1_li_1_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);
      const appointment_r22 = restoredCtx.$implicit;
      const isAppointmentClosed_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().isAppointmentClosed;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r32.selectAppointment(appointment_r22, isAppointmentClosed_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19)(2, "div", 20)(3, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppointmentSelectorComponent_ng_template_1_li_1_div_5_Template, 5, 7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppointmentSelectorComponent_ng_template_1_li_1_div_6_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const appointment_r22 = ctx.$implicit;
    const i_r23 = ctx.index;
    const last_r24 = ctx.last;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const appointments_r18 = ctx_r35.appointments;
    const selectedAppointment_r19 = ctx_r35.selectedAppointment;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "appointment-selector-option-" + i_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c8, !last_r24 || (appointments_r18 == null ? null : appointments_r18.completedAppointments == null ? null : appointments_r18.completedAppointments.length)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", appointment_r22 == null ? null : appointment_r22.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (appointment_r22 == null ? null : appointment_r22.appointmentId) === (selectedAppointment_r19 == null ? null : selectedAppointment_r19.appointmentId));
  }
}
function AppointmentSelectorComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppointmentSelectorComponent_ng_template_1_li_1_Template, 7, 6, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const appointments_r18 = ctx.appointments;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", appointments_r18);
  }
}
const _c9 = (a0, a1, a2) => ({
  openAppointments: a0,
  completedAppointments: a1,
  selectedAppointment: a2
});
class AppointmentSelectorComponent {
  appointmentFacade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_1__.AppointmentFacade);
  openAppointments$ = this.appointmentFacade.openAppointments$;
  selectedAppointment$ = this.appointmentFacade.selectedAppointment$;
  completedAppointments$ = this.appointmentFacade.completedAppointments$;
  STATUS_NEW = _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_1__.AppointmentStatusEnum.NEW;
  STATUS_COMPLETED = _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_1__.AppointmentStatusEnum.COMPLETED;
  isBaseCustomer;
  showMenu = false;
  showHistory = false;
  close(isAppointmentClosed) {
    this.showMenu = false;
    this.showHistory = !!isAppointmentClosed;
  }
  open() {
    this.showMenu = true;
  }
  selectAppointment(appointment, isAppointmentClosed) {
    this.appointmentFacade.setSelectAppointment(appointment);
    this.close(isAppointmentClosed);
  }
  static ɵfac = function AppointmentSelectorComponent_Factory(t) {
    return new (t || AppointmentSelectorComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppointmentSelectorComponent,
    selectors: [["tg-appointment-selector"]],
    inputs: {
      isBaseCustomer: "isBaseCustomer"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 5,
    consts: [[3, "ngClass", 4, "ngrxLet"], ["appointmentsList", ""], [3, "ngClass"], ["class", "display--flex align-items--center pb--xl--md", 3, "ngClass", 4, "ngIf"], [3, "showMenu", "title", "closeMenu"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "mx--xs px--m display--flex justify-content--between cursor--pointer pt--xl border-style--t--solid border-width--t--r border--t--r border-color--all--light-grey", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "display--flex", "align-items--center", "pb--xl--md", 3, "ngClass"], ["data-cy", "selected-appointment-address", "class", "mr--m", 3, "ngClass", 4, "ngIf"], ["class", "cursor--pointer", "tabindex", "-1", "data-cy", "change-appointment", 3, "ngClass", "click", 4, "ngIf"], ["data-cy", "selected-appointment-address", 1, "mr--m", 3, "ngClass"], ["tabindex", "-1", "data-cy", "change-appointment", 1, "cursor--pointer", 3, "ngClass", "click"], [1, "mx--xs", "px--m", "display--flex", "justify-content--between", "cursor--pointer", "pt--xl", "border-style--t--solid", "border-width--t--r", "border--t--r", "border-color--all--light-grey", 3, "click"], [1, "text-flow", "text-flow--h5"], [1, "icon", "icon-md", 3, "ngClass"], ["data-cy", "appointments-list"], ["class", "px--xs", 3, "click", 4, "ngFor", "ngForOf"], [1, "px--xs", 3, "click"], ["tabindex", "0", 1, "px--s", "border-width--b--r", "border--b--r", "border-color--all--light-grey", "cursor--pointer", "display--flex", "justify-content--between", "width--full", "align-items--center", "appointment-list", 3, "ngClass"], [1, "py--l", "align-items--center", "display--flex", "overflow--hidden", "position--relative"], [1, "mr--xs"], [1, "icon-calendar", "icon", "icon-md"], ["class", "overflow--hidden", 4, "ngIf"], ["class", "px--xs", 4, "ngIf"], [1, "overflow--hidden"], [1, "font--body-regular", "break-word"], ["class", "status-indicator", 3, "ngClass", "innerHTML", 4, "ngIf"], ["class", "status-indicator", 3, "ngClass", "innerHtml", 4, "ngIf"], [1, "status-indicator", 3, "ngClass", "innerHTML"], [1, "status-indicator", 3, "ngClass", "innerHtml"], [1, "px--xs"], [1, "ml--xs", "color-text-t-black-b-white", "background-brand-primary", "color-te", "icon", "icon-sm", "icon-tick", "appointment-selected", "text-weight--xxs", "color-mid-grey"]],
    template: function AppointmentSelectorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppointmentSelectorComponent_div_0_Template, 7, 15, "div", 0)(1, AppointmentSelectorComponent_ng_template_1_Template, 2, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngrxLet", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](1, _c9, ctx.openAppointments$, ctx.completedAppointments$, ctx.selectedAppointment$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.LowerCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe, _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_1__.AppointmentNgrxModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe, _ngrx_component__WEBPACK_IMPORTED_MODULE_5__.LetDirective, _product_journey_appointments_ui__WEBPACK_IMPORTED_MODULE_4__.SlideMenuComponent],
    styles: [".appointment-selected[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.appointment-list[_ngcontent-%COMP%] {\n  transition: background-color 0.1s ease;\n}\n.appointment-list[_ngcontent-%COMP%]:hover {\n  background-color: rgba(17, 17, 17, 0.04);\n}\n.appointment-list[_ngcontent-%COMP%]:active {\n  background-color: #ececec;\n}\n.appointment-list[_ngcontent-%COMP%]:focus {\n  outline-offset: 0.1rem;\n  outline: 0.2rem solid #2373e6;\n  border-radius: 0.1rem;\n}\n\n.break-word[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.line-selector--title[_ngcontent-%COMP%] {\n  color: white;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n@media only screen and (min-width: 768px) {\n  .line-selector--title[_ngcontent-%COMP%] {\n    color: initial;\n  }\n}\n.line-selector--header[_ngcontent-%COMP%] {\n  position: relative;\n  top: -55px;\n}\n@media only screen and (min-width: 768px) {\n  .line-selector--header[_ngcontent-%COMP%] {\n    position: initial;\n  }\n}\n.line-selector--open[_ngcontent-%COMP%] {\n  color: white;\n  border-bottom: 2px solid white;\n  font-size: 16px;\n  line-height: 15px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n@media only screen and (min-width: 768px) {\n  .line-selector--open[_ngcontent-%COMP%] {\n    color: #00807b;\n    border-bottom: 2px solid #00807b;\n    font-size: 18px;\n  }\n}\n\n.line-selector-telenet--title[_ngcontent-%COMP%] {\n  color: initial;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.line-selector-telenet--open[_ngcontent-%COMP%] {\n  color: initial;\n  border-bottom: 2px solid black;\n  font-size: 16px;\n  line-height: 15px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvaW5zdGFsbC9wcm9kdWN0LWpvdXJuZXkvYXBwb2ludG1lbnRzL2ZlYXQtb3ZlcnZpZXcvc3JjL2xpYi9hcHBvaW50bWVudC1zZWxlY3Rvci9hcHBvaW50bWVudC1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0NBQUE7QUFDRjtBQUNFO0VBQ0Usd0NBQUE7QUFDSjtBQUNFO0VBQ0UseUJBQUE7QUFDSjtBQUNFO0VBQ0Usc0JBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUNJO0VBTEY7SUFNSSxjQUFBO0VBRUo7QUFDRjtBQUFFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBRUo7QUFESTtFQUhGO0lBSUksaUJBQUE7RUFJSjtBQUNGO0FBRkU7RUFDRSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBSUo7QUFGSTtFQVJGO0lBU0ksY0FBQTtJQUNBLGdDQUFBO0lBQ0EsZUFBQTtFQUtKO0FBQ0Y7O0FBQUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBR0o7QUFERTtFQUNFLGNBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFHSiIsInNvdXJjZXNDb250ZW50IjpbIi5hcHBvaW50bWVudC1zZWxlY3RlZCB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hcHBvaW50bWVudC1saXN0IHtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjFzIGVhc2U7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMTExMTExLCAwNCUpO1xuICB9XG4gICY6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICB9XG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmUtb2Zmc2V0OiAwLjFyZW07XG4gICAgb3V0bGluZTogMC4ycmVtIHNvbGlkICMyMzczZTY7XG4gICAgYm9yZGVyLXJhZGl1czogMC4xcmVtO1xuICB9XG59XG5cbi5icmVhay13b3JkIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4ubGluZS1zZWxlY3RvciB7XG4gICYtLXRpdGxlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgIGNvbG9yOiBpbml0aWFsO1xuICAgIH1cbiAgfVxuICAmLS1oZWFkZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC01NXB4O1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgIHBvc2l0aW9uOiBpbml0aWFsO1xuICAgIH1cbiAgfVxuICAmLS1vcGVuIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICBjb2xvcjogIzAwODA3YjtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDA4MDdiO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cbiAgfVxufVxuXG4ubGluZS1zZWxlY3Rvci10ZWxlbmV0IHtcbiAgJi0tdGl0bGUge1xuICAgIGNvbG9yOiBpbml0aWFsO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxuICAmLS1vcGVuIHtcbiAgICBjb2xvcjogaW5pdGlhbDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 70898:
/*!************************************************************************************************************!*\
  !*** ./libs/install/product-journey/appointments/feat-overview/src/lib/appointments-overview.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppointmentsOverviewComponent: () => (/* binding */ AppointmentsOverviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @product-journey/appointments/data-access */ 34098);
/* harmony import */ var _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _product_journey_appointments_feat_appointment_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @product-journey/appointments/feat-appointment-detail */ 5176);
/* harmony import */ var _product_journey_appointments_feat_appointment_detail__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_product_journey_appointments_feat_appointment_detail__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngneat/until-destroy */ 52813);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/ocapi/src/lib/components/login.component */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/message/src/lib/message/message.component */ 65145);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/component */ 43956);
/* harmony import */ var _appointment_selector_appointment_selector_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./appointment-selector/appointment-selector.component */ 7596);
/* harmony import */ var _product_journey_appointments_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @product-journey/appointments/ui */ 68248);
/* harmony import */ var _product_journey_appointments_ui__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_product_journey_appointments_ui__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















function AppointmentsOverviewComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tg-appointment-skeleton");
  }
}
function AppointmentsOverviewComponent_ng_container_4_div_1_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tg-appointment-selector", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isBaseCustomer", ctx_r7.isBaseCustomer);
  }
}
function AppointmentsOverviewComponent_ng_container_4_div_1_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14)(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, "ng.appointments.info.appointments-not-available"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "noAppointments");
  }
}
function AppointmentsOverviewComponent_ng_container_4_div_1_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "outdoor-appointment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, "ng.appointments.details-outdoor-appointment"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function AppointmentsOverviewComponent_ng_container_4_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppointmentsOverviewComponent_ng_container_4_div_1_div_1_div_1_Template, 2, 1, "div", 8)(2, AppointmentsOverviewComponent_ng_container_4_div_1_div_1_div_2_Template, 6, 4, "div", 9)(3, AppointmentsOverviewComponent_ng_container_4_div_1_div_1_div_3_Template, 5, 4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tg-appointment-details", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const error_r6 = ctx.$implicit;
    const vm_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngrxLet;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !error_r6 && (vm_r4.appointments == null ? null : vm_r4.appointments.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !error_r6 && !(vm_r4.appointments == null ? null : vm_r4.appointments.length) && !(vm_r4.outdoorAppointment == null ? null : vm_r4.outdoorAppointment.locationIds == null ? null : vm_r4.outdoorAppointment.locationIds.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (vm_r4.outdoorAppointment == null ? null : vm_r4.outdoorAppointment.locationIds == null ? null : vm_r4.outdoorAppointment.locationIds.length) && !(vm_r4.appointments == null ? null : vm_r4.appointments.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isMaster", ctx_r5.isMaster)("allowFiberRepairChanges", ctx_r5.allowFiberRepairChanges)("usefulInformationInstallUrl", ctx_r5.usefulInformationInstallUrl)("usefulInformationMoveUrl", ctx_r5.usefulInformationMoveUrl)("usefulInformationRepairUrl", ctx_r5.usefulInformationRepairUrl)("postInstallationInstructionInstallUrl", ctx_r5.postInstallationInstructionInstallUrl)("postInstallationInstructionMoveUrl", ctx_r5.postInstallationInstructionMoveUrl)("postInstallationInstructionRepairUrl", ctx_r5.postInstallationInstructionRepairUrl)("usefulInformationFiberInstallUrl", ctx_r5.usefulInformationFiberInstallUrl)("usefulInformationFiberMoveUrl", ctx_r5.usefulInformationFiberMoveUrl)("usefulInformationFiberRepairUrl", ctx_r5.usefulInformationFiberRepairUrl)("postInstallationInstructionFiberInstallUrl", ctx_r5.postInstallationInstructionFiberInstallUrl)("postInstallationInstructionFiberMoveUrl", ctx_r5.postInstallationInstructionFiberMoveUrl)("postInstallationInstructionFiberRepairUrl", ctx_r5.postInstallationInstructionFiberRepairUrl);
  }
}
const _c0 = (a0, a1) => ({
  "px--m px--n--md": a0,
  "px--xxxs": a1
});
function AppointmentsOverviewComponent_ng_container_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppointmentsOverviewComponent_ng_container_4_div_1_div_1_Template, 6, 17, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx_r3.isBaseCustomer, !ctx_r3.isBaseCustomer));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngrxLet", ctx_r3.error$);
  }
}
const _c1 = (a0, a1) => ({
  outdoorAppointment: a0,
  appointments: a1
});
function AppointmentsOverviewComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppointmentsOverviewComponent_ng_container_4_div_1_Template, 2, 5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngrxLet", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c1, ctx_r2.outdoorAppointments$, ctx_r2.appointments$));
  }
}
let AppointmentsOverviewComponent = class AppointmentsOverviewComponent {
  appointmentFacade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_1__.AppointmentFacade);
  loginService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_5__.LoginService);
  pathCategorisationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_6__.PathCategorisationService);
  allowFiberRepairChanges;
  usefulInformationInstallUrl;
  usefulInformationMoveUrl;
  usefulInformationRepairUrl;
  postInstallationInstructionMoveUrl;
  postInstallationInstructionRepairUrl;
  postInstallationInstructionInstallUrl;
  usefulInformationFiberInstallUrl;
  usefulInformationFiberMoveUrl;
  usefulInformationFiberRepairUrl;
  postInstallationInstructionFiberMoveUrl;
  postInstallationInstructionFiberRepairUrl;
  postInstallationInstructionFiberInstallUrl;
  enableLoader;
  enableMask;
  pageType;
  scopes = ['appointments'];
  messageGroupName = 'appointments';
  appointments$ = this.appointmentFacade.appointments$;
  appointmentDetailsLoaded$ = this.appointmentFacade.appointmentDetailsLoaded$;
  outdoorAppointments$ = this.appointmentFacade.outdoorAppointment$;
  error$ = this.appointmentFacade.appointmentError$;
  isMaster = false;
  isBaseCustomer = false;
  ngOnInit() {
    this.getUserDetails();
    this.isBaseCustomer = this.pathCategorisationService.isCustomerOfBrand(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_6__.CustomerBrandEnum.BRAND_BASE);
  }
  initAfterLoggedIn() {
    this.appointmentFacade.loadAppointments();
    this.appointmentFacade.loadOutdoorAppointment();
  }
  getUserDetails() {
    this.loginService.getLoginDetails().pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__.untilDestroyed)(this)).subscribe(loginDetails => {
      this.isMaster = loginDetails.isMaster() || loginDetails.isContractHolder();
    });
  }
  static ɵfac = function AppointmentsOverviewComponent_Factory(t) {
    return new (t || AppointmentsOverviewComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppointmentsOverviewComponent,
    selectors: [["tg-appointments-overview"]],
    inputs: {
      allowFiberRepairChanges: "allowFiberRepairChanges",
      usefulInformationInstallUrl: "usefulInformationInstallUrl",
      usefulInformationMoveUrl: "usefulInformationMoveUrl",
      usefulInformationRepairUrl: "usefulInformationRepairUrl",
      postInstallationInstructionMoveUrl: "postInstallationInstructionMoveUrl",
      postInstallationInstructionRepairUrl: "postInstallationInstructionRepairUrl",
      postInstallationInstructionInstallUrl: "postInstallationInstructionInstallUrl",
      usefulInformationFiberInstallUrl: "usefulInformationFiberInstallUrl",
      usefulInformationFiberMoveUrl: "usefulInformationFiberMoveUrl",
      usefulInformationFiberRepairUrl: "usefulInformationFiberRepairUrl",
      postInstallationInstructionFiberMoveUrl: "postInstallationInstructionFiberMoveUrl",
      postInstallationInstructionFiberRepairUrl: "postInstallationInstructionFiberRepairUrl",
      postInstallationInstructionFiberInstallUrl: "postInstallationInstructionFiberInstallUrl",
      enableLoader: "enableLoader",
      enableMask: "enableMask",
      pageType: "pageType"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 6,
    vars: 6,
    consts: [["id", "appointment-overview", 3, "scopes", "componentCanRender"], [1, "text-flow", "text-flow--h5", 3, "messageGroupName"], ["appointmentsOverviewSkeleton", ""], [4, "ngIf", "ngIfElse"], ["class", "appointments care--appointments", 3, "ngClass", 4, "ngrxLet"], [1, "appointments", "care--appointments", 3, "ngClass"], ["class", "row m-0", 4, "ngrxLet"], [1, "row", "m-0"], ["class", "col-12 p--n", 4, "ngIf"], ["class", "col-12 px--n py--m", 4, "ngIf"], ["class", "notification notification--info col-12 my--m", 4, "ngIf"], [1, "col-12", "p--n"], [3, "isMaster", "allowFiberRepairChanges", "usefulInformationInstallUrl", "usefulInformationMoveUrl", "usefulInformationRepairUrl", "postInstallationInstructionInstallUrl", "postInstallationInstructionMoveUrl", "postInstallationInstructionRepairUrl", "usefulInformationFiberInstallUrl", "usefulInformationFiberMoveUrl", "usefulInformationFiberRepairUrl", "postInstallationInstructionFiberInstallUrl", "postInstallationInstructionFiberMoveUrl", "postInstallationInstructionFiberRepairUrl"], [3, "isBaseCustomer"], [1, "col-12", "px--n", "py--m"], [1, "notification", "notification--info"], [1, "icon", "icon-information-shape", "info"], [3, "innerHTML"], [1, "notification", "notification--info", "col-12", "my--m"], ["data-cy", "notification-info-box-icon", 1, "icon", "icon-information-shape", "info"]],
    template: function AppointmentsOverviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tg-login", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("componentCanRender", function AppointmentsOverviewComponent_Template_tg_login_componentCanRender_0_listener() {
          return ctx.initAfterLoggedIn();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-message", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppointmentsOverviewComponent_ng_template_2_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(4, AppointmentsOverviewComponent_ng_container_4_Template, 2, 4, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scopes", ctx.scopes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("messageGroupName", ctx.messageGroupName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, ctx.appointmentDetailsLoaded$))("ngIfElse", _r1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe, _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_1__.AppointmentNgrxModule, _product_journey_appointments_feat_appointment_detail__WEBPACK_IMPORTED_MODULE_3__.AppointmentDetailsComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe, _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_5__.LoginModule, _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_5__.LoginComponent, _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_6__.LoaderModule, _ngrx_component__WEBPACK_IMPORTED_MODULE_11__.LetDirective, _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_7__.MessagesModule, _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_7__.MessageComponent, _appointment_selector_appointment_selector_component__WEBPACK_IMPORTED_MODULE_8__.AppointmentSelectorComponent, _product_journey_appointments_ui__WEBPACK_IMPORTED_MODULE_9__.AppointmentSkeletonComponent],
    encapsulation: 2
  });
};
AppointmentsOverviewComponent = __decorate([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__.UntilDestroy)()], AppointmentsOverviewComponent);


/***/ }),

/***/ 52813:
/*!******************************************************************************!*\
  !*** ./node_modules/@ngneat/until-destroy/fesm2022/ngneat-until-destroy.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UntilDestroy: () => (/* binding */ UntilDestroy),
/* harmony export */   untilDestroyed: () => (/* binding */ untilDestroyed)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 37934);



const NG_PIPE_DEF = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵNG_PIPE_DEF"];
function isPipe(target) {
  return !!target[NG_PIPE_DEF];
}

/**
 * Applied to instances and stores `Subject` instance when
 * no custom destroy method is provided.
 */
const DESTROY = Symbol('__destroy');
/**
 * Applied to definitions and informs that class is decorated
 */
const DECORATOR_APPLIED = Symbol('__decoratorApplied');
/**
 * If we use the `untilDestroyed` operator multiple times inside the single
 * instance providing different `destroyMethodName`, then all streams will
 * subscribe to the single subject. If any method is invoked, the subject will
 * emit and all streams will be unsubscribed. We wan't to prevent this behavior,
 * thus we store subjects under different symbols.
 */
function getSymbol(destroyMethodName) {
  if (typeof destroyMethodName === 'string') {
    return Symbol(`__destroy__${destroyMethodName}`);
  } else {
    return DESTROY;
  }
}
function markAsDecorated(type) {
  // Store this property on the prototype if it's an injectable class, component or directive.
  // We will be able to handle class extension this way.
  type.prototype[DECORATOR_APPLIED] = true;
}
function createSubjectOnTheInstance(instance, symbol) {
  if (!instance[symbol]) {
    instance[symbol] = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
  }
}
function completeSubjectOnTheInstance(instance, symbol) {
  if (instance[symbol]) {
    instance[symbol].next();
    instance[symbol].complete();
    // We also have to re-assign this property thus in the future
    // we will be able to create new subject on the same instance.
    instance[symbol] = null;
  }
}
function unsubscribe(property) {
  if (property instanceof rxjs__WEBPACK_IMPORTED_MODULE_0__.Subscription) {
    property.unsubscribe();
  }
}
function unsubscribeIfPropertyIsArrayLike(property) {
  Array.isArray(property) && property.forEach(unsubscribe);
}
function decorateNgOnDestroy(ngOnDestroy, options) {
  return function () {
    // Invoke the original `ngOnDestroy` if it exists
    ngOnDestroy && ngOnDestroy.call(this);
    // It's important to use `this` instead of caching instance
    // that may lead to memory leaks
    completeSubjectOnTheInstance(this, getSymbol());
    // Check if subscriptions are pushed to some array
    if (options.arrayName) {
      unsubscribeIfPropertyIsArrayLike(this[options.arrayName]);
    }
    // Loop through the properties and find subscriptions
    if (options.checkProperties) {
      for (const property in this) {
        if (options.blackList?.includes(property)) {
          continue;
        }
        unsubscribe(this[property]);
      }
    }
  };
}
function decorateProviderDirectiveOrComponent(type, options) {
  type.prototype.ngOnDestroy = decorateNgOnDestroy(type.prototype.ngOnDestroy, options);
}
function decoratePipe(type, options) {
  const def = type.ɵpipe;
  def.onDestroy = decorateNgOnDestroy(def.onDestroy, options);
}
function UntilDestroy(options = {}) {
  return type => {
    if (isPipe(type)) {
      decoratePipe(type, options);
    } else {
      decorateProviderDirectiveOrComponent(type, options);
    }
    markAsDecorated(type);
  };
}

// `LView` is an array where each index matches the specific data structure.
// The 7th element in an `LView` is an array of cleanup listeners. They are
// invoked when the view is removed (similar to `ComponentRef.onDestroy`).
const CLEANUP = 7;
const CheckerHasBeenSet = Symbol('CheckerHasBeenSet');
function setupSubjectUnsubscribedChecker(instance, destroy$) {
  // This function is used within the `untilDestroyed` operator and setups a function that
  // listens for the view removal and checks if the `destroy$` subject has any observers (usually `takeUntil`).
  // Note: this code will not be shipped into production since it's guarded with `ngDevMode`,
  // this means it'll exist only in development mode.
  if (instance[CheckerHasBeenSet] || isAngularInTestMode()) {
    return;
  }
  runOutsideAngular(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.from)(Promise.resolve()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(() => {
    let lContext;
    try {
      // The `ɵgetLContext` might not work for a pipe, because it's not a component nor a directive,
      // which means there's no `RNode` for an instance.
      lContext = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵgetLContext"])(instance);
    } catch {
      lContext = null;
    }
    const lView = lContext?.lView;
    if (lView == null) {
      return rxjs__WEBPACK_IMPORTED_MODULE_0__.EMPTY;
    }
    const lCleanup = lView[CLEANUP] || (lView[CLEANUP] = []);
    const cleanupHasBeenExecuted$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    // Note: this function is named for debugging purposes.
    lCleanup.push(function untilDestroyedLCleanup() {
      // We leave the Angular zone, so RxJS will also call subsequent `next` functions
      // outside of the Angular zone, which is done to avoid scheduling a microtask (through
      // `asapScheduler`) within the Angular zone.
      runOutsideAngular(() => {
        cleanupHasBeenExecuted$.next();
        cleanupHasBeenExecuted$.complete();
      });
    });
    return cleanupHasBeenExecuted$;
  }),
  // We can't use `observeOn(asapScheduler)` because this might break the app's change detection.
  // RxJS schedulers coalesce tasks and then flush the queue, which means our task might be scheduled
  // within the root zone, and then all of the tasks (that were set up by developers in the Angular zone)
  // will also be flushed in the root zone.
  (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(() => Promise.resolve())).subscribe(() => {
    // Note: The `observed` property is available only in RxJS@7.2.0, which will throw
    // an error in lower versions. We have integration test with RxJS@6 to ensure we don't
    // import operators from `rxjs`; that's why it's wrapped into braces. The `observers`
    // property is also being deprecated.
    const observed = destroy$['observed'] ?? destroy$['observers'].length > 0;
    if (observed) {
      console.warn(createMessage(instance));
    }
  }));
  instance[CheckerHasBeenSet] = true;
}
function isAngularInTestMode() {
  // Gets whether the code is currently running in a test environment.
  // We don't use `declare const` because it might cause conflicts with the real typings.
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    typeof __karma__ !== 'undefined' && !!__karma__ ||
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    typeof jasmine !== 'undefined' && !!jasmine ||
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    typeof jest !== 'undefined' && !!jest ||
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    typeof Mocha !== 'undefined' && !!Mocha ||
    // Jest is not defined in ESM mode since it must be access only by importing from `@jest/globals`.
    // There's no way to check if we're in Jest ESM mode or not, but we can check if the `process` is defined.
    // Note: it's required to check for `[object process]` because someone might be running unit tests with
    // Webpack and shimming `process`.
    typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]'
  );
}
function runOutsideAngular(fn) {
  // We cannot inject the `NgZone` class when running the checker. The `__ngContext__` is read
  // for the first time within a microtask which triggers change detection; we want to avoid that.
  // The `Zone` is always available globally when the `zone.js` is imported. Otherwise, it may be
  // nooped through bootstrap options. The `NgZone.runOutsideAngular` calls `Zone.root.run`, so we're
  // safe calling that function directly.
  const Zone = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵglobal"].Zone;
  const isNgZoneEnabled = !!Zone && typeof Zone.root?.run === 'function';
  return isNgZoneEnabled ? Zone.root.run(fn) : fn();
}
function createMessage(instance) {
  return `
  The ${instance.constructor.name} still has subscriptions that haven't been unsubscribed.
  This may happen if the class extends another class decorated with @UntilDestroy().
  The child class implements its own ngOnDestroy() method but doesn't call super.ngOnDestroy().
  Let's look at the following example:
  @UntilDestroy()
  @Directive()
  export abstract class BaseDirective {}
  @Component({ template: '' })
  export class ConcreteComponent extends BaseDirective implements OnDestroy {
    constructor() {
      super();
      someObservable$.pipe(untilDestroyed(this)).subscribe();
    }
    ngOnDestroy(): void {
      // Some logic here...
    }
  }
  The BaseDirective.ngOnDestroy() will not be called since Angular will call ngOnDestroy()
  on the ConcreteComponent, but not on the BaseDirective.
  One of the solutions is to declare an empty ngOnDestroy method on the BaseDirective:
  @UntilDestroy()
  @Directive()
  export abstract class BaseDirective {
    ngOnDestroy(): void {}
  }
  @Component({ template: '' })
  export class ConcreteComponent extends BaseDirective implements OnDestroy {
    constructor() {
      super();
      someObservable$.pipe(untilDestroyed(this)).subscribe();
    }
    ngOnDestroy(): void {
      // Some logic here...
      super.ngOnDestroy();
    }
  }
  `;
}
const NG_DEV_MODE = typeof ngDevMode === 'undefined' || ngDevMode;
function overrideNonDirectiveInstanceMethod(instance, destroyMethodName, symbol) {
  const originalDestroy = instance[destroyMethodName];
  if (NG_DEV_MODE && typeof originalDestroy !== 'function') {
    throw new Error(`${instance.constructor.name} is using untilDestroyed but doesn't implement ${destroyMethodName}`);
  }
  createSubjectOnTheInstance(instance, symbol);
  instance[destroyMethodName] = function () {
    // eslint-disable-next-line prefer-rest-params
    originalDestroy.apply(this, arguments);
    completeSubjectOnTheInstance(this, symbol);
    // We have to re-assign this property back to the original value.
    // If the `untilDestroyed` operator is called for the same instance
    // multiple times, then we will be able to get the original
    // method again and not the patched one.
    instance[destroyMethodName] = originalDestroy;
  };
}
function untilDestroyed(instance, destroyMethodName) {
  return source => {
    const symbol = getSymbol(destroyMethodName);
    // If `destroyMethodName` is passed then the developer applies
    // this operator to something non-related to Angular DI system
    if (typeof destroyMethodName === 'string') {
      overrideNonDirectiveInstanceMethod(instance, destroyMethodName, symbol);
    } else {
      NG_DEV_MODE && ensureClassIsDecorated(instance);
      createSubjectOnTheInstance(instance, symbol);
    }
    const destroy$ = instance[symbol];
    NG_DEV_MODE && setupSubjectUnsubscribedChecker(instance, destroy$);
    return source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(destroy$));
  };
}
function ensureClassIsDecorated(instance) {
  const prototype = Object.getPrototypeOf(instance);
  const missingDecorator = !(DECORATOR_APPLIED in prototype);
  if (missingDecorator) {
    throw new Error('untilDestroyed operator cannot be used inside directives or ' + 'components or providers that are not decorated with UntilDestroy decorator');
  }
}

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 43956:
/*!******************************************************************!*\
  !*** ./node_modules/@ngrx/component/fesm2022/ngrx-component.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LetDirective: () => (/* binding */ LetDirective),
/* harmony export */   PushPipe: () => (/* binding */ PushPipe),
/* harmony export */   RenderScheduler: () => (/* binding */ RenderScheduler)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 37934);




function isNgZone(zone) {
  return zone instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone;
}
class TickScheduler {
  /** @nocollapse */
  static #_ = this.ɵfac = function TickScheduler_Factory(t) {
    return new (t || TickScheduler)();
  };
  /** @nocollapse */
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: TickScheduler,
    factory: () => (() => {
      const zone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
      return isNgZone(zone) ? new NoopTickScheduler() : (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(AnimationFrameTickScheduler);
    })(),
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TickScheduler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root',
      useFactory: () => {
        const zone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
        return isNgZone(zone) ? new NoopTickScheduler() : (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(AnimationFrameTickScheduler);
      }
    }]
  }], null, null);
})();
class AnimationFrameTickScheduler extends TickScheduler {
  constructor(appRef) {
    super();
    this.appRef = appRef;
    this.isScheduled = false;
  }
  schedule() {
    if (!this.isScheduled) {
      this.isScheduled = true;
      requestAnimationFrame(() => {
        this.appRef.tick();
        this.isScheduled = false;
      });
    }
  }
  /** @nocollapse */
  static #_ = this.ɵfac = function AnimationFrameTickScheduler_Factory(t) {
    return new (t || AnimationFrameTickScheduler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef));
  };
  /** @nocollapse */
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: AnimationFrameTickScheduler,
    factory: AnimationFrameTickScheduler.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimationFrameTickScheduler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef
  }], null);
})();
class NoopTickScheduler extends TickScheduler {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  schedule() {}
}

/**
 * Provides rendering functionality regardless of whether `zone.js` is present
 * or not. It must be provided at the component/directive level.
 *
 * @usageNotes
 *
 * ### Rerender zone-less app on route changes
 *
 * ```ts
 * @Component({
 *   selector: 'app-root',
 *   template: '<router-outlet>',
 *   // 👇 `RenderScheduler` is provided at the component level
 *   providers: [RenderScheduler],
 *   changeDetection: ChangeDetectionStrategy.OnPush,
 * })
 * export class AppComponent implements OnInit {
 *   constructor(
 *     private readonly router: Router,
 *     private readonly renderScheduler: RenderScheduler
 *   ) {}
 *
 *   ngOnInit(): void {
 *     this.router.events
 *       .pipe(filter((e) => e instanceof NavigationEnd))
 *       .subscribe(() => this.renderScheduler.schedule());
 *   }
 * }
 * ```
 *
 * ### Rerender component on interval
 *
 * ```ts
 * @Component({
 *   selector: 'app-interval',
 *   template: '{{ elapsedTime }}ms',
 *   // 👇 `RenderScheduler` is provided at the component level
 *   providers: [RenderScheduler],
 *   changeDetection: ChangeDetectionStrategy.OnPush,
 * })
 * export class IntervalComponent implements OnInit {
 *   elapsedTime = 0;
 *
 *   constructor(private readonly renderScheduler: RenderScheduler) {}
 *
 *   ngOnInit(): void {
 *     setInterval(() => {
 *       this.elapsedTime += 1000;
 *       this.renderScheduler.schedule();
 *     }, 1000);
 *   }
 * }
 * ```
 */
class RenderScheduler {
  constructor(cdRef, tickScheduler) {
    this.cdRef = cdRef;
    this.tickScheduler = tickScheduler;
  }
  /**
   * Marks component and its ancestors as dirty.
   * It also schedules a new change detection cycle in zone-less mode.
   */
  schedule() {
    this.cdRef.markForCheck();
    this.tickScheduler.schedule();
  }
  /** @nocollapse */
  static #_ = this.ɵfac = function RenderScheduler_Factory(t) {
    return new (t || RenderScheduler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](TickScheduler));
  };
  /** @nocollapse */
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: RenderScheduler,
    factory: RenderScheduler.ɵfac
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RenderScheduler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: TickScheduler
  }], null);
})();
function createRenderScheduler() {
  return new RenderScheduler((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(TickScheduler));
}
function combineRenderEventHandlers(handlers) {
  return event => handlers[event.type]?.(event);
}
function fromPotentialObservable(potentialObservable) {
  if ((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.isObservable)(potentialObservable)) {
    return potentialObservable;
  }
  if (isObservableDictionary(potentialObservable)) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.combineLatest)(toDistinctObsDictionary(potentialObservable));
  }
  if (isPromiseLike(potentialObservable)) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(potentialObservable);
  }
  return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(subscriber => {
    subscriber.next(potentialObservable);
  });
}
function isPromiseLike(value) {
  return typeof value?.then === 'function';
}
function isObservableDictionary(value) {
  return isDictionary(value) && Object.keys(value).length > 0 && Object.values(value).every(rxjs__WEBPACK_IMPORTED_MODULE_1__.isObservable);
}
function isDictionary(value) {
  return !!value && typeof value === 'object' && !Array.isArray(value);
}
function toDistinctObsDictionary(obsDictionary) {
  return Object.keys(obsDictionary).reduce((acc, key) => ({
    ...acc,
    [key]: obsDictionary[key].pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)())
  }), {});
}
function createRenderEventManager(handlers) {
  const handleRenderEvent = combineRenderEventHandlers(handlers);
  const potentialObservable$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
  return {
    nextPotentialObservable(potentialObservable) {
      potentialObservable$.next(potentialObservable);
    },
    handlePotentialObservableChanges() {
      return potentialObservable$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)(), switchMapToRenderEvent(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)(renderEventComparator), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(handleRenderEvent));
    }
  };
}
function switchMapToRenderEvent() {
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.pipe)((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(potentialObservable => {
    const observable$ = fromPotentialObservable(potentialObservable);
    let reset = true;
    let synchronous = true;
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(subscriber => {
      const subscription = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.untracked)(() => observable$.subscribe({
        next(value) {
          subscriber.next({
            type: 'next',
            value,
            reset,
            synchronous
          });
          reset = false;
        },
        error(error) {
          subscriber.next({
            type: 'error',
            error,
            reset,
            synchronous
          });
          reset = false;
        },
        complete() {
          subscriber.next({
            type: 'complete',
            reset,
            synchronous
          });
          reset = false;
        }
      }));
      if (reset) {
        subscriber.next({
          type: 'suspense',
          reset,
          synchronous: true
        });
        reset = false;
      }
      synchronous = false;
      return subscription;
    });
  }));
}
function renderEventComparator(previous, current) {
  if (previous.type !== current.type || previous.reset !== current.reset) {
    return false;
  }
  if (current.type === 'next') {
    return previous.value === current.value;
  }
  if (current.type === 'error') {
    return previous.error === current.error;
  }
  return true;
}

/**
 *
 * @description
 *
 * The `*ngrxLet` directive serves a convenient way of binding observables to a view context
 * (DOM element's scope). It also helps with several internal processing under the hood.
 *
 * @usageNotes
 *
 * ### Displaying Observable Values
 *
 * ```html
 * <ng-container *ngrxLet="number$ as n">
 *   <app-number [number]="n"></app-number>
 * </ng-container>
 *
 * <ng-container *ngrxLet="number$; let n">
 *   <app-number [number]="n"></app-number>
 * </ng-container>
 * ```
 *
 * ### Tracking Different Observable Events
 *
 * ```html
 * <ng-container *ngrxLet="number$ as n; error as e; complete as c">
 *   <app-number [number]="n" *ngIf="!e && !c">
 *   </app-number>
 *
 *   <p *ngIf="e">There is an error: {{ e }}</p>
 *   <p *ngIf="c">Observable is completed.</p>
 * </ng-container>
 * ```
 *
 * ### Combining Multiple Observables
 *
 * ```html
 * <ng-container *ngrxLet="{ users: users$, query: query$ } as vm">
 *   <app-search-bar [query]="vm.query"></app-search-bar>
 *   <app-user-list [users]="vm.users"></app-user-list>
 * </ng-container>
 * ```
 *
 * ### Using Suspense Template
 *
 * ```html
 * <ng-container *ngrxLet="number$ as n; suspenseTpl: loading">
 *   <app-number [number]="n"></app-number>
 * </ng-container>
 *
 * <ng-template #loading>
 *   <p>Loading...</p>
 * </ng-template>
 * ```
 *
 * ### Using Aliases for Non-Observable Values
 *
 * ```html
 * <ng-container *ngrxLet="userForm.controls.email as email">
 *   <input type="text" [formControl]="email" />
 *
 *   <ng-container *ngIf="email.errors && (email.touched || email.dirty)">
 *     <p *ngIf="email.errors.required">This field is required.</p>
 *     <p *ngIf="email.errors.email">This field must be an email.</p>
 *   </ng-container>
 * </ng-container>
 * ```
 *
 * @publicApi
 */
class LetDirective {
  set ngrxLet(potentialObservable) {
    this.renderEventManager.nextPotentialObservable(potentialObservable);
  }
  constructor(mainTemplateRef, viewContainerRef, errorHandler, renderScheduler) {
    this.mainTemplateRef = mainTemplateRef;
    this.viewContainerRef = viewContainerRef;
    this.errorHandler = errorHandler;
    this.renderScheduler = renderScheduler;
    this.isMainViewCreated = false;
    this.isSuspenseViewCreated = false;
    this.viewContext = {
      $implicit: undefined,
      ngrxLet: undefined,
      error: undefined,
      complete: false
    };
    this.renderEventManager = createRenderEventManager({
      suspense: () => {
        this.viewContext.$implicit = undefined;
        this.viewContext.ngrxLet = undefined;
        this.viewContext.error = undefined;
        this.viewContext.complete = false;
        this.renderSuspenseView();
      },
      next: event => {
        this.viewContext.$implicit = event.value;
        this.viewContext.ngrxLet = event.value;
        if (event.reset) {
          this.viewContext.error = undefined;
          this.viewContext.complete = false;
        }
        this.renderMainView(event.synchronous);
      },
      error: event => {
        this.viewContext.error = event.error;
        if (event.reset) {
          this.viewContext.$implicit = undefined;
          this.viewContext.ngrxLet = undefined;
          this.viewContext.complete = false;
        }
        this.renderMainView(event.synchronous);
        this.errorHandler.handleError(event.error);
      },
      complete: event => {
        this.viewContext.complete = true;
        if (event.reset) {
          this.viewContext.$implicit = undefined;
          this.viewContext.ngrxLet = undefined;
          this.viewContext.error = undefined;
        }
        this.renderMainView(event.synchronous);
      }
    });
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();
  }
  static ngTemplateContextGuard(dir, ctx) {
    return true;
  }
  ngOnInit() {
    this.subscription.add(this.renderEventManager.handlePotentialObservableChanges().subscribe());
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  renderMainView(isSyncEvent) {
    if (this.isSuspenseViewCreated) {
      this.isSuspenseViewCreated = false;
      this.viewContainerRef.clear();
    }
    if (!this.isMainViewCreated) {
      this.isMainViewCreated = true;
      this.viewContainerRef.createEmbeddedView(this.mainTemplateRef, this.viewContext);
    }
    if (!isSyncEvent) {
      this.renderScheduler.schedule();
    }
  }
  renderSuspenseView() {
    if (this.isMainViewCreated) {
      this.isMainViewCreated = false;
      this.viewContainerRef.clear();
    }
    if (this.suspenseTemplateRef && !this.isSuspenseViewCreated) {
      this.isSuspenseViewCreated = true;
      this.viewContainerRef.createEmbeddedView(this.suspenseTemplateRef);
    }
  }
  /** @nocollapse */
  static #_ = this.ɵfac = function LetDirective_Factory(t) {
    return new (t || LetDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](RenderScheduler));
  };
  /** @nocollapse */
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: LetDirective,
    selectors: [["", "ngrxLet", ""]],
    inputs: {
      ngrxLet: "ngrxLet",
      suspenseTemplateRef: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "ngrxLetSuspenseTpl", "suspenseTemplateRef"]
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([RenderScheduler])]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LetDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      standalone: true,
      selector: '[ngrxLet]',
      providers: [RenderScheduler]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler
  }, {
    type: RenderScheduler
  }], {
    ngrxLet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    suspenseTemplateRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['ngrxLetSuspenseTpl']
    }]
  });
})();

/**
 * @description
 *
 * The `ngrxPush` pipe serves as a drop-in replacement for the `async` pipe.
 * It contains intelligent handling of change detection to enable us
 * running in zone-full as well as zone-less mode without any changes to the code.
 *
 * @usageNotes
 *
 * ### Displaying Observable Values
 *
 * ```html
 * <p>{{ number$ | ngrxPush }}</p>
 *
 * <ng-container *ngIf="number$ | ngrxPush as n">{{ n }}</ng-container>
 *
 * <app-number [number]="number$ | ngrxPush"></app-number>
 * ```
 *
 * ### Combining Multiple Observables
 *
 * ```html
 * <code>
 *   {{ { users: users$, query: query$ } | ngrxPush | json }}
 * </code>
 * ```
 *
 * @publicApi
 */
class PushPipe {
  constructor(errorHandler) {
    this.errorHandler = errorHandler;
    this.renderScheduler = createRenderScheduler();
    this.renderEventManager = createRenderEventManager({
      suspense: event => this.setRenderedValue(undefined, event.synchronous),
      next: event => this.setRenderedValue(event.value, event.synchronous),
      error: event => {
        if (event.reset) {
          this.setRenderedValue(undefined, event.synchronous);
        }
        this.errorHandler.handleError(event.error);
      },
      complete: event => {
        if (event.reset) {
          this.setRenderedValue(undefined, event.synchronous);
        }
      }
    });
    this.subscription = this.renderEventManager.handlePotentialObservableChanges().subscribe();
  }
  transform(potentialObservable) {
    this.renderEventManager.nextPotentialObservable(potentialObservable);
    return this.renderedValue;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  setRenderedValue(value, isSyncEvent) {
    if (value !== this.renderedValue) {
      this.renderedValue = value;
      if (!isSyncEvent) {
        this.renderScheduler.schedule();
      }
    }
  }
  /** @nocollapse */
  static #_ = this.ɵfac = function PushPipe_Factory(t) {
    return new (t || PushPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler, 16));
  };
  /** @nocollapse */
  static #_2 = this.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "ngrxPush",
    type: PushPipe,
    pure: false,
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PushPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      standalone: true,
      name: 'ngrxPush',
      pure: false
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler
  }], null);
})();

/**
 * DO NOT EDIT
 *
 * This file is automatically generated at build
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}])
//# sourceMappingURL=libs_install_product-journey_appointments_feat-overview_src_index_ts.js.map