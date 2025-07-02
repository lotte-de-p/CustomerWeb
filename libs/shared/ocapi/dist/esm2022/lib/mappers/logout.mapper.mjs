import { Injectable } from '@angular/core';
import { LogoutDetails } from '../models';
import * as i0 from "@angular/core";
export class LogoutMapper {
    toModel(rawLogoutResponse) {
        const logoutDetails = new LogoutDetails();
        logoutDetails.logout_redirect_uri = rawLogoutResponse.logout_redirect_uri;
        return logoutDetails;
    }
    static ɵfac = function LogoutMapper_Factory(t) { return new (t || LogoutMapper)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LogoutMapper, factory: LogoutMapper.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LogoutMapper, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0Lm1hcHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvbWFwcGVycy9sb2dvdXQubWFwcGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFNMUMsTUFBTSxPQUFPLFlBQVk7SUFDdkIsT0FBTyxDQUFDLGlCQUE0QztRQUNsRCxNQUFNLGFBQWEsR0FBa0IsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUV6RCxhQUFhLENBQUMsbUJBQW1CLEdBQUcsaUJBQWlCLENBQUMsbUJBQW1CLENBQUM7UUFDMUUsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQztzRUFOVSxZQUFZO2dFQUFaLFlBQVksV0FBWixZQUFZLG1CQUZYLE1BQU07O2lGQUVQLFlBQVk7Y0FIeEIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFwcGVySW50ZXJmYWNlIH0gZnJvbSAnQHRlbGVuZXQvbmctbGliLXNoYXJlZCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2dvdXREZXRhaWxzIH0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCB7IFJhd0xvZ091dERldGFpbHNJbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIExvZ291dE1hcHBlciBpbXBsZW1lbnRzIE1hcHBlckludGVyZmFjZTxSYXdMb2dPdXREZXRhaWxzSW50ZXJmYWNlLCBMb2dvdXREZXRhaWxzPiB7XG4gIHRvTW9kZWwocmF3TG9nb3V0UmVzcG9uc2U6IFJhd0xvZ091dERldGFpbHNJbnRlcmZhY2UpOiBMb2dvdXREZXRhaWxzIHtcbiAgICBjb25zdCBsb2dvdXREZXRhaWxzOiBMb2dvdXREZXRhaWxzID0gbmV3IExvZ291dERldGFpbHMoKTtcblxuICAgIGxvZ291dERldGFpbHMubG9nb3V0X3JlZGlyZWN0X3VyaSA9IHJhd0xvZ291dFJlc3BvbnNlLmxvZ291dF9yZWRpcmVjdF91cmk7XG4gICAgcmV0dXJuIGxvZ291dERldGFpbHM7XG4gIH1cbn1cbiJdfQ==