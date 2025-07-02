import {
  selectAddressData,
  selectAddressStore,
  selectLocations,
  selectMarketingUrl,
  selectPrivacyPolicyUrl,
  selectSalesOrder,
  selectStreets,
  selectUserInput,
  selectNavsCheckResult,
  selectSearchCustomerResultType,
  selectError,
  selectSearchCustomerResultExists,
  selectSearchCustomerResultSoftMatchExists,
  selectOmapiProduct,
  selectDOB,
  selectBusinessIdentityDetails,
  selectLegalEntityDetails,
  selectItsMeParams,
  selectItsMeResponse,
  selectIsBelgianIdentity,
  selectLanguage,
} from './customer-registration.selectors';
import { customerRegistrationFactory } from './customer-registration.state.testfactory';
import { Municipality } from '../entities/interfaces/municipality.interface';
describe('selectors', () => {
  const initialtstate = customerRegistrationFactory.build();

  it('should select User Input from Store', () => {
    const result = selectUserInput.projector(initialtstate);

    expect(result).toEqual(initialtstate.userInput);
  });

  it('should select Privacy Policy from Store', () => {
    const result = selectPrivacyPolicyUrl.projector(initialtstate);

    const expected = 'www.privacy.be';

    expect(result).toEqual(expected);
  });

  it('should select Marketing Url from Store', () => {
    const result = selectMarketingUrl.projector(initialtstate);

    const expected = 'www.marketing.be';

    expect(result).toEqual(expected);
  });

  it('should select Locations from Store', () => {
    const result = selectLocations.projector(initialtstate);
    const locations: Municipality[] = [
      {
        postalCode: '2800',
        location: 'Mechelen',
      },
      {
        postalCode: '3000',
        location: 'Leuven',
      },
    ];
    expect(result).toEqual(locations);
  });

  it('should select Streets from Store', () => {
    const result = selectStreets.projector(initialtstate);
    const streets: string[] = ['olivetenvest', 'Korenmarkt', 'olivetenstraat'];
    expect(result).toEqual(streets);
  });

  it('should select Address Data from Store', () => {
    const result = selectAddressData.projector(initialtstate);

    expect(result).toEqual(initialtstate.address);
  });

  it('should select Address Store from Store', () => {
    const result = selectAddressStore.projector(initialtstate);

    expect(result).toEqual(initialtstate.addressStore);
  });

  it('should select Sales Order from Store', () => {
    const result = selectSalesOrder.projector(initialtstate);

    expect(result).toEqual(initialtstate.salesOrderRequestData);
  });

  it('should select NavsCheck result from Store', () => {
    const result = selectNavsCheckResult.projector(initialtstate);

    expect(result).toEqual(initialtstate.navsResult);
  });
  it('should select SearchCustomer Result from Store', () => {
    const result = selectSearchCustomerResultType.projector(initialtstate);

    expect(result).toEqual(initialtstate.searchCustomerResult.type);
  });

  it('should return true if SearchCustomer Result Exists', () => {
    const result = selectSearchCustomerResultExists.projector(initialtstate);

    expect(result).toBeFalsy();
  });

  it('should return true if SearchCustomer Result Soft Match Exists', () => {
    const result = selectSearchCustomerResultSoftMatchExists.projector(initialtstate);

    expect(result).toBeFalsy();
  });

  it('should select Omapi Product', () => {
    const result = selectOmapiProduct.projector(initialtstate);

    expect(result).toEqual([]);
  });

  it('should select Error from Store', () => {
    const result = selectError.projector(initialtstate);

    if (result) {
      expect(result.message).toEqual(initialtstate.error?.message);
      expect(result).toEqual(initialtstate.error?.error);
    }
  });

  it('should select DOB from Store', () => {
    const result = selectDOB.projector(initialtstate);

    if (result) {
      expect(result).toEqual(initialtstate.userInput.identityDetails.dateOfBirth);
    }
  });

  it('should select business identity details from Store', () => {
    const result = selectBusinessIdentityDetails.projector(initialtstate);

    if (result) {
      expect(result).toEqual(initialtstate.userInput.businessIdentityDetails);
    }
  });

  it('should select legal entity details from Store', () => {
    const result = selectLegalEntityDetails.projector(initialtstate);

    if (result) {
      expect(result).toEqual(initialtstate.legalEntityDetails);
    }
  });

  it('should select its me parameters from Store', () => {
    const result = selectItsMeParams.projector(initialtstate);

    expect(result).toEqual(initialtstate.itsMeParams);
  });

  it('should select its me parameters from Store', () => {
    const result = selectItsMeResponse.projector(initialtstate);

    expect(result).toEqual(initialtstate.itsMeResult);
  });

  it('should select is BelgianEid from Store', () => {
    const result = selectIsBelgianIdentity.projector(initialtstate);

    expect(result).toEqual(initialtstate.userInput.identityDetails.isBelgianIdentity);
  });

  it('should select is language from Store', () => {
    const result = selectLanguage.projector(initialtstate);

    expect(result).toEqual(initialtstate.language);
  });
});
