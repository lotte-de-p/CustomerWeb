import { Injectable } from '@angular/core';
import { MessageType } from '../model/message-type.enum';
import { Messages } from '../model/messages.model';
import { AbstractMessage } from '../model/abstract-message.model';
import { InformationMessage } from '../model/information-message.model';
import { WarningMessage } from '../model/warning-message.model';
import { ErrorMessage } from '../model/error-message.model';
import { SuccessMessage } from '../model/success-message.model';

@Injectable({
  providedIn: 'root',
})
export class MockMessageService {
  constructor() {
    this.addMessage(new SuccessMessage('message-group-1', 'success-1'));
    this.addMessage(new ErrorMessage('message-group-2', 'error-1'));
    this.addMessage(new WarningMessage('message-group-3', 'warning-1'));
    this.addMessage(new InformationMessage('message-group-4', 'information-1', MessageType.INFO));
    this.addMessage(new InformationMessage('message-group-5', 'information-warning-1', MessageType.WARNING));
  }

  private messages: Messages = {};

  addMessage(message: AbstractMessage): void {
    if (!this.messages[message.messageGroupName]) {
      this.messages[message.messageGroupName] = {
        [message.type]: [],
      };
    }
    if (!this.messages[message.messageGroupName][message.type]) {
      this.messages[message.messageGroupName][message.type] = [];
    }
    this.messages[message.messageGroupName][message.type].push(message);
  }

  getErrorMessages(messageGroupName: string): AbstractMessage[] {
    return this.getMessagesByType(messageGroupName, MessageType.ERROR);
  }

  getMessagesByGroupName(messageGroupName: string): AbstractMessage[] {
    const messages: AbstractMessage[] = [];
    if (this.hasMessagesOfType(messageGroupName, MessageType.ERROR)) {
      messages.push(this.getMessagesByType(messageGroupName, MessageType.ERROR)[0]);
    }
    if (this.hasMessagesOfType(messageGroupName, MessageType.WARNING)) {
      messages.push(this.getMessagesByType(messageGroupName, MessageType.WARNING)[0]);
    }
    if (this.hasMessagesOfType(messageGroupName, MessageType.SUCCESS)) {
      messages.push(this.getMessagesByType(messageGroupName, MessageType.SUCCESS)[0]);
    }
    if (this.hasMessagesOfType(messageGroupName, MessageType.INFO)) {
      messages.push(this.getMessagesByType(messageGroupName, MessageType.INFO)[0]);
    }
    return messages;
  }

  getMessagesByType(messageGroupName: string, type: MessageType): AbstractMessage[] {
    const messagesByGroupName = this.messages[messageGroupName];

    if (!messagesByGroupName) {
      return [];
    }

    return messagesByGroupName[type];
  }

  clearErrorMessages(messageGroupName: string) {
    return this.clearMessagesByType(messageGroupName, MessageType.ERROR);
  }

  clearMessagesByType(messageGroupName: string, type: MessageType) {
    if (!this.messages[messageGroupName]) {
      return;
    }
    this.messages[messageGroupName] = {
      [type]: [],
    };
  }

  hasErrorMessages(messageGroupName: string): boolean {
    return this.hasMessagesOfType(messageGroupName, MessageType.ERROR);
  }

  hasMessagesOfType(messageGroupName: string, type: MessageType): boolean {
    return this.getMessagesByType(messageGroupName, type)?.filter((m) => m.type === type).length > 0;
  }

  clearMessages(messageGroupName: string) {
    if (!this.messages[messageGroupName]) {
      return;
    }
    this.messages[messageGroupName] = {};
  }

  getRegisteredGroupNames(): string[] {
    return Object.keys(this.messages);
  }
}
