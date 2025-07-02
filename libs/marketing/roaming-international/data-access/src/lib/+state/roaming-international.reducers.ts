import { createFeature, createReducer, on } from '@ngrx/store';
import { Country } from '../entities/country-list.interface';
import {
  loadCountryListSuccess,
  loadRoamingRatesInsideSelectedCountrySuccess,
  loadRoamingRatesToAnotherDestinationCountrySuccess,
  loadRoamingRatesToBelgiumSuccess,
  selectedFromCountry,
  selectedAnotherDestinationCountry,
  getCountryErrorAction,
  getRatesErrorAction,
} from './roaming-international.actions';
import { RatesOverview } from '../entities/rate.interface';

export const RATES_FEATURE_KEY = 'rates';

export interface RatesSlice {
  [RATES_FEATURE_KEY]: RatesState;
}

export interface RatesState {
  countryList: {
    countries: Country[];
    fromCountry?: Country;
    anotherDestinationCountry?: Country;
  };
  roamingRates: {
    toBelgium?: RatesOverview;
    insideCountry?: RatesOverview;
    toAnotherDestinationCountry?: RatesOverview;
    upsellOptions?: string;
  };
}

export const country = {
  iso: '',
  region: '',
  name: '',
  roamingZone: '',
  internationalZone: '',
};

export const initialState: RatesState = {
  countryList: {
    countries: [],
  },
  roamingRates: {},
};

export const reducer = createReducer(
  initialState,
  on(loadCountryListSuccess, (state, action) => ({
    ...state,
    countryList: { ...state.countryList, countries: action.countries },
  })),
  on(selectedFromCountry, (state, action) => ({
    ...initialState,
    countryList: { ...state.countryList, fromCountry: action.country },
  })),
  on(selectedAnotherDestinationCountry, (state, action) => ({
    ...state,
    countryList: { ...state.countryList, anotherDestinationCountry: action.country },
  })),
  on(loadRoamingRatesToBelgiumSuccess, (state, action) => ({
    ...state,
    roamingRates: { ...state.roamingRates, toBelgium: action.rates },
  })),
  on(loadRoamingRatesInsideSelectedCountrySuccess, (state, action) => ({
    ...state,
    roamingRates: { ...state.roamingRates, insideCountry: action.rates, upsellOptions: action.rates.options },
  })),
  on(loadRoamingRatesToAnotherDestinationCountrySuccess, (state, action) => ({
    ...state,
    roamingRates: {
      ...state.roamingRates,
      toAnotherDestinationCountry: action.rates,
      upsellOptions: action.rates.options,
    },
  })),
  on(getCountryErrorAction, (state, action) => ({
    ...state,
    error: action.error,
  })),
  on(getRatesErrorAction, (state, action) => ({
    ...state,
    error: action.error,
  }))
);
export const ratesFeature = createFeature({
  name: RATES_FEATURE_KEY,
  reducer: reducer,
});
