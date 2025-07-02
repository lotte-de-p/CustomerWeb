(self["webpackChunksales_mfe"] = self["webpackChunksales_mfe"] || []).push([["libs_sales_summary_data-access_src_index_ts-_dee31"],{

/***/ 99676:
/*!*****************************************************!*\
  !*** ./libs/sales/summary/data-access/src/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SummaryFacade: () => (/* reexport safe */ _lib_facade_summary_facade__WEBPACK_IMPORTED_MODULE_6__.SummaryFacade),
/* harmony export */   SummaryNgrxModule: () => (/* reexport safe */ _lib_state_summary_ngrx_module__WEBPACK_IMPORTED_MODULE_5__.SummaryNgrxModule),
/* harmony export */   ViewStateEnum: () => (/* reexport safe */ _lib_enums_view_state_enum__WEBPACK_IMPORTED_MODULE_13__.ViewStateEnum),
/* harmony export */   addSummaryDeliveryNotification: () => (/* reexport safe */ _lib_state_summary_actions__WEBPACK_IMPORTED_MODULE_0__.addSummaryDeliveryNotification),
/* harmony export */   addSummaryGeneralNotification: () => (/* reexport safe */ _lib_state_summary_actions__WEBPACK_IMPORTED_MODULE_0__.addSummaryGeneralNotification),
/* harmony export */   contractGenerationErrorNotification: () => (/* reexport safe */ _lib_constants_notifications_const__WEBPACK_IMPORTED_MODULE_14__.contractGenerationErrorNotification),
/* harmony export */   contractSummaryRequired: () => (/* reexport safe */ _lib_state_summary_selectors__WEBPACK_IMPORTED_MODULE_1__.contractSummaryRequired),
/* harmony export */   defaultState: () => (/* reexport safe */ _lib_state_summary_state__WEBPACK_IMPORTED_MODULE_3__.defaultState),
/* harmony export */   deliveryInfo: () => (/* reexport safe */ _lib_state_summary_selectors__WEBPACK_IMPORTED_MODULE_1__.deliveryInfo),
/* harmony export */   deliveryInfoAddressFactory: () => (/* reexport safe */ _lib_state_summary_state_testfactory__WEBPACK_IMPORTED_MODULE_4__.deliveryInfoAddressFactory),
/* harmony export */   deliveryInfoStateFactory: () => (/* reexport safe */ _lib_state_summary_state_testfactory__WEBPACK_IMPORTED_MODULE_4__.deliveryInfoStateFactory),
/* harmony export */   deliveryNotifications: () => (/* reexport safe */ _lib_state_summary_selectors__WEBPACK_IMPORTED_MODULE_1__.deliveryNotifications),
/* harmony export */   depreciationItemFactory: () => (/* reexport safe */ _lib_state_summary_state_testfactory__WEBPACK_IMPORTED_MODULE_4__.depreciationItemFactory),
/* harmony export */   depreciationItems: () => (/* reexport safe */ _lib_state_summary_selectors__WEBPACK_IMPORTED_MODULE_1__.depreciationItems),
/* harmony export */   featureState: () => (/* reexport safe */ _lib_state_summary_selectors__WEBPACK_IMPORTED_MODULE_1__.featureState),
/* harmony export */   generalNotifications: () => (/* reexport safe */ _lib_state_summary_selectors__WEBPACK_IMPORTED_MODULE_1__.generalNotifications),
/* harmony export */   ingenicoFormReady: () => (/* reexport safe */ _lib_state_summary_selectors__WEBPACK_IMPORTED_MODULE_1__.ingenicoFormReady),
/* harmony export */   ingenicoFormTestFactory: () => (/* reexport safe */ _lib_state_summary_state_testfactory__WEBPACK_IMPORTED_MODULE_4__.ingenicoFormTestFactory),
/* harmony export */   ingenicoFormUrl: () => (/* reexport safe */ _lib_state_summary_selectors__WEBPACK_IMPORTED_MODULE_1__.ingenicoFormUrl),
/* harmony export */   ingenicoRequest: () => (/* reexport safe */ _lib_state_summary_selectors__WEBPACK_IMPORTED_MODULE_1__.ingenicoRequest),
/* harmony export */   invoiceInfo: () => (/* reexport safe */ _lib_state_summary_selectors__WEBPACK_IMPORTED_MODULE_1__.invoiceInfo),
/* harmony export */   invoiceInfoStateFactory: () => (/* reexport safe */ _lib_state_summary_state_testfactory__WEBPACK_IMPORTED_MODULE_4__.invoiceInfoStateFactory),
/* harmony export */   orderItems: () => (/* reexport safe */ _lib_state_summary_selectors__WEBPACK_IMPORTED_MODULE_1__.orderItems),
/* harmony export */   paymentErrorNotification: () => (/* reexport safe */ _lib_constants_notifications_const__WEBPACK_IMPORTED_MODULE_14__.paymentErrorNotification),
/* harmony export */   personalInfo: () => (/* reexport safe */ _lib_state_summary_selectors__WEBPACK_IMPORTED_MODULE_1__.personalInfo),
/* harmony export */   prices: () => (/* reexport safe */ _lib_state_summary_selectors__WEBPACK_IMPORTED_MODULE_1__.prices),
/* harmony export */   reducer: () => (/* reexport safe */ _lib_state_summary_reducer__WEBPACK_IMPORTED_MODULE_2__.reducer),
/* harmony export */   setIngenicoFormUrl: () => (/* reexport safe */ _lib_state_summary_actions__WEBPACK_IMPORTED_MODULE_0__.setIngenicoFormUrl),
/* harmony export */   setSummaryContractSummaryRequired: () => (/* reexport safe */ _lib_state_summary_actions__WEBPACK_IMPORTED_MODULE_0__.setSummaryContractSummaryRequired),
/* harmony export */   setSummaryDeliveryAddress: () => (/* reexport safe */ _lib_state_summary_actions__WEBPACK_IMPORTED_MODULE_0__.setSummaryDeliveryAddress),
/* harmony export */   setSummaryDeliveryInfo: () => (/* reexport safe */ _lib_state_summary_actions__WEBPACK_IMPORTED_MODULE_0__.setSummaryDeliveryInfo),
/* harmony export */   setSummaryDeliveryPersonalInfo: () => (/* reexport safe */ _lib_state_summary_actions__WEBPACK_IMPORTED_MODULE_0__.setSummaryDeliveryPersonalInfo),
/* harmony export */   setSummaryDepreciationItems: () => (/* reexport safe */ _lib_state_summary_actions__WEBPACK_IMPORTED_MODULE_0__.setSummaryDepreciationItems),
/* harmony export */   setSummaryIngenicoForm: () => (/* reexport safe */ _lib_state_summary_actions__WEBPACK_IMPORTED_MODULE_0__.setSummaryIngenicoForm),
/* harmony export */   setSummaryIngenicoFormReady: () => (/* reexport safe */ _lib_state_summary_actions__WEBPACK_IMPORTED_MODULE_0__.setSummaryIngenicoFormReady),
/* harmony export */   setSummaryInvoiceInfo: () => (/* reexport safe */ _lib_state_summary_actions__WEBPACK_IMPORTED_MODULE_0__.setSummaryInvoiceInfo),
/* harmony export */   setSummaryOrderItems: () => (/* reexport safe */ _lib_state_summary_actions__WEBPACK_IMPORTED_MODULE_0__.setSummaryOrderItems),
/* harmony export */   setSummaryPersonalInfo: () => (/* reexport safe */ _lib_state_summary_actions__WEBPACK_IMPORTED_MODULE_0__.setSummaryPersonalInfo),
/* harmony export */   setSummaryPrices: () => (/* reexport safe */ _lib_state_summary_actions__WEBPACK_IMPORTED_MODULE_0__.setSummaryPrices),
/* harmony export */   setTermsAndConditionsUrl: () => (/* reexport safe */ _lib_state_summary_actions__WEBPACK_IMPORTED_MODULE_0__.setTermsAndConditionsUrl),
/* harmony export */   summaryFeature: () => (/* reexport safe */ _lib_state_summary_reducer__WEBPACK_IMPORTED_MODULE_2__.summaryFeature),
/* harmony export */   summaryPersonalInfoStateFactory: () => (/* reexport safe */ _lib_state_summary_state_testfactory__WEBPACK_IMPORTED_MODULE_4__.summaryPersonalInfoStateFactory),
/* harmony export */   summaryReducer: () => (/* reexport safe */ _lib_state_summary_reducer__WEBPACK_IMPORTED_MODULE_2__.summaryReducer),
/* harmony export */   summaryStateTestfactory: () => (/* reexport safe */ _lib_state_summary_state_testfactory__WEBPACK_IMPORTED_MODULE_4__.summaryStateTestfactory),
/* harmony export */   termsAndConditionsUrl: () => (/* reexport safe */ _lib_state_summary_selectors__WEBPACK_IMPORTED_MODULE_1__.termsAndConditionsUrl)
/* harmony export */ });
/* harmony import */ var _lib_state_summary_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/+state/summary.actions */ 47772);
/* harmony import */ var _lib_state_summary_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/+state/summary.selectors */ 1362);
/* harmony import */ var _lib_state_summary_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/+state/summary.reducer */ 41939);
/* harmony import */ var _lib_state_summary_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/+state/summary.state */ 50405);
/* harmony import */ var _lib_state_summary_state_testfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/+state/summary-state.testfactory */ 89273);
/* harmony import */ var _lib_state_summary_ngrx_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/+state/summary-ngrx.module */ 37414);
/* harmony import */ var _lib_facade_summary_facade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/facade/summary.facade */ 26354);
/* harmony import */ var _lib_interfaces_personal_info_interface__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/interfaces/personal-info.interface */ 45368);
/* harmony import */ var _lib_interfaces_delivery_info_interface__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/interfaces/delivery-info.interface */ 36702);
/* harmony import */ var _lib_interfaces_invoice_info_interface__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/interfaces/invoice-info.interface */ 55453);
/* harmony import */ var _lib_interfaces_depriciation_item_interface__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/interfaces/depriciation-item.interface */ 38342);
/* harmony import */ var _lib_interfaces_order_item_interface__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/interfaces/order-item.interface */ 28746);
/* harmony import */ var _lib_interfaces_notification_interface__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/interfaces/notification.interface */ 67350);
/* harmony import */ var _lib_enums_view_state_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/enums/view-state.enum */ 39054);
/* harmony import */ var _lib_constants_notifications_const__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lib/constants/notifications.const */ 19147);
















/***/ }),

/***/ 37414:
/*!******************************************************************************!*\
  !*** ./libs/sales/summary/data-access/src/lib/+state/summary-ngrx.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SummaryNgrxModule: () => (/* binding */ SummaryNgrxModule)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _summary_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./summary.reducer */ 41939);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




class SummaryNgrxModule {
  static #_ = this.ɵfac = function SummaryNgrxModule_Factory(t) {
    return new (t || SummaryNgrxModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: SummaryNgrxModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.StoreModule.forFeature(_summary_reducer__WEBPACK_IMPORTED_MODULE_1__.summaryFeature)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SummaryNgrxModule, {
    imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.StoreFeatureModule]
  });
})();

/***/ }),

/***/ 89273:
/*!************************************************************************************!*\
  !*** ./libs/sales/summary/data-access/src/lib/+state/summary-state.testfactory.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deliveryInfoAddressFactory: () => (/* binding */ deliveryInfoAddressFactory),
/* harmony export */   deliveryInfoStateFactory: () => (/* binding */ deliveryInfoStateFactory),
/* harmony export */   depreciationItemFactory: () => (/* binding */ depreciationItemFactory),
/* harmony export */   ingenicoFormTestFactory: () => (/* binding */ ingenicoFormTestFactory),
/* harmony export */   invoiceInfoStateFactory: () => (/* binding */ invoiceInfoStateFactory),
/* harmony export */   summaryPersonalInfoStateFactory: () => (/* binding */ summaryPersonalInfoStateFactory),
/* harmony export */   summaryStateTestfactory: () => (/* binding */ summaryStateTestfactory)
/* harmony export */ });
/* harmony import */ var factory_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! factory.ts */ 46032);
/* harmony import */ var _interfaces_order_item_testfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interfaces/order-item.testfactory */ 70891);


const summaryPersonalInfoStateFactory = (0,factory_ts__WEBPACK_IMPORTED_MODULE_0__.makeFactory)({
  email: 'test@test.com',
  firstname: 'firstname',
  lastname: 'lastname'
});
const deliveryInfoAddressFactory = (0,factory_ts__WEBPACK_IMPORTED_MODULE_0__.makeFactory)({
  addressUnitId: '123456789',
  box: 'box',
  country: 'BELGIUM',
  houseNumber: '1',
  municipality: 'Mechelen',
  street: 'Elektriciteitstraat',
  subHouseNumber: 'A',
  postalCode: '2800'
});
const deliveryInfoStateFactory = (0,factory_ts__WEBPACK_IMPORTED_MODULE_0__.makeFactory)({
  personalInfo: {
    email: 'test@delivery.com',
    firstname: 'deliveryFirstname',
    lastname: 'deliveryLastname',
    mobile: '0485delivery'
  },
  address: deliveryInfoAddressFactory.build()
});
const invoiceInfoStateFactory = (0,factory_ts__WEBPACK_IMPORTED_MODULE_0__.makeFactory)({
  box: 'invoicebox',
  country: 'BELGIUM',
  houseNumber: '5',
  municipality: 'Leuven',
  street: 'InvoiceStreet',
  subHouseNumber: 'B',
  postalCode: '3200'
});
const depreciationItemFactory = (0,factory_ts__WEBPACK_IMPORTED_MODULE_0__.makeFactory)({
  name: 'Testphone 1',
  price: 100,
  duration: 12
});
const ingenicoFormTestFactory = (0,factory_ts__WEBPACK_IMPORTED_MODULE_0__.makeFactory)({
  PSPID: 'telenet',
  ORDERID: '12345',
  CURRENCY: 'EUR',
  AMOUNT: '20000',
  LANGUAGE: 'BE_NL',
  SHASIGN: 'HASHEDSTUFF',
  SECRET: 'SECRETSTUFF',
  EMAIL: 'test@test.com',
  OWNERADDRESS: 'Elektriciteitsstraat 23',
  OWNERZIP: '2800',
  OWNERTOWN: 'Mechelen',
  TP: '',
  DEVICE: 'Computer',
  CN: '00000',
  OWNERCTY: 'Mechelen',
  OWNERTELNO: '0476606060',
  PM: '',
  BRAND: 'Telenet',
  ALIAS: '',
  ALIASUSAGE: '',
  ALIASOPERATION: '',
  PARAMPLUS: '',
  PARAMVAR: '',
  PMLISTTYPE: '',
  ACCEPTURL: 'https://accept.com',
  DECLINEURL: 'https://decline.com',
  EXCEPTIONURL: 'https://exception.com',
  CANCELURL: 'https://cancel.com'
});
const summaryStateTestfactory = (0,factory_ts__WEBPACK_IMPORTED_MODULE_0__.makeFactory)({
  personalInfo: summaryPersonalInfoStateFactory.build(),
  deliveryInfo: deliveryInfoStateFactory.build(),
  invoiceInfo: invoiceInfoStateFactory.build(),
  depreciationItems: depreciationItemFactory.buildList(2),
  orderItems: [_interfaces_order_item_testfactory__WEBPACK_IMPORTED_MODULE_1__.orderItemTestFactory.build(), _interfaces_order_item_testfactory__WEBPACK_IMPORTED_MODULE_1__.orderItemTestFactory.build(), _interfaces_order_item_testfactory__WEBPACK_IMPORTED_MODULE_1__.orderItemTestFactory.build()],
  prices: _interfaces_order_item_testfactory__WEBPACK_IMPORTED_MODULE_1__.summaryPricesTestFactory.build(),
  contractSummaryRequired: true,
  ingenicoFormReady: true,
  ingenicoRequest: undefined,
  generalNotifications: [],
  deliveryNotifications: [],
  termsAndConditionsUrl: undefined,
  ingenicoFormUrl: undefined
});

/***/ }),

/***/ 47772:
/*!**************************************************************************!*\
  !*** ./libs/sales/summary/data-access/src/lib/+state/summary.actions.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addSummaryDeliveryNotification: () => (/* binding */ addSummaryDeliveryNotification),
/* harmony export */   addSummaryGeneralNotification: () => (/* binding */ addSummaryGeneralNotification),
/* harmony export */   setIngenicoFormUrl: () => (/* binding */ setIngenicoFormUrl),
/* harmony export */   setSummaryContractSummaryRequired: () => (/* binding */ setSummaryContractSummaryRequired),
/* harmony export */   setSummaryDeliveryAddress: () => (/* binding */ setSummaryDeliveryAddress),
/* harmony export */   setSummaryDeliveryInfo: () => (/* binding */ setSummaryDeliveryInfo),
/* harmony export */   setSummaryDeliveryPersonalInfo: () => (/* binding */ setSummaryDeliveryPersonalInfo),
/* harmony export */   setSummaryDepreciationItems: () => (/* binding */ setSummaryDepreciationItems),
/* harmony export */   setSummaryIngenicoForm: () => (/* binding */ setSummaryIngenicoForm),
/* harmony export */   setSummaryIngenicoFormReady: () => (/* binding */ setSummaryIngenicoFormReady),
/* harmony export */   setSummaryInvoiceInfo: () => (/* binding */ setSummaryInvoiceInfo),
/* harmony export */   setSummaryOrderItems: () => (/* binding */ setSummaryOrderItems),
/* harmony export */   setSummaryPersonalInfo: () => (/* binding */ setSummaryPersonalInfo),
/* harmony export */   setSummaryPrices: () => (/* binding */ setSummaryPrices),
/* harmony export */   setTermsAndConditionsUrl: () => (/* binding */ setTermsAndConditionsUrl)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);

const setSummaryPersonalInfo = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[summary] set personal info', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setSummaryDeliveryAddress = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[summary] set delivery address', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setSummaryDeliveryInfo = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[summary] set delivery info', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setSummaryDeliveryPersonalInfo = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[summary] set delivery personal info', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setSummaryInvoiceInfo = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[summary] set invoice info', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setSummaryOrderItems = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[summary] set order items', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setSummaryPrices = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[summary] set prices', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setSummaryDepreciationItems = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[summary] set depreciation Items', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setSummaryContractSummaryRequired = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[summary] set if the contract summary is required', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setSummaryIngenicoForm = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[summary] set ingenico request form', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setSummaryIngenicoFormReady = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[summary] set ingenico request form ready', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setIngenicoFormUrl = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[summary] set ingenico form url', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setTermsAndConditionsUrl = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[summary] set Terms and Conditions url', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const addSummaryDeliveryNotification = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[summary] add delivery notification', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const addSummaryGeneralNotification = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[summary] add general notification', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 41939:
/*!**************************************************************************!*\
  !*** ./libs/sales/summary/data-access/src/lib/+state/summary.reducer.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reducer: () => (/* binding */ reducer),
/* harmony export */   summaryFeature: () => (/* binding */ summaryFeature),
/* harmony export */   summaryReducer: () => (/* binding */ summaryReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! immer */ 75825);
/* harmony import */ var _summary_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./summary.state */ 50405);
/* harmony import */ var _summary_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./summary.actions */ 47772);
/* harmony import */ var _constants_state_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/state.const */ 33386);





const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createReducer)(_summary_state__WEBPACK_IMPORTED_MODULE_1__.defaultState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_summary_actions__WEBPACK_IMPORTED_MODULE_2__.setSummaryPersonalInfo, (state, props) => {
  return (0,immer__WEBPACK_IMPORTED_MODULE_4__.produce)(state, draft => {
    draft.personalInfo = props.personalInfo;
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_summary_actions__WEBPACK_IMPORTED_MODULE_2__.setSummaryDeliveryInfo, (state, props) => {
  return (0,immer__WEBPACK_IMPORTED_MODULE_4__.produce)(state, draft => {
    draft.deliveryInfo = props.deliveryInfo;
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_summary_actions__WEBPACK_IMPORTED_MODULE_2__.setSummaryDeliveryPersonalInfo, (state, props) => {
  return (0,immer__WEBPACK_IMPORTED_MODULE_4__.produce)(state, draft => {
    if (draft.deliveryInfo) {
      draft.deliveryInfo.personalInfo = props.personalInfo;
    }
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_summary_actions__WEBPACK_IMPORTED_MODULE_2__.setSummaryDeliveryAddress, (state, props) => {
  return (0,immer__WEBPACK_IMPORTED_MODULE_4__.produce)(state, draft => {
    if (draft.deliveryInfo) {
      draft.deliveryInfo.address = props.deliveryAddress;
    }
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_summary_actions__WEBPACK_IMPORTED_MODULE_2__.setSummaryInvoiceInfo, (state, props) => {
  return (0,immer__WEBPACK_IMPORTED_MODULE_4__.produce)(state, draft => {
    draft.invoiceInfo = props.billingAddress;
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_summary_actions__WEBPACK_IMPORTED_MODULE_2__.setSummaryOrderItems, (state, props) => {
  return (0,immer__WEBPACK_IMPORTED_MODULE_4__.produce)(state, draft => {
    draft.orderItems = props.orderItems;
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_summary_actions__WEBPACK_IMPORTED_MODULE_2__.setSummaryPrices, (state, props) => {
  return (0,immer__WEBPACK_IMPORTED_MODULE_4__.produce)(state, draft => {
    draft.prices = props.prices;
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_summary_actions__WEBPACK_IMPORTED_MODULE_2__.setSummaryDepreciationItems, (state, props) => {
  return (0,immer__WEBPACK_IMPORTED_MODULE_4__.produce)(state, draft => {
    draft.depreciationItems = props.depreciationItems;
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_summary_actions__WEBPACK_IMPORTED_MODULE_2__.setSummaryContractSummaryRequired, (state, props) => {
  return (0,immer__WEBPACK_IMPORTED_MODULE_4__.produce)(state, draft => {
    draft.contractSummaryRequired = props.contractSummaryRequired;
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_summary_actions__WEBPACK_IMPORTED_MODULE_2__.setSummaryIngenicoForm, (state, props) => {
  return (0,immer__WEBPACK_IMPORTED_MODULE_4__.produce)(state, draft => {
    draft.ingenicoRequest = props.ingenicoForm;
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_summary_actions__WEBPACK_IMPORTED_MODULE_2__.setSummaryIngenicoFormReady, (state, props) => {
  return (0,immer__WEBPACK_IMPORTED_MODULE_4__.produce)(state, draft => {
    draft.ingenicoFormReady = props.ingenicoFormReady;
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_summary_actions__WEBPACK_IMPORTED_MODULE_2__.addSummaryGeneralNotification, (state, props) => {
  return (0,immer__WEBPACK_IMPORTED_MODULE_4__.produce)(state, draft => {
    const notificationExists = draft.generalNotifications.some(notification => notification.message === props.notification.message);
    if (!notificationExists) {
      draft.generalNotifications.push(props.notification);
    }
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_summary_actions__WEBPACK_IMPORTED_MODULE_2__.addSummaryDeliveryNotification, (state, props) => {
  return (0,immer__WEBPACK_IMPORTED_MODULE_4__.produce)(state, draft => {
    draft.deliveryNotifications.push(props.notification);
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_summary_actions__WEBPACK_IMPORTED_MODULE_2__.setIngenicoFormUrl, (state, props) => {
  return (0,immer__WEBPACK_IMPORTED_MODULE_4__.produce)(state, draft => {
    draft.ingenicoFormUrl = props.ingenicoFormUrl;
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_summary_actions__WEBPACK_IMPORTED_MODULE_2__.setTermsAndConditionsUrl, (state, props) => {
  return (0,immer__WEBPACK_IMPORTED_MODULE_4__.produce)(state, draft => {
    draft.termsAndConditionsUrl = props.termsAndConditionsUrl;
  });
}));
function summaryReducer(state = _summary_state__WEBPACK_IMPORTED_MODULE_1__.defaultState, action) {
  return reducer(state, action);
}
const summaryFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeature)({
  name: _constants_state_const__WEBPACK_IMPORTED_MODULE_3__.stateFeatureName,
  reducer: summaryReducer
});

/***/ }),

/***/ 1362:
/*!****************************************************************************!*\
  !*** ./libs/sales/summary/data-access/src/lib/+state/summary.selectors.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contractSummaryRequired: () => (/* binding */ contractSummaryRequired),
/* harmony export */   deliveryInfo: () => (/* binding */ deliveryInfo),
/* harmony export */   deliveryNotifications: () => (/* binding */ deliveryNotifications),
/* harmony export */   depreciationItems: () => (/* binding */ depreciationItems),
/* harmony export */   featureState: () => (/* binding */ featureState),
/* harmony export */   generalNotifications: () => (/* binding */ generalNotifications),
/* harmony export */   ingenicoFormReady: () => (/* binding */ ingenicoFormReady),
/* harmony export */   ingenicoFormUrl: () => (/* binding */ ingenicoFormUrl),
/* harmony export */   ingenicoRequest: () => (/* binding */ ingenicoRequest),
/* harmony export */   invoiceInfo: () => (/* binding */ invoiceInfo),
/* harmony export */   orderItems: () => (/* binding */ orderItems),
/* harmony export */   personalInfo: () => (/* binding */ personalInfo),
/* harmony export */   prices: () => (/* binding */ prices),
/* harmony export */   termsAndConditionsUrl: () => (/* binding */ termsAndConditionsUrl)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_state_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/state.const */ 33386);


const featureState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)(_constants_state_const__WEBPACK_IMPORTED_MODULE_1__.stateFeatureName);
const personalInfo = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => {
  return state.personalInfo;
});
const deliveryInfo = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => {
  return state.deliveryInfo;
});
const invoiceInfo = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => {
  return state.invoiceInfo;
});
const orderItems = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => {
  return state.orderItems;
});
const prices = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => {
  return state.prices;
});
const depreciationItems = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => {
  return state.depreciationItems;
});
const ingenicoRequest = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => {
  return state.ingenicoRequest;
});
const contractSummaryRequired = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => {
  return state.contractSummaryRequired;
});
const ingenicoFormReady = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => {
  return state.ingenicoFormReady;
});
const generalNotifications = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => {
  return state.generalNotifications;
});
const deliveryNotifications = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => {
  return state.deliveryNotifications;
});
const ingenicoFormUrl = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => {
  return state.ingenicoFormUrl;
});
const termsAndConditionsUrl = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => {
  return state.termsAndConditionsUrl;
});

/***/ }),

/***/ 50405:
/*!************************************************************************!*\
  !*** ./libs/sales/summary/data-access/src/lib/+state/summary.state.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultState: () => (/* binding */ defaultState)
/* harmony export */ });
const defaultState = {
  personalInfo: undefined,
  deliveryInfo: undefined,
  invoiceInfo: undefined,
  depreciationItems: undefined,
  orderItems: undefined,
  prices: undefined,
  contractSummaryRequired: undefined,
  ingenicoFormReady: false,
  ingenicoRequest: undefined,
  generalNotifications: [],
  deliveryNotifications: [],
  termsAndConditionsUrl: undefined,
  ingenicoFormUrl: undefined
};

/***/ }),

/***/ 19147:
/*!*********************************************************************************!*\
  !*** ./libs/sales/summary/data-access/src/lib/constants/notifications.const.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contractGenerationErrorNotification: () => (/* binding */ contractGenerationErrorNotification),
/* harmony export */   paymentErrorNotification: () => (/* binding */ paymentErrorNotification)
/* harmony export */ });
const paymentErrorNotification = {
  weight: 1,
  message: 'ng.sales-checkout.lbl.error.ingenico-decline-errorfield',
  type: 'error'
};
const contractGenerationErrorNotification = {
  weight: 1,
  message: 'ng.sales-checkout.lbl.error.contract-generation-errorfield',
  type: 'error'
};

/***/ }),

/***/ 33386:
/*!*************************************************************************!*\
  !*** ./libs/sales/summary/data-access/src/lib/constants/state.const.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   stateFeatureName: () => (/* binding */ stateFeatureName)
/* harmony export */ });
const stateFeatureName = 'summaryFeature';

/***/ }),

/***/ 39054:
/*!*************************************************************************!*\
  !*** ./libs/sales/summary/data-access/src/lib/enums/view-state.enum.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewStateEnum: () => (/* binding */ ViewStateEnum)
/* harmony export */ });
var ViewStateEnum;
(function (ViewStateEnum) {
  ViewStateEnum[ViewStateEnum["OVERLAY_OPEN"] = 0] = "OVERLAY_OPEN";
  ViewStateEnum[ViewStateEnum["OVERLAY_CLOSED"] = 1] = "OVERLAY_CLOSED";
})(ViewStateEnum || (ViewStateEnum = {}));

/***/ }),

/***/ 26354:
/*!*************************************************************************!*\
  !*** ./libs/sales/summary/data-access/src/lib/facade/summary.facade.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SummaryFacade: () => (/* binding */ SummaryFacade)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _state_summary_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../+state/summary.selectors */ 1362);
/* harmony import */ var _state_summary_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../+state/summary.actions */ 47772);
/* harmony import */ var _utils_summary_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/summary.util */ 69824);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_7__);










class SummaryFacade {
  constructor(store, urlService, languageService) {
    this.store = store;
    this.urlService = urlService;
    this.languageService = languageService;
    this.personalInfo$ = this.store.select(_state_summary_selectors__WEBPACK_IMPORTED_MODULE_3__.personalInfo);
    this.deliveryInfo$ = this.store.select(_state_summary_selectors__WEBPACK_IMPORTED_MODULE_3__.deliveryInfo);
    this.invoiceInfo$ = this.store.select(_state_summary_selectors__WEBPACK_IMPORTED_MODULE_3__.invoiceInfo);
    this.sortedOrderItems$ = this.store.select(_state_summary_selectors__WEBPACK_IMPORTED_MODULE_3__.orderItems).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(orderItems => {
      return orderItems ? _utils_summary_util__WEBPACK_IMPORTED_MODULE_5__.SummaryUtil.sortOrderItems([...orderItems]) : undefined;
    }));
    this.prices$ = this.store.select(_state_summary_selectors__WEBPACK_IMPORTED_MODULE_3__.prices);
    this.depreciationItems$ = this.store.select(_state_summary_selectors__WEBPACK_IMPORTED_MODULE_3__.depreciationItems);
    this.ingenicoRequest$ = this.store.select(_state_summary_selectors__WEBPACK_IMPORTED_MODULE_3__.ingenicoRequest);
    this.contractSummaryRequired$ = this.store.select(_state_summary_selectors__WEBPACK_IMPORTED_MODULE_3__.contractSummaryRequired);
    this.ingenicoFormReady$ = this.store.select(_state_summary_selectors__WEBPACK_IMPORTED_MODULE_3__.ingenicoFormReady);
    this.deliveryNotifications$ = this.store.select(_state_summary_selectors__WEBPACK_IMPORTED_MODULE_3__.deliveryNotifications);
    this.generalNotifications$ = this.store.select(_state_summary_selectors__WEBPACK_IMPORTED_MODULE_3__.generalNotifications);
    this.termsAndConditionsUrl$ = this.store.select(_state_summary_selectors__WEBPACK_IMPORTED_MODULE_3__.termsAndConditionsUrl);
    this.ingenicoFormUrl$ = this.store.select(_state_summary_selectors__WEBPACK_IMPORTED_MODULE_3__.ingenicoFormUrl);
  }
  setIngenicoFormReady(value) {
    this.store.dispatch((0,_state_summary_actions__WEBPACK_IMPORTED_MODULE_4__.setSummaryIngenicoFormReady)({
      ingenicoFormReady: value
    }));
  }
  setIngenicoForm(ingenicoForm) {
    this.store.dispatch((0,_state_summary_actions__WEBPACK_IMPORTED_MODULE_4__.setSummaryIngenicoForm)({
      ingenicoForm: ingenicoForm
    }));
  }
  showTermsAndConditions() {
    return this.termsAndConditionsUrl$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)(url => {
      if (url) {
        this.urlService.openNewTab(url);
      } else {
        throw new Error('No Terms and Conditions URL provided');
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(() => false));
  }
  getLanguage() {
    return this.languageService.getLanguage();
  }
  static #_ = this.ɵfac = function SummaryFacade_Factory(t) {
    return new (t || SummaryFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_6__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_6__.LanguageService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
    token: SummaryFacade,
    factory: SummaryFacade.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 36702:
/*!**************************************************************************************!*\
  !*** ./libs/sales/summary/data-access/src/lib/interfaces/delivery-info.interface.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 38342:
/*!******************************************************************************************!*\
  !*** ./libs/sales/summary/data-access/src/lib/interfaces/depriciation-item.interface.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 55453:
/*!*************************************************************************************!*\
  !*** ./libs/sales/summary/data-access/src/lib/interfaces/invoice-info.interface.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 67350:
/*!*************************************************************************************!*\
  !*** ./libs/sales/summary/data-access/src/lib/interfaces/notification.interface.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 28746:
/*!***********************************************************************************!*\
  !*** ./libs/sales/summary/data-access/src/lib/interfaces/order-item.interface.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 70891:
/*!*************************************************************************************!*\
  !*** ./libs/sales/summary/data-access/src/lib/interfaces/order-item.testfactory.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   etfPriceTestFactory: () => (/* binding */ etfPriceTestFactory),
/* harmony export */   orderItemTestFactory: () => (/* binding */ orderItemTestFactory),
/* harmony export */   priceTestFactory: () => (/* binding */ priceTestFactory),
/* harmony export */   pricesTestFactory: () => (/* binding */ pricesTestFactory),
/* harmony export */   summaryDiscountFactory: () => (/* binding */ summaryDiscountFactory),
/* harmony export */   summaryPricesTestFactory: () => (/* binding */ summaryPricesTestFactory)
/* harmony export */ });
/* harmony import */ var factory_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! factory.ts */ 46032);

const priceTestFactory = factory_ts__WEBPACK_IMPORTED_MODULE_0__.Sync.makeFactory({
  currency: {
    name: 'Euro',
    code: 'EUR'
  },
  value: '100'
});
const etfPriceTestFactory = factory_ts__WEBPACK_IMPORTED_MODULE_0__.Sync.makeFactory({
  labelKey: 'Apple',
  productName: 'Iphone',
  price: priceTestFactory.build(),
  isMonthly: true
});
const pricesTestFactory = factory_ts__WEBPACK_IMPORTED_MODULE_0__.Sync.makeFactory({
  total: priceTestFactory.build(),
  discount: priceTestFactory.build(),
  discounted: priceTestFactory.build()
});
const orderItemTestFactory = factory_ts__WEBPACK_IMPORTED_MODULE_0__.Sync.makeFactory({
  id: '1',
  name: 'Testphone',
  prices: pricesTestFactory.build({
    discount: priceTestFactory.build({
      value: '0.00',
      currency: {
        name: 'Euro',
        code: 'EUR'
      }
    })
  })
});
const summaryDiscountFactory = factory_ts__WEBPACK_IMPORTED_MODULE_0__.Sync.makeFactory({
  price: priceTestFactory.build(),
  label: 'testlabel'
});
const summaryPricesTestFactory = factory_ts__WEBPACK_IMPORTED_MODULE_0__.Sync.makeFactory({
  totals: {
    deliveryCost: priceTestFactory.build(),
    upfrontCost: priceTestFactory.build(),
    etfTotal: priceTestFactory.build(),
    etfPrices: [etfPriceTestFactory.build()]
  },
  subTotals: {
    deliveryCost: priceTestFactory.build(),
    upfrontCost: priceTestFactory.build(),
    etfTotal: priceTestFactory.build(),
    etfPrices: [etfPriceTestFactory.build()]
  },
  vatInclusive: false
});

/***/ }),

/***/ 45368:
/*!**************************************************************************************!*\
  !*** ./libs/sales/summary/data-access/src/lib/interfaces/personal-info.interface.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 69824:
/*!**********************************************************************!*\
  !*** ./libs/sales/summary/data-access/src/lib/utils/summary.util.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SummaryUtil: () => (/* binding */ SummaryUtil)
/* harmony export */ });
class SummaryUtil {
  static sortOrderItems(orderItems) {
    return orderItems.sort((a, b) => {
      let sortValue = 0;
      if (SummaryUtil.hasDiscount(a) && SummaryUtil.hasDiscount(b)) {
        sortValue = Number(b.prices.discounted.value) - Number(a.prices.discounted.value);
      } else if (!SummaryUtil.hasDiscount(a) && !SummaryUtil.hasDiscount(b)) {
        sortValue = Number(b.prices.total.value) - Number(a.prices.total.value);
      } else {
        if (SummaryUtil.hasDiscount(a)) {
          sortValue = -1;
        } else if (SummaryUtil.hasDiscount(b)) {
          sortValue = 1;
        }
      }
      return sortValue;
    });
  }
  static hasDiscount(summaryOrderItem) {
    return summaryOrderItem.discount !== undefined;
  }
}

/***/ }),

/***/ 99199:
/*!******************************************!*\
  !*** ./node_modules/clone-deep/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/**
 * Module dependenices
 */
const clone = __webpack_require__(/*! shallow-clone */ 92751);
const typeOf = __webpack_require__(/*! kind-of */ 46030);
const isPlainObject = __webpack_require__(/*! is-plain-object */ 87680);
function cloneDeep(val, instanceClone) {
  switch (typeOf(val)) {
    case 'object':
      return cloneObjectDeep(val, instanceClone);
    case 'array':
      return cloneArrayDeep(val, instanceClone);
    default:
      {
        return clone(val);
      }
  }
}
function cloneObjectDeep(val, instanceClone) {
  if (typeof instanceClone === 'function') {
    return instanceClone(val);
  }
  if (instanceClone || isPlainObject(val)) {
    const res = new val.constructor();
    for (let key in val) {
      res[key] = cloneDeep(val[key], instanceClone);
    }
    return res;
  }
  return val;
}
function cloneArrayDeep(val, instanceClone) {
  const res = new val.constructor(val.length);
  for (let i = 0; i < val.length; i++) {
    res[i] = cloneDeep(val[i], instanceClone);
  }
  return res;
}

/**
 * Expose `cloneDeep`
 */

module.exports = cloneDeep;

/***/ }),

/***/ 82015:
/*!**********************************************!*\
  !*** ./node_modules/factory.ts/lib/async.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.makeFactoryFromSync = exports.makeFactoryWithRequired = exports.makeFactory = exports.each = exports.val = exports.TransformFactory = exports.Factory = exports.Derived = exports.Generator = exports.lift = void 0;
const shared_1 = __webpack_require__(/*! ./shared */ 56109);
const Sync = __webpack_require__(/*! ./sync */ 77109);
const cloneDeep = __webpack_require__(/*! clone-deep */ 99199);
function isPromise(t) {
  return !!t && typeof t["then"] === "function";
}
function lift(t) {
  if (isPromise(t)) {
    return t;
  } else {
    return Promise.resolve(t);
  }
}
exports.lift = lift;
class Generator {
  constructor(func) {
    this.func = func;
  }
  build(seq) {
    return lift(this.func(seq));
  }
}
exports.Generator = Generator;
class Derived {
  constructor(func) {
    this.func = func;
  }
  build(owner, seq) {
    return lift(this.func(owner, seq));
  }
}
exports.Derived = Derived;
class Factory {
  constructor(builder, config) {
    this.builder = builder;
    this.config = config;
    this.getStartingSequenceNumber = () => this.config && this.config.startingSequenceNumber || 0;
    this.build = item => __awaiter(this, void 0, void 0, function* () {
      return this.buildInner(null, item);
    });
    this.buildInner = (buildKeys, item) => __awaiter(this, void 0, void 0, function* () {
      const seqNum = this.seqNum;
      this.seqNum++;
      const base = yield buildBase(seqNum, this.builder);
      let v = Object.assign({}, base.value); //, item);
      if (item) {
        v = (0, shared_1.recursivePartialOverride)(v, item);
      }
      const directlySpecifiedKeys = Object.keys(item || {});
      if (!buildKeys) {
        buildKeys = base.derived.map(d => d.key);
      }
      for (const der of base.derived) {
        if (!buildKeys.includes(der.key)) {
          // console.log(`skip unspecified build key ${der.key}`);
          continue;
        }
        if (directlySpecifiedKeys.includes(der.key)) {
          // console.log(`skip explicitly defined build key ${der.key}`);
          continue;
        }
        v[der.key] = yield der.derived.build(v, seqNum);
      }
      return lift(v);
    });
    this.buildList = (count, item) => __awaiter(this, void 0, void 0, function* () {
      const ts = Array(count); // allocate to correct size
      // don't run in parallel, so that seq num works predictably
      for (let i = 0; i < count; i++) {
        ts[i] = yield this.build(item);
      }
      return ts;
    });
    this.seqNum = this.getStartingSequenceNumber();
  }
  resetSequenceNumber(newSequenceNumber) {
    this.seqNum = newSequenceNumber ? newSequenceNumber : this.getStartingSequenceNumber();
  }
  extend(def) {
    const builder = Object.assign({}, this.builder, def);
    return new Factory(builder, this.config);
  }
  combine(other) {
    const builder = Object.assign({}, this.builder, other.builder);
    return new Factory(builder, this.config);
  }
  transform(fn) {
    return new TransformFactory(this, fn);
  }
  withDerivation(kOut, f) {
    const partial = {};
    partial[kOut] = new Derived(f);
    return this.extend(partial);
  }
  withSelfDerivation(kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((v2, seq) => __awaiter(this, void 0, void 0, function* () {
      delete v2[kOut];
      const origValue = (yield this.buildInner([kOut], v2))[kOut];
      v2[kOut] = origValue;
      return f(v2, seq);
    }));
    return this.extend(partial);
  }
  withDerivation1(kInput, kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((t, i) => f(t[kInput[0]], i));
    return this.extend(partial);
  }
  withDerivation2(kInput, kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((t, i) => f(t[kInput[0]], t[kInput[1]], i));
    return this.extend(partial);
  }
  withDerivation3(kInput, kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((t, i) => f(t[kInput[0]], t[kInput[1]], t[kInput[2]], i));
    return this.extend(partial);
  }
  withDerivation4(kInput, kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((t, i) => f(t[kInput[0]], t[kInput[1]], t[kInput[2]], t[kInput[3]], i));
    return this.extend(partial);
  }
  withDerivation5(kInput, kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((t, i) => f(t[kInput[0]], t[kInput[1]], t[kInput[2]], t[kInput[3]], t[kInput[4]], i));
    return this.extend(partial);
  }
}
exports.Factory = Factory;
class TransformFactory {
  constructor(inner, transform) {
    this.inner = inner;
    this.transform = transform;
    this.build = item => __awaiter(this, void 0, void 0, function* () {
      const v = yield this.inner.build(item);
      const u = yield lift(this.transform(v));
      return u;
    });
    this.buildList = (count, item) => __awaiter(this, void 0, void 0, function* () {
      const vs = yield this.inner.buildList(count, item);
      return Promise.all(vs.map(this.transform).map(lift));
    });
  }
}
exports.TransformFactory = TransformFactory;
function val(val) {
  return new Generator(() => val);
}
exports.val = val;
function each(f) {
  return new Generator(f);
}
exports.each = each;
function buildBase(seqNum, builder) {
  return __awaiter(this, void 0, void 0, function* () {
    const resolvedBuilder = yield lift(builder);
    const t = {};
    const keys = Object.getOwnPropertyNames(resolvedBuilder);
    const derived = [];
    for (const key of keys) {
      const v = resolvedBuilder[key];
      let value = v;
      if (!!v && typeof v === "object") {
        if (isPromise(v)) {
          value = yield v;
        } else if (v.constructor === Generator) {
          value = yield v.build(seqNum);
        } else if (v.constructor == Derived) {
          derived.push({
            key,
            derived: v
          });
        } else if (v.constructor === Sync.Generator) {
          value = v.build(seqNum);
        } else if (v.constructor == Sync.Derived) {
          derived.push({
            key,
            derived: new Derived(v.func)
          });
        } else {
          value = cloneDeep(v);
        }
      }
      t[key] = value;
    }
    return {
      value: t,
      derived
    };
  });
}
function makeFactory(builder, config) {
  return new Factory(builder, config);
}
exports.makeFactory = makeFactory;
function makeFactoryWithRequired(builder, config) {
  return new Factory(builder, config);
}
exports.makeFactoryWithRequired = makeFactoryWithRequired;
function makeFactoryFromSync(builder, config) {
  return new Factory(builder, config);
}
exports.makeFactoryFromSync = makeFactoryFromSync;

/***/ }),

/***/ 46032:
/*!**********************************************!*\
  !*** ./node_modules/factory.ts/lib/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.makeFactory = exports.each = exports.val = exports.Factory = exports.Derived = exports.Generator = exports.Pipeline = exports.Sync = exports.Async = void 0;
const Async = __webpack_require__(/*! ./async */ 82015);
exports.Async = Async;
const Sync = __webpack_require__(/*! ./sync */ 77109);
exports.Sync = Sync;
const Pipeline = __webpack_require__(/*! ./pipeline */ 8983);
exports.Pipeline = Pipeline;
// for now, for backwards compat
var sync_1 = __webpack_require__(/*! ./sync */ 77109);
Object.defineProperty(exports, "Generator", ({
  enumerable: true,
  get: function () {
    return sync_1.Generator;
  }
}));
Object.defineProperty(exports, "Derived", ({
  enumerable: true,
  get: function () {
    return sync_1.Derived;
  }
}));
Object.defineProperty(exports, "Factory", ({
  enumerable: true,
  get: function () {
    return sync_1.Factory;
  }
}));
Object.defineProperty(exports, "val", ({
  enumerable: true,
  get: function () {
    return sync_1.val;
  }
}));
Object.defineProperty(exports, "each", ({
  enumerable: true,
  get: function () {
    return sync_1.each;
  }
}));
Object.defineProperty(exports, "makeFactory", ({
  enumerable: true,
  get: function () {
    return sync_1.makeFactory;
  }
}));

/***/ }),

/***/ 8983:
/*!*************************************************!*\
  !*** ./node_modules/factory.ts/lib/pipeline.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Pipeline = void 0;
const Async = __webpack_require__(/*! ./async */ 82015);
class Pipeline {
  constructor(current) {
    this.current = current;
  }
  static start() {
    return new Pipeline(Promise.resolve({}));
  }
  //add<T,U>(factory: Async.IFactory<T,U> | Async.FactoryFunc<T,U>, val: Parti (p:P) => Partial<T>)
  addValues(val) {
    return new Pipeline(this.current.then(c => __awaiter(this, void 0, void 0, function* () {
      const v = typeof val === "function" ? yield Async.lift(val(c)) : val;
      return Object.assign(Object.assign({}, c), v);
    })));
  }
  // NOTE: want to combine all addFactory() methods, but
  // Typescript and or ts-node seems to have problems
  // also want use object { key: partial } instead
  // but can't get the types right
  addFactoryFunc(factory, key, partial) {
    return new Pipeline(this.current.then(c => __awaiter(this, void 0, void 0, function* () {
      const p = typeof partial === "function" ? yield Async.lift(partial(c)) : partial;
      const val = yield factory(p);
      const newV = {};
      newV[key] = val;
      return Object.assign(Object.assign({}, c), newV);
    })));
  }
  addFactory(factory, key, partial) {
    return this.addFactoryFunc(v => factory.build(v), key, partial);
  }
  addTxFactory(factory, key, partial) {
    return this.addFactoryFunc(v => factory.build(v), key, partial);
  }
  then(onfulfilled, onrejected) {
    return this.current.then(onfulfilled, onrejected);
  }
  toFactory() {
    return Async.makeFactory(this.current);
  }
}
exports.Pipeline = Pipeline;

/***/ }),

/***/ 56109:
/*!***********************************************!*\
  !*** ./node_modules/factory.ts/lib/shared.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.uniq = exports.recursivePartialOverride = void 0;
function recursivePartialOverride(x, y) {
  if (y === undefined || y === null) return x;
  const objProto = Object.getPrototypeOf({});
  if (Object.getPrototypeOf(y) != objProto) return y;
  let v = Object.assign({}, x);
  let yKeys = Object.keys(y);
  const allKeys = uniq(Object.keys(v).concat(yKeys));
  for (const key of allKeys) {
    if (yKeys.indexOf(key) >= 0) {
      const itemKeyVal = y[key];
      if (null != itemKeyVal && typeof itemKeyVal === "object") {
        const baseKeyVal = v[key];
        v[key] = recursivePartialOverride(baseKeyVal, itemKeyVal);
      } else {
        v[key] = itemKeyVal;
      }
    }
  }
  return v;
}
exports.recursivePartialOverride = recursivePartialOverride;
function uniq(ts) {
  const out = [];
  for (const v of ts) {
    if (out.indexOf(v) < 0) {
      out.push(v);
    }
  }
  return out;
}
exports.uniq = uniq;

/***/ }),

/***/ 77109:
/*!*********************************************!*\
  !*** ./node_modules/factory.ts/lib/sync.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.makeFactoryWithRequired = exports.makeFactory = exports.each = exports.val = exports.Factory = exports.Derived = exports.Generator = void 0;
const shared_1 = __webpack_require__(/*! ./shared */ 56109);
const cloneDeep = __webpack_require__(/*! clone-deep */ 99199);
class Generator {
  constructor(func) {
    this.func = func;
  }
  build(seq) {
    return this.func(seq);
  }
}
exports.Generator = Generator;
class Derived {
  constructor(func) {
    this.func = func;
  }
  build(owner, seq) {
    const ret = this.func(owner, seq);
    return ret;
  }
}
exports.Derived = Derived;
class Factory {
  expandBuilder() {
    return typeof this.builder === "function" ? this.builder() : this.builder;
  }
  constructor(builder, config) {
    this.builder = builder;
    this.config = config;
    this.getStartingSequenceNumber = () => this.config && this.config.startingSequenceNumber || 0;
    this.build = item => {
      return this.buildInner(null, item);
    };
    this.buildInner = (buildKeys, item) => {
      const seqNum = this.seqNum;
      this.seqNum++;
      const base = buildBase(seqNum, this.expandBuilder());
      let v = Object.assign({}, base.value); //, item);
      if (item) {
        v = (0, shared_1.recursivePartialOverride)(v, item);
      }
      const directlySpecifiedKeys = Object.keys(item || {});
      if (!buildKeys) {
        buildKeys = base.derived.map(d => d.key);
      }
      for (const der of base.derived) {
        if (!buildKeys.includes(der.key)) {
          // console.log(`skip unspecified build key ${der.key}`);
          continue;
        }
        if (directlySpecifiedKeys.includes(der.key)) {
          // console.log(`skip explicitly defined build key ${der.key}`);
          continue;
        }
        v[der.key] = der.derived.build(v, seqNum);
      }
      return v;
    };
    this.buildList = (count, item) => {
      const ts = Array(count); // allocate to correct size
      for (let i = 0; i < count; i++) {
        ts[i] = this.build(item);
      }
      return ts;
    };
    this.seqNum = this.getStartingSequenceNumber();
  }
  resetSequenceNumber(newSequenceNumber) {
    this.seqNum = newSequenceNumber ? newSequenceNumber : this.getStartingSequenceNumber();
  }
  extend(def) {
    const builder = () => Object.assign({}, this.expandBuilder(), def);
    return new Factory(builder, this.config);
  }
  combine(other) {
    const builder = () => Object.assign({}, this.expandBuilder(), other.expandBuilder());
    return new Factory(builder, this.config);
  }
  withSelfDerivation(kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((v2, seq) => {
      delete v2[kOut];
      const origValue = this.buildInner([kOut], v2)[kOut];
      v2[kOut] = origValue;
      return f(v2, seq);
    });
    return this.extend(partial);
  }
  withDerivation(kOut, f) {
    const partial = {};
    partial[kOut] = new Derived(f);
    return this.extend(partial);
  }
  withDerivation1(kInput, kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((t, i) => f(t[kInput[0]], i));
    return this.extend(partial);
  }
  withDerivation2(kInput, kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((t, i) => f(t[kInput[0]], t[kInput[1]], i));
    return this.extend(partial);
  }
  withDerivation3(kInput, kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((t, i) => f(t[kInput[0]], t[kInput[1]], t[kInput[2]], i));
    return this.extend(partial);
  }
  withDerivation4(kInput, kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((t, i) => f(t[kInput[0]], t[kInput[1]], t[kInput[2]], t[kInput[3]], i));
    return this.extend(partial);
  }
  withDerivation5(kInput, kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((t, i) => f(t[kInput[0]], t[kInput[1]], t[kInput[2]], t[kInput[3]], t[kInput[4]], i));
    return this.extend(partial);
  }
}
exports.Factory = Factory;
function val(val) {
  return new Generator(() => val);
}
exports.val = val;
function each(f) {
  return new Generator(f);
}
exports.each = each;
function buildBase(seqNum, builder) {
  const t = {};
  const keys = Object.getOwnPropertyNames(builder);
  const derived = [];
  for (const key of keys) {
    const v = builder[key];
    let value = v;
    if (!!v && typeof v === "object") {
      if (v.constructor === Generator) {
        value = v.build(seqNum);
      } else if (v.constructor == Derived) {
        derived.push({
          key,
          derived: v
        });
      } else {
        value = cloneDeep(v);
      }
    }
    t[key] = value;
  }
  return {
    value: t,
    derived
  };
}
function makeFactory(builder, config) {
  return new Factory(builder, config);
}
exports.makeFactory = makeFactory;
function makeFactoryWithRequired(builder, config) {
  return new Factory(builder, config);
}
exports.makeFactoryWithRequired = makeFactoryWithRequired;

/***/ }),

/***/ 87680:
/*!***********************************************!*\
  !*** ./node_modules/is-plain-object/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var isObject = __webpack_require__(/*! isobject */ 6859);
function isObjectObject(o) {
  return isObject(o) === true && Object.prototype.toString.call(o) === '[object Object]';
}
module.exports = function isPlainObject(o) {
  var ctor, prot;
  if (isObjectObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (typeof ctor !== 'function') return false;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
};

/***/ }),

/***/ 6859:
/*!****************************************!*\
  !*** ./node_modules/isobject/index.js ***!
  \****************************************/
/***/ ((module) => {

/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};

/***/ }),

/***/ 46030:
/*!***************************************!*\
  !*** ./node_modules/kind-of/index.js ***!
  \***************************************/
/***/ ((module) => {

var toString = Object.prototype.toString;
module.exports = function kindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';
  var type = typeof val;
  if (type === 'boolean') return 'boolean';
  if (type === 'string') return 'string';
  if (type === 'number') return 'number';
  if (type === 'symbol') return 'symbol';
  if (type === 'function') {
    return isGeneratorFn(val) ? 'generatorfunction' : 'function';
  }
  if (isArray(val)) return 'array';
  if (isBuffer(val)) return 'buffer';
  if (isArguments(val)) return 'arguments';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  if (isRegexp(val)) return 'regexp';
  switch (ctorName(val)) {
    case 'Symbol':
      return 'symbol';
    case 'Promise':
      return 'promise';

    // Set, Map, WeakSet, WeakMap
    case 'WeakMap':
      return 'weakmap';
    case 'WeakSet':
      return 'weakset';
    case 'Map':
      return 'map';
    case 'Set':
      return 'set';

    // 8-bit typed arrays
    case 'Int8Array':
      return 'int8array';
    case 'Uint8Array':
      return 'uint8array';
    case 'Uint8ClampedArray':
      return 'uint8clampedarray';

    // 16-bit typed arrays
    case 'Int16Array':
      return 'int16array';
    case 'Uint16Array':
      return 'uint16array';

    // 32-bit typed arrays
    case 'Int32Array':
      return 'int32array';
    case 'Uint32Array':
      return 'uint32array';
    case 'Float32Array':
      return 'float32array';
    case 'Float64Array':
      return 'float64array';
  }
  if (isGeneratorObj(val)) {
    return 'generator';
  }

  // Non-plain objects
  type = toString.call(val);
  switch (type) {
    case '[object Object]':
      return 'object';
    // iterators
    case '[object Map Iterator]':
      return 'mapiterator';
    case '[object Set Iterator]':
      return 'setiterator';
    case '[object String Iterator]':
      return 'stringiterator';
    case '[object Array Iterator]':
      return 'arrayiterator';
  }

  // other
  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
};
function ctorName(val) {
  return typeof val.constructor === 'function' ? val.constructor.name : null;
}
function isArray(val) {
  if (Array.isArray) return Array.isArray(val);
  return val instanceof Array;
}
function isError(val) {
  return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
}
function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
}
function isRegexp(val) {
  if (val instanceof RegExp) return true;
  return typeof val.flags === 'string' && typeof val.ignoreCase === 'boolean' && typeof val.multiline === 'boolean' && typeof val.global === 'boolean';
}
function isGeneratorFn(name, val) {
  return ctorName(name) === 'GeneratorFunction';
}
function isGeneratorObj(val) {
  return typeof val.throw === 'function' && typeof val.return === 'function' && typeof val.next === 'function';
}
function isArguments(val) {
  try {
    if (typeof val.length === 'number' && typeof val.callee === 'function') {
      return true;
    }
  } catch (err) {
    if (err.message.indexOf('callee') !== -1) {
      return true;
    }
  }
  return false;
}

/**
 * If you need to support Safari 5-7 (8-10 yr-old browser),
 * take a look at https://github.com/feross/is-buffer
 */

function isBuffer(val) {
  if (val.constructor && typeof val.constructor.isBuffer === 'function') {
    return val.constructor.isBuffer(val);
  }
  return false;
}

/***/ }),

/***/ 92751:
/*!*********************************************!*\
  !*** ./node_modules/shallow-clone/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*!
 * shallow-clone <https://github.com/jonschlinkert/shallow-clone>
 *
 * Copyright (c) 2015-present, Jon Schlinkert.
 * Released under the MIT License.
 */



const valueOf = Symbol.prototype.valueOf;
const typeOf = __webpack_require__(/*! kind-of */ 46030);
function clone(val, deep) {
  switch (typeOf(val)) {
    case 'array':
      return val.slice();
    case 'object':
      return Object.assign({}, val);
    case 'date':
      return new val.constructor(Number(val));
    case 'map':
      return new Map(val);
    case 'set':
      return new Set(val);
    case 'buffer':
      return cloneBuffer(val);
    case 'symbol':
      return cloneSymbol(val);
    case 'arraybuffer':
      return cloneArrayBuffer(val);
    case 'float32array':
    case 'float64array':
    case 'int16array':
    case 'int32array':
    case 'int8array':
    case 'uint16array':
    case 'uint32array':
    case 'uint8clampedarray':
    case 'uint8array':
      return cloneTypedArray(val);
    case 'regexp':
      return cloneRegExp(val);
    case 'error':
      return Object.create(val);
    default:
      {
        return val;
      }
  }
}
function cloneRegExp(val) {
  const flags = val.flags !== void 0 ? val.flags : /\w+$/.exec(val) || void 0;
  const re = new val.constructor(val.source, flags);
  re.lastIndex = val.lastIndex;
  return re;
}
function cloneArrayBuffer(val) {
  const res = new val.constructor(val.byteLength);
  new Uint8Array(res).set(new Uint8Array(val));
  return res;
}
function cloneTypedArray(val, deep) {
  return new val.constructor(val.buffer, val.byteOffset, val.length);
}
function cloneBuffer(val) {
  const len = val.length;
  const buf = Buffer.allocUnsafe ? Buffer.allocUnsafe(len) : Buffer.from(len);
  val.copy(buf);
  return buf;
}
function cloneSymbol(val) {
  return valueOf ? Object(valueOf.call(val)) : {};
}

/**
 * Expose `clone`
 */

module.exports = clone;

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
//# sourceMappingURL=libs_sales_summary_data-access_src_index_ts-_dee31.js.map