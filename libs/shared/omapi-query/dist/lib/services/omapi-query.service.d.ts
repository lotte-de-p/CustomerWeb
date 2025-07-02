import { Observable } from 'rxjs';
import { ConfigService } from '@telenet/ng-lib-config';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '@telenet/ng-lib-message';
import { OmapiQueryHelper } from '../helpers/omapi-query.helper';
import { OmapiQueryCallConfig } from '../models/omapi-query-call.model';
import { OmapiEnrichService } from '@telenet/ng-lib-omapi';
import * as i0 from "@angular/core";
export declare class OmapiQueryService {
    private readonly http;
    private readonly configService;
    private readonly messageService;
    private readonly omapiQueryHelper;
    private readonly omapiEnrichService;
    constructor(http: HttpClient, configService: ConfigService, messageService: MessageService, omapiQueryHelper: OmapiQueryHelper, omapiEnrichService: OmapiEnrichService);
    doPost<T, G>(omapiQueryCallConfig: OmapiQueryCallConfig<T, G>): Observable<G>;
    doGet<T, G>(omapiQueryCallConfig: OmapiQueryCallConfig<T, G>): Observable<G>;
    private doRequest;
    private handleError;
    private getDetailedErrorCode;
    static ɵfac: i0.ɵɵFactoryDeclaration<OmapiQueryService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OmapiQueryService>;
}
//# sourceMappingURL=omapi-query.service.d.ts.map