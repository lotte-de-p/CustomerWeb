import { dtvBoxManagementReducer } from './dtv-box-management.reducer';
import {
  loadSubscriptions,
  loadSubscriptionsSuccess,
  loadSubscriptionsFailure,
  loadAddresses,
  loadAddressesSuccess,
  loadAddressesFailure,
  setSelectedAddress,
  resetPinCode,
  resetPinCodeSuccess,
  resetPinCodeFailure,
  showSecurityCode,
} from './dtv-box-management.actions';
import { DtvBoxManagementState } from './dtv-box-management.state';

describe('DtvBoxManagement Reducer', () => {
  let state: DtvBoxManagementState;

  beforeEach(() => {
    state = {
      subscriptions: require('../mock/subscriptions-mock.json'),
      addresses: require('../mock/addresses-mock.json'),
      selectedAddress: require('../mock/addresses-mock.json')[0],
      selectedAddressDevices: require('../mock/devices-mock.json'),
      error: undefined,
      isLoading: true,
      isPinCodeReset: false,
      showSecurityCode: false,
    };
  });

  it('should handle loadSubscriptions action', () => {
    const result = dtvBoxManagementReducer(state, loadSubscriptions());
    expect(result.isLoading).toBe(true);
  });

  it('should handle loadSubscriptionsSuccess action', () => {
    const result = dtvBoxManagementReducer(state, loadSubscriptionsSuccess({ subscriptions: state.subscriptions }));
    expect(result.subscriptions).toEqual(state.subscriptions);
    expect(result.isLoading).toBe(false);
  });

  it('should handle loadSubscriptionsFailure action', () => {
    const error = new Error('Error loading subscriptions');
    const result = dtvBoxManagementReducer(state, loadSubscriptionsFailure({ error }));
    expect(result.error).toEqual(error);
    expect(result.isLoading).toBe(false);
  });

  it('should handle loadAddresses action', () => {
    const result = dtvBoxManagementReducer(state, loadAddresses());
    expect(result.isLoading).toBe(true);
  });

  it('should handle loadAddressesSuccess action', () => {
    const result = dtvBoxManagementReducer(state, loadAddressesSuccess({ addresses: state.addresses }));
    expect(result.addresses).toEqual(state.addresses);
    expect(result.isLoading).toBe(false);
  });

  it('should handle loadAddressesFailure action', () => {
    const error = new Error('Error loading addresses');
    const result = dtvBoxManagementReducer(state, loadAddressesFailure({ error }));
    expect(result.error).toEqual(error);
    expect(result.isLoading).toBe(false);
  });

  it('should handle setSelectedAddress action', () => {
    const address = state.addresses[0];
    const result = dtvBoxManagementReducer(state, setSelectedAddress({ address: state.addresses[0] }));
    expect(result.selectedAddress).toEqual(address);
  });

  it('should handle resetPinCode action', () => {
    const result = dtvBoxManagementReducer(state, resetPinCode({ identifier: '1' }));
    expect(result.isLoading).toBe(true);
    expect(result.isPinCodeReset).toBe(false);
  });

  it('should handle resetPinCodeSuccess action', () => {
    const result = dtvBoxManagementReducer(state, resetPinCodeSuccess());
    expect(result.isLoading).toBe(false);
    expect(result.isPinCodeReset).toBe(true);
  });

  it('should handle resetPinCodeFailure action', () => {
    const error = new Error('Error resetting pin code');
    const result = dtvBoxManagementReducer(state, resetPinCodeFailure({ error }));
    expect(result.error).toEqual(error);
    expect(result.isLoading).toBe(false);
    expect(result.isPinCodeReset).toBe(false);
  });

  it('should handle showSecurityCode action', () => {
    const result = dtvBoxManagementReducer(state, showSecurityCode());
    expect(result.showSecurityCode).toBe(true);
  });
});
