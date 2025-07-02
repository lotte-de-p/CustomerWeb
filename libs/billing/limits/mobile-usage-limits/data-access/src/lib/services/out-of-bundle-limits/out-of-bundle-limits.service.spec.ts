import { OutOfBundleLimitsService } from './out-of-bundle-limits.service';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('OutOfBundleLimitsService', () => {
  let service: OutOfBundleLimitsService;
  let ocapiService: OcapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OcapiService, { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    ocapiService = TestBed.inject(OcapiService);
    service = TestBed.inject(OutOfBundleLimitsService);
  });

  it('should get the out of bundle limits for msisdn', () => {
    jest.spyOn(ocapiService, 'doGet').mockReturnValue(of({ limits: ['10', '20', '50', '100', 'NO LIMIT'] }));
    const ocapiCallConfig = new OcapiCallConfig(
      'mobile-usage-limits',
      '/public/api/mobile-usage-limits-service/v1/mobile-usage-limits/outofbundle/limits/0467713546'
    );
    const actual$ = service.getOutOfBundleLimits('0467713546');
    expect(ocapiService.doGet).toHaveBeenCalledWith(ocapiCallConfig);
    actual$.subscribe((res) => expect(res).toBe({ limits: ['10', '20', '50', '100', 'NO LIMIT'] }));
  });
});
