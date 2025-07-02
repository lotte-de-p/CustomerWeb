import { Component } from '@angular/core';
import { MobileUsageLimitsComponent } from '@billing/mobile-usage-limits/feat-mobile-usage-limits';

@Component({
  selector: 'customer-web-billing-limits-local-app',
  standalone: true,
  imports: [MobileUsageLimitsComponent],
  templateUrl: './limits-mfe-mobile-container.component.html',
})
export class LimitsMfeMobileContainerComponent {}
