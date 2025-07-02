import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CustomerProfileState } from '../+state/customer-profile.state';
import {
  selectAuthenticators,
  selectLoadError,
  selectLoading,
  selectLoadSpinner,
  selectProfileOverview,
  selectSocialLogins,
  selectUnenrollFactorSuccessResponse,
  selectUpdate2faSuccessResponse,
} from '../+state/customer-profile.selectors';
import {
  getAuthenticators,
  getProfileDetails,
  getProfileOverview,
  getSocialLogins,
  toggleActivateAction,
  toggleManageAction,
  unenrollFactor,
  unlinkSocialLogin,
  update2faStatus,
} from '../+state/customer-profile.actions';
import { CustomerProfileService } from '../infrastructure/customer-profile.service';
import { ProfileDatalayerService } from '../infrastructure/profile-datalayer.service';
import { Factor } from '../models/factor.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerProfileFacade {
  constructor(
    private readonly store: Store<CustomerProfileState>,
    private readonly customerProfileService: CustomerProfileService,
    private readonly profileDatalayerService: ProfileDatalayerService
  ) {}

  readonly loading$ = this.store.select(selectLoading);
  readonly loadError$ = this.store.select(selectLoadError);
  readonly loadSpinner$ = this.store.select(selectLoadSpinner);
  readonly profileOverview$ = this.store.select(selectProfileOverview);
  readonly socialLogins$ = this.store.select(selectSocialLogins);
  readonly authenticators$ = this.store.select(selectAuthenticators);
  readonly update2faSuccessResponse$ = this.store.select(selectUpdate2faSuccessResponse);
  readonly unenrollFactorSuccessResponse$ = this.store.select(selectUnenrollFactorSuccessResponse);

  loadProfileDetails(identityId: string, pidTransferRequest: boolean = false) {
    this.store.dispatch(getProfileDetails({ identityId, pidTransferRequest }));
  }

  loadProfileOverview(identityId: string) {
    this.store.dispatch(getProfileOverview({ identityId }));
  }

  getProfilePicture(identityId: string): string {
    return this.customerProfileService.getProfilePicture(identityId);
  }

  sendNavLinkClickedEvent(itemName: string, destinationUrl?: string, isLink?: boolean): void {
    this.profileDatalayerService.sendNavLinkClickedEvent(itemName, destinationUrl, isLink);
  }

  loadSocialLogins() {
    this.store.dispatch(getSocialLogins());
  }

  unlinkSocialLogin(socialLoginType: string) {
    this.store.dispatch(unlinkSocialLogin({ socialLoginType }));
  }

  loadAuthenticators() {
    this.store.dispatch(getAuthenticators());
  }

  toggleActivate(isToggleActivate: boolean): void {
    this.store.dispatch(toggleActivateAction({ isToggleActivate }));
  }

  toggleManage(isToggleManage: boolean): void {
    this.store.dispatch(toggleManageAction({ isToggleManage }));
  }

  update2faStatus(payload: boolean) {
    this.store.dispatch(update2faStatus({ payload }));
  }

  unenrollFactor(factor: Factor) {
    this.store.dispatch(unenrollFactor({ factor }));
  }
}
