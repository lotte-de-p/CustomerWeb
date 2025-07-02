import { Injectable } from '@angular/core';
import { MapperInterface } from '@telenet/ng-lib-shared';
import { RawInboxMessage } from '../entitities/raw-inbox-message.interface';
import { TranslateService } from '@ngx-translate/core';
import { LanguageEnum } from '@telenet/ng-lib-page';
import { Content, InboxMessage, InboxMessages } from '../entitities/inbox-message.interface';

@Injectable({
  providedIn: 'root',
})
export class InboxMessagesMapper implements MapperInterface<RawInboxMessage[], InboxMessages> {
  constructor(private readonly translateService: TranslateService) {}

  toModel(rawInboxMessages: RawInboxMessage[]): InboxMessages {
    const messages = rawInboxMessages.map((rawInboxMessage: RawInboxMessage) =>
      this.mapToInboxMessage(rawInboxMessage)
    );

    return {
      pinnedInboxMessages: this.filterPinnedMessages(messages),
      otherInboxMessages: this.filterOtherMessages(messages),
      unreadInboxMessages: this.filterUnreadMessages(messages),
    };
  }

  private mapToInboxMessage(rawInboxMessage: RawInboxMessage): InboxMessage {
    if (!rawInboxMessage || !rawInboxMessage.contents) return {} as InboxMessage;

    return {
      id: rawInboxMessage.id,
      seen: rawInboxMessage.seen,
      read: rawInboxMessage.read,
      pinned: rawInboxMessage.pinned,
      content: this.filterSelectedLanguageContent(rawInboxMessage.contents),
      messageAdded: rawInboxMessage.messageAdded,
    };
  }

  private filterSelectedLanguageContent(contents: Content[]): Content {
    const currentLanguage = this.translateService.currentLang || LanguageEnum.NL;
    return contents.find((content) => content?.lang?.toLowerCase() === currentLanguage) || ({} as Content);
  }

  private filterPinnedMessages(inboxMessages: InboxMessage[]): InboxMessage[] {
    return inboxMessages.filter((inboxMessage) => inboxMessage.pinned);
  }

  private filterOtherMessages(inboxMessages: InboxMessage[]): InboxMessage[] {
    return inboxMessages.filter((inboxMessage) => !inboxMessage.pinned);
  }

  private filterUnreadMessages(inboxMessages: InboxMessage[]): InboxMessage[] {
    return inboxMessages.filter((inboxMessage) => !inboxMessage.read);
  }
}
