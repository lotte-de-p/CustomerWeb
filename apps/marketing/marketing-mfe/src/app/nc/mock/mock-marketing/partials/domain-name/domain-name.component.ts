import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf } from '@angular/common';
@Component({
  selector: 'tg-marketing-nc-domain-name',
  templateUrl: './domain-name.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, TranslateModule],
})
export class DomainNameComponent implements OnInit, OnDestroy {
  @Input() parentForm: FormGroup = new FormGroup({});
  @Input() idx: number;

  ngOnInit(): void {
    this.parentForm.addControl('domainName', new FormControl('', [Validators.required]));
    this.parentForm.addControl('domainExtension', new FormControl('', [Validators.required]));
    this.parentForm.addControl('orderType', new FormControl('', [Validators.required]));
  }

  ngOnDestroy(): void {
    this.parentForm.removeControl('domainName');
    this.parentForm.removeControl('domainExtension');
    this.parentForm.removeControl('orderType');
  }
}
