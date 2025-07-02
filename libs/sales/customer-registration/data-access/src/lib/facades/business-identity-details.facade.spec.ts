import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { BusinessIdentityDetailsFacade } from './business-identity-details.facade';
import {
  loginAction,
  preformBusinessSearchCustomerAction,
  resetSearchCustomerSuccessAction,
  saveBusinessIdentityDetailsAction,
  performLegalEntityAction,
  SetAddressStoreAction,
  getSubHouseNoAction,
  getBoxNoAction,
} from '../+state/customer-registration.actions';
import { customerRegistrationFactory } from '../+state/customer-registration.state.testfactory';
import { Municipality } from '../entities/interfaces/municipality.interface';
import { AddressService } from '../infrastructure/address.service';
import { AddressRequestInterface } from '../entities/interfaces/address-request.interface';
import { AddressStoreInterface } from '../entities/interfaces/address-store.interface';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BusinessIdentityDetailsFacade', () => {
  let facade: BusinessIdentityDetailsFacade;
  let store$: MockStore;
  let addressService: AddressService;
  const mockState = customerRegistrationFactory.build();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        provideMockStore(),
        {
          provide: 'Window',
          useValue: Window,
        },
      ],
    });

    store$ = TestBed.inject(MockStore);
    facade = TestBed.inject(BusinessIdentityDetailsFacade);
    addressService = TestBed.inject<AddressService>(AddressService);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  describe('saveBusinessIdentityDetails', () => {
    it('should save dispatch provided business identity details', () => {
      jest.spyOn(store$, 'dispatch');
      facade.saveBusinessIdentityDetails(mockState.userInput.businessIdentityDetails);
      expect(store$.dispatch).toHaveBeenCalledWith(
        saveBusinessIdentityDetailsAction(mockState.userInput.businessIdentityDetails)
      );
    });
  });

  describe('searchCustomer', () => {
    it('should search customer', () => {
      jest.spyOn(store$, 'dispatch');
      facade.searchCustomer();
      expect(store$.dispatch).toHaveBeenCalledWith(preformBusinessSearchCustomerAction());
    });
  });
  describe('login', () => {
    it('should dispatch a loginAction', () => {
      jest.spyOn(store$, 'dispatch');
      facade.login();
      expect(store$.dispatch).toHaveBeenCalledWith(loginAction());
    });
  });
  describe('getLegalEntityDetails', () => {
    it('should return legal entity details', () => {
      jest.spyOn(store$, 'dispatch');
      facade.getLegalEntityDetails();
      expect(store$.dispatch).toHaveBeenCalledWith(performLegalEntityAction());
    });
  });
  describe('resetSearchCustomer', () => {
    it('should dispatch resetSearchCustomer action', () => {
      jest.spyOn(store$, 'dispatch');
      facade.resetSearchCustomer();
      expect(store$.dispatch).toHaveBeenCalledWith(resetSearchCustomerSuccessAction());
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
        jest.spyOn(store$, 'dispatch');
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
          municipality: 'Mechelen',
          postalCode: '2800',
          street: 'olivetenvest',
          subHouseNumber: '10',
        };
        expect(store$.dispatch).toHaveBeenCalledWith(SetAddressStoreAction({ address: addressStore }));
      });
    });
  });
});
