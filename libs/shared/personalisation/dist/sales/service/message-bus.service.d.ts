import { ReplaySubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class MessageBusService {
    messageBus$: ReplaySubject<Message>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MessageBusService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MessageBusService>;
}
export interface Message {
    type: string;
    payloadAsJson: string;
}
//# sourceMappingURL=message-bus.service.d.ts.map