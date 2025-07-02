import { AbstractBaseComponent } from '@telenet/ng-lib-page';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tg-fleet-user-line-overlay',
  templateUrl: './fleet-user-line-overlay.component.html',
  standalone: true,
  styles: [],
})
export class FleetUserLineOverlayComponent extends AbstractBaseComponent {
  @Output()
  closeOverlay: EventEmitter<void> = new EventEmitter<void>();
  @Input()
  public isSourceOneApp = false;

  constructor() {
    super();
  }

  close(): void {
    this.closeOverlay.emit();
  }
}
