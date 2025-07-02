import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepreciationItem } from '@sales/summary/data-access';
import { DepreciationRemainingCostTime } from './interfaces/depreciation-remaining-cost-time.interface';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [CommonModule, TranslateModule],
  selector: 'tg-sales-summary-depreciation-table',
  templateUrl: './depreciation-table.component.html',
})
export class DepreciationTableComponent implements OnInit {
  @Input() depreciationItem: DepreciationItem | undefined | null;
  @Input() isSoho = false;
  @Output() closeOverlayClickedEvent = new EventEmitter<true>();

  depreciationCostItems: DepreciationRemainingCostTime[] = [];

  closeOverlay() {
    this.closeOverlayClickedEvent.next(true);
  }

  ngOnInit(): void {
    if (this.depreciationItem) {
      let remainingMonths = this.depreciationItem?.duration;
      let monthsAlreadyPayed = 1;
      const monthlyReduction = this.depreciationItem?.price / this.depreciationItem?.duration;
      while (remainingMonths > 0) {
        this.depreciationCostItems.push({
          monthIndex: this.depreciationItem?.duration - remainingMonths,
          remainingCost: Math.round(this.depreciationItem?.price - monthlyReduction * monthsAlreadyPayed),
        });
        monthsAlreadyPayed++;
        remainingMonths--;
      }
    }
  }
}
