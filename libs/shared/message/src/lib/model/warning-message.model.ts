import { AbstractMessage } from './abstract-message.model';
import { MessageType } from './message-type.enum';

export class WarningMessage extends AbstractMessage {
  constructor(messageGroupName: string, key: string, interpolateParams?: Record<string, unknown>) {
    super(MessageType.WARNING, messageGroupName, key, MessageType.ICON_WARNING, interpolateParams);
  }
}
