import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import {
  CustomerBrandEnum,
  LanguageEnum,
  LanguageService,
  PathCategorisationService,
  QueryParamEnum,
  UrlService,
} from '@telenet/ng-lib-page';
import {
  DataLayerAttributes,
  DataLayerService,
  EventNameEnum,
  EventStatusEnum,
  EventTypeEnum,
} from '@telenet/ng-lib-datalayer';
import { ConfigConstants, ConfigService } from '@telenet/ng-lib-config';
import { CookieService } from 'ngx-cookie-service';
import * as udl from 'udl';
import { when } from 'jest-when';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginComponent } from './login.component';
import { LoginService } from '../services/login.service';
import { LoginDetails } from '../models/login-details.model';
import { LoginDetailsMapper } from '../mappers/login-details.mapper';
import { LoginDetailsConstants } from '../constants/login-details.constant';
import { LoginStatusEnum } from '../enums/login-status.enum';
import { UserDetailsService } from '../services';
import { cloneDeep } from 'lodash-es';

const mockSuccessResponse = cloneDeep(require('../../data/http/common/login-details/login-details.json'));

const BASE_SALES = 'https://www.base.be/sales';
describe('LoginComponent', () => {
  let fixture: ComponentFixture<LoginComponent>;
  let loginComponent: LoginComponent;
  let loginService: LoginService;
  let userDetailsService: UserDetailsService;
  let urlService: UrlService;
  let languageService: LanguageService;
  let pathCategorisationService: PathCategorisationService;
  let configService: ConfigService;
  let cookieService: CookieService;
  let dataLayerService: DataLayerService;
  const registerUrl = 'https://www.base.be/register';
  const getCurrentUrl = jest.fn();
  const mockWindow = {
    location: {
      href: BASE_SALES,
      origin: 'https://www.base.be',
      search: '',
      pathname: '',
      hash: '',
    },
    telenetgroupLoader: {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      showPageLoader: function (_option) {
        // empty method
      },
      hidePageLoader: function () {
        // empty method
      },
      hideMask: function () {
        // empty method
      },
    },
    Config: {
      'ocapi-url': 'https://api.int.telenet.be/ocapi',
      'openid-auth-url': 'https://login.int.telenet.be/openid/oauth/authorize',
      'openid-url': 'https://login.int.telenet.be/openid',
      'openid-client-id': 'ocapi',
    },
  };
  const getRequestParamValue = jest.fn();
  const redirectTo = jest.fn();

  beforeEach(() => {
    getRequestParamValue.mockReset();
    redirectTo.mockReset();
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        UrlService,
        LanguageService,
        CookieService,
        DataLayerService,
        LoginService,
        UserDetailsService,
        PathCategorisationService,
        { provide: 'Window', useValue: mockWindow },
      ],
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
    });

    loginService = TestBed.inject(LoginService);
    userDetailsService = TestBed.inject(UserDetailsService);
    fixture = TestBed.createComponent(LoginComponent);
    urlService = TestBed.inject(UrlService);
    languageService = TestBed.inject(LanguageService);
    pathCategorisationService = TestBed.inject(PathCategorisationService);
    configService = TestBed.inject(ConfigService);
    cookieService = TestBed.inject(CookieService);
    dataLayerService = TestBed.inject(DataLayerService);
    loginComponent = fixture.debugElement.componentInstance;
    languageService.getLanguage = jest.fn();
    urlService.openWindow = jest.fn();
    urlService.getRequestParamValue = getRequestParamValue;
    urlService.redirectTo = redirectTo;
    urlService.getCurrentUrl = getCurrentUrl;
    getCurrentUrl.mockReturnValue(BASE_SALES);
  });

  it('should initialize the component with the correct variables', () => {
    jest.spyOn(urlService, 'getRequestParamValue').mockReturnValue('');
    expect(loginComponent.scopes).toEqual([]);
    expect(loginComponent.messageGroupName).toBeUndefined();
    expect(loginComponent.loginDetails).toBeUndefined();
    expect(loginComponent.show).toBe(false);
  });

  describe('ngOnInit', function () {
    let eventEmitter: EventEmitter<LoginDetails>;
    let mockedEventEmitter: EventEmitter<LoginDetails>;
    beforeEach(() => {
      eventEmitter = new EventEmitter<LoginDetails>();
      loginComponent.componentCanRender = eventEmitter;
      mockedEventEmitter = new EventEmitter<LoginDetails>();
      mockedEventEmitter.emit = jest.fn();
      loginComponent.componentCanRender = mockedEventEmitter;

      jest.spyOn(loginService, 'getAuthenticationStatus').mockReturnValue(of(true));
    });

    it('should call login details and put it on the controller', () => {
      jest.spyOn(urlService, 'getRequestParamValue').mockReturnValue('');
      const loginDetails = new LoginDetails(200);
      const getUserDetails = jest.spyOn(userDetailsService, 'getUserDetails');
      when(getUserDetails).mockReturnValue(of(loginDetails));
      loginComponent.isLoggedIn = jest.fn().mockReturnValue(true);

      loginComponent.ngOnInit();

      expect(loginComponent.loginDetails).toBe(loginDetails);
      expect(loginComponent.show).toBe(true);
      expect(mockedEventEmitter.emit).toHaveBeenCalledTimes(1);
    });

    it('should call login details and not call emit on componentCanRender given show content is false', () => {
      jest.spyOn(urlService, 'getRequestParamValue').mockReturnValue('');
      const loginDetails = new LoginDetails(200);
      const getUserDetails = jest.spyOn(userDetailsService, 'getUserDetails');
      when(getUserDetails).calledWith().mockReturnValue(of(loginDetails));
      loginComponent.isLoggedIn = jest.fn().mockReturnValue(false);

      loginComponent.ngOnInit();

      expect(loginComponent.loginDetails).toBe(loginDetails);
      expect(loginComponent.show).toBe(true);
      expect(mockedEventEmitter.emit).not.toHaveBeenCalled();
    });

    it('Given renderOnlyForOriginCustomer is true, should not emit componentCanRender when loggedIn user is legacy customer', () => {
      loginComponent.renderOnlyForOriginCustomer = true;
      jest.spyOn(urlService, 'getRequestParamValue').mockReturnValue('');
      const loginDetails = new LoginDetails(200);
      const getUserDetails = jest.spyOn(userDetailsService, 'getUserDetails');
      when(getUserDetails).calledWith().mockReturnValue(of(loginDetails));
      loginComponent.isLoggedIn = jest.fn().mockReturnValue(true);

      loginComponent.ngOnInit();

      expect(loginComponent.loginDetails).toBe(loginDetails);
      expect(loginComponent.show).toBe(true);
      expect(mockedEventEmitter.emit).not.toHaveBeenCalled();
    });

    it('Given renderOnlyForOriginCustomer is true, should emit componentCanRender when loggedIn user is Origin customer', () => {
      loginComponent.renderOnlyForOriginCustomer = true;
      jest.spyOn(urlService, 'getRequestParamValue').mockReturnValue('');
      const loginDetails = new LoginDetails(200);
      loginDetails.bssSystem = LoginDetailsConstants.BSS_SYSTEM_NETCRACKER;
      const getUserDetails = jest.spyOn(userDetailsService, 'getUserDetails');
      when(getUserDetails).calledWith().mockReturnValue(of(loginDetails));
      loginComponent.isLoggedIn = jest.fn().mockReturnValue(true);

      loginComponent.ngOnInit();

      expect(loginComponent.loginDetails).toBe(loginDetails);
      expect(loginComponent.show).toBe(true);
      expect(mockedEventEmitter.emit).toHaveBeenCalledTimes(1);
    });
  });

  describe('showContent', () => {
    let failedloginDetails: LoginDetails, loginDetailsMapper, spiedLoginDetails;

    beforeEach(() => {
      failedloginDetails = new LoginDetails(500);
      loginDetailsMapper = TestBed.inject(LoginDetailsMapper);
      spiedLoginDetails = loginDetailsMapper.toModel(mockSuccessResponse);
      loginComponent.loginDetails = spiedLoginDetails;
      when(jest.spyOn(urlService, 'getRequestParamValue')).calledWith(QueryParamEnum.JWT_TOKEN, '').mockReturnValue('');
    });

    it('should return true given is logged in and has all required scopes', () => {
      loginComponent.scopes = ['manageproductoption', 'sales'];
      const actual = loginComponent.isLoggedIn();
      expect(actual).toBe(true);
    });

    it('should return true given is logged in and has any one required scopes(first place)', () => {
      loginComponent.scopes = ['missingscope', 'sales'];
      const actual = loginComponent.isLoggedIn();
      expect(actual).toBe(true);
    });

    it('should return false given is not logged in and has all required scopes', () => {
      loginComponent.loginDetails = failedloginDetails;
      loginComponent.scopes = ['manageproductoption', 'sales'];
      const actual = loginComponent.isLoggedIn();
      expect(actual).toBe(false);
    });
    it('should return INSUFFICIENT_PERMISSIONS given has selected installable product, brand is base and role is PREPAID_CHILD_USER', () => {
      loginComponent.scopes = ['manageproductoption', 'sales'];
      loginComponent.hasInstallableProductType = true;
      loginComponent.loginDetails.role = 'PREPAID_CHILD_USER';
      loginComponent.brand = CustomerBrandEnum.BRAND_BASE;
      const status = loginComponent.getLoginStatus();
      expect(status).toBe(LoginStatusEnum.INSUFFICIENT_PERMISSIONS);
    });

    it('should return true if given user is logged in and has any one required scopes(second place)', () => {
      loginComponent.scopes = ['sales', 'missingscope'];
      const actual = loginComponent.isLoggedIn();
      expect(actual).toBe(true);
    });
  });

  describe('isNarrowed', () => {
    let loginDetails: LoginDetails;
    beforeEach(() => {
      loginDetails = new LoginDetails(200);
      loginComponent.loginDetails = loginDetails;
      when(jest.spyOn(urlService, 'getRequestParamValue')).calledWith(QueryParamEnum.JWT_TOKEN, '').mockReturnValue('');
    });

    it('should return true given logindetails is narrowed', () => {
      loginDetails.narrowedScope = true;

      const actual = loginComponent.isNarrowed();

      expect(actual).toBe(true);
    });

    it('should return false given logindetails is not narrowed', () => {
      loginDetails.narrowedScope = false;

      const actual = loginComponent.isNarrowed();

      expect(actual).toBe(false);
    });
  });

  describe('login', () => {
    let loginDetails: LoginDetails;
    let loginServiceSpy: LoginService;
    beforeEach(() => {
      loginDetails = new LoginDetails(200);
      loginDetails.state = 'state';
      loginDetails.nonce = 'nonce';
      loginComponent.loginDetails = loginDetails;
      loginComponent.styleHint = 'sales';
      loginServiceSpy = TestBed.inject(LoginService);
    });

    it('should login when forceLogin is false and push data to analytics', () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      jest.spyOn<unknown>(loginComponent, 'pushEventDataToAnalytics');
      jest.spyOn(loginServiceSpy, 'login');

      loginComponent.login();
      expect(loginServiceSpy.login).toHaveBeenCalledWith(BASE_SALES, 'sales');
      expect(loginComponent['pushEventDataToAnalytics']).toHaveBeenCalledWith(EventNameEnum.EVENT_NAME_LOGIN);
    });

    it('should login when forceLogin is true and push data to analytics', () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      jest.spyOn<unknown>(loginComponent, 'pushEventDataToAnalytics');
      jest.spyOn(loginServiceSpy, 'loginWithPrompt');

      loginComponent.login(true);
      expect(loginServiceSpy.loginWithPrompt).toHaveBeenCalledWith(BASE_SALES, 'sales');
      expect(loginComponent['pushEventDataToAnalytics']).toHaveBeenCalledWith(EventNameEnum.EVENT_NAME_LOGIN);
    });
  });

  describe('showRegistrationOptions', () => {
    it('should return true when source is not email, user is logged in, styleHint is not empty', () => {
      loginComponent.source = '';
      jest.spyOn(loginComponent, 'getLoginStatus').mockReturnValue(LoginStatusEnum.LOGGED_IN);
      loginComponent.styleHint = 'sales';
      const actual = loginComponent.showRegistrationOptions();
      expect(actual).toBe(true);
    });

    it('should return false when source is not email, user has insufficient rights, styleHint is not empty', () => {
      loginComponent.source = LoginDetailsConstants.STYLE_HINT;
      jest.spyOn(loginComponent, 'getLoginStatus').mockReturnValue(LoginStatusEnum.INSUFFICIENT_PERMISSIONS);
      loginComponent.styleHint = 'sales';
      const actual = loginComponent.showRegistrationOptions();
      expect(actual).toBe(false);
    });

    it('should return false when source is not email, user is logged in, styleHint is empty', () => {
      loginComponent.source = '';
      jest.spyOn(loginComponent, 'getLoginStatus').mockReturnValue(LoginStatusEnum.LOGGED_IN);
      loginComponent.styleHint = '';
      const actual = loginComponent.showRegistrationOptions();
      expect(actual).toBe(false);
    });

    it('should return false when source is email, user has insufficient rights, styleHint is empty', () => {
      loginComponent.source = LoginDetailsConstants.SOURCE_EMAIL;
      jest.spyOn(loginComponent, 'getLoginStatus').mockReturnValue(LoginStatusEnum.INSUFFICIENT_PERMISSIONS);
      loginComponent.styleHint = '';
      const actual = loginComponent.showRegistrationOptions();
      expect(actual).toBe(false);
    });

    it('should return false when source is not email, user has insufficient rights, styleHint is empty', () => {
      loginComponent.source = '';
      jest.spyOn(loginComponent, 'getLoginStatus').mockReturnValue(LoginStatusEnum.INSUFFICIENT_PERMISSIONS);
      loginComponent.styleHint = '';
      const actual = loginComponent.showRegistrationOptions();
      expect(actual).toBe(false);
    });

    it('should return false when source is email, user has insufficient rights, styleHint is not empty', () => {
      loginComponent.source = LoginDetailsConstants.SOURCE_EMAIL;
      jest.spyOn(loginComponent, 'getLoginStatus').mockReturnValue(LoginStatusEnum.INSUFFICIENT_PERMISSIONS);
      loginComponent.styleHint = 'sales';
      const actual = loginComponent.showRegistrationOptions();
      expect(actual).toBe(false);
    });

    it('should return false when source is email, user is Logged in, styleHint is empty', () => {
      loginComponent.source = LoginDetailsConstants.SOURCE_EMAIL;
      jest.spyOn(loginComponent, 'getLoginStatus').mockReturnValue(LoginStatusEnum.LOGGED_IN);
      loginComponent.styleHint = '';
      const actual = loginComponent.showRegistrationOptions();
      expect(actual).toBe(false);
    });

    it('should return false when source is email, user is logged in, styleHint is empty', () => {
      loginComponent.source = LoginDetailsConstants.SOURCE_EMAIL;
      jest.spyOn(loginComponent, 'getLoginStatus').mockReturnValue(LoginStatusEnum.LOGGED_IN);
      loginComponent.styleHint = 'sales';
      const actual = loginComponent.showRegistrationOptions();
      expect(actual).toBe(false);
    });
  });

  describe('register', () => {
    it('should push event data to analytics and redirect to Registration url', () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      jest.spyOn<unknown>(loginComponent, 'pushEventDataToAnalytics');
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      jest.spyOn<unknown>(loginComponent, 'redirectToRegistrationURL');
      loginComponent.register('itsme');
      expect(loginComponent['pushEventDataToAnalytics']).toHaveBeenCalledWith(
        EventNameEnum.EVENT_NAME_REGISTER + '-itsme'
      );
      expect(loginComponent['redirectToRegistrationURL']).toHaveBeenCalledWith('itsme');
    });
  });

  describe('redirectToRegistrationURL', () => {
    it('should redirect to internal registration url when idp is internal', () => {
      loginComponent.styleHint = 'sales';
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      jest.spyOn<unknown>(loginComponent, 'cleanCookies');
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      jest.spyOn<unknown>(loginComponent, 'redirectToInternalRegistrationURL');
      loginComponent['redirectToRegistrationURL']('internal');
      expect(loginComponent['redirectToInternalRegistrationURL']).toHaveBeenCalledWith('sales');
      expect(loginComponent['cleanCookies']).toHaveBeenCalled();
    });

    it('should redirect to itsme Portal when idp is itsme', () => {
      loginComponent.styleHint = 'sales';
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      jest.spyOn<unknown>(loginComponent, 'cleanCookies');
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      jest.spyOn<unknown>(loginComponent, 'redirectToItsMePortal');
      loginComponent['redirectToRegistrationURL']('itsme');
      expect(loginComponent['redirectToItsMePortal']).toHaveBeenCalledWith('sales');
      expect(loginComponent['cleanCookies']).toHaveBeenCalled();
    });
  });

  describe('redirectToInternalRegistrationURL', () => {
    const salesChannel = 'sales';

    it('should redirect to internal registration url with url params when sdata is available', () => {
      getRequestParamValue.mockReturnValue('sdata');
      getCurrentUrl.mockReturnValue(BASE_SALES);
      loginComponent.registrationUrl = registerUrl;
      loginComponent['redirectToInternalRegistrationURL'](salesChannel);
      const expectedRegistrationUrl =
        'https://www.base.be/register?channel=sales&idp=internal&sdata=sdata&referrer_url=https%3A%2F%2Fwww.base.be%2Fsales';
      expect(urlService.getRequestParamValue).toHaveBeenCalledWith(LoginDetailsConstants.PARAM_SDATA, '');
      expect(urlService.redirectTo).toHaveBeenCalledWith(expectedRegistrationUrl);
    });

    it('should redirect to internal registration url with url params when sdata is not available', () => {
      getRequestParamValue.mockReturnValue('');
      getCurrentUrl.mockReturnValue(BASE_SALES);
      loginComponent.registrationUrl = registerUrl;
      loginComponent['redirectToInternalRegistrationURL'](salesChannel);
      const expectedRegistrationUrl =
        'https://www.base.be/register?channel=sales&idp=internal&referrer_url=https%3A%2F%2Fwww.base.be%2Fsales';
      expect(urlService.getRequestParamValue).toHaveBeenCalledWith(LoginDetailsConstants.PARAM_SDATA, '');
      expect(urlService.redirectTo).toHaveBeenCalledWith(expectedRegistrationUrl);
    });

    it('should redirect to internal registration url with url params when action is true', () => {
      getRequestParamValue.mockReturnValue('sdata');
      getCurrentUrl.mockReturnValue(BASE_SALES);
      loginComponent.action = 'register';
      loginComponent.registrationUrl = registerUrl;
      jest
        .spyOn(urlService, 'getActionParametersRemovedURL')
        .mockReturnValue('https://www.base.be/register?sales?flow=marketing&sdata=sdata');
      loginComponent['redirectToInternalRegistrationURL'](salesChannel);
      const expectedRegistrationUrl =
        'https://www.base.be/register?channel=sales&idp=internal&sdata=sdata&referrer_url=https%3A%2F%2Fwww.base.be%2Fregister%3Fsales%3Fflow%3Dmarketing%26sdata%3Dsdata';
      expect(urlService.getRequestParamValue).toHaveBeenCalledWith(LoginDetailsConstants.PARAM_SDATA, '');
      expect(urlService.redirectTo).toHaveBeenCalledWith(expectedRegistrationUrl);
    });
  });

  describe('redirectToItsMePortal', () => {
    it('should set session cookies and redirect to itsme portal', () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      when(jest.spyOn(cookieService, 'get'))
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        .calledWith(LoginDetailsConstants.CUSTOMER_REGISTRATION_URL)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        .mockReturnValue('https://base.be/redirect-uri');
      when(jest.spyOn(configService, 'getConfig'))
        .calledWith(ConfigConstants.OCAPI_URl)
        .mockReturnValue('/api/ocapi/public');
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      jest.spyOn<unknown>(loginComponent, 'initCookies');
      jest.spyOn(urlService, 'redirectTo');
      jest.spyOn(languageService, 'getLanguage').mockReturnValue(LanguageEnum.NL);
      jest.spyOn(pathCategorisationService, 'getCustomerBrand').mockReturnValue(CustomerBrandEnum.BRAND_BASE);
      loginComponent.brand = CustomerBrandEnum.BRAND_BASE;
      loginComponent['redirectToItsMePortal']('sales');
      const expectedRegistrationUrl =
        '/api/ocapi/public/itsme/register?language=nl&redirect_uri=https%3A%2F%2Fbase.be%2Fredirect-uri&brand=BASE';
      expect(urlService.redirectTo).toHaveBeenCalledWith(expectedRegistrationUrl);
    });
  });

  describe('initCookies', () => {
    it('should init session cookies', () => {
      jest.spyOn(cookieService, 'set');
      when(jest.spyOn(cookieService, 'get'))
        .calledWith(LoginDetailsConstants.COOKIE_KEYS)
        .mockReturnValue('param1,param2,param3');
      const requestParams = {
        source: 'email',
      };
      jest.spyOn(urlService, 'getRequestParameters').mockReturnValue(requestParams);
      loginComponent.registrationUrl = '/content/register';
      getCurrentUrl.mockReturnValue(BASE_SALES);
      const customerRegistrationUrl = 'https://www.base.be/content/register';
      loginComponent['initCookies']('sales', 'itsme');
      expect(cookieService.set).toHaveBeenNthCalledWith(1, 'source', 'email', expect.objectContaining({ path: '/' }));
      expect(cookieService.set).toHaveBeenCalledWith(
        LoginDetailsConstants.CUSTOMER_REGISTRATION_URL,
        customerRegistrationUrl,
        expect.objectContaining({ path: '/' })
      );
      expect(cookieService.set).toHaveBeenCalledWith(
        LoginDetailsConstants.PARAM_CHANNEL,
        'sales',
        expect.objectContaining({ path: '/' })
      );
      expect(cookieService.set).toHaveBeenCalledWith(
        LoginDetailsConstants.PARAM_IDP,
        'itsme',
        expect.objectContaining({ path: '/' })
      );
      expect(cookieService.set).toHaveBeenCalledWith(
        LoginDetailsConstants.PARAM_REFERRER_URL,
        BASE_SALES,
        expect.objectContaining({ path: '/' })
      );
      expect(cookieService.set).toHaveBeenCalledWith(
        LoginDetailsConstants.COOKIE_KEYS,
        'param1,param2,param3,source',
        expect.objectContaining({ path: '/' })
      );
    });
  });

  describe('cleanCookies', () => {
    it('should clean the specific session keys set during registration', () => {
      when(jest.spyOn(cookieService, 'get'))
        .calledWith(LoginDetailsConstants.COOKIE_KEYS)
        .mockReturnValue('param1,param2,param3');
      jest.spyOn(cookieService, 'delete');
      loginComponent['cleanCookies']();
      expect(cookieService.delete).toHaveBeenCalledWith('param1', '/');
      expect(cookieService.delete).toHaveBeenCalledWith('param2', '/');
      expect(cookieService.delete).toHaveBeenCalledWith('param3', '/');
      expect(cookieService.delete).toHaveBeenCalledWith(LoginDetailsConstants.COOKIE_KEYS, '/');
    });
  });

  describe('pushEventDataToAnalytics', () => {
    const eventInfoData = new udl.EventInfo();

    beforeEach(() => {
      jest.spyOn(dataLayerService, 'sendEvent');
      eventInfoData.setEventName(EventNameEnum.EVENT_NAME_LOGIN);
      eventInfoData.setType(EventTypeEnum.EVENT_TYPE_CLICK);
      when(jest.spyOn(dataLayerService, 'createEventInfo'))
        .calledWith(EventNameEnum.EVENT_NAME_LOGIN, EventTypeEnum.EVENT_TYPE_CLICK)
        .mockReturnValue(eventInfoData);
    });

    it('should fire analytics event with proper attributes when flow is marketing', () => {
      when(jest.spyOn(urlService, 'getRequestParamValue'))
        .calledWith(LoginDetailsConstants.PARAM_FLOW, '')
        .mockReturnValue('marketing');

      loginComponent.styleHint = 'sales';

      const attributes = {
        flowType: 'marketing',
      } as DataLayerAttributes;

      loginComponent['pushEventDataToAnalytics'](EventNameEnum.EVENT_NAME_LOGIN);
      eventInfoData.setEventStatus(EventStatusEnum.EVENT_STATUS_SUCCESS);
      expect(dataLayerService.sendEvent).toHaveBeenCalledWith({ eventInfo: eventInfoData, attributes });
    });

    it('should fire analytics event with proper attributes when flow is undefined and styleHint is sales', () => {
      when(jest.spyOn(urlService, 'getRequestParamValue'))
        .calledWith(LoginDetailsConstants.PARAM_FLOW, '')
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        .mockReturnValue(undefined);

      loginComponent.styleHint = 'sales';

      const attributes = {
        flowType: 'sales',
      } as DataLayerAttributes;

      loginComponent['pushEventDataToAnalytics'](EventNameEnum.EVENT_NAME_LOGIN);
      eventInfoData.setEventStatus(EventStatusEnum.EVENT_STATUS_SUCCESS);
      expect(dataLayerService.sendEvent).toHaveBeenCalledWith({ eventInfo: eventInfoData, attributes });
    });

    it('should fire analytics event with proper attributes when flow is undefined and styleHint is undefined', () => {
      when(jest.spyOn(urlService, 'getRequestParamValue'))
        .calledWith(LoginDetailsConstants.PARAM_FLOW, '')
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        .mockReturnValue(undefined);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      loginComponent.styleHint = undefined;

      const attributes = {
        flowType: 'care',
      } as DataLayerAttributes;

      loginComponent['pushEventDataToAnalytics'](EventNameEnum.EVENT_NAME_LOGIN);
      eventInfoData.setEventStatus(EventStatusEnum.EVENT_STATUS_SUCCESS);
      expect(dataLayerService.sendEvent).toHaveBeenCalledWith({ eventInfo: eventInfoData, attributes });
    });
  });

  describe('sendPageStepData', () => {
    beforeEach(() => {
      jest.spyOn(dataLayerService, 'addStepViewEvent');
    });

    it('should step view event to analytics with correct attributes when flow is marketing', () => {
      when(jest.spyOn(urlService, 'getRequestParamValue'))
        .calledWith(LoginDetailsConstants.PARAM_FLOW, '')
        .mockReturnValue('marketing');
      const attributes = {
        flowType: 'marketing',
        stepId: LoginDetailsConstants.STEP_ID_LOGIN_REGISTER,
      } as DataLayerAttributes;
      loginComponent['sendPageStepData']();
      expect(dataLayerService.addStepViewEvent).toHaveBeenCalledWith(attributes);
    });

    it('should step view event to analytics with correct attributes when flow is undefined and styleHint is sales', () => {
      when(jest.spyOn(urlService, 'getRequestParamValue'))
        .calledWith(LoginDetailsConstants.PARAM_FLOW, '')
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        .mockReturnValue(undefined);
      loginComponent.styleHint = 'sales';
      const attributes = {
        flowType: 'sales',
        stepId: LoginDetailsConstants.STEP_ID_LOGIN_REGISTER,
      } as DataLayerAttributes;
      loginComponent['sendPageStepData']();
      expect(dataLayerService.addStepViewEvent).toHaveBeenCalledWith(attributes);
    });

    it('should step view event to analytics with correct attributes when flow is undefined and styleHint is undefined', () => {
      when(jest.spyOn(urlService, 'getRequestParamValue'))
        .calledWith(LoginDetailsConstants.PARAM_FLOW, '')
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        .mockReturnValue(undefined);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      loginComponent.styleHint = undefined;
      const attributes = {
        flowType: 'care',
        stepId: LoginDetailsConstants.STEP_ID_LOGIN_REGISTER,
      } as DataLayerAttributes;
      loginComponent['sendPageStepData']();
      expect(dataLayerService.addStepViewEvent).toHaveBeenCalledWith(attributes);
    });
  });

  describe('isActionPresentInUrl', () => {
    it('should invoke register method with idp as internal when action === register', () => {
      loginComponent.action = 'register';
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      jest.spyOn<unknown>(loginComponent, 'register');
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      jest.spyOn<unknown>(loginComponent, 'redirectToRegistrationURL');
      loginComponent['registerBasedOnAction']();
      expect(loginComponent.register).toHaveBeenCalledWith('internal');
    });

    it('should invoke register method with idp as external when action === register-via-itsme', () => {
      loginComponent.action = 'register-via-itsme';
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      jest.spyOn<unknown>(loginComponent, 'register');
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      jest.spyOn<unknown>(loginComponent, 'redirectToRegistrationURL');
      loginComponent['registerBasedOnAction']();
      expect(loginComponent.register).toHaveBeenCalledWith('external');
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
