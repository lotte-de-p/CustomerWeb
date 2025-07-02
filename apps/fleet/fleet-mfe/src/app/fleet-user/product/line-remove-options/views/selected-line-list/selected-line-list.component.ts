import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { getCurrencySymbol, JsonPipe, NgClass } from '@angular/common';

import { Product } from '../../../../shared/models/product.model';
import { PhoneNumberPipe } from '../../../../../shared/common/pipes/phone-number.pipe';

@Component({
  selector: 'tg-fleet-user-selected-line-list',
  standalone: true,
  templateUrl: './selected-line-list.component.html',
  styleUrls: ['../../fleet-user-line-remove-options.component.css'],
  imports: [TranslateModule, NgClass, JsonPipe, PhoneNumberPipe],
})
export class FleetUserSelectedLineListComponent {
  readonly currencySymbol = getCurrencySymbol('EUR', 'wide');
  @Input() selectedLine: Product;

  showPreviouslyAddedOption(selectedLine: Product): boolean {
    const optionFound = selectedLine.options.find((option) => {
      return !option.isOptionRemoved && option.category && option.status === 'ACTIVE';
    });
    return !!optionFound;
  }
}
