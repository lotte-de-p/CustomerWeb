export interface CreateCustomerRequest {
  brand: string;
  firstName: string;
  lastName: string;
  customerCategory: string;
  customerNumber?: string;
  planType?: string;
  contactsDetails: ContactDetails;
  rrn: string;
  cardIdNumber: string;
  identificationType: string;
  documentType: string;
  customerAddress: AddressObject;
  billingAccount?: BillingAccount;
  customerLocations: CustomerLocations[];
  navsScore: string;
  encryptedData: string;
}

export interface ContactDetails {
  title: string;
  gender: string;
  eMail: string;
  birthday: string;
  phoneNumber: PhoneNumber;
  communicationLanguage: string;
}

export interface PhoneNumber {
  value: string;
  type: string;
}

export interface CustomerLocations {
  address: AddressObject;
}

export interface AddressObject {
  id: string;
}

export interface BillingAccount {
  billDeliveryMethod: string;
}
