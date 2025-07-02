import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatInstallationAddressComponent } from './feat-installation-address.component';
import { EventFacade } from '@sales/events/data-access';
import { installationAddressStepLoaded } from '../../events/installation-address-step-loaded.const';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';
import { TgFormsModule } from '@telenet/ng-lib-form';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { mechelenAddressTestFactory } from '@sales/order-configurator/domain-installation-address';
import { setNewInstallationAddress, setSelectedAddress } from '../../+state/address.actions';
import { StepFacade } from '@sales/shared/data-access';
import { AddressFieldValue } from '@sales/address-form-field/data-access';
import { InstallationAddressUtil } from '../../utils/installationAddress.util';
import { of } from 'rxjs';

describe('OrderConfiguratorFeatInstallationAddressComponent', () => {
  let component: FeatInstallationAddressComponent;
  let fixture: ComponentFixture<FeatInstallationAddressComponent>;
  let eventFacade: EventFacade;
  let store$: MockStore;
  let stepFacade: StepFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideMockStore()],
      imports: [
        FeatInstallationAddressComponent,
        TranslateModule.forRoot(),
        TgFormsModule,
        HttpClientTestingModule,
        StoreModule.forRoot({}),
      ],
    }).compileComponents();

    eventFacade = TestBed.inject(EventFacade);
    store$ = TestBed.inject(MockStore);
    stepFacade = TestBed.inject(StepFacade);

    fixture = TestBed.createComponent(FeatInstallationAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    jest.spyOn(eventFacade, 'triggerEvent').mockReturnValue();
    jest.spyOn(eventFacade, 'triggerAnalyticsClickEvent').mockReturnValue();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.viewModel).toEqual(
      expect.objectContaining({
        stepImage: '/content/dam/www-telenet-touch/default/images/hardware-checkout/delivery.svg',
      })
    );
  });

  describe('OnInit', () => {
    it('should trigger installationAddressStepLoaded event', () => {
      component.ngOnInit();
      expect(eventFacade.triggerEvent).toHaveBeenCalledWith(installationAddressStepLoaded);
    });

    it('should call preselectAddress on initialization', () => {
      const preselectAddressSpy = jest.spyOn(component as any, 'preselectAddress');
      component.ngOnInit();
      expect(preselectAddressSpy).toHaveBeenCalled();
    });
  });

  describe('onAddressSelected', () => {
    it('should trigger analytics click event', () => {
      component.onAddressSelected(mechelenAddressTestFactory.build());
      expect(eventFacade.triggerAnalyticsClickEvent).toHaveBeenCalledWith({ name: 'existing address selected' });
    });

    it('should dispatch setSelectedAddress action with the selected address', () => {
      const dispatchSpy = jest.spyOn(store$, 'dispatch');
      const address = mechelenAddressTestFactory.build();
      component.onAddressSelected(address);
      expect(dispatchSpy).toHaveBeenCalledWith(setSelectedAddress({ selectedAddress: address }));
    });

    it('should display navigation bar after selecting an address', () => {
      const displayNavSpy = jest.spyOn(stepFacade, 'displayNavigationBar');
      component.onAddressSelected(mechelenAddressTestFactory.build());
      expect(displayNavSpy).toHaveBeenCalled();
    });
  });

  describe('openAddressForm', () => {
    it('should set isAddressFormVisible to true and hide the navigation bar', () => {
      const hideNavSpy = jest.spyOn(stepFacade, 'hideNavigationBar');
      component.openAddressForm();
      expect(component.isAddressFormVisible).toBe(true);
      expect(hideNavSpy).toHaveBeenCalled();
    });
  });

  describe('closeAddressForm', () => {
    it('should set isAddressFormVisible to false and display the navigation bar', () => {
      const displayNavSpy = jest.spyOn(stepFacade, 'displayNavigationBar');
      component.closeAddressForm();
      expect(component.isAddressFormVisible).toBe(false);
      expect(displayNavSpy).toHaveBeenCalled();
    });
  });

  describe('onSubmit', () => {
    it('should format the address and dispatch setNewInstallationAddress and setSelectedAddress actions', () => {
      const dispatchSpy = jest.spyOn(store$, 'dispatch');
      const manuallyAddedAddress: AddressFieldValue = {
        street: {
          value: 'Main St',
          addressUnit: {
            addressUnitTypeId: '',
            externalId: '',
            href: '',
            id: '',
            name: '',
            type: '',
          },
        },
        municipality: {
          postalCode: '1000',
          location: 'Brussels',
        },
        geographical_address: { isManualAddress: true },
      };
      const formattedAddress = InstallationAddressUtil.convertFieldValueToInstallationAddress(manuallyAddedAddress);

      component.onSubmit(manuallyAddedAddress);
      if (formattedAddress) {
        expect(dispatchSpy).toHaveBeenCalledWith(setNewInstallationAddress({ newAddress: formattedAddress }));
        expect(dispatchSpy).toHaveBeenCalledWith(setSelectedAddress({ selectedAddress: formattedAddress }));
        expect(component.isAddressFormVisible).toBe(false);
      }
    });
  });

  describe('preselectAddress', () => {
    it('should select manually added address if it exists', () => {
      const manuallyAddedAddress = mechelenAddressTestFactory.build();
      component.viewModel = {
        manuallyAddedAddress: of(manuallyAddedAddress),
        addresses: of([]),
        selectedAddress: of(undefined),
        stepImage: '',
      };
      const dispatchSpy = jest.spyOn(store$, 'dispatch');
      component.ngOnInit();
      expect(dispatchSpy).toHaveBeenCalledWith(setSelectedAddress({ selectedAddress: manuallyAddedAddress }));
    });

    it('should select the first address if addresses exist and no selected address is present', () => {
      const availableAddresses = [mechelenAddressTestFactory.build()];
      component.viewModel = {
        manuallyAddedAddress: of(undefined),
        addresses: of(availableAddresses),
        selectedAddress: of(undefined),
        stepImage: '',
      };
      const dispatchSpy = jest.spyOn(store$, 'dispatch');
      component.ngOnInit();
      expect(dispatchSpy).toHaveBeenCalledWith(setSelectedAddress({ selectedAddress: availableAddresses[0] }));
    });
  });
});
