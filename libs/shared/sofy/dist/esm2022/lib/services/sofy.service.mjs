import { of } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
import { CustomerBrandEnum } from '@telenet/ng-lib-page';
import { ConfigConstants } from '@telenet/ng-lib-config';
import { Injectable } from '@angular/core';
import { isEmpty } from 'lodash-es';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@telenet/ng-lib-page";
import * as i3 from "@telenet/ng-lib-config";
export class SofyService {
    http;
    urlService;
    configService;
    pathCategorisationService;
    PARAM_DATE = 'date';
    constructor(http, urlService, configService, pathCategorisationService) {
        this.http = http;
        this.urlService = urlService;
        this.configService = configService;
        this.pathCategorisationService = pathCategorisationService;
    }
    // Deprecated,
    // products model is the same as the one used in the response
    // makes no sense to have the exact same model as it's just not the same
    // Use getSalesOffer instead
    sofyProducts(products, rawCustomerProductHolding, targetGroups, rawModemDetails, voucherPromo, campaignCode, messageGroup) {
        const data = {
            products: products,
            promotions: targetGroups,
            customerproductholding: rawCustomerProductHolding,
            modemdetails: rawModemDetails,
            voucherpromo: voucherPromo,
            campaigncode: campaignCode,
        };
        return this.doPost(data, messageGroup);
    }
    getSalesOfferWithOmapiId(products, messageGroup) {
        const data = {
            products: products,
            promotions: [],
            customerproductholding: [],
            modemdetails: [],
        };
        return this.doPost(data, messageGroup);
    }
    getSalesOffer(products, promotions, rawModemDetails, rawCustomerProductHolding, voucherPromo, campaignCode, messageGroup, installationDetails, standaloneOptions) {
        const data = {
            promotions: promotions,
            customerproductholding: rawCustomerProductHolding,
            modemdetails: rawModemDetails,
            voucherpromo: voucherPromo,
            campaigncode: campaignCode,
            customerinstallationdetails: installationDetails,
            products: products,
            standaloneoptions: standaloneOptions,
        };
        if (!isEmpty(this.getDateFromUrl())) {
            data['salesofferdate'] = this.getDateFromUrl();
        }
        return this.doPost(data, messageGroup);
    }
    doPost(data, _) {
        const options = this.getHttpOptions();
        return this.http.post(this.getSofyUrl(), data, options).pipe(take(1), catchError((error) => {
            return of(error);
        }));
    }
    getHttpOptions() {
        return {
            headers: this.createHttpHeaders(),
            timeout: 10000,
            cache: true,
        };
    }
    createHttpHeaders() {
        return {
            'x-alt-referer': this.urlService.getCurrentUrl(),
            'X-Requested-With': 'XMLHttpRequest',
        };
    }
    getSofyUrl() {
        if (this.isBaseCustomer()) {
            return this.configService.getConfig(ConfigConstants.SOFY_URL) + '/sofy/base/public/';
        }
        return this.configService.getConfig(ConfigConstants.SOFY_URL) + '/sofy/public/';
    }
    isBaseCustomer() {
        return this.pathCategorisationService.getCustomerBrand() === CustomerBrandEnum.BRAND_BASE;
    }
    getDateFromUrl() {
        return this.urlService.getRequestParamValue(this.PARAM_DATE, '');
    }
    static ɵfac = function SofyService_Factory(t) { return new (t || SofyService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.UrlService), i0.ɵɵinject(i3.ConfigService), i0.ɵɵinject(i2.PathCategorisationService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SofyService, factory: SofyService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SofyService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.HttpClient }, { type: i2.UrlService }, { type: i3.ConfigService }, { type: i2.PathCategorisationService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29meS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9zZXJ2aWNlcy9zb2Z5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxELE9BQU8sRUFBRSxpQkFBaUIsRUFBeUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRyxPQUFPLEVBQUUsZUFBZSxFQUFpQixNQUFNLHdCQUF3QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQzs7Ozs7QUFPcEMsTUFBTSxPQUFPLFdBQVc7SUFJSDtJQUNBO0lBQ0E7SUFDQTtJQU5GLFVBQVUsR0FBRyxNQUFNLENBQUM7SUFFckMsWUFDbUIsSUFBZ0IsRUFDaEIsVUFBc0IsRUFDdEIsYUFBNEIsRUFDNUIseUJBQW9EO1FBSHBELFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1Qiw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO0lBQ3BFLENBQUM7SUFFSixjQUFjO0lBQ2QsNkRBQTZEO0lBQzdELHdFQUF3RTtJQUN4RSw0QkFBNEI7SUFDckIsWUFBWSxDQUNqQixRQUF1QixFQUN2Qix5QkFBOEQsRUFFOUQsWUFBeUIsRUFDekIsZUFBbUMsRUFDbkMsWUFBb0IsRUFDcEIsWUFBb0IsRUFDcEIsWUFBb0I7UUFFcEIsTUFBTSxJQUFJLEdBQW1CO1lBQzNCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLHNCQUFzQixFQUFFLHlCQUF5QjtZQUNqRCxZQUFZLEVBQUUsZUFB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QUFFLENBQUMsQ0FBQztJQUNuRSxDQUFDO3FFQWhIVSxXQUFXO2dFQUFYLFdBQVcsV0FBWCxXQUFXLG1CQUZWLE1BQU07O2lGQUVQLFdBQVc7Y0FIdkIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ3VzdG9tZXJCcmFuZEVudW0sIFBhdGhDYXRlZ29yaXNhdGlvblNlcnZpY2UsIFVybFNlcnZpY2UgfSBmcm9tICdAdGVsZW5ldC9uZy1saWItcGFnZSc7XG5pbXBvcnQgeyBDb25maWdDb25zdGFudHMsIENvbmZpZ1NlcnZpY2UgfSBmcm9tICdAdGVsZW5ldC9uZy1saWItY29uZmlnJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNvZnlQcm9kdWN0IH0gZnJvbSAnLi4vbW9kZWxzL3NvZnktcHJvZHVjdCc7XG5pbXBvcnQgeyBTb2Z5Q3VzdG9tZXJQcm9kdWN0SG9sZGluZ1Byb2R1Y3QgfSBmcm9tICcuLi9tb2RlbHMvc29meS1jdXN0b21lci1wcm9kdWN0LWhvbGRpbmctcHJvZHVjdCc7XG5pbXBvcnQgeyBTb2Z5TW9kZW1EZXRhaWxzIH0gZnJvbSAnLi4vbW9kZWxzL3NvZnktbW9kZW0tZGV0YWlscyc7XG5pbXBvcnQgeyBTb2Z5UmVxdWVzdFByb2R1Y3QgfSBmcm9tICcuLi9tb2RlbHMvcmVxdWVzdCc7XG5pbXBvcnQgeyBTYWxlc09mZmVyRGF0YSB9IGZyb20gJy4uL2ludGVyZmFjZXMvc2FsZXMtb2ZmZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IEN1c3RvbWVySW5zdGFsbGF0aW9uRGV0YWlsc0ludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW5zdGFsbGF0aW9uLWRldGFpbHMtcmVzcG9uc2UuaW50ZXJmYWNlJztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICdsb2Rhc2gtZXMnO1xuaW1wb3J0IHsgUHJvbW90aW9uIH0gZnJvbSAnLi4vbW9kZWxzL3Byb21vdGlvbi5tb2RlbCc7XG5pbXBvcnQgeyBLZXlWYWx1ZVBhaXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2tleS12YWx1ZS5pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU29meVNlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IFBBUkFNX0RBVEUgPSAnZGF0ZSc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdXJsU2VydmljZTogVXJsU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBwYXRoQ2F0ZWdvcmlzYXRpb25TZXJ2aWNlOiBQYXRoQ2F0ZWdvcmlzYXRpb25TZXJ2aWNlXG4gICkge31cblxuICAvLyBEZXByZWNhdGVkLFxuICAvLyBwcm9kdWN0cyBtb2RlbCBpcyB0aGUgc2FtZSBhcyB0aGUgb25lIHVzZWQgaW4gdGhlIHJlc3BvbnNlXG4gIC8vIG1ha2VzIG5vIHNlbnNlIHRvIGhhdmUgdGhlIGV4YWN0IHNhbWUgbW9kZWwgYXMgaXQncyBqdXN0IG5vdCB0aGUgc2FtZVxuICAvLyBVc2UgZ2V0U2FsZXNPZmZlciBpbnN0ZWFkXG4gIHB1YmxpYyBzb2Z5UHJvZHVjdHMoXG4gICAgcHJvZHVjdHM6IFNvZnlQcm9kdWN0W10sXG4gICAgcmF3Q3VzdG9tZXJQcm9kdWN0SG9sZGluZzogU29meUN1c3RvbWVyUHJvZHVjdEhvbGRpbmdQcm9kdWN0W10sXG5cbiAgICB0YXJnZXRHcm91cHM6IFByb21vdGlvbltdLFxuICAgIHJhd01vZGVtRGV0YWlsczogU29meU1vZGVtRGV0YWlsc1tdLFxuICAgIHZvdWNoZXJQcm9tbzogc3RyaW5nLFxuICAgIGNhbXBhaWduQ29kZTogc3RyaW5nLFxuICAgIG1lc3NhZ2VHcm91cDogc3RyaW5nXG4gICkge1xuICAgIGNvbnN0IGRhdGE6IFNhbGVzT2ZmZXJEYXRhID0ge1xuICAgICAgcHJvZHVjdHM6IHByb2R1Y3RzLFxuICAgICAgcHJvbW90aW9uczogdGFyZ2V0R3JvdXBzLFxuICAgICAgY3VzdG9tZXJwcm9kdWN0aG9sZGluZzogcmF3Q3VzdG9tZXJQcm9kdWN0SG9sZGluZyxcbiAgICAgIG1vZGVtZGV0YWlsczogcmF3TW9kZW1EZXRhaWxzLFxuICAgICAgdm91Y2hlcnByb21vOiB2b3VjaGVyUHJvbW8sXG4gICAgICBjYW1wYWlnbmNvZGU6IGNhbXBhaWduQ29kZSxcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmRvUG9zdChkYXRhLCBtZXNzYWdlR3JvdXApO1xuICB9XG5cbiAgcHVibGljIGdldFNhbGVzT2ZmZXJXaXRoT21hcGlJZChwcm9kdWN0czogU29meVJlcXVlc3RQcm9kdWN0W10gfCBTb2Z5UHJvZHVjdFtdLCBtZXNzYWdlR3JvdXA6IHN0cmluZykge1xuICAgIGNvbnN0IGRhdGE6IFNhbGVzT2ZmZXJEYXRhID0ge1xuICAgICAgcHJvZHVjdHM6IHByb2R1Y3RzLFxuICAgICAgcHJvbW90aW9uczogW10sXG4gICAgICBjdXN0b21lcnByb2R1Y3Rob2xkaW5nOiBbXSxcbiAgICAgIG1vZGVtZGV0YWlsczogW10sXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5kb1Bvc3QoZGF0YSwgbWVzc2FnZUdyb3VwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTYWxlc09mZmVyKFxuICAgIHByb2R1Y3RzOiBTb2Z5UmVxdWVzdFByb2R1Y3RbXSxcbiAgICBwcm9tb3Rpb25zOiBQcm9tb3Rpb25bXSxcbiAgICByYXdNb2RlbURldGFpbHM6IFNvZnlNb2RlbURldGFpbHNbXSxcbiAgICByYXdDdXN0b21lclByb2R1Y3RIb2xkaW5nOiBTb2Z5Q3VzdG9tZXJQcm9kdWN0SG9sZGluZ1Byb2R1Y3RbXSxcbiAgICB2b3VjaGVyUHJvbW86IHN0cmluZyxcbiAgICBjYW1wYWlnbkNvZGU6IHN0cmluZyxcbiAgICBtZXNzYWdlR3JvdXA6IHN0cmluZyxcbiAgICBpbnN0YWxsYXRpb25EZXRhaWxzPzogQ3VzdG9tZXJJbnN0YWxsYXRpb25EZXRhaWxzSW50ZXJmYWNlLFxuICAgIHN0YW5kYWxvbmVPcHRpb25zPzogU29meVJlcXVlc3RQcm9kdWN0W11cbiAgKSB7XG4gICAgY29uc3QgZGF0YTogU2FsZXNPZmZlckRhdGEgPSB7XG4gICAgICBwcm9tb3Rpb25zOiBwcm9tb3Rpb25zLFxuICAgICAgY3VzdG9tZXJwcm9kdWN0aG9sZGluZzogcmF3Q3VzdG9tZXJQcm9kdWN0SG9sZGluZyxcbiAgICAgIG1vZGVtZGV0YWlsczogcmF3TW9kZW1EZXRhaWxzLFxuICAgICAgdm91Y2hlcnByb21vOiB2b3VjaGVyUHJvbW8sXG4gICAgICBjYW1wYWlnbmNvZGU6IGNhbXBhaWduQ29kZSxcbiAgICAgIGN1c3RvbWVyaW5zdGFsbGF0aW9uZGV0YWlsczogaW5zdGFsbGF0aW9uRGV0YWlscyxcbiAgICAgIHByb2R1Y3RzOiBwcm9kdWN0cyxcbiAgICAgIHN0YW5kYWxvbmVvcHRpb25zOiBzdGFuZGFsb25lT3B0aW9ucyxcbiAgICB9O1xuXG4gICAgaWYgKCFpc0VtcHR5KHRoaXMuZ2V0RGF0ZUZyb21VcmwoKSkpIHtcbiAgICAgIChkYXRhIGFzIHVua25vd24gYXMgS2V5VmFsdWVQYWlyKVsnc2FsZXNvZmZlcmRhdGUnXSA9IHRoaXMuZ2V0RGF0ZUZyb21VcmwoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5kb1Bvc3QoZGF0YSwgbWVzc2FnZUdyb3VwKTtcbiAgfVxuXG4gIHByaXZhdGUgZG9Qb3N0KGRhdGE6IFNhbGVzT2ZmZXJEYXRhLCBfOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHVua25vd24+IHtcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5nZXRIdHRwT3B0aW9ucygpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmdldFNvZnlVcmwoKSwgZGF0YSwgb3B0aW9ucykucGlwZShcbiAgICAgIHRha2UoMSksXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogdW5rbm93bikgPT4ge1xuICAgICAgICByZXR1cm4gb2YoZXJyb3IpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRIdHRwT3B0aW9ucygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGVhZGVyczogdGhpcy5jcmVhdGVIdHRwSGVhZGVycygpLFxuICAgICAgdGltZW91dDogMTAwMDAsXG4gICAgICBjYWNoZTogdHJ1ZSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVIdHRwSGVhZGVycygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgJ3gtYWx0LXJlZmVyZXInOiB0aGlzLnVybFNlcnZpY2UuZ2V0Q3VycmVudFVybCgpLFxuICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGdldFNvZnlVcmwoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5pc0Jhc2VDdXN0b21lcigpKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb25maWdTZXJ2aWNlLmdldENvbmZpZyhDb25maWdDb25zdGFudHMuU09GWV9VUkwpICsgJy9zb2Z5L2Jhc2UvcHVibGljLyc7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnKENvbmZpZ0NvbnN0YW50cy5TT0ZZX1VSTCkgKyAnL3NvZnkvcHVibGljLyc7XG4gIH1cblxuICBpc0Jhc2VDdXN0b21lcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoQ2F0ZWdvcmlzYXRpb25TZXJ2aWNlLmdldEN1c3RvbWVyQnJhbmQoKSA9PT0gQ3VzdG9tZXJCcmFuZEVudW0uQlJBTkRfQkFTRTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGF0ZUZyb21VcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy51cmxTZXJ2aWNlLmdldFJlcXVlc3RQYXJhbVZhbHVlKHRoaXMuUEFSQU1fREFURSwgJycpO1xuICB9XG59XG4iXX0=