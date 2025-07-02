(self["webpackChunkmarketing_mfe"] = self["webpackChunkmarketing_mfe"] || []).push([["libs_shared_personalisation_src_index_ts-_85cd0"],{

/***/ 6256:
/*!*****************************************************************!*\
  !*** ./libs/shared/personalisation/src/customer-input/index.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerInputStore: () => (/* reexport safe */ _models_customer_input_store_model__WEBPACK_IMPORTED_MODULE_0__.CustomerInputStore),
/* harmony export */   CustomerInputStoreService: () => (/* reexport safe */ _services_customer_input_store_service__WEBPACK_IMPORTED_MODULE_1__.CustomerInputStoreService)
/* harmony export */ });
/* harmony import */ var _models_customer_input_store_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/customer-input-store.model */ 99150);
/* harmony import */ var _services_customer_input_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/customer-input.store.service */ 89458);



/***/ }),

/***/ 99150:
/*!*********************************************************************************************!*\
  !*** ./libs/shared/personalisation/src/customer-input/models/customer-input-store.model.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerInputStore: () => (/* binding */ CustomerInputStore)
/* harmony export */ });
class CustomerInputStore {
  isSuccess;
  constructor(customerInputStore) {
    this.isSuccess = true;
    if (customerInputStore) {
      Object.assign(this, customerInputStore);
    }
  }
  enrich(objStore) {
    return new CustomerInputStore(objStore);
  }
}

/***/ }),

/***/ 89458:
/*!*************************************************************************************************!*\
  !*** ./libs/shared/personalisation/src/customer-input/services/customer-input.store.service.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerInputStoreService: () => (/* binding */ CustomerInputStoreService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @telenet/ng-lib-datalayer */ 42782);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @telenet/ng-lib-shared */ 77157);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models_customer_input_store_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/customer-input-store.model */ 99150);







class CustomerInputStoreService extends _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__.ContextHubGenericStoreService {
  dataLayerService;
  constructor(_ngZone, window, dataLayerService) {
    super(_ngZone, window, dataLayerService, (0,_telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_3__.Builder)().storeModel(new _models_customer_input_store_model__WEBPACK_IMPORTED_MODULE_4__.CustomerInputStore()).storeName('customerinput').serviceName('CustomerInputStoreService').build());
    this.dataLayerService = dataLayerService;
  }
  enrichStoreData(fieldName, fieldData) {
    const customerInputStoreData = this.#getStoreData();
    if (customerInputStoreData) {
      customerInputStoreData[fieldName] = fieldData;
      this.#updateStoreData(customerInputStoreData);
    } else {
      console.error('Store data not found');
    }
  }
  #updateStoreData(storeData) {
    const store = new _models_customer_input_store_model__WEBPACK_IMPORTED_MODULE_4__.CustomerInputStore();
    Object.assign(store, storeData);
    this.updateStoreData(store);
  }
  #getStoreData() {
    const contextHub = this.window[_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__.ContexthubConstants.CONTEXTHUB];
    return contextHub?.getStore(this.storeConfig.storeName)?.getData();
  }
  static ɵfac = function CustomerInputStoreService_Factory(t) {
    return new (t || CustomerInputStoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"]('Window'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1__.DataLayerService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: CustomerInputStoreService,
    factory: CustomerInputStoreService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 12123:
/*!**************************************************!*\
  !*** ./libs/shared/personalisation/src/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerInputStore: () => (/* reexport safe */ _customer_input__WEBPACK_IMPORTED_MODULE_3__.CustomerInputStore),
/* harmony export */   CustomerInputStoreService: () => (/* reexport safe */ _customer_input__WEBPACK_IMPORTED_MODULE_3__.CustomerInputStoreService),
/* harmony export */   MessageBusService: () => (/* reexport safe */ _sales__WEBPACK_IMPORTED_MODULE_2__.MessageBusService),
/* harmony export */   NBA: () => (/* reexport safe */ _pega_nba__WEBPACK_IMPORTED_MODULE_0__.NBA),
/* harmony export */   NBAConstants: () => (/* reexport safe */ _pega_nba__WEBPACK_IMPORTED_MODULE_0__.NBAConstants),
/* harmony export */   NBAList: () => (/* reexport safe */ _pega_nba__WEBPACK_IMPORTED_MODULE_0__.NBAList),
/* harmony export */   NBAListMapper: () => (/* reexport safe */ _pega_nba__WEBPACK_IMPORTED_MODULE_0__.NBAListMapper),
/* harmony export */   NBARequestParameters: () => (/* reexport safe */ _pega_nba__WEBPACK_IMPORTED_MODULE_0__.NBARequestParameters),
/* harmony export */   Param: () => (/* reexport safe */ _pega_nba__WEBPACK_IMPORTED_MODULE_0__.Param),
/* harmony export */   PegaService: () => (/* reexport safe */ _pega_nba__WEBPACK_IMPORTED_MODULE_0__.PegaService),
/* harmony export */   PegaStoreService: () => (/* reexport safe */ _pega_services_pega_store_service__WEBPACK_IMPORTED_MODULE_1__.PegaStoreService),
/* harmony export */   RequestParam: () => (/* reexport safe */ _pega_nba__WEBPACK_IMPORTED_MODULE_0__.RequestParam),
/* harmony export */   SalesData: () => (/* reexport safe */ _sales__WEBPACK_IMPORTED_MODULE_2__.SalesData),
/* harmony export */   SalesDataMapper: () => (/* reexport safe */ _sales__WEBPACK_IMPORTED_MODULE_2__.SalesDataMapper),
/* harmony export */   SalesDataOffer: () => (/* reexport safe */ _sales__WEBPACK_IMPORTED_MODULE_2__.SalesDataOffer),
/* harmony export */   SalesDataOptinType: () => (/* reexport safe */ _sales__WEBPACK_IMPORTED_MODULE_2__.SalesDataOptinType),
/* harmony export */   SalesDataOptionType: () => (/* reexport safe */ _sales__WEBPACK_IMPORTED_MODULE_2__.SalesDataOptionType),
/* harmony export */   SalesDataProductType: () => (/* reexport safe */ _sales__WEBPACK_IMPORTED_MODULE_2__.SalesDataProductType),
/* harmony export */   SalesDataService: () => (/* reexport safe */ _sales__WEBPACK_IMPORTED_MODULE_2__.SalesDataService),
/* harmony export */   SalesDataType: () => (/* reexport safe */ _sales__WEBPACK_IMPORTED_MODULE_2__.SalesDataType),
/* harmony export */   SellingArgument: () => (/* reexport safe */ _pega_nba__WEBPACK_IMPORTED_MODULE_0__.SellingArgument),
/* harmony export */   productTestFactory: () => (/* reexport safe */ _pega_nba__WEBPACK_IMPORTED_MODULE_0__.productTestFactory)
/* harmony export */ });
/* harmony import */ var _pega_nba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pega/nba */ 61990);
/* harmony import */ var _pega_services_pega_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pega/services/pega-store.service */ 10040);
/* harmony import */ var _sales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sales */ 97944);
/* harmony import */ var _customer_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-input */ 6256);





/***/ }),

/***/ 2181:
/*!****************************************************************************!*\
  !*** ./libs/shared/personalisation/src/pega/nba/constants/nba.constant.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NBAConstants: () => (/* binding */ NBAConstants)
/* harmony export */ });
class NBAConstants {
  static API_VERSION_V1 = '/v1';
  static CONTEXT = '/nba-service';
  static PEGA_NBA_ENDPOINT = '/next-best-actions';
  static SERVICE_PREFIX = '/public/api';
  static CHANNEL = 'Web';
}

/***/ }),

/***/ 61990:
/*!***********************************************************!*\
  !*** ./libs/shared/personalisation/src/pega/nba/index.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NBA: () => (/* reexport safe */ _v1_models_nba_model__WEBPACK_IMPORTED_MODULE_2__.NBA),
/* harmony export */   NBAConstants: () => (/* reexport safe */ _constants_nba_constant__WEBPACK_IMPORTED_MODULE_8__.NBAConstants),
/* harmony export */   NBAList: () => (/* reexport safe */ _v1_models_nba_list_model__WEBPACK_IMPORTED_MODULE_1__.NBAList),
/* harmony export */   NBAListMapper: () => (/* reexport safe */ _v1_mappers_nba_list_mapper__WEBPACK_IMPORTED_MODULE_0__.NBAListMapper),
/* harmony export */   NBARequestParameters: () => (/* reexport safe */ _v1_models_nba_request_parameters__WEBPACK_IMPORTED_MODULE_3__.NBARequestParameters),
/* harmony export */   Param: () => (/* reexport safe */ _v1_interfaces_request_param__WEBPACK_IMPORTED_MODULE_5__.Param),
/* harmony export */   PegaService: () => (/* reexport safe */ _v1_services_pega_service__WEBPACK_IMPORTED_MODULE_7__.PegaService),
/* harmony export */   RequestParam: () => (/* reexport safe */ _v1_interfaces_request_param__WEBPACK_IMPORTED_MODULE_5__.RequestParam),
/* harmony export */   SellingArgument: () => (/* reexport safe */ _v1_models_selling_argument_model__WEBPACK_IMPORTED_MODULE_4__.SellingArgument),
/* harmony export */   productTestFactory: () => (/* reexport safe */ _v1_models_product_interface_testfactory__WEBPACK_IMPORTED_MODULE_9__.productTestFactory)
/* harmony export */ });
/* harmony import */ var _v1_mappers_nba_list_mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v1/mappers/nba-list.mapper */ 82429);
/* harmony import */ var _v1_models_nba_list_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v1/models/nba-list.model */ 25970);
/* harmony import */ var _v1_models_nba_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./v1/models/nba.model */ 27056);
/* harmony import */ var _v1_models_nba_request_parameters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./v1/models/nba-request-parameters */ 15920);
/* harmony import */ var _v1_models_selling_argument_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./v1/models/selling-argument.model */ 24307);
/* harmony import */ var _v1_interfaces_request_param__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./v1/interfaces/request-param */ 12285);
/* harmony import */ var _v1_interfaces_raw_nba_list_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./v1/interfaces/raw-nba-list.interface */ 19182);
/* harmony import */ var _v1_services_pega_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./v1/services/pega.service */ 13993);
/* harmony import */ var _constants_nba_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants/nba.constant */ 2181);
/* harmony import */ var _v1_models_product_interface_testfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./v1/models/product.interface.testfactory */ 98100);











/***/ }),

/***/ 19182:
/*!******************************************************************************************!*\
  !*** ./libs/shared/personalisation/src/pega/nba/v1/interfaces/raw-nba-list.interface.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 12285:
/*!*********************************************************************************!*\
  !*** ./libs/shared/personalisation/src/pega/nba/v1/interfaces/request-param.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Param: () => (/* binding */ Param),
/* harmony export */   RequestParam: () => (/* binding */ RequestParam)
/* harmony export */ });
class RequestParam {
  key;
  value;
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.key = key;
    this.value = value;
  }
}
var Param;
(function (Param) {
  Param["sdata"] = "sdata";
  Param["src"] = "src";
  Param["cid"] = "cid";
  Param["sa"] = "sa";
  Param["did"] = "did";
  Param["tid"] = "tid";
  Param["pt"] = "pt";
  Param["aid"] = "aid";
  Param["v"] = "v";
  Param["t"] = "t";
})(Param || (Param = {}));

/***/ }),

/***/ 82429:
/*!********************************************************************************!*\
  !*** ./libs/shared/personalisation/src/pega/nba/v1/mappers/nba-list.mapper.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NBAListMapper: () => (/* binding */ NBAListMapper)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-shared */ 77157);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_nba_list_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/nba-list.model */ 25970);
/* harmony import */ var _models_selling_argument_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/selling-argument.model */ 24307);
/* harmony import */ var _models_nba_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/nba.model */ 27056);
/* harmony import */ var _sales__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../sales */ 97944);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_5__);






class NBAListMapper {
  toModel(response) {
    if (response && response.nextBestActions) {
      return this.createNBAListResponse(response.nextBestActions);
    }
    return new _models_nba_list_model__WEBPACK_IMPORTED_MODULE_1__.NBAList();
  }
  createNBAListResponse(rawNbaList) {
    return (0,_telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_0__.Builder)(_models_nba_list_model__WEBPACK_IMPORTED_MODULE_1__.NBAList)
    // @ts-ignore
    .actions(this.createNBAs(rawNbaList.actions)).customerNumber(rawNbaList.customerNumber).interactionId(rawNbaList.interactionId).channel(rawNbaList.channel).containerName(rawNbaList.containerName).v(rawNbaList.v).isSuccess(true).build();
  }
  createNBAs(rawActions) {
    if (!rawActions) {
      return [new _models_nba_model__WEBPACK_IMPORTED_MODULE_3__.NBA()];
    }
    return rawActions.map(rawAction => {
      return (0,_telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_0__.Builder)(_models_nba_model__WEBPACK_IMPORTED_MODULE_3__.NBA)
      // @ts-ignore
      .sdata(new _sales__WEBPACK_IMPORTED_MODULE_4__.SalesData(rawAction.sdata)).rank(rawAction.rank).group(rawAction.group).issue(rawAction.issue).name(rawAction.name).treatment(rawAction.treatment).campaignId(rawAction.campaignId).productType(rawAction.productType).sellingArguments(this.createSellingArguments(rawAction.sellingArguments)).build();
    });
  }
  createSellingArguments(rawSellingArguments) {
    return rawSellingArguments && rawSellingArguments.map(rawSellingArgument => {
      return new _models_selling_argument_model__WEBPACK_IMPORTED_MODULE_2__.SellingArgument(rawSellingArgument.key, rawSellingArgument.rank);
    });
  }
  static ɵfac = function NBAListMapper_Factory(t) {
    return new (t || NBAListMapper)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: NBAListMapper,
    factory: NBAListMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 25970:
/*!******************************************************************************!*\
  !*** ./libs/shared/personalisation/src/pega/nba/v1/models/nba-list.model.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NBAList: () => (/* binding */ NBAList)
/* harmony export */ });
/* harmony import */ var _nba_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nba.model */ 27056);

class NBAList {
  customerNumber;
  interactionId;
  channel;
  containerName;
  v;
  actions = [];
  isSuccess = false;
  constructor(nbaList) {
    if (nbaList) {
      this.isSuccess = true;
      Object.assign(this, nbaList);
      if (nbaList['actions'] && nbaList['actions'][0]) {
        this.actions = nbaList['actions'].map(nba => new _nba_model__WEBPACK_IMPORTED_MODULE_0__.NBA(nba));
      }
    }
  }
  enrich(json) {
    return new NBAList(json);
  }
  getNBA() {
    return this.actions && this.actions[0];
  }
}

/***/ }),

/***/ 15920:
/*!**************************************************************************************!*\
  !*** ./libs/shared/personalisation/src/pega/nba/v1/models/nba-request-parameters.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NBARequestParameters: () => (/* binding */ NBARequestParameters)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _interfaces_request_param__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces/request-param */ 12285);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nba_list_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nba-list.model */ 25970);
/* harmony import */ var _nba_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nba.model */ 27056);
/* harmony import */ var _selling_argument_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selling-argument.model */ 24307);
/* harmony import */ var _sales_service_sales_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../sales/service/sales-data.service */ 8505);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @telenet/ng-lib-shared */ 77157);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_9__);












class NBARequestParameters {
  salesDataService;
  jsonUrlService;
  nbaRequestParameters;
  requestObservables;
  constructor(salesDataService, jsonUrlService) {
    this.salesDataService = salesDataService;
    this.jsonUrlService = jsonUrlService;
    const url = window.location.href;
    this.nbaRequestParameters = Object.keys(_interfaces_request_param__WEBPACK_IMPORTED_MODULE_2__.Param).map(param => {
      const value = new URL(url).searchParams.get(param);
      return value ? new _interfaces_request_param__WEBPACK_IMPORTED_MODULE_2__.RequestParam(param, value) : undefined;
    }).filter(el => el !== undefined);
  }
  toNBAList() {
    if (this.getRequestParamValue(_interfaces_request_param__WEBPACK_IMPORTED_MODULE_2__.Param.t) !== 'nbo') {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _nba_list_model__WEBPACK_IMPORTED_MODULE_4__.NBAList());
    } else {
      this.requestObservables = [];
      this.requestObservables.push(this.salesDataService.getDecompressedSalesData(this.getRequestParamValue(_interfaces_request_param__WEBPACK_IMPORTED_MODULE_2__.Param.sdata)));
      if (this.getRequestParamValue(_interfaces_request_param__WEBPACK_IMPORTED_MODULE_2__.Param.tid)) {
        this.requestObservables.push(this.deCompressRequestParamValue(this.getRequestParamValue(_interfaces_request_param__WEBPACK_IMPORTED_MODULE_2__.Param.tid)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(treatmentId => treatmentId)));
      }
      if (this.getRequestParamValue(_interfaces_request_param__WEBPACK_IMPORTED_MODULE_2__.Param.pt)) {
        this.requestObservables.push(this.deCompressRequestParamValue(this.getRequestParamValue(_interfaces_request_param__WEBPACK_IMPORTED_MODULE_2__.Param.pt)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(productType => productType)));
      }
      if (this.getRequestParamValue(_interfaces_request_param__WEBPACK_IMPORTED_MODULE_2__.Param.aid)) {
        this.requestObservables.push(this.deCompressRequestParamValue(this.getRequestParamValue(_interfaces_request_param__WEBPACK_IMPORTED_MODULE_2__.Param.aid)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(name => name)));
      }
      return this.constructNbaListFromRequestParam();
    }
  }
  constructNbaListFromRequestParam() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.forkJoin)(this.requestObservables).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(([salesDataDecompressed, treatmentId, productType, name]) => {
      const nba = (0,_telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_8__.Builder)(_nba_model__WEBPACK_IMPORTED_MODULE_5__.NBA)
      // @ts-ignore
      .sdata(salesDataDecompressed).sellingArguments(this.createSellingArguments(this.getRequestParamValueAsArray(_interfaces_request_param__WEBPACK_IMPORTED_MODULE_2__.Param.sa))).campaignId(this.getRequestParamValue(_interfaces_request_param__WEBPACK_IMPORTED_MODULE_2__.Param.cid)).treatment(treatmentId ? treatmentId['tid'] : '').productType(productType ? productType['pt'] : '').name(name ? name['aid'] : '').build();
      return (0,_telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_8__.Builder)(_nba_list_model__WEBPACK_IMPORTED_MODULE_4__.NBAList)
      // @ts-ignore
      .actions([nba]).channel(this.getRequestParamValue(_interfaces_request_param__WEBPACK_IMPORTED_MODULE_2__.Param.src)).interactionId(this.getRequestParamValue(_interfaces_request_param__WEBPACK_IMPORTED_MODULE_2__.Param.did)).v(this.getRequestParamValue(_interfaces_request_param__WEBPACK_IMPORTED_MODULE_2__.Param.v)).isSuccess(true).build();
    }));
  }
  getRequestParam(key) {
    return this.nbaRequestParameters.find(param => param.key === key);
  }
  getRequestParamValue(key) {
    const requestParam = this.getRequestParam(key);
    return requestParam ? requestParam.value : '';
  }
  getRequestParamValueAsArray(key) {
    const requestParam = this.getRequestParam(key);
    return requestParam ? requestParam.value.split(',') : [];
  }
  createSellingArguments(sa) {
    let rank = 1;
    const sellingArguments = [];
    sa.forEach(saParam => sellingArguments.push(new _selling_argument_model__WEBPACK_IMPORTED_MODULE_6__.SellingArgument(saParam, rank++)));
    return sellingArguments;
  }
  deCompressRequestParamValue(paramValue) {
    return this.jsonUrlService.decompress(paramValue);
  }
  static ɵfac = function NBARequestParameters_Factory(t) {
    return new (t || NBARequestParameters)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_sales_service_sales_data_service__WEBPACK_IMPORTED_MODULE_7__.SalesDataService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__.JsonUrlService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
    token: NBARequestParameters,
    factory: NBARequestParameters.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 27056:
/*!*************************************************************************!*\
  !*** ./libs/shared/personalisation/src/pega/nba/v1/models/nba.model.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NBA: () => (/* binding */ NBA)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ 3715);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ 39990);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ 57541);
/* harmony import */ var _sales__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../sales */ 97944);


class NBA {
  rank;
  group;
  issue;
  name;
  treatment;
  campaignId;
  productType;
  sellingArguments;
  sdata;
  constructor(nba) {
    if (nba) {
      Object.assign(this, nba);
      this.sdata = new _sales__WEBPACK_IMPORTED_MODULE_0__.SalesData(nba.sdata);
    }
  }
  hasTreatment() {
    return this.treatment ? this.treatment.length > 0 : false;
  }
  hasProductType() {
    return this.productType ? this.productType.length > 0 : false;
  }
  isSalesDataEmpty() {
    return !this.sdata || !this.sdata.hasOffers();
  }
  getRawSalesData() {
    if (this.isSalesDataEmpty()) {
      return {
        products: [],
        options: [],
        optins: []
      };
    }
    const offers = this.sdata.flatten().getOffers();
    return {
      products: this.extractProductIds(offers),
      options: this.extractOptionIds(offers),
      optins: this.extractOptinIds(offers)
    };
  }
  extractProductIds(offers) {
    return [...this.extractFlatOmapiIdList(this.getNBOElementByType(offers, Object.values(_sales__WEBPACK_IMPORTED_MODULE_0__.SalesDataProductType)))];
  }
  extractOptionIds(offers) {
    return [...this.extractFlatOmapiIdList(this.getNBOElementByType(offers, Object.values(_sales__WEBPACK_IMPORTED_MODULE_0__.SalesDataOptionType)))];
  }
  extractOptinIds(offers) {
    return [...this.extractFlatOmapiIdList(this.getNBOElementByType(offers, Object.values(_sales__WEBPACK_IMPORTED_MODULE_0__.SalesDataOptinType)))];
  }
  getNBOElementByType(products, types) {
    return products.filter(product => product && types.includes(product.type));
  }
  extractFlatOmapiIdList(products) {
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"])((0,lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"])(products, p => !(0,lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"])(p)), o => o.id);
  }
}

/***/ }),

/***/ 98100:
/*!*********************************************************************************************!*\
  !*** ./libs/shared/personalisation/src/pega/nba/v1/models/product.interface.testfactory.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   productTestFactory: () => (/* binding */ productTestFactory)
/* harmony export */ });
/* harmony import */ var factory_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! factory.ts */ 46032);
/* harmony import */ var _sales__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../sales */ 97944);


const productTestFactory = factory_ts__WEBPACK_IMPORTED_MODULE_0__.Sync.makeFactory({
  id: '36860',
  offers: [],
  type: _sales__WEBPACK_IMPORTED_MODULE_1__.SalesDataType.TYPE_PRODUCT
});

/***/ }),

/***/ 24307:
/*!**************************************************************************************!*\
  !*** ./libs/shared/personalisation/src/pega/nba/v1/models/selling-argument.model.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SellingArgument: () => (/* binding */ SellingArgument)
/* harmony export */ });
class SellingArgument {
  key;
  rank;
  constructor(key, rank) {
    this.key = key;
    this.rank = rank;
  }
}

/***/ }),

/***/ 13993:
/*!******************************************************************************!*\
  !*** ./libs/shared/personalisation/src/pega/nba/v1/services/pega.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PegaService: () => (/* binding */ PegaService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_nba_request_parameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/nba-request-parameters */ 15920);
/* harmony import */ var _models_nba_list_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/nba-list.model */ 25970);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @telenet/ng-lib-ocapi */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mappers_nba_list_mapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mappers/nba-list.mapper */ 82429);
/* harmony import */ var _constants_nba_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/nba.constant */ 2181);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @telenet/ng-lib-shared */ 77157);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_9__);













class PegaService {
  window;
  nbaRequestParameters;
  nbaListMapper;
  ocapiService;
  loginService;
  log = _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_8__.LogFactory.createLogger(PegaService);
  constructor(window, nbaRequestParameters, nbaListMapper, ocapiService, loginService) {
    this.window = window;
    this.nbaRequestParameters = nbaRequestParameters;
    this.nbaListMapper = nbaListMapper;
    this.ocapiService = ocapiService;
    this.loginService = loginService;
  }
  getNBAList() {
    const nbaFromRequest$ = this.getNBAFromRequest();
    return nbaFromRequest$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(requestNbaList => (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.iif)(() => !!requestNbaList.getNBA(), nbaFromRequest$, this.getNBAFromPegaAPI())));
  }
  getNBAFromRequest() {
    return this.nbaRequestParameters.toNBAList();
  }
  getNBAFromPegaAPI() {
    const enablePegaPersonalisation = this.window['ContextHub']['Constants']['PROP_ENABLE_PEGA_PERSONALIZATION'];
    return enablePegaPersonalisation === 'true' ? this.getAuthenticatedPegaNBAList() : (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _models_nba_list_model__WEBPACK_IMPORTED_MODULE_3__.NBAList());
  }
  getAuthenticatedPegaNBAList() {
    return this.loginService.getLoginDetails().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(loginDetails => loginDetails.isLoggedIn() ? this.getPegaNBAList() : (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _models_nba_list_model__WEBPACK_IMPORTED_MODULE_3__.NBAList())));
  }
  getPegaNBAList() {
    const endpoint = this.getServiceURI(_constants_nba_constant__WEBPACK_IMPORTED_MODULE_6__.NBAConstants.PEGA_NBA_ENDPOINT);
    const ocapiCallConfig = new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_4__.OcapiCallConfig(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_7__.ContexthubConstants.MESSAGE_GROUP_NBALIST, endpoint, this.nbaListMapper);
    return this.ocapiService.doGet(ocapiCallConfig).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => this.handlePegaNbaError(err)));
  }
  handlePegaNbaError(err) {
    this.log.logError('Error while fetching NBA list from Pega.', err);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _models_nba_list_model__WEBPACK_IMPORTED_MODULE_3__.NBAList());
  }
  getServiceURI(endpoint) {
    return _constants_nba_constant__WEBPACK_IMPORTED_MODULE_6__.NBAConstants.SERVICE_PREFIX.concat(_constants_nba_constant__WEBPACK_IMPORTED_MODULE_6__.NBAConstants.CONTEXT).concat(_constants_nba_constant__WEBPACK_IMPORTED_MODULE_6__.NBAConstants.API_VERSION_V1).concat(endpoint).concat('?channel=').concat(_constants_nba_constant__WEBPACK_IMPORTED_MODULE_6__.NBAConstants.CHANNEL);
  }
  static ɵfac = function PegaService_Factory(t) {
    return new (t || PegaService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"]('Window'), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_models_nba_request_parameters__WEBPACK_IMPORTED_MODULE_2__.NBARequestParameters), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_mappers_nba_list_mapper__WEBPACK_IMPORTED_MODULE_5__.NBAListMapper), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_4__.OcapiService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_4__.LoginService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
    token: PegaService,
    factory: PegaService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 10040:
/*!*****************************************************************************!*\
  !*** ./libs/shared/personalisation/src/pega/services/pega-store.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PegaStoreService: () => (/* binding */ PegaStoreService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @telenet/ng-lib-datalayer */ 42782);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nba_v1_models_nba_list_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nba/v1/models/nba-list.model */ 25970);
/* harmony import */ var _nba_v1_services_pega_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../nba/v1/services/pega.service */ 13993);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @telenet/ng-lib-shared */ 77157);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_5__);









class PegaStoreService extends _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__.ContextHubGenericStoreService {
  pegaService;
  dataLayerService;
  constructor(_ngZone, window, pegaService, dataLayerService) {
    super(_ngZone, window, dataLayerService, (0,_telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_5__.Builder)().storeModel(new _nba_v1_models_nba_list_model__WEBPACK_IMPORTED_MODULE_3__.NBAList()).storeName(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__.ContexthubConstants.STORE_NAME_PEGA).serviceName('PegaStoreService').build());
    this.pegaService = pegaService;
    this.dataLayerService = dataLayerService;
  }
  onLoadData() {
    return this.pegaService.getNBAList();
  }
  static ɵfac = function PegaStoreService_Factory(t) {
    return new (t || PegaStoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"]('Window'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_nba_v1_services_pega_service__WEBPACK_IMPORTED_MODULE_4__.PegaService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1__.DataLayerService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: PegaStoreService,
    factory: PegaStoreService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 97944:
/*!********************************************************!*\
  !*** ./libs/shared/personalisation/src/sales/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageBusService: () => (/* reexport safe */ _service_message_bus_service__WEBPACK_IMPORTED_MODULE_3__.MessageBusService),
/* harmony export */   SalesData: () => (/* reexport safe */ _models_sales_data_model__WEBPACK_IMPORTED_MODULE_1__.SalesData),
/* harmony export */   SalesDataMapper: () => (/* reexport safe */ _mappers_sales_data_mapper__WEBPACK_IMPORTED_MODULE_0__.SalesDataMapper),
/* harmony export */   SalesDataOffer: () => (/* reexport safe */ _models_sales_data_model__WEBPACK_IMPORTED_MODULE_1__.SalesDataOffer),
/* harmony export */   SalesDataOptinType: () => (/* reexport safe */ _models_sales_data_type__WEBPACK_IMPORTED_MODULE_2__.SalesDataOptinType),
/* harmony export */   SalesDataOptionType: () => (/* reexport safe */ _models_sales_data_type__WEBPACK_IMPORTED_MODULE_2__.SalesDataOptionType),
/* harmony export */   SalesDataProductType: () => (/* reexport safe */ _models_sales_data_type__WEBPACK_IMPORTED_MODULE_2__.SalesDataProductType),
/* harmony export */   SalesDataService: () => (/* reexport safe */ _service_sales_data_service__WEBPACK_IMPORTED_MODULE_4__.SalesDataService),
/* harmony export */   SalesDataType: () => (/* reexport safe */ _models_sales_data_type__WEBPACK_IMPORTED_MODULE_2__.SalesDataType)
/* harmony export */ });
/* harmony import */ var _mappers_sales_data_mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mappers/sales-data.mapper */ 15292);
/* harmony import */ var _models_sales_data_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/sales-data.model */ 3690);
/* harmony import */ var _models_sales_data_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/sales-data.type */ 14616);
/* harmony import */ var _service_message_bus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/message-bus.service */ 541);
/* harmony import */ var _service_sales_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/sales-data.service */ 8505);







/***/ }),

/***/ 15292:
/*!****************************************************************************!*\
  !*** ./libs/shared/personalisation/src/sales/mappers/sales-data.mapper.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesDataMapper: () => (/* binding */ SalesDataMapper)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ 3715);
/* harmony import */ var _models_sales_data_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/sales-data.model */ 3690);
/* harmony import */ var _models_sales_data_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/sales-data.type */ 14616);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




class SalesDataMapper {
  mapSalesData(rawSalesData) {
    const salesData = new _models_sales_data_model__WEBPACK_IMPORTED_MODULE_0__.SalesData();
    salesData.setOffers((0,lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"])(rawSalesData.products, id => this.mapSalesDataOffer(id, rawSalesData)));
    return salesData;
  }
  mapSalesDataOffer(id, rawSalesData) {
    return {
      id,
      type: _models_sales_data_type__WEBPACK_IMPORTED_MODULE_1__.SalesDataType.TYPE_PRODUCT,
      offers: this.mapSalesDataSubOffers(rawSalesData)
    };
  }
  mapSalesDataSubOffers(rawSalesData) {
    return [...this.mapSubOffers(rawSalesData.options, _models_sales_data_type__WEBPACK_IMPORTED_MODULE_1__.SalesDataType.TYPE_OPTION), ...this.mapSubOffers(rawSalesData.optins, _models_sales_data_type__WEBPACK_IMPORTED_MODULE_1__.SalesDataType.TYPE_OPTIN)];
  }
  mapSubOffers(subProducts, type) {
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"])(subProducts, id => {
      return {
        id,
        type
      };
    });
  }
  static ɵfac = function SalesDataMapper_Factory(t) {
    return new (t || SalesDataMapper)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: SalesDataMapper,
    factory: SalesDataMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 3690:
/*!**************************************************************************!*\
  !*** ./libs/shared/personalisation/src/sales/models/sales-data.model.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesData: () => (/* binding */ SalesData),
/* harmony export */   SalesDataOffer: () => (/* binding */ SalesDataOffer)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ 41855);

class SalesData {
  offers;
  constructor(salesData) {
    Object.assign(this, salesData);
  }
  hasOffers() {
    return !(0,lodash_es__WEBPACK_IMPORTED_MODULE_0__["default"])(this.offers);
  }
  setOffers(offers) {
    this.offers = offers;
  }
  getOffers() {
    return this.offers;
  }
  flatten() {
    if (!this.offers) {
      return this;
    }
    const offers = this.offers.flatMap(offer => SalesDataOffer.flattenSalesDataOffer(offer));
    const salesData = new SalesData();
    salesData.setOffers(offers);
    return salesData;
  }
}
class SalesDataOffer {
  id;
  type;
  offers;
  amountOfLimitedSims;
  static flattenSalesDataOffer(salesDataOffer) {
    const salesDataOfferWithoutOffers = Object.assign(new SalesDataOffer(), salesDataOffer, {
      offers: []
    });
    return [salesDataOfferWithoutOffers].concat((salesDataOffer?.offers ?? []).flatMap(offer => SalesDataOffer.flattenSalesDataOffer(offer)));
  }
  static of(id, type, offers) {
    const salesDataOffer = new SalesDataOffer();
    salesDataOffer.id = id;
    salesDataOffer.type = type;
    salesDataOffer.offers = offers;
    return salesDataOffer;
  }
}

/***/ }),

/***/ 14616:
/*!*************************************************************************!*\
  !*** ./libs/shared/personalisation/src/sales/models/sales-data.type.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesDataOptinType: () => (/* binding */ SalesDataOptinType),
/* harmony export */   SalesDataOptionType: () => (/* binding */ SalesDataOptionType),
/* harmony export */   SalesDataProductType: () => (/* binding */ SalesDataProductType),
/* harmony export */   SalesDataType: () => (/* binding */ SalesDataType)
/* harmony export */ });
var SalesDataType;
(function (SalesDataType) {
  SalesDataType["TYPE_PRODUCT"] = "Product";
  SalesDataType["TYPE_OPTION"] = "Option";
  SalesDataType["TYPE_OPTION_DWN"] = "OPTION";
  SalesDataType["TYPE_STREAMING_SERVICE"] = "StreamingService";
  SalesDataType["TYPE_OPTIN"] = "Optin";
  SalesDataType["TYPE_MOBILE"] = "Mobile";
  SalesDataType["TYPE_SMARTPHONE"] = "Smartphone";
  SalesDataType["TYPE_BUNDLE"] = "BUNDLE";
  SalesDataType["TYPE_OTT_LINE"] = "OTT LINE";
  SalesDataType["TYPE_IDTV_LINE"] = "IDTV LINE";
  SalesDataType["TYPE_DATA_ONLY_MOBILE_LINE"] = "DATA ONLY MOBILE LINE";
  SalesDataType["TYPE_FIXED_LINE"] = "FIXED LINE";
  SalesDataType["TYPE_MOBILE_LINE"] = "MOBILE LINE";
  SalesDataType["TYPE_TELEPHONE"] = "TELEPHONE";
  SalesDataType["TYPE_INTERNET"] = "INTERNET";
  SalesDataType["TYPE_DTV"] = "DTV";
  SalesDataType["TYPE_INTERNET_BASE"] = "Internet";
  SalesDataType["TYPE_DTV_BASE"] = "Dtv";
  SalesDataType["TYPE_TV_BOX_BASE"] = "TV_BOX";
})(SalesDataType || (SalesDataType = {}));
var SalesDataProductType;
(function (SalesDataProductType) {
  SalesDataProductType["TYPE_PRODUCT"] = "Product";
  SalesDataProductType["TYPE_MOBILE"] = "Mobile";
  SalesDataProductType["TYPE_BUNDLE"] = "BUNDLE";
  SalesDataProductType["TYPE_INTERNET"] = "INTERNET";
  SalesDataProductType["TYPE_TELEPHONE"] = "TELEPHONE";
  SalesDataProductType["TYPE_DTV"] = "DTV";
  SalesDataProductType["TYPE_IDTV_LINE"] = "IDTV LINE";
  SalesDataProductType["TYPE_OTT_LINE"] = "OTT LINE";
})(SalesDataProductType || (SalesDataProductType = {}));
var SalesDataOptionType;
(function (SalesDataOptionType) {
  SalesDataOptionType["TYPE_OPTION"] = "Option";
  SalesDataOptionType["TYPE_OPTION_DWN"] = "OPTION";
})(SalesDataOptionType || (SalesDataOptionType = {}));
var SalesDataOptinType;
(function (SalesDataOptinType) {
  SalesDataOptinType["TYPE_OPTIN"] = "Optin";
  SalesDataOptinType["TYPE_DATA_ONLY_MOBILE_LINE"] = "DATA ONLY MOBILE LINE";
  SalesDataOptinType["TYPE_FIXED_LINE"] = "FIXED LINE";
  SalesDataOptinType["TYPE_MOBILE_LINE"] = "MOBILE LINE";
})(SalesDataOptinType || (SalesDataOptinType = {}));

/***/ }),

/***/ 541:
/*!******************************************************************************!*\
  !*** ./libs/shared/personalisation/src/sales/service/message-bus.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageBusService: () => (/* binding */ MessageBusService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);


// this service is used by ONE configurator to sync state between monorepo and tcp.angular (https://jira.rel.apps.telenet.be/browse/DIGSALE1TM-1140)
class MessageBusService {
  messageBus$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.ReplaySubject(1000);
  static ɵfac = function MessageBusService_Factory(t) {
    return new (t || MessageBusService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: MessageBusService,
    factory: MessageBusService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8505:
/*!*****************************************************************************!*\
  !*** ./libs/shared/personalisation/src/sales/service/sales-data.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesDataService: () => (/* binding */ SalesDataService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_sales_data_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/sales-data.model */ 3690);
/* harmony import */ var _mappers_sales_data_mapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mappers/sales-data.mapper */ 15292);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_5__);








class SalesDataService {
  jsonUrlService;
  salesDataMapper;
  constructor(jsonUrlService, salesDataMapper) {
    this.jsonUrlService = jsonUrlService;
    this.salesDataMapper = salesDataMapper;
  }
  getCompressedSalesData(salesData) {
    return this.jsonUrlService.compress(salesData);
  }
  getDecompressedSalesData(compressedSalesData) {
    if (compressedSalesData) {
      return this.jsonUrlService.decompress(compressedSalesData).pipe(
      // @ts-ignore
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _models_sales_data_model__WEBPACK_IMPORTED_MODULE_3__.SalesData())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(salesData => {
        return new _models_sales_data_model__WEBPACK_IMPORTED_MODULE_3__.SalesData(salesData);
      }));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _models_sales_data_model__WEBPACK_IMPORTED_MODULE_3__.SalesData());
  }
  mapSalesData(rawSalesData) {
    return this.salesDataMapper.mapSalesData(rawSalesData);
  }
  static ɵfac = function SalesDataService_Factory(t) {
    return new (t || SalesDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__.JsonUrlService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_mappers_sales_data_mapper__WEBPACK_IMPORTED_MODULE_4__.SalesDataMapper));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: SalesDataService,
    factory: SalesDataService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 57295:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseFilter.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseEach_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseEach.js */ 59121);


/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function baseFilter(collection, predicate) {
  var result = [];
  (0,_baseEach_js__WEBPACK_IMPORTED_MODULE_0__["default"])(collection, function (value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseFilter);

/***/ }),

/***/ 39990:
/*!******************************************!*\
  !*** ./node_modules/lodash-es/filter.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayFilter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayFilter.js */ 74423);
/* harmony import */ var _baseFilter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseFilter.js */ 57295);
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_baseIteratee.js */ 34018);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ 66328);





/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * **Note:** Unlike `_.remove`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 *
 * // Combining several predicates using `_.overEvery` or `_.overSome`.
 * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
 * // => objects for ['fred', 'barney']
 */
function filter(collection, predicate) {
  var func = (0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(collection) ? _arrayFilter_js__WEBPACK_IMPORTED_MODULE_1__["default"] : _baseFilter_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  return func(collection, (0,_baseIteratee_js__WEBPACK_IMPORTED_MODULE_3__["default"])(predicate, 3));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filter);

/***/ }),

/***/ 57541:
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/isNil.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isNil(null);
 * // => true
 *
 * _.isNil(void 0);
 * // => true
 *
 * _.isNil(NaN);
 * // => false
 */
function isNil(value) {
  return value == null;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isNil);

/***/ })

}])
//# sourceMappingURL=libs_shared_personalisation_src_index_ts-_85cd0.js.map