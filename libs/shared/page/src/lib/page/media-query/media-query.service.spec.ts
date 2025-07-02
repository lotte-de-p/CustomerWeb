import { TestBed } from '@angular/core/testing';
import { MediaQueryService } from './media-query.service';
import { DeviceTypesEnum } from './device-types.enum';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';
const spyOn = jest.spyOn;

describe('MediaQueryService', () => {
  let mediaQueryService: MediaQueryService;
  let deviceDetectorService: DeviceDetectorService;
  const mockWindow = (width: number, height: number) => {
    return {
      udlObjectName: 'digitalData',
      digitalData: {
        applicationID: 'base',
        environment: 'int',
        page: {
          pageInfo: {},
        },
      },
      innerWidth: width,
      innerHeight: height,
    };
  };

  describe('getDeviceName', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          DeviceDetectorService,
          {
            provide: 'Window',
            useValue: mockWindow(1024, 1024),
          },
        ],
      });

      mediaQueryService = TestBed.inject(MediaQueryService);
      deviceDetectorService = TestBed.inject(DeviceDetectorService);
    });

    it('should get device name for mobile', () => {
      spyOn(deviceDetectorService, 'isMobile').mockReturnValue(true);
      expect(mediaQueryService.getDeviceName()).toBe(DeviceTypesEnum.MOBILE);
    });

    it('should get device name for tablet', () => {
      spyOn(deviceDetectorService, 'isTablet').mockReturnValue(true);
      expect(mediaQueryService.getDeviceName()).toBe(DeviceTypesEnum.TABLET);
    });

    it('should get device name for desktop', () => {
      spyOn(deviceDetectorService, 'isDesktop').mockReturnValue(true);
      expect(mediaQueryService.getDeviceName()).toBe(DeviceTypesEnum.COMPUTER);
    });

    it('should get default as desktop', () => {
      spyOn(deviceDetectorService, 'isMobile').mockReturnValue(false);
      spyOn(deviceDetectorService, 'isTablet').mockReturnValue(false);
      spyOn(deviceDetectorService, 'isDesktop').mockReturnValue(false);
      expect(mediaQueryService.getDeviceName()).toBe(DeviceTypesEnum.COMPUTER);
    });
  });

  describe('getDeviceInfo', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          DeviceDetectorService,
          {
            provide: 'Window',
            useValue: mockWindow(768, 1024),
          },
        ],
      });

      mediaQueryService = TestBed.inject(MediaQueryService);
      deviceDetectorService = TestBed.inject(DeviceDetectorService);
    });

    it('should return deviceInfo for devices', () => {
      const deviceInfo = { os: 'Android' } as DeviceInfo;
      spyOn(deviceDetectorService, 'getDeviceInfo').mockReturnValue(deviceInfo);
      const deviceInfoValue = mediaQueryService.getDeviceInfo();
      expect(deviceInfoValue.os).toBe('Android');
    });
  });

  describe('isLandscapeMode', () => {
    it('should return true if window height is less than window width', () => {
      TestBed.configureTestingModule({
        providers: [
          DeviceDetectorService,
          {
            provide: 'Window',
            useValue: mockWindow(1024, 768),
          },
        ],
      });

      mediaQueryService = TestBed.inject(MediaQueryService);
      deviceDetectorService = TestBed.inject(DeviceDetectorService);

      spyOn(deviceDetectorService, 'isTablet').mockReturnValue(true);
      expect(mediaQueryService.isLandscapeMode()).toBe(true);
    });

    it('should return false if window height is greater than window width', () => {
      TestBed.configureTestingModule({
        providers: [
          DeviceDetectorService,
          {
            provide: 'Window',
            useValue: mockWindow(768, 1024),
          },
        ],
      });

      mediaQueryService = TestBed.inject(MediaQueryService);
      deviceDetectorService = TestBed.inject(DeviceDetectorService);
      spyOn(deviceDetectorService, 'isTablet').mockReturnValue(true);
      expect(mediaQueryService.isLandscapeMode()).toBe(false);
    });
  });

  describe('isMobile', () => {
    it('should return true when device is mobile', () => {
      spyOn(deviceDetectorService, 'isMobile').mockReturnValue(true);

      const actual = mediaQueryService.isMobile();

      expect(actual).toBe(true);
    });

    it('should return false when device is not mobile', () => {
      spyOn(deviceDetectorService, 'isMobile').mockReturnValue(false);

      const actual = mediaQueryService.isMobile();

      expect(actual).toBe(false);
    });
  });

  describe('isTablet', () => {
    it('should return true when device is tablet', () => {
      spyOn(deviceDetectorService, 'isTablet').mockReturnValue(true);

      const actual = mediaQueryService.isTablet();

      expect(actual).toBe(true);
    });

    it('should return false when device is not tablet', () => {
      spyOn(deviceDetectorService, 'isTablet').mockReturnValue(false);

      const actual = mediaQueryService.isTablet();

      expect(actual).toBe(false);
    });
  });

  describe('isDesktop', () => {
    it('should return true when device is desktop', () => {
      spyOn(deviceDetectorService, 'isDesktop').mockReturnValue(true);

      const actual = mediaQueryService.isDesktop();

      expect(actual).toBe(true);
    });

    it('should return false when device is not desktop', () => {
      spyOn(deviceDetectorService, 'isDesktop').mockReturnValue(false);

      const actual = mediaQueryService.isDesktop();

      expect(actual).toBe(false);
    });
  });

  describe('Screen match', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          DeviceDetectorService,
          {
            provide: 'Window',
            useValue: window,
          },
        ],
      });

      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: (query: unknown) => {
          return {
            matches: false,
            media: query,
            onchange: null,
          };
        },
      });

      mediaQueryService = TestBed.inject(MediaQueryService);
      deviceDetectorService = TestBed.inject(DeviceDetectorService);

      spyOn(window, 'matchMedia');
    });

    describe('isXsScreen', () => {
      it('should pass test when called with (max-width: 20em)', () => {
        mediaQueryService.isXsScreen();
        expect(window.matchMedia).toHaveBeenCalledWith('(max-width: 20em)');
      });
      it('should pass test when not called with (max-width: 20em)', () => {
        mediaQueryService.isXsScreen();
        expect(window.matchMedia).not.toHaveBeenCalledWith('(max-width: 120em)');
      });
    });

    describe('isSmScreen', () => {
      it('should pass test when called with (max-width: 36em)', () => {
        mediaQueryService.isSmScreen();
        expect(window.matchMedia).toHaveBeenCalledWith('(max-width: 36em)');
      });
      it('should pass test when not called with (max-width: 36em)', () => {
        mediaQueryService.isSmScreen();
        expect(window.matchMedia).not.toHaveBeenCalledWith('(max-width: 136em)');
      });
    });

    describe('isMdScreen', () => {
      it('should pass test when called with (max-width: 48.0625em)', () => {
        mediaQueryService.isMdScreen();
        expect(window.matchMedia).toHaveBeenCalledWith('(max-width: 48.0625em)');
      });
      it('should pass test when not called with (max-width: 48.0625em)', () => {
        mediaQueryService.isMdScreen();
        expect(window.matchMedia).not.toHaveBeenCalledWith('(max-width: 148.0625em)');
      });
    });

    describe('isLgScreen', () => {
      it('should pass test when called with (max-width: 74.5em)', () => {
        mediaQueryService.isLgScreen();
        expect(window.matchMedia).toHaveBeenCalledWith('(max-width: 74.5em)');
      });
      it('should pass test when not called with (max-width: 74.5em)', () => {
        mediaQueryService.isLgScreen();
        expect(window.matchMedia).not.toHaveBeenCalledWith('(max-width: 174.5em)');
      });
    });

    describe('isXlScreen', () => {
      it('should pass test when called with (max-width: 90em)', () => {
        mediaQueryService.isXlScreen();
        expect(window.matchMedia).toHaveBeenCalledWith('(max-width: 90em)');
      });
      it('should pass test when not called with (max-width: 90em)', () => {
        mediaQueryService.isXlScreen();
        expect(window.matchMedia).not.toHaveBeenCalledWith('(max-width: 190em)');
      });
    });

    describe('isXxlScreen', () => {
      it('should pass test when called with (max-width: 104.688em)', () => {
        mediaQueryService.isXxlScreen();
        expect(window.matchMedia).toHaveBeenCalledWith('(max-width: 104.688em)');
      });
      it('should pass test when not called with (max-width: 104.688em)', () => {
        mediaQueryService.isXxlScreen();
        expect(window.matchMedia).not.toHaveBeenCalledWith('(max-width: 1104.688em)');
      });
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
