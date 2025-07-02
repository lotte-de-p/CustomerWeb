import { Component, EventEmitter, input, Output } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { InboxMessage, BadgeType } from '@inbox-messages/data-access';
import { InboxMessageDateComponent } from '../inbox-message-date/inbox-message-date.component';
import { InboxMessageBadgeComponent } from '../inbox-message-badge/inbox-message-badge.component';
@Component({
  standalone: true,
  templateUrl: './inbox-message.component.html',
  selector: 'tg-inbox-message',
  imports: [NgClass, TranslateModule, NgIf, InboxMessageDateComponent, InboxMessageBadgeComponent],
})
export class InboxMessageComponent {
  @Output() deleteMessage = new EventEmitter<InboxMessage>();
  inboxMessage = input<InboxMessage>();
  @Output() inboxMessageClicked = new EventEmitter<InboxMessage>();
  badgeType = BadgeType.New;

  handleDeleteMessage(event: MouseEvent, message: InboxMessage): void {
    event.preventDefault();
    event.stopPropagation();

    this.deleteMessage.emit(message);
  }

  handleClick(event: MouseEvent, message: InboxMessage): void {
    event.preventDefault();
    this.inboxMessageClicked.emit(message);
  }
}
