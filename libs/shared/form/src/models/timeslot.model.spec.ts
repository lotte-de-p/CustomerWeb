import { CafeTimeSlot } from './timeslot.model';
import { TimeslotMomentEnum } from '../enums/timeslot.enum';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';

describe('CafeTimeSlotModel', () => {
  let cafeTimeSlot: CafeTimeSlot;
  beforeEach(() => {
    cafeTimeSlot = new CafeTimeSlot();
  });

  describe('getFirstCafeTimeSlot', () => {
    it('should return true if there are moments', () => {
      cafeTimeSlot.moments = [TimeslotMomentEnum.MORNING, TimeslotMomentEnum.LUNCH];
      expect(cafeTimeSlot.hasAvailableMoments()).toBe(true);
    });

    it('should return true false if there are no moments', () => {
      cafeTimeSlot.moments = [];
      expect(cafeTimeSlot.hasAvailableMoments()).toBe(false);
    });
  });

  describe('hasAvailableMoment', () => {
    it('should return true when the passed in value is all day ant the CafeTimeSlot has any available moments', () => {
      cafeTimeSlot.moments = [TimeslotMomentEnum.MORNING, TimeslotMomentEnum.LUNCH];
      expect(cafeTimeSlot.hasAvailableMoment(TimeslotMomentEnum.ALL_DAY)).toBe(true);
    });

    it('should return false when the passed in value is all day ant the CafeTimeSlot has NO available moments', () => {
      cafeTimeSlot.moments = [];
      expect(cafeTimeSlot.hasAvailableMoment(TimeslotMomentEnum.ALL_DAY)).toBe(false);
    });

    it('should return true when the passed in value is available in the CafeTimeSlot', () => {
      cafeTimeSlot.moments = [TimeslotMomentEnum.MORNING, TimeslotMomentEnum.LUNCH];
      expect(cafeTimeSlot.hasAvailableMoment(TimeslotMomentEnum.MORNING)).toBe(true);
    });

    it('should return false when the passed in value is NOT available in the CafeTimeSlot', () => {
      cafeTimeSlot.moments = [TimeslotMomentEnum.MORNING, TimeslotMomentEnum.LUNCH];
      expect(cafeTimeSlot.hasAvailableMoment(TimeslotMomentEnum.EVENING)).toBe(false);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
