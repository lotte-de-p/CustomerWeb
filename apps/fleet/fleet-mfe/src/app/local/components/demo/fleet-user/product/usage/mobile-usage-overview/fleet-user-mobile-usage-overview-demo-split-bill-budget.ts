import { Component } from '@angular/core';
import { FleetUserMobileUsageOverviewComponent } from '../../../../../../../fleet-user/product/usage/mobile-usage-overview/fleet-user-mobile-usage-overview.component';

@Component({
  selector: 'tg-fleet-user-mobile-usage-overview-demo-splitbill-budget',
  standalone: true,
  styles: [],
  imports: [FleetUserMobileUsageOverviewComponent],
  template: ` <tg-fleet-user-mobile-usage-overview
    [usageDetailsLink]="USAGE_DETAILS_LINK"
    [enableSB20SBBudget]="'true'">
  </tg-fleet-user-mobile-usage-overview>`,
})
export class FleetUserMobileUsageOverviewDemoSplitBillBudgetComponent {
  readonly USAGE_DETAILS_LINK = 'usageDetailsLink';
}
