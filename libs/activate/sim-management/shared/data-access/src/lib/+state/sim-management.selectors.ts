import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SimManagementState } from './sim-management.state';
import { SIM_MANAGEMENT_FEATURE_KEY } from './sim-management.reducer';
import { MobileLine } from '../entities/mobile-line.interface';
import { SimStatus } from '../enums/sim-status.enum';
import { SimType } from '../enums/sim-type.enum';
import { User } from '../entities/user.interface';

export const simManagementFeature = createFeatureSelector<SimManagementState>(SIM_MANAGEMENT_FEATURE_KEY);

// Login details
export const selectIsManagerOrContractHolder = createSelector(
  simManagementFeature,
  (state: SimManagementState) => state.loginDetails?.isManager() || state.loginDetails?.isContractHolder()
);
export const selectIsMember = createSelector(simManagementFeature, (state: SimManagementState) =>
  state.loginDetails?.isMember()
);
export const selectIsAuthenticated = createSelector(
  simManagementFeature,
  (state: SimManagementState) => !!state.loginDetails?.customerNumber
);

// Mobile lines
export const selectMobileLines = createSelector(simManagementFeature, (state: SimManagementState) => state.mobileLines);

export const selectSelectedMobileLine = createSelector(
  simManagementFeature,
  (state: SimManagementState) => state.selectedMobileLine
);

// Household Users
export const selectHouseholdUsers = createSelector(simManagementFeature, (state: SimManagementState) =>
  state.householdUsers.filter((x) => x.identityId !== state.selectedMobileLine?.identityId)
);

// Sim swap
export const selectSimSwap = createSelector(
  simManagementFeature,
  (state: SimManagementState) => state.simSwapSalesOrderId
);

export const selectESimSwap = createSelector(
  simManagementFeature,
  (state: SimManagementState) => state.eSimSwapSalesOrderId
);

// Actions
export const selectIsBlockActionVisible = createSelector(
  selectSelectedMobileLine,
  (mobileLine: MobileLine | undefined) => !mobileLine?.isSuspended && !mobileLine?.pendingSimCard
);

export const selectIsSimSwapActionVisible = createSelector(
  selectSelectedMobileLine,
  (mobileLine: MobileLine | undefined) =>
    !mobileLine?.pendingSimCard &&
    (mobileLine?.mainSimCard?.status === SimStatus.SIM_CARD_LOST ||
      mobileLine?.mainSimCard?.status === SimStatus.ACTIVE ||
      mobileLine?.mainSimCard?.status === SimStatus.COMPLETED)
);

export const selectIsDeactivateESimWearableActionVisible = createSelector(
  selectSelectedMobileLine,
  (mobileLine: MobileLine | undefined) =>
    !mobileLine?.isSuspended &&
    mobileLine?.isESimSmartWatchAvailable &&
    mobileLine?.mainSimCard?.type === SimType.E_SIM &&
    !mobileLine?.pendingSimCard &&
    mobileLine?.pendingSimCard?.type !== SimType.E_SIM &&
    mobileLine?.mainSimCard?.status !== SimStatus.SIM_CARD_LOST &&
    mobileLine?.mainSimCard?.status !== SimStatus.COLLECTION_BARRING &&
    mobileLine?.mainSimCard?.status !== SimStatus.ACTIVATION_IN_PROGRESS
);

export const selectIsAssignActionVisible = createSelector(
  selectSelectedMobileLine,
  selectIsManagerOrContractHolder,
  selectHouseholdUsers,
  (mobileLine: MobileLine | undefined, isManagerOrContractHolder: boolean | undefined, users: User[]) =>
    !mobileLine?.isSuspended && isManagerOrContractHolder && !mobileLine?.pendingSimCard && users.length > 0
);

export const selectIsRequestESimProfileVisible = createSelector(
  selectSelectedMobileLine,
  selectIsManagerOrContractHolder,
  (mobileLine: MobileLine | undefined, isManagerOrContractHolder: boolean | undefined) =>
    !mobileLine?.isSuspended && isManagerOrContractHolder && !mobileLine?.pendingSimCard
);

export const selectIsUnblockActionVisible = createSelector(
  selectSelectedMobileLine,
  (mobileLine: MobileLine | undefined) => mobileLine?.isSuspended && mobileLine?.status !== SimStatus.COLLECTION_BARRING
);

export const selectIsActivateESimSmartWatchInfoActionVisible = createSelector(
  selectMobileLines,
  selectSelectedMobileLine,
  (mobileLines: MobileLine[], selectedMobileLine: MobileLine | undefined) =>
    !selectedMobileLine?.isSuspended &&
    !selectedMobileLine?.pendingSimCard &&
    !selectedMobileLine?.isDataOnlyPlan &&
    selectedMobileLine?.isESimSmartWatchAvailable &&
    // Check if there is no eSIM in progress or active
    !mobileLines.find(
      (mobileLine) =>
        mobileLine.mainSimCard?.type === SimType.E_SIM || mobileLine?.pendingSimCard?.type === SimType.E_SIM
    )
);

export const selectIsBlockedBySystem = createSelector(
  selectSelectedMobileLine,
  (mobileLine: MobileLine | undefined) =>
    mobileLine && mobileLine.isSuspended && mobileLine.status === SimStatus.COLLECTION_BARRING
);

export const selectIsESimSwapInProgress = createSelector(
  selectSelectedMobileLine,
  (mobileLine: MobileLine | undefined) =>
    mobileLine?.pendingSimCard?.type === SimType.E_SIM && !mobileLine?.pendingSimCard.eSimProfileData
);

export const selectIsESimSwapReadyForActivation = createSelector(
  selectSelectedMobileLine,
  (mobileLine: MobileLine | undefined) =>
    mobileLine?.pendingSimCard?.type === SimType.E_SIM && !!mobileLine?.pendingSimCard.eSimProfileData
);

export const selectIsSimSwapReadyForActivation = createSelector(
  selectSelectedMobileLine,
  (mobileLine: MobileLine | undefined) => mobileLine?.pendingSimCard?.type === SimType.PHYSICAL_SIM
);

// Activation flow
export const selectActivationStep = createSelector(
  simManagementFeature,
  (state: SimManagementState) => state.activationStep
);

export const selectLineType = createSelector(simManagementFeature, (state: SimManagementState) => state.lineType);
export const selectOrderType = createSelector(simManagementFeature, (state: SimManagementState) => state.orderType);

// Misc
export const selectIsLoading = createSelector(simManagementFeature, (state: SimManagementState) => state.isLoading);

export const selectActionResultMessage = createSelector(
  simManagementFeature,
  (state: SimManagementState) => state.actionResultMessage
);
