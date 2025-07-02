(self["webpackChunksales_mfe"] = self["webpackChunksales_mfe"] || []).push([["libs_sales_delivery_ui_src_index_ts-_02d10"],{

/***/ 83772:
/*!*********************************************!*\
  !*** ./libs/sales/delivery/ui/src/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeliveryAddressComponent: () => (/* reexport safe */ _lib_delivery_address_delivery_address_component__WEBPACK_IMPORTED_MODULE_1__.DeliveryAddressComponent),
/* harmony export */   DeliveryItemsComponent: () => (/* reexport safe */ _lib_delivery_items_delivery_items_component__WEBPACK_IMPORTED_MODULE_2__.DeliveryItemsComponent),
/* harmony export */   NotificationComponent: () => (/* reexport safe */ _lib_notification_notification_component__WEBPACK_IMPORTED_MODULE_3__.NotificationComponent),
/* harmony export */   PersonalInfoComponent: () => (/* reexport safe */ _lib_personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_0__.PersonalInfoComponent)
/* harmony export */ });
/* harmony import */ var _lib_personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/personal-info/personal-info.component */ 66125);
/* harmony import */ var _lib_delivery_address_delivery_address_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/delivery-address/delivery-address.component */ 5732);
/* harmony import */ var _lib_delivery_items_delivery_items_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/delivery-items/delivery-items.component */ 34517);
/* harmony import */ var _lib_notification_notification_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/notification/notification.component */ 68609);





/***/ }),

/***/ 29252:
/*!********************************************************************!*\
  !*** ./libs/sales/delivery/ui/src/lib/constants/regex.constant.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegexConstants: () => (/* binding */ RegexConstants)
/* harmony export */ });
class RegexConstants {
  static #_ = this.PHONE_NUMBER = /^[0-9/.+-]{8,15}$/;
  static #_2 = this.FIXED_PHONE_NUMBER = /^[0-9]{8,9}$/;
  static #_3 = this.NATIONAL_PHONE_NUMBER = /^((0|0032|\+32)\d{8})$/;
  static #_4 = this.NATIONAL_MOBILE_NUMBER = /^((0|0032|32|\+32)4\d{8})$/;
  static #_5 = this.INTERNATIONAL_PHONE_NUMBER = /^((00|\+)(?!32)\d{7,15})$/;
  static #_6 = this.TELENET_PHONE_NUMBER = /^(((0|0032|\+32)4\d{8})|((00|\+)(?!32)\d{7,12}))$/;
  static #_7 = this.TELENET_MOBILE_NUMBER = /^((|0|0032|32|\+32)4\d{8})$/;
  static #_8 = this.BASE_PHONE_NUMBER = /^(((0|0032|\+32|032|32)4\d{8})|((00|\+)(?!32)4\d{8})|(4\d{8}))$/;
  static #_9 = this.FORMATTED_BASE_PHONE_NUMBER = /^((([0-9]{4})[ ][0-9]{2})(([ ]?[0-9]){2})(([ ]?[0-9]){2}))$/;
  static #_10 = this.INTERNATIONAL_NUMBER = /^(\+|00|0)(?:[0-9] ?){6,14}[0-9]$/;
  static #_11 = this.DELIVERY_ORDER_PHONE_NUMBER = /^(((0032|032|\+32|32)\d{8})|((0032|032|\+32|32)4\d{8})|((\+)(?!32)\d{7,13})|((0|00)(?!32)([1-9])\d{7})|((0|00)4\d{8})|(4\d{7,8})|(([1-9])\d{7}))$/;
}

/***/ }),

/***/ 5732:
/*!***************************************************************************************!*\
  !*** ./libs/sales/delivery/ui/src/lib/delivery-address/delivery-address.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeliveryAddressComponent: () => (/* binding */ DeliveryAddressComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);



function DeliveryAddressComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "delivery-address-sub-housenumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("/", ctx_r0.deliveryAddress == null ? null : ctx_r0.deliveryAddress.subHouseNumber, "");
  }
}
function DeliveryAddressComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "delivery-address-box");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("/", ctx_r1.deliveryAddress == null ? null : ctx_r1.deliveryAddress.box, "");
  }
}
class DeliveryAddressComponent {
  static #_ = this.ɵfac = function DeliveryAddressComponent_Factory(t) {
    return new (t || DeliveryAddressComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: DeliveryAddressComponent,
    selectors: [["tg-sales-delivery-delivery-address"]],
    inputs: {
      deliveryAddress: "deliveryAddress"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 17,
    vars: 11,
    consts: [[1, "sales-display-info__content__row", "mb--xs"], [1, "icon-md", "sales-display-info__content__row__icon", "icon-locations"], [1, "sales-display-info__content__row__description"], [1, "display--flex"], ["data-cs-mask", "", 1, "sales-display-info__content__row__description__sub-title"], ["class", "sales-display-info__content__row__description__sub-title", 4, "ngIf"], ["class", "mr--l sales-display-info__content__row__description__sub-title", 4, "ngIf"], ["data-cs-mask", "", 1, "display--flex"], [1, "space-nowrap"], [1, "sales-display-info__content__row__description__sub-title"], [1, "mr--l", "sales-display-info__content__row__description__sub-title"]],
    template: function DeliveryAddressComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, DeliveryAddressComponent_span_6_Template, 2, 2, "span", 5)(7, DeliveryAddressComponent_span_7_Template, 2, 2, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7)(9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "delivery-address-housenumber-street");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx.deliveryAddress == null ? null : ctx.deliveryAddress.street, " ", ctx.deliveryAddress == null ? null : ctx.deliveryAddress.houseNumber, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.deliveryAddress == null ? null : ctx.deliveryAddress.subHouseNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.deliveryAddress == null ? null : ctx.deliveryAddress.box);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "delivery-address-postalcode");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.deliveryAddress == null ? null : ctx.deliveryAddress.postalCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "delivery-address-municipality");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.deliveryAddress == null ? null : ctx.deliveryAddress.municipality);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "delivery-address-country");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u00A0", ctx.deliveryAddress == null ? null : ctx.deliveryAddress.country, "");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf],
    encapsulation: 2
  });
}

/***/ }),

/***/ 34517:
/*!***********************************************************************************!*\
  !*** ./libs/sales/delivery/ui/src/lib/delivery-items/delivery-items.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeliveryItemsComponent: () => (/* binding */ DeliveryItemsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);



function DeliveryItemsComponent_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const deliveryItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", deliveryItem_r1.quantity, " ");
  }
}
function DeliveryItemsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DeliveryItemsComponent_div_1_div_2_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const deliveryItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "delivery-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", deliveryItem_r1.quantity > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("icon icon-md icon-", deliveryItem_r1.deliveryInfo.iconType, " pb--l");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", deliveryItem_r1.productType, " ");
  }
}
class DeliveryItemsComponent {
  static #_ = this.ɵfac = function DeliveryItemsComponent_Factory(t) {
    return new (t || DeliveryItemsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: DeliveryItemsComponent,
    selectors: [["tg-sales-delivery-items"]],
    inputs: {
      deliveryItems: "deliveryItems"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 1,
    consts: [[1, "delivery", "p-0"], ["class", "image-description", 4, "ngFor", "ngForOf"], [1, "image-description"], [1, "image-description__card", "position--relative"], ["class", "image-description__card__info position--absolute", 4, "ngIf"], [1, "image-description__card__image", "ml-0", "position--relative"], [1, "font--caption-small", "mt--l", "position--absolute", "px--xs"], [1, "image-description__card__info", "position--absolute"]],
    template: function DeliveryItemsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DeliveryItemsComponent_div_1_Template, 7, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.deliveryItems);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf],
    encapsulation: 2
  });
}

/***/ }),

/***/ 68609:
/*!*******************************************************************************!*\
  !*** ./libs/sales/delivery/ui/src/lib/notification/notification.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationComponent: () => (/* binding */ NotificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);





function NotificationComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r1.notification.title));
  }
}
function NotificationComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div")(2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, NotificationComponent_div_0_div_5_Template, 3, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.notification.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 2, ctx_r0.notification.message));
  }
}
class NotificationComponent {
  static #_ = this.ɵfac = function NotificationComponent_Factory(t) {
    return new (t || NotificationComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: NotificationComponent,
    selectors: [["tg-sales-delivery-notification"]],
    inputs: {
      notification: "notification"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [["class", "notification notification--info notification--closable", 4, "ngIf"], [1, "notification", "notification--info", "notification--closable"], [1, "display--flex"], [1, "icon", "icon-information-shape", "info"], [1, "mt--xxxs"], ["class", "text-weight--g text--m", 4, "ngIf"], [1, "text-flow", "text--r", "text-weight--s"], [1, "text-weight--g", "text--m"]],
    template: function NotificationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NotificationComponent_div_0_Template, 9, 4, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.notification);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 66125:
/*!*********************************************************************************!*\
  !*** ./libs/sales/delivery/ui/src/lib/personal-info/personal-info.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PersonalInfoComponent: () => (/* binding */ PersonalInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pipes_phone_number_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pipes/phone-number.pipe */ 30607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);



class PersonalInfoComponent {
  static #_ = this.ɵfac = function PersonalInfoComponent_Factory(t) {
    return new (t || PersonalInfoComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: PersonalInfoComponent,
    selectors: [["tg-sales-delivery-personal-info"]],
    inputs: {
      personalInfo: "personalInfo"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 19,
    vars: 9,
    consts: [[1, "sales-display-info__content__row", "mb-0"], [1, "icon-md", "sales-display-info__content__row__icon", "icon-user"], [1, "sales-display-info__content__row__description"], ["data-cs-mask", "", 1, "mr--l", "sales-display-info__content__row__description__sub-title"], [1, "space-nowrap"], [1, "icon-md", "sales-display-info__content__row__icon", "icon-mobile"], [1, "icon-email", "icon-md", "sales-display-info__content__row__icon"]],
    template: function PersonalInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 2)(3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 2)(9, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "phoneNumber");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p", 2)(16, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-cy", "delivery-personal-info-full-name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx.personalInfo == null ? null : ctx.personalInfo.firstname, " ", ctx.personalInfo == null ? null : ctx.personalInfo.lastname, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-cy", "delivery-personal-info-mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 7, ctx.personalInfo == null ? null : ctx.personalInfo.mobile));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-cy", "delivery-personal-info-email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.personalInfo == null ? null : ctx.personalInfo.email);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _pipes_phone_number_pipe__WEBPACK_IMPORTED_MODULE_1__.PhoneNumberPipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 30607:
/*!*******************************************************************!*\
  !*** ./libs/sales/delivery/ui/src/lib/pipes/phone-number.pipe.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhoneNumberPipe: () => (/* binding */ PhoneNumberPipe)
/* harmony export */ });
/* harmony import */ var _services_phone_number_transform_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/phone-number-transform.service */ 18669);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);



class PhoneNumberPipe {
  constructor(phoneNumberTransformService) {
    this.phoneNumberTransformService = phoneNumberTransformService;
  }
  transform(phoneNumber) {
    if (phoneNumber) {
      return this.transFormPhoneNumber(phoneNumber);
    }
    return '';
  }
  transFormPhoneNumber(phoneNumber) {
    if (!phoneNumber) {
      return '';
    }
    phoneNumber = phoneNumber.trim();
    return this.phoneNumberTransformService.transform(phoneNumber);
  }
  static #_ = this.ɵfac = function PhoneNumberPipe_Factory(t) {
    return new (t || PhoneNumberPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_phone_number_transform_service__WEBPACK_IMPORTED_MODULE_0__.PhoneNumberTransformService, 16));
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
    name: "phoneNumber",
    type: PhoneNumberPipe,
    pure: true,
    standalone: true
  });
}

/***/ }),

/***/ 22631:
/*!************************************************************************!*\
  !*** ./libs/sales/delivery/ui/src/lib/services/constraints.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConstraintsService: () => (/* binding */ ConstraintsService)
/* harmony export */ });
/* harmony import */ var _constants_regex_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/regex.constant */ 29252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);


class ConstraintsService {
  isValidationError(fieldName, formGroup, errorType) {
    let isValid = false;
    const control = formGroup.get(fieldName);
    if (control && control.errors) {
      isValid = (control.touched || control.dirty) && control.errors[errorType];
    }
    return isValid;
  }
  isValidationErrorWhenPristine(fieldName, formGroup, errorType) {
    const control = formGroup.get(fieldName);
    return control && control.errors ? control.errors[errorType] : false;
  }
  isValidNationalMobileNumber(value) {
    return _constants_regex_constant__WEBPACK_IMPORTED_MODULE_0__.RegexConstants.NATIONAL_MOBILE_NUMBER.test(value);
  }
  isValidInternationalNumber(number) {
    const value = number.replace(/[-/\\,\s.]/g, '');
    return _constants_regex_constant__WEBPACK_IMPORTED_MODULE_0__.RegexConstants.INTERNATIONAL_NUMBER.test(value);
  }
  getFormattedNRN(nrn) {
    nrn = this.removeSpecialCharacters(nrn);
    const nrnLength = nrn && nrn.length;
    if (nrnLength === 11) {
      return nrn.slice(0, 2) + '.' + nrn.slice(2, 4) + '.' + nrn.slice(4, 6) + '-' + nrn.slice(6, 9) + '.' + nrn.slice(9, nrnLength);
    }
    return nrn;
  }
  removeSpecialCharacters(val) {
    return val ? val.replace(/[^0-9a-z]/gi, '') : '';
  }
  static #_ = this.ɵfac = function ConstraintsService_Factory(t) {
    return new (t || ConstraintsService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ConstraintsService,
    factory: ConstraintsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 18669:
/*!***********************************************************************************!*\
  !*** ./libs/sales/delivery/ui/src/lib/services/phone-number-transform.service.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhoneNumberTransformService: () => (/* binding */ PhoneNumberTransformService)
/* harmony export */ });
/* harmony import */ var _constants_regex_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/regex.constant */ 29252);
/* harmony import */ var _constraints_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constraints.service */ 22631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




class PhoneNumberTransformService {
  constructor(constraintsService) {
    this.constraintsService = constraintsService;
  }
  transform(phoneNumber) {
    if (_constants_regex_constant__WEBPACK_IMPORTED_MODULE_0__.RegexConstants.NATIONAL_PHONE_NUMBER.test(phoneNumber)) {
      return this.filterNationalPhoneNumber(phoneNumber);
    }
    if (_constants_regex_constant__WEBPACK_IMPORTED_MODULE_0__.RegexConstants.NATIONAL_MOBILE_NUMBER.test(phoneNumber)) {
      return this.filterNationalMobileNumber(phoneNumber);
    }
    if (_constants_regex_constant__WEBPACK_IMPORTED_MODULE_0__.RegexConstants.BASE_PHONE_NUMBER.test(phoneNumber)) {
      return this.filterBasePhoneNumber(phoneNumber);
    }
    if (_constants_regex_constant__WEBPACK_IMPORTED_MODULE_0__.RegexConstants.INTERNATIONAL_PHONE_NUMBER.test(phoneNumber)) {
      return this.filterInternationalNumber(phoneNumber);
    }
    return phoneNumber;
  }
  doNormaliseMsisdn(phoneNumber) {
    let transFormedNumber = this.transform(phoneNumber);
    transFormedNumber = transFormedNumber.indexOf('0') !== 0 ? '0' + transFormedNumber : transFormedNumber;
    return transFormedNumber && transFormedNumber.replace(/ /g, '');
  }
  autoFormatPhoneNumber(msisdn) {
    const formattedPhoneNumber = this.doNormaliseMsisdn(msisdn);
    if (!msisdn || !formattedPhoneNumber) {
      return msisdn;
    } else {
      if (this.constraintsService.isValidNationalMobileNumber(formattedPhoneNumber)) {
        return 0 + formattedPhoneNumber.substring(1);
      } else if (this.constraintsService.isValidInternationalNumber(msisdn)) {
        return msisdn;
      }
      return formattedPhoneNumber;
    }
  }
  filterNationalPhoneNumber(phoneNumber) {
    const numberLength = phoneNumber.length;
    let numberStart = phoneNumber.slice(0, numberLength - 6);
    let zoneCode = '0';
    if (this.contains(numberStart, '0032')) {
      numberStart = numberStart.slice(4, numberStart.length);
    }
    if (this.contains(numberStart, '+32')) {
      numberStart = numberStart.slice(3, numberStart.length);
    }
    if (numberStart.length === 3) {
      numberStart = numberStart.slice(1, numberStart.length);
    }
    if (numberStart[0] === '2' || numberStart[0] === '3' || numberStart[0] === '4' || numberStart[0] === '9') {
      zoneCode += numberStart[0] + ' ';
      numberStart = numberStart.slice(1, numberStart.length);
    } else {
      zoneCode += numberStart + ' ';
      numberStart = '';
    }
    return zoneCode + numberStart + phoneNumber.slice(numberLength - 6, numberLength - 4) + ' ' + phoneNumber.slice(numberLength - 4, numberLength - 2) + ' ' + phoneNumber.slice(numberLength - 2, numberLength);
  }
  filterNationalMobileNumber(phoneNumber) {
    const numberLength = phoneNumber.length;
    let numberStart = phoneNumber.slice(0, numberLength - 6);
    if (numberStart.indexOf('0032') === 0) {
      numberStart = '0' + numberStart.slice(4, numberStart.length);
    }
    if (numberStart.indexOf('+32') === 0) {
      numberStart = '0' + numberStart.slice(3, numberStart.length);
    }
    if (numberStart.indexOf('32') === 0) {
      numberStart = '0' + numberStart.slice(2, numberStart.length);
    }
    return numberStart + ' ' + phoneNumber.slice(numberLength - 6, numberLength - 4) + ' ' + phoneNumber.slice(numberLength - 4, numberLength - 2) + ' ' + phoneNumber.slice(numberLength - 2, numberLength);
  }
  filterBasePhoneNumber(phoneNumber) {
    const numberLength = phoneNumber.length;
    let numberStart = phoneNumber.slice(0, numberLength - 6);
    if (this.contains(numberStart, '0032')) {
      numberStart = '0' + numberStart.slice(4, numberStart.length);
    }
    if (this.contains(numberStart, '032')) {
      numberStart = '0' + numberStart.slice(3, numberStart.length);
    }
    if (this.contains(numberStart, '+32')) {
      numberStart = '0' + numberStart.slice(3, numberStart.length);
    }
    if (this.contains(numberStart, '32')) {
      numberStart = '0' + numberStart.slice(2, numberStart.length);
    }
    if (this.contains(numberStart, '00')) {
      numberStart = '0' + numberStart.slice(2, numberStart.length);
    }
    return numberStart + ' ' + phoneNumber.slice(numberLength - 6, numberLength - 4) + ' ' + phoneNumber.slice(numberLength - 4, numberLength - 2) + ' ' + phoneNumber.slice(numberLength - 2, numberLength);
  }
  filterInternationalNumber(phoneNumber) {
    const numberStart = phoneNumber.slice(0, 2);
    if (this.contains(numberStart, '00')) {
      return '+' + phoneNumber.slice(2, phoneNumber.length);
    }
    return phoneNumber;
  }
  contains(master, test) {
    return master.indexOf(test) > -1;
  }
  static #_ = this.ɵfac = function PhoneNumberTransformService_Factory(t) {
    return new (t || PhoneNumberTransformService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_constraints_service__WEBPACK_IMPORTED_MODULE_1__.ConstraintsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: PhoneNumberTransformService,
    factory: PhoneNumberTransformService.ɵfac,
    providedIn: 'root'
  });
}

/***/ })

}])
//# sourceMappingURL=libs_sales_delivery_ui_src_index_ts-_02d10.js.map