(self["webpackChunkdemo_mfe"] = self["webpackChunkdemo_mfe"] || []).push([["libs_foundation_demo_billing_feat-overview_src_index_ts"],{

/***/ 91218:
/*!*****************************************************************!*\
  !*** ./libs/foundation/demo/billing/feat-overview/src/index.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BillingOverviewComponent: () => (/* reexport safe */ _lib_billing_overview_component__WEBPACK_IMPORTED_MODULE_0__.BillingOverviewComponent)
/* harmony export */ });
/* harmony import */ var _lib_billing_overview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/billing-overview.component */ 96228);


/***/ }),

/***/ 82854:
/*!**************************************************************************************************************************************************************!*\
  !*** ./libs/foundation/demo/billing/feat-overview/src/lib/billing-overview-content/billing-overview-card-content/billing-overview-card-content.component.ts ***!
  \**************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BillingOverviewCardContentComponent: () => (/* binding */ BillingOverviewCardContentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _demo_billing_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/billing/data-access */ 78868);
/* harmony import */ var _demo_billing_data_access__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_demo_billing_data_access__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @telenet/wink-ng */ 95013);
/* harmony import */ var _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_wink_ng__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__);







function BillingOverviewCardContentComponent_wink_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "wink-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BillingOverviewCardContentComponent_wink_button_13_Template_wink_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.payInvoice.emit(ctx_r2.invoice));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, "ng.billing-overview.lbl.pay-now"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-testid", "invoice-open-file")("data-testid", "invoice-pay-now");
  }
}
function BillingOverviewCardContentComponent_wink_button_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "wink-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BillingOverviewCardContentComponent_wink_button_15_Template_wink_button_click_0_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "ng.billing-overview.lbl.open-file"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-testid", "invoice-open-file");
  }
}
class BillingOverviewCardContentComponent {
  constructor() {
    this.invoice = {};
    this.payInvoice = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.showPayNowButton = false;
  }
  ngOnChanges(changes) {
    if (changes['invoice']) {
      this.showPayNowButton = this.invoice.status !== _demo_billing_data_access__WEBPACK_IMPORTED_MODULE_1__.InvoiceStatus.PAID;
    }
  }
  static #_ = this.ɵfac = function BillingOverviewCardContentComponent_Factory(t) {
    return new (t || BillingOverviewCardContentComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BillingOverviewCardContentComponent,
    selectors: [["tg-demo-billing-overview-card-content"]],
    inputs: {
      invoice: "invoice"
    },
    outputs: {
      payInvoice: "payInvoice"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 18,
    vars: 12,
    consts: [[1, "pt--xxxs"], [1, "row", "mt--default--lg", "pl--xxxs"], [1, "col--4"], [1, "col--18"], [1, "mb--l"], [1, "text--m", "mb--m", 2, "white-space", "pre-wrap"], [1, "mt--default--lg", "text--m"], [1, "mb--default--lg", "text--m", "text-weight--g", "mb--m"], ["element", "button", "type", "button", "appearance", "primary", "size", "sm", "width", "full", "status", "none", 3, "text", "click", 4, "ngIf"], ["element", "button", "type", "button", "appearance", "secondary", "size", "sm", "width", "full", "status", "none", "icon", "map-search", "icon-position", "left", 3, "text", "click", 4, "ngIf"], [1, "mb--l", "display--flex", "gap--m"], [1, "col--2"], ["element", "button", "type", "button", "appearance", "primary", "size", "sm", "width", "full", "status", "none", 3, "text", "click"], ["element", "button", "type", "button", "appearance", "secondary", "size", "sm", "width", "full", "status", "none", "icon", "map-search", "icon-position", "left", 3, "text", "click"]],
    template: function BillingOverviewCardContentComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BillingOverviewCardContentComponent_wink_button_13_Template, 2, 5, "wink-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, BillingOverviewCardContentComponent_wink_button_15_Template, 2, 4, "wink-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-testid", "invoice-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-testid", "invoice-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.invoice.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 7, "ng.billing-overview.lbl.reception-date"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 9, ctx.invoice.invoiceDate, "dd/MM/yyyy"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPayNowButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invoice.openFileLink);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__.TgTranslateTestingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe, _telenet_wink_ng__WEBPACK_IMPORTED_MODULE_4__.WinkButton],
    styles: [".col--4[_ngcontent-%COMP%] {\n  flex-basis: 16.6666666667%;\n  max-width: 16.6666666667%;\n}\n\n.col--18[_ngcontent-%COMP%] {\n  flex-basis: 75%;\n  max-width: 75%;\n}\n\n.col--2[_ngcontent-%COMP%] {\n  flex-basis: 8.3333333333%;\n  max-width: 8.3333333333%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvZm91bmRhdGlvbi9kZW1vL2JpbGxpbmcvZmVhdC1vdmVydmlldy9zcmMvbGliL2JpbGxpbmctb3ZlcnZpZXctY29udGVudC9iaWxsaW5nLW92ZXJ2aWV3LWNhcmQtY29udGVudC9iaWxsaW5nLW92ZXJ2aWV3LWNhcmQtY29udGVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLHdCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sLS00IHtcbiAgZmxleC1iYXNpczogY2FsYygoMTAwJSAvIDI0KSAqIDQpO1xuICBtYXgtd2lkdGg6IGNhbGMoKDEwMCUgLyAyNCkgKiA0KTtcbn1cblxuLmNvbC0tMTgge1xuICBmbGV4LWJhc2lzOiBjYWxjKCgxMDAlIC8gMjQpICogMTgpO1xuICBtYXgtd2lkdGg6IGNhbGMoKDEwMCUgLyAyNCkgKiAxOCk7XG59XG5cbi5jb2wtLTIge1xuICBmbGV4LWJhc2lzOiBjYWxjKCgxMDAlIC8gMjQpICogMik7XG4gIG1heC13aWR0aDogY2FsYygoMTAwJSAvIDI0KSAqIDIpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 15775:
/*!***************************************************************************************************************************!*\
  !*** ./libs/foundation/demo/billing/feat-overview/src/lib/billing-overview-content/billing-overview-content.component.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BillingOverviewContentComponent: () => (/* binding */ BillingOverviewContentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _demo_billing_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/billing/ui */ 64606);
/* harmony import */ var _demo_billing_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_demo_billing_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _billing_overview_card_content_billing_overview_card_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./billing-overview-card-content/billing-overview-card-content.component */ 82854);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__);







function BillingOverviewContentComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "There are no invoices available.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function BillingOverviewContentComponent_tg_demo_accordion_list_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tg-demo-badge", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7)(4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10)(7, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7)(12, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const invoice_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 11, "ng.billing-overview.lbl." + invoice_r6.status))("color", ctx_r2.getStatusBadgeColor(invoice_r6.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-testid", "invoice-status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-testid", "invoice-amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20AC ", invoice_r6.amount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-testid", "invoice-id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", invoice_r6.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-testid", "invoice-companyName");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", invoice_r6.companyName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-testid", "invoice-expiration-date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 13, invoice_r6.expirationDate, "dd/MM/yyyy"));
  }
}
function BillingOverviewContentComponent_tg_demo_accordion_list_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tg-demo-billing-overview-card-content", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("payInvoice", function BillingOverviewContentComponent_tg_demo_accordion_list_2_ng_template_3_Template_tg_demo_billing_overview_card_content_payInvoice_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.payInvoice.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const invoice_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("invoice", invoice_r7);
  }
}
function BillingOverviewContentComponent_tg_demo_accordion_list_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tg-demo-accordion-list", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BillingOverviewContentComponent_tg_demo_accordion_list_2_ng_template_1_Template, 15, 16, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(3, BillingOverviewContentComponent_tg_demo_accordion_list_2_ng_template_3_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", ctx_r1.expanded)("items", ctx_r1.invoicesToShow)("accordionHeaderRef", _r3)("accordionContentRef", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-testid", "billing-panel");
  }
}
class BillingOverviewContentComponent {
  constructor() {
    this.invoices = [];
    this.expanded = false;
    this.updateSorting = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.payInvoice = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.tableConfig = {
      columns: [{
        property: 'status',
        translation: 'ng.billing-overview.lbl.',
        sortable: true,
        sorting: {
          default: true,
          order: 'asc'
        },
        cols: 4
      }, {
        property: 'amount',
        sortable: false,
        cols: 4
      }, {
        property: 'id',
        sortable: false,
        cols: 11
      }, {
        property: 'expirationDate',
        sortable: true,
        cols: 4
      }],
      component: 'billing-overview'
    };
    this.totalAmountOfPages = 0;
    this.pageNumber = 1;
    this.invoicesToShow = [];
  }
  ngOnInit() {
    this.navigateToPage(this.pageNumber);
  }
  ngOnChanges(changes) {
    if (changes) {
      this.navigateToPage(this.pageNumber);
    }
  }
  displayItems() {
    return this.invoices.length > 0;
  }
  navigateToPage(pageNumber) {
    this.pageNumber = pageNumber;
    this.populateDataTable(this.invoices);
  }
  getStatusBadgeColor(invoiceStatus) {
    let badgeColor;
    switch (invoiceStatus) {
      case 'paid':
        badgeColor = 'yellow';
        break;
      case 'overdue':
        badgeColor = 'darkBrown';
        break;
      default:
        badgeColor = 'lemon';
        break;
    }
    return badgeColor;
  }
  onUpdateSorting(sorting) {
    this.updateSorting.emit(sorting);
  }
  populateDataTable(invoices) {
    this.totalAmountOfPages = this.calculateTotalAmountOfPages(10, invoices.length);
    this.createPage(10, this.pageNumber);
  }
  createPage(pageSize, pageNumber) {
    const start = this.calculatePageStartIndex(pageSize, pageNumber);
    const end = this.calculatePageEndIndex(pageSize, pageNumber);
    this.invoicesToShow = this.invoices.slice(start, end);
  }
  calculatePageStartIndex(pageSize, pageNumber) {
    return (pageNumber - 1) * pageSize;
  }
  calculatePageEndIndex(pageSize, pageNumber) {
    return pageNumber * pageSize;
  }
  calculateTotalAmountOfPages(pageSize, amountOfEntries) {
    return Math.ceil(amountOfEntries / pageSize);
  }
  static #_ = this.ɵfac = function BillingOverviewContentComponent_Factory(t) {
    return new (t || BillingOverviewContentComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BillingOverviewContentComponent,
    selectors: [["tg-demo-billing-overview-content"]],
    inputs: {
      invoices: "invoices",
      expanded: "expanded"
    },
    outputs: {
      updateSorting: "updateSorting",
      payInvoice: "payInvoice"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 3,
    consts: [[3, "config", "updateSorting"], ["class", "text-align--center", 4, "ngIf"], ["rendition", "panel", 3, "expanded", "items", "accordionHeaderRef", "accordionContentRef", 4, "ngIf"], [1, "text-align--center"], ["rendition", "panel", 3, "expanded", "items", "accordionHeaderRef", "accordionContentRef"], ["headerTemplateRef", ""], ["contentTemplateRef", ""], [1, "col--4"], [3, "content", "color"], [1, "text-weight--g"], [1, "col--11", "display--flex", "flex-direction--column", "align-items--start", "justify-content--start"], [1, "heading--nomargin", "text-align--left", "text-s", "text-flow--h6"], [1, "color-grey", "text--xs", "text-align--left"], [1, "text--s"], [3, "invoice", "payInvoice"]],
    template: function BillingOverviewContentComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tg-demo-billing-table-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updateSorting", function BillingOverviewContentComponent_Template_tg_demo_billing_table_header_updateSorting_0_listener($event) {
          return ctx.onUpdateSorting($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BillingOverviewContentComponent_div_1_Template, 2, 0, "div", 1)(2, BillingOverviewContentComponent_tg_demo_accordion_list_2_Template, 5, 5, "tg-demo-accordion-list", 2);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.tableConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.displayItems());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayItems());
      }
    },
    dependencies: [_demo_billing_ui__WEBPACK_IMPORTED_MODULE_1__.TableHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _demo_billing_ui__WEBPACK_IMPORTED_MODULE_1__.AccordionListComponent, _demo_billing_ui__WEBPACK_IMPORTED_MODULE_1__.BadgeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe, _billing_overview_card_content_billing_overview_card_content_component__WEBPACK_IMPORTED_MODULE_3__.BillingOverviewCardContentComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
    styles: [".col--4[_ngcontent-%COMP%] {\n  flex-basis: 16.6666666667%;\n  max-width: 16.6666666667%;\n}\n\n.col--11[_ngcontent-%COMP%] {\n  flex-basis: 45.8333333333%;\n  max-width: 45.8333333333%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvZm91bmRhdGlvbi9kZW1vL2JpbGxpbmcvZmVhdC1vdmVydmlldy9zcmMvbGliL2JpbGxpbmctb3ZlcnZpZXctY29udGVudC9iaWxsaW5nLW92ZXJ2aWV3LWNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwwQkFBQTtFQUNBLHlCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sLS00IHtcbiAgZmxleC1iYXNpczogY2FsYygoMTAwJSAvIDI0KSAqIDQpO1xuICBtYXgtd2lkdGg6IGNhbGMoKDEwMCUgLyAyNCkgKiA0KTtcbn1cblxuLmNvbC0tMTEge1xuICBmbGV4LWJhc2lzOiBjYWxjKCgxMDAlIC8gMjQpICogMTEpO1xuICBtYXgtd2lkdGg6IGNhbGMoKDEwMCUgLyAyNCkgKiAxMSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 96228:
/*!******************************************************************************************!*\
  !*** ./libs/foundation/demo/billing/feat-overview/src/lib/billing-overview.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BillingOverviewComponent: () => (/* binding */ BillingOverviewComponent)
/* harmony export */ });
/* harmony import */ var _Users_lotte_Documents_Telenet_customer_web_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _demo_billing_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/billing/data-access */ 78868);
/* harmony import */ var _demo_billing_data_access__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_demo_billing_data_access__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _billing_overview_content_billing_overview_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./billing-overview-content/billing-overview-content.component */ 15775);





class BillingOverviewComponent {
  constructor() {
    this.billingFacade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_demo_billing_data_access__WEBPACK_IMPORTED_MODULE_2__.BillingFacade);
    this.expanded = false;
    this.title = '';
    this.invoices = this.billingFacade.invoices;
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_lotte_Documents_Telenet_customer_web_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.billingFacade.loadInvoices();
    })();
  }
  payInvoice(invoice) {
    this.billingFacade.payInvoice(invoice);
  }
  static #_ = this.ɵfac = function BillingOverviewComponent_Factory(t) {
    return new (t || BillingOverviewComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: BillingOverviewComponent,
    selectors: [["ng-component"]],
    inputs: {
      expanded: "expanded",
      title: "title"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 3,
    consts: [[3, "invoices", "expanded", "payInvoice"]],
    template: function BillingOverviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tg-demo-billing-overview-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("payInvoice", function BillingOverviewComponent_Template_tg_demo_billing_overview_content_payInvoice_2_listener($event) {
          return ctx.payInvoice($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("invoices", ctx.invoices())("expanded", ctx.expanded);
      }
    },
    dependencies: [_billing_overview_content_billing_overview_content_component__WEBPACK_IMPORTED_MODULE_3__.BillingOverviewContentComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 71670:
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

/***/ })

}])
//# sourceMappingURL=libs_foundation_demo_billing_feat-overview_src_index_ts.js.map