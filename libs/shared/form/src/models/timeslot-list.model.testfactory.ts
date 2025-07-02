import { NCTimeSlotList } from './timeslot-list.model';
import { NCTimeslotModelTestFactory } from './nc-timeslot.model.testfactory';

export class NCTimeSlotListTestFactory {
  static build(properties?: unknown): NCTimeSlotList {
    const timeslotList = new NCTimeSlotList();
    timeslotList.availabilities = [NCTimeslotModelTestFactory.build()];

    if (properties) {
      Object.keys(properties).forEach((key) => {
        if (properties[key as keyof unknown] === null) {
          delete timeslotList[key as keyof unknown];
        } else {
          timeslotList[key as keyof unknown] = properties[key as keyof unknown];
        }
      });
    }
    return timeslotList;
  }
}
