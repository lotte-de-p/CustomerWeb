import { CustomerRegistrationState } from './customer-registration.state';
import { selectIsPIDEnabledForBusiness } from './customer-registration.factory.selectors';
import { customerRegistrationFactory } from './customer-registration.state.testfactory';

describe('customer registration factory selectors', () => {
  let initialState: CustomerRegistrationState = customerRegistrationFactory.build();

  function pidDisabled() {
    return customerRegistrationFactory.build({
      authorConfiguration: {
        isPIDEnabled: false,
      },
    });
  }

  it('should return true when pid for business is enabled', () => {
    const result = selectIsPIDEnabledForBusiness(true).projector(initialState);

    expect(result).toEqual(true);
  });

  it('should return false when pid for business is disabled', () => {
    initialState = pidDisabled();

    const result = selectIsPIDEnabledForBusiness(true).projector(initialState);

    expect(result).toEqual(false);
  });

  it('should return false when pid is enabled for residential', () => {
    const result = selectIsPIDEnabledForBusiness(false).projector(initialState);

    expect(result).toEqual(false);
  });

  it('should return false when pid is disabled', () => {
    initialState = pidDisabled();

    const result = selectIsPIDEnabledForBusiness(false).projector(initialState);

    expect(result).toEqual(false);
  });
});
