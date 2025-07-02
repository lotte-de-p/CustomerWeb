import {
  loadCountryListSuccess,
  selectedFromCountry,
  selectedAnotherDestinationCountry,
  loadRoamingRatesToBelgiumSuccess,
  loadRoamingRatesInsideSelectedCountrySuccess,
  loadRoamingRatesToAnotherDestinationCountrySuccess,
  getCountryErrorAction,
  getRatesErrorAction,
} from './roaming-international.actions';
import { reducer } from './roaming-international.reducers';

describe('Rates reducer', () => {
  const EUROPE_SPECIAL = 'Europe Special';
  const ZONE_EU = 'Zone EU';
  const initialState = {
    countryList: {
      countries: [],
    },
    roamingRates: {},
  };
  const country = {
    iso: 'CH',
    region: 'EU',
    country: 'Switzerland',
    roamingZone: EUROPE_SPECIAL,
    internationalZone: EUROPE_SPECIAL,
  };
  const ratesOverview = {
    rates: [],
    country: country,
    toBelgium: false,
    options: '',
  };

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {
        type: 'Unknown',
      };

      const state = reducer(initialState, action);

      expect(state).toBe(initialState);
    });
  });

  describe('loadCountryListSuccess action', () => {
    it('should return state with country list', () => {
      const countries = [
        {
          iso: 'CH',
          region: 'EU',
          country: 'Switzerland',
          roamingZone: EUROPE_SPECIAL,
          internationalZone: EUROPE_SPECIAL,
        },
      ];

      const action = loadCountryListSuccess({ countries: countries });

      const state = reducer(initialState, action);

      expect(state.countryList.countries.length).toEqual(1);
    });
  });

  describe('getCountryErrorAction action', () => {
    it('should return state with error', () => {
      const error = Error('Country API error');

      const action = getCountryErrorAction({ error: error });

      const state = reducer(initialState, action);

      expect(state.countryList.countries.length).toEqual(0);
    });
  });

  describe('selectedFromCountry action', () => {
    it('should return the from country name as Switzerland', () => {
      const action = selectedFromCountry({ country: country });

      const state = reducer(initialState, action);

      expect(state.countryList.fromCountry?.country).toEqual('Switzerland');
    });
  });

  describe('selectedAnotherDestinationCountry action', () => {
    it('should return the from country name as France', () => {
      const anotherCountry = {
        iso: 'FR',
        region: 'EU',
        country: 'France',
        roamingZone: ZONE_EU,
        internationalZone: ZONE_EU,
      };

      const action = selectedAnotherDestinationCountry({ country: anotherCountry });

      const state = reducer(initialState, action);

      expect(state.countryList.anotherDestinationCountry?.country).toEqual('France');
    });
  });

  describe('loadRoamingRatesToBelgiumSuccess action', () => {
    const ratesOverview = {
      rates: [],
      country: country,
      toBelgium: true,
      options: '',
    };

    it('should return rates with toBelgium true', () => {
      const action = loadRoamingRatesToBelgiumSuccess({ rates: ratesOverview });

      const state = reducer(initialState, action);

      expect(state.roamingRates.toBelgium?.toBelgium).toBeTruthy();
    });
  });

  describe('loadRoamingRatesInsideSelectedCountrySuccess action', () => {
    it('should return rates with toBelgium false', () => {
      const action = loadRoamingRatesInsideSelectedCountrySuccess({ rates: ratesOverview });

      const state = reducer(initialState, action);

      expect(state.roamingRates.toBelgium?.toBelgium).toBeFalsy();
    });
  });

  describe('loadRoamingRatesToAnotherDestinationCountrySuccess action', () => {
    it('should return rates with toBelgium false', () => {
      const action = loadRoamingRatesToAnotherDestinationCountrySuccess({ rates: ratesOverview });

      const state = reducer(initialState, action);

      expect(state.roamingRates.toBelgium?.toBelgium).toBeFalsy();
    });
  });

  describe('getRatesErrorAction action', () => {
    it('should return state with error', () => {
      const error = Error('Rates API error');

      const action = getRatesErrorAction({ error: error });

      const state = reducer(initialState, action);

      expect(state.roamingRates.toBelgium).toBeFalsy();
    });
  });
});
