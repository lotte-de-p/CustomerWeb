import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AbstractDateOfBirthPickerComponent } from './abstract-date-of-birth-picker.component';
import { createSpyObj } from 'jest-createspyobj';
import dayjs from 'dayjs';
import { InputComponent } from '../input';

describe('AbstractDateOfBirthPickerComponent', () => {
  let component: AbstractDateOfBirthPickerComponent;
  let translateService: TranslateService;
  let fixture: ComponentFixture<AbstractDateOfBirthPickerComponent>;
  let formBuilder: FormBuilder;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, TranslateModule.forRoot()],
      providers: [TranslateService],
      declarations: [AbstractDateOfBirthPickerComponent],
    });
    fixture = TestBed.createComponent(AbstractDateOfBirthPickerComponent);
    component = fixture.componentInstance;
    translateService = TestBed.inject(TranslateService);

    formBuilder = TestBed.inject(FormBuilder);
    component.form = formBuilder.group({});

    fixture.detectChanges();
    jest.useFakeTimers().setSystemTime(new Date('2021-04-04'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should init control and min default age is undefined', () => {
      jest.spyOn(component.form, 'addControl');

      component.ngOnInit();

      expect(component.form.addControl).toHaveBeenCalled();
    });

    it('should min default age is defined', () => {
      jest.spyOn(component.form, 'addControl');

      component.ngOnInit();

      expect(component.form.addControl).toHaveBeenCalled();
    });
  });

  describe('set minDefaultLegalAge', () => {
    it.each([
      [0, 0],
      [16, 16],
      [undefined, 18],
    ])(
      'should initialise min default legal age to passed value or 18 if undefined',
      (minAge: number | undefined, result: number) => {
        component.minDefaultLegalAge = minAge;
        expect(component.minDefaultLegalAge).toBe(result);
      }
    );
  });

  describe('validateDayBasedOnMonth', () => {
    beforeEach(() => {
      component.dayInputField = createSpyObj<InputComponent>(InputComponent, ['setError']);
      component.yearInputField = createSpyObj<InputComponent>(InputComponent, ['setError']);
    });
    it('should pass validation for a valid date', () => {
      component.form.controls['day'].setValue('15');
      component.form.controls['year'].setValue('2023');
      component.form.controls['selectedMonth'].setValue('6');
      jest.spyOn(component, 'isValidDate');
      component.dayBasedValidationFeatureFlag = true;
      component.ngOnInit();
      component.form.valueChanges.subscribe((value) => {
        expect(component.isValidDate).toHaveBeenCalledWith(value.year, value.selectedMonth, value.day);
        expect(component.form.controls['day'].errors).toBeNull();
      });
    });

    it('should pass validation for a valid date (29-Feb leap year)', () => {
      component.form.controls['day'].setValue('29');
      component.form.controls['year'].setValue('2000');
      component.form.controls['selectedMonth'].setValue('2');
      jest.spyOn(component, 'isValidDate');
      component.dayBasedValidationFeatureFlag = true;
      component.ngOnInit();
      component.form.valueChanges.subscribe((value) => {
        expect(component.isValidDate).toHaveBeenCalledWith(value.year, value.selectedMonth, value.day);
        expect(component.form.controls['day'].errors).toBeNull();
      });
    });

    it('should fail validation for an invalid date (29-Feb non leap year)', () => {
      component.form.controls['day'].setValue('29');
      component.form.controls['year'].setValue('2023');
      component.form.controls['selectedMonth'].setValue('2');
      component.dayBasedValidationFeatureFlag = true;
      jest.spyOn(component, 'isValidDate');
      component.ngOnInit();
      component.form.valueChanges.subscribe((value) => {
        expect(component.isValidDate).toHaveBeenCalledWith(value.year, value.selectedMonth, value.day);
        expect(component.form.controls['day'].errors).toEqual({ invalidDate: true });
      });
    });

    it('should pass validation for a valid date (day month)', () => {
      component.form.controls['day'].setValue('31');
      component.form.controls['year'].setValue('0');
      component.form.controls['selectedMonth'].setValue('1');
      jest.spyOn(component, 'isValidDayForMonth');
      component.dayBasedValidationFeatureFlag = true;
      component.ngOnInit();
      component.form.valueChanges.subscribe((value) => {
        expect(component.isValidDayForMonth).toHaveBeenCalledWith(value.selectedMonth, value.day);
        expect(component.form.controls['day'].errors).toBeNull();
      });
    });

    it('should fail validation for an invalid date (day month) (29-Feb)', () => {
      component.form.controls['day'].setValue('29');
      component.form.controls['year'].setValue('0');
      component.form.controls['selectedMonth'].setValue('2');
      jest.spyOn(component, 'isValidDayForMonth');
      component.dayBasedValidationFeatureFlag = true;
      component.ngOnInit();
      component.form.valueChanges.subscribe((value) => {
        expect(component.isValidDayForMonth).toHaveBeenCalledWith(value.selectedMonth, value.day);
        expect(component.form.controls['day'].errors).toEqual({ invalidDate: true });
      });
    });
  });

  describe('getTranslatedDayOrMonthNames', () => {
    it('should set day names based on translation key', () => {
      const days = component.getTranslatedDayOrMonthNames('days');
      expect(days[0]).toBe(translateService.instant('general.date-picker-day-1'));
      expect(days[1]).toBe(translateService.instant('general.date-picker-day-2'));
      expect(days[2]).toBe(translateService.instant('general.date-picker-day-3'));
      expect(days[3]).toBe(translateService.instant('general.date-picker-day-4'));
      expect(days[4]).toBe(translateService.instant('general.date-picker-day-5'));
      expect(days[5]).toBe(translateService.instant('general.date-picker-day-6'));
      expect(days[6]).toBe(translateService.instant('general.date-picker-day-7'));
    });

    it('should set month names based on translation key', () => {
      const months = component.getTranslatedDayOrMonthNames('months');
      expect(months[0]).toBe(translateService.instant('general.date-picker-month-1'));
      expect(months[1]).toBe(translateService.instant('general.date-picker-month-2'));
      expect(months[2]).toBe(translateService.instant('general.date-picker-month-3'));
      expect(months[3]).toBe(translateService.instant('general.date-picker-month-4'));
      expect(months[4]).toBe(translateService.instant('general.date-picker-month-5'));
      expect(months[5]).toBe(translateService.instant('general.date-picker-month-6'));
      expect(months[6]).toBe(translateService.instant('general.date-picker-month-7'));
      expect(months[7]).toBe(translateService.instant('general.date-picker-month-8'));
      expect(months[8]).toBe(translateService.instant('general.date-picker-month-9'));
      expect(months[9]).toBe(translateService.instant('general.date-picker-month-10'));
      expect(months[10]).toBe(translateService.instant('general.date-picker-month-11'));
      expect(months[11]).toBe(translateService.instant('general.date-picker-month-12'));
    });
  });

  describe('detectFormControlsValueChange', () => {
    beforeEach(() => {
      component.dayInputField = createSpyObj<InputComponent>(InputComponent, ['setError']);
      component.yearInputField = createSpyObj<InputComponent>(InputComponent, ['setError']);
    });

    it('should show error when invalid day is entered', () => {
      const day = component.form.controls['day'];
      day.setValue('rrr');

      expect(day.errors?.['pattern']).toEqual({
        actualValue: 'rrr',
        requiredPattern: '/^(([0]?[1-9])|([1-2][0-9])|(3[01]))$/',
      });
    });

    it('should not show error when valid day is entered', () => {
      const day = component.form.controls['day'];
      day.setValue('11');

      expect(day.errors).toBeNull();
    });

    it('should show error when invalid month is selected', () => {
      const selectedMonth = component.form.controls['selectedMonth'];
      selectedMonth.setValue('rrr');

      expect(selectedMonth.errors?.['pattern']).toEqual({
        actualValue: 'rrr',
        requiredPattern: '/^(0?[1-9]|1[012])$/',
      });
    });

    it('should not show error when valid month is entered', () => {
      const selectedMonth = component.form.controls['selectedMonth'];
      selectedMonth.setValue('12');

      expect(selectedMonth.errors).toBeNull();
    });

    it('should show error when invalid year is entered', () => {
      const year = component.form.controls['year'];
      year.setValue('20211');

      expect(year.errors?.['pattern']).toEqual({
        actualValue: '20211',
        requiredPattern: '/^(19|[2-9]\\d)\\d{2}$/',
      });
    });

    it('should not show error when valid year is entered', () => {
      const year = component.form.controls['year'];
      year.setValue('1992');

      expect(year.errors).toBeNull();
    });

    it('should show error when age is less than 18', () => {
      component.form.controls['day'].setValue(11);
      component.form.controls['selectedMonth'].setValue(3);
      component.form.controls['year'].setValue(2020);

      expect(component.form.errors?.['invalidBirthDate']).toEqual('ng.dob.error-age-constraint');
    });

    it('should show error when age is bigger than 110', () => {
      component.form.controls['day'].setValue(11);
      component.form.controls['selectedMonth'].setValue(3);
      component.form.controls['year'].setValue(1900);

      expect(component.form.errors?.['invalidBirthDate']).toEqual('ng.dob.error-age-constraint');
    });

    it('should show error when age in the future', () => {
      component.form.controls['day'].setValue(11);
      component.form.controls['selectedMonth'].setValue(3);
      component.form.controls['year'].setValue(2030);

      expect(component.form.errors?.['invalidBirthDate']).toEqual('ng.dob.error-dob-constraint');
    });

    it('should not show error when date is valid', () => {
      component.form.controls['day'].setValue(11);
      component.form.controls['selectedMonth'].setValue(4);
      component.form.controls['year'].setValue(1991);

      formShouldBeValid();
    });

    it('should not show error if 18th birthdate is today', () => {
      const currentDate = dayjs().subtract(component.minDefaultLegalAge, 'years');
      component.form.controls['day'].setValue(currentDate.date());
      component.form.controls['selectedMonth'].setValue(currentDate.month());
      component.form.controls['year'].setValue(currentDate.year());

      formShouldBeValid();
    });

    it('should not show error if date is exact 110 years old', () => {
      const currentDate = dayjs().add(2, 'months').subtract(component.MAX_DEFAULT_LEGAL_AGE, 'years');
      component.form.controls['day'].setValue(currentDate.date());
      component.form.controls['selectedMonth'].setValue(currentDate.month());
      component.form.controls['year'].setValue(currentDate.year());

      expect(component.form.errors).toBeNull();
    });
  });

  function formShouldBeValid() {
    expect(component.form.controls['day'].errors).toBeNull();
    expect(component.form.controls['selectedMonth'].errors).toBeNull();
    expect(component.form.controls['year'].errors).toBeNull();
    expect(component.form.errors).toBeNull();
    expect(component.form.valid).toBe(true);
  }

  afterEach(() => {
    jest.useRealTimers();
  });
});
