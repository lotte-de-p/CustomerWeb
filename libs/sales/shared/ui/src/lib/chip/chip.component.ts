import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'tg-sales-chip',
  standalone: true,
  templateUrl: './chip.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChipComponent),
      multi: true,
    },
  ],
  imports: [TranslateModule, NgClass],
})
export class ChipComponent implements ControlValueAccessor {
  @Input() iconClass = '';
  @Input() label = '';
  checked = false;

  private _onChange!: (val: boolean) => void;
  private _onTouched!: () => void;

  registerOnChange(fn: (val: boolean) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }

  writeValue(obj: boolean): void {
    this.checked = obj;
  }

  onBlur(): void {
    this._onTouched();
  }

  onToggle(event: Event): void {
    this.checked = (event.target as HTMLInputElement).checked;
    this._onChange(this.checked);
  }
}
