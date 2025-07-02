import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderItemsComponent } from '../order-items/order-items.component';
import { OrderSubTotalsComponent } from './order-sub-totals/order-sub-totals.component';
import { OrderTotalsComponent } from './order-totals/order-totals.component';
import { TranslateModule } from '@ngx-translate/core';
import { SummaryOrderItem, SummaryPrices } from '@sales/summary/data-access';
import { TotalsType } from '../enums/styling-option.enum';

@Component({
  standalone: true,
  imports: [CommonModule, OrderItemsComponent, OrderSubTotalsComponent, OrderTotalsComponent, TranslateModule],
  selector: 'tg-sales-summary-order-data',
  templateUrl: './order-data.component.html',
})
export class OrderDataComponent {
  @Input() orderItems: SummaryOrderItem[] | undefined | null;
  @Input() prices: SummaryPrices | undefined | null;
  protected readonly type = TotalsType;
  protected readonly TotalsType = TotalsType;

  @Output() orderButtonClicked = new EventEmitter();

  onOrderClick() {
    this.orderButtonClicked.emit();
  }
}
