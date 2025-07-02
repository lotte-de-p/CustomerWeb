import { CafeTimeSlotList } from '.';

export class CafeTimeSlotListTestfactory {
  static build(properties?: unknown): CafeTimeSlotList {
    const cafeTimeSlotList = new CafeTimeSlotList();
    cafeTimeSlotList.timeslots = [];
    cafeTimeSlotList.firstDays = [];
    cafeTimeSlotList.firstAvailableSlotMonth = 1;

    if (properties) {
      Object.keys(properties).forEach((key) => {
        cafeTimeSlotList[key as keyof CafeTimeSlotList] = properties[key as keyof unknown];
      });
    }

    return cafeTimeSlotList;
  }
}
