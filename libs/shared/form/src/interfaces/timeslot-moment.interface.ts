import { TimeslotMomentEnum } from '../enums/timeslot.enum';

export interface TimeslotMomentInterface {
  key: TimeslotMomentEnum;
  startHours: string;
  startMinutes: string;
  endHours: string;
  endMinutes: string;
}
