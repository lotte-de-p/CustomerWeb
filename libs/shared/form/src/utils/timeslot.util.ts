import { Observable, of } from 'rxjs';
import { TimeslotMoment, TimeslotMomentEnum } from '../enums';
import { TimeslotMomentInterface } from '../interfaces';
import { AppointmentTransformerSlot } from '../models';

export class TimeslotUtil {
  static stringToEnum(moment: string): TimeslotMomentEnum | undefined {
    switch (moment) {
      case 'MORNING':
        return TimeslotMomentEnum.MORNING;
      case 'LUNCH':
        return TimeslotMomentEnum.LUNCH;
      case 'AFTERNOON':
        return TimeslotMomentEnum.AFTERNOON;
      case 'EVENING':
        return TimeslotMomentEnum.EVENING;
      case 'DAY':
        return TimeslotMomentEnum.DAY;
      default:
        return undefined;
    }
  }

  static enumToString(moment: TimeslotMomentEnum): string | undefined {
    switch (moment) {
      case TimeslotMomentEnum.MORNING:
        return 'MORNING';
      case TimeslotMomentEnum.LUNCH:
        return 'LUNCH';
      case TimeslotMomentEnum.AFTERNOON:
        return 'AFTERNOON';
      case TimeslotMomentEnum.EVENING:
        return 'EVENING';
      case TimeslotMomentEnum.DAY:
        return 'DAY';
      default:
        return undefined;
    }
  }

  static enumToMomentObject(moment: TimeslotMomentEnum | null): TimeslotMomentInterface | undefined {
    if (!moment) {
      return undefined;
    }
    switch (moment) {
      case TimeslotMomentEnum.DAY:
        return TimeslotMoment.DAY;
      case TimeslotMomentEnum.MORNING:
        return TimeslotMoment.MORNING;
      case TimeslotMomentEnum.LUNCH:
        return TimeslotMoment.LUNCH;
      case TimeslotMomentEnum.AFTERNOON:
        return TimeslotMoment.AFTERNOON;
      case TimeslotMomentEnum.EVENING:
        return TimeslotMoment.EVENING;
      default:
        return undefined;
    }
  }

  static objectToEnum(moment: TimeslotMomentInterface): TimeslotMomentEnum | undefined {
    switch (moment) {
      case TimeslotMoment.DAY:
        return TimeslotMomentEnum.DAY;
      case TimeslotMoment.MORNING:
        return TimeslotMomentEnum.MORNING;
      case TimeslotMoment.LUNCH:
        return TimeslotMomentEnum.LUNCH;
      case TimeslotMoment.AFTERNOON:
        return TimeslotMomentEnum.AFTERNOON;
      case TimeslotMoment.EVENING:
        return TimeslotMomentEnum.EVENING;
      default:
        return undefined;
    }
  }

  static calculateTimeSlotsAvailability(
    slots: AppointmentTransformerSlot[],
    disableNoAvailableSlots?: boolean
  ): Observable<boolean> {
    return of(disableNoAvailableSlots || slots.some((slot: AppointmentTransformerSlot) => slot.timeSlots.length > 0));
  }

  static shouldUpdateTimeSlots(
    updateSlots: AppointmentTransformerSlot[],
    timeSlots: AppointmentTransformerSlot[]
  ): boolean {
    return (
      updateSlots &&
      timeSlots[timeSlots.length - 1]?.date.getTime() !== updateSlots[updateSlots.length - 1]?.date.getTime()
    );
  }
}
