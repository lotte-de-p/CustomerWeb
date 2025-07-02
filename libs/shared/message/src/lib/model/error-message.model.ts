import { AbstractMessage } from './abstract-message.model';
import { MessageType } from './message-type.enum';

export class ErrorMessage extends AbstractMessage {
  constructor(messageGroupName: string, key: string, interpolateParams?: Record<string, unknown>) {
    super(MessageType.ERROR, messageGroupName, key, MessageType.ICON_ERROR, interpolateParams);
  }
}
