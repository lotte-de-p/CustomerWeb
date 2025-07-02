import { Component, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { AbstractBaseComponent, PathCategorisationService, UrlService } from '@telenet/ng-lib-page';
import { ProductOverviewConstants } from '../constants/product-overview.constant';
import { ProductOverviewService } from '../services/product-overview.service';
import { MarketingPages } from '../product-overview.component';
import { EventsConstants } from '../constants/events.constant';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
import { GrandFatheringSocialTariffNotificationComponent } from '../grand-fathering-social-tariff-notification/grand-fathering-social-tariff-notification.component';
import { MatDialog } from '@angular/material/dialog';
import { takeUntil } from 'rxjs';
import { PhoneNumberPipe } from '../pipes/phone-number.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { ProductExtraOptionsComponent } from '../product-extra-options/product-extra-options.component';
import { ProductIncludedOptionsComponent } from '../product-included-options/product-included-options.component';
import { ProductSpecificationsComponent } from '../product-specifications/product-specifications.component';
import { NgIf, NgFor, NgTemplateOutlet, NgClass, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'tg-product-standalone',
  templateUrl: './product-standalone.component.html',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    NgTemplateOutlet,
    NgClass,
    ProductSpecificationsComponent,
    ProductIncludedOptionsComponent,
    ProductExtraOptionsComponent,
    TitleCasePipe,
    TranslateModule,
    PhoneNumberPipe,
  ],
})
export class ProductStandaloneComponent extends AbstractBaseComponent {
  @Input() set standAloneProducts(products: Product[]) {
    if (products?.length) {
      this.products = products;
      this.isTelenetBrand =
        this.pathCategorisationService.getCustomerBrand()?.toUpperCase() === ProductOverviewConstants.BRAND_TELENET;
      if (!this.isTelenetBrand) {
        this.splitProducts();
      }
    }
  }
  @Input() hasSalesScope = false;
  @Input() canManageProductHolding = false;
  @Input() changeTariffPlanUrl: string;
  @Input() manageOptionUrl: string;
  @Input() componentInstanceID: string;
  @Input() showStreamingSection = false;
  @Input() marketingPagesObject: MarketingPages;
  @Input() changeMobileTariffUrl: string;
  @Input() changeDTVTariffUrl: string;
  @Input() changeInternetTariffUrl: string;

  mobileProducts: Product[] = [];
  internetProducts: Product[] = [];
  tvProducts: Product[] = [];

  products: Product[];
  mobileProductsVisible: boolean[];
  internetProductsVisible: boolean[];
  tvProductsVisible: boolean[];

  isTelenetBrand!: boolean;

  productTypes = ['mobile', 'internet', 'dtv'];

  constructor(
    private readonly urlService: UrlService,
    private readonly dataLayerService: DataLayerService,
    private readonly pathCategorisationService: PathCategorisationService,
    private readonly productOverviewService: ProductOverviewService,
    private readonly dialog: MatDialog
  ) {
    super();
  }

  splitProducts(): void {
    this.mobileProducts = this.products.filter((product) => product.productType === 'mobile');
    this.internetProducts = this.products.filter((product) => product.productType === 'internet');
    this.tvProducts = this.products.filter((product) => product.productType === 'dtv');

    this.mobileProductsVisible = Array(this.mobileProducts.length).fill(false);
    this.internetProductsVisible = Array(this.internetProducts.length).fill(false);
    this.tvProductsVisible = Array(this.tvProducts.length).fill(false);
  }

  getProductIcon(product: Product): string {
    return this.productOverviewService.getProductIcon(product);
  }

  showChangePlan(product: Product): boolean {
    return (
      this.hasSalesScope && !product.isProductSuspended() && !product.productInfo.isYupProduct && !product.isUnderMove
    );
  }

  showManageOptions(product: Product) {
    const isPrepaid = product.productInfo?.hasCategory?.(ProductOverviewConstants.PREPAID_MOBILE) || false;

    return (isPrepaid || this.canManageProductHolding) && !product.productInfo.isYupProduct && !product.isUnderMove;
  }

  manageOptions(product: Product, e: Event): void {
    e.stopPropagation();
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

  redirectToMarketingPage(product: Product) {
    this.handleMarketingConfiguratorAnalytics(product);
    if (product.hasOldSocialTariffDiscount) {
      return this.redirectToMarketingPageGrandFathering(product.productType);
    } else {
      this.urlService.redirectTo(this.marketingPagesObject[product.productType as keyof MarketingPages]);
    }
  }

  private handleMarketingConfiguratorAnalytics(product: Product) {
    if (this.marketingPagesObject[product.productType]) {
      const eventInfoData = this.dataLayerService.createEventInfo(
        EventsConstants.EVENT_NAME_CHANGE_PLAN_CLICK,
        EventsConstants.EVENT_TYPE_CLICK
      );
      this.productOverviewService.addEventToDataLayer(eventInfoData, this.componentInstanceID);
    }
  }

  private redirectToMarketingPageGrandFathering(productType: string) {
    this.dialog
      .open(GrandFatheringSocialTariffNotificationComponent)
      .afterClosed()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((result: boolean) => {
        if (result) {
          this.urlService.redirectTo(this.marketingPagesObject[productType as keyof MarketingPages]);
        }
      });
  }

  changeTariffPlan(product: Product, e: Event): void {
    let changeTariffUrl = '';
    switch (product.productType) {
      case 'mobile':
        changeTariffUrl = this.changeMobileTariffUrl;
        break;
      case 'internet':
        changeTariffUrl = this.changeInternetTariffUrl;
        break;
      case 'dtv':
        changeTariffUrl = this.changeDTVTariffUrl;
        break;
    }
    if (!changeTariffUrl) {
      changeTariffUrl = this.changeTariffPlanUrl;
    }
    const finalUrl = `${changeTariffUrl}?flow=care&item=${product.identifier}`;
    if (product.hasOldSocialTariffDiscount) {
      return this.changePlanForSocialTariff(e, finalUrl);
    } else {
      e.stopPropagation();
      this.urlService.redirectTo(finalUrl);
    }
  }

  private changePlanForSocialTariff(e: Event, redirectUrl: string) {
    this.dialog
      .open(GrandFatheringSocialTariffNotificationComponent)
      .afterClosed()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((result: boolean) => {
        if (result) {
          e.stopPropagation();
          this.urlService.redirectTo(redirectUrl);
        }
      });
  }

  handleRedirectToMarketingPage(event: KeyboardEvent, product: Product): void {
    if (event.key === EventsConstants.EVENT_KEY_ENTER) {
      this.redirectToMarketingPage(product);
    }
  }

  handleManageOptions(event: KeyboardEvent, product: Product): void {
    if (event.key === EventsConstants.EVENT_KEY_ENTER) {
      this.manageOptions(product, event);
    }
  }
}
