import { Actions } from '@ngrx/effects';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { provideMockActions } from '@ngrx/effects/testing';
import { ProductsDetailsEffects } from './products-details.effects';
import { of, throwError } from 'rxjs';
import { JsonUrlService, UrlService } from '@telenet/ng-lib-page';
import {
  CustomerProductHolding,
  CustomerProductHoldingService,
  Offer,
  Product,
  ProductService,
  ProductSpec,
  Promotion,
  PromotionService,
  SalesData,
  SalesOffer,
} from '@sales/shared/data-access';
import {
  initEffects,
  navigateToHumanCheckout,
  navigateToSalesCheckout,
  order,
  updateLoginDetails,
  updateOffers,
} from './products-details.actions';
import { OmapiProduct, OmapiProductTestfactory } from '@telenet/ng-lib-omapi';
import {
  selectCustomerProductHolding,
  selectHumanCheckoutUrl,
  selectIsDarwinUser,
  selectOffers,
  selectProducts,
  selectPromotions,
  selectSalesCheckoutUrl,
} from './products-details.selectors';
import { SalesOfferService } from '../infrastructure/sales-offer.service';
import { LoginDetails, LoginService } from '@telenet/ng-lib-ocapi';

describe('ProductsDetailsEffects', () => {
  let actions$: Actions;
  let effects: ProductsDetailsEffects;
  let store$: MockStore;
  let loginService: LoginService;
  let promotionService: PromotionService;
  let customerProductHoldingService: CustomerProductHoldingService;
  let urlService: UrlService;
  let jsonUrlService: JsonUrlService;
  let productService: ProductService;
  let salesOfferService: SalesOfferService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        provideMockStore(),
        provideMockActions(() => actions$),
        {
          provide: 'Window',
          useValue: {
            location: {
              href: jest.fn(),
            },
            open: jest.fn(),
          },
        },
      ],
    });
    effects = TestBed.inject<ProductsDetailsEffects>(ProductsDetailsEffects);
    store$ = TestBed.inject(MockStore);
    loginService = TestBed.inject(LoginService);
    promotionService = TestBed.inject(PromotionService);
    customerProductHoldingService = TestBed.inject(CustomerProductHoldingService);
    urlService = TestBed.inject(UrlService);
    jsonUrlService = TestBed.inject(JsonUrlService);
    productService = TestBed.inject(ProductService);
    salesOfferService = TestBed.inject(SalesOfferService);
    jest.spyOn(console, 'error').mockImplementation(jest.fn);
  });

  describe('ngrxOnInitEffects', () => {
    it('should dispatch initEffects', () => {
      const result = effects.ngrxOnInitEffects();

      expect(result.type).toEqual('[Products Details] init effects');
    });
  });

  describe('onInitEffectsUpdateLoginDetails$', () => {
    const updateLoginDetailsType = '[Product Details] update login details';

    it('should dispatch updateLoginDetails', fakeAsync(() => {
      const expected: LoginDetails = new LoginDetails(200);

      const getLoginDetailsSpy = jest.spyOn(loginService, 'getLoginDetails').mockReturnValue(of(expected));

      actions$ = of(initEffects());

      effects.onInitEffectsUpdateLoginDetails$.subscribe((action) => {
        expect(action.type).toEqual(updateLoginDetailsType);
        expect(action.loginDetails).toEqual(expected);
        expect(getLoginDetailsSpy).toHaveBeenCalled();
      });
      tick();
    }));

    it('should dispatch updateLoginDetails with null when receiving 401', fakeAsync(() => {
      const loginDetails: LoginDetails = new LoginDetails(401);
      const expected = null;

      const getLoginDetailsSpy = jest.spyOn(loginService, 'getLoginDetails').mockReturnValue(of(loginDetails));

      actions$ = of(initEffects());

      effects.onInitEffectsUpdateLoginDetails$.subscribe((action) => {
        expect(action.type).toEqual(updateLoginDetailsType);
        expect(action.loginDetails).toEqual(expected);
        expect(getLoginDetailsSpy).toHaveBeenCalled();
      });
      tick();
    }));

    it('should dispatch updateLoginDetails with null when receiving an error', fakeAsync(() => {
      const expected = null;

      const getLoginDetailsSpy = jest
        .spyOn(loginService, 'getLoginDetails')
        .mockReturnValue(throwError(() => jest.fn()));

      actions$ = of(initEffects());

      effects.onInitEffectsUpdateLoginDetails$.subscribe((action) => {
        expect(action.type).toEqual(updateLoginDetailsType);
        expect(action.loginDetails).toEqual(expected);
        expect(getLoginDetailsSpy).toHaveBeenCalled();
      });
      tick();
    }));
  });

  describe('onUpdateLoginDetailsUpdatePromotions$', () => {
    const updatePromotionType = '[Product Details] update promotions';

    it('should dispatch updatePromotions', fakeAsync(() => {
      const isDarwinUser = true;
      const expected: Promotion[] = [{ description: 'description' }];

      store$.overrideSelector(selectIsDarwinUser, isDarwinUser);

      const getPromotionsSpy = jest.spyOn(promotionService, 'getPromotions').mockReturnValue(of(expected));

      actions$ = of(updateLoginDetails({ loginDetails: new LoginDetails(200) }));

      effects.onUpdateLoginDetailsUpdatePromotions$.subscribe((action) => {
        expect(action.type).toEqual(updatePromotionType);
        expect(action.promotions).toEqual(expected);
        expect(getPromotionsSpy).toHaveBeenCalled();
      });
      tick();
    }));

    it('should dispatch updatePromotions with empty array when receiving an error', fakeAsync(() => {
      const isDarwinUser = true;
      const expected: Promotion[] = [];

      store$.overrideSelector(selectIsDarwinUser, isDarwinUser);

      const getPromotionsSpy = jest
        .spyOn(promotionService, 'getPromotions')
        .mockReturnValue(throwError(() => jest.fn()));

      actions$ = of(updateLoginDetails({ loginDetails: new LoginDetails(200) }));

      effects.onUpdateLoginDetailsUpdatePromotions$.subscribe((action) => {
        expect(action.type).toEqual(updatePromotionType);
        expect(action.promotions).toEqual(expected);
        expect(getPromotionsSpy).toHaveBeenCalled();
      });
      tick();
    }));

    it('should dispatch updatePromotions with empty array when user is not darwin user', fakeAsync(() => {
      const isDarwinUser = false;
      const expected: Promotion[] = [];

      store$.overrideSelector(selectIsDarwinUser, isDarwinUser);

      const getPromotionsSpy = jest.spyOn(promotionService, 'getPromotions');

      actions$ = of(updateLoginDetails({ loginDetails: new LoginDetails(200) }));

      effects.onUpdateLoginDetailsUpdatePromotions$.subscribe((action) => {
        expect(action.type).toEqual(updatePromotionType);
        expect(action.promotions).toEqual(expected);
        expect(getPromotionsSpy).not.toHaveBeenCalled();
      });
      tick();
    }));
  });

  describe('onUpdateLoginDetailsUpdateCustomerProductHolding$', () => {
    const updateCustomerProductHoldingType = '[Product Details] update customer product holding';

    it('should dispatch updateCustomerProductHolding', fakeAsync(() => {
      const isDarwinUser = true;
      const expected: CustomerProductHolding[] = [
        {
          identifier: 'identifier',
          specUrl: 'specUrl',
          products: [],
          options: [],
          address: {
            addressId: 'addressId',
            municipality: 'municipality',
            postalCode: 'postalCode',
            street: 'street',
            houseNr: 'houseNr',
            country: 'country',
          },
        },
      ];

      store$.overrideSelector(selectIsDarwinUser, isDarwinUser);

      const getCustomerProductHoldingSpy = jest
        .spyOn(customerProductHoldingService, 'getCustomerProductHolding')
        .mockReturnValue(of(expected));

      actions$ = of(updateLoginDetails({ loginDetails: new LoginDetails(200) }));

      effects.onUpdateLoginDetailsUpdateCustomerProductHolding$.subscribe((action) => {
        expect(action.type).toEqual(updateCustomerProductHoldingType);
        expect(action.customerProductHolding).toEqual(expected);
        expect(getCustomerProductHoldingSpy).toHaveBeenCalled();
      });
      tick();
    }));

    it('should dispatch updateCustomerProductHolding with empty array when receiving an error', fakeAsync(() => {
      const isDarwinUser = true;
      const expected: CustomerProductHolding[] = [];

      store$.overrideSelector(selectIsDarwinUser, isDarwinUser);

      const getCustomerProductHoldingSpy = jest
        .spyOn(customerProductHoldingService, 'getCustomerProductHolding')
        .mockReturnValue(throwError(() => jest.fn()));

      actions$ = of(updateLoginDetails({ loginDetails: new LoginDetails(200) }));

      effects.onUpdateLoginDetailsUpdateCustomerProductHolding$.subscribe((action) => {
        expect(action.type).toEqual(updateCustomerProductHoldingType);
        expect(action.customerProductHolding).toEqual(expected);
        expect(getCustomerProductHoldingSpy).toHaveBeenCalled();
      });
      tick();
    }));

    it('should dispatch updateCustomerProductHolding with empty array when user is not darwin user', fakeAsync(() => {
      const isDarwinUser = false;
      const expected: CustomerProductHolding[] = [];

      store$.overrideSelector(selectIsDarwinUser, isDarwinUser);

      const getCustomerProductHoldingSpy = jest.spyOn(customerProductHoldingService, 'getCustomerProductHolding');

      actions$ = of(updateLoginDetails({ loginDetails: new LoginDetails(200) }));

      effects.onUpdateLoginDetailsUpdateCustomerProductHolding$.subscribe((action) => {
        expect(action.type).toEqual(updateCustomerProductHoldingType);
        expect(action.customerProductHolding).toEqual(expected);
        expect(getCustomerProductHoldingSpy).not.toHaveBeenCalled();
      });
      tick();
    }));
  });

  describe('updateOffers$', () => {
    it('should dispatch updateOffers', fakeAsync(() => {
      const compressedSdata = 'compressedSdata';
      const offers: Offer[] = [
        {
          id: 'id',
          type: 'type',
          offers: [],
          amountOfLimitedSims: 1,
        },
      ];
      const salesData: SalesData = {
        offers,
      };

      const getParameterByNameSpy = jest.spyOn(urlService, 'getParameterByName').mockReturnValue(compressedSdata);
      const decompressSpy = jest.spyOn(jsonUrlService, 'decompress').mockReturnValue(of(salesData));

      actions$ = of(initEffects());

      effects.updateOffers$.subscribe((action) => {
        expect(action.type).toEqual('[Products Details] update offers');
        expect(getParameterByNameSpy).toHaveBeenCalledWith('sdata');
        expect(decompressSpy).toHaveBeenCalledWith(compressedSdata);
      });
      tick();
    }));
  });

  describe('updateProducts$', () => {
    it('should dispatch updateProducts', fakeAsync(() => {
      const offer: Offer = {
        id: '1',
        type: 'IDTV LINE',
        offers: [],
        amountOfLimitedSims: 1,
      };
      const offers: Offer[] = [offer];
      const expected: Product[] = [
        {
          localizedOmapiProductName: '',
          omapiProduct: OmapiProductTestfactory.build(),
          productSpec: {
            shortSummaries: [],
            detailedSpecs: [],
          },
          amountOfLimitedSims: offer.amountOfLimitedSims,
        },
      ];
      store$.overrideSelector(selectOffers, offers);
      const productServiceSpy = jest.spyOn(productService, 'getProducts').mockReturnValue(of(expected));

      actions$ = of(updateOffers({ offers }));

      effects.updateProducts$.subscribe((action) => {
        expect(action.type).toEqual('[Products Details] update products');
        expect(action.products).toEqual(expected);
        expect(productServiceSpy).toHaveBeenCalledWith({ offers });
      });
      tick();
    }));
  });

  describe('updateSalesOffer$', () => {
    it('should dispatch updateSalesOffer', fakeAsync(() => {
      const offers: Offer[] = [
        {
          id: '1',
          type: 'IDTV LINE',
          offers: [],
          amountOfLimitedSims: 1,
        },
      ];
      const promotions: Promotion[] = [];
      const customerProductHolding: CustomerProductHolding[] = [];
      const expected: SalesOffer = {
        price: 10,
        promo: null,
      };
      store$.overrideSelector(selectOffers, offers);
      store$.overrideSelector(selectPromotions, promotions);
      store$.overrideSelector(selectCustomerProductHolding, customerProductHolding);

      const getSalesOfferSpy = jest.spyOn(salesOfferService, 'getSalesOffer').mockReturnValue(of(expected));

      actions$ = of(updateOffers({ offers: offers }));

      effects.updateSalesOffer$.subscribe((action) => {
        expect(action.type).toEqual('[Products Details] update sales offer');
        expect(action.salesOffer).toEqual(expected);
        expect(getSalesOfferSpy).toHaveBeenCalledWith({ offers, promotions, customerProductHolding });
      });
      tick();
    }));
  });

  describe('order$', () => {
    it('should dispatch navigateToHumanCheckout', fakeAsync(() => {
      const offers: Offer[] = [
        {
          id: 'id',
          type: 'type',
          offers: [],
          amountOfLimitedSims: 1,
        },
        {
          id: 'id',
          type: 'type',
          offers: [],
          amountOfLimitedSims: 1,
        },
      ];

      store$.overrideSelector(selectOffers, offers);

      actions$ = of(order());

      effects.order$.subscribe((action) => {
        expect(action.type).toEqual('[Products Details] navigate to human checkout');
      });
      tick();
    }));

    it('should dispatch navigateToSalesCheckout', fakeAsync(() => {
      const offers: Offer[] = [
        {
          id: 'id',
          type: 'type',
          offers: [],
          amountOfLimitedSims: 1,
        },
      ];

      store$.overrideSelector(selectOffers, offers);

      actions$ = of(order());

      effects.order$.subscribe((action) => {
        expect(action.type).toEqual('[Products Details] navigate to sales checkout');
      });
      tick();
    }));
  });

  describe('navigateToHumanCheckout', () => {
    it('should navigate to human checkout', fakeAsync(() => {
      const humanCheckoutUrl = 'url';
      const omapiProduct: OmapiProduct = OmapiProductTestfactory.build();
      omapiProduct.productType = 'MOBILE';
      const productSpec: ProductSpec = {
        shortSummaries: [],
        detailedSpecs: [],
      };
      const products: Product[] = [
        {
          localizedOmapiProductName: 'Telenet Mobile 8 GB',
          omapiProduct,
          productSpec,
        },
        {
          localizedOmapiProductName: 'Telenet Mobile 8 GB',
          omapiProduct,
          productSpec,
        },
      ];
      store$.overrideSelector(selectHumanCheckoutUrl, humanCheckoutUrl);
      store$.overrideSelector(selectProducts, products);

      const getUrlWithParamsSpy = jest.spyOn(urlService, 'getUrlWithParams').mockReturnValue(humanCheckoutUrl);
      const redirectTo = jest.spyOn(urlService, 'redirectTo');

      actions$ = of(navigateToHumanCheckout());

      effects.navigateToHumanCheckout$.subscribe(() => {
        expect(getUrlWithParamsSpy).toHaveBeenCalledWith(humanCheckoutUrl, [
          {
            key: 'field_selected_product',
            value: '2x_Telenet_Mobile_8_GB',
          },
        ]);
        expect(redirectTo).toHaveBeenCalledWith(humanCheckoutUrl);
      });
      tick();
    }));
  });

  describe('navigateToSalesCheckout', () => {
    it('should navigate to sales checkout', fakeAsync(() => {
      const offers: Offer[] = [
        {
          id: 'id',
          type: 'type',
          offers: [],
          amountOfLimitedSims: 1,
        },
      ];
      const salesCheckoutUrl = 'url';

      store$.overrideSelector(selectOffers, offers);
      store$.overrideSelector(selectSalesCheckoutUrl, salesCheckoutUrl);

      const compressSpy = jest.spyOn(jsonUrlService, 'compress').mockReturnValue(of('compressedSdata'));
      const getUrlWithParamsSpy = jest.spyOn(urlService, 'getUrlWithParams').mockReturnValue(salesCheckoutUrl);
      const redirectTo = jest.spyOn(urlService, 'redirectTo');

      actions$ = of(navigateToSalesCheckout());

      effects.navigateToSalesCheckout$.subscribe(() => {
        expect(compressSpy).toHaveBeenCalledWith({ offers });
        expect(getUrlWithParamsSpy).toHaveBeenCalledWith(salesCheckoutUrl, [
          {
            key: 'sdata',
            value: 'compressedSdata',
          },
        ]);
        expect(redirectTo).toHaveBeenCalled();
      });
      tick();
    }));
  });
});
