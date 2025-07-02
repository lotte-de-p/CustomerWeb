import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { MobileUsageOverviewConstant } from '../../constants/mobile-usage-overview.constant';
import { OptionInterface } from '@telenet/ng-lib-sofy';
import { MessageService, WarningMessage } from '@telenet/ng-lib-message';
import { NormalizationService } from '@telenet/ng-lib-page';
import { ZBRType } from '../../enums/zbr.enum';
import isUndefined from 'lodash-es/isUndefined';
import isEmpty from 'lodash-es/isEmpty';
import map from 'lodash-es/map';
import filter from 'lodash-es/filter';
import { MobileUsageChartConfigurationService } from '../../services/mobile-usage-chart-configuration.service';
import { MobileUsageOverviewService } from '../../services/mobile-usage-overview.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Usage } from '../../../../../shared/models/usage.model';
import { AutoPauseUsageModel } from '../../../../../shared/models/auto-pause-usage.model';
import { ProductUsageInterface } from '../../../../../shared/interfaces/product/product-usage.interface';
import { SharedInterface } from '../../../../../shared/interfaces/shared.interface';
import { CommonModule, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-consumption-data',
  standalone: true,
  templateUrl: './consumption-data.component.html',
  imports: [NgTemplateOutlet, TranslateModule, CommonModule],
})
export class ConsumptionDataComponent implements OnInit, OnChanges {
  @Input() usage: Usage;
  @Input() enableSBBudget: boolean;
  @Input() autoPause: AutoPauseUsageModel;
  @Output() messageEvent = new EventEmitter<string[]>();

  consumptionData: ProductUsageInterface[] = [];
  messageGroups: string[] = [];

  readonly USAGE_TYPES: string[] = ['DATA', 'SMS', 'TEXT', 'VOICE'];
  readonly DATA_BUCKET_TYPES: string[] = ['Data National', 'Data EU', 'Data NAT/EU'];
  protected readonly MobileUsageOverviewConstant = MobileUsageOverviewConstant;

  constructor(
    private readonly mobileUsageOverviewService: MobileUsageOverviewService,
    private readonly messageService: MessageService,
    private readonly normalizationService: NormalizationService,
    private readonly mobileUsageChartConfigurationService: MobileUsageChartConfigurationService,
    private readonly translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.calculateConsumptionData();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ngOnChanges(changes: SimpleChanges): void {
    this.calculateConsumptionData();
  }

  calculateConsumptionData(): void {
    this.consumptionData = [];
    this.clearMessages();
    // @ts-ignore
    const bundles: SharedInterface[] = !isEmpty(this.usage.shared)
      ? [this.usage.shared]
      : [this.usage.included, ...this.usage.options];
    bundles.forEach((bundle: SharedInterface) => {
      this.buildConsumptionData(bundle);
      if (bundle.option && this.usage.isGroupBundleUsage) {
        this.buildConsumptionData(bundle.option);
      }
    });
  }

  private buildConsumptionData(bundle: SharedInterface | OptionInterface): void {
    this.getConsumptionDataTypesForLine().forEach((type) => {
      if (bundle && !isEmpty(bundle[type])) {
        this.updateConsumptionDataUnits(bundle, type);
        this.consumptionData = [...this.consumptionData, ...bundle[type]];
      }
    });
    if (bundle && !isEmpty(bundle[MobileUsageOverviewConstant.USAGE_TYPE_ZBR])) {
      this.consumptionData = [
        ...this.consumptionData,
        ...this.getZBRUsage(bundle[MobileUsageOverviewConstant.USAGE_TYPE_ZBR]),
      ];
    }
    if (!isEmpty(this.messageGroups)) {
      this.messageEvent.emit(this.messageGroups);
    }
  }

  private getConsumptionDataTypesForLine(): string[] {
    return MobileUsageOverviewConstant.ALL_CONSUMPTION_DATA_TYPES;
  }

  private getZBRUsage(ZBRUsages: ProductUsageInterface[]): ProductUsageInterface[] {
    return filter(
      map(ZBRUsages, (usage) => {
        if (usage.usedPercentage >= 95 && usage.usedPercentage < 100 && usage.name === ZBRType.NATIONAL) {
          this.addReachingThresholdMessage(usage.name);
        } else if (usage.usedPercentage >= 100) {
          this.addReachedThresholdMessage(usage.name);
        }
        return usage;
      }),
      (usage) => {
        return usage.usedPercentage > 0 || isUndefined(usage.usedPercentage);
      }
    );
  }

  isShowTotalZBR(data: ProductUsageInterface): boolean {
    return (
      data.name === ZBRType.INTERNATIONAL ||
      (data.name === ZBRType.NATIONAL && data.usedPercentage && data.usedPercentage >= 95)
    );
  }

  convertToSeconds(seconds: string): string {
    if (seconds) {
      // eslint-disable-next-line radix
      seconds = seconds.length > 1 ? seconds : (parseInt(seconds) * 10).toFixed(0);
      // eslint-disable-next-line radix
      return (parseInt(seconds) * MobileUsageOverviewConstant.CONVERT_TO_SECONDS).toFixed(0);
    }
    return '0';
  }

  updateConsumptionDataUnits(bundle: SharedInterface | OptionInterface, type: string): void {
    bundle[type] = bundle[type].map((productUsage: ProductUsageInterface) => {
      productUsage.name = this.mobileUsageOverviewService.getOptionName(
        this.usage.productInfo.name,
        productUsage.name,
        productUsage.isManual
      );
      productUsage.startUnits = this.mobileUsageChartConfigurationService.getStartUnit(
        this.hasUnlimitedUsage(productUsage),
        productUsage.unitType,
        productUsage
      );
      productUsage.unitType = this.mobileUsageChartConfigurationService.getModifiedUnitType(productUsage);
      return productUsage;
    });
  }

  hasUnlimitedUsage(productUsage: ProductUsageInterface) {
    if (productUsage.name === 'VOICE' || productUsage.name === 'TEXT') {
      return this.usage.productInfo?.services
        .filter((service) => service.serviceType === 'MOBILE_CALLING')
        .map((service) => service.specifications)
        .flat()
        .some((spec) => productUsage.name.toLowerCase() === spec.labelKey && spec.value === 'unlimited');
    }
    return productUsage.unlimited;
  }

  getExtraUsages(): ProductUsageInterface[] {
    return this.usage.extraUsages.filter(
      (extraUsage) => extraUsage.bucketType === MobileUsageOverviewConstant.BUCKET_TYPE_SPLIT_BILL_CAP
    );
  }

  getUsageTypeLabelKey(data: ProductUsageInterface): string {
    if (this.USAGE_TYPES.indexOf(data.name) > -1) {
      return this.translateService.instant('ng.fleet-user-mobile-usage-overview.lbl.' + data.name.toLowerCase());
    }
    if (this.DATA_BUCKET_TYPES.indexOf(data.bucketType) > -1) {
      return this.translateService.instant('ng.fleet-user-mobile-usage-overview.lbl.' + this.toBucketTypeKey(data));
    }
    return data.name;
  }

  private toBucketTypeKey(data: ProductUsageInterface) {
    return data.bucketType.replace(/\/|\s/g, '-').toLowerCase();
  }

  getUsageTypeIcon(data: ProductUsageInterface): string {
    switch (data.name) {
      case 'TEXT':
      case 'SMS':
        return 'language';
      case 'VOICE':
        return 'telephone';
      case 'DATA':
        return 'data';
    }
    return this.DATA_BUCKET_TYPES.indexOf(data.bucketType) > -1 ? 'data' : 'none';
  }

  private addReachedThresholdMessage(label: string): void {
    this.messageService.addMessage(
      new WarningMessage(
        this.getMessageGroupName(label),
        label === ZBRType.NATIONAL
          ? MobileUsageOverviewConstant.NATIONAL_ZBR_REACHED_THRESHOLD_WARNING
          : MobileUsageOverviewConstant.INTERNATIONAL_ZBR_REACHED_THRESHOLD_WARNING
      )
    );
  }

  private addReachingThresholdMessage(label: string): void {
    this.messageService.addMessage(
      new WarningMessage(
        this.getMessageGroupName(label),
        MobileUsageOverviewConstant.NATIONAL_ZBR_REACHING_THRESHOLD_WARNING
      )
    );
  }

  private getMessageGroupName(label: string): string {
    const messageGroupName = this.normalizationService.normalizeKey(label);
    this.messageGroups.push(messageGroupName);
    return messageGroupName;
  }

  private clearMessages(): void {
    this.messageGroups.forEach((messageGroupName) => {
      this.messageService.clearMessages(messageGroupName);
    });
    this.messageGroups = [];
  }

  getUsedUnitsAndUnitType(data: ProductUsageInterface) {
    return data.usedUnits + ' ' + this.getUnitType(data);
  }

  private getUnitType(data: ProductUsageInterface) {
    return data.usedUnitType ? data.usedUnitType : data.unitType;
  }
}
