import { ProfileDetails } from '../models/profile-details.model';
import { ProfileOverview } from '../models/profile.overview.model';
import { SocialLogins } from '../models/social-logins.model';
import { Authenticators } from '../models/authenticators.model';
import { Factor } from '../models/factor.model';
import { createAction, emptyProps, props } from '@ngrx/store';

export const getProfileDetails = createAction(
  '[profile-management - customer-profile] get profileDetails',
  props<{ identityId: string; pidTransferRequest: boolean }>()
);
export const getProfileDetailsSuccessAction = createAction(
  '[profile-management - customer-profile] get profileDetails success response',
  props<{ profileDetails: ProfileDetails }>()
);
export const getProfileDetailsErrorAction = createAction(
  '[profile-management - customer-profile] get profileDetails Error',
  props<{ error: Error }>()
);

export const getProfileOverview = createAction(
  '[profile-management - customer-profile] get profile overview',
  props<{ identityId: string }>()
);
export const getProfileOverviewSuccessAction = createAction(
  '[profile-management - customer-profile] get profile overview success response',
  props<{ profileOverview: ProfileOverview }>()
);
export const getProfileOverviewErrorAction = createAction(
  '[profile-management - customer-profile] get profile overview error',
  props<{ error: string }>()
);

export const getSocialLogins = createAction('[profile-management - customer-profile] get socialLogins', emptyProps);
export const getSocialLoginsSuccessAction = createAction(
  '[profile-management - customer-profile] get socialLogins success response',
  props<{ socialLogins: SocialLogins }>()
);
export const getSocialLoginsErrorAction = createAction(
  '[profile-management - customer-profile] get socialLogins Error',
  props<{ error: Error }>()
);

export const unlinkSocialLogin = createAction(
  '[profile-management - customer-profile] unlink socialLogin',
  props<{ socialLoginType: string }>()
);
export const unlinkSocialLoginSuccessAction = createAction(
  '[profile-management - customer-profile] unlink socialLogin success response',
  emptyProps
);
export const unlinkSocialLoginErrorAction = createAction(
  '[profile-management - customer-profile] unlink socialLogin Error',
  props<{ error: Error }>()
);

export const getAuthenticators = createAction(
  '[profile-management - manage-authenticators] get authenticators',
  emptyProps
);
export const getAuthenticatorsSuccessAction = createAction(
  '[profile-management - manage-authenticators] get authenticators success response',
  props<{ authenticators: Authenticators }>()
);
export const getAuthenticatorsErrorAction = createAction(
  '[profile-management - manage-authenticators] get authenticators Error',
  props<{ error: string }>()
);

export const toggleActivateAction = createAction(
  '[profile-management - manage-authenticators] toggleActivate',
  props<{
    isToggleActivate: boolean;
  }>()
);
export const toggleManageAction = createAction(
  '[profile-management - manage-authenticators] toggleManage',
  props<{
    isToggleManage: boolean;
  }>()
);

export const update2faStatus = createAction(
  '[profile-management - manage-authenticators] update 2FA status',
  props<{ payload: boolean }>()
);
export const update2faStatusSuccessAction = createAction(
  '[profile-management - manage-authenticators] update 2FA status success response',
  props<{ successResponse: boolean }>()
);
export const update2faStatusErrorAction = createAction(
  '[profile-management - manage-authenticators] update 2FA status Error',
  props<{ error: string }>()
);

export const unenrollFactor = createAction(
  '[profile-management - manage-authenticators] unenroll factor',
  props<{ factor: Factor }>()
);
export const unenrollFactorSuccessAction = createAction(
  '[profile-management - manage-authenticators] unenroll factor success response',
  props<{ successResponse: boolean }>()
);
export const unenrollFactorErrorAction = createAction(
  '[profile-management - manage-authenticators] unenroll factor Error',
  props<{ error: string }>()
);
