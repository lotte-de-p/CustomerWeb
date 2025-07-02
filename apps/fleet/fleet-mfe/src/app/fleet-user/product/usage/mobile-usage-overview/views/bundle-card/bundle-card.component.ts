import { CommonModule, DOCUMENT } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Inject, Input, OnInit } from '@angular/core';
import { LoginDetails, LoginService } from '@telenet/ng-lib-ocapi';
import { MobileUsageOverviewConstant } from '../../constants/mobile-usage-overview.constant';
import { BundleCard } from '../../models/bundle-card.model';
import { DeviceTypesEnum, MediaQueryService } from '@telenet/ng-lib-page';
import { MobileUsageChartConfigurationService } from '../../services/mobile-usage-chart-configuration.service';
import sortBy from 'lodash-es/sortBy';
import first from 'lodash-es/first';
import flatten from 'lodash-es/flatten';
import isEmpty from 'lodash-es/isEmpty';
import orderBy from 'lodash-es/orderBy';
import get from 'lodash-es/get';
import { MobileUsageOverviewService } from '../../services/mobile-usage-overview.service';
import { ProductSubscriptionsInterface } from '../../../../../shared/interfaces/product/product-subscriptions.interface';
import { FleetUserProductService } from '../../../../../shared/services/product/fleet-user-product.service';
import { AbstractCardComponent } from '../../../shared/components/abstract-card/abstract-card.component';
import { AccountSelectorConstants } from '../../../../../shared/constants/account-selector.constant';
import { ProductTypeEnum } from '../../../../../shared/enums/product-type.enum';
import { ProductConstants } from '../../../../../shared/constants/product/product.constant';
import { Usage } from '../../../../../shared/models/usage.model';
import { ProductUsageInterface } from '../../../../../shared/interfaces/product/product-usage.interface';
import { ChartConfiguration } from '../../../shared/components/liquid-chart/models/chart-configuration';
import { LineViewComponent } from './partials/line-view/line-view.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { LiquidChartComponent } from '../../../shared/components/liquid-chart/liquid-chart.component';
import { TranslateModule } from '@ngx-translate/core';
import { GroupViewComponent } from './partials/group-view/group-view.component';

@Component({
  selector: 'app-bundle-card',
  standalone: true,
  templateUrl: './bundle-card.component.html',
  imports: [
    LineViewComponent,
    SlickCarouselModule,
    LiquidChartComponent,
    TranslateModule,
    GroupViewComponent,
    CommonModule,
  ],
})
export class BundleCardComponent extends AbstractCardComponent implements OnInit, AfterViewInit {
  @Input() mobileUsageOverviewURL = '';
  @Input() cardTitle: string;
  @Input() hasMobileProduct: boolean;
  @Input() hasNotActiveAndPendingActivationMobileLines: boolean;
  loginDetails: LoginDetails;
  mobileLines: ProductSubscriptionsInterface[];
  bundleCards: BundleCard[] = [];
  bundleCardsMobile: BundleCard[] = [];
  selectedAccounts: ProductSubscriptionsInterface[] = [];
  commonBundleAccounts: ProductSubscriptionsInterface[] = [];
  slickConfig = Object.assign({}, MobileUsageOverviewConstant.CAROUSEL_CONFIG);
  slickConfigMobile = Object.assign({}, MobileUsageOverviewConstant.CAROUSEL_CONFIG);
  showErrorCard = false;
  isMobileView: boolean;
  isBundle = false;

  constructor(
    private readonly loginService: LoginService,
    private readonly productService: FleetUserProductService,
    private readonly cdr: ChangeDetectorRef,
    private readonly mediaQueryService: MediaQueryService,
    private readonly mobileUsageChartConfigurationService: MobileUsageChartConfigurationService,
    private readonly mobileUsageOverviewService: MobileUsageOverviewService,
    @Inject(DOCUMENT) document: Document,
    _elementRef: ElementRef
  ) {
    super(_elementRef, document);
  }

  ngOnInit() {
    if (this.hasMobileProduct) {
      this.isMobileView = this.mediaQueryService.getDeviceName() === DeviceTypesEnum.MOBILE;
      this.obs(this.loginService.getLoginDetails()).subscribe((loginDetails) => {
        this.loginDetails = loginDetails;
        if (!this.hasNotActiveAndPendingActivationMobileLines) {
          this.loadMobileLines();
        }
      });
    }
  }

  ngAfterViewInit() {
    if (!this.hasMobileProduct) {
      this.hideCard();
    } else {
      setTimeout(() => this.disableCardClickEvent('#fleet-user-mobile-usage-overview'));
    }
  }

  loadMobileLines(): void {
    this.productService
      .getProductLinesByType(
        MobileUsageOverviewConstant.MESSAGE_GROUP_NAME,
        AccountSelectorConstants.PRODUCT_TYPE_MOBILE
      )
      .subscribe({
        next: (mobileLines: ProductSubscriptionsInterface[]) => {
          if (isEmpty(mobileLines)) {
            this.hideCard();
          } else {
            this.isBundle = mobileLines[0].productType === ProductTypeEnum.BUNDLE.toLowerCase();
            this.moveLoggedinLineToFirstPosition(mobileLines);
            this.commonBundleAccounts = this.filterBundleAccounts();
            this.selectedAccounts = this.selectedAccounts.concat(this.commonBundleAccounts);
            this.selectedAccounts = this.selectedAccounts.concat(
              this.mobileLines.filter((line) => line.productType === ProductConstants.PRODUCT_TYPE_MOBILE)
            );
            this.fetchUsagesData();
          }
        },
        error: () => {
          this.showErrorCard = true;
        },
      });
  }

  private moveLoggedinLineToFirstPosition(mobileLines: ProductSubscriptionsInterface[]): void {
    this.mobileLines = sortBy(mobileLines, (line) => line.identifier);
    const loggedInLine = this.mobileLines.splice(
      this.mobileLines.findIndex((el) => el.identifier === this.loginDetails.username.replace(/(\+32)/, '0')),
      1
    );
    this.mobileLines.splice(0, 0, loggedInLine[0]);
  }

  setSlickConfig(): void {
    this.slickConfigMobile.dots = this.bundleCardsMobile.length > 1;
    this.slickConfigMobile.arrows = false;

    this.slickConfig.dots = this.bundleCards.length > 1;
    this.slickConfig.arrows = this.bundleCards.length > 1;
    this.slickConfig['nextArrow'] =
      '<div class="cards-slider-button arrow arrow--right slick-arrow cursor--pointer" aria-disabled="false"></div>';
    this.slickConfig['prevArrow'] =
      '<div class="cards-slider-button arrow arrow--left slick-arrow cursor--pointer" aria-disabled="false"></div>';
    this.cdr.detectChanges();
  }

  getUsageDetailsUrl(card: BundleCard): string {
    const delimiter = this.mobileUsageOverviewURL.includes('?') ? '&' : '?';
    return card.lineIdentifier
      ? this.mobileUsageOverviewURL + delimiter + AccountSelectorConstants.IDENTIFIER + '=' + card.lineIdentifier
      : this.mobileUsageOverviewURL;
  }

  private filterBundleAccounts(): ProductSubscriptionsInterface[] {
    const bundleAccounts = sortBy(
      this.mobileLines.filter((productSubscription) => {
        return productSubscription.productType === ProductConstants.PRODUCT_TYPE_BUNDLE;
      }),
      'usage.shared.data[0].usedUnits'
    ).reverse();

    if ((this.loginDetails.isMaster() || this.loginDetails.isContractHolder()) && bundleAccounts.length > 0) {
      const groupBundle = {
        label: MobileUsageOverviewConstant.GROUP_VIEW,
        productType: ProductConstants.PRODUCT_TYPE_BUNDLE,
        bundleIdentifier: first(bundleAccounts).bundleIdentifier,
        description: first(bundleAccounts).label,
      } as ProductSubscriptionsInterface;
      bundleAccounts.splice(0, 0, groupBundle);
    }

    return bundleAccounts;
  }

  private fetchUsagesData(): void {
    this.mobileUsageOverviewService
      .getUsageForProductSubscriptions(this.selectedAccounts)
      .subscribe((usages: Usage[]) => {
        if (usages.includes(null)) {
          this.showErrorCard = true;
        } else {
          usages.forEach((usage, index) => {
            if (get(usage, 'shared.data') && usage.shared.data.length > 1) {
              usage.shared.data = orderBy(usage.shared.data, ['name'], ['desc']);
            }
            const currentAccount = this.selectedAccounts[index];
            this.convertMobileUsageUnits(usage);
            this.mobileUsageOverviewService.addCommonBuckets(usage);
            currentAccount.usage = usage;
            currentAccount.usage.isGroupBundleUsage = this.mobileUsageOverviewService.isGroupBundle(currentAccount);
            currentAccount.usage.isLineBundleUsage = !this.mobileUsageOverviewService.isGroupBundle(currentAccount);
            this.calculateBundleCard(currentAccount);
          });
          this.setSlickConfig();
        }
      });
  }

  private convertMobileUsageUnits(usage: Usage): void {
    if (usage.included) {
      MobileUsageOverviewConstant.ALL_CONSUMPTION_DATA_TYPES.forEach((type) => {
        if (usage.included[type]) {
          usage.included[type] = usage.included[type].map((productUsage) => {
            return usage.convertUnits(productUsage);
          });
        }
      });
    }

    if (usage.options) {
      usage.options.forEach((option) => {
        MobileUsageOverviewConstant.ALL_CONSUMPTION_DATA_TYPES.forEach((type) => {
          if (option[type]) {
            option[type] = option[type].map((productUsage: ProductUsageInterface) => {
              return usage.convertUnits(productUsage);
            });
          }
        });
      });
    }
  }

  private calculateBundleCard(account: ProductSubscriptionsInterface): void {
    const bundleCard = new BundleCard();
    const isTypeBundle = account.productType === ProductConstants.PRODUCT_TYPE_BUNDLE;
    bundleCard.isGroupView = this.mobileUsageOverviewService.isGroupBundle(account);
    bundleCard.bundleName = account.usage.productInfo.labelKey;
    bundleCard.nextUpdateDate = account.usage.daysForNextBill;
    if (!bundleCard.isGroupView) {
      bundleCard.lineIdentifier = account.identifier;
    }
    if (bundleCard.isGroupView) {
      bundleCard.hasTableView = true;
      bundleCard.bundleTableData = this.commonBundleAccounts.slice(1);
    }
    if (account.usage.outOfBundle.usedUnits !== '0') {
      bundleCard.outOfBundle = account.usage.outOfBundle.usedUnits;
    }
    bundleCard.redirectionUrl = this.getUsageDetailsUrl(bundleCard);
    bundleCard.chartConfigs = this.calculateChartConfigs(account.usage, isTypeBundle);
    this.calculateBundleCardsForMobileView(bundleCard);
    this.bundleCards.push(bundleCard);
  }

  private calculateBundleCardsForMobileView(bundleCard: BundleCard): void {
    if (isEmpty(bundleCard.chartConfigs) && bundleCard) {
      const mobileCard = this.getNewMobileCard(bundleCard);
      this.bundleCardsMobile.push(mobileCard);
      return;
    }

    if (bundleCard) {
      bundleCard.chartConfigs.forEach((chartConfig: ChartConfiguration) => {
        const mobileCard = this.getNewMobileCard(bundleCard);
        mobileCard.chartConfig = chartConfig;
        this.bundleCardsMobile.push(mobileCard);
      });
    }

    if (bundleCard.hasTableView) {
      const mobileCard = this.getNewMobileCard(bundleCard);
      mobileCard.hasTableView = bundleCard.hasTableView;
      mobileCard.bundleTableData = bundleCard.bundleTableData;
      this.bundleCardsMobile.push(mobileCard);
    }
  }

  private getNewMobileCard(bundleCard: BundleCard): BundleCard {
    const mobileCard = new BundleCard();
    mobileCard.bundleName = bundleCard.bundleName;
    mobileCard.lineIdentifier = bundleCard.lineIdentifier;
    mobileCard.nextUpdateDate = bundleCard.nextUpdateDate;
    mobileCard.isGroupView = bundleCard.isGroupView;
    mobileCard.redirectionUrl = bundleCard.redirectionUrl;
    mobileCard.outOfBundle = bundleCard.outOfBundle;
    return mobileCard;
  }

  private calculateChartConfigs(usage: Usage, isTypeBundle: boolean): ChartConfiguration[] {
    const chartConfigs = isTypeBundle ? this.getBundleUsageChartConfig(usage) : this.getMobileUsageChartConfig(usage);
    if (chartConfigs.length > MobileUsageOverviewConstant.MAX_BLOB_ON_CARD_VIEW) {
      chartConfigs.splice(MobileUsageOverviewConstant.MAX_BLOB_ON_CARD_VIEW);
    }

    return chartConfigs;
  }

  private getMobileUsageChartConfig(usage: Usage): ChartConfiguration[] {
    const chartConfigs = flatten(
      MobileUsageOverviewConstant.USAGE_BLOB_TYPES.map((type: string) => {
        return usage.included[type]
          .filter((productUsage: ProductUsageInterface) => {
            return (
              productUsage &&
              (usage.isDataUnlimited(productUsage.unitType, productUsage.unlimited) || !productUsage.unlimited)
            );
          })
          .map((productUsage: ProductUsageInterface) => {
            return this.mobileUsageChartConfigurationService.getChartConfiguration(
              productUsage,
              productUsage.unlimited,
              null,
              null,
              null,
              productUsage.bucketType === MobileUsageOverviewConstant.BUCKET_TYPE_EU_DATA ||
                productUsage.bucketType === MobileUsageOverviewConstant.BUCKET_EU_DATA ||
                productUsage.bucketType === MobileUsageOverviewConstant.BUCKET_TYPE_OUTSIDE_EUROPE
                ? this.mobileUsageOverviewService.getOptionName(
                    usage.productInfo.name,
                    productUsage.name,
                    false,
                    productUsage.bucketType === MobileUsageOverviewConstant.BUCKET_TYPE_OUTSIDE_EUROPE
                  )
                : null
            );
          });
      })
    );
    if (usage.productInfo.usageBasedRatePlan) {
      chartConfigs.push(this.getPvvUsage(usage));
    }

    return chartConfigs;
  }

  private getBundleUsageChartConfig(usage: Usage): ChartConfiguration[] {
    const bundleUsage = first(usage.shared[MobileUsageOverviewConstant.USAGE_BLOB_TYPE_DATA]);
    if (usage.isLineBundleUsage) {
      bundleUsage.usedPercentage = 0;
      bundleUsage.remainingUnits = bundleUsage.usedUnits;
    }
    const chartConfig = this.mobileUsageChartConfigurationService.getChartConfiguration(
      bundleUsage,
      bundleUsage.unlimited,
      usage.productInfo.usageBasedRatePlan,
      usage.isLineBundleUsage,
      usage.dataPause
    );

    return [chartConfig];
  }

  private getPvvUsage(usage: Usage): ChartConfiguration {
    const pvvUsage = usage.outOfBundle as ProductUsageInterface;
    pvvUsage.usedPercentage = 0;
    pvvUsage.remainingUnits = pvvUsage.usedUnits;
    pvvUsage.startUnits = pvvUsage.usedUnits;
    return this.mobileUsageChartConfigurationService.getChartConfiguration(
      pvvUsage,
      pvvUsage.unlimited,
      usage.productInfo.usageBasedRatePlan
    );
  }
}
