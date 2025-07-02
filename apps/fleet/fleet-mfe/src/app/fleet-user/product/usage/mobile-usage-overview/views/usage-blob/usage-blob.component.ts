import { Component, EventEmitter, Input, OnInit, Output, OnChanges } from '@angular/core';
import { MobileUsageOverviewConstant } from '../../constants/mobile-usage-overview.constant';
import { BlobCardInterface } from '../../interfaces/blob-card.interface';
import { ErrorMessage, MessageService, WarningMessage, SuccessFlowMessageModel } from '@telenet/ng-lib-message';
import { NormalizationService } from '@telenet/ng-lib-page';
import { DomService } from '@telenet/ng-lib-shared';
import flatten from 'lodash-es/flatten';
import isEmpty from 'lodash-es/isEmpty';
import compact from 'lodash-es/compact';
import { MobileUsageChartConfigurationService } from '../../services/mobile-usage-chart-configuration.service';
import { MobileUsageOverviewService } from '../../services/mobile-usage-overview.service';
import { MobileUsageDatalayerService } from '../../services/mobile-usage-datalayer.service';
import { EventNameEnum, EventTypeEnum } from '@telenet/ng-lib-datalayer';
import { AutoPauseUsageModel } from '../../../../../shared/models/auto-pause-usage.model';
import { Usage } from '../../../../../shared/models/usage.model';
import { ProductUsageInterface } from '../../../../../shared/interfaces/product/product-usage.interface';
import { UsageUnitEnum } from '../../../../../shared/enums/usage-unit.enum';
import { DataPauseUsageModel } from '../../../../../shared/models/data-pause-usage.model';
import { UsageQueryParamEnum } from '../../../../../shared/enums/usage-query-param.enum';
import { LiquidChartComponent } from '../../../shared/components/liquid-chart/liquid-chart.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usage-blob',
  standalone: true,
  templateUrl: './usage-blob.component.html',
  imports: [LiquidChartComponent, TranslateModule, SlickCarouselModule, CommonModule],
})
export class UsageBlobComponent implements OnInit, OnChanges {
  @Input() usage: Usage;
  @Input() selectedAccountIdentifier: string;
  @Input() autoPause: AutoPauseUsageModel;
  @Input() componentInstanceID: string;
  @Input() isConnect5Bundle: boolean;
  @Input() enableSB20SBBudget: boolean;
  @Output() messageEvent = new EventEmitter<string[]>();
  @Output() updateUsage = new EventEmitter();

  blobCards: BlobCardInterface[] = [];
  slideConfig = MobileUsageOverviewConstant.CAROUSEL_CONFIG;
  messageGroups: string[] = [];

  constructor(
    private readonly messageService: MessageService,
    private readonly normalizationService: NormalizationService,
    private readonly domService: DomService,
    private readonly mobileUsageChartConfigurationService: MobileUsageChartConfigurationService,
    private readonly mobileUsageOverviewService: MobileUsageOverviewService,
    private readonly mobileUsageDatalayer: MobileUsageDatalayerService,
    private readonly translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.calculateChartConfigs();
  }

  ngOnChanges(): void {
    this.calculateChartConfigs();
  }

  // Needs refactoring
  private calculateChartConfigs(): void {
    this.blobCards = compact(
      flatten(
        MobileUsageOverviewConstant.USAGE_BLOB_TYPES.map((type: string) => {
          if (this.usage.included && !isEmpty(this.usage.included[type])) {
            return this.usage.included[type]
              .filter((productUsage: ProductUsageInterface) => {
                return (
                  productUsage &&
                  (this.usage.isDataUnlimited(productUsage.unitType, productUsage.unlimited) || !productUsage.unlimited)
                );
              })
              .map((productUsage: ProductUsageInterface) => {
                const product = <BlobCardInterface>{
                  name: this.mobileUsageOverviewService.getOptionName(
                    this.usage.productInfo.name,
                    productUsage.name,
                    productUsage.isManual
                  ),
                };
                product.config = this.mobileUsageChartConfigurationService.getChartConfiguration(
                  productUsage,
                  productUsage.unlimited,
                  null,
                  null,
                  null,
                  productUsage.bucketType === MobileUsageOverviewConstant.BUCKET_TYPE_EU_DATA ||
                    productUsage.bucketType === MobileUsageOverviewConstant.BUCKET_EU_DATA ||
                    productUsage.bucketType === MobileUsageOverviewConstant.BUCKET_TYPE_OUTSIDE_EUROPE
                    ? this.mobileUsageOverviewService.getOptionName(
                        this.usage.productInfo.name,
                        productUsage.name,
                        false,
                        productUsage.bucketType === MobileUsageOverviewConstant.BUCKET_TYPE_OUTSIDE_EUROPE
                      )
                    : null
                );
                return product;
              });
          }
        })
      )
    );
    if (this.usage.isLineBundleUsage || this.usage.isGroupBundleUsage) {
      this.getBundleUsageCard();
    }
    this.addPvvCardAndUsageWarnings();

    if (this.enableSB20SBBudget) {
      this.addSplitBillBudgetCard();
    }
  }

  private addPvvCardAndUsageWarnings(): void {
    if (this.usage.productInfo.usageBasedRatePlan) {
      this.blobCards.push(this.getPvvCard());
    }
    if (this.usage.included || this.usage.shared) {
      this.addUsageWarnings();
    }
    this.slideConfig.dots = this.blobCards.length > 1;
  }

  private addSplitBillBudgetCard(): void {
    if (this.usage.splitBillBudget) {
      this.blobCards.unshift(this.getSplitBillBudgetCard());
    }
  }

  private getSplitBillBudgetCard(): BlobCardInterface {
    const splitBillBudgetCard = <BlobCardInterface>{
      name: this.translateService.instant(
        MobileUsageOverviewConstant.KEY_MOBILE_USAGE_OVERVIEW_LABEL +
          MobileUsageOverviewConstant.SPLIT_BILL_BUDGET_LABEL
      ),
    };
    splitBillBudgetCard.config = this.mobileUsageChartConfigurationService.getChartConfiguration(
      this.usage.splitBillBudget,
      false,
      false,
      false,
      false,
      null,
      true
    );
    return splitBillBudgetCard;
  }

  private getPvvCard(): BlobCardInterface {
    const pvvUsageCard = <BlobCardInterface>{
      name: MobileUsageOverviewConstant.EMPTY,
    };
    const pvvUsage = this.usage.outOfBundle as ProductUsageInterface;
    pvvUsage.usedPercentage = 0;
    pvvUsage.remainingUnits = pvvUsage.usedUnits;
    pvvUsage.startUnits = pvvUsage.usedUnits;
    pvvUsageCard.config = this.mobileUsageChartConfigurationService.getChartConfiguration(
      pvvUsage,
      pvvUsage.unlimited,
      this.usage.productInfo.usageBasedRatePlan
    );
    return pvvUsageCard;
  }

  private getBundleUsageCard(): void {
    this.usage.shared[MobileUsageOverviewConstant.USAGE_BLOB_TYPE_DATA].forEach((dataUsage: ProductUsageInterface) => {
      const bundleUsageCard = <BlobCardInterface>{
        name: this.usage.isLineBundleUsage ? MobileUsageOverviewConstant.EMPTY : dataUsage.name,
      };
      const dataToBePaused = this.dataPaused();
      if (this.usage.isLineBundleUsage) {
        dataUsage.remainingUnits = dataUsage.usedUnits;
      }
      bundleUsageCard.config = this.mobileUsageChartConfigurationService.getChartConfiguration(
        dataUsage,
        dataUsage.unlimited,
        this.usage.productInfo.usageBasedRatePlan,
        this.usage.isLineBundleUsage,
        dataToBePaused
      );
      this.blobCards.push(bundleUsageCard);
    });
  }

  private dataPaused() {
    return this.usage.dataPause || (this.autoPause && this.autoPause.isUsageLimitReached());
  }

  private addUsageWarnings(): void {
    this.clearMessages();
    const buckets = !isEmpty(this.usage.shared) ? this.usage.shared : this.usage.included;
    buckets['data']
      .filter((el) => (!isEmpty(this.usage.shared) ? true : this.usage.isDataUnlimited(el.unitType, el.unlimited)))
      .forEach((el) => {
        this.addThresholdMessage(el);
      });
    this.messageEvent.emit(this.messageGroups);
  }

  private addThresholdMessage(productUsage: ProductUsageInterface): void {
    if (productUsage.usedPercentage >= 100) {
      if (this.usage.productInfo.name.substring(0, 4).toLowerCase() !== 'wigo') {
        this.addReachedThresholdMessage(productUsage.startUnits, productUsage.name);
      }
    } else if (productUsage.usedPercentage >= MobileUsageOverviewConstant.BAR_PERCENTAGE_FOR_WARNING) {
      this.addReachingThresholdMessage(productUsage.startUnits, productUsage.name);
    }
  }

  private addReachedThresholdMessage(startUnits: string, label: string): void {
    this.messageService.addMessage(
      new ErrorMessage(this.getMessageGroupName(label), MobileUsageOverviewConstant.REACHED_THRESHOLD_WARNING, {
        value: startUnits + UsageUnitEnum.GB,
        name: this.mobileUsageOverviewService.getOptionName(this.usage.productInfo.name, label),
      })
    );
  }

  private addReachingThresholdMessage(startUnits: string, label: string): void {
    this.messageService.addMessage(
      new WarningMessage(this.getMessageGroupName(label), MobileUsageOverviewConstant.REACHING_THRESHOLD_WARNING, {
        value: startUnits + UsageUnitEnum.GB,
        name: this.mobileUsageOverviewService.getOptionName(this.usage.productInfo.name, label),
      })
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

  public pauseUnpauseUsage(dataPause: boolean): void {
    this.messageService.clearMessages(MobileUsageOverviewConstant.CUSTOM_MESSAGE_GROUP_NAME);
    const request: DataPauseUsageModel = {
      dataPause: dataPause,
    };
    const paramsMap = new Map<UsageQueryParamEnum, string>();
    paramsMap.set(UsageQueryParamEnum.MSISDN, this.selectedAccountIdentifier);
    this.mobileUsageOverviewService
      .updateDataUsagePauseInfo(MobileUsageOverviewConstant.CUSTOM_MESSAGE_GROUP_NAME, request, paramsMap)
      .subscribe(() => {
        this.pauseUnpauseAnalytics(dataPause);
        this.mobileUsageOverviewService
          .getDataUsagePauseInfo(MobileUsageOverviewConstant.CUSTOM_MESSAGE_GROUP_NAME, paramsMap)
          // eslint-disable-next-line rxjs/no-nested-subscribe
          .subscribe((dataPauseResponse: DataPauseUsageModel) => {
            this.usage.dataPause = dataPauseResponse.dataPause;
            this.calculateChartConfigs();
            this.updateUsage.emit(this.usage);
            this.messageService.addMessage(
              new SuccessFlowMessageModel(
                MobileUsageOverviewConstant.CUSTOM_MESSAGE_GROUP_NAME,
                dataPause ? MobileUsageOverviewConstant.DATA_PAUSE_MSG : MobileUsageOverviewConstant.DATA_UNPAUSE_MSG
              )
            );
            this.domService.scrollToTop();
          });
      });
  }

  pauseUnpauseAnalytics(dataPause: boolean): void {
    this.mobileUsageDatalayer.addEvent(
      dataPause ? EventNameEnum.EVENT_NAME_MOBILE_USAGE_PAUSED : EventNameEnum.EVENT_NAME_MOBILE_USAGE_UNPAUSED,
      EventTypeEnum.EVENT_TYPE_CLICK,
      this.componentInstanceID
    );
  }
}
