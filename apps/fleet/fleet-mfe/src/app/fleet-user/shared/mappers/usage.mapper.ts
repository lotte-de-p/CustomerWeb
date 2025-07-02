import { Injectable } from '@angular/core';
import { MapperInterface } from '@telenet/ng-lib-shared';
import { OmapiProduct, OmapiProductMapper } from '@telenet/ng-lib-omapi';
import { NormalizationService } from '@telenet/ng-lib-page';
import { Usage } from '../models/usage.model';
import {
  RawIncludedInterface,
  RawOptionInterface,
  RawProductUsageInterface,
  RawSharedBundlesInterface,
  RawUsageInterface,
} from '../interfaces/raw/raw-usage.interface';
import { UsageOptionInterface } from '../interfaces/usage/usage-option.interface';
import { IncludedInterface } from '../interfaces/included.interface';
import { ProductConstants } from '../constants/product/product.constant';
import { ProductUsageInterface } from '../interfaces/product/product-usage.interface';
import { SharedBundlesInterface } from '../interfaces/shared-bundles.interface';

@Injectable({
  providedIn: 'root',
})
export class UsageMapper implements MapperInterface<RawUsageInterface, Usage> {
  constructor(
    private readonly omapiProductMapper: OmapiProductMapper,
    private readonly normalizationService: NormalizationService
  ) {}

  toModel(rawResponse: RawUsageInterface): Usage {
    return this.createUsage(rawResponse);
  }

  private createUsage(rawResponse: RawUsageInterface): Usage {
    const usage = new Usage(this.normalizationService);
    usage.productInfo = this.omapiProductMapper.toModel(rawResponse.rawOmapi);
    if (rawResponse.included) {
      usage.included = this.getIncluded(rawResponse.included, usage.productInfo);
    }
    usage.carryOver = rawResponse.carryOver;
    usage.total = rawResponse.total;
    usage.outOfBundle = rawResponse.outOfBundle;
    usage.extraUsages = rawResponse.extraUsages;
    usage.lastUpdated = rawResponse.lastUpdated;
    usage.nextBillingDate = rawResponse.nextBillingDate;
    usage.previousBillingDate = rawResponse.previousBillingDate;
    usage.options = this.createOptions(rawResponse.options);
    usage.success = rawResponse.success;
    usage.credit = rawResponse.credit ? rawResponse.credit.remainingUnits : '';
    usage.validUntil = rawResponse.validUntil;
    usage.isUnlimitedPlan = usage.productInfo.unlimited;
    usage.daysForNextBill = this.getDaysForNextBill(rawResponse.nextBillingDate);
    usage.splitBillBudget = rawResponse.splitBillBudget;
    if (rawResponse.shared) {
      usage.shared = this.getIncluded(rawResponse.shared, usage.productInfo);
    }
    // usage.hasUnlimitedCalling logic to be added
    if (rawResponse.sharedBundles) {
      usage.sharedBundles = this.getSharedBundles(rawResponse.sharedBundles);
    }

    return usage;
  }

  private getDaysForNextBill(nextBillingDate: string) {
    const nextdate = new Date(nextBillingDate);
    const currentDate = new Date();
    const timeDiff = nextdate.getTime() - currentDate.getTime();
    const absoluteTime = Math.abs(timeDiff);
    const numberOfDaysRemaining = Math.ceil(absoluteTime / (1000 * 3600 * 24));
    if (timeDiff < 0 && numberOfDaysRemaining > 1) {
      return 0;
    }
    return numberOfDaysRemaining;
  }

  private createOptions(rawOptions: RawOptionInterface[]): UsageOptionInterface[] {
    return (
      rawOptions &&
      rawOptions.map((rawOption) => {
        return this.createOption(rawOption);
      })
    );
  }

  private getIncluded(rawIncluded: RawIncludedInterface, productInfo: OmapiProduct): IncludedInterface {
    const included = {} as IncludedInterface;
    Object.keys(rawIncluded).forEach((key) => {
      if (key === 'option') {
        included[key] = this.createOption(rawIncluded.option);
      } else {
        included[key] = rawIncluded[key].map((rawProductUsage: RawProductUsageInterface) => {
          if (key === 'data') {
            const usage = this.getProductUsage(rawProductUsage, productInfo);
            const usedValue = parseFloat(usage.usedUnits.replace(',', '.'));
            if (usedValue && usedValue < 1) {
              usage.usedUnitType = ProductConstants.UNIT_TYPE_MB;
              usage.usedUnits = this.getUsedUnitsInMB(usedValue);
            }
            return usage;
          }
          return this.getProductUsage(rawProductUsage, productInfo);
        });
      }
    });
    return included;
  }

  private getProductUsage(rawProductUsage: RawProductUsageInterface, productInfo: OmapiProduct): ProductUsageInterface {
    const productUsage = {} as ProductUsageInterface;
    productUsage.name = rawProductUsage.name;
    productUsage.startUnits = rawProductUsage.startUnits;
    productUsage.remainingUnits = rawProductUsage.remainingUnits;
    productUsage.usedUnits = rawProductUsage.usedUnits;
    productUsage.originalUsedUnits = rawProductUsage.usedUnits;
    productUsage.usedPercentage = rawProductUsage.usedPercentage;
    productUsage.unitType = rawProductUsage.unitType;
    productUsage.unlimited = productInfo.unlimited || rawProductUsage.unlimited;
    productUsage.daysUntil = rawProductUsage.daysUntil;
    productUsage.validity = rawProductUsage.validity;
    productUsage.bucketType = rawProductUsage.bucketType;
    return productUsage;
  }

  private getUsedUnitsInMB(units: number): string {
    return (units * 1024).toFixed(2).replace('.', ',');
  }

  private createOption(rawOption: RawOptionInterface): UsageOptionInterface {
    const option = {} as UsageOptionInterface;
    option.data = rawOption.data;
    option.label = rawOption.label;
    option.text = rawOption.text;
    option.voice = rawOption.voice;
    option.monetary = rawOption.monetary;
    option.productCode = rawOption.productCode;
    option.productInfo = this.omapiProductMapper.toModel(rawOption.rawOmapi);
    return option;
  }

  private getSharedBundles(rawSharedBundles: RawSharedBundlesInterface): SharedBundlesInterface {
    const sharedBundles = {} as SharedBundlesInterface;
    Object.keys(rawSharedBundles).forEach((key) => {
      sharedBundles[key] = rawSharedBundles[key].map((rawProductUsage: RawProductUsageInterface) => {
        return this.getSharedBundleProductUsage(rawProductUsage);
      });
    });
    return sharedBundles;
  }

  private getSharedBundleProductUsage(rawProductUsage: RawProductUsageInterface): ProductUsageInterface {
    const productUsage = {} as ProductUsageInterface;
    productUsage.name = rawProductUsage.name;
    productUsage.startUnits = rawProductUsage.startUnits;
    productUsage.remainingUnits = rawProductUsage.remainingUnits;
    productUsage.usedUnits = rawProductUsage.usedUnits;
    productUsage.usedPercentage = rawProductUsage.usedPercentage;
    productUsage.unitType = rawProductUsage.unitType;
    productUsage.unlimited = rawProductUsage.unlimited;
    productUsage.daysUntil = rawProductUsage.daysUntil;
    productUsage.validity = rawProductUsage.validity;
    productUsage.bucketType = rawProductUsage.bucketType;
    return productUsage;
  }
}
