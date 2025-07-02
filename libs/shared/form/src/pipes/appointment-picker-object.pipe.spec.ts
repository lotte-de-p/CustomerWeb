import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { AppointmentPickerObjectPipe } from '.';
import { AppointmentSlotOption } from '../';
import { TimeslotMomentEnum } from '../enums';
import { TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';

describe('AppointmentPickerObjectPipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatePipe],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
  });
  // noinspection DuplicatedCode
  describe('transform', function () {
    it('should return a string formatted appointment', function () {
      const component = new AppointmentPickerObjectPipe(new DatePipe('en'));
      const date = new Date(2019, 0, 1);
      const appointmentSlot = new AppointmentSlotOption(date, TimeslotMomentEnum.MORNING);
      expect(component.transform(appointmentSlot)).toEqual({
        dateString: '01 January 2019',
        startTimeString: '08:00',
        endTimeString: '13:00',
      });
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
