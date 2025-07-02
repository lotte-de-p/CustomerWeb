import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class OmapiQueryHelper {
    getHttpHeaders() {
        return new HttpHeaders(this.createHttpHeaders());
    }
    createHttpHeaders() {
        return {
            'Content-Type': 'application/json',
        };
    }
    getHttpOptions() {
        return {
            headers: this.getHttpHeaders(),
        };
    }
    static ɵfac = function OmapiQueryHelper_Factory(t) { return new (t || OmapiQueryHelper)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: OmapiQueryHelper, factory: OmapiQueryHelper.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OmapiQueryHelper, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib21hcGktcXVlcnkuaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9oZWxwZXJzL29tYXBpLXF1ZXJ5LmhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0MsTUFBTSxPQUFPLGdCQUFnQjtJQUMzQixjQUFjO1FBQ1osT0FBTyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxpQkFBaUI7UUFDZixPQUFPO1lBQ0wsY0FBYyxFQUFFLGtCQUFrQjtTQUNuQyxDQUFDO0lBQ0osQ0FBQztJQUVELGNBQWM7UUFDWixPQUFPO1lBQ0wsT0FBTyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUU7U0FDL0IsQ0FBQztJQUNKLENBQUM7MEVBZlUsZ0JBQWdCO2dFQUFoQixnQkFBZ0IsV0FBaEIsZ0JBQWdCLG1CQUZmLE1BQU07O2lGQUVQLGdCQUFnQjtjQUg1QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE9tYXBpUXVlcnlIZWxwZXIge1xuICBnZXRIdHRwSGVhZGVycygpOiBIdHRwSGVhZGVycyB7XG4gICAgcmV0dXJuIG5ldyBIdHRwSGVhZGVycyh0aGlzLmNyZWF0ZUh0dHBIZWFkZXJzKCkpO1xuICB9XG5cbiAgY3JlYXRlSHR0cEhlYWRlcnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfTtcbiAgfVxuXG4gIGdldEh0dHBPcHRpb25zKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoZWFkZXJzOiB0aGlzLmdldEh0dHBIZWFkZXJzKCksXG4gICAgfTtcbiAgfVxufVxuIl19