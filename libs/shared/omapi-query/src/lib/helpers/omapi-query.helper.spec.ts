import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OmapiQueryHelper } from './omapi-query.helper';

describe('OmapiQueryHelper', () => {
  let omapiQueryHelper: OmapiQueryHelper;
  const applicationJson = 'application/json',
    contentType = 'Content-Type';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: 'Window', useValue: {} }],
    });
    omapiQueryHelper = TestBed.inject(OmapiQueryHelper);
  });

  describe('createHttpHeaders', () => {
    it('should return httpHeaders', () => {
      const actual = omapiQueryHelper.createHttpHeaders();

      expect(actual[contentType]).toBe(applicationJson);
    });
  });

  describe('getHttpOptions', () => {
    it('should return HttpOptions', () => {
      const actual = omapiQueryHelper.getHttpOptions();
      expect(actual.headers.get(contentType)).toBe(applicationJson);
    });
  });

  describe('getHttpHeaders', () => {
    it('should return HttpHeaders', () => {
      const actual = omapiQueryHelper.getHttpHeaders();

      expect(actual.get(contentType)).toBe(applicationJson);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
