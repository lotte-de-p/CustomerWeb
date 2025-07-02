import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { AbstractBaseComponent } from '@telenet/ng-lib-page';
import { LoginDetails, LoginService } from '@telenet/ng-lib-ocapi';
import { AccountSelectorConstants } from './constants/account-selector.constant';
import { TelenetMobileLineSelectorComponent } from './views/telenet-mobile-lines/telenet-mobile-line-selector.component';
import { PrivacySettingsSelectorComponent } from './views/privacy-settings-selector/privacy-settings-selector.component';
import { PlannedMaintenanceAddressLineSelectorComponent } from './views/planned-maintenance-address-line-selector/planned-maintenance-address-line-selector.component';
import { MobileLineSelectorComponent } from './views/mobile-lines/mobile-line-selector.component';
import { BillingAccountSelectorComponent } from './views/billing-account/billing-account-selector.component';
import { AddressLineSelectorComponent } from './views/address-line/address-line-selector.component';

@Component({
  selector: 'tg-fleet-user-account-selector',
  templateUrl: './fleet-user-account-selector.component.html',
  standalone: true,
  imports: [
    TelenetMobileLineSelectorComponent,
    PrivacySettingsSelectorComponent,
    PlannedMaintenanceAddressLineSelectorComponent,
    MobileLineSelectorComponent,
    BillingAccountSelectorComponent,
    AddressLineSelectorComponent,
  ],
})
export class FleetUserAccountSelectorComponent extends AbstractBaseComponent implements OnInit {
  @Input() hideSelector: string;
  @Input() selectorType: string;
  @Input() status: string;
  @Input() showOnlyLoggedInLine: string;
  @Input() hideAccountLabelForInternet: string;
  @Input() authorizedScopes: string;
  @Input() hideSuspendedLinesForDtv: string;
  @Input() hideSuspendedLinesForDtvAndInternet: string;
  @Input() pageType: string;
  @Input() enableLoader: boolean;
  @Input() enableMask: boolean;
  @Input() showAllLines: string;
  @Input() onlyFpbProducts: string;

  messageGroupName: string = AccountSelectorConstants.MESSAGE_GROUP;
  identityId: string;
  isLoggedIn: boolean;
  isPidLogin: boolean;
  isSelectorOpen = false;
  isFleetCustomer: boolean;
  isOriginCustomer: boolean;

  constructor(
    private readonly loginService: LoginService,
    private readonly eRef: ElementRef
  ) {
    super();
  }

  ngOnInit(): void {
    this.loginService.getLoginDetails().subscribe((loginDetails: LoginDetails) => {
      if (loginDetails.isLoggedIn()) {
        this.checkFleetCustomer(loginDetails);
        this.identityId = this.isFleetCustomer ? loginDetails.username.replace(/(\+32)/, '0') : loginDetails.identityId;
        this.isLoggedIn = this.authorizedScopes
          ? this.checkScopes(this.authorizedScopes.split(','), loginDetails)
          : true;
        this.isOriginCustomer = loginDetails.isBssSystemNetcracker();
      }
      this.isPidLogin = loginDetails.isPid;
    });
  }

  toggleAccount(accountObject): void {
    if (accountObject && accountObject.length > 1) {
      this.isSelectorOpen = !this.isSelectorOpen;
    }
  }

  @HostListener('document:click', ['$event'])
  @HostListener('document:touchstart', ['$event'])
  handleOutsideClick(event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isSelectorOpen = false;
    }
  }

  private checkFleetCustomer(loginDetails: LoginDetails): void {
    this.isFleetCustomer = loginDetails.isFleetManager() || loginDetails.isFleetUser();
  }

  private checkScopes(authorizedScopes: string[], loginDetails: LoginDetails): boolean {
    return !!authorizedScopes.filter((scope: string) => loginDetails.hasScope(scope)).length;
  }
}
