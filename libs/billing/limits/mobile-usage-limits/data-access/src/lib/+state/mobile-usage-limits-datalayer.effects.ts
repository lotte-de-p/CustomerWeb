import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { MobileUsageLimitsDatalayerService } from '../services/datalayer/mobile-usage-limits-datalayer.service';
import {
  updateMobileUsageDataLayerEvent,
  updateMobileUsageLimits,
  updateMobileUsageLimitsSuccess,
} from './mobile-usage-limits.actions';
import { combineLatest } from 'rxjs';
import { OUT_OF_BUNDLE, THIRD_PARTY_SERVICES } from '../services/mobile-usage-limits-service.constants';

@Injectable({
  providedIn: 'root',
})
export class MobileUsageLimitsDatalayerEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly mobileUsageLimitsDatalayerService: MobileUsageLimitsDatalayerService
  ) {}

  updateLimitsSuccess$ = createEffect(
    () =>
      combineLatest([
        this.actions$.pipe(ofType(updateMobileUsageLimits)),
        this.actions$.pipe(ofType(updateMobileUsageLimitsSuccess)),
        this.actions$.pipe(ofType(updateMobileUsageDataLayerEvent)),
      ]).pipe(
        tap(([usageLimitsRequest, usageLimitsResponse, updatedDataLayerAttributes]) => {
          if (!usageLimitsResponse.usageLimits && usageLimitsRequest) return;
          const { outOfBundleLimit, premiumServiceLimit } = usageLimitsRequest.updateUsageLimitsRequest;
          this.sendDataLayerEvent(premiumServiceLimit?.value, outOfBundleLimit?.value, updatedDataLayerAttributes);
        })
      ),
    { dispatch: false }
  );

  cancelUpdateLimitOnWarning$ = createEffect(
    () =>
      combineLatest([this.actions$.pipe(ofType(updateMobileUsageDataLayerEvent))]).pipe(
        tap(([updatedDataLayerAttributes]) => {
          this.sendDataLayerEvent(undefined, undefined, updatedDataLayerAttributes);
        })
      ),
    { dispatch: false }
  );

  private sendDataLayerEvent(
    premiumServiceLimitValue: number | undefined,
    outOfBundleLimitValue: number | undefined,
    updatedDataLayerAttributes:
      | {
          limitAlreadyExceeded: boolean;
          updateDeclined: boolean;
          cancelledLimit?: string;
          itemName?: string;
        }
      | undefined
  ) {
    if (updatedDataLayerAttributes) {
      if (premiumServiceLimitValue !== undefined) {
        this.mobileUsageLimitsDatalayerService.sendDataLayerEventWithAttributes(
          updatedDataLayerAttributes.limitAlreadyExceeded,
          updatedDataLayerAttributes.updateDeclined,
          premiumServiceLimitValue.toString(),
          THIRD_PARTY_SERVICES
        );
      } else if (outOfBundleLimitValue !== undefined) {
        this.mobileUsageLimitsDatalayerService.sendDataLayerEventWithAttributes(
          updatedDataLayerAttributes.limitAlreadyExceeded,
          updatedDataLayerAttributes.updateDeclined,
          outOfBundleLimitValue.toString(),
          OUT_OF_BUNDLE
        );
      } else if (updatedDataLayerAttributes.cancelledLimit !== undefined) {
        this.mobileUsageLimitsDatalayerService.sendDataLayerEventWithAttributes(
          updatedDataLayerAttributes.limitAlreadyExceeded,
          updatedDataLayerAttributes.updateDeclined,
          updatedDataLayerAttributes.cancelledLimit,
          updatedDataLayerAttributes.itemName
        );
      }
    }
  }
}
