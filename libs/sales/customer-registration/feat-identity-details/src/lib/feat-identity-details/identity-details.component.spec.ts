import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IdentityDetailsComponent } from './identity-details.component';
import { provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';
import {
  customerRegistrationFactory,
  IdentityDetails,
  IdentityDetailsFacade,
  Salutation,
  selectBrand,
  selectOmapiProduct,
  selectSearchCustomerResultType,
  selectUserInput,
  UserInput,
} from '@sales/customer-registration/data-access';
import { of, take } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { BelgianEidValidator, ForeignEidValidator } from '@telenet/ng-lib-form';
import { StepFacade } from '@sales/shared/data-access';

describe('FeatIdentityDetailsComponent', () => {
  let component: IdentityDetailsComponent;
  let fixture: ComponentFixture<IdentityDetailsComponent>;
  let formBuilder: FormBuilder;
  let identityDetailsFacade: IdentityDetailsFacade;
  let stepFacade: StepFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdentityDetailsComponent, TranslateModule.forRoot()],
      providers: [
        provideMockStore({
          selectors: [
            {
              selector: selectBrand,
              value: 'Telenet',
            },
            {
              selector: selectSearchCustomerResultType,
              value: '',
            },
            {
              selector: selectOmapiProduct,
              value: [],
            },
            {
              selector: selectUserInput,
              value: {},
            },
          ],
        }),
        {
          provide: 'Window',
          useValue: window,
        },
        FormBuilder,
        IdentityDetailsFacade,
        StepFacade,
      ],
    }).compileComponents();

    window.HTMLElement.prototype.scrollIntoView = () => {};
    fixture = TestBed.createComponent(IdentityDetailsComponent);
    identityDetailsFacade = TestBed.inject(IdentityDetailsFacade);
    formBuilder = TestBed.inject(FormBuilder);
    stepFacade = TestBed.inject(StepFacade);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onInit', () => {
    [
      ['1234567890', '0987654321'],
      [undefined, undefined],
    ].forEach(([belgianEid, foreignEid]) => {
      it(`should initialize the component correctly and set the belgianEid - foreignEid values to ${belgianEid} and ${foreignEid}`, () => {
        const mockUserInput: UserInput = {
          identityDetails: {
            dateOfBirth: new Date('1983/12/25'),
            nationalRegistrationNumber: '1234567893',
            belgianIdentityCardNumber: belgianEid,
            foreignIdentityCardNumber: foreignEid,
            isBelgianIdentity: true,
          },
          personalDetails: {
            salutation: Salutation.DHR,
            firstName: 'Dwayne',
            lastName: 'Johnson',
            email: 'Dwayne.Johnson@telenet.be',
            phoneNumber: '0484098765',
          },
          businessIdentityDetails: {
            companyName: 'The Rock',
            legalForm: 'NV',
            belgianEnterpriseNumber: '0987654321',
            installationAddressToggle: false,
            billingAddressToggle: false,
          },
        };

        jest.spyOn(component, 'toggleIdentityView');
        identityDetailsFacade.userInput$ = of(mockUserInput);
        identityDetailsFacade.searchCustomerResultExists$ = of(false);

        component.ngOnInit();

        component.brand$.pipe(take(1)).subscribe((brand) => {
          expect(brand).toEqual('Telenet');
        });
        component.userInput$.pipe(take(1)).subscribe((userInput) => {
          expect(component.toggleIdentityView).toHaveBeenCalledWith(userInput);
        });
      });
    });
    it('should populate belgianEid when identityType is belgian and belgianIdentityCardNumber is present', () => {
      const initialState = customerRegistrationFactory.build({
        userInput: {
          identityDetails: {
            belgianIdentityCardNumber: '1234567890',
            foreignIdentityCardNumber: '0987654321',
            isBelgianIdentity: true,
          },
        },
      });
      component.isBelgianIdentitySelected$ = of(true);
      component.userInput$ = of(initialState.userInput);

      component.ngOnInit();
      expect(component.identityDetailsForm.controls['belgianEid'].value).toBe('1234567890');
    });

    it('should populate foreignEid when identityType is not belgian and foreignIdentityCardNumber is present', () => {
      const initialState = customerRegistrationFactory.build({
        userInput: {
          identityDetails: {
            belgianIdentityCardNumber: '1234567890',
            foreignIdentityCardNumber: '0987654321',
            isBelgianIdentity: false,
          },
        },
      });
      component.userInput$ = of(initialState.userInput);

      component.ngOnInit();
      expect(component.identityDetailsForm.controls['foreignEid'].value).toBe('0987654321');
    });
  });

  describe('toggleIdentityInfoOverlayView', () => {
    [[true], [false]].forEach(([showIdentityInfoOverlay]) => {
      it(`should set showIdentityInfoOverlay to be ${showIdentityInfoOverlay}`, () => {
        component.toggleIdentityInfoOverlayView(showIdentityInfoOverlay);

        expect(component.showIdentityInfoOverlay).toEqual(showIdentityInfoOverlay);
      });
    });
  });

  describe('toggleIdentityView', () => {
    const initialState = customerRegistrationFactory.build({
      userInput: {
        identityDetails: {
          belgianIdentityCardNumber: '1234567890',
          foreignIdentityCardNumber: '0987654321',
          isBelgianIdentity: true,
        },
      },
    });
    it('should populate belgianEid when identityType is belgian and belgianIdentityCardNumber is present', () => {
      component.userInput$ = of(initialState.userInput);

      component.toggleIdentityView('belgian');
      expect(
        component.identityDetailsForm.controls[component.CUS_REG_SALES_IDENTITY_BELGIAN_FORM].hasValidator(
          Validators.required
        )
      ).toBeTruthy();
      expect(
        component.identityDetailsForm.controls[component.CUS_REG_SALES_IDENTITY_BELGIAN_FORM].hasValidator(
          BelgianEidValidator.isNumberValid
        )
      ).toBeTruthy();
    });

    it('should populate foreignEid when identityType is not belgian and foreignIdentityCardNumber is present', () => {
      component.userInput$ = of(initialState.userInput);

      component.toggleIdentityView('foreign');

      expect(
        component.identityDetailsForm.controls[component.CUS_REG_SALES_IDENTITY_FOREIGN_FORM].hasValidator(
          Validators.required
        )
      ).toBeTruthy();
      expect(
        component.identityDetailsForm.controls[component.CUS_REG_SALES_IDENTITY_FOREIGN_FORM].hasValidator(
          ForeignEidValidator.isForeignEidValidWithModCheck
        )
      ).toBeTruthy();
    });
  });

  it('should not populate the eid field when identityDetails is not present', () => {
    component.userInput$ = of();
    component.toggleIdentityView('');
    expect(component.identityDetailsForm.controls['belgianEid'].value).toBe('');
    expect(component.identityDetailsForm.controls['foreignEid'].value).toBe('');
  });

  it('should populate belgian identity field from userInput$ when isBelgianIdentity is true', () => {
    const mockUserInput = customerRegistrationFactory.build({
      userInput: {
        identityDetails: {
          belgianIdentityCardNumber: '1234567890',
          foreignIdentityCardNumber: '',
        },
      },
    });
    component.userInput$ = of(mockUserInput.userInput);

    component.toggleIdentityView('belgian');

    expect(component.identityDetailsForm.controls['belgianEid'].value).toBe('1234567890');
    expect(component.identityDetailsForm.controls['foreignEid'].value).toBe('');
  });

  it('should populate foreign identity field from userInput$ when isBelgianIdentity is false', () => {
    const mockUserInput = customerRegistrationFactory.build({
      userInput: {
        identityDetails: {
          belgianIdentityCardNumber: '',
          foreignIdentityCardNumber: '1234567890',
          isBelgianIdentity: false,
        },
      },
    });
    component.userInput$ = of(mockUserInput.userInput);

    component.toggleIdentityView('foreign');

    expect(component.identityDetailsForm.controls['belgianEid'].value).toBe('');
    expect(component.identityDetailsForm.controls['foreignEid'].value).toBe('1234567890');
  });

  it('should populate form fields from itsMeResponse$', () => {
    const itsMeDetailsMock = customerRegistrationFactory.build();

    component.itsMeResponse$ = of(itsMeDetailsMock.itsMeResult);

    component.toggleIdentityView('belgian');

    expect(component.identityDetailsForm.controls['belgianEid'].value).toBe('OMV628028924');
  });

  it('should populate form fields from itsMeResponse$', () => {
    const itsMeDetailsMock = customerRegistrationFactory.build({
      itsMeResult: {
        cardIDNumber: '',
      },
    });

    component.itsMeResponse$ = of(itsMeDetailsMock.itsMeResult);

    component.toggleIdentityView('belgian');

    expect(component.identityDetailsForm.controls['belgianEid'].value).toBe('');
  });

  describe('onNext', () => {
    it('should parse and save identity details and return true when form is valid', () => {
      component.identityDetailsForm = formBuilder.group({
        belgianEid: ['1234567890'],
        foreignEid: ['0987654321'],
        nationalRegistrationNumberField: ['1234509876'],
        day: ['16'],
        selectedMonth: ['03'],
        year: ['1996'],
      });
      const identityDetailsFormComponent = component.identityDetailsFormComponent;
      if (identityDetailsFormComponent) {
        identityDetailsFormComponent.identityDetailsForm = formBuilder.group({
          belgianEid: ['1234567890'],
          foreignEid: ['0987654321'],
          nationalRegistrationNumberField: ['1234509876'],
          day: ['16'],
          selectedMonth: ['03'],
          year: ['1996'],
        });
      } else {
        fail('no child form');
      }

      const expectedIdentityDetails: IdentityDetails = {
        dateOfBirth: new Date('1996/03/16'),
        nationalRegistrationNumber: '1234509876',
        belgianIdentityCardNumber: '1234567890',
        foreignIdentityCardNumber: '0987654321',
      };
      component.prepaidOmapiProductExists$ = of(true);
      component.searchCustomerResultExists$ = of(false);

      jest.spyOn(identityDetailsFacade, 'saveIdentityDetails');

      component.onNextStep().subscribe((result) => {
        expect(result).toBe(true);
        expect(identityDetailsFacade.saveIdentityDetails).toHaveBeenCalledWith(expectedIdentityDetails);
      });
    });

    it('should return false when form is invalid', (done) => {
      component.identityDetailsForm.controls['belgianEid'].setErrors({ required: true });

      component.onNextStep().subscribe((result) => {
        expect(result).toBe(false);
        done();
      });
    });
  });
  describe('doLogin', () => {
    it('should dispatch login action', () => {
      jest.spyOn(identityDetailsFacade, 'login');
      component.doLogin();
      expect(identityDetailsFacade.login).toHaveBeenCalled();
    });
  });
  describe('searchCustomer', () => {
    it('should search customer for hard match customer for given nrn and hide navigation', () => {
      jest.spyOn(identityDetailsFacade, 'searchResidentialCustomer');
      jest.spyOn(stepFacade, 'hideNavigationBar');
      component.searchCustomerResultExists$ = of(true);
      component.searchCustomer('nrn');
      expect(identityDetailsFacade.searchResidentialCustomer).toHaveBeenCalled();
      expect(stepFacade.hideNavigationBar).toHaveBeenCalled();
    });
    it('should search customer for hard match customer for given id card and display navigation if not hard match found', () => {
      component.identityDetailsForm = formBuilder.group({
        belgianEid: ['456656767676'],
        foreignEid: ['098655678'],
        nationalRegistrationNumberField: ['24267382827'],
        day: ['16'],
        selectedMonth: ['03'],
        year: ['1996'],
      });
      jest.spyOn(identityDetailsFacade, 'searchResidentialCustomer');
      jest.spyOn(stepFacade, 'displayNavigationBar');
      component.searchCustomerResultExists$ = of(false);
      component.searchCustomer('belgianEid');
      expect(identityDetailsFacade.searchResidentialCustomer).toHaveBeenCalled();
      expect(stepFacade.displayNavigationBar).toHaveBeenCalled();
    });
  });
});
