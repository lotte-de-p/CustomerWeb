import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MockComponent } from 'ng-mocks';
import { DateOfBirthPickerWithDropdownInputComponent, MonthDropdownComponent } from '../../date-of-birth-picker';
import { InputComponent } from '../../input';

describe('DateOfBirthPickerWithDropdownInputComponent', () => {
  let component: DateOfBirthPickerWithDropdownInputComponent;
  let fixture: ComponentFixture<DateOfBirthPickerWithDropdownInputComponent>;
  let formBuilder: FormBuilder;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, TranslateModule.forRoot()],
      providers: [TranslateService],
      declarations: [
        DateOfBirthPickerWithDropdownInputComponent,
        MockComponent(InputComponent),
        MockComponent(MonthDropdownComponent),
      ],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateOfBirthPickerWithDropdownInputComponent);
    component = fixture.componentInstance;
    formBuilder = TestBed.inject(FormBuilder);
    component.form = formBuilder.group({});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
