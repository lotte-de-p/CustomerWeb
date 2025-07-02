import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { MessageAdded } from '@inbox-messages/data-access';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  templateUrl: './inbox-message-date.component.html',
  selector: 'tg-inbox-message-date',
  imports: [TranslateModule, NgClass],
})
export class InboxMessageDateComponent {
  isRead = input.required<boolean>();
  messageAdded = input.required<MessageAdded>();
}
