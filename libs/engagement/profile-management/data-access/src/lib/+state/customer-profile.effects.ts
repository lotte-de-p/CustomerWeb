import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromActions from './customer-profile.actions';
import {
  getSocialLoginsSuccessAction,
  unlinkSocialLoginErrorAction,
  unlinkSocialLoginSuccessAction,
} from './customer-profile.actions';
import { concatMap, delay, map, mergeMap } from 'rxjs/operators';
import { catchError, of } from 'rxjs';
import { CustomerProfileService } from '../infrastructure/customer-profile.service';
import { MessageService, SuccessMessage } from '@telenet/ng-lib-message';
import { ProfileDatalayerService } from '../infrastructure/profile-datalayer.service';
import { ManageSocialLoginConstants } from '../constants/manage-social-login.constant';

@Injectable({
  providedIn: 'root',
})
export class CustomerProfileEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly customerProfileService: CustomerProfileService,
    private readonly profileDatalayerService: ProfileDatalayerService,
    private readonly messageService: MessageService
  ) {}

  profileDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.getProfileDetails),
      mergeMap(({ identityId, pidTransferRequest }) => {
        return this.customerProfileService.getProfileDetailsByIdentityId(identityId, pidTransferRequest).pipe(
          map((profileDetails) => fromActions.getProfileDetailsSuccessAction({ profileDetails: profileDetails })),
          catchError((error) => of(fromActions.getProfileDetailsErrorAction({ error: error })))
        );
      })
    )
  );

  profileOverview$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.getProfileOverview),
      mergeMap(({ identityId }) => {
        return this.customerProfileService.getProfileOverview(identityId).pipe(
          map((profileOverview) => fromActions.getProfileOverviewSuccessAction({ profileOverview: profileOverview })),
          catchError((error) => of(fromActions.getProfileOverviewErrorAction({ error: error })))
        );
      })
    )
  );

  socialLogins$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.getSocialLogins),
      mergeMap(() => {
        return this.customerProfileService.getSocialLogins().pipe(
          map((socialLogins) => fromActions.getSocialLoginsSuccessAction({ socialLogins: socialLogins })),
          catchError((error) => of(fromActions.getSocialLoginsErrorAction({ error: error })))
        );
      })
    )
  );

  unlinkSocialLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.unlinkSocialLogin),
      concatMap(({ socialLoginType }) => {
        return this.customerProfileService.unlinkSocialLogin(socialLoginType).pipe(
          delay(1000),
          concatMap(() => {
            this.profileDatalayerService.sendUnlinkSocialEvent();
            this.messageService.addMessage(
              new SuccessMessage(
                ManageSocialLoginConstants.MESSAGE_GROUP,
                ManageSocialLoginConstants.UNLINK_SOCIAL_LOGIN_SUCCESS
              )
            );
            return this.customerProfileService.getSocialLogins();
          }),
          concatMap((socialLogins) => [
            getSocialLoginsSuccessAction({ socialLogins }),
            unlinkSocialLoginSuccessAction(),
          ]),
          catchError((error) => of(unlinkSocialLoginErrorAction({ error: error })))
        );
      })
    )
  );

  authenticators$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.getAuthenticators),
      mergeMap(() => {
        return this.customerProfileService.getAuthenticators().pipe(
          map((authenticators) => fromActions.getAuthenticatorsSuccessAction({ authenticators: authenticators })),
          catchError((error) => of(fromActions.getAuthenticatorsErrorAction({ error: error })))
        );
      })
    )
  );

  update2faStatus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.update2faStatus),
      concatMap(({ payload }) =>
        this.customerProfileService.update2faStatus(payload).pipe(
          map((successResponse) => {
            this.profileDatalayerService.sendUpdate2faStatusEvent();
            return fromActions.update2faStatusSuccessAction({ successResponse: successResponse });
          }),
          catchError((error) => of(fromActions.update2faStatusErrorAction({ error: error })))
        )
      )
    )
  );

  unenrollFactor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.unenrollFactor),
      concatMap(({ factor }) =>
        this.customerProfileService.unenrollFactor(factor).pipe(
          map((successResponse) => {
            this.profileDatalayerService.sendUnenrollFactorEvent();
            return fromActions.unenrollFactorSuccessAction({ successResponse: successResponse });
          }),
          catchError((error) => of(fromActions.unenrollFactorErrorAction({ error: error })))
        )
      )
    )
  );
}
