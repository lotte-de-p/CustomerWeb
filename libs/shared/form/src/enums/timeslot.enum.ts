import { TimeslotMomentInterface } from '../interfaces';

export enum TimeslotMomentEnum {
  ALL_DAY,
  DAY = 'DAY',
  MORNING = 'MORNING',
  LUNCH = 'LUNCH',
  AFTERNOON = 'AFTERNOON',
  EVENING = 'EVENING',
}

export class TimeslotMoment {
  static readonly DAY: TimeslotMomentInterface = {
    key: TimeslotMomentEnum.DAY,
    startHours: '08',
    startMinutes: '00',
    endHours: '18',
    endMinutes: '00',
  };

  static readonly MORNING: TimeslotMomentInterface = {
    key: TimeslotMomentEnum.MORNING,
    startHours: '08',
    startMinutes: '00',
    endHours: '13',
    endMinutes: '00',
  };

  static readonly LUNCH: TimeslotMomentInterface = {
    key: TimeslotMomentEnum.LUNCH,
    startHours: '10',
    startMinutes: '00',
    endHours: '14',
    endMinutes: '30',
  };

  static readonly AFTERNOON: TimeslotMomentInterface = {
    key: TimeslotMomentEnum.AFTERNOON,
    startHours: '12',
    startMinutes: '30',
    endHours: '18',
    endMinutes: '00',
  };

  static readonly EVENING: TimeslotMomentInterface = {
    key: TimeslotMomentEnum.EVENING,
    startHours: '17',
    startMinutes: '00',
    endHours: '20',
    endMinutes: '00',
  };
}
