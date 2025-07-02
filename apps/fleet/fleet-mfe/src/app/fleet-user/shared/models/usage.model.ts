import { OmapiProduct, SpecificationInterface } from '@telenet/ng-lib-omapi';
import { NormalizationService } from '@telenet/ng-lib-page';
import first from 'lodash-es/first';
import cloneDeep from 'lodash-es/cloneDeep';
import isEmpty from 'lodash-es/isEmpty';
import { UsageUnitEnum } from '../enums/usage-unit.enum';
import { SharedInterface } from '../interfaces/shared.interface';
import { IncludedInterface } from '../interfaces/included.interface';
import { TotalInterface } from '../interfaces/total.interface';
import { OutOfBundleInterface } from '../interfaces/out-of-bundle.interface';
import { ProductUsageInterface } from '../interfaces/product/product-usage.interface';
import { SharedBundlesInterface } from '../interfaces/shared-bundles.interface';
import { UsageOptionInterface } from '../interfaces/usage/usage-option.interface';

export class Usage {
  private static readonly DATA = 'data';
  private static readonly VOICE = 'voice';
  private static readonly TEXT = 'text';
  private static readonly THRESHOLD = 1024;
  private static readonly UNLIMITED = 'unlimited';
  private static readonly ALLOWED_UNITS: string[] = [
    UsageUnitEnum.NUMBER,
    UsageUnitEnum.MINUTES,
    UsageUnitEnum.SECONDS,
    UsageUnitEnum.MB,
    UsageUnitEnum.GB,
  ];

  shared?: SharedInterface;
  included: IncludedInterface;
  carryOver: IncludedInterface;
  total: TotalInterface;
  outOfBundle: OutOfBundleInterface;
  extraUsages?: ProductUsageInterface[];
  lastUpdated: string;
  nextBillingDate: string;
  previousBillingDate: string;
  daysForNextBill: number;
  success: string;
  credit: string;
  validUntil: string;
  options: UsageOptionInterface[];
  category: string;
  productInfo: OmapiProduct;
  isUnlimitedPlan: boolean;
  hasUnlimitedCalling: boolean;
  isLineBundleUsage: boolean;
  isGroupBundleUsage: boolean;
  dataPause?: boolean;
  sharedBundles?: SharedBundlesInterface;
  splitBillBudget?: ProductUsageInterface;

  constructor(private readonly normalizationService?: NormalizationService) {}

  getCategory(): string {
    if (!isEmpty(this.productInfo.categories)) {
      return first(this.productInfo.categories);
    }
  }

  isDataUnlimited(unit: string, isUnlimited: boolean): boolean {
    return (unit === UsageUnitEnum.GB || unit === UsageUnitEnum.MB) && isUnlimited;
  }

  convertUnits(productUsage: ProductUsageInterface, force?: boolean): ProductUsageInterface {
    const conversionMode = this.getConversionMode(productUsage.unitType, productUsage.startUnits, force);
    if (!conversionMode) {
      return productUsage;
    }
    const updatedProductUsage = cloneDeep(productUsage);
    updatedProductUsage.unitType = conversionMode === Usage.DATA ? UsageUnitEnum.GB : UsageUnitEnum.MINUTES;
    updatedProductUsage.remainingUnits = this.converter(updatedProductUsage.remainingUnits, conversionMode);
    updatedProductUsage.startUnits = this.converter(updatedProductUsage.startUnits, conversionMode);
    updatedProductUsage.usedUnits = this.converter(updatedProductUsage.usedUnits, conversionMode);

    return updatedProductUsage;
  }

  private getConversionMode(unitType: string, value: string, force?: boolean): string {
    if (unitType === UsageUnitEnum.SECONDS) {
      return Usage.VOICE;
    }
    if (unitType === UsageUnitEnum.MB && (parseFloat(value.replace(',', '.')) > Usage.THRESHOLD || force)) {
      return Usage.DATA;
    }
  }

  private converter(value: string, mode: string): string {
    if (value && mode === Usage.DATA) {
      value = (parseFloat(value.replace(',', '.')) / 1024).toFixed(2).replace('.', ',');
    }
    if (value && mode === Usage.VOICE) {
      // eslint-disable-next-line radix
      value = (parseFloat(value.replace(',', '.')) / 60).toFixed(2).replace('.00', '').replace('.', ',');
    }
    return value;
  }

  addManuallyConfiguredSpec(): void {
    if (!isEmpty(this.productInfo.services)) {
      let buckets: ProductUsageInterface[] = [];
      let specifications: SpecificationInterface[] = [];
      [Usage.DATA, Usage.VOICE, Usage.TEXT].forEach((key) => {
        buckets = [...buckets, ...this.included[key]];
      });
      this.productInfo.services.forEach((service) => {
        specifications = [...specifications, ...service.specifications];
      });
      const manualSpecifications = this.getManuallyConfiguredSpec(buckets, specifications);
      this.mapManualSpecifications(manualSpecifications);
    }
  }

  private getManuallyConfiguredSpec(
    buckets: ProductUsageInterface[],
    specifications: SpecificationInterface[]
  ): SpecificationInterface[] {
    return specifications.filter((specification) => {
      const correspondingBucket = buckets.find((bucket) => {
        return this.normalizationService.normalizeKey(bucket.name) === specification.labelKey;
      });
      return (
        isEmpty(correspondingBucket) &&
        specification.unit &&
        Usage.ALLOWED_UNITS.includes(specification.unit.toUpperCase()) &&
        specification.value &&
        specification.value.toLowerCase() === Usage.UNLIMITED
      );
    });
  }

  private mapManualSpecifications(manualSpecifications: SpecificationInterface[]): void {
    manualSpecifications.forEach((spec) => {
      const mappedSpec = {} as ProductUsageInterface;
      mappedSpec.name = spec.labelKey;
      mappedSpec.unitType = spec.unit.toUpperCase();
      mappedSpec.startUnits = spec.value;
      mappedSpec.unlimited = this.isUnlimitedPlan || (spec.value && spec.value.toLowerCase() === Usage.UNLIMITED);
      mappedSpec.usedPercentage = 0;
      mappedSpec.remainingUnits = spec.value;
      mappedSpec.usedUnits = '0';
      mappedSpec.isManual = true;
      this.addMappedSpecifications(mappedSpec);
    });
  }

  private addMappedSpecifications(mappedSpec: ProductUsageInterface): void {
    switch (mappedSpec.unitType) {
      case UsageUnitEnum.SECONDS:
      case UsageUnitEnum.MINUTES:
        this.included.voice.push(mappedSpec);
        break;
      case UsageUnitEnum.NUMBER:
        this.included.text.push(mappedSpec);
        break;
      case UsageUnitEnum.GB:
      case UsageUnitEnum.MB:
        this.included.data.push(mappedSpec);
        break;
    }
  }
}
