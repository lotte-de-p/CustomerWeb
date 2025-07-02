import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NormalizationService } from '@telenet/ng-lib-page';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { OmapiPremium } from '../models/omapi-premium.model';
import { OmapiPremiumMapper } from './omapi-premium.mapper';
import { RawOmapiPremiumInterface } from '../interfaces/raw-omapi-premium.interface';

const mockRawOmapi = require('../data/omapi-premium-response.json');

const FIRST_OF_SEPTEMBER = '01/09/2006';
describe('OmapiPremiumMapper', () => {
  let omapiPremiumMapper: OmapiPremiumMapper, omapiPremium: OmapiPremium;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NormalizationService, OmapiPremiumMapper, { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });

    omapiPremiumMapper = TestBed.inject(OmapiPremiumMapper);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Types or properties are incompatible.
    omapiPremium = omapiPremiumMapper.toModel(mockRawOmapi);
  });

  describe('toModel', () => {
    it('should map omapi premium', () => {
      expect(omapiPremium.premiumSerivceId).toBe('1700');
      expect(omapiPremium.details?.[0].serviceType).toBe('VOICE');
      expect(omapiPremium.details?.[0].serviceStatus).toBe('ACTIVE');
      expect(omapiPremium.details?.[0].serviceDescription).toBe('Vlaamse Info lijn');
      expect(omapiPremium.details?.[0].serviceConfirmedDate).toBe(FIRST_OF_SEPTEMBER);
      expect(omapiPremium.details?.[0].serviceEndDate).toBeUndefined();
      expect(omapiPremium.details?.[0].premium).toBe('Tax included');
      expect(omapiPremium.details?.[0].fixOrMobile).toBe('F');
      expect(omapiPremium.details?.[0].priceStartDate).toBe(FIRST_OF_SEPTEMBER);
      expect(omapiPremium.details?.[0].priceEndDate).toBeUndefined();
      expect(omapiPremium.details?.[0].callPerMinute).toBe('0.0000');
      expect(omapiPremium.details?.[0].callPerSecond).toBe('0.0000');
      expect(omapiPremium.details?.[0].contentProviderStartDate).toBe(FIRST_OF_SEPTEMBER);
      expect(omapiPremium.details?.[0].contentProviderEndDate).toBeUndefined();
      expect(omapiPremium.details?.[0].contentProviderName).toBe('Vlaamse Info Lijn');
      expect(omapiPremium.details?.[0].contentProviderStreet).toBe('Boudewijnlaan 30 ');
      expect(omapiPremium.details?.[0].contentProviderPostalCode).toBe('1000');
      expect(omapiPremium.details?.[0].contentProviderCity).toBe('Brussels');
      expect(omapiPremium.details?.[0].contentProviderCountry).toBe('BEL');
      expect(omapiPremium.details?.[0].customerCareTelephoneOrEmail).toBe('02 5535523 - Base.support@kpngro');
      expect(omapiPremium.details?.[0].customerCareUrl).toBe('http://www.vlaanderen.be/infolijn');
    });

    it('should map premiumServiceId with empty string', () => {
      const modifiedMockOmapi = JSON.parse(JSON.stringify(mockRawOmapi)) as RawOmapiPremiumInterface;
      modifiedMockOmapi.serviceDetails.premiumSerivceId = undefined;

      const mappedOmapiPremium = omapiPremiumMapper.toModel(modifiedMockOmapi);

      expect(mappedOmapiPremium.premiumSerivceId).toBe('');
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
