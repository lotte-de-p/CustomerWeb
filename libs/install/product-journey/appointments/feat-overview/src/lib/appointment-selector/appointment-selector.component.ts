import { Component, inject, Input } from '@angular/core';
import {
  Appointment,
  AppointmentFacade,
  AppointmentNgrxModule,
  AppointmentStatusEnum,
} from '@product-journey/appointments/data-access';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LetDirective } from '@ngrx/component';
import { SlideMenuComponent } from '@product-journey/appointments/ui';

@Component({
  standalone: true,
  selector: 'tg-appointment-selector',
  templateUrl: './appointment-selector.component.html',
  imports: [CommonModule, AppointmentNgrxModule, TranslateModule, LetDirective, SlideMenuComponent],
  styleUrl: './appointment-selector.component.scss',
})
export class AppointmentSelectorComponent {
  private readonly appointmentFacade = inject(AppointmentFacade);

  readonly openAppointments$ = this.appointmentFacade.openAppointments$;
  readonly selectedAppointment$ = this.appointmentFacade.selectedAppointment$;
  readonly completedAppointments$ = this.appointmentFacade.completedAppointments$;

  readonly STATUS_NEW = AppointmentStatusEnum.NEW;
  readonly STATUS_COMPLETED = AppointmentStatusEnum.COMPLETED;

  @Input() isBaseCustomer: boolean;

  showMenu = false;
  showHistory = false;

  close(isAppointmentClosed?: boolean): void {
    this.showMenu = false;
    this.showHistory = !!isAppointmentClosed;
  }

  open(): void {
    this.showMenu = true;
  }

  selectAppointment(appointment: Appointment, isAppointmentClosed?: boolean): void {
    this.appointmentFacade.setSelectAppointment(appointment);
    this.close(isAppointmentClosed);
  }
}
