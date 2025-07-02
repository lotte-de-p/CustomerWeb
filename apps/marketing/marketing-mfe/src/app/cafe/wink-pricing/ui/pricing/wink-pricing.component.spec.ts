import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsModule } from '@ngxs/store';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WinkPricingComponent } from './wink-pricing.component';
import { of, throwError } from 'rxjs';
import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { when } from 'jest-when';
import { windowFactory } from '@telenet/ng-lib-page';
import { PricingService } from '../../../pricing/service/pricing.service';
import { pricingConfigFactory } from '../../../pricing/model/pricing-config.testfactory';
import { PricingData } from '../../../pricing/model/pricing-data.model';
import { SalesOfferError } from '../../../pricing/util/sales-offer.error';

describe('PricingComponent', () => {
  let component: WinkPricingComponent,
    fixture: ComponentFixture<WinkPricingComponent>,
    pricingService: PricingService,
    translateService: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot([]),
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [{ provide: 'Window', useValue: windowFactory() }],
      schemas: [NO_ERRORS_SCHEMA],
    });

    fixture = TestBed.createComponent(WinkPricingComponent);
    pricingService = TestBed.inject(PricingService);
    component = new WinkPricingComponent(pricingService, translateService);
  });

  it('should create', () => {
    expect(component).toBeDefined();
    expect(component.isLoaded).toBe(false);
  });

  describe('ngOnInIt', () => {
    it('should set the data received from the pricingService and set loaded to true when productCategory is sofyProducts', () => {
      component.productCategory = 'sofyProducts';
      component.postalCode = '2800';
      component.shortestDuration = false;
      component.isBusiness = false;
      component.enableNbo = false;
      component.productIds = ['36860'];
      component.optionIds = [];
      component.optinIds = [];
      component.campaignCode = '';
      const pricingConfig = pricingConfigFactory.build();
      const pricingData = {
        discountedPrice: '65',
        normalPrice: '85',
        duration: 3,
      } as PricingData;

      pricingService.getPricing = jest.fn();
      when(pricingService.getPricing)
        .calledWith(WinkPricingComponent.PRICING_MESSAGE_GROUP, pricingConfig)
        .mockReturnValue(of(pricingData));

      component.ngOnInit();
      fixture.detectChanges();

      expect(pricingService.getPricing).toHaveBeenCalledWith(WinkPricingComponent.PRICING_MESSAGE_GROUP, pricingConfig);
      expect(component.pricingData?.discountedPrice).toBe('65');
      expect(component.pricingData?.normalPrice).toBe('85');
      expect(component.pricingData?.duration).toBe(3);
    });
    it('should not fail if the pricingService returns undefined', () => {
      component.productCategory = 'sofyProducts';
      component.postalCode = '2800';
      component.shortestDuration = false;
      component.isBusiness = false;
      component.enableNbo = false;
      component.productIds = ['36860'];
      component.optionIds = [];
      component.optinIds = [];
      component.campaignCode = '';
      const pricingConfig = pricingConfigFactory.build();
      const salesOfferError = new SalesOfferError();

      pricingService.getPricing = jest.fn();
      when(pricingService.getPricing)
        .calledWith(WinkPricingComponent.PRICING_MESSAGE_GROUP, pricingConfig)
        .mockReturnValue(throwError(() => salesOfferError));

      component.ngOnInit();
      fixture.detectChanges();

      expect(pricingService.getPricing).toHaveBeenCalledWith(WinkPricingComponent.PRICING_MESSAGE_GROUP, pricingConfig);
      expect(component.pricingData).toBeUndefined();
      expect(component.isLoaded).toBeTruthy();
    });

    it('should set the data received from the commerce product and set loaded to true', () => {
      component.productCategory = 'customProducts';
      const startDate = new Date();
      const endDate = new Date();
      endDate.setMonth(startDate.getMonth() + 2);
      component.customProduct = {
        price: '75.00',
        promoPrice: '50.00',
        duration: '3',
        startDate: startDate.toString(),
        endDate: endDate.toString(),
      };

      component.ngOnInit();
      fixture.detectChanges();

      expect(component.pricingData?.discountedPrice).toBe('50.00');
      expect(component.pricingData?.normalPrice).toBe('75.00');
      expect(component.pricingData?.duration).toBe(3);
      expect(component.isLoaded).toBe(true);
    });
  });

  describe('showNormalPrice', () => {
    it('should return true when category is sofyProducts and a promo is active', () => {
      component.productCategory = 'sofyProducts';
      component.pricingData = { discountedPrice: '0', normalPrice: '0', duration: 2 };

      const actual = component.showNormalPrice();

      expect(actual).toBe(true);
    });

    it('should return false when category is sofyProducts and no promo is active', () => {
      component.productCategory = 'sofyProducts';
      component.pricingData = { discountedPrice: '0', normalPrice: '0', duration: 0 };

      const actual = component.showNormalPrice();

      expect(actual).toBe(false);
    });

    it('should return true when category is customProducts and a promo is active and date is in range', () => {
      component.productCategory = 'customProducts';
      component.pricingData = { discountedPrice: '0', normalPrice: '0', duration: 2 };
      component.isPromoInRange = true;

      const actual = component.showNormalPrice();

      expect(actual).toBe(true);
    });

    it('should return false when category is customProducts and no promo is active and date is in range', () => {
      component.productCategory = 'customProducts';
      component.pricingData = { discountedPrice: '0', normalPrice: '0', duration: 0 };
      component.isPromoInRange = true;

      const actual = component.showNormalPrice();

      expect(actual).toBe(true);
    });

    it('should return false when category is customProducts and a promo is active and date is not in range', () => {
      component.productCategory = 'customProducts';
      component.pricingData = { discountedPrice: '0', normalPrice: '0', duration: 3 };
      component.isPromoInRange = false;

      const actual = component.showNormalPrice();

      expect(actual).toBe(false);
    });
  });

  describe('showPromoDuration', () => {
    it('should return true when category is sofyProducts and shortestDuration is true and promo is active', () => {
      component.productCategory = 'sofyProducts';
      component.shortestDuration = true;
      component.pricingData = { discountedPrice: '0', normalPrice: '0', duration: 2 };

      const actual = component.showPromoDuration();

      expect(actual).toBe(true);
    });

    it('should return false when category is sofyProducts and shortestDuration is false and promo is active', () => {
      component.productCategory = 'sofyProducts';
      component.shortestDuration = false;
      component.pricingData = { discountedPrice: '0', normalPrice: '0', duration: 2 };

      const actual = component.showPromoDuration();

      expect(actual).toBe(false);
    });

    it('should return false when category is sofyProducts and shortestDuration is true and promo not active', () => {
      component.productCategory = 'sofyProducts';
      component.shortestDuration = true;
      component.pricingData = { discountedPrice: '0', normalPrice: '0', duration: 0 };

      const actual = component.showPromoDuration();

      expect(actual).toBe(false);
    });

    it('should return true when category is customProducts and duration > 0 and promo is active and date in range', () => {
      component.productCategory = 'customProducts';
      component.customProduct = {
        price: '75.00',
        promoPrice: '50.00',
        duration: '5',
        startDate: '2021-08-18T00:00:00.000+02:00',
        endDate: '2021-08-20T00:00:00.000+02:00',
      };
      component.isPromoInRange = true;
      component.pricingData = { discountedPrice: '0', normalPrice: '0', duration: 2 };

      const actual = component.showPromoDuration();

      expect(actual).toBe(true);
    });

    it('should return false when category is customProducts and duration = 0 and promo is active and date in range', () => {
      component.productCategory = 'customProducts';
      component.customProduct = {
        price: '75.00',
        promoPrice: '50.00',
        duration: '0',
        startDate: '2021-08-18T00:00:00.000+02:00',
        endDate: '2021-08-20T00:00:00.000+02:00',
      };
      component.isPromoInRange = true;
      component.pricingData = { discountedPrice: '0', normalPrice: '0', duration: 2 };

      const actual = component.showPromoDuration();

      expect(actual).toBe(false);
    });

    it('should return true when category is customProducts and duration > 0 and a promo active and date  in range', () => {
      component.productCategory = 'customProducts';
      component.isPromoInRange = false;
      component.pricingData = { discountedPrice: '0', normalPrice: '0', duration: 4 };

      const actual = component.showPromoDuration();

      expect(actual).toBe(false);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
