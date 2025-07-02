import { Injectable } from '@angular/core';
import { OcapiService, OcapiCallConfig } from '@telenet/ng-lib-ocapi';
import { Observable } from 'rxjs';
import { BillingConstants } from '../constants/billing.constant';
import { map } from 'rxjs/operators';
import { BillingAccountInterface } from '../interfaces/billing/billing-accounts.interface';
import { BillingAccountMapper } from '../mappers/billing-account.mapper';

@Injectable({
  providedIn: 'root',
})
export class BillingService {
  accounts: BillingAccountInterface[];

  constructor(
    private readonly ocapiService: OcapiService,
    private readonly billingAccountMapper: BillingAccountMapper
  ) {}

  getAccounts(messageGroupName: string): Observable<BillingAccountInterface[]> {
    const endPoint = this.getServiceURI(BillingConstants.API_VERSION_V2, BillingConstants.CONTEXT_ACCOUNTS, '', '', '');
    return this.ocapiService
      .doGet(new OcapiCallConfig(messageGroupName, endPoint, this.billingAccountMapper, null))
      .pipe(
        map((response: BillingAccountInterface[]) => {
          this.accounts = response;
          return response;
        })
      );
  }

  private getServiceURI(version: string, context: string, suffix: string, endpoint: string, queryParams?: string) {
    const uri = BillingConstants.BILLING_SERVICE_PREFIX.concat(version).concat(context).concat(suffix).concat(endpoint);
    return queryParams ? uri.concat(queryParams) : uri;
  }
}
