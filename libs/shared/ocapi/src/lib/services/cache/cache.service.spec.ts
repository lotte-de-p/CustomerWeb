import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CacheService } from './cache.service';
import { of } from 'rxjs';

describe('CacheService', () => {
  let ocapiCacheService: CacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CacheService, { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });

    ocapiCacheService = TestBed.inject(CacheService);
  });

  it('should be created', () => {
    expect(ocapiCacheService).toBeTruthy();
  });

  describe('get', () => {
    const anotherKey = 'another-key';
    it('should return the correct value from the cache when key is present', () => {
      ocapiCacheService['cache'] = { key: of('key'), anotherKey: of(anotherKey) };

      ocapiCacheService.get('anotherKey').subscribe((actual) => {
        expect(actual).toEqual(anotherKey);
      });
    });

    it('should return undefined when key is not present in the cache', () => {
      ocapiCacheService['cache'] = { key: of('key'), anotherKey: of(anotherKey) };

      const actual$ = ocapiCacheService.get('yetAnotherKey');

      expect(actual$).toBeUndefined();
    });
  });

  describe('add', () => {
    it('should add the key to the cache', () => {
      ocapiCacheService['cache'] = { key: of('key') };
      const observable$ = of(true);

      ocapiCacheService.add('anotherKey', observable$);

      expect(ocapiCacheService['cache']['anotherKey']).toBeDefined();
    });
  });

  describe('remove', () => {
    it('should remove the key to the cache', () => {
      ocapiCacheService['cache'] = { key: of('key') };
      const observable$ = of(true);

      ocapiCacheService.add('anotherKey', observable$);

      expect(ocapiCacheService['cache']['anotherKey']).toBeDefined();

      ocapiCacheService.remove('anotherKey');

      expect(ocapiCacheService['cache']['anotherKey']).toBeUndefined();
    });
  });
});
