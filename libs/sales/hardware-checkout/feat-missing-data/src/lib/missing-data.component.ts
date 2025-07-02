import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslateModule } from '@ngx-translate/core';
import { EventFacade } from '@sales/events/data-access';
import { StepComponent } from '@sales/shared/data-access';
import { BelgianEidValidator, ForeignEidValidator, NationalRegistryNumberValidator } from '@telenet/ng-lib-form';
import { NgxMaskDirective } from 'ngx-mask';
import { Observable, of } from 'rxjs';
import { missingDataStepFinished, missingDataStepLoaded } from './missing-data.const';
import { MissingDataFacade } from './missing-data.facade';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgxMaskDirective, TranslateModule],
  selector: 'tg-sales-missing-data',
  templateUrl: './missing-data.component.html',
})
@UntilDestroy()
export class MissingDataComponent implements StepComponent, OnInit {
  missingDataForm: FormGroup;
  isBelgianIdentity = true;

  constructor(
    private readonly eventFacade: EventFacade,
    private readonly missingDataFacade: MissingDataFacade,
    private readonly formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.eventFacade.triggerEvent(missingDataStepLoaded);
    this.initForm();
  }

  onNextStep(): Observable<boolean> {
    if (this.missingDataForm.valid) {
      const eid = this.getEidValue();
      this.missingDataFacade.setMissingData(
        this.missingDataForm.controls['nationalRegistryNumber'].value,
        eid,
        !this.isBelgianIdentity
      );
      this.eventFacade.triggerEvent(missingDataStepFinished);
      return of(true);
    } else {
      return of(false);
    }
  }

  initForm() {
    this.missingDataForm = this.formBuilder.group({
      belgianEid: ['', [Validators.required, BelgianEidValidator.isNumberValid]],
      foreignEid: [''],
      nationalRegistryNumber: ['', [Validators.required, NationalRegistryNumberValidator.isNumberValid]],
    });
    this.fillFormFromState();
  }

  toggleIdentityView() {
    this.isBelgianIdentity = !this.isBelgianIdentity;
    this.updateFormControl();
  }

  fillFormFromState() {
    this.missingDataFacade.missingData$.pipe(untilDestroyed(this)).subscribe((missingData) => {
      if (missingData) {
        const foreignIdentity = missingData.isForeignIdentity;
        this.isBelgianIdentity = !foreignIdentity;
        this.updateFormControl();
        this.missingDataForm.patchValue({
          belgianEid: missingData.isForeignIdentity ? '' : missingData.identityCardNumber,
          foreignEid: missingData.isForeignIdentity ? missingData.identityCardNumber : '',
          nationalRegistryNumber: missingData.nationalRegistryNumber,
        });
      }
    });
  }

  private getEidValue(): string {
    return this.missingDataForm.controls[this.isBelgianIdentity ? 'belgianEid' : 'foreignEid'].value;
  }

  private updateFormControl(): void {
    const belgianEid = 'belgianEid';
    this.clearValidators(belgianEid);
    const foreignEid = 'foreignEid';
    this.clearValidators(foreignEid);

    this.missingDataForm.controls[this.isBelgianIdentity ? belgianEid : foreignEid].addValidators([
      Validators.required,
      this.isBelgianIdentity ? BelgianEidValidator.isNumberValid : ForeignEidValidator.isForeignEidValid,
    ]);
    this.updateValueAndValidity(belgianEid);
    this.updateValueAndValidity(foreignEid);
  }

  private clearValidators(formControlName: string) {
    this.missingDataForm.controls[formControlName].clearValidators();
  }

  private updateValueAndValidity(formControlName: string) {
    this.missingDataForm.controls[formControlName].updateValueAndValidity();
  }
}
