(self["webpackChunkcustomer_registration_mfe"] = self["webpackChunkcustomer_registration_mfe"] || []).push([["default-libs_shared_shared_src_index_ts"],{

/***/ 76881:
/*!*****************************************!*\
  !*** ./libs/shared/shared/src/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Builder: () => (/* reexport safe */ _lib_builder_builder_model__WEBPACK_IMPORTED_MODULE_8__.Builder),
/* harmony export */   CircularPlayerComponent: () => (/* reexport safe */ _lib_ui_circular_audio_player__WEBPACK_IMPORTED_MODULE_9__.CircularPlayerComponent),
/* harmony export */   CircularPlayerModule: () => (/* reexport safe */ _lib_ui_circular_audio_player__WEBPACK_IMPORTED_MODULE_9__.CircularPlayerModule),
/* harmony export */   DomService: () => (/* reexport safe */ _lib_dom_dom_service_dom_service__WEBPACK_IMPORTED_MODULE_7__.DomService),
/* harmony export */   LogFactory: () => (/* reexport safe */ _lib_debug_log_factory__WEBPACK_IMPORTED_MODULE_2__.LogFactory),
/* harmony export */   MapFunctionPipe: () => (/* reexport safe */ _lib_pipes_map_to_pipe__WEBPACK_IMPORTED_MODULE_15__.MapFunctionPipe),
/* harmony export */   MockTranslateService: () => (/* reexport safe */ _lib_mock_mock_service__WEBPACK_IMPORTED_MODULE_6__.MockTranslateService),
/* harmony export */   OnChange: () => (/* reexport safe */ _lib_utils__WEBPACK_IMPORTED_MODULE_13__.OnChange),
/* harmony export */   OverlayPopupComponent: () => (/* reexport safe */ _lib_ui_overlay_popup__WEBPACK_IMPORTED_MODULE_10__.OverlayPopupComponent),
/* harmony export */   RecaptchaService: () => (/* reexport safe */ _lib_recaptcha__WEBPACK_IMPORTED_MODULE_14__.RecaptchaService),
/* harmony export */   SharedToolModule: () => (/* reexport safe */ _lib_shared_tool_module__WEBPACK_IMPORTED_MODULE_1__.SharedToolModule),
/* harmony export */   TgTelenetTestingModule: () => (/* reexport safe */ _lib_core_testing__WEBPACK_IMPORTED_MODULE_11__.TgTelenetTestingModule),
/* harmony export */   WindowService: () => (/* reexport safe */ _lib_window_window_service__WEBPACK_IMPORTED_MODULE_0__.WindowService),
/* harmony export */   cleanStylesFromDom: () => (/* reexport safe */ _lib_style_clean_style_tags_util__WEBPACK_IMPORTED_MODULE_4__.cleanStylesFromDom),
/* harmony export */   createStorageMetaReducer: () => (/* reexport safe */ _lib_core_state__WEBPACK_IMPORTED_MODULE_12__.createStorageMetaReducer),
/* harmony export */   isDefined: () => (/* reexport safe */ _lib_utils__WEBPACK_IMPORTED_MODULE_13__.isDefined)
/* harmony export */ });
/* harmony import */ var _lib_window_window_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/window/window.service */ 4214);
/* harmony import */ var _lib_shared_tool_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/shared-tool.module */ 20647);
/* harmony import */ var _lib_debug_log_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/debug/log.factory */ 60021);
/* harmony import */ var _lib_debug_log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/debug/log */ 46809);
/* harmony import */ var _lib_style_clean_style_tags_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/style/clean-style-tags.util */ 44275);
/* harmony import */ var _lib_interface_mapper_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/interface/mapper.interface */ 41291);
/* harmony import */ var _lib_mock_mock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/mock/mock.service */ 64500);
/* harmony import */ var _lib_dom_dom_service_dom_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/dom/dom-service/dom-service */ 51405);
/* harmony import */ var _lib_builder_builder_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/builder/builder.model */ 80096);
/* harmony import */ var _lib_ui_circular_audio_player__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/ui/circular-audio-player */ 29146);
/* harmony import */ var _lib_ui_overlay_popup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/ui/overlay-popup */ 39426);
/* harmony import */ var _lib_core_testing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/core/testing */ 9566);
/* harmony import */ var _lib_core_state__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/core/state */ 26265);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/utils */ 25900);
/* harmony import */ var _lib_recaptcha__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lib/recaptcha */ 22740);
/* harmony import */ var _lib_pipes_map_to_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lib/pipes/map-to.pipe */ 12833);

















/***/ }),

/***/ 80096:
/*!*************************************************************!*\
  !*** ./libs/shared/shared/src/lib/builder/builder.model.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Builder: () => (/* binding */ Builder)
/* harmony export */ });
function Builder(typeOrTemplate, template) {
  let type;
  if (typeOrTemplate instanceof Function) {
    type = typeOrTemplate;
  } else {
    template = typeOrTemplate;
  }
  const built = template ? Object.assign({}, template) : {};
  const builder = new Proxy({}, {
    get(_target, prop) {
      if ('build' === prop) {
        if (type) {
          // A class name (identified by the constructor) was passed. Instantiate it with props.
          const obj = new type();
          return () => Object.assign(obj, {
            ...built
          });
        } else {
          // No type information - just return the object.
          return () => built;
        }
      }
      return x => {
        built[prop.toString()] = x;
        return builder;
      };
    }
  });
  return builder;
}

/***/ }),

/***/ 26265:
/*!********************************************************!*\
  !*** ./libs/shared/shared/src/lib/core/state/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createStorageMetaReducer: () => (/* reexport safe */ _storage_metareducer__WEBPACK_IMPORTED_MODULE_0__.createStorageMetaReducer)
/* harmony export */ });
/* harmony import */ var _storage_metareducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.metareducer */ 24023);


/***/ }),

/***/ 24023:
/*!**********************************************************************!*\
  !*** ./libs/shared/shared/src/lib/core/state/storage.metareducer.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createStorageMetaReducer: () => (/* binding */ createStorageMetaReducer)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ 94011);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ 78021);

function setSavedState(state, localStorageKey) {
  sessionStorage.setItem(localStorageKey, JSON.stringify(state));
}
function getSavedState(localStorageKey) {
  const item = sessionStorage.getItem(localStorageKey);
  if (item) {
    return JSON.parse(item);
  }
  return {};
}
function createStorageMetaReducer(storageKey, stateKeys) {
  return function storageMetaReducer(reducer) {
    let onInit = true; // after load/refresh…
    return function (state, action) {
      // reduce the nextState.
      const nextState = reducer(state, action);
      // init the application state.
      if (onInit) {
        onInit = false;
        const savedState = getSavedState(storageKey);
        return (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__["default"])(nextState, savedState);
      }
      // save the next state to the application storage.
      const stateToSave = (0,lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"])(nextState, stateKeys);
      setSavedState(stateToSave, storageKey);
      return nextState;
    };
  };
}

/***/ }),

/***/ 9566:
/*!**********************************************************!*\
  !*** ./libs/shared/shared/src/lib/core/testing/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TgTelenetTestingModule: () => (/* reexport safe */ _telenet_common_testing_module__WEBPACK_IMPORTED_MODULE_0__.TgTelenetTestingModule)
/* harmony export */ });
/* harmony import */ var _telenet_common_testing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./telenet-common-testing.module */ 94155);


/***/ }),

/***/ 94155:
/*!**********************************************************************************!*\
  !*** ./libs/shared/shared/src/lib/core/testing/telenet-common-testing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TgTelenetTestingModule: () => (/* binding */ TgTelenetTestingModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1261);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 70782);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);





class TgTelenetTestingModule {
  static forRoot() {
    return {
      ngModule: TgTelenetTestingModule,
      providers: [{
        provide: 'Window',
        useValue: window
      }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective]
    };
  }
  static #_ = this.ɵfac = function TgTelenetTestingModule_Factory(t) {
    return new (t || TgTelenetTestingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: TgTelenetTestingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TgTelenetTestingModule, {
    imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
    exports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]
  });
})();

/***/ }),

/***/ 60021:
/*!*********************************************************!*\
  !*** ./libs/shared/shared/src/lib/debug/log.factory.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogFactory: () => (/* binding */ LogFactory)
/* harmony export */ });
/* harmony import */ var _window_window_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../window/window.service */ 4214);

class LogFactory {
  static createLogger(component) {
    return new LogImpl(component);
  }
}
class LogImpl {
  constructor(component) {
    this.windowService = new _window_window_service__WEBPACK_IMPORTED_MODULE_0__.WindowService();
    if (component) {
      this.component = component;
    }
  }
  log(...args) {
    if (this.component) {
      console.log(this.componentToString(args));
    } else {
      console.log(args);
    }
  }
  logDebug(...args) {
    if (this.isDebugEnabled()) {
      if (this.component) {
        console.debug(this.componentToString(args));
      } else {
        console.debug(args);
      }
    }
  }
  logError(...args) {
    if (this.component) {
      console.error(this.componentToString(args));
    } else {
      console.error(args);
    }
  }
  logInfo(...args) {
    if (this.component) {
      console.info(this.componentToString(args));
    } else {
      console.info(args);
    }
  }
  isDebugEnabled() {
    return this.windowService && this.windowService.getParamValue('debug') === 'true';
  }
  componentToString(args) {
    return [`${this.component.prototype.constructor.name}`, ...args];
  }
}

/***/ }),

/***/ 46809:
/*!*************************************************!*\
  !*** ./libs/shared/shared/src/lib/debug/log.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 51405:
/*!*******************************************************************!*\
  !*** ./libs/shared/shared/src/lib/dom/dom-service/dom-service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DomService: () => (/* binding */ DomService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

class DomService {
  findElementById(id) {
    return document.getElementById(id);
  }
  appendScript(src, id, onLoadCallback) {
    const script = document.createElement('script');
    script.src = src;
    script.id = id || '';
    script.onload = onLoadCallback || null;
    const head = document.getElementsByTagName('head')[0];
    head.appendChild(script);
  }
  scrollToElement(selector, delay) {
    setTimeout(() => {
      const elementToScroll = document.querySelector(selector);
      if (elementToScroll) {
        elementToScroll.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    }, delay);
  }
  scrollToStartElement(selector, delay) {
    setTimeout(() => {
      const elementToScrollAtStart = document.querySelector(selector);
      if (elementToScrollAtStart) {
        elementToScrollAtStart.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, delay);
  }
  scrollToTop() {
    setTimeout(() => {
      const elementToScroll = document.querySelector('#app');
      if (elementToScroll) {
        elementToScroll.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  }
  getDomElement(selector) {
    return document.querySelector(selector);
  }
  toggleBodyOverflow(isBodyScrollable) {
    const domElement = this.getDomElement('body');
    if (domElement) {
      domElement.style.overflow = isBodyScrollable ? 'hidden' : '';
    }
  }
  scrollElementToTop(selector) {
    const domElement = this.getDomElement(selector);
    if (domElement) {
      domElement.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      });
    }
  }
  scrollIntoViewBasedOnId(id) {
    const elementToScroll = document.getElementById(id);
    elementToScroll?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  }
  static #_ = this.ɵfac = function DomService_Factory(t) {
    return new (t || DomService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: DomService,
    factory: DomService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 41291:
/*!******************************************************************!*\
  !*** ./libs/shared/shared/src/lib/interface/mapper.interface.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 64500:
/*!*********************************************************!*\
  !*** ./libs/shared/shared/src/lib/mock/mock.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MockTranslateService: () => (/* binding */ MockTranslateService)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__);

class MockTranslateService extends _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__.TranslateService {
  constructor() {
    super(new _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__.TranslateStore(), new _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__.TranslateFakeLoader(), new _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__.TranslateFakeCompiler(), new _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__.TranslateDefaultParser(), new _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__.FakeMissingTranslationHandler(), false, false, false, 'en');
  }
  instant(key) {
    return key;
  }
}

/***/ }),

/***/ 12833:
/*!*********************************************************!*\
  !*** ./libs/shared/shared/src/lib/pipes/map-to.pipe.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapFunctionPipe: () => (/* binding */ MapFunctionPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

class MapFunctionPipe {
  transform(value, functionToMap) {
    return functionToMap(value);
  }
  static #_ = this.ɵfac = function MapFunctionPipe_Factory(t) {
    return new (t || MapFunctionPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "mapTo",
    type: MapFunctionPipe,
    pure: true,
    standalone: true
  });
}

/***/ }),

/***/ 22740:
/*!*******************************************************!*\
  !*** ./libs/shared/shared/src/lib/recaptcha/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecaptchaService: () => (/* reexport safe */ _recaptcha_service__WEBPACK_IMPORTED_MODULE_0__.RecaptchaService)
/* harmony export */ });
/* harmony import */ var _recaptcha_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recaptcha.service */ 21788);


/***/ }),

/***/ 21788:
/*!*******************************************************************!*\
  !*** ./libs/shared/shared/src/lib/recaptcha/recaptcha.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecaptchaService: () => (/* binding */ RecaptchaService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);



class RecaptchaService {
  constructor(window) {
    this.window = window;
  }
  getRecaptchaToken(action, siteKey) {
    const recaptchaReadyAsObservable = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.bindCallback)(callback => this.getRecaptcha().ready(callback));
    return recaptchaReadyAsObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.from)(this.executeRecaptcha(action, siteKey))));
  }
  getRecaptcha() {
    return this.window['grecaptcha'];
  }
  executeRecaptcha(action, siteKey) {
    return this.getRecaptcha().execute(siteKey, {
      action: action
    });
  }
  static #_ = this.ɵfac = function RecaptchaService_Factory(t) {
    return new (t || RecaptchaService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"]('Window'));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: RecaptchaService,
    factory: RecaptchaService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 20647:
/*!**********************************************************!*\
  !*** ./libs/shared/shared/src/lib/shared-tool.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedToolModule: () => (/* binding */ SharedToolModule)
/* harmony export */ });
/* harmony import */ var _window_window_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./window/window.service */ 4214);
/* harmony import */ var _debug_log_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debug/log.factory */ 60021);
/* harmony import */ var _dom_dom_service_dom_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom/dom-service/dom-service */ 51405);
/* harmony import */ var _ui_circular_audio_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/circular-audio-player */ 29146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);





class SharedToolModule {
  static #_ = this.ɵfac = function SharedToolModule_Factory(t) {
    return new (t || SharedToolModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: SharedToolModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    providers: [_window_window_service__WEBPACK_IMPORTED_MODULE_0__.WindowService, _debug_log_factory__WEBPACK_IMPORTED_MODULE_1__.LogFactory, _dom_dom_service_dom_service__WEBPACK_IMPORTED_MODULE_2__.DomService],
    imports: [_ui_circular_audio_player__WEBPACK_IMPORTED_MODULE_3__.CircularPlayerModule, _ui_circular_audio_player__WEBPACK_IMPORTED_MODULE_3__.CircularPlayerModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SharedToolModule, {
    imports: [_ui_circular_audio_player__WEBPACK_IMPORTED_MODULE_3__.CircularPlayerModule],
    exports: [_ui_circular_audio_player__WEBPACK_IMPORTED_MODULE_3__.CircularPlayerModule]
  });
})();

/***/ }),

/***/ 44275:
/*!*******************************************************************!*\
  !*** ./libs/shared/shared/src/lib/style/clean-style-tags.util.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cleanStylesFromDom: () => (/* binding */ cleanStylesFromDom)
/* harmony export */ });
function cleanStylesFromDom() {
  const MAX_STYLE_TAGS = 20;
  const head = document.getElementsByTagName('head')[0];
  const styles = head && head.getElementsByTagName('style');
  if (styles && styles.length >= MAX_STYLE_TAGS) {
    for (const style of Array.from(styles)) {
      head.removeChild(style);
    }
  }
}

/***/ }),

/***/ 2587:
/*!******************************************************************************************!*\
  !*** ./libs/shared/shared/src/lib/ui/circular-audio-player/circular-player.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CircularPlayerComponent: () => (/* binding */ CircularPlayerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/**
 * This is ported because there is no support for angular 15
 * https://github.com/mgechev/ngx-circular-player
 */



const _c0 = ["audioElement"];
const _c1 = ["progress"];
const RADIUS = 50;
class CircularPlayerComponent {
  constructor() {
    this.radius = 44;
    this.stroke = 10;
    this.innerStroke = 0;
    this.strokeColor = '#ffc421';
    this.progressStrokeColor = '#fff';
    this.innerStrokeColor = '#291D18';
    this.centerX = 50;
    this.centerY = 50;
    this.circleRadius = 32;
    this.playing = false;
  }
  toggle() {
    this.playing = !this.playing;
    if (this.playing) {
      this.audioElement.nativeElement.play();
    } else {
      this.audioElement.nativeElement.pause();
    }
  }
  get arrowStyle() {
    const topWidth = this.radius / 8;
    const bottomWidth = this.radius / 8;
    const leftWidth = this.radius / 5;
    return {
      'border-top-width': `${topWidth}px`,
      'border-bottom-width': `${bottomWidth}px`,
      'border-left-width': `${leftWidth}px`
    };
  }
  ngAfterViewInit() {
    const progress = this.progress.nativeElement;
    // During SSR we don't need to do anything special here.
    if (!progress || typeof progress.getTotalLength !== 'function') {
      return;
    }
    const totalLength = progress.getTotalLength();
    const audio = this.audioElement.nativeElement;
    progress.setAttribute('stroke-dasharray', totalLength);
    progress.setAttribute('stroke-dashoffset', totalLength);
    audio.addEventListener('pause', () => this.playing = false);
    audio.addEventListener('play', () => this.playing = true);
    audio.addEventListener('timeupdate', () => {
      const currentTime = audio.currentTime;
      const maxduration = audio.duration;
      const calc = totalLength - currentTime / maxduration * totalLength;
      progress.setAttribute('stroke-dashoffset', calc);
    });
  }
  seek(evnt) {
    const ratio = this._calculateAngle(evnt) / 360;
    const audio = this.audioElement.nativeElement;
    audio.currentTime = ratio * audio.duration;
  }
  get pauseLeftBarSize() {
    return {
      width: `${this.radius / 10}px`,
      height: `${this.radius / 3.5}px`,
      left: `calc(50% - ${this.radius / 12}px)`
    };
  }
  get pauseRightBarSize() {
    return {
      width: `${this.radius / 10}px`,
      height: `${this.radius / 3.5}px`,
      left: `calc(50% + ${this.radius / 12}px)`
    };
  }
  get playButtonRadius() {
    return this.radius - this.radius / 3 + 'px';
  }
  _calculateAngle(evnt) {
    const x = RADIUS * 2 / (this.radius / evnt.offsetX);
    const y = RADIUS * 2 / (this.radius / evnt.offsetY);
    const slope = (RADIUS - y) / (RADIUS - x);
    const angle = 180 * (Math.abs(Math.atan(slope)) / Math.PI);
    if (x <= RADIUS && y >= RADIUS) {
      return angle;
    }
    if (x > RADIUS && y >= RADIUS) {
      return 180 - angle;
    }
    if (x > RADIUS && y <= RADIUS) {
      return 180 + angle;
    }
    return 180 + (180 - angle);
  }
  static #_ = this.ɵfac = function CircularPlayerComponent_Factory(t) {
    return new (t || CircularPlayerComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CircularPlayerComponent,
    selectors: [["ngx-circular-player"]],
    viewQuery: function CircularPlayerComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.audioElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.progress = _t.first);
      }
    },
    inputs: {
      audio: "audio"
    },
    decls: 13,
    vars: 24,
    consts: [[1, "play", 3, "click"], [1, "arrow", 3, "ngStyle"], [1, "pause"], [1, "before", 3, "ngStyle"], [1, "after", 3, "ngStyle"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 100 100"], ["fill", "transparent"], ["pointer-events", "stroke", "d", "M 50 50\n       m -50, 0\n       a 50,50 0 1,0 100,0\n       a 50,50 0 1,0 -100,0", "stroke-miterlimit", "10", "fill", "transparent", 2, "cursor", "pointer", 3, "click"], ["d", "M 50 50\n       m -50, 0\n       a 50,50 0 1,0 100,0\n       a 50,50 0 1,0 -100,0", "fill", "transparent"], ["progress", ""], ["preload", "auto"], ["audioElement", ""], ["type", "audio/mp3", 3, "src"]],
    template: function CircularPlayerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CircularPlayerComponent_Template_button_click_0_listener() {
          return ctx.toggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3)(4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "circle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CircularPlayerComponent_Template__svg_path_click_7_listener($event) {
          return ctx.seek($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "audio", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "source", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.playButtonRadius)("height", ctx.playButtonRadius);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hidden-arrow", ctx.playing);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.arrowStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hidden", !ctx.playing);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.pauseLeftBarSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.pauseRightBarSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.radius);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("cx", ctx.centerX)("cy", ctx.centerY)("r", ctx.circleRadius)("stroke", ctx.innerStrokeColor)("stroke-width", ctx.innerStroke);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("stroke", ctx.progressStrokeColor)("stroke-width", ctx.stroke);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("stroke-miterlimit", 10)("stroke", ctx.strokeColor)("stroke-width", ctx.stroke);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.audio, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
    styles: ["svg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  stroke: #fff;\n  border-radius: 100%;\n  transform: translate(-50%, -50%);\n  pointer-events: none;\n  z-index: 0;\n}\n\nsvg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.play[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 3;\n  background: #f7f6f6 !important;\n  cursor: pointer;\n  transform: translate(-50%, -50%);\n  outline: none;\n  border: none;\n}\n\n.arrow[_ngcontent-%COMP%] {\n  transition: all 0.3s;\n  width: 0;\n  height: 0;\n  border-top-color: transparent;\n  border-top-style: solid;\n  border-bottom-color: transparent;\n  border-bottom-style: solid;\n  border-left-style: solid;\n  border-left-color: #eee;\n  margin: auto;\n}\n\n.play[_ngcontent-%COMP%], .pause[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n\n.pause[_ngcontent-%COMP%] {\n  transition: opacity 0.3s;\n}\n\n\n\n.play[_ngcontent-%COMP%], .pause[_ngcontent-%COMP%], .pause[_ngcontent-%COMP%]   .before[_ngcontent-%COMP%], .pause[_ngcontent-%COMP%]   .after[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.pause[_ngcontent-%COMP%]   .before[_ngcontent-%COMP%], .pause[_ngcontent-%COMP%]   .after[_ngcontent-%COMP%] {\n  content: \"\";\n  background-color: #eee;\n  display: inline-block;\n  opacity: 1;\n}\n\n.hidden-arrow[_ngcontent-%COMP%] {\n  border-left-width: 0 !important;\n}\n\n.hidden[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvc2hhcmVkL3NoYXJlZC9zcmMvbGliL3VpL2NpcmN1bGFyLWF1ZGlvLXBsYXllci9jaXJjdWxhci1wbGF5ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNNO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0FBQVI7O0FBR007RUFDRSxlQUFBO0FBQVI7O0FBR007RUFDRSxrQkFBQTtBQUFSOztBQUdNO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBQVI7O0FBR007RUFDRSxvQkFBQTtFQUVBLFFBQUE7RUFDQSxTQUFBO0VBRUEsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBRUEsWUFBQTtBQUhSOztBQU1NOztFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFIUjs7QUFNTTtFQUNFLHdCQUFBO0FBSFI7O0FBTU0sV0FBQTtBQUNBOzs7O0VBSUUsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBSFI7O0FBTU07O0VBRUUsV0FBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0FBSFI7O0FBTU07RUFDRSwrQkFBQTtBQUhSOztBQU1NO0VBQ0UsVUFBQTtBQUhSIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICBzdmcge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHN0cm9rZTogI2ZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgfVxuXG4gICAgICBzdmcgcGF0aCB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cblxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAucGxheSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgei1pbmRleDogMztcbiAgICAgICAgYmFja2dyb3VuZDogI2Y3ZjZmNiAhaW1wb3J0YW50O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5hcnJvdyB7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuXG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBoZWlnaHQ6IDA7XG5cbiAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gICAgICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcbiAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICNlZWU7XG5cbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgfVxuXG4gICAgICAucGxheSxcbiAgICAgIC5wYXVzZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIH1cblxuICAgICAgLnBhdXNlIHtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xuICAgICAgfVxuXG4gICAgICAvKiBDZW50ZXIgKi9cbiAgICAgIC5wbGF5LFxuICAgICAgLnBhdXNlLFxuICAgICAgLnBhdXNlIC5iZWZvcmUsXG4gICAgICAucGF1c2UgLmFmdGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgIH1cblxuICAgICAgLnBhdXNlIC5iZWZvcmUsXG4gICAgICAucGF1c2UgLmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cblxuICAgICAgLmhpZGRlbi1hcnJvdyB7XG4gICAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIC5oaWRkZW4ge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 78921:
/*!***************************************************************************************!*\
  !*** ./libs/shared/shared/src/lib/ui/circular-audio-player/circular-player.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CircularPlayerModule: () => (/* binding */ CircularPlayerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _circular_player_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circular-player.component */ 2587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);



class CircularPlayerModule {
  static #_ = this.ɵfac = function CircularPlayerModule_Factory(t) {
    return new (t || CircularPlayerModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: CircularPlayerModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CircularPlayerModule, {
    declarations: [_circular_player_component__WEBPACK_IMPORTED_MODULE_1__.CircularPlayerComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule],
    exports: [_circular_player_component__WEBPACK_IMPORTED_MODULE_1__.CircularPlayerComponent]
  });
})();

/***/ }),

/***/ 29146:
/*!**********************************************************************!*\
  !*** ./libs/shared/shared/src/lib/ui/circular-audio-player/index.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CircularPlayerComponent: () => (/* reexport safe */ _circular_player_component__WEBPACK_IMPORTED_MODULE_0__.CircularPlayerComponent),
/* harmony export */   CircularPlayerModule: () => (/* reexport safe */ _circular_player_module__WEBPACK_IMPORTED_MODULE_1__.CircularPlayerModule)
/* harmony export */ });
/* harmony import */ var _circular_player_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./circular-player.component */ 2587);
/* harmony import */ var _circular_player_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circular-player.module */ 78921);



/***/ }),

/***/ 39426:
/*!**************************************************************!*\
  !*** ./libs/shared/shared/src/lib/ui/overlay-popup/index.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OverlayPopupComponent: () => (/* reexport safe */ _overlay_popup_component__WEBPACK_IMPORTED_MODULE_0__.OverlayPopupComponent)
/* harmony export */ });
/* harmony import */ var _overlay_popup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overlay-popup.component */ 49407);


/***/ }),

/***/ 49407:
/*!********************************************************************************!*\
  !*** ./libs/shared/shared/src/lib/ui/overlay-popup/overlay-popup.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OverlayPopupComponent: () => (/* binding */ OverlayPopupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);



function OverlayPopupComponent_h5_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);
  }
}
function OverlayPopupComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.subtitle);
  }
}
function OverlayPopupComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.content);
  }
}
function OverlayPopupComponent_a_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OverlayPopupComponent_a_12_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.secondaryButtonClicked.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.secondaryButtonText);
  }
}
function OverlayPopupComponent_a_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OverlayPopupComponent_a_13_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.primaryButtonClicked.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.primaryButtonText);
  }
}
class OverlayPopupComponent {
  constructor() {
    this.title = '';
    this.subtitle = '';
    this.content = '';
    this.primaryButtonText = '';
    this.secondaryButtonText = '';
    this.primaryButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.secondaryButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.closeButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  static #_ = this.ɵfac = function OverlayPopupComponent_Factory(t) {
    return new (t || OverlayPopupComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: OverlayPopupComponent,
    selectors: [["app-overlay-popup"]],
    inputs: {
      title: "title",
      subtitle: "subtitle",
      content: "content",
      primaryButtonText: "primaryButtonText",
      secondaryButtonText: "secondaryButtonText"
    },
    outputs: {
      primaryButtonClicked: "primaryButtonClicked",
      secondaryButtonClicked: "secondaryButtonClicked",
      closeButtonClicked: "closeButtonClicked"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 14,
    vars: 5,
    consts: [[1, "overlay"], [1, "overlay__mask"], [1, "overlay__section"], [1, "overlay__section__content", "p--m", "p--l--md", "animation--slide-down-to-screen"], [1, "overlay__section__content__close"], [1, "icon", "icon-cross", 3, "click"], [1, "text-align--left"], ["class", "heading--notopmargin overlay__section__content__title pt--xl", 4, "ngIf"], ["class", "overlay__section__content__sub-title", 4, "ngIf"], [1, "mt--xs"], ["class", "overlay__section__content__description", 4, "ngIf"], [1, "overlay__section__content__action"], ["class", "button button--secondary", 3, "click", 4, "ngIf"], ["class", "button button--primary", 3, "click", 4, "ngIf"], [1, "heading--notopmargin", "overlay__section__content__title", "pt--xl"], [1, "overlay__section__content__sub-title"], [1, "overlay__section__content__description"], [1, "button", "button--secondary", 3, "click"], [1, "button", "button--primary", 3, "click"]],
    template: function OverlayPopupComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OverlayPopupComponent_Template_div_click_5_listener() {
          return ctx.closeButtonClicked.emit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, OverlayPopupComponent_h5_7_Template, 2, 1, "h5", 7)(8, OverlayPopupComponent_div_8_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, OverlayPopupComponent_div_10_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, OverlayPopupComponent_a_12_Template, 2, 1, "a", 12)(13, OverlayPopupComponent_a_13_Template, 2, 1, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.subtitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.secondaryButtonText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.primaryButtonText);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
    encapsulation: 2
  });
}

/***/ }),

/***/ 25900:
/*!***************************************************!*\
  !*** ./libs/shared/shared/src/lib/utils/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OnChange: () => (/* reexport safe */ _on_change_util__WEBPACK_IMPORTED_MODULE_1__.OnChange),
/* harmony export */   isDefined: () => (/* reexport safe */ _rxjs_utils__WEBPACK_IMPORTED_MODULE_0__.isDefined)
/* harmony export */ });
/* harmony import */ var _rxjs_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxjs.utils */ 30385);
/* harmony import */ var _on_change_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./on-change.util */ 32463);



/***/ }),

/***/ 32463:
/*!************************************************************!*\
  !*** ./libs/shared/shared/src/lib/utils/on-change.util.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OnChange: () => (/* binding */ OnChange)
/* harmony export */ });
function OnChange(callback) {
  const cachedValueKey = Symbol();
  const isFirstChangeKey = Symbol();
  return (target, key) => {
    // Retrieve the callback function either by string reference or direct function
    const callBackFn = typeof callback === 'string' ? target[callback] : callback;
    // Check if the callback function exists
    if (!callBackFn || typeof callBackFn !== 'function') {
      throw new Error(`Cannot find method ${callback} in class ${target.constructor.name}`);
    }
    Object.defineProperty(target, key, {
      set(value) {
        const isFirstChange = this[isFirstChangeKey] === undefined;
        if (isFirstChange) this[isFirstChangeKey] = true;
        if (!isFirstChange && this[cachedValueKey] === value) return;
        const oldValue = this[cachedValueKey];
        this[cachedValueKey] = value;
        callBackFn.call(this, value, {
          firstChange: isFirstChange,
          previousValue: oldValue,
          currentValue: value,
          isFirstChange: () => isFirstChange
        });
        this[isFirstChangeKey] = false;
      },
      get() {
        return this[cachedValueKey];
      }
    });
  };
}

/***/ }),

/***/ 30385:
/*!********************************************************!*\
  !*** ./libs/shared/shared/src/lib/utils/rxjs.utils.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isDefined: () => (/* binding */ isDefined)
/* harmony export */ });
const isDefined = value => value !== null && value !== undefined;

/***/ }),

/***/ 4214:
/*!*************************************************************!*\
  !*** ./libs/shared/shared/src/lib/window/window.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WindowService: () => (/* binding */ WindowService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

class WindowService {
  constructor() {
    this.paramMap = new Map();
    this.init();
  }
  getParamValue(key) {
    return this.paramMap.get(key);
  }
  getParamMap() {
    return this.paramMap;
  }
  goTo(params) {
    const url = [];
    params.forEach((_value, _key) => {
      if (!!_key && !!_value) {
        url.push(_key + '=' + _value);
      }
    });
    window.location.search = '?' + url.join('&');
  }
  hasParam(key) {
    return this.paramMap.get(key) !== undefined;
  }
  init() {
    const search = window.location.search.substring(1);
    search.split('&').forEach(comb => {
      const keyValue = comb.split('=');
      this.paramMap.set(keyValue[0], keyValue[1]);
    });
  }
  setWindowObjects(object, value) {
    window[object] = value;
  }
  static #_ = this.ɵfac = function WindowService_Factory(t) {
    return new (t || WindowService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: WindowService,
    factory: WindowService.ɵfac
  });
}

/***/ }),

/***/ 78607:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_baseFlatten.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayPush_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayPush.js */ 11191);
/* harmony import */ var _isFlattenable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isFlattenable.js */ 28336);



/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
    length = array.length;
  predicate || (predicate = _isFlattenable_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  result || (result = []);
  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        (0,_arrayPush_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseFlatten);

/***/ }),

/***/ 8093:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_basePick.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basePickBy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_basePickBy.js */ 64660);
/* harmony import */ var _hasIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hasIn.js */ 23595);



/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, paths) {
  return (0,_basePickBy_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, paths, function (value, path) {
    return (0,_hasIn_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, path);
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (basePick);

/***/ }),

/***/ 64660:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_basePickBy.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGet.js */ 31527);
/* harmony import */ var _baseSet_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseSet.js */ 97873);
/* harmony import */ var _castPath_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_castPath.js */ 17478);




/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
    length = paths.length,
    result = {};
  while (++index < length) {
    var path = paths[index],
      value = (0,_baseGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, path);
    if (predicate(value, path)) {
      (0,_baseSet_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result, (0,_castPath_js__WEBPACK_IMPORTED_MODULE_2__["default"])(path, object), value);
    }
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (basePickBy);

/***/ }),

/***/ 97873:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_baseSet.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assignValue_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_assignValue.js */ 68676);
/* harmony import */ var _castPath_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_castPath.js */ 17478);
/* harmony import */ var _isIndex_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_isIndex.js */ 36570);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ 32176);
/* harmony import */ var _toKey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_toKey.js */ 50667);






/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object)) {
    return object;
  }
  path = (0,_castPath_js__WEBPACK_IMPORTED_MODULE_1__["default"])(path, object);
  var index = -1,
    length = path.length,
    lastIndex = length - 1,
    nested = object;
  while (nested != null && ++index < length) {
    var key = (0,_toKey_js__WEBPACK_IMPORTED_MODULE_2__["default"])(path[index]),
      newValue = value;
    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return object;
    }
    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = (0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(objValue) ? objValue : (0,_isIndex_js__WEBPACK_IMPORTED_MODULE_3__["default"])(path[index + 1]) ? [] : {};
      }
    }
    (0,_assignValue_js__WEBPACK_IMPORTED_MODULE_4__["default"])(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseSet);

/***/ }),

/***/ 82462:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_flatRest.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _flatten_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flatten.js */ 28864);
/* harmony import */ var _overRest_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_overRest.js */ 89116);
/* harmony import */ var _setToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setToString.js */ 13483);




/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return (0,_setToString_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_overRest_js__WEBPACK_IMPORTED_MODULE_1__["default"])(func, undefined, _flatten_js__WEBPACK_IMPORTED_MODULE_2__["default"]), func + '');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (flatRest);

/***/ }),

/***/ 28336:
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_isFlattenable.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ 82134);
/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArguments.js */ 77018);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray.js */ 66328);




/** Built-in value references. */
var spreadableSymbol = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return (0,_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) || (0,_isArguments_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isFlattenable);

/***/ }),

/***/ 28864:
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/flatten.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseFlatten_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseFlatten.js */ 78607);


/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? (0,_baseFlatten_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, 1) : [];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (flatten);

/***/ }),

/***/ 78021:
/*!****************************************!*\
  !*** ./node_modules/lodash-es/pick.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basePick_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_basePick.js */ 8093);
/* harmony import */ var _flatRest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_flatRest.js */ 82462);



/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = (0,_flatRest_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (object, paths) {
  return object == null ? {} : (0,_basePick_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, paths);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pick);

/***/ })

}])
//# sourceMappingURL=default-libs_shared_shared_src_index_ts.js.map