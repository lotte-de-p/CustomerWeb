import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product, ProductOverviewConstants, Option } from '@demo/product/data-access';
import { TranslateModule } from '@ngx-translate/core';
import { NgForOf, NgIf, NgClass } from '@angular/common';
import { ProductBundleChildComponent } from './product-bundle-child/product-bundle-child.component';

@Component({
  standalone: true,
  selector: 'demo-product-bundle',
  templateUrl: './product-bundle.component.html',
  imports: [TranslateModule, NgForOf, NgIf, NgClass, ProductBundleChildComponent],
})
export class ProductBundleComponent {
  @Input() products: Product[] = [];
  @Input() hasSalesScope = false;
  @Input() canManageProductHolding = false;
  @Input() changeTariffPlanUrl!: string;
  @Input() manageOptionUrl!: string;
  @Input() componentInstanceID!: string;
  @Input() streamingOptions!: Option[];
  @Input() planUpgradeUrl!: string;
  @Input() intentRequired!: boolean;

  @Output() manageBundleOptions = new EventEmitter<{ planIdentifier: string; product: Product }>();
  @Output() manageProductOptions = new EventEmitter<Product>();
  @Output() startMarketingConfigurator = new EventEmitter<string>();

  showChangePlan(product: Product): boolean {
    return this.hasSalesScope && !product.isProductSuspended();
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

  manageOptions(product: Product): void {
    this.manageProductOptions.emit(product);
  }

  redirectToMarketingConfigurator(locationId: string) {
    this.startMarketingConfigurator.emit(locationId);
  }

  sortChildren(children: Product[]): Product[] {
    return [...children].sort((a, b) => {
      return (a.productSpec?.weight || 0) - (b.productSpec?.weight || 0);
    });
  }

  handleManageBundleOptions({ planIdentifier, product }: { planIdentifier: string; product: Product }) {
    this.manageBundleOptions.emit({ planIdentifier, product });
  }
}
