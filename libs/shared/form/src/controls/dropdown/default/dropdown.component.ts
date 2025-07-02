import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractDropdownComponent } from '../abstract-dropdown.component';

@Component({
  selector: 'tg-form-dropdown',
  templateUrl: 'dropdown.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true,
    },
  ],
})
export class DropdownComponent extends AbstractDropdownComponent {}
