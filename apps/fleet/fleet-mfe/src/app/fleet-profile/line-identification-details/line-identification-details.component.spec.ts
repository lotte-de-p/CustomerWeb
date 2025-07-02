import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoaderService, UrlService } from '@telenet/ng-lib-page';
import { DomService, cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { PhoneNumberTransformService } from '@telenet/ng-lib-layout';
import { MessageService } from '@telenet/ng-lib-message';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { InputOption } from '@telenet/ng-lib-form';
import { expect, jest } from '@jest/globals';
import { LineIdentificationDetailsComponent } from './line-identification-details.component';
import { SalutationInputOptionService } from './services/salutation-input-option.service';
import { LanguageInputOptionService } from './services/language-input-option.service';
import { LineIdentificationDetailsConstants } from './constants/line-identification-details.constants';
import { ProductsService } from '../../shared/common/services/products/products.service';
import { CustomerProductHolding } from '../../shared/common/models/customer-product-holding.model';
import { CustomerContactService } from '../../shared/common/services/contact/customer-contact.service';
import { ProfileService } from '../../shared/common/services/profile/profile.service';
import { ProfileDetails } from '../../shared/common/models/profile/profile-details.model';

const contactDetails = require('../../../../../../../fixtures/http/fleet/contacts/line-identification-details-contacts.json');

describe('LineIdentificationDetailsComponent', () => {
  let component: LineIdentificationDetailsComponent;
  let fixture: ComponentFixture<LineIdentificationDetailsComponent>;
  let urlService: UrlService;
  let profileService: ProfileService;
  let productsService: ProductsService;
  let customerContactService: CustomerContactService;
  let phoneNumberTransformService: PhoneNumberTransformService;
  let messageService: MessageService;
  let domService: DomService;
  let salutationInputOptionService: SalutationInputOptionService;
  let languageInputOptionService: LanguageInputOptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UrlService,
        LoaderService,
        ProfileService,
        ProductsService,
        CustomerContactService,
        PhoneNumberTransformService,
        MessageService,
        DomService,
        LanguageInputOptionService,
        SalutationInputOptionService,
        { provide: 'Window', useValue: {} },
      ],
      imports: [LineIdentificationDetailsComponent, HttpClientTestingModule, TranslateModule.forRoot()],
      schemas: [NO_ERRORS_SCHEMA],
    });
    urlService = TestBed.inject(UrlService);
    profileService = TestBed.inject(ProfileService);
    productsService = TestBed.inject(ProductsService);
    customerContactService = TestBed.inject(CustomerContactService);
    phoneNumberTransformService = TestBed.inject(PhoneNumberTransformService);
    messageService = TestBed.inject(MessageService);
    domService = TestBed.inject(DomService);
    languageInputOptionService = TestBed.inject(LanguageInputOptionService);
    salutationInputOptionService = TestBed.inject(SalutationInputOptionService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineIdentificationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('initAfterLoggedIn', () => {
    const salutationOptions = [
      new InputOption('test-salutation-value-1', 'test-label-1'),
      new InputOption('test-salutation-value-2', 'test-label-2'),
    ];
    const languageOptions = [
      new InputOption('test-language-value-1', 'test-label-1'),
      new InputOption('test-language-value-2', 'test-label-2'),
    ];

    it('should load option input lists', () => {
      jest.spyOn(salutationInputOptionService, 'getSalutationOptions').mockReturnValue(salutationOptions);
      jest.spyOn(languageInputOptionService, 'getLanguageOptions').mockReturnValue(languageOptions);
      jest.spyOn(urlService, 'getParameterByName').mockReturnValue('');

      component.initAfterLoggedIn();

      expect(component.salutationOptionList).toEqual(salutationOptions);
      expect(component.languages).toEqual(languageOptions);
    });

    it('should not initialize form and load data if msisdn not provided in url', () => {
      jest.spyOn(urlService, 'getParameterByName').mockReturnValue('');
      jest.spyOn(component, 'initializeForm');
      jest.spyOn(component, 'loadIdentificationLines');

      component.initAfterLoggedIn();

      expect(component.initializeForm).not.toHaveBeenCalled();
      expect(component.loadIdentificationLines).not.toHaveBeenCalled();
    });

    it('should initialize form and load data if msisdn is provided in url', () => {
      jest.spyOn(urlService, 'getParameterByName').mockReturnValue('0489668346');
      jest.spyOn(component, 'initializeForm');
      jest.spyOn(component, 'loadIdentificationLines');

      component.initAfterLoggedIn();

      expect(component.loadIdentificationLines).toHaveBeenCalled();
    });
    describe('load line identification details', () => {
      const profileIdentityDetails = [
        { status: LineIdentificationDetailsConstants.PROFILE_STATUS_PENDING } as ProfileDetails,
      ];
      const referenceInformation = 'this is a description';
      const productHolding = { referenceInformation: referenceInformation } as CustomerProductHolding;

      beforeEach(() => {
        jest.spyOn(urlService, 'getParameterByName').mockReturnValue('0489668346');
        jest.spyOn(profileService, 'getProfileDetailsByMsisdn').mockReturnValue(of(profileIdentityDetails));
        jest.spyOn(productsService, 'getProductByIdentifier').mockReturnValue(of(productHolding));
      });

      it('should load only description for customer with no contact details', () => {
        jest.spyOn(customerContactService, 'getContactDetailsByMsisdn').mockReturnValue(of());

        component.initAfterLoggedIn();

        expect(component.isContactDetailsEditable).toBe(true);
        expect(component.hasContactDetails).toBe(false);
        expect(component.showIdentificationDetailsBtn).toBe(false);
        expect(component.form.controls['description'].value).toEqual(referenceInformation);
      });

      it('should call getProfileDetailsByMsisdn when calling initAfterLoggedIn', () => {
        const language = 'ng.line-identification-details.language-dutch';
        jest.spyOn(customerContactService, 'getContactDetailsByMsisdn').mockReturnValue(of(contactDetails));
        jest.spyOn(salutationInputOptionService, 'getSalutation').mockReturnValue(contactDetails.individual.epithet);
        jest
          .spyOn(phoneNumberTransformService, 'autoFormatPhoneNumber')
          .mockReturnValue(contactDetails.contactInfo.phones[0].value);
        jest.spyOn(component, 'getProfileDetailsByMsisdn');

        component.initAfterLoggedIn();

        expect(component.getProfileDetailsByMsisdn).toHaveBeenCalled();
      });

      it('should load line identification details for customer with contact details', () => {
        const language = 'ng.line-identification-details.language-dutch';
        jest.spyOn(customerContactService, 'getContactDetailsByMsisdn').mockReturnValue(of(contactDetails));
        jest.spyOn(salutationInputOptionService, 'getSalutation').mockReturnValue(contactDetails.individual.epithet);
        jest
          .spyOn(phoneNumberTransformService, 'autoFormatPhoneNumber')
          .mockReturnValue(contactDetails.contactInfo.phones[0].value);

        component.initAfterLoggedIn();

        expect(component.isContactDetailsEditable).toBe(true);
        expect(component.hasContactDetails).toBe(true);
        expect(component.showIdentificationDetailsBtn).toBe(false);
        expect(component.form.get('description')?.value).toEqual(referenceInformation);
        expect(component.form.get('firstName')?.value).toEqual(contactDetails.individual.firstName);
        expect(component.form.get('lastName')?.value).toEqual(contactDetails.individual.lastName);
        expect(component.form.get('salutation')?.value).toEqual(contactDetails.individual.epithet);
        expect(component.form.get('language')?.value).toEqual(language);
        expect(component.form.get(['email', 'id'])?.value).toEqual(contactDetails.contactInfo.emails[0].id);
        expect(component.form.get(['email', 'emailValue'])?.value).toEqual(contactDetails.contactInfo.emails[0].value);
        expect(component.form.get(['phoneNumber', 'id'])?.value).toEqual(contactDetails.contactInfo.phones[0].id);
        expect(component.form.get(['phoneNumber', 'phoneNumberValue'])?.value).toEqual(
          contactDetails.contactInfo.phones[0].value
        );
        expect(component.day).toEqual(12);
        expect(component.month).toEqual(5);
        expect(component.year).toEqual(1991);
      });
    });
  });
  describe('getProfileDetailsByMsisdn', () => {
    it('should set contact details edit flag to true and show identification details flag to false for status: INVITED', () => {
      const profileIdentityDetails = [
        { status: LineIdentificationDetailsConstants.PROFILE_STATUS_INVITED } as ProfileDetails,
      ];

      jest.spyOn(profileService, 'getProfileDetailsByMsisdn').mockReturnValue(of(profileIdentityDetails));

      //mock initAfterLoggedIn
      component.showIdentificationDetailsBtn = true;

      component.getProfileDetailsByMsisdn();

      expect(component.isContactDetailsEditable).toBe(true);
      expect(component.showIdentificationDetailsBtn).toBe(false);
    });

    it('should set contact details edit flag to true and show identification details flag to false for status: PENDING_VALIDATION', () => {
      const profileIdentityDetails = [{ status: 'PENDING_VALIDATION' } as ProfileDetails];

      jest.spyOn(profileService, 'getProfileDetailsByMsisdn').mockReturnValue(of(profileIdentityDetails));

      //mock initAfterLoggedIn
      component.showIdentificationDetailsBtn = true;

      component.getProfileDetailsByMsisdn();

      expect(component.isContactDetailsEditable).toBe(true);
      expect(component.showIdentificationDetailsBtn).toBe(false);
    });

    it('should set contact details edit flag to false and show identification details flag to true for status: ACTIVE', () => {
      const profileIdentityDetails = [{ status: 'ACTIVE' } as ProfileDetails];

      jest.spyOn(profileService, 'getProfileDetailsByMsisdn').mockReturnValue(of(profileIdentityDetails));

      //mock initAfterLoggedIn
      component.showIdentificationDetailsBtn = true;

      component.getProfileDetailsByMsisdn();

      expect(component.isContactDetailsEditable).toBe(false);
      expect(component.showIdentificationDetailsBtn).toBe(true);
    });

    it('should set contact details edit flag to true and show identification details flag to true if customer has no profile identity details', () => {
      jest.spyOn(profileService, 'getProfileDetailsByMsisdn').mockReturnValue(of([]));

      //mock initAfterLoggedIn
      component.showIdentificationDetailsBtn = true;

      component.getProfileDetailsByMsisdn();

      expect(component.isContactDetailsEditable).toBe(true);
      expect(component.showIdentificationDetailsBtn).toBe(true);
    });
  });

  describe('showIdentificationDetails', () => {
    it('should add contact details controls to the identification form', () => {
      jest.spyOn(messageService, 'clearMessages');
      jest.spyOn(domService, 'scrollToElement');

      component.initializeForm();
      component.showIdentificationDetails();

      expect(component.form.get('description')).toBeDefined();
      expect(component.form.get('firstName')).toBeDefined();
      expect(component.form.get('lastName')).toBeDefined();
      expect(component.form.get('salutation')).toBeDefined();
      expect(component.form.get('language')).toBeDefined();
      expect(component.form.get(['email', 'id'])).toBeDefined();
      expect(component.form.get(['email', 'emailValue'])).toBeDefined();
      expect(component.form.get(['phoneNumber', 'id'])).toBeDefined();
      expect(component.form.get(['phoneNumber', 'phoneNumberValue'])).toBeDefined();
      expect(messageService.clearMessages).toHaveBeenCalled();
      expect(domService.scrollToElement).toHaveBeenCalled();
    });
  });

  describe('autoFormatPhoneNumber', () => {
    beforeEach(function () {
      component.form = new FormGroup({
        phoneNumber: new FormGroup({
          phoneNumberValue: new FormControl(''),
        }),
      });
    });
    it('should call auto format phone number if phone number is invalid', () => {
      component.form.get(['phoneNumber', 'phoneNumberValue'])?.setValue('32457956895');
      const expectedPhoneNumber = '0457956895';
      jest.spyOn(phoneNumberTransformService, 'autoFormatPhoneNumber').mockReturnValue(expectedPhoneNumber);

      component.autoFormatPhoneNumber();

      expect(component.form.get(['phoneNumber', 'phoneNumberValue'])?.value).toBe(expectedPhoneNumber);
    });

    it('should not call auto format phone number if phone number value is empty', () => {
      jest.spyOn(phoneNumberTransformService, 'autoFormatPhoneNumber');

      component.autoFormatPhoneNumber();

      expect(component.form.get(['phoneNumber', 'phoneNumberValue'])?.value).toBe('');
      expect(phoneNumberTransformService.autoFormatPhoneNumber).not.toHaveBeenCalled();
    });

    it('should not call auto format phone number if phone number value is valid', () => {
      const expectedResult = '0457956895';
      jest.spyOn(phoneNumberTransformService, 'autoFormatPhoneNumber');
      component.form.get(['phoneNumber', 'phoneNumberValue'])?.setValue(expectedResult);

      component.autoFormatPhoneNumber();

      expect(component.form.get(['phoneNumber', 'phoneNumberValue'])?.value).toBe(expectedResult);
      expect(phoneNumberTransformService.autoFormatPhoneNumber).not.toHaveBeenCalled();
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
