import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'tg-billing-overview-loading',
  template: ` <div data-testid="billing-overview-loading" class="loading--circular"></div>`,
  styleUrl: 'billing-overview-loading.component.scss',
})
export class BillingOverviewLoadingComponent {}
