import { TestBed, fakeAsync, tick, flush } from '@angular/core/testing';
import { InboxMessagesEffects } from './inbox-messages.effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Actions } from '@ngrx/effects';
import { InboxMessagesService } from '../services/inbox-messages.service';
import { of, throwError } from 'rxjs';
import { Content, InboxMessage, InboxMessages } from '../entitities/inbox-message.interface';
import * as InboxMessagesActions from './inbox-messages.actions';
import { InboxMessagesDatalayerService } from '../services/inbox-messages-datalayer.service';
import { UrlService } from '@telenet/ng-lib-page';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

describe('InboxMessagesEffects', () => {
  let actions$: Actions;
  let effects: InboxMessagesEffects;
  let inboxMessagesService: InboxMessagesService;
  let inboxMessagesDatalayerService: InboxMessagesDatalayerService;

  let store$: Store;
  const TEST_PINNED_TITLE = 'Pinned Message Title';
  const TEST_OTHER_TITLE = 'Other Message Title';
  const TEST_UNREAD_TITLE = 'Unread Message Title';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        InboxMessagesEffects,
        provideMockActions(() => actions$),
        provideMockStore(),
        {
          provide: InboxMessagesService,
          useValue: {
            getAllInboxMessages: jest.fn(),
            markMessagesAsReadByIds: jest.fn(),
            getUnreadInboxMessagesCount: jest.fn(),
            deleteMessageById: jest.fn(),
          },
        },
        {
          provide: InboxMessagesDatalayerService,
          useValue: {
            sendNotificationClickedEvent: jest.fn(() => Promise.resolve(true)),
            sendInboxMessageClickedEvent: jest.fn(() => Promise.resolve(true)),
            sendInboxMessageImpressionEvents: jest.fn(),
            sendInboxMessageDeleteEvent: jest.fn(),
          },
        },
        {
          provide: UrlService,
          useValue: { redirectTo: jest.fn() },
        },
      ],
    });
    effects = TestBed.inject(InboxMessagesEffects);
    inboxMessagesService = TestBed.inject(InboxMessagesService);
    inboxMessagesDatalayerService = TestBed.inject(InboxMessagesDatalayerService);
    store$ = TestBed.inject(Store);
  });

  describe('inboxMessages$', () => {
    it('should trigger getInboxMessagesSuccess', (done) => {
      const mockInboxMessages = createMockInboxMessages();
      jest.spyOn(inboxMessagesService, 'getAllInboxMessages').mockReturnValue(of(mockInboxMessages));
      actions$ = of(InboxMessagesActions.getInboxMessages());

      effects.fetchAllMessages$.subscribe((action) => {
        expect(action).toEqual(
          InboxMessagesActions.getInboxMessagesSuccess({ inboxMessagesEntries: mockInboxMessages })
        );
        done();
      });
    });

    it('should trigger getInboxMessagesError on error', (done) => {
      const error = 'Failed to fetch messages';
      jest.spyOn(inboxMessagesService, 'getAllInboxMessages').mockReturnValue(throwError(error));
      actions$ = of(InboxMessagesActions.getInboxMessages());

      effects.fetchAllMessages$.subscribe((action) => {
        expect(action).toEqual(InboxMessagesActions.getError({ error }));
        done();
      });
    });
  });

  describe('markAllAsRead$', () => {
    it('should trigger markMessagesAsRead and markMessagesAsReadSuccess', fakeAsync(() => {
      const mockInboxMessages = createMockInboxMessages();
      jest.spyOn(inboxMessagesService, 'markMessagesAsReadByIds').mockReturnValue(of('success'));
      actions$ = of(InboxMessagesActions.getInboxMessagesSuccess({ inboxMessagesEntries: mockInboxMessages }));

      effects.markAllAsRead$.subscribe((action) => {
        if (action.type === InboxMessagesActions.markMessagesAsReadSuccess.type) {
          expect(action).toEqual(InboxMessagesActions.markMessagesAsReadSuccess());
        }
        expect(inboxMessagesDatalayerService.sendInboxMessageImpressionEvents).toHaveBeenCalledWith([
          TEST_UNREAD_TITLE,
        ]);
      });

      tick(1000);
      flush();
    }));
  });

  describe('deleteMessages$', () => {
    it('should trigger deleteInboxMessageSuccess action after successful message deletion with delay', fakeAsync(() => {
      const mockInboxMsg = createMockInboxMessages().pinnedInboxMessages[0];
      const mockAction = InboxMessagesActions.deleteInboxMessage({ message: mockInboxMsg });
      actions$ = of(mockAction);
      jest.spyOn(inboxMessagesService, 'deleteMessageById').mockReturnValue(of(''));

      effects.deleteMessage$.subscribe((action) => {
        expect(action).toEqual(
          InboxMessagesActions.deleteInboxMessageSuccess({ inboxMessagesEntries: {} as InboxMessages })
        );
        expect(inboxMessagesDatalayerService.sendInboxMessageDeleteEvent).toHaveBeenCalledWith('1', TEST_PINNED_TITLE);
      });

      tick(500);
    }));

    it('should trigger getError action if message deletion fails with delay', fakeAsync(() => {
      const mockInboxMsg = createMockInboxMessages().pinnedInboxMessages[0];
      const mockAction = InboxMessagesActions.deleteInboxMessage({ message: mockInboxMsg });
      actions$ = of(mockAction);
      const error = 'Failed to delete message';
      jest.spyOn(inboxMessagesService, 'deleteMessageById').mockReturnValue(throwError(error));

      effects.deleteMessage$.subscribe((action) => {
        if (action.type === InboxMessagesActions.getError.type) {
          expect(action).toEqual(InboxMessagesActions.getError({ error }));
        }
      });

      tick(500);
    }));
  });

  describe('inboxMessagesUnreadCount$', () => {
    it('should trigger getUnreadInboxMessagesCountSuccess', (done) => {
      const unreadMessages = { amount: 5 };
      jest.spyOn(inboxMessagesService, 'getUnreadInboxMessagesCount').mockReturnValue(of(unreadMessages));
      actions$ = of(InboxMessagesActions.getUnreadInboxMessagesCount());

      effects.inboxMessagesUnreadCount$.subscribe((action) => {
        expect(action).toEqual(
          InboxMessagesActions.getUnreadInboxMessagesCountSuccess({ unreadInboxMessagesCount: unreadMessages.amount })
        );
        done();
      });
    });
  });

  describe('notificationClickedEvent$', () => {
    it('should sendNotificationClickedEvent and redirect', fakeAsync(() => {
      const mockAction = InboxMessagesActions.notificationClicked({ url: 'testUrl' });
      actions$ = of(mockAction);

      jest.spyOn(store$, 'select').mockReturnValue(of({ count: 0 }));

      effects.notificationClickedEvent$.subscribe(() => {
        return new Promise<void>((resolve) => {
          expect(inboxMessagesDatalayerService.sendNotificationClickedEvent).toHaveBeenCalledWith('testUrl', false);
          resolve();
        });
      });

      tick();
    }));
  });

  describe('inboxMessageClickedEvent$', () => {
    it('should send inboxMessageClickedEvent$ and redirect', fakeAsync(() => {
      const mockInboxMsg = createMockInboxMessages().pinnedInboxMessages[0];
      const mockAction = InboxMessagesActions.inboxMessageClicked({ message: mockInboxMsg });
      actions$ = of(mockAction);

      effects.inboxMessageClickedEvent$.subscribe(() => {
        return new Promise<void>((resolve) => {
          expect(inboxMessagesDatalayerService.sendInboxMessageClickedEvent).toHaveBeenCalledWith(
            TEST_PINNED_TITLE,
            'https://example.com',
            'Visit Example'
          );
          resolve();
        });
      });

      tick();
    }));
  });

  function createMockInboxMessages(): InboxMessages {
    const pinnedMessage: InboxMessage = {
      id: '1',
      content: createMockContent(
        'en',
        TEST_PINNED_TITLE,
        'This is the body of the pinned message.',
        'https://example.com',
        'Visit Example'
      ),
      messageAdded: { amount: 1, unit: 'day' },
      seen: false,
      read: false,
      pinned: true,
    };

    const otherMessage: InboxMessage = {
      id: '2',
      content: createMockContent(
        'en',
        TEST_OTHER_TITLE,
        'This is the body of the other message.',
        'https://example.com/other'
      ),
      messageAdded: { amount: 1, unit: 'day' },
      seen: false,
      read: false,
      pinned: false,
    };

    const unreadMessage: InboxMessage = {
      id: '2',
      content: createMockContent(
        'en',
        TEST_UNREAD_TITLE,
        'This is the body of the unread message.',
        'https://example.com/other'
      ),
      messageAdded: { amount: 1, unit: 'day' },
      seen: false,
      read: false,
      pinned: false,
    };

    return {
      pinnedInboxMessages: [pinnedMessage],
      otherInboxMessages: [otherMessage],
      unreadInboxMessages: [unreadMessage],
    };
  }

  function createMockContent(lang: string, title: string, body: string, link: string, name?: string): Content {
    return {
      lang,
      title,
      body,
      callToAction: {
        link,
        name,
      },
    };
  }
});
