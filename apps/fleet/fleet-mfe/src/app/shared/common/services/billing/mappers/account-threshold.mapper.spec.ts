import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { AccountThresholdMapper } from './account-threshold.mapper';
import { RawAccountThresholdInterface, RawThresholdInterface } from '../interfaces/raw-account-threshold.interface';
import { expect } from '@jest/globals';

describe('AccountThresholdMapper', () => {
  let accountThresholdMapper: AccountThresholdMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });

    accountThresholdMapper = TestBed.inject(AccountThresholdMapper);
  });

  describe('toModel', () => {
    it('should correctly map the response', () => {
      const mockRawAccountThreshold = {
        overConsumptionThreshold: {
          value: 1234,
          isEnabled: true,
        } as RawThresholdInterface,
      } as RawAccountThresholdInterface;
      const mappedBillingAccounts = accountThresholdMapper.toModel(mockRawAccountThreshold);

      expect(mappedBillingAccounts.overConsumptionThreshold.value).toBe(1234);
      expect(mappedBillingAccounts.overConsumptionThreshold.isEnabled).toBe(true);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
