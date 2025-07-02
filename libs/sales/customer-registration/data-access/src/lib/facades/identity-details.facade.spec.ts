import { IdentityDetailsFacade } from './identity-details.facade';
import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { IdentityDetails } from '../+state/customer-registration.state';
import {
  loginAction,
  preformResidentialSearchCustomerAction,
  saveIdentityDetailsAction,
} from '../+state/customer-registration.actions';

describe('IdentityDetailsFacade', () => {
  let facade: IdentityDetailsFacade;
  let store$: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore(), { provide: 'Window', useValue: window }],
    });

    facade = TestBed.inject(IdentityDetailsFacade);
    store$ = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(facade).toBeTruthy();
  });

  describe('saveIdentityDetails', () => {
    it('should dispatch a saveIdentityDetailsAction with a payload', () => {
      jest.spyOn(store$, 'dispatch');
      const identityDetails = {} as IdentityDetails;
      facade.saveIdentityDetails(identityDetails);
      expect(store$.dispatch).toHaveBeenCalledWith(saveIdentityDetailsAction(identityDetails));
    });
  });
  describe('searchResidentialCustomer', () => {
    it('should dispatch a performSearchResidentialCustomerAction', () => {
      jest.spyOn(store$, 'dispatch');
      facade.searchResidentialCustomer();
      expect(store$.dispatch).toHaveBeenCalledWith(preformResidentialSearchCustomerAction());
    });
  });
  describe('login', () => {
    it('should dispatch a loginAction', () => {
      jest.spyOn(store$, 'dispatch');
      facade.login();
      expect(store$.dispatch).toHaveBeenCalledWith(loginAction());
    });
  });
});
