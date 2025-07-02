import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { AddressIdentityComponent } from './address-identity.component';
import { StepFacade } from '@sales/shared/data-access';
import {
  AddressIdentityFacade,
  AddressRequestInterface,
  IdentityDetailsFacade,
  Municipality,
  customerRegistrationFactory,
} from '@sales/customer-registration/data-access';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { AddressFormComponent, AddressToggleComponent } from '@sales/customer-registration/ui';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormErrorService } from '@telenet/ng-lib-form';
import { CUSTOM_ELEMENTS_SCHEMA, Component, NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  selector: 'tg-sales-profile-details-form',
  template: '',
  providers: [
    {
      provide: AddressFormComponent,
      useExisting: StubFormComponent,
    },
  ],
})
export class StubFormComponent {
  validateForm(): boolean {
    return true;
  }
}
describe('SalesCustomerRegistrationFeatAddressIdentityComponent', () => {
  let component: AddressIdentityComponent;
  let fixture: ComponentFixture<AddressIdentityComponent>;
  let mockStepFacade: StepFacade;
  let mockAddressIdentityFacade: AddressIdentityFacade;
  let identityDetailsFacade: IdentityDetailsFacade;
  const TEST_URL = 'http://testurl.com';
  const mockWindow = {
    location: {
      href: TEST_URL,
      search: '',
      hash: '',
      origin: '',
      pathname: '',
      assign: new Function(),
    },
    document: {
      documentElement: {
        lang: 'NL',
      },
    },
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AddressFormComponent,
        AddressToggleComponent,
      ],
      providers: [
        provideMockStore(),
        FormBuilder,
        FormErrorService,
        StepFacade,
        AddressIdentityFacade,
        {
          provide: 'Window',
          useValue: mockWindow,
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(AddressIdentityComponent);
    mockAddressIdentityFacade = TestBed.inject(AddressIdentityFacade);
    mockStepFacade = TestBed.inject(StepFacade);
    identityDetailsFacade = TestBed.inject(IdentityDetailsFacade);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const mockMunicipalities: Municipality[] = [
      { location: 'Municipality1', postalCode: '1000' },
      { location: 'Municipality2', postalCode: '2000' },
    ];
    component.locationSuggestion$ = of(mockMunicipalities);
    expect(component).toBeTruthy();
  });

  describe('onNextStep', () => {
    it('should call perform Navs Check and customer search when navs status is allowed on onNextStep', (done) => {
      component.addressFormComponent = new StubFormComponent() as AddressFormComponent;
      component.installationAddressFormComponent = new StubFormComponent() as AddressFormComponent;
      component.navsResult$ = of({ navsStatus: 'ALLOWED', isRevalidationRequired: false });
      jest.spyOn(mockAddressIdentityFacade, 'performResidentialNavsCheck');
      jest.spyOn(mockStepFacade, 'hideNavigationBar');
      jest.spyOn(mockAddressIdentityFacade, 'finalizeFlow');
      component.searchCustomerResultExists$ = of(true);
      component.createCustomer = true;
      component.onNextStep().subscribe((result) => {
        expect(result).toBe(false);
        expect(mockStepFacade.hideNavigationBar).toHaveBeenCalled();
        expect(mockAddressIdentityFacade.finalizeFlow).not.toHaveBeenCalled();
        expect(mockAddressIdentityFacade.performResidentialNavsCheck).toHaveBeenCalled();
        done();
      });
    });
    it('should call perform Navs Check and customer search when navs status is allowed and display nav bar on onNextStep', (done) => {
      component.addressFormComponent = new StubFormComponent() as AddressFormComponent;
      component.installationAddressFormComponent = new StubFormComponent() as AddressFormComponent;
      component.navsResult$ = of({ navsStatus: 'ALLOWED', isRevalidationRequired: false });
      jest.spyOn(mockAddressIdentityFacade, 'performResidentialNavsCheck');
      jest.spyOn(mockStepFacade, 'displayNavigationBar');
      jest.spyOn(mockAddressIdentityFacade, 'finalizeFlow');
      component.searchCustomerResultExists$ = of(false);
      component.createCustomer = true;
      component.onNextStep().subscribe((result) => {
        expect(result).toBe(false);
        expect(mockStepFacade.displayNavigationBar).toHaveBeenCalled();
        expect(mockAddressIdentityFacade.finalizeFlow).toHaveBeenCalled();
        expect(mockAddressIdentityFacade.performResidentialNavsCheck).toHaveBeenCalled();
        done();
      });
    });
    it('should call perform Navs Check and customer search for softmatch when navs status is allowed create onNextStep', (done) => {
      component.addressFormComponent = new StubFormComponent() as AddressFormComponent;
      component.installationAddressFormComponent = new StubFormComponent() as AddressFormComponent;
      component.navsResult$ = of({ navsStatus: 'ALLOWED', isRevalidationRequired: false });
      jest.spyOn(mockAddressIdentityFacade, 'performResidentialNavsCheck');
      jest.spyOn(mockStepFacade, 'displayNavigationBar');
      jest.spyOn(mockAddressIdentityFacade, 'finalizeFlow');
      component.searchCustomerResultExists$ = of(false);
      component.createCustomer = false;
      component.onNextStep().subscribe((result) => {
        expect(result).toBe(false);
        expect(mockStepFacade.displayNavigationBar).not.toHaveBeenCalled();
        expect(mockAddressIdentityFacade.finalizeFlow).not.toHaveBeenCalled();
        expect(mockAddressIdentityFacade.performResidentialNavsCheck).toHaveBeenCalled();
        done();
      });
    });

    it('should call perform Navs Check and not customer search when navs status is not allowed on onNextStep', (done) => {
      component.addressFormComponent = new StubFormComponent() as AddressFormComponent;
      component.installationAddressFormComponent = new StubFormComponent() as AddressFormComponent;
      component.navsResult$ = of({ navsStatus: 'REVIEW_NEEDED', isRevalidationRequired: false });
      jest.spyOn(mockAddressIdentityFacade, 'performResidentialNavsCheck');
      component.searchCustomerResultExists$ = of(false);
      component.onNextStep().subscribe((result) => {
        expect(result).toBe(true);
        expect(mockAddressIdentityFacade.performResidentialNavsCheck).toHaveBeenCalled();
        done();
      });
    });

    it('should call perform Navs Check and not customer search and shoe navs overlay when navs status is Denied on onNextStep', (done) => {
      component.addressFormComponent = new StubFormComponent() as AddressFormComponent;
      component.installationAddressFormComponent = new StubFormComponent() as AddressFormComponent;
      component.navsResult$ = of({ navsStatus: 'DENIED', isRevalidationRequired: false });
      jest.spyOn(mockAddressIdentityFacade, 'performResidentialNavsCheck');
      component.searchCustomerResultExists$ = of(false);
      component.onNextStep().subscribe((result) => {
        expect(result).toBe(false);
        expect(component.showNavsOverlay).toBe(true);
        expect(mockAddressIdentityFacade.performResidentialNavsCheck).toHaveBeenCalled();
        done();
      });
    });
    it('should not call perform Navs Check when form is invalid', (done) => {
      component.addressFormComponent = new StubFormComponent() as AddressFormComponent;
      component.installationAddressFormComponent = new StubFormComponent() as AddressFormComponent;
      component.navsResult$ = of({ navsStatus: 'ALLOWED', isRevalidationRequired: true });
      jest.spyOn(mockAddressIdentityFacade, 'performResidentialNavsCheck');
      jest.spyOn(component.addressFormComponent, 'validateForm').mockReturnValue(false);
      jest.spyOn(mockStepFacade, 'displayNavigationBar');
      jest.spyOn(mockAddressIdentityFacade, 'finalizeFlow');
      component.searchCustomerResultExists$ = of(false);
      component.onNextStep().subscribe((result) => {
        expect(result).toBe(false);
        done();
      });
    });
  });

  describe('toggleAddressVisibility', () => {
    it('should toggle address visibility correctly', () => {
      expect(component.showInstallationAddress).toBe(false);
      expect(component.showBillingAddress).toBe(false);

      component.toggleAddressVisibility({ checked: true, type: 'installationAddress' });
      expect(component.showInstallationAddress).toBe(false);

      component.toggleAddressVisibility({ checked: true, type: 'billingAddress' });
      expect(component.showBillingAddress).toBe(true);
    });
  });

  describe('updateBox', () => {
    it('should update box numbers from address', fakeAsync(() => {
      jest.spyOn(mockAddressIdentityFacade, 'getBoxNumbers');
      const state = customerRegistrationFactory.build();
      component.address$ = of(state.address);
      component.updateBox();
      expect(mockAddressIdentityFacade.getBoxNumbers).toHaveBeenCalledWith(state.address);
    }));

    describe('updateStreets', () => {
      it('should fetch street suggestions', () => {
        jest
          .spyOn(mockAddressIdentityFacade, 'getStreets')
          .mockReturnValue(of(['Battelsesteenweg', 'Liersesteenweg', 'Olivetenvest']));

        component.updateStreets('2800');
        expect(mockAddressIdentityFacade.getStreets).toHaveBeenCalledWith('2800');
        component.streetSuggestion$.subscribe((streets) => {
          expect(streets.length).toBe(3);
        });
      });
    });
  });

  describe('updateSubHouse', () => {
    it('should update sub house numbers from address', fakeAsync(() => {
      jest.spyOn(mockAddressIdentityFacade, 'getSubHouseNumbers');
      const state = customerRegistrationFactory.build();
      component.address$ = of(state.address);
      component.updateSubHouse();
      expect(mockAddressIdentityFacade.getSubHouseNumbers).toHaveBeenCalledWith(state.address);
    }));
  });

  describe('saveAddressToState', () => {
    it('should save address to state', () => {
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
      jest.spyOn(mockAddressIdentityFacade, 'loadAddress');
      jest.spyOn(mockAddressIdentityFacade, 'searchCustomer');
      jest.spyOn(mockAddressIdentityFacade, 'saveMatchedAddress');
      component.saveAddressToState(address);
      component.address$.subscribe((addressState) => {
        expect(addressState).toEqual(addresses);
        expect(mockAddressIdentityFacade.saveMatchedAddress).toHaveBeenCalledWith(addresses, address);
      });
    });
  });

  describe('redirectToStandAloneLogin', () => {
    it('should dispatch login action', () => {
      jest.spyOn(identityDetailsFacade, 'login');
      component.redirectToStandAloneLogin();
      expect(identityDetailsFacade.login).toHaveBeenCalled();
    });
  });

  describe('continueRegistrationForSoftMatch', () => {
    it('should constinue onNext step', () => {
      jest.spyOn(component, 'onNextStep');
      component.continueRegistrationForSoftMatch();
      expect(component.showOverlay).toBeFalsy();
      expect(component.createCustomer).toBeTruthy();
      expect(component.onNextStep).toHaveBeenCalled();
    });
  });
});
