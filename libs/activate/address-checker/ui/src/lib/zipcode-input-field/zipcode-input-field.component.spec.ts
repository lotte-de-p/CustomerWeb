import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, NgControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CitySuggestions, FiberAddressCheckerService } from '@address-checker/data-access';
import { of } from 'rxjs';
import { ZipcodeInputFieldComponent } from './zipcode-input-field.component';

class MockNgControl extends NgControl {
  control = new FormControl();

  viewToModelUpdate() {
    // empty implementation
  }
}

describe('ZipcodeInputFieldComponent', () => {
  let component: ZipcodeInputFieldComponent;
  let fixture: ComponentFixture<ZipcodeInputFieldComponent>;
  let mockNgControl: MockNgControl;
  let fiberAddressCheckerService: FiberAddressCheckerService;

  const myObject = {
    onTouch: () => {
      // empty implementation
    },
    onChange: () => {
      // empty implementation
    },
  };

  const citySuggestions: CitySuggestions = {
    geoId: '12345',
    subMunicipality: 'Mechelen',
    zipCode: '2800',
  };

  beforeEach(() => {
    mockNgControl = new MockNgControl();

    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatDialogModule,
        HttpClientModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        ZipcodeInputFieldComponent,
      ],
      providers: [
        { provide: NgControl, useValue: mockNgControl },
        {
          provide: 'Window',
          useValue: window,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ZipcodeInputFieldComponent);
    fixture.componentInstance.controls = mockNgControl;
    component = fixture.componentInstance;
    fiberAddressCheckerService = TestBed.inject(FiberAddressCheckerService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('set control value', () => {
    beforeEach(() => {
      jest.spyOn(fiberAddressCheckerService, 'getSuggestionsForZipcodeOrCity').mockReturnValue(of([citySuggestions]));
    });

    it('with suggestion when match zipcode', (done) => {
      mockNgControl.control.setValue('2800');
      mockNgControl.control.valueChanges.subscribe(() => {
        expect(mockNgControl.control.value).toBe(citySuggestions);
        done();
      });
    });

    it('with suggestion when match municipality', (done) => {
      mockNgControl.control.setValue('Mechelen');
      mockNgControl.control.valueChanges.subscribe(() => {
        expect(mockNgControl.control.value).toBe(citySuggestions);
        done();
      });
    });

    it('with suggestion when no suggestion match', (done) => {
      mockNgControl.control.setValue('Brussels');

      expect(component.controls.value).toBe('Brussels');

      done();
    });
  });

  it('should expose formControl correctly', () => {
    expect(component.formControl).toBe(mockNgControl.control);
  });

  it('should register onChange function', () => {
    const spy = jest.spyOn(myObject, 'onChange');

    component.registerOnChange(myObject.onChange);

    component.onChange(citySuggestions);

    expect(spy).toHaveBeenCalledWith(citySuggestions);
  });

  it('should register onTouched function', () => {
    const onTouchedSpy = jest.spyOn(myObject, 'onTouch');
    component.registerOnTouched(myObject.onTouch);

    component.onTouched();

    expect(onTouchedSpy).toHaveBeenCalled();
  });
});
