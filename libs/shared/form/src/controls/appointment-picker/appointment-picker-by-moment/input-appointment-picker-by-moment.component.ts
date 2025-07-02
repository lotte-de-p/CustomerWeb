import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AppointmentPickerTypeEnum } from '../appointment-picker-type.enum';
import { AppointmentPickerComponentInterface } from '../appointment-picker-component.interface';
import { AppointmentTransformerSlot } from '../../../models';
import { AppointmentSlotOption } from '../appointment-slot-option.model';
import { TimeslotMomentEnum } from '../../../enums';
import { AppointmentPickerConsumerTypeEnum } from '../../../interfaces';
import { AppointmentPickerByTemporalComponentInterface } from '../appointment-picker-by-temporal-component.interface';
import { AbstractAppointmentPickerByTemporalComponent } from '../abstract-appointment-picker-by-temporal.component';

@Component({
  selector: 'app-form-appointment-picker-by-date',
  templateUrl: './input-appointment-picker-by-moment.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputAppointmentPickerByMomentComponent),
      multi: true,
    },
  ],
})
export class InputAppointmentPickerByMomentComponent
  extends AbstractAppointmentPickerByTemporalComponent<InputAppointmentPickerByMomentComponent>
  implements AppointmentPickerComponentInterface, AppointmentPickerByTemporalComponentInterface
{
  messageGroup: string;
  error: unknown;
  @Input() startDate: Date = new Date();
  @Input() endDate: Date;
  @Input() timeslots: AppointmentTransformerSlot[];
  @Input() slidesToScroll: number;
  @Input() initialSlide = 0;
  @Input() initialised = false;
  @Input() labelKeys: string[];
  @Input() updateSlots: AppointmentTransformerSlot[];
  @Input() showLoadMore: boolean;
  @Input() consumerType: string;
  @Input() disableLoadMore: boolean;
  @Input() enableAppointmentsUI: boolean;
  @Input() slidesToShow: number;
  @Input() appointmentPickerType: AppointmentPickerTypeEnum;
  @Input() isDeviceLandscape: boolean;
  @Output() loadMore = new EventEmitter();
  @Output() appointmentSlotSelected = new EventEmitter<AppointmentSlotOption>();
  @Output() scrollTo = new EventEmitter<AppointmentPickerTypeEnum>();

  datePickerLabel = '';
  momentPickerLabel = '';
  datePickerErrorLabel = '';
  momentPickerErrorLabel = '';

  selectedAppointmentSlot?: AppointmentTransformerSlot;
  selectedAppointmentMoment?: TimeslotMomentEnum;
  moments: TimeslotMomentEnum[] = [];
  consumerTypeEnum = AppointmentPickerConsumerTypeEnum;

  constructor() {
    super();
    this.moments = this.generateMoments();
  }

  setSelectedAppointment(appointmentSlotOption: AppointmentSlotOption): void {
    this.selectedAppointmentSlot = this.timeslots.find((appointmentSlot) => {
      return (
        appointmentSlotOption.date &&
        InputAppointmentPickerByMomentComponent.isSelectedSlotsAvailable(appointmentSlot, appointmentSlotOption)
      );
    });
    this.selectedAppointmentMoment = this.moments.find((moment) => {
      return moment === appointmentSlotOption.moment;
    });
    this.setInputValue();
  }

  setSelectedAppointmentSlot(appointmentSlot: AppointmentTransformerSlot): void {
    this.getComponent().selectedAppointmentSlot = appointmentSlot;
    this.setInputValue();
  }

  private static isSelectedSlotsAvailable(slot: AppointmentTransformerSlot, selectedSlot: AppointmentSlotOption) {
    return (
      slot.date.getDate() === selectedSlot.date?.getDate() &&
      slot.date.getMonth() === selectedSlot.date?.getMonth() &&
      slot.date.getFullYear() === selectedSlot.date?.getFullYear()
    );
  }

  public getSelectedAppointment(): AppointmentSlotOption {
    return new AppointmentSlotOption(
      this.selectedAppointmentSlot ? this.selectedAppointmentSlot.date : null,
      this.selectedAppointmentMoment ?? null
    );
  }

  private generateMoments(): TimeslotMomentEnum[] {
    const moments = [];
    moments.push(TimeslotMomentEnum.MORNING);
    moments.push(TimeslotMomentEnum.LUNCH);
    moments.push(TimeslotMomentEnum.AFTERNOON);
    moments.push(TimeslotMomentEnum.EVENING);
    return moments;
  }

  getComponent(): InputAppointmentPickerByMomentComponent {
    return this;
  }

  scrollSectionTo($event: AppointmentPickerTypeEnum) {
    super.scrollToSection($event);
  }
}
