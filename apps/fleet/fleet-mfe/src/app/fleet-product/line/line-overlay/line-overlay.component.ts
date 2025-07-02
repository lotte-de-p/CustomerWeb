import { AbstractBaseComponent } from '@telenet/ng-lib-page';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'tg-line-overlay',
  templateUrl: './line-overlay.component.html',
  standalone: true,
  styles: [],
})
export class LineOverlayComponent extends AbstractBaseComponent {
  @Output() closeOverlay: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
    super();
  }

  close(): void {
    this.closeOverlay.emit();
  }
}
