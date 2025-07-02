import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { DateUtil } from './date.util';

describe('DateUtil', () => {
  describe('inRange', () => {
    it('should return true when the current date is between the startDate and endDate', () => {
      const startDate = new Date('2021-07-27T00:00:00.000+02:00');
      const endDate = new Date('2021-08-29T00:00:00.000+02:00');
      const currentDate = new Date('2021-07-29T00:00:00.000+02:00');

      const actual = DateUtil.inRange(currentDate, startDate, endDate);

      expect(actual).toBe(true);
    });

    it('should return false when the current date is not between the startDate and endDate', () => {
      const startDate = new Date('2021-07-27T00:00:00.000+02:00');
      const endDate = new Date('2021-08-29T00:00:00.000+02:00');
      const currentDate = new Date('2021-07-25T00:00:00.000+02:00');

      const actual = DateUtil.inRange(currentDate, startDate, endDate);

      expect(actual).toBe(false);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
