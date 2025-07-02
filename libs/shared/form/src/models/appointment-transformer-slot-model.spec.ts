import { TimeslotMomentEnum, TransformedAvailabilityInterface } from '..';
import { AppointmentTransformerSlot } from '.';

describe('AppoinmentTransformerSlot', () => {
  let appointmentTransformerSlot: AppointmentTransformerSlot;

  beforeEach(() => {
    appointmentTransformerSlot = new AppointmentTransformerSlot();
    appointmentTransformerSlot.timeSlots[0] = {} as TransformedAvailabilityInterface;
  });

  describe('hasAvailableMoment', () => {
    it('should return true when the passed in value is all day ant the timeslot has any available moments', () => {
      appointmentTransformerSlot.timeSlots[0].code = TimeslotMomentEnum.MORNING;
      expect(appointmentTransformerSlot.hasAvailableMoment(TimeslotMomentEnum.ALL_DAY)).toBe(true);
    });

    it('should return false when the passed in value is all day ant the timeslot has NO available moments', () => {
      appointmentTransformerSlot.timeSlots[0].code = undefined;
      expect(appointmentTransformerSlot.hasAvailableMoment(TimeslotMomentEnum.ALL_DAY)).toBe(false);
    });

    it('should return true when the passed in value is available in the timeslot', () => {
      appointmentTransformerSlot.timeSlots[0].code = TimeslotMomentEnum.MORNING;
      expect(appointmentTransformerSlot.hasAvailableMoment(TimeslotMomentEnum.MORNING)).toBe(true);
    });

    it('should return false when the passed in value is NOT available in the timeslot', () => {
      appointmentTransformerSlot.timeSlots[0].code = TimeslotMomentEnum.LUNCH;
      expect(appointmentTransformerSlot.hasAvailableMoment(TimeslotMomentEnum.EVENING)).toBe(false);
    });
  });

  describe('getTimeslotMoment', () => {
    it('should return undefined if timeslotMoment property is non existent ', () => {
      appointmentTransformerSlot.timeSlots = [
        { code: TimeslotMomentEnum.MORNING } as TransformedAvailabilityInterface,
        { code: TimeslotMomentEnum.EVENING } as TransformedAvailabilityInterface,
      ];
      expect(appointmentTransformerSlot.getTimeslotMoment?.(TimeslotMomentEnum.MORNING)).toBeUndefined();
    });

    it('should return the moment object based on the moment code if available', () => {
      appointmentTransformerSlot.timeSlots = [
        {
          timeslotMoment: {
            key: TimeslotMomentEnum.MORNING,
            startHours: '08',
            endHours: '11',
            endMinutes: '00',
            startMinutes: '00',
          },
          code: TimeslotMomentEnum.MORNING,
        } as TransformedAvailabilityInterface,
        {
          timeslotMoment: {
            key: TimeslotMomentEnum.EVENING,
            startHours: '17',
            endHours: '20',
            endMinutes: '00',
            startMinutes: '00',
          },
          code: TimeslotMomentEnum.EVENING,
        } as TransformedAvailabilityInterface,
      ];
      const timeslotMoment = appointmentTransformerSlot.getTimeslotMoment(TimeslotMomentEnum.EVENING);

      expect(timeslotMoment).toEqual({
        key: TimeslotMomentEnum.EVENING,
        startHours: '17',
        endHours: '20',
        endMinutes: '00',
        startMinutes: '00',
      });
    });

    it('should return undefined if the moment object based on the moment code is unavailable', () => {
      appointmentTransformerSlot.timeSlots = [
        {
          timeslotMoment: {
            key: TimeslotMomentEnum.MORNING,
            startHours: '08',
            endHours: '11',
            endMinutes: '00',
            startMinutes: '00',
          },
          code: TimeslotMomentEnum.MORNING,
        } as TransformedAvailabilityInterface,
        {
          timeslotMoment: {
            key: TimeslotMomentEnum.EVENING,
            startHours: '17',
            endHours: '20',
            endMinutes: '00',
            startMinutes: '00',
          },
          code: TimeslotMomentEnum.EVENING,
        } as TransformedAvailabilityInterface,
      ];
      expect(appointmentTransformerSlot.getTimeslotMoment?.(TimeslotMomentEnum.LUNCH)).toBeUndefined();
    });
  });
});
