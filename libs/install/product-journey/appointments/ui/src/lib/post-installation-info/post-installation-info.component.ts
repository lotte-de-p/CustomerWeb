import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentStatusEnum } from '@product-journey/appointments/data-access';
import { TranslateModule } from '@ngx-translate/core';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  standalone: true,
  selector: 'tg-post-installation-info',
  templateUrl: './post-installation-info.component.html',
  imports: [CommonModule, TranslateModule],
})
export class PostInstallationInfoComponent {
  @Input() appointmentStatus?: AppointmentStatusEnum;
  @Input() postInstallationHtml?: SafeHtml;
  readonly STATUS_COMPLETED = AppointmentStatusEnum.COMPLETED;

  toggleFeatures = false;
}
