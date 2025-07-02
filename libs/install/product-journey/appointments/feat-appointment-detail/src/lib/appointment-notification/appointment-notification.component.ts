import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Appointment, AppointmentNgrxModule } from '@product-journey/appointments/data-access';
import { TranslateModule } from '@ngx-translate/core';
import { LetDirective } from '@ngrx/component';

@Component({
  standalone: true,
  selector: 'tg-appointment-notification',
  templateUrl: './appointment-notification.component.html',
  imports: [CommonModule, AppointmentNgrxModule, TranslateModule, LetDirective],
})
export class AppointmentNotificationComponent {
  @Input() allowFiberRepairChanges: boolean;
  @Input() selectedAppointment?: Appointment | null;
}
