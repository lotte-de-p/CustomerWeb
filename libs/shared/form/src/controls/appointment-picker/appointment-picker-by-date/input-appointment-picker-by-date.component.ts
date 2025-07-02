import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { TimeslotMomentEnum } from '../../../enums';
import { AppointmentTransformerSlot } from '../../../models';
import { AppointmentPickerComponentInterface } from '../appointment-picker-component.interface';
import { AppointmentPickerTypeEnum } from '../appointment-picker-type.enum';
import { AppointmentSlotOption } from '../appointment-slot-option.model';
import { AppointmentPickerConsumerTypeEnum } from '../../../interfaces';
import { AppointmentPickerByTemporalComponentInterface } from '../appointment-picker-by-temporal-component.interface';
import { AbstractAppointmentPickerByTemporalComponent } from '../abstract-appointment-picker-by-temporal.component';

@Component({
  selector: 'app-form-appointment-picker-by-date',
  templateUrl: './input-appointment-picker-by-date.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputAppointmentPickerByDateComponent),
      multi: true,
    },
  ],
})
export class InputAppointmentPickerByDateComponent
  extends AbstractAppointmentPickerByTemporalComponent<InputAppointmentPickerByDateComponent>
  implements AppointmentPickerComponentInterface, AppointmentPickerByTemporalComponentInterface
{
  messageGroup: string;
  @Input() error: unknown;
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
  @Output() appointmentSlotSelected = new EventEmitter<AppointmentSlotOption>();
  @Output() loadMore = new EventEmitter();
  @Output() scrollTo = new EventEmitter<AppointmentPickerTypeEnum>();

  datePickerLabel = '';
  momentPickerLabel = '';
  datePickerErrorLabel = '';
  momentPickerErrorLabel = '';

  selectedAppointmentSlot?: AppointmentTransformerSlot;
  selectedAppointmentMoment?: TimeslotMomentEnum;
  consumerTypeEnum = AppointmentPickerConsumerTypeEnum;

  setSelectedAppointment(appointmentSlotOption: AppointmentSlotOption): void {
    if (appointmentSlotOption.date || appointmentSlotOption.moment) {
      this.selectedAppointmentSlot = this.timeslots.find((appointmentSlot) => {
        return (
          appointmentSlot.date.getDate() === appointmentSlotOption.date?.getDate() &&
          appointmentSlot.date.getMonth() === appointmentSlotOption.date?.getMonth() &&
          appointmentSlot.date.getFullYear() === appointmentSlotOption.date?.getFullYear()
        );
      });
      if (this.selectedAppointmentSlot) {
        this.selectedAppointmentSlot.timeSlots.forEach((moment) => {
          if (moment.code === appointmentSlotOption.moment) {
            this.selectedAppointmentMoment = moment.code;
          }
        });
        this.setInputValue();
      }
    }
  }

  setSelectedAppointmentSlot(appointmentSlot: AppointmentTransformerSlot): void {
    this.getComponent().selectedAppointmentSlot = appointmentSlot;
    this.getComponent().selectedAppointmentMoment = undefined;
    this.setInputValue();
  }

  public getSelectedAppointment(): AppointmentSlotOption {
    return new AppointmentSlotOption(
      this.selectedAppointmentSlot?.date || null,
      this.selectedAppointmentMoment as TimeslotMomentEnum
    );
  }

  getComponent(): InputAppointmentPickerByDateComponent {
    return this;
  }
}
