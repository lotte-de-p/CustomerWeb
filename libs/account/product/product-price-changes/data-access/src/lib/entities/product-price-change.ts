export interface Login {
  customerNumber: string;
  lastName: string;
}

export enum BillingFrequency {
  MONTHLY = 'MONTHLY',
  QUARTERLY = 'QUARTERLY',
  HALF_YEARLY = 'HALF_YEARLY',
  YEARLY = 'YEARLY',
}

export interface ProductPriceChangesByAccount {
  accountNumber: string;
  productPriceChanges: ProductPriceChange[];
}

export interface ProductPriceChange {
  address: Address;
  billingFrequency: BillingFrequency;
  priceChange: number;
  segment: string;
  products?: Product[];
  vatInclusive: boolean;
  priceAccordingToConsumption: boolean;
}

export interface Product {
  description: ProductDescription;
  oldPrice: number;
  newPrice: number;
}

export interface ProductDescription {
  nl: string;
  fr: string;
}

export interface Address {
  addressId: string;
  street: string;
  postalCode: string;
  city: string;
  country: string;
  houseNumber: string;
  subHouseNumber?: string;
  box?: string;
}
