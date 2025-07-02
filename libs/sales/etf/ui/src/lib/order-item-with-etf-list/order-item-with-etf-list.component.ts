import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { OrderItemWithDiscount, UsedSlot } from '@sales/etf/data-access';
import { EtfListComponent } from '../etf-list/etf-list.component';

@Component({
  standalone: true,
  imports: [CommonModule, TranslateModule, EtfListComponent],
  selector: 'tg-sales-etf-order-item-with-etf-list',
  templateUrl: './order-item-with-etf-list.component.html',
})
export class OrderItemWithEtfListComponent {
  @Input() usedAndPendingDiscountSlotList: UsedSlot[] | undefined;
  @Input() orderItemWithDiscount: OrderItemWithDiscount | undefined;

  @Output() cancelEtfSelectionEvent = new EventEmitter<OrderItemWithDiscount>();
  @Output() applyEtfCancellationEvent = new EventEmitter<{
    orderItemWithDiscount: OrderItemWithDiscount;
    usedDiscountSlot: UsedSlot;
  }>();

  selectedDiscountToTerminate: UsedSlot | undefined;

  applyEtfCancellation() {
    if (this.orderItemWithDiscount && this.selectedDiscountToTerminate) {
      this.applyEtfCancellationEvent.next({
        orderItemWithDiscount: this.orderItemWithDiscount,
        usedDiscountSlot: this.selectedDiscountToTerminate,
      });
    }
  }

  cancelEtfSelection() {
    if (this.orderItemWithDiscount) {
      this.cancelEtfSelectionEvent.next(this.orderItemWithDiscount);
    }
  }

  selectDiscountToTerminate(usedDiscountSlot: UsedSlot) {
    this.selectedDiscountToTerminate = usedDiscountSlot;
  }
}
