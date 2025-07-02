import { UrlRequestParameters } from '../interfaces/url-request-parameters.interface';
import { RawOmapiQueryProductInterfaceData } from '@telenet/ng-lib-omapi-query';
import { CustomerTypeEnum } from '../enums/customer-type.enum';
import { SalesOrderStateEnum } from '../enums/sales-order-state.enum';
import {
  setBillingAccounts,
  setContractSummaryUrl,
  setCustomerType,
  setOmapiQueryProducts,
  setPersonalIdentity,
  setReferrerUrl,
  setSalesOrderState,
  setUrlRequestParameters,
} from './hardware-checkout.actions';
import { hardwareCheckoutReducer } from './hardware-checkout.reducer';
import { defaultState } from './hardware-checkout.state';

describe('Hardware Checkout Reducer', () => {
  it('should return the default state when no action is passed', () => {
    const state = hardwareCheckoutReducer(undefined, { type: '' });
    expect(state).toEqual(defaultState);
  });

  it('should handle setUrlRequestParameters action', () => {
    const newUrlRequestParams: UrlRequestParameters = <UrlRequestParameters>{
      salesOffer: {},
      flow: '',
      source: '',
      intent: '',
    };
    const action = setUrlRequestParameters({ urlRequestParameters: newUrlRequestParams });

    const newState = hardwareCheckoutReducer(defaultState, action);

    expect(newState.urlRequestParameters).toEqual(newUrlRequestParams);
  });

  it('should handle setReferrerUrl action', () => {
    const referrerUrl = 'https://example.com';
    const action = setReferrerUrl({ referrerUrl });

    const newState = hardwareCheckoutReducer(defaultState, action);

    expect(newState.referrerUrl).toEqual(referrerUrl);
  });

  it('should handle setOmapiQueryProducts action', () => {
    const omapiProducts: RawOmapiQueryProductInterfaceData[] = [];
    const action = setOmapiQueryProducts({ omapiProducts });

    const newState = hardwareCheckoutReducer(defaultState, action);

    expect(newState.omapiQueryProducts).toEqual(omapiProducts);
  });

  it('should handle setBillingAccounts action', () => {
    const billingAccounts = [
      {
        id: 'BA12345',
        defaultBillingAccount: {
          name: 'Main Billing Account',
          id: 'DBA54321',
        },
        billingAddress: {
          formattedAddress: '123 Main St, Springfield, IL 62704, USA',
          name: 'John Doe',
          id: 'ADDR98765',
        },
      },
    ];
    const action = setBillingAccounts({ billingAccounts });

    const newState = hardwareCheckoutReducer(defaultState, action);

    expect(newState.billingAccounts).toEqual(billingAccounts);
  });

  it('should handle setContractSummaryUrl action', () => {
    const contractSummaryUrl = 'https://contract-summary-url.com';
    const action = setContractSummaryUrl({ contractSummaryUrl });

    const newState = hardwareCheckoutReducer(defaultState, action);

    expect(newState.contractSummaryUrl).toEqual(contractSummaryUrl);
  });

  it('should handle setSalesOrderState action', () => {
    const salesOrderState = SalesOrderStateEnum.SALES_ORDER_CREATED;
    const action = setSalesOrderState({ salesOrderState });

    const newState = hardwareCheckoutReducer(defaultState, action);

    expect(newState.salesOrderState).toEqual(salesOrderState);
  });

  it('should handle setCustomerType action', () => {
    const customerType = CustomerTypeEnum.RESIDENTIAL;
    const action = setCustomerType({ customerType });

    const newState = hardwareCheckoutReducer(defaultState, action);

    expect(newState.customerType).toEqual(customerType);
  });

  it('should handle setPersonalIdentity action', () => {
    const personalIdentity = {
      'First Name': 'John',
      'Last Name': 'Doe',
      'Phone Number': '123-456-7890',
      'Fixed Phone Number': '098-765-4321',
      'Mobile Number': '555-555-5555',
      'E-Mail': 'john.doe@example.com',
    };
    const action = setPersonalIdentity({ personalIdentity });

    const newState = hardwareCheckoutReducer(defaultState, action);

    expect(newState.personalIdentity).toEqual(personalIdentity);
  });
});
