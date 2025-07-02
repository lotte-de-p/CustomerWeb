import { MapperInterface } from '@telenet/ng-lib-shared';
import { CafeModemDetailsModel } from '../models/cafe-modem-details.model';
import { RawModemDetailInterface, RawModemDetailsInterface } from '../interfaces/raw-modem-details.interface';
import { CafeModemDetailMapper } from './cafe-modem-detail.mapper';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CafeModemDetailsMapper implements MapperInterface<RawModemDetailsInterface, CafeModemDetailsModel> {
  constructor(private readonly modemDetailMapper: CafeModemDetailMapper) {}

  toModel(data: { modemdetails: RawModemDetailInterface[] }, _httpStatus?: number): CafeModemDetailsModel {
    const modemDetails = data.modemdetails.map((modemDetail: RawModemDetailInterface) =>
      this.modemDetailMapper.toModel(modemDetail)
    );
    return new CafeModemDetailsModel().withModemDetails(modemDetails);
  }
}
