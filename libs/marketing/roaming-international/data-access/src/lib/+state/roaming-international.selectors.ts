import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RATES_FEATURE_KEY, RatesState } from './roaming-international.reducers';

export const selectRates = createFeatureSelector<RatesState>(RATES_FEATURE_KEY);

export const selectCountriesList = createSelector(selectRates, (ratesState) => ratesState.countryList.countries);
export const selectFromCountry = createSelector(selectRates, (ratesState) => ratesState.countryList.fromCountry);
export const selectAnotherDestinationCountry = createSelector(
  selectRates,
  (ratesState) => ratesState.countryList.anotherDestinationCountry
);

export const selectRoamingRatesToBelgium = createSelector(
  selectRates,
  (ratesState) => ratesState.roamingRates.toBelgium
);
export const selectRoamingRatesInsideSelectedCountry = createSelector(
  selectRates,
  (ratesState) => ratesState.roamingRates.insideCountry
);
export const selectRoamingRatesToAnotherDestinationCountry = createSelector(
  selectRates,
  (ratesState) => ratesState.roamingRates.toAnotherDestinationCountry
);
export const selectUpSellOptionsForCountry = createSelector(
  selectRates,
  (ratesState) => ratesState.roamingRates.upsellOptions
);
