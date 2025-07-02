import { createAction, props } from '@ngrx/store';
import { InboxMessage, InboxMessages } from '../entitities/inbox-message.interface';

export const getInboxMessages = createAction('[inbox-messages] get inbox messages');

export const getInboxMessagesSuccess = createAction(
  '[inbox-messages] get inbox messages success',
  props<{ inboxMessagesEntries: InboxMessages }>()
);

export const getUnreadInboxMessagesCount = createAction('[inbox-messages] get unread inbox messages count');

export const getUnreadInboxMessagesCountSuccess = createAction(
  '[inbox-messages] get unread inbox messages count success',
  props<{ unreadInboxMessagesCount: number }>()
);

export const getError = createAction('[inbox-messages] get inbox messages Error', props<{ error: string }>());

export const markMessagesAsRead = createAction('[inbox-messages] mark messages as read', props<{ ids: string[] }>());

export const markMessagesAsReadSuccess = createAction('[inbox-messages] mark messages as read success');

export const markMessagesAsReadError = createAction(
  '[inbox-messages] mark messages as read error',
  props<{ error: string }>()
);

export const deleteInboxMessage = createAction(
  '[inbox-messages] delete inbox message',
  props<{ message: InboxMessage }>()
);

export const deleteInboxMessageSuccess = createAction(
  '[inbox-messages] delete inbox message success',
  props<{ inboxMessagesEntries: InboxMessages }>()
);

export const notificationClicked = createAction(
  '[InboxMessagesDatalayer] Notification Clicked',
  props<{ url: string }>()
);

export const inboxMessageClicked = createAction(
  '[InboxMessagesDatalayer] Inbox Message Clicked',
  props<{ message: InboxMessage }>()
);
