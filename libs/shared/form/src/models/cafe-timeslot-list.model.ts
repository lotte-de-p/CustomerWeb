import { CafeTimeSlot } from './timeslot.model';

export class CafeTimeSlotList {
  firstDays: Date[];
  timeslots: CafeTimeSlot[] = [];
  firstAvailableSlotMonth: number;

  getFirstTimeslot(): CafeTimeSlot {
    const sortedTimeslots = [...this.timeslots].sort(this.compareTimeslot);
    return sortedTimeslots[0];
  }

  getLastTimeslot(): CafeTimeSlot {
    const sortedTimeslots = [...this.timeslots].sort(this.compareTimeslot);
    return sortedTimeslots[this.timeslots.length - 1];
  }

  private compareTimeslot(timeslotA: CafeTimeSlot, timeslotB: CafeTimeSlot): number {
    if (timeslotA.date > timeslotB.date) {
      return 1;
    } else if (timeslotA.date < timeslotB.date) {
      return -1;
    }
    return 0;
  }
}
