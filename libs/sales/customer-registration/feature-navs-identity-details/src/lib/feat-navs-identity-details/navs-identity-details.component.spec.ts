import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { NavsIdentityDetailsComponent } from './navs-identity-details.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StepFacade } from '@sales/shared/data-access';
import {
  AddressIdentityFacade,
  AddressRequestInterface,
  NavsIdentityDetailsFacade,
  customerRegistrationFactory,
} from '@sales/customer-registration/data-access';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddressFormComponent, NavsOverlayComponent } from '@sales/customer-registration/ui';
import { of } from 'rxjs';
import { FormErrorService } from '@telenet/ng-lib-form';
import { Component } from '@angular/core';

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
describe('NavsIdentityDetailsComponent', () => {
  let component: NavsIdentityDetailsComponent;
  let fixture: ComponentFixture<NavsIdentityDetailsComponent>;
  let stepFacade: StepFacade;
  let navsIdentityDetailsFacade: NavsIdentityDetailsFacade;
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
      imports: [
        EffectsModule.forRoot([]),
        StoreModule.forRoot({}),
        HttpClientTestingModule,
        RouterTestingModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AddressFormComponent,
        NavsOverlayComponent,
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
    }).compileComponents();

    fixture = TestBed.createComponent(NavsIdentityDetailsComponent);
    stepFacade = TestBed.inject(StepFacade);
    navsIdentityDetailsFacade = TestBed.inject(NavsIdentityDetailsFacade);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onInit', () => {
    it('should initialize form', () => {
      const state = customerRegistrationFactory.build();
      component.userInput$ = of(state.userInput);
      jest.spyOn(stepFacade, 'setNextButtonLabel');
      component.ngOnInit();
      expect(component.navsIdentityDetailsForm.controls['firstNameField'].value).toBe(
        state.userInput.personalDetails.firstName
      );
      expect(component.navsIdentityDetailsForm.controls['lastNameField'].value).toBe(
        state.userInput.personalDetails.lastName
      );
      expect(component.navsIdentityDetailsForm).toBeTruthy();
      expect(stepFacade.setNextButtonLabel).toHaveBeenCalled();
    });
  });
  describe('onNextStep', () => {
    it('should save form details to store, invoke navs check, search and create customer if the form is valid and navs status is ALLOWED', (done) => {
      jest.spyOn(navsIdentityDetailsFacade, 'savePersonalDetails');
      jest.spyOn(navsIdentityDetailsFacade, 'saveIdentityDetails');
      jest.spyOn(navsIdentityDetailsFacade, 'searchCustomer');
      jest.spyOn(navsIdentityDetailsFacade, 'finalizeFlow');
      jest.spyOn(navsIdentityDetailsFacade, 'performResidentialNavsCheck');
      jest.spyOn(stepFacade, 'hideNavigationBar');
      component.navsResult$ = of({ navsStatus: 'ALLOWED', isRevalidationRequired: false });
      component.addressFormComponent = new StubFormComponent() as AddressFormComponent;
      const state = customerRegistrationFactory.build();
      component.userInput$ = of(state.userInput);
      component.navsIdentityDetailsForm.patchValue({
        firstNameField: 'John',
        lastNameField: 'Wick',
        day: '12',
        selectedMonth: '11',
        year: '1980',
      });
      component.onNextStep();
      component.navsResult$.subscribe((result) => {
        expect(result.navsStatus).toBe('ALLOWED');
        done();
      });
      expect(navsIdentityDetailsFacade.savePersonalDetails).toHaveBeenCalled();
      expect(navsIdentityDetailsFacade.saveIdentityDetails).toHaveBeenCalled();
      expect(navsIdentityDetailsFacade.performResidentialNavsCheck).toHaveBeenCalled();
    });
    it('should save form details to store, invoke navs check, and not search and create customer if the form is valid and navs status is not ALLOWED', (done) => {
      jest.spyOn(navsIdentityDetailsFacade, 'savePersonalDetails');
      jest.spyOn(navsIdentityDetailsFacade, 'saveIdentityDetails');
      jest.spyOn(navsIdentityDetailsFacade, 'searchCustomer');
      jest.spyOn(navsIdentityDetailsFacade, 'performResidentialNavsCheck');
      jest.spyOn(navsIdentityDetailsFacade, 'finalizeFlow');
      jest.spyOn(stepFacade, 'hideNavigationBar');
      component.navsResult$ = of({ navsStatus: 'DENIED', isRevalidationRequired: false });
      component.addressFormComponent = new StubFormComponent() as AddressFormComponent;
      const state = customerRegistrationFactory.build();
      component.userInput$ = of(state.userInput);
      component.navsIdentityDetailsForm.patchValue({
        firstNameField: 'John',
        lastNameField: 'Wick',
        day: '12',
        selectedMonth: '11',
        year: '1980',
      });
      component.onNextStep();
      expect(navsIdentityDetailsFacade.savePersonalDetails).toHaveBeenCalled();
      expect(navsIdentityDetailsFacade.saveIdentityDetails).toHaveBeenCalled();
      component.navsResult$.subscribe((result) => {
        expect(result.navsStatus).toBe('DENIED');
        expect(navsIdentityDetailsFacade.finalizeFlow).not.toHaveBeenCalled();
        expect(navsIdentityDetailsFacade.searchCustomer).not.toHaveBeenCalled();
        expect(stepFacade.hideNavigationBar).not.toHaveBeenCalled();

        done();
      });

      expect(navsIdentityDetailsFacade.performResidentialNavsCheck).toHaveBeenCalled();
    });

    it('should not call navs when form is invalid', () => {
      jest.spyOn(navsIdentityDetailsFacade, 'savePersonalDetails');
      jest.spyOn(navsIdentityDetailsFacade, 'saveIdentityDetails');
      jest.spyOn(navsIdentityDetailsFacade, 'searchCustomer');
      jest.spyOn(navsIdentityDetailsFacade, 'performResidentialNavsCheck');
      jest.spyOn(stepFacade, 'hideNavigationBar');
      component.navsResult$ = of({ navsStatus: 'DENIED', isRevalidationRequired: false });
      component.addressFormComponent = new StubFormComponent() as AddressFormComponent;
      const state = customerRegistrationFactory.build();
      component.userInput$ = of(state.userInput);
      component.navsIdentityDetailsForm.patchValue({
        firstNameField: '',
        lastNameField: 'Wick',
        day: '12',
        selectedMonth: '',
        year: '1980',
      });
      component.onNextStep();
      expect(navsIdentityDetailsFacade.performResidentialNavsCheck).not.toHaveBeenCalled();
    });
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
      jest.spyOn(navsIdentityDetailsFacade, 'loadAddress');
      jest.spyOn(navsIdentityDetailsFacade, 'searchCustomer');
      jest.spyOn(navsIdentityDetailsFacade, 'saveMatchedAddress');
      component.saveAddressToState(address);
      component.address$.subscribe((addressState) => {
        expect(addressState).toEqual(addresses);
        expect(navsIdentityDetailsFacade.saveMatchedAddress).toHaveBeenCalledWith(addresses, address);
      });
    });
  });

  describe('updateSubHouse', () => {
    it('should update sub house numbers from address', fakeAsync(() => {
      jest.spyOn(navsIdentityDetailsFacade, 'getSubHouseNumbers');
      const state = customerRegistrationFactory.build();
      component.addresses$ = of(state.address);
      component.updateSubHouse();
      expect(navsIdentityDetailsFacade.getSubHouseNumbers).toHaveBeenCalledWith(state.address);
    }));
  });

  describe('updateBox', () => {
    it('should update box numbers from address', fakeAsync(() => {
      jest.spyOn(navsIdentityDetailsFacade, 'getBoxNumbers');
      const state = customerRegistrationFactory.build();
      component.addresses$ = of(state.address);
      component.updateBox();
      expect(navsIdentityDetailsFacade.getBoxNumbers).toHaveBeenCalledWith(state.address);
    }));

    describe('updateStreets', () => {
      it('should fetch street suggestions', () => {
        jest
          .spyOn(navsIdentityDetailsFacade, 'getStreets')
          .mockReturnValue(of(['Battelsesteenweg', 'Liersesteenweg', 'Olivetenvest']));

        component.updateStreets('2800');
        expect(navsIdentityDetailsFacade.getStreets).toHaveBeenCalledWith('2800');
        component.streetSuggestion$.subscribe((streets) => {
          expect(streets.length).toBe(3);
        });
      });
    });
  });
});
