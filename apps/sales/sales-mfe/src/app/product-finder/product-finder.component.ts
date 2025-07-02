import { Component, Input } from '@angular/core';
import { ProductFinderStepperComponent } from '@sales/product-finder/feat-stepper';
import { ProductFinderConfigFacade } from '@sales/product-finder/data-access';
import { LoaderModule } from '@telenet/ng-lib-page';

@Component({
  standalone: true,
  selector: 'tg-sales-product-finder',
  templateUrl: './product-finder.component.html',
  imports: [ProductFinderStepperComponent, LoaderModule],
})
export class ProductFinderComponent {
  @Input() set enableLoader(enableLoader: boolean) {
    this.productFinderConfigFacade.updateEnableLoader(enableLoader);
  }
  @Input() set enableMask(enableMask: boolean) {
    this.productFinderConfigFacade.updateEnableLoaderMask(enableMask);
  }
  @Input() set salesCheckoutUrl(salesCheckoutUrl: string) {
    this.productFinderConfigFacade.updateSalesCheckoutUrl(salesCheckoutUrl);
  }
  @Input() set humanCheckoutUrl(humanCheckoutUrl: string) {
    this.productFinderConfigFacade.updateHumanCheckoutUrl(humanCheckoutUrl);
  }
  @Input() set oneConfiguratorUrl(oneConfiguratorUrl: string) {
    this.productFinderConfigFacade.updateOneConfiguratorUrl(oneConfiguratorUrl);
  }
  @Input() set productsDetailsUrl(productsDetailsUrl: string) {
    this.productFinderConfigFacade.updateProductsDetailsUrl(productsDetailsUrl);
  }

  constructor(private readonly productFinderConfigFacade: ProductFinderConfigFacade) {}
}
