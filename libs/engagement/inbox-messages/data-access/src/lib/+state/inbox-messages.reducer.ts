import { createReducer, on } from '@ngrx/store';
import { produce } from 'immer';
import * as InboxMessagesActions from './inbox-messages.actions';
import { InboxMessages } from '../entitities/inbox-message.interface';

export interface InboxMessagesState {
  inboxMessagesEntries: InboxMessages;
  loading: boolean;
  loadError: string | undefined;
}

export const initialState: InboxMessagesState = {
  inboxMessagesEntries: {} as InboxMessages,
  loading: false,
  loadError: undefined,
};

export interface UnreadInboxMessagesState {
  count: number;
  loading: boolean;
  loadError: string | undefined;
}

export const unreadInboxMessagesInitialState: UnreadInboxMessagesState = {
  count: 0,
  loading: false,
  loadError: undefined,
};

export const inboxMessagesReducer = createReducer(
  initialState,
  on(InboxMessagesActions.getInboxMessages, (state) => ({ ...state, loading: true })),
  on(InboxMessagesActions.getInboxMessagesSuccess, (state, { inboxMessagesEntries }) =>
    produce(state, (draft) => {
      draft.inboxMessagesEntries = inboxMessagesEntries;
      draft.loading = false;
      draft.loadError = undefined;
    })
  ),
  on(InboxMessagesActions.getError, (state, { error }) => ({ ...state, loading: false, loadError: error })),
  on(InboxMessagesActions.deleteInboxMessage, (state) => ({ ...state, loading: true })),
  on(InboxMessagesActions.deleteInboxMessageSuccess, (state, { inboxMessagesEntries }) =>
    produce(state, (draft) => {
      draft.inboxMessagesEntries = inboxMessagesEntries;
      draft.loading = false;
      draft.loadError = undefined;
    })
  )
);

export const unreadInboxMessagesReducer = createReducer(
  unreadInboxMessagesInitialState,
  on(InboxMessagesActions.getUnreadInboxMessagesCount, (state) => ({ ...state, loading: true })),
  on(InboxMessagesActions.getUnreadInboxMessagesCountSuccess, (state, { unreadInboxMessagesCount }) =>
    produce(state, (draft) => {
      draft.count = unreadInboxMessagesCount;
      draft.loading = false;
      draft.loadError = undefined;
    })
  ),
  on(InboxMessagesActions.getError, (state, { error }) => ({ ...state, loading: false, loadError: error }))
);
