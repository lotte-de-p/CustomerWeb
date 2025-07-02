import { TestBed } from '@angular/core/testing';
import { expect, jest } from '@jest/globals';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { CustomerProfileService } from './customer-profile.service';
import { DatePipe } from '@angular/common';
import { ProfileDetails } from '../models/profile-details.model';
import { of, throwError } from 'rxjs';
import { ProfileDetailsMapper } from '../mappers/profile-details.mapper';
import { SocialLogins } from '../models/social-logins.model';
import { SocialLoginsMapper } from '../mappers/social-logins.mapper';
import { ProfileOverview } from '../models/profile.overview.model';
import { AuthenticatorsMapper } from '../mappers/authenticators.mapper';
import { HttpErrorResponse, HttpEventType, HttpHeaders } from '@angular/common/http';

describe('CustomerProfileService', () => {
  let ocapiService: OcapiService, customerProfileService: CustomerProfileService;

  const profileDetails = new ProfileDetails();
  profileDetails.identityRequestId = '6181394';
  profileDetails.role = 'Contract_Holder';
  profileDetails.firstname = 'Krn';
  profileDetails.lastname = 'Gers';
  profileDetails.contactEmail = 'kan@telenet.be';
  profileDetails.language = 'NL';
  profileDetails.gender = 'MALE';
  profileDetails.birthdate = '1979-08-14';

  const profileOverview = new ProfileOverview();
  profileOverview.customerNumber = '6181394';
  profileOverview.role = 'Contract_Holder';
  profileOverview.firstName = 'Krn';
  profileOverview.lastName = 'Gers';

  const socialLogins = new SocialLogins();
  socialLogins.isLinkedToItsme = true;

  const authenticators = { authenticators: [{ type: 'itsme', enabled: true }], '2fa': { enabled: true } };
  authenticators.authenticators[0].type = 'itsme';
  authenticators.authenticators[0].enabled = true;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        OcapiService,
        ProfileDetailsMapper,
        SocialLoginsMapper,
        DatePipe,
        {
          provide: 'Window',
          useValue: {},
        },
      ],
    });
    ocapiService = TestBed.inject(OcapiService);
    customerProfileService = TestBed.inject(CustomerProfileService);
  });

  it('should be created', () => {
    expect(customerProfileService).toBeTruthy();
  });

  describe('getProfileDetailsByIdentityId', () => {
    it('should call the ocapi service with correct parameters to get profile details', () => {
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(of(profileDetails));
      customerProfileService.getProfileDetailsByIdentityId('46975965').subscribe((response) => {
        expect(response).toEqual(profileDetails);
      });
      expect(ocapiService.doGet).toHaveBeenCalledWith(
        expect.objectContaining({
          endpoint: '/public/api/customer-service/v1/identities/46975965',
          mapper: expect.any(ProfileDetailsMapper),
        })
      );
    });

    it('should call the ocapi service with correct parameters to get profile details if pidTransferRequest true', () => {
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(of(profileDetails));
      customerProfileService.getProfileDetailsByIdentityId('46975965', true).subscribe((response) => {
        expect(response).toEqual(profileDetails);
      });
      expect(ocapiService.doGet).toHaveBeenCalledWith(
        expect.objectContaining({
          endpoint: '/public/api/customer-service/v1/identities/46975965?includetransferrequest=true',
          mapper: expect.any(ProfileDetailsMapper),
        })
      );
    });

    it('should call the ocapi service with correct parameters to get profile details if pidTransferRequest false', () => {
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(of(profileDetails));
      customerProfileService.getProfileDetailsByIdentityId('46975965', false).subscribe((response) => {
        expect(response).toEqual(profileDetails);
      });
      expect(ocapiService.doGet).toHaveBeenCalledWith(
        expect.objectContaining({
          endpoint: '/public/api/customer-service/v1/identities/46975965',
          mapper: expect.any(ProfileDetailsMapper),
        })
      );
    });
  });

  describe('getProfileOverviewByIdentityId', () => {
    it('should call the ocapi service with correct parameters to get profile overview', () => {
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(of(profileOverview));
      customerProfileService.getProfileOverview('46975965').subscribe((response) => {
        expect(response).toEqual(profileOverview);
      });
      expect(ocapiService.doGet).toHaveBeenCalledWith(
        expect.objectContaining({
          messageGroupName: 'profile-overview',
          endpoint: '/public/api/profile-management-cs/v1/identities/46975965',
        })
      );
    });
  });

  describe('getProfilePicture', () => {
    it('should call the ocapi service with correct parameters to get profile picture', () => {
      const identityId = '123456';
      const expectedEndpoint = `/public/api/profile-management-cs/v1/identities/${identityId}/profile-picture`;

      jest.spyOn(ocapiService, 'doGet').mockReturnValue(of('mockImageUrl'));

      expect(customerProfileService.getProfilePicture(identityId)).toEqual(expectedEndpoint);
    });
  });

  describe('getSocialLogins', () => {
    it('should call the ocapi service with correct parameter to get social logins', () => {
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(of(socialLogins));
      customerProfileService.getSocialLogins().subscribe((response) => {
        expect(response).toEqual(socialLogins);
      });
      expect(ocapiService.doGet).toHaveBeenCalledWith(
        expect.objectContaining({
          endpoint: '/public/api/profile-management-cs/v1/idps',
          mapper: expect.any(SocialLoginsMapper),
        })
      );
    });
  });

  describe('unlinkSocialLogin', () => {
    it('should call the ocapi service with correct parameter to unlink social login', () => {
      jest.spyOn(ocapiService, 'doDelete').mockReturnValue(of());
      customerProfileService.unlinkSocialLogin('itsme').subscribe((response) => {
        expect(response).toEqual(200);
      });
      expect(ocapiService.doDelete).toHaveBeenCalledWith(
        expect.objectContaining({
          endpoint: '/public/api/profile-management-cs/v1/idp/ITSME',
        })
      );
    });
  });

  describe('getAuthenticators', () => {
    it('should call the ocapi service with correct parameter to get authenticators', () => {
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(of(authenticators));
      customerProfileService.getAuthenticators().subscribe((response) => {
        expect(response).toEqual(authenticators);
      });
      expect(ocapiService.doGet).toHaveBeenCalledWith(
        expect.objectContaining({
          endpoint: '/public/api/profile-management-cs/v1/authenticators',
          mapper: expect.any(AuthenticatorsMapper),
        })
      );
    });
  });

  describe('update2faStatus', () => {
    it('should call the ocapi service with correct parameter to update2faStatus', () => {
      jest.spyOn(ocapiService, 'doPatch').mockReturnValue(of());
      customerProfileService.update2faStatus(true).subscribe((response) => {
        expect(response).toEqual(204);
      });
      expect(ocapiService.doPatch).toHaveBeenCalledWith(
        expect.objectContaining({
          endpoint: '/public/api/profile-management-cs/v1/authenticators/2fa',
        })
      );
    });

    it('should handle error', (done) => {
      const errorResponse = new Error('An error occurred');
      jest.spyOn(ocapiService, 'doPatch').mockReturnValue(throwError(() => errorResponse));

      customerProfileService.update2faStatus(true).subscribe({
        error: (error) => {
          expect(error).toBe(errorResponse);
          done();
        },
      });
    });
  });

  describe('unenrollFactor', () => {
    it('should call the ocapi service with correct parameter to unenrollFactor', () => {
      jest.spyOn(ocapiService, 'doDelete').mockReturnValue(of());
      customerProfileService.unenrollFactor({ type: 'itsme', id: 'abc123' }).subscribe((response) => {
        expect(response).toEqual(204);
      });
      expect(ocapiService.doDelete).toHaveBeenCalledWith(
        expect.objectContaining({
          endpoint: '/public/api/profile-management-cs/v1/authenticators/itsme/abc123',
        })
      );
    });

    it('should handle error', (done) => {
      const errorResponse = new Error('An error occurred');
      jest.spyOn(ocapiService, 'doDelete').mockReturnValue(throwError(() => errorResponse));

      customerProfileService.unenrollFactor({ type: 'itsme', id: 'abc123' }).subscribe({
        error: (error) => {
          expect(error).toBe(errorResponse);
          done();
        },
      });
    });
  });

  describe('errorHandler', () => {
    it('should handle error with status', (done) => {
      const errorResponse = createError(400, '', 'message');
      errorResponse.error.code = undefined;
      jest.spyOn(ocapiService, 'doDelete').mockReturnValue(throwError(() => errorResponse));

      const config = new OcapiCallConfig('message-group', '/url-to-call');
      const result$ = customerProfileService['handleErrorsResponse'](errorResponse, config);
      result$.subscribe({
        error: (error) => {
          expect(error).toBe('ng.message-group.ocapi.400-errorfield');
          done();
        },
      });
    });

    it('should handle error with status and code', (done) => {
      const errorResponse = createError(400, 'OCAPI-ERR-036', 'message');
      jest.spyOn(ocapiService, 'doDelete').mockReturnValue(throwError(() => errorResponse));

      const config = new OcapiCallConfig('message-group', '/url-to-call');
      const result$ = customerProfileService['handleErrorsResponse'](errorResponse, config);
      result$.subscribe({
        error: (error) => {
          expect(error).toBe('ng.message-group.ocapi.400-OCAPI-ERR-036-errorfield');
          done();
        },
      });
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});

function createError(status: number, code: string, message: string): HttpErrorResponse {
  return {
    headers: new HttpHeaders(),
    message: '',
    name: 'HttpErrorResponse',
    ok: false,
    status: 400,
    statusText: '',
    type: HttpEventType.ResponseHeader,
    url: '',
    error: {
      status: status,
      source: 'ISP',
      code: code,
      message: message,
    },
  } as HttpErrorResponse;
}
