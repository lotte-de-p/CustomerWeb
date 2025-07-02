import { Component, inject, input, Input } from '@angular/core';
import { AbstractBaseComponent } from '@telenet/ng-lib-page';
import { TranslateModule } from '@ngx-translate/core';
import { getCurrencySymbol, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GroupedOptions } from '../../../shared/models/grouped-options.model';
import { CustomerProductHolding } from '../../../shared/models/customer-product-holding.model';
import { LineOption } from '../../../shared/models/line-option.model';
import { ManagerRemoveOptionsService } from '../../services/manager-remove-options.service';

@Component({
  selector: 'tg-fleet-manager-options-overview',
  standalone: true,
  templateUrl: './options-overview.component.html',
  imports: [TranslateModule, NgClass, FormsModule],
})
export class FleetManagerOptionsOverviewComponent extends AbstractBaseComponent {
  readonly currencySymbol = getCurrencySymbol('EUR', 'wide');
  selectedLines = input.required<CustomerProductHolding[]>();
  @Input() productLineOptions: GroupedOptions[];
  stickyContainer: boolean;
  showFilteredLines: boolean;
  optionCount = 0;

  readonly #removeOptionsService = inject(ManagerRemoveOptionsService);
  toggleOption(selectedOption: LineOption): void {
    selectedOption.isSelected = !selectedOption.isSelected;
    this.#removeOptionsService.removeOption(selectedOption);
  }

  toggleCategories(categories: GroupedOptions): void {
    const activeCategory: GroupedOptions = this.productLineOptions.find((category) => category.isOpen);
    if (activeCategory) {
      activeCategory.isOpen = false;
    }
    if (!(activeCategory === categories)) {
      categories.isOpen = !categories.isOpen;
    }
  }
}
