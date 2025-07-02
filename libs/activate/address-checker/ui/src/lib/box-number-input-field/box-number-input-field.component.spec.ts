import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, NgControl, ReactiveFormsModule } from '@angular/forms';
import { BoxNumberInputFieldComponent } from './box-number-input-field.component';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

class MockNgControl extends NgControl {
  control = new FormControl();

  viewToModelUpdate() {
    // empty implementation
  }
}

describe('BoxNumberInputFieldComponent', () => {
  let component: BoxNumberInputFieldComponent;
  let fixture: ComponentFixture<BoxNumberInputFieldComponent>;
  let mockNgControl: MockNgControl;

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
        BoxNumberInputFieldComponent,
      ],
      providers: [{ provide: NgControl, useValue: mockNgControl }],
    }).compileComponents();

    fixture = TestBed.createComponent(BoxNumberInputFieldComponent);
    fixture.componentInstance.controls = mockNgControl;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should register onChange function', () => {
    const spy = jest.spyOn(myObject, 'onChange');

    component.registerOnChange(myObject.onChange);

    const testValue = '1';
    component.onChange(testValue);

    expect(spy).toHaveBeenCalledWith(testValue);
  });

  it('should register onTouched function', () => {
    const onTouchedSpy = jest.spyOn(myObject, 'onTouch');
    component.registerOnTouched(myObject.onTouch);

    component.onTouched();

    expect(onTouchedSpy).toHaveBeenCalled();
  });

  it('should call control.setValue when onChange is triggered', () => {
    const testValue = 'Test Value';
    const setValueSpy = jest.spyOn(mockNgControl.control, 'setValue');

    component.onChange(testValue);

    expect(setValueSpy).toHaveBeenCalledWith(testValue);
  });

  it('should expose formControl correctly', () => {
    expect(component.formControl).toBe(mockNgControl.control);
  });
});
