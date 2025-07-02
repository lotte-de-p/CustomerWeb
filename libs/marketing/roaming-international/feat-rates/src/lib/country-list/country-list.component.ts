import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Country,
  RoamingInternationalFacade,
  RoamingInternationalNgrxModule,
} from '@marketing/marketing/roaming-international/data-access';
import { AutocompleteComponent } from '@telenet/ng-lib-form';
import { TranslateModule } from '@ngx-translate/core';
import { combineLatest, Observable, of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { LetDirective } from '@ngrx/component';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { UrlService, LanguageService } from '@telenet/ng-lib-page';
import { DeviceDetectorService } from 'ngx-device-detector';

@UntilDestroy()
@Component({
  standalone: true,
  selector: 'tg-marketing-roaming-international-country-list',
  imports: [CommonModule, RoamingInternationalNgrxModule, AutocompleteComponent, TranslateModule, LetDirective],
  templateUrl: './country-list.component.html',
})
export class CountryListComponent implements OnInit {
  roamingInternationalFacade = inject(RoamingInternationalFacade);
  deviceDetectorService = inject(DeviceDetectorService);
  languageService = inject(LanguageService);
  urlService = inject(UrlService);

  @Input() rateType!: string;
  @Input() customerType!: string;
  @Input() selectedCountryType!: string;
  @Input() filteredCountries?: Country[];

  private readonly localeSpecificBelgiumName = {
    nl: 'België',
    en: 'Belgium',
    fr: 'Belgique',
  };
  BelgiumAsFromCountry: Country = {
    country: 'Belgium',
    iso: 'BE',
    region: 'EU',
    roamingZone: 'ZoneEU',
    internationalZone: 'ZoneEU',
  };

  searchKey = '';
  errorMessage = '';
  selectedCountry = {
    iso: '',
    region: '',
    country: '',
    roamingZone: '',
    internationalZone: '',
  };
  selectedFromCountry: Country;
  loadedCountryList$ = this.roamingInternationalFacade.countriesList$;
  selectedFromCountry$ = this.roamingInternationalFacade.selectedFromCountry$;

  selectedCountryFromQueryParam = '';

  selectedCountryFromQueryParams$: Observable<string> = of(this.urlService.getParameterByName('country') || '');

  selectedCountry$ = combineLatest([this.loadedCountryList$, this.selectedCountryFromQueryParams$]).pipe(
    map(
      ([countries, countryFromParams]) =>
        countries[countries.findIndex((country) => country?.iso === countryFromParams)]
    ),
    filter((country: Country) => {
      this.selectedCountryFromQueryParam = country?.country;
      return country !== undefined;
    }),
    tap(this.handleCalculate.bind(this))
  );
  filteredCountries$ = combineLatest([this.loadedCountryList$, this.selectedFromCountry$]).pipe(
    map(([countries, selectedFromCountry]) =>
      this.selectedCountryType || this.rateType === 'INTERNATIONAL'
        ? this.filterCountriesOnName(countries, selectedFromCountry)
        : countries
    )
  );

  ngOnInit(): void {
    this.roamingInternationalFacade.loadCountryList(this.searchKey, this.customerType);
    if (!this.selectedCountryType || (this.rateType === 'INTERNATIONAL' && this.selectedFromCountry))
      this.selectedCountry$.pipe(untilDestroyed(this)).subscribe();

    const language = this.languageService.getLanguage();
    this.BelgiumAsFromCountry.country = this.localeSpecificBelgiumName[language];
    if (this.rateType === 'INTERNATIONAL') this.handleCalculate(this.BelgiumAsFromCountry);
  }

  createLabel(item: Country): string {
    return item.country;
  }

  handleSuggestionsChange(selectedItem: Country): void {
    this.selectedCountry = selectedItem;
    if (this.deviceDetectorService.isMobile()) {
      this.handleCalculate(this.selectedCountry);
    }
  }

  validateUserInput(inputText: string) {
    this.toggleErrorMessage(inputText);
  }

  handleCalculateEvent(event?: Event): void {
    event?.preventDefault();
    if (this.selectedCountry?.iso === '') {
      this.errorMessage = 'ng.roaming-international-rates.country-list.empty-error-message';
    }
    if (this.errorMessage === '') {
      this.handleCalculate(this.selectedCountry);
    }
  }

  private handleCalculate(selectedCountry: Country): void {
    (this.selectedCountryType === 'secondCountry' || this.rateType === 'INTERNATIONAL') && this.selectedFromCountry
      ? this.roamingInternationalFacade.selectedAnotherDestinationCountry(
          this.selectedFromCountry,
          selectedCountry,
          this.customerType
        )
      : this.roamingInternationalFacade.selectedFromCountry(selectedCountry, this.customerType);
  }

  private toggleErrorMessage(inputText: string): void {
    if (inputText === '') {
      this.errorMessage = 'ng.roaming-international-rates.country-list.empty-error-message';
    } else if (!this.isSelectedCountry(inputText)) {
      this.errorMessage = 'ng.roaming-international-rates.country-list.wrong-text-error-message';
    } else {
      this.errorMessage = '';
    }
  }

  private isSelectedCountry(inputText: string) {
    return inputText === this.selectedCountry?.country;
  }

  private filterCountriesOnName(countries: Country[], selectedFromCountry?: Country): Country[] {
    if (selectedFromCountry) this.selectedFromCountry = selectedFromCountry;
    return countries.filter((country) => country.country !== selectedFromCountry?.country);
  }
}
