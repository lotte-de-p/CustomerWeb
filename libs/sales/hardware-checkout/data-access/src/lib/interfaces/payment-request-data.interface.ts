export interface PaymentRequestPersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
}

export interface PaymentRequestAddress {
  street: string;
  municipality: string;
  postalCode: string;
}

export interface PaymentRequestDataInterface {
  amount: string;
  salesOrderId: string;
  personalInfo: PaymentRequestPersonalInfo;
  address: PaymentRequestAddress;
  mobileNumber: string;
  shopUrl: string;
  language: string;
  deviceType: string;
}
