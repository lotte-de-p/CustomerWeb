import {
  AfterContentInit,
  Component,
  EventEmitter,
  forwardRef,
  HostListener,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { AbstractDropdownComponent } from '../abstract-dropdown.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { InputOption } from '../../radio';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@Component({
  selector: 'tg-form-dropdown-single-select',
  templateUrl: 'mat-select-with-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MatSelectWithInputComponent),
      multi: true,
    },
  ],
})
@UntilDestroy({ checkProperties: true })
export class MatSelectWithInputComponent extends AbstractDropdownComponent implements AfterContentInit {
  @ViewChild('selectDropdown') select: MatSelect;
  @Input() required = true;
  @Input() disabled = false;
  @Input() toolTipRequired = false;

  @Output() selectChange = new EventEmitter<void>();

  selectedOption: InputOption;

  ngAfterContentInit(): void {
    this.selectedOption = this.getValueAsInputOption(this.value);
    this.changeControlValue();
    this.control?.control?.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((data) => (this.selectedOption = this.getValueAsInputOption(data)));
  }
  checkErrors(): void {
    if (this.control.control && this.control.control.errors) {
      this.error = Object.keys(this.control.control.errors)[0];
    }
  }

  private getValueAsInputOption(value: string): InputOption {
    return this.optionList?.filter((option: InputOption) => option.value === value)?.[0];
  }

  private changeControlValue() {
    this.control?.control?.setValue(this.selectedOption?.value);
  }

  changeSelectedValue() {
    this.changeControlValue();
    this.selectChange.emit();
  }

  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: MouseEvent) {
    if (!this.select._elementRef.nativeElement.contains(event.target)) {
      this.select.close();
    }
  }
}
