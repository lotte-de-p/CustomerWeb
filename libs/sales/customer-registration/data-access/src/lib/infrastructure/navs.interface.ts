export interface NavsInterface {
  language: string;
  firstName: string;
  lastName: string;
  birthday?: string;
  address: NavsAddressInterface | undefined;
  productDetails?: ProductTypeInterface[];
  isRevalidationAttempt?: boolean;
}

export interface ProductTypeInterface {
  planType: string | undefined;
  productType: string | undefined;
}
export interface NavsAddressInterface {
  id?: string | undefined;
  houseNumber?: string | undefined;
  boxNumber?: string | undefined;
  subHouseNumber?: string | undefined;
  street?: string | undefined;
  postalCode?: string | undefined;
  municipality?: string | undefined;
  country?: string;
}

export interface NavsResponseInterface {
  navsStatus: string;
  isRevalidationRequired: boolean;
}
