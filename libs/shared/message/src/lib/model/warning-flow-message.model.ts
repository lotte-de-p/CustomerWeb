import { AbstractMessage } from './abstract-message.model';
import { MessageType } from './message-type.enum';

export class WarningFlowMessage extends AbstractMessage {
  constructor(messageGroupName: string, key: string, interpolateParams?: Record<string, unknown>) {
    super(MessageType.WARNING, messageGroupName, key, MessageType.INFORMATION_WARNING, interpolateParams);
  }
}
