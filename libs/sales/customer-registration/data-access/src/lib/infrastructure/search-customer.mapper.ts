import { MapperInterface } from '@telenet/ng-lib-shared';
import { CustomerResponseInterface } from './searchCustomer.interface';

export class SearchCustomerMapper implements MapperInterface<unknown, CustomerResponseInterface> {
  toModel(data: unknown, httpStatus?: number): CustomerResponseInterface {
    if (httpStatus && httpStatus > 400) {
      throw new Error();
    }
    return data as CustomerResponseInterface;
  }
}
