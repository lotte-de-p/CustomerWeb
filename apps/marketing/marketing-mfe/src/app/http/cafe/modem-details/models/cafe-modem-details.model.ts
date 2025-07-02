import { CafeModemDetailModel } from './cafe-modem-detail.model';

export class CafeModemDetailsModel {
  modemDetails: CafeModemDetailModel[];

  public withModemDetails(modemDetails: CafeModemDetailModel[]): CafeModemDetailsModel {
    this.modemDetails = modemDetails;
    return this;
  }
}
