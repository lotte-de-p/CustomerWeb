import { TestBed } from '@angular/core/testing';
import { IonicPortalCoreService } from '../ionic-portal-core-service/ionic-portal-core.service';
import { I18nService, LanguageEnum } from '@telenet/ng-lib-page';
import { ConfigService } from '@telenet/ng-lib-config';
import { AppContextService } from './app-context.service';
import { InitialContextKeysEnum, PortalStorageKeys } from '../../enums';

describe('AppContextService', () => {
  let service: AppContextService;
  let ionicPortalService: jest.Mocked<IonicPortalCoreService>;
  let i18nService: jest.Mocked<I18nService>;
  let configService: jest.Mocked<ConfigService>;

  beforeEach(() => {
    ionicPortalService = {
      getContextValueByKey: jest.fn(),
      subscribeToTopic: jest.fn().mockReturnValue(Promise.resolve()),
    } as unknown as jest.Mocked<IonicPortalCoreService>;

    i18nService = {
      setLanguage: jest.fn(),
    } as unknown as jest.Mocked<I18nService>;

    configService = {
      addConfig: jest.fn(),
    } as unknown as jest.Mocked<ConfigService>;

    TestBed.configureTestingModule({
      providers: [
        { provide: IonicPortalCoreService, useValue: ionicPortalService },
        { provide: I18nService, useValue: i18nService },
        { provide: ConfigService, useValue: configService },
      ],
    });
    service = TestBed.inject(AppContextService);
  });

  it('should be created', () => {
    expect(service).toBeDefined();
  });

  describe('initPortal', () => {
    it('should not initialize portal if not a portal', () => {
      ionicPortalService.getContextValueByKey.mockReturnValue(null);

      service.initPortal();

      expect(ionicPortalService.getContextValueByKey).toHaveBeenCalledWith(InitialContextKeysEnum.PORTAL);
      expect(i18nService.setLanguage).not.toHaveBeenCalled();
    });

    it('should set session storage for token and portal', () => {
      ionicPortalService.getContextValueByKey.mockImplementation((key: string) => {
        return key === InitialContextKeysEnum.TOKEN ? 'testToken' : 'testPortal';
      });

      service.initPortal();

      expect(sessionStorage.getItem(PortalStorageKeys.TOKEN_ACCESS)).toBe('testToken');
      expect(sessionStorage.getItem(PortalStorageKeys.NAV_PORTAL)).toBe('testPortal');
    });

    it('should set language', () => {
      ionicPortalService.getContextValueByKey.mockReturnValue(LanguageEnum.EN);

      service.initPortal();

      expect(i18nService.setLanguage).toHaveBeenCalledWith(LanguageEnum.EN);
    });
  });

  describe('setApisConfiguration', () => {
    it('should set API configuration', () => {
      ionicPortalService.getContextValueByKey.mockReturnValue('testUrl');
      service['setApisConfiguration']();

      expect(configService.addConfig).toHaveBeenCalled();
    });
  });
});
