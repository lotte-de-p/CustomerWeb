import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MobileNumberComponent } from './mobile-number.component';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { ProductsService } from '../../../shared/common/services/products/products.service';
import { of } from 'rxjs';
import { StoreModule } from '@ngrx/store';
import { AccountNgrxModule } from '@fleet/account/data-access';
import { EffectsModule } from '@ngrx/effects';
import { jest } from '@jest/globals';

describe('MobileNumberComponent', () => {
  let component: MobileNumberComponent;
  let fixture: ComponentFixture<MobileNumberComponent>;
  let productService: ProductsService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        HttpClientTestingModule,
        InlineSVGModule.forRoot(),
        ReactiveFormsModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot({}),
        AccountNgrxModule,
      ],
      providers: [FormBuilder, { provide: 'Window', useValue: window }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    jest.spyOn(console, 'warn').mockImplementation(jest.fn);
    fixture = TestBed.createComponent(MobileNumberComponent);
    component = fixture.componentInstance;

    productService = TestBed.inject(ProductsService);

    fixture.detectChanges();
  }));

  const mockProfileStatusOk = {
    firstname: 'John',
    lastname: 'Doe',
    gender: 'MALE',
    identityid: '12345',
    status: 'ok',
  };

  const mockProfileStatusInvalid = {
    status: 'OCAPI-ERR-ODPD102',
  };

  const mockProfileStatusNotFound = {
    status: 'OCAPI-ERR-ODPD103',
  };
  const mockProfileStatusPendingValidation = {
    status: 'PENDING_VALIDATION',
  };
  const mockProfileStatusValidated = {
    status: 'VALIDATED',
  };
  const mockProfileStatusInvited = {
    status: 'INVITED',
  };

  beforeEach(() => {
    component.phoneNumber.setValue('0478232928');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('number validation', () => {
    it('should validate the phone number', () => {
      const validatePhoneNumberSpy = jest.spyOn(component, 'validatePhoneNumber');
      const productsServiceValidateFleetProfileSpy = jest.spyOn(productService, 'validateFleetProfileIdentifier');
      component.submitForm();
      expect(validatePhoneNumberSpy).toHaveBeenCalled();
      expect(productsServiceValidateFleetProfileSpy).toHaveBeenCalled();
    });

    it('should validate the phone number is in status ok', () => {
      const validatePhoneNumberSpy = jest.spyOn(component, 'validatePhoneNumber');
      const productsServiceValidateFleetProfileSpy = jest
        .spyOn(productService, 'validateFleetProfileIdentifier')
        .mockReturnValue(of(mockProfileStatusOk));
      component.submitForm();
      let hasError = component.hasAnyError();
      expect(validatePhoneNumberSpy).toHaveBeenCalled();
      expect(productsServiceValidateFleetProfileSpy).toHaveBeenCalled();
      expect(component.invalidFleetNumberError).toBeFalsy();
      expect(component.accountAlreadyExistsError).toBeFalsy();
      expect(component.activeAccountValidationError).toBeFalsy();
      expect(hasError).toBeFalsy();
    });

    it('should validate the phone number is in status invited', () => {
      const validatePhoneNumberSpy = jest.spyOn(component, 'validatePhoneNumber');
      const productsServiceValidateFleetProfileSpy = jest
        .spyOn(productService, 'validateFleetProfileIdentifier')
        .mockReturnValue(of(mockProfileStatusInvited));
      component.submitForm();
      let hasError = component.hasAnyError();
      expect(validatePhoneNumberSpy).toHaveBeenCalled();
      expect(productsServiceValidateFleetProfileSpy).toHaveBeenCalled();
      expect(component.invalidFleetNumberError).toBeFalsy();
      expect(component.accountAlreadyExistsError).toBeFalsy();
      expect(component.activeAccountValidationError).toBeTruthy();
      expect(hasError).toBeTruthy();
    });

    it('should validate the phone number is in status pending', () => {
      const validatePhoneNumberSpy = jest.spyOn(component, 'validatePhoneNumber');
      const productsServiceValidateFleetProfileSpy = jest
        .spyOn(productService, 'validateFleetProfileIdentifier')
        .mockReturnValue(of(mockProfileStatusPendingValidation));
      component.submitForm();
      let hasError = component.hasAnyError();
      expect(validatePhoneNumberSpy).toHaveBeenCalled();
      expect(productsServiceValidateFleetProfileSpy).toHaveBeenCalled();
      expect(component.invalidFleetNumberError).toBeFalsy();
      expect(component.accountAlreadyExistsError).toBeFalsy();
      expect(component.activeAccountValidationError).toBeTruthy();
      expect(hasError).toBeTruthy();
    });

    it('should validate the phone number is in status validated', () => {
      const validatePhoneNumberSpy = jest.spyOn(component, 'validatePhoneNumber');
      const productsServiceValidateFleetProfileSpy = jest
        .spyOn(productService, 'validateFleetProfileIdentifier')
        .mockReturnValue(of(mockProfileStatusValidated));
      component.submitForm();
      let hasError = component.hasAnyError();
      expect(validatePhoneNumberSpy).toHaveBeenCalled();
      expect(productsServiceValidateFleetProfileSpy).toHaveBeenCalled();
      expect(component.invalidFleetNumberError).toBeFalsy();
      expect(component.accountAlreadyExistsError).toBeTruthy();
      expect(component.activeAccountValidationError).toBeFalsy();
      expect(hasError).toBeTruthy();
    });

    it('should validate the phone number is invalid', () => {
      const validatePhoneNumberSpy = jest.spyOn(component, 'validatePhoneNumber');
      const productsServiceValidateFleetProfileSpy = jest
        .spyOn(productService, 'validateFleetProfileIdentifier')
        .mockReturnValue(of(mockProfileStatusInvalid));
      component.submitForm();
      let hasError = component.hasAnyError();
      expect(validatePhoneNumberSpy).toHaveBeenCalled();
      expect(productsServiceValidateFleetProfileSpy).toHaveBeenCalled();
      expect(component.invalidFleetNumberError).toBeTruthy();
      expect(component.accountAlreadyExistsError).toBeFalsy();
      expect(component.activeAccountValidationError).toBeFalsy();
      expect(hasError).toBeTruthy();
    });
  });
});
