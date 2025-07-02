import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class AssetService {
    static imagePaths = {
        SALES: '/components/sales/nc/sales-checkout/media/',
        HARDWARE_CHECKOUT: '/content/dam/www-telenet-touch/default/images/hardware-checkout/',
        MOVE: '/components/care/administration/cafe/move/media/',
        CHANGE_FLAVOUR: '/components/sales/cafe/change-flavour/media/',
        CONNECT_FIVE: '/components/sales/cafe/connect-five/media/',
        PRODUCT_DASHBOARD: '/components/sales/cafe/product-dashboard/media/',
        TIP: '/components/tip/nc/media/',
        INTENT_FINDER: '/components/navigation/common/intent-finder/media/',
        CONTACT_SCHEDULER: '/components/general/common/contact-scheduler/media/',
        FLEET_HARDWARE: '/components/fleet/hardware/nc/media/',
        FLEET_PROFILE: '/components/fleet/create-profile/nc/media/',
        DWN_MOVE_FLOW: '/components/care/administration/nc/move-flow/media/',
        SELF_INSTALL: '/components/care/administration/nc/self-install/media/',
        FLEET_REMOVE_OPTIONS: '/components/fleet/product/nc/lineremoveoptions/media/',
        FLEET_ADD_OPTIONS: '/components/fleet/product/nc/lineaddoptions/media/',
        FLEET_LINE_CHANGE_TARIFF_PLAN: '/components/fleet/product/nc/linechangetariffplan/media/',
        MANAGE_EASY_SWITCH: '/components/care/administration/nc/manage-easy-switch/media/',
        CENTRAL_LOGIN: '/components/common/central-login/media/',
        DEFAULT_PROFILE_PIC: '/components/general/common/telenet-login/media/',
        FLEET_LINE_NAVIGATION_LIST: '/components/fleet/sim-swap/nc/line-navigation-list/media/',
        IN_HOME_CONNECTIVITY: '/components/sales/nc/in-home-connectivity/media/',
        FLEET_ACCOUNT: '/components/fleet/account/nc/media/',
        FLEET_SWITCH_LINE: '/components/fleet/contact/switch-line/nc/media/',
        ONLINE_PAYMENT: '/components/sales/online-payment/media/',
        FPB: '/components/fpb/search-contacts/nc/media/',
        STORE_FINDER: '/components/general/common/store-finder/media/',
        FTTH: '/content/dam/www-telenet-bus/nl/producten/ftth/',
    };
    static getImagePath(moduleName, imageName, customerBrand) {
        const basePath = AssetService.imagePaths[moduleName] || '';
        const brand = customerBrand ? customerBrand.toLocaleLowerCase().concat('/') : '';
        return basePath + brand + imageName;
    }
    static ɵfac = function AssetService_Factory(t) { return new (t || AssetService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AssetService, factory: AssetService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AssetService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvcGFnZS9hc3NldC9zZXJ2aWNlL2Fzc2V0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0MsTUFBTSxPQUFPLFlBQVk7SUFDZixNQUFNLENBQVUsVUFBVSxHQUFHO1FBQ25DLEtBQUssRUFBRSw0Q0FBNEM7UUFDbkQsaUJBQWlCLEVBQUUsa0VBQWtFO1FBQ3JGLElBQUksRUFBRSxrREFBa0Q7UUFDeEQsY0FBYyxFQUFFLDhDQUE4QztRQUM5RCxZQUFZLEVBQUUsNENBQTRDO1FBQzFELGlCQUFpQixFQUFFLGlEQUFpRDtRQUNwRSxHQUFHLEVBQUUsMkJBQTJCO1FBQ2hDLGFBQWEsRUFBRSxvREFBb0Q7UUFDbkUsaUJBQWlCLEVBQUUscURBQXFEO1FBQ3hFLGNBQWMsRUFBRSxzQ0FBc0M7UUFDdEQsYUFBYSxFQUFFLDRDQUE0QztRQUMzRCxhQUFhLEVBQUUscURBQXFEO1FBQ3BFLFlBQVksRUFBRSx3REFBd0Q7UUFDdEUsb0JBQW9CLEVBQUUsdURBQXVEO1FBQzdFLGlCQUFpQixFQUFFLG9EQUFvRDtRQUN2RSw2QkFBNkIsRUFBRSwwREFBMEQ7UUFDekYsa0JBQWtCLEVBQUUsOERBQThEO1FBQ2xGLGFBQWEsRUFBRSx5Q0FBeUM7UUFDeEQsbUJBQW1CLEVBQUUsaURBQWlEO1FBQ3RFLDBCQUEwQixFQUFFLDJEQUEyRDtRQUN2RixvQkFBb0IsRUFBRSxrREFBa0Q7UUFDeEUsYUFBYSxFQUFFLHFDQUFxQztRQUNwRCxpQkFBaUIsRUFBRSxpREFBaUQ7UUFDcEUsY0FBYyxFQUFFLHlDQUF5QztRQUN6RCxHQUFHLEVBQUUsMkNBQTJDO1FBQ2hELFlBQVksRUFBRSxnREFBZ0Q7UUFDOUQsSUFBSSxFQUFFLGlEQUFpRDtLQUN4RCxDQUFDO0lBRUYsTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFrQixFQUFFLFNBQWlCLEVBQUUsYUFBc0I7UUFDL0UsTUFBTSxRQUFRLEdBQVcsWUFBWSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkUsTUFBTSxLQUFLLEdBQVcsYUFBYSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN6RixPQUFPLFFBQVEsR0FBRyxLQUFLLEdBQUcsU0FBUyxDQUFDO0lBQ3RDLENBQUM7c0VBbkNVLFlBQVk7Z0VBQVosWUFBWSxXQUFaLFlBQVksbUJBRlgsTUFBTTs7aUZBRVAsWUFBWTtjQUh4QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBBc3NldFNlcnZpY2Uge1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBpbWFnZVBhdGhzID0ge1xuICAgIFNBTEVTOiAnL2NvbXBvbmVudHMvc2FsZXMvbmMvc2FsZXMtY2hlY2tvdXQvbWVkaWEvJyxcbiAgICBIQVJEV0FSRV9DSEVDS09VVDogJy9jb250ZW50L2RhbS93d3ctdGVsZW5ldC10b3VjaC9kZWZhdWx0L2ltYWdlcy9oYXJkd2FyZS1jaGVja291dC8nLFxuICAgIE1PVkU6ICcvY29tcG9uZW50cy9jYXJlL2FkbWluaXN0cmF0aW9uL2NhZmUvbW92ZS9tZWRpYS8nLFxuICAgIENIQU5HRV9GTEFWT1VSOiAnL2NvbXBvbmVudHMvc2FsZXMvY2FmZS9jaGFuZ2UtZmxhdm91ci9tZWRpYS8nLFxuICAgIENPTk5FQ1RfRklWRTogJy9jb21wb25lbnRzL3NhbGVzL2NhZmUvY29ubmVjdC1maXZlL21lZGlhLycsXG4gICAgUFJPRFVDVF9EQVNIQk9BUkQ6ICcvY29tcG9uZW50cy9zYWxlcy9jYWZlL3Byb2R1Y3QtZGFzaGJvYXJkL21lZGlhLycsXG4gICAgVElQOiAnL2NvbXBvbmVudHMvdGlwL25jL21lZGlhLycsXG4gICAgSU5URU5UX0ZJTkRFUjogJy9jb21wb25lbnRzL25hdmlnYXRpb24vY29tbW9uL2ludGVudC1maW5kZXIvbWVkaWEvJyxcbiAgICBDT05UQUNUX1NDSEVEVUxFUjogJy9jb21wb25lbnRzL2dlbmVyYWwvY29tbW9uL2NvbnRhY3Qtc2NoZWR1bGVyL21lZGlhLycsXG4gICAgRkxFRVRfSEFSRFdBUkU6ICcvY29tcG9uZW50cy9mbGVldC9oYXJkd2FyZS9uYy9tZWRpYS8nLFxuICAgIEZMRUVUX1BST0ZJTEU6ICcvY29tcG9uZW50cy9mbGVldC9jcmVhdGUtcHJvZmlsZS9uYy9tZWRpYS8nLFxuICAgIERXTl9NT1ZFX0ZMT1c6ICcvY29tcG9uZW50cy9jYXJlL2FkbWluaXN0cmF0aW9uL25jL21vdmUtZmxvdy9tZWRpYS8nLFxuICAgIFNFTEZfSU5TVEFMTDogJy9jb21wb25lbnRzL2NhcmUvYWRtaW5pc3RyYXRpb24vbmMvc2VsZi1pbnN0YWxsL21lZGlhLycsXG4gICAgRkxFRVRfUkVNT1ZFX09QVElPTlM6ICcvY29tcG9uZW50cy9mbGVldC9wcm9kdWN0L25jL2xpbmVyZW1vdmVvcHRpb25zL21lZGlhLycsXG4gICAgRkxFRVRfQUREX09QVElPTlM6ICcvY29tcG9uZW50cy9mbGVldC9wcm9kdWN0L25jL2xpbmVhZGRvcHRpb25zL21lZGlhLycsXG4gICAgRkxFRVRfTElORV9DSEFOR0VfVEFSSUZGX1BMQU46ICcvY29tcG9uZW50cy9mbGVldC9wcm9kdWN0L25jL2xpbmVjaGFuZ2V0YXJpZmZwbGFuL21lZGlhLycsXG4gICAgTUFOQUdFX0VBU1lfU1dJVENIOiAnL2NvbXBvbmVudHMvY2FyZS9hZG1pbmlzdHJhdGlvbi9uYy9tYW5hZ2UtZWFzeS1zd2l0Y2gvbWVkaWEvJyxcbiAgICBDRU5UUkFMX0xPR0lOOiAnL2NvbXBvbmVudHMvY29tbW9uL2NlbnRyYWwtbG9naW4vbWVkaWEvJyxcbiAgICBERUZBVUxUX1BST0ZJTEVfUElDOiAnL2NvbXBvbmVudHMvZ2VuZXJhbC9jb21tb24vdGVsZW5ldC1sb2dpbi9tZWRpYS8nLFxuICAgIEZMRUVUX0xJTkVfTkFWSUdBVElPTl9MSVNUOiAnL2NvbXBvbmVudHMvZmxlZXQvc2ltLXN3YXAvbmMvbGluZS1uYXZpZ2F0aW9uLWxpc3QvbWVkaWEvJyxcbiAgICBJTl9IT01FX0NPTk5FQ1RJVklUWTogJy9jb21wb25lbnRzL3NhbGVzL25jL2luLWhvbWUtY29ubmVjdGl2aXR5L21lZGlhLycsXG4gICAgRkxFRVRfQUNDT1VOVDogJy9jb21wb25lbnRzL2ZsZWV0L2FjY291bnQvbmMvbWVkaWEvJyxcbiAgICBGTEVFVF9TV0lUQ0hfTElORTogJy9jb21wb25lbnRzL2ZsZWV0L2NvbnRhY3Qvc3dpdGNoLWxpbmUvbmMvbWVkaWEvJyxcbiAgICBPTkxJTkVfUEFZTUVOVDogJy9jb21wb25lbnRzL3NhbGVzL29ubGluZS1wYXltZW50L21lZGlhLycsXG4gICAgRlBCOiAnL2NvbXBvbmVudHMvZnBiL3NlYXJjaC1jb250YWN0cy9uYy9tZWRpYS8nLFxuICAgIFNUT1JFX0ZJTkRFUjogJy9jb21wb25lbnRzL2dlbmVyYWwvY29tbW9uL3N0b3JlLWZpbmRlci9tZWRpYS8nLFxuICAgIEZUVEg6ICcvY29udGVudC9kYW0vd3d3LXRlbGVuZXQtYnVzL25sL3Byb2R1Y3Rlbi9mdHRoLycsXG4gIH07XG5cbiAgc3RhdGljIGdldEltYWdlUGF0aChtb2R1bGVOYW1lOiBzdHJpbmcsIGltYWdlTmFtZTogc3RyaW5nLCBjdXN0b21lckJyYW5kPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBiYXNlUGF0aDogc3RyaW5nID0gQXNzZXRTZXJ2aWNlLmltYWdlUGF0aHNbbW9kdWxlTmFtZV0gfHwgJyc7XG4gICAgY29uc3QgYnJhbmQ6IHN0cmluZyA9IGN1c3RvbWVyQnJhbmQgPyBjdXN0b21lckJyYW5kLnRvTG9jYWxlTG93ZXJDYXNlKCkuY29uY2F0KCcvJykgOiAnJztcbiAgICByZXR1cm4gYmFzZVBhdGggKyBicmFuZCArIGltYWdlTmFtZTtcbiAgfVxufVxuIl19