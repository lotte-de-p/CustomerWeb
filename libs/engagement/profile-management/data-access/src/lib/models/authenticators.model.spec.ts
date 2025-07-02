import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Authenticators } from './authenticators.model';

describe('Authenticators', () => {
  let authenticators: Authenticators;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [],
      imports: [HttpClientTestingModule],
    });

    authenticators = { authenticators: [{ type: 'itsme', enabled: true }], ['2fa']: { enabled: false } };
  });

  describe('getAuthenticators', () => {
    it('should return the authenticators object', () => {
      authenticators.authenticators[0].type = 'itsme';
      authenticators.authenticators[0].enabled = true;
      const actual = authenticators;
      expect(actual.authenticators[0].type).toBe('itsme');
      expect(actual.authenticators[0].enabled).toBe(true);
      expect(actual?.['2fa'].enabled).toBe(false);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
