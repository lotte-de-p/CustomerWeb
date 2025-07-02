import { AbstractMessage } from './abstract-message.model';
import { MessageType } from './message-type.enum';

export class ErrorFlowMessage extends AbstractMessage {
  constructor(messageGroupName: string, key: string) {
    super(MessageType.ERROR, messageGroupName, key, MessageType.ICON_ERROR);
  }
}
