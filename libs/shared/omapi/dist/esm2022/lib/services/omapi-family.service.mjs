import { throwError } from 'rxjs';
import { catchError, map, mergeMap, take } from 'rxjs/operators';
import { ErrorMessage } from '@telenet/ng-lib-message';
import { flatMap, isEmpty } from 'lodash-es';
import { ConfigConstants } from '@telenet/ng-lib-config';
import { Injectable } from '@angular/core';
import { OmapiFamilyConstants } from '../constants';
import { OmapiUtils } from '../utils';
/* eslint-disable rxjs/no-internal */
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@telenet/ng-lib-page";
import * as i3 from "@telenet/ng-lib-message";
import * as i4 from "@telenet/ng-lib-config";
import * as i5 from "./cache/omapi-cache.service";
import * as i6 from "./omapi-product.service";
export class OmapiFamilyService {
    http;
    urlService;
    messageService;
    configService;
    cacheService;
    omapiProductService;
    // FIXME this service has to be refactored - its full of promises being created out of an observable
    constructor(http, urlService, messageService, configService, cacheService, omapiProductService) {
        this.http = http;
        this.urlService = urlService;
        this.messageService = messageService;
        this.configService = configService;
        this.cacheService = cacheService;
        this.omapiProductService = omapiProductService;
    }
    getFamily(messageGroup, family) {
        return this.getFamilyByEndpoint(messageGroup, this.getOmapiFamilyUrl(family));
    }
    getKlikFamily(messageGroup, family) {
        return this.getKlikFamilyByEndpoint(messageGroup, this.getOmapiFamilyUrl(family));
    }
    getOmapiFamilyUrl(family) {
        return this.configService.getConfig(ConfigConstants.OMAPI_URL) + '/public/family/' + family;
    }
    getFamilyByEndpoint(messageGroup, endpoint) {
        if (!this.cacheService.get(endpoint)) {
            this.cacheService.add(endpoint, this.http.get(endpoint, this.getHttpConfig()));
        }
        const productInfoPromises = [];
        return this.cacheService.get(endpoint).pipe(take(1), map((rawOmapiFamily) => {
            return this.parseFamily(messageGroup, rawOmapiFamily, productInfoPromises);
        }), mergeMap(async (omapiFamily) => {
            await Promise.all(productInfoPromises);
            return omapiFamily;
        }), catchError((error) => this.handleError(error, messageGroup)));
    }
    parseFamily(messageGroup, rawOmapiFamily, productInfoPromises) {
        const omapiFamily = { tiers: [] };
        this.parseTiers(messageGroup, rawOmapiFamily, omapiFamily, productInfoPromises);
        this.parseProductsByType(messageGroup, rawOmapiFamily, omapiFamily, productInfoPromises);
        this.parseOptins(messageGroup, rawOmapiFamily, omapiFamily, productInfoPromises);
        if (rawOmapiFamily.options) {
            this.parseOptions(messageGroup, rawOmapiFamily, omapiFamily, productInfoPromises);
        }
        return omapiFamily;
    }
    parseTiers(messageGroup, rawOmapiFamily, omapiFamily, productInfoPromises) {
        rawOmapiFamily.tiers.forEach((tier) => {
            omapiFamily.tiers.push(this.createTier(messageGroup, tier, productInfoPromises));
        });
    }
    parseProductsByType(messageGroup, rawOmapiFamily, omapiFamily, productInfoPromises) {
        OmapiFamilyConstants.FAMILY_PRODUCT_TYPES.forEach((productType) => {
            const product = rawOmapiFamily.products.find((rawOmapiFamilyProduct) => rawOmapiFamilyProduct.type === productType);
            if (product) {
                this.addOmapiProductToTier(messageGroup, product, omapiFamily, productInfoPromises);
            }
        });
    }
    parseOptins(messageGroup, rawOmapiFamily, omapiFamily, productInfoPromises) {
        omapiFamily.tiers.forEach((omapiFamilyTier) => {
            if (omapiFamilyTier) {
                omapiFamilyTier.optins = flatMap(rawOmapiFamily.optins.map((rawOptin) => {
                    const key = rawOptin.key;
                    const currentTier = rawOptin.tiers.find((tier) => tier.key === omapiFamilyTier.key);
                    return (currentTier?.pax?.map((pax) => {
                        const optin = {};
                        optin.key = key;
                        optin.mobileId = pax.omapiId;
                        optin.omapiId = pax.optinId;
                        const promise = firstValueFrom(this.omapiProductService.getProductById(messageGroup, pax.optinId));
                        productInfoPromises.push(promise);
                        promise.then((omapiProduct) => {
                            optin.productInfo = omapiProduct;
                        });
                        return optin;
                    }) ?? []);
                }));
            }
        });
    }
    parseOptions(messageGroup, rawOmapiFamily, omapiFamily, productInfoPromises) {
        omapiFamily.tiers.forEach((omapiFamilyTier) => {
            omapiFamilyTier.options = flatMap(rawOmapiFamily.options.map((rawOption) => {
                const option = {};
                option.key = rawOption.key;
                option.type = rawOption.type;
                option.omapiId = rawOption.omapiId;
                option.parents = rawOption.parents;
                const promise = firstValueFrom(this.omapiProductService.getProductById(messageGroup, rawOption.omapiId));
                productInfoPromises.push(promise);
                promise.then((omapiProduct) => {
                    option.productInfo = omapiProduct;
                });
                return option;
            }));
        });
    }
    addOmapiProductToTier(messageGroup, rawOmapiFamilyProduct, omapiFamily, productInfoPromises) {
        rawOmapiFamilyProduct.tiers.forEach((rawOmapiProductTier) => {
            this.addOmapiFamilyObjectToTier(messageGroup, omapiFamily, rawOmapiFamilyProduct.type, rawOmapiProductTier, productInfoPromises);
        });
    }
    addOmapiFamilyObjectToTier(messageGroup, family, productType, rawOmapiProductTier, productInfoPromises) {
        const familyTier = family.tiers.find((tier) => tier.key === rawOmapiProductTier.key);
        const omapiProductInfos = this.createOmapiProductInfos(messageGroup, rawOmapiProductTier, productInfoPromises);
        if (familyTier) {
            if (!familyTier[productType]) {
                familyTier[productType] = [];
            }
            familyTier[productType] = familyTier[productType].concat(omapiProductInfos);
        }
    }
    createOmapiProductInfos(messageGroup, rawOmapiProductTier, productInfoPromises) {
        const products = [];
        let mobileData = [];
        rawOmapiProductTier.products.forEach((rawOmapiProduct) => {
            const omapiProductInfo = {
                omapiId: rawOmapiProduct.omapiId,
            };
            if (rawOmapiProduct.mobileData) {
                rawOmapiProduct.mobileData.forEach((rawMobileData) => {
                    const omapiMobileData = {};
                    omapiMobileData.omapiId = rawMobileData.omapiId;
                    omapiMobileData.key = rawMobileData.key;
                    const omapiMobileDataPromises = firstValueFrom(this.omapiProductService.getProductById(messageGroup, omapiMobileData.omapiId));
                    productInfoPromises.push(omapiMobileDataPromises);
                    omapiMobileDataPromises.then((omapiProduct) => {
                        omapiMobileData.productInfo = omapiProduct;
                    });
                    mobileData.push(omapiMobileData);
                });
            }
            if (isEmpty(OmapiUtils.getComboProducts(rawOmapiProduct.omapiId))) {
                const promise = firstValueFrom(this.omapiProductService.getProductById(messageGroup, rawOmapiProduct.omapiId));
                productInfoPromises.push(promise);
                promise.then((omapiProduct) => {
                    omapiProductInfo.productInfo = omapiProduct;
                });
            }
            omapiProductInfo.mobileData = mobileData;
            products.push(omapiProductInfo);
            mobileData = [];
        });
        return products;
    }
    createTier(messageGroup, rawOmapiTier, productInfoPromises) {
        const tier = {
            omapiId: rawOmapiTier.omapiId,
            key: rawOmapiTier.key,
        };
        const promise = firstValueFrom(this.omapiProductService.getProductById(messageGroup, rawOmapiTier.omapiId));
        productInfoPromises.push(promise);
        promise.then((omapiProduct) => {
            tier.productInfo = omapiProduct;
        });
        return tier;
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
            this.messageService.addMessage(new ErrorMessage(messageGroup, 'omapi-' + error.status));
        }
        return throwError(() => 'An error occurred while trying to fetch ' + messageGroup);
    }
    getKlikFamilyByEndpoint(messageGroup, endpoint) {
        if (!this.cacheService.get(endpoint)) {
            this.cacheService.add(endpoint, this.http.get(endpoint, this.getHttpConfig()));
        }
        const productInfoPromises = [];
        return this.cacheService.get(endpoint).pipe(take(1), catchError((error) => this.handleError(error, messageGroup)), map((rawOmapiFamily) => {
            return this.createFamily(messageGroup, rawOmapiFamily, productInfoPromises);
        }), mergeMap(async (omapiFamily) => {
            await Promise.all(productInfoPromises);
            return omapiFamily;
        }));
    }
    createFamily(messageGroup, rawOmapiFamily, productInfoPromises) {
        const omapiFamily = {};
        omapiFamily.tiers = this.createKlikTier(rawOmapiFamily.tiers, messageGroup, productInfoPromises);
        omapiFamily.products = this.createKlikProduct(rawOmapiFamily.products, messageGroup, productInfoPromises);
        omapiFamily.optins = this.createKlikOptins(rawOmapiFamily.optins, messageGroup, productInfoPromises);
        omapiFamily.options = this.createKlikOptions(rawOmapiFamily.options, messageGroup, productInfoPromises);
        return omapiFamily;
    }
    createKlikTier(rawOmapiFamilyTier, messageGroup, productInfoPromises) {
        return rawOmapiFamilyTier.map((rawFamilyTier) => {
            const tier = {};
            tier.key = rawFamilyTier.key;
            tier.omapiId = rawFamilyTier.omapiId;
            const promise = firstValueFrom(this.omapiProductService.getProductById(messageGroup, rawFamilyTier.omapiId));
            productInfoPromises.push(promise);
            promise.then((omapiProduct) => {
                tier.productInfo = omapiProduct;
            });
            return tier;
        });
    }
    createKlikProduct(rawOmapiFamilyProduct, messageGroup, productInfoPromises) {
        return rawOmapiFamilyProduct.map((rawFamilyProduct) => {
            const product = {};
            product.type = rawFamilyProduct.type;
            product.tiers = this.getProductTiers(rawFamilyProduct, messageGroup, productInfoPromises);
            return product;
        });
    }
    createKlikOptins(rawOmapiFamilyOptIn, messageGroup, productInfoPromises) {
        return rawOmapiFamilyOptIn.map((rawOptins) => {
            const optin = {};
            optin.key = rawOptins.key;
            optin.tiers = [];
            optin.tiers = rawOptins.tiers?.map((rawTier) => {
                const optinTier = {};
                optinTier.key = rawTier.key;
                optinTier.pax = [];
                optinTier.pax = rawTier.pax?.map((rawPax) => {
                    const optinPax = {};
                    optinPax.omapiId = rawPax.omapiId;
                    optinPax.optinId = rawPax.optinId;
                    const promise = firstValueFrom(this.omapiProductService.getProductById(messageGroup, rawPax.optinId));
                    productInfoPromises.push(promise);
                    promise.then((omapiProduct) => {
                        optinPax.productInfo = omapiProduct;
                    });
                    return optinPax;
                });
                return optinTier;
            });
            return optin;
        });
    }
    createKlikOptions(rawOmapiFamilyOptIn, messageGroup, productInfoPromises) {
        return rawOmapiFamilyOptIn.map((rawOption) => {
            const option = {};
            option.key = rawOption.key;
            option.omapiId = rawOption.omapiId;
            option.parents = rawOption.parents;
            option.type = rawOption.type;
            const promise = firstValueFrom(this.omapiProductService.getProductById(messageGroup, rawOption.omapiId));
            productInfoPromises.push(promise);
            promise.then((omapiProduct) => {
                option.productInfo = omapiProduct;
            });
            return option;
        });
    }
    getProductTiers(rawFamilyProduct, messageGroup, productInfoPromises) {
        return rawFamilyProduct.tiers?.map((rawTier) => {
            const tier = {};
            tier.key = rawTier.key;
            tier.products = this.getProductDetails(rawTier, messageGroup, productInfoPromises);
            return tier;
        });
    }
    getProductDetails(rawTier, messageGroup, productInfoPromises) {
        return rawTier.products?.map((rawTierProduct) => {
            const tierProduct = {};
            tierProduct.key = rawTierProduct.key;
            tierProduct.omapiId = rawTierProduct.omapiId;
            const promise = firstValueFrom(this.omapiProductService.getProductById(messageGroup, rawTierProduct.omapiId));
            productInfoPromises.push(promise);
            promise.then((omapiProduct) => {
                tierProduct.productInfo = omapiProduct;
            });
            tierProduct.mobileData = this.getMobileData(rawTierProduct, messageGroup, productInfoPromises);
            return tierProduct;
        });
    }
    getMobileData(rawTierProduct, messageGroup, productInfoPromises) {
        return rawTierProduct.mobileData?.map((rawTierProductMobile) => {
            const mobileData = {};
            mobileData.key = rawTierProductMobile.key;
            mobileData.omapiId = rawTierProductMobile.omapiId;
            const mobileDataPromise = firstValueFrom(this.omapiProductService.getProductById(messageGroup, rawTierProductMobile.omapiId));
            productInfoPromises.push(mobileDataPromise);
            mobileDataPromise.then((omapiProduct) => {
                mobileData.productInfo = omapiProduct;
            });
            return mobileData;
        });
    }
    static ɵfac = function OmapiFamilyService_Factory(t) { return new (t || OmapiFamilyService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.UrlService), i0.ɵɵinject(i3.MessageService), i0.ɵɵinject(i4.ConfigService), i0.ɵɵinject(i5.OmapiCacheService), i0.ɵɵinject(i6.OmapiProductService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: OmapiFamilyService, factory: OmapiFamilyService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OmapiFamilyService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.HttpClient }, { type: i2.UrlService }, { type: i3.MessageService }, { type: i4.ConfigService }, { type: i5.OmapiCacheService }, { type: i6.OmapiProductService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib21hcGktZmFtaWx5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3NlcnZpY2VzL29tYXBpLWZhbWlseS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFpQjlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRSxPQUFPLEVBQUUsWUFBWSxFQUFrQixNQUFNLHlCQUF5QixDQUFDO0FBRXZFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQWlCLE1BQU0sd0JBQXdCLENBQUM7QUFHeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsb0JBQW9CLEVBQTBCLE1BQU0sY0FBYyxDQUFDO0FBRTVFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDdEMscUNBQXFDO0FBQ3JDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7Ozs7QUFpQjlELE1BQU0sT0FBTyxrQkFBa0I7SUFHVjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFQbkIsb0dBQW9HO0lBQ3BHLFlBQ21CLElBQWdCLEVBQ2hCLFVBQXNCLEVBQ3RCLGNBQThCLEVBQzlCLGFBQTRCLEVBQzVCLFlBQStDLEVBQy9DLG1CQUF3QztRQUx4QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGlCQUFZLEdBQVosWUFBWSxDQUFtQztRQUMvQyx3QkFBbUIsR0FBbkIsbUJBQW1C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VSxDQUFDLE9BQU8sR0FBRyxvQkFBb0IsQ0FBQyxPQUFPLENBQUM7WUFDbEQsTUFBTSxpQkFBaUIsR0FBRyxjQUFjLENBQ3RDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUMzRCxDQUFDO1lBQzNCLG1CQUFtQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQzVDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLFlBQTBCLEVBQUUsRUFBRTtnQkFDcEQsVUFBVSxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUM7WUFDeEMsQ0FBQyxDQUFDLENBQUM7WUFDSCxPQUFPLFVBQVUsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7NEVBbGNVLGtCQUFrQjtnRUFBbEIsa0JBQWtCLFdBQWxCLGtCQUFrQixtQkFGakIsTUFBTTs7aUZBRVAsa0JBQWtCO2NBSDlCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIE9tYXBpRmFtaWx5LFxuICBPbWFwaUZhbWlseU9wdGluLFxuICBPbWFwaUZhbWlseU9wdGlvbixcbiAgT21hcGlGYW1pbHlUaWVyLFxuICBPbWFwaU1vYmlsZURhdGEsXG4gIE9tYXBpUHJvZHVjdEluZm8sXG4gIFJhd01vYmlsZURhdGEsXG4gIFJhd09tYXBpRmFtaWx5LFxuICBSYXdPbWFwaUZhbWlseU9wdEluLFxuICBSYXdPbWFwaUZhbWlseU9wdGlvbixcbiAgUmF3T21hcGlGYW1pbHlQcm9kdWN0LFxuICBSYXdPbWFwaUZhbWlseVRpZXIsXG4gIFJhd09tYXBpUHJvZHVjdCxcbiAgUmF3T21hcGlQcm9kdWN0VGllcixcbn0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIG1lcmdlTWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBFcnJvck1lc3NhZ2UsIE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnQHRlbGVuZXQvbmctbGliLW1lc3NhZ2UnO1xuaW1wb3J0IHsgVXJsU2VydmljZSB9IGZyb20gJ0B0ZWxlbmV0L25nLWxpYi1wYWdlJztcbmltcG9ydCB7IGZsYXRNYXAsIGlzRW1wdHkgfSBmcm9tICdsb2Rhc2gtZXMnO1xuaW1wb3J0IHsgQ29uZmlnQ29uc3RhbnRzLCBDb25maWdTZXJ2aWNlIH0gZnJvbSAnQHRlbGVuZXQvbmctbGliLWNvbmZpZyc7XG5pbXBvcnQgeyBPbWFwaVByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi9vbWFwaS1wcm9kdWN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgT21hcGlQcm9kdWN0IH0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9tYXBpRmFtaWx5Q29uc3RhbnRzLCBPbWFwaUZhbWlseVByb2R1Y3RUeXBlIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IE9tYXBpQ2FjaGVTZXJ2aWNlIH0gZnJvbSAnLi9jYWNoZS9vbWFwaS1jYWNoZS5zZXJ2aWNlJztcbmltcG9ydCB7IE9tYXBpVXRpbHMgfSBmcm9tICcuLi91dGlscyc7XG4vKiBlc2xpbnQtZGlzYWJsZSByeGpzL25vLWludGVybmFsICovXG5pbXBvcnQgeyBmaXJzdFZhbHVlRnJvbSB9IGZyb20gJ3J4anMvaW50ZXJuYWwvZmlyc3RWYWx1ZUZyb20nO1xuaW1wb3J0IHtcbiAgS2xpa01vYmlsZURhdGEsXG4gIEtsaWtPbWFwaUZhbWlseSxcbiAgS2xpa09tYXBpRmFtaWx5T3B0SW4sXG4gIEtsaWtPbWFwaUZhbWlseU9wdGlvbixcbiAgS2xpa09tYXBpRmFtaWx5UHJvZHVjdCxcbiAgS2xpa09tYXBpRmFtaWx5VGllcixcbiAgS2xpa09tYXBpUHJvZHVjdCxcbiAgS2xpa09tYXBpUHJvZHVjdFRpZXIsXG4gIEtsaWtPcHRpblBheCxcbiAgS2xpa09wdGluVGllcixcbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9rbGlrLW9tYXBpLWZhbWlseS5pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgT21hcGlGYW1pbHlTZXJ2aWNlIHtcbiAgLy8gRklYTUUgdGhpcyBzZXJ2aWNlIGhhcyB0byBiZSByZWZhY3RvcmVkIC0gaXRzIGZ1bGwgb2YgcHJvbWlzZXMgYmVpbmcgY3JlYXRlZCBvdXQgb2YgYW4gb2JzZXJ2YWJsZVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSByZWFkb25seSB1cmxTZXJ2aWNlOiBVcmxTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNhY2hlU2VydmljZTogT21hcGlDYWNoZVNlcnZpY2U8UmF3T21hcGlGYW1pbHk+LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgb21hcGlQcm9kdWN0U2VydmljZTogT21hcGlQcm9kdWN0U2VydmljZVxuICApIHt9XG5cbiAgZ2V0RmFtaWx5KG1lc3NhZ2VHcm91cDogc3RyaW5nLCBmYW1pbHk6IHN0cmluZyk6IE9ic2VydmFibGU8T21hcGlGYW1pbHk+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRGYW1pbHlCeUVuZHBvaW50KG1lc3NhZ2VHcm91cCwgdGhpcy5nZXRPbWFwaUZhbWlseVVybChmYW1pbHkpKTtcbiAgfVxuXG4gIGdldEtsaWtGYW1pbHkobWVzc2FnZUdyb3VwOiBzdHJpbmcsIGZhbWlseTogc3RyaW5nKTogT2JzZXJ2YWJsZTxLbGlrT21hcGlGYW1pbHk+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRLbGlrRmFtaWx5QnlFbmRwb2ludChtZXNzYWdlR3JvdXAsIHRoaXMuZ2V0T21hcGlGYW1pbHlVcmwoZmFtaWx5KSk7XG4gIH1cblxuICBwcml2YXRlIGdldE9tYXBpRmFtaWx5VXJsKGZhbWlseTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWdTZXJ2aWNlLmdldENvbmZpZyhDb25maWdDb25zdGFudHMuT01BUElfVVJMKSArICcvcHVibGljL2ZhbWlseS8nICsgZmFtaWx5O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGYW1pbHlCeUVuZHBvaW50KG1lc3NhZ2VHcm91cDogc3RyaW5nLCBlbmRwb2ludDogc3RyaW5nKTogT2JzZXJ2YWJsZTxPbWFwaUZhbWlseT4ge1xuICAgIGlmICghdGhpcy5jYWNoZVNlcnZpY2UuZ2V0KGVuZHBvaW50KSkge1xuICAgICAgdGhpcy5jYWNoZVNlcnZpY2UuYWRkKGVuZHBvaW50LCB0aGlzLmh0dHAuZ2V0PFJhd09tYXBpRmFtaWx5PihlbmRwb2ludCwgdGhpcy5nZXRIdHRwQ29uZmlnKCkpKTtcbiAgICB9XG4gICAgY29uc3QgcHJvZHVjdEluZm9Qcm9taXNlczogUHJvbWlzZTxPbWFwaVByb2R1Y3Q+W10gPSBbXTtcblxuICAgIHJldHVybiB0aGlzLmNhY2hlU2VydmljZS5nZXQoZW5kcG9pbnQpLnBpcGUoXG4gICAgICB0YWtlKDEpLFxuICAgICAgbWFwKChyYXdPbWFwaUZhbWlseTogUmF3T21hcGlGYW1pbHkpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VGYW1pbHkobWVzc2FnZUdyb3VwLCByYXdPbWFwaUZhbWlseSwgcHJvZHVjdEluZm9Qcm9taXNlcyk7XG4gICAgICB9KSxcbiAgICAgIG1lcmdlTWFwKGFzeW5jIChvbWFwaUZhbWlseTogT21hcGlGYW1pbHkpID0+IHtcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvZHVjdEluZm9Qcm9taXNlcyk7XG4gICAgICAgIHJldHVybiBvbWFwaUZhbWlseTtcbiAgICAgIH0pLFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB0aGlzLmhhbmRsZUVycm9yKGVycm9yLCBtZXNzYWdlR3JvdXApKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHBhcnNlRmFtaWx5KFxuICAgIG1lc3NhZ2VHcm91cDogc3RyaW5nLFxuICAgIHJhd09tYXBpRmFtaWx5OiBSYXdPbWFwaUZhbWlseSxcbiAgICBwcm9kdWN0SW5mb1Byb21pc2VzOiBQcm9taXNlPE9tYXBpUHJvZHVjdD5bXVxuICApOiBPbWFwaUZhbWlseSB7XG4gICAgY29uc3Qgb21hcGlGYW1pbHk6IE9tYXBpRmFtaWx5ID0geyB0aWVyczogW10gfTtcblxuICAgIHRoaXMucGFyc2VUaWVycyhtZXNzYWdlR3JvdXAsIHJhd09tYXBpRmFtaWx5LCBvbWFwaUZhbWlseSwgcHJvZHVjdEluZm9Qcm9taXNlcyk7XG4gICAgdGhpcy5wYXJzZVByb2R1Y3RzQnlUeXBlKG1lc3NhZ2VHcm91cCwgcmF3T21hcGlGYW1pbHksIG9tYXBpRmFtaWx5LCBwcm9kdWN0SW5mb1Byb21pc2VzKTtcbiAgICB0aGlzLnBhcnNlT3B0aW5zKG1lc3NhZ2VHcm91cCwgcmF3T21hcGlGYW1pbHksIG9tYXBpRmFtaWx5LCBwcm9kdWN0SW5mb1Byb21pc2VzKTtcbiAgICBpZiAocmF3T21hcGlGYW1pbHkub3B0aW9ucykge1xuICAgICAgdGhpcy5wYXJzZU9wdGlvbnMobWVzc2FnZUdyb3VwLCByYXdPbWFwaUZhbWlseSwgb21hcGlGYW1pbHksIHByb2R1Y3RJbmZvUHJvbWlzZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBvbWFwaUZhbWlseTtcbiAgfVxuXG4gIHByaXZhdGUgcGFyc2VUaWVycyhcbiAgICBtZXNzYWdlR3JvdXA6IHN0cmluZyxcbiAgICByYXdPbWFwaUZhbWlseTogUmF3T21hcGlGYW1pbHksXG4gICAgb21hcGlGYW1pbHk6IE9tYXBpRmFtaWx5LFxuICAgIHByb2R1Y3RJbmZvUHJvbWlzZXM6IFByb21pc2U8T21hcGlQcm9kdWN0PltdXG4gICkge1xuICAgIHJhd09tYXBpRmFtaWx5LnRpZXJzLmZvckVhY2goKHRpZXI6IFJhd09tYXBpRmFtaWx5VGllcikgPT4ge1xuICAgICAgb21hcGlGYW1pbHkudGllcnMucHVzaCh0aGlzLmNyZWF0ZVRpZXIobWVzc2FnZUdyb3VwLCB0aWVyLCBwcm9kdWN0SW5mb1Byb21pc2VzKSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHBhcnNlUHJvZHVjdHNCeVR5cGUoXG4gICAgbWVzc2FnZUdyb3VwOiBzdHJpbmcsXG4gICAgcmF3T21hcGlGYW1pbHk6IFJhd09tYXBpRmFtaWx5LFxuICAgIG9tYXBpRmFtaWx5OiBPbWFwaUZhbWlseSxcbiAgICBwcm9kdWN0SW5mb1Byb21pc2VzOiBQcm9taXNlPE9tYXBpUHJvZHVjdD5bXVxuICApOiB2b2lkIHtcbiAgICBPbWFwaUZhbWlseUNvbnN0YW50cy5GQU1JTFlfUFJPRFVDVF9UWVBFUy5mb3JFYWNoKChwcm9kdWN0VHlwZTogT21hcGlGYW1pbHlQcm9kdWN0VHlwZSkgPT4ge1xuICAgICAgY29uc3QgcHJvZHVjdCA9IHJhd09tYXBpRmFtaWx5LnByb2R1Y3RzLmZpbmQoXG4gICAgICAgIChyYXdPbWFwaUZhbWlseVByb2R1Y3Q6IFJhd09tYXBpRmFtaWx5UHJvZHVjdCkgPT4gcmF3T21hcGlGYW1pbHlQcm9kdWN0LnR5cGUgPT09IHByb2R1Y3RUeXBlXG4gICAgICApO1xuXG4gICAgICBpZiAocHJvZHVjdCkge1xuICAgICAgICB0aGlzLmFkZE9tYXBpUHJvZHVjdFRvVGllcihtZXNzYWdlR3JvdXAsIHByb2R1Y3QsIG9tYXBpRmFtaWx5LCBwcm9kdWN0SW5mb1Byb21pc2VzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcGFyc2VPcHRpbnMoXG4gICAgbWVzc2FnZUdyb3VwOiBzdHJpbmcsXG4gICAgcmF3T21hcGlGYW1pbHk6IFJhd09tYXBpRmFtaWx5LFxuICAgIG9tYXBpRmFtaWx5OiBPbWFwaUZhbWlseSxcbiAgICBwcm9kdWN0SW5mb1Byb21pc2VzOiBQcm9taXNlPE9tYXBpUHJvZHVjdCB8IHVuZGVmaW5lZD5bXVxuICApOiB2b2lkIHtcbiAgICBvbWFwaUZhbWlseS50aWVycy5mb3JFYWNoKChvbWFwaUZhbWlseVRpZXI6IE9tYXBpRmFtaWx5VGllcikgPT4ge1xuICAgICAgaWYgKG9tYXBpRmFtaWx5VGllcikge1xuICAgICAgICBvbWFwaUZhbWlseVRpZXIub3B0aW5zID0gZmxhdE1hcChcbiAgICAgICAgICByYXdPbWFwaUZhbWlseS5vcHRpbnMubWFwKChyYXdPcHRpbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gcmF3T3B0aW4ua2V5O1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFRpZXIgPSByYXdPcHRpbi50aWVycy5maW5kKCh0aWVyKSA9PiB0aWVyLmtleSA9PT0gb21hcGlGYW1pbHlUaWVyLmtleSk7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIGN1cnJlbnRUaWVyPy5wYXg/Lm1hcCgocGF4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW4gPSB7fSBhcyBPbWFwaUZhbWlseU9wdGluO1xuICAgICAgICAgICAgICAgIG9wdGluLmtleSA9IGtleTtcbiAgICAgICAgICAgICAgICBvcHRpbi5tb2JpbGVJZCA9IHBheC5vbWFwaUlkO1xuICAgICAgICAgICAgICAgIG9wdGluLm9tYXBpSWQgPSBwYXgub3B0aW5JZDtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBmaXJzdFZhbHVlRnJvbSh0aGlzLm9tYXBpUHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdEJ5SWQobWVzc2FnZUdyb3VwLCBwYXgub3B0aW5JZCkpO1xuXG4gICAgICAgICAgICAgICAgcHJvZHVjdEluZm9Qcm9taXNlcy5wdXNoKHByb21pc2UpO1xuXG4gICAgICAgICAgICAgICAgcHJvbWlzZS50aGVuKChvbWFwaVByb2R1Y3Q/OiBPbWFwaVByb2R1Y3QgfCB1bmRlZmluZWQpID0+IHtcbiAgICAgICAgICAgICAgICAgIG9wdGluLnByb2R1Y3RJbmZvID0gb21hcGlQcm9kdWN0O1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGluO1xuICAgICAgICAgICAgICB9KSA/PyBbXVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBwYXJzZU9wdGlvbnMoXG4gICAgbWVzc2FnZUdyb3VwOiBzdHJpbmcsXG4gICAgcmF3T21hcGlGYW1pbHk6IFJhd09tYXBpRmFtaWx5LFxuICAgIG9tYXBpRmFtaWx5OiBPbWFwaUZhbWlseSxcbiAgICBwcm9kdWN0SW5mb1Byb21pc2VzOiBQcm9taXNlPE9tYXBpUHJvZHVjdCB8IHVuZGVmaW5lZD5bXVxuICApOiB2b2lkIHtcbiAgICBvbWFwaUZhbWlseS50aWVycy5mb3JFYWNoKChvbWFwaUZhbWlseVRpZXI6IE9tYXBpRmFtaWx5VGllcikgPT4ge1xuICAgICAgb21hcGlGYW1pbHlUaWVyLm9wdGlvbnMgPSBmbGF0TWFwKFxuICAgICAgICByYXdPbWFwaUZhbWlseS5vcHRpb25zLm1hcCgocmF3T3B0aW9uKSA9PiB7XG4gICAgICAgICAgY29uc3Qgb3B0aW9uID0ge30gYXMgT21hcGlGYW1pbHlPcHRpb247XG4gICAgICAgICAgb3B0aW9uLmtleSA9IHJhd09wdGlvbi5rZXk7XG4gICAgICAgICAgb3B0aW9uLnR5cGUgPSByYXdPcHRpb24udHlwZTtcbiAgICAgICAgICBvcHRpb24ub21hcGlJZCA9IHJhd09wdGlvbi5vbWFwaUlkO1xuICAgICAgICAgIG9wdGlvbi5wYXJlbnRzID0gcmF3T3B0aW9uLnBhcmVudHM7XG5cbiAgICAgICAgICBjb25zdCBwcm9taXNlID0gZmlyc3RWYWx1ZUZyb20odGhpcy5vbWFwaVByb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3RCeUlkKG1lc3NhZ2VHcm91cCwgcmF3T3B0aW9uLm9tYXBpSWQpKTtcblxuICAgICAgICAgIHByb2R1Y3RJbmZvUHJvbWlzZXMucHVzaChwcm9taXNlKTtcblxuICAgICAgICAgIHByb21pc2UudGhlbigob21hcGlQcm9kdWN0PzogT21hcGlQcm9kdWN0KSA9PiB7XG4gICAgICAgICAgICBvcHRpb24ucHJvZHVjdEluZm8gPSBvbWFwaVByb2R1Y3Q7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkT21hcGlQcm9kdWN0VG9UaWVyKFxuICAgIG1lc3NhZ2VHcm91cDogc3RyaW5nLFxuICAgIHJhd09tYXBpRmFtaWx5UHJvZHVjdDogUmF3T21hcGlGYW1pbHlQcm9kdWN0LFxuICAgIG9tYXBpRmFtaWx5OiBPbWFwaUZhbWlseSxcbiAgICBwcm9kdWN0SW5mb1Byb21pc2VzOiBQcm9taXNlPE9tYXBpUHJvZHVjdD5bXVxuICApOiB2b2lkIHtcbiAgICByYXdPbWFwaUZhbWlseVByb2R1Y3QudGllcnMuZm9yRWFjaCgocmF3T21hcGlQcm9kdWN0VGllcjogUmF3T21hcGlQcm9kdWN0VGllcikgPT4ge1xuICAgICAgdGhpcy5hZGRPbWFwaUZhbWlseU9iamVjdFRvVGllcihcbiAgICAgICAgbWVzc2FnZUdyb3VwLFxuICAgICAgICBvbWFwaUZhbWlseSxcbiAgICAgICAgcmF3T21hcGlGYW1pbHlQcm9kdWN0LnR5cGUsXG4gICAgICAgIHJhd09tYXBpUHJvZHVjdFRpZXIsXG4gICAgICAgIHByb2R1Y3RJbmZvUHJvbWlzZXNcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFkZE9tYXBpRmFtaWx5T2JqZWN0VG9UaWVyKFxuICAgIG1lc3NhZ2VHcm91cDogc3RyaW5nLFxuICAgIGZhbWlseTogT21hcGlGYW1pbHksXG4gICAgcHJvZHVjdFR5cGU6IHN0cmluZyxcbiAgICByYXdPbWFwaVByb2R1Y3RUaWVyOiBSYXdPbWFwaVByb2R1Y3RUaWVyLFxuICAgIHByb2R1Y3RJbmZvUHJvbWlzZXM6IFByb21pc2U8T21hcGlQcm9kdWN0PltdXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IGZhbWlseVRpZXI6IE9tYXBpRmFtaWx5VGllciB8IHVuZGVmaW5lZCA9IGZhbWlseS50aWVycy5maW5kKFxuICAgICAgKHRpZXI6IE9tYXBpRmFtaWx5VGllcikgPT4gdGllci5rZXkgPT09IHJhd09tYXBpUHJvZHVjdFRpZXIua2V5XG4gICAgKTtcbiAgICBjb25zdCBvbWFwaVByb2R1Y3RJbmZvczogT21hcGlQcm9kdWN0SW5mb1tdID0gdGhpcy5jcmVhdGVPbWFwaVByb2R1Y3RJbmZvcyhcbiAgICAgIG1lc3NhZ2VHcm91cCxcbiAgICAgIHJhd09tYXBpUHJvZHVjdFRpZXIsXG4gICAgICBwcm9kdWN0SW5mb1Byb21pc2VzXG4gICAgKTtcbiAgICBpZiAoZmFtaWx5VGllcikge1xuICAgICAgaWYgKCFmYW1pbHlUaWVyW3Byb2R1Y3RUeXBlIGFzIGtleW9mIE9tYXBpRmFtaWx5VGllcl0pIHtcbiAgICAgICAgZmFtaWx5VGllcltwcm9kdWN0VHlwZV0gPSBbXTtcbiAgICAgIH1cbiAgICAgIGZhbWlseVRpZXJbcHJvZHVjdFR5cGVdID0gZmFtaWx5VGllcltwcm9kdWN0VHlwZV0uY29uY2F0KG9tYXBpUHJvZHVjdEluZm9zKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZU9tYXBpUHJvZHVjdEluZm9zKFxuICAgIG1lc3NhZ2VHcm91cDogc3RyaW5nLFxuICAgIHJhd09tYXBpUHJvZHVjdFRpZXI6IFJhd09tYXBpUHJvZHVjdFRpZXIsXG4gICAgcHJvZHVjdEluZm9Qcm9taXNlczogUHJvbWlzZTxPbWFwaVByb2R1Y3QgfCB1bmRlZmluZWQ+W11cbiAgKTogT21hcGlQcm9kdWN0SW5mb1tdIHtcbiAgICBjb25zdCBwcm9kdWN0czogT21hcGlQcm9kdWN0SW5mb1tdID0gW107XG4gICAgbGV0IG1vYmlsZURhdGE6IE9tYXBpTW9iaWxlRGF0YVtdID0gW107XG5cbiAgICByYXdPbWFwaVByb2R1Y3RUaWVyLnByb2R1Y3RzLmZvckVhY2goKHJhd09tYXBpUHJvZHVjdDogUmF3T21hcGlQcm9kdWN0KSA9PiB7XG4gICAgICBjb25zdCBvbWFwaVByb2R1Y3RJbmZvOiBPbWFwaVByb2R1Y3RJbmZvID0ge1xuICAgICAgICBvbWFwaUlkOiByYXdPbWFwaVByb2R1Y3Qub21hcGlJZCxcbiAgICAgIH07XG4gICAgICBpZiAocmF3T21hcGlQcm9kdWN0Lm1vYmlsZURhdGEpIHtcbiAgICAgICAgcmF3T21hcGlQcm9kdWN0Lm1vYmlsZURhdGEuZm9yRWFjaCgocmF3TW9iaWxlRGF0YTogUmF3TW9iaWxlRGF0YSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9tYXBpTW9iaWxlRGF0YSA9IHt9IGFzIE9tYXBpTW9iaWxlRGF0YTtcblxuICAgICAgICAgIG9tYXBpTW9iaWxlRGF0YS5vbWFwaUlkID0gcmF3TW9iaWxlRGF0YS5vbWFwaUlkO1xuICAgICAgICAgIG9tYXBpTW9iaWxlRGF0YS5rZXkgPSByYXdNb2JpbGVEYXRhLmtleTtcbiAgICAgICAgICBjb25zdCBvbWFwaU1vYmlsZURhdGFQcm9taXNlcyA9IGZpcnN0VmFsdWVGcm9tKFxuICAgICAgICAgICAgdGhpcy5vbWFwaVByb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3RCeUlkKG1lc3NhZ2VHcm91cCwgb21hcGlNb2JpbGVEYXRhLm9tYXBpSWQpXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHByb2R1Y3RJbmZvUHJvbWlzZXMucHVzaChvbWFwaU1vYmlsZURhdGFQcm9taXNlcyk7XG4gICAgICAgICAgb21hcGlNb2JpbGVEYXRhUHJvbWlzZXMudGhlbigob21hcGlQcm9kdWN0PzogT21hcGlQcm9kdWN0KSA9PiB7XG4gICAgICAgICAgICBvbWFwaU1vYmlsZURhdGEucHJvZHVjdEluZm8gPSBvbWFwaVByb2R1Y3Q7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbW9iaWxlRGF0YS5wdXNoKG9tYXBpTW9iaWxlRGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKGlzRW1wdHkoT21hcGlVdGlscy5nZXRDb21ib1Byb2R1Y3RzKHJhd09tYXBpUHJvZHVjdC5vbWFwaUlkKSkpIHtcbiAgICAgICAgY29uc3QgcHJvbWlzZTogUHJvbWlzZTxPbWFwaVByb2R1Y3QgfCB1bmRlZmluZWQ+ID0gZmlyc3RWYWx1ZUZyb20oXG4gICAgICAgICAgdGhpcy5vbWFwaVByb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3RCeUlkKG1lc3NhZ2VHcm91cCwgcmF3T21hcGlQcm9kdWN0Lm9tYXBpSWQpXG4gICAgICAgICk7XG5cbiAgICAgICAgcHJvZHVjdEluZm9Qcm9taXNlcy5wdXNoKHByb21pc2UpO1xuICAgICAgICBwcm9taXNlLnRoZW4oKG9tYXBpUHJvZHVjdD86IE9tYXBpUHJvZHVjdCkgPT4ge1xuICAgICAgICAgIG9tYXBpUHJvZHVjdEluZm8ucHJvZHVjdEluZm8gPSBvbWFwaVByb2R1Y3Q7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgb21hcGlQcm9kdWN0SW5mby5tb2JpbGVEYXRhID0gbW9iaWxlRGF0YTtcblxuICAgICAgcHJvZHVjdHMucHVzaChvbWFwaVByb2R1Y3RJbmZvKTtcbiAgICAgIG1vYmlsZURhdGEgPSBbXTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9kdWN0cztcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlVGllcihcbiAgICBtZXNzYWdlR3JvdXA6IHN0cmluZyxcbiAgICByYXdPbWFwaVRpZXI6IFJhd09tYXBpRmFtaWx5VGllcixcbiAgICBwcm9kdWN0SW5mb1Byb21pc2VzOiBQcm9taXNlPE9tYXBpUHJvZHVjdCB8IHVuZGVmaW5lZD5bXVxuICApOiBPbWFwaUZhbWlseVRpZXIge1xuICAgIGNvbnN0IHRpZXI6IE9tYXBpRmFtaWx5VGllciA9IHtcbiAgICAgIG9tYXBpSWQ6IHJhd09tYXBpVGllci5vbWFwaUlkLFxuICAgICAga2V5OiByYXdPbWFwaVRpZXIua2V5LFxuICAgIH07XG4gICAgY29uc3QgcHJvbWlzZSA9IGZpcnN0VmFsdWVGcm9tKHRoaXMub21hcGlQcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0QnlJZChtZXNzYWdlR3JvdXAsIHJhd09tYXBpVGllci5vbWFwaUlkKSk7XG5cbiAgICBwcm9kdWN0SW5mb1Byb21pc2VzLnB1c2gocHJvbWlzZSk7XG5cbiAgICBwcm9taXNlLnRoZW4oKG9tYXBpUHJvZHVjdD86IE9tYXBpUHJvZHVjdCkgPT4ge1xuICAgICAgdGllci5wcm9kdWN0SW5mbyA9IG9tYXBpUHJvZHVjdDtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aWVyO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRIdHRwQ29uZmlnKCk6IHsgaGVhZGVyczogUmVjb3JkPHN0cmluZywgc3RyaW5nPjsgdGltZW91dDogbnVtYmVyOyBjYWNoZTogYm9vbGVhbiB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAneC1hbHQtcmVmZXJlcic6IHRoaXMudXJsU2VydmljZS5nZXRDdXJyZW50VXJsKCksXG4gICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0JyxcbiAgICAgIH0sXG4gICAgICB0aW1lb3V0OiAxMDAwMCxcbiAgICAgIGNhY2hlOiB0cnVlLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSwgbWVzc2FnZUdyb3VwOiBzdHJpbmcpIHtcbiAgICBpZiAoZXJyb3Iuc3RhdHVzICE9PSA0MTApIHtcbiAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkTWVzc2FnZShuZXcgRXJyb3JNZXNzYWdlKG1lc3NhZ2VHcm91cCwgJ29tYXBpLScgKyBlcnJvci5zdGF0dXMpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhyb3dFcnJvcigoKSA9PiAnQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgdHJ5aW5nIHRvIGZldGNoICcgKyBtZXNzYWdlR3JvdXApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRLbGlrRmFtaWx5QnlFbmRwb2ludChtZXNzYWdlR3JvdXA6IHN0cmluZywgZW5kcG9pbnQ6IHN0cmluZyk6IE9ic2VydmFibGU8S2xpa09tYXBpRmFtaWx5PiB7XG4gICAgaWYgKCF0aGlzLmNhY2hlU2VydmljZS5nZXQoZW5kcG9pbnQpKSB7XG4gICAgICB0aGlzLmNhY2hlU2VydmljZS5hZGQoZW5kcG9pbnQsIHRoaXMuaHR0cC5nZXQ8UmF3T21hcGlGYW1pbHk+KGVuZHBvaW50LCB0aGlzLmdldEh0dHBDb25maWcoKSkpO1xuICAgIH1cbiAgICBjb25zdCBwcm9kdWN0SW5mb1Byb21pc2VzOiBQcm9taXNlPE9tYXBpUHJvZHVjdD5bXSA9IFtdO1xuICAgIHJldHVybiB0aGlzLmNhY2hlU2VydmljZS5nZXQoZW5kcG9pbnQpLnBpcGUoXG4gICAgICB0YWtlKDEpLFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB0aGlzLmhhbmRsZUVycm9yKGVycm9yLCBtZXNzYWdlR3JvdXApKSxcbiAgICAgIG1hcCgocmF3T21hcGlGYW1pbHk6IFJhd09tYXBpRmFtaWx5KSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUZhbWlseShtZXNzYWdlR3JvdXAsIHJhd09tYXBpRmFtaWx5LCBwcm9kdWN0SW5mb1Byb21pc2VzKTtcbiAgICAgIH0pLFxuICAgICAgbWVyZ2VNYXAoYXN5bmMgKG9tYXBpRmFtaWx5OiBLbGlrT21hcGlGYW1pbHkpID0+IHtcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvZHVjdEluZm9Qcm9taXNlcyk7XG4gICAgICAgIHJldHVybiBvbWFwaUZhbWlseTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRmFtaWx5KFxuICAgIG1lc3NhZ2VHcm91cDogc3RyaW5nLFxuICAgIHJhd09tYXBpRmFtaWx5OiBSYXdPbWFwaUZhbWlseSxcbiAgICBwcm9kdWN0SW5mb1Byb21pc2VzOiBQcm9taXNlPE9tYXBpUHJvZHVjdD5bXVxuICApOiBLbGlrT21hcGlGYW1pbHkge1xuICAgIGNvbnN0IG9tYXBpRmFtaWx5ID0ge30gYXMgS2xpa09tYXBpRmFtaWx5O1xuICAgIG9tYXBpRmFtaWx5LnRpZXJzID0gdGhpcy5jcmVhdGVLbGlrVGllcihyYXdPbWFwaUZhbWlseS50aWVycywgbWVzc2FnZUdyb3VwLCBwcm9kdWN0SW5mb1Byb21pc2VzKTtcbiAgICBvbWFwaUZhbWlseS5wcm9kdWN0cyA9IHRoaXMuY3JlYXRlS2xpa1Byb2R1Y3QocmF3T21hcGlGYW1pbHkucHJvZHVjdHMsIG1lc3NhZ2VHcm91cCwgcHJvZHVjdEluZm9Qcm9taXNlcyk7XG4gICAgb21hcGlGYW1pbHkub3B0aW5zID0gdGhpcy5jcmVhdGVLbGlrT3B0aW5zKHJhd09tYXBpRmFtaWx5Lm9wdGlucywgbWVzc2FnZUdyb3VwLCBwcm9kdWN0SW5mb1Byb21pc2VzKTtcbiAgICBvbWFwaUZhbWlseS5vcHRpb25zID0gdGhpcy5jcmVhdGVLbGlrT3B0aW9ucyhyYXdPbWFwaUZhbWlseS5vcHRpb25zLCBtZXNzYWdlR3JvdXAsIHByb2R1Y3RJbmZvUHJvbWlzZXMpO1xuICAgIHJldHVybiBvbWFwaUZhbWlseTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlS2xpa1RpZXIoXG4gICAgcmF3T21hcGlGYW1pbHlUaWVyOiBSYXdPbWFwaUZhbWlseVRpZXJbXSxcbiAgICBtZXNzYWdlR3JvdXA6IHN0cmluZyxcbiAgICBwcm9kdWN0SW5mb1Byb21pc2VzOiBQcm9taXNlPE9tYXBpUHJvZHVjdD5bXVxuICApOiBLbGlrT21hcGlGYW1pbHlUaWVyW10ge1xuICAgIHJldHVybiByYXdPbWFwaUZhbWlseVRpZXIubWFwKChyYXdGYW1pbHlUaWVyKSA9PiB7XG4gICAgICBjb25zdCB0aWVyID0ge30gYXMgS2xpa09tYXBpRmFtaWx5VGllcjtcbiAgICAgIHRpZXIua2V5ID0gcmF3RmFtaWx5VGllci5rZXk7XG4gICAgICB0aWVyLm9tYXBpSWQgPSByYXdGYW1pbHlUaWVyLm9tYXBpSWQ7XG4gICAgICBjb25zdCBwcm9taXNlID0gZmlyc3RWYWx1ZUZyb20oXG4gICAgICAgIHRoaXMub21hcGlQcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0QnlJZChtZXNzYWdlR3JvdXAsIHJhd0ZhbWlseVRpZXIub21hcGlJZClcbiAgICAgICkgYXMgUHJvbWlzZTxPbWFwaVByb2R1Y3Q+O1xuICAgICAgcHJvZHVjdEluZm9Qcm9taXNlcy5wdXNoKHByb21pc2UpO1xuICAgICAgcHJvbWlzZS50aGVuKChvbWFwaVByb2R1Y3Q6IE9tYXBpUHJvZHVjdCkgPT4ge1xuICAgICAgICB0aWVyLnByb2R1Y3RJbmZvID0gb21hcGlQcm9kdWN0O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGllcjtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlS2xpa1Byb2R1Y3QoXG4gICAgcmF3T21hcGlGYW1pbHlQcm9kdWN0OiBSYXdPbWFwaUZhbWlseVByb2R1Y3RbXSxcbiAgICBtZXNzYWdlR3JvdXA6IHN0cmluZyxcbiAgICBwcm9kdWN0SW5mb1Byb21pc2VzOiBQcm9taXNlPE9tYXBpUHJvZHVjdD5bXVxuICApOiBLbGlrT21hcGlGYW1pbHlQcm9kdWN0W10ge1xuICAgIHJldHVybiByYXdPbWFwaUZhbWlseVByb2R1Y3QubWFwKChyYXdGYW1pbHlQcm9kdWN0KSA9PiB7XG4gICAgICBjb25zdCBwcm9kdWN0ID0ge30gYXMgS2xpa09tYXBpRmFtaWx5UHJvZHVjdDtcbiAgICAgIHByb2R1Y3QudHlwZSA9IHJhd0ZhbWlseVByb2R1Y3QudHlwZTtcbiAgICAgIHByb2R1Y3QudGllcnMgPSB0aGlzLmdldFByb2R1Y3RUaWVycyhyYXdGYW1pbHlQcm9kdWN0LCBtZXNzYWdlR3JvdXAsIHByb2R1Y3RJbmZvUHJvbWlzZXMpO1xuICAgICAgcmV0dXJuIHByb2R1Y3Q7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUtsaWtPcHRpbnMoXG4gICAgcmF3T21hcGlGYW1pbHlPcHRJbjogUmF3T21hcGlGYW1pbHlPcHRJbltdLFxuICAgIG1lc3NhZ2VHcm91cDogc3RyaW5nLFxuICAgIHByb2R1Y3RJbmZvUHJvbWlzZXM6IFByb21pc2U8T21hcGlQcm9kdWN0PltdXG4gICk6IEtsaWtPbWFwaUZhbWlseU9wdEluW10ge1xuICAgIHJldHVybiByYXdPbWFwaUZhbWlseU9wdEluLm1hcCgocmF3T3B0aW5zKSA9PiB7XG4gICAgICBjb25zdCBvcHRpbiA9IHt9IGFzIEtsaWtPbWFwaUZhbWlseU9wdEluO1xuICAgICAgb3B0aW4ua2V5ID0gcmF3T3B0aW5zLmtleTtcbiAgICAgIG9wdGluLnRpZXJzID0gW107XG4gICAgICBvcHRpbi50aWVycyA9IHJhd09wdGlucy50aWVycz8ubWFwKChyYXdUaWVyKSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGluVGllciA9IHt9IGFzIEtsaWtPcHRpblRpZXI7XG4gICAgICAgIG9wdGluVGllci5rZXkgPSByYXdUaWVyLmtleTtcbiAgICAgICAgb3B0aW5UaWVyLnBheCA9IFtdO1xuICAgICAgICBvcHRpblRpZXIucGF4ID0gcmF3VGllci5wYXg/Lm1hcCgocmF3UGF4KSA9PiB7XG4gICAgICAgICAgY29uc3Qgb3B0aW5QYXggPSB7fSBhcyBLbGlrT3B0aW5QYXg7XG4gICAgICAgICAgb3B0aW5QYXgub21hcGlJZCA9IHJhd1BheC5vbWFwaUlkO1xuICAgICAgICAgIG9wdGluUGF4Lm9wdGluSWQgPSByYXdQYXgub3B0aW5JZDtcbiAgICAgICAgICBjb25zdCBwcm9taXNlID0gZmlyc3RWYWx1ZUZyb20oXG4gICAgICAgICAgICB0aGlzLm9tYXBpUHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdEJ5SWQobWVzc2FnZUdyb3VwLCByYXdQYXgub3B0aW5JZClcbiAgICAgICAgICApIGFzIFByb21pc2U8T21hcGlQcm9kdWN0PjtcbiAgICAgICAgICBwcm9kdWN0SW5mb1Byb21pc2VzLnB1c2gocHJvbWlzZSk7XG4gICAgICAgICAgcHJvbWlzZS50aGVuKChvbWFwaVByb2R1Y3Q6IE9tYXBpUHJvZHVjdCkgPT4ge1xuICAgICAgICAgICAgb3B0aW5QYXgucHJvZHVjdEluZm8gPSBvbWFwaVByb2R1Y3Q7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIG9wdGluUGF4O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG9wdGluVGllcjtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG9wdGluO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVLbGlrT3B0aW9ucyhcbiAgICByYXdPbWFwaUZhbWlseU9wdEluOiBSYXdPbWFwaUZhbWlseU9wdGlvbltdLFxuICAgIG1lc3NhZ2VHcm91cDogc3RyaW5nLFxuICAgIHByb2R1Y3RJbmZvUHJvbWlzZXM6IFByb21pc2U8T21hcGlQcm9kdWN0PltdXG4gICk6IEtsaWtPbWFwaUZhbWlseU9wdGlvbltdIHtcbiAgICByZXR1cm4gcmF3T21hcGlGYW1pbHlPcHRJbi5tYXAoKHJhd09wdGlvbikgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0ge30gYXMgS2xpa09tYXBpRmFtaWx5T3B0aW9uO1xuICAgICAgb3B0aW9uLmtleSA9IHJhd09wdGlvbi5rZXk7XG4gICAgICBvcHRpb24ub21hcGlJZCA9IHJhd09wdGlvbi5vbWFwaUlkO1xuICAgICAgb3B0aW9uLnBhcmVudHMgPSByYXdPcHRpb24ucGFyZW50cztcbiAgICAgIG9wdGlvbi50eXBlID0gcmF3T3B0aW9uLnR5cGU7XG4gICAgICBjb25zdCBwcm9taXNlID0gZmlyc3RWYWx1ZUZyb20oXG4gICAgICAgIHRoaXMub21hcGlQcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0QnlJZChtZXNzYWdlR3JvdXAsIHJhd09wdGlvbi5vbWFwaUlkKVxuICAgICAgKSBhcyBQcm9taXNlPE9tYXBpUHJvZHVjdD47XG4gICAgICBwcm9kdWN0SW5mb1Byb21pc2VzLnB1c2gocHJvbWlzZSk7XG4gICAgICBwcm9taXNlLnRoZW4oKG9tYXBpUHJvZHVjdDogT21hcGlQcm9kdWN0KSA9PiB7XG4gICAgICAgIG9wdGlvbi5wcm9kdWN0SW5mbyA9IG9tYXBpUHJvZHVjdDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG9wdGlvbjtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UHJvZHVjdFRpZXJzKFxuICAgIHJhd0ZhbWlseVByb2R1Y3Q6IFJhd09tYXBpRmFtaWx5UHJvZHVjdCxcbiAgICBtZXNzYWdlR3JvdXA6IHN0cmluZyxcbiAgICBwcm9kdWN0SW5mb1Byb21pc2VzOiBQcm9taXNlPE9tYXBpUHJvZHVjdD5bXVxuICApIHtcbiAgICByZXR1cm4gcmF3RmFtaWx5UHJvZHVjdC50aWVycz8ubWFwKChyYXdUaWVyKSA9PiB7XG4gICAgICBjb25zdCB0aWVyID0ge30gYXMgS2xpa09tYXBpUHJvZHVjdFRpZXI7XG4gICAgICB0aWVyLmtleSA9IHJhd1RpZXIua2V5O1xuICAgICAgdGllci5wcm9kdWN0cyA9IHRoaXMuZ2V0UHJvZHVjdERldGFpbHMocmF3VGllciwgbWVzc2FnZUdyb3VwLCBwcm9kdWN0SW5mb1Byb21pc2VzKTtcbiAgICAgIHJldHVybiB0aWVyO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQcm9kdWN0RGV0YWlscyhcbiAgICByYXdUaWVyOiBSYXdPbWFwaVByb2R1Y3RUaWVyLFxuICAgIG1lc3NhZ2VHcm91cDogc3RyaW5nLFxuICAgIHByb2R1Y3RJbmZvUHJvbWlzZXM6IFByb21pc2U8T21hcGlQcm9kdWN0PltdXG4gICk6IEtsaWtPbWFwaVByb2R1Y3RbXSB7XG4gICAgcmV0dXJuIHJhd1RpZXIucHJvZHVjdHM/Lm1hcCgocmF3VGllclByb2R1Y3QpID0+IHtcbiAgICAgIGNvbnN0IHRpZXJQcm9kdWN0ID0ge30gYXMgS2xpa09tYXBpUHJvZHVjdDtcbiAgICAgIHRpZXJQcm9kdWN0LmtleSA9IHJhd1RpZXJQcm9kdWN0LmtleTtcbiAgICAgIHRpZXJQcm9kdWN0Lm9tYXBpSWQgPSByYXdUaWVyUHJvZHVjdC5vbWFwaUlkO1xuICAgICAgY29uc3QgcHJvbWlzZSA9IGZpcnN0VmFsdWVGcm9tKFxuICAgICAgICB0aGlzLm9tYXBpUHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdEJ5SWQobWVzc2FnZUdyb3VwLCByYXdUaWVyUHJvZHVjdC5vbWFwaUlkKVxuICAgICAgKSBhcyBQcm9taXNlPE9tYXBpUHJvZHVjdD47XG4gICAgICBwcm9kdWN0SW5mb1Byb21pc2VzLnB1c2gocHJvbWlzZSk7XG4gICAgICBwcm9taXNlLnRoZW4oKG9tYXBpUHJvZHVjdDogT21hcGlQcm9kdWN0KSA9PiB7XG4gICAgICAgIHRpZXJQcm9kdWN0LnByb2R1Y3RJbmZvID0gb21hcGlQcm9kdWN0O1xuICAgICAgfSk7XG4gICAgICB0aWVyUHJvZHVjdC5tb2JpbGVEYXRhID0gdGhpcy5nZXRNb2JpbGVEYXRhKHJhd1RpZXJQcm9kdWN0LCBtZXNzYWdlR3JvdXAsIHByb2R1Y3RJbmZvUHJvbWlzZXMpO1xuICAgICAgcmV0dXJuIHRpZXJQcm9kdWN0O1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRNb2JpbGVEYXRhKFxuICAgIHJhd1RpZXJQcm9kdWN0OiBSYXdPbWFwaVByb2R1Y3QsXG4gICAgbWVzc2FnZUdyb3VwOiBzdHJpbmcsXG4gICAgcHJvZHVjdEluZm9Qcm9taXNlczogUHJvbWlzZTxPbWFwaVByb2R1Y3Q+W11cbiAgKTogS2xpa01vYmlsZURhdGFbXSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHJhd1RpZXJQcm9kdWN0Lm1vYmlsZURhdGE/Lm1hcCgocmF3VGllclByb2R1Y3RNb2JpbGUpID0+IHtcbiAgICAgIGNvbnN0IG1vYmlsZURhdGEgPSB7fSBhcyBLbGlrTW9iaWxlRGF0YTtcbiAgICAgIG1vYmlsZURhdGEua2V5ID0gcmF3VGllclByb2R1Y3RNb2JpbGUua2V5O1xuICAgICAgbW9iaWxlRGF0YS5vbWFwaUlkID0gcmF3VGllclByb2R1Y3RNb2JpbGUub21hcGlJZDtcbiAgICAgIGNvbnN0IG1vYmlsZURhdGFQcm9taXNlID0gZmlyc3RWYWx1ZUZyb20oXG4gICAgICAgIHRoaXMub21hcGlQcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0QnlJZChtZXNzYWdlR3JvdXAsIHJhd1RpZXJQcm9kdWN0TW9iaWxlLm9tYXBpSWQpXG4gICAgICApIGFzIFByb21pc2U8T21hcGlQcm9kdWN0PjtcbiAgICAgIHByb2R1Y3RJbmZvUHJvbWlzZXMucHVzaChtb2JpbGVEYXRhUHJvbWlzZSk7XG4gICAgICBtb2JpbGVEYXRhUHJvbWlzZS50aGVuKChvbWFwaVByb2R1Y3Q6IE9tYXBpUHJvZHVjdCkgPT4ge1xuICAgICAgICBtb2JpbGVEYXRhLnByb2R1Y3RJbmZvID0gb21hcGlQcm9kdWN0O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbW9iaWxlRGF0YTtcbiAgICB9KTtcbiAgfVxufVxuIl19