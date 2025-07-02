import { TimeSlotInterface, TimeslotMomentInterface } from '../interfaces';
import { TimeslotMomentEnum } from '../enums';

export class CafeTimeSlot implements TimeSlotInterface {
  date: Date;
  moments: TimeslotMomentEnum[] = [];
  momentObjects?: TimeslotMomentInterface[] = [];
  isCustomMoment = false;

  constructor(date?: Date, moments?: TimeslotMomentEnum[]) {
    if (date) {
      this.date = date;
    }
    if (moments) {
      this.moments = moments;
    }
  }

  public hasAvailableMoments(): boolean {
    return this.moments.length > 0;
  }

  public hasAvailableMoment(momentKey: TimeslotMomentEnum): boolean {
    if (momentKey === TimeslotMomentEnum.ALL_DAY) {
      return this.hasAvailableMoments();
    }
    return !!this.moments.find((moment) => {
      return moment === momentKey;
    });
  }
}
