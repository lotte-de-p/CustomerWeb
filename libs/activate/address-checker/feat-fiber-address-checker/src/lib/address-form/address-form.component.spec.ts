import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddressFormComponent } from './address-form.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CitySuggestions } from '@address-checker/data-access';
import {
  BoxNumberInputFieldComponent,
  HouseNumberInputFieldComponent,
  StreetInputFieldComponent,
  ZipcodeInputFieldComponent,
} from '@address-checker/ui';

describe('AddressFormComponent', () => {
  let component: AddressFormComponent;
  let fixture: ComponentFixture<AddressFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ZipcodeInputFieldComponent,
        StreetInputFieldComponent,
        HouseNumberInputFieldComponent,
        BoxNumberInputFieldComponent,
        ReactiveFormsModule,
        HttpClientTestingModule,
        MatAutocompleteModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [
        {
          provide: 'Window',
          useValue: window,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AddressFormComponent);
    component = fixture.componentInstance;
    component.addressForm = new FormGroup({});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should initialize form controls correctly', () => {
      component.ngOnInit();
      expect(component.addressForm.controls['cityOrZipCode']).toBeDefined();
      expect(component.addressForm.controls['street']).toBeDefined();
      expect(component.addressForm.controls['houseNumber']).toBeDefined();
      expect(component.addressForm.controls['boxNumber']).toBeDefined();

      expect(component.addressForm.get('street')?.disabled).toBe(true);
      expect(component.addressForm.get('houseNumber')?.disabled).toBe(true);
      expect(component.addressForm.get('boxNumber')?.disabled).toBe(true);
    });

    describe('should enable/disable controls based on cityOrZipCode', () => {
      it('value is equal to a city suggestion', () => {
        const cityOrZipCodeControl = component.addressForm.get('cityOrZipCode') as FormControl;

        const citySuggestion: CitySuggestions = { geoId: '1', subMunicipality: 'Test City', zipCode: '12345' };
        cityOrZipCodeControl.setValue(citySuggestion);

        expect(component.municipalityGeoId).toBe('1');
        expect(component.addressForm.get('street')?.enabled).toBe(true);
        expect(component.addressForm.get('houseNumber')?.enabled).toBe(false);
        expect(component.addressForm.get('boxNumber')?.enabled).toBe(false);
      });

      it('value is equal to empty string', () => {
        const cityOrZipCodeControl = component.addressForm.get('cityOrZipCode') as FormControl;

        cityOrZipCodeControl.setValue('');

        expect(component.municipalityGeoId).toBe(undefined);
        expect(component.addressForm.get('street')?.disabled).toBe(true);
        expect(component.addressForm.get('houseNumber')?.disabled).toBe(true);
        expect(component.addressForm.get('boxNumber')?.disabled).toBe(true);
      });
    });

    it('should reset houseNumber and boxNumber when street value changes', () => {
      const streetControl = component.addressForm.get('street') as FormControl;
      const houseNumberControl = component.addressForm.get('houseNumber') as FormControl;
      const boxNumberControl = component.addressForm.get('boxNumber') as FormControl;

      streetControl.setValue('Test Street');

      expect(component.street).toBe('Test Street');
      expect(houseNumberControl.value).toBe('');
      expect(boxNumberControl.value).toBe('');
    });
  });
});
