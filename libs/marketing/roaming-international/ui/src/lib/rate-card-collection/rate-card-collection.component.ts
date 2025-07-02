import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Rate } from '@marketing/marketing/roaming-international/data-access';
import { RateCardComponent } from '../rate-card/rate-card.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  templateUrl: './rate-card-collection.component.html',
  imports: [CommonModule, RateCardComponent, TranslateModule],
  selector: 'tg-marketing-roaming-international-ui-rate-card-collection',
})
export class RateCardCollectionComponent {
  @Input() ratesOverview: Rate[] = [];
}
