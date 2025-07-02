import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'tg-product-overview-monthly-plan',
  templateUrl: './product-overview-monthly-plan.component.html',
  standalone: true,
  imports: [NgIf, TranslateModule],
})
export class ProductOverviewMonthlyPlanComponent {
  @Input() addSubscriptionUrl: string;
  @Input() discoverSmartPhoneUrl: string;
}
