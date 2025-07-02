import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Message, MessageType } from '@sim-management/data-access';
import { WinkNotification, WinkTitle, WinkParagraph } from '@telenet/wink-ng';

@Component({
  selector: 'tg-activate-sim-management-ui-notification',
  standalone: true,
  imports: [CommonModule, TranslateModule, WinkNotification, WinkTitle, WinkParagraph],
  templateUrl: './notification.component.html',
})
export class SimManagementNotificationComponent {
  @Input() message: Message;

  get messageType(): typeof MessageType {
    return MessageType;
  }
}
