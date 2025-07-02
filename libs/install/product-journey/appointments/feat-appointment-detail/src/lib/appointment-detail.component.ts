import { Component, inject, Input, isDevMode, ViewChild } from '@angular/core';
import {
  Appointment,
  AppointmentDatalayerService,
  AppointmentFacade,
  AppointmentNgrxModule,
  AppointmentStatusEnum,
  AppointmentTypeEnum,
  AvailableTimeSlots,
  NotificationMethodEnum,
  OutdoorAppointmentModel,
  TimeSlot,
  TimeSlotEnum,
} from '@product-journey/appointments/data-access';
import { CommonModule, DatePipe } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AppointmentAdditionalInfoComponent } from './appointment-additional-info/appointment-additional-info.component';
import { AppointmentContactDetailComponent } from './appointment-contact-detail/appointment-contact-detail.component';
import {
  AppointmentSkeletonComponent,
  PhoneNumberPipe,
  PostInstallationInfoComponent,
  PricePipe,
  ReplaceDecimalsPipe,
  ScheduledAppointmentInfoComponent,
  TimeSlotSkeletonComponent,
} from '@product-journey/appointments/ui';
import {
  AppointmentPickerConsumerTypeEnum,
  AppointmentTransformerSlot,
  AppointmentTransformerUtil,
  LabelUtil,
  NCTimeSlot,
  NCTimeSlotAvailability,
  NCTimeSlotList,
  TimeslotMomentEnum,
} from '@telenet/ng-lib-form';
import { AppointmentNotificationComponent } from './appointment-notification/appointment-notification.component';
import { map } from 'rxjs/operators';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AppointmentAvailableTimeSlotsComponent } from './appointment-available-time-slots/appointment-available-time-slots.component';
import { LetDirective } from '@ngrx/component';
import { AppointmentCancellationComponent } from './appointment-cancellation/appointment-cancellation.component';
import { HttpClient } from '@angular/common/http';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';
import { DomService } from '@telenet/ng-lib-shared';
import { AdobeAnalyticsDirective, DatalayerEventNames } from '@telenet/ng-lib-datalayer';

const DATE = 'appointments.date';
const TIME = 'appointments.time';

@UntilDestroy()
@Component({
  standalone: true,
  selector: 'tg-appointment-details',
  templateUrl: './appointment-detail.component.html',
  imports: [
    CommonModule,
    AppointmentNgrxModule,
    TranslateModule,
    AppointmentAdditionalInfoComponent,
    AppointmentContactDetailComponent,
    PhoneNumberPipe,
    ReplaceDecimalsPipe,
    PricePipe,
    AppointmentNotificationComponent,
    ScheduledAppointmentInfoComponent,
    PostInstallationInfoComponent,
    AppointmentAvailableTimeSlotsComponent,
    LetDirective,
    AppointmentCancellationComponent,
    AppointmentSkeletonComponent,
    TimeSlotSkeletonComponent,
    AdobeAnalyticsDirective,
  ],
})
export class AppointmentDetailsComponent {
  @Input() isMaster = true;
  @Input() allowFiberRepairChanges: boolean;
  @Input() usefulInformationInstallUrl: string;
  @Input() usefulInformationMoveUrl: string;
  @Input() usefulInformationRepairUrl: string;
  @Input() postInstallationInstructionMoveUrl: string;
  @Input() postInstallationInstructionRepairUrl: string;
  @Input() postInstallationInstructionInstallUrl: string;
  @Input() usefulInformationFiberInstallUrl: string;
  @Input() usefulInformationFiberMoveUrl: string;
  @Input() usefulInformationFiberRepairUrl: string;
  @Input() postInstallationInstructionFiberMoveUrl: string;
  @Input() postInstallationInstructionFiberRepairUrl: string;
  @Input() postInstallationInstructionFiberInstallUrl: string;
  @Input() messageGroupName: string;

  @ViewChild(AppointmentAvailableTimeSlotsComponent)
  timeSlotsComponent: AppointmentAvailableTimeSlotsComponent;
  @ViewChild(AppointmentContactDetailComponent)
  contactDetailFormComponent: AppointmentContactDetailComponent;

  private readonly appointmentFacade = inject(AppointmentFacade);
  private readonly datePipe = inject(DatePipe);
  private readonly translateService = inject(TranslateService);
  private readonly http = inject(HttpClient);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly domService = inject(DomService);
  private readonly appointmentDatalayerService = inject(AppointmentDatalayerService);

  readonly STATUS_COMPLETED = AppointmentStatusEnum.COMPLETED;
  readonly STATUS_NEW = AppointmentStatusEnum.NEW;
  readonly SMS = NotificationMethodEnum.SMS;
  readonly VOICE = NotificationMethodEnum.VOICE;
  readonly EMAIL = NotificationMethodEnum.EMAIL;
  readonly NUMBER_OF_SLOTS_PER_PAGE = 13;

  usefulInformationHtml: SafeHtml = '';
  postInstallationHtml: SafeHtml = '';
  showDatePicker = false;
  availableTimeSlots: AppointmentTransformerSlot[] = [];
  updatedSlots: AppointmentTransformerSlot[] = [];
  validSelectedTimeSlot = false;
  startDate: Date;
  availableSlotEndDate: Date;
  disableLoadMoreSlots = false;
  showCancelDialog = false;
  showEditContactDetail = false;

  readonly selectedAppointment$ = this.appointmentFacade.selectedAppointment$;
  readonly availableTimeSlots$ = this.appointmentFacade.availableTimeSlots$;
  readonly outdoorAppointment$ = this.appointmentFacade.outdoorAppointment$;

  readonly selectedAppointmentVM$ = this.selectedAppointment$.pipe(
    map((selectedAppointment) => {
      if (selectedAppointment) {
        this.setUseFulInformationHtml(selectedAppointment.appointmentType, selectedAppointment.fiberAppointment);
        this.showDatePicker = false;
        this.showEditContactDetail = false;
        this.validSelectedTimeSlot = false;
        if (selectedAppointment.isNewAppointment && !selectedAppointment.fiberAppointment && this.isMaster) {
          this.showDatePicker = true;
          this.showEditContactDetail = true;
          this.getAvailableTimeSlots(selectedAppointment);
        }
        const date = selectedAppointment.appointmentDate ? new Date(selectedAppointment.appointmentDate) : undefined;
        selectedAppointment = {
          ...selectedAppointment,
          appointmentSubTypeMessage: this.getAppointmentsSubTypeMessage(selectedAppointment),
          dayOfMonth: date ? date.toLocaleString('en-US', { day: 'numeric' }) : '',
          dayLabelKey: date ? this.getDayOfWeekLabelKey(date.toLocaleString('en-US', { weekday: 'long' })) : '',
          monthLabelKey: date ? this.getMonthLabelKey(date.toLocaleString('en-US', { month: 'long' })) : '',
          timeslotCodeLabelKey: selectedAppointment?.timeSlot?.periodOfDay
            ? this.getTimeslotCodeLabelKey(selectedAppointment.timeSlot.periodOfDay.toString())
            : '',
        };
        this.sendAppointmentDatalayerEvent(selectedAppointment);
      }
      return selectedAppointment;
    })
  );

  readonly availableTimeSlotsVM$ = this.availableTimeSlots$.pipe(
    map((availableTimeSlots) => {
      const availableNCTimeSlotList = this.mapToNCTimeSlotList(availableTimeSlots);
      if (availableNCTimeSlotList) {
        const availableTimeSlotList = this.addMissingSlots(availableNCTimeSlotList);
        this.availableTimeSlots = this.getTransformedSlots(availableTimeSlotList);
        this.updatedSlots = this.getTransformedSlots(availableTimeSlotList);
        this.availableSlotEndDate = this.availableTimeSlots.reduce(
          (maxDate, currentItem) => (currentItem.date > maxDate ? currentItem.date : maxDate),
          this.availableTimeSlots[0]?.date
        );
        this.setDisableLoadMoreSlots();
      }
    })
  );

  requestRescheduleAppointment(appointment?: Appointment): void {
    this.showDatePicker = true;
    this.domService.scrollToElement('tg-appointment-available-time-slots');
    this.getAvailableTimeSlots(appointment);
  }

  toggleCancelDialog(value: boolean): void {
    this.showCancelDialog = value;
  }

  rescheduleAppointment(selectedAppointment?: Appointment): void {
    if (this.contactDetailFormComponent?.contactDetailFormComponent?.appointmentContactForm?.touched) {
      this.contactDetailFormComponent?.contactDetailFormComponent.saveAppointmentContact();
    }
    const selectedTimeSlot = this.timeSlotsComponent.timeSlotForm.get('appointment')?.value;
    const moveOrScheduleAppointment =
      selectedAppointment?.appointmentType === AppointmentTypeEnum.MOVE &&
      !selectedAppointment?.isPostponedAppointmentNeedsReschedule
        ? AppointmentTypeEnum.MOVE
        : AppointmentTypeEnum.SCHEDULE;
    let selectedTimeSlotRequest = {};
    if (selectedTimeSlot?.date && selectedTimeSlot?.moment) {
      selectedTimeSlotRequest = {
        appointmentType:
          selectedAppointment?.isNewAppointment || selectedAppointment?.isPostponedAppointmentNeedsReschedule
            ? moveOrScheduleAppointment
            : AppointmentTypeEnum.RESCHEDULE,
        availabilityId: this.getSelectedAvailabilityId(selectedTimeSlot.date, selectedTimeSlot.moment),
        date: selectedTimeSlot.date,
        salesOrderId: this.getSalesOrderId(selectedAppointment),
      };
    }
    this.domService.scrollToStartElement('#appointment-overview');
    this.appointmentFacade.rescheduleAppointment(selectedTimeSlotRequest, selectedAppointment?.appointmentId || '');
  }

  getSalesOrderId(selectedAppointment?: Appointment): string {
    return selectedAppointment?.appointmentType === AppointmentTypeEnum.MOVE &&
      !selectedAppointment?.isNewAppointment &&
      selectedAppointment?.salesOrderId
      ? selectedAppointment?.salesOrderId
      : '';
  }

  cancelReschedule(): void {
    this.showDatePicker = false;
  }

  onValidSelectedTimeSlot($event: boolean): void {
    this.validSelectedTimeSlot = $event;
  }

  loadMoreAvailableSlot(loadPreviousSlots: boolean, appointment?: Appointment): void {
    this.validSelectedTimeSlot = false;
    const date = this.startDate.getDate();
    const newStartDate = loadPreviousSlots
      ? date - this.NUMBER_OF_SLOTS_PER_PAGE
      : date + this.NUMBER_OF_SLOTS_PER_PAGE;
    this.startDate.setDate(newStartDate);
    this.getAvailableTimeSlots(appointment, this.startDate);
  }

  private setDisableLoadMoreSlots(): void {
    this.startDate?.setHours(0, 0, 0, 0);
    this.availableSlotEndDate?.setHours(0, 0, 0, 0);
    if (this.startDate >= this.availableSlotEndDate) {
      this.disableLoadMoreSlots = true;
    }
  }

  private getAvailableTimeSlots(appointment?: Appointment, date?: Date): void {
    const today = new Date();
    this.startDate = date ?? today;
    const installationDateAtNewAddress = appointment?.installationDateAtNewAddress
      ? new Date(appointment?.installationDateAtNewAddress)
      : today;
    if (installationDateAtNewAddress !== undefined && installationDateAtNewAddress > this.startDate) {
      this.startDate = installationDateAtNewAddress;
    }
    this.appointmentFacade.getAvailableTimeSlots(this.startDate, appointment?.appointmentId || '');
  }

  private getDayOfWeekLabelKey(dayOfWeek: string): string {
    return LabelUtil.getLabelKeyWithTypeLabel([DATE, dayOfWeek.toLowerCase()].join('-'));
  }

  private getMonthLabelKey(month: string): string {
    return LabelUtil.getLabelKeyWithTypeLabel([DATE, month.toLowerCase()].join('-'));
  }

  private getTimeslotCodeLabelKey(timeslotCode: string): string {
    return LabelUtil.getLabelKeyWithTypeLabel([TIME, timeslotCode.toLowerCase()].join('-'));
  }

  private setUseFulInformationHtml(appointmentType?: AppointmentTypeEnum, isFiberAppointment?: boolean): void {
    const urlMapping = {
      [AppointmentTypeEnum.MOVE]: {
        usefulInformationUrl: isFiberAppointment ? this.usefulInformationFiberMoveUrl : this.usefulInformationMoveUrl,
        postInstallationInstructionUrl: isFiberAppointment
          ? this.postInstallationInstructionFiberMoveUrl
          : this.postInstallationInstructionMoveUrl,
      },
      [AppointmentTypeEnum.REPAIR]: {
        usefulInformationUrl: isFiberAppointment
          ? this.usefulInformationFiberRepairUrl
          : this.usefulInformationRepairUrl,
        postInstallationInstructionUrl: isFiberAppointment
          ? this.postInstallationInstructionFiberRepairUrl
          : this.postInstallationInstructionRepairUrl,
      },
      [AppointmentTypeEnum.INSTALL]: {
        usefulInformationUrl: isFiberAppointment
          ? this.usefulInformationFiberInstallUrl
          : this.usefulInformationInstallUrl,
        postInstallationInstructionUrl: isFiberAppointment
          ? this.postInstallationInstructionFiberInstallUrl
          : this.postInstallationInstructionInstallUrl,
      },
    };

    if (appointmentType) {
      const { usefulInformationUrl, postInstallationInstructionUrl } = urlMapping[appointmentType];
      this.getUsefulInfoHtml(usefulInformationUrl, postInstallationInstructionUrl);
    }
  }

  private getUsefulInfoHtml(url: string, postInstallUrl: string): void {
    this.convertInfoToHtml(url)
      .pipe(untilDestroyed(this))
      .subscribe((usefulInfoHtml: SafeHtml) => {
        this.usefulInformationHtml = isDevMode() ? url : usefulInfoHtml;
      });

    this.convertInfoToHtml(postInstallUrl)
      .pipe(untilDestroyed(this))
      .subscribe((postInstallHtml: SafeHtml) => {
        this.postInstallationHtml = isDevMode() ? postInstallUrl : postInstallHtml;
      });
  }

  private convertInfoToHtml(url: string): Observable<SafeHtml> {
    return this.http.get(url, { responseType: 'text' }).pipe(
      untilDestroyed(this),
      map((response: string) => this.sanitizer?.bypassSecurityTrustHtml(response))
    );
  }

  private getAppointmentsSubTypeMessage(appointment: Appointment): string {
    switch (appointment.appointmentSubType?.toLowerCase()) {
      case 'repair':
        return this.translateService.instant('ng.appointments.lbl.repair-appointment-subtype');
      case 'home-delivery':
        return this.translateService.instant('ng.appointments.lbl.homedelivery-appointment-subtype', {
          startTime: appointment?.timeSlot?.startTime,
          endTime: appointment?.timeSlot?.endTime,
          date: this.datePipe.transform(appointment?.appointmentDate, 'dd MMMM')?.toLowerCase(),
        });
      case 'remote-support':
        return this.translateService.instant('ng.appointments.lbl.remote-support-appointment-subtype', {
          startTime: appointment?.timeSlot?.startTime,
          endTime: appointment?.timeSlot?.endTime,
          date: this.datePipe.transform(appointment?.appointmentDate, 'dd MMMM')?.toLowerCase(),
        });
      default:
        return this.translateService.instant('ng.appointments.lbl.other-appointment-subtype');
    }
  }

  private mapToNCTimeSlotList(rawAvailableTimeSlots: AvailableTimeSlots[]): NCTimeSlotList {
    const slots = new NCTimeSlotList();
    slots.availabilities = rawAvailableTimeSlots.map((availableTimeSlot) => {
      return this.mapToNCTimeSlot(availableTimeSlot);
    });
    return slots;
  }

  private mapToNCTimeSlot(rawAvailableTimeSlot: AvailableTimeSlots): NCTimeSlot {
    const appointmentAvailability = new NCTimeSlot();
    appointmentAvailability.date = new Date(rawAvailableTimeSlot.date);
    appointmentAvailability.timeSlots =
      rawAvailableTimeSlot.timeSlots &&
      rawAvailableTimeSlot.timeSlots.map((timeSlot) => {
        return this.mapToTimeSlotAvailability(timeSlot);
      });
    return appointmentAvailability;
  }

  private mapToTimeSlotAvailability(timeSlot: TimeSlot): NCTimeSlotAvailability {
    const availabilitySlot = new NCTimeSlotAvailability();
    availabilitySlot.availabilityId = timeSlot.availabilityId;
    availabilitySlot.code = TimeslotMomentEnum[TimeSlotEnum[timeSlot.timeSlotCode]] as TimeslotMomentEnum;
    availabilitySlot.specUrl = timeSlot.specUrl;
    return availabilitySlot;
  }

  getTransformedSlots(availableTimeSlotList: NCTimeSlotList): AppointmentTransformerSlot[] {
    return availableTimeSlotList
      ? AppointmentTransformerUtil.doTransform(
          availableTimeSlotList.availabilities,
          AppointmentPickerConsumerTypeEnum.NC
        ).slots
      : [];
  }

  private getSelectedAvailabilityId(date: Date, timeSlot: TimeslotMomentEnum): string {
    const filterByDate = this.availableTimeSlots.find(
      (availableSlot) => availableSlot.date.getDate() === date.getDate()
    );
    const filterByTimeSlot = filterByDate?.timeSlots.find((slot) => slot.code === timeSlot);
    return filterByTimeSlot?.availabiltyId ? filterByTimeSlot?.availabiltyId : '';
  }

  private addMissingSlots(ncTimeSlotList: NCTimeSlotList): NCTimeSlotList {
    const date = this.startDate ?? new Date();
    const appointmentDates = this.getFixedDates(date);
    appointmentDates.isFtthAppointment = ncTimeSlotList.isFtthAppointment;
    appointmentDates.availabilities = appointmentDates.availabilities.map((appointmentDate) => {
      const matchingDate = ncTimeSlotList.availabilities.find((availableDate) =>
        this.isSameDate(appointmentDate.date, availableDate.date)
      );
      return matchingDate ? matchingDate : appointmentDate;
    });
    return appointmentDates;
  }

  private getFixedDates(startDate: Date): NCTimeSlotList {
    const staticDates = new NCTimeSlotList();
    const datesArray = Array.from({ length: 14 }, (_, index) => {
      const date = new Date(startDate);
      date.setDate(date.getDate() + index);
      return date;
    });
    staticDates.availabilities = datesArray.map((date) => {
      const slots = new NCTimeSlot();
      slots.date = new Date(date);
      slots.timeSlots = [];
      return slots;
    });
    return staticDates;
  }

  private isSameDate(date1: Date, date2: Date): boolean {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  }

  showOutdoorAppointmentInfo(
    appointment: Appointment,
    outdoorAppointment: OutdoorAppointmentModel | undefined
  ): boolean {
    return (
      !!outdoorAppointment &&
      !!outdoorAppointment.locationIds &&
      outdoorAppointment?.locationIds?.some(
        (outdoorAppointment) => outdoorAppointment === appointment.address?.locationId
      )
    );
  }

  sendAppointmentDatalayerEvent(appointment: Appointment): void {
    this.appointmentDatalayerService.sendAppointmentEventData(appointment);
  }

  protected readonly DatalayerEventNames = DatalayerEventNames;
}
