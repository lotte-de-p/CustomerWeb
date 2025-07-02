import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BillingAccount } from '../entities/billing-account';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { BILLING_ACCOUNTS_ENDPOINT, MESSAGE_GROUP } from '../invoice-overview.constants';

@Injectable({ providedIn: 'root' })
export class BillingAccountService {
  private readonly ocapiService = inject(OcapiService);

  getBillingAccounts(): Observable<BillingAccount[]> {
    return this.ocapiService.doGet(
      new OcapiCallConfig<BillingAccount[], BillingAccount[]>(MESSAGE_GROUP, BILLING_ACCOUNTS_ENDPOINT)
    );
  }
}
