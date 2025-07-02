import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TestBed } from '@angular/core/testing';
import { InboxMessagesFacade } from './inbox-messages.facade';
import { InboxMessagesState } from '../+state/inbox-messages.state';
import {
  deleteInboxMessage,
  getInboxMessages,
  getUnreadInboxMessagesCount,
  notificationClicked,
  inboxMessageClicked,
} from '../+state/inbox-messages.actions';
import { InboxMessage } from '../entitities/inbox-message.interface';
import { InboxMessagesDatalayerService } from '../services/inbox-messages-datalayer.service';

describe('InboxMessagesFacade', () => {
  let mockStore$: MockStore<InboxMessagesState>;
  let facade: InboxMessagesFacade;
  let inboxMessagesDatalayerService: InboxMessagesDatalayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore(),
        InboxMessagesFacade,
        InboxMessagesDatalayerService,
        { provide: 'Window', useValue: window },
      ],
    });

    mockStore$ = TestBed.inject(MockStore);
    facade = TestBed.inject(InboxMessagesFacade);
    inboxMessagesDatalayerService = TestBed.inject(InboxMessagesDatalayerService);

    jest.spyOn(mockStore$, 'dispatch');
  });

  it('should dispatch getInboxMessages action to store', (done) => {
    facade.loadInboxMessages();
    expect(mockStore$.dispatch).toHaveBeenCalledWith(getInboxMessages());
    done();
  });

  it('should dispatch getUnreadInboxMessagesCount action to store', (done) => {
    facade.loadUnreadInboxMessagesCount();
    expect(mockStore$.dispatch).toHaveBeenCalledWith(getUnreadInboxMessagesCount());
    done();
  });

  it('should dispatch notificationClicked action to store', (done) => {
    const url = 'testUrl';
    facade.sendNotificationClickedEvent('testUrl');
    expect(mockStore$.dispatch).toHaveBeenCalledWith(notificationClicked({ url }));
    done();
  });

  it('should dispatch notificationClicked action to store', (done) => {
    facade.sendInboxMessageClickedEvent(mockInboxMessage());
    expect(mockStore$.dispatch).toHaveBeenCalledWith(inboxMessageClicked({ message: mockInboxMessage() }));
    done();
  });

  it('should dispatch deleteMessage action to store', (done) => {
    facade.deleteMessage(mockInboxMessage());
    expect(mockStore$.dispatch).toHaveBeenCalledWith(deleteInboxMessage({ message: mockInboxMessage() }));
    done();
  });

  it('should initiazlize datalayer', () => {
    jest.spyOn(inboxMessagesDatalayerService, 'initDataLayer');
    facade.initDataLayer();
    expect(inboxMessagesDatalayerService.initDataLayer).toHaveBeenCalled();
  });
});

function mockInboxMessage(): InboxMessage {
  const mockMessage: InboxMessage = {
    id: '1',
    content: {
      lang: 'en',
      title: 'Pinned Message Title',
      body: 'This is the body of the pinned message.',
      callToAction: {
        link: 'https://example.com',
        name: 'Visit Example',
      },
    },
    messageAdded: { amount: 1, unit: 'day' },
    seen: false,
    read: false,
    pinned: true,
  };

  return mockMessage;
}
