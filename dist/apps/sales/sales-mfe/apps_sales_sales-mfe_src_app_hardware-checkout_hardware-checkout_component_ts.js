(self["webpackChunksales_mfe"] = self["webpackChunksales_mfe"] || []).push([["apps_sales_sales-mfe_src_app_hardware-checkout_hardware-checkout_component_ts"],{

/***/ 38978:
/*!*************************************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/hardware-checkout/classes/hardware-checkout-error.class.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HardwareCheckoutError: () => (/* binding */ HardwareCheckoutError)
/* harmony export */ });
class HardwareCheckoutError extends Error {
  constructor(errorObject) {
    super(errorObject.key);
    this.errorObject = errorObject;
  }
}

/***/ }),

/***/ 25177:
/*!***************************************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/hardware-checkout/constants/analytics/analytics.constants.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Errors: () => (/* binding */ Errors),
/* harmony export */   HardwareCheckoutAnalytics: () => (/* binding */ HardwareCheckoutAnalytics),
/* harmony export */   PrimaryCategories: () => (/* binding */ PrimaryCategories)
/* harmony export */ });
/* harmony import */ var udl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! udl */ 63975);
/* harmony import */ var udl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(udl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @telenet/ng-lib-datalayer */ 42782);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1__);


const HardwareCheckoutAnalytics = {
  PAGE_ID: 'sales',
  PAGE_NAME: 'sales',
  FLOW: 'MARKETING',
  SOURCE: 'MARKETING',
  INTENT: 'hardware'
};
const PrimaryCategories = {
  SALES: new udl__WEBPACK_IMPORTED_MODULE_0__.CategoryBuilder().withPrimaryCategory(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1__.EventCategoryEnum.PRIMARY_CATEGORY_SALES).build()
};
const Errors = {
  CONSOLE_MESSAGE: 'Analytics issue: '
};

/***/ }),

/***/ 66523:
/*!**************************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/hardware-checkout/constants/errors.constants.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbandonableMailCouldNOtBeSet: () => (/* binding */ AbandonableMailCouldNOtBeSet),
/* harmony export */   AemInputNotSet: () => (/* binding */ AemInputNotSet),
/* harmony export */   CheckoutDeliveryError: () => (/* binding */ CheckoutDeliveryError),
/* harmony export */   ContractSummaryUrlError: () => (/* binding */ ContractSummaryUrlError),
/* harmony export */   CorruptSdata: () => (/* binding */ CorruptSdata),
/* harmony export */   CouldNotParseAddress: () => (/* binding */ CouldNotParseAddress),
/* harmony export */   CouldNotReadContractSummaryRequired: () => (/* binding */ CouldNotReadContractSummaryRequired),
/* harmony export */   CouldNotStoreSalesOrderOnSummary: () => (/* binding */ CouldNotStoreSalesOrderOnSummary),
/* harmony export */   CouldNotUpdateInstallationLocation: () => (/* binding */ CouldNotUpdateInstallationLocation),
/* harmony export */   CreatePaymentTransactionFailed: () => (/* binding */ CreatePaymentTransactionFailed),
/* harmony export */   CustomerAccountCouldNotBeHandled: () => (/* binding */ CustomerAccountCouldNotBeHandled),
/* harmony export */   CustomerHasNoLocationAssociated: () => (/* binding */ CustomerHasNoLocationAssociated),
/* harmony export */   DiscountCouldNotBeAdded: () => (/* binding */ DiscountCouldNotBeAdded),
/* harmony export */   DiscountCouldNotBeRemoved: () => (/* binding */ DiscountCouldNotBeRemoved),
/* harmony export */   DiscountRuleNotFound: () => (/* binding */ DiscountRuleNotFound),
/* harmony export */   EligibilityError: () => (/* binding */ EligibilityError),
/* harmony export */   EventStrategyError: () => (/* binding */ EventStrategyError),
/* harmony export */   FeasibilityError: () => (/* binding */ FeasibilityError),
/* harmony export */   GenericError: () => (/* binding */ GenericError),
/* harmony export */   GetCustomerDataError: () => (/* binding */ GetCustomerDataError),
/* harmony export */   HardwareCreationFailed: () => (/* binding */ HardwareCreationFailed),
/* harmony export */   MandatoryFieldsAreMissing: () => (/* binding */ MandatoryFieldsAreMissing),
/* harmony export */   NcErrors: () => (/* binding */ NcErrors),
/* harmony export */   NoBillingAccount: () => (/* binding */ NoBillingAccount),
/* harmony export */   NoDeliveryOrderItemFound: () => (/* binding */ NoDeliveryOrderItemFound),
/* harmony export */   NoHardwareItemsFound: () => (/* binding */ NoHardwareItemsFound),
/* harmony export */   NoHomeDeliveryOrderItem: () => (/* binding */ NoHomeDeliveryOrderItem),
/* harmony export */   OcapiNotConfigured: () => (/* binding */ OcapiNotConfigured),
/* harmony export */   OmapiQueryNotConfigured: () => (/* binding */ OmapiQueryNotConfigured),
/* harmony export */   OperationProhibitedDueToIncompatibleStateOfOrderItem: () => (/* binding */ OperationProhibitedDueToIncompatibleStateOfOrderItem),
/* harmony export */   OrderItemCreationFailed: () => (/* binding */ OrderItemCreationFailed),
/* harmony export */   PersonalIdentityCouldNotBeHandled: () => (/* binding */ PersonalIdentityCouldNotBeHandled),
/* harmony export */   PreviousSalesOrderStillInProcessing: () => (/* binding */ PreviousSalesOrderStillInProcessing),
/* harmony export */   ProductNotActive: () => (/* binding */ ProductNotActive),
/* harmony export */   SalesOfferNotFound: () => (/* binding */ SalesOfferNotFound),
/* harmony export */   SalesOrderNotSet: () => (/* binding */ SalesOrderNotSet),
/* harmony export */   SubmitSalesOrderFailed: () => (/* binding */ SubmitSalesOrderFailed),
/* harmony export */   UpdateDeliveryCharsError: () => (/* binding */ UpdateDeliveryCharsError),
/* harmony export */   UpdateHomeDeliveryCharsError: () => (/* binding */ UpdateHomeDeliveryCharsError),
/* harmony export */   UserNotLoggedIn: () => (/* binding */ UserNotLoggedIn),
/* harmony export */   UserNotLoggedInError: () => (/* binding */ UserNotLoggedInError),
/* harmony export */   errorButtonPrefix: () => (/* binding */ errorButtonPrefix),
/* harmony export */   errorMessagePrefix: () => (/* binding */ errorMessagePrefix),
/* harmony export */   errorTitlePrefix: () => (/* binding */ errorTitlePrefix),
/* harmony export */   updateAwaitingPaymentFailed: () => (/* binding */ updateAwaitingPaymentFailed)
/* harmony export */ });
/* harmony import */ var _enums_error_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/error.enum */ 23735);

const errorTitlePrefix = 'ng.sales-checkout.title.error-';
const errorMessagePrefix = 'ng.sales-checkout.text.error-';
const errorButtonPrefix = 'ng.sales-checkout.button.error-';
const UserNotLoggedInError = 'UserNotLoggedIn';
const GenericError = {
  key: 'HC-0000',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: _enums_error_enum__WEBPACK_IMPORTED_MODULE_0__.ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL
};
const GetCustomerDataError = {
  key: 'HC-0001',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: _enums_error_enum__WEBPACK_IMPORTED_MODULE_0__.ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL
};
const EventStrategyError = {
  key: 'HC-0002',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: _enums_error_enum__WEBPACK_IMPORTED_MODULE_0__.ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL
};
const NoHardwareItemsFound = {
  key: 'HC-0003',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: _enums_error_enum__WEBPACK_IMPORTED_MODULE_0__.ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL
};
const OrderItemCreationFailed = {
  key: 'HC-0004',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: _enums_error_enum__WEBPACK_IMPORTED_MODULE_0__.ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL
};
const SalesOfferNotFound = {
  key: 'HC-0005',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: _enums_error_enum__WEBPACK_IMPORTED_MODULE_0__.ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL
};
const DiscountRuleNotFound = {
  key: 'HC-0006',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: _enums_error_enum__WEBPACK_IMPORTED_MODULE_0__.ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL
};
const DiscountCouldNotBeRemoved = {
  key: 'HC-0007',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: _enums_error_enum__WEBPACK_IMPORTED_MODULE_0__.ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL
};
const DiscountCouldNotBeAdded = {
  key: 'HC-0008',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: _enums_error_enum__WEBPACK_IMPORTED_MODULE_0__.ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL
};
const SalesOrderNotSet = {
  key: 'HC-0009',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: _enums_error_enum__WEBPACK_IMPORTED_MODULE_0__.ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL
};
const EligibilityError = {
  key: 'HC-0010',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: _enums_error_enum__WEBPACK_IMPORTED_MODULE_0__.ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL
};
const ContractSummaryUrlError = {
  key: 'HC-0011',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: _enums_error_enum__WEBPACK_IMPORTED_MODULE_0__.ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL
};
const NoBillingAccount = {
  key: 'HC-0012',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: _enums_error_enum__WEBPACK_IMPORTED_MODULE_0__.ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL
};
const NoDeliveryOrderItemFound = {
  key: 'HC-0014',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: _enums_error_enum__WEBPACK_IMPORTED_MODULE_0__.ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL
};
const SubmitSalesOrderFailed = {
  key: 'HC-0015',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: _enums_error_enum__WEBPACK_IMPORTED_MODULE_0__.ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL
};
const UpdateHomeDeliveryCharsError = {
  key: 'HC-0016',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: _enums_error_enum__WEBPACK_IMPORTED_MODULE_0__.ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL
};
const CheckoutDeliveryError = {
  key: 'HC-0017',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: _enums_error_enum__WEBPACK_IMPORTED_MODULE_0__.ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL
};
const CouldNotReadContractSummaryRequired = {
  key: 'HC-0018',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: _enums_error_enum__WEBPACK_IMPORTED_MODULE_0__.ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL
};
const CouldNotStoreSalesOrderOnSummary = {
  key: 'HC-0019',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: _enums_error_enum__WEBPACK_IMPORTED_MODULE_0__.ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL
};
const CreatePaymentTransactionFailed = {
  key: 'HC-0020',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: _enums_error_enum__WEBPACK_IMPORTED_MODULE_0__.ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL
};
const updateAwaitingPaymentFailed = {
  key: 'HC-0021',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: _enums_error_enum__WEBPACK_IMPORTED_MODULE_0__.ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL
};
const HardwareCreationFailed = {
  key: 'HC-0022',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: _enums_error_enum__WEBPACK_IMPORTED_MODULE_0__.ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL
};
const UserNotLoggedIn = {
  key: 'HC-0023',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: _enums_error_enum__WEBPACK_IMPORTED_MODULE_0__.ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL
};
const OcapiNotConfigured = {
  key: 'HC-0024',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: _enums_error_enum__WEBPACK_IMPORTED_MODULE_0__.ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL
};
const CustomerHasNoLocationAssociated = {
  key: 'HC-0025',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: _enums_error_enum__WEBPACK_IMPORTED_MODULE_0__.ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL
};
const NoHomeDeliveryOrderItem = {
  key: 'HC-0026',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: _enums_error_enum__WEBPACK_IMPORTED_MODULE_0__.ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL
};
const CorruptSdata = {
  key: 'HC-0026',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: _enums_error_enum__WEBPACK_IMPORTED_MODULE_0__.ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL
};
const AemInputNotSet = {
  key: 'HC-0027',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: _enums_error_enum__WEBPACK_IMPORTED_MODULE_0__.ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL
};
const CouldNotUpdateInstallationLocation = {
  key: 'HC-0028',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: _enums_error_enum__WEBPACK_IMPORTED_MODULE_0__.ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL
};
const AbandonableMailCouldNOtBeSet = {
  key: 'HC-0029',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: _enums_error_enum__WEBPACK_IMPORTED_MODULE_0__.ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL
};
const OmapiQueryNotConfigured = {
  key: 'HC-0030',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: _enums_error_enum__WEBPACK_IMPORTED_MODULE_0__.ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL
};
const PersonalIdentityCouldNotBeHandled = {
  key: 'HC-0031',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: _enums_error_enum__WEBPACK_IMPORTED_MODULE_0__.ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL
};
const CustomerAccountCouldNotBeHandled = {
  key: 'HC-0032',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: _enums_error_enum__WEBPACK_IMPORTED_MODULE_0__.ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL
};
const PreviousProcessingBaseErrorObject = {
  titleKey: 'generic',
  descriptionKey: 'previous-order-processing',
  buttonTextKey: 'generic',
  type: _enums_error_enum__WEBPACK_IMPORTED_MODULE_0__.ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL
};
const MandatoryFieldsAreMissing = {
  key: 'HC-0034',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: _enums_error_enum__WEBPACK_IMPORTED_MODULE_0__.ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL
};
const CouldNotParseAddress = {
  key: 'HC-0035',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: _enums_error_enum__WEBPACK_IMPORTED_MODULE_0__.ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL
};
const UpdateDeliveryCharsError = {
  key: 'HC-0036',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: _enums_error_enum__WEBPACK_IMPORTED_MODULE_0__.ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL
};
const FeasibilityError = {
  key: 'HC-0010',
  titleKey: 'generic',
  descriptionKey: 'generic',
  buttonTextKey: 'generic',
  type: _enums_error_enum__WEBPACK_IMPORTED_MODULE_0__.ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL
};
const ProductNotActive = {
  key: 'HC-0031',
  ...PreviousProcessingBaseErrorObject
};
const PreviousSalesOrderStillInProcessing = {
  key: 'HC-0032',
  ...PreviousProcessingBaseErrorObject
};
const OperationProhibitedDueToIncompatibleStateOfOrderItem = {
  key: 'HC-0033',
  ...PreviousProcessingBaseErrorObject
};
const NcErrors = [{
  key: 'OE-0100',
  error: ProductNotActive
}, {
  key: 'OE-0071',
  error: PreviousSalesOrderStillInProcessing
}, {
  key: 'OE-0069',
  error: OperationProhibitedDueToIncompatibleStateOfOrderItem
}];

/***/ }),

/***/ 61260:
/*!*************************************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/hardware-checkout/constants/hardware-checkout.constants.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HardwareCheckoutConstants: () => (/* binding */ HardwareCheckoutConstants)
/* harmony export */ });
class HardwareCheckoutConstants {
  static #_ = this.MESSAGE_GROUP = 'hardware-checkout';
  static #_2 = this.SDATA = 'sdata';
  static #_3 = this.SALES_ORDER_URL_ID = 'orderid';
  static #_4 = this.STATUS_URL = 'status';
  static #_5 = this.CONTRACT_SUMMARY_ENDPOINT = '/public/api/sales-service/v1/contractsummary/';
  static #_6 = this.ORDER_CORRECTION_IMAGE = 'order-correction.svg';
  static #_7 = this.ORDER_CORRECTION_MOBILE_IMAGE = 'order-correction-mobile.svg';
}

/***/ }),

/***/ 59911:
/*!*************************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/hardware-checkout/constants/omapi.constants.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   preAndBackOrderLabelTagKeys: () => (/* binding */ preAndBackOrderLabelTagKeys)
/* harmony export */ });
const preAndBackOrderLabelTagKeys = ['back_order_label', 'pre_order_label'];

/***/ }),

/***/ 48847:
/*!************************************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/hardware-checkout/constants/ordercorrections.constants.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerHasBadCreditClassification: () => (/* binding */ CustomerHasBadCreditClassification),
/* harmony export */   CustomerIncorrectStatus: () => (/* binding */ CustomerIncorrectStatus),
/* harmony export */   OrderCorrectionButtonPrefix: () => (/* binding */ OrderCorrectionButtonPrefix),
/* harmony export */   OrderCorrectionMessagePrefix: () => (/* binding */ OrderCorrectionMessagePrefix),
/* harmony export */   OrderCorrectionTitlePrefix: () => (/* binding */ OrderCorrectionTitlePrefix)
/* harmony export */ });
/* harmony import */ var _enums_error_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/error.enum */ 23735);

const OrderCorrectionTitlePrefix = 'ng.sales-checkout.title.order-correction-';
const OrderCorrectionMessagePrefix = 'ng.sales-checkout.text.order-correction-';
const OrderCorrectionButtonPrefix = 'ng.sales-checkout.button.order-correction-';
const CustomerIncorrectStatus = {
  key: 'OC-0001',
  titleKey: 'blocked-status-title',
  descriptionKey: 'blocked-status-description',
  buttonTextKey: 'blocked-status',
  type: _enums_error_enum__WEBPACK_IMPORTED_MODULE_0__.ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL
};
const CustomerHasBadCreditClassification = {
  key: 'OC-0002',
  titleKey: 'blocked-status-title',
  descriptionKey: 'blocked-status-description',
  buttonTextKey: 'blocked-status',
  type: _enums_error_enum__WEBPACK_IMPORTED_MODULE_0__.ErrorRedirectUrlEnum.CONTACT_US_REDIRECT_URL
};

/***/ }),

/***/ 95315:
/*!************************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/hardware-checkout/constants/step.constants.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HardwareCheckoutSteps: () => (/* binding */ HardwareCheckoutSteps)
/* harmony export */ });
/* harmony import */ var _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sales/shared/data-access */ 67179);
/* harmony import */ var _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sales_shared_data_access__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sales_delivery_feat_delivery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sales/delivery/feat-delivery */ 52497);
/* harmony import */ var _sales_delivery_feat_delivery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sales_delivery_feat_delivery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sales_summary_feat_summary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sales/summary/feat-summary */ 48933);
/* harmony import */ var _sales_summary_feat_summary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sales_summary_feat_summary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sales_etf_feat_etf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sales/etf/feat-etf */ 51024);
/* harmony import */ var _sales_etf_feat_etf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sales_etf_feat_etf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sales_thank_you_feat_thank_you__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sales/thank-you/feat-thank-you */ 20456);
/* harmony import */ var _sales_thank_you_feat_thank_you__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sales_thank_you_feat_thank_you__WEBPACK_IMPORTED_MODULE_4__);





const HardwareCheckoutSteps = [{
  key: 'etf',
  component: _sales_etf_feat_etf__WEBPACK_IMPORTED_MODULE_3__.EtfComponent
}, {
  key: 'delivery',
  component: _sales_delivery_feat_delivery__WEBPACK_IMPORTED_MODULE_1__.DeliveryComponent
}, {
  key: 'summary',
  nextButtonLabel: _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_0__.NextButtonLabelEnum.ORDER,
  component: _sales_summary_feat_summary__WEBPACK_IMPORTED_MODULE_2__.SummaryStepComponent
}, {
  key: 'confirmation',
  component: _sales_thank_you_feat_thank_you__WEBPACK_IMPORTED_MODULE_4__.ThankYouStepComponent
}];

/***/ }),

/***/ 14166:
/*!***************************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/hardware-checkout/enums/business-domains.enum.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BusinessDomainsEnum: () => (/* binding */ BusinessDomainsEnum)
/* harmony export */ });
var BusinessDomainsEnum;
(function (BusinessDomainsEnum) {
  BusinessDomainsEnum["HARDWARE_TLO"] = "Hardware TLO";
  BusinessDomainsEnum["DELIVERY_METHOD"] = "Delivery Method";
  BusinessDomainsEnum["HOME_DELIVERY"] = "Home Delivery";
  BusinessDomainsEnum["ETF"] = "Equipment ETF";
})(BusinessDomainsEnum || (BusinessDomainsEnum = {}));

/***/ }),

/***/ 23735:
/*!****************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/hardware-checkout/enums/error.enum.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorRedirectUrlEnum: () => (/* binding */ ErrorRedirectUrlEnum)
/* harmony export */ });
var ErrorRedirectUrlEnum;
(function (ErrorRedirectUrlEnum) {
  ErrorRedirectUrlEnum[ErrorRedirectUrlEnum["CUSTOMER_SERVICE_REDIRECT_URL"] = 0] = "CUSTOMER_SERVICE_REDIRECT_URL";
  ErrorRedirectUrlEnum[ErrorRedirectUrlEnum["CONTACT_US_REDIRECT_URL"] = 1] = "CONTACT_US_REDIRECT_URL";
})(ErrorRedirectUrlEnum || (ErrorRedirectUrlEnum = {}));

/***/ }),

/***/ 34702:
/*!****************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/hardware-checkout/enums/omapi.enum.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OmapiAttributeKeysEnum: () => (/* binding */ OmapiAttributeKeysEnum)
/* harmony export */ });
var OmapiAttributeKeysEnum;
(function (OmapiAttributeKeysEnum) {
  OmapiAttributeKeysEnum["MAIN_IMAGE"] = "main_image";
  OmapiAttributeKeysEnum["PICTURE_5"] = "picture_5";
})(OmapiAttributeKeysEnum || (OmapiAttributeKeysEnum = {}));

/***/ }),

/***/ 65890:
/*!****************************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/hardware-checkout/enums/order-item-action.enum.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderItemActionEnum: () => (/* binding */ OrderItemActionEnum)
/* harmony export */ });
var OrderItemActionEnum;
(function (OrderItemActionEnum) {
  OrderItemActionEnum["ADD"] = "Add";
  OrderItemActionEnum["NONE"] = "-";
})(OrderItemActionEnum || (OrderItemActionEnum = {}));

/***/ }),

/***/ 99384:
/*!********************************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/hardware-checkout/facades/hardware-checkout.facade.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HardwareCheckoutFacade: () => (/* binding */ HardwareCheckoutFacade)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sales_delivery_data_access__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sales/delivery/data-access */ 75967);
/* harmony import */ var _sales_delivery_data_access__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sales_delivery_data_access__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sales_summary_data_access__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sales/summary/data-access */ 94549);
/* harmony import */ var _sales_summary_data_access__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sales_summary_data_access__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_reverse_proxy_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/reverse-proxy.service */ 83086);
/* harmony import */ var _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sales/hardware-checkout/data-access */ 77644);
/* harmony import */ var _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _sales_etf_data_access__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sales/etf/data-access */ 8129);
/* harmony import */ var _sales_etf_data_access__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sales_etf_data_access__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_sales_order_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/sales-order.util */ 21199);
/* harmony import */ var _constants_errors_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants/errors.constants */ 66523);
/* harmony import */ var _utils_delivery_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/delivery.util */ 27663);
/* harmony import */ var _telenet_ng_lib_omapi_query__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @telenet/ng-lib-omapi-query */ 94761);
/* harmony import */ var _telenet_ng_lib_omapi_query__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_omapi_query__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _constants_hardware_checkout_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../constants/hardware-checkout.constants */ 61260);
/* harmony import */ var _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../classes/hardware-checkout-error.class */ 38978);
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @sales/events/data-access */ 80258);
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_sales_events_data_access__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _sales_thank_you_data_access__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @sales/thank-you/data-access */ 94732);
/* harmony import */ var _sales_thank_you_data_access__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_sales_thank_you_data_access__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _services_payment_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/payment.service */ 9225);
/* harmony import */ var _utils_omapi_util__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utils/omapi.util */ 3765);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @telenet/ng-lib-omapi */ 64512);
/* harmony import */ var _telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @telenet/ng-lib-config */ 81601);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var udl__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! udl */ 63975);
/* harmony import */ var udl__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(udl__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_22__);






























class HardwareCheckoutFacade {
  constructor(store, reverseProxyService, paymentService, omapiQueryProductService, omapiProductService, languageService, configService) {
    this.store = store;
    this.reverseProxyService = reverseProxyService;
    this.paymentService = paymentService;
    this.omapiQueryProductService = omapiQueryProductService;
    this.omapiProductService = omapiProductService;
    this.languageService = languageService;
    this.configService = configService;
    this.stepEvent = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.select)(_sales_events_data_access__WEBPACK_IMPORTED_MODULE_14__.selectEvent), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(val => val !== undefined));
    this.salesOffer$ = this.store.select(_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_6__.salesOffer);
    this.referrerUrl$ = this.store.select(_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_6__.referrerUrl);
    this.defaultBillingAccount$ = this.store.select(_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_6__.defaultBillingAccount);
    this.salesOrderFromState$ = this.store.select(_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_6__.salesOrderFromState);
    this.omapiProducts$ = this.store.select(_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_6__.omapiProducts);
    this.omapiQueryProducts$ = this.store.select(_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_6__.omapiQueryProducts);
    this.viewState$ = this.store.select(_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_6__.viewState);
    this.salesOrderState$ = this.store.select(_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_6__.salesOrderState);
    this.deliveryPersonalInfo$ = this.store.select(_sales_delivery_data_access__WEBPACK_IMPORTED_MODULE_3__.personalInfo);
    this.deliveryAddress$ = this.store.select(_sales_delivery_data_access__WEBPACK_IMPORTED_MODULE_3__.deliveryAddress);
    this.deliveryContactAddress$ = this.store.select(_sales_delivery_data_access__WEBPACK_IMPORTED_MODULE_3__.contactAddress);
    this.contractSummaryRequired$ = this.store.select(_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_6__.contractSummaryRequired);
    this.contractSummaryUrl$ = this.store.select(_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_6__.contractSummaryUrl);
    this.contractSummaryGenerationNotPossible$ = this.store.select(_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_6__.contractSummaryGenerationNotPossible);
    this.customerType$ = this.store.select(_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_6__.customerType);
    this.customerAccountDetails$ = this.store.select(_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_6__.customerAccountDetails);
    this.personalIdentity$ = this.store.select(_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_6__.personalIdentity);
    this.aemInput$ = this.store.select(_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_6__.aemInput);
    this.usedDiscountSlots$ = this.store.select(_sales_etf_data_access__WEBPACK_IMPORTED_MODULE_7__.usedSlots);
    this.ingenicoResultUtil$ = this.store.select(_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_6__.ingenicoResult);
    this.omapiQueryBaseUrl = this.configService.getConfig(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_20__.ConfigConstants.OMAPI_QUERY_URL);
    if (!this.omapiQueryBaseUrl) {
      throw new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_13__.HardwareCheckoutError(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_9__.OmapiQueryNotConfigured);
    }
  }
  getPid() {
    return this.reverseProxyService.getPid().pipe(_utils_sales_order_util__WEBPACK_IMPORTED_MODULE_8__.SalesOrderUtil.handleNcErrors());
  }
  getCustomerAccountDetails() {
    return this.reverseProxyService.getCustomerAccountDetails().pipe(_utils_sales_order_util__WEBPACK_IMPORTED_MODULE_8__.SalesOrderUtil.handleNcErrors());
  }
  createSalesOrder(locationId) {
    return this.reverseProxyService.createSalesOrder(locationId).pipe(_utils_sales_order_util__WEBPACK_IMPORTED_MODULE_8__.SalesOrderUtil.handleNcErrors());
  }
  retrieveSalesOrder(salesOrderId) {
    return this.reverseProxyService.getSalesOrder(salesOrderId).pipe(_utils_sales_order_util__WEBPACK_IMPORTED_MODULE_8__.SalesOrderUtil.handleNcErrors());
  }
  createHardwareTLO(salesOrderId, customerType) {
    return this.reverseProxyService.createHardwareTLO(salesOrderId, customerType).pipe(_utils_sales_order_util__WEBPACK_IMPORTED_MODULE_8__.SalesOrderUtil.handleNcErrors());
  }
  addOrderItem(salesOrderId, TLOOrderItemId, OrderItemCode) {
    return this.reverseProxyService.addOrderItem(salesOrderId, TLOOrderItemId, OrderItemCode).pipe(_utils_sales_order_util__WEBPACK_IMPORTED_MODULE_8__.SalesOrderUtil.handleNcErrors());
  }
  deleteOrderItem(salesOrderId, orderItemId) {
    return this.reverseProxyService.deleteOrderItem(salesOrderId, orderItemId).pipe(_utils_sales_order_util__WEBPACK_IMPORTED_MODULE_8__.SalesOrderUtil.handleNcErrors());
  }
  saveSalesOrder(salesOrder) {
    this.store.dispatch((0,_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_6__.saveSalesOrder)(salesOrder));
  }
  setThankYouRedirectUrl(url) {
    this.store.dispatch((0,_sales_thank_you_data_access__WEBPACK_IMPORTED_MODULE_15__.setRedirectUrl)({
      redirectUrl: url
    }));
  }
  setTermsAndConditionsUrl(url) {
    this.store.dispatch((0,_sales_summary_data_access__WEBPACK_IMPORTED_MODULE_4__.setTermsAndConditionsUrl)({
      termsAndConditionsUrl: url
    }));
  }
  updateDeliveryChars(salesOrderId, orderItemId, deliveryInfoChange) {
    return this.reverseProxyService.updateDeliveryChars(salesOrderId, orderItemId, deliveryInfoChange).pipe(_utils_sales_order_util__WEBPACK_IMPORTED_MODULE_8__.SalesOrderUtil.handleNcErrors());
  }
  addDiscount(salesOrderId, ruleElementId) {
    return this.reverseProxyService.addDiscount(salesOrderId, ruleElementId).pipe(_utils_sales_order_util__WEBPACK_IMPORTED_MODULE_8__.SalesOrderUtil.handleNcErrors());
  }
  getDeliveryOptions(salesOrderId) {
    return this.reverseProxyService.getDeliveryOptions(salesOrderId).pipe(_utils_sales_order_util__WEBPACK_IMPORTED_MODULE_8__.SalesOrderUtil.handleNcErrors());
  }
  calculateDelivery(salesOrderId, deliveryMethods) {
    return this.reverseProxyService.calculateDelivery(salesOrderId, deliveryMethods).pipe(_utils_sales_order_util__WEBPACK_IMPORTED_MODULE_8__.SalesOrderUtil.handleNcErrors());
  }
  checkoutDelivery(salesOrderId) {
    return this.reverseProxyService.checkoutDelivery(salesOrderId).pipe(_utils_sales_order_util__WEBPACK_IMPORTED_MODULE_8__.SalesOrderUtil.handleNcErrors());
  }
  getAddressById(addressUnitId) {
    return this.reverseProxyService.getAddressById(addressUnitId).pipe(_utils_sales_order_util__WEBPACK_IMPORTED_MODULE_8__.SalesOrderUtil.handleNcErrors());
  }
  getCustomerDiscounts() {
    return this.reverseProxyService.getCustomerDiscounts().pipe(_utils_sales_order_util__WEBPACK_IMPORTED_MODULE_8__.SalesOrderUtil.handleNcErrors());
  }
  getBillingAccounts() {
    return this.reverseProxyService.getBillingAccounts().pipe(_utils_sales_order_util__WEBPACK_IMPORTED_MODULE_8__.SalesOrderUtil.handleNcErrors());
  }
  checkFeasibility(salesOrderId) {
    return this.reverseProxyService.checkFeasibility(salesOrderId).pipe(_utils_sales_order_util__WEBPACK_IMPORTED_MODULE_8__.SalesOrderUtil.handleNcErrors());
  }
  checkEligibility(salesOrderId) {
    return this.reverseProxyService.checkEligibility(salesOrderId).pipe(_utils_sales_order_util__WEBPACK_IMPORTED_MODULE_8__.SalesOrderUtil.handleNcErrors());
  }
  checkContractSummary(salesOrderId) {
    return this.reverseProxyService.checkContractSummary(salesOrderId).pipe(_utils_sales_order_util__WEBPACK_IMPORTED_MODULE_8__.SalesOrderUtil.handleNcErrors());
  }
  generateContractSummary(salesOrderId) {
    return this.reverseProxyService.generateContractSummary(salesOrderId).pipe(_utils_sales_order_util__WEBPACK_IMPORTED_MODULE_8__.SalesOrderUtil.handleNcErrors());
  }
  setUrlRequestParameters(urlRequestParameters) {
    this.store.dispatch((0,_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_6__.setUrlRequestParameters)({
      urlRequestParameters: urlRequestParameters
    }));
  }
  setOmapiQueryProducts(rawOmapiQueryProduct) {
    this.store.dispatch((0,_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_6__.setOmapiQueryProducts)({
      omapiProducts: rawOmapiQueryProduct.products
    }));
  }
  setOmapiProducts(omapiProducts) {
    this.store.dispatch((0,_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_6__.setOmapiProducts)({
      omapiProducts: omapiProducts
    }));
  }
  setContractSummaryRequired(isRequired) {
    this.store.dispatch((0,_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_6__.setContractSummaryRequired)({
      contractSummaryRequired: isRequired
    }));
    this.store.dispatch((0,_sales_summary_data_access__WEBPACK_IMPORTED_MODULE_4__.setSummaryContractSummaryRequired)({
      contractSummaryRequired: isRequired
    }));
  }
  setContractSummaryUrl(url) {
    this.store.dispatch((0,_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_6__.setContractSummaryUrl)({
      contractSummaryUrl: url
    }));
  }
  setContractSummaryGenerationNotPossible() {
    this.store.dispatch((0,_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_6__.setContractSummaryGenerationNotPossible)());
  }
  submitSalesOrder(salesOrderId) {
    return this.reverseProxyService.submitSalesOrder(salesOrderId).pipe(_utils_sales_order_util__WEBPACK_IMPORTED_MODULE_8__.SalesOrderUtil.handleNcErrors());
  }
  setSalesorderAsAbandonable(salesOrderId, customerId, basketUrl) {
    return this.reverseProxyService.setSalesorderAsAbandonable(salesOrderId, customerId, basketUrl).pipe(_utils_sales_order_util__WEBPACK_IMPORTED_MODULE_8__.SalesOrderUtil.handleNcErrors());
  }
  setPersonalIdentity(personalIdentity) {
    this.store.dispatch((0,_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_6__.setPersonalIdentity)({
      personalIdentity: personalIdentity
    }));
  }
  setPersonalInfo(deliveryPersonalInfo, summaryPersonalInfo) {
    this.store.dispatch((0,_sales_delivery_data_access__WEBPACK_IMPORTED_MODULE_3__.setDeliveryPersonalInfo)({
      personalInfo: deliveryPersonalInfo
    }));
    this.store.dispatch((0,_sales_summary_data_access__WEBPACK_IMPORTED_MODULE_4__.setSummaryPersonalInfo)({
      personalInfo: summaryPersonalInfo
    }));
    this.store.dispatch((0,_sales_summary_data_access__WEBPACK_IMPORTED_MODULE_4__.setSummaryDeliveryPersonalInfo)({
      personalInfo: deliveryPersonalInfo
    }));
  }
  setDeliveryPersonalInfo(deliveryPersonalInfo) {
    this.store.dispatch((0,_sales_delivery_data_access__WEBPACK_IMPORTED_MODULE_3__.setDeliveryPersonalInfo)({
      personalInfo: deliveryPersonalInfo
    }));
  }
  setSummaryDeliveryPersonalInfo(summaryPersonalInfo) {
    this.store.dispatch((0,_sales_summary_data_access__WEBPACK_IMPORTED_MODULE_4__.setSummaryDeliveryPersonalInfo)({
      personalInfo: summaryPersonalInfo
    }));
  }
  setAddress(contactAddress) {
    this.store.dispatch((0,_sales_delivery_data_access__WEBPACK_IMPORTED_MODULE_3__.setAvailableAddresses)({
      availableAddresses: [contactAddress]
    }));
    this.store.dispatch((0,_sales_delivery_data_access__WEBPACK_IMPORTED_MODULE_3__.setDeliveryAddress)({
      deliveryAddress: contactAddress
    }));
  }
  setBillingAccounts(billingAccounts) {
    this.store.dispatch((0,_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_6__.setBillingAccounts)({
      billingAccounts: billingAccounts
    }));
  }
  setDeliveryAddress(contactAddress) {
    this.store.dispatch((0,_sales_delivery_data_access__WEBPACK_IMPORTED_MODULE_3__.setDeliveryAddress)({
      deliveryAddress: contactAddress
    }));
  }
  setDeliveryViewModel(salesOffer) {
    const deliveryItems = _utils_delivery_util__WEBPACK_IMPORTED_MODULE_10__.DeliveryUtil.createDeliveryItems(salesOffer.offers);
    if (deliveryItems) {
      this.store.dispatch((0,_sales_delivery_data_access__WEBPACK_IMPORTED_MODULE_3__.setDeliveryItems)({
        deliveryItems: deliveryItems
      }));
    }
  }
  setDeliveryNotifications(salesOrder, products) {
    const bigItemDeliveryNeeded = _utils_sales_order_util__WEBPACK_IMPORTED_MODULE_8__.SalesOrderUtil.isBigItemDeliveryOrder(salesOrder, products);
    const hasMultipleItems = _utils_sales_order_util__WEBPACK_IMPORTED_MODULE_8__.SalesOrderUtil.hasMultipleItems(salesOrder);
    this.store.dispatch((0,_sales_delivery_data_access__WEBPACK_IMPORTED_MODULE_3__.resetNotifications)());
    if (bigItemDeliveryNeeded) {
      this.store.dispatch((0,_sales_delivery_data_access__WEBPACK_IMPORTED_MODULE_3__.addDeliveryNotification)({
        notification: _sales_delivery_data_access__WEBPACK_IMPORTED_MODULE_3__.bigItemDeliveryNotification
      }));
    }
    if (hasMultipleItems) {
      this.store.dispatch((0,_sales_delivery_data_access__WEBPACK_IMPORTED_MODULE_3__.addDeliveryNotification)({
        notification: _sales_delivery_data_access__WEBPACK_IMPORTED_MODULE_3__.multipleItemDelivery
      }));
    }
  }
  setSummaryNotifications(salesOrder, products) {
    if (products) {
      const isBigItemDelivery = _utils_sales_order_util__WEBPACK_IMPORTED_MODULE_8__.SalesOrderUtil.isBigItemDeliveryOrder(salesOrder, products);
      if (isBigItemDelivery) {
        this.addSummaryDeliveryNotification(_sales_delivery_data_access__WEBPACK_IMPORTED_MODULE_3__.bigItemDeliveryNotification);
      }
      const preOrderNotification = _utils_omapi_util__WEBPACK_IMPORTED_MODULE_17__.OmapiUtil.getPreOrderNotification(products, this.languageService.getLanguage());
      if (preOrderNotification) {
        this.addSummaryDeliveryNotification({
          weight: 2,
          message: preOrderNotification,
          type: 'notification'
        });
      }
      const backOrderNotification = _utils_omapi_util__WEBPACK_IMPORTED_MODULE_17__.OmapiUtil.getBackOrderNotification(products, this.languageService.getLanguage());
      if (backOrderNotification) {
        this.addSummaryDeliveryNotification({
          weight: 3,
          message: backOrderNotification,
          type: 'notification'
        });
      }
    }
  }
  setSummaryViewModel(salesOrder, orderItems, omapiProducts, omapiQueryProducts, isSoho) {
    const summaryOrderItems = _utils_sales_order_util__WEBPACK_IMPORTED_MODULE_8__.SalesOrderUtil.createSummaryOrderItems(orderItems, salesOrder.discountItems, omapiQueryProducts, omapiProducts, isSoho, this.languageService.getLanguage().toLocaleLowerCase());
    this.store.dispatch((0,_sales_summary_data_access__WEBPACK_IMPORTED_MODULE_4__.setSummaryOrderItems)({
      orderItems: summaryOrderItems
    }));
    const summaryPrices = _utils_sales_order_util__WEBPACK_IMPORTED_MODULE_8__.SalesOrderUtil.getSummaryPrices(salesOrder, isSoho);
    this.store.dispatch((0,_sales_summary_data_access__WEBPACK_IMPORTED_MODULE_4__.setSummaryPrices)({
      prices: summaryPrices
    }));
    const depreciationItems = _utils_sales_order_util__WEBPACK_IMPORTED_MODULE_8__.SalesOrderUtil.getDepreciationItems(salesOrder, isSoho);
    this.store.dispatch((0,_sales_summary_data_access__WEBPACK_IMPORTED_MODULE_4__.setSummaryDepreciationItems)({
      depreciationItems: depreciationItems
    }));
  }
  setSummaryDeliveryInfo(personalInfo, contactAddress) {
    const deliveryInfo = {
      personalInfo: {
        firstname: personalInfo.firstname,
        lastname: personalInfo.lastname,
        email: personalInfo.email,
        mobile: personalInfo.mobile
      },
      address: {
        street: contactAddress.street ? contactAddress.street : '',
        box: contactAddress.box ? contactAddress.box : '',
        country: contactAddress.country ? contactAddress.country : '',
        houseNumber: contactAddress.houseNumber ? contactAddress.houseNumber : '',
        postalCode: contactAddress.postalCode ? contactAddress.postalCode : '',
        municipality: contactAddress.municipality ? contactAddress.municipality : '',
        subHouseNumber: contactAddress.subHouseNumber ? contactAddress.subHouseNumber : ''
      }
    };
    this.store.dispatch((0,_sales_summary_data_access__WEBPACK_IMPORTED_MODULE_4__.setSummaryDeliveryInfo)({
      deliveryInfo: deliveryInfo
    }));
  }
  setSummaryDeliveryAddress(contactAddress) {
    const deliveryInfoAddress = {
      street: contactAddress.street ? contactAddress.street : '',
      box: contactAddress.box ? contactAddress.box : '',
      country: contactAddress.country ? contactAddress.country : '',
      houseNumber: contactAddress.houseNumber ? contactAddress.houseNumber : '',
      postalCode: contactAddress.postalCode ? contactAddress.postalCode : '',
      municipality: contactAddress.municipality ? contactAddress.municipality : '',
      subHouseNumber: contactAddress.subHouseNumber ? contactAddress.subHouseNumber : ''
    };
    this.store.dispatch((0,_sales_summary_data_access__WEBPACK_IMPORTED_MODULE_4__.setSummaryDeliveryAddress)({
      deliveryAddress: deliveryInfoAddress
    }));
  }
  setSummaryInvoiceInfo(address) {
    this.store.dispatch((0,_sales_summary_data_access__WEBPACK_IMPORTED_MODULE_4__.setSummaryInvoiceInfo)({
      billingAddress: address
    }));
  }
  setViewState(viewState) {
    this.store.dispatch((0,_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_6__.setViewState)({
      viewState: viewState
    }));
  }
  setBackButtonVisibility(backButtonVisibility) {
    this.store.dispatch((0,_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_6__.setBackButtonVisibility)({
      backButtonVisibility: backButtonVisibility
    }));
  }
  setNavigationState(navigationState) {
    this.store.dispatch((0,_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_6__.setNavigationState)({
      navigationState: navigationState
    }));
  }
  setEtfOrderItems(orderItems, rules) {
    const orderItemsWithDiscount = orderItems.map(orderItem => {
      const discountRule = _utils_sales_order_util__WEBPACK_IMPORTED_MODULE_8__.SalesOrderUtil.getOrderItemDiscountRuleByTarget(orderItem, rules);
      if (!discountRule) {
        throw new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_13__.HardwareCheckoutError(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_9__.DiscountRuleNotFound);
      }
      return {
        name: orderItem.name,
        id: orderItem.id,
        rule: discountRule,
        showEtfOptions: false,
        hasMadeASelection: false,
        prices: orderItem.prices
      };
    });
    this.store.dispatch((0,_sales_etf_data_access__WEBPACK_IMPORTED_MODULE_7__.setOrderItemsWithDiscount)({
      orderItemsWithDiscount: orderItemsWithDiscount
    }));
  }
  setEtfUsedSlots(discountSlots) {
    this.store.dispatch((0,_sales_etf_data_access__WEBPACK_IMPORTED_MODULE_7__.setUsedSlots)({
      usedSlots: discountSlots.usedSlots
    }));
  }
  setSalesOrderState(salesOrderState) {
    this.store.dispatch((0,_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_6__.setSalesOrderState)({
      salesOrderState: salesOrderState
    }));
  }
  getOmapiQueryProducts(productIds) {
    const endpoint = `${this.omapiQueryBaseUrl}/hc-products/v1/products?itemcodes=${productIds.join(',')}&flow=esales`;
    return this.omapiQueryProductService.getRawQueryProductByEndpoint(_constants_hardware_checkout_constants__WEBPACK_IMPORTED_MODULE_12__.HardwareCheckoutConstants.MESSAGE_GROUP, endpoint);
  }
  getOmapiProduct(productId) {
    return this.omapiProductService.getProductById('hardware-checkout', productId);
  }
  updateOrderItemCharsHomeDelivery(salesOrderId, customerAccountDetails) {
    return this.deliveryPersonalInfo$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(deliveryPersonalInfo => {
      if (!deliveryPersonalInfo || !deliveryPersonalInfo.email) {
        throw new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_13__.HardwareCheckoutError(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_9__.UpdateHomeDeliveryCharsError);
      }
      return this.reverseProxyService.updateSalesOrderDeliveryEmail(salesOrderId, customerAccountDetails.id, deliveryPersonalInfo.email).pipe(_utils_sales_order_util__WEBPACK_IMPORTED_MODULE_8__.SalesOrderUtil.handleNcErrors());
    }));
  }
  setCustomerType(customerType) {
    this.store.dispatch((0,_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_6__.setCustomerType)({
      customerType: customerType
    }));
  }
  setCustomerAccountDetails(customerAccountDetails) {
    this.store.dispatch((0,_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_6__.setCustomerAccountDetails)({
      customerAccountDetails: customerAccountDetails
    }));
  }
  getPaymentRequestObject(request) {
    return this.paymentService.getPaymentObject(request);
  }
  setAemInputs(aemInputs) {
    this.store.dispatch((0,_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_6__.setAemInput)({
      aemInput: aemInputs
    }));
  }
  setReferrerUrl(referrerUrl) {
    this.store.dispatch((0,_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_6__.setReferrerUrl)({
      referrerUrl: referrerUrl
    }));
  }
  setStartStepLoadTime() {
    this.store.dispatch((0,_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_6__.setStartStepLoadTime)());
  }
  setIngenicoFormUrl(ingenicoFormUrl) {
    this.store.dispatch((0,_sales_summary_data_access__WEBPACK_IMPORTED_MODULE_4__.setIngenicoFormUrl)({
      ingenicoFormUrl: ingenicoFormUrl
    }));
  }
  addSummaryDeliveryNotification(summaryNotification) {
    this.store.dispatch((0,_sales_summary_data_access__WEBPACK_IMPORTED_MODULE_4__.addSummaryDeliveryNotification)({
      notification: summaryNotification
    }));
  }
  addSummaryGeneralNotification(summaryNotification) {
    this.store.dispatch((0,_sales_summary_data_access__WEBPACK_IMPORTED_MODULE_4__.addSummaryGeneralNotification)({
      notification: summaryNotification
    }));
  }
  setAnalyticsAttributesFromSessionStorage() {
    const analyticsAttributes = JSON.parse(window.sessionStorage.getItem(_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_6__.SessionStorageConstants.CHECKOUT_ANALYTICS_ATTRIBUTES) || '{}');
    this.store.dispatch((0,_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_6__.setAnalyticsAttributes)({
      analyticsAttributes: analyticsAttributes
    }));
  }
  setAnalyticsCartFromSessionStorage() {
    const cart = new udl__WEBPACK_IMPORTED_MODULE_21__.Cart(JSON.parse(window.sessionStorage.getItem(_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_6__.SessionStorageConstants.CHECKOUT_ANALYTICS_CART) || '{}'));
    this.store.dispatch((0,_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_6__.setCart)({
      cart: cart
    }));
  }
  setOrderNumber(orderNumber) {
    this.store.dispatch((0,_sales_thank_you_data_access__WEBPACK_IMPORTED_MODULE_15__.setOrderNumber)({
      orderNumber: orderNumber
    }));
  }
  static #_ = this.ɵfac = function HardwareCheckoutFacade_Factory(t) {
    return new (t || HardwareCheckoutFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_services_reverse_proxy_service__WEBPACK_IMPORTED_MODULE_5__.ReverseProxyService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_services_payment_service__WEBPACK_IMPORTED_MODULE_16__.PaymentService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_telenet_ng_lib_omapi_query__WEBPACK_IMPORTED_MODULE_11__.OmapiQueryProductService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_19__.OmapiProductService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_18__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_20__.ConfigService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjectable"]({
    token: HardwareCheckoutFacade,
    factory: HardwareCheckoutFacade.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 54474:
/*!******************************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/hardware-checkout/factory/event-strategy.factory.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventStrategyFactory: () => (/* binding */ EventStrategyFactory)
/* harmony export */ });
/* harmony import */ var _strategy_no_action_strategy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../strategy/no-action.strategy */ 78910);
/* harmony import */ var _sales_delivery_feat_delivery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sales/delivery/feat-delivery */ 52497);
/* harmony import */ var _sales_delivery_feat_delivery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sales_delivery_feat_delivery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _strategy_delivery_delivery_step_finished_strategy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../strategy/delivery/delivery-step-finished.strategy */ 448);
/* harmony import */ var _strategy_delivery_delivery_step_loaded_strategy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../strategy/delivery/delivery-step-loaded.strategy */ 9694);
/* harmony import */ var _strategy_delivery_delivery_address_changed_strategy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../strategy/delivery/delivery-address-changed.strategy */ 94773);
/* harmony import */ var _facades_hardware_checkout_facade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../facades/hardware-checkout.facade */ 99384);
/* harmony import */ var _strategy_summary_summary_step_loaded_strategy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../strategy/summary/summary-step-loaded.strategy */ 31398);
/* harmony import */ var _strategy_summary_summary_step_finished_strategy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../strategy/summary/summary-step-finished.strategy */ 26902);
/* harmony import */ var _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sales/hardware-checkout/data-access */ 77644);
/* harmony import */ var _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _strategy_waiting_for_state_update_strategy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../strategy/waiting-for-state-update.strategy */ 87550);
/* harmony import */ var _sales_etf_feat_etf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @sales/etf/feat-etf */ 51024);
/* harmony import */ var _sales_etf_feat_etf__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_sales_etf_feat_etf__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _strategy_etf_etf_step_loaded_strategy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../strategy/etf/etf-step-loaded.strategy */ 98380);
/* harmony import */ var _strategy_etf_etf_step_finished_strategy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../strategy/etf/etf-step-finished.strategy */ 46157);
/* harmony import */ var _sales_etf_data_access__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @sales/etf/data-access */ 8129);
/* harmony import */ var _sales_etf_data_access__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_sales_etf_data_access__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _strategy_etf_etf_step_reloaded_strategy__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../strategy/etf/etf-step-reloaded.strategy */ 62868);
/* harmony import */ var _strategy_etf_etf_step_finished_no_changes_strategy__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../strategy/etf/etf-step-finished-no-changes.strategy */ 10794);
/* harmony import */ var _sales_summary_feat_summary__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @sales/summary/feat-summary */ 48933);
/* harmony import */ var _sales_summary_feat_summary__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_sales_summary_feat_summary__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _strategy_summary_summary_show_contract_summary_strategy__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../strategy/summary/summary-show-contract-summary.strategy */ 36848);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @telenet/ng-lib-config */ 81601);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _strategy_navigation_strategy__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../strategy/navigation.strategy */ 16013);
/* harmony import */ var _sales_summary_data_access__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @sales/summary/data-access */ 94549);
/* harmony import */ var _sales_summary_data_access__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_sales_summary_data_access__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _strategy_error_strategy__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../strategy/error.strategy */ 34407);
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @sales/events/data-access */ 80258);
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_sales_events_data_access__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _sales_thank_you_feat_thank_you__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @sales/thank-you/feat-thank-you */ 20456);
/* harmony import */ var _sales_thank_you_feat_thank_you__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_sales_thank_you_feat_thank_you__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _strategy_thank_you_thank_you_step_loaded_strategy__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../strategy/thank-you/thank-you-step-loaded.strategy */ 44487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_26__);

































class EventStrategyFactory {
  constructor(hardwareCheckoutFacade, etfFacade, summaryFacade, eventFacade, urlService, mediaQueryService, configService) {
    this.hardwareCheckoutFacade = hardwareCheckoutFacade;
    this.etfFacade = etfFacade;
    this.summaryFacade = summaryFacade;
    this.eventFacade = eventFacade;
    this.urlService = urlService;
    this.mediaQueryService = mediaQueryService;
    this.configService = configService;
  }
  getStrategy(event, salesOrderState) {
    const strategies = [{
      key: _sales_events_data_access__WEBPACK_IMPORTED_MODULE_23__.EventTypeEnum.ERROR,
      getStrategy: () => {
        return new _strategy_error_strategy__WEBPACK_IMPORTED_MODULE_22__.ErrorStrategy(event.body);
      }
    }, {
      key: _sales_events_data_access__WEBPACK_IMPORTED_MODULE_23__.EventTypeEnum.STEP_LOADED,
      getStrategy: () => {
        return this.getStepLoadedStrategy(event.body, salesOrderState);
      }
    }, {
      key: _sales_events_data_access__WEBPACK_IMPORTED_MODULE_23__.EventTypeEnum.STEP_FINISHED,
      getStrategy: () => {
        if (event.body) {
          return this.getStepFinishedStrategy(event.body, salesOrderState);
        }
        return new _strategy_no_action_strategy__WEBPACK_IMPORTED_MODULE_0__.NoActionStrategy();
      }
    }, {
      key: _sales_events_data_access__WEBPACK_IMPORTED_MODULE_23__.EventTypeEnum.SHOW_NAVIGATION,
      getStrategy: () => {
        return new _strategy_navigation_strategy__WEBPACK_IMPORTED_MODULE_20__.NavigationStrategy(this.hardwareCheckoutFacade, event);
      }
    }, {
      key: _sales_events_data_access__WEBPACK_IMPORTED_MODULE_23__.EventTypeEnum.HIDE_NAVIGATION,
      getStrategy: () => {
        return new _strategy_navigation_strategy__WEBPACK_IMPORTED_MODULE_20__.NavigationStrategy(this.hardwareCheckoutFacade, event);
      }
    }, {
      key: _sales_delivery_feat_delivery__WEBPACK_IMPORTED_MODULE_1__.DeliveryEventTypeEnum.CHANGE_ADDRESS,
      getStrategy: () => {
        if (salesOrderState >= _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_8__.SalesOrderStateEnum.DELIVERY_CALCULATED && event.body) {
          return new _strategy_delivery_delivery_address_changed_strategy__WEBPACK_IMPORTED_MODULE_4__.DeliveryAddressChangedStrategy(this.hardwareCheckoutFacade, this.eventFacade, event.body);
        }
        return new _strategy_no_action_strategy__WEBPACK_IMPORTED_MODULE_0__.NoActionStrategy(true);
      }
    }, {
      key: _sales_summary_feat_summary__WEBPACK_IMPORTED_MODULE_16__.SummaryEventTypeEnum.SHOW_CONTRACT_SUMMARY,
      getStrategy: () => {
        if (salesOrderState >= _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_8__.SalesOrderStateEnum.CHECKOUT_DELIVERY_FINISHED) {
          return new _strategy_summary_summary_show_contract_summary_strategy__WEBPACK_IMPORTED_MODULE_17__.SummaryShowContractSummaryStrategy(this.urlService, this.configService, this.hardwareCheckoutFacade);
        }
        return new _strategy_no_action_strategy__WEBPACK_IMPORTED_MODULE_0__.NoActionStrategy(true);
      }
    }];
    return this.findStrategy(strategies, event);
  }
  findStrategy(strategies, event) {
    const foundStrategy = strategies.find(strategy => strategy.key === event.eventType);
    return foundStrategy ? foundStrategy.getStrategy() : new _strategy_no_action_strategy__WEBPACK_IMPORTED_MODULE_0__.NoActionStrategy();
  }
  getStepLoadedStrategy(stepEventBody, salesOrderState) {
    switch (stepEventBody.stepKey) {
      case _sales_etf_feat_etf__WEBPACK_IMPORTED_MODULE_10__.etfEventStepKey:
        if (salesOrderState <= _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_8__.SalesOrderStateEnum.INITIALISING) {
          return new _strategy_etf_etf_step_loaded_strategy__WEBPACK_IMPORTED_MODULE_11__.EtfStepLoadedStrategy(this.hardwareCheckoutFacade, this.eventFacade);
        } else if (salesOrderState >= _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_8__.SalesOrderStateEnum.DELIVERY_CALCULATED) {
          return new _strategy_etf_etf_step_reloaded_strategy__WEBPACK_IMPORTED_MODULE_14__.EtfStepReloadedStrategy(this.hardwareCheckoutFacade, this.etfFacade);
        }
        return new _strategy_no_action_strategy__WEBPACK_IMPORTED_MODULE_0__.NoActionStrategy();
      case _sales_delivery_feat_delivery__WEBPACK_IMPORTED_MODULE_1__.deliveryEventStepKey:
        if (salesOrderState <= _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_8__.SalesOrderStateEnum.INITIALISING) {
          return new _strategy_delivery_delivery_step_loaded_strategy__WEBPACK_IMPORTED_MODULE_3__.DeliveryStepLoadedStrategy(this.hardwareCheckoutFacade, this.eventFacade);
        }
        return new _strategy_no_action_strategy__WEBPACK_IMPORTED_MODULE_0__.NoActionStrategy();
      case _sales_summary_feat_summary__WEBPACK_IMPORTED_MODULE_16__.summaryEventStepKey:
        if (salesOrderState < _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_8__.SalesOrderStateEnum.CHECKOUT_DELIVERY_FINISHED) {
          return new _strategy_summary_summary_step_loaded_strategy__WEBPACK_IMPORTED_MODULE_6__.SummaryStepLoadedStrategy(this.hardwareCheckoutFacade);
        }
        return new _strategy_no_action_strategy__WEBPACK_IMPORTED_MODULE_0__.NoActionStrategy();
      case _sales_thank_you_feat_thank_you__WEBPACK_IMPORTED_MODULE_24__.thankYouEventStepKey:
        return new _strategy_thank_you_thank_you_step_loaded_strategy__WEBPACK_IMPORTED_MODULE_25__.ThankYouStepLoadedStrategy(this.eventFacade);
      default:
        return new _strategy_no_action_strategy__WEBPACK_IMPORTED_MODULE_0__.NoActionStrategy();
    }
  }
  getStepFinishedStrategy(stepEventBody, salesOrderState) {
    switch (stepEventBody.stepKey) {
      case _sales_etf_feat_etf__WEBPACK_IMPORTED_MODULE_10__.etfEventStepKey:
        if (salesOrderState < _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_8__.SalesOrderStateEnum.DELIVERY_CALCULATED) {
          if (stepEventBody.existingDiscountsToRemove.length > 0 && stepEventBody.targetOrderItemIdsToDiscount.length > 0) {
            return new _strategy_etf_etf_step_finished_strategy__WEBPACK_IMPORTED_MODULE_12__.EtfStepFinishedStrategy(this.hardwareCheckoutFacade, this.etfFacade, stepEventBody);
          } else {
            return new _strategy_etf_etf_step_finished_no_changes_strategy__WEBPACK_IMPORTED_MODULE_15__.EtfStepFinishedNoChangesStrategy(this.hardwareCheckoutFacade);
          }
        }
        return new _strategy_no_action_strategy__WEBPACK_IMPORTED_MODULE_0__.NoActionStrategy();
      case _sales_delivery_feat_delivery__WEBPACK_IMPORTED_MODULE_1__.deliveryEventStepKey:
        if (salesOrderState >= _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_8__.SalesOrderStateEnum.DELIVERY_CALCULATED) {
          return new _strategy_delivery_delivery_step_finished_strategy__WEBPACK_IMPORTED_MODULE_2__.DeliveryStepFinishedStrategy(this.hardwareCheckoutFacade);
        }
        return new _strategy_waiting_for_state_update_strategy__WEBPACK_IMPORTED_MODULE_9__.WaitingForStateUpdateStrategy();
      case _sales_summary_feat_summary__WEBPACK_IMPORTED_MODULE_16__.summaryEventStepKey:
        if (salesOrderState >= _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_8__.SalesOrderStateEnum.CHECKOUT_DELIVERY_FINISHED) {
          return new _strategy_summary_summary_step_finished_strategy__WEBPACK_IMPORTED_MODULE_7__.SummaryStepFinishedStrategy(this.hardwareCheckoutFacade, this.summaryFacade, this.urlService, this.mediaQueryService, this.eventFacade);
        }
        return new _strategy_waiting_for_state_update_strategy__WEBPACK_IMPORTED_MODULE_9__.WaitingForStateUpdateStrategy();
      default:
        return new _strategy_no_action_strategy__WEBPACK_IMPORTED_MODULE_0__.NoActionStrategy();
    }
  }
  static #_ = this.ɵfac = function EventStrategyFactory_Factory(t) {
    return new (t || EventStrategyFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵinject"](_facades_hardware_checkout_facade__WEBPACK_IMPORTED_MODULE_5__.HardwareCheckoutFacade), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵinject"](_sales_etf_data_access__WEBPACK_IMPORTED_MODULE_13__.EtfFacade), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵinject"](_sales_summary_data_access__WEBPACK_IMPORTED_MODULE_21__.SummaryFacade), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵinject"](_sales_events_data_access__WEBPACK_IMPORTED_MODULE_23__.EventFacade), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_18__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_18__.MediaQueryService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵinject"](_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_19__.ConfigService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineInjectable"]({
    token: EventStrategyFactory,
    factory: EventStrategyFactory.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 73466:
/*!***************************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/hardware-checkout/hardware-checkout.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HardwareCheckoutComponent: () => (/* binding */ HardwareCheckoutComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngneat/until-destroy */ 52813);
/* harmony import */ var _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sales/shared/data-access */ 67179);
/* harmony import */ var _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sales_shared_data_access__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_step_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/step.constants */ 95315);
/* harmony import */ var _constants_hardware_checkout_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/hardware-checkout.constants */ 61260);
/* harmony import */ var _sales_shared_feature_sales_stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sales/shared/feature-sales-stepper */ 68342);
/* harmony import */ var _sales_shared_feature_sales_stepper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sales_shared_feature_sales_stepper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../libs/shared/page/src/lib/page/loader/loader.component */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sales/events/data-access */ 80258);
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sales_events_data_access__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _facades_hardware_checkout_facade__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./facades/hardware-checkout.facade */ 99384);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_hardware_checkout_helper_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/hardware-checkout-helper.service */ 50556);
/* harmony import */ var _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @sales/hardware-checkout/data-access */ 77644);
/* harmony import */ var _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _sales_error_feat_error__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @sales/error/feat-error */ 97389);
/* harmony import */ var _sales_error_feat_error__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_sales_error_feat_error__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _sales_delivery_data_access__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @sales/delivery/data-access */ 75967);
/* harmony import */ var _sales_delivery_data_access__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_sales_delivery_data_access__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _sales_summary_data_access__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @sales/summary/data-access */ 94549);
/* harmony import */ var _sales_summary_data_access__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_sales_summary_data_access__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _sales_etf_data_access__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @sales/etf/data-access */ 8129);
/* harmony import */ var _sales_etf_data_access__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_sales_etf_data_access__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _services_data_layer_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/data-layer.service */ 29868);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _sales_thank_you_data_access__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @sales/thank-you/data-access */ 94732);
/* harmony import */ var _sales_thank_you_data_access__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_sales_thank_you_data_access__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_18__);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



























function HardwareCheckoutComponent_ng_container_1_tg_sales_error_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "tg-sales-error", 3);
  }
  if (rf & 2) {
    const viewState_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("error", viewState_r1.error);
  }
}
function HardwareCheckoutComponent_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "tg-sales-stepper", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nextButtonClicked", function HardwareCheckoutComponent_ng_container_1_ng_container_2_Template_tg_sales_stepper_nextButtonClicked_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r5.nextButtonClickedEvent());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const viewState_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().ngIf;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("showNavigation", viewState_r1.showNavigation)("showBackButton", viewState_r1.showBackButton)("showStepProgressBar", true)("steps", ctx_r3.componentSteps);
  }
}
function HardwareCheckoutComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, HardwareCheckoutComponent_ng_container_1_tg_sales_error_1_Template, 1, 1, "tg-sales-error", 2)(2, HardwareCheckoutComponent_ng_container_1_ng_container_2_Template, 2, 4, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const viewState_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", viewState_r1.key === ctx_r0.viewStateEnum.ERROR);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r0.isLoaded && viewState_r1.key !== ctx_r0.viewStateEnum.ERROR);
  }
}
let HardwareCheckoutComponent = class HardwareCheckoutComponent {
  constructor(hardwareCheckoutFacade, eventFacade, loaderService, hardwareCheckoutHelperService, dataLayerService) {
    this.hardwareCheckoutFacade = hardwareCheckoutFacade;
    this.eventFacade = eventFacade;
    this.loaderService = loaderService;
    this.hardwareCheckoutHelperService = hardwareCheckoutHelperService;
    this.dataLayerService = dataLayerService;
    this.enableLoader = true;
    this.viewStateEnum = _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_10__.ViewStateEnum;
    this.isLoaded = false;
    this.componentSteps = _constants_step_constants__WEBPACK_IMPORTED_MODULE_1__.HardwareCheckoutSteps;
    this.messageGroup = _constants_hardware_checkout_constants__WEBPACK_IMPORTED_MODULE_2__.HardwareCheckoutConstants.MESSAGE_GROUP;
    this.viewState$ = this.hardwareCheckoutFacade.viewState$;
  }
  ngOnInit() {
    this.hardwareCheckoutFacade.setThankYouRedirectUrl(this.thankyouRedirectUrl);
    this.hardwareCheckoutFacade.setTermsAndConditionsUrl(this.termsAndConditionsUrl);
    this.hardwareCheckoutFacade.setIngenicoFormUrl(this.ingenicoFormUrl);
    this.loaderService.start();
    this.dataLayerService.setPageProperties();
    this.hardwareCheckoutFacade.setStartStepLoadTime();
    this.hardwareCheckoutFacade.stepEvent.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_19__.untilDestroyed)(this)).subscribe({
      next: event => {
        if (event) {
          this.dataLayerService.handleAnalyticsEvent(event);
        }
      },
      error: err => console.error('Analytics issue ', err)
    });
    (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this.hardwareCheckoutFacade.stepEvent, this.hardwareCheckoutFacade.salesOrderState$]).pipe(this.filterOutAnalyticsEvents(), this.hardwareCheckoutHelperService.logDebug(), this.hardwareCheckoutHelperService.executeEventStrategy(), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_19__.untilDestroyed)(this)).subscribe({
      next: event => {
        this.loaderService.stop();
        this.hardwareCheckoutHelperService.goToNextStepIfNeeded(event);
      },
      error: error => {
        this.handleError(error);
      }
    });
    this.setAemInputs();
    this.initialiseFlow();
  }
  nextButtonClickedEvent() {
    this.eventFacade.triggerAnalyticsClickEvent({
      name: 'continue button clicked'
    });
  }
  initialiseFlow() {
    try {
      this.hardwareCheckoutHelperService.initialiseFlow(this.componentSteps).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_19__.untilDestroyed)(this)).subscribe({
        next: () => {
          this.isLoaded = true;
          this.loaderService.stop();
        },
        error: error => {
          this.handleError(error);
        }
      });
    } catch (error) {
      this.handleError(error);
    }
  }
  handleError(error) {
    this.loaderService.stop();
    this.hardwareCheckoutHelperService.setError(error, this.customerServiceRedirectUrlInput, this.contactUsRedirectUrlInput);
  }
  setAemInputs() {
    const aemInputs = {
      customerServiceRedirectUrlInput: this.customerServiceRedirectUrlInput,
      contactUsRedirectUrlInput: this.contactUsRedirectUrlInput,
      thankyouRedirectUrl: this.thankyouRedirectUrl
    };
    this.hardwareCheckoutFacade.setAemInputs(aemInputs);
  }
  filterOutAnalyticsEvents() {
    // @ts-expect-error need to declare salesOrderState here
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.filter)(([stepEvent, salesOrderState]) => {
      return !stepEvent || stepEvent.eventType !== _sales_events_data_access__WEBPACK_IMPORTED_MODULE_6__.EventTypeEnum.ANALYTICS;
    });
  }
  static #_ = this.ɵfac = function HardwareCheckoutComponent_Factory(t) {
    return new (t || HardwareCheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_facades_hardware_checkout_facade__WEBPACK_IMPORTED_MODULE_7__.HardwareCheckoutFacade), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_sales_events_data_access__WEBPACK_IMPORTED_MODULE_6__.EventFacade), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_hardware_checkout_helper_service__WEBPACK_IMPORTED_MODULE_9__.HardwareCheckoutHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_data_layer_service__WEBPACK_IMPORTED_MODULE_15__.HardwareCheckoutDataLayerService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({
    type: HardwareCheckoutComponent,
    selectors: [["tg-sales-hardware-checkout"]],
    inputs: {
      enableMask: "enableMask",
      enableLoader: "enableLoader",
      pageType: "pageType",
      customerServiceRedirectUrlInput: "customerServiceRedirectUrlInput",
      contactUsRedirectUrlInput: "contactUsRedirectUrlInput",
      thankyouRedirectUrl: "thankyouRedirectUrl",
      termsAndConditionsUrl: "termsAndConditionsUrl",
      ingenicoFormUrl: "ingenicoFormUrl"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 7,
    consts: [["id", "page-loader", 3, "enableLoader", "enableMask", "pageType", "startByDefault"], [4, "ngIf"], [3, "error", 4, "ngIf"], [3, "error"], [3, "showNavigation", "showBackButton", "showStepProgressBar", "steps", "nextButtonClicked"]],
    template: function HardwareCheckoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "app-loader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, HardwareCheckoutComponent_ng_container_1_Template, 3, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("enableLoader", ctx.enableLoader)("enableMask", ctx.enableMask)("pageType", ctx.pageType)("startByDefault", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 5, ctx.viewState$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_0__.StepsNgrxModule, _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_10__.HardwareCheckoutNgrxModule, _sales_events_data_access__WEBPACK_IMPORTED_MODULE_6__.EventsNgrxModule, _sales_delivery_data_access__WEBPACK_IMPORTED_MODULE_12__.DeliveryNgrxModule, _sales_summary_data_access__WEBPACK_IMPORTED_MODULE_13__.SummaryNgrxModule, _sales_etf_data_access__WEBPACK_IMPORTED_MODULE_14__.EtfNgrxModule, _sales_thank_you_data_access__WEBPACK_IMPORTED_MODULE_17__.ThankYouNgrxModule, _sales_shared_feature_sales_stepper__WEBPACK_IMPORTED_MODULE_3__.SalesStepperComponent, _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__.LoaderModule, _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__.LoaderComponent, _sales_error_feat_error__WEBPACK_IMPORTED_MODULE_11__.ErrorComponent],
    encapsulation: 2
  });
};
HardwareCheckoutComponent = __decorate([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_19__.UntilDestroy)(), __metadata("design:paramtypes", [_facades_hardware_checkout_facade__WEBPACK_IMPORTED_MODULE_7__.HardwareCheckoutFacade, _sales_events_data_access__WEBPACK_IMPORTED_MODULE_6__.EventFacade, _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__.LoaderService, _services_hardware_checkout_helper_service__WEBPACK_IMPORTED_MODULE_9__.HardwareCheckoutHelperService, _services_data_layer_service__WEBPACK_IMPORTED_MODULE_15__.HardwareCheckoutDataLayerService])], HardwareCheckoutComponent);


/***/ }),

/***/ 29868:
/*!***************************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/hardware-checkout/services/data-layer.service.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HardwareCheckoutDataLayerService: () => (/* binding */ HardwareCheckoutDataLayerService)
/* harmony export */ });
/* harmony import */ var udl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! udl */ 63975);
/* harmony import */ var udl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(udl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @telenet/ng-lib-datalayer */ 42782);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_analytics_analytics_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/analytics/analytics.constants */ 25177);
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sales/events/data-access */ 80258);
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sales_events_data_access__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_analytics_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/analytics.util */ 97589);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sales/hardware-checkout/data-access */ 77644);
/* harmony import */ var _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _sales_summary_feat_summary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @sales/summary/feat-summary */ 48933);
/* harmony import */ var _sales_summary_feat_summary__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_sales_summary_feat_summary__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _sales_thank_you_feat_thank_you__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @sales/thank-you/feat-thank-you */ 20456);
/* harmony import */ var _sales_thank_you_feat_thank_you__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_sales_thank_you_feat_thank_you__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_11__);














class HardwareCheckoutDataLayerService {
  constructor(dataLayerService, store) {
    this.dataLayerService = dataLayerService;
    this.store = store;
  }
  setPageProperties() {
    const pageInfo = new udl__WEBPACK_IMPORTED_MODULE_0__.PageInfo();
    pageInfo.setPageID(_constants_analytics_analytics_constants__WEBPACK_IMPORTED_MODULE_2__.HardwareCheckoutAnalytics.PAGE_ID);
    pageInfo.setPageName(_constants_analytics_analytics_constants__WEBPACK_IMPORTED_MODULE_2__.HardwareCheckoutAnalytics.PAGE_NAME);
    const pageJSON = {
      pageInfo: pageInfo
    };
    const page = new udl__WEBPACK_IMPORTED_MODULE_0__.Page(pageJSON);
    this.dataLayerService.setPage(page);
  }
  handleAnalyticsEvent(analyticsEvent) {
    switch (analyticsEvent.eventType) {
      case _sales_events_data_access__WEBPACK_IMPORTED_MODULE_3__.EventTypeEnum.STEP_LOADED:
        {
          const stepKey = this.getStepKey(analyticsEvent);
          this.addStepViewEvent({
            stepId: stepKey.toUpperCase()
          });
          if (stepKey === _sales_summary_feat_summary__WEBPACK_IMPORTED_MODULE_9__.summaryEventStepKey) {
            this.setCart();
          }
          this.addStepLoadTimeEvent(stepKey);
          break;
        }
      case _sales_events_data_access__WEBPACK_IMPORTED_MODULE_3__.EventTypeEnum.ANALYTICS:
        this.addEvent(analyticsEvent);
        break;
    }
  }
  addEvent(analyticsEvent) {
    if (analyticsEvent.body?.type === _sales_events_data_access__WEBPACK_IMPORTED_MODULE_3__.AnalyticsTypeEnum.TRANSACTION) {
      this.transactionEvent(analyticsEvent);
    } else {
      this.defaultEvent(analyticsEvent);
    }
  }
  stepLoadTimeEvent(attributes) {
    this.selectAnalyticsData().subscribe({
      next: ([analyticsAttributes, cart]) => {
        this.dataLayerService.addStepLoadTimeEvent(_utils_analytics_util__WEBPACK_IMPORTED_MODULE_5__.AnalyticsUtil.enrichWithCommonAttributes(analyticsAttributes, attributes, cart)).catch(err => this.logAnalyticsError(err)).then();
      },
      error: error => console.warn(_constants_analytics_analytics_constants__WEBPACK_IMPORTED_MODULE_2__.Errors.CONSOLE_MESSAGE, error)
    });
  }
  logAnalyticsError(err) {
    console.warn(_constants_analytics_analytics_constants__WEBPACK_IMPORTED_MODULE_2__.Errors.CONSOLE_MESSAGE, 'ANALYTICS EVENT NOT SEND: ', err);
  }
  defaultEvent(analyticsEvent) {
    const eventBody = analyticsEvent.body;
    const eventInfo = this.dataLayerService.createEventInfo(eventBody?.name || 'TBD', eventBody?.type || 'TBD');
    eventInfo.setEventStatus('success');
    this.selectAnalyticsData().subscribe({
      next: ([analyticsAttributes, cart]) => {
        this.dataLayerService.addEvent(eventInfo, _utils_analytics_util__WEBPACK_IMPORTED_MODULE_5__.AnalyticsUtil.enrichWithCommonAttributes(analyticsAttributes, eventBody?.attributes, cart), _constants_analytics_analytics_constants__WEBPACK_IMPORTED_MODULE_2__.PrimaryCategories.SALES).catch(err => this.logAnalyticsError(err)).then();
      },
      error: error => console.warn(_constants_analytics_analytics_constants__WEBPACK_IMPORTED_MODULE_2__.Errors.CONSOLE_MESSAGE, error)
    });
  }
  transactionEvent(analyticsEvent) {
    this.selectAnalyticsData().subscribe({
      next: ([analyticsAttributes, cart]) => {
        if (cart) {
          const transactionBuilder = new _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1__.DataLayerTransactionBuilder().withDataLayerAttributes(_utils_analytics_util__WEBPACK_IMPORTED_MODULE_5__.AnalyticsUtil.enrichWithCommonAttributes(analyticsAttributes, analyticsEvent.body?.attributes, new udl__WEBPACK_IMPORTED_MODULE_0__.Cart())).withTransactionID(cart.getCartID()).withItems(cart.getItems()).withPrice(cart.getPrice());
          this.dataLayerService.setTransaction(transactionBuilder.build()).catch(err => this.logAnalyticsError(err)).then();
        } else {
          this.logAnalyticsError(new Error('No transaction analytics due to missing CART object'));
        }
      },
      error: error => this.logAnalyticsError(error)
    });
  }
  addStepViewEvent(attributes) {
    this.selectAnalyticsData().subscribe({
      next: ([analyticsAttributes, cart]) => {
        const enrichedAttributes = Object.assign(attributes, analyticsAttributes);
        this.recalculateStepKey(enrichedAttributes);
        if (cart !== undefined) {
          enrichedAttributes.cart = cart;
        }
        this.dataLayerService.addStepViewEvent(enrichedAttributes).then();
      },
      error: error => this.logAnalyticsError(error)
    });
  }
  recalculateStepKey(attributes) {
    if (attributes.stepId?.toUpperCase() === _sales_thank_you_feat_thank_you__WEBPACK_IMPORTED_MODULE_10__.thankYouEventStepKey.toUpperCase()) {
      attributes.stepId = attributes.stepId + '-hardware';
    }
  }
  setCart() {
    this.selectAnalyticsData().subscribe({
      next: ([analyticsAttributes, cart]) => {
        if (cart !== undefined) {
          const enrichedAttributes = _utils_analytics_util__WEBPACK_IMPORTED_MODULE_5__.AnalyticsUtil.enrichWithCommonAttributes(analyticsAttributes, undefined, cart);
          const copyCart = new udl__WEBPACK_IMPORTED_MODULE_0__.CartBuilder().withCartId(cart.getCartID()).withDirectCallLabel(cart.getDirectCallLabel()).build();
          copyCart.setAttributes(enrichedAttributes);
          copyCart.setItems(cart.getItems());
          this.dataLayerService.setCart(copyCart).then();
        }
      },
      error: error => this.logAnalyticsError(error)
    });
  }
  addStepLoadTimeEvent(stepName) {
    this.store.select(_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_7__.stepAnalytics).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(stepAnalytics => {
      if (stepAnalytics.startLoadTime) {
        this.stepLoadTimeEvent({
          itemName: ((new Date().getTime() - stepAnalytics.startLoadTime) / 1000).toFixed(2).toString()
        });
        this.store.dispatch((0,_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_7__.resetStepLoadTime)());
      } else {
        this.logAnalyticsError(new Error('step-load-time could not be triggered because of missing start time for step ' + stepName));
      }
    })).subscribe();
  }
  selectAnalyticsData() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.forkJoin)([this.store.select(_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_7__.analyticsAttributes).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1)), this.store.select(_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_7__.cart).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1))]);
  }
  getStepKey(stepEvent) {
    return stepEvent.body?.stepKey || 'TBD';
  }
  static #_ = this.ɵfac = function HardwareCheckoutDataLayerService_Factory(t) {
    return new (t || HardwareCheckoutDataLayerService)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1__.DataLayerService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({
    token: HardwareCheckoutDataLayerService,
    factory: HardwareCheckoutDataLayerService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 50556:
/*!*****************************************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/hardware-checkout/services/hardware-checkout-helper.service.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HardwareCheckoutHelperService: () => (/* binding */ HardwareCheckoutHelperService)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_hardware_checkout_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/hardware-checkout.constants */ 61260);
/* harmony import */ var _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sales/hardware-checkout/data-access */ 77644);
/* harmony import */ var _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _facades_hardware_checkout_facade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../facades/hardware-checkout.facade */ 99384);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants_errors_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants/errors.constants */ 66523);
/* harmony import */ var _enums_error_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../enums/error.enum */ 23735);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @telenet/ng-lib-shared */ 77157);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_address_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/address.util */ 13234);
/* harmony import */ var _strategy_waiting_for_state_update_strategy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../strategy/waiting-for-state-update.strategy */ 87550);
/* harmony import */ var _strategy_no_action_strategy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../strategy/no-action.strategy */ 78910);
/* harmony import */ var _factory_event_strategy_factory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../factory/event-strategy.factory */ 54474);
/* harmony import */ var _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @sales/shared/data-access */ 67179);
/* harmony import */ var _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_sales_shared_data_access__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils_strategy_util__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/strategy.util */ 68539);
/* harmony import */ var _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../classes/hardware-checkout-error.class */ 38978);
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @sales/events/data-access */ 80258);
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_sales_events_data_access__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @telenet/ng-lib-ocapi */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _constants_ordercorrections_constants__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../constants/ordercorrections.constants */ 48847);
/* harmony import */ var _constants_analytics_analytics_constants__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../constants/analytics/analytics.constants */ 25177);
/* harmony import */ var _sales_thank_you_feat_thank_you__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @sales/thank-you/feat-thank-you */ 20456);
/* harmony import */ var _sales_thank_you_feat_thank_you__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_sales_thank_you_feat_thank_you__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _sales_summary_feat_summary__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @sales/summary/feat-summary */ 48933);
/* harmony import */ var _sales_summary_feat_summary__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_sales_summary_feat_summary__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _utils_sdata_sales_offer_util__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../utils/sdata-sales-offer.util */ 90605);
/* harmony import */ var _utils_personal_info_util__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../utils/personal-info.util */ 74600);
/* harmony import */ var _utils_customer_category_util__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../utils/customer-category.util */ 25822);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_25__);
































class HardwareCheckoutHelperService {
  constructor(jsonUrlService, urlService, stepFacade, eventFacade, hardwareCheckoutFacade, eventStrategyFactory, loaderService, loginService) {
    this.jsonUrlService = jsonUrlService;
    this.urlService = urlService;
    this.stepFacade = stepFacade;
    this.eventFacade = eventFacade;
    this.hardwareCheckoutFacade = hardwareCheckoutFacade;
    this.eventStrategyFactory = eventStrategyFactory;
    this.loaderService = loaderService;
    this.loginService = loginService;
    this.log = _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_8__.LogFactory.createLogger(HardwareCheckoutHelperService);
  }
  getUrlRequestParameters() {
    return this.getSalesOrderRequestFromSdata().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(salesOffer => ({
      salesOffer: salesOffer,
      flow: _constants_analytics_analytics_constants__WEBPACK_IMPORTED_MODULE_19__.HardwareCheckoutAnalytics.FLOW,
      source: _constants_analytics_analytics_constants__WEBPACK_IMPORTED_MODULE_19__.HardwareCheckoutAnalytics.SOURCE,
      intent: _constants_analytics_analytics_constants__WEBPACK_IMPORTED_MODULE_19__.HardwareCheckoutAnalytics.INTENT
    })));
  }
  handleDeliveryData() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.forkJoin)({
      customerAccountDetails: this.handleCustomerAccountData(),
      personalIdentity: this.handlePersonalIdentityData()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(({
      customerAccountDetails,
      personalIdentity
    }) => {
      const contractHolderContactDetails = _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_2__.CustomerAccountUtil.getContractHolder(customerAccountDetails);
      const contractHolderEmail = _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_2__.CustomerAccountUtil.getContactEmail(contractHolderContactDetails);
      const deliveryInfo = _utils_personal_info_util__WEBPACK_IMPORTED_MODULE_23__.PersonalInfoUtil.getPersonalInfoFromIdentityAndCustomerAccount(personalIdentity, customerAccountDetails);
      this.hardwareCheckoutFacade.setPersonalInfo(deliveryInfo, {
        epithet: contractHolderContactDetails.title,
        firstname: contractHolderContactDetails.firstNameOfficial,
        lastname: contractHolderContactDetails.lastName,
        email: contractHolderEmail
      });
    }));
  }
  handlePersonalIdentityData() {
    return this.hardwareCheckoutFacade.getPid().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(personalIdentity => {
      this.hardwareCheckoutFacade.setPersonalIdentity(personalIdentity);
    }));
  }
  handleCustomerAccountData() {
    return this.hardwareCheckoutFacade.getCustomerAccountDetails().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(customerAccountDetails => {
      this.hardwareCheckoutFacade.setCustomerAccountDetails(customerAccountDetails);
      this.handleCustomerType(customerAccountDetails);
      this.handleCustomerStatus(customerAccountDetails);
      this.handleCustomerBadPayer(customerAccountDetails);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mergeMap)(contactDetails => {
      let addressUnitId = '';
      const customerCategory = _utils_customer_category_util__WEBPACK_IMPORTED_MODULE_24__.CustomerCategoryUtil.getCustomerCategory(contactDetails.customerCategory.name);
      if (customerCategory === _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_2__.ContactDetailsCustomerCategoryEnum.RESIDENTIAL) {
        addressUnitId = contactDetails.customerAddress?.id;
      } else if (customerCategory === _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_2__.ContactDetailsCustomerCategoryEnum.SOHO) {
        addressUnitId = contactDetails.legalAddress?.id;
      }
      if (addressUnitId) {
        return this.hardwareCheckoutFacade.getAddressById(addressUnitId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(address => {
          this.setCustomerAddress(address);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(() => contactDetails) // Ensure the main observable still returns CustomerAccountDetails
        );
      } else {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(contactDetails); // Return contactDetails if there's no address to fetch
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      if (error instanceof _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_15__.HardwareCheckoutError) {
        throw error;
      } else {
        throw new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_15__.HardwareCheckoutError(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_6__.GetCustomerDataError);
      }
    }));
  }
  setCustomerAddress(address) {
    this.hardwareCheckoutFacade.setAddress(_utils_address_util__WEBPACK_IMPORTED_MODULE_9__.AddressUtil.convertNcAddressToDeliveryAddress(address));
  }
  executeEventStrategy() {
    return (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mergeMap)(([stepEvent, salesOrderState]) => {
      if (stepEvent) {
        const eventStrategy = this.eventStrategyFactory.getStrategy(stepEvent, salesOrderState);
        if (eventStrategy) {
          if (eventStrategy.showLoader()) {
            this.loaderService.start();
          }
          if (!(eventStrategy instanceof _strategy_waiting_for_state_update_strategy__WEBPACK_IMPORTED_MODULE_10__.WaitingForStateUpdateStrategy) && !(eventStrategy instanceof _strategy_no_action_strategy__WEBPACK_IMPORTED_MODULE_11__.NoActionStrategy)) {
            return eventStrategy.execute().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(() => {
              return stepEvent;
            }));
          } else return rxjs__WEBPACK_IMPORTED_MODULE_4__.EMPTY;
        }
      }
      throw _constants_errors_constants__WEBPACK_IMPORTED_MODULE_6__.EventStrategyError;
    });
  }
  goToNextStepIfNeeded(event) {
    if (event && event.eventType === _sales_events_data_access__WEBPACK_IMPORTED_MODULE_16__.EventTypeEnum.STEP_FINISHED) {
      if (event.body?.stepKey !== _sales_summary_feat_summary__WEBPACK_IMPORTED_MODULE_21__.summaryEventStepKey) {
        this.eventFacade.triggerAnalyticsClickEvent({
          name: 'navigated to next step'
        });
      }
      this.hardwareCheckoutFacade.setStartStepLoadTime();
      this.loaderService.stop();
      this.stepFacade.goToNextStep();
    }
  }
  logDebug() {
    return (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)({
      next: ([stepEvent, salesOrderState]) => {
        this.log.logDebug('Received event: ', {
          stepEvent: stepEvent,
          salesOrderState: salesOrderState,
          strategy: this.eventStrategyFactory.getStrategy(stepEvent, salesOrderState)
        });
      }
    });
  }
  initialiseFlow(componentSteps) {
    this.hardwareCheckoutFacade.setReferrerUrl(this.getReferrerUrl());
    const salesOrderIdFromUrl = this.getSalesOrderIdFromUrl();
    if (salesOrderIdFromUrl === '') {
      return this.initialiseFlowFromBasket(componentSteps);
    } else {
      return this.initialiseFlowComingBackFromIngenico(componentSteps, salesOrderIdFromUrl);
    }
  }
  setOrderCorrection(errorObject, url) {
    const errorViewModel = {
      key: errorObject.key,
      titleKey: _constants_ordercorrections_constants__WEBPACK_IMPORTED_MODULE_18__.OrderCorrectionTitlePrefix.concat(errorObject.titleKey),
      buttonTextKey: _constants_ordercorrections_constants__WEBPACK_IMPORTED_MODULE_18__.OrderCorrectionButtonPrefix.concat(errorObject.buttonTextKey),
      descriptionKey: _constants_ordercorrections_constants__WEBPACK_IMPORTED_MODULE_18__.OrderCorrectionMessagePrefix.concat(errorObject.descriptionKey),
      image: _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0__.AssetService.getImagePath('HARDWARE_CHECKOUT', _constants_hardware_checkout_constants__WEBPACK_IMPORTED_MODULE_1__.HardwareCheckoutConstants.ORDER_CORRECTION_IMAGE),
      mobileImage: _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0__.AssetService.getImagePath('HARDWARE_CHECKOUT', _constants_hardware_checkout_constants__WEBPACK_IMPORTED_MODULE_1__.HardwareCheckoutConstants.ORDER_CORRECTION_MOBILE_IMAGE),
      redirectUrl: url
    };
    this.hardwareCheckoutFacade.setViewState({
      key: _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_2__.ViewStateEnum.ERROR,
      showNavigation: false,
      showBackButton: true,
      error: errorViewModel
    });
  }
  setError(error, customerServiceRedirectUrl, contactUsRedirectUrl) {
    console.error(error.message, error);
    if (window['dtrum'] && window['dtrum'].reportError) {
      window['dtrum'].reportError(error);
    } else {
      console.warn('Dynatrace dtrum API not available');
    }
    let hardwareCheckoutError;
    if (error instanceof _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_15__.HardwareCheckoutError) {
      hardwareCheckoutError = error;
    } else {
      hardwareCheckoutError = new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_15__.HardwareCheckoutError(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_6__.GenericError);
    }
    const errorViewModel = {
      key: hardwareCheckoutError.errorObject.key,
      titleKey: _constants_errors_constants__WEBPACK_IMPORTED_MODULE_6__.errorTitlePrefix.concat(hardwareCheckoutError.errorObject.titleKey),
      descriptionKey: _constants_errors_constants__WEBPACK_IMPORTED_MODULE_6__.errorMessagePrefix.concat(hardwareCheckoutError.errorObject.descriptionKey),
      buttonTextKey: _constants_errors_constants__WEBPACK_IMPORTED_MODULE_6__.errorButtonPrefix.concat(hardwareCheckoutError.errorObject.buttonTextKey),
      redirectUrl: undefined,
      image: _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0__.AssetService.getImagePath('HARDWARE_CHECKOUT', _constants_hardware_checkout_constants__WEBPACK_IMPORTED_MODULE_1__.HardwareCheckoutConstants.ORDER_CORRECTION_IMAGE),
      mobileImage: _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0__.AssetService.getImagePath('HARDWARE_CHECKOUT', _constants_hardware_checkout_constants__WEBPACK_IMPORTED_MODULE_1__.HardwareCheckoutConstants.ORDER_CORRECTION_MOBILE_IMAGE)
    };
    if (customerServiceRedirectUrl && contactUsRedirectUrl) {
      errorViewModel.redirectUrl = hardwareCheckoutError.errorObject.type === _enums_error_enum__WEBPACK_IMPORTED_MODULE_7__.ErrorRedirectUrlEnum.CUSTOMER_SERVICE_REDIRECT_URL ? customerServiceRedirectUrl : contactUsRedirectUrl;
    }
    this.hardwareCheckoutFacade.setViewState({
      key: _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_2__.ViewStateEnum.ERROR,
      showNavigation: false,
      showBackButton: true,
      error: errorViewModel
    });
  }
  getSalesOrderIdFromUrl() {
    return this.urlService.getRequestParamValue(_constants_hardware_checkout_constants__WEBPACK_IMPORTED_MODULE_1__.HardwareCheckoutConstants.SALES_ORDER_URL_ID, '');
  }
  getSalesOrderRequestFromSdata() {
    const encodedString = this.urlService.getRequestParamValue(_constants_hardware_checkout_constants__WEBPACK_IMPORTED_MODULE_1__.HardwareCheckoutConstants.SDATA, '');
    if (encodedString !== '') {
      return this.jsonUrlService.decompress(encodedString).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(response => {
        if (response && response['offers'] && response['offers'][0]) {
          return response['offers'][0];
        }
      }));
    }
    throw new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_15__.HardwareCheckoutError(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_6__.CorruptSdata);
  }
  initialiseFlowFromBasket(componentSteps) {
    return this.getUrlRequestParameters().pipe(this.confirmUserIsLoggedIn(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(urlRequestParams => {
      this.hardwareCheckoutFacade.setUrlRequestParameters(urlRequestParams);
      this.eventFacade.triggerAnalyticsSalesFlowStartEvent();
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mergeMap)(urlRequestParams => {
      return this.hardwareCheckoutFacade.getCustomerDiscounts().pipe(this.handleComponentSteps(componentSteps, urlRequestParams.salesOffer), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => {
        this.hardwareCheckoutFacade.setDeliveryViewModel(urlRequestParams.salesOffer);
      }));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mergeMap)(() => this.handleDeliveryData().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(() => true), _utils_strategy_util__WEBPACK_IMPORTED_MODULE_14__.StrategyUtil.handleBillingAccount(this.hardwareCheckoutFacade), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      console.log('error', error);
      if (error.message === _constants_errors_constants__WEBPACK_IMPORTED_MODULE_6__.UserNotLoggedInError) {
        return rxjs__WEBPACK_IMPORTED_MODULE_4__.EMPTY;
      } else {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => error);
      }
    }));
  }
  initialiseFlowComingBackFromIngenico(componentSteps, salesOrderIdFromUrl) {
    const ingenicoResult = this.urlService.getRequestParamValue(_constants_hardware_checkout_constants__WEBPACK_IMPORTED_MODULE_1__.HardwareCheckoutConstants.STATUS_URL, '');
    const ingenicoResultUtil = (0,_sales_shared_data_access__WEBPACK_IMPORTED_MODULE_13__.createIngenicoResultUtil)(ingenicoResult);
    // coming back from Ingenico we no longer have the URL request parameters, so setting to default
    this.setDefaultUrlRequestParameters(ingenicoResult);
    if (ingenicoResultUtil.isSuccessful()) {
      // for success status we only show thank you step
      return this.initialisePaymentSuccessFlow(componentSteps, salesOrderIdFromUrl);
    } else {
      // for error/cancel status we need to reload the sales order and show the summary step
      return this.initialisePaymentFailedFlow(salesOrderIdFromUrl, componentSteps);
    }
  }
  initialisePaymentSuccessFlow(componentSteps, salesOrderIdFromUrl) {
    this.hardwareCheckoutFacade.setOrderNumber(salesOrderIdFromUrl);
    // reset analytics info from session storage
    this.hardwareCheckoutFacade.setAnalyticsAttributesFromSessionStorage();
    this.hardwareCheckoutFacade.setAnalyticsCartFromSessionStorage();
    const filteredSteps = componentSteps.filter(step => step.key === _sales_thank_you_feat_thank_you__WEBPACK_IMPORTED_MODULE_20__.thankYouEventStepKey).map(step => step.key);
    this.stepFacade.setStepConfig({
      steps: filteredSteps
    });
    this.hardwareCheckoutFacade.setBackButtonVisibility(false);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(true);
  }
  initialisePaymentFailedFlow(salesOrderIdFromUrl, componentSteps) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.forkJoin)({
      deliveryData: this.handleDeliveryData().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)),
      salesOrder: this.hardwareCheckoutFacade.retrieveSalesOrder(salesOrderIdFromUrl)
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => {
      const filteredSteps = componentSteps.filter(step => {
        return step.key === 'summary';
      }).map(step => step.key);
      this.stepFacade.setStepConfig({
        steps: filteredSteps
      });
      this.hardwareCheckoutFacade.setBackButtonVisibility(false);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(({
      salesOrder
    }) => salesOrder), _utils_strategy_util__WEBPACK_IMPORTED_MODULE_14__.StrategyUtil.setOmapiDetails(this.hardwareCheckoutFacade), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mergeMap)(salesOrder => {
      this.hardwareCheckoutFacade.saveSalesOrder(salesOrder);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(salesOrder);
    }), _utils_strategy_util__WEBPACK_IMPORTED_MODULE_14__.StrategyUtil.setOmapiDetails(this.hardwareCheckoutFacade), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(() => true), _utils_strategy_util__WEBPACK_IMPORTED_MODULE_14__.StrategyUtil.handleBillingAccount(this.hardwareCheckoutFacade));
  }
  confirmUserIsLoggedIn() {
    return (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mergeMap)(urlRequestParams => {
      return this.loginService.getLoginDetails().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(loginDetails => {
        if (!loginDetails.isLoggedIn()) {
          this.loginService.login(loginDetails.state, loginDetails.nonce);
          throw new Error(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_6__.UserNotLoggedInError);
        }
        return urlRequestParams;
      }));
    });
  }
  handleComponentSteps(componentSteps, sdataSalesOffer) {
    componentSteps = componentSteps.filter(step => {
      return step.key !== _sales_thank_you_feat_thank_you__WEBPACK_IMPORTED_MODULE_20__.thankYouEventStepKey;
    });
    const numberOfOrderedProducts = _utils_sdata_sales_offer_util__WEBPACK_IMPORTED_MODULE_22__.SdataSalesOfferUtil.getSdataSalesOfferItemsWithDiscount(sdataSalesOffer).length;
    return (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(customerDiscounts => {
      if (Number(customerDiscounts.usedSlots.length) + numberOfOrderedProducts <= 5) {
        componentSteps = componentSteps.filter(step => {
          return step.key !== 'etf';
        });
      } else {
        this.hardwareCheckoutFacade.setEtfUsedSlots(customerDiscounts);
      }
      const stepKeys = componentSteps.map(step => step.key);
      this.stepFacade.setStepConfig({
        steps: stepKeys
      });
    });
  }
  handleCustomerType(customerAccountDetails) {
    let customerType = _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_2__.CustomerTypeEnum.RESIDENTIAL;
    if (_utils_customer_category_util__WEBPACK_IMPORTED_MODULE_24__.CustomerCategoryUtil.getCustomerCategory(customerAccountDetails.customerCategory.name.valueOf()) === _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_2__.CustomerTypeEnum.SOHO.valueOf()) {
      customerType = _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_2__.CustomerTypeEnum.SOHO;
    }
    this.hardwareCheckoutFacade.setCustomerType(customerType);
  }
  handleCustomerStatus(customerAccountDetails) {
    const isBlocked = _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_2__.customerAccountTypeBlockedConst.includes(customerAccountDetails.status);
    if (isBlocked) {
      this.hardwareCheckoutFacade.aemInput$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe({
        next: aemInput => {
          if (aemInput && aemInput.customerServiceRedirectUrlInput) {
            this.setOrderCorrection(_constants_ordercorrections_constants__WEBPACK_IMPORTED_MODULE_18__.CustomerIncorrectStatus, aemInput.customerServiceRedirectUrlInput);
          } else {
            this.setError(new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_15__.HardwareCheckoutError(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_6__.AemInputNotSet), undefined, undefined);
          }
        }
      });
    }
  }
  handleCustomerBadPayer(customerAccountDetails) {
    const isBlocked = customerAccountDetails.creditClassificationCode === _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_2__.CustomerCreditClassificationTypeEnum.NO_SALES;
    if (isBlocked) {
      this.hardwareCheckoutFacade.aemInput$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe({
        next: aemInput => {
          if (aemInput && aemInput.customerServiceRedirectUrlInput) {
            this.setOrderCorrection(_constants_ordercorrections_constants__WEBPACK_IMPORTED_MODULE_18__.CustomerHasBadCreditClassification, aemInput.customerServiceRedirectUrlInput);
          } else {
            this.setError(new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_15__.HardwareCheckoutError(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_6__.AemInputNotSet), undefined, undefined);
          }
        }
      });
    }
  }
  getReferrerUrl() {
    return document.referrer;
  }
  setDefaultUrlRequestParameters(ingenicoResult) {
    this.hardwareCheckoutFacade.setUrlRequestParameters({
      salesOffer: {},
      flow: _constants_analytics_analytics_constants__WEBPACK_IMPORTED_MODULE_19__.HardwareCheckoutAnalytics.FLOW,
      source: _constants_analytics_analytics_constants__WEBPACK_IMPORTED_MODULE_19__.HardwareCheckoutAnalytics.SOURCE,
      intent: _constants_analytics_analytics_constants__WEBPACK_IMPORTED_MODULE_19__.HardwareCheckoutAnalytics.INTENT,
      ingenicoResult: ingenicoResult
    });
  }
  static #_ = this.ɵfac = function HardwareCheckoutHelperService_Factory(t) {
    return new (t || HardwareCheckoutHelperService)(_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0__.JsonUrlService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵinject"](_sales_shared_data_access__WEBPACK_IMPORTED_MODULE_13__.StepFacade), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵinject"](_sales_events_data_access__WEBPACK_IMPORTED_MODULE_16__.EventFacade), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵinject"](_facades_hardware_checkout_facade__WEBPACK_IMPORTED_MODULE_3__.HardwareCheckoutFacade), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵinject"](_factory_event_strategy_factory__WEBPACK_IMPORTED_MODULE_12__.EventStrategyFactory), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵinject"](_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_17__.LoginService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineInjectable"]({
    token: HardwareCheckoutHelperService,
    factory: HardwareCheckoutHelperService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 9225:
/*!************************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/hardware-checkout/services/payment.service.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentService: () => (/* binding */ PaymentService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1261);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @telenet/ng-lib-config */ 81601);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/hardware-checkout-error.class */ 38978);
/* harmony import */ var _constants_errors_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/errors.constants */ 66523);
/* harmony import */ var _utils_header_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/header.util */ 63301);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_6__);










class PaymentService {
  constructor(http, urlService, configService) {
    this.http = http;
    this.urlService = urlService;
    this.configService = configService;
    this.basePath = '/public/api/mytelenet-web-sales-checkout';
    const ocapiUrl = this.configService.getConfig(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_2__.ConfigConstants.OCAPI_URl);
    if (!ocapiUrl) {
      throw new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_3__.HardwareCheckoutError(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_4__.OcapiNotConfigured);
    }
    this.baseUrl = this.configService.getConfig(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_2__.ConfigConstants.OCAPI_URl);
  }
  getPaymentObject(request) {
    const url = this.getUrl('/v1/payment');
    return this.doPost(url, request);
  }
  getUrl(endpoint) {
    return `${this.baseUrl}${this.basePath}${endpoint}`;
  }
  doPost(url, body) {
    return this.http.post(url, body, {
      headers: _utils_header_util__WEBPACK_IMPORTED_MODULE_5__.HeaderUtil.createHttpHeaders(this.urlService.getCurrentUrl()),
      withCredentials: true
    });
  }
  static #_ = this.ɵfac = function PaymentService_Factory(t) {
    return new (t || PaymentService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_2__.ConfigService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
    token: PaymentService,
    factory: PaymentService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 83086:
/*!******************************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/hardware-checkout/services/reverse-proxy.service.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReverseProxyService: () => (/* binding */ ReverseProxyService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1261);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sales/hardware-checkout/data-access */ 77644);
/* harmony import */ var _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @telenet/ng-lib-config */ 81601);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../classes/hardware-checkout-error.class */ 38978);
/* harmony import */ var _constants_errors_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/errors.constants */ 66523);
/* harmony import */ var _utils_header_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/header.util */ 63301);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_8__);












class ReverseProxyService {
  constructor(http, urlService, configService) {
    this.http = http;
    this.urlService = urlService;
    this.configService = configService;
    this.basePath = '/public/api/mytelenet-web-sales-checkout-rp';
    this.fields = 'id,name,validationElements,orderItems,price,status,customerId,cartStatus,chars,discountItems,locationIds,eligibleForEasySwitch,warningElements,isAbandonable,rules';
    const ocapiUrl = this.configService.getConfig(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_3__.ConfigConstants.OCAPI_URl);
    if (!ocapiUrl) {
      throw new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_4__.HardwareCheckoutError(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_5__.OcapiNotConfigured);
    }
    this.baseUrl = this.configService.getConfig(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_3__.ConfigConstants.OCAPI_URl);
  }
  getPid() {
    const path = `${this.baseUrl}/public/api/sales-service/v2/pid`;
    return this.doGet(path).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(personalIdentityResponse => _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_1__.PersonalIdentityUtils.getPersonalIdentity(personalIdentityResponse)));
  }
  getCustomerAccountDetails() {
    const path = `/v1/customerManagement/customerAccount`;
    return this.doGet(this.getUrl(path));
  }
  createSalesOrder(locationId) {
    const path = `/v1/orderManagement/customerAccount/location/${locationId}/salesOrder`;
    const body = {};
    return this.doPost(this.getUrl(path), body);
  }
  updateSalesOrderDeliveryEmail(salesOrderId, customerId, deliveryEmail) {
    const path = `/v1/orderManagement/salesOrder/${salesOrderId}`;
    const body = {
      id: customerId,
      chars: {
        'Delivery E-mail': deliveryEmail
      }
    };
    return this.doPut(this.getUrl(path), body);
  }
  createHardwareTLO(salesOrderId, customerType) {
    const path = `/v1/orderManagement/salesOrder/${salesOrderId}/orderItem`;
    let epc = 'HWTO0001';
    if (customerType === _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_1__.CustomerTypeEnum.SOHO) {
      epc = 'HWTO0107';
    }
    const body = {
      epc: epc
    };
    return this.doPost(this.getUrl(path), body);
  }
  addOrderItem(salesOrderId, TLOOrderItemId, OrderItemCode) {
    const path = `/v1/orderManagement/salesOrder/${salesOrderId}/orderItem/${TLOOrderItemId}/hwcvpOrderItem`;
    const body = {
      itemCode: OrderItemCode
    };
    return this.doPost(this.getUrl(path), body);
  }
  deleteOrderItem(salesOrderId, orderItemId) {
    const path = `/v1/orderManagement/salesOrder/${salesOrderId}/orderItem/${orderItemId}`;
    return this.doDelete(this.getUrl(path));
  }
  updateDeliveryChars(salesOrderId, orderItemId, deliveryInfoChange) {
    const body = {
      chars: deliveryInfoChange
    };
    return this.doPut(this.getUrl(`/v1/orderManagement/salesOrder/${salesOrderId}/orderItem/${orderItemId}`), body);
  }
  getDeliveryOptions(salesOrderId) {
    const path = `/v1/orderManagement/salesOrder/${salesOrderId}/deliveryMethods`;
    return this.doGet(this.getUrl(path));
  }
  addDiscount(salesOrderId, ruleElementId) {
    const path = `/v1/orderManagement/salesOrder/${salesOrderId}/discount`;
    const body = {
      ruleElementId: ruleElementId
    };
    return this.doPost(this.getUrl(path), body);
  }
  calculateDelivery(salesOrderId, deliveryMethods) {
    const path = `/v1/orderManagement/salesOrder/${salesOrderId}/calculateDelivery`;
    const body = {
      chosenStandaloneDeliveryItems: this.getChosenStandaloneDeliveryItems(deliveryMethods)
    };
    return this.doPost(this.getUrl(path), body);
  }
  setSalesorderAsAbandonable(salesOrderId, customerId, basketUrl) {
    const path = `/v1/orderManagement/salesOrder/${salesOrderId}?isAbandonable=true`;
    const body = {
      id: customerId,
      chars: {
        'eShop URL for PEGA Characteristic Involvement': basketUrl
      }
    };
    return this.doPut(this.getUrl(path), body);
  }
  submitSalesOrder(salesOrderId) {
    const path = `/v1/orderManagement/salesOrder/${salesOrderId}/submit`;
    const body = {};
    return this.doPost(this.getUrl(path), body);
  }
  getBillingAccounts() {
    const path = `/v1/billingManagement/customerAccount/billingAccount`;
    return this.doGet(this.getUrl(path));
  }
  checkoutDelivery(salesOrderId) {
    const path = `/v1/orderManagement/salesOrder/${salesOrderId}/checkoutDelivery`;
    return this.doPost(this.getUrl(path), {});
  }
  checkContractSummary(salesOrderId) {
    const path = `/v1/orderManagement/salesOrder/${salesOrderId}/document/cs/generationRequired`;
    return this.doGet(this.getUrl(path));
  }
  generateContractSummary(salesOrderId) {
    const path = `/v1/orderManagement/salesOrder/${salesOrderId}/document/cs/generation`;
    const body = {};
    return this.doPost(this.getUrl(path), body);
  }
  checkFeasibility(salesOrderId) {
    const body = {};
    return this.doPost(this.getUrl(`/v1/orderManagement/salesOrder/${salesOrderId}/feasibilityCheck`), body);
  }
  checkEligibility(salesOrderId) {
    const body = {};
    return this.doPost(this.getUrl(`/v1/orderManagement/salesOrder/${salesOrderId}/eligibilityCheck`), body);
  }
  getAddressById(addressUnitId) {
    const url = this.getUrl(`/v1/addressManagement/address/${addressUnitId}`);
    return this.doGet(url);
  }
  getCustomerDiscounts() {
    const url = this.getUrl(`/v1/customerManagement/discountSlots`);
    return this.doGet(url);
  }
  getSalesOrder(salesOrderId) {
    const url = this.getUrl(`/v1/orderManagement/salesOrder/${salesOrderId}`);
    return this.doGet(url);
  }
  getChosenStandaloneDeliveryItems(deliveryMethods) {
    return deliveryMethods.standaloneDeliveryItems?.map(standaloneDeliveryItem => {
      return {
        deliveryOrderItem: {
          id: standaloneDeliveryItem.deliveryOrderItem.id,
          name: standaloneDeliveryItem.deliveryOrderItem.name
        },
        deliveryMethod: {
          id: standaloneDeliveryItem.deliveryMethods[0].id,
          name: standaloneDeliveryItem.deliveryMethods[0].name
        }
      };
    });
  }
  getUrl(path) {
    return `${this.baseUrl}${this.basePath}${path}`;
  }
  doGet(url) {
    return this.http.get(url, {
      headers: _utils_header_util__WEBPACK_IMPORTED_MODULE_6__.HeaderUtil.createHttpHeaders(this.urlService.getCurrentUrl()),
      withCredentials: true
    });
  }
  doPut(url, body) {
    return this.http.put(url, body, {
      headers: _utils_header_util__WEBPACK_IMPORTED_MODULE_6__.HeaderUtil.createHttpHeaders(this.urlService.getCurrentUrl()),
      withCredentials: true
    });
  }
  doPost(url, body) {
    return this.http.post(url, body, {
      headers: _utils_header_util__WEBPACK_IMPORTED_MODULE_6__.HeaderUtil.createHttpHeaders(this.urlService.getCurrentUrl()),
      withCredentials: true
    });
  }
  doDelete(url) {
    return this.http.delete(url, {
      headers: _utils_header_util__WEBPACK_IMPORTED_MODULE_6__.HeaderUtil.createHttpHeaders(this.urlService.getCurrentUrl()),
      withCredentials: true
    });
  }
  static #_ = this.ɵfac = function ReverseProxyService_Factory(t) {
    return new (t || ReverseProxyService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_3__.ConfigService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
    token: ReverseProxyService,
    factory: ReverseProxyService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 94773:
/*!***************************************************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/hardware-checkout/strategy/delivery/delivery-address-changed.strategy.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeliveryAddressChangedStrategy: () => (/* binding */ DeliveryAddressChangedStrategy)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_address_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/address.util */ 13234);



class DeliveryAddressChangedStrategy {
  constructor(hardwareCheckoutFacade, eventFacade, personalInfoChanges) {
    this.hardwareCheckoutFacade = hardwareCheckoutFacade;
    this.eventFacade = eventFacade;
    this.personalInfoChanges = personalInfoChanges;
  }
  showLoader() {
    return true;
  }
  execute() {
    return this.hardwareCheckoutFacade.salesOrderFromState$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), this.handleDeliveryInfoChange(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(() => {
      const personalInfo = this.personalInfoChanges.personalInfo.personalInfo;
      if (personalInfo) {
        this.triggerMobileChangedEvent(personalInfo);
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(() => {
      return true;
    }));
  }
  handleDeliveryInfoChange() {
    const personalInfo = this.personalInfoChanges.personalInfo.personalInfo;
    const DeliveryAddress = this.personalInfoChanges.personalInfo.deliveryAddress;
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.pipe)((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(() => {
      if (personalInfo) {
        this.hardwareCheckoutFacade.setDeliveryPersonalInfo(personalInfo);
        this.hardwareCheckoutFacade.setSummaryDeliveryPersonalInfo(personalInfo);
      }
      if (DeliveryAddress) {
        const deliveryAddress = _utils_address_util__WEBPACK_IMPORTED_MODULE_2__.AddressUtil.convertFieldValueToDeliveryAddress(DeliveryAddress);
        if (deliveryAddress) {
          this.hardwareCheckoutFacade.setDeliveryAddress(deliveryAddress);
          this.hardwareCheckoutFacade.setSummaryDeliveryAddress(deliveryAddress);
        }
      }
    }));
  }
  triggerMobileChangedEvent(newPersonalInfo) {
    this.hardwareCheckoutFacade.deliveryPersonalInfo$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(personalInfo => personalInfo?.mobile !== newPersonalInfo.mobile)).subscribe(() => this.eventFacade.triggerAnalyticsClickEvent({
      name: 'phone number updated'
    }));
  }
}

/***/ }),

/***/ 448:
/*!*************************************************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/hardware-checkout/strategy/delivery/delivery-step-finished.strategy.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeliveryStepFinishedStrategy: () => (/* binding */ DeliveryStepFinishedStrategy)
/* harmony export */ });
/* harmony import */ var _utils_strategy_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/strategy.util */ 68539);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../classes/hardware-checkout-error.class */ 38978);
/* harmony import */ var _constants_errors_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/errors.constants */ 66523);




class DeliveryStepFinishedStrategy {
  constructor(hardwareCheckoutFacade) {
    this.hardwareCheckoutFacade = hardwareCheckoutFacade;
  }
  showLoader() {
    return true;
  }
  execute() {
    return this.hardwareCheckoutFacade.salesOrderFromState$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(salesOrder => {
      if (salesOrder === undefined) {
        throw new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_2__.HardwareCheckoutError(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_3__.SalesOrderNotSet);
      }
      return salesOrder;
    }), _utils_strategy_util__WEBPACK_IMPORTED_MODULE_0__.StrategyUtil.updateDeliveryChars(this.hardwareCheckoutFacade), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(() => true));
  }
}

/***/ }),

/***/ 9694:
/*!***********************************************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/hardware-checkout/strategy/delivery/delivery-step-loaded.strategy.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeliveryStepLoadedStrategy: () => (/* binding */ DeliveryStepLoadedStrategy)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sales/hardware-checkout/data-access */ 77644);
/* harmony import */ var _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_strategy_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/strategy.util */ 68539);
/* harmony import */ var _utils_customer_account_details_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/customer-account-details.util */ 16221);
/* harmony import */ var _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../classes/hardware-checkout-error.class */ 38978);
/* harmony import */ var _constants_errors_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/errors.constants */ 66523);
/* harmony import */ var _utils_sdata_sales_offer_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/sdata-sales-offer.util */ 90605);
/* harmony import */ var _utils_sales_order_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/sales-order.util */ 21199);









class DeliveryStepLoadedStrategy {
  constructor(hardwareCheckoutFacade, eventFacade) {
    this.hardwareCheckoutFacade = hardwareCheckoutFacade;
    this.eventFacade = eventFacade;
  }
  showLoader() {
    return false;
  }
  execute() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.forkJoin)({
      customerAccount: this.hardwareCheckoutFacade.customerAccountDetails$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1)),
      customerType: this.hardwareCheckoutFacade.customerType$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1))
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(value => {
      const locationId = _utils_customer_account_details_util__WEBPACK_IMPORTED_MODULE_4__.CustomerAccountDetailsUtil.getCustomerLocationId(value.customerAccount, value.customerType === _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_2__.CustomerTypeEnum.SOHO);
      if (!locationId) {
        throw new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_5__.HardwareCheckoutError(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_6__.CustomerHasNoLocationAssociated);
      }
      this.eventFacade.triggerAnalyticsScAddEvent({
        name: 'new product selected'
      });
      return this.hardwareCheckoutFacade.createSalesOrder(locationId);
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(salesOrder => {
      this.hardwareCheckoutFacade.saveSalesOrder(salesOrder);
      this.hardwareCheckoutFacade.setSalesOrderState(_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_2__.SalesOrderStateEnum.SALES_ORDER_CREATED);
    })).pipe(_utils_strategy_util__WEBPACK_IMPORTED_MODULE_3__.StrategyUtil.createHardwareItems(this.hardwareCheckoutFacade), this.addDiscounts()).pipe(_utils_strategy_util__WEBPACK_IMPORTED_MODULE_3__.StrategyUtil.setSalesOrderAsAbandonable(this.hardwareCheckoutFacade)).pipe(_utils_strategy_util__WEBPACK_IMPORTED_MODULE_3__.StrategyUtil.processSalesOrderToDeliveryCalculated(this.hardwareCheckoutFacade));
  }
  addDiscounts() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.pipe)((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(initialSalesOrder => this.hardwareCheckoutFacade.salesOffer$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.switchMap)(sdataSalesOffer => {
      if (!sdataSalesOffer) {
        throw new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_5__.HardwareCheckoutError(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_6__.SalesOfferNotFound);
      }
      return this.processOrderItemsSequentially(initialSalesOrder, sdataSalesOffer);
    }))));
  }
  processOrderItemsSequentially(salesOrder, sdataSalesOffer) {
    const salesOfferItemsWithDiscount = _utils_sdata_sales_offer_util__WEBPACK_IMPORTED_MODULE_7__.SdataSalesOfferUtil.getSdataSalesOfferItemsWithDiscount(sdataSalesOffer);
    const hardwareOrderItem = _utils_sales_order_util__WEBPACK_IMPORTED_MODULE_8__.SalesOrderUtil.getHardwareOrderItem(salesOrder);
    if (!hardwareOrderItem.orderItems) {
      throw new Error('Something is amiss with the order items.');
    }
    const matchingDiscounts = _utils_sales_order_util__WEBPACK_IMPORTED_MODULE_8__.SalesOrderUtil.orderItemsWithMatchingDiscounts(hardwareOrderItem.orderItems, salesOfferItemsWithDiscount);
    return _utils_strategy_util__WEBPACK_IMPORTED_MODULE_3__.StrategyUtil.applyDiscountsRecursively(this.hardwareCheckoutFacade, matchingDiscounts, salesOrder);
  }
}

/***/ }),

/***/ 34407:
/*!***********************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/hardware-checkout/strategy/error.strategy.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorStrategy: () => (/* binding */ ErrorStrategy)
/* harmony export */ });
class ErrorStrategy {
  constructor(errorEventBody) {
    this.errorEventBody = errorEventBody;
  }
  showLoader() {
    return false;
  }
  execute() {
    throw this.errorEventBody.error;
  }
}

/***/ }),

/***/ 10794:
/*!**************************************************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/hardware-checkout/strategy/etf/etf-step-finished-no-changes.strategy.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EtfStepFinishedNoChangesStrategy: () => (/* binding */ EtfStepFinishedNoChangesStrategy)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sales/hardware-checkout/data-access */ 77644);
/* harmony import */ var _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_sales_order_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/sales-order.util */ 21199);
/* harmony import */ var _constants_errors_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/errors.constants */ 66523);
/* harmony import */ var _utils_strategy_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/strategy.util */ 68539);
/* harmony import */ var _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../classes/hardware-checkout-error.class */ 38978);







class EtfStepFinishedNoChangesStrategy {
  constructor(hardwareCheckoutFacade) {
    this.hardwareCheckoutFacade = hardwareCheckoutFacade;
  }
  showLoader() {
    return true;
  }
  execute() {
    return this.hardwareCheckoutFacade.salesOrderFromState$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), this.handleDelivery(), _utils_strategy_util__WEBPACK_IMPORTED_MODULE_5__.StrategyUtil.checkEligibility(this.hardwareCheckoutFacade), _utils_strategy_util__WEBPACK_IMPORTED_MODULE_5__.StrategyUtil.checkContractSummary(this.hardwareCheckoutFacade), _utils_strategy_util__WEBPACK_IMPORTED_MODULE_5__.StrategyUtil.setOmapiDetails(this.hardwareCheckoutFacade), _utils_strategy_util__WEBPACK_IMPORTED_MODULE_5__.StrategyUtil.handleNotifications(this.hardwareCheckoutFacade), _utils_strategy_util__WEBPACK_IMPORTED_MODULE_5__.StrategyUtil.setSummaryDetails(this.hardwareCheckoutFacade), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(salesOrder => {
      const hardwareOrderItems = _utils_sales_order_util__WEBPACK_IMPORTED_MODULE_3__.SalesOrderUtil.getHardwareOrderItem(salesOrder);
      if (hardwareOrderItems && hardwareOrderItems.orderItems) {
        this.hardwareCheckoutFacade.saveSalesOrder(salesOrder);
        this.hardwareCheckoutFacade.setSalesOrderState(_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_2__.SalesOrderStateEnum.DELIVERY_CALCULATED);
      } else {
        throw new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_6__.HardwareCheckoutError(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_4__.NoHardwareItemsFound);
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(() => {
      return false;
    }));
  }
  handleDelivery() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.pipe)((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(salesOrder => {
      if (salesOrder) {
        return this.hardwareCheckoutFacade.getDeliveryOptions(salesOrder.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(deliveryMethods => {
          return {
            salesOrder: salesOrder,
            deliveryMethods: deliveryMethods
          };
        }));
      } else {
        throw new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_6__.HardwareCheckoutError(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_4__.SalesOrderNotSet);
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(res => {
      return this.hardwareCheckoutFacade.calculateDelivery(res.salesOrder.id, res.deliveryMethods);
    }));
  }
}

/***/ }),

/***/ 46157:
/*!***************************************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/hardware-checkout/strategy/etf/etf-step-finished.strategy.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EtfStepFinishedStrategy: () => (/* binding */ EtfStepFinishedStrategy)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_errors_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/errors.constants */ 66523);
/* harmony import */ var _utils_sales_order_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/sales-order.util */ 21199);
/* harmony import */ var _utils_strategy_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/strategy.util */ 68539);
/* harmony import */ var _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../classes/hardware-checkout-error.class */ 38978);






class EtfStepFinishedStrategy {
  constructor(hardwareCheckoutFacade, etfFacade, stepEventBody) {
    this.hardwareCheckoutFacade = hardwareCheckoutFacade;
    this.etfFacade = etfFacade;
    this.stepEventBody = stepEventBody;
  }
  showLoader() {
    return true;
  }
  execute() {
    return this.hardwareCheckoutFacade.salesOrderFromState$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), this.terminateOrderItems(), this.addDiscounts()).pipe(_utils_strategy_util__WEBPACK_IMPORTED_MODULE_4__.StrategyUtil.processSalesOrderToDeliveryCalculated(this.hardwareCheckoutFacade));
  }
  addDiscounts(addedDiscountIds = []) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.pipe)((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(salesOrder => {
      if (addedDiscountIds.length < this.stepEventBody.targetOrderItemIdsToDiscount.length) {
        const nextBasicDiscountItemId = this.stepEventBody.targetOrderItemIdsToDiscount.filter(orderItemToDiscount => {
          return !addedDiscountIds.includes(orderItemToDiscount.id);
        }).pop();
        if (nextBasicDiscountItemId) {
          const rule = _utils_sales_order_util__WEBPACK_IMPORTED_MODULE_3__.SalesOrderUtil.getDiscountRuleByTargetOrderId(salesOrder.rules, nextBasicDiscountItemId.id);
          if (rule) {
            addedDiscountIds.push(nextBasicDiscountItemId.id);
            return this.hardwareCheckoutFacade.addDiscount(salesOrder.id, rule.id).pipe(this.addDiscounts(addedDiscountIds));
          }
        }
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(salesOrder);
    }));
  }
  terminateOrderItems() {
    return (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(salesOrder => {
      if (salesOrder) {
        const existingHardwareOrderItem = _utils_sales_order_util__WEBPACK_IMPORTED_MODULE_3__.SalesOrderUtil.getHardwareOrderItem(salesOrder);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.from)(this.stepEventBody.existingDiscountsToRemove).pipe(this.deleteDiscounts(existingHardwareOrderItem, salesOrder), this.takeLatestSalesOrder(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(salesOrder => {
          if (salesOrder) {
            return salesOrder;
          }
          throw new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_5__.HardwareCheckoutError(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_2__.SalesOrderNotSet);
        }));
      }
      throw new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_5__.HardwareCheckoutError(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_2__.SalesOrderNotSet);
    });
  }
  takeLatestSalesOrder() {
    return (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.reduce)((latestSalesOrder, salesOrder) => {
      if (!latestSalesOrder || salesOrder && salesOrder.orderItems.length > latestSalesOrder.orderItems.length) {
        latestSalesOrder = salesOrder;
      }
      return latestSalesOrder;
    }, undefined);
  }
  deleteDiscounts(existingHardwareOrderItem, salesOrder) {
    return (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(discount => {
      return this.etfFacade.usedAndPendingDiscountSlots$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(usedDiscountSlots => {
        if (usedDiscountSlots) {
          const selectedOrderItemToDelete = existingHardwareOrderItem.orderItems?.find(orderItem => orderItem.customerProductId === discount.id);
          if (selectedOrderItemToDelete) {
            return this.hardwareCheckoutFacade.deleteOrderItem(salesOrder.id, selectedOrderItemToDelete.id);
          }
        }
        throw new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_5__.HardwareCheckoutError(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_2__.DiscountCouldNotBeRemoved);
      }));
    });
  }
}

/***/ }),

/***/ 98380:
/*!*************************************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/hardware-checkout/strategy/etf/etf-step-loaded.strategy.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EtfStepLoadedStrategy: () => (/* binding */ EtfStepLoadedStrategy)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sales/hardware-checkout/data-access */ 77644);
/* harmony import */ var _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_sales_order_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/sales-order.util */ 21199);
/* harmony import */ var _utils_strategy_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/strategy.util */ 68539);
/* harmony import */ var _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../classes/hardware-checkout-error.class */ 38978);
/* harmony import */ var _constants_errors_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/errors.constants */ 66523);
/* harmony import */ var _utils_customer_account_details_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/customer-account-details.util */ 16221);
/* harmony import */ var _utils_discount_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/discount.util */ 25037);
/* harmony import */ var _enums_order_item_action_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../enums/order-item-action.enum */ 65890);










class EtfStepLoadedStrategy {
  constructor(hardwareCheckoutFacade, eventFacade) {
    this.hardwareCheckoutFacade = hardwareCheckoutFacade;
    this.eventFacade = eventFacade;
  }
  showLoader() {
    return true;
  }
  execute() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.forkJoin)({
      customerAccount: this.hardwareCheckoutFacade.customerAccountDetails$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1)),
      customerType: this.hardwareCheckoutFacade.customerType$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1)),
      usedDiscountSlots: this.hardwareCheckoutFacade.usedDiscountSlots$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1))
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.mergeMap)(value => {
      const locationId = _utils_customer_account_details_util__WEBPACK_IMPORTED_MODULE_7__.CustomerAccountDetailsUtil.getCustomerLocationId(value.customerAccount, value.customerType === _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_2__.CustomerTypeEnum.SOHO);
      if (!locationId) {
        throw new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_5__.HardwareCheckoutError(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_6__.CustomerHasNoLocationAssociated);
      }
      this.eventFacade.triggerAnalyticsScAddEvent({
        name: 'new product selected'
      });
      return this.hardwareCheckoutFacade.createSalesOrder(locationId).pipe(_utils_strategy_util__WEBPACK_IMPORTED_MODULE_4__.StrategyUtil.createHardwareItems(this.hardwareCheckoutFacade)).pipe(_utils_strategy_util__WEBPACK_IMPORTED_MODULE_4__.StrategyUtil.setSalesOrderAsAbandonable(this.hardwareCheckoutFacade)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(salesOrder => ({
        salesOrder,
        usedDiscountSlots: value.usedDiscountSlots
      }))).pipe(this.applyDiscounts());
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(({
      salesOrder,
      remainingItems
    }) => {
      _utils_sales_order_util__WEBPACK_IMPORTED_MODULE_3__.SalesOrderUtil.getHardwareOrderItem(salesOrder);
      this.hardwareCheckoutFacade.saveSalesOrder(salesOrder);
      this.hardwareCheckoutFacade.setEtfOrderItems(remainingItems.map(orderItemsWithDiscount => orderItemsWithDiscount.orderItem), salesOrder.rules); // Set remaining items
      this.hardwareCheckoutFacade.setSalesOrderState(_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_2__.SalesOrderStateEnum.ETF_NEEDED);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(() => true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      if (error instanceof _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_5__.HardwareCheckoutError) {
        throw error;
      } else {
        throw new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_5__.HardwareCheckoutError(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_6__.HardwareCreationFailed);
      }
    }));
  }
  applyDiscounts() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.pipe)((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.mergeMap)(({
      salesOrder,
      usedDiscountSlots
    }) => this.hardwareCheckoutFacade.salesOffer$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.switchMap)(sdataSalesOffer => {
      if (!sdataSalesOffer) {
        throw new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_5__.HardwareCheckoutError(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_6__.SalesOfferNotFound);
      }
      const orderItemsWithDiscounts = _utils_discount_util__WEBPACK_IMPORTED_MODULE_8__.DiscountUtil.getDiscountedOrderItemsFromSalesOffer(salesOrder, sdataSalesOffer, _enums_order_item_action_enum__WEBPACK_IMPORTED_MODULE_9__.OrderItemActionEnum.ADD);
      const {
        itemsToDiscount,
        remainingItems
      } = _utils_discount_util__WEBPACK_IMPORTED_MODULE_8__.DiscountUtil.getItemsToDiscountAndRemaining(orderItemsWithDiscounts, usedDiscountSlots);
      if (itemsToDiscount.length > 0) {
        return _utils_strategy_util__WEBPACK_IMPORTED_MODULE_4__.StrategyUtil.applyDiscountsRecursively(this.hardwareCheckoutFacade, itemsToDiscount, salesOrder).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(() => ({
          salesOrder,
          remainingItems
        })) // Pass salesOrder and remainingItems to the next stage
        );
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)({
        salesOrder,
        remainingItems
      });
    }))));
  }
}

/***/ }),

/***/ 62868:
/*!***************************************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/hardware-checkout/strategy/etf/etf-step-reloaded.strategy.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EtfStepReloadedStrategy: () => (/* binding */ EtfStepReloadedStrategy)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sales/hardware-checkout/data-access */ 77644);
/* harmony import */ var _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_1__);


class EtfStepReloadedStrategy {
  constructor(hardwareCheckoutFacade, etfFacade) {
    this.hardwareCheckoutFacade = hardwareCheckoutFacade;
    this.etfFacade = etfFacade;
  }
  showLoader() {
    return true;
  }
  execute() {
    this.hardwareCheckoutFacade.setSalesOrderState(_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_1__.SalesOrderStateEnum.INITIALISING);
    this.etfFacade.resetEtfState();
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(true);
  }
}

/***/ }),

/***/ 16013:
/*!****************************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/hardware-checkout/strategy/navigation.strategy.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigationStrategy: () => (/* binding */ NavigationStrategy)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sales/events/data-access */ 80258);
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sales_events_data_access__WEBPACK_IMPORTED_MODULE_1__);


class NavigationStrategy {
  constructor(hardwareCheckoutFacade, event) {
    this.hardwareCheckoutFacade = hardwareCheckoutFacade;
    this.event = event;
  }
  showLoader() {
    return false;
  }
  execute() {
    let navigationState = true;
    if (this.event.eventType === _sales_events_data_access__WEBPACK_IMPORTED_MODULE_1__.EventTypeEnum.HIDE_NAVIGATION) {
      navigationState = false;
    }
    this.hardwareCheckoutFacade.setNavigationState(navigationState);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(false);
  }
}

/***/ }),

/***/ 78910:
/*!***************************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/hardware-checkout/strategy/no-action.strategy.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoActionStrategy: () => (/* binding */ NoActionStrategy)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);

class NoActionStrategy {
  constructor(shouldShowLoader = false) {
    this.shouldShowLoader = shouldShowLoader;
  }
  showLoader() {
    return this.shouldShowLoader;
  }
  execute() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(false);
  }
}

/***/ }),

/***/ 36848:
/*!*******************************************************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/hardware-checkout/strategy/summary/summary-show-contract-summary.strategy.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SummaryShowContractSummaryStrategy: () => (/* binding */ SummaryShowContractSummaryStrategy)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @telenet/ng-lib-config */ 81601);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_hardware_checkout_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/hardware-checkout.constants */ 61260);
/* harmony import */ var _sales_summary_data_access__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sales/summary/data-access */ 94549);
/* harmony import */ var _sales_summary_data_access__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sales_summary_data_access__WEBPACK_IMPORTED_MODULE_4__);





class SummaryShowContractSummaryStrategy {
  constructor(urlService, configService, hardwareCheckoutFacade) {
    this.urlService = urlService;
    this.configService = configService;
    this.hardwareCheckoutFacade = hardwareCheckoutFacade;
  }
  showLoader() {
    return true;
  }
  execute() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.forkJoin)([this.hardwareCheckoutFacade.contractSummaryUrl$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1)), this.hardwareCheckoutFacade.contractSummaryGenerationNotPossible$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1))]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(([contractSummaryUrl, contractSummaryGenerationNotPossible]) => {
      if (contractSummaryGenerationNotPossible && !contractSummaryUrl) {
        this.hardwareCheckoutFacade.addSummaryGeneralNotification(_sales_summary_data_access__WEBPACK_IMPORTED_MODULE_4__.contractGenerationErrorNotification);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(undefined);
      } else {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.iif)(() => !contractSummaryUrl, this.generateContractSummary(), (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(contractSummaryUrl));
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(contractSummaryUrl => {
      if (contractSummaryUrl) {
        this.urlService.openNewTab(contractSummaryUrl);
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(() => false));
  }
  generateContractSummary() {
    return this.hardwareCheckoutFacade.salesOrderFromState$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(salesOrder => {
      if (salesOrder) {
        return this.hardwareCheckoutFacade.generateContractSummary(salesOrder?.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
          console.error('Error while generating contract summary', error);
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(undefined);
        }));
      }
      console.error('Error while generating contract summary.  SalesOrder not set in state');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(undefined);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(contractSummaryResponse => {
      let contractSummaryUrl;
      if (contractSummaryResponse) {
        contractSummaryUrl = this.generateContractSummaryURL(contractSummaryResponse.uuid);
        this.hardwareCheckoutFacade.setContractSummaryUrl(contractSummaryUrl);
      }
      return contractSummaryUrl;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(contractSummaryUrl => {
      if (!contractSummaryUrl) {
        this.hardwareCheckoutFacade.addSummaryGeneralNotification(_sales_summary_data_access__WEBPACK_IMPORTED_MODULE_4__.contractGenerationErrorNotification);
      }
      return contractSummaryUrl;
    }));
  }
  generateContractSummaryURL(documentId) {
    return this.configService.getConfig(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_2__.ConfigConstants.OCAPI_URl).concat(_constants_hardware_checkout_constants__WEBPACK_IMPORTED_MODULE_3__.HardwareCheckoutConstants.CONTRACT_SUMMARY_ENDPOINT).concat(documentId);
  }
}

/***/ }),

/***/ 26902:
/*!***********************************************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/hardware-checkout/strategy/summary/summary-step-finished.strategy.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SummaryStepFinishedStrategy: () => (/* binding */ SummaryStepFinishedStrategy)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_errors_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/errors.constants */ 66523);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../classes/hardware-checkout-error.class */ 38978);
/* harmony import */ var _utils_address_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/address.util */ 13234);
/* harmony import */ var _utils_sales_order_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/sales-order.util */ 21199);
/* harmony import */ var _enums_order_item_action_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../enums/order-item-action.enum */ 65890);
/* harmony import */ var _utils_payment_request_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/payment-request.util */ 64550);








class SummaryStepFinishedStrategy {
  constructor(hardwareCheckoutFacade, summaryFacade, urlService, mediaQueryService, eventFacade) {
    this.hardwareCheckoutFacade = hardwareCheckoutFacade;
    this.summaryFacade = summaryFacade;
    this.urlService = urlService;
    this.mediaQueryService = mediaQueryService;
    this.eventFacade = eventFacade;
  }
  showLoader() {
    return true;
  }
  execute() {
    return this.hardwareCheckoutFacade.salesOrderFromState$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(salesOrder => {
      if (salesOrder) {
        return _utils_sales_order_util__WEBPACK_IMPORTED_MODULE_5__.SalesOrderUtil.checkoutDeliveryRequired(salesOrder) ? this.hardwareCheckoutFacade.checkoutDelivery(salesOrder.id) : (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(salesOrder);
      }
      throw new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_3__.HardwareCheckoutError(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_1__.CheckoutDeliveryError);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(salesOrder => {
      if (salesOrder) {
        // do not re-submit sales order if customer already tried to do payment
        const awaitsPayment = _utils_sales_order_util__WEBPACK_IMPORTED_MODULE_5__.SalesOrderUtil.orderAwaitsPayment(salesOrder);
        const submittedSalesOrder$ = awaitsPayment ? (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(salesOrder) : this.hardwareCheckoutFacade.submitSalesOrder(salesOrder.id);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.forkJoin)({
          awaitsPayment: (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(awaitsPayment),
          salesOrder: submittedSalesOrder$
        });
      }
      throw new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_3__.HardwareCheckoutError(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_1__.SubmitSalesOrderFailed);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(({
      awaitsPayment,
      salesOrder
    }) => {
      if (!awaitsPayment) {
        this.eventFacade.triggerAnalyticsClickEvent({
          name: 'order submitted'
        });
      }
      const homeDeliveryOrderItem = _utils_sales_order_util__WEBPACK_IMPORTED_MODULE_5__.SalesOrderUtil.getDeliveryOrderItem(salesOrder, _enums_order_item_action_enum__WEBPACK_IMPORTED_MODULE_6__.OrderItemActionEnum.ADD);
      if (homeDeliveryOrderItem) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.forkJoin)([(0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(salesOrder), this.hardwareCheckoutFacade.getAddressById(homeDeliveryOrderItem.chars['Postal Code']), this.hardwareCheckoutFacade.getAddressById(homeDeliveryOrderItem.chars['Street'])]);
      }
      throw new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_3__.HardwareCheckoutError(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_1__.NoHomeDeliveryOrderItem);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(([salesOrder, postalCodeUnit, streetUnit]) => {
      const deliveryAddress = _utils_address_util__WEBPACK_IMPORTED_MODULE_4__.AddressUtil.convertNcPostalAddressToDeliveryAddress(postalCodeUnit);
      deliveryAddress.street = streetUnit.name;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.forkJoin)([(0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(salesOrder), (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(deliveryAddress)]);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(([salesOrder, deliveryAddress]) => {
      const homeDeliveryOrderItem = _utils_sales_order_util__WEBPACK_IMPORTED_MODULE_5__.SalesOrderUtil.getDeliveryOrderItem(salesOrder, _enums_order_item_action_enum__WEBPACK_IMPORTED_MODULE_6__.OrderItemActionEnum.ADD);
      const urlWithoutParams = this.urlService.getCurrentUrl().split('?')[0];
      return this.hardwareCheckoutFacade.getPaymentRequestObject(_utils_payment_request_util__WEBPACK_IMPORTED_MODULE_7__.PaymentRequestUtil.getPaymentRequestObject(salesOrder, homeDeliveryOrderItem, urlWithoutParams, deliveryAddress, this.summaryFacade.getLanguage(), this.mediaQueryService.getDeviceName()));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(response => {
      const payment = response.payment;
      this.summaryFacade.setIngenicoForm({
        ACCEPTURL: payment.acceptURL,
        ALIAS: '',
        ALIASOPERATION: '',
        ALIASUSAGE: '',
        AMOUNT: payment.amount,
        BRAND: '',
        CANCELURL: payment.cancelURL,
        CN: payment.contactName,
        CURRENCY: payment.currency,
        DECLINEURL: payment.declineURL,
        DEVICE: payment.device,
        EMAIL: payment.email,
        EXCEPTIONURL: payment.exceptionURL,
        LANGUAGE: payment.language,
        ORDERID: payment.transactionId,
        OWNERADDRESS: payment.ownerAddress,
        OWNERCTY: payment.ownerCountry,
        OWNERTELNO: payment.ownerContactNumber,
        OWNERTOWN: payment.ownerTown,
        OWNERZIP: payment.ownerZip,
        PARAMPLUS: payment.paramPlus,
        PARAMVAR: payment.paramVar,
        PM: '',
        PMLISTTYPE: '',
        PSPID: payment.paymentServiceProviderId,
        SECRET: '',
        SHASIGN: response.signature,
        TP: payment.template
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(true);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(() => {
      this.summaryFacade.setIngenicoFormReady(true);
      return true;
    }));
  }
}

/***/ }),

/***/ 31398:
/*!*********************************************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/hardware-checkout/strategy/summary/summary-step-loaded.strategy.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SummaryStepLoadedStrategy: () => (/* binding */ SummaryStepLoadedStrategy)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_errors_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/errors.constants */ 66523);
/* harmony import */ var _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sales/hardware-checkout/data-access */ 77644);
/* harmony import */ var _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../classes/hardware-checkout-error.class */ 38978);
/* harmony import */ var _utils_strategy_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/strategy.util */ 68539);
/* harmony import */ var _utils_sales_order_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/sales-order.util */ 21199);
/* harmony import */ var _sales_summary_data_access__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sales/summary/data-access */ 94549);
/* harmony import */ var _sales_summary_data_access__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sales_summary_data_access__WEBPACK_IMPORTED_MODULE_7__);








class SummaryStepLoadedStrategy {
  constructor(hardwareCheckoutFacade) {
    this.hardwareCheckoutFacade = hardwareCheckoutFacade;
  }
  showLoader() {
    return false;
  }
  execute() {
    return this.hardwareCheckoutFacade.salesOrderFromState$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(salesOrder => {
      return salesOrder && _utils_sales_order_util__WEBPACK_IMPORTED_MODULE_6__.SalesOrderUtil.orderAwaitsPayment(salesOrder) ? this.resetSummaryState(salesOrder) : this.doNormalFlow(salesOrder);
    }));
  }
  doNormalFlow(salesOrder) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.forkJoin)({
      salesOrder: (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(salesOrder),
      customerAccountDetails: this.hardwareCheckoutFacade.customerAccountDetails$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1))
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(value => {
      if (value.salesOrder && value.customerAccountDetails) {
        return this.hardwareCheckoutFacade.updateOrderItemCharsHomeDelivery(value.salesOrder.id, value.customerAccountDetails);
      }
      throw new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_4__.HardwareCheckoutError(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_2__.UpdateHomeDeliveryCharsError);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(salesOrder => {
      if (salesOrder) {
        this.hardwareCheckoutFacade.setSalesOrderState(_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_3__.SalesOrderStateEnum.CHECKOUT_DELIVERY_FINISHED);
        this.hardwareCheckoutFacade.saveSalesOrder(salesOrder);
      } else {
        throw new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_4__.HardwareCheckoutError(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_2__.CouldNotStoreSalesOrderOnSummary);
      }
    }), _utils_strategy_util__WEBPACK_IMPORTED_MODULE_5__.StrategyUtil.resetContractSummaryInfo(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(() => true));
  }
  resetSummaryState(salesOrder) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(salesOrder).pipe(_utils_strategy_util__WEBPACK_IMPORTED_MODULE_5__.StrategyUtil.setSummaryDetails(this.hardwareCheckoutFacade), _utils_strategy_util__WEBPACK_IMPORTED_MODULE_5__.StrategyUtil.setSummaryDeliveryPersonalInfoFromRetrievedSalesOrder(this.hardwareCheckoutFacade), _utils_strategy_util__WEBPACK_IMPORTED_MODULE_5__.StrategyUtil.setSummaryDeliveryAddressFromRetrievedSalesOrder(this.hardwareCheckoutFacade), _utils_strategy_util__WEBPACK_IMPORTED_MODULE_5__.StrategyUtil.handleNotifications(this.hardwareCheckoutFacade), _utils_strategy_util__WEBPACK_IMPORTED_MODULE_5__.StrategyUtil.loadContractSummaryInfo(this.hardwareCheckoutFacade), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(() => this.hardwareCheckoutFacade.setSalesOrderState(_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_3__.SalesOrderStateEnum.CHECKOUT_DELIVERY_FINISHED)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(() => {
      return this.hardwareCheckoutFacade.ingenicoResultUtil$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(ingenicoResultUtil => {
        if (ingenicoResultUtil?.isFailed()) {
          this.hardwareCheckoutFacade.addSummaryGeneralNotification(_sales_summary_data_access__WEBPACK_IMPORTED_MODULE_7__.paymentErrorNotification);
        }
        return true;
      }));
    }));
  }
}

/***/ }),

/***/ 44487:
/*!*************************************************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/hardware-checkout/strategy/thank-you/thank-you-step-loaded.strategy.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThankYouStepLoadedStrategy: () => (/* binding */ ThankYouStepLoadedStrategy)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);

class ThankYouStepLoadedStrategy {
  constructor(eventFacade) {
    this.eventFacade = eventFacade;
  }
  execute() {
    this.eventFacade.triggerAnalyticsTransactionEvent();
    this.eventFacade.triggerAnalyticsSalesFlowEndEvent();
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(true);
  }
  showLoader() {
    return false;
  }
}

/***/ }),

/***/ 87550:
/*!******************************************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/hardware-checkout/strategy/waiting-for-state-update.strategy.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WaitingForStateUpdateStrategy: () => (/* binding */ WaitingForStateUpdateStrategy)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);

class WaitingForStateUpdateStrategy {
  showLoader() {
    return true;
  }
  execute() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(false);
  }
}

/***/ }),

/***/ 13234:
/*!******************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/hardware-checkout/utils/address.util.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressUtil: () => (/* binding */ AddressUtil)
/* harmony export */ });
class AddressUtil {
  static convertNcAddressToDeliveryAddress(address) {
    return {
      addressUnit: address,
      municipality: this.getAddressValue(address, 'Municipality'),
      postalCode: address.postalCode ? address.postalCode : '',
      street: this.getAddressValue(address, 'Street'),
      houseNumber: address.name,
      subHouseNumber: address.subHouseNumber ? address.subHouseNumber : undefined,
      box: address.boxNumber ? address.boxNumber : undefined,
      country: this.getAddressValue(address, 'Country')
    };
  }
  static convertNcPostalAddressToDeliveryAddress(address) {
    return {
      addressUnit: address,
      municipality: this.getAddressValue(address, 'Municipality'),
      postalCode: address.name ? address.name : '',
      street: '',
      houseNumber: '',
      subHouseNumber: undefined,
      box: undefined,
      country: this.getAddressValue(address, 'Country')
    };
  }
  static getUpdateDeliveryLocationBody(addressFieldValue) {
    if (addressFieldValue.street?.addressUnit) {
      if (!addressFieldValue || !addressFieldValue.geographical_address) {
        return undefined;
      }
      const {
        geographical_address
      } = addressFieldValue;
      const {
        boxNumber = '',
        floor
      } = geographical_address.box || {};
      const floorString = floor ? ` (${floor})` : '';
      const boxString = `${boxNumber}${floorString}`;
      return {
        Country: this.getAddressValueId(addressFieldValue.street?.addressUnit, 'Country'),
        'House Number': this.getFieldValueOrDefault(addressFieldValue.geographical_address?.housenumber),
        'Sub-house Number': this.getFieldValueOrDefault(addressFieldValue.geographical_address?.subhousenumber),
        'Box Number': boxString,
        'Municipality/Sub-municipality': this.getAddressValueId(addressFieldValue.street?.addressUnit, 'Municipality'),
        'Postal Code': this.getFieldValueOrDefault(addressFieldValue.municipality?.postalCode),
        Street: addressFieldValue.street?.addressUnit.id
      };
    }
    return undefined;
  }
  static convertFieldValueToDeliveryAddress(addressFieldValue) {
    if (!addressFieldValue || !addressFieldValue.geographical_address || !addressFieldValue.municipality || !addressFieldValue.street) {
      return undefined;
    }
    const {
      geographical_address,
      street,
      municipality
    } = addressFieldValue;
    if (!street?.addressUnit) {
      return undefined;
    }
    const {
      boxNumber = '',
      floor
    } = geographical_address.box || {};
    const floorString = floor ? ` (${floor})` : '';
    const boxString = `${boxNumber}${floorString}`;
    return {
      addressUnit: street?.addressUnit,
      country: this.getAddressValue(street.addressUnit, 'Country'),
      // Assuming getAddressValue handles undefined inputs
      postalCode: municipality.postalCode,
      municipality: municipality.location,
      street: street.value || '',
      houseNumber: geographical_address.housenumber || '',
      subHouseNumber: geographical_address.subhousenumber,
      box: boxString
    };
  }
  static getAddressValue(addressUnit, value) {
    if (addressUnit) {
      const foundValue = addressUnit.addressUnitChain?.find(addressUnit => addressUnit.type === value);
      if (foundValue) {
        return foundValue.name;
      }
    }
    return '';
  }
  static getAddressValueId(addressUnit, value) {
    const foundValue = addressUnit.addressUnitChain?.find(addressUnit => addressUnit.type === value);
    if (foundValue) {
      return foundValue.id;
    }
    return '';
  }
  static getFieldValueOrDefault(fieldValue) {
    return fieldValue ?? '';
  }
}

/***/ }),

/***/ 97589:
/*!********************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/hardware-checkout/utils/analytics.util.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalyticsUtil: () => (/* binding */ AnalyticsUtil)
/* harmony export */ });
class AnalyticsUtil {
  static enrichWithCommonAttributes(analyticsAttributes, attributes, cart) {
    const dataLayerAttributes = {
      ...(analyticsAttributes || {}),
      ...(attributes || {})
    };
    if (cart !== undefined) {
      dataLayerAttributes.cart = cart;
    }
    return dataLayerAttributes;
  }
}

/***/ }),

/***/ 16221:
/*!***********************************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/hardware-checkout/utils/customer-account-details.util.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerAccountDetailsUtil: () => (/* binding */ CustomerAccountDetailsUtil)
/* harmony export */ });
class CustomerAccountDetailsUtil {
  static getCustomerLocationId(customerAccountDetails, isSoho = false) {
    let locationId = undefined;
    let matchingContactMethod = undefined;
    if (customerAccountDetails) {
      const customerLocations = customerAccountDetails.customerLocations?.filter(location => !location.isPseudoLocation);
      const customerAddress = this.getCustomerAddress(customerAccountDetails, isSoho);
      if (customerAddress && customerLocations && customerLocations.length > 0) {
        matchingContactMethod = customerLocations.find(customerLocation => customerLocation.address.id === customerAddress.id);
      }
      if (matchingContactMethod) {
        locationId = matchingContactMethod.id;
      } else if (customerLocations && customerLocations.length > 0) {
        locationId = customerLocations[0].id;
      }
    }
    return locationId;
  }
  static getCustomerAddress(customerAccountDetails, isSoho) {
    if (isSoho) {
      return customerAccountDetails.legalAddress;
    }
    return customerAccountDetails.customerAddress;
  }
}

/***/ }),

/***/ 25822:
/*!****************************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/hardware-checkout/utils/customer-category.util.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerCategoryUtil: () => (/* binding */ CustomerCategoryUtil)
/* harmony export */ });
/* harmony import */ var _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sales/hardware-checkout/data-access */ 77644);
/* harmony import */ var _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/hardware-checkout-error.class */ 38978);
/* harmony import */ var _constants_errors_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/errors.constants */ 66523);



class CustomerCategoryUtil {
  static getCustomerCategory(name) {
    const residential = [_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_0__.ContactDetailsCustomerCategoryEnum.RESIDENTIAL, _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_0__.ContactDetailsCustomerCategoryEnum.EVENT_DEMO, _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_0__.ContactDetailsCustomerCategoryEnum.PRODUCTION_TEST];
    const business = [_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_0__.ContactDetailsCustomerCategoryEnum.PRODUCTION_TEST_BUSINESS, _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_0__.ContactDetailsCustomerCategoryEnum.PRD_TEST_BUSINESS, _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_0__.ContactDetailsCustomerCategoryEnum.SOHO];
    const foundResidential = residential.find(value => name === value);
    if (foundResidential) {
      return _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_0__.ContactDetailsCustomerCategoryEnum.RESIDENTIAL;
    }
    const foundBusiness = business.find(value => name === value);
    if (foundBusiness) {
      return _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_0__.ContactDetailsCustomerCategoryEnum.SOHO;
    }
    throw new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_1__.HardwareCheckoutError(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_2__.GetCustomerDataError);
  }
}

/***/ }),

/***/ 27663:
/*!*******************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/hardware-checkout/utils/delivery.util.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeliveryUtil: () => (/* binding */ DeliveryUtil)
/* harmony export */ });
/* harmony import */ var _sales_delivery_feat_delivery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sales/delivery/feat-delivery */ 52497);
/* harmony import */ var _sales_delivery_feat_delivery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sales_delivery_feat_delivery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _address_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./address.util */ 13234);
/* harmony import */ var _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/hardware-checkout-error.class */ 38978);
/* harmony import */ var _constants_errors_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/errors.constants */ 66523);




class DeliveryUtil {
  static createDeliveryItems(deliveryItems) {
    if (deliveryItems) {
      return this.convertDeliveryItems(deliveryItems);
    }
    return undefined;
  }
  static toDeliveryAddressChars(address) {
    if (address.addressUnit.type === 'Street') {
      return {
        'Municipality/Sub-municipality': _address_util__WEBPACK_IMPORTED_MODULE_1__.AddressUtil.getAddressValueId(address.addressUnit, 'Municipality'),
        Street: address.addressUnit.id,
        'House Number': address.houseNumber,
        'Sub-house Number': address.subHouseNumber || null,
        'Box Number': address.box || null,
        Country: _address_util__WEBPACK_IMPORTED_MODULE_1__.AddressUtil.getAddressValueId(address.addressUnit, 'Country')
      };
    } else if (address.addressUnit.type === 'Geographical Address') {
      return {
        'Municipality/Sub-municipality': _address_util__WEBPACK_IMPORTED_MODULE_1__.AddressUtil.getAddressValueId(address.addressUnit, 'Municipality'),
        'Postal Code': address.addressUnit.id,
        Street: _address_util__WEBPACK_IMPORTED_MODULE_1__.AddressUtil.getAddressValueId(address.addressUnit, 'Street'),
        'House Number': address.houseNumber,
        'Sub-house Number': address.subHouseNumber || null,
        'Box Number': address.box || null,
        Country: _address_util__WEBPACK_IMPORTED_MODULE_1__.AddressUtil.getAddressValueId(address.addressUnit, 'Country')
      };
    } else throw new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_2__.HardwareCheckoutError(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_3__.CouldNotParseAddress);
  }
  static toDeliveryPersonalInfoChars(personalInfo) {
    if (personalInfo) {
      return {
        'First Name': personalInfo.firstname,
        'Last Name': personalInfo.lastname,
        'Mobile Number': personalInfo.mobile,
        'E-Mail': personalInfo.email
      };
    }
    return undefined;
  }
  static convertDeliveryItems(deliveryItems) {
    if (deliveryItems) {
      const convertedDeliveryItems = [];
      deliveryItems.forEach(deliveryItem => {
        // Find the matching viewModel delivery type
        let matchingDeliveryItemType = _sales_delivery_feat_delivery__WEBPACK_IMPORTED_MODULE_0__.deliveryItemTypes.find(deliveryItemType => {
          return deliveryItemType.types.find(type => {
            return type === deliveryItem.type;
          });
        });
        if (!matchingDeliveryItemType) {
          matchingDeliveryItemType = _sales_delivery_feat_delivery__WEBPACK_IMPORTED_MODULE_0__.GenericItemType;
        }
        const existingConvertedDeliveryItem = convertedDeliveryItems.find(convertedDeliveryItem => {
          return convertedDeliveryItem.productType === matchingDeliveryItemType?.typeKey;
        });
        if (existingConvertedDeliveryItem) {
          existingConvertedDeliveryItem.quantity++;
        } else {
          convertedDeliveryItems.push({
            productType: matchingDeliveryItemType.typeKey,
            deliveryInfo: {
              name: matchingDeliveryItemType.labelText,
              iconType: matchingDeliveryItemType.iconType
            },
            quantity: 1
          });
        }
      });
      return convertedDeliveryItems;
    }
    return undefined;
  }
}

/***/ }),

/***/ 25037:
/*!*******************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/hardware-checkout/utils/discount.util.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DiscountUtil: () => (/* binding */ DiscountUtil)
/* harmony export */ });
/* harmony import */ var _sdata_sales_offer_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sdata-sales-offer.util */ 90605);
/* harmony import */ var _sales_order_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sales-order.util */ 21199);


class DiscountUtil {
  /**
   * Extracts items to discount and the remaining items.
   * @param orderItemsWithDiscounts - The array of order items with discounts.
   * @param usedDiscountSlots - The array of used discount slots.
   * @param maxSlots - The maximum number of discount slots available.
   * @returns An object containing itemsToDiscount and remainingItems arrays.
   */
  static getItemsToDiscountAndRemaining(orderItemsWithDiscounts, usedDiscountSlots, maxSlots = 5) {
    const unusedSlotsNumber = maxSlots - (usedDiscountSlots ? usedDiscountSlots.length : 0);
    let itemsToDiscount = [];
    let remainingItems = [];
    if (unusedSlotsNumber > 0) {
      // Sort the items by price in descending order
      orderItemsWithDiscounts.sort((a, b) => {
        const priceA = a.orderItem.orderItems && a.orderItem.orderItems[0] ? parseFloat(a.orderItem.orderItems[0].prices.oneTimeTotal.value) : 0;
        const priceB = b.orderItem.orderItems && b.orderItem.orderItems[0] ? parseFloat(b.orderItem.orderItems[0].prices.oneTimeTotal.value) : 0;
        return priceB - priceA;
      });
      // Get the items to discount
      itemsToDiscount = orderItemsWithDiscounts.slice(0, unusedSlotsNumber);
      // Get the other items that are not in itemsToDiscount
      const itemsToDiscountIds = new Set(itemsToDiscount.map(item => item.orderItem.id));
      remainingItems = orderItemsWithDiscounts.filter(item => !itemsToDiscountIds.has(item.orderItem.id));
    } else {
      remainingItems = orderItemsWithDiscounts;
    }
    return {
      itemsToDiscount,
      remainingItems
    };
  }
  static getDiscountedOrderItemsFromSalesOffer(salesOrder, sdataSalesOffer, action) {
    const salesOfferItemsWithDiscount = _sdata_sales_offer_util__WEBPACK_IMPORTED_MODULE_0__.SdataSalesOfferUtil.getSdataSalesOfferItemsWithDiscount(sdataSalesOffer);
    const hardwareOrderItem = _sales_order_util__WEBPACK_IMPORTED_MODULE_1__.SalesOrderUtil.getHardwareOrderItem(salesOrder);
    if (!hardwareOrderItem.orderItems) {
      throw new Error('Something is amiss with the order items.');
    }
    const orderItems = action ? hardwareOrderItem.orderItems.filter(orderItem => orderItem.action === action) : hardwareOrderItem.orderItems;
    return _sales_order_util__WEBPACK_IMPORTED_MODULE_1__.SalesOrderUtil.orderItemsWithMatchingDiscounts(orderItems, salesOfferItemsWithDiscount);
  }
}

/***/ }),

/***/ 63301:
/*!*****************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/hardware-checkout/utils/header.util.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderUtil: () => (/* binding */ HeaderUtil)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1261);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__);

class HeaderUtil {
  static createHttpHeaders(currentUrl) {
    let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders();
    httpHeaders = httpHeaders.set('x-alt-referer', currentUrl);
    httpHeaders = httpHeaders.set('X-Requested-With', 'XMLHttpRequest');
    return httpHeaders;
  }
}

/***/ }),

/***/ 3765:
/*!****************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/hardware-checkout/utils/omapi.util.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OmapiUtil: () => (/* binding */ OmapiUtil)
/* harmony export */ });
/* harmony import */ var _constants_omapi_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/omapi.constants */ 59911);
/* harmony import */ var _enums_omapi_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/omapi.enum */ 34702);
/* harmony import */ var _sales_order_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sales-order.util */ 21199);



class OmapiUtil {
  static isPreOrBackOrder(omapiQueryProducts) {
    const variantTagOptions = omapiQueryProducts.flatMap(omapiProduct => {
      return omapiProduct.variants.flatMap(variant => {
        return variant.tag.telenet.options;
      });
    });
    return variantTagOptions.some(option => {
      return _constants_omapi_constants__WEBPACK_IMPORTED_MODULE_0__.preAndBackOrderLabelTagKeys.includes(option.attributeKey);
    });
  }
  static getPreOrderNotification(omapiQueryProducts, language) {
    const isPreOrder = omapiQueryProducts.flatMap(omapiProduct => {
      return omapiProduct.variants.flatMap(variant => {
        return variant.tag.telenet.options.find(option => {
          return option.attributeKey === 'pre_order_label';
        });
      });
    }).filter(variant => variant).shift()?.preOrderDescription;
    if (isPreOrder?.localizedContent) {
      const message = OmapiUtil.getLocalisedContent(isPreOrder, language);
      if (message) {
        return message;
      }
    }
    return undefined;
  }
  static getBackOrderNotification(omapiQueryProducts, language) {
    const isBackOrder = omapiQueryProducts.flatMap(omapiProduct => {
      return omapiProduct.variants.flatMap(variant => {
        return variant.tag.telenet.options.find(option => {
          return option.attributeKey === 'back_order_label';
        });
      });
    }).filter(variant => variant).shift()?.backOrderDescription;
    if (isBackOrder?.localizedContent) {
      const message = OmapiUtil.getLocalisedContent(isBackOrder, language);
      if (message) {
        return message;
      }
    }
    return undefined;
  }
  static getLocalisedContent(content, language) {
    const message = content.localizedContent.find(content => {
      return content.locale.toLocaleLowerCase() === language.toLocaleLowerCase();
    });
    return message?.value?.[0];
  }
  static getProductMainImage(orderItem, omapiProducts) {
    const itemCode = orderItem.chars['Item Code'];
    return omapiProducts.flatMap(product => product.variants).find(product => product.productId === itemCode)?.images.find(image => image.attributeKey === _enums_omapi_enum__WEBPACK_IMPORTED_MODULE_1__.OmapiAttributeKeysEnum.MAIN_IMAGE);
  }
  static getProductVariant(orderItem, omapiProducts) {
    return omapiProducts.flatMap(omapiQueryProduct => omapiQueryProduct.variants).find(variant => variant.productId === _sales_order_util__WEBPACK_IMPORTED_MODULE_2__.SalesOrderUtil.getOrderItemItemCode(orderItem));
  }
}

/***/ }),

/***/ 82683:
/*!*********************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/hardware-checkout/utils/order-item.util.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderItemUtil: () => (/* binding */ OrderItemUtil)
/* harmony export */ });
class OrderItemUtil {
  static #_ = this.charMapping = {
    'Delivery Address': 'address',
    'Delivery Type': 'deliveryType',
    'Municipality/Sub-municipality': 'municipality',
    'Postal Code': 'postalCode',
    Street: 'street',
    'House Number': 'houseNumber',
    'Sub-house Number': 'subHouseNumber',
    'Box Number': 'box',
    'First Name': 'firstName',
    'Last Name': 'lastName',
    'Mobile Number': 'mobileNumber',
    'E-Mail': 'email'
  };
  static getDeliveryChars(orderItem) {
    const result = {};
    const data = orderItem.chars;
    for (const [key, value] of Object.entries(OrderItemUtil.charMapping)) {
      if (data[key]) {
        result[value] = data[key];
      }
    }
    return result;
  }
}

/***/ }),

/***/ 64550:
/*!**************************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/hardware-checkout/utils/payment-request.util.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentRequestUtil: () => (/* binding */ PaymentRequestUtil)
/* harmony export */ });
/* harmony import */ var _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/hardware-checkout-error.class */ 38978);
/* harmony import */ var _constants_errors_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/errors.constants */ 66523);


class PaymentRequestUtil {
  static getPaymentRequestObject(salesOrder, homeDeliveryOrderItem, urlWithoutParams, deliveryAddress, language, device) {
    let mobileNumber = '';
    if (homeDeliveryOrderItem?.chars['Mobile Number']) {
      mobileNumber = homeDeliveryOrderItem?.chars['Mobile Number'];
    } else {
      throw new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_0__.HardwareCheckoutError(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_1__.MandatoryFieldsAreMissing);
    }
    return {
      amount: Number(salesOrder.price.upfrontPaymentTotalForSecuredHomeDeliveryEquipment.value) + '',
      salesOrderId: salesOrder.id,
      personalInfo: PaymentRequestUtil.getPersonalInfoRequest(homeDeliveryOrderItem),
      address: {
        street: deliveryAddress?.street + '',
        municipality: deliveryAddress?.municipality + '',
        postalCode: deliveryAddress?.postalCode + ''
      },
      mobileNumber: mobileNumber,
      shopUrl: urlWithoutParams + '?orderid=' + salesOrder.id,
      language: language,
      deviceType: device
    };
  }
  static getPersonalInfoRequest(homeDeliveryOrderItem) {
    let firstName = '';
    let lastName = '';
    let email = '';
    if (homeDeliveryOrderItem?.chars['First Name'] && homeDeliveryOrderItem?.chars['Last Name'] && homeDeliveryOrderItem?.chars['E-Mail']) {
      firstName = homeDeliveryOrderItem.chars['First Name'];
      lastName = homeDeliveryOrderItem.chars['Last Name'];
      email = homeDeliveryOrderItem.chars['E-Mail'];
    } else {
      throw new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_0__.HardwareCheckoutError(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_1__.MandatoryFieldsAreMissing);
    }
    return {
      firstName: firstName,
      lastName: lastName,
      email: email
    };
  }
}

/***/ }),

/***/ 74600:
/*!************************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/hardware-checkout/utils/personal-info.util.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PersonalInfoUtil: () => (/* binding */ PersonalInfoUtil)
/* harmony export */ });
/* harmony import */ var _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sales/hardware-checkout/data-access */ 77644);
/* harmony import */ var _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/hardware-checkout-error.class */ 38978);
/* harmony import */ var _constants_errors_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/errors.constants */ 66523);



class PersonalInfoUtil {
  static getPersonalInfoFromIdentityAndCustomerAccount(personalIdentity, customerAccountDetails) {
    if (!customerAccountDetails) {
      throw new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_1__.HardwareCheckoutError(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_2__.CustomerAccountCouldNotBeHandled);
    }
    if (!personalIdentity) {
      throw new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_1__.HardwareCheckoutError(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_2__.PersonalIdentityCouldNotBeHandled);
    }
    const contractHolderContactDetails = _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_0__.CustomerAccountUtil.getContractHolder(customerAccountDetails);
    if (!contractHolderContactDetails) {
      throw new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_1__.HardwareCheckoutError(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_2__.CustomerAccountCouldNotBeHandled);
    }
    const {
      firstName,
      lastName
    } = this.getFirstAndLastName(personalIdentity);
    const {
      mobile,
      email
    } = this.getMobileAndEmail(personalIdentity);
    return {
      firstname: firstName ?? '',
      lastname: lastName ?? '',
      mobile: mobile ?? '',
      email: email ?? ''
    };
  }
  static getMobileAndEmail(personalIdentity) {
    const mobile = personalIdentity['Mobile Number'];
    const email = personalIdentity['E-Mail'];
    return {
      mobile,
      email
    };
  }
  static getFirstAndLastName(personalIdentity) {
    const firstName = personalIdentity['First Name'];
    const lastName = personalIdentity['Last Name'];
    return {
      firstName,
      lastName
    };
  }
}

/***/ }),

/***/ 21199:
/*!**********************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/hardware-checkout/utils/sales-order.util.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesOrderUtil: () => (/* binding */ SalesOrderUtil)
/* harmony export */ });
/* harmony import */ var _enums_business_domains_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/business-domains.enum */ 14166);
/* harmony import */ var _constants_errors_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/errors.constants */ 66523);
/* harmony import */ var _enums_order_item_action_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/order-item-action.enum */ 65890);
/* harmony import */ var _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sales/hardware-checkout/data-access */ 77644);
/* harmony import */ var _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../classes/hardware-checkout-error.class */ 38978);
/* harmony import */ var _omapi_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./omapi.util */ 3765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _order_item_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./order-item.util */ 82683);









const duration = 12;
class SalesOrderUtil {
  static getDiscountsThatAreUsedByOrderItems(salesOrder) {
    const discounts = [];
    const hardwareOrderItem = this.getHardwareOrderItem(salesOrder);
    const discountItems = salesOrder.discountItems;
    if (discountItems) {
      discountItems.forEach(discountItem => {
        hardwareOrderItem.orderItems?.find(orderItem => {
          return orderItem.orderItems?.find(childOrderItem => {
            if (discountItem.targetOrderItems.map(orderItem => orderItem.id).includes(childOrderItem.id)) {
              discounts.push(discountItem);
            }
          });
        });
      });
    }
    return discounts;
  }
  static getHardwareOrderItem(salesOrder, action) {
    let orderItems = salesOrder.orderItems;
    if (action) {
      orderItems = orderItems.filter(orderItem => orderItem.action === action);
    }
    const hardwareOrderItem = orderItems.find(orderItem => {
      return orderItem.offer.businessDomains.includes(_enums_business_domains_enum__WEBPACK_IMPORTED_MODULE_0__.BusinessDomainsEnum.HARDWARE_TLO);
    });
    if (!hardwareOrderItem) {
      throw new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_4__.HardwareCheckoutError(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_1__.NoHardwareItemsFound);
    }
    return hardwareOrderItem;
  }
  static getHardwareItemList(salesOrder) {
    const hardwareOrderItem = this.getHardwareOrderItem(salesOrder);
    return hardwareOrderItem.orderItems?.filter(orderItem => orderItem.action === _enums_order_item_action_enum__WEBPACK_IMPORTED_MODULE_2__.OrderItemActionEnum.ADD) || [];
  }
  static feasibilityCheckRequired(salesOrder) {
    return !!salesOrder.validationElements.find(element => element.typeOfProblem === _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_3__.ValidationElementEnum.FEASIBILITY_CHECK_REQUIRED);
  }
  static getDeliveryOrderItem(salesOrder, action) {
    return this.getDeliveryOrderItemFor(salesOrder, _enums_business_domains_enum__WEBPACK_IMPORTED_MODULE_0__.BusinessDomainsEnum.DELIVERY_METHOD, action);
  }
  static getDeliveryOrderItemFor(salesOrder, deliveryMethod, action) {
    let orderItems = salesOrder.orderItems;
    if (action) {
      orderItems = orderItems.filter(orderItem => orderItem.action === action);
    }
    const deliveryOrderItem = orderItems.find(orderItem => {
      return orderItem.offer.businessDomains.includes(deliveryMethod);
    });
    if (!deliveryOrderItem) {
      throw new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_4__.HardwareCheckoutError(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_1__.NoDeliveryOrderItemFound);
    }
    return deliveryOrderItem;
  }
  static getDiscountedOrderItems(salesOrder) {
    const discountedOrderItems = [];
    const hardwareOrderItemIds = this.getHardwareOrderItem(salesOrder)?.orderItems?.flatMap(orderItem => {
      if (orderItem.orderItems && orderItem.orderItems[0]) {
        return orderItem.orderItems[0].id;
      }
      return undefined;
    });
    salesOrder.discountItems.forEach(discountItem => {
      discountedOrderItems.push(...discountItem.targetOrderItems);
    });
    return discountedOrderItems.filter(orderItem => {
      return hardwareOrderItemIds?.includes(orderItem.id);
    });
  }
  static getDepreciationItems(salesOrder, isSoho) {
    const discountedItems = this.getDiscountedOrderItems(salesOrder);
    if (discountedItems) {
      return discountedItems.map(orderItem => {
        let depreciationItem;
        if (isSoho) {
          depreciationItem = {
            name: orderItem.name,
            duration: duration,
            price: Number(orderItem.prices.oneTimeDiscountWithoutTaxes.value)
          };
        } else {
          depreciationItem = {
            name: orderItem.name,
            duration: duration,
            price: Number(orderItem.prices.oneTimeDiscount.value)
          };
        }
        return depreciationItem;
      });
    }
    return [];
  }
  static getSummaryPrices(salesOrder, isSoho) {
    const deliveryOrderItem = salesOrder.orderItems.find(orderItem => {
      return orderItem.offer.businessDomains.some(businessDomain => businessDomain === _enums_business_domains_enum__WEBPACK_IMPORTED_MODULE_0__.BusinessDomainsEnum.HOME_DELIVERY);
    });
    const zeroPrice = {
      value: '0.00',
      currency: {
        name: 'Euro',
        code: 'EU'
      }
    };
    const findEtfItems = (salesOrder, useTaxes) => {
      return salesOrder.orderItems.filter(orderItem => orderItem.offer.businessDomains.includes(_enums_business_domains_enum__WEBPACK_IMPORTED_MODULE_0__.BusinessDomainsEnum.ETF) && orderItem.action === _enums_order_item_action_enum__WEBPACK_IMPORTED_MODULE_2__.OrderItemActionEnum.ADD).map(orderItem => ({
        labelKey: 'ng.sales-checkout.shopping-cart.lbl.cancellation-fee',
        price: useTaxes ? orderItem.prices.oneTimeTotal : orderItem.prices.oneTimeTotalWithoutTaxes,
        isMonthly: false,
        productName: orderItem.chars['Device Name']
      }));
    };
    const calculateEtfTotal = etfItems => {
      return etfItems.map(item => item.price).reduce((total, price) => ({
        value: parseFloat(total.value) + parseFloat(price.value) + '',
        currency: price.currency
      }), zeroPrice);
    };
    const etfItemsInclVat = findEtfItems(salesOrder, true);
    const summaryPrices = {
      totals: {
        deliveryCost: deliveryOrderItem?.prices.oneTimeDiscountedWithoutTaxes || zeroPrice,
        upfrontCost: salesOrder.price.upfrontPaymentTotalForSecuredHomeDeliveryEquipment,
        etfPrices: etfItemsInclVat,
        etfTotal: calculateEtfTotal(etfItemsInclVat)
      },
      vatInclusive: !isSoho
    };
    if (isSoho) {
      const etfItemsSoho = findEtfItems(salesOrder, false);
      const etfTotalSoho = calculateEtfTotal(etfItemsSoho);
      summaryPrices.subTotals = {
        deliveryCost: deliveryOrderItem?.prices.oneTimeDiscounted || zeroPrice,
        upfrontCost: salesOrder.price.upfrontPaymentTotalForHomeDeliveryWithoutTaxes,
        etfPrices: etfItemsSoho,
        etfTotal: etfTotalSoho
      };
    }
    return summaryPrices;
  }
  static getOrderItemDiscountRuleByTarget(orderItem, rules) {
    return rules.find(rule => {
      return orderItem.orderItems?.find(childOrderItem => {
        return rule.targetOrderItemIds.includes(childOrderItem.id);
      });
    });
  }
  static getOrderItemDiscountRule(orderItemWithMatchingDiscount, rules) {
    const {
      orderItem,
      customerChosenDiscount
    } = orderItemWithMatchingDiscount;
    return rules.find(rule => {
      const isTargeted = orderItem.orderItems?.some(childOrderItem => rule.targetOrderItemIds.includes(childOrderItem.id));
      const isDiscountMatch = rule.discount.id === customerChosenDiscount.id || rule.slotName === customerChosenDiscount.type;
      return isTargeted && isDiscountMatch;
    });
  }
  static getOrderItemItemCodes(orderItem) {
    let orderItemCodes = undefined;
    if (orderItem) {
      orderItemCodes = orderItem.orderItems?.filter(orderItem => orderItem.action === _enums_order_item_action_enum__WEBPACK_IMPORTED_MODULE_2__.OrderItemActionEnum.ADD)?.map(orderItem => {
        return SalesOrderUtil.getOrderItemItemCode(orderItem);
      }).filter(value => {
        return typeof value === 'string';
      });
    }
    return orderItemCodes;
  }
  static getOrderItemItemCode(orderItem) {
    return orderItem.chars['Item Code'];
  }
  static getDiscountRuleByTargetOrderId(rules, targetOrderItemId) {
    return rules.find(rule => {
      return rule.targetOrderItemIds.includes(targetOrderItemId);
    });
  }
  static isBigItemDeliveryOrder(salesOrder, products) {
    return SalesOrderUtil.getHardwareItemList(salesOrder).some(orderItem => _omapi_util__WEBPACK_IMPORTED_MODULE_5__.OmapiUtil.getProductVariant(orderItem, products || [])?.extraAtHomeDelivery || false);
  }
  static hasMultipleItems(salesOrder) {
    const orderItemsToBeAdded = this.getHardwareItemList(salesOrder);
    return orderItemsToBeAdded.length > 1;
  }
  static handleNcErrors() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.pipe)((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(result => {
      if (this.isNcError(result)) {
        const errorObject = _constants_errors_constants__WEBPACK_IMPORTED_MODULE_1__.NcErrors.find(error => error.key === result.errorCode);
        if (errorObject) {
          throw new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_4__.HardwareCheckoutError(errorObject.error);
        }
        throw new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_4__.HardwareCheckoutError(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_1__.GenericError);
      }
      return result;
    }));
  }
  static isNcError(result) {
    if (typeof result === 'object' && result !== null) {
      const error = result;
      return typeof error.errorCode === 'string' && typeof error.errorType === 'string' && typeof error.errorMessage === 'string';
    }
    return false;
  }
  static createSummaryOrderItems(orderItems, discountItems, omapiQueryProducts, omapiProducts, isSoho, locale) {
    const summaryOrderItems = [];
    orderItems.filter(orderItem => orderItem.action === _enums_order_item_action_enum__WEBPACK_IMPORTED_MODULE_2__.OrderItemActionEnum.ADD).forEach(orderItem => {
      let summaryOrderItem;
      if (orderItem.orderItems) {
        const childOrderItem = orderItem.orderItems[0];
        const discountLabel = this.getOmapiDiscountLabelByTargetOrderId(discountItems, omapiProducts, orderItem, locale);
        const orderItemName = this.getLocalizedOmapiQueryProductName(orderItem, childOrderItem, omapiQueryProducts, locale);
        summaryOrderItem = {
          id: childOrderItem.id,
          name: orderItemName,
          prices: this.getSummaryOrderPrices(childOrderItem, isSoho)
        };
        if (discountLabel) {
          summaryOrderItem.discount = this.getSummaryOrderItemDiscount(discountLabel, childOrderItem, isSoho);
        }
        const orderItemMainImage = _omapi_util__WEBPACK_IMPORTED_MODULE_5__.OmapiUtil.getProductMainImage(orderItem, omapiQueryProducts);
        if (orderItemMainImage && orderItem && orderItem.orderItems) {
          summaryOrderItem.mainImageUrl = orderItemMainImage.value;
        }
        summaryOrderItems.push(summaryOrderItem);
      }
    });
    return summaryOrderItems;
  }
  static getDiscountByTargetOrderId(discountItems, orderItem) {
    let foundDiscount = undefined;
    if (orderItem && orderItem.orderItems) {
      const orderIdemTargetId = orderItem.orderItems[0].id;
      foundDiscount = discountItems.flatMap(discountItem => {
        return {
          discountId: discountItem.discountId,
          targetOrderItemIds: discountItem.targetOrderItems.flatMap(targetOrderItem => targetOrderItem.id)
        };
      }).find(flattenedDiscount => {
        return flattenedDiscount.targetOrderItemIds.includes(orderIdemTargetId);
      })?.discountId;
    }
    return foundDiscount;
  }
  static orderAwaitsPayment(salesOrder) {
    return salesOrder?.status === 'Waiting for payment';
  }
  static orderItemsWithMatchingDiscounts(orderItems, salesOffers) {
    const offerMap = new Map(salesOffers.map(offer => [offer.itemCode, offer.customerChosenDiscount]));
    return orderItems.map(item => {
      const customerChosenDiscount = offerMap.get(item.chars['Item Code']);
      if (customerChosenDiscount) {
        return {
          orderItem: item,
          customerChosenDiscount: customerChosenDiscount
        };
      }
      return null;
    }).filter(item => item !== null); // Filter out null values
  }
  static getSummaryOrderItemDiscount(associatedDiscount, childOrderItem, isSoho) {
    if (isSoho) {
      return {
        label: associatedDiscount,
        price: childOrderItem.prices.oneTimeDiscountWithoutTaxes
      };
    }
    return {
      label: associatedDiscount,
      price: childOrderItem.prices.oneTimeDiscount
    };
  }
  static getSummaryOrderPrices(childOrderItem, isSoho) {
    if (isSoho) {
      return {
        total: childOrderItem.prices.oneTimeTotalWithoutTaxes,
        discount: childOrderItem.prices.oneTimeDiscountWithoutTaxes,
        discounted: childOrderItem.prices.oneTimeDiscountedWithoutTaxes
      };
    }
    return {
      total: childOrderItem.prices.oneTimeTotal,
      discount: childOrderItem.prices.oneTimeDiscount,
      discounted: childOrderItem.prices.oneTimeDiscounted
    };
  }
  static getOmapiDiscountLabelByTargetOrderId(discountItems, omapiProducts, orderItem, locale) {
    const discountId = this.getDiscountByTargetOrderId(discountItems, orderItem);
    const discountOmapiProduct = omapiProducts.find(omapiProduct => omapiProduct.productId === discountId);
    return discountOmapiProduct?.localizedContent?.find(content => content.locale.toLocaleLowerCase() === locale)?.name;
  }
  static getLocalizedOmapiQueryProductName(parentOrderItem, childOrderItem, omapiQueryProducts, locale) {
    const omapiQueryProductVariant = _omapi_util__WEBPACK_IMPORTED_MODULE_5__.OmapiUtil.getProductVariant(parentOrderItem, omapiQueryProducts);
    const localizedContent = omapiQueryProductVariant?.shortDescription?.localizedContent.find(shortDescriptionLocalized => shortDescriptionLocalized.locale.toLocaleLowerCase() === locale);
    const productBrand = omapiQueryProductVariant?.manBrand.localizedContent.find(languageOption => languageOption.locale.toLocaleLowerCase() === locale)?.value?.[0];
    return `${productBrand ? productBrand + ' ' : ''}${localizedContent?.data || childOrderItem.name}`;
  }
  static getDeliveryChars(salesOrder) {
    const orderItem = this.getDeliveryOrderItem(salesOrder);
    return _order_item_util__WEBPACK_IMPORTED_MODULE_8__.OrderItemUtil.getDeliveryChars(orderItem);
  }
  static checkoutDeliveryRequired(salesOrder) {
    return salesOrder.validationElements.some(element => element.typeOfProblem === _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_3__.ValidationElementEnum.CHECKOUT_DELIVERY_REQUIRED);
  }
}

/***/ }),

/***/ 90605:
/*!****************************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/hardware-checkout/utils/sdata-sales-offer.util.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SdataSalesOfferUtil: () => (/* binding */ SdataSalesOfferUtil)
/* harmony export */ });
class SdataSalesOfferUtil {
  static getSdataSalesOfferItemsWithDiscount(sdataSalesOffer) {
    return sdataSalesOffer.offers.filter(offer => offer.customerChosenDiscount && offer.customerChosenDiscount.type);
  }
}

/***/ }),

/***/ 68539:
/*!*******************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/hardware-checkout/utils/strategy.util.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StrategyUtil: () => (/* binding */ StrategyUtil)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sales/hardware-checkout/data-access */ 77644);
/* harmony import */ var _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sales_order_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sales-order.util */ 21199);
/* harmony import */ var _constants_errors_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/errors.constants */ 66523);
/* harmony import */ var _address_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./address.util */ 13234);
/* harmony import */ var _enums_order_item_action_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../enums/order-item-action.enum */ 65890);
/* harmony import */ var _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../classes/hardware-checkout-error.class */ 38978);
/* harmony import */ var _delivery_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./delivery.util */ 27663);









class StrategyUtil {
  static checkFeasibility(hardwareCheckoutFacade) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.pipe)((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(salesOrder => {
      if (_sales_order_util__WEBPACK_IMPORTED_MODULE_3__.SalesOrderUtil.feasibilityCheckRequired(salesOrder)) {
        return hardwareCheckoutFacade.checkFeasibility(salesOrder.id);
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(salesOrder);
    }));
  }
  static checkEligibility(hardwareCheckoutFacade) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.pipe)((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(salesOrder => {
      return hardwareCheckoutFacade.checkEligibility(salesOrder.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(result => {
        if (result.length > 0) {
          throw new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_7__.HardwareCheckoutError(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_4__.EligibilityError);
        }
        return salesOrder;
      }));
    }));
  }
  static checkContractSummary(hardwareCheckoutFacade) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.pipe)((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(salesOrder => {
      return hardwareCheckoutFacade.checkContractSummary(salesOrder.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(result => {
        hardwareCheckoutFacade.setContractSummaryRequired(result.isRequired);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(() => {
        return salesOrder;
      }));
    }));
  }
  static handleNotifications(hardwareCheckoutFacade) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.pipe)((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(salesOrder => {
      return hardwareCheckoutFacade.omapiQueryProducts$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(products => {
        hardwareCheckoutFacade.setDeliveryNotifications(salesOrder, products);
        hardwareCheckoutFacade.setSummaryNotifications(salesOrder, products);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(() => salesOrder));
    }));
  }
  static handleDelivery(hardwareCheckoutFacade) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.pipe)((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(salesOrder => {
      return hardwareCheckoutFacade.getDeliveryOptions(salesOrder.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(deliveryMethods => {
        return {
          salesOrder: salesOrder,
          deliveryMethods: deliveryMethods
        };
      }));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(res => {
      return hardwareCheckoutFacade.calculateDelivery(res.salesOrder.id, res.deliveryMethods);
    }));
  }
  static setSummaryDeliveryPersonalInfoFromRetrievedSalesOrder(hardwareCheckoutFacade) {
    return source => source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(salesOrder => {
      const orderItemDeliveryChars = _sales_order_util__WEBPACK_IMPORTED_MODULE_3__.SalesOrderUtil.getDeliveryChars(salesOrder);
      if (orderItemDeliveryChars.firstName && orderItemDeliveryChars.lastName) {
        hardwareCheckoutFacade.setSummaryDeliveryPersonalInfo({
          firstname: orderItemDeliveryChars.firstName ? orderItemDeliveryChars.firstName : '',
          lastname: orderItemDeliveryChars.lastName,
          mobile: orderItemDeliveryChars.mobileNumber ? orderItemDeliveryChars.mobileNumber : '',
          email: orderItemDeliveryChars.email ? orderItemDeliveryChars.email : ''
        });
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(salesOrder);
    }));
  }
  static resetContractSummaryInfo() {
    return source => source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(salesOrder => {
      window.sessionStorage.removeItem(_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_2__.SessionStorageConstants.CHECKOUT_CONTRACT_SUMMARY_URL);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(salesOrder);
    }));
  }
  static loadContractSummaryInfo(hardwareCheckoutFacade) {
    return source => source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(salesOrder => {
      const contractSummaryRequired = (window.sessionStorage.getItem(_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_2__.SessionStorageConstants.CHECKOUT_CONTRACT_SUMMARY_REQUIRED) ?? 'false') === 'true';
      hardwareCheckoutFacade.setContractSummaryRequired(contractSummaryRequired);
      const contractSummaryUrl = window.sessionStorage.getItem(_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_2__.SessionStorageConstants.CHECKOUT_CONTRACT_SUMMARY_URL);
      if (contractSummaryUrl) {
        hardwareCheckoutFacade.setContractSummaryUrl(contractSummaryUrl);
      }
      hardwareCheckoutFacade.setContractSummaryGenerationNotPossible();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(salesOrder);
    }));
  }
  static setSummaryDeliveryAddressFromRetrievedSalesOrder(hardwareCheckoutFacade) {
    return source => source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(salesOrder => {
      const deliveryAddress = _sales_order_util__WEBPACK_IMPORTED_MODULE_3__.SalesOrderUtil.getDeliveryChars(salesOrder);
      if (!deliveryAddress.postalCode || !deliveryAddress.municipality || !deliveryAddress.street) {
        throw new Error('Incomplete delivery address');
      }
      const postalCode$ = hardwareCheckoutFacade.getAddressById(deliveryAddress.postalCode);
      const street$ = hardwareCheckoutFacade.getAddressById(deliveryAddress.street);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.forkJoin)({
        postalCode$,
        street$
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(({
        postalCode$,
        street$
      }) => {
        street$.postalCode = postalCode$.name;
        const updatedAddress = {
          addressUnit: street$,
          country: _address_util__WEBPACK_IMPORTED_MODULE_5__.AddressUtil.getAddressValue(street$, 'Country'),
          box: deliveryAddress.box ? deliveryAddress.box : '',
          subHouseNumber: deliveryAddress.subHouseNumber ? deliveryAddress.subHouseNumber : '',
          houseNumber: deliveryAddress.houseNumber ? deliveryAddress.houseNumber : '',
          municipality: _address_util__WEBPACK_IMPORTED_MODULE_5__.AddressUtil.getAddressValue(street$, 'Municipality'),
          postalCode: postalCode$.name ? postalCode$.name : '',
          street: street$.name
        };
        hardwareCheckoutFacade.setSummaryDeliveryAddress(updatedAddress);
        return salesOrder;
      }));
    }));
  }
  static createHardwareItems(hardwareCheckoutFacade) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.pipe)((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(salesOrder => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.forkJoin)({
        salesOrder: (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(salesOrder),
        customerType: hardwareCheckoutFacade.customerType$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1))
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(({
      salesOrder,
      customerType
    }) => {
      try {
        _sales_order_util__WEBPACK_IMPORTED_MODULE_3__.SalesOrderUtil.getHardwareOrderItem(salesOrder);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.forkJoin)({
          salesOrder: (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(salesOrder),
          salesOffer: hardwareCheckoutFacade.salesOffer$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1))
        });
      } catch (e) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.forkJoin)({
          salesOrder: hardwareCheckoutFacade.createHardwareTLO(salesOrder.id, customerType),
          salesOffer: hardwareCheckoutFacade.salesOffer$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1))
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
          if (error instanceof _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_7__.HardwareCheckoutError) {
            throw error;
          } else {
            throw new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_7__.HardwareCheckoutError(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_4__.OrderItemCreationFailed);
          }
        }));
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(({
      salesOrder,
      salesOffer
    }) => {
      const hardwareOrderItem = _sales_order_util__WEBPACK_IMPORTED_MODULE_3__.SalesOrderUtil.getHardwareOrderItem(salesOrder);
      if (!hardwareOrderItem) {
        throw new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_7__.HardwareCheckoutError(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_4__.OrderItemCreationFailed);
      }
      if (!salesOffer) {
        throw new Error('Sales offer not found');
      }
      const orderItems = salesOffer.offers.map(orderItem => {
        return hardwareCheckoutFacade.addOrderItem(salesOrder.id, hardwareOrderItem.id, orderItem.itemCode);
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.forkJoin)(orderItems);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(salesOrders => {
      const lastSalesOrder = salesOrders.find(salesOrder => {
        const hardwareOrderItem = _sales_order_util__WEBPACK_IMPORTED_MODULE_3__.SalesOrderUtil.getHardwareOrderItem(salesOrder);
        return hardwareOrderItem?.orderItems?.filter(orderItem => orderItem.action === _enums_order_item_action_enum__WEBPACK_IMPORTED_MODULE_6__.OrderItemActionEnum.ADD)?.length === salesOrders.length;
      });
      if (!lastSalesOrder) {
        throw new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_7__.HardwareCheckoutError(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_4__.OrderItemCreationFailed);
      }
      return lastSalesOrder;
    }));
  }
  static updateDeliveryChars(hardwareCheckoutFacade) {
    return (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(salesOrder => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.forkJoin)({
        personalInfo: hardwareCheckoutFacade.deliveryPersonalInfo$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1)),
        deliveryAddress: hardwareCheckoutFacade.deliveryAddress$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1))
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(({
        personalInfo,
        deliveryAddress
      }) => {
        if (personalInfo && deliveryAddress) {
          const updatePersonalDeliveryChars = _delivery_util__WEBPACK_IMPORTED_MODULE_8__.DeliveryUtil.toDeliveryPersonalInfoChars(personalInfo);
          const updatedDeliveryAddressChars = _delivery_util__WEBPACK_IMPORTED_MODULE_8__.DeliveryUtil.toDeliveryAddressChars(deliveryAddress);
          const updateDeliveryCharsRequest = {
            ...updatePersonalDeliveryChars,
            ...updatedDeliveryAddressChars
          };
          if (salesOrder) {
            const deliveryOrderItemId = _sales_order_util__WEBPACK_IMPORTED_MODULE_3__.SalesOrderUtil.getDeliveryOrderItem(salesOrder, _enums_order_item_action_enum__WEBPACK_IMPORTED_MODULE_6__.OrderItemActionEnum.ADD);
            return hardwareCheckoutFacade.updateDeliveryChars(salesOrder.id, deliveryOrderItemId.id, updateDeliveryCharsRequest).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(() => salesOrder));
          }
          throw new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_7__.HardwareCheckoutError(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_4__.SalesOrderNotSet);
        }
        throw new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_7__.HardwareCheckoutError(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_4__.CouldNotUpdateInstallationLocation);
      }));
    });
  }
  static setSummaryDetails(hardwareCheckoutFacade) {
    return (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(salesOrder => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.forkJoin)({
        personalInfo: hardwareCheckoutFacade.deliveryPersonalInfo$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1)),
        contactAddress: hardwareCheckoutFacade.deliveryContactAddress$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1)),
        omapiProducts: hardwareCheckoutFacade.omapiProducts$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1)),
        omapiQueryProducts: hardwareCheckoutFacade.omapiQueryProducts$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1)),
        customerType: hardwareCheckoutFacade.customerType$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1))
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(({
        personalInfo,
        contactAddress,
        omapiProducts,
        omapiQueryProducts,
        customerType
      }) => {
        if (personalInfo && contactAddress) {
          hardwareCheckoutFacade.setSummaryDeliveryInfo(personalInfo, contactAddress);
        }
        const hardwareOrderItems = _sales_order_util__WEBPACK_IMPORTED_MODULE_3__.SalesOrderUtil.getHardwareOrderItem(salesOrder);
        if (hardwareOrderItems && hardwareOrderItems.orderItems) {
          hardwareCheckoutFacade.setSummaryViewModel(salesOrder, hardwareOrderItems.orderItems, omapiProducts || [], omapiQueryProducts ?? [], customerType === _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_2__.CustomerTypeEnum.SOHO);
        }
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(() => salesOrder));
    });
  }
  static handleBillingAccount(hardwareCheckoutFacade) {
    return (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(() => {
      return hardwareCheckoutFacade.getBillingAccounts().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(billingAccounts => {
        if (billingAccounts.length === 0) {
          throw new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_7__.HardwareCheckoutError(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_4__.NoBillingAccount);
        }
        hardwareCheckoutFacade.setBillingAccounts(billingAccounts);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(billingAccounts => {
        const defaultBillingAccount = billingAccounts?.find(billingAccount => {
          return billingAccount.defaultBillingAccount.name === 'Yes';
        });
        if (defaultBillingAccount) {
          return hardwareCheckoutFacade.defaultBillingAccount$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(defaultBillingAccount => {
            if (defaultBillingAccount) {
              return hardwareCheckoutFacade.getAddressById(defaultBillingAccount.billingAddress.id);
            } else {
              throw new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_7__.HardwareCheckoutError(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_4__.NoBillingAccount);
            }
          }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(billingAddress => {
            hardwareCheckoutFacade.setSummaryInvoiceInfo(_address_util__WEBPACK_IMPORTED_MODULE_5__.AddressUtil.convertNcAddressToDeliveryAddress(billingAddress));
          }));
        }
        throw new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_7__.HardwareCheckoutError(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_4__.NoBillingAccount);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(() => true));
    });
  }
  static processSalesOrderToDeliveryCalculated(hardwareCheckoutFacade) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.pipe)(StrategyUtil.checkFeasibility(hardwareCheckoutFacade), StrategyUtil.handleDelivery(hardwareCheckoutFacade), StrategyUtil.checkEligibility(hardwareCheckoutFacade), StrategyUtil.checkContractSummary(hardwareCheckoutFacade), StrategyUtil.setOmapiDetails(hardwareCheckoutFacade), StrategyUtil.handleNotifications(hardwareCheckoutFacade), StrategyUtil.setSummaryDetails(hardwareCheckoutFacade), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(salesOrder => {
      const hardwareOrderItems = _sales_order_util__WEBPACK_IMPORTED_MODULE_3__.SalesOrderUtil.getHardwareOrderItem(salesOrder);
      if (hardwareOrderItems && hardwareOrderItems.orderItems) {
        hardwareCheckoutFacade.saveSalesOrder(salesOrder);
        hardwareCheckoutFacade.setSalesOrderState(_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_2__.SalesOrderStateEnum.DELIVERY_CALCULATED);
      } else {
        throw new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_7__.HardwareCheckoutError(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_4__.NoHardwareItemsFound);
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(() => true));
  }
  static setOmapiDetails(hardwareCheckoutFacade) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.pipe)((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(salesOrder => {
      const hardwareSalesOrder = _sales_order_util__WEBPACK_IMPORTED_MODULE_3__.SalesOrderUtil.getHardwareOrderItem(salesOrder);
      const productIds = _sales_order_util__WEBPACK_IMPORTED_MODULE_3__.SalesOrderUtil.getOrderItemItemCodes(hardwareSalesOrder);
      if (productIds) {
        return hardwareCheckoutFacade.getOmapiQueryProducts(productIds).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(rawOmapiQueryProduct => {
          hardwareCheckoutFacade.setOmapiQueryProducts(rawOmapiQueryProduct);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(() => {
          return salesOrder;
        }));
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(salesOrder);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(salesOrder => {
      const discountItems = _sales_order_util__WEBPACK_IMPORTED_MODULE_3__.SalesOrderUtil.getDiscountsThatAreUsedByOrderItems(salesOrder);
      if (discountItems && discountItems.length > 0) {
        const omapiDiscountItemRequests = discountItems.map(discountItem => {
          return hardwareCheckoutFacade.getOmapiProduct(discountItem.discountId);
        });
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.forkJoin)(omapiDiscountItemRequests).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(omapiProducts => {
          hardwareCheckoutFacade.setOmapiProducts(omapiProducts);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(() => {
          return salesOrder;
        }));
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(salesOrder);
    }));
  }
  static setSalesOrderAsAbandonable(hardwareCheckoutFacade) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.pipe)((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(salesOrder => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.forkJoin)({
        referrerUrl: hardwareCheckoutFacade.referrerUrl$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1)),
        customerAccountDetails: hardwareCheckoutFacade.customerAccountDetails$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1))
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(({
        referrerUrl,
        customerAccountDetails
      }) => {
        if (customerAccountDetails && referrerUrl) {
          return hardwareCheckoutFacade.setSalesorderAsAbandonable(salesOrder.id, customerAccountDetails.id, referrerUrl);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(salesOrder);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(() => salesOrder));
    }));
  }
  static applyDiscountsRecursively(hardwareCheckoutFacade, orderItemsWithMatchingDiscounts, salesOrder) {
    if (orderItemsWithMatchingDiscounts.length === 0) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(salesOrder);
    }
    const currentItem = orderItemsWithMatchingDiscounts.shift();
    if (!currentItem) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(salesOrder);
    }
    const matchingRule = _sales_order_util__WEBPACK_IMPORTED_MODULE_3__.SalesOrderUtil.getOrderItemDiscountRule(currentItem, salesOrder.rules);
    if (!matchingRule) {
      throw new _classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_7__.HardwareCheckoutError(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_4__.DiscountRuleNotFound);
    }
    return hardwareCheckoutFacade.addDiscount(salesOrder.id, matchingRule.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.concatMap)(updatedSalesOrder => this.applyDiscountsRecursively(hardwareCheckoutFacade, orderItemsWithMatchingDiscounts, updatedSalesOrder)));
  }
}

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



/***/ })

}])
//# sourceMappingURL=apps_sales_sales-mfe_src_app_hardware-checkout_hardware-checkout_component_ts.js.map