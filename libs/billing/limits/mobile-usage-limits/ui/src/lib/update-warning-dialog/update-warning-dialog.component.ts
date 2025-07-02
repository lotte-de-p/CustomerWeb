import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { WarningDialogModel } from '@billing/mobile-usage-limits/data-access';
import { SlideMenuComponent } from '@billing/shared/ui';

@Component({
  selector: 'care-billing-mobile-usage-limits-update-warning-dialog',
  standalone: true,
  imports: [CommonModule, TranslateModule, SlideMenuComponent],
  templateUrl: 'update-warning-dialog.component.html',
})
export class UpdateWarningDialogComponent {
  @Input() dialogData: WarningDialogModel;
  @Input() showWarningDialog: boolean;
  @Output() clickEvent = new EventEmitter<boolean>();

  onConfirm(): void {
    this.clickEvent.emit(true);
  }

  onCancel(): void {
    this.clickEvent.emit(false);
  }
}
