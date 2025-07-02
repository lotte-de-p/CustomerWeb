import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgClass, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'tg-sales-identity-overlay',
  templateUrl: './identity-overlay.component.html',
  standalone: true,
  imports: [TranslateModule, NgClass, NgTemplateOutlet],
})
export class IdentityOverlayComponent {
  @Input() brand: string | null | undefined = '';
  @Input() isBelgianIdentity = false;
  @Output() closeOverlay = new EventEmitter();

  close() {
    this.closeOverlay.emit();
  }
}
