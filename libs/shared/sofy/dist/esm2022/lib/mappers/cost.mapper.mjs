import { Injectable } from '@angular/core';
import { SalesOfferCost } from '../models/salesOfferCost';
import * as i0 from "@angular/core";
import * as i1 from "./promo.mapper";
export class CostMapper {
    promoMapper;
    constructor(promoMapper) {
        this.promoMapper = promoMapper;
    }
    map(rawCost) {
        const cost = new SalesOfferCost();
        cost.name = rawCost.name;
        cost.price = rawCost.price;
        cost.priceexclvat = rawCost.priceexclvat;
        cost.recurring = rawCost.recurring;
        cost.promotions = this.mapPromotions(rawCost.promotions);
        return cost;
    }
    mapPromotions(rawPromotions) {
        const promotions = [];
        if (rawPromotions) {
            rawPromotions.forEach((rawPromo) => promotions.push(this.promoMapper.map(rawPromo)));
        }
        return promotions;
    }
    static ɵfac = function CostMapper_Factory(t) { return new (t || CostMapper)(i0.ɵɵinject(i1.PromoMapper)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CostMapper, factory: CostMapper.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CostMapper, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.PromoMapper }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zdC5tYXBwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL21hcHBlcnMvY29zdC5tYXBwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7OztBQU8xRCxNQUFNLE9BQU8sVUFBVTtJQUNRO0lBQTdCLFlBQTZCLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUcsQ0FBQztJQUVsRCxHQUFHLENBQUMsT0FBc0I7UUFDL0IsTUFBTSxJQUFJLEdBQW1CLElBQUksY0FBYyxFQUFFLENBQUM7UUFFbEQsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7UUFDekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFekQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU8sYUFBYSxDQUFDLGFBQWdDO1FBQ3BELE1BQU0sVUFBVSxHQUFpQixFQUFFLENBQUM7UUFFcEMsSUFBSSxhQUFhLEVBQUUsQ0FBQztZQUNsQixhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RixDQUFDO1FBRUQsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztvRUF2QlUsVUFBVTtnRUFBVixVQUFVLFdBQVYsVUFBVSxtQkFGVCxNQUFNOztpRkFFUCxVQUFVO2NBSHRCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb21vTWFwcGVyIH0gZnJvbSAnLi9wcm9tby5tYXBwZXInO1xuaW1wb3J0IHsgQ29zdEludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvY29zdC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU2FsZXNPZmZlckNvc3QgfSBmcm9tICcuLi9tb2RlbHMvc2FsZXNPZmZlckNvc3QnO1xuaW1wb3J0IHsgU2FsZXNPZmZlclByb21vIH0gZnJvbSAnLi4vbW9kZWxzL3Jlc3BvbnNlJztcbmltcG9ydCB7IFByb21vTW9kZWwgfSBmcm9tICcuLi9tb2RlbHMvcHJvbW8ubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ29zdE1hcHBlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgcHJvbW9NYXBwZXI6IFByb21vTWFwcGVyKSB7fVxuXG4gIHB1YmxpYyBtYXAocmF3Q29zdDogQ29zdEludGVyZmFjZSk6IFNhbGVzT2ZmZXJDb3N0IHtcbiAgICBjb25zdCBjb3N0OiBTYWxlc09mZmVyQ29zdCA9IG5ldyBTYWxlc09mZmVyQ29zdCgpO1xuXG4gICAgY29zdC5uYW1lID0gcmF3Q29zdC5uYW1lO1xuICAgIGNvc3QucHJpY2UgPSByYXdDb3N0LnByaWNlO1xuICAgIGNvc3QucHJpY2VleGNsdmF0ID0gcmF3Q29zdC5wcmljZWV4Y2x2YXQ7XG4gICAgY29zdC5yZWN1cnJpbmcgPSByYXdDb3N0LnJlY3VycmluZztcbiAgICBjb3N0LnByb21vdGlvbnMgPSB0aGlzLm1hcFByb21vdGlvbnMocmF3Q29zdC5wcm9tb3Rpb25zKTtcblxuICAgIHJldHVybiBjb3N0O1xuICB9XG5cbiAgcHJpdmF0ZSBtYXBQcm9tb3Rpb25zKHJhd1Byb21vdGlvbnM6IFNhbGVzT2ZmZXJQcm9tb1tdKSB7XG4gICAgY29uc3QgcHJvbW90aW9uczogUHJvbW9Nb2RlbFtdID0gW107XG5cbiAgICBpZiAocmF3UHJvbW90aW9ucykge1xuICAgICAgcmF3UHJvbW90aW9ucy5mb3JFYWNoKChyYXdQcm9tbykgPT4gcHJvbW90aW9ucy5wdXNoKHRoaXMucHJvbW9NYXBwZXIubWFwKHJhd1Byb21vKSkpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9tb3Rpb25zO1xuICB9XG59XG4iXX0=