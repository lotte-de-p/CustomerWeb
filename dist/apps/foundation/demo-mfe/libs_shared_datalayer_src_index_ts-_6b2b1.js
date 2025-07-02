(self["webpackChunkdemo_mfe"] = self["webpackChunkdemo_mfe"] || []).push([["libs_shared_datalayer_src_index_ts-_6b2b1"],{

/***/ 68589:
/*!********************************************!*\
  !*** ./libs/shared/datalayer/src/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdobeAnalyticsDirective: () => (/* reexport safe */ _lib_datalayer__WEBPACK_IMPORTED_MODULE_0__.AdobeAnalyticsDirective),
/* harmony export */   AnalyticsConstants: () => (/* reexport safe */ _lib_datalayer__WEBPACK_IMPORTED_MODULE_0__.AnalyticsConstants),
/* harmony export */   AttributeEnum: () => (/* reexport safe */ _lib_datalayer__WEBPACK_IMPORTED_MODULE_0__.AttributeEnum),
/* harmony export */   DataLayerService: () => (/* reexport safe */ _lib_datalayer__WEBPACK_IMPORTED_MODULE_0__.DataLayerService),
/* harmony export */   DataLayerServiceProvider: () => (/* reexport safe */ _lib_datalayer__WEBPACK_IMPORTED_MODULE_0__.DataLayerServiceProvider),
/* harmony export */   DataLayerTransactionBuilder: () => (/* reexport safe */ _lib_datalayer__WEBPACK_IMPORTED_MODULE_0__.DataLayerTransactionBuilder),
/* harmony export */   DatalayerEventNames: () => (/* reexport safe */ _lib_datalayer__WEBPACK_IMPORTED_MODULE_0__.DatalayerEventNames),
/* harmony export */   EventCategoryEnum: () => (/* reexport safe */ _lib_datalayer__WEBPACK_IMPORTED_MODULE_0__.EventCategoryEnum),
/* harmony export */   EventNameEnum: () => (/* reexport safe */ _lib_datalayer__WEBPACK_IMPORTED_MODULE_0__.EventNameEnum),
/* harmony export */   EventStatusEnum: () => (/* reexport safe */ _lib_datalayer__WEBPACK_IMPORTED_MODULE_0__.EventStatusEnum),
/* harmony export */   EventTypeEnum: () => (/* reexport safe */ _lib_datalayer__WEBPACK_IMPORTED_MODULE_0__.EventTypeEnum),
/* harmony export */   EventTypes: () => (/* reexport safe */ _lib_datalayer__WEBPACK_IMPORTED_MODULE_0__.EventTypes),
/* harmony export */   dataLayerServiceProviderFactory: () => (/* reexport safe */ _lib_datalayer__WEBPACK_IMPORTED_MODULE_0__.dataLayerServiceProviderFactory)
/* harmony export */ });
/* harmony import */ var _lib_datalayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/datalayer */ 89762);


/***/ }),

/***/ 4809:
/*!*********************************************************************************!*\
  !*** ./libs/shared/datalayer/src/lib/datalayer/constants/anaytics.constants.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalyticsConstants: () => (/* binding */ AnalyticsConstants)
/* harmony export */ });
class AnalyticsConstants {
  static #_ = this.ATTRIBUTE_STEP_ID = 'stepId';
  static #_2 = this.ATTRIBUTES_INTENT = 'intent';
  static #_3 = this.ATTRIBUTES_FLOW_TYPE = 'flowType';
  static #_4 = this.INTENT_C5_CHECKOUT = 'C5 checkout';
  static #_5 = this.INTENT_AEM_SALES_FLOW = 'AEM sales flow';
  static #_6 = this.FLOW_TYPE_MARKETING = 'marketing';
  static #_7 = this.FLOW_TYPE_CARE = 'care';
  static #_8 = this.PRIMARY_CATEGORY_SALES = 'sales';
  static #_9 = this.PRIMARY_CATEGORY_CARE = 'care';
  static #_10 = this.LOGIN_PAGE_ID = 'checkout login page';
  static #_11 = this.PRICE = 'price';
  static #_12 = this.PRICE_EXCL_VAT = 'priceexclvat';
  static #_13 = this.ITEM_DATA_EASYSWITCH_TRUE = 'Cancellation: Easy Switch';
  static #_14 = this.ITEM_DATA_EASYSWITCH_FALSE = 'Cancellation: No Easy Switch';
  static #_15 = this.ITEM_NAME_ADDRESS_SELECTION_OTHER = 'Installation address: different address';
  static #_16 = this.ITEM_NAME_ADDRESS_SELECTION_CHANGED = 'Installation address changed';
  static #_17 = this.ITEM_NAME_ADDRESS_SELECTION_POSTAL_CODE = 'Postal Code';
  static #_18 = this.ITEM_NAME_EASYSWITCH_OPERATOR = 'Cancellation: Previous operator';
  static #_19 = this.ITEM_NAME_INSTALLATION = 'Installation';
  static #_20 = this.ITEM_NAME_CONNECTION_CABLE = 'Connection: Telenet cable';
  static #_21 = this.ITEM_NAME_FIXED_TELEPHONY_CHANGED = 'Fixed telephony changed';
  static #_22 = this.ITEM_NAME_WIFI_NETWORK_SETUP = 'wifi-network-setup';
  static #_23 = this.INTENT_MOVE_FLOW = 'Move flow';
  static #_24 = this.FLOW_TYPE_SELF_SERVICE = 'self-service';
  static #_25 = this.INTENT_CHANGE_MODEM_SETTINGS = 'change modem-settings';
  static #_26 = this.INTENT_RESET_MODEM_SETTINGS = 'reset-modem-settings';
  static #_27 = this.INTENT_REBOOT_MODEM = 'modem reboot';
  static #_28 = this.INTENT_UNLOCK_SETTINGS = 'unlock settings';
  static #_29 = this.INTENT_ACTIVATE_SIM = 'activate-sim';
  static #_30 = this.STEP_ACTIVATE_SIM_OVERLAY = 'activate-sim-overlay';
  static #_31 = this.CATEGORY_FLEET = 'fleet';
  static #_32 = this.SUB_CATEGORY_SIM_CARD = 'sim-card';
  static #_33 = this.EVENT_NAME_SIM_ACTIVATION_START = 'sim activation started';
  static #_34 = this.EVENT_NAME_SIM_ACTIVATED = 'sim activated';
  static #_35 = this.EVENT_TYPE_SELF_SERVICE_FLOW_START = 'self-service-flow-start';
  static #_36 = this.EVENT_TYPE_SELF_SERVICE_FLOW_END = 'self-service-flow-end';
  static #_37 = this.PRIMARY_CATEGORY_GENERAL = 'general';
}

/***/ }),

/***/ 6162:
/*!**********************************************************************!*\
  !*** ./libs/shared/datalayer/src/lib/datalayer/datalayer.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataLayerService: () => (/* binding */ DataLayerService)
/* harmony export */ });
/* harmony import */ var udl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! udl */ 63975);
/* harmony import */ var udl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(udl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _enums_event_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums/event-type.enum */ 61776);
/* harmony import */ var _enums_event_name_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enums/event-name.enum */ 57006);
/* harmony import */ var _enums_event_status_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enums/event-status.enum */ 54204);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @telenet/ng-lib-message */ 65145);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_7__);









class DataLayerService {
  constructor(messageService, window) {
    this.messageService = messageService;
    this.window = window;
  }
  init() {
    const udlObjectName = this.window['udlObjectName'];
    this.dataLayer = udl__WEBPACK_IMPORTED_MODULE_0__.DataLayer.create();
    if (this.window[udlObjectName] && udlObjectName) {
      let componentList = this.dataLayer.getComponents();
      if (componentList && componentList.length > 0) {
        componentList = componentList.map(function (componentItem) {
          return new udl__WEBPACK_IMPORTED_MODULE_0__.Component(componentItem);
        });
      }
      this.dataLayer.setComponents(componentList);
    }
    return true;
  }
  getDataLayer() {
    return this.dataLayer;
  }
  setPage(page) {
    if (this.dataLayer) {
      return this.dataLayer.setPage(page);
    }
    return new Promise(() => false);
  }
  getCategory(componentInstanceId) {
    if (this.dataLayer) {
      return this.dataLayer.getCategory(componentInstanceId);
    }
    return null;
  }
  createCategory(primaryCategory = '', subCategory1) {
    const category = new udl__WEBPACK_IMPORTED_MODULE_0__.Category();
    category.setPrimaryCategory(primaryCategory);
    if (subCategory1) {
      category.setSubCategory1(subCategory1);
    }
    return category;
  }
  addPageEvent(pageId, attributes) {
    const pageInfoObject = new udl__WEBPACK_IMPORTED_MODULE_0__.PageInfo();
    pageInfoObject.setPageID(pageId);
    pageInfoObject.setPageName(pageId);
    pageInfoObject.setLanguage(this.dataLayer.getPage().getPageInfo().getLanguage());
    const page = new udl__WEBPACK_IMPORTED_MODULE_0__.Page({
      pageInfo: pageInfoObject
    });
    if (attributes) {
      Object.keys(attributes).forEach(key => page.addAttribute(key, attributes[key]));
    }
    this.setPage(page).then();
  }
  addStepViewEvent(attributes) {
    const event = new udl__WEBPACK_IMPORTED_MODULE_0__.Event();
    const eventInfo = this.createEventInfo(_enums_event_name_enum__WEBPACK_IMPORTED_MODULE_2__.EventNameEnum.EVENT_NAME_VIEW_STEP);
    event.setEventInfo(eventInfo);
    event.setAttributes(attributes);
    if (this.dataLayer) {
      return this.dataLayer.addStepViewEvent(event);
    }
    return new Promise(() => false);
  }
  createEvent(eventProperties) {
    const {
      eventInfo,
      attributes,
      strategy,
      category,
      directCallLabel
    } = eventProperties;
    const event = new udl__WEBPACK_IMPORTED_MODULE_0__.Event();
    event.setEventInfo(eventInfo);
    event.setAttributes(attributes);
    if (strategy) {
      event.setStrategy(strategy);
    }
    if (category) {
      event.setCategory(category);
    }
    if (directCallLabel) {
      event.setDirectCallLabel(directCallLabel);
    }
    return event;
  }
  sendEvent(eventProperties) {
    const event = this.createEvent(eventProperties);
    if (this.dataLayer) {
      return this.dataLayer.addEvent(event);
    }
    return new Promise(() => false);
  }
  addEvent(eventInfo, attributes, category, directCallLabel) {
    const event = new udl__WEBPACK_IMPORTED_MODULE_0__.Event();
    event.setEventInfo(eventInfo);
    event.setAttributes(attributes);
    if (category) {
      event.setCategory(category);
    }
    if (directCallLabel) {
      event.setDirectCallLabel(directCallLabel);
    }
    if (this.dataLayer) {
      return this.dataLayer.addEvent(event);
    }
    return new Promise(() => false);
  }
  addStepLoadTimeEvent(attributes) {
    const eventInfo = this.createEventInfo(_enums_event_name_enum__WEBPACK_IMPORTED_MODULE_2__.EventNameEnum.EVENT_NAME_STEP_LOAD_TIME, _enums_event_type_enum__WEBPACK_IMPORTED_MODULE_1__.EventTypeEnum.EVENT_TYPE_STEP_LOAD_TIME);
    return this.addEvent(eventInfo, attributes);
  }
  setCart(cart) {
    if (this.dataLayer) {
      return this.dataLayer.setCart(cart);
    }
    return new Promise(() => false);
  }
  getCart() {
    if (this.dataLayer) {
      return this.dataLayer.getCart();
    }
    return null;
  }
  createEventInfo(eventName, eventType, messageGroups) {
    const eventInfo = new udl__WEBPACK_IMPORTED_MODULE_0__.EventInfo();
    eventInfo.setEventName(eventName);
    eventInfo.setType(eventType ?? '');
    eventInfo.setEventStatus(this.getStatus(messageGroups?.length ? messageGroups : []));
    eventInfo.setEventStatusMessage(this.getStatusMessage(messageGroups?.length ? messageGroups : []));
    return eventInfo;
  }
  createCart(cartId, price) {
    const cart = new udl__WEBPACK_IMPORTED_MODULE_0__.Cart();
    cart.setCartID(cartId);
    cart.setPrice(price ?? new udl__WEBPACK_IMPORTED_MODULE_0__.Price());
    return cart;
  }
  createTransaction(transactionId, price) {
    const transaction = new udl__WEBPACK_IMPORTED_MODULE_0__.Transaction();
    transaction.setTransactionID(transactionId);
    transaction.setPrice(price);
    return transaction;
  }
  setTransaction(transaction) {
    if (this.dataLayer) {
      return this.dataLayer.setTransaction(transaction);
    }
    return new Promise(() => false);
  }
  createPrice(oneTimePrice, recurringPrice, basePrice, totalPrice, discountedPrice) {
    const price = new udl__WEBPACK_IMPORTED_MODULE_0__.Price();
    price.setOnetimePrice(oneTimePrice ?? 0);
    price.setRecurringPrice(recurringPrice ?? 0);
    price.setBasePrice(basePrice ?? new udl__WEBPACK_IMPORTED_MODULE_0__.Price());
    price.setTotalPrice(totalPrice ?? new udl__WEBPACK_IMPORTED_MODULE_0__.Price());
    price.setDiscountedPrice(discountedPrice ?? new udl__WEBPACK_IMPORTED_MODULE_0__.Price());
    return price;
  }
  createProductInfo(productId, productName, productType, productStatus) {
    const product = new udl__WEBPACK_IMPORTED_MODULE_0__.Product();
    product.setProductID(productId);
    product.setProductName(productName ?? '');
    product.setProductType(productType ?? '');
    product.setProductStatus(productStatus ?? '');
    return product;
  }
  createItem(productInfo, price, quantity) {
    const item = new udl__WEBPACK_IMPORTED_MODULE_0__.Item();
    item.setProductInfo(productInfo);
    item.setPrice(price ?? new udl__WEBPACK_IMPORTED_MODULE_0__.Price());
    item.setQuantity(quantity ?? 0);
    return item;
  }
  getStatus(messageGroups) {
    if (messageGroups?.length) {
      for (const messageGroup of messageGroups) {
        if (this.messageService.hasErrorMessages(messageGroup)) {
          return _enums_event_status_enum__WEBPACK_IMPORTED_MODULE_3__.EventStatusEnum.EVENT_STATUS_FAILED;
        }
      }
      return _enums_event_status_enum__WEBPACK_IMPORTED_MODULE_3__.EventStatusEnum.EVENT_STATUS_SUCCESS;
    }
    return _enums_event_status_enum__WEBPACK_IMPORTED_MODULE_3__.EventStatusEnum.EVENT_STATUS_MESSAGE_EMPTY;
  }
  getStatusMessage(messageGroups) {
    let statusMessages = '';
    let messagesFromMessageService = [];
    if (messageGroups?.length) {
      for (const messageGroup of messageGroups) {
        if (this.messageService.hasErrorMessages(messageGroup)) {
          messagesFromMessageService = messagesFromMessageService.concat(this.messageService.getErrorMessages(messageGroup));
        }
      }
      messagesFromMessageService = messagesFromMessageService.filter(msg => msg.type !== 'success');
      statusMessages = messagesFromMessageService.map(msg => msg['_key']).join(',');
    }
    return statusMessages;
  }
  getAnalyticsPromises() {
    if (this.dataLayer) {
      return this.dataLayer.getAnalyticsPromises();
    }
    return [];
  }
  rollbackStepIdToParent(stepId) {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.timer)(100).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mergeMap)(() => {
      const analyticsPromises = this.getAnalyticsPromises();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.forkJoin)(analyticsPromises);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this.getDataLayer().getPage().getPageInfo().setStepId(stepId))).subscribe();
  }
  static #_ = this.ɵfac = function DataLayerService_Factory(t) {
    return new (t || DataLayerService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_4__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"]('Window'));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
    token: DataLayerService,
    factory: DataLayerService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 64992:
/*!*************************************************************************!*\
  !*** ./libs/shared/datalayer/src/lib/datalayer/enums/attribute.enum.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AttributeEnum: () => (/* binding */ AttributeEnum)
/* harmony export */ });
var AttributeEnum;
(function (AttributeEnum) {
  AttributeEnum["KEY_ITEM_DATA"] = "itemData";
  AttributeEnum["KEY_ITEM_NAME"] = "itemName";
  AttributeEnum["KEY_ITEM_GROUP"] = "itemGroup";
  AttributeEnum["KEY_DESTINATION_URL"] = "destinationURL";
  AttributeEnum["KEY_PEGA_OUTCOME"] = "pega_outcome";
  AttributeEnum["KEY_APPEND_STEP_ID"] = "appendStepId";
})(AttributeEnum || (AttributeEnum = {}));

/***/ }),

/***/ 38529:
/*!*************************************************************************************!*\
  !*** ./libs/shared/datalayer/src/lib/datalayer/enums/datalayer-event-names.enum.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DatalayerEventNames: () => (/* binding */ DatalayerEventNames)
/* harmony export */ });
var DatalayerEventNames;
(function (DatalayerEventNames) {
  DatalayerEventNames["MOVE_FLOW_STARTED"] = "move-flow started";
  DatalayerEventNames["MOVE_FLOW_COMPLETED"] = "move-flow completed";
  DatalayerEventNames["OPTION_SELECTED"] = "option selected";
  DatalayerEventNames["OPTION_CHOSEN"] = "option chosen";
  DatalayerEventNames["LINK_CLICKED"] = "link clicked";
  DatalayerEventNames["BUTTON_CLICKED"] = "button clicked";
  DatalayerEventNames["CTA_BUTTON_CLICKED"] = "cta-button clicked";
  DatalayerEventNames["CHAT_REQUESTED"] = "chat requested";
  DatalayerEventNames["CHAT_WAITING"] = "chat waiting";
  DatalayerEventNames["CHAT_STARTED"] = "chat started";
  DatalayerEventNames["CHAT_ENDED"] = "chat ended";
  DatalayerEventNames["CONTACT_OPTIONS_POPUP_VIEW"] = "contact options popup view";
  DatalayerEventNames["CONTACT_OPTIONS_POPUP_CLICK"] = "contact options popup click";
  DatalayerEventNames["CONTACT_OPTION_VIEW"] = "contact option view";
  DatalayerEventNames["CONTACT_OPTION_CLICK"] = "contact option click";
  DatalayerEventNames["SELF_INSTALL_OPTION_VIEWED"] = "self-install option viewed";
  DatalayerEventNames["FORM_FIELD_COMPLETED"] = "form field completed";
  DatalayerEventNames["MOBILE_NUMBERS_ADDED"] = "mobile numbers added";
})(DatalayerEventNames || (DatalayerEventNames = {}));

/***/ }),

/***/ 85023:
/*!*************************************************************************************!*\
  !*** ./libs/shared/datalayer/src/lib/datalayer/enums/datalayer-event-types.enum.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventTypes: () => (/* binding */ EventTypes)
/* harmony export */ });
var EventTypes;
(function (EventTypes) {
  EventTypes["SELF_SERVICE_FLOW_STARTED"] = "self-service-flow-start";
  EventTypes["SELF_SERVICE_FLOW_END"] = "self-service-flow-end";
  EventTypes["OPTION_CLICK"] = "option-click";
  EventTypes["LINK_CLICK"] = "link-click";
  EventTypes["CHAT_REQUEST"] = "chat-request";
  EventTypes["CHAT_WAIT"] = "chat-wait";
  EventTypes["CHAT_START"] = "chat-start";
  EventTypes["CHAT_END"] = "chat-end";
  EventTypes["CONTACT_OPTIONS_POPUP_VIEW"] = "pop-up-view";
  EventTypes["CONTACT_OPTIONS_POPUP_CLICK"] = "pop-up-click";
  EventTypes["CONTACT_OPTION_VIEW"] = "contact-option-view";
  EventTypes["CONTACT_OPTION_CLICK"] = "button-click";
  EventTypes["SELF_INSTALL_VIEW"] = "view-notification";
  EventTypes["CLICK"] = "click";
})(EventTypes || (EventTypes = {}));

/***/ }),

/***/ 49768:
/*!******************************************************************************!*\
  !*** ./libs/shared/datalayer/src/lib/datalayer/enums/event-category.enum.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventCategoryEnum: () => (/* binding */ EventCategoryEnum)
/* harmony export */ });
var EventCategoryEnum;
(function (EventCategoryEnum) {
  EventCategoryEnum["PRIMARY_CATEGORY_SALES"] = "sales";
  EventCategoryEnum["PRIMARY_CATEGORY_CARE"] = "care";
  EventCategoryEnum["PRIMARY_CATEGORY_GENERAL"] = "general";
  EventCategoryEnum["PRIMARY_CATEGORY_TIP"] = "tip";
  EventCategoryEnum["PRIMARY_CATEGORY_CONTAINER"] = "container";
  EventCategoryEnum["SUBCATEGORY_PRODUCT_HOLDING"] = "product holding";
  EventCategoryEnum["SUBCATEGORY_CONTACT"] = "contact";
  EventCategoryEnum["SUBCATEGORY_EMPTY"] = "";
  EventCategoryEnum["SUBCATEGORY_HOMENETWORK"] = "home-network";
})(EventCategoryEnum || (EventCategoryEnum = {}));

/***/ }),

/***/ 57006:
/*!**************************************************************************!*\
  !*** ./libs/shared/datalayer/src/lib/datalayer/enums/event-name.enum.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventNameEnum: () => (/* binding */ EventNameEnum)
/* harmony export */ });
var EventNameEnum;
(function (EventNameEnum) {
  EventNameEnum["EVENT_NAME_VIEW_PRODUCT_DETAILS"] = "product details viewed";
  EventNameEnum["EVENT_NAME_SELECT_NEW_PRODUCT"] = "new product selected";
  EventNameEnum["EVENT_NAME_VIEW_PRODUCT_HOLDING"] = "product holdings viewed";
  EventNameEnum["EVENT_NAME_SELECT_OWN_PRODUCT"] = "owned product selected";
  EventNameEnum["EVENT_NAME_START_SALES_FLOW"] = "sales flow started";
  EventNameEnum["EVENT_NAME_END_SALES_FLOW"] = "sales flow ended";
  EventNameEnum["EVENT_NAME_SUBMIT_ORDER"] = "order submitted";
  EventNameEnum["EVENT_NAME_VIEW_PAGE"] = "pageview";
  EventNameEnum["EVENT_NAME_VIEW_STEP"] = "step viewed";
  EventNameEnum["EVENT_NAME_SELECT_NEW_LINE"] = "new line selected";
  EventNameEnum["EVENT_NAME_SELECT_NEW_OPTION"] = "new option selected";
  EventNameEnum["EVENT_NAME_REMOVE_OPTION"] = "option removed";
  EventNameEnum["EVENT_NAME_REMOVE_MUTUALLY_EXCLUSIVE_OPTION"] = "mutually exclusive option removed";
  EventNameEnum["EVENT_NAME_ERROR_OCCURRED"] = "error occurred";
  EventNameEnum["EVENT_NAME_CHECK_ELIGIBILITY"] = "eligibility checked";
  EventNameEnum["EVENT_NAME_OUT_OF_BUNDLE_CONSULTED"] = "out of bundle usage consulted";
  EventNameEnum["EVENT_NAME_BUTTON_CLICKED"] = "button clicked";
  EventNameEnum["EVENT_NAME_CONTRACT_SUMMARY_CLICKED"] = "contract summary link clicked";
  EventNameEnum["EVENT_NAME_STEP_LOAD_TIME"] = "step load time";
  EventNameEnum["EVENT_NAME_CART_OPENED"] = "cart opened";
  EventNameEnum["EVENT_NAME_PRODUCT_REMOVED"] = "product removed";
  EventNameEnum["EVENT_NAME_PRODUCT_ADDED"] = "product added";
  EventNameEnum["EVENT_NAME_SALES_FLOW_STARTED"] = "sales flow started";
  EventNameEnum["EVENT_NAME_CONTACT_DETAILS_CHANGED"] = "contact details changed";
  EventNameEnum["EVENT_NAME_ADDRESS_DETAILS_CHANGED"] = "address details changed";
  EventNameEnum["EVENT_NAME_ORDER_SUBMITTED"] = "order submitted";
  EventNameEnum["EVENT_NAME_SAVE_ORDER_CLICKED"] = "save order link clicked";
  EventNameEnum["EVENT_NAME_MOBILE_USAGE_LIMITS_CHANGED"] = "mobile usage limits changed";
  EventNameEnum["EVENT_NAME_RESCHEDULE_APPOINTMENT_FLOW_STARTED"] = "reschedule appointment flow started";
  EventNameEnum["EVENT_NAME_RESCHEDULE_APPOINTMENT_FLOW_COMPLETED"] = "reschedule appointment flow completed";
  EventNameEnum["EVENT_NAME_CANCEL_APPOINTMENT"] = "cancel appointment";
  EventNameEnum["EVENT_NAME_APPOINTMENT_OPTION_SELECTED"] = "option selected";
  EventNameEnum["EVENT_NAME_LINK_CLICKED"] = "link clicked";
  EventNameEnum["EVENT_NAME_LOGIN"] = "redirected to login";
  EventNameEnum["EVENT_NAME_REGISTER"] = "redirected to registration";
  EventNameEnum["EVENT_NAME_MOBILE_USAGE"] = "mobile usage";
  EventNameEnum["EVENT_NAME_EXISTING_ADDRESS_SELECTED"] = "existing address selected";
  EventNameEnum["EVENT_NAME_NEW_ADDRESS_OPTION_SELECTED"] = "new address option selected";
  EventNameEnum["EVENT_NAME_NEW_ADDRESS_SELECTED"] = "new address saved";
  EventNameEnum["EVENT_NAME_NEW_ADDRESS_CANCELED"] = "new address canceled";
  EventNameEnum["EVENT_NAME_CONTINUE_BUTTON_CLICKED"] = "continue button clicked";
  EventNameEnum["EVENT_NAME_NAVIGATED_TO_NEXT_STEP"] = "navigated to next step";
  EventNameEnum["EVENT_NAME_VIEW_INSTALLATION_TYPE"] = "installation type viewed";
  EventNameEnum["EVENT_INSTALLATION_TYPE_SELECTED"] = "installation type selected";
  EventNameEnum["EVENT_NAME_CHEVRON_FEATUE_LINK_CLICKED"] = "featured included link clicked";
  EventNameEnum["EVENT_NAME_MOBILE_USAGE_PAUSED"] = "mobile usage paused";
  EventNameEnum["EVENT_NAME_MOBILE_USAGE_UNPAUSED"] = "mobile usage unpaused";
  EventNameEnum["EVENT_NAME_EASY_SWITCH_OPTION_SELECTED"] = "easy switch option selected";
  EventNameEnum["EVENT_NAME_MULTIPLE_OPERATOR_CHOICE_SELECTED"] = "multiple operator choice selected";
  EventNameEnum["EVENT_NAME_I_WILL_DO_IT_LATER_SELECTED"] = "I will do it later option selected for product";
  EventNameEnum["EVENT_NAME_EASY_SWITCH_SELECTED"] = "easy switch option selected for product";
  EventNameEnum["EVENT_NAME_CURRENT_PROVIDER_CLICKED"] = "current provider option clicked";
  EventNameEnum["EVENT_NAME_CURRENT_PROVIDER_SELECTED"] = "current provider selected";
  EventNameEnum["EVENT_NAME_APPOINTMENT_BY_DATE_OPTION_SELECTED"] = "appointment by date option selected";
  EventNameEnum["EVENT_NAME_APPOINTMENT_BY_TIME_OPTION_SELECTED"] = "appointment by time option selected";
  EventNameEnum["EVENT_NAME_OTHER_TIME_SLOTS_LOADED"] = "other time slots loaded";
  EventNameEnum["EVENT_NAME_EARLIEST_AVAILABLE_APPOINTMENT"] = "earliest available appointment";
  EventNameEnum["EVENT_NAME_CHANGE_ADDRESS_OPTION_SELECTED"] = "change address option selected";
  EventNameEnum["EVENT_NAME_CHANGE_ADDRESS_CANCELLED"] = "change address cancelled";
  EventNameEnum["EVENT_NAME_CHANGE_ADDRESS_SAVED"] = "change address saved";
  EventNameEnum["EVENT_NAME_PHONE_NUMBER_UPDATED"] = "phone number updated";
  EventNameEnum["EVENT_NAME_GET_AVAILABLE_MOBILE_LINES"] = "available mobile lines";
  EventNameEnum["EVENT_NAME_MANAGE_TIP_STARTED"] = "manage-tip started";
  EventNameEnum["EVENT_NAME_MANAGE_TIP_COMPLETED"] = "manage-tip completed";
  EventNameEnum["EVENT_NAME_NEW_BUNDLE_LINE_CONFIGURATION_VIEWED"] = "new bundle line configuration viewed";
  EventNameEnum["EVENT_NAME_SIM_ACCORDION_EXPANDED"] = "sim accordion expanded";
  EventNameEnum["EVENT_NAME_SIM_CONFIGURATION_SELECTED"] = "sim configuration selected";
  EventNameEnum["EVENT_NAME_SIM_CONFIGURATION_SAVED"] = "sim configuration saved";
  EventNameEnum["EVENT_NAME_MOBILE_LINES_TO_TERMINATE"] = "mobile lines to terminate";
  EventNameEnum["EVENT_NAME_EDIT_LINK_CLICKED"] = "sim configuration edit";
  EventNameEnum["EVENT_NAME_FIXED_LINE_SELECTED"] = "fixed line selected";
  EventNameEnum["EVENT_NAME_STANDALONE_CONFIGURATION_SELECTED"] = "standalone configuration selected";
  EventNameEnum["EVENT_NAME_BILLING_ADDRESS_LINK_CLICKED"] = "change billing address link  clicked";
  EventNameEnum["EVENT_NAME_INSTALLATION_ADDRESS"] = "change installation address link clicked";
  EventNameEnum["EVENT_NAME_INSTALLATION_TYPE"] = "change installation type link clicked";
  EventNameEnum["EVENT_NAME_PERSONAL_DETAILS_LINK_CLICKED"] = "change personal detail link  clicked";
  EventNameEnum["EVENT_NAME_DEPRECIATION_TABLE"] = "show depreciation table for {{product}}";
  EventNameEnum["EVENT_NAME_COUPON_CODE_BUTTON_CLICKED"] = "coupon code button clicked";
  EventNameEnum["EVENT_NAME_COUPON_CODE_APPLIED_SUCCESSFULLY"] = "coupon code applied successfully";
  EventNameEnum["EVENT_NAME_ORDER_BUTTON_CLICKED"] = "order button clicked";
  EventNameEnum["EVENT_NAME_SAVE_ORDER_BUTTON_CLICKED"] = "save order button clicked";
  EventNameEnum["EVENT_NAME_SUBMIT_ORDER_BUTTON_CLICKED"] = "submit order button clicked";
  EventNameEnum["EVENT_NAME_REDIRECTED_TO_PAYMENT_GATEWAY"] = "redirected to payment gateway";
  EventNameEnum["EVENT_NAME_PAYMENT_INITIATED"] = "payment initiated";
  EventNameEnum["EVENT_NAME_COUPON_CODE_REMOVED"] = "coupon code removed";
  EventNameEnum["EVENT_NAME_TERMS_CONDITION_CLICKED"] = "Terms and Conditions link clicked";
  EventNameEnum["EVENT_NAME_TERMINATE_EXISTING_CONTRACT_SELECTED"] = "terminate existing contract selected";
  EventNameEnum["EVENT_NAME_APPLY_BUTTON_CLICKED"] = "apply button clicked";
  EventNameEnum["EVENT_NAME_CANCEL_BUTTON_CLICKED"] = "cancel button clicked";
  EventNameEnum["EVENT_NAME_PRODUCT_CANCELLED"] = "product cancelled";
  EventNameEnum["EVENT_NAME_ENABLE_DISCOUNT_LINK_CLICKED"] = "enable discount link clicked";
  EventNameEnum["EVENT_NAME_NEW_OPERATOR_INSTALLATION_ADDRESS_SELECTED"] = "new operator installation address selected";
  EventNameEnum["EVENT_NAME_APPLY_MOVE_BUTTON_CLICKED"] = "apply for move button clicked";
  EventNameEnum["EVENT_NAME_MOVE_SAVE_BUTTON_CLICKED"] = "move address saved";
  EventNameEnum["EVENT_NAME_MOVE_ZIP_CODE"] = "zip code for move address selected";
  EventNameEnum["EVENT_NAME_INSTALLATION_TYPE_CLICKED"] = "installation type clicked";
  EventNameEnum["EVENT_NAME_DELIVERY_ADDRESS_UPDATED"] = "delivery address updated";
  EventNameEnum["EVENT_NAME_CONTACT_UPDATED"] = "contact updated";
  EventNameEnum["EVENT_NAME_CANCEL_SIM_CONFIGURATION_CLICKED"] = "sim configuration cancelled";
  EventNameEnum["EVENT_NAME_RESTRICTED_PRODUCT_DISCLAIMER_SHOWN"] = "restricted product disclaimer shown";
  EventNameEnum["EVENT_NAME_BILLING_ADDRESS_NOT_UPDATED"] = "billing address is not changed";
  EventNameEnum["EVENT_NAME_BILLING_ADDRESS_UPDATED"] = "biling address updated";
  EventNameEnum["EVENT_NAME_PERSONAL_INFO_NOT_CHANGED"] = "personal info is not changed";
  EventNameEnum["EVENT_NAME_PERSONAL_INFO_UPDATED"] = "personal info is updated";
  EventNameEnum["EVENT_NAME_REDIRECTED_TO_INSTALLATION_LOCATION_STEP"] = "redirected to installation location step";
  EventNameEnum["EVENT_NAME_INSTALLATION_ADDRESS_NOT_CHANGED"] = "installation address not changed";
  EventNameEnum["EVENT_NAME_INSTALLATION_TYPE_NOT_CHANGED"] = "installation type not changed";
  EventNameEnum["EVENT_NAME_REDIRECTED_TO_RESERVE_APPOINTMENT_STEP"] = "redirected to reserve appointment step";
  EventNameEnum["EVENT_NAME_REDIRECTED_TO_INSTALLATION_TPE_STEP"] = "redirected to installation type step";
  EventNameEnum["EVENT_NAME_APPLY_COUPON_CODE_FAILED"] = "apply coupon failed";
  EventNameEnum["EVENT_NAME_CHANGE_SHIPPING_ADDRESS_LINK_CLICKED"] = "change shipping address link clicked";
  EventNameEnum["EVENT_NAME_SHIPPING_ADDRESS_UPDATED"] = "shipping address is updated";
  EventNameEnum["EVENT_NAME_SHIPPING_ADDRESS_NOT_CHANGED"] = "shipping address not changed";
  EventNameEnum["EVENT_NAME_EASY_SWITCH_AVAILABLE_OPTION_SELECTED"] = "easyswitch available option clicked";
  EventNameEnum["EVENT_NAME_EASY_SWITCH_TV_OPTION"] = "tv option clicked";
  EventNameEnum["EVENT_NAME_EASY_SWITCH_TV_INTERNET_OPTION"] = "internet and tv option clicked";
  EventNameEnum["EVENT_NAME_START_DATE_OPTION"] = "start date option clicked";
  EventNameEnum["EVENT_NAME_START_DATE_OPTION_MESSAGE"] = "start date option message viewed";
})(EventNameEnum || (EventNameEnum = {}));

/***/ }),

/***/ 54204:
/*!****************************************************************************!*\
  !*** ./libs/shared/datalayer/src/lib/datalayer/enums/event-status.enum.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventStatusEnum: () => (/* binding */ EventStatusEnum)
/* harmony export */ });
var EventStatusEnum;
(function (EventStatusEnum) {
  EventStatusEnum["EVENT_STATUS_FAILED"] = "failed";
  EventStatusEnum["EVENT_STATUS_SUCCESS"] = "success";
  EventStatusEnum["EVENT_STATUS_MESSAGE_EMPTY"] = "";
})(EventStatusEnum || (EventStatusEnum = {}));

/***/ }),

/***/ 61776:
/*!**************************************************************************!*\
  !*** ./libs/shared/datalayer/src/lib/datalayer/enums/event-type.enum.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventTypeEnum: () => (/* binding */ EventTypeEnum)
/* harmony export */ });
var EventTypeEnum;
(function (EventTypeEnum) {
  EventTypeEnum["EVENT_TYPE_ERROR"] = "error";
  EventTypeEnum["EVENT_TYPE_CLICK"] = "click";
  EventTypeEnum["EVENT_TYPE_CLICK_CARD"] = "click-card";
  EventTypeEnum["EVENT_TYPE_SALES_FLOW_START"] = "sales-flow-start";
  EventTypeEnum["EVENT_TYPE_SALES_FLOW_END"] = "sales-flow-end";
  EventTypeEnum["EVENT_TYPE_SC_ADD"] = "sc-add";
  EventTypeEnum["EVENT_TYPE_SC_OPEN"] = "sc-open";
  EventTypeEnum["EVENT_TYPE_SC_REMOVE"] = "sc-remove";
  EventTypeEnum["EVENT_TYPE_SC_CANCEL"] = "sc-cancel";
  EventTypeEnum["EVENT_TYPE_SC_ADD_ERROR"] = "sc-add + error";
  EventTypeEnum["EVENT_TYPE_SC_REMOVE_ERROR"] = "sc-remove + error";
  EventTypeEnum["EVENT_TYPE_VIEW_PRODUCT_DETAILS"] = "view-product-details";
  EventTypeEnum["EVENT_TYPE_VIEW_MOBILE_USAGE"] = "view-mobile-usage";
  EventTypeEnum["EVENT_TYPE_STEP_LOAD_TIME"] = "step-load-time";
  EventTypeEnum["EVENT_TYPE_ONSITE_SEARCH_CLICK"] = "on-site-search-click";
  EventTypeEnum["EVENT_TYPE_ONSITE_SEARCH"] = "on-site-search";
  EventTypeEnum["EVENT_TYPE_IMPRESSION"] = "impression";
  EventTypeEnum["EVENT_TYPE_BUTTON_CLICK"] = "button-click";
  EventTypeEnum["EVENT_TYPE_CH_STORE"] = "context-hub-store";
  EventTypeEnum["EVENT_TYPE_SELF_SERVICE_FLOW_STARTED"] = "self-service-flow-start";
  EventTypeEnum["EVENT_TYPE_SELF_SERVICE_FLOW_END"] = "self-service-flow-end";
  EventTypeEnum["EVENT_TYPE_VIEW_BANNER"] = "view-banner";
  EventTypeEnum["EVENT_TYPE_VIEWED_PAGE"] = "viewed-page";
  EventTypeEnum["EVENT_TYPE_BILLING_INFO"] = "change-billing-info";
  EventTypeEnum["EVENT_TYPE_INSTALLATION_ADDRESS"] = "change-installation-address";
  EventTypeEnum["EVENT_TYPE_INFO_CARD"] = "change-installation-type-info-card";
  EventTypeEnum["EVENT_TYPE_PERSONAL_INFO"] = "change-personal-info";
  EventTypeEnum["EVENT_TYPE_PRE_ORDER"] = "pre-order";
  EventTypeEnum["EVENT_TYPE_PURCHASE"] = "purchase";
})(EventTypeEnum || (EventTypeEnum = {}));

/***/ }),

/***/ 89762:
/*!**********************************************************!*\
  !*** ./libs/shared/datalayer/src/lib/datalayer/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdobeAnalyticsDirective: () => (/* reexport safe */ _util_data_layer_util_adobe_analytics_directive__WEBPACK_IMPORTED_MODULE_11__.AdobeAnalyticsDirective),
/* harmony export */   AnalyticsConstants: () => (/* reexport safe */ _constants_anaytics_constants__WEBPACK_IMPORTED_MODULE_0__.AnalyticsConstants),
/* harmony export */   AttributeEnum: () => (/* reexport safe */ _enums_attribute_enum__WEBPACK_IMPORTED_MODULE_1__.AttributeEnum),
/* harmony export */   DataLayerService: () => (/* reexport safe */ _datalayer_service__WEBPACK_IMPORTED_MODULE_10__.DataLayerService),
/* harmony export */   DataLayerServiceProvider: () => (/* reexport safe */ _provider_datalayer_service_provider__WEBPACK_IMPORTED_MODULE_9__.DataLayerServiceProvider),
/* harmony export */   DataLayerTransactionBuilder: () => (/* reexport safe */ _model_data_layer_transaction_builder__WEBPACK_IMPORTED_MODULE_12__.DataLayerTransactionBuilder),
/* harmony export */   DatalayerEventNames: () => (/* reexport safe */ _enums_datalayer_event_names_enum__WEBPACK_IMPORTED_MODULE_2__.DatalayerEventNames),
/* harmony export */   EventCategoryEnum: () => (/* reexport safe */ _enums_event_category_enum__WEBPACK_IMPORTED_MODULE_7__.EventCategoryEnum),
/* harmony export */   EventNameEnum: () => (/* reexport safe */ _enums_event_name_enum__WEBPACK_IMPORTED_MODULE_3__.EventNameEnum),
/* harmony export */   EventStatusEnum: () => (/* reexport safe */ _enums_event_status_enum__WEBPACK_IMPORTED_MODULE_5__.EventStatusEnum),
/* harmony export */   EventTypeEnum: () => (/* reexport safe */ _enums_event_type_enum__WEBPACK_IMPORTED_MODULE_4__.EventTypeEnum),
/* harmony export */   EventTypes: () => (/* reexport safe */ _enums_datalayer_event_types_enum__WEBPACK_IMPORTED_MODULE_6__.EventTypes),
/* harmony export */   dataLayerServiceProviderFactory: () => (/* reexport safe */ _provider_datalayer_service_provider__WEBPACK_IMPORTED_MODULE_9__.dataLayerServiceProviderFactory)
/* harmony export */ });
/* harmony import */ var _constants_anaytics_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/anaytics.constants */ 4809);
/* harmony import */ var _enums_attribute_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums/attribute.enum */ 64992);
/* harmony import */ var _enums_datalayer_event_names_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enums/datalayer-event-names.enum */ 38529);
/* harmony import */ var _enums_event_name_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enums/event-name.enum */ 57006);
/* harmony import */ var _enums_event_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enums/event-type.enum */ 61776);
/* harmony import */ var _enums_event_status_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enums/event-status.enum */ 54204);
/* harmony import */ var _enums_datalayer_event_types_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enums/datalayer-event-types.enum */ 85023);
/* harmony import */ var _enums_event_category_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./enums/event-category.enum */ 49768);
/* harmony import */ var _interfaces_data_layer_attributes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interfaces/data-layer-attributes */ 64482);
/* harmony import */ var _provider_datalayer_service_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./provider/datalayer-service.provider */ 55243);
/* harmony import */ var _datalayer_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./datalayer.service */ 6162);
/* harmony import */ var _util_data_layer_util_adobe_analytics_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./util/data-layer-util/adobe-analytics.directive */ 57186);
/* harmony import */ var _model_data_layer_transaction_builder__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./model/data-layer-transaction.builder */ 73525);














/***/ }),

/***/ 64482:
/*!*************************************************************************************!*\
  !*** ./libs/shared/datalayer/src/lib/datalayer/interfaces/data-layer-attributes.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 73525:
/*!*****************************************************************************************!*\
  !*** ./libs/shared/datalayer/src/lib/datalayer/model/data-layer-transaction.builder.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataLayerTransactionBuilder: () => (/* binding */ DataLayerTransactionBuilder)
/* harmony export */ });
/* harmony import */ var udl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! udl */ 63975);
/* harmony import */ var udl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(udl__WEBPACK_IMPORTED_MODULE_0__);

class DataLayerTransactionBuilder extends udl__WEBPACK_IMPORTED_MODULE_0__.TransactionBuilder {
  constructor() {
    super(...arguments);
    this._resolvePromiseAfterDelay = 0;
  }
  withDataLayerAttributes(attributes) {
    this._dataLayerAttributes = attributes;
    return this;
  }
  withDataLayerForceResolvePromiseAfterDelay(timeoutInMS) {
    this._resolvePromiseAfterDelay = timeoutInMS;
    return this;
  }
  build() {
    const transaction = super.build();
    if (this._dataLayerAttributes) {
      transaction.setAttributes(this._dataLayerAttributes);
    }
    transaction.setForceResolvePromiseAfterDelay(this._resolvePromiseAfterDelay);
    return transaction;
  }
}

/***/ }),

/***/ 55243:
/*!****************************************************************************************!*\
  !*** ./libs/shared/datalayer/src/lib/datalayer/provider/datalayer-service.provider.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataLayerServiceProvider: () => (/* binding */ DataLayerServiceProvider),
/* harmony export */   dataLayerServiceProviderFactory: () => (/* binding */ dataLayerServiceProviderFactory)
/* harmony export */ });
/* harmony import */ var _datalayer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../datalayer.service */ 6162);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);



class DataLayerServiceProvider {
  constructor(dataLayerService) {
    this.dataLayerService = dataLayerService;
  }
  init() {
    const timeout = 5000;
    const intervalTimer = 250;
    let numberOfRuns = 0;
    return new Promise((resolve, _) => {
      const interval = setInterval(() => {
        if (this.dataLayerService.init()) {
          resolve(true);
          clearInterval(interval);
        } else if (timeout <= intervalTimer * numberOfRuns) {
          clearInterval(interval);
        }
        numberOfRuns++;
      }, 250);
    });
  }
  static #_ = this.ɵfac = function DataLayerServiceProvider_Factory(t) {
    return new (t || DataLayerServiceProvider)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_datalayer_service__WEBPACK_IMPORTED_MODULE_0__.DataLayerService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: DataLayerServiceProvider,
    factory: DataLayerServiceProvider.ɵfac,
    providedIn: 'root'
  });
}
function dataLayerServiceProviderFactory(dataLayerServiceProvider) {
  return () => dataLayerServiceProvider.init();
}

/***/ }),

/***/ 57186:
/*!***************************************************************************************************!*\
  !*** ./libs/shared/datalayer/src/lib/datalayer/util/data-layer-util/adobe-analytics.directive.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdobeAnalyticsDirective: () => (/* binding */ AdobeAnalyticsDirective)
/* harmony export */ });
/* harmony import */ var _datalayer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../datalayer.service */ 6162);
/* harmony import */ var _enums_event_category_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/event-category.enum */ 49768);
/* harmony import */ var _enums_datalayer_event_types_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enums/datalayer-event-types.enum */ 85023);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);





class AdobeAnalyticsDirective {
  onClick() {
    this.pushToAnalytics(this.clickPushToAnalytics.attributeName, this.clickPushToAnalytics.eventName, this.clickPushToAnalytics.messageGroupName);
  }
  constructor(dataLayerService) {
    this.dataLayerService = dataLayerService;
  }
  pushToAnalytics(attributeName, eventName, messageGroupName) {
    const eventInfo = this.dataLayerService.createEventInfo(eventName, _enums_datalayer_event_types_enum__WEBPACK_IMPORTED_MODULE_2__.EventTypes.CLICK, [messageGroupName]);
    const attributes = {
      itemName: attributeName
    };
    this.addEventToDataLayer(eventInfo, attributes);
  }
  addEventToDataLayer(eventInfo, attributes) {
    const category = this.dataLayerService.createCategory(_enums_event_category_enum__WEBPACK_IMPORTED_MODULE_1__.EventCategoryEnum.PRIMARY_CATEGORY_CARE, _enums_event_category_enum__WEBPACK_IMPORTED_MODULE_1__.EventCategoryEnum.PRIMARY_CATEGORY_GENERAL);
    const enrichedAttributes = attributes || {};
    this.dataLayerService.addEvent(eventInfo, enrichedAttributes, category);
  }
  static #_ = this.ɵfac = function AdobeAnalyticsDirective_Factory(t) {
    return new (t || AdobeAnalyticsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_datalayer_service__WEBPACK_IMPORTED_MODULE_0__.DataLayerService));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
    type: AdobeAnalyticsDirective,
    selectors: [["", "clickPushToAnalytics", ""]],
    hostBindings: function AdobeAnalyticsDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdobeAnalyticsDirective_click_HostBindingHandler() {
          return ctx.onClick();
        });
      }
    },
    inputs: {
      clickPushToAnalytics: "clickPushToAnalytics"
    },
    standalone: true
  });
}

/***/ })

}])
//# sourceMappingURL=libs_shared_datalayer_src_index_ts-_6b2b1.js.map