import { ServiceSegmentEnum } from '../enums/service-segment.enum';

export interface RawCustomerInterface {
  id: string;
  accountNumber: string;
  belgianEnterpriseNumber: string;
  belgianVATNumber: string;
  brand: string;
  cardIdNumber: string;
  category: string;
  commercialAddress: RawCommercialAddress;
  companyName: string;
  firstName: string;
  foreignVATNumber: string;
  lastName: string;
  legalAddress: RawCommercialAddress;
  legalForm: string;
  name: string;
  placeOfBirth: string;
  products: RawProduct[];
  rrn: string;
  serviceAddresses: RawCommercialAddress[];
  status: string;
  customerLocations: RawCustomerLocationInterface[];
  serviceSegment: ServiceSegmentEnum;
}
export interface RawCustomerLocationInterface {
  address: RawCustomerLocationAddressInterface;
  id: string;
  name: string;
}

export interface RawCustomerLocationAddressInterface {
  id: string;
}

export interface RawProduct {
  identifier: string;
  planType: string;
  type: string;
}

export interface RawCommercialAddress {
  boxNumber: string;
  houseNumber: string;
  id: string;
  municipality: string;
  name: string;
  postalCode: string;
  street: string;
}
