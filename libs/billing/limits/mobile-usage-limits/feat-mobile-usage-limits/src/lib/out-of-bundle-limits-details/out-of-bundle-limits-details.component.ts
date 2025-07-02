import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EuroSignPipe, PricePipe } from '@telenet/ng-lib-form';
import {
  OutOfBundleLimitsNotificationComponent,
  UpdateMobileUsageLimitsComponent,
} from '@billing/mobile-usage-limits/ui';
import { OutOfBundle } from '@billing/mobile-usage-limits/data-access';
import { NO_LIMIT } from './out-of-bundle-limits.constants';
import { MESSAGE_GROUP_NAME } from '../mobile-usage-limits/mobile-usage-limits.constants';
import { SlideMenuComponent } from '@billing/shared/ui';

@Component({
  selector: 'care-billing-mobile-usage-limits-out-of-bundle-limits-details',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    OutOfBundleLimitsNotificationComponent,
    FormsModule,
    SlideMenuComponent,
    PricePipe,
    UpdateMobileUsageLimitsComponent,
    EuroSignPipe,
  ],
  templateUrl: 'out-of-bundle-limits-details.component.html',
})
export class OutOfBundleLimitsDetailsComponent implements OnInit {
  @Input() outOfBundleLimits: string[] | null;
  @Input() isMember: boolean;
  @Input() currentOutOfBundleLimit: OutOfBundle | undefined;
  @Input() showOutOfBundleLimit: boolean;
  @Output() outOfBundleLimitUpdated = new EventEmitter<{ limits: string }>();
  outOfBundleLimitsForm: FormGroup = new FormGroup({});
  initialOutOfBundleLimit: string;

  ngOnInit(): void {
    this.initialOutOfBundleLimit = this.getOutOfBundleLimit(this.currentOutOfBundleLimit);
    this.outOfBundleLimitsForm.addControl('selectedLimit', new FormControl(this.initialOutOfBundleLimit));
  }

  handleLimitUpdate(isSubmit: boolean): void {
    let updatedLimit = '';
    if (isSubmit) {
      const submittedValue = this.outOfBundleLimitsForm.controls['selectedLimit']?.value;
      if (submittedValue !== this.initialOutOfBundleLimit) {
        updatedLimit = submittedValue;
      }
    } else {
      this.outOfBundleLimitsForm.controls['selectedLimit'].setValue(this.initialOutOfBundleLimit);
    }
    this.showOutOfBundleLimit = false;
    this.outOfBundleLimitUpdated.emit({ limits: updatedLimit });
  }

  getOutOfBundleLimit(outOfBundle: OutOfBundle | undefined): string {
    return outOfBundle?.limit.enabled ? Math.trunc(outOfBundle.limit.value).toString() : NO_LIMIT;
  }

  protected readonly MESSAGE_GROUP_NAME = MESSAGE_GROUP_NAME;
}
