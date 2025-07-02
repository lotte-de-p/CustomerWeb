import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TestBed } from '@angular/core/testing';
import { OrderConfiguratorFacade } from './order-configurator.facade';
import { customerAccount, offer } from '../+state/order-configurator.selectors';
import { getCustomerAccount, loadOfferFromUrl } from '../+state/order-configurator.actions';
import { defaultState } from '../+state/order-configurator.state';
import { CustomerAccountStatus, customerAccountTestfactory } from '@sales/order-configurator/customer-account/domain';
import { offerTestFactory } from '@sales/order-configurator/offer/domain';

describe('OrderConfiguratorFacade', () => {
  let store$: MockStore;
  let facade: OrderConfiguratorFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState: defaultState }), OrderConfiguratorFacade],
    });

    store$ = TestBed.inject(MockStore);
    facade = TestBed.inject(OrderConfiguratorFacade);

    jest.spyOn(store$, 'dispatch');
  });

  it('should dispatch loadOfferFromUrl action', () => {
    facade.loadOfferFromUrl();
    expect(store$.dispatch).toHaveBeenCalledWith(loadOfferFromUrl());
  });

  it('should dispatch getCustomerAccount action', () => {
    facade.loadCustomerAccount();
    expect(store$.dispatch).toHaveBeenCalledWith(getCustomerAccount());
  });

  it('should return true if installation address step is required', (done) => {
    const newCustomerAccount = customerAccountTestfactory.build({ status: CustomerAccountStatus.Active });
    const internetOffer = offerTestFactory.build();
    store$.overrideSelector(customerAccount, newCustomerAccount);
    store$.overrideSelector(offer, internetOffer);

    facade.isInstallationAddressStepRequired().subscribe((result) => {
      expect(result).toBe(true);
      done();
    });
  });

  it('should return false if customer account is new', (done) => {
    const newCustomerAccount = customerAccountTestfactory.build();
    const internetOffer = offerTestFactory.build(offerTestFactory.build());
    store$.overrideSelector(customerAccount, newCustomerAccount);
    store$.overrideSelector(offer, internetOffer);

    facade.isInstallationAddressStepRequired().subscribe((result) => {
      expect(result).toBe(false);
      done();
    });
  });

  it('should return false if offer does not require installation', (done) => {
    const activeCustomerAccount = customerAccountTestfactory.build({ status: CustomerAccountStatus.Active });
    const nonInstallableoffer = offerTestFactory.build({ requiresInstallation: () => false });
    store$.overrideSelector(customerAccount, activeCustomerAccount);
    store$.overrideSelector(offer, nonInstallableoffer);

    facade.isInstallationAddressStepRequired().subscribe((result) => {
      expect(result).toBe(false);
      done();
    });
  });

  it('should return false if customer account is undefined', (done) => {
    const installationOffer = offerTestFactory.build({ requiresInstallation: () => true });
    store$.overrideSelector(customerAccount, undefined);
    store$.overrideSelector(offer, installationOffer);

    facade.isInstallationAddressStepRequired().subscribe((result) => {
      expect(result).toBe(false);
      done();
    });
  });

  it('should return false if offer is undefined', (done) => {
    const activeCustomerAccount = customerAccountTestfactory.build({ isNewCustomer: () => false });
    store$.overrideSelector(customerAccount, activeCustomerAccount);
    store$.overrideSelector(offer, undefined);

    facade.isInstallationAddressStepRequired().subscribe((result) => {
      expect(result).toBe(false);
      done();
    });
  });
});
