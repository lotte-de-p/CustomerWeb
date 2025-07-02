import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { ProductRecommendationService } from './product-recommendation.service';
import { ProductRecommendationMapper } from './product-recommendation.mapper';
import { ProductRecommendationsRequest } from './product-recommendations-request.interface';
import { RawProductRecommendationResult } from './raw-product-recommendation-result.interface';
import { HttpClient } from '@angular/common/http';
import { Household } from '../../entities/household/household.interface';
import { InternetUsage } from '../../entities/internet-usage/internet-usage.interface';
import { MobileLine } from '../../entities/mobile-usage/mobile.usage.interface';
import { Preference } from '../../entities/preference/preference.interface';
import { ProductRecommendationResult } from '../../entities/results-screen/product-recommendation-result.interface';
import { TvChannels } from '../../entities/tv-channels/tv-channels.interface';
import { TvExperience } from '../../entities/tv-experience/tv-experinece.interface';
import { MobileLineRequest } from './mobile-line-request.interface';
import { ConfigConstants, ConfigService } from '@telenet/ng-lib-config';

describe('ProductRecommendationService', () => {
  let productRecommendationService: ProductRecommendationService;
  let httpClient: HttpClient;
  let productRecommendationMapper: ProductRecommendationMapper;
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

    productRecommendationService = TestBed.inject(ProductRecommendationService);
    productRecommendationMapper = TestBed.inject(ProductRecommendationMapper);
    configService = TestBed.inject(ConfigService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(productRecommendationService).toBeTruthy();
  });

  it('should return product recommendations', (done) => {
    const preference: Preference = {
      surfing: false,
      mobile: false,
      watchTv: false,
      fixedLine: true,
    };
    const household: Household = {
      adults: 1,
      children: 1,
      teens: 1,
    };
    const internetUsage: InternetUsage = {
      selection: ['NEWS'],
    };
    const mobileLines: MobileLine[] = [{ selection: ['NEWS'], collapsed: false, error: null }];
    const tvChannels: TvChannels = { selection: ['SPORTS'] };
    const tvExperience: TvExperience = { selection: ['TV_APP'] };
    const mobileLineRequests: MobileLineRequest[] = [
      {
        mobileUsages: mobileLines.flatMap((mobileLine: MobileLine) => mobileLine.selection),
      },
    ];
    const productRecommendationsRequest: ProductRecommendationsRequest = {
      household,
      internetUsages: internetUsage.selection,
      mobileLines: mobileLineRequests,
      tvChannels: tvChannels.selection,
      tvExperiences: tvExperience.selection,
      fixedTelephone: preference.fixedLine,
      promotions: [],
      customerProductHolding: [],
    };
    const rawProductRecommendationResult: RawProductRecommendationResult = {
      productRecommendations: [
        {
          offers: [{ id: '1', type: 'type', offers: [], amountOfLimitedSims: 1 }],
          salesOffer: {
            price: 1,
            promo: {
              price: 1,
              durationInMonths: 12,
            },
          },
        },
      ],
      mostRecommendedIndex: 0,
    };

    const expected: ProductRecommendationResult = {
      productRecommendations: [
        {
          offers: [{ id: '1', type: 'type', offers: [], amountOfLimitedSims: 1 }],
          salesOffer: {
            price: 1,
            promo: {
              price: 1,
              durationInMonths: 12,
            },
          },
          products: [],
        },
      ],
      mostRecommendedIndex: 0,
    };

    const httpClientSpy = jest.spyOn(httpClient, 'post').mockReturnValue(of(rawProductRecommendationResult));
    const productRecommendationMapperSpy = jest
      .spyOn(productRecommendationMapper, 'toModel')
      .mockReturnValue(of(expected));
    const configServiceSpy = jest
      .spyOn(configService, 'getConfig')
      .mockReturnValue('https://int.sofy-dev.awscloud.external.telenet.be');

    productRecommendationService
      .getProductRecommendations(productRecommendationsRequest)
      .subscribe((result: ProductRecommendationResult) => {
        expect(result).toEqual(expected);
        expect(httpClientSpy).toHaveBeenCalledWith(
          'https://int.sofy-dev.awscloud.external.telenet.be/product-finder/api/v1/product-finder',
          productRecommendationsRequest
        );
        expect(productRecommendationMapperSpy).toHaveBeenCalledWith(rawProductRecommendationResult);
        expect(configServiceSpy).toHaveBeenCalledWith(ConfigConstants.PRODUCT_FINDER_URL);
        done();
      });
  });
});
