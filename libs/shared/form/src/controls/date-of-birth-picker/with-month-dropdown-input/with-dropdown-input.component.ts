import { Component, OnInit } from '@angular/core';
import { AbstractDateOfBirthPickerComponent } from '../abstract-date-of-birth-picker.component';

@Component({
  selector: 'tg-date-of-birth-picker-with-dropdown-input',
  templateUrl: './with-dropdown-input.component.html',
})
export class DateOfBirthPickerWithDropdownInputComponent extends AbstractDateOfBirthPickerComponent implements OnInit {}
