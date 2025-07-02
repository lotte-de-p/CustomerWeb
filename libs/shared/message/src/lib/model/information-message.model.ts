import { AbstractMessage } from './abstract-message.model';
import { MessageType } from './message-type.enum';

export class InformationMessage extends AbstractMessage {
  constructor(messageGroupName: string, key: string, type: MessageType, interpolateParams?: Record<string, unknown>) {
    super(type, messageGroupName, key, MessageType.ICON_INFO, interpolateParams);
  }
}
