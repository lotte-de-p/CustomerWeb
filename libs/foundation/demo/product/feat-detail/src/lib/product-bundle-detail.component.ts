import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductBundleComponent } from './product-bundle/product-bundle.component';
import { Product, ProductFacade, ProductNgrxModule } from '@demo/product/data-access';
import { Observable } from 'rxjs';

@Component({
  selector: 'demo-product-product-bundle-detail',
  standalone: true,
  imports: [CommonModule, ProductBundleComponent, ProductNgrxModule],
  template: `<demo-product-bundle
    [products]="(products$ | async)!"
    [hasSalesScope]="hasSalesScope"
    [canManageProductHolding]="canManageProductHolding"
    [changeTariffPlanUrl]="changeTariffPlanUrl"
    [manageOptionUrl]="manageOptionUrl"
    [componentInstanceID]="componentInstanceID"
    [planUpgradeUrl]="planUpgradeUrl"
    [intentRequired]="intentRequired"
    (manageProductOptions)="manageProductOptions($event)"
    (manageBundleOptions)="manageBundleOptions($event)"
    (startMarketingConfigurator)="startMarketingConfiguration($event)"></demo-product-bundle>`,
})
export class ProductBundleDetailComponent implements OnInit {
  private readonly productFacade = inject(ProductFacade);

  readonly products$: Observable<Product[]> = this.productFacade.products$;
  readonly hasSalesScope = false;
  readonly canManageProductHolding = false;
  readonly changeTariffPlanUrl = '';
  readonly manageOptionUrl = '';
  readonly componentInstanceID = '';
  readonly planUpgradeUrl = '';

  readonly intentRequired = false;

  ngOnInit(): void {
    this.productFacade.loadProducts();
  }

  manageBundleOptions({ planIdentifier, product }: { planIdentifier: string; product: Product }) {
    this.productFacade.manageBundleOptions(planIdentifier, product);
  }

  manageProductOptions(product: Product) {
    this.productFacade.manageProducOptions(product);
  }

  startMarketingConfiguration(locationId: string) {
    console.log(this.planUpgradeUrl, 'connectivity', locationId, 'change plan link clicked');
  }
}
