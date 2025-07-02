import { inject, Injectable } from '@angular/core';
import {
  Country,
  loadRoamingRatesInsideSelectedCountry,
  loadRoamingRatesToAnotherDestinationCountry,
  loadRoamingRatesToBelgium,
  RatesSlice,
  selectedFromCountry,
  selectedAnotherDestinationCountry,
  selectRoamingRatesInsideSelectedCountry,
  selectRoamingRatesToAnotherDestinationCountry,
  selectRoamingRatesToBelgium,
  selectUpSellOptionsForCountry,
} from '.';
import { Store } from '@ngrx/store';
import {
  selectCountriesList,
  selectFromCountry,
  selectAnotherDestinationCountry,
} from './+state/roaming-international.selectors';
import { loadCountryList } from './+state/roaming-international.actions';

@Injectable({ providedIn: 'root' })
export class RoamingInternationalFacade {
  readonly store: Store<RatesSlice> = inject(Store<RatesSlice>);
  countriesList$ = this.store.select(selectCountriesList);
  selectedFromCountry$ = this.store.select(selectFromCountry);
  selectedAnotherCountry$ = this.store.select(selectAnotherDestinationCountry);
  roamingRatesFromSelectedCountryToBelgium$ = this.store.select(selectRoamingRatesToBelgium);
  roamingRatesInsideSelectedCountry$ = this.store.select(selectRoamingRatesInsideSelectedCountry);
  roamingRatesToAnotherDestinationCountry$ = this.store.select(selectRoamingRatesToAnotherDestinationCountry);
  upsellOptionsForCountry$ = this.store.select(selectUpSellOptionsForCountry);

  loadCountryList(searchKey: string, customerType: string): void {
    this.store.dispatch(
      loadCountryList({
        searchKey,
        customerType,
      })
    );
  }

  selectedFromCountry(country: Country, customerType: string): void {
    this.store.dispatch(
      selectedFromCountry({
        country,
      })
    );
    this.loadRoamingRatesForSelectedCountry(country, customerType);
  }

  selectedAnotherDestinationCountry(fromCountry: Country, country: Country, customerType: string): void {
    this.store.dispatch(
      selectedAnotherDestinationCountry({
        country,
      })
    );
    this.loadRoamingRatesToAnotherCountry(fromCountry, country, customerType);
  }

  loadRoamingRatesForSelectedCountry(country: Country, customerType: string): void {
    this.store.dispatch(
      loadRoamingRatesToBelgium({
        country: country,
        toBelgium: true,
        customerType: customerType,
      })
    );
    this.store.dispatch(
      loadRoamingRatesInsideSelectedCountry({
        country: country,
        toBelgium: false,
        customerType: customerType,
      })
    );
  }

  loadRoamingRatesToAnotherCountry(fromCountry: Country, toCountry: Country, customerType: string): void {
    this.store.dispatch(
      loadRoamingRatesToAnotherDestinationCountry({
        fromCountry: fromCountry,
        toCountry: toCountry,
        customerType: customerType,
      })
    );
  }
}
