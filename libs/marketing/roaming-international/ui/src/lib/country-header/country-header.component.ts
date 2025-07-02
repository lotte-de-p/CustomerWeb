import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { initCountry } from '@marketing/marketing/roaming-international/data-access';

@Component({
  standalone: true,
  templateUrl: './country-header.component.html',
  imports: [CommonModule, TranslateModule],
  selector: 'tg-marketing-roaming-international-ui-country-header',
})
export class CountryHeaderComponent {
  @Input() country = initCountry;
}
