import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, NgControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { FiberAddressCheckerService } from '@address-checker/data-access';
import { of } from 'rxjs';
import { StreetInputFieldComponent } from './street-input-field.component';

class MockNgControl extends NgControl {
  control = new FormControl();

  viewToModelUpdate() {
    // empty implementation
  }
}

describe('StreetInputFieldComponent', () => {
  let component: StreetInputFieldComponent;
  let fixture: ComponentFixture<StreetInputFieldComponent>;
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
        StreetInputFieldComponent,
      ],
      providers: [
        { provide: NgControl, useValue: mockNgControl },
        {
          provide: 'Window',
          useValue: window,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(StreetInputFieldComponent);
    fixture.componentInstance.controls = mockNgControl;
    component = fixture.componentInstance;
    fiberAddressCheckerService = TestBed.inject(FiberAddressCheckerService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('set value with suggestion match', () => {
    jest.spyOn(fiberAddressCheckerService, 'getSuggestionsForStreet').mockReturnValue(of(['street1', 'street2']));

    mockNgControl.control?.setValue('street');

    expect(component.controls.value).toEqual('street');
  });

  it('should set value when added less than 2 characters', (done) => {
    jest.spyOn(fiberAddressCheckerService, 'getSuggestionsForStreet').mockReturnValue(of(['street1', 'street2']));

    mockNgControl.control.setValue('s');

    expect(mockNgControl.control.value).toBe('s');

    done();
  });

  it('should register onChange function', () => {
    const spy = jest.spyOn(myObject, 'onChange');

    component.registerOnChange(myObject.onChange);

    component.onChange('street1');

    expect(spy).toHaveBeenCalledWith('street1');
  });

  it('should expose formControl correctly', () => {
    expect(component.formControl).toBe(mockNgControl.control);
  });

  it('should register onTouched function', () => {
    const onTouchedSpy = jest.spyOn(myObject, 'onTouch');
    component.registerOnTouched(myObject.onTouch);

    component.onTouched();

    expect(onTouchedSpy).toHaveBeenCalled();
  });
});
