import { AddressUnit, Municipality } from '@sales/shared/address/data-access';

export type FieldValue<T = string> = {
  value: T;
  addressUnit?: AddressUnit;
};

export interface StreetValue {
  value: string;
  addressUnit: AddressUnit;
}

export interface AddressFieldValue {
  municipality?: Municipality;
  street?: StreetValue;
  geographical_address?: GeographicalAddress;
}

export interface BoxFloor {
  boxNumber?: string;
  floor?: string;
}

export interface GeographicalAddress {
  addressUnit?: AddressUnit;
  housenumber?: string;
  subhousenumber?: string;
  box?: BoxFloor;
  isManualAddress: boolean;
}
