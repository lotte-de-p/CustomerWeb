import { createAction, emptyProps, props } from '@ngrx/store';
import { LoginDetails } from '@telenet/ng-lib-ocapi';
import { User } from '../entities/user.interface';
import { MobileLine } from '../entities/mobile-line.interface';
import { ActivationStep } from '../enums/activation-step.enum';
import { ActivationParams as ActivationParams } from '../entities/activation-params.interface';
import { Message } from '../entities/message.interface';

// Login details
export const setLoginDetails = createAction(
  '[sim-management] setLoginDetails',
  props<{ loginDetails: LoginDetails }>()
);

export const loadLoginDetails = createAction('[sim-management] loadLoginDetails', emptyProps);

export const loadLoginDetailsSuccess = createAction(
  '[sim-management] loadLoginDetailsSuccess',
  props<{ loginDetails: LoginDetails }>()
);

export const loadLoginDetailsFailure = createAction(
  '[sim-management] loadLoginDetailsFailure',
  props<{
    error: string;
  }>()
);

// Mobile lines
export const loadMobileLines = createAction('[sim-management] loadMobileLines', emptyProps);

export const loadMobileLinesSuccess = createAction(
  '[sim-management] loadMobileLinesSuccess',
  props<{ mobileLines: MobileLine[] }>()
);

export const loadMobileLinesFailure = createAction(
  '[sim-management] loadMobileLinesFailure',
  props<{
    error: string;
  }>()
);

// Household Users
export const loadHouseholdUsers = createAction(
  '[sim-management] loadHouseholdUsers',
  props<{
    mobileLine: MobileLine;
  }>()
);

export const loadHouseholdUsersSuccess = createAction(
  '[sim-management] loadHouseholdUsersSuccess',
  props<{ householdUsers: User[] }>()
);

export const loadHouseholdUsersFailure = createAction(
  '[sim-management] loadHouseholdUsersFailure',
  props<{
    error: string;
  }>()
);

// Selected mobile line
export const setSelectedMobileLine = createAction(
  '[sim-management] setSelectedMobileLine',
  props<{
    mobileLine: MobileLine;
  }>()
);

// Mobile line name
export const setMobileLineName = createAction(
  '[sim-management] setMobileLineName',
  props<{
    mobileLine: MobileLine;
    name: string;
  }>()
);

export const setMobileLineNameSuccess = createAction(
  '[sim-management] setMobileLineNameSuccess',
  props<{ mobileLine: MobileLine }>()
);

export const setMobileLineNameFailure = createAction(
  '[sim-management] setMobileLineNameFailure',
  props<{
    error: string;
  }>()
);

// Block mobile line
export const blockMobileLine = createAction(
  '[sim-management] blockMobileLine',
  props<{
    mobileLine: MobileLine;
  }>()
);

export const blockMobileLineSuccess = createAction(
  '[sim-management] blockMobileLineSuccess',
  props<{ mobileLine: MobileLine }>()
);

export const blockMobileLineFailure = createAction(
  '[sim-management] blockMobileLineFailure',
  props<{
    error: string;
  }>()
);

// Unblock mobile line
export const unblockMobileLine = createAction(
  '[sim-management] unblockMobileLine',
  props<{
    mobileLine: MobileLine;
  }>()
);

export const unblockMobileLineSuccess = createAction(
  '[sim-management] unblockMobileLineSuccess',
  props<{ mobileLine: MobileLine }>()
);

export const unblockMobileLineFailure = createAction(
  '[sim-management] unblockMobileLineFailure',
  props<{
    error: string;
  }>()
);

// Assign mobile line
export const assignMobileLine = createAction(
  '[sim-management] assignMobileLine',
  props<{
    mobileLine: MobileLine;
    identityId: string;
  }>()
);

export const assignMobileLineSuccess = createAction(
  '[sim-management] assignMobileLineSuccess',
  props<{ mobileLine: MobileLine }>()
);

export const assignMobileLineFailure = createAction(
  '[sim-management] assignMobileLineFailure',
  props<{
    error: string;
  }>()
);

// Sim Swap
export const getSimSwapSalesOrderId = createAction(
  '[sim-management] getSimSwapSalesOrderId',
  props<{
    msisdn: string;
  }>()
);

export const getSimSwapSalesOrderIdSuccess = createAction(
  '[sim-management] getSimSwapSalesOrderIdSuccess',
  props<{ simSwapSalesOrderId: string }>()
);

export const getSimSwapSalesOrderIdFailure = createAction(
  '[sim-management] getSimSwapSalesOrderIdFailure',
  props<{
    error: string;
  }>()
);

// E-Sim Swap
export const generateSMSVerificationCode = createAction(
  '[sim-management] generateSMSVerificationCode',
  props<{
    msisdn: string;
  }>()
);

export const generateSMSVerificationCodeSuccess = createAction(
  '[sim-management] generateSMSVerificationCodeSuccess',
  emptyProps
);

export const generateSMSVerificationCodeFailure = createAction(
  '[sim-management] generateSMSVerificationCodeFailure',
  props<{
    error: string;
  }>()
);

export const getESimSwapSalesOrderId = createAction(
  '[sim-management] getESimSwapSalesOrderId',
  props<{
    msisdn: string;
    verificationCode: string;
  }>()
);

export const getESimSwapSalesOrderIdSuccess = createAction(
  '[sim-management] getESimSwapSalesOrderIdSuccess',
  props<{
    eSimSwapSalesOrderId: string;
  }>()
);

export const getESimSwapSalesOrderIdFailure = createAction(
  '[sim-management] getESimSwapSalesOrderIdFailure',
  props<{
    error: string;
  }>()
);

// Validate SIM
export const validateSim = createAction(
  '[sim-management] validateSim',
  props<{
    orderNumber: string;
    msisdn: string;
    iccid: string;
  }>()
);

export const validateSimSuccess = createAction(
  '[sim-management] validateSimSuccess',
  props<{ orderType: string; lineType: string }>()
);

export const validateSimFailure = createAction(
  '[sim-management] validateSimFailure',
  props<{
    error: string;
  }>()
);

// Activate
export const activateSim = createAction(
  '[sim-management] activateSim',
  props<{
    activationParams: ActivationParams;
  }>()
);

export const activateSimSuccess = createAction('[sim-management] activateSimSuccess');

export const activateSimFailure = createAction(
  '[sim-management] activateSimFailure',
  props<{
    error: string;
  }>()
);

// Set activation step
export const setActivationStep = createAction(
  '[sim-management] setActivationStep',
  props<{
    activationStep: ActivationStep;
  }>()
);

// Action result message
export const setActionResultMessage = createAction(
  '[sim-management] setActionResultMessage',
  props<{
    message: Message | undefined;
  }>()
);

// Deactivate E-Sim wearable
export const deactivateESimWearable = createAction(
  '[sim-management] deactivateESimWearable',
  props<{
    mobileLine: MobileLine;
  }>()
);

export const deactivateESimWearableSuccess = createAction(
  '[sim-management] deactivateESimWearableSuccess',
  props<{
    mobileLine: MobileLine;
  }>()
);

export const deactivateESimWearableFailure = createAction(
  '[sim-management] deactivateESimWearableFailure',
  props<{
    error: string;
  }>()
);
