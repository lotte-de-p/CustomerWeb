import { HttpClient } from '@angular/common/http';
import { ConfigService } from '@telenet/ng-lib-config';
import { UrlService } from '@telenet/ng-lib-page';
import { MessageService } from '@telenet/ng-lib-message';
import { Observable } from 'rxjs';
import { RawOmapiPremiumInterface } from '../interfaces';
import { OmapiPremiumMapper } from '../mappers';
import { OmapiPremium } from '../models';
import { OmapiCacheService } from './cache/omapi-cache.service';
import * as i0 from "@angular/core";
export declare class OmapiPremiumService {
    private readonly http;
    private readonly omapiPremiumMapper;
    private readonly urlService;
    private readonly cacheService;
    private readonly configService;
    private readonly messageService;
    gatewayUrl: string;
    private readonly log;
    constructor(http: HttpClient, omapiPremiumMapper: OmapiPremiumMapper, urlService: UrlService, cacheService: OmapiCacheService<RawOmapiPremiumInterface>, configService: ConfigService, messageService: MessageService);
    getOmapiPremium(messageGroup: string, epc: string, showCustomError?: boolean, errorLabelKey?: string): Observable<OmapiPremium>;
    private handleError;
    private getPremiumEndpoint;
    private getHttpConfig;
    static ɵfac: i0.ɵɵFactoryDeclaration<OmapiPremiumService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OmapiPremiumService>;
}
//# sourceMappingURL=omapi-premium.service.d.ts.map