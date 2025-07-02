import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import {
  performItsMeSearchAction,
  performOmapiProductsExtractionAction,
  saveIdentityDetailsAction,
  savePersonalDetailsAction,
  setLanguageAction,
} from '../+state/customer-registration.actions';
import { customerRegistrationFactory } from './../+state/customer-registration.state.testfactory';
import { PersonalDetailsFacade } from './personal-details.facade';
import { LanguageEnum, LanguageService, UrlService } from '@telenet/ng-lib-page';
import { PhoneNumberTransformService } from '@telenet/ng-lib-layout';

describe('PersonalDetailsFacade', () => {
  let facade: PersonalDetailsFacade;
  let store$: MockStore;
  let urlService: UrlService;
  let transformService: PhoneNumberTransformService;
  let languageService: LanguageService;
  const mockState = customerRegistrationFactory.build();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore(),
        UrlService,
        LanguageService,
        PhoneNumberTransformService,
        {
          provide: 'Window',
          useValue: window,
        },
      ],
    });
    facade = TestBed.inject(PersonalDetailsFacade);
    urlService = TestBed.inject(UrlService);
    transformService = TestBed.inject(PhoneNumberTransformService);
    languageService = TestBed.inject(LanguageService);
    store$ = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  describe('savePersonalDetails', () => {
    it('should dispatch provided product details ', () => {
      jest.spyOn(store$, 'dispatch');
      const personalDetails = mockState.userInput.personalDetails;
      facade.savePersonalDetails(personalDetails);
      expect(store$.dispatch).toHaveBeenCalledWith(savePersonalDetailsAction(personalDetails));
    });
  });

  describe('getRequestParams', () => {
    it('should call urlservice get request parameters', () => {
      jest.spyOn(urlService, 'getRequestParameters');
      facade.getRequestParams();
      expect(urlService.getRequestParameters).toHaveBeenCalled();
    });
  });

  describe('formatPhoneNumber', () => {
    it('should format a phonenumber ', () => {
      jest.spyOn(transformService, 'transform');
      const formatPhoneNumber = facade.formatPhoneNumber('0470606060');
      expect(transformService.transform).toHaveBeenCalledWith('0470606060');
      expect(formatPhoneNumber).toEqual('0470 60 60 60');
    });
  });

  describe('extractOmapiProducts', () => {
    it('should dispatch performOmapiProductsExtractionAction when "sdata" parameter is present ', () => {
      jest.spyOn(facade, 'getRequestParams').mockReturnValue({ sdata: 'someValue' });
      jest.spyOn(store$, 'dispatch');

      facade.readEncryptedUrlData();

      expect(store$.dispatch).toHaveBeenCalledWith(performOmapiProductsExtractionAction());
    });
    it('should not dispatch performOmapiProductsExtractionAction when "sdata" param is absent', () => {
      jest.spyOn(facade, 'getRequestParams').mockReturnValue({});
      jest.spyOn(store$, 'dispatch');

      facade.readEncryptedUrlData();

      expect(store$.dispatch).not.toHaveBeenCalledWith(performOmapiProductsExtractionAction());
    });
  });

  describe('checkItsMeParams', () => {
    it('should dispatch performItsMeSearchAction when required itsMe params are present', () => {
      const urlParams = { code: 'someCode', state: 'someState', additional: 'value' };
      jest.spyOn(facade, 'getRequestParams').mockReturnValue(urlParams);
      jest.spyOn(store$, 'dispatch');

      facade.readEncryptedUrlData();

      expect(store$.dispatch).toHaveBeenCalledWith(
        performItsMeSearchAction({ itsMeParams: { code: 'someCode', state: 'someState' } })
      );
    });

    it('should not dispatch performItsMeSearchAction when required itsMe params are absent', () => {
      jest.spyOn(facade, 'getRequestParams').mockReturnValue({ state: 'someState' });
      jest.spyOn(store$, 'dispatch');

      facade.readEncryptedUrlData();

      expect(store$.dispatch).not.toHaveBeenCalledWith(
        performItsMeSearchAction({ itsMeParams: { code: 'someCode', state: 'someState' } })
      );
    });
  });

  describe('saveDOB', () => {
    it('should dispatch saveIdentityDetailsAction to save dob ', () => {
      const date = new Date('12/12/2012');
      jest.spyOn(store$, 'dispatch');
      facade.saveDOB(date);
      expect(store$.dispatch).toHaveBeenCalledWith(
        saveIdentityDetailsAction(
          saveIdentityDetailsAction({
            dateOfBirth: date,
            nationalRegistrationNumber: '',
          })
        )
      );
    });
  });

  describe('setLanguage', () => {
    it('should dispatch setLanguage action ', () => {
      jest.spyOn(store$, 'dispatch');
      jest.spyOn(languageService, 'getLanguage').mockReturnValue(LanguageEnum.EN);
      facade.setLanguage();
      expect(store$.dispatch).toHaveBeenCalledWith(setLanguageAction({ language: LanguageEnum.EN }));
    });
  });
});
