import { TimeslotMomentEnum } from '../../enums';
import { TransformedAvailabilityInterface } from '../../interfaces';

export class AppointmentSlotOption {
  date: Date | null;
  moment: TimeslotMomentEnum | null;
  slots?: TransformedAvailabilityInterface;

  constructor(date: Date | null, moment: TimeslotMomentEnum | null) {
    this.date = date;
    this.moment = moment;
  }
}
