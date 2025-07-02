import { MessageType } from './model/message-type.enum';
import { AbstractMessage } from './model/abstract-message.model';
import * as i0 from "@angular/core";
export declare class MessageService {
    private messages;
    addMessage(message: AbstractMessage): void;
    getErrorMessages(messageGroupName: string): AbstractMessage[];
    getMessagesByGroupName(messageGroupName: string): AbstractMessage[];
    getMessagesByType(messageGroupName: string, type: MessageType): AbstractMessage[];
    clearErrorMessages(messageGroupName: string): void;
    clearMessagesByType(messageGroupName: string, type: MessageType): void;
    hasErrorMessages(messageGroupName: string): boolean;
    hasMessagesOfType(messageGroupName: string, type: MessageType): boolean;
    clearMessages(messageGroupName: string): void;
    getRegisteredGroupNames(): string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<MessageService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MessageService>;
}
//# sourceMappingURL=message.service.d.ts.map