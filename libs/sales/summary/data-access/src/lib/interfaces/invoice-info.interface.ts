export interface BillingAddress {
  street: string;
  houseNumber: string;
  subHouseNumber?: string;
  box?: string;
  postalCode: string;
  municipality: string;
  country: string;
}
