import { createAction, props } from '@ngrx/store';
import { UsageLimits } from '../entities/usage-limits/usage-limits.model';
import { UpdateUsageLimitsRequest } from '../entities/usage-limits/update-usage-limits-request.model';
import { MobileLine } from '@billing/shared/data-access';

export const fetchMobileUsageLimitsDetails = createAction(
  '[mobile-usage-limits] fetch mobile usage limits',
  props<{ mobileLine: MobileLine }>()
);

export const fetchMobileUsageLimitsDetailsSuccess = createAction(
  '[mobile-usage-limits] fetch mobile usage limits details success',
  props<{ usageLimits: UsageLimits }>()
);
export const fetchMobileUsageLimitsDetailsFailure = createAction(
  '[mobile-usage-limits] fetch mobile usage limits details failure',
  props<{ error: string }>()
);

export const updateMobileUsageLimits = createAction(
  '[mobile-usage-limits] update mobile usage limits',
  props<{ updateUsageLimitsRequest: UpdateUsageLimitsRequest; mobileLine: MobileLine }>()
);

export const updateMobileUsageLimitsFailure = createAction(
  '[mobile-usage-limits] update mobile usage limits failure',
  props<{ error: string }>()
);

export const updateMobileUsageLimitsSuccess = createAction(
  '[mobile-usage-limits] update mobile usage limits success',
  props<{ usageLimits: UsageLimits }>()
);

export const fetchOutOfBundleLimits = createAction(
  '[mobile-usage-limits] fetch out of bundle limits',
  props<{ mobileLine: MobileLine }>()
);

export const fetchOutOfBundleLimitsSuccess = createAction(
  '[mobile-usage-limits] fetch out of bundle limits success',
  props<{ outOfBundleLimits: string[] }>()
);
export const fetchOutOfBundleLimitsFailure = createAction(
  '[mobile-usage-limits] fetch out of bundle limits failure',
  props<{ error: string }>()
);

export const updateMobileUsageDataLayerEvent = createAction(
  '[mobile-usage-limits] updateMobileUsageDataLayerEvent',
  props<{
    limitAlreadyExceeded: boolean;
    updateDeclined: boolean;
    cancelledLimit?: string;
    itemName?: string;
  }>()
);

export const resetMobileUsageLimits = createAction('[MobileUsageLimits] Reset Mobile Usage Limits');
