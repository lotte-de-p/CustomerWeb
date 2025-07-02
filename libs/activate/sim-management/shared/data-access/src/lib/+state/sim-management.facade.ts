import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { SimManagementSlice } from './sim-management.state';
import { Observable } from 'rxjs';
import {
  selectIsManagerOrContractHolder,
  selectIsMember,
  selectIsBlockActionVisible,
  selectIsRequestESimProfileVisible,
  selectHouseholdUsers,
  selectIsUnblockActionVisible,
  selectMobileLines,
  selectSelectedMobileLine,
  selectIsActivateESimSmartWatchInfoActionVisible,
  selectIsLoading,
  selectActionResultMessage,
  selectIsBlockedBySystem,
  selectIsSimSwapActionVisible,
  selectIsAssignActionVisible,
  selectSimSwap,
  selectIsESimSwapInProgress,
  selectIsESimSwapReadyForActivation,
  selectIsSimSwapReadyForActivation,
  selectIsAuthenticated,
  selectActivationStep,
  selectESimSwap,
  selectLineType,
  selectOrderType,
  selectIsDeactivateESimWearableActionVisible,
} from './sim-management.selectors';
import {
  loadMobileLines,
  setLoginDetails,
  setMobileLineName,
  getSimSwapSalesOrderId,
  loadHouseholdUsers,
  blockMobileLine,
  assignMobileLine,
  unblockMobileLine,
  setSelectedMobileLine,
  validateSim,
  loadLoginDetails,
  setActivationStep,
  activateSim,
  setActionResultMessage,
  generateSMSVerificationCode,
  getESimSwapSalesOrderId,
  deactivateESimWearable,
} from './sim-management.actions';
import { MobileLine } from '../entities/mobile-line.interface';
import { LoginDetails } from '@telenet/ng-lib-ocapi';
import { User } from '../entities/user.interface';
import { Message } from '../entities/message.interface';
import { ActivationStep } from '../enums/activation-step.enum';
import { ActivationParams } from '../entities/activation-params.interface';

@Injectable({
  providedIn: 'root',
})
export class SimManagementFacade {
  private readonly store = inject(Store<SimManagementSlice>);

  // Mobile lines
  readonly mobileLines$: Observable<MobileLine[]> = this.store.select(selectMobileLines);
  readonly selectedMobileLine$: Observable<MobileLine | undefined> = this.store.select(selectSelectedMobileLine);

  // Sim swap
  readonly simSwapSalesOrderId$: Observable<string | undefined> = this.store.select(selectSimSwap);
  readonly eSimSwapSalesOrderId$: Observable<string | undefined> = this.store.select(selectESimSwap);

  // Household users
  readonly householdUsers$: Observable<User[]> = this.store.select(selectHouseholdUsers);

  // User rights
  readonly isManagerOrContractHolder$: Observable<boolean | undefined> = this.store.select(
    selectIsManagerOrContractHolder
  );
  readonly isMember$: Observable<boolean | undefined> = this.store.select(selectIsMember);

  readonly isAuthenticated$: Observable<boolean | undefined> = this.store.select(selectIsAuthenticated);

  // Actions
  readonly isRequestESimProfileVisible$: Observable<boolean | undefined> = this.store.select(
    selectIsRequestESimProfileVisible
  );
  readonly isBlockActionVisible$: Observable<boolean | undefined> = this.store.select(selectIsBlockActionVisible);
  readonly isAssignActionVisible$: Observable<boolean | undefined> = this.store.select(selectIsAssignActionVisible);
  readonly isSimSwapActionVisible$: Observable<boolean | undefined> = this.store.select(selectIsSimSwapActionVisible);
  readonly isDeactivateESimWearableActionVisible$: Observable<boolean | undefined> = this.store.select(
    selectIsDeactivateESimWearableActionVisible
  );
  readonly isUnblockActionVisible$: Observable<boolean | undefined> = this.store.select(selectIsUnblockActionVisible);
  readonly isBlockedBySystem$: Observable<boolean | undefined> = this.store.select(selectIsBlockedBySystem);
  readonly isESimSwapInProgress$: Observable<boolean | undefined> = this.store.select(selectIsESimSwapInProgress);
  readonly isESimSwapReadyForActivation$: Observable<boolean | undefined> = this.store.select(
    selectIsESimSwapReadyForActivation
  );
  readonly isSimSwapReadyForActivation$: Observable<boolean | undefined> = this.store.select(
    selectIsSimSwapReadyForActivation
  );
  readonly isActivateESimSmartWatchInfoActionVisible$: Observable<boolean | undefined> = this.store.select(
    selectIsActivateESimSmartWatchInfoActionVisible
  );

  // Activation flow
  readonly activationStep$: Observable<ActivationStep | undefined> = this.store.select(selectActivationStep);
  readonly lineType$: Observable<string | undefined> = this.store.select(selectLineType);
  readonly orderType$: Observable<string | undefined> = this.store.select(selectOrderType);

  // Misc
  readonly actionResultMessage$: Observable<Message | undefined> = this.store.select(selectActionResultMessage);
  readonly isLoading$: Observable<boolean | undefined> = this.store.select(selectIsLoading);

  // Dispatchers
  loadMobileLines(): void {
    this.store.dispatch(loadMobileLines());
  }

  generateSMSVerificationCode(msisdn: string): void {
    this.store.dispatch(generateSMSVerificationCode({ msisdn }));
  }

  getESimSwapSalesOrderId(msisdn: string, verificationCode: string): void {
    this.store.dispatch(getESimSwapSalesOrderId({ msisdn, verificationCode }));
  }

  loadHouseHoldUsers(mobileLine: MobileLine): void {
    this.store.dispatch(loadHouseholdUsers({ mobileLine }));
  }

  setSelectedMobileLine(mobileLine: MobileLine): void {
    this.store.dispatch(setSelectedMobileLine({ mobileLine }));
  }

  loadLoginDetails(): void {
    this.store.dispatch(loadLoginDetails());
  }

  setLoginDetails(loginDetails: LoginDetails): void {
    this.store.dispatch(setLoginDetails({ loginDetails }));
  }

  setMobileLineName(mobileLine: MobileLine, name: string): void {
    this.store.dispatch(setMobileLineName({ mobileLine, name: name }));
  }

  blockMobileLine(mobileLine: MobileLine) {
    this.store.dispatch(blockMobileLine({ mobileLine }));
  }

  unblockMobileLine(mobileLine: MobileLine) {
    this.store.dispatch(unblockMobileLine({ mobileLine }));
  }

  assignMobileLine(mobileLine: MobileLine, identityId: string) {
    this.store.dispatch(assignMobileLine({ mobileLine, identityId }));
  }

  getSimSwapSalesOrderId(msisdn: string): void {
    this.store.dispatch(getSimSwapSalesOrderId({ msisdn }));
  }

  validateSim(orderNumber: string, msisdn: string, iccid: string): void {
    this.store.dispatch(validateSim({ orderNumber, msisdn, iccid }));
  }

  setActivationStep(step: ActivationStep): void {
    this.store.dispatch(setActivationStep({ activationStep: step }));
  }

  activateSim(activationParams: ActivationParams) {
    this.store.dispatch(activateSim({ activationParams: activationParams }));
  }

  setActionResultMessage(message: Message | undefined) {
    this.store.dispatch(setActionResultMessage({ message }));
  }

  deactivateESimWearable(mobileLine: MobileLine) {
    this.store.dispatch(deactivateESimWearable({ mobileLine }));
  }
}
