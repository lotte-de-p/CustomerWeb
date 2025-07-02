import { createFeatureSelector, createSelector } from '@ngrx/store';
import { InboxMessagesState, UnreadInboxMessagesState } from './inbox-messages.reducer';

export const selectInboxMessagesState = createFeatureSelector<InboxMessagesState>('inboxMessagesFeature');
export const selectUnreadInboxMessagesCountState =
  createFeatureSelector<UnreadInboxMessagesState>('unreadInboxMessagesFeature');

export const selectInboxMessages = createSelector(
  selectInboxMessagesState,
  (state: InboxMessagesState) => state?.inboxMessagesEntries
);
export const selectLoading = createSelector(selectInboxMessagesState, (state: InboxMessagesState) => state.loading);
export const selectLoadError = createSelector(selectInboxMessagesState, (state: InboxMessagesState) => state.loadError);

export const selectUnreadInboxMessagesCount = createSelector(
  selectUnreadInboxMessagesCountState,
  (state: UnreadInboxMessagesState) => state?.count
);
