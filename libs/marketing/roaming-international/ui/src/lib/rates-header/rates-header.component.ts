import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  templateUrl: './rates-header.component.html',
  imports: [CommonModule, TranslateModule],
  selector: 'tg-marketing-roaming-international-ui-rates-header',
})
export class RatesHeaderComponent {
  @Input() rateType!: string;
}
