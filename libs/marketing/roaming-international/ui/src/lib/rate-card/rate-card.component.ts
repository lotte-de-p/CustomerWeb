import { Component, Input } from '@angular/core';
import { initRate, Rate } from '@marketing/marketing/roaming-international/data-access';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  templateUrl: 'rate-card.component.html',
  imports: [CommonModule, TranslateModule],
  selector: 'tg-marketing-roaming-international-ui-rate-card',
})
export class RateCardComponent {
  @Input() rate: Rate = initRate;
}
