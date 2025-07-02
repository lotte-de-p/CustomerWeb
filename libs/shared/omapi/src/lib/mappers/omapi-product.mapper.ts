import { OmapiProduct } from '../models/omapi-product.model';
import {
  RawCharacteristicsInterface,
  RawConstituentInterface,
  RawLocalizedContentInterface,
  RawOmapiConstituentInterface,
  RawOmapiProductInterface,
  RawOmapiProductInterfaceData,
  RawRateInterface,
  RawServiceInterface,
  RawShortDescriptionInterface,
  RawSpecificationInterface,
  RawSubCategoryInterface,
  UnitValueInterface,
} from '../interfaces/raw-omapi-product.interface';
import { RateInterface } from '../interfaces/rate.interface';
import { VisibilityRulesInterface } from '../interfaces/visibilityrules.interface';
import { SubCategoryInterface } from '../interfaces/sub-category.interface';
import { ShortDescriptionInterface } from '../interfaces/short-description.interface';
import { ExperienceInterface, ServiceInterface } from '../interfaces/service.interface';
import { SpecificationInterface } from '../interfaces/specification.interface';
import { LocalizedContentInterface } from '../interfaces/localized-content.interface';
import { CharacteristicsInterface } from '../interfaces/characteristics.interface';
import { Injectable } from '@angular/core';
import { LanguageService, NormalizationService } from '@telenet/ng-lib-page';
import { CharsEnum } from '../enums/chars.enum';
import { CharsInterface } from '../interfaces/chars.interface';
import { isEmpty } from 'lodash-es';
import { ConstituentInterface } from '../interfaces/constituent.interface';

@Injectable({
  providedIn: 'root',
})
export class OmapiProductMapper {
  constructor(
    private readonly languageService: LanguageService,
    private readonly normalizationService: NormalizationService
  ) {}

  readonly ignoredDarwinSpecifications: string[] = ['sharedmobiledata', 'max_mobile_lines'];

  toModel(rawOmapiProduct?: RawOmapiProductInterface): OmapiProduct {
    return this.createOmapiProduct(rawOmapiProduct);
  }

  private createOmapiProduct(rawOmapiProduct?: RawOmapiProductInterface): OmapiProduct {
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

  private mapOmapiData(omapiProduct: OmapiProduct, rawOmapiProductData: RawOmapiProductInterfaceData) {
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

  private hasExternalContentPack(chars?: CharsInterface[]): string | undefined {
    let charObject = {} as CharsInterface | undefined;
    if (!isEmpty(chars)) {
      charObject = chars?.find((char: CharsInterface) => {
        return char.key === CharsEnum.IS_EXTERNAL_CONTENT_PACK;
      });
    }
    return !isEmpty(charObject) && !isEmpty(charObject?.values) ? charObject?.values?.[0] : 'false';
  }

  private hasDiscount(rawChars?: RawCharacteristicsInterface): boolean {
    const discountChar =
      rawChars &&
      rawChars.elementarycharacteristics &&
      rawChars.elementarycharacteristics.find((char) => char.key === CharsEnum.CALL_CONTENT_PACK_DISCOUNTED_PRICE_API);
    if (discountChar) {
      return JSON.parse(discountChar.value.split(',')[0]);
    }
    return false;
  }

  private getContentForLocale(
    rawLocalizedContents?: RawLocalizedContentInterface[]
  ): LocalizedContentInterface | undefined {
    return (
      rawLocalizedContents &&
      rawLocalizedContents.find((localizedContent) => {
        return localizedContent.locale === this.languageService.getLanguage();
      })
    );
  }

  private createLocalizedContents(rawLocalizedContents: RawLocalizedContentInterface[]): LocalizedContentInterface[] {
    return (
      rawLocalizedContents &&
      rawLocalizedContents.map((rawLocalizedContent) => {
        return this.createLocalizedContent(rawLocalizedContent);
      })
    );
  }

  private createOmapiConstituents(
    rawOmapiConstituents: RawOmapiConstituentInterface[]
  ): RawOmapiConstituentInterface[] {
    return (
      rawOmapiConstituents &&
      rawOmapiConstituents.map((rawOmapiConstituent) => {
        return rawOmapiConstituent;
      })
    );
  }

  private createLocalizedContent(rawLocalizedContent: RawLocalizedContentInterface): LocalizedContentInterface {
    const localizedContent = {} as LocalizedContentInterface;
    localizedContent.locale = rawLocalizedContent.locale;
    localizedContent.name = rawLocalizedContent.name;
    localizedContent.logo = rawLocalizedContent.logo;
    return localizedContent;
  }

  private createServices(rawServices: RawServiceInterface[]): ServiceInterface[] {
    return (
      rawServices &&
      rawServices.map((rawService) => {
        return this.createService(rawService);
      })
    );
  }

  private createService(rawService: RawServiceInterface): ServiceInterface {
    const service = {} as ServiceInterface;
    service.serviceType = rawService.servicetype;
    service.specifications = this.createSpecifications(rawService.specifications);
    if (rawService.experience) {
      service.experience = {} as ExperienceInterface;
      service.experience.experienceType = rawService.experience.experiencetype;
    }
    return service;
  }

  private createSpecifications(rawSpecifications?: RawSpecificationInterface[]): SpecificationInterface[] | undefined {
    return (
      rawSpecifications &&
      rawSpecifications
        .filter((spec) => !this.ignoredDarwinSpecifications.includes(spec.labelkey))
        .map((rawSpecification) => {
          return this.createSpecification(rawSpecification);
        })
    );
  }

  private createSpecification(rawSpecification: RawSpecificationInterface): SpecificationInterface {
    const specification = {} as SpecificationInterface;
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

  private createRate(rawRate: RawRateInterface): RateInterface {
    const rate = {} as RateInterface;
    rate.type = this.normalizationService.normalizeKey(rawRate.type);
    rate.unit = rawRate.unit;
    rate.cost = rawRate.cost;
    rate.currency = rawRate.currency;
    return rate;
  }

  private createRates(rawRates?: RawRateInterface[]): RateInterface[] | undefined {
    return (
      rawRates &&
      rawRates.map((rawRate) => {
        return this.createRate(rawRate);
      })
    );
  }

  private createApps(rawApps: unknown): unknown {
    return rawApps;
  }

  private createShortDescription(rawShortDescription?: RawShortDescriptionInterface): ShortDescriptionInterface {
    const shortDescription = {} as ShortDescriptionInterface;
    if (rawShortDescription) {
      shortDescription.localizedContent = this.getContentForLocale(rawShortDescription.localizedcontent);
    }
    return shortDescription;
  }

  private createSubCategory(rawSubCategory?: RawSubCategoryInterface): SubCategoryInterface {
    const subCategory = {} as SubCategoryInterface;
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
  private getCharacteristics(rawOmapiCharacteristics?: RawCharacteristicsInterface): CharacteristicsInterface {
    const characteristics = {} as CharacteristicsInterface;
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

  private correctDarwinCharacteristics(
    omapiProduct: OmapiProduct,
    rawOmapiProduct: RawOmapiProductInterfaceData
  ): void {
    if (rawOmapiProduct.services && !!rawOmapiProduct.services.length) {
      this.correctSharedMobileData(omapiProduct, rawOmapiProduct.services);
      this.correctMaxMobileLines(omapiProduct, rawOmapiProduct.services);
    }
  }

  private correctSharedMobileData(omapiProduct: OmapiProduct, services: RawServiceInterface[]): void {
    const mobileInternet = services
      .filter((service) => service.servicetype === 'MOBILE_INTERNET')
      .flatMap((service) => service.specifications)
      .find((spec) => spec?.labelkey === 'sharedmobiledata');

    if (mobileInternet) {
      (omapiProduct.characteristics as CharacteristicsInterface).sharedMobileData = {
        value: mobileInternet.value,
        unit: mobileInternet.unit,
      };
    }
  }

  private correctMaxMobileLines(omapiProduct: OmapiProduct, services: RawServiceInterface[]): void {
    const maxMobileLines = services
      .filter((service) => service.servicetype === 'GENERAL')
      .flatMap((service) => service.specifications)
      .find((spec) => spec?.labelkey === 'max_mobile_lines');

    if (maxMobileLines) {
      (omapiProduct.characteristics as CharacteristicsInterface).maxMobileLines = maxMobileLines.value;
    }
  }

  private getProductTier(rawOmapiCharacteristics: RawCharacteristicsInterface): string | undefined {
    if (!rawOmapiCharacteristics.producttier) {
      return rawOmapiCharacteristics.elementarycharacteristics
        ?.filter((el) => el.key === CharsEnum.PRODUCT_TIER)
        .map((e) => e.value)
        .shift();
    }
    return rawOmapiCharacteristics.producttier;
  }

  private getFloatValue(property: UnitValueInterface | undefined): number | undefined {
    return property ? parseFloat(property.value) : undefined;
  }

  private getIntegerValue(property: string | undefined): number | undefined {
    return property ? parseInt(property) : undefined;
  }

  private getChars(rawOmapiCharacteristics: RawCharacteristicsInterface): CharsInterface[] | undefined {
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

  private createConstituents(rawConstituents: RawConstituentInterface[]): ConstituentInterface[] {
    return (
      rawConstituents &&
      rawConstituents.map((rawConstituent) => {
        return this.createConstituent(rawConstituent);
      })
    );
  }

  private createConstituent(rawConstituent: RawConstituentInterface): ConstituentInterface {
    const constituent = {} as ConstituentInterface;
    constituent.type = this.normalizationService.normalizeKey(rawConstituent.type);
    constituent.specurl = rawConstituent.specurl;
    constituent.productInfo = this.toModel(rawConstituent.rawOmapi);
    return constituent;
  }

  private createVisibilityRules(rawVisibilityrules?: { conditionalvisibility: boolean }): VisibilityRulesInterface {
    const visibilityRules = {} as VisibilityRulesInterface;
    if (rawVisibilityrules) {
      visibilityRules.conditionalVisibility = rawVisibilityrules.conditionalvisibility;
    }
    return visibilityRules;
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  private getValueUnit(rawData?: { unit: unknown; value: string }): object | undefined {
    if (rawData) {
      return { unit: rawData.unit, value: parseFloat(rawData.value) };
    }
    return undefined;
  }
}
