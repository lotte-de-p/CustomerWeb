import { Component, ElementRef, Inject, inject, Input, OnInit } from '@angular/core';
import {
  Appointment,
  AppointmentFacade,
  AppointmentNgrxModule,
  AppointmentStatusEnum,
  AppointmentTypeEnum,
} from '@product-journey/appointments/data-access';
import { CommonModule, DOCUMENT } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AbstractCardComponent } from '@telenet/ng-lib-page';
import { LoginModule, LoginService } from '@telenet/ng-lib-ocapi';
import { LetDirective } from '@ngrx/component';
import { map } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { combineLatest } from 'rxjs';

@UntilDestroy()
@Component({
  standalone: true,
  selector: 'tg-appointment-card',
  templateUrl: './appointment-card.component.html',
  providers: [],
  imports: [CommonModule, AppointmentNgrxModule, TranslateModule, LoginModule, LetDirective],
})
export class AppointmentCardComponent extends AbstractCardComponent implements OnInit {
  private readonly appointmentFacade = inject(AppointmentFacade);
  private readonly loginService = inject(LoginService);
  private readonly translateService = inject(TranslateService);

  @Input() cardTitle?: string;
  @Input() cardIcon?: string;
  @Input() allowFtthRepairChanges?: boolean;

  readonly APPOINTMENT_TYPE_KEY_INSTALL = 'ng.appointments.lbl.install-appointment';
  readonly APPOINTMENT_TYPE_KEY_MOVE = 'ng.appointments.lbl.move-appointment';
  readonly APPOINTMENT_TYPE_KEY_REPAIR = 'ng.appointments.lbl.repair-appointment';
  readonly scopes = ['appointments'];
  readonly appointments$ = this.appointmentFacade.openAppointments$;
  readonly error$ = this.appointmentFacade.appointmentError$;

  isMaster = false;

  constructor(_elementRef: ElementRef, @Inject(DOCUMENT) document: Document) {
    super(_elementRef, document);
  }

  readonly appointmentVM$ = combineLatest([this.appointments$, this.error$]).pipe(
    map(([appointments, error]) => {
      const selectedAppointment = this.getSelectedAppointment(appointments);
      if (!this.isMaster && selectedAppointment?.isNewAppointment) {
        this.hideCard();
      }
      return {
        isNewAppointment: selectedAppointment?.isNewAppointment,
        isFtthAppointment: this.allowFtthRepairChanges
          ? appointments[0]?.fiberAppointment
          : appointments[0]?.fiberAppointment && appointments[0]?.timeSlot?.startTime,
        appointmentType: this.getAppointmentType(selectedAppointment?.appointmentType),
        hasNoAppointments: !appointments.length,
        isPostponedAppointmentNeedsReschedule: selectedAppointment?.isPostponedAppointmentNeedsReschedule,
        isAppointmentInWait: selectedAppointment?.isAppointmentInWait,
        isScheduledAppointment:
          selectedAppointment?.isScheduledAppointment || this.isNewAndScheduledAppointment(selectedAppointment),
        timeSlot: selectedAppointment?.timeSlot,
        date: selectedAppointment?.appointmentDate,
        showErrorCard: !!error,
      };
    })
  );

  ngOnInit(): void {
    this.getUserDetails();
  }

  initAfterLoggedIn(): void {
    this.appointmentFacade.loadOpenAppointments();
  }

  private getUserDetails(): void {
    this.loginService
      .getLoginDetails()
      .pipe(untilDestroyed(this))
      .subscribe((loginDetails) => {
        this.isMaster = loginDetails.isMaster() || loginDetails.isContractHolder();
      });
  }

  private getSelectedAppointment(appointments: Appointment[]): Appointment | undefined {
    return (
      appointments &&
      appointments.find((appointment) => {
        return (
          appointment.isNewAppointment ||
          appointment.isPostponedAppointmentNeedsReschedule ||
          appointment.isAppointmentInWait ||
          appointment.isScheduledAppointment ||
          this.isNewAndScheduledAppointment(appointment)
        );
      })
    );
  }

  private isNewAndScheduledAppointment(appointment?: Appointment): boolean {
    return (
      appointment?.appointmentStatus === AppointmentStatusEnum.NEW && appointment?.timeSlot?.startTime !== undefined
    );
  }

  private getAppointmentType(appointmentType?: AppointmentTypeEnum): string {
    switch (appointmentType) {
      case AppointmentTypeEnum.REPAIR:
        return this.translateService.instant(this.APPOINTMENT_TYPE_KEY_REPAIR);
      case AppointmentTypeEnum.INSTALL:
        return this.translateService.instant(this.APPOINTMENT_TYPE_KEY_INSTALL);
      case AppointmentTypeEnum.MOVE:
        return this.translateService.instant(this.APPOINTMENT_TYPE_KEY_MOVE);
      default:
        return '';
    }
  }
}
