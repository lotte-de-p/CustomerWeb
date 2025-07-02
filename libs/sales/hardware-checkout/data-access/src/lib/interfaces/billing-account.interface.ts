export interface BillingAccount {
  id: string;
  defaultBillingAccount: {
    name: string;
    id: string;
  };
  billingAddress: {
    formattedAddress: string;
    name: string;
    id: string;
  };
}
