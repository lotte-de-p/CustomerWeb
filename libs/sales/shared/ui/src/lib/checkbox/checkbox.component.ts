import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, HostBinding, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'tg-sales-checkbox',
  standalone: true,
  templateUrl: './checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
  imports: [TranslateModule, NgIf, NgClass],
})
export class CheckboxComponent implements ControlValueAccessor {
  @HostBinding('class') class = 'product-finder--sales-checkbox';
  @Input() label = '';
  @Input() iconClass = '';
  checked = false;

  private _onChange!: (checked: boolean) => void;

  constructor(private readonly cdr: ChangeDetectorRef) {}

  onTouched!: () => void;

  onToggle(event: Event): void {
    this.checked = (event.target as HTMLInputElement).checked;
    this._onChange(this.checked);
  }

  registerOnChange(fn: (checked: boolean) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  writeValue(checked: boolean): void {
    this.checked = checked;
    this.cdr.markForCheck();
  }
}
