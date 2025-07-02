import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'care-billing-mobile-usage-limits-manage-limits',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: 'manage-limits.component.html',
})
export class ManageLimitsComponent {
  @Output() clickEvent = new EventEmitter<boolean>();

  onClick(event: Event) {
    event.stopPropagation();
    this.clickEvent.emit(true);
  }
}
