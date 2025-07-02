import { ComponentFixture, discardPeriodicTasks, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { AddressFormComponent } from './address-form.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ImageSrcPathModule, LanguageEnum } from '@telenet/ng-lib-page';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CommonModule } from '@angular/common';
import { AddressRequestInterface, ItsMeResponseInterface } from '@sales/customer-registration/data-access';

describe('AddressFormComponent', () => {
  const mainStreet = 'Main Street';

  let component: AddressFormComponent;
  let fixture: ComponentFixture<AddressFormComponent>;

  const formBuilder: FormBuilder = new FormBuilder();
  const setLang = (type: string) => {
    return {
      document: {
        documentElement: {
          lang: type,
        },
      },
    };
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AddressFormComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatAutocompleteModule,
        ImageSrcPathModule,
        HttpClientTestingModule,
        CommonModule,
      ],
      providers: [
        { provide: FormBuilder, useValue: formBuilder },
        { provide: 'Window', useValue: setLang(LanguageEnum.NL) },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(AddressFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize addressForm', () => {
    expect(component.addressForm).toBeDefined();
    expect(component.addressForm.controls['zipCode']).toBeDefined();
    expect(component.addressForm.controls['street']).toBeDefined();
  });

  it('should prefill addressForm', () => {
    component.populateAddress = {
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
    };
    expect(component.addressForm).toBeDefined();
    expect(component.addressForm.controls['zipCode'].value).toStrictEqual({ location: 'Mechelen', postalCode: '2800' });
    expect(component.addressForm.controls['houseNumber'].value).toBe('10');
    expect(component.addressForm.controls['street'].value).toBe('olivetenvest');
    expect(component.addressForm.controls['subHouse'].value).toBe('');
    expect(component.addressForm.controls['boxNumber'].value).toBe('06');
  });

  it('should filter municipalities based on keyword', fakeAsync(() => {
    component.locationSuggestions = [
      { postalCode: '1000', location: 'Brussels' },
      { postalCode: '2000', location: 'Antwerp' },
    ];
    component.addressForm.controls['zipCode'].setValue('brussels');
    tick(300);
    fixture.detectChanges();
    expect(component.filteredLocationSuggestions).toEqual([{ postalCode: '1000', location: 'Brussels' }]);
  }));

  it('should update street suggestions on value change', fakeAsync(() => {
    component.streetSuggestions = [mainStreet, 'Broadway', 'Elm Street'];
    component.addressForm.controls['street'].setValue('main');

    tick(300);
    fixture.detectChanges();
    flush();
    expect(component.filteredStreetSuggestions).toEqual([mainStreet]);
  }));

  it('should emit event to update box number suggestions on value change', fakeAsync(() => {
    jest.spyOn(component.updateBoxEmitter, 'emit');
    component.addressForm.controls['boxNumber'].setValue('10');
    tick(300);
    fixture.detectChanges();
    flush();
    expect(component.updateBoxEmitter.emit).toHaveBeenCalled();
  }));

  it('should emit event to update sub house number suggestions on value change', fakeAsync(() => {
    jest.spyOn(component.updateSubHouseEmitter, 'emit');
    component.addressForm.controls['subHouse'].setValue('10');

    tick(300);
    fixture.detectChanges();
    flush();
    expect(component.updateSubHouseEmitter.emit).toHaveBeenCalled();
  }));

  it('should populate form fields from itsMeDetails', fakeAsync(() => {
    const itsMeDetailsMock: ItsMeResponseInterface = {
      customerAddress: {
        postalCode: '1000',
        municipality: 'Brussels',
        street: mainStreet,
        houseNumber: '123',
        subHouseNumber: 'A',
        boxNumber: '1',
      },
      cardIDNumber: '1234567890',
      rrn: '0402124321',
      birthLocation: 'Brussels',
      emailVerified: false,
      nationality: 'BE',
      email: 'Jane.Eyre@gmail.com',
      phoneNumber: '0484123456',
      gender: 'female',
      firstName: 'Jane',
      lastName: 'Eyre',
      birthday: '12/02/2004',
    };

    component.itsMeDetails = itsMeDetailsMock;

    component.locationSuggestions = [{ postalCode: '1000', location: 'Brussels' }];
    component.streetSuggestions = [mainStreet, 'Broadway', 'Elm Street'];
    fixture.detectChanges();
    tick(300);
    const addressFormValue = component.addressForm.value;

    expect(addressFormValue.zipCode.postalCode).toBe(itsMeDetailsMock.customerAddress?.postalCode);

    expect(addressFormValue.zipCode.location).toBe(itsMeDetailsMock.customerAddress?.municipality);
    expect(addressFormValue.street).toBe(itsMeDetailsMock.customerAddress?.street);
    expect(addressFormValue.houseNumber).toBe(itsMeDetailsMock.customerAddress?.houseNumber);
    expect(addressFormValue.subHouse).toBe(itsMeDetailsMock.customerAddress?.subHouseNumber);
    expect(addressFormValue.boxNumber).toBe(itsMeDetailsMock.customerAddress?.boxNumber);

    discardPeriodicTasks();
  }));

  it('should call updateStreetsEmitter when updateStreets is called and enable form fields correctly', fakeAsync(() => {
    const emitSpy = jest.spyOn(component.updateStreetsEmitter, 'emit');
    component.addressForm.controls['zipCode'].setValue({ postalCode: '1000' });
    tick(300);
    fixture.detectChanges();
    flush();
    expect(emitSpy).toHaveBeenCalledWith('1000');
    expect(component.addressForm.controls['street'].enabled).toBe(true);
    discardPeriodicTasks();
  }));
  describe('updateAddress', () => {
    it('should emit address save event when form is valid', () => {
      jest.spyOn(component.saveAddressEmitter, 'emit');
      component.addressForm.patchValue({
        houseNumber: '123',
        municipality: 'Brussels',
        zipCode: { location: 'Mechelen', postalCode: '2800' },
        street: mainStreet,
      });
      component.addressForm.controls['zipCode'].enable();
      component.addressForm.controls['street'].enable();
      component.addressForm.controls['houseNumber'].enable();
      component.updateAddress('houseNumber');
      const request: AddressRequestInterface = {
        boxNumber: '',
        houseNumber: '123',
        municipality: 'Mechelen',
        postalCode: '2800',
        street: mainStreet,
        subHouseNumber: '',
        type: 'default',
      };
      expect(component.saveAddressEmitter.emit).toHaveBeenCalledWith(request);
    });
    it('should mot emit address save event when form is valid', () => {
      jest.spyOn(component.saveAddressEmitter, 'emit');
      component.addressForm.patchValue({
        houseNumber: '',
        municipality: { location: 'Mechelen', postalCode: '2800' },
        zipCode: { location: 'Mechelen', postalCode: '2800' },
        street: mainStreet,
      });
      component.addressForm.controls['zipCode'].enable();
      component.addressForm.controls['street'].enable();
      component.addressForm.controls['houseNumber'].enable();
      component.updateAddress('houseNumber');
      expect(component.saveAddressEmitter.emit).not.toHaveBeenCalled();
    });
  });

  describe('isValidInput', () => {
    it('should set error to zip-code if invalid', () => {
      component._locationSuggestions = [
        { postalCode: '1000', location: 'Brussels' },
        { postalCode: '2000', location: 'Antwerp' },
      ];
      jest.spyOn(component.addressForm.controls['zipCode'], 'setErrors');
      component.isValidInput('zipCode', '28');
      expect(component.addressForm.controls['zipCode'].setErrors).toHaveBeenCalledWith({ invalid: true });
    });
    it('should set error to streets if invalid', () => {
      component._streetSuggestions = ['Olivetenvest', 'Battelsesteenweg'];
      jest.spyOn(component.addressForm.controls['street'], 'setErrors');
      component.isValidInput('street', 'olive');
      expect(component.addressForm.controls['street'].setErrors).toHaveBeenCalledWith({ invalid: true });
    });
  });
});
