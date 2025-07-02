import { NCTimeSlot } from './nc-timeslot.model';
import { NCTimeSlotAvailabilityTestFactory } from './timeslot-availability.model.testfactory';

export class NCTimeslotModelTestFactory {
  static build(properties?: unknown): NCTimeSlot {
    const timeslot = new NCTimeSlot();
    timeslot.date = new Date();
    timeslot.timeSlots = [NCTimeSlotAvailabilityTestFactory.build()];

    if (properties) {
      Object.keys(properties).forEach((key) => {
        if (properties[key as keyof unknown] === null) {
          delete timeslot[key as keyof unknown];
        } else {
          timeslot[key as keyof unknown] = properties[key as keyof unknown];
        }
      });
    }
    return timeslot;
  }
}
