import { shareReplay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class CacheService {
    cache = {};
    get(key) {
        return this.cache[key];
    }
    // eslint-disable-next-line @typescript-eslint/ban-types
    add(key, response$) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.cache[key] = response$.pipe(shareReplay({ bufferSize: 1 }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvY2FjaGUvY2FjaGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNM0MsTUFBTSxPQUFPLFlBQVk7SUFDZixLQUFLLEdBQXdDLEVBQUUsQ0FBQztJQUV4RCxHQUFHLENBQUMsR0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsd0RBQXdEO0lBQ3hELEdBQUcsQ0FBQyxHQUFXLEVBQUUsU0FBdUM7UUFDdEQsNkRBQTZEO1FBQzdELGFBQWE7UUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsTUFBTSxDQUFDLEdBQVc7UUFDaEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7c0VBaEJVLFlBQVk7Z0VBQVosWUFBWSxXQUFaLFlBQVksbUJBRlgsTUFBTTs7aUZBRVAsWUFBWTtjQUh4QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaGFyZVJlcGxheSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENhY2hlU2VydmljZSB7XG4gIHByaXZhdGUgY2FjaGU6IFJlY29yZDxzdHJpbmcsIE9ic2VydmFibGU8dW5rbm93bj4+ID0ge307XG5cbiAgZ2V0KGtleTogc3RyaW5nKTogT2JzZXJ2YWJsZTx1bmtub3duPiB7XG4gICAgcmV0dXJuIHRoaXMuY2FjaGVba2V5XTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG4gIGFkZChrZXk6IHN0cmluZywgcmVzcG9uc2UkOiBPYnNlcnZhYmxlPHVua25vd24gfCBPYmplY3Q+KTogdm9pZCB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB0aGlzLmNhY2hlW2tleV0gPSByZXNwb25zZSQucGlwZShzaGFyZVJlcGxheSh7IGJ1ZmZlclNpemU6IDEgfSkpO1xuICB9XG5cbiAgcmVtb3ZlKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgZGVsZXRlIHRoaXMuY2FjaGVba2V5XTtcbiAgfVxufVxuIl19