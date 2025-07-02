import { Observable } from 'rxjs';
import { OmapiProduct } from '../models/omapi-product.model';
import { OmapiProductMapper } from '../mappers/omapi-product.mapper';
import { HttpClient } from '@angular/common/http';
import { UrlService } from '@telenet/ng-lib-page';
import { MessageService } from '@telenet/ng-lib-message';
import { RawOmapiProductInterface } from '../interfaces/raw-omapi-product.interface';
import { ConfigService } from '@telenet/ng-lib-config';
import { OmapiCacheService } from './cache/omapi-cache.service';
import * as i0 from "@angular/core";
export declare class OmapiProductService {
    private readonly http;
    private readonly urlService;
    private readonly messageService;
    private readonly omapiProductMapper;
    private readonly cacheService;
    private readonly configService;
    gatewayUrl?: string;
    private readonly log;
    private readonly FETCH_ERROR_PREFIX;
    constructor(http: HttpClient, urlService: UrlService, messageService: MessageService, omapiProductMapper: OmapiProductMapper, cacheService: OmapiCacheService<RawOmapiProductInterface>, configService: ConfigService);
    getProductByEPC(messageGroup: string, epc: string): Observable<OmapiProduct>;
    getRawProductByEndpoint(messageGroup: string, endpoint: string, silentlyHandleError?: boolean): Observable<RawOmapiProductInterface>;
    rawProductsFromEndpoints$(messageGroup: string, endpoints: string[], silentlyHandleError?: boolean): Observable<RawOmapiProductInterface[]>;
    getProductByEndpoint(messageGroup: string, endpoint: string): Observable<OmapiProduct>;
    getProductById(messageGroup: string, omapiId: string): Observable<OmapiProduct>;
    addConstituentsToOmapiResponse(rawOmapiResponse: RawOmapiProductInterface, messageGroup: string): Observable<RawOmapiProductInterface>;
    getOmapiProductUrl(omapiId: string): string;
    private doGet;
    private resolveConstituents;
    private resolveConstituent;
    private getProductEndpoint;
    private getHttpConfig;
    private handleError;
    private handleErrorSilent;
    static ɵfac: i0.ɵɵFactoryDeclaration<OmapiProductService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OmapiProductService>;
}
//# sourceMappingURL=omapi-product.service.d.ts.map