(self["webpackChunkmarketing_mfe"] = self["webpackChunkmarketing_mfe"] || []).push([["libs_marketing_roaming-international_ui_src_index_ts-_d41e1"],{

/***/ 97409:
/*!**************************************************************!*\
  !*** ./libs/marketing/roaming-international/ui/src/index.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CountryHeaderComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.CountryHeaderComponent),
/* harmony export */   RateCardCollectionComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.RateCardCollectionComponent),
/* harmony export */   RateCardComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.RateCardComponent),
/* harmony export */   RatesHeaderComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.RatesHeaderComponent),
/* harmony export */   RatesOverviewComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.RatesOverviewComponent),
/* harmony export */   SatelliteFerryInfoComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.SatelliteFerryInfoComponent),
/* harmony export */   ZoneInfoComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ZoneInfoComponent)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ 65464);


/***/ }),

/***/ 84499:
/*!****************************************************************************************************!*\
  !*** ./libs/marketing/roaming-international/ui/src/lib/country-header/country-header.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CountryHeaderComponent: () => (/* binding */ CountryHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _marketing_marketing_roaming_international_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @marketing/marketing/roaming-international/data-access */ 62826);
/* harmony import */ var _marketing_marketing_roaming_international_data_access__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_marketing_marketing_roaming_international_data_access__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);





const _c0 = a0 => ({
  country: a0
});
class CountryHeaderComponent {
  country = _marketing_marketing_roaming_international_data_access__WEBPACK_IMPORTED_MODULE_2__.initCountry;
  static ɵfac = function CountryHeaderComponent_Factory(t) {
    return new (t || CountryHeaderComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: CountryHeaderComponent,
    selectors: [["tg-marketing-roaming-international-ui-country-header"]],
    inputs: {
      country: "country"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 10,
    vars: 9,
    consts: [[1, "cmp-responsivegrid__container", "pt--xxg--sm"], [1, "mb--default", "mb--xm--sm", "cmp-title"], [1, "text-align--left", "heading--nomargin"], [1, "cmp-text", "mb--xl", "display--inline-block", "pb--xxl--sm", "mb--xm--sm"]],
    template: function CountryHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div")(6, "div", 3)(7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](4, 2, "ng.roaming-international-rates.country-header.title", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c0, ctx.country.country)), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 5, "ng.roaming-international-rates.country-header.body"), " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 65464:
/*!******************************************************************!*\
  !*** ./libs/marketing/roaming-international/ui/src/lib/index.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CountryHeaderComponent: () => (/* reexport safe */ _country_header_country_header_component__WEBPACK_IMPORTED_MODULE_0__.CountryHeaderComponent),
/* harmony export */   RateCardCollectionComponent: () => (/* reexport safe */ _rate_card_collection_rate_card_collection_component__WEBPACK_IMPORTED_MODULE_4__.RateCardCollectionComponent),
/* harmony export */   RateCardComponent: () => (/* reexport safe */ _rate_card_rate_card_component__WEBPACK_IMPORTED_MODULE_1__.RateCardComponent),
/* harmony export */   RatesHeaderComponent: () => (/* reexport safe */ _rates_header_rates_header_component__WEBPACK_IMPORTED_MODULE_2__.RatesHeaderComponent),
/* harmony export */   RatesOverviewComponent: () => (/* reexport safe */ _rates_overview_rates_overview_component__WEBPACK_IMPORTED_MODULE_3__.RatesOverviewComponent),
/* harmony export */   SatelliteFerryInfoComponent: () => (/* reexport safe */ _satelite_ferry_info_satellite_ferry_info_component__WEBPACK_IMPORTED_MODULE_5__.SatelliteFerryInfoComponent),
/* harmony export */   ZoneInfoComponent: () => (/* reexport safe */ _zone_info_zone_info_component__WEBPACK_IMPORTED_MODULE_6__.ZoneInfoComponent)
/* harmony export */ });
/* harmony import */ var _country_header_country_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./country-header/country-header.component */ 84499);
/* harmony import */ var _rate_card_rate_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rate-card/rate-card.component */ 65204);
/* harmony import */ var _rates_header_rates_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rates-header/rates-header.component */ 89679);
/* harmony import */ var _rates_overview_rates_overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rates-overview/rates-overview.component */ 18490);
/* harmony import */ var _rate_card_collection_rate_card_collection_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rate-card-collection/rate-card-collection.component */ 29586);
/* harmony import */ var _satelite_ferry_info_satellite_ferry_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./satelite-ferry-info/satellite-ferry-info.component */ 49074);
/* harmony import */ var _zone_info_zone_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./zone-info/zone-info.component */ 28443);








/***/ }),

/***/ 29586:
/*!****************************************************************************************************************!*\
  !*** ./libs/marketing/roaming-international/ui/src/lib/rate-card-collection/rate-card-collection.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RateCardCollectionComponent: () => (/* binding */ RateCardCollectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rate_card_rate_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rate-card/rate-card.component */ 65204);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);





function RateCardCollectionComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "tg-marketing-roaming-international-ui-rate-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rate_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r0.ratesOverview.length === 3 ? "col-md-4" : "col-md-6 col-lg-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rate", rate_r1);
  }
}
class RateCardCollectionComponent {
  ratesOverview = [];
  static ɵfac = function RateCardCollectionComponent_Factory(t) {
    return new (t || RateCardCollectionComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: RateCardCollectionComponent,
    selectors: [["tg-marketing-roaming-international-ui-rate-card-collection"]],
    inputs: {
      ratesOverview: "ratesOverview"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 1,
    consts: [[1, "row", "display--flex", "flex-direction--row", "align-items--center", "align-items--stretch"], ["class", "col-12 display--flex flex-direction--column", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "col-12", "display--flex", "flex-direction--column", 3, "ngClass"], [1, "display--flex", "flex-grow", 3, "rate"]],
    template: function RateCardCollectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RateCardCollectionComponent_div_1_Template, 2, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.ratesOverview);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _rate_card_rate_card_component__WEBPACK_IMPORTED_MODULE_1__.RateCardComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule],
    encapsulation: 2
  });
}

/***/ }),

/***/ 65204:
/*!******************************************************************************************!*\
  !*** ./libs/marketing/roaming-international/ui/src/lib/rate-card/rate-card.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RateCardComponent: () => (/* binding */ RateCardComponent)
/* harmony export */ });
/* harmony import */ var _marketing_marketing_roaming_international_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @marketing/marketing/roaming-international/data-access */ 62826);
/* harmony import */ var _marketing_marketing_roaming_international_data_access__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_marketing_marketing_roaming_international_data_access__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);






function RateCardComponent_li_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const detail_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "ng.roaming-international-rates.rates-card.detail.title." + _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 3, detail_r2.type)), " ");
  }
}
const _c0 = a0 => ({
  price: a0
});
function RateCardComponent_li_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const detail_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", detail_r3.amount === 0 ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "ng.roaming-international-rates.rates-card.detail.price.free") : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 3, "ng.roaming-international-rates.rates-card.detail.price." + _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 6, ctx_r1.rate.type), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](11, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 8, detail_r3.amount, "1.2-2"))), " ");
  }
}
class RateCardComponent {
  rate = _marketing_marketing_roaming_international_data_access__WEBPACK_IMPORTED_MODULE_0__.initRate;
  static ɵfac = function RateCardComponent_Factory(t) {
    return new (t || RateCardComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: RateCardComponent,
    selectors: [["tg-marketing-roaming-international-ui-rate-card"]],
    inputs: {
      rate: "rate"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 11,
    vars: 7,
    consts: [[1, "cmp-rate", "background-very-light-grey", "p--xm", "mb--default", "flex-grow"], [1, "heading--5", "heading--nomargin"], [1, "my--xxs"], [1, "display--flex"], [1, "list-style--bullit"], [4, "ngFor", "ngForOf"], [1, "list-style--none", "font--body-regular-bold", "ml--xm"]],
    template: function RateCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3)(7, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, RateCardComponent_li_8_Template, 4, 5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, RateCardComponent_li_10_Template, 6, 13, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 3, "ng.roaming-international-rates.rates-card.title." + _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 5, ctx.rate.type)), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.rate.details);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.rate.details);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.LowerCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 89679:
/*!************************************************************************************************!*\
  !*** ./libs/marketing/roaming-international/ui/src/lib/rates-header/rates-header.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RatesHeaderComponent: () => (/* binding */ RatesHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




class RatesHeaderComponent {
  rateType;
  static ɵfac = function RatesHeaderComponent_Factory(t) {
    return new (t || RatesHeaderComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: RatesHeaderComponent,
    selectors: [["tg-marketing-roaming-international-ui-rates-header"]],
    inputs: {
      rateType: "rateType"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 12,
    vars: 10,
    consts: [[1, "cmp-responsivegrid__container", "pt--xm"], [1, "mt--xxl", "mt--xxl--sm", "mb--xm", "mb--xxl--sm", "cmp-title"], [1, "text-align--left", "heading--nomargin", "display--inline-block"], [1, "cmp-text", "mb--xm"]],
    template: function RatesHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div")(7, "div", 3)(8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.rateType === "INTERNATIONAL" ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 2, "ng.roaming-international-rates.international-rates-header.title") : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 4, "ng.roaming-international-rates.roaming-rates-header.title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.rateType === "INTERNATIONAL" ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 6, "ng.roaming-international-rates.international-rates-header.body") : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 8, "ng.roaming-international-rates.roaming-rates-header.body"), " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 18490:
/*!****************************************************************************************************!*\
  !*** ./libs/marketing/roaming-international/ui/src/lib/rates-overview/rates-overview.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RatesOverviewComponent: () => (/* binding */ RatesOverviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _marketing_marketing_roaming_international_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @marketing/marketing/roaming-international/data-access */ 62826);
/* harmony import */ var _marketing_marketing_roaming_international_data_access__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_marketing_marketing_roaming_international_data_access__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rate_card_collection_rate_card_collection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rate-card-collection/rate-card-collection.component */ 29586);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);






const _c0 = a0 => ({
  country: a0
});
class RatesOverviewComponent {
  overview = _marketing_marketing_roaming_international_data_access__WEBPACK_IMPORTED_MODULE_1__.initRatesOverview;
  static ɵfac = function RatesOverviewComponent_Factory(t) {
    return new (t || RatesOverviewComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: RatesOverviewComponent,
    selectors: [["tg-marketing-roaming-international-ui-rates-overview"]],
    inputs: {
      overview: "overview"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 6,
    vars: 7,
    consts: [[1, "cmp-responsivegrid__container", "flex-order--2"], [1, "mb--default", "cmp-title"], [1, "text-align--left", "heading--4", "mt--l", "mb--xxxs"], [3, "ratesOverview"]],
    template: function RatesOverviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "tg-marketing-roaming-international-ui-rate-card-collection", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](4, 2, ctx.overview.toBelgium ? "ng.roaming-international-rates.rates-overview.title.to.belgium" : "ng.roaming-international-rates.rates-overview.title.inside.country", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](5, _c0, ctx.overview.country.country)), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ratesOverview", ctx.overview.rates);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe, _rate_card_collection_rate_card_collection_component__WEBPACK_IMPORTED_MODULE_3__.RateCardCollectionComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 49074:
/*!***************************************************************************************************************!*\
  !*** ./libs/marketing/roaming-international/ui/src/lib/satelite-ferry-info/satellite-ferry-info.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SatelliteFerryInfoComponent: () => (/* binding */ SatelliteFerryInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




class SatelliteFerryInfoComponent {
  static ɵfac = function SatelliteFerryInfoComponent_Factory(t) {
    return new (t || SatelliteFerryInfoComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: SatelliteFerryInfoComponent,
    selectors: [["tg-marketing-roaming-international-ui-satellite-ferry-info"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 10,
    vars: 6,
    consts: [[1, "cmp-responsivegrid__container"], [1, "divider--s__very-light-grey"], [1, "cmp", "cmp-title"], [1, "text-align--left", "heading--4", "mt--l", "mb--xxxs"], [1, "cmp-text"], [3, "innerHTML"]],
    template: function SatelliteFerryInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2)(3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div")(7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 2, "ng.roaming-international-rates.satellite-ferry-info.title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 4, "ng.roaming-international-rates.satellite-ferry-info.body"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 28443:
/*!******************************************************************************************!*\
  !*** ./libs/marketing/roaming-international/ui/src/lib/zone-info/zone-info.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZoneInfoComponent: () => (/* binding */ ZoneInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _marketing_marketing_roaming_international_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @marketing/marketing/roaming-international/data-access */ 62826);
/* harmony import */ var _marketing_marketing_roaming_international_data_access__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_marketing_marketing_roaming_international_data_access__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);






function ZoneInfoComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div")(6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 2, "ng.roaming-international-rates.zone-info.eu.title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 4, "ng.roaming-international-rates.zone-info.eu.body"), " ");
  }
}
class ZoneInfoComponent {
  country = _marketing_marketing_roaming_international_data_access__WEBPACK_IMPORTED_MODULE_1__.initCountry;
  shouldDisplay() {
    return this.country.roamingZone === 'ZoneEU';
  }
  static ɵfac = function ZoneInfoComponent_Factory(t) {
    return new (t || ZoneInfoComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ZoneInfoComponent,
    selectors: [["tg-marketing-roaming-international-ui-zone-info"]],
    inputs: {
      country: "country"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [["class", "cmp-responsivegrid__container flex-order--1 mt--xl mt--n--sm mb--g", 4, "ngIf"], [1, "cmp-responsivegrid__container", "flex-order--1", "mt--xl", "mt--n--sm", "mb--g"], [1, "cmp", "cmp-title"], [1, "text-align--left", "heading--4", "mt--l", "mb--xxxs"], [1, "cmp-text"]],
    template: function ZoneInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ZoneInfoComponent_div_0_Template, 9, 6, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.shouldDisplay());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ })

}])
//# sourceMappingURL=libs_marketing_roaming-international_ui_src_index_ts-_d41e1.js.map