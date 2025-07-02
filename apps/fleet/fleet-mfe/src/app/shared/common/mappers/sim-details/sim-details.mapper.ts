import { MapperInterface } from '@telenet/ng-lib-shared';
import { Injectable } from '@angular/core';
import { isEmpty } from 'lodash-es';
import { RawSimDetails } from '../../interfaces/raw-sim-details.interface';
import { SimDetailsModel } from '../../models/sim-details.model';

@Injectable({
  providedIn: 'root',
})
export class SimDetailsMapper implements MapperInterface<RawSimDetails[], SimDetailsModel[]> {
  toModel(rawSimDetails: RawSimDetails[]): SimDetailsModel[] {
    if (!isEmpty(rawSimDetails)) {
      return this.createSimDetails(rawSimDetails);
    } else {
      return [];
    }
  }

  private createSimDetails(rawSimDetails: RawSimDetails[]): SimDetailsModel[] {
    const simDetails = [] as SimDetailsModel[];
    rawSimDetails.forEach((rawSimDetailsLine) => simDetails.push(this.createSimAccount(rawSimDetailsLine)));
    return simDetails;
  }

  private createSimAccount(rawData: RawSimDetails): SimDetailsModel {
    const simAccount = new SimDetailsModel();

    simAccount.sim = rawData.sim;
    simAccount.puk = rawData.puk;
    simAccount.status = rawData.status;
    simAccount.iccid = rawData.iccid;
    simAccount.simType = rawData.simType;

    return simAccount;
  }
}
