import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MobileLine } from '../entities/mobile-line.interface';
import { SimManagementFacade } from './sim-management.facade';
import { SimManagementNgrxModule } from './sim-management-ngrx.module';

import { MockStore, provideMockStore } from '@ngrx/store/testing';
import {
  assignMobileLine,
  blockMobileLine,
  loadHouseholdUsers,
  loadMobileLines,
  setLoginDetails,
  setMobileLineName,
  setSelectedMobileLine,
  unblockMobileLine,
} from './sim-management.actions';
import { LoginDetails } from '@telenet/ng-lib-ocapi';
import { HttpClientModule } from '@angular/common/http';

describe('SimManagementFacade', () => {
  let facade: SimManagementFacade;
  let store$: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(), EffectsModule.forRoot(), HttpClientModule, SimManagementNgrxModule],
      providers: [
        SimManagementFacade,
        provideMockStore(),
        {
          provide: 'Window',
          useValue: window,
        },
      ],
    });
    store$ = TestBed.inject(MockStore);
    facade = TestBed.inject(SimManagementFacade);
    jest.spyOn(store$, 'dispatch');
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should dispatch loadMobileLines action', () => {
    facade.loadMobileLines();
    expect(store$.dispatch).toHaveBeenCalledWith(loadMobileLines());
  });

  it('should dispatch loadHouseHoldUsers action', () => {
    facade.loadHouseHoldUsers({} as MobileLine);
    expect(store$.dispatch).toHaveBeenCalledWith(loadHouseholdUsers({ mobileLine: {} as MobileLine }));
  });

  it('should dispatch setSelectedMobileLine action', () => {
    facade.setSelectedMobileLine({} as MobileLine);
    expect(store$.dispatch).toHaveBeenCalledWith(setSelectedMobileLine({ mobileLine: {} as MobileLine }));
  });

  it('should dispatch setLoginDetails action', () => {
    facade.setLoginDetails({} as LoginDetails);
    expect(store$.dispatch).toHaveBeenCalledWith(setLoginDetails({ loginDetails: {} as LoginDetails }));
  });

  it('should dispatch setMobileLineName action', () => {
    facade.setMobileLineName({} as MobileLine, 'name');
    expect(store$.dispatch).toHaveBeenCalledWith(setMobileLineName({ mobileLine: {} as MobileLine, name: 'name' }));
  });

  it('should dispatch blockMobileLine action', () => {
    facade.blockMobileLine({} as MobileLine);
    expect(store$.dispatch).toHaveBeenCalledWith(blockMobileLine({ mobileLine: {} as MobileLine }));
  });

  it('should dispatch unblockMobileLine action', () => {
    facade.unblockMobileLine({} as MobileLine);
    expect(store$.dispatch).toHaveBeenCalledWith(unblockMobileLine({ mobileLine: {} as MobileLine }));
  });

  it('should dispatch assignMobileLine action', () => {
    facade.assignMobileLine({} as MobileLine, 'id');
    expect(store$.dispatch).toHaveBeenCalledWith(assignMobileLine({ mobileLine: {} as MobileLine, identityId: 'id' }));
  });
});
