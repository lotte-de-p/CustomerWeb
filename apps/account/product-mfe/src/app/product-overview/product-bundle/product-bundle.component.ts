import { Component, Input } from '@angular/core';
import { Product, Option } from '../models/product.model';
import { AbstractBaseComponent, UrlService } from '@telenet/ng-lib-page';
import { ProductOverviewConstants } from '../constants/product-overview.constant';
import { DataLayerService, EventTypeEnum } from '@telenet/ng-lib-datalayer';
import { ProductOverviewService } from '../services/product-overview.service';
import { GrandFatheringSocialTariffNotificationComponent } from '../grand-fathering-social-tariff-notification/grand-fathering-social-tariff-notification.component';
import { takeUntil } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { EventsConstants } from '../constants/events.constant';
import { TranslateModule } from '@ngx-translate/core';
import { ProductBundleChildComponent } from './product-bundle-child/product-bundle-child.component';
import { NgFor, NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'tg-product-bundle',
  templateUrl: './product-bundle.component.html',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, ProductBundleChildComponent, TranslateModule],
})
export class ProductBundleComponent extends AbstractBaseComponent {
  @Input() products: Product[] = [];
  @Input() hasSalesScope = false;
  @Input() canManageProductHolding = false;
  @Input() changeTariffPlanUrl: string;
  @Input() manageOptionUrl: string;
  @Input() componentInstanceID: string;
  @Input() streamingOptions: Option[];
  @Input() planUpgradeUrl: string;
  @Input() intentRequired: boolean;

  constructor(
    private readonly urlService: UrlService,
    private readonly dataLayerService: DataLayerService,
    private readonly productOverviewService: ProductOverviewService,
    private readonly dialog: MatDialog
  ) {
    super();
  }

  showChangePlan(product: Product): boolean {
    return (
      this.hasSalesScope && !product.isProductSuspended() && !product.productInfo.isYupProduct && !product.isUnderMove
    );
  }

  hasActiveOrSuspendedProducts(plan: Product): boolean {
    return (
      (plan.children &&
        plan.children.length &&
        plan.children.some((val) => val.status === ProductOverviewConstants.ACTIVE_STATUS)) ||
      plan.children.some((val) => val.status === ProductOverviewConstants.SUSPENDED_STATUS)
    );
  }

  showManageOptions(product: Product) {
    const isPrepaid = product.productInfo?.hasCategory?.(ProductOverviewConstants.PREPAID_MOBILE) || false;

    return (isPrepaid || this.canManageProductHolding) && !product.productInfo.isYupProduct && !product.isUnderMove;
  }

  changeTariffPlan(productIdentifier: string): void {
    this.urlService.redirectTo(`${this.changeTariffPlanUrl}?flow=care&item=${productIdentifier}`);
  }

  manageOptions(product: Product): void {
    if (product) {
      const eventInfoData = this.productOverviewService.getClickEventInfoData(product);
      this.productOverviewService.addEventToDataLayer(eventInfoData, this.componentInstanceID);
    }

    let url = `${this.manageOptionUrl}?item=${product.identifier}&flow=${ProductOverviewConstants.PRODUCT_OPTIONS}`;

    if (product && product.productType) {
      url += '&producttype=' + product.productType;
    }
    if (product && product.status === ProductOverviewConstants.STATUS_NOT_ACTIVE) {
      url += '&productcode=' + product.productInfo.externalProductCode;
    } else if (product && product.upgradePossibleTo) {
      url += '&productcode=' + product.upgradePossibleTo;
    }

    this.urlService.redirectTo(url);
  }

  redirectToMarketingConfigurator(url: string, intent: string, plan: Product, eventName: string) {
    this.handleMarketingConfiguratorAnalytics(eventName);
    if (plan.hasOldSocialTariffDiscount) {
      this.changePlanForSocialTariff(url, intent, plan);
    } else {
      !this.intentRequired || intent === ''
        ? this.urlService.redirectTo(url + '?installationLocationId=' + plan.locationId)
        : this.urlService.redirectTo(url + '?intent=' + intent + '&installationLocationId=' + plan.locationId);
    }
  }

  private handleMarketingConfiguratorAnalytics(eventName: string) {
    const eventInfoData = this.dataLayerService.createEventInfo(eventName, EventTypeEnum.EVENT_TYPE_CLICK);
    this.productOverviewService.addEventToDataLayer(eventInfoData, this.componentInstanceID);
  }

  private changePlanForSocialTariff(url: string, intent: string, plan: Product) {
    this.dialog
      .open(GrandFatheringSocialTariffNotificationComponent)
      .afterClosed()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((result: boolean) => {
        if (result) {
          this.urlService.redirectTo(this.composeSocialTariffDiscountUrl(url, intent, plan));
        }
      });
  }

  private composeSocialTariffDiscountUrl(url: string, intent: string, plan: Product) {
    return !this.intentRequired || intent === ''
      ? url + '?installationLocationId=' + plan.locationId
      : url + '?intent=' + intent + '&installationLocationId=' + plan.locationId;
  }

  getIntent(product: Product): string {
    return product.bundleType !== 'WIGO' ? 'connectivity' : '';
  }

  sortChildren(children: Product[]): Product[] {
    return [...children].sort((a, b) => {
      return (a.productSpec?.weight || 0) - (b.productSpec?.weight || 0);
    });
  }

  handleManageOptions(event: KeyboardEvent, product: Product): void {
    if (event.key === EventsConstants.EVENT_KEY_ENTER) {
      this.manageOptions(product);
    }
  }

  handleRedirectToMarketingConfigurator(
    event: KeyboardEvent,
    url: string,
    intent: string,
    plan: Product,
    eventName: string
  ): void {
    if (event.key === EventsConstants.EVENT_KEY_ENTER) {
      this.redirectToMarketingConfigurator(url, intent, plan, eventName);
    }
  }
}
