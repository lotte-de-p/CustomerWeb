import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TimeslotUtil } from '../utils';
import { TimeslotMomentInterface } from '../interfaces';
import { AppointmentSlotOption } from '../controls';

@Pipe({
  name: 'appointmentFormat',
})
export class AppointmentPickerPipe implements PipeTransform {
  constructor(private readonly datePipe: DatePipe) {}

  transform(appointmentSlot: AppointmentSlotOption, _args?: unknown[]): string {
    const dateString = this.datePipe.transform(appointmentSlot.date, 'dd MMMM yyyy');
    const startTimeString = this.transformStartTimeToString(TimeslotUtil.enumToMomentObject(appointmentSlot?.moment));
    const endTimeString = this.transformEndTimeToString(TimeslotUtil.enumToMomentObject(appointmentSlot?.moment));
    return `${dateString} - ${startTimeString} tot ${endTimeString}`;
  }

  private transformStartTimeToString(moment?: TimeslotMomentInterface): string {
    return `${moment?.startHours}:${moment?.startMinutes}`;
  }

  private transformEndTimeToString(moment?: TimeslotMomentInterface): string {
    return `${moment?.endHours}:${moment?.endMinutes}`;
  }
}
