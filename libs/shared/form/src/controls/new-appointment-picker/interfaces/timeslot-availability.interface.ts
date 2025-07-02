import { TimeslotMomentEnum } from '../../../enums/timeslot.enum';

export interface TimeslotAvailabilityInterface {
  timeslot: TimeslotMomentEnum;
  available: boolean;
  displayTime: string;
  label: string;
}
