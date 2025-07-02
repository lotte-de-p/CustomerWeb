import { addressStateTestFactory } from './address-state.testfactory';
import { addressReducer } from './address.reducer';
import { setInstallationAddresses, setSelectedAddress } from './address.actions';
import { antwerpAddressTestFactory } from '@sales/order-configurator/domain-installation-address';

describe('Feat installation address reducer', () => {
  const initialState = addressStateTestFactory.build();

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {
        type: 'Unknown',
      };

      const state = addressReducer(initialState, action);

      expect(state).toBe(initialState);
      expect(state.addresses).toHaveLength(3);
    });
  });

  it('should set correct address as selected', () => {
    let selectedAddress = initialState.selectedAddress;
    // set selected installation address
    expect(selectedAddress).toBeUndefined();

    const actualState = addressReducer(
      initialState,
      setSelectedAddress({ selectedAddress: antwerpAddressTestFactory.build() })
    );
    selectedAddress = actualState.selectedAddress;

    expect(selectedAddress).toBeTruthy();
  });

  it('should set the list of addresses', () => {
    const newAddresses = [antwerpAddressTestFactory.build()];
    const actualState = addressReducer(initialState, setInstallationAddresses({ addresses: newAddresses }));

    expect(actualState.addresses).toEqual(newAddresses);
  });
});
