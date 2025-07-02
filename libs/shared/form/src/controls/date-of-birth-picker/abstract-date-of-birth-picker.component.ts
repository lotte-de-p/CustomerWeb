import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { times } from 'lodash-es';
import { TranslateService } from '@ngx-translate/core';
import { InputOption } from '../radio';
import { InputComponent } from '../input';
import { IMonth } from './model';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import dayjs, { Dayjs } from 'dayjs';

@UntilDestroy()
@Component({
  selector: 'tg-abstract-date-of-birth-picker-with-dropdown-input',
  templateUrl: './abstract-date-of-birth-picker.component.html',
})
export class AbstractDateOfBirthPickerComponent implements OnInit {
  static readonly DOB_DAY_REGEX: RegExp = /^(([0]?[1-9])|([1-2][0-9])|(3[01]))$/;
  static readonly DOB_MONTH_REGEX: RegExp = /^(0?[1-9]|1[012])$/;
  static readonly DOB_YEAR_REGEX: RegExp = /^(19|[2-9]\d)\d{2}$/;

  @Input() form: FormGroup;
  @Input() day: number;
  @Input() year: number;
  @Input() month: number;
  @Input() minDefaultAge: number | undefined;
  @Input() dayBasedValidationFeatureFlag?: boolean = false;

  @ViewChild('day') dayInputField: InputComponent;
  @ViewChild('year') yearInputField: InputComponent;

  private MIN_DEFAULT_LEGAL_AGE = 18;
  options: InputOption[];

  readonly MAX_DEFAULT_LEGAL_AGE = 110;
  readonly MOMENT_DATE_FORMAT = 'DD/MM/YYYY';

  @Input()
  set minDefaultLegalAge(value: number | undefined) {
    this.MIN_DEFAULT_LEGAL_AGE = value || value === 0 ? value : 18;
  }

  get minDefaultLegalAge(): number {
    return this.MIN_DEFAULT_LEGAL_AGE;
  }

  constructor(private readonly translateService: TranslateService) {}

  ngOnInit(): void {
    this.options = this.getTranslatedDayOrMonthNames('months').map(
      (month, index) => new InputOption(String(index + 1), String(month))
    );
    this.form.addControl(
      'day',
      new FormControl(this.day, {
        validators: [Validators.required, Validators.pattern(AbstractDateOfBirthPickerComponent.DOB_DAY_REGEX)],
        updateOn: 'blur',
      })
    );
    this.form.addControl(
      'selectedMonth',
      new FormControl(this.month, {
        validators: [Validators.required, Validators.pattern(AbstractDateOfBirthPickerComponent.DOB_MONTH_REGEX)],
      })
    );
    this.form.addControl(
      'year',
      new FormControl(this.year, {
        validators: [Validators.required, Validators.pattern(AbstractDateOfBirthPickerComponent.DOB_YEAR_REGEX)],
        updateOn: 'blur',
      })
    );
    this.detectFormControlsValueChange();
  }

  getTranslatedDayOrMonthNames(type: string): IMonth[] {
    const noOfDays = type === 'days' ? 7 : 12,
      key = type === 'days' ? 'general.date-picker-day-' : 'general.date-picker-month-';
    return times(noOfDays, (index) => {
      const monthIndex = index + 1;
      return this.translateService.instant(key + monthIndex);
    });
  }

  detectFormControlsValueChange(): void {
    this.form.valueChanges.pipe(untilDestroyed(this)).subscribe((value) => {
      const day: number = value.day ? value.day : null;
      const month: number = value.selectedMonth ? value.selectedMonth : null;
      const year: number = value.year ? value.year : null;
      const selectedDate = dayjs().month(month).date(day).year(year);
      if (!selectedDate.isValid()) {
        this.form.setErrors(null);
      }
      this.validateDayBasedOnMonth();
      if (day && month && year) {
        this.removeValidationErrors();
        this.checkDay(selectedDate);
        this.checkYear();
        this.checkDate(selectedDate, dayjs().add(1, 'months'));
      }
    });
  }

  validateDayBasedOnMonth(): ValidationErrors | null {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    let isValid: any;
    if (this.dayBasedValidationFeatureFlag && this.form.value.day && this.form.value.selectedMonth && this) {
      this.form.valueChanges.pipe(untilDestroyed(this)).subscribe((value) => {
        const day = Number(value.day);
        const year = Number(value.year);
        const month = Number(value.selectedMonth);
        isValid = year !== 0 ? this.isValidDate(year, month, day) : this.isValidDayForMonth(month, day);
        if (!isValid) {
          this.dayInputField.setError({ invalidDate: true });
          this.form.get('day')?.setErrors({ invalidDate: true });
        }
      });
    }
    return isValid;
  }

  isValidDate(year: number, month: number, day: number): boolean {
    const noOfDays = new Date(year, month, 0).getDate();
    const date = new Date(year, month - 1, day);
    return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day && day <= noOfDays;
  }

  isValidDayForMonth(month: number, day: number): boolean {
    const noOfDays = new Date(0, month, 0).getDate();
    return day <= noOfDays;
  }

  private checkYear() {
    const yearErrors = this.form.get('year')?.errors;
    if (yearErrors?.['pattern']) {
      this.yearInputField.setError({ invalid: true });
      this.form.get('year')?.setErrors({ invalid: true });
    }
  }

  private checkDay(selectedDate: Dayjs) {
    const yearErrors = this.form.get('year');
    if (!selectedDate.isValid() && !yearErrors?.errors) {
      this.dayInputField.setError({ invalid: true });
      this.form.get('day')?.setErrors({ invalid: true });
    }
  }

  private checkDate(selectedDate: Dayjs, currentDate: Dayjs): void {
    const yearErrors = this.form.get('year')?.errors;
    const dayErrors = this.form.get('day')?.errors;
    if (selectedDate.isValid() && !yearErrors && !dayErrors) {
      const maxLegalAge = dayjs(currentDate).add(1, 'months').add(-this.MAX_DEFAULT_LEGAL_AGE, 'years');
      const minLegalAge = dayjs(currentDate).add(1, 'months').add(-this.MIN_DEFAULT_LEGAL_AGE, 'years');
      selectedDate.isAfter(dayjs(minLegalAge));
      if (selectedDate.isAfter(currentDate)) {
        this.setInvalidBirthDateError('ng.dob.error-dob-constraint');
      } else if (selectedDate.isBefore(maxLegalAge) || selectedDate.isAfter(minLegalAge)) {
        this.setInvalidBirthDateError('ng.dob.error-age-constraint');
      }
    }
  }

  private removeValidationErrors(): void {
    this.form.setErrors(null);
    this.dayInputField?.setError(null);
    this.form.get('day')?.setErrors(null);
    this.yearInputField.setError(null);
  }

  private setInvalidBirthDateError(errorValue: string): void {
    this.form.setErrors({ invalidBirthDate: this.translateService.instant(errorValue) });
  }
}
