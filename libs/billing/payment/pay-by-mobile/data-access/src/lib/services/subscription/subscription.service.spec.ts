import { TestBed } from '@angular/core/testing';

import { SubscriptionService } from './subscription.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { Subscription } from '../../entities/subscription/subscription.model';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { Builder } from '@telenet/ng-lib-shared';

describe('PayByMobileService', () => {
  let service: SubscriptionService;
  let ocapiService: OcapiService;

  const subscription = Builder<Subscription>().build();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
  });

  beforeEach(() => {
    ocapiService = TestBed.inject(OcapiService);
    service = TestBed.inject(SubscriptionService);
    jest.spyOn(ocapiService, 'doGet').mockReturnValue(of([subscription]));
    jest.spyOn(ocapiService, 'doPost').mockReturnValue(of());
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should getSubscriptions', () => {
    const ocapiCallConfig = new OcapiCallConfig(
      'pay-by-mobile',
      '/public/api/pay-by-mobile-service/v1/pay-by-mobile/subscriptions/msisdn'
    );

    const actual$ = service.getSubscriptions('msisdn');
    expect(ocapiService.doGet).toHaveBeenCalledWith(ocapiCallConfig);
    actual$.subscribe((response) => expect(response).toBe([subscription]));
  });

  it('should cancelSubscription', () => {
    const ocapiCallConfig = new OcapiCallConfig(
      'pay-by-mobile',
      '/public/api/pay-by-mobile-service/v1/pay-by-mobile/subscriptions/msisdn/cancelService',
      undefined,
      {
        companyId: 123456,
        serviceName: 'serviceName',
      }
    );

    service.cancelSubscription('msisdn', 123456, 'serviceName');
    expect(ocapiService.doPost).toHaveBeenCalledWith(ocapiCallConfig);
  });
});
