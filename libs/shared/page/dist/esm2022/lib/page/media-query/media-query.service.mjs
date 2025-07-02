import { Inject, Injectable } from '@angular/core';
import { BreakpointsEnum, DeviceTypesEnum } from './device-types.enum';
import * as i0 from "@angular/core";
import * as i1 from "ngx-device-detector";
export class MediaQueryService {
    deviceService;
    window;
    constructor(deviceService, window) {
        this.deviceService = deviceService;
        this.window = window;
    }
    getDeviceName() {
        switch (true) {
            case this.deviceService.isMobile():
                return DeviceTypesEnum.MOBILE;
            case this.deviceService.isTablet():
                return DeviceTypesEnum.TABLET;
            case this.deviceService.isDesktop():
                return DeviceTypesEnum.COMPUTER;
            default:
                return DeviceTypesEnum.COMPUTER;
        }
    }
    getDeviceInfo() {
        return this.deviceService.getDeviceInfo();
    }
    isLandscapeMode() {
        return this.window.innerHeight < this.window.innerWidth;
    }
    isMobile() {
        return this.deviceService.isMobile();
    }
    isTablet() {
        return this.deviceService.isTablet();
    }
    isDesktop() {
        return this.deviceService.isDesktop();
    }
    isXsScreen() {
        return this.window.matchMedia(BreakpointsEnum.XS).matches;
    }
    isSmScreen() {
        return this.window.matchMedia(BreakpointsEnum.SM).matches;
    }
    isMdScreen() {
        return this.window.matchMedia(BreakpointsEnum.MD).matches;
    }
    isLgScreen() {
        return this.window.matchMedia(BreakpointsEnum.LG).matches;
    }
    isXlScreen() {
        return this.window.matchMedia(BreakpointsEnum.XL).matches;
    }
    isXxlScreen() {
        return this.window.matchMedia(BreakpointsEnum.XXL).matches;
    }
    static ɵfac = function MediaQueryService_Factory(t) { return new (t || MediaQueryService)(i0.ɵɵinject(i1.DeviceDetectorService), i0.ɵɵinject('Window')); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: MediaQueryService, factory: MediaQueryService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MediaQueryService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.DeviceDetectorService }, { type: Window, decorators: [{
                type: Inject,
                args: ['Window']
            }] }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEtcXVlcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvcGFnZS9tZWRpYS1xdWVyeS9tZWRpYS1xdWVyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7OztBQU12RSxNQUFNLE9BQU8saUJBQWlCO0lBRVQ7SUFDa0I7SUFGckMsWUFDbUIsYUFBb0MsRUFDbEIsTUFBYztRQURoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBdUI7UUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUNoRCxDQUFDO0lBRUosYUFBYTtRQUNYLFFBQVEsSUFBSSxFQUFFLENBQUM7WUFDYixLQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFO2dCQUNoQyxPQUFPLGVBQWUsQ0FBQyxNQUFNLENBQUM7WUFDaEMsS0FBSyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRTtnQkFDaEMsT0FBTyxlQUFlLENBQUMsTUFBTSxDQUFDO1lBQ2hDLEtBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUU7Z0JBQ2pDLE9BQU8sZUFBZSxDQUFDLFFBQVEsQ0FBQztZQUNsQztnQkFDRSxPQUFPLGVBQWUsQ0FBQyxRQUFRLENBQUM7UUFDcEMsQ0FBQztJQUNILENBQUM7SUFFRCxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFFRCxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztJQUMxRCxDQUFDO0lBRUQsUUFBUTtRQUNOLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRUQsUUFBUTtRQUNOLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRUQsU0FBUztRQUNQLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUM1RCxDQUFDO0lBRUQsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUM1RCxDQUFDO0lBRUQsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUM1RCxDQUFDO0lBRUQsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUM1RCxDQUFDO0lBRUQsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUM1RCxDQUFDO0lBRUQsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUM3RCxDQUFDOzJFQTdEVSxpQkFBaUIscURBR2xCLFFBQVE7Z0VBSFAsaUJBQWlCLFdBQWpCLGlCQUFpQixtQkFGaEIsTUFBTTs7aUZBRVAsaUJBQWlCO2NBSDdCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7c0JBSUksTUFBTTt1QkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcmVha3BvaW50c0VudW0sIERldmljZVR5cGVzRW51bSB9IGZyb20gJy4vZGV2aWNlLXR5cGVzLmVudW0nO1xuaW1wb3J0IHsgRGV2aWNlRGV0ZWN0b3JTZXJ2aWNlLCBEZXZpY2VJbmZvIH0gZnJvbSAnbmd4LWRldmljZS1kZXRlY3Rvcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBNZWRpYVF1ZXJ5U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGV2aWNlU2VydmljZTogRGV2aWNlRGV0ZWN0b3JTZXJ2aWNlLFxuICAgIEBJbmplY3QoJ1dpbmRvdycpIHByaXZhdGUgcmVhZG9ubHkgd2luZG93OiBXaW5kb3dcbiAgKSB7fVxuXG4gIGdldERldmljZU5hbWUoKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgIGNhc2UgdGhpcy5kZXZpY2VTZXJ2aWNlLmlzTW9iaWxlKCk6XG4gICAgICAgIHJldHVybiBEZXZpY2VUeXBlc0VudW0uTU9CSUxFO1xuICAgICAgY2FzZSB0aGlzLmRldmljZVNlcnZpY2UuaXNUYWJsZXQoKTpcbiAgICAgICAgcmV0dXJuIERldmljZVR5cGVzRW51bS5UQUJMRVQ7XG4gICAgICBjYXNlIHRoaXMuZGV2aWNlU2VydmljZS5pc0Rlc2t0b3AoKTpcbiAgICAgICAgcmV0dXJuIERldmljZVR5cGVzRW51bS5DT01QVVRFUjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBEZXZpY2VUeXBlc0VudW0uQ09NUFVURVI7XG4gICAgfVxuICB9XG5cbiAgZ2V0RGV2aWNlSW5mbygpOiBEZXZpY2VJbmZvIHtcbiAgICByZXR1cm4gdGhpcy5kZXZpY2VTZXJ2aWNlLmdldERldmljZUluZm8oKTtcbiAgfVxuXG4gIGlzTGFuZHNjYXBlTW9kZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy53aW5kb3cuaW5uZXJIZWlnaHQgPCB0aGlzLndpbmRvdy5pbm5lcldpZHRoO1xuICB9XG5cbiAgaXNNb2JpbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZGV2aWNlU2VydmljZS5pc01vYmlsZSgpO1xuICB9XG5cbiAgaXNUYWJsZXQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZGV2aWNlU2VydmljZS5pc1RhYmxldCgpO1xuICB9XG5cbiAgaXNEZXNrdG9wKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRldmljZVNlcnZpY2UuaXNEZXNrdG9wKCk7XG4gIH1cblxuICBpc1hzU2NyZWVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLndpbmRvdy5tYXRjaE1lZGlhKEJyZWFrcG9pbnRzRW51bS5YUykubWF0Y2hlcztcbiAgfVxuXG4gIGlzU21TY3JlZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMud2luZG93Lm1hdGNoTWVkaWEoQnJlYWtwb2ludHNFbnVtLlNNKS5tYXRjaGVzO1xuICB9XG5cbiAgaXNNZFNjcmVlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy53aW5kb3cubWF0Y2hNZWRpYShCcmVha3BvaW50c0VudW0uTUQpLm1hdGNoZXM7XG4gIH1cblxuICBpc0xnU2NyZWVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLndpbmRvdy5tYXRjaE1lZGlhKEJyZWFrcG9pbnRzRW51bS5MRykubWF0Y2hlcztcbiAgfVxuXG4gIGlzWGxTY3JlZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMud2luZG93Lm1hdGNoTWVkaWEoQnJlYWtwb2ludHNFbnVtLlhMKS5tYXRjaGVzO1xuICB9XG5cbiAgaXNYeGxTY3JlZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMud2luZG93Lm1hdGNoTWVkaWEoQnJlYWtwb2ludHNFbnVtLlhYTCkubWF0Y2hlcztcbiAgfVxufVxuIl19