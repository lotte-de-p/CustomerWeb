import { AbstractBaseComponent } from '@telenet/ng-lib-page';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'tg-fleet-manager-line-overlay',
  templateUrl: './fleet-manager-line-overlay.component.html',
  standalone: true,
  styles: [],
})
export class FleetManagerLineOverlayComponent extends AbstractBaseComponent {
  @Output()
  closeOverlay: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
    super();
  }

  close(): void {
    this.closeOverlay.emit();
  }
}
