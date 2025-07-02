(self["webpackChunkfleet_mfe"] = self["webpackChunkfleet_mfe"] || []).push([["libs_shared_datalayer_src_index_ts-_6b2b1"],{

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
  static ATTRIBUTE_STEP_ID = 'stepId';
  static ATTRIBUTES_INTENT = 'intent';
  static ATTRIBUTES_FLOW_TYPE = 'flowType';
  static INTENT_C5_CHECKOUT = 'C5 checkout';
  static INTENT_AEM_SALES_FLOW = 'AEM sales flow';
  static FLOW_TYPE_MARKETING = 'marketing';
  static FLOW_TYPE_CARE = 'care';
  static PRIMARY_CATEGORY_SALES = 'sales';
  static PRIMARY_CATEGORY_CARE = 'care';
  static LOGIN_PAGE_ID = 'checkout login page';
  static PRICE = 'price';
  static PRICE_EXCL_VAT = 'priceexclvat';
  static ITEM_DATA_EASYSWITCH_TRUE = 'Cancellation: Easy Switch';
  static ITEM_DATA_EASYSWITCH_FALSE = 'Cancellation: No Easy Switch';
  static ITEM_NAME_ADDRESS_SELECTION_OTHER = 'Installation address: different address';
  static ITEM_NAME_ADDRESS_SELECTION_CHANGED = 'Installation address changed';
  static ITEM_NAME_ADDRESS_SELECTION_POSTAL_CODE = 'Postal Code';
  static ITEM_NAME_EASYSWITCH_OPERATOR = 'Cancellation: Previous operator';
  static ITEM_NAME_INSTALLATION = 'Installation';
  static ITEM_NAME_CONNECTION_CABLE = 'Connection: Telenet cable';
  static ITEM_NAME_FIXED_TELEPHONY_CHANGED = 'Fixed telephony changed';
  static ITEM_NAME_WIFI_NETWORK_SETUP = 'wifi-network-setup';
  static INTENT_MOVE_FLOW = 'Move flow';
  static FLOW_TYPE_SELF_SERVICE = 'self-service';
  static ZENDESK_CHAT;
  static INTENT_CHANGE_MODEM_SETTINGS = 'change modem-settings';
  static INTENT_RESET_MODEM_SETTINGS = 'reset-modem-settings';
  static INTENT_REBOOT_MODEM = 'modem reboot';
  static INTENT_UNLOCK_SETTINGS = 'unlock settings';
  static INTENT_ACTIVATE_SIM = 'activate-sim';
  static STEP_ACTIVATE_SIM_OVERLAY = 'activate-sim-overlay';
  static CATEGORY_FLEET = 'fleet';
  static SUB_CATEGORY_SIM_CARD = 'sim-card';
  static EVENT_NAME_SIM_ACTIVATION_START = 'sim activation started';
  static EVENT_NAME_SIM_ACTIVATED = 'sim activated';
  static EVENT_TYPE_SELF_SERVICE_FLOW_START = 'self-service-flow-start';
  static EVENT_TYPE_SELF_SERVICE_FLOW_END = 'self-service-flow-end';
  static PRIMARY_CATEGORY_GENERAL = 'general';
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
/* harmony import */ var udl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! udl */ 95597);
/* harmony import */ var _enums_event_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums/event-type.enum */ 61776);
/* harmony import */ var _enums_event_name_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enums/event-name.enum */ 57006);
/* harmony import */ var _enums_event_status_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enums/event-status.enum */ 54204);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @telenet/ng-lib-message */ 65145);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 72607);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 13738);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 89378);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 74300);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_5__);









class DataLayerService {
  messageService;
  window;
  dataLayer;
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
    (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.timer)(100).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.mergeMap)(() => {
      const analyticsPromises = this.getAnalyticsPromises();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.forkJoin)(analyticsPromises);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(() => this.getDataLayer().getPage().getPageInfo().setStepId(stepId))).subscribe();
  }
  static ɵfac = function DataLayerService_Factory(t) {
    return new (t || DataLayerService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_4__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"]('Window'));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
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
  EventNameEnum["EVENT_NAME_CHANGE_LINE_SELECTED"] = "change line selected";
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
/* harmony import */ var udl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! udl */ 95597);

class DataLayerTransactionBuilder extends udl__WEBPACK_IMPORTED_MODULE_0__.TransactionBuilder {
  _dataLayerAttributes;
  _resolvePromiseAfterDelay = 0;
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
  dataLayerService;
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
  static ɵfac = function DataLayerServiceProvider_Factory(t) {
    return new (t || DataLayerServiceProvider)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_datalayer_service__WEBPACK_IMPORTED_MODULE_0__.DataLayerService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
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
  dataLayerService;
  clickPushToAnalytics;
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
  static ɵfac = function AdobeAnalyticsDirective_Factory(t) {
    return new (t || AdobeAnalyticsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_datalayer_service__WEBPACK_IMPORTED_MODULE_0__.DataLayerService));
  };
  static ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
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

/***/ }),

/***/ 85161:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/Scheduler.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Scheduler: () => (/* binding */ Scheduler)
/* harmony export */ });
/* harmony import */ var _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduler/dateTimestampProvider */ 26926);

class Scheduler {
  constructor(schedulerActionCtor, now = Scheduler.now) {
    this.schedulerActionCtor = schedulerActionCtor;
    this.now = now;
  }
  schedule(work, delay = 0, state) {
    return new this.schedulerActionCtor(this, work).schedule(state, delay);
  }
}
Scheduler.now = _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__.dateTimestampProvider.now;

/***/ }),

/***/ 74300:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/forkJoin.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   forkJoin: () => (/* binding */ forkJoin)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ 12235);
/* harmony import */ var _util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/argsArgArrayOrObject */ 17346);
/* harmony import */ var _innerFrom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./innerFrom */ 60384);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/args */ 76190);
/* harmony import */ var _operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../operators/OperatorSubscriber */ 35678);
/* harmony import */ var _util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/mapOneOrManyArgs */ 97825);
/* harmony import */ var _util_createObject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/createObject */ 26118);







function forkJoin(...args) {
  const resultSelector = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popResultSelector)(args);
  const {
    args: sources,
    keys
  } = (0,_util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__.argsArgArrayOrObject)(args);
  const result = new _Observable__WEBPACK_IMPORTED_MODULE_2__.Observable(subscriber => {
    const {
      length
    } = sources;
    if (!length) {
      subscriber.complete();
      return;
    }
    const values = new Array(length);
    let remainingCompletions = length;
    let remainingEmissions = length;
    for (let sourceIndex = 0; sourceIndex < length; sourceIndex++) {
      let hasValue = false;
      (0,_innerFrom__WEBPACK_IMPORTED_MODULE_3__.innerFrom)(sources[sourceIndex]).subscribe((0,_operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_4__.createOperatorSubscriber)(subscriber, value => {
        if (!hasValue) {
          hasValue = true;
          remainingEmissions--;
        }
        values[sourceIndex] = value;
      }, () => remainingCompletions--, undefined, () => {
        if (!remainingCompletions || !hasValue) {
          if (!remainingEmissions) {
            subscriber.next(keys ? (0,_util_createObject__WEBPACK_IMPORTED_MODULE_5__.createObject)(keys, values) : values);
          }
          subscriber.complete();
        }
      }));
    }
  });
  return resultSelector ? result.pipe((0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_6__.mapOneOrManyArgs)(resultSelector)) : result;
}

/***/ }),

/***/ 60384:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/innerFrom.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromArrayLike: () => (/* binding */ fromArrayLike),
/* harmony export */   fromAsyncIterable: () => (/* binding */ fromAsyncIterable),
/* harmony export */   fromInteropObservable: () => (/* binding */ fromInteropObservable),
/* harmony export */   fromIterable: () => (/* binding */ fromIterable),
/* harmony export */   fromPromise: () => (/* binding */ fromPromise),
/* harmony export */   fromReadableStreamLike: () => (/* binding */ fromReadableStreamLike),
/* harmony export */   innerFrom: () => (/* binding */ innerFrom)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArrayLike */ 31287);
/* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isPromise */ 53972);
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 12235);
/* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isInteropObservable */ 87808);
/* harmony import */ var _util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/isAsyncIterable */ 95235);
/* harmony import */ var _util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/throwUnobservableError */ 42614);
/* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/isIterable */ 19449);
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/isReadableStreamLike */ 70401);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/isFunction */ 82602);
/* harmony import */ var _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/reportUnhandledError */ 16929);
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../symbol/observable */ 14373);












function innerFrom(input) {
  if (input instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable) {
    return input;
  }
  if (input != null) {
    if ((0,_util_isInteropObservable__WEBPACK_IMPORTED_MODULE_1__.isInteropObservable)(input)) {
      return fromInteropObservable(input);
    }
    if ((0,_util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__.isArrayLike)(input)) {
      return fromArrayLike(input);
    }
    if ((0,_util_isPromise__WEBPACK_IMPORTED_MODULE_3__.isPromise)(input)) {
      return fromPromise(input);
    }
    if ((0,_util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_4__.isAsyncIterable)(input)) {
      return fromAsyncIterable(input);
    }
    if ((0,_util_isIterable__WEBPACK_IMPORTED_MODULE_5__.isIterable)(input)) {
      return fromIterable(input);
    }
    if ((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_6__.isReadableStreamLike)(input)) {
      return fromReadableStreamLike(input);
    }
  }
  throw (0,_util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_7__.createInvalidObservableTypeError)(input);
}
function fromInteropObservable(obj) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    const obs = obj[_symbol_observable__WEBPACK_IMPORTED_MODULE_8__.observable]();
    if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_9__.isFunction)(obs.subscribe)) {
      return obs.subscribe(subscriber);
    }
    throw new TypeError('Provided object does not correctly implement Symbol.observable');
  });
}
function fromArrayLike(array) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    for (let i = 0; i < array.length && !subscriber.closed; i++) {
      subscriber.next(array[i]);
    }
    subscriber.complete();
  });
}
function fromPromise(promise) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    promise.then(value => {
      if (!subscriber.closed) {
        subscriber.next(value);
        subscriber.complete();
      }
    }, err => subscriber.error(err)).then(null, _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_10__.reportUnhandledError);
  });
}
function fromIterable(iterable) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    for (const value of iterable) {
      subscriber.next(value);
      if (subscriber.closed) {
        return;
      }
    }
    subscriber.complete();
  });
}
function fromAsyncIterable(asyncIterable) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    process(asyncIterable, subscriber).catch(err => subscriber.error(err));
  });
}
function fromReadableStreamLike(readableStream) {
  return fromAsyncIterable((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_6__.readableStreamLikeToAsyncGenerator)(readableStream));
}
function process(asyncIterable, subscriber) {
  var asyncIterable_1, asyncIterable_1_1;
  var e_1, _a;
  return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
    try {
      for (asyncIterable_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__asyncValues)(asyncIterable); asyncIterable_1_1 = yield asyncIterable_1.next(), !asyncIterable_1_1.done;) {
        const value = asyncIterable_1_1.value;
        subscriber.next(value);
        if (subscriber.closed) {
          return;
        }
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return)) yield _a.call(asyncIterable_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
    subscriber.complete();
  });
}

/***/ }),

/***/ 89378:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/timer.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   timer: () => (/* binding */ timer)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ 12235);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 97777);
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isScheduler */ 77426);
/* harmony import */ var _util_isDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isDate */ 38442);




function timer(dueTime = 0, intervalOrScheduler, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
  let intervalDuration = -1;
  if (intervalOrScheduler != null) {
    if ((0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(intervalOrScheduler)) {
      scheduler = intervalOrScheduler;
    } else {
      intervalDuration = intervalOrScheduler;
    }
  }
  return new _Observable__WEBPACK_IMPORTED_MODULE_2__.Observable(subscriber => {
    let due = (0,_util_isDate__WEBPACK_IMPORTED_MODULE_3__.isValidDate)(dueTime) ? +dueTime - scheduler.now() : dueTime;
    if (due < 0) {
      due = 0;
    }
    let n = 0;
    return scheduler.schedule(function () {
      if (!subscriber.closed) {
        subscriber.next(n++);
        if (0 <= intervalDuration) {
          this.schedule(undefined, intervalDuration);
        } else {
          subscriber.complete();
        }
      }
    }, due);
  });
}

/***/ }),

/***/ 79736:
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/map.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   map: () => (/* binding */ map)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 34114);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 35678);


function map(project, thisArg) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    let index = 0;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, value => {
      subscriber.next(project.call(thisArg, value, index++));
    }));
  });
}

/***/ }),

/***/ 78164:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/mergeInternals.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mergeInternals: () => (/* binding */ mergeInternals)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/innerFrom */ 60384);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/executeSchedule */ 29701);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 35678);



function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
  const buffer = [];
  let active = 0;
  let index = 0;
  let isComplete = false;
  const checkComplete = () => {
    if (isComplete && !buffer.length && !active) {
      subscriber.complete();
    }
  };
  const outerNext = value => active < concurrent ? doInnerSub(value) : buffer.push(value);
  const doInnerSub = value => {
    expand && subscriber.next(value);
    active++;
    let innerComplete = false;
    (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__.innerFrom)(project(value, index++)).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, innerValue => {
      onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
      if (expand) {
        outerNext(innerValue);
      } else {
        subscriber.next(innerValue);
      }
    }, () => {
      innerComplete = true;
    }, undefined, () => {
      if (innerComplete) {
        try {
          active--;
          while (buffer.length && active < concurrent) {
            const bufferedValue = buffer.shift();
            if (innerSubScheduler) {
              (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__.executeSchedule)(subscriber, innerSubScheduler, () => doInnerSub(bufferedValue));
            } else {
              doInnerSub(bufferedValue);
            }
          }
          checkComplete();
        } catch (err) {
          subscriber.error(err);
        }
      }
    }));
  };
  source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, outerNext, () => {
    isComplete = true;
    checkComplete();
  }));
  return () => {
    additionalFinalizer === null || additionalFinalizer === void 0 ? void 0 : additionalFinalizer();
  };
}

/***/ }),

/***/ 72607:
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/mergeMap.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mergeMap: () => (/* binding */ mergeMap)
/* harmony export */ });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ 79736);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/innerFrom */ 60384);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/lift */ 34114);
/* harmony import */ var _mergeInternals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mergeInternals */ 78164);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isFunction */ 82602);





function mergeMap(project, resultSelector, concurrent = Infinity) {
  if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(resultSelector)) {
    return mergeMap((a, i) => (0,_map__WEBPACK_IMPORTED_MODULE_1__.map)((b, ii) => resultSelector(a, b, i, ii))((0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__.innerFrom)(project(a, i))), concurrent);
  } else if (typeof resultSelector === 'number') {
    concurrent = resultSelector;
  }
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_3__.operate)((source, subscriber) => (0,_mergeInternals__WEBPACK_IMPORTED_MODULE_4__.mergeInternals)(source, subscriber, project, concurrent));
}

/***/ }),

/***/ 13738:
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/tap.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tap: () => (/* binding */ tap)
/* harmony export */ });
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isFunction */ 82602);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 34114);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 35678);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/identity */ 10204);




function tap(observerOrNext, error, complete) {
  const tapObserver = (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(observerOrNext) || error || complete ? {
    next: observerOrNext,
    error,
    complete
  } : observerOrNext;
  return tapObserver ? (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
    var _a;
    (_a = tapObserver.subscribe) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
    let isUnsub = true;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, value => {
      var _a;
      (_a = tapObserver.next) === null || _a === void 0 ? void 0 : _a.call(tapObserver, value);
      subscriber.next(value);
    }, () => {
      var _a;
      isUnsub = false;
      (_a = tapObserver.complete) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
      subscriber.complete();
    }, err => {
      var _a;
      isUnsub = false;
      (_a = tapObserver.error) === null || _a === void 0 ? void 0 : _a.call(tapObserver, err);
      subscriber.error(err);
    }, () => {
      var _a, _b;
      if (isUnsub) {
        (_a = tapObserver.unsubscribe) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
      }
      (_b = tapObserver.finalize) === null || _b === void 0 ? void 0 : _b.call(tapObserver);
    }));
  }) : _util_identity__WEBPACK_IMPORTED_MODULE_3__.identity;
}

/***/ }),

/***/ 31028:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/Action.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Action: () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscription */ 31523);

class Action extends _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription {
  constructor(scheduler, work) {
    super();
  }
  schedule(state, delay = 0) {
    return this;
  }
}

/***/ }),

/***/ 90415:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/AsyncAction.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsyncAction: () => (/* binding */ AsyncAction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ 31028);
/* harmony import */ var _intervalProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intervalProvider */ 94916);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/arrRemove */ 35559);



class AsyncAction extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
  constructor(scheduler, work) {
    super(scheduler, work);
    this.scheduler = scheduler;
    this.work = work;
    this.pending = false;
  }
  schedule(state, delay = 0) {
    var _a;
    if (this.closed) {
      return this;
    }
    this.state = state;
    const id = this.id;
    const scheduler = this.scheduler;
    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, delay);
    }
    this.pending = true;
    this.delay = delay;
    this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay);
    return this;
  }
  requestAsyncId(scheduler, _id, delay = 0) {
    return _intervalProvider__WEBPACK_IMPORTED_MODULE_1__.intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
  }
  recycleAsyncId(_scheduler, id, delay = 0) {
    if (delay != null && this.delay === delay && this.pending === false) {
      return id;
    }
    if (id != null) {
      _intervalProvider__WEBPACK_IMPORTED_MODULE_1__.intervalProvider.clearInterval(id);
    }
    return undefined;
  }
  execute(state, delay) {
    if (this.closed) {
      return new Error('executing a cancelled action');
    }
    this.pending = false;
    const error = this._execute(state, delay);
    if (error) {
      return error;
    } else if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  }
  _execute(state, _delay) {
    let errored = false;
    let errorValue;
    try {
      this.work(state);
    } catch (e) {
      errored = true;
      errorValue = e ? e : new Error('Scheduled action threw falsy error');
    }
    if (errored) {
      this.unsubscribe();
      return errorValue;
    }
  }
  unsubscribe() {
    if (!this.closed) {
      const {
        id,
        scheduler
      } = this;
      const {
        actions
      } = scheduler;
      this.work = this.state = this.scheduler = null;
      this.pending = false;
      (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_2__.arrRemove)(actions, this);
      if (id != null) {
        this.id = this.recycleAsyncId(scheduler, id, null);
      }
      this.delay = null;
      super.unsubscribe();
    }
  }
}

/***/ }),

/***/ 5920:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/AsyncScheduler.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsyncScheduler: () => (/* binding */ AsyncScheduler)
/* harmony export */ });
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Scheduler */ 85161);

class AsyncScheduler extends _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler {
  constructor(SchedulerAction, now = _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler.now) {
    super(SchedulerAction, now);
    this.actions = [];
    this._active = false;
  }
  flush(action) {
    const {
      actions
    } = this;
    if (this._active) {
      actions.push(action);
      return;
    }
    let error;
    this._active = true;
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (action = actions.shift());
    this._active = false;
    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  }
}

/***/ }),

/***/ 97777:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/async.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   async: () => (/* binding */ async),
/* harmony export */   asyncScheduler: () => (/* binding */ asyncScheduler)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ 90415);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 5920);


const asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__.AsyncAction);
const async = asyncScheduler;

/***/ }),

/***/ 26926:
/*!********************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/dateTimestampProvider.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dateTimestampProvider: () => (/* binding */ dateTimestampProvider)
/* harmony export */ });
const dateTimestampProvider = {
  now() {
    return (dateTimestampProvider.delegate || Date).now();
  },
  delegate: undefined
};

/***/ }),

/***/ 94916:
/*!***************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/intervalProvider.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   intervalProvider: () => (/* binding */ intervalProvider)
/* harmony export */ });
const intervalProvider = {
  setInterval(handler, timeout, ...args) {
    const {
      delegate
    } = intervalProvider;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
      return delegate.setInterval(handler, timeout, ...args);
    }
    return setInterval(handler, timeout, ...args);
  },
  clearInterval(handle) {
    const {
      delegate
    } = intervalProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
  },
  delegate: undefined
};

/***/ }),

/***/ 96691:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/symbol/iterator.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSymbolIterator: () => (/* binding */ getSymbolIterator),
/* harmony export */   iterator: () => (/* binding */ iterator)
/* harmony export */ });
function getSymbolIterator() {
  if (typeof Symbol !== 'function' || !Symbol.iterator) {
    return '@@iterator';
  }
  return Symbol.iterator;
}
const iterator = getSymbolIterator();

/***/ }),

/***/ 76190:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/args.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   popNumber: () => (/* binding */ popNumber),
/* harmony export */   popResultSelector: () => (/* binding */ popResultSelector),
/* harmony export */   popScheduler: () => (/* binding */ popScheduler)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 82602);
/* harmony import */ var _isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isScheduler */ 77426);


function last(arr) {
  return arr[arr.length - 1];
}
function popResultSelector(args) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(last(args)) ? args.pop() : undefined;
}
function popScheduler(args) {
  return (0,_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(last(args)) ? args.pop() : undefined;
}
function popNumber(args, defaultValue) {
  return typeof last(args) === 'number' ? args.pop() : defaultValue;
}

/***/ }),

/***/ 17346:
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/argsArgArrayOrObject.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   argsArgArrayOrObject: () => (/* binding */ argsArgArrayOrObject)
/* harmony export */ });
const {
  isArray
} = Array;
const {
  getPrototypeOf,
  prototype: objectProto,
  keys: getKeys
} = Object;
function argsArgArrayOrObject(args) {
  if (args.length === 1) {
    const first = args[0];
    if (isArray(first)) {
      return {
        args: first,
        keys: null
      };
    }
    if (isPOJO(first)) {
      const keys = getKeys(first);
      return {
        args: keys.map(key => first[key]),
        keys
      };
    }
  }
  return {
    args: args,
    keys: null
  };
}
function isPOJO(obj) {
  return obj && typeof obj === 'object' && getPrototypeOf(obj) === objectProto;
}

/***/ }),

/***/ 26118:
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/createObject.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createObject: () => (/* binding */ createObject)
/* harmony export */ });
function createObject(keys, values) {
  return keys.reduce((result, key, i) => (result[key] = values[i], result), {});
}

/***/ }),

/***/ 29701:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/executeSchedule.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   executeSchedule: () => (/* binding */ executeSchedule)
/* harmony export */ });
function executeSchedule(parentSubscription, scheduler, work, delay = 0, repeat = false) {
  const scheduleSubscription = scheduler.schedule(function () {
    work();
    if (repeat) {
      parentSubscription.add(this.schedule(null, delay));
    } else {
      this.unsubscribe();
    }
  }, delay);
  parentSubscription.add(scheduleSubscription);
  if (!repeat) {
    return scheduleSubscription;
  }
}

/***/ }),

/***/ 31287:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isArrayLike.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isArrayLike: () => (/* binding */ isArrayLike)
/* harmony export */ });
const isArrayLike = x => x && typeof x.length === 'number' && typeof x !== 'function';

/***/ }),

/***/ 95235:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isAsyncIterable.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isAsyncIterable: () => (/* binding */ isAsyncIterable)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 82602);

function isAsyncIterable(obj) {
  return Symbol.asyncIterator && (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}

/***/ }),

/***/ 38442:
/*!************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isDate.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isValidDate: () => (/* binding */ isValidDate)
/* harmony export */ });
function isValidDate(value) {
  return value instanceof Date && !isNaN(value);
}

/***/ }),

/***/ 87808:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isInteropObservable.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isInteropObservable: () => (/* binding */ isInteropObservable)
/* harmony export */ });
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../symbol/observable */ 14373);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 82602);


function isInteropObservable(input) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(input[_symbol_observable__WEBPACK_IMPORTED_MODULE_1__.observable]);
}

/***/ }),

/***/ 19449:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isIterable.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isIterable: () => (/* binding */ isIterable)
/* harmony export */ });
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../symbol/iterator */ 96691);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 82602);


function isIterable(input) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(input === null || input === void 0 ? void 0 : input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__.iterator]);
}

/***/ }),

/***/ 53972:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isPromise.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isPromise: () => (/* binding */ isPromise)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 82602);

function isPromise(value) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value === null || value === void 0 ? void 0 : value.then);
}

/***/ }),

/***/ 70401:
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isReadableStreamLike.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isReadableStreamLike: () => (/* binding */ isReadableStreamLike),
/* harmony export */   readableStreamLikeToAsyncGenerator: () => (/* binding */ readableStreamLikeToAsyncGenerator)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction */ 82602);


function readableStreamLikeToAsyncGenerator(readableStream) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__asyncGenerator)(this, arguments, function* readableStreamLikeToAsyncGenerator_1() {
    const reader = readableStream.getReader();
    try {
      while (true) {
        const {
          value,
          done
        } = yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(reader.read());
        if (done) {
          return yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(void 0);
        }
        yield yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(value);
      }
    } finally {
      reader.releaseLock();
    }
  });
}
function isReadableStreamLike(obj) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(obj === null || obj === void 0 ? void 0 : obj.getReader);
}

/***/ }),

/***/ 77426:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isScheduler.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isScheduler: () => (/* binding */ isScheduler)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 82602);

function isScheduler(value) {
  return value && (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value.schedule);
}

/***/ }),

/***/ 97825:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/mapOneOrManyArgs.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mapOneOrManyArgs: () => (/* binding */ mapOneOrManyArgs)
/* harmony export */ });
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../operators/map */ 79736);

const {
  isArray
} = Array;
function callOrApply(fn, args) {
  return isArray(args) ? fn(...args) : fn(args);
}
function mapOneOrManyArgs(fn) {
  return (0,_operators_map__WEBPACK_IMPORTED_MODULE_0__.map)(args => callOrApply(fn, args));
}

/***/ }),

/***/ 42614:
/*!****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/throwUnobservableError.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createInvalidObservableTypeError: () => (/* binding */ createInvalidObservableTypeError)
/* harmony export */ });
function createInvalidObservableTypeError(input) {
  return new TypeError(`You provided ${input !== null && typeof input === 'object' ? 'an invalid object' : `'${input}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`);
}

/***/ }),

/***/ 21651:
/*!***************************************************************!*\
  !*** ./node_modules/udl/dist/constants/analytics.constant.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var AnalyticsConstants = /** @class */function () {
  function AnalyticsConstants() {}
  AnalyticsConstants.STORE_KEY_PARKED_EVENTS = 'analytics_parked_events';
  return AnalyticsConstants;
}();
exports.AnalyticsConstants = AnalyticsConstants;

/***/ }),

/***/ 57022:
/*!**************************************************************!*\
  !*** ./node_modules/udl/dist/enums/analytics-beacon.enum.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var AnalyticsBeaconEnum;
(function (AnalyticsBeaconEnum) {
  AnalyticsBeaconEnum["DISABLED"] = "disabled";
  AnalyticsBeaconEnum["ENABLED"] = "enabled";
})(AnalyticsBeaconEnum = exports.AnalyticsBeaconEnum || (exports.AnalyticsBeaconEnum = {}));

/***/ }),

/***/ 91563:
/*!**************************************************************************!*\
  !*** ./node_modules/udl/dist/enums/analytics-call-fire-strategy.enum.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var AnalyticsCallFireStrategyEnum;
(function (AnalyticsCallFireStrategyEnum) {
  AnalyticsCallFireStrategyEnum["FIRE_ON_SAME_PAGE"] = "FIRE_ON_SAME_PAGE";
  AnalyticsCallFireStrategyEnum["FIRE_ON_NEXT_PAGE"] = "FIRE_ON_NEXT_PAGE";
  AnalyticsCallFireStrategyEnum["FIRE_ON_PAGE_RELOAD"] = "FIRE_ON_PAGE_RELOAD";
})(AnalyticsCallFireStrategyEnum = exports.AnalyticsCallFireStrategyEnum || (exports.AnalyticsCallFireStrategyEnum = {}));

/***/ }),

/***/ 21010:
/*!***************************************************************!*\
  !*** ./node_modules/udl/dist/enums/direct-call-label.enum.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var DirectCallLabelEnum;
(function (DirectCallLabelEnum) {
  DirectCallLabelEnum["CART_VIEWED"] = "cart_viewed";
  DirectCallLabelEnum["TRANSACTION_UPDATED"] = "transaction_updated";
  DirectCallLabelEnum["EVENT_OCCURRED"] = "event_occurred";
  DirectCallLabelEnum["EVENT_OCCURRED_STEP_VIEW"] = "event_occurred-step_view";
  DirectCallLabelEnum["USER_DATA_LOADED"] = "user_data_loaded";
  DirectCallLabelEnum["PAGE_LOADED"] = "page_loaded";
  DirectCallLabelEnum["STORE_DATA_LOADED"] = "store_data_loaded";
})(DirectCallLabelEnum = exports.DirectCallLabelEnum || (exports.DirectCallLabelEnum = {}));

/***/ }),

/***/ 95597:
/*!****************************************!*\
  !*** ./node_modules/udl/dist/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var utility_1 = __webpack_require__(/*! ./util/utility */ 96869);
exports.Utility = utility_1.Utility;
var analyticsService_1 = __webpack_require__(/*! ./services/analyticsService */ 54808);
exports.AnalyticsService = analyticsService_1.AnalyticsService;
var user_1 = __webpack_require__(/*! ./models/user */ 14355);
exports.User = user_1.User;
exports.UserBuilder = user_1.UserBuilder;
var transaction_1 = __webpack_require__(/*! ./models/transaction */ 83421);
exports.Transaction = transaction_1.Transaction;
exports.TransactionBuilder = transaction_1.TransactionBuilder;
var segment_1 = __webpack_require__(/*! ./models/segment */ 43956);
exports.Segment = segment_1.Segment;
exports.SegmentBuilder = segment_1.SegmentBuilder;
var profile_1 = __webpack_require__(/*! ./models/profile */ 38901);
exports.Profile = profile_1.Profile;
exports.ProfileBuilder = profile_1.ProfileBuilder;
var productHolding_1 = __webpack_require__(/*! ./models/productHolding */ 99873);
exports.ProductHolding = productHolding_1.ProductHolding;
exports.ProductHoldingBuilder = productHolding_1.ProductHoldingBuilder;
var product_1 = __webpack_require__(/*! ./models/product */ 19573);
exports.Product = product_1.Product;
exports.ProductBuilder = product_1.ProductBuilder;
var price_1 = __webpack_require__(/*! ./models/price */ 3047);
exports.Price = price_1.Price;
exports.PriceBuilder = price_1.PriceBuilder;
var pageInfo_1 = __webpack_require__(/*! ./models/pageInfo */ 43629);
exports.PageInfo = pageInfo_1.PageInfo;
exports.PageInfoBuilder = pageInfo_1.PageInfoBuilder;
var page_1 = __webpack_require__(/*! ./models/page */ 69681);
exports.Page = page_1.Page;
exports.PageBuilder = page_1.PageBuilder;
var item_1 = __webpack_require__(/*! ./models/item */ 38867);
exports.Item = item_1.Item;
exports.ItemBuilder = item_1.ItemBuilder;
var eventInfo_1 = __webpack_require__(/*! ./models/eventInfo */ 1491);
exports.EventInfo = eventInfo_1.EventInfo;
exports.EventInfoBuilder = eventInfo_1.EventInfoBuilder;
var event_1 = __webpack_require__(/*! ./models/event */ 23140);
exports.Event = event_1.Event;
exports.EventBuilder = event_1.EventBuilder;
var dataLayer_1 = __webpack_require__(/*! ./models/dataLayer */ 98070);
exports.DataLayer = dataLayer_1.DataLayer;
var componentInfo_1 = __webpack_require__(/*! ./models/componentInfo */ 70531);
exports.ComponentInfo = componentInfo_1.ComponentInfo;
var component_1 = __webpack_require__(/*! ./models/component */ 70922);
exports.Component = component_1.Component;
exports.ComponentBuilder = component_1.ComponentBuilder;
var category_1 = __webpack_require__(/*! ./models/category */ 10974);
exports.Category = category_1.Category;
exports.CategoryBuilder = category_1.CategoryBuilder;
var cart_1 = __webpack_require__(/*! ./models/cart */ 5286);
exports.Cart = cart_1.Cart;
exports.CartBuilder = cart_1.CartBuilder;
var billing_1 = __webpack_require__(/*! ./models/billing */ 71570);
exports.Billing = billing_1.Billing;
exports.BillingBuilder = billing_1.BillingBuilder;
var pega_1 = __webpack_require__(/*! ./models/pega */ 52861);
exports.Pega = pega_1.Pega;
exports.PegaBuilder = pega_1.PegaBuilder;
var attribute_1 = __webpack_require__(/*! ./models/attribute */ 74382);
exports.AttributeBuilder = attribute_1.AttributeBuilder;
var direct_call_label_enum_1 = __webpack_require__(/*! ./enums/direct-call-label.enum */ 21010);
exports.DirectCallLabelEnum = direct_call_label_enum_1.DirectCallLabelEnum;
var analytics_constant_1 = __webpack_require__(/*! ./constants/analytics.constant */ 21651);
exports.AnalyticsConstants = analytics_constant_1.AnalyticsConstants;
var analytics_call_fire_strategy_enum_1 = __webpack_require__(/*! ./enums/analytics-call-fire-strategy.enum */ 91563);
exports.AnalyticsCallFireStrategyEnum = analytics_call_fire_strategy_enum_1.AnalyticsCallFireStrategyEnum;

/***/ }),

/***/ 74382:
/*!***************************************************!*\
  !*** ./node_modules/udl/dist/models/attribute.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var AttributeBuilder = /** @class */function () {
  function AttributeBuilder() {
    this.attributes = {};
  }
  AttributeBuilder.prototype.withAttribute = function (key, value) {
    this.attributes[key] = value;
    return this;
  };
  AttributeBuilder.prototype.build = function () {
    return this.attributes;
  };
  return AttributeBuilder;
}();
exports.AttributeBuilder = AttributeBuilder;

/***/ }),

/***/ 72322:
/*!**********************************************!*\
  !*** ./node_modules/udl/dist/models/base.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var analytics_call_fire_strategy_enum_1 = __webpack_require__(/*! ../enums/analytics-call-fire-strategy.enum */ 91563);
var utility_1 = __webpack_require__(/*! ../util/utility */ 96869);
var Base = /** @class */function () {
  function Base(directCallLabel) {
    var _this = this;
    this.attributes = {};
    this.forceResolvePromiseAfterDelay = 0; // circuitBreakerTimeoutInMS
    this.strategy = analytics_call_fire_strategy_enum_1.AnalyticsCallFireStrategyEnum.FIRE_ON_SAME_PAGE;
    this.setIdentifier = function (identifier) {
      _this.identifier = identifier;
    };
    this.getIdentifier = function () {
      return _this.identifier;
    };
    this.addAttribute = function (name, value) {
      _this.attributes[name] = value;
    };
    this.getAttribute = function (name) {
      if (_this.attributes) {
        return _this.attributes[name];
      }
    };
    this.setAttributes = function (attributes) {
      _this.attributes = attributes;
    };
    this.getAttributes = function () {
      return _this.attributes;
    };
    this.setDirectCallLabel = function (directCallLabel) {
      _this.directCallLabel = directCallLabel;
    };
    this.getDirectCallLabel = function () {
      return _this.directCallLabel;
    };
    this.setForceResolvePromiseAfterDelay = function (timeoutInMS) {
      _this.forceResolvePromiseAfterDelay = timeoutInMS;
    };
    this.getForceResolvePromiseAfterDelay = function () {
      return _this.forceResolvePromiseAfterDelay;
    };
    this.setStrategy = function (strategy) {
      _this.strategy = strategy;
    };
    this.getStrategy = function () {
      return _this.strategy;
    };
    this.directCallLabel = directCallLabel;
    this.identifier = utility_1.Utility.getUUID();
  }
  return Base;
}();
exports.Base = Base;

/***/ }),

/***/ 71570:
/*!*************************************************!*\
  !*** ./node_modules/udl/dist/models/billing.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var Billing = /** @class */function () {
  function Billing() {
    var _this = this;
    this.setBillID = function (billID) {
      _this.billID = billID;
    };
    this.getBillID = function () {
      return _this.billID;
    };
  }
  return Billing;
}();
exports.Billing = Billing;
var BillingBuilder = /** @class */function () {
  function BillingBuilder() {
    this.billing = new Billing();
  }
  BillingBuilder.prototype.withBillId = function (billID) {
    this.billing.setBillID(billID);
    return this;
  };
  BillingBuilder.prototype.build = function () {
    return this.billing;
  };
  return BillingBuilder;
}();
exports.BillingBuilder = BillingBuilder;

/***/ }),

/***/ 5286:
/*!**********************************************!*\
  !*** ./node_modules/udl/dist/models/cart.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return extendStatics(d, b);
  };
  return function (d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var price_1 = __webpack_require__(/*! ./price */ 3047);
var item_1 = __webpack_require__(/*! ./item */ 38867);
var base_1 = __webpack_require__(/*! ./base */ 72322);
var direct_call_label_enum_1 = __webpack_require__(/*! ../enums/direct-call-label.enum */ 21010);
var Cart = /** @class */function (_super) {
  __extends(Cart, _super);
  function Cart(cartJson) {
    var _this = _super.call(this, direct_call_label_enum_1.DirectCallLabelEnum.CART_VIEWED) || this;
    _this.setCartID = function (id) {
      _this.cartID = id;
    };
    _this.getCartID = function () {
      return _this.cartID;
    };
    _this.setPrice = function (price) {
      _this.price = price;
    };
    _this.getPrice = function () {
      return _this.price;
    };
    _this.addItem = function (item) {
      if (!_this.item) {
        _this.item = [];
      }
      _this.item.push(item);
    };
    _this.getItems = function () {
      return _this.item;
    };
    _this.setItems = function (items) {
      _this.item = items;
    };
    _this.filter = function (productID) {
      return _this.item ? _this.item.filter(function (item) {
        return item.getProductInfo().getProductID() === productID;
      }) : '';
    };
    if (cartJson) {
      Object.assign(_this, cartJson);
      _this.price = cartJson.price ? new price_1.Price(cartJson.price) : undefined;
      if (cartJson.item) {
        _this.setItems([]);
        cartJson.item.forEach(function (itemJson) {
          var item = new item_1.Item(itemJson);
          _this.addItem(item);
        });
      }
    }
    return _this;
  }
  return Cart;
}(base_1.Base);
exports.Cart = Cart;
var CartBuilder = /** @class */function () {
  function CartBuilder() {
    this.cart = new Cart();
  }
  CartBuilder.prototype.withCartId = function (cartid) {
    this.cart.setCartID(cartid);
    return this;
  };
  CartBuilder.prototype.withPrice = function (price) {
    this.cart.setPrice(price);
    return this;
  };
  CartBuilder.prototype.withItem = function (item) {
    this.cart.addItem(item);
    return this;
  };
  CartBuilder.prototype.withIdentifier = function (identifier) {
    this.cart.setIdentifier(identifier);
    return this;
  };
  CartBuilder.prototype.withAttribute = function (key, value) {
    this.cart.addAttribute(key, value);
    return this;
  };
  CartBuilder.prototype.withDirectCallLabel = function (directCallLabel) {
    this.cart.setDirectCallLabel(directCallLabel);
    return this;
  };
  CartBuilder.prototype.build = function () {
    return this.cart;
  };
  return CartBuilder;
}();
exports.CartBuilder = CartBuilder;

/***/ }),

/***/ 10974:
/*!**************************************************!*\
  !*** ./node_modules/udl/dist/models/category.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var Category = /** @class */function () {
  function Category(category) {
    var _this = this;
    this.setPrimaryCategory = function (primaryCategory) {
      _this.primaryCategory = primaryCategory;
    };
    this.getPrimaryCategory = function () {
      return _this.primaryCategory;
    };
    this.setSubCategory1 = function (subCategory1) {
      _this.subCategory1 = subCategory1;
    };
    this.getSubCategory1 = function () {
      return _this.subCategory1;
    };
    Object.assign(this, category);
  }
  return Category;
}();
exports.Category = Category;
var CategoryBuilder = /** @class */function () {
  function CategoryBuilder() {
    this.category = new Category();
  }
  CategoryBuilder.prototype.withPrimaryCategory = function (category) {
    this.category.setPrimaryCategory(category);
    return this;
  };
  CategoryBuilder.prototype.withSubCategoryOne = function (category) {
    this.category.setSubCategory1(category);
    return this;
  };
  CategoryBuilder.prototype.build = function () {
    return this.category;
  };
  return CategoryBuilder;
}();
exports.CategoryBuilder = CategoryBuilder;

/***/ }),

/***/ 70922:
/*!***************************************************!*\
  !*** ./node_modules/udl/dist/models/component.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var componentInfo_1 = __webpack_require__(/*! ./componentInfo */ 70531);
var category_1 = __webpack_require__(/*! ./category */ 10974);
var Component = /** @class */function () {
  function Component(component) {
    var _this = this;
    this.getAttribute = function (name) {
      if (_this.attributes) {
        return _this.attributes[name];
      }
    };
    this.addAttribute = function (name, value) {
      if (!_this.attributes) {
        _this.attributes = {};
      }
      _this.attributes[name] = value;
    };
    this.getCategory = function () {
      return _this.category;
    };
    Object.assign(this, component);
    this.componentInfo = component ? new componentInfo_1.ComponentInfo(component.componentInfo) : new componentInfo_1.ComponentInfo();
    this.category = component ? new category_1.Category(component.category) : new category_1.Category();
  }
  Component.prototype.getComponentInfo = function () {
    return this.componentInfo;
  };
  ;
  return Component;
}();
exports.Component = Component;
var ComponentBuilder = /** @class */function () {
  function ComponentBuilder(component) {
    this.component = new Component(component);
  }
  ComponentBuilder.prototype.withAttribute = function (key, value) {
    this.component.addAttribute(key, value);
    return this;
  };
  ComponentBuilder.prototype.build = function () {
    return this.component;
  };
  return ComponentBuilder;
}();
exports.ComponentBuilder = ComponentBuilder;

/***/ }),

/***/ 70531:
/*!*******************************************************!*\
  !*** ./node_modules/udl/dist/models/componentInfo.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var ComponentInfo = /** @class */function () {
  function ComponentInfo(componentInfo) {
    var _this = this;
    this.getComponentID = function () {
      return _this.componentID;
    };
    this.getComponentName = function () {
      return _this.componentName;
    };
    this.getComponentInstanceID = function () {
      return _this.componentInstanceID;
    };
    Object.assign(this, componentInfo);
  }
  return ComponentInfo;
}();
exports.ComponentInfo = ComponentInfo;

/***/ }),

/***/ 98070:
/*!***************************************************!*\
  !*** ./node_modules/udl/dist/models/dataLayer.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var page_1 = __webpack_require__(/*! ./page */ 69681);
var transaction_1 = __webpack_require__(/*! ./transaction */ 83421);
var analyticsService_1 = __webpack_require__(/*! ../services/analyticsService */ 54808);
var utility_1 = __webpack_require__(/*! ../util/utility */ 96869);
var event_1 = __webpack_require__(/*! ./event */ 23140);
var analytics_beacon_enum_1 = __webpack_require__(/*! ../enums/analytics-beacon.enum */ 57022);
var direct_call_label_enum_1 = __webpack_require__(/*! ../enums/direct-call-label.enum */ 21010);
var analytics_constant_1 = __webpack_require__(/*! ../constants/analytics.constant */ 21651);
var analytics_call_fire_strategy_enum_1 = __webpack_require__(/*! ../enums/analytics-call-fire-strategy.enum */ 91563);
var DataLayer = /** @class */function () {
  function DataLayer(dataLayerJson) {
    var _this = this;
    this.setVersion = function (version) {
      _this.version = version;
    };
    this.getVersion = function () {
      return _this.version;
    };
    this.setDateTimeLocal = function (dateTime) {
      _this.dateTimeLocal = dateTime;
    };
    this.getDateTimeLocal = function () {
      return _this.dateTimeLocal;
    };
    this.setEnvironment = function (env) {
      _this.environment = env;
    };
    this.getEnvironment = function () {
      return _this.environment;
    };
    this.setDoNotFirePageBeacon = function (doNotFirePageBeacon) {
      _this.doNotFirePageBeacon = doNotFirePageBeacon;
    };
    this.getDoNotFirePageBeacon = function () {
      return _this.doNotFirePageBeacon;
    };
    this.getPage = function () {
      return _this.page;
    };
    this.setPage = function (page) {
      _this.page = page;
      return _this.analyticsService.pushDataToAnalyticsWithoutWait(_this.page, _this.doNotFirePageBeacon);
    };
    this.getComponents = function () {
      return _this.component;
    };
    this.setComponents = function (component) {
      _this.component = component;
    };
    this.getEvents = function () {
      return _this.event;
    };
    this.getEventById = function (id) {
      return _this.getEvents().filter(function (event) {
        return event.getIdentifier() === id;
      })[0];
    };
    this.addUser = function (user) {
      if (!_this.user) {
        _this.user = [];
      }
      _this.user.push(user);
      return _this.analyticsService.pushDataToAnalyticsWithoutWait(user);
    };
    this.getUsers = function () {
      return _this.user;
    };
    this.getUserById = function (id) {
      return _this.getUsers().filter(function (user) {
        return user.getIdentifier() === id;
      })[0];
    };
    this.getCart = function () {
      return _this.cart;
    };
    this.setCart = function (cart) {
      _this.cart = cart;
      return _this.analyticsService.pushDataToAnalyticsWithWait(cart);
    };
    this.getTransaction = function () {
      return _this.transaction;
    };
    this.setTransaction = function (transaction) {
      _this.transaction = transaction;
      return _this.analyticsService.pushDataToAnalyticsWithWait(transaction);
    };
    this.setBrand = function (brand) {
      _this.brand = brand;
    };
    this.getBrand = function () {
      return _this.brand;
    };
    this.setApplicationID = function (appId) {
      _this.applicationID = appId;
    };
    this.getApplicationID = function () {
      return _this.applicationID;
    };
    this.getCategory = function (componentInstanceID) {
      var component = _this.getComponentById(componentInstanceID);
      if (component) {
        return component.getCategory();
      }
    };
    this.getComponentById = function (componentInstanceId) {
      return _this.getComponents() && _this.getComponents().length > 0 ? _this.getComponents().filter(function (component) {
        return component.getComponentInfo().getComponentInstanceID() === componentInstanceId;
      })[0] : undefined;
    };
    this.addEvent = function (event) {
      _this.appendEvent(event);
      return _this.analyticsService.pushDataToAnalyticsWithWait(event);
    };
    this.appendEvent = function (event) {
      if (!_this.event) {
        _this.event = [];
      }
      _this.event.push(event);
    };
    this.addStepViewEvent = function (event) {
      event.setDirectCallLabel(direct_call_label_enum_1.DirectCallLabelEnum.EVENT_OCCURRED_STEP_VIEW);
      if (_this.doNotFirePageBeacon) {
        // default page-view beacon is disabled
        _this.appendEvent(event);
        var stepViewEventPromise = _this.analyticsService.pushDataToAnalyticsWithoutWait(event);
        stepViewEventPromise.then(function () {
          _this.analyticsService.getPageBeaconPromise();
          _this.analyticsService.resolvePromiseNow(_this.getPage().getIdentifier());
        });
        return stepViewEventPromise;
      }
      return _this.addEvent(event);
    };
    this.getAnalyticsPromises = function () {
      var analyticsPromises = _this.analyticsService.getAnalyticsPromises();
      var promises = Object.keys(analyticsPromises).map(function (item) {
        return analyticsPromises[item].promise;
      });
      return promises;
    };
    this.reportParkedObjects = function () {
      var pendingParkedAnalyticsObjects = [];
      var parkedAnalyticsObjectsInStore = utility_1.Utility.getItemFromStore(analytics_constant_1.AnalyticsConstants.STORE_KEY_PARKED_EVENTS);
      var parkedAnalyticsObjects = parkedAnalyticsObjectsInStore ? JSON.parse(parkedAnalyticsObjectsInStore) : [];
      parkedAnalyticsObjects.forEach(function (parkedAnalyticsObject) {
        var parkedJSONObject = parkedAnalyticsObject.parkedObject;
        var currentURI = window.location.pathname;
        if (parkedJSONObject.strategy === analytics_call_fire_strategy_enum_1.AnalyticsCallFireStrategyEnum.FIRE_ON_PAGE_RELOAD || parkedJSONObject.strategy === analytics_call_fire_strategy_enum_1.AnalyticsCallFireStrategyEnum.FIRE_ON_NEXT_PAGE && currentURI !== parkedAnalyticsObject.parkedOnPage) {
          delete parkedJSONObject.strategy;
          delete parkedJSONObject.identifier;
          _this.reportParkedObject(parkedJSONObject);
        } else {
          pendingParkedAnalyticsObjects.push(parkedAnalyticsObject);
        }
      });
      utility_1.Utility.setItemInStore(analytics_constant_1.AnalyticsConstants.STORE_KEY_PARKED_EVENTS, pendingParkedAnalyticsObjects);
    };
    this.reportParkedObject = function (parkedJSONObject) {
      switch (parkedJSONObject.directCallLabel) {
        case direct_call_label_enum_1.DirectCallLabelEnum.EVENT_OCCURRED:
          var parkedEvent = new event_1.Event(parkedJSONObject);
          _this.addEvent(parkedEvent);
          break;
        case direct_call_label_enum_1.DirectCallLabelEnum.TRANSACTION_UPDATED:
          var parkedTransaction = new transaction_1.Transaction(parkedJSONObject);
          _this.setTransaction(parkedTransaction);
      }
    };
    if (dataLayerJson) {
      dataLayerJson.initialized = true;
      Object.assign(this, dataLayerJson);
      this.analyticsService = new analyticsService_1.AnalyticsService();
      this.dateTimeLocal = utility_1.Utility.getCurrentDateTime();
      if (dataLayerJson.page) {
        this.page = new page_1.Page(dataLayerJson.page);
      }
    } else {
      this.analyticsService = new analyticsService_1.AnalyticsService(analytics_beacon_enum_1.AnalyticsBeaconEnum.DISABLED);
    }
  }
  DataLayer.create = function () {
    var udlObjectName = window['udlObjectName'];
    var dataLayerJson = window[udlObjectName];
    if (!(dataLayerJson && dataLayerJson.applicationID && dataLayerJson.environment)) {
      console.error("Missing Mandatory properties!!! Initial DataLayer JSON with applicationID and " + " environment properties is mandatory.");
      DataLayer.instance = new DataLayer();
    } else {
      if (dataLayerJson.initialized) {
        DataLayer.instance = dataLayerJson;
      } else {
        DataLayer.instance = new DataLayer(dataLayerJson);
        window[udlObjectName] = DataLayer.instance;
      }
    }
    return DataLayer.instance;
  };
  DataLayer.destroy = function () {
    DataLayer.instance = null;
  };
  return DataLayer;
}();
exports.DataLayer = DataLayer;

/***/ }),

/***/ 23140:
/*!***********************************************!*\
  !*** ./node_modules/udl/dist/models/event.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return extendStatics(d, b);
  };
  return function (d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var eventInfo_1 = __webpack_require__(/*! ./eventInfo */ 1491);
var category_1 = __webpack_require__(/*! ./category */ 10974);
var base_1 = __webpack_require__(/*! ./base */ 72322);
var direct_call_label_enum_1 = __webpack_require__(/*! ../enums/direct-call-label.enum */ 21010);
var cart_1 = __webpack_require__(/*! ./cart */ 5286);
var Event = /** @class */function (_super) {
  __extends(Event, _super);
  function Event(eventJson) {
    var _this = _super.call(this, direct_call_label_enum_1.DirectCallLabelEnum.EVENT_OCCURRED) || this;
    _this.setEventInfo = function (eventInfo) {
      _this.eventInfo = eventInfo;
    };
    _this.getEventInfo = function () {
      return _this.eventInfo;
    };
    _this.setCategory = function (category) {
      if (category) _this.category = category;
    };
    _this.getCategory = function () {
      return _this.category;
    };
    if (eventJson) {
      Object.assign(_this, eventJson);
      _this.eventInfo = eventJson.eventInfo ? new eventInfo_1.EventInfo(eventJson.eventInfo) : undefined;
      _this.category = eventJson.category ? new category_1.Category(eventJson.category) : undefined;
      Object.keys(eventJson.attributes || {}).forEach(function (attributeKey) {
        if (typeof eventJson.attributes[attributeKey] === 'object') {
          if (eventJson.attributes[attributeKey].directCallLabel === direct_call_label_enum_1.DirectCallLabelEnum.CART_VIEWED) {
            var enrichedCart = new cart_1.Cart(eventJson.attributes[attributeKey]);
            _this.addAttribute(attributeKey, enrichedCart);
          }
        }
      });
    }
    return _this;
  }
  return Event;
}(base_1.Base);
exports.Event = Event;
var EventBuilder = /** @class */function () {
  function EventBuilder() {
    this.event = new Event();
  }
  EventBuilder.prototype.withEventInfo = function (eventInfo) {
    this.event.setEventInfo(eventInfo);
    return this;
  };
  EventBuilder.prototype.withCategory = function (category) {
    this.event.setCategory(category);
    return this;
  };
  EventBuilder.prototype.withAttributes = function (attributes) {
    this.event.setAttributes(attributes);
    return this;
  };
  EventBuilder.prototype.withStrategy = function (strategy) {
    this.event.setStrategy(strategy);
    return this;
  };
  EventBuilder.prototype.build = function () {
    return this.event;
  };
  return EventBuilder;
}();
exports.EventBuilder = EventBuilder;

/***/ }),

/***/ 1491:
/*!***************************************************!*\
  !*** ./node_modules/udl/dist/models/eventInfo.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var utility_1 = __webpack_require__(/*! ../util/utility */ 96869);
var EventInfo = /** @class */function () {
  function EventInfo(eventInfoJson) {
    var _this = this;
    this.setEventName = function (eventName) {
      _this.eventName = eventName;
    };
    this.getEventName = function () {
      return _this.eventName;
    };
    this.setEventStatus = function (eventStatus) {
      _this.eventStatus = eventStatus;
    };
    this.getEventStatus = function () {
      return _this.eventStatus;
    };
    this.setEventStatusMessage = function (eventStatusMessage) {
      _this.eventStatusMessage = eventStatusMessage;
    };
    this.getEventStatusMessage = function () {
      return _this.eventStatusMessage;
    };
    this.setType = function (eventType) {
      _this.type = eventType;
    };
    this.getType = function () {
      return _this.type;
    };
    this.setTimestamp = function (eventTimestamp) {
      _this.timeStamp = eventTimestamp;
    };
    this.getTimestamp = function () {
      return _this.timeStamp;
    };
    Object.assign(this, eventInfoJson);
    this.timeStamp = utility_1.Utility.getCurrentDateTime();
  }
  return EventInfo;
}();
exports.EventInfo = EventInfo;
var EventInfoBuilder = /** @class */function () {
  function EventInfoBuilder() {
    this.eventInfo = new EventInfo();
  }
  EventInfoBuilder.prototype.withEventName = function (name) {
    this.eventInfo.setEventName(name);
    return this;
  };
  EventInfoBuilder.prototype.withType = function (type) {
    this.eventInfo.setType(type);
    return this;
  };
  EventInfoBuilder.prototype.withEventStatus = function (status) {
    this.eventInfo.setEventStatus(status);
    return this;
  };
  EventInfoBuilder.prototype.withEventStatusMessage = function (statusMessage) {
    this.eventInfo.setEventStatusMessage(statusMessage);
    return this;
  };
  EventInfoBuilder.prototype.withTimestamp = function (timestamp) {
    this.eventInfo.setTimestamp(timestamp);
    return this;
  };
  EventInfoBuilder.prototype.build = function () {
    return this.eventInfo;
  };
  return EventInfoBuilder;
}();
exports.EventInfoBuilder = EventInfoBuilder;

/***/ }),

/***/ 38867:
/*!**********************************************!*\
  !*** ./node_modules/udl/dist/models/item.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var product_1 = __webpack_require__(/*! ./product */ 19573);
var price_1 = __webpack_require__(/*! ./price */ 3047);
var Item = /** @class */function () {
  function Item(itemJson) {
    var _this = this;
    this.setProductInfo = function (productInfo) {
      _this.productInfo = productInfo;
    };
    this.getProductInfo = function () {
      return _this.productInfo;
    };
    this.setPrice = function (price) {
      _this.price = price;
    };
    this.getPrice = function () {
      return _this.price;
    };
    this.setQuantity = function (quantity) {
      _this.quantity = quantity;
    };
    this.getQuantity = function () {
      return _this.quantity;
    };
    if (itemJson) {
      Object.assign(this, itemJson);
      this.productInfo = itemJson.productInfo ? new product_1.Product(itemJson.productInfo) : undefined;
      this.price = itemJson.price ? new price_1.Price(itemJson.price) : undefined;
    }
  }
  return Item;
}();
exports.Item = Item;
var ItemBuilder = /** @class */function () {
  function ItemBuilder() {
    this.item = new Item();
  }
  ItemBuilder.prototype.withProductInfo = function (productInfo) {
    this.item.setProductInfo(productInfo);
    return this;
  };
  ItemBuilder.prototype.withPrice = function (price) {
    this.item.setPrice(price);
    return this;
  };
  ItemBuilder.prototype.withQuantity = function (quantity) {
    this.item.setQuantity(quantity);
    return this;
  };
  ItemBuilder.prototype.build = function () {
    return this.item;
  };
  return ItemBuilder;
}();
exports.ItemBuilder = ItemBuilder;

/***/ }),

/***/ 69681:
/*!**********************************************!*\
  !*** ./node_modules/udl/dist/models/page.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return extendStatics(d, b);
  };
  return function (d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var pageInfo_1 = __webpack_require__(/*! ./pageInfo */ 43629);
var base_1 = __webpack_require__(/*! ./base */ 72322);
var direct_call_label_enum_1 = __webpack_require__(/*! ../enums/direct-call-label.enum */ 21010);
var Page = /** @class */function (_super) {
  __extends(Page, _super);
  function Page(page) {
    var _this = _super.call(this, direct_call_label_enum_1.DirectCallLabelEnum.PAGE_LOADED) || this;
    _this.getPageInfo = function () {
      return _this.pageInfo;
    };
    Object.assign(_this, page);
    _this.setIdentifier(Page.PAGE_IDENTIFIER);
    _this.pageInfo = page ? new pageInfo_1.PageInfo(page.pageInfo) : new pageInfo_1.PageInfo();
    return _this;
  }
  Page.PAGE_IDENTIFIER = 'page-identifier';
  return Page;
}(base_1.Base);
exports.Page = Page;
var PageBuilder = /** @class */function () {
  function PageBuilder(page) {
    this.page = new Page(page);
  }
  PageBuilder.prototype.withAttribute = function (key, value) {
    this.page.addAttribute(key, value);
    return this;
  };
  PageBuilder.prototype.withDirectCallLabel = function (directCallLabel) {
    this.page.setDirectCallLabel(directCallLabel);
    return this;
  };
  PageBuilder.prototype.build = function () {
    return this.page;
  };
  return PageBuilder;
}();
exports.PageBuilder = PageBuilder;

/***/ }),

/***/ 43629:
/*!**************************************************!*\
  !*** ./node_modules/udl/dist/models/pageInfo.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var PageInfo = /** @class */function () {
  function PageInfo(pageInfo) {
    var _this = this;
    this.getPageID = function () {
      return _this.pageID;
    };
    this.setPageID = function (pageId) {
      _this.pageID = pageId;
    };
    this.setPageName = function (pageName) {
      _this.pageName = pageName;
    };
    this.getPageName = function () {
      return _this.pageName;
    };
    this.setPageTitle = function (pageTitle) {
      _this.pageTitle = pageTitle;
    };
    this.getPageTitle = function () {
      return _this.pageTitle;
    };
    this.setPageType = function (pageType) {
      _this.pageType = pageType;
    };
    this.getPageType = function () {
      return _this.pageType;
    };
    this.setReferringURL = function (referringURL) {
      _this.referringURL = referringURL;
    };
    this.getReferringURL = function () {
      return _this.referringURL;
    };
    this.setDestinationURL = function (destinationURL) {
      _this.destinationURL = destinationURL;
    };
    this.getDestinationURL = function () {
      return _this.destinationURL;
    };
    this.setSysEnv = function (sysEnv) {
      _this.sysEnv = sysEnv;
    };
    this.getSysEnv = function () {
      return _this.sysEnv;
    };
    this.setLanguage = function (language) {
      _this.language = language;
    };
    this.getLanguage = function () {
      return _this.language;
    };
    this.setEffectiveDate = function (date) {
      _this.effectiveDate = date;
    };
    this.getEffectiveDate = function () {
      return _this.effectiveDate;
    };
    this.setExpiryDate = function (date) {
      _this.expiryDate = date;
    };
    this.getExpiryDate = function () {
      return _this.expiryDate;
    };
    this.setIssueDate = function (date) {
      _this.issueDate = date;
    };
    this.getIssueDate = function () {
      return _this.issueDate;
    };
    this.setPreviousPageName = function (previousPageName) {
      _this.previousPageName = previousPageName;
    };
    this.getPreviousPageName = function () {
      return _this.previousPageName;
    };
    this.setStepId = function (stepId) {
      _this.stepId = stepId;
    };
    this.getStepId = function () {
      return _this.stepId;
    };
    Object.assign(this, pageInfo);
  }
  return PageInfo;
}();
exports.PageInfo = PageInfo;
var PageInfoBuilder = /** @class */function () {
  function PageInfoBuilder(pageInfo) {
    this.pageInfo = new PageInfo(pageInfo);
  }
  PageInfoBuilder.prototype.withPageId = function (pageId) {
    this.pageInfo.setPageID(pageId);
    return this;
  };
  PageInfoBuilder.prototype.withPageName = function (pageName) {
    this.pageInfo.setPageName(pageName);
    return this;
  };
  PageInfoBuilder.prototype.withPageTitle = function (pageTitle) {
    this.pageInfo.setPageTitle(pageTitle);
    return this;
  };
  PageInfoBuilder.prototype.withPageType = function (pageType) {
    this.pageInfo.setPageType(pageType);
    return this;
  };
  PageInfoBuilder.prototype.withReferringURL = function (referringURL) {
    this.pageInfo.setReferringURL(referringURL);
    return this;
  };
  PageInfoBuilder.prototype.withDestionationURL = function (destinationURL) {
    this.pageInfo.setDestinationURL(destinationURL);
    return this;
  };
  PageInfoBuilder.prototype.withSysEnv = function (sysEnv) {
    this.pageInfo.setSysEnv(sysEnv);
    return this;
  };
  PageInfoBuilder.prototype.withLanguage = function (language) {
    this.pageInfo.setLanguage(language);
    return this;
  };
  PageInfoBuilder.prototype.withEffectiveDate = function (date) {
    this.pageInfo.setEffectiveDate(date);
    return this;
  };
  PageInfoBuilder.prototype.withExpiryDate = function (date) {
    this.pageInfo.setExpiryDate(date);
    return this;
  };
  PageInfoBuilder.prototype.withIssueDate = function (date) {
    this.pageInfo.setIssueDate(date);
    return this;
  };
  PageInfoBuilder.prototype.withPreviousPageName = function (previousPageName) {
    this.pageInfo.setPreviousPageName(previousPageName);
    return this;
  };
  PageInfoBuilder.prototype.withStepId = function (stepId) {
    this.pageInfo.setStepId(stepId);
    return this;
  };
  PageInfoBuilder.prototype.build = function () {
    return this.pageInfo;
  };
  return PageInfoBuilder;
}();
exports.PageInfoBuilder = PageInfoBuilder;

/***/ }),

/***/ 52861:
/*!**********************************************!*\
  !*** ./node_modules/udl/dist/models/pega.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var Pega = /** @class */function () {
  function Pega() {
    var _this = this;
    this.setInteractionId = function (interactionId) {
      _this.interactionId = interactionId;
    };
    this.getInteractionId = function () {
      return _this.interactionId;
    };
  }
  return Pega;
}();
exports.Pega = Pega;
var PegaBuilder = /** @class */function () {
  function PegaBuilder() {
    this.pega = new Pega();
  }
  PegaBuilder.prototype.withInteractionId = function (interactionId) {
    this.pega.setInteractionId(interactionId);
    return this;
  };
  PegaBuilder.prototype.build = function () {
    return this.pega;
  };
  return PegaBuilder;
}();
exports.PegaBuilder = PegaBuilder;

/***/ }),

/***/ 3047:
/*!***********************************************!*\
  !*** ./node_modules/udl/dist/models/price.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var Price = /** @class */function () {
  function Price(priceJson) {
    var _this = this;
    this.setOnetimePrice = function (onetime) {
      _this.onetime = onetime;
    };
    this.getOnetimePrice = function () {
      return _this.onetime;
    };
    this.setRecurringPrice = function (recurring) {
      _this.recurring = recurring;
    };
    this.getRecurringPrice = function () {
      return _this.recurring;
    };
    this.setBasePrice = function (basePrice) {
      _this.basePrice = basePrice;
    };
    this.getBasePrice = function () {
      return _this.basePrice;
    };
    this.setTotalPrice = function (totalPrice) {
      _this.total = totalPrice;
    };
    this.getTotalPrice = function () {
      return _this.total;
    };
    this.setDiscountedPrice = function (discountedPrice) {
      _this.discounted = discountedPrice;
    };
    this.getDiscountedPrice = function () {
      return _this.discounted;
    };
    this.setTotalDiscountRecurring = function (discountRecurring) {
      _this.discountRecurring = discountRecurring;
    };
    this.getTotalDiscountRecurring = function () {
      return _this.discountRecurring;
    };
    this.setSummaryPrice = function (summary) {
      _this.summaryPrice = summary;
    };
    this.getSummaryPrice = function () {
      return _this.summaryPrice;
    };
    if (priceJson) {
      Object.assign(this, priceJson);
      this.basePrice = priceJson.basePrice ? new Price(priceJson.basePrice) : undefined;
      this.total = priceJson.total ? new Price(priceJson.total) : undefined;
      this.discounted = priceJson.discounted ? new Price(priceJson.discounted) : undefined;
      this.discountRecurring = priceJson.discountRecurring ? new Price(priceJson.discountRecurring) : undefined;
    }
  }
  return Price;
}();
exports.Price = Price;
var PriceBuilder = /** @class */function () {
  function PriceBuilder() {
    this.price = new Price();
  }
  PriceBuilder.prototype.withOneTimePrice = function (oneTimePrice) {
    this.price.setOnetimePrice(oneTimePrice);
    return this;
  };
  PriceBuilder.prototype.withRecurringPrice = function (recurringPrice) {
    this.price.setRecurringPrice(recurringPrice);
    return this;
  };
  PriceBuilder.prototype.withBasePrice = function (basePrice) {
    this.price.setBasePrice(basePrice);
    return this;
  };
  PriceBuilder.prototype.withTotalPrice = function (totalPrice) {
    this.price.setTotalPrice(totalPrice);
    return this;
  };
  PriceBuilder.prototype.withDiscountedPrice = function (discountedPrice) {
    this.price.setDiscountedPrice(discountedPrice);
    return this;
  };
  PriceBuilder.prototype.withTotalDiscountRecurring = function (discountRecurring) {
    this.price.setTotalDiscountRecurring(discountRecurring);
    return this;
  };
  PriceBuilder.prototype.withSummaryPrice = function (summaryPrice) {
    this.price.setSummaryPrice(summaryPrice);
    return this;
  };
  PriceBuilder.prototype.build = function () {
    return this.price;
  };
  return PriceBuilder;
}();
exports.PriceBuilder = PriceBuilder;

/***/ }),

/***/ 19573:
/*!*************************************************!*\
  !*** ./node_modules/udl/dist/models/product.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var Product = /** @class */function () {
  function Product(productJson) {
    var _this = this;
    this.productType = 'NotAvailable';
    this.setProductID = function (id) {
      _this.productID = id;
    };
    this.getProductID = function () {
      return _this.productID;
    };
    this.setProductName = function (name) {
      _this.productName = name;
    };
    this.getProductName = function () {
      return _this.productName;
    };
    this.setProductType = function (type) {
      _this.productType = type;
    };
    this.getProductType = function () {
      return _this.productType;
    };
    this.setProductStatus = function (productStatus) {
      _this.productStatus = productStatus;
    };
    this.getProductStatus = function () {
      return _this.productStatus;
    };
    this.setProductStock = function (productStock) {
      _this.productStock = productStock;
    };
    this.getProductStock = function () {
      return _this.productStock;
    };
    Object.assign(this, productJson);
  }
  return Product;
}();
exports.Product = Product;
var ProductBuilder = /** @class */function () {
  function ProductBuilder() {
    this.product = new Product();
  }
  ProductBuilder.prototype.withProductId = function (id) {
    this.product.setProductID(id);
    return this;
  };
  ProductBuilder.prototype.withProductName = function (name) {
    this.product.setProductName(name);
    return this;
  };
  ProductBuilder.prototype.withProductType = function (type) {
    this.product.setProductType(type);
    return this;
  };
  ProductBuilder.prototype.withProductStatus = function (status) {
    this.product.setProductStatus(status);
    return this;
  };
  ProductBuilder.prototype.withProductStock = function (stock) {
    this.product.setProductStock(stock);
    return this;
  };
  ProductBuilder.prototype.build = function () {
    return this.product;
  };
  return ProductBuilder;
}();
exports.ProductBuilder = ProductBuilder;

/***/ }),

/***/ 99873:
/*!********************************************************!*\
  !*** ./node_modules/udl/dist/models/productHolding.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var ProductHolding = /** @class */function () {
  function ProductHolding() {
    var _this = this;
    this.setProductID = function (productID) {
      _this.productID = productID;
    };
    this.getProductID = function () {
      return _this.productID;
    };
    this.setTvBoxType = function (tvBoxType) {
      _this.tvBoxType = tvBoxType;
    };
    this.getTvBoxType = function () {
      return _this.tvBoxType;
    };
    this.setServices = function (services) {
      _this.services = services;
    };
    this.getServices = function () {
      return _this.services;
    };
    this.setLoggedInUserProductCategory = function (loggedInUserProductCategory) {
      _this.loggedInUserProductCategory = loggedInUserProductCategory;
    };
    this.getLoggedInUserProductCategory = function () {
      return _this.loggedInUserProductCategory;
    };
  }
  return ProductHolding;
}();
exports.ProductHolding = ProductHolding;
var ProductHoldingBuilder = /** @class */function () {
  function ProductHoldingBuilder() {
    this.productHolding = new ProductHolding();
  }
  ProductHoldingBuilder.prototype.withProductId = function (productId) {
    this.productHolding.setProductID(productId);
    return this;
  };
  ProductHoldingBuilder.prototype.withTvBoxType = function (tvBoxType) {
    this.productHolding.setTvBoxType(tvBoxType);
    return this;
  };
  ProductHoldingBuilder.prototype.withServices = function (services) {
    this.productHolding.setServices(services);
    return this;
  };
  ProductHoldingBuilder.prototype.withLoggedInUserProductCategory = function (loggedInUserProductCategory) {
    this.productHolding.setLoggedInUserProductCategory(loggedInUserProductCategory);
    return this;
  };
  ProductHoldingBuilder.prototype.build = function () {
    return this.productHolding;
  };
  return ProductHoldingBuilder;
}();
exports.ProductHoldingBuilder = ProductHoldingBuilder;

/***/ }),

/***/ 38901:
/*!*************************************************!*\
  !*** ./node_modules/udl/dist/models/profile.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var Profile = /** @class */function () {
  function Profile() {
    var _this = this;
    this.setLoginState = function (loginstate) {
      _this.loginstate = loginstate;
    };
    this.getLoginState = function () {
      return _this.loginstate;
    };
    this.setLoginScope = function (loginscope) {
      _this.loginscope = loginscope;
    };
    this.getLoginScope = function () {
      return _this.loginscope;
    };
    this.setImpersonation = function (impersonation) {
      _this.impersonation = impersonation;
    };
    this.getImpersonation = function () {
      return _this.impersonation;
    };
    this.setTechnicalID = function (technicalID) {
      _this.technicalID = technicalID;
    };
    this.getTechnicalID = function () {
      return _this.technicalID;
    };
    this.setPostalCode = function (postalcode) {
      _this.postalcode = postalcode;
    };
    this.getPostalCode = function () {
      return _this.postalcode;
    };
    this.setInstallationPostalCode = function (installationPostalCode) {
      _this.installationPostalCode = installationPostalCode;
    };
    this.getInstallationPostalCode = function () {
      return _this.installationPostalCode;
    };
    this.setBillingPostalCode = function (billingPostalCode) {
      _this.billingPostalCode = billingPostalCode;
    };
    this.getBillingPostalCode = function () {
      return _this.billingPostalCode;
    };
    this.setCustomerCategory = function (customerCategory) {
      _this.customerCategory = customerCategory;
    };
    this.getCustomerCategory = function () {
      return _this.customerCategory;
    };
    this.setLoginType = function (logintype) {
      _this.logintype = logintype;
    };
    this.getLoginType = function () {
      return _this.logintype;
    };
    this.setCustomerType = function (customerType) {
      _this.customerType = customerType;
    };
    this.getCustomerType = function () {
      return _this.customerType;
    };
  }
  return Profile;
}();
exports.Profile = Profile;
var ProfileBuilder = /** @class */function () {
  function ProfileBuilder() {
    this.profile = new Profile();
  }
  ProfileBuilder.prototype.withLoginState = function (loginstate) {
    this.profile.setLoginState(loginstate);
    return this;
  };
  ProfileBuilder.prototype.withLoginScope = function (loginscope) {
    this.profile.setLoginScope(loginscope);
    return this;
  };
  ProfileBuilder.prototype.withImpersonation = function (impersonation) {
    this.profile.setImpersonation(impersonation);
    return this;
  };
  ProfileBuilder.prototype.withTechnicalID = function (technicalID) {
    this.profile.setTechnicalID(technicalID);
    return this;
  };
  ;
  ProfileBuilder.prototype.withPostalCode = function (postalcode) {
    this.profile.setPostalCode(postalcode);
    return this;
  };
  ;
  ProfileBuilder.prototype.withInstallationPostalCode = function (installationPostalCode) {
    this.profile.setInstallationPostalCode(installationPostalCode);
    return this;
  };
  ;
  ProfileBuilder.prototype.withBillingPostalCode = function (billingPostalCode) {
    this.profile.setBillingPostalCode(billingPostalCode);
    return this;
  };
  ;
  ProfileBuilder.prototype.withCustomerCategory = function (customerCategory) {
    this.profile.setCustomerCategory(customerCategory);
    return this;
  };
  ;
  ProfileBuilder.prototype.withLoginType = function (logintype) {
    this.profile.setLoginType(logintype);
    return this;
  };
  ;
  ProfileBuilder.prototype.withCustomerType = function (customerType) {
    this.profile.setCustomerType(customerType);
    return this;
  };
  ;
  ProfileBuilder.prototype.build = function () {
    return this.profile;
  };
  return ProfileBuilder;
}();
exports.ProfileBuilder = ProfileBuilder;

/***/ }),

/***/ 43956:
/*!*************************************************!*\
  !*** ./node_modules/udl/dist/models/segment.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var Segment = /** @class */function () {
  function Segment() {
    var _this = this;
    this.setCustomerSegment = function (customerSegment) {
      _this.customerSegment = customerSegment;
    };
    this.getCustomerSegment = function () {
      return _this.customerSegment;
    };
  }
  return Segment;
}();
exports.Segment = Segment;
var SegmentBuilder = /** @class */function () {
  function SegmentBuilder() {
    this.segment = new Segment();
  }
  SegmentBuilder.prototype.withCustomerSegment = function (customerSegment) {
    this.segment.setCustomerSegment(customerSegment);
    return this;
  };
  SegmentBuilder.prototype.build = function () {
    return this.segment;
  };
  return SegmentBuilder;
}();
exports.SegmentBuilder = SegmentBuilder;

/***/ }),

/***/ 83421:
/*!*****************************************************!*\
  !*** ./node_modules/udl/dist/models/transaction.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return extendStatics(d, b);
  };
  return function (d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var price_1 = __webpack_require__(/*! ./price */ 3047);
var item_1 = __webpack_require__(/*! ./item */ 38867);
var base_1 = __webpack_require__(/*! ./base */ 72322);
var direct_call_label_enum_1 = __webpack_require__(/*! ../enums/direct-call-label.enum */ 21010);
var Transaction = /** @class */function (_super) {
  __extends(Transaction, _super);
  function Transaction(transactionJson) {
    var _this = _super.call(this, direct_call_label_enum_1.DirectCallLabelEnum.TRANSACTION_UPDATED) || this;
    _this.setTransactionID = function (transactionID) {
      _this.transactionID = transactionID;
    };
    _this.getTransactionID = function () {
      return _this.transactionID;
    };
    _this.setPrice = function (price) {
      _this.price = price;
    };
    _this.getPrice = function () {
      return _this.price;
    };
    _this.addItem = function (item) {
      if (!_this.item) _this.item = [];
      _this.item.push(item);
    };
    _this.getItems = function () {
      return _this.item;
    };
    _this.setItems = function (items) {
      _this.item = items;
    };
    _this.addExistingItem = function (item) {
      if (!_this.existingItem) _this.existingItem = [];
      _this.existingItem.push(item);
    };
    _this.getExistingItems = function () {
      return _this.existingItem;
    };
    _this.setExistingItems = function (existingItem) {
      _this.existingItem = existingItem;
    };
    if (transactionJson) {
      Object.assign(_this, transactionJson);
      _this.price = transactionJson.price ? new price_1.Price(transactionJson.price) : undefined;
      if (transactionJson.item) {
        _this.setItems([]);
        transactionJson.item.forEach(function (itemJson) {
          var item = new item_1.Item(itemJson);
          _this.addItem(item);
        });
      }
      if (transactionJson.existingItem) {
        _this.setExistingItems([]);
        transactionJson.existingItem.forEach(function (itemJson) {
          var item = new item_1.Item(itemJson);
          _this.addExistingItem(item);
        });
      }
    }
    return _this;
  }
  return Transaction;
}(base_1.Base);
exports.Transaction = Transaction;
var TransactionBuilder = /** @class */function () {
  function TransactionBuilder() {
    this.transaction = new Transaction();
  }
  TransactionBuilder.prototype.withTransactionID = function (transactionID) {
    this.transaction.setTransactionID(transactionID);
    return this;
  };
  TransactionBuilder.prototype.withPrice = function (price) {
    this.transaction.setPrice(price);
    return this;
  };
  TransactionBuilder.prototype.withItem = function (item) {
    this.transaction.addItem(item);
    return this;
  };
  TransactionBuilder.prototype.withItems = function (items) {
    this.transaction.setItems(items);
    return this;
  };
  TransactionBuilder.prototype.withExistingItem = function (item) {
    this.transaction.addExistingItem(item);
    return this;
  };
  TransactionBuilder.prototype.withExistingItems = function (items) {
    this.transaction.setExistingItems(items);
    return this;
  };
  TransactionBuilder.prototype.withAttribute = function (name, value) {
    this.transaction.addAttribute(name, value);
    return this;
  };
  TransactionBuilder.prototype.withAttributes = function (items) {
    this.transaction.setAttributes(items);
    return this;
  };
  TransactionBuilder.prototype.withDirectCallLabel = function (directCallLabel) {
    this.transaction.setDirectCallLabel(directCallLabel);
    return this;
  };
  TransactionBuilder.prototype.withStrategy = function (strategy) {
    this.transaction.setStrategy(strategy);
    return this;
  };
  TransactionBuilder.prototype.build = function () {
    return this.transaction;
  };
  return TransactionBuilder;
}();
exports.TransactionBuilder = TransactionBuilder;

/***/ }),

/***/ 14355:
/*!**********************************************!*\
  !*** ./node_modules/udl/dist/models/user.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return extendStatics(d, b);
  };
  return function (d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var base_1 = __webpack_require__(/*! ./base */ 72322);
var direct_call_label_enum_1 = __webpack_require__(/*! ../enums/direct-call-label.enum */ 21010);
var User = /** @class */function (_super) {
  __extends(User, _super);
  function User() {
    var _this = _super.call(this, direct_call_label_enum_1.DirectCallLabelEnum.USER_DATA_LOADED) || this;
    _this.setSegment = function (segment) {
      _this.segment = segment;
    };
    _this.getSegment = function () {
      return _this.segment;
    };
    _this.setProfile = function (profile) {
      _this.profile = profile;
    };
    _this.getProfile = function () {
      return _this.profile;
    };
    _this.setProductHolding = function (productHolding) {
      _this.productHolding = productHolding;
    };
    _this.getProductHolding = function () {
      return _this.productHolding;
    };
    _this.setBilling = function (billing) {
      _this.billing = billing;
    };
    _this.getBilling = function () {
      return _this.billing;
    };
    _this.setPega = function (pega) {
      _this.pega = pega;
    };
    _this.getPega = function () {
      return _this.pega;
    };
    return _this;
  }
  return User;
}(base_1.Base);
exports.User = User;
var UserBuilder = /** @class */function () {
  function UserBuilder() {
    this.user = new User();
  }
  UserBuilder.prototype.withSegment = function (segment) {
    this.user.setSegment(segment);
    return this;
  };
  UserBuilder.prototype.withProfile = function (profile) {
    this.user.setProfile(profile);
    return this;
  };
  UserBuilder.prototype.withProductHolding = function (productHolding) {
    this.user.setProductHolding(productHolding);
    return this;
  };
  UserBuilder.prototype.withDirectCallLabel = function (directCallLabel) {
    this.user.setDirectCallLabel(directCallLabel);
    return this;
  };
  UserBuilder.prototype.withBilling = function (billing) {
    this.user.setBilling(billing);
    return this;
  };
  UserBuilder.prototype.withPega = function (pega) {
    this.user.setPega(pega);
    return this;
  };
  UserBuilder.prototype.build = function () {
    return this.user;
  };
  return UserBuilder;
}();
exports.UserBuilder = UserBuilder;

/***/ }),

/***/ 54808:
/*!************************************************************!*\
  !*** ./node_modules/udl/dist/services/analyticsService.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var page_1 = __webpack_require__(/*! ../models/page */ 69681);
var analytics_beacon_enum_1 = __webpack_require__(/*! ../enums/analytics-beacon.enum */ 57022);
var loggingService_1 = __webpack_require__(/*! ./logging/loggingService */ 56552);
var analytics_constant_1 = __webpack_require__(/*! ../constants/analytics.constant */ 21651);
var analytics_call_fire_strategy_enum_1 = __webpack_require__(/*! ../enums/analytics-call-fire-strategy.enum */ 91563);
var utility_1 = __webpack_require__(/*! ../util/utility */ 96869);
var deferred_1 = __webpack_require__(/*! ./deferred */ 90663);
var AnalyticsService = /** @class */function () {
  function AnalyticsService(analyticsBeacons) {
    this.analyticsBeacons = analyticsBeacons;
    this.analyticsPromises = {};
    this.satelliteCallbacks = [];
    this.loggingService = new loggingService_1.LoggingService();
    this.createSatelliteLoadListener();
    if (!this.analyticsBeacons) {
      this.analyticsBeacons = analytics_beacon_enum_1.AnalyticsBeaconEnum.ENABLED;
    }
  }
  AnalyticsService.prototype.createSatelliteLoadListener = function () {
    var analyticsService = this;
    var _isSatelliteLoaded = window['isSatelliteLoaded'];
    Object.defineProperty(window, 'isSatelliteLoaded', {
      configurable: true,
      enumerable: true,
      get: function () {
        return _isSatelliteLoaded;
      },
      set: function (satelliteLoaded) {
        _isSatelliteLoaded = satelliteLoaded;
        var len = analyticsService.satelliteCallbacks.length;
        for (var i = 0; i < len; i++) {
          var callback = analyticsService.satelliteCallbacks.shift();
          callback();
        }
      }
    });
  };
  AnalyticsService.prototype.pushDataToAnalyticsWithoutWait = function (base, doNotFirePageBeacon) {
    var _this = this;
    var baseBeaconDeferred = this.getOrCreateDeferred(base.getIdentifier());
    var pushDataCallback = function () {
      _this.pushDataToAnalyticsWithoutWaitInternal(base, doNotFirePageBeacon);
    };
    // Force resolve promise in case _satellite took long time to load
    var resolvePromiseIfSatelliteNotLoadedCallback = function () {
      _this.loggingService.log({
        msg: 'Timer with ' + AnalyticsService.TIMEOUT_IF_SATELLITE_NOT_LOADED + 'ms started to force resolve identifier: ' + base.getIdentifier()
      });
      _this.resolvePromiseWithDelay(base.getIdentifier(), AnalyticsService.TIMEOUT_IF_SATELLITE_NOT_LOADED);
    };
    this.onSatelliteLoaded(pushDataCallback, resolvePromiseIfSatelliteNotLoadedCallback);
    return baseBeaconDeferred.promise;
  };
  AnalyticsService.prototype.pushDataToAnalyticsWithoutWaitInternal = function (base, doNotFirePageBeacon) {
    if (doNotFirePageBeacon) {
      return;
    }
    this.fireAnalyticsBeacon(base);
  };
  AnalyticsService.prototype.onSatelliteLoaded = function (callback, resolvePromiseIfSatelliteNotLoadedCallback) {
    if (this.isSatelliteLoaded()) {
      this.loggingService.log({
        msg: '_satellite is loaded!!'
      });
      callback();
      return;
    }
    this.loggingService.log({
      msg: '_satellite is not loaded. Waiting ........'
    });
    this.satelliteCallbacks.push(callback);
    resolvePromiseIfSatelliteNotLoadedCallback();
  };
  AnalyticsService.prototype.isSatelliteLoaded = function () {
    return window['isSatelliteLoaded'];
  };
  AnalyticsService.prototype.pushDataToAnalyticsWithWait = function (analyticsDataObj) {
    var _this = this;
    var analyticsDeferred = this.getOrCreateDeferred(analyticsDataObj.getIdentifier());
    switch (analyticsDataObj.getStrategy()) {
      case analytics_call_fire_strategy_enum_1.AnalyticsCallFireStrategyEnum.FIRE_ON_NEXT_PAGE:
      case analytics_call_fire_strategy_enum_1.AnalyticsCallFireStrategyEnum.FIRE_ON_PAGE_RELOAD:
        this.parkAnalyticsObject(analyticsDataObj);
        this.resolvePromiseNow(analyticsDataObj.getIdentifier());
        break;
      default:
        var pageBeaconPromise_1 = this.getPageBeaconPromise();
        (function (analyticsObj) {
          pageBeaconPromise_1.then(function () {
            _this.fireAnalyticsBeacon(analyticsObj);
          });
        })(analyticsDataObj);
    }
    return analyticsDeferred.promise;
  };
  AnalyticsService.prototype.parkAnalyticsObject = function (analyticsDataObj) {
    var parkedAnalyticsObjectsInStore = utility_1.Utility.getItemFromStore(analytics_constant_1.AnalyticsConstants.STORE_KEY_PARKED_EVENTS);
    var parkedAnalyticsObjects = parkedAnalyticsObjectsInStore ? JSON.parse(parkedAnalyticsObjectsInStore) : [];
    var analyticsObjectToPark = {
      'parkedObject': analyticsDataObj,
      'parkedOnPage': window.location.pathname
    };
    parkedAnalyticsObjects.push(analyticsObjectToPark);
    utility_1.Utility.setItemInStore(analytics_constant_1.AnalyticsConstants.STORE_KEY_PARKED_EVENTS, parkedAnalyticsObjects);
  };
  AnalyticsService.prototype.getAnalyticsPromises = function () {
    return this.analyticsPromises;
  };
  AnalyticsService.prototype.getOrCreateDeferred = function (promiseIdentifier) {
    if (!promiseIdentifier) {
      return;
    }
    var analyticsDeferred = this.analyticsPromises[promiseIdentifier];
    if (analyticsDeferred === undefined) {
      analyticsDeferred = new deferred_1.Deferred();
      this.analyticsPromises[promiseIdentifier] = analyticsDeferred;
    }
    return analyticsDeferred;
  };
  AnalyticsService.prototype.getPageBeaconPromise = function () {
    return this.getOrCreateDeferred(page_1.Page.PAGE_IDENTIFIER).promise;
  };
  AnalyticsService.prototype.fireAnalyticsBeacon = function (base) {
    this.loggingService.log({
      msg: 'invoking launch direct call: ' + base.getDirectCallLabel(),
      identifier: base.getIdentifier()
    });
    var isAnalyticsBeaconFired = false;
    if (this.analyticsBeacons === analytics_beacon_enum_1.AnalyticsBeaconEnum.ENABLED) {
      try {
        window['_satellite'].track(base.getDirectCallLabel(), {
          identifier: base.getIdentifier()
        });
        isAnalyticsBeaconFired = true;
        this.loggingService.log({
          msg: 'direct call invoked!',
          identifier: base.getIdentifier()
        });
      } catch (err) {
        console.log("Analytics direct call invocation failed", err);
      }
    }
    this.resolvePromiseNow(base.getIdentifier());
    return isAnalyticsBeaconFired;
  };
  AnalyticsService.prototype.resolvePromiseWithDelay = function (promiseIdentifier, duration) {
    var _this = this;
    setTimeout(function () {
      _this.resolvePromiseNow(promiseIdentifier);
    }, duration);
  };
  AnalyticsService.prototype.resolvePromiseNow = function (promiseIdentifier) {
    var deferred = this.analyticsPromises[promiseIdentifier];
    if (deferred) {
      deferred.resolve(true);
      this.loggingService.log({
        msg: 'promise resolved',
        identifier: promiseIdentifier
      });
      if (promiseIdentifier !== page_1.Page.PAGE_IDENTIFIER) {
        delete this.analyticsPromises[promiseIdentifier];
      }
    }
  };
  AnalyticsService.TIMEOUT_IF_SATELLITE_NOT_LOADED = 6000; // ms
  return AnalyticsService;
}();
exports.AnalyticsService = AnalyticsService;

/***/ }),

/***/ 90663:
/*!****************************************************!*\
  !*** ./node_modules/udl/dist/services/deferred.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var Deferred = /** @class */function () {
  function Deferred() {
    var _this = this;
    this._promise = new Promise(function (resolve, reject) {
      _this._reject = reject;
      _this._resolve = resolve;
    });
  }
  Object.defineProperty(Deferred.prototype, "promise", {
    get: function () {
      return this._promise;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Deferred.prototype, "resolve", {
    get: function () {
      return this._resolve;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Deferred.prototype, "reject", {
    get: function () {
      return this._reject;
    },
    enumerable: true,
    configurable: true
  });
  return Deferred;
}();
exports.Deferred = Deferred;

/***/ }),

/***/ 56552:
/*!******************************************************************!*\
  !*** ./node_modules/udl/dist/services/logging/loggingService.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var LoggingService = /** @class */function () {
  function LoggingService() {
    var _this = this;
    this.perfLogEvents = [];
    this.log = function (logEvent) {
      if (_this.isLoggingEnabled) {
        var d = new Date();
        var at = d.getMinutes() + 'min:' + d.getSeconds() + 'sec:' + d.getMilliseconds() + 'ms';
        console.log(at, JSON.stringify(logEvent));
      }
    };
    this.startPerflog = function (identifier) {
      if (_this.isLoggingEnabled) {
        var perfLogEvent = _this.perfLogEvents.find(function (item) {
          return item.identifier === identifier;
        }) || new PerfLogEvent();
        perfLogEvent.identifier = identifier;
        perfLogEvent.startTime = _this.getLoggingTime();
        _this.perfLogEvents.push(perfLogEvent);
      }
    };
    this.stopPerflog = function (identifier) {
      if (_this.isLoggingEnabled) {
        var perfLogEvent = _this.perfLogEvents.find(function (item) {
          return item.identifier === identifier;
        });
        if (perfLogEvent) {
          perfLogEvent.stopTime = _this.getLoggingTime();
          var timeTake = perfLogEvent.stopTime - perfLogEvent.startTime;
          _this.log({
            msg: 'execution time taken by identifier: ' + identifier,
            time: timeTake + 'ms'
          });
        } else {
          _this.log({
            msg: 'execution time taken by identifier: ' + identifier,
            time: 'Start event not logged'
          });
        }
      }
    };
    this.getLoggingTime = function () {
      return Date.now();
    };
    this.isLoggingEnabled = window.sessionStorage.getItem('udl.logging') === 'enable';
  }
  return LoggingService;
}();
exports.LoggingService = LoggingService;
var PerfLogEvent = /** @class */function () {
  function PerfLogEvent() {
    this.startTime = 0;
  }
  return PerfLogEvent;
}();

/***/ }),

/***/ 96869:
/*!***********************************************!*\
  !*** ./node_modules/udl/dist/util/utility.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var Utility = /** @class */function () {
  function Utility() {}
  Utility.getUUID = function () {
    var dt = new Date().getTime();
    var uuidentifier = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
    });
    return uuidentifier;
  };
  Utility.getCurrentDateTime = function () {
    var formattedDate;
    var currentDate = new Date();
    var timeZoneOffset = -currentDate.getTimezoneOffset(),
      differenceSign = timeZoneOffset >= 0 ? '+' : '-',
      pad = function (num) {
        return (Math.floor(Math.abs(num)) < 10 ? '0' : '') + Math.floor(Math.abs(num));
      };
    formattedDate = currentDate.getFullYear() + '-' + pad(currentDate.getMonth() + 1) + '-' + pad(currentDate.getDate()) + 'T' + pad(currentDate.getHours()) + ':' + pad(currentDate.getMinutes()) + ':' + pad(currentDate.getSeconds()) + differenceSign + pad(timeZoneOffset / 60) + pad(timeZoneOffset % 60);
    return formattedDate;
  };
  Utility.getItemFromStore = function (name) {
    return window.sessionStorage.getItem(name);
  };
  Utility.setItemInStore = function (name, value) {
    window.sessionStorage.setItem(name, JSON.stringify(value));
  };
  return Utility;
}();
exports.Utility = Utility;

/***/ }),

/***/ 42321:
/*!******************************************!*\
  !*** ./node_modules/tslib/tslib.es6.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: () => (/* binding */ __addDisposableResource),
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __disposeResources: () => (/* binding */ __disposeResources),
/* harmony export */   __esDecorate: () => (/* binding */ __esDecorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __propKey: () => (/* binding */ __propKey),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __runInitializers: () => (/* binding */ __runInitializers),
/* harmony export */   __setFunctionName: () => (/* binding */ __setFunctionName),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
  function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose;
    if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
      }
      catch (e) {
          fail(e);
      }
    }
    if (env.hasError) throw env.error;
  }
  return next();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
});


/***/ })

}])
//# sourceMappingURL=libs_shared_datalayer_src_index_ts-_6b2b1.js.map