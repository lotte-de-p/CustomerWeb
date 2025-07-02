import { Component, Input, OnInit } from '@angular/core';
import { Option, Product } from '../models/product.model';
import { BundleC5Contants } from '../constants/bundle-c5.constant';
import { ProductIconConstants } from '../constants/product-icon.constant';
import { ProductOverviewConstants } from '../constants/product-overview.constant';
import { AbstractBaseComponent, UrlService } from '@telenet/ng-lib-page';
import { DataLayerService, EventTypeEnum } from '@telenet/ng-lib-datalayer';
import { ProductOverviewService } from '../services/product-overview.service';
import { PhoneToGo } from '../interfaces/phone-to-go.interface';
import { GrandFatheringSocialTariffNotificationComponent } from '../grand-fathering-social-tariff-notification/grand-fathering-social-tariff-notification.component';
import { takeUntil } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { EventsConstants } from '../constants/events.constant';
import { TranslateModule } from '@ngx-translate/core';
import { ProductC5BundleChildComponent } from './product-c5-bundle-child/product-c5-bundle-child.component';
import { NgFor, NgIf, NgClass } from '@angular/common';

export interface BundleC5Section {
  title: string;
  productTypes: string[];
  showPlanLevelIncludedOptions: boolean;
  showPlanLevelNonIncludedOptions: boolean;
  type: string;
  showSection?: boolean;
}

@Component({
  selector: 'tg-product-c5-bundle',
  templateUrl: './product-c5-bundle.component.html',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, ProductC5BundleChildComponent, TranslateModule],
})
export class ProductC5BundleComponent extends AbstractBaseComponent implements OnInit {
  c5Sections: BundleC5Section[] = BundleC5Contants.C5_SECTIONS;
  products: Product[];

  @Input() showStreamingSection = false;
  @Input() canManageProductHolding = false;
  @Input() hasSalesScope = false;
  @Input() planUpgradeUrl: string;
  @Input() changeDataPlanUrl: string;
  @Input() managePhone2GoUrl: string;
  @Input() intentRequired: boolean;
  @Input() manageOptionUrl: string;
  @Input() phoneToGoNumbers: PhoneToGo[];
  @Input() componentInstanceID: string;
  @Input() streamingOptions: Option[];
  @Input() changeTariffPlanUrl: string;

  isSuspendedPlan = false;

  @Input() set setSelectedProducts(selectedProducts: Product[]) {
    selectedProducts.forEach((product) => this.updateC5Sections(product));
    this.products = selectedProducts;
    this.isSuspendedPlan = this.products.some((product) => product.isProductSuspended());
  }

  constructor(
    private readonly urlService: UrlService,
    private readonly datalayerService: DataLayerService,
    private readonly productOverviewService: ProductOverviewService,
    private readonly dialog: MatDialog
  ) {
    super();
  }

  ngOnInit() {
    this.isNewOneUpBundle();
  }

  isNewOneUpBundle() {
    let isNewOneUpBundle = false;
    this.products?.some((product) => {
      if (product.productInfo.chars) {
        isNewOneUpBundle = product.productInfo.chars.some(
          (char) => char.key.includes(ProductOverviewConstants.NEW_ONEUP_BUNDLE_KEY) && char.values.includes('true')
        );
      }
    });
    return isNewOneUpBundle;
  }

  updateC5Sections(product: Product) {
    this.c5Sections.forEach((section) => {
      switch (section.type) {
        case 'connectivity':
          section.showSection =
            this.hasSpecifiedProductTypes(section, product) || this.hasPlanLevelOptions(section, product);
          break;
        case 'entertainment':
          section.showSection = this.hasSpecifiedProductTypes(section, product);
          break;
        case 'includedOptions':
          section.showSection = this.hasPlanLevelOptions(section, product);
          break;
        case 'streaming':
          section.showSection = this.showStreamingSection;
          break;
      }
    });
  }

  manageOptions(product: Product, isBundle?: boolean, isEntertainment?: boolean): void {
    if (product) {
      const eventInfoData = this.productOverviewService.getClickEventInfoData(product);
      this.productOverviewService.addEventToDataLayer(eventInfoData, this.componentInstanceID);
    }

    let url = `${this.manageOptionUrl}?item=${product.identifier}&flow=${ProductOverviewConstants.PRODUCT_OPTIONS}`;

    if (isBundle) {
      if (isEntertainment) {
        url += '&producttype=bundle&category=dtv';
      } else {
        url += product.productType ? '&producttype=bundle&category=' + product.productType : '&producttype=bundle';
      }
    } else if (product && product.productType) {
      url += '&producttype=' + product.productType;
    }
    if (product && product.status === ProductOverviewConstants.STATUS_NOT_ACTIVE) {
      url += '&productcode=' + product.productInfo.externalProductCode;
    } else if (product && product.upgradePossibleTo) {
      url += '&productcode=' + product.upgradePossibleTo;
    }

    this.urlService.redirectTo(url);
  }

  hasSpecifiedProductTypes(section: BundleC5Section, product: Product): boolean {
    return product.children.some((child) => {
      return this.isProductAllowed(section, child);
    });
  }

  hasPlanLevelOptions(section: BundleC5Section, product: Product): boolean {
    return product.options.some((option) => {
      return this.showPlanLevelOption(section, option);
    });
  }

  isProductAllowed(section: BundleC5Section, product: Product): boolean {
    return section.productTypes.includes(product.productType);
  }

  showPlanLevelOption(section: BundleC5Section, option: Option): boolean {
    return (
      (!option.isIncludedOption && section.showPlanLevelNonIncludedOptions) ||
      ((option.isIncludedOption || false) &&
        section.showPlanLevelIncludedOptions &&
        (option.status === 'NOT_ACTIVE' ||
          this.isSecurityOption(option) ||
          BundleC5Contants.SHOW_ALWAYS_OPTIONS.includes(option.productInfo.externalProductCode || '')))
    );
  }

  isSecurityOption(option: Option): boolean {
    return option.productInfo?.subCategory?.name === ProductIconConstants.SUBCATEGORY_SECURITY;
  }

  showManageOptions(product: Product) {
    let isPrepaid = false;

    if (product.productInfo.categories?.length) {
      isPrepaid = product.productInfo.categories.some((item) => {
        return item.toUpperCase() === ProductOverviewConstants.PREPAID_MOBILE.toUpperCase();
      });
    }

    return (isPrepaid || this.canManageProductHolding) && !product.productInfo.isYupProduct && !product.isUnderMove;
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

  redirectToMarketingConfigurator(url: string, intent: string, plan: Product, eventName: string) {
    this.handleMarketingConfiguratorAnalytics(eventName);
    if (plan.hasOldSocialTariffDiscount) {
      this.changePlanForSocialTariff(url, intent, plan);
    } else {
      !this.intentRequired || !this.isNewOneUpBundle()
        ? this.urlService.redirectTo(url + '?installationLocationId=' + plan.locationId)
        : this.urlService.redirectTo(url + '?intent=' + intent + '&installationLocationId=' + plan.locationId);
    }
  }
  private handleMarketingConfiguratorAnalytics(eventName: string) {
    const eventInfoData = this.datalayerService.createEventInfo(eventName, EventTypeEnum.EVENT_TYPE_CLICK);
    this.productOverviewService.addEventToDataLayer(eventInfoData, this.componentInstanceID);
  }
  private changePlanForSocialTariff(url: string, intent: string, plan: Product) {
    this.dialog
      .open(GrandFatheringSocialTariffNotificationComponent)
      .afterClosed()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((result: boolean) => {
        if (result) {
          this.urlService.redirectTo(this.composeMarketingConfiguratorUrl(url, intent, plan));
        }
      });
  }

  private composeMarketingConfiguratorUrl(url: string, intent: string, plan: Product) {
    return !this.intentRequired || !this.isNewOneUpBundle()
      ? url + '?installationLocationId=' + plan.locationId
      : url + '?intent=' + intent + '&installationLocationId=' + plan.locationId;
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

  handleManageOptions(event: KeyboardEvent, product: Product, isBundle?: boolean, isEntertainment?: boolean): void {
    if (event.key === EventsConstants.EVENT_KEY_ENTER) {
      this.manageOptions(product, isBundle, isEntertainment);
    }
  }
}
