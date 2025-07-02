import { Component, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { getCurrencySymbol, JsonPipe, NgClass } from '@angular/common';
import { CustomerProductHolding } from '../../../shared/models/customer-product-holding.model';
import { PhoneNumberPipe } from '../../../../../shared/common/pipes/phone-number.pipe';

@Component({
  selector: 'tg-fleet-manager-selected-line-list',
  standalone: true,
  templateUrl: './selected-line-list.component.html',
  imports: [TranslateModule, NgClass, JsonPipe, PhoneNumberPipe],
})
export class FleetManagerSelectedLineListComponent {
  readonly currencySymbol = getCurrencySymbol('EUR', 'wide');
  selectedLines = input.required<CustomerProductHolding[]>();

  showPreviouslyAddedOption(selectedLine: CustomerProductHolding): boolean {
    const optionFound = selectedLine.options.find((option) => {
      if (option.isOptionRemoved) {
        return !option.isOptionRemoved && option.category && option.status === 'ACTIVE';
      }
      return true;
    });
    return !!optionFound;
  }
}
