import { AppointmentSlotOption } from '.';
import { TimeslotMomentEnum } from '../../enums';
import { transformedAvailabilityInterfaceTestfactory } from '../../interfaces/appointment-transformer-availability.interface.testfactory';

export class AppointmentSlotOptionTestfactory {
  static build(properties?: unknown): AppointmentSlotOption {
    const appointmentSlotOption: AppointmentSlotOption = {
      date: new Date(),
      moment: TimeslotMomentEnum.ALL_DAY,
      slots: transformedAvailabilityInterfaceTestfactory.build(),
    };

    if (properties) {
      Object.keys(properties).forEach((key) => {
        appointmentSlotOption[key as keyof AppointmentSlotOption] = properties[key as keyof typeof properties];
      });
    }

    return appointmentSlotOption;
  }
}
