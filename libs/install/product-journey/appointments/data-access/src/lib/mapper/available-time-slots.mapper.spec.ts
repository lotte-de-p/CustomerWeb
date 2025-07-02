import { TimeSlotEnum } from '../entities/raw-available.timeslot';
import { TestBed } from '@angular/core/testing';
import { AvailableTimeSlotsMapper } from './available-time-slots.mapper';

describe('AvailableTimeSlotsMapper', () => {
  const SPEC_URL = 'https://api.int.telenet.be/omapi/public/product/APPT0000';
  const TIMESLOTS = {
    date: '2023-10-30',
    timeSlots: [
      {
        availabilityId: '1234',
        timeSlotCode: TimeSlotEnum.AM,
        specurl: SPEC_URL,
      },
      {
        availabilityId: '4567',
        timeSlotCode: TimeSlotEnum.MI,
        specurl: SPEC_URL,
      },
    ],
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AvailableTimeSlotsMapper],
    });
  });

  it('should map available time slots', () => {
    const availableTimeSlots = AvailableTimeSlotsMapper.toModel([TIMESLOTS]);
    expect(availableTimeSlots[0].date).toEqual('2023-10-30');
    expect(availableTimeSlots[0].timeSlots[0]).toEqual({
      availabilityId: '1234',
      timeSlotCode: TimeSlotEnum.AM,
      specUrl: SPEC_URL,
    });
  });
});
