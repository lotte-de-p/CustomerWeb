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
import { CitySuggestions, FiberAddressCheckerEnum, FiberAddressCheckerService } from '@address-checker/data-access';
import { map, Observable } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'tg-zipcode-input-field',
  templateUrl: './zipcode-input-field.component.html',
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
export class ZipcodeInputFieldComponent implements OnInit, ControlValueAccessor {
  @Input() messageGroup: string;
  suggestions$: Observable<CitySuggestions[]>;
  private readonly addressCheckerService: FiberAddressCheckerService = inject(FiberAddressCheckerService);

  get formControl(): FormControl {
    return this.controls?.control as FormControl;
  }

  constructor(@Self() @Optional() public controls: NgControl) {
    if (this.controls) {
      this.controls.valueAccessor = this;
    }
  }

  ngOnInit(): void {
    this.suggestions$ = this.formControl?.valueChanges?.pipe(
      untilDestroyed(this),
      distinctUntilChanged(),
      debounceTime(150),
      filter((inputValue) => !!inputValue),
      filter((inputValue) => typeof inputValue === 'string'),
      switchMap((inputValue) => this.#getSuggestions(inputValue)),
      tap(({ suggestions, inputValue }) => this.#presetValueWhenSuggestionExists(suggestions, inputValue)),
      map(({ suggestions }) => suggestions)
    );
  }

  #getSuggestions(inputValue: string) {
    return this.addressCheckerService
      .getSuggestionsForZipcodeOrCity(inputValue, FiberAddressCheckerEnum.MESSAGE_GROUP)
      .pipe(
        untilDestroyed(this),
        map((suggestions) => ({ suggestions, inputValue }))
      );
  }

  #presetValueWhenSuggestionExists(suggestions: CitySuggestions[], inputValue: string): void {
    const matchSuggestion = suggestions.find(
      (suggestion: CitySuggestions) =>
        suggestion.zipCode === inputValue || suggestion.subMunicipality.toLowerCase() === inputValue.toLowerCase()
    );
    if (matchSuggestion) {
      this.formControl?.setValue(matchSuggestion);
    }
  }

  formattedLocation = (cityOrZipcode: CitySuggestions): string => {
    if (!cityOrZipcode) {
      return '';
    }
    return `${cityOrZipcode.zipCode} - ${cityOrZipcode.subMunicipality}`;
  };

  registerOnChange(fn: (value: string | CitySuggestions) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  writeValue(_obj: unknown): void {
    // empty implementation
  }

  onChange: (value: CitySuggestions) => void = () => {
    // empty implementation
  };
  onTouched: () => void = () => {
    // empty implementation
  };
}
