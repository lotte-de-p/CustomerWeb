import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { AddressFormFieldComponent } from './address-form-field.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';
import { windowFactory } from '@telenet/ng-lib-page';
import { ConfigService } from '@telenet/ng-lib-config';
import { AddressFormFieldFacade, fieldConstant } from '@sales/address-form-field/data-access';
import { of } from 'rxjs';
import { AddressFacade, AddressUnit } from '@sales/shared/address/data-access';
import { FormControl } from '@angular/forms';

describe('AddressFormFieldComponent', () => {
  let component: AddressFormFieldComponent;
  let fixture: ComponentFixture<AddressFormFieldComponent>;
  let configService: ConfigService;
  let facade: AddressFormFieldFacade;
  let addressFacadeMock: jest.Mocked<AddressFacade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(), HttpClientTestingModule, TranslateModule.forRoot()],
      providers: [
        {
          provide: 'Window',
          useValue: windowFactory(),
        },
        ConfigService,
        AddressFormFieldFacade,
        { provide: AddressFacade, useValue: addressFacadeMock },
      ],
    }).compileComponents();
    configService = TestBed.inject(ConfigService);
    facade = TestBed.inject(AddressFormFieldFacade);
    jest.spyOn(configService, 'getConfig').mockReturnValue('https://api.int.telenet.be/ocapi');
    fixture = TestBed.createComponent(AddressFormFieldComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('registerOnChange', () => {
    it('should register a function as register onchange', () => {
      const testFunction = () => true;
      component.registerOnChange(testFunction);
      expect(component.onChange).toBe(testFunction);
    });
  });

  describe('registerOnTouched', () => {
    it('should register a function as register ontouched', () => {
      const testFunction = () => true;
      component.registerOnTouched(testFunction);
      expect(component.onTouch).toBe(testFunction);
    });
  });

  describe('validate', () => {
    it('should return invalidForm error if geographical address is missing housenumber', () => {
      const validation = component.validate();
      expect(validation).toStrictEqual({ invalidForm: true });
    });
  });

  describe('fetchStreetAddressUnitAndUpdate', () => {
    it('should call getStreetAddressUnit and update the form control value', () => {
      const mockStreet = 'Main Street';
      const mockPostalCode = '1000';
      const mockAddressUnit: AddressUnit = {
        id: '123',
        name: mockStreet,
        addressUnitTypeId: 'type1',
        externalId: '',
        href: '',
        type: 'Street',
      };

      jest.spyOn(component['addressForm'], 'get').mockReturnValue({
        value: {
          postalCode: mockPostalCode,
        },
        setValue: jest.fn(),
      } as Partial<FormControl> as FormControl);

      jest.spyOn(facade, 'getStreetAddressUnit').mockReturnValue(of(mockAddressUnit));
      const setSelectedStreetAddressUnitSpy = jest.spyOn(facade, 'setSelectedStreetAddressUnit');
      const streetControl = component['addressForm'].get(fieldConstant.STREET) as FormControl;
      const setValueSpy = jest.spyOn(streetControl, 'setValue');

      component.fetchStreetAddressUnitAndUpdate(mockStreet).subscribe((result) => {
        expect(result).toBe(mockStreet);
        expect(facade.getStreetAddressUnit).toHaveBeenCalledWith(mockStreet, mockPostalCode);
        expect(setSelectedStreetAddressUnitSpy).toHaveBeenCalledWith(mockAddressUnit);
        expect(setValueSpy).toHaveBeenCalledWith(
          {
            value: mockStreet,
            addressUnit: mockAddressUnit,
          },
          { emitEvent: false }
        );
      });
    });

    it('should not update the form control value if no streetAddressUnit is returned', () => {
      const mockStreet = 'Main Street';
      const mockPostalCode = '1000';

      jest.spyOn(component['addressForm'], 'get').mockReturnValue({
        value: {
          postalCode: mockPostalCode,
        },
        setValue: jest.fn(),
      } as Partial<FormControl> as FormControl);

      jest.spyOn(facade, 'getStreetAddressUnit').mockReturnValue(of(null));
      const setSelectedStreetAddressUnitSpy = jest.spyOn(facade, 'setSelectedStreetAddressUnit');
      const streetControl = component['addressForm'].get(fieldConstant.STREET) as FormControl;
      const setValueSpy = jest.spyOn(streetControl, 'setValue');

      component.fetchStreetAddressUnitAndUpdate(mockStreet).subscribe((result) => {
        expect(result).toBe(mockStreet);
        expect(facade.getStreetAddressUnit).toHaveBeenCalledWith(mockStreet, mockPostalCode);
        expect(setSelectedStreetAddressUnitSpy).not.toHaveBeenCalled();
        expect(setValueSpy).not.toHaveBeenCalled();
      });
    });
  });
});
