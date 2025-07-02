import { Component } from '@angular/core';
import { FleetUserMobileUsageOverviewComponent } from '../../../../../../../fleet-user/product/usage/mobile-usage-overview/fleet-user-mobile-usage-overview.component';

@Component({
  selector: 'tg-fleet-user-mobile-usage-overview-demo-one',
  standalone: true,
  styles: [],
  imports: [FleetUserMobileUsageOverviewComponent],
  template: ` <tg-fleet-user-mobile-usage-overview [usageDetailsLink]="USAGE_DETAILS_LINK" [showCardView]="true">
  </tg-fleet-user-mobile-usage-overview>`,
})
export class FleetUserMobileUsageOverviewDemoOneComponent {
  readonly USAGE_DETAILS_LINK = 'usageDetailsLink';
}
