import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CacheService } from './cache.service';
import { of } from 'rxjs';

const ANOTHER_KEY = 'another-key';
describe('CacheService', () => {
  let cacheService: CacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CacheService, { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });

    cacheService = TestBed.inject(CacheService);
  });

  it('should be created', () => {
    expect(cacheService).toBeTruthy();
  });

  describe('get', () => {
    it('should return the correct value from the cache when key is present', () => {
      cacheService['cache'] = { key: of('key'), anotherKey: of(ANOTHER_KEY) };

      cacheService.get('anotherKey').subscribe((actual) => {
        expect(actual).toEqual(ANOTHER_KEY);
      });
    });

    it('should return undefined when key is not present in the cache', () => {
      cacheService['cache'] = { key: of('key'), anotherKey: of(ANOTHER_KEY) };

      const actual$ = cacheService.get('yetAnotherKey');

      expect(actual$).toBeUndefined();
    });
  });

  describe('add', () => {
    it('should add the key to the cache', () => {
      cacheService['cache'] = { key: 'key' };
      const observable$ = of(true);

      cacheService.add('anotherKey', observable$);
      expect(cacheService['cache']['anotherKey']).toBeDefined();
    });
  });

  describe('remove', () => {
    it('should remove the key to the cache', () => {
      cacheService['cache'] = { key: of('key') };
      const observable$ = of(true);

      cacheService.add('anotherKey', observable$);

      expect(cacheService['cache']['anotherKey']).toBeDefined();

      cacheService.remove('anotherKey');

      expect(cacheService['cache']['anotherKey']).toBeUndefined();
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
