import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'tg-marketing-nc-apply-manual-discount',
  templateUrl: './apply-manual-discount.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, TranslateModule],
})
export class ApplyManualDiscountComponent implements OnInit, OnDestroy {
  @Input() parentForm: FormGroup = new FormGroup({});
  @Input() idx: number;
  @Input() productType: string;
  @Input() sku: string;

  cid = 'cid';
  campaign = 'campaign';

  ngOnInit(): void {
    this.parentForm.addControl('manualSelectedDiscount', new FormControl('', []));
    this.parentForm.addControl('discountCode', new FormControl('', []));
  }

  ngOnDestroy(): void {
    this.parentForm.removeControl('manualSelectedDiscount');
    this.parentForm.removeControl('discountCode');
  }
}
