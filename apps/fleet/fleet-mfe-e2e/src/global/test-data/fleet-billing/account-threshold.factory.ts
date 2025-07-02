import { AccountThresholdInterface } from '../../../src/app/shared/common/interfaces/account-threshold.interface';

export class AccountThresholdFactory {
  static accountThreshold(props: Partial<AccountThresholdInterface>): AccountThresholdInterface {
    return {
      overConsumptionThreshold: {
        isEnabled: true,
        value: 50,
        inProgress: false,
      },
      ...props,
    };
  }
}
