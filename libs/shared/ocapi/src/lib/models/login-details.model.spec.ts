import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginDetails } from './login-details.model';
import { LoginDetailsMapper } from '../mappers/login-details.mapper';

const mockSuccessResponse = require('../../data/http/common/login-details/login-details.json');

describe('LoginDetails', () => {
  let loginDetails: LoginDetails;
  let loginDetailsMapper: LoginDetailsMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginDetailsMapper],
      imports: [HttpClientTestingModule],
    });
    loginDetailsMapper = TestBed.inject(LoginDetailsMapper);
    loginDetails = loginDetailsMapper.toModel(mockSuccessResponse);
  });

  describe('isLoggedIn', () => {
    it('should return TRUE if scopes are present', () => {
      const actual = loginDetails.isLoggedIn();
      expect(actual).toBe(true);
    });

    xit('should return FALSE if scopes are not present', () => {
      loginDetails.scopes = [];
      const actual = loginDetails.isLoggedIn();
      expect(actual).toBe(false);
    });
  });

  describe('isNotLoggedInOrDoesNotHasScope', () => {
    it('should return TRUE if user is not logged in', () => {
      loginDetails.httpStatus = 401;
      const actual = loginDetails.isNotLoggedInOrDoesNotHaveScope('sales');
      expect(actual).toBe(true);
    });
    it('should return TRUE if user has not given scope', () => {
      const actual = loginDetails.isNotLoggedInOrDoesNotHaveScope('unknown scope');
      expect(actual).toBe(true);
    });
    it('should return FALSE if user has given scope', () => {
      const actual = loginDetails.isNotLoggedInOrDoesNotHaveScope('sales');
      expect(actual).toBe(false);
    });
  });

  describe('isNarrowed', () => {
    it('should return TRUE if scopes are present and narrowedScope is true', () => {
      loginDetails.narrowedScope = true;
      const actual = loginDetails.isNarrowed();
      expect(actual).toBe(true);
    });

    it('should return FALSE if scopes are not present and narrowedScope is false', () => {
      loginDetails.scopes = [];
      const actual = loginDetails.isNarrowed();
      expect(actual).toBe(false);
    });

    it('should return FALSE if scopes are present and narrowedScope is false', () => {
      const actual = loginDetails.isNarrowed();
      expect(actual).toBe(false);
    });
  });

  describe('invalidResponse', () => {
    it('should return TRUE if httpStatus == 0', () => {
      loginDetails.httpStatus = 0;
      const actual = loginDetails.invalidResponse();
      expect(actual).toBe(true);
    });

    it('should return FALSE if httpStatus == 200', () => {
      loginDetails.httpStatus = 200;
      const actual = loginDetails.invalidResponse();
      expect(actual).toBe(false);
    });
  });

  describe('isAuthenticated', () => {
    it('should return TRUE if scopes are present and narrowedScope is false and invalidResponse is false', () => {
      loginDetails.httpStatus = 200;
      const actual = loginDetails.isAuthenticated();
      expect(actual).toBe(true);
    });

    it('should return TRUE if scopes are present and narrowedScope is false and invalidResponse is true', () => {
      loginDetails.httpStatus = 0;
      const actual = loginDetails.isAuthenticated();
      expect(actual).toBe(false);
    });
    it('should return TRUE if scopes are present and narrowedScope is true and invalidResponse is false', () => {
      loginDetails.narrowedScope = true;
      const actual = loginDetails.isAuthenticated();
      expect(actual).toBe(false);
    });
  });

  describe('isMaster', () => {
    it('should return TRUE if role contains master roles like MASTER_USER', () => {
      loginDetails.role = 'MASTER_USER';
      const actual = loginDetails.isMaster();
      expect(actual).toBe(true);
    });

    it('should return TRUE if role contains master roles like PREPAID_MASTER_USER', () => {
      loginDetails.role = 'PREPAID_MASTER_USER';
      const actual = loginDetails.isMaster();
      expect(actual).toBe(true);
    });

    it('should return FALSE if role does not contain MASTER', () => {
      loginDetails.role = 'ABC';
      const actual = loginDetails.isMaster();
      expect(actual).toBe(false);
    });
  });

  describe('isChild', () => {
    it('should return TRUE if role contains child roles like MASTER_USER', () => {
      loginDetails.role = 'CHILD_USER';
      const actual = loginDetails.isChild();
      expect(actual).toBe(true);
    });

    it('should return TRUE if role contains child roles like PREPAID_MASTER_USER', () => {
      loginDetails.role = 'PREPAID_CHILD_USER';
      const actual = loginDetails.isChild();
      expect(actual).toBe(true);
    });

    it('should return FALSE if role does not contain MASTER', () => {
      loginDetails.role = 'ABC';
      const actual = loginDetails.isChild();
      expect(actual).toBe(false);
    });
  });

  describe('isMember', () => {
    it('should return TRUE if role contains roles like MEMBER', () => {
      loginDetails.role = 'MEMBER';
      const actual = loginDetails.isMember();
      expect(actual).toBe(true);
    });

    it('should return TRUE if role contains roles like MEMBER_USER', () => {
      loginDetails.role = 'MEMBER_USER';
      const actual = loginDetails.isMember();
      expect(actual).toBe(true);
    });

    it('should return FALSE if role contains roles like MASTER', () => {
      loginDetails.role = 'MASTER';
      const actual = loginDetails.isChild();
      expect(actual).toBe(false);
    });
  });

  describe('getName', () => {
    it('should return an empty string given first name and last name are empty', () => {
      loginDetails.firstName = '';
      loginDetails.lastName = '';
      const actual = loginDetails.getName();
      expect(actual).toBe('');
    });

    it('should return the last name given first name is empty', () => {
      loginDetails.firstName = '';
      loginDetails.lastName = 'last name';
      const actual = loginDetails.getName();
      expect(actual).toBe('last name');
    });

    it('should return the first name given last name is empty', () => {
      loginDetails.firstName = 'first name';
      loginDetails.lastName = '';
      const actual = loginDetails.getName();
      expect(actual).toBe('first name');
    });
    it('should return the first name and last name given both are not empty', () => {
      const actual = loginDetails.getName();
      expect(actual).toBe('BiswadeepBasu');
    });
  });

  describe('getShortenedName', () => {
    xit('should return the full firstname given firstname not longer than CHARACTER_LIMIT', () => {
      loginDetails.firstName = '01234567890123456';
      const actual = loginDetails.getShortenedName();
      expect(actual).toBe('01234567890123456');
    });

    it('should return the shortened firstname given firstname is longer than CHARACTER_LIMIT', () => {
      loginDetails.firstName = '0123456789012345678901234567890123456789';
      const actual = loginDetails.getShortenedName();
      expect(actual).toBe('012345678901234567890123456789012345...');
    });

    it('should return the lastname given no firstname and not longer than CHARACTER_LIMIT', () => {
      loginDetails.firstName = '';
      loginDetails.lastName = '01234567890123456';
      const actual = loginDetails.getShortenedName();
      expect(actual).toBe('01234567890123456');
    });
  });

  describe('isNewlyRegisteredUser', () => {
    xit('should return TRUE if role and first name is defined', () => {
      const actual = loginDetails.isNewlyRegisteredUser();
      expect(actual).toBe(true);
    });

    xit('should return FALSE if either role or first name is not defined', () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      loginDetails.role = undefined;
      const actual = loginDetails.isNewlyRegisteredUser();
      expect(actual).toBe(false);
    });

    it('should return FALSE if either role or first name is not defined', () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      loginDetails.firstName = undefined;
      const actual = loginDetails.isNewlyRegisteredUser();
      expect(actual).toBe(false);
    });

    it('should return FALSE if rrole and first name is not defined', () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      loginDetails.role = undefined;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      loginDetails.firstName = undefined;
      const actual = loginDetails.isNewlyRegisteredUser();
      expect(actual).toBe(false);
    });
  });

  describe('isBaseLegacyCustomer', () => {
    it('should return TRUE if customer type is BASE_LEGACY', () => {
      loginDetails.bssSystem = 'BASE_LEGACY';
      const actual = loginDetails.isBaseLegacyCustomer();
      expect(actual).toBe(true);
    });

    it('should return FALSE if customer type is not BASE_LEGACY', () => {
      loginDetails.bssSystem = 'ABC';
      const actual = loginDetails.isBaseLegacyCustomer();
      expect(actual).toBe(false);
    });
  });

  describe('isDarwinCustomer', () => {
    xit('should return TRUE if customer type is NETCRACKER', () => {
      loginDetails.bssSystem = 'BASE_LEGACY';
      const actual = loginDetails.isBssSystemNetcracker();
      expect(actual).toBe(true);
    });

    it('should return FALSE if customer type is not NETCRACKER', () => {
      loginDetails.bssSystem = 'ABC';
      const actual = loginDetails.isBssSystemNetcracker();
      expect(actual).toBe(false);
    });
  });

  xdescribe('hasScope', () => {
    it('should return TRUE if the specific scope is present', () => {
      const actual = loginDetails.hasScope('sales');
      expect(actual).toBe(true);
    });

    it('should return FALSE if the specific scope is not present', () => {
      const actual = loginDetails.hasScope('abc');
      expect(actual).toBe(true);
    });
  });

  describe('isFleetManager', () => {
    it('should return true if role is FLEET MANAGER', () => {
      loginDetails.role = 'FLEET MANAGER';
      const actual = loginDetails.isFleetManager();

      expect(actual).toBe(true);
    });

    it('should return false if role is not FLEET MANAGER', () => {
      loginDetails.role = 'FLEET USER';
      const actual = loginDetails.isFleetManager();

      expect(actual).toBe(false);
    });
  });

  describe('isFleetUser', () => {
    it('should return false if role is not FLEET USER', () => {
      loginDetails.role = 'FLEET USER';
      const actual = loginDetails.isFleetUser();

      expect(actual).toBe(true);
    });

    it('should return true if role is FLEET USER', () => {
      loginDetails.role = 'FLEET MANAGER';
      const actual = loginDetails.isFleetUser();

      expect(actual).toBe(false);
    });
  });

  describe('isManager', () => {
    it('should return true if role is MANAGER', () => {
      loginDetails.role = 'MANAGER';
      const actual = loginDetails.isManager();

      expect(actual).toBe(true);
    });

    it('should return false if role is not MANAGER', () => {
      loginDetails.role = 'USER';
      const actual = loginDetails.isManager();

      expect(actual).toBe(false);
    });
  });

  describe('hasManagerRole', () => {
    it('should return true if role is MANAGER', () => {
      loginDetails.role = 'MANAGER';
      const actual = loginDetails.hasManagerRole();

      expect(actual).toBe(true);
    });
    it('should return true if role is INTERNET_MASTER', () => {
      loginDetails.role = 'INTERNET_MASTER';
      const actual = loginDetails.hasManagerRole();

      expect(actual).toBe(true);
    });
    it('should return true if role is CUSTOMER_ADMIN', () => {
      loginDetails.role = 'CUSTOMER_ADMIN';
      const actual = loginDetails.hasManagerRole();

      expect(actual).toBe(true);
    });
    it('should return true if role is CONTRACT_HOLDER', () => {
      loginDetails.role = 'CONTRACT_HOLDER';
      const actual = loginDetails.hasManagerRole();

      expect(actual).toBe(true);
    });

    it('should return false if role is not MANAGER', () => {
      loginDetails.role = 'USER';
      const actual = loginDetails.hasManagerRole();

      expect(actual).toBe(false);
    });
  });

  describe('isContractHolder', () => {
    it('should return true if role is CONTRACT_HOLDER', () => {
      loginDetails.role = 'CONTRACT_HOLDER';
      const actual = loginDetails.isContractHolder();

      expect(actual).toBe(true);
    });

    it('should return false if role is not CONTRACT_HOLDER', () => {
      loginDetails.role = 'USER';
      const actual = loginDetails.isContractHolder();

      expect(actual).toBe(false);
    });
  });

  describe('isOrphan', () => {
    it('should return true if role is ORPHAN', () => {
      loginDetails.role = 'ORPHAN';
      const actual = loginDetails.isOrphan();

      expect(actual).toBe(true);
    });

    it('should return false if role is not ORPHAN', () => {
      loginDetails.role = 'USER';
      const actual = loginDetails.isOrphan();

      expect(actual).toBe(false);
    });
  });
  describe('isSuccess', () => {
    it('should return true when user is logged in', () => {
      loginDetails.httpStatus = 200;
      const actual = loginDetails.isSuccess;

      expect(actual).toBe(true);
    });

    it('should return true when user is not logged in', () => {
      loginDetails.httpStatus = 500;
      const actual = loginDetails.isSuccess;

      expect(actual).toBe(false);
    });
  });

  describe('enrich', () => {
    it('should return enriched object from the passed object', () => {
      const loginDetailsJSON = loginDetailsMapper.toModel(mockSuccessResponse);
      const actual = loginDetails.enrich(loginDetailsJSON);
      expect(actual).toBeDefined();
      expect(actual.customerNumber).toEqual(loginDetails.customerNumber);
      expect(actual.isLoggedIn()).toBe(true);
      expect(actual.isBssSystemNetcracker()).toBe(true);
    });

    it('should return enriched object from the passed object when passed object is empty', () => {
      const actual = loginDetails.enrich({});
      expect(actual).toBeDefined();
      expect(actual.customerNumber).toBeUndefined();
      expect(actual.isLoggedIn()).toBe(false);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
