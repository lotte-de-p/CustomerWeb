import { Component, forwardRef, Injector, Input, Optional, ViewChild } from '@angular/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { LanguageService } from '@telenet/ng-lib-page';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputAbstractComponent } from '../input-abstract.component';
import { FormErrorService, MessageGroupDirective } from '../../errors';
import { MatDatepicker } from '@angular/material/datepicker';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'L',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatepickerComponent),
      multi: true,
    },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class DatepickerComponent extends InputAbstractComponent {
  @Input() customLabel? = false;
  @Input() showPlaceHolder = true;
  @Input() minDate?: Date;
  @Input() maxDate?: Date;
  @ViewChild('datepicker') datepicker: MatDatepicker<Date>;
  value: string;

  constructor(
    public languageService: LanguageService,
    public formService: FormErrorService,
    @Optional() public messageGroupDirective: MessageGroupDirective,
    public injector: Injector
  ) {
    super(languageService, formService, messageGroupDirective, injector);
  }

  onChange = (_: string) => {
    // empty implementation
  };
  onTouch = (_: boolean) => {
    // empty implementation
  };

  registerOnChange(fn: VoidFunction): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: VoidFunction): void {
    this.onTouch = fn;
  }

  getLabel(): string {
    if (this.customLabel) {
      return super.getLabel();
    }
    return '';
  }

  writeValue(value: string): void {
    this.value = value;
  }

  updateValue(value: string): void {
    this.onTouched(true);
    this.onChange(value);
  }

  onTouched = (_: boolean) => {
    // empty implementation
  };
}
