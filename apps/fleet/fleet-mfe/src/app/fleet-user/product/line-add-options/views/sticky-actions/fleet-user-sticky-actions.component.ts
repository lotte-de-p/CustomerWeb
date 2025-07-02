import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Product } from '../../../../shared/models/product.model';

@Component({
  selector: 'tg-fleet-user-sticky-actions',
  standalone: true,
  templateUrl: './fleet-user-sticky-actions.component.html',
  imports: [NgClass, TranslateModule],
})
export class FleetUserStickyActionsComponent {
  @Output() revertChanges = new EventEmitter();
  @Output() showWarning = new EventEmitter();
  @Input() selectedLine: Product;
  @Input() initialSelectedLines: Product;

  revertChangesData(): void {
    this.revertChanges.emit();
  }

  showWarningContent(): void {
    this.showWarning.emit();
  }

  public hasNoChanges(): boolean {
    return this.initialSelectedLines.options.length === this.selectedLine.options.length;
  }
}
