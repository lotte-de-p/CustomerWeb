import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MessageService } from '@telenet/ng-lib-message';
import { LoaderService } from '@telenet/ng-lib-page';
import { DomService, cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { FormControl, FormGroup } from '@angular/forms';
import { of, throwError } from 'rxjs';
import { expect, jest } from '@jest/globals';
import { LineInformationActionsComponent } from './line-information-actions.component';
import { SalutationInputOptionService } from '../../services/salutation-input-option.service';
import { EventDataLayerService } from '../../services/event-data-layer.service';
import { LineIdentificationDetailsConstants } from '../../constants/line-identification-details.constants';
import { DuplicateContactComponent } from '../duplicate-contact/duplicate-contact.component';
import { ContactDetails } from '../../../../shared/common/models/contact/contact-details.model';
import { ContactUpdateService } from '../../services/contact-update.service';
import { CustomerContactService } from '../../../../shared/common/services/contact/customer-contact.service';
import { LineContactDetailsMapper } from '../../../../shared/common/mappers/contact/line-contact-details.mapper';

const customerContactDetails = require('../../../../../../../../../fixtures/http/fleet/contacts/line-identification-details-contacts.json');
const duplicateContactDetails = require('../../../../../../../../../fixtures/http/fleet/contacts/duplicate-contact-details.json');
describe('LineInformationActionsComponent', () => {
  let component: LineInformationActionsComponent;
  let fixture: ComponentFixture<LineInformationActionsComponent>;
  let contactUpdateService: ContactUpdateService;
  let customerContactService: CustomerContactService;
  let datePipe: DatePipe;
  let dialog: MatDialog;
  let messageService: MessageService;
  let domService: DomService;
  let salutationInputOptionService: SalutationInputOptionService;
  let eventDataLayerService: EventDataLayerService;
  let lineContactDetailsMapper: LineContactDetailsMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoaderService,
        ContactUpdateService,
        DatePipe,
        CustomerContactService,
        MatDialog,
        MessageService,
        DomService,
        SalutationInputOptionService,
        EventDataLayerService,
        LineContactDetailsMapper,
        { provide: 'Window', useValue: {} },
      ],
      imports: [LineInformationActionsComponent, HttpClientTestingModule, MatDialogModule, TranslateModule.forRoot()],
      schemas: [NO_ERRORS_SCHEMA],
    });
    contactUpdateService = TestBed.inject(ContactUpdateService);
    customerContactService = TestBed.inject(CustomerContactService);
    datePipe = TestBed.inject(DatePipe);
    dialog = TestBed.inject(MatDialog);
    messageService = TestBed.inject(MessageService);
    domService = TestBed.inject(DomService);
    salutationInputOptionService = TestBed.inject(SalutationInputOptionService);
    eventDataLayerService = TestBed.inject(EventDataLayerService);
    lineContactDetailsMapper = TestBed.inject(LineContactDetailsMapper);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineInformationActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    jest.spyOn(messageService, 'clearMessages');
    jest.spyOn(messageService, 'addMessage');
    jest.spyOn(component.resetForm, 'emit');
    jest.spyOn(domService, 'scrollToTop');
    jest.spyOn(eventDataLayerService, 'addEventToDataLayer');
    component.msisdn = '093434234';
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('save', () => {
    beforeEach(() => {
      component.formGroup = new FormGroup({});
      jest.spyOn(component, 'updateDescription');
      jest.spyOn(component, 'checkDuplicateContact');
      jest.spyOn(component, 'updateCustomerContact');
    });
    it('should do nothing if form is invalid', () => {
      component.formGroup.setErrors({ error: true });
      component.newContactDetails = true;

      component.save();

      expect(component.updateDescription).not.toHaveBeenCalled();
      expect(component.checkDuplicateContact).not.toHaveBeenCalled();
      expect(component.updateCustomerContact).not.toHaveBeenCalled();
    });

    it('should call update description if no contact details are present', () => {
      component.showIdentificationDetailsBtn = true;

      component.save();

      expect(component.updateDescription).toHaveBeenCalled();
      expect(component.checkDuplicateContact).not.toHaveBeenCalled();
      expect(component.updateCustomerContact).not.toHaveBeenCalled();
    });
  });
  describe('getUrlWithQueryParams', () => {
    it('should replace MSISDN from url with the actual value', () => {
      const testUrl = `test/url/to/replace/${LineIdentificationDetailsConstants.MSISDN_DYNAMIC_KEY_INPUT}`;
      const expectedUrl = `test/url/to/replace/${component.msisdn}`;

      const result = component.getUrlWithQueryParams(testUrl);

      expect(result).toEqual(expectedUrl);
    });
    it('should return url if no MSISDN is present', () => {
      const testUrl = `test/url/to/replace/`;

      const result = component.getUrlWithQueryParams(testUrl);

      expect(result).toEqual(testUrl);
    });
    it('should return empty string for undefined url', () => {
      const testUrl = undefined;

      const result = component.getUrlWithQueryParams(testUrl);

      expect(result).toEqual(testUrl);
    });
  });

  describe('updateCustomerContact', () => {
    beforeEach(() => {
      component.formGroup = createMockForm();
      jest.spyOn(datePipe, 'transform').mockReturnValue('1990-10-10');
      jest.spyOn(salutationInputOptionService, 'getGender').mockReturnValue('male');
      component.formGroup = new FormGroup({
        day: new FormControl(10),
        month: new FormControl(10),
        year: new FormControl(1990),
        selectedMonth: new FormControl(10),
        selectedYear: new FormControl(1990),
      });
      jest.spyOn(component.formGroup, 'reset');
    });
    it('should call update customer contact data with success', () => {
      jest.spyOn(customerContactService, 'updateContactDetailsAndReferenceInfo').mockReturnValue(of({ status: 200 }));

      component.updateCustomerContact();

      expect(customerContactService.updateContactDetailsAndReferenceInfo).toHaveBeenCalled();
      expectSuccessCall();
      expect(eventDataLayerService.addEventToDataLayer).toHaveBeenCalledWith(component.formGroup);
    });

    it('should call update customer contact data with fail', () => {
      jest
        .spyOn(customerContactService, 'updateContactDetailsAndReferenceInfo')
        .mockReturnValue(throwError(() => ({ status: 400 })));

      component.updateCustomerContact();

      expect(customerContactService.updateContactDetailsAndReferenceInfo).toHaveBeenCalled();
      expectFailingCall();
      expect(eventDataLayerService.addEventToDataLayer).not.toHaveBeenCalled();
    });
  });
  describe('updateDescription', () => {
    it('should update customer description', () => {
      component.formGroup = createMockForm();
      component.formGroup = new FormGroup({
        description: new FormControl('test description'),
      });
      const contactId = '09435985';

      jest.spyOn(component.formGroup, 'reset');
      jest.spyOn(contactUpdateService, 'updateContactReferenceInProduct').mockReturnValue(of({ status: 200 }));

      component.updateDescription(contactId);

      expect(messageService.clearMessages).toHaveBeenCalledTimes(1);
      expect(contactUpdateService.updateContactReferenceInProduct).toHaveBeenCalled();
      expect(domService.scrollToTop).toHaveBeenCalled();
    });
  });

  describe('checkDuplicateContact', () => {
    beforeEach(() => {
      component.formGroup = createMockForm();
      jest.spyOn(datePipe, 'transform').mockReturnValue('1991-01-01');
      populateMockForm(component.formGroup, customerContactDetails);
      jest.spyOn(lineContactDetailsMapper, 'toModel').mockReturnValue(customerContactDetails);
      component.formGroup = new FormGroup({
        day: new FormControl(10),
        month: new FormControl(10),
        year: new FormControl(1990),
        selectedMonth: new FormControl(10),
        selectedYear: new FormControl(1990),
      });
    });

    it('should open duplicate check dialog if customer has duplicate contact details and create new contact details if contact id is default', () => {
      const dialogData = {
        data: { duplicateContactOptionList: [...duplicateContactDetails, customerContactDetails] },
      };
      jest.spyOn(customerContactService, 'duplicateCheck').mockReturnValue(of(duplicateContactDetails));
      jest.spyOn(component, 'createNewCustomerContact');
      // @ts-ignore
      jest.spyOn(dialog, 'open').mockReturnValue(<unknown>{
        afterClosed: () => of(LineIdentificationDetailsConstants.DEFAULT_VALUE),
      });

      component.checkDuplicateContact();

      expect(lineContactDetailsMapper.toModel).toHaveBeenCalled();
      expect(dialog.open).toHaveBeenCalledWith(DuplicateContactComponent, dialogData);
      expect(customerContactDetails.contactId).toEqual(LineIdentificationDetailsConstants.DEFAULT_VALUE);
      expect(component.createNewCustomerContact).toHaveBeenCalled();
    });

    it('should open duplicate check dialog for with duplicate contact details and update only description if contact id is new', () => {
      const contactId = '093452834';
      const dialogData = {
        data: { duplicateContactOptionList: [...duplicateContactDetails, customerContactDetails] },
      };
      jest.spyOn(customerContactService, 'duplicateCheck').mockReturnValue(of(duplicateContactDetails));
      jest.spyOn(component, 'updateDescription');
      // @ts-ignore
      jest.spyOn(dialog, 'open').mockReturnValue(<unknown>{ afterClosed: () => of(contactId) });

      component.checkDuplicateContact();

      expect(lineContactDetailsMapper.toModel).toHaveBeenCalled();
      expect(dialog.open).toHaveBeenCalledWith(DuplicateContactComponent, dialogData);
      expect(component.updateDescription).toHaveBeenCalledWith(contactId);
    });

    it('should create new contact details if customer has no duplicate contact details', () => {
      populateMockForm(component.formGroup, customerContactDetails);
      jest.spyOn(customerContactService, 'duplicateCheck').mockReturnValue(of([]));
      jest.spyOn(component, 'createNewCustomerContact');

      component.checkDuplicateContact();

      expect(component.createNewCustomerContact).toHaveBeenCalled();
    });
  });

  describe('createNewCustomerContact', () => {
    beforeEach(() => {
      component.formGroup = createMockForm();
      populateMockForm(component.formGroup, customerContactDetails);
      jest.spyOn(datePipe, 'transform').mockReturnValue('1991-01-01');
      component.formGroup = new FormGroup({
        day: new FormControl(10),
        month: new FormControl(10),
        year: new FormControl(1990),
        selectedMonth: new FormControl(10),
        selectedYear: new FormControl(1990),
      });
    });

    it('should successfully create new customer contact details', () => {
      const contactId = '094583453';
      jest
        .spyOn(customerContactService, 'createCustomerContact')
        .mockReturnValue(of({ contactId: contactId } as ContactDetails));
      jest.spyOn(contactUpdateService, 'updateContactReferenceInProduct').mockReturnValue(of({ status: 200 }));
      jest.spyOn(component.formGroup, 'reset');

      component.createNewCustomerContact();

      expectSuccessCall();
    });

    it('should fail to create new customer contact details, call createCustomerContact failure', () => {
      jest.spyOn(customerContactService, 'createCustomerContact').mockReturnValue(throwError(() => {}));
      jest.spyOn(contactUpdateService, 'updateContactReferenceInProduct');
      jest.spyOn(component.formGroup, 'reset');

      component.createNewCustomerContact();

      expect(contactUpdateService.updateContactReferenceInProduct).not.toHaveBeenCalled();
      expectFailingCall();
    });
  });

  describe('closeOverlay', () => {
    it('test closeOverlay', () => {
      component.showDialog = true;
      component.closeOverlay();
      expect(component.showDialog).toBe(false);
    });
  });

  describe('emitAction', () => {
    it('should check if the showdialog flag is toggled', () => {
      component.emitAction();

      expect(component.showDialog).toBe(true);
      expect(domService.scrollToTop).toHaveBeenCalled();
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });

  function createMockForm(): FormGroup {
    return new FormGroup({
      description: new FormControl(),
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormGroup({
        id: new FormControl(''),
        emailValue: new FormControl(''),
      }),
      phoneNumber: new FormGroup({
        id: new FormControl(''),
        phoneNumberValue: new FormControl(''),
      }),
      language: new FormControl(),
      salutation: new FormControl(),
    });
  }

  function populateMockForm(form: FormGroup, contactDetails: ContactDetails): void {
    form.get('language')?.setValue(contactDetails.language);
    form.get(['phoneNumber', 'id'])?.setValue(contactDetails.contactInfo.phones[0].id);
    form.get(['phoneNumber', 'phoneNumberValue'])?.setValue(contactDetails.contactInfo.phones[0].value);
    form.get(['email', 'id'])?.setValue(contactDetails.contactInfo.emails[0].id);
    form.get(['email', 'emailValue'])?.setValue(contactDetails.contactInfo.emails[0].value);
    form.get('salutation')?.setValue('mr');
    form.get('firstName')?.setValue(contactDetails.individual.firstName);
    form.get('lastName')?.setValue(contactDetails.individual.lastName);
  }

  function expectSuccessCall(): void {
    expect(messageService.clearMessages).toHaveBeenCalledTimes(1);
    expect(component.resetForm.emit).toHaveBeenCalled();
    expect(component.formGroup.reset).toHaveBeenCalled();
    expect(domService.scrollToTop).toHaveBeenCalled();
  }

  function expectFailingCall(): void {
    expect(messageService.clearMessages).toHaveBeenCalledTimes(1);
    expect(messageService.addMessage).toHaveBeenCalledTimes(1);
    expect(component.resetForm.emit).not.toHaveBeenCalled();
    expect(component.formGroup.reset).not.toHaveBeenCalled();
    expect(domService.scrollToTop).toHaveBeenCalled();
  }
});
