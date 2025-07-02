import { Observable } from 'rxjs';
import { NBARequestParameters } from '../models/nba-request-parameters';
import { NBAList } from '../models/nba-list.model';
import { LoginService, OcapiService } from '@telenet/ng-lib-ocapi';
import { NBAListMapper } from '../mappers/nba-list.mapper';
import * as i0 from "@angular/core";
export interface ContextHubConstants {
    ContextHub: {
        Constants: {
            PROP_ENABLE_PEGA_PERSONALIZATION: string;
        };
    };
}
export declare class PegaService {
    private readonly window;
    private readonly nbaRequestParameters;
    private readonly nbaListMapper;
    private readonly ocapiService;
    private readonly loginService;
    private readonly log;
    constructor(window: ContextHubConstants, nbaRequestParameters: NBARequestParameters, nbaListMapper: NBAListMapper, ocapiService: OcapiService, loginService: LoginService);
    getNBAList(): Observable<NBAList>;
    private getNBAFromRequest;
    private getNBAFromPegaAPI;
    private getAuthenticatedPegaNBAList;
    private getPegaNBAList;
    private handlePegaNbaError;
    private getServiceURI;
    static ɵfac: i0.ɵɵFactoryDeclaration<PegaService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PegaService>;
}
//# sourceMappingURL=pega.service.d.ts.map