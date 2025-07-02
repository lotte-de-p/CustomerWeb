import { HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { OmapiProduct, OmapiProductTestfactory } from '@telenet/ng-lib-omapi';
import { addressConfigurationTestFactory } from '../entities/interfaces/address-request.interface.testfactory';
import { Municipality } from '../entities/interfaces/municipality.interface';
import { RawSalesOrderRequestInterface } from '../entities/interfaces/raw-sales-order-request.interface';
import { AddressMapper } from '../util/address.mapper';
import { NavsResponseInterface } from './../infrastructure/navs.interface';
import { CustomerResponseInterface } from './../infrastructure/searchCustomer.interface';
import {
  getAddressErrorAction,
  getAddressSuccessAction,
  getLocationErrorAction,
  getLocationsSuccessAction,
  getNavsErrorAction,
  getSalesOrderRequestDataAction,
  getStreetsErrorAction,
  getStreetsSuccessAction,
  navsSuccessAction,
  omapiProductExtractionSuccessAction,
  resetError,
  resetSearchCustomerSuccessAction,
  saveBusinessIdentityDetailsAction,
  saveIdentityDetailsAction,
  savePersonalDetailsAction,
  searchCustomerErrorAction,
  searchCustomerSuccessAction,
  setAuthorConfigurationAction,
  setBrand,
  setProductDetailsAction,
  performLegalEntitySuccessAction,
  performLegalEntityErrorAction,
  getBoxNoAction,
  getSubHouseNoAction,
  SetAddressStoreAction,
  performItsMeSearchAction,
  itsMeSearchSuccessAction,
  omapiProductExtractionErrorAction,
  searchItsMeCustomerErrorAction,
  setLanguageAction,
} from './customer-registration.actions';
import { customerRegistrationReducer } from './customer-registration.reducer';
import {
  AuthorConfiguration,
  BusinessIdentityDetails,
  IdentityDetails,
  PersonalDetails,
  ProductDetails,
  Salutation,
} from './customer-registration.state';
import { customerRegistrationFactory } from './customer-registration.state.testfactory';
import { LegalEnityRawInterface } from '../entities/interfaces/legal-entity.interface';
import { AddressStoreInterface } from '../entities/interfaces/address-store.interface';
import { ItsMeInterface, ItsMeResponseInterface } from './../infrastructure/its-me.interface';
import { LanguageEnum } from '@telenet/ng-lib-page';

describe('customer registration reducer', () => {
  let addressMapper: AddressMapper;

  const initialState = customerRegistrationFactory.build();
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: {} }],
    });
    addressMapper = TestBed.inject(AddressMapper);
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {
        type: 'Unknown',
      };

      const state = customerRegistrationReducer(initialState, action);

      expect(state).toBe(initialState);
    });
  });
  describe('setBrand action', () => {
    it('should save the brand to the customerRegistration state', () => {
      const action = setBrand({ brand: 'Telenet' });

      const state = customerRegistrationReducer(initialState, action);

      const predictedState = customerRegistrationFactory.build({
        brand: 'Telenet',
      });
      expect(state.brand).toEqual(predictedState.brand);
    });
  });
  describe('savePersonalDetails action', () => {
    it('should save personal details to customerRegistration state', () => {
      const personalDetails: PersonalDetails = {
        salutation: Salutation.DHR,
        firstName: 'John',
        lastName: 'Wayne',
        phoneNumber: '003209876543',
        email: 'john.wayne@telenet.be',
      };

      const action = savePersonalDetailsAction(personalDetails);

      const state = customerRegistrationReducer(initialState, action);

      const predictedState = customerRegistrationFactory.build({
        userInput: {
          personalDetails: {
            salutation: Salutation.DHR,
            firstName: 'John',
            lastName: 'Wayne',
            phoneNumber: '003209876543',
            email: 'john.wayne@telenet.be',
          },
        },
      });

      expect(state.authorConfiguration).toEqual(predictedState.authorConfiguration);
      expect(state.userInput.personalDetails.salutation).toEqual(predictedState.userInput.personalDetails.salutation);
      expect(state.userInput.personalDetails.firstName).toEqual(predictedState.userInput.personalDetails.firstName);
      expect(state.userInput.personalDetails.lastName).toEqual(predictedState.userInput.personalDetails.lastName);
      expect(state.userInput.personalDetails.phoneNumber).toEqual(predictedState.userInput.personalDetails.phoneNumber);
      expect(state.userInput.personalDetails.email).toEqual(predictedState.userInput.personalDetails.email);
      expect(state).not.toBe(initialState);
    });
  });

  describe('saveIdentityDetailsAction', () => {
    it('should save identity details to customer registration state', () => {
      const identityDetails: IdentityDetails = {
        belgianIdentityCardNumber: 'MTX-2017082-64',
        foreignIdentityCardNumber: 'KHR-6568993-56',
        dateOfBirth: new Date('1980-04-13'),
        nationalRegistrationNumber: '800413-123-45',
      };
      const action = saveIdentityDetailsAction(identityDetails);
      const state = customerRegistrationReducer(initialState, action);

      const predictedState = customerRegistrationFactory.build({
        userInput: {
          identityDetails: {
            belgianIdentityCardNumber: 'MTX-2017082-64',
            foreignIdentityCardNumber: 'KHR-6568993-56',
            dateOfBirth: new Date('1980-04-13'),
            nationalRegistrationNumber: '800413-123-45',
          },
        },
      });
      expect(state.userInput.identityDetails.belgianIdentityCardNumber).toEqual(
        predictedState.userInput.identityDetails.belgianIdentityCardNumber
      );
      expect(state.userInput.identityDetails.foreignIdentityCardNumber).toEqual(
        predictedState.userInput.identityDetails.foreignIdentityCardNumber
      );
      expect(state.userInput.identityDetails.dateOfBirth).toEqual(predictedState.userInput.identityDetails.dateOfBirth);
      expect(state.userInput.identityDetails.nationalRegistrationNumber).toEqual(
        predictedState.userInput.identityDetails.nationalRegistrationNumber
      );
      expect(state).not.toBe(initialState);
    });
  });

  describe('setAuthorConfiguration action', () => {
    it('should save personal details to customerRegistration state', () => {
      const authorConfiguration: AuthorConfiguration = {
        privacyPolicyUrl: 'www.telenet.be/privacy',
        marketingUrl: 'www.telenet.be/marketing',
        showSalesContactNumber: false,
        isPIDEnabled: false,
        pointOfSalesUrl: 'www2.telenet.be/pointofsales',
        requestHelpUrl: 'www2.telenet.be/requesthelp',
        allowAnyNavsForFixedProducts: false,
      };
      const action = setAuthorConfigurationAction(authorConfiguration);

      const state = customerRegistrationReducer(initialState, action);

      const predictedState = customerRegistrationFactory.build({
        authorConfiguration: {
          privacyPolicyUrl: 'www.telenet.be/privacy',
          marketingUrl: 'www.telenet.be/marketing',
          showSalesContactNumber: false,
          isPIDEnabled: false,
          pointOfSalesUrl: 'www2.telenet.be/pointofsales',
          requestHelpUrl: 'www2.telenet.be/requesthelp',
          allowAnyNavsForFixedProducts: false,
        },
      });

      expect(state.authorConfiguration.privacyPolicyUrl).toEqual(predictedState.authorConfiguration.privacyPolicyUrl);
      expect(state.authorConfiguration.marketingUrl).toEqual(predictedState.authorConfiguration.marketingUrl);
      expect(state.authorConfiguration.showSalesContactNumber).toEqual(
        predictedState.authorConfiguration.showSalesContactNumber
      );
      expect(state.authorConfiguration.isPIDEnabled).toEqual(predictedState.authorConfiguration.isPIDEnabled);
      expect(state.userInput).toEqual(predictedState.userInput);
      expect(state).not.toBe(initialState);
    });
  });

  describe('getLocationsSuccessAction', () => {
    it('should get location data on dispatch of action ', () => {
      const locations: Municipality[] = [
        {
          postalCode: '8000',
          location: 'Brugge',
        },
        {
          postalCode: '3000',
          location: 'Leuven',
        },
      ];
      const action = getLocationsSuccessAction({ locations: locations });
      const state = customerRegistrationReducer(initialState, action);
      expect(state.locations[0].postalCode).toBe('8000');
      expect(state.locations[0].location).toBe('Brugge');
      expect(state.locations[1].postalCode).toBe('3000');
      expect(state.locations[1].location).toBe('Leuven');
      expect(state.streets).toBe(initialState.streets);
    });
  });
  describe('getStreetsSuccessAction', () => {
    it('should get street data on dispatch of action ', () => {
      const streets: string[] = ['olivetenvest', 'belgradestraat'];
      const action = getStreetsSuccessAction({ streets: streets });
      const state = customerRegistrationReducer(initialState, action);
      expect(state.streets[0]).toBe('olivetenvest');
      expect(state.streets[1]).toBe('belgradestraat');
      expect(state.locations[1].postalCode).toBe('3000');
      expect(state.locations[1].location).toBe('Leuven');
    });
  });

  describe('getSalesOrderRequestDataAction', () => {
    it('should get sales order response from sdata', () => {
      const data = {
        offers: [
          {
            id: 'BASE0150',
            type: 'Internet Limited',
          },
        ],
      } as RawSalesOrderRequestInterface;

      const action = getSalesOrderRequestDataAction(data);
      const state = customerRegistrationReducer(initialState, action);
      expect(state.salesOrderRequestData?.offers?.length).toBe(1);
      expect(state.userInput.personalDetails).toBe(initialState.userInput.personalDetails);
    });
  });

  describe('getAddressSuccessAction', () => {
    it('should get address details from state', () => {
      const rawAddress = [
        addressConfigurationTestFactory.build({
          id: '9153462896013523517',
          street: 'Elektriciteitstraat',
          streetId: '9153462896013523500',
          houseNumber: '6',
          boxNumber: '5',
          floorNumber: '2',
          tinaLocationId: '2',
        }),
        addressConfigurationTestFactory.build({
          id: '9152527990413378524',
          street: 'Abeelstraat',
          streetId: '9153462896013523501',
          houseNumber: '5',
          boxNumber: '115/t',
          subHouseNumber: '6A',
          floorNumber: '7',
          tinaLocationId: '2',
        }),
      ];
      const address = addressMapper.toModel(rawAddress);
      const action = getAddressSuccessAction({ address: address });
      const state = customerRegistrationReducer(initialState, action);
      expect(state.address).toBe(address);
      expect(state.userInput.personalDetails).toBe(initialState.userInput.personalDetails);
    });
  });

  describe('Error Actions', () => {
    it.each([
      ['getStreetsErrorAction', getStreetsErrorAction, '[customer - registration] get streets Error'],
      ['getLocationErrorAction', getLocationErrorAction, '[customer - registration] get location Error'],
      ['getAddressErrorAction', getAddressErrorAction, '[customer - registration] get address Error'],
      [
        'getCustomerSearchResultError',
        searchCustomerErrorAction,
        '[customer - registration] get customer search result Error',
      ],
      ['getNavsErrorAction', getNavsErrorAction, '[customer - registration] get navs result Error'],
      [
        'omapiProductExtractionErrorAction',
        omapiProductExtractionErrorAction,
        '[customer - registration] omapi product extraction Error',
      ],
      [
        'searchItsMeCustomerErrorAction',
        searchItsMeCustomerErrorAction,
        '[customer - registration] get its me customer search result Error',
      ],
      [
        'performLegalEntityErrorAction',
        performLegalEntityErrorAction,
        '[customer - registration] perfomr legal entity error action',
      ],
      [
        'omapiProductExtractionErrorAction',
        omapiProductExtractionErrorAction,
        '[customer - registration] omapi product extraction Error',
      ],
      [
        'searchItsMeCustomerErrorAction',
        searchItsMeCustomerErrorAction,
        '[customer - registration] get its me customer search result Error',
      ],
    ])('should create the correct action for %p', (_actionName, actionCreator, type) => {
      const error = new HttpErrorResponse({});
      const action = actionCreator({ error });

      expect(action.type).toBe(type);
      expect(action.error).toBe(error);
    });
    it.each([
      ['getStreetsErrorAction', getStreetsErrorAction],
      ['getLocationErrorAction', getLocationErrorAction],
      ['getAddressErrorAction', getAddressErrorAction],
      ['getCustomerSearchResultError', searchCustomerErrorAction],
      ['getNavsErrorAction', getNavsErrorAction],
      ['omapiProductExtractionErrorAction', omapiProductExtractionErrorAction],
      ['searchItsMeCustomerErrorAction', searchItsMeCustomerErrorAction],
      ['performLegalEntityErrorAction', performLegalEntityErrorAction],
    ])('should not set the error state when %p is dispatched with null', (_actionName, actionCreator) => {
      const action = actionCreator({ error: new HttpErrorResponse({}) });
      const state = customerRegistrationReducer(initialState, action);

      expect(state.error).toBeInstanceOf(HttpErrorResponse);
      expect(state.error?.error).toBeNull();
    });

    it('should reset the error state on resetError action', () => {
      const action = resetError();
      initialState.error = new HttpErrorResponse({
        status: 400,
        statusText: 'something went wrong',
      });
      const state = customerRegistrationReducer(initialState, action);

      expect(state.error).toBeUndefined();
    });
  });

  describe('setProductDetailsAction', () => {
    it('should set product details from omapi product', () => {
      const productDetails = {
        minAgeLimit: '18',
        isPrepaidProduct: true,
        isFixedProduct: false,
        isStandAloneMobilePlan: true,
      } as ProductDetails;
      const action = setProductDetailsAction({ details: productDetails });
      const state = customerRegistrationReducer(initialState, action);
      expect(state.productDetails.minAgeLimit).toBe('18');
      expect(initialState.productDetails.minAgeLimit).toBe('16');
      expect(state.productDetails.isFixedProduct).toBe(false);
      expect(state.productDetails.isPrepaidProduct).toBe(true);
      expect(state.productDetails.isStandAloneMobilePlan).toBe(true);
    });
  });

  describe('saveBusinessIdentityDetailsAction', () => {
    it('should save business identity details to customer registration state', () => {
      const identityDetails = {
        companyName: 'Telenet',
        belgianEnterpriseNumber: 'BE0473416418',
        legalForm: 'BV',
      } as BusinessIdentityDetails;
      const action = saveBusinessIdentityDetailsAction(identityDetails);
      const state = customerRegistrationReducer(initialState, action);
      expect(state.userInput.businessIdentityDetails.companyName).toBe('Telenet');
      expect(state.userInput.businessIdentityDetails.belgianEnterpriseNumber).toBe('BE0473416418');
      expect(state.userInput.businessIdentityDetails.legalForm).toBe('BV');
    });
  });

  describe('navsSuccessAction', () => {
    it('should save correct navsResult to customer registration state', () => {
      const navsResponse = {
        navsStatus: 'ALLOWED',
        isRevalidationRequired: false,
      } as NavsResponseInterface;

      const action = navsSuccessAction({ navsResponse: navsResponse });
      const state = customerRegistrationReducer(initialState, action);

      expect(state.navsResult).toBe(navsResponse);
    });
  });

  describe('searchCustomerSuccessAction', () => {
    it('should save search customer response to customer registration state', () => {
      const customerResponse = {
        type: 'softMatch',
      } as CustomerResponseInterface;

      const action = searchCustomerSuccessAction({ customerResponse: customerResponse });
      const state = customerRegistrationReducer(initialState, action);

      expect(state.searchCustomerResult.type).toBe('softMatch');
    });
  });
  describe('resetSearchCustomerSuccessAction', () => {
    it('should reset search customer response to customer registration state', () => {
      const action = resetSearchCustomerSuccessAction();
      const state = customerRegistrationReducer(initialState, action);

      expect(state.searchCustomerResult.type).toBe('');
    });
  });

  describe('omapiProductExtractionSuccessAction', () => {
    it('should save omapi products response to customer registration state', () => {
      const omapiProducts = [OmapiProductTestfactory.build()] as OmapiProduct[];

      const action = omapiProductExtractionSuccessAction({ products: omapiProducts });
      const state = customerRegistrationReducer(initialState, action);

      expect(state.omapiProducts).toBe(omapiProducts);
    });
  });
  describe('performLegalEntitySuccessAction', () => {
    it('should perform LegalEntitySuccessAction', () => {
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
      } as LegalEnityRawInterface;

      const action = performLegalEntitySuccessAction({ legalEntityResponse: legalEntityDetails });
      const state = customerRegistrationReducer(initialState, action);

      expect(state.legalEntityDetails).toBe(legalEntityDetails);
    });
  });
  describe('getBoxNoAction', () => {
    it('should fetch box numbers from state', () => {
      const action = getBoxNoAction({ address: initialState.address });
      const state = customerRegistrationReducer(initialState, action);

      expect(state.boxNumbers).toStrictEqual(['06', '94']);
    });
  });
  describe('getSubHouseNoAction', () => {
    it('should fetch box numbers from state', () => {
      const action = getSubHouseNoAction({ address: initialState.address });
      const state = customerRegistrationReducer(initialState, action);

      expect(state.subHouseNumbers).toStrictEqual(['10', '2']);
    });
  });
  describe('SetAddressStoreAction', () => {
    it('should update address in state when address type match', () => {
      const rawAddress: AddressStoreInterface = {
        addressType: 'legalAddress',
        addressId: '987898789999',
        streetId: '129090',
        tinaLocationId: '2',
        country: 'Belgium',
      };
      const action = SetAddressStoreAction({ address: rawAddress });
      const state = customerRegistrationReducer(initialState, action);
      expect(state.addressStore.length).toBe(2);
      expect(state.addressStore[0].streetId).toBe('129090');
    });
    it('should add new address to state when address type do not match', () => {
      const rawAddress: AddressStoreInterface = {
        addressType: 'billingAddress',
        addressId: '987898789999',
        streetId: '129090',
        tinaLocationId: '2',
        country: 'Belgium',
      };
      const action = SetAddressStoreAction({ address: rawAddress });
      const state = customerRegistrationReducer(initialState, action);
      expect(state.addressStore.length).toBe(3);
      expect(state.addressStore[2].addressType).toBe('billingAddress');
    });
    it('should add new address to state when no addresses available', () => {
      const rawAddress: AddressStoreInterface = {
        addressType: 'legalAddress',
        addressId: '987898789999',
        streetId: '129090',
        tinaLocationId: '2',
        country: 'Belgium',
      };
      const action = SetAddressStoreAction({ address: rawAddress });
      const state = customerRegistrationReducer(customerRegistrationFactory.build({ addressStore: [] }), action);
      expect(state.addressStore.length).toBe(1);
      expect(state.addressStore[0].addressType).toBe('legalAddress');
    });
  });

  describe('performItsMeSearchAction', () => {
    it('should save its me url params to customer registration state', () => {
      const urlParams: ItsMeInterface = {
        code: '12345',
        state: '67890',
      };
      const action = performItsMeSearchAction({ itsMeParams: urlParams });
      const state = customerRegistrationReducer(initialState, action);
      expect(state.itsMeParams.code).toBe('12345');
      expect(state.itsMeParams.state).toBe('67890');
    });
  });

  describe('itsMeSearchSuccessAction', () => {
    it('should save its me response to customer registration state', () => {
      const itsMeResponse: ItsMeResponseInterface = {
        rrn: '82112955682',
        firstName: 'Jean',
        lastName: 'Grey',
        gender: 'female',
        birthday: '29/11/1982',
        cardIDNumber: 'BFA326574041',
        nationality: 'BE',
        birthLocation: 'Space',
        email: 'jean.grey@gmail.com',
        emailVerified: false,
        phoneNumber: '0484123456',
      };

      const action = itsMeSearchSuccessAction({ itsMeResponse: itsMeResponse });
      const state = customerRegistrationReducer(initialState, action);

      expect(state.itsMeResult).toBe(itsMeResponse);
    });
  });
  describe('setLanguageAction', () => {
    it('should set language to customer registration state', () => {
      const action = setLanguageAction({ language: LanguageEnum.NL });
      const state = customerRegistrationReducer(initialState, action);

      expect(state.language).toBe(LanguageEnum.NL);
    });
  });
});
