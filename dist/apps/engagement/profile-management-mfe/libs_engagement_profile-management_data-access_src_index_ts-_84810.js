(self["webpackChunkprofile_management_mfe"] = self["webpackChunkprofile_management_mfe"] || []).push([["libs_engagement_profile-management_data-access_src_index_ts-_84810"],{

/***/ 66098:
/*!*********************************************************************!*\
  !*** ./libs/engagement/profile-management/data-access/src/index.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthenticatorsMapper: () => (/* reexport safe */ _lib_mappers_authenticators_mapper__WEBPACK_IMPORTED_MODULE_8__.AuthenticatorsMapper),
/* harmony export */   CustomerProfileFacade: () => (/* reexport safe */ _lib_facade_customer_profile_facade__WEBPACK_IMPORTED_MODULE_1__.CustomerProfileFacade),
/* harmony export */   CustomerProfileNgrxModule: () => (/* reexport safe */ _lib_state_customer_profile_ngrx_module__WEBPACK_IMPORTED_MODULE_0__.CustomerProfileNgrxModule),
/* harmony export */   CustomerProfileService: () => (/* reexport safe */ _lib_infrastructure_customer_profile_service__WEBPACK_IMPORTED_MODULE_2__.CustomerProfileService),
/* harmony export */   Factors: () => (/* reexport safe */ _lib_enums_factors_enums__WEBPACK_IMPORTED_MODULE_10__.Factors),
/* harmony export */   ManageSocialLoginConstants: () => (/* reexport safe */ _lib_constants_manage_social_login_constant__WEBPACK_IMPORTED_MODULE_9__.ManageSocialLoginConstants),
/* harmony export */   ProfileDetails: () => (/* reexport safe */ _lib_models_profile_details_model__WEBPACK_IMPORTED_MODULE_4__.ProfileDetails),
/* harmony export */   ProfileDetailsMapper: () => (/* reexport safe */ _lib_mappers_profile_details_mapper__WEBPACK_IMPORTED_MODULE_6__.ProfileDetailsMapper),
/* harmony export */   ProfileOverview: () => (/* reexport safe */ _lib_models_profile_overview_model__WEBPACK_IMPORTED_MODULE_5__.ProfileOverview),
/* harmony export */   SocialLoginsMapper: () => (/* reexport safe */ _lib_mappers_social_logins_mapper__WEBPACK_IMPORTED_MODULE_7__.SocialLoginsMapper),
/* harmony export */   selectProfileDetails: () => (/* reexport safe */ _lib_state_customer_profile_selectors__WEBPACK_IMPORTED_MODULE_3__.selectProfileDetails)
/* harmony export */ });
/* harmony import */ var _lib_state_customer_profile_ngrx_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/+state/customer-profile-ngrx.module */ 86023);
/* harmony import */ var _lib_facade_customer_profile_facade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/facade/customer-profile.facade */ 7045);
/* harmony import */ var _lib_infrastructure_customer_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/infrastructure/customer-profile.service */ 59126);
/* harmony import */ var _lib_state_customer_profile_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/+state/customer-profile.selectors */ 81727);
/* harmony import */ var _lib_models_profile_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/models/profile-details.model */ 94300);
/* harmony import */ var _lib_models_profile_overview_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/models/profile.overview.model */ 11062);
/* harmony import */ var _lib_mappers_profile_details_mapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/mappers/profile-details.mapper */ 97576);
/* harmony import */ var _lib_mappers_social_logins_mapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/mappers/social-logins.mapper */ 11491);
/* harmony import */ var _lib_mappers_authenticators_mapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/mappers/authenticators.mapper */ 26447);
/* harmony import */ var _lib_constants_manage_social_login_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/constants/manage-social-login.constant */ 48048);
/* harmony import */ var _lib_enums_factors_enums__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/enums/factors.enums */ 28655);












/***/ }),

/***/ 86023:
/*!*******************************************************************************************************!*\
  !*** ./libs/engagement/profile-management/data-access/src/lib/+state/customer-profile-ngrx.module.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerProfileNgrxModule: () => (/* binding */ CustomerProfileNgrxModule)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ 12506);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _customer_profile_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-profile.effects */ 44575);
/* harmony import */ var _customer_profile_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-profile.reducer */ 93669);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);







class CustomerProfileNgrxModule {
  static #_ = this.ɵfac = function CustomerProfileNgrxModule_Factory(t) {
    return new (t || CustomerProfileNgrxModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: CustomerProfileNgrxModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.EffectsModule.forFeature([_customer_profile_effects__WEBPACK_IMPORTED_MODULE_2__.CustomerProfileEffects]), _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.StoreModule.forFeature(_customer_profile_reducer__WEBPACK_IMPORTED_MODULE_3__.customerProfileFeature)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CustomerProfileNgrxModule, {
    imports: [_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.EffectsFeatureModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.StoreFeatureModule]
  });
})();

/***/ }),

/***/ 88423:
/*!***************************************************************************************************!*\
  !*** ./libs/engagement/profile-management/data-access/src/lib/+state/customer-profile.actions.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAuthenticators: () => (/* binding */ getAuthenticators),
/* harmony export */   getAuthenticatorsErrorAction: () => (/* binding */ getAuthenticatorsErrorAction),
/* harmony export */   getAuthenticatorsSuccessAction: () => (/* binding */ getAuthenticatorsSuccessAction),
/* harmony export */   getProfileDetails: () => (/* binding */ getProfileDetails),
/* harmony export */   getProfileDetailsErrorAction: () => (/* binding */ getProfileDetailsErrorAction),
/* harmony export */   getProfileDetailsSuccessAction: () => (/* binding */ getProfileDetailsSuccessAction),
/* harmony export */   getProfileOverview: () => (/* binding */ getProfileOverview),
/* harmony export */   getProfileOverviewErrorAction: () => (/* binding */ getProfileOverviewErrorAction),
/* harmony export */   getProfileOverviewSuccessAction: () => (/* binding */ getProfileOverviewSuccessAction),
/* harmony export */   getSocialLogins: () => (/* binding */ getSocialLogins),
/* harmony export */   getSocialLoginsErrorAction: () => (/* binding */ getSocialLoginsErrorAction),
/* harmony export */   getSocialLoginsSuccessAction: () => (/* binding */ getSocialLoginsSuccessAction),
/* harmony export */   toggleActivateAction: () => (/* binding */ toggleActivateAction),
/* harmony export */   toggleManageAction: () => (/* binding */ toggleManageAction),
/* harmony export */   unlinkSocialLogin: () => (/* binding */ unlinkSocialLogin),
/* harmony export */   unlinkSocialLoginErrorAction: () => (/* binding */ unlinkSocialLoginErrorAction),
/* harmony export */   unlinkSocialLoginSuccessAction: () => (/* binding */ unlinkSocialLoginSuccessAction)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);

const getProfileDetails = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[profile-management - customer-profile] get profileDetails', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getProfileDetailsSuccessAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[profile-management - customer-profile] get profileDetails success response', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getProfileDetailsErrorAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[profile-management - customer-profile] get profileDetails Error', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getProfileOverview = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[profile-management - customer-profile] get profile overview', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getProfileOverviewSuccessAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[profile-management - customer-profile] get profile overview success response', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getProfileOverviewErrorAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[profile-management - customer-profile] get profile overview error', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getSocialLogins = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[profile-management - customer-profile] get socialLogins', _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps);
const getSocialLoginsSuccessAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[profile-management - customer-profile] get socialLogins success response', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getSocialLoginsErrorAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[profile-management - customer-profile] get socialLogins Error', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const unlinkSocialLogin = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[profile-management - customer-profile] unlink socialLogin', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const unlinkSocialLoginSuccessAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[profile-management - customer-profile] unlink socialLogin success response', _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps);
const unlinkSocialLoginErrorAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[profile-management - customer-profile] unlink socialLogin Error', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getAuthenticators = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[profile-management - customer-profile] get authenticators', _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps);
const getAuthenticatorsSuccessAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[profile-management - customer-profile] get authenticators success response', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getAuthenticatorsErrorAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[profile-management - customer-profile] get authenticators Error', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const toggleActivateAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[profile-management] toggleActivate', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const toggleManageAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[profile-management] toggleManage', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 44575:
/*!***************************************************************************************************!*\
  !*** ./libs/engagement/profile-management/data-access/src/lib/+state/customer-profile.effects.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerProfileEffects: () => (/* binding */ CustomerProfileEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ 12506);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _customer_profile_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-profile.actions */ 88423);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _infrastructure_customer_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../infrastructure/customer-profile.service */ 59126);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @telenet/ng-lib-message */ 65145);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _infrastructure_profile_datalayer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../infrastructure/profile-datalayer.service */ 97111);
/* harmony import */ var _constants_manage_social_login_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/manage-social-login.constant */ 48048);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_8__);














class CustomerProfileEffects {
  constructor(actions$, customerProfileService, profileDatalayerService, messageService) {
    this.actions$ = actions$;
    this.customerProfileService = customerProfileService;
    this.profileDatalayerService = profileDatalayerService;
    this.messageService = messageService;
    this.profileDetails$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_customer_profile_actions__WEBPACK_IMPORTED_MODULE_1__.getProfileDetails), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(({
      identityId,
      pidTransferRequest
    }) => {
      return this.customerProfileService.getProfileDetailsByIdentityId(identityId, pidTransferRequest).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(profileDetails => _customer_profile_actions__WEBPACK_IMPORTED_MODULE_1__.getProfileDetailsSuccessAction({
        profileDetails: profileDetails
      })), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(_customer_profile_actions__WEBPACK_IMPORTED_MODULE_1__.getProfileDetailsErrorAction({
        error: error
      }))));
    })));
    this.profileOverview$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_customer_profile_actions__WEBPACK_IMPORTED_MODULE_1__.getProfileOverview), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(({
      identityId
    }) => {
      return this.customerProfileService.getProfileOverview(identityId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(profileOverview => _customer_profile_actions__WEBPACK_IMPORTED_MODULE_1__.getProfileOverviewSuccessAction({
        profileOverview: profileOverview
      })), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(_customer_profile_actions__WEBPACK_IMPORTED_MODULE_1__.getProfileOverviewErrorAction({
        error: error
      }))));
    })));
    this.socialLogins$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_customer_profile_actions__WEBPACK_IMPORTED_MODULE_1__.getSocialLogins), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(() => {
      return this.customerProfileService.getSocialLogins().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(socialLogins => _customer_profile_actions__WEBPACK_IMPORTED_MODULE_1__.getSocialLoginsSuccessAction({
        socialLogins: socialLogins
      })), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(_customer_profile_actions__WEBPACK_IMPORTED_MODULE_1__.getSocialLoginsErrorAction({
        error: error
      }))));
    })));
    this.unlinkSocialLogin$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_customer_profile_actions__WEBPACK_IMPORTED_MODULE_1__.unlinkSocialLogin), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.concatMap)(({
      socialLoginType
    }) => {
      return this.customerProfileService.unlinkSocialLogin(socialLoginType).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.delay)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.concatMap)(() => {
        this.profileDatalayerService.sendUnlinkSocialEvent();
        this.messageService.addMessage(new _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_5__.SuccessMessage(_constants_manage_social_login_constant__WEBPACK_IMPORTED_MODULE_7__.ManageSocialLoginConstants.MESSAGE_GROUP, _constants_manage_social_login_constant__WEBPACK_IMPORTED_MODULE_7__.ManageSocialLoginConstants.UNLINK_SOCIAL_LOGIN_SUCCESS));
        return this.customerProfileService.getSocialLogins();
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.concatMap)(socialLogins => [(0,_customer_profile_actions__WEBPACK_IMPORTED_MODULE_1__.getSocialLoginsSuccessAction)({
        socialLogins
      }), (0,_customer_profile_actions__WEBPACK_IMPORTED_MODULE_1__.unlinkSocialLoginSuccessAction)()]), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)((0,_customer_profile_actions__WEBPACK_IMPORTED_MODULE_1__.unlinkSocialLoginErrorAction)({
        error: error
      }))));
    })));
    this.authenticators$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_customer_profile_actions__WEBPACK_IMPORTED_MODULE_1__.getAuthenticators), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(() => {
      return this.customerProfileService.getAuthenticators().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(authenticators => _customer_profile_actions__WEBPACK_IMPORTED_MODULE_1__.getAuthenticatorsSuccessAction({
        authenticators: authenticators
      })), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(_customer_profile_actions__WEBPACK_IMPORTED_MODULE_1__.getAuthenticatorsErrorAction({
        error: error
      }))));
    })));
  }
  static #_ = this.ɵfac = function CustomerProfileEffects_Factory(t) {
    return new (t || CustomerProfileEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_infrastructure_customer_profile_service__WEBPACK_IMPORTED_MODULE_4__.CustomerProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_infrastructure_profile_datalayer_service__WEBPACK_IMPORTED_MODULE_6__.ProfileDatalayerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_5__.MessageService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
    token: CustomerProfileEffects,
    factory: CustomerProfileEffects.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 93669:
/*!***************************************************************************************************!*\
  !*** ./libs/engagement/profile-management/data-access/src/lib/+state/customer-profile.reducer.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customerProfileFeature: () => (/* binding */ customerProfileFeature),
/* harmony export */   customerProfileReducer: () => (/* binding */ customerProfileReducer),
/* harmony export */   reducer: () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immer */ 75825);
/* harmony import */ var _customer_profile_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-profile.actions */ 88423);
/* harmony import */ var _customer_profile_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-profile.state */ 78307);




const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createReducer)(_customer_profile_state__WEBPACK_IMPORTED_MODULE_2__.defaultState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_customer_profile_actions__WEBPACK_IMPORTED_MODULE_1__.getProfileDetailsSuccessAction, (state, {
  profileDetails
}) => (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
  draft.profileDetails = profileDetails;
  draft.loading = false;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_customer_profile_actions__WEBPACK_IMPORTED_MODULE_1__.getProfileOverview, state => ({
  ...state,
  loading: true
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_customer_profile_actions__WEBPACK_IMPORTED_MODULE_1__.getProfileOverviewSuccessAction, (state, {
  profileOverview
}) => (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
  draft.profileOverview = profileOverview;
  draft.loading = false;
  draft.loadError = undefined;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_customer_profile_actions__WEBPACK_IMPORTED_MODULE_1__.getProfileOverviewErrorAction, (state, {
  error
}) => {
  return {
    ...state,
    loading: false,
    loadError: error
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_customer_profile_actions__WEBPACK_IMPORTED_MODULE_1__.getSocialLoginsSuccessAction, (state, {
  socialLogins
}) => (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
  draft.socialLogins = socialLogins;
  draft.loading = false;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_customer_profile_actions__WEBPACK_IMPORTED_MODULE_1__.getAuthenticators, state => ({
  ...state,
  loading: true
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_customer_profile_actions__WEBPACK_IMPORTED_MODULE_1__.getAuthenticatorsSuccessAction, (state, {
  authenticators
}) => (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)(state, draft => {
  draft.authenticators = authenticators;
  draft.loading = false;
})));
function customerProfileReducer(state = _customer_profile_state__WEBPACK_IMPORTED_MODULE_2__.defaultState, action) {
  return reducer(state, action);
}
const customerProfileFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeature)({
  name: 'customerProfileFeature',
  reducer: customerProfileReducer
});

/***/ }),

/***/ 81727:
/*!*****************************************************************************************************!*\
  !*** ./libs/engagement/profile-management/data-access/src/lib/+state/customer-profile.selectors.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   featureState: () => (/* binding */ featureState),
/* harmony export */   selectAuthenticators: () => (/* binding */ selectAuthenticators),
/* harmony export */   selectLoadError: () => (/* binding */ selectLoadError),
/* harmony export */   selectLoading: () => (/* binding */ selectLoading),
/* harmony export */   selectProfileDetails: () => (/* binding */ selectProfileDetails),
/* harmony export */   selectProfileOverview: () => (/* binding */ selectProfileOverview),
/* harmony export */   selectSocialLogins: () => (/* binding */ selectSocialLogins)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);

const featureState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)('customerProfileFeature');
const selectProfileDetails = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(featureState, state => state?.profileDetails);
const selectProfileOverview = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(featureState, state => state?.profileOverview);
const selectLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(featureState, state => state.loading);
const selectLoadError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(featureState, state => state.loadError);
const selectSocialLogins = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(featureState, state => state?.socialLogins);
const selectAuthenticators = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(featureState, state => state?.authenticators);

/***/ }),

/***/ 78307:
/*!*************************************************************************************************!*\
  !*** ./libs/engagement/profile-management/data-access/src/lib/+state/customer-profile.state.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultState: () => (/* binding */ defaultState)
/* harmony export */ });
const defaultState = {
  loading: false,
  loadError: undefined,
  profileDetails: undefined,
  profileOverview: undefined,
  socialLogins: undefined,
  authenticators: undefined,
  selectedAuthenticator: undefined
};

/***/ }),

/***/ 70513:
/*!***********************************************************************************************!*\
  !*** ./libs/engagement/profile-management/data-access/src/lib/constants/customer.constant.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerConstants: () => (/* binding */ CustomerConstants)
/* harmony export */ });
const CustomerConstants = {
  MESSAGE_GROUP: 'profile-management',
  EMPTY: '',
  API_VERSION_V1: 'v1',
  API_VERSION_V2: 'v2',
  CUSTOMER_SERVICE_PREFIX: '/public/api/customer-service/',
  CLIENT_SERVICE_PREFIX: '/public/api/profile-management-cs/',
  ENDPOINT_IDENTITY: '/identities',
  ENDPOINT_PROFILE_PICTURE: '/profile-picture',
  ENDPOINT_SOCIAL_LOGINS: '/idps',
  ENDPOINT_UNLINK_SOCIAL_LOGIN: '/idp',
  ENDPOINT_AUTHENTICATORS: '/authenticators',
  NO: 'No'
};

/***/ }),

/***/ 48048:
/*!**********************************************************************************************************!*\
  !*** ./libs/engagement/profile-management/data-access/src/lib/constants/manage-social-login.constant.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ManageSocialLoginConstants: () => (/* binding */ ManageSocialLoginConstants)
/* harmony export */ });
const ManageSocialLoginConstants = {
  MESSAGE_GROUP: 'manage-social-login',
  ITSME_ICON: '/assets/logo_itsme.svg',
  UNLINK_SOCIAL_LOGIN_SUCCESS: 'manage-social-login.lbl.unlink-social-login',
  DATALAYER_INTENT_UNLINK_SOCIAL_LOGIN: 'unlink social login'
};

/***/ }),

/***/ 55241:
/*!*********************************************************************************************************!*\
  !*** ./libs/engagement/profile-management/data-access/src/lib/constants/profile-datalayer.constants.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EVENT_NAME_LINK_BUTTON_CLICKED: () => (/* binding */ EVENT_NAME_LINK_BUTTON_CLICKED),
/* harmony export */   EVENT_NAME_LINK_CLICKED: () => (/* binding */ EVENT_NAME_LINK_CLICKED),
/* harmony export */   EVENT_NAME_SELF_SERVICE_FLOW_STARTED: () => (/* binding */ EVENT_NAME_SELF_SERVICE_FLOW_STARTED)
/* harmony export */ });
const EVENT_NAME_SELF_SERVICE_FLOW_STARTED = 'self-service flow started';
const EVENT_NAME_LINK_BUTTON_CLICKED = 'button clicked';
const EVENT_NAME_LINK_CLICKED = 'link clicked';

/***/ }),

/***/ 28655:
/*!***************************************************************************************!*\
  !*** ./libs/engagement/profile-management/data-access/src/lib/enums/factors.enums.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Factors: () => (/* binding */ Factors)
/* harmony export */ });
var Factors;
(function (Factors) {
  Factors["ITSME"] = "itsme";
  Factors["PASSKEY"] = "passkey";
  Factors["AUTHENTICATOR"] = "authenticator";
  Factors["SMS"] = "sms";
})(Factors || (Factors = {}));

/***/ }),

/***/ 59414:
/*!***********************************************************************************************************!*\
  !*** ./libs/engagement/profile-management/data-access/src/lib/enums/profile-overview-data-layer.enums.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileOverviewDataLayerEnum: () => (/* binding */ ProfileOverviewDataLayerEnum)
/* harmony export */ });
var ProfileOverviewDataLayerEnum;
(function (ProfileOverviewDataLayerEnum) {
  ProfileOverviewDataLayerEnum["manage-personal-data"] = "Your personal data";
  ProfileOverviewDataLayerEnum["manage-login-password"] = "MyTelenet login and password";
  ProfileOverviewDataLayerEnum["social-login"] = "Social Login";
  ProfileOverviewDataLayerEnum["manage-other-users"] = "Manage other users";
  ProfileOverviewDataLayerEnum["connected-services"] = "Connected services";
  ProfileOverviewDataLayerEnum["easy-switch-link"] = "Easy Switch";
  ProfileOverviewDataLayerEnum["payment-method"] = "Payment Method";
  ProfileOverviewDataLayerEnum["wifi-password"] = "Wi-Fi name and password";
  ProfileOverviewDataLayerEnum["sim-cards"] = "Manage sim";
  ProfileOverviewDataLayerEnum["privacy-settings"] = "Privacy Settings";
  ProfileOverviewDataLayerEnum["more-info"] = "More Info";
})(ProfileOverviewDataLayerEnum || (ProfileOverviewDataLayerEnum = {}));

/***/ }),

/***/ 7045:
/*!**************************************************************************************************!*\
  !*** ./libs/engagement/profile-management/data-access/src/lib/facade/customer-profile.facade.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerProfileFacade: () => (/* binding */ CustomerProfileFacade)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_customer_profile_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../+state/customer-profile.selectors */ 81727);
/* harmony import */ var _state_customer_profile_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../+state/customer-profile.actions */ 88423);
/* harmony import */ var _infrastructure_customer_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../infrastructure/customer-profile.service */ 59126);
/* harmony import */ var _infrastructure_profile_datalayer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../infrastructure/profile-datalayer.service */ 97111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_5__);









class CustomerProfileFacade {
  constructor(store, customerProfileService, profileDatalayerService) {
    this.store = store;
    this.customerProfileService = customerProfileService;
    this.profileDatalayerService = profileDatalayerService;
    this.loading$ = this.store.select(_state_customer_profile_selectors__WEBPACK_IMPORTED_MODULE_1__.selectLoading);
    this.loadError$ = this.store.select(_state_customer_profile_selectors__WEBPACK_IMPORTED_MODULE_1__.selectLoadError);
    this.profileOverview$ = this.store.select(_state_customer_profile_selectors__WEBPACK_IMPORTED_MODULE_1__.selectProfileOverview);
    this.socialLogins$ = this.store.select(_state_customer_profile_selectors__WEBPACK_IMPORTED_MODULE_1__.selectSocialLogins);
    this.authenticators$ = this.store.select(_state_customer_profile_selectors__WEBPACK_IMPORTED_MODULE_1__.selectAuthenticators);
  }
  loadProfileDetails(identityId, pidTransferRequest = false) {
    this.store.dispatch((0,_state_customer_profile_actions__WEBPACK_IMPORTED_MODULE_2__.getProfileDetails)({
      identityId,
      pidTransferRequest
    }));
  }
  loadProfileOverview(identityId) {
    this.store.dispatch((0,_state_customer_profile_actions__WEBPACK_IMPORTED_MODULE_2__.getProfileOverview)({
      identityId
    }));
  }
  getProfilePicture(identityId) {
    return this.customerProfileService.getProfilePicture(identityId);
  }
  sendNavLinkClickedEvent(itemName, destinationUrl, isLink) {
    this.profileDatalayerService.sendNavLinkClickedEvent(itemName, destinationUrl, isLink);
  }
  loadSocialLogins() {
    this.store.dispatch((0,_state_customer_profile_actions__WEBPACK_IMPORTED_MODULE_2__.getSocialLogins)());
  }
  unlinkSocialLogin(socialLoginType) {
    this.store.dispatch((0,_state_customer_profile_actions__WEBPACK_IMPORTED_MODULE_2__.unlinkSocialLogin)({
      socialLoginType
    }));
  }
  loadAuthenticators() {
    this.store.dispatch((0,_state_customer_profile_actions__WEBPACK_IMPORTED_MODULE_2__.getAuthenticators)());
  }
  toggleActivate(isToggleActivate) {
    this.store.dispatch((0,_state_customer_profile_actions__WEBPACK_IMPORTED_MODULE_2__.toggleActivateAction)({
      isToggleActivate
    }));
  }
  toggleManage(isToggleManage) {
    this.store.dispatch((0,_state_customer_profile_actions__WEBPACK_IMPORTED_MODULE_2__.toggleManageAction)({
      isToggleManage
    }));
  }
  static #_ = this.ɵfac = function CustomerProfileFacade_Factory(t) {
    return new (t || CustomerProfileFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_infrastructure_customer_profile_service__WEBPACK_IMPORTED_MODULE_3__.CustomerProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_infrastructure_profile_datalayer_service__WEBPACK_IMPORTED_MODULE_4__.ProfileDatalayerService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: CustomerProfileFacade,
    factory: CustomerProfileFacade.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 59126:
/*!***********************************************************************************************************!*\
  !*** ./libs/engagement/profile-management/data-access/src/lib/infrastructure/customer-profile.service.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerProfileService: () => (/* binding */ CustomerProfileService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_customer_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/customer.constant */ 70513);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @telenet/ng-lib-ocapi */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mappers_profile_details_mapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mappers/profile-details.mapper */ 97576);
/* harmony import */ var _mappers_social_logins_mapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mappers/social-logins.mapper */ 11491);
/* harmony import */ var _mappers_api_response_mapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mappers/api-response-mapper */ 31314);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @telenet/ng-lib-message */ 65145);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _constants_manage_social_login_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/manage-social-login.constant */ 48048);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @telenet/ng-lib-config */ 81601);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mappers_authenticators_mapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../mappers/authenticators.mapper */ 26447);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_10__);














const MESSAGE_GROUP = _constants_manage_social_login_constant__WEBPACK_IMPORTED_MODULE_7__.ManageSocialLoginConstants.MESSAGE_GROUP;
class CustomerProfileService {
  constructor(ocapiService, messageService, configService) {
    this.ocapiService = ocapiService;
    this.messageService = messageService;
    this.configService = configService;
  }
  getProfileDetailsByIdentityId(identityId, pidTransferRequest) {
    const parameters = pidTransferRequest ? `?includetransferrequest=true` : '';
    const suffix = '/' + identityId.concat(parameters);
    const endPoint = this.getServiceURI(_constants_customer_constant__WEBPACK_IMPORTED_MODULE_1__.CustomerConstants.API_VERSION_V1, _constants_customer_constant__WEBPACK_IMPORTED_MODULE_1__.CustomerConstants.ENDPOINT_IDENTITY, suffix);
    const ocapiConfig = new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_2__.OcapiCallConfig(MESSAGE_GROUP, endPoint, new _mappers_profile_details_mapper__WEBPACK_IMPORTED_MODULE_3__.ProfileDetailsMapper());
    ocapiConfig.errorHandler = this.handleErrorsResponse.bind(this);
    return this.ocapiService.doGet(ocapiConfig);
  }
  getProfileOverview(identityId) {
    const {
      API_VERSION_V1,
      ENDPOINT_IDENTITY,
      MESSAGE_GROUP
    } = _constants_customer_constant__WEBPACK_IMPORTED_MODULE_1__.CustomerConstants;
    const apiUrl = this.getClientServiceURI(API_VERSION_V1, ENDPOINT_IDENTITY);
    const endPoint = `${apiUrl}/${identityId}`;
    const ocapiConfig = new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_2__.OcapiCallConfig(MESSAGE_GROUP, endPoint);
    return this.ocapiService.doGet(ocapiConfig);
  }
  getProfilePicture(identityId) {
    const {
      API_VERSION_V1,
      ENDPOINT_IDENTITY,
      ENDPOINT_PROFILE_PICTURE
    } = _constants_customer_constant__WEBPACK_IMPORTED_MODULE_1__.CustomerConstants;
    const apiUrl = this.getClientServiceURI(API_VERSION_V1, ENDPOINT_IDENTITY);
    const endPoint = `${apiUrl}/${identityId}${ENDPOINT_PROFILE_PICTURE}`;
    return this.configService.getConfig(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_8__.ConfigConstants.OCAPI_URl) + endPoint;
  }
  getSocialLogins() {
    const {
      API_VERSION_V1,
      ENDPOINT_SOCIAL_LOGINS
    } = _constants_customer_constant__WEBPACK_IMPORTED_MODULE_1__.CustomerConstants;
    const endPoint = this.getClientServiceURI(API_VERSION_V1, ENDPOINT_SOCIAL_LOGINS);
    const ocapiConfig = new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_2__.OcapiCallConfig(MESSAGE_GROUP, endPoint, new _mappers_social_logins_mapper__WEBPACK_IMPORTED_MODULE_4__.SocialLoginsMapper());
    ocapiConfig.errorHandler = this.handleErrorsResponse.bind(this);
    return this.ocapiService.doGet(ocapiConfig);
  }
  unlinkSocialLogin(socialLoginType) {
    const {
      API_VERSION_V1,
      ENDPOINT_UNLINK_SOCIAL_LOGIN
    } = _constants_customer_constant__WEBPACK_IMPORTED_MODULE_1__.CustomerConstants;
    const apiUrl = this.getClientServiceURI(API_VERSION_V1, ENDPOINT_UNLINK_SOCIAL_LOGIN);
    const endPoint = `${apiUrl}/${socialLoginType.toUpperCase()}`;
    const ocapiConfig = new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_2__.OcapiCallConfig(MESSAGE_GROUP, endPoint, _mappers_api_response_mapper__WEBPACK_IMPORTED_MODULE_5__.ApiResponseMapper);
    ocapiConfig.errorHandler = this.handleErrorsResponse.bind(this);
    return this.ocapiService.doDelete(ocapiConfig);
  }
  getAuthenticators() {
    const {
      API_VERSION_V1,
      ENDPOINT_AUTHENTICATORS
    } = _constants_customer_constant__WEBPACK_IMPORTED_MODULE_1__.CustomerConstants;
    const endPoint = this.getClientServiceURI(API_VERSION_V1, ENDPOINT_AUTHENTICATORS);
    const ocapiConfig = new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_2__.OcapiCallConfig(MESSAGE_GROUP, endPoint, new _mappers_authenticators_mapper__WEBPACK_IMPORTED_MODULE_9__.AuthenticatorsMapper());
    ocapiConfig.errorHandler = this.handleErrorsResponse.bind(this);
    return this.ocapiService.doGet(ocapiConfig);
  }
  getServiceURI(apiVersion, context, endpoint) {
    return _constants_customer_constant__WEBPACK_IMPORTED_MODULE_1__.CustomerConstants.CUSTOMER_SERVICE_PREFIX.concat(apiVersion).concat(context).concat(endpoint);
  }
  getClientServiceURI(apiVersion, endpoint) {
    return _constants_customer_constant__WEBPACK_IMPORTED_MODULE_1__.CustomerConstants.CLIENT_SERVICE_PREFIX.concat(apiVersion).concat(endpoint);
  }
  handleErrorsResponse(error, ocapiCall) {
    if (error.status && error.error && error.error.code) {
      const errorCode = error.status.toString().concat('-').concat(error.error.code);
      this.messageService.addMessage(new _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_6__.ErrorMessage(ocapiCall.messageGroupName, 'ocapi.' + errorCode));
    } else if (error.status) {
      this.messageService.addMessage(new _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_6__.ErrorMessage(ocapiCall.messageGroupName, 'ocapi.' + error.status));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.throwError)(() => 'An error occurred while trying to fetch ' + ocapiCall.messageGroupName);
  }
  static #_ = this.ɵfac = function CustomerProfileService_Factory(t) {
    return new (t || CustomerProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_2__.OcapiService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_6__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_8__.ConfigService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
    token: CustomerProfileService,
    factory: CustomerProfileService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 97111:
/*!************************************************************************************************************!*\
  !*** ./libs/engagement/profile-management/data-access/src/lib/infrastructure/profile-datalayer.service.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileDatalayerService: () => (/* binding */ ProfileDatalayerService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @telenet/ng-lib-datalayer */ 42782);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_profile_datalayer_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/profile-datalayer.constants */ 55241);
/* harmony import */ var _constants_manage_social_login_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/manage-social-login.constant */ 48048);
/* harmony import */ var _enums_profile_overview_data_layer_enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enums/profile-overview-data-layer.enums */ 59414);






class ProfileDatalayerService {
  constructor() {
    this.dataLayerService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1__.DataLayerService);
    this.MESSAGE_GROUP = ['manage-social-login'];
    this.FLOWTYPE_CARE = 'care';
  }
  sendUnlinkSocialEvent() {
    const eventInfo = this.getEventInfo(_constants_profile_datalayer_constants__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAME_SELF_SERVICE_FLOW_STARTED, _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1__.EventTypes.SELF_SERVICE_FLOW_STARTED);
    this.currentIntent = _constants_manage_social_login_constant__WEBPACK_IMPORTED_MODULE_3__.ManageSocialLoginConstants.DATALAYER_INTENT_UNLINK_SOCIAL_LOGIN;
    const attributes = this.getAttributes();
    this.addEvent(eventInfo, attributes);
  }
  sendNavLinkClickedEvent(itemType, destinationUrl, isLink) {
    const itemName = _enums_profile_overview_data_layer_enums__WEBPACK_IMPORTED_MODULE_4__.ProfileOverviewDataLayerEnum[itemType] || itemType;
    const linkType = isLink ? _constants_profile_datalayer_constants__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAME_LINK_CLICKED : _constants_profile_datalayer_constants__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAME_LINK_BUTTON_CLICKED;
    const eventInfo = this.getEventInfo(linkType, _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1__.EventTypes.CLICK);
    const attributes = this.getAttributes(itemName, '', destinationUrl);
    this.addEvent(eventInfo, attributes);
  }
  getEventInfo(eventName, eventType) {
    return this.dataLayerService.createEventInfo(eventName, eventType, this.MESSAGE_GROUP);
  }
  getAttributes(itemName = '', itemData = '', destinationURL = '') {
    return {
      itemName,
      itemData,
      intent: this.currentIntent,
      flowType: this.FLOWTYPE_CARE,
      destinationURL
    };
  }
  addEvent(eventInfo, attributes) {
    this.dataLayerService.addEvent(eventInfo, attributes, this.category);
  }
  get category() {
    return this.dataLayerService.createCategory(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1__.EventCategoryEnum.PRIMARY_CATEGORY_CARE, 'profile-management');
  }
  resetIntent() {
    this.currentIntent = '';
  }
  static #_ = this.ɵfac = function ProfileDatalayerService_Factory(t) {
    return new (t || ProfileDatalayerService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ProfileDatalayerService,
    factory: ProfileDatalayerService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 31314:
/*!***********************************************************************************************!*\
  !*** ./libs/engagement/profile-management/data-access/src/lib/mappers/api-response-mapper.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiResponseMapper: () => (/* binding */ ApiResponseMapper)
/* harmony export */ });
class ApiResponseMapper {
  static toModel(rawApiResponse) {
    return {
      status: rawApiResponse?.status
    };
  }
}

/***/ }),

/***/ 26447:
/*!*************************************************************************************************!*\
  !*** ./libs/engagement/profile-management/data-access/src/lib/mappers/authenticators.mapper.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthenticatorsMapper: () => (/* binding */ AuthenticatorsMapper)
/* harmony export */ });
class AuthenticatorsMapper {
  toModel(rawAuthenticators) {
    const auths = rawAuthenticators.authenticators.map(rawAuthenticator => this.createAuthenticator(rawAuthenticator));
    return {
      authenticators: auths
    };
  }
  createAuthenticator(rawAuthenticator) {
    return {
      type: rawAuthenticator.type,
      enabled: rawAuthenticator.enabled,
      enrollmentLink: rawAuthenticator.details ? rawAuthenticator.details?.enrollment_link : null
    };
  }
}

/***/ }),

/***/ 97576:
/*!**************************************************************************************************!*\
  !*** ./libs/engagement/profile-management/data-access/src/lib/mappers/profile-details.mapper.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileDetailsMapper: () => (/* binding */ ProfileDetailsMapper)
/* harmony export */ });
/* harmony import */ var _models_profile_details_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/profile-details.model */ 94300);

class ProfileDetailsMapper {
  toModel(rawProfileDetails) {
    return this.createProfileIdentityIDDetails(rawProfileDetails);
  }
  createProfileIdentityIDDetails(rawProfileIdentity) {
    const profileDetails = new _models_profile_details_model__WEBPACK_IMPORTED_MODULE_0__.ProfileDetails();
    profileDetails.pid = rawProfileIdentity.pid;
    profileDetails.firstname = rawProfileIdentity.firstname;
    profileDetails.lastname = rawProfileIdentity.lastname;
    profileDetails.nickname = rawProfileIdentity.nickname;
    profileDetails.email = rawProfileIdentity.email;
    profileDetails.language = rawProfileIdentity.language;
    profileDetails.phonenumber = rawProfileIdentity.phonenumber;
    profileDetails.gender = rawProfileIdentity.gender;
    profileDetails.birthdate = rawProfileIdentity.birthdate;
    profileDetails.privacysetting = rawProfileIdentity.privacysetting;
    profileDetails.role = rawProfileIdentity.role;
    profileDetails.credential = rawProfileIdentity.credential;
    profileDetails.primarycredentialalias = rawProfileIdentity.primarycredentialalias;
    profileDetails.telenethosted = rawProfileIdentity.telenethosted;
    profileDetails.legacylogin = rawProfileIdentity.legacylogin;
    profileDetails.version = rawProfileIdentity.version;
    profileDetails.status = rawProfileIdentity.status;
    profileDetails.msisdn = rawProfileIdentity.msisdn;
    profileDetails.alias = rawProfileIdentity.alias;
    profileDetails.isInvitedProfile = false;
    profileDetails.unverifiedphonenumber = rawProfileIdentity.unverifiedphonenumber;
    profileDetails.itsMeId = rawProfileIdentity.itsMeId;
    profileDetails.mailboxUUID = rawProfileIdentity.mailboxUUID;
    profileDetails.mailboxAlias = rawProfileIdentity.mailboxAlias;
    profileDetails.transferPIDRequest = rawProfileIdentity.transferPIDRequest;
    profileDetails.age = rawProfileIdentity.age;
    profileDetails.msisdnOnly = rawProfileIdentity.msisdnOnly;
    return profileDetails;
  }
}

/***/ }),

/***/ 11491:
/*!************************************************************************************************!*\
  !*** ./libs/engagement/profile-management/data-access/src/lib/mappers/social-logins.mapper.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SocialLoginsMapper: () => (/* binding */ SocialLoginsMapper)
/* harmony export */ });
/* harmony import */ var _models_social_logins_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/social-logins.model */ 90551);

class SocialLoginsMapper {
  toModel(rawSocialLogins) {
    return this.createSocialLogins(rawSocialLogins);
  }
  createSocialLogins(rawSocialLogins) {
    const socialLogins = new _models_social_logins_model__WEBPACK_IMPORTED_MODULE_0__.SocialLogins();
    socialLogins.isLinkedToItsme = rawSocialLogins.isLinkedToItsme;
    return socialLogins;
  }
}

/***/ }),

/***/ 94300:
/*!************************************************************************************************!*\
  !*** ./libs/engagement/profile-management/data-access/src/lib/models/profile-details.model.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileDetails: () => (/* binding */ ProfileDetails)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ 41855);

class ProfileDetails {
  getRoleLabelKey() {
    if (this.isManager()) {
      return 'ng.manage-users.txt.manager';
    } else if (this.isContractHolder()) {
      return 'ng.manage-users.txt.contract_holder';
    } else if (this.isMember()) {
      return 'ng.manage-users.txt.member';
    } else if (this.isOrphan()) {
      return 'ng.manage-users.txt.orphan';
    } else {
      return '';
    }
  }
  isMember() {
    return this.role !== undefined && !(0,lodash_es__WEBPACK_IMPORTED_MODULE_0__["default"])(this.role) && this.role.toLowerCase() === 'member';
  }
  isContractHolder() {
    return this.role !== undefined && !(0,lodash_es__WEBPACK_IMPORTED_MODULE_0__["default"])(this.role) && this.role.toLowerCase() === 'contract_holder';
  }
  isManager() {
    return this.role !== undefined && !(0,lodash_es__WEBPACK_IMPORTED_MODULE_0__["default"])(this.role) && this.role.toLowerCase() === 'manager';
  }
  isOrphan() {
    return this.role !== undefined && !(0,lodash_es__WEBPACK_IMPORTED_MODULE_0__["default"])(this.role) && this.role.toLowerCase() === 'orphan';
  }
  getLanguageLabelKey() {
    if (this.language !== undefined && !(0,lodash_es__WEBPACK_IMPORTED_MODULE_0__["default"])(this.language)) {
      if (this.language.toLowerCase() === 'en') {
        return 'ng.manage-profile.lbl.language-english';
      } else if (this.language.toLowerCase() === 'fr') {
        return 'ng.manage-profile.lbl.language-french';
      } else if (this.language.toLowerCase() === 'nl') {
        return 'ng.manage-profile.lbl.language-dutch';
      }
    }
    return '';
  }
}

/***/ }),

/***/ 11062:
/*!*************************************************************************************************!*\
  !*** ./libs/engagement/profile-management/data-access/src/lib/models/profile.overview.model.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileOverview: () => (/* binding */ ProfileOverview)
/* harmony export */ });
class ProfileOverview {}

/***/ }),

/***/ 90551:
/*!**********************************************************************************************!*\
  !*** ./libs/engagement/profile-management/data-access/src/lib/models/social-logins.model.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SocialLogins: () => (/* binding */ SocialLogins)
/* harmony export */ });
class SocialLogins {}

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


/***/ }),

/***/ 17558:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_DataView.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ 72483);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ 16396);



/* Built-in method references that are verified to be native. */
var DataView = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'DataView');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataView);

/***/ }),

/***/ 525:
/*!****************************************!*\
  !*** ./node_modules/lodash-es/_Map.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ 72483);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ 16396);



/* Built-in method references that are verified to be native. */
var Map = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'Map');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Map);

/***/ }),

/***/ 89433:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_Promise.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ 72483);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ 16396);



/* Built-in method references that are verified to be native. */
var Promise = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'Promise');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Promise);

/***/ }),

/***/ 23684:
/*!****************************************!*\
  !*** ./node_modules/lodash-es/_Set.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ 72483);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ 16396);



/* Built-in method references that are verified to be native. */
var Set = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'Set');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Set);

/***/ }),

/***/ 82134:
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/_Symbol.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ 16396);


/** Built-in value references. */
var Symbol = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Symbol;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Symbol);

/***/ }),

/***/ 12680:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_WeakMap.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ 72483);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ 16396);



/* Built-in method references that are verified to be native. */
var WeakMap = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'WeakMap');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeakMap);

/***/ }),

/***/ 79304:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseGetTag.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ 82134);
/* harmony import */ var _getRawTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getRawTag.js */ 11650);
/* harmony import */ var _objectToString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_objectToString.js */ 5354);




/** `Object#toString` result references. */
var nullTag = '[object Null]',
  undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? (0,_getRawTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) : (0,_objectToString_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseGetTag);

/***/ }),

/***/ 34063:
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsArguments.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseGetTag.js */ 79304);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ 333);



/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) == argsTag;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsArguments);

/***/ }),

/***/ 52020:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsNative.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isFunction.js */ 93084);
/* harmony import */ var _isMasked_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isMasked.js */ 38426);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ 32176);
/* harmony import */ var _toSource_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_toSource.js */ 51540);





/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
  objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) || (0,_isMasked_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    return false;
  }
  var pattern = (0,_isFunction_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) ? reIsNative : reIsHostCtor;
  return pattern.test((0,_toSource_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsNative);

/***/ }),

/***/ 80970:
/*!*****************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsTypedArray.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseGetTag.js */ 79304);
/* harmony import */ var _isLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isLength.js */ 74080);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ 333);




/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
  arrayTag = '[object Array]',
  boolTag = '[object Boolean]',
  dateTag = '[object Date]',
  errorTag = '[object Error]',
  funcTag = '[object Function]',
  mapTag = '[object Map]',
  numberTag = '[object Number]',
  objectTag = '[object Object]',
  regexpTag = '[object RegExp]',
  setTag = '[object Set]',
  stringTag = '[object String]',
  weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
  dataViewTag = '[object DataView]',
  float32Tag = '[object Float32Array]',
  float64Tag = '[object Float64Array]',
  int8Tag = '[object Int8Array]',
  int16Tag = '[object Int16Array]',
  int32Tag = '[object Int32Array]',
  uint8Tag = '[object Uint8Array]',
  uint8ClampedTag = '[object Uint8ClampedArray]',
  uint16Tag = '[object Uint16Array]',
  uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_isLength_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value.length) && !!typedArrayTags[(0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value)];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsTypedArray);

/***/ }),

/***/ 22093:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_baseKeys.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isPrototype_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isPrototype.js */ 54036);
/* harmony import */ var _nativeKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_nativeKeys.js */ 93058);



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!(0,_isPrototype_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object)) {
    return (0,_nativeKeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseKeys);

/***/ }),

/***/ 87523:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseUnary.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseUnary);

/***/ }),

/***/ 1408:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_coreJsData.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ 16396);


/** Used to detect overreaching core-js shims. */
var coreJsData = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"]['__core-js_shared__'];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (coreJsData);

/***/ }),

/***/ 60800:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_freeGlobal.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (freeGlobal);

/***/ }),

/***/ 72483:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_getNative.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsNative_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseIsNative.js */ 52020);
/* harmony import */ var _getValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getValue.js */ 91680);



/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = (0,_getValue_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key);
  return (0,_baseIsNative_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) ? value : undefined;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getNative);

/***/ }),

/***/ 11650:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_getRawTag.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ 82134);


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
    tag = value[symToStringTag];
  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}
  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRawTag);

/***/ }),

/***/ 8020:
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/_getTag.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DataView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_DataView.js */ 17558);
/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_Map.js */ 525);
/* harmony import */ var _Promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_Promise.js */ 89433);
/* harmony import */ var _Set_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_Set.js */ 23684);
/* harmony import */ var _WeakMap_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_WeakMap.js */ 12680);
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_baseGetTag.js */ 79304);
/* harmony import */ var _toSource_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_toSource.js */ 51540);








/** `Object#toString` result references. */
var mapTag = '[object Map]',
  objectTag = '[object Object]',
  promiseTag = '[object Promise]',
  setTag = '[object Set]',
  weakMapTag = '[object WeakMap]';
var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_DataView_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
  mapCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_Map_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
  promiseCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_Promise_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
  setCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_Set_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
  weakMapCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_WeakMap_js__WEBPACK_IMPORTED_MODULE_5__["default"]);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag_js__WEBPACK_IMPORTED_MODULE_6__["default"];

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if (_DataView_js__WEBPACK_IMPORTED_MODULE_1__["default"] && getTag(new _DataView_js__WEBPACK_IMPORTED_MODULE_1__["default"](new ArrayBuffer(1))) != dataViewTag || _Map_js__WEBPACK_IMPORTED_MODULE_2__["default"] && getTag(new _Map_js__WEBPACK_IMPORTED_MODULE_2__["default"]()) != mapTag || _Promise_js__WEBPACK_IMPORTED_MODULE_3__["default"] && getTag(_Promise_js__WEBPACK_IMPORTED_MODULE_3__["default"].resolve()) != promiseTag || _Set_js__WEBPACK_IMPORTED_MODULE_4__["default"] && getTag(new _Set_js__WEBPACK_IMPORTED_MODULE_4__["default"]()) != setTag || _WeakMap_js__WEBPACK_IMPORTED_MODULE_5__["default"] && getTag(new _WeakMap_js__WEBPACK_IMPORTED_MODULE_5__["default"]()) != weakMapTag) {
  getTag = function (value) {
    var result = (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_6__["default"])(value),
      Ctor = result == objectTag ? value.constructor : undefined,
      ctorString = Ctor ? (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Ctor) : '';
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTag);

/***/ }),

/***/ 91680:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_getValue.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getValue);

/***/ }),

/***/ 38426:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_isMasked.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_coreJsData.js */ 1408);


/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(_coreJsData_js__WEBPACK_IMPORTED_MODULE_0__["default"] && _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__["default"].keys && _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__["default"].keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isMasked);

/***/ }),

/***/ 54036:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_isPrototype.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
    proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
  return value === proto;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isPrototype);

/***/ }),

/***/ 93058:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_nativeKeys.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _overArg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_overArg.js */ 84119);


/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = (0,_overArg_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object.keys, Object);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nativeKeys);

/***/ }),

/***/ 92596:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_nodeUtil.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_freeGlobal.js */ 60800);


/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__["default"].process;

/** Used to access faster Node.js helpers. */
var nodeUtil = function () {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;
    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nodeUtil);

/***/ }),

/***/ 5354:
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_objectToString.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (objectToString);

/***/ }),

/***/ 84119:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_overArg.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (overArg);

/***/ }),

/***/ 16396:
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/_root.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_freeGlobal.js */ 60800);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__["default"] || freeSelf || Function('return this')();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (root);

/***/ }),

/***/ 51540:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_toSource.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toSource);

/***/ }),

/***/ 77018:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/isArguments.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseIsArguments.js */ 34063);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObjectLike.js */ 333);



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = (0,_baseIsArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
  return arguments;
}()) ? _baseIsArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"] : function (value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isArguments);

/***/ }),

/***/ 66328:
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/isArray.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isArray);

/***/ }),

/***/ 64070:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/isArrayLike.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ 93084);
/* harmony import */ var _isLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isLength.js */ 74080);



/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && (0,_isLength_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value.length) && !(0,_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isArrayLike);

/***/ }),

/***/ 92467:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isBuffer.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ 16396);
/* harmony import */ var _stubFalse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stubFalse.js */ 68534);



/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || _stubFalse_js__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isBuffer);

/***/ }),

/***/ 41855:
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/isEmpty.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseKeys_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_baseKeys.js */ 22093);
/* harmony import */ var _getTag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_getTag.js */ 8020);
/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isArguments.js */ 77018);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray.js */ 66328);
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArrayLike.js */ 64070);
/* harmony import */ var _isBuffer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isBuffer.js */ 92467);
/* harmony import */ var _isPrototype_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_isPrototype.js */ 54036);
/* harmony import */ var _isTypedArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isTypedArray.js */ 54752);









/** `Object#toString` result references. */
var mapTag = '[object Map]',
  setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if ((0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && ((0,_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) || typeof value == 'string' || typeof value.splice == 'function' || (0,_isBuffer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) || (0,_isTypedArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value) || (0,_isArguments_js__WEBPACK_IMPORTED_MODULE_4__["default"])(value))) {
    return !value.length;
  }
  var tag = (0,_getTag_js__WEBPACK_IMPORTED_MODULE_5__["default"])(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if ((0,_isPrototype_js__WEBPACK_IMPORTED_MODULE_6__["default"])(value)) {
    return !(0,_baseKeys_js__WEBPACK_IMPORTED_MODULE_7__["default"])(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isEmpty);

/***/ }),

/***/ 93084:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/isFunction.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseGetTag.js */ 79304);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ 32176);



/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
  funcTag = '[object Function]',
  genTag = '[object GeneratorFunction]',
  proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isFunction);

/***/ }),

/***/ 74080:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isLength.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isLength);

/***/ }),

/***/ 32176:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isObject.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isObject);

/***/ }),

/***/ 333:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/isObjectLike.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isObjectLike);

/***/ }),

/***/ 54752:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/isTypedArray.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsTypedArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseIsTypedArray.js */ 80970);
/* harmony import */ var _baseUnary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseUnary.js */ 87523);
/* harmony import */ var _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nodeUtil.js */ 92596);




/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__["default"] && _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__["default"].isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? (0,_baseUnary_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nodeIsTypedArray) : _baseIsTypedArray_js__WEBPACK_IMPORTED_MODULE_2__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isTypedArray);

/***/ }),

/***/ 68534:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/stubFalse.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stubFalse);

/***/ })

}])
//# sourceMappingURL=libs_engagement_profile-management_data-access_src_index_ts-_84810.js.map