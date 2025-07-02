import { MessageType } from './message-type.enum';

export abstract class AbstractMessage {
  private readonly _messageGroupName: string;
  private readonly _key: string;
  private readonly _type: MessageType;
  private readonly _subtype?: MessageType;
  private readonly _interpolateParams?: Record<string, unknown>;

  protected constructor(
    type: MessageType,
    messageGroupName: string,
    key: string,
    subtype?: MessageType,
    interpolateParams?: Record<string, unknown>
  ) {
    this._messageGroupName = messageGroupName;
    this._key = key;
    this._type = type;
    this._subtype = subtype;
    this._interpolateParams = interpolateParams;
  }

  get messageGroupName(): string {
    return this._messageGroupName;
  }

  get key(): string {
    return this._key;
  }

  get type(): MessageType {
    return this._type;
  }

  get subtype(): MessageType | undefined {
    return this._subtype;
  }

  get interpolateParams(): Record<string, unknown> | undefined {
    return this._interpolateParams;
  }

  getMessageLabel(): string {
    return 'ng.' + this.messageGroupName + '.' + this.getMessageSuffix();
  }

  getMessageSuffix(): string {
    return this.key + '-' + this.type;
  }
}
