import { Injectable } from '@angular/core';
import isEmpty from 'lodash-es/isEmpty';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { MobileUsageOverviewConstant } from '../constants/mobile-usage-overview.constant';
import { MobileService } from '../../../../shared/services/mobile.service';
import { Usage } from '../../../../shared/models/usage.model';
import { ProductSubscriptionsInterface } from '../../../../shared/interfaces/product/product-subscriptions.interface';
import { ProductConstants } from '../../../../shared/constants/product/product.constant';
import { MobileAutoPauseInterface } from '../../../../shared/interfaces/mobile-auto-pause.interface';
import { UsageOptionInterface } from '../../../../shared/interfaces/usage/usage-option.interface';
import { ProductUsageInterface } from '../../../../shared/interfaces/product/product-usage.interface';
import { IncludedInterface } from '../../../../shared/interfaces/included.interface';
import { UsageQueryParamEnum } from '../../../../shared/enums/usage-query-param.enum';

@Injectable({
  providedIn: 'root',
})
export class MobileUsageOverviewService {
  constructor(
    private readonly translateService: TranslateService,
    private readonly mobileService: MobileService
  ) {}

  public getOptionName(planName: string, label: string, isManual?: boolean, OutsideEurope?: boolean): string {
    if (OutsideEurope) {
      return MobileUsageOverviewConstant.MOBILE_EU_DATA;
    }
    return isManual
      ? this.translateService
          .instant(MobileUsageOverviewConstant.KEY_MOBILE_USAGE_OVERVIEW_LABEL + label)
          .replace(MobileUsageOverviewConstant.KEY_MOBILE_USAGE_OVERVIEW_LABEL, '')
          .toUpperCase()
      : label.replace(planName + ' - ', '');
  }

  public addCommonBuckets(usage: Usage): void {
    if (usage.included) {
      const includedBuckets = this.getFlattenIncludedBuckets(usage.included);
      const commonBuckets = this.getCommonBuckets(usage.options, includedBuckets);
      commonBuckets.forEach((commonBucket) => {
        const matchingBucket = includedBuckets.find(
          (includedBucket) => includedBucket.bucketType === commonBucket.bucketType
        );
        this.normalizingBucketUnits(matchingBucket, commonBucket, usage);
        this.addBucketProperties(matchingBucket, commonBucket);
      });
    }
  }

  public getNameByLabel(label: string): string {
    return label.split('/')[0].trimEnd();
  }

  public getUsageForProductSubscriptions(accounts: ProductSubscriptionsInterface[]): Observable<Usage[]> {
    // eslint-disable-next-line rxjs/finnish
    const usages$: Observable<Usage>[] = accounts.map((account) => {
      return account.productType === ProductConstants.PRODUCT_TYPE_BUNDLE
        ? this.getBundleUsage(account)
        : this.getStandaloneLineUsage(account);
    });

    return forkJoin(usages$);
  }

  public isGroupBundle(selectedAccount: ProductSubscriptionsInterface): boolean {
    return Boolean(selectedAccount && selectedAccount['label'] === MobileUsageOverviewConstant.GROUP_VIEW);
  }

  public getAutoPause(messageGroupName, selectedAccountIdentifier): Observable<MobileAutoPauseInterface> {
    return this.mobileService.getAutoPause(messageGroupName, selectedAccountIdentifier);
  }

  public updateDataUsagePauseInfo(customMessageGroupName, request, params) {
    return this.mobileService.updateDataUsagePauseInfo(customMessageGroupName, request, params);
  }

  public getDataUsagePauseInfo(customMessageGroupName, params) {
    return this.mobileService.getDataUsagePauseInfo(customMessageGroupName, params);
  }

  private getCommonBuckets(
    options: UsageOptionInterface[],
    includedBuckets: ProductUsageInterface[]
  ): ProductUsageInterface[] {
    let buckets = [];
    if (!isEmpty(options)) {
      buckets = options.reduce((prev, option) => {
        MobileUsageOverviewConstant.ALL_CONSUMPTION_DATA_TYPES.forEach((key) => {
          if (option[key]) {
            option[key].forEach((bucket: ProductUsageInterface, index: number, object: ProductUsageInterface[]) => {
              if (includedBuckets.find((ib) => ib.bucketType && ib.bucketType === bucket.bucketType)) {
                prev.push(bucket);
                object.splice(index, 1);
              }
            });
          }
        });
        return prev;
      }, []);
    }
    return buckets;
  }

  private getFlattenIncludedBuckets(included: IncludedInterface): ProductUsageInterface[] {
    let includedBuckets: ProductUsageInterface[] = [];
    Object.keys(included).forEach((key) => {
      includedBuckets = [...includedBuckets, ...included[key]];
    });
    return includedBuckets;
  }

  private addBucketProperties(includedBucket: ProductUsageInterface, optionBucket: ProductUsageInterface): void {
    includedBucket.name = `${includedBucket.name} + ${optionBucket.name}`;
    includedBucket.usedUnits = this.formatUnits(includedBucket.usedUnits, optionBucket.usedUnits);
    includedBucket.remainingUnits = this.formatUnits(includedBucket.remainingUnits, optionBucket.remainingUnits);
    includedBucket.startUnits = this.formatUnits(includedBucket.startUnits, optionBucket.startUnits);
    includedBucket.usedPercentage = this.calculatePercentage(includedBucket.usedUnits, includedBucket.startUnits);
    if (includedBucket.unlimited || optionBucket.unlimited) {
      includedBucket.unlimited = true;
    }
  }

  private normalizingBucketUnits(
    includedBucket: ProductUsageInterface,
    optionBucket: ProductUsageInterface,
    usage: Usage
  ): void {
    if (includedBucket.unitType === optionBucket.unitType) {
      return;
    }
    Object.assign(includedBucket, usage.convertUnits(includedBucket, true));
    Object.assign(optionBucket, usage.convertUnits(optionBucket, true));
  }

  private formatUnits(firstValue: string, secondValue: string): string {
    const result = parseFloat(firstValue.replace(',', '.')) + parseFloat(secondValue.replace(',', '.'));
    return result.toFixed(2).replace('.', ',').replace(',00', '');
  }

  private calculatePercentage(usedUnits: string, startUnit: string): number {
    const percentage = (100 * parseFloat(usedUnits.replace(',', '.'))) / parseFloat(startUnit.replace(',', '.'));
    return parseFloat(percentage.toFixed(0));
  }

  private getStandaloneLineUsage(account: ProductSubscriptionsInterface): Observable<Usage> {
    return this.mobileService
      .getMobileUsage(
        MobileUsageOverviewConstant.MESSAGE_GROUP_NAME,
        account.identifier ? account.identifier : account.msisdn,
        true
      )
      .pipe(catchError(() => of(null)));
  }

  private getBundleUsage(account: ProductSubscriptionsInterface): Observable<Usage> {
    const paramsMap = new Map<UsageQueryParamEnum, string>();
    paramsMap.set(UsageQueryParamEnum.TYPE, ProductConstants.PRODUCT_TYPE_BUNDLE);
    if (!this.isGroupBundle(account)) {
      paramsMap.set(UsageQueryParamEnum.LINE_IDENTIFIER, account.identifier);
    }
    return this.mobileService
      .getMobileUsage(
        MobileUsageOverviewConstant.MESSAGE_GROUP_NAME,
        account.bundleIdentifier ? account.bundleIdentifier : account.msisdn,
        true,
        paramsMap
      )
      .pipe(catchError(() => of(null)));
  }
}
