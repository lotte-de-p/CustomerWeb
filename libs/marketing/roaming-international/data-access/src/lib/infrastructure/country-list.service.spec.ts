import { TestBed } from '@angular/core/testing';
import { CountryListService } from './country-list.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LanguageEnum, LanguageService, PathCategorisationService } from '@telenet/ng-lib-page';
import { ConfigService, ConfigConstants } from '@telenet/ng-lib-config';
import { when } from 'jest-when';
import { take } from 'rxjs';

const CountryListJson = require('../entities/data.mock');

describe(CountryListService, () => {
  let service: CountryListService;
  let httpTestingController: HttpTestingController;
  let mockPathCategorisationService: PathCategorisationService;
  let mockConfigService: ConfigService;
  let mockLanguageService: LanguageService;

  const url = 'https://api.dvp.telenet.be/omapi-query/public/rir/v1';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: 'Window',
          useValue: window,
        },
        CountryListService,
        PathCategorisationService,
        ConfigService,
        LanguageService,
      ],
    });
    service = TestBed.inject(CountryListService);
    httpTestingController = TestBed.inject(HttpTestingController);
    mockConfigService = TestBed.inject(ConfigService);
    mockLanguageService = TestBed.inject(LanguageService);
    mockPathCategorisationService = TestBed.inject(PathCategorisationService);

    mockConfigService.getConfig = jest.fn();
    when(mockConfigService.getConfig)
      .calledWith(ConfigConstants.OMAPI_QUERY_URL)
      .mockReturnValue('https://api.dvp.telenet.be/omapi-query/public');

    mockLanguageService.getLanguage = jest.fn();
    when(mockLanguageService.getLanguage).mockReturnValue(LanguageEnum.NL);

    mockPathCategorisationService.getCustomerBrand = jest.fn();
    when(mockPathCategorisationService.getCustomerBrand).mockReturnValue('Telenet');
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should load countries when API call is successful', (done) => {
    service
      .load('', 'Residential')
      .pipe(take(1))
      .subscribe((res) => {
        expect(res).toEqual(CountryListJson.Data.data.countries);
        expect(res[0].country).toEqual('Chili');
        done();
      });

    const req = httpTestingController.expectOne(`${url}/country?key=&language=nl&brand=Telenet&category=Residential`);
    expect(req.request.method).toBe('GET');
    req.flush(CountryListJson.Data.data);
  });
});
