import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { DataUsagePauseMapper } from '../mappers/data-usage-pause.mapper';
import { DataPauseUsageModel } from '../models/data-pause-usage.model';
import { MobileConstants } from '../constants/mobile.constant';
import { MobileAutoPauseInterface } from '../interfaces/mobile-auto-pause.interface';
import { MobileAutoPauseMapper } from '../mappers/mobile-auto-pause.mapper';
import { Usage } from '../models/usage.model';
import { map } from 'rxjs/operators';
import isEmpty from 'lodash-es/isEmpty';
import { UsageMapper } from '../mappers/usage.mapper';
import { MobileSubscriptionModel } from '../models/mobile-subscription.model';
import { MobileSubscriptionsMapper } from '../mappers/mobile-subscription.mapper';

@Injectable({
  providedIn: 'root',
})
export class MobileService {
  private mobileUsageCache: Usage;

  constructor(
    private readonly ocapiService: OcapiService,
    private readonly usageMapper: UsageMapper,
    private readonly mobileAutoPauseMapper: MobileAutoPauseMapper,
    private readonly dataUsagePauseMapper: DataUsagePauseMapper,
    private readonly mobileSubscriptionsMapper: MobileSubscriptionsMapper
  ) {}

  getMobileUsage(
    messageGroup: string,
    msisdn?: string,
    force?: boolean,
    parms?: Map<unknown, unknown>
  ): Observable<Usage> {
    if (!force && this.mobileUsageCache) {
      return of(this.mobileUsageCache);
    }
    const msisdnVal = `/${msisdn}`;

    const endpoint = this.getServiceURI(
      MobileConstants.API_VERSION_V3,
      MobileConstants.MOBILE_SUBSCRIPTIONS_PREFIX,
      msisdnVal,
      MobileConstants.USAGE_ENDPOINT,
      this.getServiceParams(parms)
    );

    return this.ocapiService.doGet(new OcapiCallConfig(messageGroup, endpoint, this.usageMapper)).pipe(
      map((response: Usage) => {
        if (!isEmpty(response)) {
          this.mobileUsageCache = response;
        }
        return response;
      })
    );
  }

  updateDataUsagePauseInfo(
    messageGroup: string,
    resquest: DataPauseUsageModel,
    parms?: Map<unknown, unknown>
  ): Observable<DataPauseUsageModel> {
    const endpoint = this.getServiceURI(
      MobileConstants.API_VERSION_V1,
      MobileConstants.MOBILE_SUBSCRIPTION_PREFIX,
      '',
      MobileConstants.DATA_PAUSE_ENDPOINT,
      this.getServiceParams(parms)
    );
    return this.ocapiService.doPost(new OcapiCallConfig(messageGroup, endpoint, this.dataUsagePauseMapper, resquest));
  }

  getAutoPause(messageGroup: string, msisdnvalue: string): Observable<MobileAutoPauseInterface> {
    const msisdnVal = `?msisdn=${msisdnvalue}`;
    const endPoint = this.getServiceURI(
      MobileConstants.API_VERSION_V1,
      MobileConstants.MOBILE_SUBSCRIPTION_PREFIX,
      '',
      MobileConstants.AUTO_PAUSE,
      msisdnVal
    );
    return this.ocapiService.doGet(new OcapiCallConfig(messageGroup, endPoint, this.mobileAutoPauseMapper));
  }

  getMobileLines(messageGroup: string, status?: string): Observable<MobileSubscriptionModel[]> {
    const parameters = status ? `?status=${status}` : MobileConstants.EMPTY;
    const endpoint = this.getServiceURI(
      MobileConstants.API_VERSION_V2,
      MobileConstants.EMPTY,
      MobileConstants.EMPTY,
      MobileConstants.SUBSCRIPTIONS,
      parameters
    );
    return this.ocapiService.doGet(new OcapiCallConfig(messageGroup, endpoint, this.mobileSubscriptionsMapper));
  }

  getDataUsagePauseInfo(messageGroup: string, parms?: Map<unknown, unknown>): Observable<DataPauseUsageModel> {
    const endpoint = this.getServiceURI(
      MobileConstants.API_VERSION_V1,
      MobileConstants.MOBILE_SUBSCRIPTION_PREFIX,
      '',
      MobileConstants.DATA_PAUSE_ENDPOINT,
      this.getServiceParams(parms)
    );
    return this.ocapiService.doGet(new OcapiCallConfig(messageGroup, endpoint, this.dataUsagePauseMapper));
  }

  private getServiceURI(version: string, context: string, suffix: string, endpoint: string, parameters: string) {
    return MobileConstants.MOBILE_SERVICE_PREFIX.concat(version)
      .concat(context)
      .concat(suffix)
      .concat(endpoint)
      .concat(parameters);
  }

  private getServiceParams(paramsMap: Map<unknown, unknown>): string {
    let params = MobileConstants.EMPTY;
    if (paramsMap) {
      params += '?';
      const lastValue = Array.from(paramsMap.values()).pop();
      for (const key of paramsMap.keys()) {
        params += key;
        params += '=';
        params += paramsMap.get(key);
        if (paramsMap.get(key) !== lastValue) {
          params += '&';
        }
      }
    }
    return params;
  }
}
