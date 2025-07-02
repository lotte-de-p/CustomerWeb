import { RateInterface } from '../interfaces/rate.interface';
import { VisibilityRulesInterface } from '../interfaces/visibilityrules.interface';
import { ServiceInterface } from '../interfaces/service.interface';
import { SpecificationInterface } from '../interfaces/specification.interface';
import { SubCategoryInterface } from '../interfaces/sub-category.interface';
import { LocalizedContentInterface } from '../interfaces/localized-content.interface';
import { ShortDescriptionInterface } from '../interfaces/short-description.interface';
import { LocalizedContentNamesInterface } from '../interfaces/localized-content-names.interface';

import {
  RawOmapiConstituentInterface,
  UsageLimitsInterface,
  UsageNotificationsInterface,
} from '../interfaces/raw-omapi-product.interface';
import { CharsInterface } from '../interfaces/chars.interface';
import { CharsEnum } from '../enums/chars.enum';
import { CharacteristicsInterface } from '../interfaces/characteristics.interface';
import { each, includes, isEmpty, isObject, some, sortBy, uniq } from 'lodash-es';
import {
  OmapiCharacteristicEnum,
  OmapiProductGroupEnum,
  OmapiProductSubGroupEnum,
} from '../constants/omapi-characteristic.enum';
import {
  OmapiDarwinProducts,
  OmapiLegacyProducts,
  OmapiProductTierEnum,
  OmapiProductType,
  OmapiServiceSpecificationLabelKey,
  OmapiServiceType,
  OmapiSubCategoryEnum,
} from '../constants/omapi.constants';
import { ConstituentInterface } from '../interfaces/constituent.interface';
import { ProductConstants } from '../constants/product.constant';
import { ProductCharacteristicEnum } from '../constants/product-characteristic.enum';
import { ProductPriceTypeEnum } from '../constants/product-price-type.enum';
import { FiberProducts } from '../constants/fiber-products.constants';

export class OmapiProduct {
  productId?: string;
  isYupProduct?: boolean;
  salesOfferingId?: string;
  externalProductCode?: string;
  productType?: string;
  categories?: string[];
  internalCategory?: string;
  customerCategories?: string[];
  subCategory?: SubCategoryInterface;
  labelKey?: string;
  visible?: boolean;
  family?: string;
  weight?: number;
  services?: ServiceInterface[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  apps: any;
  characteristics?: CharacteristicsInterface | unknown;
  localizedContent?: LocalizedContentInterface[];
  shortDescription?: ShortDescriptionInterface;
  rates?: RateInterface[];
  visibilityRules?: VisibilityRulesInterface;
  unlimited?: boolean;
  priceType?: string;
  specifications?: SpecificationInterface[];
  name?: string;
  maxCount?: string;
  eligibleForDiscount?: boolean;
  unlimitedInternet?: boolean;
  logo?: string;
  usageBasedRatePlan?: boolean;
  requiresInstallation?: boolean;
  usageLimits?: UsageLimitsInterface;
  usagenotifications?: UsageNotificationsInterface;
  productConstituents?: RawOmapiConstituentInterface[];
  chars?: CharsInterface[];
  imageUrl?: string;
  brand?: string;
  extraAtHomeDelivery?: boolean;
  isPreOrder?: boolean;
  isBackOrder?: boolean;
  preOrderDescriptionLabel?: string;
  backOrderDescriptionLabel?: string;
  isExternalContentPack?: string;
  isEligibleForAutoPause?: boolean;
  isEligibleForPauseProfile?: boolean;
  isEligibleForSettinglimits?: boolean;
  isFPBProduct?: boolean;

  constructor() {
    this.setInternalCategory();
  }

  priceInclVat(): number | undefined {
    return (this.characteristics as CharacteristicsInterface)?.priceInclVat;
  }

  price(exclVAT: boolean): number | undefined {
    return exclVAT
      ? (this.characteristics as CharacteristicsInterface)?.priceExclVat
      : (this.characteristics as CharacteristicsInterface)?.priceInclVat;
  }

  getLocalizedContentNames(): LocalizedContentNamesInterface {
    const localizedContentNames = {} as LocalizedContentNamesInterface;

    if (!isEmpty(this.localizedContent)) {
      this.localizedContent?.forEach((item) => {
        localizedContentNames[item.locale as keyof LocalizedContentNamesInterface] = item.name;
      });
    }
    return localizedContentNames;
  }

  hasCategory(searchCategory: string): boolean | undefined {
    return (
      !isEmpty(this.categories) &&
      this.categories?.some((category) => {
        return category.toUpperCase() === searchCategory.toUpperCase();
      })
    );
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

  hasSpecifications(): boolean {
    return !isEmpty(this.specifications);
  }

  updateRates(): void {
    this.rates?.forEach((rate) => {
      rate.type = this.formatRateType(rate.type);
      rate.isTypeData = includes(ProductConstants.DATA, rate.type);
      rate.isTypeVoice = includes(ProductConstants.VOICE, rate.type);
    });
  }

  isShowRates(): boolean {
    return some(ProductConstants.EPC_LIST_TO_SHOW_RATE, (searchCategoryName: string) => {
      return this.hasCategory(searchCategoryName) || this.externalProductCode === searchCategoryName;
    });
  }

  getSortedSpecifications(): SpecificationInterface[] {
    const specifications: SpecificationInterface[] = [];
    each(this.services, (service: ServiceInterface) => {
      each(service.specifications, (specification: SpecificationInterface) => {
        let updatedSpecification = Object.assign({}, specification);
        updatedSpecification.serviceType = service.serviceType;
        updatedSpecification.id = this.productId;
        updatedSpecification = this.setSpecifications(updatedSpecification);
        specifications.push(updatedSpecification);
      });
    });
    return this.getSortedListByWeight(specifications);
  }

  updateSpecifications(): void {
    this.specifications?.forEach((specification) => {
      if (specification.id === this.productId) {
        this.setSpecifications(specification);
      }
    });
  }

  public getEsimCharacteristicValue(): boolean {
    return this.getCharacteristic(OmapiCharacteristicEnum.ESIM_AVAILABLE);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getCharacteristic(key: string): any {
    // eslint-disable-next-line no-prototype-builtins
    if (isObject(this.characteristics) && this.characteristics.hasOwnProperty(key)) {
      return (this.characteristics as CharacteristicsInterface)?.[key as keyof CharacteristicsInterface];
    }
    return null;
  }

  getMaxMobileLines(): string {
    let maxMobileLines = this.getCharacteristic(ProductCharacteristicEnum.MAX_MOBILE_LINES);

    if (!maxMobileLines) {
      const maxLinesSpecification = this.getServiceSpecificationByLabelKey(
        OmapiServiceSpecificationLabelKey.SPEC_BUNDLE_MAX_MOBILE_LINES,
        OmapiServiceType.GENERAL
      );
      maxMobileLines = maxLinesSpecification?.value || null;
    }
    return maxMobileLines;
  }

  getSharedMobileData(): string {
    const sharedMobileData = this.getCharacteristic(ProductCharacteristicEnum.SHARED_MOBILE_DATA);
    return sharedMobileData && sharedMobileData.value;
  }

  hasUnlimitedCalling(): boolean | undefined {
    return (
      this.services &&
      this.services.some((service) => {
        return (
          service.serviceType.toUpperCase() === ProductConstants.MOBILE_CALLING &&
          service.specifications?.some((specification) => {
            return (
              specification.unit &&
              specification.unit.toUpperCase() === ProductConstants.MINUTES &&
              specification.value &&
              specification.value.toUpperCase() === ProductConstants.UNLIMITED
            );
          })
        );
      })
    );
  }

  hasUnlimitedMobileInternet(): boolean | undefined {
    return this.getConstituent(ProductConstants.MOBILE_LINE)
      ?.productInfo?.services?.find((service) => service?.serviceType === ProductConstants.MOBILE_INTERNET)
      ?.specifications?.some((s) => s.value === ProductConstants.FUP);
  }

  hasUnlimitedFixedInternet(): boolean {
    return (this.characteristics as CharacteristicsInterface)?.serviceCategory === ProductConstants.FUP;
  }

  hasUnlimitedInternetBasedOnLabelKey(): boolean | undefined {
    return this.services
      ?.find((s) => s?.serviceType === ProductConstants.MOBILE_INTERNET)
      ?.specifications?.some(
        (s) => s.labelKey === OmapiServiceSpecificationLabelKey.MOBILE_INTERNET_UNLIMITED_SHARED_SPEC
      );
  }

  isWigo(): boolean {
    return this.isFmc() && this.getProductSubGroup() === '';
  }

  isFmc(): boolean {
    return this.getProductGroup() === OmapiProductGroupEnum.FMC;
  }

  hasServiceType(serviceType: string): boolean {
    return some(this.services, (service) => {
      return service.serviceType.toUpperCase() === serviceType;
    });
  }

  isBundle(): boolean {
    return this.productType === 'BUNDLE';
  }

  isFiber(): boolean {
    return !!this.externalProductCode && FiberProducts.includes(this.externalProductCode);
  }

  getLogoUrl = (): string => {
    if (this.logo) {
      return this.logo;
    } else if (this.labelKey) {
      const key = this.normalizeKey(this.labelKey);
      return '/content/dam/www-telenet-be/img/self-service/products/' + key + '.png';
    }
    return '';
  };

  normalizeKey = (key: string): string => {
    if (key) {
      return key
        .replace(/ /g, '-')
        .replace(/\./g, '-')
        .replace(/[^0-9a-zA-Z_-]/g, '')
        .toLowerCase();
    }
    return '';
  };

  public getProductLevel(): string {
    return this.getCharacteristic(OmapiCharacteristicEnum.PRODUCT_LEVEL);
  }

  public getProductTier(): string {
    return this.getCharacteristic(OmapiCharacteristicEnum.PRODUCT_TIER);
  }

  public getConstituents(): ConstituentInterface[] {
    return this.getCharacteristic(OmapiCharacteristicEnum.CONSTITUENTS) || [];
  }

  getConstituent(type: string): ConstituentInterface | undefined {
    if (this.getConstituents()) {
      const [constituent] = this.getConstituents().filter(
        (result: ConstituentInterface) => result.type === this.normalizeKey(type)
      );
      return constituent;
    }
    return undefined;
  }

  getServiceSpecificationByLabelKey(labelKey: string, serviceType?: string): SpecificationInterface | undefined {
    if (this.services) {
      const service = serviceType
        ? this.services.find((specService) => specService.serviceType === serviceType)
        : this.services[0];

      return (
        service &&
        service.specifications &&
        service.specifications.find((specification: SpecificationInterface) => {
          return specification.labelKey === this.normalizeKey(labelKey);
        })
      );
    }
    return undefined;
  }

  getBillingCycle(): string {
    switch (this.priceType) {
      case ProductPriceTypeEnum.OMAPI_NON_RECURRENT_CHARGE:
        return ProductPriceTypeEnum.ONE_TIME;
      case ProductPriceTypeEnum.OMAPI_RECURRENT_CHARGE:
      default:
        return ProductPriceTypeEnum.RECURRENT;
    }
  }

  isWhop(): boolean {
    return this.productId === OmapiLegacyProducts.WHOP;
  }

  isWhoppa(): boolean {
    return this.productId === OmapiLegacyProducts.WHOPPA;
  }

  isConnect5(): boolean {
    return this.getProductSubGroup() === OmapiProductSubGroupEnum.CONNECT5;
  }

  isConnect5Soho(): boolean {
    return (
      this.getProductSubGroup() === OmapiProductSubGroupEnum.CONNECT5_SOHO ||
      this.getProductSubGroup() === OmapiProductSubGroupEnum.KLIK
    );
  }

  isHighTier(): boolean {
    return this.getCharacteristic('productTier') === OmapiProductTierEnum.HIGH;
  }

  getGroupNameLabel(): string | undefined {
    const { productGroup, productSubGroup, productTier, productSegment } = this
      .characteristics as CharacteristicsInterface;
    if (productGroup && productTier && productSegment) {
      return [productGroup, productSubGroup, productTier, productSegment]
        .filter((productName) => productName !== '')
        .map((productName) => productName?.toLowerCase())
        .map((productName) => productName?.replace(/\s+/g, '').trim())
        .join('-');
    }

    return this.services?.map((service) => service?.serviceType?.toLowerCase()).join('-');
  }

  getUniqOutOfBundlesLimits(): string[] {
    let limits: string[] = [];
    if (this.usageLimits) {
      each(this.usageLimits.outOfBundle.limits, (limit) => {
        limits = [...limits, ...limit.values];
      });
    }

    return uniq(limits);
  }

  hasCharKey(key?: CharsEnum): boolean {
    const charValue = this.fetchCharKey(key);
    return Boolean(charValue);
  }

  getCharValue(key: CharsEnum | null): string[] {
    if (!key) {
      return [];
    }
    const charValue = this.fetchCharKey(key);
    return (charValue && charValue.values) || [];
  }

  getCharUnit(key: CharsEnum): string | undefined {
    const charValue = this.fetchCharKey(key);
    return charValue && charValue.unit;
  }

  fetchCharKey(key?: CharsEnum): CharsInterface | undefined {
    return this.chars && this.chars.find((char) => char.key === key);
  }

  getInternetUsageNotificationThresholds(): unknown {
    return this.usagenotifications?.internet;
  }

  private getProductGroup(): string {
    return this.getCharacteristic(OmapiCharacteristicEnum.PRODUCT_GROUP);
  }

  getProductSubGroup(): string {
    return this.getCharacteristic(OmapiCharacteristicEnum.PRODUCT_SUB_GROUP);
  }

  isStreamingServiceContainer(): boolean {
    return this.productId === OmapiDarwinProducts.STREAMING_SERVICE_CONTAINER;
  }

  isNetflixPremiumAddon(): boolean {
    return this.productId === OmapiDarwinProducts.NETFLIX_PREMIUM_ADDON;
  }

  isANetflixProduct(): boolean {
    return OmapiSubCategoryEnum.NETFLIX === this.subCategory?.name;
  }

  isNetflixStandard(): boolean {
    return this.productId === OmapiDarwinProducts.NETFLIX_STANDARD;
  }

  isDarwinProduct() {
    const STARTS_WITH_NUMBER = /^\d/;
    return (this.productId && !this.productId.match(STARTS_WITH_NUMBER)) || false;
  }

  isESim(): boolean {
    return this.productType === OmapiProductType.E_SIM;
  }

  private getSortedListByWeight(list: SpecificationInterface[]): SpecificationInterface[] {
    return sortBy(list, ProductConstants.WEIGHT);
  }

  private formatRateType(type: string) {
    return type && type.toLowerCase().replace(/ /g, '-');
  }

  private setSpecifications(specification: SpecificationInterface): SpecificationInterface {
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

  private setSpecificationsForMobileCalling(specification: SpecificationInterface): SpecificationInterface {
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

  private setSpecificationsForMobileInternet(specification: SpecificationInterface): SpecificationInterface {
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

  private setSpecificationsForMobileMonetary(specification: SpecificationInterface): SpecificationInterface {
    specification.showUnit = false;
    specification.isMonetary = true;
    specification.isValue = false;
    return specification;
  }

  private setSpecificationsForFixedVoiceAndTv(specification: SpecificationInterface): SpecificationInterface {
    specification.isValue = true;
    specification.showUnit = true;
    specification.isMonetary = false;
    return specification;
  }

  private setSpecificationsForInternet(specification: SpecificationInterface): SpecificationInterface {
    if (specification.value && specification.value.toUpperCase() === ProductConstants.UNLIMITED) {
      specification.isAsterisk = true;
      specification.showUnit = false;
    } else {
      specification.showUnit = true;
    }
    specification.isValue = true;
    specification.isMonetary = false;

    return specification;
  }
}
