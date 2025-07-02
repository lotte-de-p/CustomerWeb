import { CountryListService } from '../infrastructure/country-list.service';
import { RatesService } from '../infrastructure/rates.service';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Actions } from '@ngrx/effects';
import { of, throwError } from 'rxjs';
import { RoamingInternationalEffects } from './roaming-international.effects';
import { HttpClient, HttpHandler } from '@angular/common/http';

const MockData = require('../entities/rates.data.mock');

describe('RoamingInternationalEffects', () => {
  let countryListService: CountryListService;
  let ratesService: RatesService;
  let actions$: Actions;
  let effects: RoamingInternationalEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler,
        { provide: 'Window', useValue: {} },
        RoamingInternationalEffects,
        provideMockActions(() => actions$),
      ],
    });

    countryListService = TestBed.inject<CountryListService>(CountryListService);
    ratesService = TestBed.inject<RatesService>(RatesService);
    effects = TestBed.inject<RoamingInternationalEffects>(RoamingInternationalEffects);
  });

  describe('loadCountries$ success', () => {
    it('should trigger loadCountryListSuccess', (done) => {
      countryListService.load = jest.fn().mockReturnValue(of([]));
      actions$ = of({ type: '[RoamingInternational] loadCountryList' });
      effects.loadCountries$.subscribe((action) => {
        expect(action.type).toBe('[RoamingInternational] loadCountryListSuccess');
        done();
      });
    });
  });

  describe('loadCountries$ fails', () => {
    it('should trigger get countries Error', (done) => {
      countryListService.load = jest.fn().mockReturnValue(throwError(() => Error));
      actions$ = of({ type: '[RoamingInternational] loadCountryList' });
      effects.loadCountries$.subscribe((action) => {
        expect(action.type).toBe('[RoamingInternational] get countries Error');
        done();
      });
    });
  });

  describe('loadRoamingRatesToBelgium success', () => {
    it('should trigger loadRoamingRatesToBelgiumSuccess', (done) => {
      ratesService.getRoamingRates = jest.fn().mockReturnValue(of([]));
      ratesService.convertToOverview = jest.fn().mockReturnValue(of(MockData.roamingRatesToBelgium));
      actions$ = of({ type: '[RoamingInternational] loadRoamingRatesToBelgium' });
      effects.loadRoamingRatesToBelgium.subscribe((action) => {
        expect(action.type).toBe('[RoamingInternational] loadRoamingRatesToBelgiumSuccess');
        done();
      });
    });
  });

  describe('loadRoamingRatesToBelgium fails', () => {
    it('should trigger get rates Error', (done) => {
      ratesService.getRoamingRates = jest.fn().mockReturnValue(throwError(() => Error));
      ratesService.convertToOverview = jest.fn().mockReturnValue(of(MockData.roamingRatesToBelgium));
      actions$ = of({ type: '[RoamingInternational] loadRoamingRatesToBelgium' });
      effects.loadRoamingRatesToBelgium.subscribe((action) => {
        expect(action.type).toBe('[RoamingInternational] get rates Error');
        done();
      });
    });
  });

  describe('loadRoamingRatesInsideSelectedCountry success', () => {
    it('should trigger loadRoamingRatesInsideSelectedCountrySuccess', (done) => {
      ratesService.getRoamingRatesForSameCountry = jest.fn().mockReturnValue(of([]));
      ratesService.convertToOverview = jest.fn().mockReturnValue(of(MockData.roamingRatesToBelgium));
      actions$ = of({ type: '[RoamingInternational] loadRoamingRatesInsideSelectedCountry' });
      effects.loadRoamingRatesInsideSelectedCountry.subscribe((action) => {
        expect(action.type).toBe('[RoamingInternational] loadRoamingRatesInsideSelectedCountrySuccess');
        done();
      });
    });
  });

  describe('loadRoamingRatesToAnotherDestinationCountry success', () => {
    it('should trigger loadRoamingRatesToAnotherDestinationCountrySuccess', (done) => {
      ratesService.getRoamingRates = jest.fn().mockReturnValue(of([]));
      ratesService.convertToOverview = jest.fn().mockReturnValue(of(MockData.roamingRatesToBelgium));
      actions$ = of({ type: '[RoamingInternational] loadRoamingRatesToAnotherDestinationCountry' });
      effects.loadRoamingRatesToAnotherDestinationCountry.subscribe((action) => {
        expect(action.type).toBe('[RoamingInternational] loadRoamingRatesToAnotherDestinationCountrySuccess');
        done();
      });
    });
  });
});
