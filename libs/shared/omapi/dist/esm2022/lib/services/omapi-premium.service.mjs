import { Injectable } from '@angular/core';
import { ConfigConstants } from '@telenet/ng-lib-config';
import { ErrorMessage } from '@telenet/ng-lib-message';
import { throwError } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';
import { LogFactory } from '@telenet/ng-lib-shared';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../mappers";
import * as i3 from "@telenet/ng-lib-page";
import * as i4 from "./cache/omapi-cache.service";
import * as i5 from "@telenet/ng-lib-config";
import * as i6 from "@telenet/ng-lib-message";
export class OmapiPremiumService {
    http;
    omapiPremiumMapper;
    urlService;
    cacheService;
    configService;
    messageService;
    gatewayUrl;
    log = LogFactory.createLogger(OmapiPremiumService);
    constructor(http, omapiPremiumMapper, urlService, cacheService, configService, messageService) {
        this.http = http;
        this.omapiPremiumMapper = omapiPremiumMapper;
        this.urlService = urlService;
        this.cacheService = cacheService;
        this.configService = configService;
        this.messageService = messageService;
        this.gatewayUrl = this.configService.getConfig(ConfigConstants.OMAPI_URL);
    }
    getOmapiPremium(messageGroup, epc, showCustomError, errorLabelKey) {
        if (!this.cacheService.get(epc)) {
            this.cacheService.add(epc, this.http.get(this.getPremiumEndpoint(epc), this.getHttpConfig()));
        }
        return this.cacheService.get(epc).pipe(take(1), catchError((error) => this.handleError(error, messageGroup, showCustomError, errorLabelKey)), map((response) => {
            return this.omapiPremiumMapper.toModel(response);
        }));
    }
    handleError(error, messageGroup, showCustomError, errorLabelKey) {
        if (showCustomError && errorLabelKey) {
            this.messageService.addMessage(new ErrorMessage(messageGroup, errorLabelKey));
        }
        else if (error.status !== 410) {
            this.messageService.addMessage(new ErrorMessage(messageGroup, 'omapi-' + error.status));
        }
        this.log.logError('An error occurred while trying to fetch ' + messageGroup, error);
        return throwError(() => 'An error occurred while trying to fetch ' + messageGroup);
    }
    getPremiumEndpoint(epc) {
        return `${this.gatewayUrl}/public/premium/${epc}`;
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
    static ɵfac = function OmapiPremiumService_Factory(t) { return new (t || OmapiPremiumService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.OmapiPremiumMapper), i0.ɵɵinject(i3.UrlService), i0.ɵɵinject(i4.OmapiCacheService), i0.ɵɵinject(i5.ConfigService), i0.ɵɵinject(i6.MessageService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: OmapiPremiumService, factory: OmapiPremiumService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OmapiPremiumService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.HttpClient }, { type: i2.OmapiPremiumMapper }, { type: i3.UrlService }, { type: i4.OmapiCacheService }, { type: i5.ConfigService }, { type: i6.MessageService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib21hcGktcHJlbWl1bS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9zZXJ2aWNlcy9vbWFwaS1wcmVtaXVtLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFpQixNQUFNLHdCQUF3QixDQUFDO0FBRXhFLE9BQU8sRUFBRSxZQUFZLEVBQWtCLE1BQU0seUJBQXlCLENBQUM7QUFDdkUsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUt2RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7O0FBS3BELE1BQU0sT0FBTyxtQkFBbUI7SUFLWDtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFUbkIsVUFBVSxDQUFTO0lBQ0YsR0FBRyxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUVwRSxZQUNtQixJQUFnQixFQUNoQixrQkFBc0MsRUFDdEMsVUFBc0IsRUFDdEIsWUFBeUQsRUFDekQsYUFBNEIsRUFDNUIsY0FBOEI7UUFMOUIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsaUJBQVksR0FBWixZQUFZLENBQTZDO1FBQ3pELGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUUvQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQsZUFBZSxDQUNiLFlBQW9CLEVBQ3BCLEdBQVcsRUFDWCxlQUF5QixFQUN6QixhQUFzQjtRQUV0QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDbkIsR0FBRyxFQUNILElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUEyQixJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQzVGLENBQUM7UUFDSixDQUFDO1FBRUQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQ3BDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxVQUFVLENBQUMsQ0FBQyxLQUF3QixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFDLEVBQy9HLEdBQUcsQ0FBQyxDQUFDLFFBQWtDLEVBQUUsRUFBRTtZQUN6QyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkQsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFTyxXQUFXLENBQ2pCLEtBQXdCLEVBQ3hCLFlBQW9CLEVBQ3BCLGVBQXlCLEVBQ3pCLGFBQXNCO1FBRXRCLElBQUksZUFBZSxJQUFJLGFBQWEsRUFBRSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksWUFBWSxDQUFDLFlBQVksRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ2hGLENBQUM7YUFBTSxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxZQUFZLENBQUMsWUFBWSxFQUFFLFFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxRixDQUFDO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsMENBQTBDLEdBQUcsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3BGLE9BQU8sVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLDBDQUEwQyxHQUFHLFlBQVksQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFFTyxrQkFBa0IsQ0FBQyxHQUFXO1FBQ3BDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxtQkFBbUIsR0FBRyxFQUFFLENBQUM7SUFDcEQsQ0FBQztJQUVPLGFBQWE7UUFDbkIsT0FBTztZQUNMLE9BQU8sRUFBRTtnQkFDUCxlQUFlLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7Z0JBQ2hELGtCQUFrQixFQUFFLGdCQUFnQjthQUNyQztZQUNELE9BQU8sRUFBRSxLQUFLO1lBQ2QsS0FBSyxFQUFFLElBQUk7U0FDWixDQUFDO0lBQ0osQ0FBQzs2RUFqRVUsbUJBQW1CO2dFQUFuQixtQkFBbUIsV0FBbkIsbUJBQW1CLG1CQUZsQixNQUFNOztpRkFFUCxtQkFBbUI7Y0FIL0IsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWdDb25zdGFudHMsIENvbmZpZ1NlcnZpY2UgfSBmcm9tICdAdGVsZW5ldC9uZy1saWItY29uZmlnJztcbmltcG9ydCB7IFVybFNlcnZpY2UgfSBmcm9tICdAdGVsZW5ldC9uZy1saWItcGFnZSc7XG5pbXBvcnQgeyBFcnJvck1lc3NhZ2UsIE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnQHRlbGVuZXQvbmctbGliLW1lc3NhZ2UnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUmF3T21hcGlQcmVtaXVtSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBPbWFwaVByZW1pdW1NYXBwZXIgfSBmcm9tICcuLi9tYXBwZXJzJztcbmltcG9ydCB7IE9tYXBpUHJlbWl1bSB9IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQgeyBPbWFwaUNhY2hlU2VydmljZSB9IGZyb20gJy4vY2FjaGUvb21hcGktY2FjaGUuc2VydmljZSc7XG5pbXBvcnQgeyBMb2dGYWN0b3J5IH0gZnJvbSAnQHRlbGVuZXQvbmctbGliLXNoYXJlZCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBPbWFwaVByZW1pdW1TZXJ2aWNlIHtcbiAgZ2F0ZXdheVVybDogc3RyaW5nO1xuICBwcml2YXRlIHJlYWRvbmx5IGxvZyA9IExvZ0ZhY3RvcnkuY3JlYXRlTG9nZ2VyKE9tYXBpUHJlbWl1bVNlcnZpY2UpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIHJlYWRvbmx5IG9tYXBpUHJlbWl1bU1hcHBlcjogT21hcGlQcmVtaXVtTWFwcGVyLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdXJsU2VydmljZTogVXJsU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNhY2hlU2VydmljZTogT21hcGlDYWNoZVNlcnZpY2U8UmF3T21hcGlQcmVtaXVtSW50ZXJmYWNlPixcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5nYXRld2F5VXJsID0gdGhpcy5jb25maWdTZXJ2aWNlLmdldENvbmZpZyhDb25maWdDb25zdGFudHMuT01BUElfVVJMKTtcbiAgfVxuXG4gIGdldE9tYXBpUHJlbWl1bShcbiAgICBtZXNzYWdlR3JvdXA6IHN0cmluZyxcbiAgICBlcGM6IHN0cmluZyxcbiAgICBzaG93Q3VzdG9tRXJyb3I/OiBib29sZWFuLFxuICAgIGVycm9yTGFiZWxLZXk/OiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxPbWFwaVByZW1pdW0+IHtcbiAgICBpZiAoIXRoaXMuY2FjaGVTZXJ2aWNlLmdldChlcGMpKSB7XG4gICAgICB0aGlzLmNhY2hlU2VydmljZS5hZGQoXG4gICAgICAgIGVwYyxcbiAgICAgICAgdGhpcy5odHRwLmdldDxSYXdPbWFwaVByZW1pdW1JbnRlcmZhY2U+KHRoaXMuZ2V0UHJlbWl1bUVuZHBvaW50KGVwYyksIHRoaXMuZ2V0SHR0cENvbmZpZygpKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jYWNoZVNlcnZpY2UuZ2V0KGVwYykucGlwZShcbiAgICAgIHRha2UoMSksXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IsIG1lc3NhZ2VHcm91cCwgc2hvd0N1c3RvbUVycm9yLCBlcnJvckxhYmVsS2V5KSksXG4gICAgICBtYXAoKHJlc3BvbnNlOiBSYXdPbWFwaVByZW1pdW1JbnRlcmZhY2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMub21hcGlQcmVtaXVtTWFwcGVyLnRvTW9kZWwocmVzcG9uc2UpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihcbiAgICBlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UsXG4gICAgbWVzc2FnZUdyb3VwOiBzdHJpbmcsXG4gICAgc2hvd0N1c3RvbUVycm9yPzogYm9vbGVhbixcbiAgICBlcnJvckxhYmVsS2V5Pzogc3RyaW5nXG4gICkge1xuICAgIGlmIChzaG93Q3VzdG9tRXJyb3IgJiYgZXJyb3JMYWJlbEtleSkge1xuICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5hZGRNZXNzYWdlKG5ldyBFcnJvck1lc3NhZ2UobWVzc2FnZUdyb3VwLCBlcnJvckxhYmVsS2V5KSk7XG4gICAgfSBlbHNlIGlmIChlcnJvci5zdGF0dXMgIT09IDQxMCkge1xuICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5hZGRNZXNzYWdlKG5ldyBFcnJvck1lc3NhZ2UobWVzc2FnZUdyb3VwLCAnb21hcGktJyArIGVycm9yLnN0YXR1cykpO1xuICAgIH1cbiAgICB0aGlzLmxvZy5sb2dFcnJvcignQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgdHJ5aW5nIHRvIGZldGNoICcgKyBtZXNzYWdlR3JvdXAsIGVycm9yKTtcbiAgICByZXR1cm4gdGhyb3dFcnJvcigoKSA9PiAnQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgdHJ5aW5nIHRvIGZldGNoICcgKyBtZXNzYWdlR3JvdXApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQcmVtaXVtRW5kcG9pbnQoZXBjOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHt0aGlzLmdhdGV3YXlVcmx9L3B1YmxpYy9wcmVtaXVtLyR7ZXBjfWA7XG4gIH1cblxuICBwcml2YXRlIGdldEh0dHBDb25maWcoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ3gtYWx0LXJlZmVyZXInOiB0aGlzLnVybFNlcnZpY2UuZ2V0Q3VycmVudFVybCgpLFxuICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcsXG4gICAgICB9LFxuICAgICAgdGltZW91dDogMTAwMDAsXG4gICAgICBjYWNoZTogdHJ1ZSxcbiAgICB9O1xuICB9XG59XG4iXX0=