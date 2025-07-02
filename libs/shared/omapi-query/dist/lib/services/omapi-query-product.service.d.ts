import { HttpClient } from '@angular/common/http';
import { UrlService } from '@telenet/ng-lib-page';
import { Observable } from 'rxjs';
import { CacheService } from './cache/cache.service';
import { RawOmapiQueryProductInterface } from '../interfaces/raw-omapi-query-product.interface';
import { MessageService } from '@telenet/ng-lib-message';
import * as i0 from "@angular/core";
export declare class OmapiQueryProductService {
    private readonly http;
    private readonly cacheService;
    private readonly urlService;
    private readonly messageService;
    private readonly log;
    constructor(http: HttpClient, cacheService: CacheService, urlService: UrlService, messageService: MessageService);
    getRawQueryProductByEndpoint(messageGroup: string, endpoint: string): Observable<RawOmapiQueryProductInterface>;
    rawQueryProductsFromEndpoints$(messageGroup: string, endpoints: string[]): Observable<RawOmapiQueryProductInterface[]>;
    private getHttpConfig;
    private handleError;
    static ɵfac: i0.ɵɵFactoryDeclaration<OmapiQueryProductService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OmapiQueryProductService>;
}
//# sourceMappingURL=omapi-query-product.service.d.ts.map