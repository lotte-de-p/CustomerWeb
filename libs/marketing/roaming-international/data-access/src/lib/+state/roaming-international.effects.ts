import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CountryListService } from '../infrastructure/country-list.service';
import { RatesService } from '../infrastructure/rates.service';
import {
  loadCountryList,
  loadCountryListSuccess,
  loadRoamingRatesInsideSelectedCountry,
  loadRoamingRatesToAnotherDestinationCountry,
  loadRoamingRatesInsideSelectedCountrySuccess,
  loadRoamingRatesToAnotherDestinationCountrySuccess,
  loadRoamingRatesToBelgium,
  loadRoamingRatesToBelgiumSuccess,
  getRatesErrorAction,
  getCountryErrorAction,
} from './roaming-international.actions';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoamingInternationalEffects {
  readonly actions$ = inject(Actions);
  readonly countryListService = inject(CountryListService);
  readonly ratesService = inject(RatesService);

  loadCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCountryList),
      switchMap((a) =>
        this.countryListService.load(a.searchKey, a.customerType).pipe(
          map((countries) => loadCountryListSuccess({ countries })),
          catchError((error) => of(getCountryErrorAction({ error: error })))
        )
      )
    )
  );

  loadRoamingRatesToBelgium = createEffect(() =>
    this.actions$.pipe(
      ofType(loadRoamingRatesToBelgium),
      switchMap((args) =>
        this.ratesService.getRoamingRates(args.country, args.customerType).pipe(
          map((ratesData) => {
            return this.ratesService.convertToOverview(args.country, args.toBelgium, ratesData[0]);
          })
        )
      ),
      map((rates) => loadRoamingRatesToBelgiumSuccess({ rates })),
      catchError((error) => of(getRatesErrorAction({ error: error })))
    )
  );

  loadRoamingRatesInsideSelectedCountry = createEffect(() =>
    this.actions$.pipe(
      ofType(loadRoamingRatesInsideSelectedCountry),
      switchMap((args) =>
        this.ratesService.getRoamingRatesForSameCountry(args.country, args.customerType).pipe(
          map((rates) => {
            return this.ratesService.convertToOverview(args.country, args.toBelgium, rates[0]);
          })
        )
      ),
      map((rates) => loadRoamingRatesInsideSelectedCountrySuccess({ rates })),
      catchError((error) => of(getRatesErrorAction({ error: error })))
    )
  );

  loadRoamingRatesToAnotherDestinationCountry = createEffect(() =>
    this.actions$.pipe(
      ofType(loadRoamingRatesToAnotherDestinationCountry),
      switchMap((args) =>
        this.ratesService.getRoamingRates(args.fromCountry, args.customerType, args.toCountry).pipe(
          map((rates) => {
            return this.ratesService.convertToOverview(args.fromCountry, false, rates[0], !!args.toCountry);
          })
        )
      ),
      map((rates) => loadRoamingRatesToAnotherDestinationCountrySuccess({ rates })),
      catchError((error) => of(getRatesErrorAction({ error: error })))
    )
  );
}
