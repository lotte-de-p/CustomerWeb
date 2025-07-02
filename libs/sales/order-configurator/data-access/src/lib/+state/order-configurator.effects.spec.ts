import { TestBed } from '@angular/core/testing';
import { OrderConfiguratorEffects } from './order-configurator.effects';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  getCustomerAccount,
  loadOfferFromUrl,
  orderOnAddressSuccess,
  setCustomerAccount,
  setError,
  setOffer,
} from './order-configurator.actions';
import { of, throwError } from 'rxjs';
import { CustomerAccountFacade, customerAccountTestfactory } from '@sales/order-configurator/customer-account/domain';
import {
  InstallationAddressFacade,
  orderResultInterfaceTestFactory,
} from '@sales/order-configurator/domain-installation-address';
import { OfferFacade, offerTestFactory } from '@sales/order-configurator/offer/domain';

describe('OrderConfiguratorEffects', () => {
  let actions$: Actions;
  let effects: OrderConfiguratorEffects;
  let installationAddressFacade: jest.Mocked<InstallationAddressFacade>;
  let offerFacade: jest.Mocked<OfferFacade>;
  let customerAccountFacade: jest.Mocked<CustomerAccountFacade>;

  beforeEach(() => {
    const installationAddressFacadeMock = {
      prepareOrderForNewCustomer: jest.fn(),
    };
    const offerFacadeMock = {
      getOfferFromEncodedUrlParameter: jest.fn(),
    };
    const customerAccountFacadeMock = {
      getCustomerAccount: jest.fn(),
    };

    TestBed.configureTestingModule({
      providers: [
        OrderConfiguratorEffects,
        provideMockActions(() => actions$),
        { provide: InstallationAddressFacade, useValue: installationAddressFacadeMock },
        { provide: OfferFacade, useValue: offerFacadeMock },
        { provide: CustomerAccountFacade, useValue: customerAccountFacadeMock },
      ],
    });

    effects = TestBed.inject(OrderConfiguratorEffects);
    installationAddressFacade = TestBed.inject(InstallationAddressFacade) as jest.Mocked<InstallationAddressFacade>;
    offerFacade = TestBed.inject(OfferFacade) as jest.Mocked<OfferFacade>;
    customerAccountFacade = TestBed.inject(CustomerAccountFacade) as jest.Mocked<CustomerAccountFacade>;
  });

  describe('prepareOrderConfiguratorFlowForNewCustomer$', () => {
    it('should handle new customer order successfully', (done) => {
      const customerAccount = customerAccountTestfactory.build();
      const action = setCustomerAccount({ customerAccount });
      const expectedAction = orderOnAddressSuccess({ orderResult: orderResultInterfaceTestFactory.build() });

      installationAddressFacade.prepareOrderForNewCustomer.mockReturnValue(of(orderResultInterfaceTestFactory.build()));

      actions$ = of(action);
      effects.prepareOrderConfiguratorFlowForNewCustomer$.subscribe((action) => {
        expect(action).toEqual(expectedAction);
        done();
      });
    });
    it('should handle new customer order successfully', (done) => {
      const customerAccount = customerAccountTestfactory.build();
      const action = setCustomerAccount({ customerAccount });

      const error = new Error('Failed to prepare order');
      const errorDetails = {
        message: 'Failed to prepare order',
        stack: error.stack || undefined,
        name: 'Order Configurator Error',
      };

      installationAddressFacade.prepareOrderForNewCustomer.mockReturnValue(throwError(() => error));

      actions$ = of(action);
      effects.prepareOrderConfiguratorFlowForNewCustomer$.subscribe((action) => {
        expect(action).toEqual(setError({ error: errorDetails }));
        done();
      });
    });
  });

  describe('loadOfferFromUrl$', () => {
    it('should load offer from URL successfully', (done) => {
      const action = loadOfferFromUrl();
      const internetOffer = offerTestFactory.build();
      const expectedAction = setOffer({ offer: internetOffer });

      offerFacade.getOfferFromEncodedUrlParameter.mockReturnValue(of(internetOffer));

      actions$ = of(action);
      effects.loadOfferFromUrl$.subscribe((action) => {
        expect(action).toEqual(expectedAction);
        done();
      });
    });

    it('should handle error when loading offer from URL', (done) => {
      const action = loadOfferFromUrl();

      const error = new Error('Failed to load offer');
      const errorDetails = {
        message: 'Failed to load offer',
        stack: error.stack || undefined,
        name: 'Order Configurator Error',
      };

      offerFacade.getOfferFromEncodedUrlParameter.mockReturnValue(throwError(() => error));

      actions$ = of(action);
      effects.loadOfferFromUrl$.subscribe((action) => {
        expect(action).toEqual(setError({ error: errorDetails }));
        done();
      });
    });
  });

  describe('getCustomerAccount', () => {
    it('should get customer account successfully', (done) => {
      const action = getCustomerAccount();
      const newCustomerAccount = customerAccountTestfactory.build();
      const expectedAction = setCustomerAccount({ customerAccount: newCustomerAccount });

      customerAccountFacade.getCustomerAccount.mockReturnValue(of(newCustomerAccount));

      actions$ = of(action);
      effects.getCustomerAccount$.subscribe((action) => {
        expect(action).toEqual(expectedAction);
        done();
      });
    });

    it('should handle error when getting customer account', (done) => {
      const action = getCustomerAccount();

      const error = new Error('Failed to get customer account');
      const errorDetails = {
        message: 'Failed to get customer account',
        stack: error.stack || undefined,
        name: 'Order Configurator Error',
      };

      customerAccountFacade.getCustomerAccount.mockReturnValue(throwError(() => error));

      actions$ = of(action);
      effects.getCustomerAccount$.subscribe((action) => {
        expect(action).toEqual(setError({ error: errorDetails }));
        done();
      });
    });
  });
});
