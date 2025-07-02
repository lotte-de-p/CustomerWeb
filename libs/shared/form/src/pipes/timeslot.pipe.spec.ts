import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/nl';
import { TimeslotMomentEnum } from '../enums';
import { TimeslotPipe } from './timeslot.pipe';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';

describe('TimeslotPipe', function () {
  beforeEach(() => {
    registerLocaleData(locale);
  });

  describe('transform', function () {
    it('should return a string formatted appointment', function () {
      const pipe = new TimeslotPipe();
      expect(pipe.transform(TimeslotMomentEnum.MORNING)).toEqual('08:00 - 13:00');
      expect(pipe.transform(TimeslotMomentEnum.LUNCH)).toEqual('10:00 - 14:30');
      expect(pipe.transform(TimeslotMomentEnum.AFTERNOON)).toEqual('12:30 - 18:00');
      expect(pipe.transform(TimeslotMomentEnum.EVENING)).toEqual('17:00 - 20:00');
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
