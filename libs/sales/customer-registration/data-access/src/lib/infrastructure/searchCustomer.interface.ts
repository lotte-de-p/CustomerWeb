export interface SearchCustomerInterface {
  customerCategory: string;
  navsScore?: string;
  encryptedData?: string;
}

export interface ResidentialCustomerSearchInterface extends SearchCustomerInterface {
  firstName?: string;
  lastName?: string;
  rrn?: string;
  cardIdNumber?: string;
  birthday?: string;
  addressId?: string;
}

export interface BusinessCustomerSearchInterface extends SearchCustomerInterface {
  belgianEnterpriseNumber?: string;
  legalName?: string;
  addressId?: string;
}

export interface CustomerResponseInterface {
  firstName: string;
  lastName: string;
  id: string;
  status: string;
  type: string;
  customerNumber: string;
  encryptedData?: string;
}
