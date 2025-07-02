import { UrlRetrievalService } from './url-retrieval-service';
import { JsonUrlService, UrlService } from '@telenet/ng-lib-page';
import { TestBed } from '@angular/core/testing';
import { ExtractOmapiProductService } from './extract-omapi-product.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';

describe('ExtractOmapiProductService', () => {
  let service: UrlRetrievalService;
  let urlService: UrlService;
  let jsonUrlService: JsonUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExtractOmapiProductService, UrlService, JsonUrlService, { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(UrlRetrievalService);
    urlService = TestBed.inject(UrlService);
    jsonUrlService = TestBed.inject(JsonUrlService);
  });

  describe('getOffersFromUrl', () => {
    it('should return an array of offers', (done) => {
      const paramKey = 'sdata';
      const encodedString = 'encodedString';
      const offers = [{ id: '1', type: 'someType', offers: [{ id: '2', type: 'someType' }] }];

      jest.spyOn(urlService, 'getRequestParamValue').mockReturnValue(encodedString);
      jest.spyOn(jsonUrlService, 'decompress').mockReturnValue(of({ offers }));

      service.getOffersFromUrl(paramKey).subscribe((response) => {
        expect(response).toEqual(offers);
        done();
      });
    });

    it('should throw an error if no sdata parameter is present in the URL', (done) => {
      const paramKey = 'sdata';

      jest.spyOn(urlService, 'getRequestParamValue').mockReturnValue('');

      service.getOffersFromUrl(paramKey).subscribe({
        error: (error) => {
          expect(error.message).toEqual(`No ${paramKey} parameter in URL.`);
          done();
        },
      });
    });

    it('should throw an error if decompressing data fails', (done) => {
      const paramKey = 'sdata';
      const encodedString = 'encodedString';

      jest.spyOn(urlService, 'getRequestParamValue').mockReturnValue(encodedString);
      jest.spyOn(jsonUrlService, 'decompress').mockReturnValue(throwError(() => new Error('Decompression error')));

      service.getOffersFromUrl(paramKey).subscribe({
        error: (error) => {
          expect(error.message).toEqual('Error decompressing data: Decompression error');
          done();
        },
      });
    });
  });
});
