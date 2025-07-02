import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingAddress } from '@sales/summary/data-access';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [CommonModule, TranslateModule],
  selector: 'tg-sales-summary-invoice-info',
  templateUrl: './invoice-info.component.html',
})
export class InvoiceInfoComponent {
  @Input() invoiceInfo: BillingAddress | undefined | null;
}
