import { ContextHubModelInterface } from '@telenet/ng-lib-page';
import { Customer } from './customer.model';

export class CustomerStore extends Customer implements ContextHubModelInterface<CustomerStore> {
  readonly email?: string;
  readonly msisdn?: string[];

  constructor(customerObj?) {
    super();
    if (customerObj) {
      Object.assign(this, customerObj);
    }
  }

  enrich(customerObj): CustomerStore {
    return new CustomerStore(customerObj);
  }
}
