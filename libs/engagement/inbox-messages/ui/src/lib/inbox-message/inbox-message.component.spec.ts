import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InboxMessageComponent } from './inbox-message.component';
import { InboxMessage } from '@inbox-messages/data-access';

describe('InboxMessageComponent', () => {
  let component: InboxMessageComponent;
  let fixture: ComponentFixture<InboxMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InboxMessageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InboxMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit delete message event on handleDeleteMessage call', () => {
    jest.spyOn(component.deleteMessage, 'emit');
    const event = new MouseEvent('click');
    jest.spyOn(event, 'preventDefault');
    jest.spyOn(event, 'preventDefault');
    component.handleDeleteMessage(event, mockInboxMessage());

    expect(component.deleteMessage.emit).toHaveBeenCalledWith(mockInboxMessage());
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit inboxMessageClicked event on handleClick', () => {
    const message = mockInboxMessage();
    const event = new MouseEvent('click');

    jest.spyOn(component.inboxMessageClicked, 'emit');
    jest.spyOn(event, 'preventDefault');

    component.handleClick(event, message);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(component.inboxMessageClicked.emit).toHaveBeenCalledWith(message);
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
