import { Injectable } from '@angular/core';
import { map } from 'lodash-es';
import { SalesData } from '../models/sales-data.model';
import { SalesDataType } from '../models/sales-data.type';
import * as i0 from "@angular/core";
export class SalesDataMapper {
    mapSalesData(rawSalesData) {
        const salesData = new SalesData();
        salesData.setOffers(map(rawSalesData.products, (id) => this.mapSalesDataOffer(id, rawSalesData)));
        return salesData;
    }
    mapSalesDataOffer(id, rawSalesData) {
        return {
            id,
            type: SalesDataType.TYPE_PRODUCT,
            offers: this.mapSalesDataSubOffers(rawSalesData),
        };
    }
    mapSalesDataSubOffers(rawSalesData) {
        return [
            ...this.mapSubOffers(rawSalesData.options, SalesDataType.TYPE_OPTION),
            ...this.mapSubOffers(rawSalesData.optins, SalesDataType.TYPE_OPTIN),
        ];
    }
    mapSubOffers(subProducts, type) {
        return map(subProducts, (id) => {
            return {
                id,
                type,
            };
        });
    }
    static ɵfac = function SalesDataMapper_Factory(t) { return new (t || SalesDataMapper)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SalesDataMapper, factory: SalesDataMapper.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SalesDataMapper, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FsZXMtZGF0YS5tYXBwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc2FsZXMvbWFwcGVycy9zYWxlcy1kYXRhLm1hcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDaEMsT0FBTyxFQUFnQixTQUFTLEVBQWtCLE1BQU0sNEJBQTRCLENBQUM7QUFDckYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztBQUsxRCxNQUFNLE9BQU8sZUFBZTtJQUNuQixZQUFZLENBQUMsWUFBMEI7UUFDNUMsTUFBTSxTQUFTLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUNsQyxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsRUFBRSxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRyxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRU8saUJBQWlCLENBQUMsRUFBVSxFQUFFLFlBQTBCO1FBQzlELE9BQU87WUFDTCxFQUFFO1lBQ0YsSUFBSSxFQUFFLGFBQWEsQ0FBQyxZQUFZO1lBQ2hDLE1BQU0sRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDO1NBQy9CLENBQUM7SUFDdEIsQ0FBQztJQUVPLHFCQUFxQixDQUFDLFlBQTBCO1FBQ3RELE9BQU87WUFDTCxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsV0FBVyxDQUFDO1lBQ3JFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxVQUFVLENBQUM7U0FDcEUsQ0FBQztJQUNKLENBQUM7SUFFTyxZQUFZLENBQUMsV0FBcUIsRUFBRSxJQUFtQjtRQUM3RCxPQUFPLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRTtZQUM3QixPQUFPO2dCQUNMLEVBQUU7Z0JBQ0YsSUFBSTthQUNhLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO3lFQTdCVSxlQUFlO2dFQUFmLGVBQWUsV0FBZixlQUFlLG1CQUZkLE1BQU07O2lGQUVQLGVBQWU7Y0FIM0IsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAnbG9kYXNoLWVzJztcbmltcG9ydCB7IFJhd1NhbGVzRGF0YSwgU2FsZXNEYXRhLCBTYWxlc0RhdGFPZmZlciB9IGZyb20gJy4uL21vZGVscy9zYWxlcy1kYXRhLm1vZGVsJztcbmltcG9ydCB7IFNhbGVzRGF0YVR5cGUgfSBmcm9tICcuLi9tb2RlbHMvc2FsZXMtZGF0YS50eXBlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFNhbGVzRGF0YU1hcHBlciB7XG4gIHB1YmxpYyBtYXBTYWxlc0RhdGEocmF3U2FsZXNEYXRhOiBSYXdTYWxlc0RhdGEpOiBTYWxlc0RhdGEge1xuICAgIGNvbnN0IHNhbGVzRGF0YSA9IG5ldyBTYWxlc0RhdGEoKTtcbiAgICBzYWxlc0RhdGEuc2V0T2ZmZXJzKG1hcChyYXdTYWxlc0RhdGEucHJvZHVjdHMsIChpZCkgPT4gdGhpcy5tYXBTYWxlc0RhdGFPZmZlcihpZCwgcmF3U2FsZXNEYXRhKSkpO1xuICAgIHJldHVybiBzYWxlc0RhdGE7XG4gIH1cblxuICBwcml2YXRlIG1hcFNhbGVzRGF0YU9mZmVyKGlkOiBzdHJpbmcsIHJhd1NhbGVzRGF0YTogUmF3U2FsZXNEYXRhKTogU2FsZXNEYXRhT2ZmZXIge1xuICAgIHJldHVybiB7XG4gICAgICBpZCxcbiAgICAgIHR5cGU6IFNhbGVzRGF0YVR5cGUuVFlQRV9QUk9EVUNULFxuICAgICAgb2ZmZXJzOiB0aGlzLm1hcFNhbGVzRGF0YVN1Yk9mZmVycyhyYXdTYWxlc0RhdGEpLFxuICAgIH0gYXMgU2FsZXNEYXRhT2ZmZXI7XG4gIH1cblxuICBwcml2YXRlIG1hcFNhbGVzRGF0YVN1Yk9mZmVycyhyYXdTYWxlc0RhdGE6IFJhd1NhbGVzRGF0YSk6IFNhbGVzRGF0YU9mZmVyW10ge1xuICAgIHJldHVybiBbXG4gICAgICAuLi50aGlzLm1hcFN1Yk9mZmVycyhyYXdTYWxlc0RhdGEub3B0aW9ucywgU2FsZXNEYXRhVHlwZS5UWVBFX09QVElPTiksXG4gICAgICAuLi50aGlzLm1hcFN1Yk9mZmVycyhyYXdTYWxlc0RhdGEub3B0aW5zLCBTYWxlc0RhdGFUeXBlLlRZUEVfT1BUSU4pLFxuICAgIF07XG4gIH1cblxuICBwcml2YXRlIG1hcFN1Yk9mZmVycyhzdWJQcm9kdWN0czogc3RyaW5nW10sIHR5cGU6IFNhbGVzRGF0YVR5cGUpOiBTYWxlc0RhdGFPZmZlcltdIHtcbiAgICByZXR1cm4gbWFwKHN1YlByb2R1Y3RzLCAoaWQpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkLFxuICAgICAgICB0eXBlLFxuICAgICAgfSBhcyBTYWxlc0RhdGFPZmZlcjtcbiAgICB9KTtcbiAgfVxufVxuIl19