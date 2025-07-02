import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TestBed } from '@angular/core/testing';
import { InstallationAddressFacade } from './installation-address.facade';
import { antwerpAddressTestFactyory } from '../+state/address-state.testfactory';
import { setSelectedAddress } from '../+state/address.actions';

describe('Installation address facade', () => {
  let facade: InstallationAddressFacade;
  let store$: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()],
    });

    store$ = TestBed.inject(MockStore);
    facade = TestBed.inject(InstallationAddressFacade);

    jest.spyOn(store$, 'dispatch');
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  describe('selectAddress', () => {
    it('should dispatch action to set selected installation address', () => {
      const address = antwerpAddressTestFactyory.build();
      facade.selectAddress(address);

      expect(store$.dispatch).toHaveBeenCalledWith(setSelectedAddress({ selectedAddress: address }));
    });
  });

  describe('observables', () => {
    it('should be defined', () => {
      expect(facade.editableAddress$).toBeDefined();
      expect(facade.addresses$).toBeDefined();
    });
  });
});
