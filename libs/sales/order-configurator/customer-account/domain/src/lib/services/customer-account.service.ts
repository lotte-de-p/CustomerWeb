import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { UrlService } from '@telenet/ng-lib-page';
import {
  createCustomerAccount,
  CustomerAccount,
  CustomerAccountStatus,
} from '../interfaces/customer-account.interface';
import { rawNewCustomerAccountTestfactory } from '../interfaces/customer-account.testfactory';

@Injectable({
  providedIn: 'root',
})
export class CustomerAccountService {
  constructor(private readonly urlService: UrlService) {}

  public getCustomerAccount(): Observable<CustomerAccount> {
    const paramAccountStatus = this.urlService.getRequestParameterOrDefault('accountStatus', 'active');
    const accountStatus = paramAccountStatus === 'active' ? CustomerAccountStatus.Active : CustomerAccountStatus.New;
    return of(rawNewCustomerAccountTestfactory.build({ status: accountStatus })).pipe(
      map((rawCustomerAccount) => createCustomerAccount(rawCustomerAccount))
    );
  }
}
