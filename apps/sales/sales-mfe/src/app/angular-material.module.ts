import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

const materialModules = [
  MatDialogModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatAutocompleteModule,
];

@NgModule({
  imports: [CommonModule, ...materialModules],
  exports: [...materialModules],
  providers: [
    MatDatepickerModule,
    {
      provide: MatDialogRef,
      useValue: {},
    },
  ],
})
export class AngularMaterialModule {}
