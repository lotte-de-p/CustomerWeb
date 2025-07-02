import { TimeSlotInterface, TimeslotMomentInterface, TransformedAvailabilityInterface } from '../interfaces';
import { TimeslotMomentEnum } from '../enums';

export class AppointmentTransformerSlot implements TimeSlotInterface {
  date: Date;
  timeSlots: TransformedAvailabilityInterface[] = [];
  isCustomMoment? = false;

  hasAvailableMoments(): boolean {
    return this.timeSlots.some((slots) => {
      return slots.code;
    });
  }

  hasAvailableMoment(momentKey: TimeslotMomentEnum): boolean {
    if (momentKey === TimeslotMomentEnum.ALL_DAY) {
      return this.hasAvailableMoments();
    }

    return this.timeSlots.some((slots) => {
      return slots.code === momentKey;
    });
  }

  getTimeslotMoment(momentKey: TimeslotMomentEnum): TimeslotMomentInterface | undefined {
    return this.timeSlots
      .filter((slot) => slot.code === momentKey)
      .map((slot) => slot.timeslotMoment)
      .shift();
  }
}
