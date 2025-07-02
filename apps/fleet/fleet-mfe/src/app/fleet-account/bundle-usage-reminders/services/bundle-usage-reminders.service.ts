import { inject, Injectable } from '@angular/core';
import { DataLayerAttributes, DataLayerService } from '@telenet/ng-lib-datalayer';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { BundleUsageRemindersConstants } from '../constants/bundle-usage-reminders.constants';
import { PostRequestSuccessInterface } from '../../../shared/common/interfaces/post-request-success.interface';
import { BillingService } from '../../../shared/common/services/billing/billing.service';
import {
  AccountThresholdInterface,
  ThresholdInterface,
} from '../../../shared/common/services/billing/interfaces/account-threshold.interface';

@Injectable({
  providedIn: 'root',
})
export class BundleUsageRemindersService {
  readonly #billingService = inject(BillingService);
  readonly #dataLayerService = inject(DataLayerService);

  getAccountThreshold(accountNumber: string): Observable<ThresholdInterface> {
    return this.#billingService
      .getAccountThreshold(BundleUsageRemindersConstants.MESSAGE_GROUP, accountNumber)
      .pipe(map((value) => this.mapToThreshold(value)));
  }

  updateAccountThreshold(
    accountNumber: string,
    initialAccountThreshold: ThresholdInterface,
    isEnabled: boolean,
    thresholdValue: number,
    componentInstanceId: string
  ): Observable<PostRequestSuccessInterface> {
    const requestBody: AccountThresholdInterface = this.createRequestBody(isEnabled, thresholdValue);
    return this.#billingService
      .updateAccountThreshold(BundleUsageRemindersConstants.MESSAGE_GROUP, accountNumber, requestBody)
      .pipe(
        tap({
          next: () => {
            this.pushDataLayerEvent(requestBody.overConsumptionThreshold, initialAccountThreshold, componentInstanceId);
          },
        })
      );
  }

  private mapToThreshold(accountThreshold: AccountThresholdInterface): ThresholdInterface {
    const isEnabled: boolean =
      accountThreshold.overConsumptionThreshold &&
      accountThreshold.overConsumptionThreshold.value !== undefined &&
      accountThreshold.overConsumptionThreshold.isEnabled;

    let overConsumptionThresholdValue: number | undefined;
    if (
      accountThreshold.overConsumptionThreshold.value ===
      BundleUsageRemindersConstants.OVERCONSUMPTION_NO_THRESHOLD_SELECTED_DEFAULT_NUMBER
    ) {
      overConsumptionThresholdValue = undefined;
    } else {
      overConsumptionThresholdValue = accountThreshold.overConsumptionThreshold.value;
    }
    const inProgress = accountThreshold.overConsumptionThreshold.inProgress;

    return {
      isEnabled: isEnabled,
      value: overConsumptionThresholdValue,
      inProgress: inProgress,
    };
  }

  private createRequestBody(isEnabled: boolean, thresholdValue: number): AccountThresholdInterface {
    const accountThreshold: AccountThresholdInterface = {
      overConsumptionThreshold: {
        isEnabled: isEnabled,
      },
    };
    if (accountThreshold.overConsumptionThreshold.isEnabled) {
      accountThreshold.overConsumptionThreshold.value = thresholdValue;
    }
    return accountThreshold;
  }

  private pushDataLayerEvent(
    savedThreshold: ThresholdInterface,
    initialThreshold: ThresholdInterface,
    componentInstanceId: string
  ): void {
    if (savedThreshold.isEnabled) {
      if (!initialThreshold.isEnabled) {
        this.addEventToUDL(BundleUsageRemindersConstants.EVENT_NAME_BUNDLE_THRESHOLD_ACTIVATED, componentInstanceId);
      }
      if (initialThreshold.value !== savedThreshold.value) {
        this.addEventToUDL(
          BundleUsageRemindersConstants.EVENT_NAME_BUNDLE_THRESHOLD_AMOUNT_CHANGED,
          componentInstanceId,
          savedThreshold.value
        );
      }
    } else {
      if (initialThreshold.isEnabled) {
        this.addEventToUDL(BundleUsageRemindersConstants.EVENT_NAME_BUNDLE_THRESHOLD_DEACTIVATED, componentInstanceId);
      }
    }
  }

  private addEventToUDL(eventName: string, componentInstanceId: string, item?: number): void {
    const attributes: DataLayerAttributes = {};

    if (item) {
      attributes.itemName = item.toString();
    }

    const type = BundleUsageRemindersConstants.DATA_LAYER_CLICK_TYPE;
    const category = this.#dataLayerService.getCategory(componentInstanceId);
    const eventInfo = this.#dataLayerService.createEventInfo(eventName, type, [
      BundleUsageRemindersConstants.MESSAGE_GROUP,
    ]);

    this.#dataLayerService.sendEvent({ eventInfo, attributes, category }).then();
  }
}
