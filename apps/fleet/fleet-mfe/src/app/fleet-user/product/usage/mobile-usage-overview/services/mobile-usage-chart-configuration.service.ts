import { Injectable } from '@angular/core';
import { MobileUsageOverviewConstant } from '../constants/mobile-usage-overview.constant';
import { TranslateService } from '@ngx-translate/core';
import isEmpty from 'lodash-es/isEmpty';
import { UnitConversionEnum } from '../enums/unit-conversion.enum';
import { ProductUsageInterface } from '../../../../shared/interfaces/product/product-usage.interface';
import { ChartConfigBuilder } from '../../shared/components/liquid-chart/models/chart-config.builder';
import { ChartConfiguration } from '../../shared/components/liquid-chart/models/chart-configuration';
import { UsageUnitEnum } from '../../../../shared/enums/usage-unit.enum';
import { TextColorEnum } from '../../shared/components/liquid-chart/enums/text-color.enum';
import { LiquidColorEnum } from '../../shared/components/liquid-chart/enums/liquid-color.enum';
import { Icon } from '../../../../shared/enums/icons.enum';

@Injectable({
  providedIn: 'root',
})
export class MobileUsageChartConfigurationService {
  constructor(private readonly translateService: TranslateService) {}

  getChartConfiguration(
    productUsage: ProductUsageInterface,
    isUnlimitedPlan: boolean,
    isPVVUsage?: boolean,
    isBundleLineUsage?: boolean,
    isDataPaused?: boolean,
    bucketName?: string,
    isSplitBillBudget?: boolean
  ): ChartConfiguration {
    const foregroundColor = this.getForegroundColor(isUnlimitedPlan, productUsage.usedPercentage);
    return this.chartConfigurationBuilder(
      productUsage,
      isUnlimitedPlan,
      isPVVUsage,
      isBundleLineUsage,
      isDataPaused,
      bucketName,
      foregroundColor,
      isSplitBillBudget
    )
      .setTitle(
        this.getTitle(productUsage, isUnlimitedPlan, isPVVUsage, isDataPaused, isBundleLineUsage, isSplitBillBudget)
      )
      .getChartConfiguration();
  }

  public getStartUnit(
    unlimited: boolean,
    unitType: string,
    usageBundle: ProductUsageInterface,
    isSplitBillBudget?: boolean
  ): string {
    switch (true) {
      case unlimited:
        return this.translateService.instant(MobileUsageOverviewConstant.TITLE_UNLIMITED);
      case isSplitBillBudget:
        return this.translateService.instant('ng.fleet-user-mobile-usage-overview.lbl.monetary-balance', {
          value: usageBundle.remainingUnits,
        });
      case unitType === UsageUnitEnum.EUR:
        return this.translateService.instant('ng.fleet-user-mobile-usage-overview.lbl.monetary-balance', {
          value: usageBundle.startUnits,
        });
      default:
        return usageBundle.startUnits;
    }
  }

  public getModifiedUnitType(usageBundle: ProductUsageInterface, isBundleLineUsage?: boolean): UsageUnitEnum | string {
    switch (true) {
      case usageBundle.unitType === UsageUnitEnum.MINUTES:
        return UnitConversionEnum.MINS;
      case usageBundle.unitType === UsageUnitEnum.SECONDS:
        return UnitConversionEnum.SECS;
      case usageBundle.unitType === UsageUnitEnum.EUR:
        return MobileUsageOverviewConstant.EMPTY;
      case usageBundle.unitType === UsageUnitEnum.NUMBER:
        return UnitConversionEnum.SMS;
      case usageBundle.usedUnitType && isBundleLineUsage:
        return UsageUnitEnum.MB;
      default:
        return usageBundle.unitType;
    }
  }

  private chartConfigurationBuilder(
    productUsage: ProductUsageInterface,
    isUnlimitedPlan: boolean,
    isPVVUsage?: boolean,
    isBundleLineUsage?: boolean,
    isDataPaused?: boolean,
    bucketName?: string,
    foregroundColor?: TextColorEnum,
    isSplitBillBudget?: boolean
  ) {
    const unitType = productUsage.usedUnitType ? productUsage.usedUnitType : productUsage.unitType;
    const icon = isSplitBillBudget ? Icon.USAGE : this.getIconClass(unitType);
    const iconName = isSplitBillBudget
      ? this.translateService.instant(MobileUsageOverviewConstant.ICON_NAME_AMOUNT)
      : this.getIconName(productUsage.unitType, bucketName);
    return new ChartConfigBuilder()
      .setLiquidColor(this.getLiquidColor(productUsage, isUnlimitedPlan, isPVVUsage, isDataPaused))
      .setIconClass(icon)
      .setSubtitle(
        this.getSubtitle(
          isUnlimitedPlan,
          productUsage.usedUnits,
          unitType,
          isPVVUsage,
          isBundleLineUsage,
          isDataPaused,
          isSplitBillBudget
        )
      )
      .setLiquidLevelPercentage(this.getLiquidLevelPercentage(isUnlimitedPlan, productUsage.usedPercentage))
      .setTitleColor(foregroundColor)
      .setSubtitleColor(foregroundColor)
      .setIconColor(foregroundColor)
      .setHideShadow(isDataPaused)
      .setIconName(iconName)
      .setShowBorderWaves(isUnlimitedPlan);
  }

  private getForegroundColor(isUnlimited: boolean, usedPercentage: number): TextColorEnum {
    if (isUnlimited && usedPercentage >= 90) {
      return TextColorEnum.WHITE;
    }
    return TextColorEnum.BLACK;
  }

  private getLiquidColor(
    productUsage: ProductUsageInterface,
    isUnlimitedPlan: boolean,
    isPVVUsage?: boolean,
    isDataPaused?: boolean
  ): LiquidColorEnum {
    return isUnlimitedPlan
      ? this.getLiquidColorForUnlimitedPlan(productUsage)
      : this.getLiquidColorForLimitedPlan(productUsage, isPVVUsage, isDataPaused);
  }

  private getLiquidColorForUnlimitedPlan(productUsage) {
    switch (true) {
      case productUsage.usedPercentage >= 100:
        return LiquidColorEnum.MAROON_WAVE;
      case productUsage.usedPercentage >= 90:
        return LiquidColorEnum.ORANGE_WAVE;
      default:
        return LiquidColorEnum.YELLOW_WAVE;
    }
  }

  private getLiquidColorForLimitedPlan(
    productUsage: ProductUsageInterface,
    isPVVUsage?: boolean,
    isDataPaused?: boolean
  ) {
    switch (true) {
      case isDataPaused:
        return LiquidColorEnum.GREY;
      case !isPVVUsage && productUsage.usedPercentage >= 90:
        return LiquidColorEnum.MAROON;
      case productUsage.usedPercentage >= 75 && productUsage.usedPercentage < 90:
        return LiquidColorEnum.ORANGE;
      default:
        return LiquidColorEnum.YELLOW;
    }
  }

  private getIconClass(unit: string): Icon {
    switch (true) {
      case unit === UsageUnitEnum.GB:
      case unit === UsageUnitEnum.MB:
        return Icon.DATA;
      case unit === UsageUnitEnum.MINUTES:
      case unit === UnitConversionEnum.MINS:
      case unit === UsageUnitEnum.SECONDS:
      case unit === UnitConversionEnum.SECS:
        return Icon.CALLS;
    }
  }

  private getLiquidLevelPercentage(isUnlimited: boolean, usedPercentage: number): number {
    if (isUnlimited) {
      return 100;
    }
    return 100 - usedPercentage;
  }

  private getTitle(
    usageBundle: ProductUsageInterface,
    isUnlimitedPlan: boolean,
    isPVVUsage?: boolean,
    isDataPaused?: boolean,
    isBundleLineUsage?: boolean,
    isSplitBillBudget?: boolean
  ): string {
    if (isDataPaused) {
      return this.translateService.instant(MobileUsageOverviewConstant.SUBTITLE_PAUSED);
    }
    return isUnlimitedPlan || isPVVUsage || isSplitBillBudget
      ? this.getStartUnit(isUnlimitedPlan, usageBundle.unitType, usageBundle, isSplitBillBudget)
      : `${usageBundle.remainingUnits || '0'} ${this.getModifiedUnitType(usageBundle, isBundleLineUsage)}`;
  }

  private getSubtitle(
    isUnlimited: boolean,
    value: string,
    unit: string,
    isPVVUsage?: boolean,
    isBundleLineUsage?: boolean,
    isDataPaused?: boolean,
    isSplitBillBudget?: boolean
  ): string {
    switch (true) {
      case isUnlimited:
      case isDataPaused:
        return this.translateService.instant(MobileUsageOverviewConstant.SUBTITLE_UNLIMITED, {
          value: `${value} ${unit}`,
        });
      case isPVVUsage:
        return this.translateService.instant(MobileUsageOverviewConstant.SUBTITLE_PAY_AS_YOU_GO);
      case isBundleLineUsage:
        return this.translateService.instant(MobileUsageOverviewConstant.SUBTITLE_USED);
      case MobileUsageOverviewConstant.DATA_UNITS.includes(unit):
        return this.translateService.instant(MobileUsageOverviewConstant.SUBTITLE_DATA);
      case MobileUsageOverviewConstant.VOICE_UNITS.includes(unit):
        return this.translateService.instant(MobileUsageOverviewConstant.SUBTITLE_VOICE);
      case isSplitBillBudget:
        return this.translateService.instant(MobileUsageOverviewConstant.SUBTITLE_DATA);
      default:
        return MobileUsageOverviewConstant.EMPTY;
    }
  }

  private getIconName(unit: string, name?: string): string {
    switch (true) {
      case !isEmpty(name):
        return name;
      case unit === UsageUnitEnum.GB:
      case unit === UsageUnitEnum.MB:
        return this.translateService.instant(MobileUsageOverviewConstant.ICON_NAME_DATA);
      case unit === UsageUnitEnum.MINUTES:
      case unit === UnitConversionEnum.MINS:
      case unit === UsageUnitEnum.SECONDS:
      case unit === UnitConversionEnum.SECS:
        return this.translateService.instant(MobileUsageOverviewConstant.ICON_NAME_CALLS);
      default:
        return MobileUsageOverviewConstant.EMPTY;
    }
  }
}
