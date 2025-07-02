import { Address } from '../../../common/address/models/address.model';

export class CafeModemDetailModel {
  macAddress: string;
  modemType: string;
  hardwareType: string;
  cableRouterName: string;
  internetLineIdentifier: string;
  installationAddress: Address;
}
