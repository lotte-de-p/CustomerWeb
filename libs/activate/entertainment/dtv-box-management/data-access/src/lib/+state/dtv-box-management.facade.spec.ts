import { DtvBoxManagementFacade } from './dtv-box-management.facade';
import {
  loadSubscriptions,
  loadAddresses,
  resetPinCode,
  showSecurityCode,
  setSelectedAddress,
} from './dtv-box-management.actions';
import { TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Address } from '../entities/address.model';

describe('DtvBoxManagementFacade', () => {
  let store$: MockStore;
  let facade: DtvBoxManagementFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DtvBoxManagementFacade, provideMockStore()],
    });

    store$ = TestBed.inject(MockStore);
    facade = TestBed.inject(DtvBoxManagementFacade);

    jest.spyOn(store$, 'dispatch');
  });

  it('should dispatch loadSubscriptions action', () => {
    facade.loadSubscriptions();
    expect(store$.dispatch).toHaveBeenCalledWith(loadSubscriptions());
  });

  it('should dispatch loadAddresses action', () => {
    facade.loadAddresses();
    expect(store$.dispatch).toHaveBeenCalledWith(loadAddresses());
  });

  it('should dispatch resetPinCode action', () => {
    facade.resetPinCode('identifier');
    expect(store$.dispatch).toHaveBeenCalledWith(resetPinCode({ identifier: 'identifier' }));
  });

  it('should dispatch showSecurityCode action', () => {
    facade.showSecurityCode();
    expect(store$.dispatch).toHaveBeenCalledWith(showSecurityCode());
  });

  it('should dispatch setSelectedAddress action', () => {
    facade.setSelectedAddress({} as Address);
    expect(store$.dispatch).toHaveBeenCalledWith(setSelectedAddress({ address: {} as Address }));
  });
});
