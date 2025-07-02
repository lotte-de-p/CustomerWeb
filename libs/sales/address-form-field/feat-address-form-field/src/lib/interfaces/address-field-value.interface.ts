import { Municipality } from './municipality.interface';
import { AddressUnit } from '@sales/shared/address/data-access';

export type FieldValue<T = string> = {
  value: T;
  addressUnit?: AddressUnit;
};

export interface RequiredAddressUnitFieldValue {
  value: string;
  addressUnit: AddressUnit;
}

export interface AddressFieldValue {
  municipality?: Municipality;
  street?: RequiredAddressUnitFieldValue;
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
