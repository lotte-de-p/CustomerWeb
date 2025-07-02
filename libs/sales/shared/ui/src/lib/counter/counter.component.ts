import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'tg-sales-counter',
  standalone: true,
  templateUrl: './counter.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CounterComponent),
      multi: true,
    },
  ],
  imports: [NgClass],
})
export class CounterComponent implements ControlValueAccessor {
  @Input() minValue!: number;
  @Input() maxValue!: number;

  value!: number;

  decrease(): void {
    this.value--;
    this.onChange(this.value);
  }

  increase(): void {
    this.value++;
    this.onChange(this.value);
  }

  registerOnChange(fn: VoidFunction): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: VoidFunction): void {
    this.onTouched = fn;
  }

  writeValue(value: number): void {
    this.value = value;
  }

  onTouched = (): void => {
    return;
  };

  onChange = (_value: number): void => {
    return;
  };
}
