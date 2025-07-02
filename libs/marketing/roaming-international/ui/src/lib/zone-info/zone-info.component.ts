import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Country, initCountry } from '@marketing/marketing/roaming-international/data-access';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  templateUrl: './zone-info.component.html',
  imports: [CommonModule, TranslateModule],
  selector: 'tg-marketing-roaming-international-ui-zone-info',
})
export class ZoneInfoComponent {
  @Input() country: Country = initCountry;

  shouldDisplay() {
    return this.country.roamingZone === 'ZoneEU';
  }
}
