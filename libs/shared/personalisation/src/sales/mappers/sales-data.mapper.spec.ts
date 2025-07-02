import { TestBed } from '@angular/core/testing';
import { SalesDataType } from '../models/sales-data.type';
import { SalesDataMapper } from './sales-data.mapper';
import { RawSalesData } from '../models/sales-data.model';

describe('SalesDataMapper', () => {
  let salesDataMapper: SalesDataMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [{ provide: 'Window', useValue: {} }],
    });

    salesDataMapper = TestBed.inject(SalesDataMapper);
  });

  describe('mapSalesData', () => {
    it('should map sales data when the RawSalesData is empty', () => {
      const rawSalesData = {
        products: [],
        options: [],
        optins: [],
      } as RawSalesData;

      const actual = salesDataMapper.mapSalesData(rawSalesData);

      expect(actual.getOffers().length).toBe(0);
    });

    it('should map sales data when the RawSalesData has multiple products with options and optins', () => {
      const rawSalesData = {
        products: ['36860', '43755'],
        options: ['275', '598'],
        optins: ['37785'],
      } as RawSalesData;

      const actual = salesDataMapper.mapSalesData(rawSalesData);

      expect(actual.getOffers().length).toBe(2);

      const offers = actual.getOffers()[0];
      expect(offers.id).toBe('36860');
      expect(offers.type).toBe(SalesDataType.TYPE_PRODUCT);
      expect(offers.offers?.length).toBe(3);
      const firstOffer = offers.offers?.[0];
      expect(firstOffer?.id).toBe('275');
      expect(firstOffer?.type).toBe(SalesDataType.TYPE_OPTION);
      expect(firstOffer?.offers).toBeUndefined();
      const secondOffer = offers.offers?.[1];
      expect(secondOffer?.id).toBe('598');
      expect(secondOffer?.type).toBe(SalesDataType.TYPE_OPTION);
      expect(secondOffer?.offers).toBeUndefined();
      const thirdOffer = offers.offers?.[2];
      expect(thirdOffer?.id).toBe('37785');
      expect(thirdOffer?.type).toBe(SalesDataType.TYPE_OPTIN);
      expect(thirdOffer?.offers).toBeUndefined();

      expect(actual.getOffers()[1].id).toBe('43755');
      expect(actual.getOffers()[1].type).toBe(SalesDataType.TYPE_PRODUCT);
      expect(actual.getOffers()[1].offers?.length).toBe(3);
      expect(actual.getOffers()[1].offers?.[0].id).toBe('275');
      expect(actual.getOffers()[1].offers?.[0].type).toBe(SalesDataType.TYPE_OPTION);
      expect(actual.getOffers()[1].offers?.[0].offers).toBeUndefined();
      expect(actual.getOffers()[1].offers?.[1].id).toBe('598');
      expect(actual.getOffers()[1].offers?.[1].type).toBe(SalesDataType.TYPE_OPTION);
      expect(actual.getOffers()[1].offers?.[1].offers).toBeUndefined();
      expect(actual.getOffers()[1].offers?.[2].id).toBe('37785');
      expect(actual.getOffers()[1].offers?.[2].type).toBe(SalesDataType.TYPE_OPTIN);
      expect(actual.getOffers()[1].offers?.[2].offers).toBeUndefined();
    });
  });
});
