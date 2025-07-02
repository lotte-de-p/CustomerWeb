import { Injectable } from '@angular/core';
import { OptionModel } from '../models/option.model';
import * as i0 from "@angular/core";
import * as i1 from "./promo.mapper";
export class OptionMapper {
    promoMapper;
    constructor(promoMapper) {
        this.promoMapper = promoMapper;
    }
    map(rawOption) {
        const option = new OptionModel();
        option.description = rawOption.description;
        option.mutuallyExclusive = rawOption.mutuallyExclusive;
        option.omapiId = rawOption.omapiId;
        option.originalprice = rawOption.originalprice;
        option.price = rawOption.price;
        option.priceexclvat = rawOption.priceexclvat;
        option.selected = rawOption.selected;
        option.specUrl = rawOption.specUrl;
        option.promos = this.mapPromos(rawOption.promos);
        return option;
    }
    mapPromos(rawPromos) {
        const promos = [];
        if (rawPromos) {
            rawPromos.forEach((rawPromo) => promos.push(this.promoMapper.map(rawPromo)));
        }
        return promos;
    }
    static ɵfac = function OptionMapper_Factory(t) { return new (t || OptionMapper)(i0.ɵɵinject(i1.PromoMapper)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: OptionMapper, factory: OptionMapper.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OptionMapper, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.PromoMapper }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLm1hcHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvbWFwcGVycy9vcHRpb24ubWFwcGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFPckQsTUFBTSxPQUFPLFlBQVk7SUFDTTtJQUE3QixZQUE2QixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFHLENBQUM7SUFFbEQsR0FBRyxDQUFDLFNBQTBCO1FBQ25DLE1BQU0sTUFBTSxHQUFnQixJQUFJLFdBQVcsRUFBRSxDQUFDO1FBRTlDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQztRQUMzQyxNQUFNLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDLGlCQUFpQixDQUFDO1FBQ3ZELE1BQU0sQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQztRQUNuQyxNQUFNLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQyxhQUFhLENBQUM7UUFDL0MsTUFBTSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQztRQUM3QyxNQUFNLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7UUFDckMsTUFBTSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDO1FBRW5DLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFakQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVPLFNBQVMsQ0FBQyxTQUE0QjtRQUM1QyxNQUFNLE1BQU0sR0FBaUIsRUFBRSxDQUFDO1FBRWhDLElBQUksU0FBUyxFQUFFLENBQUM7WUFDZCxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvRSxDQUFDO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztzRUE1QlUsWUFBWTtnRUFBWixZQUFZLFdBQVosWUFBWSxtQkFGWCxNQUFNOztpRkFFUCxZQUFZO2NBSHhCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb21vTWFwcGVyIH0gZnJvbSAnLi9wcm9tby5tYXBwZXInO1xuaW1wb3J0IHsgT3B0aW9uSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9vcHRpb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IE9wdGlvbk1vZGVsIH0gZnJvbSAnLi4vbW9kZWxzL29wdGlvbi5tb2RlbCc7XG5pbXBvcnQgeyBTYWxlc09mZmVyUHJvbW8gfSBmcm9tICcuLi9tb2RlbHMvcmVzcG9uc2UnO1xuaW1wb3J0IHsgUHJvbW9Nb2RlbCB9IGZyb20gJy4uL21vZGVscy9wcm9tby5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBPcHRpb25NYXBwZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHByb21vTWFwcGVyOiBQcm9tb01hcHBlcikge31cblxuICBwdWJsaWMgbWFwKHJhd09wdGlvbjogT3B0aW9uSW50ZXJmYWNlKTogT3B0aW9uTW9kZWwge1xuICAgIGNvbnN0IG9wdGlvbjogT3B0aW9uTW9kZWwgPSBuZXcgT3B0aW9uTW9kZWwoKTtcblxuICAgIG9wdGlvbi5kZXNjcmlwdGlvbiA9IHJhd09wdGlvbi5kZXNjcmlwdGlvbjtcbiAgICBvcHRpb24ubXV0dWFsbHlFeGNsdXNpdmUgPSByYXdPcHRpb24ubXV0dWFsbHlFeGNsdXNpdmU7XG4gICAgb3B0aW9uLm9tYXBpSWQgPSByYXdPcHRpb24ub21hcGlJZDtcbiAgICBvcHRpb24ub3JpZ2luYWxwcmljZSA9IHJhd09wdGlvbi5vcmlnaW5hbHByaWNlO1xuICAgIG9wdGlvbi5wcmljZSA9IHJhd09wdGlvbi5wcmljZTtcbiAgICBvcHRpb24ucHJpY2VleGNsdmF0ID0gcmF3T3B0aW9uLnByaWNlZXhjbHZhdDtcbiAgICBvcHRpb24uc2VsZWN0ZWQgPSByYXdPcHRpb24uc2VsZWN0ZWQ7XG4gICAgb3B0aW9uLnNwZWNVcmwgPSByYXdPcHRpb24uc3BlY1VybDtcblxuICAgIG9wdGlvbi5wcm9tb3MgPSB0aGlzLm1hcFByb21vcyhyYXdPcHRpb24ucHJvbW9zKTtcblxuICAgIHJldHVybiBvcHRpb247XG4gIH1cblxuICBwcml2YXRlIG1hcFByb21vcyhyYXdQcm9tb3M6IFNhbGVzT2ZmZXJQcm9tb1tdKSB7XG4gICAgY29uc3QgcHJvbW9zOiBQcm9tb01vZGVsW10gPSBbXTtcblxuICAgIGlmIChyYXdQcm9tb3MpIHtcbiAgICAgIHJhd1Byb21vcy5mb3JFYWNoKChyYXdQcm9tbykgPT4gcHJvbW9zLnB1c2godGhpcy5wcm9tb01hcHBlci5tYXAocmF3UHJvbW8pKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb21vcztcbiAgfVxufVxuIl19