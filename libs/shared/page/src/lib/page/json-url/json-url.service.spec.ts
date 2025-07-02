import { TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { JsonUrlService } from './json-url.service';

describe('JsonUrlService', () => {
  let service: JsonUrlService, object: unknown, compressedString: string;

  beforeEach(() => {
    window['JsonUrl'] = function () {
      return {
        lzma: new Function(),
        compress: function () {
          return new Promise((resolve) => {
            resolve(compressedString);
          });
        },
        decompress: function () {
          return new Promise((resolve) => {
            resolve({
              roses: 'red',
              violets: 'blue',
            });
          });
        },
      };
    };

    object = {
      roses: 'red',
      violets: 'blue',
    };
    compressedString = 'XQAAAAIjAAAAAAAAAABAqYnmbFEIbVbO7gEot3B4b5SZE4CcYhLtXznaU-11lNN2skEPH_5a__-ONgAA';
    TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: window }],
      imports: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });

    service = TestBed.inject(JsonUrlService);
  });

  describe('compress', () => {
    it('should return a compressed lzma encoded string', async () => {
      service.compress(object).subscribe((actual) => {
        expect(actual).toEqual(compressedString);
      });
    });
  });

  describe('decompress', () => {
    it('should return a decompressed object from an encoded lzma string', async () => {
      service.decompress(compressedString).subscribe((actual) => {
        expect(actual).toEqual(object);
      });
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
