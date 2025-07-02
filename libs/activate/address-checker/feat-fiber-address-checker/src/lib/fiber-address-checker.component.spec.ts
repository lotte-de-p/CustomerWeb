import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { FiberAddressCheckerComponent } from './fiber-address-checker.component';
import {
  AddressFacade,
  AddressInterface,
  FiberAddressCheckerEnum,
  FiberAddressCheckerService,
  FiberStatusEnum,
} from '@address-checker/data-access';
import { of, throwError } from 'rxjs';
import { LoginDetails, UserDetailsService } from '@telenet/ng-lib-ocapi';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { jest } from '@jest/globals';
import { AddressFormComponent } from './address-form/address-form.component';
import { ChangeDetectorRef } from '@angular/core';
import { UrlService } from '@telenet/ng-lib-page';
import { CustomerInputStoreService } from '@telenet/ng-lib-personalisation';
import { FormControl } from '@angular/forms';

const addresses = require('../data/addresses.json');
const addressFormData = {
  cityOrZipCode: {
    geoId: '47bda15e-83c4-6b81-e054-00144f80cbe2',
    zipCode: '1070',
    subMunicipality: 'Brussel',
  },
  street: 'Avenue Mutsaard',
  houseNumber: {
    geoId: '5d587b3d-b278-70bc-e053-579c000a0533',
    houseNumber: '75',
    unit: '66',
  },
  boxNumber: '3',
};

describe('FiberAddressCheckerComponent', () => {
  let component: FiberAddressCheckerComponent;
  let fiberAddressCheckerService: FiberAddressCheckerService;
  let userDetailService: UserDetailsService;
  let addressFacade: AddressFacade;
  let fixture: ComponentFixture<FiberAddressCheckerComponent>;
  let urlService: UrlService;
  let customerInputStoreService: CustomerInputStoreService;

  const mockLoginDetails = {
    isLoggedIn: () => true,
  };
  const mockNotLoginDetails = {
    isLoggedIn: () => false,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AddressFormComponent,
        MatDialogModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader,
          },
        }),
      ],
      declarations: [],
      schemas: [],
      providers: [
        CustomerInputStoreService,
        UrlService,
        { provide: 'Window', useValue: {} },
        {
          provide: ChangeDetectorRef,
          useValue: {},
        },
        MatDialog,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(FiberAddressCheckerComponent);
    fiberAddressCheckerService = TestBed.inject(FiberAddressCheckerService);
    userDetailService = TestBed.inject(UserDetailsService);
    addressFacade = TestBed.inject(AddressFacade);
    customerInputStoreService = TestBed.inject(CustomerInputStoreService);
    urlService = TestBed.inject(UrlService);

    component = fixture.componentInstance;
    component.ngOnInit();
    component.addressForm.addControl('street', new FormControl());
    component.addressForm.addControl('houseNumber', new FormControl());
    component.addressForm.addControl('cityOrZipCode', new FormControl());
    component.addressForm.addControl('boxNumber', new FormControl());
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
  describe('ngOnInit', () => {
    it('should get address from contact details for logged in user', () => {
      jest.spyOn(userDetailService, 'getUserDetails').mockReturnValue(of(mockLoginDetails as LoginDetails));
      jest.spyOn(addressFacade, 'getUserAddresses').mockReturnValue(of(addresses));

      component.ngOnInit();

      expect(component.addressForm).toBeDefined();
      expect(component.userAddresses).toEqual(addresses);
    });

    it('should get no address for not logged in customer', () => {
      jest.spyOn(userDetailService, 'getUserDetails').mockReturnValue(of(mockNotLoginDetails as LoginDetails));
      const userAddresses = jest.spyOn(addressFacade, 'getUserAddresses');

      component.ngOnInit();

      expect(component.addressForm).toBeDefined();
      expect(userAddresses).not.toHaveBeenCalled();
      expect(component.isUserLoggedIn).toBeFalsy();
    });

    it('should get no address for no login details', () => {
      jest.spyOn(userDetailService, 'getUserDetails').mockReturnValue(of());
      const userAddresses = jest.spyOn(addressFacade, 'getUserAddresses');

      component.ngOnInit();

      expect(component.addressForm).toBeDefined();
      expect(userAddresses).not.toHaveBeenCalled();
      expect(component.isUserLoggedIn).toBeFalsy();
    });
  });

  describe('checkFiberEligibility', () => {
    it('should open fiber ready component for address status READY', () => {
      component.addressForm.setValue(addressFormData);
      jest.spyOn(fiberAddressCheckerService, 'getFiberStatusForAddress').mockReturnValue(of(FiberStatusEnum.READY));

      component.checkFiberEligibility();

      expect(component.currentSection).toEqual(component.sectionEnum.FIBER_READY);
    });

    it('should open fiber ready component for address status Does not exist', () => {
      component.addressForm.setValue(addressFormData);
      jest
        .spyOn(fiberAddressCheckerService, 'getFiberStatusForAddress')
        .mockReturnValue(of(FiberStatusEnum.DOES_NOT_EXIST));

      component.checkFiberEligibility();

      expect(component.showAddressNotFound).toBeTruthy();
    });

    it('check for valueChange event is triggered', () => {
      component.addressForm.setValue(addressFormData);
      component.ngOnInit();

      component.addressForm.valueChanges.subscribe(() => {
        expect(component.showAddressNotFound).toBeFalsy();
      });
    });

    it('should open fiber not ready component for address status NOT_PLANNED', () => {
      component.addressForm.setValue(addressFormData);
      jest
        .spyOn(fiberAddressCheckerService, 'getFiberStatusForAddress')
        .mockReturnValue(of(FiberStatusEnum.NOT_PLANNED));

      component.checkFiberEligibility();

      expect(component.currentSection).toEqual(component.sectionEnum.FIBER_NOT_READY);
    });

    it('should not check fiber if form is invalid and user is not loggedIn', () => {
      component.isUserLoggedIn = false;
      component.addressForm.setErrors({});
      const fiberAddressCheckerServiceSpy = jest.spyOn(fiberAddressCheckerService, 'getFiberStatusForAddress');

      component.checkFiberEligibility();

      expect(fiberAddressCheckerServiceSpy).not.toHaveBeenCalled();
    });

    it('should show warning message if the address is not found', () => {
      component.addressForm.setValue(addressFormData);
      component.isUserLoggedIn = true;
      const fiberAddressCheckerServiceSpy = jest
        .spyOn(fiberAddressCheckerService, 'getFiberStatusForAddress')
        .mockReturnValueOnce(
          throwError(
            () => 'An error occured while trying to fetch fiber-address-checker | OMAPI-ERROR-ADDRESS-NOT-FOUND'
          )
        );

      component.checkFiberEligibility();

      expect(fiberAddressCheckerServiceSpy).toHaveBeenCalled();
      fiberAddressCheckerService
        .getFiberStatusForAddress(FiberAddressCheckerEnum.MESSAGE_GROUP, '47bda15e-83c4-6b81-e054-00144f80cbe2')
        .subscribe({
          next: () => null,
          error: () => {
            expect(component.showAddressNotFound).toBeTruthy();
          },
        });
    });

    it('should not check fiber if address has not geo id', () => {
      component.isAddressFormVisible = false;
      component.isUserLoggedIn = true;
      component.userSelectedAddress = {} as AddressInterface;
      const fiberAddressCheckerServiceSpy = jest.spyOn(fiberAddressCheckerService, 'getFiberStatusForAddress');

      component.checkFiberEligibility();

      expect(fiberAddressCheckerServiceSpy).not.toHaveBeenCalled();
      expect(component.showAddressNotFound).toBeTruthy();
    });
  });
  describe('toggleAddressChecker', () => {
    it('should enable', () => {
      component.isAddressFormVisible = false;
      component.showAddressNotFound = true;

      component.toggleAddressChecker();

      expect(component.showAddressNotFound).toBeFalsy();
      expect(component.isAddressFormVisible).toBeTruthy();
    });
  });

  describe('setSelectedAddress', () => {
    it('should select  given address', () => {
      component.setSelectedAddress(addresses[0]);

      expect(component.userSelectedAddress).toEqual(addresses[0]);
      expect(component.showAddressNotFound).toBeFalsy();
    });
  });

  describe('FiberAddressCheckerComponent', () => {
    describe('toProductPage', () => {
      it('should enrich the data store with address and redirect to product page', () => {
        component.urlToProductPage = 'urlToProductPage';
        component.userSelectedAddress = addresses[0];
        component.isAddressFormVisible = false;

        jest.spyOn(customerInputStoreService, 'enrichStoreData').mockImplementation(() => {
          return;
        });
        const redirectToSpy = jest.spyOn(urlService, 'redirectTo').mockImplementation(() => {
          return;
        });

        component.toProductPage();

        expect(customerInputStoreService.enrichStoreData).toHaveBeenCalledWith(
          'fiberCheck',
          component.userSelectedAddress
        );
        expect(redirectToSpy).toHaveBeenCalledWith(component.urlToProductPage);
      });
    });
  });
});
