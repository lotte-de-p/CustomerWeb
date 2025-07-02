import { simManagementReducer } from './sim-management.reducer';
import {
  loadHouseholdUsers,
  loadHouseholdUsersSuccess,
  loadHouseholdUsersFailure,
  setMobileLineName,
  setMobileLineNameSuccess,
  setMobileLineNameFailure,
  blockMobileLine,
  blockMobileLineSuccess,
  blockMobileLineFailure,
  unblockMobileLineFailure,
  unblockMobileLineSuccess,
  unblockMobileLine,
  loadMobileLinesSuccess,
  assignMobileLineFailure,
  deactivateESimWearableFailure,
  deactivateESimWearableSuccess,
} from './sim-management.actions';
import { MobileLine } from '../entities/mobile-line.interface';
import { User } from '../entities/user.interface';
import { SimManagementState } from './sim-management.state';
import { MessageType } from '../enums/message-type.enum';
import { ActivationStep } from '../enums/activation-step.enum';

describe('SimManagementReducer', () => {
  let initialState: SimManagementState;

  const mobileLines: MobileLine[] = require('../mock/mobile-lines-mock.json');
  const householdUsers: User[] = require('../mock/household-users-mock.json');
  const mobileLine: MobileLine = require('../mock/mobile-line-mock.json');

  beforeEach(() => {
    initialState = {
      mobileLines: mobileLines,
      selectedMobileLine: mobileLine,
      householdUsers: householdUsers,
      loginDetails: undefined,
      simSwapSalesOrderId: undefined,
      eSimSwapSalesOrderId: undefined,
      isLoading: false,
      actionResultMessage: undefined,
      activationStep: ActivationStep.VALIDATION,
      lineType: undefined,
      orderType: undefined,
    };
  });

  it('should handle loadHouseholdUsers', () => {
    const action = loadHouseholdUsers({ mobileLine: mobileLine });
    const state = simManagementReducer(initialState, action);

    expect(state.isLoading).toBe(true);
  });

  it('should handle loadHouseholdUsersSuccess', () => {
    const action = loadHouseholdUsersSuccess({ householdUsers: householdUsers });
    const state = simManagementReducer(initialState, action);

    expect(state.householdUsers).toEqual(householdUsers);
    expect(state.isLoading).toBe(false);
  });

  it('should handle loadHouseholdUsersFailure', () => {
    const action = loadHouseholdUsersFailure({ error: 'error' });
    const state = simManagementReducer(initialState, action);

    expect(state.actionResultMessage).toEqual({
      type: MessageType.ERROR,
      text: 'ng.sim-management.error.get-household-users-message',
    });

    expect(state.isLoading).toBe(false);
  });

  it('should handle setMobileLineName', () => {
    const action = setMobileLineName({ mobileLine: mobileLine, name: 'New Name' });
    const state = simManagementReducer(initialState, action);

    expect(state.isLoading).toBe(false);
    expect(state.actionResultMessage).toBe(undefined);
  });

  it('should handle setMobileLineNameSuccess', () => {
    const action = setMobileLineNameSuccess({ mobileLine: mobileLine });
    const state = simManagementReducer(initialState, action);

    expect(state.selectedMobileLine).toEqual(mobileLine);
    expect(state.isLoading).toBe(false);
    expect(state.actionResultMessage).toBe(undefined);
  });

  it('should handle setMobileLineNameFailure', () => {
    const action = setMobileLineNameFailure({ error: 'error' });
    const state = simManagementReducer(initialState, action);

    expect(state.actionResultMessage).toEqual({
      type: MessageType.ERROR,
      text: 'ng.sim-management.error.set-nickname-error-message',
    });
    expect(state.isLoading).toBe(false);
  });

  it('should handle blockMobileLine', () => {
    const action = blockMobileLine({ mobileLine: mobileLine });
    const state = simManagementReducer(initialState, action);

    expect(state.isLoading).toBe(true);
    expect(state.actionResultMessage).toBe(undefined);
  });

  it('should handle blockMobileLineSuccess by updating selectedMobileLine', () => {
    const action = blockMobileLineSuccess({ mobileLine: mobileLine });
    const state = simManagementReducer(initialState, action);

    expect(state.selectedMobileLine?.isSuspended).toEqual(true);
    expect(state.isLoading).toBe(false);
    expect(state.actionResultMessage).toEqual({
      type: MessageType.SUCCESS,
      text: 'ng.sim-management.info.sim-block-confirmation-message',
    });
  });

  it('should handle blockMobileLineFailure by setting actionResultMessage', () => {
    const action = blockMobileLineFailure({ error: 'error' });
    const state = simManagementReducer(initialState, action);

    expect(state.actionResultMessage).toEqual({
      type: MessageType.ERROR,
      text: 'ng.sim-management.error.sim-block-error-message',
    });
    expect(state.isLoading).toBe(false);
  });

  it('should handle unblockMobileLine', () => {
    const action = unblockMobileLine({ mobileLine: mobileLine });
    const state = simManagementReducer(initialState, action);

    expect(state.isLoading).toBe(true);
    expect(state.actionResultMessage).toBe(undefined);
  });

  it('should handle unblockMobileLineSuccess by updating selectedMobileLine', () => {
    const action = unblockMobileLineSuccess({ mobileLine: mobileLine });
    const state = simManagementReducer(initialState, action);

    expect(state.selectedMobileLine?.isSuspended).toEqual(false);
    expect(state.isLoading).toBe(false);
    expect(state.actionResultMessage).toEqual({
      type: MessageType.SUCCESS,
      text: 'ng.sim-management.info.sim-unblock-confirmation-message',
    });
  });

  it('should handle unblockMobileLineFailure by setting actionResultMessage', () => {
    const action = unblockMobileLineFailure({ error: 'error' });
    const state = simManagementReducer(initialState, action);

    expect(state.actionResultMessage).toEqual({
      type: MessageType.ERROR,
      text: 'ng.sim-management.error.sim-unblock-error-message',
    });
    expect(state.isLoading).toBe(false);
  });

  it('should handle assignMobileLineFailure by setting actionResultMessage', () => {
    const action = assignMobileLineFailure({ error: 'error' });
    const state = simManagementReducer(initialState, action);

    expect(state.actionResultMessage).toEqual({
      type: MessageType.ERROR,
      text: 'ng.sim-management.error.assign-sim-error-message',
    });
    expect(state.isLoading).toBe(false);
  });

  it('should update the selectedMobileLine with the new identityId and set the actionResultMessage', () => {
    const action = loadMobileLinesSuccess({ mobileLines: [] });
    const expectedState: Partial<SimManagementState> = {
      ...initialState,
      actionResultMessage: {
        type: MessageType.ERROR,
        text: 'ng.mobile-line-selector.no-lines',
      },
      isLoading: false,
    };

    const result = simManagementReducer(initialState, action);

    expect(result.actionResultMessage).toEqual(expectedState.actionResultMessage);
    expect(result.isLoading).toEqual(expectedState.isLoading);
  });

  it('should handle deactivateESimWearableSuccess by updating selectedMobileLine', () => {
    const action = deactivateESimWearableSuccess({ mobileLine: mobileLine });
    const state = simManagementReducer(initialState, action);

    expect(state.selectedMobileLine?.isSuspended).toEqual(true);
    expect(state.isLoading).toBe(false);
    expect(state.actionResultMessage).toEqual({
      type: MessageType.SUCCESS,
      text: 'ng.sim-management.info.deactivate-e-sim-wearable-success-message',
    });
  });

  it('should handle deactivateESimWearableFailure by setting actionResultMessage', () => {
    const action = deactivateESimWearableFailure({ error: 'error' });
    const state = simManagementReducer(initialState, action);

    expect(state.selectedMobileLine?.isSuspended).toEqual(false);
    expect(state.actionResultMessage).toEqual({
      type: MessageType.ERROR,
      text: 'ng.sim-management.error.deactivate-e-sim-wearable-error-message',
    });
    expect(state.isLoading).toBe(false);
  });
});
