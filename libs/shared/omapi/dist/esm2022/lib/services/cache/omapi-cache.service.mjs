import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class OmapiCacheService {
    cache = {};
    get(key) {
        return this.cache[key];
    }
    add(key, response$) {
        this.cache[key] = response$.pipe(shareReplay({ bufferSize: 1, refCount: false }));
    }
    remove(key) {
        delete this.cache[key];
    }
    static ɵfac = function OmapiCacheService_Factory(t) { return new (t || OmapiCacheService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: OmapiCacheService, factory: OmapiCacheService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OmapiCacheService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib21hcGktY2FjaGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvY2FjaGUvb21hcGktY2FjaGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFNN0MsTUFBTSxPQUFPLGlCQUFpQjtJQUNwQixLQUFLLEdBQWtDLEVBQUUsQ0FBQztJQUVsRCxHQUFHLENBQUMsR0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsR0FBRyxDQUFDLEdBQVcsRUFBRSxTQUF3QjtRQUN2QyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFFRCxNQUFNLENBQUMsR0FBVztRQUNoQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQzsyRUFiVSxpQkFBaUI7Z0VBQWpCLGlCQUFpQixXQUFqQixpQkFBaUIsbUJBRmhCLE1BQU07O2lGQUVQLGlCQUFpQjtjQUg3QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzaGFyZVJlcGxheSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE9tYXBpQ2FjaGVTZXJ2aWNlPFQ+IHtcbiAgcHJpdmF0ZSBjYWNoZTogUmVjb3JkPHN0cmluZywgT2JzZXJ2YWJsZTxUPj4gPSB7fTtcblxuICBnZXQoa2V5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5jYWNoZVtrZXldO1xuICB9XG5cbiAgYWRkKGtleTogc3RyaW5nLCByZXNwb25zZSQ6IE9ic2VydmFibGU8VD4pOiB2b2lkIHtcbiAgICB0aGlzLmNhY2hlW2tleV0gPSByZXNwb25zZSQucGlwZShzaGFyZVJlcGxheSh7IGJ1ZmZlclNpemU6IDEsIHJlZkNvdW50OiBmYWxzZSB9KSk7XG4gIH1cblxuICByZW1vdmUoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBkZWxldGUgdGhpcy5jYWNoZVtrZXldO1xuICB9XG59XG4iXX0=