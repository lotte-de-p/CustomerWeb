import { DatePipe, registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/nl';
import { AppointmentPickerPipe } from './appointment-picker.pipe';
import { AppointmentSlotOption } from '../controls';
import { TimeslotMomentEnum } from '../enums';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';

describe('AppointmentPickerPipe', function () {
  beforeEach(() => {
    registerLocaleData(locale);
  });

  describe('transform', function () {
    it('should return a string formatted appointment', function () {
      const pipe = new AppointmentPickerPipe(new DatePipe('nl'));
      const date = new Date(2019, 0, 1);
      const appointmentSlot = new AppointmentSlotOption(date, TimeslotMomentEnum.MORNING);
      expect(pipe.transform(appointmentSlot)).toEqual('01 januari 2019 - 08:00 tot 13:00');
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
