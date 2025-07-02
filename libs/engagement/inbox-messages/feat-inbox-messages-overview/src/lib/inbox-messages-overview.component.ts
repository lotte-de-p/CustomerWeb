import { Component } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import {
  InboxMessageComponent,
  InboxMessageEmptyDataComponent,
  InboxMessageErrorComponent,
  InboxMessageLoaderComponent,
} from '@inbox-messages/ui';
import { InboxMessage, InboxMessagesFacade, InboxMessagesNgrxModule } from '@inbox-messages/data-access';
import { TranslateModule } from '@ngx-translate/core';
import { LoginModule } from '@telenet/ng-lib-ocapi';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    InboxMessageComponent,
    InboxMessageErrorComponent,
    InboxMessageLoaderComponent,
    InboxMessageEmptyDataComponent,
    InboxMessagesNgrxModule,
    LoginModule,
    AsyncPipe,
  ],
  selector: 'tg-inbox-messages-overview',
  templateUrl: './inbox-messages-overview.component.html',
})
export class InboxMessagesOverviewComponent {
  scopes = [];

  inboxMessages$ = this.inboxMessagesFacade.inboxMessages$;
  loadError$ = this.inboxMessagesFacade.loadError$;
  loading$ = this.inboxMessagesFacade.loading$;

  constructor(private readonly inboxMessagesFacade: InboxMessagesFacade) {
    this.inboxMessagesFacade.initDataLayer();
  }

  initAfterLoggedIn(): void {
    this.inboxMessagesFacade.loadInboxMessages();
  }

  handleInboxMessageClick(message: InboxMessage): void {
    this.inboxMessagesFacade.sendInboxMessageClickedEvent(message);
  }

  handleErrorAction(): void {
    this.inboxMessagesFacade.loadInboxMessages();
  }

  deleteMessage(message: InboxMessage): void {
    this.inboxMessagesFacade.deleteMessage(message);
  }
}
