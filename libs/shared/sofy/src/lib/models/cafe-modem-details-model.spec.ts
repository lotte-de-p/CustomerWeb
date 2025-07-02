import { CafeModemDetailsModel } from './cafe-modem-details.model';

describe('CafeModemDetailsModel', (): void => {
  describe('withModemDetails', (): void => {
    it('should set modemDetails on create', (): void => {
      const cafeModemDetailsModel = new CafeModemDetailsModel().withModemDetails([]);
      expect(cafeModemDetailsModel.modemDetails).toEqual([]);
    });
  });
});
