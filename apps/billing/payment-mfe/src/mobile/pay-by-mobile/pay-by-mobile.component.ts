import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayByMobileOverviewComponent } from '@billing/pay-by-mobile/feat-pay-by-mobile';
import { IonicPortalCoreService } from '@telenet/ng-lib-ionic-portal';

export interface ComponentInputInterface {
  barringSettingsUrl: string;
  managePremiumServicesUrl: string;
  premiumServiceBarringsUrl: string;
  openLinksIn?: string;
}

@Component({
  selector: 'care-billing-pay-by-mobile',
  standalone: true,
  imports: [CommonModule, PayByMobileOverviewComponent],
  templateUrl: './pay-by-mobile.component.html',
})
export class PayByMobileComponent implements OnInit {
  constructor(private readonly ionicPortalCoreService: IonicPortalCoreService) {}

  readonly DEFAULT_PRE_URL = 'https://www2.telenet.be/residential';
  readonly DEFAULT_POST_URL = 'mijn-telenet/mobiele-nummers#/nav_item';

  readonly URL_BARRING = 'barring';
  readonly URL_LIMITS = 'limits';

  inputs: ComponentInputInterface;

  ngOnInit(): void {
    this.setComponentInputs();
  }

  private setComponentInputs(): void {
    const inputs = this.ionicPortalCoreService.inputs as ComponentInputInterface;

    this.inputs = inputs ? { ...inputs } : this.getDefaultInputs();
  }

  private getDefaultInputs(): ComponentInputInterface {
    return {
      barringSettingsUrl: this.getUrl(this.URL_BARRING),
      managePremiumServicesUrl: this.getUrl(this.URL_BARRING),
      premiumServiceBarringsUrl: this.getUrl(this.URL_LIMITS),
    };
  }

  private getUrl(type: string): string {
    const selectedLanguage = this.ionicPortalCoreService.selectedLanguage;
    return `${this.DEFAULT_PRE_URL}/${selectedLanguage}/${this.DEFAULT_POST_URL}=${type}`;
  }
}
