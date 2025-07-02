import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProductsDetailsNgrxModule, ProductsDetailsOrderFacade } from '@sales/products-details/data-access';
import { Observable } from 'rxjs';
import { SalesOffer } from '@sales/shared/data-access';
import { PricingComponent } from '@sales/shared/ui';
import { AsyncPipe, NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'tg-sales-products-details-order',
  standalone: true,
  templateUrl: './products-details-order.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PricingComponent, NgIf, AsyncPipe, ProductsDetailsNgrxModule, TranslateModule],
})
export class ProductsDetailsOrderComponent {
  @Input() theme!: string;
  @Input() set salesCheckoutUrl(salesCheckoutUrl: string) {
    this.productsDetailsOrderFacade.updateSalesCheckoutUrl(salesCheckoutUrl);
  }

  @Input() set humanCheckoutUrl(humanCheckoutUrl: string) {
    this.productsDetailsOrderFacade.updateHumanCheckoutUrl(humanCheckoutUrl);
  }

  salesOffer$: Observable<SalesOffer | undefined> = this.productsDetailsOrderFacade.salesOffer$;

  constructor(private readonly productsDetailsOrderFacade: ProductsDetailsOrderFacade) {}

  order(): void {
    this.productsDetailsOrderFacade.order();
  }
}
