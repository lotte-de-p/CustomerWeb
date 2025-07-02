import { setDeliveryMethod } from './installation-type.actions';
import { installationTypeReducer } from './installation-type.reducer';
import { defaultState, InstallationTypeState } from './installation-type.state';
import {
  createDeliveryMethod,
  rawInstallationTypeOptionHomeDeliveryTestFactory,
} from '@sales/order-configurator/installation-type/domain';
import { Action } from '@ngrx/store';

describe('installationTypeReducer', () => {
  it('should set the delivery method correctly', () => {
    const initialState: InstallationTypeState = { ...defaultState, selectedDeliveryMethod: undefined };
    const deliveryMethod = createDeliveryMethod(rawInstallationTypeOptionHomeDeliveryTestFactory.build());
    const action = setDeliveryMethod({ deliveryMethod });

    const newState = installationTypeReducer(initialState, action);

    expect(newState.selectedDeliveryMethod).toEqual(deliveryMethod);
  });

  it('should not modify state for unknown action', () => {
    const initialState: InstallationTypeState = { ...defaultState, selectedDeliveryMethod: undefined };
    const action = { type: 'UNKNOWN_ACTION' } as Action;

    const newState = installationTypeReducer(initialState, action);

    expect(newState).toEqual(initialState);
  });

  it('should handle initial state when state is undefined', () => {
    const deliveryMethod = createDeliveryMethod(rawInstallationTypeOptionHomeDeliveryTestFactory.build());
    const action = setDeliveryMethod({ deliveryMethod });

    const newState = installationTypeReducer(undefined, action);

    expect(newState.selectedDeliveryMethod).toEqual(deliveryMethod);
  });
});
