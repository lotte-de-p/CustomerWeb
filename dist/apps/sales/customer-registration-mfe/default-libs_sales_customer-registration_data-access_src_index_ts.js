(self["webpackChunkcustomer_registration_mfe"] = self["webpackChunkcustomer_registration_mfe"] || []).push([["default-libs_sales_customer-registration_data-access_src_index_ts"],{

/***/ 9513:
/*!*******************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/index.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Address: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.Address),
/* harmony export */   AddressConstants: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.AddressConstants),
/* harmony export */   AddressFields: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.AddressFields),
/* harmony export */   AddressForm: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.AddressForm),
/* harmony export */   AddressIdentityFacade: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.AddressIdentityFacade),
/* harmony export */   AddressMapper: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.AddressMapper),
/* harmony export */   AddressService: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.AddressService),
/* harmony export */   ApplyMethodEnum: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ApplyMethodEnum),
/* harmony export */   AuthorConfigurationFacade: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.AuthorConfigurationFacade),
/* harmony export */   BusinessIdentityDetailsFacade: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.BusinessIdentityDetailsFacade),
/* harmony export */   CreateCustomerService: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.CreateCustomerService),
/* harmony export */   CustomerCategory: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.CustomerCategory),
/* harmony export */   CustomerRegistrationEffects: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.CustomerRegistrationEffects),
/* harmony export */   CustomerRegistrationNgrxModule: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.CustomerRegistrationNgrxModule),
/* harmony export */   GenericMapper: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.GenericMapper),
/* harmony export */   IdentityDetailsFacade: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.IdentityDetailsFacade),
/* harmony export */   NavsService: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.NavsService),
/* harmony export */   PersonalDetailsFacade: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.PersonalDetailsFacade),
/* harmony export */   ProductTypeEnum: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ProductTypeEnum),
/* harmony export */   Salutation: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.Salutation),
/* harmony export */   SearchCustomerService: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.SearchCustomerService),
/* harmony export */   SetAddressStoreAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.SetAddressStoreAction),
/* harmony export */   addressConfigurationTestFactory: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.addressConfigurationTestFactory),
/* harmony export */   createCustomerErrorAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.createCustomerErrorAction),
/* harmony export */   createCustomerSuccessAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.createCustomerSuccessAction),
/* harmony export */   customerRegistrationFactory: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.customerRegistrationFactory),
/* harmony export */   customerRegistrationFeature: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.customerRegistrationFeature),
/* harmony export */   customerRegistrationReducer: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.customerRegistrationReducer),
/* harmony export */   defaultState: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.defaultState),
/* harmony export */   featureState: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.featureState),
/* harmony export */   finalizeFlowAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.finalizeFlowAction),
/* harmony export */   getAddressAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getAddressAction),
/* harmony export */   getAddressErrorAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getAddressErrorAction),
/* harmony export */   getAddressSuccessAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getAddressSuccessAction),
/* harmony export */   getBoxNoAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getBoxNoAction),
/* harmony export */   getLocationErrorAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getLocationErrorAction),
/* harmony export */   getLocationsAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getLocationsAction),
/* harmony export */   getLocationsSuccessAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getLocationsSuccessAction),
/* harmony export */   getNavsErrorAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getNavsErrorAction),
/* harmony export */   getSalesOrderRequestDataAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getSalesOrderRequestDataAction),
/* harmony export */   getStreetsAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getStreetsAction),
/* harmony export */   getStreetsErrorAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getStreetsErrorAction),
/* harmony export */   getStreetsSuccessAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getStreetsSuccessAction),
/* harmony export */   getSubHouseNoAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getSubHouseNoAction),
/* harmony export */   isPidEnabled: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.isPidEnabled),
/* harmony export */   itsMeSearchSuccessAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.itsMeSearchSuccessAction),
/* harmony export */   loginAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.loginAction),
/* harmony export */   loginErrorAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.loginErrorAction),
/* harmony export */   loginSuccessAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.loginSuccessAction),
/* harmony export */   navsSuccessAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.navsSuccessAction),
/* harmony export */   omapiProductExtractionErrorAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.omapiProductExtractionErrorAction),
/* harmony export */   omapiProductExtractionSuccessAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.omapiProductExtractionSuccessAction),
/* harmony export */   performItsMeSearchAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.performItsMeSearchAction),
/* harmony export */   performLegalEntityAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.performLegalEntityAction),
/* harmony export */   performLegalEntityErrorAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.performLegalEntityErrorAction),
/* harmony export */   performLegalEntitySuccessAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.performLegalEntitySuccessAction),
/* harmony export */   performOmapiProductsExtractionAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.performOmapiProductsExtractionAction),
/* harmony export */   performResidentialNavsCheckAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.performResidentialNavsCheckAction),
/* harmony export */   preformBusinessSearchCustomerAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.preformBusinessSearchCustomerAction),
/* harmony export */   preformResidentialSearchCustomerAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.preformResidentialSearchCustomerAction),
/* harmony export */   reducer: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.reducer),
/* harmony export */   resetError: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.resetError),
/* harmony export */   resetSearchCustomerSuccessAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.resetSearchCustomerSuccessAction),
/* harmony export */   saveBusinessIdentityDetailsAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.saveBusinessIdentityDetailsAction),
/* harmony export */   saveIdentityDetailsAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.saveIdentityDetailsAction),
/* harmony export */   savePersonalDetailsAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.savePersonalDetailsAction),
/* harmony export */   searchCustomerErrorAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.searchCustomerErrorAction),
/* harmony export */   searchCustomerSuccessAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.searchCustomerSuccessAction),
/* harmony export */   searchItsMeCustomerErrorAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.searchItsMeCustomerErrorAction),
/* harmony export */   selectAddressByType: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectAddressByType),
/* harmony export */   selectAddressData: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectAddressData),
/* harmony export */   selectAddressStore: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectAddressStore),
/* harmony export */   selectBoxNumbers: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectBoxNumbers),
/* harmony export */   selectBrand: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectBrand),
/* harmony export */   selectBusinessIdentityDetails: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectBusinessIdentityDetails),
/* harmony export */   selectCategory: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectCategory),
/* harmony export */   selectDOB: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectDOB),
/* harmony export */   selectError: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectError),
/* harmony export */   selectIsBelgianIdentity: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectIsBelgianIdentity),
/* harmony export */   selectIsPIDEnabledForBusiness: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectIsPIDEnabledForBusiness),
/* harmony export */   selectItsMeParams: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectItsMeParams),
/* harmony export */   selectItsMeResponse: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectItsMeResponse),
/* harmony export */   selectLegalEntityDetails: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectLegalEntityDetails),
/* harmony export */   selectLocations: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectLocations),
/* harmony export */   selectMarketingUrl: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectMarketingUrl),
/* harmony export */   selectNavsCheckResult: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectNavsCheckResult),
/* harmony export */   selectOmapiProduct: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectOmapiProduct),
/* harmony export */   selectPersonalDetails: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectPersonalDetails),
/* harmony export */   selectPrivacyPolicyUrl: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectPrivacyPolicyUrl),
/* harmony export */   selectSalesOrder: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectSalesOrder),
/* harmony export */   selectSearchCustomerResultExists: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectSearchCustomerResultExists),
/* harmony export */   selectSearchCustomerResultType: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectSearchCustomerResultType),
/* harmony export */   selectStreets: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectStreets),
/* harmony export */   selectSubHouseNumbers: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectSubHouseNumbers),
/* harmony export */   selectUserInput: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.selectUserInput),
/* harmony export */   setAuthorConfigurationAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.setAuthorConfigurationAction),
/* harmony export */   setBrand: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.setBrand),
/* harmony export */   setCategory: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.setCategory),
/* harmony export */   setProductDetailsAction: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.setProductDetailsAction)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ 66175);


/***/ }),

/***/ 80858:
/*!**********************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/+state/customer-registration-ngrx.module.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerRegistrationNgrxModule: () => (/* binding */ CustomerRegistrationNgrxModule)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _customer_registration_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-registration.reducer */ 45119);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 12506);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _customer_registration_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-registration.effects */ 93410);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);







class CustomerRegistrationNgrxModule {
  static #_ = this.ɵfac = function CustomerRegistrationNgrxModule_Factory(t) {
    return new (t || CustomerRegistrationNgrxModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: CustomerRegistrationNgrxModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.EffectsModule.forFeature([_customer_registration_effects__WEBPACK_IMPORTED_MODULE_3__.CustomerRegistrationEffects]), _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.StoreModule.forFeature(_customer_registration_reducer__WEBPACK_IMPORTED_MODULE_1__.customerRegistrationFeature)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CustomerRegistrationNgrxModule, {
    imports: [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.EffectsFeatureModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.StoreFeatureModule]
  });
})();

/***/ }),

/***/ 57410:
/*!******************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/+state/customer-registration.actions.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SetAddressStoreAction: () => (/* binding */ SetAddressStoreAction),
/* harmony export */   createCustomerErrorAction: () => (/* binding */ createCustomerErrorAction),
/* harmony export */   createCustomerSuccessAction: () => (/* binding */ createCustomerSuccessAction),
/* harmony export */   finalizeFlowAction: () => (/* binding */ finalizeFlowAction),
/* harmony export */   getAddressAction: () => (/* binding */ getAddressAction),
/* harmony export */   getAddressErrorAction: () => (/* binding */ getAddressErrorAction),
/* harmony export */   getAddressSuccessAction: () => (/* binding */ getAddressSuccessAction),
/* harmony export */   getBoxNoAction: () => (/* binding */ getBoxNoAction),
/* harmony export */   getLocationErrorAction: () => (/* binding */ getLocationErrorAction),
/* harmony export */   getLocationsAction: () => (/* binding */ getLocationsAction),
/* harmony export */   getLocationsSuccessAction: () => (/* binding */ getLocationsSuccessAction),
/* harmony export */   getNavsErrorAction: () => (/* binding */ getNavsErrorAction),
/* harmony export */   getSalesOrderRequestDataAction: () => (/* binding */ getSalesOrderRequestDataAction),
/* harmony export */   getStreetsAction: () => (/* binding */ getStreetsAction),
/* harmony export */   getStreetsErrorAction: () => (/* binding */ getStreetsErrorAction),
/* harmony export */   getStreetsSuccessAction: () => (/* binding */ getStreetsSuccessAction),
/* harmony export */   getSubHouseNoAction: () => (/* binding */ getSubHouseNoAction),
/* harmony export */   itsMeSearchSuccessAction: () => (/* binding */ itsMeSearchSuccessAction),
/* harmony export */   loginAction: () => (/* binding */ loginAction),
/* harmony export */   loginErrorAction: () => (/* binding */ loginErrorAction),
/* harmony export */   loginSuccessAction: () => (/* binding */ loginSuccessAction),
/* harmony export */   navsSuccessAction: () => (/* binding */ navsSuccessAction),
/* harmony export */   omapiProductExtractionErrorAction: () => (/* binding */ omapiProductExtractionErrorAction),
/* harmony export */   omapiProductExtractionSuccessAction: () => (/* binding */ omapiProductExtractionSuccessAction),
/* harmony export */   performItsMeSearchAction: () => (/* binding */ performItsMeSearchAction),
/* harmony export */   performLegalEntityAction: () => (/* binding */ performLegalEntityAction),
/* harmony export */   performLegalEntityErrorAction: () => (/* binding */ performLegalEntityErrorAction),
/* harmony export */   performLegalEntitySuccessAction: () => (/* binding */ performLegalEntitySuccessAction),
/* harmony export */   performOmapiProductsExtractionAction: () => (/* binding */ performOmapiProductsExtractionAction),
/* harmony export */   performResidentialNavsCheckAction: () => (/* binding */ performResidentialNavsCheckAction),
/* harmony export */   preformBusinessSearchCustomerAction: () => (/* binding */ preformBusinessSearchCustomerAction),
/* harmony export */   preformResidentialSearchCustomerAction: () => (/* binding */ preformResidentialSearchCustomerAction),
/* harmony export */   resetError: () => (/* binding */ resetError),
/* harmony export */   resetSearchCustomerSuccessAction: () => (/* binding */ resetSearchCustomerSuccessAction),
/* harmony export */   saveBusinessIdentityDetailsAction: () => (/* binding */ saveBusinessIdentityDetailsAction),
/* harmony export */   saveIdentityDetailsAction: () => (/* binding */ saveIdentityDetailsAction),
/* harmony export */   savePersonalDetailsAction: () => (/* binding */ savePersonalDetailsAction),
/* harmony export */   searchCustomerErrorAction: () => (/* binding */ searchCustomerErrorAction),
/* harmony export */   searchCustomerSuccessAction: () => (/* binding */ searchCustomerSuccessAction),
/* harmony export */   searchItsMeCustomerErrorAction: () => (/* binding */ searchItsMeCustomerErrorAction),
/* harmony export */   setAuthorConfigurationAction: () => (/* binding */ setAuthorConfigurationAction),
/* harmony export */   setBrand: () => (/* binding */ setBrand),
/* harmony export */   setCategory: () => (/* binding */ setCategory),
/* harmony export */   setProductDetailsAction: () => (/* binding */ setProductDetailsAction)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);

const setBrand = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[customer - registration] set the brand', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setCategory = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[customer - registration] set the category', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const savePersonalDetailsAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[customer - registration] save personal Details', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const saveIdentityDetailsAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[customer - registration] save identity Details', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setAuthorConfigurationAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[customer - registration] set author configuration', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getLocationsAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[customer - registration] get locations');
const getLocationsSuccessAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[customer - registration] get locations success response', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getStreetsAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[customer - registration] get streets', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getStreetsSuccessAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[customer - registration] get streets success response', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getStreetsErrorAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[customer - registration] get streets Error', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getLocationErrorAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[customer - registration] get location Error', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getAddressErrorAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[customer - registration] get address Error', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const searchCustomerErrorAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[customer - registration] get customer search result Error', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getNavsErrorAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[customer - registration] get navs result Error', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const omapiProductExtractionErrorAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[customer - registration] omapi product extraction Error', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const searchItsMeCustomerErrorAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[customer - registration] get its me customer search result Error', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const createCustomerErrorAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[customer - registration] create customer error', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getAddressAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[customer - registration] get address', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getAddressSuccessAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[customer - registration] get address success response', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const SetAddressStoreAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[customer - registration] set address store response', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getSubHouseNoAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[customer - registration] get box numbers', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getBoxNoAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[customer - registration] get subHouse numbers', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getSalesOrderRequestDataAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[customer - registration] get salesOrder', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setProductDetailsAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[customer - registration] set product details', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const saveBusinessIdentityDetailsAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[customer - registration] save business indentity Details', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const performResidentialNavsCheckAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[customer - registration] perform navs check');
const navsSuccessAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[customer - registration] get navs check success response', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const preformResidentialSearchCustomerAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[customer - registration] search residential customer');
const preformBusinessSearchCustomerAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[customer - registration] search business customer');
const searchCustomerSuccessAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[customer - registration] search customer success response', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const resetSearchCustomerSuccessAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[customer - registration] reset search customer success response');
const finalizeFlowAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[customer - registration] finalize flow');
const createCustomerSuccessAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[customer - registration] create customer success');
const performOmapiProductsExtractionAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[customer - registration] extract omapi product');
const omapiProductExtractionSuccessAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[customer - registration] omapi product extraction success response', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const resetError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[customer - registration] reset http error');
const loginAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[customer - registration] Login');
const loginSuccessAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[customer - registration] login success response', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loginErrorAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[customer - registration] login error', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const performLegalEntityAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[customer - registration] get legal enitity');
const performLegalEntitySuccessAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[customer - registration] perfomr legal entity success action', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const performLegalEntityErrorAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[customer - registration] perfomr legal entity error action', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const performItsMeSearchAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[customer - registration] search its me customer', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const itsMeSearchSuccessAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[customer - registration] its me search success response', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 93410:
/*!******************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/+state/customer-registration.effects.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerRegistrationEffects: () => (/* binding */ CustomerRegistrationEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ 12506);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _infrastructure_address_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../infrastructure/address.constant */ 16478);
/* harmony import */ var _infrastructure_address_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../infrastructure/address.service */ 72826);
/* harmony import */ var _infrastructure_create_customer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../infrastructure/create-customer.service */ 89626);
/* harmony import */ var _infrastructure_extract_omapi_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../infrastructure/extract-omapi-product.service */ 67234);
/* harmony import */ var _infrastructure_navs_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../infrastructure/navs.service */ 56632);
/* harmony import */ var _infrastructure_search_customer_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../infrastructure/search-customer.service */ 85574);
/* harmony import */ var _util_navs_check_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/navs-check.util */ 60758);
/* harmony import */ var _customer_registration_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./customer-registration.actions */ 57410);
/* harmony import */ var _customer_registration_selectors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./customer-registration.selectors */ 12697);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @telenet/ng-lib-ocapi */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _infrastructure_legal_entity_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../infrastructure/legal-entity.service */ 62773);
/* harmony import */ var _infrastructure_its_me_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../infrastructure/its-me.service */ 95304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_16__);



























class CustomerRegistrationEffects {
  constructor(actions$, addressService, navsService, searchCustomerService, createCustomerService, extractOmapiProductService, userDetailsService, loginService, legalEntityService, itsMeService, store) {
    this.actions$ = actions$;
    this.addressService = addressService;
    this.navsService = navsService;
    this.searchCustomerService = searchCustomerService;
    this.createCustomerService = createCustomerService;
    this.extractOmapiProductService = extractOmapiProductService;
    this.userDetailsService = userDetailsService;
    this.loginService = loginService;
    this.legalEntityService = legalEntityService;
    this.itsMeService = itsMeService;
    this.store = store;
    this.locations$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_11__.getLocationsAction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => {
      return this.addressService.getMunicipalities().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => _customer_registration_actions__WEBPACK_IMPORTED_MODULE_11__.resetError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(addressLocations => _customer_registration_actions__WEBPACK_IMPORTED_MODULE_11__.getLocationsSuccessAction({
        locations: addressLocations
      })), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_11__.getLocationErrorAction({
        error: error
      }))));
    })));
    this.streets$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_11__.getStreetsAction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(action => action.postalCode), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(postalCode => {
      return this.addressService.getStreets(postalCode).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => _customer_registration_actions__WEBPACK_IMPORTED_MODULE_11__.resetError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(streets => _customer_registration_actions__WEBPACK_IMPORTED_MODULE_11__.getStreetsSuccessAction({
        streets: streets
      })), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_11__.getStreetsErrorAction({
        error: error
      }))));
    })));
    this.address$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_11__.getAddressAction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(action => {
      return this.addressService.getAddressByData(_infrastructure_address_constant__WEBPACK_IMPORTED_MODULE_4__.AddressConstants.ADDRESS_MESSSAGE_GROUP, action.payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => _customer_registration_actions__WEBPACK_IMPORTED_MODULE_11__.resetError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(addresses => addresses.map(address => address.addressType = action.payload.type)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(addresses => _customer_registration_actions__WEBPACK_IMPORTED_MODULE_11__.getAddressSuccessAction({
        address: addresses
      })), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_11__.getAddressErrorAction({
        error: error
      }))));
    })));
    this.navsResult$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_11__.performResidentialNavsCheckAction), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.withLatestFrom)(this.store.select(_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_12__.selectUserInput), this.store.select(_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_12__.selectAddressData)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(([_navsCheck, userInput, address]) => {
      const request = {
        firstName: userInput.personalDetails.firstName,
        lastName: userInput.personalDetails.lastName,
        birthday: _util_navs_check_util__WEBPACK_IMPORTED_MODULE_10__.NavsCheckUtil.getFormattedDOB(userInput.identityDetails.dateOfBirth),
        customerAddress: {
          id: address[0].addressId
        },
        language: 'nl',
        customerCategory: 'residential'
      };
      return this.navsService.getResidentialNavs(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => _customer_registration_actions__WEBPACK_IMPORTED_MODULE_11__.resetError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(result => _customer_registration_actions__WEBPACK_IMPORTED_MODULE_11__.navsSuccessAction({
        navsResponse: result
      })), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_11__.getNavsErrorAction({
        error: error
      }))));
    })));
    this.residentialCustomerSearchResult$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_11__.preformResidentialSearchCustomerAction), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.withLatestFrom)(this.store.select(_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_12__.selectUserInput), this.store.select((0,_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_12__.selectAddressByType)('legalAddress')), this.store.select(_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_12__.selectNavsCheckResult)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(([_action, userInput, address, navsResult]) => {
      const dateOfBirth = new Date(userInput.identityDetails.dateOfBirth ?? '');
      const formattedDoB = `${dateOfBirth.getDate()}/${dateOfBirth.getMonth() + 1}/${dateOfBirth.getFullYear()}`;
      const customer = {
        customerCategory: 'Residential',
        firstName: userInput.personalDetails?.firstName,
        lastName: userInput.personalDetails?.lastName,
        rrn: userInput.identityDetails?.nationalRegistrationNumber,
        cardIdNumber: userInput.identityDetails?.isBelgianIdentity ? userInput.identityDetails?.belgianIdentityCardNumber : userInput.identityDetails?.foreignIdentityCardNumber,
        birthday: formattedDoB,
        addressId: address?.addressId,
        encryptedData: navsResult.encryptedData
      };
      return this.searchCustomerService.searchCustomer(customer).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => _customer_registration_actions__WEBPACK_IMPORTED_MODULE_11__.resetError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(result => _customer_registration_actions__WEBPACK_IMPORTED_MODULE_11__.searchCustomerSuccessAction({
        customerResponse: result
      })), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_11__.searchCustomerErrorAction({
        error: error
      }))));
    })));
    this.businessCustomerSearchResult$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_11__.preformBusinessSearchCustomerAction), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.withLatestFrom)(this.store.select(_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_12__.selectUserInput), this.store.select((0,_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_12__.selectAddressByType)('legalAddress'))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(([_action, userInput, address]) => {
      const customer = {
        customerCategory: 'Business',
        belgianEnterpriseNumber: userInput.businessIdentityDetails.belgianEnterpriseNumber,
        legalName: userInput.businessIdentityDetails.companyName,
        addressId: address?.addressId
      };
      return this.searchCustomerService.searchCustomer(customer).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => _customer_registration_actions__WEBPACK_IMPORTED_MODULE_11__.resetError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(result => _customer_registration_actions__WEBPACK_IMPORTED_MODULE_11__.searchCustomerSuccessAction({
        customerResponse: result
      })), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_11__.searchCustomerErrorAction({
        error: error
      }))));
    })));
    this.omapiProductsExtractionResult$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_11__.performOmapiProductsExtractionAction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => {
      return this.extractOmapiProductService.extractOmapiProduct().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => _customer_registration_actions__WEBPACK_IMPORTED_MODULE_11__.resetError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(omapiProducts => _customer_registration_actions__WEBPACK_IMPORTED_MODULE_11__.omapiProductExtractionSuccessAction({
        products: omapiProducts
      })), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_11__.omapiProductExtractionErrorAction({
        error: error
      }))));
    })));
    this.login$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_11__.loginAction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => {
      return this.userDetailsService.getUserDetails().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(value => !!(value?.state && value?.nonce)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(loginDetails => this.loginService.login(loginDetails.state, loginDetails.nonce)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(loginDetails => _customer_registration_actions__WEBPACK_IMPORTED_MODULE_11__.loginSuccessAction({
        loginDetails: loginDetails
      })), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_11__.loginErrorAction({
        error: error
      }))));
    })));
    this.legalEnyityResult$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_11__.performLegalEntityAction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => {
      return this.legalEntityService.getLegalEntityData('customer-registration').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(legalEntities => _customer_registration_actions__WEBPACK_IMPORTED_MODULE_11__.performLegalEntitySuccessAction({
        legalEntityResponse: legalEntities
      })), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_11__.performLegalEntityErrorAction({
        error: error
      }))));
    })));
    this.itsMeSearchResult$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_11__.performItsMeSearchAction), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.withLatestFrom)(this.store.select(_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_12__.selectItsMeParams)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(([_action, itsMeParams]) => {
      return this.itsMeService.getItsMeCustomer(itsMeParams).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(itsMeCustomer => _customer_registration_actions__WEBPACK_IMPORTED_MODULE_11__.itsMeSearchSuccessAction({
        itsMeResponse: itsMeCustomer
      })), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_11__.searchItsMeCustomerErrorAction({
        error: error
      }))));
    })));
    this.finalizeFlow$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_11__.finalizeFlowAction), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.withLatestFrom)(this.store.select(_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_12__.selectUserInput), this.store.select(_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_12__.selectAddressData), this.store.select(_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_12__.selectNavsCheckResult)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(([_action, userInput, addresses, navsResult]) => {
      const address = addresses[0];
      const customerAddress = {
        id: address.addressId ?? ''
      };
      const createCustomerRequest = {
        brand: 'Telenet',
        firstName: userInput.personalDetails.firstName,
        lastName: userInput.personalDetails.lastName,
        placeOfBirth: userInput.identityDetails.placeOfBirth,
        customerCategory: 'Residential',
        contactsDetails: {
          title: userInput.personalDetails.salutation,
          gender: 'Male',
          eMail: userInput.personalDetails.email,
          birthday: userInput.identityDetails.dateOfBirth?.toISOString() || '',
          phoneNumber: {
            value: userInput.personalDetails.phoneNumber,
            type: 'Mobile Phone'
          },
          communicationLanguage: 'NL'
        },
        rrn: userInput.identityDetails.nationalRegistrationNumber,
        cardIdNumber: userInput.identityDetails.belgianIdentityCardNumber ?? userInput.identityDetails.foreignIdentityCardNumber ?? '',
        identificationType: 'Belgian Identification',
        documentType: 'E-ID',
        customerAddress: customerAddress,
        customerLocations: [{
          address: customerAddress
        }],
        billingAccount: {
          billDeliveryMethod: 'Email'
        },
        navsScore: navsResult.navsScore,
        encryptedData: navsResult.encryptedData
      };
      return this.createCustomerService.createCustomer(createCustomerRequest).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => _customer_registration_actions__WEBPACK_IMPORTED_MODULE_11__.resetError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => _customer_registration_actions__WEBPACK_IMPORTED_MODULE_11__.createCustomerSuccessAction()), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_11__.createCustomerErrorAction({
        error: error
      }))));
    })));
  }
  static #_ = this.ɵfac = function CustomerRegistrationEffects_Factory(t) {
    return new (t || CustomerRegistrationEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵinject"](_infrastructure_address_service__WEBPACK_IMPORTED_MODULE_5__.AddressService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵinject"](_infrastructure_navs_service__WEBPACK_IMPORTED_MODULE_8__.NavsService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵinject"](_infrastructure_search_customer_service__WEBPACK_IMPORTED_MODULE_9__.SearchCustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵinject"](_infrastructure_create_customer_service__WEBPACK_IMPORTED_MODULE_6__.CreateCustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵinject"](_infrastructure_extract_omapi_product_service__WEBPACK_IMPORTED_MODULE_7__.ExtractOmapiProductService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵinject"](_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_13__.UserDetailsService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵinject"](_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_13__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵinject"](_infrastructure_legal_entity_service__WEBPACK_IMPORTED_MODULE_14__.LegalEntityService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵinject"](_infrastructure_its_me_service__WEBPACK_IMPORTED_MODULE_15__.ItsMeService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Store));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjectable"]({
    token: CustomerRegistrationEffects,
    factory: CustomerRegistrationEffects.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 53484:
/*!****************************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/+state/customer-registration.factory.selectors.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectIsPIDEnabledForBusiness: () => (/* binding */ selectIsPIDEnabledForBusiness)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _customer_registration_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-registration.selectors */ 12697);


const selectIsPIDEnabledForBusiness = isBusiness => (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_1__.featureState], state => {
  return state.authorConfiguration.isPIDEnabled && isBusiness;
});

/***/ }),

/***/ 45119:
/*!******************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/+state/customer-registration.reducer.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customerRegistrationFeature: () => (/* binding */ customerRegistrationFeature),
/* harmony export */   customerRegistrationReducer: () => (/* binding */ customerRegistrationReducer),
/* harmony export */   reducer: () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! immer */ 75825);
/* harmony import */ var _util_navs_check_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/navs-check.util */ 60758);
/* harmony import */ var _customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-registration.actions */ 57410);
/* harmony import */ var _customer_registration_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-registration.state */ 99836);
/* harmony import */ var _util_its_me_formatting_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/its-me-formatting.util */ 81820);






const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createReducer)(_customer_registration_state__WEBPACK_IMPORTED_MODULE_3__.defaultState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.setAuthorConfigurationAction, (state, authorConfiguration) => (0,immer__WEBPACK_IMPORTED_MODULE_5__.produce)(state, draft => {
  draft.authorConfiguration = authorConfiguration;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.setBrand, (state, {
  brand
}) => (0,immer__WEBPACK_IMPORTED_MODULE_5__.produce)(state, draft => {
  draft.brand = brand;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.setCategory, (state, {
  category
}) => (0,immer__WEBPACK_IMPORTED_MODULE_5__.produce)(state, draft => {
  draft.category = category;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.savePersonalDetailsAction, (state, personalDetails) => (0,immer__WEBPACK_IMPORTED_MODULE_5__.produce)(state, draft => {
  draft.userInput.personalDetails = personalDetails;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.saveIdentityDetailsAction, (state, identityDetails) => (0,immer__WEBPACK_IMPORTED_MODULE_5__.produce)(state, draft => {
  draft.userInput.identityDetails = identityDetails;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.getLocationsSuccessAction, (state, {
  locations
}) => (0,immer__WEBPACK_IMPORTED_MODULE_5__.produce)(state, draft => {
  draft.locations = locations;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.getSalesOrderRequestDataAction, (state, salesOrderRequestData) => (0,immer__WEBPACK_IMPORTED_MODULE_5__.produce)(state, draft => {
  draft.salesOrderRequestData = salesOrderRequestData;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.getStreetsSuccessAction, (state, {
  streets
}) => (0,immer__WEBPACK_IMPORTED_MODULE_5__.produce)(state, draft => {
  draft.streets = streets;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.getAddressSuccessAction, (state, {
  address
}) => (0,immer__WEBPACK_IMPORTED_MODULE_5__.produce)(state, draft => {
  draft.address = [];
  draft.address = address;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.getBoxNoAction, (state, {
  address
}) => (0,immer__WEBPACK_IMPORTED_MODULE_5__.produce)(state, draft => {
  draft.boxNumbers = address.map(address => address.boxNumber).filter(boxNumber => !!boxNumber);
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.getSubHouseNoAction, (state, {
  address
}) => (0,immer__WEBPACK_IMPORTED_MODULE_5__.produce)(state, draft => {
  draft.subHouseNumbers = address.map(address => address.subHouseNumber).filter(subHouseNumber => !!subHouseNumber);
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.SetAddressStoreAction, (state, {
  address
}) => (0,immer__WEBPACK_IMPORTED_MODULE_5__.produce)(state, draft => {
  const addressType = address.addressType;
  const currentAddresses = draft.addressStore;
  if (currentAddresses && currentAddresses.length > 0) {
    const existingAddressIndex = currentAddresses.findIndex(currentAddress => currentAddress.addressType === addressType);
    if (existingAddressIndex !== -1) {
      currentAddresses[existingAddressIndex] = address;
    } else {
      currentAddresses.push(address);
    }
  } else {
    draft.addressStore = [address];
  }
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.getStreetsErrorAction, (state, {
  error
}) => (0,immer__WEBPACK_IMPORTED_MODULE_5__.produce)(state, draft => {
  draft.error = error;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.getLocationErrorAction, (state, {
  error
}) => (0,immer__WEBPACK_IMPORTED_MODULE_5__.produce)(state, draft => {
  draft.error = error;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.getAddressErrorAction, (state, {
  error
}) => (0,immer__WEBPACK_IMPORTED_MODULE_5__.produce)(state, draft => {
  draft.error = error;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.searchCustomerErrorAction, (state, {
  error
}) => (0,immer__WEBPACK_IMPORTED_MODULE_5__.produce)(state, draft => {
  draft.error = error;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.resetSearchCustomerSuccessAction, state => (0,immer__WEBPACK_IMPORTED_MODULE_5__.produce)(state, draft => {
  const restCustomerResponse = {
    firstName: '',
    lastName: '',
    id: '',
    status: '',
    type: '',
    customerNumber: ''
  };
  draft.searchCustomerResult = restCustomerResponse;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.getNavsErrorAction, (state, {
  error
}) => (0,immer__WEBPACK_IMPORTED_MODULE_5__.produce)(state, draft => {
  draft.error = error;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.omapiProductExtractionErrorAction, (state, {
  error
}) => (0,immer__WEBPACK_IMPORTED_MODULE_5__.produce)(state, draft => {
  draft.error = error;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.searchItsMeCustomerErrorAction, (state, {
  error
}) => (0,immer__WEBPACK_IMPORTED_MODULE_5__.produce)(state, draft => {
  draft.error = error;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.performLegalEntitySuccessAction, (state, {
  legalEntityResponse
}) => (0,immer__WEBPACK_IMPORTED_MODULE_5__.produce)(state, draft => {
  draft.legalEntityDetails = legalEntityResponse;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.performLegalEntityErrorAction, (state, {
  error
}) => (0,immer__WEBPACK_IMPORTED_MODULE_5__.produce)(state, draft => {
  draft.error = error;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.performLegalEntitySuccessAction, (state, {
  legalEntityResponse
}) => (0,immer__WEBPACK_IMPORTED_MODULE_5__.produce)(state, draft => {
  draft.legalEntityDetails = legalEntityResponse;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.setProductDetailsAction, (state, {
  details
}) => (0,immer__WEBPACK_IMPORTED_MODULE_5__.produce)(state, draft => {
  draft.productDetails = details;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.saveBusinessIdentityDetailsAction, (state, businessIdentityDetails) => (0,immer__WEBPACK_IMPORTED_MODULE_5__.produce)(state, draft => {
  draft.userInput.businessIdentityDetails = businessIdentityDetails;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.navsSuccessAction, (state, {
  navsResponse
}) => (0,immer__WEBPACK_IMPORTED_MODULE_5__.produce)(state, draft => {
  draft.navsResult = {
    encryptedData: navsResponse.encryptedData,
    navsScore: navsResponse.navsScore,
    succeeded: _util_navs_check_util__WEBPACK_IMPORTED_MODULE_1__.NavsCheckUtil.isScoreHighEnough(navsResponse)
  };
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.searchCustomerSuccessAction, (state, {
  customerResponse
}) => (0,immer__WEBPACK_IMPORTED_MODULE_5__.produce)(state, draft => {
  draft.searchCustomerResult = customerResponse;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.omapiProductExtractionSuccessAction, (state, {
  products
}) => (0,immer__WEBPACK_IMPORTED_MODULE_5__.produce)(state, draft => {
  draft.omapiProducts = products;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.resetError, state => (0,immer__WEBPACK_IMPORTED_MODULE_5__.produce)(state, draft => {
  draft.error = undefined;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.performItsMeSearchAction, (state, {
  itsMeParams: itsMeParams
}) => (0,immer__WEBPACK_IMPORTED_MODULE_5__.produce)(state, draft => {
  draft.itsMeParams = itsMeParams;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.itsMeSearchSuccessAction, (state, {
  itsMeResponse: itsMeResponse
}) => (0,immer__WEBPACK_IMPORTED_MODULE_5__.produce)(state, draft => {
  draft.itsMeResult = _util_its_me_formatting_util__WEBPACK_IMPORTED_MODULE_4__.ItsMeFormattingUtil.formatItsMeResponse(itsMeResponse);
})));
function customerRegistrationReducer(state = _customer_registration_state__WEBPACK_IMPORTED_MODULE_3__.defaultState, action) {
  return reducer(state, action);
}
const customerRegistrationFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeature)({
  name: 'customerRegistrationFeature',
  reducer: customerRegistrationReducer
});

/***/ }),

/***/ 12697:
/*!********************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/+state/customer-registration.selectors.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   featureState: () => (/* binding */ featureState),
/* harmony export */   isPidEnabled: () => (/* binding */ isPidEnabled),
/* harmony export */   selectAddressByType: () => (/* binding */ selectAddressByType),
/* harmony export */   selectAddressData: () => (/* binding */ selectAddressData),
/* harmony export */   selectAddressStore: () => (/* binding */ selectAddressStore),
/* harmony export */   selectBoxNumbers: () => (/* binding */ selectBoxNumbers),
/* harmony export */   selectBrand: () => (/* binding */ selectBrand),
/* harmony export */   selectBusinessIdentityDetails: () => (/* binding */ selectBusinessIdentityDetails),
/* harmony export */   selectCategory: () => (/* binding */ selectCategory),
/* harmony export */   selectDOB: () => (/* binding */ selectDOB),
/* harmony export */   selectError: () => (/* binding */ selectError),
/* harmony export */   selectIsBelgianIdentity: () => (/* binding */ selectIsBelgianIdentity),
/* harmony export */   selectItsMeParams: () => (/* binding */ selectItsMeParams),
/* harmony export */   selectItsMeResponse: () => (/* binding */ selectItsMeResponse),
/* harmony export */   selectLegalEntityDetails: () => (/* binding */ selectLegalEntityDetails),
/* harmony export */   selectLocations: () => (/* binding */ selectLocations),
/* harmony export */   selectMarketingUrl: () => (/* binding */ selectMarketingUrl),
/* harmony export */   selectNavsCheckResult: () => (/* binding */ selectNavsCheckResult),
/* harmony export */   selectOmapiProduct: () => (/* binding */ selectOmapiProduct),
/* harmony export */   selectPersonalDetails: () => (/* binding */ selectPersonalDetails),
/* harmony export */   selectPrivacyPolicyUrl: () => (/* binding */ selectPrivacyPolicyUrl),
/* harmony export */   selectSalesOrder: () => (/* binding */ selectSalesOrder),
/* harmony export */   selectSearchCustomerResultExists: () => (/* binding */ selectSearchCustomerResultExists),
/* harmony export */   selectSearchCustomerResultType: () => (/* binding */ selectSearchCustomerResultType),
/* harmony export */   selectStreets: () => (/* binding */ selectStreets),
/* harmony export */   selectSubHouseNumbers: () => (/* binding */ selectSubHouseNumbers),
/* harmony export */   selectUserInput: () => (/* binding */ selectUserInput)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);

const featureState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)('customerRegistrationFeature');
const selectUserInput = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.userInput);
const selectBrand = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.brand);
const selectCategory = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.category);
const selectPersonalDetails = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.userInput.personalDetails);
const selectPrivacyPolicyUrl = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.authorConfiguration.privacyPolicyUrl);
const selectMarketingUrl = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.authorConfiguration.marketingUrl);
const isPidEnabled = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.authorConfiguration.isPIDEnabled);
const selectLocations = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.locations);
const selectStreets = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.streets);
const selectAddressData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.address);
const selectBoxNumbers = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.boxNumbers);
const selectIsBelgianIdentity = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.userInput?.identityDetails?.isBelgianIdentity);
const selectSubHouseNumbers = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.subHouseNumbers);
const selectAddressStore = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.addressStore);
const selectSalesOrder = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.salesOrderRequestData);
const selectNavsCheckResult = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.navsResult);
const selectSearchCustomerResultType = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.searchCustomerResult?.type);
const selectSearchCustomerResultExists = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => {
  return Object.keys(state.searchCustomerResult).length !== 0 && state.searchCustomerResult?.type === 'hard' && !['Prospect', 'Pending Activation', 'Former'].includes(state.searchCustomerResult?.status);
});
const selectOmapiProduct = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.omapiProducts);
const selectError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.error?.error);
const selectDOB = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.userInput?.identityDetails?.dateOfBirth);
const selectBusinessIdentityDetails = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.userInput.businessIdentityDetails);
const selectLegalEntityDetails = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.legalEntityDetails);
const selectAddressByType = addressType => (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.address?.find(address => address.addressType === addressType));
const selectItsMeParams = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.itsMeParams);
const selectItsMeResponse = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([featureState], state => state.itsMeResult);

/***/ }),

/***/ 91589:
/*!****************************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/+state/customer-registration.state.testfactory.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customerRegistrationFactory: () => (/* binding */ customerRegistrationFactory)
/* harmony export */ });
/* harmony import */ var factory_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! factory.ts */ 46032);
/* harmony import */ var _customer_registration_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-registration.state */ 99836);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1261);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__);



const customerRegistrationFactory = factory_ts__WEBPACK_IMPORTED_MODULE_0__.Sync.makeFactory({
  brand: 'TELENET',
  category: _customer_registration_state__WEBPACK_IMPORTED_MODULE_1__.CustomerCategory.RESIDENTIAL,
  authorConfiguration: {
    privacyPolicyUrl: 'www.privacy.be',
    marketingUrl: 'www.marketing.be',
    showSalesContactNumber: true,
    isPIDEnabled: true
  },
  userInput: {
    personalDetails: {
      salutation: _customer_registration_state__WEBPACK_IMPORTED_MODULE_1__.Salutation.MVR,
      firstName: 'Jane',
      lastName: 'Fonda',
      phoneNumber: '0412345678',
      email: 'jane.fonda@telenet.be'
    },
    identityDetails: {
      dateOfBirth: new Date('1995-08-12'),
      placeOfBirth: 'New York',
      belgianIdentityCardNumber: 'OMV-6280289-24',
      foreignIdentityCardNumber: 'DIF462277647',
      nationalRegistrationNumber: '17.07.30-033.84',
      isBelgianIdentity: true
    },
    businessIdentityDetails: {
      companyName: 'Apple',
      belgianEnterpriseNumber: 'BE0473416418',
      legalForm: 'BV',
      installationAddressToggle: true,
      billingAddressToggle: true
    }
  },
  locations: [{
    postalCode: '2800',
    location: 'Mechelen'
  }, {
    postalCode: '3000',
    location: 'Leuven'
  }],
  streets: ['olivetenvest', 'Korenmarkt', 'olivetenstraat'],
  address: [{
    addressType: 'legalAddress',
    addressId: '9876568899876',
    streetId: '21321',
    tinaLocationId: '2',
    country: 'Belgium',
    type: 'type',
    houseNumber: '10',
    boxNumber: '06',
    subHouseNumber: '10',
    street: 'olivetenvest',
    postalCode: '2800',
    municipality: 'Mechelen',
    countryCode: '32',
    floorNumber: '10',
    getDisplayAddress: () => {
      return {};
    },
    formatPostalCode: (displayAddress, singleLine) => {
      return displayAddress + '' + singleLine + '';
    }
  }, {
    addressType: 'installationAddress',
    addressId: '9876568899876',
    streetId: '21321',
    tinaLocationId: '2',
    country: 'Belgium',
    type: 'type',
    houseNumber: '10',
    boxNumber: '94',
    subHouseNumber: '2',
    street: 'olivetenvest',
    postalCode: '2800',
    municipality: 'Mechelen',
    countryCode: '32',
    floorNumber: '10',
    getDisplayAddress: () => {
      return {};
    },
    formatPostalCode: (displayAddress, singleLine) => {
      return displayAddress + '' + singleLine + '';
    }
  }],
  addressStore: [{
    addressType: 'legalAddress',
    addressId: '9876568899876',
    streetId: '21321',
    tinaLocationId: '2',
    size: 1,
    country: 'Belgium'
  }, {
    addressType: 'installationAddress',
    addressId: '9876568899876',
    streetId: '21321',
    tinaLocationId: '2',
    size: 1,
    country: 'Belgium'
  }],
  addressRequestInterface: {
    postalCode: '',
    municipality: '',
    street: '',
    streetId: '',
    houseNumber: '',
    subHouseNumber: '',
    boxNumber: '',
    country: '',
    exactAddressSearch: false,
    fields: '',
    customHeaders: {},
    addressType: '',
    tinaLocationId: '',
    addressId: '',
    id: '',
    type: ''
  },
  salesOrderRequestData: {
    id: '904357869398392832',
    offers: [{
      id: 'BASE0000',
      type: 'Internet'
    }]
  },
  error: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpErrorResponse({}),
  productDetails: {
    minAgeLimit: '16',
    isPrepaidProduct: false,
    isFixedProduct: true,
    isStandAloneMobilePlan: true
  },
  navsResult: {
    succeeded: true,
    encryptedData: '',
    navsScore: ''
  },
  searchCustomerResult: {
    firstName: 'Jane',
    lastName: 'Fonda',
    id: '805285',
    type: 'hard',
    customerNumber: '231938',
    status: 'Prospect'
  },
  omapiProducts: [],
  legalEntityDetails: {
    domain: '',
    property: '',
    values: [{
      name: '',
      id: ''
    }]
  },
  boxNumbers: [],
  subHouseNumbers: [],
  itsMeParams: {
    code: '123435',
    state: '7648970'
  },
  itsMeResult: {
    rrn: '17073003384',
    firstName: 'JANE',
    lastName: 'FONDA',
    gender: 'female',
    birthday: '30/07/1917',
    cardIDNumber: 'OMV628028924',
    nationality: 'BE',
    birthLocation: 'Anywhere',
    email: 'jane.fonda@telenet.be',
    emailVerified: false,
    phoneNumber: '0412345678',
    customerAddress: {
      street: 'OLIVETENVEST',
      houseNumber: '10',
      subHouseNumber: '',
      boxNumber: '06',
      postalCode: '2800',
      municipality: 'MECHELEN'
    }
  }
});

/***/ }),

/***/ 99836:
/*!****************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/+state/customer-registration.state.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerCategory: () => (/* binding */ CustomerCategory),
/* harmony export */   Salutation: () => (/* binding */ Salutation),
/* harmony export */   defaultState: () => (/* binding */ defaultState)
/* harmony export */ });
var Salutation;
(function (Salutation) {
  Salutation["DHR"] = "Dhr.";
  Salutation["MVR"] = "Mevr.";
})(Salutation || (Salutation = {}));
var CustomerCategory;
(function (CustomerCategory) {
  CustomerCategory["BUSINESS"] = "Business";
  CustomerCategory["RESIDENTIAL"] = "Residential.";
})(CustomerCategory || (CustomerCategory = {}));
const defaultState = {
  brand: 'TELENET',
  category: CustomerCategory.RESIDENTIAL,
  authorConfiguration: {
    privacyPolicyUrl: 'string',
    marketingUrl: 'string',
    showSalesContactNumber: false,
    isPIDEnabled: false
  },
  userInput: {
    personalDetails: {
      salutation: Salutation.DHR,
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: ''
    },
    identityDetails: {
      dateOfBirth: undefined,
      placeOfBirth: '',
      belgianIdentityCardNumber: '',
      foreignIdentityCardNumber: '',
      nationalRegistrationNumber: '',
      isBelgianIdentity: true
    },
    businessIdentityDetails: {
      companyName: '',
      legalForm: '',
      belgianEnterpriseNumber: '',
      installationAddressToggle: true,
      billingAddressToggle: true
    }
  },
  locations: [],
  streets: [],
  address: [],
  addressStore: [],
  addressRequestInterface: {
    postalCode: '',
    municipality: '',
    street: '',
    streetId: '',
    houseNumber: '',
    subHouseNumber: '',
    boxNumber: '',
    country: '',
    exactAddressSearch: false,
    fields: '',
    customHeaders: {},
    addressType: '',
    tinaLocationId: '',
    addressId: '',
    id: '',
    type: ''
  },
  salesOrderRequestData: {},
  error: undefined,
  productDetails: {
    minAgeLimit: '16',
    isPrepaidProduct: false,
    isFixedProduct: false,
    isStandAloneMobilePlan: false
  },
  navsResult: {
    succeeded: false,
    encryptedData: '',
    navsScore: ''
  },
  searchCustomerResult: {
    firstName: '',
    lastName: '',
    id: '',
    status: '',
    type: '',
    customerNumber: ''
  },
  omapiProducts: [],
  legalEntityDetails: {
    domain: '',
    property: '',
    values: [{
      name: '',
      id: ''
    }]
  },
  boxNumbers: [],
  subHouseNumbers: [],
  itsMeParams: {
    code: '',
    state: ''
  },
  itsMeResult: {
    rrn: '',
    firstName: '',
    lastName: '',
    gender: '',
    birthday: '',
    cardIDNumber: '',
    nationality: '',
    birthLocation: '',
    email: '',
    emailVerified: false,
    phoneNumber: '',
    customerAddress: {
      street: '',
      houseNumber: '',
      subHouseNumber: '',
      boxNumber: '',
      postalCode: '',
      municipality: ''
    }
  }
};

/***/ }),

/***/ 60137:
/*!***************************************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/entities/interfaces/address-request.interface.testfactory.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addressConfigurationTestFactory: () => (/* binding */ addressConfigurationTestFactory)
/* harmony export */ });
/* harmony import */ var factory_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! factory.ts */ 46032);

const addressConfigurationTestFactory = factory_ts__WEBPACK_IMPORTED_MODULE_0__.Sync.makeFactory({
  id: undefined,
  type: 'Geographical Address',
  country: 'België',
  countryCode: 'BE',
  municipality: 'Mechelen',
  postalCode: '2800',
  street: '',
  streetId: undefined,
  houseNumber: undefined,
  boxNumber: undefined,
  floorNumber: undefined,
  tinaLocationId: undefined,
  addresstype: undefined,
  housenr: undefined,
  countrycode: undefined,
  postalcode: undefined,
  address: []
});

/***/ }),

/***/ 14273:
/*!***************************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/entities/interfaces/address-request.interface.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 70205:
/*!*************************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/entities/interfaces/address-store.interface.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 98971:
/*!*******************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/entities/interfaces/apply-method.enum.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApplyMethodEnum: () => (/* binding */ ApplyMethodEnum)
/* harmony export */ });
var ApplyMethodEnum;
(function (ApplyMethodEnum) {
  ApplyMethodEnum["AUTOAPPLY"] = "Autoapply";
  ApplyMethodEnum["TERMINATE_CONTRACT"] = "TerminateContract";
  ApplyMethodEnum["BUY_WITH_FULL_PRICE"] = "BuyWithFullPrice";
})(ApplyMethodEnum || (ApplyMethodEnum = {}));

/***/ }),

/***/ 58451:
/*!*****************************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/entities/interfaces/business-identity.interface.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 46451:
/*!***********************************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/entities/interfaces/create-customer-request.interface.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 69020:
/*!***************************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/entities/interfaces/display-address.interface.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 45834:
/*!************************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/entities/interfaces/legal-entity.interface.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 24253:
/*!************************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/entities/interfaces/legal-option.interface.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 56910:
/*!************************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/entities/interfaces/municipality.interface.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 74643:
/*!***********************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/entities/interfaces/raw-address.interface.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 56963:
/*!***********************************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/entities/interfaces/raw-sales-order-request.interface.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 74799:
/*!****************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/entities/models/address-form.model.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressForm: () => (/* binding */ AddressForm)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 70782);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _address_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./address.enum */ 25722);


class AddressForm extends _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup {
  constructor(input) {
    super(input);
  }
  static build() {
    const addressForm = new AddressForm({});
    addressForm.addControl(_address_enum__WEBPACK_IMPORTED_MODULE_1__.AddressFields.ZIP_CODE, new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]));
    addressForm.addControl(_address_enum__WEBPACK_IMPORTED_MODULE_1__.AddressFields.STREET, new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl({
      value: '',
      disabled: true
    }, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]));
    addressForm.addControl(_address_enum__WEBPACK_IMPORTED_MODULE_1__.AddressFields.HOUSE_NUMBER, new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl({
      value: '',
      disabled: true
    }, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.pattern('[A-Za-z0-9]{0,6}')]));
    addressForm.addControl(_address_enum__WEBPACK_IMPORTED_MODULE_1__.AddressFields.SUB_HOUSE, new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl({
      value: '',
      disabled: true
    }, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.pattern('[A-Za-z0-9]{0,6}')]));
    addressForm.addControl(_address_enum__WEBPACK_IMPORTED_MODULE_1__.AddressFields.BOX_NUMBER, new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl({
      value: '',
      disabled: true
    }, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.pattern('[[A-Za-z0-9]+(/?)+([A-Za-z0-9]{0,4})]{0,6}')]));
    return addressForm;
  }
  get zipCode() {
    return this.get(_address_enum__WEBPACK_IMPORTED_MODULE_1__.AddressFields.ZIP_CODE)?.value || {};
  }
  set zipCode(value) {
    this.get(_address_enum__WEBPACK_IMPORTED_MODULE_1__.AddressFields.ZIP_CODE)?.setValue(value);
  }
  get street() {
    return this.get(_address_enum__WEBPACK_IMPORTED_MODULE_1__.AddressFields.STREET)?.value || '';
  }
  set street(value) {
    this.get(_address_enum__WEBPACK_IMPORTED_MODULE_1__.AddressFields.STREET)?.setValue(value);
  }
  get houseNumber() {
    return this.get(_address_enum__WEBPACK_IMPORTED_MODULE_1__.AddressFields.HOUSE_NUMBER)?.value || '';
  }
  set houseNumber(value) {
    this.get(_address_enum__WEBPACK_IMPORTED_MODULE_1__.AddressFields.HOUSE_NUMBER)?.setValue(value);
  }
  get subHouseNumber() {
    return this.get(_address_enum__WEBPACK_IMPORTED_MODULE_1__.AddressFields.SUB_HOUSE)?.value || '';
  }
  set subHouseNumber(value) {
    this.get(_address_enum__WEBPACK_IMPORTED_MODULE_1__.AddressFields.SUB_HOUSE)?.setValue(value);
  }
  get boxNumber() {
    return this.get(_address_enum__WEBPACK_IMPORTED_MODULE_1__.AddressFields.BOX_NUMBER)?.value || '';
  }
  set boxNumber(value) {
    this.get(_address_enum__WEBPACK_IMPORTED_MODULE_1__.AddressFields.BOX_NUMBER)?.setValue(value);
  }
  markAsInvalid(fieldName) {
    const field = this.get(fieldName);
    if (null !== field) {
      const existingErrors = field.errors || {};
      if (field.value) {
        existingErrors['invalid'] = true;
      }
      field.setErrors(existingErrors);
    }
  }
  resetFromField(start, enableField) {
    const formFields = Object.values(_address_enum__WEBPACK_IMPORTED_MODULE_1__.AddressFields);
    const fieldIndex = formFields.indexOf(start);
    this.resetAndDisableSubsequentFields(formFields, fieldIndex);
    if (enableField) {
      this.get(start)?.enable({
        onlySelf: false,
        emitEvent: false
      });
    }
  }
  resetAndDisableSubsequentFields(formFields, fieldIndex) {
    formFields.slice(fieldIndex, formFields.length).forEach(field => {
      this.get(field)?.reset('', {
        onlySelf: false,
        emitEvent: false
      });
      this.get(field)?.disable({
        onlySelf: false,
        emitEvent: false
      });
    });
  }
  createSearchAddressRequest() {
    const addressRequest = {};
    addressRequest.municipality = this.zipCode.location + '';
    addressRequest.postalCode = this.zipCode.postalCode + '';
    addressRequest.street = this.street.replace('[', '(').replace(']', ')');
    addressRequest.houseNumber = this.houseNumber;
    addressRequest.customHeaders = {
      range: '300'
    };
    return addressRequest;
  }
  createInternalSearchAddressRequest() {
    const addressData = {};
    addressData.houseNumber = this.houseNumber;
    addressData.subHouseNumber = this.subHouseNumber ? this.subHouseNumber : undefined;
    addressData.boxNumber = this.boxNumber ? this.boxNumber : undefined;
    return addressData;
  }
}

/***/ }),

/***/ 25722:
/*!**********************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/entities/models/address.enum.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressFields: () => (/* binding */ AddressFields)
/* harmony export */ });
var AddressFields;
(function (AddressFields) {
  AddressFields["ZIP_CODE"] = "zipCode";
  AddressFields["STREET"] = "street";
  AddressFields["HOUSE_NUMBER"] = "houseNumber";
  AddressFields["SUB_HOUSE"] = "subHouse";
  AddressFields["BOX_NUMBER"] = "boxNumber";
})(AddressFields || (AddressFields = {}));

/***/ }),

/***/ 89345:
/*!***********************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/entities/models/address.model.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Address: () => (/* binding */ Address)
/* harmony export */ });
class Address {
  getDisplayAddress(getFullAddress = false, singleLine = false) {
    const displayAddress = {};
    if (this.street) {
      displayAddress.address = this.street.concat(' ').concat(this.houseNumber + '');
    }
    if (this.subHouseNumber) {
      displayAddress.address = displayAddress.address.concat('/').concat(this.subHouseNumber);
    }
    if (this.boxNumber) {
      displayAddress.address = displayAddress.address.concat('/').concat(this.boxNumber);
    }
    if (this.postalCode && getFullAddress) {
      displayAddress.address = this.formatPostalCode(displayAddress, singleLine);
    }
    displayAddress.zipMunicipality = this.postalCode + '';
    displayAddress.addressId = this.addressId + '';
    if (this.municipality) {
      displayAddress.zipMunicipality = displayAddress.zipMunicipality.concat(' ').concat(this.municipality);
      if (getFullAddress) {
        displayAddress.address = displayAddress.address.concat(' ').concat(this.municipality);
      }
    }
    displayAddress.houseNrSubHouseNr = this.houseNumber + '';
    if (this.subHouseNumber) {
      displayAddress.houseNrSubHouseNr = displayAddress.houseNrSubHouseNr.concat('/').concat(this.subHouseNumber);
    }
    displayAddress.country = this.country ?? '';
    return displayAddress;
  }
  formatPostalCode(displayAddress, singleLine) {
    return displayAddress.address.concat(', ').concat(singleLine ? '' : '\n').concat(this.postalCode + '');
  }
}

/***/ }),

/***/ 24617:
/*!***************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/entities/models/product-type.enum.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductTypeEnum: () => (/* binding */ ProductTypeEnum)
/* harmony export */ });
var ProductTypeEnum;
(function (ProductTypeEnum) {
  ProductTypeEnum["MOBILE"] = "MOBILE";
  ProductTypeEnum["OPTION"] = "OPTION";
  ProductTypeEnum["SMARTPHONE"] = "SMARTPHONE";
  ProductTypeEnum["SMARTPHONES"] = "SMARTPHONES";
  ProductTypeEnum["INTERNET"] = "INTERNET";
  ProductTypeEnum["DTV"] = "DTV";
  ProductTypeEnum["TV"] = "OTTV";
  ProductTypeEnum["FIXED_LINE"] = "FIXED LINE";
  ProductTypeEnum["BUNDLE"] = "BUNDLE";
  ProductTypeEnum["TELEPHONE"] = "TELEPHONE";
  ProductTypeEnum["MOBILE_LINE"] = "MOBILE LINE";
  ProductTypeEnum["PLACEHOLDER"] = "PLACEHOLDER";
  ProductTypeEnum["PLUME"] = "PLUME";
})(ProductTypeEnum || (ProductTypeEnum = {}));

/***/ }),

/***/ 6543:
/*!*************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/facades/address-identity.facade.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressIdentityFacade: () => (/* binding */ AddressIdentityFacade)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../+state/customer-registration.actions */ 57410);
/* harmony import */ var _infrastructure_address_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../infrastructure/address.service */ 72826);
/* harmony import */ var _state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../+state/customer-registration.selectors */ 12697);
/* harmony import */ var _util_omapi_product_category_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/omapi-product-category.util */ 72518);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_5__);








class AddressIdentityFacade {
  constructor(store, addressService) {
    this.store = store;
    this.addressService = addressService;
    this.addresses$ = this.store.select(_state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_3__.selectAddressData);
    this.searchCustomerResultExists$ = this.store.select(_state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_3__.selectSearchCustomerResultExists);
    this.boxNumbers$ = this.store.select(_state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_3__.selectBoxNumbers);
    this.subHouseNumbers$ = this.store.select(_state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_3__.selectSubHouseNumbers);
    this.itsMeResponse$ = this.store.select(_state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_3__.selectItsMeResponse);
    this.omapiProducts$ = this.store.select(_state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_3__.selectOmapiProduct);
    this.isInstallableProductExists$ = _util_omapi_product_category_util__WEBPACK_IMPORTED_MODULE_4__.OmapiProductCategoryUtil.isFixedProduct(this.omapiProducts$);
  }
  performResidentialNavsCheck() {
    this.store.dispatch((0,_state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_1__.performResidentialNavsCheckAction)());
  }
  getMunicipalities() {
    return this.addressService.getMunicipalities();
  }
  getStreets(postalCode) {
    return this.addressService.getStreets(postalCode);
  }
  loadAddress(address) {
    this.store.dispatch((0,_state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_1__.getAddressAction)({
      payload: address
    }));
  }
  searchCustomer() {
    this.store.dispatch((0,_state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_1__.preformResidentialSearchCustomerAction)());
  }
  resetSearchCustomer() {
    this.store.dispatch((0,_state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_1__.resetSearchCustomerSuccessAction)());
  }
  getBoxNumbers(address) {
    this.store.dispatch((0,_state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_1__.getBoxNoAction)({
      address: address
    }));
  }
  getSubHouseNumbers(address) {
    this.store.dispatch((0,_state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_1__.getSubHouseNoAction)({
      address: address
    }));
  }
  saveMatchedAddress(addresses, enteredAddress) {
    const matchedAddress = addresses.filter(address => {
      return address.houseNumber === enteredAddress.houseNumber && address.subHouseNumber === enteredAddress.subHouseNumber && address.boxNumber === enteredAddress.boxNumber && address.addressType === enteredAddress.type;
    });
    const addressStore = {
      addressType: undefined
    };
    if (matchedAddress && matchedAddress[0]) {
      addressStore.addressId = matchedAddress[0].addressId;
      addressStore.tinaLocationId = matchedAddress[0].tinaLocationId;
    }
    addressStore.streetId = addresses[0].streetId;
    addressStore.country = addresses[0].country;
    addressStore.addressType = addresses[0].addressType;
    addressStore.size = addresses.length;
    this.store.dispatch((0,_state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_1__.SetAddressStoreAction)({
      address: addressStore
    }));
  }
  finalizeFlow() {
    this.store.dispatch((0,_state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_1__.finalizeFlowAction)());
  }
  static #_ = this.ɵfac = function AddressIdentityFacade_Factory(t) {
    return new (t || AddressIdentityFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_infrastructure_address_service__WEBPACK_IMPORTED_MODULE_2__.AddressService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: AddressIdentityFacade,
    factory: AddressIdentityFacade.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 72582:
/*!*****************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/facades/author-configuration.facade.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthorConfigurationFacade: () => (/* binding */ AuthorConfigurationFacade)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../+state/customer-registration.selectors */ 12697);
/* harmony import */ var _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../+state/customer-registration.actions */ 57410);
/* harmony import */ var _state_customer_registration_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../+state/customer-registration.state */ 99836);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_5__);








class AuthorConfigurationFacade {
  constructor(store, service) {
    this.store = store;
    this.service = service;
    this.privacyPolicyUrl$ = this.store.select(_state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_1__.selectPrivacyPolicyUrl);
    this.marketingUrl$ = this.store.select(_state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_1__.selectMarketingUrl);
    this.isPidEnabled$ = this.store.select(_state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_1__.isPidEnabled);
  }
  setAuthorConfiguration(authorConfiguration) {
    this.store.dispatch((0,_state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.setAuthorConfigurationAction)(authorConfiguration));
  }
  setBrandFromUrl() {
    const brand = this.service.getCustomerBrand()?.toUpperCase();
    this.store.dispatch((0,_state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.setBrand)({
      brand: brand ?? ''
    }));
  }
  setCustomerCategory() {
    const category = this.isResidential() ? _state_customer_registration_state__WEBPACK_IMPORTED_MODULE_3__.CustomerCategory.RESIDENTIAL : _state_customer_registration_state__WEBPACK_IMPORTED_MODULE_3__.CustomerCategory.BUSINESS;
    this.store.dispatch((0,_state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.setCategory)({
      category: category
    }));
  }
  getBrand() {
    const customerBrand = this.service.getCustomerBrand();
    return customerBrand ? customerBrand.toLowerCase() : '';
  }
  isResidential() {
    return this.service.isCustomerOfType(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__.CustomerCategoryEnum.RESIDENTIAL);
  }
  isBusiness() {
    return this.service.isCustomerOfType(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__.CustomerCategoryEnum.BUSINESS);
  }
  static #_ = this.ɵfac = function AuthorConfigurationFacade_Factory(t) {
    return new (t || AuthorConfigurationFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__.PathCategorisationService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: AuthorConfigurationFacade,
    factory: AuthorConfigurationFacade.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 21721:
/*!**********************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/facades/business-identity-details.facade.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BusinessIdentityDetailsFacade: () => (/* binding */ BusinessIdentityDetailsFacade)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../+state/customer-registration.actions */ 57410);
/* harmony import */ var _state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../+state/customer-registration.selectors */ 12697);
/* harmony import */ var _infrastructure_address_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../infrastructure/address.service */ 72826);
/* harmony import */ var _util_omapi_product_category_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/omapi-product-category.util */ 72518);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_5__);








class BusinessIdentityDetailsFacade {
  constructor(store, addressService) {
    this.store = store;
    this.addressService = addressService;
    this.addresses$ = this.store.select(_state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_2__.selectAddressData);
    this.boxNumbers$ = this.store.select(_state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_2__.selectBoxNumbers);
    this.subHouseNumbers$ = this.store.select(_state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_2__.selectSubHouseNumbers);
    this.error$ = this.store.select(_state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_2__.selectError);
    this.businessIdentityDetails$ = this.store.select(_state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_2__.selectBusinessIdentityDetails);
    this.searchCustomerResultExists$ = this.store.select(_state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_2__.selectSearchCustomerResultExists);
    this.legalEntityDetails$ = this.store.select(_state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_2__.selectLegalEntityDetails);
    this.omapiProducts$ = this.store.select(_state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_2__.selectOmapiProduct);
    this.isInstallableProductExists$ = _util_omapi_product_category_util__WEBPACK_IMPORTED_MODULE_4__.OmapiProductCategoryUtil.isFixedProduct(this.omapiProducts$);
  }
  saveBusinessIdentityDetails(identityDetails) {
    this.store.dispatch((0,_state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_1__.saveBusinessIdentityDetailsAction)(identityDetails));
  }
  searchCustomer() {
    this.store.dispatch((0,_state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_1__.preformBusinessSearchCustomerAction)());
  }
  resetSearchCustomer() {
    this.store.dispatch((0,_state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_1__.resetSearchCustomerSuccessAction)());
  }
  login() {
    this.store.dispatch((0,_state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_1__.loginAction)());
  }
  getLegalEntityDetails() {
    this.store.dispatch((0,_state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_1__.performLegalEntityAction)());
  }
  getMunicipalities() {
    return this.addressService.getMunicipalities();
  }
  getStreets(postalCode) {
    return this.addressService.getStreets(postalCode);
  }
  loadAddress(address) {
    this.store.dispatch((0,_state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_1__.getAddressAction)({
      payload: address
    }));
  }
  getBoxNumbers(address) {
    this.store.dispatch((0,_state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_1__.getBoxNoAction)({
      address: address
    }));
  }
  getSubHouseNumbers(address) {
    this.store.dispatch((0,_state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_1__.getSubHouseNoAction)({
      address: address
    }));
  }
  saveMatchedAddress(addresses, enteredAddress) {
    const matchedAddress = addresses.filter(address => {
      return address.houseNumber === enteredAddress.houseNumber && address.subHouseNumber === enteredAddress.subHouseNumber && address.boxNumber === enteredAddress.boxNumber && address.addressType === enteredAddress.type;
    });
    const addressStore = {
      addressType: undefined
    };
    if (matchedAddress && matchedAddress[0]) {
      addressStore.addressId = matchedAddress[0].addressId;
      addressStore.tinaLocationId = matchedAddress[0].tinaLocationId;
    }
    addressStore.streetId = addresses[0].streetId;
    addressStore.country = addresses[0].country;
    addressStore.addressType = addresses[0].addressType;
    addressStore.size = addresses.length;
    this.store.dispatch((0,_state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_1__.SetAddressStoreAction)({
      address: addressStore
    }));
  }
  static #_ = this.ɵfac = function BusinessIdentityDetailsFacade_Factory(t) {
    return new (t || BusinessIdentityDetailsFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_infrastructure_address_service__WEBPACK_IMPORTED_MODULE_3__.AddressService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: BusinessIdentityDetailsFacade,
    factory: BusinessIdentityDetailsFacade.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 15817:
/*!*************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/facades/identity-details.facade.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IdentityDetailsFacade: () => (/* binding */ IdentityDetailsFacade)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../+state/customer-registration.selectors */ 12697);
/* harmony import */ var _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../+state/customer-registration.actions */ 57410);
/* harmony import */ var _util_omapi_product_category_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/omapi-product-category.util */ 72518);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);






class IdentityDetailsFacade {
  constructor(store) {
    this.store = store;
    this.brand$ = this.store.select(_state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_1__.selectBrand);
    this.userInput$ = this.store.select(_state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_1__.selectUserInput);
    this.searchCustomerResultExists$ = this.store.select(_state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_1__.selectSearchCustomerResultExists);
    this.error$ = this.store.select(_state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_1__.selectError);
    this.omapiProducts$ = this.store.select(_state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_1__.selectOmapiProduct);
    this.isBelgianIdentitySelected$ = this.store.select(_state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_1__.selectIsBelgianIdentity);
    this.prepaidOmapiProductExists$ = _util_omapi_product_category_util__WEBPACK_IMPORTED_MODULE_3__.OmapiProductCategoryUtil.checkOmapiProductsByCategory(this.omapiProducts$, 'prepaid');
    this.standAloneMobileOmapiProductExists$ = _util_omapi_product_category_util__WEBPACK_IMPORTED_MODULE_3__.OmapiProductCategoryUtil.checkOmapiProductsByCategory(this.omapiProducts$, 'standalone-mobile');
    this.fixedLineProductExists$ = _util_omapi_product_category_util__WEBPACK_IMPORTED_MODULE_3__.OmapiProductCategoryUtil.checkOmapiProductsByLabel(this.omapiProducts$, 'fixed line');
    this.itsMeResponse$ = this.store.select(_state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_1__.selectItsMeResponse);
  }
  saveIdentityDetails(identityDetails) {
    this.store.dispatch((0,_state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.saveIdentityDetailsAction)(identityDetails));
  }
  searchResidentialCustomer() {
    this.store.dispatch((0,_state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.preformResidentialSearchCustomerAction)());
  }
  login() {
    this.store.dispatch((0,_state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.loginAction)());
  }
  static #_ = this.ɵfac = function IdentityDetailsFacade_Factory(t) {
    return new (t || IdentityDetailsFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.Store));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: IdentityDetailsFacade,
    factory: IdentityDetailsFacade.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 30982:
/*!*******************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/facades/index.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressIdentityFacade: () => (/* reexport safe */ _address_identity_facade__WEBPACK_IMPORTED_MODULE_0__.AddressIdentityFacade),
/* harmony export */   AuthorConfigurationFacade: () => (/* reexport safe */ _author_configuration_facade__WEBPACK_IMPORTED_MODULE_1__.AuthorConfigurationFacade),
/* harmony export */   BusinessIdentityDetailsFacade: () => (/* reexport safe */ _business_identity_details_facade__WEBPACK_IMPORTED_MODULE_4__.BusinessIdentityDetailsFacade),
/* harmony export */   IdentityDetailsFacade: () => (/* reexport safe */ _identity_details_facade__WEBPACK_IMPORTED_MODULE_3__.IdentityDetailsFacade),
/* harmony export */   PersonalDetailsFacade: () => (/* reexport safe */ _personal_details_facade__WEBPACK_IMPORTED_MODULE_2__.PersonalDetailsFacade)
/* harmony export */ });
/* harmony import */ var _address_identity_facade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./address-identity.facade */ 6543);
/* harmony import */ var _author_configuration_facade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./author-configuration.facade */ 72582);
/* harmony import */ var _personal_details_facade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./personal-details.facade */ 68856);
/* harmony import */ var _identity_details_facade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./identity-details.facade */ 15817);
/* harmony import */ var _business_identity_details_facade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./business-identity-details.facade */ 21721);






/***/ }),

/***/ 68856:
/*!*************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/facades/personal-details.facade.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PersonalDetailsFacade: () => (/* binding */ PersonalDetailsFacade)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../+state/customer-registration.actions */ 57410);
/* harmony import */ var _state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../+state/customer-registration.selectors */ 12697);
/* harmony import */ var _telenet_ng_lib_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @telenet/ng-lib-layout */ 55606);
/* harmony import */ var _telenet_ng_lib_layout__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_layout__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_5__);









class PersonalDetailsFacade {
  constructor(store, urlService, phoneNumberTransformService) {
    this.store = store;
    this.urlService = urlService;
    this.phoneNumberTransformService = phoneNumberTransformService;
    this.personalDetails$ = this.store.select(_state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_3__.selectPersonalDetails);
    this.brand$ = this.store.select(_state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_3__.selectBrand);
    this.dateOfBirth$ = this.store.select(_state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_3__.selectDOB);
    this.itsMeResponse$ = this.store.select(_state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_3__.selectItsMeResponse);
  }
  savePersonalDetails(personalDetails) {
    this.store.dispatch((0,_state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.savePersonalDetailsAction)(personalDetails));
  }
  getRequestParams() {
    return this.urlService.getRequestParameters();
  }
  formatPhoneNumber(phoneNumber) {
    return this.phoneNumberTransformService.transform(phoneNumber);
  }
  readEncryptedUrlData() {
    const params = this.getRequestParams();
    if (params) {
      this.extractOmapiProducts(params);
      this.checkItsMeParams(params);
    }
  }
  saveDOB(dob) {
    this.store.dispatch((0,_state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.saveIdentityDetailsAction)({
      dateOfBirth: dob,
      placeOfBirth: '',
      nationalRegistrationNumber: ''
    }));
  }
  extractOmapiProducts(params) {
    if (params?.['sdata']) {
      this.store.dispatch((0,_state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.performOmapiProductsExtractionAction)());
    }
  }
  checkItsMeParams(params) {
    if (this.ItsMeParamsPresent(params)) {
      const itsMeParams = {
        code: params['code'],
        state: params['state']
      };
      this.store.dispatch((0,_state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.performItsMeSearchAction)({
        itsMeParams: itsMeParams
      }));
    }
  }
  ItsMeParamsPresent(urlParams) {
    const requiredParams = ['code', 'state'];
    return requiredParams.every(paramKey => paramKey in urlParams);
  }
  static #_ = this.ɵfac = function PersonalDetailsFacade_Factory(t) {
    return new (t || PersonalDetailsFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_telenet_ng_lib_layout__WEBPACK_IMPORTED_MODULE_4__.PhoneNumberTransformService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: PersonalDetailsFacade,
    factory: PersonalDetailsFacade.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 66175:
/*!***********************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/index.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Address: () => (/* reexport safe */ _entities_models_address_model__WEBPACK_IMPORTED_MODULE_29__.Address),
/* harmony export */   AddressConstants: () => (/* reexport safe */ _infrastructure_address_constant__WEBPACK_IMPORTED_MODULE_9__.AddressConstants),
/* harmony export */   AddressFields: () => (/* reexport safe */ _entities_models_address_enum__WEBPACK_IMPORTED_MODULE_30__.AddressFields),
/* harmony export */   AddressForm: () => (/* reexport safe */ _entities_models_address_form_model__WEBPACK_IMPORTED_MODULE_32__.AddressForm),
/* harmony export */   AddressIdentityFacade: () => (/* reexport safe */ _facades__WEBPACK_IMPORTED_MODULE_33__.AddressIdentityFacade),
/* harmony export */   AddressMapper: () => (/* reexport safe */ _util_address_mapper__WEBPACK_IMPORTED_MODULE_34__.AddressMapper),
/* harmony export */   AddressService: () => (/* reexport safe */ _infrastructure_address_service__WEBPACK_IMPORTED_MODULE_8__.AddressService),
/* harmony export */   ApplyMethodEnum: () => (/* reexport safe */ _entities_interfaces_apply_method_enum__WEBPACK_IMPORTED_MODULE_26__.ApplyMethodEnum),
/* harmony export */   AuthorConfigurationFacade: () => (/* reexport safe */ _facades__WEBPACK_IMPORTED_MODULE_33__.AuthorConfigurationFacade),
/* harmony export */   BusinessIdentityDetailsFacade: () => (/* reexport safe */ _facades__WEBPACK_IMPORTED_MODULE_33__.BusinessIdentityDetailsFacade),
/* harmony export */   CreateCustomerService: () => (/* reexport safe */ _infrastructure_create_customer_service__WEBPACK_IMPORTED_MODULE_15__.CreateCustomerService),
/* harmony export */   CustomerCategory: () => (/* reexport safe */ _state_customer_registration_state__WEBPACK_IMPORTED_MODULE_5__.CustomerCategory),
/* harmony export */   CustomerRegistrationEffects: () => (/* reexport safe */ _state_customer_registration_effects__WEBPACK_IMPORTED_MODULE_1__.CustomerRegistrationEffects),
/* harmony export */   CustomerRegistrationNgrxModule: () => (/* reexport safe */ _state_customer_registration_ngrx_module__WEBPACK_IMPORTED_MODULE_0__.CustomerRegistrationNgrxModule),
/* harmony export */   GenericMapper: () => (/* reexport safe */ _infrastructure_generic_mapper__WEBPACK_IMPORTED_MODULE_14__.GenericMapper),
/* harmony export */   IdentityDetailsFacade: () => (/* reexport safe */ _facades__WEBPACK_IMPORTED_MODULE_33__.IdentityDetailsFacade),
/* harmony export */   NavsService: () => (/* reexport safe */ _infrastructure_navs_service__WEBPACK_IMPORTED_MODULE_11__.NavsService),
/* harmony export */   PersonalDetailsFacade: () => (/* reexport safe */ _facades__WEBPACK_IMPORTED_MODULE_33__.PersonalDetailsFacade),
/* harmony export */   ProductTypeEnum: () => (/* reexport safe */ _entities_models_product_type_enum__WEBPACK_IMPORTED_MODULE_31__.ProductTypeEnum),
/* harmony export */   Salutation: () => (/* reexport safe */ _state_customer_registration_state__WEBPACK_IMPORTED_MODULE_5__.Salutation),
/* harmony export */   SearchCustomerService: () => (/* reexport safe */ _infrastructure_search_customer_service__WEBPACK_IMPORTED_MODULE_12__.SearchCustomerService),
/* harmony export */   SetAddressStoreAction: () => (/* reexport safe */ _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.SetAddressStoreAction),
/* harmony export */   addressConfigurationTestFactory: () => (/* reexport safe */ _entities_interfaces_address_request_interface_testfactory__WEBPACK_IMPORTED_MODULE_19__.addressConfigurationTestFactory),
/* harmony export */   createCustomerErrorAction: () => (/* reexport safe */ _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.createCustomerErrorAction),
/* harmony export */   createCustomerSuccessAction: () => (/* reexport safe */ _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.createCustomerSuccessAction),
/* harmony export */   customerRegistrationFactory: () => (/* reexport safe */ _state_customer_registration_state_testfactory__WEBPACK_IMPORTED_MODULE_6__.customerRegistrationFactory),
/* harmony export */   customerRegistrationFeature: () => (/* reexport safe */ _state_customer_registration_reducer__WEBPACK_IMPORTED_MODULE_7__.customerRegistrationFeature),
/* harmony export */   customerRegistrationReducer: () => (/* reexport safe */ _state_customer_registration_reducer__WEBPACK_IMPORTED_MODULE_7__.customerRegistrationReducer),
/* harmony export */   defaultState: () => (/* reexport safe */ _state_customer_registration_state__WEBPACK_IMPORTED_MODULE_5__.defaultState),
/* harmony export */   featureState: () => (/* reexport safe */ _state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_3__.featureState),
/* harmony export */   finalizeFlowAction: () => (/* reexport safe */ _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.finalizeFlowAction),
/* harmony export */   getAddressAction: () => (/* reexport safe */ _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.getAddressAction),
/* harmony export */   getAddressErrorAction: () => (/* reexport safe */ _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.getAddressErrorAction),
/* harmony export */   getAddressSuccessAction: () => (/* reexport safe */ _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.getAddressSuccessAction),
/* harmony export */   getBoxNoAction: () => (/* reexport safe */ _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.getBoxNoAction),
/* harmony export */   getLocationErrorAction: () => (/* reexport safe */ _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.getLocationErrorAction),
/* harmony export */   getLocationsAction: () => (/* reexport safe */ _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.getLocationsAction),
/* harmony export */   getLocationsSuccessAction: () => (/* reexport safe */ _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.getLocationsSuccessAction),
/* harmony export */   getNavsErrorAction: () => (/* reexport safe */ _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.getNavsErrorAction),
/* harmony export */   getSalesOrderRequestDataAction: () => (/* reexport safe */ _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.getSalesOrderRequestDataAction),
/* harmony export */   getStreetsAction: () => (/* reexport safe */ _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.getStreetsAction),
/* harmony export */   getStreetsErrorAction: () => (/* reexport safe */ _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.getStreetsErrorAction),
/* harmony export */   getStreetsSuccessAction: () => (/* reexport safe */ _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.getStreetsSuccessAction),
/* harmony export */   getSubHouseNoAction: () => (/* reexport safe */ _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.getSubHouseNoAction),
/* harmony export */   isPidEnabled: () => (/* reexport safe */ _state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_3__.isPidEnabled),
/* harmony export */   itsMeSearchSuccessAction: () => (/* reexport safe */ _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.itsMeSearchSuccessAction),
/* harmony export */   loginAction: () => (/* reexport safe */ _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.loginAction),
/* harmony export */   loginErrorAction: () => (/* reexport safe */ _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.loginErrorAction),
/* harmony export */   loginSuccessAction: () => (/* reexport safe */ _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.loginSuccessAction),
/* harmony export */   navsSuccessAction: () => (/* reexport safe */ _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.navsSuccessAction),
/* harmony export */   omapiProductExtractionErrorAction: () => (/* reexport safe */ _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.omapiProductExtractionErrorAction),
/* harmony export */   omapiProductExtractionSuccessAction: () => (/* reexport safe */ _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.omapiProductExtractionSuccessAction),
/* harmony export */   performItsMeSearchAction: () => (/* reexport safe */ _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.performItsMeSearchAction),
/* harmony export */   performLegalEntityAction: () => (/* reexport safe */ _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.performLegalEntityAction),
/* harmony export */   performLegalEntityErrorAction: () => (/* reexport safe */ _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.performLegalEntityErrorAction),
/* harmony export */   performLegalEntitySuccessAction: () => (/* reexport safe */ _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.performLegalEntitySuccessAction),
/* harmony export */   performOmapiProductsExtractionAction: () => (/* reexport safe */ _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.performOmapiProductsExtractionAction),
/* harmony export */   performResidentialNavsCheckAction: () => (/* reexport safe */ _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.performResidentialNavsCheckAction),
/* harmony export */   preformBusinessSearchCustomerAction: () => (/* reexport safe */ _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.preformBusinessSearchCustomerAction),
/* harmony export */   preformResidentialSearchCustomerAction: () => (/* reexport safe */ _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.preformResidentialSearchCustomerAction),
/* harmony export */   reducer: () => (/* reexport safe */ _state_customer_registration_reducer__WEBPACK_IMPORTED_MODULE_7__.reducer),
/* harmony export */   resetError: () => (/* reexport safe */ _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.resetError),
/* harmony export */   resetSearchCustomerSuccessAction: () => (/* reexport safe */ _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.resetSearchCustomerSuccessAction),
/* harmony export */   saveBusinessIdentityDetailsAction: () => (/* reexport safe */ _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.saveBusinessIdentityDetailsAction),
/* harmony export */   saveIdentityDetailsAction: () => (/* reexport safe */ _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.saveIdentityDetailsAction),
/* harmony export */   savePersonalDetailsAction: () => (/* reexport safe */ _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.savePersonalDetailsAction),
/* harmony export */   searchCustomerErrorAction: () => (/* reexport safe */ _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.searchCustomerErrorAction),
/* harmony export */   searchCustomerSuccessAction: () => (/* reexport safe */ _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.searchCustomerSuccessAction),
/* harmony export */   searchItsMeCustomerErrorAction: () => (/* reexport safe */ _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.searchItsMeCustomerErrorAction),
/* harmony export */   selectAddressByType: () => (/* reexport safe */ _state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_3__.selectAddressByType),
/* harmony export */   selectAddressData: () => (/* reexport safe */ _state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_3__.selectAddressData),
/* harmony export */   selectAddressStore: () => (/* reexport safe */ _state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_3__.selectAddressStore),
/* harmony export */   selectBoxNumbers: () => (/* reexport safe */ _state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_3__.selectBoxNumbers),
/* harmony export */   selectBrand: () => (/* reexport safe */ _state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_3__.selectBrand),
/* harmony export */   selectBusinessIdentityDetails: () => (/* reexport safe */ _state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_3__.selectBusinessIdentityDetails),
/* harmony export */   selectCategory: () => (/* reexport safe */ _state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_3__.selectCategory),
/* harmony export */   selectDOB: () => (/* reexport safe */ _state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_3__.selectDOB),
/* harmony export */   selectError: () => (/* reexport safe */ _state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_3__.selectError),
/* harmony export */   selectIsBelgianIdentity: () => (/* reexport safe */ _state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_3__.selectIsBelgianIdentity),
/* harmony export */   selectIsPIDEnabledForBusiness: () => (/* reexport safe */ _state_customer_registration_factory_selectors__WEBPACK_IMPORTED_MODULE_4__.selectIsPIDEnabledForBusiness),
/* harmony export */   selectItsMeParams: () => (/* reexport safe */ _state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_3__.selectItsMeParams),
/* harmony export */   selectItsMeResponse: () => (/* reexport safe */ _state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_3__.selectItsMeResponse),
/* harmony export */   selectLegalEntityDetails: () => (/* reexport safe */ _state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_3__.selectLegalEntityDetails),
/* harmony export */   selectLocations: () => (/* reexport safe */ _state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_3__.selectLocations),
/* harmony export */   selectMarketingUrl: () => (/* reexport safe */ _state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_3__.selectMarketingUrl),
/* harmony export */   selectNavsCheckResult: () => (/* reexport safe */ _state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_3__.selectNavsCheckResult),
/* harmony export */   selectOmapiProduct: () => (/* reexport safe */ _state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_3__.selectOmapiProduct),
/* harmony export */   selectPersonalDetails: () => (/* reexport safe */ _state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_3__.selectPersonalDetails),
/* harmony export */   selectPrivacyPolicyUrl: () => (/* reexport safe */ _state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_3__.selectPrivacyPolicyUrl),
/* harmony export */   selectSalesOrder: () => (/* reexport safe */ _state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_3__.selectSalesOrder),
/* harmony export */   selectSearchCustomerResultExists: () => (/* reexport safe */ _state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_3__.selectSearchCustomerResultExists),
/* harmony export */   selectSearchCustomerResultType: () => (/* reexport safe */ _state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_3__.selectSearchCustomerResultType),
/* harmony export */   selectStreets: () => (/* reexport safe */ _state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_3__.selectStreets),
/* harmony export */   selectSubHouseNumbers: () => (/* reexport safe */ _state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_3__.selectSubHouseNumbers),
/* harmony export */   selectUserInput: () => (/* reexport safe */ _state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_3__.selectUserInput),
/* harmony export */   setAuthorConfigurationAction: () => (/* reexport safe */ _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.setAuthorConfigurationAction),
/* harmony export */   setBrand: () => (/* reexport safe */ _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.setBrand),
/* harmony export */   setCategory: () => (/* reexport safe */ _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.setCategory),
/* harmony export */   setProductDetailsAction: () => (/* reexport safe */ _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__.setProductDetailsAction)
/* harmony export */ });
/* harmony import */ var _state_customer_registration_ngrx_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./+state/customer-registration-ngrx.module */ 80858);
/* harmony import */ var _state_customer_registration_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./+state/customer-registration.effects */ 93410);
/* harmony import */ var _state_customer_registration_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./+state/customer-registration.actions */ 57410);
/* harmony import */ var _state_customer_registration_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./+state/customer-registration.selectors */ 12697);
/* harmony import */ var _state_customer_registration_factory_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./+state/customer-registration.factory.selectors */ 53484);
/* harmony import */ var _state_customer_registration_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./+state/customer-registration.state */ 99836);
/* harmony import */ var _state_customer_registration_state_testfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./+state/customer-registration.state.testfactory */ 91589);
/* harmony import */ var _state_customer_registration_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./+state/customer-registration.reducer */ 45119);
/* harmony import */ var _infrastructure_address_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./infrastructure/address.service */ 72826);
/* harmony import */ var _infrastructure_address_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./infrastructure/address.constant */ 16478);
/* harmony import */ var _infrastructure_navs_interface__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./infrastructure/navs.interface */ 17483);
/* harmony import */ var _infrastructure_navs_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./infrastructure/navs.service */ 56632);
/* harmony import */ var _infrastructure_search_customer_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./infrastructure/search-customer.service */ 85574);
/* harmony import */ var _infrastructure_searchCustomer_interface__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./infrastructure/searchCustomer.interface */ 46332);
/* harmony import */ var _infrastructure_generic_mapper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./infrastructure/generic.mapper */ 8663);
/* harmony import */ var _infrastructure_create_customer_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./infrastructure/create-customer.service */ 89626);
/* harmony import */ var _infrastructure_its_me_interface__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./infrastructure/its-me.interface */ 84922);
/* harmony import */ var _entities_interfaces_address_store_interface__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./entities/interfaces/address-store.interface */ 70205);
/* harmony import */ var _entities_interfaces_address_request_interface__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./entities/interfaces/address-request.interface */ 14273);
/* harmony import */ var _entities_interfaces_address_request_interface_testfactory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./entities/interfaces/address-request.interface.testfactory */ 60137);
/* harmony import */ var _entities_interfaces_raw_address_interface__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./entities/interfaces/raw-address.interface */ 74643);
/* harmony import */ var _entities_interfaces_display_address_interface__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./entities/interfaces/display-address.interface */ 69020);
/* harmony import */ var _entities_interfaces_legal_option_interface__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./entities/interfaces/legal-option.interface */ 24253);
/* harmony import */ var _entities_interfaces_legal_entity_interface__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./entities/interfaces/legal-entity.interface */ 45834);
/* harmony import */ var _entities_interfaces_business_identity_interface__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./entities/interfaces/business-identity.interface */ 58451);
/* harmony import */ var _entities_interfaces_raw_sales_order_request_interface__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./entities/interfaces/raw-sales-order-request.interface */ 56963);
/* harmony import */ var _entities_interfaces_apply_method_enum__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./entities/interfaces/apply-method.enum */ 98971);
/* harmony import */ var _entities_interfaces_create_customer_request_interface__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./entities/interfaces/create-customer-request.interface */ 46451);
/* harmony import */ var _entities_interfaces_municipality_interface__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./entities/interfaces/municipality.interface */ 56910);
/* harmony import */ var _entities_models_address_model__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./entities/models/address.model */ 89345);
/* harmony import */ var _entities_models_address_enum__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./entities/models/address.enum */ 25722);
/* harmony import */ var _entities_models_product_type_enum__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./entities/models/product-type.enum */ 24617);
/* harmony import */ var _entities_models_address_form_model__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./entities/models/address-form.model */ 74799);
/* harmony import */ var _facades__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./facades */ 30982);
/* harmony import */ var _util_address_mapper__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./util/address.mapper */ 82337);




































/***/ }),

/***/ 16478:
/*!*************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/infrastructure/address.constant.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressConstants: () => (/* binding */ AddressConstants)
/* harmony export */ });
class AddressConstants {
  static #_ = this.EMPTY = '';
  static #_2 = this.CONTACT_SERVICE_PREFIX = '/public/api/contact-service/';
  static #_3 = this.API_VERSION_V1 = 'v1';
  static #_4 = this.CONTEXT_CONTACT = '/contact';
  static #_5 = this.LOCATION_URL_PREFIX = '/telenet/data/municipalities?language=';
  static #_6 = this.STREET_URL_PREFIX = '/telenet/data/streets?postalCode=';
  static #_7 = this.ADDRESS_MESSSAGE_GROUP = 'address-message';
  static #_8 = this.OCAPI_ERROR_ADDRESS_NOT_FOUND = 'OCAPI-ERR-ODCT101';
}

/***/ }),

/***/ 72826:
/*!************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/infrastructure/address.service.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressService: () => (/* binding */ AddressService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1261);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @telenet/ng-lib-message */ 65145);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @telenet/ng-lib-ocapi */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _util_address_mapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/address.mapper */ 82337);
/* harmony import */ var _address_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./address.constant */ 16478);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_8__);














class AddressService {
  constructor(ocapiService, addressMapper, httpClient, languageService, cacheService, messageService) {
    this.ocapiService = ocapiService;
    this.addressMapper = addressMapper;
    this.httpClient = httpClient;
    this.languageService = languageService;
    this.cacheService = cacheService;
    this.messageService = messageService;
    this.selectedAddress = [];
  }
  getMunicipalities() {
    const url = _address_constant__WEBPACK_IMPORTED_MODULE_7__.AddressConstants.LOCATION_URL_PREFIX.concat(this.getLanguage());
    return this.httpClient.get(url);
  }
  getStreets(postalCode) {
    const url = _address_constant__WEBPACK_IMPORTED_MODULE_7__.AddressConstants.STREET_URL_PREFIX.concat(postalCode);
    return this.httpClient.get(url);
  }
  getAddressByData(messageGroup, data) {
    const endpoint = this.getEndPoint(data);
    const ocapiCallConfig = new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_2__.OcapiCallConfig(messageGroup, endpoint, this.addressMapper, undefined, data.customHeaders);
    ocapiCallConfig.errorHandler = this.handleErrorForAddressByData.bind(this);
    return this.ocapiService.doGet(ocapiCallConfig).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(addresses => {
      this.selectedAddress = addresses;
      return addresses;
    }));
  }
  getAddressById(messageGroup, addressId) {
    let endpoint = `/addresses/${addressId}`;
    endpoint = this.getServiceURI(endpoint);
    if (!this.cacheService.get(endpoint)) {
      this.cacheService.add(endpoint, this.ocapiService.doGet(new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_2__.OcapiCallConfig(messageGroup, endpoint, this.addressMapper)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(addresses => addresses)));
    }
    return this.cacheService.get(endpoint);
  }
  handleErrorForAddressByData(error, ocapiCall) {
    const errorCode = 'ocapi.'.concat(error.status.toString());
    switch (error.status) {
      case 401:
        break;
      case 400:
        {
          const errorMessage = error?.error?.code === _address_constant__WEBPACK_IMPORTED_MODULE_7__.AddressConstants.OCAPI_ERROR_ADDRESS_NOT_FOUND ? `${ocapiCall.messageGroupName}.${_address_constant__WEBPACK_IMPORTED_MODULE_7__.AddressConstants.OCAPI_ERROR_ADDRESS_NOT_FOUND}` : errorCode;
          this.messageService.addMessage(new _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_1__.ErrorMessage(ocapiCall.messageGroupName, errorMessage));
          break;
        }
      case 500:
        this.messageService.addMessage(new _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_1__.ErrorMessage(ocapiCall.messageGroupName, errorCode));
        break;
      default:
        break;
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => 'An error occured while trying to fetch ' + ocapiCall.messageGroupName + ' | ' + errorCode);
  }
  getEndPoint(data) {
    let endpoint = '/addresses'.concat(`?postalCode=${data.postalCode}`).concat(`&municipality=${data.municipality}`).concat(`&street=${data.street}`).concat(`&houseNumber=${data.houseNumber}`);
    if (data.subHouseNumber) {
      endpoint = endpoint.concat(`&subHouseNumber=${data.subHouseNumber}`);
    }
    if (data.boxNumber) {
      endpoint = endpoint.concat(`&boxNumber=${data.boxNumber}`);
    }
    if (data.exactAddressSearch) {
      endpoint = endpoint.concat('&exactAddressSearch=true');
    }
    if (data.fields) {
      endpoint = endpoint.concat(`&fields=${data.fields}`);
    }
    return this.getServiceURI(endpoint);
  }
  getLanguage() {
    let language = this.languageService.getLanguage();
    if (language === _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__.LanguageEnum.EN) {
      language = _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__.LanguageEnum.NL;
    }
    return language;
  }
  getServiceURI(endpoint) {
    return _address_constant__WEBPACK_IMPORTED_MODULE_7__.AddressConstants.CONTACT_SERVICE_PREFIX.concat(_address_constant__WEBPACK_IMPORTED_MODULE_7__.AddressConstants.API_VERSION_V1).concat(_address_constant__WEBPACK_IMPORTED_MODULE_7__.AddressConstants.CONTEXT_CONTACT).concat(endpoint);
  }
  static #_ = this.ɵfac = function AddressService_Factory(t) {
    return new (t || AddressService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_2__.OcapiService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_util_address_mapper__WEBPACK_IMPORTED_MODULE_6__.AddressMapper), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__.CacheService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_1__.MessageService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
    token: AddressService,
    factory: AddressService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 89626:
/*!********************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/infrastructure/create-customer.service.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateCustomerService: () => (/* binding */ CreateCustomerService)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-ocapi */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _generic_mapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generic.mapper */ 8663);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




class CreateCustomerService {
  constructor(ocapiService) {
    this.ocapiService = ocapiService;
    this.endpoint = '/public/api/customer-service/v1/customers?distributionchannel=sales&skipNavsCheck=true';
  }
  createCustomer(userInput) {
    const request = new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiCallConfig('customer-registration', this.endpoint, new _generic_mapper__WEBPACK_IMPORTED_MODULE_1__.GenericMapper(), userInput);
    return this.ocapiService.doPost(request);
  }
  static #_ = this.ɵfac = function CreateCustomerService_Factory(t) {
    return new (t || CreateCustomerService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: CreateCustomerService,
    factory: CreateCustomerService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 67234:
/*!**************************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/infrastructure/extract-omapi-product.service.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExtractOmapiProductService: () => (/* binding */ ExtractOmapiProductService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _url_retrieval_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./url-retrieval-service */ 11775);
/* harmony import */ var _util_offer_id_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/offer-id.util */ 54568);
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product.service */ 89117);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_5__);








class ExtractOmapiProductService {
  constructor(urlRetrievalService, productService) {
    this.urlRetrievalService = urlRetrievalService;
    this.productService = productService;
  }
  extractOmapiProduct() {
    return this.urlRetrievalService.getOffersFromUrl('sdata').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(offers => _util_offer_id_util__WEBPACK_IMPORTED_MODULE_3__.OfferIdUtil.extractOfferIds(offers)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.mergeMap)(offerIds => (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.concat)(...this.productService.getOmapiProducts(offerIds))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.toArray)());
  }
  static #_ = this.ɵfac = function ExtractOmapiProductService_Factory(t) {
    return new (t || ExtractOmapiProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_url_retrieval_service__WEBPACK_IMPORTED_MODULE_2__.UrlRetrievalService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_product_service__WEBPACK_IMPORTED_MODULE_4__.ProductService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: ExtractOmapiProductService,
    factory: ExtractOmapiProductService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8663:
/*!***********************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/infrastructure/generic.mapper.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GenericMapper: () => (/* binding */ GenericMapper)
/* harmony export */ });
class GenericMapper {
  toModel(data, httpStatus) {
    if (httpStatus && httpStatus > 400) {
      throw new Error();
    }
    return data;
  }
}

/***/ }),

/***/ 84922:
/*!*************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/infrastructure/its-me.interface.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 95304:
/*!***********************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/infrastructure/its-me.service.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItsMeService: () => (/* binding */ ItsMeService)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-ocapi */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _generic_mapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generic.mapper */ 8663);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




class ItsMeService {
  constructor(ocapiService) {
    this.ocapiService = ocapiService;
  }
  getItsMeCustomer(itsMeParams) {
    const endpoint = `/itsme/userinfo?code=${itsMeParams.code}&state=${itsMeParams.state}`;
    return this.ocapiService.doGet(new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiCallConfig('', endpoint, new _generic_mapper__WEBPACK_IMPORTED_MODULE_1__.GenericMapper()));
  }
  static #_ = this.ɵfac = function ItsMeService_Factory(t) {
    return new (t || ItsMeService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ItsMeService,
    factory: ItsMeService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 27157:
/*!****************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/infrastructure/legal-entity.mapper.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LegalEntityMapper: () => (/* binding */ LegalEntityMapper)
/* harmony export */ });
class LegalEntityMapper {
  toModel(data, httpStatus) {
    if (httpStatus && httpStatus > 400) {
      throw new Error();
    }
    return data;
  }
}

/***/ }),

/***/ 62773:
/*!*****************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/infrastructure/legal-entity.service.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LegalEntityService: () => (/* binding */ LegalEntityService)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-ocapi */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _legal_entity_mapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legal-entity.mapper */ 27157);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);







class LegalEntityService {
  constructor(ocapiService, languageService) {
    this.ocapiService = ocapiService;
    this.languageService = languageService;
  }
  getLegalEntityData(messageGroup) {
    const languageCode = this.languageService.getLanguage();
    const suffix = `?languageCode=${languageCode}`;
    const url = '/public/api/catalog-service/v1/common/data' + suffix + '&property=legalForm&domain=BusinessCustomerAccount';
    return this.ocapiService.doGet(new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiCallConfig(messageGroup, url, new _legal_entity_mapper__WEBPACK_IMPORTED_MODULE_1__.LegalEntityMapper())).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => {
      return response;
    }));
  }
  static #_ = this.ɵfac = function LegalEntityService_Factory(t) {
    return new (t || LegalEntityService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__.LanguageService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: LegalEntityService,
    factory: LegalEntityService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 17483:
/*!***********************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/infrastructure/navs.interface.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 56173:
/*!********************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/infrastructure/navs.mapper.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavsMapper: () => (/* binding */ NavsMapper)
/* harmony export */ });
class NavsMapper {
  toModel(data, httpStatus) {
    if (httpStatus && httpStatus > 400) {
      throw new Error();
    }
    return data;
  }
}

/***/ }),

/***/ 56632:
/*!*********************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/infrastructure/navs.service.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavsService: () => (/* binding */ NavsService)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-ocapi */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _navs_mapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navs.mapper */ 56173);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);





class NavsService {
  constructor(ocapiService) {
    this.ocapiService = ocapiService;
    this.url = '/public/api/customer-service/v1/customers/navs';
  }
  getResidentialNavs(body) {
    return this.ocapiService.doPost(new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiCallConfig('', this.url, new _navs_mapper__WEBPACK_IMPORTED_MODULE_2__.NavsMapper(), body)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response));
  }
  static #_ = this.ɵfac = function NavsService_Factory(t) {
    return new (t || NavsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: NavsService,
    factory: NavsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 89117:
/*!************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/infrastructure/product.service.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductService: () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-omapi */ 64512);
/* harmony import */ var _telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




class ProductService {
  constructor(omapiProductService) {
    this.omapiProductService = omapiProductService;
  }
  getOmapiProducts(offerIds) {
    if (offerIds.length === 0) {
      return [(0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)()];
    }
    return offerIds.map(id => this.omapiProductService.getProductById('customer-registration', id));
  }
  static #_ = this.ɵfac = function ProductService_Factory(t) {
    return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_0__.OmapiProductService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ProductService,
    factory: ProductService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 88820:
/*!*******************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/infrastructure/search-customer.mapper.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchCustomerMapper: () => (/* binding */ SearchCustomerMapper)
/* harmony export */ });
class SearchCustomerMapper {
  toModel(data, httpStatus) {
    if (httpStatus && httpStatus > 400) {
      throw new Error();
    }
    return data;
  }
}

/***/ }),

/***/ 85574:
/*!********************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/infrastructure/search-customer.service.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchCustomerService: () => (/* binding */ SearchCustomerService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @telenet/ng-lib-ocapi */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _search_customer_mapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-customer.mapper */ 88820);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);





class SearchCustomerService {
  constructor(ocapiService) {
    this.ocapiService = ocapiService;
  }
  searchCustomer(customer) {
    const url = `/public/api/customer-service/v1/customers/brands/telenet/search?distributionchannel=sales`;
    const ocapiCallConfig = new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_1__.OcapiCallConfig('', url, new _search_customer_mapper__WEBPACK_IMPORTED_MODULE_2__.SearchCustomerMapper(), customer);
    ocapiCallConfig.errorHandler = this.handleError.bind(this);
    return this.ocapiService.doPost(ocapiCallConfig);
  }
  handleError(error) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.throwError)(() => error);
  }
  static #_ = this.ɵfac = function SearchCustomerService_Factory(t) {
    return new (t || SearchCustomerService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_1__.OcapiService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: SearchCustomerService,
    factory: SearchCustomerService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 46332:
/*!*********************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/infrastructure/searchCustomer.interface.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 11775:
/*!******************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/infrastructure/url-retrieval-service.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UrlRetrievalService: () => (/* binding */ UrlRetrievalService)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);





class UrlRetrievalService {
  constructor(urlService, jsonUrlService) {
    this.urlService = urlService;
    this.jsonUrlService = jsonUrlService;
  }
  getOffersFromUrl(paramKey) {
    const encodedString = this.urlService.getRequestParamValue(paramKey, '');
    if (!encodedString) return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => new Error(`No ${paramKey} parameter in URL.`));
    return this.decompressData(encodedString);
  }
  decompressData(encodedString) {
    return this.jsonUrlService.decompress(encodedString).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => response?.['offers'] ?? []), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => new Error(`Error decompressing data: ${error.message}`))));
  }
  static #_ = this.ɵfac = function UrlRetrievalService_Factory(t) {
    return new (t || UrlRetrievalService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0__.JsonUrlService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: UrlRetrievalService,
    factory: UrlRetrievalService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 82337:
/*!*************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/util/address.mapper.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressMapper: () => (/* binding */ AddressMapper)
/* harmony export */ });
/* harmony import */ var _entities_models_address_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities/models/address.model */ 89345);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);


class AddressMapper {
  toModel(rawAddresses) {
    return this.createContactAddresses(rawAddresses);
  }
  createContactAddresses(rawAddresses) {
    let address;
    if (rawAddresses instanceof Array) {
      address = rawAddresses;
    } else if (rawAddresses.address instanceof Array) {
      return this.createContactAddressesForObject(rawAddresses);
    } else {
      address = [rawAddresses];
    }
    return address.map(rawAddress => this.createContactAddress(rawAddress));
  }
  createContactAddress(rawAddress) {
    const address = new _entities_models_address_model__WEBPACK_IMPORTED_MODULE_0__.Address();
    address.street = rawAddress.street;
    address.streetId = rawAddress.streetId ?? '';
    address.country = rawAddress.country;
    address.municipality = rawAddress.municipality;
    address.type = rawAddress.type || rawAddress.addresstype || '';
    address.houseNumber = rawAddress.houseNumber || rawAddress.housenr || '';
    address.postalCode = rawAddress.postalCode || rawAddress.postalcode || '';
    address.countryCode = rawAddress.countryCode || rawAddress.countrycode;
    address.addressType = rawAddress.addresstype || '';
    this.setAdditionalDetails(address, rawAddress);
    return address;
  }
  createContactAddressesForObject(rawAddresses) {
    const address = rawAddresses.address && rawAddresses.address.length > 0 ? rawAddresses.address : [rawAddresses];
    return address.map(rawAddress => this.createContactAddressForObject(rawAddress, rawAddresses));
  }
  createContactAddressForObject(rawChildAddress, rawParentAddress) {
    const address = new _entities_models_address_model__WEBPACK_IMPORTED_MODULE_0__.Address();
    address.street = rawParentAddress.street;
    address.streetId = rawParentAddress.streetId ?? '';
    address.country = rawParentAddress.country;
    address.type = rawParentAddress.type || rawParentAddress.addresstype || '';
    address.municipality = rawParentAddress.municipality;
    address.houseNumber = rawParentAddress.houseNumber || rawParentAddress.housenr || '';
    address.postalCode = rawParentAddress.postalCode || rawParentAddress.postalcode || '';
    address.countryCode = rawParentAddress.countryCode || rawParentAddress.countrycode;
    address.addressType = rawParentAddress.addresstype || '';
    this.setAdditionalDetails(address, rawChildAddress);
    return address;
  }
  setAdditionalDetails(address, rawChildAddress) {
    address.addressId = rawChildAddress.id || rawChildAddress.addressid || '';
    address.boxNumber = rawChildAddress.boxNumber || rawChildAddress.boxnr || '';
    address.floorNumber = rawChildAddress.floorNumber || rawChildAddress.floor;
    address.subHouseNumber = rawChildAddress.subHouseNumber || rawChildAddress.subhousenr || '';
    address.tinaLocationId = rawChildAddress.tinaLocationId;
    return address;
  }
  static #_ = this.ɵfac = function AddressMapper_Factory(t) {
    return new (t || AddressMapper)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AddressMapper,
    factory: AddressMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 81820:
/*!*********************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/util/its-me-formatting.util.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItsMeFormattingUtil: () => (/* binding */ ItsMeFormattingUtil)
/* harmony export */ });
class ItsMeFormattingUtil {
  static formatItsMeResponse(itsMeResponse) {
    itsMeResponse.cardIDNumber = this.transformBelgianEID(itsMeResponse.cardIDNumber);
    itsMeResponse.rrn = this.transformNRN(itsMeResponse.rrn);
    itsMeResponse.firstName = this.formatFirstLetterCapital(itsMeResponse.firstName);
    itsMeResponse.lastName = this.formatFirstLetterCapital(itsMeResponse.lastName);
    itsMeResponse.birthLocation = this.formatFirstLetterCapital(itsMeResponse.birthLocation);
    if (itsMeResponse.customerAddress?.street) itsMeResponse.customerAddress.street = itsMeResponse.customerAddress.street.replace(/\([^()]*\)/g, '');
    return itsMeResponse;
  }
  static transformBelgianEID(input) {
    if (input.length !== 12 || !/^[a-zA-Z0-9]{3}\d{7}\d{2}$/.test(input)) {
      throw new Error('Its me eid response is not valid.');
    }
    const part1 = input.slice(0, 3);
    const part2 = input.slice(3, 10);
    const checksum = input.slice(10, 12);
    return `${part1}-${part2}-${checksum}`;
  }
  static transformNRN(input) {
    if (input.length !== 11 || !/^\d{2}\d{2}\d{2}\d{3}\d{2}$/.test(input)) {
      throw new Error('Its me nrn response is not valid.');
    }
    const yy = input.slice(0, 2);
    const mm = input.slice(2, 4);
    const dd = input.slice(4, 6);
    const seq = input.slice(6, 9);
    const checksum = input.slice(9, 11);
    return `${yy}.${mm}.${dd}-${seq}.${checksum}`;
  }
  static formatFirstLetterCapital(input) {
    const parts = input.toLowerCase().split(/[- ]/);
    const capitalizedParts = parts.map(part => part.charAt(0).toUpperCase() + part.slice(1));
    const delimiter = input.includes('-') ? '-' : ' ';
    return capitalizedParts.join(delimiter);
  }
}

/***/ }),

/***/ 60758:
/*!**************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/util/navs-check.util.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavsCheckUtil: () => (/* binding */ NavsCheckUtil)
/* harmony export */ });
class NavsCheckUtil {
  static isScoreHighEnough(navsResult) {
    return parseInt(navsResult.navsScore) > 75;
  }
  static fixedProductScoreCalculation(navsResult, score) {
    if (score) {
      return true;
    }
    if (parseInt(navsResult.navsScore) === 10) {
      return true;
    }
    return this.isScoreHighEnough(navsResult);
  }
  static standaloneMobileScoreCalculation(navsResult, prepaid) {
    if (parseInt(navsResult.navsScore) < 10) {
      return false;
    }
    if (prepaid) {
      return parseInt(navsResult.navsScore) > 78;
    }
    return this.isScoreHighEnough(navsResult);
  }
  static getFormattedDOB(dob) {
    if (!dob) {
      return '';
    }
    const padWithZero = num => num < 10 ? `0${num}` : num.toString();
    const day = dob.getDate();
    const month = dob.getMonth() + 1;
    const year = dob.getFullYear();
    return `${padWithZero(day)}/${padWithZero(month)}/${year}`;
  }
}

/***/ }),

/***/ 54568:
/*!************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/util/offer-id.util.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OfferIdUtil: () => (/* binding */ OfferIdUtil)
/* harmony export */ });
class OfferIdUtil {
  static extractOfferIds(offers) {
    return offers.reduce((ids, offer) => {
      if (offer.id) ids.push(offer.id);
      if (offer.offers) ids.push(...this.extractOfferIds(offer.offers));
      return ids;
    }, []);
  }
}

/***/ }),

/***/ 72518:
/*!**************************************************************************************************!*\
  !*** ./libs/sales/customer-registration/data-access/src/lib/util/omapi-product-category.util.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OmapiProductCategoryUtil: () => (/* binding */ OmapiProductCategoryUtil)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__);

class OmapiProductCategoryUtil {
  static checkOmapiProductsByCategory(omapiProducts$, categoryToCheck) {
    return omapiProducts$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(products => products.some(product => product.categories?.some(category => category.toLowerCase().includes(categoryToCheck.trim().toLowerCase())))));
  }
  static checkOmapiProductsByLabel(omapiProducts$, labelToCheck) {
    return omapiProducts$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(products => products.some(product => product.labelKey?.toLowerCase().includes(labelToCheck.trim().toLowerCase()))));
  }
  static isFixedProduct(omapiProducts$) {
    return omapiProducts$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(products => products.some(product => product.requiresInstallation)));
  }
}

/***/ })

}])
//# sourceMappingURL=default-libs_sales_customer-registration_data-access_src_index_ts.js.map