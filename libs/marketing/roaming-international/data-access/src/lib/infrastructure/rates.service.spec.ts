import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RatesService } from './rates.service';
import { when } from 'jest-when';
import { take } from 'rxjs';
import { ConfigConstants, ConfigService } from '@telenet/ng-lib-config';
import { PathCategorisationService } from '@telenet/ng-lib-page';

const MockData = require('../entities/rates.data.mock');

describe(RatesService, () => {
  let ratesService: RatesService;
  let httpTestingController: HttpTestingController;
  let mockConfigService: ConfigService;
  let mockPathCategorisationService: PathCategorisationService;

  const url = 'https://api.dvp.telenet.be/omapi-query/public/rir/v1';
  const customerType = 'Residential';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: 'Window',
          useValue: window,
        },
        RatesService,
      ],
    }).compileComponents();
    ratesService = TestBed.inject(RatesService);
    httpTestingController = TestBed.inject(HttpTestingController);
    mockConfigService = TestBed.inject(ConfigService);
    mockPathCategorisationService = TestBed.inject(PathCategorisationService);

    mockConfigService.getConfig = jest.fn();
    when(mockConfigService.getConfig)
      .calledWith(ConfigConstants.OMAPI_QUERY_URL)
      .mockReturnValue('https://api.dvp.telenet.be/omapi-query/public');

    mockPathCategorisationService.getCustomerBrand = jest.fn();
    when(mockPathCategorisationService.getCustomerBrand).mockReturnValue('Telenet');
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should get rates when API call is successful with country', (done) => {
    ratesService
      .getRoamingRates(MockData.switzerland, customerType)
      .pipe(take(1))
      .subscribe((res) => {
        expect(res).toEqual(MockData.rawData);
        done();
      });

    const req = httpTestingController.expectOne(
      `${url}/rates/roaming?brand=Telenet&category=Residential&toZone=Belgium&fromZone=Europe_Special`
    );
    expect(req.request.method).toBe('GET');
    req.flush({ rates: MockData.rawData });
  });

  it('should get rates within country when API call is successful with country', (done) => {
    ratesService
      .getRoamingRatesForSameCountry(MockData.switzerland, customerType)
      .pipe(take(1))
      .subscribe((res) => {
        expect(res).toEqual(MockData.rawData);
        done();
      });

    const req = httpTestingController.expectOne(
      `${url}/rates/roaming?brand=Telenet&category=Residential&toZone=Europe_Special&fromZone=Europe_Special`
    );
    expect(req.request.method).toBe('GET');
    req.flush({ rates: MockData.rawData });
  });

  it('should get rates when API call is successful with two country params', (done) => {
    ratesService
      .getRoamingRates(MockData.switzerland, customerType, MockData.anotherDestination)
      .pipe(take(1))
      .subscribe((res) => {
        expect(res).toEqual(MockData.rawData);
        done();
      });

    const req = httpTestingController.expectOne(
      `${url}/rates/roaming?brand=Telenet&category=Residential&toZone=ZoneEU&fromZone=Europe_Special`
    );
    expect(req.request.method).toBe('GET');
    req.flush({ rates: MockData.rawData });
  });

  it('when country switzerland then roaming rates to belgium has 3 rates', () => {
    const overview = ratesService.convertToOverview(MockData.switzerland, true, MockData.rawData);
    expect(overview.country).toBe(MockData.switzerland);
    expect(overview.toBelgium).toBe(true);
    expect(overview.rates.length).toBe(3);
    expect(overview).toStrictEqual(MockData.roamingRatesToBelgium);
  });
  it('when country switzerland then roaming rates inside switzerland has 4 rate', () => {
    const overview = ratesService.convertToOverview(MockData.switzerland, false, MockData.rawData);
    expect(overview.country).toBe(MockData.switzerland);
    expect(overview.toBelgium).toBe(false);
    expect(overview.rates.length).toBe(4);
  });
  it('when country switzerland then roaming rates to another country has 3 rate', () => {
    const overview = ratesService.convertToOverview(MockData.switzerland, false, MockData.rawData, true);
    expect(overview.country).toBe(MockData.switzerland);
    expect(overview.toBelgium).toBe(false);
    expect(overview.rates.length).toBe(3);
  });
});
