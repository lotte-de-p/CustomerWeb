(self["webpackChunksales_mfe"] = self["webpackChunksales_mfe"] || []).push([["libs_sales_address-form-field_data-access_src_index_ts-_f97d1"],{

/***/ 39869:
/*!****************************************************************!*\
  !*** ./libs/sales/address-form-field/data-access/src/index.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressFormFieldFacade: () => (/* reexport safe */ _lib_facades_address_form_field_facade__WEBPACK_IMPORTED_MODULE_4__.AddressFormFieldFacade),
/* harmony export */   boxPattern: () => (/* reexport safe */ _lib_constants_address_constants__WEBPACK_IMPORTED_MODULE_5__.boxPattern),
/* harmony export */   fieldConstant: () => (/* reexport safe */ _lib_constants_address_constants__WEBPACK_IMPORTED_MODULE_5__.fieldConstant),
/* harmony export */   fieldDependencies: () => (/* reexport safe */ _lib_constants_address_constants__WEBPACK_IMPORTED_MODULE_5__.fieldDependencies),
/* harmony export */   geographicalAddressFieldDependencies: () => (/* reexport safe */ _lib_constants_address_constants__WEBPACK_IMPORTED_MODULE_5__.geographicalAddressFieldDependencies),
/* harmony export */   initialAddressFactory: () => (/* reexport safe */ _lib_interfaces_initial_address_interface_testfactory__WEBPACK_IMPORTED_MODULE_3__.initialAddressFactory)
/* harmony export */ });
/* harmony import */ var _lib_interfaces_field_dependency_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/interfaces/field-dependency.interface */ 68961);
/* harmony import */ var _lib_interfaces_address_field_value_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/interfaces/address-field-value.interface */ 98813);
/* harmony import */ var _lib_interfaces_initial_address_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/interfaces/initial-address.interface */ 94794);
/* harmony import */ var _lib_interfaces_initial_address_interface_testfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/interfaces/initial-address.interface.testfactory */ 34686);
/* harmony import */ var _lib_facades_address_form_field_facade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/facades/address-form-field.facade */ 58638);
/* harmony import */ var _lib_constants_address_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/constants/address.constants */ 75304);







/***/ }),

/***/ 75304:
/*!******************************************************************************************!*\
  !*** ./libs/sales/address-form-field/data-access/src/lib/constants/address.constants.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   boxPattern: () => (/* binding */ boxPattern),
/* harmony export */   fieldConstant: () => (/* binding */ fieldConstant),
/* harmony export */   fieldDependencies: () => (/* binding */ fieldDependencies),
/* harmony export */   geographicalAddressFieldDependencies: () => (/* binding */ geographicalAddressFieldDependencies)
/* harmony export */ });
const fieldConstant = {
  COUNTRY: 'country',
  MUNICIPALITY: 'municipality',
  STREET: 'street',
  GEOGRAPHICAL_ADDRESS: 'geographical_address',
  HOUSE_NUMBER: 'housenumber',
  SUB_HOUSE_NUMBER: 'subhousenumber',
  BOX: 'box'
};
const fieldDependencies = [{
  weight: 1,
  key: fieldConstant.MUNICIPALITY,
  enableAndReset: [fieldConstant.STREET],
  disableAndReset: [],
  clear: [fieldConstant.STREET, fieldConstant.GEOGRAPHICAL_ADDRESS]
}, {
  weight: 1,
  key: fieldConstant.STREET,
  enableAndReset: [fieldConstant.GEOGRAPHICAL_ADDRESS],
  disableAndReset: [],
  clear: [fieldConstant.GEOGRAPHICAL_ADDRESS]
}];
const geographicalAddressFieldDependencies = [{
  weight: 1,
  key: fieldConstant.STREET,
  enableAndReset: [fieldConstant.HOUSE_NUMBER],
  disableAndReset: [fieldConstant.SUB_HOUSE_NUMBER, fieldConstant.BOX]
}, {
  weight: 1,
  key: fieldConstant.HOUSE_NUMBER,
  enableAndReset: [fieldConstant.SUB_HOUSE_NUMBER, fieldConstant.BOX],
  disableAndReset: []
}, {
  weight: 2,
  key: fieldConstant.SUB_HOUSE_NUMBER,
  enableAndReset: [],
  disableAndReset: []
}, {
  weight: 3,
  key: fieldConstant.BOX,
  enableAndReset: [],
  disableAndReset: []
}];
const boxPattern = /^[A-Za-z0-9]+(?:\/[A-Za-z0-9]{1,4}){0,6}$/;

/***/ }),

/***/ 58638:
/*!************************************************************************************************!*\
  !*** ./libs/sales/address-form-field/data-access/src/lib/facades/address-form-field.facade.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressFormFieldFacade: () => (/* binding */ AddressFormFieldFacade)
/* harmony export */ });
/* harmony import */ var _sales_shared_address_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sales/shared/address/data-access */ 66174);
/* harmony import */ var _sales_shared_address_data_access__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sales_shared_address_data_access__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);



class AddressFormFieldFacade {
  constructor(addressFacade) {
    this.addressFacade = addressFacade;
  }
  getMunicipalities() {
    return this.addressFacade.getMunicipalities();
  }
  getStreets(query, postalCodeQuery) {
    return this.addressFacade.getStreets(query, postalCodeQuery);
  }
  getGeographicalAddresses(query, streetAddressUnitId) {
    return this.addressFacade.getGeographicalAddresses(query, streetAddressUnitId);
  }
  static #_ = this.ɵfac = function AddressFormFieldFacade_Factory(t) {
    return new (t || AddressFormFieldFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_sales_shared_address_data_access__WEBPACK_IMPORTED_MODULE_0__.AddressFacade));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AddressFormFieldFacade,
    factory: AddressFormFieldFacade.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 98813:
/*!*******************************************************************************************************!*\
  !*** ./libs/sales/address-form-field/data-access/src/lib/interfaces/address-field-value.interface.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 68961:
/*!****************************************************************************************************!*\
  !*** ./libs/sales/address-form-field/data-access/src/lib/interfaces/field-dependency.interface.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 34686:
/*!***************************************************************************************************************!*\
  !*** ./libs/sales/address-form-field/data-access/src/lib/interfaces/initial-address.interface.testfactory.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialAddressFactory: () => (/* binding */ initialAddressFactory)
/* harmony export */ });
/* harmony import */ var factory_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! factory.ts */ 46032);
/* harmony import */ var _sales_shared_address_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sales/shared/address/data-access */ 66174);
/* harmony import */ var _sales_shared_address_data_access__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sales_shared_address_data_access__WEBPACK_IMPORTED_MODULE_1__);


const initialAddressFactory = (0,factory_ts__WEBPACK_IMPORTED_MODULE_0__.makeFactory)({
  addressUnit: _sales_shared_address_data_access__WEBPACK_IMPORTED_MODULE_1__.addressUnitTestfactory.build(),
  country: 'België',
  countryCode: 'BE',
  subHouseNumber: '102',
  houseNumber: '50',
  municipality: 'Mechelen',
  postalCode: '2800',
  street: 'Begijnenstraat'
});

/***/ }),

/***/ 94794:
/*!***************************************************************************************************!*\
  !*** ./libs/sales/address-form-field/data-access/src/lib/interfaces/initial-address.interface.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 99199:
/*!******************************************!*\
  !*** ./node_modules/clone-deep/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/**
 * Module dependenices
 */
const clone = __webpack_require__(/*! shallow-clone */ 92751);
const typeOf = __webpack_require__(/*! kind-of */ 46030);
const isPlainObject = __webpack_require__(/*! is-plain-object */ 87680);
function cloneDeep(val, instanceClone) {
  switch (typeOf(val)) {
    case 'object':
      return cloneObjectDeep(val, instanceClone);
    case 'array':
      return cloneArrayDeep(val, instanceClone);
    default:
      {
        return clone(val);
      }
  }
}
function cloneObjectDeep(val, instanceClone) {
  if (typeof instanceClone === 'function') {
    return instanceClone(val);
  }
  if (instanceClone || isPlainObject(val)) {
    const res = new val.constructor();
    for (let key in val) {
      res[key] = cloneDeep(val[key], instanceClone);
    }
    return res;
  }
  return val;
}
function cloneArrayDeep(val, instanceClone) {
  const res = new val.constructor(val.length);
  for (let i = 0; i < val.length; i++) {
    res[i] = cloneDeep(val[i], instanceClone);
  }
  return res;
}

/**
 * Expose `cloneDeep`
 */

module.exports = cloneDeep;

/***/ }),

/***/ 82015:
/*!**********************************************!*\
  !*** ./node_modules/factory.ts/lib/async.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.makeFactoryFromSync = exports.makeFactoryWithRequired = exports.makeFactory = exports.each = exports.val = exports.TransformFactory = exports.Factory = exports.Derived = exports.Generator = exports.lift = void 0;
const shared_1 = __webpack_require__(/*! ./shared */ 56109);
const Sync = __webpack_require__(/*! ./sync */ 77109);
const cloneDeep = __webpack_require__(/*! clone-deep */ 99199);
function isPromise(t) {
  return !!t && typeof t["then"] === "function";
}
function lift(t) {
  if (isPromise(t)) {
    return t;
  } else {
    return Promise.resolve(t);
  }
}
exports.lift = lift;
class Generator {
  constructor(func) {
    this.func = func;
  }
  build(seq) {
    return lift(this.func(seq));
  }
}
exports.Generator = Generator;
class Derived {
  constructor(func) {
    this.func = func;
  }
  build(owner, seq) {
    return lift(this.func(owner, seq));
  }
}
exports.Derived = Derived;
class Factory {
  constructor(builder, config) {
    this.builder = builder;
    this.config = config;
    this.getStartingSequenceNumber = () => this.config && this.config.startingSequenceNumber || 0;
    this.build = item => __awaiter(this, void 0, void 0, function* () {
      return this.buildInner(null, item);
    });
    this.buildInner = (buildKeys, item) => __awaiter(this, void 0, void 0, function* () {
      const seqNum = this.seqNum;
      this.seqNum++;
      const base = yield buildBase(seqNum, this.builder);
      let v = Object.assign({}, base.value); //, item);
      if (item) {
        v = (0, shared_1.recursivePartialOverride)(v, item);
      }
      const directlySpecifiedKeys = Object.keys(item || {});
      if (!buildKeys) {
        buildKeys = base.derived.map(d => d.key);
      }
      for (const der of base.derived) {
        if (!buildKeys.includes(der.key)) {
          // console.log(`skip unspecified build key ${der.key}`);
          continue;
        }
        if (directlySpecifiedKeys.includes(der.key)) {
          // console.log(`skip explicitly defined build key ${der.key}`);
          continue;
        }
        v[der.key] = yield der.derived.build(v, seqNum);
      }
      return lift(v);
    });
    this.buildList = (count, item) => __awaiter(this, void 0, void 0, function* () {
      const ts = Array(count); // allocate to correct size
      // don't run in parallel, so that seq num works predictably
      for (let i = 0; i < count; i++) {
        ts[i] = yield this.build(item);
      }
      return ts;
    });
    this.seqNum = this.getStartingSequenceNumber();
  }
  resetSequenceNumber(newSequenceNumber) {
    this.seqNum = newSequenceNumber ? newSequenceNumber : this.getStartingSequenceNumber();
  }
  extend(def) {
    const builder = Object.assign({}, this.builder, def);
    return new Factory(builder, this.config);
  }
  combine(other) {
    const builder = Object.assign({}, this.builder, other.builder);
    return new Factory(builder, this.config);
  }
  transform(fn) {
    return new TransformFactory(this, fn);
  }
  withDerivation(kOut, f) {
    const partial = {};
    partial[kOut] = new Derived(f);
    return this.extend(partial);
  }
  withSelfDerivation(kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((v2, seq) => __awaiter(this, void 0, void 0, function* () {
      delete v2[kOut];
      const origValue = (yield this.buildInner([kOut], v2))[kOut];
      v2[kOut] = origValue;
      return f(v2, seq);
    }));
    return this.extend(partial);
  }
  withDerivation1(kInput, kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((t, i) => f(t[kInput[0]], i));
    return this.extend(partial);
  }
  withDerivation2(kInput, kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((t, i) => f(t[kInput[0]], t[kInput[1]], i));
    return this.extend(partial);
  }
  withDerivation3(kInput, kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((t, i) => f(t[kInput[0]], t[kInput[1]], t[kInput[2]], i));
    return this.extend(partial);
  }
  withDerivation4(kInput, kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((t, i) => f(t[kInput[0]], t[kInput[1]], t[kInput[2]], t[kInput[3]], i));
    return this.extend(partial);
  }
  withDerivation5(kInput, kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((t, i) => f(t[kInput[0]], t[kInput[1]], t[kInput[2]], t[kInput[3]], t[kInput[4]], i));
    return this.extend(partial);
  }
}
exports.Factory = Factory;
class TransformFactory {
  constructor(inner, transform) {
    this.inner = inner;
    this.transform = transform;
    this.build = item => __awaiter(this, void 0, void 0, function* () {
      const v = yield this.inner.build(item);
      const u = yield lift(this.transform(v));
      return u;
    });
    this.buildList = (count, item) => __awaiter(this, void 0, void 0, function* () {
      const vs = yield this.inner.buildList(count, item);
      return Promise.all(vs.map(this.transform).map(lift));
    });
  }
}
exports.TransformFactory = TransformFactory;
function val(val) {
  return new Generator(() => val);
}
exports.val = val;
function each(f) {
  return new Generator(f);
}
exports.each = each;
function buildBase(seqNum, builder) {
  return __awaiter(this, void 0, void 0, function* () {
    const resolvedBuilder = yield lift(builder);
    const t = {};
    const keys = Object.getOwnPropertyNames(resolvedBuilder);
    const derived = [];
    for (const key of keys) {
      const v = resolvedBuilder[key];
      let value = v;
      if (!!v && typeof v === "object") {
        if (isPromise(v)) {
          value = yield v;
        } else if (v.constructor === Generator) {
          value = yield v.build(seqNum);
        } else if (v.constructor == Derived) {
          derived.push({
            key,
            derived: v
          });
        } else if (v.constructor === Sync.Generator) {
          value = v.build(seqNum);
        } else if (v.constructor == Sync.Derived) {
          derived.push({
            key,
            derived: new Derived(v.func)
          });
        } else {
          value = cloneDeep(v);
        }
      }
      t[key] = value;
    }
    return {
      value: t,
      derived
    };
  });
}
function makeFactory(builder, config) {
  return new Factory(builder, config);
}
exports.makeFactory = makeFactory;
function makeFactoryWithRequired(builder, config) {
  return new Factory(builder, config);
}
exports.makeFactoryWithRequired = makeFactoryWithRequired;
function makeFactoryFromSync(builder, config) {
  return new Factory(builder, config);
}
exports.makeFactoryFromSync = makeFactoryFromSync;

/***/ }),

/***/ 46032:
/*!**********************************************!*\
  !*** ./node_modules/factory.ts/lib/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.makeFactory = exports.each = exports.val = exports.Factory = exports.Derived = exports.Generator = exports.Pipeline = exports.Sync = exports.Async = void 0;
const Async = __webpack_require__(/*! ./async */ 82015);
exports.Async = Async;
const Sync = __webpack_require__(/*! ./sync */ 77109);
exports.Sync = Sync;
const Pipeline = __webpack_require__(/*! ./pipeline */ 8983);
exports.Pipeline = Pipeline;
// for now, for backwards compat
var sync_1 = __webpack_require__(/*! ./sync */ 77109);
Object.defineProperty(exports, "Generator", ({
  enumerable: true,
  get: function () {
    return sync_1.Generator;
  }
}));
Object.defineProperty(exports, "Derived", ({
  enumerable: true,
  get: function () {
    return sync_1.Derived;
  }
}));
Object.defineProperty(exports, "Factory", ({
  enumerable: true,
  get: function () {
    return sync_1.Factory;
  }
}));
Object.defineProperty(exports, "val", ({
  enumerable: true,
  get: function () {
    return sync_1.val;
  }
}));
Object.defineProperty(exports, "each", ({
  enumerable: true,
  get: function () {
    return sync_1.each;
  }
}));
Object.defineProperty(exports, "makeFactory", ({
  enumerable: true,
  get: function () {
    return sync_1.makeFactory;
  }
}));

/***/ }),

/***/ 8983:
/*!*************************************************!*\
  !*** ./node_modules/factory.ts/lib/pipeline.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Pipeline = void 0;
const Async = __webpack_require__(/*! ./async */ 82015);
class Pipeline {
  constructor(current) {
    this.current = current;
  }
  static start() {
    return new Pipeline(Promise.resolve({}));
  }
  //add<T,U>(factory: Async.IFactory<T,U> | Async.FactoryFunc<T,U>, val: Parti (p:P) => Partial<T>)
  addValues(val) {
    return new Pipeline(this.current.then(c => __awaiter(this, void 0, void 0, function* () {
      const v = typeof val === "function" ? yield Async.lift(val(c)) : val;
      return Object.assign(Object.assign({}, c), v);
    })));
  }
  // NOTE: want to combine all addFactory() methods, but
  // Typescript and or ts-node seems to have problems
  // also want use object { key: partial } instead
  // but can't get the types right
  addFactoryFunc(factory, key, partial) {
    return new Pipeline(this.current.then(c => __awaiter(this, void 0, void 0, function* () {
      const p = typeof partial === "function" ? yield Async.lift(partial(c)) : partial;
      const val = yield factory(p);
      const newV = {};
      newV[key] = val;
      return Object.assign(Object.assign({}, c), newV);
    })));
  }
  addFactory(factory, key, partial) {
    return this.addFactoryFunc(v => factory.build(v), key, partial);
  }
  addTxFactory(factory, key, partial) {
    return this.addFactoryFunc(v => factory.build(v), key, partial);
  }
  then(onfulfilled, onrejected) {
    return this.current.then(onfulfilled, onrejected);
  }
  toFactory() {
    return Async.makeFactory(this.current);
  }
}
exports.Pipeline = Pipeline;

/***/ }),

/***/ 56109:
/*!***********************************************!*\
  !*** ./node_modules/factory.ts/lib/shared.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.uniq = exports.recursivePartialOverride = void 0;
function recursivePartialOverride(x, y) {
  if (y === undefined || y === null) return x;
  const objProto = Object.getPrototypeOf({});
  if (Object.getPrototypeOf(y) != objProto) return y;
  let v = Object.assign({}, x);
  let yKeys = Object.keys(y);
  const allKeys = uniq(Object.keys(v).concat(yKeys));
  for (const key of allKeys) {
    if (yKeys.indexOf(key) >= 0) {
      const itemKeyVal = y[key];
      if (null != itemKeyVal && typeof itemKeyVal === "object") {
        const baseKeyVal = v[key];
        v[key] = recursivePartialOverride(baseKeyVal, itemKeyVal);
      } else {
        v[key] = itemKeyVal;
      }
    }
  }
  return v;
}
exports.recursivePartialOverride = recursivePartialOverride;
function uniq(ts) {
  const out = [];
  for (const v of ts) {
    if (out.indexOf(v) < 0) {
      out.push(v);
    }
  }
  return out;
}
exports.uniq = uniq;

/***/ }),

/***/ 77109:
/*!*********************************************!*\
  !*** ./node_modules/factory.ts/lib/sync.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.makeFactoryWithRequired = exports.makeFactory = exports.each = exports.val = exports.Factory = exports.Derived = exports.Generator = void 0;
const shared_1 = __webpack_require__(/*! ./shared */ 56109);
const cloneDeep = __webpack_require__(/*! clone-deep */ 99199);
class Generator {
  constructor(func) {
    this.func = func;
  }
  build(seq) {
    return this.func(seq);
  }
}
exports.Generator = Generator;
class Derived {
  constructor(func) {
    this.func = func;
  }
  build(owner, seq) {
    const ret = this.func(owner, seq);
    return ret;
  }
}
exports.Derived = Derived;
class Factory {
  expandBuilder() {
    return typeof this.builder === "function" ? this.builder() : this.builder;
  }
  constructor(builder, config) {
    this.builder = builder;
    this.config = config;
    this.getStartingSequenceNumber = () => this.config && this.config.startingSequenceNumber || 0;
    this.build = item => {
      return this.buildInner(null, item);
    };
    this.buildInner = (buildKeys, item) => {
      const seqNum = this.seqNum;
      this.seqNum++;
      const base = buildBase(seqNum, this.expandBuilder());
      let v = Object.assign({}, base.value); //, item);
      if (item) {
        v = (0, shared_1.recursivePartialOverride)(v, item);
      }
      const directlySpecifiedKeys = Object.keys(item || {});
      if (!buildKeys) {
        buildKeys = base.derived.map(d => d.key);
      }
      for (const der of base.derived) {
        if (!buildKeys.includes(der.key)) {
          // console.log(`skip unspecified build key ${der.key}`);
          continue;
        }
        if (directlySpecifiedKeys.includes(der.key)) {
          // console.log(`skip explicitly defined build key ${der.key}`);
          continue;
        }
        v[der.key] = der.derived.build(v, seqNum);
      }
      return v;
    };
    this.buildList = (count, item) => {
      const ts = Array(count); // allocate to correct size
      for (let i = 0; i < count; i++) {
        ts[i] = this.build(item);
      }
      return ts;
    };
    this.seqNum = this.getStartingSequenceNumber();
  }
  resetSequenceNumber(newSequenceNumber) {
    this.seqNum = newSequenceNumber ? newSequenceNumber : this.getStartingSequenceNumber();
  }
  extend(def) {
    const builder = () => Object.assign({}, this.expandBuilder(), def);
    return new Factory(builder, this.config);
  }
  combine(other) {
    const builder = () => Object.assign({}, this.expandBuilder(), other.expandBuilder());
    return new Factory(builder, this.config);
  }
  withSelfDerivation(kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((v2, seq) => {
      delete v2[kOut];
      const origValue = this.buildInner([kOut], v2)[kOut];
      v2[kOut] = origValue;
      return f(v2, seq);
    });
    return this.extend(partial);
  }
  withDerivation(kOut, f) {
    const partial = {};
    partial[kOut] = new Derived(f);
    return this.extend(partial);
  }
  withDerivation1(kInput, kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((t, i) => f(t[kInput[0]], i));
    return this.extend(partial);
  }
  withDerivation2(kInput, kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((t, i) => f(t[kInput[0]], t[kInput[1]], i));
    return this.extend(partial);
  }
  withDerivation3(kInput, kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((t, i) => f(t[kInput[0]], t[kInput[1]], t[kInput[2]], i));
    return this.extend(partial);
  }
  withDerivation4(kInput, kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((t, i) => f(t[kInput[0]], t[kInput[1]], t[kInput[2]], t[kInput[3]], i));
    return this.extend(partial);
  }
  withDerivation5(kInput, kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((t, i) => f(t[kInput[0]], t[kInput[1]], t[kInput[2]], t[kInput[3]], t[kInput[4]], i));
    return this.extend(partial);
  }
}
exports.Factory = Factory;
function val(val) {
  return new Generator(() => val);
}
exports.val = val;
function each(f) {
  return new Generator(f);
}
exports.each = each;
function buildBase(seqNum, builder) {
  const t = {};
  const keys = Object.getOwnPropertyNames(builder);
  const derived = [];
  for (const key of keys) {
    const v = builder[key];
    let value = v;
    if (!!v && typeof v === "object") {
      if (v.constructor === Generator) {
        value = v.build(seqNum);
      } else if (v.constructor == Derived) {
        derived.push({
          key,
          derived: v
        });
      } else {
        value = cloneDeep(v);
      }
    }
    t[key] = value;
  }
  return {
    value: t,
    derived
  };
}
function makeFactory(builder, config) {
  return new Factory(builder, config);
}
exports.makeFactory = makeFactory;
function makeFactoryWithRequired(builder, config) {
  return new Factory(builder, config);
}
exports.makeFactoryWithRequired = makeFactoryWithRequired;

/***/ }),

/***/ 87680:
/*!***********************************************!*\
  !*** ./node_modules/is-plain-object/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var isObject = __webpack_require__(/*! isobject */ 6859);
function isObjectObject(o) {
  return isObject(o) === true && Object.prototype.toString.call(o) === '[object Object]';
}
module.exports = function isPlainObject(o) {
  var ctor, prot;
  if (isObjectObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (typeof ctor !== 'function') return false;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
};

/***/ }),

/***/ 6859:
/*!****************************************!*\
  !*** ./node_modules/isobject/index.js ***!
  \****************************************/
/***/ ((module) => {

/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};

/***/ }),

/***/ 46030:
/*!***************************************!*\
  !*** ./node_modules/kind-of/index.js ***!
  \***************************************/
/***/ ((module) => {

var toString = Object.prototype.toString;
module.exports = function kindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';
  var type = typeof val;
  if (type === 'boolean') return 'boolean';
  if (type === 'string') return 'string';
  if (type === 'number') return 'number';
  if (type === 'symbol') return 'symbol';
  if (type === 'function') {
    return isGeneratorFn(val) ? 'generatorfunction' : 'function';
  }
  if (isArray(val)) return 'array';
  if (isBuffer(val)) return 'buffer';
  if (isArguments(val)) return 'arguments';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  if (isRegexp(val)) return 'regexp';
  switch (ctorName(val)) {
    case 'Symbol':
      return 'symbol';
    case 'Promise':
      return 'promise';

    // Set, Map, WeakSet, WeakMap
    case 'WeakMap':
      return 'weakmap';
    case 'WeakSet':
      return 'weakset';
    case 'Map':
      return 'map';
    case 'Set':
      return 'set';

    // 8-bit typed arrays
    case 'Int8Array':
      return 'int8array';
    case 'Uint8Array':
      return 'uint8array';
    case 'Uint8ClampedArray':
      return 'uint8clampedarray';

    // 16-bit typed arrays
    case 'Int16Array':
      return 'int16array';
    case 'Uint16Array':
      return 'uint16array';

    // 32-bit typed arrays
    case 'Int32Array':
      return 'int32array';
    case 'Uint32Array':
      return 'uint32array';
    case 'Float32Array':
      return 'float32array';
    case 'Float64Array':
      return 'float64array';
  }
  if (isGeneratorObj(val)) {
    return 'generator';
  }

  // Non-plain objects
  type = toString.call(val);
  switch (type) {
    case '[object Object]':
      return 'object';
    // iterators
    case '[object Map Iterator]':
      return 'mapiterator';
    case '[object Set Iterator]':
      return 'setiterator';
    case '[object String Iterator]':
      return 'stringiterator';
    case '[object Array Iterator]':
      return 'arrayiterator';
  }

  // other
  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
};
function ctorName(val) {
  return typeof val.constructor === 'function' ? val.constructor.name : null;
}
function isArray(val) {
  if (Array.isArray) return Array.isArray(val);
  return val instanceof Array;
}
function isError(val) {
  return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
}
function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
}
function isRegexp(val) {
  if (val instanceof RegExp) return true;
  return typeof val.flags === 'string' && typeof val.ignoreCase === 'boolean' && typeof val.multiline === 'boolean' && typeof val.global === 'boolean';
}
function isGeneratorFn(name, val) {
  return ctorName(name) === 'GeneratorFunction';
}
function isGeneratorObj(val) {
  return typeof val.throw === 'function' && typeof val.return === 'function' && typeof val.next === 'function';
}
function isArguments(val) {
  try {
    if (typeof val.length === 'number' && typeof val.callee === 'function') {
      return true;
    }
  } catch (err) {
    if (err.message.indexOf('callee') !== -1) {
      return true;
    }
  }
  return false;
}

/**
 * If you need to support Safari 5-7 (8-10 yr-old browser),
 * take a look at https://github.com/feross/is-buffer
 */

function isBuffer(val) {
  if (val.constructor && typeof val.constructor.isBuffer === 'function') {
    return val.constructor.isBuffer(val);
  }
  return false;
}

/***/ }),

/***/ 92751:
/*!*********************************************!*\
  !*** ./node_modules/shallow-clone/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*!
 * shallow-clone <https://github.com/jonschlinkert/shallow-clone>
 *
 * Copyright (c) 2015-present, Jon Schlinkert.
 * Released under the MIT License.
 */



const valueOf = Symbol.prototype.valueOf;
const typeOf = __webpack_require__(/*! kind-of */ 46030);
function clone(val, deep) {
  switch (typeOf(val)) {
    case 'array':
      return val.slice();
    case 'object':
      return Object.assign({}, val);
    case 'date':
      return new val.constructor(Number(val));
    case 'map':
      return new Map(val);
    case 'set':
      return new Set(val);
    case 'buffer':
      return cloneBuffer(val);
    case 'symbol':
      return cloneSymbol(val);
    case 'arraybuffer':
      return cloneArrayBuffer(val);
    case 'float32array':
    case 'float64array':
    case 'int16array':
    case 'int32array':
    case 'int8array':
    case 'uint16array':
    case 'uint32array':
    case 'uint8clampedarray':
    case 'uint8array':
      return cloneTypedArray(val);
    case 'regexp':
      return cloneRegExp(val);
    case 'error':
      return Object.create(val);
    default:
      {
        return val;
      }
  }
}
function cloneRegExp(val) {
  const flags = val.flags !== void 0 ? val.flags : /\w+$/.exec(val) || void 0;
  const re = new val.constructor(val.source, flags);
  re.lastIndex = val.lastIndex;
  return re;
}
function cloneArrayBuffer(val) {
  const res = new val.constructor(val.byteLength);
  new Uint8Array(res).set(new Uint8Array(val));
  return res;
}
function cloneTypedArray(val, deep) {
  return new val.constructor(val.buffer, val.byteOffset, val.length);
}
function cloneBuffer(val) {
  const len = val.length;
  const buf = Buffer.allocUnsafe ? Buffer.allocUnsafe(len) : Buffer.from(len);
  val.copy(buf);
  return buf;
}
function cloneSymbol(val) {
  return valueOf ? Object(valueOf.call(val)) : {};
}

/**
 * Expose `clone`
 */

module.exports = clone;

/***/ })

}])
//# sourceMappingURL=libs_sales_address-form-field_data-access_src_index_ts-_f97d1.js.map