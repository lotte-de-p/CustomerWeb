import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TimeslotMomentInterface } from '../interfaces';
import { TimeslotUtil } from '../utils';
import { AppointmentSlotOption } from '../controls';

export interface AppointmentPickerObject {
  dateString: string;
  startTimeString: string;
  endTimeString: string;
}

@Pipe({
  name: 'appointmentObject',
})
export class AppointmentPickerObjectPipe implements PipeTransform {
  constructor(private readonly datePipe: DatePipe) {}

  transform(appointmentSlot: AppointmentSlotOption, _args?: unknown): AppointmentPickerObject {
    const dateString = this.datePipe.transform(appointmentSlot.date, 'dd MMMM yyyy');
    const startTimeString = this.transformStartTimeToString(TimeslotUtil.enumToMomentObject(appointmentSlot.moment));
    const endTimeString = this.transformEndTimeToString(TimeslotUtil.enumToMomentObject(appointmentSlot.moment));

    return {
      dateString: dateString || '',
      startTimeString: startTimeString,
      endTimeString: endTimeString,
    };
  }

  private transformStartTimeToString(moment?: TimeslotMomentInterface): string {
    return `${moment?.startHours}:${moment?.startMinutes}`;
  }

  private transformEndTimeToString(moment?: TimeslotMomentInterface): string {
    return `${moment?.endHours}:${moment?.endMinutes}`;
  }
}
