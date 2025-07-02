import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractBaseComponent } from '@telenet/ng-lib-page';
import { MessagesModule } from '@telenet/ng-lib-message';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'tg-fleet-user-result-message',
  standalone: true,
  templateUrl: './fleet-user-result-message.component.html',
  imports: [MessagesModule, TranslateModule],
})
export class FleetUserResultMessageComponent extends AbstractBaseComponent {
  @Input() messageGroup: string;
  @Input() backToProductOverviewLabel: string;
  @Input() isSourceOneApp = false;
  @Output() backToProductOverviewClicked: EventEmitter<void> = new EventEmitter<void>();
}
