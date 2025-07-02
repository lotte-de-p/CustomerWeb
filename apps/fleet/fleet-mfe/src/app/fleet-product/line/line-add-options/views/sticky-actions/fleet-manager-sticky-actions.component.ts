import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CustomerProductHolding } from '../../../shared/models/customer-product-holding.model';
import { Option } from '../../../shared/models/option.model';

@Component({
  selector: 'tg-fleet-manager-sticky-actions',
  standalone: true,
  templateUrl: './fleet-manager-sticky-actions.component.html',
  imports: [NgClass, TranslateModule],
})
export class FleetManagerStickyActionsComponent {
  @Output() revertChanges = new EventEmitter();
  @Output() showWarning = new EventEmitter();
  @Input() selectedLines: CustomerProductHolding[] = [];
  @Input() initialSelectedLines: CustomerProductHolding[] = [];

  revertChangesData(): void {
    this.revertChanges.emit();
  }

  showWarningContent(): void {
    this.showWarning.emit();
  }

  public hasNoChanges(): boolean {
    return this.getOptions(this.selectedLines).length === this.getOptions(this.initialSelectedLines).length;
  }

  getOptions(lines: CustomerProductHolding[]): Option[] {
    const options = [];
    lines.forEach((selectedLine) => {
      selectedLine.options.forEach((option) => {
        options.push(option);
      });
    });
    return options;
  }
}
