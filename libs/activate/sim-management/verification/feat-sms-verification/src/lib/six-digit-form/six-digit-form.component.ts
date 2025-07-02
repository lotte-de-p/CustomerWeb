import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'tg-sim-management-sms-verification-six-digit-form',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TranslateModule, ReactiveFormsModule],
  templateUrl: './six-digit-form.component.html',
})
export class SixDigitFormComponent implements AfterContentInit {
  @Input() validateSmsCodeForm!: FormGroup;
  @Input() showSixDigitCode!: boolean;
  @Output() generateSMSCodeMessage = new EventEmitter<string>();
  @Output() smsCodeComplete = new EventEmitter();
  @Output() validateSmsCodeFormData = new EventEmitter();
  @Output() showErrorContent = new EventEmitter();

  @ViewChildren('formRow') rows: QueryList<ElementRef>;
  formInputs = ['input1', 'input2', 'input3', 'input4', 'input5', 'input6'];
  smsCode: string;

  generateSmsAccessCode() {
    this.generateSMSCodeMessage.emit();
  }

  ngAfterContentInit() {
    this.validateSmsCodeForm = this.toFormGroup(this.formInputs);
    this.validateSmsCodeFormData.emit(this.validateSmsCodeForm);
  }

  onBlur(index: number): void {
    this.rows.toArray()[index]?.nativeElement.classList.remove('background-brand-primary');
    this.smsCode = '';
    Object.values(this.validateSmsCodeForm.controls).forEach((input: AbstractControl) => {
      this.smsCode += input.value;
    });
    this.smsCodeComplete.emit(this.smsCode);
    this.validateSmsCodeFormData.emit(this.validateSmsCodeForm);
  }

  onFocus(index: number): void {
    this.rows.toArray()[index]?.nativeElement.classList.add('background-brand-primary');
  }

  onBeforeInput(event: InputEvent): void {
    if (event.data && event.data?.length >= 1) {
      event.preventDefault();
    }
  }

  onKeyDownEvent(event: KeyboardEvent, index: number): void {
    if (event.key !== 'Backspace' && this.rows.toArray()[index].nativeElement.value.length >= 1) {
      event.preventDefault();
    }
  }

  onKeyUpEvent(event: KeyboardEvent, index: number): void {
    let eventIndex = index;
    const isNumber = /^\d$/i.test(event.key);
    let isBackspace = false;

    if (event.key === 'Backspace') {
      isBackspace = true;
      eventIndex--;
    } else if (isNumber) {
      eventIndex++;
    } else {
      event.preventDefault();
      return;
    }
    this.keyEventCheck(event, isNumber, isBackspace, eventIndex);
  }

  onPaste(event: ClipboardEvent): void {
    const clipboardData = event.clipboardData;
    const pasteText = clipboardData?.getData('text');
    if (pasteText) {
      const otp = pasteText.split('');
      otp.forEach((value, i) => {
        const controlName = 'input' + (i + 1);
        this.validateSmsCodeForm.controls[controlName].setValue(value);
      });
      this.rows.toArray()[5]?.nativeElement.focus();
      event.preventDefault();
    }
  }

  showError(): boolean {
    this.showErrorContent.emit(this.validateSmsCodeForm.invalid && this.allElementsTouched());
    return this.validateSmsCodeForm.invalid && this.allElementsTouched();
  }

  private toFormGroup(elements: string[]): FormGroup {
    const group = {};
    elements.forEach((key) => {
      group[key] = new FormControl('', Validators.required);
    });
    return new FormGroup(group);
  }

  private allElementsTouched(): boolean {
    return Object.values(this.validateSmsCodeForm.controls).filter((control) => !control.touched).length === 0;
  }

  private keyEventCheck(event: KeyboardEvent, isNumericKeys: boolean, isBackSpace: boolean, eventIndex: number): void {
    if (!isNumericKeys && !isBackSpace) {
      event.preventDefault();
    } else if (eventIndex > -1 && eventIndex < this.formInputs.length) {
      this.rows.toArray()[eventIndex].nativeElement.focus();
    }
  }
}
