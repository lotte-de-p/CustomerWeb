import { TimeSlotEnum } from './raw-available.timeslot';

export class AvailableTimeSlots {
  date!: string;
  timeSlots!: TimeSlot[];
}

export interface TimeSlot {
  availabilityId: string;
  timeSlotCode: TimeSlotEnum;
  specUrl: string;
}
