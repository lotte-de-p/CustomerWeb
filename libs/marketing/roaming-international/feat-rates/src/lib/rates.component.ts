import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from './country-list/country-list.component';
import { ConsultUpsellOptionsComponent } from './consult-upsell-options/consult-upsell-options.component';
import {
  Country,
  RatesOverview,
  RoamingInternationalFacade,
  RoamingInternationalNgrxModule,
} from '@marketing/marketing/roaming-international/data-access';
import {
  CountryHeaderComponent,
  RatesHeaderComponent,
  RatesOverviewComponent,
  SatelliteFerryInfoComponent,
  ZoneInfoComponent,
  RateCardCollectionComponent,
} from '@marketing/marketing/roaming-international/ui';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { LetDirective } from '@ngrx/component';

@Component({
  standalone: true,
  selector: 'tg-marketing-roaming-international-rates',
  imports: [
    CommonModule,
    CountryListComponent,
    ConsultUpsellOptionsComponent,
    RoamingInternationalNgrxModule,
    SatelliteFerryInfoComponent,
    CountryHeaderComponent,
    ZoneInfoComponent,
    RatesOverviewComponent,
    RateCardCollectionComponent,
    RatesHeaderComponent,
    TranslateModule,
    LetDirective,
  ],
  templateUrl: './rates.component.html',
})
export class RatesComponent {
  roamingInternationalFacade = inject(RoamingInternationalFacade);

  @Input() rateType!: string;
  @Input() customerType!: string;
  @Input() upsellOptionsLocation!: string;

  @Input() roamingRatesFromSelectedCountryToBelgium$: Observable<RatesOverview | undefined> =
    this.roamingInternationalFacade.roamingRatesFromSelectedCountryToBelgium$;
  @Input() roamingRatesInsideSelectedCountry$: Observable<RatesOverview | undefined> =
    this.roamingInternationalFacade.roamingRatesInsideSelectedCountry$;
  @Input() roamingRatesToAnotherDestinationCountry$: Observable<RatesOverview | undefined> =
    this.roamingInternationalFacade.roamingRatesToAnotherDestinationCountry$;
  @Input() selectedFromCountry$: Observable<Country | undefined> = this.roamingInternationalFacade.selectedFromCountry$;
  @Input() selectedAnotherCountry$: Observable<Country | undefined> =
    this.roamingInternationalFacade.selectedAnotherCountry$;
  @Input() selectedUpSellOptions$: Observable<string | undefined> =
    this.roamingInternationalFacade.upsellOptionsForCountry$;
}
