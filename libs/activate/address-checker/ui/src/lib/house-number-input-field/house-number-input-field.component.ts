import { Component, inject, Input, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, ReactiveFormsModule } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { debounceTime, distinctUntilChanged, filter, switchMap, tap } from 'rxjs/operators';
import { FiberAddressCheckerEnum, FiberAddressCheckerService, NumberSuggestions } from '@address-checker/data-access';
import { map, Observable, of } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'tg-house-number-input-field',
  templateUrl: './house-number-input-field.component.html',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatSelectModule,
    HttpClientModule,
    TranslateModule,
  ],
})
export class HouseNumberInputFieldComponent implements OnInit, ControlValueAccessor {
  private readonly addressCheckerService: FiberAddressCheckerService = inject(FiberAddressCheckerService);
  @Input() messageGroup: string;
  @Input() geoId: string;
  @Input() street: string;
  suggestions$: Observable<NumberSuggestions[]>;

  constructor(@Self() @Optional() public controls: NgControl) {
    if (this.controls) {
      this.controls.valueAccessor = this;
    }
  }

  get formControl(): FormControl {
    return this.controls?.control as FormControl;
  }

  ngOnInit(): void {
    this.suggestions$ = this.formControl?.valueChanges?.pipe(
      untilDestroyed(this),
      distinctUntilChanged(),
      debounceTime(500),
      filter((inputValue) => typeof inputValue === 'string'),
      switchMap((inputValue) => this.#getNumberSuggestions(inputValue)),
      tap(({ suggestions, inputValue }) => this.#presetValueWhenSuggestionExists(suggestions, inputValue)),
      map(({ suggestions }) => suggestions)
    );
  }

  #getNumberSuggestions(inputValue: string) {
    if (!inputValue) {
      return of({ suggestions: [], inputValue });
    }

    return this.addressCheckerService
      .getSuggestionsForNumber(FiberAddressCheckerEnum.MESSAGE_GROUP, inputValue, this.street, this.geoId)
      .pipe(
        untilDestroyed(this),
        map((suggestions) => ({ suggestions, inputValue }))
      );
  }

  #presetValueWhenSuggestionExists(numberSuggestions: NumberSuggestions[], value: string): void {
    const numberSuggestion = numberSuggestions.find((suggestion) => suggestion.houseNumber === value);
    if (numberSuggestion) {
      this.formControl?.setValue(numberSuggestion);
    }
  }

  formattedNumber = (houseNumber: NumberSuggestions): string => {
    if (!houseNumber) {
      return '';
    }
    return houseNumber.houseNumber;
  };

  registerOnChange(fn: (value: string | NumberSuggestions) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  writeValue(_obj: unknown): void {
    // empty implementation
  }

  onChange: (value: NumberSuggestions) => void = () => {
    // empty implementation
  };

  onTouched: () => void = () => {
    // empty implementation
  };
}
