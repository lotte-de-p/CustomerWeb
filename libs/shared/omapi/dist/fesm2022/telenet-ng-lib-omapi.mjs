import * as Factory from 'factory.ts';
import { Sync } from 'factory.ts';
import { isEmpty, includes, some, each, isObject, uniq, sortBy, map as map$1, cloneDeep, flatMap } from 'lodash-es';
import * as i0 from '@angular/core';
import { Injectable } from '@angular/core';
import dayjs from 'dayjs';
import * as i1 from '@telenet/ng-lib-page';
import { shareReplay, take, catchError, map, mergeMap, tap, switchMap } from 'rxjs/operators';
import { forkJoin, of, throwError } from 'rxjs';
import * as i3 from '@telenet/ng-lib-message';
import { ErrorMessage } from '@telenet/ng-lib-message';
import * as i6 from '@telenet/ng-lib-config';
import { ConfigConstants } from '@telenet/ng-lib-config';
import { LogFactory } from '@telenet/ng-lib-shared';
import * as i1$1 from '@angular/common/http';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';

var OmapiServiceSpecificationLabelKey;
(function (OmapiServiceSpecificationLabelKey) {
    OmapiServiceSpecificationLabelKey["MOBILE_INTERNET_UNLIMITED_SHARED_SPEC"] = "spec.mobileinternet.volume.unlimited.shared";
    OmapiServiceSpecificationLabelKey["FIXED_INTERNET_DL_SPEED"] = "spec.fixedinternet.speed.download";
    OmapiServiceSpecificationLabelKey["FIXED_INTERNET_DL_VOLUME_UNLIMITED"] = "spec.fixedinternet.volume.download.fup";
    OmapiServiceSpecificationLabelKey["FIXED_INTERNET_DL_VOLUME_CAP"] = "spec.fixedinternet.volume.download.cap";
    OmapiServiceSpecificationLabelKey["SPEC_BUNDLE_MAX_MOBILE_LINES"] = "spec.bundle.mobile.maxlines";
})(OmapiServiceSpecificationLabelKey || (OmapiServiceSpecificationLabelKey = {}));
var OmapiServiceType;
(function (OmapiServiceType) {
    OmapiServiceType["FIXED_INTERNET"] = "FIXED_INTERNET";
    OmapiServiceType["FIXED_CALLING"] = "FIXED_CALLING";
    OmapiServiceType["MOBILE_INTERNET"] = "MOBILE_INTERNET";
    OmapiServiceType["MOBILE_CALLING"] = "MOBILE_CALLING";
    OmapiServiceType["GENERAL"] = "GENERAL";
    OmapiServiceType["DTV"] = "DTV";
    OmapiServiceType["ATV"] = "ATV";
    OmapiServiceType["TV"] = "TV";
})(OmapiServiceType || (OmapiServiceType = {}));
var OmapiConstituentType;
(function (OmapiConstituentType) {
    OmapiConstituentType["DTV"] = "dtv";
    OmapiConstituentType["INTERNET"] = "internet_line";
    OmapiConstituentType["MOBILE"] = "mobile_line";
})(OmapiConstituentType || (OmapiConstituentType = {}));
var OmapiProductTierEnum;
(function (OmapiProductTierEnum) {
    OmapiProductTierEnum["LOW"] = "Low";
    OmapiProductTierEnum["MID"] = "Mid";
    OmapiProductTierEnum["HIGH"] = "High";
})(OmapiProductTierEnum || (OmapiProductTierEnum = {}));
var OmapiLegacyProducts;
(function (OmapiLegacyProducts) {
    OmapiLegacyProducts["WHOP"] = "71";
    OmapiLegacyProducts["WHOPPA"] = "70";
})(OmapiLegacyProducts || (OmapiLegacyProducts = {}));
var OmapiDarwinProducts;
(function (OmapiDarwinProducts) {
    OmapiDarwinProducts["STREAMING_SERVICE_CONTAINER"] = "STRM0001";
    OmapiDarwinProducts["NETFLIX_PREMIUM_ADDON"] = "STRM0006";
    OmapiDarwinProducts["NETFLIX_STANDARD"] = "STRM0005";
})(OmapiDarwinProducts || (OmapiDarwinProducts = {}));
var OmapiProductType;
(function (OmapiProductType) {
    OmapiProductType["PRODUCT"] = "PRODUCT";
    OmapiProductType["BUNDLE"] = "BUNDLE";
    OmapiProductType["E_SIM"] = "E_SIM";
})(OmapiProductType || (OmapiProductType = {}));
var OmapiSubCategoryEnum;
(function (OmapiSubCategoryEnum) {
    OmapiSubCategoryEnum["NETFLIX"] = "Netflix";
})(OmapiSubCategoryEnum || (OmapiSubCategoryEnum = {}));

var OmapiCharacteristicEnum;
(function (OmapiCharacteristicEnum) {
    OmapiCharacteristicEnum["PRODUCT_GROUP"] = "productGroup";
    OmapiCharacteristicEnum["PRODUCT_SUB_GROUP"] = "productSubGroup";
    OmapiCharacteristicEnum["PRODUCT_LEVEL"] = "productLevel";
    OmapiCharacteristicEnum["PRODUCT_TIER"] = "productTier";
    OmapiCharacteristicEnum["CONSTITUENTS"] = "constituents";
    OmapiCharacteristicEnum["ESIM_AVAILABLE"] = "esimAvailable";
})(OmapiCharacteristicEnum || (OmapiCharacteristicEnum = {}));
var OmapiProductGroupEnum;
(function (OmapiProductGroupEnum) {
    OmapiProductGroupEnum["FMC"] = "FMC";
})(OmapiProductGroupEnum || (OmapiProductGroupEnum = {}));
var OmapiProductSubGroupEnum;
(function (OmapiProductSubGroupEnum) {
    OmapiProductSubGroupEnum["CONNECT5"] = "C5";
    OmapiProductSubGroupEnum["CONNECT5_SOHO"] = "C5 SOHO";
    OmapiProductSubGroupEnum["KLIK"] = "KLIK";
})(OmapiProductSubGroupEnum || (OmapiProductSubGroupEnum = {}));

var OmapiFamilyProductType;
(function (OmapiFamilyProductType) {
    OmapiFamilyProductType["MOBILE"] = "mobile";
    OmapiFamilyProductType["ENTERTAINMENT"] = "entertainment";
    OmapiFamilyProductType["FIXED_TELEPHONY"] = "fixedTelephony";
})(OmapiFamilyProductType || (OmapiFamilyProductType = {}));
class OmapiFamilyConstants {
    static FAMILY_PRODUCT_TYPES = [
        OmapiFamilyProductType.MOBILE,
        OmapiFamilyProductType.ENTERTAINMENT,
        OmapiFamilyProductType.FIXED_TELEPHONY,
    ];
}
var OmapiFamilyTierEnum;
(function (OmapiFamilyTierEnum) {
    OmapiFamilyTierEnum["FURIOUS"] = "furious";
    OmapiFamilyTierEnum["FAST"] = "fast";
    OmapiFamilyTierEnum["KLIK"] = "klik";
    OmapiFamilyTierEnum["ONE"] = "ONE";
    OmapiFamilyTierEnum["ONE_UP"] = "ONEup";
})(OmapiFamilyTierEnum || (OmapiFamilyTierEnum = {}));

var LanguageEnum;
(function (LanguageEnum) {
    LanguageEnum["NL"] = "nl";
    LanguageEnum["FR"] = "fr";
    LanguageEnum["EN"] = "en";
})(LanguageEnum || (LanguageEnum = {}));

class ProductConstants {
    static WEIGHT = 'weight';
    static API_VERSION_V1 = 'v1';
    static UNLIMITED = 'UNLIMITED';
    static MOBILE_CALLING = 'MOBILE_CALLING';
    static MOBILE_INTERNET = 'MOBILE_INTERNET';
    static MOBILE_LINE = 'mobile_line';
    static MOBILE_MONETARY = 'MOBILE_MONETARY';
    static FIXED_CALLING = 'FIXED_CALLING';
    static FIXED_INTERNET = 'FIXED_INTERNET';
    static FEATURE = 'FEATURE';
    static INTERNET = 'INTERNET';
    static GENERAL = 'GENERAL';
    static TV = 'TV';
    static DTV = 'DTV';
    static MINUTES = 'MINUTES';
    static MIN = 'MIN';
    static FUP = 'FUP';
    static VOICE = ['voice', 'call-to-other-networks'];
    static DATA = ['data', 'mobile-data'];
    static EPC_LIST_TO_SHOW_RATE = ['PREPAID-MOBILE', 'BASE0000'];
    static OMAPI_CATEGORY_BASE_PRO = 'BASE-PRO';
    static OMAPI_CATEGORY_BASE_PRO_VOICE = 'BASE-PRO-VOICE';
    static OMAPI_CATEGORY_PRE_PAID_MOBILE = 'PREPAID-MOBILE';
    static OMAPI_CATEGORY_POST_PAID_MOBILE = 'POST-PAID-MOBILE';
    static CONTEXT_PRODUCTS = '/products';
    static PRODUCT_TYPE_BUNDLE = 'bundle';
    static PRODUCT_TYPE_TELEPHONE = 'telephone';
    static PRODUCT_TYPE_MOBILE = 'mobile';
    static PRODUCT_TYPE_DTV = 'dtv';
    static PRODUCT_TYPE_INTERNET = 'internet';
    static TELEPHONE_RANK = '4';
    static MOBILE_RANK = '5';
    static DTV_RANK = '3';
    static INTERNET_RANK = '2';
    static BUNDLE_RANK = '1';
    static PRODUCT_TYPE = '/type';
}

var ProductPriceTypeEnum;
(function (ProductPriceTypeEnum) {
    ProductPriceTypeEnum["RECURRENT"] = "RECURRENT";
    ProductPriceTypeEnum["ONE_TIME"] = "ONE-TIME";
    ProductPriceTypeEnum["OMAPI_RECURRENT_CHARGE"] = "Recurrent Charge";
    ProductPriceTypeEnum["OMAPI_NON_RECURRENT_CHARGE"] = "Non Recurrent Charge";
})(ProductPriceTypeEnum || (ProductPriceTypeEnum = {}));

var ProductCharacteristicEnum;
(function (ProductCharacteristicEnum) {
    ProductCharacteristicEnum["PRODUCT_GROUP"] = "productGroup";
    ProductCharacteristicEnum["PRODUCT_LEVEL"] = "productLevel";
    ProductCharacteristicEnum["PRODUCT_TIER"] = "productTier";
    ProductCharacteristicEnum["MAX_MOBILE_LINES"] = "maxMobileLines";
    ProductCharacteristicEnum["SHARED_MOBILE_DATA"] = "sharedMobileData";
})(ProductCharacteristicEnum || (ProductCharacteristicEnum = {}));

const SofyComboProducts = [
    {
        productid: '22792_46948',
        producttype: 'BUNDLE',
        services: [
            {
                servicetype: 'FIXED_CALLING',
                experience: {
                    experiencetype: 'CALL',
                },
                specifications: undefined,
            },
        ],
        customercategories: undefined,
        category: undefined,
        subcategory: undefined,
        visible: false,
        shortdescription: undefined,
        rates: undefined,
        visibilityrules: undefined,
        unlimited: false,
        priceType: undefined,
        salesofferingid: '',
        externalProductCode: '',
        labelkey: '',
        apps: undefined,
        weight: 10,
        localizedcontent: [
            {
                locale: 'nl',
                name: 'Vaste Telefonie + Phone2Go',
                logo: '',
            },
            {
                locale: 'fr',
                name: 'Téléphonie Fixe + Phone2Go',
                logo: '',
            },
        ],
    },
];

var CharsEnum;
(function (CharsEnum) {
    CharsEnum["HIDE_ADD_BUTTON_WHEN_PACK_ACTIVE"] = "hideaddbuttonwhenpackactive";
    CharsEnum["MUTUALLY_EXCLUSIVE_TO_CONTENT_PACK"] = "mutuallyexclusivetocontentpack";
    CharsEnum["CALL_CONTENT_PACK_DISCOUNTED_PRICE_API"] = "callcontentpackdicsountedpriceapi";
    CharsEnum["UPGRADABLE_TO"] = "upgradableto";
    CharsEnum["INTERNET_USAGE_LIMIT"] = "internet_usage_limit";
    CharsEnum["INTERNET_USAGE_INITIAL_THRESHOLD"] = "internet_usage_initial_threshold";
    CharsEnum["INTERNET_USAGE_ALERT_THRESHOLD"] = "internet_usage_alert_threshold";
    CharsEnum["IS_EXTERNAL_CONTENT_PACK"] = "isExternalContentPack";
    CharsEnum["PRODUCT_TIER"] = "producttier";
})(CharsEnum || (CharsEnum = {}));

const FiberProducts = [
    'INTF0201',
    'YUP10004',
    'INTF0203',
    'YUP10005',
    'FREU0001',
    'FRPH0001',
    'TWOP0017',
    'TWOP0015',
    'WIGO1000',
    'YUPW1000',
    'WIGO1001',
    'YUPW1001',
    'WIGO1004',
    'WIGO1006',
    'YUPW1006',
    'WIGO1009',
    'YUPW1009',
    'TWOP0016',
    'YUP2P005',
    'TWOP0014',
    'YUP2P006',
    'WIGO1015',
    'YUPW1015',
    'WIGO1025',
    'WIGO1040',
    'YUPW1040',
    'WIGO10S3',
    'YUPW10S3',
    'WIGU1001',
    'YUP2P007',
    'C5FA0011',
    'C5FA0012',
    'C5FA0013',
    'C5FA0014',
    'C5FA0015',
    'YUPC5021',
    'YUPC5022',
    'YUPC5023',
    'YUPC5024',
    'YUPC5025',
    'C5FU0011',
    'C5FU0012',
    'C5FU0013',
    'C5FU0014',
    'C5FU0015',
    'YUPC5026',
    'YUPC5027',
    'YUPC5028',
    'YUPC5029',
    'YUPC5030',
    'BINT0005',
    'BINT0006',
    'DITV0103',
    'FREU0101',
    'BUND0113',
    'BUND0114',
    'KLIK0008',
    'KLIK0009',
    'KLIK0010',
    'KLIK0011',
    'KLIK0012',
    'KLIK0013',
    'KLIK0014',
    'KLIK0009',
];

class OmapiProduct {
    productId;
    isYupProduct;
    salesOfferingId;
    externalProductCode;
    productType;
    categories;
    internalCategory;
    customerCategories;
    subCategory;
    labelKey;
    visible;
    family;
    weight;
    services;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    apps;
    characteristics;
    localizedContent;
    shortDescription;
    rates;
    visibilityRules;
    unlimited;
    priceType;
    specifications;
    name;
    maxCount;
    eligibleForDiscount;
    unlimitedInternet;
    logo;
    usageBasedRatePlan;
    requiresInstallation;
    usageLimits;
    usagenotifications;
    productConstituents;
    chars;
    imageUrl;
    brand;
    extraAtHomeDelivery;
    isPreOrder;
    isBackOrder;
    preOrderDescriptionLabel;
    backOrderDescriptionLabel;
    isExternalContentPack;
    isEligibleForAutoPause;
    isEligibleForPauseProfile;
    isEligibleForSettinglimits;
    isFPBProduct;
    constructor() {
        this.setInternalCategory();
    }
    priceInclVat() {
        return this.characteristics?.priceInclVat;
    }
    price(exclVAT) {
        return exclVAT
            ? this.characteristics?.priceExclVat
            : this.characteristics?.priceInclVat;
    }
    getLocalizedContentNames() {
        const localizedContentNames = {};
        if (!isEmpty(this.localizedContent)) {
            this.localizedContent?.forEach((item) => {
                localizedContentNames[item.locale] = item.name;
            });
        }
        return localizedContentNames;
    }
    hasCategory(searchCategory) {
        return (!isEmpty(this.categories) &&
            this.categories?.some((category) => {
                return category.toUpperCase() === searchCategory.toUpperCase();
            }));
    }
    setInternalCategory() {
        switch (true) {
            case this.hasCategory(ProductConstants.OMAPI_CATEGORY_PRE_PAID_MOBILE):
                this.internalCategory = ProductConstants.OMAPI_CATEGORY_PRE_PAID_MOBILE;
                break;
            case this.hasCategory(ProductConstants.OMAPI_CATEGORY_BASE_PRO):
            case this.hasCategory(ProductConstants.OMAPI_CATEGORY_BASE_PRO_VOICE):
            case this.hasCategory(ProductConstants.OMAPI_CATEGORY_POST_PAID_MOBILE):
            default:
                this.internalCategory = ProductConstants.OMAPI_CATEGORY_POST_PAID_MOBILE;
        }
    }
    hasSpecifications() {
        return !isEmpty(this.specifications);
    }
    updateRates() {
        this.rates?.forEach((rate) => {
            rate.type = this.formatRateType(rate.type);
            rate.isTypeData = includes(ProductConstants.DATA, rate.type);
            rate.isTypeVoice = includes(ProductConstants.VOICE, rate.type);
        });
    }
    isShowRates() {
        return some(ProductConstants.EPC_LIST_TO_SHOW_RATE, (searchCategoryName) => {
            return this.hasCategory(searchCategoryName) || this.externalProductCode === searchCategoryName;
        });
    }
    getSortedSpecifications() {
        const specifications = [];
        each(this.services, (service) => {
            each(service.specifications, (specification) => {
                let updatedSpecification = Object.assign({}, specification);
                updatedSpecification.serviceType = service.serviceType;
                updatedSpecification.id = this.productId;
                updatedSpecification = this.setSpecifications(updatedSpecification);
                specifications.push(updatedSpecification);
            });
        });
        return this.getSortedListByWeight(specifications);
    }
    updateSpecifications() {
        this.specifications?.forEach((specification) => {
            if (specification.id === this.productId) {
                this.setSpecifications(specification);
            }
        });
    }
    getEsimCharacteristicValue() {
        return this.getCharacteristic(OmapiCharacteristicEnum.ESIM_AVAILABLE);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getCharacteristic(key) {
        // eslint-disable-next-line no-prototype-builtins
        if (isObject(this.characteristics) && this.characteristics.hasOwnProperty(key)) {
            return this.characteristics?.[key];
        }
        return null;
    }
    getMaxMobileLines() {
        let maxMobileLines = this.getCharacteristic(ProductCharacteristicEnum.MAX_MOBILE_LINES);
        if (!maxMobileLines) {
            const maxLinesSpecification = this.getServiceSpecificationByLabelKey(OmapiServiceSpecificationLabelKey.SPEC_BUNDLE_MAX_MOBILE_LINES, OmapiServiceType.GENERAL);
            maxMobileLines = maxLinesSpecification?.value || null;
        }
        return maxMobileLines;
    }
    getSharedMobileData() {
        const sharedMobileData = this.getCharacteristic(ProductCharacteristicEnum.SHARED_MOBILE_DATA);
        return sharedMobileData && sharedMobileData.value;
    }
    hasUnlimitedCalling() {
        return (this.services &&
            this.services.some((service) => {
                return (service.serviceType.toUpperCase() === ProductConstants.MOBILE_CALLING &&
                    service.specifications?.some((specification) => {
                        return (specification.unit &&
                            specification.unit.toUpperCase() === ProductConstants.MINUTES &&
                            specification.value &&
                            specification.value.toUpperCase() === ProductConstants.UNLIMITED);
                    }));
            }));
    }
    hasUnlimitedMobileInternet() {
        return this.getConstituent(ProductConstants.MOBILE_LINE)
            ?.productInfo?.services?.find((service) => service?.serviceType === ProductConstants.MOBILE_INTERNET)
            ?.specifications?.some((s) => s.value === ProductConstants.FUP);
    }
    hasUnlimitedFixedInternet() {
        return this.characteristics?.serviceCategory === ProductConstants.FUP;
    }
    hasUnlimitedInternetBasedOnLabelKey() {
        return this.services
            ?.find((s) => s?.serviceType === ProductConstants.MOBILE_INTERNET)
            ?.specifications?.some((s) => s.labelKey === OmapiServiceSpecificationLabelKey.MOBILE_INTERNET_UNLIMITED_SHARED_SPEC);
    }
    isWigo() {
        return this.isFmc() && this.getProductSubGroup() === '';
    }
    isFmc() {
        return this.getProductGroup() === OmapiProductGroupEnum.FMC;
    }
    hasServiceType(serviceType) {
        return some(this.services, (service) => {
            return service.serviceType.toUpperCase() === serviceType;
        });
    }
    isBundle() {
        return this.productType === 'BUNDLE';
    }
    isFiber() {
        return !!this.externalProductCode && FiberProducts.includes(this.externalProductCode);
    }
    getLogoUrl = () => {
        if (this.logo) {
            return this.logo;
        }
        else if (this.labelKey) {
            const key = this.normalizeKey(this.labelKey);
            return '/content/dam/www-telenet-be/img/self-service/products/' + key + '.png';
        }
        return '';
    };
    normalizeKey = (key) => {
        if (key) {
            return key
                .replace(/ /g, '-')
                .replace(/\./g, '-')
                .replace(/[^0-9a-zA-Z_-]/g, '')
                .toLowerCase();
        }
        return '';
    };
    getProductLevel() {
        return this.getCharacteristic(OmapiCharacteristicEnum.PRODUCT_LEVEL);
    }
    getProductTier() {
        return this.getCharacteristic(OmapiCharacteristicEnum.PRODUCT_TIER);
    }
    getConstituents() {
        return this.getCharacteristic(OmapiCharacteristicEnum.CONSTITUENTS) || [];
    }
    getConstituent(type) {
        if (this.getConstituents()) {
            const [constituent] = this.getConstituents().filter((result) => result.type === this.normalizeKey(type));
            return constituent;
        }
        return undefined;
    }
    getServiceSpecificationByLabelKey(labelKey, serviceType) {
        if (this.services) {
            const service = serviceType
                ? this.services.find((specService) => specService.serviceType === serviceType)
                : this.services[0];
            return (service &&
                service.specifications &&
                service.specifications.find((specification) => {
                    return specification.labelKey === this.normalizeKey(labelKey);
                }));
        }
        return undefined;
    }
    getBillingCycle() {
        switch (this.priceType) {
            case ProductPriceTypeEnum.OMAPI_NON_RECURRENT_CHARGE:
                return ProductPriceTypeEnum.ONE_TIME;
            case ProductPriceTypeEnum.OMAPI_RECURRENT_CHARGE:
            default:
                return ProductPriceTypeEnum.RECURRENT;
        }
    }
    isWhop() {
        return this.productId === OmapiLegacyProducts.WHOP;
    }
    isWhoppa() {
        return this.productId === OmapiLegacyProducts.WHOPPA;
    }
    isConnect5() {
        return this.getProductSubGroup() === OmapiProductSubGroupEnum.CONNECT5;
    }
    isConnect5Soho() {
        return (this.getProductSubGroup() === OmapiProductSubGroupEnum.CONNECT5_SOHO ||
            this.getProductSubGroup() === OmapiProductSubGroupEnum.KLIK);
    }
    isHighTier() {
        return this.getCharacteristic('productTier') === OmapiProductTierEnum.HIGH;
    }
    getGroupNameLabel() {
        const { productGroup, productSubGroup, productTier, productSegment } = this
            .characteristics;
        if (productGroup && productTier && productSegment) {
            return [productGroup, productSubGroup, productTier, productSegment]
                .filter((productName) => productName !== '')
                .map((productName) => productName?.toLowerCase())
                .map((productName) => productName?.replace(/\s+/g, '').trim())
                .join('-');
        }
        return this.services?.map((service) => service?.serviceType?.toLowerCase()).join('-');
    }
    getUniqOutOfBundlesLimits() {
        let limits = [];
        if (this.usageLimits) {
            each(this.usageLimits.outOfBundle.limits, (limit) => {
                limits = [...limits, ...limit.values];
            });
        }
        return uniq(limits);
    }
    hasCharKey(key) {
        const charValue = this.fetchCharKey(key);
        return Boolean(charValue);
    }
    getCharValue(key) {
        if (!key) {
            return [];
        }
        const charValue = this.fetchCharKey(key);
        return (charValue && charValue.values) || [];
    }
    getCharUnit(key) {
        const charValue = this.fetchCharKey(key);
        return charValue && charValue.unit;
    }
    fetchCharKey(key) {
        return this.chars && this.chars.find((char) => char.key === key);
    }
    getInternetUsageNotificationThresholds() {
        return this.usagenotifications?.internet;
    }
    getProductGroup() {
        return this.getCharacteristic(OmapiCharacteristicEnum.PRODUCT_GROUP);
    }
    getProductSubGroup() {
        return this.getCharacteristic(OmapiCharacteristicEnum.PRODUCT_SUB_GROUP);
    }
    isStreamingServiceContainer() {
        return this.productId === OmapiDarwinProducts.STREAMING_SERVICE_CONTAINER;
    }
    isNetflixPremiumAddon() {
        return this.productId === OmapiDarwinProducts.NETFLIX_PREMIUM_ADDON;
    }
    isANetflixProduct() {
        return OmapiSubCategoryEnum.NETFLIX === this.subCategory?.name;
    }
    isNetflixStandard() {
        return this.productId === OmapiDarwinProducts.NETFLIX_STANDARD;
    }
    isDarwinProduct() {
        const STARTS_WITH_NUMBER = /^\d/;
        return (this.productId && !this.productId.match(STARTS_WITH_NUMBER)) || false;
    }
    isESim() {
        return this.productType === OmapiProductType.E_SIM;
    }
    getSortedListByWeight(list) {
        return sortBy(list, ProductConstants.WEIGHT);
    }
    formatRateType(type) {
        return type && type.toLowerCase().replace(/ /g, '-');
    }
    setSpecifications(specification) {
        specification.showUnit = false;
        specification.isValue = false;
        specification.isMonetary = false;
        specification.isRange = false;
        specification.isAsterisk = false;
        if (specification.unit && specification.unit.toUpperCase() === ProductConstants.MINUTES) {
            specification.unit = ProductConstants.MIN;
        }
        switch (specification.serviceType) {
            case ProductConstants.MOBILE_CALLING:
                return this.setSpecificationsForMobileCalling(specification);
            case ProductConstants.MOBILE_INTERNET:
                return this.setSpecificationsForMobileInternet(specification);
            case ProductConstants.MOBILE_MONETARY:
                return this.setSpecificationsForMobileMonetary(specification);
            case ProductConstants.FIXED_CALLING:
            case ProductConstants.TV:
            case ProductConstants.DTV:
                return this.setSpecificationsForFixedVoiceAndTv(specification);
            case ProductConstants.INTERNET:
            case ProductConstants.FIXED_INTERNET:
                return this.setSpecificationsForInternet(specification);
            case ProductConstants.GENERAL:
            case ProductConstants.FEATURE:
                return specification;
            default:
                console.error(`Specification not implemented: ${specification?.serviceType}`);
                return specification;
        }
    }
    setSpecificationsForMobileCalling(specification) {
        specification.showUnit = true;
        specification.isValue = true;
        if (specification.value && specification.value.toUpperCase() === ProductConstants.UNLIMITED) {
            specification.isAsterisk = true;
            specification.showUnit = false;
        }
        if (specification.minValue && specification.maxValue) {
            specification.isValue = false;
            specification.isAsterisk = false;
            specification.isRange = true;
            specification.showUnit = true;
        }
        return specification;
    }
    setSpecificationsForMobileInternet(specification) {
        specification.showUnit = true;
        specification.isValue = true;
        if (specification.value && specification.value.toUpperCase().indexOf(ProductConstants.UNLIMITED) > -1) {
            specification.isAsterisk = true;
            specification.showUnit = false;
        }
        if (specification.minValue && specification.maxValue) {
            specification.isValue = false;
            specification.showUnit = true;
            specification.isRange = true;
        }
        return specification;
    }
    setSpecificationsForMobileMonetary(specification) {
        specification.showUnit = false;
        specification.isMonetary = true;
        specification.isValue = false;
        return specification;
    }
    setSpecificationsForFixedVoiceAndTv(specification) {
        specification.isValue = true;
        specification.showUnit = true;
        specification.isMonetary = false;
        return specification;
    }
    setSpecificationsForInternet(specification) {
        if (specification.value && specification.value.toUpperCase() === ProductConstants.UNLIMITED) {
            specification.isAsterisk = true;
            specification.showUnit = false;
        }
        else {
            specification.showUnit = true;
        }
        specification.isValue = true;
        specification.isMonetary = false;
        return specification;
    }
}

class OmapiProductTestfactory {
    static build(properties = {}) {
        const omapiProduct = new OmapiProduct();
        omapiProduct.name = properties.name || 'Wigo';
        omapiProduct.productType = properties.productType || 'OTHER';
        omapiProduct.characteristics = properties.characteristics || {};
        omapiProduct.productConstituents = properties.productConstituents || {};
        omapiProduct.services = properties.services || [];
        omapiProduct.productId = properties.productId || '123';
        omapiProduct.weight = properties.weight || 1;
        omapiProduct.localizedContent = properties.localizedContent || [];
        omapiProduct.externalProductCode = '95465432165';
        omapiProduct.logo = properties.logo;
        omapiProduct.subCategory = properties.subCategory;
        return omapiProduct;
    }
}

const omapiMobileDataFactory = Factory.Sync.makeFactory({
    omapiId: '456',
    productInfo: OmapiProductTestfactory.build(),
    key: 'limited',
});
const omapiProductInfoFactory = Factory.Sync.makeFactory({
    omapiId: '456',
    productInfo: OmapiProductTestfactory.build(),
    mobileData: [],
});
const omapiFamilyOptinFactory = Factory.Sync.makeFactory({
    key: 'fixed_telephony',
    omapiId: '37785',
    mobileId: '36860',
});
const omapiFamilyOptionFactory = Factory.Sync.makeFactory({
    type: 'mobile',
    key: 'international_calling',
    omapiId: 'BERU0001',
    productInfo: OmapiProductTestfactory.build(),
    parents: [],
});
const omapiFamilyTierFactory = Factory.Sync.makeFactory({
    key: 'name',
    omapiId: '123',
    productInfo: OmapiProductTestfactory.build(),
    mobile: [omapiProductInfoFactory.build({ omapiId: '567' }), omapiProductInfoFactory.build({ omapiId: '568' })],
    entertainment: [omapiProductInfoFactory.build({ omapiId: '789' }), omapiProductInfoFactory.build({ omapiId: '780' })],
    fixedTelephony: [omapiProductInfoFactory.build({ omapiId: '121' })],
    optins: [omapiFamilyOptinFactory.build()],
    options: [omapiFamilyOptionFactory.build()],
});
const omapiFamilyFactory = Factory.Sync.makeFactory({
    tiers: [omapiFamilyTierFactory.build()],
});
const KLIK_2_LIM = 'm-klik-2-lim';
const ENTERTAINMENT_1 = 'entertainment-id-1';
const omapiKlikFamily = () => {
    return omapiFamilyFactory.build({
        tiers: [
            omapiFamilyTierFactory.build({
                key: 'klik',
                omapiId: KLIK_2_LIM,
                entertainment: [omapiProductInfoFactory.build({ omapiId: ENTERTAINMENT_1 })],
                mobile: [
                    omapiProductInfoFactory.build({
                        omapiId: 'm-klik-1-lim',
                        productInfo: OmapiProductTestfactory.build({ characteristics: { maxMobileLines: 1 } }),
                        mobileData: [
                            { omapiId: 'm-klik-1-lim', key: 'limited' },
                            { omapiId: 'm-klik-1-unl', key: 'unlimited' },
                        ],
                    }),
                    omapiProductInfoFactory.build({
                        omapiId: KLIK_2_LIM,
                        productInfo: OmapiProductTestfactory.build({ characteristics: { maxMobileLines: 1 } }),
                        mobileData: [
                            { omapiId: KLIK_2_LIM, key: 'limited' },
                            { omapiId: 'm-klik-2-unl', key: 'unlimited' },
                        ],
                    }),
                ],
                optins: [],
            }),
        ],
    });
};
const THRILL_1 = 'm-thrill-1';
const THRILL_2 = 'm-thrill-2';
const THRILL_3 = 'm-thrill-3';
const omapiConnectFiveFamily = () => {
    return omapiFamilyFactory.build({
        tiers: [
            omapiFamilyTierFactory.build({
                key: 'chill',
                omapiId: 'm-chill-1',
                entertainment: [
                    omapiProductInfoFactory.build({ omapiId: ENTERTAINMENT_1 }),
                    omapiProductInfoFactory.build({ omapiId: 'entertainment-id-2' }),
                ],
                mobile: [
                    omapiProductInfoFactory.build({
                        omapiId: 'm-chill-1',
                        productInfo: OmapiProductTestfactory.build({ characteristics: { maxMobileLines: 1 } }),
                    }),
                    omapiProductInfoFactory.build({
                        omapiId: 'm-chill-2',
                        productInfo: OmapiProductTestfactory.build({ characteristics: { maxMobileLines: 2 } }),
                    }),
                    omapiProductInfoFactory.build({
                        omapiId: 'm-chill-3',
                        productInfo: OmapiProductTestfactory.build({ characteristics: { maxMobileLines: 3 } }),
                    }),
                ],
                optins: [
                    omapiFamilyOptinFactory.build({
                        key: 'fixed_telephony',
                        omapiId: 'o-chill-1-ft',
                        mobileId: 'm-chill-1',
                    }),
                    omapiFamilyOptinFactory.build({
                        key: 'fixed_telephony',
                        omapiId: 'o-chill-2-ft',
                        mobileId: 'm-chill-2',
                    }),
                    omapiFamilyOptinFactory.build({
                        key: 'fixed_telephony',
                        omapiId: 'o-chill-3-ft',
                        mobileId: 'm-chill-3',
                    }),
                    omapiFamilyOptinFactory.build({
                        key: 'data_sim',
                        omapiId: 'o-chill-1-ds',
                        mobileId: 'm-chill-1',
                    }),
                    omapiFamilyOptinFactory.build({
                        key: 'data_sim',
                        omapiId: 'o-chill-2-ds',
                        mobileId: 'm-chill-2',
                    }),
                    omapiFamilyOptinFactory.build({
                        key: 'data_sim',
                        omapiId: 'o-chill-3-ds',
                        mobileId: 'm-chill-3',
                    }),
                ],
            }),
            omapiFamilyTierFactory.build({
                key: 'thrill',
                omapiId: THRILL_1,
                entertainment: [
                    omapiProductInfoFactory.build({ omapiId: ENTERTAINMENT_1 }),
                    omapiProductInfoFactory.build({ omapiId: 'entertainment-id-2' }),
                ],
                mobile: [
                    omapiProductInfoFactory.build({
                        omapiId: THRILL_1,
                        productInfo: OmapiProductTestfactory.build({ characteristics: { maxMobileLines: 1 } }),
                    }),
                    omapiProductInfoFactory.build({
                        omapiId: THRILL_2,
                        productInfo: OmapiProductTestfactory.build({ characteristics: { maxMobileLines: 2 } }),
                    }),
                    omapiProductInfoFactory.build({
                        omapiId: THRILL_3,
                        productInfo: OmapiProductTestfactory.build({ characteristics: { maxMobileLines: 3 } }),
                    }),
                ],
                optins: [
                    omapiFamilyOptinFactory.build({
                        key: 'fixed_telephony',
                        omapiId: 'o-thrill-1-ft',
                        mobileId: THRILL_1,
                    }),
                    omapiFamilyOptinFactory.build({
                        key: 'fixed_telephony',
                        omapiId: 'o-thrill-2-ft',
                        mobileId: THRILL_2,
                    }),
                    omapiFamilyOptinFactory.build({
                        key: 'fixed_telephony',
                        omapiId: 'o-thrill-3-ft',
                        mobileId: THRILL_3,
                    }),
                    omapiFamilyOptinFactory.build({
                        key: 'data_sim',
                        omapiId: 'o-thrill-1-ds',
                        mobileId: THRILL_1,
                    }),
                    omapiFamilyOptinFactory.build({
                        key: 'data_sim',
                        omapiId: 'o-thrill-2-ds',
                        mobileId: THRILL_2,
                    }),
                    omapiFamilyOptinFactory.build({
                        key: 'data_sim',
                        omapiId: 'o-thrill-3-ds',
                        mobileId: THRILL_3,
                    }),
                ],
            }),
        ],
    });
};

const rawOmapiProductTestFactory = Sync.makeFactory({
    category: [],
    unlimited: false,
    priceType: 'Non Recurrent Charge',
    requiresInstallation: false,
    usageBasedRatePlan: false,
    productid: '9155501914465272430',
    labelkey: 'Discount Telenet Customer Price',
    salesofferingid: 'test',
    externalProductCode: 'test',
    producttype: 'test',
    weight: 1,
    apps: [],
    services: [],
    customercategories: [
        'All',
        'Residential',
        'Production Test Business',
        'Internal',
        'Production Test',
        'Event/Demo',
        'Business',
    ],
    visible: false,
    localizedcontent: [
        {
            locale: 'nl',
            name: 'Korting Telenet Klantenprijs',
            logo: 'https://customerzone.prd.base.be/content/dam/www-base-be/img/self-service/products/discount-telenet-customer-price1.png',
        },
        {
            locale: 'fr',
            name: 'Réduction Prix Client Telenet',
            logo: 'https://customerzone.prd.base.be/content/dam/www-base-be/img/self-service/products/discount-telenet-customer-price2.png',
        },
        {
            locale: 'en',
            name: 'Discount Telenet Customer Price',
            logo: 'https://customerzone.prd.base.be/content/dam/www-base-be/img/self-service/products/discount-telenet-customer-price3.png',
        },
    ],
    isYupProduct: false,
    isEligibleForPauseProfile: false,
    isEligibleForAutoPause: false,
    isEligibleForSettinglimits: false,
    isFPBProduct: false,
});

class OmapiPremium {
    premiumSerivceId;
    details;
}

class OmapiPremiumMapper {
    toModel(rawResponse) {
        return this.createOmapiPremium(rawResponse);
    }
    createOmapiPremium(rawResponse) {
        const omapiPremium = new OmapiPremium();
        if (rawResponse.serviceDetails) {
            omapiPremium.premiumSerivceId = rawResponse.serviceDetails.premiumSerivceId || '';
            omapiPremium.details = rawResponse.serviceDetails.details.map((detail) => this.mapPremiumDetails(detail));
        }
        return omapiPremium;
    }
    mapPremiumDetails(rawDetails) {
        const details = {};
        details.serviceType = rawDetails.serviceType;
        details.serviceStatus = rawDetails.serviceStatus;
        details.serviceDescription = rawDetails.serviceDescription;
        if (rawDetails.serviceConfirmedDate) {
            details.serviceConfirmedDate = this.convertDate(rawDetails.serviceConfirmedDate);
        }
        if (rawDetails.serviceEndDate) {
            details.serviceEndDate = this.convertDate(rawDetails.serviceEndDate);
        }
        details.premium = rawDetails.premium;
        details.fixOrMobile = rawDetails.fixOrMobile;
        if (rawDetails.priceStartDate) {
            details.priceStartDate = this.convertDate(rawDetails.priceStartDate);
        }
        if (rawDetails.priceEndDate) {
            details.priceEndDate = this.convertDate(rawDetails.priceEndDate);
        }
        details.sendSms = this.covertPrice(rawDetails.sendSms);
        details.receiveSms = this.covertPrice(rawDetails.receiveSms);
        details.sendMms = this.covertPrice(rawDetails.sendMms);
        details.receiveMms = this.covertPrice(rawDetails.receiveMms);
        details.callPerMinute = this.covertPrice(rawDetails.callPerMinute);
        details.callPerSecond = this.covertPrice(rawDetails.callPerSecond);
        details.setUpCost = rawDetails.setUpCost;
        if (rawDetails.contentProviderStartDate) {
            details.contentProviderStartDate = this.convertDate(rawDetails.contentProviderStartDate);
        }
        if (rawDetails.contentProviderEndDate) {
            details.contentProviderEndDate = this.convertDate(rawDetails.contentProviderEndDate);
        }
        details.contentProviderName = rawDetails.contentProviderName;
        details.contentProviderStreet = rawDetails.contentProviderStreet;
        details.contentProviderPostalCode = rawDetails.contentProviderPostalCode;
        details.contentProviderCity = rawDetails.contentProviderCity;
        details.contentProviderCountry = rawDetails.contentProviderCountry;
        details.customerCareTelephoneOrEmail = rawDetails.customerCareTelephoneOrEmail;
        details.customerCareUrl = rawDetails.customerCareUrl;
        return details;
    }
    covertPrice(rawPrice) {
        if (rawPrice) {
            return rawPrice.split('/')[0];
        }
        return undefined;
    }
    convertDate(rawDate) {
        return dayjs(rawDate, 'YYYYMMDD').format('DD/MM/YYYY');
    }
    static ɵfac = function OmapiPremiumMapper_Factory(t) { return new (t || OmapiPremiumMapper)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: OmapiPremiumMapper, factory: OmapiPremiumMapper.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OmapiPremiumMapper, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

class OmapiProductMapper {
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

class OmapiFamilyUtils {
    static getFamilyTier(omapiId, omapiFamily) {
        const family = Object.values(OmapiFamilyTierEnum).find((family) => this.isOmapiIdInTier(omapiId, family, omapiFamily));
        return family ? family : OmapiFamilyTierEnum.FAST;
    }
    static isOmapiIdInTier(omapiId, familyTier, omapiFamily) {
        const omapiFamilyTier = omapiFamily.tiers.find((tier) => {
            return tier.key === familyTier;
        });
        if (omapiFamilyTier === undefined) {
            return false;
        }
        const strings = omapiFamilyTier.mobile?.map((mobile) => {
            return mobile.omapiId;
        }) ?? [];
        strings.push(omapiFamilyTier.omapiId);
        return strings.indexOf(omapiId) > -1;
    }
}

class OmapiUtils {
    static doesContainProductWithProvidedOmapiId(productsWithOmapiIds, omapiId) {
        return productsWithOmapiIds.some((product) => product.omapiid === omapiId);
    }
    static getLocalizedContent(language, omapiProduct) {
        return omapiProduct.localizedContent?.find((value) => {
            return language.valueOf() === value.locale;
        });
    }
    static getComboProducts(omapiId) {
        return SofyComboProducts.find((product) => {
            return product.productid === omapiId;
        });
    }
}

class OmapiCacheService {
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
    static ɵfac = function OmapiCacheService_Factory(t) { return new (t || OmapiCacheService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: OmapiCacheService, factory: OmapiCacheService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OmapiCacheService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

class OmapiProductService {
    http;
    urlService;
    messageService;
    omapiProductMapper;
    cacheService;
    configService;
    gatewayUrl;
    log = LogFactory.createLogger(OmapiProductService);
    FETCH_ERROR_PREFIX = 'An error occurred while trying to fetch ';
    constructor(http, urlService, messageService, omapiProductMapper, cacheService, configService) {
        this.http = http;
        this.urlService = urlService;
        this.messageService = messageService;
        this.omapiProductMapper = omapiProductMapper;
        this.cacheService = cacheService;
        this.configService = configService;
    }
    getProductByEPC(messageGroup, epc) {
        const endpoint = this.getProductEndpoint(epc);
        return this.http.get(endpoint, this.getHttpConfig()).pipe(take(1), catchError((error) => this.handleError(error, messageGroup)), map((response) => {
            return this.omapiProductMapper.toModel(response);
        }));
    }
    getRawProductByEndpoint(messageGroup, endpoint, silentlyHandleError = false) {
        if (!this.cacheService.get(endpoint)) {
            this.cacheService.add(endpoint, this.http.get(endpoint, this.getHttpConfig()));
        }
        return this.cacheService.get(endpoint).pipe(take(1), catchError((error) => silentlyHandleError ? this.handleErrorSilent(error, messageGroup) : this.handleError(error, messageGroup)), mergeMap((response) => {
            return this.addConstituentsToOmapiResponse(response, messageGroup);
        }), map((response) => {
            return response;
        }));
    }
    rawProductsFromEndpoints$(messageGroup, endpoints, silentlyHandleError = false) {
        return forkJoin(map$1(endpoints, (endpoint) => this.getRawProductByEndpoint(messageGroup, endpoint, silentlyHandleError))).pipe(map((omapiResponses) => omapiResponses.filter((omapiResponse) => omapiResponse !== undefined)));
    }
    getProductByEndpoint(messageGroup, endpoint) {
        return this.doGet(messageGroup, endpoint);
    }
    // to do cleanup (method name getProductById), maybe method for the hardcoded url
    getProductById(messageGroup, omapiId) {
        return this.doGet(messageGroup, this.getOmapiProductUrl(omapiId));
    }
    addConstituentsToOmapiResponse(rawOmapiResponse, messageGroup) {
        if (rawOmapiResponse?.product &&
            rawOmapiResponse.product.characteristics &&
            rawOmapiResponse.product.characteristics.constituents) {
            return this.resolveConstituents(rawOmapiResponse.product.characteristics.constituents, messageGroup).pipe(map((response) => {
                if (rawOmapiResponse?.product?.characteristics) {
                    rawOmapiResponse.product.characteristics.constituents = response;
                }
                return rawOmapiResponse;
            }));
        }
        else {
            return of(rawOmapiResponse);
        }
    }
    getOmapiProductUrl(omapiId) {
        return this.configService.getConfig(ConfigConstants.OMAPI_URL) + '/public/product/' + omapiId;
    }
    doGet(messageGroup, endpoint) {
        if (!this.cacheService.get(endpoint)) {
            const httpObservable$ = this.http.get(endpoint, this.getHttpConfig());
            this.cacheService.add(endpoint, httpObservable$);
        }
        return this.cacheService.get(endpoint).pipe(catchError((error) => this.handleError(error, messageGroup)), map((response) => {
            return this.omapiProductMapper.toModel(response);
        }));
    }
    resolveConstituents(constituents, messageGroup) {
        return forkJoin(map$1(constituents, (constituent) => this.resolveConstituent(constituent, messageGroup)));
    }
    resolveConstituent(constituent, messageGroup) {
        return forkJoin({
            specurl: of(constituent.specurl),
            type: of(constituent.type),
            rawOmapi: this.getRawProductByEndpoint(messageGroup, constituent.specurl, false),
        });
    }
    getProductEndpoint(epc) {
        return `${this.gatewayUrl}/omapi/public/product/${epc}`;
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleError(error, messageGroup) {
        if (error.status !== 410) {
            this.messageService.addMessage(new ErrorMessage(messageGroup, 'omapi-' + error.status));
        }
        this.log.logError(this.FETCH_ERROR_PREFIX + messageGroup, error);
        return throwError(() => this.FETCH_ERROR_PREFIX + messageGroup);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleErrorSilent(error, messageGroup) {
        if (error.status !== 410) {
            this.messageService.addMessage(new ErrorMessage(messageGroup, 'omapi-' + error.status));
        }
        this.log.logError(this.FETCH_ERROR_PREFIX + messageGroup, error);
        return of(undefined);
    }
    static ɵfac = function OmapiProductService_Factory(t) { return new (t || OmapiProductService)(i0.ɵɵinject(i1$1.HttpClient), i0.ɵɵinject(i1.UrlService), i0.ɵɵinject(i3.MessageService), i0.ɵɵinject(OmapiProductMapper), i0.ɵɵinject(OmapiCacheService), i0.ɵɵinject(i6.ConfigService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: OmapiProductService, factory: OmapiProductService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OmapiProductService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1$1.HttpClient }, { type: i1.UrlService }, { type: i3.MessageService }, { type: OmapiProductMapper }, { type: OmapiCacheService }, { type: i6.ConfigService }], null); })();

class OmapiEnrichService {
    omapiProductService;
    omapiProductMapper;
    constructor(omapiProductService, omapiProductMapper) {
        this.omapiProductService = omapiProductService;
        this.omapiProductMapper = omapiProductMapper;
    }
    enrichResponseWithOmapiData(messageGroup, response) {
        const copy = cloneDeep(response);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return forkJoin(this.getOmapiObservables(messageGroup, copy)).pipe(map(() => copy));
    }
    getOmapiObservables(messageGroup, data, specUrls = []) {
        if (data === undefined || data === null) {
            return specUrls;
        }
        Object.entries(data).forEach(([key, value]) => {
            if (key === 'specurl') {
                const sofyComboProduct = OmapiUtils.getComboProducts(data.omapiid);
                if (isEmpty(sofyComboProduct)) {
                    const omapiProduct$ = this.omapiProductService
                        // eslint-disable-next-line @typescript-eslint/ban-types
                        .getProductByEndpoint(messageGroup, value.toString())
                        .pipe(tap((omapiProduct) => {
                        data['productInfo'] = omapiProduct;
                    }), catchError(() => {
                        return of(undefined);
                    }), switchMap((omapiProduct) => this.enrichConstituents(messageGroup, omapiProduct)));
                    specUrls.push(omapiProduct$);
                }
                else {
                    data['productInfo'] = this.omapiProductMapper.toModel({ product: sofyComboProduct });
                }
            }
            if (typeof value === 'object') {
                this.getOmapiObservables(messageGroup, value, specUrls);
            }
        });
        if (isEmpty(specUrls)) {
            return [of(data)];
        }
        return specUrls;
    }
    enrichConstituents(messageGroup, product) {
        if (product === undefined || product.getConstituents().length === 0) {
            return of([]);
        }
        return forkJoin(product.getConstituents().map((constituentInterface) => {
            return this.omapiProductService.getProductByEndpoint(messageGroup, constituentInterface.specurl).pipe(tap((omapiProduct) => {
                constituentInterface.productInfo = omapiProduct;
            }));
        }));
    }
    static ɵfac = function OmapiEnrichService_Factory(t) { return new (t || OmapiEnrichService)(i0.ɵɵinject(OmapiProductService), i0.ɵɵinject(OmapiProductMapper)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: OmapiEnrichService, factory: OmapiEnrichService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OmapiEnrichService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: OmapiProductService }, { type: OmapiProductMapper }], null); })();

class OmapiFamilyService {
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
    static ɵfac = function OmapiFamilyService_Factory(t) { return new (t || OmapiFamilyService)(i0.ɵɵinject(i1$1.HttpClient), i0.ɵɵinject(i1.UrlService), i0.ɵɵinject(i3.MessageService), i0.ɵɵinject(i6.ConfigService), i0.ɵɵinject(OmapiCacheService), i0.ɵɵinject(OmapiProductService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: OmapiFamilyService, factory: OmapiFamilyService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OmapiFamilyService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1$1.HttpClient }, { type: i1.UrlService }, { type: i3.MessageService }, { type: i6.ConfigService }, { type: OmapiCacheService }, { type: OmapiProductService }], null); })();

class OmapiPremiumService {
    http;
    omapiPremiumMapper;
    urlService;
    cacheService;
    configService;
    messageService;
    gatewayUrl;
    log = LogFactory.createLogger(OmapiPremiumService);
    constructor(http, omapiPremiumMapper, urlService, cacheService, configService, messageService) {
        this.http = http;
        this.omapiPremiumMapper = omapiPremiumMapper;
        this.urlService = urlService;
        this.cacheService = cacheService;
        this.configService = configService;
        this.messageService = messageService;
        this.gatewayUrl = this.configService.getConfig(ConfigConstants.OMAPI_URL);
    }
    getOmapiPremium(messageGroup, epc, showCustomError, errorLabelKey) {
        if (!this.cacheService.get(epc)) {
            this.cacheService.add(epc, this.http.get(this.getPremiumEndpoint(epc), this.getHttpConfig()));
        }
        return this.cacheService.get(epc).pipe(take(1), catchError((error) => this.handleError(error, messageGroup, showCustomError, errorLabelKey)), map((response) => {
            return this.omapiPremiumMapper.toModel(response);
        }));
    }
    handleError(error, messageGroup, showCustomError, errorLabelKey) {
        if (showCustomError && errorLabelKey) {
            this.messageService.addMessage(new ErrorMessage(messageGroup, errorLabelKey));
        }
        else if (error.status !== 410) {
            this.messageService.addMessage(new ErrorMessage(messageGroup, 'omapi-' + error.status));
        }
        this.log.logError('An error occurred while trying to fetch ' + messageGroup, error);
        return throwError(() => 'An error occurred while trying to fetch ' + messageGroup);
    }
    getPremiumEndpoint(epc) {
        return `${this.gatewayUrl}/public/premium/${epc}`;
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
    static ɵfac = function OmapiPremiumService_Factory(t) { return new (t || OmapiPremiumService)(i0.ɵɵinject(i1$1.HttpClient), i0.ɵɵinject(OmapiPremiumMapper), i0.ɵɵinject(i1.UrlService), i0.ɵɵinject(OmapiCacheService), i0.ɵɵinject(i6.ConfigService), i0.ɵɵinject(i3.MessageService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: OmapiPremiumService, factory: OmapiPremiumService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OmapiPremiumService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1$1.HttpClient }, { type: OmapiPremiumMapper }, { type: i1.UrlService }, { type: OmapiCacheService }, { type: i6.ConfigService }, { type: i3.MessageService }], null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { CharsEnum, LanguageEnum, OmapiCacheService, OmapiCharacteristicEnum, OmapiConstituentType, OmapiDarwinProducts, OmapiEnrichService, OmapiFamilyConstants, OmapiFamilyProductType, OmapiFamilyService, OmapiFamilyTierEnum, OmapiFamilyUtils, OmapiLegacyProducts, OmapiPremium, OmapiPremiumMapper, OmapiPremiumService, OmapiProduct, OmapiProductGroupEnum, OmapiProductMapper, OmapiProductService, OmapiProductSubGroupEnum, OmapiProductTestfactory, OmapiProductTierEnum, OmapiProductType, OmapiServiceSpecificationLabelKey, OmapiServiceType, OmapiSubCategoryEnum, OmapiUtils, ProductCharacteristicEnum, ProductConstants, ProductPriceTypeEnum, SofyComboProducts, omapiConnectFiveFamily, omapiFamilyFactory, omapiFamilyOptinFactory, omapiFamilyOptionFactory, omapiFamilyTierFactory, omapiKlikFamily, omapiMobileDataFactory, omapiProductInfoFactory, rawOmapiProductTestFactory };
//# sourceMappingURL=telenet-ng-lib-omapi.mjs.map
