(self["webpackChunkproduct_journey_mfe"] = self["webpackChunkproduct_journey_mfe"] || []).push([["libs_install_product-journey_appointments_data-access_src_index_ts-_f7c31"],{

/***/ 54522:
/*!****************************************************************************!*\
  !*** ./libs/install/product-journey/appointments/data-access/src/index.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Appointment: () => (/* reexport safe */ _lib_entities_appointment_model__WEBPACK_IMPORTED_MODULE_2__.Appointment),
/* harmony export */   AppointmentFacade: () => (/* reexport safe */ _lib_facade_appointment_facade__WEBPACK_IMPORTED_MODULE_0__.AppointmentFacade),
/* harmony export */   AppointmentNgrxModule: () => (/* reexport safe */ _lib_state_appointment_ngrx_module__WEBPACK_IMPORTED_MODULE_1__.AppointmentNgrxModule),
/* harmony export */   AppointmentStatusEnum: () => (/* reexport safe */ _lib_entities_raw_appointment_model__WEBPACK_IMPORTED_MODULE_3__.AppointmentStatusEnum),
/* harmony export */   AppointmentTypeEnum: () => (/* reexport safe */ _lib_entities_raw_appointment_model__WEBPACK_IMPORTED_MODULE_3__.AppointmentTypeEnum),
/* harmony export */   AvailableTimeSlots: () => (/* reexport safe */ _lib_entities_available_timeslots__WEBPACK_IMPORTED_MODULE_5__.AvailableTimeSlots),
/* harmony export */   NotificationMethodEnum: () => (/* reexport safe */ _lib_entities_raw_appointment_model__WEBPACK_IMPORTED_MODULE_3__.NotificationMethodEnum),
/* harmony export */   OutdoorAppointmentModel: () => (/* reexport safe */ _lib_entities_outdoor_appointment_model__WEBPACK_IMPORTED_MODULE_7__.OutdoorAppointmentModel),
/* harmony export */   PeriodOfDayEnum: () => (/* reexport safe */ _lib_entities_raw_appointment_model__WEBPACK_IMPORTED_MODULE_3__.PeriodOfDayEnum),
/* harmony export */   TimeSlotEnum: () => (/* reexport safe */ _lib_entities_raw_available_timeslot__WEBPACK_IMPORTED_MODULE_6__.TimeSlotEnum),
/* harmony export */   selectAppointmentDetailsLoaded: () => (/* reexport safe */ _lib_state_appointment_selectors__WEBPACK_IMPORTED_MODULE_4__.selectAppointmentDetailsLoaded),
/* harmony export */   selectAppointmentError: () => (/* reexport safe */ _lib_state_appointment_selectors__WEBPACK_IMPORTED_MODULE_4__.selectAppointmentError),
/* harmony export */   selectAppointments: () => (/* reexport safe */ _lib_state_appointment_selectors__WEBPACK_IMPORTED_MODULE_4__.selectAppointments),
/* harmony export */   selectAvailableTimeSlotError: () => (/* reexport safe */ _lib_state_appointment_selectors__WEBPACK_IMPORTED_MODULE_4__.selectAvailableTimeSlotError),
/* harmony export */   selectAvailableTimeSlots: () => (/* reexport safe */ _lib_state_appointment_selectors__WEBPACK_IMPORTED_MODULE_4__.selectAvailableTimeSlots),
/* harmony export */   selectCompletedAppointments: () => (/* reexport safe */ _lib_state_appointment_selectors__WEBPACK_IMPORTED_MODULE_4__.selectCompletedAppointments),
/* harmony export */   selectOpenAppointments: () => (/* reexport safe */ _lib_state_appointment_selectors__WEBPACK_IMPORTED_MODULE_4__.selectOpenAppointments),
/* harmony export */   selectOutdoorAppointment: () => (/* reexport safe */ _lib_state_appointment_selectors__WEBPACK_IMPORTED_MODULE_4__.selectOutdoorAppointment),
/* harmony export */   selectSelectedAppointment: () => (/* reexport safe */ _lib_state_appointment_selectors__WEBPACK_IMPORTED_MODULE_4__.selectSelectedAppointment)
/* harmony export */ });
/* harmony import */ var _lib_facade_appointment_facade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/facade/appointment.facade */ 94647);
/* harmony import */ var _lib_state_appointment_ngrx_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/+state/appointment-ngrx.module */ 955);
/* harmony import */ var _lib_entities_appointment_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/entities/appointment.model */ 27366);
/* harmony import */ var _lib_entities_raw_appointment_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/entities/raw-appointment.model */ 23049);
/* harmony import */ var _lib_state_appointment_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/+state/appointment.selectors */ 9812);
/* harmony import */ var _lib_entities_available_timeslots__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/entities/available.timeslots */ 43478);
/* harmony import */ var _lib_entities_raw_available_timeslot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/entities/raw-available.timeslot */ 35871);
/* harmony import */ var _lib_entities_outdoor_appointment_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/entities/outdoor-appointment.model */ 71889);









/***/ }),

/***/ 955:
/*!*********************************************************************************************************!*\
  !*** ./libs/install/product-journey/appointments/data-access/src/lib/+state/appointment-ngrx.module.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppointmentNgrxModule: () => (/* binding */ AppointmentNgrxModule)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ 12506);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _appointment_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appointment.effects */ 92579);
/* harmony import */ var _appointment_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appointment.reducer */ 50908);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);







class AppointmentNgrxModule {
  static ɵfac = function AppointmentNgrxModule_Factory(t) {
    return new (t || AppointmentNgrxModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: AppointmentNgrxModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.EffectsModule.forFeature([_appointment_effects__WEBPACK_IMPORTED_MODULE_2__.AppointmentEffects]), _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.StoreModule.forFeature(_appointment_reducer__WEBPACK_IMPORTED_MODULE_3__.appointmentsFeature)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppointmentNgrxModule, {
    imports: [_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.EffectsFeatureModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.StoreFeatureModule]
  });
})();

/***/ }),

/***/ 65795:
/*!*****************************************************************************************************!*\
  !*** ./libs/install/product-journey/appointments/data-access/src/lib/+state/appointment.actions.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cancelAppointment: () => (/* binding */ cancelAppointment),
/* harmony export */   cancelAppointmentSuccessAction: () => (/* binding */ cancelAppointmentSuccessAction),
/* harmony export */   getAppointments: () => (/* binding */ getAppointments),
/* harmony export */   getAppointmentsSuccessAction: () => (/* binding */ getAppointmentsSuccessAction),
/* harmony export */   getAvailableTimeSlots: () => (/* binding */ getAvailableTimeSlots),
/* harmony export */   getAvailableTimeSlotsErrorAction: () => (/* binding */ getAvailableTimeSlotsErrorAction),
/* harmony export */   getAvailableTimeSlotsSuccessAction: () => (/* binding */ getAvailableTimeSlotsSuccessAction),
/* harmony export */   getErrorAction: () => (/* binding */ getErrorAction),
/* harmony export */   getOpenAppointments: () => (/* binding */ getOpenAppointments),
/* harmony export */   getOutdoorAppointment: () => (/* binding */ getOutdoorAppointment),
/* harmony export */   getOutdoorAppointmentErrorAction: () => (/* binding */ getOutdoorAppointmentErrorAction),
/* harmony export */   getOutdoorAppointmentSuccessAction: () => (/* binding */ getOutdoorAppointmentSuccessAction),
/* harmony export */   rescheduleAppointment: () => (/* binding */ rescheduleAppointment),
/* harmony export */   rescheduleAppointmentSuccessAction: () => (/* binding */ rescheduleAppointmentSuccessAction),
/* harmony export */   selectAppointmentAction: () => (/* binding */ selectAppointmentAction),
/* harmony export */   showLoaderAction: () => (/* binding */ showLoaderAction),
/* harmony export */   showTimeSlotLoaderAction: () => (/* binding */ showTimeSlotLoaderAction),
/* harmony export */   updateAppointmentSuccessAction: () => (/* binding */ updateAppointmentSuccessAction),
/* harmony export */   updateContactDetail: () => (/* binding */ updateContactDetail)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);

const getAppointments = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[appointment] get appointments', _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps);
const getOpenAppointments = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[appointment] get open appointments', _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps);
const getAppointmentsSuccessAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[appointment] get appointments success response', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getErrorAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[appointment] get appointments Error', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const selectAppointmentAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[appointment] selectAppointment', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateContactDetail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[appointment] updateContactDetail', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateAppointmentSuccessAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[appointment] get update appointment success response', _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps);
const getAvailableTimeSlots = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[appointment] getAvailableTimeSlots', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getAvailableTimeSlotsSuccessAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[appointment] get available time slots success response', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const rescheduleAppointment = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[appointment] reschedule appointment', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const rescheduleAppointmentSuccessAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[appointment] reschedule appointment success response', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const cancelAppointment = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[appointment] cancel appointment', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const cancelAppointmentSuccessAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[appointment] cancel appointment success response', _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps);
const getAvailableTimeSlotsErrorAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[appointment] get available time slot error', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getOutdoorAppointment = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[appointment] get outdoor appointment', _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps);
const getOutdoorAppointmentSuccessAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[appointment] get outdoor appointment success response', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getOutdoorAppointmentErrorAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[appointment] get outdoor appointment Error', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const showLoaderAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[appointment] showLoaderAction', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const showTimeSlotLoaderAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[appointment] showTimeSlotLoaderAction', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 92579:
/*!*****************************************************************************************************!*\
  !*** ./libs/install/product-journey/appointments/data-access/src/lib/+state/appointment.effects.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppointmentEffects: () => (/* binding */ AppointmentEffects)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ 12506);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _infrastructure_appointments_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../infrastructure/appointments.service */ 83018);
/* harmony import */ var _appointment_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./appointment.actions */ 65795);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dayjs */ 70292);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _infrastructure_appointment_datalayer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../infrastructure/appointment-datalayer.service */ 27377);









class AppointmentEffects {
  actions$ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.Actions);
  appointmentsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_infrastructure_appointments_service__WEBPACK_IMPORTED_MODULE_3__.AppointmentsService);
  appointmentDatalayerService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_infrastructure_appointment_datalayer_service__WEBPACK_IMPORTED_MODULE_7__.AppointmentDatalayerService);
  appointments$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_appointment_actions__WEBPACK_IMPORTED_MODULE_4__.getAppointments), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(() => this.appointmentsService.getAppointments()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(appointments => (0,_appointment_actions__WEBPACK_IMPORTED_MODULE_4__.getAppointmentsSuccessAction)({
    appointments
  })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)((0,_appointment_actions__WEBPACK_IMPORTED_MODULE_4__.getErrorAction)({
    error: error
  })))));
  openAppointments$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_appointment_actions__WEBPACK_IMPORTED_MODULE_4__.getOpenAppointments), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(() => this.appointmentsService.getAppointments('OPEN')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(appointments => (0,_appointment_actions__WEBPACK_IMPORTED_MODULE_4__.getAppointmentsSuccessAction)({
    appointments
  })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)((0,_appointment_actions__WEBPACK_IMPORTED_MODULE_4__.getErrorAction)({
    error: error
  })))));
  updateContactDetail$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_appointment_actions__WEBPACK_IMPORTED_MODULE_4__.updateContactDetail), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.concatMap)(request => {
    return this.appointmentsService.updateContactDetails(request.customerDetail, request.appointmentId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.concatMap)(() => {
      this.appointmentDatalayerService.sendUpdateContactMethodEvent('contact method', request?.customerDetail?.notificationMethod?.toLowerCase());
      return this.appointmentsService.getAppointments();
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.concatMap)(appointments => [(0,_appointment_actions__WEBPACK_IMPORTED_MODULE_4__.getAppointmentsSuccessAction)({
      appointments
    }), (0,_appointment_actions__WEBPACK_IMPORTED_MODULE_4__.updateAppointmentSuccessAction)()]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)((0,_appointment_actions__WEBPACK_IMPORTED_MODULE_4__.getErrorAction)({
      error: error
    }))));
  })));
  availableTimeSlots$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_appointment_actions__WEBPACK_IMPORTED_MODULE_4__.getAvailableTimeSlots), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(request => {
    return this.appointmentsService.getAvailableTimeSlots(dayjs__WEBPACK_IMPORTED_MODULE_6___default()(request.startDate).format('YYYY-MM-DD'), request.appointmentId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(availableTimeSlots => (0,_appointment_actions__WEBPACK_IMPORTED_MODULE_4__.getAvailableTimeSlotsSuccessAction)({
      availableTimeSlots
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)((0,_appointment_actions__WEBPACK_IMPORTED_MODULE_4__.getAvailableTimeSlotsErrorAction)({
      error: error
    }))));
  })));
  rescheduleTimeSlot$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_appointment_actions__WEBPACK_IMPORTED_MODULE_4__.rescheduleAppointment), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.concatMap)(request => {
    const selectedTimeSlot = {
      ...request.selectedTimeSlot,
      date: dayjs__WEBPACK_IMPORTED_MODULE_6___default()(request.selectedTimeSlot?.date).format('YYYY-MM-DD')
    };
    const isReschedule = request.selectedTimeSlot?.appointmentType === 'RESCHEDULE';
    this.appointmentDatalayerService.sendRescheduleStartEvent();
    return this.appointmentsService.rescheduleTimeSlot(selectedTimeSlot, request.appointmentId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.concatMap)(() => {
      this.appointmentDatalayerService.sendRescheduleEndEvent();
      return this.appointmentsService.getAppointments();
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.concatMap)(appointments => [(0,_appointment_actions__WEBPACK_IMPORTED_MODULE_4__.getAppointmentsSuccessAction)({
      appointments
    }), (0,_appointment_actions__WEBPACK_IMPORTED_MODULE_4__.rescheduleAppointmentSuccessAction)({
      isReschedule
    })]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)((0,_appointment_actions__WEBPACK_IMPORTED_MODULE_4__.getErrorAction)({
      error: error
    }))));
  })));
  cancelAppointment$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_appointment_actions__WEBPACK_IMPORTED_MODULE_4__.cancelAppointment), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.concatMap)(request => {
    return this.appointmentsService.cancelAppointment(request.appointmentId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.concatMap)(() => {
      this.appointmentDatalayerService.sendCancelAppointmentEvent();
      return this.appointmentsService.getAppointments();
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.concatMap)(appointments => [(0,_appointment_actions__WEBPACK_IMPORTED_MODULE_4__.getAppointmentsSuccessAction)({
      appointments
    }), (0,_appointment_actions__WEBPACK_IMPORTED_MODULE_4__.cancelAppointmentSuccessAction)()]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)((0,_appointment_actions__WEBPACK_IMPORTED_MODULE_4__.getErrorAction)({
      error: error
    }))));
  })));
  outdoorAppointment$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_appointment_actions__WEBPACK_IMPORTED_MODULE_4__.getOutdoorAppointment), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(() => this.appointmentsService.getOutdoorAppointment()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(outdoorAppointment => (0,_appointment_actions__WEBPACK_IMPORTED_MODULE_4__.getOutdoorAppointmentSuccessAction)({
    outdoorAppointment
  })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)((0,_appointment_actions__WEBPACK_IMPORTED_MODULE_4__.getOutdoorAppointmentErrorAction)({
    error: error
  })))));
  static ɵfac = function AppointmentEffects_Factory(t) {
    return new (t || AppointmentEffects)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: AppointmentEffects,
    factory: AppointmentEffects.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 50908:
/*!*****************************************************************************************************!*\
  !*** ./libs/install/product-journey/appointments/data-access/src/lib/+state/appointment.reducer.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appointmentReducer: () => (/* binding */ appointmentReducer),
/* harmony export */   appointmentsFeature: () => (/* binding */ appointmentsFeature),
/* harmony export */   reducer: () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _appointment_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appointment.state */ 83601);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! immer */ 75825);
/* harmony import */ var _appointment_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appointment.actions */ 65795);
/* harmony import */ var _entities_raw_appointment_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entities/raw-appointment.model */ 23049);





function getOpenAppointments(appointments) {
  return appointments.filter(appointment => !(appointment.appointmentStatus === _entities_raw_appointment_model__WEBPACK_IMPORTED_MODULE_3__.AppointmentStatusEnum.COMPLETED || appointment.appointmentStatus === _entities_raw_appointment_model__WEBPACK_IMPORTED_MODULE_3__.AppointmentStatusEnum.CANCELLED));
}
function getCompletedAppointments(appointments) {
  return appointments.filter(appointment => appointment.appointmentStatus === _entities_raw_appointment_model__WEBPACK_IMPORTED_MODULE_3__.AppointmentStatusEnum.COMPLETED || appointment.appointmentStatus === _entities_raw_appointment_model__WEBPACK_IMPORTED_MODULE_3__.AppointmentStatusEnum.CANCELLED);
}
function isNewAppointment(appointment) {
  return appointment && appointment.timeSlot?.startTime === undefined;
}
function getSortedAppointments(response) {
  let appointments = [];
  let newAppointments = [];
  appointments = response.filter(appointment => {
    return !isNewAppointment(appointment);
  });
  newAppointments = response.filter(appointment => {
    return isNewAppointment(appointment);
  });
  appointments.sort(compareDate);
  return [...new Set([...newAppointments, ...appointments])];
}
function compareDate(a, b) {
  return Date.parse(b.appointmentDate ?? '') - Date.parse(a.appointmentDate ?? '');
}
const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createReducer)(_appointment_state__WEBPACK_IMPORTED_MODULE_1__.defaultState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_appointment_actions__WEBPACK_IMPORTED_MODULE_2__.getAppointmentsSuccessAction, (state, {
  appointments
}) => (0,immer__WEBPACK_IMPORTED_MODULE_4__.produce)(state, draft => {
  draft.appointmentDetailsLoaded = true;
  draft.appointments = appointments;
  draft.openAppointments = getSortedAppointments(getOpenAppointments(draft.appointments));
  draft.completedAppointments = getSortedAppointments(getCompletedAppointments(draft.appointments));
  draft.selectedAppointment = !draft.openAppointments?.length ? draft.completedAppointments[0] : draft.openAppointments[0];
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_appointment_actions__WEBPACK_IMPORTED_MODULE_2__.selectAppointmentAction, (state, action) => ({
  ...state,
  selectedAppointment: action.selectedAppointment
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_appointment_actions__WEBPACK_IMPORTED_MODULE_2__.showLoaderAction, (state, action) => ({
  ...state,
  appointmentDetailsLoaded: action.appointmentDetailsLoaded
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_appointment_actions__WEBPACK_IMPORTED_MODULE_2__.updateAppointmentSuccessAction, state => ({
  ...state,
  selectedAppointment: {
    ...state.selectedAppointment,
    isSaveContactSuccess: true
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_appointment_actions__WEBPACK_IMPORTED_MODULE_2__.getAvailableTimeSlotsSuccessAction, (state, action) => ({
  ...state,
  timeSlotsLoaded: true,
  availableTimeSlots: action.availableTimeSlots
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_appointment_actions__WEBPACK_IMPORTED_MODULE_2__.rescheduleAppointmentSuccessAction, (state, action) => ({
  ...state,
  selectedAppointment: {
    ...state.selectedAppointment,
    isRescheduleAppointmentSuccess: action.isReschedule,
    isScheduleAppointmentSuccess: !action.isReschedule
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_appointment_actions__WEBPACK_IMPORTED_MODULE_2__.cancelAppointmentSuccessAction, state => ({
  ...state,
  selectedAppointment: {
    ...state.selectedAppointment,
    isAppointmentCancellationSuccess: true
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_appointment_actions__WEBPACK_IMPORTED_MODULE_2__.getErrorAction, (state, action) => ({
  ...state,
  appointmentDetailsLoaded: true,
  error: action.error
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_appointment_actions__WEBPACK_IMPORTED_MODULE_2__.getAvailableTimeSlotsErrorAction, (state, action) => ({
  ...state,
  timeSlotsLoaded: true,
  availableTimeSlotError: action.error
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_appointment_actions__WEBPACK_IMPORTED_MODULE_2__.getOutdoorAppointmentSuccessAction, (state, action) => ({
  ...state,
  outdoorAppointment: action.outdoorAppointment
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_appointment_actions__WEBPACK_IMPORTED_MODULE_2__.getOutdoorAppointmentErrorAction, (state, action) => ({
  ...state,
  error: action.error
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_appointment_actions__WEBPACK_IMPORTED_MODULE_2__.showTimeSlotLoaderAction, (state, action) => ({
  ...state,
  timeSlotsLoaded: action.timeSlotLoaded
})));
function appointmentReducer(state = _appointment_state__WEBPACK_IMPORTED_MODULE_1__.defaultState, action) {
  return reducer(state, action);
}
const appointmentsFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeature)({
  name: 'appointmentsFeature',
  reducer: appointmentReducer
});

/***/ }),

/***/ 9812:
/*!*******************************************************************************************************!*\
  !*** ./libs/install/product-journey/appointments/data-access/src/lib/+state/appointment.selectors.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appointmentFeatureState: () => (/* binding */ appointmentFeatureState),
/* harmony export */   selectAppointmentDetailsLoaded: () => (/* binding */ selectAppointmentDetailsLoaded),
/* harmony export */   selectAppointmentError: () => (/* binding */ selectAppointmentError),
/* harmony export */   selectAppointments: () => (/* binding */ selectAppointments),
/* harmony export */   selectAvailableTimeSlotError: () => (/* binding */ selectAvailableTimeSlotError),
/* harmony export */   selectAvailableTimeSlots: () => (/* binding */ selectAvailableTimeSlots),
/* harmony export */   selectCompletedAppointments: () => (/* binding */ selectCompletedAppointments),
/* harmony export */   selectOpenAppointments: () => (/* binding */ selectOpenAppointments),
/* harmony export */   selectOutdoorAppointment: () => (/* binding */ selectOutdoorAppointment),
/* harmony export */   selectSelectedAppointment: () => (/* binding */ selectSelectedAppointment),
/* harmony export */   selectTimeSlotsLoaded: () => (/* binding */ selectTimeSlotsLoaded)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);

const appointmentFeatureState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)('appointmentsFeature');
const selectAppointments = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(appointmentFeatureState, state => state.appointments);
const selectSelectedAppointment = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(appointmentFeatureState, state => state.selectedAppointment);
const selectCompletedAppointments = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(appointmentFeatureState, state => state.completedAppointments);
const selectOpenAppointments = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(appointmentFeatureState, state => state.openAppointments);
const selectAvailableTimeSlots = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(appointmentFeatureState, state => state.availableTimeSlots);
const selectAppointmentError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(appointmentFeatureState, state => state.error);
const selectAvailableTimeSlotError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(appointmentFeatureState, state => state.availableTimeSlotError);
const selectOutdoorAppointment = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(appointmentFeatureState, state => state.outdoorAppointment);
const selectAppointmentDetailsLoaded = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(appointmentFeatureState, state => state.appointmentDetailsLoaded);
const selectTimeSlotsLoaded = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(appointmentFeatureState, state => state.timeSlotsLoaded);

/***/ }),

/***/ 83601:
/*!***************************************************************************************************!*\
  !*** ./libs/install/product-journey/appointments/data-access/src/lib/+state/appointment.state.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultState: () => (/* binding */ defaultState)
/* harmony export */ });
const defaultState = {
  appointments: [],
  selectedAppointment: undefined,
  openAppointments: [],
  completedAppointments: [],
  availableTimeSlots: [],
  error: undefined,
  availableTimeSlotError: undefined,
  outdoorAppointment: undefined,
  appointmentDetailsLoaded: false,
  timeSlotsLoaded: false
};

/***/ }),

/***/ 96459:
/*!**********************************************************************************************************!*\
  !*** ./libs/install/product-journey/appointments/data-access/src/lib/constants/appointments.constant.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppointmentsConstants: () => (/* binding */ AppointmentsConstants)
/* harmony export */ });
class AppointmentsConstants {
  static APPOINTMENTS_ERROR_CAUSE_KEYS = new Map([['Availabilities-004', 'availability-does-not-exists'], ['Availabilities-005', 'availability-code-expired'], ['Availabilities-023', 'not-possible-generate-availabilities'], ['Availabilities-018', 'taskgroup-already-cancelled'], ['CBE-001', 'erp-backend-error'], ['ERR_USP_001', 'unexpected-system-error'], ['ERR_USP_058', 'unexpected-unit-t-error'], ['ERR_USP_069', 'given-entityid-does-not-belong-taskgroup'], ['ERR_USP_125', 'booking-not-allowed'], ['Interventions-002', 'taskgroup-has-existing-intervention'], ['Interventions-033', 'existing-taskgroup-reservation-expired'], ['Reservations-003', 'taskgroup-has-existing-reservation'], ['Reservations-014', 'slot-no-longer-available'], ['Taskgroups-005', 'update-ongoing-taskgroup-not-allowed'], ['Taskgroups-030', 'taskgroup-already-done-or-cancelled'], ['Validations-001', 'missing-required-keys'], ['Reservations-005', 'scheduling-appointment-failure']]);
}

/***/ }),

/***/ 27366:
/*!*****************************************************************************************************!*\
  !*** ./libs/install/product-journey/appointments/data-access/src/lib/entities/appointment.model.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Appointment: () => (/* binding */ Appointment)
/* harmony export */ });
class Appointment {
  appointmentId;
  appointmentType;
  appointmentSubType;
  appointmentStatus;
  appointmentDate;
  customer;
  timeSlot;
  cableAppointment;
  fiberAppointment;
  salesOrderId;
  cost;
  address;
  productsInfo;
  installationDateAtNewAddress;
  isUpcomingAppointment;
  getDisplayStatus;
  isNewAppointment;
  isCompletedOrCancelledAppointment;
  isScheduledAppointment;
  isRepairAppointment;
  dayOfMonth;
  dayLabelKey = '';
  monthLabelKey = '';
  timeslotCodeLabelKey = '';
  appointmentSubTypeMessage = '';
  isPostponedAppointmentNeedsReschedule;
  isAppointmentInWait;
  isRescheduleAppointmentSuccess;
  isScheduleAppointmentSuccess;
  isSaveContactSuccess;
  isAppointmentCancellationSuccess;
}

/***/ }),

/***/ 43478:
/*!*******************************************************************************************************!*\
  !*** ./libs/install/product-journey/appointments/data-access/src/lib/entities/available.timeslots.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AvailableTimeSlots: () => (/* binding */ AvailableTimeSlots)
/* harmony export */ });
class AvailableTimeSlots {
  date;
  timeSlots;
}

/***/ }),

/***/ 71889:
/*!*************************************************************************************************************!*\
  !*** ./libs/install/product-journey/appointments/data-access/src/lib/entities/outdoor-appointment.model.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OutdoorAppointmentModel: () => (/* binding */ OutdoorAppointmentModel)
/* harmony export */ });
class OutdoorAppointmentModel {
  locationIds;
}

/***/ }),

/***/ 23049:
/*!*********************************************************************************************************!*\
  !*** ./libs/install/product-journey/appointments/data-access/src/lib/entities/raw-appointment.model.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppointmentStatusEnum: () => (/* binding */ AppointmentStatusEnum),
/* harmony export */   AppointmentTypeEnum: () => (/* binding */ AppointmentTypeEnum),
/* harmony export */   NotificationMethodEnum: () => (/* binding */ NotificationMethodEnum),
/* harmony export */   PeriodOfDayEnum: () => (/* binding */ PeriodOfDayEnum),
/* harmony export */   RawAppointment: () => (/* binding */ RawAppointment)
/* harmony export */ });
class RawAppointment {
  appointmentId;
  appointmentType;
  appointmentSubType;
  appointmentStatus;
  appointmentDate;
  customer;
  timeSlot;
  cableAppointment;
  fiberAppointment;
  salesOrderId;
  cost;
  address;
  products;
  installationDateAtNewAddress;
}
var AppointmentTypeEnum;
(function (AppointmentTypeEnum) {
  AppointmentTypeEnum["MOVE"] = "MOVE";
  AppointmentTypeEnum["INSTALL"] = "INSTALL";
  AppointmentTypeEnum["REPAIR"] = "REPAIR";
  AppointmentTypeEnum["RESCHEDULE"] = "RESCHEDULE";
  AppointmentTypeEnum["SCHEDULE"] = "SCHEDULE";
  AppointmentTypeEnum["UNKNOWN"] = "Unknown";
})(AppointmentTypeEnum || (AppointmentTypeEnum = {}));
var AppointmentStatusEnum;
(function (AppointmentStatusEnum) {
  AppointmentStatusEnum["NEW"] = "NEW";
  AppointmentStatusEnum["SCHEDULED"] = "SCHEDULED";
  AppointmentStatusEnum["COMPLETED"] = "COMPLETED";
  AppointmentStatusEnum["CANCELLED"] = "CANCELLED";
  AppointmentStatusEnum["POSTPONE_NEEDRESCHEDULE"] = "POSTPONE_NEEDRESCHEDULE";
  AppointmentStatusEnum["POSTPONE_RESCHEDULED"] = "POSTPONE_RESCHEDULED";
  AppointmentStatusEnum["WAIT"] = "WAIT";
})(AppointmentStatusEnum || (AppointmentStatusEnum = {}));
var NotificationMethodEnum;
(function (NotificationMethodEnum) {
  NotificationMethodEnum["EMAIL"] = "EMAIL";
  NotificationMethodEnum["SMS"] = "SMS";
  NotificationMethodEnum["VOICE"] = "VOICE";
})(NotificationMethodEnum || (NotificationMethodEnum = {}));
var PeriodOfDayEnum;
(function (PeriodOfDayEnum) {
  PeriodOfDayEnum["AM"] = "AM";
  PeriodOfDayEnum["PM"] = "PM";
  PeriodOfDayEnum["MI"] = "MI";
  PeriodOfDayEnum["EV"] = "EV";
  PeriodOfDayEnum["DAY"] = "DAY";
})(PeriodOfDayEnum || (PeriodOfDayEnum = {}));

/***/ }),

/***/ 35871:
/*!**********************************************************************************************************!*\
  !*** ./libs/install/product-journey/appointments/data-access/src/lib/entities/raw-available.timeslot.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RawAvailableTimeslot: () => (/* binding */ RawAvailableTimeslot),
/* harmony export */   TimeSlotEnum: () => (/* binding */ TimeSlotEnum)
/* harmony export */ });
class RawAvailableTimeslot {
  date;
  timeSlots;
}
var TimeSlotEnum;
(function (TimeSlotEnum) {
  TimeSlotEnum[TimeSlotEnum["ALL_DAY"] = 0] = "ALL_DAY";
  TimeSlotEnum["DAY"] = "DAY";
  TimeSlotEnum["AM"] = "MORNING";
  TimeSlotEnum["MI"] = "LUNCH";
  TimeSlotEnum["PM"] = "AFTERNOON";
  TimeSlotEnum["EV"] = "EVENING";
})(TimeSlotEnum || (TimeSlotEnum = {}));

/***/ }),

/***/ 94647:
/*!****************************************************************************************************!*\
  !*** ./libs/install/product-journey/appointments/data-access/src/lib/facade/appointment.facade.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppointmentFacade: () => (/* binding */ AppointmentFacade)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _state_appointment_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../+state/appointment.actions */ 65795);
/* harmony import */ var _state_appointment_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../+state/appointment.selectors */ 9812);





class AppointmentFacade {
  store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Store);
  appointments$ = this.store.select(_state_appointment_selectors__WEBPACK_IMPORTED_MODULE_3__.selectAppointments);
  selectedAppointment$ = this.store.select(_state_appointment_selectors__WEBPACK_IMPORTED_MODULE_3__.selectSelectedAppointment);
  completedAppointments$ = this.store.select(_state_appointment_selectors__WEBPACK_IMPORTED_MODULE_3__.selectCompletedAppointments);
  openAppointments$ = this.store.select(_state_appointment_selectors__WEBPACK_IMPORTED_MODULE_3__.selectOpenAppointments);
  availableTimeSlots$ = this.store.select(_state_appointment_selectors__WEBPACK_IMPORTED_MODULE_3__.selectAvailableTimeSlots);
  appointmentError$ = this.store.select(_state_appointment_selectors__WEBPACK_IMPORTED_MODULE_3__.selectAppointmentError);
  availableTimeSlotError$ = this.store.select(_state_appointment_selectors__WEBPACK_IMPORTED_MODULE_3__.selectAvailableTimeSlotError);
  outdoorAppointment$ = this.store.select(_state_appointment_selectors__WEBPACK_IMPORTED_MODULE_3__.selectOutdoorAppointment);
  appointmentDetailsLoaded$ = this.store.select(_state_appointment_selectors__WEBPACK_IMPORTED_MODULE_3__.selectAppointmentDetailsLoaded);
  timeSlotsLoaded$ = this.store.select(_state_appointment_selectors__WEBPACK_IMPORTED_MODULE_3__.selectTimeSlotsLoaded);
  loadAppointments() {
    this.store.dispatch((0,_state_appointment_actions__WEBPACK_IMPORTED_MODULE_2__.getAppointments)());
  }
  loadOpenAppointments() {
    this.store.dispatch((0,_state_appointment_actions__WEBPACK_IMPORTED_MODULE_2__.getOpenAppointments)());
  }
  loadOutdoorAppointment() {
    this.store.dispatch((0,_state_appointment_actions__WEBPACK_IMPORTED_MODULE_2__.getOutdoorAppointment)());
  }
  setSelectAppointment(selectedAppointment) {
    this.store.dispatch((0,_state_appointment_actions__WEBPACK_IMPORTED_MODULE_2__.selectAppointmentAction)({
      selectedAppointment
    }));
  }
  updateContactDetail(customerDetail, appointmentId) {
    this.store.dispatch((0,_state_appointment_actions__WEBPACK_IMPORTED_MODULE_2__.showLoaderAction)({
      appointmentDetailsLoaded: false
    }));
    this.store.dispatch((0,_state_appointment_actions__WEBPACK_IMPORTED_MODULE_2__.updateContactDetail)({
      customerDetail,
      appointmentId
    }));
  }
  getAvailableTimeSlots(startDate, appointmentId) {
    this.store.dispatch((0,_state_appointment_actions__WEBPACK_IMPORTED_MODULE_2__.showTimeSlotLoaderAction)({
      timeSlotLoaded: false
    }));
    this.store.dispatch((0,_state_appointment_actions__WEBPACK_IMPORTED_MODULE_2__.getAvailableTimeSlots)({
      startDate,
      appointmentId
    }));
  }
  rescheduleAppointment(rescheduleTimeSlot, appointmentId) {
    this.store.dispatch((0,_state_appointment_actions__WEBPACK_IMPORTED_MODULE_2__.showLoaderAction)({
      appointmentDetailsLoaded: false
    }));
    this.store.dispatch((0,_state_appointment_actions__WEBPACK_IMPORTED_MODULE_2__.rescheduleAppointment)({
      selectedTimeSlot: rescheduleTimeSlot,
      appointmentId
    }));
  }
  cancelAppointment(appointmentId) {
    this.store.dispatch((0,_state_appointment_actions__WEBPACK_IMPORTED_MODULE_2__.showLoaderAction)({
      appointmentDetailsLoaded: false
    }));
    this.store.dispatch((0,_state_appointment_actions__WEBPACK_IMPORTED_MODULE_2__.cancelAppointment)({
      appointmentId
    }));
  }
  static ɵfac = function AppointmentFacade_Factory(t) {
    return new (t || AppointmentFacade)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: AppointmentFacade,
    factory: AppointmentFacade.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 27377:
/*!***********************************************************************************************************************!*\
  !*** ./libs/install/product-journey/appointments/data-access/src/lib/infrastructure/appointment-datalayer.service.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppointmentDatalayerService: () => (/* binding */ AppointmentDatalayerService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @telenet/ng-lib-datalayer */ 42782);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1__);



class AppointmentDatalayerService {
  dataLayerService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1__.DataLayerService);
  INTENT_RESCHEDULE_APPOINTMENT = 'reschedule appointment';
  INTENT_NEW_APPOINTMENT = 'new appointment';
  MESSAGE_GROUP = ['appointments'];
  FLOWTYPE_CARE = 'care';
  currentIntent;
  componentInstanceId;
  sendRescheduleStartEvent() {
    const eventInfo = this.getEventInfo(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1__.EventNameEnum.EVENT_NAME_RESCHEDULE_APPOINTMENT_FLOW_STARTED, _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1__.EventTypeEnum.EVENT_TYPE_SELF_SERVICE_FLOW_STARTED);
    this.currentIntent = this.INTENT_RESCHEDULE_APPOINTMENT;
    const attributes = this.getAttributes();
    this.addEvent(eventInfo, attributes);
  }
  sendRescheduleEndEvent() {
    const eventInfo = this.getEventInfo(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1__.EventNameEnum.EVENT_NAME_RESCHEDULE_APPOINTMENT_FLOW_COMPLETED, _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1__.EventTypeEnum.EVENT_TYPE_SELF_SERVICE_FLOW_END);
    const attributes = this.getAttributes();
    this.addEvent(eventInfo, attributes);
    this.resetIntent();
  }
  sendCancelAppointmentEvent() {
    const eventInfo = this.getEventInfo(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1__.EventNameEnum.EVENT_NAME_CANCEL_APPOINTMENT, _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1__.EventTypeEnum.EVENT_TYPE_CLICK);
    const attributes = {};
    this.addEvent(eventInfo, attributes);
  }
  sendUpdateContactMethodEvent(itemName, itemData) {
    const eventInfo = this.getEventInfo(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1__.EventNameEnum.EVENT_NAME_APPOINTMENT_OPTION_SELECTED, _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1__.EventTypeEnum.EVENT_TYPE_CLICK);
    const attributes = this.getAttributes(itemName, itemData);
    this.addEvent(eventInfo, attributes);
  }
  sendSelectedDateTimeEvent(itemName) {
    const eventInfo = this.getEventInfo(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1__.EventNameEnum.EVENT_NAME_APPOINTMENT_OPTION_SELECTED, _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1__.EventTypeEnum.EVENT_TYPE_CLICK);
    const attributes = this.getAttributes(itemName);
    this.addEvent(eventInfo, attributes);
  }
  getEventInfo(eventName, eventType) {
    return this.dataLayerService.createEventInfo(eventName, eventType, this.MESSAGE_GROUP);
  }
  getAttributes(itemName = '', itemData = '') {
    return {
      itemName,
      itemData,
      intent: this.currentIntent,
      flowType: this.FLOWTYPE_CARE
    };
  }
  addEvent(eventInfo, attributes) {
    this.dataLayerService.addEvent(eventInfo, attributes, this.category);
  }
  get category() {
    const category = this.dataLayerService.getCategory(this.componentInstanceId);
    return category || this.dataLayerService.createCategory('care', 'product journey');
  }
  resetIntent() {
    this.currentIntent = this.INTENT_NEW_APPOINTMENT;
  }
  static ɵfac = function AppointmentDatalayerService_Factory(t) {
    return new (t || AppointmentDatalayerService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: AppointmentDatalayerService,
    factory: AppointmentDatalayerService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 83018:
/*!**************************************************************************************************************!*\
  !*** ./libs/install/product-journey/appointments/data-access/src/lib/infrastructure/appointments.service.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppointmentsService: () => (/* binding */ AppointmentsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mapper_appointments_mapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mapper/appointments.mapper */ 3346);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @telenet/ng-lib-ocapi */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mapper_available_time_slots_mapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mapper/available-time-slots.mapper */ 6150);
/* harmony import */ var _mapper_success_mapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mapper/success-mapper */ 73701);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @telenet/ng-lib-message */ 65145);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mapper_outdoor_appointment_mapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mapper/outdoor-appointment.mapper */ 52128);
/* harmony import */ var _constants_appointments_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants/appointments.constant */ 96459);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! dayjs */ 70292);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_10__);












const APPOINTMENTS_API = '/public/api/appointments-service/v1/appointments';
const MESSAGE_GROUP = 'appointments';
const AVAILABLE_TIMESLOT_MESSAGE_GROUP = 'available time slot';
const NO_TIME_SLOTS = 'Availabilities-023';
class AppointmentsService {
  ocapiService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_3__.OcapiService);
  appointmentsMapper = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_mapper_appointments_mapper__WEBPACK_IMPORTED_MODULE_2__.AppointmentsMapper);
  messageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_6__.MessageService);
  getAppointments(status) {
    const endpoint = status ? APPOINTMENTS_API.concat('?status=' + status) : APPOINTMENTS_API;
    return this.ocapiService.doGet(new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_3__.OcapiCallConfig(MESSAGE_GROUP, endpoint, this.appointmentsMapper));
  }
  getAvailableTimeSlots(startDate, appointmentId) {
    return this.tryGetAvailableTimeSlots(startDate, startDate, appointmentId);
  }
  tryGetAvailableTimeSlots(date, initialDate, appointmentId) {
    const ocapiConfig = this.getAvailableTimeSlotsOcapiConfig(date, appointmentId);
    return this.ocapiService.doGet(ocapiConfig).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(error => {
      if (error?.error['code'] === NO_TIME_SLOTS) {
        return this.handleNoTimeSlotsError(date, initialDate, appointmentId);
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => error);
    }));
  }
  getAvailableTimeSlotsUrl(startDate, appointmentId) {
    let endpoint = APPOINTMENTS_API.concat('/' + appointmentId + '/available-time-slots');
    if (window['Config']['ocapi-url'] !== 'http://localhost:8080') {
      endpoint = endpoint.concat('?startDate=' + startDate);
    }
    return endpoint;
  }
  getAvailableTimeSlotsOcapiConfig(startDate, appointmentId) {
    const availableTimeSlotsUrl = this.getAvailableTimeSlotsUrl(startDate, appointmentId);
    const ocapiCallConfig = new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_3__.OcapiCallConfig(AVAILABLE_TIMESLOT_MESSAGE_GROUP, availableTimeSlotsUrl, _mapper_available_time_slots_mapper__WEBPACK_IMPORTED_MODULE_4__.AvailableTimeSlotsMapper);
    ocapiCallConfig.errorHandler = this.handleOcapiError.bind(this);
    return ocapiCallConfig;
  }
  handleNoTimeSlotsError(date, initialDate, appointmentId) {
    const isInitialDateToday = dayjs__WEBPACK_IMPORTED_MODULE_10___default()(initialDate).isSame(dayjs__WEBPACK_IMPORTED_MODULE_10___default()(), 'day');
    const isDateWithin2Months = dayjs__WEBPACK_IMPORTED_MODULE_10___default()(date).isBefore(dayjs__WEBPACK_IMPORTED_MODULE_10___default()().add(2, 'month'));
    if (isInitialDateToday && isDateWithin2Months) {
      const newStartDate = dayjs__WEBPACK_IMPORTED_MODULE_10___default()(date).add(13, 'days').format('YYYY-MM-DD');
      return this.tryGetAvailableTimeSlots(newStartDate, initialDate, appointmentId);
    } else {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)([]);
    }
  }
  updateContactDetails(customerDetail, appointmentId) {
    const endpoint = APPOINTMENTS_API.concat('/' + appointmentId + '/contactdetails');
    const updateContactConfig = new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_3__.OcapiCallConfig(MESSAGE_GROUP, endpoint, _mapper_success_mapper__WEBPACK_IMPORTED_MODULE_5__.SuccessMapper, customerDetail);
    updateContactConfig.errorHandler = this.handleOcapiError.bind(this);
    return this.ocapiService.doPut(updateContactConfig);
  }
  rescheduleTimeSlot(selectedTimeSlot, appointmentId) {
    const endpoint = APPOINTMENTS_API.concat('/' + appointmentId + '/reschedule');
    const rescheduleOcapiCallConfig = new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_3__.OcapiCallConfig(MESSAGE_GROUP, endpoint, _mapper_success_mapper__WEBPACK_IMPORTED_MODULE_5__.SuccessMapper, selectedTimeSlot);
    rescheduleOcapiCallConfig.errorHandler = this.handleOcapiError.bind(this);
    return this.ocapiService.doPut(rescheduleOcapiCallConfig);
  }
  cancelAppointment(appointmentId) {
    const endpoint = APPOINTMENTS_API.concat('/' + appointmentId);
    const cancelConfig = new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_3__.OcapiCallConfig(MESSAGE_GROUP, endpoint, _mapper_success_mapper__WEBPACK_IMPORTED_MODULE_5__.SuccessMapper);
    cancelConfig.errorHandler = this.handleOcapiError.bind(this);
    return this.ocapiService.doDelete(cancelConfig);
  }
  getOutdoorAppointment() {
    const endpoint = APPOINTMENTS_API.concat('/fiber-access');
    return this.ocapiService.doGet(new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_3__.OcapiCallConfig(MESSAGE_GROUP, endpoint, _mapper_outdoor_appointment_mapper__WEBPACK_IMPORTED_MODULE_7__.OutdoorAppointmentMapper));
  }
  handleOcapiError(error, ocapiCall) {
    const errorCode = error?.error?.code;
    if (errorCode === 'Availabilities-023') {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => error);
    }
    const errorCauseKey = _constants_appointments_constant__WEBPACK_IMPORTED_MODULE_8__.AppointmentsConstants.APPOINTMENTS_ERROR_CAUSE_KEYS.get(errorCode);
    if (errorCauseKey) {
      const errorMessage = errorCauseKey ? `${errorCode}.${errorCauseKey}` : errorCode;
      this.messageService.addMessage(new _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_6__.ErrorMessage(ocapiCall.messageGroupName, `${MESSAGE_GROUP}.${errorMessage}`));
    } else {
      this.messageService.addMessage(new _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_6__.ErrorMessage(ocapiCall.messageGroupName, `appointment.${error.status.toString()}`));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => error);
  }
  static ɵfac = function AppointmentsService_Factory(t) {
    return new (t || AppointmentsService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: AppointmentsService,
    factory: AppointmentsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 3346:
/*!*****************************************************************************************************!*\
  !*** ./libs/install/product-journey/appointments/data-access/src/lib/mapper/appointments.mapper.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppointmentsMapper: () => (/* binding */ AppointmentsMapper)
/* harmony export */ });
/* harmony import */ var _entities_raw_appointment_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities/raw-appointment.model */ 23049);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @telenet/ng-lib-omapi */ 64512);
/* harmony import */ var _telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_2__);




class AppointmentsMapper {
  omapiProductMapper = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_2__.OmapiProductMapper);
  toModel(rawAppointmentsDetails) {
    return rawAppointmentsDetails.map(raw => ({
      appointmentId: raw.appointmentId,
      appointmentType: raw.appointmentType,
      appointmentSubType: raw.appointmentSubType,
      appointmentStatus: raw.appointmentStatus,
      appointmentDate: raw.appointmentDate,
      cableAppointment: raw.cableAppointment,
      fiberAppointment: raw.fiberAppointment,
      salesOrderId: raw.salesOrderId,
      cost: this.mapCost(raw.cost),
      productsInfo: raw.products?.map(product => this.omapiProductMapper.toModel(product.rawOmapi)),
      installationDateAtNewAddress: raw.installationDateAtNewAddress,
      customer: this.mapCustomer(raw.customer),
      timeSlot: this.mapTimeSlot(raw.timeSlot),
      address: this.mapAddress(raw.address),
      isUpcomingAppointment: this.isUpcomingAppointment(raw.appointmentStatus),
      getDisplayStatus: this.getDisplayStatus(raw),
      isNewAppointment: this.isNewAppointment(raw),
      isCompletedOrCancelledAppointment: this.isCompletedOrCancelledAppointment(raw.appointmentStatus),
      isScheduledAppointment: this.isScheduledAppointment(raw.appointmentStatus),
      isRepairAppointment: this.isRepairAppointment(raw.appointmentType),
      isPostponedAppointmentNeedsReschedule: this.isPostponedAppointmentNeedsReschedule(raw.appointmentStatus),
      isAppointmentInWait: this.isAppointmentInWait(raw.appointmentStatus)
    }));
  }
  mapCustomer(customer) {
    return {
      contactName: this.mapContactName(customer?.contactName),
      language: customer?.language,
      notificationMethod: customer?.notificationMethod,
      notificationContact: customer?.notificationContact
    };
  }
  mapTimeSlot(timeSlot) {
    return {
      periodOfDay: timeSlot?.periodOfDay,
      startTime: timeSlot?.startTime,
      endTime: timeSlot?.endTime
    };
  }
  mapAddress(address) {
    return {
      street: address?.street,
      houseNumber: address?.houseNumber,
      boxNumber: address?.boxNumber,
      zip: address?.zip,
      city: address?.city,
      countryCode: address?.countryCode,
      country: address?.country,
      locationId: address?.locationId
    };
  }
  isUpcomingAppointment(appointmentStatus) {
    return appointmentStatus !== _entities_raw_appointment_model__WEBPACK_IMPORTED_MODULE_0__.AppointmentStatusEnum.COMPLETED && appointmentStatus !== _entities_raw_appointment_model__WEBPACK_IMPORTED_MODULE_0__.AppointmentStatusEnum.CANCELLED;
  }
  getDisplayStatus(appointment) {
    return appointment.appointmentStatus === _entities_raw_appointment_model__WEBPACK_IMPORTED_MODULE_0__.AppointmentStatusEnum.NEW && appointment.timeSlot ? _entities_raw_appointment_model__WEBPACK_IMPORTED_MODULE_0__.AppointmentStatusEnum.SCHEDULED : appointment.appointmentStatus ?? _entities_raw_appointment_model__WEBPACK_IMPORTED_MODULE_0__.AppointmentStatusEnum.COMPLETED;
  }
  isNewAppointment(appointment) {
    return appointment.appointmentStatus === _entities_raw_appointment_model__WEBPACK_IMPORTED_MODULE_0__.AppointmentStatusEnum.NEW && appointment.timeSlot?.startTime === undefined;
  }
  isCompletedOrCancelledAppointment(appointmentStatus) {
    return appointmentStatus === _entities_raw_appointment_model__WEBPACK_IMPORTED_MODULE_0__.AppointmentStatusEnum.COMPLETED || appointmentStatus === _entities_raw_appointment_model__WEBPACK_IMPORTED_MODULE_0__.AppointmentStatusEnum.CANCELLED;
  }
  isScheduledAppointment(appointmentStatus) {
    return appointmentStatus === _entities_raw_appointment_model__WEBPACK_IMPORTED_MODULE_0__.AppointmentStatusEnum.SCHEDULED || appointmentStatus === _entities_raw_appointment_model__WEBPACK_IMPORTED_MODULE_0__.AppointmentStatusEnum.POSTPONE_RESCHEDULED;
  }
  isRepairAppointment(appointmentType) {
    return appointmentType === _entities_raw_appointment_model__WEBPACK_IMPORTED_MODULE_0__.AppointmentTypeEnum.REPAIR;
  }
  isPostponedAppointmentNeedsReschedule(appointmentStatus) {
    return appointmentStatus === _entities_raw_appointment_model__WEBPACK_IMPORTED_MODULE_0__.AppointmentStatusEnum.POSTPONE_NEEDRESCHEDULE;
  }
  isAppointmentInWait(appointmentStatus) {
    return appointmentStatus === _entities_raw_appointment_model__WEBPACK_IMPORTED_MODULE_0__.AppointmentStatusEnum.WAIT;
  }
  mapCost(cost) {
    if (cost) {
      return parseFloat(cost).toString();
    }
    return cost;
  }
  mapContactName(contactName) {
    return contactName ? contactName?.replace('Mr.', '').replace('Mrs.', '').trim() : contactName;
  }
  static ɵfac = function AppointmentsMapper_Factory(t) {
    return new (t || AppointmentsMapper)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AppointmentsMapper,
    factory: AppointmentsMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6150:
/*!*************************************************************************************************************!*\
  !*** ./libs/install/product-journey/appointments/data-access/src/lib/mapper/available-time-slots.mapper.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AvailableTimeSlotsMapper: () => (/* binding */ AvailableTimeSlotsMapper)
/* harmony export */ });
class AvailableTimeSlotsMapper {
  static toModel(rawAvailableTimeSlots) {
    return rawAvailableTimeSlots.map(raw => ({
      date: raw.date,
      timeSlots: this.mapAvailableTimeSlots(raw.timeSlots)
    }));
  }
  static mapAvailableTimeSlots(rawTimeSlots) {
    return rawTimeSlots.map(raw => ({
      availabilityId: raw.availabilityId,
      timeSlotCode: raw.timeSlotCode,
      specUrl: raw.specurl
    }));
  }
}

/***/ }),

/***/ 52128:
/*!************************************************************************************************************!*\
  !*** ./libs/install/product-journey/appointments/data-access/src/lib/mapper/outdoor-appointment.mapper.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OutdoorAppointmentMapper: () => (/* binding */ OutdoorAppointmentMapper)
/* harmony export */ });
/* harmony import */ var _entities_outdoor_appointment_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities/outdoor-appointment.model */ 71889);

class OutdoorAppointmentMapper {
  static toModel(rawOutdoorAppointmentModel) {
    const outdoorAppointmentModel = new _entities_outdoor_appointment_model__WEBPACK_IMPORTED_MODULE_0__.OutdoorAppointmentModel();
    outdoorAppointmentModel.locationIds = rawOutdoorAppointmentModel.locationIds;
    return outdoorAppointmentModel;
  }
}

/***/ }),

/***/ 73701:
/*!************************************************************************************************!*\
  !*** ./libs/install/product-journey/appointments/data-access/src/lib/mapper/success-mapper.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SuccessMapper: () => (/* binding */ SuccessMapper)
/* harmony export */ });
class SuccessMapper {
  static toModel(rawSuccessModel) {
    return {
      status: rawSuccessModel?.status
    };
  }
}

/***/ }),

/***/ 70292:
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function (t, e) {
   true ? module.exports = e() : 0;
}(this, function () {
  "use strict";

  var t = 1e3,
    e = 6e4,
    n = 36e5,
    r = "millisecond",
    i = "second",
    s = "minute",
    u = "hour",
    a = "day",
    o = "week",
    c = "month",
    f = "quarter",
    h = "year",
    d = "date",
    l = "Invalid Date",
    $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
    y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
    M = {
      name: "en",
      weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
      ordinal: function (t) {
        var e = ["th", "st", "nd", "rd"],
          n = t % 100;
        return "[" + t + (e[(n - 20) % 10] || e[n] || e[0]) + "]";
      }
    },
    m = function (t, e, n) {
      var r = String(t);
      return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
    },
    v = {
      s: m,
      z: function (t) {
        var e = -t.utcOffset(),
          n = Math.abs(e),
          r = Math.floor(n / 60),
          i = n % 60;
        return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(i, 2, "0");
      },
      m: function t(e, n) {
        if (e.date() < n.date()) return -t(n, e);
        var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),
          i = e.clone().add(r, c),
          s = n - i < 0,
          u = e.clone().add(r + (s ? -1 : 1), c);
        return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);
      },
      a: function (t) {
        return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
      },
      p: function (t) {
        return {
          M: c,
          y: h,
          w: o,
          d: a,
          D: d,
          h: u,
          m: s,
          s: i,
          ms: r,
          Q: f
        }[t] || String(t || "").toLowerCase().replace(/s$/, "");
      },
      u: function (t) {
        return void 0 === t;
      }
    },
    g = "en",
    D = {};
  D[g] = M;
  var p = "$isDayjsObject",
    S = function (t) {
      return t instanceof _ || !(!t || !t[p]);
    },
    w = function t(e, n, r) {
      var i;
      if (!e) return g;
      if ("string" == typeof e) {
        var s = e.toLowerCase();
        D[s] && (i = s), n && (D[s] = n, i = s);
        var u = e.split("-");
        if (!i && u.length > 1) return t(u[0]);
      } else {
        var a = e.name;
        D[a] = e, i = a;
      }
      return !r && i && (g = i), i || !r && g;
    },
    O = function (t, e) {
      if (S(t)) return t.clone();
      var n = "object" == typeof e ? e : {};
      return n.date = t, n.args = arguments, new _(n);
    },
    b = v;
  b.l = w, b.i = S, b.w = function (t, e) {
    return O(t, {
      locale: e.$L,
      utc: e.$u,
      x: e.$x,
      $offset: e.$offset
    });
  };
  var _ = function () {
      function M(t) {
        this.$L = w(t.locale, null, !0), this.parse(t), this.$x = this.$x || t.x || {}, this[p] = !0;
      }
      var m = M.prototype;
      return m.parse = function (t) {
        this.$d = function (t) {
          var e = t.date,
            n = t.utc;
          if (null === e) return new Date(NaN);
          if (b.u(e)) return new Date();
          if (e instanceof Date) return new Date(e);
          if ("string" == typeof e && !/Z$/i.test(e)) {
            var r = e.match($);
            if (r) {
              var i = r[2] - 1 || 0,
                s = (r[7] || "0").substring(0, 3);
              return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);
            }
          }
          return new Date(e);
        }(t), this.init();
      }, m.init = function () {
        var t = this.$d;
        this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
      }, m.$utils = function () {
        return b;
      }, m.isValid = function () {
        return !(this.$d.toString() === l);
      }, m.isSame = function (t, e) {
        var n = O(t);
        return this.startOf(e) <= n && n <= this.endOf(e);
      }, m.isAfter = function (t, e) {
        return O(t) < this.startOf(e);
      }, m.isBefore = function (t, e) {
        return this.endOf(e) < O(t);
      }, m.$g = function (t, e, n) {
        return b.u(t) ? this[e] : this.set(n, t);
      }, m.unix = function () {
        return Math.floor(this.valueOf() / 1e3);
      }, m.valueOf = function () {
        return this.$d.getTime();
      }, m.startOf = function (t, e) {
        var n = this,
          r = !!b.u(e) || e,
          f = b.p(t),
          l = function (t, e) {
            var i = b.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);
            return r ? i : i.endOf(a);
          },
          $ = function (t, e) {
            return b.w(n.toDate()[t].apply(n.toDate("s"), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), n);
          },
          y = this.$W,
          M = this.$M,
          m = this.$D,
          v = "set" + (this.$u ? "UTC" : "");
        switch (f) {
          case h:
            return r ? l(1, 0) : l(31, 11);
          case c:
            return r ? l(1, M) : l(0, M + 1);
          case o:
            var g = this.$locale().weekStart || 0,
              D = (y < g ? y + 7 : y) - g;
            return l(r ? m - D : m + (6 - D), M);
          case a:
          case d:
            return $(v + "Hours", 0);
          case u:
            return $(v + "Minutes", 1);
          case s:
            return $(v + "Seconds", 2);
          case i:
            return $(v + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, m.endOf = function (t) {
        return this.startOf(t, !1);
      }, m.$set = function (t, e) {
        var n,
          o = b.p(t),
          f = "set" + (this.$u ? "UTC" : ""),
          l = (n = {}, n[a] = f + "Date", n[d] = f + "Date", n[c] = f + "Month", n[h] = f + "FullYear", n[u] = f + "Hours", n[s] = f + "Minutes", n[i] = f + "Seconds", n[r] = f + "Milliseconds", n)[o],
          $ = o === a ? this.$D + (e - this.$W) : e;
        if (o === c || o === h) {
          var y = this.clone().set(d, 1);
          y.$d[l]($), y.init(), this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d;
        } else l && this.$d[l]($);
        return this.init(), this;
      }, m.set = function (t, e) {
        return this.clone().$set(t, e);
      }, m.get = function (t) {
        return this[b.p(t)]();
      }, m.add = function (r, f) {
        var d,
          l = this;
        r = Number(r);
        var $ = b.p(f),
          y = function (t) {
            var e = O(l);
            return b.w(e.date(e.date() + Math.round(t * r)), l);
          };
        if ($ === c) return this.set(c, this.$M + r);
        if ($ === h) return this.set(h, this.$y + r);
        if ($ === a) return y(1);
        if ($ === o) return y(7);
        var M = (d = {}, d[s] = e, d[u] = n, d[i] = t, d)[$] || 1,
          m = this.$d.getTime() + r * M;
        return b.w(m, this);
      }, m.subtract = function (t, e) {
        return this.add(-1 * t, e);
      }, m.format = function (t) {
        var e = this,
          n = this.$locale();
        if (!this.isValid()) return n.invalidDate || l;
        var r = t || "YYYY-MM-DDTHH:mm:ssZ",
          i = b.z(this),
          s = this.$H,
          u = this.$m,
          a = this.$M,
          o = n.weekdays,
          c = n.months,
          f = n.meridiem,
          h = function (t, n, i, s) {
            return t && (t[n] || t(e, r)) || i[n].slice(0, s);
          },
          d = function (t) {
            return b.s(s % 12 || 12, t, "0");
          },
          $ = f || function (t, e, n) {
            var r = t < 12 ? "AM" : "PM";
            return n ? r.toLowerCase() : r;
          };
        return r.replace(y, function (t, r) {
          return r || function (t) {
            switch (t) {
              case "YY":
                return String(e.$y).slice(-2);
              case "YYYY":
                return b.s(e.$y, 4, "0");
              case "M":
                return a + 1;
              case "MM":
                return b.s(a + 1, 2, "0");
              case "MMM":
                return h(n.monthsShort, a, c, 3);
              case "MMMM":
                return h(c, a);
              case "D":
                return e.$D;
              case "DD":
                return b.s(e.$D, 2, "0");
              case "d":
                return String(e.$W);
              case "dd":
                return h(n.weekdaysMin, e.$W, o, 2);
              case "ddd":
                return h(n.weekdaysShort, e.$W, o, 3);
              case "dddd":
                return o[e.$W];
              case "H":
                return String(s);
              case "HH":
                return b.s(s, 2, "0");
              case "h":
                return d(1);
              case "hh":
                return d(2);
              case "a":
                return $(s, u, !0);
              case "A":
                return $(s, u, !1);
              case "m":
                return String(u);
              case "mm":
                return b.s(u, 2, "0");
              case "s":
                return String(e.$s);
              case "ss":
                return b.s(e.$s, 2, "0");
              case "SSS":
                return b.s(e.$ms, 3, "0");
              case "Z":
                return i;
            }
            return null;
          }(t) || i.replace(":", "");
        });
      }, m.utcOffset = function () {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, m.diff = function (r, d, l) {
        var $,
          y = this,
          M = b.p(d),
          m = O(r),
          v = (m.utcOffset() - this.utcOffset()) * e,
          g = this - m,
          D = function () {
            return b.m(y, m);
          };
        switch (M) {
          case h:
            $ = D() / 12;
            break;
          case c:
            $ = D();
            break;
          case f:
            $ = D() / 3;
            break;
          case o:
            $ = (g - v) / 6048e5;
            break;
          case a:
            $ = (g - v) / 864e5;
            break;
          case u:
            $ = g / n;
            break;
          case s:
            $ = g / e;
            break;
          case i:
            $ = g / t;
            break;
          default:
            $ = g;
        }
        return l ? $ : b.a($);
      }, m.daysInMonth = function () {
        return this.endOf(c).$D;
      }, m.$locale = function () {
        return D[this.$L];
      }, m.locale = function (t, e) {
        if (!t) return this.$L;
        var n = this.clone(),
          r = w(t, e, !0);
        return r && (n.$L = r), n;
      }, m.clone = function () {
        return b.w(this.$d, this);
      }, m.toDate = function () {
        return new Date(this.valueOf());
      }, m.toJSON = function () {
        return this.isValid() ? this.toISOString() : null;
      }, m.toISOString = function () {
        return this.$d.toISOString();
      }, m.toString = function () {
        return this.$d.toUTCString();
      }, M;
    }(),
    k = _.prototype;
  return O.prototype = k, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h], ["$D", d]].forEach(function (t) {
    k[t[1]] = function (e) {
      return this.$g(e, t[0], t[1]);
    };
  }), O.extend = function (t, e) {
    return t.$i || (t(e, _, O), t.$i = !0), O;
  }, O.locale = w, O.isDayjs = S, O.unix = function (t) {
    return O(1e3 * t);
  }, O.en = D[g], O.Ls = D, O.p = {}, O;
});

/***/ }),

/***/ 75825:
/*!*******************************************!*\
  !*** ./node_modules/immer/dist/immer.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Immer: () => (/* binding */ Immer2),
/* harmony export */   applyPatches: () => (/* binding */ applyPatches),
/* harmony export */   castDraft: () => (/* binding */ castDraft),
/* harmony export */   castImmutable: () => (/* binding */ castImmutable),
/* harmony export */   createDraft: () => (/* binding */ createDraft),
/* harmony export */   current: () => (/* binding */ current),
/* harmony export */   enableMapSet: () => (/* binding */ enableMapSet),
/* harmony export */   enablePatches: () => (/* binding */ enablePatches),
/* harmony export */   finishDraft: () => (/* binding */ finishDraft),
/* harmony export */   freeze: () => (/* binding */ freeze),
/* harmony export */   immerable: () => (/* binding */ DRAFTABLE),
/* harmony export */   isDraft: () => (/* binding */ isDraft),
/* harmony export */   isDraftable: () => (/* binding */ isDraftable),
/* harmony export */   nothing: () => (/* binding */ NOTHING),
/* harmony export */   original: () => (/* binding */ original),
/* harmony export */   produce: () => (/* binding */ produce),
/* harmony export */   produceWithPatches: () => (/* binding */ produceWithPatches),
/* harmony export */   setAutoFreeze: () => (/* binding */ setAutoFreeze),
/* harmony export */   setUseStrictShallowCopy: () => (/* binding */ setUseStrictShallowCopy)
/* harmony export */ });
// src/utils/env.ts
var NOTHING = Symbol.for("immer-nothing");
var DRAFTABLE = Symbol.for("immer-draftable");
var DRAFT_STATE = Symbol.for("immer-state");

// src/utils/errors.ts
var errors =  true ? [
// All error codes, starting by 0:
function (plugin) {
  return `The plugin for '${plugin}' has not been loaded into Immer. To enable the plugin, import and call \`enable${plugin}()\` when initializing your application.`;
}, function (thing) {
  return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${thing}'`;
}, "This object has been frozen and should not be mutated", function (data) {
  return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + data;
}, "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.", "Immer forbids circular references", "The first or second argument to `produce` must be a function", "The third argument to `produce` must be a function or undefined", "First argument to `createDraft` must be a plain object, an array, or an immerable object", "First argument to `finishDraft` must be a draft returned by `createDraft`", function (thing) {
  return `'current' expects a draft, got: ${thing}`;
}, "Object.defineProperty() cannot be used on an Immer draft", "Object.setPrototypeOf() cannot be used on an Immer draft", "Immer only supports deleting array indices", "Immer only supports setting array indices and the 'length' property", function (thing) {
  return `'original' expects a draft, got: ${thing}`;
}
// Note: if more errors are added, the errorOffset in Patches.ts should be increased
// See Patches.ts for additional errors
] : 0;
function die(error, ...args) {
  if (true) {
    const e = errors[error];
    const msg = typeof e === "function" ? e.apply(null, args) : e;
    throw new Error(`[Immer] ${msg}`);
  }
  throw new Error(`[Immer] minified error nr: ${error}. Full error at: https://bit.ly/3cXEKWf`);
}

// src/utils/common.ts
var getPrototypeOf = Object.getPrototypeOf;
function isDraft(value) {
  return !!value && !!value[DRAFT_STATE];
}
function isDraftable(value) {
  if (!value) return false;
  return isPlainObject(value) || Array.isArray(value) || !!value[DRAFTABLE] || !!value.constructor?.[DRAFTABLE] || isMap(value) || isSet(value);
}
var objectCtorString = Object.prototype.constructor.toString();
function isPlainObject(value) {
  if (!value || typeof value !== "object") return false;
  const proto = getPrototypeOf(value);
  if (proto === null) {
    return true;
  }
  const Ctor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
  if (Ctor === Object) return true;
  return typeof Ctor == "function" && Function.toString.call(Ctor) === objectCtorString;
}
function original(value) {
  if (!isDraft(value)) die(15, value);
  return value[DRAFT_STATE].base_;
}
function each(obj, iter) {
  if (getArchtype(obj) === 0 /* Object */) {
    Object.entries(obj).forEach(([key, value]) => {
      iter(key, value, obj);
    });
  } else {
    obj.forEach((entry, index) => iter(index, entry, obj));
  }
}
function getArchtype(thing) {
  const state = thing[DRAFT_STATE];
  return state ? state.type_ : Array.isArray(thing) ? 1 /* Array */ : isMap(thing) ? 2 /* Map */ : isSet(thing) ? 3 /* Set */ : 0 /* Object */;
}
function has(thing, prop) {
  return getArchtype(thing) === 2 /* Map */ ? thing.has(prop) : Object.prototype.hasOwnProperty.call(thing, prop);
}
function get(thing, prop) {
  return getArchtype(thing) === 2 /* Map */ ? thing.get(prop) : thing[prop];
}
function set(thing, propOrOldValue, value) {
  const t = getArchtype(thing);
  if (t === 2 /* Map */) thing.set(propOrOldValue, value);else if (t === 3 /* Set */) {
    thing.add(value);
  } else thing[propOrOldValue] = value;
}
function is(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}
function isMap(target) {
  return target instanceof Map;
}
function isSet(target) {
  return target instanceof Set;
}
function latest(state) {
  return state.copy_ || state.base_;
}
function shallowCopy(base, strict) {
  if (isMap(base)) {
    return new Map(base);
  }
  if (isSet(base)) {
    return new Set(base);
  }
  if (Array.isArray(base)) return Array.prototype.slice.call(base);
  if (!strict && isPlainObject(base)) {
    if (!getPrototypeOf(base)) {
      const obj = /* @__PURE__ */Object.create(null);
      return Object.assign(obj, base);
    }
    return {
      ...base
    };
  }
  const descriptors = Object.getOwnPropertyDescriptors(base);
  delete descriptors[DRAFT_STATE];
  let keys = Reflect.ownKeys(descriptors);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const desc = descriptors[key];
    if (desc.writable === false) {
      desc.writable = true;
      desc.configurable = true;
    }
    if (desc.get || desc.set) descriptors[key] = {
      configurable: true,
      writable: true,
      // could live with !!desc.set as well here...
      enumerable: desc.enumerable,
      value: base[key]
    };
  }
  return Object.create(getPrototypeOf(base), descriptors);
}
function freeze(obj, deep = false) {
  if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj)) return obj;
  if (getArchtype(obj) > 1) {
    obj.set = obj.add = obj.clear = obj.delete = dontMutateFrozenCollections;
  }
  Object.freeze(obj);
  if (deep) each(obj, (_key, value) => freeze(value, true), true);
  return obj;
}
function dontMutateFrozenCollections() {
  die(2);
}
function isFrozen(obj) {
  return Object.isFrozen(obj);
}

// src/utils/plugins.ts
var plugins = {};
function getPlugin(pluginKey) {
  const plugin = plugins[pluginKey];
  if (!plugin) {
    die(0, pluginKey);
  }
  return plugin;
}
function loadPlugin(pluginKey, implementation) {
  if (!plugins[pluginKey]) plugins[pluginKey] = implementation;
}

// src/core/scope.ts
var currentScope;
function getCurrentScope() {
  return currentScope;
}
function createScope(parent_, immer_) {
  return {
    drafts_: [],
    parent_,
    immer_,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: true,
    unfinalizedDrafts_: 0
  };
}
function usePatchesInScope(scope, patchListener) {
  if (patchListener) {
    getPlugin("Patches");
    scope.patches_ = [];
    scope.inversePatches_ = [];
    scope.patchListener_ = patchListener;
  }
}
function revokeScope(scope) {
  leaveScope(scope);
  scope.drafts_.forEach(revokeDraft);
  scope.drafts_ = null;
}
function leaveScope(scope) {
  if (scope === currentScope) {
    currentScope = scope.parent_;
  }
}
function enterScope(immer2) {
  return currentScope = createScope(currentScope, immer2);
}
function revokeDraft(draft) {
  const state = draft[DRAFT_STATE];
  if (state.type_ === 0 /* Object */ || state.type_ === 1 /* Array */) state.revoke_();else state.revoked_ = true;
}

// src/core/finalize.ts
function processResult(result, scope) {
  scope.unfinalizedDrafts_ = scope.drafts_.length;
  const baseDraft = scope.drafts_[0];
  const isReplaced = result !== void 0 && result !== baseDraft;
  if (isReplaced) {
    if (baseDraft[DRAFT_STATE].modified_) {
      revokeScope(scope);
      die(4);
    }
    if (isDraftable(result)) {
      result = finalize(scope, result);
      if (!scope.parent_) maybeFreeze(scope, result);
    }
    if (scope.patches_) {
      getPlugin("Patches").generateReplacementPatches_(baseDraft[DRAFT_STATE].base_, result, scope.patches_, scope.inversePatches_);
    }
  } else {
    result = finalize(scope, baseDraft, []);
  }
  revokeScope(scope);
  if (scope.patches_) {
    scope.patchListener_(scope.patches_, scope.inversePatches_);
  }
  return result !== NOTHING ? result : void 0;
}
function finalize(rootScope, value, path) {
  if (isFrozen(value)) return value;
  const state = value[DRAFT_STATE];
  if (!state) {
    each(value, (key, childValue) => finalizeProperty(rootScope, state, value, key, childValue, path), true
    // See #590, don't recurse into non-enumerable of non drafted objects
    );
    return value;
  }
  if (state.scope_ !== rootScope) return value;
  if (!state.modified_) {
    maybeFreeze(rootScope, state.base_, true);
    return state.base_;
  }
  if (!state.finalized_) {
    state.finalized_ = true;
    state.scope_.unfinalizedDrafts_--;
    const result = state.copy_;
    let resultEach = result;
    let isSet2 = false;
    if (state.type_ === 3 /* Set */) {
      resultEach = new Set(result);
      result.clear();
      isSet2 = true;
    }
    each(resultEach, (key, childValue) => finalizeProperty(rootScope, state, result, key, childValue, path, isSet2));
    maybeFreeze(rootScope, result, false);
    if (path && rootScope.patches_) {
      getPlugin("Patches").generatePatches_(state, path, rootScope.patches_, rootScope.inversePatches_);
    }
  }
  return state.copy_;
}
function finalizeProperty(rootScope, parentState, targetObject, prop, childValue, rootPath, targetIsSet) {
  if ( true && childValue === targetObject) die(5);
  if (isDraft(childValue)) {
    const path = rootPath && parentState && parentState.type_ !== 3 /* Set */ &&
    // Set objects are atomic since they have no keys.
    !has(parentState.assigned_, prop) ? rootPath.concat(prop) : void 0;
    const res = finalize(rootScope, childValue, path);
    set(targetObject, prop, res);
    if (isDraft(res)) {
      rootScope.canAutoFreeze_ = false;
    } else return;
  } else if (targetIsSet) {
    targetObject.add(childValue);
  }
  if (isDraftable(childValue) && !isFrozen(childValue)) {
    if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
      return;
    }
    finalize(rootScope, childValue);
    if (!parentState || !parentState.scope_.parent_) maybeFreeze(rootScope, childValue);
  }
}
function maybeFreeze(scope, value, deep = false) {
  if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
    freeze(value, deep);
  }
}

// src/core/proxy.ts
function createProxyProxy(base, parent) {
  const isArray = Array.isArray(base);
  const state = {
    type_: isArray ? 1 /* Array */ : 0 /* Object */,

    // Track which produce call this is associated with.
    scope_: parent ? parent.scope_ : getCurrentScope(),
    // True for both shallow and deep changes.
    modified_: false,
    // Used during finalization.
    finalized_: false,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: parent,
    // The base state.
    base_: base,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: false
  };
  let target = state;
  let traps = objectTraps;
  if (isArray) {
    target = [state];
    traps = arrayTraps;
  }
  const {
    revoke,
    proxy
  } = Proxy.revocable(target, traps);
  state.draft_ = proxy;
  state.revoke_ = revoke;
  return proxy;
}
var objectTraps = {
  get(state, prop) {
    if (prop === DRAFT_STATE) return state;
    const source = latest(state);
    if (!has(source, prop)) {
      return readPropFromProto(state, source, prop);
    }
    const value = source[prop];
    if (state.finalized_ || !isDraftable(value)) {
      return value;
    }
    if (value === peek(state.base_, prop)) {
      prepareCopy(state);
      return state.copy_[prop] = createProxy(value, state);
    }
    return value;
  },
  has(state, prop) {
    return prop in latest(state);
  },
  ownKeys(state) {
    return Reflect.ownKeys(latest(state));
  },
  set(state, prop, value) {
    const desc = getDescriptorFromProto(latest(state), prop);
    if (desc?.set) {
      desc.set.call(state.draft_, value);
      return true;
    }
    if (!state.modified_) {
      const current2 = peek(latest(state), prop);
      const currentState = current2?.[DRAFT_STATE];
      if (currentState && currentState.base_ === value) {
        state.copy_[prop] = value;
        state.assigned_[prop] = false;
        return true;
      }
      if (is(value, current2) && (value !== void 0 || has(state.base_, prop))) return true;
      prepareCopy(state);
      markChanged(state);
    }
    if (state.copy_[prop] === value && (
    // special case: handle new props with value 'undefined'
    value !== void 0 || prop in state.copy_) ||
    // special case: NaN
    Number.isNaN(value) && Number.isNaN(state.copy_[prop])) return true;
    state.copy_[prop] = value;
    state.assigned_[prop] = true;
    return true;
  },
  deleteProperty(state, prop) {
    if (peek(state.base_, prop) !== void 0 || prop in state.base_) {
      state.assigned_[prop] = false;
      prepareCopy(state);
      markChanged(state);
    } else {
      delete state.assigned_[prop];
    }
    if (state.copy_) {
      delete state.copy_[prop];
    }
    return true;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(state, prop) {
    const owner = latest(state);
    const desc = Reflect.getOwnPropertyDescriptor(owner, prop);
    if (!desc) return desc;
    return {
      writable: true,
      configurable: state.type_ !== 1 /* Array */ || prop !== "length",
      enumerable: desc.enumerable,
      value: owner[prop]
    };
  },
  defineProperty() {
    die(11);
  },
  getPrototypeOf(state) {
    return getPrototypeOf(state.base_);
  },
  setPrototypeOf() {
    die(12);
  }
};
var arrayTraps = {};
each(objectTraps, (key, fn) => {
  arrayTraps[key] = function () {
    arguments[0] = arguments[0][0];
    return fn.apply(this, arguments);
  };
});
arrayTraps.deleteProperty = function (state, prop) {
  if ( true && isNaN(parseInt(prop))) die(13);
  return arrayTraps.set.call(this, state, prop, void 0);
};
arrayTraps.set = function (state, prop, value) {
  if ( true && prop !== "length" && isNaN(parseInt(prop))) die(14);
  return objectTraps.set.call(this, state[0], prop, value, state[0]);
};
function peek(draft, prop) {
  const state = draft[DRAFT_STATE];
  const source = state ? latest(state) : draft;
  return source[prop];
}
function readPropFromProto(state, source, prop) {
  const desc = getDescriptorFromProto(source, prop);
  return desc ? `value` in desc ? desc.value :
  // This is a very special case, if the prop is a getter defined by the
  // prototype, we should invoke it with the draft as context!
  desc.get?.call(state.draft_) : void 0;
}
function getDescriptorFromProto(source, prop) {
  if (!(prop in source)) return void 0;
  let proto = getPrototypeOf(source);
  while (proto) {
    const desc = Object.getOwnPropertyDescriptor(proto, prop);
    if (desc) return desc;
    proto = getPrototypeOf(proto);
  }
  return void 0;
}
function markChanged(state) {
  if (!state.modified_) {
    state.modified_ = true;
    if (state.parent_) {
      markChanged(state.parent_);
    }
  }
}
function prepareCopy(state) {
  if (!state.copy_) {
    state.copy_ = shallowCopy(state.base_, state.scope_.immer_.useStrictShallowCopy_);
  }
}

// src/core/immerClass.ts
var Immer2 = class {
  constructor(config) {
    this.autoFreeze_ = true;
    this.useStrictShallowCopy_ = false;
    /**
     * The `produce` function takes a value and a "recipe function" (whose
     * return value often depends on the base state). The recipe function is
     * free to mutate its first argument however it wants. All mutations are
     * only ever applied to a __copy__ of the base state.
     *
     * Pass only a function to create a "curried producer" which relieves you
     * from passing the recipe function every time.
     *
     * Only plain objects and arrays are made mutable. All other objects are
     * considered uncopyable.
     *
     * Note: This function is __bound__ to its `Immer` instance.
     *
     * @param {any} base - the initial state
     * @param {Function} recipe - function that receives a proxy of the base state as first argument and which can be freely modified
     * @param {Function} patchListener - optional function that will be called with all the patches produced here
     * @returns {any} a new state, or the initial state if nothing was modified
     */
    this.produce = (base, recipe, patchListener) => {
      if (typeof base === "function" && typeof recipe !== "function") {
        const defaultBase = recipe;
        recipe = base;
        const self = this;
        return function curriedProduce(base2 = defaultBase, ...args) {
          return self.produce(base2, draft => recipe.call(this, draft, ...args));
        };
      }
      if (typeof recipe !== "function") die(6);
      if (patchListener !== void 0 && typeof patchListener !== "function") die(7);
      let result;
      if (isDraftable(base)) {
        const scope = enterScope(this);
        const proxy = createProxy(base, void 0);
        let hasError = true;
        try {
          result = recipe(proxy);
          hasError = false;
        } finally {
          if (hasError) revokeScope(scope);else leaveScope(scope);
        }
        usePatchesInScope(scope, patchListener);
        return processResult(result, scope);
      } else if (!base || typeof base !== "object") {
        result = recipe(base);
        if (result === void 0) result = base;
        if (result === NOTHING) result = void 0;
        if (this.autoFreeze_) freeze(result, true);
        if (patchListener) {
          const p = [];
          const ip = [];
          getPlugin("Patches").generateReplacementPatches_(base, result, p, ip);
          patchListener(p, ip);
        }
        return result;
      } else die(1, base);
    };
    this.produceWithPatches = (base, recipe) => {
      if (typeof base === "function") {
        return (state, ...args) => this.produceWithPatches(state, draft => base(draft, ...args));
      }
      let patches, inversePatches;
      const result = this.produce(base, recipe, (p, ip) => {
        patches = p;
        inversePatches = ip;
      });
      return [result, patches, inversePatches];
    };
    if (typeof config?.autoFreeze === "boolean") this.setAutoFreeze(config.autoFreeze);
    if (typeof config?.useStrictShallowCopy === "boolean") this.setUseStrictShallowCopy(config.useStrictShallowCopy);
  }
  createDraft(base) {
    if (!isDraftable(base)) die(8);
    if (isDraft(base)) base = current(base);
    const scope = enterScope(this);
    const proxy = createProxy(base, void 0);
    proxy[DRAFT_STATE].isManual_ = true;
    leaveScope(scope);
    return proxy;
  }
  finishDraft(draft, patchListener) {
    const state = draft && draft[DRAFT_STATE];
    if (!state || !state.isManual_) die(9);
    const {
      scope_: scope
    } = state;
    usePatchesInScope(scope, patchListener);
    return processResult(void 0, scope);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(value) {
    this.autoFreeze_ = value;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(value) {
    this.useStrictShallowCopy_ = value;
  }
  applyPatches(base, patches) {
    let i;
    for (i = patches.length - 1; i >= 0; i--) {
      const patch = patches[i];
      if (patch.path.length === 0 && patch.op === "replace") {
        base = patch.value;
        break;
      }
    }
    if (i > -1) {
      patches = patches.slice(i + 1);
    }
    const applyPatchesImpl = getPlugin("Patches").applyPatches_;
    if (isDraft(base)) {
      return applyPatchesImpl(base, patches);
    }
    return this.produce(base, draft => applyPatchesImpl(draft, patches));
  }
};
function createProxy(value, parent) {
  const draft = isMap(value) ? getPlugin("MapSet").proxyMap_(value, parent) : isSet(value) ? getPlugin("MapSet").proxySet_(value, parent) : createProxyProxy(value, parent);
  const scope = parent ? parent.scope_ : getCurrentScope();
  scope.drafts_.push(draft);
  return draft;
}

// src/core/current.ts
function current(value) {
  if (!isDraft(value)) die(10, value);
  return currentImpl(value);
}
function currentImpl(value) {
  if (!isDraftable(value) || isFrozen(value)) return value;
  const state = value[DRAFT_STATE];
  let copy;
  if (state) {
    if (!state.modified_) return state.base_;
    state.finalized_ = true;
    copy = shallowCopy(value, state.scope_.immer_.useStrictShallowCopy_);
  } else {
    copy = shallowCopy(value, true);
  }
  each(copy, (key, childValue) => {
    set(copy, key, currentImpl(childValue));
  });
  if (state) {
    state.finalized_ = false;
  }
  return copy;
}

// src/plugins/patches.ts
function enablePatches() {
  const errorOffset = 16;
  if (true) {
    errors.push('Sets cannot have "replace" patches.', function (op) {
      return "Unsupported patch operation: " + op;
    }, function (path) {
      return "Cannot apply patch, path doesn't resolve: " + path;
    }, "Patching reserved attributes like __proto__, prototype and constructor is not allowed");
  }
  const REPLACE = "replace";
  const ADD = "add";
  const REMOVE = "remove";
  function generatePatches_(state, basePath, patches, inversePatches) {
    switch (state.type_) {
      case 0 /* Object */:
      case 2 /* Map */:
        return generatePatchesFromAssigned(state, basePath, patches, inversePatches);
      case 1 /* Array */:
        return generateArrayPatches(state, basePath, patches, inversePatches);
      case 3 /* Set */:
        return generateSetPatches(state, basePath, patches, inversePatches);
    }
  }
  function generateArrayPatches(state, basePath, patches, inversePatches) {
    let {
      base_,
      assigned_
    } = state;
    let copy_ = state.copy_;
    if (copy_.length < base_.length) {
      ;
      [base_, copy_] = [copy_, base_];
      [patches, inversePatches] = [inversePatches, patches];
    }
    for (let i = 0; i < base_.length; i++) {
      if (assigned_[i] && copy_[i] !== base_[i]) {
        const path = basePath.concat([i]);
        patches.push({
          op: REPLACE,
          path,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: clonePatchValueIfNeeded(copy_[i])
        });
        inversePatches.push({
          op: REPLACE,
          path,
          value: clonePatchValueIfNeeded(base_[i])
        });
      }
    }
    for (let i = base_.length; i < copy_.length; i++) {
      const path = basePath.concat([i]);
      patches.push({
        op: ADD,
        path,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: clonePatchValueIfNeeded(copy_[i])
      });
    }
    for (let i = copy_.length - 1; base_.length <= i; --i) {
      const path = basePath.concat([i]);
      inversePatches.push({
        op: REMOVE,
        path
      });
    }
  }
  function generatePatchesFromAssigned(state, basePath, patches, inversePatches) {
    const {
      base_,
      copy_
    } = state;
    each(state.assigned_, (key, assignedValue) => {
      const origValue = get(base_, key);
      const value = get(copy_, key);
      const op = !assignedValue ? REMOVE : has(base_, key) ? REPLACE : ADD;
      if (origValue === value && op === REPLACE) return;
      const path = basePath.concat(key);
      patches.push(op === REMOVE ? {
        op,
        path
      } : {
        op,
        path,
        value
      });
      inversePatches.push(op === ADD ? {
        op: REMOVE,
        path
      } : op === REMOVE ? {
        op: ADD,
        path,
        value: clonePatchValueIfNeeded(origValue)
      } : {
        op: REPLACE,
        path,
        value: clonePatchValueIfNeeded(origValue)
      });
    });
  }
  function generateSetPatches(state, basePath, patches, inversePatches) {
    let {
      base_,
      copy_
    } = state;
    let i = 0;
    base_.forEach(value => {
      if (!copy_.has(value)) {
        const path = basePath.concat([i]);
        patches.push({
          op: REMOVE,
          path,
          value
        });
        inversePatches.unshift({
          op: ADD,
          path,
          value
        });
      }
      i++;
    });
    i = 0;
    copy_.forEach(value => {
      if (!base_.has(value)) {
        const path = basePath.concat([i]);
        patches.push({
          op: ADD,
          path,
          value
        });
        inversePatches.unshift({
          op: REMOVE,
          path,
          value
        });
      }
      i++;
    });
  }
  function generateReplacementPatches_(baseValue, replacement, patches, inversePatches) {
    patches.push({
      op: REPLACE,
      path: [],
      value: replacement === NOTHING ? void 0 : replacement
    });
    inversePatches.push({
      op: REPLACE,
      path: [],
      value: baseValue
    });
  }
  function applyPatches_(draft, patches) {
    patches.forEach(patch => {
      const {
        path,
        op
      } = patch;
      let base = draft;
      for (let i = 0; i < path.length - 1; i++) {
        const parentType = getArchtype(base);
        let p = path[i];
        if (typeof p !== "string" && typeof p !== "number") {
          p = "" + p;
        }
        if ((parentType === 0 /* Object */ || parentType === 1 /* Array */) && (p === "__proto__" || p === "constructor")) die(errorOffset + 3);
        if (typeof base === "function" && p === "prototype") die(errorOffset + 3);
        base = get(base, p);
        if (typeof base !== "object") die(errorOffset + 2, path.join("/"));
      }
      const type = getArchtype(base);
      const value = deepClonePatchValue(patch.value);
      const key = path[path.length - 1];
      switch (op) {
        case REPLACE:
          switch (type) {
            case 2 /* Map */:
              return base.set(key, value);
            case 3 /* Set */:
              die(errorOffset);
            default:
              return base[key] = value;
          }
        case ADD:
          switch (type) {
            case 1 /* Array */:
              return key === "-" ? base.push(value) : base.splice(key, 0, value);
            case 2 /* Map */:
              return base.set(key, value);
            case 3 /* Set */:
              return base.add(value);
            default:
              return base[key] = value;
          }
        case REMOVE:
          switch (type) {
            case 1 /* Array */:
              return base.splice(key, 1);
            case 2 /* Map */:
              return base.delete(key);
            case 3 /* Set */:
              return base.delete(patch.value);
            default:
              return delete base[key];
          }
        default:
          die(errorOffset + 1, op);
      }
    });
    return draft;
  }
  function deepClonePatchValue(obj) {
    if (!isDraftable(obj)) return obj;
    if (Array.isArray(obj)) return obj.map(deepClonePatchValue);
    if (isMap(obj)) return new Map(Array.from(obj.entries()).map(([k, v]) => [k, deepClonePatchValue(v)]));
    if (isSet(obj)) return new Set(Array.from(obj).map(deepClonePatchValue));
    const cloned = Object.create(getPrototypeOf(obj));
    for (const key in obj) cloned[key] = deepClonePatchValue(obj[key]);
    if (has(obj, DRAFTABLE)) cloned[DRAFTABLE] = obj[DRAFTABLE];
    return cloned;
  }
  function clonePatchValueIfNeeded(obj) {
    if (isDraft(obj)) {
      return deepClonePatchValue(obj);
    } else return obj;
  }
  loadPlugin("Patches", {
    applyPatches_,
    generatePatches_,
    generateReplacementPatches_
  });
}

// src/plugins/mapset.ts
function enableMapSet() {
  class DraftMap extends Map {
    constructor(target, parent) {
      super();
      this[DRAFT_STATE] = {
        type_: 2 /* Map */,
        parent_: parent,
        scope_: parent ? parent.scope_ : getCurrentScope(),
        modified_: false,
        finalized_: false,
        copy_: void 0,
        assigned_: void 0,
        base_: target,
        draft_: this,
        isManual_: false,
        revoked_: false
      };
    }
    get size() {
      return latest(this[DRAFT_STATE]).size;
    }
    has(key) {
      return latest(this[DRAFT_STATE]).has(key);
    }
    set(key, value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!latest(state).has(key) || latest(state).get(key) !== value) {
        prepareMapCopy(state);
        markChanged(state);
        state.assigned_.set(key, true);
        state.copy_.set(key, value);
        state.assigned_.set(key, true);
      }
      return this;
    }
    delete(key) {
      if (!this.has(key)) {
        return false;
      }
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareMapCopy(state);
      markChanged(state);
      if (state.base_.has(key)) {
        state.assigned_.set(key, false);
      } else {
        state.assigned_.delete(key);
      }
      state.copy_.delete(key);
      return true;
    }
    clear() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (latest(state).size) {
        prepareMapCopy(state);
        markChanged(state);
        state.assigned_ = /* @__PURE__ */new Map();
        each(state.base_, key => {
          state.assigned_.set(key, false);
        });
        state.copy_.clear();
      }
    }
    forEach(cb, thisArg) {
      const state = this[DRAFT_STATE];
      latest(state).forEach((_value, key, _map) => {
        cb.call(thisArg, this.get(key), key, this);
      });
    }
    get(key) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      const value = latest(state).get(key);
      if (state.finalized_ || !isDraftable(value)) {
        return value;
      }
      if (value !== state.base_.get(key)) {
        return value;
      }
      const draft = createProxy(value, state);
      prepareMapCopy(state);
      state.copy_.set(key, draft);
      return draft;
    }
    keys() {
      return latest(this[DRAFT_STATE]).keys();
    }
    values() {
      const iterator = this.keys();
      return {
        [Symbol.iterator]: () => this.values(),
        next: () => {
          const r = iterator.next();
          if (r.done) return r;
          const value = this.get(r.value);
          return {
            done: false,
            value
          };
        }
      };
    }
    entries() {
      const iterator = this.keys();
      return {
        [Symbol.iterator]: () => this.entries(),
        next: () => {
          const r = iterator.next();
          if (r.done) return r;
          const value = this.get(r.value);
          return {
            done: false,
            value: [r.value, value]
          };
        }
      };
    }
    [(DRAFT_STATE, Symbol.iterator)]() {
      return this.entries();
    }
  }
  function proxyMap_(target, parent) {
    return new DraftMap(target, parent);
  }
  function prepareMapCopy(state) {
    if (!state.copy_) {
      state.assigned_ = /* @__PURE__ */new Map();
      state.copy_ = new Map(state.base_);
    }
  }
  class DraftSet extends Set {
    constructor(target, parent) {
      super();
      this[DRAFT_STATE] = {
        type_: 3 /* Set */,
        parent_: parent,
        scope_: parent ? parent.scope_ : getCurrentScope(),
        modified_: false,
        finalized_: false,
        copy_: void 0,
        base_: target,
        draft_: this,
        drafts_: /* @__PURE__ */new Map(),
        revoked_: false,
        isManual_: false
      };
    }
    get size() {
      return latest(this[DRAFT_STATE]).size;
    }
    has(value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!state.copy_) {
        return state.base_.has(value);
      }
      if (state.copy_.has(value)) return true;
      if (state.drafts_.has(value) && state.copy_.has(state.drafts_.get(value))) return true;
      return false;
    }
    add(value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!this.has(value)) {
        prepareSetCopy(state);
        markChanged(state);
        state.copy_.add(value);
      }
      return this;
    }
    delete(value) {
      if (!this.has(value)) {
        return false;
      }
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      markChanged(state);
      return state.copy_.delete(value) || (state.drafts_.has(value) ? state.copy_.delete(state.drafts_.get(value)) : ( /* istanbul ignore next */
      false));
    }
    clear() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (latest(state).size) {
        prepareSetCopy(state);
        markChanged(state);
        state.copy_.clear();
      }
    }
    values() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      return state.copy_.values();
    }
    entries() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      return state.copy_.entries();
    }
    keys() {
      return this.values();
    }
    [(DRAFT_STATE, Symbol.iterator)]() {
      return this.values();
    }
    forEach(cb, thisArg) {
      const iterator = this.values();
      let result = iterator.next();
      while (!result.done) {
        cb.call(thisArg, result.value, result.value, this);
        result = iterator.next();
      }
    }
  }
  function proxySet_(target, parent) {
    return new DraftSet(target, parent);
  }
  function prepareSetCopy(state) {
    if (!state.copy_) {
      state.copy_ = /* @__PURE__ */new Set();
      state.base_.forEach(value => {
        if (isDraftable(value)) {
          const draft = createProxy(value, state);
          state.drafts_.set(value, draft);
          state.copy_.add(draft);
        } else {
          state.copy_.add(value);
        }
      });
    }
  }
  function assertUnrevoked(state) {
    if (state.revoked_) die(3, JSON.stringify(latest(state)));
  }
  loadPlugin("MapSet", {
    proxyMap_,
    proxySet_
  });
}

// src/immer.ts
var immer = new Immer2();
var produce = immer.produce;
var produceWithPatches = immer.produceWithPatches.bind(immer);
var setAutoFreeze = immer.setAutoFreeze.bind(immer);
var setUseStrictShallowCopy = immer.setUseStrictShallowCopy.bind(immer);
var applyPatches = immer.applyPatches.bind(immer);
var createDraft = immer.createDraft.bind(immer);
var finishDraft = immer.finishDraft.bind(immer);
function castDraft(value) {
  return value;
}
function castImmutable(value) {
  return value;
}


/***/ })

}])
//# sourceMappingURL=libs_install_product-journey_appointments_data-access_src_index_ts-_f7c31.js.map