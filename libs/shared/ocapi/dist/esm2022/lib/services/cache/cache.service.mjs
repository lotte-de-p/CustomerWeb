import { shareReplay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class CacheService {
    cache = {};
    // eslint-disable-next-line @typescript-eslint/ban-types
    add(key, response$) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.cache[key] = response$.pipe(shareReplay({ bufferSize: 1 }));
    }
    get(key) {
        return this.cache[key];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvY2FjaGUvY2FjaGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNM0MsTUFBTSxPQUFPLFlBQVk7SUFDZixLQUFLLEdBQXdDLEVBQUUsQ0FBQztJQUV4RCx3REFBd0Q7SUFDeEQsR0FBRyxDQUFDLEdBQVcsRUFBRSxTQUF1QztRQUN0RCw2REFBNkQ7UUFDN0QsYUFBYTtRQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCxHQUFHLENBQUMsR0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsTUFBTSxDQUFDLEdBQVc7UUFDaEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7c0VBaEJVLFlBQVk7Z0VBQVosWUFBWSxXQUFaLFlBQVksbUJBRlgsTUFBTTs7aUZBRVAsWUFBWTtjQUh4QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaGFyZVJlcGxheSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENhY2hlU2VydmljZSB7XG4gIHByaXZhdGUgY2FjaGU6IFJlY29yZDxzdHJpbmcsIE9ic2VydmFibGU8dW5rbm93bj4+ID0ge307XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcbiAgYWRkKGtleTogc3RyaW5nLCByZXNwb25zZSQ6IE9ic2VydmFibGU8dW5rbm93biB8IE9iamVjdD4pOiB2b2lkIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHRoaXMuY2FjaGVba2V5XSA9IHJlc3BvbnNlJC5waXBlKHNoYXJlUmVwbGF5KHsgYnVmZmVyU2l6ZTogMSB9KSk7XG4gIH1cblxuICBnZXQoa2V5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPHVua25vd24+IHtcbiAgICByZXR1cm4gdGhpcy5jYWNoZVtrZXldO1xuICB9XG5cbiAgcmVtb3ZlKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgZGVsZXRlIHRoaXMuY2FjaGVba2V5XTtcbiAgfVxufVxuIl19