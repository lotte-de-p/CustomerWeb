import { Component, Input } from '@angular/core';
import { ProductOverviewService } from '../../services/product-overview.service';
import { Option, Product } from '../../models/product.model';
import { BundleC5Section } from '../product-c5-bundle.component';
import { PhoneToGo } from '../../interfaces/phone-to-go.interface';
import { UrlService } from '@telenet/ng-lib-page';
import { DataLayerService, EventTypeEnum } from '@telenet/ng-lib-datalayer';
import { ProductOverviewConstants } from '../../constants/product-overview.constant';
import { OmapiProduct, SpecificationInterface } from '@telenet/ng-lib-omapi';
import { ProductIconConstants } from '../../constants/product-icon.constant';
import { EventsConstants } from '../../constants/events.constant';
import { cloneDeep } from 'lodash-es';
import { PhoneNumberPipe } from '../../pipes/phone-number.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { ProductExtraOptionsComponent } from '../../product-extra-options/product-extra-options.component';
import { ProductIncludedOptionsComponent } from '../../product-included-options/product-included-options.component';
import { ProductOptionsSpecificationsComponent } from '../../product-options-specifications/product-options-specifications.component';
import { ProductLevelSpecificationsComponent } from '../../product-level-specifications/product-level-specifications.component';
import { ProductC5MobileSpecificationsComponent } from '../product-c5-mobile-specifications/product-c5-mobile-specifications.component';
import { NgClass, NgIf, NgFor, LowerCasePipe, DatePipe } from '@angular/common';

@Component({
  selector: 'tg-product-c5-bundle-child',
  templateUrl: './product-c5-bundle-child.component.html',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    NgFor,
    ProductC5MobileSpecificationsComponent,
    ProductLevelSpecificationsComponent,
    ProductOptionsSpecificationsComponent,
    ProductIncludedOptionsComponent,
    ProductExtraOptionsComponent,
    LowerCasePipe,
    DatePipe,
    TranslateModule,
    PhoneNumberPipe,
  ],
})
export class ProductC5BundleChildComponent {
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
    // This is to use them properly in the 'getBundleSpecifications' function
    // STILLTOCHECK we should rethink the whole specifications stuff, to do it on a higher level
    this.specifications = this.product.productInfo.getSortedSpecifications();
  }

  @Input() section: BundleC5Section;
  @Input() phoneToGoNumbers: PhoneToGo[];
  @Input() intentRequired: boolean;
  @Input() componentInstanceID: string;
  @Input() canManageProductHolding = false;
  @Input() plan: Product;
  @Input() manageOptionUrl: string;
  @Input() planUpgradeUrl: string;
  @Input() changeDataPlanUrl: string;
  @Input() managePhone2GoUrl: string;
  @Input() changeTariffPlanUrl: string;

  product: Product;
  specifications: SpecificationInterface[];
  showFeature = false;
  PREPAID_MOBILE = ProductOverviewConstants.PREPAID_MOBILE;

  constructor(
    private readonly urlService: UrlService,
    private readonly dataLayerService: DataLayerService,
    private readonly productOverviewService: ProductOverviewService
  ) {}

  getProductIcon(): string {
    return this.productOverviewService.getProductIcon(this.product);
  }

  redirectToMarketingConfigurator(
    url: string,
    intent: string,
    locationId: string,
    eventName: string,
    bundleType?: string
  ) {
    const eventInfoData = this.dataLayerService.createEventInfo(eventName, EventTypeEnum.EVENT_TYPE_CLICK);
    this.productOverviewService.addEventToDataLayer(eventInfoData, this.componentInstanceID);
    if (bundleType === ProductOverviewConstants.BUNDLE_TYPE_C5 && !this.intentRequired) {
      this.urlService.redirectTo(url + '?installationLocationId=' + locationId);
    } else {
      this.urlService.redirectTo(url + '?intent=' + intent + '&installationLocationId=' + locationId);
    }
  }

  showManageOptionsButton(plan: Product, section: BundleC5Section, product: Product) {
    return (
      (this.showManageOptions(plan) && section.type !== 'entertainment' && section.type !== 'includedOptions') ||
      (section.type === 'includedOptions' && product.productType !== 'telephone' && product.productType !== 'mobile') ||
      section.type === 'streaming'
    );
  }

  showManageOptions(product: Product): boolean {
    let isPrepaid = false;

    if (product.productInfo.categories?.length) {
      isPrepaid = product.productInfo.categories.some((item) => {
        return item.toUpperCase() === ProductOverviewConstants.PREPAID_MOBILE.toUpperCase();
      });
    }

    return (isPrepaid || this.canManageProductHolding) && !product.productInfo.isYupProduct && !product.isUnderMove;
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

  hasActiveOrSuspendedProducts(plan: Product): boolean {
    return (
      (plan.children &&
        plan.children.length &&
        plan.children.some((val) => val.status === ProductOverviewConstants.ACTIVE_STATUS)) ||
      plan.children.some((val) => val.status === ProductOverviewConstants.SUSPENDED_STATUS)
    );
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

  shouldDisplayChangeDataPlan() {
    return this.changeDataPlanUrl && this.isNewOneBundle();
  }

  isNewOneBundle() {
    const bundleSpecs = this.getBundleSpecifications();
    return bundleSpecs && this.hasBothLimitedAndUnlimitedSpecs(bundleSpecs);
  }

  getBundleSpecifications() {
    return this.specifications?.filter((spec) => {
      switch (this.product.productType) {
        case 'internet':
          return spec.serviceType === 'fixed_internet';
        case 'mobile':
          return this.filterMobileSpecs(spec);
        case 'dtv':
          return spec.serviceType === 'dtv';
        case 'telephone':
          return spec.serviceType === 'fixed_calling';
        case 'streaming':
          return spec.serviceType === 'streaming';
        default:
          return false;
      }
    });
  }

  isNetflixProductActivationInProgress(): boolean {
    return (
      (this.product.productInfo.productId?.includes(ProductIconConstants.STREAMING_PRODUCT_PREFIX) || false) &&
      this.product.isProductActivationInProgress()
    );
  }

  filterMobileSpecs(spec: SpecificationInterface): boolean {
    if (this.product.productInfo.productType === 'data-only-mobile-line') {
      return spec.serviceType === 'mobile_internet';
    }
    return spec.serviceType === 'mobile_internet' || spec.serviceType === 'mobile_calling';
  }

  hasBothLimitedAndUnlimitedSpecs(specs: SpecificationInterface[]) {
    const limitedIndex = specs.findIndex((spec) => spec.labelKey.includes('mobile-data-allowance-limited'));
    const unlimitedIndex = specs.findIndex((spec) => spec.labelKey.endsWith('mobile-data-allowance-unlimited'));

    return limitedIndex !== -1 && unlimitedIndex !== -1;
  }

  addPlanDetailViewEventInDataLayer() {
    if (this.showFeature && this.product.productInfo) {
      const eventInfoData = this.dataLayerService.createEventInfo(
        EventsConstants.EVENT_NAME_TARIFF_PLAN,
        EventsConstants.EVENT_TYPE_VIEW_PRODUCT_DETAILS
      );
      const attributes: Record<string, unknown[]> = {};

      if (this.product.productInfo.productType === 'bundle') {
        const spec = this.product.productSpec as OmapiProduct;
        attributes[EventsConstants.EVENT_ATTRIBUTE_PRODUCT] = this.getViewedProducts(spec);
      } else {
        attributes[EventsConstants.EVENT_ATTRIBUTE_PRODUCT] = this.getViewedProducts(this.product.productInfo);
      }

      this.productOverviewService.addEventToDataLayer(eventInfoData, this.componentInstanceID, attributes);
    }
  }

  getViewedProducts(
    productInfo: OmapiProduct
  ): { productInfo: { productType: string | undefined; productID: string | undefined } }[] {
    if (productInfo) {
      const product = {
        productInfo: {
          productType: productInfo.productType,
          productID: productInfo.externalProductCode,
        },
      };
      return [product];
    }

    return [];
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === EventsConstants.EVENT_KEY_ENTER) {
      this.showFeature = !this.showFeature;
      this.addPlanDetailViewEventInDataLayer();
    }
  }

  handleRedirectToMarketingConfigurator(
    event: KeyboardEvent,
    url: string,
    intent: string,
    locationId: string,
    eventName: string,
    bundleType?: string
  ): void {
    if (event.key === EventsConstants.EVENT_KEY_ENTER) {
      this.redirectToMarketingConfigurator(url, intent, locationId, eventName, bundleType);
    }
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
