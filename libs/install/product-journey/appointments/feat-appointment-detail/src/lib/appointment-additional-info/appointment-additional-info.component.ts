import { Component, Input } from '@angular/core';
import { AppointmentNgrxModule, AppointmentStatusEnum } from '@product-journey/appointments/data-access';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  standalone: true,
  selector: 'tg-appointment-additional-info',
  templateUrl: './appointment-additional-info.component.html',
  imports: [CommonModule, AppointmentNgrxModule, TranslateModule],
})
export class AppointmentAdditionalInfoComponent {
  @Input() appointmentStatus: AppointmentStatusEnum | undefined;
  @Input() usefulInformationHtml: SafeHtml;

  readonly STATUS_COMPLETED = AppointmentStatusEnum.COMPLETED;

  toggleFeatures = false;
}
