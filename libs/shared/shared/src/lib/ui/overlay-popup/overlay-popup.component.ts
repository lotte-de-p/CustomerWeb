import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-overlay-popup',
  templateUrl: './overlay-popup.component.html',
  imports: [NgIf],
})
export class OverlayPopupComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() content = '';
  @Input() enableClose = true;
  @Input() primaryButtonText = '';
  @Input() secondaryButtonText = '';
  @Output() primaryButtonClicked = new EventEmitter<void>();
  @Output() secondaryButtonClicked = new EventEmitter<void>();
  @Output() closeButtonClicked = new EventEmitter<void>();
}
