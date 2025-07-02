import {
  clearError,
  getProductRecommendationsSuccess,
  requireAtLeastOneInternetUsageToBeSelectedError,
  requireAtLeastOneMobileUsageToBeSelectedForEachMobileLineError,
  requireAtLeastOnePreferenceToBeSelectedError,
  requireAtLeastOneTvChannelToBeSelectedError,
  requireAtLeastOneTvExperienceToBeSelectedError,
  requireInternetWhenTvIsSelectedError,
  resetStateToInitialState,
  updateCustomerProductHolding,
  updateEnableLoader,
  updateEnableLoaderMask,
  updateHousehold,
  updateHumanCheckoutUrl,
  updateInternetUsage,
  updateLoginDetails,
  updateMobileLineCollapsed,
  updateMobileLines,
  updateMobileLineSelection,
  updateNumberOfSims,
  updateOneConfiguratorUrl,
  updatePreference,
  updateProductsDetailsUrl,
  updatePromotions,
  updateSalesCheckoutUrl,
  updateTvChannels,
  updateTvExperience,
} from './product-finder.actions';
import { initialState, productFinderReducer, ProductFinderState } from './product-finder.reducers';
import { Preference } from '../entities/preference/preference.interface';
import { Household } from '../entities/household/household.interface';
import { InternetUsage } from '../entities/internet-usage/internet-usage.interface';
import { MobileLine, MobileUsage } from '../entities/mobile-usage/mobile.usage.interface';
import { TvChannels } from '../entities/tv-channels/tv-channels.interface';
import { TvExperience } from '../entities/tv-experience/tv-experinece.interface';
import { ProductRecommendationResult } from '../entities/results-screen/product-recommendation-result.interface';
import { ProductFinderErrorEnum } from '../entities/error/product-finder-error.enum';
import { LoginDetails } from '@telenet/ng-lib-ocapi';
import { CustomerProductHolding, Promotion } from '@sales/shared/data-access';

describe('product finder reducer', () => {
  it('unknown action should return the initial state', () => {
    const action = {
      type: 'unknown',
    };

    const result: ProductFinderState = productFinderReducer(initialState, action);

    expect(result).toBe(initialState);
  });

  describe('updateLoginDetails', () => {
    it('should update loginDetails', () => {
      const loginDetails: LoginDetails = new LoginDetails(200);
      const action = updateLoginDetails({ loginDetails });

      const expected: ProductFinderState = {
        ...initialState,
        loginDetails,
      };

      const result: ProductFinderState = productFinderReducer(initialState, action);

      expect(result).toEqual(expected);
    });
  });

  describe('updatePromotions', () => {
    it('should update promotions', () => {
      const promotions: Promotion[] = [{ description: 'description' }];
      const action = updatePromotions({ promotions });

      const expected: ProductFinderState = {
        ...initialState,
        promotions,
      };

      const result: ProductFinderState = productFinderReducer(initialState, action);

      expect(result).toEqual(expected);
    });
  });

  describe('updateCustomerProductHolding', () => {
    it('should update customerProductHolding', () => {
      const customerProductHolding: CustomerProductHolding[] = [];
      const action = updateCustomerProductHolding({ customerProductHolding });

      const expected: ProductFinderState = {
        ...initialState,
        customerProductHolding,
      };

      const result: ProductFinderState = productFinderReducer(initialState, action);

      expect(result).toEqual(expected);
    });
  });

  it('updatePreference action should update the preference', () => {
    const preference: Preference = {
      mobile: true,
      surfing: true,
      watchTv: false,
      fixedLine: false,
    };
    const action = updatePreference({ preference });

    const expected: ProductFinderState = {
      ...initialState,
      preference,
    };

    const result: ProductFinderState = productFinderReducer(initialState, action);

    expect(result).toStrictEqual(expected);
  });

  it('updateHousehold action should update the household', () => {
    const household: Household = {
      adults: 4,
      teens: 3,
      children: 2,
    };
    const action = updateHousehold({ household });

    const expected: ProductFinderState = {
      ...initialState,
      household,
    };

    const result: ProductFinderState = productFinderReducer(initialState, action);

    expect(result).toStrictEqual(expected);
  });

  it('updateInternetUsage action should update the internetUsage', () => {
    const internetUsage: InternetUsage = {
      selection: ['gaming'],
    };
    const action = updateInternetUsage({ internetUsage });

    const expected: ProductFinderState = {
      ...initialState,
      internetUsage,
    };

    const result: ProductFinderState = productFinderReducer(initialState, action);

    expect(result).toStrictEqual(expected);
  });

  it('updateNumberOfSims action should update the numberOfSims', () => {
    const numberOfSims = 1;
    const action = updateNumberOfSims({ numberOfSims: numberOfSims });

    const expected: ProductFinderState = {
      ...initialState,
      numberOfSims,
    };

    const result: ProductFinderState = productFinderReducer(initialState, action);

    expect(result).toStrictEqual(expected);
  });

  it('updateMobileLines action should update the mobileLines', () => {
    const mobileLines: MobileLine[] = [
      {
        error: null,
        selection: ['gaming'],
        collapsed: false,
      },
    ];
    const action = updateMobileLines({ mobileLines });
    const state: ProductFinderState = {
      ...initialState,
      mobileUsage: {
        mobileLines: [],
      },
    };

    const expected: ProductFinderState = {
      ...state,
      mobileUsage: {
        ...state.mobileUsage,
        mobileLines: mobileLines,
      },
    };

    const result: ProductFinderState = productFinderReducer(state, action);

    expect(result).toStrictEqual(expected);
  });

  it('updateMobileLineSelection action should update the mobile selection', () => {
    const selection: string[] = ['GAMING'];
    const index = 0;
    const mobileUsage: MobileUsage = {
      mobileLines: [{ error: null, selection, collapsed: false }],
    };
    const action = updateMobileLineSelection({ index, selection });
    const state: ProductFinderState = {
      ...initialState,
      mobileUsage: {
        mobileLines: [{ error: null, selection: [], collapsed: false }],
      },
    };

    const expected: ProductFinderState = {
      ...state,
      mobileUsage,
    };

    const result: ProductFinderState = productFinderReducer(state, action);

    expect(result).toStrictEqual(expected);
  });

  it('updateMobileLineCollapsed action should update the mobile line collapsed', () => {
    const index = 0;
    const collapsed = true;
    const mobileUsage: MobileUsage = {
      mobileLines: [{ error: null, selection: [], collapsed }],
    };
    const action = updateMobileLineCollapsed({ index, collapsed });
    const state: ProductFinderState = {
      ...initialState,
      mobileUsage: {
        mobileLines: [{ error: null, selection: [], collapsed: false }],
      },
    };

    const expected: ProductFinderState = {
      ...state,
      mobileUsage,
    };

    const result: ProductFinderState = productFinderReducer(state, action);

    expect(result).toStrictEqual(expected);
  });

  it('updateTvChannels action should update the tvChannels', () => {
    const tvChannels: TvChannels = {
      selection: ['belgium'],
    };
    const action = updateTvChannels({ tvChannels });

    const expected: ProductFinderState = {
      ...initialState,
      tvChannels,
    };

    const result: ProductFinderState = productFinderReducer(initialState, action);

    expect(result).toStrictEqual(expected);
  });

  it('updateTvExperience action should update the tvExperience', () => {
    const tvExperience: TvExperience = { selection: [] };
    const action = updateTvExperience({ tvExperience });

    const expected: ProductFinderState = {
      ...initialState,
      tvExperience,
    };

    const result: ProductFinderState = productFinderReducer(initialState, action);

    expect(result).toStrictEqual(expected);
  });

  it('getProductRecommendationsSuccess action should update the productRecommendationResult', () => {
    const productRecommendationResult: ProductRecommendationResult = {
      productRecommendations: [],
      mostRecommendedIndex: null,
    };
    const action = getProductRecommendationsSuccess({ productRecommendationResult });

    const expected: ProductFinderState = {
      ...initialState,
      productRecommendationResult,
    };

    const result: ProductFinderState = productFinderReducer(initialState, action);

    expect(result).toStrictEqual(expected);
  });

  describe('resetToInitialState', () => {
    it('should reset the state to the initial state', () => {
      const action = resetStateToInitialState();
      const url = 'url';
      const promotions: Promotion[] = [];
      const customerProductHolding: CustomerProductHolding[] = [];
      const state: ProductFinderState = {
        ...initialState,
        enableLoader: true,
        enableLoaderMask: true,
        salesCheckoutUrl: url,
        humanCheckoutUrl: url,
        oneConfiguratorUrl: url,
        productsDetailsUrl: url,
        household: {
          adults: 1,
          teens: 1,
          children: 1,
        },
        internetUsage: { selection: ['NEWS'] },
        mobileUsage: {
          mobileLines: [{ error: null, selection: ['NEWS'], collapsed: false }],
        },
        promotions,
        customerProductHolding,
      };

      const expected: ProductFinderState = {
        ...initialState,
        enableLoader: true,
        enableLoaderMask: true,
        salesCheckoutUrl: url,
        humanCheckoutUrl: url,
        oneConfiguratorUrl: url,
        productsDetailsUrl: url,
        promotions,
        customerProductHolding,
      };

      const result: ProductFinderState = productFinderReducer(state, action);

      expect(result).toStrictEqual(expected);
    });
  });

  describe('updateEnableLoader', () => {
    it('should update enableLoader', () => {
      const enableLoader = true;
      const action = updateEnableLoader({ enableLoader });

      const expected: ProductFinderState = {
        ...initialState,
        enableLoader,
      };

      const result: ProductFinderState = productFinderReducer(initialState, action);

      expect(result).toStrictEqual(expected);
    });
  });

  describe('updateEnableLoaderMask', () => {
    it('should update enableLoaderMask', () => {
      const enableLoaderMask = true;
      const action = updateEnableLoaderMask({ enableLoaderMask });

      const expected: ProductFinderState = {
        ...initialState,
        enableLoaderMask,
      };

      const result: ProductFinderState = productFinderReducer(initialState, action);

      expect(result).toStrictEqual(expected);
    });
  });

  it('updateSalesCheckoutUrl should update the sales checkout url', () => {
    const salesCheckoutUrl = 'url';
    const action = updateSalesCheckoutUrl({ salesCheckoutUrl });

    const expected: ProductFinderState = {
      ...initialState,
      salesCheckoutUrl,
    };

    const result: ProductFinderState = productFinderReducer(initialState, action);

    expect(result).toStrictEqual(expected);
  });

  it('updateHumanCheckoutUrl should update the human checkout url', () => {
    const humanCheckoutUrl = 'url';
    const action = updateHumanCheckoutUrl({ humanCheckoutUrl });

    const expected: ProductFinderState = {
      ...initialState,
      humanCheckoutUrl,
    };

    const result: ProductFinderState = productFinderReducer(initialState, action);

    expect(result).toStrictEqual(expected);
  });

  it('updateOneConfiguratorUrl should update the ONE configurator url', () => {
    const oneConfiguratorUrl = 'url';
    const action = updateOneConfiguratorUrl({ oneConfiguratorUrl });

    const expected: ProductFinderState = {
      ...initialState,
      oneConfiguratorUrl,
    };

    const result: ProductFinderState = productFinderReducer(initialState, action);

    expect(result).toStrictEqual(expected);
  });

  it('updateProductsDetailsUrl should update the products details url', () => {
    const productsDetailsUrl = 'url';
    const action = updateProductsDetailsUrl({ productsDetailsUrl });

    const expected: ProductFinderState = {
      ...initialState,
      productsDetailsUrl,
    };

    const result: ProductFinderState = productFinderReducer(initialState, action);

    expect(result).toStrictEqual(expected);
  });

  describe('requireAtLeastOnePreferenceToBeSelectedError', () => {
    it('should update error with REQUIRE_AT_LEAST_ONE_PREFERENCE_TO_BE_SELECTED', () => {
      const action = requireAtLeastOnePreferenceToBeSelectedError();
      const expected: ProductFinderState = {
        ...initialState,
        error: ProductFinderErrorEnum.REQUIRE_AT_LEAST_ONE_PREFERENCE_TO_BE_SELECTED,
      };

      const result: ProductFinderState = productFinderReducer(initialState, action);

      expect(result).toStrictEqual(expected);
    });
  });

  describe('requireInternetWhenTvIsSelectedError', () => {
    it('should update error with REQUIRE_AT_LEAST_ONE_PREFERENCE_TO_BE_SELECTED', () => {
      const action = requireInternetWhenTvIsSelectedError();
      const expected: ProductFinderState = {
        ...initialState,
        error: ProductFinderErrorEnum.REQUIRE_INTERNET_WHEN_TV_IS_SELECTED,
      };

      const result: ProductFinderState = productFinderReducer(initialState, action);

      expect(result).toStrictEqual(expected);
    });
  });

  describe('requireAtLeastOneInternetUsageToBeSelectedError', () => {
    it('should update error with REQUIRE_AT_LEAST_ONE_INTERNET_USAGE_TO_BE_SELECTED', () => {
      const action = requireAtLeastOneInternetUsageToBeSelectedError();
      const expected: ProductFinderState = {
        ...initialState,
        error: ProductFinderErrorEnum.REQUIRE_AT_LEAST_ONE_INTERNET_USAGE_TO_BE_SELECTED,
      };

      const result: ProductFinderState = productFinderReducer(initialState, action);

      expect(result).toStrictEqual(expected);
    });
  });

  describe('requireAtLeastOneMobileUsageToBeSelectedForEachMobileLineError', () => {
    it('should update error with REQUIRE_AT_LEAST_ONE_MOBILE_USAGE_TO_BE_SELECTED_FOR_EACH_MOBILE_LINE', () => {
      const action = requireAtLeastOneMobileUsageToBeSelectedForEachMobileLineError();
      const expected: ProductFinderState = {
        ...initialState,
        error: ProductFinderErrorEnum.REQUIRE_AT_LEAST_ONE_MOBILE_USAGE_TO_BE_SELECTED_FOR_EACH_MOBILE_LINE,
      };

      const result: ProductFinderState = productFinderReducer(initialState, action);

      expect(result).toStrictEqual(expected);
    });

    it('should update error of mobile usage with empty selection with REQUIRE_AT_LEAST_ONE_MOBILE_USAGE_TO_BE_SELECTED', () => {
      const action = requireAtLeastOneMobileUsageToBeSelectedForEachMobileLineError();
      const state: ProductFinderState = {
        ...initialState,
        mobileUsage: {
          mobileLines: [
            {
              error: null,
              selection: [],
              collapsed: false,
            },
          ],
        },
      };
      const expected: ProductFinderState = {
        ...state,
        error: ProductFinderErrorEnum.REQUIRE_AT_LEAST_ONE_MOBILE_USAGE_TO_BE_SELECTED_FOR_EACH_MOBILE_LINE,
        mobileUsage: {
          mobileLines: [
            {
              error: ProductFinderErrorEnum.REQUIRE_AT_LEAST_ONE_MOBILE_USAGE_TO_BE_SELECTED,
              selection: [],
              collapsed: false,
            },
          ],
        },
      };

      const result: ProductFinderState = productFinderReducer(state, action);

      expect(result).toStrictEqual(expected);
    });
  });

  describe('requireAtLeastOneTvChannelToBeSelectedError', () => {
    it('should update error with REQUIRE_AT_LEAST_ONE_TV_CHANNEL_TO_BE_SELECTED', () => {
      const action = requireAtLeastOneTvChannelToBeSelectedError();
      const expected: ProductFinderState = {
        ...initialState,
        error: ProductFinderErrorEnum.REQUIRE_AT_LEAST_ONE_TV_CHANNEL_TO_BE_SELECTED,
      };

      const result: ProductFinderState = productFinderReducer(initialState, action);

      expect(result).toStrictEqual(expected);
    });
  });

  describe('requireAtLeastOneTvExperienceToBeSelectedError', () => {
    it('should update error with REQUIRE_AT_LEAST_ONE_TV_EXPERIENCE_TO_BE_SELECTED', () => {
      const action = requireAtLeastOneTvExperienceToBeSelectedError();
      const expected: ProductFinderState = {
        ...initialState,
        error: ProductFinderErrorEnum.REQUIRE_AT_LEAST_ONE_TV_EXPERIENCE_TO_BE_SELECTED,
      };

      const result: ProductFinderState = productFinderReducer(initialState, action);

      expect(result).toStrictEqual(expected);
    });
  });

  describe('clearError', () => {
    it('should update error with null', () => {
      const action = clearError();
      const expected: ProductFinderState = {
        ...initialState,
        error: null,
      };

      const result: ProductFinderState = productFinderReducer(initialState, action);

      expect(result).toStrictEqual(expected);
    });
  });
});
