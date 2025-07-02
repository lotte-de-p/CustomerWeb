import { Component, Input } from '@angular/core';
import { Product, Option } from '../../models/product.model';
import { UrlService } from '@telenet/ng-lib-page';
import { ProductOverviewConstants } from '../../constants/product-overview.constant';
import { DataLayerService, EventTypeEnum } from '@telenet/ng-lib-datalayer';
import { ProductOverviewService } from '../../services/product-overview.service';
import { cloneDeep } from 'lodash-es';
import { EventsConstants } from '../../constants/events.constant';
import { PhoneNumberPipe } from '../../pipes/phone-number.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { ProductSpecificationsComponent } from '../../product-specifications/product-specifications.component';
import { NgClass, NgIf } from '@angular/common';
@Component({
  selector: 'tg-product-bundle-child',
  templateUrl: './product-bundle-child.component.html',
  standalone: true,
  imports: [NgClass, NgIf, ProductSpecificationsComponent, TranslateModule, PhoneNumberPipe],
})
export class ProductBundleChildComponent {
  @Input() set productOrOption({ product, option }: { product?: Product; option?: Option }) {
    if (product) {
      this.product = product;
    }
    if (!product && option) {
      /// STILLTOCHECK
      const derefdOption = cloneDeep(option);
      this.product = new Product();
      this.product.productInfo = derefdOption.productInfo;
      this.product.options = [derefdOption];
      this.product.status = derefdOption.status;
      this.product.productType = derefdOption.productType || '';
      this.product.productInfo.services?.forEach((serv) => {
        serv.specifications?.forEach((spec) => (spec.productType = derefdOption.productType));
      });
    }
  }
  @Input() plan: Product;
  @Input() hasSalesScope = false;
  @Input() canManageProductHolding = false;
  @Input() changeTariffPlanUrl: string;
  @Input() manageOptionUrl: string;
  @Input() componentInstanceID: string;
  @Input() streamingOptions: Option[];
  @Input() planUpgradeUrl: string;
  @Input() intentRequired: boolean;

  product: Product;

  constructor(
    private readonly urlService: UrlService,
    private readonly dataLayerService: DataLayerService,
    private readonly productOverviewService: ProductOverviewService
  ) {}

  getProductIcon(): string {
    return this.productOverviewService.getProductIcon(this.product);
  }

  showChangePlan(product: Product): boolean {
    return (
      this.hasSalesScope && !product.isProductSuspended() && !product.productInfo.isYupProduct && !product.isUnderMove
    );
  }

  hasActiveOrSuspendedProducts(plan: Product): boolean {
    return (
      (plan &&
        plan.children &&
        plan.children.length &&
        plan.children.some((val: Product) => val.status === ProductOverviewConstants.ACTIVE_STATUS)) ||
      plan.children.some((val: Product) => val.status === ProductOverviewConstants.SUSPENDED_STATUS)
    );
  }

  showManageOptions() {
    let isPrepaid = false;

    if (this.plan?.productInfo.categories?.length) {
      isPrepaid = this.plan?.productInfo.categories.some((item: string) => {
        return item.toUpperCase() === ProductOverviewConstants.PREPAID_MOBILE.toUpperCase();
      });
    }

    return (
      (isPrepaid || this.canManageProductHolding) && !this.plan?.productInfo.isYupProduct && !this.plan?.isUnderMove
    );
  }

  changeTariffPlan(productIdentifier: string): void {
    this.urlService.redirectTo(`${this.changeTariffPlanUrl}?flow=care&item=${productIdentifier}`);
  }

  manageOptions(planIdentifier: string, product: Product, isBundle?: boolean): void {
    if (product) {
      const eventInfoData = this.productOverviewService.getClickEventInfoData(product);
      this.productOverviewService.addEventToDataLayer(eventInfoData, this.componentInstanceID);
    }

    let url = `${this.manageOptionUrl}?item=${planIdentifier}&flow=${ProductOverviewConstants.PRODUCT_OPTIONS}`;

    if (isBundle) {
      url += product.productType ? '&producttype=bundle&category=' + product.productType : '&producttype=bundle';
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

  redirectToOrderSimSalesFlow(
    url: string,
    flow: string,
    intent: string,
    identifier: string,
    productType: string,
    locationId: string | undefined,
    eventName: string
  ) {
    const eventInfoData = this.dataLayerService.createEventInfo(eventName, EventTypeEnum.EVENT_TYPE_CLICK);
    this.productOverviewService.addEventToDataLayer(eventInfoData, this.componentInstanceID);
    this.urlService.redirectTo(
      url +
        '?flow=' +
        flow +
        '&intent=' +
        intent +
        '&item=' +
        identifier +
        '&producttype=' +
        productType +
        '&locationId=' +
        locationId
    );
  }

  handleManageOptions(event: KeyboardEvent, planIdentifier: string, product: Product, isBundle?: boolean): void {
    if (event.key === EventsConstants.EVENT_KEY_ENTER) {
      this.manageOptions(planIdentifier, product, isBundle);
    }
  }

  handleRedirectToOrderSimSalesFlow(
    event: KeyboardEvent,
    url: string,
    flow: string,
    intent: string,
    identifier: string,
    productType: string,
    locationId: string | undefined,
    eventName: string
  ): void {
    if (event.key === EventsConstants.EVENT_KEY_ENTER) {
      this.redirectToOrderSimSalesFlow(url, flow, intent, identifier, productType, locationId, eventName);
    }
  }
}
