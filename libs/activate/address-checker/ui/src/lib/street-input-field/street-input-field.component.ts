import { Component, inject, Input, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, ReactiveFormsModule } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { FiberAddressCheckerEnum, FiberAddressCheckerService } from '@address-checker/data-access';
import { Observable, of } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'tg-street-input-field',
  templateUrl: './street-input-field.component.html',
  standalone: true,
  providers: [],
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
export class StreetInputFieldComponent implements OnInit, ControlValueAccessor {
  private readonly MINIMUM_WORD_LENGTH_TO_SEARCH = 2;
  @Input() messageGroup: string;
  @Input() geoId: string;
  private readonly addressCheckerService: FiberAddressCheckerService = inject(FiberAddressCheckerService);
  suggestions$: Observable<string[]>;

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
      debounceTime(500),
      switchMap((value) => {
        if (value?.length < this.MINIMUM_WORD_LENGTH_TO_SEARCH) {
          return of([]);
        }

        return this.addressCheckerService.getSuggestionsForStreet(
          FiberAddressCheckerEnum.MESSAGE_GROUP,
          value,
          this.geoId
        );
      })
    );
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onChange: (value: string) => void = () => {
    // empty implementation
  };

  onTouched: () => void = () => {
    // empty implementation
  };

  writeValue(_obj: unknown): void {
    // empty implementation
  }
}
