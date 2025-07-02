import {
  inboxMessagesReducer,
  unreadInboxMessagesInitialState,
  unreadInboxMessagesReducer,
} from './inbox-messages.reducer';
import {
  getInboxMessages,
  getInboxMessagesSuccess,
  getError,
  getUnreadInboxMessagesCountSuccess,
  deleteInboxMessage,
  deleteInboxMessageSuccess,
} from './inbox-messages.actions';
import { initialState } from './inbox-messages.state';
import { Content, InboxMessage } from '../entitities/inbox-message.interface';

describe('inboxMessagesReducer', () => {
  const mockInboxMessages = {
    pinnedInboxMessages: [
      {
        id: '1',
        seen: false,
        read: false,
        pinned: true,
        content: {} as Content,
        messageAdded: { amount: 1, unit: 'day' },
      },
    ],
    otherInboxMessages: [
      {
        id: '2',
        seen: false,
        read: false,
        pinned: false,
        content: {} as Content,
        messageAdded: { amount: 1, unit: 'day' },
      },
    ],
  };

  it('should handle getInboxMessagesSuccess', () => {
    const action = getInboxMessagesSuccess({ inboxMessagesEntries: mockInboxMessages });

    const newState = inboxMessagesReducer(initialState, action);

    expect(newState.inboxMessagesEntries).toEqual(mockInboxMessages);
    expect(newState.loading).toBe(false);
    expect(newState.loadError).toBeUndefined();
  });

  it('should handle getUnreadInboxMessagesCountSuccess', () => {
    const action = getUnreadInboxMessagesCountSuccess({ unreadInboxMessagesCount: 1 });

    const newState = unreadInboxMessagesReducer(unreadInboxMessagesInitialState, action);

    expect(newState.count).toEqual(1);
    expect(newState.loading).toBe(false);
    expect(newState.loadError).toBeUndefined();
  });

  it('should handle getInboxMessages', () => {
    const action = getInboxMessages();

    const newState = inboxMessagesReducer(initialState, action);

    expect(newState.loading).toBe(true);
    expect(newState.loadError).toBeUndefined();
  });

  it('should handle getError', () => {
    const error = 'Something went wrong';
    const action = getError({ error });

    const newState = inboxMessagesReducer(initialState, action);

    expect(newState.loading).toBe(false);
    expect(newState.loadError).toBe(error);
  });

  it('should return the default state for an unknown action', () => {
    const action = { type: 'UNKNOWN_ACTION' };
    const newState = inboxMessagesReducer(initialState, action);

    expect(newState).toEqual(initialState);
  });

  it('should handle deleteInboxMessage', () => {
    const action = deleteInboxMessage({ message: { id: '1', content: {} as Content } as InboxMessage });

    const newState = inboxMessagesReducer(initialState, action);

    expect(newState.loading).toBe(true);
    expect(newState.loadError).toBeUndefined();
  });
});

describe('unreadInboxMessagesReducer', () => {
  it('should handle getUnreadInboxMessagesCountSuccess', () => {
    const action = getUnreadInboxMessagesCountSuccess({ unreadInboxMessagesCount: 1 });

    const newState = unreadInboxMessagesReducer(unreadInboxMessagesInitialState, action);

    expect(newState.count).toEqual(1);
    expect(newState.loading).toBe(false);
    expect(newState.loadError).toBeUndefined();
  });

  it('should handle getError', () => {
    const error = 'Something went wrong';
    const action = getError({ error });

    const newState = unreadInboxMessagesReducer(unreadInboxMessagesInitialState, action);

    expect(newState.loading).toBe(false);
    expect(newState.loadError).toBe(error);
  });

  it('should return the default state for an unknown action', () => {
    const action = { type: 'UNKNOWN_ACTION' };
    const newState = unreadInboxMessagesReducer(unreadInboxMessagesInitialState, action);

    expect(newState).toEqual(unreadInboxMessagesInitialState);
  });
});

describe('inboxMessagesReducer on deleteInboxMessageSuccess', () => {
  it('should update state with new inboxMessagesEntries, set loading to false, and clear loadError on deleteInboxMessageSuccess', () => {
    const mockInboxMessages = {
      pinnedInboxMessages: [
        {
          id: '1',
          seen: false,
          read: false,
          pinned: true,
          content: {} as Content,
          messageAdded: { amount: 1, unit: 'day' },
        },
      ],
      otherInboxMessages: [
        {
          id: '2',
          seen: false,
          read: false,
          pinned: false,
          content: {} as Content,
          messageAdded: { amount: 1, unit: 'day' },
        },
      ],
    };

    const action = deleteInboxMessageSuccess({ inboxMessagesEntries: mockInboxMessages });
    const newState = inboxMessagesReducer(initialState, action);

    expect(newState).toEqual({
      inboxMessagesEntries: mockInboxMessages,
      loading: false,
      loadError: undefined,
    });
  });
});
