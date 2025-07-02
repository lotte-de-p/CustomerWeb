(self["webpackChunkinbox_messages_mfe"] = self["webpackChunkinbox_messages_mfe"] || []).push([["libs_engagement_inbox-messages_ui_src_index_ts-_73791"],{

/***/ 90583:
/*!********************************************************!*\
  !*** ./libs/engagement/inbox-messages/ui/src/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InboxMessageComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.InboxMessageComponent),
/* harmony export */   InboxMessageEmptyDataComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.InboxMessageEmptyDataComponent),
/* harmony export */   InboxMessageErrorComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.InboxMessageErrorComponent),
/* harmony export */   InboxMessageLoaderComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.InboxMessageLoaderComponent),
/* harmony export */   InboxMessageNotificationIconComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.InboxMessageNotificationIconComponent)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ 38781);


/***/ }),

/***/ 72003:
/*!********************************************************************************************************!*\
  !*** ./libs/engagement/inbox-messages/ui/src/lib/inbox-message-badge/inbox-message-badge.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InboxMessageBadgeComponent: () => (/* binding */ InboxMessageBadgeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inbox_messages_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inbox-messages/data-access */ 3059);
/* harmony import */ var _inbox_messages_data_access__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inbox_messages_data_access__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);





class InboxMessageBadgeComponent {
  constructor() {
    this.badgeType = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(_inbox_messages_data_access__WEBPACK_IMPORTED_MODULE_1__.BadgeType.New);
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.effect)(() => {
      this.backgroundClass = this.getBackgroundClass(this.badgeType());
    });
  }
  getBackgroundClass(badgeType) {
    switch (badgeType) {
      case _inbox_messages_data_access__WEBPACK_IMPORTED_MODULE_1__.BadgeType.New:
        return 'background-olivine_40';
      case _inbox_messages_data_access__WEBPACK_IMPORTED_MODULE_1__.BadgeType.Info:
        return 'background-emerald_40';
      default:
        return 'background-olivine_40';
    }
  }
  static #_ = this.ɵfac = function InboxMessageBadgeComponent_Factory(t) {
    return new (t || InboxMessageBadgeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: InboxMessageBadgeComponent,
    selectors: [["tg-inbox-message-badge"]],
    inputs: {
      badgeType: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].SignalBased, "badgeType"]
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 6,
    consts: [[1, "font--caption-bold", "text-weight--xl", "skeleton--text", "skeleton--one-line"]],
    template: function InboxMessageBadgeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx.backgroundClass, " display--inline-flex");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "ng.inbox-messages.badge.txt"), " ");
      }
    },
    dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 91874:
/*!******************************************************************************************************!*\
  !*** ./libs/engagement/inbox-messages/ui/src/lib/inbox-message-date/inbox-message-date.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InboxMessageDateComponent: () => (/* binding */ InboxMessageDateComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);





const _c0 = a0 => ({
  "display--inline-flex": a0
});
const _c1 = a0 => ({
  value: a0
});
class InboxMessageDateComponent {
  constructor() {
    this.isRead = _angular_core__WEBPACK_IMPORTED_MODULE_1__.input.required();
    this.messageAdded = _angular_core__WEBPACK_IMPORTED_MODULE_1__.input.required();
  }
  static #_ = this.ɵfac = function InboxMessageDateComponent_Factory(t) {
    return new (t || InboxMessageDateComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: InboxMessageDateComponent,
    selectors: [["tg-inbox-message-date"]],
    inputs: {
      isRead: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInputFlags"].SignalBased, "isRead"],
      messageAdded: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInputFlags"].SignalBased, "messageAdded"]
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 9,
    consts: [[3, "ngClass"], [1, "font--caption", "text-weight--xl", "skeleton--text", "skeleton--one-line"]],
    template: function InboxMessageDateComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, !ctx.isRead()));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 2, "ng.inbox-messages.message-added-" + ctx.messageAdded().unit.toLowerCase() + ".txt", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c1, ctx.messageAdded().amount)), " ");
      }
    },
    dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass],
    encapsulation: 2
  });
}

/***/ }),

/***/ 21360:
/*!******************************************************************************************************************!*\
  !*** ./libs/engagement/inbox-messages/ui/src/lib/inbox-message-empty-data/inbox-message-empty-data.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InboxMessageEmptyDataComponent: () => (/* binding */ InboxMessageEmptyDataComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




class InboxMessageEmptyDataComponent {
  static #_ = this.ɵfac = function InboxMessageEmptyDataComponent_Factory(t) {
    return new (t || InboxMessageEmptyDataComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: InboxMessageEmptyDataComponent,
    selectors: [["tg-inbox-message-empty-data"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 14,
    vars: 7,
    consts: [[1, "whitespace", "whitespace--extra-large"], [1, "image-title-text-block", "image-title-text-block--vertical-align", "display--flex", "flex-direction--column", "align-items--center"], [1, "cmp-image"], ["alt", "", 1, "cmp-image__image", "cmp-image__image--original-size", 3, "src"], [1, "text-align--center"], [1, "cmp", "cmp-title"], [1, ""], [1, "cmp-text"], [1, "whitespace", "whitespace--medium"]],
    template: function InboxMessageEmptyDataComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div")(10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "div", 8);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", "/content/dam/www-telenet-touch/nl/dfd/no-inbox-messages.svg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 3, "ng.inbox-messages.no-messages-title.txt"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 5, "ng.inbox-messages.no-messages-description.txt"), " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 89545:
/*!********************************************************************************************************!*\
  !*** ./libs/engagement/inbox-messages/ui/src/lib/inbox-message-error/inbox-message-error.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InboxMessageErrorComponent: () => (/* binding */ InboxMessageErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);





class InboxMessageErrorComponent {
  constructor() {
    this.errorAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  handleErrorAction() {
    this.errorAction.emit();
  }
  static #_ = this.ɵfac = function InboxMessageErrorComponent_Factory(t) {
    return new (t || InboxMessageErrorComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: InboxMessageErrorComponent,
    selectors: [["tg-inbox-message-error"]],
    outputs: {
      errorAction: "errorAction"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 15,
    vars: 7,
    consts: [[1, "whitespace", "whitespace--extra-large"], [1, "image-title-text-block", "image-title-text-block--vertical-align", "display--flex", "flex-direction--column", "align-items--center"], [1, "cmp-image"], ["alt", "", 1, "cmp-image__image", "cmp-image__image--original-size", 3, "src"], [1, "text-align--center"], [1, "cmp", "cmp-title"], [1, ""], [1, "mt--m"], [1, "button", "button--primary", 3, "click"], [1, "whitespace", "whitespace--medium"]],
    template: function InboxMessageErrorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7)(10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InboxMessageErrorComponent_Template_button_click_10_listener() {
          return ctx.handleErrorAction();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 9);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "/content/dam/www-telenet-touch/nl/dfd/desktop-error.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 3, "ng.inbox-messages.error.txt"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 5, "ng.inbox-messages.error.btn"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 4054:
/*!**********************************************************************************************************!*\
  !*** ./libs/engagement/inbox-messages/ui/src/lib/inbox-message-loader/inbox-message-loader.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InboxMessageLoaderComponent: () => (/* binding */ InboxMessageLoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);




function InboxMessageLoaderComponent_ng_container_0_For_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 4);
  }
}
function InboxMessageLoaderComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](4, InboxMessageLoaderComponent_ng_container_0_For_5_Template, 1, 0, "div", 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx_r0.messageSkeletons);
  }
}
class InboxMessageLoaderComponent {
  constructor() {
    this.MESSAGE_SKELETONS_COUNT = 10;
    this.loading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)(true);
    this.messageSkeletons = Array(this.MESSAGE_SKELETONS_COUNT);
  }
  static #_ = this.ɵfac = function InboxMessageLoaderComponent_Factory(t) {
    return new (t || InboxMessageLoaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: InboxMessageLoaderComponent,
    selectors: [["tg-inbox-message-loader"]],
    inputs: {
      loading: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].SignalBased, "loading"]
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [[4, "ngIf"], [1, "mb--xxs", "row"], [1, "col-xs-4", "col-sm-1"], [1, "skeleton", "skeleton--basic", "skeleton--text", "skeleton--one-line"], [1, "notification", "skeleton", "skeleton--basic", "skeleton--container", "mb--l--sm"], ["class", "notification skeleton skeleton--basic skeleton--container mb--l--sm"]],
    template: function InboxMessageLoaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InboxMessageLoaderComponent_ng_container_0_Template, 6, 0, "ng-container", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
    encapsulation: 2
  });
}

/***/ }),

/***/ 92062:
/*!********************************************************************************************************************************!*\
  !*** ./libs/engagement/inbox-messages/ui/src/lib/inbox-message-notification-icon/inbox-message-notification-icon.component.ts ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InboxMessageNotificationIconComponent: () => (/* binding */ InboxMessageNotificationIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);





function InboxMessageNotificationIconComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 4);
  }
}
function InboxMessageNotificationIconComponent_ng_container_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const iconText_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", iconText_r2, " ");
  }
}
function InboxMessageNotificationIconComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, InboxMessageNotificationIconComponent_ng_container_4_span_1_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const iconText_r2 = ctx.ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.hideIconLabel && iconText_r2 !== "ng.inbox-messages.notification-icon.txt");
  }
}
class InboxMessageNotificationIconComponent {
  constructor() {
    this.notificationClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.unreadMessagesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  ngOnChanges(changes) {
    if (changes['unreadMessages']) {
      const hasUnreadMessages = this.unreadMessages !== null && this.unreadMessages > 0;
      this.unreadMessagesChange.emit(hasUnreadMessages);
    }
  }
  handleNotificationClick(event, url) {
    event.preventDefault();
    this.notificationClicked.emit(url);
  }
  static #_ = this.ɵfac = function InboxMessageNotificationIconComponent_Factory(t) {
    return new (t || InboxMessageNotificationIconComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: InboxMessageNotificationIconComponent,
    selectors: [["tg-inbox-message-notification-icon"]],
    inputs: {
      unreadMessages: "unreadMessages",
      inboxOverviewPageUrl: "inboxOverviewPageUrl",
      hideIconLabel: "hideIconLabel"
    },
    outputs: {
      notificationClicked: "notificationClicked",
      unreadMessagesChange: "unreadMessagesChange"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 6,
    vars: 8,
    consts: [[1, "link", "link--unstyled", "display--flex", "align-items--center", 3, "href", "click"], ["data-cy", "inbox-message-notification", 1, "icon", "icons-with-notification", "display--inline-flex", "icon", "icon-md", "icon-bell", "position--relative"], ["class", "icon--notification__dot icon--notification__dot--notification--dot display--flex align-items--center justify-content--center position--absolute background-red color-white border-radius--all--l border--all--r border-width--all--b border-style--all--solid border-color--all--white mt--t", 4, "ngIf"], [4, "ngIf"], [1, "icon--notification__dot", "icon--notification__dot--notification--dot", "display--flex", "align-items--center", "justify-content--center", "position--absolute", "background-red", "color-white", "border-radius--all--l", "border--all--r", "border-width--all--b", "border-style--all--solid", "border-color--all--white", "mt--t"], ["class", "pl--xs pl--xxs--md display--none display--inline--md", 4, "ngIf"], [1, "pl--xs", "pl--xxs--md", "display--none", "display--inline--md"]],
    template: function InboxMessageNotificationIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InboxMessageNotificationIconComponent_Template_a_click_0_listener($event) {
          return ctx.handleNotificationClick($event, ctx.inboxOverviewPageUrl);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, InboxMessageNotificationIconComponent_span_3_Template, 1, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, InboxMessageNotificationIconComponent_ng_container_4_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.inboxOverviewPageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 4, "ng.inbox-messages.notification-icon.txt"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.unreadMessages);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 6, "ng.inbox-messages.notification-icon.txt"));
      }
    },
    dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf],
    encapsulation: 2
  });
}

/***/ }),

/***/ 44352:
/*!********************************************************************************************!*\
  !*** ./libs/engagement/inbox-messages/ui/src/lib/inbox-message/inbox-message.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InboxMessageComponent: () => (/* binding */ InboxMessageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inbox_messages_data_access__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inbox-messages/data-access */ 3059);
/* harmony import */ var _inbox_messages_data_access__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_inbox_messages_data_access__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _inbox_message_date_inbox_message_date_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../inbox-message-date/inbox-message-date.component */ 91874);
/* harmony import */ var _inbox_message_badge_inbox_message_badge_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../inbox-message-badge/inbox-message-badge.component */ 72003);








function InboxMessageComponent_div_0_tg_inbox_message_badge_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tg-inbox-message-badge", 15);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("badgeType", ctx_r2.badgeType);
  }
}
function InboxMessageComponent_div_0_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16)(1, "div", 17)(2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InboxMessageComponent_div_0_div_17_Template_a_click_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const message_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.handleDeleteMessage($event, message_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 23)(10, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InboxMessageComponent_div_0_div_17_Template_a_click_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const message_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.handleDeleteMessage($event, message_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 2, "ng.inbox-messages.delete.txt"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 4, "ng.inbox-messages.delete.txt"));
  }
}
function InboxMessageComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InboxMessageComponent_div_0_tg_inbox_message_badge_4_Template, 1, 1, "tg-inbox-message-badge", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tg-inbox-message-date", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7)(7, "div", 8)(8, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10)(11, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12)(14, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InboxMessageComponent_div_0_Template_a_click_14_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const message_r1 = restoredCtx.ngIf;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.handleClick($event, message_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, InboxMessageComponent_div_0_div_17_Template, 15, 6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const message_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", message_r1.pinned ? "border-width--l--l border--l--r border-style--l--solid border-color--l--brand-primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !message_r1.read);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("messageAdded", message_r1.messageAdded)("isRead", message_r1.read);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", message_r1.content == null ? null : message_r1.content.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", message_r1.content == null ? null : message_r1.content.body, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", message_r1.content == null ? null : message_r1.content.callToAction == null ? null : message_r1.content.callToAction.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r1.content == null ? null : message_r1.content.callToAction == null ? null : message_r1.content.callToAction.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !message_r1.pinned);
  }
}
class InboxMessageComponent {
  constructor() {
    this.deleteMessage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.inboxMessage = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)();
    this.inboxMessageClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.badgeType = _inbox_messages_data_access__WEBPACK_IMPORTED_MODULE_3__.BadgeType.New;
  }
  handleDeleteMessage(event, message) {
    event.preventDefault();
    event.stopPropagation();
    this.deleteMessage.emit(message);
  }
  handleClick(event, message) {
    event.preventDefault();
    this.inboxMessageClicked.emit(message);
  }
  static #_ = this.ɵfac = function InboxMessageComponent_Factory(t) {
    return new (t || InboxMessageComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: InboxMessageComponent,
    selectors: [["tg-inbox-message"]],
    inputs: {
      inboxMessage: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].SignalBased, "inboxMessage"]
    },
    outputs: {
      deleteMessage: "deleteMessage",
      inboxMessageClicked: "inboxMessageClicked"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [["data-cy", "inbox-messages", "class", "inbox-messages-overview p--l mt--xxs mb--xs background-white display--flex flex-direction--row--sm flex-direction--column-reverse text-decoration--none", 3, "ngClass", 4, "ngIf"], ["data-cy", "inbox-messages", 1, "inbox-messages-overview", "p--l", "mt--xxs", "mb--xs", "background-white", "display--flex", "flex-direction--row--sm", "flex-direction--column-reverse", "text-decoration--none", 3, "ngClass"], [1, "aem-Grid", "aem-Grid--default--10", "aem-Grid--12", "aem-Grid--tablet--12", "aem-Grid--phone--12"], [1, "mb--xxs", "aem-GridColumn--default--12", "aem-GridColumn--phone--12"], [1, "cmp-badge"], [3, "badgeType", 4, "ngIf"], [3, "messageAdded", "isRead"], [1, "aem-GridColumn", "aem-GridColumn--default--10", "aem-GridColumn--phone--12"], [1, "cmp", "cmp-title", "my--xs"], [1, "heading--5", "heading--nomargin"], [1, "cmp", "cmp-text"], [1, "font--body-small"], [1, "my--xs"], [1, "button", "button--secondary", "button--small", 3, "href", "click"], ["class", "aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--12", 4, "ngIf"], [3, "badgeType"], [1, "aem-GridColumn", "aem-GridColumn--default--2", "aem-GridColumn--phone--12"], [1, "text-align--right", "hidden-mobile"], [1, "whitespace", "aem-GridColumn"], [1, "whitespace", "whitespace--medium"], [1, "link", 3, "click"], [1, "icon", "icon-trash"], [1, "pl--xs", "text-decoration--underline"], [1, "text-align--left", "hide-from-sm"]],
    template: function InboxMessageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InboxMessageComponent_div_0_Template, 18, 9, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.inboxMessage());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _inbox_message_date_inbox_message_date_component__WEBPACK_IMPORTED_MODULE_4__.InboxMessageDateComponent, _inbox_message_badge_inbox_message_badge_component__WEBPACK_IMPORTED_MODULE_5__.InboxMessageBadgeComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 38781:
/*!************************************************************!*\
  !*** ./libs/engagement/inbox-messages/ui/src/lib/index.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InboxMessageComponent: () => (/* reexport safe */ _inbox_message_inbox_message_component__WEBPACK_IMPORTED_MODULE_0__.InboxMessageComponent),
/* harmony export */   InboxMessageEmptyDataComponent: () => (/* reexport safe */ _inbox_message_empty_data_inbox_message_empty_data_component__WEBPACK_IMPORTED_MODULE_4__.InboxMessageEmptyDataComponent),
/* harmony export */   InboxMessageErrorComponent: () => (/* reexport safe */ _inbox_message_error_inbox_message_error_component__WEBPACK_IMPORTED_MODULE_3__.InboxMessageErrorComponent),
/* harmony export */   InboxMessageLoaderComponent: () => (/* reexport safe */ _inbox_message_loader_inbox_message_loader_component__WEBPACK_IMPORTED_MODULE_2__.InboxMessageLoaderComponent),
/* harmony export */   InboxMessageNotificationIconComponent: () => (/* reexport safe */ _inbox_message_notification_icon_inbox_message_notification_icon_component__WEBPACK_IMPORTED_MODULE_1__.InboxMessageNotificationIconComponent)
/* harmony export */ });
/* harmony import */ var _inbox_message_inbox_message_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inbox-message/inbox-message.component */ 44352);
/* harmony import */ var _inbox_message_notification_icon_inbox_message_notification_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inbox-message-notification-icon/inbox-message-notification-icon.component */ 92062);
/* harmony import */ var _inbox_message_loader_inbox_message_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inbox-message-loader/inbox-message-loader.component */ 4054);
/* harmony import */ var _inbox_message_error_inbox_message_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inbox-message-error/inbox-message-error.component */ 89545);
/* harmony import */ var _inbox_message_empty_data_inbox_message_empty_data_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inbox-message-empty-data/inbox-message-empty-data.component */ 21360);






/***/ })

}])
//# sourceMappingURL=libs_engagement_inbox-messages_ui_src_index_ts-_73791.js.map