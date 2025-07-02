import { ContextHubModelInterface, CustomerCategoryEnum } from '@telenet/ng-lib-page';

export class Customer {
  readonly isSuccess = true;
  category: CustomerCategoryEnum;
}

export class CustomerStore extends Customer implements ContextHubModelInterface<CustomerStore> {
  constructor(customerObj?: CustomerStore) {
    super();
    if (customerObj) {
      Object.assign(this, customerObj);
    }
  }

  enrich(customerObj: CustomerStore): CustomerStore {
    return new CustomerStore(customerObj);
  }
}
