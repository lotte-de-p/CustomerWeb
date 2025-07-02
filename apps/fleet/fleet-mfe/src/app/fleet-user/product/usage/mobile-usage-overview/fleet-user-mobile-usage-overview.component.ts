import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { AbstractBaseComponent, LoaderModule } from '@telenet/ng-lib-page';
import { MobileUsageOverviewConstant } from './constants/mobile-usage-overview.constant';
import { LoginModule, LoginService } from '@telenet/ng-lib-ocapi';
import { ErrorMessage, InfoFlowMessage, MessageService, MessagesModule } from '@telenet/ng-lib-message';
import { MobileUsageDatalayerService } from './services/mobile-usage-datalayer.service';
import { EventNameEnum, EventTypeEnum } from '@telenet/ng-lib-datalayer';
import isEmpty from 'lodash-es/isEmpty';
import forEach from 'lodash-es/forEach';
import get from 'lodash-es/get';
import { DomService } from '@telenet/ng-lib-shared';
import { MobileUsageOverviewService } from './services/mobile-usage-overview.service';
import { ZBRType } from './enums/zbr.enum';
import { Usage } from '../../../shared/models/usage.model';
import { ProductSubscriptionsInterface } from '../../../shared/interfaces/product/product-subscriptions.interface';
import { ProductPendingOperationsInterface } from '../../../shared/interfaces/product/product-pending-operations.interface';
import { AccountSelectorService } from '../../../shared/services/account-selector.service';
import { MobileService } from '../../../shared/services/mobile.service';
import { FleetUserProductService } from '../../../shared/services/product/fleet-user-product.service';
import { DataPauseUsageModel } from '../../../shared/models/data-pause-usage.model';
import { UsageQueryParamEnum } from '../../../shared/enums/usage-query-param.enum';
import { AccountSelectorConstants } from '../../../shared/constants/account-selector.constant';
import { ProductUsageInterface } from '../../../shared/interfaces/product/product-usage.interface';
import { UsageBlobComponent } from './views/usage-blob/usage-blob.component';
import { ConsumptionDataComponent } from './views/consumption-data/consumption-data.component';
import { BundleCardComponent } from './views/bundle-card/bundle-card.component';
import { CommonModule } from '@angular/common';
import { AutoPauseUsageModel } from '../../../shared/models/auto-pause-usage.model';
import { BundleLineSelectorComponent } from '../shared/components/bundle-line-selector/bundle-line-selector.component';
import { CustomerProductHolding } from '../../../shared/models/customer-product-holding.model';

@Component({
  selector: 'tg-fleet-user-mobile-usage-overview',
  standalone: true,
  templateUrl: './fleet-user-mobile-usage-overview.component.html',
  imports: [
    LoginModule,
    LoaderModule,
    MessagesModule,
    UsageBlobComponent,
    ConsumptionDataComponent,
    BundleCardComponent,
    CommonModule,
    BundleLineSelectorComponent,
  ],
})
export class FleetUserMobileUsageOverviewComponent extends AbstractBaseComponent {
  @Input() usageDetailsLink: string;
  @Input() showCardView = false;
  @Input() cardTitle: string = MobileUsageOverviewConstant.TITLE;
  @Input() componentInstanceID: string;
  @Input() pageType: string;
  @Input() enableLoader: boolean;
  @Input() enableMask: boolean;
  @Input() showSharedBundleLineSelector: string;
  @Input() isConnect5Bundle: boolean;

  @Input() set enableSB20SBBudget(value: string) {
    this.isSB20SBBudgetEnabled = value.toUpperCase() === 'TRUE';
  }

  messageGroupName = MobileUsageOverviewConstant.MESSAGE_GROUP_NAME;
  customMessageGroupName = MobileUsageOverviewConstant.CUSTOM_MESSAGE_GROUP_NAME;
  scopes = MobileUsageOverviewConstant.SCOPES;
  selectedAccountIdentifier: string;
  mobileUsage: Usage;
  messageGroupNames: string[];
  hasMobileProduct: boolean;
  mobile: ProductSubscriptionsInterface;
  mobileAutoPause: AutoPauseUsageModel;
  pendingOperations: ProductPendingOperationsInterface[];
  mobileUsageRetrieved = false;
  hasNotActiveAndPendingActivationMobileLines: boolean;
  isProductStatusLoaded = false;
  isSB20SBBudgetEnabled: boolean;

  constructor(
    private readonly loginService: LoginService,
    private readonly accountSelectorService: AccountSelectorService,
    private readonly messageService: MessageService,
    private readonly mobileUsageDatalayer: MobileUsageDatalayerService,
    private readonly cdr: ChangeDetectorRef,
    private readonly domService: DomService,
    private readonly mobileUsageOverviewService: MobileUsageOverviewService,
    private readonly mobileService: MobileService,
    private readonly productService: FleetUserProductService
  ) {
    super();
  }

  initAfterLoggedIn(): void {
    this.loadProductStatus();
  }

  getBundleLines(bundleLines: ProductSubscriptionsInterface[]): void {
    this.mobileUsageOverviewService.getUsageForProductSubscriptions(bundleLines).subscribe((usages: Usage[]) => {
      usages.forEach((usage, index) => {
        if (usage) {
          const currentAccount = bundleLines[index];
          currentAccount.usage = usage;
          currentAccount.usage.isGroupBundleUsage = this.mobileUsageOverviewService.isGroupBundle(currentAccount);
          currentAccount.usage.isLineBundleUsage = !this.mobileUsageOverviewService.isGroupBundle(currentAccount);
          this.bundleLineSelected(currentAccount);
        }
      });
    });
  }

  setMessageGroups(messageGroups: string[]): void {
    this.messageGroupNames = messageGroups;
  }

  updateUsage(updatedUsage: Usage): void {
    this.mobileUsage = updatedUsage;
  }

  private loadProductStatus(): void {
    this.obs(
      this.productService.getAllProducts(
        MobileUsageOverviewConstant.MESSAGE_GROUP_PRODUCTS,
        MobileUsageOverviewConstant.PRODUCTS_STATUS
      )
    ).subscribe({
      next: (products: CustomerProductHolding[]): void => {
        this.isProductStatusLoaded = true;
        if (this.showCardView) {
          this.hasMobileProduct = this.checkMobileProduct(products);
          this.hasNotActiveAndPendingActivationMobileLines =
            this.checkNotActiveAndPendingActivationMobileLines(products);
          if (this.hasMobileProduct) {
            this.getLoggedInAccount();
          }
        } else {
          this.setBundleLoaded();
          this.profilePendingOperations();
          this.loadSelectedAccount();
        }
      },
    });
  }

  private checkMobileProduct(productHoldings: CustomerProductHolding[]): boolean {
    return this.hasStandaloneMobileProduct(productHoldings) || this.hasBundleMobileProduct(productHoldings);
  }

  private hasStandaloneMobileProduct(productHoldings: CustomerProductHolding[]): boolean {
    return productHoldings
      .filter((product: CustomerProductHolding) => !product.productType || !product.isBundleProduct())
      .some(
        (product: CustomerProductHolding) =>
          !product.productType || this.hasProducts(MobileUsageOverviewConstant.MOBILE, product)
      );
  }

  private hasBundleMobileProduct(productHoldings: CustomerProductHolding[]): boolean {
    return productHoldings
      .filter((product: CustomerProductHolding) => product.isBundleProduct())
      .some((product: CustomerProductHolding) => this.hasProducts(MobileUsageOverviewConstant.MOBILE, product));
  }

  private checkNotActiveAndPendingActivationMobileLines(productHoldings: CustomerProductHolding[]): boolean {
    if (!this.hasActiveMobileLines(productHoldings)) {
      return this.hasMobileLinesNotActivated(productHoldings);
    }
  }

  private hasActiveMobileLines(productHoldings: CustomerProductHolding[]) {
    return productHoldings.some(
      (p) =>
        p.hasProductTypeAndStatus(MobileUsageOverviewConstant.MOBILE, [
          MobileUsageOverviewConstant.PRODUCT_STATUS_ACTIVE,
        ]) ||
        p.options.some(
          (o) =>
            o.productType === MobileUsageOverviewConstant.MOBILE &&
            o.status === MobileUsageOverviewConstant.PRODUCT_STATUS_ACTIVE
        )
    );
  }

  private hasMobileLinesNotActivated(productHoldings: CustomerProductHolding[]) {
    return productHoldings.some(
      (p) =>
        p.hasProductTypeAndStatus(MobileUsageOverviewConstant.MOBILE, [
          MobileUsageOverviewConstant.PRODUCT_STATUS_PENDING,
        ]) ||
        p.options.some(
          (o) =>
            o.productType === MobileUsageOverviewConstant.MOBILE &&
            o.status === MobileUsageOverviewConstant.PRODUCT_STATUS_PENDING
        )
    );
  }

  private hasProducts(productType: string, productHolding: CustomerProductHolding) {
    return productHolding.hasProductTypeAndStatus(productType, [
      MobileUsageOverviewConstant.PRODUCT_STATUS_ACTIVE,
      MobileUsageOverviewConstant.PRODUCT_STATUS_SUSPENDED,
      MobileUsageOverviewConstant.PRODUCT_STATUS_PENDING,
      MobileUsageOverviewConstant.PRODUCT_STATUS_ACTIVATION_PASSED_PONR,
    ]);
  }

  private setBundleLoaded(): void {
    this.accountSelectorService.getMobileUsageRetrieved().subscribe((response: boolean) => {
      this.mobileUsageRetrieved = response;
    });
  }

  private bundleLineSelected(bundleLine: ProductSubscriptionsInterface): void {
    this.selectedAccountIdentifier = bundleLine.identifier;
    if (!isEmpty(bundleLine.usage)) {
      this.mobileUsage = bundleLine.usage;
      this.loadAutoPause();
    }
    this.cdr.detectChanges();
  }

  private loadSelectedAccount(): void {
    this.obs(this.accountSelectorService.getSelectedAccount()).subscribe({
      next: (response: ProductSubscriptionsInterface) => {
        this.mobile = response;
        if (this.mobile) {
          this.selectedAccountIdentifier = this.mobile.msisdn;
          if (!isEmpty(response.usage)) {
            this.mobileUsage = response.usage;
          }
          if (get(this.mobile, 'usage.productInfo.isEligibleForPauseProfile') && this.selectedAccountIdentifier) {
            this.getDataPauseUsage();
          }
          this.loadAutoPause();
          this.showPendingOperationsWarning();
          if (
            !this.mobileUsageRetrieved ||
            this.mobile.productType !== MobileUsageOverviewConstant.PRODUCT_TYPE_BUNDLE
          ) {
            this.getMobileUsage(response);
          }
          this.mobileUsageRetrieved = true;
          this.accountSelectorService.setMobileUsageRetrieved(this.mobileUsageRetrieved);
          this.cdr.detectChanges();
        }
      },
      error: (error) => {
        this.handleAccountSelectorError(error);
      },
    });
    this.domService.scrollToTop();
  }

  private profilePendingOperations(): void {
    this.productService
      .getPendingOperations(MobileUsageOverviewConstant.MESSAGE_GROUP_NAME)
      .subscribe((response: ProductPendingOperationsInterface[]) => {
        this.pendingOperations = response;
      });
  }

  private getDataPauseUsage(): void {
    const paramsMap = new Map<UsageQueryParamEnum, string>();
    paramsMap.set(UsageQueryParamEnum.MSISDN, this.selectedAccountIdentifier);
    this.mobileService
      .getDataUsagePauseInfo(MobileUsageOverviewConstant.MESSAGE_GROUP_NAME, paramsMap)
      .subscribe((response: DataPauseUsageModel) => {
        this.mobile['usage']['dataPause'] = response.dataPause;
      });
  }

  private showPendingOperationsWarning(): void {
    const productIdentifier = this.mobile.bundleIdentifier ? this.mobile.bundleIdentifier : this.mobile.identifier;
    this.messageService.clearMessages(MobileUsageOverviewConstant.CUSTOM_MESSAGE_GROUP_NAME);
    forEach(this.pendingOperations, (product) => {
      if (product.productIdentifierValue === productIdentifier) {
        if (product.pendingOperationType === MobileUsageOverviewConstant.UPGRADE) {
          this.messageService.addMessage(
            new InfoFlowMessage(
              MobileUsageOverviewConstant.CUSTOM_MESSAGE_GROUP_NAME,
              MobileUsageOverviewConstant.UPGRADE_WARNING
            )
          );
        }
        if (product.pendingOperationType === MobileUsageOverviewConstant.DOWNGRADE) {
          this.messageService.addMessage(
            new InfoFlowMessage(
              MobileUsageOverviewConstant.CUSTOM_MESSAGE_GROUP_NAME,
              MobileUsageOverviewConstant.DOWNGRADE_WARNING
            )
          );
        }
      }
    });
  }

  private handleAccountSelectorError(error): void {
    if (!error.serviceError) {
      this.messageService.addMessage(
        new ErrorMessage(this.messageGroupName, 'account-selector.error.empty-' + error.keyLabel)
      );
    } else {
      const messages = this.messageService.getMessagesByGroupName(AccountSelectorConstants.MESSAGE_GROUP);
      if (messages[0]) {
        const serviceErrorKey = messages && messages[0].key;
        this.messageService.clearMessages(AccountSelectorConstants.MESSAGE_GROUP);
        this.messageService.clearMessages(this.customMessageGroupName);
        this.messageService.addMessage(new ErrorMessage(this.messageGroupName, serviceErrorKey));
      }
    }
  }

  private getLoggedInAccount(): void {
    if (this.showSharedBundleLineSelector !== 'true') {
      this.obs(this.loginService.getLoginDetails()).subscribe((response) => {
        this.selectedAccountIdentifier = response.username.replace(/(\+32)/, '0');
        const selectedLine = {
          productType: MobileUsageOverviewConstant.PRODUCT_TYPE_MOBILE,
          identifier: this.selectedAccountIdentifier,
        };
        this.getMobileUsage(selectedLine as ProductSubscriptionsInterface);
      });
    }
  }

  private getMobileUsage(usage): void {
    this.obs(this.mobileUsageOverviewService.getUsageForProductSubscriptions([usage])).subscribe(
      (response: Usage[]) => {
        this.mobileUsage = response[0];
        if (this.mobileUsage && this.mobileUsage.included) {
          this.mobileUsage.addManuallyConfiguredSpec();
          this.convertMobileUsageUnits();
          this.mobileUsageOverviewService.addCommonBuckets(this.mobileUsage);
        }
        this.pushDataToAnalytics();
        this.cdr.detectChanges();
      }
    );
  }

  private convertMobileUsageUnits(): void {
    MobileUsageOverviewConstant.ALL_CONSUMPTION_DATA_TYPES.forEach((type) => {
      this.mobileUsage.included[type] = this.mobileUsage.included[type].map((productUsage) => {
        return this.mobileUsage.convertUnits(productUsage);
      });
    });

    this.mobileUsage.options.forEach((option) => {
      MobileUsageOverviewConstant.ALL_CONSUMPTION_DATA_TYPES.forEach((type) => {
        option[type] = option[type].map((productUsage: ProductUsageInterface) => {
          return this.mobileUsage.convertUnits(productUsage);
        });
      });
    });
  }

  private pushDataToAnalytics(): void {
    let attributes = '';
    if (this.mobileUsage.included) {
      const usageFreeEU = this.checkInternationalStandaloneMobileLines();
      if (usageFreeEU) {
        attributes = MobileUsageOverviewConstant.INTERNATIONAL;
      }
    }
    if (this.mobileUsage.shared) {
      const sharedusageFreeEU = this.mobileUsage.shared.ZBR.find((z) => z.name === ZBRType.INTERNATIONAL);
      if (sharedusageFreeEU) {
        attributes = MobileUsageOverviewConstant.INTERNATIONAL;
      }
    }
    if (this.mobileUsage.outOfBundle && this.mobileUsage.outOfBundle.usedUnits !== '0') {
      attributes += isEmpty(attributes)
        ? MobileUsageOverviewConstant.OUT_OF_BUNDLE
        : ',' + MobileUsageOverviewConstant.OUT_OF_BUNDLE;
    }
    if (this.mobileUsage.isUnlimitedPlan) {
      attributes += isEmpty(attributes)
        ? MobileUsageOverviewConstant.UNLIMITED_PLAN
        : ',' + MobileUsageOverviewConstant.UNLIMITED_PLAN;
    }
    this.mobileUsageDatalayer.addEvent(
      EventNameEnum.EVENT_NAME_MOBILE_USAGE,
      EventTypeEnum.EVENT_TYPE_VIEW_MOBILE_USAGE,
      this.componentInstanceID,
      { itemName: attributes }
    );
  }

  private checkInternationalStandaloneMobileLines(): boolean {
    return !!(
      this.mobileUsage.included.data.find((d) => d?.bucketType === ZBRType.INTERNATIONAL_DATA) ||
      this.mobileUsage.included.text.find((t) => t?.bucketType === ZBRType.INTERNATIONAL_TEXT) ||
      this.mobileUsage.included.voice.find((v) => v?.bucketType === ZBRType.INTERNATIONAL_CALL)
    );
  }

  private loadAutoPause(): void {
    if (
      this.mobile &&
      this.mobile.productInfo &&
      (this.mobile.productInfo.isEligibleForAutoPause || this.mobile.productInfo.isEligibleForSettinglimits) &&
      this.selectedAccountIdentifier
    ) {
      this.mobileUsageOverviewService
        .getAutoPause(this.messageGroupName, this.selectedAccountIdentifier)
        .subscribe((response) => {
          this.mobileAutoPause.limit = response.limit;
          this.mobileAutoPause.id = response.id;
        });
    }
  }
}
