import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MobileLine } from '@sim-management/data-access';
import { PhoneNumberPipe } from '@sim-management/ui';
import { WinkButton } from '@telenet/wink-ng';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'tg-sim-management-sms-verification-selected-mobile-line',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TranslateModule, PhoneNumberPipe, WinkButton],
  templateUrl: './sms-selected-mobile-line.component.html',
})
export class SmsSelectedMobileLineComponent {
  @Input() selectedMobileLine: MobileLine | undefined;
}
