import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MemoizedSelector, Store } from '@ngrx/store';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { take, tap } from 'rxjs';
import { RoamingInternationalFacade } from './roaming-international-facade';
import { RatesState } from './+state/roaming-international.reducers';
import {
  loadCountryList,
  selectedFromCountry,
  selectedAnotherDestinationCountry,
  loadRoamingRatesInsideSelectedCountry,
  loadRoamingRatesToBelgium,
  loadRoamingRatesToAnotherDestinationCountry,
} from './+state/roaming-international.actions';
import { selectCountriesList } from './+state/roaming-international.selectors';
import { Country } from './entities/country-list.interface';

describe('RoamingInternationalFacade', () => {
  let mockStore$: MockStore<RatesState>;
  let mockCountryListSelector: MemoizedSelector<RatesState, Country[]>;
  let facade: RoamingInternationalFacade;

  const EUROPE_SPECIAL = 'Europe Special';
  const ZONE_EU = 'Zone EU';
  const customerType = 'Residential';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore(), RoamingInternationalFacade],
    });

    mockStore$ = TestBed.inject(Store) as MockStore<RatesState>;
    facade = TestBed.inject(RoamingInternationalFacade);
    mockCountryListSelector = mockStore$.overrideSelector(selectCountriesList, [
      {
        iso: 'CH',
        region: 'EU',
        country: 'Switzerland',
        roamingZone: EUROPE_SPECIAL,
        internationalZone: EUROPE_SPECIAL,
      } as Country,
    ]);
  });

  it('should show Zwitserland when the country is Zwitserland', fakeAsync(() => {
    const countries = [
      {
        iso: 'CH',
        region: 'EU',
        country: 'Switzerland',
        roamingZone: EUROPE_SPECIAL,
        internationalZone: EUROPE_SPECIAL,
      } as Country,
    ];
    mockCountryListSelector.setResult(countries);
    mockStore$.refreshState();
    facade.countriesList$
      .pipe(
        take(1),
        tap((val) => expect(val).toEqual(countries))
      )
      .subscribe();
    tick();
  }));

  it('should dispatch loadCountryList action to store', (done) => {
    const dispatchSpy = jest.spyOn(mockStore$, 'dispatch');
    facade.loadCountryList('', 'residential');
    expect(dispatchSpy).toHaveBeenCalledWith(loadCountryList({ searchKey: '', customerType: 'residential' }));
    done();
  });

  it('should dispatch selectedFromCountry action to store', (done) => {
    const country = {
      iso: 'CH',
      region: 'EU',
      country: 'Switzerland',
      roamingZone: EUROPE_SPECIAL,
      internationalZone: EUROPE_SPECIAL,
    };
    const dispatchSpy = jest.spyOn(mockStore$, 'dispatch');
    facade.selectedFromCountry(country, customerType);
    expect(dispatchSpy).toHaveBeenCalledWith(selectedFromCountry({ country: country }));
    done();
  });

  it('should dispatch selectedAnotherCountry action to store', (done) => {
    const country = {
      iso: 'CH',
      region: 'EU',
      country: 'Switzerland',
      roamingZone: EUROPE_SPECIAL,
      internationalZone: EUROPE_SPECIAL,
    };
    const fromCountry = {
      iso: 'FR',
      region: 'EU',
      country: 'France',
      roamingZone: ZONE_EU,
      internationalZone: ZONE_EU,
    };
    const dispatchSpy = jest.spyOn(mockStore$, 'dispatch');
    facade.selectedAnotherDestinationCountry(fromCountry, country, customerType);
    expect(dispatchSpy).toHaveBeenCalledWith(selectedAnotherDestinationCountry({ country: country }));
    done();
  });

  it('when loadRoamingRatesForSelectedCountry should dispatch loadRoamingRatesToBelgium and loadRoamingRatesInsideSelectedCountry action to store', (done) => {
    const country = {
      iso: 'CH',
      region: 'EU',
      country: 'Switzerland',
      roamingZone: EUROPE_SPECIAL,
      internationalZone: EUROPE_SPECIAL,
    };
    const dispatchSpy = jest.spyOn(mockStore$, 'dispatch');
    facade.loadRoamingRatesForSelectedCountry(country, customerType);
    expect(dispatchSpy).toHaveBeenCalledWith(
      loadRoamingRatesToBelgium({ country: country, toBelgium: true, customerType: customerType })
    );
    expect(dispatchSpy).toHaveBeenCalledWith(
      loadRoamingRatesInsideSelectedCountry({ country: country, toBelgium: false, customerType: customerType })
    );
    done();
  });

  it('when loadRoamingRatesToAnotherDestinationCountry should dispatch loadRoamingRatesToAnotherDestinationCountry action to store', (done) => {
    const country = {
      iso: 'CH',
      region: 'EU',
      country: 'Switzerland',
      roamingZone: EUROPE_SPECIAL,
      internationalZone: EUROPE_SPECIAL,
    };
    const fromCountry = {
      iso: 'FR',
      region: 'EU',
      country: 'France',
      roamingZone: ZONE_EU,
      internationalZone: ZONE_EU,
    };
    const dispatchSpy = jest.spyOn(mockStore$, 'dispatch');
    facade.loadRoamingRatesToAnotherCountry(fromCountry, country, customerType);
    expect(dispatchSpy).toHaveBeenCalledWith(
      loadRoamingRatesToAnotherDestinationCountry({
        fromCountry: fromCountry,
        toCountry: country,
        customerType: customerType,
      })
    );
    done();
  });
});
