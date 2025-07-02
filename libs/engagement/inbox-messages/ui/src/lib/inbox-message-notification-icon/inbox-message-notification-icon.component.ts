import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  templateUrl: './inbox-message-notification-icon.component.html',
  selector: 'tg-inbox-message-notification-icon',
  imports: [TranslateModule, NgIf],
})
export class InboxMessageNotificationIconComponent implements OnChanges {
  @Input() unreadMessages: number | null;
  @Input() inboxOverviewPageUrl: string;
  @Input() hideIconLabel: boolean;

  @Output() notificationClicked = new EventEmitter<string>();
  @Output() unreadMessagesChange = new EventEmitter<boolean>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['unreadMessages']) {
      const hasUnreadMessages = this.unreadMessages !== null && this.unreadMessages > 0;
      this.unreadMessagesChange.emit(hasUnreadMessages);
    }
  }

  handleNotificationClick(event: MouseEvent, url: string): void {
    event.preventDefault();
    this.notificationClicked.emit(url);
  }
}
