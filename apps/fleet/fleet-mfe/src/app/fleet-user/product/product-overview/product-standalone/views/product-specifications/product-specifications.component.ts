import { Component, Input } from '@angular/core';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { UrlService } from '@telenet/ng-lib-page';
import { ProductOverviewConstants } from '../../../../../../shared/common/constants/product-overview.constant';
import { ProductOverviewService } from '../../../services/product-overview.service';
import { EventsConstants } from '../../../constants/events.constant';
import { Product } from '../../../../../shared/models/product.model';
import { PhoneNumberPipe } from '../../pipes/phone-number.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { ProductExtraOptionsComponent } from './product-extra-options/product-extra-options.component';
import { ProductIncludedOptionsComponent } from './product-included-options/product-included-options.component';
import { ProductOptionsSpecificationsComponent } from './product-options-specifications/product-options-specifications.component';
import { ProductLevelSpecificationsComponent } from './product-level-specifications/product-level-specifications.component';
import { NgIf, NgClass, NgFor, LowerCasePipe, DatePipe } from '@angular/common';

@Component({
  selector: 'tg-product-specifications',
  templateUrl: './product-specifications.component.html',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
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
  @Input() product: Product;
  @Input() manageOptionUrl: string;
  @Input() componentInstanceID: string;
  @Input() isBundle = false;

  showFeature = false;

  PREPAID_MOBILE = ProductOverviewConstants.PREPAID_MOBILE;

  constructor(
    private readonly urlService: UrlService,
    private readonly dataLayerService: DataLayerService,
    private readonly productOverviewService: ProductOverviewService
  ) {}

  toggleVisibilityFeature(visible: boolean): void {
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
}
