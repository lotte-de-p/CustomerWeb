import { Component, EventEmitter, Input, Output } from '@angular/core';
import flatMap from 'lodash-es/flatMap';
import isEqual from 'lodash-es/isEqual';
import sortBy from 'lodash-es/sortBy';
import { LineAddOptionsConstants } from '../../../shared/constants/line-add-options.constants';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule, getCurrencySymbol, NgClass } from '@angular/common';
import { GroupedOptions } from '../../models/grouped-options.model';
import { Option, Product } from '../../../../shared/models/product.model';
import { LineOption } from '../../models/line-option.model';
import { mapLineOptionToProductOption } from '../../mapper/product-options.mapper';

@Component({
  selector: 'tg-fleet-user-available-option',
  standalone: true,
  templateUrl: './fleet-user-available-option.component.html',
  imports: [TranslateModule, CommonModule, NgClass],
  styleUrls: ['../../fleet-user-line-add-options.component.css'],
})
export class FleetUserAvailableOptionComponent {
  readonly currencySymbol = getCurrencySymbol('EUR', 'wide');
  @Input() groupedOptions: GroupedOptions[] = [];
  @Input() selectedLine: Product;
  @Input() showAvailableOptionsContainer: boolean;

  @Output() toggleContainerData: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() toggleAvailableOptionsContainer: EventEmitter<boolean> = new EventEmitter<boolean>();
  toggleContainer = false;

  toggleCategories(categories): void {
    const activeCategory = this.groupedOptions.find((option) => option.isOpen === true);
    if (activeCategory) {
      activeCategory.isOpen = false;
    }
    if (!isEqual(activeCategory, categories)) {
      categories.isOpen = !categories.isOpen;
    }
  }

  toggleAvailableOptions(): void {
    this.toggleAvailableOptionsContainer.emit();
  }

  addOption(lineOption: LineOption): void {
    const inactiveOption = this.getInactiveSelectedOptionOfCategory(lineOption);
    const isOptionToBeReplaced = inactiveOption && inactiveOption.id === lineOption.id;
    const optionToBeReplaced = isOptionToBeReplaced ? lineOption : inactiveOption;
    this.replaceOption(optionToBeReplaced, this.selectedLine, lineOption);

    const activeOption = this.getActiveSelectedOptionOfCategory(lineOption);
    if (activeOption) {
      activeOption.optionCategory = '';
    }
    const hasSameActiveOption = activeOption && activeOption.productId === lineOption.id;
    if (!isOptionToBeReplaced && !hasSameActiveOption) {
      this.updateSelection(this.selectedLine, lineOption, activeOption, inactiveOption);
      this.toggleContainer = true;
      this.updateDisabledOption(lineOption, true);
    }

    this.displayLabel();
    this.toggleContainerValue();
    this.toggleAvailableOptions();
  }

  private getActiveSelectedOptionOfCategory(lineOption: LineOption) {
    return this.getOption(this.selectedLine.options, lineOption.category, LineAddOptionsConstants.STATUS_ACTIVE);
  }

  private getInactiveSelectedOptionOfCategory(lineOption: LineOption) {
    return this.getOption(this.selectedLine.options, lineOption.category, LineAddOptionsConstants.STATUS_INACTIVE);
  }

  removeOption(options: Option[], optionItem: LineOption): void {
    const index = options.findIndex(
      (option) => option.id === optionItem.id && option.status === LineAddOptionsConstants.STATUS_INACTIVE
    );

    const groupedOptions: GroupedOptions = this.groupedOptions.find(
      (groupedOption) => groupedOption.category === optionItem.category
    );
    groupedOptions.lineOptions.find((lineOption) => lineOption.id === optionItem.id).isSelected = false;
    options.splice(index, 1);
  }

  private replaceOption(optionToBeReplaced: LineOption, selectedLine, selectedOption): void {
    if (optionToBeReplaced) {
      this.removeOption(selectedLine.options, optionToBeReplaced);
      selectedLine.isAffected = this.isAffected(selectedLine.options);
      this.updateDisabledOption(selectedOption, false);
    }
  }

  private updateSelection(selectedLine, selectedOption: LineOption, activeOption, inactiveOption): void {
    selectedOption.isSelected = true;
    selectedOption.optionCategory =
      activeOption ||
      (inactiveOption && inactiveOption.optionCategory === LineAddOptionsConstants.OPTION_CATEGORY_UPGRADED)
        ? LineAddOptionsConstants.OPTION_CATEGORY_UPGRADED
        : LineAddOptionsConstants.OPTION_CATEGORY_ADDED;
    selectedOption.status = LineAddOptionsConstants.STATUS_INACTIVE;

    if (activeOption) {
      selectedOption.upgradedFrom = activeOption.volume;
      activeOption.optionCategory =
        activeOption.category === selectedOption.category ? LineAddOptionsConstants.OPTION_CATEGORY_REPLACED : '';
    }
    const selectedProductOption: Option = mapLineOptionToProductOption(selectedOption);

    selectedLine.options = sortBy(selectedLine.options, LineAddOptionsConstants.GROUP_BY_KEY);
    selectedLine.options.push(selectedProductOption);
    selectedLine.isAffected = this.isAffected(selectedLine.options);
  }

  private getOption(options, categoryName, status) {
    return options.find((option) => option.category === categoryName && option.status === status);
  }

  private displayLabel(): void {
    this.selectedLine.isUpgraded = this.selectedLine.options.some(
      (option) => option.optionCategory === LineAddOptionsConstants.OPTION_CATEGORY_UPGRADED
    );
    this.selectedLine.isAdded = this.selectedLine.options.some(
      (option) => option.optionCategory === LineAddOptionsConstants.OPTION_CATEGORY_ADDED
    );
  }

  private updateDisabledOption(selectedOption, isDisabled): void {
    const disabledOption = this.getOptionBasedOnStatus(selectedOption, isDisabled);
    if (disabledOption) {
      disabledOption.isSelected = !isDisabled;
      disabledOption.isDisabled = !isDisabled;
    }
  }

  private getOptionBasedOnStatus(selectedOption, isDisabled) {
    const productOptions = this.getProductLineOptions();
    return productOptions.find((productOption) => {
      return productOption.category === selectedOption.category && productOption.isDisabled === isDisabled;
    });
  }

  private getProductLineOptions() {
    return flatMap(this.groupedOptions, (option) => option.lineOptions);
  }

  private isAffected(options): boolean {
    return options.some(
      (option) =>
        option.optionCategory === LineAddOptionsConstants.OPTION_CATEGORY_UPGRADED ||
        option.optionCategory === LineAddOptionsConstants.OPTION_CATEGORY_ADDED
    );
  }

  private toggleContainerValue(): void {
    this.toggleContainerData.emit(this.toggleContainer);
  }
}
