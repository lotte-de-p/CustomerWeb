import { Injectable } from '@angular/core';
import { InitialContextKeysEnum, PortalConfigUrlsEnum, PortalStorageKeys } from '../../enums';
import { I18nService, LanguageEnum } from '@telenet/ng-lib-page';
import { ConfigService } from '@telenet/ng-lib-config';
import { IonicPortalConstants } from '../../constants/ionic-portal.constants';
import { IonicPortalCoreService } from '../ionic-portal-core-service/ionic-portal-core.service';

@Injectable({
  providedIn: 'root',
})
export class AppContextService {
  constructor(
    private readonly ionicPortalService: IonicPortalCoreService,
    private readonly i18nService: I18nService,
    private readonly configService: ConfigService
  ) {}

  initPortal(): void {
    if (!this.isPortal) return;

    const portal = this.getInitialContext(InitialContextKeysEnum.PORTAL);
    const token = this.getInitialContext(InitialContextKeysEnum.TOKEN);

    this.setSessionStorage(PortalStorageKeys.NAV_PORTAL, portal);
    this.setToken(token);
    this.setLanguage();
    this.setApisConfiguration();
    this.handleTokenRefresh();
  }

  private get isPortal(): boolean {
    return !!this.getInitialContext(InitialContextKeysEnum.PORTAL);
  }

  private getInitialContext(key: string): string | null {
    return this.ionicPortalService.getContextValueByKey(key);
  }

  private setLanguage(): void {
    const appLanguage = this.getInitialContext(InitialContextKeysEnum.LANGUAGE) || LanguageEnum.NL;

    this.i18nService.setLanguage(appLanguage as LanguageEnum);
  }

  private setToken(token?: string | null): void {
    if (sessionStorage.getItem(PortalStorageKeys.REFRESH) === 'Y') {
      sessionStorage.removeItem(PortalStorageKeys.REFRESH);
      return;
    }
    localStorage.setItem(PortalStorageKeys.COUNT, '0');
    this.setSessionStorage(PortalStorageKeys.TOKEN_ACCESS, token);
  }

  private setApisConfiguration(): void {
    const { OCAPI_URL, OMAPI_URL } = PortalConfigUrlsEnum;

    this.configService.addConfig({
      'ocapi-url': this.getApiUrlWithEnv(OCAPI_URL),
      'omapi-url': this.getApiUrlWithEnv(OMAPI_URL),
    });
  }

  private handleTokenRefresh(): void {
    const subscribeForRefreshTopic = this.ionicPortalService.subscribeToTopic(
      'refreshToken',
      (result: { data: string }) => {
        if (!result?.data) return;
        this.setSessionStorage(PortalStorageKeys.TOKEN_ACCESS, result.data);
        this.setSessionStorage(PortalStorageKeys.REFRESH, 'Y');
        location.reload();
      }
    );

    subscribeForRefreshTopic.then(() => this.setSessionStorage(PortalStorageKeys.TOKEN_REFRESH, String(true)));
  }

  private getApiUrlWithEnv(url: string): string {
    const { ENVIRONMENT } = InitialContextKeysEnum;
    const { PORTAL_DEFAULT_ENV } = IonicPortalConstants;
    const environment = this.getInitialContext(ENVIRONMENT) || PORTAL_DEFAULT_ENV;

    return environment ? url.replace('{env}', environment) : url;
  }

  private setSessionStorage(key: string, value: string | null | undefined): void {
    if (value) {
      sessionStorage.setItem(key, value);
    }
  }
}
