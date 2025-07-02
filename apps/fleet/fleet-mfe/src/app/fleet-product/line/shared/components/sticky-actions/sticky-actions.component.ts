import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'tg-fleet-manager-sticky-actions',
  standalone: true,
  templateUrl: './sticky-actions.component.html',
  imports: [NgClass, TranslateModule],
})
export class FleetManagerStickyActionsComponent {
  @Input() primaryButtonEnabled = true;
  @Input() secondaryButtonEnabled = true;
  @Input() primaryButtonLabel: string;
  @Input() secondaryButtonLabel: string;
  @Input() blur = false;

  @Output() secondaryCallback = new EventEmitter<void>();
  @Output() primaryCallback = new EventEmitter<void>();
}
