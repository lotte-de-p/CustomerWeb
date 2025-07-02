import { Injectable } from '@angular/core';
import { OcapiService, OcapiCallConfig } from '@telenet/ng-lib-ocapi';
import { BillingAccountMapper } from './mappers/billing-account.mapper';
import { Observable } from 'rxjs';
import { FleetBillingConstants } from './constants/fleet-billing.constant';
import { map } from 'rxjs/operators';
import { BillingAccountInterface } from './interfaces/billing-accounts.interface';
import { AccountThresholdInterface } from './interfaces/account-threshold.interface';
import { PostRequestSuccessInterface } from '../../interfaces/post-request-success.interface';
import { PostRequestSuccessMapper } from '../../mappers/post-request-success-mapper';
import { AccountThresholdMapper } from './mappers/account-threshold.mapper';

@Injectable({
  providedIn: 'root',
})
export class BillingService {
  accounts?: BillingAccountInterface[];

  constructor(
    private readonly ocapiService: OcapiService,
    private readonly billingAccountMapper: BillingAccountMapper,
    private readonly postRequestSuccessMapper: PostRequestSuccessMapper,
    private readonly accountThresholdMapper: AccountThresholdMapper
  ) {}

  getAccounts(messageGroupName: string): Observable<BillingAccountInterface[]> {
    const endPoint = this.getServiceURI(
      FleetBillingConstants.API_VERSION_V2,
      FleetBillingConstants.CONTEXT_ACCOUNTS,
      '',
      '',
      ''
    );
    return this.ocapiService
      .doGet(new OcapiCallConfig(messageGroupName, endPoint, this.billingAccountMapper, null))
      .pipe(
        map((response: BillingAccountInterface[]) => {
          this.accounts = response;
          return response;
        })
      );
  }

  updateAccountThreshold(
    messageGroupName: string,
    accountNumber: string,
    payload: AccountThresholdInterface
  ): Observable<PostRequestSuccessInterface> {
    const endPoint = this.getServiceURI(
      FleetBillingConstants.API_VERSION_V1,
      FleetBillingConstants.CONTEXT_ACCOUNTS,
      `/${accountNumber}`,
      FleetBillingConstants.EMPTY,
      FleetBillingConstants.EMPTY
    );
    return this.ocapiService.doPut(
      new OcapiCallConfig(messageGroupName, endPoint, this.postRequestSuccessMapper, payload)
    );
  }

  getAccountThreshold(
    messageGroupName: string,
    accountNumber: string | undefined
  ): Observable<AccountThresholdInterface> {
    const endPoint = this.getServiceURI(
      FleetBillingConstants.API_VERSION_V2,
      FleetBillingConstants.CONTEXT_ACCOUNTS,
      `/${accountNumber}`,
      FleetBillingConstants.EMPTY,
      FleetBillingConstants.EMPTY
    );
    return this.ocapiService.doGet(new OcapiCallConfig(messageGroupName, endPoint, this.accountThresholdMapper));
  }

  private getServiceURI(version: string, context: string, suffix: string, endpoint: string, queryParams?: string) {
    const uri = FleetBillingConstants.FLEET_BILLING_SERVICE_PREFIX.concat(version)
      .concat(context)
      .concat(suffix)
      .concat(endpoint);
    return queryParams ? uri.concat(queryParams) : uri;
  }
}
