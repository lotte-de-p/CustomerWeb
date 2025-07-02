import { ReplaySubject, forkJoin, timeout, from, BehaviorSubject, Subject, Observable } from 'rxjs';
import * as i0 from '@angular/core';
import { Inject, Injectable, InjectionToken, inject, Optional, Component, ChangeDetectionStrategy, APP_INITIALIZER, NgModule, Input, Directive, LOCALE_ID, EventEmitter, Output, HostListener } from '@angular/core';
import * as i1 from '@telenet/ng-lib-datalayer';
import { EventTypeEnum, EventCategoryEnum } from '@telenet/ng-lib-datalayer';
import { DirectCallLabelEnum } from 'udl';
import { shareReplay, map as map$1, filter, mergeMap, tap, take, takeUntil } from 'rxjs/operators';
import localeNL from '@angular/common/locales/nl-BE';
import localeFR from '@angular/common/locales/fr-BE';
import localeEN from '@angular/common/locales/en-BE';
import { map, find, keyBy, isEmpty } from 'lodash-es';
import * as i1$1 from 'ngx-device-detector';
import * as i1$3 from '@angular/router';
import { ActivatedRoute, RouterModule } from '@angular/router';
import * as i1$2 from '@angular/common';
import { CommonModule, registerLocaleData } from '@angular/common';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';
import * as i2 from '@ngx-translate/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

class ContexthubConstants {
    static CONTEXTHUB = 'ContextHub';
    static MESSAGE_GROUP_NBALIST = 'nbaList';
    static STORE_NAME_CONTACT_DETAILS = 'contactDetails';
    static MESSAGE_GROUP_CONTACT_DETAILS = 'contact-details';
    static STORE_NAME_PEGA = 'pega';
    static ANGULAR_STORE_SERVICE_REF = 'angularStoreServicesRef';
    static EVENT_STORE_READY = 'store-ready';
}

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
let ContextHubGenericStoreService = class ContextHubGenericStoreService {
    _ngZone;
    window;
    dataLayerService;
    storeConfig;
    STORE_DATA_LOADED_CALL_LABEL = 'store_data_loaded';
    contextHubSubject = new ReplaySubject(1);
    isGetDataCallInvoked = false;
    constructor(_ngZone, window, dataLayerService, storeConfig) {
        this._ngZone = _ngZone;
        this.window = window;
        this.dataLayerService = dataLayerService;
        this.storeConfig = storeConfig;
        this.registerAngularService();
        this.registerStoreEventHook();
    }
    enrich(_data) {
        throw new Error('Method not Supported');
    }
    onLoadData(_data) {
        throw new Error('Method not Supported');
    }
    getStoreData() {
        const store = this.getStore();
        if (store) {
            const uniqueBindIdentifier = store.name + '_store_ready';
            const triggerForPastEvents = true;
            store.eventing.once(ContexthubConstants.EVENT_STORE_READY, () => {
                if (!this.isGetDataCallInvoked) {
                    this.isGetDataCallInvoked = true;
                    store.getData(true);
                }
            }, uniqueBindIdentifier, triggerForPastEvents);
        }
        return this.contextHubSubject;
    }
    updateStoreData(data, updateTimestamp = true) {
        const store = this.getStore();
        store?.updateStoreData(data, updateTimestamp);
    }
    onStoreDataLoaded(storeDataObj) {
        if (this.contextHubSubject) {
            storeDataObj = this.handleEnrich(storeDataObj);
            this.contextHubSubject.next(storeDataObj);
            this.contextHubSubject.complete();
            this.contextHubSubject = new ReplaySubject(1);
            this.isGetDataCallInvoked = false;
        }
    }
    registerAngularService() {
        if (!this.window[ContexthubConstants.ANGULAR_STORE_SERVICE_REF]) {
            this.window[ContexthubConstants.ANGULAR_STORE_SERVICE_REF] = {};
        }
        const angularStoreServiceRef = this.window[ContexthubConstants.ANGULAR_STORE_SERVICE_REF];
        if (angularStoreServiceRef) {
            angularStoreServiceRef[this.storeConfig.serviceName] = { service: this, zone: this._ngZone };
        }
    }
    getStore() {
        const contextHub = this.window[ContexthubConstants.CONTEXTHUB];
        if (contextHub === undefined || contextHub === null || contextHub?.getStore === null) {
            return null;
        }
        return contextHub.getStore?.(this.storeConfig.storeName);
    }
    handleEnrich(storeData) {
        try {
            return this.enrich(storeData);
        }
        catch (e) {
            if (this.storeConfig.storeModel?.enrich) {
                return this.storeConfig.storeModel.enrich(storeData);
            }
            return {};
        }
    }
    registerStoreEventHook() {
        const store = this.getStore();
        if (store === null) {
            return;
        }
        this.sendDataLayerEventOnStoreEvent(store, this.STORE_DATA_LOADED_CALL_LABEL, DirectCallLabelEnum.STORE_DATA_LOADED);
    }
    sendDataLayerEventOnStoreEvent(store, storeEvent, directCallLabel) {
        const triggerForPastEvents = true;
        store.eventing['once'](storeEvent + ':' + store.name, () => this.sendDataLayerStoreEvent('contexthub ' + storeEvent, directCallLabel, store), store.name + '_' + storeEvent, triggerForPastEvents);
    }
    sendDataLayerStoreEvent(eventName, directCallLabel, store) {
        const eventInfoData = this.dataLayerService.createEventInfo(eventName, EventTypeEnum.EVENT_TYPE_CH_STORE);
        const category = this.dataLayerService.createCategory(EventCategoryEnum.PRIMARY_CATEGORY_GENERAL);
        const attributes = {
            storeName: store.name,
        };
        this.dataLayerService.sendEvent({ eventInfo: eventInfoData, attributes, category, directCallLabel });
    }
};
ContextHubGenericStoreService = __decorate$1([
    __param(1, Inject('Window'))
], ContextHubGenericStoreService);

class CacheService {
    cache = {};
    get(key) {
        return this.cache[key];
    }
    add(key, response$) {
        this.cache[key] = response$.pipe(shareReplay({ bufferSize: 1, refCount: false }));
    }
    remove(key) {
        delete this.cache[key];
    }
    static ɵfac = function CacheService_Factory(t) { return new (t || CacheService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CacheService, factory: CacheService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CacheService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

var BrowserTypeEnum;
(function (BrowserTypeEnum) {
    BrowserTypeEnum[BrowserTypeEnum["EDGE"] = 0] = "EDGE";
    BrowserTypeEnum[BrowserTypeEnum["OPERA"] = 1] = "OPERA";
    BrowserTypeEnum[BrowserTypeEnum["CHROME"] = 2] = "CHROME";
    BrowserTypeEnum[BrowserTypeEnum["INTERNET_EXPLORER"] = 3] = "INTERNET_EXPLORER";
    BrowserTypeEnum[BrowserTypeEnum["FIREFOX"] = 4] = "FIREFOX";
    BrowserTypeEnum[BrowserTypeEnum["SAFARI"] = 5] = "SAFARI";
    BrowserTypeEnum[BrowserTypeEnum["UNKNOWN"] = 6] = "UNKNOWN";
})(BrowserTypeEnum || (BrowserTypeEnum = {}));

class ClientBrowserTypeService {
    static SUBSTRING_NOT_IN_STRING_DELIMETER = -1;
    clientBrowserType() {
        const agent = window.navigator.userAgent.toLowerCase();
        if (agent.indexOf('edge') > ClientBrowserTypeService.SUBSTRING_NOT_IN_STRING_DELIMETER) {
            return BrowserTypeEnum.EDGE;
        }
        else if (agent.indexOf('opr') > ClientBrowserTypeService.SUBSTRING_NOT_IN_STRING_DELIMETER && !!window['opr']) {
            return BrowserTypeEnum.OPERA;
        }
        else if (agent.indexOf('chrome') > ClientBrowserTypeService.SUBSTRING_NOT_IN_STRING_DELIMETER &&
            !!window['chrome']) {
            return BrowserTypeEnum.CHROME;
        }
        else if (agent.indexOf('trident') > ClientBrowserTypeService.SUBSTRING_NOT_IN_STRING_DELIMETER) {
            return BrowserTypeEnum.INTERNET_EXPLORER;
        }
        else if (agent.indexOf('firefox') > ClientBrowserTypeService.SUBSTRING_NOT_IN_STRING_DELIMETER) {
            return BrowserTypeEnum.FIREFOX;
        }
        else if (agent.indexOf('safari') > ClientBrowserTypeService.SUBSTRING_NOT_IN_STRING_DELIMETER) {
            return BrowserTypeEnum.SAFARI;
        }
        else {
            return BrowserTypeEnum.UNKNOWN;
        }
    }
    isClientUsingSafari() {
        return this.clientBrowserType() === BrowserTypeEnum.SAFARI;
    }
    static ɵfac = function ClientBrowserTypeService_Factory(t) { return new (t || ClientBrowserTypeService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ClientBrowserTypeService, factory: ClientBrowserTypeService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ClientBrowserTypeService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();

var CustomerCategoryEnum;
(function (CustomerCategoryEnum) {
    CustomerCategoryEnum["RESIDENTIAL"] = "RESIDENTIAL";
    CustomerCategoryEnum["BUSINESS"] = "BUSINESS";
    CustomerCategoryEnum["FLEET_PORTAL"] = "FLEET-PORTAL";
    CustomerCategoryEnum["BUSINESS_LINE"] = "Business";
    CustomerCategoryEnum["RESIDENTIAL_LINE"] = "Residential";
    CustomerCategoryEnum["ORPHAN"] = "ORPHAN USER";
    CustomerCategoryEnum["FLEET_MANAGER"] = "FLEET MANAGER";
    CustomerCategoryEnum["FLEET_USER"] = "FLEET USER";
    CustomerCategoryEnum["LEGACY"] = "LEGACY USER";
})(CustomerCategoryEnum || (CustomerCategoryEnum = {}));

var CustomerStatusEnum;
(function (CustomerStatusEnum) {
    CustomerStatusEnum["ACTIVE"] = "ACTIVE";
})(CustomerStatusEnum || (CustomerStatusEnum = {}));

var CustomerBrandEnum;
(function (CustomerBrandEnum) {
    CustomerBrandEnum["BRAND_TELENET"] = "TELENET";
    CustomerBrandEnum["BRAND_BASE"] = "BASE";
})(CustomerBrandEnum || (CustomerBrandEnum = {}));

var QueryParamEnum;
(function (QueryParamEnum) {
    QueryParamEnum["FLOW"] = "flow";
    QueryParamEnum["PGSTATUS"] = "pgstatus";
    QueryParamEnum["ITEM"] = "item";
    QueryParamEnum["PRODUCT_TYPE"] = "producttype";
    QueryParamEnum["SALES_ORDER_ID"] = "sid";
    QueryParamEnum["PRODUCT_IDENTIFIER"] = "pid";
    QueryParamEnum["STATUSES"] = "statuses";
    QueryParamEnum["INTENT"] = "intent";
    QueryParamEnum["SOURCE"] = "source";
    QueryParamEnum["SOURCE_NBA"] = "nba";
    QueryParamEnum["SOURCE_ITS_ME"] = "itsme";
    QueryParamEnum["SOURCE_EMAIL"] = "email";
    QueryParamEnum["VAL"] = "val";
    QueryParamEnum["SO_TOKEN"] = "token";
    QueryParamEnum["JWT_TOKEN"] = "jwt";
    QueryParamEnum["FLOW_MARKETING"] = "marketing";
    QueryParamEnum["IDENTIFIER"] = "identifier";
    QueryParamEnum["STEP"] = "step";
    QueryParamEnum["INTENT_SUFFIX"] = "intentsuffix";
    QueryParamEnum["ACTION"] = "action";
    QueryParamEnum["INSTALLATION_LOCATION_ID"] = "installationLocationId";
    QueryParamEnum["SDATA"] = "sdata";
})(QueryParamEnum || (QueryParamEnum = {}));

var LanguageEnum;
(function (LanguageEnum) {
    LanguageEnum["NL"] = "nl";
    LanguageEnum["FR"] = "fr";
    LanguageEnum["EN"] = "en";
})(LanguageEnum || (LanguageEnum = {}));

class LanguageService {
    window;
    constructor(window) {
        this.window = window;
    }
    language;
    getLanguage() {
        let lang = this.window.document.documentElement.lang;
        lang = lang && lang.toLowerCase();
        if (!this.language && lang) {
            switch (true) {
                case lang.includes(LanguageEnum.FR):
                    return LanguageEnum.FR;
                case lang.includes(LanguageEnum.EN):
                    return LanguageEnum.EN;
                case lang.includes(LanguageEnum.NL):
                default:
                    return LanguageEnum.NL;
            }
        }
        else {
            return LanguageEnum.NL;
        }
    }
    getLocale() {
        switch (this.getLanguage()) {
            case LanguageEnum.FR:
                return localeFR;
            case LanguageEnum.EN:
                return localeEN;
            case LanguageEnum.NL:
            default:
                return localeNL;
        }
    }
    getLocaleString() {
        switch (this.getLanguage()) {
            case LanguageEnum.FR:
                return 'fr-BE';
            case LanguageEnum.EN:
                return 'en-BE';
            case LanguageEnum.NL:
            default:
                return 'nl-BE';
        }
    }
    static ɵfac = function LanguageService_Factory(t) { return new (t || LanguageService)(i0.ɵɵinject('Window')); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LanguageService, factory: LanguageService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LanguageService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: Window, decorators: [{
                type: Inject,
                args: ['Window']
            }] }], null); })();

class NormalizationService {
    normalizeKey(key) {
        if (key) {
            return key
                .replace(/ /g, '-')
                .replace(/\./g, '-')
                .replace(/[^0-9a-zA-Z_-]/g, '')
                .toLowerCase();
        }
        return '';
    }
    normalizeList(list) {
        if (list?.length) {
            return list.map((item) => this.normalizeKey(item));
        }
        return [];
    }
    static ɵfac = function NormalizationService_Factory(t) { return new (t || NormalizationService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NormalizationService, factory: NormalizationService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NormalizationService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

class PathCategorisationService {
    window;
    constructor(window) {
        this.window = window;
    }
    getPostfixVariables() {
        return {
            BRAND_POSTFIX: this.getBrandPostfix(),
            CATEGORY_POSTFIX: this.getCategoryPostfix(),
            BRAND_CATEGORY_POSTFIX: this.getBrandPostfix() + this.getCategoryPostfix(),
        };
    }
    getBrandPostfix() {
        const brandSuffix = this.getBrandLabelSuffix();
        return brandSuffix ? `.${brandSuffix}` : '';
    }
    getCategoryPostfix() {
        const categoryLabelSuffix = this.getValueFromWindowByProperty('categoryLabelSuffix');
        if (categoryLabelSuffix) {
            return `.${categoryLabelSuffix}`;
        }
        if (window.location.pathname.indexOf('/business/') !== -1) {
            return '.tfb';
        }
        return '';
    }
    getBrandLabelSuffix() {
        return this.getValueFromWindowByProperty('brandLabelSuffix');
    }
    getValueFromWindowByProperty(property) {
        return this.window['TelenetGroup']?.pathCategorisation?.[property];
    }
    getLabelSuffix() {
        return this.getValueFromWindowByProperty('labelSuffix');
    }
    getCustomerBrand() {
        return this.getValueFromWindowByProperty('customerBrand');
    }
    getCustomerCategory() {
        return this.getValueFromWindowByProperty('customerCategory');
    }
    isCustomerOfBrandTypes(customerBrandEnums = []) {
        return customerBrandEnums.includes(this.getCustomerBrand());
    }
    isCustomerOfBrand(customerBrand) {
        return this.getCustomerBrand() === customerBrand;
    }
    isCustomerOfType(type) {
        return this.getCustomerCategory()?.toUpperCase() === type.toUpperCase();
    }
    isBrandBaseAndCategoryResidential() {
        return (this.getCustomerBrand() === CustomerBrandEnum.BRAND_BASE &&
            this.isCustomerOfType(CustomerCategoryEnum.RESIDENTIAL));
    }
    isBrandBaseAndCategoryBusiness() {
        return (this.getCustomerBrand() === CustomerBrandEnum.BRAND_BASE && this.isCustomerOfType(CustomerCategoryEnum.BUSINESS));
    }
    isBrandTelenetAndCategoryResidential() {
        return (this.getCustomerBrand() === CustomerBrandEnum.BRAND_TELENET &&
            this.isCustomerOfType(CustomerCategoryEnum.RESIDENTIAL));
    }
    isBrandTelenetAndCategoryBusiness() {
        return (this.getCustomerBrand() === CustomerBrandEnum.BRAND_TELENET &&
            this.isCustomerOfType(CustomerCategoryEnum.BUSINESS));
    }
    isBrandTelenetAndCategoryFleetPortal() {
        return (this.getCustomerBrand() === CustomerBrandEnum.BRAND_TELENET &&
            this.isCustomerOfType(CustomerCategoryEnum.FLEET_PORTAL));
    }
    isBrandTelenetAndCategoryResidentialOrFleet() {
        return this.isBrandTelenetAndCategoryResidential() || this.isBrandTelenetAndCategoryFleetPortal();
    }
    isBrandBaseAndCategoryResidentialOrBusiness() {
        return this.isBrandBaseAndCategoryResidential() || this.isBrandBaseAndCategoryBusiness();
    }
    static ɵfac = function PathCategorisationService_Factory(t) { return new (t || PathCategorisationService)(i0.ɵɵinject('Window')); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PathCategorisationService, factory: PathCategorisationService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PathCategorisationService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: Window, decorators: [{
                type: Inject,
                args: ['Window']
            }] }], null); })();

class UrlService {
    window;
    dataLayerService;
    clientBrowserTypeService;
    constructor(window, dataLayerService, clientBrowserTypeService) {
        this.window = window;
        this.dataLayerService = dataLayerService;
        this.clientBrowserTypeService = clientBrowserTypeService;
    }
    getCurrentUrl() {
        if (this.window.location && this.window.location.href) {
            return this.window.location.href;
        }
        return '';
    }
    openWindow(url) {
        this.window.open(url, '_self');
    }
    openNewTab(url) {
        if (this.clientBrowserTypeService.isClientUsingSafari()) {
            this.openNewTabForSafari(url);
        }
        else {
            this.window.open(url, '_blank');
        }
    }
    reloadWindow() {
        this.window.location.reload();
    }
    getParameterByName(name) {
        const match = RegExp('[?&]' + name + '=([^&]*)').exec(this.window.location.search);
        return match && decodeURIComponent(match[1]);
    }
    getParamsValueFromUrl(url, paramKey) {
        const match = RegExp('[?&]' + paramKey + '=([^&]*)').exec(url);
        return match && decodeURIComponent(match[1]);
    }
    getUrlWithParams(url, params) {
        const keyValues = map(params, (param) => {
            return param.getKeyValue();
        });
        return url + '?' + keyValues.join('&');
    }
    redirectTo(url) {
        const promiseArray = this.dataLayerService.getAnalyticsPromises();
        if (promiseArray?.length === 0) {
            this.window.location.href = url;
        }
        else {
            forkJoin(promiseArray)
                .pipe(timeout(5000) // timeout after 5 seconds
            )
                .subscribe({
                next: () => {
                    this.window.location.href = url;
                },
                error: () => {
                    // This block will be executed if the timeout occurs, this way we can ensure that the user is redirected even if the analytics are not loaded
                    console.warn("Timeout: Datalayer promises couldn't be resolved. Redirecting to the url");
                    this.window.location.href = url;
                },
            });
        }
    }
    doHistoryBack() {
        if (this.window.history) {
            this.window.history.back();
        }
    }
    getRequestParametersAsString() {
        if (this.window.location && this.window.location.search) {
            return this.window.location.search;
        }
        return '';
    }
    getRequestParameters() {
        const obj = {};
        if (this.window.location && this.window.location.search) {
            const pairs = this.window.location.search.substring(1).split('&');
            let keyValue = [];
            pairs.forEach((pair) => {
                if (pair !== '') {
                    keyValue = pair.split('=');
                    obj[decodeURIComponent(keyValue[0])] = decodeURIComponent(keyValue[1]);
                }
            });
        }
        return obj;
    }
    getRequestParameterOrDefault(key, defaultValue) {
        return (find(this.getRequestParameters(), function (_paramValue, paramKey) {
            return paramKey.toLowerCase() === key.toLowerCase();
        }) || defaultValue);
    }
    getRequestParamValue(key, defaultValue) {
        return this.getRequestParameterOrDefault(key, defaultValue);
    }
    requestParamsContains(key) {
        return this.getRequestParameters()[key] !== undefined;
    }
    getHashParameter(key) {
        const hashParam = this.getHashParameters()[key];
        if (hashParam !== undefined) {
            return hashParam.value;
        }
        return null;
    }
    getUrlWithOnlyHashParam() {
        if (this.window && this.window.location && this.window.location.hash) {
            return this.window.location.hash;
        }
        return '';
    }
    removeURLParameters(removeParams) {
        const deleteRegex = new RegExp(removeParams.join('=|') + '=');
        const params = this.window.location.search.slice(1).split('&');
        const search = [];
        for (const value of params) {
            if (value.length > 0 && !deleteRegex.test(value)) {
                search.push(value);
            }
        }
        const path = this.window.location.pathname + (search.length ? '?' + search.join('&') : '') + this.window.location.hash;
        this.window.history.replaceState({}, this.window.document.title, path);
    }
    removeParametersFromUrl(url, parameters) {
        if (!Array.isArray(parameters)) {
            parameters = [parameters];
        }
        if (!url?.startsWith('http')) {
            return url;
        }
        const urlObject = new URL(url);
        const params = urlObject.searchParams;
        parameters.forEach((param) => {
            params.delete(param);
        });
        return urlObject.href;
    }
    replaceURLParameters(data) {
        const params = this.window.location.search.slice(1).split('&');
        const search = [];
        for (const value of params) {
            if (value.length > 0) {
                const split = value.split('=');
                const key = decodeURIComponent(split[0]);
                const newValue = data.find((d) => d.key === key)?.value ?? decodeURIComponent(split[1]);
                search.push(`${encodeURIComponent(key)}=${encodeURIComponent(newValue)}`);
            }
        }
        data
            .filter((d) => !params.find((p) => decodeURIComponent(p.split('=')[0]) === d.key))
            .forEach((d) => search.push(`${encodeURIComponent(d.key)}=${encodeURIComponent(d.value)}`));
        const path = this.window.location.pathname + (search.length ? '?' + search.join('&') : '') + this.window.location.hash;
        this.window.history.replaceState({}, this.window.document.title, path);
    }
    fromSource(value) {
        let source = this.getRequestParamValue(QueryParamEnum.SOURCE, '');
        source = source && source.toUpperCase();
        return source === value.toUpperCase();
    }
    getHashParameters() {
        if (this.window && this.window.location && this.window.location.hash) {
            const hash = this.window.location.hash.replace(/^#/, '');
            if (hash !== '') {
                const pairs = decodeURI(hash).split('/');
                return keyBy(map(pairs, (pair) => {
                    const keyValue = pair.split('=');
                    return {
                        key: keyValue[0],
                        value: keyValue[1],
                    };
                }), (p) => p.key);
            }
        }
        return [];
    }
    buildUrlWithParams(url, params) {
        const paramList = [];
        params.forEach((value, key) => {
            paramList.push(`${key}=${value}`);
        });
        return url + (paramList.length > 0 ? `?${paramList.join('&')}` : '');
    }
    buildUrlWithHashParams(url, params) {
        const paramList = [];
        params.forEach((value, key) => {
            paramList.push(`${key}=${value}`);
        });
        return url + (paramList.length > 0 ? '/#/' + `${paramList.join('/')}` : '');
    }
    getOrigin() {
        return this.window.location.origin;
    }
    getActionParametersRemovedURL() {
        const paramArray = [];
        const params = this.getCurrentUrl().split('&');
        for (const value of params) {
            if (value.length > 0 && value !== 'action=register') {
                paramArray.push(value);
            }
        }
        return paramArray.join('&');
    }
    getParameters(urlString) {
        const url = new URL(urlString);
        const paramMap = new Map();
        for (const [key, value] of url.searchParams.entries()) {
            paramMap.set(key, decodeURIComponent(value));
        }
        return paramMap;
    }
    openNewTabForSafari(url) {
        const anchorElement = this.window.document.createElement('a');
        anchorElement.target = '_blank';
        anchorElement.href = url;
        const event = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true,
            detail: 0,
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            ctrlKey: false,
            altKey: false,
            shiftKey: false,
            metaKey: false,
            button: 0,
            relatedTarget: null,
        });
        anchorElement.dispatchEvent(event);
    }
    static ɵfac = function UrlService_Factory(t) { return new (t || UrlService)(i0.ɵɵinject('Window'), i0.ɵɵinject(i1.DataLayerService), i0.ɵɵinject(ClientBrowserTypeService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: UrlService, factory: UrlService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UrlService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: Window, decorators: [{
                type: Inject,
                args: ['Window']
            }] }, { type: i1.DataLayerService }, { type: ClientBrowserTypeService }], null); })();

class UrlParam {
    key;
    value;
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    getKeyValue() {
        return this.key + '=' + this.value;
    }
}

const windowFactory = () => ({
    location: {
        href: 'http://testurl.com',
        hash: '#foo',
        pathname: '',
        search: '?page=1&mode=b',
        assign: '',
    },
    document: {
        title: 'Test bed',
        documentElement: {
            lang: '',
        },
        createElement: function () {
            return {
                target: '',
                href: '',
                dispatchEvent: new Function(),
            };
        },
        createEvent: function () {
            return {
                initMouseEvent: new Function(),
            };
        },
    },
    history: {
        back: () => undefined,
        replaceState: () => undefined,
    },
    grecaptcha: {
        ready: (callback) => {
            return callback();
        },
        execute: function () {
            return new Promise((resolve) => {
                resolve('unique-grecaptcha-token');
            });
        },
    },
    open: () => window,
    ContextHub: {
        getStore: function () {
            return {
                eventing: {
                    once: function () {
                        // empty method
                    },
                },
            };
        },
        get: function (storeName) {
            if (storeName === 'internal-employee') {
                return {
                    uid: 'Daniel',
                    mail: 'daniel@daniel.com',
                    roles: 'genius-care-advisor,genius-sales-advisor',
                };
            }
            else {
                return undefined;
            }
        },
    },
    telenetgroupLoader: {
        showPageLoader: function (_option) {
            // empty
        },
        hidePageLoader: function () {
            // empty
        },
    },
});

class JsonUrlService {
    window;
    static JSON_URL = 'JsonUrl';
    libng;
    constructor(window) {
        this.window = window;
        this.libng =
            this.window[JsonUrlService.JSON_URL] &&
                this.window[JsonUrlService.JSON_URL]('lzma');
    }
    compress(object) {
        return from(this.libng.compress(object));
    }
    decompress(compressedString) {
        return from(this.libng.decompress(compressedString));
    }
    static ɵfac = function JsonUrlService_Factory(t) { return new (t || JsonUrlService)(i0.ɵɵinject('Window')); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: JsonUrlService, factory: JsonUrlService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(JsonUrlService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: Window, decorators: [{
                type: Inject,
                args: ['Window']
            }] }], null); })();

var DeviceTypesEnum;
(function (DeviceTypesEnum) {
    DeviceTypesEnum["COMPUTER"] = "computer";
    DeviceTypesEnum["MOBILE"] = "mobile";
    DeviceTypesEnum["TABLET"] = "tablet";
})(DeviceTypesEnum || (DeviceTypesEnum = {}));
var BreakpointsEnum;
(function (BreakpointsEnum) {
    BreakpointsEnum["XS"] = "(max-width: 20em)";
    BreakpointsEnum["SM"] = "(max-width: 36em)";
    BreakpointsEnum["MD"] = "(max-width: 48.0625em)";
    BreakpointsEnum["LG"] = "(max-width: 74.5em)";
    BreakpointsEnum["XL"] = "(max-width: 90em)";
    BreakpointsEnum["XXL"] = "(max-width: 104.688em)";
})(BreakpointsEnum || (BreakpointsEnum = {}));

class MediaQueryService {
    deviceService;
    window;
    constructor(deviceService, window) {
        this.deviceService = deviceService;
        this.window = window;
    }
    getDeviceName() {
        switch (true) {
            case this.deviceService.isMobile():
                return DeviceTypesEnum.MOBILE;
            case this.deviceService.isTablet():
                return DeviceTypesEnum.TABLET;
            case this.deviceService.isDesktop():
                return DeviceTypesEnum.COMPUTER;
            default:
                return DeviceTypesEnum.COMPUTER;
        }
    }
    getDeviceInfo() {
        return this.deviceService.getDeviceInfo();
    }
    isLandscapeMode() {
        return this.window.innerHeight < this.window.innerWidth;
    }
    isMobile() {
        return this.deviceService.isMobile();
    }
    isTablet() {
        return this.deviceService.isTablet();
    }
    isDesktop() {
        return this.deviceService.isDesktop();
    }
    isXsScreen() {
        return this.window.matchMedia(BreakpointsEnum.XS).matches;
    }
    isSmScreen() {
        return this.window.matchMedia(BreakpointsEnum.SM).matches;
    }
    isMdScreen() {
        return this.window.matchMedia(BreakpointsEnum.MD).matches;
    }
    isLgScreen() {
        return this.window.matchMedia(BreakpointsEnum.LG).matches;
    }
    isXlScreen() {
        return this.window.matchMedia(BreakpointsEnum.XL).matches;
    }
    isXxlScreen() {
        return this.window.matchMedia(BreakpointsEnum.XXL).matches;
    }
    static ɵfac = function MediaQueryService_Factory(t) { return new (t || MediaQueryService)(i0.ɵɵinject(i1$1.DeviceDetectorService), i0.ɵɵinject('Window')); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: MediaQueryService, factory: MediaQueryService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MediaQueryService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1$1.DeviceDetectorService }, { type: Window, decorators: [{
                type: Inject,
                args: ['Window']
            }] }], null); })();

const DEBUG_CONFIG_TOKEN = new InjectionToken('debugConfig');
class ModuleFederatedDebugInfoService {
    debugConfig;
    route = inject(ActivatedRoute);
    isDebug$ = this.route.queryParams.pipe(map$1((queryParams) => queryParams['debug'] === 'true'));
    sharedLibrariesBs$ = new BehaviorSubject(null);
    sharedLibraries$ = this.sharedLibrariesBs$.pipe(filter((value) => !!value));
    enrichLibInfo = (debugConfig) => {
        const sharedLibraries = debugConfig?.sharedLibsFunction()?.['sharedLibraries'];
        return Object.keys(sharedLibraries || {}).map((key) => ({
            [key]: {
                ...sharedLibraries?.[key],
                version: this.debugConfig?.packageLockFunction()?.['dependencies'][key]?.['version'] ??
                    sharedLibraries?.[key]?.version,
            },
        }));
    };
    constructor(debugConfig) {
        this.debugConfig = debugConfig;
        const sharedLibConfigs = this.enrichLibInfo(debugConfig);
        this.sharedLibrariesBs$.next(sharedLibConfigs);
    }
    load() {
        this.isDebug$
            .pipe(filter((isDebug) => isDebug), mergeMap(() => this.sharedLibraries$), tap((sharedLibraries) => console.debug('SHARED_LIBRARIES', sharedLibraries)), take(1))
            .subscribe();
    }
    static ɵfac = function ModuleFederatedDebugInfoService_Factory(t) { return new (t || ModuleFederatedDebugInfoService)(i0.ɵɵinject(DEBUG_CONFIG_TOKEN, 8)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ModuleFederatedDebugInfoService, factory: ModuleFederatedDebugInfoService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModuleFederatedDebugInfoService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: undefined, decorators: [{
                type: Inject,
                args: [DEBUG_CONFIG_TOKEN]
            }, {
                type: Optional
            }] }], null); })();

function ModuleFederatedDebugInfoComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "h3");
    i0.ɵɵtext(2, "Shared libraries");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 2);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "json");
    i0.ɵɵpipe(6, "async");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 1, i0.ɵɵpipeBind1(6, 3, ctx_r0.sharedLibraries$)));
} }
class ModuleFederatedDebugInfoComponent {
    debugInfoService = inject(ModuleFederatedDebugInfoService);
    isDebug$ = this.debugInfoService.isDebug$;
    sharedLibraries$ = this.debugInfoService.sharedLibraries$;
    static ɵfac = function ModuleFederatedDebugInfoComponent_Factory(t) { return new (t || ModuleFederatedDebugInfoComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ModuleFederatedDebugInfoComponent, selectors: [["app-debug-info"]], decls: 2, vars: 3, consts: [["class", "horizontal-center-align flex-direction--column align-items--center background-dark-brown color-white border-radius__all--l p--m", 4, "ngIf"], [1, "horizontal-center-align", "flex-direction--column", "align-items--center", "background-dark-brown", "color-white", "border-radius__all--l", "p--m"], [1, "pre"]], template: function ModuleFederatedDebugInfoComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ModuleFederatedDebugInfoComponent_div_0_Template, 7, 5, "div", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.isDebug$));
        } }, dependencies: [i1$2.NgIf, i1$2.AsyncPipe, i1$2.JsonPipe], styles: [".pre[_ngcontent-%COMP%]{white-space:pre}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModuleFederatedDebugInfoComponent, [{
        type: Component,
        args: [{ selector: 'app-debug-info', template: ` <div
    *ngIf="isDebug$ | async"
    class="horizontal-center-align flex-direction--column align-items--center background-dark-brown color-white border-radius__all--l p--m">
    <h3>Shared libraries</h3>
    <p class="pre">{{ sharedLibraries$ | async | json }}</p>
  </div>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".pre{white-space:pre}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ModuleFederatedDebugInfoComponent, { className: "ModuleFederatedDebugInfoComponent" }); })();

class ModuleFederatedDebugInfoModule {
    static forRoot(config) {
        return {
            ngModule: ModuleFederatedDebugInfoModule,
            providers: [
                {
                    provide: DEBUG_CONFIG_TOKEN,
                    useValue: config,
                },
                ModuleFederatedDebugInfoService,
                {
                    provide: APP_INITIALIZER,
                    deps: [ModuleFederatedDebugInfoService],
                    multi: true,
                    useFactory: (service) => () => initModuleFederatedDebugInfoService(service),
                },
            ],
        };
    }
    static ɵfac = function ModuleFederatedDebugInfoModule_Factory(t) { return new (t || ModuleFederatedDebugInfoModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ModuleFederatedDebugInfoModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [ModuleFederatedDebugInfoService], imports: [CommonModule, RouterModule.forRoot([])] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModuleFederatedDebugInfoModule, [{
        type: NgModule,
        args: [{
                declarations: [ModuleFederatedDebugInfoComponent],
                imports: [CommonModule, RouterModule.forRoot([])],
                providers: [ModuleFederatedDebugInfoService],
                exports: [ModuleFederatedDebugInfoComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ModuleFederatedDebugInfoModule, { declarations: [ModuleFederatedDebugInfoComponent], imports: [CommonModule, i1$3.RouterModule], exports: [ModuleFederatedDebugInfoComponent] }); })();
function initModuleFederatedDebugInfoService(service) {
    // Promise is needed for the useFactory
    return new Promise((resolve) => {
        service.load();
        resolve();
    });
}

class AbstractBaseComponent {
    unsubscribe$ = new Subject();
    onDestroy() {
        // onDestroy
    }
    ngOnDestroy() {
        this.unsubscribe$.complete();
        this.onDestroy();
    }
    obs(obs) {
        return obs.pipe(takeUntil(this.unsubscribe$));
    }
    static ɵfac = function AbstractBaseComponent_Factory(t) { return new (t || AbstractBaseComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AbstractBaseComponent, selectors: [["app-abstract-base"]], decls: 0, vars: 0, template: function AbstractBaseComponent_Template(rf, ctx) { }, encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AbstractBaseComponent, [{
        type: Component,
        args: [{
                selector: 'app-abstract-base',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AbstractBaseComponent, { className: "AbstractBaseComponent" }); })();

const TIMEOUT = 800;
class AbstractCardComponent extends AbstractBaseComponent {
    elementRef;
    document;
    constructor(elementRef, document) {
        super();
        this.elementRef = elementRef;
        this.document = document;
    }
    hideCard() {
        setTimeout(() => {
            this.parentCardElement?.dispatchEvent(new CustomEvent('card:hide', { bubbles: true }));
        }, TIMEOUT);
    }
    showSimpleCard() {
        setTimeout(() => {
            this.parentCardElement?.dispatchEvent(new CustomEvent('card:show-simple-view', { bubbles: true }));
        }, TIMEOUT);
    }
    hideSimpleCard() {
        setTimeout(() => {
            this.parentCardElement?.dispatchEvent(new CustomEvent('card:hide-simple-view', { bubbles: true }));
        }, TIMEOUT);
    }
    showCardWithData(data) {
        setTimeout(() => {
            this.parentCardElement?.dispatchEvent(new CustomEvent('card:show-data', { bubbles: true, detail: data }));
        }, TIMEOUT);
    }
    updateCardTarget(url) {
        setTimeout(() => {
            this.parentCardElement?.dispatchEvent(new CustomEvent('card:updateTarget', { bubbles: true, detail: url }));
        }, TIMEOUT);
    }
    processClick(url) {
        setTimeout(() => {
            this.parentCardElement?.dispatchEvent(new CustomEvent('card:click', { bubbles: true, detail: { url: url } }));
        }, TIMEOUT);
    }
    get parentCardElement() {
        const cardElement = this.elementRef.nativeElement;
        return (cardElement?.closest('[data-tg-cmp-dashboard-card-instance-id]') ||
            cardElement?.closest('[data-component-instance-id]'));
    }
}

class LoaderData {
    isAPIExecutionInProgress;
    dataCapturedOn;
    constructor(status) {
        this.isAPIExecutionInProgress = status;
        this.dataCapturedOn = new Date().getTime();
    }
}

class LoaderService {
    skipUrls = ['/authrefresh', '/?p=eligibleproducts', '/search/api/'];
    loadingStatus = new BehaviorSubject(new LoaderData(false));
    start() {
        const _loaderData = new LoaderData(true);
        this.loadingStatus.next(_loaderData);
    }
    stop() {
        const _loaderData = new LoaderData(false);
        this.loadingStatus.next(_loaderData);
    }
    shouldDisableLoader(url) {
        return this.skipUrls.some((skipUrl) => new RegExp(skipUrl).test(url)) || url.includes('disabledLoader=true');
    }
    static ɵfac = function LoaderService_Factory(t) { return new (t || LoaderService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LoaderService, factory: LoaderService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoaderService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let LoaderComponent = class LoaderComponent {
    loaderService;
    translate;
    pathCategorisationService;
    window;
    pageType = '';
    startByDefault = false;
    enableLoader = false;
    enableMask = false;
    pageLoaderID = 'page-loader';
    loaderObj;
    messages;
    constructor(loaderService, translate, pathCategorisationService, window) {
        this.loaderService = loaderService;
        this.translate = translate;
        this.pathCategorisationService = pathCategorisationService;
        this.window = window;
        this.loaderObj = this.window?.['telenetgroupLoader'];
        this.messages = [
            this.translate.instant('ng.loader.message.sm'),
            this.translate.instant('ng.loader.message.lg'),
            this.translate.instant('ng.loader.message.xlg'),
        ];
    }
    ngAfterViewInit() {
        if (this.loaderObj) {
            if (this.startByDefault) {
                this.showPageLoader();
            }
            this.loaderService.loadingStatus
                .pipe(untilDestroyed(this), map$1((loaderData) => loaderData.isAPIExecutionInProgress))
                .subscribe((isAPIExecutionInProgress) => {
                if (isAPIExecutionInProgress) {
                    this.showPageLoader();
                }
                else {
                    this.hidePageLoader();
                }
            });
        }
        else {
            console.error('Loader Plugin not initialised');
        }
    }
    showPageLoader() {
        const brand = this.pathCategorisationService.getCustomerBrand();
        const options = {
            enable_loader: this.enableLoader,
            enable_mask: this.enableMask,
            loader_message: this.messages,
            brand: brand,
            selector: this.pageLoaderID,
        };
        this.loaderObj.showPageLoader(options);
    }
    hidePageLoader() {
        setTimeout(() => {
            this.loaderObj.hidePageLoader();
        }, 250);
    }
    static ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(i0.ɵɵdirectiveInject(LoaderService), i0.ɵɵdirectiveInject(i2.TranslateService), i0.ɵɵdirectiveInject(PathCategorisationService), i0.ɵɵdirectiveInject('Window')); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoaderComponent, selectors: [["app-loader"]], inputs: { pageType: "pageType", startByDefault: "startByDefault", enableLoader: "enableLoader", enableMask: "enableMask" }, decls: 0, vars: 0, template: function LoaderComponent_Template(rf, ctx) { }, encapsulation: 2, changeDetection: 0 });
};
LoaderComponent = __decorate([
    UntilDestroy()
], LoaderComponent);
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoaderComponent, [{
        type: Component,
        args: [{
                selector: 'app-loader',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], () => [{ type: LoaderService }, { type: i2.TranslateService }, { type: PathCategorisationService }, { type: Window, decorators: [{
                type: Inject,
                args: ['Window']
            }] }], { pageType: [{
            type: Input
        }], startByDefault: [{
            type: Input
        }], enableLoader: [{
            type: Input
        }], enableMask: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LoaderComponent, { className: "LoaderComponent" }); })();

var LoaderTypeEnum;
(function (LoaderTypeEnum) {
    LoaderTypeEnum["DISABLE"] = "disabled";
    LoaderTypeEnum["BAR_SPINNER"] = "barSpinner";
    LoaderTypeEnum["SNAKE"] = "snake";
    LoaderTypeEnum["ORBITAL"] = "orbital";
})(LoaderTypeEnum || (LoaderTypeEnum = {}));

class LoaderModule {
    static ɵfac = function LoaderModule_Factory(t) { return new (t || LoaderModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: LoaderModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, TranslateModule] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoaderModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, TranslateModule],
                declarations: [LoaderComponent],
                exports: [LoaderComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LoaderModule, { declarations: [LoaderComponent], imports: [CommonModule, TranslateModule], exports: [LoaderComponent] }); })();

class AssetService {
    static imagePaths = {
        SALES: '/components/sales/nc/sales-checkout/media/',
        HARDWARE_CHECKOUT: '/content/dam/www-telenet-touch/default/images/hardware-checkout/',
        MOVE: '/components/care/administration/cafe/move/media/',
        CHANGE_FLAVOUR: '/components/sales/cafe/change-flavour/media/',
        CONNECT_FIVE: '/components/sales/cafe/connect-five/media/',
        PRODUCT_DASHBOARD: '/components/sales/cafe/product-dashboard/media/',
        TIP: '/components/tip/nc/media/',
        INTENT_FINDER: '/components/navigation/common/intent-finder/media/',
        CONTACT_SCHEDULER: '/components/general/common/contact-scheduler/media/',
        FLEET_HARDWARE: '/components/fleet/hardware/nc/media/',
        FLEET_PROFILE: '/components/fleet/create-profile/nc/media/',
        DWN_MOVE_FLOW: '/components/care/administration/nc/move-flow/media/',
        SELF_INSTALL: '/components/care/administration/nc/self-install/media/',
        FLEET_REMOVE_OPTIONS: '/components/fleet/product/nc/lineremoveoptions/media/',
        FLEET_ADD_OPTIONS: '/components/fleet/product/nc/lineaddoptions/media/',
        FLEET_LINE_CHANGE_TARIFF_PLAN: '/components/fleet/product/nc/linechangetariffplan/media/',
        MANAGE_EASY_SWITCH: '/components/care/administration/nc/manage-easy-switch/media/',
        CENTRAL_LOGIN: '/components/common/central-login/media/',
        DEFAULT_PROFILE_PIC: '/components/general/common/telenet-login/media/',
        FLEET_LINE_NAVIGATION_LIST: '/components/fleet/sim-swap/nc/line-navigation-list/media/',
        IN_HOME_CONNECTIVITY: '/components/sales/nc/in-home-connectivity/media/',
        FLEET_ACCOUNT: '/components/fleet/account/nc/media/',
        FLEET_SWITCH_LINE: '/components/fleet/contact/switch-line/nc/media/',
        ONLINE_PAYMENT: '/components/sales/online-payment/media/',
        FPB: '/components/fpb/search-contacts/nc/media/',
        STORE_FINDER: '/components/general/common/store-finder/media/',
        FTTH: '/content/dam/www-telenet-bus/nl/producten/ftth/',
    };
    static getImagePath(moduleName, imageName, customerBrand) {
        const basePath = AssetService.imagePaths[moduleName] || '';
        const brand = customerBrand ? customerBrand.toLocaleLowerCase().concat('/') : '';
        return basePath + brand + imageName;
    }
    static ɵfac = function AssetService_Factory(t) { return new (t || AssetService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AssetService, factory: AssetService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AssetService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

class ImageSrcPathDirective {
    el;
    imageBasePath;
    override = false;
    src = '';
    constructor(el, imageBasePath) {
        this.el = el;
        this.imageBasePath = imageBasePath;
    }
    ngOnChanges(changes) {
        if (changes['src']?.isFirstChange()) {
            const imagePath = changes['src'].currentValue;
            if (this.el.nativeElement.tagName !== 'IMG' || this.override) {
                this.el.nativeElement.src = imagePath;
                return;
            }
            const imageBasePathWithoutSlash = this.imageBasePath.endsWith('/')
                ? this.imageBasePath.slice(0, -1)
                : this.imageBasePath;
            const imagePathWithoutLeadingSlash = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
            this.el.nativeElement.src = `${imageBasePathWithoutSlash}/${imagePathWithoutLeadingSlash}`;
        }
    }
    static ɵfac = function ImageSrcPathDirective_Factory(t) { return new (t || ImageSrcPathDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject('IMAGE_BASE_PATH')); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ImageSrcPathDirective, selectors: [["", "src", ""]], inputs: { override: "override", src: "src" }, features: [i0.ɵɵNgOnChangesFeature] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ImageSrcPathDirective, [{
        type: Directive,
        args: [{
                selector: '[src]',
            }]
    }], () => [{ type: i0.ElementRef }, { type: undefined, decorators: [{
                type: Inject,
                args: ['IMAGE_BASE_PATH']
            }] }], { override: [{
            type: Input
        }], src: [{
            type: Input
        }] }); })();

class ImageSrcPathModule {
    static forRoot(imagePath) {
        return {
            ngModule: ImageSrcPathModule,
            providers: [{ provide: 'IMAGE_BASE_PATH', useValue: imagePath }],
        };
    }
    static ɵfac = function ImageSrcPathModule_Factory(t) { return new (t || ImageSrcPathModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ImageSrcPathModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({});
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ImageSrcPathModule, [{
        type: NgModule,
        args: [{
                declarations: [ImageSrcPathDirective],
                imports: [],
                providers: [],
                exports: [ImageSrcPathDirective],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ImageSrcPathModule, { declarations: [ImageSrcPathDirective], exports: [ImageSrcPathDirective] }); })();

class BrandImageDirective {
    el;
    isTelenet = false;
    img = '';
    telenetImg = '';
    baseImg = '';
    constructor(el) {
        this.el = el;
    }
    ngOnChanges() {
        const image = this.getImageSrcSet();
        if (this.el.nativeElement.tagName === 'WINK-IMG') {
            this.el.nativeElement.setAttribute('src-desktop', image.desktop);
            this.el.nativeElement.setAttribute('src-mobile', image.mobile);
            this.el.nativeElement.setAttribute('src-tablet', image.tablet);
        }
        if (this.el.nativeElement.tagName === 'IMG') {
            this.el.nativeElement.setAttribute('src', image.desktop);
        }
    }
    get image() {
        if (this.isTelenet && this.telenetImg) {
            return this.telenetImg;
        }
        if (!this.isTelenet && this.baseImg) {
            return this.baseImg;
        }
        return this.img;
    }
    getImageSrcSet() {
        if (typeof this.image === 'string') {
            const image = this.image;
            return {
                desktop: image,
                tablet: image,
                mobile: image,
            };
        }
        else {
            const image = this.image;
            return {
                desktop: image.desktop,
                mobile: image.mobile,
                tablet: image.tablet,
            };
        }
    }
    static ɵfac = function BrandImageDirective_Factory(t) { return new (t || BrandImageDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: BrandImageDirective, selectors: [["", "brandImage", ""]], inputs: { isTelenet: "isTelenet", img: "img", telenetImg: "telenetImg", baseImg: "baseImg" }, standalone: true, features: [i0.ɵɵNgOnChangesFeature] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BrandImageDirective, [{
        type: Directive,
        args: [{
                selector: '[brandImage]',
                standalone: true,
            }]
    }], () => [{ type: i0.ElementRef }], { isTelenet: [{
            type: Input
        }], img: [{
            type: Input
        }], telenetImg: [{
            type: Input
        }], baseImg: [{
            type: Input
        }] }); })();

var LabelKeyType;
(function (LabelKeyType) {
    LabelKeyType["LABEL"] = "lbl";
    LabelKeyType["BUTTON"] = "btn";
    LabelKeyType["PLACEHOLDER"] = "phd";
    LabelKeyType["LINK"] = "lnk";
    LabelKeyType["TOOLTIP"] = "ttp";
    LabelKeyType["TITLE"] = "title";
    LabelKeyType["ERROR"] = "error";
    LabelKeyType["TXT"] = "text";
})(LabelKeyType || (LabelKeyType = {}));

class TelenetTranslateLoader {
    window;
    pathCategorisationService = inject(PathCategorisationService);
    postfixes = this.pathCategorisationService.getPostfixVariables();
    constructor(window) {
        this.window = window;
        this.initializeBrandAndCategoryLabels();
    }
    initializeBrandAndCategoryLabels() {
        this.getTranslationData().subscribe((labelSet) => {
            for (const keyWithBrandOrCategory in labelSet) {
                this.overwriteOriginalLabelWithBrandOrCategorySpecificLabel(labelSet, keyWithBrandOrCategory);
            }
        });
    }
    overwriteOriginalLabelWithBrandOrCategorySpecificLabel(labelSet, keyWithBrandOrCategory) {
        const postfix = this.getPostfix(keyWithBrandOrCategory);
        if (postfix) {
            const keyWithoutCategoryOrBrand = keyWithBrandOrCategory.replace(new RegExp(postfix + '$'), '');
            if (labelSet[keyWithoutCategoryOrBrand] !== undefined) {
                labelSet[keyWithoutCategoryOrBrand] = labelSet[keyWithBrandOrCategory];
            }
        }
    }
    getPostfix(property) {
        return ([this.postfixes.BRAND_CATEGORY_POSTFIX, this.postfixes.CATEGORY_POSTFIX, this.postfixes.BRAND_POSTFIX].find((postfix) => property.endsWith(postfix)) || null);
    }
    getTranslation(_lang) {
        return this.getTranslationData();
    }
    getTranslationData() {
        return new Observable((observer) => {
            if (!isEmpty(this.window?.['localisationData']?.keys)) {
                observer.next(this.window['localisationData'].keys);
                observer.complete();
            }
            else if (this.window?.['pageLocaleData']?.bundle) {
                observer.next(this.window['pageLocaleData'].bundle);
                observer.complete();
            }
            else {
                observer.next({});
                observer.complete();
                console.log('NG Translations could not be loaded');
            }
        });
    }
    static ɵfac = function TelenetTranslateLoader_Factory(t) { return new (t || TelenetTranslateLoader)(i0.ɵɵinject('Window')); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: TelenetTranslateLoader, factory: TelenetTranslateLoader.ɵfac });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TelenetTranslateLoader, [{
        type: Injectable
    }], () => [{ type: Window, decorators: [{
                type: Inject,
                args: ['Window']
            }] }], null); })();

class TelenetMissingTranslationService {
    notTranslated(key) {
        if (key.includes('undefined')) {
            return '';
        }
        return key;
    }
    static ɵfac = function TelenetMissingTranslationService_Factory(t) { return new (t || TelenetMissingTranslationService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: TelenetMissingTranslationService, factory: TelenetMissingTranslationService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TelenetMissingTranslationService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

class TelenetMissingTranslationHandler {
    telenetMissingTranslationService;
    handle(params) {
        return this.telenetMissingTranslationService.notTranslated(params.key);
    }
    constructor(telenetMissingTranslationService) {
        this.telenetMissingTranslationService = telenetMissingTranslationService;
    }
    static ɵfac = function TelenetMissingTranslationHandler_Factory(t) { return new (t || TelenetMissingTranslationHandler)(i0.ɵɵinject(TelenetMissingTranslationService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: TelenetMissingTranslationHandler, factory: TelenetMissingTranslationHandler.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TelenetMissingTranslationHandler, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: TelenetMissingTranslationService }], null); })();

class LabelUtil {
    static LABEL_PREFIX = 'ng';
    static getLabelKeyWithTypeLabel(key) {
        return this.parseKey(key, LabelKeyType.LABEL);
    }
    static getLabelKeyWithTypeTitle(key) {
        return this.parseKey(key, LabelKeyType.TITLE);
    }
    static getLabelKeyWithTypePlaceholder(key) {
        return this.parseKey(key, LabelKeyType.PLACEHOLDER);
    }
    static getLabelKeyWithTypeText(key) {
        return this.parseKey(key, LabelKeyType.TXT);
    }
    static getLabelKeyWithTypeError(key) {
        return this.parseKey(key, LabelKeyType.ERROR);
    }
    static getLabelKeyWithTypeButton(key) {
        return this.parseKey(key, LabelKeyType.BUTTON);
    }
    static normalizeKey(key) {
        return key
            .replace(/ /g, '-')
            .replace(/_/g, '-')
            .replace(/[^.0-9a-zA-Z_-]/g, '')
            .toLowerCase();
    }
    static parseKey(key, labelKeyType) {
        if (Array.isArray(key)) {
            return this.joinKeys([this.LABEL_PREFIX, this.joinKeys(key), labelKeyType]);
        }
        return this.joinKeys([this.LABEL_PREFIX, key, labelKeyType]);
    }
    static joinKeys(values) {
        return values.join('.');
    }
}

class I18nService {
    urlService;
    translateService;
    LANGUAGES = Object.values(LanguageEnum);
    DEFAULT_LANGUAGE = LanguageEnum.EN;
    constructor(urlService, translateService) {
        this.urlService = urlService;
        this.translateService = translateService;
    }
    get languages() {
        return this.LANGUAGES;
    }
    setDefaultLanguageAndLocale() {
        this.translateService.addLangs(this.LANGUAGES);
        this.translateService.setDefaultLang(this.DEFAULT_LANGUAGE);
        registerLocaleData(this.getLocale(this.DEFAULT_LANGUAGE));
    }
    setLanguage(language) {
        const lang = language ? language : this.getLanguage();
        this.translateService.use(lang);
        registerLocaleData(this.getLocale(lang));
    }
    getLanguage() {
        return this.urlService.getRequestParamValue('lang', this.DEFAULT_LANGUAGE);
    }
    getLocale(language) {
        switch (language) {
            case LanguageEnum.FR:
                return localeFR;
            case LanguageEnum.NL:
                return localeNL;
            case LanguageEnum.EN:
            default:
                return localeEN;
        }
    }
    static ɵfac = function I18nService_Factory(t) { return new (t || I18nService)(i0.ɵɵinject(UrlService), i0.ɵɵinject(i2.TranslateService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: I18nService, factory: I18nService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(I18nService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: UrlService }, { type: i2.TranslateService }], null); })();

const TESTING_TRANSLATION_CONFIG = new InjectionToken('testing-translation-config');
class TgTranslateTestingModule {
    constructor(config, translateService) {
        translateService.use(config?.language || 'en');
        translateService.currentLang = config?.language || 'en';
        if (config?.translations) {
            translateService.setTranslation(config?.language || 'en', config?.translations);
        }
    }
    static forRoot(config) {
        return {
            ngModule: TgTranslateTestingModule,
            providers: [
                { provide: TESTING_TRANSLATION_CONFIG, useValue: config },
                { provide: LOCALE_ID, useValue: `${config?.language || 'en'}-BE` },
                { provide: 'Window', useValue: window },
            ],
        };
    }
    static ɵfac = function TgTranslateTestingModule_Factory(t) { return new (t || TgTranslateTestingModule)(i0.ɵɵinject(TESTING_TRANSLATION_CONFIG, 8), i0.ɵɵinject(i2.TranslateService)); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: TgTranslateTestingModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [TranslateModule.forRoot({
                useDefaultLang: true,
                isolate: true,
                extend: false,
                defaultLanguage: 'en',
                loader: {
                    provide: TranslateLoader,
                    useClass: TelenetTranslateLoader,
                },
            }), TranslateModule] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TgTranslateTestingModule, [{
        type: NgModule,
        args: [{
                imports: [
                    TranslateModule.forRoot({
                        useDefaultLang: true,
                        isolate: true,
                        extend: false,
                        defaultLanguage: 'en',
                        loader: {
                            provide: TranslateLoader,
                            useClass: TelenetTranslateLoader,
                        },
                    }),
                ],
                exports: [TranslateModule],
            }]
    }], () => [{ type: undefined, decorators: [{
                type: Inject,
                args: [TESTING_TRANSLATION_CONFIG]
            }, {
                type: Optional
            }] }, { type: i2.TranslateService }], null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TgTranslateTestingModule, { imports: [i2.TranslateModule], exports: [TranslateModule] }); })();

class ClickOutsideDirective {
    elementRef;
    appClickOutside = new EventEmitter();
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    onClick(event, targetElement) {
        if (!targetElement) {
            return;
        }
        const clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.appClickOutside.emit(event);
        }
    }
    static ɵfac = function ClickOutsideDirective_Factory(t) { return new (t || ClickOutsideDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ClickOutsideDirective, selectors: [["", "appClickOutside", ""]], hostBindings: function ClickOutsideDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function ClickOutsideDirective_click_HostBindingHandler($event) { return ctx.onClick($event, $event.target); }, false, i0.ɵɵresolveDocument);
        } }, outputs: { appClickOutside: "appClickOutside" }, standalone: true });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ClickOutsideDirective, [{
        type: Directive,
        args: [{
                selector: '[appClickOutside]',
                standalone: true,
            }]
    }], () => [{ type: i0.ElementRef }], { appClickOutside: [{
            type: Output
        }], onClick: [{
            type: HostListener,
            args: ['document:click', ['$event', '$event.target']]
        }] }); })();

class ExperienceFragmentService {
    baseUrl = `/content/experience-fragments`;
    #http = inject(HttpClient);
    #languageService = inject(LanguageService);
    fetchExpFragment(experienceFragmentName, expFragmentLocation) {
        const expFragmentPath = this.generateExpFragmentFullPath(experienceFragmentName, expFragmentLocation);
        const expFragmentUrl = new URL(window.location.href).origin.concat(expFragmentPath);
        return this.#http
            .get(expFragmentUrl + '?wcmmode=disabled', { responseType: 'text' })
            .pipe(map$1((result) => this.getSectionContent(result)));
    }
    generateExpFragmentFullPath(experienceFragmentName, expFragmentLocation) {
        const breakpoint = /\/nl\/|\/fr\/|\/en\//;
        const splitPathWithLanguage = expFragmentLocation?.split(breakpoint);
        if (splitPathWithLanguage?.length >= 2 && experienceFragmentName) {
            return `${splitPathWithLanguage[0]}/${this.#languageService.getLanguage()}/${splitPathWithLanguage[1]}/${experienceFragmentName}`;
        }
        return '';
    }
    getSectionContent(result) {
        const startStr = '<div class="cmp cmp-responsivegrid">';
        const endStrPos = result.lastIndexOf('</div>');
        return result.slice(result.indexOf(startStr), endStrPos);
    }
    static ɵfac = function ExperienceFragmentService_Factory(t) { return new (t || ExperienceFragmentService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ExperienceFragmentService, factory: ExperienceFragmentService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExperienceFragmentService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { AbstractBaseComponent, AbstractCardComponent, AssetService, BrandImageDirective, BreakpointsEnum, BrowserTypeEnum, CacheService, ClickOutsideDirective, ClientBrowserTypeService, ContextHubGenericStoreService, ContexthubConstants, CustomerBrandEnum, CustomerCategoryEnum, CustomerStatusEnum, DEBUG_CONFIG_TOKEN, DeviceTypesEnum, ExperienceFragmentService, I18nService, ImageSrcPathDirective, ImageSrcPathModule, JsonUrlService, LabelKeyType, LabelUtil, LanguageEnum, LanguageService, LoaderComponent, LoaderData, LoaderModule, LoaderService, LoaderTypeEnum, MediaQueryService, ModuleFederatedDebugInfoComponent, ModuleFederatedDebugInfoModule, ModuleFederatedDebugInfoService, NormalizationService, PathCategorisationService, QueryParamEnum, TESTING_TRANSLATION_CONFIG, TelenetMissingTranslationHandler, TelenetMissingTranslationService, TelenetTranslateLoader, TgTranslateTestingModule, UrlParam, UrlService, windowFactory };
//# sourceMappingURL=telenet-ng-lib-page.mjs.map
