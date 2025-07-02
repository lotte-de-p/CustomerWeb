export interface ProductDto {
  identifier: string;
  planType: string;
  type: string;
}

export interface CommercialAddressDto {
  boxNumber: string;
  houseNumber: string;
  id: string;
  municipality: string;
  name: string;
  postalCode: string;
  street: string;
}

export interface CustomerLocationDto {
  address: CustomerLocationAddressDto;
  id: string;
  name: string;
}

export interface CustomerLocationAddressDto {
  id: string;
}
