import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FactorSessionStorage } from './factor.session.storage.model';

describe('FactorSessionStorage', () => {
  let factorSessionStorage: FactorSessionStorage;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [],
      imports: [HttpClientTestingModule],
    });

    factorSessionStorage = { type: 'authenticator', id: 'abc123', successPageUrl: 'https://success.com' };
  });

  describe('getFactorSessionStorage', () => {
    it('should return the factorSessionStorage object', () => {
      const actual = factorSessionStorage;
      expect(actual.type).toBe('authenticator');
      expect(actual.id).toBe('abc123');
      expect(actual.successPageUrl).toBe('https://success.com');
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
