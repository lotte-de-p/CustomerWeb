import { TestBed } from '@angular/core/testing';
import { OfferService } from './offer.service';
import { JsonUrlService, UrlService } from '@telenet/ng-lib-page';
import { OmapiProductService, OmapiProductTestfactory } from '@telenet/ng-lib-omapi';
import { of, throwError } from 'rxjs';
import { offerItemTestFactory } from '../domain/interfaces/offer.interface';

describe('OfferService', () => {
  const EXPECTED_ERROR = 'expected an error, not an offer';
  const ENCODED_STRING = 'encodedString';
  const PARAM_KEY = 'paramKey';

  let service: OfferService;
  let urlService: jest.Mocked<UrlService>;
  let jsonUrlService: jest.Mocked<JsonUrlService>;
  let omapiProductService: jest.Mocked<OmapiProductService>;

  beforeEach(() => {
    const urlServiceMock = {
      getRequestParamValue: jest.fn(),
    };
    const jsonUrlServiceMock = {
      decompress: jest.fn(),
    };
    const omapiProductServiceMock = {
      getProductById: jest.fn(),
    };

    TestBed.configureTestingModule({
      providers: [
        OfferService,
        { provide: UrlService, useValue: urlServiceMock },
        { provide: JsonUrlService, useValue: jsonUrlServiceMock },
        { provide: OmapiProductService, useValue: omapiProductServiceMock },
      ],
    });

    service = TestBed.inject(OfferService);
    urlService = TestBed.inject(UrlService) as jest.Mocked<UrlService>;
    jsonUrlService = TestBed.inject(JsonUrlService) as jest.Mocked<JsonUrlService>;
    omapiProductService = TestBed.inject(OmapiProductService) as jest.Mocked<OmapiProductService>;
  });

  it('should return offer from encoded URL parameter', (done) => {
    const encodedString = ENCODED_STRING;
    const offerItems = [offerItemTestFactory.build()];
    const omapiProducts = [OmapiProductTestfactory.build()];

    urlService.getRequestParamValue.mockReturnValue(encodedString);
    jsonUrlService.decompress.mockReturnValue(of({ offers: offerItems }));
    omapiProductService.getProductById.mockReturnValue(of(omapiProducts[0]));

    service.getOfferFromEncodedUrlParameter(PARAM_KEY).subscribe((offer) => {
      expect(offer.offerItems).toEqual(offerItems);
      expect(offer.omapiProducts).toEqual(omapiProducts);
      done();
    });
  });

  it('should handle missing URL parameter', (done) => {
    urlService.getRequestParamValue.mockReturnValue('');

    service.getOfferFromEncodedUrlParameter(PARAM_KEY).subscribe({
      next: () => done.fail(EXPECTED_ERROR),
      error: (error) => {
        expect(error.message).toBe('No paramKey parameter in URL.');
        done();
      },
    });
  });

  it('should handle decompression error', (done) => {
    const encodedString = ENCODED_STRING;
    const decompressionError = new Error('Decompression error');

    urlService.getRequestParamValue.mockReturnValue(encodedString);
    jsonUrlService.decompress.mockReturnValue(throwError(() => decompressionError));

    service.getOfferFromEncodedUrlParameter(PARAM_KEY).subscribe({
      next: () => done.fail(EXPECTED_ERROR),
      error: (error) => {
        expect(error.message).toBe(`Error decompressing data: ${decompressionError.message}`);
        done();
      },
    });
  });

  it('should handle error when fetching OmapiProduct', (done) => {
    const encodedString = ENCODED_STRING;
    const offerItems = [offerItemTestFactory.build()];
    const omapiProductError = new Error('OmapiProduct error');

    urlService.getRequestParamValue.mockReturnValue(encodedString);
    jsonUrlService.decompress.mockReturnValue(of({ offers: offerItems }));
    omapiProductService.getProductById.mockReturnValue(throwError(() => omapiProductError));

    service.getOfferFromEncodedUrlParameter(PARAM_KEY).subscribe({
      next: () => done.fail(EXPECTED_ERROR),
      error: (error) => {
        expect(error.message).toBe(omapiProductError.message);
        done();
      },
    });
  });
});
