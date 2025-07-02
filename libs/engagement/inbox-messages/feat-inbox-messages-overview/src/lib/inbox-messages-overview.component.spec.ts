import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { InboxMessagesOverviewComponent } from './inbox-messages-overview.component';
import { InboxMessage, InboxMessagesFacade } from '@inbox-messages/data-access';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TranslateModule } from '@ngx-translate/core';

describe('InboxMessagesOverviewComponent', () => {
  let component: InboxMessagesOverviewComponent;
  let fixture: ComponentFixture<InboxMessagesOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        InboxMessagesOverviewComponent,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        HttpClientTestingModule,
        TranslateModule.forRoot(),
      ],
      providers: [InboxMessagesFacade, { provide: 'Window', useValue: {} }],
    });

    fixture = TestBed.createComponent(InboxMessagesOverviewComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize inboxMessages$', () => {
    const inboxMessagesFacade = TestBed.inject(InboxMessagesFacade);
    jest.spyOn(inboxMessagesFacade, 'loadInboxMessages');

    component.initAfterLoggedIn();

    expect(inboxMessagesFacade.loadInboxMessages).toHaveBeenCalled();
  });

  it('should call deleteMessage facade', () => {
    const inboxMessagesFacade = TestBed.inject(InboxMessagesFacade);
    jest.spyOn(inboxMessagesFacade, 'deleteMessage');

    component.deleteMessage(mockInboxMessage());

    expect(inboxMessagesFacade.deleteMessage).toHaveBeenCalledWith(mockInboxMessage());
  });

  it('should call facade sendInboxMessageClickedEvent', () => {
    const inboxMessagesFacade = TestBed.inject(InboxMessagesFacade);
    jest.spyOn(inboxMessagesFacade, 'sendInboxMessageClickedEvent');

    component.handleInboxMessageClick(mockInboxMessage());

    expect(inboxMessagesFacade.sendInboxMessageClickedEvent).toHaveBeenCalledWith(mockInboxMessage());
  });

  it('should load inboxMessages$', () => {
    const inboxMessagesFacade = TestBed.inject(InboxMessagesFacade);
    jest.spyOn(inboxMessagesFacade, 'loadInboxMessages');

    component.handleErrorAction();

    expect(inboxMessagesFacade.loadInboxMessages).toHaveBeenCalled();
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
