import { Component, EventEmitter, inject, Output } from '@angular/core';
import isEqual from 'lodash-es/isEqual';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule, NgClass } from '@angular/common';
import { LineOption } from '../../../shared/models/line-option.model';
import { ManagerAddOptionsService } from '../../services/manager-add-options.service';

@Component({
  selector: 'tg-fleet-manager-available-option',
  standalone: true,
  templateUrl: './fleet-manager-available-option.component.html',
  imports: [TranslateModule, CommonModule, NgClass],
})
export class FleetManagerAvailableOptionComponent {
  @Output() toggleContainerData: EventEmitter<boolean> = new EventEmitter<boolean>();
  showFilteredLines: boolean;
  optionCount = 0;

  toggleContainer = false;

  readonly #addOptionsService = inject(ManagerAddOptionsService);

  selectedLines = this.#addOptionsService.selectedLines;
  productLineOptions = this.#addOptionsService.productLineOptions;

  toggleOption(selectedOption: LineOption): void {
    selectedOption.isSelected = !selectedOption.isSelected;
    this.#addOptionsService.selectOption(selectedOption);
  }

  toggleCategories(categories): void {
    const activeCategory = this.productLineOptions().find((category) => category.isOpen);
    if (activeCategory) {
      activeCategory.isOpen = false;
    }
    if (!isEqual(activeCategory, categories)) {
      categories.isOpen = !categories.isOpen;
    }
  }
}
