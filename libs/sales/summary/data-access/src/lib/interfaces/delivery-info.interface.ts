export interface DeliveryInfoAddress {
  addressUnitId?: string;
  street: string;
  houseNumber: string;
  subHouseNumber?: string;
  box?: string;
  postalCode: string;
  municipality: string;
  country: string;
}

export interface DeliveryPersonalInfo {
  firstname: string;
  lastname: string;
  email: string;
  mobile: string;
}

export interface DeliveryInfo {
  personalInfo?: DeliveryPersonalInfo;
  address?: DeliveryInfoAddress;
}
