import { Component, Input, Output, EventEmitter } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { Product, Option, ProductOverviewConstants } from '@demo/product/data-access';
import { NgClass, NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PhoneNumberPipe } from '@demo/product/ui';
import { productIconMapper, ProductIconConstants } from './product-icon.mapper';
import { ProductSpecificationsComponent } from '../../product-specifications/product-specifications.component';
import { WinkIcon } from '@telenet/wink-ng';

@Component({
  standalone: true,
  selector: 'demo-product-bundle-child',
  templateUrl: './product-bundle-child.component.html',
  imports: [NgClass, TranslateModule, NgIf, PhoneNumberPipe, ProductSpecificationsComponent, WinkIcon],
})
export class ProductBundleChildComponent {
  @Input() set productOrOption({ product, option }: { product?: Product; option?: Option }) {
    if (product) {
      this.product = product;
    }
    if (!product && option) {
      const derefdOption = cloneDeep(option);
      this.product = new Product();
      this.product.productInfo = derefdOption.productInfo;
      this.product.options = [derefdOption];
      this.product.status = derefdOption.status;
      this.product.productType = derefdOption.productType || '';
    }
    this.productIcon = productIconMapper(this.product);
  }

  @Input() plan!: Product;
  @Input() hasSalesScope = false;
  @Input() canManageProductHolding = false;
  @Input() changeTariffPlanUrl!: string;
  @Input() manageOptionUrl!: string;
  @Input() componentInstanceID!: string;
  @Input() streamingOptions!: Option[];
  @Input() planUpgradeUrl!: string;
  @Input() intentRequired!: boolean;

  @Output() manageBundleOptions = new EventEmitter<{
    planIdentifier: string;
    product: Product;
  }>();

  product!: Product;
  productIcon!: ProductIconConstants;

  showManageOptions() {
    let isPrepaid = false;

    if (this.plan?.productInfo.categories?.length) {
      isPrepaid = this.plan?.productInfo.categories.some((item: string) => {
        return item.toUpperCase() === ProductOverviewConstants.PREPAID_MOBILE.toUpperCase();
      });
    }
    return isPrepaid || this.canManageProductHolding;
  }

  handleManageOptions(planIdentifier: string, product: Product): void {
    this.manageBundleOptions.emit({
      planIdentifier,
      product,
    });
  }
}
