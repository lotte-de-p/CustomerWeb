import { RawAddressInterface } from '../../../common/address/interfaces/raw-address.interface';
import { RawOmapiProductInterface } from '@telenet/ng-lib-omapi';

export interface RawProductHoldingInterface {
  accountnumber: number;
  address: RawAddressInterface;
  identifier: string;
  label: string;
  options: RawProductHoldingInterface[];
  products: RawProductHoldingInterface[];
  specUrl: string;
}

export interface RawProductInterface {
  identifier: string;
  lineIdentifier?: string;
  customerproductid?: number;
  accountnumber: number;
  label: string;
  specurl: string;
  options: RawOptionInterface[];
  products: RawProductInterface[];
  address?: RawAddressInterface;
  rawOmapi?: RawOmapiProductInterface;
}

export interface RawOptionInterface {
  label: string;
  specurl: string;
  rawOmapi?: RawOmapiProductInterface;
}
