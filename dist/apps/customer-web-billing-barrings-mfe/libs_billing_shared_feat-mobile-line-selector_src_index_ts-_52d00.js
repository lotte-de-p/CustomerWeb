(self["webpackChunkcustomer_web_billing_barrings_mfe"] = self["webpackChunkcustomer_web_billing_barrings_mfe"] || []).push([["libs_billing_shared_feat-mobile-line-selector_src_index_ts-_52d00"],{

/***/ 42239:
/*!********************************************************************!*\
  !*** ./libs/billing/shared/feat-mobile-line-selector/src/index.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MobileLineSelectorComponent: () => (/* reexport safe */ _lib_mobile_line_selector_mobile_line_selector_component__WEBPACK_IMPORTED_MODULE_0__.MobileLineSelectorComponent)
/* harmony export */ });
/* harmony import */ var _lib_mobile_line_selector_mobile_line_selector_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/mobile-line-selector/mobile-line-selector.component */ 92025);


/***/ }),

/***/ 92025:
/*!**********************************************************************************************************************!*\
  !*** ./libs/billing/shared/feat-mobile-line-selector/src/lib/mobile-line-selector/mobile-line-selector.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MobileLineSelectorComponent: () => (/* binding */ MobileLineSelectorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pipes_phone_number_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pipes/phone-number.pipe */ 5567);
/* harmony import */ var _billing_shared_data_access__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @billing/shared/data-access */ 76010);
/* harmony import */ var _billing_shared_data_access__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_billing_shared_data_access__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _billing_shared_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @billing/shared/ui */ 16821);
/* harmony import */ var _billing_shared_ui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_billing_shared_ui__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_6__);










function MobileLineSelectorComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tg-error-notification", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("description", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "ng.mobile-line-selector.lbl.error-description"))("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "ng.mobile-line-selector.lbl.error-label"));
  }
}
function MobileLineSelectorComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function MobileLineSelectorComponent_Conditional_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.selectedMobileLine.name, " \u2022\u00A0 ");
  }
}
function MobileLineSelectorComponent_Conditional_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "phoneNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r6.selectedMobileLine.msisdn), " ");
  }
}
function MobileLineSelectorComponent_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileLineSelectorComponent_Conditional_2_Conditional_3_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.open($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "ng.mobile-line-selector.lbl.change-line"), " ");
  }
}
function MobileLineSelectorComponent_Conditional_2_tg_slide_menu_4_li_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "phoneNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const mobileLine_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", mobileLine_r12.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, mobileLine_r12.msisdn));
  }
}
function MobileLineSelectorComponent_Conditional_2_tg_slide_menu_4_li_3_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "phoneNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const mobileLine_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, mobileLine_r12.msisdn));
  }
}
function MobileLineSelectorComponent_Conditional_2_tg_slide_menu_4_li_3_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ng.mobile-line-selector.lbl.data-sim"));
  }
}
function MobileLineSelectorComponent_Conditional_2_tg_slide_menu_4_li_3_i_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 29);
  }
}
const _c0 = a0 => ({
  active: a0
});
const _c1 = a0 => ({
  "border-style--b--solid": a0
});
const _c2 = (a0, a1) => ({
  "icon-sim-card": a0,
  "icon-mobile": a1
});
function MobileLineSelectorComponent_Conditional_2_tg_slide_menu_4_li_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileLineSelectorComponent_Conditional_2_tg_slide_menu_4_li_3_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);
      const mobileLine_r12 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r21.selectMobileLine(mobileLine_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16)(2, "div", 17)(3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MobileLineSelectorComponent_Conditional_2_tg_slide_menu_4_li_3_div_6_Template, 5, 4, "div", 20)(7, MobileLineSelectorComponent_Conditional_2_tg_slide_menu_4_li_3_ng_template_7_Template, 3, 3, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MobileLineSelectorComponent_Conditional_2_tg_slide_menu_4_li_3_span_10_Template, 3, 3, "span", 23)(11, MobileLineSelectorComponent_Conditional_2_tg_slide_menu_4_li_3_i_11_Template, 1, 0, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const mobileLine_r12 = ctx.$implicit;
    const last_r13 = ctx.last;
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, mobileLine_r12.msisdn === ctx_r11.selectedMobileLine.msisdn));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "mobile-line-selector-option-" + mobileLine_r12.msisdn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, !last_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](12, _c2, mobileLine_r12.isDataOnly, !mobileLine_r12.isDataOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", mobileLine_r12 == null ? null : mobileLine_r12.name)("ngIfElse", _r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", mobileLine_r12.isDataOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", mobileLine_r12.msisdn === (ctx_r11.selectedMobileLine == null ? null : ctx_r11.selectedMobileLine.msisdn));
  }
}
function MobileLineSelectorComponent_Conditional_2_tg_slide_menu_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tg-slide-menu", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeMenu", function MobileLineSelectorComponent_Conditional_2_tg_slide_menu_4_Template_tg_slide_menu_closeMenu_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r23.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MobileLineSelectorComponent_Conditional_2_tg_slide_menu_4_li_3_Template, 12, 15, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showMenu", ctx_r8.showMenu)("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 4, "ng.mobile-line-selector.lbl.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "mobile-line-selector-slide-in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.mobileLines);
  }
}
function MobileLineSelectorComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MobileLineSelectorComponent_Conditional_2_div_1_Template, 2, 1, "div", 4)(2, MobileLineSelectorComponent_Conditional_2_div_2_Template, 3, 3, "div", 5)(3, MobileLineSelectorComponent_Conditional_2_Conditional_3_Template, 4, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MobileLineSelectorComponent_Conditional_2_tg_slide_menu_4_Template, 4, 6, "tg-slide-menu", 7);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.selectedMobileLine.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.selectedMobileLine.msisdn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](3, ctx_r2.mobileLines.length > 1 ? 3 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.mobileLines.length > 1);
  }
}
function MobileLineSelectorComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 31)(2, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "ng.mobile-line-selector.no-lines"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function MobileLineSelectorComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tg-mobile-activation-in-progress-notification");
  }
}
class MobileLineSelectorComponent {
  constructor() {
    this.mobileLineSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.mobileLines = [];
    this.loading = false;
    this.showMenu = false;
    this.showError = false;
    this.ACTIVATION_IN_PROGRESS = 'ACTIVATION_IN_PROGRESS';
    this.urlService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_6__.UrlService);
    this.service = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_billing_shared_data_access__WEBPACK_IMPORTED_MODULE_4__.MobileLinesService);
  }
  static #_ = this.MOBILE_LINE_STORAGE_KEY = 'mobile-line-selector';
  ngOnInit() {
    this.loading = true;
    this.service.getMobileLines().subscribe({
      next: mobileLines => {
        this.mobileLines = mobileLines;
        this.selectedMobileLine = this.getMobileLines(mobileLines);
        this.selectMobileLine(this.selectedMobileLine);
      },
      error: () => this.handleError(),
      complete: () => this.loading = false
    });
  }
  handleError() {
    this.loading = false;
    this.showError = true;
  }
  getMobileLines(mobileLines) {
    const storedMobileLine = sessionStorage.getItem(MobileLineSelectorComponent.MOBILE_LINE_STORAGE_KEY);
    const queryMobileLine = this.urlService.getRequestParamValue('msisdn', '');
    return mobileLines.find(mobileLine => mobileLine.msisdn === queryMobileLine) || mobileLines.find(mobileLine => mobileLine.msisdn === storedMobileLine) || mobileLines[0];
  }
  selectMobileLine(mobileLine) {
    if (mobileLine) {
      this.selectedMobileLine = mobileLine;
      this.mobileLineSelected.emit(mobileLine);
      sessionStorage.setItem(MobileLineSelectorComponent.MOBILE_LINE_STORAGE_KEY, mobileLine.msisdn);
      this.close();
    }
  }
  close() {
    this.showMenu = false;
  }
  open(event) {
    event.stopPropagation();
    this.showMenu = true;
  }
  static #_2 = this.ɵfac = function MobileLineSelectorComponent_Factory(t) {
    return new (t || MobileLineSelectorComponent)();
  };
  static #_3 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MobileLineSelectorComponent,
    selectors: [["tg-mobile-line-selector"]],
    outputs: {
      mobileLineSelected: "mobileLineSelected"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 2,
    consts: [[3, "description", "label"], [1, "flex-col", "m--n", "flex-grow"], [1, "col-5", "heading--notopmargin", "skeleton--v2", "skeleton--basic", "skeleton--one-line"], ["data-testid", "mobile-line-selector", 1, "display--flex", "pb--xl", "align-items--center"], ["data-cy", "selected-mobile-line-name", 4, "ngIf"], ["data-cy", "selected-mobile-line-msisdn", 4, "ngIf"], ["class", "cursor--pointer change-mobile-line ml--xs"], ["padding", "px--xs", 3, "showMenu", "title", "closeMenu", 4, "ngIf"], ["data-cy", "selected-mobile-line-name"], ["data-cy", "selected-mobile-line-msisdn"], [1, "cursor--pointer", "change-mobile-line", "ml--xs"], ["data-cy", "change-mobile-line", 1, "text-font-family--t5", "cursor--pointer", "width--fit-content", 3, "click"], ["padding", "px--xs", 3, "showMenu", "title", "closeMenu"], ["data-cy", "mobile-lines-list", 1, "mobile-lines-list", "justify-content--start", "align-items--start", "flex-direction--column", "display--flex", "flex-wrap--wrap", "border-radius--all--n", "listing--none", "width--full", "mt-0"], ["class", "mobile-line width--full", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "mobile-line", "width--full", 3, "ngClass", "click"], [1, "border-width--b--r", "border--b--r", "border-color--all--light-grey", "cursor--pointer", "display--flex", "justify-content--between", "mx--s", "align-items--center", 3, "ngClass"], [1, "py--l", "justify-content--start", "align-items--center", "flex-direction--row", "display--flex", "flex-wrap--nowrap"], [1, "mr--xs"], [1, "icon", "icon-md", 3, "ngClass"], ["class", "heading--6 m--n justify-content--between align-items--center", 4, "ngIf", "ngIfElse"], ["mobileOnly", ""], [1, "display--flex"], ["class", "status-indicator display--inline-block vertical-align--middle status-indicator status-indicator--with-text", 4, "ngIf"], ["class", "icon icon-md icon-no-size-override icon-check-shape-filled color-brand-primary ml--xxs", 4, "ngIf"], [1, "heading--6", "m--n", "justify-content--between", "align-items--center"], [1, "font--body-small", "color-shade_72"], [1, "heading--6", "m--n"], [1, "status-indicator", "display--inline-block", "vertical-align--middle", "status-indicator", "status-indicator--with-text"], [1, "icon", "icon-md", "icon-no-size-override", "icon-check-shape-filled", "color-brand-primary", "ml--xxs"], [1, "notification", "notification--errorfield", "notification--errorfield--flow"], [1, "icon", "icon-error-shape", "errorfield"], [3, "innerHTML"]],
    template: function MobileLineSelectorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MobileLineSelectorComponent_Conditional_0_Template, 4, 6, "div")(1, MobileLineSelectorComponent_Conditional_1_Template, 2, 0)(2, MobileLineSelectorComponent_Conditional_2_Template, 5, 4)(3, MobileLineSelectorComponent_Conditional_3_Template, 4, 3)(4, MobileLineSelectorComponent_Conditional_4_Template, 1, 0, "tg-mobile-activation-in-progress-notification");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](0, ctx.showError ? 0 : ctx.loading && !ctx.showError ? 1 : !ctx.loading && !ctx.showError && ctx.selectedMobileLine ? 2 : 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](4, (ctx.selectedMobileLine == null ? null : ctx.selectedMobileLine.status) === ctx.ACTIVATION_IN_PROGRESS ? 4 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe, _billing_shared_ui__WEBPACK_IMPORTED_MODULE_5__.SlideMenuComponent, _pipes_phone_number_pipe__WEBPACK_IMPORTED_MODULE_3__.PhoneNumberPipe, _billing_shared_ui__WEBPACK_IMPORTED_MODULE_5__.MobileActivationInProgressNotificationComponent, _billing_shared_ui__WEBPACK_IMPORTED_MODULE_5__.ErrorNotificationComponent],
    styles: [".mobile-line-selected[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.change-mobile-line[_ngcontent-%COMP%] {\n  color: initial;\n  border-bottom: 2px solid;\n  font-size: 18px;\n  line-height: 14px;\n  font-weight: 700;\n}\n\n.mobile-line[_ngcontent-%COMP%] {\n  transition: background-color 0.1s ease;\n}\n.mobile-line[_ngcontent-%COMP%]:hover {\n  background-color: rgba(17, 17, 17, 0.04);\n}\n.mobile-line[_ngcontent-%COMP%]:active {\n  background-color: rgba(17, 17, 17, 0.08);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYmlsbGluZy9zaGFyZWQvZmVhdC1tb2JpbGUtbGluZS1zZWxlY3Rvci9zcmMvbGliL21vYmlsZS1saW5lLXNlbGVjdG9yL21vYmlsZS1saW5lLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0NBQUE7QUFDRjtBQUNFO0VBQ0Usd0NBQUE7QUFDSjtBQUVFO0VBQ0Usd0NBQUE7QUFBSiIsInNvdXJjZXNDb250ZW50IjpbIi5tb2JpbGUtbGluZS1zZWxlY3RlZCB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jaGFuZ2UtbW9iaWxlLWxpbmUge1xuICBjb2xvcjogaW5pdGlhbDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ubW9iaWxlLWxpbmUge1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMXMgZWFzZTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCMxMTExMTEsIDA0JSk7XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMTExMTExLCAwOCUpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 5567:
/*!******************************************************************************************!*\
  !*** ./libs/billing/shared/feat-mobile-line-selector/src/lib/pipes/phone-number.pipe.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhoneNumberPipe: () => (/* binding */ PhoneNumberPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

class PhoneNumberPipe {
  transform(phoneNumber) {
    return phoneNumber.replace(/(\d{4})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4');
  }
  static #_ = this.ɵfac = function PhoneNumberPipe_Factory(t) {
    return new (t || PhoneNumberPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "phoneNumber",
    type: PhoneNumberPipe,
    pure: true,
    standalone: true
  });
}

/***/ })

}])
//# sourceMappingURL=libs_billing_shared_feat-mobile-line-selector_src_index_ts-_52d00.js.map