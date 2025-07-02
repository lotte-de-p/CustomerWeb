import { installationTypes, selectedDeliveryMethod } from './installation-type.selectors';
import { defaultState, InstallationTypeState } from './installation-type.state';

describe('installationType selectors', () => {
  const initialState: InstallationTypeState = defaultState;

  it('should select installation types from state', () => {
    const result = installationTypes.projector(initialState);
    expect(result).toEqual(initialState.installationTypes);
  });

  it('should select selected delivery method from state', () => {
    const result = selectedDeliveryMethod.projector(initialState);
    expect(result).toEqual(initialState.selectedDeliveryMethod);
  });

  it('should return undefined for selected delivery method if not set', () => {
    const stateWithoutSelectedDeliveryMethod: InstallationTypeState = {
      ...initialState,
      selectedDeliveryMethod: undefined,
    };
    const result = selectedDeliveryMethod.projector(stateWithoutSelectedDeliveryMethod);
    expect(result).toBeUndefined();
  });

  it('should return empty array for installation types if not set', () => {
    const emptyInstallationTypes = { list: [], totalAmountOfOptions: 0 };
    const stateWithoutInstallationTypes: InstallationTypeState = {
      ...initialState,
      installationTypes: emptyInstallationTypes,
    };
    const result = installationTypes.projector(stateWithoutInstallationTypes);
    expect(result).toEqual(emptyInstallationTypes);
  });
});
