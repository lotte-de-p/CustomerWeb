import { map as lodashMap } from 'lodash-es';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';
import { ErrorMessage } from '@telenet/ng-lib-message';
import { LogFactory } from '@telenet/ng-lib-shared';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./cache/cache.service";
import * as i3 from "@telenet/ng-lib-page";
import * as i4 from "@telenet/ng-lib-message";
export class OmapiQueryProductService {
    http;
    cacheService;
    urlService;
    messageService;
    log = LogFactory.createLogger(OmapiQueryProductService);
    constructor(http, cacheService, urlService, messageService) {
        this.http = http;
        this.cacheService = cacheService;
        this.urlService = urlService;
        this.messageService = messageService;
    }
    getRawQueryProductByEndpoint(messageGroup, endpoint) {
        if (!this.cacheService.get(endpoint)) {
            this.cacheService.add(endpoint, this.http.get(endpoint, this.getHttpConfig()));
        }
        return this.cacheService.get(endpoint).pipe(take(1), catchError((error) => this.handleError(error, messageGroup)), map((response) => response));
    }
    rawQueryProductsFromEndpoints$(messageGroup, endpoints) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return forkJoin(lodashMap(endpoints, (endpoint) => this.getRawQueryProductByEndpoint(messageGroup, endpoint)));
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
    handleError(error, messageGroup) {
        if (error.status !== 410) {
            this.messageService.addMessage(new ErrorMessage(messageGroup, 'omapi-query-' + error.status));
        }
        this.log.logError('An error occurred while trying to fetch ' + messageGroup, error);
        throw Error('An error occurred while trying to fetch ' + messageGroup);
    }
    static ɵfac = function OmapiQueryProductService_Factory(t) { return new (t || OmapiQueryProductService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.CacheService), i0.ɵɵinject(i3.UrlService), i0.ɵɵinject(i4.MessageService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: OmapiQueryProductService, factory: OmapiQueryProductService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OmapiQueryProductService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.HttpClient }, { type: i2.CacheService }, { type: i3.UrlService }, { type: i4.MessageService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib21hcGktcXVlcnktcHJvZHVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9zZXJ2aWNlcy9vbWFwaS1xdWVyeS1wcm9kdWN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEdBQUcsSUFBSSxTQUFTLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFN0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBRzVDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQWtCLE1BQU0seUJBQXlCLENBQUM7QUFDdkUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7QUFLcEQsTUFBTSxPQUFPLHdCQUF3QjtJQUdoQjtJQUNBO0lBQ0E7SUFDQTtJQUxGLEdBQUcsR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDekUsWUFDbUIsSUFBZ0IsRUFDaEIsWUFBMEIsRUFDMUIsVUFBc0IsRUFDdEIsY0FBOEI7UUFIOUIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUM5QyxDQUFDO0lBRUosNEJBQTRCLENBQUMsWUFBb0IsRUFBRSxRQUFnQjtRQUNqRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakYsQ0FBQztRQUNELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUN6QyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsVUFBVSxDQUFDLENBQUMsS0FBd0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUMsRUFDL0UsR0FBRyxDQUFDLENBQUMsUUFBaUIsRUFBRSxFQUFFLENBQUMsUUFBeUMsQ0FBQyxDQUN0RSxDQUFDO0lBQ0osQ0FBQztJQUVELDhCQUE4QixDQUM1QixZQUFvQixFQUNwQixTQUFtQjtRQUVuQiw2REFBNkQ7UUFDN0QsYUFBYTtRQUNiLE9BQU8sUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pILENBQUM7SUFFTyxhQUFhO1FBQ25CLE9BQU87WUFDTCxPQUFPLEVBQUU7Z0JBQ1AsZUFBZSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFO2dCQUNoRCxrQkFBa0IsRUFBRSxnQkFBZ0I7YUFDckM7WUFDRCxPQUFPLEVBQUUsS0FBSztZQUNkLEtBQUssRUFBRSxJQUFJO1NBQ1osQ0FBQztJQUNKLENBQUM7SUFFTyxXQUFXLENBQUMsS0FBd0IsRUFBRSxZQUFvQjtRQUNoRSxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxZQUFZLENBQUMsWUFBWSxFQUFFLGNBQWMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNoRyxDQUFDO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsMENBQTBDLEdBQUcsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3BGLE1BQU0sS0FBSyxDQUFDLDBDQUEwQyxHQUFHLFlBQVksQ0FBQyxDQUFDO0lBQ3pFLENBQUM7a0ZBOUNVLHdCQUF3QjtnRUFBeEIsd0JBQXdCLFdBQXhCLHdCQUF3QixtQkFGdkIsTUFBTTs7aUZBRVAsd0JBQXdCO2NBSHBDLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1hcCBhcyBsb2Rhc2hNYXAgfSBmcm9tICdsb2Rhc2gtZXMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVcmxTZXJ2aWNlIH0gZnJvbSAnQHRlbGVuZXQvbmctbGliLXBhZ2UnO1xuaW1wb3J0IHsgZm9ya0pvaW4sIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENhY2hlU2VydmljZSB9IGZyb20gJy4vY2FjaGUvY2FjaGUuc2VydmljZSc7XG5pbXBvcnQgeyBSYXdPbWFwaVF1ZXJ5UHJvZHVjdEludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvcmF3LW9tYXBpLXF1ZXJ5LXByb2R1Y3QuaW50ZXJmYWNlJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEVycm9yTWVzc2FnZSwgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICdAdGVsZW5ldC9uZy1saWItbWVzc2FnZSc7XG5pbXBvcnQgeyBMb2dGYWN0b3J5IH0gZnJvbSAnQHRlbGVuZXQvbmctbGliLXNoYXJlZCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBPbWFwaVF1ZXJ5UHJvZHVjdFNlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IGxvZyA9IExvZ0ZhY3RvcnkuY3JlYXRlTG9nZ2VyKE9tYXBpUXVlcnlQcm9kdWN0U2VydmljZSk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNhY2hlU2VydmljZTogQ2FjaGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdXJsU2VydmljZTogVXJsU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZVxuICApIHt9XG5cbiAgZ2V0UmF3UXVlcnlQcm9kdWN0QnlFbmRwb2ludChtZXNzYWdlR3JvdXA6IHN0cmluZywgZW5kcG9pbnQ6IHN0cmluZyk6IE9ic2VydmFibGU8UmF3T21hcGlRdWVyeVByb2R1Y3RJbnRlcmZhY2U+IHtcbiAgICBpZiAoIXRoaXMuY2FjaGVTZXJ2aWNlLmdldChlbmRwb2ludCkpIHtcbiAgICAgIHRoaXMuY2FjaGVTZXJ2aWNlLmFkZChlbmRwb2ludCwgdGhpcy5odHRwLmdldChlbmRwb2ludCwgdGhpcy5nZXRIdHRwQ29uZmlnKCkpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY2FjaGVTZXJ2aWNlLmdldChlbmRwb2ludCkucGlwZShcbiAgICAgIHRha2UoMSksXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IsIG1lc3NhZ2VHcm91cCkpLFxuICAgICAgbWFwKChyZXNwb25zZTogdW5rbm93bikgPT4gcmVzcG9uc2UgYXMgUmF3T21hcGlRdWVyeVByb2R1Y3RJbnRlcmZhY2UpXG4gICAgKTtcbiAgfVxuXG4gIHJhd1F1ZXJ5UHJvZHVjdHNGcm9tRW5kcG9pbnRzJChcbiAgICBtZXNzYWdlR3JvdXA6IHN0cmluZyxcbiAgICBlbmRwb2ludHM6IHN0cmluZ1tdXG4gICk6IE9ic2VydmFibGU8UmF3T21hcGlRdWVyeVByb2R1Y3RJbnRlcmZhY2VbXT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmV0dXJuIGZvcmtKb2luKGxvZGFzaE1hcChlbmRwb2ludHMsIChlbmRwb2ludCkgPT4gdGhpcy5nZXRSYXdRdWVyeVByb2R1Y3RCeUVuZHBvaW50KG1lc3NhZ2VHcm91cCwgZW5kcG9pbnQpKSk7XG4gIH1cblxuICBwcml2YXRlIGdldEh0dHBDb25maWcoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ3gtYWx0LXJlZmVyZXInOiB0aGlzLnVybFNlcnZpY2UuZ2V0Q3VycmVudFVybCgpLFxuICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcsXG4gICAgICB9LFxuICAgICAgdGltZW91dDogMTAwMDAsXG4gICAgICBjYWNoZTogdHJ1ZSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UsIG1lc3NhZ2VHcm91cDogc3RyaW5nKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgaWYgKGVycm9yLnN0YXR1cyAhPT0gNDEwKSB7XG4gICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZE1lc3NhZ2UobmV3IEVycm9yTWVzc2FnZShtZXNzYWdlR3JvdXAsICdvbWFwaS1xdWVyeS0nICsgZXJyb3Iuc3RhdHVzKSk7XG4gICAgfVxuICAgIHRoaXMubG9nLmxvZ0Vycm9yKCdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSB0cnlpbmcgdG8gZmV0Y2ggJyArIG1lc3NhZ2VHcm91cCwgZXJyb3IpO1xuICAgIHRocm93IEVycm9yKCdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSB0cnlpbmcgdG8gZmV0Y2ggJyArIG1lc3NhZ2VHcm91cCk7XG4gIH1cbn1cbiJdfQ==