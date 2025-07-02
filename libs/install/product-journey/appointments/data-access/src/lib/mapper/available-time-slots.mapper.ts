import { RawAvailableTimeslot, RawTimeSlot } from '../entities/raw-available.timeslot';
import { AvailableTimeSlots, TimeSlot } from '../entities/available.timeslots';

export class AvailableTimeSlotsMapper {
  static toModel(rawAvailableTimeSlots: RawAvailableTimeslot[]): AvailableTimeSlots[] {
    return rawAvailableTimeSlots.map((raw) => ({
      date: raw.date,
      timeSlots: this.mapAvailableTimeSlots(raw.timeSlots),
    }));
  }

  private static mapAvailableTimeSlots(rawTimeSlots: RawTimeSlot[]): TimeSlot[] {
    return rawTimeSlots.map((raw) => ({
      availabilityId: raw.availabilityId,
      timeSlotCode: raw.timeSlotCode,
      specUrl: raw.specurl,
    }));
  }
}
