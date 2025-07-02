export enum CustomerAccountStatus {
  Active = 'active',
  New = 'new',
}

export interface CustomerAccount {
  status: CustomerAccountStatus | undefined;

  isNewCustomer(): boolean;
}

export function createCustomerAccount(rawCustomerAccount: Partial<CustomerAccount>): CustomerAccount {
  return {
    status: rawCustomerAccount.status,
    isNewCustomer() {
      if (this.status === undefined) {
        throw new Error('CustomerAccount status is undefined');
      }
      return this.status === CustomerAccountStatus.New;
    },
  };
}
