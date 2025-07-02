import { Injectable } from '@angular/core';
import { MapperInterface } from '@telenet/ng-lib-shared';
import { RawModemDetailInterface } from '../interfaces/raw-modem-details.interface';
import { CafeModemDetailModel } from '../models/cafe-modem-detail.model';
import { SingleAddressMapper } from '../../../common/address/mappers/single-address.mapper';

@Injectable({
  providedIn: 'root',
})
export class CafeModemDetailMapper implements MapperInterface<RawModemDetailInterface, CafeModemDetailModel> {
  constructor(private readonly singleAddressMapper: SingleAddressMapper) {}

  toModel(data: RawModemDetailInterface | undefined): CafeModemDetailModel {
    const modemDetailModel = new CafeModemDetailModel();

    if (data === undefined) {
      return modemDetailModel;
    }

    modemDetailModel.macAddress = data.macaddress;
    modemDetailModel.modemType = data.modemtype;
    modemDetailModel.hardwareType = data.hardware;
    modemDetailModel.cableRouterName = data.cableroutername;
    modemDetailModel.internetLineIdentifier = data.internetlineidentifier;
    modemDetailModel.installationAddress = this.singleAddressMapper.toModel(data.installationaddress);

    return modemDetailModel;
  }
}
