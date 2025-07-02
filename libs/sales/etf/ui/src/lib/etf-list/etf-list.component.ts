import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { OrderItemWithDiscount, UsedSlot } from '@sales/etf/data-access';
import { PricePipe } from '../pipes/price.pipe';

@Component({
  standalone: true,
  imports: [CommonModule, TranslateModule, PricePipe],
  selector: 'tg-sales-etf-list',
  templateUrl: './etf-list.component.html',
})
export class EtfListComponent {
  @Input() set usedDiscountSlotList(value: UsedSlot[] | undefined) {
    this._usedDiscountSlotList = value?.filter((usedDiscountSlot) => !!usedDiscountSlot.endDateOfContract) || [];
  }
  get usedDiscountSlotList(): UsedSlot[] {
    return this._usedDiscountSlotList;
  }
  private _usedDiscountSlotList: UsedSlot[] = [];
  @Input() orderItemWithDiscount: OrderItemWithDiscount | undefined;
  @Output() discountTerminationSelected = new EventEmitter<UsedSlot>();

  selectDiscountToTerminate(usedDiscountSlot: UsedSlot) {
    this.discountTerminationSelected.next(usedDiscountSlot);
  }
}
