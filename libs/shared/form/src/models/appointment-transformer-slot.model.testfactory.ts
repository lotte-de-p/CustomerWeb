import { AppointmentTransformerSlot } from '.';
import { TimeslotMomentEnum } from '../enums';
import { TransformedAvailabilityInterface } from '../interfaces';

export class AppointmentTransformerSlotModelTestFactory {
  static build(properties?: unknown): AppointmentTransformerSlot {
    const appointmentTransformerSlot = new AppointmentTransformerSlot();
    const slot1 = {} as TransformedAvailabilityInterface;
    slot1.code = TimeslotMomentEnum.MORNING;
    appointmentTransformerSlot.date = new Date();
    appointmentTransformerSlot.timeSlots = [slot1];
    if (properties) {
      Object.keys(properties).forEach((key) => {
        if (properties[key as keyof unknown] === null) {
          delete appointmentTransformerSlot[key as keyof AppointmentTransformerSlot];
        } else {
          appointmentTransformerSlot[key as keyof unknown] = properties[key as keyof unknown];
        }
      });
    }
    return appointmentTransformerSlot;
  }
}
