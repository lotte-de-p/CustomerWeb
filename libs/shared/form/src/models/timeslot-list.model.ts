import { NCTimeSlot } from './nc-timeslot.model';

export class NCTimeSlotList {
  availabilities: NCTimeSlot[] = [];
  isFtthAppointment?: boolean;

  getFirstTimeslot(): NCTimeSlot {
    const sortedTimeslots = [...this.availabilities].sort(this.compareTimeslot);
    return sortedTimeslots[0];
  }

  getLastTimeslot(): NCTimeSlot {
    const sortedTimeslots = [...this.availabilities].sort(this.compareTimeslot);
    return sortedTimeslots[this.availabilities.length - 1];
  }

  private compareTimeslot(timeslotA: NCTimeSlot, timeslotB: NCTimeSlot): number {
    if (timeslotA.date > timeslotB.date) {
      return 1;
    } else if (timeslotA.date < timeslotB.date) {
      return -1;
    }
    return 0;
  }
}
