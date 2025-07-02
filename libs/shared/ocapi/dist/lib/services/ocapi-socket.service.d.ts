import { ConfigService } from '@telenet/ng-lib-config';
import { Observable } from 'rxjs';
import { RxStomp } from '@stomp/rx-stomp';
import * as i0 from "@angular/core";
export declare class OcapiSocketService {
    readonly configService: ConfigService;
    baseUrl: string;
    isAnonymous: boolean;
    TOPIC_PREFIX: string;
    ANONYMOUS_TOPIC_PREFIX: string;
    stompClient: RxStomp;
    private isInitialised;
    constructor(configService: ConfigService);
    init(): void;
    setAnonymous(anonymous: boolean): void;
    getTopicPrefix(): string;
    initializeWebSocketConnection(): void;
    watchStompClientOnTopic(topic: string): Observable<unknown>;
    static ɵfac: i0.ɵɵFactoryDeclaration<OcapiSocketService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OcapiSocketService>;
}
//# sourceMappingURL=ocapi-socket.service.d.ts.map