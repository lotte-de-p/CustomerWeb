import { TimeslotMomentEnum } from '../enums';
import { NCTimeSlot } from './nc-timeslot.model';
import { NCTimeSlotAvailability } from './timeslot-availability.model';

describe('NCTimeSlotModel', () => {
  let nCTimeSlot: NCTimeSlot;
  beforeEach(() => {
    nCTimeSlot = new NCTimeSlot();
    nCTimeSlot.timeSlots[0] = new NCTimeSlotAvailability();
  });

  describe('hasAvailableMoment', () => {
    it('should return true when the passed in value is all day ant the timeslot has any available moments', () => {
      nCTimeSlot.timeSlots[0].code = TimeslotMomentEnum.MORNING;
      expect(nCTimeSlot.hasAvailableMoment(TimeslotMomentEnum.ALL_DAY)).toBe(true);
    });

    it('should return false when the passed in value is all day ant the timeslot has NO available moments', () => {
      nCTimeSlot.timeSlots[0].code = undefined;
      expect(nCTimeSlot.hasAvailableMoment(TimeslotMomentEnum.ALL_DAY)).toBe(false);
    });

    it('should return true when the passed in value is available in the timeslot', () => {
      nCTimeSlot.timeSlots[0].code = TimeslotMomentEnum.MORNING;
      expect(nCTimeSlot.hasAvailableMoment(TimeslotMomentEnum.MORNING)).toBe(true);
    });

    it('should return false when the passed in value is NOT available in the timeslot', () => {
      nCTimeSlot.timeSlots[0].code = TimeslotMomentEnum.LUNCH;
      expect(nCTimeSlot.hasAvailableMoment(TimeslotMomentEnum.EVENING)).toBe(false);
    });
  });
});
