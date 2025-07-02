import { DtvBoxManagementState } from './dtv-box-management.state';
import {
  dtvBoxManagementFeature,
  selectSubscriptionsWithDtvBoxes,
  selectAddresses,
  selectSelectedAddress,
  selectError,
  selectIsPinCodeReset,
  selectShowSecurityCode,
} from './dtv-box-management.selectors';

describe('DtvBoxManagement Selectors', () => {
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

  it('should select the feature state', () => {
    expect(dtvBoxManagementFeature.projector(state)).toEqual(state);
  });

  it('should select subscriptions', () => {
    expect(selectSubscriptionsWithDtvBoxes.projector(state)).toEqual(state.subscriptions);
  });

  it('should select addresses', () => {
    expect(selectAddresses.projector(state)).toEqual(state.addresses);
  });

  it('should select selected address', () => {
    expect(selectSelectedAddress.projector(state)).toEqual(state.selectedAddress);
  });

  it('should select error', () => {
    expect(selectError.projector(state)).toEqual(state.error);
  });

  it('should select isPinCodeReset', () => {
    expect(selectIsPinCodeReset.projector(state)).toEqual(state.isPinCodeReset);
  });

  it('should select showSecurityCode state', () => {
    expect(selectShowSecurityCode.projector(state)).toEqual(state.showSecurityCode);
  });
});
