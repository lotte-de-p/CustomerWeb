import { NCTimeSlot } from './nc-timeslot.model';
import { NCTimeSlotList } from './timeslot-list.model';
import dayjs from 'dayjs';

describe('NCTimeSlotList', () => {
  it('should sort on date', function () {
    const ncTimeSlotList = new NCTimeSlotList();
    const firstTimeSlot = new NCTimeSlot();
    const secondTimeSlot = new NCTimeSlot();
    const thirdTimeSlot = new NCTimeSlot();
    const forthTimeSlot = new NCTimeSlot();
    const dateFactory = dayjs();
    firstTimeSlot.date = new Date(dateFactory.add(1).date());
    secondTimeSlot.date = new Date(dateFactory.add(3).date());
    secondTimeSlot.date = new Date(dateFactory.add(2).date());
    forthTimeSlot.date = new Date(dateFactory.add(2).date());
    ncTimeSlotList.availabilities = [forthTimeSlot, secondTimeSlot, thirdTimeSlot, firstTimeSlot];
    const firstTimeslot = ncTimeSlotList.getFirstTimeslot();
    const lastTimeslot = ncTimeSlotList.getLastTimeslot();
    expect(firstTimeslot.date).toEqual(firstTimeSlot.date);
    expect(lastTimeslot.date).toEqual(secondTimeSlot.date);
  });
});
