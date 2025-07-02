import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'care-billing-mobile-usage-limits-premium-limits-notification',
  standalone: true,
  imports: [CommonModule, TranslateModule, ReactiveFormsModule],
  templateUrl: 'premium-limits-notification.component.html',
})
export class PremiumLimitsNotificationComponent {
  protected readonly MESSAGE_GROUP = 'mobile-usage-limits';
  @Input() currentPremiumLimit: number;
}
