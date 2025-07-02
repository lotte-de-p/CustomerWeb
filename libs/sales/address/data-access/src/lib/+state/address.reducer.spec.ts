import { addressStateTestFactory, antwerpAddressTestFactyory } from './address-state.testfactory';
import { addressReducer } from './address.reducer';
import { setInstallationAddresses, setSelectedAddress } from './address.actions';

describe('Address reducer', () => {
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
    const addresses = initialState.addresses || [];
    expect(addresses[1].selected).toBeFalsy();

    const actualState = addressReducer(
      initialState,
      setSelectedAddress({ selectedAddress: antwerpAddressTestFactyory.build() })
    );
    const actualAddresses = actualState.addresses || [];

    expect(actualAddresses[1].selected).toBeTruthy();
  });

  it('should set the list of addresses', () => {
    const newAddresses = [antwerpAddressTestFactyory.build()];
    const actualState = addressReducer(initialState, setInstallationAddresses({ addresses: newAddresses }));

    expect(actualState.addresses).toEqual(newAddresses);
  });
});
