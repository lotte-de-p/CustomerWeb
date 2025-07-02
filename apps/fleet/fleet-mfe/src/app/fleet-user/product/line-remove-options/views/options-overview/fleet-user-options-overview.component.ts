import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractBaseComponent } from '@telenet/ng-lib-page';
import { GroupedOptions } from '../../../../shared/interfaces/grouped-options.interface';
import { LineRemoveConstants } from '../../constants/line-remove-constants';
import { LineOption } from '../../../../shared/interfaces/line-option.interface';
import { TranslateModule } from '@ngx-translate/core';
import { getCurrencySymbol, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product, Option } from '../../../../shared/models/product.model';

@Component({
  selector: 'tg-fleet-user-options-overview',
  standalone: true,
  templateUrl: './fleet-user-options-overview.component.html',
  imports: [TranslateModule, NgClass, FormsModule],
  styleUrls: ['../../fleet-user-line-remove-options.component.css'],
})
export class FleetUserOptionsOverviewComponent extends AbstractBaseComponent {
  readonly currencySymbol = getCurrencySymbol('EUR', 'wide');
  @Input() productLineOptions: GroupedOptions[];
  @Input() selectedLine: Product;
  @Input() showAvailableOptionsContainer: boolean;
  @Output() updateOptions: EventEmitter<Option[]> = new EventEmitter<Option[]>();
  @Output() toggleAvailableOptionsContainer: EventEmitter<void> = new EventEmitter<void>();

  stickyContainer: boolean;
  showFilteredLines: boolean;
  optionCount = 0;

  toggleOption(selectedOption: LineOption): void {
    selectedOption.isSelected = !selectedOption.isSelected;
    const updatedOptions = this.selectedLine.options.map((option) => {
      if (
        option.productId === selectedOption.id &&
        (option.status === LineRemoveConstants.ACTIVE_OPTION ||
          option.status === LineRemoveConstants.ACTIVATION_PASSED_PONR)
      ) {
        return {
          ...option,
          isOptionRemoved: selectedOption.isSelected,
          description: selectedOption.description,
          shortDescription: selectedOption.shortDescription,
        };
      }
      return option;
    });
    this.updateOptions.emit(updatedOptions);
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

  toggleAvailableOptions() {
    this.toggleAvailableOptionsContainer.emit();
  }
}
