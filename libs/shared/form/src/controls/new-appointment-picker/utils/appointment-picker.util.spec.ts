import { AppointmentTransformerSlotModelTestFactory } from '../../../models/appointment-transformer-slot.model.testfactory';
import { AppointmentPickerUtil } from './appointment-picker.util';
import { TimeslotMomentEnum } from '../../../enums';

const messageGroup = 'test-messagegroup';
describe('AppointmentPickerUtil', () => {
  describe('compareDate', () => {
    it('should return falsee if dates are not the same', function () {
      const date1 = new Date(1);
      const date2 = new Date(1);

      const slot1 = AppointmentTransformerSlotModelTestFactory.build({ date: date1 });
      const slot2 = AppointmentTransformerSlotModelTestFactory.build({ date: date2 });

      const actual = AppointmentPickerUtil.compareDate(slot1, slot2);
      expect(actual).toBe(true);
    });

    it('should return true if dates are the same', function () {
      const date1 = new Date(1);
      const date2 = new Date(1);
      date2.setDate(date2.getDate() + 1);

      const slot1 = AppointmentTransformerSlotModelTestFactory.build({ date: date1 });
      const slot2 = AppointmentTransformerSlotModelTestFactory.build({ date: date2 });

      const actual = AppointmentPickerUtil.compareDate(slot1, slot2);
      expect(actual).toBe(false);
    });
  });
  describe('getInitialSlideIndex', () => {
    it('should return the slice where the selected slot resides', function () {
      const selectedSlotIndex = 18;
      const slotsToSlide = 4;
      const actual = AppointmentPickerUtil.getInitialSlideIndex(selectedSlotIndex, slotsToSlide);
      expect(actual).toBe(16);
    });
  });
  describe('getSelectedDateSlotIndex', () => {
    it('should return the correct timeslot from an array of timeslots', function () {
      const date1 = new Date(1);
      const date2 = new Date(2);
      const date3 = new Date(3);
      const timeslot1 = AppointmentTransformerSlotModelTestFactory.build({ date: date1 });
      const timeslot2 = AppointmentTransformerSlotModelTestFactory.build({ date: date2 });
      const timeslot3 = AppointmentTransformerSlotModelTestFactory.build({ date: date3 });

      const date4 = new Date(2);
      const timeslotToFind = AppointmentTransformerSlotModelTestFactory.build({ date: date4 });
      const actual = AppointmentPickerUtil.getSelectedDateSlotIndex([timeslot1, timeslot2, timeslot3], timeslotToFind);
      expect(actual).toBe(1);
    });
  });

  describe('getTimeslotLabel', () => {
    it('should return a correct label for the day', function () {
      expect(AppointmentPickerUtil.getTimeslotLabel(TimeslotMomentEnum.DAY, messageGroup, 'testsuffix')).toBe(
        'ng.test-messagegroup.timeslots.day.testsuffix.lbl'
      );
    });

    it('should return a correct label for all day', function () {
      expect(AppointmentPickerUtil.getTimeslotLabel(TimeslotMomentEnum.ALL_DAY, messageGroup, 'testsuffix')).toBe(
        'ng.test-messagegroup.timeslots.all-day.testsuffix.lbl'
      );
    });

    it('should return a correct label for morning', function () {
      expect(AppointmentPickerUtil.getTimeslotLabel(TimeslotMomentEnum.MORNING, messageGroup, 'testsuffix')).toBe(
        'ng.test-messagegroup.timeslots.morning.testsuffix.lbl'
      );
    });

    it('should return a correct label for lunch', function () {
      expect(AppointmentPickerUtil.getTimeslotLabel(TimeslotMomentEnum.LUNCH, messageGroup, 'testsuffix')).toBe(
        'ng.test-messagegroup.timeslots.lunch.testsuffix.lbl'
      );
    });

    it('should return a correct label for evening', function () {
      expect(AppointmentPickerUtil.getTimeslotLabel(TimeslotMomentEnum.EVENING, messageGroup, 'testsuffix')).toBe(
        'ng.test-messagegroup.timeslots.evening.testsuffix.lbl'
      );
    });

    it('should return a correct label for afternoon', function () {
      expect(AppointmentPickerUtil.getTimeslotLabel(TimeslotMomentEnum.AFTERNOON, messageGroup, 'testsuffix')).toBe(
        'ng.test-messagegroup.timeslots.afternoon.testsuffix.lbl'
      );
    });
  });
});
