import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'care-billing-mobile-usage-limits-premium-services-adjust-limit',
  standalone: true,
  imports: [CommonModule, TranslateModule, ReactiveFormsModule],
  templateUrl: 'premium-services-adjust-limit.component.html',
})
export class PremiumServicesAdjustLimitComponent {
  protected readonly MESSAGE_GROUP = 'mobile-usage-limits';
  @Input() currentPremiumLimit: number;
  @Output() isAdjustLimitClicked = new EventEmitter<{ isEditMode: boolean }>();

  onEdit(e: Event): void {
    e.preventDefault();
    this.isAdjustLimitClicked.emit({ isEditMode: true });
  }
}
