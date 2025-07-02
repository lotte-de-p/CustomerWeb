import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Builder, cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { NBA } from './nba.model';
import { SellingArgument } from './selling-argument.model';
import { SalesData, SalesDataOffer, SalesDataType } from '../../../../sales';
import { productTestFactory } from './product.interface.testfactory';

describe('NBA', () => {
  let nba: NBA;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    nba = Builder(NBA)
      // @ts-ignore
      .rank('1')
      .sdata(new SalesData())
      .group('Xsell')
      .issue('Sales')
      .name('SAMI_ONEUP')
      .treatment('SAMI_ONEUP_MKT')
      .campaignId('campaign-id')
      .productType('oneApp')
      .sellingArguments([new SellingArgument('sa123', 1)])
      .build();
  });

  describe('getRank', () => {
    it('should return the rank', () => {
      expect(nba.rank).toBe('1');
    });
  });

  describe('getGroup', () => {
    it('should return the group', () => {
      expect(nba.group).toBe('Xsell');
    });
  });

  describe('getIssue', () => {
    it('should return the issue', () => {
      expect(nba.issue).toBe('Sales');
    });
  });

  describe('getName', () => {
    it('should return the name', () => {
      expect(nba.name).toBe('SAMI_ONEUP');
    });
  });

  describe('getTreatment', () => {
    it('should return the treatment', () => {
      expect(nba.treatment).toBe('SAMI_ONEUP_MKT');
    });
  });

  describe('hasTreatment', () => {
    it('should be true if treatment value is available', () => {
      expect(nba.hasTreatment()).toBe(true);
    });
  });

  describe('getCampaignId', () => {
    it('should return the campaignId', () => {
      expect(nba.campaignId).toBe('campaign-id');
    });
  });

  describe('getSellingArguments', () => {
    it('should return the sellingArgument id', () => {
      expect(nba.sellingArguments).toEqual([new SellingArgument('sa123', 1)]);
    });
  });

  describe('isSalesDataEmpty', () => {
    it('should be true if no offers in sales data', () => {
      expect(nba.isSalesDataEmpty()).toBe(true);
    });
    it('should be false if there are offers in sales data', () => {
      nba.sdata.setOffers([{} as SalesDataOffer]);
      expect(nba.sdata.getOffers().length).toBe(1);
      expect(nba.sdata.hasOffers()).toBe(true);
      expect(nba.isSalesDataEmpty()).toBe(false);
    });
  });

  describe('getRawSalesData', () => {
    it('should return an empty RawSalesData model when offers are undefined', () => {
      expect(nba.getRawSalesData()).toBeDefined();
    });

    it('should return an empty RawSalesData model when length of offers is 0', () => {
      nba.sdata.setOffers([{} as SalesDataOffer]);
      expect(nba).toBeDefined();
    });

    it('should return an RawSalesData model when offers are defined', () => {
      nba.sdata.setOffers([
        { ...productTestFactory.build() },
        // @ts-ignore
        undefined,
        // @ts-ignore
        null,
        { ...productTestFactory.build({ id: '37785', type: SalesDataType.TYPE_OPTIN }) },
        // @ts-ignore
        null,
        // @ts-ignore
        undefined,
        { ...productTestFactory.build({ id: '75', type: SalesDataType.TYPE_OPTIN }) },
        { ...productTestFactory.build({ id: '585', type: SalesDataType.TYPE_OPTION }) },
        // @ts-ignore
        null,
        // @ts-ignore
        undefined,
        { ...productTestFactory.build({ id: '529', type: SalesDataType.TYPE_OPTION }) },
      ]);

      const actual = nba.getRawSalesData();
      expect(actual.products.length).toBe(1);
      expect(actual.products[0]).toBe('36860');

      expect(actual.options.length).toBe(2);
      expect(actual.options[0]).toBe('585');
      expect(actual.options[1]).toBe('529');

      expect(actual.optins.length).toBe(2);
      expect(actual.optins[0]).toBe('37785');
      expect(actual.optins[1]).toBe('75');
    });

    it('should be able to correctly interpret darwin product types', () => {
      nba.sdata.setOffers([
        { ...productTestFactory.build({ id: 'C5FA0007', type: SalesDataType.TYPE_BUNDLE }) },
        { ...productTestFactory.build({ id: 'TEOS0001', type: SalesDataType.TYPE_IDTV_LINE }) },
      ]);

      const actual = nba.getRawSalesData();
      expect(actual.products.length).toBe(2);
      expect(actual.products[0]).toBe('C5FA0007');
      expect(actual.products[1]).toBe('TEOS0001');
    });

    it('should be able to correctly interpret nested offers', () => {
      nba.sdata.setOffers([
        {
          ...productTestFactory.build({
            id: 'C5FA0007',
            type: SalesDataType.TYPE_BUNDLE,
            offers: [{ ...productTestFactory.build({ id: 'TEOS0001', type: SalesDataType.TYPE_IDTV_LINE }) }],
          }),
        },
      ]);

      const actual = nba.getRawSalesData();
      expect(actual.products.length).toBe(2);
      expect(actual.products[0]).toBe('C5FA0007');
      expect(actual.products[1]).toBe('TEOS0001');
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
