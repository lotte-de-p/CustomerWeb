import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { catchError, concatMap, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  fetchMobileUsageLimitsDetails,
  fetchMobileUsageLimitsDetailsFailure,
  fetchMobileUsageLimitsDetailsSuccess,
  fetchOutOfBundleLimits,
  fetchOutOfBundleLimitsFailure,
  fetchOutOfBundleLimitsSuccess,
  updateMobileUsageLimits,
  updateMobileUsageLimitsFailure,
  updateMobileUsageLimitsSuccess,
} from './mobile-usage-limits.actions';
import { UsageLimitsService } from '../services/usage-limits/usage-limits.service';
import { OutOfBundleLimitsService } from '../services/out-of-bundle-limits/out-of-bundle-limits.service';
import { ErrorMessage, MessageService, SuccessMessage } from '@telenet/ng-lib-message';
import { UsageLimits } from '../entities/usage-limits/usage-limits.model';
import {
  MESSAGE_GROUP,
  OCAPI_ERROR_OUT_OF_BUNDLE_NOT_FOUND,
  USAGE_LIMIT_DECLINED,
  USAGE_LIMIT_UPDATED,
} from '../services/mobile-usage-limits-service.constants';

@Injectable({ providedIn: 'root' })
export class MobileUsageLimitsEffects {
  fetchMobileUsageLimitsDetails$;
  fetchOutOfBundleLimits$;
  updateMobileUsageLimits$;

  constructor(
    private readonly actions$: Actions,
    private readonly outOfBundleLimitsService: OutOfBundleLimitsService,
    private readonly usageLimitsService: UsageLimitsService,
    private readonly messageService: MessageService
  ) {
    this.fetchMobileUsageLimitsDetails$ = createEffect(() =>
      this.actions$.pipe(
        ofType(fetchMobileUsageLimitsDetails),
        concatMap(({ mobileLine }) =>
          this.usageLimitsService.getUsageLimits(mobileLine.msisdn).pipe(
            map((usageLimits) => fetchMobileUsageLimitsDetailsSuccess({ usageLimits })),
            catchError((error) => of(fetchMobileUsageLimitsDetailsFailure({ error })))
          )
        )
      )
    );
    this.fetchOutOfBundleLimits$ = createEffect(() =>
      this.actions$.pipe(
        ofType(fetchOutOfBundleLimits),
        concatMap(({ mobileLine }) =>
          this.outOfBundleLimitsService.getOutOfBundleLimits(mobileLine.msisdn).pipe(
            map((outOfBundleLimits) => fetchOutOfBundleLimitsSuccess({ outOfBundleLimits })),
            catchError((error) => {
              if (error.includes(OCAPI_ERROR_OUT_OF_BUNDLE_NOT_FOUND)) {
                this.messageService.clearMessages(MESSAGE_GROUP);
              }
              return of(fetchOutOfBundleLimitsFailure({ error }));
            })
          )
        )
      )
    );

    this.updateMobileUsageLimits$ = createEffect(() =>
      this.actions$.pipe(
        ofType(updateMobileUsageLimits),
        concatMap(({ updateUsageLimitsRequest, mobileLine }) =>
          this.usageLimitsService.updateUsageLimits(updateUsageLimitsRequest, mobileLine.msisdn)
        ),
        tap(() =>
          this.messageService.addMessage(new SuccessMessage(MESSAGE_GROUP, `${MESSAGE_GROUP}.${USAGE_LIMIT_UPDATED}`))
        ),
        map((usageLimits: UsageLimits) => updateMobileUsageLimitsSuccess({ usageLimits })),
        catchError((error) => {
          this.messageService.addMessage(new ErrorMessage(MESSAGE_GROUP, `${MESSAGE_GROUP}.${USAGE_LIMIT_DECLINED}`));
          return of(updateMobileUsageLimitsFailure({ error }));
        })
      )
    );
  }
}
