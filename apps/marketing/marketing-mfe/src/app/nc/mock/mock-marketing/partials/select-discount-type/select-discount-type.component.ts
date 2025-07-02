import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { DiscountFormComponent } from '../discount-form/discount-form.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'tg-marketing-nc-select-discount-type',
  templateUrl: './select-discount-type.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, DiscountFormComponent, TranslateModule],
})
export class SelectDiscountTypeComponent implements OnInit, OnDestroy {
  @Input() parentForm: FormGroup = new FormGroup({});
  @Input() idx: number;

  BASIC_DISCOUNT = 'Basic Discount';
  ON_TOP_DISCOUNT = 'On-Top Discount with Yugo Slot';

  ngOnInit(): void {
    this.parentForm.addControl('selectedDiscountType', new FormControl('', []));
  }

  ngOnDestroy(): void {
    this.parentForm.removeControl('selectedDiscountType');
  }
}
