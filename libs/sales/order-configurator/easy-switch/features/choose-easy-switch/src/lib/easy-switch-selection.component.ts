import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import {
  EasySwitchSelectionCheckmarksComponent,
  EasySwitchSelectionOptionComponent,
} from '@sales/order-configurator/easy-switch/ui';

@Component({
  selector: 'tg-order-configurator-easy-switch-feat-easy-switch-selection',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    EasySwitchSelectionCheckmarksComponent,
    EasySwitchSelectionOptionComponent,
  ],
  templateUrl: './easy-switch-selection.component.html',
})
@UntilDestroy()
export class EasySwitchSelectionComponent {
  easySwitchForm: FormGroup;
  submitted = false;
  showTipNotification = false;

  constructor(private readonly fb: FormBuilder) {
    this.easySwitchForm = this.fb.group({
      easySwitchSelection: [null, Validators.required],
    });

    this.easySwitchForm
      .get('easySwitchSelection')
      ?.valueChanges.pipe(untilDestroyed(this))
      .subscribe((value) => {
        this.showTipNotification = value === 'no';
      });
  }

  get easySwitchSelectionValue(): boolean {
    const value = this.easySwitchForm.get('easySwitchSelection')?.value;
    return value === 'yes';
  }

  isFormValid(): boolean {
    return this.easySwitchForm.valid;
  }

  markFormAsSubmitted(): void {
    this.submitted = true;
  }
}
