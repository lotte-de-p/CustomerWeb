import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { UsageLimitsService } from './usage-limits.service';
import { expect, jest } from '@jest/globals';
import { UpdateUsageLimitsRequest } from '../../entities/usage-limits/update-usage-limits-request.model';
import { UsageLimits } from '../../entities/usage-limits/usage-limits.model';

describe('UpdateUsageLimitsService', () => {
  let service: UsageLimitsService;
  let ocapiService: OcapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OcapiService, { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    ocapiService = TestBed.inject(OcapiService);
    service = TestBed.inject(UsageLimitsService);
  });

  it('should update the usage limits for msisdn', () => {
    const usageLimitsRequest = {
      outOfBundleLimit: {
        enabled: true,
        value: 0,
      },
      premiumServiceLimit: {
        value: 0,
      },
    } as UpdateUsageLimitsRequest;
    const usageLimitResponse = {
      outOfBundle: {
        currentUsage: 1.53,
        limit: {
          enabled: true,
          value: 50,
        },
      },
      premiumService: {
        currentUsage: 1.53,
        limit: {
          enabled: true,
          value: 50,
        },
      },
    } as UsageLimits;
    jest.spyOn(ocapiService, 'doPut').mockReturnValue(of(usageLimitResponse));
    const ocapiCallConfig = new OcapiCallConfig(
      'mobile-usage-limits',
      '/public/api/mobile-usage-limits-service/v1/mobile-usage-limits/0467713546',
      undefined,
      usageLimitsRequest
    );
    const actual$ = service.updateUsageLimits(usageLimitsRequest, '0467713546');
    expect(ocapiService.doPut).toHaveBeenCalledWith(ocapiCallConfig);
    actual$.subscribe((res) => {
      expect(res.outOfBundle).toBe({ currentUsage: 1.53, limit: { enabled: true, value: 50 } });
    });
  });
});
