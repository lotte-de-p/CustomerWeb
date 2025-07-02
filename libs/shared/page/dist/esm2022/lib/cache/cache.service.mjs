import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class CacheService {
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
    static ɵfac = function CacheService_Factory(t) { return new (t || CacheService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CacheService, factory: CacheService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CacheService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY2FjaGUvY2FjaGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFLN0MsTUFBTSxPQUFPLFlBQVk7SUFDZixLQUFLLEdBQUcsRUFBRSxDQUFDO0lBRW5CLEdBQUcsQ0FBSSxHQUFXO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsR0FBRyxDQUFJLEdBQVcsRUFBRSxTQUF3QjtRQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFFRCxNQUFNLENBQUMsR0FBVztRQUNoQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztzRUFiVSxZQUFZO2dFQUFaLFlBQVksV0FBWixZQUFZLG1CQUZYLE1BQU07O2lGQUVQLFlBQVk7Y0FIeEIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc2hhcmVSZXBsYXkgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDYWNoZVNlcnZpY2Uge1xuICBwcml2YXRlIGNhY2hlID0ge307XG5cbiAgZ2V0PFQ+KGtleTogc3RyaW5nKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIHRoaXMuY2FjaGVba2V5XTtcbiAgfVxuXG4gIGFkZDxUPihrZXk6IHN0cmluZywgcmVzcG9uc2UkOiBPYnNlcnZhYmxlPFQ+KTogdm9pZCB7XG4gICAgdGhpcy5jYWNoZVtrZXldID0gcmVzcG9uc2UkLnBpcGUoc2hhcmVSZXBsYXkoeyBidWZmZXJTaXplOiAxLCByZWZDb3VudDogZmFsc2UgfSkpO1xuICB9XG5cbiAgcmVtb3ZlKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgZGVsZXRlIHRoaXMuY2FjaGVba2V5XTtcbiAgfVxufVxuIl19