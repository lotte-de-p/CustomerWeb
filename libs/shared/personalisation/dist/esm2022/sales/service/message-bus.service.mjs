import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import * as i0 from "@angular/core";
// this service is used by ONE configurator to sync state between monorepo and tcp.angular (https://jira.rel.apps.telenet.be/browse/DIGSALE1TM-1140)
export class MessageBusService {
    messageBus$ = new ReplaySubject(1000);
    static ɵfac = function MessageBusService_Factory(t) { return new (t || MessageBusService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: MessageBusService, factory: MessageBusService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MessageBusService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS1idXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zYWxlcy9zZXJ2aWNlL21lc3NhZ2UtYnVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUVyQyxvSkFBb0o7QUFJcEosTUFBTSxPQUFPLGlCQUFpQjtJQUM1QixXQUFXLEdBQUcsSUFBSSxhQUFhLENBQVUsSUFBSyxDQUFDLENBQUM7MkVBRHJDLGlCQUFpQjtnRUFBakIsaUJBQWlCLFdBQWpCLGlCQUFpQixtQkFGaEIsTUFBTTs7aUZBRVAsaUJBQWlCO2NBSDdCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuLy8gdGhpcyBzZXJ2aWNlIGlzIHVzZWQgYnkgT05FIGNvbmZpZ3VyYXRvciB0byBzeW5jIHN0YXRlIGJldHdlZW4gbW9ub3JlcG8gYW5kIHRjcC5hbmd1bGFyIChodHRwczovL2ppcmEucmVsLmFwcHMudGVsZW5ldC5iZS9icm93c2UvRElHU0FMRTFUTS0xMTQwKVxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VCdXNTZXJ2aWNlIHtcbiAgbWVzc2FnZUJ1cyQgPSBuZXcgUmVwbGF5U3ViamVjdDxNZXNzYWdlPigxXzAwMCk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZSB7XG4gIHR5cGU6IHN0cmluZztcbiAgcGF5bG9hZEFzSnNvbjogc3RyaW5nO1xufVxuIl19