import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HttpClient } from '@angular/common/http';
import { SalesOfferMapper } from './sales-offer.mapper';
import { SalesOfferService } from './sales-offer.service';
import { ConfigConstants, ConfigService } from '@telenet/ng-lib-config';
import { Observable, of } from 'rxjs';
import { SalesOfferRequest } from './sales-offer-request.interface';
import { RawSalesOffer, SalesOffer } from '@sales/shared/data-access';

describe('SalesOfferService', () => {
  let salesOfferService: SalesOfferService;
  let httpClient: HttpClient;
  let salesOfferMapper: SalesOfferMapper;
  let configService: ConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: 'Window',
          useValue: {},
        },
      ],
    });
    salesOfferService = TestBed.inject(SalesOfferService);
    httpClient = TestBed.inject(HttpClient);
    salesOfferMapper = TestBed.inject(SalesOfferMapper);
    configService = TestBed.inject(ConfigService);
  });

  describe('getSalesOffer', () => {
    it('should retrieve SalesOffer', (done) => {
      const salesOfferRequest: SalesOfferRequest = {
        offers: [],
        promotions: [],
        customerProductHolding: [],
      };
      const rawSalesOffer: RawSalesOffer = {
        price: 10,
        promo: null,
      };
      const expected: SalesOffer = {
        price: 10,
        promo: null,
      };
      const httpClientSpy = jest.spyOn(httpClient, 'post').mockReturnValue(of(rawSalesOffer));
      const salesOfferMapperSpy = jest.spyOn(salesOfferMapper, 'toModel').mockReturnValue(expected);
      const configServiceSpy = jest
        .spyOn(configService, 'getConfig')
        .mockReturnValue('https://int.sofy-dev.awscloud.external.telenet.be');

      const result$: Observable<SalesOffer> = salesOfferService.getSalesOffer(salesOfferRequest);

      result$.subscribe((actual: SalesOffer) => {
        expect(actual).toEqual(expected);
        expect(httpClientSpy).toHaveBeenCalledWith(
          'https://int.sofy-dev.awscloud.external.telenet.be/product-finder/api/v1/sales-offer',
          salesOfferRequest
        );
        expect(salesOfferMapperSpy).toHaveBeenCalledWith(rawSalesOffer);
        expect(configServiceSpy).toHaveBeenCalledWith(ConfigConstants.PRODUCT_FINDER_URL);
        done();
      });
    });
  });
});
