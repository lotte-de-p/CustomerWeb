(self["webpackChunkproduct_journey_mfe"] = self["webpackChunkproduct_journey_mfe"] || []).push([["libs_shared_message_src_index_ts-_15010"],{

/***/ 64976:
/*!******************************************!*\
  !*** ./libs/shared/message/src/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractMessage: () => (/* reexport safe */ _lib_model__WEBPACK_IMPORTED_MODULE_3__.AbstractMessage),
/* harmony export */   ErrorFlowMessage: () => (/* reexport safe */ _lib_model__WEBPACK_IMPORTED_MODULE_3__.ErrorFlowMessage),
/* harmony export */   ErrorMessage: () => (/* reexport safe */ _lib_model__WEBPACK_IMPORTED_MODULE_3__.ErrorMessage),
/* harmony export */   InfoFlowMessage: () => (/* reexport safe */ _lib_model__WEBPACK_IMPORTED_MODULE_3__.InfoFlowMessage),
/* harmony export */   MessageComponent: () => (/* reexport safe */ _lib_message__WEBPACK_IMPORTED_MODULE_2__.MessageComponent),
/* harmony export */   MessageFlowComponent: () => (/* reexport safe */ _lib_message__WEBPACK_IMPORTED_MODULE_2__.MessageFlowComponent),
/* harmony export */   MessageService: () => (/* reexport safe */ _lib_message_service__WEBPACK_IMPORTED_MODULE_0__.MessageService),
/* harmony export */   MessageType: () => (/* reexport safe */ _lib_model__WEBPACK_IMPORTED_MODULE_3__.MessageType),
/* harmony export */   MessagesModule: () => (/* reexport safe */ _lib_messages_module__WEBPACK_IMPORTED_MODULE_1__.MessagesModule),
/* harmony export */   SuccessFlowMessageModel: () => (/* reexport safe */ _lib_model__WEBPACK_IMPORTED_MODULE_3__.SuccessFlowMessageModel),
/* harmony export */   SuccessMessage: () => (/* reexport safe */ _lib_model__WEBPACK_IMPORTED_MODULE_3__.SuccessMessage),
/* harmony export */   WarningFlowMessage: () => (/* reexport safe */ _lib_model__WEBPACK_IMPORTED_MODULE_3__.WarningFlowMessage),
/* harmony export */   WarningMessage: () => (/* reexport safe */ _lib_model__WEBPACK_IMPORTED_MODULE_3__.WarningMessage)
/* harmony export */ });
/* harmony import */ var _lib_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/message.service */ 16325);
/* harmony import */ var _lib_messages_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/messages.module */ 55500);
/* harmony import */ var _lib_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/message */ 62950);
/* harmony import */ var _lib_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/model */ 18171);
/*
 * Public API Surface of ng-lib-message
 */





/***/ }),

/***/ 16325:
/*!********************************************************!*\
  !*** ./libs/shared/message/src/lib/message.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageService: () => (/* binding */ MessageService)
/* harmony export */ });
/* harmony import */ var _model_message_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/message-type.enum */ 65614);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);


class MessageService {
  messages = {};
  addMessage(message) {
    if (!this.messages[message.messageGroupName]) {
      this.messages[message.messageGroupName] = {
        [message.type]: []
      };
    }
    if (!this.messages[message.messageGroupName][message.type]) {
      this.messages[message.messageGroupName][message.type] = [];
    }
    this.messages[message.messageGroupName][message.type].push(message);
  }
  getErrorMessages(messageGroupName) {
    return this.getMessagesByType(messageGroupName, _model_message_type_enum__WEBPACK_IMPORTED_MODULE_0__.MessageType.ERROR);
  }
  getMessagesByGroupName(messageGroupName) {
    const messages = [];
    if (this.hasMessagesOfType(messageGroupName, _model_message_type_enum__WEBPACK_IMPORTED_MODULE_0__.MessageType.ERROR)) {
      messages.push(this.getMessagesByType(messageGroupName, _model_message_type_enum__WEBPACK_IMPORTED_MODULE_0__.MessageType.ERROR)[0]);
    }
    if (this.hasMessagesOfType(messageGroupName, _model_message_type_enum__WEBPACK_IMPORTED_MODULE_0__.MessageType.WARNING)) {
      messages.push(this.getMessagesByType(messageGroupName, _model_message_type_enum__WEBPACK_IMPORTED_MODULE_0__.MessageType.WARNING)[0]);
    }
    if (this.hasMessagesOfType(messageGroupName, _model_message_type_enum__WEBPACK_IMPORTED_MODULE_0__.MessageType.SUCCESS)) {
      messages.push(this.getMessagesByType(messageGroupName, _model_message_type_enum__WEBPACK_IMPORTED_MODULE_0__.MessageType.SUCCESS)[0]);
    }
    if (this.hasMessagesOfType(messageGroupName, _model_message_type_enum__WEBPACK_IMPORTED_MODULE_0__.MessageType.INFO)) {
      messages.push(this.getMessagesByType(messageGroupName, _model_message_type_enum__WEBPACK_IMPORTED_MODULE_0__.MessageType.INFO)[0]);
    }
    return messages;
  }
  getMessagesByType(messageGroupName, type) {
    const messagesByGroupName = this.messages[messageGroupName];
    if (!messagesByGroupName) {
      return [];
    }
    return messagesByGroupName[type];
  }
  clearErrorMessages(messageGroupName) {
    return this.clearMessagesByType(messageGroupName, _model_message_type_enum__WEBPACK_IMPORTED_MODULE_0__.MessageType.ERROR);
  }
  clearMessagesByType(messageGroupName, type) {
    if (!this.messages[messageGroupName]) {
      return;
    }
    this.messages[messageGroupName] = {
      [type]: []
    };
  }
  hasErrorMessages(messageGroupName) {
    return this.hasMessagesOfType(messageGroupName, _model_message_type_enum__WEBPACK_IMPORTED_MODULE_0__.MessageType.ERROR);
  }
  hasMessagesOfType(messageGroupName, type) {
    return this.getMessagesByType(messageGroupName, type)?.filter(m => m.type === type).length > 0;
  }
  clearMessages(messageGroupName) {
    if (!this.messages[messageGroupName]) {
      return;
    }
    this.messages[messageGroupName] = {};
  }
  getRegisteredGroupNames() {
    return Object.keys(this.messages);
  }
  static ɵfac = function MessageService_Factory(t) {
    return new (t || MessageService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: MessageService,
    factory: MessageService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 62950:
/*!******************************************************!*\
  !*** ./libs/shared/message/src/lib/message/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageComponent: () => (/* reexport safe */ _message_component__WEBPACK_IMPORTED_MODULE_0__.MessageComponent),
/* harmony export */   MessageFlowComponent: () => (/* reexport safe */ _message_flow_component__WEBPACK_IMPORTED_MODULE_1__.MessageFlowComponent)
/* harmony export */ });
/* harmony import */ var _message_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message.component */ 87252);
/* harmony import */ var _message_flow_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message-flow.component */ 2176);



/***/ }),

/***/ 2176:
/*!***********************************************************************!*\
  !*** ./libs/shared/message/src/lib/message/message-flow.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageFlowComponent: () => (/* binding */ MessageFlowComponent)
/* harmony export */ });
/* harmony import */ var _message_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message.component */ 87252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);



function MessageFlowComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span")(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const message_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate2"]("notification notification--", message_r4.type, " notification--", message_r4.type, "--flow");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "app-message-flow");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("icon-", message_r4.subtype, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r3.getTranslatedLabel(message_r4), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
function MessageFlowComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MessageFlowComponent_ng_container_0_div_1_Template, 3, 9, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.getMessages());
  }
}
function MessageFlowComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
  }
}
const _c0 = ["*"];
class MessageFlowComponent extends _message_component__WEBPACK_IMPORTED_MODULE_0__.MessageComponent {
  static ɵfac = /*@__PURE__*/(() => {
    let ɵMessageFlowComponent_BaseFactory;
    return function MessageFlowComponent_Factory(t) {
      return (ɵMessageFlowComponent_BaseFactory || (ɵMessageFlowComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MessageFlowComponent)))(t || MessageFlowComponent);
    };
  })();
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MessageFlowComponent,
    selectors: [["app-message-flow"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c0,
    decls: 3,
    vars: 2,
    consts: [[4, "ngIf", "ngIfElse"], ["noErrorTemplate", ""], [3, "class", 4, "ngFor", "ngForOf"], [3, "innerHTML"]],
    template: function MessageFlowComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MessageFlowComponent_ng_container_0_Template, 2, 1, "ng-container", 0)(1, MessageFlowComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.getMessages().length > 0)("ngIfElse", _r2);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
    encapsulation: 2
  });
}

/***/ }),

/***/ 87252:
/*!******************************************************************!*\
  !*** ./libs/shared/message/src/lib/message/message.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageComponent: () => (/* binding */ MessageComponent)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message.service */ 16325);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @telenet/ng-lib-shared */ 77157);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_4__);








function MessageComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const message_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("notification notification--", message_r4.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate2"]("icon icon-", message_r4.subtype, " ", message_r4.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r3.getTranslatedLabel(message_r4), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
  }
}
function MessageComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MessageComponent_ng_container_0_div_1_Template, 2, 8, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.getMessages());
  }
}
function MessageComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
  }
}
const _c0 = ["*"];
class MessageComponent {
  messageService;
  translateService;
  domService;
  messageGroupName = '';
  scrollCheck = false;
  constructor(messageService, translateService, domService) {
    this.messageService = messageService;
    this.translateService = translateService;
    this.domService = domService;
  }
  getMessages() {
    const messages = this.messageService.getMessagesByGroupName(this.messageGroupName);
    if (messages.length > 0) {
      this.scrollToTop();
      return [messages[0]];
    } else {
      this.scrollCheck = false;
      return [];
    }
  }
  getTranslatedLabel(message) {
    const translatedLabel = this.translateService.instant(message.getMessageLabel(), message.interpolateParams);
    if (translatedLabel === '' || translatedLabel === message.getMessageLabel()) {
      return this.translateService.instant('ng.' + message.getMessageSuffix(), message.interpolateParams);
    }
    return translatedLabel;
  }
  scrollToTop() {
    if (!this.scrollCheck) {
      this.domService.scrollToTop();
      this.scrollCheck = true;
    }
  }
  static ɵfac = function MessageComponent_Factory(t) {
    return new (t || MessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_message_service__WEBPACK_IMPORTED_MODULE_1__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_2__.DomService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: MessageComponent,
    selectors: [["app-message"]],
    inputs: {
      messageGroupName: "messageGroupName"
    },
    ngContentSelectors: _c0,
    decls: 3,
    vars: 2,
    consts: [[4, "ngIf", "ngIfElse"], ["noErrorTemplate", ""], [3, "class", 4, "ngFor", "ngForOf"], [3, "innerHTML"]],
    template: function MessageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MessageComponent_ng_container_0_Template, 2, 1, "ng-container", 0)(1, MessageComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.getMessages().length > 0)("ngIfElse", _r2);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
    encapsulation: 2
  });
}

/***/ }),

/***/ 55500:
/*!********************************************************!*\
  !*** ./libs/shared/message/src/lib/messages.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessagesModule: () => (/* binding */ MessagesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message/message.component */ 87252);
/* harmony import */ var _message_message_flow_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message/message-flow.component */ 2176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);





class MessagesModule {
  static ɵfac = function MessagesModule_Factory(t) {
    return new (t || MessagesModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: MessagesModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MessagesModule, {
    declarations: [_message_message_component__WEBPACK_IMPORTED_MODULE_2__.MessageComponent, _message_message_flow_component__WEBPACK_IMPORTED_MODULE_3__.MessageFlowComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule],
    exports: [_message_message_component__WEBPACK_IMPORTED_MODULE_2__.MessageComponent, _message_message_flow_component__WEBPACK_IMPORTED_MODULE_3__.MessageFlowComponent]
  });
})();

/***/ }),

/***/ 53479:
/*!*********************************************************************!*\
  !*** ./libs/shared/message/src/lib/model/abstract-message.model.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractMessage: () => (/* binding */ AbstractMessage)
/* harmony export */ });
class AbstractMessage {
  _messageGroupName;
  _key;
  _type;
  _subtype;
  _interpolateParams;
  constructor(type, messageGroupName, key, subtype, interpolateParams) {
    this._messageGroupName = messageGroupName;
    this._key = key;
    this._type = type;
    this._subtype = subtype;
    this._interpolateParams = interpolateParams;
  }
  get messageGroupName() {
    return this._messageGroupName;
  }
  get key() {
    return this._key;
  }
  get type() {
    return this._type;
  }
  get subtype() {
    return this._subtype;
  }
  get interpolateParams() {
    return this._interpolateParams;
  }
  getMessageLabel() {
    return 'ng.' + this.messageGroupName + '.' + this.getMessageSuffix();
  }
  getMessageSuffix() {
    return this.key + '-' + this.type;
  }
}

/***/ }),

/***/ 34269:
/*!***********************************************************************!*\
  !*** ./libs/shared/message/src/lib/model/error-flow-message.model.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorFlowMessage: () => (/* binding */ ErrorFlowMessage)
/* harmony export */ });
/* harmony import */ var _abstract_message_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-message.model */ 53479);
/* harmony import */ var _message_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message-type.enum */ 65614);


class ErrorFlowMessage extends _abstract_message_model__WEBPACK_IMPORTED_MODULE_0__.AbstractMessage {
  constructor(messageGroupName, key) {
    super(_message_type_enum__WEBPACK_IMPORTED_MODULE_1__.MessageType.ERROR, messageGroupName, key, _message_type_enum__WEBPACK_IMPORTED_MODULE_1__.MessageType.ICON_ERROR);
  }
}

/***/ }),

/***/ 80039:
/*!******************************************************************!*\
  !*** ./libs/shared/message/src/lib/model/error-message.model.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorMessage: () => (/* binding */ ErrorMessage)
/* harmony export */ });
/* harmony import */ var _abstract_message_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-message.model */ 53479);
/* harmony import */ var _message_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message-type.enum */ 65614);


class ErrorMessage extends _abstract_message_model__WEBPACK_IMPORTED_MODULE_0__.AbstractMessage {
  constructor(messageGroupName, key, interpolateParams) {
    super(_message_type_enum__WEBPACK_IMPORTED_MODULE_1__.MessageType.ERROR, messageGroupName, key, _message_type_enum__WEBPACK_IMPORTED_MODULE_1__.MessageType.ICON_ERROR, interpolateParams);
  }
}

/***/ }),

/***/ 18171:
/*!****************************************************!*\
  !*** ./libs/shared/message/src/lib/model/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractMessage: () => (/* reexport safe */ _abstract_message_model__WEBPACK_IMPORTED_MODULE_0__.AbstractMessage),
/* harmony export */   ErrorFlowMessage: () => (/* reexport safe */ _error_flow_message_model__WEBPACK_IMPORTED_MODULE_1__.ErrorFlowMessage),
/* harmony export */   ErrorMessage: () => (/* reexport safe */ _error_message_model__WEBPACK_IMPORTED_MODULE_2__.ErrorMessage),
/* harmony export */   InfoFlowMessage: () => (/* reexport safe */ _info_flow_message_model__WEBPACK_IMPORTED_MODULE_3__.InfoFlowMessage),
/* harmony export */   MessageType: () => (/* reexport safe */ _message_type_enum__WEBPACK_IMPORTED_MODULE_4__.MessageType),
/* harmony export */   SuccessFlowMessageModel: () => (/* reexport safe */ _success_flow_message_model__WEBPACK_IMPORTED_MODULE_5__.SuccessFlowMessageModel),
/* harmony export */   SuccessMessage: () => (/* reexport safe */ _success_message_model__WEBPACK_IMPORTED_MODULE_6__.SuccessMessage),
/* harmony export */   WarningFlowMessage: () => (/* reexport safe */ _warning_flow_message_model__WEBPACK_IMPORTED_MODULE_7__.WarningFlowMessage),
/* harmony export */   WarningMessage: () => (/* reexport safe */ _warning_message_model__WEBPACK_IMPORTED_MODULE_8__.WarningMessage)
/* harmony export */ });
/* harmony import */ var _abstract_message_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-message.model */ 53479);
/* harmony import */ var _error_flow_message_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-flow-message.model */ 34269);
/* harmony import */ var _error_message_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-message.model */ 80039);
/* harmony import */ var _info_flow_message_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info-flow-message.model */ 88539);
/* harmony import */ var _message_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message-type.enum */ 65614);
/* harmony import */ var _success_flow_message_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./success-flow-message.model */ 16621);
/* harmony import */ var _success_message_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./success-message.model */ 15576);
/* harmony import */ var _warning_flow_message_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./warning-flow-message.model */ 52198);
/* harmony import */ var _warning_message_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./warning-message.model */ 67807);










/***/ }),

/***/ 88539:
/*!**********************************************************************!*\
  !*** ./libs/shared/message/src/lib/model/info-flow-message.model.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InfoFlowMessage: () => (/* binding */ InfoFlowMessage)
/* harmony export */ });
/* harmony import */ var _abstract_message_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-message.model */ 53479);
/* harmony import */ var _message_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message-type.enum */ 65614);


class InfoFlowMessage extends _abstract_message_model__WEBPACK_IMPORTED_MODULE_0__.AbstractMessage {
  constructor(messageGroupName, key, interpolateParams) {
    super(_message_type_enum__WEBPACK_IMPORTED_MODULE_1__.MessageType.INFO, messageGroupName, key, _message_type_enum__WEBPACK_IMPORTED_MODULE_1__.MessageType.ICON_INFO, interpolateParams);
  }
}

/***/ }),

/***/ 65614:
/*!****************************************************************!*\
  !*** ./libs/shared/message/src/lib/model/message-type.enum.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageType: () => (/* binding */ MessageType)
/* harmony export */ });
var MessageType;
(function (MessageType) {
  MessageType["ERROR"] = "errorfield";
  MessageType["WARNING"] = "warning";
  MessageType["INFORMATION_WARNING"] = "information warning";
  MessageType["SUCCESS"] = "success";
  MessageType["INFO"] = "info";
  MessageType["ICON_ERROR"] = "error-shape";
  MessageType["ICON_WARNING"] = "alert-shape";
  MessageType["ICON_INFO"] = "information-shape";
  MessageType["ICON_SUCCESS"] = "check-shape";
})(MessageType || (MessageType = {}));

/***/ }),

/***/ 16621:
/*!*************************************************************************!*\
  !*** ./libs/shared/message/src/lib/model/success-flow-message.model.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SuccessFlowMessageModel: () => (/* binding */ SuccessFlowMessageModel)
/* harmony export */ });
/* harmony import */ var _abstract_message_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-message.model */ 53479);
/* harmony import */ var _message_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message-type.enum */ 65614);


class SuccessFlowMessageModel extends _abstract_message_model__WEBPACK_IMPORTED_MODULE_0__.AbstractMessage {
  constructor(messageGroupName, key, interpolateParams) {
    super(_message_type_enum__WEBPACK_IMPORTED_MODULE_1__.MessageType.SUCCESS, messageGroupName, key, _message_type_enum__WEBPACK_IMPORTED_MODULE_1__.MessageType.SUCCESS, interpolateParams);
  }
}

/***/ }),

/***/ 15576:
/*!********************************************************************!*\
  !*** ./libs/shared/message/src/lib/model/success-message.model.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SuccessMessage: () => (/* binding */ SuccessMessage)
/* harmony export */ });
/* harmony import */ var _abstract_message_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-message.model */ 53479);
/* harmony import */ var _message_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message-type.enum */ 65614);


class SuccessMessage extends _abstract_message_model__WEBPACK_IMPORTED_MODULE_0__.AbstractMessage {
  constructor(messageGroupName, key) {
    super(_message_type_enum__WEBPACK_IMPORTED_MODULE_1__.MessageType.SUCCESS, messageGroupName, key, _message_type_enum__WEBPACK_IMPORTED_MODULE_1__.MessageType.ICON_SUCCESS);
  }
}

/***/ }),

/***/ 52198:
/*!*************************************************************************!*\
  !*** ./libs/shared/message/src/lib/model/warning-flow-message.model.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WarningFlowMessage: () => (/* binding */ WarningFlowMessage)
/* harmony export */ });
/* harmony import */ var _abstract_message_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-message.model */ 53479);
/* harmony import */ var _message_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message-type.enum */ 65614);


class WarningFlowMessage extends _abstract_message_model__WEBPACK_IMPORTED_MODULE_0__.AbstractMessage {
  constructor(messageGroupName, key, interpolateParams) {
    super(_message_type_enum__WEBPACK_IMPORTED_MODULE_1__.MessageType.WARNING, messageGroupName, key, _message_type_enum__WEBPACK_IMPORTED_MODULE_1__.MessageType.INFORMATION_WARNING, interpolateParams);
  }
}

/***/ }),

/***/ 67807:
/*!********************************************************************!*\
  !*** ./libs/shared/message/src/lib/model/warning-message.model.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WarningMessage: () => (/* binding */ WarningMessage)
/* harmony export */ });
/* harmony import */ var _abstract_message_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-message.model */ 53479);
/* harmony import */ var _message_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message-type.enum */ 65614);


class WarningMessage extends _abstract_message_model__WEBPACK_IMPORTED_MODULE_0__.AbstractMessage {
  constructor(messageGroupName, key, interpolateParams) {
    super(_message_type_enum__WEBPACK_IMPORTED_MODULE_1__.MessageType.WARNING, messageGroupName, key, _message_type_enum__WEBPACK_IMPORTED_MODULE_1__.MessageType.ICON_WARNING, interpolateParams);
  }
}

/***/ })

}])
//# sourceMappingURL=libs_shared_message_src_index_ts-_15010.js.map