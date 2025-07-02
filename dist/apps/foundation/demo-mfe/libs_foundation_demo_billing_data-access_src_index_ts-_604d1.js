(self["webpackChunkdemo_mfe"] = self["webpackChunkdemo_mfe"] || []).push([["libs_foundation_demo_billing_data-access_src_index_ts-_604d1"],{

/***/ 23891:
/*!***************************************************************!*\
  !*** ./libs/foundation/demo/billing/data-access/src/index.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BillingFacade: () => (/* reexport safe */ _lib_facade_billing_facade__WEBPACK_IMPORTED_MODULE_0__.BillingFacade),
/* harmony export */   BillingStore: () => (/* reexport safe */ _lib_state_billing_store__WEBPACK_IMPORTED_MODULE_2__.BillingStore),
/* harmony export */   InvoiceStatus: () => (/* reexport safe */ _lib_entities_models_invoice_model__WEBPACK_IMPORTED_MODULE_1__.InvoiceStatus)
/* harmony export */ });
/* harmony import */ var _lib_facade_billing_facade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/facade/billing.facade */ 96414);
/* harmony import */ var _lib_entities_models_invoice_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/entities/models/invoice.model */ 94369);
/* harmony import */ var _lib_state_billing_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/+state/billing.store */ 61289);




/***/ }),

/***/ 61289:
/*!**********************************************************************************!*\
  !*** ./libs/foundation/demo/billing/data-access/src/lib/+state/billing.store.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BillingStore: () => (/* binding */ BillingStore),
/* harmony export */   initialState: () => (/* binding */ initialState)
/* harmony export */ });
/* harmony import */ var _Users_lotte_Documents_Telenet_customer_web_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _ngrx_signals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/signals */ 10503);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _infrastructure_invoice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../infrastructure/invoice.service */ 26126);




const initialState = {
  billingEntries: []
};
const BillingStore = (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_3__.signalStore)({
  providedIn: 'root'
}, (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_3__.withState)(initialState), (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_3__.withMethods)((store, billingService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_infrastructure_invoice_service__WEBPACK_IMPORTED_MODULE_2__.InvoiceService)) => ({
  getInvoices() {
    return (0,_Users_lotte_Documents_Telenet_customer_web_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const billingEntries = yield billingService.getBillingEntries();
      (0,_ngrx_signals__WEBPACK_IMPORTED_MODULE_3__.patchState)(store, state => ({
        ...state,
        billingEntries
      }));
    })();
  },
  payInvoice(invoice) {
    console.log(`PAYED invoice ${invoice.id}`);
  }
})));

/***/ }),

/***/ 94369:
/*!*******************************************************************************************!*\
  !*** ./libs/foundation/demo/billing/data-access/src/lib/entities/models/invoice.model.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InvoiceStatus: () => (/* binding */ InvoiceStatus)
/* harmony export */ });
var InvoiceStatus;
(function (InvoiceStatus) {
  InvoiceStatus["OPEN"] = "open";
  InvoiceStatus["OVERDUE"] = "overdue";
  InvoiceStatus["PAID"] = "paid";
})(InvoiceStatus || (InvoiceStatus = {}));

/***/ }),

/***/ 96414:
/*!***********************************************************************************!*\
  !*** ./libs/foundation/demo/billing/data-access/src/lib/facade/billing.facade.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BillingFacade: () => (/* binding */ BillingFacade)
/* harmony export */ });
/* harmony import */ var _Users_lotte_Documents_Telenet_customer_web_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _state_billing_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../+state/billing.store */ 61289);




class BillingFacade {
  constructor() {
    this.store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_state_billing_store__WEBPACK_IMPORTED_MODULE_2__.BillingStore);
    this.invoices = this.store.billingEntries;
  }
  loadInvoices() {
    var _this = this;
    return (0,_Users_lotte_Documents_Telenet_customer_web_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.store.getInvoices();
    })();
  }
  payInvoice(invoice) {
    this.store.payInvoice(invoice);
  }
  static #_ = this.ɵfac = function BillingFacade_Factory(t) {
    return new (t || BillingFacade)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: BillingFacade,
    factory: BillingFacade.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 26126:
/*!********************************************************************************************!*\
  !*** ./libs/foundation/demo/billing/data-access/src/lib/infrastructure/invoice.service.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InvoiceService: () => (/* binding */ InvoiceService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _entities_models_invoice_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entities/models/invoice.model */ 94369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);



class InvoiceService {
  getBillingEntries() {
    const companyName = 'Stad Oostende';
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.firstValueFrom)((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)([{
      status: _entities_models_invoice_model__WEBPACK_IMPORTED_MODULE_1__.InvoiceStatus.OPEN,
      amount: 968.52,
      id: 'Mar23 - 25695',
      companyName,
      expirationDate: new Date('03/30/2023'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius condimentum nibh. Integer nulla diam, mattis eu semper in, ultricies.',
      invoiceDate: new Date('03/01/2023'),
      openFileLink: 'invoice.openFileLink1'
    }, {
      status: _entities_models_invoice_model__WEBPACK_IMPORTED_MODULE_1__.InvoiceStatus.PAID,
      amount: 132.23,
      id: 'Feb23 - 25694',
      companyName,
      expirationDate: new Date('02/28/2023'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius condimentum nibh. Integer nulla diam, mattis eu semper in, ultricies.',
      invoiceDate: new Date('02/01/2023'),
      openFileLink: 'invoice.openFileLink2'
    }, {
      status: _entities_models_invoice_model__WEBPACK_IMPORTED_MODULE_1__.InvoiceStatus.OVERDUE,
      amount: 2.5,
      id: 'Jan23 - 25693',
      companyName,
      expirationDate: new Date('01/30/2023'),
      description: 'Too late',
      invoiceDate: new Date('01/01/2023'),
      openFileLink: 'invoice.openFileLink3'
    }]));
  }
  static #_ = this.ɵfac = function InvoiceService_Factory(t) {
    return new (t || InvoiceService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: InvoiceService,
    factory: InvoiceService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 10503:
/*!**************************************************************!*\
  !*** ./node_modules/@ngrx/signals/fesm2022/ngrx-signals.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getState: () => (/* binding */ getState),
/* harmony export */   patchState: () => (/* binding */ patchState),
/* harmony export */   signalState: () => (/* binding */ signalState),
/* harmony export */   signalStore: () => (/* binding */ signalStore),
/* harmony export */   signalStoreFeature: () => (/* binding */ signalStoreFeature),
/* harmony export */   type: () => (/* binding */ type),
/* harmony export */   withComputed: () => (/* binding */ withComputed),
/* harmony export */   withHooks: () => (/* binding */ withHooks),
/* harmony export */   withMethods: () => (/* binding */ withMethods),
/* harmony export */   withState: () => (/* binding */ withState)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);


const STATE_SIGNAL = Symbol('STATE_SIGNAL');
function getState(stateSignal) {
  return stateSignal[STATE_SIGNAL]();
}
function patchState(stateSignal, ...updaters) {
  stateSignal[STATE_SIGNAL].update(currentState => updaters.reduce((nextState, updater) => ({
    ...nextState,
    ...(typeof updater === 'function' ? updater(nextState) : updater)
  }), currentState));
}
function toDeepSignal(signal) {
  const value = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.untracked)(() => signal());
  if (!isRecord(value)) {
    return signal;
  }
  return new Proxy(signal, {
    get(target, prop) {
      if (!(prop in value)) {
        return target[prop];
      }
      if (!(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.isSignal)(target[prop])) {
        Object.defineProperty(target, prop, {
          value: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => target()[prop]),
          configurable: true
        });
      }
      return toDeepSignal(target[prop]);
    }
  });
}
function isRecord(value) {
  return value?.constructor === Object;
}
function signalState(initialState) {
  const stateSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(initialState);
  const deepSignal = toDeepSignal(stateSignal.asReadonly());
  Object.defineProperty(deepSignal, STATE_SIGNAL, {
    value: stateSignal
  });
  return deepSignal;
}
function signalStore(...args) {
  const signalStoreArgs = [...args];
  const config = 'providedIn' in signalStoreArgs[0] ? signalStoreArgs.shift() : {};
  const features = signalStoreArgs;
  class SignalStore {
    constructor() {
      const innerStore = features.reduce((store, feature) => feature(store), getInitialInnerStore());
      const {
        slices,
        signals,
        methods,
        hooks
      } = innerStore;
      const props = {
        ...slices,
        ...signals,
        ...methods
      };
      this[STATE_SIGNAL] = innerStore[STATE_SIGNAL];
      for (const key in props) {
        this[key] = props[key];
      }
      const {
        onInit,
        onDestroy
      } = hooks;
      if (onInit) {
        onInit();
      }
      if (onDestroy) {
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DestroyRef).onDestroy(onDestroy);
      }
    }
    /** @nocollapse */
    static ɵfac = function SignalStore_Factory(t) {
      return new (t || SignalStore)();
    };
    /** @nocollapse */
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SignalStore,
      factory: SignalStore.ɵfac,
      providedIn: config.providedIn || null
    });
  }
  (() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignalStore, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
      args: [{
        providedIn: config.providedIn || null
      }]
    }], () => [], null);
  })();
  return SignalStore;
}
function getInitialInnerStore() {
  return {
    [STATE_SIGNAL]: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)({}),
    slices: {},
    signals: {},
    methods: {},
    hooks: {}
  };
}
function signalStoreFeature(featureOrInput, ...restFeatures) {
  const features = typeof featureOrInput === 'function' ? [featureOrInput, ...restFeatures] : restFeatures;
  return inputStore => features.reduce((store, feature) => feature(store), inputStore);
}
function type() {
  return undefined;
}
function excludeKeys(obj, keys) {
  return Object.keys(obj).reduce((acc, key) => keys.includes(key) ? acc : {
    ...acc,
    [key]: obj[key]
  }, {});
}
function withComputed(signalsFactory) {
  return store => {
    const signals = signalsFactory({
      ...store.slices,
      ...store.signals
    });
    const signalsKeys = Object.keys(signals);
    const slices = excludeKeys(store.slices, signalsKeys);
    const methods = excludeKeys(store.methods, signalsKeys);
    return {
      ...store,
      slices,
      signals: {
        ...store.signals,
        ...signals
      },
      methods
    };
  };
}
function withHooks(hooksOrFactory) {
  return store => {
    const storeProps = {
      [STATE_SIGNAL]: store[STATE_SIGNAL],
      ...store.slices,
      ...store.signals,
      ...store.methods
    };
    const hooks = typeof hooksOrFactory === 'function' ? hooksOrFactory(storeProps) : hooksOrFactory;
    const createHook = name => {
      const hook = hooks[name];
      const currentHook = store.hooks[name];
      return hook ? () => {
        if (currentHook) {
          currentHook();
        }
        hook(storeProps);
      } : currentHook;
    };
    return {
      ...store,
      hooks: {
        onInit: createHook('onInit'),
        onDestroy: createHook('onDestroy')
      }
    };
  };
}
function withMethods(methodsFactory) {
  return store => {
    const methods = methodsFactory({
      [STATE_SIGNAL]: store[STATE_SIGNAL],
      ...store.slices,
      ...store.signals,
      ...store.methods
    });
    const methodsKeys = Object.keys(methods);
    const slices = excludeKeys(store.slices, methodsKeys);
    const signals = excludeKeys(store.signals, methodsKeys);
    return {
      ...store,
      slices,
      signals,
      methods: {
        ...store.methods,
        ...methods
      }
    };
  };
}
function withState(stateOrFactory) {
  return store => {
    const state = typeof stateOrFactory === 'function' ? stateOrFactory() : stateOrFactory;
    const stateKeys = Object.keys(state);
    store[STATE_SIGNAL].update(currentState => ({
      ...currentState,
      ...state
    }));
    const slices = stateKeys.reduce((acc, key) => {
      const slice = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => store[STATE_SIGNAL]()[key]);
      return {
        ...acc,
        [key]: toDeepSignal(slice)
      };
    }, {});
    const signals = excludeKeys(store.signals, stateKeys);
    const methods = excludeKeys(store.methods, stateKeys);
    return {
      ...store,
      slices: {
        ...store.slices,
        ...slices
      },
      signals,
      methods
    };
  };
}

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}])
//# sourceMappingURL=libs_foundation_demo_billing_data-access_src_index_ts-_604d1.js.map