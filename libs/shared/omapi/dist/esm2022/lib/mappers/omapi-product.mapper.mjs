import { OmapiProduct } from '../models/omapi-product.model';
import { Injectable } from '@angular/core';
import { CharsEnum } from '../enums/chars.enum';
import { isEmpty } from 'lodash-es';
import * as i0 from "@angular/core";
import * as i1 from "@telenet/ng-lib-page";
export class OmapiProductMapper {
    languageService;
    normalizationService;
    constructor(languageService, normalizationService) {
        this.languageService = languageService;
        this.normalizationService = normalizationService;
    }
    ignoredDarwinSpecifications = ['sharedmobiledata', 'max_mobile_lines'];
    toModel(rawOmapiProduct) {
        return this.createOmapiProduct(rawOmapiProduct);
    }
    createOmapiProduct(rawOmapiProduct) {
        const omapiProduct = new OmapiProduct();
        const rawOmapiProductData = rawOmapiProduct && rawOmapiProduct.product;
        if (rawOmapiProductData) {
            this.mapOmapiData(omapiProduct, rawOmapiProductData);
            const contentForLocale = this.getContentForLocale(rawOmapiProductData.localizedcontent);
            if (contentForLocale) {
                omapiProduct.name = contentForLocale.name;
                omapiProduct.logo = contentForLocale.logo;
            }
            if (rawOmapiProductData.usageLimits) {
                omapiProduct.usageLimits = rawOmapiProductData.usageLimits;
            }
            if (rawOmapiProductData.usagenotifications) {
                omapiProduct.usagenotifications = rawOmapiProductData.usagenotifications;
            }
            if (rawOmapiProductData.constituents) {
                omapiProduct.productConstituents = this.createOmapiConstituents(rawOmapiProductData.constituents);
            }
            if (omapiProduct.isDarwinProduct()) {
                this.correctDarwinCharacteristics(omapiProduct, rawOmapiProductData);
            }
        }
        return omapiProduct;
    }
    mapOmapiData(omapiProduct, rawOmapiProductData) {
        omapiProduct.productId = (rawOmapiProductData.productid && rawOmapiProductData.productid.toString()) || undefined;
        omapiProduct.isYupProduct = rawOmapiProductData.isYupProduct;
        omapiProduct.salesOfferingId = rawOmapiProductData.salesofferingid;
        omapiProduct.externalProductCode = rawOmapiProductData.externalProductCode;
        omapiProduct.productType = rawOmapiProductData.producttype && rawOmapiProductData.producttype.toUpperCase();
        omapiProduct.categories = this.normalizationService.normalizeList(rawOmapiProductData.category);
        omapiProduct.customerCategories = this.normalizationService.normalizeList(rawOmapiProductData.customercategories);
        omapiProduct.subCategory = this.createSubCategory(rawOmapiProductData.subcategory);
        omapiProduct.labelKey = rawOmapiProductData.labelkey;
        omapiProduct.visible = rawOmapiProductData.visible;
        omapiProduct.family = rawOmapiProductData.family;
        omapiProduct.weight = rawOmapiProductData.weight;
        omapiProduct.services = this.createServices(rawOmapiProductData.services);
        omapiProduct.apps = this.createApps(rawOmapiProductData.apps);
        omapiProduct.localizedContent = this.createLocalizedContents(rawOmapiProductData.localizedcontent);
        omapiProduct.shortDescription = this.createShortDescription(rawOmapiProductData.shortdescription);
        omapiProduct.rates = this.createRates(rawOmapiProductData.rates);
        omapiProduct.visibilityRules = this.createVisibilityRules(rawOmapiProductData.visibilityrules);
        omapiProduct.unlimited = rawOmapiProductData.unlimited;
        omapiProduct.eligibleForDiscount = this.hasDiscount(rawOmapiProductData.characteristics);
        omapiProduct.unlimitedInternet = rawOmapiProductData.unlimitedInternet;
        omapiProduct.priceType = rawOmapiProductData.priceType;
        omapiProduct.characteristics = this.getCharacteristics(rawOmapiProductData.characteristics);
        omapiProduct.usageBasedRatePlan = rawOmapiProductData.usageBasedRatePlan;
        omapiProduct.requiresInstallation = rawOmapiProductData.requiresInstallation;
        omapiProduct.maxCount = rawOmapiProductData.maxCount;
        omapiProduct.chars = rawOmapiProductData.characteristics ? this.getChars(rawOmapiProductData.characteristics) : [];
        omapiProduct.isExternalContentPack = this.hasExternalContentPack(omapiProduct.chars);
        omapiProduct.isEligibleForSettinglimits = rawOmapiProductData.isEligibleForSettinglimits;
        omapiProduct.isEligibleForAutoPause = rawOmapiProductData.isEligibleForAutoPause;
        omapiProduct.isEligibleForPauseProfile = rawOmapiProductData.isEligibleForPauseProfile;
        omapiProduct.isFPBProduct = rawOmapiProductData.isFPBProduct;
    }
    hasExternalContentPack(chars) {
        let charObject = {};
        if (!isEmpty(chars)) {
            charObject = chars?.find((char) => {
                return char.key === CharsEnum.IS_EXTERNAL_CONTENT_PACK;
            });
        }
        return !isEmpty(charObject) && !isEmpty(charObject?.values) ? charObject?.values?.[0] : 'false';
    }
    hasDiscount(rawChars) {
        const discountChar = rawChars &&
            rawChars.elementarycharacteristics &&
            rawChars.elementarycharacteristics.find((char) => char.key === CharsEnum.CALL_CONTENT_PACK_DISCOUNTED_PRICE_API);
        if (discountChar) {
            return JSON.parse(discountChar.value.split(',')[0]);
        }
        return false;
    }
    getContentForLocale(rawLocalizedContents) {
        return (rawLocalizedContents &&
            rawLocalizedContents.find((localizedContent) => {
                return localizedContent.locale === this.languageService.getLanguage();
            }));
    }
    createLocalizedContents(rawLocalizedContents) {
        return (rawLocalizedContents &&
            rawLocalizedContents.map((rawLocalizedContent) => {
                return this.createLocalizedContent(rawLocalizedContent);
            }));
    }
    createOmapiConstituents(rawOmapiConstituents) {
        return (rawOmapiConstituents &&
            rawOmapiConstituents.map((rawOmapiConstituent) => {
                return rawOmapiConstituent;
            }));
    }
    createLocalizedContent(rawLocalizedContent) {
        const localizedContent = {};
        localizedContent.locale = rawLocalizedContent.locale;
        localizedContent.name = rawLocalizedContent.name;
        localizedContent.logo = rawLocalizedContent.logo;
        return localizedContent;
    }
    createServices(rawServices) {
        return (rawServices &&
            rawServices.map((rawService) => {
                return this.createService(rawService);
            }));
    }
    createService(rawService) {
        const service = {};
        service.serviceType = rawService.servicetype;
        service.specifications = this.createSpecifications(rawService.specifications);
        if (rawService.experience) {
            service.experience = {};
            service.experience.experienceType = rawService.experience.experiencetype;
        }
        return service;
    }
    createSpecifications(rawSpecifications) {
        return (rawSpecifications &&
            rawSpecifications
                .filter((spec) => !this.ignoredDarwinSpecifications.includes(spec.labelkey))
                .map((rawSpecification) => {
                return this.createSpecification(rawSpecification);
            }));
    }
    createSpecification(rawSpecification) {
        const specification = {};
        specification.labelKey = this.normalizationService.normalizeKey(rawSpecification.labelkey);
        specification.unit = rawSpecification.unit;
        specification.disclaimerLocalizedContent = rawSpecification.disclaimerlocalizedcontent
            ? this.getContentForLocale(rawSpecification.disclaimerlocalizedcontent)
            : undefined;
        specification.value = rawSpecification.value;
        specification.minValue = rawSpecification.minvalue;
        specification.maxValue = rawSpecification.maxvalue;
        specification.visible = rawSpecification.visible;
        specification.weight = rawSpecification.weight;
        specification.productType = rawSpecification.grouping;
        specification.localizedContent = this.getContentForLocale(rawSpecification.localizedcontent);
        return specification;
    }
    createRate(rawRate) {
        const rate = {};
        rate.type = this.normalizationService.normalizeKey(rawRate.type);
        rate.unit = rawRate.unit;
        rate.cost = rawRate.cost;
        rate.currency = rawRate.currency;
        return rate;
    }
    createRates(rawRates) {
        return (rawRates &&
            rawRates.map((rawRate) => {
                return this.createRate(rawRate);
            }));
    }
    createApps(rawApps) {
        return rawApps;
    }
    createShortDescription(rawShortDescription) {
        const shortDescription = {};
        if (rawShortDescription) {
            shortDescription.localizedContent = this.getContentForLocale(rawShortDescription.localizedcontent);
        }
        return shortDescription;
    }
    createSubCategory(rawSubCategory) {
        const subCategory = {};
        if (rawSubCategory) {
            subCategory.name = rawSubCategory.name;
            subCategory.weight = rawSubCategory.weight;
            subCategory.mutualExclusion = rawSubCategory.mutualexclusion;
            subCategory.localizedContent = this.createLocalizedContents(rawSubCategory.localizedcontent);
            subCategory.localizedName = this.getContentForLocale(rawSubCategory.localizedcontent)
                ? this.getContentForLocale(rawSubCategory.localizedcontent)?.name
                : undefined;
        }
        return subCategory;
    }
    // to do create the createCharacteristics with the same convention as these other methods
    // need to continue working on this
    getCharacteristics(rawOmapiCharacteristics) {
        const characteristics = {};
        if (rawOmapiCharacteristics) {
            characteristics.serviceCategory = rawOmapiCharacteristics.service_category;
            characteristics.detailedScale = this.getValueUnit(rawOmapiCharacteristics.detailed_scale);
            characteristics.productGroup = rawOmapiCharacteristics.productgroup;
            characteristics.productSubGroup = rawOmapiCharacteristics.productsubgroup
                ? rawOmapiCharacteristics.productsubgroup
                : '';
            characteristics.productSegment = rawOmapiCharacteristics.productsegment;
            characteristics.priceInclVat = this.getFloatValue(rawOmapiCharacteristics.salespricevatincl);
            characteristics.priceExclVat = this.getFloatValue(rawOmapiCharacteristics.salespricevatexcl);
            characteristics.rentalPriceInclVat = this.getFloatValue(rawOmapiCharacteristics.rentalpricevatincl);
            characteristics.rentalPriceExclVat = this.getFloatValue(rawOmapiCharacteristics.rentalpricevatexcl);
            characteristics.sharedMobileData = rawOmapiCharacteristics.sharedmobiledata;
            characteristics.sharedMobileDataUnlimited = rawOmapiCharacteristics.sharedmobiledata_unlimited
                ? this.getValueUnit(rawOmapiCharacteristics.sharedmobiledata_unlimited)
                : undefined;
            characteristics.activationSalesOfferingId = rawOmapiCharacteristics.activationsalesofferingid;
            characteristics.maxIncludedDataReminders = rawOmapiCharacteristics.max_mobile_includeddata_reminders;
            characteristics.maxMobileOutOfBundleReminders = rawOmapiCharacteristics.max_mobile_outofbundle_reminders;
            characteristics.maxMobileLines = rawOmapiCharacteristics.max_mobile_lines;
            characteristics.recipientsMandatory = rawOmapiCharacteristics.huwrecipientsmandatory === '1';
            characteristics.deviceType = rawOmapiCharacteristics.devicetype;
            characteristics.isSellable = rawOmapiCharacteristics.is_sellable;
            characteristics.weightNl = this.getIntegerValue(rawOmapiCharacteristics.weightnl);
            characteristics.weightFr = this.getIntegerValue(rawOmapiCharacteristics.weightfr);
            characteristics.productTier = this.getProductTier(rawOmapiCharacteristics);
            characteristics.productLevel = rawOmapiCharacteristics.productlevel;
            characteristics.prices = rawOmapiCharacteristics.prices ? rawOmapiCharacteristics.prices : undefined;
            characteristics.constituents = rawOmapiCharacteristics.constituents
                ? this.createConstituents(rawOmapiCharacteristics.constituents)
                : undefined;
            characteristics.esimAvailable = rawOmapiCharacteristics.esimAvailable;
        }
        return characteristics;
    }
    correctDarwinCharacteristics(omapiProduct, rawOmapiProduct) {
        if (rawOmapiProduct.services && !!rawOmapiProduct.services.length) {
            this.correctSharedMobileData(omapiProduct, rawOmapiProduct.services);
            this.correctMaxMobileLines(omapiProduct, rawOmapiProduct.services);
        }
    }
    correctSharedMobileData(omapiProduct, services) {
        const mobileInternet = services
            .filter((service) => service.servicetype === 'MOBILE_INTERNET')
            .flatMap((service) => service.specifications)
            .find((spec) => spec?.labelkey === 'sharedmobiledata');
        if (mobileInternet) {
            omapiProduct.characteristics.sharedMobileData = {
                value: mobileInternet.value,
                unit: mobileInternet.unit,
            };
        }
    }
    correctMaxMobileLines(omapiProduct, services) {
        const maxMobileLines = services
            .filter((service) => service.servicetype === 'GENERAL')
            .flatMap((service) => service.specifications)
            .find((spec) => spec?.labelkey === 'max_mobile_lines');
        if (maxMobileLines) {
            omapiProduct.characteristics.maxMobileLines = maxMobileLines.value;
        }
    }
    getProductTier(rawOmapiCharacteristics) {
        if (!rawOmapiCharacteristics.producttier) {
            return rawOmapiCharacteristics.elementarycharacteristics
                ?.filter((el) => el.key === CharsEnum.PRODUCT_TIER)
                .map((e) => e.value)
                .shift();
        }
        return rawOmapiCharacteristics.producttier;
    }
    getFloatValue(property) {
        return property ? parseFloat(property.value) : undefined;
    }
    getIntegerValue(property) {
        return property ? parseInt(property) : undefined;
    }
    getChars(rawOmapiCharacteristics) {
        if (rawOmapiCharacteristics.elementarycharacteristics) {
            return rawOmapiCharacteristics.elementarycharacteristics.map((el) => {
                return {
                    key: el.key,
                    values: el.value.split(','),
                    unit: el.unit,
                };
            });
        }
        return undefined;
    }
    createConstituents(rawConstituents) {
        return (rawConstituents &&
            rawConstituents.map((rawConstituent) => {
                return this.createConstituent(rawConstituent);
            }));
    }
    createConstituent(rawConstituent) {
        const constituent = {};
        constituent.type = this.normalizationService.normalizeKey(rawConstituent.type);
        constituent.specurl = rawConstituent.specurl;
        constituent.productInfo = this.toModel(rawConstituent.rawOmapi);
        return constituent;
    }
    createVisibilityRules(rawVisibilityrules) {
        const visibilityRules = {};
        if (rawVisibilityrules) {
            visibilityRules.conditionalVisibility = rawVisibilityrules.conditionalvisibility;
        }
        return visibilityRules;
    }
    // eslint-disable-next-line @typescript-eslint/ban-types
    getValueUnit(rawData) {
        if (rawData) {
            return { unit: rawData.unit, value: parseFloat(rawData.value) };
        }
        return undefined;
    }
    static ɵfac = function OmapiProductMapper_Factory(t) { return new (t || OmapiProductMapper)(i0.ɵɵinject(i1.LanguageService), i0.ɵɵinject(i1.NormalizationService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: OmapiProductMapper, factory: OmapiProductMapper.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OmapiProductMapper, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.LanguageService }, { type: i1.NormalizationService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib21hcGktcHJvZHVjdC5tYXBwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL21hcHBlcnMvb21hcGktcHJvZHVjdC5tYXBwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBdUI3RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVoRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDOzs7QUFNcEMsTUFBTSxPQUFPLGtCQUFrQjtJQUVWO0lBQ0E7SUFGbkIsWUFDbUIsZUFBZ0MsRUFDaEMsb0JBQTBDO1FBRDFDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQzFELENBQUM7SUFFSywyQkFBMkIsR0FBYSxDQUFDLGtCQUFrQixFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFFMUYsT0FBTyxDQUFDLGVBQTBDO1FBQ2hELE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFTyxrQkFBa0IsQ0FBQyxlQUEwQztRQUNuRSxNQUFNLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3hDLE1BQU0sbUJBQW1CLEdBQUcsZUFBZSxJQUFJLGVBQWUsQ0FBQyxPQUFPLENBQUM7UUFDdkUsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLG1CQUFtQixDQUFDLENBQUM7WUFFckQsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUV4RixJQUFJLGdCQUFnQixFQUFFLENBQUM7Z0JBQ3JCLFlBQVks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TUFBTTs7aUZBRVAsa0JBQWtCO2NBSDlCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9tYXBpUHJvZHVjdCB9IGZyb20gJy4uL21vZGVscy9vbWFwaS1wcm9kdWN0Lm1vZGVsJztcbmltcG9ydCB7XG4gIFJhd0NoYXJhY3RlcmlzdGljc0ludGVyZmFjZSxcbiAgUmF3Q29uc3RpdHVlbnRJbnRlcmZhY2UsXG4gIFJhd0xvY2FsaXplZENvbnRlbnRJbnRlcmZhY2UsXG4gIFJhd09tYXBpQ29uc3RpdHVlbnRJbnRlcmZhY2UsXG4gIFJhd09tYXBpUHJvZHVjdEludGVyZmFjZSxcbiAgUmF3T21hcGlQcm9kdWN0SW50ZXJmYWNlRGF0YSxcbiAgUmF3UmF0ZUludGVyZmFjZSxcbiAgUmF3U2VydmljZUludGVyZmFjZSxcbiAgUmF3U2hvcnREZXNjcmlwdGlvbkludGVyZmFjZSxcbiAgUmF3U3BlY2lmaWNhdGlvbkludGVyZmFjZSxcbiAgUmF3U3ViQ2F0ZWdvcnlJbnRlcmZhY2UsXG4gIFVuaXRWYWx1ZUludGVyZmFjZSxcbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9yYXctb21hcGktcHJvZHVjdC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgUmF0ZUludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvcmF0ZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVmlzaWJpbGl0eVJ1bGVzSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy92aXNpYmlsaXR5cnVsZXMuaW50ZXJmYWNlJztcbmltcG9ydCB7IFN1YkNhdGVnb3J5SW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zdWItY2F0ZWdvcnkuaW50ZXJmYWNlJztcbmltcG9ydCB7IFNob3J0RGVzY3JpcHRpb25JbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3Nob3J0LWRlc2NyaXB0aW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBFeHBlcmllbmNlSW50ZXJmYWNlLCBTZXJ2aWNlSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zZXJ2aWNlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBTcGVjaWZpY2F0aW9uSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zcGVjaWZpY2F0aW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBMb2NhbGl6ZWRDb250ZW50SW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9sb2NhbGl6ZWQtY29udGVudC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ2hhcmFjdGVyaXN0aWNzSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9jaGFyYWN0ZXJpc3RpY3MuaW50ZXJmYWNlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSwgTm9ybWFsaXphdGlvblNlcnZpY2UgfSBmcm9tICdAdGVsZW5ldC9uZy1saWItcGFnZSc7XG5pbXBvcnQgeyBDaGFyc0VudW0gfSBmcm9tICcuLi9lbnVtcy9jaGFycy5lbnVtJztcbmltcG9ydCB7IENoYXJzSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9jaGFycy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ2xvZGFzaC1lcyc7XG5pbXBvcnQgeyBDb25zdGl0dWVudEludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvY29uc3RpdHVlbnQuaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE9tYXBpUHJvZHVjdE1hcHBlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBub3JtYWxpemF0aW9uU2VydmljZTogTm9ybWFsaXphdGlvblNlcnZpY2VcbiAgKSB7fVxuXG4gIHJlYWRvbmx5IGlnbm9yZWREYXJ3aW5TcGVjaWZpY2F0aW9uczogc3RyaW5nW10gPSBbJ3NoYXJlZG1vYmlsZWRhdGEnLCAnbWF4X21vYmlsZV9saW5lcyddO1xuXG4gIHRvTW9kZWwocmF3T21hcGlQcm9kdWN0PzogUmF3T21hcGlQcm9kdWN0SW50ZXJmYWNlKTogT21hcGlQcm9kdWN0IHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVPbWFwaVByb2R1Y3QocmF3T21hcGlQcm9kdWN0KTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlT21hcGlQcm9kdWN0KHJhd09tYXBpUHJvZHVjdD86IFJhd09tYXBpUHJvZHVjdEludGVyZmFjZSk6IE9tYXBpUHJvZHVjdCB7XG4gICAgY29uc3Qgb21hcGlQcm9kdWN0ID0gbmV3IE9tYXBpUHJvZHVjdCgpO1xuICAgIGNvbnN0IHJhd09tYXBpUHJvZHVjdERhdGEgPSByYXdPbWFwaVByb2R1Y3QgJiYgcmF3T21hcGlQcm9kdWN0LnByb2R1Y3Q7XG4gICAgaWYgKHJhd09tYXBpUHJvZHVjdERhdGEpIHtcbiAgICAgIHRoaXMubWFwT21hcGlEYXRhKG9tYXBpUHJvZHVjdCwgcmF3T21hcGlQcm9kdWN0RGF0YSk7XG5cbiAgICAgIGNvbnN0IGNvbnRlbnRGb3JMb2NhbGUgPSB0aGlzLmdldENvbnRlbnRGb3JMb2NhbGUocmF3T21hcGlQcm9kdWN0RGF0YS5sb2NhbGl6ZWRjb250ZW50KTtcblxuICAgICAgaWYgKGNvbnRlbnRGb3JMb2NhbGUpIHtcbiAgICAgICAgb21hcGlQcm9kdWN0Lm5hbWUgPSBjb250ZW50Rm9yTG9jYWxlLm5hbWU7XG4gICAgICAgIG9tYXBpUHJvZHVjdC5sb2dvID0gY29udGVudEZvckxvY2FsZS5sb2dvO1xuICAgICAgfVxuXG4gICAgICBpZiAocmF3T21hcGlQcm9kdWN0RGF0YS51c2FnZUxpbWl0cykge1xuICAgICAgICBvbWFwaVByb2R1Y3QudXNhZ2VMaW1pdHMgPSByYXdPbWFwaVByb2R1Y3REYXRhLnVzYWdlTGltaXRzO1xuICAgICAgfVxuICAgICAgaWYgKHJhd09tYXBpUHJvZHVjdERhdGEudXNhZ2Vub3RpZmljYXRpb25zKSB7XG4gICAgICAgIG9tYXBpUHJvZHVjdC51c2FnZW5vdGlmaWNhdGlvbnMgPSByYXdPbWFwaVByb2R1Y3REYXRhLnVzYWdlbm90aWZpY2F0aW9ucztcbiAgICAgIH1cbiAgICAgIGlmIChyYXdPbWFwaVByb2R1Y3REYXRhLmNvbnN0aXR1ZW50cykge1xuICAgICAgICBvbWFwaVByb2R1Y3QucHJvZHVjdENvbnN0aXR1ZW50cyA9IHRoaXMuY3JlYXRlT21hcGlDb25zdGl0dWVudHMocmF3T21hcGlQcm9kdWN0RGF0YS5jb25zdGl0dWVudHMpO1xuICAgICAgfVxuICAgICAgaWYgKG9tYXBpUHJvZHVjdC5pc0RhcndpblByb2R1Y3QoKSkge1xuICAgICAgICB0aGlzLmNvcnJlY3REYXJ3aW5DaGFyYWN0ZXJpc3RpY3Mob21hcGlQcm9kdWN0LCByYXdPbWFwaVByb2R1Y3REYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9tYXBpUHJvZHVjdDtcbiAgfVxuXG4gIHByaXZhdGUgbWFwT21hcGlEYXRhKG9tYXBpUHJvZHVjdDogT21hcGlQcm9kdWN0LCByYXdPbWFwaVByb2R1Y3REYXRhOiBSYXdPbWFwaVByb2R1Y3RJbnRlcmZhY2VEYXRhKSB7XG4gICAgb21hcGlQcm9kdWN0LnByb2R1Y3RJZCA9IChyYXdPbWFwaVByb2R1Y3REYXRhLnByb2R1Y3RpZCAmJiByYXdPbWFwaVByb2R1Y3REYXRhLnByb2R1Y3RpZC50b1N0cmluZygpKSB8fCB1bmRlZmluZWQ7XG4gICAgb21hcGlQcm9kdWN0LmlzWXVwUHJvZHVjdCA9IHJhd09tYXBpUHJvZHVjdERhdGEuaXNZdXBQcm9kdWN0O1xuICAgIG9tYXBpUHJvZHVjdC5zYWxlc09mZmVyaW5nSWQgPSByYXdPbWFwaVByb2R1Y3REYXRhLnNhbGVzb2ZmZXJpbmdpZDtcbiAgICBvbWFwaVByb2R1Y3QuZXh0ZXJuYWxQcm9kdWN0Q29kZSA9IHJhd09tYXBpUHJvZHVjdERhdGEuZXh0ZXJuYWxQcm9kdWN0Q29kZTtcbiAgICBvbWFwaVByb2R1Y3QucHJvZHVjdFR5cGUgPSByYXdPbWFwaVByb2R1Y3REYXRhLnByb2R1Y3R0eXBlICYmIHJhd09tYXBpUHJvZHVjdERhdGEucHJvZHVjdHR5cGUudG9VcHBlckNhc2UoKTtcbiAgICBvbWFwaVByb2R1Y3QuY2F0ZWdvcmllcyA9IHRoaXMubm9ybWFsaXphdGlvblNlcnZpY2Uubm9ybWFsaXplTGlzdChyYXdPbWFwaVByb2R1Y3REYXRhLmNhdGVnb3J5KTtcbiAgICBvbWFwaVByb2R1Y3QuY3VzdG9tZXJDYXRlZ29yaWVzID0gdGhpcy5ub3JtYWxpemF0aW9uU2VydmljZS5ub3JtYWxpemVMaXN0KHJhd09tYXBpUHJvZHVjdERhdGEuY3VzdG9tZXJjYXRlZ29yaWVzKTtcbiAgICBvbWFwaVByb2R1Y3Quc3ViQ2F0ZWdvcnkgPSB0aGlzLmNyZWF0ZVN1YkNhdGVnb3J5KHJhd09tYXBpUHJvZHVjdERhdGEuc3ViY2F0ZWdvcnkpO1xuICAgIG9tYXBpUHJvZHVjdC5sYWJlbEtleSA9IHJhd09tYXBpUHJvZHVjdERhdGEubGFiZWxrZXk7XG4gICAgb21hcGlQcm9kdWN0LnZpc2libGUgPSByYXdPbWFwaVByb2R1Y3REYXRhLnZpc2libGU7XG4gICAgb21hcGlQcm9kdWN0LmZhbWlseSA9IHJhd09tYXBpUHJvZHVjdERhdGEuZmFtaWx5O1xuICAgIG9tYXBpUHJvZHVjdC53ZWlnaHQgPSByYXdPbWFwaVByb2R1Y3REYXRhLndlaWdodDtcbiAgICBvbWFwaVByb2R1Y3Quc2VydmljZXMgPSB0aGlzLmNyZWF0ZVNlcnZpY2VzKHJhd09tYXBpUHJvZHVjdERhdGEuc2VydmljZXMpO1xuICAgIG9tYXBpUHJvZHVjdC5hcHBzID0gdGhpcy5jcmVhdGVBcHBzKHJhd09tYXBpUHJvZHVjdERhdGEuYXBwcyk7XG4gICAgb21hcGlQcm9kdWN0LmxvY2FsaXplZENvbnRlbnQgPSB0aGlzLmNyZWF0ZUxvY2FsaXplZENvbnRlbnRzKHJhd09tYXBpUHJvZHVjdERhdGEubG9jYWxpemVkY29udGVudCk7XG4gICAgb21hcGlQcm9kdWN0LnNob3J0RGVzY3JpcHRpb24gPSB0aGlzLmNyZWF0ZVNob3J0RGVzY3JpcHRpb24ocmF3T21hcGlQcm9kdWN0RGF0YS5zaG9ydGRlc2NyaXB0aW9uKTtcbiAgICBvbWFwaVByb2R1Y3QucmF0ZXMgPSB0aGlzLmNyZWF0ZVJhdGVzKHJhd09tYXBpUHJvZHVjdERhdGEucmF0ZXMpO1xuICAgIG9tYXBpUHJvZHVjdC52aXNpYmlsaXR5UnVsZXMgPSB0aGlzLmNyZWF0ZVZpc2liaWxpdHlSdWxlcyhyYXdPbWFwaVByb2R1Y3REYXRhLnZpc2liaWxpdHlydWxlcyk7XG4gICAgb21hcGlQcm9kdWN0LnVubGltaXRlZCA9IHJhd09tYXBpUHJvZHVjdERhdGEudW5saW1pdGVkO1xuICAgIG9tYXBpUHJvZHVjdC5lbGlnaWJsZUZvckRpc2NvdW50ID0gdGhpcy5oYXNEaXNjb3VudChyYXdPbWFwaVByb2R1Y3REYXRhLmNoYXJhY3RlcmlzdGljcyk7XG4gICAgb21hcGlQcm9kdWN0LnVubGltaXRlZEludGVybmV0ID0gcmF3T21hcGlQcm9kdWN0RGF0YS51bmxpbWl0ZWRJbnRlcm5ldDtcbiAgICBvbWFwaVByb2R1Y3QucHJpY2VUeXBlID0gcmF3T21hcGlQcm9kdWN0RGF0YS5wcmljZVR5cGU7XG4gICAgb21hcGlQcm9kdWN0LmNoYXJhY3RlcmlzdGljcyA9IHRoaXMuZ2V0Q2hhcmFjdGVyaXN0aWNzKHJhd09tYXBpUHJvZHVjdERhdGEuY2hhcmFjdGVyaXN0aWNzKTtcbiAgICBvbWFwaVByb2R1Y3QudXNhZ2VCYXNlZFJhdGVQbGFuID0gcmF3T21hcGlQcm9kdWN0RGF0YS51c2FnZUJhc2VkUmF0ZVBsYW47XG4gICAgb21hcGlQcm9kdWN0LnJlcXVpcmVzSW5zdGFsbGF0aW9uID0gcmF3T21hcGlQcm9kdWN0RGF0YS5yZXF1aXJlc0luc3RhbGxhdGlvbjtcbiAgICBvbWFwaVByb2R1Y3QubWF4Q291bnQgPSByYXdPbWFwaVByb2R1Y3REYXRhLm1heENvdW50O1xuICAgIG9tYXBpUHJvZHVjdC5jaGFycyA9IHJhd09tYXBpUHJvZHVjdERhdGEuY2hhcmFjdGVyaXN0aWNzID8gdGhpcy5nZXRDaGFycyhyYXdPbWFwaVByb2R1Y3REYXRhLmNoYXJhY3RlcmlzdGljcykgOiBbXTtcbiAgICBvbWFwaVByb2R1Y3QuaXNFeHRlcm5hbENvbnRlbnRQYWNrID0gdGhpcy5oYXNFeHRlcm5hbENvbnRlbnRQYWNrKG9tYXBpUHJvZHVjdC5jaGFycyk7XG4gICAgb21hcGlQcm9kdWN0LmlzRWxpZ2libGVGb3JTZXR0aW5nbGltaXRzID0gcmF3T21hcGlQcm9kdWN0RGF0YS5pc0VsaWdpYmxlRm9yU2V0dGluZ2xpbWl0cztcbiAgICBvbWFwaVByb2R1Y3QuaXNFbGlnaWJsZUZvckF1dG9QYXVzZSA9IHJhd09tYXBpUHJvZHVjdERhdGEuaXNFbGlnaWJsZUZvckF1dG9QYXVzZTtcbiAgICBvbWFwaVByb2R1Y3QuaXNFbGlnaWJsZUZvclBhdXNlUHJvZmlsZSA9IHJhd09tYXBpUHJvZHVjdERhdGEuaXNFbGlnaWJsZUZvclBhdXNlUHJvZmlsZTtcbiAgICBvbWFwaVByb2R1Y3QuaXNGUEJQcm9kdWN0ID0gcmF3T21hcGlQcm9kdWN0RGF0YS5pc0ZQQlByb2R1Y3Q7XG4gIH1cblxuICBwcml2YXRlIGhhc0V4dGVybmFsQ29udGVudFBhY2soY2hhcnM/OiBDaGFyc0ludGVyZmFjZVtdKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgY2hhck9iamVjdCA9IHt9IGFzIENoYXJzSW50ZXJmYWNlIHwgdW5kZWZpbmVkO1xuICAgIGlmICghaXNFbXB0eShjaGFycykpIHtcbiAgICAgIGNoYXJPYmplY3QgPSBjaGFycz8uZmluZCgoY2hhcjogQ2hhcnNJbnRlcmZhY2UpID0+IHtcbiAgICAgICAgcmV0dXJuIGNoYXIua2V5ID09PSBDaGFyc0VudW0uSVNfRVhURVJOQUxfQ09OVEVOVF9QQUNLO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiAhaXNFbXB0eShjaGFyT2JqZWN0KSAmJiAhaXNFbXB0eShjaGFyT2JqZWN0Py52YWx1ZXMpID8gY2hhck9iamVjdD8udmFsdWVzPy5bMF0gOiAnZmFsc2UnO1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNEaXNjb3VudChyYXdDaGFycz86IFJhd0NoYXJhY3RlcmlzdGljc0ludGVyZmFjZSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGRpc2NvdW50Q2hhciA9XG4gICAgICByYXdDaGFycyAmJlxuICAgICAgcmF3Q2hhcnMuZWxlbWVudGFyeWNoYXJhY3RlcmlzdGljcyAmJlxuICAgICAgcmF3Q2hhcnMuZWxlbWVudGFyeWNoYXJhY3RlcmlzdGljcy5maW5kKChjaGFyKSA9PiBjaGFyLmtleSA9PT0gQ2hhcnNFbnVtLkNBTExfQ09OVEVOVF9QQUNLX0RJU0NPVU5URURfUFJJQ0VfQVBJKTtcbiAgICBpZiAoZGlzY291bnRDaGFyKSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShkaXNjb3VudENoYXIudmFsdWUuc3BsaXQoJywnKVswXSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29udGVudEZvckxvY2FsZShcbiAgICByYXdMb2NhbGl6ZWRDb250ZW50cz86IFJhd0xvY2FsaXplZENvbnRlbnRJbnRlcmZhY2VbXVxuICApOiBMb2NhbGl6ZWRDb250ZW50SW50ZXJmYWNlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gKFxuICAgICAgcmF3TG9jYWxpemVkQ29udGVudHMgJiZcbiAgICAgIHJhd0xvY2FsaXplZENvbnRlbnRzLmZpbmQoKGxvY2FsaXplZENvbnRlbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplZENvbnRlbnQubG9jYWxlID09PSB0aGlzLmxhbmd1YWdlU2VydmljZS5nZXRMYW5ndWFnZSgpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVMb2NhbGl6ZWRDb250ZW50cyhyYXdMb2NhbGl6ZWRDb250ZW50czogUmF3TG9jYWxpemVkQ29udGVudEludGVyZmFjZVtdKTogTG9jYWxpemVkQ29udGVudEludGVyZmFjZVtdIHtcbiAgICByZXR1cm4gKFxuICAgICAgcmF3TG9jYWxpemVkQ29udGVudHMgJiZcbiAgICAgIHJhd0xvY2FsaXplZENvbnRlbnRzLm1hcCgocmF3TG9jYWxpemVkQ29udGVudCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVMb2NhbGl6ZWRDb250ZW50KHJhd0xvY2FsaXplZENvbnRlbnQpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVPbWFwaUNvbnN0aXR1ZW50cyhcbiAgICByYXdPbWFwaUNvbnN0aXR1ZW50czogUmF3T21hcGlDb25zdGl0dWVudEludGVyZmFjZVtdXG4gICk6IFJhd09tYXBpQ29uc3RpdHVlbnRJbnRlcmZhY2VbXSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHJhd09tYXBpQ29uc3RpdHVlbnRzICYmXG4gICAgICByYXdPbWFwaUNvbnN0aXR1ZW50cy5tYXAoKHJhd09tYXBpQ29uc3RpdHVlbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIHJhd09tYXBpQ29uc3RpdHVlbnQ7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUxvY2FsaXplZENvbnRlbnQocmF3TG9jYWxpemVkQ29udGVudDogUmF3TG9jYWxpemVkQ29udGVudEludGVyZmFjZSk6IExvY2FsaXplZENvbnRlbnRJbnRlcmZhY2Uge1xuICAgIGNvbnN0IGxvY2FsaXplZENvbnRlbnQgPSB7fSBhcyBMb2NhbGl6ZWRDb250ZW50SW50ZXJmYWNlO1xuICAgIGxvY2FsaXplZENvbnRlbnQubG9jYWxlID0gcmF3TG9jYWxpemVkQ29udGVudC5sb2NhbGU7XG4gICAgbG9jYWxpemVkQ29udGVudC5uYW1lID0gcmF3TG9jYWxpemVkQ29udGVudC5uYW1lO1xuICAgIGxvY2FsaXplZENvbnRlbnQubG9nbyA9IHJhd0xvY2FsaXplZENvbnRlbnQubG9nbztcbiAgICByZXR1cm4gbG9jYWxpemVkQ29udGVudDtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlU2VydmljZXMocmF3U2VydmljZXM6IFJhd1NlcnZpY2VJbnRlcmZhY2VbXSk6IFNlcnZpY2VJbnRlcmZhY2VbXSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHJhd1NlcnZpY2VzICYmXG4gICAgICByYXdTZXJ2aWNlcy5tYXAoKHJhd1NlcnZpY2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlU2VydmljZShyYXdTZXJ2aWNlKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlU2VydmljZShyYXdTZXJ2aWNlOiBSYXdTZXJ2aWNlSW50ZXJmYWNlKTogU2VydmljZUludGVyZmFjZSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHt9IGFzIFNlcnZpY2VJbnRlcmZhY2U7XG4gICAgc2VydmljZS5zZXJ2aWNlVHlwZSA9IHJhd1NlcnZpY2Uuc2VydmljZXR5cGU7XG4gICAgc2VydmljZS5zcGVjaWZpY2F0aW9ucyA9IHRoaXMuY3JlYXRlU3BlY2lmaWNhdGlvbnMocmF3U2VydmljZS5zcGVjaWZpY2F0aW9ucyk7XG4gICAgaWYgKHJhd1NlcnZpY2UuZXhwZXJpZW5jZSkge1xuICAgICAgc2VydmljZS5leHBlcmllbmNlID0ge30gYXMgRXhwZXJpZW5jZUludGVyZmFjZTtcbiAgICAgIHNlcnZpY2UuZXhwZXJpZW5jZS5leHBlcmllbmNlVHlwZSA9IHJhd1NlcnZpY2UuZXhwZXJpZW5jZS5leHBlcmllbmNldHlwZTtcbiAgICB9XG4gICAgcmV0dXJuIHNlcnZpY2U7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVNwZWNpZmljYXRpb25zKHJhd1NwZWNpZmljYXRpb25zPzogUmF3U3BlY2lmaWNhdGlvbkludGVyZmFjZVtdKTogU3BlY2lmaWNhdGlvbkludGVyZmFjZVtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gKFxuICAgICAgcmF3U3BlY2lmaWNhdGlvbnMgJiZcbiAgICAgIHJhd1NwZWNpZmljYXRpb25zXG4gICAgICAgIC5maWx0ZXIoKHNwZWMpID0+ICF0aGlzLmlnbm9yZWREYXJ3aW5TcGVjaWZpY2F0aW9ucy5pbmNsdWRlcyhzcGVjLmxhYmVsa2V5KSlcbiAgICAgICAgLm1hcCgocmF3U3BlY2lmaWNhdGlvbikgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVNwZWNpZmljYXRpb24ocmF3U3BlY2lmaWNhdGlvbik7XG4gICAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlU3BlY2lmaWNhdGlvbihyYXdTcGVjaWZpY2F0aW9uOiBSYXdTcGVjaWZpY2F0aW9uSW50ZXJmYWNlKTogU3BlY2lmaWNhdGlvbkludGVyZmFjZSB7XG4gICAgY29uc3Qgc3BlY2lmaWNhdGlvbiA9IHt9IGFzIFNwZWNpZmljYXRpb25JbnRlcmZhY2U7XG4gICAgc3BlY2lmaWNhdGlvbi5sYWJlbEtleSA9IHRoaXMubm9ybWFsaXphdGlvblNlcnZpY2Uubm9ybWFsaXplS2V5KHJhd1NwZWNpZmljYXRpb24ubGFiZWxrZXkpO1xuICAgIHNwZWNpZmljYXRpb24udW5pdCA9IHJhd1NwZWNpZmljYXRpb24udW5pdDtcbiAgICBzcGVjaWZpY2F0aW9uLmRpc2NsYWltZXJMb2NhbGl6ZWRDb250ZW50ID0gcmF3U3BlY2lmaWNhdGlvbi5kaXNjbGFpbWVybG9jYWxpemVkY29udGVudFxuICAgICAgPyB0aGlzLmdldENvbnRlbnRGb3JMb2NhbGUocmF3U3BlY2lmaWNhdGlvbi5kaXNjbGFpbWVybG9jYWxpemVkY29udGVudClcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgIHNwZWNpZmljYXRpb24udmFsdWUgPSByYXdTcGVjaWZpY2F0aW9uLnZhbHVlO1xuICAgIHNwZWNpZmljYXRpb24ubWluVmFsdWUgPSByYXdTcGVjaWZpY2F0aW9uLm1pbnZhbHVlO1xuICAgIHNwZWNpZmljYXRpb24ubWF4VmFsdWUgPSByYXdTcGVjaWZpY2F0aW9uLm1heHZhbHVlO1xuICAgIHNwZWNpZmljYXRpb24udmlzaWJsZSA9IHJhd1NwZWNpZmljYXRpb24udmlzaWJsZTtcbiAgICBzcGVjaWZpY2F0aW9uLndlaWdodCA9IHJhd1NwZWNpZmljYXRpb24ud2VpZ2h0O1xuICAgIHNwZWNpZmljYXRpb24ucHJvZHVjdFR5cGUgPSByYXdTcGVjaWZpY2F0aW9uLmdyb3VwaW5nO1xuICAgIHNwZWNpZmljYXRpb24ubG9jYWxpemVkQ29udGVudCA9IHRoaXMuZ2V0Q29udGVudEZvckxvY2FsZShyYXdTcGVjaWZpY2F0aW9uLmxvY2FsaXplZGNvbnRlbnQpO1xuICAgIHJldHVybiBzcGVjaWZpY2F0aW9uO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVSYXRlKHJhd1JhdGU6IFJhd1JhdGVJbnRlcmZhY2UpOiBSYXRlSW50ZXJmYWNlIHtcbiAgICBjb25zdCByYXRlID0ge30gYXMgUmF0ZUludGVyZmFjZTtcbiAgICByYXRlLnR5cGUgPSB0aGlzLm5vcm1hbGl6YXRpb25TZXJ2aWNlLm5vcm1hbGl6ZUtleShyYXdSYXRlLnR5cGUpO1xuICAgIHJhdGUudW5pdCA9IHJhd1JhdGUudW5pdDtcbiAgICByYXRlLmNvc3QgPSByYXdSYXRlLmNvc3Q7XG4gICAgcmF0ZS5jdXJyZW5jeSA9IHJhd1JhdGUuY3VycmVuY3k7XG4gICAgcmV0dXJuIHJhdGU7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVJhdGVzKHJhd1JhdGVzPzogUmF3UmF0ZUludGVyZmFjZVtdKTogUmF0ZUludGVyZmFjZVtdIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gKFxuICAgICAgcmF3UmF0ZXMgJiZcbiAgICAgIHJhd1JhdGVzLm1hcCgocmF3UmF0ZSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVSYXRlKHJhd1JhdGUpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVBcHBzKHJhd0FwcHM6IHVua25vd24pOiB1bmtub3duIHtcbiAgICByZXR1cm4gcmF3QXBwcztcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlU2hvcnREZXNjcmlwdGlvbihyYXdTaG9ydERlc2NyaXB0aW9uPzogUmF3U2hvcnREZXNjcmlwdGlvbkludGVyZmFjZSk6IFNob3J0RGVzY3JpcHRpb25JbnRlcmZhY2Uge1xuICAgIGNvbnN0IHNob3J0RGVzY3JpcHRpb24gPSB7fSBhcyBTaG9ydERlc2NyaXB0aW9uSW50ZXJmYWNlO1xuICAgIGlmIChyYXdTaG9ydERlc2NyaXB0aW9uKSB7XG4gICAgICBzaG9ydERlc2NyaXB0aW9uLmxvY2FsaXplZENvbnRlbnQgPSB0aGlzLmdldENvbnRlbnRGb3JMb2NhbGUocmF3U2hvcnREZXNjcmlwdGlvbi5sb2NhbGl6ZWRjb250ZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIHNob3J0RGVzY3JpcHRpb247XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVN1YkNhdGVnb3J5KHJhd1N1YkNhdGVnb3J5PzogUmF3U3ViQ2F0ZWdvcnlJbnRlcmZhY2UpOiBTdWJDYXRlZ29yeUludGVyZmFjZSB7XG4gICAgY29uc3Qgc3ViQ2F0ZWdvcnkgPSB7fSBhcyBTdWJDYXRlZ29yeUludGVyZmFjZTtcbiAgICBpZiAocmF3U3ViQ2F0ZWdvcnkpIHtcbiAgICAgIHN1YkNhdGVnb3J5Lm5hbWUgPSByYXdTdWJDYXRlZ29yeS5uYW1lO1xuICAgICAgc3ViQ2F0ZWdvcnkud2VpZ2h0ID0gcmF3U3ViQ2F0ZWdvcnkud2VpZ2h0O1xuICAgICAgc3ViQ2F0ZWdvcnkubXV0dWFsRXhjbHVzaW9uID0gcmF3U3ViQ2F0ZWdvcnkubXV0dWFsZXhjbHVzaW9uO1xuICAgICAgc3ViQ2F0ZWdvcnkubG9jYWxpemVkQ29udGVudCA9IHRoaXMuY3JlYXRlTG9jYWxpemVkQ29udGVudHMocmF3U3ViQ2F0ZWdvcnkubG9jYWxpemVkY29udGVudCk7XG4gICAgICBzdWJDYXRlZ29yeS5sb2NhbGl6ZWROYW1lID0gdGhpcy5nZXRDb250ZW50Rm9yTG9jYWxlKHJhd1N1YkNhdGVnb3J5LmxvY2FsaXplZGNvbnRlbnQpXG4gICAgICAgID8gdGhpcy5nZXRDb250ZW50Rm9yTG9jYWxlKHJhd1N1YkNhdGVnb3J5LmxvY2FsaXplZGNvbnRlbnQpPy5uYW1lXG4gICAgICAgIDogdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gc3ViQ2F0ZWdvcnk7XG4gIH1cblxuICAvLyB0byBkbyBjcmVhdGUgdGhlIGNyZWF0ZUNoYXJhY3RlcmlzdGljcyB3aXRoIHRoZSBzYW1lIGNvbnZlbnRpb24gYXMgdGhlc2Ugb3RoZXIgbWV0aG9kc1xuICAvLyBuZWVkIHRvIGNvbnRpbnVlIHdvcmtpbmcgb24gdGhpc1xuICBwcml2YXRlIGdldENoYXJhY3RlcmlzdGljcyhyYXdPbWFwaUNoYXJhY3RlcmlzdGljcz86IFJhd0NoYXJhY3RlcmlzdGljc0ludGVyZmFjZSk6IENoYXJhY3RlcmlzdGljc0ludGVyZmFjZSB7XG4gICAgY29uc3QgY2hhcmFjdGVyaXN0aWNzID0ge30gYXMgQ2hhcmFjdGVyaXN0aWNzSW50ZXJmYWNlO1xuICAgIGlmIChyYXdPbWFwaUNoYXJhY3RlcmlzdGljcykge1xuICAgICAgY2hhcmFjdGVyaXN0aWNzLnNlcnZpY2VDYXRlZ29yeSA9IHJhd09tYXBpQ2hhcmFjdGVyaXN0aWNzLnNlcnZpY2VfY2F0ZWdvcnk7XG4gICAgICBjaGFyYWN0ZXJpc3RpY3MuZGV0YWlsZWRTY2FsZSA9IHRoaXMuZ2V0VmFsdWVVbml0KHJhd09tYXBpQ2hhcmFjdGVyaXN0aWNzLmRldGFpbGVkX3NjYWxlKTtcbiAgICAgIGNoYXJhY3RlcmlzdGljcy5wcm9kdWN0R3JvdXAgPSByYXdPbWFwaUNoYXJhY3RlcmlzdGljcy5wcm9kdWN0Z3JvdXA7XG4gICAgICBjaGFyYWN0ZXJpc3RpY3MucHJvZHVjdFN1Ykdyb3VwID0gcmF3T21hcGlDaGFyYWN0ZXJpc3RpY3MucHJvZHVjdHN1Ymdyb3VwXG4gICAgICAgID8gcmF3T21hcGlDaGFyYWN0ZXJpc3RpY3MucHJvZHVjdHN1Ymdyb3VwXG4gICAgICAgIDogJyc7XG4gICAgICBjaGFyYWN0ZXJpc3RpY3MucHJvZHVjdFNlZ21lbnQgPSByYXdPbWFwaUNoYXJhY3RlcmlzdGljcy5wcm9kdWN0c2VnbWVudDtcbiAgICAgIGNoYXJhY3RlcmlzdGljcy5wcmljZUluY2xWYXQgPSB0aGlzLmdldEZsb2F0VmFsdWUocmF3T21hcGlDaGFyYWN0ZXJpc3RpY3Muc2FsZXNwcmljZXZhdGluY2wpO1xuICAgICAgY2hhcmFjdGVyaXN0aWNzLnByaWNlRXhjbFZhdCA9IHRoaXMuZ2V0RmxvYXRWYWx1ZShyYXdPbWFwaUNoYXJhY3RlcmlzdGljcy5zYWxlc3ByaWNldmF0ZXhjbCk7XG4gICAgICBjaGFyYWN0ZXJpc3RpY3MucmVudGFsUHJpY2VJbmNsVmF0ID0gdGhpcy5nZXRGbG9hdFZhbHVlKHJhd09tYXBpQ2hhcmFjdGVyaXN0aWNzLnJlbnRhbHByaWNldmF0aW5jbCk7XG4gICAgICBjaGFyYWN0ZXJpc3RpY3MucmVudGFsUHJpY2VFeGNsVmF0ID0gdGhpcy5nZXRGbG9hdFZhbHVlKHJhd09tYXBpQ2hhcmFjdGVyaXN0aWNzLnJlbnRhbHByaWNldmF0ZXhjbCk7XG4gICAgICBjaGFyYWN0ZXJpc3RpY3Muc2hhcmVkTW9iaWxlRGF0YSA9IHJhd09tYXBpQ2hhcmFjdGVyaXN0aWNzLnNoYXJlZG1vYmlsZWRhdGE7XG4gICAgICBjaGFyYWN0ZXJpc3RpY3Muc2hhcmVkTW9iaWxlRGF0YVVubGltaXRlZCA9IHJhd09tYXBpQ2hhcmFjdGVyaXN0aWNzLnNoYXJlZG1vYmlsZWRhdGFfdW5saW1pdGVkXG4gICAgICAgID8gdGhpcy5nZXRWYWx1ZVVuaXQocmF3T21hcGlDaGFyYWN0ZXJpc3RpY3Muc2hhcmVkbW9iaWxlZGF0YV91bmxpbWl0ZWQpXG4gICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgY2hhcmFjdGVyaXN0aWNzLmFjdGl2YXRpb25TYWxlc09mZmVyaW5nSWQgPSByYXdPbWFwaUNoYXJhY3RlcmlzdGljcy5hY3RpdmF0aW9uc2FsZXNvZmZlcmluZ2lkO1xuICAgICAgY2hhcmFjdGVyaXN0aWNzLm1heEluY2x1ZGVkRGF0YVJlbWluZGVycyA9IHJhd09tYXBpQ2hhcmFjdGVyaXN0aWNzLm1heF9tb2JpbGVfaW5jbHVkZWRkYXRhX3JlbWluZGVycztcbiAgICAgIGNoYXJhY3RlcmlzdGljcy5tYXhNb2JpbGVPdXRPZkJ1bmRsZVJlbWluZGVycyA9IHJhd09tYXBpQ2hhcmFjdGVyaXN0aWNzLm1heF9tb2JpbGVfb3V0b2ZidW5kbGVfcmVtaW5kZXJzO1xuICAgICAgY2hhcmFjdGVyaXN0aWNzLm1heE1vYmlsZUxpbmVzID0gcmF3T21hcGlDaGFyYWN0ZXJpc3RpY3MubWF4X21vYmlsZV9saW5lcztcbiAgICAgIGNoYXJhY3RlcmlzdGljcy5yZWNpcGllbnRzTWFuZGF0b3J5ID0gcmF3T21hcGlDaGFyYWN0ZXJpc3RpY3MuaHV3cmVjaXBpZW50c21hbmRhdG9yeSA9PT0gJzEnO1xuICAgICAgY2hhcmFjdGVyaXN0aWNzLmRldmljZVR5cGUgPSByYXdPbWFwaUNoYXJhY3RlcmlzdGljcy5kZXZpY2V0eXBlO1xuICAgICAgY2hhcmFjdGVyaXN0aWNzLmlzU2VsbGFibGUgPSByYXdPbWFwaUNoYXJhY3RlcmlzdGljcy5pc19zZWxsYWJsZTtcbiAgICAgIGNoYXJhY3RlcmlzdGljcy53ZWlnaHRObCA9IHRoaXMuZ2V0SW50ZWdlclZhbHVlKHJhd09tYXBpQ2hhcmFjdGVyaXN0aWNzLndlaWdodG5sKTtcbiAgICAgIGNoYXJhY3RlcmlzdGljcy53ZWlnaHRGciA9IHRoaXMuZ2V0SW50ZWdlclZhbHVlKHJhd09tYXBpQ2hhcmFjdGVyaXN0aWNzLndlaWdodGZyKTtcbiAgICAgIGNoYXJhY3RlcmlzdGljcy5wcm9kdWN0VGllciA9IHRoaXMuZ2V0UHJvZHVjdFRpZXIocmF3T21hcGlDaGFyYWN0ZXJpc3RpY3MpO1xuICAgICAgY2hhcmFjdGVyaXN0aWNzLnByb2R1Y3RMZXZlbCA9IHJhd09tYXBpQ2hhcmFjdGVyaXN0aWNzLnByb2R1Y3RsZXZlbDtcbiAgICAgIGNoYXJhY3RlcmlzdGljcy5wcmljZXMgPSByYXdPbWFwaUNoYXJhY3RlcmlzdGljcy5wcmljZXMgPyByYXdPbWFwaUNoYXJhY3RlcmlzdGljcy5wcmljZXMgOiB1bmRlZmluZWQ7XG4gICAgICBjaGFyYWN0ZXJpc3RpY3MuY29uc3RpdHVlbnRzID0gcmF3T21hcGlDaGFyYWN0ZXJpc3RpY3MuY29uc3RpdHVlbnRzXG4gICAgICAgID8gdGhpcy5jcmVhdGVDb25zdGl0dWVudHMocmF3T21hcGlDaGFyYWN0ZXJpc3RpY3MuY29uc3RpdHVlbnRzKVxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgIGNoYXJhY3RlcmlzdGljcy5lc2ltQXZhaWxhYmxlID0gcmF3T21hcGlDaGFyYWN0ZXJpc3RpY3MuZXNpbUF2YWlsYWJsZTtcbiAgICB9XG4gICAgcmV0dXJuIGNoYXJhY3RlcmlzdGljcztcbiAgfVxuXG4gIHByaXZhdGUgY29ycmVjdERhcndpbkNoYXJhY3RlcmlzdGljcyhcbiAgICBvbWFwaVByb2R1Y3Q6IE9tYXBpUHJvZHVjdCxcbiAgICByYXdPbWFwaVByb2R1Y3Q6IFJhd09tYXBpUHJvZHVjdEludGVyZmFjZURhdGFcbiAgKTogdm9pZCB7XG4gICAgaWYgKHJhd09tYXBpUHJvZHVjdC5zZXJ2aWNlcyAmJiAhIXJhd09tYXBpUHJvZHVjdC5zZXJ2aWNlcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuY29ycmVjdFNoYXJlZE1vYmlsZURhdGEob21hcGlQcm9kdWN0LCByYXdPbWFwaVByb2R1Y3Quc2VydmljZXMpO1xuICAgICAgdGhpcy5jb3JyZWN0TWF4TW9iaWxlTGluZXMob21hcGlQcm9kdWN0LCByYXdPbWFwaVByb2R1Y3Quc2VydmljZXMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY29ycmVjdFNoYXJlZE1vYmlsZURhdGEob21hcGlQcm9kdWN0OiBPbWFwaVByb2R1Y3QsIHNlcnZpY2VzOiBSYXdTZXJ2aWNlSW50ZXJmYWNlW10pOiB2b2lkIHtcbiAgICBjb25zdCBtb2JpbGVJbnRlcm5ldCA9IHNlcnZpY2VzXG4gICAgICAuZmlsdGVyKChzZXJ2aWNlKSA9PiBzZXJ2aWNlLnNlcnZpY2V0eXBlID09PSAnTU9CSUxFX0lOVEVSTkVUJylcbiAgICAgIC5mbGF0TWFwKChzZXJ2aWNlKSA9PiBzZXJ2aWNlLnNwZWNpZmljYXRpb25zKVxuICAgICAgLmZpbmQoKHNwZWMpID0+IHNwZWM/LmxhYmVsa2V5ID09PSAnc2hhcmVkbW9iaWxlZGF0YScpO1xuXG4gICAgaWYgKG1vYmlsZUludGVybmV0KSB7XG4gICAgICAob21hcGlQcm9kdWN0LmNoYXJhY3RlcmlzdGljcyBhcyBDaGFyYWN0ZXJpc3RpY3NJbnRlcmZhY2UpLnNoYXJlZE1vYmlsZURhdGEgPSB7XG4gICAgICAgIHZhbHVlOiBtb2JpbGVJbnRlcm5ldC52YWx1ZSxcbiAgICAgICAgdW5pdDogbW9iaWxlSW50ZXJuZXQudW5pdCxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjb3JyZWN0TWF4TW9iaWxlTGluZXMob21hcGlQcm9kdWN0OiBPbWFwaVByb2R1Y3QsIHNlcnZpY2VzOiBSYXdTZXJ2aWNlSW50ZXJmYWNlW10pOiB2b2lkIHtcbiAgICBjb25zdCBtYXhNb2JpbGVMaW5lcyA9IHNlcnZpY2VzXG4gICAgICAuZmlsdGVyKChzZXJ2aWNlKSA9PiBzZXJ2aWNlLnNlcnZpY2V0eXBlID09PSAnR0VORVJBTCcpXG4gICAgICAuZmxhdE1hcCgoc2VydmljZSkgPT4gc2VydmljZS5zcGVjaWZpY2F0aW9ucylcbiAgICAgIC5maW5kKChzcGVjKSA9PiBzcGVjPy5sYWJlbGtleSA9PT0gJ21heF9tb2JpbGVfbGluZXMnKTtcblxuICAgIGlmIChtYXhNb2JpbGVMaW5lcykge1xuICAgICAgKG9tYXBpUHJvZHVjdC5jaGFyYWN0ZXJpc3RpY3MgYXMgQ2hhcmFjdGVyaXN0aWNzSW50ZXJmYWNlKS5tYXhNb2JpbGVMaW5lcyA9IG1heE1vYmlsZUxpbmVzLnZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0UHJvZHVjdFRpZXIocmF3T21hcGlDaGFyYWN0ZXJpc3RpY3M6IFJhd0NoYXJhY3RlcmlzdGljc0ludGVyZmFjZSk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKCFyYXdPbWFwaUNoYXJhY3RlcmlzdGljcy5wcm9kdWN0dGllcikge1xuICAgICAgcmV0dXJuIHJhd09tYXBpQ2hhcmFjdGVyaXN0aWNzLmVsZW1lbnRhcnljaGFyYWN0ZXJpc3RpY3NcbiAgICAgICAgPy5maWx0ZXIoKGVsKSA9PiBlbC5rZXkgPT09IENoYXJzRW51bS5QUk9EVUNUX1RJRVIpXG4gICAgICAgIC5tYXAoKGUpID0+IGUudmFsdWUpXG4gICAgICAgIC5zaGlmdCgpO1xuICAgIH1cbiAgICByZXR1cm4gcmF3T21hcGlDaGFyYWN0ZXJpc3RpY3MucHJvZHVjdHRpZXI7XG4gIH1cblxuICBwcml2YXRlIGdldEZsb2F0VmFsdWUocHJvcGVydHk6IFVuaXRWYWx1ZUludGVyZmFjZSB8IHVuZGVmaW5lZCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHByb3BlcnR5ID8gcGFyc2VGbG9hdChwcm9wZXJ0eS52YWx1ZSkgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwcml2YXRlIGdldEludGVnZXJWYWx1ZShwcm9wZXJ0eTogc3RyaW5nIHwgdW5kZWZpbmVkKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gcHJvcGVydHkgPyBwYXJzZUludChwcm9wZXJ0eSkgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwcml2YXRlIGdldENoYXJzKHJhd09tYXBpQ2hhcmFjdGVyaXN0aWNzOiBSYXdDaGFyYWN0ZXJpc3RpY3NJbnRlcmZhY2UpOiBDaGFyc0ludGVyZmFjZVtdIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAocmF3T21hcGlDaGFyYWN0ZXJpc3RpY3MuZWxlbWVudGFyeWNoYXJhY3RlcmlzdGljcykge1xuICAgICAgcmV0dXJuIHJhd09tYXBpQ2hhcmFjdGVyaXN0aWNzLmVsZW1lbnRhcnljaGFyYWN0ZXJpc3RpY3MubWFwKChlbCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGtleTogZWwua2V5LFxuICAgICAgICAgIHZhbHVlczogZWwudmFsdWUuc3BsaXQoJywnKSxcbiAgICAgICAgICB1bml0OiBlbC51bml0LFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUNvbnN0aXR1ZW50cyhyYXdDb25zdGl0dWVudHM6IFJhd0NvbnN0aXR1ZW50SW50ZXJmYWNlW10pOiBDb25zdGl0dWVudEludGVyZmFjZVtdIHtcbiAgICByZXR1cm4gKFxuICAgICAgcmF3Q29uc3RpdHVlbnRzICYmXG4gICAgICByYXdDb25zdGl0dWVudHMubWFwKChyYXdDb25zdGl0dWVudCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVDb25zdGl0dWVudChyYXdDb25zdGl0dWVudCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUNvbnN0aXR1ZW50KHJhd0NvbnN0aXR1ZW50OiBSYXdDb25zdGl0dWVudEludGVyZmFjZSk6IENvbnN0aXR1ZW50SW50ZXJmYWNlIHtcbiAgICBjb25zdCBjb25zdGl0dWVudCA9IHt9IGFzIENvbnN0aXR1ZW50SW50ZXJmYWNlO1xuICAgIGNvbnN0aXR1ZW50LnR5cGUgPSB0aGlzLm5vcm1hbGl6YXRpb25TZXJ2aWNlLm5vcm1hbGl6ZUtleShyYXdDb25zdGl0dWVudC50eXBlKTtcbiAgICBjb25zdGl0dWVudC5zcGVjdXJsID0gcmF3Q29uc3RpdHVlbnQuc3BlY3VybDtcbiAgICBjb25zdGl0dWVudC5wcm9kdWN0SW5mbyA9IHRoaXMudG9Nb2RlbChyYXdDb25zdGl0dWVudC5yYXdPbWFwaSk7XG4gICAgcmV0dXJuIGNvbnN0aXR1ZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVWaXNpYmlsaXR5UnVsZXMocmF3VmlzaWJpbGl0eXJ1bGVzPzogeyBjb25kaXRpb25hbHZpc2liaWxpdHk6IGJvb2xlYW4gfSk6IFZpc2liaWxpdHlSdWxlc0ludGVyZmFjZSB7XG4gICAgY29uc3QgdmlzaWJpbGl0eVJ1bGVzID0ge30gYXMgVmlzaWJpbGl0eVJ1bGVzSW50ZXJmYWNlO1xuICAgIGlmIChyYXdWaXNpYmlsaXR5cnVsZXMpIHtcbiAgICAgIHZpc2liaWxpdHlSdWxlcy5jb25kaXRpb25hbFZpc2liaWxpdHkgPSByYXdWaXNpYmlsaXR5cnVsZXMuY29uZGl0aW9uYWx2aXNpYmlsaXR5O1xuICAgIH1cbiAgICByZXR1cm4gdmlzaWJpbGl0eVJ1bGVzO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcbiAgcHJpdmF0ZSBnZXRWYWx1ZVVuaXQocmF3RGF0YT86IHsgdW5pdDogdW5rbm93bjsgdmFsdWU6IHN0cmluZyB9KTogb2JqZWN0IHwgdW5kZWZpbmVkIHtcbiAgICBpZiAocmF3RGF0YSkge1xuICAgICAgcmV0dXJuIHsgdW5pdDogcmF3RGF0YS51bml0LCB2YWx1ZTogcGFyc2VGbG9hdChyYXdEYXRhLnZhbHVlKSB9O1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG4iXX0=