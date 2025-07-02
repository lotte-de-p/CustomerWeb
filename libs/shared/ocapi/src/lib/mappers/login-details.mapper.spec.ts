import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginDetailsMapper } from './login-details.mapper';
import { LoginDetails } from '../models/login-details.model';

const mockSuccessResponse = require('../../data/http/common/login-details/login-details.json');
const mockFailedResponse = require('../../data/http/common/login-details/login-details-failed.json');

describe('LoginDetailsMapper', () => {
  let loginDetailsMapper: LoginDetailsMapper;
  let loginDetails: LoginDetails;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginDetailsMapper],
      imports: [HttpClientTestingModule],
    });
    loginDetailsMapper = TestBed.inject(LoginDetailsMapper);
  });

  describe('toModel', () => {
    beforeEach(() => {
      loginDetails = loginDetailsMapper.toModel(mockSuccessResponse);
    });

    it('should MAP the login details', () => {
      expect(loginDetails.authAge).toBe(510218);
      expect(loginDetails.bssSystem).toBe('NETCRACKER');
      expect(loginDetails.customerNumber).toBe('1200046085');
      expect(loginDetails.firstName).toBe('Biswadeep');
      expect(loginDetails.httpStatus).toBe(200);
      expect(loginDetails.identityId).toBe('32487074146');
      expect(loginDetails.isExplicitLogin).toBe(true);
      expect(loginDetails.isImpersonated).toBe(false);
      expect(loginDetails.isPid).toBe(true);
      expect(loginDetails.isSubLogin).toBe(false);
      expect(loginDetails.isTelenetLogin).toBe(false);
      expect(loginDetails.lastName).toBe('Basu');
      expect(loginDetails.loginAlias).toBe('bf71e263-5005-4616-bda7-78a8c1d83899');
      expect(loginDetails.narrowed).toBe(false);
      expect(loginDetails.narrowedScope).toBe(false);
      expect(loginDetails.role).toBe('MASTER_USER');
      expect(loginDetails.identityRequestId).toBe('22222222');
      expect(loginDetails.pegaServiceCaseId).toBe('19783');
      expect(loginDetails.contactNumber).toBe('0488888888');
      expect(loginDetails.advisorId).toBe('adminfmc');
    });
  });

  describe('toModel - failed', () => {
    beforeEach(() => {
      loginDetails = loginDetailsMapper.toModel(mockFailedResponse);
    });

    it('should MAP the login details - failed', () => {
      expect(loginDetails.state).toBe('FAILED');
      expect(loginDetails.nonce).toBe('1234567890');
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
