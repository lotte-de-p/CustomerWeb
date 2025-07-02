import { Factory } from 'fishery';
import { CustomerAccount, CustomerAccountStatus } from './customer-account.interface';

export const rawNewCustomerAccountTestfactory = Factory.define<Partial<CustomerAccount>>(() => {
  return { status: CustomerAccountStatus.Active };
});

export const customerAccountTestfactory = Factory.define<CustomerAccount>(() => {
  return {
    status: CustomerAccountStatus.New,
    isNewCustomer(): boolean {
      return this.status === CustomerAccountStatus.New;
    },
  };
});
