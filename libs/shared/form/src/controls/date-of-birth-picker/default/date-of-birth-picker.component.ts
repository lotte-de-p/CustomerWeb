import { Component } from '@angular/core';
import { AbstractDateOfBirthPickerComponent } from '../abstract-date-of-birth-picker.component';

@Component({
  selector: 'app-date-of-birth-picker',
  templateUrl: './date-of-birth-picker.component.html',
})
export class DateOfBirthPickerComponent extends AbstractDateOfBirthPickerComponent {}
