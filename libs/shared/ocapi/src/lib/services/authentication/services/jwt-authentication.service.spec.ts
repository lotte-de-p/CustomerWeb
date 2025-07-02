import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ConfigService } from '@telenet/ng-lib-config';
import { LanguageEnum, LanguageService, UrlService } from '@telenet/ng-lib-page';
import { HttpClient } from '@angular/common/http';
import { AuthenticationState } from '../state/authentication.state';
import { AuthenticationService } from '../models';
import { OcapiHelper } from '../../../utils';
import { AUTH_SERVICE } from '../tokens';
import { AuthenticationProvider } from '../providers';
import { JWTAuthenticationService } from './jwt-authentication.service';

interface MockAuthenticationService extends AuthenticationService {
  isCurrentSessionActive: jest.Mock;
  attemptAuthenticate: jest.Mock;
  authenticationState: AuthenticationState;
  authenticationProvider: AuthenticationProvider;
  // add other methods as needed
}
describe('JwtAuthenticationService', () => {
  let authenticationService: AuthenticationService;
  let authenticationState: AuthenticationState;
  let languageService: LanguageService;
  let urlService: UrlService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        ConfigService,
        LanguageService,
        HttpClient,
        OcapiHelper,
        UrlService,
        {
          provide: 'Window',
          useValue: {
            Config: {
              'auth-provider': 'openid',
              'openid-auth-url': 'ocapi-base-url/openid/auth',
              'openid-client-id': 'ocapi',
            },
            location: {
              get: 'https://dummy.com/currenturl',
              search: '?jwt=fakejwt',
            },
          },
        },
      ],
      imports: [HttpClientTestingModule],
    });
    urlService = TestBed.inject(UrlService);
    languageService = TestBed.inject(LanguageService);
    authenticationService = TestBed.inject(AUTH_SERVICE);
    authenticationState = TestBed.inject(AuthenticationState);
    httpMock = TestBed.inject(HttpTestingController);

    languageService.getLanguage = jest.fn().mockReturnValue(LanguageEnum.NL);
    urlService.getCurrentUrl = jest.fn().mockReturnValue('https://dummy.com/currenturl');
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(authenticationService).toBeTruthy();
    expect(authenticationService instanceof JWTAuthenticationService).toBeTruthy();
  });

  describe('getAuthenticationStatus', () => {
    it('should return true if user details can be retrieved with jwt', () => {
      const serviceAny = authenticationService as MockAuthenticationService;
      jest.spyOn(serviceAny.authenticationState, 'setAuthenticated');

      serviceAny.getAuthenticationStatus().subscribe((isAuthenticated: boolean) => {
        expect(isAuthenticated).toBeTruthy();
        expect(authenticationState.setAuthenticated).toHaveBeenCalledWith(true);
      });

      const req = httpMock.expectOne('/oauth/userdetails?jwt=fakejwt');
      expect(req.request.method).toEqual('GET');
      req.flush({});

      httpMock.verify();
    });

    it('should return false if user details cannot be retrieved with jwt', () => {
      const serviceAny = authenticationService as MockAuthenticationService;
      jest.spyOn(serviceAny.authenticationState, 'setAuthenticated');

      serviceAny.getAuthenticationStatus().subscribe((isAuthenticated: boolean) => {
        expect(isAuthenticated).toBeFalsy();
        expect(authenticationState.setAuthenticated).toHaveBeenCalledWith(false);
      });

      const req = httpMock.expectOne('/oauth/userdetails?jwt=fakejwt');
      expect(req.request.method).toEqual('GET');
      req.flush({}, { status: 401, statusText: 'Unauthorized' });

      httpMock.verify();
    });
  });
});
