(self["webpackChunksales_mfe"] = self["webpackChunksales_mfe"] || []).push([["apps_sales_sales-mfe_src_app_internet-checkout_internet-checkout_component_ts"],{

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

/***/ 46492:
/*!***********************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/internet-checkout/classes/action-executer.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionProcessor: () => (/* binding */ ActionProcessor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);


class ActionProcessor {
  constructor(internetCheckoutFacade) {
    this.internetCheckoutFacade = internetCheckoutFacade;
  }
  executeActions(stateActions) {
    // Changed return type to any for general use
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.from)(stateActions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.concatMap)(action => this.executeSingleAction(action)));
  }
  executeSingleAction(action) {
    // Handling the execution of each action
    if (action.executor) {
      // Call the executor with the service and wrap it in an observable context if not already an observable
      const operation = action.executor(this.internetCheckoutFacade); // This should be a UnaryFunction<Observable<any>, Observable<any>>
      return this.internetCheckoutFacade.salesOrder$.pipe(operation,
      // Apply the operation provided by the executor
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
        console.error(`Error executing action for ${action.name}:`, error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(`Error in action: ${action.name}`); // Continue stream with error info or a default value on error
      }));
    } else {
      console.warn(`No executor defined for action: ${action.name}`);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(`No executor for: ${action.name}`); // Return info if no executor
    }
  }
}

/***/ }),

/***/ 86755:
/*!*************************************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/internet-checkout/classes/internet-checkout-error.class.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InternetCheckoutErrorClass: () => (/* binding */ InternetCheckoutErrorClass)
/* harmony export */ });
class InternetCheckoutErrorClass extends Error {
  constructor(errorObject) {
    super(errorObject.key);
    this.errorObject = errorObject;
  }
}

/***/ }),

/***/ 96814:
/*!**************************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/internet-checkout/constants/errors.constants.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventStrategyError: () => (/* binding */ EventStrategyError),
/* harmony export */   GenericError: () => (/* binding */ GenericError),
/* harmony export */   errorButtonPrefix: () => (/* binding */ errorButtonPrefix),
/* harmony export */   errorMessagePrefix: () => (/* binding */ errorMessagePrefix),
/* harmony export */   errorTitlePrefix: () => (/* binding */ errorTitlePrefix)
/* harmony export */ });
/* harmony import */ var _enums_error_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/error.enum */ 62981);

const errorTitlePrefix = 'ng.sales-checkout.title.error-';
const errorMessagePrefix = 'ng.sales-checkout.text.error-';
const errorButtonPrefix = 'ng.sales-checkout.button.error-';
const GenericError = {
  key: 'HC-0000',
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

/***/ }),

/***/ 93609:
/*!************************************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/internet-checkout/constants/flow/goliath-flow.constant.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   internetFlow: () => (/* binding */ internetFlow)
/* harmony export */ });
/* harmony import */ var _goliath_state_sequence_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goliath-state-sequence.constant */ 44034);
/* harmony import */ var _sales_delivery_feat_delivery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sales/delivery/feat-delivery */ 52497);
/* harmony import */ var _sales_delivery_feat_delivery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sales_delivery_feat_delivery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sales_summary_feat_summary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sales/summary/feat-summary */ 48933);
/* harmony import */ var _sales_summary_feat_summary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sales_summary_feat_summary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sales/goliath/data-access */ 90342);
/* harmony import */ var _sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sales_easy_switch_feat_easy_switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sales/easy-switch/feat-easy-switch */ 88669);
/* harmony import */ var _sales_easy_switch_feat_easy_switch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sales_easy_switch_feat_easy_switch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sales_appointment_feat_appointment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sales/appointment/feat-appointment */ 81617);
/* harmony import */ var _sales_appointment_feat_appointment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sales_appointment_feat_appointment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _sales_installation_type_feat_installation_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sales/installation-type/feat-installation-type */ 17705);
/* harmony import */ var _sales_installation_type_feat_installation_type__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sales_installation_type_feat_installation_type__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _sales_thank_you_feat_thank_you__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sales/thank-you/feat-thank-you */ 20456);
/* harmony import */ var _sales_thank_you_feat_thank_you__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sales_thank_you_feat_thank_you__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _sales_address_feat_installation_address__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sales/address/feat-installation-address */ 8745);
/* harmony import */ var _sales_address_feat_installation_address__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_sales_address_feat_installation_address__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_installation_address_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/installation-address.util */ 78153);










const internetFlow = {
  name: 'Internet flow',
  isRequired: shoppingBasket => shoppingBasket.items.some(item => item.type === _sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_3__.ShoppingBasketEnum.INTERNET),
  steps: [{
    name: _sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_3__.StepNameEnum.INSTALLATION_ADDRESS,
    component: _sales_address_feat_installation_address__WEBPACK_IMPORTED_MODULE_8__.FeatInstallationAddressComponent,
    requiredStateBeforeLoad: {
      state: _sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_3__.SalesOrderState.ORDER_ITEMS_ADDED
    },
    isRequired: shoppingBasket => _utils_installation_address_util__WEBPACK_IMPORTED_MODULE_9__.InstallationAddressUtil.isRequired(shoppingBasket)
  }, {
    name: _sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_3__.StepNameEnum.INSTALLATION_TYPE,
    component: _sales_installation_type_feat_installation_type__WEBPACK_IMPORTED_MODULE_6__.InstallationTypeComponent,
    requiredStateBeforeLoad: {
      state: _sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_3__.SalesOrderState.ORDER_ITEMS_ADDED
    },
    isRequired: () => true
  }, {
    name: _sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_3__.StepNameEnum.APPOINTMENT,
    component: _sales_appointment_feat_appointment__WEBPACK_IMPORTED_MODULE_5__.AppointmentComponent,
    requiredStateBeforeLoad: {
      state: _sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_3__.SalesOrderState.INSTALLATION_CONFIGURED
    },
    isRequired: () => true
  }, {
    name: _sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_3__.StepNameEnum.DELIVERY,
    component: _sales_delivery_feat_delivery__WEBPACK_IMPORTED_MODULE_1__.DeliveryComponent,
    requiredStateBeforeLoad: {
      state: _sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_3__.SalesOrderState.INSTALLATION_CONFIGURED
    },
    isRequired: () => true
  }, {
    name: _sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_3__.StepNameEnum.EASY_SWITCH,
    component: _sales_easy_switch_feat_easy_switch__WEBPACK_IMPORTED_MODULE_4__.EasySwitchComponent,
    requiredStateBeforeLoad: {
      state: _sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_3__.SalesOrderState.INSTALLATION_CONFIGURED
    },
    isRequired: () => true
  }, {
    name: _sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_3__.StepNameEnum.SUMMARY,
    component: _sales_summary_feat_summary__WEBPACK_IMPORTED_MODULE_2__.SummaryStepComponent,
    requiredStateBeforeLoad: {
      state: _sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_3__.SalesOrderState.APPOINTMENT_CONFIGURED
    },
    isRequired: () => true
  }, {
    name: _sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_3__.StepNameEnum.CONFIRMATION,
    component: _sales_thank_you_feat_thank_you__WEBPACK_IMPORTED_MODULE_7__.ThankYouStepComponent,
    requiredStateBeforeLoad: {
      state: _sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_3__.SalesOrderState.APPOINTMENT_CONFIGURED
    },
    isRequired: () => true
  }],
  stateActions: _goliath_state_sequence_constant__WEBPACK_IMPORTED_MODULE_0__.internetStateActions
};

/***/ }),

/***/ 44034:
/*!**********************************************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/internet-checkout/constants/flow/goliath-state-sequence.constant.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultStateActions: () => (/* binding */ defaultStateActions),
/* harmony export */   internetStateActions: () => (/* binding */ internetStateActions)
/* harmony export */ });
/* harmony import */ var _sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sales/goliath/data-access */ 90342);
/* harmony import */ var _sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _initialization_actions_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialization-actions.constants */ 64120);
/* harmony import */ var _utils_installation_address_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/installation-address.util */ 78153);



const defaultStateActions = [_initialization_actions_constants__WEBPACK_IMPORTED_MODULE_1__.loadCustomerProducts, {
  name: _sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_0__.StateActionEnum.ADD_ORDER_ITEMS,
  weight: 0,
  description: 'Set installation address',
  executor: internetCheckoutFacade => _utils_installation_address_util__WEBPACK_IMPORTED_MODULE_2__.InstallationAddressUtil.loadAndSetCustomerActiveProductAddresses(internetCheckoutFacade),
  afterExecutionHooks: [],
  stateProduced: _sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_0__.SalesOrderState.ORDER_ITEMS_ADDED
}];
const internetStateActions = [];

/***/ }),

/***/ 64120:
/*!***********************************************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/internet-checkout/constants/flow/initialization-actions.constants.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadCustomerProducts: () => (/* binding */ loadCustomerProducts)
/* harmony export */ });
/* harmony import */ var _sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sales/goliath/data-access */ 90342);
/* harmony import */ var _sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);



const loadCustomerProducts = {
  name: _sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_0__.StateActionEnum.EMPTY,
  weight: 0,
  description: 'Load customer products',
  executor: internetCheckoutFacade => (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.pipe)((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(salesOrder => {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.forkJoin)([internetCheckoutFacade.getCustomerProducts(), internetCheckoutFacade.getCustomerAccount()]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(([customerProducts, customerAccount]) => {
      internetCheckoutFacade.setCustomerProducts(customerProducts);
      internetCheckoutFacade.setCustomerAccount(customerAccount);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(() => salesOrder));
  })),
  afterExecutionHooks: [],
  stateProduced: _sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_0__.SalesOrderState.INITIALIZED
};

/***/ }),

/***/ 57669:
/*!************************************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/internet-checkout/constants/internet-checkout.constant.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InternetCheckoutConstant: () => (/* binding */ InternetCheckoutConstant)
/* harmony export */ });
const InternetCheckoutConstant = {
  MODULE_NAME: 'internet checkout',
  ORDER_CORRECTION_IMAGE: 'order-correction.svg',
  ORDER_CORRECTION_MOBILE_IMAGE: 'order-correction-mobile.svg',
  SDATA: 'sdata'
};

/***/ }),

/***/ 62981:
/*!****************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/internet-checkout/enums/error.enum.ts ***!
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

/***/ 76718:
/*!*******************************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/internet-checkout/facade/internet-checkout.facade.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InternetCheckoutFacade: () => (/* binding */ InternetCheckoutFacade)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sales_address_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sales/address/data-access */ 60785);
/* harmony import */ var _sales_address_data_access__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sales_address_data_access__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sales/events/data-access */ 80258);
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sales_events_data_access__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sales_internet_checkout_data_access__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sales/internet-checkout/data-access */ 83055);
/* harmony import */ var _sales_internet_checkout_data_access__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sales_internet_checkout_data_access__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sales/goliath/data-access */ 90342);
/* harmony import */ var _sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_reverse_proxy_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/reverse-proxy.service */ 44544);
/* harmony import */ var _utils_sales_order_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/sales-order.util */ 96817);
/* harmony import */ var _sales_shared_address_data_access__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @sales/shared/address/data-access */ 66174);
/* harmony import */ var _sales_shared_address_data_access__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_sales_shared_address_data_access__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @telenet/ng-lib-omapi */ 64512);
/* harmony import */ var _telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_12__);


















class InternetCheckoutFacade {
  constructor(store, reverseProxyService, addressFacade, omapiProductService, languageService) {
    this.store = store;
    this.reverseProxyService = reverseProxyService;
    this.addressFacade = addressFacade;
    this.omapiProductService = omapiProductService;
    this.languageService = languageService;
    this.goliathSteps$ = this.store.select(_sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_6__.steps);
    this.goliathStateActions$ = this.store.select(_sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_6__.stateActions);
    this.stepEvent$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.select)(_sales_events_data_access__WEBPACK_IMPORTED_MODULE_3__.selectEvent), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(val => val !== undefined));
    this.salesOrderState$ = this.store.select(_sales_internet_checkout_data_access__WEBPACK_IMPORTED_MODULE_5__.salesOrderState);
    this.salesOrder$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({
      empty: true
    });
    this.customerData$ = this.store.select(_sales_internet_checkout_data_access__WEBPACK_IMPORTED_MODULE_5__.customerDataState);
    this.salesOfferOmapiProducts$ = this.store.select(_sales_internet_checkout_data_access__WEBPACK_IMPORTED_MODULE_5__.salesOfferOmapiProductsState);
    this.viewState$ = this.store.select(_sales_internet_checkout_data_access__WEBPACK_IMPORTED_MODULE_5__.viewState);
    this.language = this.languageService.getLanguage();
  }
  setInstallationAddresses(addresses) {
    this.store.dispatch((0,_sales_address_data_access__WEBPACK_IMPORTED_MODULE_1__.setInstallationAddresses)({
      addresses: addresses
    }));
  }
  getCustomerProducts() {
    return this.reverseProxyService.getCustomerProducts().pipe(_utils_sales_order_util__WEBPACK_IMPORTED_MODULE_8__.SalesOrderUtil.handleNcErrors());
  }
  getOmapiProduct(productId) {
    return this.omapiProductService.getProductById('internet-checkout', productId);
  }
  getCustomerAccount() {
    return this.reverseProxyService.getCustomerAccount().pipe(_utils_sales_order_util__WEBPACK_IMPORTED_MODULE_8__.SalesOrderUtil.handleNcErrors());
  }
  setCustomerProducts(customerProducts) {
    this.store.dispatch((0,_sales_internet_checkout_data_access__WEBPACK_IMPORTED_MODULE_5__.setCustomerProducts)({
      customerProducts: customerProducts
    }));
  }
  setCustomerAccount(customerAccount) {
    this.store.dispatch((0,_sales_internet_checkout_data_access__WEBPACK_IMPORTED_MODULE_5__.setCustomerAccount)({
      customerAccount: customerAccount
    }));
  }
  setViewState(viewState) {
    this.store.dispatch((0,_sales_internet_checkout_data_access__WEBPACK_IMPORTED_MODULE_5__.setViewState)({
      viewState: viewState
    }));
  }
  setFlows(flows) {
    this.store.dispatch((0,_sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_6__.setFlows)({
      flows: flows
    }));
  }
  setSteps(steps) {
    this.store.dispatch((0,_sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_6__.setSteps)({
      steps: steps
    }));
  }
  setStateActions(stateActions) {
    this.store.dispatch((0,_sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_6__.setStateActions)({
      stateActions: stateActions
    }));
  }
  setCurrentState(state) {
    this.store.dispatch((0,_sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_6__.setCurrentState)({
      state: state
    }));
  }
  getAddressById(addressId) {
    return this.addressFacade.getAddressById(addressId).pipe(_utils_sales_order_util__WEBPACK_IMPORTED_MODULE_8__.SalesOrderUtil.handleNcErrors());
  }
  setSalesOfferState(salesOffer) {
    this.store.dispatch((0,_sales_internet_checkout_data_access__WEBPACK_IMPORTED_MODULE_5__.setSalesOffer)({
      salesOffer: salesOffer
    }));
  }
  setOmapiProductsState(omapiProducts) {
    this.store.dispatch((0,_sales_internet_checkout_data_access__WEBPACK_IMPORTED_MODULE_5__.setOmapiProducts)({
      omapiProducts: omapiProducts
    }));
  }
  static #_ = this.ɵfac = function InternetCheckoutFacade_Factory(t) {
    return new (t || InternetCheckoutFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_services_reverse_proxy_service__WEBPACK_IMPORTED_MODULE_7__.ReverseProxyService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_sales_shared_address_data_access__WEBPACK_IMPORTED_MODULE_9__.AddressFacade), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_10__.OmapiProductService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_11__.LanguageService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjectable"]({
    token: InternetCheckoutFacade,
    factory: InternetCheckoutFacade.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7913:
/*!***************************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/internet-checkout/internet-checkout.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InternetCheckoutComponent: () => (/* binding */ InternetCheckoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sales/shared/data-access */ 67179);
/* harmony import */ var _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sales_shared_data_access__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngneat/until-destroy */ 52813);
/* harmony import */ var _sales_shared_feature_sales_stepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sales/shared/feature-sales-stepper */ 68342);
/* harmony import */ var _sales_shared_feature_sales_stepper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sales_shared_feature_sales_stepper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _facade_internet_checkout_facade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./facade/internet-checkout.facade */ 76718);
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sales/events/data-access */ 80258);
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sales_events_data_access__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../libs/shared/page/src/lib/page/loader/loader.component */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_internet_checkout_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/internet-checkout.service */ 88850);
/* harmony import */ var _telenet_ng_lib_step_flow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @telenet/ng-lib-step-flow */ 95648);
/* harmony import */ var _telenet_ng_lib_step_flow__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_step_flow__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @sales/hardware-checkout/data-access */ 77644);
/* harmony import */ var _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _sales_error_feat_error__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @sales/error/feat-error */ 97389);
/* harmony import */ var _sales_error_feat_error__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_sales_error_feat_error__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _sales_internet_checkout_data_access__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @sales/internet-checkout/data-access */ 83055);
/* harmony import */ var _sales_internet_checkout_data_access__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_sales_internet_checkout_data_access__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _sales_address_data_access__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @sales/address/data-access */ 60785);
/* harmony import */ var _sales_address_data_access__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_sales_address_data_access__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_14__);
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





















function InternetCheckoutComponent_tg_sales_error_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "tg-sales-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("error", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](1, 1, ctx_r0.viewState$)) == null ? null : tmp_0_0.error);
  }
}
function InternetCheckoutComponent_ng_container_3_tg_sales_stepper_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tg-sales-stepper", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("nextButtonClicked", function InternetCheckoutComponent_ng_container_3_tg_sales_stepper_2_Template_tg_sales_stepper_nextButtonClicked_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r4.nextButtonClickedEvent());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("showNavigation", true)("showStepProgressBar", true)("steps", ctx_r3.componentSteps);
  }
}
function InternetCheckoutComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0, null, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, InternetCheckoutComponent_ng_container_3_tg_sales_stepper_2_Template, 1, 3, "tg-sales-stepper", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.componentSteps.length > 0);
  }
}
let InternetCheckoutComponent = class InternetCheckoutComponent {
  constructor(loaderService, internetCheckoutFacade, internetCheckoutService) {
    this.loaderService = loaderService;
    this.internetCheckoutFacade = internetCheckoutFacade;
    this.internetCheckoutService = internetCheckoutService;
    this.enableLoader = true;
    this.componentSteps = [];
    this.isLoaded = false;
    this.viewStateEnum = _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_10__.ViewStateEnum;
    this.ViewStateEnum = _sales_hardware_checkout_data_access__WEBPACK_IMPORTED_MODULE_10__.ViewStateEnum;
  }
  ngOnInit() {
    this.loaderService.start();
    (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([this.internetCheckoutFacade.stepEvent$, this.internetCheckoutFacade.salesOrderState$]).pipe(this.internetCheckoutService.logDebug(), this.internetCheckoutService.executeEventStrategy(), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__.untilDestroyed)(this)).subscribe({
      next: event => {
        this.loaderService.stop();
        if (event) {
          this.internetCheckoutService.goToNextStepIfNeeded(event);
        }
      },
      error: error => {
        this.handleError(error);
      }
    });
    this.initialiseFlow();
  }
  nextButtonClickedEvent() {
    console.log('next button clicked');
  }
  initialiseFlow() {
    try {
      this.internetCheckoutService.initialiseFlow().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(componentSteps => this.componentSteps = componentSteps)).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__.untilDestroyed)(this)).subscribe({
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
    this.internetCheckoutService.setError(error, this.customerServiceRedirectUrlInput, this.contactUsRedirectUrlInput);
  }
  static #_ = this.ɵfac = function InternetCheckoutComponent_Factory(t) {
    return new (t || InternetCheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_6__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_facade_internet_checkout_facade__WEBPACK_IMPORTED_MODULE_3__.InternetCheckoutFacade), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_internet_checkout_service__WEBPACK_IMPORTED_MODULE_7__.InternetCheckoutService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
    type: InternetCheckoutComponent,
    selectors: [["tg-sales-internet-checkout"]],
    inputs: {
      enableMask: "enableMask",
      enableLoader: "enableLoader",
      pageType: "pageType",
      customerServiceRedirectUrlInput: "customerServiceRedirectUrlInput",
      contactUsRedirectUrlInput: "contactUsRedirectUrlInput",
      thankyouRedirectUrl: "thankyouRedirectUrl",
      termsAndConditionsUrl: "termsAndConditionsUrl"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 10,
    consts: [["id", "page-loader", 3, "enableLoader", "enableMask", "pageType", "startByDefault"], [3, "error", 4, "ngIf"], [4, "ngIf"], [3, "error"], ["element", ""], [3, "showNavigation", "showStepProgressBar", "steps", "nextButtonClicked", 4, "ngIf"], [3, "showNavigation", "showStepProgressBar", "steps", "nextButtonClicked"]],
    template: function InternetCheckoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-loader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, InternetCheckoutComponent_tg_sales_error_1_Template, 2, 3, "tg-sales-error", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, InternetCheckoutComponent_ng_container_3_Template, 3, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "async");
      }
      if (rf & 2) {
        let tmp_4_0;
        let tmp_5_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("enableLoader", ctx.enableLoader)("enableMask", ctx.enableMask)("pageType", ctx.pageType)("startByDefault", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 6, ctx.viewState$)) == null ? null : tmp_4_0.key) === ctx.viewStateEnum.ERROR);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.isLoaded && !(((tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](4, 8, ctx.viewState$)) == null ? null : tmp_5_0.key) === ctx.viewStateEnum.ERROR));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.AsyncPipe, _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_1__.StepsNgrxModule, _sales_shared_feature_sales_stepper__WEBPACK_IMPORTED_MODULE_2__.SalesStepperComponent, _telenet_ng_lib_step_flow__WEBPACK_IMPORTED_MODULE_8__.StepFlowLibModule, _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_6__.LoaderModule, _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_6__.LoaderComponent, _sales_error_feat_error__WEBPACK_IMPORTED_MODULE_11__.ErrorComponent, _sales_internet_checkout_data_access__WEBPACK_IMPORTED_MODULE_12__.SalesInternetCheckoutNgrxModule, _sales_address_data_access__WEBPACK_IMPORTED_MODULE_13__.AddressNgrxModule, _sales_events_data_access__WEBPACK_IMPORTED_MODULE_4__.EventsNgrxModule],
    encapsulation: 2
  });
};
InternetCheckoutComponent = __decorate([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__.UntilDestroy)(), __metadata("design:paramtypes", [_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_6__.LoaderService, _facade_internet_checkout_facade__WEBPACK_IMPORTED_MODULE_3__.InternetCheckoutFacade, _services_internet_checkout_service__WEBPACK_IMPORTED_MODULE_7__.InternetCheckoutService])], InternetCheckoutComponent);


/***/ }),

/***/ 88850:
/*!**********************************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/internet-checkout/services/internet-checkout.service.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InternetCheckoutService: () => (/* binding */ InternetCheckoutService)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-shared */ 77157);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sales/shared/data-access */ 67179);
/* harmony import */ var _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sales_shared_data_access__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sales/events/data-access */ 80258);
/* harmony import */ var _sales_events_data_access__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sales_events_data_access__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants_internet_checkout_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants/internet-checkout.constant */ 57669);
/* harmony import */ var _facade_internet_checkout_facade__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../facade/internet-checkout.facade */ 76718);
/* harmony import */ var _sales_internet_checkout_data_access__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sales/internet-checkout/data-access */ 83055);
/* harmony import */ var _sales_internet_checkout_data_access__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_sales_internet_checkout_data_access__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _classes_internet_checkout_error_class__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../classes/internet-checkout-error.class */ 86755);
/* harmony import */ var _constants_errors_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../constants/errors.constants */ 96814);
/* harmony import */ var _enums_error_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../enums/error.enum */ 62981);
/* harmony import */ var _sales_goliath_feat_goliath__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @sales/goliath/feat-goliath */ 75612);
/* harmony import */ var _sales_goliath_feat_goliath__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_sales_goliath_feat_goliath__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @sales/goliath/data-access */ 90342);
/* harmony import */ var _sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _constants_flow_goliath_flow_constant__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../constants/flow/goliath-flow.constant */ 93609);
/* harmony import */ var _constants_flow_goliath_state_sequence_constant__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../constants/flow/goliath-state-sequence.constant */ 44034);
/* harmony import */ var _classes_action_executer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../classes/action-executer */ 46492);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_17__);






















class InternetCheckoutService {
  constructor(stepFacade, loaderService, internetCheckoutFacade, goliathService, urlService, jsonUrlService) {
    this.stepFacade = stepFacade;
    this.loaderService = loaderService;
    this.internetCheckoutFacade = internetCheckoutFacade;
    this.goliathService = goliathService;
    this.urlService = urlService;
    this.jsonUrlService = jsonUrlService;
    this.log = _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_0__.LogFactory.createLogger(InternetCheckoutService);
  }
  executeEventStrategy() {
    // Using the goliath service we need to calculate the delta between the current step and the next one
    // and execute all actions
    return (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(([stepEvent]) => {
      if (stepEvent) {
        return stepEvent;
      }
      throw _constants_errors_constants__WEBPACK_IMPORTED_MODULE_10__.EventStrategyError;
    });
  }
  goToNextStepIfNeeded(event) {
    if (event && event.eventType === _sales_events_data_access__WEBPACK_IMPORTED_MODULE_3__.EventTypeEnum.STEP_FINISHED) {
      this.stepFacade.nextStepKey$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe({
        next: () => {
          this.loaderService.stop();
          this.stepFacade.goToNextStep();
        }
      });
    }
  }
  logDebug() {
    return (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)({
      next: ([stepEvent, salesOrderState]) => {
        this.log.logDebug('Received event: ', {
          stepEvent: stepEvent,
          salesOrderState: salesOrderState
        });
      }
    });
  }
  initialiseFlow() {
    return this.initialiseRequestState().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(omapiProducts => {
      const flows = [_constants_flow_goliath_flow_constant__WEBPACK_IMPORTED_MODULE_14__.internetFlow];
      const steps = this.goliathService.getSteps([_constants_flow_goliath_flow_constant__WEBPACK_IMPORTED_MODULE_14__.internetFlow], {
        items: [{
          type: _sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_13__.ShoppingBasketEnum.INTERNET
        }],
        omapiProducts: omapiProducts
      });
      const stateActions = this.goliathService.createActionsList(_constants_flow_goliath_state_sequence_constant__WEBPACK_IMPORTED_MODULE_15__.defaultStateActions, [_constants_flow_goliath_flow_constant__WEBPACK_IMPORTED_MODULE_14__.internetFlow.stateActions]);
      this.internetCheckoutFacade.setFlows(_sales_goliath_feat_goliath__WEBPACK_IMPORTED_MODULE_12__.GoliathUtil.removeComponentsFromFlows(flows));
      this.internetCheckoutFacade.setSteps(_sales_goliath_feat_goliath__WEBPACK_IMPORTED_MODULE_12__.GoliathUtil.removeComponentsFromSteps(steps));
      this.internetCheckoutFacade.setStateActions(stateActions);
      this.stepFacade.setStepConfig({
        steps: steps.map(step => step.name.toString())
      });
      // Load the first step
      const statesToProcess = this.goliathService.getStatesToProcess(_sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_13__.SalesOrderState.INITIALIZED, steps.length > 0 ? steps[0].requiredStateBeforeLoad.state : _sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_13__.SalesOrderState.INITIALIZED);
      const actionsToProcess = statesToProcess.map(stateToProcess => {
        return stateActions.find(action => action.stateProduced === stateToProcess);
      }).filter(action => action !== undefined);
      const processor = new _classes_action_executer__WEBPACK_IMPORTED_MODULE_16__.ActionProcessor(this.internetCheckoutFacade);
      processor.executeActions(actionsToProcess).subscribe({
        next: result => console.log('Action result:', result),
        error: err => console.error('Error processing actions:', err),
        complete: () => console.log('All actions processed.')
      });
      return steps.map(step => {
        const stepComponent = {
          key: step.name.toString(),
          component: step.component
        };
        return stepComponent;
      });
    }));
  }
  // store SDATA from URL request parameter and resolve/store omapi information of the requested products
  initialiseRequestState() {
    return this.getSalesOrderRequestFromSdata().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(salesOffer => {
      this.internetCheckoutFacade.setSalesOfferState(salesOffer);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(salesOffer => {
      const omapiProductRequests = salesOffer.map(offer => this.internetCheckoutFacade.getOmapiProduct(offer.id));
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.forkJoin)(omapiProductRequests).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(omapiProducts => this.internetCheckoutFacade.setOmapiProductsState(omapiProducts)));
    }));
  }
  setOrderCorrection(errorObject, url) {
    const errorViewModel = {
      key: errorObject.key,
      titleKey: _constants_errors_constants__WEBPACK_IMPORTED_MODULE_10__.errorTitlePrefix.concat(errorObject.titleKey),
      buttonTextKey: _constants_errors_constants__WEBPACK_IMPORTED_MODULE_10__.errorButtonPrefix.concat(errorObject.buttonTextKey),
      descriptionKey: _constants_errors_constants__WEBPACK_IMPORTED_MODULE_10__.errorMessagePrefix.concat(errorObject.descriptionKey),
      image: _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__.AssetService.getImagePath(_constants_internet_checkout_constant__WEBPACK_IMPORTED_MODULE_6__.InternetCheckoutConstant.MODULE_NAME, _constants_internet_checkout_constant__WEBPACK_IMPORTED_MODULE_6__.InternetCheckoutConstant.ORDER_CORRECTION_IMAGE),
      mobileImage: _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__.AssetService.getImagePath(_constants_internet_checkout_constant__WEBPACK_IMPORTED_MODULE_6__.InternetCheckoutConstant.MODULE_NAME, _constants_internet_checkout_constant__WEBPACK_IMPORTED_MODULE_6__.InternetCheckoutConstant.ORDER_CORRECTION_MOBILE_IMAGE),
      redirectUrl: url
    };
    this.internetCheckoutFacade.setViewState({
      key: _sales_internet_checkout_data_access__WEBPACK_IMPORTED_MODULE_8__.ViewStateEnum.ERROR,
      showNavigation: false,
      showBackButton: true,
      error: errorViewModel
    });
  }
  setError(error, customerServiceRedirectUrl, contactUsRedirectUrl) {
    console.log(error.message, error);
    let internetCheckoutError;
    if (error instanceof _classes_internet_checkout_error_class__WEBPACK_IMPORTED_MODULE_9__.InternetCheckoutErrorClass) {
      internetCheckoutError = error;
    } else {
      internetCheckoutError = new _classes_internet_checkout_error_class__WEBPACK_IMPORTED_MODULE_9__.InternetCheckoutErrorClass(_constants_errors_constants__WEBPACK_IMPORTED_MODULE_10__.GenericError);
    }
    const errorViewModel = {
      key: internetCheckoutError.errorObject.key,
      titleKey: _constants_errors_constants__WEBPACK_IMPORTED_MODULE_10__.errorTitlePrefix.concat(internetCheckoutError.errorObject.titleKey),
      descriptionKey: _constants_errors_constants__WEBPACK_IMPORTED_MODULE_10__.errorMessagePrefix.concat(internetCheckoutError.errorObject.descriptionKey),
      buttonTextKey: _constants_errors_constants__WEBPACK_IMPORTED_MODULE_10__.errorButtonPrefix.concat(internetCheckoutError.errorObject.buttonTextKey),
      redirectUrl: undefined,
      image: _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__.AssetService.getImagePath(_constants_internet_checkout_constant__WEBPACK_IMPORTED_MODULE_6__.InternetCheckoutConstant.MODULE_NAME, _constants_internet_checkout_constant__WEBPACK_IMPORTED_MODULE_6__.InternetCheckoutConstant.ORDER_CORRECTION_IMAGE),
      mobileImage: _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__.AssetService.getImagePath(_constants_internet_checkout_constant__WEBPACK_IMPORTED_MODULE_6__.InternetCheckoutConstant.MODULE_NAME, _constants_internet_checkout_constant__WEBPACK_IMPORTED_MODULE_6__.InternetCheckoutConstant.ORDER_CORRECTION_MOBILE_IMAGE)
    };
    if (customerServiceRedirectUrl && contactUsRedirectUrl) {
      errorViewModel.redirectUrl = internetCheckoutError.errorObject.type === _enums_error_enum__WEBPACK_IMPORTED_MODULE_11__.ErrorRedirectUrlEnum.CUSTOMER_SERVICE_REDIRECT_URL ? customerServiceRedirectUrl : contactUsRedirectUrl;
    }
    this.internetCheckoutFacade.setViewState({
      key: _sales_internet_checkout_data_access__WEBPACK_IMPORTED_MODULE_8__.ViewStateEnum.ERROR,
      showNavigation: false,
      showBackButton: true,
      error: errorViewModel
    });
  }
  getSalesOrderRequestFromSdata() {
    const encodedString = this.urlService.getRequestParamValue(_constants_internet_checkout_constant__WEBPACK_IMPORTED_MODULE_6__.InternetCheckoutConstant.SDATA, '');
    if (encodedString !== '') {
      return this.jsonUrlService.decompress(encodedString).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(response => {
        if (response && response['offers'].length > 0) {
          return response['offers'];
        }
      }));
    }
    throw new Error('No sales order request found in the URL');
  }
  static #_ = this.ɵfac = function InternetCheckoutService_Factory(t) {
    return new (t || InternetCheckoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵinject"](_sales_shared_data_access__WEBPACK_IMPORTED_MODULE_2__.StepFacade), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵinject"](_facade_internet_checkout_facade__WEBPACK_IMPORTED_MODULE_7__.InternetCheckoutFacade), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵinject"](_sales_goliath_feat_goliath__WEBPACK_IMPORTED_MODULE_12__.GoliathService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__.JsonUrlService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjectable"]({
    token: InternetCheckoutService,
    factory: InternetCheckoutService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 44544:
/*!******************************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/internet-checkout/services/reverse-proxy.service.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReverseProxyService: () => (/* binding */ ReverseProxyService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1261);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @telenet/ng-lib-config */ 81601);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hardware_checkout_utils_header_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hardware-checkout/utils/header.util */ 63301);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);








class ReverseProxyService {
  constructor(http, urlService, configService) {
    this.http = http;
    this.urlService = urlService;
    this.configService = configService;
    this.basePath = '/public/api/mytelenet-web-sales-checkout-rp';
    this.businessDomainPlan = 'Mobile Plan,Internet,TV,Fixed Phone,Bundle,Streaming Services Container';
    this.baseUrl = this.configService.getConfig(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_1__.ConfigConstants.OCAPI_URl);
  }
  getCustomerProducts() {
    const path = this.urlService.buildUrlWithParams('/v1/orderManagement/customerAccount/customerProduct', new Map([['businessDomains', this.businessDomainPlan]]));
    return this.doGet(this.getUrl(path));
  }
  getCustomerAccount() {
    const path = '/v1/customerManagement/customerAccount';
    return this.doGet(this.getUrl(path));
  }
  getUrl(path) {
    return `${this.baseUrl}${this.basePath}${path}`;
  }
  doGet(url) {
    return this.http.get(url, {
      headers: _hardware_checkout_utils_header_util__WEBPACK_IMPORTED_MODULE_2__.HeaderUtil.createHttpHeaders(this.urlService.getCurrentUrl()),
      withCredentials: true
    });
  }
  static #_ = this.ɵfac = function ReverseProxyService_Factory(t) {
    return new (t || ReverseProxyService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_1__.ConfigService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: ReverseProxyService,
    factory: ReverseProxyService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 78153:
/*!*******************************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/internet-checkout/utils/installation-address.util.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstallationAddressUtil: () => (/* binding */ InstallationAddressUtil)
/* harmony export */ });
/* harmony import */ var _sales_shared_address_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sales/shared/address/data-access */ 66174);
/* harmony import */ var _sales_shared_address_data_access__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sales_shared_address_data_access__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sales_internet_checkout_data_access__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sales/internet-checkout/data-access */ 83055);
/* harmony import */ var _sales_internet_checkout_data_access__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sales_internet_checkout_data_access__WEBPACK_IMPORTED_MODULE_3__);




class InstallationAddressUtil {
  static loadAndSetCustomerActiveProductAddresses(internetCheckoutFacade) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.pipe)((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(salesOrder => {
      return internetCheckoutFacade.customerData$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(customerData => {
        return customerData?.customerProducts && customerData.customerAccount ? (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.forkJoin)(customerData.customerProducts.filter(_sales_internet_checkout_data_access__WEBPACK_IMPORTED_MODULE_3__.CustomerProductUtil.isActiveOrSuspended).filter(_sales_internet_checkout_data_access__WEBPACK_IMPORTED_MODULE_3__.CustomerProductUtil.inUniqueLocation).map(product => _sales_internet_checkout_data_access__WEBPACK_IMPORTED_MODULE_3__.CustomerAccountUtil.getAddressIdForLocation(customerData.customerAccount, product.locationId)).filter(addressId => !!addressId) // Filter out undefined/null addressId
        .map(addressId => internetCheckoutFacade.getAddressById(addressId))) : (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)([]);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(addresses => InstallationAddressUtil.mapToInstallationAddress(addresses, internetCheckoutFacade.language)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(installationAddresses => {
        internetCheckoutFacade.setInstallationAddresses(installationAddresses);
        return salesOrder;
      }));
    }));
  }
  static isRequired(shoppingBasket) {
    return shoppingBasket.omapiProducts.some(offer => offer.requiresInstallation);
  }
  static #_ = this.mapToInstallationAddress = (installationAddress, language) => {
    const selectedIfOnlyOne = installationAddress.length === 1;
    return installationAddress.map(address => (0,_sales_shared_address_data_access__WEBPACK_IMPORTED_MODULE_0__.createAddressUtil)(address, language)).map(addressUtil => ({
      id: addressUtil.getId(),
      street: addressUtil.getStreet(),
      houseNumber: addressUtil.getHouseNumber(),
      postalCode: addressUtil.getPostalCode(),
      municipality: addressUtil.getMunicipality(),
      country: addressUtil.getCountry(),
      isNew: false,
      selected: selectedIfOnlyOne,
      subHouseNumber: addressUtil.getSubHouseNumber(),
      box: addressUtil.getBoxNumber(),
      floor: addressUtil.getFloor()
    }));
  };
}

/***/ }),

/***/ 96817:
/*!**********************************************************************************!*\
  !*** ./apps/sales/sales-mfe/src/app/internet-checkout/utils/sales-order.util.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesOrderUtil: () => (/* binding */ SalesOrderUtil)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hardware_checkout_constants_errors_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hardware-checkout/constants/errors.constants */ 66523);
/* harmony import */ var _hardware_checkout_classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hardware-checkout/classes/hardware-checkout-error.class */ 38978);




class SalesOrderUtil {
  static handleNcErrors() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.pipe)((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(result => {
      if (this.isNcError(result)) {
        const errorObject = _hardware_checkout_constants_errors_constants__WEBPACK_IMPORTED_MODULE_2__.NcErrors.find(error => error.key === result.errorCode);
        if (errorObject) {
          throw new _hardware_checkout_classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_3__.HardwareCheckoutError(errorObject.error);
        }
        throw new _hardware_checkout_classes_hardware_checkout_error_class__WEBPACK_IMPORTED_MODULE_3__.HardwareCheckoutError(_hardware_checkout_constants_errors_constants__WEBPACK_IMPORTED_MODULE_2__.GenericError);
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
//# sourceMappingURL=apps_sales_sales-mfe_src_app_internet-checkout_internet-checkout_component_ts.js.map