export interface ItsMeInterface {
  code: string;
  state: string;
  [key: string]: string;
}

interface CustomerAddress {
  street?: string;
  houseNumber?: string;
  subHouseNumber?: string;
  boxNumber?: string;
  postalCode?: string;
  municipality?: string;
}

export interface ItsMeResponseInterface {
  rrn: string;
  firstName: string;
  lastName: string;
  gender: string;
  birthday: string;
  cardIDNumber: string;
  nationality: string;
  birthLocation: string;
  email: string;
  emailVerified: boolean;
  phoneNumber: string;
  customerAddress?: CustomerAddress;
}
