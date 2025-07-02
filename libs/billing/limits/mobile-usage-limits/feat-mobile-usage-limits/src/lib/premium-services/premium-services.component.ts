import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesModule } from '@telenet/ng-lib-message';
import { TranslateModule } from '@ngx-translate/core';
import { LoginModule } from '@telenet/ng-lib-ocapi';
import {
  MobileUsageLimitsSkeletonComponent,
  PremiumLimitsNotificationComponent,
  PremiumServicesAdjustLimitComponent,
  PremiumServicesHeaderComponent,
  PremiumServicesMemberNotificationComponent,
  UpdateMobileUsageLimitsComponent,
} from '@billing/mobile-usage-limits/ui';
import { MobileUsageLimitsNgrxModule, PremiumService } from '@billing/mobile-usage-limits/data-access';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PricePipe, RegexConstants } from '@telenet/ng-lib-form';
import { SlideMenuComponent } from '@billing/shared/ui';
import { NgxMaskDirective } from 'ngx-mask';
import { MAX_PREMIUM_SERVICE_LIMIT, MIN_PREMIUM_SERVICE_LIMIT } from './premium-services.constants';

@Component({
  selector: 'care-billing-mobile-usage-limits-premium-services',
  standalone: true,
  imports: [
    CommonModule,
    MessagesModule,
    MobileUsageLimitsNgrxModule,
    TranslateModule,
    MobileUsageLimitsSkeletonComponent,
    LoginModule,
    PremiumServicesHeaderComponent,
    PremiumServicesMemberNotificationComponent,
    PremiumServicesAdjustLimitComponent,
    ReactiveFormsModule,
    UpdateMobileUsageLimitsComponent,
    PricePipe,
    SlideMenuComponent,
    NgxMaskDirective,
    PremiumLimitsNotificationComponent,
  ],
  templateUrl: './premium-services.component.html',
})
export class PremiumServicesComponent implements OnInit, OnChanges {
  messageGroupName = 'mobile-usage-limits';
  @Input() isMember: boolean;
  @Input() currentPremiumUsageLimit: PremiumService;
  @Input() showPremiumServices: boolean;
  @Output() premiumLimitUpdated = new EventEmitter<{ updatedLimit: string }>();
  thirdPartyServicesForm: FormGroup = new FormGroup({});
  currentPremiumLimit: number;

  ngOnInit(): void {
    this.currentPremiumLimit = Math.trunc(this.currentPremiumUsageLimit?.limit?.value);
    this.thirdPartyServicesForm.addControl(
      'premiumLimit',
      new FormControl(this.currentPremiumLimit, [
        Validators.required,
        Validators.pattern(RegexConstants.NUMBER_ONLY_REGEX),
        Validators.min(MIN_PREMIUM_SERVICE_LIMIT),
        Validators.max(MAX_PREMIUM_SERVICE_LIMIT),
      ])
    );
  }

  ngOnChanges(): void {
    this.currentPremiumLimit = Math.trunc(this.currentPremiumUsageLimit?.limit?.value);
  }

  handlePremiumLimitUpdate(isSubmit: boolean): void {
    let updatedLimit = '';
    if (isSubmit) {
      const submittedValue = this.thirdPartyServicesForm.controls['premiumLimit']?.value?.toString();
      if (submittedValue !== this.currentPremiumLimit) {
        updatedLimit = submittedValue;
      }
    } else {
      this.thirdPartyServicesForm.controls['premiumLimit'].setValue(this.currentPremiumLimit);
    }
    this.showPremiumServices = false;
    this.premiumLimitUpdated.emit({ updatedLimit });
  }
}
