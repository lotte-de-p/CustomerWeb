import { Injectable } from '@angular/core';
import { map as lodashMap } from 'lodash-es';
import { forkJoin, of, throwError } from 'rxjs';
import { catchError, map, mergeMap, take } from 'rxjs/operators';
import { ErrorMessage } from '@telenet/ng-lib-message';
import { ConfigConstants } from '@telenet/ng-lib-config';
import { LogFactory } from '@telenet/ng-lib-shared';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@telenet/ng-lib-page";
import * as i3 from "@telenet/ng-lib-message";
import * as i4 from "../mappers/omapi-product.mapper";
import * as i5 from "./cache/omapi-cache.service";
import * as i6 from "@telenet/ng-lib-config";
export class OmapiProductService {
    http;
    urlService;
    messageService;
    omapiProductMapper;
    cacheService;
    configService;
    gatewayUrl;
    log = LogFactory.createLogger(OmapiProductService);
    FETCH_ERROR_PREFIX = 'An error occurred while trying to fetch ';
    constructor(http, urlService, messageService, omapiProductMapper, cacheService, configService) {
        this.http = http;
        this.urlService = urlService;
        this.messageService = messageService;
        this.omapiProductMapper = omapiProductMapper;
        this.cacheService = cacheService;
        this.configService = configService;
    }
    getProductByEPC(messageGroup, epc) {
        const endpoint = this.getProductEndpoint(epc);
        return this.http.get(endpoint, this.getHttpConfig()).pipe(take(1), catchError((error) => this.handleError(error, messageGroup)), map((response) => {
            return this.omapiProductMapper.toModel(response);
        }));
    }
    getRawProductByEndpoint(messageGroup, endpoint, silentlyHandleError = false) {
        if (!this.cacheService.get(endpoint)) {
            this.cacheService.add(endpoint, this.http.get(endpoint, this.getHttpConfig()));
        }
        return this.cacheService.get(endpoint).pipe(take(1), catchError((error) => silentlyHandleError ? this.handleErrorSilent(error, messageGroup) : this.handleError(error, messageGroup)), mergeMap((response) => {
            return this.addConstituentsToOmapiResponse(response, messageGroup);
        }), map((response) => {
            return response;
        }));
    }
    rawProductsFromEndpoints$(messageGroup, endpoints, silentlyHandleError = false) {
        return forkJoin(lodashMap(endpoints, (endpoint) => this.getRawProductByEndpoint(messageGroup, endpoint, silentlyHandleError))).pipe(map((omapiResponses) => omapiResponses.filter((omapiResponse) => omapiResponse !== undefined)));
    }
    getProductByEndpoint(messageGroup, endpoint) {
        return this.doGet(messageGroup, endpoint);
    }
    // to do cleanup (method name getProductById), maybe method for the hardcoded url
    getProductById(messageGroup, omapiId) {
        return this.doGet(messageGroup, this.getOmapiProductUrl(omapiId));
    }
    addConstituentsToOmapiResponse(rawOmapiResponse, messageGroup) {
        if (rawOmapiResponse?.product &&
            rawOmapiResponse.product.characteristics &&
            rawOmapiResponse.product.characteristics.constituents) {
            return this.resolveConstituents(rawOmapiResponse.product.characteristics.constituents, messageGroup).pipe(map((response) => {
                if (rawOmapiResponse?.product?.characteristics) {
                    rawOmapiResponse.product.characteristics.constituents = response;
                }
                return rawOmapiResponse;
            }));
        }
        else {
            return of(rawOmapiResponse);
        }
    }
    getOmapiProductUrl(omapiId) {
        return this.configService.getConfig(ConfigConstants.OMAPI_URL) + '/public/product/' + omapiId;
    }
    doGet(messageGroup, endpoint) {
        if (!this.cacheService.get(endpoint)) {
            const httpObservable$ = this.http.get(endpoint, this.getHttpConfig());
            this.cacheService.add(endpoint, httpObservable$);
        }
        return this.cacheService.get(endpoint).pipe(catchError((error) => this.handleError(error, messageGroup)), map((response) => {
            return this.omapiProductMapper.toModel(response);
        }));
    }
    resolveConstituents(constituents, messageGroup) {
        return forkJoin(lodashMap(constituents, (constituent) => this.resolveConstituent(constituent, messageGroup)));
    }
    resolveConstituent(constituent, messageGroup) {
        return forkJoin({
            specurl: of(constituent.specurl),
            type: of(constituent.type),
            rawOmapi: this.getRawProductByEndpoint(messageGroup, constituent.specurl, false),
        });
    }
    getProductEndpoint(epc) {
        return `${this.gatewayUrl}/omapi/public/product/${epc}`;
    }
    getHttpConfig() {
        return {
            headers: {
                'x-alt-referer': this.urlService.getCurrentUrl(),
                'X-Requested-With': 'XMLHttpRequest',
            },
            timeout: 10000,
            cache: true,
        };
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleError(error, messageGroup) {
        if (error.status !== 410) {
            this.messageService.addMessage(new ErrorMessage(messageGroup, 'omapi-' + error.status));
        }
        this.log.logError(this.FETCH_ERROR_PREFIX + messageGroup, error);
        return throwError(() => this.FETCH_ERROR_PREFIX + messageGroup);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleErrorSilent(error, messageGroup) {
        if (error.status !== 410) {
            this.messageService.addMessage(new ErrorMessage(messageGroup, 'omapi-' + error.status));
        }
        this.log.logError(this.FETCH_ERROR_PREFIX + messageGroup, error);
        return of(undefined);
    }
    static ɵfac = function OmapiProductService_Factory(t) { return new (t || OmapiProductService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.UrlService), i0.ɵɵinject(i3.MessageService), i0.ɵɵinject(i4.OmapiProductMapper), i0.ɵɵinject(i5.OmapiCacheService), i0.ɵɵinject(i6.ConfigService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: OmapiProductService, factory: OmapiProductService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OmapiProductService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.HttpClient }, { type: i2.UrlService }, { type: i3.MessageService }, { type: i4.OmapiProductMapper }, { type: i5.OmapiCacheService }, { type: i6.ConfigService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib21hcGktcHJvZHVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9zZXJ2aWNlcy9vbWFwaS1wcm9kdWN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsR0FBRyxJQUFJLFNBQVMsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFjLEVBQUUsRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDNUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBS2pFLE9BQU8sRUFBRSxZQUFZLEVBQWtCLE1BQU0seUJBQXlCLENBQUM7QUFFdkUsT0FBTyxFQUFFLGVBQWUsRUFBaUIsTUFBTSx3QkFBd0IsQ0FBQztBQUV4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7O0FBS3BELE1BQU0sT0FBTyxtQkFBbUI7SUFNWDtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFWWixVQUFVLENBQVU7SUFDVixHQUFHLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ25ELGtCQUFrQixHQUFHLDBDQUEwQyxDQUFDO0lBRWpGLFlBQ21CLElBQWdCLEVBQ2hCLFVBQXNCLEVBQ3RCLGNBQThCLEVBQzlCLGtCQUFzQyxFQUN0QyxZQUF5RCxFQUN6RCxhQUE0QjtRQUw1QixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsaUJBQVksR0FBWixZQUFZLENBQTZDO1FBQ3pELGtCQUFhLEdB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OERBQThEO0lBQ3RELFdBQVcsQ0FBQyxLQUF3QixFQUFFLFlBQW9CO1FBQ2hFLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLFlBQVksQ0FBQyxZQUFZLEVBQUUsUUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzFGLENBQUM7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pFLE9BQU8sVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxZQUFZLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsOERBQThEO0lBQ3RELGlCQUFpQixDQUFDLEtBQXdCLEVBQUUsWUFBb0I7UUFDdEUsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksWUFBWSxDQUFDLFlBQVksRUFBRSxRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDMUYsQ0FBQztRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDakUsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkIsQ0FBQzs2RUEzSlUsbUJBQW1CO2dFQUFuQixtQkFBbUIsV0FBbkIsbUJBQW1CLG1CQUZsQixNQUFNOztpRkFFUCxtQkFBbUI7Y0FIL0IsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbWFwIGFzIGxvZGFzaE1hcCB9IGZyb20gJ2xvZGFzaC1lcyc7XG5pbXBvcnQgeyBmb3JrSm9pbiwgT2JzZXJ2YWJsZSwgb2YsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgbWVyZ2VNYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPbWFwaVByb2R1Y3QgfSBmcm9tICcuLi9tb2RlbHMvb21hcGktcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQgeyBPbWFwaVByb2R1Y3RNYXBwZXIgfSBmcm9tICcuLi9tYXBwZXJzL29tYXBpLXByb2R1Y3QubWFwcGVyJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgVXJsU2VydmljZSB9IGZyb20gJ0B0ZWxlbmV0L25nLWxpYi1wYWdlJztcbmltcG9ydCB7IEVycm9yTWVzc2FnZSwgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICdAdGVsZW5ldC9uZy1saWItbWVzc2FnZSc7XG5pbXBvcnQgeyBSYXdDb25zdGl0dWVudEludGVyZmFjZSwgUmF3T21hcGlQcm9kdWN0SW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9yYXctb21hcGktcHJvZHVjdC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ29uZmlnQ29uc3RhbnRzLCBDb25maWdTZXJ2aWNlIH0gZnJvbSAnQHRlbGVuZXQvbmctbGliLWNvbmZpZyc7XG5pbXBvcnQgeyBPbWFwaUNhY2hlU2VydmljZSB9IGZyb20gJy4vY2FjaGUvb21hcGktY2FjaGUuc2VydmljZSc7XG5pbXBvcnQgeyBMb2dGYWN0b3J5IH0gZnJvbSAnQHRlbGVuZXQvbmctbGliLXNoYXJlZCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBPbWFwaVByb2R1Y3RTZXJ2aWNlIHtcbiAgcHVibGljIGdhdGV3YXlVcmw/OiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgbG9nID0gTG9nRmFjdG9yeS5jcmVhdGVMb2dnZXIoT21hcGlQcm9kdWN0U2VydmljZSk7XG4gIHByaXZhdGUgcmVhZG9ubHkgRkVUQ0hfRVJST1JfUFJFRklYID0gJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIHRyeWluZyB0byBmZXRjaCAnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIHJlYWRvbmx5IHVybFNlcnZpY2U6IFVybFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBvbWFwaVByb2R1Y3RNYXBwZXI6IE9tYXBpUHJvZHVjdE1hcHBlcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNhY2hlU2VydmljZTogT21hcGlDYWNoZVNlcnZpY2U8UmF3T21hcGlQcm9kdWN0SW50ZXJmYWNlPixcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIGdldFByb2R1Y3RCeUVQQyhtZXNzYWdlR3JvdXA6IHN0cmluZywgZXBjOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9tYXBpUHJvZHVjdD4ge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gdGhpcy5nZXRQcm9kdWN0RW5kcG9pbnQoZXBjKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChlbmRwb2ludCwgdGhpcy5nZXRIdHRwQ29uZmlnKCkpLnBpcGUoXG4gICAgICB0YWtlKDEpLFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB0aGlzLmhhbmRsZUVycm9yKGVycm9yLCBtZXNzYWdlR3JvdXApKSxcbiAgICAgIG1hcCgocmVzcG9uc2U6IFJhd09tYXBpUHJvZHVjdEludGVyZmFjZSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5vbWFwaVByb2R1Y3RNYXBwZXIudG9Nb2RlbChyZXNwb25zZSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRSYXdQcm9kdWN0QnlFbmRwb2ludChcbiAgICBtZXNzYWdlR3JvdXA6IHN0cmluZyxcbiAgICBlbmRwb2ludDogc3RyaW5nLFxuICAgIHNpbGVudGx5SGFuZGxlRXJyb3IgPSBmYWxzZVxuICApOiBPYnNlcnZhYmxlPFJhd09tYXBpUHJvZHVjdEludGVyZmFjZT4ge1xuICAgIGlmICghdGhpcy5jYWNoZVNlcnZpY2UuZ2V0KGVuZHBvaW50KSkge1xuICAgICAgdGhpcy5jYWNoZVNlcnZpY2UuYWRkKGVuZHBvaW50LCB0aGlzLmh0dHAuZ2V0KGVuZHBvaW50LCB0aGlzLmdldEh0dHBDb25maWcoKSkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jYWNoZVNlcnZpY2UuZ2V0KGVuZHBvaW50KS5waXBlKFxuICAgICAgdGFrZSgxKSxcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT5cbiAgICAgICAgc2lsZW50bHlIYW5kbGVFcnJvciA/IHRoaXMuaGFuZGxlRXJyb3JTaWxlbnQoZXJyb3IsIG1lc3NhZ2VHcm91cCkgOiB0aGlzLmhhbmRsZUVycm9yKGVycm9yLCBtZXNzYWdlR3JvdXApXG4gICAgICApLFxuICAgICAgbWVyZ2VNYXAoKHJlc3BvbnNlOiBSYXdPbWFwaVByb2R1Y3RJbnRlcmZhY2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkQ29uc3RpdHVlbnRzVG9PbWFwaVJlc3BvbnNlKHJlc3BvbnNlLCBtZXNzYWdlR3JvdXApO1xuICAgICAgfSksXG4gICAgICBtYXAoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHJhd1Byb2R1Y3RzRnJvbUVuZHBvaW50cyQoXG4gICAgbWVzc2FnZUdyb3VwOiBzdHJpbmcsXG4gICAgZW5kcG9pbnRzOiBzdHJpbmdbXSxcbiAgICBzaWxlbnRseUhhbmRsZUVycm9yID0gZmFsc2VcbiAgKTogT2JzZXJ2YWJsZTxSYXdPbWFwaVByb2R1Y3RJbnRlcmZhY2VbXT4ge1xuICAgIHJldHVybiBmb3JrSm9pbihcbiAgICAgIGxvZGFzaE1hcChlbmRwb2ludHMsIChlbmRwb2ludCkgPT4gdGhpcy5nZXRSYXdQcm9kdWN0QnlFbmRwb2ludChtZXNzYWdlR3JvdXAsIGVuZHBvaW50LCBzaWxlbnRseUhhbmRsZUVycm9yKSlcbiAgICApLnBpcGUobWFwKChvbWFwaVJlc3BvbnNlcykgPT4gb21hcGlSZXNwb25zZXMuZmlsdGVyKChvbWFwaVJlc3BvbnNlKSA9PiBvbWFwaVJlc3BvbnNlICE9PSB1bmRlZmluZWQpKSk7XG4gIH1cblxuICBnZXRQcm9kdWN0QnlFbmRwb2ludChtZXNzYWdlR3JvdXA6IHN0cmluZywgZW5kcG9pbnQ6IHN0cmluZyk6IE9ic2VydmFibGU8T21hcGlQcm9kdWN0PiB7XG4gICAgcmV0dXJuIHRoaXMuZG9HZXQobWVzc2FnZUdyb3VwLCBlbmRwb2ludCk7XG4gIH1cblxuICAvLyB0byBkbyBjbGVhbnVwIChtZXRob2QgbmFtZSBnZXRQcm9kdWN0QnlJZCksIG1heWJlIG1ldGhvZCBmb3IgdGhlIGhhcmRjb2RlZCB1cmxcbiAgZ2V0UHJvZHVjdEJ5SWQobWVzc2FnZUdyb3VwOiBzdHJpbmcsIG9tYXBpSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8T21hcGlQcm9kdWN0PiB7XG4gICAgcmV0dXJuIHRoaXMuZG9HZXQobWVzc2FnZUdyb3VwLCB0aGlzLmdldE9tYXBpUHJvZHVjdFVybChvbWFwaUlkKSk7XG4gIH1cblxuICBhZGRDb25zdGl0dWVudHNUb09tYXBpUmVzcG9uc2UoXG4gICAgcmF3T21hcGlSZXNwb25zZTogUmF3T21hcGlQcm9kdWN0SW50ZXJmYWNlLFxuICAgIG1lc3NhZ2VHcm91cDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8UmF3T21hcGlQcm9kdWN0SW50ZXJmYWNlPiB7XG4gICAgaWYgKFxuICAgICAgcmF3T21hcGlSZXNwb25zZT8ucHJvZHVjdCAmJlxuICAgICAgcmF3T21hcGlSZXNwb25zZS5wcm9kdWN0LmNoYXJhY3RlcmlzdGljcyAmJlxuICAgICAgcmF3T21hcGlSZXNwb25zZS5wcm9kdWN0LmNoYXJhY3RlcmlzdGljcy5jb25zdGl0dWVudHNcbiAgICApIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc29sdmVDb25zdGl0dWVudHMocmF3T21hcGlSZXNwb25zZS5wcm9kdWN0LmNoYXJhY3RlcmlzdGljcy5jb25zdGl0dWVudHMsIG1lc3NhZ2VHcm91cCkucGlwZShcbiAgICAgICAgbWFwKChyZXNwb25zZTogUmF3Q29uc3RpdHVlbnRJbnRlcmZhY2VbXSkgPT4ge1xuICAgICAgICAgIGlmIChyYXdPbWFwaVJlc3BvbnNlPy5wcm9kdWN0Py5jaGFyYWN0ZXJpc3RpY3MpIHtcbiAgICAgICAgICAgIHJhd09tYXBpUmVzcG9uc2UucHJvZHVjdC5jaGFyYWN0ZXJpc3RpY3MuY29uc3RpdHVlbnRzID0gcmVzcG9uc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByYXdPbWFwaVJlc3BvbnNlO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9mKHJhd09tYXBpUmVzcG9uc2UpO1xuICAgIH1cbiAgfVxuXG4gIGdldE9tYXBpUHJvZHVjdFVybChvbWFwaUlkOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnKENvbmZpZ0NvbnN0YW50cy5PTUFQSV9VUkwpICsgJy9wdWJsaWMvcHJvZHVjdC8nICsgb21hcGlJZDtcbiAgfVxuXG4gIHByaXZhdGUgZG9HZXQobWVzc2FnZUdyb3VwOiBzdHJpbmcsIGVuZHBvaW50OiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9tYXBpUHJvZHVjdD4ge1xuICAgIGlmICghdGhpcy5jYWNoZVNlcnZpY2UuZ2V0KGVuZHBvaW50KSkge1xuICAgICAgY29uc3QgaHR0cE9ic2VydmFibGUkID0gdGhpcy5odHRwLmdldChlbmRwb2ludCwgdGhpcy5nZXRIdHRwQ29uZmlnKCkpO1xuICAgICAgdGhpcy5jYWNoZVNlcnZpY2UuYWRkKGVuZHBvaW50LCBodHRwT2JzZXJ2YWJsZSQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNhY2hlU2VydmljZS5nZXQoZW5kcG9pbnQpLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IsIG1lc3NhZ2VHcm91cCkpLFxuICAgICAgbWFwKChyZXNwb25zZTogUmF3T21hcGlQcm9kdWN0SW50ZXJmYWNlKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLm9tYXBpUHJvZHVjdE1hcHBlci50b01vZGVsKHJlc3BvbnNlKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzb2x2ZUNvbnN0aXR1ZW50cyhcbiAgICBjb25zdGl0dWVudHM6IFJhd0NvbnN0aXR1ZW50SW50ZXJmYWNlW10sXG4gICAgbWVzc2FnZUdyb3VwOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxSYXdDb25zdGl0dWVudEludGVyZmFjZVtdPiB7XG4gICAgcmV0dXJuIGZvcmtKb2luKGxvZGFzaE1hcChjb25zdGl0dWVudHMsIChjb25zdGl0dWVudCkgPT4gdGhpcy5yZXNvbHZlQ29uc3RpdHVlbnQoY29uc3RpdHVlbnQsIG1lc3NhZ2VHcm91cCkpKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzb2x2ZUNvbnN0aXR1ZW50KFxuICAgIGNvbnN0aXR1ZW50OiBSYXdDb25zdGl0dWVudEludGVyZmFjZSxcbiAgICBtZXNzYWdlR3JvdXA6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPFJhd0NvbnN0aXR1ZW50SW50ZXJmYWNlPiB7XG4gICAgcmV0dXJuIGZvcmtKb2luKHtcbiAgICAgIHNwZWN1cmw6IG9mKGNvbnN0aXR1ZW50LnNwZWN1cmwpLFxuICAgICAgdHlwZTogb2YoY29uc3RpdHVlbnQudHlwZSksXG4gICAgICByYXdPbWFwaTogdGhpcy5nZXRSYXdQcm9kdWN0QnlFbmRwb2ludChtZXNzYWdlR3JvdXAsIGNvbnN0aXR1ZW50LnNwZWN1cmwsIGZhbHNlKSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UHJvZHVjdEVuZHBvaW50KGVwYzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dGhpcy5nYXRld2F5VXJsfS9vbWFwaS9wdWJsaWMvcHJvZHVjdC8ke2VwY31gO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRIdHRwQ29uZmlnKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICd4LWFsdC1yZWZlcmVyJzogdGhpcy51cmxTZXJ2aWNlLmdldEN1cnJlbnRVcmwoKSxcbiAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnLFxuICAgICAgfSxcbiAgICAgIHRpbWVvdXQ6IDEwMDAwLFxuICAgICAgY2FjaGU6IHRydWUsXG4gICAgfTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlLCBtZXNzYWdlR3JvdXA6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgaWYgKGVycm9yLnN0YXR1cyAhPT0gNDEwKSB7XG4gICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZE1lc3NhZ2UobmV3IEVycm9yTWVzc2FnZShtZXNzYWdlR3JvdXAsICdvbWFwaS0nICsgZXJyb3Iuc3RhdHVzKSk7XG4gICAgfVxuICAgIHRoaXMubG9nLmxvZ0Vycm9yKHRoaXMuRkVUQ0hfRVJST1JfUFJFRklYICsgbWVzc2FnZUdyb3VwLCBlcnJvcik7XG4gICAgcmV0dXJuIHRocm93RXJyb3IoKCkgPT4gdGhpcy5GRVRDSF9FUlJPUl9QUkVGSVggKyBtZXNzYWdlR3JvdXApO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgcHJpdmF0ZSBoYW5kbGVFcnJvclNpbGVudChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UsIG1lc3NhZ2VHcm91cDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBpZiAoZXJyb3Iuc3RhdHVzICE9PSA0MTApIHtcbiAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkTWVzc2FnZShuZXcgRXJyb3JNZXNzYWdlKG1lc3NhZ2VHcm91cCwgJ29tYXBpLScgKyBlcnJvci5zdGF0dXMpKTtcbiAgICB9XG4gICAgdGhpcy5sb2cubG9nRXJyb3IodGhpcy5GRVRDSF9FUlJPUl9QUkVGSVggKyBtZXNzYWdlR3JvdXAsIGVycm9yKTtcbiAgICByZXR1cm4gb2YodW5kZWZpbmVkKTtcbiAgfVxufVxuIl19