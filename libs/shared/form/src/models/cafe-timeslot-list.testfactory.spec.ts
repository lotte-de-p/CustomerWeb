import { CafeTimeSlotListTestfactory } from './cafe-timeslot-list.testfactory';

describe('CafeTimeSlotListTestfactory', () => {
  it('should change with parameters', function () {
    let cafeTimeSlotList = CafeTimeSlotListTestfactory.build();
    expect(cafeTimeSlotList.firstAvailableSlotMonth).toEqual(1);
    cafeTimeSlotList = CafeTimeSlotListTestfactory.build({ firstAvailableSlotMonth: 2 });
    expect(cafeTimeSlotList.firstAvailableSlotMonth).toEqual(2);
  });
});
