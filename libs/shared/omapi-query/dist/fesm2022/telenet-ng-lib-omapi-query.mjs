import { makeFactory } from 'factory.ts';
import * as i0 from '@angular/core';
import { Injectable } from '@angular/core';
import { isNil, isEmpty, first, map as map$1 } from 'lodash-es';
import * as i5 from '@telenet/ng-lib-omapi';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import * as i1 from '@telenet/ng-lib-page';
import { forkJoin, throwError } from 'rxjs';
import { shareReplay, take, catchError, map, mergeMap } from 'rxjs/operators';
import * as i4 from '@telenet/ng-lib-message';
import { ErrorMessage } from '@telenet/ng-lib-message';
import { LogFactory } from '@telenet/ng-lib-shared';
import * as i1$1 from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import * as i2 from '@telenet/ng-lib-config';
import { ConfigConstants } from '@telenet/ng-lib-config';

var HttpTypesEnum;
(function (HttpTypesEnum) {
    HttpTypesEnum["POST"] = "POST";
})(HttpTypesEnum || (HttpTypesEnum = {}));

const rawLocalizedContentInterfaceFactory = makeFactory({
    key: '1',
    value: [],
    data: 'test',
    locale: 'nl',
});
const rawProductTypeInterfaceFactory = makeFactory({
    code: '',
    localizedContent: [rawLocalizedContentInterfaceFactory.build()],
});
const rawColorInterfaceFactory = makeFactory({
    sortOrder: '',
    localizedContent: [],
    attributeGroup: rawProductTypeInterfaceFactory.build(),
});
const variantTagOptionInterfaceFactory = makeFactory({
    attributeKey: '',
    backOrderDescription: {
        localizedContent: [rawLocalizedContentInterfaceFactory.build()],
    },
    preOrderDescription: {
        localizedContent: [rawLocalizedContentInterfaceFactory.build()],
    },
});
const variantTagInterfaceFactory = makeFactory({
    telenet: { options: [variantTagOptionInterfaceFactory.build()] },
    telenetSOHO: { options: [variantTagOptionInterfaceFactory.build()] },
    base: { options: [variantTagOptionInterfaceFactory.build()] },
    baseSOHO: { options: [variantTagOptionInterfaceFactory.build()] },
});
const RawImagesInterfaceFactory = makeFactory({
    attributeKey: '',
    value: '',
    localizedContent: [],
});
const rawVariantsInterfaceFactory = makeFactory({
    productId: '',
    images: [],
    contractMonths: undefined,
    prices: {
        priceType: '',
    },
    color: rawColorInterfaceFactory.build(),
    manBrand: rawColorInterfaceFactory.build(),
    shortDescription: {
        localizedContent: [rawLocalizedContentInterfaceFactory.build()],
    },
    tag: variantTagInterfaceFactory.build(),
    characteristics: undefined,
});
const rawBigItemVariantInterfaceFactory = rawVariantsInterfaceFactory.extend({
    extraAtHomeDelivery: true,
});
const rawOmapiQueryProductInterfaceDataFactory = makeFactory({
    labelKey: '',
    productFamily: '',
    variants: [],
    manBrand: rawColorInterfaceFactory.build(),
    isPreOrder: false,
    isBackOrder: false,
});
const rawOmapiQueryProductTestfactory = makeFactory({
    products: rawOmapiQueryProductInterfaceDataFactory.buildList(2),
});
const rawOmapiQueryProductInterfaceDataWithPreOrderFactory = rawOmapiQueryProductInterfaceDataFactory.extend({
    labelKey: '',
    productFamily: '',
    variants: [
        rawVariantsInterfaceFactory.build({
            tag: {
                telenet: {
                    options: [
                        variantTagOptionInterfaceFactory.build({
                            attributeKey: 'pre_order_label',
                        }),
                    ],
                },
            },
        }),
    ],
    manBrand: rawColorInterfaceFactory.build(),
    isPreOrder: false,
    isBackOrder: false,
});
const rawOmapiQueryProductInterfaceDataWithBackOrderFactory = rawOmapiQueryProductInterfaceDataFactory.extend({
    labelKey: '',
    productFamily: '',
    variants: [
        rawVariantsInterfaceFactory.build({
            tag: {
                telenet: {
                    options: [
                        variantTagOptionInterfaceFactory.build({
                            attributeKey: 'back_order_label',
                        }),
                    ],
                },
            },
        }),
    ],
    manBrand: rawColorInterfaceFactory.build(),
    isPreOrder: false,
    isBackOrder: false,
});
const rawOmapiQueryProductFactoryWithPreOrder = rawOmapiQueryProductTestfactory.extend({
    products: [
        rawOmapiQueryProductInterfaceDataFactory.build(),
        rawOmapiQueryProductInterfaceDataWithPreOrderFactory.build(),
    ],
});

class OmapiQueryProductMapper {
    toModel(rawOmapiQueryProduct) {
        return this.createOmapiQueryProduct(rawOmapiQueryProduct);
    }
    createOmapiQueryProduct(rawOmapiQueryProduct) {
        const omapiQueryProduct = {};
        omapiQueryProduct.products = this.createQueryProducts(rawOmapiQueryProduct.products);
        return omapiQueryProduct;
    }
    createQueryProducts(rawQueryProducts) {
        return (rawQueryProducts &&
            rawQueryProducts.map((rawQueryProduct) => {
                return this.createQueryProductData(rawQueryProduct);
            }));
    }
    createQueryProductData(rawQueryProduct) {
        const queryProduct = {};
        queryProduct.labelKey = rawQueryProduct.labelKey;
        queryProduct.productFamily = rawQueryProduct.productFamily;
        queryProduct.variants = this.createVariants(rawQueryProduct.variants);
        return queryProduct;
    }
    createLocalizedContents(rawLocalizedContents) {
        return (rawLocalizedContents &&
            rawLocalizedContents.map((rawLocalizedContent) => {
                return OmapiQueryProductMapper.createLocalizedContent(rawLocalizedContent);
            }));
    }
    static createLocalizedContent(rawLocalizedContent) {
        const localizedContent = {};
        localizedContent.locale = rawLocalizedContent.locale;
        localizedContent.key = rawLocalizedContent.key;
        localizedContent.data = rawLocalizedContent.data;
        localizedContent.value = OmapiQueryProductMapper.createLocalizedContentValue(rawLocalizedContent.value ? rawLocalizedContent.value : []);
        return localizedContent;
    }
    static createLocalizedContentValue(rawLocalizedContentValue) {
        return (rawLocalizedContentValue &&
            rawLocalizedContentValue.map((value) => {
                return value;
            }));
    }
    createVariants(rawVariants) {
        return (rawVariants &&
            rawVariants.map((rawVariant) => {
                return this.createVariant(rawVariant);
            }));
    }
    createVariant(rawVariant) {
        const variant = {};
        variant.productId = rawVariant.productId;
        if (!isNil(rawVariant.extraAtHomeDelivery)) {
            variant.extraAtHomeDelivery = rawVariant.extraAtHomeDelivery;
        }
        variant.prices = OmapiQueryProductMapper.createPrices(rawVariant.prices);
        variant.images = this.createImages(rawVariant.images);
        const shortDescription = this.createShortDescription(rawVariant.shortDescription);
        if (shortDescription) {
            variant.shortDescription = shortDescription;
        }
        variant.brand = this.createBrand(rawVariant.manBrand);
        return variant;
    }
    static createPrices(rawPrices) {
        const prices = {};
        prices.priceType = rawPrices.priceType;
        return prices;
    }
    createImages(rawImages) {
        return (rawImages &&
            rawImages.map((rawImage) => {
                return this.createImage(rawImage);
            }));
    }
    createImage(rawImage) {
        const image = {};
        image.attributeKey = rawImage.attributeKey;
        image.value = rawImage.value;
        image.localizedContent = this.createLocalizedContents(rawImage.localizedContent);
        return image;
    }
    createShortDescription(rawShortDescription) {
        if (!isEmpty(rawShortDescription) && !isEmpty(rawShortDescription.localizedContent)) {
            const shortDescription = {};
            shortDescription.localizedContent = this.createLocalizedContents(rawShortDescription.localizedContent);
            return shortDescription;
        }
        return {};
    }
    createBrand(rawBrand) {
        if (!isEmpty(rawBrand) && !isEmpty(rawBrand.localizedContent)) {
            const brand = {};
            brand.localizedContent = this.createLocalizedContents(rawBrand.localizedContent);
            return brand;
        }
        return {};
    }
    static ɵfac = function OmapiQueryProductMapper_Factory(t) { return new (t || OmapiQueryProductMapper)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: OmapiQueryProductMapper, factory: OmapiQueryProductMapper.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OmapiQueryProductMapper, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

var ProductTypeEnum;
(function (ProductTypeEnum) {
    ProductTypeEnum["SMARTPHONE"] = "SMARTPHONE";
    ProductTypeEnum["SMARTPHONES"] = "SMARTPHONES";
})(ProductTypeEnum || (ProductTypeEnum = {}));

class QueryProductInfoTransformer {
    languageService;
    constructor(languageService) {
        this.languageService = languageService;
    }
    toModel(queryProductInfo) {
        return this.transformToOmapiProduct(queryProductInfo);
    }
    transformToOmapiProduct(queryProductInfo) {
        const omapiProduct = new OmapiProduct();
        if (!isEmpty(queryProductInfo.products)) {
            const queryProductDetails = first(queryProductInfo.products);
            if (queryProductDetails) {
                omapiProduct.labelKey = queryProductDetails.labelKey;
                omapiProduct.productType =
                    queryProductDetails.productFamily.toUpperCase() === ProductTypeEnum.SMARTPHONES
                        ? ProductTypeEnum.SMARTPHONE
                        : queryProductDetails.productFamily.toUpperCase();
                if (!isEmpty(queryProductDetails.variants)) {
                    this.appendVariantToOmapiProduct(queryProductDetails, omapiProduct);
                }
            }
        }
        return omapiProduct;
    }
    appendVariantToOmapiProduct(queryProductDetails, omapiProduct) {
        const variant = first(queryProductDetails.variants);
        if (variant) {
            if (!isNil(variant.extraAtHomeDelivery)) {
                omapiProduct.extraAtHomeDelivery = variant.extraAtHomeDelivery;
            }
            omapiProduct.productId = variant.productId;
            omapiProduct.externalProductCode = variant.productId;
            omapiProduct.priceType = variant.prices.priceType;
            omapiProduct.imageUrl = QueryProductInfoTransformer.getImageUrl(variant);
            const contentForLocale = this.getContentForLocale(variant.shortDescription);
            if (contentForLocale) {
                omapiProduct.name = contentForLocale.data;
            }
            const brandValue = this.getBrandValueForLocale(variant.brand);
            if (brandValue) {
                omapiProduct.brand = first(brandValue.value);
            }
        }
    }
    static getImageUrl(variant) {
        if (!isEmpty(variant) && !isEmpty(variant.images)) {
            const imageDetails = first(variant.images);
            return imageDetails ? imageDetails.value : '';
        }
        return '';
    }
    getContentForLocale(shortDescription) {
        if (!isEmpty(shortDescription) && !isEmpty(shortDescription.localizedContent)) {
            const localizedContentInterface = shortDescription.localizedContent.find((localizeContent) => {
                return localizeContent.locale === this.languageService.getLanguage();
            });
            return localizedContentInterface ? localizedContentInterface : {};
        }
        return {};
    }
    getBrandValueForLocale(brand) {
        if (!isEmpty(brand) && !isEmpty(brand.localizedContent)) {
            const localizedContentInterface = brand.localizedContent.find((localizedContent) => {
                return localizedContent.locale === this.languageService.getLanguage();
            });
            return localizedContentInterface ? localizedContentInterface : {};
        }
        return {};
    }
    static ɵfac = function QueryProductInfoTransformer_Factory(t) { return new (t || QueryProductInfoTransformer)(i0.ɵɵinject(i1.LanguageService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: QueryProductInfoTransformer, factory: QueryProductInfoTransformer.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(QueryProductInfoTransformer, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.LanguageService }], null); })();

class OmapiQueryCallConfig {
    messageGroupName;
    endpoint;
    mapper;
    data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    errorHandler;
    httpType = HttpTypesEnum.POST;
    // eslint-disable-next-line @typescript-eslint/ban-types
    customHeaders;
    constructor(messageGroupName, endpoint, mapper, data, 
    // eslint-disable-next-line @typescript-eslint/ban-types
    customHeaders) {
        this.messageGroupName = messageGroupName;
        this.endpoint = endpoint;
        this.mapper = mapper;
        this.data = data;
        this.customHeaders = customHeaders;
    }
}

class CacheService {
    cache = {};
    get(key) {
        return this.cache[key];
    }
    // eslint-disable-next-line @typescript-eslint/ban-types
    add(key, response$) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.cache[key] = response$.pipe(shareReplay({ bufferSize: 1 }));
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

class OmapiQueryProductService {
    http;
    cacheService;
    urlService;
    messageService;
    log = LogFactory.createLogger(OmapiQueryProductService);
    constructor(http, cacheService, urlService, messageService) {
        this.http = http;
        this.cacheService = cacheService;
        this.urlService = urlService;
        this.messageService = messageService;
    }
    getRawQueryProductByEndpoint(messageGroup, endpoint) {
        if (!this.cacheService.get(endpoint)) {
            this.cacheService.add(endpoint, this.http.get(endpoint, this.getHttpConfig()));
        }
        return this.cacheService.get(endpoint).pipe(take(1), catchError((error) => this.handleError(error, messageGroup)), map((response) => response));
    }
    rawQueryProductsFromEndpoints$(messageGroup, endpoints) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return forkJoin(map$1(endpoints, (endpoint) => this.getRawQueryProductByEndpoint(messageGroup, endpoint)));
    }
    getHttpConfig() {
        return {
            headers: {
                'x-alt-referer': this.urlService.getCurrentUrl(),
                'X-Requested-With': 'XMLHttpRequest',
            },
            timeout: 10000,
            cache: true,
        };
    }
    handleError(error, messageGroup) {
        if (error.status !== 410) {
            this.messageService.addMessage(new ErrorMessage(messageGroup, 'omapi-query-' + error.status));
        }
        this.log.logError('An error occurred while trying to fetch ' + messageGroup, error);
        throw Error('An error occurred while trying to fetch ' + messageGroup);
    }
    static ɵfac = function OmapiQueryProductService_Factory(t) { return new (t || OmapiQueryProductService)(i0.ɵɵinject(i1$1.HttpClient), i0.ɵɵinject(CacheService), i0.ɵɵinject(i1.UrlService), i0.ɵɵinject(i4.MessageService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: OmapiQueryProductService, factory: OmapiQueryProductService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OmapiQueryProductService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1$1.HttpClient }, { type: CacheService }, { type: i1.UrlService }, { type: i4.MessageService }], null); })();

var AddressEnum;
(function (AddressEnum) {
    AddressEnum["ADDRESS_NOT_FOUND"] = "OMAPI-ERROR-ADDRESS-NOT-FOUND";
})(AddressEnum || (AddressEnum = {}));

class OmapiQueryHelper {
    getHttpHeaders() {
        return new HttpHeaders(this.createHttpHeaders());
    }
    createHttpHeaders() {
        return {
            'Content-Type': 'application/json',
        };
    }
    getHttpOptions() {
        return {
            headers: this.getHttpHeaders(),
        };
    }
    static ɵfac = function OmapiQueryHelper_Factory(t) { return new (t || OmapiQueryHelper)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: OmapiQueryHelper, factory: OmapiQueryHelper.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OmapiQueryHelper, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

class OmapiQueryService {
    http;
    configService;
    messageService;
    omapiQueryHelper;
    omapiEnrichService;
    constructor(http, configService, messageService, omapiQueryHelper, omapiEnrichService) {
        this.http = http;
        this.configService = configService;
        this.messageService = messageService;
        this.omapiQueryHelper = omapiQueryHelper;
        this.omapiEnrichService = omapiEnrichService;
    }
    doPost(omapiQueryCallConfig) {
        return this.doRequest(omapiQueryCallConfig).pipe(mergeMap((omapiQueryResponse) => {
            return this.omapiEnrichService.enrichResponseWithOmapiData(omapiQueryCallConfig.messageGroupName, omapiQueryResponse);
        }), map((omapiQueryResponseEnrichedWithOmapiData) => {
            return omapiQueryCallConfig.mapper.toModel(omapiQueryResponseEnrichedWithOmapiData);
        }));
    }
    doGet(omapiQueryCallConfig) {
        return this.http
            .get(this.configService.getConfig(ConfigConstants.OMAPI_QUERY_URL) + omapiQueryCallConfig.endpoint)
            .pipe(
        // eslint-disable-next-line @typescript-eslint/ban-types
        mergeMap((omapiQueryResponse) => {
            return this.omapiEnrichService.enrichResponseWithOmapiData(omapiQueryCallConfig.messageGroupName, omapiQueryResponse);
        }), map((omapiResponseEnrichedWithOmapiData) => omapiQueryCallConfig.mapper.toModel(omapiResponseEnrichedWithOmapiData)), catchError((error) => {
            return this.handleError(error, omapiQueryCallConfig);
        }));
    }
    doRequest(omapiQueryCall) {
        const options = this.omapiQueryHelper.getHttpOptions();
        return this.http
            .post(this.configService.getConfig(ConfigConstants.OMAPI_QUERY_URL) + omapiQueryCall.endpoint, omapiQueryCall.data, options)
            .pipe(take(1), catchError((error) => {
            return this.handleError(error, omapiQueryCall);
        }));
    }
    handleError(error, omapiQueryCall) {
        if (omapiQueryCall.errorHandler !== undefined) {
            return omapiQueryCall.errorHandler(error, omapiQueryCall);
        }
        let errorCode = 'omapi-query.'.concat(error.status.toString());
        let detailedErrorCode;
        switch (error.status) {
            case 400:
                errorCode = AddressEnum.ADDRESS_NOT_FOUND
                    ? `${omapiQueryCall.messageGroupName}.${AddressEnum.ADDRESS_NOT_FOUND}`
                    : errorCode;
                this.messageService.addMessage(new ErrorMessage(omapiQueryCall.messageGroupName, errorCode));
                break;
            case 500:
                this.messageService.addMessage(new ErrorMessage(omapiQueryCall.messageGroupName, errorCode));
                break;
            default:
                detailedErrorCode = this.getDetailedErrorCode(error, errorCode);
                if (detailedErrorCode) {
                    errorCode = detailedErrorCode;
                }
                this.messageService.addMessage(new ErrorMessage(omapiQueryCall.messageGroupName, errorCode));
                break;
        }
        return throwError(() => 'An error occured while trying to fetch ' + omapiQueryCall.messageGroupName + ' | ' + errorCode);
    }
    getDetailedErrorCode(error, errorCode) {
        if (error.error && error.error.code) {
            return errorCode.concat('-').concat(error.error.code);
        }
        return undefined;
    }
    static ɵfac = function OmapiQueryService_Factory(t) { return new (t || OmapiQueryService)(i0.ɵɵinject(i1$1.HttpClient), i0.ɵɵinject(i2.ConfigService), i0.ɵɵinject(i4.MessageService), i0.ɵɵinject(OmapiQueryHelper), i0.ɵɵinject(i5.OmapiEnrichService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: OmapiQueryService, factory: OmapiQueryService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OmapiQueryService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1$1.HttpClient }, { type: i2.ConfigService }, { type: i4.MessageService }, { type: OmapiQueryHelper }, { type: i5.OmapiEnrichService }], null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { CacheService, HttpTypesEnum, OmapiQueryCallConfig, OmapiQueryProductMapper, OmapiQueryProductService, OmapiQueryService, QueryProductInfoTransformer, RawImagesInterfaceFactory, rawBigItemVariantInterfaceFactory, rawColorInterfaceFactory, rawLocalizedContentInterfaceFactory, rawOmapiQueryProductFactoryWithPreOrder, rawOmapiQueryProductInterfaceDataFactory, rawOmapiQueryProductInterfaceDataWithBackOrderFactory, rawOmapiQueryProductInterfaceDataWithPreOrderFactory, rawOmapiQueryProductTestfactory, rawProductTypeInterfaceFactory, rawVariantsInterfaceFactory, variantTagInterfaceFactory, variantTagOptionInterfaceFactory };
//# sourceMappingURL=telenet-ng-lib-omapi-query.mjs.map
