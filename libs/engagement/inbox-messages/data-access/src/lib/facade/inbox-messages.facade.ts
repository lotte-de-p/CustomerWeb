import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { InboxMessage, InboxMessages } from '../entitities/inbox-message.interface';
import { InboxMessagesState } from '../+state/inbox-messages.reducer';
import * as InboxMessagesActions from '../+state/inbox-messages.actions';
import * as InboxMessagesSelectors from '../+state/inbox-messages.selectors';
import { InboxMessagesDatalayerService } from '../services/inbox-messages-datalayer.service';

@Injectable({
  providedIn: 'root',
})
export class InboxMessagesFacade {
  constructor(
    private readonly store: Store<InboxMessagesState>,
    private readonly inboxMessagesDatalayerService: InboxMessagesDatalayerService
  ) {}

  readonly loading$: Observable<boolean> = this.store.select(InboxMessagesSelectors.selectLoading);
  readonly loadError$: Observable<string | undefined> = this.store.select(InboxMessagesSelectors.selectLoadError);
  readonly inboxMessages$: Observable<InboxMessages> = this.store.select(InboxMessagesSelectors.selectInboxMessages);
  readonly unreadInboxMessagesCount$: Observable<number> = this.store.select(
    InboxMessagesSelectors.selectUnreadInboxMessagesCount
  );

  loadInboxMessages(): void {
    this.store.dispatch(InboxMessagesActions.getInboxMessages());
  }

  loadUnreadInboxMessagesCount(): void {
    this.store.dispatch(InboxMessagesActions.getUnreadInboxMessagesCount());
  }

  sendNotificationClickedEvent(url: string): void {
    this.store.dispatch(InboxMessagesActions.notificationClicked({ url }));
  }

  sendInboxMessageClickedEvent(message: InboxMessage): void {
    this.store.dispatch(InboxMessagesActions.inboxMessageClicked({ message }));
  }

  deleteMessage(message: InboxMessage): void {
    this.store.dispatch(InboxMessagesActions.deleteInboxMessage({ message }));
  }

  initDataLayer(): void {
    this.inboxMessagesDatalayerService.initDataLayer();
  }
}
