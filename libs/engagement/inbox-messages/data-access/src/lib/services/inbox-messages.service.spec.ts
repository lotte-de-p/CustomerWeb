import { TestBed } from '@angular/core/testing';
import { firstValueFrom, of } from 'rxjs';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { MockProvider } from 'ng-mocks';
import { InboxMessagesService } from './inbox-messages.service';
import { InboxMessagesMapper } from '../mappers/inbox-messages.mapper';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { jest } from '@jest/globals';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { InboxMessage } from '../entitities/inbox-message.interface';

describe('InboxMessagesService', () => {
  let service: InboxMessagesService;
  let ocapiService: OcapiService;
  const messageGroup = 'inbox-messages';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        InboxMessagesService,
        MockProvider(OcapiService),
        TranslateService,
        InboxMessagesMapper,
        { provide: 'Window', useValue: {} },
      ],
      imports: [HttpClientTestingModule, TranslateModule.forRoot()],
    });

    service = TestBed.inject(InboxMessagesService);
    ocapiService = TestBed.inject(OcapiService);

    jest.spyOn(ocapiService, 'doGet').mockReturnValue(
      of({
        otherInboxMessages: createMockInboxMessages(false),
        pinnedInboxMessages: createMockInboxMessages(true),
      })
    );
  });

  it('should get inbox messages', async () => {
    const inboxMessages = await firstValueFrom(service.getAllInboxMessages());
    expect(inboxMessages.otherInboxMessages.length).toBe(1);
    expect(inboxMessages.otherInboxMessages[0].id).toBe('1');
    expect(inboxMessages.otherInboxMessages[0].seen).toBe(false);
    expect(inboxMessages.otherInboxMessages[0].read).toBe(false);
    expect(inboxMessages.otherInboxMessages[0].pinned).toBe(false);

    expect(inboxMessages.pinnedInboxMessages[0].pinned).toBe(true);

    expect(ocapiService.doGet).toHaveBeenCalledWith(
      new OcapiCallConfig(messageGroup, '/public/api/inbox-messages-service/v1/inbox-messages', expect.anything())
    );
  });

  it('should get unread inbox messages count', async () => {
    jest.spyOn(ocapiService, 'doGet').mockReturnValue(of(5));

    const unreadCount = await firstValueFrom(service.getUnreadInboxMessagesCount());
    expect(unreadCount).toBe(5);

    expect(ocapiService.doGet).toHaveBeenCalledWith(
      new OcapiCallConfig(messageGroup, '/public/api/inbox-messages-service/v1/inbox-messages/unread/amount')
    );
  });

  it('should mark messages as read by IDs', async () => {
    jest.spyOn(ocapiService, 'doPut').mockReturnValue(of('success'));

    const idsToMarkAsRead = ['1', '2', '3'];
    const result = await firstValueFrom(service.markMessagesAsReadByIds(idsToMarkAsRead));

    expect(result).toBe('success');

    expect(ocapiService.doPut).toHaveBeenCalledWith(
      new OcapiCallConfig(
        messageGroup,
        '/public/api/inbox-messages-service/v1/inbox-messages/read',
        expect.anything(),
        { ids: idsToMarkAsRead }
      )
    );
  });

  it('should delete message by id', async () => {
    const mockMessage = mockInboxMessage();
    jest.spyOn(ocapiService, 'doDelete').mockReturnValue(of('success'));

    const result = await firstValueFrom(service.deleteMessageById(mockMessage));

    expect(result).toBe('success');
    expect(ocapiService.doDelete).toHaveBeenCalledWith(
      new OcapiCallConfig(messageGroup, `/public/api/inbox-messages-service/v1/inbox-messages/${mockMessage.id}`)
    );
  });

  function createMockInboxMessages(pinned: boolean) {
    return [
      {
        id: '1',
        seen: false,
        read: false,
        pinned: pinned,
        contents: [
          { lang: 'en', title: 'Title 1', body: 'Body 1', callToAction: { link: 'Link 1' } },
          { lang: 'nl', title: 'Titel 1', body: 'Inhoud 1', callToAction: { link: 'Koppeling 1' } },
        ],
        messageAdded: { amount: 1, unit: 'day' },
      },
    ];
  }

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
});
