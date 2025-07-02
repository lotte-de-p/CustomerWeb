/* eslint-disable sonarjs/no-duplicate-string */
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { SalesOfferService } from './sales-offer.service';
import { HttpClient } from '@angular/common/http';
import { ConfigConstants, ConfigService } from '@telenet/ng-lib-config';
import { SalesOfferRequest } from '../../entities/sales-offer/sales-offer-request';
import { SalesOffer } from '../../entities/sales-offer/sales-offer';
import { RawSalesOfferRequest } from './sales-offer-request.interface';
import { UrlService } from '@telenet/ng-lib-page';

describe('SalesOfferService', () => {
  let salesOfferService: SalesOfferService;
  let httpClient: HttpClient;
  let configService: ConfigService;
  let urlService: UrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: 'Window', useValue: {} }],
    });

    salesOfferService = TestBed.inject(SalesOfferService);
    httpClient = TestBed.inject(HttpClient);
    configService = TestBed.inject(ConfigService);
    urlService = TestBed.inject(UrlService);
  });

  it('should be created', () => {
    expect(salesOfferService).toBeTruthy();
  });

  describe('fetchSalesOffer', () => {
    it('should return sales offer', (done) => {
      const salesOfferRequest: SalesOfferRequest = {
        products: [
          {
            omapiId: 'C5FA0008',
            options: [],
            streamingServices: [],
            optins: ['FLIN0001', 'MBLN0002'],
            amountOfLimitedSims: 2,
          },
          {
            omapiId: 'OTTV0000',
            options: ['TVPK0015'],
            streamingServices: [{ omapiId: 'STRM0007', options: [] }],
            optins: [],
          },
        ],
        promotions: [],
        customerProductHolding: [],
        campaignCode: '',
      };
      const rawSalesOfferRequest: RawSalesOfferRequest = {
        products: [
          {
            omapiid: 'C5FA0008',
            options: [],
            streamingservices: [],
            optinproducts: ['FLIN0001', 'MBLN0002'],
            amountoflimitedsims: 2,
          },
          {
            omapiid: 'OTTV0000',
            options: ['TVPK0015'],
            streamingservices: [{ omapiid: 'STRM0007', options: [] }],
            optinproducts: [],
          },
        ],
        promotions: [],
        customerproductholding: [],
        campaigncode: '',
        voucherpromo: '',
      };

      const expected: SalesOffer = {
        products: [
          {
            omapiId: 'C5FA0008',
            price: 104.64,
            options: [],
            streamingServices: [],
            optins: [
              { omapiId: 'FLIN0001', price: 0 },
              { omapiId: 'MBLN0002', price: 0 },
            ],
          },
          {
            omapiId: 'OTTV0000',
            price: 10.89,
            options: [{ omapiId: 'TVPK0015', price: 25.95 }],
            streamingServices: [{ omapiId: 'STRM0007', price: 19.99, options: [] }],
            optins: [],
          },
        ],
      };

      const httpClientSpy = jest
        .spyOn(httpClient, 'post')
        .mockReturnValue(of(JSON.parse(salesOfferServiceResponseJson)));
      const configServiceSpy = jest
        .spyOn(configService, 'getConfig')
        .mockReturnValue('https://int.sofy-dev.awscloud.external.telenet.be');
      jest
        .spyOn(urlService, 'getCurrentUrl')
        .mockReturnValue('https://www.int.telenet.be/residential/nl/producten/one/configuratie');

      salesOfferService.fetchSalesOffer(salesOfferRequest).subscribe((result: SalesOffer) => {
        expect(result).toEqual(expected);
        expect(httpClientSpy).toHaveBeenCalledWith(
          'https://int.sofy-dev.awscloud.external.telenet.be/sofy/public/',
          rawSalesOfferRequest,
          {
            headers: {
              'x-alt-referer': 'https://www.int.telenet.be/residential/nl/producten/one/configuratie',
              'X-Requested-With': 'XMLHttpRequest',
            },
          }
        );
        expect(configServiceSpy).toHaveBeenCalledWith(ConfigConstants.SOFY_URL);
        done();
      });
    });
  });
});

const salesOfferServiceResponseJson =
  '{\n' +
  '  "products": [\n' +
  '    {\n' +
  '      "price": 104.64,\n' +
  '      "omapiid": "C5FA0008",\n' +
  '      "correlationid": null,\n' +
  '      "specurl": "https://api.dev.telenet.test/omapi/public/product/C5FA0008",\n' +
  '      "description": "one_3",\n' +
  '      "options": [\n' +
  '        {\n' +
  '          "price": 10.0,\n' +
  '          "specurl": "https://api.dev.telenet.test/omapi/public/product/BERU0001",\n' +
  '          "omapiid": "BERU0001",\n' +
  '          "mutuallyexclusive": null,\n' +
  '          "mutuallyexclusivelist": null,\n' +
  '          "requiredoption": null,\n' +
  '          "selected": false,\n' +
  '          "description": "international_calling",\n' +
  '          "promos": [],\n' +
  '          "priceexclvat": 8.26,\n' +
  '          "originalprice": null,\n' +
  '          "originalpriceexclvat": null\n' +
  '        }\n' +
  '      ],\n' +
  '      "promos": [\n' +
  '        {\n' +
  '          "name": "YELLOW_DEALS_2_ONE_A1_RES_PROMO",\n' +
  '          "duration": 12,\n' +
  '          "legalid": "YELLOW_DEALS_2_ONE_A1",\n' +
  '          "backendid": 253087,\n' +
  '          "price": -15.0,\n' +
  '          "period": {\n' +
  '            "startdate": 1722816000000,\n' +
  '            "enddate": 1730592000000\n' +
  '          },\n' +
  '          "puk": null,\n' +
  '          "tags": [],\n' +
  '          "priceexclvat": -12.4\n' +
  '        }\n' +
  '      ],\n' +
  '      "installtypes": [],\n' +
  '      "costs": [],\n' +
  '      "priceexclvat": 86.48,\n' +
  '      "originalprice": 119.44,\n' +
  '      "originalpriceexclvat": 98.71,\n' +
  '      "streamingservices": [],\n' +
  '      "optinproducts": [\n' +
  '        {\n' +
  '          "price": 0.0,\n' +
  '          "specurl": "https://api.dev.telenet.test/omapi/public/product/FLIN0001",\n' +
  '          "omapiid": "FLIN0001",\n' +
  '          "mutuallyexclusive": null,\n' +
  '          "mutuallyexclusivelist": null,\n' +
  '          "requiredoption": null,\n' +
  '          "selected": true,\n' +
  '          "description": "chill_fixtel",\n' +
  '          "promos": [],\n' +
  '          "priceexclvat": 0.0,\n' +
  '          "originalprice": null,\n' +
  '          "originalpriceexclvat": null\n' +
  '        },\n' +
  '        {\n' +
  '          "price": 0.0,\n' +
  '          "specurl": "https://api.dev.telenet.test/omapi/public/product/MBLN0002",\n' +
  '          "omapiid": "MBLN0002",\n' +
  '          "mutuallyexclusive": null,\n' +
  '          "mutuallyexclusivelist": null,\n' +
  '          "requiredoption": null,\n' +
  '          "selected": true,\n' +
  '          "description": "data_sim_chill_1",\n' +
  '          "promos": [],\n' +
  '          "priceexclvat": 0.0,\n' +
  '          "originalprice": null,\n' +
  '          "originalpriceexclvat": null\n' +
  '        }\n' +
  '      ]\n' +
  '    },\n' +
  '    {\n' +
  '      "price": 10.89,\n' +
  '      "omapiid": "OTTV0000",\n' +
  '      "correlationid": null,\n' +
  '      "specurl": "https://api.dev.telenet.test/omapi/public/product/OTTV0000",\n' +
  '      "description": "telenet_tv_flow",\n' +
  '      "options": [\n' +
  '        {\n' +
  '          "price": 15.55,\n' +
  '          "specurl": "https://api.dev.telenet.test/omapi/public/product/TVPK0016",\n' +
  '          "omapiid": "TVPK0016",\n' +
  '          "mutuallyexclusive": null,\n' +
  '          "mutuallyexclusivelist": null,\n' +
  '          "requiredoption": null,\n' +
  '          "selected": false,\n' +
  '          "description": "play_sports",\n' +
  '          "promos": [],\n' +
  '          "priceexclvat": 12.85,\n' +
  '          "originalprice": 31.95,\n' +
  '          "originalpriceexclvat": 26.4\n' +
  '        },\n' +
  '        {\n' +
  '          "price": 25.95,\n' +
  '          "specurl": "https://api.dev.telenet.test/omapi/public/product/TVPK0015",\n' +
  '          "omapiid": "TVPK0015",\n' +
  '          "mutuallyexclusive": "streamz_premium",\n' +
  '          "mutuallyexclusivelist": [\n' +
  '            "streamz_premium"\n' +
  '          ],\n' +
  '          "requiredoption": null,\n' +
  '          "selected": true,\n' +
  '          "description": "play_more",\n' +
  '          "promos": [],\n' +
  '          "priceexclvat": 21.45,\n' +
  '          "originalprice": null,\n' +
  '          "originalpriceexclvat": null\n' +
  '        },\n' +
  '        {\n' +
  '          "price": 12.95,\n' +
  '          "specurl": "https://api.dev.telenet.test/omapi/public/product/TVPK0014",\n' +
  '          "omapiid": "TVPK0014",\n' +
  '          "mutuallyexclusive": "streamz_premium",\n' +
  '          "mutuallyexclusivelist": [\n' +
  '            "streamz_premium"\n' +
  '          ],\n' +
  '          "requiredoption": null,\n' +
  '          "selected": false,\n' +
  '          "description": "streamz_premium",\n' +
  '          "promos": [],\n' +
  '          "priceexclvat": 10.7,\n' +
  '          "originalprice": null,\n' +
  '          "originalpriceexclvat": null\n' +
  '        },\n' +
  '        {\n' +
  '          "price": 7.95,\n' +
  '          "specurl": "https://api.dev.telenet.test/omapi/public/product/TVPK0023",\n' +
  '          "omapiid": "TVPK0023",\n' +
  '          "mutuallyexclusive": "streamz_premium",\n' +
  '          "mutuallyexclusivelist": [\n' +
  '            "netflix-bundle",\n' +
  '            "streamz_premium"\n' +
  '          ],\n' +
  '          "requiredoption": null,\n' +
  '          "selected": false,\n' +
  '          "description": "streamz_basic",\n' +
  '          "promos": [],\n' +
  '          "priceexclvat": 6.57,\n' +
  '          "originalprice": null,\n' +
  '          "originalpriceexclvat": null\n' +
  '        },\n' +
  '        {\n' +
  '          "price": 20.95,\n' +
  '          "specurl": "https://api.dev.telenet.test/omapi/public/product/TVPK0018",\n' +
  '          "omapiid": "TVPK0018",\n' +
  '          "mutuallyexclusive": "streamz_premium",\n' +
  '          "mutuallyexclusivelist": [\n' +
  '            "streamz_premium"\n' +
  '          ],\n' +
  '          "requiredoption": null,\n' +
  '          "selected": false,\n' +
  '          "description": "streamz_premium_plus",\n' +
  '          "promos": [],\n' +
  '          "priceexclvat": 17.31,\n' +
  '          "originalprice": null,\n' +
  '          "originalpriceexclvat": null\n' +
  '        }\n' +
  '      ],\n' +
  '      "promos": [],\n' +
  '      "installtypes": [],\n' +
  '      "costs": [],\n' +
  '      "priceexclvat": 9.0,\n' +
  '      "originalprice": null,\n' +
  '      "originalpriceexclvat": null,\n' +
  '      "streamingservices": [\n' +
  '        {\n' +
  '          "price": 24.49,\n' +
  '          "specurl": "https://api.dev.telenet.test/omapi/public/product/STRM0008",\n' +
  '          "omapiid": "STRM0008",\n' +
  '          "mutuallyexclusive": "netflix",\n' +
  '          "mutuallyexclusivelist": [\n' +
  '            "netflix",\n' +
  '            "streamz_premium"\n' +
  '          ],\n' +
  '          "requiredoption": null,\n' +
  '          "selected": false,\n' +
  '          "description": "netflix_standard_streamz_premium",\n' +
  '          "promos": [],\n' +
  '          "options": [\n' +
  '            {\n' +
  '              "price": 5.0,\n' +
  '              "specurl": "https://api.dev.telenet.test/omapi/public/product/STRM0006",\n' +
  '              "omapiid": "STRM0006",\n' +
  '              "mutuallyexclusive": null,\n' +
  '              "mutuallyexclusivelist": null,\n' +
  '              "requiredoption": null,\n' +
  '              "selected": false,\n' +
  '              "description": "netflix_premium_addon",\n' +
  '              "promos": [],\n' +
  '              "priceexclvat": 4.13,\n' +
  '              "originalprice": null,\n' +
  '              "originalpriceexclvat": null\n' +
  '            }\n' +
  '          ],\n' +
  '          "priceexclvat": 20.24,\n' +
  '          "originalprice": null,\n' +
  '          "originalpriceexclvat": null\n' +
  '        },\n' +
  '        {\n' +
  '          "price": 10.99,\n' +
  '          "specurl": "https://api.dev.telenet.test/omapi/public/product/STRM0002",\n' +
  '          "omapiid": "STRM0002",\n' +
  '          "mutuallyexclusive": null,\n' +
  '          "mutuallyexclusivelist": null,\n' +
  '          "requiredoption": null,\n' +
  '          "selected": false,\n' +
  '          "description": "disney_plus",\n' +
  '          "promos": [],\n' +
  '          "options": [],\n' +
  '          "priceexclvat": 9.08,\n' +
  '          "originalprice": null,\n' +
  '          "originalpriceexclvat": null\n' +
  '        },\n' +
  '        {\n' +
  '          "price": 19.99,\n' +
  '          "specurl": "https://api.dev.telenet.test/omapi/public/product/STRM0007",\n' +
  '          "omapiid": "STRM0007",\n' +
  '          "mutuallyexclusive": "netflix",\n' +
  '          "mutuallyexclusivelist": [\n' +
  '            "netflix"\n' +
  '          ],\n' +
  '          "requiredoption": null,\n' +
  '          "selected": true,\n' +
  '          "description": "netflix_premium",\n' +
  '          "promos": [],\n' +
  '          "options": [],\n' +
  '          "priceexclvat": 16.52,\n' +
  '          "originalprice": null,\n' +
  '          "originalpriceexclvat": null\n' +
  '        },\n' +
  '        {\n' +
  '          "price": 14.99,\n' +
  '          "specurl": "https://api.dev.telenet.test/omapi/public/product/STRM0005",\n' +
  '          "omapiid": "STRM0005",\n' +
  '          "mutuallyexclusive": "netflix",\n' +
  '          "mutuallyexclusivelist": [\n' +
  '            "netflix"\n' +
  '          ],\n' +
  '          "requiredoption": null,\n' +
  '          "selected": false,\n' +
  '          "description": "netflix_standard",\n' +
  '          "promos": [],\n' +
  '          "options": [],\n' +
  '          "priceexclvat": 12.39,\n' +
  '          "originalprice": null,\n' +
  '          "originalpriceexclvat": null\n' +
  '        },\n' +
  '        {\n' +
  '          "price": 34.99,\n' +
  '          "specurl": "https://api.dev.telenet.test/omapi/public/product/STRM0010",\n' +
  '          "omapiid": "STRM0010",\n' +
  '          "mutuallyexclusive": "netflix",\n' +
  '          "mutuallyexclusivelist": [\n' +
  '            "netflix",\n' +
  '            "streamz_premium"\n' +
  '          ],\n' +
  '          "requiredoption": null,\n' +
  '          "selected": false,\n' +
  '          "description": "netflix_standard_playmore",\n' +
  '          "promos": [],\n' +
  '          "options": [\n' +
  '            {\n' +
  '              "price": 5.0,\n' +
  '              "specurl": "https://api.dev.telenet.test/omapi/public/product/STRM0006",\n' +
  '              "omapiid": "STRM0006",\n' +
  '              "mutuallyexclusive": null,\n' +
  '              "mutuallyexclusivelist": null,\n' +
  '              "requiredoption": null,\n' +
  '              "selected": false,\n' +
  '              "description": "netflix_premium_addon",\n' +
  '              "promos": [],\n' +
  '              "priceexclvat": 4.13,\n' +
  '              "originalprice": null,\n' +
  '              "originalpriceexclvat": null\n' +
  '            }\n' +
  '          ],\n' +
  '          "priceexclvat": 28.92,\n' +
  '          "originalprice": null,\n' +
  '          "originalpriceexclvat": null\n' +
  '        },\n' +
  '        {\n' +
  '          "price": 9.99,\n' +
  '          "specurl": "https://api.dev.telenet.test/omapi/public/product/STRM0004",\n' +
  '          "omapiid": "STRM0004",\n' +
  '          "mutuallyexclusive": "netflix",\n' +
  '          "mutuallyexclusivelist": [\n' +
  '            "netflix"\n' +
  '          ],\n' +
  '          "requiredoption": null,\n' +
  '          "selected": false,\n' +
  '          "description": "netflix_basic",\n' +
  '          "promos": [],\n' +
  '          "options": [],\n' +
  '          "priceexclvat": 8.26,\n' +
  '          "originalprice": null,\n' +
  '          "originalpriceexclvat": null\n' +
  '        },\n' +
  '        {\n' +
  '          "price": 30.99,\n' +
  '          "specurl": "https://api.dev.telenet.test/omapi/public/product/STRM0009",\n' +
  '          "omapiid": "STRM0009",\n' +
  '          "mutuallyexclusive": "netflix",\n' +
  '          "mutuallyexclusivelist": [\n' +
  '            "netflix",\n' +
  '            "streamz_premium"\n' +
  '          ],\n' +
  '          "requiredoption": null,\n' +
  '          "selected": false,\n' +
  '          "description": "netflix_standard_streamz_premium_plus",\n' +
  '          "promos": [],\n' +
  '          "options": [\n' +
  '            {\n' +
  '              "price": 5.0,\n' +
  '              "specurl": "https://api.dev.telenet.test/omapi/public/product/STRM0006",\n' +
  '              "omapiid": "STRM0006",\n' +
  '              "mutuallyexclusive": null,\n' +
  '              "mutuallyexclusivelist": null,\n' +
  '              "requiredoption": null,\n' +
  '              "selected": false,\n' +
  '              "description": "netflix_premium_addon",\n' +
  '              "promos": [],\n' +
  '              "priceexclvat": 4.13,\n' +
  '              "originalprice": null,\n' +
  '              "originalpriceexclvat": null\n' +
  '            }\n' +
  '          ],\n' +
  '          "priceexclvat": 25.61,\n' +
  '          "originalprice": null,\n' +
  '          "originalpriceexclvat": null\n' +
  '        }\n' +
  '      ],\n' +
  '      "optinproducts": []\n' +
  '    }\n' +
  '  ],\n' +
  '  "standaloneoptions": [],\n' +
  '  "ownedproducts": [],\n' +
  '  "setup": {\n' +
  '    "easyswitcheligible": false\n' +
  '  }\n' +
  '}';
