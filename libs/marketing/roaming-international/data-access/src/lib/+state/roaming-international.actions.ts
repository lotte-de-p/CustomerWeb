import { createAction, props } from '@ngrx/store';
import { Country } from '../entities/country-list.interface';
import { RatesOverview } from '../entities/rate.interface';

export const loadCountryList = createAction(
  '[RoamingInternational] loadCountryList',
  props<{ searchKey: string; customerType: string }>()
);

export const loadCountryListSuccess = createAction(
  '[RoamingInternational] loadCountryListSuccess',
  props<{ countries: Country[] }>()
);

export const selectedFromCountry = createAction(
  '[RoamingInternational] selectedFromCountry',
  props<{ country: Country }>()
);

export const selectedAnotherDestinationCountry = createAction(
  '[RoamingInternational] selectedAnotherDestinationCountry',
  props<{ country: Country }>()
);

export const loadRoamingRatesToBelgium = createAction(
  '[RoamingInternational] loadRoamingRatesToBelgium',
  props<{ country: Country; toBelgium: boolean; customerType: string }>()
);

export const loadRoamingRatesToBelgiumSuccess = createAction(
  '[RoamingInternational] loadRoamingRatesToBelgiumSuccess',
  props<{ rates: RatesOverview }>()
);

export const loadRoamingRatesInsideSelectedCountry = createAction(
  '[RoamingInternational] loadRoamingRatesInsideSelectedCountry',
  props<{ country: Country; toBelgium: boolean; customerType: string }>()
);

export const loadRoamingRatesInsideSelectedCountrySuccess = createAction(
  '[RoamingInternational] loadRoamingRatesInsideSelectedCountrySuccess',
  props<{ rates: RatesOverview }>()
);

export const loadRoamingRatesToAnotherDestinationCountry = createAction(
  '[RoamingInternational] loadRoamingRatesToAnotherDestinationCountry',
  props<{ fromCountry: Country; toCountry: Country; customerType: string }>()
);

export const loadRoamingRatesToAnotherDestinationCountrySuccess = createAction(
  '[RoamingInternational] loadRoamingRatesToAnotherDestinationCountrySuccess',
  props<{ rates: RatesOverview }>()
);

export const getCountryErrorAction = createAction(
  '[RoamingInternational] get countries Error',
  props<{ error: Error }>()
);

export const getRatesErrorAction = createAction('[RoamingInternational] get rates Error', props<{ error: Error }>());
