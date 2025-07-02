import { MapperInterface } from '@telenet/ng-lib-shared';
import { Injectable } from '@angular/core';
import { RawSimDetails } from '../../../shared/common/interfaces/raw-sim-details.interface';
import { SimDetailsModel } from '../../../shared/common/models/sim-details.model';

@Injectable({
  providedIn: 'root',
})
export class SimSwapMapper implements MapperInterface<RawSimDetails, SimDetailsModel> {
  toModel(rawSimDetails?: RawSimDetails): SimDetailsModel {
    if (rawSimDetails) {
      return this.createSimDetails(rawSimDetails);
    }
    return {} as SimDetailsModel;
  }

  private createSimDetails(rawSimDetails: RawSimDetails): SimDetailsModel {
    return this.createSimAccount(rawSimDetails);
  }

  private createSimAccount(rawData: RawSimDetails): SimDetailsModel {
    const simAccount = new SimDetailsModel();

    simAccount.sim = rawData.sim;
    simAccount.puk = rawData.puk;
    simAccount.status = rawData.status;

    return simAccount;
  }
}
