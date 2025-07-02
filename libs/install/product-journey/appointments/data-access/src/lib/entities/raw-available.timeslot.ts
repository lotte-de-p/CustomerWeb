export class RawAvailableTimeslot {
  date!: string;
  timeSlots!: RawTimeSlot[];
}

export interface RawTimeSlot {
  availabilityId: string;
  timeSlotCode: TimeSlotEnum;
  specurl: string;
}

export enum TimeSlotEnum {
  ALL_DAY,
  DAY = 'DAY',
  AM = 'MORNING',
  MI = 'LUNCH',
  PM = 'AFTERNOON',
  EV = 'EVENING',
}
