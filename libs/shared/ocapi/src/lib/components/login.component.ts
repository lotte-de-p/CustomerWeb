import { Component, EventEmitter, Inject, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { LoginDetails } from '../models';
import { LoginStatusEnum } from '../enums';
import { LoginService, UserDetailsService } from '../services';
import { ConfigConstants, ConfigService } from '@telenet/ng-lib-config';
import {
  CustomerBrandEnum,
  LanguageService,
  PathCategorisationService,
  QueryParamEnum,
  UrlService,
} from '@telenet/ng-lib-page';
import { each, isEmpty, some } from 'lodash-es';
import { LoginDetailsConstants } from '../constants';
import {
  DataLayerAttributes,
  DataLayerService,
  EventNameEnum,
  EventStatusEnum,
  EventTypeEnum,
} from '@telenet/ng-lib-datalayer';
import { CookieService } from 'ngx-cookie-service';
import { switchMap, takeLast, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'tg-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit, OnDestroy {
  @Input() scopes: string[] = [];
  @Input() messageGroupName: string;
  @Input() autoRedirect = false;
  @Input() styleHint: string = LoginDetailsConstants.STYLE_HINT;
  @Input() mode: string;
  @Input() registrationUrl: string;
  @Input() showItsMeRegistrationOption: boolean;
  @Input() hasInstallableProductType: boolean;
  @Input() renderOnlyForOriginCustomer = false;
  @Output() componentCanRender = new EventEmitter<LoginDetails>();
  loginDetails: LoginDetails;
  show = false;
  loginEnum = LoginStatusEnum;
  brand: string;
  source: string;
  action: string;

  private readonly destroy$ = new Subject<void>();

  constructor(
    @Inject('Window') readonly window: Window,
    private readonly loginService: LoginService,
    private readonly userDetailsService: UserDetailsService,
    private readonly configService: ConfigService,
    private readonly urlService: UrlService,
    private readonly pathCategorisationService: PathCategorisationService,
    private readonly languageService: LanguageService,
    private readonly dataLayerService: DataLayerService,
    private readonly cookieService: CookieService
  ) {}

  ngOnInit(): void {
    this.action = this.urlService.getRequestParamValue(QueryParamEnum.ACTION, '');
    this.registerBasedOnAction();
    this.brand = this.pathCategorisationService.getCustomerBrand();
    this.initSource();
    this.loginService
      .getAuthenticationStatus()
      .pipe(
        switchMap((_) => this.userDetailsService.getUserDetails().pipe(takeLast(1))),
        takeUntil(this.destroy$)
      )
      .subscribe((loginDetails) => {
        this.loginDetails = loginDetails;

        if (this.isLoggedIn() && this.canRenderComponentForLoggedInUser()) {
          this.show = true;
          this.componentCanRender.emit(loginDetails);
        } else if (this.autoRedirect && this.configService.getConfig(ConfigConstants.IS_AUTHOR_MODE) !== 'true') {
          this.forceRedirect();
        } else {
          this.show = true;
          if (this.mode === 'overlay') {
            this.sendPageStepData();
          }
        }
      });
  }

  isLoggedIn(): boolean {
    return this.getLoginStatus() === LoginStatusEnum.LOGGED_IN;
  }

  private canRenderComponentForLoggedInUser() {
    if (this.renderOnlyForOriginCustomer) {
      return this.loginDetails.isBssSystemNetcracker();
    }
    return true;
  }
  getLoginStatus(): LoginStatusEnum {
    if (!this.loginDetails?.isLoggedIn()) {
      this.window['telenetgroupLoader']?.hideMask();
      return LoginStatusEnum.NOT_LOGGED_IN;
    }

    if (this.isNarrowed()) {
      return LoginStatusEnum.NARROWED;
    }
    if (
      !this.hasRequiredScopes() ||
      (this.brand === CustomerBrandEnum.BRAND_BASE && this.hasInstallableProductType && this.loginDetails?.isChild())
    ) {
      this.window['telenetgroupLoader']?.hideMask();
      return LoginStatusEnum.INSUFFICIENT_PERMISSIONS;
    }

    return LoginStatusEnum.LOGGED_IN;
  }

  login(force: boolean = false): void {
    this.pushEventDataToAnalytics(EventNameEnum.EVENT_NAME_LOGIN);
    const referrerUrl = this.urlService.getCurrentUrl();
    if (!force) {
      this.loginService.login(referrerUrl, this.styleHint);
      return;
    }
    this.loginService.loginWithPrompt(referrerUrl, this.styleHint);
  }

  isNarrowed(): boolean {
    return this.loginDetails.isNarrowed();
  }

  showRegistrationOptions(): boolean {
    return (
      this.source !== LoginDetailsConstants.SOURCE_EMAIL &&
      this.getLoginStatus() !== LoginStatusEnum.INSUFFICIENT_PERMISSIONS &&
      !isEmpty(this.styleHint)
    );
  }

  register(idp: string): void {
    const eventName = EventNameEnum.EVENT_NAME_REGISTER + '-' + idp;
    this.pushEventDataToAnalytics(eventName);
    this.redirectToRegistrationURL(idp);
  }

  private initSource(): void {
    this.source = this.urlService.getRequestParamValue(QueryParamEnum.SOURCE, '');
    this.source = this.source && this.source.toUpperCase();
  }

  private hasRequiredScopes(): boolean {
    if (this.scopes && !this.scopes.length) {
      return true;
    }
    return some(this.scopes, (scope: string) => {
      return this.loginDetails.hasScope(scope);
    });
  }

  private forceRedirect() {
    const loginStatus = this.getLoginStatus();
    const force = loginStatus !== LoginStatusEnum.NOT_LOGGED_IN;
    this.login(force);
  }

  private redirectToRegistrationURL(idp: string): void {
    this.cleanCookies();

    if (idp === 'internal') {
      this.redirectToInternalRegistrationURL(this.styleHint);
    } else {
      this.redirectToItsMePortal(this.styleHint);
    }
  }

  private cleanCookies(): void {
    const sessionKeys = this.getCookie(LoginDetailsConstants.COOKIE_KEYS);
    if (sessionKeys) {
      const keys = sessionKeys.split(',');
      for (let i = 0; i <= keys.length; i++) {
        this.cookieService.delete(keys[i], '/');
      }
      this.cookieService.delete(LoginDetailsConstants.COOKIE_KEYS, '/');
    }
  }

  private initCookies(channel: string, idp: string): void {
    const requestParameters = this.urlService.getRequestParameters();
    each(requestParameters, (item: string, key: string) => {
      this.addCookie(key, item);
    });

    this.addCookie(LoginDetailsConstants.CUSTOMER_REGISTRATION_URL, this.getCustomerRegistrationURL());
    this.addCookie(LoginDetailsConstants.PARAM_CHANNEL, channel);
    this.addCookie(LoginDetailsConstants.PARAM_IDP, idp);
    this.addCookie(LoginDetailsConstants.PARAM_REFERRER_URL, this.urlService.getCurrentUrl());
  }

  private addCookie(key: string, value: string): void {
    this.cookieService.set(key, value, { path: '/' });
    let sessionKeys = this.getCookie(LoginDetailsConstants.COOKIE_KEYS);
    sessionKeys = sessionKeys ? sessionKeys.concat(',', key) : key;
    this.cookieService.set(LoginDetailsConstants.COOKIE_KEYS, sessionKeys, { path: '/' });
  }

  private getCookie(key: string): string {
    return this.cookieService.get(key);
  }

  private redirectToInternalRegistrationURL(channel: string): void {
    let referrer_url;
    let registrationUrl = this.registrationUrl + '?channel=' + channel + '&idp=' + 'internal';
    const sdata = this.urlService.getRequestParamValue(LoginDetailsConstants.PARAM_SDATA, '');
    if (sdata) {
      registrationUrl += '&sdata=' + sdata;
    }
    if (this.action === 'register') {
      const newUrl = this.urlService.getActionParametersRemovedURL();
      referrer_url = encodeURIComponent(newUrl);
    } else {
      referrer_url = encodeURIComponent(this.urlService.getCurrentUrl());
    }
    registrationUrl += '&referrer_url=' + referrer_url;
    this.urlService.redirectTo(registrationUrl);
  }

  private redirectToItsMePortal(channel: string): void {
    this.initCookies(channel, 'itsme');
    const redirectURI = this.getRedirectURI();

    const params = {
      redirect_uri: redirectURI,
      language: this.languageService.getLanguage(),
    };

    const itsMePortalUrl =
      this.getItsMeRegisterUrl() +
      '?language=' +
      params.language +
      '&redirect_uri=' +
      redirectURI +
      '&brand=' +
      this.brand;

    this.urlService.redirectTo(itsMePortalUrl);
  }

  private getItsMeRegisterUrl(): string {
    return this.configService.getConfig(ConfigConstants.OCAPI_URl) + LoginDetailsConstants.ITS_ME_REGISTER_ENDPOINT;
  }

  private getRedirectURI(): string {
    const redirect_uri = this.getCookie(LoginDetailsConstants.CUSTOMER_REGISTRATION_URL);
    return encodeURIComponent(redirect_uri);
  }

  private getCustomerRegistrationURL(): string {
    return this.urlService.getOrigin().concat(this.registrationUrl);
  }

  private pushEventDataToAnalytics(eventName: string): void {
    const eventInfoData = this.dataLayerService.createEventInfo(eventName, EventTypeEnum.EVENT_TYPE_CLICK);
    eventInfoData.setEventStatus(EventStatusEnum.EVENT_STATUS_SUCCESS);
    const attributes = this.buildCommonEventAttributes();
    this.dataLayerService.sendEvent({ eventInfo: eventInfoData, attributes });
  }

  private buildCommonEventAttributes(): DataLayerAttributes {
    const styleHint = this.styleHint ? this.styleHint : 'care';
    const flowType = this.urlService.getRequestParamValue(LoginDetailsConstants.PARAM_FLOW, '') || styleHint;
    return { flowType: flowType } as DataLayerAttributes;
  }

  private sendPageStepData(): void {
    const attributes = this.buildCommonEventAttributes();
    attributes.stepId = LoginDetailsConstants.STEP_ID_LOGIN_REGISTER;
    this.dataLayerService.addStepViewEvent(attributes);
  }

  private registerBasedOnAction(): void {
    if (this.action === 'register') {
      return this.register('internal');
    } else if (this.action === 'register-via-itsme') {
      return this.register('external');
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
