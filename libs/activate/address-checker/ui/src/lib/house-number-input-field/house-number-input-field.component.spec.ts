import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, NgControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HouseNumberInputFieldComponent } from './house-number-input-field.component';
import { FiberAddressCheckerService, NumberSuggestions } from '@address-checker/data-access';
import { of, take } from 'rxjs';

class MockNgControl extends NgControl {
  control = new FormControl();

  viewToModelUpdate() {
    // empty implementation
  }
}

describe('HouseNumberInputFieldComponent', () => {
  let component: HouseNumberInputFieldComponent;
  let fixture: ComponentFixture<HouseNumberInputFieldComponent>;
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

  const numberSuggestion: NumberSuggestions = {
    geoId: '12345',
    houseNumber: '2',
    unit: '5',
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
        HouseNumberInputFieldComponent,
      ],
      providers: [
        { provide: NgControl, useValue: mockNgControl },
        {
          provide: 'Window',
          useValue: window,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HouseNumberInputFieldComponent);
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
      jest.spyOn(fiberAddressCheckerService, 'getSuggestionsForNumber').mockReturnValue(of([numberSuggestion]));
    });

    it('with suggestion when match', (done) => {
      mockNgControl.control.setValue('2');

      mockNgControl.control.valueChanges.pipe(take(1)).subscribe(() => {
        expect(mockNgControl.control.value).toBe(numberSuggestion);
        done();
      });
    });

    it('with suggestion when not match', (done) => {
      mockNgControl.control.setValue('678');

      expect(component.controls.value).toBe('678');

      done();
    });
  });

  it('should register onChange function', () => {
    const spy = jest.spyOn(myObject, 'onChange');

    component.registerOnChange(myObject.onChange);

    component.onChange(numberSuggestion);

    expect(spy).toHaveBeenCalledWith(numberSuggestion);
  });

  it('should register onTouched function', () => {
    const onTouchedSpy = jest.spyOn(myObject, 'onTouch');
    component.registerOnTouched(myObject.onTouch);

    component.onTouched();

    expect(onTouchedSpy).toHaveBeenCalled();
  });

  it('should expose formControl correctly', () => {
    expect(component.formControl).toBe(mockNgControl.control);
  });
});
