import { Observable } from 'rxjs';
import { OmapiProductService } from './omapi-product.service';
import { OmapiProductMapper } from '../mappers';
import * as i0 from "@angular/core";
export declare class OmapiEnrichService {
    readonly omapiProductService: OmapiProductService;
    private readonly omapiProductMapper;
    constructor(omapiProductService: OmapiProductService, omapiProductMapper: OmapiProductMapper);
    enrichResponseWithOmapiData<T>(messageGroup: string, response: T): Observable<T>;
    private getOmapiObservables;
    private enrichConstituents;
    static ɵfac: i0.ɵɵFactoryDeclaration<OmapiEnrichService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OmapiEnrichService>;
}
//# sourceMappingURL=omapi-enrich.service.d.ts.map