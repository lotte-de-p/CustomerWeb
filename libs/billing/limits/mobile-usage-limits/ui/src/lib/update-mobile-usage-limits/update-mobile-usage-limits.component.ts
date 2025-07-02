import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'care-billing-mobile-usage-limits-update-mobile-usage-limits',
  standalone: true,
  imports: [CommonModule, TranslateModule, ReactiveFormsModule],
  templateUrl: 'update-mobile-usage-limits.component.html',
  styleUrl: './update-mobile-usage-limits.component.scss',
})
export class UpdateMobileUsageLimitsComponent {
  protected readonly MESSAGE_GROUP = 'mobile-usage-limits';
  @Output() clickEvent = new EventEmitter<boolean>();

  submit(): void {
    this.clickEvent.emit(true);
  }

  cancel(): void {
    this.clickEvent.emit(false);
  }
}
