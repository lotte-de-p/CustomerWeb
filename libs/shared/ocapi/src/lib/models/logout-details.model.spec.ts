import { TestBed } from '@angular/core/testing';
import { LogoutMapper } from '../mappers/logout.mapper';
import { LogoutDetails } from '../models/logout-details.model';

const mockSuccessResponse = require('../../data/http/common/login-details/logout-details.json');

describe('LogoutDetails', () => {
  let logoutDetails: LogoutDetails;
  let logoutMapper: LogoutMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    logoutMapper = TestBed.inject(LogoutMapper);
    logoutDetails = logoutMapper.toModel(mockSuccessResponse);
  });

  describe('isLoggedIn', () => {
    it('should return mapped model values for given response', () => {
      expect(logoutDetails.logout_redirect_uri).toEqual('logoutUrl');
    });
  });
});
