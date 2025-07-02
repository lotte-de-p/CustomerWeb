import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractBaseComponent, UrlService } from '@telenet/ng-lib-page';
import { ProductOverviewConstants } from '../../../../shared/common/constants/product-overview.constant';
import { ProductOverviewService } from '../services/product-overview.service';
import { Product } from '../../../shared/models/product.model';
import { PhoneNumberPipe } from './pipes/phone-number.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { ProductSpecificationsComponent } from './views/product-specifications/product-specifications.component';
import { NgFor, NgTemplateOutlet, NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'tg-product-standalone',
  templateUrl: './product-standalone.component.html',
  standalone: true,
  imports: [NgFor, NgTemplateOutlet, NgIf, NgClass, ProductSpecificationsComponent, TranslateModule, PhoneNumberPipe],
})
export class ProductStandaloneComponent extends AbstractBaseComponent {
  @Input() set standAloneProducts(products: Product[]) {
    if (products?.length) {
      this.products = products;
    }
  }

  @Input() canManageProductHolding = false;
  @Input() manageOptionUrl: string;
  @Input() componentInstanceID: string;
  @Input() isFleetUserOrderingEnabled: boolean;
  @Input() isSplitBill20AddOptionsEnabled: boolean;
  @Input() isSplitBill20RemoveOptionsEnabled: boolean;
  @Input() isSplitBill20ChangeTariffPlanEnabled: boolean;
  @Output() openAddOptionsOverlayForProduct: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() openRemoveOptionsOverlayForProduct: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() openChangeTariffPlanForProduct: EventEmitter<Product> = new EventEmitter<Product>();

  products: Product[];

  constructor(
    private readonly urlService: UrlService,
    private readonly productOverviewService: ProductOverviewService
  ) {
    super();
  }

  getProductIcon(product: Product): string {
    return this.productOverviewService.getProductIcon(product);
  }

  showManageOptions(product: Product) {
    const isPrepaid = product.productInfo?.hasCategory?.(ProductOverviewConstants.PREPAID_MOBILE) || false;

    return (isPrepaid || this.canManageProductHolding) && !product.isUnderMove;
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

  showAddOptions(product: Product): void {
    this.openAddOptionsOverlayForProduct.emit(product);
  }

  showRemoveOptions(product: Product): void {
    this.openRemoveOptionsOverlayForProduct.emit(product);
  }

  showChangeTariffPlan(product: Product): void {
    this.openChangeTariffPlanForProduct.emit(product);
  }
}
