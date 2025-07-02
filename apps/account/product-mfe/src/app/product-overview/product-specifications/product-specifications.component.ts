import { Component, Input } from '@angular/core';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { Product } from '../models/product.model';
import { ProductOverviewConstants } from '../constants/product-overview.constant';
import { UrlService } from '@telenet/ng-lib-page';
import { EventsConstants } from '../constants/events.constant';
import { ProductOverviewService } from '../services/product-overview.service';
import { PhoneNumberPipe } from '../pipes/phone-number.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { ProductExtraOptionsComponent } from '../product-extra-options/product-extra-options.component';
import { ProductIncludedOptionsComponent } from '../product-included-options/product-included-options.component';
import { ProductOptionsSpecificationsComponent } from '../product-options-specifications/product-options-specifications.component';
import { ProductLevelSpecificationsComponent } from '../product-level-specifications/product-level-specifications.component';
import { NgClass, NgIf, NgFor, LowerCasePipe, DatePipe } from '@angular/common';

@Component({
  selector: 'tg-product-specifications',
  templateUrl: './product-specifications.component.html',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    NgFor,
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
export class ProductSpecificationsComponent {
  @Input() products: Product[];
  @Input() product: Product;
  @Input() hasSalesScope = false;
  @Input() canManageProductHolding = false;
  @Input() changeTariffPlanUrl: string;
  @Input() manageOptionUrl: string;
  @Input() componentInstanceID: string;
  @Input() isBundle = false;
  @Input() isTelenetBrand = true;
  @Input() set showSpecs(visible: boolean) {
    if (!this.isTelenetBrand) {
      this.toggleVisiblityFeature(visible);
    }
  }

  showFeature = false;

  PREPAID_MOBILE = ProductOverviewConstants.PREPAID_MOBILE;

  constructor(
    private readonly urlService: UrlService,
    private readonly dataLayerService: DataLayerService,
    private readonly productOverviewService: ProductOverviewService
  ) {}

  toggleVisiblityFeature(visible: boolean): void {
    this.showFeature = visible;

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

  changeTariffPlan(productIdentifier: string, e: Event): void {
    e.stopPropagation();
    this.urlService.redirectTo(`${this.changeTariffPlanUrl}?flow=care&item=${productIdentifier}`);
  }

  manageOptions(product: Product, e: Event): void {
    e.stopPropagation();
    if (product) {
      const eventInfoData = this.productOverviewService.getClickEventInfoData(product);
      this.productOverviewService.addEventToDataLayer(eventInfoData, this.componentInstanceID);
    }

    let url = `${this.manageOptionUrl}?item=${product?.identifier}&flow=${ProductOverviewConstants.PRODUCT_OPTIONS}`;

    if (product?.productType) {
      url += '&producttype=' + product.productType;
    }
    if (product?.status === ProductOverviewConstants.STATUS_NOT_ACTIVE) {
      url += '&productcode=' + product.productInfo.externalProductCode;
    } else if (product?.upgradePossibleTo) {
      url += '&productcode=' + product.upgradePossibleTo;
    }

    this.urlService.redirectTo(url);
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

  /*
  STILLTOCHECK: is this necessary. was converted but not used
  getBundleSpecifications(product: Product) {
    const specs = this.products[0]?.productInfo?.specifications || [];

    return specs.filter((spec) => {
      switch (product.productType) {
        case 'internet':
          return spec.serviceType === 'fixed_internet';
        case 'mobile':
          return this.filterMobileSpecs(product, spec);
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

  filterMobileSpecs(product: Product, spec: SpecificationInterface) {
    if (product.productInfo.productType === 'data-only-mobile-line') {
      return spec.serviceType === 'mobile_internet';
    }
    return spec.serviceType === 'mobile_internet' || spec.serviceType === 'mobile_calling';
  }
  */

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

  onKeydown(event: KeyboardEvent, visible: boolean) {
    if (event.key === 'Enter') {
      this.toggleVisiblityFeature(visible);
    }
  }
}
