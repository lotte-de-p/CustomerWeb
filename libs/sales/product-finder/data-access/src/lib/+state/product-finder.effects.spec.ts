import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { of, throwError } from 'rxjs';
import { Actions } from '@ngrx/effects';
import { ProductFinderEffects } from './product-finder.effects';
import {
  getProductRecommendations,
  handleNumberOfSimsChanged,
  handlePreferenceChanged,
  initEffects,
  navigateToHumanCheckout,
  navigateToOneConfigurator,
  navigateToProductsDetails,
  navigateToSalesCheckout,
  order,
  resultDetails,
  updateLoginDetails,
} from './product-finder.actions';
import { goToNextStep, redoTest } from './stepper/product-finder-stepper.actions';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import {
  selectCustomerProductHolding,
  selectHousehold,
  selectHumanCheckoutUrl,
  selectInternetUsage,
  selectIsDarwinUser,
  selectLastKnownState,
  selectMobileLines,
  selectNumberOfSims,
  selectOneConfiguratorUrl,
  selectOnMobileDevice,
  selectPreference,
  selectProductRecommendationByIndex,
  selectProductRecommendationResult,
  selectProductsDetailsUrl,
  selectPromotions,
  selectSalesCheckoutUrl,
  selectTvChannels,
  selectTvExperience,
} from '../+state/product-finder.selectors';
import { Preference } from '../entities/preference/preference.interface';
import { Household } from '../entities/household/household.interface';
import { InternetUsage } from '../entities/internet-usage/internet-usage.interface';
import { MobileLine, MobileUsage } from '../entities/mobile-usage/mobile.usage.interface';
import { TvChannels } from '../entities/tv-channels/tv-channels.interface';
import { ProductRecommendationService } from '../infrastructure/results-screen/product-recommendation.service';
import { TvExperience } from '../entities/tv-experience/tv-experinece.interface';
import { ProductRecommendationResult } from '../entities/results-screen/product-recommendation-result.interface';
import { ProductRecommendationsRequest } from '../infrastructure/results-screen/product-recommendations-request.interface';
import { MobileLineRequest } from '../infrastructure/results-screen/mobile-line-request.interface';
import { HttpClientModule } from '@angular/common/http';
import { JsonUrlService, LoaderService, UrlParam, UrlService } from '@telenet/ng-lib-page';
import {
  CustomerProductHolding,
  CustomerProductHoldingService,
  Product,
  Promotion,
  PromotionService,
  SalesData,
} from '@sales/shared/data-access';
import { ProductRecommendation } from '../entities/results-screen/product-recommendation.interface';
import { OmapiProduct, OmapiProductTestfactory } from '@telenet/ng-lib-omapi';
import { DeviceDetectorService } from 'ngx-device-detector';
import { LoginDetails, LoginService } from '@telenet/ng-lib-ocapi';

describe('ProductFinderEffects', () => {
  let actions$: Actions;
  let effects: ProductFinderEffects;
  let store$: MockStore;
  let deviceDetectorService: DeviceDetectorService;
  let loginService: LoginService;
  let loaderService: LoaderService;
  let promotionService: PromotionService;
  let customerProductHoldingService: CustomerProductHoldingService;
  let productRecommendationService: ProductRecommendationService;
  let urlService: UrlService;
  let jsonUrlService: JsonUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        ProductFinderEffects,
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

    store$ = TestBed.inject(MockStore);
    effects = TestBed.inject<ProductFinderEffects>(ProductFinderEffects);
    deviceDetectorService = TestBed.inject(DeviceDetectorService);
    loginService = TestBed.inject(LoginService);
    loaderService = TestBed.inject(LoaderService);
    promotionService = TestBed.inject(PromotionService);
    customerProductHoldingService = TestBed.inject(CustomerProductHoldingService);
    productRecommendationService = TestBed.inject(ProductRecommendationService);
    urlService = TestBed.inject(UrlService);
    jsonUrlService = TestBed.inject(JsonUrlService);
  });

  describe('onInitEffectsUpdateOnMobileDevice$', () => {
    it('should dispatch updateOnMobileDevice', fakeAsync(() => {
      const expected = true;

      const isMobileSpy = jest.spyOn(deviceDetectorService, 'isMobile').mockReturnValue(expected);

      actions$ = of(initEffects());

      effects.onInitEffectsUpdateOnMobileDevice$.subscribe((action) => {
        expect(action.type).toEqual('[Product Finder] update on mobile device');
        expect(action.onMobileDevice).toEqual(expected);
        expect(isMobileSpy).toHaveBeenCalled();
      });
      tick();
    }));
  });

  describe('onInitEffectsUpdateLoginDetails$', () => {
    const updateLoginDetailsType = '[Product Finder] update login details';

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
    const updatePromotionsType = '[Product Finder] update promotions';

    it('should dispatch updatePromotions', fakeAsync(() => {
      const isDarwinUser = true;
      const expected: Promotion[] = [{ description: 'description' }];

      store$.overrideSelector(selectIsDarwinUser, isDarwinUser);

      const getPromotionsSpy = jest.spyOn(promotionService, 'getPromotions').mockReturnValue(of(expected));

      actions$ = of(updateLoginDetails({ loginDetails: new LoginDetails(200) }));

      effects.onUpdateLoginDetailsUpdatePromotions$.subscribe((action) => {
        expect(action.type).toEqual(updatePromotionsType);
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
        expect(action.type).toEqual(updatePromotionsType);
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
        expect(action.type).toEqual(updatePromotionsType);
        expect(action.promotions).toEqual(expected);
        expect(getPromotionsSpy).not.toHaveBeenCalled();
      });
      tick();
    }));
  });

  describe('onUpdateLoginDetailsUpdateCustomerProductHolding$', () => {
    const updateCustomerProductHoldingType = '[Product Finder] update customer product holding';

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

  it('backupCurrentState$ should dispatch backupCurrentState', fakeAsync(() => {
    actions$ = of(goToNextStep());

    effects.backupCurrentState$.subscribe((action) => {
      expect(action.type).toEqual('[Product Finder] backup current state');
    });

    tick();
  }));

  it('checkIfNumberOfSimsChanged$ should dispatch handlePreferenceChanged', fakeAsync(() => {
    const preference: Preference = {
      mobile: false,
      surfing: false,
      watchTv: false,
      fixedLine: false,
    };
    const expected: Partial<Preference> = { mobile: true };
    store$.overrideSelector(selectPreference, { ...preference, ...expected });
    store$.overrideSelector(selectLastKnownState, { preference });
    actions$ = of(goToNextStep());

    effects.checkIfPreferenceChanged$.subscribe((action) => {
      expect(action.type).toEqual('[Product Finder] handle preference changed');
      expect(action.preference).toEqual(expected);
    });
    tick();
  }));

  it('checkIfPreferenceChanged$ should dispatch handleNumberOfSimsChanged', fakeAsync(() => {
    const numberOfSims = 1;
    const expected = 3;
    store$.overrideSelector(selectNumberOfSims, 3);
    store$.overrideSelector(selectLastKnownState, { numberOfSims });
    actions$ = of(goToNextStep());

    effects.checkIfNumberOfSimsChanged$.subscribe((action) => {
      expect(action.type).toEqual('[Product Finder] handle number of sims changed');
      expect(action.numberOfSims).toEqual(expected);
    });
    tick();
  }));

  it('updateHouseholdBasedOnPreference$ should dispatch updateHousehold', fakeAsync(() => {
    const expected: Household = { adults: 1, teens: 0, children: 0 };
    actions$ = of(handlePreferenceChanged({ preference: { surfing: true } }));

    effects.updateHouseholdBasedOnPreference$.subscribe((action) => {
      expect(action.type).toEqual('[Product Finder] update household');
      expect(action.household).toEqual(expected);
    });
    tick();
  }));

  it('updateInternetUsageBasedOnPreference$ should dispatch updateInternetUsage', fakeAsync(() => {
    const expected: InternetUsage = { selection: [] };
    actions$ = of(handlePreferenceChanged({ preference: { surfing: true } }));

    effects.updateInternetUsageBasedOnPreference$.subscribe((action) => {
      expect(action.type).toEqual('[Product Finder] update internet usage');
      expect(action.internetUsage).toEqual(expected);
    });
    tick();
  }));

  it('updateNumberOfSimsBasedOnPreference$ should dispatch updateNumberOfSims', fakeAsync(() => {
    const expected = 1;
    actions$ = of(handlePreferenceChanged({ preference: { mobile: true } }));

    effects.updateNumberOfSimsBasedOnPreference$.subscribe((action) => {
      expect(action.type).toEqual('[Product Finder] update number of sims');
      expect(action.numberOfSims).toEqual(expected);
    });
    tick();
  }));

  it('updateMobileUsageBasedOnNumberOfSims$ should dispatch updateMobileUsage', fakeAsync(() => {
    const expected: MobileUsage = {
      mobileLines: [
        { selection: [], collapsed: false, error: null },
        { selection: [], collapsed: true, error: null },
      ],
    };
    store$.overrideSelector(selectMobileLines, []);
    store$.overrideSelector(selectOnMobileDevice, false);
    actions$ = of(handleNumberOfSimsChanged({ numberOfSims: 2 }));

    effects.updateMobileUsageBasedOnNumberOfSims$.subscribe((action) => {
      expect(action.type).toEqual('[Product Finder] update mobile usage');
      expect(action.mobileUsage).toEqual(expected);
    });
    tick();
  }));

  it('updateTvChannelsBasedOnPreference$ should dispatch updateTvChannels', fakeAsync(() => {
    const expected: TvChannels = { selection: [] };
    actions$ = of(handlePreferenceChanged({ preference: { watchTv: true } }));

    effects.updateTvChannelsBasedOnPreference$.subscribe((action) => {
      expect(action.type).toEqual('[Product Finder] update tv channels');
      expect(action.tvChannels).toEqual(expected);
    });
    tick();
  }));

  it('updateTvExperienceBasedOnPreference$ should dispatch updateTvExperience', fakeAsync(() => {
    const expected: TvChannels = { selection: [] };
    actions$ = of(handlePreferenceChanged({ preference: { watchTv: true } }));

    effects.updateTvExperienceBasedOnPreference$.subscribe((action) => {
      expect(action.type).toEqual('[Product Finder] update tv experience');
      expect(action.tvExperience).toEqual(expected);
    });
    tick();
  }));

  it('getProductRecommendations$ should dispatch getProductRecommendationsSuccess', fakeAsync(() => {
    const preference: Preference = {
      surfing: false,
      mobile: false,
      watchTv: false,
      fixedLine: true,
    };
    const household: Household = {
      adults: 1,
      children: 1,
      teens: 1,
    };
    const internetUsage: InternetUsage = {
      selection: ['NEWS'],
    };
    const mobileLines: MobileLine[] = [{ selection: ['NEWS'], collapsed: false, error: null }];
    const tvChannels: TvChannels = { selection: ['SPORTS'] };
    const tvExperience: TvExperience = { selection: ['TV_APP'] };
    const promotions: Promotion[] = [{ description: 'promo description' }];
    const customerProductHolding: CustomerProductHolding[] = [];
    store$.overrideSelector(selectPreference, preference);
    store$.overrideSelector(selectHousehold, household);
    store$.overrideSelector(selectInternetUsage, internetUsage);
    store$.overrideSelector(selectMobileLines, mobileLines);
    store$.overrideSelector(selectTvChannels, tvChannels);
    store$.overrideSelector(selectTvExperience, tvExperience);
    store$.overrideSelector(selectPromotions, promotions);
    store$.overrideSelector(selectCustomerProductHolding, customerProductHolding);
    const mobileLineRequests: MobileLineRequest[] = [
      {
        mobileUsages: mobileLines.flatMap((mobileLine: MobileLine) => mobileLine.selection),
      },
    ];
    const productRecommendationsRequest: ProductRecommendationsRequest = {
      household,
      internetUsages: internetUsage.selection,
      mobileLines: mobileLineRequests,
      tvChannels: tvChannels.selection,
      tvExperiences: tvExperience.selection,
      fixedTelephone: preference.fixedLine,
      promotions,
      customerProductHolding,
    };
    const productRecommendationResult: ProductRecommendationResult = {
      productRecommendations: [],
      mostRecommendedIndex: null,
    };

    const startSpy = jest.spyOn(loaderService, 'start');
    const getProductRecommendationsSpy = jest
      .spyOn(productRecommendationService, 'getProductRecommendations')
      .mockReturnValue(of(productRecommendationResult));
    const stopSpy = jest.spyOn(loaderService, 'stop');

    actions$ = of(getProductRecommendations());

    effects.getProductRecommendations$.subscribe((action) => {
      expect(startSpy).toHaveBeenCalled();
      expect(action.type).toEqual('[Product Finder] get product recommendations success');
      expect(action.productRecommendationResult).toEqual(productRecommendationResult);
      expect(getProductRecommendationsSpy).toHaveBeenCalledWith(productRecommendationsRequest);
    });
    tick();
    expect(stopSpy).toHaveBeenCalled();
  }));

  it('resetStateToInitialStateOnRedoTest should dispatch resetStateToInitialState', fakeAsync(() => {
    actions$ = of(redoTest());

    effects.resetStateToInitialStateOnRedoTest.subscribe((action) => {
      expect(action.type).toEqual('[Product Finder] reset state to initial state');
    });

    tick();
  }));

  it('ngrxOnInitEffects should return initEffects', () => {
    const result = effects.ngrxOnInitEffects();

    expect(result.type).toEqual('[Products Finder] init effects');
  });

  it('order$ with 1 offer should provide navigateToSalesCheckout action', fakeAsync(() => {
    const productRecommendation: ProductRecommendation = {
      offers: [
        {
          id: 'id',
          type: 'type',
          offers: [],
          amountOfLimitedSims: 0,
        },
      ],
      salesOffer: {
        price: 1,
        promo: null,
      },
      products: [],
    };
    const productRecommendationResult: ProductRecommendationResult = {
      productRecommendations: [productRecommendation],
      mostRecommendedIndex: 0,
    };

    const index = 0;

    const expectedAction = navigateToSalesCheckout({ productRecommendation: productRecommendation });

    store$.overrideSelector(selectProductRecommendationResult, productRecommendationResult);
    store$.overrideSelector(selectProductRecommendationByIndex(index), productRecommendation);

    actions$ = of(order({ index }));

    effects.order$.subscribe((resultAction) => {
      expect(resultAction).toEqual(expectedAction);
    });

    tick();
  }));

  it('order$ with 2 or more offer should provide navigateToHumanCheckout action', fakeAsync(() => {
    const productRecommendation: ProductRecommendation = {
      offers: [
        {
          id: 'id',
          type: 'type',
          offers: [],
          amountOfLimitedSims: 0,
        },
        {
          id: 'id',
          type: 'type',
          offers: [],
          amountOfLimitedSims: 0,
        },
      ],
      salesOffer: {
        price: 1,
        promo: null,
      },
      products: [],
    };
    const productRecommendationResult: ProductRecommendationResult = {
      productRecommendations: [productRecommendation],
      mostRecommendedIndex: 0,
    };

    const index = 0;

    const expectedAction = navigateToHumanCheckout({ productRecommendation: productRecommendation });

    store$.overrideSelector(selectProductRecommendationResult, productRecommendationResult);
    store$.overrideSelector(selectProductRecommendationByIndex(index), productRecommendation);

    actions$ = of(order({ index }));

    effects.order$.subscribe((resultAction) => {
      expect(resultAction).toEqual(expectedAction);
    });

    tick();
  }));

  it('navigateToSalesCheckout$ should navigate to sales checkout', fakeAsync(() => {
    const productRecommendation: ProductRecommendation = {
      offers: [
        {
          id: 'id',
          type: 'type',
          offers: [],
          amountOfLimitedSims: 0,
        },
      ],
      salesOffer: {
        price: 1,
        promo: null,
      },
      products: [],
    };
    const salesData: SalesData = {
      offers: productRecommendation.offers,
    };
    const salesCheckoutUrl = 'url';

    store$.overrideSelector(selectSalesCheckoutUrl, salesCheckoutUrl);

    const compressSpy = jest.spyOn(jsonUrlService, 'compress').mockReturnValue(of('sdata'));
    const redirectToSpy = jest.spyOn(urlService, 'redirectTo');
    jest.spyOn(urlService, 'getUrlWithParams').mockReturnValue('url');

    actions$ = of(navigateToSalesCheckout({ productRecommendation: productRecommendation }));

    effects.navigateToSalesCheckout$.subscribe(() => {
      expect(compressSpy).toHaveBeenCalledWith(salesData);
      expect(redirectToSpy).toHaveBeenCalledWith('url');
    });

    tick();
  }));

  it('navigateToHumanCheckout$ should navigate to human checkout', fakeAsync(() => {
    const productRecommendation: ProductRecommendation = {
      offers: [
        {
          id: 'id',
          type: 'type',
          offers: [],
          amountOfLimitedSims: 0,
        },
      ],
      salesOffer: {
        price: 1,
        promo: null,
      },
      products: [createMobileProduct(), createMobileProduct()],
    };

    const humanCheckoutUrl = 'url';

    store$.overrideSelector(selectHumanCheckoutUrl, humanCheckoutUrl);

    const redirectToSpy = jest.spyOn(urlService, 'redirectTo');
    const getUrlWithParamsSpy = jest.spyOn(urlService, 'getUrlWithParams').mockReturnValue(humanCheckoutUrl);

    actions$ = of(navigateToHumanCheckout({ productRecommendation: productRecommendation }));

    effects.navigateToHumanCheckout$.subscribe(() => {
      expect(redirectToSpy).toHaveBeenCalledWith(humanCheckoutUrl);
      expect(getUrlWithParamsSpy).toHaveBeenCalledWith(humanCheckoutUrl, [
        new UrlParam('field_selected_product', '2x_Telenet_Mobile_5_GB'),
      ]);
    });

    tick();
  }));

  describe('resultDetails$', () => {
    it('should navigate to one configurator', fakeAsync(() => {
      const omapiProduct: OmapiProduct = OmapiProductTestfactory.build();
      jest.spyOn(omapiProduct, 'isConnect5').mockReturnValue(true);
      const productRecommendation: ProductRecommendation = {
        offers: [
          {
            id: 'id',
            type: 'type',
            offers: [],
            amountOfLimitedSims: 0,
          },
        ],
        salesOffer: {
          price: 1,
          promo: null,
        },
        products: [
          {
            localizedOmapiProductName: '',
            omapiProduct,
            productSpec: { shortSummaries: [], detailedSpecs: [] },
          },
        ],
      };
      const productRecommendationResult: ProductRecommendationResult = {
        productRecommendations: [productRecommendation],
        mostRecommendedIndex: 0,
      };
      const index = 0;
      const expectedAction = navigateToOneConfigurator({ productRecommendation: productRecommendation });

      store$.overrideSelector(selectProductRecommendationResult, productRecommendationResult);
      store$.overrideSelector(selectProductRecommendationByIndex(index), productRecommendation);

      actions$ = of(resultDetails({ index }));

      effects.resultDetails$.subscribe((resultAction) => {
        expect(resultAction).toEqual(expectedAction);
      });
      tick();
    }));

    it('should navigate to product finder result details', fakeAsync(() => {
      const omapiProduct: OmapiProduct = OmapiProductTestfactory.build();
      jest.spyOn(omapiProduct, 'isConnect5').mockReturnValue(false);
      const productRecommendation: ProductRecommendation = {
        offers: [
          {
            id: 'id',
            type: 'type',
            offers: [],
            amountOfLimitedSims: 0,
          },
        ],
        salesOffer: {
          price: 1,
          promo: null,
        },
        products: [
          {
            localizedOmapiProductName: '',
            omapiProduct,
            productSpec: { shortSummaries: [], detailedSpecs: [] },
          },
        ],
      };
      const productRecommendationResult: ProductRecommendationResult = {
        productRecommendations: [productRecommendation],
        mostRecommendedIndex: 0,
      };
      const index = 0;
      const expectedAction = navigateToProductsDetails({ productRecommendation: productRecommendation });

      store$.overrideSelector(selectProductRecommendationResult, productRecommendationResult);
      store$.overrideSelector(selectProductRecommendationByIndex(index), productRecommendation);

      actions$ = of(resultDetails({ index }));

      effects.resultDetails$.subscribe((resultAction) => {
        expect(resultAction).toEqual(expectedAction);
      });
      tick();
    }));
  });

  it('navigateToOneConfigurator$ should navigate to ONE configurator', fakeAsync(() => {
    const productRecommendation: ProductRecommendation = {
      offers: [
        {
          id: 'id',
          type: 'type',
          offers: [],
          amountOfLimitedSims: 0,
        },
      ],
      salesOffer: {
        price: 1,
        promo: null,
      },
      products: [],
    };
    const salesData: SalesData = {
      offers: productRecommendation.offers,
    };

    const oneConfiguratorUrl = 'url';

    store$.overrideSelector(selectOneConfiguratorUrl, oneConfiguratorUrl);

    const compressSpy = jest.spyOn(jsonUrlService, 'compress').mockReturnValue(of('sdata'));
    const getUrlWithParamsSpy = jest.spyOn(urlService, 'getUrlWithParams').mockReturnValue(oneConfiguratorUrl);
    const openNewTabSpy = jest.spyOn(urlService, 'openNewTab');

    actions$ = of(navigateToOneConfigurator({ productRecommendation: productRecommendation }));

    effects.navigateToOneConfigurator$.subscribe(() => {
      expect(compressSpy).toHaveBeenCalledWith(salesData);
      expect(getUrlWithParamsSpy).toHaveBeenCalledWith(oneConfiguratorUrl, [new UrlParam('sdata', 'sdata')]);
      expect(openNewTabSpy).toHaveBeenCalledWith(oneConfiguratorUrl);
    });

    tick();
  }));

  it('navigateToProductsDetails$ should navigate to products details', fakeAsync(() => {
    const productRecommendation: ProductRecommendation = {
      offers: [
        {
          id: 'id',
          type: 'type',
          offers: [],
          amountOfLimitedSims: 0,
        },
      ],
      salesOffer: {
        price: 1,
        promo: null,
      },
      products: [],
    };
    const salesData: SalesData = {
      offers: productRecommendation.offers,
    };

    const productsDetailsUrl = 'url';

    store$.overrideSelector(selectProductsDetailsUrl, productsDetailsUrl);

    const compressSpy = jest.spyOn(jsonUrlService, 'compress').mockReturnValue(of('sdata'));
    const getUrlWithParamsSpy = jest.spyOn(urlService, 'getUrlWithParams').mockReturnValue(productsDetailsUrl);
    const openNewTabSpy = jest.spyOn(urlService, 'openNewTab');

    actions$ = of(navigateToProductsDetails({ productRecommendation: productRecommendation }));

    effects.navigateToProductsDetails$.subscribe(() => {
      expect(compressSpy).toHaveBeenCalledWith(salesData);
      expect(getUrlWithParamsSpy).toHaveBeenCalledWith(productsDetailsUrl, [new UrlParam('sdata', 'sdata')]);
      expect(openNewTabSpy).toHaveBeenCalledWith(productsDetailsUrl);
    });

    tick();
  }));

  function createMobileProduct(): Product {
    const omapiProduct: OmapiProduct = new OmapiProduct();
    omapiProduct.externalProductCode = 'TMOB0002';
    omapiProduct.productType = 'MOBILE';

    return {
      localizedOmapiProductName: 'Telenet Mobile 5 GB',
      omapiProduct,
      productSpec: {
        shortSummaries: [],
        detailedSpecs: [],
      },
    };
  }
});
