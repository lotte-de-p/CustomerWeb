import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { OutOfBundle } from '@billing/mobile-usage-limits/data-access';

@Component({
  selector: 'care-billing-mobile-usage-limits-out-of-bundle-limits-notification',
  standalone: true,
  imports: [CommonModule, TranslateModule, ReactiveFormsModule],
  templateUrl: 'out-of-bundle-limits-notification.component.html',
})
export class OutOfBundleLimitsNotificationComponent implements OnInit {
  protected readonly MESSAGE_GROUP = 'mobile-usage-limits';
  @Input() currentOutOfBundleLimit: OutOfBundle | undefined;
  outOfBundleLimitValue: number | undefined;
  isOutOfBundleNoLimits = false;

  ngOnInit(): void {
    if (this.currentOutOfBundleLimit?.limit?.enabled === false) {
      this.isOutOfBundleNoLimits = true;
    } else {
      this.outOfBundleLimitValue = this.currentOutOfBundleLimit
        ? Math.floor(this.currentOutOfBundleLimit.limit?.value)
        : undefined;
    }
  }
}
