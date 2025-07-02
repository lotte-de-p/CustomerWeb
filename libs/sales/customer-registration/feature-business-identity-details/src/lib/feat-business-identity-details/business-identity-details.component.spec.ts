import { ComponentFixture, TestBed, discardPeriodicTasks, fakeAsync, tick } from '@angular/core/testing';
import { BusinessIdentityDetailsComponent } from './business-identity-details.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { provideMockStore } from '@ngrx/store/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormErrorService } from '@telenet/ng-lib-form';
import { StepFacade } from '@sales/shared/data-access';
import { CUSTOM_ELEMENTS_SCHEMA, Component, NO_ERRORS_SCHEMA } from '@angular/core';
import {
  AddressRequestInterface,
  BusinessIdentityDetails,
  BusinessIdentityDetailsFacade,
  LegalEntityDetails,
  customerRegistrationFactory,
} from '@sales/customer-registration/data-access';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { AddressFormComponent, AddressToggleComponent } from '@sales/customer-registration/ui';
const addressRequestInterface: AddressRequestInterface = {
  type: 'legalAddress',
  country: 'België',
  municipality: 'Mechelen',
  postalCode: '2800',
  street: 'Darwin Loadteststraat',
  streetId: '9169584896613267538',
  houseNumber: '1505',
};
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

describe('BusinessIdentityDetailsComponent', () => {
  let component: BusinessIdentityDetailsComponent;
  let fixture: ComponentFixture<BusinessIdentityDetailsComponent>;
  let businessIdentityDetailsFacade: BusinessIdentityDetailsFacade;
  let stepFacade: StepFacade;

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
  const companyName = 'Telenet';
  const enterpriseNumber = '0878.331.436';
  const legalId = '9153105706113181979';
  const businessIdentityDetails: BusinessIdentityDetails = {
    companyName: companyName,
    belgianEnterpriseNumber: enterpriseNumber,
    legalForm: legalId,
    installationAddressToggle: false,
    billingAddressToggle: false,
  };
  const legalEntityDetails: LegalEntityDetails = {
    domain: 'BusinessCustomerAccount',
    property: 'legalForm',
    values: [
      {
        id: '9153105706113181979',
        name: 'ANDERE',
      },
      {
        id: '9153105706113181980',
        name: 'APRV RP',
      },
      {
        id: '9153105706113181983',
        name: 'AUTOGEMB',
      },
    ],
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
        BusinessIdentityDetailsFacade,
        {
          provide: 'Window',
          useValue: mockWindow,
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
    fixture = TestBed.createComponent(BusinessIdentityDetailsComponent);
    businessIdentityDetailsFacade = TestBed.inject(BusinessIdentityDetailsFacade);
    stepFacade = TestBed.inject(StepFacade);
    businessIdentityDetailsFacade.businessIdentityDetails$ = of(businessIdentityDetails);
    businessIdentityDetailsFacade.legalEntityDetails$ = of(legalEntityDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('ngOnInit', () => {
    it('should populate business identity details from state', fakeAsync(() => {
      component.ngOnInit();
      tick();
      expect(component.businessIdentityDetailsForm.controls['companyNameField'].value).toBe(companyName);
      expect(component.businessIdentityDetailsForm.controls['belgianEnterpriseNumberField'].value).toBe(
        enterpriseNumber
      );
      expect(component.businessIdentityDetailsForm.controls['legalEntityField'].value).toBe(undefined);
      discardPeriodicTasks();
    }));
  });
  describe('searchCustomerWithBelgianEnterpriseNumber', () => {
    it('should call search customer when belgian enterprise number is valid', fakeAsync(() => {
      jest.spyOn(businessIdentityDetailsFacade, 'saveBusinessIdentityDetails');
      jest.spyOn(businessIdentityDetailsFacade, 'searchCustomer');
      jest.spyOn(stepFacade, 'displayNavigationBar');
      component.legalEntities = legalEntityDetails.values;
      component.businessIdentityDetailsForm.patchValue({
        companyNameField: companyName,
        belgianEnterpriseNumberField: enterpriseNumber,
        legalEntityField: 'ANDERE',
      });
      component.searchCustomerResultExists$ = of(false);
      component.searchCustomerWithBelgianEnterpriseNumber();
      tick();
      expect(businessIdentityDetailsFacade.saveBusinessIdentityDetails).toHaveBeenLastCalledWith(
        businessIdentityDetails
      );
      expect(stepFacade.displayNavigationBar).toHaveBeenCalled();
      discardPeriodicTasks();
    }));
    it('should call search customer when belgian enterprise number is valid and check for hard match', fakeAsync(() => {
      jest.spyOn(businessIdentityDetailsFacade, 'saveBusinessIdentityDetails');
      jest.spyOn(businessIdentityDetailsFacade, 'searchCustomer');
      jest.spyOn(stepFacade, 'hideNavigationBar');
      component.legalEntities = legalEntityDetails.values;
      component.businessIdentityDetailsForm.patchValue({
        companyNameField: companyName,
        belgianEnterpriseNumberField: enterpriseNumber,
        legalEntityField: 'ANDERE',
      });
      component.searchCustomerResultExists$ = of(true);
      component.searchCustomerWithBelgianEnterpriseNumber();
      tick();
      expect(businessIdentityDetailsFacade.saveBusinessIdentityDetails).toHaveBeenLastCalledWith(
        businessIdentityDetails
      );
      expect(stepFacade.hideNavigationBar).toHaveBeenCalled();
      expect(businessIdentityDetailsFacade.searchCustomer).toHaveBeenCalled();
      discardPeriodicTasks();
    }));
    it('should NOT call search customer when belgian enterprise number is invalid', fakeAsync(() => {
      jest.spyOn(businessIdentityDetailsFacade, 'saveBusinessIdentityDetails');
      jest.spyOn(businessIdentityDetailsFacade, 'searchCustomer');
      component.legalEntities = legalEntityDetails.values;
      component.businessIdentityDetailsForm.patchValue({
        companyNameField: companyName,
        belgianEnterpriseNumberField: '0878.04.436',
        legalEntityField: 'ANDERE',
      });
      component.searchCustomerWithBelgianEnterpriseNumber();
      expect(businessIdentityDetailsFacade.saveBusinessIdentityDetails).not.toHaveBeenCalled();
      expect(businessIdentityDetailsFacade.searchCustomer).not.toHaveBeenCalled();
      discardPeriodicTasks();
    }));
  });
  describe('onNextStep', () => {
    it('should save business identity details if form is valid', fakeAsync(() => {
      component.addressFormComponent = new StubFormComponent() as AddressFormComponent;
      component.billingAddressFormComponent = new StubFormComponent() as AddressFormComponent;
      component.installationAddressFormComponent = new StubFormComponent() as AddressFormComponent;
      jest.spyOn(businessIdentityDetailsFacade, 'saveBusinessIdentityDetails');
      component.legalEntities = legalEntityDetails.values;
      jest.spyOn(businessIdentityDetailsFacade, 'searchCustomer');
      jest.spyOn(stepFacade, 'displayNavigationBar');
      component.businessIdentityDetailsForm.patchValue({
        companyNameField: companyName,
        belgianEnterpriseNumberField: enterpriseNumber,
        legalEntityField: 'ANDERE',
      });
      component.searchCustomerResultExists$ = of(false);
      component.onNextStep();
      tick();
      expect(businessIdentityDetailsFacade.saveBusinessIdentityDetails).toHaveBeenLastCalledWith(
        businessIdentityDetails
      );
      expect(businessIdentityDetailsFacade.searchCustomer).toHaveBeenCalled();
      expect(stepFacade.displayNavigationBar).toHaveBeenCalled();
    }));
    it('should NOT call search customer when belgian enterprise number is invalid', () => {
      jest.spyOn(businessIdentityDetailsFacade, 'saveBusinessIdentityDetails');
      jest.spyOn(businessIdentityDetailsFacade, 'searchCustomer');
      component.legalEntities = legalEntityDetails.values;
      component.businessIdentityDetailsForm.patchValue({
        companyNameField: companyName,
        belgianEnterpriseNumberField: '0878.04.436',
        legalEntityField: 'AB',
      });
      component.onNextStep();
      expect(businessIdentityDetailsFacade.saveBusinessIdentityDetails).not.toHaveBeenCalled();
    });
  });
  describe('doLogin', () => {
    it('should dispatch login action', () => {
      jest.spyOn(businessIdentityDetailsFacade, 'login');
      component.doLogin();
      expect(businessIdentityDetailsFacade.login).toHaveBeenCalled();
    });
  });

  describe('getLegalEntityDetails', () => {
    it('should return leaglenities', () => {
      jest.spyOn(businessIdentityDetailsFacade, 'getLegalEntityDetails');
      const actual = component.getLegalEntityDetails();
      expect(businessIdentityDetailsFacade.getLegalEntityDetails).toHaveBeenCalled();
      expect(component.legalEntities).toBe(actual);
      expect(component.legalFilteredEntities).toBe(actual);
      expect(component.legalEntities).toStrictEqual(component.legalFilteredEntities);
    });
  });

  describe('filterResults', () => {
    it('should return the filtered legal enitity list', () => {
      component.legalEntities = [
        {
          id: '9153105706113181979',
          name: 'ANDERE',
        },
        {
          id: '9153105706113181980',
          name: 'APRV RP',
        },
        {
          id: '9153105706113181983',
          name: 'AUTOGEMB',
        },
      ];

      const event = {
        code: '32',
        key: '2',
        preventDefault: jest.fn(),
        target: {
          name: 'legalEntityField',
          value: 'APRV RP',
          nextElementSibling: {},
        },
      };
      component.filterResults(event);
      expect(component.legalFilteredEntities).toStrictEqual([{ id: '9153105706113181980', name: 'APRV RP' }]);
    });
  });

  describe('validateEnitity', () => {
    it('it should return 1 id the entity is valid', () => {
      jest.spyOn(businessIdentityDetailsFacade, 'saveBusinessIdentityDetails');
      component.businessIdentityDetailsForm.patchValue({
        companyNameField: companyName,
        belgianEnterpriseNumberField: enterpriseNumber,
        legalEntityField: 'ANDERE',
      });

      component.legalEntities = [
        {
          id: '9153105706113181979',
          name: 'ANDERE',
        },
        {
          id: '9153105706113181980',
          name: 'APRV RP',
        },
        {
          id: '9153105706113181983',
          name: 'AUTOGEMB',
        },
      ];
      const event = {
        code: '32',
        key: '2',
        preventDefault: jest.fn(),
        target: {
          name: 'legalEntityField',
          value: 'ANDERE',
          nextElementSibling: {},
        },
      };
      component.validateEnitity(event, true);
      expect(component.isLegalEntityValid).toBe(1);
      expect(businessIdentityDetailsFacade.saveBusinessIdentityDetails).toHaveBeenLastCalledWith(
        businessIdentityDetails
      );
    });

    it('it should return 0 if the entity is invalid', () => {
      jest.spyOn(businessIdentityDetailsFacade, 'saveBusinessIdentityDetails');
      component.legalEntities = [
        {
          id: '9153105706113181979',
          name: 'ANDERE',
        },
        {
          id: '9153105706113181980',
          name: 'APRV RP',
        },
        {
          id: '9153105706113181983',
          name: 'AUTOGEMB',
        },
      ];
      const event = {
        code: '32',
        key: '2',
        preventDefault: jest.fn(),
        target: {
          name: 'legalEntityField',
          value: 'AN',
          nextElementSibling: {},
        },
      };
      component.validateEnitity(event, true);
      expect(component.isLegalEntityValid).toBe(0);
      expect(businessIdentityDetailsFacade.saveBusinessIdentityDetails).not.toHaveBeenCalled();
    });
  });
  describe('saveAddressToState', () => {
    it('should save address to state and reset customer result', () => {
      const state = customerRegistrationFactory.build();
      component.address$ = of(state.address);
      jest.spyOn(businessIdentityDetailsFacade, 'loadAddress');
      jest.spyOn(businessIdentityDetailsFacade, 'resetSearchCustomer');
      jest.spyOn(businessIdentityDetailsFacade, 'saveMatchedAddress');

      component.saveAddressToState(addressRequestInterface);
      expect(businessIdentityDetailsFacade.resetSearchCustomer).toHaveBeenCalled();
      expect(businessIdentityDetailsFacade.loadAddress).toHaveBeenCalled();
      expect(businessIdentityDetailsFacade.saveMatchedAddress).toHaveBeenCalledWith(
        state.address,
        addressRequestInterface
      );
    });
  });
  describe('updateStreets', () => {
    it('should fetch street suggestions', () => {
      jest
        .spyOn(businessIdentityDetailsFacade, 'getStreets')
        .mockReturnValue(of(['Battelsesteenweg', 'Liersesteenweg', 'Olivetenvest']));

      component.updateStreets('2800');
      expect(businessIdentityDetailsFacade.getStreets).toHaveBeenCalledWith('2800');
      component.streetSuggestion$.subscribe((streets) => {
        expect(streets.length).toBe(3);
      });
    });
  });
  describe('toggleAddressVisibility', () => {
    it('should toggle installation address', () => {
      component.toggleAddressVisibility({ checked: false, type: 'installationAddress' });
      expect(component.showInstallationAddress).toBe(true);
    });
    it('should toggle billing address', () => {
      component.toggleAddressVisibility({ checked: false, type: 'billingAddress' });
      expect(component.showBillingAddress).toBe(true);
    });
  });

  describe('updateSubHouse', () => {
    it('should update sub house numbers from address', fakeAsync(() => {
      jest.spyOn(businessIdentityDetailsFacade, 'getSubHouseNumbers');
      const state = customerRegistrationFactory.build();
      component.address$ = of(state.address);
      component.updateSubHouse();
      expect(businessIdentityDetailsFacade.getSubHouseNumbers).toHaveBeenCalledWith(state.address);
    }));
  });

  describe('updateSubHouse', () => {
    it('should update box numbers from address', fakeAsync(() => {
      jest.spyOn(businessIdentityDetailsFacade, 'getBoxNumbers');
      const state = customerRegistrationFactory.build();
      component.address$ = of(state.address);
      component.updateBox();
      expect(businessIdentityDetailsFacade.getBoxNumbers).toHaveBeenCalledWith(state.address);
    }));
  });
  describe('validateForm', () => {
    it('should validate form and return true if valid', () => {
      component.businessIdentityDetailsForm.patchValue({
        companyNameField: companyName,
        belgianEnterpriseNumberField: enterpriseNumber,
        legalEntityField: 'ANDERE',
      });
      const actual = component.validateForm();
      expect(actual).toBeTruthy();
    });
    it('should validate form and mark form fields invalid', () => {
      component.businessIdentityDetailsForm.patchValue({
        companyNameField: '',
        belgianEnterpriseNumberField: '0998.331.436',
        legalEntityField: 'ANDERE',
      });
      const actual = component.validateForm();
      expect(actual).toBeFalsy();
    });
  });
});
