import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { CitySuggestions } from '@address-checker/data-access';
import { TgFormsModule } from '@telenet/ng-lib-form';
import { distinctUntilChanged } from 'rxjs/operators';
import {
  BoxNumberInputFieldComponent,
  HouseNumberInputFieldComponent,
  StreetInputFieldComponent,
  ZipcodeInputFieldComponent,
} from '@address-checker/ui';

@UntilDestroy()
@Component({
  selector: 'tg-address-form',
  templateUrl: './address-form.component.html',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatSelectModule,
    HttpClientModule,
    TranslateModule,
    TgFormsModule,
    ZipcodeInputFieldComponent,
    StreetInputFieldComponent,
    HouseNumberInputFieldComponent,
    BoxNumberInputFieldComponent,
  ],
})
export class AddressFormComponent implements OnInit {
  private readonly BOX_NUMBER_PATTERN = '[[A-Za-z0-9]+(/?)+([A-Za-z0-9]{0,4})]{0,6}';
  @Input() messageGroupName: string;
  @Input() addressForm: FormGroup;
  municipalityGeoId: string;
  street: string;

  ngOnInit(): void {
    this.#addFormControls();
    this.addressForm
      .get('cityOrZipCode')
      ?.valueChanges.pipe(untilDestroyed(this))
      .subscribe((value: CitySuggestions) => {
        this.municipalityGeoId = value.geoId;
        this.#toggleFormControl(value, 'street');
      });

    this.addressForm
      .get('street')
      ?.valueChanges.pipe(untilDestroyed(this), distinctUntilChanged())
      .subscribe((value: string) => {
        this.street = value;
        this.#toggleFormControl(value, 'houseNumber');
      });

    this.addressForm
      .get('houseNumber')
      ?.valueChanges.pipe(untilDestroyed(this), distinctUntilChanged())
      .subscribe((value: string) => this.#toggleFormControl(value, 'boxNumber'));
  }

  #toggleFormControl(value: unknown, formControlName: string) {
    const formControl = this.addressForm.get(formControlName);

    value ? formControl?.enable() : formControl?.disable();
    this.#resetFormControlValue(formControlName, typeof value === 'string');
  }

  #resetFormControlValue(formControlName: string, shouldReset = true): void {
    if (shouldReset) {
      this.addressForm.get(formControlName)?.setValue('');
    }
  }

  #addFormControls(): void {
    this.addressForm.addControl('cityOrZipCode', new FormControl(undefined, Validators.required));
    this.addressForm.addControl('street', new FormControl({ value: undefined, disabled: true }, Validators.required));
    this.addressForm.addControl(
      'houseNumber',
      new FormControl({ value: undefined, disabled: true }, Validators.required)
    );
    this.addressForm.addControl(
      'boxNumber',
      new FormControl({ value: '', disabled: true }, Validators.pattern(this.BOX_NUMBER_PATTERN))
    );
  }
}
