import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { CountryListComponent } from './country-list.component';
import { EffectsModule } from '@ngrx/effects';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MemoizedSelector, Store, StoreModule } from '@ngrx/store';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';
import {
  Country,
  RatesState,
  RoamingInternationalFacade,
  selectCountriesList,
  selectFromCountry,
} from '@marketing/marketing/roaming-international/data-access';
import { UrlService, LanguageService, LanguageEnum } from '@telenet/ng-lib-page';
import { take, tap } from 'rxjs';
import { jest } from '@jest/globals';

describe('CountryListComponent', () => {
  let component: CountryListComponent;
  let fixture: ComponentFixture<CountryListComponent>;
  let urlService: UrlService;
  let mockLanguageService: LanguageService;

  const EUROPE_SPECIAL = 'Europe Special';
  const mockWindow = {
    location: {
      href: 'www.test.be?country=CH',
      search: '',
      hash: '',
      origin: '',
      pathname: '',
      assign: new Function(),
    },
  };
  const fromCountry: Country = {
    iso: 'CH',
    region: 'EU',
    country: 'Switzerland',
    roamingZone: EUROPE_SPECIAL,
    internationalZone: EUROPE_SPECIAL,
  };
  const testBebBase = {
    imports: [
      CountryListComponent,
      EffectsModule.forRoot([]),
      StoreModule.forRoot({}),
      TranslateModule.forRoot(),
      HttpClientTestingModule,
    ],
    providers: [
      provideMockStore({}),
      RoamingInternationalFacade,
      { provide: 'Window', useValue: mockWindow },
      UrlService,
      LanguageService,
    ],
  };

  describe('CountryListComponent methods', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule(testBebBase).compileComponents();

      fixture = TestBed.createComponent(CountryListComponent);
      component = fixture.componentInstance;

      mockLanguageService = TestBed.inject(LanguageService);
      jest.spyOn(mockLanguageService, 'getLanguage').mockReturnValue(LanguageEnum.NL);

      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should call roamingInternationalFacade.loadCountryList when ngOnInit', () => {
      const loadCountryList = jest.spyOn(component.roamingInternationalFacade, 'loadCountryList');
      component.ngOnInit();
      expect(loadCountryList).toBeCalledTimes(1);
    });

    it('should not call selectedAnotherDestinationCountry method when ngOnInit with rateType is INTERNATIONAL', () => {
      component.rateType = 'INTERNATIONAL';

      const selectCountry = jest.spyOn(component.roamingInternationalFacade, 'selectedAnotherDestinationCountry');
      component.ngOnInit();
      expect(selectCountry).toBeCalledTimes(0);
    });

    it('should call selectedAnotherDestinationCountry method when ngOnInit with rateType is INTERNATIONAL', () => {
      component.selectedCountryType = 'secondCountry';
      component.rateType = 'INTERNATIONAL';
      component.selectedFromCountry = fromCountry;

      const selectCountry = jest.spyOn(component.roamingInternationalFacade, 'selectedAnotherDestinationCountry');
      component.ngOnInit();
      expect(selectCountry).toBeCalledTimes(1);
    });

    it('should set selectedCountry when handleSelectionChange', () => {
      component.selectedCountry = fromCountry;
      component.handleSuggestionsChange(fromCountry);
      expect(component.selectedCountry).toBe(fromCountry);
    });

    it('should set showWrongTextError true when inputText & country is not matching', () => {
      component.selectedCountry.country = 'Germany';
      component.validateUserInput('Germa');
      expect(component.errorMessage).toBe('ng.roaming-international-rates.country-list.wrong-text-error-message');
    });

    it('should set errors false when inputText & country is matching', () => {
      component.selectedCountry.country = 'Germany';
      component.validateUserInput('Germany');
      expect(component.errorMessage).toBe('');
    });

    it('should set showEmptyError true when inputText is empty', () => {
      component.validateUserInput('');
      expect(component.errorMessage).toBe('ng.roaming-international-rates.country-list.empty-error-message');
    });

    it('should not call handleCalculate when showEmptyError is true', () => {
      component.rateType = 'ROAMING';
      component.errorMessage = 'ng.roaming-international-rates.country-list.wrong-text-error-message';
      const selectedFromCountry = jest.spyOn(component.roamingInternationalFacade, 'selectedFromCountry');
      const event = new MouseEvent('click');
      component.handleCalculateEvent(event);
      expect(selectedFromCountry).toBeCalledTimes(0);
    });

    it('should not call handleCalculate when selectedCountry.iso is empty', () => {
      component.rateType = 'ROAMING';
      component.selectedCountry.iso = '';
      const selectedFromCountry = jest.spyOn(component.roamingInternationalFacade, 'selectedFromCountry');
      const event = new MouseEvent('click');
      component.handleCalculateEvent(event);
      expect(selectedFromCountry).toBeCalledTimes(0);
      expect(component.errorMessage).toBe('ng.roaming-international-rates.country-list.empty-error-message');
    });

    it('should call roamingInternationalFacade.selectedFromCountry when handleCalculate for first component', () => {
      component.rateType = 'ROAMING';
      component.selectedCountry.iso = 'BE';
      const selectedFromCountry = jest.spyOn(component.roamingInternationalFacade, 'selectedFromCountry');
      const event = new MouseEvent('click');
      component.handleCalculateEvent(event);
      expect(selectedFromCountry).toBeCalledTimes(1);
    });

    it('should not call roamingInternationalFacade.selectedAnotherCountry when handleCalculate for another country', () => {
      component.selectedCountryType = 'secondCountry';
      component.selectedCountry.iso = 'BE';
      const selectedAnotherCountry = jest.spyOn(component.roamingInternationalFacade, 'selectedFromCountry');
      const selectedAnotherDestinationCountry = jest.spyOn(
        component.roamingInternationalFacade,
        'selectedAnotherDestinationCountry'
      );
      const event = new MouseEvent('click');
      component.handleCalculateEvent(event);
      expect(selectedAnotherCountry).toBeCalledTimes(1);
      expect(selectedAnotherDestinationCountry).toBeCalledTimes(0);
    });

    it('should call roamingInternationalFacade.selectedAnotherCountry when handleCalculate for another country', () => {
      component.selectedCountryType = 'secondCountry';
      component.selectedCountry.iso = 'BE';
      component.selectedFromCountry = fromCountry;
      const selectedAnotherCountry = jest.spyOn(
        component.roamingInternationalFacade,
        'selectedAnotherDestinationCountry'
      );
      const event = new MouseEvent('click');
      component.handleCalculateEvent(event);
      expect(selectedAnotherCountry).toBeCalledTimes(1);
    });

    it('should not call roamingInternationalFacade.selectedAnotherCountry when handleCalculate called without Event', () => {
      component.selectedCountryType = 'secondCountry';
      component.selectedFromCountry = fromCountry;
      component.selectedCountry.iso = 'BE';
      const selectedAnotherCountry = jest.spyOn(
        component.roamingInternationalFacade,
        'selectedAnotherDestinationCountry'
      );
      component.handleCalculateEvent();
      expect(selectedAnotherCountry).toBeCalledTimes(1);
    });

    it('should call roamingInternationalFacade.selectedAnotherCountry when handleCalculate for INTERNATIONAL RateType', () => {
      component.selectedCountryType = 'country';
      component.rateType = 'INTERNATIONAL';
      component.selectedCountry.iso = 'BE';
      component.selectedFromCountry = fromCountry;
      const selectedAnotherDestinationCountry = jest.spyOn(
        component.roamingInternationalFacade,
        'selectedAnotherDestinationCountry'
      );
      const event = new MouseEvent('click');
      component.handleCalculateEvent(event);
      expect(selectedAnotherDestinationCountry).toBeCalledTimes(1);
    });

    it('should not call roamingInternationalFacade.selectedAnotherCountry when handleCalculate for INTERNATIONAL RateType', () => {
      component.rateType = 'INTERNATIONAL';
      const selectedAnotherDestinationCountry = jest.spyOn(
        component.roamingInternationalFacade,
        'selectedAnotherDestinationCountry'
      );
      const event = new MouseEvent('click');
      component.handleCalculateEvent(event);
      expect(selectedAnotherDestinationCountry).toBeCalledTimes(0);
    });

    it('should return label from country object', () => {
      const label = component.createLabel(fromCountry);
      expect(label).toEqual('Switzerland');
    });
  });

  describe('CountryListComponent Observables', function () {
    const mockWindowWithQueryParam = {
      location: {
        href: 'www.test.be?country=CH',
        search: '?country=CH',
        hash: '',
        origin: '',
        pathname: '',
        assign: new Function(),
      },
    };
    const countries = [fromCountry];

    let mockStore$: MockStore<RatesState>;
    let mockCountryListSelector: MemoizedSelector<RatesState, Country[]>;
    let mockSelectedCountrySelector: MemoizedSelector<RatesState, Country | undefined>;
    let facade: RoamingInternationalFacade;

    beforeEach(fakeAsync(() => {
      TestBed.configureTestingModule(testBebBase);
      TestBed.overrideProvider('Window', { useValue: mockWindowWithQueryParam });
      TestBed.compileComponents();

      fixture = TestBed.createComponent(CountryListComponent);
      urlService = TestBed.inject(UrlService);
      mockLanguageService = TestBed.inject(LanguageService);

      component = fixture.componentInstance;

      jest.spyOn(urlService, 'getParameterByName').mockImplementation((name: string) => {
        if (name === 'country') {
          return 'CH';
        } else return null;
      });
      jest.spyOn(mockLanguageService, 'getLanguage').mockReturnValue(LanguageEnum.NL);

      mockStore$ = TestBed.inject(Store) as MockStore<RatesState>;
      facade = TestBed.inject(RoamingInternationalFacade);
      mockCountryListSelector = mockStore$.overrideSelector(selectCountriesList, [fromCountry]);
      mockSelectedCountrySelector = mockStore$.overrideSelector(selectFromCountry, fromCountry);
      fixture.detectChanges();

      mockCountryListSelector.setResult(countries);
      mockStore$.refreshState();
      facade.countriesList$
        .pipe(
          take(1),
          tap((val) => expect(val).toEqual(countries))
        )
        .subscribe();
      tick();

      mockSelectedCountrySelector.setResult(fromCountry);
      mockStore$.refreshState();
      facade.selectedFromCountry$
        .pipe(
          take(1),
          tap((val) => expect(val).toEqual(fromCountry))
        )
        .subscribe();
      tick();
    }));

    it('should be return queryParams', fakeAsync(() => {
      component.selectedCountryFromQueryParams$
        .pipe(
          take(1),
          tap((value) => expect(value).toEqual('CH'))
        )
        .subscribe();
      tick();
    }));

    it('should be return selectedCountry object based on queryParam', fakeAsync(() => {
      component.selectedCountry$
        .pipe(
          take(1),
          tap((value) => expect(value).toEqual(fromCountry))
        )
        .subscribe();
      tick();
    }));

    it('should be return empty object based on queryParam', fakeAsync(() => {
      component.selectedCountry$
        .pipe(
          take(1),
          tap((value) => expect(value).toEqual(fromCountry))
        )
        .subscribe();
      tick();
    }));

    it('should be return filteredCountryList as unchanged countryList', fakeAsync(() => {
      component.filteredCountries$
        .pipe(
          take(1),
          tap((value) => expect(value).toEqual(countries))
        )
        .subscribe();
      tick();
    }));

    it('should be return filteredCountryList based on selectedCountry', fakeAsync(() => {
      component.selectedCountryType = 'secondCountry';

      component.filteredCountries$
        .pipe(
          take(1),
          tap((value) => expect(value).toEqual([]))
        )
        .subscribe();
      tick();
    }));

    it('should be return filteredCountryList as unchanged if SelectedCountry is undefined', fakeAsync(() => {
      component.selectedCountryType = 'secondCountry';
      mockSelectedCountrySelector.setResult();
      mockStore$.refreshState();

      component.filteredCountries$
        .pipe(
          take(1),
          tap((value) => expect(value).toEqual(countries))
        )
        .subscribe();
      tick();
    }));

    it('should be return filteredCountryList based on rateType', fakeAsync(() => {
      component.rateType = 'INTERNATIONAL';

      component.filteredCountries$
        .pipe(
          take(1),
          tap((value) => expect(value).toEqual([]))
        )
        .subscribe();
      tick();
    }));
  });
});
