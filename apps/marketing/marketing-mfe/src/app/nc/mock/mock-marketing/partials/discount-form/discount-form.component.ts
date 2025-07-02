import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'tg-marketing-nc-discount-form',
  templateUrl: './discount-form.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, TranslateModule],
})
export class DiscountFormComponent implements OnInit, OnDestroy {
  @Input() parentForm: FormGroup = new FormGroup({});
  @Input() idx: number;

  ngOnInit(): void {
    this.parentForm.addControl('endValidityDate', new FormControl('', [Validators.required]));
    this.parentForm.addControl('price', new FormControl('', [Validators.required]));
  }

  ngOnDestroy(): void {
    this.parentForm.removeControl('endValidityDate');
    this.parentForm.removeControl('price');
  }
}
