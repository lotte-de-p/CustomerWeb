import { NCTimeSlotAvailability } from './timeslot-availability.model';
import { TimeslotMomentEnum } from '../enums';
import { TimeSlotInterface } from '../interfaces';

export class NCTimeSlot implements TimeSlotInterface {
  date: Date;
  timeSlots: NCTimeSlotAvailability[] = [];

  public hasAvailableMoments(): boolean {
    return this.timeSlots.some((slots) => {
      return slots.code;
    });
  }

  public hasAvailableMoment(momentKey: TimeslotMomentEnum): boolean {
    if (momentKey === TimeslotMomentEnum.ALL_DAY) {
      return this.hasAvailableMoments();
    }

    return this.timeSlots.some((slots) => {
      return slots.code === momentKey;
    });
  }
}
