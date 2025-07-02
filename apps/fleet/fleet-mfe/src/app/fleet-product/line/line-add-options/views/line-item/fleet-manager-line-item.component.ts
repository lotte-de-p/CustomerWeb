import { Component, input, Input } from '@angular/core';
import { LineAddOptionsConstants } from '../../../shared/constants/line-add-options.constants';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule, NgClass } from '@angular/common';
import { PhoneNumberPipe } from '../../../../../shared/common/pipes/phone-number.pipe';
import { CustomerProductHolding } from '../../../shared/models/customer-product-holding.model';

@Component({
  selector: 'tg-fleet-manager-line-item',
  standalone: true,
  templateUrl: './fleet-manager-line-item.component.html',
  imports: [TranslateModule, NgClass, CommonModule, PhoneNumberPipe],
})
export class FleetManagerLineItemComponent {
  selectedLines = input.required<CustomerProductHolding[]>();
  @Input() showFilteredLines = false;
  @Input() toggleClass: boolean;

  showLineDetails(selectedLine): boolean {
    return this.showFilteredLines ? selectedLine.isSelected : true;
  }

  showPreviouslyAddedOption(selectedLine): boolean {
    return selectedLine.options.some((option) => option.status === LineAddOptionsConstants.STATUS_ACTIVE);
  }

  isActiveOption(option): boolean {
    return option.status === LineAddOptionsConstants.STATUS_ACTIVE;
  }

  hasUpgradedOptions(selectedLine: CustomerProductHolding) {
    return selectedLine.options.some((option) => option.isOptionUpgraded);
  }

  hasAddedOptions(selectedLine: CustomerProductHolding) {
    return selectedLine.options.some((option) => option.isOptionAdded);
  }
}
