import { AbstractMessage } from './abstract-message.model';
import { MessageType } from './message-type.enum';

export class SuccessFlowMessageModel extends AbstractMessage {
  constructor(messageGroupName: string, key: string, interpolateParams?: Record<string, unknown>) {
    super(MessageType.SUCCESS, messageGroupName, key, MessageType.SUCCESS, interpolateParams);
  }
}
