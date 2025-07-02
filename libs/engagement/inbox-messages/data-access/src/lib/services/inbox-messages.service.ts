import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { InboxMessagesMapper } from '../mappers/inbox-messages.mapper';
import { InboxMessage, InboxMessages } from '../entitities/inbox-message.interface';
import { RawInboxMessage } from '../entitities/raw-inbox-message.interface';
import { RawUnreadMessages } from '../entitities/raw-unread-messages.interface';
import { UnreadMessagesResponse } from '../entitities/unread-messages-response.interface';

@Injectable({
  providedIn: 'root',
})
export class InboxMessagesService {
  private readonly MESSAGE_GROUP = 'inbox-messages';
  private readonly INBOX_MESSAGES_API_ENDPOINT = '/public/api/inbox-messages-service/v1/inbox-messages';
  private readonly ENDPOINT_UNREAD_AMOUNT = `${this.INBOX_MESSAGES_API_ENDPOINT}/unread/amount`;
  private readonly ENDPOINT_READ_MESSAGES = `${this.INBOX_MESSAGES_API_ENDPOINT}/read`;

  constructor(
    private readonly ocapiService: OcapiService,
    private readonly inboxMessagesMapper: InboxMessagesMapper
  ) {}

  getAllInboxMessages(): Observable<InboxMessages> {
    const ocapiCallConfig = new OcapiCallConfig<RawInboxMessage[], InboxMessages>(
      this.MESSAGE_GROUP,
      this.INBOX_MESSAGES_API_ENDPOINT,
      this.inboxMessagesMapper
    );

    return this.ocapiService.doGet(ocapiCallConfig);
  }

  getUnreadInboxMessagesCount(): Observable<RawUnreadMessages> {
    const ocapiCallConfig = new OcapiCallConfig<RawUnreadMessages, RawUnreadMessages>(
      this.MESSAGE_GROUP,
      this.ENDPOINT_UNREAD_AMOUNT
    );

    return this.ocapiService.doGet(ocapiCallConfig);
  }

  markMessagesAsReadByIds(ids: string[]): Observable<string> {
    const unreadMessagesMapper = {
      toModel: (unreadMessagesResponse: UnreadMessagesResponse) => unreadMessagesResponse?.status,
    };

    const ocapiCallConfig = new OcapiCallConfig<UnreadMessagesResponse, string>(
      this.MESSAGE_GROUP,
      this.ENDPOINT_READ_MESSAGES,
      unreadMessagesMapper,
      { ids }
    );

    return this.ocapiService.doPut(ocapiCallConfig);
  }

  deleteMessageById(message: InboxMessage): Observable<string> {
    const url = `${this.INBOX_MESSAGES_API_ENDPOINT}/${message.id}`;
    const ocapiCallConfig = new OcapiCallConfig<UnreadMessagesResponse, string>(this.MESSAGE_GROUP, url);

    return this.ocapiService.doDelete(ocapiCallConfig);
  }
}
