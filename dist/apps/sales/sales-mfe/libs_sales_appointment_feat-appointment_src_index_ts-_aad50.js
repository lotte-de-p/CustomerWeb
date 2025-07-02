(self["webpackChunksales_mfe"] = self["webpackChunksales_mfe"] || []).push([["libs_sales_appointment_feat-appointment_src_index_ts-_aad50"],{

/***/ 95470:
/*!**************************************************************!*\
  !*** ./libs/sales/appointment/feat-appointment/src/index.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppointmentComponent: () => (/* reexport safe */ _lib_appointment_component__WEBPACK_IMPORTED_MODULE_0__.AppointmentComponent)
/* harmony export */ });
/* harmony import */ var _lib_appointment_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/appointment.component */ 91044);


/***/ }),

/***/ 91044:
/*!**********************************************************************************!*\
  !*** ./libs/sales/appointment/feat-appointment/src/lib/appointment.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppointmentComponent: () => (/* binding */ AppointmentComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-inline-svg-2 */ 21993);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_5__);









function AppointmentComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 22);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("inlineSVG", ctx_r0.viewModel.stepImage)("resolveSVGUrl", false);
  }
}
class AppointmentComponent {
  constructor() {
    this.viewModel = {
      stepImage: _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__.AssetService.getImagePath('HARDWARE_CHECKOUT', 'delivery.svg')
    };
  }
  onNextStep() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(true);
  }
  static #_ = this.ɵfac = function AppointmentComponent_Factory(t) {
    return new (t || AppointmentComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: AppointmentComponent,
    selectors: [["tg-sales-appointment-feat-appointment"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
    decls: 33,
    vars: 14,
    consts: [[1, "sales-checkout", "container--medium"], [1, "sales-page__container__title", "sales-page__container__title--secondary"], [1, "display--flex", "flex-direction--column"], [1, "sales-page__container__title__header", "text-align--center--md", "text-align--left"], [1, "text-align--center--md", "text-align--left"], [1, "row", "m--auto", "pl--xxxs", "pr--xxxs", "pl--n--md", "pr--n--md", "flex-direction--row--md", "flex-direction--column-reverse", "horizontal-center-align"], [1, "col-sm-12", "sales-checkout"], [1, "stepper-page__body-inner", "p-0"], [1, "stepper-page__content--split", "container", "mobile-lines"], [1, "stepper-page__content-first", "flex-hide-until-md", "position--sticky--md", "position--top--md"], ["class", "stepper-page__content-first flex-hide-until-sm", 3, "inlineSVG", "resolveSVGUrl", 4, "ngIf"], [1, "stepper-page__content-second"], ["id", "undefined", 1, "stepper-move"], [1, "text-flow", "text-flow--label", "stepper-page__title-label", "m-0"], [1, "sales-flow"], [1, "sales-flow__content__appointment", "mb--xxxg"], [1, "content-section", "p--l"], [1, "pb-5", "m-0"], [1, "m-0", "content-section"], [1, "pl--xl", "pt--l", "m-0"], [1, "background-white", "pb-10"], [1, "installation-location__error", "px--xl", "pt--xs"], [1, "stepper-page__content-first", "flex-hide-until-sm", 3, "inlineSVG", "resolveSVGUrl"]],
    template: function AppointmentComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 5)(10, "div", 6)(11, "div")(12, "div", 7)(13, "div", 8)(14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, AppointmentComponent_div_15_Template, 1, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 11)(17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div")(20, "div", 14)(21, "div", 15)(22, "div", 16)(23, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 18)(27, "h6", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div")(31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-cy", "feat-appointment");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 6, "ng.sales-checkout.lbl.title.appointment"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 8, "ng.sales-checkout.lbl.sub-title.appointment"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.viewModel);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](25, 10, "ng.sales-checkout.text.appointment-content-title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](29, 12, "ng.sales-checkout.text.appointment-address-title"), " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_4__.InlineSVGModule, ng_inline_svg_2__WEBPACK_IMPORTED_MODULE_4__.InlineSVGDirective],
    encapsulation: 2
  });
}

/***/ }),

/***/ 21993:
/*!************************************************************!*\
  !*** ./node_modules/ng-inline-svg-2/lib_esmodule/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InlineSVGConfig: () => (/* reexport safe */ _inline_svg_config__WEBPACK_IMPORTED_MODULE_0__.InlineSVGConfig),
/* harmony export */   InlineSVGDirective: () => (/* reexport safe */ _inline_svg_directive__WEBPACK_IMPORTED_MODULE_1__.InlineSVGDirective),
/* harmony export */   InlineSVGModule: () => (/* reexport safe */ _inline_svg_module__WEBPACK_IMPORTED_MODULE_2__.InlineSVGModule),
/* harmony export */   SVGCacheService: () => (/* reexport safe */ _svg_cache_service__WEBPACK_IMPORTED_MODULE_3__.SVGCacheService)
/* harmony export */ });
/* harmony import */ var _inline_svg_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inline-svg.config */ 77181);
/* harmony import */ var _inline_svg_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inline-svg.directive */ 16360);
/* harmony import */ var _inline_svg_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inline-svg.module */ 61962);
/* harmony import */ var _svg_cache_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svg-cache.service */ 70947);





/***/ }),

/***/ 61563:
/*!***************************************************************************!*\
  !*** ./node_modules/ng-inline-svg-2/lib_esmodule/inline-svg.component.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InlineSVGComponent: () => (/* binding */ InlineSVGComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inline_svg_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inline-svg.directive */ 16360);
/* harmony import */ var _inline_svg_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inline-svg.service */ 96046);





var InlineSVGComponent = function () {
  function InlineSVGComponent(_inlineSVGService, el) {
    this._inlineSVGService = _inlineSVGService;
    this._el = el;
  }
  InlineSVGComponent.prototype.ngAfterViewInit = function () {
    this._updateContent();
  };
  InlineSVGComponent.prototype.ngOnChanges = function (changes) {
    if (changes['content']) {
      this._updateContent();
    }
  };
  InlineSVGComponent.prototype._updateContent = function () {
    this._inlineSVGService.insertEl(this.context, this._el.nativeElement, this.content, this.replaceContents, this.prepend);
  };
  InlineSVGComponent.ɵfac = function InlineSVGComponent_Factory(t) {
    return new (t || InlineSVGComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_inline_svg_service__WEBPACK_IMPORTED_MODULE_2__.InlineSVGService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  InlineSVGComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: InlineSVGComponent,
    selectors: [["inline-svg"]],
    inputs: {
      context: "context",
      content: "content",
      replaceContents: "replaceContents",
      prepend: "prepend"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    decls: 0,
    vars: 0,
    template: function InlineSVGComponent_Template(rf, ctx) {},
    encapsulation: 2,
    changeDetection: 0
  });
  return InlineSVGComponent;
}();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InlineSVGComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'inline-svg',
      template: '',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], function () {
    return [{
      type: _inline_svg_service__WEBPACK_IMPORTED_MODULE_2__.InlineSVGService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    context: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    replaceContents: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    prepend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/***/ }),

/***/ 77181:
/*!************************************************************************!*\
  !*** ./node_modules/ng-inline-svg-2/lib_esmodule/inline-svg.config.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InlineSVGConfig: () => (/* binding */ InlineSVGConfig)
/* harmony export */ });
var InlineSVGConfig = function () {
  function InlineSVGConfig() {}
  return InlineSVGConfig;
}();


/***/ }),

/***/ 16360:
/*!***************************************************************************!*\
  !*** ./node_modules/ng-inline-svg-2/lib_esmodule/inline-svg.directive.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InlineSVGDirective: () => (/* binding */ InlineSVGDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inline_svg_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inline-svg.component */ 61563);
/* harmony import */ var _svg_cache_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svg-cache.service */ 70947);
/* harmony import */ var _inline_svg_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inline-svg.service */ 96046);
/* harmony import */ var _inline_svg_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inline-svg.config */ 77181);
/* harmony import */ var _svg_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./svg-util */ 32851);











var InlineSVGDirective = function () {
  function InlineSVGDirective(_el, _viewContainerRef, _resolver, _svgCache, _renderer, _inlineSVGService, _config, platformId) {
    this._el = _el;
    this._viewContainerRef = _viewContainerRef;
    this._resolver = _resolver;
    this._svgCache = _svgCache;
    this._renderer = _renderer;
    this._inlineSVGService = _inlineSVGService;
    this._config = _config;
    this.platformId = platformId;
    this.resolveSVGUrl = true;
    this.replaceContents = true;
    this.prepend = false;
    this.injectComponent = false;
    this.cacheSVG = true;
    this.forceEvalStyles = false;
    this.evalScripts = "always";
    this.onSVGInserted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onSVGFailed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._supportsSVG = _svg_util__WEBPACK_IMPORTED_MODULE_6__.isSvgSupported();
    if (!(0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformServer)(this.platformId) && !this._supportsSVG) {
      this._fail('Embed SVG are not supported by this browser');
    }
  }
  InlineSVGDirective.prototype.ngOnInit = function () {
    if (!this._isValidPlatform() || this._isSSRDisabled()) {
      return;
    }
    this._insertSVG();
  };
  InlineSVGDirective.prototype.ngOnChanges = function (changes) {
    if (!this._isValidPlatform() || this._isSSRDisabled()) {
      return;
    }
    var setSVGAttributesChanged = Boolean(changes['setSVGAttributes']);
    if (changes['inlineSVG'] || setSVGAttributesChanged) {
      this._insertSVG(setSVGAttributesChanged);
    }
  };
  InlineSVGDirective.prototype.ngOnDestroy = function () {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  };
  InlineSVGDirective.prototype._insertSVG = function (force) {
    var _this = this;
    if (force === void 0) {
      force = false;
    }
    if (!(0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformServer)(this.platformId) && !this._supportsSVG) {
      return;
    }
    if (!this.inlineSVG) {
      this._fail('No URL passed to [inlineSVG]');
      return;
    }
    if (!force && this.inlineSVG === this._prevUrl) {
      return;
    }
    this._prevUrl = this.inlineSVG;
    this._subscription = this._svgCache.getSVG(this.inlineSVG, this.resolveSVGUrl, this.cacheSVG).subscribe(function (svg) {
      if (_svg_util__WEBPACK_IMPORTED_MODULE_6__.isUrlSymbol(_this.inlineSVG)) {
        var symbolId = _this.inlineSVG.split('#')[1];
        svg = _svg_util__WEBPACK_IMPORTED_MODULE_6__.createSymbolSvg(_this._renderer, svg, symbolId);
      }
      _this._processSvg(svg);
    }, function (err) {
      _this._fail(err);
    });
  };
  InlineSVGDirective.prototype._processSvg = function (svg) {
    if (!svg) {
      return;
    }
    if (this.removeSVGAttributes && (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
      _svg_util__WEBPACK_IMPORTED_MODULE_6__.removeAttributes(svg, this.removeSVGAttributes);
    }
    if (this.setSVGAttributes) {
      _svg_util__WEBPACK_IMPORTED_MODULE_6__.setAttributes(svg, this.setSVGAttributes);
    }
    if (this.onSVGLoaded) {
      svg = this.onSVGLoaded(svg, this._el.nativeElement);
    }
    this._insertEl(svg);
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
      this._inlineSVGService.evalScripts(svg, this.inlineSVG, this.evalScripts);
    }
    if (this.forceEvalStyles) {
      var styleTags = svg.querySelectorAll('style');
      Array.from(styleTags).forEach(function (tag) {
        return tag.textContent += '';
      });
    }
    this.onSVGInserted.emit(svg);
  };
  InlineSVGDirective.prototype._insertEl = function (el) {
    if (this.injectComponent) {
      if (!this._svgComp) {
        var factory = this._resolver.resolveComponentFactory(_inline_svg_component__WEBPACK_IMPORTED_MODULE_2__.InlineSVGComponent);
        this._svgComp = this._viewContainerRef.createComponent(factory);
      }
      this._svgComp.instance.context = this;
      this._svgComp.instance.replaceContents = this.replaceContents;
      this._svgComp.instance.prepend = this.prepend;
      this._svgComp.instance.content = el;
      this._renderer.appendChild(this._el.nativeElement, this._svgComp.injector.get(_inline_svg_component__WEBPACK_IMPORTED_MODULE_2__.InlineSVGComponent)._el.nativeElement);
    } else {
      this._inlineSVGService.insertEl(this, this._el.nativeElement, el, this.replaceContents, this.prepend);
    }
  };
  InlineSVGDirective.prototype._fail = function (msg) {
    this.onSVGFailed.emit(msg);
    if (this.fallbackImgUrl) {
      var elImg = this._renderer.createElement('IMG');
      this._renderer.setAttribute(elImg, 'src', this.fallbackImgUrl);
      this._insertEl(elImg);
    } else if (this.fallbackSVG && this.fallbackSVG !== this.inlineSVG) {
      this.inlineSVG = this.fallbackSVG;
      this._insertSVG();
    }
  };
  InlineSVGDirective.prototype._isValidPlatform = function () {
    return (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformServer)(this.platformId) || (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId);
  };
  InlineSVGDirective.prototype._isSSRDisabled = function () {
    return (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformServer)(this.platformId) && this._config && this._config.clientOnly;
  };
  InlineSVGDirective.ɵfac = function InlineSVGDirective_Factory(t) {
    return new (t || InlineSVGDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_svg_cache_service__WEBPACK_IMPORTED_MODULE_3__.SVGCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_inline_svg_service__WEBPACK_IMPORTED_MODULE_4__.InlineSVGService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_inline_svg_config__WEBPACK_IMPORTED_MODULE_5__.InlineSVGConfig, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID));
  };
  InlineSVGDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: InlineSVGDirective,
    selectors: [["", "inlineSVG", ""]],
    inputs: {
      inlineSVG: "inlineSVG",
      resolveSVGUrl: "resolveSVGUrl",
      replaceContents: "replaceContents",
      prepend: "prepend",
      injectComponent: "injectComponent",
      cacheSVG: "cacheSVG",
      setSVGAttributes: "setSVGAttributes",
      removeSVGAttributes: "removeSVGAttributes",
      forceEvalStyles: "forceEvalStyles",
      evalScripts: "evalScripts",
      fallbackImgUrl: "fallbackImgUrl",
      fallbackSVG: "fallbackSVG",
      onSVGLoaded: "onSVGLoaded"
    },
    outputs: {
      onSVGInserted: "onSVGInserted",
      onSVGFailed: "onSVGFailed"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_svg_cache_service__WEBPACK_IMPORTED_MODULE_3__.SVGCacheService]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
  });
  return InlineSVGDirective;
}();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InlineSVGDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[inlineSVG]',
      providers: [_svg_cache_service__WEBPACK_IMPORTED_MODULE_3__.SVGCacheService]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver
    }, {
      type: _svg_cache_service__WEBPACK_IMPORTED_MODULE_3__.SVGCacheService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _inline_svg_service__WEBPACK_IMPORTED_MODULE_4__.InlineSVGService
    }, {
      type: _inline_svg_config__WEBPACK_IMPORTED_MODULE_5__.InlineSVGConfig,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
      }]
    }];
  }, {
    inlineSVG: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    resolveSVGUrl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    replaceContents: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    prepend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    injectComponent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cacheSVG: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    setSVGAttributes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    removeSVGAttributes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    forceEvalStyles: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    evalScripts: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    fallbackImgUrl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    fallbackSVG: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onSVGLoaded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onSVGInserted: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onSVGFailed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

/***/ }),

/***/ 61962:
/*!************************************************************************!*\
  !*** ./node_modules/ng-inline-svg-2/lib_esmodule/inline-svg.module.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InlineSVGModule: () => (/* binding */ InlineSVGModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inline_svg_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inline-svg.component */ 61563);
/* harmony import */ var _inline_svg_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inline-svg.config */ 77181);
/* harmony import */ var _inline_svg_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inline-svg.directive */ 16360);





var InlineSVGModule = function () {
  function InlineSVGModule() {}
  InlineSVGModule.forRoot = function (config) {
    return {
      ngModule: InlineSVGModule,
      providers: [{
        provide: _inline_svg_config__WEBPACK_IMPORTED_MODULE_2__.InlineSVGConfig,
        useValue: config
      }]
    };
  };
  InlineSVGModule.ɵfac = function InlineSVGModule_Factory(t) {
    return new (t || InlineSVGModule)();
  };
  InlineSVGModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: InlineSVGModule
  });
  InlineSVGModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
  return InlineSVGModule;
}();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InlineSVGModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [_inline_svg_directive__WEBPACK_IMPORTED_MODULE_3__.InlineSVGDirective, _inline_svg_component__WEBPACK_IMPORTED_MODULE_1__.InlineSVGComponent],
      exports: [_inline_svg_directive__WEBPACK_IMPORTED_MODULE_3__.InlineSVGDirective],
      entryComponents: [_inline_svg_component__WEBPACK_IMPORTED_MODULE_1__.InlineSVGComponent]
    }]
  }], null, null);
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InlineSVGModule, {
    declarations: [_inline_svg_directive__WEBPACK_IMPORTED_MODULE_3__.InlineSVGDirective, _inline_svg_component__WEBPACK_IMPORTED_MODULE_1__.InlineSVGComponent],
    exports: [_inline_svg_directive__WEBPACK_IMPORTED_MODULE_3__.InlineSVGDirective]
  });
})();

/***/ }),

/***/ 96046:
/*!*************************************************************************!*\
  !*** ./node_modules/ng-inline-svg-2/lib_esmodule/inline-svg.service.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InlineSVGService: () => (/* binding */ InlineSVGService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);


var InlineSVGService = function () {
  function InlineSVGService(rendererFactory) {
    this._ranScripts = {};
    this._renderer = rendererFactory.createRenderer(null, null);
  }
  InlineSVGService.prototype.insertEl = function (dir, parentEl, content, replaceContents, prepend) {
    if (replaceContents && !prepend) {
      var parentNode = dir._prevSVG && dir._prevSVG.parentNode;
      if (parentNode) {
        this._renderer.removeChild(parentNode, dir._prevSVG);
      }
      parentEl.innerHTML = '';
    }
    if (prepend) {
      this._renderer.insertBefore(parentEl, content, parentEl.firstChild);
    } else {
      this._renderer.appendChild(parentEl, content);
    }
    if (content.nodeName === 'svg') {
      dir._prevSVG = content;
    }
  };
  InlineSVGService.prototype.evalScripts = function (svg, url, evalMode) {
    var scripts = svg.querySelectorAll('script');
    var scriptsToEval = [];
    for (var i = 0; i < scripts.length; i++) {
      var scriptType = scripts[i].getAttribute('type');
      if (!scriptType || scriptType === 'application/ecmascript' || scriptType === 'application/javascript') {
        var script = scripts[i].innerText || scripts[i].textContent;
        scriptsToEval.push(script);
        this._renderer.removeChild(scripts[i].parentNode, scripts[i]);
      }
    }
    if (scriptsToEval.length > 0 && (evalMode === "always" || evalMode === "once" && !this._ranScripts[url])) {
      for (var i = 0; i < scriptsToEval.length; i++) {
        new Function(scriptsToEval[i])(window);
      }
      this._ranScripts[url] = true;
    }
  };
  InlineSVGService.ɵfac = function InlineSVGService_Factory(t) {
    return new (t || InlineSVGService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2));
  };
  InlineSVGService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: InlineSVGService,
    factory: InlineSVGService.ɵfac,
    providedIn: 'root'
  });
  return InlineSVGService;
}();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InlineSVGService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2
    }];
  }, null);
})();

/***/ }),

/***/ 70947:
/*!************************************************************************!*\
  !*** ./node_modules/ng-inline-svg-2/lib_esmodule/svg-cache.service.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SVGCacheService: () => (/* binding */ SVGCacheService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1261);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _inline_svg_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inline-svg.config */ 77181);










var SVGCacheService = function () {
  function SVGCacheService(_appBase, _location, _config, httpClient, httpBackend, rendererFactory) {
    this._appBase = _appBase;
    this._location = _location;
    this._config = _config;
    this._http = _config && !_config.bypassHttpClientInterceptorChain ? httpClient : new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient(httpBackend);
    this._renderer = rendererFactory.createRenderer(null, null);
    this.setBaseUrl();
    if (!SVGCacheService._cache) {
      SVGCacheService._cache = new Map();
    }
    if (!SVGCacheService._inProgressReqs) {
      SVGCacheService._inProgressReqs = new Map();
    }
  }
  SVGCacheService.prototype.getSVG = function (url, resolveSVGUrl, cache) {
    var _this = this;
    if (cache === void 0) {
      cache = true;
    }
    var svgUrl = (resolveSVGUrl ? this.getAbsoluteUrl(url) : url).replace(/#.+$/, '');
    if (cache && SVGCacheService._cache.has(svgUrl)) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(this._cloneSVG(SVGCacheService._cache.get(svgUrl)));
    }
    if (SVGCacheService._inProgressReqs.has(svgUrl)) {
      return SVGCacheService._inProgressReqs.get(svgUrl);
    }
    var req = this._http.get(svgUrl, {
      responseType: 'text'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(function () {
      SVGCacheService._inProgressReqs.delete(svgUrl);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(function (error) {
      SVGCacheService._inProgressReqs.delete(svgUrl);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error.message);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.share)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (svgText) {
      var svgEl = _this._svgElementFromString(svgText);
      SVGCacheService._cache.set(svgUrl, svgEl);
      return _this._cloneSVG(svgEl);
    }));
    SVGCacheService._inProgressReqs.set(svgUrl, req);
    return req;
  };
  SVGCacheService.prototype.setBaseUrl = function () {
    if (this._config) {
      this._baseUrl = this._config.baseUrl;
    } else if (this._appBase !== null) {
      this._baseUrl = this._appBase;
    } else if (this._location !== null) {
      this._baseUrl = this._location.getBaseHrefFromDOM();
    }
  };
  SVGCacheService.prototype.getAbsoluteUrl = function (url) {
    if (this._baseUrl && !/^https?:\/\//i.test(url)) {
      url = this._baseUrl + url;
      if (url.indexOf('//') === 0) {
        url = url.substring(1);
      }
    }
    var base = this._renderer.createElement('BASE');
    base.href = url;
    return base.href;
  };
  SVGCacheService.prototype._svgElementFromString = function (str) {
    var div = this._renderer.createElement('DIV');
    div.innerHTML = str;
    var svg = div.querySelector('svg');
    if (!svg) {
      throw new Error('No SVG found in loaded contents');
    }
    return svg;
  };
  SVGCacheService.prototype._cloneSVG = function (svg) {
    return svg.cloneNode(true);
  };
  SVGCacheService.ɵfac = function SVGCacheService_Factory(t) {
    return new (t || SVGCacheService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.APP_BASE_HREF, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.PlatformLocation, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_inline_svg_config__WEBPACK_IMPORTED_MODULE_5__.InlineSVGConfig, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpBackend), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.RendererFactory2));
  };
  SVGCacheService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: SVGCacheService,
    factory: SVGCacheService.ɵfac,
    providedIn: 'root'
  });
  return SVGCacheService;
}();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SVGCacheService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.APP_BASE_HREF]
      }]
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_0__.PlatformLocation,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
      }]
    }, {
      type: _inline_svg_config__WEBPACK_IMPORTED_MODULE_5__.InlineSVGConfig,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
      }]
    }, {
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
    }, {
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpBackend
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.RendererFactory2
    }];
  }, null);
})();

/***/ }),

/***/ 32851:
/*!***************************************************************!*\
  !*** ./node_modules/ng-inline-svg-2/lib_esmodule/svg-util.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSymbolSvg: () => (/* binding */ createSymbolSvg),
/* harmony export */   isSvgSupported: () => (/* binding */ isSvgSupported),
/* harmony export */   isUrlSymbol: () => (/* binding */ isUrlSymbol),
/* harmony export */   removeAttributes: () => (/* binding */ removeAttributes),
/* harmony export */   setAttributes: () => (/* binding */ setAttributes)
/* harmony export */ });
function isUrlSymbol(url) {
  return url.charAt(0) === '#' || url.indexOf('.svg#') > -1;
}
function isSvgSupported() {
  return typeof SVGRect !== 'undefined';
}
function createSymbolSvg(renderer, svg, symbolId) {
  var symbol = svg.querySelector("[id=\"".concat(symbolId, "\"]"));
  if (!symbol) {
    throw new Error("Symbol \"".concat(symbolId, "\" not found"));
  }
  var elSvg = renderer.createElement('svg', 'svg');
  renderer.appendChild(elSvg, symbol);
  var elSvgUse = renderer.createElement('use', 'svg');
  renderer.setAttribute(elSvgUse, 'href', "#".concat(symbolId), 'xlink');
  renderer.appendChild(elSvg, elSvgUse);
  return elSvg;
}
function removeAttributes(element, attrs) {
  for (var i = 0; i < attrs.length; i++) {
    var elAttr = element.getAttribute(attrs[i]);
    if (elAttr) {
      element.removeAttribute(attrs[i]);
    }
  }
  var innerEls = element.getElementsByTagName('*');
  for (var i = 0; i < innerEls.length; i++) {
    removeAttributes(innerEls[i], attrs);
  }
}
function setAttributes(element, attrs) {
  for (var attr in attrs) {
    element.setAttribute(attr, attrs[attr]);
  }
}

/***/ })

}])
//# sourceMappingURL=libs_sales_appointment_feat-appointment_src_index_ts-_aad50.js.map