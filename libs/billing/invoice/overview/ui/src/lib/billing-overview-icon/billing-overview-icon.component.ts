import { Component, Input } from '@angular/core';
import { WinkIcon } from '@telenet/wink-ng';

@Component({
  standalone: true,
  selector: 'tg-billing-overview-icon',
  template: ` <wink-icon
    data-testid="billing-overview-invoice-icon"
    appearance="secondary"
    icon="{{ icon }}"
    size="lg"></wink-icon>`,
  imports: [WinkIcon],
})
export class BillingOverviewIconComponent {
  @Input() invoiceAmount!: number;

  get icon(): 'bill' | 'euro-arrow-counterclockwise' {
    return this.invoiceAmount >= 0 ? 'bill' : 'euro-arrow-counterclockwise';
  }
}
