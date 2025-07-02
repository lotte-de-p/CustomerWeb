import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ElementRef, QueryList } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { FormErrorService } from '../../errors';
import { MACAddressConstants } from './constants';
import { MACAddressComponent } from '.';
import { of } from 'rxjs';

const formControlSpy = {
  get valueChanges() {
    return of(true);
  },
};
describe('MACAddressComponent', () => {
  let component: MACAddressComponent;
  let fixture: ComponentFixture<MACAddressComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MACAddressComponent],
      providers: [
        FormBuilder,
        ReactiveFormsModule,
        FormErrorService,
        { provide: 'Window', useValue: {} },
        { provide: NgControl, useValue: formControlSpy },
      ],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MACAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should initmac address', () => {
      component.macAddress = '68:02:B8:E4:A3:88';

      component.ngOnInit();
      expect(component.macAddressForm.controls['input0'].value).toBe('68');
      expect(component.macAddressForm.controls['input1'].value).toBe('02');
      expect(component.macAddressForm.controls['input2'].value).toBe('B8');
      expect(component.macAddressForm.controls['input3'].value).toBe('E4');
      expect(component.macAddressForm.controls['input4'].value).toBe('A3');
      expect(component.macAddressForm.controls['input5'].value).toBe('88');
    });
  });

  describe('getFullMACAddress', () => {
    it('should return the full mac address from control value', () => {
      component.macAddressForm.controls.input0.setValue('00');
      component.macAddressForm.controls.input1.setValue('1B');
      component.macAddressForm.controls.input2.setValue('44');
      component.macAddressForm.controls.input3.setValue('11');
      component.macAddressForm.controls.input4.setValue('3A');
      component.macAddressForm.controls.input5.setValue('B7');

      component.getFullMACAddress();
      expect(component.macAddress).toBe('00:1B:44:11:3A:B7');
    });
  });

  describe('showError', () => {
    beforeEach(() => {
      component.macAddressForm.markAllAsTouched();
    });
    it('should return true given form is invalid and all elements are dirty ', () => {
      component.macAddressForm.controls.input1.setValue('');
      const actual = component.showError();

      expect(actual).toBe(true);
    });

    it('should return false given form is valid and all the element are dirty', () => {
      component.macAddressForm.controls.input0.setValue('11');
      component.macAddressForm.controls.input1.setValue('00');
      component.macAddressForm.controls.input2.setValue('B7');
      component.macAddressForm.controls.input3.setValue('44');
      component.macAddressForm.controls.input4.setValue('11');
      component.macAddressForm.controls.input5.setValue('B7');

      const actual = component.showError();

      expect(actual).toBe(false);
    });
  });

  describe('getOTPComplexityClass', () => {
    it('should get default mac address complexity class if the mac address  is undefined or empty', () => {
      component.macAddress = '';
      const actual = component.getMacAddressComplexityClass();
      expect(actual).toBe(MACAddressConstants.DEFAULT_CLASS);
    });

    it('should get fair mac address  complexity class if the mac address  is not proper', () => {
      component.macAddress = '00:1B:11';
      const actual = component.getMacAddressComplexityClass();
      expect(actual).toBe(MACAddressConstants.FAIR_CLASS);
    });

    it('should get strong otp complexity class if the otp is proper', () => {
      component.macAddress = '00:1B:11:44:3A:B7';
      const actual = component.getMacAddressComplexityClass();
      expect(actual).toBe(MACAddressConstants.VALID_CLASS);
    });

    it('should get error mac address complexity class if the mac address is invalid', () => {
      component.macAddress = '00:1B';
      component.macAddressForm.controls['input5'].setValue('');
      component.macAddressForm.markAllAsTouched();

      const actual = component.getMacAddressComplexityClass();
      expect(actual).toBe(MACAddressConstants.ERROR_CLASS);
    });
  });

  describe('onPaste', () => {
    it('should set mac address value on paste event', () => {
      const event = {
        clipboardData: {
          getData: () => {
            return '5C:35:3B:38:4C:9B';
          },
        } as unknown as DataTransfer,
        preventDefault: () => {
          // do nothing
        },
      } as ClipboardEvent;
      component.onPaste(event);

      expect(component.macAddressForm.controls['input0'].value).toBe('5C');
      expect(component.macAddressForm.controls['input1'].value).toBe('35');
      expect(component.macAddressForm.controls['input2'].value).toBe('3B');
      expect(component.macAddressForm.controls['input3'].value).toBe('38');
      expect(component.macAddressForm.controls['input4'].value).toBe('4C');
      expect(component.macAddressForm.controls['input5'].value).toBe('9B');
    });
  });

  describe('keyUpEvent', () => {
    it('should allow input when a number is entered on 2nd input and move focus on the next field', () => {
      const event = {
        code: '32',
        key: MACAddressConstants.BACKSPACE,
        preventDefault: jest.fn(),
        target: {
          name: 'first',
          value: '2',
          nextElementSibling: {
            type: 'number',
            focus: jest.fn(),
          },
        },
      };
      component.formInput.length = 2;
      component.keyUpEvent(event, 1);
      expect(event.target.value).toEqual('');
    });
    it('should allow input when a number is entered in 4th input and move focus on the next field', () => {
      const event = {
        code: '8',
        key: MACAddressConstants.BACKSPACE,
        preventDefault: jest.fn(),
        target: {
          name: 'first',
          value: '22',
          nextElementSibling: {
            type: 'number',
            focus: jest.fn(),
          },
        },
      };
      const e1: ElementRef = new ElementRef({ focus: jest.fn() });
      const e2: ElementRef = new ElementRef({ focus: jest.fn() });
      component.rows = new QueryList<ElementRef>();
      component.rows.reset([e1, e2, e1, e2, e1, e2]);
      component.isValuedCopied = false;

      component.formInput.length = 6;
      component.keyUpEvent(event, 4);
      expect(event.target.value).toEqual('22');
    });
  });
  it('should allow input when a number is entered and move focus on the next field and value is copied', () => {
    const event = {
      code: '12',
      key: MACAddressConstants.BACKSPACE,
      preventDefault: jest.fn(),
      target: {
        name: 'first',
        value: '22',
        nextElementSibling: {
          type: 'number',
          focus: jest.fn(),
        },
      },
    };
    const e1: ElementRef = new ElementRef({
      focus: jest.fn(),
    });
    const e2: ElementRef = new ElementRef({
      focus: jest.fn(),
    });
    component.rows = new QueryList<ElementRef>();
    component.rows.reset([e1, e2, e1, e2, e1, e2]);
    component.isValuedCopied = true;

    component.formInput.length = 6;
    component.keyUpEvent(event, 4);
    expect(component.isValuedCopied).toBeFalsy();
  });

  describe('isValidMACAddress', () => {
    it('should return false if Mac address does not match with regex', () => {
      component.macAddress = '@3:12:12:AA:AA';
      const isValidMACAddressInput = component.isValidMacAddressEntered();
      expect(isValidMACAddressInput).toBeFalsy();
      expect(component.isValidMacAddress).toBe(false);
    });
    it('should return false if form is invalid', () => {
      component.macAddress = '';
      component.macAddressForm.controls.input0.setValue('');
      const e1: ElementRef = new ElementRef({ focus: jest.fn() });
      const e2: ElementRef = new ElementRef({ ffocus: jest.fn() });
      component.rows = new QueryList<ElementRef>();
      component.rows.reset([e1, e2, e1, e2, e1, e2]);
      const isValidMACAddressInput = component.isValidMacAddressEntered();
      expect(isValidMACAddressInput).toBeFalsy();
      expect(component.canShowError).toBe(true);
    });

    it('should return true if mac address is valid', () => {
      component.macAddress = '00:1B:11:44:3A:B7';
      const isValidMACAddressInput = component.isValidMacAddressEntered();
      expect(isValidMACAddressInput).toBeTruthy();
      expect(component.isValidMacAddress).toBe(true);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
