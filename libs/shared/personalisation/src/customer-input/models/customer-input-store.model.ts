import { ContextHubModelInterface } from '@telenet/ng-lib-page';

export class CustomerInputStore implements ContextHubModelInterface<CustomerInputStore> {
  public readonly isSuccess: boolean;

  constructor(customerInputStore?: CustomerInputStore) {
    this.isSuccess = true;
    if (customerInputStore) {
      Object.assign(this, customerInputStore);
    }
  }

  enrich(objStore: CustomerInputStore): CustomerInputStore {
    return new CustomerInputStore(objStore);
  }
}
