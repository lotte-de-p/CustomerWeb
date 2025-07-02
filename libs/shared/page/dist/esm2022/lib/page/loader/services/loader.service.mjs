import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoaderData } from '../loaderData.model';
import * as i0 from "@angular/core";
export class LoaderService {
    skipUrls = ['/authrefresh', '/?p=eligibleproducts', '/search/api/'];
    loadingStatus = new BehaviorSubject(new LoaderData(false));
    start() {
        const _loaderData = new LoaderData(true);
        this.loadingStatus.next(_loaderData);
    }
    stop() {
        const _loaderData = new LoaderData(false);
        this.loadingStatus.next(_loaderData);
    }
    shouldDisableLoader(url) {
        return this.skipUrls.some((skipUrl) => new RegExp(skipUrl).test(url)) || url.includes('disabledLoader=true');
    }
    static ɵfac = function LoaderService_Factory(t) { return new (t || LoaderService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LoaderService, factory: LoaderService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoaderService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL3BhZ2UvbG9hZGVyL3NlcnZpY2VzL2xvYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBS2pELE1BQU0sT0FBTyxhQUFhO0lBQ3hCLFFBQVEsR0FBRyxDQUFDLGNBQWMsRUFBRSxzQkFBc0IsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUVwRSxhQUFhLEdBQUcsSUFBSSxlQUFlLENBQWEsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUV2RSxLQUFLO1FBQ0gsTUFBTSxXQUFXLEdBQUcsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELElBQUk7UUFDRixNQUFNLFdBQVcsR0FBRyxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsbUJBQW1CLENBQUMsR0FBVztRQUM3QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDL0csQ0FBQzt1RUFqQlUsYUFBYTtnRUFBYixhQUFhLFdBQWIsYUFBYSxtQkFGWixNQUFNOztpRkFFUCxhQUFhO2NBSHpCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTG9hZGVyRGF0YSB9IGZyb20gJy4uL2xvYWRlckRhdGEubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTG9hZGVyU2VydmljZSB7XG4gIHNraXBVcmxzID0gWycvYXV0aHJlZnJlc2gnLCAnLz9wPWVsaWdpYmxlcHJvZHVjdHMnLCAnL3NlYXJjaC9hcGkvJ107XG5cbiAgbG9hZGluZ1N0YXR1cyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TG9hZGVyRGF0YT4obmV3IExvYWRlckRhdGEoZmFsc2UpKTtcblxuICBzdGFydCgpIHtcbiAgICBjb25zdCBfbG9hZGVyRGF0YSA9IG5ldyBMb2FkZXJEYXRhKHRydWUpO1xuICAgIHRoaXMubG9hZGluZ1N0YXR1cy5uZXh0KF9sb2FkZXJEYXRhKTtcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgY29uc3QgX2xvYWRlckRhdGEgPSBuZXcgTG9hZGVyRGF0YShmYWxzZSk7XG4gICAgdGhpcy5sb2FkaW5nU3RhdHVzLm5leHQoX2xvYWRlckRhdGEpO1xuICB9XG5cbiAgc2hvdWxkRGlzYWJsZUxvYWRlcih1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNraXBVcmxzLnNvbWUoKHNraXBVcmwpID0+IG5ldyBSZWdFeHAoc2tpcFVybCkudGVzdCh1cmwpKSB8fCB1cmwuaW5jbHVkZXMoJ2Rpc2FibGVkTG9hZGVyPXRydWUnKTtcbiAgfVxufVxuIl19