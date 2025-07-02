import { TestBed } from '@angular/core/testing';
import { SalesDataType } from './sales-data.type';
import { SalesData, SalesDataOffer } from './sales-data.model';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';

describe('SalesData', () => {
  let salesData: SalesData;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [{ provide: 'Window', useValue: {} }],
    });
  });

  beforeEach(() => {
    salesData = new SalesData();
  });

  describe('hasOffers', () => {
    it('should return true when salesdata has offers', () => {
      salesData.setOffers([{ id: 'offer123', type: SalesDataType.TYPE_PRODUCT }]);
      const actual = salesData.hasOffers();

      expect(actual).toBe(true);
    });

    it('should return false when salesdata has no offers', () => {
      const actual = salesData.hasOffers();

      expect(actual).toBe(false);
    });
  });
  describe('setOffers', () => {
    it('should set the offers', () => {
      const actual = salesData;
      actual.setOffers([{ id: 'offer123', type: SalesDataType.TYPE_PRODUCT }]);

      expect(actual.getOffers()).toBeDefined();
      expect(actual.getOffers()[0].id).toBe('offer123');
    });
  });
  describe('getOffers', () => {
    it('should return true when salesdata has offers', () => {
      salesData.setOffers([{ id: 'offer123', type: SalesDataType.TYPE_PRODUCT }]);
      const actual = salesData.getOffers();

      expect(actual).toBeDefined();
      expect(actual[0].id).toBe('offer123');
    });
  });

  describe('flatten', () => {
    it('should include nested offers', () => {
      salesData.setOffers([
        SalesDataOffer.of('C5FA0008', SalesDataType.TYPE_BUNDLE, [
          SalesDataOffer.of('FLIN0001', SalesDataType.TYPE_FIXED_LINE),
          SalesDataOffer.of('MBLN0002', SalesDataType.TYPE_DATA_ONLY_MOBILE_LINE),
          SalesDataOffer.of('TEOS0001', SalesDataType.TYPE_IDTV_LINE, [
            SalesDataOffer.of('TVPK0016', SalesDataType.TYPE_OPTION_DWN),
            SalesDataOffer.of('TVPK0023', SalesDataType.TYPE_OPTION_DWN),
          ]),
        ]),
      ]);

      const allOffers = salesData.flatten().getOffers();

      expect(allOffers.map((o) => o.id)).toEqual([
        'C5FA0008',
        'FLIN0001',
        'MBLN0002',
        'TEOS0001',
        'TVPK0016',
        'TVPK0023',
      ]);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
