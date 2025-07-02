import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TimeslotMoment, TimeslotMomentEnum } from '../enums';
import { TimeslotUtil } from './timeslot.util';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { AppointmentTransformerSlotModelTestFactory } from '../models/appointment-transformer-slot.model.testfactory';
import { TransformedAvailabilityInterface } from '../interfaces';

describe('TimeslotUtil', () => {
  beforeAll(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
  });

  describe('stringToEnum', () => {
    it('should convert strings to enums', () => {
      expect(TimeslotUtil.stringToEnum('MORNING')).toBe(TimeslotMomentEnum.MORNING);
      expect(TimeslotUtil.stringToEnum('LUNCH')).toBe(TimeslotMomentEnum.LUNCH);
      expect(TimeslotUtil.stringToEnum('AFTERNOON')).toBe(TimeslotMomentEnum.AFTERNOON);
      expect(TimeslotUtil.stringToEnum('EVENING')).toBe(TimeslotMomentEnum.EVENING);
      expect(TimeslotUtil.stringToEnum('DAY')).toBe(TimeslotMomentEnum.DAY);
    });

    it('should return undefined when the string does not exist', () => {
      expect(TimeslotUtil.stringToEnum('SOMETHING')).toBe(undefined);
    });
  });

  describe('enumToString', () => {
    it('should convert strings to enums', () => {
      expect(TimeslotUtil.enumToString(TimeslotMomentEnum.MORNING)).toBe('MORNING');
      expect(TimeslotUtil.enumToString(TimeslotMomentEnum.LUNCH)).toBe('LUNCH');
      expect(TimeslotUtil.enumToString(TimeslotMomentEnum.AFTERNOON)).toBe('AFTERNOON');
      expect(TimeslotUtil.enumToString(TimeslotMomentEnum.EVENING)).toBe('EVENING');
      expect(TimeslotUtil.enumToString(TimeslotMomentEnum.DAY)).toBe('DAY');
    });
  });

  describe('enumToMomentObject', () => {
    it('should convert timeslot enums to timeslot objects', () => {
      expect(TimeslotUtil.enumToMomentObject(TimeslotMomentEnum.MORNING)).toBe(TimeslotMoment.MORNING);
      expect(TimeslotUtil.enumToMomentObject(TimeslotMomentEnum.LUNCH)).toBe(TimeslotMoment.LUNCH);
      expect(TimeslotUtil.enumToMomentObject(TimeslotMomentEnum.AFTERNOON)).toBe(TimeslotMoment.AFTERNOON);
      expect(TimeslotUtil.enumToMomentObject(TimeslotMomentEnum.EVENING)).toBe(TimeslotMoment.EVENING);
      expect(TimeslotUtil.enumToMomentObject(TimeslotMomentEnum.DAY)).toBe(TimeslotMoment.DAY);
    });
  });

  describe('objectToEnum', () => {
    it('should convert timeslot objects to timeslot enums', () => {
      expect(TimeslotUtil.objectToEnum(TimeslotMoment.MORNING)).toBe(TimeslotMomentEnum.MORNING);
      expect(TimeslotUtil.objectToEnum(TimeslotMoment.LUNCH)).toBe(TimeslotMomentEnum.LUNCH);
      expect(TimeslotUtil.objectToEnum(TimeslotMoment.AFTERNOON)).toBe(TimeslotMomentEnum.AFTERNOON);
      expect(TimeslotUtil.objectToEnum(TimeslotMoment.EVENING)).toBe(TimeslotMomentEnum.EVENING);
      expect(TimeslotUtil.objectToEnum(TimeslotMoment.DAY)).toBe(TimeslotMomentEnum.DAY);
    });
  });

  describe('calculateTimeSlotsAvailability', () => {
    it('should calculate and return true if time slots are available for given appointment slots', () => {
      const date1 = new Date(1);
      const date2 = new Date(2);
      const date3 = new Date(3);
      const slot1 = {} as TransformedAvailabilityInterface;
      slot1.code = TimeslotMomentEnum.MORNING;
      const timeslot1 = AppointmentTransformerSlotModelTestFactory.build({ date: date1, timeSlots: [slot1] });
      const timeslot2 = AppointmentTransformerSlotModelTestFactory.build({ date: date2, timeSlots: [] });
      const timeslot3 = AppointmentTransformerSlotModelTestFactory.build({ date: date3, timeSlots: [] });
      TimeslotUtil.calculateTimeSlotsAvailability([timeslot1, timeslot2, timeslot3]).subscribe(
        (isAvailable: boolean) => {
          expect(isAvailable).toBe(true);
        }
      );
    });
    it('should calculate and return false if time slots are unavailable for given appointment slots', () => {
      const date1 = new Date(1);
      const date2 = new Date(2);
      const date3 = new Date(3);
      const slot1 = {} as TransformedAvailabilityInterface;
      slot1.code = TimeslotMomentEnum.MORNING;
      const timeslot1 = AppointmentTransformerSlotModelTestFactory.build({ date: date1, timeSlots: [] });
      const timeslot2 = AppointmentTransformerSlotModelTestFactory.build({ date: date2, timeSlots: [] });
      const timeslot3 = AppointmentTransformerSlotModelTestFactory.build({ date: date3, timeSlots: [] });
      TimeslotUtil.calculateTimeSlotsAvailability([timeslot1, timeslot2, timeslot3]).subscribe(
        (isAvailable: boolean) => {
          expect(isAvailable).toBe(false);
        }
      );
    });
    it('should return true if disableNoAvailableSlots is true', () => {
      const date1 = new Date(1);
      const timeslot1 = AppointmentTransformerSlotModelTestFactory.build({ date: date1, timeSlots: [] });

      TimeslotUtil.calculateTimeSlotsAvailability([timeslot1], true).subscribe((isAvailable: boolean) => {
        expect(isAvailable).toBe(true);
      });
    });
  });

  describe('shouldUpdateTimeSlots', () => {
    it('should return true if current timeslots does not have updated time slots', () => {
      const date1 = new Date(1);
      const date2 = new Date(2);
      const date3 = new Date(3);
      const slot1 = {} as TransformedAvailabilityInterface;
      slot1.code = TimeslotMomentEnum.MORNING;
      const timeslot1 = AppointmentTransformerSlotModelTestFactory.build({ date: date1, timeSlots: [slot1] });
      const timeslot2 = AppointmentTransformerSlotModelTestFactory.build({ date: date2, timeSlots: [] });
      const timeslot3 = AppointmentTransformerSlotModelTestFactory.build({ date: date3, timeSlots: [] });

      const date4 = new Date(4);
      const date5 = new Date(5);
      const date6 = new Date(6);
      const timeslot4 = AppointmentTransformerSlotModelTestFactory.build({ date: date4, timeSlots: [slot1] });
      const timeslot5 = AppointmentTransformerSlotModelTestFactory.build({ date: date5, timeSlots: [] });
      const timeslot6 = AppointmentTransformerSlotModelTestFactory.build({ date: date6, timeSlots: [] });
      const actual = TimeslotUtil.shouldUpdateTimeSlots(
        [timeslot1, timeslot2, timeslot3],
        [timeslot4, timeslot5, timeslot6]
      );
      expect(actual).toBeTruthy();
    });
    it('should return true if current timeslots does not have updated time slots', () => {
      const date1 = new Date(1);
      const date2 = new Date(2);
      const date3 = new Date(3);
      const slot1 = {} as TransformedAvailabilityInterface;
      slot1.code = TimeslotMomentEnum.MORNING;
      const timeslot1 = AppointmentTransformerSlotModelTestFactory.build({ date: date1, timeSlots: [slot1] });
      const timeslot2 = AppointmentTransformerSlotModelTestFactory.build({ date: date2, timeSlots: [] });
      const timeslot3 = AppointmentTransformerSlotModelTestFactory.build({ date: date3, timeSlots: [] });
      const actual = TimeslotUtil.shouldUpdateTimeSlots(
        [timeslot1, timeslot2, timeslot3],
        [timeslot1, timeslot2, timeslot3]
      );
      expect(actual).toBeFalsy();
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
