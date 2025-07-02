import { TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { NavsIdentityDetailsFacade } from './navs-identity-details.facade';
import {
  SetAddressStoreAction,
  finalizeFlowAction,
  getAddressAction,
  getBoxNoAction,
  getSubHouseNoAction,
  performResidentialNavsCheckAction,
  preformResidentialSearchCustomerAction,
  resetSearchCustomerSuccessAction,
  saveIdentityDetailsAction,
  savePersonalDetailsAction,
} from '../+state/customer-registration.actions';
import { AddressService } from '../infrastructure/address.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Municipality } from '../entities/interfaces/municipality.interface';
import { customerRegistrationFactory } from '../+state/customer-registration.state.testfactory';
import { AddressRequestInterface } from '../entities/interfaces/address-request.interface';
import { AddressStoreInterface } from '../entities/interfaces/address-store.interface';

describe('NavsIdentityDetailsFacade', () => {
  let facade: NavsIdentityDetailsFacade;
  let store$: Store;
  let addressService: AddressService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}), HttpClientTestingModule],
      providers: [
        NavsIdentityDetailsFacade,
        {
          provide: 'Window',
          useValue: Window,
        },
      ],
    });

    addressService = TestBed.inject<AddressService>(AddressService);
    facade = TestBed.inject(NavsIdentityDetailsFacade);
    store$ = TestBed.inject(Store);

    jest.spyOn(store$, 'dispatch');
  });

  it('should dispatch performResidentialNavsCheckAction when performResidentialNavsCheck is called', () => {
    facade.performResidentialNavsCheck();
    expect(store$.dispatch).toHaveBeenCalledWith(performResidentialNavsCheckAction());
  });

  describe('getMunicipalities', () => {
    it('should get the municipalities', (done) => {
      const mockMunicipalities: Municipality[] = [
        { location: 'Municipality1', postalCode: '1000' },
        { location: 'Municipality2', postalCode: '2000' },
      ];

      jest.spyOn(addressService, 'getMunicipalities').mockReturnValue(of(mockMunicipalities));

      facade.getMunicipalities().subscribe((municipalities) => {
        expect(municipalities).toEqual(mockMunicipalities);
        done();
      });
    });
  });

  describe('getStreets', () => {
    it('should get the streets', (done) => {
      const mockStreets: string[] = ['street1', 'street2'];

      jest.spyOn(addressService, 'getStreets').mockReturnValue(of(mockStreets));

      facade.getStreets('1000').subscribe((streets) => {
        expect(streets).toEqual(mockStreets);
        done();
      });
    });
  });

  describe('searchCustomer', () => {
    it('should dispatch searchCustomer action', () => {
      jest.spyOn(store$, 'dispatch');
      facade.searchCustomer();
      expect(store$.dispatch).toHaveBeenCalledWith(preformResidentialSearchCustomerAction());
    });
  });

  describe('resetSearchCustomer', () => {
    it('should dispatch resetSearchCustomer action', () => {
      jest.spyOn(store$, 'dispatch');
      facade.resetSearchCustomer();
      expect(store$.dispatch).toHaveBeenCalledWith(resetSearchCustomerSuccessAction());
    });
  });
  describe('finalizeFlow', () => {
    it('should dispatch finalizeFlow action', () => {
      jest.spyOn(store$, 'dispatch');
      facade.finalizeFlow();
      expect(store$.dispatch).toHaveBeenCalledWith(finalizeFlowAction());
    });
  });

  describe('getBoxNumbers', () => {
    it('should dispatch getBoxNumbers action', () => {
      jest.spyOn(store$, 'dispatch');
      const addresses = customerRegistrationFactory.build().address;
      facade.getBoxNumbers(addresses);
      expect(store$.dispatch).toHaveBeenCalledWith(getBoxNoAction({ address: addresses }));
    });
  });

  describe('getSubHouseNumbers', () => {
    it('should dispatch getSubHouseNumbers action', () => {
      jest.spyOn(store$, 'dispatch');
      const addresses = customerRegistrationFactory.build().address;
      facade.getSubHouseNumbers(addresses);
      expect(store$.dispatch).toHaveBeenCalledWith(getSubHouseNoAction({ address: addresses }));
    });
  });

  describe('saveMatchedAddress', () => {
    it('should find a matching address based on user input address and save', () => {
      const addresses = customerRegistrationFactory.build().address;
      const address: AddressRequestInterface = {
        postalCode: '',
        municipality: '',
        street: '',
        houseNumber: '10',
        boxNumber: '06',
        subHouseNumber: '10',
        type: 'legalAddress',
      };
      facade.saveMatchedAddress(addresses, address);
      const addressStore: AddressStoreInterface = {
        addressType: 'legalAddress',
        country: 'Belgium',
        size: 2,
        streetId: '21321',
        addressId: '9876568899876',
        tinaLocationId: '2',
        boxNumber: '06',
        houseNumber: '10',
        subHouseNumber: '10',
        municipality: 'Mechelen',
        postalCode: '2800',
        street: 'olivetenvest',
      };
      expect(store$.dispatch).toHaveBeenCalledWith(SetAddressStoreAction({ address: addressStore }));
    });
  });
  describe('savePersonalDetails', () => {
    it('should dispatch savePersonalDetails action', () => {
      jest.spyOn(store$, 'dispatch');
      const personalDetails = customerRegistrationFactory.build().userInput.personalDetails;
      facade.savePersonalDetails(personalDetails);
      expect(store$.dispatch).toHaveBeenCalledWith(savePersonalDetailsAction(personalDetails));
    });
  });
  describe('saveIdentityDetails', () => {
    it('should dispatch saveIdentityDetails action', () => {
      jest.spyOn(store$, 'dispatch');
      const identityDetails = customerRegistrationFactory.build().userInput.identityDetails;
      facade.saveIdentityDetails(identityDetails);
      expect(store$.dispatch).toHaveBeenCalledWith(saveIdentityDetailsAction(identityDetails));
    });
  });
  describe('loadAddress', () => {
    it('should dispatch getAddress action', () => {
      jest.spyOn(store$, 'dispatch');
      const address: AddressRequestInterface = {
        postalCode: '1000',
        municipality: 'Brussels',
        street: 'street',
        houseNumber: '10',
        boxNumber: '06',
        subHouseNumber: '10',
        type: 'legalAddress',
      };
      facade.loadAddress(address);
      expect(store$.dispatch).toHaveBeenCalledWith(getAddressAction({ payload: address }));
    });
  });
});
