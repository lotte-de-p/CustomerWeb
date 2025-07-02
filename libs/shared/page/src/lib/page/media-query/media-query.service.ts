import { Inject, Injectable } from '@angular/core';
import { BreakpointsEnum, DeviceTypesEnum } from './device-types.enum';
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';

@Injectable({
  providedIn: 'root',
})
export class MediaQueryService {
  constructor(
    private readonly deviceService: DeviceDetectorService,
    @Inject('Window') private readonly window: Window
  ) {}

  getDeviceName(): string {
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

  getDeviceInfo(): DeviceInfo {
    return this.deviceService.getDeviceInfo();
  }

  isLandscapeMode(): boolean {
    return this.window.innerHeight < this.window.innerWidth;
  }

  isMobile(): boolean {
    return this.deviceService.isMobile();
  }

  isTablet(): boolean {
    return this.deviceService.isTablet();
  }

  isDesktop(): boolean {
    return this.deviceService.isDesktop();
  }

  isXsScreen(): boolean {
    return this.window.matchMedia(BreakpointsEnum.XS).matches;
  }

  isSmScreen(): boolean {
    return this.window.matchMedia(BreakpointsEnum.SM).matches;
  }

  isMdScreen(): boolean {
    return this.window.matchMedia(BreakpointsEnum.MD).matches;
  }

  isLgScreen(): boolean {
    return this.window.matchMedia(BreakpointsEnum.LG).matches;
  }

  isXlScreen(): boolean {
    return this.window.matchMedia(BreakpointsEnum.XL).matches;
  }

  isXxlScreen(): boolean {
    return this.window.matchMedia(BreakpointsEnum.XXL).matches;
  }
}
