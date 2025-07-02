import { OmapiProductTestfactory } from '@telenet/ng-lib-omapi';
import { TimeslotMomentEnum } from '../enums';
import { NCTimeSlotAvailability } from './timeslot-availability.model';

export class NCTimeSlotAvailabilityTestFactory {
  static build(properties?: unknown): NCTimeSlotAvailability {
    const timeSlotAvailability = new NCTimeSlotAvailability();
    timeSlotAvailability.timeFormat = '00+00';
    timeSlotAvailability.code = TimeslotMomentEnum.LUNCH;
    timeSlotAvailability.specUrl = 'http://specurl.test';
    timeSlotAvailability.availabilityId = '123456789';
    timeSlotAvailability.productInfo = OmapiProductTestfactory.build();

    if (properties) {
      Object.keys(properties).forEach((key) => {
        if (properties[key as keyof unknown] === null) {
          delete timeSlotAvailability[key as keyof unknown];
        } else {
          timeSlotAvailability[key as keyof unknown] = properties[key as keyof unknown];
        }
      });
    }
    return timeSlotAvailability;
  }
}
