import { TestBed } from '@angular/core/testing';
import { LogoutMapper } from '../mappers/logout.mapper';
import { LogoutDetails } from '../models/logout-details.model';

const mockSuccessResponse = require('../../data/http/common/login-details/logout-details.json');

describe('LogoutMapper', () => {
  let logoutMapper: LogoutMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    logoutMapper = TestBed.inject(LogoutMapper);
  });

  describe('toModel', () => {
    let logoutDetails: LogoutDetails;

    it('should MAP the response data', () => {
      logoutDetails = logoutMapper.toModel(mockSuccessResponse);
      expect(logoutDetails.logout_redirect_uri).toBe('logoutUrl');
    });
  });
});
