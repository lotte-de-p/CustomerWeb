import { CafeTimeSlot } from './timeslot.model';
import { CafeTimeSlotList } from './cafe-timeslot-list.model';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';

function createTimeslot(year: number, month: number, day: number) {
  const cafeTimeSlot = new CafeTimeSlot();
  cafeTimeSlot.date = new Date(year, month, day);
  return cafeTimeSlot;
}

describe('CafeTimeSlotModel', () => {
  let cafeTimeSlotList: CafeTimeSlotList;
  beforeEach(() => {
    cafeTimeSlotList = new CafeTimeSlotList();
    cafeTimeSlotList.timeslots.push(createTimeslot(2019, 10, 1));
    cafeTimeSlotList.timeslots.push(createTimeslot(2019, 9, 1));
    cafeTimeSlotList.timeslots.push(createTimeslot(2019, 11, 1));
    cafeTimeSlotList.timeslots.push(createTimeslot(2019, 8, 1));
  });

  describe('getFirstTimeslot', () => {
    it('should return the first timeslot', () => {
      expect(cafeTimeSlotList.getFirstTimeslot().date.getMonth()).toBe(8);
    });
  });

  describe('getLastTimeslot', () => {
    it('should return the last timeslot', () => {
      expect(cafeTimeSlotList.getLastTimeslot().date.getMonth()).toBe(11);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
