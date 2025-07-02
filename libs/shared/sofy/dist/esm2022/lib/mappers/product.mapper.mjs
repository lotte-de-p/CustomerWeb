import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import * as i0 from "@angular/core";
import * as i1 from "./cost.mapper";
import * as i2 from "./install-type.mapper";
import * as i3 from "./option.mapper";
import * as i4 from "./promo.mapper";
export class ProductMapper {
    costMapper;
    installTypeMapper;
    optionMapper;
    promoMapper;
    constructor(costMapper, installTypeMapper, optionMapper, promoMapper) {
        this.costMapper = costMapper;
        this.installTypeMapper = installTypeMapper;
        this.optionMapper = optionMapper;
        this.promoMapper = promoMapper;
    }
    map(rawProduct) {
        const product = new ProductModel();
        product.correlationId = rawProduct.correlationId;
        product.description = rawProduct.description;
        product.omapiId = rawProduct.omapiid;
        product.price = rawProduct.price;
        product.priceexclvat = rawProduct.priceexclvat;
        product.specUrl = rawProduct.specUrl;
        product.costs = this.mapCosts(rawProduct.costs);
        product.installtypes = this.mapInstallTypes(rawProduct.installtypes);
        product.options = this.mapOptions(rawProduct.options);
        product.promos = this.mapPromos(rawProduct.promos);
        return product;
    }
    mapCosts(rawCosts) {
        const costs = [];
        if (rawCosts) {
            rawCosts.forEach((rawCost) => costs.push(this.costMapper.map(rawCost)));
        }
        return costs;
    }
    mapInstallTypes(rawInstallTypes) {
        const installTypes = [];
        if (rawInstallTypes) {
            rawInstallTypes.forEach((rawInstallType) => installTypes.push(this.installTypeMapper.map(rawInstallType)));
        }
        return installTypes;
    }
    mapOptions(rawOptions) {
        const options = [];
        if (rawOptions) {
            rawOptions.forEach((rawOption) => options.push(this.optionMapper.map(rawOption)));
        }
        return options;
    }
    mapPromos(rawPromos) {
        const promos = [];
        if (rawPromos) {
            rawPromos.forEach((rawPromo) => promos.push(this.promoMapper.map(rawPromo)));
        }
        return promos;
    }
    static ɵfac = function ProductMapper_Factory(t) { return new (t || ProductMapper)(i0.ɵɵinject(i1.CostMapper), i0.ɵɵinject(i2.InstallTypeMapper), i0.ɵɵinject(i3.OptionMapper), i0.ɵɵinject(i4.PromoMapper)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ProductMapper, factory: ProductMapper.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductMapper, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.CostMapper }, { type: i2.InstallTypeMapper }, { type: i3.OptionMapper }, { type: i4.PromoMapper }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5tYXBwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL21hcHBlcnMvcHJvZHVjdC5tYXBwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU0zQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7OztBQVl2RCxNQUFNLE9BQU8sYUFBYTtJQUVMO0lBQ0E7SUFDQTtJQUNBO0lBSm5CLFlBQ21CLFVBQXNCLEVBQ3RCLGlCQUFvQyxFQUNwQyxZQUEwQixFQUMxQixXQUF3QjtRQUh4QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFDeEMsQ0FBQztJQUVHLEdBQUcsQ0FBQyxVQUE0QjtRQUNyQyxNQUFNLE9BQU8sR0FBaUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVqRCxPQUFPLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDakQsT0FBTyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQzdDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQztRQUNyQyxPQUFPLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDakMsT0FBTyxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDO1FBQy9DLE9BQU8sQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQztRQUVyQyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hELE9BQU8sQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDckUsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0RCxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRW5ELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFTyxRQUFRLENBQUMsUUFBeUI7UUFDeEMsTUFBTSxLQUFLLEdBQXFCLEVBQUUsQ0FBQztRQUVuQyxJQUFJLFFBQVEsRUFBRSxDQUFDO1lBQ2IsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUUsQ0FBQztRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVPLGVBQWUsQ0FBQyxlQUF1QztRQUM3RCxNQUFNLFlBQVksR0FBdUIsRUFBRSxDQUFDO1FBRTVDLElBQUksZUFBZSxFQUFFLENBQUM7WUFDcEIsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RyxDQUFDO1FBRUQsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQztJQUVPLFVBQVUsQ0FBQyxVQUE2QjtRQUM5QyxNQUFNLE9BQU8sR0FBa0IsRUFBRSxDQUFDO1FBRWxDLElBQUksVUFBVSxFQUFFLENBQUM7WUFDZixVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRixDQUFDO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVPLFNBQVMsQ0FBQyxTQUE0QjtRQUM1QyxNQUFNLE1BQU0sR0FBaUIsRUFBRSxDQUFDO1FBRWhDLElBQUksU0FBUyxFQUFFLENBQUM7WUFDZCxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvRSxDQUFDO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzt1RUFoRVUsYUFBYTtnRUFBYixhQUFhLFdBQWIsYUFBYSxtQkFGWixNQUFNOztpRkFFUCxhQUFhO2NBSHpCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvc3RNYXBwZXIgfSBmcm9tICcuL2Nvc3QubWFwcGVyJztcbmltcG9ydCB7IEluc3RhbGxUeXBlTWFwcGVyIH0gZnJvbSAnLi9pbnN0YWxsLXR5cGUubWFwcGVyJztcbmltcG9ydCB7IE9wdGlvbk1hcHBlciB9IGZyb20gJy4vb3B0aW9uLm1hcHBlcic7XG5pbXBvcnQgeyBQcm9tb01hcHBlciB9IGZyb20gJy4vcHJvbW8ubWFwcGVyJztcbmltcG9ydCB7IFByb2R1Y3RJbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3Byb2R1Y3QuaW50ZXJmYWNlJztcbmltcG9ydCB7IFByb2R1Y3RNb2RlbCB9IGZyb20gJy4uL21vZGVscy9wcm9kdWN0Lm1vZGVsJztcbmltcG9ydCB7IEluc3RhbGxUeXBlSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnN0YWxsLXR5cGUuaW50ZXJmYWNlJztcbmltcG9ydCB7IEluc3RhbGxUeXBlTW9kZWwgfSBmcm9tICcuLi9tb2RlbHMvaW5zdGFsbC10eXBlLm1vZGVsJztcbmltcG9ydCB7IE9wdGlvbkludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvb3B0aW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBPcHRpb25Nb2RlbCB9IGZyb20gJy4uL21vZGVscy9vcHRpb24ubW9kZWwnO1xuaW1wb3J0IHsgU2FsZXNPZmZlclByb21vIH0gZnJvbSAnLi4vbW9kZWxzL3Jlc3BvbnNlJztcbmltcG9ydCB7IFByb21vTW9kZWwgfSBmcm9tICcuLi9tb2RlbHMvcHJvbW8ubW9kZWwnO1xuaW1wb3J0IHsgQ29zdEludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvY29zdC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU2FsZXNPZmZlckNvc3QgfSBmcm9tICcuLi9tb2RlbHMvc2FsZXNPZmZlckNvc3QnO1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RNYXBwZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvc3RNYXBwZXI6IENvc3RNYXBwZXIsXG4gICAgcHJpdmF0ZSByZWFkb25seSBpbnN0YWxsVHlwZU1hcHBlcjogSW5zdGFsbFR5cGVNYXBwZXIsXG4gICAgcHJpdmF0ZSByZWFkb25seSBvcHRpb25NYXBwZXI6IE9wdGlvbk1hcHBlcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IHByb21vTWFwcGVyOiBQcm9tb01hcHBlclxuICApIHt9XG5cbiAgcHVibGljIG1hcChyYXdQcm9kdWN0OiBQcm9kdWN0SW50ZXJmYWNlKTogUHJvZHVjdE1vZGVsIHtcbiAgICBjb25zdCBwcm9kdWN0OiBQcm9kdWN0TW9kZWwgPSBuZXcgUHJvZHVjdE1vZGVsKCk7XG5cbiAgICBwcm9kdWN0LmNvcnJlbGF0aW9uSWQgPSByYXdQcm9kdWN0LmNvcnJlbGF0aW9uSWQ7XG4gICAgcHJvZHVjdC5kZXNjcmlwdGlvbiA9IHJhd1Byb2R1Y3QuZGVzY3JpcHRpb247XG4gICAgcHJvZHVjdC5vbWFwaUlkID0gcmF3UHJvZHVjdC5vbWFwaWlkO1xuICAgIHByb2R1Y3QucHJpY2UgPSByYXdQcm9kdWN0LnByaWNlO1xuICAgIHByb2R1Y3QucHJpY2VleGNsdmF0ID0gcmF3UHJvZHVjdC5wcmljZWV4Y2x2YXQ7XG4gICAgcHJvZHVjdC5zcGVjVXJsID0gcmF3UHJvZHVjdC5zcGVjVXJsO1xuXG4gICAgcHJvZHVjdC5jb3N0cyA9IHRoaXMubWFwQ29zdHMocmF3UHJvZHVjdC5jb3N0cyk7XG4gICAgcHJvZHVjdC5pbnN0YWxsdHlwZXMgPSB0aGlzLm1hcEluc3RhbGxUeXBlcyhyYXdQcm9kdWN0Lmluc3RhbGx0eXBlcyk7XG4gICAgcHJvZHVjdC5vcHRpb25zID0gdGhpcy5tYXBPcHRpb25zKHJhd1Byb2R1Y3Qub3B0aW9ucyk7XG4gICAgcHJvZHVjdC5wcm9tb3MgPSB0aGlzLm1hcFByb21vcyhyYXdQcm9kdWN0LnByb21vcyk7XG5cbiAgICByZXR1cm4gcHJvZHVjdDtcbiAgfVxuXG4gIHByaXZhdGUgbWFwQ29zdHMocmF3Q29zdHM6IENvc3RJbnRlcmZhY2VbXSkge1xuICAgIGNvbnN0IGNvc3RzOiBTYWxlc09mZmVyQ29zdFtdID0gW107XG5cbiAgICBpZiAocmF3Q29zdHMpIHtcbiAgICAgIHJhd0Nvc3RzLmZvckVhY2goKHJhd0Nvc3QpID0+IGNvc3RzLnB1c2godGhpcy5jb3N0TWFwcGVyLm1hcChyYXdDb3N0KSkpO1xuICAgIH1cblxuICAgIHJldHVybiBjb3N0cztcbiAgfVxuXG4gIHByaXZhdGUgbWFwSW5zdGFsbFR5cGVzKHJhd0luc3RhbGxUeXBlczogSW5zdGFsbFR5cGVJbnRlcmZhY2VbXSkge1xuICAgIGNvbnN0IGluc3RhbGxUeXBlczogSW5zdGFsbFR5cGVNb2RlbFtdID0gW107XG5cbiAgICBpZiAocmF3SW5zdGFsbFR5cGVzKSB7XG4gICAgICByYXdJbnN0YWxsVHlwZXMuZm9yRWFjaCgocmF3SW5zdGFsbFR5cGUpID0+IGluc3RhbGxUeXBlcy5wdXNoKHRoaXMuaW5zdGFsbFR5cGVNYXBwZXIubWFwKHJhd0luc3RhbGxUeXBlKSkpO1xuICAgIH1cblxuICAgIHJldHVybiBpbnN0YWxsVHlwZXM7XG4gIH1cblxuICBwcml2YXRlIG1hcE9wdGlvbnMocmF3T3B0aW9uczogT3B0aW9uSW50ZXJmYWNlW10pIHtcbiAgICBjb25zdCBvcHRpb25zOiBPcHRpb25Nb2RlbFtdID0gW107XG5cbiAgICBpZiAocmF3T3B0aW9ucykge1xuICAgICAgcmF3T3B0aW9ucy5mb3JFYWNoKChyYXdPcHRpb24pID0+IG9wdGlvbnMucHVzaCh0aGlzLm9wdGlvbk1hcHBlci5tYXAocmF3T3B0aW9uKSkpO1xuICAgIH1cblxuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgcHJpdmF0ZSBtYXBQcm9tb3MocmF3UHJvbW9zOiBTYWxlc09mZmVyUHJvbW9bXSkge1xuICAgIGNvbnN0IHByb21vczogUHJvbW9Nb2RlbFtdID0gW107XG5cbiAgICBpZiAocmF3UHJvbW9zKSB7XG4gICAgICByYXdQcm9tb3MuZm9yRWFjaCgocmF3UHJvbW8pID0+IHByb21vcy5wdXNoKHRoaXMucHJvbW9NYXBwZXIubWFwKHJhd1Byb21vKSkpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9tb3M7XG4gIH1cbn1cbiJdfQ==