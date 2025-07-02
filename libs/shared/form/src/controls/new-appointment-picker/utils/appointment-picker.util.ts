import { floor } from 'lodash-es';
import { AppointmentTransformerSlot } from '../../../models';
import { TimeslotMomentEnum } from '../../../enums';
import { LabelUtil } from '../../../utils';

export class AppointmentPickerUtil {
  static compareDate(appointmentA: AppointmentTransformerSlot, appointmentB: AppointmentTransformerSlot): boolean {
    return !(appointmentA.date < appointmentB.date || appointmentA.date > appointmentB.date);
  }

  static getInitialSlideIndex(selectedSlotIndex: number, slidesToScroll: number): number {
    return floor(selectedSlotIndex / slidesToScroll) * slidesToScroll;
  }

  static getSelectedDateSlotIndex(
    timeslots: AppointmentTransformerSlot[],
    selectedTimeslot: AppointmentTransformerSlot
  ): number {
    return timeslots.findIndex((slot) => {
      return slot.date.getTime() === selectedTimeslot.date.getTime();
    });
  }

  static getTimeslotLabel(timeslot: TimeslotMomentEnum, messageGroup?: string, suffix?: string) {
    const labelKeys: string[] = [];
    if (messageGroup) {
      labelKeys.push(messageGroup);
    }
    labelKeys.push('timeslots');

    switch (timeslot) {
      case TimeslotMomentEnum.DAY:
        labelKeys.push('day');
        break;
      case TimeslotMomentEnum.ALL_DAY:
        labelKeys.push('all-day');
        break;
      case TimeslotMomentEnum.MORNING:
        labelKeys.push('morning');
        break;
      case TimeslotMomentEnum.LUNCH:
        labelKeys.push('lunch');
        break;
      case TimeslotMomentEnum.EVENING:
        labelKeys.push('evening');
        break;
      case TimeslotMomentEnum.AFTERNOON:
        labelKeys.push('afternoon');
        break;
    }

    if (suffix) {
      labelKeys.push(suffix);
    }

    return LabelUtil.getLabelKeyWithTypeLabel(labelKeys.join('.'));
  }
}
