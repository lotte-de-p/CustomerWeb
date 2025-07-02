import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { DuplicateContactComponent } from './duplicate-contact.component';
import { expect, jest } from '@jest/globals';
import { TranslationService } from '../../../../shared/common/translation/translation.service';

const duplicateContactDetails = require('../../../../../../../../../fixtures/http/fleet/contacts/duplicate-contact-details.json');
describe('DuplicateContactComponent', () => {
  let component: DuplicateContactComponent;
  let fixture: ComponentFixture<DuplicateContactComponent>;
  let translateService: TranslateService;
  let translationService: TranslationService;
  const mockDialogRef = {
    close: jest.fn(() => 'close'),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DuplicateContactComponent,
        TranslationService,
        TranslateService,
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: 'Window', useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: { duplicateContactOptionList: duplicateContactDetails } },
      ],
      imports: [HttpClientTestingModule, MatDialogModule, TranslateModule.forRoot()],
      schemas: [NO_ERRORS_SCHEMA],
    });
    translateService = TestBed.inject(TranslateService);
    translationService = TestBed.inject(TranslationService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuplicateContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should init all variables ', () => {
      component.ngOnInit();

      expect(component.duplicateContactOptionList).toBe(duplicateContactDetails);
      expect(component.selectedContactId).toBe('Default');
      expect(component.toggleList).toEqual([undefined, undefined, undefined]);
    });
  });
  describe('close', () => {
    it('should close dialog without sanding any contact id  ', () => {
      component.close();

      expect(mockDialogRef.close).toHaveBeenCalledWith();
    });
  });
  describe('save', () => {
    it('should close dialog and send contact id  ', () => {
      component.save();

      expect(mockDialogRef.close).toHaveBeenCalledWith(component.selectedContactId);
    });
  });

  describe('getOptionLabel', () => {
    it('should get option text for newly contact', () => {
      const newContactText = 'New Contact: ';
      const newlyContact = duplicateContactDetails[2];
      jest.spyOn(translationService, 'getLabel').mockReturnValue('');
      jest.spyOn(translateService, 'instant').mockReturnValue(newContactText);

      const result = component.getOptionLabel(newlyContact);

      expect(result).toEqual(
        `${newContactText} (${newlyContact.individual.firstName} ${newlyContact.individual.lastName})`
      );
    });

    it('should get option text for duplicate contact', () => {
      const duplicateContact = duplicateContactDetails[0];

      const result = component.getOptionLabel(duplicateContact);

      expect(result).toEqual(`${duplicateContact.individual.firstName} ${duplicateContact.individual.lastName}`);
    });
  });
  afterEach(() => {
    cleanStylesFromDom();
  });
});
