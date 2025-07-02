import { AddressService } from '../infrastructure/address.service';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { of, throwError } from 'rxjs';
import { CustomerRegistrationEffects } from './customer-registration.effects';
import { HttpClient, HttpErrorResponse, HttpHandler } from '@angular/common/http';
import { NavsService } from './../infrastructure/navs.service';
import { SearchCustomerService } from './../infrastructure/search-customer.service';
import { LegalEntityService } from './../infrastructure/legal-entity.service';
import { StoreModule } from '@ngrx/store';
import { customerRegistrationReducer } from './customer-registration.reducer';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import {
  createCustomerErrorAction,
  createCustomerSuccessAction,
  finalizeFlowAction,
  itsMeSearchSuccessAction,
  navsSuccessAction,
  performResidentialNavsCheckAction,
  performItsMeSearchAction,
} from './customer-registration.actions';
import { Salutation } from './customer-registration.state';
import { Address } from '../entities/models/address.model';
import {
  selectAddressByType,
  selectAddressData,
  selectItsMeParams,
  selectLanguage,
  selectNavsCheckResult,
  selectOmapiProduct,
  selectUserInput,
} from './customer-registration.selectors';
import { ExtractOmapiProductService } from '../infrastructure/extract-omapi-product.service';
import { Actions } from '@ngrx/effects';
import { CreateCustomerService } from '../infrastructure/create-customer.service';
import {
  BusinessCustomerSearchInterface,
  ResidentialCustomerSearchInterface,
} from '../infrastructure/searchCustomer.interface';
import { LoginService, UserDetailsService } from '@telenet/ng-lib-ocapi';
import { ItsMeService } from '../infrastructure/its-me.service';
import { ItsMeInterface, ItsMeResponseInterface } from '../infrastructure/its-me.interface';
import { LanguageEnum } from '@telenet/ng-lib-page';
import { ProductConstants } from '@telenet/ng-lib-omapi';
import { AddressStoreInterface } from '../entities/interfaces/address-store.interface';
describe('CustomerRegistrationEffects', () => {
  let addressService: AddressService;
  let actions$: Actions;
  let effects: CustomerRegistrationEffects;
  let navsService: NavsService;
  let searchCustomerService: SearchCustomerService;
  let extractOmapiProductService: ExtractOmapiProductService;
  let itsMeService: ItsMeService;
  let createCustomerService: CreateCustomerService;
  let userDetailsService: UserDetailsService;
  let loginService: LoginService;
  let store$: MockStore;
  let legalEntityService: LegalEntityService;

  const navsResult = { navsStatus: 'ALLOWED', isRevalidationRequired: false };
  const itsMeResult: ItsMeResponseInterface = {
    rrn: '94031645639',
    birthday: '16/03/1994',
    lastName: 'Grey',
    firstName: 'Jean',
    gender: 'female',
    email: 'jean.grey@gmail.com',
    birthLocation: 'Space',
    cardIDNumber: 'DOF5384923',
    phoneNumber: '0484123456',
    emailVerified: false,
    nationality: 'BE',
  };
  const userInput = {
    personalDetails: {
      firstName: 'John',
      lastName: 'Doe',
      salutation: Salutation.DHR,
      phoneNumber: '123456789',
      email: 'john.doe@example.com',
    },
    identityDetails: {
      dateOfBirth: new Date('1990-01-01'),
      nationalRegistrationNumber: '1234567890',
      belgianIdentityCardNumber: '0987654321',
      isBelgianIdentity: true,
    },
    businessIdentityDetails: {
      companyName: 'Telenet',
      belgianEnterpriseNumber: '0878.331.436',
      legalForm: '',
      installationAddressToggle: false,
      billingAddressToggle: false,
    },
    language: 'NL',
  };

  const legalEntityDetails = {
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
  const address: AddressStoreInterface[] = [
    {
      addressType: 'legalAddress',
      addressId: '9876568899876',
      streetId: '21321',
      tinaLocationId: '2',
      country: 'Belgium',
      houseNumber: '10',
      boxNumber: '06',
      subHouseNumber: '',
      street: 'olivetenvest',
      postalCode: '2800',
      municipality: 'Mechelen',
    },
  ];
  const omapiProducts = [
    {
      productType: 'Internet',
      internalCategory: ProductConstants.OMAPI_CATEGORY_POST_PAID_MOBILE,
    },
    {
      productType: 'Mobile',
      internalCategory: ProductConstants.OMAPI_CATEGORY_PRE_PAID_MOBILE,
    },
  ];
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({ customerRegistrationFeature: customerRegistrationReducer })],
      providers: [
        HttpClient,
        HttpHandler,
        { provide: 'Window', useValue: {} },
        provideMockStore({
          initialState: {
            customerRegistrationFeature: {
              address: address,
              addressStore: address,
              userInput: userInput,
              navsResult: navsResult,
            },
          },
          selectors: [
            { selector: selectAddressByType('legalAddress'), value: address },
            { selector: selectUserInput, value: userInput },
            { selector: selectNavsCheckResult, value: navsResult },
            { selector: selectLanguage, value: LanguageEnum.NL },
            { selector: selectOmapiProduct, value: omapiProducts },
          ],
        }),
        CustomerRegistrationEffects,
        provideMockActions(() => actions$),
        { provide: SearchCustomerService, useValue: jest.fn() },
        { provide: UserDetailsService, useValue: jest.fn() },
        { provide: LoginService, useValue: jest.fn() },
        {
          provide: ItsMeService,
          useValue: {
            getItsMeCustomer: jest.fn(),
          },
        },
        {
          provide: NavsService,
          useValue: {
            getResidentialNavs: jest.fn(),
          },
        },
        {
          provide: CreateCustomerService,
          useValue: {
            createCustomer: jest.fn(),
          },
        },
      ],
    });

    addressService = TestBed.inject<AddressService>(AddressService);
    navsService = TestBed.inject<NavsService>(NavsService);
    effects = TestBed.inject<CustomerRegistrationEffects>(CustomerRegistrationEffects);
    searchCustomerService = TestBed.inject<SearchCustomerService>(SearchCustomerService);
    itsMeService = TestBed.inject<ItsMeService>(ItsMeService);
    extractOmapiProductService = TestBed.inject<ExtractOmapiProductService>(ExtractOmapiProductService);
    createCustomerService = TestBed.inject<CreateCustomerService>(CreateCustomerService);
    userDetailsService = TestBed.inject<UserDetailsService>(UserDetailsService);
    loginService = TestBed.inject<LoginService>(LoginService);
    legalEntityService = TestBed.inject<LegalEntityService>(LegalEntityService);
    store$ = TestBed.inject(MockStore);
  });

  describe('locations$', () => {
    it('should trigger getLocationSuccessAction, given a success response', (done) => {
      addressService.getMunicipalities = jest.fn().mockReturnValue(of([]));
      actions$ = of({ type: '[customer - registration] get locations' });
      effects.locations$.subscribe((action) => {
        expect(action.type).toBe('[customer - registration] get locations success response');
        done();
      });
    });
    it('should trigger getErrorAction given failed LocationResponse', (done) => {
      addressService.getMunicipalities = jest.fn().mockImplementation(() => {
        throw new Error('[customer - registration] get location Error');
      });
      actions$ = of({ type: '[customer - registration] get locations' });
      effects.locations$.subscribe({
        next: () => {
          fail();
        },
        error: (error) => {
          expect(error).toEqual(new Error('[customer - registration] get location Error'));
          done();
        },
      });
    });
  });

  describe('streets$', () => {
    it('should trigger getStreetsSuccessAction, given a success response', (done) => {
      addressService.getStreets = jest.fn().mockReturnValue(of([]));
      actions$ = of({ type: '[customer - registration] get streets' });
      effects.streets$.subscribe((action) => {
        expect(action.type).toBe('[customer - registration] get streets success response');
        done();
      });
    });
    it('should trigger getErrorAction given failed StreetsResponse', (done) => {
      addressService.getStreets = jest.fn().mockImplementation(() => {
        throw new Error('[customer - registration] get streets Error');
      });
      actions$ = of({ type: '[customer - registration] get streets' });
      effects.streets$.subscribe({
        next: () => {
          fail();
        },
        error: (error) => {
          expect(error).toEqual(new Error('[customer - registration] get streets Error'));
          done();
        },
      });
    });
  });

  describe('address$', () => {
    it('should trigger getAddressSuccessAction, given a success response', (done) => {
      addressService.getAddressByData = jest.fn().mockReturnValue(of([]));
      actions$ = of({ type: '[customer - registration] get address' });
      effects.address$.subscribe((action) => {
        expect(action.type).toBe('[customer - registration] get address success response');
        done();
      });
    });
    it('should trigger getErrorAction given failed AddressResponse', (done) => {
      addressService.getAddressByData = jest.fn().mockImplementation(() => {
        throw new Error('[customer - registration] get address Error');
      });
      actions$ = of({ type: '[customer - registration] get address' });
      effects.address$.subscribe({
        next: () => {
          fail();
        },
        error: (error) => {
          expect(error).toEqual(new Error('[customer - registration] get address Error'));
          done();
        },
      });
    });
  });

  describe('navsResult$', () => {
    it('should dispatch navsSuccessAction on successful NAVS check', (done) => {
      const action = performResidentialNavsCheckAction();

      const expectedAction = navsSuccessAction({ navsResponse: navsResult });

      actions$ = of(action);
      store$.overrideSelector(selectUserInput, userInput);
      (navsService.getResidentialNavs as jest.Mock).mockReturnValue(of(navsResult));

      effects.navsResult$.subscribe((result) => {
        expect(result).toEqual(expectedAction);
        expect(navsService.getResidentialNavs).toHaveBeenCalledWith({
          firstName: userInput.personalDetails.firstName,
          lastName: userInput.personalDetails.lastName,
          birthday: '1990-01-01',
          address: {
            id: '9876568899876',
          },
          language: 'nl',
          isRevalidationAttempt: false,
          productDetails: [
            { planType: 'POSTPAID', productType: 'Internet' },
            { planType: 'PREPAID', productType: 'Mobile' },
          ],
        });
        done();
      });
    });

    it('should trigger getErrorAction given failed navsResponse', (done) => {
      navsService.getResidentialNavs = jest.fn().mockImplementation(() => {
        throw new Error('[customer - registration] get navs Error');
      });
      actions$ = of({ type: '[customer - registration] perform navs check' });
      effects.navsResult$.subscribe({
        next: () => {
          fail();
        },
        error: (error) => {
          expect(error).toEqual(new Error('[customer - registration] get navs Error'));
          done();
        },
      });
    });
  });

  describe('itsMeSearchResult$', () => {
    it('should trigger itsMeSearchSuccessAction, given a success response', (done) => {
      const itsMeParams: ItsMeInterface = {
        code: '12345',
        state: '67890',
      };
      const action = performItsMeSearchAction({ itsMeParams: itsMeParams });

      const expectedAction = itsMeSearchSuccessAction({ itsMeResponse: itsMeResult });

      actions$ = of(action);
      store$.overrideSelector(selectItsMeParams, itsMeParams);
      (itsMeService.getItsMeCustomer as jest.Mock).mockReturnValue(of(itsMeResult));

      effects.itsMeSearchResult$.subscribe((result) => {
        expect(result).toEqual(expectedAction);
        expect(itsMeService.getItsMeCustomer).toHaveBeenCalledWith({
          code: itsMeParams.code,
          state: itsMeParams.state,
        });
        done();
      });
    });
    it('should trigger getErrorAction given failed search its me customer response', (done) => {
      itsMeService.getItsMeCustomer = jest.fn().mockImplementation(() => {
        throw new Error('[customer - registration] get its me customer search result Error');
      });
      actions$ = of({ type: '[customer - registration] search its me customer' });

      effects.itsMeSearchResult$.subscribe({
        next: () => {
          fail();
        },
        error: (error) => {
          expect(error).toEqual(new Error('[customer - registration] get its me customer search result Error'));
          done();
        },
      });
    });
  });

  describe('residentialCustomerSearchResult$', () => {
    it('should trigger searchCustomerSuccessAction, given a success response for residential customer', (done) => {
      const payload: ResidentialCustomerSearchInterface = {
        customerCategory: 'Residential',
        firstName: 'John',
        lastName: 'Doe',
        rrn: '1234567890',
        cardIdNumber: '0987654321',
        birthday: '1/1/1990',
        addressId: '9876568899876',
      };
      searchCustomerService.searchCustomer = jest.fn().mockReturnValue(of({}));
      store$.overrideSelector(selectUserInput, userInput);
      store$.overrideSelector(selectNavsCheckResult, navsResult);
      store$.overrideSelector(selectAddressByType('legalAddress'), address[0]);
      actions$ = of({ type: '[customer - registration] search residential customer' });
      effects.residentialCustomerSearchResult$.subscribe((action) => {
        expect(action.type).toBe('[customer - registration] search customer success response');
        expect(searchCustomerService.searchCustomer).toHaveBeenCalledWith(payload);
        done();
      });
    });
  });
  describe('businessCustomerSearchResult$', () => {
    it('should trigger searchCustomerSuccessAction, given a success response for business customer', (done) => {
      const payload: BusinessCustomerSearchInterface = {
        belgianEnterpriseNumber: '0878.331.436',
        customerCategory: 'Business',
        addressId: '9876568899876',
        legalName: 'Telenet',
      };
      searchCustomerService.searchCustomer = jest.fn().mockReturnValue(of({}));
      store$.overrideSelector(selectUserInput, userInput);
      actions$ = of({ type: '[customer - registration] search business customer' });
      effects.businessCustomerSearchResult$.subscribe((action) => {
        expect(action.type).toBe('[customer - registration] search customer success response');
        expect(searchCustomerService.searchCustomer).toHaveBeenCalledWith(payload);
        done();
      });
    });

    it('should trigger getErrorAction given failed CustomerResponse', (done) => {
      searchCustomerService.searchCustomer = jest.fn().mockImplementation(() => {
        throw new Error('[customer - registration] search customer Error');
      });
      actions$ = of({ type: '[customer - registration] search business customer' });
      effects.businessCustomerSearchResult$.subscribe({
        next: () => {
          fail();
        },
        error: (error) => {
          expect(error).toEqual(new Error('[customer - registration] search customer Error'));
          done();
        },
      });
    });
  });

  describe('login$', () => {
    it('should trigger loginAction', () => {
      userDetailsService.getUserDetails = jest
        .fn()
        .mockReturnValue(of({ state: '234354654657', nonce: '7326786489372653' }));
      loginService.login = jest.fn().mockReturnValue(of({}));
      store$.overrideSelector(selectUserInput, userInput);
      actions$ = of({ type: '[customer - registration] Login' });
      effects.login$.subscribe((action) => {
        expect(action.type).toBe('[customer - registration] login success response');
        expect(userDetailsService.getUserDetails).toHaveBeenCalled();
        expect(loginService.login).toHaveBeenCalledWith({ state: '234354654657', nonce: '7326786489372653' });
      });
    });

    it('should trigger error when login is failed', (done) => {
      userDetailsService.getUserDetails = jest.fn().mockImplementation(() => {
        throw new Error('[customer - registration] login error');
      });
      actions$ = of({ type: '[customer - registration] Login' });
      effects.login$.subscribe({
        next: () => {
          fail();
        },
        error: (error) => {
          expect(error).toEqual(new Error('[customer - registration] login error'));
          done();
        },
      });
    });
  });

  describe('omapiProductsExtractionResult$', () => {
    it('should trigger omapiProductExtractionSuccessAction, given a success response', (done) => {
      extractOmapiProductService.extractOmapiProduct = jest.fn().mockReturnValue(of({}));
      actions$ = of({ type: '[customer - registration] extract omapi product' });
      effects.omapiProductsExtractionResult$.subscribe((action) => {
        expect(action.type).toBe('[customer - registration] omapi product extraction success response');
        done();
      });
    });
    it('should trigger getErrorAction given failed OmapiProducts response', (done) => {
      extractOmapiProductService.extractOmapiProduct = jest
        .fn()
        .mockReturnValue(throwError(() => new Error('[customer - registration] omapi product extraction Error')));
      actions$ = of({ type: '[customer - registration] extract omapi product' });

      effects.omapiProductsExtractionResult$.subscribe({
        next: (action) => {
          expect(action.type).toBe('[customer - registration] omapi product extraction Error');
          done();
        },
        error: () => {
          fail('The effect should not result in an error being thrown.');
        },
      });
    });
  });
  describe('finalizeFlow$', () => {
    it('should dispatch createCustomerSuccessAction on successful customer creation', (done) => {
      const action = finalizeFlowAction();
      const firstAddress = new Address();
      firstAddress.addressId = '1';
      const addresses = [firstAddress];

      const createCustomerRequest = {
        brand: 'Telenet',
        firstName: 'John',
        lastName: 'Doe',
        customerCategory: 'Residential',
        contactsDetails: {
          title: 'Dhr.',
          gender: 'Male',
          eMail: 'john.doe@example.com',
          birthday: userInput.identityDetails.dateOfBirth?.toISOString() || '',
          phoneNumber: {
            value: '123456789',
            type: 'Mobile Phone',
          },
          communicationLanguage: 'NL',
        },
        rrn: '1234567890',
        cardIdNumber: '0987654321',
        identificationType: 'Belgian Identification',
        documentType: 'E-ID',
        customerAddress: { id: '1' },
        customerLocations: [
          {
            address: { id: '1' },
          },
        ],
        billingAccount: {
          billDeliveryMethod: 'Email',
        },
        navsScore: '100',
        encryptedData: '',
      };

      actions$ = of(action);
      store$.overrideSelector(selectUserInput, userInput);
      store$.overrideSelector(selectAddressData, addresses);
      store$.overrideSelector(selectNavsCheckResult, navsResult);
      (createCustomerService.createCustomer as jest.Mock).mockReturnValue(of({}));

      effects.finalizeFlow$.subscribe((result) => {
        expect(result).toEqual(createCustomerSuccessAction());
        expect(createCustomerService.createCustomer).toHaveBeenCalledWith(createCustomerRequest);
        done();
      });
    });

    it('should dispatch createCustomerErrorAction on customer creation failure', (done) => {
      const action = finalizeFlowAction();

      const firstAddress = new Address();
      firstAddress.addressId = '1';
      const addresses = [firstAddress];
      const error = new Error('Error occurred');

      actions$ = of(action);
      store$.overrideSelector(selectUserInput, userInput);
      store$.overrideSelector(selectAddressData, addresses);
      const httpErrorResponse = new HttpErrorResponse({ error: error });
      (createCustomerService.createCustomer as jest.Mock).mockReturnValue(throwError(() => httpErrorResponse));

      effects.finalizeFlow$.subscribe((result) => {
        expect(result).toEqual(createCustomerErrorAction({ error: httpErrorResponse }));
        done();
      });
    });
  });

  describe('legalEnyityResult$', () => {
    it('should trigger legal entity success action', (done) => {
      legalEntityService.getLegalEntityData = jest.fn().mockReturnValue(of(legalEntityDetails));
      actions$ = of({ type: '[customer - registration] get legal enitity' });
      effects.legalEnyityResult$.subscribe((action) => {
        expect(action.type).toBe('[customer - registration] perfomr legal entity success action');
        expect(legalEntityService.getLegalEntityData).toHaveBeenCalled();
        done();
      });
    });

    it('should trigger error when legal entity details failed', (done) => {
      legalEntityService.getLegalEntityData = jest.fn().mockImplementation(() => {
        throw new Error('[customer - registration] perfomr legal entity error action');
      });
      actions$ = of({ type: '[customer - registration] get legal enitity' });
      effects.legalEnyityResult$.subscribe({
        next: () => {
          fail();
        },
        error: (error) => {
          expect(error).toEqual(new Error('[customer - registration] perfomr legal entity error action'));
          done();
        },
      });
    });
  });
});
