import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { PricingService } from './pricing.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { salesOfferError, salesOfferTestFactory, sofyRequestProductFactory } from '@telenet/ng-lib-sofy';
import { CafeSofySalesOfferService } from '../../../http/cafe/sales-offer/service/cafe-sofy-sales-offer.service';
import { of } from 'rxjs';
import { PricingData } from '../model/pricing-data.model';
import { pricingConfigFactory } from '../model/pricing-config.testfactory';
import { windowFactory } from '@telenet/ng-lib-page';
import { PricingSofyRequestBasketFactory } from './pricing-sofy-request-basket.factory';
import { catchError } from 'rxjs/operators';
import { SalesOfferError } from '../util/sales-offer.error';

describe('PricingService', () => {
  let pricingService: PricingService,
    cafeSofySalesOfferService: CafeSofySalesOfferService,
    pricingSofyRequestBasketFactory: PricingSofyRequestBasketFactory;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: windowFactory() }],
      imports: [HttpClientTestingModule],
    });
    pricingService = TestBed.inject(PricingService);
    cafeSofySalesOfferService = TestBed.inject(CafeSofySalesOfferService);
    pricingSofyRequestBasketFactory = TestBed.inject(PricingSofyRequestBasketFactory);
  });

  describe('getPricing', () => {
    it('should fetch the sales offer and map it to pricing data', fakeAsync(() => {
      const pricingConfig = pricingConfigFactory.build({ productIds: ['568'] });
      const pricingData = {
        discountedPrice: '115.00',
        normalPrice: '120.00',
        duration: 3,
      } as PricingData;
      const sofyRequestBasket = { products: [sofyRequestProductFactory.build()] };

      cafeSofySalesOfferService.getSalesOfferWithDefaultInstallAddress = jest
        .fn()
        .mockReturnValue(of(salesOfferTestFactory.build()));
      pricingSofyRequestBasketFactory.create = jest.fn().mockReturnValue(of(sofyRequestBasket));

      pricingService.getPricing('PRICING', pricingConfig).subscribe((actual) => {
        expect(actual).toEqual(pricingData);
      });
      tick();
      expect(cafeSofySalesOfferService.getSalesOfferWithDefaultInstallAddress).toHaveBeenCalledWith(
        'PRICING',
        sofyRequestBasket
      );
    }));

    it('should map to undefined if an error occurred', fakeAsync(() => {
      const pricingConfig = pricingConfigFactory.build({ productIds: ['568'] });
      const sofyRequestBasket = { products: [sofyRequestProductFactory.build()] };

      cafeSofySalesOfferService.getSalesOfferWithDefaultInstallAddress = jest.fn().mockReturnValue(of(salesOfferError));
      pricingSofyRequestBasketFactory.create = jest.fn().mockReturnValue(of(sofyRequestBasket));

      pricingService
        .getPricing('PRICING', pricingConfig)
        .pipe(
          catchError((err) => {
            return of(err);
          })
        )
        .subscribe((value) => expect(value).toEqual(new SalesOfferError()));
      tick();
    }));

    it('should fetch the sales offer and map it to pricing data when campaign id is present', fakeAsync(() => {
      const pricingConfig = pricingConfigFactory.build({
        productIds: ['568'],
        enableNbo: true,
        campaignId: 'EOY2021',
      });
      const pricingData = {
        discountedPrice: '115.00',
        normalPrice: '120.00',
        duration: 3,
      } as PricingData;
      const sofyRequestBasket = {
        products: [sofyRequestProductFactory.build()],
        campaignId: 'EOY2021',
      };

      pricingSofyRequestBasketFactory.create = jest.fn().mockReturnValue(of(sofyRequestBasket));
      cafeSofySalesOfferService.getSalesOfferWithDefaultInstallAddress = jest
        .fn()
        .mockReturnValue(of(salesOfferTestFactory.build()));

      pricingService.getPricing('PRICING', pricingConfig).subscribe((actual) => {
        expect(actual).toEqual(pricingData);
      });
      tick();
      expect(cafeSofySalesOfferService.getSalesOfferWithDefaultInstallAddress).toHaveBeenCalledWith(
        'PRICING',
        sofyRequestBasket
      );
    }));
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
