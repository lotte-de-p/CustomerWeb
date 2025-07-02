import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ChipComponent } from '../chip/chip.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

export interface Chip {
  key: string;
  icon: string;
  label: string;
}

@Component({
  selector: 'tg-sales-multiple-select-chip',
  standalone: true,
  templateUrl: './multiple-select-chip.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultipleSelectChipComponent),
      multi: true,
    },
  ],
  imports: [CommonModule, ChipComponent, FormsModule, TranslateModule],
})
export class MultipleSelectChipComponent implements ControlValueAccessor {
  @Input() chips: Chip[] = [];
  selectedChips: string[] = [];

  private _onChange!: (val: string[]) => void;

  registerOnChange(fn: (val: string[]) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(): void {
    // not implemented
  }

  writeValue(obj: string[] | null): void {
    // https://github.com/angular/angular/issues/14988
    this.selectedChips = obj ?? [];
  }

  selectAll(event: Event): void {
    this.selectedChips = (event.target as HTMLInputElement).checked ? this.chips.map((c: Chip) => c.key) : [];
    this._onChange(this.selectedChips);
  }

  toggleChip(chip: Chip): void {
    this.selectedChips = this.selectedChips.includes(chip.key)
      ? this.selectedChips.filter((k: string) => k !== chip.key)
      : this.selectedChips.concat([chip.key]);
    this._onChange(this.selectedChips);
  }

  isChecked(chip: Chip): boolean {
    return this.selectedChips.includes(chip.key);
  }
}
