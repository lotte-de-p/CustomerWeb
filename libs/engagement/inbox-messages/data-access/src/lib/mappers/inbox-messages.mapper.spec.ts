import { TestBed } from '@angular/core/testing';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { InboxMessagesMapper } from './inbox-messages.mapper';
import { RawInboxMessage } from '../entitities/raw-inbox-message.interface';

describe('InboxMessagesMapper', () => {
  let inboxMessagesMapper: InboxMessagesMapper;
  let translateService: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [InboxMessagesMapper, TranslateService],
    });

    inboxMessagesMapper = TestBed.inject(InboxMessagesMapper);
    translateService = TestBed.inject(TranslateService);

    jest.spyOn(translateService, 'instant');
  });

  it('should be created', () => {
    expect(inboxMessagesMapper).toBeTruthy();
  });

  it('should map raw inbox messages to pinned inbox messages', () => {
    const rawInboxMessages = createMockInboxMessages(true);
    const result = inboxMessagesMapper.toModel(rawInboxMessages);
    const content = { lang: 'nl', title: 'Title', body: 'Body', callToAction: { link: 'url' } };

    expect(result.pinnedInboxMessages.length).toBe(1);
    expect(result.pinnedInboxMessages[0].id).toBe('1');
    expect(result.pinnedInboxMessages[0].seen).toBe(false);
    expect(result.pinnedInboxMessages[0].read).toBe(false);
    expect(result.pinnedInboxMessages[0].pinned).toBe(true);
    expect(result.pinnedInboxMessages[0]?.messageAdded).toEqual({ amount: 1, unit: 'day' });
    expect(result.pinnedInboxMessages[0].content).toEqual(content);
  });

  it('should map raw inbox messages to unpinned inbox messages', () => {
    const rawInboxMessages = createMockInboxMessages(false);
    const result = inboxMessagesMapper.toModel(rawInboxMessages);
    const content = { lang: 'nl', title: 'Title', body: 'Body', callToAction: { link: 'url' } };

    expect(result.otherInboxMessages.length).toBe(1);
    expect(result.otherInboxMessages[0].id).toBe('1');
    expect(result.otherInboxMessages[0].seen).toBe(false);
    expect(result.otherInboxMessages[0].read).toBe(false);
    expect(result.otherInboxMessages[0].pinned).toBe(false);
    expect(result.otherInboxMessages[0]?.messageAdded).toEqual({ amount: 1, unit: 'day' });
    expect(result.otherInboxMessages[0].content).toEqual(content);
  });

  it('should map unread inbox messages', () => {
    const rawInboxMessages = createMockInboxMessages(false);
    const result = inboxMessagesMapper.toModel(rawInboxMessages);
    if (result.unreadInboxMessages) {
      expect(result.unreadInboxMessages?.length).toBe(1);
      expect(result.unreadInboxMessages[0].id).toBe('1');
    }
  });

  function createMockInboxMessages(pinned: boolean) {
    const rawInboxMessages: RawInboxMessage[] = [
      {
        id: '1',
        contents: [{ lang: 'nl', title: 'Title', body: 'Body', callToAction: { link: 'url' } }],
        messageAdded: { amount: 1, unit: 'day' },
        seen: false,
        read: false,
        pinned: pinned,
      },
    ];

    return rawInboxMessages;
  }
});
