import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractBaseComponent } from '@telenet/ng-lib-page';
import { MessagesModule } from '@telenet/ng-lib-message';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'tg-fleet-manager-result-message',
  standalone: true,
  templateUrl: './fleet-manager-result-message.component.html',
  imports: [MessagesModule, TranslateModule],
})
export class FleetManagerResultMessageComponent extends AbstractBaseComponent {
  @Input() messageGroup: string;
  @Input() backToProductOverviewLabel: string;
  @Output() backToProductOverviewClicked: EventEmitter<void> = new EventEmitter<void>();
}
