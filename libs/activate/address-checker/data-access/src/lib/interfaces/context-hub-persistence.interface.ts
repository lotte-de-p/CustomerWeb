export interface ContextHubPersistenceInterface {
  store: Store;
}

export interface Store {
  page: Page;
  user: User;
  customer: CustomerDetails;
  cafecontactdetails: SuccessDetails;
  customersegement: SuccessDetails;
  nba: Nba;
  contactdetails: SuccessDetails;
  products: SuccessDetails;
}

export interface Page {
  isSuccess: boolean;
  response_timestamp: number;
}

export interface User {
  narrowed: boolean;
  httpStatus: number;
  customerNumber: string;
  identityId: string;
  userName: string;
  firstName: string;
  lastName: string;
  narrowedScope: boolean;
  scopes: string[];
  authAge: number;
  isPid: boolean;
  bssSystem: string;
  role: string;
  isExplicitLogin: boolean;
  loginAlias: string;
  advisorId: string;
  response_timestamp: number;
}

export interface Nba {
  nbaPageModelList: NbaPageModel[];
  nbaError: boolean;
  nbaWithOffer: boolean;
  nbaWithoutOffer: boolean;
  response_timestamp: number;
}

export interface NbaPageModel {
  pageId: string;
  nbaModel: NbaModel;
}

export interface NbaModel {
  rankedResults: string[];
}

export interface SuccessDetails {
  isSuccess: boolean;
  response_timestamp: number;
}

export interface CustomerDetails {
  accountNumber: string;
  belgianVatNumber: string;
  brand: string;
  category: string;
  commercialAddress: Address;
  companyName: string;
  email: string;
  firstName: string;
  lastName: string;
  id: string;
  isSuccess: boolean;
  legalAddress: Address;
  msisdn: string[];
  name: string;
  response_timestamp: number;
  status: string;
  customerLocations: Address[];
}

export interface Address {
  name?: string;
  id: string;
}

export interface Locations {
  address: Address;
  id: string;
  name: string;
}
