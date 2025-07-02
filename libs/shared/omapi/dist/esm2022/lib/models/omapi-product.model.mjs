import { each, includes, isEmpty, isObject, some, sortBy, uniq } from 'lodash-es';
import { OmapiCharacteristicEnum, OmapiProductGroupEnum, OmapiProductSubGroupEnum, } from '../constants/omapi-characteristic.enum';
import { OmapiDarwinProducts, OmapiLegacyProducts, OmapiProductTierEnum, OmapiProductType, OmapiServiceSpecificationLabelKey, OmapiServiceType, OmapiSubCategoryEnum, } from '../constants/omapi.constants';
import { ProductConstants } from '../constants/product.constant';
import { ProductCharacteristicEnum } from '../constants/product-characteristic.enum';
import { ProductPriceTypeEnum } from '../constants/product-price-type.enum';
import { FiberProducts } from '../constants/fiber-products.constants';
export class OmapiProduct {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib21hcGktcHJvZHVjdC5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvbW9kZWxzL29tYXBpLXByb2R1Y3QubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJBLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDbEYsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixxQkFBcUIsRUFDckIsd0JBQXdCLEdBQ3pCLE1BQU0sd0NBQXdDLENBQUM7QUFDaEQsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixtQkFBbUIsRUFDbkIsb0JBQW9CLEVBQ3BCLGdCQUFnQixFQUNoQixpQ0FBaUMsRUFDakMsZ0JBQWdCLEVBQ2hCLG9CQUFvQixHQUNyQixNQUFNLDhCQUE4QixDQUFDO0FBRXRDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUV0RSxNQUFNLE9BQU8sWUFBWTtJQUN2QixTQUFTLENBQVU7SUFDbkIsWUFBWSxDQUFXO0lBQ3ZCLGVBQWUsQ0FBVTtJQUN6QixtQkFBbUIsQ0FBVTtJQUM3QixXQUFXLENBQVU7SUFDckIsVUFBVSxDQUFZO0lBQ3RCLGdCQUFnQixDQUFVO0lBQzFCLGtCQUFrQixDQUFZO0lBQzlCLFdBQVcsQ0FBd0I7SUFDbkMsUUFBUSxDQUFVO0lBQ2xCLE9BQU8sQ0FBVztJQUNsQixNQUFNLENBQVU7SUFDaEIsTUFBTSxDQUFVO0lBQ2hCLFFBQVEsQ0FBc0I7SUFDOUIsOERBQThEO0lBQzlELElBQUksQ0FBTTtJQUNWLGVBQWUsQ0FBc0M7SUFDckQsZ0JBQWdCLENBQStCO0lBQy9DLGdCQUFnQixDQUE2QjtJQUM3QyxLQUFLLENBQW1CO0lBQ3hCLGVBQWUsQ0FBNEI7SUFDM0MsU0FBUyxDQUFXO0lBQ3BCLFNBQVMsQ0FBVTtJQUNuQixjQUFjLENBQTRCO0lBQzFDLElBQUksQ0FBVTtJQUNkLFFBQVEsQ0FBVTtJQUNsQixtQkFBbUIsQ0FBVztJQUM5QixpQkFBaUIsQ0FBVztJQUM1QixJQUFJLENBQVU7SUFDZCxrQkFBa0IsQ0FBVztJQUM3QixvQkFBb0IsQ0FBVztJQUMvQixXQUFXLENBQXdCO0lBQ25DLGtCQUFrQixDQUErQjtJQUNqRCxtQkFBbUIsQ0FBa0M7SUFDckQsS0FBSyxDQUFvQjtJQUN6QixRQUFRLENBQVU7SUFDbEIsS0FBSyxDQUFVO0lBQ2YsbUJBQW1CLENBQVc7SUFDOUIsVUFBVSxDQUFXO0lBQ3JCLFdBQVcsQ0FBVztJQUN0Qix3QkFBd0IsQ0FBVTtJQUNsQyx5QkFBeUIsQ0FBVTtJQUNuQyxxQkFBcUIsQ0FBVTtJQUMvQixzQkFBc0IsQ0FBVztJQUNqQyx5QkFBeUIsQ0FBVztJQUNwQywwQkFBMEIsQ0FBVztJQUNyQyxZQUFZLENBQVc7SUFFdkI7UUFDRSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsWUFBWTtRQUNWLE9BQVEsSUFBSSxDQUFDLGVBQTRDLEVBQUUsWUFBWSxDQUFDO0lBQzFFLENBQUM7SUFFRCxLQUFLLENBQUMsT0FBZ0I7UUFDcEIsT0FBTyxPQUFPO1lBQ1osQ0FBQyxDQUFFLElBQUksQ0FBQyxlQUE0QyxFQUFFLFlBQVk7WUFDbEUsQ0FBQyxDQUFFLElBQUksQ0FBQyxlQUE0QyxFQUFFLFlBQVksQ0FBQztJQUN2RSxDQUFDO0lBRUQsd0JBQXdCO1FBQ3RCLE1BQU0scUJBQXFCLEdBQUcsRUFBb0MsQ0FBQztRQUVuRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUM7WUFDcEMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUN0QyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsTUFBOEMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDekYsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBQ0QsT0FBTyxxQkFBcUIsQ0FBQztJQUMvQixDQUFDO0lBRUQsV0FBVyxDQUFDLGNBQXNCO1FBQ2hDLE9BQU8sQ0FDTCxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7Z0JBQ2pDLE9BQU8sUUFBUSxDQUFDLFdBQVcsRUFBRSxLQUFLLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNqRSxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVELG1CQUFtQjtRQUNqQixRQUFRLElBQUksRUFBRSxDQUFDO1lBQ2IsS0FBSyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLDhCQUE4QixDQUFDO2dCQUNwRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUMsOEJBQThCLENBQUM7Z0JBQ3hFLE1BQU07WUFDUixLQUFLLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsdUJBQXVCLENBQUMsQ0FBQztZQUNoRSxLQUFLLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsNkJBQTZCLENBQUMsQ0FBQztZQUN0RSxLQUFLLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsK0JBQStCLENBQUMsQ0FBQztZQUN4RTtnQkFDRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUMsK0JBQStCLENBQUM7UUFDN0UsQ0FBQztJQUNILENBQUM7SUFFRCxpQkFBaUI7UUFDZixPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdELElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakUsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixFQUFFLENBQUMsa0JBQTBCLEVBQUUsRUFBRTtZQUNqRixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEtBQUssa0JBQWtCLENBQUM7UUFDakcsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsdUJBQXVCO1FBQ3JCLE1BQU0sY0FBYyxHQUE2QixFQUFFLENBQUM7UUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUF5QixFQUFFLEVBQUU7WUFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxhQUFxQyxFQUFFLEVBQUU7Z0JBQ3JFLElBQUksb0JBQW9CLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsYUFBYSxDQUFDLENBQUM7Z0JBQzVELG9CQUFvQixDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDO2dCQUN2RCxvQkFBb0IsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDekMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLENBQUM7Z0JBQ3BFLGNBQWMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUM1QyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELG9CQUFvQjtRQUNsQixJQUFJLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQzdDLElBQUksYUFBYSxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN4QyxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sMEJBQTBCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLHVCQUF1QixDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCw4REFBOEQ7SUFDOUQsaUJBQWlCLENBQUMsR0FBVztRQUMzQixpREFBaUQ7UUFDakQsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDL0UsT0FBUSxJQUFJLENBQUMsZUFBNEMsRUFBRSxDQUFDLEdBQXFDLENBQUMsQ0FBQztRQUNyRyxDQUFDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLHlCQUF5QixDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFeEYsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3BCLE1BQU0scUJBQXFCLEdBQUcsSUFBSSxDQUFDLGlDQUFpQyxDQUNsRSxpQ0FBaUMsQ0FBQyw0QkFBNEIsRUFDOUQsZ0JBQWdCLENBQUMsT0FBTyxDQUN6QixDQUFDO1lBQ0YsY0FBYyxHQUFHLHFCQUFxQixFQUFFLEtBQUssSUFBSSxJQUFJLENBQUM7UUFDeEQsQ0FBQztRQUNELE9BQU8sY0FBYyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxtQkFBbUI7UUFDakIsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMseUJBQXlCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUM5RixPQUFPLGdCQUFnQixJQUFJLGdCQUFnQixDQUFDLEtBQUssQ0FBQztJQUNwRCxDQUFDO0lBRUQsbUJBQW1CO1FBQ2pCLE9BQU8sQ0FDTCxJQUFJLENBQUMsUUFBUTtZQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQzdCLE9BQU8sQ0FDTCxPQUFPLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxLQUFLLGdCQUFnQixDQUFDLGNBQWM7b0JBQ3JFLE9BQU8sQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUMsYUFBYSxFQUFFLEVBQUU7d0JBQzdDLE9BQU8sQ0FDTCxhQUFhLENBQUMsSUFBSTs0QkFDbEIsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxnQkFBZ0IsQ0FBQyxPQUFPOzRCQUM3RCxhQUFhLENBQUMsS0FBSzs0QkFDbkIsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxnQkFBZ0IsQ0FBQyxTQUFTLENBQ2pFLENBQUM7b0JBQ0osQ0FBQyxDQUFDLENBQ0gsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQsMEJBQTBCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7WUFDdEQsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxFQUFFLFdBQVcsS0FBSyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUM7WUFDckcsRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCx5QkFBeUI7UUFDdkIsT0FBUSxJQUFJLENBQUMsZUFBNEMsRUFBRSxlQUFlLEtBQUssZ0JBQWdCLENBQUMsR0FBRyxDQUFDO0lBQ3RHLENBQUM7SUFFRCxtQ0FBbUM7UUFDakMsT0FBTyxJQUFJLENBQUMsUUFBUTtZQUNsQixFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLFdBQVcsS0FBSyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUM7WUFDbEUsRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUNwQixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsS0FBSyxpQ0FBaUMsQ0FBQyxxQ0FBcUMsQ0FDOUYsQ0FBQztJQUNOLENBQUM7SUFFRCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFLEtBQUssRUFBRSxDQUFDO0lBQzFELENBQUM7SUFFRCxLQUFLO1FBQ0gsT0FBTyxJQUFJLENBQUMsZUFBZSxFQUFFLEtBQUsscUJBQXFCLENBQUMsR0FBRyxDQUFDO0lBQzlELENBQUM7SUFFRCxjQUFjLENBQUMsV0FBbUI7UUFDaEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ3JDLE9BQU8sT0FBTyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxXQUFXLENBQUM7UUFDM0QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUTtRQUNOLE9BQU8sSUFBSSxDQUFDLFdBQVcsS0FBSyxRQUFRLENBQUM7SUFDdkMsQ0FBQztJQUVELE9BQU87UUFDTCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLElBQUksYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUN4RixDQUFDO0lBRUQsVUFBVSxHQUFHLEdBQVcsRUFBRTtRQUN4QixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNkLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUNuQixDQUFDO2FBQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDekIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDN0MsT0FBTyx3REFBd0QsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDO1FBQ2pGLENBQUM7UUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUMsQ0FBQztJQUVGLFlBQVksR0FBRyxDQUFDLEdBQVcsRUFBVSxFQUFFO1FBQ3JDLElBQUksR0FBRyxFQUFFLENBQUM7WUFDUixPQUFPLEdBQUc7aUJBQ1AsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7aUJBQ2xCLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO2lCQUNuQixPQUFPLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDO2lCQUM5QixXQUFXLEVBQUUsQ0FBQztRQUNuQixDQUFDO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDLENBQUM7SUFFSyxlQUFlO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLHVCQUF1QixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFTSxjQUFjO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLHVCQUF1QixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFTSxlQUFlO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLHVCQUF1QixDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1RSxDQUFDO0lBRUQsY0FBYyxDQUFDLElBQVk7UUFDekIsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQztZQUMzQixNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLE1BQU0sQ0FDakQsQ0FBQyxNQUE0QixFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQzFFLENBQUM7WUFDRixPQUFPLFdBQVcsQ0FBQztRQUNyQixDQUFDO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVELGlDQUFpQyxDQUFDLFFBQWdCLEVBQUUsV0FBb0I7UUFDdEUsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEIsTUFBTSxPQUFPLEdBQUcsV0FBVztnQkFDekIsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsV0FBVyxLQUFLLFdBQVcsQ0FBQztnQkFDOUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFckIsT0FBTyxDQUNMLE9BQU87Z0JBQ1AsT0FBTyxDQUFDLGNBQWM7Z0JBQ3RCLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBcUMsRUFBRSxFQUFFO29CQUNwRSxPQUFPLGFBQWEsQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDaEUsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUNKLENBQUM7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRUQsZUFBZTtRQUNiLFFBQVEsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3ZCLEtBQUssb0JBQW9CLENBQUMsMEJBQTBCO2dCQUNsRCxPQUFPLG9CQUFvQixDQUFDLFFBQVEsQ0FBQztZQUN2QyxLQUFLLG9CQUFvQixDQUFDLHNCQUFzQixDQUFDO1lBQ2pEO2dCQUNFLE9BQU8sb0JBQW9CLENBQUMsU0FBUyxDQUFDO1FBQzFDLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7SUFDckQsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxTQUFTLEtBQUssbUJBQW1CLENBQUMsTUFBTSxDQUFDO0lBQ3ZELENBQUM7SUFFRCxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsS0FBSyx3QkFBd0IsQ0FBQyxRQUFRLENBQUM7SUFDekUsQ0FBQztJQUVELGNBQWM7UUFDWixPQUFPLENBQ0wsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEtBQUssd0JBQXdCLENBQUMsYUFBYTtZQUNwRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsS0FBSyx3QkFBd0IsQ0FBQyxJQUFJLENBQzVELENBQUM7SUFDSixDQUFDO0lBRUQsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxLQUFLLG9CQUFvQixDQUFDLElBQUksQ0FBQztJQUM3RSxDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsTUFBTSxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxHQUFHLElBQUk7YUFDeEUsZUFBMkMsQ0FBQztRQUMvQyxJQUFJLFlBQVksSUFBSSxXQUFXLElBQUksY0FBYyxFQUFFLENBQUM7WUFDbEQsT0FBTyxDQUFDLFlBQVksRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLGNBQWMsQ0FBQztpQkFDaEUsTUFBTSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxXQUFXLEtBQUssRUFBRSxDQUFDO2lCQUMzQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsQ0FBQztpQkFDaEQsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDN0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsQ0FBQztRQUVELE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEYsQ0FBQztJQUVELHlCQUF5QjtRQUN2QixJQUFJLE1BQU0sR0FBYSxFQUFFLENBQUM7UUFDMUIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUNsRCxNQUFNLEdBQUcsQ0FBQyxHQUFHLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4QyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFFRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsVUFBVSxDQUFDLEdBQWU7UUFDeEIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QyxPQUFPLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsWUFBWSxDQUFDLEdBQXFCO1FBQ2hDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNULE9BQU8sRUFBRSxDQUFDO1FBQ1osQ0FBQztRQUNELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekMsT0FBTyxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFRCxXQUFXLENBQUMsR0FBYztRQUN4QixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sU0FBUyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDckMsQ0FBQztJQUVELFlBQVksQ0FBQyxHQUFlO1FBQzFCLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsc0NBQXNDO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixFQUFFLFFBQVEsQ0FBQztJQUMzQyxDQUFDO0lBRU8sZUFBZTtRQUNyQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLHVCQUF1QixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVELDJCQUEyQjtRQUN6QixPQUFPLElBQUksQ0FBQyxTQUFTLEtBQUssbUJBQW1CLENBQUMsMkJBQTJCLENBQUM7SUFDNUUsQ0FBQztJQUVELHFCQUFxQjtRQUNuQixPQUFPLElBQUksQ0FBQyxTQUFTLEtBQUssbUJBQW1CLENBQUMscUJBQXFCLENBQUM7SUFDdEUsQ0FBQztJQUVELGlCQUFpQjtRQUNmLE9BQU8sb0JBQW9CLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDO0lBQ2pFLENBQUM7SUFFRCxpQkFBaUI7UUFDZixPQUFPLElBQUksQ0FBQyxTQUFTLEtBQUssbUJBQW1CLENBQUMsZ0JBQWdCLENBQUM7SUFDakUsQ0FBQztJQUVELGVBQWU7UUFDYixNQUFNLGtCQUFrQixHQUFHLEtBQUssQ0FBQztRQUNqQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUMsSUFBSSxLQUFLLENBQUM7SUFDaEYsQ0FBQztJQUVELE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxXQUFXLEtBQUssZ0JBQWdCLENBQUMsS0FBSyxDQUFDO0lBQ3JELENBQUM7SUFFTyxxQkFBcUIsQ0FBQyxJQUE4QjtRQUMxRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVPLGNBQWMsQ0FBQyxJQUFZO1FBQ2pDLE9BQU8sSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFTyxpQkFBaUIsQ0FBQyxhQUFxQztRQUM3RCxhQUFhLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUMvQixhQUFhLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUM5QixhQUFhLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUNqQyxhQUFhLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUM5QixhQUFhLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUVqQyxJQUFJLGFBQWEsQ0FBQyxJQUFJLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN4RixhQUFhLENBQUMsSUFBSSxHQUFHLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztRQUM1QyxDQUFDO1FBRUQsUUFBUSxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbEMsS0FBSyxnQkFBZ0IsQ0FBQyxjQUFjO2dCQUNsQyxPQUFPLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMvRCxLQUFLLGdCQUFnQixDQUFDLGVBQWU7Z0JBQ25DLE9BQU8sSUFBSSxDQUFDLGtDQUFrQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ2hFLEtBQUssZ0JBQWdCLENBQUMsZUFBZTtnQkFDbkMsT0FBTyxJQUFJLENBQUMsa0NBQWtDLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDaEUsS0FBSyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7WUFDcEMsS0FBSyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUM7WUFDekIsS0FBSyxnQkFBZ0IsQ0FBQyxHQUFHO2dCQUN2QixPQUFPLElBQUksQ0FBQyxtQ0FBbUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNqRSxLQUFLLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztZQUMvQixLQUFLLGdCQUFnQixDQUFDLGNBQWM7Z0JBQ2xDLE9BQU8sSUFBSSxDQUFDLDRCQUE0QixDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzFELEtBQUssZ0JBQWdCLENBQUMsT0FBTyxDQUFDO1lBQzlCLEtBQUssZ0JBQWdCLENBQUMsT0FBTztnQkFDM0IsT0FBTyxhQUFhLENBQUM7WUFDdkI7Z0JBQ0UsT0FBTyxDQUFDLEtBQUssQ0FBQyxrQ0FBa0MsYUFBYSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUM7Z0JBQzlFLE9BQU8sYUFBYSxDQUFDO1FBQ3pCLENBQUM7SUFDSCxDQUFDO0lBRU8saUNBQWlDLENBQUMsYUFBcUM7UUFDN0UsYUFBYSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDOUIsYUFBYSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDN0IsSUFBSSxhQUFhLENBQUMsS0FBSyxJQUFJLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssZ0JBQWdCLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDNUYsYUFBYSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDaEMsYUFBYSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakMsQ0FBQztRQUVELElBQUksYUFBYSxDQUFDLFFBQVEsSUFBSSxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDckQsYUFBYSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDOUIsYUFBYSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDakMsYUFBYSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDN0IsYUFBYSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEMsQ0FBQztRQUNELE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxrQ0FBa0MsQ0FBQyxhQUFxQztRQUM5RSxhQUFhLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUM5QixhQUFhLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUU3QixJQUFJLGFBQWEsQ0FBQyxLQUFLLElBQUksYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUN0RyxhQUFhLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUNoQyxhQUFhLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQyxDQUFDO1FBRUQsSUFBSSxhQUFhLENBQUMsUUFBUSxJQUFJLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNyRCxhQUFhLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUM5QixhQUFhLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUM5QixhQUFhLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUMvQixDQUFDO1FBQ0QsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQztJQUVPLGtDQUFrQyxDQUFDLGFBQXFDO1FBQzlFLGFBQWEsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQy9CLGFBQWEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQzlCLE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxtQ0FBbUMsQ0FBQyxhQUFxQztRQUMvRSxhQUFhLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUM3QixhQUFhLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUM5QixhQUFhLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUNqQyxPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDO0lBRU8sNEJBQTRCLENBQUMsYUFBcUM7UUFDeEUsSUFBSSxhQUFhLENBQUMsS0FBSyxJQUFJLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssZ0JBQWdCLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDNUYsYUFBYSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDaEMsYUFBYSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakMsQ0FBQzthQUFNLENBQUM7WUFDTixhQUFhLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQyxDQUFDO1FBQ0QsYUFBYSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDN0IsYUFBYSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFFakMsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmF0ZUludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvcmF0ZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVmlzaWJpbGl0eVJ1bGVzSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy92aXNpYmlsaXR5cnVsZXMuaW50ZXJmYWNlJztcbmltcG9ydCB7IFNlcnZpY2VJbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3NlcnZpY2UuaW50ZXJmYWNlJztcbmltcG9ydCB7IFNwZWNpZmljYXRpb25JbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3NwZWNpZmljYXRpb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IFN1YkNhdGVnb3J5SW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zdWItY2F0ZWdvcnkuaW50ZXJmYWNlJztcbmltcG9ydCB7IExvY2FsaXplZENvbnRlbnRJbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2xvY2FsaXplZC1jb250ZW50LmludGVyZmFjZSc7XG5pbXBvcnQgeyBTaG9ydERlc2NyaXB0aW9uSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zaG9ydC1kZXNjcmlwdGlvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTG9jYWxpemVkQ29udGVudE5hbWVzSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9sb2NhbGl6ZWQtY29udGVudC1uYW1lcy5pbnRlcmZhY2UnO1xuXG5pbXBvcnQge1xuICBSYXdPbWFwaUNvbnN0aXR1ZW50SW50ZXJmYWNlLFxuICBVc2FnZUxpbWl0c0ludGVyZmFjZSxcbiAgVXNhZ2VOb3RpZmljYXRpb25zSW50ZXJmYWNlLFxufSBmcm9tICcuLi9pbnRlcmZhY2VzL3Jhdy1vbWFwaS1wcm9kdWN0LmludGVyZmFjZSc7XG5pbXBvcnQgeyBDaGFyc0ludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvY2hhcnMuaW50ZXJmYWNlJztcbmltcG9ydCB7IENoYXJzRW51bSB9IGZyb20gJy4uL2VudW1zL2NoYXJzLmVudW0nO1xuaW1wb3J0IHsgQ2hhcmFjdGVyaXN0aWNzSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9jaGFyYWN0ZXJpc3RpY3MuaW50ZXJmYWNlJztcbmltcG9ydCB7IGVhY2gsIGluY2x1ZGVzLCBpc0VtcHR5LCBpc09iamVjdCwgc29tZSwgc29ydEJ5LCB1bmlxIH0gZnJvbSAnbG9kYXNoLWVzJztcbmltcG9ydCB7XG4gIE9tYXBpQ2hhcmFjdGVyaXN0aWNFbnVtLFxuICBPbWFwaVByb2R1Y3RHcm91cEVudW0sXG4gIE9tYXBpUHJvZHVjdFN1Ykdyb3VwRW51bSxcbn0gZnJvbSAnLi4vY29uc3RhbnRzL29tYXBpLWNoYXJhY3RlcmlzdGljLmVudW0nO1xuaW1wb3J0IHtcbiAgT21hcGlEYXJ3aW5Qcm9kdWN0cyxcbiAgT21hcGlMZWdhY3lQcm9kdWN0cyxcbiAgT21hcGlQcm9kdWN0VGllckVudW0sXG4gIE9tYXBpUHJvZHVjdFR5cGUsXG4gIE9tYXBpU2VydmljZVNwZWNpZmljYXRpb25MYWJlbEtleSxcbiAgT21hcGlTZXJ2aWNlVHlwZSxcbiAgT21hcGlTdWJDYXRlZ29yeUVudW0sXG59IGZyb20gJy4uL2NvbnN0YW50cy9vbWFwaS5jb25zdGFudHMnO1xuaW1wb3J0IHsgQ29uc3RpdHVlbnRJbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2NvbnN0aXR1ZW50LmludGVyZmFjZSc7XG5pbXBvcnQgeyBQcm9kdWN0Q29uc3RhbnRzIH0gZnJvbSAnLi4vY29uc3RhbnRzL3Byb2R1Y3QuY29uc3RhbnQnO1xuaW1wb3J0IHsgUHJvZHVjdENoYXJhY3RlcmlzdGljRW51bSB9IGZyb20gJy4uL2NvbnN0YW50cy9wcm9kdWN0LWNoYXJhY3RlcmlzdGljLmVudW0nO1xuaW1wb3J0IHsgUHJvZHVjdFByaWNlVHlwZUVudW0gfSBmcm9tICcuLi9jb25zdGFudHMvcHJvZHVjdC1wcmljZS10eXBlLmVudW0nO1xuaW1wb3J0IHsgRmliZXJQcm9kdWN0cyB9IGZyb20gJy4uL2NvbnN0YW50cy9maWJlci1wcm9kdWN0cy5jb25zdGFudHMnO1xuXG5leHBvcnQgY2xhc3MgT21hcGlQcm9kdWN0IHtcbiAgcHJvZHVjdElkPzogc3RyaW5nO1xuICBpc1l1cFByb2R1Y3Q/OiBib29sZWFuO1xuICBzYWxlc09mZmVyaW5nSWQ/OiBzdHJpbmc7XG4gIGV4dGVybmFsUHJvZHVjdENvZGU/OiBzdHJpbmc7XG4gIHByb2R1Y3RUeXBlPzogc3RyaW5nO1xuICBjYXRlZ29yaWVzPzogc3RyaW5nW107XG4gIGludGVybmFsQ2F0ZWdvcnk/OiBzdHJpbmc7XG4gIGN1c3RvbWVyQ2F0ZWdvcmllcz86IHN0cmluZ1tdO1xuICBzdWJDYXRlZ29yeT86IFN1YkNhdGVnb3J5SW50ZXJmYWNlO1xuICBsYWJlbEtleT86IHN0cmluZztcbiAgdmlzaWJsZT86IGJvb2xlYW47XG4gIGZhbWlseT86IHN0cmluZztcbiAgd2VpZ2h0PzogbnVtYmVyO1xuICBzZXJ2aWNlcz86IFNlcnZpY2VJbnRlcmZhY2VbXTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgYXBwczogYW55O1xuICBjaGFyYWN0ZXJpc3RpY3M/OiBDaGFyYWN0ZXJpc3RpY3NJbnRlcmZhY2UgfCB1bmtub3duO1xuICBsb2NhbGl6ZWRDb250ZW50PzogTG9jYWxpemVkQ29udGVudEludGVyZmFjZVtdO1xuICBzaG9ydERlc2NyaXB0aW9uPzogU2hvcnREZXNjcmlwdGlvbkludGVyZmFjZTtcbiAgcmF0ZXM/OiBSYXRlSW50ZXJmYWNlW107XG4gIHZpc2liaWxpdHlSdWxlcz86IFZpc2liaWxpdHlSdWxlc0ludGVyZmFjZTtcbiAgdW5saW1pdGVkPzogYm9vbGVhbjtcbiAgcHJpY2VUeXBlPzogc3RyaW5nO1xuICBzcGVjaWZpY2F0aW9ucz86IFNwZWNpZmljYXRpb25JbnRlcmZhY2VbXTtcbiAgbmFtZT86IHN0cmluZztcbiAgbWF4Q291bnQ/OiBzdHJpbmc7XG4gIGVsaWdpYmxlRm9yRGlzY291bnQ/OiBib29sZWFuO1xuICB1bmxpbWl0ZWRJbnRlcm5ldD86IGJvb2xlYW47XG4gIGxvZ28/OiBzdHJpbmc7XG4gIHVzYWdlQmFzZWRSYXRlUGxhbj86IGJvb2xlYW47XG4gIHJlcXVpcmVzSW5zdGFsbGF0aW9uPzogYm9vbGVhbjtcbiAgdXNhZ2VMaW1pdHM/OiBVc2FnZUxpbWl0c0ludGVyZmFjZTtcbiAgdXNhZ2Vub3RpZmljYXRpb25zPzogVXNhZ2VOb3RpZmljYXRpb25zSW50ZXJmYWNlO1xuICBwcm9kdWN0Q29uc3RpdHVlbnRzPzogUmF3T21hcGlDb25zdGl0dWVudEludGVyZmFjZVtdO1xuICBjaGFycz86IENoYXJzSW50ZXJmYWNlW107XG4gIGltYWdlVXJsPzogc3RyaW5nO1xuICBicmFuZD86IHN0cmluZztcbiAgZXh0cmFBdEhvbWVEZWxpdmVyeT86IGJvb2xlYW47XG4gIGlzUHJlT3JkZXI/OiBib29sZWFuO1xuICBpc0JhY2tPcmRlcj86IGJvb2xlYW47XG4gIHByZU9yZGVyRGVzY3JpcHRpb25MYWJlbD86IHN0cmluZztcbiAgYmFja09yZGVyRGVzY3JpcHRpb25MYWJlbD86IHN0cmluZztcbiAgaXNFeHRlcm5hbENvbnRlbnRQYWNrPzogc3RyaW5nO1xuICBpc0VsaWdpYmxlRm9yQXV0b1BhdXNlPzogYm9vbGVhbjtcbiAgaXNFbGlnaWJsZUZvclBhdXNlUHJvZmlsZT86IGJvb2xlYW47XG4gIGlzRWxpZ2libGVGb3JTZXR0aW5nbGltaXRzPzogYm9vbGVhbjtcbiAgaXNGUEJQcm9kdWN0PzogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNldEludGVybmFsQ2F0ZWdvcnkoKTtcbiAgfVxuXG4gIHByaWNlSW5jbFZhdCgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiAodGhpcy5jaGFyYWN0ZXJpc3RpY3MgYXMgQ2hhcmFjdGVyaXN0aWNzSW50ZXJmYWNlKT8ucHJpY2VJbmNsVmF0O1xuICB9XG5cbiAgcHJpY2UoZXhjbFZBVDogYm9vbGVhbik6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIGV4Y2xWQVRcbiAgICAgID8gKHRoaXMuY2hhcmFjdGVyaXN0aWNzIGFzIENoYXJhY3RlcmlzdGljc0ludGVyZmFjZSk/LnByaWNlRXhjbFZhdFxuICAgICAgOiAodGhpcy5jaGFyYWN0ZXJpc3RpY3MgYXMgQ2hhcmFjdGVyaXN0aWNzSW50ZXJmYWNlKT8ucHJpY2VJbmNsVmF0O1xuICB9XG5cbiAgZ2V0TG9jYWxpemVkQ29udGVudE5hbWVzKCk6IExvY2FsaXplZENvbnRlbnROYW1lc0ludGVyZmFjZSB7XG4gICAgY29uc3QgbG9jYWxpemVkQ29udGVudE5hbWVzID0ge30gYXMgTG9jYWxpemVkQ29udGVudE5hbWVzSW50ZXJmYWNlO1xuXG4gICAgaWYgKCFpc0VtcHR5KHRoaXMubG9jYWxpemVkQ29udGVudCkpIHtcbiAgICAgIHRoaXMubG9jYWxpemVkQ29udGVudD8uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBsb2NhbGl6ZWRDb250ZW50TmFtZXNbaXRlbS5sb2NhbGUgYXMga2V5b2YgTG9jYWxpemVkQ29udGVudE5hbWVzSW50ZXJmYWNlXSA9IGl0ZW0ubmFtZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbG9jYWxpemVkQ29udGVudE5hbWVzO1xuICB9XG5cbiAgaGFzQ2F0ZWdvcnkoc2VhcmNoQ2F0ZWdvcnk6IHN0cmluZyk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiAoXG4gICAgICAhaXNFbXB0eSh0aGlzLmNhdGVnb3JpZXMpICYmXG4gICAgICB0aGlzLmNhdGVnb3JpZXM/LnNvbWUoKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgIHJldHVybiBjYXRlZ29yeS50b1VwcGVyQ2FzZSgpID09PSBzZWFyY2hDYXRlZ29yeS50b1VwcGVyQ2FzZSgpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgc2V0SW50ZXJuYWxDYXRlZ29yeSgpIHtcbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgIGNhc2UgdGhpcy5oYXNDYXRlZ29yeShQcm9kdWN0Q29uc3RhbnRzLk9NQVBJX0NBVEVHT1JZX1BSRV9QQUlEX01PQklMRSk6XG4gICAgICAgIHRoaXMuaW50ZXJuYWxDYXRlZ29yeSA9IFByb2R1Y3RDb25zdGFudHMuT01BUElfQ0FURUdPUllfUFJFX1BBSURfTU9CSUxFO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdGhpcy5oYXNDYXRlZ29yeShQcm9kdWN0Q29uc3RhbnRzLk9NQVBJX0NBVEVHT1JZX0JBU0VfUFJPKTpcbiAgICAgIGNhc2UgdGhpcy5oYXNDYXRlZ29yeShQcm9kdWN0Q29uc3RhbnRzLk9NQVBJX0NBVEVHT1JZX0JBU0VfUFJPX1ZPSUNFKTpcbiAgICAgIGNhc2UgdGhpcy5oYXNDYXRlZ29yeShQcm9kdWN0Q29uc3RhbnRzLk9NQVBJX0NBVEVHT1JZX1BPU1RfUEFJRF9NT0JJTEUpOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5pbnRlcm5hbENhdGVnb3J5ID0gUHJvZHVjdENvbnN0YW50cy5PTUFQSV9DQVRFR09SWV9QT1NUX1BBSURfTU9CSUxFO1xuICAgIH1cbiAgfVxuXG4gIGhhc1NwZWNpZmljYXRpb25zKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhaXNFbXB0eSh0aGlzLnNwZWNpZmljYXRpb25zKTtcbiAgfVxuXG4gIHVwZGF0ZVJhdGVzKCk6IHZvaWQge1xuICAgIHRoaXMucmF0ZXM/LmZvckVhY2goKHJhdGUpID0+IHtcbiAgICAgIHJhdGUudHlwZSA9IHRoaXMuZm9ybWF0UmF0ZVR5cGUocmF0ZS50eXBlKTtcbiAgICAgIHJhdGUuaXNUeXBlRGF0YSA9IGluY2x1ZGVzKFByb2R1Y3RDb25zdGFudHMuREFUQSwgcmF0ZS50eXBlKTtcbiAgICAgIHJhdGUuaXNUeXBlVm9pY2UgPSBpbmNsdWRlcyhQcm9kdWN0Q29uc3RhbnRzLlZPSUNFLCByYXRlLnR5cGUpO1xuICAgIH0pO1xuICB9XG5cbiAgaXNTaG93UmF0ZXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHNvbWUoUHJvZHVjdENvbnN0YW50cy5FUENfTElTVF9UT19TSE9XX1JBVEUsIChzZWFyY2hDYXRlZ29yeU5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFzQ2F0ZWdvcnkoc2VhcmNoQ2F0ZWdvcnlOYW1lKSB8fCB0aGlzLmV4dGVybmFsUHJvZHVjdENvZGUgPT09IHNlYXJjaENhdGVnb3J5TmFtZTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFNvcnRlZFNwZWNpZmljYXRpb25zKCk6IFNwZWNpZmljYXRpb25JbnRlcmZhY2VbXSB7XG4gICAgY29uc3Qgc3BlY2lmaWNhdGlvbnM6IFNwZWNpZmljYXRpb25JbnRlcmZhY2VbXSA9IFtdO1xuICAgIGVhY2godGhpcy5zZXJ2aWNlcywgKHNlcnZpY2U6IFNlcnZpY2VJbnRlcmZhY2UpID0+IHtcbiAgICAgIGVhY2goc2VydmljZS5zcGVjaWZpY2F0aW9ucywgKHNwZWNpZmljYXRpb246IFNwZWNpZmljYXRpb25JbnRlcmZhY2UpID0+IHtcbiAgICAgICAgbGV0IHVwZGF0ZWRTcGVjaWZpY2F0aW9uID0gT2JqZWN0LmFzc2lnbih7fSwgc3BlY2lmaWNhdGlvbik7XG4gICAgICAgIHVwZGF0ZWRTcGVjaWZpY2F0aW9uLnNlcnZpY2VUeXBlID0gc2VydmljZS5zZXJ2aWNlVHlwZTtcbiAgICAgICAgdXBkYXRlZFNwZWNpZmljYXRpb24uaWQgPSB0aGlzLnByb2R1Y3RJZDtcbiAgICAgICAgdXBkYXRlZFNwZWNpZmljYXRpb24gPSB0aGlzLnNldFNwZWNpZmljYXRpb25zKHVwZGF0ZWRTcGVjaWZpY2F0aW9uKTtcbiAgICAgICAgc3BlY2lmaWNhdGlvbnMucHVzaCh1cGRhdGVkU3BlY2lmaWNhdGlvbik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5nZXRTb3J0ZWRMaXN0QnlXZWlnaHQoc3BlY2lmaWNhdGlvbnMpO1xuICB9XG5cbiAgdXBkYXRlU3BlY2lmaWNhdGlvbnMoKTogdm9pZCB7XG4gICAgdGhpcy5zcGVjaWZpY2F0aW9ucz8uZm9yRWFjaCgoc3BlY2lmaWNhdGlvbikgPT4ge1xuICAgICAgaWYgKHNwZWNpZmljYXRpb24uaWQgPT09IHRoaXMucHJvZHVjdElkKSB7XG4gICAgICAgIHRoaXMuc2V0U3BlY2lmaWNhdGlvbnMoc3BlY2lmaWNhdGlvbik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RXNpbUNoYXJhY3RlcmlzdGljVmFsdWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2hhcmFjdGVyaXN0aWMoT21hcGlDaGFyYWN0ZXJpc3RpY0VudW0uRVNJTV9BVkFJTEFCTEUpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgZ2V0Q2hhcmFjdGVyaXN0aWMoa2V5OiBzdHJpbmcpOiBhbnkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgICBpZiAoaXNPYmplY3QodGhpcy5jaGFyYWN0ZXJpc3RpY3MpICYmIHRoaXMuY2hhcmFjdGVyaXN0aWNzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybiAodGhpcy5jaGFyYWN0ZXJpc3RpY3MgYXMgQ2hhcmFjdGVyaXN0aWNzSW50ZXJmYWNlKT8uW2tleSBhcyBrZXlvZiBDaGFyYWN0ZXJpc3RpY3NJbnRlcmZhY2VdO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldE1heE1vYmlsZUxpbmVzKCk6IHN0cmluZyB7XG4gICAgbGV0IG1heE1vYmlsZUxpbmVzID0gdGhpcy5nZXRDaGFyYWN0ZXJpc3RpYyhQcm9kdWN0Q2hhcmFjdGVyaXN0aWNFbnVtLk1BWF9NT0JJTEVfTElORVMpO1xuXG4gICAgaWYgKCFtYXhNb2JpbGVMaW5lcykge1xuICAgICAgY29uc3QgbWF4TGluZXNTcGVjaWZpY2F0aW9uID0gdGhpcy5nZXRTZXJ2aWNlU3BlY2lmaWNhdGlvbkJ5TGFiZWxLZXkoXG4gICAgICAgIE9tYXBpU2VydmljZVNwZWNpZmljYXRpb25MYWJlbEtleS5TUEVDX0JVTkRMRV9NQVhfTU9CSUxFX0xJTkVTLFxuICAgICAgICBPbWFwaVNlcnZpY2VUeXBlLkdFTkVSQUxcbiAgICAgICk7XG4gICAgICBtYXhNb2JpbGVMaW5lcyA9IG1heExpbmVzU3BlY2lmaWNhdGlvbj8udmFsdWUgfHwgbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIG1heE1vYmlsZUxpbmVzO1xuICB9XG5cbiAgZ2V0U2hhcmVkTW9iaWxlRGF0YSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IHNoYXJlZE1vYmlsZURhdGEgPSB0aGlzLmdldENoYXJhY3RlcmlzdGljKFByb2R1Y3RDaGFyYWN0ZXJpc3RpY0VudW0uU0hBUkVEX01PQklMRV9EQVRBKTtcbiAgICByZXR1cm4gc2hhcmVkTW9iaWxlRGF0YSAmJiBzaGFyZWRNb2JpbGVEYXRhLnZhbHVlO1xuICB9XG5cbiAgaGFzVW5saW1pdGVkQ2FsbGluZygpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5zZXJ2aWNlcyAmJlxuICAgICAgdGhpcy5zZXJ2aWNlcy5zb21lKChzZXJ2aWNlKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgc2VydmljZS5zZXJ2aWNlVHlwZS50b1VwcGVyQ2FzZSgpID09PSBQcm9kdWN0Q29uc3RhbnRzLk1PQklMRV9DQUxMSU5HICYmXG4gICAgICAgICAgc2VydmljZS5zcGVjaWZpY2F0aW9ucz8uc29tZSgoc3BlY2lmaWNhdGlvbikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgc3BlY2lmaWNhdGlvbi51bml0ICYmXG4gICAgICAgICAgICAgIHNwZWNpZmljYXRpb24udW5pdC50b1VwcGVyQ2FzZSgpID09PSBQcm9kdWN0Q29uc3RhbnRzLk1JTlVURVMgJiZcbiAgICAgICAgICAgICAgc3BlY2lmaWNhdGlvbi52YWx1ZSAmJlxuICAgICAgICAgICAgICBzcGVjaWZpY2F0aW9uLnZhbHVlLnRvVXBwZXJDYXNlKCkgPT09IFByb2R1Y3RDb25zdGFudHMuVU5MSU1JVEVEXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBoYXNVbmxpbWl0ZWRNb2JpbGVJbnRlcm5ldCgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb25zdGl0dWVudChQcm9kdWN0Q29uc3RhbnRzLk1PQklMRV9MSU5FKVxuICAgICAgPy5wcm9kdWN0SW5mbz8uc2VydmljZXM/LmZpbmQoKHNlcnZpY2UpID0+IHNlcnZpY2U/LnNlcnZpY2VUeXBlID09PSBQcm9kdWN0Q29uc3RhbnRzLk1PQklMRV9JTlRFUk5FVClcbiAgICAgID8uc3BlY2lmaWNhdGlvbnM/LnNvbWUoKHMpID0+IHMudmFsdWUgPT09IFByb2R1Y3RDb25zdGFudHMuRlVQKTtcbiAgfVxuXG4gIGhhc1VubGltaXRlZEZpeGVkSW50ZXJuZXQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICh0aGlzLmNoYXJhY3RlcmlzdGljcyBhcyBDaGFyYWN0ZXJpc3RpY3NJbnRlcmZhY2UpPy5zZXJ2aWNlQ2F0ZWdvcnkgPT09IFByb2R1Y3RDb25zdGFudHMuRlVQO1xuICB9XG5cbiAgaGFzVW5saW1pdGVkSW50ZXJuZXRCYXNlZE9uTGFiZWxLZXkoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuc2VydmljZXNcbiAgICAgID8uZmluZCgocykgPT4gcz8uc2VydmljZVR5cGUgPT09IFByb2R1Y3RDb25zdGFudHMuTU9CSUxFX0lOVEVSTkVUKVxuICAgICAgPy5zcGVjaWZpY2F0aW9ucz8uc29tZShcbiAgICAgICAgKHMpID0+IHMubGFiZWxLZXkgPT09IE9tYXBpU2VydmljZVNwZWNpZmljYXRpb25MYWJlbEtleS5NT0JJTEVfSU5URVJORVRfVU5MSU1JVEVEX1NIQVJFRF9TUEVDXG4gICAgICApO1xuICB9XG5cbiAgaXNXaWdvKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzRm1jKCkgJiYgdGhpcy5nZXRQcm9kdWN0U3ViR3JvdXAoKSA9PT0gJyc7XG4gIH1cblxuICBpc0ZtYygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5nZXRQcm9kdWN0R3JvdXAoKSA9PT0gT21hcGlQcm9kdWN0R3JvdXBFbnVtLkZNQztcbiAgfVxuXG4gIGhhc1NlcnZpY2VUeXBlKHNlcnZpY2VUeXBlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gc29tZSh0aGlzLnNlcnZpY2VzLCAoc2VydmljZSkgPT4ge1xuICAgICAgcmV0dXJuIHNlcnZpY2Uuc2VydmljZVR5cGUudG9VcHBlckNhc2UoKSA9PT0gc2VydmljZVR5cGU7XG4gICAgfSk7XG4gIH1cblxuICBpc0J1bmRsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0VHlwZSA9PT0gJ0JVTkRMRSc7XG4gIH1cblxuICBpc0ZpYmVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuZXh0ZXJuYWxQcm9kdWN0Q29kZSAmJiBGaWJlclByb2R1Y3RzLmluY2x1ZGVzKHRoaXMuZXh0ZXJuYWxQcm9kdWN0Q29kZSk7XG4gIH1cblxuICBnZXRMb2dvVXJsID0gKCk6IHN0cmluZyA9PiB7XG4gICAgaWYgKHRoaXMubG9nbykge1xuICAgICAgcmV0dXJuIHRoaXMubG9nbztcbiAgICB9IGVsc2UgaWYgKHRoaXMubGFiZWxLZXkpIHtcbiAgICAgIGNvbnN0IGtleSA9IHRoaXMubm9ybWFsaXplS2V5KHRoaXMubGFiZWxLZXkpO1xuICAgICAgcmV0dXJuICcvY29udGVudC9kYW0vd3d3LXRlbGVuZXQtYmUvaW1nL3NlbGYtc2VydmljZS9wcm9kdWN0cy8nICsga2V5ICsgJy5wbmcnO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH07XG5cbiAgbm9ybWFsaXplS2V5ID0gKGtleTogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICBpZiAoa2V5KSB7XG4gICAgICByZXR1cm4ga2V5XG4gICAgICAgIC5yZXBsYWNlKC8gL2csICctJylcbiAgICAgICAgLnJlcGxhY2UoL1xcLi9nLCAnLScpXG4gICAgICAgIC5yZXBsYWNlKC9bXjAtOWEtekEtWl8tXS9nLCAnJylcbiAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfTtcblxuICBwdWJsaWMgZ2V0UHJvZHVjdExldmVsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2hhcmFjdGVyaXN0aWMoT21hcGlDaGFyYWN0ZXJpc3RpY0VudW0uUFJPRFVDVF9MRVZFTCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UHJvZHVjdFRpZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDaGFyYWN0ZXJpc3RpYyhPbWFwaUNoYXJhY3RlcmlzdGljRW51bS5QUk9EVUNUX1RJRVIpO1xuICB9XG5cbiAgcHVibGljIGdldENvbnN0aXR1ZW50cygpOiBDb25zdGl0dWVudEludGVyZmFjZVtdIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDaGFyYWN0ZXJpc3RpYyhPbWFwaUNoYXJhY3RlcmlzdGljRW51bS5DT05TVElUVUVOVFMpIHx8IFtdO1xuICB9XG5cbiAgZ2V0Q29uc3RpdHVlbnQodHlwZTogc3RyaW5nKTogQ29uc3RpdHVlbnRJbnRlcmZhY2UgfCB1bmRlZmluZWQge1xuICAgIGlmICh0aGlzLmdldENvbnN0aXR1ZW50cygpKSB7XG4gICAgICBjb25zdCBbY29uc3RpdHVlbnRdID0gdGhpcy5nZXRDb25zdGl0dWVudHMoKS5maWx0ZXIoXG4gICAgICAgIChyZXN1bHQ6IENvbnN0aXR1ZW50SW50ZXJmYWNlKSA9PiByZXN1bHQudHlwZSA9PT0gdGhpcy5ub3JtYWxpemVLZXkodHlwZSlcbiAgICAgICk7XG4gICAgICByZXR1cm4gY29uc3RpdHVlbnQ7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXRTZXJ2aWNlU3BlY2lmaWNhdGlvbkJ5TGFiZWxLZXkobGFiZWxLZXk6IHN0cmluZywgc2VydmljZVR5cGU/OiBzdHJpbmcpOiBTcGVjaWZpY2F0aW9uSW50ZXJmYWNlIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5zZXJ2aWNlcykge1xuICAgICAgY29uc3Qgc2VydmljZSA9IHNlcnZpY2VUeXBlXG4gICAgICAgID8gdGhpcy5zZXJ2aWNlcy5maW5kKChzcGVjU2VydmljZSkgPT4gc3BlY1NlcnZpY2Uuc2VydmljZVR5cGUgPT09IHNlcnZpY2VUeXBlKVxuICAgICAgICA6IHRoaXMuc2VydmljZXNbMF07XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIHNlcnZpY2UgJiZcbiAgICAgICAgc2VydmljZS5zcGVjaWZpY2F0aW9ucyAmJlxuICAgICAgICBzZXJ2aWNlLnNwZWNpZmljYXRpb25zLmZpbmQoKHNwZWNpZmljYXRpb246IFNwZWNpZmljYXRpb25JbnRlcmZhY2UpID0+IHtcbiAgICAgICAgICByZXR1cm4gc3BlY2lmaWNhdGlvbi5sYWJlbEtleSA9PT0gdGhpcy5ub3JtYWxpemVLZXkobGFiZWxLZXkpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldEJpbGxpbmdDeWNsZSgpOiBzdHJpbmcge1xuICAgIHN3aXRjaCAodGhpcy5wcmljZVR5cGUpIHtcbiAgICAgIGNhc2UgUHJvZHVjdFByaWNlVHlwZUVudW0uT01BUElfTk9OX1JFQ1VSUkVOVF9DSEFSR0U6XG4gICAgICAgIHJldHVybiBQcm9kdWN0UHJpY2VUeXBlRW51bS5PTkVfVElNRTtcbiAgICAgIGNhc2UgUHJvZHVjdFByaWNlVHlwZUVudW0uT01BUElfUkVDVVJSRU5UX0NIQVJHRTpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBQcm9kdWN0UHJpY2VUeXBlRW51bS5SRUNVUlJFTlQ7XG4gICAgfVxuICB9XG5cbiAgaXNXaG9wKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnByb2R1Y3RJZCA9PT0gT21hcGlMZWdhY3lQcm9kdWN0cy5XSE9QO1xuICB9XG5cbiAgaXNXaG9wcGEoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucHJvZHVjdElkID09PSBPbWFwaUxlZ2FjeVByb2R1Y3RzLldIT1BQQTtcbiAgfVxuXG4gIGlzQ29ubmVjdDUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UHJvZHVjdFN1Ykdyb3VwKCkgPT09IE9tYXBpUHJvZHVjdFN1Ykdyb3VwRW51bS5DT05ORUNUNTtcbiAgfVxuXG4gIGlzQ29ubmVjdDVTb2hvKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmdldFByb2R1Y3RTdWJHcm91cCgpID09PSBPbWFwaVByb2R1Y3RTdWJHcm91cEVudW0uQ09OTkVDVDVfU09ITyB8fFxuICAgICAgdGhpcy5nZXRQcm9kdWN0U3ViR3JvdXAoKSA9PT0gT21hcGlQcm9kdWN0U3ViR3JvdXBFbnVtLktMSUtcbiAgICApO1xuICB9XG5cbiAgaXNIaWdoVGllcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDaGFyYWN0ZXJpc3RpYygncHJvZHVjdFRpZXInKSA9PT0gT21hcGlQcm9kdWN0VGllckVudW0uSElHSDtcbiAgfVxuXG4gIGdldEdyb3VwTmFtZUxhYmVsKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgY29uc3QgeyBwcm9kdWN0R3JvdXAsIHByb2R1Y3RTdWJHcm91cCwgcHJvZHVjdFRpZXIsIHByb2R1Y3RTZWdtZW50IH0gPSB0aGlzXG4gICAgICAuY2hhcmFjdGVyaXN0aWNzIGFzIENoYXJhY3RlcmlzdGljc0ludGVyZmFjZTtcbiAgICBpZiAocHJvZHVjdEdyb3VwICYmIHByb2R1Y3RUaWVyICYmIHByb2R1Y3RTZWdtZW50KSB7XG4gICAgICByZXR1cm4gW3Byb2R1Y3RHcm91cCwgcHJvZHVjdFN1Ykdyb3VwLCBwcm9kdWN0VGllciwgcHJvZHVjdFNlZ21lbnRdXG4gICAgICAgIC5maWx0ZXIoKHByb2R1Y3ROYW1lKSA9PiBwcm9kdWN0TmFtZSAhPT0gJycpXG4gICAgICAgIC5tYXAoKHByb2R1Y3ROYW1lKSA9PiBwcm9kdWN0TmFtZT8udG9Mb3dlckNhc2UoKSlcbiAgICAgICAgLm1hcCgocHJvZHVjdE5hbWUpID0+IHByb2R1Y3ROYW1lPy5yZXBsYWNlKC9cXHMrL2csICcnKS50cmltKCkpXG4gICAgICAgIC5qb2luKCctJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc2VydmljZXM/Lm1hcCgoc2VydmljZSkgPT4gc2VydmljZT8uc2VydmljZVR5cGU/LnRvTG93ZXJDYXNlKCkpLmpvaW4oJy0nKTtcbiAgfVxuXG4gIGdldFVuaXFPdXRPZkJ1bmRsZXNMaW1pdHMoKTogc3RyaW5nW10ge1xuICAgIGxldCBsaW1pdHM6IHN0cmluZ1tdID0gW107XG4gICAgaWYgKHRoaXMudXNhZ2VMaW1pdHMpIHtcbiAgICAgIGVhY2godGhpcy51c2FnZUxpbWl0cy5vdXRPZkJ1bmRsZS5saW1pdHMsIChsaW1pdCkgPT4ge1xuICAgICAgICBsaW1pdHMgPSBbLi4ubGltaXRzLCAuLi5saW1pdC52YWx1ZXNdO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaXEobGltaXRzKTtcbiAgfVxuXG4gIGhhc0NoYXJLZXkoa2V5PzogQ2hhcnNFbnVtKTogYm9vbGVhbiB7XG4gICAgY29uc3QgY2hhclZhbHVlID0gdGhpcy5mZXRjaENoYXJLZXkoa2V5KTtcbiAgICByZXR1cm4gQm9vbGVhbihjaGFyVmFsdWUpO1xuICB9XG5cbiAgZ2V0Q2hhclZhbHVlKGtleTogQ2hhcnNFbnVtIHwgbnVsbCk6IHN0cmluZ1tdIHtcbiAgICBpZiAoIWtleSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBjb25zdCBjaGFyVmFsdWUgPSB0aGlzLmZldGNoQ2hhcktleShrZXkpO1xuICAgIHJldHVybiAoY2hhclZhbHVlICYmIGNoYXJWYWx1ZS52YWx1ZXMpIHx8IFtdO1xuICB9XG5cbiAgZ2V0Q2hhclVuaXQoa2V5OiBDaGFyc0VudW0pOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IGNoYXJWYWx1ZSA9IHRoaXMuZmV0Y2hDaGFyS2V5KGtleSk7XG4gICAgcmV0dXJuIGNoYXJWYWx1ZSAmJiBjaGFyVmFsdWUudW5pdDtcbiAgfVxuXG4gIGZldGNoQ2hhcktleShrZXk/OiBDaGFyc0VudW0pOiBDaGFyc0ludGVyZmFjZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuY2hhcnMgJiYgdGhpcy5jaGFycy5maW5kKChjaGFyKSA9PiBjaGFyLmtleSA9PT0ga2V5KTtcbiAgfVxuXG4gIGdldEludGVybmV0VXNhZ2VOb3RpZmljYXRpb25UaHJlc2hvbGRzKCk6IHVua25vd24ge1xuICAgIHJldHVybiB0aGlzLnVzYWdlbm90aWZpY2F0aW9ucz8uaW50ZXJuZXQ7XG4gIH1cblxuICBwcml2YXRlIGdldFByb2R1Y3RHcm91cCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmdldENoYXJhY3RlcmlzdGljKE9tYXBpQ2hhcmFjdGVyaXN0aWNFbnVtLlBST0RVQ1RfR1JPVVApO1xuICB9XG5cbiAgZ2V0UHJvZHVjdFN1Ykdyb3VwKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2hhcmFjdGVyaXN0aWMoT21hcGlDaGFyYWN0ZXJpc3RpY0VudW0uUFJPRFVDVF9TVUJfR1JPVVApO1xuICB9XG5cbiAgaXNTdHJlYW1pbmdTZXJ2aWNlQ29udGFpbmVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnByb2R1Y3RJZCA9PT0gT21hcGlEYXJ3aW5Qcm9kdWN0cy5TVFJFQU1JTkdfU0VSVklDRV9DT05UQUlORVI7XG4gIH1cblxuICBpc05ldGZsaXhQcmVtaXVtQWRkb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucHJvZHVjdElkID09PSBPbWFwaURhcndpblByb2R1Y3RzLk5FVEZMSVhfUFJFTUlVTV9BRERPTjtcbiAgfVxuXG4gIGlzQU5ldGZsaXhQcm9kdWN0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBPbWFwaVN1YkNhdGVnb3J5RW51bS5ORVRGTElYID09PSB0aGlzLnN1YkNhdGVnb3J5Py5uYW1lO1xuICB9XG5cbiAgaXNOZXRmbGl4U3RhbmRhcmQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucHJvZHVjdElkID09PSBPbWFwaURhcndpblByb2R1Y3RzLk5FVEZMSVhfU1RBTkRBUkQ7XG4gIH1cblxuICBpc0RhcndpblByb2R1Y3QoKSB7XG4gICAgY29uc3QgU1RBUlRTX1dJVEhfTlVNQkVSID0gL15cXGQvO1xuICAgIHJldHVybiAodGhpcy5wcm9kdWN0SWQgJiYgIXRoaXMucHJvZHVjdElkLm1hdGNoKFNUQVJUU19XSVRIX05VTUJFUikpIHx8IGZhbHNlO1xuICB9XG5cbiAgaXNFU2ltKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnByb2R1Y3RUeXBlID09PSBPbWFwaVByb2R1Y3RUeXBlLkVfU0lNO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTb3J0ZWRMaXN0QnlXZWlnaHQobGlzdDogU3BlY2lmaWNhdGlvbkludGVyZmFjZVtdKTogU3BlY2lmaWNhdGlvbkludGVyZmFjZVtdIHtcbiAgICByZXR1cm4gc29ydEJ5KGxpc3QsIFByb2R1Y3RDb25zdGFudHMuV0VJR0hUKTtcbiAgfVxuXG4gIHByaXZhdGUgZm9ybWF0UmF0ZVR5cGUodHlwZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHR5cGUgJiYgdHlwZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyAvZywgJy0nKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0U3BlY2lmaWNhdGlvbnMoc3BlY2lmaWNhdGlvbjogU3BlY2lmaWNhdGlvbkludGVyZmFjZSk6IFNwZWNpZmljYXRpb25JbnRlcmZhY2Uge1xuICAgIHNwZWNpZmljYXRpb24uc2hvd1VuaXQgPSBmYWxzZTtcbiAgICBzcGVjaWZpY2F0aW9uLmlzVmFsdWUgPSBmYWxzZTtcbiAgICBzcGVjaWZpY2F0aW9uLmlzTW9uZXRhcnkgPSBmYWxzZTtcbiAgICBzcGVjaWZpY2F0aW9uLmlzUmFuZ2UgPSBmYWxzZTtcbiAgICBzcGVjaWZpY2F0aW9uLmlzQXN0ZXJpc2sgPSBmYWxzZTtcblxuICAgIGlmIChzcGVjaWZpY2F0aW9uLnVuaXQgJiYgc3BlY2lmaWNhdGlvbi51bml0LnRvVXBwZXJDYXNlKCkgPT09IFByb2R1Y3RDb25zdGFudHMuTUlOVVRFUykge1xuICAgICAgc3BlY2lmaWNhdGlvbi51bml0ID0gUHJvZHVjdENvbnN0YW50cy5NSU47XG4gICAgfVxuXG4gICAgc3dpdGNoIChzcGVjaWZpY2F0aW9uLnNlcnZpY2VUeXBlKSB7XG4gICAgICBjYXNlIFByb2R1Y3RDb25zdGFudHMuTU9CSUxFX0NBTExJTkc6XG4gICAgICAgIHJldHVybiB0aGlzLnNldFNwZWNpZmljYXRpb25zRm9yTW9iaWxlQ2FsbGluZyhzcGVjaWZpY2F0aW9uKTtcbiAgICAgIGNhc2UgUHJvZHVjdENvbnN0YW50cy5NT0JJTEVfSU5URVJORVQ6XG4gICAgICAgIHJldHVybiB0aGlzLnNldFNwZWNpZmljYXRpb25zRm9yTW9iaWxlSW50ZXJuZXQoc3BlY2lmaWNhdGlvbik7XG4gICAgICBjYXNlIFByb2R1Y3RDb25zdGFudHMuTU9CSUxFX01PTkVUQVJZOlxuICAgICAgICByZXR1cm4gdGhpcy5zZXRTcGVjaWZpY2F0aW9uc0Zvck1vYmlsZU1vbmV0YXJ5KHNwZWNpZmljYXRpb24pO1xuICAgICAgY2FzZSBQcm9kdWN0Q29uc3RhbnRzLkZJWEVEX0NBTExJTkc6XG4gICAgICBjYXNlIFByb2R1Y3RDb25zdGFudHMuVFY6XG4gICAgICBjYXNlIFByb2R1Y3RDb25zdGFudHMuRFRWOlxuICAgICAgICByZXR1cm4gdGhpcy5zZXRTcGVjaWZpY2F0aW9uc0ZvckZpeGVkVm9pY2VBbmRUdihzcGVjaWZpY2F0aW9uKTtcbiAgICAgIGNhc2UgUHJvZHVjdENvbnN0YW50cy5JTlRFUk5FVDpcbiAgICAgIGNhc2UgUHJvZHVjdENvbnN0YW50cy5GSVhFRF9JTlRFUk5FVDpcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3BlY2lmaWNhdGlvbnNGb3JJbnRlcm5ldChzcGVjaWZpY2F0aW9uKTtcbiAgICAgIGNhc2UgUHJvZHVjdENvbnN0YW50cy5HRU5FUkFMOlxuICAgICAgY2FzZSBQcm9kdWN0Q29uc3RhbnRzLkZFQVRVUkU6XG4gICAgICAgIHJldHVybiBzcGVjaWZpY2F0aW9uO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29uc29sZS5lcnJvcihgU3BlY2lmaWNhdGlvbiBub3QgaW1wbGVtZW50ZWQ6ICR7c3BlY2lmaWNhdGlvbj8uc2VydmljZVR5cGV9YCk7XG4gICAgICAgIHJldHVybiBzcGVjaWZpY2F0aW9uO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0U3BlY2lmaWNhdGlvbnNGb3JNb2JpbGVDYWxsaW5nKHNwZWNpZmljYXRpb246IFNwZWNpZmljYXRpb25JbnRlcmZhY2UpOiBTcGVjaWZpY2F0aW9uSW50ZXJmYWNlIHtcbiAgICBzcGVjaWZpY2F0aW9uLnNob3dVbml0ID0gdHJ1ZTtcbiAgICBzcGVjaWZpY2F0aW9uLmlzVmFsdWUgPSB0cnVlO1xuICAgIGlmIChzcGVjaWZpY2F0aW9uLnZhbHVlICYmIHNwZWNpZmljYXRpb24udmFsdWUudG9VcHBlckNhc2UoKSA9PT0gUHJvZHVjdENvbnN0YW50cy5VTkxJTUlURUQpIHtcbiAgICAgIHNwZWNpZmljYXRpb24uaXNBc3RlcmlzayA9IHRydWU7XG4gICAgICBzcGVjaWZpY2F0aW9uLnNob3dVbml0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHNwZWNpZmljYXRpb24ubWluVmFsdWUgJiYgc3BlY2lmaWNhdGlvbi5tYXhWYWx1ZSkge1xuICAgICAgc3BlY2lmaWNhdGlvbi5pc1ZhbHVlID0gZmFsc2U7XG4gICAgICBzcGVjaWZpY2F0aW9uLmlzQXN0ZXJpc2sgPSBmYWxzZTtcbiAgICAgIHNwZWNpZmljYXRpb24uaXNSYW5nZSA9IHRydWU7XG4gICAgICBzcGVjaWZpY2F0aW9uLnNob3dVbml0ID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHNwZWNpZmljYXRpb247XG4gIH1cblxuICBwcml2YXRlIHNldFNwZWNpZmljYXRpb25zRm9yTW9iaWxlSW50ZXJuZXQoc3BlY2lmaWNhdGlvbjogU3BlY2lmaWNhdGlvbkludGVyZmFjZSk6IFNwZWNpZmljYXRpb25JbnRlcmZhY2Uge1xuICAgIHNwZWNpZmljYXRpb24uc2hvd1VuaXQgPSB0cnVlO1xuICAgIHNwZWNpZmljYXRpb24uaXNWYWx1ZSA9IHRydWU7XG5cbiAgICBpZiAoc3BlY2lmaWNhdGlvbi52YWx1ZSAmJiBzcGVjaWZpY2F0aW9uLnZhbHVlLnRvVXBwZXJDYXNlKCkuaW5kZXhPZihQcm9kdWN0Q29uc3RhbnRzLlVOTElNSVRFRCkgPiAtMSkge1xuICAgICAgc3BlY2lmaWNhdGlvbi5pc0FzdGVyaXNrID0gdHJ1ZTtcbiAgICAgIHNwZWNpZmljYXRpb24uc2hvd1VuaXQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoc3BlY2lmaWNhdGlvbi5taW5WYWx1ZSAmJiBzcGVjaWZpY2F0aW9uLm1heFZhbHVlKSB7XG4gICAgICBzcGVjaWZpY2F0aW9uLmlzVmFsdWUgPSBmYWxzZTtcbiAgICAgIHNwZWNpZmljYXRpb24uc2hvd1VuaXQgPSB0cnVlO1xuICAgICAgc3BlY2lmaWNhdGlvbi5pc1JhbmdlID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHNwZWNpZmljYXRpb247XG4gIH1cblxuICBwcml2YXRlIHNldFNwZWNpZmljYXRpb25zRm9yTW9iaWxlTW9uZXRhcnkoc3BlY2lmaWNhdGlvbjogU3BlY2lmaWNhdGlvbkludGVyZmFjZSk6IFNwZWNpZmljYXRpb25JbnRlcmZhY2Uge1xuICAgIHNwZWNpZmljYXRpb24uc2hvd1VuaXQgPSBmYWxzZTtcbiAgICBzcGVjaWZpY2F0aW9uLmlzTW9uZXRhcnkgPSB0cnVlO1xuICAgIHNwZWNpZmljYXRpb24uaXNWYWx1ZSA9IGZhbHNlO1xuICAgIHJldHVybiBzcGVjaWZpY2F0aW9uO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRTcGVjaWZpY2F0aW9uc0ZvckZpeGVkVm9pY2VBbmRUdihzcGVjaWZpY2F0aW9uOiBTcGVjaWZpY2F0aW9uSW50ZXJmYWNlKTogU3BlY2lmaWNhdGlvbkludGVyZmFjZSB7XG4gICAgc3BlY2lmaWNhdGlvbi5pc1ZhbHVlID0gdHJ1ZTtcbiAgICBzcGVjaWZpY2F0aW9uLnNob3dVbml0ID0gdHJ1ZTtcbiAgICBzcGVjaWZpY2F0aW9uLmlzTW9uZXRhcnkgPSBmYWxzZTtcbiAgICByZXR1cm4gc3BlY2lmaWNhdGlvbjtcbiAgfVxuXG4gIHByaXZhdGUgc2V0U3BlY2lmaWNhdGlvbnNGb3JJbnRlcm5ldChzcGVjaWZpY2F0aW9uOiBTcGVjaWZpY2F0aW9uSW50ZXJmYWNlKTogU3BlY2lmaWNhdGlvbkludGVyZmFjZSB7XG4gICAgaWYgKHNwZWNpZmljYXRpb24udmFsdWUgJiYgc3BlY2lmaWNhdGlvbi52YWx1ZS50b1VwcGVyQ2FzZSgpID09PSBQcm9kdWN0Q29uc3RhbnRzLlVOTElNSVRFRCkge1xuICAgICAgc3BlY2lmaWNhdGlvbi5pc0FzdGVyaXNrID0gdHJ1ZTtcbiAgICAgIHNwZWNpZmljYXRpb24uc2hvd1VuaXQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3BlY2lmaWNhdGlvbi5zaG93VW5pdCA9IHRydWU7XG4gICAgfVxuICAgIHNwZWNpZmljYXRpb24uaXNWYWx1ZSA9IHRydWU7XG4gICAgc3BlY2lmaWNhdGlvbi5pc01vbmV0YXJ5ID0gZmFsc2U7XG5cbiAgICByZXR1cm4gc3BlY2lmaWNhdGlvbjtcbiAgfVxufVxuIl19