import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tg-summary-header',
  templateUrl: './summary-header.component.html',
})
export class SummaryHeaderComponent {
  @Input() title: string;
  @Input() icon: string;
  @Input() linkText: string;
  @Input() noLinkText: string;
  @Output() linkClicked = new EventEmitter();
}
