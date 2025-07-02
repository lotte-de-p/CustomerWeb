import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DuidFormatValidator, MinMaxLengthsValidator } from './validators';

@Component({
  selector: 'app-duid',
  templateUrl: './duid.component.html',
})
export class DuidComponent implements OnInit {
  @Input() duidFormGroup: FormGroup;
  @Input() duid: string;

  ngOnInit(): void {
    this.duidFormGroup.addControl(
      'duidField',
      new FormControl(this.duid, [Validators.required, MinMaxLengthsValidator, DuidFormatValidator])
    );
  }

  keyUpEvent(event: KeyboardEvent | unknown): void {
    const keyboardEvent = event as KeyboardEvent;
    if (keyboardEvent.key !== 'Backspace') {
      const value = this.duidFormGroup.controls['duidField'].value;
      const newValue = value.replace(/:/g, '');
      this.duidFormGroup.controls['duidField'].setValue(newValue.replace(/.{2}(?!$)/g, '$&:'));
    }
  }

  keyPressEvent(event: KeyboardEvent | unknown) {
    const keyboardEvent = event as KeyboardEvent;
    const keyCharCode = keyboardEvent.key.charCodeAt(0);

    // 0-9
    if (keyCharCode >= 48 && keyCharCode <= 57) {
      return keyboardEvent.key;
    }
    // A-Z
    if (keyCharCode >= 65 && keyCharCode <= 90) {
      return keyboardEvent.key;
    }
    // a-z
    if (keyCharCode >= 97 && keyCharCode <= 122) {
      return keyboardEvent.key;
    }
    // backspace
    if (keyCharCode === 8) {
      return keyboardEvent.key;
    }

    return false;
  }
}
