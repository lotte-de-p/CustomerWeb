import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { initRatesOverview, RatesOverview } from '@marketing/marketing/roaming-international/data-access';
import { TranslateModule } from '@ngx-translate/core';
import { RateCardCollectionComponent } from '../rate-card-collection/rate-card-collection.component';

@Component({
  standalone: true,
  templateUrl: './rates-overview.component.html',
  imports: [CommonModule, TranslateModule, RateCardCollectionComponent],
  selector: 'tg-marketing-roaming-international-ui-rates-overview',
})
export class RatesOverviewComponent {
  @Input() overview: RatesOverview = initRatesOverview;
}
