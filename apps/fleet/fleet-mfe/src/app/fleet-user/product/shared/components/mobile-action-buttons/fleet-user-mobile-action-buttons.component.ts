import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'tg-fleet-user-mobile-action-buttons',
  standalone: true,
  templateUrl: './fleet-user-mobile-action-buttons.component.html',
  imports: [NgClass, TranslateModule],
})
export class FleetUserMobileActionButtonsComponent {
  @Input() primaryButtonEnabled = true;
  @Input() secondaryButtonEnabled = true;
  @Input() primaryButtonLabel: string;
  @Input() secondaryButtonLabel: string;

  @Output() secondaryCallback = new EventEmitter<void>();
  @Output() primaryCallback = new EventEmitter<void>();
}
