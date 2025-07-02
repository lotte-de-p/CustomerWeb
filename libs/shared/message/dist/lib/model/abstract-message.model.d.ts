import { MessageType } from './message-type.enum';
export declare abstract class AbstractMessage {
    private readonly _messageGroupName;
    private readonly _key;
    private readonly _type;
    private readonly _subtype?;
    private readonly _interpolateParams?;
    protected constructor(type: MessageType, messageGroupName: string, key: string, subtype?: MessageType, interpolateParams?: Record<string, unknown>);
    get messageGroupName(): string;
    get key(): string;
    get type(): MessageType;
    get subtype(): MessageType | undefined;
    get interpolateParams(): Record<string, unknown> | undefined;
    getMessageLabel(): string;
    getMessageSuffix(): string;
}
//# sourceMappingURL=abstract-message.model.d.ts.map