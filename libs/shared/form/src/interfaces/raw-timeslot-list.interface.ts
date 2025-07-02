import { RawOmapiProductInterface } from '@telenet/ng-lib-omapi';
import { TimeslotMomentEnum } from '../enums';

export interface RawCafeTimeslotListInterface {
  firstDays: Record<string, string>;
  slots: RawCafeTimeslotMontInterface;
  firstAvailableSlotMonth: number;
}

export interface RawNCTimeSlotListInterface {
  availabilities: RawNCTimeSlotInterface[];
  isFtthAppointment?: boolean;
}
export interface RawNCTimeSlotInterface {
  date: Date;
  slots: RawNCTimeSlotAvailabilityInterface[];
}

export interface RawNCTimeSlotAvailabilityInterface {
  timeFormat: string;
  availabilityId: string;
  timeSlotCode: string;
  specURL: string;
  rawOmapi?: RawOmapiProductInterface;
}

export interface RawCafeTimeslotMontInterface {
  days: RawCafeTimeslotDayInterface[];
}

export interface RawCafeTimeslotDayInterface {
  day: RawCafeTimeSlotInterface | false;
}

export interface RawCafeTimeSlotInterface {
  date: Date;
  timing: string[];
}

export interface TimeSlotInterface {
  date: Date;
  hasAvailableMoments(): boolean;
  hasAvailableMoment(momentKey: TimeslotMomentEnum): boolean;
}
