import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepreciationItem } from '@sales/summary/data-access';
import { DepreciationTableComponent } from './depreciation-table/depreciation-table.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [CommonModule, DepreciationTableComponent, TranslateModule],
  selector: 'tg-sales-summary-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  @Input() depreciationItems: DepreciationItem[] | undefined | null;
  @Input() contractSummaryRequired: boolean | undefined | null;
  @Output() depreciationItemClickedEvent = new EventEmitter<DepreciationItem>();
  @Output() overlayCloseClickedEvent = new EventEmitter();
  @Output() contractSummaryLinkClickedEvent = new EventEmitter();
  @Output() termsAndConditionsLinkClickedEvent = new EventEmitter();

  depreciationItemClicked(depreciationItem: DepreciationItem) {
    this.depreciationItemClickedEvent.next(depreciationItem);
  }

  contractSummaryLinkClicked() {
    this.contractSummaryLinkClickedEvent.next(true);
  }

  termsAndConditionsLinkClicked() {
    this.termsAndConditionsLinkClickedEvent.next(true);
  }
}
