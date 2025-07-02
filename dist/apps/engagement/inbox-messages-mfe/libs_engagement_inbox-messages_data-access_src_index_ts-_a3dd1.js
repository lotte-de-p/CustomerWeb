(self["webpackChunkinbox_messages_mfe"] = self["webpackChunkinbox_messages_mfe"] || []).push([["libs_engagement_inbox-messages_data-access_src_index_ts-_a3dd1"],{

/***/ 57898:
/*!*****************************************************************!*\
  !*** ./libs/engagement/inbox-messages/data-access/src/index.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BadgeType: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.BadgeType),
/* harmony export */   InboxMessagesFacade: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.InboxMessagesFacade),
/* harmony export */   InboxMessagesNgrxModule: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.InboxMessagesNgrxModule),
/* harmony export */   InboxMessagesService: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.InboxMessagesService),
/* harmony export */   provideInboxMessagesDomain: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.provideInboxMessagesDomain)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ 58123);


/***/ }),

/***/ 13781:
/*!*************************************************************************************************!*\
  !*** ./libs/engagement/inbox-messages/data-access/src/lib/+state/inbox-messages-ngrx.module.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InboxMessagesNgrxModule: () => (/* binding */ InboxMessagesNgrxModule)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inbox_messages_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inbox-messages.reducer */ 55658);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 12506);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inbox_messages_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inbox-messages.effects */ 72794);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);







class InboxMessagesNgrxModule {
  static #_ = this.ɵfac = function InboxMessagesNgrxModule_Factory(t) {
    return new (t || InboxMessagesNgrxModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: InboxMessagesNgrxModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.StoreModule.forFeature('inboxMessagesFeature', _inbox_messages_reducer__WEBPACK_IMPORTED_MODULE_1__.inboxMessagesReducer), _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.StoreModule.forFeature('unreadInboxMessagesFeature', _inbox_messages_reducer__WEBPACK_IMPORTED_MODULE_1__.unreadInboxMessagesReducer), _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.EffectsModule.forFeature([_inbox_messages_effects__WEBPACK_IMPORTED_MODULE_3__.InboxMessagesEffects])]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](InboxMessagesNgrxModule, {
    imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.StoreFeatureModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.EffectsFeatureModule]
  });
})();

/***/ }),

/***/ 46441:
/*!*********************************************************************************************!*\
  !*** ./libs/engagement/inbox-messages/data-access/src/lib/+state/inbox-messages.actions.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteInboxMessage: () => (/* binding */ deleteInboxMessage),
/* harmony export */   deleteInboxMessageSuccess: () => (/* binding */ deleteInboxMessageSuccess),
/* harmony export */   getError: () => (/* binding */ getError),
/* harmony export */   getInboxMessages: () => (/* binding */ getInboxMessages),
/* harmony export */   getInboxMessagesSuccess: () => (/* binding */ getInboxMessagesSuccess),
/* harmony export */   getUnreadInboxMessagesCount: () => (/* binding */ getUnreadInboxMessagesCount),
/* harmony export */   getUnreadInboxMessagesCountSuccess: () => (/* binding */ getUnreadInboxMessagesCountSuccess),
/* harmony export */   inboxMessageClicked: () => (/* binding */ inboxMessageClicked),
/* harmony export */   markMessagesAsRead: () => (/* binding */ markMessagesAsRead),
/* harmony export */   markMessagesAsReadError: () => (/* binding */ markMessagesAsReadError),
/* harmony export */   markMessagesAsReadSuccess: () => (/* binding */ markMessagesAsReadSuccess),
/* harmony export */   notificationClicked: () => (/* binding */ notificationClicked)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);

const getInboxMessages = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[inbox-messages] get inbox messages');
const getInboxMessagesSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[inbox-messages] get inbox messages success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getUnreadInboxMessagesCount = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[inbox-messages] get unread inbox messages count');
const getUnreadInboxMessagesCountSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[inbox-messages] get unread inbox messages count success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const getError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[inbox-messages] get inbox messages Error', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const markMessagesAsRead = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[inbox-messages] mark messages as read', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const markMessagesAsReadSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[inbox-messages] mark messages as read success');
const markMessagesAsReadError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[inbox-messages] mark messages as read error', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteInboxMessage = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[inbox-messages] delete inbox message', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteInboxMessageSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[inbox-messages] delete inbox message success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const notificationClicked = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[InboxMessagesDatalayer] Notification Clicked', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const inboxMessageClicked = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[InboxMessagesDatalayer] Inbox Message Clicked', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 72794:
/*!*********************************************************************************************!*\
  !*** ./libs/engagement/inbox-messages/data-access/src/lib/+state/inbox-messages.effects.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InboxMessagesEffects: () => (/* binding */ InboxMessagesEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ 12506);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_inbox_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/inbox-messages.service */ 9454);
/* harmony import */ var _inbox_messages_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inbox-messages.actions */ 46441);
/* harmony import */ var _services_inbox_messages_datalayer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/inbox-messages-datalayer.service */ 55301);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _inbox_messages_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inbox-messages.selectors */ 21754);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_9__);















class InboxMessagesEffects {
  constructor(actions$, inboxMessagesService, inboxMessagesDatalayerService, store, urlService) {
    this.actions$ = actions$;
    this.inboxMessagesService = inboxMessagesService;
    this.inboxMessagesDatalayerService = inboxMessagesDatalayerService;
    this.store = store;
    this.urlService = urlService;
    this.fetchAllMessages$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_inbox_messages_actions__WEBPACK_IMPORTED_MODULE_4__.getInboxMessages), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(() => this.inboxMessagesService.getAllInboxMessages().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(inboxMessagesEntries => _inbox_messages_actions__WEBPACK_IMPORTED_MODULE_4__.getInboxMessagesSuccess({
      inboxMessagesEntries
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(_inbox_messages_actions__WEBPACK_IMPORTED_MODULE_4__.getError({
      error
    })))))));
    this.deleteMessage$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_inbox_messages_actions__WEBPACK_IMPORTED_MODULE_4__.deleteInboxMessage), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(action => this.inboxMessagesService.deleteMessageById(action.message).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.delay)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.withLatestFrom)(this.store.select(_inbox_messages_selectors__WEBPACK_IMPORTED_MODULE_7__.selectInboxMessages)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(([_, inboxMessagesEntries]) => {
      const {
        content,
        id
      } = action.message;
      const updatedMessages = inboxMessagesEntries?.otherInboxMessages.filter(message => message.id !== action.message.id);
      this.inboxMessagesDatalayerService.sendInboxMessageDeleteEvent(id, content ? content.title : '');
      return _inbox_messages_actions__WEBPACK_IMPORTED_MODULE_4__.deleteInboxMessageSuccess({
        inboxMessagesEntries: {
          ...inboxMessagesEntries,
          otherInboxMessages: updatedMessages
        }
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(_inbox_messages_actions__WEBPACK_IMPORTED_MODULE_4__.getError({
      error
    })))))));
    this.markAllAsRead$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_inbox_messages_actions__WEBPACK_IMPORTED_MODULE_4__.getInboxMessagesSuccess), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(action => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(action).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(action => !!action.inboxMessagesEntries?.unreadInboxMessages?.length), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(action => {
      const unreadMessageTitles = action.inboxMessagesEntries.unreadInboxMessages?.map(message => {
        return message.content ? message.content.title : '';
      }) || [];
      if (unreadMessageTitles.length) {
        this.inboxMessagesDatalayerService.sendInboxMessageImpressionEvents(unreadMessageTitles);
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(action => {
      const unreadMessageIds = action.inboxMessagesEntries.unreadInboxMessages?.map(message => message.id) || [];
      return this.inboxMessagesService.markMessagesAsReadByIds(unreadMessageIds).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.delay)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(() => [_inbox_messages_actions__WEBPACK_IMPORTED_MODULE_4__.markMessagesAsRead({
        ids: unreadMessageIds
      }), _inbox_messages_actions__WEBPACK_IMPORTED_MODULE_4__.markMessagesAsReadSuccess()]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(_inbox_messages_actions__WEBPACK_IMPORTED_MODULE_4__.markMessagesAsReadError({
        error
      }))));
    })))));
    this.inboxMessagesUnreadCount$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_inbox_messages_actions__WEBPACK_IMPORTED_MODULE_4__.getUnreadInboxMessagesCount), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(() => this.inboxMessagesService.getUnreadInboxMessagesCount().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(unreadMessageCount => _inbox_messages_actions__WEBPACK_IMPORTED_MODULE_4__.getUnreadInboxMessagesCountSuccess({
      unreadInboxMessagesCount: unreadMessageCount?.amount
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(_inbox_messages_actions__WEBPACK_IMPORTED_MODULE_4__.getError({
      error
    })))))));
    this.notificationClickedEvent$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_inbox_messages_actions__WEBPACK_IMPORTED_MODULE_4__.notificationClicked), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.withLatestFrom)(this.store.select(_inbox_messages_selectors__WEBPACK_IMPORTED_MODULE_7__.selectUnreadInboxMessagesCount)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(([action, unreadMessageCount]) => {
      this.inboxMessagesDatalayerService.sendNotificationClickedEvent(action.url, !!unreadMessageCount);
      if (!action?.url) return;
      this.urlService.redirectTo(action.url);
    })), {
      dispatch: false
    });
    this.inboxMessageClickedEvent$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.ofType)(_inbox_messages_actions__WEBPACK_IMPORTED_MODULE_4__.inboxMessageClicked), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(action => {
      const {
        content
      } = action.message;
      if (content && content.callToAction) {
        const {
          link,
          name
        } = content.callToAction;
        const {
          title
        } = content;
        this.inboxMessagesDatalayerService.sendInboxMessageClickedEvent(title, link, name);
        if (!link) return;
        this.urlService.redirectTo(link);
      }
    })), {
      dispatch: false
    });
  }
  static #_ = this.ɵfac = function InboxMessagesEffects_Factory(t) {
    return new (t || InboxMessagesEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_services_inbox_messages_service__WEBPACK_IMPORTED_MODULE_3__.InboxMessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_services_inbox_messages_datalayer_service__WEBPACK_IMPORTED_MODULE_5__.InboxMessagesDatalayerService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_8__.UrlService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
    token: InboxMessagesEffects,
    factory: InboxMessagesEffects.ɵfac
  });
}

/***/ }),

/***/ 55658:
/*!*********************************************************************************************!*\
  !*** ./libs/engagement/inbox-messages/data-access/src/lib/+state/inbox-messages.reducer.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   inboxMessagesReducer: () => (/* binding */ inboxMessagesReducer),
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   unreadInboxMessagesInitialState: () => (/* binding */ unreadInboxMessagesInitialState),
/* harmony export */   unreadInboxMessagesReducer: () => (/* binding */ unreadInboxMessagesReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immer */ 75825);
/* harmony import */ var _inbox_messages_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inbox-messages.actions */ 46441);



const initialState = {
  inboxMessagesEntries: {},
  loading: false,
  loadError: undefined
};
const unreadInboxMessagesInitialState = {
  count: 0,
  loading: false,
  loadError: undefined
};
const inboxMessagesReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_inbox_messages_actions__WEBPACK_IMPORTED_MODULE_1__.getInboxMessages, state => ({
  ...state,
  loading: true
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_inbox_messages_actions__WEBPACK_IMPORTED_MODULE_1__.getInboxMessagesSuccess, (state, {
  inboxMessagesEntries
}) => (0,immer__WEBPACK_IMPORTED_MODULE_2__.produce)(state, draft => {
  draft.inboxMessagesEntries = inboxMessagesEntries;
  draft.loading = false;
  draft.loadError = undefined;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_inbox_messages_actions__WEBPACK_IMPORTED_MODULE_1__.getError, (state, {
  error
}) => ({
  ...state,
  loading: false,
  loadError: error
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_inbox_messages_actions__WEBPACK_IMPORTED_MODULE_1__.deleteInboxMessage, state => ({
  ...state,
  loading: true
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_inbox_messages_actions__WEBPACK_IMPORTED_MODULE_1__.deleteInboxMessageSuccess, (state, {
  inboxMessagesEntries
}) => (0,immer__WEBPACK_IMPORTED_MODULE_2__.produce)(state, draft => {
  draft.inboxMessagesEntries = inboxMessagesEntries;
  draft.loading = false;
  draft.loadError = undefined;
})));
const unreadInboxMessagesReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createReducer)(unreadInboxMessagesInitialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_inbox_messages_actions__WEBPACK_IMPORTED_MODULE_1__.getUnreadInboxMessagesCount, state => ({
  ...state,
  loading: true
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_inbox_messages_actions__WEBPACK_IMPORTED_MODULE_1__.getUnreadInboxMessagesCountSuccess, (state, {
  unreadInboxMessagesCount
}) => (0,immer__WEBPACK_IMPORTED_MODULE_2__.produce)(state, draft => {
  draft.count = unreadInboxMessagesCount;
  draft.loading = false;
  draft.loadError = undefined;
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_inbox_messages_actions__WEBPACK_IMPORTED_MODULE_1__.getError, (state, {
  error
}) => ({
  ...state,
  loading: false,
  loadError: error
})));

/***/ }),

/***/ 21754:
/*!***********************************************************************************************!*\
  !*** ./libs/engagement/inbox-messages/data-access/src/lib/+state/inbox-messages.selectors.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectInboxMessages: () => (/* binding */ selectInboxMessages),
/* harmony export */   selectInboxMessagesState: () => (/* binding */ selectInboxMessagesState),
/* harmony export */   selectLoadError: () => (/* binding */ selectLoadError),
/* harmony export */   selectLoading: () => (/* binding */ selectLoading),
/* harmony export */   selectUnreadInboxMessagesCount: () => (/* binding */ selectUnreadInboxMessagesCount),
/* harmony export */   selectUnreadInboxMessagesCountState: () => (/* binding */ selectUnreadInboxMessagesCountState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);

const selectInboxMessagesState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)('inboxMessagesFeature');
const selectUnreadInboxMessagesCountState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)('unreadInboxMessagesFeature');
const selectInboxMessages = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectInboxMessagesState, state => state?.inboxMessagesEntries);
const selectLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectInboxMessagesState, state => state.loading);
const selectLoadError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectInboxMessagesState, state => state.loadError);
const selectUnreadInboxMessagesCount = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectUnreadInboxMessagesCountState, state => state?.count);

/***/ }),

/***/ 38313:
/*!**************************************************************************************************!*\
  !*** ./libs/engagement/inbox-messages/data-access/src/lib/entitities/inbox-message.interface.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 62317:
/*!**********************************************************************************************!*\
  !*** ./libs/engagement/inbox-messages/data-access/src/lib/entitities/inbox-messages.enum.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BadgeType: () => (/* binding */ BadgeType)
/* harmony export */ });
var BadgeType;
(function (BadgeType) {
  BadgeType[BadgeType["New"] = 0] = "New";
  BadgeType[BadgeType["Info"] = 1] = "Info";
})(BadgeType || (BadgeType = {}));

/***/ }),

/***/ 36581:
/*!********************************************************************************************!*\
  !*** ./libs/engagement/inbox-messages/data-access/src/lib/facade/inbox-messages.facade.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InboxMessagesFacade: () => (/* binding */ InboxMessagesFacade)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_inbox_messages_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../+state/inbox-messages.actions */ 46441);
/* harmony import */ var _state_inbox_messages_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../+state/inbox-messages.selectors */ 21754);
/* harmony import */ var _services_inbox_messages_datalayer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/inbox-messages-datalayer.service */ 55301);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);







class InboxMessagesFacade {
  constructor(store, inboxMessagesDatalayerService) {
    this.store = store;
    this.inboxMessagesDatalayerService = inboxMessagesDatalayerService;
    this.loading$ = this.store.select(_state_inbox_messages_selectors__WEBPACK_IMPORTED_MODULE_2__.selectLoading);
    this.loadError$ = this.store.select(_state_inbox_messages_selectors__WEBPACK_IMPORTED_MODULE_2__.selectLoadError);
    this.inboxMessages$ = this.store.select(_state_inbox_messages_selectors__WEBPACK_IMPORTED_MODULE_2__.selectInboxMessages);
    this.unreadInboxMessagesCount$ = this.store.select(_state_inbox_messages_selectors__WEBPACK_IMPORTED_MODULE_2__.selectUnreadInboxMessagesCount);
  }
  loadInboxMessages() {
    this.store.dispatch(_state_inbox_messages_actions__WEBPACK_IMPORTED_MODULE_1__.getInboxMessages());
  }
  loadUnreadInboxMessagesCount() {
    this.store.dispatch(_state_inbox_messages_actions__WEBPACK_IMPORTED_MODULE_1__.getUnreadInboxMessagesCount());
  }
  sendNotificationClickedEvent(url) {
    this.store.dispatch(_state_inbox_messages_actions__WEBPACK_IMPORTED_MODULE_1__.notificationClicked({
      url
    }));
  }
  sendInboxMessageClickedEvent(message) {
    this.store.dispatch(_state_inbox_messages_actions__WEBPACK_IMPORTED_MODULE_1__.inboxMessageClicked({
      message
    }));
  }
  deleteMessage(message) {
    this.store.dispatch(_state_inbox_messages_actions__WEBPACK_IMPORTED_MODULE_1__.deleteInboxMessage({
      message
    }));
  }
  initDataLayer() {
    this.inboxMessagesDatalayerService.initDataLayer();
  }
  static #_ = this.ɵfac = function InboxMessagesFacade_Factory(t) {
    return new (t || InboxMessagesFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_inbox_messages_datalayer_service__WEBPACK_IMPORTED_MODULE_3__.InboxMessagesDatalayerService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: InboxMessagesFacade,
    factory: InboxMessagesFacade.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 58123:
/*!*********************************************************************!*\
  !*** ./libs/engagement/inbox-messages/data-access/src/lib/index.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BadgeType: () => (/* reexport safe */ _entitities_inbox_messages_enum__WEBPACK_IMPORTED_MODULE_1__.BadgeType),
/* harmony export */   InboxMessagesFacade: () => (/* reexport safe */ _facade_inbox_messages_facade__WEBPACK_IMPORTED_MODULE_4__.InboxMessagesFacade),
/* harmony export */   InboxMessagesNgrxModule: () => (/* reexport safe */ _state_inbox_messages_ngrx_module__WEBPACK_IMPORTED_MODULE_3__.InboxMessagesNgrxModule),
/* harmony export */   InboxMessagesService: () => (/* reexport safe */ _services_inbox_messages_service__WEBPACK_IMPORTED_MODULE_2__.InboxMessagesService),
/* harmony export */   provideInboxMessagesDomain: () => (/* reexport safe */ _providers__WEBPACK_IMPORTED_MODULE_5__.provideInboxMessagesDomain)
/* harmony export */ });
/* harmony import */ var _entitities_inbox_message_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entitities/inbox-message.interface */ 38313);
/* harmony import */ var _entitities_inbox_messages_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entitities/inbox-messages.enum */ 62317);
/* harmony import */ var _services_inbox_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/inbox-messages.service */ 9454);
/* harmony import */ var _state_inbox_messages_ngrx_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./+state/inbox-messages-ngrx.module */ 13781);
/* harmony import */ var _facade_inbox_messages_facade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./facade/inbox-messages.facade */ 36581);
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./providers */ 6149);







/***/ }),

/***/ 26569:
/*!*********************************************************************************************!*\
  !*** ./libs/engagement/inbox-messages/data-access/src/lib/mappers/inbox-messages.mapper.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InboxMessagesMapper: () => (/* binding */ InboxMessagesMapper)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




class InboxMessagesMapper {
  constructor(translateService) {
    this.translateService = translateService;
  }
  toModel(rawInboxMessages) {
    const messages = rawInboxMessages.map(rawInboxMessage => this.mapToInboxMessage(rawInboxMessage));
    return {
      pinnedInboxMessages: this.filterPinnedMessages(messages),
      otherInboxMessages: this.filterOtherMessages(messages),
      unreadInboxMessages: this.filterUnreadMessages(messages)
    };
  }
  mapToInboxMessage(rawInboxMessage) {
    if (!rawInboxMessage || !rawInboxMessage.contents) return {};
    return {
      id: rawInboxMessage.id,
      seen: rawInboxMessage.seen,
      read: rawInboxMessage.read,
      pinned: rawInboxMessage.pinned,
      content: this.filterSelectedLanguageContent(rawInboxMessage.contents),
      messageAdded: rawInboxMessage.messageAdded
    };
  }
  filterSelectedLanguageContent(contents) {
    const currentLanguage = this.translateService.currentLang || _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__.LanguageEnum.NL;
    return contents.find(content => content?.lang?.toLowerCase() === currentLanguage) || {};
  }
  filterPinnedMessages(inboxMessages) {
    return inboxMessages.filter(inboxMessage => inboxMessage.pinned);
  }
  filterOtherMessages(inboxMessages) {
    return inboxMessages.filter(inboxMessage => !inboxMessage.pinned);
  }
  filterUnreadMessages(inboxMessages) {
    return inboxMessages.filter(inboxMessage => !inboxMessage.read);
  }
  static #_ = this.ɵfac = function InboxMessagesMapper_Factory(t) {
    return new (t || InboxMessagesMapper)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__.TranslateService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: InboxMessagesMapper,
    factory: InboxMessagesMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6149:
/*!*************************************************************************!*\
  !*** ./libs/engagement/inbox-messages/data-access/src/lib/providers.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   provideInboxMessagesDomain: () => (/* binding */ provideInboxMessagesDomain)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ 12506);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _state_inbox_messages_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./+state/inbox-messages.reducer */ 55658);
/* harmony import */ var _state_inbox_messages_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./+state/inbox-messages.effects */ 72794);





function provideInboxMessagesDomain() {
  return [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.importProvidersFrom)(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.StoreModule.forFeature('inboxMessagesFeature', _state_inbox_messages_reducer__WEBPACK_IMPORTED_MODULE_3__.inboxMessagesReducer)), (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.importProvidersFrom)(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.StoreModule.forFeature('unreadInboxMessagesFeature', _state_inbox_messages_reducer__WEBPACK_IMPORTED_MODULE_3__.unreadInboxMessagesReducer)), (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.importProvidersFrom)(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.EffectsModule.forFeature([_state_inbox_messages_effects__WEBPACK_IMPORTED_MODULE_4__.InboxMessagesEffects]))];
}

/***/ }),

/***/ 55301:
/*!*********************************************************************************************************!*\
  !*** ./libs/engagement/inbox-messages/data-access/src/lib/services/inbox-messages-datalayer.service.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InboxMessagesDatalayerService: () => (/* binding */ InboxMessagesDatalayerService)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-datalayer */ 42782);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);



class InboxMessagesDatalayerService {
  constructor(dataLayerServiceProvider, dataLayerService) {
    this.dataLayerServiceProvider = dataLayerServiceProvider;
    this.dataLayerService = dataLayerService;
    this.MESSAGE_GROUP = 'inbox-messages';
    this.PRIMARY_CATEGORY = 'general';
    this.NOTIFICATION_NAME = 'notification';
    this.NOTIFICATIONS_DATA = 'notifications';
    this.ITEM_GROUP_NEW_MESSAGES = 'new messages';
    this.ITEM_GROUP_NO_NEW_MESSAGES = 'no new messages';
    this.ITEM_GROUP_DELETE_MESSAGE = 'delete message';
    this.EVENT_NAME_HEADER_CLICKED = 'header clicked';
    this.EVENT_TYPE_CLICK = 'click';
    this.EVENT_NAME_NOTIFICATION_CARD = 'notification card';
    this.EVENT_TYPE_IMPRESSION = 'impression';
  }
  sendNotificationClickedEvent(url, unreadNotifications) {
    const {
      KEY_ITEM_NAME,
      KEY_ITEM_DATA,
      KEY_ITEM_GROUP,
      KEY_DESTINATION_URL
    } = _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__.AttributeEnum;
    const attributes = {
      [KEY_ITEM_NAME]: this.NOTIFICATION_NAME,
      [KEY_ITEM_DATA]: this.NOTIFICATIONS_DATA,
      [KEY_ITEM_GROUP]: unreadNotifications ? this.ITEM_GROUP_NEW_MESSAGES : this.ITEM_GROUP_NO_NEW_MESSAGES,
      [KEY_DESTINATION_URL]: url
    };
    return this.sendEventWithAttributes(this.EVENT_NAME_HEADER_CLICKED, this.EVENT_TYPE_CLICK, attributes);
  }
  sendInboxMessageClickedEvent(title, url, buttonText) {
    const {
      KEY_ITEM_NAME,
      KEY_ITEM_DATA,
      KEY_DESTINATION_URL
    } = _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__.AttributeEnum;
    const attributes = {
      [KEY_ITEM_NAME]: title,
      [KEY_ITEM_DATA]: buttonText,
      [KEY_DESTINATION_URL]: url
    };
    this.sendEventWithAttributes(this.EVENT_NAME_NOTIFICATION_CARD, this.EVENT_TYPE_CLICK, attributes);
  }
  sendInboxMessageDeleteEvent(id, title) {
    const {
      KEY_ITEM_NAME,
      KEY_ITEM_DATA,
      KEY_ITEM_GROUP
    } = _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__.AttributeEnum;
    const attributes = {
      [KEY_ITEM_NAME]: id,
      [KEY_ITEM_DATA]: title,
      [KEY_ITEM_GROUP]: this.ITEM_GROUP_DELETE_MESSAGE
    };
    this.sendEventWithAttributes(this.EVENT_NAME_NOTIFICATION_CARD, this.EVENT_TYPE_CLICK, attributes);
  }
  sendInboxMessageImpressionEvents(titles) {
    if (titles && titles.length > 0) {
      titles.forEach(title => {
        this.sendInboxMessageImpressionEvent(title);
      });
    }
  }
  sendInboxMessageImpressionEvent(title) {
    const {
      KEY_ITEM_NAME
    } = _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__.AttributeEnum;
    const attributes = {
      [KEY_ITEM_NAME]: title
    };
    this.sendEventWithAttributes(this.EVENT_NAME_NOTIFICATION_CARD, this.EVENT_TYPE_IMPRESSION, attributes);
  }
  sendEventWithAttributes(name, type, attributes) {
    const category = this.dataLayerService.createCategory(this.PRIMARY_CATEGORY, this.MESSAGE_GROUP);
    const eventInfo = this.dataLayerService.createEventInfo(name, type, [this.MESSAGE_GROUP]);
    return this.dataLayerService?.sendEvent({
      eventInfo,
      attributes,
      category
    });
  }
  initDataLayer() {
    this.dataLayerServiceProvider.init();
  }
  static #_ = this.ɵfac = function InboxMessagesDatalayerService_Factory(t) {
    return new (t || InboxMessagesDatalayerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__.DataLayerServiceProvider), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__.DataLayerService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: InboxMessagesDatalayerService,
    factory: InboxMessagesDatalayerService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 9454:
/*!***********************************************************************************************!*\
  !*** ./libs/engagement/inbox-messages/data-access/src/lib/services/inbox-messages.service.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InboxMessagesService: () => (/* binding */ InboxMessagesService)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-ocapi */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mappers_inbox_messages_mapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mappers/inbox-messages.mapper */ 26569);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);





class InboxMessagesService {
  constructor(ocapiService, inboxMessagesMapper) {
    this.ocapiService = ocapiService;
    this.inboxMessagesMapper = inboxMessagesMapper;
    this.MESSAGE_GROUP = 'inbox-messages';
    this.INBOX_MESSAGES_API_ENDPOINT = '/public/api/inbox-messages-service/v1/inbox-messages';
    this.ENDPOINT_UNREAD_AMOUNT = `${this.INBOX_MESSAGES_API_ENDPOINT}/unread/amount`;
    this.ENDPOINT_READ_MESSAGES = `${this.INBOX_MESSAGES_API_ENDPOINT}/read`;
  }
  getAllInboxMessages() {
    const ocapiCallConfig = new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiCallConfig(this.MESSAGE_GROUP, this.INBOX_MESSAGES_API_ENDPOINT, this.inboxMessagesMapper);
    return this.ocapiService.doGet(ocapiCallConfig);
  }
  getUnreadInboxMessagesCount() {
    const ocapiCallConfig = new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiCallConfig(this.MESSAGE_GROUP, this.ENDPOINT_UNREAD_AMOUNT);
    return this.ocapiService.doGet(ocapiCallConfig);
  }
  markMessagesAsReadByIds(ids) {
    const unreadMessagesMapper = {
      toModel: unreadMessagesResponse => unreadMessagesResponse?.status
    };
    const ocapiCallConfig = new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiCallConfig(this.MESSAGE_GROUP, this.ENDPOINT_READ_MESSAGES, unreadMessagesMapper, {
      ids
    });
    return this.ocapiService.doPut(ocapiCallConfig);
  }
  deleteMessageById(message) {
    const url = `${this.INBOX_MESSAGES_API_ENDPOINT}/${message.id}`;
    const ocapiCallConfig = new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiCallConfig(this.MESSAGE_GROUP, url);
    return this.ocapiService.doDelete(ocapiCallConfig);
  }
  static #_ = this.ɵfac = function InboxMessagesService_Factory(t) {
    return new (t || InboxMessagesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_mappers_inbox_messages_mapper__WEBPACK_IMPORTED_MODULE_1__.InboxMessagesMapper));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: InboxMessagesService,
    factory: InboxMessagesService.ɵfac,
    providedIn: 'root'
  });
}

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
//# sourceMappingURL=libs_engagement_inbox-messages_data-access_src_index_ts-_a3dd1.js.map