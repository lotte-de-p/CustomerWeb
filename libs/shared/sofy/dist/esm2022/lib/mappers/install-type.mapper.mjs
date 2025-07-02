import { Injectable } from '@angular/core';
import { InstallTypeModel } from '../models/install-type.model';
import * as i0 from "@angular/core";
import * as i1 from "./promo.mapper";
export class InstallTypeMapper {
    promoMapper;
    constructor(promoMapper) {
        this.promoMapper = promoMapper;
    }
    map(rawInstallType) {
        const installType = new InstallTypeModel();
        installType.description = rawInstallType.description;
        installType.mutuallyexclusive = rawInstallType.mutuallyexclusive;
        installType.price = rawInstallType.price;
        installType.priceexclvat = rawInstallType.priceexclvat;
        installType.selected = rawInstallType.selected;
        installType.promos = this.mapPromos(rawInstallType.promos);
        return installType;
    }
    mapPromos(rawPromos) {
        const promos = [];
        if (rawPromos) {
            rawPromos.forEach((rawPromo) => promos.push(this.promoMapper.map(rawPromo)));
        }
        return promos;
    }
    static ɵfac = function InstallTypeMapper_Factory(t) { return new (t || InstallTypeMapper)(i0.ɵɵinject(i1.PromoMapper)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: InstallTypeMapper, factory: InstallTypeMapper.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InstallTypeMapper, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.PromoMapper }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFsbC10eXBlLm1hcHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvbWFwcGVycy9pbnN0YWxsLXR5cGUubWFwcGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7OztBQU1oRSxNQUFNLE9BQU8saUJBQWlCO0lBQ0M7SUFBN0IsWUFBNkIsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBRyxDQUFDO0lBRWxELEdBQUcsQ0FBQyxjQUFvQztRQUM3QyxNQUFNLFdBQVcsR0FBcUIsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO1FBRTdELFdBQVcsQ0FBQyxXQUFXLEdBQUcsY0FBYyxDQUFDLFdBQVcsQ0FBQztRQUNyRCxXQUFXLENBQUMsaUJBQWlCLEdBQUcsY0FBYyxDQUFDLGlCQUFpQixDQUFDO1FBQ2pFLFdBQVcsQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQztRQUN6QyxXQUFXLENBQUMsWUFBWSxHQUFHLGNBQWMsQ0FBQyxZQUFZLENBQUM7UUFDdkQsV0FBVyxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUMsUUFBUSxDQUFDO1FBRS9DLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0QsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUVPLFNBQVMsQ0FBQyxTQUE0QjtRQUM1QyxNQUFNLE1BQU0sR0FBaUIsRUFBRSxDQUFDO1FBRWhDLElBQUksU0FBUyxFQUFFLENBQUM7WUFDZCxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvRSxDQUFDO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzsyRUF4QlUsaUJBQWlCO2dFQUFqQixpQkFBaUIsV0FBakIsaUJBQWlCLG1CQUZoQixNQUFNOztpRkFFUCxpQkFBaUI7Y0FIN0IsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvbW9NYXBwZXIgfSBmcm9tICcuL3Byb21vLm1hcHBlcic7XG5pbXBvcnQgeyBJbnN0YWxsVHlwZUludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW5zdGFsbC10eXBlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJbnN0YWxsVHlwZU1vZGVsIH0gZnJvbSAnLi4vbW9kZWxzL2luc3RhbGwtdHlwZS5tb2RlbCc7XG5pbXBvcnQgeyBTYWxlc09mZmVyUHJvbW8gfSBmcm9tICcuLi9tb2RlbHMvcmVzcG9uc2UnO1xuaW1wb3J0IHsgUHJvbW9Nb2RlbCB9IGZyb20gJy4uL21vZGVscy9wcm9tby5tb2RlbCc7XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgSW5zdGFsbFR5cGVNYXBwZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHByb21vTWFwcGVyOiBQcm9tb01hcHBlcikge31cblxuICBwdWJsaWMgbWFwKHJhd0luc3RhbGxUeXBlOiBJbnN0YWxsVHlwZUludGVyZmFjZSk6IEluc3RhbGxUeXBlTW9kZWwge1xuICAgIGNvbnN0IGluc3RhbGxUeXBlOiBJbnN0YWxsVHlwZU1vZGVsID0gbmV3IEluc3RhbGxUeXBlTW9kZWwoKTtcblxuICAgIGluc3RhbGxUeXBlLmRlc2NyaXB0aW9uID0gcmF3SW5zdGFsbFR5cGUuZGVzY3JpcHRpb247XG4gICAgaW5zdGFsbFR5cGUubXV0dWFsbHlleGNsdXNpdmUgPSByYXdJbnN0YWxsVHlwZS5tdXR1YWxseWV4Y2x1c2l2ZTtcbiAgICBpbnN0YWxsVHlwZS5wcmljZSA9IHJhd0luc3RhbGxUeXBlLnByaWNlO1xuICAgIGluc3RhbGxUeXBlLnByaWNlZXhjbHZhdCA9IHJhd0luc3RhbGxUeXBlLnByaWNlZXhjbHZhdDtcbiAgICBpbnN0YWxsVHlwZS5zZWxlY3RlZCA9IHJhd0luc3RhbGxUeXBlLnNlbGVjdGVkO1xuXG4gICAgaW5zdGFsbFR5cGUucHJvbW9zID0gdGhpcy5tYXBQcm9tb3MocmF3SW5zdGFsbFR5cGUucHJvbW9zKTtcbiAgICByZXR1cm4gaW5zdGFsbFR5cGU7XG4gIH1cblxuICBwcml2YXRlIG1hcFByb21vcyhyYXdQcm9tb3M6IFNhbGVzT2ZmZXJQcm9tb1tdKSB7XG4gICAgY29uc3QgcHJvbW9zOiBQcm9tb01vZGVsW10gPSBbXTtcblxuICAgIGlmIChyYXdQcm9tb3MpIHtcbiAgICAgIHJhd1Byb21vcy5mb3JFYWNoKChyYXdQcm9tbykgPT4gcHJvbW9zLnB1c2godGhpcy5wcm9tb01hcHBlci5tYXAocmF3UHJvbW8pKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb21vcztcbiAgfVxufVxuIl19