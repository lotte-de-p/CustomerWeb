import * as i0 from '@angular/core';
import { Injectable, Inject } from '@angular/core';
import { Builder, LogFactory } from '@telenet/ng-lib-shared';
import { isEmpty, map, filter, isNil } from 'lodash-es';
import { ReplaySubject, of, forkJoin, iif } from 'rxjs';
import { catchError, map as map$1, mergeMap } from 'rxjs/operators';
import * as i1 from '@telenet/ng-lib-page';
import { ContexthubConstants, ContextHubGenericStoreService } from '@telenet/ng-lib-page';
import * as i3 from '@telenet/ng-lib-ocapi';
import { OcapiCallConfig } from '@telenet/ng-lib-ocapi';
import * as Factory from 'factory.ts';
import * as i2 from '@telenet/ng-lib-datalayer';

class SalesData {
    offers;
    constructor(salesData) {
        Object.assign(this, salesData);
    }
    hasOffers() {
        return !isEmpty(this.offers);
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
        const offers = this.offers.flatMap((offer) => SalesDataOffer.flattenSalesDataOffer(offer));
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
            offers: [],
        });
        return [salesDataOfferWithoutOffers].concat((salesDataOffer?.offers ?? []).flatMap((offer) => SalesDataOffer.flattenSalesDataOffer(offer)));
    }
    static of(id, type, offers) {
        const salesDataOffer = new SalesDataOffer();
        salesDataOffer.id = id;
        salesDataOffer.type = type;
        salesDataOffer.offers = offers;
        return salesDataOffer;
    }
}

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

class SalesDataMapper {
    mapSalesData(rawSalesData) {
        const salesData = new SalesData();
        salesData.setOffers(map(rawSalesData.products, (id) => this.mapSalesDataOffer(id, rawSalesData)));
        return salesData;
    }
    mapSalesDataOffer(id, rawSalesData) {
        return {
            id,
            type: SalesDataType.TYPE_PRODUCT,
            offers: this.mapSalesDataSubOffers(rawSalesData),
        };
    }
    mapSalesDataSubOffers(rawSalesData) {
        return [
            ...this.mapSubOffers(rawSalesData.options, SalesDataType.TYPE_OPTION),
            ...this.mapSubOffers(rawSalesData.optins, SalesDataType.TYPE_OPTIN),
        ];
    }
    mapSubOffers(subProducts, type) {
        return map(subProducts, (id) => {
            return {
                id,
                type,
            };
        });
    }
    static ɵfac = function SalesDataMapper_Factory(t) { return new (t || SalesDataMapper)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SalesDataMapper, factory: SalesDataMapper.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SalesDataMapper, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

// this service is used by ONE configurator to sync state between monorepo and tcp.angular (https://jira.rel.apps.telenet.be/browse/DIGSALE1TM-1140)
class MessageBusService {
    messageBus$ = new ReplaySubject(1000);
    static ɵfac = function MessageBusService_Factory(t) { return new (t || MessageBusService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: MessageBusService, factory: MessageBusService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MessageBusService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

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
            catchError(() => of(new SalesData())), map$1((salesData) => {
                return new SalesData(salesData);
            }));
        }
        return of(new SalesData());
    }
    mapSalesData(rawSalesData) {
        return this.salesDataMapper.mapSalesData(rawSalesData);
    }
    static ɵfac = function SalesDataService_Factory(t) { return new (t || SalesDataService)(i0.ɵɵinject(i1.JsonUrlService), i0.ɵɵinject(SalesDataMapper)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SalesDataService, factory: SalesDataService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SalesDataService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.JsonUrlService }, { type: SalesDataMapper }], null); })();

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
            this.sdata = new SalesData(nba.sdata);
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
                optins: [],
            };
        }
        const offers = this.sdata.flatten().getOffers();
        return {
            products: this.extractProductIds(offers),
            options: this.extractOptionIds(offers),
            optins: this.extractOptinIds(offers),
        };
    }
    extractProductIds(offers) {
        return [...this.extractFlatOmapiIdList(this.getNBOElementByType(offers, Object.values(SalesDataProductType)))];
    }
    extractOptionIds(offers) {
        return [...this.extractFlatOmapiIdList(this.getNBOElementByType(offers, Object.values(SalesDataOptionType)))];
    }
    extractOptinIds(offers) {
        return [...this.extractFlatOmapiIdList(this.getNBOElementByType(offers, Object.values(SalesDataOptinType)))];
    }
    getNBOElementByType(products, types) {
        return products.filter((product) => product && types.includes(product.type));
    }
    extractFlatOmapiIdList(products) {
        return map(filter(products, (p) => !isNil(p)), (o) => o.id);
    }
}

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
                this.actions = nbaList['actions'].map((nba) => new NBA(nba));
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

class SellingArgument {
    key;
    rank;
    constructor(key, rank) {
        this.key = key;
        this.rank = rank;
    }
}

class NBAListMapper {
    toModel(response) {
        if (response && response.nextBestActions) {
            return this.createNBAListResponse(response.nextBestActions);
        }
        return new NBAList();
    }
    createNBAListResponse(rawNbaList) {
        return (Builder(NBAList)
            // @ts-ignore
            .actions(this.createNBAs(rawNbaList.actions))
            .customerNumber(rawNbaList.customerNumber)
            .interactionId(rawNbaList.interactionId)
            .channel(rawNbaList.channel)
            .containerName(rawNbaList.containerName)
            .v(rawNbaList.v)
            .isSuccess(true)
            .build());
    }
    createNBAs(rawActions) {
        if (!rawActions) {
            return [new NBA()];
        }
        return rawActions.map((rawAction) => {
            return (Builder(NBA)
                // @ts-ignore
                .sdata(new SalesData(rawAction.sdata))
                .rank(rawAction.rank)
                .group(rawAction.group)
                .issue(rawAction.issue)
                .name(rawAction.name)
                .treatment(rawAction.treatment)
                .campaignId(rawAction.campaignId)
                .productType(rawAction.productType)
                .sellingArguments(this.createSellingArguments(rawAction.sellingArguments))
                .build());
        });
    }
    createSellingArguments(rawSellingArguments) {
        return (rawSellingArguments &&
            rawSellingArguments.map((rawSellingArgument) => {
                return new SellingArgument(rawSellingArgument.key, rawSellingArgument.rank);
            }));
    }
    static ɵfac = function NBAListMapper_Factory(t) { return new (t || NBAListMapper)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NBAListMapper, factory: NBAListMapper.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NBAListMapper, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

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

class NBARequestParameters {
    salesDataService;
    jsonUrlService;
    nbaRequestParameters;
    requestObservables;
    constructor(salesDataService, jsonUrlService) {
        this.salesDataService = salesDataService;
        this.jsonUrlService = jsonUrlService;
        const url = window.location.href;
        this.nbaRequestParameters = Object.keys(Param)
            .map((param) => {
            const value = new URL(url).searchParams.get(param);
            return value ? new RequestParam(param, value) : undefined;
        })
            .filter((el) => el !== undefined);
    }
    toNBAList() {
        if (this.getRequestParamValue(Param.t) !== 'nbo') {
            return of(new NBAList());
        }
        else {
            this.requestObservables = [];
            this.requestObservables.push(this.salesDataService.getDecompressedSalesData(this.getRequestParamValue(Param.sdata)));
            if (this.getRequestParamValue(Param.tid)) {
                this.requestObservables.push(this.deCompressRequestParamValue(this.getRequestParamValue(Param.tid)).pipe(map$1((treatmentId) => treatmentId)));
            }
            if (this.getRequestParamValue(Param.pt)) {
                this.requestObservables.push(this.deCompressRequestParamValue(this.getRequestParamValue(Param.pt)).pipe(map$1((productType) => productType)));
            }
            if (this.getRequestParamValue(Param.aid)) {
                this.requestObservables.push(this.deCompressRequestParamValue(this.getRequestParamValue(Param.aid)).pipe(map$1((name) => name)));
            }
            return this.constructNbaListFromRequestParam();
        }
    }
    constructNbaListFromRequestParam() {
        return forkJoin(this.requestObservables).pipe(map$1(([salesDataDecompressed, treatmentId, productType, name]) => {
            const nba = Builder(NBA)
                // @ts-ignore
                .sdata(salesDataDecompressed)
                .sellingArguments(this.createSellingArguments(this.getRequestParamValueAsArray(Param.sa)))
                .campaignId(this.getRequestParamValue(Param.cid))
                .treatment(treatmentId ? treatmentId['tid'] : '')
                .productType(productType ? productType['pt'] : '')
                .name(name ? name['aid'] : '')
                .build();
            return (Builder(NBAList)
                // @ts-ignore
                .actions([nba])
                .channel(this.getRequestParamValue(Param.src))
                .interactionId(this.getRequestParamValue(Param.did))
                .v(this.getRequestParamValue(Param.v))
                .isSuccess(true)
                .build());
        }));
    }
    getRequestParam(key) {
        return this.nbaRequestParameters.find((param) => param.key === key);
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
        sa.forEach((saParam) => sellingArguments.push(new SellingArgument(saParam, rank++)));
        return sellingArguments;
    }
    deCompressRequestParamValue(paramValue) {
        return this.jsonUrlService.decompress(paramValue);
    }
    static ɵfac = function NBARequestParameters_Factory(t) { return new (t || NBARequestParameters)(i0.ɵɵinject(SalesDataService), i0.ɵɵinject(i1.JsonUrlService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NBARequestParameters, factory: NBARequestParameters.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NBARequestParameters, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: SalesDataService }, { type: i1.JsonUrlService }], null); })();

class NBAConstants {
    static API_VERSION_V1 = '/v1';
    static CONTEXT = '/nba-service';
    static PEGA_NBA_ENDPOINT = '/next-best-actions';
    static SERVICE_PREFIX = '/public/api';
    static CHANNEL = 'Web';
}

class PegaService {
    window;
    nbaRequestParameters;
    nbaListMapper;
    ocapiService;
    loginService;
    log = LogFactory.createLogger(PegaService);
    constructor(window, nbaRequestParameters, nbaListMapper, ocapiService, loginService) {
        this.window = window;
        this.nbaRequestParameters = nbaRequestParameters;
        this.nbaListMapper = nbaListMapper;
        this.ocapiService = ocapiService;
        this.loginService = loginService;
    }
    getNBAList() {
        const nbaFromRequest$ = this.getNBAFromRequest();
        return nbaFromRequest$.pipe(mergeMap((requestNbaList) => iif(() => !!requestNbaList.getNBA(), nbaFromRequest$, this.getNBAFromPegaAPI())));
    }
    getNBAFromRequest() {
        return this.nbaRequestParameters.toNBAList();
    }
    getNBAFromPegaAPI() {
        const enablePegaPersonalisation = this.window['ContextHub']['Constants']['PROP_ENABLE_PEGA_PERSONALIZATION'];
        return enablePegaPersonalisation === 'true' ? this.getAuthenticatedPegaNBAList() : of(new NBAList());
    }
    getAuthenticatedPegaNBAList() {
        return this.loginService
            .getLoginDetails()
            .pipe(mergeMap((loginDetails) => (loginDetails.isLoggedIn() ? this.getPegaNBAList() : of(new NBAList()))));
    }
    getPegaNBAList() {
        const endpoint = this.getServiceURI(NBAConstants.PEGA_NBA_ENDPOINT);
        const ocapiCallConfig = new OcapiCallConfig(ContexthubConstants.MESSAGE_GROUP_NBALIST, endpoint, this.nbaListMapper);
        return this.ocapiService.doGet(ocapiCallConfig).pipe(catchError((err) => this.handlePegaNbaError(err)));
    }
    handlePegaNbaError(err) {
        this.log.logError('Error while fetching NBA list from Pega.', err);
        return of(new NBAList());
    }
    getServiceURI(endpoint) {
        return NBAConstants.SERVICE_PREFIX.concat(NBAConstants.CONTEXT)
            .concat(NBAConstants.API_VERSION_V1)
            .concat(endpoint)
            .concat('?channel=')
            .concat(NBAConstants.CHANNEL);
    }
    static ɵfac = function PegaService_Factory(t) { return new (t || PegaService)(i0.ɵɵinject('Window'), i0.ɵɵinject(NBARequestParameters), i0.ɵɵinject(NBAListMapper), i0.ɵɵinject(i3.OcapiService), i0.ɵɵinject(i3.LoginService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PegaService, factory: PegaService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PegaService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: undefined, decorators: [{
                type: Inject,
                args: ['Window']
            }] }, { type: NBARequestParameters }, { type: NBAListMapper }, { type: i3.OcapiService }, { type: i3.LoginService }], null); })();

const productTestFactory = Factory.Sync.makeFactory({
    id: '36860',
    offers: [],
    type: SalesDataType.TYPE_PRODUCT,
});

class PegaStoreService extends ContextHubGenericStoreService {
    pegaService;
    dataLayerService;
    constructor(_ngZone, window, pegaService, dataLayerService) {
        super(_ngZone, window, dataLayerService, Builder()
            .storeModel(new NBAList())
            .storeName(ContexthubConstants.STORE_NAME_PEGA)
            .serviceName('PegaStoreService')
            .build());
        this.pegaService = pegaService;
        this.dataLayerService = dataLayerService;
    }
    onLoadData() {
        return this.pegaService.getNBAList();
    }
    static ɵfac = function PegaStoreService_Factory(t) { return new (t || PegaStoreService)(i0.ɵɵinject(i0.NgZone), i0.ɵɵinject('Window'), i0.ɵɵinject(PegaService), i0.ɵɵinject(i2.DataLayerService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PegaStoreService, factory: PegaStoreService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PegaStoreService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i0.NgZone }, { type: Window, decorators: [{
                type: Inject,
                args: ['Window']
            }] }, { type: PegaService }, { type: i2.DataLayerService }], null); })();

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

class CustomerInputStoreService extends ContextHubGenericStoreService {
    dataLayerService;
    constructor(_ngZone, window, dataLayerService) {
        super(_ngZone, window, dataLayerService, Builder()
            .storeModel(new CustomerInputStore())
            .storeName('customerinput')
            .serviceName('CustomerInputStoreService')
            .build());
        this.dataLayerService = dataLayerService;
    }
    enrichStoreData(fieldName, fieldData) {
        const customerInputStoreData = this.#getStoreData();
        if (customerInputStoreData) {
            customerInputStoreData[fieldName] = fieldData;
            this.#updateStoreData(customerInputStoreData);
        }
        else {
            console.error('Store data not found');
        }
    }
    #updateStoreData(storeData) {
        const store = new CustomerInputStore();
        Object.assign(store, storeData);
        this.updateStoreData(store);
    }
    #getStoreData() {
        const contextHub = this.window[ContexthubConstants.CONTEXTHUB];
        return contextHub?.getStore(this.storeConfig.storeName)?.getData();
    }
    static ɵfac = function CustomerInputStoreService_Factory(t) { return new (t || CustomerInputStoreService)(i0.ɵɵinject(i0.NgZone), i0.ɵɵinject('Window'), i0.ɵɵinject(i2.DataLayerService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CustomerInputStoreService, factory: CustomerInputStoreService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CustomerInputStoreService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i0.NgZone }, { type: Window, decorators: [{
                type: Inject,
                args: ['Window']
            }] }, { type: i2.DataLayerService }], null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { CustomerInputStore, CustomerInputStoreService, MessageBusService, NBA, NBAConstants, NBAList, NBAListMapper, NBARequestParameters, Param, PegaService, PegaStoreService, RequestParam, SalesData, SalesDataMapper, SalesDataOffer, SalesDataOptinType, SalesDataOptionType, SalesDataProductType, SalesDataService, SalesDataType, SellingArgument, productTestFactory };
//# sourceMappingURL=telenet-ng-lib-personalisation.mjs.map
