import { Injectable } from '@angular/core';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { Observable } from 'rxjs';
import {
  InternetLine,
  MobileLine,
  MyBaseDashboard,
  MyBaseDashboardDtv,
  MyBaseDashboardInternet,
  MyBaseDashboardMobile,
  ServiceMoments,
} from '../entities/mybase-dashboard.interface';

@Injectable({
  providedIn: 'root',
})
export class MyBaseDashboardService {
  mock_reply = {} as MyBaseDashboardInternet;
  private static readonly MESSAGE_GROUP = 'mybase-dashboard';

  constructor(private readonly ocapiService: OcapiService) {}

  loadMyBaseDashboard(): Observable<MyBaseDashboard> {
    const endpoint = '/public/api/mybase-dashboard-service/v1/dashboard';
    return this.ocapiService.doGet(
      new OcapiCallConfig<MyBaseDashboard, MyBaseDashboard>(MyBaseDashboardService.MESSAGE_GROUP, endpoint)
    );
  }

  loadMyBaseDashboardMobile(msisdn: string | undefined): Observable<MyBaseDashboardMobile> {
    const endpoint = `/public/api/mybase-dashboard-service/v1/dashboard/mobile/${msisdn}`;
    return this.ocapiService.doGet(
      new OcapiCallConfig<MyBaseDashboardMobile, MyBaseDashboardMobile>(MyBaseDashboardService.MESSAGE_GROUP, endpoint)
    );
  }

  loadMobileLines(): Observable<MobileLine[]> {
    const endpoint = `/public/api/mybase-dashboard-service/v1/dashboard/mobile/lines`;

    return this.ocapiService.doGet(
      new OcapiCallConfig<MobileLine[], MobileLine[]>(MyBaseDashboardService.MESSAGE_GROUP, endpoint)
    );
  }

  loadInternetLines(): Observable<InternetLine[]> {
    const endpoint = `/public/api/mybase-dashboard-service/v1/dashboard/internet/addresses`;
    return this.ocapiService.doGet(
      new OcapiCallConfig<InternetLine[], InternetLine[]>(MyBaseDashboardService.MESSAGE_GROUP, endpoint)
    );
  }

  loadMyBaseDashboardInternet(productIdentifier: string | undefined): Observable<MyBaseDashboardInternet> {
    const endpoint = `/public/api/mybase-dashboard-service/v1/dashboard/internet/${productIdentifier}`;
    return this.ocapiService.doGet(
      new OcapiCallConfig<MyBaseDashboardInternet, MyBaseDashboardInternet>(
        MyBaseDashboardService.MESSAGE_GROUP,
        endpoint
      )
    );
  }

  loadDtvLines(): Observable<MyBaseDashboardDtv> {
    const endpoint = `/public/api/mybase-dashboard-service/v1/dashboard/tv`;
    return this.ocapiService.doGet(
      new OcapiCallConfig<MyBaseDashboardDtv, MyBaseDashboardDtv>(MyBaseDashboardService.MESSAGE_GROUP, endpoint)
    );
  }

  loadServiceMoments(): Observable<ServiceMoments[]> {
    const endpoint = `/public/api/mybase-dashboard-service/v1/dashboard/service-moments?limit=2`;
    return this.ocapiService.doGet(
      new OcapiCallConfig<ServiceMoments[], ServiceMoments[]>(MyBaseDashboardService.MESSAGE_GROUP, endpoint)
    );
  }
}
