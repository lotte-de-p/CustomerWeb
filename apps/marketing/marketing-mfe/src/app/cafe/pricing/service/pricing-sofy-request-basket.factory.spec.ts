import { Builder, cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { PricingSofyRequestBasketFactory } from './pricing-sofy-request-basket.factory';
import { Observable, ReplaySubject } from 'rxjs';
import { productTestFactory, NBA, NBAList, PegaStoreService, SalesData } from '@telenet/ng-lib-personalisation';
import { pricingConfigFactory } from '../model/pricing-config.testfactory';
import { PricingConfig } from '../model/pricing-config.model';
import { SofyRequestBasket } from '@telenet/ng-lib-sofy';
import DoneCallback = jest.DoneCallback;

const spyOn = jest.spyOn;

describe('PricingSofyRequestBasketFactory', () => {
  let pricingBasketFactory: PricingSofyRequestBasketFactory, pegaStoreService: PegaStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [{ provide: 'Window', useValue: window }],
    });

    pricingBasketFactory = TestBed.inject(PricingSofyRequestBasketFactory);
    pegaStoreService = TestBed.inject(PegaStoreService);
  });

  // eslint-disable-next-line sonarjs/cognitive-complexity
  describe('create', () => {
    let pricingConfig: PricingConfig, storeData: NBAList, storeDataSubject$: ReplaySubject<NBAList>;
    beforeEach(() => {
      pricingConfig = createPricingConfig();

      const salesData = new SalesData();
      salesData.setOffers([productTestFactory.build()]);
      const nba = Builder(NBA)['sdata'](salesData).campaignId('EOY2021').build();

      nba.getRawSalesData = () => {
        return {
          products: ['42793', '43755'],
          options: ['529'],
          optins: ['37785'],
        };
      };

      storeData = Builder(NBAList)['actions']([nba]).build();

      storeDataSubject$ = new ReplaySubject<NBAList>(1024);
      spyOn(pegaStoreService, 'getStoreData').mockReturnValue(storeDataSubject$);
    });

    it('should create a request basket when one product is configured', (done) => {
      pricingBasketFactory.create(pricingConfig).subscribe((actual) => {
        if (!actual.products) {
          fail();
        }
        expect(actual.products.length).toBe(1);
        expect(actual.products[0].omapiid).toBe('36860');
        expect(actual.products[0].options).toEqual(['633']);
        expect(actual.products[0].optinproducts).toEqual(['75']);
        expect(actual.products[0].installationaddress.postalcode).toBe('2800');
        done();
      });
    });

    it('should create a request basket when multiple products are configured', (done) => {
      pricingConfig.productIds = ['36860', '40816'];
      pricingConfig.optionIds = ['633', '585'];
      pricingConfig.optinIds = ['75'];

      pricingBasketFactory.create(pricingConfig).subscribe((actual) => {
        if (!actual.products) {
          fail();
        }
        expect(actual.products.length).toBe(2);
        expect(actual.products[0].omapiid).toBe('36860');
        expect(actual.products[0].options).toEqual(['633', '585']);
        expect(actual.products[0].optinproducts).toEqual(['75']);
        expect(actual.products[0].installationaddress.postalcode).toBe('2800');
        expect(actual.products[1].omapiid).toBe('40816');
        expect(actual.products[1].options).toEqual(['633', '585']);
        expect(actual.products[1].optinproducts).toEqual(['75']);
        expect(actual.products[1].installationaddress.postalcode).toBe('2800');
        done();
      });
    });

    it('should create a request basket based on NBO when NBO is enabled and NBA is successful', (done) => {
      pricingConfig.enableNbo = true;
      pricingConfig.campaignId = 'EOY2021';

      storeDataSubject$.next(storeData);
      pricingBasketFactory.create(pricingConfig).subscribe((actual) => {
        if (!actual.products) {
          fail();
        }
        expect(actual.products.length).toBe(2);
        expect(actual.products[0].omapiid).toBe('42793');
        expect(actual.products[0].options).toEqual(['529']);
        expect(actual.products[0].optinproducts).toEqual(['37785']);
        expect(actual.products[0].installationaddress.postalcode).toBe('2800');
        expect(actual.products[1].omapiid).toBe('43755');
        expect(actual.products[1].options).toEqual(['529']);
        expect(actual.products[1].optinproducts).toEqual(['37785']);
        expect(actual.products[1].installationaddress.postalcode).toBe('2800');
        expect(actual.campaignCode).toBe('EOY2021');
        done();
      });
    });

    it('should create a request basket based on author config when NBO is enabled but NBA is unsuccessful', (done) => {
      pricingConfig.enableNbo = true;
      storeData = new NBAList();
      pricingConfig.campaignId = undefined;

      storeDataSubject$.next(storeData);
      pricingBasketFactory.create(pricingConfig).subscribe((actual) => {
        if (!actual.products) {
          fail();
        }
        expect(actual.products.length).toBe(1);
        expect(actual.products[0].omapiid).toBe('36860');
        expect(actual.products[0].options).toEqual(['633']);
        expect(actual.products[0].optinproducts).toEqual(['75']);
        expect(actual.products[0].installationaddress.postalcode).toBe('2800');
        expect(actual.campaignCode).toBe('');
        done();
      });
    });

    it('should create a request basket with standalone options when NO products are configured', (done) => {
      pricingConfig.productIds = [];
      pricingConfig.optionIds = ['633'];
      pricingConfig.optinIds = ['75'];

      pricingBasketFactory.create(pricingConfig).subscribe((actual) => {
        if (!actual.products || !actual.standaloneOptions) {
          fail();
        }
        expect(actual.products.length).toBe(0);
        expect(actual.standaloneOptions.length).toBe(1);
        expect(actual.standaloneOptions[0].omapiid).toBe('633');
        expect(actual.standaloneOptions[0].optinproducts).toEqual(['75']);
        expect(actual.standaloneOptions[0].installationaddress.postalcode).toBe('2800');
        done();
      });
    });

    it('should create a request basket with standalone options when NBO is enabled and successful and returns options only (no products)', (done) => {
      const salesData = new SalesData();
      salesData.setOffers([productTestFactory.build()]);
      const nba = Builder(NBA)['sdata'](salesData).campaignId('EOY2021').build();

      nba.getRawSalesData = () => {
        return {
          products: [],
          options: ['529'],
          optins: ['37785'],
        };
      };

      storeData = Builder(NBAList)['actions']([nba]).build();

      pricingConfig.enableNbo = true;
      pricingConfig.campaignId = 'EOY2021';

      storeDataSubject$.next(storeData);
      pricingBasketFactory.create(pricingConfig).subscribe((actual) => {
        if (!actual.products || !actual.standaloneOptions) {
          fail();
        }
        expect(actual.products.length).toBe(0);
        expect(actual.standaloneOptions.length).toBe(1);
        expect(actual.standaloneOptions[0].omapiid).toBe('529');
        expect(actual.standaloneOptions[0].optinproducts).toEqual(['37785']);
        expect(actual.standaloneOptions[0].installationaddress.postalcode).toBe('2800');
        done();
      });
    });

    describe('NBO with amount of limited sims', () => {
      const rawSalesData = {
        products: ['C5FA0008'],
        options: [],
        optins: [],
      };

      const salesData = new SalesData();
      let nba: NBA;

      beforeEach(() => {
        nba = Builder(NBA)['sdata'](salesData).build();

        nba.getRawSalesData = () => rawSalesData;

        storeData = Builder(NBAList)['actions']([nba]).build();

        pricingConfig.enableNbo = true;
      });

      it('amountOfLimitedSims missing', (done) => {
        salesData.setOffers([productTestFactory.build()]);

        storeDataSubject$.next(storeData);
        pricingBasketFactory.create(pricingConfig).subscribe((actual) => {
          if (!actual.products) {
            fail();
          }
          expect(actual.products[0].amountoflimitedsims).toBe(0);
          done();
        });
      });

      it('amountOfLimitedSims mapped correctly', (done) => {
        salesData.setOffers([productTestFactory.build({ amountOfLimitedSims: 2 })]);

        storeDataSubject$.next(storeData);
        pricingBasketFactory.create(pricingConfig).subscribe((actual) => {
          if (!actual.products) {
            fail();
          }
          expect(actual.products[0].amountoflimitedsims).toBe(2);
          done();
        });
      });

      it('amountOfLimitedSims larger than 4 mapped to zero', (done) => {
        salesData.setOffers([productTestFactory.build({ amountOfLimitedSims: 5 })]);

        storeDataSubject$.next(storeData);
        pricingBasketFactory.create(pricingConfig).subscribe((actual) => {
          if (!actual.products) {
            fail();
          }
          expect(actual.products[0].amountoflimitedsims).toBe(0);
          done();
        });
      });

      it('amountOfLimitedSims smaller than 0 mapped to zero', (done) => {
        salesData.setOffers([productTestFactory.build({ amountOfLimitedSims: -5 })]);

        storeDataSubject$.next(storeData);
        pricingBasketFactory.create(pricingConfig).subscribe((actual) => {
          if (!actual.products) {
            fail();
          }
          expect(actual.products[0].amountoflimitedsims).toBe(0);
          done();
        });
      });
    });

    it('should create a request basket without amountOfLimitedSims when not present', (done: DoneCallback) => {
      pricingConfig.productIds = ['C5FA0009'];

      const result$: Observable<SofyRequestBasket> = pricingBasketFactory.create(pricingConfig);

      result$.subscribe((actual: SofyRequestBasket) => {
        if (!actual.products) {
          fail();
        }
        expect(actual.products.length).toBe(1);
        expect(actual.products[0].omapiid).toBe('C5FA0009');
        expect(actual.products[0].amountoflimitedsims).toBeUndefined();
        done();
      });
    });

    it('should create a request basket with amountOfLimitedSims when present', (done: DoneCallback) => {
      pricingConfig.productIds = ['C5FA0009'];
      pricingConfig.amountOfLimitedSims = 0;

      const result$: Observable<SofyRequestBasket> = pricingBasketFactory.create(pricingConfig);

      result$.subscribe((actual: SofyRequestBasket) => {
        if (!actual.products) {
          fail();
        }
        expect(actual.products.length).toBe(1);
        expect(actual.products[0].omapiid).toBe('C5FA0009');
        expect(actual.products[0].amountoflimitedsims).toEqual(0);
        done();
      });
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});

function createPricingConfig() {
  return pricingConfigFactory.build({
    optionIds: ['633'],
    optinIds: ['75'],
  });
}
