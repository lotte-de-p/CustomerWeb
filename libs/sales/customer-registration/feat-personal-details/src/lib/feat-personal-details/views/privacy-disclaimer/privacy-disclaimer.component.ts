import { Component, Input, OnInit } from '@angular/core';
import { AuthorConfigurationFacade } from '@sales/customer-registration/data-access';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'tg-sales-privacy-disclaimer',
  templateUrl: './privacy-disclaimer.component.html',
  imports: [TranslateModule, NgIf],
  standalone: true,
})
export class PrivacyDisclaimerComponent implements OnInit {
  constructor(private readonly authorConfigurationFacade: AuthorConfigurationFacade) {}
  privacyDisclaimerKeys: string[] = [];
  toggleBtn = true;
  disclaimerLink = '';
  @Input()
  privacyPolicyUrl: string | null | undefined;

  ngOnInit(): void {
    const customerBrand = this.authorConfigurationFacade?.getBrand();
    this.privacyDisclaimerKeys = [
      'customer-registration.lbl.privacy-section-one' + '-' + customerBrand,
      'customer-registration.lbl.privacy-section-two' + '-' + customerBrand,
      'customer-registration.lbl.privacy-section-three' + '-' + customerBrand,
      'customer-registration.lbl.privacy-section-four' + '-' + customerBrand,
      'customer-registration.lbl.privacy-section-five' + '-' + customerBrand,
      'customer-registration.lbl.privacy-section-six' + '-' + customerBrand,
    ];
  }

  toggleDisclaimerLink() {
    this.toggleBtn = !this.toggleBtn;
    this.disclaimerLink = this.toggleBtn ? 'more' : 'less';
  }
}
