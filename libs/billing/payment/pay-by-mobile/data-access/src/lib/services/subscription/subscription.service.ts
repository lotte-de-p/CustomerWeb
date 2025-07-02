import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { PAY_BY_MOBILE_SERVICE } from '../pay-by-mobile-service.constants';
import { Subscription } from '../../entities/subscription/subscription.model';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  private static readonly MESSAGE_GROUP = 'pay-by-mobile';

  constructor(private readonly ocapiService: OcapiService) {}

  getSubscriptions(msisdn: string): Observable<Subscription[]> {
    const endpoint = PAY_BY_MOBILE_SERVICE + 'subscriptions/' + msisdn;
    return this.ocapiService.doGet(
      new OcapiCallConfig<Subscription[], Subscription[]>(SubscriptionService.MESSAGE_GROUP, endpoint)
    );
  }

  cancelSubscription(msisdn: string, companyId: number, serviceName: string): Observable<void> {
    const endpoint = PAY_BY_MOBILE_SERVICE + 'subscriptions/' + msisdn + '/cancelService';
    return this.ocapiService.doPost(
      new OcapiCallConfig(SubscriptionService.MESSAGE_GROUP, endpoint, undefined, {
        companyId: companyId,
        serviceName: serviceName,
      })
    );
  }
}
