import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { ViewModel } from './view-model-interface';
import { PricePipe, SummaryPricePipe } from '@sales/order-configurator/order/ui';
import {
  deliveryPrice,
  installationCost,
  monthlyTotalOrderCost,
  oneTimeTotalOrderCost,
  totalDiscountedCost,
  totalOrderCost,
} from '@sales/order-configurator/order/state';

@Component({
  standalone: true,
  imports: [CommonModule, SummaryPricePipe, TranslateModule],
  selector: 'tg-order-configurator-order-feat-totals-summary',
  templateUrl: './order-totals-summary.component.html',
  providers: [TranslatePipe, PricePipe],
})
export class OrderTotalsSummaryComponent {
  viewModel: ViewModel;

  constructor(private readonly store: Store) {
    this.viewModel = {
      deliveryPrice$: this.store.select(deliveryPrice),
      monthlyTotalOrderCost$: this.store.select(monthlyTotalOrderCost),
      totalOrderCost$: this.store.select(totalOrderCost),
      totalDiscountedCost$: this.store.select(totalDiscountedCost),
      oneTimeTotalOrderCost$: this.store.select(oneTimeTotalOrderCost),
      installationCost$: this.store.select(installationCost),
    };
  }

  protected readonly deliveryPrice = deliveryPrice;
}
