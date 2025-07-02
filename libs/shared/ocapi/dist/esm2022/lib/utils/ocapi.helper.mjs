import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { isEmpty } from 'lodash-es';
import { ConfigConstants } from '@telenet/ng-lib-config';
import * as i0 from "@angular/core";
import * as i1 from "@telenet/ng-lib-page";
import * as i2 from "ngx-cookie-service";
import * as i3 from "@telenet/ng-lib-config";
export class OcapiHelper {
    urlService;
    cookieService;
    configService;
    constructor(urlService, cookieService, configService) {
        this.urlService = urlService;
        this.cookieService = cookieService;
        this.configService = configService;
    }
    getHttpHeaders(ocapiConfig) {
        return this.createHttpHeaders(ocapiConfig);
    }
    createHttpHeaders(ocapiConfig) {
        let httpHeaders = new HttpHeaders();
        const accessToken = sessionStorage.getItem('TOKEN-ACCESS');
        httpHeaders = httpHeaders.set('x-alt-referer', this.urlService.getCurrentUrl());
        httpHeaders = httpHeaders.set('X-Requested-With', 'XMLHttpRequest');
        if (ocapiConfig?.withDefaultContentType) {
            httpHeaders = httpHeaders.set('Content-Type', 'application/json;charset=UTF-8');
        }
        if (accessToken) {
            httpHeaders = httpHeaders.set('Authorization', this.getAccessToken(accessToken));
        }
        else {
            const TOKEN_XSRF = this.cookieService.get('TOKEN-XSRF');
            if (!isEmpty(TOKEN_XSRF)) {
                httpHeaders = httpHeaders.set('X-TOKEN-XSRF', TOKEN_XSRF);
            }
        }
        if (ocapiConfig && ocapiConfig.customHeaders) {
            for (const [key, value] of Object.entries(ocapiConfig.customHeaders)) {
                httpHeaders = httpHeaders.set(key, value);
            }
        }
        const oauthClientId = this.configService.getConfig(ConfigConstants.OPENID_CLIENT_ID);
        if (oauthClientId === 'fleet_portal' || oauthClientId === 'tip_portal') {
            httpHeaders = httpHeaders.set('X-Client-Id', oauthClientId);
        }
        return httpHeaders;
    }
    getHttpOptions(ocapiConfig) {
        const httpOptions = {
            withCredentials: ocapiConfig.withCredentials,
            headers: this.getHttpHeaders(ocapiConfig),
        };
        if (ocapiConfig.observeAsResponse) {
            httpOptions.observe = 'response';
        }
        if (ocapiConfig.responseType) {
            httpOptions.responseType = ocapiConfig.responseType;
        }
        return httpOptions;
    }
    getAccessToken(accessToken) {
        return `Bearer ${accessToken}`;
    }
    static ɵfac = function OcapiHelper_Factory(t) { return new (t || OcapiHelper)(i0.ɵɵinject(i1.UrlService), i0.ɵɵinject(i2.CookieService), i0.ɵɵinject(i3.ConfigService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: OcapiHelper, factory: OcapiHelper.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OcapiHelper, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.UrlService }, { type: i2.CookieService }, { type: i3.ConfigService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NhcGkuaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi91dGlscy9vY2FwaS5oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFlLFdBQVcsRUFBYyxNQUFNLHNCQUFzQixDQUFDO0FBQzVFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNwQyxPQUFPLEVBQUUsZUFBZSxFQUFpQixNQUFNLHdCQUF3QixDQUFDOzs7OztBQUt4RSxNQUFNLE9BQU8sV0FBVztJQUVIO0lBQ0E7SUFDQTtJQUhuQixZQUNtQixVQUFzQixFQUN0QixhQUE0QixFQUM1QixhQUE0QjtRQUY1QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQzVDLENBQUM7SUFFSixjQUFjLENBQU8sV0FBbUM7UUFDdEQsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELGlCQUFpQixDQUFPLFdBQW1DO1FBQ3pELElBQUksV0FBVyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFDcEMsTUFBTSxXQUFXLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUUzRCxXQUFXLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQ2hGLFdBQVcsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFFcEUsSUFBSSxXQUFXLEVBQUUsc0JBQXNCLEVBQUUsQ0FBQztZQUN4QyxXQUFXLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsZ0NBQWdDLENBQUMsQ0FBQztRQUNsRixDQUFDO1FBRUQsSUFBSSxXQUFXLEVBQUUsQ0FBQztZQUNoQixXQUFXLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ25GLENBQUM7YUFBTSxDQUFDO1lBQ04sTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFFeEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO2dCQUN6QixXQUFXLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDNUQsQ0FBQztRQUNILENBQUM7UUFFRCxJQUFJLFdBQVcsSUFBSSxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDN0MsS0FBSyxNQUFNLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7Z0JBQ3JFLFdBQVcsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM1QyxDQUFDO1FBQ0gsQ0FBQztRQUNELE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3JGLElBQUksYUFBYSxLQUFLLGNBQWMsSUFBSSxhQUFhLEtBQUssWUFBWSxFQUFFLENBQUM7WUFDdkUsV0FBVyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQzlELENBQUM7UUFDRCxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBRUQsY0FBYyxDQUFPLFdBQWtDO1FBQ3JELE1BQU0sV0FBVyxHQVFiO1lBQ0YsZUFBZSxFQUFFLFdBQVcsQ0FBQyxlQUFlO1lBQzVDLE9BQU8sRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQztTQUMxQyxDQUFDO1FBRUYsSUFBSSxXQUFXLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUNsQyxXQUFXLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztRQUNuQyxDQUFDO1FBQ0QsSUFBSSxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDN0IsV0FBVyxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUMsWUFBWSxDQUFDO1FBQ3RELENBQUM7UUFFRCxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBRU8sY0FBYyxDQUFDLFdBQW1CO1FBQ3hDLE9BQU8sVUFBVSxXQUFXLEVBQUUsQ0FBQztJQUNqQyxDQUFDO3FFQXRFVSxXQUFXO2dFQUFYLFdBQVcsV0FBWCxXQUFXLG1CQUZWLE1BQU07O2lGQUVQLFdBQVc7Y0FIdkIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENvbnRleHQsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2NhcGlDYWxsQ29uZmlnIH0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCB7IFVybFNlcnZpY2UgfSBmcm9tICdAdGVsZW5ldC9uZy1saWItcGFnZSc7XG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnbmd4LWNvb2tpZS1zZXJ2aWNlJztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICdsb2Rhc2gtZXMnO1xuaW1wb3J0IHsgQ29uZmlnQ29uc3RhbnRzLCBDb25maWdTZXJ2aWNlIH0gZnJvbSAnQHRlbGVuZXQvbmctbGliLWNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBPY2FwaUhlbHBlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdXJsU2VydmljZTogVXJsU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvb2tpZVNlcnZpY2U6IENvb2tpZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlXG4gICkge31cblxuICBnZXRIdHRwSGVhZGVyczxULCBHPihvY2FwaUNvbmZpZz86IE9jYXBpQ2FsbENvbmZpZzxULCBHPik6IEh0dHBIZWFkZXJzIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVIdHRwSGVhZGVycyhvY2FwaUNvbmZpZyk7XG4gIH1cblxuICBjcmVhdGVIdHRwSGVhZGVyczxULCBHPihvY2FwaUNvbmZpZz86IE9jYXBpQ2FsbENvbmZpZzxULCBHPik6IEh0dHBIZWFkZXJzIHtcbiAgICBsZXQgaHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcbiAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ1RPS0VOLUFDQ0VTUycpO1xuXG4gICAgaHR0cEhlYWRlcnMgPSBodHRwSGVhZGVycy5zZXQoJ3gtYWx0LXJlZmVyZXInLCB0aGlzLnVybFNlcnZpY2UuZ2V0Q3VycmVudFVybCgpKTtcbiAgICBodHRwSGVhZGVycyA9IGh0dHBIZWFkZXJzLnNldCgnWC1SZXF1ZXN0ZWQtV2l0aCcsICdYTUxIdHRwUmVxdWVzdCcpO1xuXG4gICAgaWYgKG9jYXBpQ29uZmlnPy53aXRoRGVmYXVsdENvbnRlbnRUeXBlKSB7XG4gICAgICBodHRwSGVhZGVycyA9IGh0dHBIZWFkZXJzLnNldCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOCcpO1xuICAgIH1cblxuICAgIGlmIChhY2Nlc3NUb2tlbikge1xuICAgICAgaHR0cEhlYWRlcnMgPSBodHRwSGVhZGVycy5zZXQoJ0F1dGhvcml6YXRpb24nLCB0aGlzLmdldEFjY2Vzc1Rva2VuKGFjY2Vzc1Rva2VuKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IFRPS0VOX1hTUkYgPSB0aGlzLmNvb2tpZVNlcnZpY2UuZ2V0KCdUT0tFTi1YU1JGJyk7XG5cbiAgICAgIGlmICghaXNFbXB0eShUT0tFTl9YU1JGKSkge1xuICAgICAgICBodHRwSGVhZGVycyA9IGh0dHBIZWFkZXJzLnNldCgnWC1UT0tFTi1YU1JGJywgVE9LRU5fWFNSRik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9jYXBpQ29uZmlnICYmIG9jYXBpQ29uZmlnLmN1c3RvbUhlYWRlcnMpIHtcbiAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9jYXBpQ29uZmlnLmN1c3RvbUhlYWRlcnMpKSB7XG4gICAgICAgIGh0dHBIZWFkZXJzID0gaHR0cEhlYWRlcnMuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBvYXV0aENsaWVudElkID0gdGhpcy5jb25maWdTZXJ2aWNlLmdldENvbmZpZyhDb25maWdDb25zdGFudHMuT1BFTklEX0NMSUVOVF9JRCk7XG4gICAgaWYgKG9hdXRoQ2xpZW50SWQgPT09ICdmbGVldF9wb3J0YWwnIHx8IG9hdXRoQ2xpZW50SWQgPT09ICd0aXBfcG9ydGFsJykge1xuICAgICAgaHR0cEhlYWRlcnMgPSBodHRwSGVhZGVycy5zZXQoJ1gtQ2xpZW50LUlkJywgb2F1dGhDbGllbnRJZCk7XG4gICAgfVxuICAgIHJldHVybiBodHRwSGVhZGVycztcbiAgfVxuXG4gIGdldEh0dHBPcHRpb25zPFQsIEc+KG9jYXBpQ29uZmlnOiBPY2FwaUNhbGxDb25maWc8VCwgRz4pIHtcbiAgICBjb25zdCBodHRwT3B0aW9uczoge1xuICAgICAgaGVhZGVyczogSHR0cEhlYWRlcnM7XG4gICAgICBjb250ZXh0PzogSHR0cENvbnRleHQ7XG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ3Jlc3BvbnNlJztcbiAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIHwgcmVhZG9ubHkgKHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4pW10+O1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogc3RyaW5nO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9ID0ge1xuICAgICAgd2l0aENyZWRlbnRpYWxzOiBvY2FwaUNvbmZpZy53aXRoQ3JlZGVudGlhbHMsXG4gICAgICBoZWFkZXJzOiB0aGlzLmdldEh0dHBIZWFkZXJzKG9jYXBpQ29uZmlnKSxcbiAgICB9O1xuXG4gICAgaWYgKG9jYXBpQ29uZmlnLm9ic2VydmVBc1Jlc3BvbnNlKSB7XG4gICAgICBodHRwT3B0aW9ucy5vYnNlcnZlID0gJ3Jlc3BvbnNlJztcbiAgICB9XG4gICAgaWYgKG9jYXBpQ29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgaHR0cE9wdGlvbnMucmVzcG9uc2VUeXBlID0gb2NhcGlDb25maWcucmVzcG9uc2VUeXBlO1xuICAgIH1cblxuICAgIHJldHVybiBodHRwT3B0aW9ucztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QWNjZXNzVG9rZW4oYWNjZXNzVG9rZW46IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gO1xuICB9XG59XG4iXX0=