import { Injectable } from '@angular/core';
import { PromoModel } from '../models/promo.model';
import { PeriodModel } from '../models/period.model';
import * as i0 from "@angular/core";
export class PromoMapper {
    map(rawPromo) {
        const promo = new PromoModel();
        promo.backendid = rawPromo.backendid;
        promo.duration = rawPromo.duration;
        promo.legalid = rawPromo.legalid;
        promo.name = rawPromo.name;
        promo.price = rawPromo.price;
        promo.priceexclvat = rawPromo.priceexclvat;
        promo.puk = rawPromo.puk;
        promo.period = Object.assign(new PeriodModel(), rawPromo.period);
        promo.tags = rawPromo.tags;
        return promo;
    }
    static ɵfac = function PromoMapper_Factory(t) { return new (t || PromoMapper)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PromoMapper, factory: PromoMapper.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PromoMapper, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbW8ubWFwcGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9tYXBwZXJzL3Byb21vLm1hcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBS3JELE1BQU0sT0FBTyxXQUFXO0lBQ2YsR0FBRyxDQUFDLFFBQXlCO1FBQ2xDLE1BQU0sS0FBSyxHQUFlLElBQUksVUFBVSxFQUFFLENBQUM7UUFFM0MsS0FBSyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDO1FBQ3JDLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUNuQyxLQUFLLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDakMsS0FBSyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQzNCLEtBQUssQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUM3QixLQUFLLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUM7UUFDM0MsS0FBSyxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDO1FBQ3pCLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLFdBQVcsRUFBRSxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqRSxLQUFLLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFFM0IsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO3FFQWZVLFdBQVc7Z0VBQVgsV0FBVyxXQUFYLFdBQVcsbUJBRlYsTUFBTTs7aUZBRVAsV0FBVztjQUh2QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTYWxlc09mZmVyUHJvbW8gfSBmcm9tICcuLi9tb2RlbHMvcmVzcG9uc2UnO1xuaW1wb3J0IHsgUHJvbW9Nb2RlbCB9IGZyb20gJy4uL21vZGVscy9wcm9tby5tb2RlbCc7XG5pbXBvcnQgeyBQZXJpb2RNb2RlbCB9IGZyb20gJy4uL21vZGVscy9wZXJpb2QubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvbW9NYXBwZXIge1xuICBwdWJsaWMgbWFwKHJhd1Byb21vOiBTYWxlc09mZmVyUHJvbW8pOiBQcm9tb01vZGVsIHtcbiAgICBjb25zdCBwcm9tbzogUHJvbW9Nb2RlbCA9IG5ldyBQcm9tb01vZGVsKCk7XG5cbiAgICBwcm9tby5iYWNrZW5kaWQgPSByYXdQcm9tby5iYWNrZW5kaWQ7XG4gICAgcHJvbW8uZHVyYXRpb24gPSByYXdQcm9tby5kdXJhdGlvbjtcbiAgICBwcm9tby5sZWdhbGlkID0gcmF3UHJvbW8ubGVnYWxpZDtcbiAgICBwcm9tby5uYW1lID0gcmF3UHJvbW8ubmFtZTtcbiAgICBwcm9tby5wcmljZSA9IHJhd1Byb21vLnByaWNlO1xuICAgIHByb21vLnByaWNlZXhjbHZhdCA9IHJhd1Byb21vLnByaWNlZXhjbHZhdDtcbiAgICBwcm9tby5wdWsgPSByYXdQcm9tby5wdWs7XG4gICAgcHJvbW8ucGVyaW9kID0gT2JqZWN0LmFzc2lnbihuZXcgUGVyaW9kTW9kZWwoKSwgcmF3UHJvbW8ucGVyaW9kKTtcbiAgICBwcm9tby50YWdzID0gcmF3UHJvbW8udGFncztcblxuICAgIHJldHVybiBwcm9tbztcbiAgfVxufVxuIl19