import { EventEmitter } from '@angular/core';
import { AppointmentPickerTypeEnum } from './appointment-picker-type.enum';
import { TimeslotMomentEnum } from '../../enums';
import { AppointmentTransformerSlot } from '../../models';
import { AppointmentSlotOption } from './appointment-slot-option.model';

export interface AppointmentPickerByTemporalComponentInterface {
  selectedAppointmentMoment?: TimeslotMomentEnum;
  selectedAppointmentSlot?: AppointmentTransformerSlot;
  scrollTo: EventEmitter<AppointmentPickerTypeEnum>;
  appointmentSlotSelected: EventEmitter<AppointmentSlotOption>;
  loadMore: EventEmitter<unknown>;
  datePickerLabel: string;
  momentPickerLabel: string;
  datePickerErrorLabel: string;
  momentPickerErrorLabel: string;
  error: unknown;
}
