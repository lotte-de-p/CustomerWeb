import { Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { each, filter } from 'lodash-es';
import { RegexConstants } from '../../constants';
import { MACAddressConstants } from './constants';

@Component({
  selector: 'app-mac-address',
  templateUrl: './mac-address.component.html',
})
export class MACAddressComponent implements OnInit {
  macAddressForm: FormGroup = new FormGroup({});
  formInput: string[] = ['input0', 'input1', 'input2', 'input3', 'input4', 'input5'];
  @ViewChildren('formRow') rows: QueryList<ElementRef>;
  @Input() macAddress: string;
  canShowError: boolean;
  isValidMacAddress = true;
  isValuedCopied = false;

  constructor() {
    this.macAddressForm = this.toFormGroup(this.formInput);
  }

  ngOnInit(): void {
    if (this.macAddress) {
      const macAddressArray = this.macAddress.split(':');
      macAddressArray.forEach((value, i) => {
        const controlName = 'input' + i;
        this.macAddressForm.controls[controlName].setValue(value);
      });
    }
  }

  isValidMacAddressEntered(): boolean {
    let isValidMacAddressValue = true;
    if (!this.macAddress && this.macAddressForm.invalid) {
      this.rows.get(0)?.nativeElement.focus();
      this.macAddressForm.markAllAsTouched();
      this.canShowError = true;
      isValidMacAddressValue = false;
    }
    if (!RegexConstants.MAC_ADDRESS.test(this.macAddress)) {
      this.setErrorForFormControls(true);
      this.isValidMacAddress = false;
      isValidMacAddressValue = false;
    }
    return isValidMacAddressValue;
  }

  showError(): boolean {
    return this.macAddressForm.invalid && this.allElementsTouched();
  }

  getFullMACAddress(): void {
    this.canShowError = false;
    let currentMacAddress = '';
    each(this.macAddressForm.controls, function (input, index) {
      if (input.value) {
        currentMacAddress += index === 'input5' ? input.value : input.value + ':';
      }
    });
    this.macAddress = currentMacAddress;
    this.isValidMacAddress = true;
  }

  keyUpEvent(event: KeyboardEvent | unknown, index: number): void {
    const keyboardEvent = event as KeyboardEvent;
    const position: number =
      keyboardEvent.code === '8' && keyboardEvent.key === MACAddressConstants.BACKSPACE ? index - 1 : index + 1;
    const isBackSpaceKeyAndValueEmpty: boolean = this.chechBackSpaceKeyAndValueEmpty(keyboardEvent);
    if (keyboardEvent.target) {
      if (keyboardEvent.code === '32') {
        (keyboardEvent.target as HTMLInputElement).value = '';
        keyboardEvent.preventDefault?.();
      } else if (
        position > -1 &&
        position < this.formInput.length &&
        ((!this.isValuedCopied && (keyboardEvent.target as HTMLInputElement).value.length === 2) ||
          isBackSpaceKeyAndValueEmpty)
      ) {
        this.rows.get(position)?.nativeElement.focus();
      }
    }
    if (this.isValuedCopied) {
      this.rows.get(5)?.nativeElement.focus();
      this.isValuedCopied = false;
    }
  }

  getMacAddressComplexityClass(): string {
    if (!this.macAddress) {
      return MACAddressConstants.DEFAULT_CLASS;
    } else if (this.showError()) {
      return MACAddressConstants.ERROR_CLASS;
    } else if (this.macAddress && this.macAddress.length < 12) {
      return MACAddressConstants.FAIR_CLASS;
    }
    return MACAddressConstants.VALID_CLASS;
  }

  onPaste(event: ClipboardEvent): void {
    const clipboardData = event.clipboardData;
    const pastedText = clipboardData?.getData('text') || '';
    const macAddress: string[] = pastedText.indexOf('-') > -1 ? pastedText.split('-') : pastedText.split(':');
    if (macAddress.length > 0) {
      macAddress.forEach((value: string, i: number) => {
        const controlName = 'input' + i;
        this.macAddressForm.controls[controlName].setValue(value);
      });
      this.isValuedCopied = true;
    }
  }

  private toFormGroup(elements: string[]): FormGroup {
    const group: Record<string, FormControl> = {};
    elements.forEach((key) => {
      group[key] = new FormControl('', Validators.required);
    });
    return new FormGroup(group);
  }

  private setErrorForFormControls(isInvalid: boolean) {
    Object.keys(this.macAddressForm.controls).forEach((controlName) => {
      const formControl = this.macAddressForm.controls[controlName];
      isInvalid ? formControl.setErrors({ InvalidMAC: true }) : formControl.setErrors(null);
    });
  }

  private allElementsTouched(): boolean {
    return (
      filter(this.formInput, (input) => {
        return !this.macAddressForm.controls[input].touched;
      }).length === 0
    );
  }

  private chechBackSpaceKeyAndValueEmpty(event: KeyboardEvent): boolean {
    return event.key === MACAddressConstants.BACKSPACE && (event.target as HTMLInputElement).value.length === 0;
  }
}
