import { AbstractMessage } from './abstract-message.model';
import { MessageType } from './message-type.enum';

export class SuccessMessage extends AbstractMessage {
  constructor(messageGroupName: string, key: string) {
    super(MessageType.SUCCESS, messageGroupName, key, MessageType.ICON_SUCCESS);
  }
}
