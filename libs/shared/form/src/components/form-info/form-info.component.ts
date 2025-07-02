import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { extractFormDetails } from '../../index';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-form-info',
  imports: [CommonModule],
  template: `
    <div *ngIf="formGroup; else formGroupNotAvailable">
      <pre>formValue: {{ formGroup.value | json }}</pre>
      <div>valid: {{ formGroup.valid }}</div>
      <div>touched: {{ formGroup.touched }}</div>
      <div>pristine: {{ formGroup.pristine }}</div>
      <div>errors: {{ formGroup.errors | json }}</div>
      <pre>{{ extractFormDetails(formGroup) | json }}</pre>
    </div>
    <ng-template #formGroupNotAvailable>
      <div [style.color]="'red'">Did you forget to add the formGroup?</div>
    </ng-template>
  `,
  standalone: true,
})
export class FormInfoComponent {
  extractFormDetails = extractFormDetails;

  @Input()
  formGroup!: FormGroup;
}
