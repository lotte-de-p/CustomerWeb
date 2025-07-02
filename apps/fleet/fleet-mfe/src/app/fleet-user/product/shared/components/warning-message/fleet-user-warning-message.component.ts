import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractBaseComponent } from '@telenet/ng-lib-page';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { InlineSVGModule } from 'ng-inline-svg-2';

@Component({
  selector: 'tg-fleet-user-warning-message',
  standalone: true,
  templateUrl: './fleet-user-warning-message.component.html',
  imports: [CommonModule, TranslateModule, InlineSVGModule],
})
export class FleetUserWarningMessageComponent extends AbstractBaseComponent {
  @Input() imageMobile: string;
  @Input() image: string;
  @Input() primaryActionLabel: string;
  @Input() secondaryActionLabel: string;
  @Input() title: string;
  @Input() description: string;

  @Output() primaryAction: EventEmitter<void> = new EventEmitter<void>();
  @Output() secondaryAction: EventEmitter<void> = new EventEmitter<void>();
}
