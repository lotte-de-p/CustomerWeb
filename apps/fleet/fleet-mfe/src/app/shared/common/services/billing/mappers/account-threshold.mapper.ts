import { MapperInterface } from '@telenet/ng-lib-shared';
import { Injectable } from '@angular/core';
import { RawAccountThresholdInterface, RawThresholdInterface } from '../interfaces/raw-account-threshold.interface';
import { AccountThresholdInterface, ThresholdInterface } from '../interfaces/account-threshold.interface';

@Injectable({
  providedIn: 'root',
})
export class AccountThresholdMapper
  implements MapperInterface<RawAccountThresholdInterface, AccountThresholdInterface>
{
  toModel(rawAccountThreshold: RawAccountThresholdInterface): AccountThresholdInterface {
    return this.createAccountThreshold(rawAccountThreshold);
  }

  private createAccountThreshold(rawAccountThreshold: RawAccountThresholdInterface): AccountThresholdInterface {
    const accountThreshold = {} as AccountThresholdInterface;

    accountThreshold.overConsumptionThreshold = this.getOverConsumptionThreshold(
      rawAccountThreshold.overConsumptionThreshold
    );

    return accountThreshold;
  }

  private getOverConsumptionThreshold(rawThreshold: RawThresholdInterface): ThresholdInterface {
    const threshold = {} as ThresholdInterface;

    threshold.value = rawThreshold.value;
    threshold.isEnabled = rawThreshold.isEnabled;
    threshold.inProgress = rawThreshold.inProgress;

    return threshold;
  }
}
