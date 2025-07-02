import { TestBed } from '@angular/core/testing';
import { OutdoorAppointmentMapper } from './outdoor-appointment.mapper';

describe('OutdoorAppointmentMapper', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OutdoorAppointmentMapper],
    });
  });

  it('should map available time slots', () => {
    const OUTDOOR_APPOINTMENT = {
      locationIds: ['9169507398513822922'],
    };
    const outdoorAppointment = OutdoorAppointmentMapper.toModel(OUTDOOR_APPOINTMENT);
    expect(outdoorAppointment).toEqual(OUTDOOR_APPOINTMENT);
  });
});
