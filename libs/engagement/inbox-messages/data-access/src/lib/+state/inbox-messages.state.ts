import { InboxMessages } from '../entitities/inbox-message.interface';

export interface InboxMessagesState {
  inboxMessagesEntries: InboxMessages;
  loading: boolean;
  loadError: string | undefined;
}

export interface UnreadInboxMessagesState {
  count: number;
  loading: boolean;
  loadError: string | undefined;
}

export const initialState: InboxMessagesState = {
  inboxMessagesEntries: {} as InboxMessages,
  loading: false,
  loadError: undefined,
};

export const unreadInboxMessagesInitialState: UnreadInboxMessagesState = {
  count: 0,
  loading: false,
  loadError: undefined,
};
