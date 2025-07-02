import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { OmapiCacheService } from './omapi-cache.service';
import { map, take } from 'rxjs/operators';

const ANOTHER_KEY = 'another-key';
describe('OmapiCacheService', () => {
  let cacheService: OmapiCacheService<string | boolean>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OmapiCacheService, { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });

    cacheService = TestBed.inject(OmapiCacheService);
  });

  it('should be created', () => {
    expect(cacheService).toBeTruthy();
  });

  describe('get', () => {
    it('should return the correct value from the cache when key is present', () => {
      cacheService['cache'] = { key: of('key'), anotherKey: of(ANOTHER_KEY) };

      cacheService
        .get('anotherKey')
        .pipe(
          take(1),
          map((value: unknown) => value as string)
        )
        .subscribe((actual: string) => {
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
      cacheService['cache'] = { key: of('key') };
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
