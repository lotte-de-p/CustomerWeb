import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AppointmentTypeEnum } from '@product-journey/appointments/data-access';

@Component({
  standalone: true,
  selector: 'tg-scheduled-appointment-info',
  templateUrl: './scheduled-appointment-info.component.html',
  imports: [CommonModule, TranslateModule],
  providers: [],
})
export class ScheduledAppointmentInfoComponent {
  @Input() isScheduledAppointment?: boolean;
  @Input() appointmentType?: AppointmentTypeEnum;
}
