import {
  selectCustomerProductHolding,
  selectEnableLoader,
  selectEnableLoaderMask,
  selectHasErrorRequireAtLeastOneInternetUsageToBeSelected,
  selectHasErrorRequireAtLeastOneMobileUsageToBeSelectedForEachMobileLine,
  selectHasErrorRequireAtLeastOnePreferenceToBeSelected,
  selectHasErrorRequireAtLeastOneTvChannelToBeSelectedError,
  selectHasErrorRequireAtLeastOneTvExperienceToBeSelectedError,
  selectHasErrorRequireInternetWhenTvIsSelected,
  selectHousehold,
  selectHumanCheckoutUrl,
  selectInternetUsage,
  selectIsDarwinUser,
  selectLastKnownState,
  selectMobileLines,
  selectMobileUsage,
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
} from './product-finder.selectors';
import { Preference } from '../entities/preference/preference.interface';
import { Household } from '../entities/household/household.interface';
import { InternetUsage } from '../entities/internet-usage/internet-usage.interface';
import { MobileLine, MobileUsage } from '../entities/mobile-usage/mobile.usage.interface';
import { TvChannels } from '../entities/tv-channels/tv-channels.interface';
import { TvExperience } from '../entities/tv-experience/tv-experinece.interface';
import { initialState, ProductFinderState } from '../+state/product-finder.reducers';
import { ProductRecommendationResult } from '../entities/results-screen/product-recommendation-result.interface';
import { ProductRecommendation } from '../entities/results-screen/product-recommendation.interface';
import { ProductFinderErrorEnum } from '../entities/error/product-finder-error.enum';
import { LoginDetails } from '@telenet/ng-lib-ocapi';
import { CustomerProductHolding, Promotion } from '@sales/shared/data-access';

describe('product finder selectors', () => {
  it('should select onMobileDevice from store', () => {
    const expected = false;
    const state: ProductFinderState = {
      ...initialState,
      onMobileDevice: expected,
    };

    const result: boolean = selectOnMobileDevice.projector(state);

    expect(result).toEqual(expected);
  });

  describe('selectIsDarwinUser', () => {
    it('should return true', () => {
      const expected = true;
      const loginDetails: LoginDetails = new LoginDetails(200);
      loginDetails.bssSystem = 'NETCRACKER';
      const state: ProductFinderState = {
        ...initialState,
        loginDetails,
      };

      const result: boolean = selectIsDarwinUser.projector(state);

      expect(result).toEqual(expected);
    });

    it('should return false', () => {
      const expected = false;
      const loginDetails: LoginDetails = new LoginDetails(200);
      loginDetails.bssSystem = 'TEST';
      const state: ProductFinderState = {
        ...initialState,
        loginDetails,
      };

      const result: boolean = selectIsDarwinUser.projector(state);

      expect(result).toEqual(expected);
    });
  });

  it('should select preference from Store', () => {
    const expected: Preference = {
      mobile: false,
      surfing: false,
      watchTv: false,
      fixedLine: false,
    };
    const state: ProductFinderState = {
      ...initialState,
      preference: expected,
    };

    const result: Preference = selectPreference.projector(state);

    expect(result).toEqual(expected);
  });

  it('should select numberOfSims from Store', () => {
    const expected = 1;
    const state: ProductFinderState = {
      ...initialState,
      numberOfSims: expected,
    };
    const result: number | null = selectNumberOfSims.projector(state);

    expect(result).toEqual(expected);
  });

  it('should select household from Store', () => {
    const expected: Household = {
      adults: 1,
      teens: 0,
      children: 0,
    };
    const state: ProductFinderState = {
      ...initialState,
      household: expected,
    };

    const result: Household | null = selectHousehold.projector(state);

    expect(result).toEqual(expected);
  });

  it('should select internetUsage from Store', () => {
    const expected: InternetUsage = {
      selection: [],
    };
    const state: ProductFinderState = {
      ...initialState,
      internetUsage: expected,
    };

    const result: InternetUsage | null = selectInternetUsage.projector(state);

    expect(result).toEqual(expected);
  });

  it('should select mobileUsage from Store', () => {
    const expected: MobileUsage = {
      mobileLines: [{ selection: [], collapsed: false, error: null }],
    };
    const state: ProductFinderState = {
      ...initialState,
      mobileUsage: expected,
    };

    const result: MobileUsage | null = selectMobileUsage.projector(state);

    expect(result).toEqual(expected);
  });

  it('should select mobileLines from Store', () => {
    const expected: MobileLine[] = [{ selection: [], collapsed: false, error: null }];
    const state: ProductFinderState = {
      ...initialState,
      mobileUsage: {
        mobileLines: expected,
      },
    };

    const result: MobileLine[] = selectMobileLines.projector(state);

    expect(result).toEqual(expected);
  });

  it('should select tvChannels from Store', () => {
    const expected: TvChannels = {
      selection: [],
    };
    const state: ProductFinderState = {
      ...initialState,
      tvChannels: expected,
    };

    const result: TvChannels | null = selectTvChannels.projector(state);

    expect(result).toEqual(expected);
  });

  it('should select tvExperience from Store', () => {
    const expected: TvExperience = {
      selection: [],
    };
    const state: ProductFinderState = {
      ...initialState,
      tvExperience: expected,
    };

    const result: TvExperience | null = selectTvExperience.projector(state);

    expect(result).toEqual(expected);
  });

  describe('selectPromotions', () => {
    it('should select promotions', () => {
      const expected: Promotion[] = [{ description: 'description' }];
      const state: ProductFinderState = {
        ...initialState,
        promotions: expected,
      };

      const result: Promotion[] | null = selectPromotions.projector(state);

      expect(result).toEqual(expected);
    });
  });

  describe('selectCustomerProductHolding', () => {
    it('should select customerProductHolding', () => {
      const expected: CustomerProductHolding[] = [];
      const state: ProductFinderState = {
        ...initialState,
        customerProductHolding: expected,
      };

      const result: CustomerProductHolding[] | null = selectCustomerProductHolding.projector(state);

      expect(result).toEqual(expected);
    });
  });

  it('should select lastKnownState from Store', () => {
    const expected: Partial<ProductFinderState> = {
      preference: {
        mobile: false,
        surfing: false,
        watchTv: false,
        fixedLine: false,
      },
      numberOfSims: null,
    };
    const state: ProductFinderState = {
      ...initialState,
      lastKnownState: expected,
    };

    const result: Partial<ProductFinderState> = selectLastKnownState.projector(state);

    expect(result).toEqual(expected);
  });

  it('should select ProductRecommendationResult from Store', () => {
    const expected: ProductRecommendationResult = {
      productRecommendations: [],
      mostRecommendedIndex: null,
    };
    const state: ProductFinderState = {
      ...initialState,
      productRecommendationResult: expected,
    };

    const result: ProductRecommendationResult | null = selectProductRecommendationResult.projector(state);

    expect(result).toEqual(expected);
  });

  describe('selectEnableLoader', () => {
    it('should select enableLoader', () => {
      const enableLoader = true;
      const state: ProductFinderState = {
        ...initialState,
        enableLoader,
      };

      const result: boolean = selectEnableLoader.projector(state);

      expect(result).toEqual(enableLoader);
    });
  });

  describe('selectEnableLoaderMask', () => {
    it('should select enableLoaderMask', () => {
      const enableLoaderMask = true;
      const state: ProductFinderState = {
        ...initialState,
        enableLoaderMask,
      };

      const result: boolean = selectEnableLoaderMask.projector(state);

      expect(result).toEqual(enableLoaderMask);
    });
  });

  it('should select salesCheckoutUrl from Store', () => {
    const expected = 'url';
    const state: ProductFinderState = {
      ...initialState,
      salesCheckoutUrl: expected,
    };

    const result: string = selectSalesCheckoutUrl.projector(state);

    expect(result).toEqual(expected);
  });

  it('should select humanCheckoutUrl from Store', () => {
    const expected = 'url';
    const state: ProductFinderState = {
      ...initialState,
      humanCheckoutUrl: expected,
    };

    const result: string = selectHumanCheckoutUrl.projector(state);

    expect(result).toEqual(expected);
  });

  it('should select productRecommendation by index from Store', () => {
    const expected: ProductRecommendation = {
      offers: [],
      salesOffer: {
        price: 1,
        promo: null,
      },
      products: [],
    };
    const productRecommendationResult: ProductRecommendationResult = {
      productRecommendations: [expected],
      mostRecommendedIndex: 0,
    };

    const result: ProductRecommendation | undefined =
      selectProductRecommendationByIndex(0).projector(productRecommendationResult);

    expect(result).toEqual(expected);
  });

  it('should select oneConfiguratorUrl from Store', () => {
    const expected = 'url';
    const state: ProductFinderState = {
      ...initialState,
      oneConfiguratorUrl: expected,
    };

    const result: string = selectOneConfiguratorUrl.projector(state);

    expect(result).toEqual(expected);
  });

  it('should select productsDetailsUrl from Store', () => {
    const expected = 'url';
    const state: ProductFinderState = {
      ...initialState,
      productsDetailsUrl: expected,
    };

    const result: string = selectProductsDetailsUrl.projector(state);

    expect(result).toEqual(expected);
  });

  describe('selectHasErrorRequireAtLeastOnePreferenceToBeSelected', () => {
    it('should return true when has error REQUIRE_AT_LEAST_ONE_PREFERENCE_TO_BE_SELECTED', () => {
      const expected = true;
      const state: ProductFinderState = {
        ...initialState,
        error: ProductFinderErrorEnum.REQUIRE_AT_LEAST_ONE_PREFERENCE_TO_BE_SELECTED,
      };

      const result: boolean = selectHasErrorRequireAtLeastOnePreferenceToBeSelected.projector(state);

      expect(result).toEqual(expected);
    });

    it('should return false when does not have error REQUIRE_AT_LEAST_ONE_PREFERENCE_TO_BE_SELECTED', () => {
      const expected = false;
      const state: ProductFinderState = {
        ...initialState,
        error: null,
      };

      const result: boolean = selectHasErrorRequireAtLeastOnePreferenceToBeSelected.projector(state);

      expect(result).toEqual(expected);
    });
  });

  describe('selectHasErrorRequireInternetWhenTvIsSelected', () => {
    it('should return true when has error REQUIRE_INTERNET_WHEN_TV_IS_SELECTED', () => {
      const expected = true;
      const state: ProductFinderState = {
        ...initialState,
        error: ProductFinderErrorEnum.REQUIRE_INTERNET_WHEN_TV_IS_SELECTED,
      };

      const result: boolean = selectHasErrorRequireInternetWhenTvIsSelected.projector(state);

      expect(result).toEqual(expected);
    });

    it('should return false when does not have error REQUIRE_INTERNET_WHEN_TV_IS_SELECTED', () => {
      const expected = false;
      const state: ProductFinderState = {
        ...initialState,
        error: null,
      };

      const result: boolean = selectHasErrorRequireInternetWhenTvIsSelected.projector(state);

      expect(result).toEqual(expected);
    });
  });

  describe('selectHasErrorRequireAtLeastOneInternetUsageToBeSelected', () => {
    it('should return true when has error REQUIRE_AT_LEAST_ONE_INTERNET_USAGE_TO_BE_SELECTED', () => {
      const expected = true;
      const state: ProductFinderState = {
        ...initialState,
        error: ProductFinderErrorEnum.REQUIRE_AT_LEAST_ONE_INTERNET_USAGE_TO_BE_SELECTED,
      };

      const result: boolean = selectHasErrorRequireAtLeastOneInternetUsageToBeSelected.projector(state);

      expect(result).toEqual(expected);
    });

    it('should return false when does not have error REQUIRE_AT_LEAST_ONE_INTERNET_USAGE_TO_BE_SELECTED', () => {
      const expected = false;
      const state: ProductFinderState = {
        ...initialState,
        error: null,
      };

      const result: boolean = selectHasErrorRequireAtLeastOneInternetUsageToBeSelected.projector(state);

      expect(result).toEqual(expected);
    });
  });

  describe('selectHasErrorRequireAtLeastOneMobileUsageToBeSelectedForEachMobileLine', () => {
    it('should return true when has error REQUIRE_AT_LEAST_ONE_MOBILE_USAGE_TO_BE_SELECTED_FOR_EACH_MOBILE_LINE', () => {
      const expected = true;
      const state: ProductFinderState = {
        ...initialState,
        error: ProductFinderErrorEnum.REQUIRE_AT_LEAST_ONE_MOBILE_USAGE_TO_BE_SELECTED_FOR_EACH_MOBILE_LINE,
      };

      const result: boolean = selectHasErrorRequireAtLeastOneMobileUsageToBeSelectedForEachMobileLine.projector(state);

      expect(result).toEqual(expected);
    });

    it('should return false when does not have error REQUIRE_AT_LEAST_ONE_MOBILE_USAGE_TO_BE_SELECTED_FOR_EACH_MOBILE_LINE', () => {
      const expected = false;
      const state: ProductFinderState = {
        ...initialState,
        error: null,
      };

      const result: boolean = selectHasErrorRequireAtLeastOneMobileUsageToBeSelectedForEachMobileLine.projector(state);

      expect(result).toEqual(expected);
    });
  });

  describe('selectHasErrorRequireAtLeastOneTvChannelToBeSelectedError', () => {
    it('should return true when has error REQUIRE_AT_LEAST_ONE_TV_CHANNEL_TO_BE_SELECTED', () => {
      const expected = true;
      const state: ProductFinderState = {
        ...initialState,
        error: ProductFinderErrorEnum.REQUIRE_AT_LEAST_ONE_TV_CHANNEL_TO_BE_SELECTED,
      };

      const result: boolean = selectHasErrorRequireAtLeastOneTvChannelToBeSelectedError.projector(state);

      expect(result).toEqual(expected);
    });

    it('should return false when does not have error REQUIRE_AT_LEAST_ONE_TV_CHANNEL_TO_BE_SELECTED', () => {
      const expected = false;
      const state: ProductFinderState = {
        ...initialState,
        error: null,
      };

      const result: boolean = selectHasErrorRequireAtLeastOneTvChannelToBeSelectedError.projector(state);

      expect(result).toEqual(expected);
    });
  });

  describe('selectHasErrorRequireAtLeastOneTvExperienceToBeSelectedError', () => {
    it('should return true when has error REQUIRE_AT_LEAST_ONE_TV_EXPERIENCE_TO_BE_SELECTED', () => {
      const expected = true;
      const state: ProductFinderState = {
        ...initialState,
        error: ProductFinderErrorEnum.REQUIRE_AT_LEAST_ONE_TV_EXPERIENCE_TO_BE_SELECTED,
      };

      const result: boolean = selectHasErrorRequireAtLeastOneTvExperienceToBeSelectedError.projector(state);

      expect(result).toEqual(expected);
    });

    it('should return false when does not have error REQUIRE_AT_LEAST_ONE_TV_EXPERIENCE_TO_BE_SELECTED', () => {
      const expected = false;
      const state: ProductFinderState = {
        ...initialState,
        error: null,
      };

      const result: boolean = selectHasErrorRequireAtLeastOneTvExperienceToBeSelectedError.projector(state);

      expect(result).toEqual(expected);
    });
  });
});
