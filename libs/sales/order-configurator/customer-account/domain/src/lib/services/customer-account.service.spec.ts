import { TestBed } from '@angular/core/testing';
import { CustomerAccountService } from './customer-account.service';
import { Injectable } from '@angular/core';
import { UrlService } from '@telenet/ng-lib-page';
import { CustomerAccount } from '../interfaces/customer-account.interface';

@Injectable({
  providedIn: 'root',
})
export class UrlServiceMock {
  getRequestParameterOrDefault(): string {
    return 'active';
  }
}
describe('CustomerAccountService', () => {
  let service: CustomerAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: UrlService,
          useClass: UrlServiceMock,
        },
      ],
    });
    service = TestBed.inject(CustomerAccountService);
  });

  it('should return a valid customer account', (done) => {
    service.getCustomerAccount().subscribe((account: CustomerAccount) => {
      expect(account).toBeTruthy();
      expect(account.status).toBeDefined();
      expect(account.isNewCustomer()).toBeFalsy();
      done();
    });
  });
});
