import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule, getCurrencySymbol, NgClass } from '@angular/common';

import { LineAddOptionsConstants } from '../../../shared/constants/line-add-options.constants';
import { Product } from '../../../../shared/models/product.model';
import { PhoneNumberPipe } from '../../../../../shared/common/pipes/phone-number.pipe';

@Component({
  selector: 'tg-fleet-user-line-item',
  standalone: true,
  templateUrl: './fleet-user-line-item.component.html',
  imports: [TranslateModule, NgClass, CommonModule, PhoneNumberPipe],
  styleUrls: ['../../fleet-user-line-add-options.component.css'],
})
export class FleetUserLineItemComponent {
  readonly currencySymbol = getCurrencySymbol('EUR', 'wide');
  @Input() selectedLine: Product;
  @Input() showFilteredLines = false;

  showPreviouslyAddedOption(): boolean {
    return this.selectedLine.options.some((option) => option.status === LineAddOptionsConstants.STATUS_ACTIVE);
  }

  isOptionPreviouslyAdded(option): boolean {
    return (
      option.status === LineAddOptionsConstants.STATUS_ACTIVE &&
      option.optionCategory !== LineAddOptionsConstants.OPTION_CATEGORY_REPLACED
    );
  }
}
