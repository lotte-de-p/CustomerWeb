import { AbstractMessage } from './abstract-message.model';
import { MessageType } from './message-type.enum';

export class InfoFlowMessage extends AbstractMessage {
  constructor(messageGroupName: string, key: string, interpolateParams?: Record<string, unknown>) {
    super(MessageType.INFO, messageGroupName, key, MessageType.ICON_INFO, interpolateParams);
  }
}
