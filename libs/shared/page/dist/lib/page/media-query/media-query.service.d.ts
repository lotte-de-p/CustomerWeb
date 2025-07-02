import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';
import * as i0 from "@angular/core";
export declare class MediaQueryService {
    private readonly deviceService;
    private readonly window;
    constructor(deviceService: DeviceDetectorService, window: Window);
    getDeviceName(): string;
    getDeviceInfo(): DeviceInfo;
    isLandscapeMode(): boolean;
    isMobile(): boolean;
    isTablet(): boolean;
    isDesktop(): boolean;
    isXsScreen(): boolean;
    isSmScreen(): boolean;
    isMdScreen(): boolean;
    isLgScreen(): boolean;
    isXlScreen(): boolean;
    isXxlScreen(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<MediaQueryService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MediaQueryService>;
}
//# sourceMappingURL=media-query.service.d.ts.map