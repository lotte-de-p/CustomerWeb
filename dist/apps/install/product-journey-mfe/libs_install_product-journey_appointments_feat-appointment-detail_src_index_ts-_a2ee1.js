(self["webpackChunkproduct_journey_mfe"] = self["webpackChunkproduct_journey_mfe"] || []).push([["libs_install_product-journey_appointments_feat-appointment-detail_src_index_ts-_a2ee1"],{

/***/ 70368:
/*!****************************************************************************************!*\
  !*** ./libs/install/product-journey/appointments/feat-appointment-detail/src/index.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppointmentDetailsComponent: () => (/* reexport safe */ _lib_appointment_detail_component__WEBPACK_IMPORTED_MODULE_0__.AppointmentDetailsComponent)
/* harmony export */ });
/* harmony import */ var _lib_appointment_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/appointment-detail.component */ 5665);


/***/ }),

/***/ 58415:
/*!********************************************************************************************************************************************************!*\
  !*** ./libs/install/product-journey/appointments/feat-appointment-detail/src/lib/appointment-additional-info/appointment-additional-info.component.ts ***!
  \********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppointmentAdditionalInfoComponent: () => (/* binding */ AppointmentAdditionalInfoComponent)
/* harmony export */ });
/* harmony import */ var _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @product-journey/appointments/data-access */ 34098);
/* harmony import */ var _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);






function AppointmentAdditionalInfoComponent_div_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 11);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r1.usefulInformationHtml, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-cy", "appointment-useful-info");
  }
}
const _c0 = (a0, a1) => ({
  "icon-chevron-up": a0,
  "icon-chevron-down": a1
});
function AppointmentAdditionalInfoComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppointmentAdditionalInfoComponent_div_0_Template_div_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.toggleFeatures = !ctx_r2.toggleFeatures);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, AppointmentAdditionalInfoComponent_div_0_div_11_Template, 1, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-cy", "appointment-show-useful-info");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 5, "ng.appointments.details.info"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](7, _c0, ctx_r0.toggleFeatures, !ctx_r0.toggleFeatures));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx_r0.toggleFeatures);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.usefulInformationHtml);
  }
}
class AppointmentAdditionalInfoComponent {
  appointmentStatus;
  usefulInformationHtml;
  STATUS_COMPLETED = _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_0__.AppointmentStatusEnum.COMPLETED;
  toggleFeatures = false;
  static ɵfac = function AppointmentAdditionalInfoComponent_Factory(t) {
    return new (t || AppointmentAdditionalInfoComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AppointmentAdditionalInfoComponent,
    selectors: [["tg-appointment-additional-info"]],
    inputs: {
      appointmentStatus: "appointmentStatus",
      usefulInformationHtml: "usefulInformationHtml"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [["class", "background-white", 4, "ngIf"], [1, "background-white"], [1, "display--flex", "flex-wrap--wrap"], [1, "col-md-12", "col-12", "p--n"], [1, "display--flex", "justify-content--between", "cursor--pointer", "p--xl--md", "p--m", 3, "click"], [1, "heading--nomargin"], [1, "icon", 3, "ngClass"], [3, "hidden"], [1, "divider", "divider--xxs__very-light-grey", "mb--xl--md", "mb--l"], [1, "px--xl--md", "px--m", "pb--m", "pb--xl--md"], [3, "innerHTML", 4, "ngIf"], [3, "innerHTML"]],
    template: function AppointmentAdditionalInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AppointmentAdditionalInfoComponent_div_0_Template, 12, 10, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.appointmentStatus !== ctx.STATUS_COMPLETED && ctx.usefulInformationHtml);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_0__.AppointmentNgrxModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 93500:
/*!******************************************************************************************************************************************************************!*\
  !*** ./libs/install/product-journey/appointments/feat-appointment-detail/src/lib/appointment-available-time-slots/appointment-available-time-slots.component.ts ***!
  \******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppointmentAvailableTimeSlotsComponent: () => (/* binding */ AppointmentAvailableTimeSlotsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @product-journey/appointments/data-access */ 34098);
/* harmony import */ var _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../shared/form/src/errors/message-group.directive */ 4134);
/* harmony import */ var _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 70782);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngneat/until-destroy */ 52813);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @telenet/ng-lib-shared */ 77157);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/component */ 43956);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../shared/message/src/lib/message/message.component */ 65145);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _product_journey_appointments_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @product-journey/appointments/ui */ 68248);
/* harmony import */ var _product_journey_appointments_ui__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_product_journey_appointments_ui__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















function AppointmentAvailableTimeSlotsComponent_div_0_div_7_ng_container_25_form_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 24)(1, "app-form-appointment-picker", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("loadMore", function AppointmentAvailableTimeSlotsComponent_div_0_div_7_ng_container_25_form_1_Template_app_form_appointment_picker_loadMore_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.loadMoreSlots($event));
    })("scrollTo", function AppointmentAvailableTimeSlotsComponent_div_0_div_7_ng_container_25_form_1_Template_app_form_appointment_picker_scrollTo_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.scrollToSection($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r6.timeSlotForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("reset", ctx_r6.hasReset)("appointmentPickerType", ctx_r6.selectedAppointmentPickerType)("startDate", ctx_r6.startDate)("timeslots", ctx_r6.availableTimeSlots)("showLoadMore", false)("updateSlots", ctx_r6.updatedSlots)("disableLoadMore", !ctx_r6.disableLoadMore)("slidesToShow", 4)("isDeviceLandscape", ctx_r6.isDeviceLandscape)("enableAppointmentsUI", true);
  }
}
function AppointmentAvailableTimeSlotsComponent_div_0_div_7_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppointmentAvailableTimeSlotsComponent_div_0_div_7_ng_container_25_form_1_Template, 2, 11, "form", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.availableTimeSlots);
  }
}
function AppointmentAvailableTimeSlotsComponent_div_0_div_7_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tg-time-slot-skeleton");
  }
}
function AppointmentAvailableTimeSlotsComponent_div_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "h6", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8)(5, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppointmentAvailableTimeSlotsComponent_div_0_div_7_Template_label_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.setAppointmentPickerType(0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10)(7, "div", 11)(8, "div", 12)(9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppointmentAvailableTimeSlotsComponent_div_0_div_7_Template_label_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.setAppointmentPickerType(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 18)(17, "div", 11)(18, "div", 12)(19, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AppointmentAvailableTimeSlotsComponent_div_0_div_7_ng_container_25_Template, 2, 1, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AppointmentAvailableTimeSlotsComponent_div_0_div_7_ng_template_27_Template, 1, 0, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, "ng.appointments.choose.tab.lbl"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 7, "ng.appointments.tab.date.lbl"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 9, "ng.appointments.tab.time.lbl"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 11, ctx_r2.timeSlotsLoaded$))("ngIfElse", _r5);
  }
}
function AppointmentAvailableTimeSlotsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "h4", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-message", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppointmentAvailableTimeSlotsComponent_div_0_div_7_Template, 29, 13, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const error_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, "ng.appointments.datepickertitle." + (ctx_r0.selectedAppointment == null ? null : ctx_r0.selectedAppointment.appointmentType) + ".lbl")), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("messageGroupName", ctx_r0.messageGroupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !error_r1);
  }
}
let AppointmentAvailableTimeSlotsComponent = class AppointmentAvailableTimeSlotsComponent {
  selectedAppointment;
  availableTimeSlots;
  updatedSlots = [];
  startDate;
  disableLoadMore = false;
  selectedTimeSlot = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  loadMoreTimeSlot = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  formBuilder = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder);
  mediaQueryService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__.MediaQueryService);
  ref = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
  domService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_7__.DomService);
  appointmentFacade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_2__.AppointmentFacade);
  appointmentPickerTypes = _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_5__.AppointmentPickerTypeEnum;
  error$ = this.appointmentFacade.availableTimeSlotError$;
  timeSlotsLoaded$ = this.appointmentFacade.timeSlotsLoaded$;
  messageGroupName = 'available time slot';
  showLoadMore = true;
  hasReset = false;
  selectedAppointmentPickerType = this.appointmentPickerTypes.BY_DATE;
  isDeviceLandscape = false;
  timeSlotForm = this.formBuilder.group({
    appointment: [null]
  });
  ngOnChanges(changes) {
    if (changes['selectedAppointment']?.currentValue !== changes['selectedAppointment']?.previousValue || changes['availableTimeSlots']?.currentValue !== changes['availableTimeSlots']?.previousValue) {
      this.timeSlotForm.reset();
      this.isDeviceLandscape = this.mediaQueryService.isLandscapeMode();
      this.timeSlotForm.addValidators([_telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_5__.AppointmentPickerValidator.dayRequired(this.selectedAppointmentPickerType)]);
    }
  }
  ngOnInit() {
    this.selectedAppointmentPickerType = this.appointmentPickerTypes.BY_DATE;
    this.timeSlotForm?.get('appointment')?.valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__.untilDestroyed)(this)).subscribe(value => {
      this.hasReset = !value;
      if (value?.date && value?.moment) {
        this.selectedTimeSlot.emit(true);
      }
      this.ref.detectChanges();
    });
  }
  loadMoreSlots(loadPreviousSlots) {
    this.loadMoreTimeSlot.emit(loadPreviousSlots);
  }
  scrollToSection(selectedTab) {
    if (selectedTab === _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_5__.AppointmentPickerTypeEnum.BY_DATE) {
      this.domService.scrollToElement('.section-date');
    } else if (selectedTab === _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_5__.AppointmentPickerTypeEnum.BY_MOMENT) {
      this.domService.scrollToElement('.section-time');
    }
  }
  setAppointmentPickerType(pickerType) {
    this.selectedTimeSlot.emit(false);
    this.selectedAppointmentPickerType = pickerType;
    this.timeSlotForm.addValidators([_telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_5__.AppointmentPickerValidator.dayRequired(pickerType)]);
  }
  static ɵfac = function AppointmentAvailableTimeSlotsComponent_Factory(t) {
    return new (t || AppointmentAvailableTimeSlotsComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppointmentAvailableTimeSlotsComponent,
    selectors: [["tg-appointment-available-time-slots"]],
    inputs: {
      selectedAppointment: "selectedAppointment",
      availableTimeSlots: "availableTimeSlots",
      updatedSlots: "updatedSlots",
      startDate: "startDate",
      disableLoadMore: "disableLoadMore"
    },
    outputs: {
      selectedTimeSlot: "selectedTimeSlot",
      loadMoreTimeSlot: "loadMoreTimeSlot"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [["class", "display--block", 4, "ngrxLet"], [1, "display--block"], [1, "appointment-picker", "appointment-picker--section", "mt--g--md", "mt--xl"], [1, "m-0", "pb--m", 3, "innerHTML"], [1, "py--xl--md", "p--m", "px--l--md", "background-white"], [1, "text-flow", "text-flow--h5", 3, "messageGroupName"], [4, "ngIf"], [1, "mt-0", "pb--m", "pl--xs--md"], [1, "pb--xs", "pr--xxxl--md", "pl--xs--md", "select-tile--group", "display--grid", "grid-template-column--4--md", "gap--xm"], ["for", "choice", 1, "select-tile", "display--flex", "flex-direction--column", "m--n", "color-text", "background-white", "animation-show-slide-up", 3, "click"], ["data-cy", "appointment-time-slot-tab-date", 1, "select-tile__content", "display--flex", "flex-direction--column", "flex-grow", "gap--xxs", "gap--xs--sm", "p--m", "p--l--sm"], [1, "select-tile__content--inner", "display--flex", "flex-direction--column"], [1, "display--flex", "gap--m", "gap--l--sm"], [1, "select-tile__content_text", "display--flex", "flex-direction--column", "flex-grow", "gap--xxs"], ["aria-hidden", "true", 1, "icon", "icon-md", "icon-calendar", "display--inline-flex", "aspect-ratio--1-1", "width--fit-content", "icon-no-size-override"], [1, "heading--6", "heading--nomargin"], ["type", "radio", "name", "choice", "value", "", "id", "choice", "data-cy", "appointment-time-slot-input-date", "checked", "", 1, "select-tile__input", "display--flex", "align-items--center", "justify-content--center", "font--body-regular", "cursor--pointer", "border-radius--circle"], ["for", "choice1", 1, "select-tile", "display--flex", "flex-direction--column", "m--n", "color-text", "background-white", "animation-show-slide-up", 3, "click"], ["data-cy", "appointment-time-slot-tab-time", 1, "select-tile__content", "display--flex", "flex-direction--column", "flex-grow", "gap--xxs", "gap--xs--sm", "p--m", "p--l--sm"], ["aria-hidden", "true", 1, "icon", "icon-md", "icon-clock", "display--inline-flex", "aspect-ratio--1-1", "width--fit-content", "icon-no-size-override"], ["type", "radio", "name", "choice", "value", "", "data-cy", "appointment-time-slot-input-time", "id", "choice1", 1, "select-tile__input", "display--flex", "align-items--center", "justify-content--center", "font--body-regular", "cursor--pointer", "border-radius--circle"], [4, "ngIf", "ngIfElse"], ["timeSlotSkeleton", ""], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], ["consumerType", "NC", "formControlName", "appointment", "labelPrefix", "schedule-appointment", "messageGroup", "appointments", 3, "reset", "appointmentPickerType", "startDate", "timeslots", "showLoadMore", "updateSlots", "disableLoadMore", "slidesToShow", "isDeviceLandscape", "enableAppointmentsUI", "loadMore", "scrollTo"]],
    template: function AppointmentAvailableTimeSlotsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppointmentAvailableTimeSlotsComponent_div_0_Template, 8, 7, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngrxLet", ctx.error$);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_1__.LowerCasePipe, _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_2__.AppointmentNgrxModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe, _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_5__.TgFormsModule, _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_5__.InputAppointmentPickerComponent, _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_5__.FormDirective, _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_5__.MessageGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _ngrx_component__WEBPACK_IMPORTED_MODULE_11__.LetDirective, _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_8__.MessagesModule, _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_8__.MessageComponent, _product_journey_appointments_ui__WEBPACK_IMPORTED_MODULE_9__.TimeSlotSkeletonComponent],
    encapsulation: 2
  });
};
AppointmentAvailableTimeSlotsComponent = __decorate([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__.UntilDestroy)()], AppointmentAvailableTimeSlotsComponent);


/***/ }),

/***/ 69578:
/*!**************************************************************************************************************************************************!*\
  !*** ./libs/install/product-journey/appointments/feat-appointment-detail/src/lib/appointment-cancellation/appointment-cancellation.component.ts ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppointmentCancellationComponent: () => (/* binding */ AppointmentCancellationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @product-journey/appointments/data-access */ 34098);
/* harmony import */ var _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @telenet/ng-lib-shared */ 77157);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_4__);







class AppointmentCancellationComponent {
  selectedAppointment;
  closeCancellation = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  appointmentFacade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_2__.AppointmentFacade);
  domService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_4__.DomService);
  closeCancellationDialog() {
    this.closeCancellation.emit(false);
  }
  cancelAppointment() {
    this.domService.scrollToStartElement('#appointment-overview');
    this.appointmentFacade.cancelAppointment(this.selectedAppointment?.appointmentId || '');
    this.closeCancellation.emit(false);
  }
  static ɵfac = function AppointmentCancellationComponent_Factory(t) {
    return new (t || AppointmentCancellationComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppointmentCancellationComponent,
    selectors: [["tg-appointment-cancellation"]],
    inputs: {
      selectedAppointment: "selectedAppointment"
    },
    outputs: {
      closeCancellation: "closeCancellation"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 22,
    vars: 25,
    consts: [[1, "overlay"], [1, "overlay__mask"], [1, "overlay__section"], [1, "overlay__section__content", "p--m"], [1, "mt-0", "pb--m"], [1, "overlay__section__content__description", "mb--l"], [1, "m--n"], [1, "overlay__section__content__action"], ["href", "javascript:void(0)", 1, "button", "button--secondary", 3, "click"], ["href", "javascript:void(0)", 1, "button", "button--primary", "button--alternate", 3, "click"]],
    template: function AppointmentCancellationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7)(16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppointmentCancellationComponent_Template_a_click_16_listener() {
          return ctx.closeCancellationDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppointmentCancellationComponent_Template_a_click_19_listener() {
          return ctx.cancelAppointment();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_4_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 13, "ng.appointments.cancellation.warning-message"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "cancel-appointment-date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 15, (tmp_2_0 = ctx.selectedAppointment == null ? null : ctx.selectedAppointment.dayLabelKey) !== null && tmp_2_0 !== undefined ? tmp_2_0 : ""), " ", ctx.selectedAppointment == null ? null : ctx.selectedAppointment.dayOfMonth, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 17, (tmp_2_0 = ctx.selectedAppointment == null ? null : ctx.selectedAppointment.monthLabelKey) !== null && tmp_2_0 !== undefined ? tmp_2_0 : ""), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "cancel-appointment-time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 19, (tmp_4_0 = ctx.selectedAppointment == null ? null : ctx.selectedAppointment.timeslotCodeLabelKey) !== null && tmp_4_0 !== undefined ? tmp_4_0 : ""), " (", ctx.selectedAppointment == null ? null : ctx.selectedAppointment.timeSlot == null ? null : ctx.selectedAppointment.timeSlot.startTime, " - ", ctx.selectedAppointment == null ? null : ctx.selectedAppointment.timeSlot == null ? null : ctx.selectedAppointment.timeSlot.endTime, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "close-cancel-appointment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 21, "ng.appointments.cancellation.lbl.back-btn"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "confirm-cancel-appointment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 23, "ng.appointments.cancellation.lbl.confirm-btn"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_2__.AppointmentNgrxModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 99150:
/*!******************************************************************************************************************************************************!*\
  !*** ./libs/install/product-journey/appointments/feat-appointment-detail/src/lib/appointment-contact-detail/appointment-contact-detail.component.ts ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppointmentContactDetailComponent: () => (/* binding */ AppointmentContactDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @product-journey/appointments/data-access */ 34098);
/* harmony import */ var _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _product_journey_appointments_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @product-journey/appointments/ui */ 68248);
/* harmony import */ var _product_journey_appointments_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_product_journey_appointments_ui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _contact_detail_form_contact_detail_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-detail-form/contact-detail-form.component */ 27655);









function AppointmentContactDetailComponent_div_5_p_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 13)(1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppointmentContactDetailComponent_div_5_p_12_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.setEditContactFlag());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "update-contact-detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "ng.appointments.contact.update-btn"));
  }
}
function AppointmentContactDetailComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "div", 8)(5, "div", 9)(6, "div", 10)(7, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "phoneNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppointmentContactDetailComponent_div_5_p_12_Template, 4, 4, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "contact-name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.appointment == null ? null : ctx_r0.appointment.customer == null ? null : ctx_r0.appointment.customer.contactName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "contact-value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 5, ctx_r0.appointment == null ? null : ctx_r0.appointment.customer == null ? null : ctx_r0.appointment.customer.notificationContact), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.appointment == null ? null : ctx_r0.appointment.isUpcomingAppointment) && !(ctx_r0.appointment == null ? null : ctx_r0.appointment.isScheduledAppointment) && ctx_r0.isMaster);
  }
}
function AppointmentContactDetailComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15)(1, "h5", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tg-contact-detail-form", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("showEditContactForm", function AppointmentContactDetailComponent_div_6_Template_tg_contact_detail_form_showEditContactForm_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.setEditContactFlag($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "ng.appointments.edit-contact-details.lbl"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appointment", ctx_r1.appointment)("showEditContactDetail", ctx_r1.showEditContactDetail);
  }
}
class AppointmentContactDetailComponent {
  appointment;
  isMaster = true;
  showEditContactDetail = false;
  contactDetailFormComponent;
  showEditContactForm = false;
  ngOnChanges(changes) {
    if ('appointment' in changes) {
      this.showEditContactForm = false;
    }
  }
  setEditContactFlag(showEditContactForm) {
    this.showEditContactForm = showEditContactForm ?? true;
  }
  static ɵfac = function AppointmentContactDetailComponent_Factory(t) {
    return new (t || AppointmentContactDetailComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppointmentContactDetailComponent,
    selectors: [["tg-appointment-contact-detail"]],
    viewQuery: function AppointmentContactDetailComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_contact_detail_form_contact_detail_form_component__WEBPACK_IMPORTED_MODULE_5__.ContactDetailFormComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contactDetailFormComponent = _t.first);
      }
    },
    inputs: {
      appointment: "appointment",
      isMaster: "isMaster",
      showEditContactDetail: "showEditContactDetail"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 7,
    vars: 6,
    consts: [[1, "pt--g--md", "pt--xl", 3, "hidden"], [1, "m-0", "pb--m"], ["class", "background-white appointment-contact p--xl--md p--m", 4, "ngIf"], ["class", "appointment-contact background-white p--xl--md p--m", 4, "ngIf"], [1, "background-white", "appointment-contact", "p--xl--md", "p--m"], [1, "cards--body"], [1, "cards--body--inner-container"], ["id", "appointment-contact-details"], [1, "col-sm-12", "appointment-contact__details", "px--n"], [1, "appointment-contact__details--section", "display--flex", "justify-content--between", "flex-wrap--wrap"], [1, "col-sm-12", "px--n"], [1, "font--body-regular", "m-0"], ["class", "pt--xs", 4, "ngIf"], [1, "pt--xs"], ["href", "javascript:void(0)", 1, "link", "link--default", "font--body-regular-bold", 3, "click"], [1, "appointment-contact", "background-white", "p--xl--md", "p--m"], [1, "m-0", "pb--m--md", "pb--xs"], [3, "appointment", "showEditContactDetail", "showEditContactForm"]],
    template: function AppointmentContactDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppointmentContactDetailComponent_div_5_Template, 13, 7, "div", 2)(6, AppointmentContactDetailComponent_div_6_Template, 5, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.appointment);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, "ng.appointments.contact.lbl.contact-details"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showEditContactForm && !ctx.showEditContactDetail && (ctx.appointment == null ? null : ctx.appointment.customer));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.showEditContactForm || ctx.showEditContactDetail) && ctx.isMaster);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_1__.AppointmentNgrxModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe, _product_journey_appointments_ui__WEBPACK_IMPORTED_MODULE_4__.PhoneNumberPipe, _contact_detail_form_contact_detail_form_component__WEBPACK_IMPORTED_MODULE_5__.ContactDetailFormComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 27655:
/*!*******************************************************************************************************************************************************************!*\
  !*** ./libs/install/product-journey/appointments/feat-appointment-detail/src/lib/appointment-contact-detail/contact-detail-form/contact-detail-form.component.ts ***!
  \*******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactDetailFormComponent: () => (/* binding */ ContactDetailFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @product-journey/appointments/data-access */ 34098);
/* harmony import */ var _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 70782);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../shared/form/src/errors/message-group.directive */ 4134);
/* harmony import */ var _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngneat/until-destroy */ 52813);
/* harmony import */ var _product_journey_appointments_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @product-journey/appointments/ui */ 68248);
/* harmony import */ var _product_journey_appointments_ui__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_product_journey_appointments_ui__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @telenet/ng-lib-shared */ 77157);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















function ContactDetailFormComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9)(1, "p", 10)(2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactDetailFormComponent_div_11_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.cancelSaveAppointmentContact());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p")(6, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactDetailFormComponent_div_11_Template_a_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.saveAppointmentContact());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "cancel-save-contact-detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, "ng.appointments.contact.form.cancel-btn"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "save-contact-detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 6, "ng.appointments.contact.form.save-btn"));
  }
}
const NOTIFICATION_METHODS = [{
  value: 'EMAIL',
  label: 'ng.appointments.lbl.contact-method-email'
}, {
  value: 'SMS',
  label: 'ng.appointments.lbl.contact-method-sms'
}];
let ContactDetailFormComponent = class ContactDetailFormComponent {
  appointment;
  showEditContactDetail = false;
  showEditContactForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  formBuilder = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder);
  translate = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService);
  ref = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
  appointmentFacade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_2__.AppointmentFacade);
  domService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_7__.DomService);
  MESSAGE_GROUP = 'appointments';
  appointmentContactForm;
  contactMethodOptions;
  customMessageGroup;
  ngOnChanges(changes) {
    if ('appointment' in changes) {
      this.appointmentContactForm?.patchValue({
        contactNameField: this.appointment?.customer?.contactName,
        contactMethodField: this.getNotificationMethodValue(this.appointment?.customer?.notificationMethod),
        contactValueField: this.appointment?.customer?.notificationContact
      });
    }
  }
  ngOnInit() {
    this.initializeAndPopulateForm(this.appointment?.customer);
    this.appointmentContactForm.get('contactMethodField')?.valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__.untilDestroyed)(this)).subscribe(value => {
      this.customContactValueValidation(value);
      this.ref.detectChanges();
    });
  }
  saveAppointmentContact() {
    if (this.appointmentContactForm.invalid) {
      this.triggerFormValidation();
      return false;
    }
    const contactMethod = this.getNotificationMethodLabel(this.appointmentContactForm.get('contactMethodField')?.value) ?? '';
    const request = {
      contactName: this.appointmentContactForm.get('contactNameField')?.value,
      language: this.appointment?.customer?.language ?? '',
      notificationMethod: _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_2__.NotificationMethodEnum[contactMethod],
      notificationContact: this.appointmentContactForm.get('contactValueField')?.value
    };
    this.domService.scrollToStartElement('#appointment-overview');
    this.appointmentFacade.updateContactDetail(request, this.appointment?.appointmentId || '');
    return true;
  }
  cancelSaveAppointmentContact() {
    this.showEditContactForm.emit(false);
  }
  initializeAndPopulateForm(contactDetails) {
    this.appointmentContactForm = this.formBuilder.group({
      contactNameField: [contactDetails?.contactName ?? '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(_product_journey_appointments_ui__WEBPACK_IMPORTED_MODULE_6__.AppointmentRegexConstant.TEXT_FIELD_ONLY_ALPHABETS)]],
      contactMethodField: [this.getNotificationMethodValue(contactDetails?.notificationMethod?.toString()) ?? '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      contactValueField: [contactDetails?.notificationContact ?? '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
    });
    this.contactMethodOptions = this.getContactMethodOptions();
    this.customContactValueValidation();
  }
  getNotificationMethodValue(notificationMethod) {
    return this.getContactMethodOptions().find(method => method.label === notificationMethod)?.value;
  }
  getNotificationMethodLabel(notificationMethod) {
    return this.getContactMethodOptions().find(method => method.value.toLowerCase() === notificationMethod?.toLowerCase())?.label;
  }
  getContactMethodOptions() {
    return NOTIFICATION_METHODS.map(val => {
      return new _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_5__.InputOption().withValue(this.translate.instant(val.label)).withLabel(val.value);
    });
  }
  customContactValueValidation(contactType) {
    contactType = contactType ?? this.appointmentContactForm?.get('contactMethodField')?.value;
    const contactTypeValue = this.getNotificationMethodLabel(contactType);
    this.customMessageGroup = this.MESSAGE_GROUP + '.' + contactTypeValue?.toLowerCase();
    switch (contactTypeValue) {
      case _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_2__.NotificationMethodEnum.EMAIL:
        this.appointmentContactForm?.get('contactValueField')?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(_telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_5__.RegexConstants.EMAIL)]);
        this.setContactValue(_telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_5__.RegexConstants.EMAIL);
        break;
      case _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_2__.NotificationMethodEnum.SMS:
        this.appointmentContactForm?.get('contactValueField')?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(_telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_5__.RegexConstants.TELENET_PHONE_NUMBER)]);
        this.setContactValue(_telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_5__.RegexConstants.TELENET_PHONE_NUMBER);
        break;
      default:
        break;
    }
  }
  setContactValue(regex) {
    if (!regex.test(this.appointmentContactForm?.get('contactValueField')?.value)) {
      this.appointmentContactForm?.get('contactValueField')?.setValue('');
    }
    this.appointmentContactForm?.updateValueAndValidity();
  }
  triggerFormValidation() {
    Object.keys(this.appointmentContactForm.controls).forEach(key => {
      this.appointmentContactForm.controls[key].updateValueAndValidity();
      this.appointmentContactForm.controls[key].markAsDirty();
    });
  }
  static ɵfac = function ContactDetailFormComponent_Factory(t) {
    return new (t || ContactDetailFormComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ContactDetailFormComponent,
    selectors: [["tg-contact-detail-form"]],
    inputs: {
      appointment: "appointment",
      showEditContactDetail: "showEditContactDetail"
    },
    outputs: {
      showEditContactForm: "showEditContactForm"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 12,
    vars: 14,
    consts: [[1, "cards--body", 3, "hidden"], [3, "formGroup"], [1, "form-group"], [1, "cards--body--inner-container"], [1, "col-sm-12", "appointment-contact__details", "px--n"], ["formControlName", "contactNameField", "labelStyle", "FormGroup__label", 3, "showPlaceHolder", "messageGroup", "required"], ["formControlName", "contactMethodField", "labelStyle", "FormGroup__label", 3, "required", "optionList", "showPlaceHolder", "messageGroup", "customLabel"], ["formControlName", "contactValueField", "labelStyle", "FormGroup__label", 3, "showPlaceHolder", "messageGroup", "required"], ["class", "display--inline-flex--sm display--block pt--xs", 4, "ngIf"], [1, "display--inline-flex--sm", "display--block", "pt--xs"], [1, "pr--l"], ["href", "javascript:void(0)", 1, "link", "link--default", "font--body-regular-bold", 3, "click"]],
    template: function ContactDetailFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "form", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "tg-form-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "tg-form-dropdown-with-input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "tg-form-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ContactDetailFormComponent_div_11_Template, 9, 8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.appointmentContactForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.appointmentContactForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showPlaceHolder", false)("messageGroup", ctx.MESSAGE_GROUP)("required", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("required", true)("optionList", ctx.contactMethodOptions)("showPlaceHolder", false)("messageGroup", ctx.MESSAGE_GROUP)("customLabel", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showPlaceHolder", false)("messageGroup", ctx.customMessageGroup)("required", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showEditContactDetail);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_2__.AppointmentNgrxModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_5__.TgFormsModule, _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_5__.InputComponent, _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_5__.FormDirective, _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_5__.DropdownWithInputComponent, _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_5__.MessageGroupDirective],
    encapsulation: 2
  });
};
ContactDetailFormComponent = __decorate([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__.UntilDestroy)()], ContactDetailFormComponent);


/***/ }),

/***/ 5665:
/*!*******************************************************************************************************************!*\
  !*** ./libs/install/product-journey/appointments/feat-appointment-detail/src/lib/appointment-detail.component.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppointmentDetailsComponent: () => (/* binding */ AppointmentDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @product-journey/appointments/data-access */ 34098);
/* harmony import */ var _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _appointment_additional_info_appointment_additional_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./appointment-additional-info/appointment-additional-info.component */ 58415);
/* harmony import */ var _appointment_contact_detail_appointment_contact_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./appointment-contact-detail/appointment-contact-detail.component */ 99150);
/* harmony import */ var _product_journey_appointments_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @product-journey/appointments/ui */ 68248);
/* harmony import */ var _product_journey_appointments_ui__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_product_journey_appointments_ui__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @telenet/ng-lib-form */ 4134);
/* harmony import */ var _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _appointment_notification_appointment_notification_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./appointment-notification/appointment-notification.component */ 12027);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var _appointment_available_time_slots_appointment_available_time_slots_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./appointment-available-time-slots/appointment-available-time-slots.component */ 93500);
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/component */ 43956);
/* harmony import */ var _appointment_cancellation_appointment_cancellation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./appointment-cancellation/appointment-cancellation.component */ 69578);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 1261);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngneat/until-destroy */ 52813);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @telenet/ng-lib-shared */ 77157);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_13__);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















function AppointmentDetailsComponent_div_0_div_1_tg_appointment_cancellation_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tg-appointment-cancellation", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeCancellation", function AppointmentDetailsComponent_div_0_div_1_tg_appointment_cancellation_1_Template_tg_appointment_cancellation_closeCancellation_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r16.toggleCancelDialog($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).ngrxLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedAppointment", vm_r1.appointment);
  }
}
function AppointmentDetailsComponent_div_0_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "lowercase");
  }
  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).ngrxLet;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (vm_r1.appointment == null ? null : vm_r1.appointment.getDisplayStatus) === ctx_r4.STATUS_NEW ? "status-indicator--neutral" : "status-indicator--warning")("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, "ng.appointments.lbl.appointment-status-" + (vm_r1.appointment == null ? null : vm_r1.appointment.getDisplayStatus))), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function AppointmentDetailsComponent_div_0_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "lowercase");
  }
  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).ngrxLet;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (vm_r1.appointment == null ? null : vm_r1.appointment.getDisplayStatus) === ctx_r5.STATUS_COMPLETED ? "status-indicator--positive" : "status-indicator--negative")("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, "ng.appointments.lbl.appointment-status-" + (vm_r1.appointment == null ? null : vm_r1.appointment.getDisplayStatus))), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function AppointmentDetailsComponent_div_0_div_1_div_14_div_13_div_5_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "phoneNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5).ngrxLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, vm_r1.appointment == null ? null : vm_r1.appointment.customer == null ? null : vm_r1.appointment.customer.notificationContact));
  }
}
function AppointmentDetailsComponent_div_0_div_1_div_14_div_13_div_5_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5).ngrxLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](vm_r1.appointment == null ? null : vm_r1.appointment.customer == null ? null : vm_r1.appointment.customer.notificationContact);
  }
}
const _c0 = a0 => ({
  contactType: a0
});
function AppointmentDetailsComponent_div_0_div_1_div_14_div_13_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppointmentDetailsComponent_div_0_div_1_div_14_div_13_div_5_span_5_Template, 3, 3, "span", 2)(6, AppointmentDetailsComponent_div_0_div_1_div_14_div_13_div_5_span_6_Template, 2, 1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).ngrxLet;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 3, "ng.appointments.details.contact.info", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, vm_r1.appointment == null ? null : vm_r1.appointment.customer == null ? null : vm_r1.appointment.customer.notificationMethod))), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (vm_r1.appointment == null ? null : vm_r1.appointment.customer == null ? null : vm_r1.appointment.customer.notificationMethod) === ctx_r22.SMS || (vm_r1.appointment == null ? null : vm_r1.appointment.customer == null ? null : vm_r1.appointment.customer.notificationMethod) === ctx_r22.VOICE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (vm_r1.appointment == null ? null : vm_r1.appointment.customer == null ? null : vm_r1.appointment.customer.notificationMethod) === ctx_r22.EMAIL);
  }
}
function AppointmentDetailsComponent_div_0_div_1_div_14_div_13_ng_container_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r26);
  }
}
function AppointmentDetailsComponent_div_0_div_1_div_14_div_13_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppointmentDetailsComponent_div_0_div_1_div_14_div_13_ng_container_6_div_1_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).ngrxLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (vm_r1.appointment == null ? null : vm_r1.appointment.fiberAppointment) && (vm_r1.appointment == null ? null : vm_r1.appointment.isRepairAppointment) || !(vm_r1.appointment == null ? null : vm_r1.appointment.fiberAppointment));
  }
}
function AppointmentDetailsComponent_div_0_div_1_div_14_div_13_ng_container_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r26);
  }
}
function AppointmentDetailsComponent_div_0_div_1_div_14_div_13_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppointmentDetailsComponent_div_0_div_1_div_14_div_13_ng_container_7_div_1_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).ngrxLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(vm_r1.appointment == null ? null : vm_r1.appointment.fiberAppointment));
  }
}
function AppointmentDetailsComponent_div_0_div_1_div_14_div_13_ng_template_8_p_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p")(1, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppointmentDetailsComponent_div_0_div_1_div_14_div_13_ng_template_8_p_4_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r37.toggleCancelDialog(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", !ctx_r36.isMaster ? "disabled-state" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "cancel-appointment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "ng.appointments.details.cancel.link"));
  }
}
function AppointmentDetailsComponent_div_0_div_1_div_14_div_13_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 38)(1, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppointmentDetailsComponent_div_0_div_1_div_14_div_13_ng_template_8_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);
      const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).ngrxLet;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r39.requestRescheduleAppointment(vm_r1.appointment));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppointmentDetailsComponent_div_0_div_1_div_14_div_13_ng_template_8_p_4_Template, 4, 5, "p", 2);
  }
  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).ngrxLet;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", !ctx_r25.isMaster ? "disabled-state" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "request-reschedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "ng.appointments.details.reschedule.link"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", vm_r1.appointment == null ? null : vm_r1.appointment.isRepairAppointment);
  }
}
function AppointmentDetailsComponent_div_0_div_1_div_14_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31)(1, "h5", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppointmentDetailsComponent_div_0_div_1_div_14_div_13_div_5_Template, 7, 10, "div", 2)(6, AppointmentDetailsComponent_div_0_div_1_div_14_div_13_ng_container_6_Template, 2, 1, "ng-container", 2)(7, AppointmentDetailsComponent_div_0_div_1_div_14_div_13_ng_container_7_Template, 2, 1, "ng-container", 2)(8, AppointmentDetailsComponent_div_0_div_1_div_14_div_13_ng_template_8_Template, 5, 6, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).ngrxLet;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "reschedule-appointment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 7, "ng.appointments.details.reschedule-cancel." + (vm_r1.appointment == null ? null : vm_r1.appointment.appointmentType) + ".lbl")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", vm_r1.appointment == null ? null : vm_r1.appointment.customer == null ? null : vm_r1.appointment.customer.notificationContact);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.allowFiberRepairChanges);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r21.allowFiberRepairChanges);
  }
}
function AppointmentDetailsComponent_div_0_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15)(1, "div", 31)(2, "h5", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppointmentDetailsComponent_div_0_div_1_div_14_div_13_Template, 10, 9, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).ngrxLet;
    let tmp_2_0;
    let tmp_4_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 11, "ng.appointments.details.date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "appointment-date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 13, (tmp_2_0 = vm_r1.appointment == null ? null : vm_r1.appointment.dayLabelKey) !== null && tmp_2_0 !== undefined ? tmp_2_0 : ""), " ", vm_r1.appointment == null ? null : vm_r1.appointment.dayOfMonth, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 15, (tmp_2_0 = vm_r1.appointment == null ? null : vm_r1.appointment.monthLabelKey) !== null && tmp_2_0 !== undefined ? tmp_2_0 : ""), ", ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 17, (tmp_2_0 = vm_r1.appointment == null ? null : vm_r1.appointment.appointmentDate) !== null && tmp_2_0 !== undefined ? tmp_2_0 : "", "yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "appointment-time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 20, (tmp_4_0 = vm_r1.appointment == null ? null : vm_r1.appointment.timeslotCodeLabelKey) !== null && tmp_4_0 !== undefined ? tmp_4_0 : ""), " (", vm_r1.appointment == null ? null : vm_r1.appointment.timeSlot == null ? null : vm_r1.appointment.timeSlot.startTime, " - ", vm_r1.appointment == null ? null : vm_r1.appointment.timeSlot == null ? null : vm_r1.appointment.timeSlot.endTime, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (vm_r1.appointment == null ? null : vm_r1.appointment.isUpcomingAppointment) && !(vm_r1.appointment == null ? null : vm_r1.appointment.isScheduledAppointment));
  }
}
function AppointmentDetailsComponent_div_0_div_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AppointmentDetailsComponent_div_0_div_1_div_17_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "product-name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r46.name, " ");
  }
}
function AppointmentDetailsComponent_div_0_div_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42)(1, "h5", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppointmentDetailsComponent_div_0_div_1_div_17_p_4_Template, 2, 2, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).ngrxLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "ng.appointments.details.product"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", vm_r1.appointment == null ? null : vm_r1.appointment.productsInfo);
  }
}
const _c1 = a0 => ({
  appointmentCost: a0
});
function AppointmentDetailsComponent_div_0_div_1_div_18_div_1_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "replaceDecimals");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "price");
  }
  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).ngrxLet;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 2, "ng.appointments.details.cost.info", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, (tmp_0_0 = vm_r1.appointment == null ? null : vm_r1.appointment.cost) !== null && tmp_0_0 !== undefined ? tmp_0_0 : "")))), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "appointment-cost");
  }
}
function AppointmentDetailsComponent_div_0_div_1_div_18_div_1_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "ng.appointments.date-fromfree.lbl"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "appointment-cost");
  }
}
function AppointmentDetailsComponent_div_0_div_1_div_18_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h5", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppointmentDetailsComponent_div_0_div_1_div_18_div_1_p_4_Template, 4, 11, "p", 44)(5, AppointmentDetailsComponent_div_0_div_1_div_18_div_1_p_5_Template, 2, 4, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).ngrxLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, "ng.appointments.details." + _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, vm_r1.appointment == null ? null : vm_r1.appointment.appointmentType) + "-cost.lbl"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (vm_r1.appointment == null ? null : vm_r1.appointment.cost) !== "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (vm_r1.appointment == null ? null : vm_r1.appointment.cost) === "0");
  }
}
function AppointmentDetailsComponent_div_0_div_1_div_18_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h5", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).ngrxLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "appointment-free-cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, "ng.appointments.details." + _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, vm_r1.appointment == null ? null : vm_r1.appointment.appointmentType) + "-cost.lbl"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 7, "ng.appointments.date-fromfree.lbl"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function AppointmentDetailsComponent_div_0_div_1_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppointmentDetailsComponent_div_0_div_1_div_18_div_1_Template, 6, 7, "div", 14)(2, AppointmentDetailsComponent_div_0_div_1_div_18_div_2_Template, 6, 9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).ngrxLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", vm_r1.appointment == null ? null : vm_r1.appointment.cost);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(vm_r1.appointment == null ? null : vm_r1.appointment.cost) && !(vm_r1.appointment == null ? null : vm_r1.appointment.isRepairAppointment));
  }
}
function AppointmentDetailsComponent_div_0_div_1_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AppointmentDetailsComponent_div_0_div_1_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46)(1, "h5", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "ng.appointments.lbl.cable-service"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, "ng.appointments.lbl.cable-appointment-details"), " ");
  }
}
function AppointmentDetailsComponent_div_0_div_1_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46)(1, "h5", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "ng.appointments.lbl.repair-cost"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, "ng.appointments.details.cost-policy.lbl"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function AppointmentDetailsComponent_div_0_div_1_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "outdoor-appointment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, "ng.appointments.details-outdoor-appointment"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function AppointmentDetailsComponent_div_0_div_1_div_35_tg_appointment_available_time_slots_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tg-appointment-available-time-slots", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedTimeSlot", function AppointmentDetailsComponent_div_0_div_1_div_35_tg_appointment_available_time_slots_1_Template_tg_appointment_available_time_slots_selectedTimeSlot_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r57.onValidSelectedTimeSlot($event));
    })("loadMoreTimeSlot", function AppointmentDetailsComponent_div_0_div_1_div_35_tg_appointment_available_time_slots_1_Template_tg_appointment_available_time_slots_loadMoreTimeSlot_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58);
      const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).ngrxLet;
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r59.loadMoreAvailableSlot($event, vm_r1.appointment));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).ngrxLet;
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedAppointment", vm_r1.appointment)("availableTimeSlots", ctx_r56.availableTimeSlots)("updatedSlots", ctx_r56.updatedSlots)("startDate", ctx_r56.startDate)("disableLoadMore", ctx_r56.disableLoadMoreSlots);
  }
}
function AppointmentDetailsComponent_div_0_div_1_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppointmentDetailsComponent_div_0_div_1_div_35_tg_appointment_available_time_slots_1_Template, 1, 5, "tg-appointment-available-time-slots", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.showDatePicker);
  }
}
function AppointmentDetailsComponent_div_0_div_1_div_37_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppointmentDetailsComponent_div_0_div_1_div_37_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64);
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r63.cancelReschedule());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "ng.appointments.date-cancelreschedule.lbl"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "cancel-reschedule");
  }
}
function AppointmentDetailsComponent_div_0_div_1_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppointmentDetailsComponent_div_0_div_1_div_37_button_1_Template, 2, 4, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppointmentDetailsComponent_div_0_div_1_div_37_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67);
      const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).ngrxLet;
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r65.rescheduleAppointment(vm_r1.appointment));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).ngrxLet;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(vm_r1.appointment == null ? null : vm_r1.appointment.isNewAppointment));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r15.validSelectedTimeSlot)("ngClass", !ctx_r15.validSelectedTimeSlot ? "disabled-state" : "")("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, "ng.appointments.date-" + ((vm_r1.appointment == null ? null : vm_r1.appointment.isNewAppointment) ? "requestappointment" : "rescheduleappointment") + ".lbl"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "confirm-reschedule");
  }
}
function AppointmentDetailsComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppointmentDetailsComponent_div_0_div_1_tg_appointment_cancellation_1_Template, 1, 1, "tg-appointment-cancellation", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "tg-scheduled-appointment-info", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5)(4, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppointmentDetailsComponent_div_0_div_1_span_5_Template, 3, 6, "span", 7)(6, AppointmentDetailsComponent_div_0_div_1_span_6_Template, 3, 6, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "h4", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "tg-appointment-notification", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11)(12, "div", 12)(13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppointmentDetailsComponent_div_0_div_1_div_14_Template, 14, 22, "div", 13)(15, AppointmentDetailsComponent_div_0_div_1_div_15_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AppointmentDetailsComponent_div_0_div_1_div_17_Template, 5, 4, "div", 16)(18, AppointmentDetailsComponent_div_0_div_1_div_18_Template, 3, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AppointmentDetailsComponent_div_0_div_1_div_19_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15)(21, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "h5", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AppointmentDetailsComponent_div_0_div_1_div_30_Template, 7, 6, "div", 21)(31, AppointmentDetailsComponent_div_0_div_1_div_31_Template, 6, 6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AppointmentDetailsComponent_div_0_div_1_div_32_Template, 7, 4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "tg-appointment-additional-info", 23)(34, "tg-post-installation-info", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AppointmentDetailsComponent_div_0_div_1_div_35_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "tg-appointment-contact-detail", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, AppointmentDetailsComponent_div_0_div_1_div_37_Template, 4, 7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngrxLet;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.showCancelDialog);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isScheduledAppointment", vm_r1.appointment == null ? null : vm_r1.appointment.isScheduledAppointment)("appointmentType", vm_r1.appointment == null ? null : vm_r1.appointment.appointmentType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "appointment-status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", vm_r1.appointment == null ? null : vm_r1.appointment.isUpcomingAppointment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(vm_r1.appointment == null ? null : vm_r1.appointment.isUpcomingAppointment));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 36, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 38, "ng.appointments.details-" + (vm_r1.appointment == null ? null : vm_r1.appointment.appointmentType) + ".lbl")), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "appointment-type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowFiberRepairChanges", ctx_r2.allowFiberRepairChanges)("selectedAppointment", vm_r1.appointment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(vm_r1.appointment == null ? null : vm_r1.appointment.isNewAppointment));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(vm_r1.appointment == null ? null : vm_r1.appointment.isNewAppointment));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (vm_r1.appointment == null ? null : vm_r1.appointment.productsInfo == null ? null : vm_r1.appointment.productsInfo.length) && !vm_r1.appointment.isRepairAppointment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", vm_r1.appointment == null ? null : vm_r1.appointment.isUpcomingAppointment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (vm_r1.appointment == null ? null : vm_r1.appointment.productsInfo == null ? null : vm_r1.appointment.productsInfo.length) && !vm_r1.appointment.isRepairAppointment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "appointment-address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 40, "ng.appointments.details." + _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 42, vm_r1.appointment == null ? null : vm_r1.appointment.appointmentType) + "-address.lbl"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", vm_r1.appointment == null ? null : vm_r1.appointment.address == null ? null : vm_r1.appointment.address.street, " ", vm_r1.appointment == null ? null : vm_r1.appointment.address == null ? null : vm_r1.appointment.address.houseNumber, "", (vm_r1.appointment == null ? null : vm_r1.appointment.address == null ? null : vm_r1.appointment.address.boxNumber) ? "/" + (vm_r1.appointment == null ? null : vm_r1.appointment.address == null ? null : vm_r1.appointment.address.boxNumber) : "", ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", vm_r1.appointment == null ? null : vm_r1.appointment.address == null ? null : vm_r1.appointment.address.zip, " ", vm_r1.appointment == null ? null : vm_r1.appointment.address == null ? null : vm_r1.appointment.address.city, ", ", vm_r1.appointment == null ? null : vm_r1.appointment.address == null ? null : vm_r1.appointment.address.country, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "appointment-cost-policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", vm_r1.appointment == null ? null : vm_r1.appointment.cableAppointment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", vm_r1.appointment == null ? null : vm_r1.appointment.isRepairAppointment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.showOutdoorAppointmentInfo(vm_r1.appointment, vm_r1.outdoorAppointment));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appointmentStatus", vm_r1.appointment == null ? null : vm_r1.appointment.appointmentStatus)("usefulInformationHtml", ctx_r2.usefulInformationHtml);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appointmentStatus", vm_r1.appointment == null ? null : vm_r1.appointment.appointmentStatus)("postInstallationHtml", ctx_r2.postInstallationHtml);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngrxLet", ctx_r2.availableTimeSlotsVM$);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isMaster", ctx_r2.isMaster)("appointment", vm_r1.appointment)("showEditContactDetail", ctx_r2.showEditContactDetail);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.showDatePicker);
  }
}
function AppointmentDetailsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppointmentDetailsComponent_div_0_div_1_Template, 38, 44, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vm_r1 = ctx.ngrxLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", vm_r1.appointment);
  }
}
const _c2 = (a0, a1) => ({
  outdoorAppointment: a0,
  appointment: a1
});
const DATE = 'appointments.date';
const TIME = 'appointments.time';
let AppointmentDetailsComponent = class AppointmentDetailsComponent {
  isMaster = true;
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
  timeSlotsComponent;
  contactDetailFormComponent;
  appointmentFacade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_1__.AppointmentFacade);
  datePipe = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe);
  translateService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService);
  http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient);
  sanitizer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.DomSanitizer);
  domService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_13__.DomService);
  STATUS_COMPLETED = _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_1__.AppointmentStatusEnum.COMPLETED;
  STATUS_NEW = _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_1__.AppointmentStatusEnum.NEW;
  SMS = _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_1__.NotificationMethodEnum.SMS;
  VOICE = _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_1__.NotificationMethodEnum.VOICE;
  EMAIL = _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_1__.NotificationMethodEnum.EMAIL;
  NUMBER_OF_SLOTS_PER_PAGE = 13;
  usefulInformationHtml = '';
  postInstallationHtml = '';
  showDatePicker = false;
  availableTimeSlots = [];
  updatedSlots = [];
  validSelectedTimeSlot = false;
  startDate;
  availableSlotEndDate;
  disableLoadMoreSlots = false;
  showCancelDialog = false;
  showEditContactDetail = false;
  selectedAppointment$ = this.appointmentFacade.selectedAppointment$;
  availableTimeSlots$ = this.appointmentFacade.availableTimeSlots$;
  outdoorAppointment$ = this.appointmentFacade.outdoorAppointment$;
  selectedAppointmentVM$ = this.selectedAppointment$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(selectedAppointment => {
    if (selectedAppointment) {
      this.setUseFulInformationHtml(selectedAppointment.appointmentType, selectedAppointment.fiberAppointment);
      this.showDatePicker = false;
      this.showEditContactDetail = false;
      this.validSelectedTimeSlot = false;
      if (selectedAppointment.isNewAppointment && !selectedAppointment.fiberAppointment && this.isMaster) {
        this.showDatePicker = true;
        this.showEditContactDetail = true;
        this.getAvailableTimeSlots(selectedAppointment);
      }
      const date = selectedAppointment.appointmentDate ? new Date(selectedAppointment.appointmentDate) : undefined;
      selectedAppointment = {
        ...selectedAppointment,
        appointmentSubTypeMessage: this.getAppointmentsSubTypeMessage(selectedAppointment),
        dayOfMonth: date ? date.toLocaleString('en-US', {
          day: 'numeric'
        }) : '',
        dayLabelKey: date ? this.getDayOfWeekLabelKey(date.toLocaleString('en-US', {
          weekday: 'long'
        })) : '',
        monthLabelKey: date ? this.getMonthLabelKey(date.toLocaleString('en-US', {
          month: 'long'
        })) : '',
        timeslotCodeLabelKey: selectedAppointment?.timeSlot?.periodOfDay ? this.getTimeslotCodeLabelKey(selectedAppointment.timeSlot.periodOfDay.toString()) : ''
      };
    }
    return selectedAppointment;
  }));
  availableTimeSlotsVM$ = this.availableTimeSlots$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(availableTimeSlots => {
    const availableNCTimeSlotList = this.mapToNCTimeSlotList(availableTimeSlots);
    if (availableNCTimeSlotList) {
      const availableTimeSlotList = this.addMissingSlots(availableNCTimeSlotList);
      this.availableTimeSlots = this.getTransformedSlots(availableTimeSlotList);
      this.updatedSlots = this.getTransformedSlots(availableTimeSlotList);
      this.availableSlotEndDate = this.availableTimeSlots.reduce((maxDate, currentItem) => currentItem.date > maxDate ? currentItem.date : maxDate, this.availableTimeSlots[0]?.date);
      this.setDisableLoadMoreSlots();
    }
  }));
  requestRescheduleAppointment(appointment) {
    this.showDatePicker = true;
    this.domService.scrollToElement('tg-appointment-available-time-slots');
    this.getAvailableTimeSlots(appointment);
  }
  toggleCancelDialog(value) {
    this.showCancelDialog = value;
  }
  rescheduleAppointment(selectedAppointment) {
    if (this.contactDetailFormComponent?.contactDetailFormComponent?.appointmentContactForm?.touched) {
      this.contactDetailFormComponent?.contactDetailFormComponent.saveAppointmentContact();
    }
    const selectedTimeSlot = this.timeSlotsComponent.timeSlotForm.get('appointment')?.value;
    const moveOrScheduleAppointment = selectedAppointment?.appointmentType === _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_1__.AppointmentTypeEnum.MOVE && !selectedAppointment?.isPostponedAppointmentNeedsReschedule ? _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_1__.AppointmentTypeEnum.MOVE : _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_1__.AppointmentTypeEnum.SCHEDULE;
    let selectedTimeSlotRequest = {};
    if (selectedTimeSlot?.date && selectedTimeSlot?.moment) {
      selectedTimeSlotRequest = {
        appointmentType: selectedAppointment?.isNewAppointment || selectedAppointment?.isPostponedAppointmentNeedsReschedule ? moveOrScheduleAppointment : _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_1__.AppointmentTypeEnum.RESCHEDULE,
        availabilityId: this.getSelectedAvailabilityId(selectedTimeSlot.date, selectedTimeSlot.moment),
        date: selectedTimeSlot.date,
        salesOrderId: this.getSalesOrderId(selectedAppointment)
      };
    }
    this.domService.scrollToStartElement('#appointment-overview');
    this.appointmentFacade.rescheduleAppointment(selectedTimeSlotRequest, selectedAppointment?.appointmentId || '');
  }
  getSalesOrderId(selectedAppointment) {
    return selectedAppointment?.appointmentType === _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_1__.AppointmentTypeEnum.MOVE && !selectedAppointment?.isNewAppointment && selectedAppointment?.salesOrderId ? selectedAppointment?.salesOrderId : '';
  }
  cancelReschedule() {
    this.showDatePicker = false;
  }
  onValidSelectedTimeSlot($event) {
    this.validSelectedTimeSlot = $event;
  }
  loadMoreAvailableSlot(loadPreviousSlots, appointment) {
    this.validSelectedTimeSlot = false;
    const date = this.startDate.getDate();
    const newStartDate = loadPreviousSlots ? date - this.NUMBER_OF_SLOTS_PER_PAGE : date + this.NUMBER_OF_SLOTS_PER_PAGE;
    this.startDate.setDate(newStartDate);
    this.getAvailableTimeSlots(appointment, this.startDate);
  }
  setDisableLoadMoreSlots() {
    this.startDate?.setHours(0, 0, 0, 0);
    this.availableSlotEndDate?.setHours(0, 0, 0, 0);
    if (this.startDate >= this.availableSlotEndDate) {
      this.disableLoadMoreSlots = true;
    }
  }
  getAvailableTimeSlots(appointment, date) {
    const today = new Date();
    this.startDate = date ?? today;
    const installationDateAtNewAddress = appointment?.installationDateAtNewAddress ? new Date(appointment?.installationDateAtNewAddress) : today;
    if (installationDateAtNewAddress !== undefined && installationDateAtNewAddress > this.startDate) {
      this.startDate = installationDateAtNewAddress;
    }
    this.appointmentFacade.getAvailableTimeSlots(this.startDate, appointment?.appointmentId || '');
  }
  getDayOfWeekLabelKey(dayOfWeek) {
    return _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_7__.LabelUtil.getLabelKeyWithTypeLabel([DATE, dayOfWeek.toLowerCase()].join('-'));
  }
  getMonthLabelKey(month) {
    return _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_7__.LabelUtil.getLabelKeyWithTypeLabel([DATE, month.toLowerCase()].join('-'));
  }
  getTimeslotCodeLabelKey(timeslotCode) {
    return _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_7__.LabelUtil.getLabelKeyWithTypeLabel([TIME, timeslotCode.toLowerCase()].join('-'));
  }
  setUseFulInformationHtml(appointmentType, isFiberAppointment) {
    const urlMapping = {
      [_product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_1__.AppointmentTypeEnum.MOVE]: {
        usefulInformationUrl: isFiberAppointment ? this.usefulInformationFiberMoveUrl : this.usefulInformationMoveUrl,
        postInstallationInstructionUrl: isFiberAppointment ? this.postInstallationInstructionFiberMoveUrl : this.postInstallationInstructionMoveUrl
      },
      [_product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_1__.AppointmentTypeEnum.REPAIR]: {
        usefulInformationUrl: isFiberAppointment ? this.usefulInformationFiberRepairUrl : this.usefulInformationRepairUrl,
        postInstallationInstructionUrl: isFiberAppointment ? this.postInstallationInstructionFiberRepairUrl : this.postInstallationInstructionRepairUrl
      },
      [_product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_1__.AppointmentTypeEnum.INSTALL]: {
        usefulInformationUrl: isFiberAppointment ? this.usefulInformationFiberInstallUrl : this.usefulInformationInstallUrl,
        postInstallationInstructionUrl: isFiberAppointment ? this.postInstallationInstructionFiberInstallUrl : this.postInstallationInstructionInstallUrl
      }
    };
    if (appointmentType) {
      const {
        usefulInformationUrl,
        postInstallationInstructionUrl
      } = urlMapping[appointmentType];
      this.getUsefulInfoHtml(usefulInformationUrl, postInstallationInstructionUrl);
    }
  }
  getUsefulInfoHtml(url, postInstallUrl) {
    this.convertInfoToHtml(url).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__.untilDestroyed)(this)).subscribe(usefulInfoHtml => {
      this.usefulInformationHtml = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.isDevMode)() ? url : usefulInfoHtml;
    });
    this.convertInfoToHtml(postInstallUrl).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__.untilDestroyed)(this)).subscribe(postInstallHtml => {
      this.postInstallationHtml = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.isDevMode)() ? postInstallUrl : postInstallHtml;
    });
  }
  convertInfoToHtml(url) {
    return this.http.get(url, {
      responseType: 'text'
    }).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__.untilDestroyed)(this), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(response => this.sanitizer?.bypassSecurityTrustHtml(response)));
  }
  getAppointmentsSubTypeMessage(appointment) {
    switch (appointment.appointmentSubType?.toLowerCase()) {
      case 'repair':
        return this.translateService.instant('ng.appointments.lbl.repair-appointment-subtype');
      case 'home-delivery':
        return this.translateService.instant('ng.appointments.lbl.homedelivery-appointment-subtype', {
          startTime: appointment?.timeSlot?.startTime,
          endTime: appointment?.timeSlot?.endTime,
          date: this.datePipe.transform(appointment?.appointmentDate, 'dd MMMM')?.toLowerCase()
        });
      case 'remote-support':
        return this.translateService.instant('ng.appointments.lbl.remote-support-appointment-subtype', {
          startTime: appointment?.timeSlot?.startTime,
          endTime: appointment?.timeSlot?.endTime,
          date: this.datePipe.transform(appointment?.appointmentDate, 'dd MMMM')?.toLowerCase()
        });
      default:
        return this.translateService.instant('ng.appointments.lbl.other-appointment-subtype');
    }
  }
  mapToNCTimeSlotList(rawAvailableTimeSlots) {
    const slots = new _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_7__.NCTimeSlotList();
    slots.availabilities = rawAvailableTimeSlots.map(availableTimeSlot => {
      return this.mapToNCTimeSlot(availableTimeSlot);
    });
    return slots;
  }
  mapToNCTimeSlot(rawAvailableTimeSlot) {
    const appointmentAvailability = new _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_7__.NCTimeSlot();
    appointmentAvailability.date = new Date(rawAvailableTimeSlot.date);
    appointmentAvailability.timeSlots = rawAvailableTimeSlot.timeSlots && rawAvailableTimeSlot.timeSlots.map(timeSlot => {
      return this.mapToTimeSlotAvailability(timeSlot);
    });
    return appointmentAvailability;
  }
  mapToTimeSlotAvailability(timeSlot) {
    const availabilitySlot = new _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_7__.NCTimeSlotAvailability();
    availabilitySlot.availabilityId = timeSlot.availabilityId;
    availabilitySlot.code = _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_7__.TimeslotMomentEnum[_product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_1__.TimeSlotEnum[timeSlot.timeSlotCode]];
    availabilitySlot.specUrl = timeSlot.specUrl;
    return availabilitySlot;
  }
  getTransformedSlots(availableTimeSlotList) {
    return availableTimeSlotList ? _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_7__.AppointmentTransformerUtil.doTransform(availableTimeSlotList.availabilities, _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_7__.AppointmentPickerConsumerTypeEnum.NC).slots : [];
  }
  getSelectedAvailabilityId(date, timeSlot) {
    const filterByDate = this.availableTimeSlots.find(availableSlot => availableSlot.date.getDate() === date.getDate());
    const filterByTimeSlot = filterByDate?.timeSlots.find(slot => slot.code === timeSlot);
    return filterByTimeSlot?.availabiltyId ? filterByTimeSlot?.availabiltyId : '';
  }
  addMissingSlots(ncTimeSlotList) {
    const date = this.startDate ?? new Date();
    const appointmentDates = this.getFixedDates(date);
    appointmentDates.isFtthAppointment = ncTimeSlotList.isFtthAppointment;
    appointmentDates.availabilities = appointmentDates.availabilities.map(appointmentDate => {
      const matchingDate = ncTimeSlotList.availabilities.find(availableDate => this.isSameDate(appointmentDate.date, availableDate.date));
      return matchingDate ? matchingDate : appointmentDate;
    });
    return appointmentDates;
  }
  getFixedDates(startDate) {
    const staticDates = new _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_7__.NCTimeSlotList();
    const datesArray = Array.from({
      length: 14
    }, (_, index) => {
      const date = new Date(startDate);
      date.setDate(date.getDate() + index);
      return date;
    });
    staticDates.availabilities = datesArray.map(date => {
      const slots = new _telenet_ng_lib_form__WEBPACK_IMPORTED_MODULE_7__.NCTimeSlot();
      slots.date = new Date(date);
      slots.timeSlots = [];
      return slots;
    });
    return staticDates;
  }
  isSameDate(date1, date2) {
    return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
  }
  showOutdoorAppointmentInfo(appointment, outdoorAppointment) {
    return !!outdoorAppointment && !!outdoorAppointment.locationIds && outdoorAppointment?.locationIds?.some(outdoorAppointment => outdoorAppointment === appointment.address?.locationId);
  }
  static ɵfac = function AppointmentDetailsComponent_Factory(t) {
    return new (t || AppointmentDetailsComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppointmentDetailsComponent,
    selectors: [["tg-appointment-details"]],
    viewQuery: function AppointmentDetailsComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_appointment_available_time_slots_appointment_available_time_slots_component__WEBPACK_IMPORTED_MODULE_10__.AppointmentAvailableTimeSlotsComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_appointment_contact_detail_appointment_contact_detail_component__WEBPACK_IMPORTED_MODULE_5__.AppointmentContactDetailComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.timeSlotsComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contactDetailFormComponent = _t.first);
      }
    },
    inputs: {
      isMaster: "isMaster",
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
      postInstallationInstructionFiberInstallUrl: "postInstallationInstructionFiberInstallUrl"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 4,
    consts: [["class", "appointments__content mt--xl mt--n--md", 4, "ngrxLet"], [1, "appointments__content", "mt--xl", "mt--n--md"], [4, "ngIf"], [3, "selectedAppointment", "closeCancellation", 4, "ngIf"], [3, "isScheduledAppointment", "appointmentType"], [1, "display--flex", "flex-direction--column", "flex-direction--row--md"], [1, "pb--xxxs", "pb--n--md", "pr--xs"], ["class", "status-indicator", 3, "ngClass", "innerHTML", 4, "ngIf"], ["class", "status-indicator", 3, "ngClass", "innerHtml", 4, "ngIf"], [1, "mt-0", 3, "innerHtml"], [1, "mb--xxs", 3, "allowFiberRepairChanges", "selectedAppointment"], [1, "content-section", "mt--m"], [1, "p--xl--md", "p--m"], ["class", "display--flex flex-wrap--wrap", 4, "ngIf"], ["class", "mb--xl--md mb--l", 4, "ngIf"], [1, "display--flex", "flex-wrap--wrap"], ["class", "col-md-6 col-12 p--n mb--xl--md mb--l", 4, "ngIf"], ["class", "col-md-6 col-12 p--n", 4, "ngIf"], [1, "col-md-6", "col-12", "p--n"], [1, "mt-0", 3, "innerHTML"], [1, "font--body-regular", "m-0"], ["class", "mt--n--md mt--l", 4, "ngIf"], ["class", "mt--xl--md mt--l", 4, "ngIf"], [3, "appointmentStatus", "usefulInformationHtml"], [3, "appointmentStatus", "postInstallationHtml"], [4, "ngrxLet"], [3, "isMaster", "appointment", "showEditContactDetail"], ["class", "fl-right--md text-align--center pt--g--md pt--l", 4, "ngIf"], [3, "selectedAppointment", "closeCancellation"], [1, "status-indicator", 3, "ngClass", "innerHTML"], [1, "status-indicator", 3, "ngClass", "innerHtml"], [1, "col-md-6", "col-12", "mb--xl--md", "mb--l", "p--n"], [1, "mt-0"], ["class", "col-md-6 col-12 mb--xl--md mb--l p--n", 4, "ngIf"], ["showLink", ""], ["class", "display--flex pt--xs", 4, "ngIf"], [1, "display--flex", "pt--xs"], [3, "ngTemplateOutlet"], [1, "pr--l"], ["href", "javascript:void(0)", 1, "link", "font--body-regular-bold", 3, "ngClass", "click"], [1, "mb--xl--md", "mb--l"], [1, "divider", "divider--xxs__very-light-grey"], [1, "col-md-6", "col-12", "p--n", "mb--xl--md", "mb--l"], ["class", "font--body-regular m-0", 4, "ngFor", "ngForOf"], ["class", "font--body-regular m-0", 3, "innerHtml", 4, "ngIf"], [1, "font--body-regular", "m-0", 3, "innerHtml"], [1, "mt--n--md", "mt--l"], [1, "mb-0", "cursor--default"], [1, "font--body-regular", "m-0", "pt--xs"], [1, "cursor--default", "mt-0"], [1, "font--body-regular", "m-0", "pt--xs", 3, "innerHTML"], [1, "mt--xl--md", "mt--l"], [1, "divider", "divider--xxs__very-light-grey", "mb--xl--md", "mb--l"], [1, "display--flex"], ["data-cy", "notification-info-box-icon", 1, "icon", "icon-sm", "icon-information", "status-indicator--neutral", "info", "color-white", "font--body-small", "mr--s"], [3, "innerHTML"], [3, "selectedAppointment", "availableTimeSlots", "updatedSlots", "startDate", "disableLoadMore", "selectedTimeSlot", "loadMoreTimeSlot", 4, "ngIf"], [3, "selectedAppointment", "availableTimeSlots", "updatedSlots", "startDate", "disableLoadMore", "selectedTimeSlot", "loadMoreTimeSlot"], [1, "fl-right--md", "text-align--center", "pt--g--md", "pt--l"], ["class", "button button--secondary", 3, "innerHTML", "click", 4, "ngIf"], [1, "button", "button--primary", "button--alternate", "mt--m", "mt--n--sm", 3, "disabled", "ngClass", "innerHTML", "click"], [1, "button", "button--secondary", 3, "innerHTML", "click"]],
    template: function AppointmentDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppointmentDetailsComponent_div_0_Template, 2, 1, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngrxLet", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c2, ctx.outdoorAppointment$, ctx.selectedAppointmentVM$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.LowerCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe, _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_1__.AppointmentNgrxModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe, _appointment_additional_info_appointment_additional_info_component__WEBPACK_IMPORTED_MODULE_4__.AppointmentAdditionalInfoComponent, _appointment_contact_detail_appointment_contact_detail_component__WEBPACK_IMPORTED_MODULE_5__.AppointmentContactDetailComponent, _product_journey_appointments_ui__WEBPACK_IMPORTED_MODULE_6__.PhoneNumberPipe, _product_journey_appointments_ui__WEBPACK_IMPORTED_MODULE_6__.ReplaceDecimalsPipe, _product_journey_appointments_ui__WEBPACK_IMPORTED_MODULE_6__.PricePipe, _appointment_notification_appointment_notification_component__WEBPACK_IMPORTED_MODULE_8__.AppointmentNotificationComponent, _product_journey_appointments_ui__WEBPACK_IMPORTED_MODULE_6__.ScheduledAppointmentInfoComponent, _product_journey_appointments_ui__WEBPACK_IMPORTED_MODULE_6__.PostInstallationInfoComponent, _appointment_available_time_slots_appointment_available_time_slots_component__WEBPACK_IMPORTED_MODULE_10__.AppointmentAvailableTimeSlotsComponent, _ngrx_component__WEBPACK_IMPORTED_MODULE_16__.LetDirective, _appointment_cancellation_appointment_cancellation_component__WEBPACK_IMPORTED_MODULE_11__.AppointmentCancellationComponent],
    encapsulation: 2
  });
};
AppointmentDetailsComponent = __decorate([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__.UntilDestroy)()], AppointmentDetailsComponent);


/***/ }),

/***/ 12027:
/*!**************************************************************************************************************************************************!*\
  !*** ./libs/install/product-journey/appointments/feat-appointment-detail/src/lib/appointment-notification/appointment-notification.component.ts ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppointmentNotificationComponent: () => (/* binding */ AppointmentNotificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @product-journey/appointments/data-access */ 34098);
/* harmony import */ var _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);






function AppointmentNotificationComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 4)(2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-cy", "appointment-schedule-success");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 2, "ng.appointments.confirm-success"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
  }
}
function AppointmentNotificationComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 4)(2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-cy", "appointment-reschedule-success");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 2, "ng.appointments.rescheduled.confirm-success"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
  }
}
function AppointmentNotificationComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 4)(2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, "ng.appointments.contact.save-success"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
  }
}
function AppointmentNotificationComponent_div_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 4)(2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, "ng.appointments.cancellation.success-message"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
  }
}
function AppointmentNotificationComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-cy", "repair-appointment-subtype-message");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r5.selectedAppointment.appointmentSubTypeMessage, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
  }
}
function AppointmentNotificationComponent_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 10)(2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, "ng.appointments.information.message"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
  }
}
function AppointmentNotificationComponent_div_0_ng_container_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-cy", "not-bookable-appointment");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 2, "ng.appointments.lbl.ftth-message"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
  }
}
function AppointmentNotificationComponent_div_0_ng_container_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-cy", "fiber-not-repair-scheduled-ftth-message");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 2, "ng.appointments.lbl.scheduled-ftth-message"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
  }
}
function AppointmentNotificationComponent_div_0_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AppointmentNotificationComponent_div_0_ng_container_7_div_1_Template, 5, 4, "div", 2)(2, AppointmentNotificationComponent_div_0_ng_container_7_div_2_Template, 5, 4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r7.selectedAppointment == null ? null : ctx_r7.selectedAppointment.fiberAppointment) && !(ctx_r7.selectedAppointment == null ? null : ctx_r7.selectedAppointment.timeSlot == null ? null : ctx_r7.selectedAppointment.timeSlot.startTime) && !ctx_r7.selectedAppointment.isRepairAppointment);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r7.selectedAppointment == null ? null : ctx_r7.selectedAppointment.fiberAppointment) && (ctx_r7.selectedAppointment == null ? null : ctx_r7.selectedAppointment.timeSlot == null ? null : ctx_r7.selectedAppointment.timeSlot.startTime) && !ctx_r7.selectedAppointment.isRepairAppointment);
  }
}
function AppointmentNotificationComponent_div_0_ng_container_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-cy", "not-allowed-fiber-repair-message");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 2, "ng.appointments.lbl.ftth-message"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
  }
}
function AppointmentNotificationComponent_div_0_ng_container_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-cy", "fiber-scheduled-ftth-message");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 2, "ng.appointments.lbl.scheduled-ftth-message"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
  }
}
function AppointmentNotificationComponent_div_0_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AppointmentNotificationComponent_div_0_ng_container_8_div_1_Template, 5, 4, "div", 2)(2, AppointmentNotificationComponent_div_0_ng_container_8_div_2_Template, 5, 4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r8.selectedAppointment == null ? null : ctx_r8.selectedAppointment.fiberAppointment) && !(ctx_r8.selectedAppointment == null ? null : ctx_r8.selectedAppointment.timeSlot == null ? null : ctx_r8.selectedAppointment.timeSlot.startTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r8.selectedAppointment == null ? null : ctx_r8.selectedAppointment.fiberAppointment) && (ctx_r8.selectedAppointment == null ? null : ctx_r8.selectedAppointment.timeSlot == null ? null : ctx_r8.selectedAppointment.timeSlot.startTime));
  }
}
function AppointmentNotificationComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AppointmentNotificationComponent_div_0_div_1_Template, 4, 4, "div", 1)(2, AppointmentNotificationComponent_div_0_div_2_Template, 4, 4, "div", 1)(3, AppointmentNotificationComponent_div_0_div_3_Template, 4, 3, "div", 1)(4, AppointmentNotificationComponent_div_0_div_4_Template, 4, 3, "div", 1)(5, AppointmentNotificationComponent_div_0_div_5_Template, 4, 2, "div", 2)(6, AppointmentNotificationComponent_div_0_div_6_Template, 4, 3, "div", 2)(7, AppointmentNotificationComponent_div_0_ng_container_7_Template, 3, 2, "ng-container", 0)(8, AppointmentNotificationComponent_div_0_ng_container_8_Template, 3, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.selectedAppointment == null ? null : ctx_r0.selectedAppointment.isScheduleAppointmentSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.selectedAppointment == null ? null : ctx_r0.selectedAppointment.isRescheduleAppointmentSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx_r0.selectedAppointment == null ? null : ctx_r0.selectedAppointment.isNewAppointment) && ctx_r0.selectedAppointment.isSaveContactSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.selectedAppointment == null ? null : ctx_r0.selectedAppointment.isAppointmentCancellationSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.selectedAppointment == null ? null : ctx_r0.selectedAppointment.isRepairAppointment);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r0.selectedAppointment == null ? null : ctx_r0.selectedAppointment.isUpcomingAppointment) && !ctx_r0.selectedAppointment.isRepairAppointment && !(ctx_r0.selectedAppointment == null ? null : ctx_r0.selectedAppointment.fiberAppointment));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.allowFiberRepairChanges);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.allowFiberRepairChanges);
  }
}
class AppointmentNotificationComponent {
  allowFiberRepairChanges;
  selectedAppointment;
  static ɵfac = function AppointmentNotificationComponent_Factory(t) {
    return new (t || AppointmentNotificationComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AppointmentNotificationComponent,
    selectors: [["tg-appointment-notification"]],
    inputs: {
      allowFiberRepairChanges: "allowFiberRepairChanges",
      selectedAppointment: "selectedAppointment"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [[4, "ngIf"], ["class", "notification notification--success", 4, "ngIf"], ["class", "notification notification--info", 4, "ngIf"], [1, "notification", "notification--success"], [1, "icon", "icon-check-shape", "success"], [1, "text-flow", "text-flow--h5", 3, "innerHTML"], [1, "notification", "notification--info"], [1, "icon", "icon-information-shape", "info"], [1, "text-flow", "text-flow--h5"], [3, "innerHTML"], [1, "icon-information", "info"]],
    template: function AppointmentNotificationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AppointmentNotificationComponent_div_0_Template, 9, 8, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedAppointment);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _product_journey_appointments_data_access__WEBPACK_IMPORTED_MODULE_1__.AppointmentNgrxModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 36480:
/*!******************************************************************************!*\
  !*** ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrowserModule: () => (/* binding */ BrowserModule),
/* harmony export */   By: () => (/* binding */ By),
/* harmony export */   DomSanitizer: () => (/* binding */ DomSanitizer),
/* harmony export */   EVENT_MANAGER_PLUGINS: () => (/* binding */ EVENT_MANAGER_PLUGINS),
/* harmony export */   EventManager: () => (/* binding */ EventManager),
/* harmony export */   EventManagerPlugin: () => (/* binding */ EventManagerPlugin),
/* harmony export */   HAMMER_GESTURE_CONFIG: () => (/* binding */ HAMMER_GESTURE_CONFIG),
/* harmony export */   HAMMER_LOADER: () => (/* binding */ HAMMER_LOADER),
/* harmony export */   HammerGestureConfig: () => (/* binding */ HammerGestureConfig),
/* harmony export */   HammerModule: () => (/* binding */ HammerModule),
/* harmony export */   HydrationFeatureKind: () => (/* binding */ HydrationFeatureKind),
/* harmony export */   Meta: () => (/* binding */ Meta),
/* harmony export */   REMOVE_STYLES_ON_COMPONENT_DESTROY: () => (/* binding */ REMOVE_STYLES_ON_COMPONENT_DESTROY),
/* harmony export */   Title: () => (/* binding */ Title),
/* harmony export */   TransferState: () => (/* binding */ TransferState),
/* harmony export */   VERSION: () => (/* binding */ VERSION),
/* harmony export */   bootstrapApplication: () => (/* binding */ bootstrapApplication),
/* harmony export */   createApplication: () => (/* binding */ createApplication),
/* harmony export */   disableDebugTools: () => (/* binding */ disableDebugTools),
/* harmony export */   enableDebugTools: () => (/* binding */ enableDebugTools),
/* harmony export */   makeStateKey: () => (/* binding */ makeStateKey),
/* harmony export */   platformBrowser: () => (/* binding */ platformBrowser),
/* harmony export */   provideClientHydration: () => (/* binding */ provideClientHydration),
/* harmony export */   provideProtractorTestingSupport: () => (/* binding */ provideProtractorTestingSupport),
/* harmony export */   withHttpTransferCacheOptions: () => (/* binding */ withHttpTransferCacheOptions),
/* harmony export */   withNoHttpTransferCache: () => (/* binding */ withNoHttpTransferCache),
/* harmony export */   "ɵBrowserDomAdapter": () => (/* binding */ BrowserDomAdapter),
/* harmony export */   "ɵBrowserGetTestability": () => (/* binding */ BrowserGetTestability),
/* harmony export */   "ɵDomEventsPlugin": () => (/* binding */ DomEventsPlugin),
/* harmony export */   "ɵDomRendererFactory2": () => (/* binding */ DomRendererFactory2),
/* harmony export */   "ɵDomSanitizerImpl": () => (/* binding */ DomSanitizerImpl),
/* harmony export */   "ɵHammerGesturesPlugin": () => (/* binding */ HammerGesturesPlugin),
/* harmony export */   "ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS": () => (/* binding */ INTERNAL_BROWSER_PLATFORM_PROVIDERS),
/* harmony export */   "ɵKeyEventsPlugin": () => (/* binding */ KeyEventsPlugin),
/* harmony export */   "ɵSharedStylesHost": () => (/* binding */ SharedStylesHost),
/* harmony export */   "ɵgetDOM": () => (/* reexport safe */ _angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"]),
/* harmony export */   "ɵinitDomAdapter": () => (/* binding */ initDomAdapter)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1261);
/**
 * @license Angular v17.1.0
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */







/**
 * Provides DOM operations in any browser environment.
 *
 * @security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 */
class GenericBrowserDomAdapter extends _angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵDomAdapter"] {
  constructor() {
    super(...arguments);
    this.supportsDOMEvents = true;
  }
}

/**
 * A `DomAdapter` powered by full browser DOM APIs.
 *
 * @security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 */
/* tslint:disable:requireParameterType no-console */
class BrowserDomAdapter extends GenericBrowserDomAdapter {
  static makeCurrent() {
    (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵsetRootDomAdapter"])(new BrowserDomAdapter());
  }
  onAndCancel(el, evt, listener) {
    el.addEventListener(evt, listener);
    return () => {
      el.removeEventListener(evt, listener);
    };
  }
  dispatchEvent(el, evt) {
    el.dispatchEvent(evt);
  }
  remove(node) {
    if (node.parentNode) {
      node.parentNode.removeChild(node);
    }
  }
  createElement(tagName, doc) {
    doc = doc || this.getDefaultDocument();
    return doc.createElement(tagName);
  }
  createHtmlDocument() {
    return document.implementation.createHTMLDocument('fakeTitle');
  }
  getDefaultDocument() {
    return document;
  }
  isElementNode(node) {
    return node.nodeType === Node.ELEMENT_NODE;
  }
  isShadowRoot(node) {
    return node instanceof DocumentFragment;
  }
  /** @deprecated No longer being used in Ivy code. To be removed in version 14. */
  getGlobalEventTarget(doc, target) {
    if (target === 'window') {
      return window;
    }
    if (target === 'document') {
      return doc;
    }
    if (target === 'body') {
      return doc.body;
    }
    return null;
  }
  getBaseHref(doc) {
    const href = getBaseElementHref();
    return href == null ? null : relativePath(href);
  }
  resetBaseElement() {
    baseElement = null;
  }
  getUserAgent() {
    return window.navigator.userAgent;
  }
  getCookie(name) {
    return (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵparseCookieValue"])(document.cookie, name);
  }
}
let baseElement = null;
function getBaseElementHref() {
  baseElement = baseElement || document.querySelector('base');
  return baseElement ? baseElement.getAttribute('href') : null;
}
function relativePath(url) {
  // The base URL doesn't really matter, we just need it so relative paths have something
  // to resolve against. In the browser `HTMLBaseElement.href` is always absolute.
  return new URL(url, document.baseURI).pathname;
}
class BrowserGetTestability {
  addToWindow(registry) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵglobal"]['getAngularTestability'] = (elem, findInAncestors = true) => {
      const testability = registry.findTestabilityInTree(elem, findInAncestors);
      if (testability == null) {
        throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](5103 /* RuntimeErrorCode.TESTABILITY_NOT_FOUND */, (typeof ngDevMode === 'undefined' || ngDevMode) && 'Could not find testability for element.');
      }
      return testability;
    };
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵglobal"]['getAllAngularTestabilities'] = () => registry.getAllTestabilities();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵglobal"]['getAllAngularRootElements'] = () => registry.getAllRootElements();
    const whenAllStable = callback => {
      const testabilities = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵglobal"]['getAllAngularTestabilities']();
      let count = testabilities.length;
      const decrement = function () {
        count--;
        if (count == 0) {
          callback();
        }
      };
      testabilities.forEach(testability => {
        testability.whenStable(decrement);
      });
    };
    if (!_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵglobal"]['frameworkStabilizers']) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵglobal"]['frameworkStabilizers'] = [];
    }
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵglobal"]['frameworkStabilizers'].push(whenAllStable);
  }
  findTestabilityInTree(registry, elem, findInAncestors) {
    if (elem == null) {
      return null;
    }
    const t = registry.getTestability(elem);
    if (t != null) {
      return t;
    } else if (!findInAncestors) {
      return null;
    }
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])().isShadowRoot(elem)) {
      return this.findTestabilityInTree(registry, elem.host, true);
    }
    return this.findTestabilityInTree(registry, elem.parentElement, true);
  }
}

/**
 * A factory for `HttpXhrBackend` that uses the `XMLHttpRequest` browser API.
 */
class BrowserXhr {
  build() {
    return new XMLHttpRequest();
  }
  static #_ = this.ɵfac = function BrowserXhr_Factory(t) {
    return new (t || BrowserXhr)();
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: BrowserXhr,
    factory: BrowserXhr.ɵfac
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrowserXhr, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();

/**
 * The injection token for plugins of the `EventManager` service.
 *
 * @publicApi
 */
const EVENT_MANAGER_PLUGINS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('EventManagerPlugins');
/**
 * An injectable service that provides event management for Angular
 * through a browser plug-in.
 *
 * @publicApi
 */
class EventManager {
  /**
   * Initializes an instance of the event-manager service.
   */
  constructor(plugins, _zone) {
    this._zone = _zone;
    this._eventNameToPlugin = new Map();
    plugins.forEach(plugin => {
      plugin.manager = this;
    });
    this._plugins = plugins.slice().reverse();
  }
  /**
   * Registers a handler for a specific element and event.
   *
   * @param element The HTML element to receive event notifications.
   * @param eventName The name of the event to listen for.
   * @param handler A function to call when the notification occurs. Receives the
   * event object as an argument.
   * @returns  A callback function that can be used to remove the handler.
   */
  addEventListener(element, eventName, handler) {
    const plugin = this._findPluginFor(eventName);
    return plugin.addEventListener(element, eventName, handler);
  }
  /**
   * Retrieves the compilation zone in which event listeners are registered.
   */
  getZone() {
    return this._zone;
  }
  /** @internal */
  _findPluginFor(eventName) {
    let plugin = this._eventNameToPlugin.get(eventName);
    if (plugin) {
      return plugin;
    }
    const plugins = this._plugins;
    plugin = plugins.find(plugin => plugin.supports(eventName));
    if (!plugin) {
      throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](5101 /* RuntimeErrorCode.NO_PLUGIN_FOR_EVENT */, (typeof ngDevMode === 'undefined' || ngDevMode) && `No event manager plugin found for event ${eventName}`);
    }
    this._eventNameToPlugin.set(eventName, plugin);
    return plugin;
  }
  static #_ = this.ɵfac = function EventManager_Factory(t) {
    return new (t || EventManager)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](EVENT_MANAGER_PLUGINS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: EventManager,
    factory: EventManager.ɵfac
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [EVENT_MANAGER_PLUGINS]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }], null);
})();
/**
 * The plugin definition for the `EventManager` class
 *
 * It can be used as a base class to create custom manager plugins, i.e. you can create your own
 * class that extends the `EventManagerPlugin` one.
 *
 * @publicApi
 */
class EventManagerPlugin {
  // TODO: remove (has some usage in G3)
  constructor(_doc) {
    this._doc = _doc;
  }
}

/** The style elements attribute name used to set value of `APP_ID` token. */
const APP_ID_ATTRIBUTE_NAME = 'ng-app-id';
class SharedStylesHost {
  constructor(doc, appId, nonce, platformId = {}) {
    this.doc = doc;
    this.appId = appId;
    this.nonce = nonce;
    this.platformId = platformId;
    // Maps all registered host nodes to a list of style nodes that have been added to the host node.
    this.styleRef = new Map();
    this.hostNodes = new Set();
    this.styleNodesInDOM = this.collectServerRenderedStyles();
    this.platformIsServer = (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformServer)(platformId);
    this.resetHostNodes();
  }
  addStyles(styles) {
    for (const style of styles) {
      const usageCount = this.changeUsageCount(style, 1);
      if (usageCount === 1) {
        this.onStyleAdded(style);
      }
    }
  }
  removeStyles(styles) {
    for (const style of styles) {
      const usageCount = this.changeUsageCount(style, -1);
      if (usageCount <= 0) {
        this.onStyleRemoved(style);
      }
    }
  }
  ngOnDestroy() {
    const styleNodesInDOM = this.styleNodesInDOM;
    if (styleNodesInDOM) {
      styleNodesInDOM.forEach(node => node.remove());
      styleNodesInDOM.clear();
    }
    for (const style of this.getAllStyles()) {
      this.onStyleRemoved(style);
    }
    this.resetHostNodes();
  }
  addHost(hostNode) {
    this.hostNodes.add(hostNode);
    for (const style of this.getAllStyles()) {
      this.addStyleToHost(hostNode, style);
    }
  }
  removeHost(hostNode) {
    this.hostNodes.delete(hostNode);
  }
  getAllStyles() {
    return this.styleRef.keys();
  }
  onStyleAdded(style) {
    for (const host of this.hostNodes) {
      this.addStyleToHost(host, style);
    }
  }
  onStyleRemoved(style) {
    const styleRef = this.styleRef;
    styleRef.get(style)?.elements?.forEach(node => node.remove());
    styleRef.delete(style);
  }
  collectServerRenderedStyles() {
    const styles = this.doc.head?.querySelectorAll(`style[${APP_ID_ATTRIBUTE_NAME}="${this.appId}"]`);
    if (styles?.length) {
      const styleMap = new Map();
      styles.forEach(style => {
        if (style.textContent != null) {
          styleMap.set(style.textContent, style);
        }
      });
      return styleMap;
    }
    return null;
  }
  changeUsageCount(style, delta) {
    const map = this.styleRef;
    if (map.has(style)) {
      const styleRefValue = map.get(style);
      styleRefValue.usage += delta;
      return styleRefValue.usage;
    }
    map.set(style, {
      usage: delta,
      elements: []
    });
    return delta;
  }
  getStyleElement(host, style) {
    const styleNodesInDOM = this.styleNodesInDOM;
    const styleEl = styleNodesInDOM?.get(style);
    if (styleEl?.parentNode === host) {
      // `styleNodesInDOM` cannot be undefined due to the above `styleNodesInDOM?.get`.
      styleNodesInDOM.delete(style);
      styleEl.removeAttribute(APP_ID_ATTRIBUTE_NAME);
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        // This attribute is solely used for debugging purposes.
        styleEl.setAttribute('ng-style-reused', '');
      }
      return styleEl;
    } else {
      const styleEl = this.doc.createElement('style');
      if (this.nonce) {
        styleEl.setAttribute('nonce', this.nonce);
      }
      styleEl.textContent = style;
      if (this.platformIsServer) {
        styleEl.setAttribute(APP_ID_ATTRIBUTE_NAME, this.appId);
      }
      host.appendChild(styleEl);
      return styleEl;
    }
  }
  addStyleToHost(host, style) {
    const styleEl = this.getStyleElement(host, style);
    const styleRef = this.styleRef;
    const styleElRef = styleRef.get(style)?.elements;
    if (styleElRef) {
      styleElRef.push(styleEl);
    } else {
      styleRef.set(style, {
        elements: [styleEl],
        usage: 1
      });
    }
  }
  resetHostNodes() {
    const hostNodes = this.hostNodes;
    hostNodes.clear();
    // Re-add the head element back since this is the default host.
    hostNodes.add(this.doc.head);
  }
  static #_ = this.ɵfac = function SharedStylesHost_Factory(t) {
    return new (t || SharedStylesHost)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.APP_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.CSP_NONCE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: SharedStylesHost,
    factory: SharedStylesHost.ɵfac
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedStylesHost, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], () => [{
    type: Document,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.APP_ID]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.CSP_NONCE]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
    }]
  }], null);
})();
const NAMESPACE_URIS = {
  'svg': 'http://www.w3.org/2000/svg',
  'xhtml': 'http://www.w3.org/1999/xhtml',
  'xlink': 'http://www.w3.org/1999/xlink',
  'xml': 'http://www.w3.org/XML/1998/namespace',
  'xmlns': 'http://www.w3.org/2000/xmlns/',
  'math': 'http://www.w3.org/1998/MathML/'
};
const COMPONENT_REGEX = /%COMP%/g;
const COMPONENT_VARIABLE = '%COMP%';
const HOST_ATTR = `_nghost-${COMPONENT_VARIABLE}`;
const CONTENT_ATTR = `_ngcontent-${COMPONENT_VARIABLE}`;
/**
 * The default value for the `REMOVE_STYLES_ON_COMPONENT_DESTROY` DI token.
 */
const REMOVE_STYLES_ON_COMPONENT_DESTROY_DEFAULT = true;
/**
 * A [DI token](guide/glossary#di-token "DI token definition") that indicates whether styles
 * of destroyed components should be removed from DOM.
 *
 * By default, the value is set to `true`.
 * @publicApi
 */
const REMOVE_STYLES_ON_COMPONENT_DESTROY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('RemoveStylesOnCompDestroy', {
  providedIn: 'root',
  factory: () => REMOVE_STYLES_ON_COMPONENT_DESTROY_DEFAULT
});
function shimContentAttribute(componentShortId) {
  return CONTENT_ATTR.replace(COMPONENT_REGEX, componentShortId);
}
function shimHostAttribute(componentShortId) {
  return HOST_ATTR.replace(COMPONENT_REGEX, componentShortId);
}
function shimStylesContent(compId, styles) {
  return styles.map(s => s.replace(COMPONENT_REGEX, compId));
}
class DomRendererFactory2 {
  constructor(eventManager, sharedStylesHost, appId, removeStylesOnCompDestroy, doc, platformId, ngZone, nonce = null) {
    this.eventManager = eventManager;
    this.sharedStylesHost = sharedStylesHost;
    this.appId = appId;
    this.removeStylesOnCompDestroy = removeStylesOnCompDestroy;
    this.doc = doc;
    this.platformId = platformId;
    this.ngZone = ngZone;
    this.nonce = nonce;
    this.rendererByCompId = new Map();
    this.platformIsServer = (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformServer)(platformId);
    this.defaultRenderer = new DefaultDomRenderer2(eventManager, doc, ngZone, this.platformIsServer);
  }
  createRenderer(element, type) {
    if (!element || !type) {
      return this.defaultRenderer;
    }
    if (this.platformIsServer && type.encapsulation === _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.ShadowDom) {
      // Domino does not support shadow DOM.
      type = {
        ...type,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.Emulated
      };
    }
    const renderer = this.getOrCreateRenderer(element, type);
    // Renderers have different logic due to different encapsulation behaviours.
    // Ex: for emulated, an attribute is added to the element.
    if (renderer instanceof EmulatedEncapsulationDomRenderer2) {
      renderer.applyToHost(element);
    } else if (renderer instanceof NoneEncapsulationDomRenderer) {
      renderer.applyStyles();
    }
    return renderer;
  }
  getOrCreateRenderer(element, type) {
    const rendererByCompId = this.rendererByCompId;
    let renderer = rendererByCompId.get(type.id);
    if (!renderer) {
      const doc = this.doc;
      const ngZone = this.ngZone;
      const eventManager = this.eventManager;
      const sharedStylesHost = this.sharedStylesHost;
      const removeStylesOnCompDestroy = this.removeStylesOnCompDestroy;
      const platformIsServer = this.platformIsServer;
      switch (type.encapsulation) {
        case _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.Emulated:
          renderer = new EmulatedEncapsulationDomRenderer2(eventManager, sharedStylesHost, type, this.appId, removeStylesOnCompDestroy, doc, ngZone, platformIsServer);
          break;
        case _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.ShadowDom:
          return new ShadowDomRenderer(eventManager, sharedStylesHost, element, type, doc, ngZone, this.nonce, platformIsServer);
        default:
          renderer = new NoneEncapsulationDomRenderer(eventManager, sharedStylesHost, type, removeStylesOnCompDestroy, doc, ngZone, platformIsServer);
          break;
      }
      rendererByCompId.set(type.id, renderer);
    }
    return renderer;
  }
  ngOnDestroy() {
    this.rendererByCompId.clear();
  }
  static #_ = this.ɵfac = function DomRendererFactory2_Factory(t) {
    return new (t || DomRendererFactory2)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](EventManager), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](SharedStylesHost), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.APP_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](REMOVE_STYLES_ON_COMPONENT_DESTROY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.CSP_NONCE));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: DomRendererFactory2,
    factory: DomRendererFactory2.ɵfac
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DomRendererFactory2, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], () => [{
    type: EventManager
  }, {
    type: SharedStylesHost
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.APP_ID]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [REMOVE_STYLES_ON_COMPONENT_DESTROY]
    }]
  }, {
    type: Document,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
    }]
  }, {
    type: Object,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.CSP_NONCE]
    }]
  }], null);
})();
class DefaultDomRenderer2 {
  constructor(eventManager, doc, ngZone, platformIsServer) {
    this.eventManager = eventManager;
    this.doc = doc;
    this.ngZone = ngZone;
    this.platformIsServer = platformIsServer;
    this.data = Object.create(null);
    /**
     * By default this renderer throws when encountering synthetic properties
     * This can be disabled for example by the AsyncAnimationRendererFactory
     */
    this.throwOnSyntheticProps = true;
    this.destroyNode = null;
  }
  destroy() {}
  createElement(name, namespace) {
    if (namespace) {
      // TODO: `|| namespace` was added in
      // https://github.com/angular/angular/commit/2b9cc8503d48173492c29f5a271b61126104fbdb to
      // support how Ivy passed around the namespace URI rather than short name at the time. It did
      // not, however extend the support to other parts of the system (setAttribute, setAttribute,
      // and the ServerRenderer). We should decide what exactly the semantics for dealing with
      // namespaces should be and make it consistent.
      // Related issues:
      // https://github.com/angular/angular/issues/44028
      // https://github.com/angular/angular/issues/44883
      return this.doc.createElementNS(NAMESPACE_URIS[namespace] || namespace, name);
    }
    return this.doc.createElement(name);
  }
  createComment(value) {
    return this.doc.createComment(value);
  }
  createText(value) {
    return this.doc.createTextNode(value);
  }
  appendChild(parent, newChild) {
    const targetParent = isTemplateNode(parent) ? parent.content : parent;
    targetParent.appendChild(newChild);
  }
  insertBefore(parent, newChild, refChild) {
    if (parent) {
      const targetParent = isTemplateNode(parent) ? parent.content : parent;
      targetParent.insertBefore(newChild, refChild);
    }
  }
  removeChild(parent, oldChild) {
    if (parent) {
      parent.removeChild(oldChild);
    }
  }
  selectRootElement(selectorOrNode, preserveContent) {
    let el = typeof selectorOrNode === 'string' ? this.doc.querySelector(selectorOrNode) : selectorOrNode;
    if (!el) {
      throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](-5104 /* RuntimeErrorCode.ROOT_NODE_NOT_FOUND */, (typeof ngDevMode === 'undefined' || ngDevMode) && `The selector "${selectorOrNode}" did not match any elements`);
    }
    if (!preserveContent) {
      el.textContent = '';
    }
    return el;
  }
  parentNode(node) {
    return node.parentNode;
  }
  nextSibling(node) {
    return node.nextSibling;
  }
  setAttribute(el, name, value, namespace) {
    if (namespace) {
      name = namespace + ':' + name;
      const namespaceUri = NAMESPACE_URIS[namespace];
      if (namespaceUri) {
        el.setAttributeNS(namespaceUri, name, value);
      } else {
        el.setAttribute(name, value);
      }
    } else {
      el.setAttribute(name, value);
    }
  }
  removeAttribute(el, name, namespace) {
    if (namespace) {
      const namespaceUri = NAMESPACE_URIS[namespace];
      if (namespaceUri) {
        el.removeAttributeNS(namespaceUri, name);
      } else {
        el.removeAttribute(`${namespace}:${name}`);
      }
    } else {
      el.removeAttribute(name);
    }
  }
  addClass(el, name) {
    el.classList.add(name);
  }
  removeClass(el, name) {
    el.classList.remove(name);
  }
  setStyle(el, style, value, flags) {
    if (flags & (_angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererStyleFlags2.DashCase | _angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererStyleFlags2.Important)) {
      el.style.setProperty(style, value, flags & _angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererStyleFlags2.Important ? 'important' : '');
    } else {
      el.style[style] = value;
    }
  }
  removeStyle(el, style, flags) {
    if (flags & _angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererStyleFlags2.DashCase) {
      // removeProperty has no effect when used on camelCased properties.
      el.style.removeProperty(style);
    } else {
      el.style[style] = '';
    }
  }
  setProperty(el, name, value) {
    if (el == null) {
      return;
    }
    (typeof ngDevMode === 'undefined' || ngDevMode) && this.throwOnSyntheticProps && checkNoSyntheticProp(name, 'property');
    el[name] = value;
  }
  setValue(node, value) {
    node.nodeValue = value;
  }
  listen(target, event, callback) {
    (typeof ngDevMode === 'undefined' || ngDevMode) && this.throwOnSyntheticProps && checkNoSyntheticProp(event, 'listener');
    if (typeof target === 'string') {
      target = (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])().getGlobalEventTarget(this.doc, target);
      if (!target) {
        throw new Error(`Unsupported event target ${target} for event ${event}`);
      }
    }
    return this.eventManager.addEventListener(target, event, this.decoratePreventDefault(callback));
  }
  decoratePreventDefault(eventHandler) {
    // `DebugNode.triggerEventHandler` needs to know if the listener was created with
    // decoratePreventDefault or is a listener added outside the Angular context so it can handle
    // the two differently. In the first case, the special '__ngUnwrap__' token is passed to the
    // unwrap the listener (see below).
    return event => {
      // Ivy uses '__ngUnwrap__' as a special token that allows us to unwrap the function
      // so that it can be invoked programmatically by `DebugNode.triggerEventHandler`. The
      // debug_node can inspect the listener toString contents for the existence of this special
      // token. Because the token is a string literal, it is ensured to not be modified by compiled
      // code.
      if (event === '__ngUnwrap__') {
        return eventHandler;
      }
      // Run the event handler inside the ngZone because event handlers are not patched
      // by Zone on the server. This is required only for tests.
      const allowDefaultBehavior = this.platformIsServer ? this.ngZone.runGuarded(() => eventHandler(event)) : eventHandler(event);
      if (allowDefaultBehavior === false) {
        event.preventDefault();
      }
      return undefined;
    };
  }
}
const AT_CHARCODE = (() => '@'.charCodeAt(0))();
function checkNoSyntheticProp(name, nameKind) {
  if (name.charCodeAt(0) === AT_CHARCODE) {
    throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](5105 /* RuntimeErrorCode.UNEXPECTED_SYNTHETIC_PROPERTY */, `Unexpected synthetic ${nameKind} ${name} found. Please make sure that:
  - Either \`BrowserAnimationsModule\` or \`NoopAnimationsModule\` are imported in your application.
  - There is corresponding configuration for the animation named \`${name}\` defined in the \`animations\` field of the \`@Component\` decorator (see https://angular.io/api/core/Component#animations).`);
  }
}
function isTemplateNode(node) {
  return node.tagName === 'TEMPLATE' && node.content !== undefined;
}
class ShadowDomRenderer extends DefaultDomRenderer2 {
  constructor(eventManager, sharedStylesHost, hostEl, component, doc, ngZone, nonce, platformIsServer) {
    super(eventManager, doc, ngZone, platformIsServer);
    this.sharedStylesHost = sharedStylesHost;
    this.hostEl = hostEl;
    this.shadowRoot = hostEl.attachShadow({
      mode: 'open'
    });
    this.sharedStylesHost.addHost(this.shadowRoot);
    const styles = shimStylesContent(component.id, component.styles);
    for (const style of styles) {
      const styleEl = document.createElement('style');
      if (nonce) {
        styleEl.setAttribute('nonce', nonce);
      }
      styleEl.textContent = style;
      this.shadowRoot.appendChild(styleEl);
    }
  }
  nodeOrShadowRoot(node) {
    return node === this.hostEl ? this.shadowRoot : node;
  }
  appendChild(parent, newChild) {
    return super.appendChild(this.nodeOrShadowRoot(parent), newChild);
  }
  insertBefore(parent, newChild, refChild) {
    return super.insertBefore(this.nodeOrShadowRoot(parent), newChild, refChild);
  }
  removeChild(parent, oldChild) {
    return super.removeChild(this.nodeOrShadowRoot(parent), oldChild);
  }
  parentNode(node) {
    return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(node)));
  }
  destroy() {
    this.sharedStylesHost.removeHost(this.shadowRoot);
  }
}
class NoneEncapsulationDomRenderer extends DefaultDomRenderer2 {
  constructor(eventManager, sharedStylesHost, component, removeStylesOnCompDestroy, doc, ngZone, platformIsServer, compId) {
    super(eventManager, doc, ngZone, platformIsServer);
    this.sharedStylesHost = sharedStylesHost;
    this.removeStylesOnCompDestroy = removeStylesOnCompDestroy;
    this.styles = compId ? shimStylesContent(compId, component.styles) : component.styles;
  }
  applyStyles() {
    this.sharedStylesHost.addStyles(this.styles);
  }
  destroy() {
    if (!this.removeStylesOnCompDestroy) {
      return;
    }
    this.sharedStylesHost.removeStyles(this.styles);
  }
}
class EmulatedEncapsulationDomRenderer2 extends NoneEncapsulationDomRenderer {
  constructor(eventManager, sharedStylesHost, component, appId, removeStylesOnCompDestroy, doc, ngZone, platformIsServer) {
    const compId = appId + '-' + component.id;
    super(eventManager, sharedStylesHost, component, removeStylesOnCompDestroy, doc, ngZone, platformIsServer, compId);
    this.contentAttr = shimContentAttribute(compId);
    this.hostAttr = shimHostAttribute(compId);
  }
  applyToHost(element) {
    this.applyStyles();
    this.setAttribute(element, this.hostAttr, '');
  }
  createElement(parent, name) {
    const el = super.createElement(parent, name);
    super.setAttribute(el, this.contentAttr, '');
    return el;
  }
}
class DomEventsPlugin extends EventManagerPlugin {
  constructor(doc) {
    super(doc);
  }
  // This plugin should come last in the list of plugins, because it accepts all
  // events.
  supports(eventName) {
    return true;
  }
  addEventListener(element, eventName, handler) {
    element.addEventListener(eventName, handler, false);
    return () => this.removeEventListener(element, eventName, handler);
  }
  removeEventListener(target, eventName, callback) {
    return target.removeEventListener(eventName, callback);
  }
  static #_ = this.ɵfac = function DomEventsPlugin_Factory(t) {
    return new (t || DomEventsPlugin)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: DomEventsPlugin,
    factory: DomEventsPlugin.ɵfac
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DomEventsPlugin, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
    }]
  }], null);
})();

/**
 * Defines supported modifiers for key events.
 */
const MODIFIER_KEYS = ['alt', 'control', 'meta', 'shift'];
// The following values are here for cross-browser compatibility and to match the W3C standard
// cf https://www.w3.org/TR/DOM-Level-3-Events-key/
const _keyMap = {
  '\b': 'Backspace',
  '\t': 'Tab',
  '\x7F': 'Delete',
  '\x1B': 'Escape',
  'Del': 'Delete',
  'Esc': 'Escape',
  'Left': 'ArrowLeft',
  'Right': 'ArrowRight',
  'Up': 'ArrowUp',
  'Down': 'ArrowDown',
  'Menu': 'ContextMenu',
  'Scroll': 'ScrollLock',
  'Win': 'OS'
};
/**
 * Retrieves modifiers from key-event objects.
 */
const MODIFIER_KEY_GETTERS = {
  'alt': event => event.altKey,
  'control': event => event.ctrlKey,
  'meta': event => event.metaKey,
  'shift': event => event.shiftKey
};
/**
 * A browser plug-in that provides support for handling of key events in Angular.
 */
class KeyEventsPlugin extends EventManagerPlugin {
  /**
   * Initializes an instance of the browser plug-in.
   * @param doc The document in which key events will be detected.
   */
  constructor(doc) {
    super(doc);
  }
  /**
   * Reports whether a named key event is supported.
   * @param eventName The event name to query.
   * @return True if the named key event is supported.
   */
  supports(eventName) {
    return KeyEventsPlugin.parseEventName(eventName) != null;
  }
  /**
   * Registers a handler for a specific element and key event.
   * @param element The HTML element to receive event notifications.
   * @param eventName The name of the key event to listen for.
   * @param handler A function to call when the notification occurs. Receives the
   * event object as an argument.
   * @returns The key event that was registered.
   */
  addEventListener(element, eventName, handler) {
    const parsedEvent = KeyEventsPlugin.parseEventName(eventName);
    const outsideHandler = KeyEventsPlugin.eventCallback(parsedEvent['fullKey'], handler, this.manager.getZone());
    return this.manager.getZone().runOutsideAngular(() => {
      return (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])().onAndCancel(element, parsedEvent['domEventName'], outsideHandler);
    });
  }
  /**
   * Parses the user provided full keyboard event definition and normalizes it for
   * later internal use. It ensures the string is all lowercase, converts special
   * characters to a standard spelling, and orders all the values consistently.
   *
   * @param eventName The name of the key event to listen for.
   * @returns an object with the full, normalized string, and the dom event name
   * or null in the case when the event doesn't match a keyboard event.
   */
  static parseEventName(eventName) {
    const parts = eventName.toLowerCase().split('.');
    const domEventName = parts.shift();
    if (parts.length === 0 || !(domEventName === 'keydown' || domEventName === 'keyup')) {
      return null;
    }
    const key = KeyEventsPlugin._normalizeKey(parts.pop());
    let fullKey = '';
    let codeIX = parts.indexOf('code');
    if (codeIX > -1) {
      parts.splice(codeIX, 1);
      fullKey = 'code.';
    }
    MODIFIER_KEYS.forEach(modifierName => {
      const index = parts.indexOf(modifierName);
      if (index > -1) {
        parts.splice(index, 1);
        fullKey += modifierName + '.';
      }
    });
    fullKey += key;
    if (parts.length != 0 || key.length === 0) {
      // returning null instead of throwing to let another plugin process the event
      return null;
    }
    // NOTE: Please don't rewrite this as so, as it will break JSCompiler property renaming.
    //       The code must remain in the `result['domEventName']` form.
    // return {domEventName, fullKey};
    const result = {};
    result['domEventName'] = domEventName;
    result['fullKey'] = fullKey;
    return result;
  }
  /**
   * Determines whether the actual keys pressed match the configured key code string.
   * The `fullKeyCode` event is normalized in the `parseEventName` method when the
   * event is attached to the DOM during the `addEventListener` call. This is unseen
   * by the end user and is normalized for internal consistency and parsing.
   *
   * @param event The keyboard event.
   * @param fullKeyCode The normalized user defined expected key event string
   * @returns boolean.
   */
  static matchEventFullKeyCode(event, fullKeyCode) {
    let keycode = _keyMap[event.key] || event.key;
    let key = '';
    if (fullKeyCode.indexOf('code.') > -1) {
      keycode = event.code;
      key = 'code.';
    }
    // the keycode could be unidentified so we have to check here
    if (keycode == null || !keycode) return false;
    keycode = keycode.toLowerCase();
    if (keycode === ' ') {
      keycode = 'space'; // for readability
    } else if (keycode === '.') {
      keycode = 'dot'; // because '.' is used as a separator in event names
    }
    MODIFIER_KEYS.forEach(modifierName => {
      if (modifierName !== keycode) {
        const modifierGetter = MODIFIER_KEY_GETTERS[modifierName];
        if (modifierGetter(event)) {
          key += modifierName + '.';
        }
      }
    });
    key += keycode;
    return key === fullKeyCode;
  }
  /**
   * Configures a handler callback for a key event.
   * @param fullKey The event name that combines all simultaneous keystrokes.
   * @param handler The function that responds to the key event.
   * @param zone The zone in which the event occurred.
   * @returns A callback function.
   */
  static eventCallback(fullKey, handler, zone) {
    return event => {
      if (KeyEventsPlugin.matchEventFullKeyCode(event, fullKey)) {
        zone.runGuarded(() => handler(event));
      }
    };
  }
  /** @internal */
  static _normalizeKey(keyName) {
    return keyName === 'esc' ? 'escape' : keyName;
  }
  static #_ = this.ɵfac = function KeyEventsPlugin_Factory(t) {
    return new (t || KeyEventsPlugin)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: KeyEventsPlugin,
    factory: KeyEventsPlugin.ɵfac
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeyEventsPlugin, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
    }]
  }], null);
})();

/**
 * Bootstraps an instance of an Angular application and renders a standalone component as the
 * application's root component. More information about standalone components can be found in [this
 * guide](guide/standalone-components).
 *
 * @usageNotes
 * The root component passed into this function *must* be a standalone one (should have the
 * `standalone: true` flag in the `@Component` decorator config).
 *
 * ```typescript
 * @Component({
 *   standalone: true,
 *   template: 'Hello world!'
 * })
 * class RootComponent {}
 *
 * const appRef: ApplicationRef = await bootstrapApplication(RootComponent);
 * ```
 *
 * You can add the list of providers that should be available in the application injector by
 * specifying the `providers` field in an object passed as the second argument:
 *
 * ```typescript
 * await bootstrapApplication(RootComponent, {
 *   providers: [
 *     {provide: BACKEND_URL, useValue: 'https://yourdomain.com/api'}
 *   ]
 * });
 * ```
 *
 * The `importProvidersFrom` helper method can be used to collect all providers from any
 * existing NgModule (and transitively from all NgModules that it imports):
 *
 * ```typescript
 * await bootstrapApplication(RootComponent, {
 *   providers: [
 *     importProvidersFrom(SomeNgModule)
 *   ]
 * });
 * ```
 *
 * Note: the `bootstrapApplication` method doesn't include [Testability](api/core/Testability) by
 * default. You can add [Testability](api/core/Testability) by getting the list of necessary
 * providers using `provideProtractorTestingSupport()` function and adding them into the `providers`
 * array, for example:
 *
 * ```typescript
 * import {provideProtractorTestingSupport} from '@angular/platform-browser';
 *
 * await bootstrapApplication(RootComponent, {providers: [provideProtractorTestingSupport()]});
 * ```
 *
 * @param rootComponent A reference to a standalone component that should be rendered.
 * @param options Extra configuration for the bootstrap operation, see `ApplicationConfig` for
 *     additional info.
 * @returns A promise that returns an `ApplicationRef` instance once resolved.
 *
 * @publicApi
 */
function bootstrapApplication(rootComponent, options) {
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinternalCreateApplication"])({
    rootComponent,
    ...createProvidersConfig(options)
  });
}
/**
 * Create an instance of an Angular application without bootstrapping any components. This is useful
 * for the situation where one wants to decouple application environment creation (a platform and
 * associated injectors) from rendering components on a screen. Components can be subsequently
 * bootstrapped on the returned `ApplicationRef`.
 *
 * @param options Extra configuration for the application environment, see `ApplicationConfig` for
 *     additional info.
 * @returns A promise that returns an `ApplicationRef` instance once resolved.
 *
 * @publicApi
 */
function createApplication(options) {
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinternalCreateApplication"])(createProvidersConfig(options));
}
function createProvidersConfig(options) {
  return {
    appProviders: [...BROWSER_MODULE_PROVIDERS, ...(options?.providers ?? [])],
    platformProviders: INTERNAL_BROWSER_PLATFORM_PROVIDERS
  };
}
/**
 * Returns a set of providers required to setup [Testability](api/core/Testability) for an
 * application bootstrapped using the `bootstrapApplication` function. The set of providers is
 * needed to support testing an application with Protractor (which relies on the Testability APIs
 * to be present).
 *
 * @returns An array of providers required to setup Testability for an application and make it
 *     available for testing using Protractor.
 *
 * @publicApi
 */
function provideProtractorTestingSupport() {
  // Return a copy to prevent changes to the original array in case any in-place
  // alterations are performed to the `provideProtractorTestingSupport` call results in app
  // code.
  return [...TESTABILITY_PROVIDERS];
}
function initDomAdapter() {
  BrowserDomAdapter.makeCurrent();
}
function errorHandler() {
  return new _angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler();
}
function _document() {
  // Tell ivy about the global document
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetDocument"])(document);
  return document;
}
const INTERNAL_BROWSER_PLATFORM_PROVIDERS = [{
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID,
  useValue: _angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵPLATFORM_BROWSER_ID"]
}, {
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_INITIALIZER,
  useValue: initDomAdapter,
  multi: true
}, {
  provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT,
  useFactory: _document,
  deps: []
}];
/**
 * A factory function that returns a `PlatformRef` instance associated with browser service
 * providers.
 *
 * @publicApi
 */
const platformBrowser = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.createPlatformFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.platformCore, 'browser', INTERNAL_BROWSER_PLATFORM_PROVIDERS);
/**
 * Internal marker to signal whether providers from the `BrowserModule` are already present in DI.
 * This is needed to avoid loading `BrowserModule` providers twice. We can't rely on the
 * `BrowserModule` presence itself, since the standalone-based bootstrap just imports
 * `BrowserModule` providers without referencing the module itself.
 */
const BROWSER_MODULE_PROVIDERS_MARKER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken(typeof ngDevMode === 'undefined' || ngDevMode ? 'BrowserModule Providers Marker' : '');
const TESTABILITY_PROVIDERS = [{
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵTESTABILITY_GETTER"],
  useClass: BrowserGetTestability,
  deps: []
}, {
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵTESTABILITY"],
  useClass: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Testability,
  deps: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TestabilityRegistry, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵTESTABILITY_GETTER"]]
}, {
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Testability,
  // Also provide as `Testability` for backwards-compatibility.
  useClass: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Testability,
  deps: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TestabilityRegistry, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵTESTABILITY_GETTER"]]
}];
const BROWSER_MODULE_PROVIDERS = [{
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵINJECTOR_SCOPE"],
  useValue: 'root'
}, {
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler,
  useFactory: errorHandler,
  deps: []
}, {
  provide: EVENT_MANAGER_PLUGINS,
  useClass: DomEventsPlugin,
  multi: true,
  deps: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT, _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone, _angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
}, {
  provide: EVENT_MANAGER_PLUGINS,
  useClass: KeyEventsPlugin,
  multi: true,
  deps: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
}, DomRendererFactory2, SharedStylesHost, EventManager, {
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2,
  useExisting: DomRendererFactory2
}, {
  provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__.XhrFactory,
  useClass: BrowserXhr,
  deps: []
}, typeof ngDevMode === 'undefined' || ngDevMode ? {
  provide: BROWSER_MODULE_PROVIDERS_MARKER,
  useValue: true
} : []];
/**
 * Exports required infrastructure for all Angular apps.
 * Included by default in all Angular apps created with the CLI
 * `new` command.
 * Re-exports `CommonModule` and `ApplicationModule`, making their
 * exports and providers available to all apps.
 *
 * @publicApi
 */
class BrowserModule {
  constructor(providersAlreadyPresent) {
    if ((typeof ngDevMode === 'undefined' || ngDevMode) && providersAlreadyPresent) {
      throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](5100 /* RuntimeErrorCode.BROWSER_MODULE_ALREADY_LOADED */, `Providers from the \`BrowserModule\` have already been loaded. If you need access ` + `to common directives such as NgIf and NgFor, import the \`CommonModule\` instead.`);
    }
  }
  /**
   * Configures a browser-based app to transition from a server-rendered app, if
   * one is present on the page.
   *
   * @param params An object containing an identifier for the app to transition.
   * The ID must match between the client and server versions of the app.
   * @returns The reconfigured `BrowserModule` to import into the app's root `AppModule`.
   *
   * @deprecated Use {@link APP_ID} instead to set the application ID.
   */
  static withServerTransition(params) {
    return {
      ngModule: BrowserModule,
      providers: [{
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__.APP_ID,
        useValue: params.appId
      }]
    };
  }
  static #_ = this.ɵfac = function BrowserModule_Factory(t) {
    return new (t || BrowserModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](BROWSER_MODULE_PROVIDERS_MARKER, 12));
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: BrowserModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    providers: [...BROWSER_MODULE_PROVIDERS, ...TESTABILITY_PROVIDERS],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrowserModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      providers: [...BROWSER_MODULE_PROVIDERS, ...TESTABILITY_PROVIDERS],
      exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationModule]
    }]
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [BROWSER_MODULE_PROVIDERS_MARKER]
    }]
  }], null);
})();

/**
 * Factory to create a `Meta` service instance for the current DOM document.
 */
function createMeta() {
  return new Meta((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
}
/**
 * A service for managing HTML `<meta>` tags.
 *
 * Properties of the `MetaDefinition` object match the attributes of the
 * HTML `<meta>` tag. These tags define document metadata that is important for
 * things like configuring a Content Security Policy, defining browser compatibility
 * and security settings, setting HTTP Headers, defining rich content for social sharing,
 * and Search Engine Optimization (SEO).
 *
 * To identify specific `<meta>` tags in a document, use an attribute selection
 * string in the format `"tag_attribute='value string'"`.
 * For example, an `attrSelector` value of `"name='description'"` matches a tag
 * whose `name` attribute has the value `"description"`.
 * Selectors are used with the `querySelector()` Document method,
 * in the format `meta[{attrSelector}]`.
 *
 * @see [HTML meta tag](https://developer.mozilla.org/docs/Web/HTML/Element/meta)
 * @see [Document.querySelector()](https://developer.mozilla.org/docs/Web/API/Document/querySelector)
 *
 *
 * @publicApi
 */
class Meta {
  constructor(_doc) {
    this._doc = _doc;
    this._dom = (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])();
  }
  /**
   * Retrieves or creates a specific `<meta>` tag element in the current HTML document.
   * In searching for an existing tag, Angular attempts to match the `name` or `property` attribute
   * values in the provided tag definition, and verifies that all other attribute values are equal.
   * If an existing element is found, it is returned and is not modified in any way.
   * @param tag The definition of a `<meta>` element to match or create.
   * @param forceCreation True to create a new element without checking whether one already exists.
   * @returns The existing element with the same attributes and values if found,
   * the new element if no match is found, or `null` if the tag parameter is not defined.
   */
  addTag(tag, forceCreation = false) {
    if (!tag) return null;
    return this._getOrCreateElement(tag, forceCreation);
  }
  /**
   * Retrieves or creates a set of `<meta>` tag elements in the current HTML document.
   * In searching for an existing tag, Angular attempts to match the `name` or `property` attribute
   * values in the provided tag definition, and verifies that all other attribute values are equal.
   * @param tags An array of tag definitions to match or create.
   * @param forceCreation True to create new elements without checking whether they already exist.
   * @returns The matching elements if found, or the new elements.
   */
  addTags(tags, forceCreation = false) {
    if (!tags) return [];
    return tags.reduce((result, tag) => {
      if (tag) {
        result.push(this._getOrCreateElement(tag, forceCreation));
      }
      return result;
    }, []);
  }
  /**
   * Retrieves a `<meta>` tag element in the current HTML document.
   * @param attrSelector The tag attribute and value to match against, in the format
   * `"tag_attribute='value string'"`.
   * @returns The matching element, if any.
   */
  getTag(attrSelector) {
    if (!attrSelector) return null;
    return this._doc.querySelector(`meta[${attrSelector}]`) || null;
  }
  /**
   * Retrieves a set of `<meta>` tag elements in the current HTML document.
   * @param attrSelector The tag attribute and value to match against, in the format
   * `"tag_attribute='value string'"`.
   * @returns The matching elements, if any.
   */
  getTags(attrSelector) {
    if (!attrSelector) return [];
    const list /*NodeList*/ = this._doc.querySelectorAll(`meta[${attrSelector}]`);
    return list ? [].slice.call(list) : [];
  }
  /**
   * Modifies an existing `<meta>` tag element in the current HTML document.
   * @param tag The tag description with which to replace the existing tag content.
   * @param selector A tag attribute and value to match against, to identify
   * an existing tag. A string in the format `"tag_attribute=`value string`"`.
   * If not supplied, matches a tag with the same `name` or `property` attribute value as the
   * replacement tag.
   * @return The modified element.
   */
  updateTag(tag, selector) {
    if (!tag) return null;
    selector = selector || this._parseSelector(tag);
    const meta = this.getTag(selector);
    if (meta) {
      return this._setMetaElementAttributes(tag, meta);
    }
    return this._getOrCreateElement(tag, true);
  }
  /**
   * Removes an existing `<meta>` tag element from the current HTML document.
   * @param attrSelector A tag attribute and value to match against, to identify
   * an existing tag. A string in the format `"tag_attribute=`value string`"`.
   */
  removeTag(attrSelector) {
    this.removeTagElement(this.getTag(attrSelector));
  }
  /**
   * Removes an existing `<meta>` tag element from the current HTML document.
   * @param meta The tag definition to match against to identify an existing tag.
   */
  removeTagElement(meta) {
    if (meta) {
      this._dom.remove(meta);
    }
  }
  _getOrCreateElement(meta, forceCreation = false) {
    if (!forceCreation) {
      const selector = this._parseSelector(meta);
      // It's allowed to have multiple elements with the same name so it's not enough to
      // just check that element with the same name already present on the page. We also need to
      // check if element has tag attributes
      const elem = this.getTags(selector).filter(elem => this._containsAttributes(meta, elem))[0];
      if (elem !== undefined) return elem;
    }
    const element = this._dom.createElement('meta');
    this._setMetaElementAttributes(meta, element);
    const head = this._doc.getElementsByTagName('head')[0];
    head.appendChild(element);
    return element;
  }
  _setMetaElementAttributes(tag, el) {
    Object.keys(tag).forEach(prop => el.setAttribute(this._getMetaKeyMap(prop), tag[prop]));
    return el;
  }
  _parseSelector(tag) {
    const attr = tag.name ? 'name' : 'property';
    return `${attr}="${tag[attr]}"`;
  }
  _containsAttributes(tag, elem) {
    return Object.keys(tag).every(key => elem.getAttribute(this._getMetaKeyMap(key)) === tag[key]);
  }
  _getMetaKeyMap(prop) {
    return META_KEYS_MAP[prop] || prop;
  }
  static #_ = this.ɵfac = function Meta_Factory(t) {
    return new (t || Meta)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: Meta,
    factory: function Meta_Factory(t) {
      let r = null;
      if (t) {
        r = new t();
      } else {
        r = createMeta();
      }
      return r;
    },
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Meta, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root',
      useFactory: createMeta,
      deps: []
    }]
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
    }]
  }], null);
})();
/**
 * Mapping for MetaDefinition properties with their correct meta attribute names
 */
const META_KEYS_MAP = {
  httpEquiv: 'http-equiv'
};

/**
 * Factory to create Title service.
 */
function createTitle() {
  return new Title((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
}
/**
 * A service that can be used to get and set the title of a current HTML document.
 *
 * Since an Angular application can't be bootstrapped on the entire HTML document (`<html>` tag)
 * it is not possible to bind to the `text` property of the `HTMLTitleElement` elements
 * (representing the `<title>` tag). Instead, this service can be used to set and get the current
 * title value.
 *
 * @publicApi
 */
class Title {
  constructor(_doc) {
    this._doc = _doc;
  }
  /**
   * Get the title of the current HTML document.
   */
  getTitle() {
    return this._doc.title;
  }
  /**
   * Set the title of the current HTML document.
   * @param newTitle
   */
  setTitle(newTitle) {
    this._doc.title = newTitle || '';
  }
  static #_ = this.ɵfac = function Title_Factory(t) {
    return new (t || Title)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: Title,
    factory: function Title_Factory(t) {
      let r = null;
      if (t) {
        r = new t();
      } else {
        r = createTitle();
      }
      return r;
    },
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Title, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root',
      useFactory: createTitle,
      deps: []
    }]
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
    }]
  }], null);
})();

/**
 * Exports the value under a given `name` in the global property `ng`. For example `ng.probe` if
 * `name` is `'probe'`.
 * @param name Name under which it will be exported. Keep in mind this will be a property of the
 * global `ng` object.
 * @param value The value to export.
 */
function exportNgVar(name, value) {
  if (typeof COMPILED === 'undefined' || !COMPILED) {
    // Note: we can't export `ng` when using closure enhanced optimization as:
    // - closure declares globals itself for minified names, which sometimes clobber our `ng` global
    // - we can't declare a closure extern as the namespace `ng` is already used within Google
    //   for typings for angularJS (via `goog.provide('ng....')`).
    const ng = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵglobal"]['ng'] = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵglobal"]['ng'] || {};
    ng[name] = value;
  }
}
const win = typeof window !== 'undefined' && window || {};
class ChangeDetectionPerfRecord {
  constructor(msPerTick, numTicks) {
    this.msPerTick = msPerTick;
    this.numTicks = numTicks;
  }
}
/**
 * Entry point for all Angular profiling-related debug tools. This object
 * corresponds to the `ng.profiler` in the dev console.
 */
class AngularProfiler {
  constructor(ref) {
    this.appRef = ref.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef);
  }
  // tslint:disable:no-console
  /**
   * Exercises change detection in a loop and then prints the average amount of
   * time in milliseconds how long a single round of change detection takes for
   * the current state of the UI. It runs a minimum of 5 rounds for a minimum
   * of 500 milliseconds.
   *
   * Optionally, a user may pass a `config` parameter containing a map of
   * options. Supported options are:
   *
   * `record` (boolean) - causes the profiler to record a CPU profile while
   * it exercises the change detector. Example:
   *
   * ```
   * ng.profiler.timeChangeDetection({record: true})
   * ```
   */
  timeChangeDetection(config) {
    const record = config && config['record'];
    const profileName = 'Change Detection';
    // Profiler is not available in Android browsers without dev tools opened
    const isProfilerAvailable = win.console.profile != null;
    if (record && isProfilerAvailable) {
      win.console.profile(profileName);
    }
    const start = performanceNow();
    let numTicks = 0;
    while (numTicks < 5 || performanceNow() - start < 500) {
      this.appRef.tick();
      numTicks++;
    }
    const end = performanceNow();
    if (record && isProfilerAvailable) {
      win.console.profileEnd(profileName);
    }
    const msPerTick = (end - start) / numTicks;
    win.console.log(`ran ${numTicks} change detection cycles`);
    win.console.log(`${msPerTick.toFixed(2)} ms per check`);
    return new ChangeDetectionPerfRecord(msPerTick, numTicks);
  }
}
function performanceNow() {
  return win.performance && win.performance.now ? win.performance.now() : new Date().getTime();
}
const PROFILER_GLOBAL_NAME = 'profiler';
/**
 * Enabled Angular debug tools that are accessible via your browser's
 * developer console.
 *
 * Usage:
 *
 * 1. Open developer console (e.g. in Chrome Ctrl + Shift + j)
 * 1. Type `ng.` (usually the console will show auto-complete suggestion)
 * 1. Try the change detection profiler `ng.profiler.timeChangeDetection()`
 *    then hit Enter.
 *
 * @publicApi
 */
function enableDebugTools(ref) {
  exportNgVar(PROFILER_GLOBAL_NAME, new AngularProfiler(ref));
  return ref;
}
/**
 * Disables Angular tools.
 *
 * @publicApi
 */
function disableDebugTools() {
  exportNgVar(PROFILER_GLOBAL_NAME, null);
}

/**
 * Predicates for use with {@link DebugElement}'s query functions.
 *
 * @publicApi
 */
class By {
  /**
   * Match all nodes.
   *
   * @usageNotes
   * ### Example
   *
   * {@example platform-browser/dom/debug/ts/by/by.ts region='by_all'}
   */
  static all() {
    return () => true;
  }
  /**
   * Match elements by the given CSS selector.
   *
   * @usageNotes
   * ### Example
   *
   * {@example platform-browser/dom/debug/ts/by/by.ts region='by_css'}
   */
  static css(selector) {
    return debugElement => {
      return debugElement.nativeElement != null ? elementMatches(debugElement.nativeElement, selector) : false;
    };
  }
  /**
   * Match nodes that have the given directive present.
   *
   * @usageNotes
   * ### Example
   *
   * {@example platform-browser/dom/debug/ts/by/by.ts region='by_directive'}
   */
  static directive(type) {
    return debugNode => debugNode.providerTokens.indexOf(type) !== -1;
  }
}
function elementMatches(n, selector) {
  if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])().isElementNode(n)) {
    return n.matches && n.matches(selector) || n.msMatchesSelector && n.msMatchesSelector(selector) || n.webkitMatchesSelector && n.webkitMatchesSelector(selector);
  }
  return false;
}

/**
 * Supported HammerJS recognizer event names.
 */
const EVENT_NAMES = {
  // pan
  'pan': true,
  'panstart': true,
  'panmove': true,
  'panend': true,
  'pancancel': true,
  'panleft': true,
  'panright': true,
  'panup': true,
  'pandown': true,
  // pinch
  'pinch': true,
  'pinchstart': true,
  'pinchmove': true,
  'pinchend': true,
  'pinchcancel': true,
  'pinchin': true,
  'pinchout': true,
  // press
  'press': true,
  'pressup': true,
  // rotate
  'rotate': true,
  'rotatestart': true,
  'rotatemove': true,
  'rotateend': true,
  'rotatecancel': true,
  // swipe
  'swipe': true,
  'swipeleft': true,
  'swiperight': true,
  'swipeup': true,
  'swipedown': true,
  // tap
  'tap': true,
  'doubletap': true
};
/**
 * DI token for providing [HammerJS](https://hammerjs.github.io/) support to Angular.
 * @see {@link HammerGestureConfig}
 *
 * @ngModule HammerModule
 * @publicApi
 */
const HAMMER_GESTURE_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('HammerGestureConfig');
/**
 * Injection token used to provide a {@link HammerLoader} to Angular.
 *
 * @publicApi
 */
const HAMMER_LOADER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('HammerLoader');
/**
 * An injectable [HammerJS Manager](https://hammerjs.github.io/api/#hammermanager)
 * for gesture recognition. Configures specific event recognition.
 * @publicApi
 */
class HammerGestureConfig {
  constructor() {
    /**
     * A set of supported event names for gestures to be used in Angular.
     * Angular supports all built-in recognizers, as listed in
     * [HammerJS documentation](https://hammerjs.github.io/).
     */
    this.events = [];
    /**
     * Maps gesture event names to a set of configuration options
     * that specify overrides to the default values for specific properties.
     *
     * The key is a supported event name to be configured,
     * and the options object contains a set of properties, with override values
     * to be applied to the named recognizer event.
     * For example, to disable recognition of the rotate event, specify
     *  `{"rotate": {"enable": false}}`.
     *
     * Properties that are not present take the HammerJS default values.
     * For information about which properties are supported for which events,
     * and their allowed and default values, see
     * [HammerJS documentation](https://hammerjs.github.io/).
     *
     */
    this.overrides = {};
  }
  /**
   * Creates a [HammerJS Manager](https://hammerjs.github.io/api/#hammermanager)
   * and attaches it to a given HTML element.
   * @param element The element that will recognize gestures.
   * @returns A HammerJS event-manager object.
   */
  buildHammer(element) {
    const mc = new Hammer(element, this.options);
    mc.get('pinch').set({
      enable: true
    });
    mc.get('rotate').set({
      enable: true
    });
    for (const eventName in this.overrides) {
      mc.get(eventName).set(this.overrides[eventName]);
    }
    return mc;
  }
  static #_ = this.ɵfac = function HammerGestureConfig_Factory(t) {
    return new (t || HammerGestureConfig)();
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: HammerGestureConfig,
    factory: HammerGestureConfig.ɵfac
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HammerGestureConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();
/**
 * Event plugin that adds Hammer support to an application.
 *
 * @ngModule HammerModule
 */
class HammerGesturesPlugin extends EventManagerPlugin {
  constructor(doc, _config, console, loader) {
    super(doc);
    this._config = _config;
    this.console = console;
    this.loader = loader;
    this._loaderPromise = null;
  }
  supports(eventName) {
    if (!EVENT_NAMES.hasOwnProperty(eventName.toLowerCase()) && !this.isCustomEvent(eventName)) {
      return false;
    }
    if (!window.Hammer && !this.loader) {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        this.console.warn(`The "${eventName}" event cannot be bound because Hammer.JS is not ` + `loaded and no custom loader has been specified.`);
      }
      return false;
    }
    return true;
  }
  addEventListener(element, eventName, handler) {
    const zone = this.manager.getZone();
    eventName = eventName.toLowerCase();
    // If Hammer is not present but a loader is specified, we defer adding the event listener
    // until Hammer is loaded.
    if (!window.Hammer && this.loader) {
      this._loaderPromise = this._loaderPromise || zone.runOutsideAngular(() => this.loader());
      // This `addEventListener` method returns a function to remove the added listener.
      // Until Hammer is loaded, the returned function needs to *cancel* the registration rather
      // than remove anything.
      let cancelRegistration = false;
      let deregister = () => {
        cancelRegistration = true;
      };
      zone.runOutsideAngular(() => this._loaderPromise.then(() => {
        // If Hammer isn't actually loaded when the custom loader resolves, give up.
        if (!window.Hammer) {
          if (typeof ngDevMode === 'undefined' || ngDevMode) {
            this.console.warn(`The custom HAMMER_LOADER completed, but Hammer.JS is not present.`);
          }
          deregister = () => {};
          return;
        }
        if (!cancelRegistration) {
          // Now that Hammer is loaded and the listener is being loaded for real,
          // the deregistration function changes from canceling registration to
          // removal.
          deregister = this.addEventListener(element, eventName, handler);
        }
      }).catch(() => {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
          this.console.warn(`The "${eventName}" event cannot be bound because the custom ` + `Hammer.JS loader failed.`);
        }
        deregister = () => {};
      }));
      // Return a function that *executes* `deregister` (and not `deregister` itself) so that we
      // can change the behavior of `deregister` once the listener is added. Using a closure in
      // this way allows us to avoid any additional data structures to track listener removal.
      return () => {
        deregister();
      };
    }
    return zone.runOutsideAngular(() => {
      // Creating the manager bind events, must be done outside of angular
      const mc = this._config.buildHammer(element);
      const callback = function (eventObj) {
        zone.runGuarded(function () {
          handler(eventObj);
        });
      };
      mc.on(eventName, callback);
      return () => {
        mc.off(eventName, callback);
        // destroy mc to prevent memory leak
        if (typeof mc.destroy === 'function') {
          mc.destroy();
        }
      };
    });
  }
  isCustomEvent(eventName) {
    return this._config.events.indexOf(eventName) > -1;
  }
  static #_ = this.ɵfac = function HammerGesturesPlugin_Factory(t) {
    return new (t || HammerGesturesPlugin)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](HAMMER_GESTURE_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](HAMMER_LOADER, 8));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: HammerGesturesPlugin,
    factory: HammerGesturesPlugin.ɵfac
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HammerGesturesPlugin, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
    }]
  }, {
    type: HammerGestureConfig,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [HAMMER_GESTURE_CONFIG]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [HAMMER_LOADER]
    }]
  }], null);
})();
/**
 * Adds support for HammerJS.
 *
 * Import this module at the root of your application so that Angular can work with
 * HammerJS to detect gesture events.
 *
 * Note that applications still need to include the HammerJS script itself. This module
 * simply sets up the coordination layer between HammerJS and Angular's `EventManager`.
 *
 * @publicApi
 */
class HammerModule {
  static #_ = this.ɵfac = function HammerModule_Factory(t) {
    return new (t || HammerModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: HammerModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    providers: [{
      provide: EVENT_MANAGER_PLUGINS,
      useClass: HammerGesturesPlugin,
      multi: true,
      deps: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT, HAMMER_GESTURE_CONFIG, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), HAMMER_LOADER]]
    }, {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerGestureConfig,
      deps: []
    }]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HammerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      providers: [{
        provide: EVENT_MANAGER_PLUGINS,
        useClass: HammerGesturesPlugin,
        multi: true,
        deps: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT, HAMMER_GESTURE_CONFIG, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), HAMMER_LOADER]]
      }, {
        provide: HAMMER_GESTURE_CONFIG,
        useClass: HammerGestureConfig,
        deps: []
      }]
    }]
  }], null, null);
})();

/**
 * DomSanitizer helps preventing Cross Site Scripting Security bugs (XSS) by sanitizing
 * values to be safe to use in the different DOM contexts.
 *
 * For example, when binding a URL in an `<a [href]="someValue">` hyperlink, `someValue` will be
 * sanitized so that an attacker cannot inject e.g. a `javascript:` URL that would execute code on
 * the website.
 *
 * In specific situations, it might be necessary to disable sanitization, for example if the
 * application genuinely needs to produce a `javascript:` style link with a dynamic value in it.
 * Users can bypass security by constructing a value with one of the `bypassSecurityTrust...`
 * methods, and then binding to that value from the template.
 *
 * These situations should be very rare, and extraordinary care must be taken to avoid creating a
 * Cross Site Scripting (XSS) security bug!
 *
 * When using `bypassSecurityTrust...`, make sure to call the method as early as possible and as
 * close as possible to the source of the value, to make it easy to verify no security bug is
 * created by its use.
 *
 * It is not required (and not recommended) to bypass security if the value is safe, e.g. a URL that
 * does not start with a suspicious protocol, or an HTML snippet that does not contain dangerous
 * code. The sanitizer leaves safe values intact.
 *
 * @security Calling any of the `bypassSecurityTrust...` APIs disables Angular's built-in
 * sanitization for the value passed in. Carefully check and audit all values and code paths going
 * into this call. Make sure any user data is appropriately escaped for this security context.
 * For more detail, see the [Security Guide](https://g.co/ng/security).
 *
 * @publicApi
 */
class DomSanitizer {
  static #_ = this.ɵfac = function DomSanitizer_Factory(t) {
    return new (t || DomSanitizer)();
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: DomSanitizer,
    factory: function DomSanitizer_Factory(t) {
      let r = null;
      if (t) {
        r = new (t || DomSanitizer)();
      } else {
        r = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DomSanitizerImpl);
      }
      return r;
    },
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DomSanitizer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root',
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => DomSanitizerImpl)
    }]
  }], null, null);
})();
function domSanitizerImplFactory(injector) {
  return new DomSanitizerImpl(injector.get(_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
}
class DomSanitizerImpl extends DomSanitizer {
  constructor(_doc) {
    super();
    this._doc = _doc;
  }
  sanitize(ctx, value) {
    if (value == null) return null;
    switch (ctx) {
      case _angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.NONE:
        return value;
      case _angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.HTML:
        if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵallowSanitizationBypassAndThrow"])(value, "HTML" /* BypassType.Html */)) {
          return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunwrapSafeValue"])(value);
        }
        return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵ_sanitizeHtml"])(this._doc, String(value)).toString();
      case _angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.STYLE:
        if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵallowSanitizationBypassAndThrow"])(value, "Style" /* BypassType.Style */)) {
          return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunwrapSafeValue"])(value);
        }
        return value;
      case _angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.SCRIPT:
        if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵallowSanitizationBypassAndThrow"])(value, "Script" /* BypassType.Script */)) {
          return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunwrapSafeValue"])(value);
        }
        throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](5200 /* RuntimeErrorCode.SANITIZATION_UNSAFE_SCRIPT */, (typeof ngDevMode === 'undefined' || ngDevMode) && 'unsafe value used in a script context');
      case _angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.URL:
        if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵallowSanitizationBypassAndThrow"])(value, "URL" /* BypassType.Url */)) {
          return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunwrapSafeValue"])(value);
        }
        return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵ_sanitizeUrl"])(String(value));
      case _angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.RESOURCE_URL:
        if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵallowSanitizationBypassAndThrow"])(value, "ResourceURL" /* BypassType.ResourceUrl */)) {
          return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunwrapSafeValue"])(value);
        }
        throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](5201 /* RuntimeErrorCode.SANITIZATION_UNSAFE_RESOURCE_URL */, (typeof ngDevMode === 'undefined' || ngDevMode) && `unsafe value used in a resource URL context (see ${_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵXSS_SECURITY_URL"]})`);
      default:
        throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](5202 /* RuntimeErrorCode.SANITIZATION_UNEXPECTED_CTX */, (typeof ngDevMode === 'undefined' || ngDevMode) && `Unexpected SecurityContext ${ctx} (see ${_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵXSS_SECURITY_URL"]})`);
    }
  }
  bypassSecurityTrustHtml(value) {
    return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵbypassSanitizationTrustHtml"])(value);
  }
  bypassSecurityTrustStyle(value) {
    return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵbypassSanitizationTrustStyle"])(value);
  }
  bypassSecurityTrustScript(value) {
    return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵbypassSanitizationTrustScript"])(value);
  }
  bypassSecurityTrustUrl(value) {
    return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵbypassSanitizationTrustUrl"])(value);
  }
  bypassSecurityTrustResourceUrl(value) {
    return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵbypassSanitizationTrustResourceUrl"])(value);
  }
  static #_ = this.ɵfac = function DomSanitizerImpl_Factory(t) {
    return new (t || DomSanitizerImpl)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: DomSanitizerImpl,
    factory: function DomSanitizerImpl_Factory(t) {
      let r = null;
      if (t) {
        r = new t();
      } else {
        r = domSanitizerImplFactory(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector));
      }
      return r;
    },
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DomSanitizerImpl, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root',
      useFactory: domSanitizerImplFactory,
      deps: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector]
    }]
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
    }]
  }], null);
})();

/**
 * The list of features as an enum to uniquely type each `HydrationFeature`.
 * @see {@link HydrationFeature}
 *
 * @publicApi
 */
var HydrationFeatureKind;
(function (HydrationFeatureKind) {
  HydrationFeatureKind[HydrationFeatureKind["NoHttpTransferCache"] = 0] = "NoHttpTransferCache";
  HydrationFeatureKind[HydrationFeatureKind["HttpTransferCacheOptions"] = 1] = "HttpTransferCacheOptions";
})(HydrationFeatureKind || (HydrationFeatureKind = {}));
/**
 * Helper function to create an object that represents a Hydration feature.
 */
function hydrationFeature(ɵkind, ɵproviders = [], ɵoptions = {}) {
  return {
    ɵkind,
    ɵproviders
  };
}
/**
 * Disables HTTP transfer cache. Effectively causes HTTP requests to be performed twice: once on the
 * server and other one on the browser.
 *
 * @publicApi
 */
function withNoHttpTransferCache() {
  // This feature has no providers and acts as a flag that turns off
  // HTTP transfer cache (which otherwise is turned on by default).
  return hydrationFeature(HydrationFeatureKind.NoHttpTransferCache);
}
/**
 * The function accepts a an object, which allows to configure cache parameters,
 * such as which headers should be included (no headers are included by default),
 * wether POST requests should be cached or a callback function to determine if a
 * particular request should be cached.
 *
 * @publicApi
 */
function withHttpTransferCacheOptions(options) {
  // This feature has no providers and acts as a flag to pass options to the HTTP transfer cache.
  return hydrationFeature(HydrationFeatureKind.HttpTransferCacheOptions, (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["ɵwithHttpTransferCache"])(options));
}
/**
 * Returns an `ENVIRONMENT_INITIALIZER` token setup with a function
 * that verifies whether compatible ZoneJS was used in an application
 * and logs a warning in a console if it's not the case.
 */
function provideZoneJsCompatibilityDetector() {
  return [{
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ENVIRONMENT_INITIALIZER,
    useValue: () => {
      const ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
      // Checking `ngZone instanceof NgZone` would be insufficient here,
      // because custom implementations might use NgZone as a base class.
      if (ngZone.constructor !== _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone) {
        const console = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"]);
        const message = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵformatRuntimeError"])(-5000 /* RuntimeErrorCode.UNSUPPORTED_ZONEJS_INSTANCE */, 'Angular detected that hydration was enabled for an application ' + 'that uses a custom or a noop Zone.js implementation. ' + 'This is not yet a fully supported configuration.');
        // tslint:disable-next-line:no-console
        console.warn(message);
      }
    },
    multi: true
  }];
}
/**
 * Sets up providers necessary to enable hydration functionality for the application.
 *
 * By default, the function enables the recommended set of features for the optimal
 * performance for most of the applications. It includes the following features:
 *
 * * Reconciling DOM hydration. Learn more about it [here](guide/hydration).
 * * [`HttpClient`](api/common/http/HttpClient) response caching while running on the server and
 * transferring this cache to the client to avoid extra HTTP requests. Learn more about data caching
 * [here](/guide/ssr#caching-data-when-using-httpclient).
 *
 * These functions allow you to disable some of the default features or configure features
 * * {@link withNoHttpTransferCache} to disable HTTP transfer cache
 * * {@link withHttpTransferCacheOptions} to configure some HTTP transfer cache options
 *
 * @usageNotes
 *
 * Basic example of how you can enable hydration in your application when
 * `bootstrapApplication` function is used:
 * ```
 * bootstrapApplication(AppComponent, {
 *   providers: [provideClientHydration()]
 * });
 * ```
 *
 * Alternatively if you are using NgModules, you would add `provideClientHydration`
 * to your root app module's provider list.
 * ```
 * @NgModule({
 *   declarations: [RootCmp],
 *   bootstrap: [RootCmp],
 *   providers: [provideClientHydration()],
 * })
 * export class AppModule {}
 * ```
 *
 * @see {@link withNoHttpTransferCache}
 * @see {@link withHttpTransferCacheOptions}
 *
 * @param features Optional features to configure additional router behaviors.
 * @returns A set of providers to enable hydration.
 *
 * @publicApi
 */
function provideClientHydration(...features) {
  const providers = [];
  const featuresKind = new Set();
  const hasHttpTransferCacheOptions = featuresKind.has(HydrationFeatureKind.HttpTransferCacheOptions);
  for (const {
    ɵproviders,
    ɵkind
  } of features) {
    featuresKind.add(ɵkind);
    if (ɵproviders.length) {
      providers.push(ɵproviders);
    }
  }
  if (typeof ngDevMode !== 'undefined' && ngDevMode && featuresKind.has(HydrationFeatureKind.NoHttpTransferCache) && hasHttpTransferCacheOptions) {
    // TODO: Make this a runtime error
    throw new Error('Configuration error: found both withHttpTransferCacheOptions() and withNoHttpTransferCache() in the same call to provideClientHydration(), which is a contradiction.');
  }
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.makeEnvironmentProviders)([typeof ngDevMode !== 'undefined' && ngDevMode ? provideZoneJsCompatibilityDetector() : [], (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵwithDomHydration"])(), featuresKind.has(HydrationFeatureKind.NoHttpTransferCache) || hasHttpTransferCacheOptions ? [] : (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["ɵwithHttpTransferCache"])({}), providers]);
}

/**
 * @module
 * @description
 * Entry point for all public APIs of the platform-browser package.
 */
/**
 * @publicApi
 */
const VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Version('17.1.0');

// Re-export TransferState to the public API of the `platform-browser` for backwards-compatibility.
/**
 * Create a `StateKey<T>` that can be used to store value of type T with `TransferState`.
 *
 * Example:
 *
 * ```
 * const COUNTER_KEY = makeStateKey<number>('counter');
 * let value = 10;
 *
 * transferState.set(COUNTER_KEY, value);
 * ```
 *
 * @publicApi
 * @deprecated `makeStateKey` has moved, please import `makeStateKey` from `@angular/core` instead.
 */
// The below is a workaround to add a deprecated message.
const makeStateKey = _angular_core__WEBPACK_IMPORTED_MODULE_0__.makeStateKey;
// The below type is needed for G3 due to JSC_CONFORMANCE_VIOLATION.
const TransferState = _angular_core__WEBPACK_IMPORTED_MODULE_0__.TransferState;

/**
 * @module
 * @description
 * Entry point for all public APIs of this package.
 */
// This file only reexports content of the `src` folder. Keep it that way.

// This file is not used to build this module. It is only used during editing

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}])
//# sourceMappingURL=libs_install_product-journey_appointments_feat-appointment-detail_src_index_ts-_a2ee1.js.map