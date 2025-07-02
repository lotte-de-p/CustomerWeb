(self["webpackChunksales_mfe"] = self["webpackChunksales_mfe"] || []).push([["libs_sales_hardware-checkout_data-access_src_index_ts-_936a0"],{

/***/ 34887:
/*!***************************************************************!*\
  !*** ./libs/sales/hardware-checkout/data-access/src/index.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactDetailsCustomerCategoryEnum: () => (/* reexport safe */ _lib_enums_contact_details_enum__WEBPACK_IMPORTED_MODULE_32__.ContactDetailsCustomerCategoryEnum),
/* harmony export */   ContactMethodClassificationType: () => (/* reexport safe */ _lib_customer_account_customer_account_details_interface__WEBPACK_IMPORTED_MODULE_21__.ContactMethodClassificationType),
/* harmony export */   ContactMethodType: () => (/* reexport safe */ _lib_customer_account_customer_account_details_interface__WEBPACK_IMPORTED_MODULE_21__.ContactMethodType),
/* harmony export */   CustomerAccountTypeEnum: () => (/* reexport safe */ _lib_enums_customer_account_type_enum__WEBPACK_IMPORTED_MODULE_27__.CustomerAccountTypeEnum),
/* harmony export */   CustomerAccountUtil: () => (/* reexport safe */ _lib_customer_account_customer_account_util__WEBPACK_IMPORTED_MODULE_22__.CustomerAccountUtil),
/* harmony export */   CustomerCreditClassificationTypeEnum: () => (/* reexport safe */ _lib_enums_customer_credit_classification_type_enum__WEBPACK_IMPORTED_MODULE_28__.CustomerCreditClassificationTypeEnum),
/* harmony export */   CustomerTypeEnum: () => (/* reexport safe */ _lib_enums_customer_type_enum__WEBPACK_IMPORTED_MODULE_26__.CustomerTypeEnum),
/* harmony export */   HARDWARE_CHECKOUT_FEATURE_KEY: () => (/* reexport safe */ _lib_state_hardware_checkout_reducer__WEBPACK_IMPORTED_MODULE_1__.HARDWARE_CHECKOUT_FEATURE_KEY),
/* harmony export */   HardwareCheckoutEffects: () => (/* reexport safe */ _lib_state_hardware_checkout_effects__WEBPACK_IMPORTED_MODULE_4__.HardwareCheckoutEffects),
/* harmony export */   HardwareCheckoutNgrxModule: () => (/* reexport safe */ _lib_state_sales_hardware_checkout_ngrx_module__WEBPACK_IMPORTED_MODULE_5__.HardwareCheckoutNgrxModule),
/* harmony export */   PersonalIdentityUtils: () => (/* reexport safe */ _lib_util_personal_identity_util__WEBPACK_IMPORTED_MODULE_31__.PersonalIdentityUtils),
/* harmony export */   RoleType: () => (/* reexport safe */ _lib_customer_account_customer_account_details_interface__WEBPACK_IMPORTED_MODULE_21__.RoleType),
/* harmony export */   SalesOrderStateEnum: () => (/* reexport safe */ _lib_enums_sales_order_state_enum__WEBPACK_IMPORTED_MODULE_25__.SalesOrderStateEnum),
/* harmony export */   SessionStorageConstants: () => (/* reexport safe */ _lib_constants_hardware_checkout_constant__WEBPACK_IMPORTED_MODULE_33__.SessionStorageConstants),
/* harmony export */   ValidationElementEnum: () => (/* reexport safe */ _lib_enums_validation_element_enum__WEBPACK_IMPORTED_MODULE_29__.ValidationElementEnum),
/* harmony export */   ViewStateEnum: () => (/* reexport safe */ _lib_enums_view_state_enum__WEBPACK_IMPORTED_MODULE_24__.ViewStateEnum),
/* harmony export */   aemInput: () => (/* reexport safe */ _lib_state_hardware_checkout_selectors__WEBPACK_IMPORTED_MODULE_3__.aemInput),
/* harmony export */   analyticsAttributes: () => (/* reexport safe */ _lib_state_hardware_checkout_selectors__WEBPACK_IMPORTED_MODULE_3__.analyticsAttributes),
/* harmony export */   billingAccountTestfactory: () => (/* reexport safe */ _lib_interfaces_billing_account_testfactory__WEBPACK_IMPORTED_MODULE_20__.billingAccountTestfactory),
/* harmony export */   billingAccounts: () => (/* reexport safe */ _lib_state_hardware_checkout_selectors__WEBPACK_IMPORTED_MODULE_3__.billingAccounts),
/* harmony export */   cart: () => (/* reexport safe */ _lib_state_hardware_checkout_selectors__WEBPACK_IMPORTED_MODULE_3__.cart),
/* harmony export */   chargerSalesOfferFactory: () => (/* reexport safe */ _lib_interfaces_sdata_sales_offer_testfactory__WEBPACK_IMPORTED_MODULE_8__.chargerSalesOfferFactory),
/* harmony export */   childRoleFactory: () => (/* reexport safe */ _lib_customer_account_customer_account_testfactory__WEBPACK_IMPORTED_MODULE_23__.childRoleFactory),
/* harmony export */   contactFactory: () => (/* reexport safe */ _lib_customer_account_customer_account_testfactory__WEBPACK_IMPORTED_MODULE_23__.contactFactory),
/* harmony export */   contactMethodFactory: () => (/* reexport safe */ _lib_customer_account_customer_account_testfactory__WEBPACK_IMPORTED_MODULE_23__.contactMethodFactory),
/* harmony export */   contractSummaryGenerationNotPossible: () => (/* reexport safe */ _lib_state_hardware_checkout_selectors__WEBPACK_IMPORTED_MODULE_3__.contractSummaryGenerationNotPossible),
/* harmony export */   contractSummaryRequired: () => (/* reexport safe */ _lib_state_hardware_checkout_selectors__WEBPACK_IMPORTED_MODULE_3__.contractSummaryRequired),
/* harmony export */   contractSummaryUrl: () => (/* reexport safe */ _lib_state_hardware_checkout_selectors__WEBPACK_IMPORTED_MODULE_3__.contractSummaryUrl),
/* harmony export */   customerAccountDetails: () => (/* reexport safe */ _lib_state_hardware_checkout_selectors__WEBPACK_IMPORTED_MODULE_3__.customerAccountDetails),
/* harmony export */   customerAccountDetailsFactory: () => (/* reexport safe */ _lib_customer_account_customer_account_testfactory__WEBPACK_IMPORTED_MODULE_23__.customerAccountDetailsFactory),
/* harmony export */   customerAccountDetailsSohoFactory: () => (/* reexport safe */ _lib_customer_account_customer_account_testfactory__WEBPACK_IMPORTED_MODULE_23__.customerAccountDetailsSohoFactory),
/* harmony export */   customerAccountTypeBlockedConst: () => (/* reexport safe */ _lib_constants_customer_account_type_blocked_const__WEBPACK_IMPORTED_MODULE_30__.customerAccountTypeBlockedConst),
/* harmony export */   customerLocationFactory: () => (/* reexport safe */ _lib_customer_account_customer_account_testfactory__WEBPACK_IMPORTED_MODULE_23__.customerLocationFactory),
/* harmony export */   customerType: () => (/* reexport safe */ _lib_state_hardware_checkout_selectors__WEBPACK_IMPORTED_MODULE_3__.customerType),
/* harmony export */   defaultBillingAccount: () => (/* reexport safe */ _lib_state_hardware_checkout_selectors__WEBPACK_IMPORTED_MODULE_3__.defaultBillingAccount),
/* harmony export */   defaultBillingAccountFactory: () => (/* reexport safe */ _lib_interfaces_billing_account_testfactory__WEBPACK_IMPORTED_MODULE_20__.defaultBillingAccountFactory),
/* harmony export */   defaultSdataSalesOfferFactory: () => (/* reexport safe */ _lib_interfaces_sdata_sales_offer_testfactory__WEBPACK_IMPORTED_MODULE_8__.defaultSdataSalesOfferFactory),
/* harmony export */   defaultState: () => (/* reexport safe */ _lib_state_hardware_checkout_state__WEBPACK_IMPORTED_MODULE_2__.defaultState),
/* harmony export */   deliveryMethodsFactory: () => (/* reexport safe */ _lib_state_hardware_checkout_testfactory__WEBPACK_IMPORTED_MODULE_6__.deliveryMethodsFactory),
/* harmony export */   discountItemFactory: () => (/* reexport safe */ _lib_state_hardware_checkout_testfactory__WEBPACK_IMPORTED_MODULE_6__.discountItemFactory),
/* harmony export */   featureState: () => (/* reexport safe */ _lib_state_hardware_checkout_selectors__WEBPACK_IMPORTED_MODULE_3__.featureState),
/* harmony export */   hardwareCheckoutFeature: () => (/* reexport safe */ _lib_state_hardware_checkout_reducer__WEBPACK_IMPORTED_MODULE_1__.hardwareCheckoutFeature),
/* harmony export */   hardwareCheckoutReducer: () => (/* reexport safe */ _lib_state_hardware_checkout_reducer__WEBPACK_IMPORTED_MODULE_1__.hardwareCheckoutReducer),
/* harmony export */   hardwareOrderChildItem: () => (/* reexport safe */ _lib_state_hardware_checkout_testfactory__WEBPACK_IMPORTED_MODULE_6__.hardwareOrderChildItem),
/* harmony export */   hardwareOrderItem: () => (/* reexport safe */ _lib_state_hardware_checkout_testfactory__WEBPACK_IMPORTED_MODULE_6__.hardwareOrderItem),
/* harmony export */   hardwareOrderTLOItem: () => (/* reexport safe */ _lib_state_hardware_checkout_testfactory__WEBPACK_IMPORTED_MODULE_6__.hardwareOrderTLOItem),
/* harmony export */   ingenicoResult: () => (/* reexport safe */ _lib_state_hardware_checkout_selectors__WEBPACK_IMPORTED_MODULE_3__.ingenicoResult),
/* harmony export */   ncErrorTestfactory: () => (/* reexport safe */ _lib_interfaces_nc_error_testfactory__WEBPACK_IMPORTED_MODULE_16__.ncErrorTestfactory),
/* harmony export */   offerTestFactory: () => (/* reexport safe */ _lib_state_hardware_checkout_testfactory__WEBPACK_IMPORTED_MODULE_6__.offerTestFactory),
/* harmony export */   omapiProducts: () => (/* reexport safe */ _lib_state_hardware_checkout_selectors__WEBPACK_IMPORTED_MODULE_3__.omapiProducts),
/* harmony export */   omapiQueryProducts: () => (/* reexport safe */ _lib_state_hardware_checkout_selectors__WEBPACK_IMPORTED_MODULE_3__.omapiQueryProducts),
/* harmony export */   orderItemTestFactory: () => (/* reexport safe */ _lib_state_hardware_checkout_testfactory__WEBPACK_IMPORTED_MODULE_6__.orderItemTestFactory),
/* harmony export */   personalIdentity: () => (/* reexport safe */ _lib_state_hardware_checkout_selectors__WEBPACK_IMPORTED_MODULE_3__.personalIdentity),
/* harmony export */   personalIdentityResponseTestFactory: () => (/* reexport safe */ _lib_personal_identity_personal_identity_testfactory__WEBPACK_IMPORTED_MODULE_19__.personalIdentityResponseTestFactory),
/* harmony export */   personalIdentityTestFactory: () => (/* reexport safe */ _lib_personal_identity_personal_identity_testfactory__WEBPACK_IMPORTED_MODULE_19__.personalIdentityTestFactory),
/* harmony export */   priceTestFactory: () => (/* reexport safe */ _lib_state_hardware_checkout_testfactory__WEBPACK_IMPORTED_MODULE_6__.priceTestFactory),
/* harmony export */   pricesTestFactory: () => (/* reexport safe */ _lib_state_hardware_checkout_testfactory__WEBPACK_IMPORTED_MODULE_6__.pricesTestFactory),
/* harmony export */   reducer: () => (/* reexport safe */ _lib_state_hardware_checkout_reducer__WEBPACK_IMPORTED_MODULE_1__.reducer),
/* harmony export */   referrerUrl: () => (/* reexport safe */ _lib_state_hardware_checkout_selectors__WEBPACK_IMPORTED_MODULE_3__.referrerUrl),
/* harmony export */   resetStepLoadTime: () => (/* reexport safe */ _lib_state_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_0__.resetStepLoadTime),
/* harmony export */   roleFactory: () => (/* reexport safe */ _lib_customer_account_customer_account_testfactory__WEBPACK_IMPORTED_MODULE_23__.roleFactory),
/* harmony export */   ruleFactory: () => (/* reexport safe */ _lib_state_hardware_checkout_testfactory__WEBPACK_IMPORTED_MODULE_6__.ruleFactory),
/* harmony export */   salesOffer: () => (/* reexport safe */ _lib_state_hardware_checkout_selectors__WEBPACK_IMPORTED_MODULE_3__.salesOffer),
/* harmony export */   salesOrderFactory: () => (/* reexport safe */ _lib_state_hardware_checkout_testfactory__WEBPACK_IMPORTED_MODULE_6__.salesOrderFactory),
/* harmony export */   salesOrderFactoryWithHardwareTlo: () => (/* reexport safe */ _lib_state_hardware_checkout_testfactory__WEBPACK_IMPORTED_MODULE_6__.salesOrderFactoryWithHardwareTlo),
/* harmony export */   salesOrderFromState: () => (/* reexport safe */ _lib_state_hardware_checkout_selectors__WEBPACK_IMPORTED_MODULE_3__.salesOrderFromState),
/* harmony export */   salesOrderState: () => (/* reexport safe */ _lib_state_hardware_checkout_selectors__WEBPACK_IMPORTED_MODULE_3__.salesOrderState),
/* harmony export */   saveSalesOrder: () => (/* reexport safe */ _lib_state_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_0__.saveSalesOrder),
/* harmony export */   sdataDiscountFactory: () => (/* reexport safe */ _lib_interfaces_sdata_sales_offer_testfactory__WEBPACK_IMPORTED_MODULE_8__.sdataDiscountFactory),
/* harmony export */   setAemInput: () => (/* reexport safe */ _lib_state_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_0__.setAemInput),
/* harmony export */   setAnalyticsAttributes: () => (/* reexport safe */ _lib_state_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_0__.setAnalyticsAttributes),
/* harmony export */   setBackButtonVisibility: () => (/* reexport safe */ _lib_state_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_0__.setBackButtonVisibility),
/* harmony export */   setBillingAccounts: () => (/* reexport safe */ _lib_state_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_0__.setBillingAccounts),
/* harmony export */   setCart: () => (/* reexport safe */ _lib_state_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_0__.setCart),
/* harmony export */   setContractSummaryGenerationNotPossible: () => (/* reexport safe */ _lib_state_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_0__.setContractSummaryGenerationNotPossible),
/* harmony export */   setContractSummaryRequired: () => (/* reexport safe */ _lib_state_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_0__.setContractSummaryRequired),
/* harmony export */   setContractSummaryUrl: () => (/* reexport safe */ _lib_state_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_0__.setContractSummaryUrl),
/* harmony export */   setCustomerAccountDetails: () => (/* reexport safe */ _lib_state_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_0__.setCustomerAccountDetails),
/* harmony export */   setCustomerType: () => (/* reexport safe */ _lib_state_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_0__.setCustomerType),
/* harmony export */   setNavigationState: () => (/* reexport safe */ _lib_state_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_0__.setNavigationState),
/* harmony export */   setOmapiProducts: () => (/* reexport safe */ _lib_state_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_0__.setOmapiProducts),
/* harmony export */   setOmapiQueryProducts: () => (/* reexport safe */ _lib_state_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_0__.setOmapiQueryProducts),
/* harmony export */   setPersonalIdentity: () => (/* reexport safe */ _lib_state_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_0__.setPersonalIdentity),
/* harmony export */   setReferrerUrl: () => (/* reexport safe */ _lib_state_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_0__.setReferrerUrl),
/* harmony export */   setSalesOrderState: () => (/* reexport safe */ _lib_state_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_0__.setSalesOrderState),
/* harmony export */   setStartStepLoadTime: () => (/* reexport safe */ _lib_state_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_0__.setStartStepLoadTime),
/* harmony export */   setUrlRequestParameters: () => (/* reexport safe */ _lib_state_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_0__.setUrlRequestParameters),
/* harmony export */   setViewState: () => (/* reexport safe */ _lib_state_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_0__.setViewState),
/* harmony export */   smartphoneWithBasicDiscountSalesOfferFactory: () => (/* reexport safe */ _lib_interfaces_sdata_sales_offer_testfactory__WEBPACK_IMPORTED_MODULE_8__.smartphoneWithBasicDiscountSalesOfferFactory),
/* harmony export */   standaloneDeliveryItemFactory: () => (/* reexport safe */ _lib_state_hardware_checkout_testfactory__WEBPACK_IMPORTED_MODULE_6__.standaloneDeliveryItemFactory),
/* harmony export */   stepAnalytics: () => (/* reexport safe */ _lib_state_hardware_checkout_selectors__WEBPACK_IMPORTED_MODULE_3__.stepAnalytics),
/* harmony export */   urlRequestParameters: () => (/* reexport safe */ _lib_state_hardware_checkout_selectors__WEBPACK_IMPORTED_MODULE_3__.urlRequestParameters),
/* harmony export */   validationElementsFactory: () => (/* reexport safe */ _lib_state_hardware_checkout_testfactory__WEBPACK_IMPORTED_MODULE_6__.validationElementsFactory),
/* harmony export */   viewState: () => (/* reexport safe */ _lib_state_hardware_checkout_selectors__WEBPACK_IMPORTED_MODULE_3__.viewState)
/* harmony export */ });
/* harmony import */ var _lib_state_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/+state/hardware-checkout.actions */ 58778);
/* harmony import */ var _lib_state_hardware_checkout_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/+state/hardware-checkout.reducer */ 4011);
/* harmony import */ var _lib_state_hardware_checkout_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/+state/hardware-checkout.state */ 85769);
/* harmony import */ var _lib_state_hardware_checkout_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/+state/hardware-checkout.selectors */ 63159);
/* harmony import */ var _lib_state_hardware_checkout_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/+state/hardware-checkout.effects */ 97789);
/* harmony import */ var _lib_state_sales_hardware_checkout_ngrx_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/+state/sales-hardware-checkout-ngrx.module */ 74641);
/* harmony import */ var _lib_state_hardware_checkout_testfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/+state/hardware-checkout.testfactory */ 69860);
/* harmony import */ var _lib_interfaces_sdata_sales_offer_interface__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/interfaces/sdata-sales-offer.interface */ 92162);
/* harmony import */ var _lib_interfaces_sdata_sales_offer_testfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/interfaces/sdata-sales-offer.testfactory */ 88499);
/* harmony import */ var _lib_interfaces_view_state_interface__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/interfaces/view-state.interface */ 78141);
/* harmony import */ var _lib_interfaces_billing_account_interface__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/interfaces/billing-account.interface */ 1756);
/* harmony import */ var _lib_interfaces_sales_order_interface__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/interfaces/sales-order.interface */ 51805);
/* harmony import */ var _lib_interfaces_payment_request_data_interface__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/interfaces/payment-request-data.interface */ 28354);
/* harmony import */ var _lib_interfaces_payment_response_data_interface__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/interfaces/payment-response-data.interface */ 64252);
/* harmony import */ var _lib_interfaces_url_request_parameters_interface__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lib/interfaces/url-request-parameters.interface */ 60160);
/* harmony import */ var _lib_interfaces_nc_error__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lib/interfaces/nc.error */ 47298);
/* harmony import */ var _lib_interfaces_nc_error_testfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lib/interfaces/nc.error.testfactory */ 37216);
/* harmony import */ var _lib_interfaces_aem_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lib/interfaces/aem.input */ 67593);
/* harmony import */ var _lib_personal_identity_personal_identity_interface__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lib/personal-identity/personal-identity.interface */ 28141);
/* harmony import */ var _lib_personal_identity_personal_identity_testfactory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lib/personal-identity/personal-identity.testfactory */ 67886);
/* harmony import */ var _lib_interfaces_billing_account_testfactory__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./lib/interfaces/billing-account.testfactory */ 77689);
/* harmony import */ var _lib_customer_account_customer_account_details_interface__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./lib/customer-account/customer-account-details.interface */ 54214);
/* harmony import */ var _lib_customer_account_customer_account_util__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./lib/customer-account/customer-account.util */ 79105);
/* harmony import */ var _lib_customer_account_customer_account_testfactory__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./lib/customer-account/customer-account.testfactory */ 6196);
/* harmony import */ var _lib_enums_view_state_enum__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./lib/enums/view-state.enum */ 50011);
/* harmony import */ var _lib_enums_sales_order_state_enum__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./lib/enums/sales-order-state.enum */ 95837);
/* harmony import */ var _lib_enums_customer_type_enum__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./lib/enums/customer-type.enum */ 68485);
/* harmony import */ var _lib_enums_customer_account_type_enum__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./lib/enums/customer-account-type.enum */ 5037);
/* harmony import */ var _lib_enums_customer_credit_classification_type_enum__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./lib/enums/customer-credit-classification-type.enum */ 33091);
/* harmony import */ var _lib_enums_validation_element_enum__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./lib/enums/validation-element.enum */ 82572);
/* harmony import */ var _lib_constants_customer_account_type_blocked_const__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./lib/constants/customer-account-type-blocked.const */ 3871);
/* harmony import */ var _lib_util_personal_identity_util__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./lib/util/personal-identity.util */ 87551);
/* harmony import */ var _lib_enums_contact_details_enum__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./lib/enums/contact-details.enum */ 86294);
/* harmony import */ var _lib_constants_hardware_checkout_constant__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./lib/constants/hardware-checkout.constant */ 5175);



































/***/ }),

/***/ 58778:
/*!**********************************************************************************************!*\
  !*** ./libs/sales/hardware-checkout/data-access/src/lib/+state/hardware-checkout.actions.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resetStepLoadTime: () => (/* binding */ resetStepLoadTime),
/* harmony export */   saveSalesOrder: () => (/* binding */ saveSalesOrder),
/* harmony export */   setAemInput: () => (/* binding */ setAemInput),
/* harmony export */   setAnalyticsAttributes: () => (/* binding */ setAnalyticsAttributes),
/* harmony export */   setBackButtonVisibility: () => (/* binding */ setBackButtonVisibility),
/* harmony export */   setBillingAccounts: () => (/* binding */ setBillingAccounts),
/* harmony export */   setCart: () => (/* binding */ setCart),
/* harmony export */   setContractSummaryGenerationNotPossible: () => (/* binding */ setContractSummaryGenerationNotPossible),
/* harmony export */   setContractSummaryRequired: () => (/* binding */ setContractSummaryRequired),
/* harmony export */   setContractSummaryUrl: () => (/* binding */ setContractSummaryUrl),
/* harmony export */   setCustomerAccountDetails: () => (/* binding */ setCustomerAccountDetails),
/* harmony export */   setCustomerType: () => (/* binding */ setCustomerType),
/* harmony export */   setNavigationState: () => (/* binding */ setNavigationState),
/* harmony export */   setOmapiProducts: () => (/* binding */ setOmapiProducts),
/* harmony export */   setOmapiQueryProducts: () => (/* binding */ setOmapiQueryProducts),
/* harmony export */   setPersonalIdentity: () => (/* binding */ setPersonalIdentity),
/* harmony export */   setReferrerUrl: () => (/* binding */ setReferrerUrl),
/* harmony export */   setSalesOrderState: () => (/* binding */ setSalesOrderState),
/* harmony export */   setStartStepLoadTime: () => (/* binding */ setStartStepLoadTime),
/* harmony export */   setUrlRequestParameters: () => (/* binding */ setUrlRequestParameters),
/* harmony export */   setViewState: () => (/* binding */ setViewState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);

const setUrlRequestParameters = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[hardware - checkout] save URL request parameters', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setReferrerUrl = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[hardware - checkout] set the referrerUrl', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setOmapiQueryProducts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[hardware - checkout] store omapi query products', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setOmapiProducts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[hardware - checkout] store omapi products', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setBillingAccounts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[hardware - checkout] set billing accounts', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setContractSummaryRequired = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[hardware - checkout] set the state of the contract summary requirement', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setContractSummaryUrl = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[hardware - checkout] set the contract summary url once it is generated', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setContractSummaryGenerationNotPossible = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[hardware - checkout] set the contract summary generation not possible');
const saveSalesOrder = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[hardware - checkout] save sales order', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setSalesOrderState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[hardware - checkout] set the state of the sales order', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setViewState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[hardware - checkout] set viewstate', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setBackButtonVisibility = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[hardware - checkout] set back button visibility', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setCustomerType = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[hardware - checkout] set customer type', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setAnalyticsAttributes = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[hardware - checkout] set analytics attributes', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setCustomerAccountDetails = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[hardware - checkout] set customer account details', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setPersonalIdentity = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[hardware - checkout] set personal identity', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setNavigationState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[hardware - checkout] set navigation state', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setAemInput = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[hardware - checkout] set aem input', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setCart = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[hardware - checkout] set cart', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setStartStepLoadTime = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[analytics] set start step load time');
const resetStepLoadTime = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[analytics] reset step load time');

/***/ }),

/***/ 97789:
/*!**********************************************************************************************!*\
  !*** ./libs/sales/hardware-checkout/data-access/src/lib/+state/hardware-checkout.effects.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HardwareCheckoutEffects: () => (/* binding */ HardwareCheckoutEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ 12506);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hardware-checkout.actions */ 58778);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_sales_offer_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/sales-offer.util */ 32051);
/* harmony import */ var _util_sales_order_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/sales-order.util */ 24346);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hardware_checkout_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hardware-checkout.selectors */ 63159);
/* harmony import */ var _enums_customer_type_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../enums/customer-type.enum */ 68485);
/* harmony import */ var _constants_hardware_checkout_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants/hardware-checkout.constant */ 5175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_10__);














class HardwareCheckoutEffects {
  constructor(actions$, store, pathCategorisationService) {
    this.actions$ = actions$;
    this.store = store;
    this.pathCategorisationService = pathCategorisationService;
    this.setAnalyticsIntent$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_1__.setUrlRequestParameters), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(action => {
      const analyticsAttributes = this.commonAttributes(action?.urlRequestParameters);
      // storing analytics info in the session as well for the thank-you page
      // because NC does not provide an API to retrieve a sales order that is in 'processing' state
      window.sessionStorage.setItem(_constants_hardware_checkout_constant__WEBPACK_IMPORTED_MODULE_9__.SessionStorageConstants.CHECKOUT_ANALYTICS_ATTRIBUTES, JSON.stringify(analyticsAttributes));
      return (0,_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_1__.setAnalyticsAttributes)({
        analyticsAttributes: analyticsAttributes
      });
    })));
    this.calculateSalesOrderCart$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_1__.saveSalesOrder), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(action => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.forkJoin)({
      salesOrder: (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(action),
      omapiQueryProducts: this.store.select(_hardware_checkout_selectors__WEBPACK_IMPORTED_MODULE_7__.omapiQueryProducts).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.take)(1)),
      isSoho: this.store.select(_hardware_checkout_selectors__WEBPACK_IMPORTED_MODULE_7__.customerType).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(type => type === _enums_customer_type_enum__WEBPACK_IMPORTED_MODULE_8__.CustomerTypeEnum.SOHO))
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(action => action.omapiQueryProducts !== undefined), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(action => _util_sales_order_util__WEBPACK_IMPORTED_MODULE_5__.SalesOrderUtil.mapToUdlCart(action.salesOrder, action.omapiQueryProducts || [], action.isSoho)), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(cart => {
      // storing analytics info in the session as well for the thank-you page
      // because NC does not provide an API to retrieve a sales order that is in 'processing' state
      window.sessionStorage.setItem(_constants_hardware_checkout_constant__WEBPACK_IMPORTED_MODULE_9__.SessionStorageConstants.CHECKOUT_ANALYTICS_CART, JSON.stringify(cart));
      return (0,_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_1__.setCart)({
        cart: cart
      });
    })))));
    this.calculateOfferCart$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_1__.setUrlRequestParameters), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(action => action.urlRequestParameters), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(urlRequestParams => urlRequestParams !== undefined && urlRequestParams.salesOffer.offers !== undefined), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(urlRequestParams => _util_sales_offer_util__WEBPACK_IMPORTED_MODULE_4__.SalesOfferUtil.mapToUdlCart(urlRequestParams.salesOffer)), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(cart => (0,_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_1__.setCart)({
      cart: cart
    }))));
    this.setContractSummaryRequired$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_1__.setContractSummaryRequired), (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_1__.setContractSummaryRequired), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(action => {
      window.sessionStorage.setItem(_constants_hardware_checkout_constant__WEBPACK_IMPORTED_MODULE_9__.SessionStorageConstants.CHECKOUT_CONTRACT_SUMMARY_REQUIRED, action.contractSummaryRequired.toString());
    })), {
      dispatch: false
    });
    this.setContractSummaryUrl$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_1__.setContractSummaryUrl), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(action => {
      window.sessionStorage.setItem(_constants_hardware_checkout_constant__WEBPACK_IMPORTED_MODULE_9__.SessionStorageConstants.CHECKOUT_CONTRACT_SUMMARY_URL, action.contractSummaryUrl);
    })), {
      dispatch: false
    });
  }
  getIntentPrefix() {
    return this.pathCategorisationService.getCustomerBrand() + ` checkout:`;
  }
  commonAttributes(urlRequestParameters) {
    return {
      intent: this.getIntentPrefix() + urlRequestParameters?.intent,
      flowType: urlRequestParameters?.flow,
      source: urlRequestParameters?.source,
      flowCategory: 'migration',
      itemGroup: 'new sales'
    };
  }
  static #_ = this.ɵfac = function HardwareCheckoutEffects_Factory(t) {
    return new (t || HardwareCheckoutEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__.PathCategorisationService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
    token: HardwareCheckoutEffects,
    factory: HardwareCheckoutEffects.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4011:
/*!**********************************************************************************************!*\
  !*** ./libs/sales/hardware-checkout/data-access/src/lib/+state/hardware-checkout.reducer.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HARDWARE_CHECKOUT_FEATURE_KEY: () => (/* binding */ HARDWARE_CHECKOUT_FEATURE_KEY),
/* harmony export */   hardwareCheckoutFeature: () => (/* binding */ hardwareCheckoutFeature),
/* harmony export */   hardwareCheckoutReducer: () => (/* binding */ hardwareCheckoutReducer),
/* harmony export */   reducer: () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hardware_checkout_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hardware-checkout.state */ 85769);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immer */ 75825);
/* harmony import */ var _hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hardware-checkout.actions */ 58778);




const HARDWARE_CHECKOUT_FEATURE_KEY = 'hardwarecheckout';
const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createReducer)(_hardware_checkout_state__WEBPACK_IMPORTED_MODULE_1__.defaultState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_2__.setUrlRequestParameters, (state, props) => {
  return (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
    draft.urlRequestParameters = props.urlRequestParameters;
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_2__.setReferrerUrl, (state, props) => {
  return (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
    draft.referrerUrl = props.referrerUrl;
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_2__.setOmapiQueryProducts, (state, props) => {
  return (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
    draft.omapiQueryProducts = props.omapiProducts;
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_2__.setOmapiProducts, (state, props) => {
  return (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
    draft.omapiProducts = props.omapiProducts;
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_2__.setBillingAccounts, (state, props) => {
  return (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
    draft.billingAccounts = props.billingAccounts;
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_2__.setContractSummaryRequired, (state, props) => {
  return (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
    draft.contractSummaryRequired = props.contractSummaryRequired;
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_2__.setContractSummaryUrl, (state, props) => {
  return (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
    draft.contractSummaryUrl = props.contractSummaryUrl;
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_2__.setContractSummaryGenerationNotPossible, state => {
  return (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
    draft.contractSummaryGenerationNotPossible = true;
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_2__.saveSalesOrder, (state, salesOrder) => {
  return (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
    draft.salesOrder = salesOrder;
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_2__.setSalesOrderState, (state, props) => {
  return (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
    draft.salesOrderState = props.salesOrderState;
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_2__.setViewState, (state, props) => {
  return (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
    draft.viewState = props.viewState;
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_2__.setBackButtonVisibility, (state, props) => {
  return (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
    draft.viewState.showBackButton = props.backButtonVisibility;
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_2__.setCustomerType, (state, props) => {
  return (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
    draft.customerType = props.customerType;
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_2__.setAnalyticsAttributes, (state, props) => {
  return (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
    draft.analyticsAttributes = props.analyticsAttributes;
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_2__.setCustomerAccountDetails, (state, props) => {
  return (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
    draft.customerAccountDetails = props.customerAccountDetails;
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_2__.setPersonalIdentity, (state, props) => {
  return (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
    draft.personalIdentity = props.personalIdentity;
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_2__.setNavigationState, (state, props) => {
  return (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
    draft.viewState.showNavigation = props.navigationState;
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_2__.setAemInput, (state, props) => {
  return (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
    draft.aemInput = props.aemInput;
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_2__.setCart, (state, props) => {
  return (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
    draft.cart = props.cart;
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_2__.setStartStepLoadTime, state => {
  return (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
    draft.stepAnalyticsInfo.startLoadTime = new Date().getTime();
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_hardware_checkout_actions__WEBPACK_IMPORTED_MODULE_2__.resetStepLoadTime, state => {
  return (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
    draft.stepAnalyticsInfo.startLoadTime = undefined;
  });
}));
function hardwareCheckoutReducer(state = _hardware_checkout_state__WEBPACK_IMPORTED_MODULE_1__.defaultState, action) {
  return reducer(state, action);
}
const hardwareCheckoutFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeature)({
  name: HARDWARE_CHECKOUT_FEATURE_KEY,
  reducer: hardwareCheckoutReducer
});

/***/ }),

/***/ 63159:
/*!************************************************************************************************!*\
  !*** ./libs/sales/hardware-checkout/data-access/src/lib/+state/hardware-checkout.selectors.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aemInput: () => (/* binding */ aemInput),
/* harmony export */   analyticsAttributes: () => (/* binding */ analyticsAttributes),
/* harmony export */   billingAccounts: () => (/* binding */ billingAccounts),
/* harmony export */   cart: () => (/* binding */ cart),
/* harmony export */   contractSummaryGenerationNotPossible: () => (/* binding */ contractSummaryGenerationNotPossible),
/* harmony export */   contractSummaryRequired: () => (/* binding */ contractSummaryRequired),
/* harmony export */   contractSummaryUrl: () => (/* binding */ contractSummaryUrl),
/* harmony export */   customerAccountDetails: () => (/* binding */ customerAccountDetails),
/* harmony export */   customerType: () => (/* binding */ customerType),
/* harmony export */   defaultBillingAccount: () => (/* binding */ defaultBillingAccount),
/* harmony export */   featureState: () => (/* binding */ featureState),
/* harmony export */   ingenicoResult: () => (/* binding */ ingenicoResult),
/* harmony export */   omapiProducts: () => (/* binding */ omapiProducts),
/* harmony export */   omapiQueryProducts: () => (/* binding */ omapiQueryProducts),
/* harmony export */   personalIdentity: () => (/* binding */ personalIdentity),
/* harmony export */   referrerUrl: () => (/* binding */ referrerUrl),
/* harmony export */   salesOffer: () => (/* binding */ salesOffer),
/* harmony export */   salesOrderFromState: () => (/* binding */ salesOrderFromState),
/* harmony export */   salesOrderState: () => (/* binding */ salesOrderState),
/* harmony export */   stepAnalytics: () => (/* binding */ stepAnalytics),
/* harmony export */   urlRequestParameters: () => (/* binding */ urlRequestParameters),
/* harmony export */   viewState: () => (/* binding */ viewState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hardware_checkout_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hardware-checkout.reducer */ 4011);
/* harmony import */ var _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sales/shared/data-access */ 67179);
/* harmony import */ var _sales_shared_data_access__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sales_shared_data_access__WEBPACK_IMPORTED_MODULE_2__);



const featureState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)(_hardware_checkout_reducer__WEBPACK_IMPORTED_MODULE_1__.HARDWARE_CHECKOUT_FEATURE_KEY);
const salesOffer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => {
  return state.urlRequestParameters?.salesOffer;
});
const referrerUrl = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => {
  return state.referrerUrl;
});
const omapiQueryProducts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => {
  return state.omapiQueryProducts;
});
const omapiProducts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => {
  return state.omapiProducts;
});
const billingAccounts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => {
  return state.billingAccounts;
});
const defaultBillingAccount = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => {
  return state.billingAccounts?.find(billingAccount => {
    return billingAccount.defaultBillingAccount.name === 'Yes';
  });
});
const contractSummaryRequired = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => {
  return state.contractSummaryRequired;
});
const contractSummaryUrl = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => {
  return state.contractSummaryUrl;
});
const contractSummaryGenerationNotPossible = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => {
  return state.contractSummaryGenerationNotPossible;
});
const salesOrderState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => {
  return state.salesOrderState;
});
const salesOrderFromState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => {
  return state.salesOrder;
});
const viewState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => {
  return state.viewState;
});
const customerType = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => {
  return state.customerType;
});
const personalIdentity = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => {
  return state.personalIdentity;
});
const customerAccountDetails = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => {
  return state.customerAccountDetails;
});
const aemInput = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => {
  return state.aemInput;
});
const analyticsAttributes = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => {
  return state.analyticsAttributes;
});
const urlRequestParameters = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => {
  return state.urlRequestParameters;
});
const cart = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => {
  return state.cart;
});
const stepAnalytics = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => {
  return state.stepAnalyticsInfo;
});
const ingenicoResult = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => {
  return (0,_sales_shared_data_access__WEBPACK_IMPORTED_MODULE_2__.createIngenicoResultUtil)(state.urlRequestParameters?.ingenicoResult);
});

/***/ }),

/***/ 85769:
/*!********************************************************************************************!*\
  !*** ./libs/sales/hardware-checkout/data-access/src/lib/+state/hardware-checkout.state.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultState: () => (/* binding */ defaultState)
/* harmony export */ });
/* harmony import */ var _enums_view_state_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/view-state.enum */ 50011);
/* harmony import */ var _enums_sales_order_state_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/sales-order-state.enum */ 95837);
/* harmony import */ var _enums_customer_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/customer-type.enum */ 68485);
/* harmony import */ var _enums_brand_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums/brand.enum */ 45987);




const defaultState = {
  urlRequestParameters: undefined,
  salesOrder: undefined,
  referrerUrl: undefined,
  omapiQueryProducts: undefined,
  omapiProducts: undefined,
  billingAccounts: undefined,
  contractSummaryRequired: undefined,
  contractSummaryUrl: undefined,
  contractSummaryGenerationNotPossible: false,
  salesOrderState: _enums_sales_order_state_enum__WEBPACK_IMPORTED_MODULE_1__.SalesOrderStateEnum.INITIALISING,
  viewState: {
    key: _enums_view_state_enum__WEBPACK_IMPORTED_MODULE_0__.ViewStateEnum.STEPPER,
    showNavigation: true,
    showBackButton: true
  },
  customerType: _enums_customer_type_enum__WEBPACK_IMPORTED_MODULE_2__.CustomerTypeEnum.RESIDENTIAL,
  customerAccountDetails: undefined,
  personalIdentity: undefined,
  aemInput: undefined,
  brand: _enums_brand_enum__WEBPACK_IMPORTED_MODULE_3__.BrandEnum.TELENET,
  analyticsAttributes: undefined,
  cart: undefined,
  stepAnalyticsInfo: {
    startLoadTime: undefined
  }
};

/***/ }),

/***/ 69860:
/*!**************************************************************************************************!*\
  !*** ./libs/sales/hardware-checkout/data-access/src/lib/+state/hardware-checkout.testfactory.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customerLocationFactory: () => (/* binding */ customerLocationFactory),
/* harmony export */   deliveryMethodsFactory: () => (/* binding */ deliveryMethodsFactory),
/* harmony export */   discountItemFactory: () => (/* binding */ discountItemFactory),
/* harmony export */   hardwareOrderChildItem: () => (/* binding */ hardwareOrderChildItem),
/* harmony export */   hardwareOrderItem: () => (/* binding */ hardwareOrderItem),
/* harmony export */   hardwareOrderTLOItem: () => (/* binding */ hardwareOrderTLOItem),
/* harmony export */   offerTestFactory: () => (/* binding */ offerTestFactory),
/* harmony export */   orderItemTestFactory: () => (/* binding */ orderItemTestFactory),
/* harmony export */   priceTestFactory: () => (/* binding */ priceTestFactory),
/* harmony export */   pricesTestFactory: () => (/* binding */ pricesTestFactory),
/* harmony export */   ruleFactory: () => (/* binding */ ruleFactory),
/* harmony export */   salesOrderFactory: () => (/* binding */ salesOrderFactory),
/* harmony export */   salesOrderFactoryWithHardwareTlo: () => (/* binding */ salesOrderFactoryWithHardwareTlo),
/* harmony export */   standaloneDeliveryItemFactory: () => (/* binding */ standaloneDeliveryItemFactory),
/* harmony export */   validationElementsFactory: () => (/* binding */ validationElementsFactory)
/* harmony export */ });
/* harmony import */ var factory_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! factory.ts */ 46032);
/* harmony import */ var _enums_order_item_action_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/order-item-action.enum */ 19659);
/* harmony import */ var _enums_validation_element_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/validation-element.enum */ 82572);



const ruleFactory = factory_ts__WEBPACK_IMPORTED_MODULE_0__.Sync.makeFactory({
  targetOrderItemIds: ['9168485989613270995'],
  discountAmount: {
    currency: {
      name: 'Euro',
      code: 'EUR'
    },
    value: '90'
  },
  discount: {
    name: 'Discount Telenet Customer Price',
    id: '9155501914465272430'
  },
  slotName: 'Basic Discount Slots',
  id: '-27280'
});
const validationElementsFactory = factory_ts__WEBPACK_IMPORTED_MODULE_0__.Sync.makeFactory({
  targetOrderItemId: '9168485984313270983',
  typeOfProblem: _enums_validation_element_enum__WEBPACK_IMPORTED_MODULE_2__.ValidationElementEnum.FEASIBILITY_CHECK_REQUIRED
});
const offerTestFactory = factory_ts__WEBPACK_IMPORTED_MODULE_0__.Sync.makeFactoryWithRequired({
  code: 'code',
  businessDomains: []
});
const priceTestFactory = factory_ts__WEBPACK_IMPORTED_MODULE_0__.Sync.makeFactory({
  currency: {
    name: 'Euro',
    code: 'EUR'
  },
  value: '100'
});
const pricesTestFactory = factory_ts__WEBPACK_IMPORTED_MODULE_0__.Sync.makeFactory({
  recurrentTax: priceTestFactory.build(),
  oneTimeDiscountedWithoutTaxes: priceTestFactory.build(),
  oneTimeDiscounted: priceTestFactory.build(),
  recurrentDiscount: priceTestFactory.build(),
  oneTimeDiscount: priceTestFactory.build(),
  recurrentTotal: priceTestFactory.build(),
  upfrontPaymentTotalForHomeDeliveryWithoutTaxes: priceTestFactory.build(),
  upfrontPaymentTotalForSecuredHomeDeliveryEquipment: priceTestFactory.build(),
  recurrentDiscountedWithoutTaxes: priceTestFactory.build(),
  oneTimeDiscountedWithoutUpfrontWithoutTaxes: priceTestFactory.build(),
  recurrentDiscounted: priceTestFactory.build(),
  upfrontPaymentTotal: priceTestFactory.build(),
  oneTimeInitialWithoutUpfront: priceTestFactory.build(),
  upfrontPaymentTotalWithoutTaxes: priceTestFactory.build(),
  oneTimeDiscountWithoutTaxes: priceTestFactory.build(),
  oneTimeTax: priceTestFactory.build(),
  oneTimeDiscountedWithoutUpfront: priceTestFactory.build(),
  recurrentDiscountWithoutTaxes: priceTestFactory.build(),
  upfrontPaymentDiscountedWithoutTaxes: priceTestFactory.build(),
  upfrontPaymentInitial: priceTestFactory.build(),
  oneTimeTotal: priceTestFactory.build(),
  upfrontPaymentDiscounted: priceTestFactory.build(),
  oneTimeTotalWithoutTaxes: priceTestFactory.build(),
  recurrentTotalWithoutTaxes: priceTestFactory.build()
});
const discountItemFactory = factory_ts__WEBPACK_IMPORTED_MODULE_0__.Sync.makeFactory({
  id: (0,factory_ts__WEBPACK_IMPORTED_MODULE_0__.each)(i => i.toString(2)),
  discountId: (0,factory_ts__WEBPACK_IMPORTED_MODULE_0__.each)(i => i.toString(2)),
  name: 'Discount Telenet Customer Price',
  targetOrderItems: []
});
const orderItemTestFactory = factory_ts__WEBPACK_IMPORTED_MODULE_0__.Sync.makeFactory({
  action: _enums_order_item_action_enum__WEBPACK_IMPORTED_MODULE_1__.OrderItemActionEnum.ADD,
  id: (0,factory_ts__WEBPACK_IMPORTED_MODULE_0__.each)(i => i.toString(2)),
  customerProductId: '',
  offer: offerTestFactory.build({
    id: '99999999'
  }),
  name: 'Testphone',
  orderItems: [],
  chars: {
    'Item Code': '',
    'Postal Code': '',
    Street: ''
  },
  prices: pricesTestFactory.build({
    oneTimeDiscount: priceTestFactory.build({
      value: '0.00',
      currency: {
        name: 'Euro',
        code: 'EUR'
      }
    }),
    oneTimeDiscountWithoutTaxes: priceTestFactory.build({
      value: '0.00',
      currency: {
        name: 'Euro',
        code: 'EUR'
      }
    })
  })
});
const orderItemWithDiscountTestFactory = orderItemTestFactory.extend({
  name: 'Discounted testphone',
  prices: pricesTestFactory.build({
    oneTimeDiscount: priceTestFactory.build({
      value: '25',
      currency: {
        name: 'Euro',
        code: 'EUR'
      }
    })
  })
});
const hardwareOrderTLOItem = orderItemTestFactory.extend({
  id: '123456789',
  name: 'Hardware order item',
  orderItems: [],
  offer: offerTestFactory.build({
    id: '12345',
    businessDomains: ['Duo-Location', 'Hardware TLO', 'Skip for Takeover', 'Retail BA', 'OC: Skip Add OI from Business Case', 'Skip CA Activation', 'Supplementary Service']
  })
});
const hardwareOrderChildItem = orderItemTestFactory.extend({
  id: '987654321',
  name: 'Muvit homecharger pd 20w + qc 3.0 18w White',
  orderItems: [],
  offer: offerTestFactory.build({
    id: '12345',
    businessDomains: []
  }),
  chars: {
    'Item Code': ''
  }
});
const hardwareOrderItem = orderItemTestFactory.extend({
  id: '987654321',
  name: 'Muvit homecharger pd 20w + qc 3.0 18w White',
  orderItems: [hardwareOrderChildItem.build()],
  offer: offerTestFactory.build({
    id: '12345',
    businessDomains: []
  })
});
const salesOrderFactory = (0,factory_ts__WEBPACK_IMPORTED_MODULE_0__.makeFactory)({
  id: '9168485854013261194',
  orderItems: [hardwareOrderTLOItem.build({
    orderItems: [orderItemTestFactory.build({
      orderItems: [orderItemTestFactory.build({
        name: 'Apple iphone 13',
        prices: pricesTestFactory.build({
          oneTimeDiscount: priceTestFactory.build({
            value: '0.00',
            currency: {
              name: 'Euro',
              code: 'EUR'
            }
          }),
          oneTimeTotal: priceTestFactory.build({
            value: '750',
            currency: {
              name: 'Euro',
              code: 'EUR'
            }
          })
        })
      })]
    }), orderItemTestFactory.build({
      orderItems: [orderItemWithDiscountTestFactory.build({
        name: 'Airpods',
        prices: pricesTestFactory.build({
          oneTimeTotal: priceTestFactory.build({
            value: '125',
            currency: {
              name: 'Euro',
              code: 'EUR'
            }
          }),
          oneTimeDiscount: priceTestFactory.build({
            value: '25',
            currency: {
              name: 'Euro',
              code: 'EUR'
            }
          }),
          oneTimeDiscounted: priceTestFactory.build({
            value: '100',
            currency: {
              name: 'Euro',
              code: 'EUR'
            }
          })
        })
      })]
    }), orderItemTestFactory.build({
      orderItems: [orderItemWithDiscountTestFactory.build({
        name: 'Iphone cable',
        prices: pricesTestFactory.build({
          oneTimeTotal: priceTestFactory.build({
            value: '50',
            currency: {
              name: 'Euro',
              code: 'EUR'
            }
          }),
          oneTimeDiscount: priceTestFactory.build({
            value: '15',
            currency: {
              name: 'Euro',
              code: 'EUR'
            }
          }),
          oneTimeDiscounted: priceTestFactory.build({
            value: '35',
            currency: {
              name: 'Euro',
              code: 'EUR'
            }
          })
        })
      })]
    })]
  })],
  rules: [],
  price: pricesTestFactory.build(),
  discountItems: discountItemFactory.buildList(5),
  validationElements: []
});
const salesOrderFactoryWithHardwareTlo = salesOrderFactory.extend({
  orderItems: [hardwareOrderTLOItem.build()]
});
const customerLocationFactory = factory_ts__WEBPACK_IMPORTED_MODULE_0__.Sync.makeFactory({
  id: '1',
  name: 'test',
  address: {
    name: 'test',
    id: '1'
  },
  easySwitchId: '123456791',
  isFleetLocation: false,
  isPseudoLocation: false,
  easySwitchInUse: false
});
const deliveryOrderItemFactory = (0,factory_ts__WEBPACK_IMPORTED_MODULE_0__.makeFactory)({
  name: '',
  id: ''
});
const deliveryMethodFactory = (0,factory_ts__WEBPACK_IMPORTED_MODULE_0__.makeFactory)({
  name: 'Home delivery Telenet hardware (CVP)',
  id: '9158094744165997291'
});
const standaloneDeliveryItemFactory = (0,factory_ts__WEBPACK_IMPORTED_MODULE_0__.makeFactory)({
  deliveryOrderItem: deliveryOrderItemFactory.build(),
  deliveryMethods: [deliveryMethodFactory.build()]
});
const deliveryMethodsFactory = (0,factory_ts__WEBPACK_IMPORTED_MODULE_0__.makeFactory)({
  standaloneDeliveryItems: [standaloneDeliveryItemFactory.build()]
});

/***/ }),

/***/ 74641:
/*!********************************************************************************************************!*\
  !*** ./libs/sales/hardware-checkout/data-access/src/lib/+state/sales-hardware-checkout-ngrx.module.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HardwareCheckoutNgrxModule: () => (/* binding */ HardwareCheckoutNgrxModule)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hardware_checkout_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hardware-checkout.reducer */ 4011);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 12506);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hardware_checkout_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hardware-checkout.effects */ 97789);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);







class HardwareCheckoutNgrxModule {
  static #_ = this.ɵfac = function HardwareCheckoutNgrxModule_Factory(t) {
    return new (t || HardwareCheckoutNgrxModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: HardwareCheckoutNgrxModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.StoreModule.forFeature(_hardware_checkout_reducer__WEBPACK_IMPORTED_MODULE_1__.hardwareCheckoutFeature), _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.EffectsModule.forFeature(_hardware_checkout_effects__WEBPACK_IMPORTED_MODULE_3__.HardwareCheckoutEffects)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](HardwareCheckoutNgrxModule, {
    imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.EffectsFeatureModule]
  });
})();

/***/ }),

/***/ 3871:
/*!***********************************************************************************************************!*\
  !*** ./libs/sales/hardware-checkout/data-access/src/lib/constants/customer-account-type-blocked.const.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customerAccountTypeBlockedConst: () => (/* binding */ customerAccountTypeBlockedConst)
/* harmony export */ });
/* harmony import */ var _enums_customer_account_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/customer-account-type.enum */ 5037);

const customerAccountTypeBlockedConst = [_enums_customer_account_type_enum__WEBPACK_IMPORTED_MODULE_0__.CustomerAccountTypeEnum.FORMER, _enums_customer_account_type_enum__WEBPACK_IMPORTED_MODULE_0__.CustomerAccountTypeEnum.LOST_PROSPECT, _enums_customer_account_type_enum__WEBPACK_IMPORTED_MODULE_0__.CustomerAccountTypeEnum.PROSPECT, _enums_customer_account_type_enum__WEBPACK_IMPORTED_MODULE_0__.CustomerAccountTypeEnum.PENDING_ACTIVATION];

/***/ }),

/***/ 5175:
/*!**************************************************************************************************!*\
  !*** ./libs/sales/hardware-checkout/data-access/src/lib/constants/hardware-checkout.constant.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesOfferTypeEnum: () => (/* binding */ SalesOfferTypeEnum),
/* harmony export */   SessionStorageConstants: () => (/* binding */ SessionStorageConstants)
/* harmony export */ });
class SalesOfferTypeEnum {
  static #_ = this.SMARTPHONES = ['smartphones', 'handset'];
  static #_2 = this.SMARTPHONE = 'SMARTPHONE';
}
class SessionStorageConstants {
  static #_ = this.CHECKOUT_ANALYTICS_ATTRIBUTES = 'checkout_analytics_attributes';
  static #_2 = this.CHECKOUT_ANALYTICS_CART = 'checkout_analytics_cart';
  static #_3 = this.CHECKOUT_CONTRACT_SUMMARY_URL = 'checkout_contract_summary_url';
  static #_4 = this.CHECKOUT_CONTRACT_SUMMARY_REQUIRED = 'checkout_contract_summary_required';
}

/***/ }),

/***/ 54214:
/*!*****************************************************************************************************************!*\
  !*** ./libs/sales/hardware-checkout/data-access/src/lib/customer-account/customer-account-details.interface.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactMethodClassificationType: () => (/* binding */ ContactMethodClassificationType),
/* harmony export */   ContactMethodType: () => (/* binding */ ContactMethodType),
/* harmony export */   RoleType: () => (/* binding */ RoleType)
/* harmony export */ });
var RoleType;
(function (RoleType) {
  RoleType["CONTRACT_HOLDER"] = "Contract Holder";
  RoleType["BILLING_CONTACT"] = "Billing Contact";
})(RoleType || (RoleType = {}));
var ContactMethodType;
(function (ContactMethodType) {
  ContactMethodType["EMAIL"] = "E-mail";
  ContactMethodType["MOBILE_PHONE"] = "Mobile Phone";
  ContactMethodType["POST"] = "Post";
})(ContactMethodType || (ContactMethodType = {}));
var ContactMethodClassificationType;
(function (ContactMethodClassificationType) {
  ContactMethodClassificationType["PRIMARY"] = "Primary";
  ContactMethodClassificationType["PRIVATE"] = "Private";
})(ContactMethodClassificationType || (ContactMethodClassificationType = {}));

/***/ }),

/***/ 6196:
/*!***********************************************************************************************************!*\
  !*** ./libs/sales/hardware-checkout/data-access/src/lib/customer-account/customer-account.testfactory.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   childRoleFactory: () => (/* binding */ childRoleFactory),
/* harmony export */   contactFactory: () => (/* binding */ contactFactory),
/* harmony export */   contactMethodFactory: () => (/* binding */ contactMethodFactory),
/* harmony export */   customerAccountDetailsFactory: () => (/* binding */ customerAccountDetailsFactory),
/* harmony export */   customerAccountDetailsSohoFactory: () => (/* binding */ customerAccountDetailsSohoFactory),
/* harmony export */   customerLocationFactory: () => (/* binding */ customerLocationFactory),
/* harmony export */   roleFactory: () => (/* binding */ roleFactory)
/* harmony export */ });
/* harmony import */ var factory_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! factory.ts */ 46032);
/* harmony import */ var _enums_customer_account_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/customer-account-type.enum */ 5037);
/* harmony import */ var _enums_customer_credit_classification_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/customer-credit-classification-type.enum */ 33091);
/* harmony import */ var _customer_account_details_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-account-details.interface */ 54214);




const contactMethodFactory = (0,factory_ts__WEBPACK_IMPORTED_MODULE_0__.makeFactory)({
  id: '1',
  value: '',
  '@type': _customer_account_details_interface__WEBPACK_IMPORTED_MODULE_3__.ContactMethodType.EMAIL,
  contactMethodType: {
    name: _customer_account_details_interface__WEBPACK_IMPORTED_MODULE_3__.ContactMethodClassificationType.PRIVATE
  }
});
const childRoleFactory = (0,factory_ts__WEBPACK_IMPORTED_MODULE_0__.makeFactory)({
  name: _customer_account_details_interface__WEBPACK_IMPORTED_MODULE_3__.RoleType.CONTRACT_HOLDER,
  id: '9154145301713264489'
});
const roleFactory = (0,factory_ts__WEBPACK_IMPORTED_MODULE_0__.makeFactory)({
  name: 'Contract Holder Mr. Tom Telenet',
  id: '9169868384713618104',
  role: childRoleFactory.build()
});
const contactFactory = (0,factory_ts__WEBPACK_IMPORTED_MODULE_0__.makeFactory)({
  lastName: 'Telenet',
  firstNameOfficial: 'Tom',
  title: 'Mr.',
  roles: [roleFactory.build()],
  contactMethods: [contactMethodFactory.build({
    value: 'test@telenet.be',
    '@type': _customer_account_details_interface__WEBPACK_IMPORTED_MODULE_3__.ContactMethodType.EMAIL,
    contactMethodType: {
      name: _customer_account_details_interface__WEBPACK_IMPORTED_MODULE_3__.ContactMethodClassificationType.PRIVATE
    }
  }), contactMethodFactory.build({
    value: '0485151515',
    '@type': _customer_account_details_interface__WEBPACK_IMPORTED_MODULE_3__.ContactMethodType.MOBILE_PHONE,
    contactMethodType: {
      name: _customer_account_details_interface__WEBPACK_IMPORTED_MODULE_3__.ContactMethodClassificationType.PRIMARY
    }
  })]
});
const customerLocationFactory = factory_ts__WEBPACK_IMPORTED_MODULE_0__.Sync.makeFactory({
  id: '1',
  name: 'test',
  address: {
    name: 'test',
    id: '1'
  },
  easySwitchId: '123456791',
  isFleetLocation: false,
  isPseudoLocation: false,
  easySwitchInUse: false
});
const customerAccountDetailsFactory = (0,factory_ts__WEBPACK_IMPORTED_MODULE_0__.makeFactory)({
  id: '1',
  primaryPhone: {
    value: '0978458456'
  },
  customerCategory: {
    name: 'Residential'
  },
  primaryContact: {
    lastName: 'Lastname',
    firstNameOfficial: 'FirstnameOfficial',
    title: 'Mr',
    firstName: 'Firstname',
    contactMethods: [contactMethodFactory.build({
      value: 'test@telenet.be',
      '@type': _customer_account_details_interface__WEBPACK_IMPORTED_MODULE_3__.ContactMethodType.EMAIL
    }), contactMethodFactory.build({
      value: '0485151515',
      '@type': _customer_account_details_interface__WEBPACK_IMPORTED_MODULE_3__.ContactMethodType.MOBILE_PHONE
    }), contactMethodFactory.build({
      value: 'Post: België, 2800 Mechelen, Darwin Loadteststraat, h. 17767',
      '@type': _customer_account_details_interface__WEBPACK_IMPORTED_MODULE_3__.ContactMethodType.POST
    })]
  },
  customerAddress: {
    id: '9165656989113844238',
    name: '17767'
  },
  contactMethods: [contactMethodFactory.build({
    value: 'test@telenet.be',
    '@type': _customer_account_details_interface__WEBPACK_IMPORTED_MODULE_3__.ContactMethodType.EMAIL,
    contactMethodType: {
      name: _customer_account_details_interface__WEBPACK_IMPORTED_MODULE_3__.ContactMethodClassificationType.PRIVATE
    }
  }), contactMethodFactory.build({
    value: '0485151515',
    '@type': _customer_account_details_interface__WEBPACK_IMPORTED_MODULE_3__.ContactMethodType.MOBILE_PHONE,
    contactMethodType: {
      name: _customer_account_details_interface__WEBPACK_IMPORTED_MODULE_3__.ContactMethodClassificationType.PRIMARY
    }
  }), contactMethodFactory.build({
    id: '9165656989113844238',
    value: 'Post: België, 2800 Mechelen, Darwin Loadteststraat, h. 17767',
    '@type': _customer_account_details_interface__WEBPACK_IMPORTED_MODULE_3__.ContactMethodType.POST
  }), contactMethodFactory.build({
    id: '7165656989113844238',
    value: 'Post: België, 2800 Mechelen, Darwin Loadteststraat, h. 17767',
    '@type': _customer_account_details_interface__WEBPACK_IMPORTED_MODULE_3__.ContactMethodType.POST
  }), contactMethodFactory.build({
    value: 'E-mail: no-mail@telenet.be',
    '@type': _customer_account_details_interface__WEBPACK_IMPORTED_MODULE_3__.ContactMethodType.EMAIL
  })],
  customerLocations: [customerLocationFactory.build({
    id: '123456789',
    address: {
      name: 'matchingAddress',
      id: '9165656989113844238'
    }
  }), customerLocationFactory.build({
    id: '987654321',
    address: {
      name: 'matchingAddress',
      id: '84654654654651321'
    }
  }), customerLocationFactory.build({
    id: '5646546546546546546'
  })],
  status: _enums_customer_account_type_enum__WEBPACK_IMPORTED_MODULE_1__.CustomerAccountTypeEnum.ACTIVE,
  creditClassificationCode: _enums_customer_credit_classification_type_enum__WEBPACK_IMPORTED_MODULE_2__.CustomerCreditClassificationTypeEnum.ALL_SALES,
  contacts: [contactFactory.build()]
});
const customerAccountDetailsSohoFactory = customerAccountDetailsFactory.extend({
  customerCategory: {
    name: 'Business'
  },
  legalAddress: {
    id: 'testid'
  }
});

/***/ }),

/***/ 79105:
/*!****************************************************************************************************!*\
  !*** ./libs/sales/hardware-checkout/data-access/src/lib/customer-account/customer-account.util.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerAccountUtil: () => (/* binding */ CustomerAccountUtil)
/* harmony export */ });
/* harmony import */ var _customer_account_details_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-account-details.interface */ 54214);

class CustomerAccountUtil {
  static getContractHolder(contactDetails) {
    if (!contactDetails || !contactDetails.contacts) {
      throw new Error('Invalid CustomerAccountDetails');
    }
    const contractHolder = contactDetails.contacts.find(contact => contact.roles.some(role => role.role.name === _customer_account_details_interface__WEBPACK_IMPORTED_MODULE_0__.RoleType.CONTRACT_HOLDER));
    if (!contractHolder) {
      throw new Error('Invalid CustomerAccountDetails');
    }
    return contractHolder;
  }
  static getContactEmail(contactDetails) {
    const emailMethod = contactDetails.contactMethods?.find(method => method['@type'] === _customer_account_details_interface__WEBPACK_IMPORTED_MODULE_0__.ContactMethodType.EMAIL && method.contactMethodType?.name === _customer_account_details_interface__WEBPACK_IMPORTED_MODULE_0__.ContactMethodClassificationType.PRIVATE);
    if (!emailMethod) {
      throw new Error('Contact email not found.');
    }
    return emailMethod.value;
  }
  static getContactPhoneNumber(contactDetails) {
    const phoneNumber = contactDetails.contactMethods?.find(method => method['@type'] === _customer_account_details_interface__WEBPACK_IMPORTED_MODULE_0__.ContactMethodType.MOBILE_PHONE && method.contactMethodType?.name === _customer_account_details_interface__WEBPACK_IMPORTED_MODULE_0__.ContactMethodClassificationType.PRIMARY)?.value;
    if (!phoneNumber) {
      throw new Error('Mobile phone number not found');
    }
    return phoneNumber;
  }
}

/***/ }),

/***/ 45987:
/*!******************************************************************************!*\
  !*** ./libs/sales/hardware-checkout/data-access/src/lib/enums/brand.enum.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrandEnum: () => (/* binding */ BrandEnum)
/* harmony export */ });
var BrandEnum;
(function (BrandEnum) {
  BrandEnum["TELENET"] = "telenet";
  BrandEnum["BASE"] = "base";
})(BrandEnum || (BrandEnum = {}));

/***/ }),

/***/ 6490:
/*!*****************************************************************************************!*\
  !*** ./libs/sales/hardware-checkout/data-access/src/lib/enums/business-domains.enum.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BusinessDomainsEnum: () => (/* binding */ BusinessDomainsEnum)
/* harmony export */ });
var BusinessDomainsEnum;
(function (BusinessDomainsEnum) {
  BusinessDomainsEnum["HARDWARE_TLO"] = "Hardware TLO";
})(BusinessDomainsEnum || (BusinessDomainsEnum = {}));

/***/ }),

/***/ 86294:
/*!****************************************************************************************!*\
  !*** ./libs/sales/hardware-checkout/data-access/src/lib/enums/contact-details.enum.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactDetailsCustomerCategoryEnum: () => (/* binding */ ContactDetailsCustomerCategoryEnum)
/* harmony export */ });
var ContactDetailsCustomerCategoryEnum;
(function (ContactDetailsCustomerCategoryEnum) {
  ContactDetailsCustomerCategoryEnum["RESIDENTIAL"] = "Residential";
  ContactDetailsCustomerCategoryEnum["SOHO"] = "Business";
  ContactDetailsCustomerCategoryEnum["PRODUCTION_TEST"] = "Production Test";
  ContactDetailsCustomerCategoryEnum["EVENT_DEMO"] = "Event/Demo";
  ContactDetailsCustomerCategoryEnum["PRODUCTION_TEST_BUSINESS"] = "Production test Business";
  ContactDetailsCustomerCategoryEnum["PRD_TEST_BUSINESS"] = "Production Test Business";
})(ContactDetailsCustomerCategoryEnum || (ContactDetailsCustomerCategoryEnum = {}));

/***/ }),

/***/ 5037:
/*!**********************************************************************************************!*\
  !*** ./libs/sales/hardware-checkout/data-access/src/lib/enums/customer-account-type.enum.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerAccountTypeEnum: () => (/* binding */ CustomerAccountTypeEnum)
/* harmony export */ });
var CustomerAccountTypeEnum;
(function (CustomerAccountTypeEnum) {
  CustomerAccountTypeEnum["ACTIVE"] = "Active";
  CustomerAccountTypeEnum["PENDING_ACTIVATION"] = "Pending activation";
  CustomerAccountTypeEnum["FORMER"] = "Former";
  CustomerAccountTypeEnum["PROSPECT"] = "Prospect";
  CustomerAccountTypeEnum["LOST_PROSPECT"] = "Lost Prospect";
})(CustomerAccountTypeEnum || (CustomerAccountTypeEnum = {}));

/***/ }),

/***/ 33091:
/*!************************************************************************************************************!*\
  !*** ./libs/sales/hardware-checkout/data-access/src/lib/enums/customer-credit-classification-type.enum.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerCreditClassificationTypeEnum: () => (/* binding */ CustomerCreditClassificationTypeEnum)
/* harmony export */ });
var CustomerCreditClassificationTypeEnum;
(function (CustomerCreditClassificationTypeEnum) {
  CustomerCreditClassificationTypeEnum["ALL_SALES"] = "ALL_SALES";
  CustomerCreditClassificationTypeEnum["NO_SALES"] = "NO_SALES";
})(CustomerCreditClassificationTypeEnum || (CustomerCreditClassificationTypeEnum = {}));

/***/ }),

/***/ 68485:
/*!**************************************************************************************!*\
  !*** ./libs/sales/hardware-checkout/data-access/src/lib/enums/customer-type.enum.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerTypeEnum: () => (/* binding */ CustomerTypeEnum)
/* harmony export */ });
var CustomerTypeEnum;
(function (CustomerTypeEnum) {
  CustomerTypeEnum["RESIDENTIAL"] = "Residential";
  CustomerTypeEnum["SOHO"] = "Business";
})(CustomerTypeEnum || (CustomerTypeEnum = {}));

/***/ }),

/***/ 19659:
/*!******************************************************************************************!*\
  !*** ./libs/sales/hardware-checkout/data-access/src/lib/enums/order-item-action.enum.ts ***!
  \******************************************************************************************/
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

/***/ 95837:
/*!******************************************************************************************!*\
  !*** ./libs/sales/hardware-checkout/data-access/src/lib/enums/sales-order-state.enum.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesOrderStateEnum: () => (/* binding */ SalesOrderStateEnum)
/* harmony export */ });
var SalesOrderStateEnum;
(function (SalesOrderStateEnum) {
  SalesOrderStateEnum[SalesOrderStateEnum["INITIALISING"] = 0] = "INITIALISING";
  SalesOrderStateEnum[SalesOrderStateEnum["SALES_ORDER_CREATED"] = 1] = "SALES_ORDER_CREATED";
  SalesOrderStateEnum[SalesOrderStateEnum["ETF_NEEDED"] = 2] = "ETF_NEEDED";
  SalesOrderStateEnum[SalesOrderStateEnum["ETF_HANDLED"] = 3] = "ETF_HANDLED";
  SalesOrderStateEnum[SalesOrderStateEnum["DELIVERY_CALCULATED"] = 4] = "DELIVERY_CALCULATED";
  SalesOrderStateEnum[SalesOrderStateEnum["DELIVERY_ADDRESS_CHANGED"] = 5] = "DELIVERY_ADDRESS_CHANGED";
  SalesOrderStateEnum[SalesOrderStateEnum["CONTRACT_SUMMARY_GENERATED"] = 6] = "CONTRACT_SUMMARY_GENERATED";
  SalesOrderStateEnum[SalesOrderStateEnum["CHECKOUT_DELIVERY_FINISHED"] = 7] = "CHECKOUT_DELIVERY_FINISHED";
  SalesOrderStateEnum[SalesOrderStateEnum["SALES_ORDER_SUMBITTED"] = 8] = "SALES_ORDER_SUMBITTED";
  SalesOrderStateEnum[SalesOrderStateEnum["PAYMENT_TRANSACTION_CREATED"] = 9] = "PAYMENT_TRANSACTION_CREATED";
  SalesOrderStateEnum[SalesOrderStateEnum["INGENICO_FORM_SET"] = 10] = "INGENICO_FORM_SET";
  SalesOrderStateEnum[SalesOrderStateEnum["PAYMENT_SUCCESSFUL"] = 11] = "PAYMENT_SUCCESSFUL";
  SalesOrderStateEnum[SalesOrderStateEnum["PAYMENT_CANCELLED"] = 12] = "PAYMENT_CANCELLED";
})(SalesOrderStateEnum || (SalesOrderStateEnum = {}));

/***/ }),

/***/ 82572:
/*!*******************************************************************************************!*\
  !*** ./libs/sales/hardware-checkout/data-access/src/lib/enums/validation-element.enum.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ValidationElementEnum: () => (/* binding */ ValidationElementEnum)
/* harmony export */ });
var ValidationElementEnum;
(function (ValidationElementEnum) {
  ValidationElementEnum["FEASIBILITY_CHECK_REQUIRED"] = "FEASIBILITY_CHECK_REQUIRED";
  ValidationElementEnum["CHECKOUT_DELIVERY_REQUIRED"] = "DELIVERY_CHECKOUT_REQUIRED";
})(ValidationElementEnum || (ValidationElementEnum = {}));

/***/ }),

/***/ 50011:
/*!***********************************************************************************!*\
  !*** ./libs/sales/hardware-checkout/data-access/src/lib/enums/view-state.enum.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewStateEnum: () => (/* binding */ ViewStateEnum)
/* harmony export */ });
var ViewStateEnum;
(function (ViewStateEnum) {
  ViewStateEnum[ViewStateEnum["STEPPER"] = 0] = "STEPPER";
  ViewStateEnum[ViewStateEnum["SHOW_NAVIGATION"] = 1] = "SHOW_NAVIGATION";
  ViewStateEnum[ViewStateEnum["ERROR"] = 2] = "ERROR";
})(ViewStateEnum || (ViewStateEnum = {}));

/***/ }),

/***/ 67593:
/*!**********************************************************************************!*\
  !*** ./libs/sales/hardware-checkout/data-access/src/lib/interfaces/aem.input.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 1756:
/*!**************************************************************************************************!*\
  !*** ./libs/sales/hardware-checkout/data-access/src/lib/interfaces/billing-account.interface.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 77689:
/*!****************************************************************************************************!*\
  !*** ./libs/sales/hardware-checkout/data-access/src/lib/interfaces/billing-account.testfactory.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   billingAccountTestfactory: () => (/* binding */ billingAccountTestfactory),
/* harmony export */   defaultBillingAccountFactory: () => (/* binding */ defaultBillingAccountFactory)
/* harmony export */ });
/* harmony import */ var factory_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! factory.ts */ 46032);

const defaultBillingAccountFactory = (0,factory_ts__WEBPACK_IMPORTED_MODULE_0__.makeFactory)({
  id: '9168125680713712884',
  defaultBillingAccount: {
    name: 'Yes',
    id: '7777001'
  },
  billingAddress: {
    formattedAddress: 'België, 2800 Mechelen, defaultaccounnt, h. 17767',
    name: '17767',
    id: '9165656989113844238'
  }
});
const billingAccountTestfactory = (0,factory_ts__WEBPACK_IMPORTED_MODULE_0__.makeFactory)({
  id: '9168125724813722982',
  defaultBillingAccount: {
    name: 'No',
    id: '7777002'
  },
  billingAddress: {
    formattedAddress: 'België, 3000 Leuven, non default, h. 17767',
    name: '17768',
    id: '1234656989113844238'
  }
});

/***/ }),

/***/ 37216:
/*!*********************************************************************************************!*\
  !*** ./libs/sales/hardware-checkout/data-access/src/lib/interfaces/nc.error.testfactory.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ncErrorTestfactory: () => (/* binding */ ncErrorTestfactory)
/* harmony export */ });
/* harmony import */ var factory_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! factory.ts */ 46032);

const ncErrorTestfactory = (0,factory_ts__WEBPACK_IMPORTED_MODULE_0__.makeFactory)({
  errorCode: 'OE-0100',
  errorMessage: 'Product not active',
  errorType: 'Error'
});

/***/ }),

/***/ 47298:
/*!*********************************************************************************!*\
  !*** ./libs/sales/hardware-checkout/data-access/src/lib/interfaces/nc.error.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 28354:
/*!*******************************************************************************************************!*\
  !*** ./libs/sales/hardware-checkout/data-access/src/lib/interfaces/payment-request-data.interface.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 64252:
/*!********************************************************************************************************!*\
  !*** ./libs/sales/hardware-checkout/data-access/src/lib/interfaces/payment-response-data.interface.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 51805:
/*!**********************************************************************************************!*\
  !*** ./libs/sales/hardware-checkout/data-access/src/lib/interfaces/sales-order.interface.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 92162:
/*!****************************************************************************************************!*\
  !*** ./libs/sales/hardware-checkout/data-access/src/lib/interfaces/sdata-sales-offer.interface.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 88499:
/*!******************************************************************************************************!*\
  !*** ./libs/sales/hardware-checkout/data-access/src/lib/interfaces/sdata-sales-offer.testfactory.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   chargerSalesOfferFactory: () => (/* binding */ chargerSalesOfferFactory),
/* harmony export */   defaultSdataSalesOfferFactory: () => (/* binding */ defaultSdataSalesOfferFactory),
/* harmony export */   sdataDiscountFactory: () => (/* binding */ sdataDiscountFactory),
/* harmony export */   smartphoneWithBasicDiscountSalesOfferFactory: () => (/* binding */ smartphoneWithBasicDiscountSalesOfferFactory)
/* harmony export */ });
/* harmony import */ var factory_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! factory.ts */ 46032);

const smartphoneWithBasicDiscountSalesOfferFactory = (0,factory_ts__WEBPACK_IMPORTED_MODULE_0__.makeFactory)({
  itemCode: '3300389',
  type: 'smartphones',
  customerChosenDiscount: {
    type: 'Basic Discount',
    price: 90,
    id: '9155501914465272430'
  }
});
const chargerSalesOfferFactory = (0,factory_ts__WEBPACK_IMPORTED_MODULE_0__.makeFactory)({
  itemCode: '2119684',
  type: 'charger',
  customerChosenDiscount: {
    type: 'Basic Discount',
    price: 90,
    id: '9155501914465272430'
  }
});
const sdataDiscountFactory = (0,factory_ts__WEBPACK_IMPORTED_MODULE_0__.makeFactory)({
  type: 'Basic Discount',
  price: 90,
  id: '9155501914465272430'
});
const defaultSdataSalesOfferFactory = (0,factory_ts__WEBPACK_IMPORTED_MODULE_0__.makeFactory)({
  id: '123',
  offers: [smartphoneWithBasicDiscountSalesOfferFactory.build(), chargerSalesOfferFactory.build()]
});

/***/ }),

/***/ 60160:
/*!*********************************************************************************************************!*\
  !*** ./libs/sales/hardware-checkout/data-access/src/lib/interfaces/url-request-parameters.interface.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 78141:
/*!*********************************************************************************************!*\
  !*** ./libs/sales/hardware-checkout/data-access/src/lib/interfaces/view-state.interface.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 28141:
/*!***********************************************************************************************************!*\
  !*** ./libs/sales/hardware-checkout/data-access/src/lib/personal-identity/personal-identity.interface.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 67886:
/*!*************************************************************************************************************!*\
  !*** ./libs/sales/hardware-checkout/data-access/src/lib/personal-identity/personal-identity.testfactory.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   personalIdentityResponseTestFactory: () => (/* binding */ personalIdentityResponseTestFactory),
/* harmony export */   personalIdentityTestFactory: () => (/* binding */ personalIdentityTestFactory)
/* harmony export */ });
/* harmony import */ var factory_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! factory.ts */ 46032);

const personalIdentityTestFactory = (0,factory_ts__WEBPACK_IMPORTED_MODULE_0__.makeFactory)({
  'First Name': 'Tom',
  'Last Name': 'Test',
  'Phone Number': '0485151522',
  'Fixed Phone Number': '027518545',
  'Mobile Number': '0485151522',
  'E-Mail': 'test@telenetgroup.be'
});
const personalIdentityResponseTestFactory = (0,factory_ts__WEBPACK_IMPORTED_MODULE_0__.makeFactory)({
  chars: personalIdentityTestFactory.build()
});

/***/ }),

/***/ 68965:
/*!*****************************************************************************!*\
  !*** ./libs/sales/hardware-checkout/data-access/src/lib/util/omapi.util.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OmapiUtil: () => (/* binding */ OmapiUtil)
/* harmony export */ });
class OmapiUtil {
  static getProductType(orderItem, omapiProducts) {
    const itemCode = orderItem.chars['Item Code'];
    const family = omapiProducts.find(product => product.variants.some(variant => variant.productId === itemCode))?.productFamily;
    if (family === 'smartphones') {
      return 'SMARTPHONE';
    }
    return family?.toUpperCase();
  }
}

/***/ }),

/***/ 87551:
/*!*****************************************************************************************!*\
  !*** ./libs/sales/hardware-checkout/data-access/src/lib/util/personal-identity.util.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PersonalIdentityUtils: () => (/* binding */ PersonalIdentityUtils)
/* harmony export */ });
class PersonalIdentityUtils {
  static getPersonalIdentity(personalIdentityResponse) {
    return personalIdentityResponse.chars;
  }
}

/***/ }),

/***/ 32051:
/*!***********************************************************************************!*\
  !*** ./libs/sales/hardware-checkout/data-access/src/lib/util/sales-offer.util.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesOfferUtil: () => (/* binding */ SalesOfferUtil)
/* harmony export */ });
/* harmony import */ var udl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! udl */ 63975);
/* harmony import */ var udl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(udl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_hardware_checkout_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/hardware-checkout.constant */ 5175);


class SalesOfferUtil {
  static mapToUdlCart(salesOffer) {
    const cartBuilder = new udl__WEBPACK_IMPORTED_MODULE_0__.CartBuilder();
    salesOffer.offers.forEach(offer => cartBuilder.withItem(this.mapToUdlItem(offer)));
    const price = new udl__WEBPACK_IMPORTED_MODULE_0__.PriceBuilder().withBasePrice(new udl__WEBPACK_IMPORTED_MODULE_0__.PriceBuilder().withOneTimePrice(0).withRecurringPrice(0).build()).withTotalPrice(new udl__WEBPACK_IMPORTED_MODULE_0__.PriceBuilder().withOneTimePrice(0).withRecurringPrice(0).build()).build();
    return cartBuilder.withPrice(price).build();
  }
  static mapToUdlItem(offer) {
    const itemBuilder = new udl__WEBPACK_IMPORTED_MODULE_0__.ItemBuilder();
    const productInfoBuilder = new udl__WEBPACK_IMPORTED_MODULE_0__.ProductBuilder();
    productInfoBuilder.withProductId(offer.itemCode);
    productInfoBuilder.withProductStatus('ADD');
    productInfoBuilder.withProductType(_constants_hardware_checkout_constant__WEBPACK_IMPORTED_MODULE_1__.SalesOfferTypeEnum.SMARTPHONES.includes(offer.type.toLowerCase()) ? _constants_hardware_checkout_constant__WEBPACK_IMPORTED_MODULE_1__.SalesOfferTypeEnum.SMARTPHONE : offer.type.toUpperCase());
    const item = itemBuilder.withProductInfo(productInfoBuilder.build()).withQuantity(1).build();
    item['_helpers'] = {};
    return item;
  }
}

/***/ }),

/***/ 24346:
/*!***********************************************************************************!*\
  !*** ./libs/sales/hardware-checkout/data-access/src/lib/util/sales-order.util.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesOrderUtil: () => (/* binding */ SalesOrderUtil)
/* harmony export */ });
/* harmony import */ var _enums_order_item_action_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/order-item-action.enum */ 19659);
/* harmony import */ var _enums_business_domains_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/business-domains.enum */ 6490);
/* harmony import */ var udl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! udl */ 63975);
/* harmony import */ var udl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(udl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _omapi_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./omapi.util */ 68965);




class SalesOrderUtil {
  static mapToUdlCart(salesOrder, omapiQueryProducts, isSoho) {
    const cart = new udl__WEBPACK_IMPORTED_MODULE_2__.CartBuilder().withCartId(salesOrder.id).build();
    const salesItems = this.getHardwareItemList(salesOrder);
    if (salesItems.length > 0) {
      const cartItems = salesItems.map(salesItem => this.mapToUdlItem(salesItem, omapiQueryProducts, isSoho));
      cart.setItems(cartItems);
      cart.setPrice(this.populateSummaryPrice(cartItems));
    }
    return cart;
  }
  static getHardwareItemList(salesOrder) {
    const hardwareOrderItem = this.getHardwareOrderItem(salesOrder);
    return hardwareOrderItem?.orderItems?.filter(orderItem => orderItem.action === _enums_order_item_action_enum__WEBPACK_IMPORTED_MODULE_0__.OrderItemActionEnum.ADD) || [];
  }
  static getHardwareOrderItem(salesOrder) {
    return salesOrder.orderItems.find(orderItem => {
      return orderItem.offer.businessDomains.includes(_enums_business_domains_enum__WEBPACK_IMPORTED_MODULE_1__.BusinessDomainsEnum.HARDWARE_TLO);
    });
  }
  static mapToUdlItem(orderItem, omapiQueryProducts, isSoho) {
    const item = new udl__WEBPACK_IMPORTED_MODULE_2__.ItemBuilder().withProductInfo(this.mapToProduct(orderItem, omapiQueryProducts)).withPrice(this.mapToPrice(orderItem, isSoho)).withQuantity(1).build();
    item['_helpers'] = {};
    return item;
  }
  static mapToProduct(orderItem, omapiQueryProducts) {
    return new udl__WEBPACK_IMPORTED_MODULE_2__.ProductBuilder().withProductId(orderItem.chars['Item Code']).withProductType(_omapi_util__WEBPACK_IMPORTED_MODULE_3__.OmapiUtil.getProductType(orderItem, omapiQueryProducts) || 'MISSING_OMAPI').withProductStatus(orderItem.action.toUpperCase()).build();
  }
  static populateSummaryPrice(items) {
    const onetimeTotal = this.calculateBasePrice(items, 'getOnetimePrice');
    const recurringTotal = this.calculateBasePrice(items, 'getRecurringPrice');
    const onetimeDiscounted = this.calculateDiscountedPrice(items, 'getOnetimePrice');
    const recurringDiscounted = this.calculateDiscountedPrice(items, 'getRecurringPrice');
    return new udl__WEBPACK_IMPORTED_MODULE_2__.PriceBuilder().withBasePrice(new udl__WEBPACK_IMPORTED_MODULE_2__.PriceBuilder().withOneTimePrice(onetimeTotal).withRecurringPrice(recurringTotal).build()).withTotalPrice(new udl__WEBPACK_IMPORTED_MODULE_2__.PriceBuilder().withOneTimePrice(onetimeDiscounted).withRecurringPrice(recurringDiscounted).build()).build();
  }
  static calculateDiscountedPrice(items, priceType) {
    return items.reduce((tot, item) => {
      return this.calculate(tot, item.getPrice().getDiscountedPrice()[priceType]());
    }, 0);
  }
  static calculateBasePrice(items, priceType) {
    return items.reduce((tot, item) => {
      return this.calculate(tot, item.getPrice().getBasePrice()[priceType]());
    }, 0);
  }
  static calculate(total, price) {
    return parseFloat((total + price).toFixed(2));
  }
  static mapToPrice(orderItem, isSoho) {
    const priceBuilder = new udl__WEBPACK_IMPORTED_MODULE_2__.PriceBuilder().withBasePrice(new udl__WEBPACK_IMPORTED_MODULE_2__.PriceBuilder().withOneTimePrice(0).withRecurringPrice(0).withSummaryPrice(0).build()).withDiscountedPrice(new udl__WEBPACK_IMPORTED_MODULE_2__.PriceBuilder().withOneTimePrice(0).withRecurringPrice(0).build());
    const pricedOrderItem = orderItem.orderItems?.find(orderItem => orderItem.action === _enums_order_item_action_enum__WEBPACK_IMPORTED_MODULE_0__.OrderItemActionEnum.ADD);
    if (pricedOrderItem?.prices) {
      const oneTimePrice = this.getOneTimePrice(pricedOrderItem, isSoho, isSoho ? 'oneTimeTotalWithoutTaxes' : 'oneTimeTotal');
      const discountedPrice = this.getOneTimePrice(pricedOrderItem, isSoho, isSoho ? 'oneTimeDiscountedWithoutTaxes' : 'oneTimeDiscounted');
      const recurrentTotal = this.formatPrice(isSoho ? pricedOrderItem.prices.recurrentTotalWithoutTaxes.value : pricedOrderItem.prices.recurrentTotal.value);
      const recurrentDiscounted = this.formatPrice(isSoho ? pricedOrderItem.prices.recurrentDiscountedWithoutTaxes.value : pricedOrderItem.prices.recurrentDiscounted.value);
      priceBuilder.withBasePrice(new udl__WEBPACK_IMPORTED_MODULE_2__.PriceBuilder().withOneTimePrice(parseFloat(oneTimePrice)).withRecurringPrice(parseFloat(recurrentTotal)).withSummaryPrice(parseFloat(oneTimePrice) + parseFloat(recurrentTotal)).build()).withDiscountedPrice(new udl__WEBPACK_IMPORTED_MODULE_2__.PriceBuilder().withOneTimePrice(parseFloat(discountedPrice)).withRecurringPrice(parseFloat(recurrentDiscounted)).build());
    }
    return priceBuilder.build();
  }
  static getOneTimePrice(orderItem, isSoho, defaultPriceField) {
    let price;
    if (orderItem.prices) {
      const upfrontPaymentTotal = isSoho ? orderItem.prices.upfrontPaymentTotalWithoutTaxes?.value : orderItem.prices.upfrontPaymentTotal?.value;
      price = upfrontPaymentTotal && upfrontPaymentTotal !== '0.0000' ? upfrontPaymentTotal : orderItem.prices[defaultPriceField]?.value;
    }
    return this.formatPrice(price);
  }
  static formatPrice(price) {
    if (price === undefined) {
      return '0.00';
    }
    return price.indexOf(',') !== 0 ? price.replace(',', '.') : price;
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
//# sourceMappingURL=libs_sales_hardware-checkout_data-access_src_index_ts-_936a0.js.map