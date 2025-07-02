import { Injectable } from '@angular/core';
import { SofyProduct } from '../models/sofy-product';
import { SofyAddress } from '../models/sofy-address';
import * as i0 from "@angular/core";
export class SofyProductMapper {
    mapSelectedProductToSofyProduct(omapiProduct, address, installType) {
        const sofyProducts = [];
        const sofyProduct = new SofyProduct();
        sofyProduct.omapiid = omapiProduct?.productId;
        sofyProduct.options = [];
        sofyProduct.needscableinstallation = !!installType;
        sofyProduct.installtype = installType;
        sofyProduct.installationaddress = this.mapAddress(address);
        sofyProduct.isnewline = false;
        sofyProduct.move = false;
        sofyProducts.push(sofyProduct);
        return sofyProducts;
    }
    mapAddress(address) {
        const sofyAddress = new SofyAddress();
        if (address) {
            sofyAddress.addressid = address.addressId;
            sofyAddress.municipality = address.municipality;
            sofyAddress.postalcode = address.postalCode;
            sofyAddress.street = address.street;
            sofyAddress.housenr = address.houseNumber;
        }
        return sofyAddress;
    }
    static ɵfac = function SofyProductMapper_Factory(t) { return new (t || SofyProductMapper)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SofyProductMapper, factory: SofyProductMapper.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SofyProductMapper, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29meS1wcm9kdWN0Lm1hcHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvbWFwcGVycy9zb2Z5LXByb2R1Y3QubWFwcGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFNckQsTUFBTSxPQUFPLGlCQUFpQjtJQUNyQiwrQkFBK0IsQ0FBQyxZQUEwQixFQUFFLE9BQWdCLEVBQUUsV0FBbUI7UUFDdEcsTUFBTSxZQUFZLEdBQWtCLEVBQUUsQ0FBQztRQUN2QyxNQUFNLFdBQVcsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBRXRDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsWUFBWSxFQUFFLFNBQVMsQ0FBQztRQUM5QyxXQUFXLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUN6QixXQUFXLENBQUMsc0JBQXNCLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUNuRCxXQUFXLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUN0QyxXQUFXLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzRCxXQUFXLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUM5QixXQUFXLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUV6QixZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQy9CLE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7SUFFTyxVQUFVLENBQUMsT0FBZ0I7UUFDakMsTUFBTSxXQUFXLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUV0QyxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBQ1osV0FBVyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1lBQzFDLFdBQVcsQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQztZQUNoRCxXQUFXLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7WUFDNUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ3BDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUM1QyxDQUFDO1FBRUQsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQzsyRUE3QlUsaUJBQWlCO2dFQUFqQixpQkFBaUIsV0FBakIsaUJBQWlCLG1CQUZoQixNQUFNOztpRkFFUCxpQkFBaUI7Y0FIN0IsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT21hcGlQcm9kdWN0IH0gZnJvbSAnQHRlbGVuZXQvbmctbGliLW9tYXBpJztcbmltcG9ydCB7IFNvZnlQcm9kdWN0IH0gZnJvbSAnLi4vbW9kZWxzL3NvZnktcHJvZHVjdCc7XG5pbXBvcnQgeyBTb2Z5QWRkcmVzcyB9IGZyb20gJy4uL21vZGVscy9zb2Z5LWFkZHJlc3MnO1xuaW1wb3J0IHsgQWRkcmVzcyB9IGZyb20gJy4uL21vZGVscy9hZGRyZXNzLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFNvZnlQcm9kdWN0TWFwcGVyIHtcbiAgcHVibGljIG1hcFNlbGVjdGVkUHJvZHVjdFRvU29meVByb2R1Y3Qob21hcGlQcm9kdWN0OiBPbWFwaVByb2R1Y3QsIGFkZHJlc3M6IEFkZHJlc3MsIGluc3RhbGxUeXBlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzb2Z5UHJvZHVjdHM6IFNvZnlQcm9kdWN0W10gPSBbXTtcbiAgICBjb25zdCBzb2Z5UHJvZHVjdCA9IG5ldyBTb2Z5UHJvZHVjdCgpO1xuXG4gICAgc29meVByb2R1Y3Qub21hcGlpZCA9IG9tYXBpUHJvZHVjdD8ucHJvZHVjdElkO1xuICAgIHNvZnlQcm9kdWN0Lm9wdGlvbnMgPSBbXTtcbiAgICBzb2Z5UHJvZHVjdC5uZWVkc2NhYmxlaW5zdGFsbGF0aW9uID0gISFpbnN0YWxsVHlwZTtcbiAgICBzb2Z5UHJvZHVjdC5pbnN0YWxsdHlwZSA9IGluc3RhbGxUeXBlO1xuICAgIHNvZnlQcm9kdWN0Lmluc3RhbGxhdGlvbmFkZHJlc3MgPSB0aGlzLm1hcEFkZHJlc3MoYWRkcmVzcyk7XG4gICAgc29meVByb2R1Y3QuaXNuZXdsaW5lID0gZmFsc2U7XG4gICAgc29meVByb2R1Y3QubW92ZSA9IGZhbHNlO1xuXG4gICAgc29meVByb2R1Y3RzLnB1c2goc29meVByb2R1Y3QpO1xuICAgIHJldHVybiBzb2Z5UHJvZHVjdHM7XG4gIH1cblxuICBwcml2YXRlIG1hcEFkZHJlc3MoYWRkcmVzczogQWRkcmVzcyk6IFNvZnlBZGRyZXNzIHtcbiAgICBjb25zdCBzb2Z5QWRkcmVzcyA9IG5ldyBTb2Z5QWRkcmVzcygpO1xuXG4gICAgaWYgKGFkZHJlc3MpIHtcbiAgICAgIHNvZnlBZGRyZXNzLmFkZHJlc3NpZCA9IGFkZHJlc3MuYWRkcmVzc0lkO1xuICAgICAgc29meUFkZHJlc3MubXVuaWNpcGFsaXR5ID0gYWRkcmVzcy5tdW5pY2lwYWxpdHk7XG4gICAgICBzb2Z5QWRkcmVzcy5wb3N0YWxjb2RlID0gYWRkcmVzcy5wb3N0YWxDb2RlO1xuICAgICAgc29meUFkZHJlc3Muc3RyZWV0ID0gYWRkcmVzcy5zdHJlZXQ7XG4gICAgICBzb2Z5QWRkcmVzcy5ob3VzZW5yID0gYWRkcmVzcy5ob3VzZU51bWJlcjtcbiAgICB9XG5cbiAgICByZXR1cm4gc29meUFkZHJlc3M7XG4gIH1cbn1cbiJdfQ==