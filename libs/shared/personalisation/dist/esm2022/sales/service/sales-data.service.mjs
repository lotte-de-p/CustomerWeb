import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { SalesData } from '../models/sales-data.model';
import * as i0 from "@angular/core";
import * as i1 from "@telenet/ng-lib-page";
import * as i2 from "../mappers/sales-data.mapper";
export class SalesDataService {
    jsonUrlService;
    salesDataMapper;
    constructor(jsonUrlService, salesDataMapper) {
        this.jsonUrlService = jsonUrlService;
        this.salesDataMapper = salesDataMapper;
    }
    getCompressedSalesData(salesData) {
        return this.jsonUrlService.compress(salesData);
    }
    getDecompressedSalesData(compressedSalesData) {
        if (compressedSalesData) {
            return this.jsonUrlService.decompress(compressedSalesData).pipe(
            // @ts-ignore
            catchError(() => of(new SalesData())), map((salesData) => {
                return new SalesData(salesData);
            }));
        }
        return of(new SalesData());
    }
    mapSalesData(rawSalesData) {
        return this.salesDataMapper.mapSalesData(rawSalesData);
    }
    static ɵfac = function SalesDataService_Factory(t) { return new (t || SalesDataService)(i0.ɵɵinject(i1.JsonUrlService), i0.ɵɵinject(i2.SalesDataMapper)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SalesDataService, factory: SalesDataService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SalesDataService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.JsonUrlService }, { type: i2.SalesDataMapper }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FsZXMtZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3NhbGVzL3NlcnZpY2Uvc2FsZXMtZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpELE9BQU8sRUFBZ0IsU0FBUyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7QUFJckUsTUFBTSxPQUFPLGdCQUFnQjtJQUVSO0lBQ0E7SUFGbkIsWUFDbUIsY0FBOEIsRUFDOUIsZUFBZ0M7UUFEaEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUNoRCxDQUFDO0lBRUcsc0JBQXNCLENBQUMsU0FBb0I7UUFDaEQsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRU0sd0JBQXdCLENBQUMsbUJBQTJCO1FBQ3pELElBQUksbUJBQW1CLEVBQUUsQ0FBQztZQUN4QixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLENBQUMsSUFBSTtZQUM3RCxhQUFhO1lBQ2IsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFDckMsR0FBRyxDQUFDLENBQUMsU0FBb0IsRUFBRSxFQUFFO2dCQUMzQixPQUFPLElBQUksU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQyxDQUNILENBQUM7UUFDSixDQUFDO1FBQ0QsT0FBTyxFQUFFLENBQUMsSUFBSSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFTSxZQUFZLENBQUMsWUFBMEI7UUFDNUMsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN6RCxDQUFDOzBFQXpCVSxnQkFBZ0I7Z0VBQWhCLGdCQUFnQixXQUFoQixnQkFBZ0IsbUJBREgsTUFBTTs7aUZBQ25CLGdCQUFnQjtjQUQ1QixVQUFVO2VBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEpzb25VcmxTZXJ2aWNlIH0gZnJvbSAnQHRlbGVuZXQvbmctbGliLXBhZ2UnO1xuaW1wb3J0IHsgUmF3U2FsZXNEYXRhLCBTYWxlc0RhdGEgfSBmcm9tICcuLi9tb2RlbHMvc2FsZXMtZGF0YS5tb2RlbCc7XG5pbXBvcnQgeyBTYWxlc0RhdGFNYXBwZXIgfSBmcm9tICcuLi9tYXBwZXJzL3NhbGVzLWRhdGEubWFwcGVyJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBTYWxlc0RhdGFTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBqc29uVXJsU2VydmljZTogSnNvblVybFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBzYWxlc0RhdGFNYXBwZXI6IFNhbGVzRGF0YU1hcHBlclxuICApIHt9XG5cbiAgcHVibGljIGdldENvbXByZXNzZWRTYWxlc0RhdGEoc2FsZXNEYXRhOiBTYWxlc0RhdGEpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmpzb25VcmxTZXJ2aWNlLmNvbXByZXNzKHNhbGVzRGF0YSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RGVjb21wcmVzc2VkU2FsZXNEYXRhKGNvbXByZXNzZWRTYWxlc0RhdGE6IHN0cmluZyk6IE9ic2VydmFibGU8U2FsZXNEYXRhPiB7XG4gICAgaWYgKGNvbXByZXNzZWRTYWxlc0RhdGEpIHtcbiAgICAgIHJldHVybiB0aGlzLmpzb25VcmxTZXJ2aWNlLmRlY29tcHJlc3MoY29tcHJlc3NlZFNhbGVzRGF0YSkucGlwZShcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjYXRjaEVycm9yKCgpID0+IG9mKG5ldyBTYWxlc0RhdGEoKSkpLFxuICAgICAgICBtYXAoKHNhbGVzRGF0YTogU2FsZXNEYXRhKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBTYWxlc0RhdGEoc2FsZXNEYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBvZihuZXcgU2FsZXNEYXRhKCkpO1xuICB9XG5cbiAgcHVibGljIG1hcFNhbGVzRGF0YShyYXdTYWxlc0RhdGE6IFJhd1NhbGVzRGF0YSk6IFNhbGVzRGF0YSB7XG4gICAgcmV0dXJuIHRoaXMuc2FsZXNEYXRhTWFwcGVyLm1hcFNhbGVzRGF0YShyYXdTYWxlc0RhdGEpO1xuICB9XG59XG4iXX0=