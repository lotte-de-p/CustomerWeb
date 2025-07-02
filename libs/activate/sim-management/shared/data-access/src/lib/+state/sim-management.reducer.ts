import { createFeature, createReducer, on } from '@ngrx/store';
import { SimManagementState, initialState } from './sim-management.state';
import {
  loadMobileLines,
  loadMobileLinesSuccess,
  loadMobileLinesFailure,
  setLoginDetails,
  setMobileLineNameFailure,
  setMobileLineNameSuccess,
  setMobileLineName,
  blockMobileLine,
  blockMobileLineSuccess,
  blockMobileLineFailure,
  loadHouseholdUsers,
  loadHouseholdUsersSuccess,
  loadHouseholdUsersFailure,
  assignMobileLine,
  assignMobileLineSuccess,
  assignMobileLineFailure,
  unblockMobileLine,
  unblockMobileLineFailure,
  unblockMobileLineSuccess,
  setSelectedMobileLine,
  getSimSwapSalesOrderId,
  getSimSwapSalesOrderIdSuccess,
  getSimSwapSalesOrderIdFailure,
  validateSim,
  validateSimSuccess,
  validateSimFailure,
  loadLoginDetailsSuccess,
  loadLoginDetailsFailure,
  loadLoginDetails,
  setActivationStep,
  activateSim,
  activateSimSuccess,
  activateSimFailure,
  generateSMSVerificationCode,
  getESimSwapSalesOrderId,
  generateSMSVerificationCodeSuccess,
  getESimSwapSalesOrderIdSuccess,
  generateSMSVerificationCodeFailure,
  getESimSwapSalesOrderIdFailure,
  setActionResultMessage,
  deactivateESimWearable,
  deactivateESimWearableSuccess,
  deactivateESimWearableFailure,
} from './sim-management.actions';
import { produce } from 'immer';
import { MessageType } from '../enums/message-type.enum';
import { ActivationStep } from '../enums/activation-step.enum';
import { SimManagementConstants } from '../sim-management.constants';

export const SIM_MANAGEMENT_FEATURE_KEY = 'sim-management';

export const simManagementReducer = createReducer(
  initialState,

  // Login
  on(setLoginDetails, (state: SimManagementState, action) => ({
    ...state,
    loginDetails: action.loginDetails,
  })),
  on(loadLoginDetails, (state: SimManagementState) => ({
    ...state,
    isLoading: true,
  })),
  on(loadLoginDetailsSuccess, (state: SimManagementState, action) =>
    produce(state, (draft: SimManagementState) => {
      draft.loginDetails = action.loginDetails;
      draft.isLoading = false;
    })
  ),
  on(loadLoginDetailsFailure, (state: SimManagementState) => ({
    ...state,
    actionResultMessage: { type: MessageType.ERROR },
    isLoading: false,
  })),

  // Mobile lines
  on(loadMobileLines, (state: SimManagementState) => ({
    ...state,
    isLoading: true,
  })),
  on(loadMobileLinesSuccess, (state: SimManagementState, action) =>
    produce(state, (draft: SimManagementState) => {
      if (action.mobileLines.length === 0) {
        draft.actionResultMessage = { type: MessageType.ERROR, text: 'ng.mobile-line-selector.no-lines' };
      }
      draft.mobileLines = action.mobileLines;
      draft.isLoading = false;
    })
  ),
  on(loadMobileLinesFailure, (state: SimManagementState) => ({
    ...state,
    actionResultMessage: { type: MessageType.ERROR, text: 'ng.sim-management.error.get-mobile-lines-error-message' },
    isLoading: false,
  })),

  // Sim swap
  on(getSimSwapSalesOrderId, (state: SimManagementState) => ({
    ...state,
    isLoading: true,
  })),
  on(getSimSwapSalesOrderIdSuccess, (state: SimManagementState, action) =>
    produce(state, (draft: SimManagementState) => {
      draft.simSwapSalesOrderId = action.simSwapSalesOrderId;
      draft.isLoading = false;
    })
  ),
  on(getSimSwapSalesOrderIdFailure, (state: SimManagementState, action) => ({
    ...state,
    error: action.error,
    actionResultMessage: { type: MessageType.ERROR, text: 'ng.sim-management.error.sim-swap-message' },
    isLoading: false,
  })),

  // SMS verification
  on(generateSMSVerificationCode, (state: SimManagementState) => ({
    ...state,
    isLoading: true,
  })),
  on(generateSMSVerificationCodeSuccess, (state: SimManagementState) => ({
    ...state,
    isLoading: false,
    actionResultMessage: {
      type: MessageType.SUCCESS,
      text: 'ng.sim-management.success.generate-sms-verification-code',
    },
  })),
  on(generateSMSVerificationCodeFailure, (state: SimManagementState, action) => ({
    ...state,
    error: action.error,
    actionResultMessage: { type: MessageType.ERROR, text: 'ng.sim-management.error.generate-sms-verification-code' },
    isLoading: false,
  })),
  on(getESimSwapSalesOrderId, (state: SimManagementState) => ({
    ...state,
    isLoading: true,
  })),
  on(getESimSwapSalesOrderIdSuccess, (state: SimManagementState, action) =>
    produce(state, (draft: SimManagementState) => {
      draft.eSimSwapSalesOrderId = action.eSimSwapSalesOrderId;
      draft.isLoading = false;
    })
  ),
  on(getESimSwapSalesOrderIdFailure, (state: SimManagementState, action) => ({
    ...state,
    error: action.error,
    actionResultMessage: { type: MessageType.ERROR, text: 'ng.sim-management.error.verify-sms-verification-code' },
    isLoading: false,
  })),

  // Set selected mobile line
  on(setSelectedMobileLine, (state: SimManagementState, action) =>
    produce(state, (draft: SimManagementState) => {
      draft.selectedMobileLine = action.mobileLine;
      draft.actionResultMessage = undefined;
      draft.simSwapSalesOrderId = undefined;
    })
  ),

  // Household Users
  on(loadHouseholdUsers, (state: SimManagementState) => ({
    ...state,
    isLoading: true,
  })),
  on(loadHouseholdUsersSuccess, (state: SimManagementState, action) =>
    produce(state, (draft: SimManagementState) => {
      draft.householdUsers = action.householdUsers;
      draft.isLoading = false;
    })
  ),
  on(loadHouseholdUsersFailure, (state: SimManagementState) => ({
    ...state,
    actionResultMessage: { type: MessageType.ERROR, text: 'ng.sim-management.error.get-household-users-message' },
    isLoading: false,
  })),

  // Set name of a mobile line
  on(setMobileLineName, (state: SimManagementState) => ({
    ...state,
  })),
  on(setMobileLineNameSuccess, (state: SimManagementState, action) =>
    produce(state, (draft: SimManagementState) => {
      if (draft.selectedMobileLine) {
        draft.selectedMobileLine.name = action.mobileLine.name;
      }
    })
  ),
  on(setMobileLineNameFailure, (state: SimManagementState) => ({
    ...state,
    actionResultMessage: { type: MessageType.ERROR, text: 'ng.sim-management.error.set-nickname-error-message' },
  })),

  // Block mobile line
  on(blockMobileLine, (state: SimManagementState) => ({
    ...state,
    isLoading: true,
  })),
  on(blockMobileLineSuccess, (state: SimManagementState, action) =>
    produce(state, (draft: SimManagementState) => {
      if (action.mobileLine.msisdn === draft.selectedMobileLine?.msisdn) {
        draft.selectedMobileLine.isSuspended = true;
      }
      draft.actionResultMessage = {
        type: MessageType.SUCCESS,
        text: 'ng.sim-management.info.sim-block-confirmation-message',
      };
      draft.isLoading = false;
    })
  ),
  on(blockMobileLineFailure, (state: SimManagementState) => ({
    ...state,
    actionResultMessage: { type: MessageType.ERROR, text: 'ng.sim-management.error.sim-block-error-message' },
    isLoading: false,
  })),

  // Unblock mobile line
  on(unblockMobileLine, (state: SimManagementState) => ({
    ...state,
    isLoading: true,
  })),
  on(unblockMobileLineSuccess, (state: SimManagementState, action) =>
    produce(state, (draft: SimManagementState) => {
      if (action.mobileLine.msisdn === draft.selectedMobileLine?.msisdn) {
        draft.selectedMobileLine.isSuspended = false;
      }
      draft.actionResultMessage = {
        type: MessageType.SUCCESS,
        text: 'ng.sim-management.info.sim-unblock-confirmation-message',
      };
      draft.isLoading = false;
    })
  ),
  on(unblockMobileLineFailure, (state: SimManagementState) => ({
    ...state,
    actionResultMessage: { type: MessageType.ERROR, text: 'ng.sim-management.error.sim-unblock-error-message' },
    isLoading: false,
  })),

  // Assign mobile line
  on(assignMobileLine, (state: SimManagementState) => ({
    ...state,
    isLoading: true,
  })),
  on(assignMobileLineSuccess, (state: SimManagementState, action) =>
    produce(state, (draft: SimManagementState) => {
      if (action.mobileLine.msisdn === draft.selectedMobileLine?.msisdn) {
        draft.selectedMobileLine.identityId = action.mobileLine.identityId;
      }
      draft.actionResultMessage = {
        type: MessageType.SUCCESS,
        text: 'ng.sim-management.response-success-save-assignee',
      };
      draft.isLoading = false;
    })
  ),
  on(assignMobileLineFailure, (state: SimManagementState) => ({
    ...state,
    actionResultMessage: { type: MessageType.ERROR, text: 'ng.sim-management.error.assign-sim-error-message' },
    isLoading: false,
  })),

  // Validate SIM
  on(validateSim, (state: SimManagementState) => ({
    ...state,
    isLoading: true,
  })),
  on(validateSimSuccess, (state: SimManagementState, action) =>
    produce(state, (draft: SimManagementState) => {
      draft.orderType = action.orderType;
      draft.lineType = action.lineType;

      if (draft.orderType === SimManagementConstants.ORDER_TYPE_PORTING) {
        draft.activationStep = ActivationStep.PORTING;
      } else {
        draft.activationStep = ActivationStep.TERMS_AND_CONDITIONS;
      }

      draft.actionResultMessage = undefined;
      draft.isLoading = false;
    })
  ),
  on(validateSimFailure, (state: SimManagementState, _action) =>
    produce(state, (draft: SimManagementState) => {
      draft.actionResultMessage = {
        type: MessageType.ERROR,
        text: 'ng.e-sim-activation.error.sim-validation-error-message',
      };
      draft.isLoading = false;
    })
  ),

  // Activate sim
  on(activateSim, (state: SimManagementState) => ({
    ...state,
    isLoading: true,
  })),
  on(activateSimSuccess, (state: SimManagementState) =>
    produce(state, (draft: SimManagementState) => {
      draft.actionResultMessage = undefined;
      draft.activationStep = ActivationStep.DONE;
      draft.isLoading = false;
    })
  ),
  on(activateSimFailure, (state: SimManagementState) =>
    produce(state, (draft: SimManagementState) => {
      draft.actionResultMessage = {
        type: MessageType.ERROR,
        text: 'ng.e-sim-activation.error.sim-activation-error-message',
      };

      draft.isLoading = false;
    })
  ),

  // Set activation step
  on(setActivationStep, (state: SimManagementState, action) => ({
    ...state,
    activationStep: action.activationStep,
    actionResultMessage: undefined,
  })),

  // Action result message
  on(setActionResultMessage, (state: SimManagementState, action) => ({
    ...state,
    actionResultMessage: action.message,
  })),

  // Deactivate esim for smartwatch
  on(deactivateESimWearable, (state: SimManagementState) => ({
    ...state,
    isLoading: true,
  })),

  on(deactivateESimWearableSuccess, (state: SimManagementState, action) =>
    produce(state, (draft: SimManagementState) => {
      if (action.mobileLine.msisdn === draft.selectedMobileLine?.msisdn) {
        draft.selectedMobileLine.isSuspended = true;
      }
      draft.actionResultMessage = {
        type: MessageType.SUCCESS,
        text: 'ng.sim-management.info.deactivate-e-sim-wearable-success-message',
      };
      draft.isLoading = false;
    })
  ),
  on(deactivateESimWearableFailure, (state: SimManagementState) =>
    produce(state, (draft: SimManagementState) => {
      draft.actionResultMessage = {
        type: MessageType.ERROR,
        text: 'ng.sim-management.error.deactivate-e-sim-wearable-error-message',
      };

      draft.isLoading = false;
    })
  )
);

export const simManagementFeature = createFeature({
  name: SIM_MANAGEMENT_FEATURE_KEY,
  reducer: simManagementReducer,
});
