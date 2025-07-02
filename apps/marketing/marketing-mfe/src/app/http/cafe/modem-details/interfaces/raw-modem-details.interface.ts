import { RawAddressInterface } from '../../../common/address/interfaces/raw-address.interface';

export interface RawModemDetailsInterface {
  modemdetails: RawModemDetailInterface[];
}

export interface RawModemDetailInterface {
  macaddress: string;
  modemtype: string;
  hardware: string;
  cableroutername: string;
  internetlineidentifier: string;
  installationaddress: RawAddressInterface;
}
