import { Injectable } from '@angular/core';
import { CustomerAccountService } from '../services/customer-account.service';
import { Observable } from 'rxjs';
import { CustomerAccount } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class CustomerAccountFacade {
  constructor(private readonly customerAccountService: CustomerAccountService) {}

  getCustomerAccount(): Observable<CustomerAccount> {
    return this.customerAccountService.getCustomerAccount();
  }
}
