import { CafeModemDetailModel } from './cafe-modem-detail.model';

describe('CafeModemDetailModel', () => {
  it('should create model', () => {
    const cafeModemDetailModel = new CafeModemDetailModel();
    expect(cafeModemDetailModel).toEqual({} as CafeModemDetailModel);
  });
});
