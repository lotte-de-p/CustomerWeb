import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoginService } from '@telenet/ng-lib-ocapi';
import { PrivacySettingSelectorInterface } from '../../interface/privacy-selector-value.interface';
import { NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AccountSelectorService } from '../../../../shared/services/account-selector.service';

@Component({
  selector: 'app-privacy-settings-selector',
  templateUrl: './privacy-settings-selector.component.html',
  imports: [NgClass, TranslateModule],
  standalone: true,
})
export class PrivacySettingsSelectorComponent implements OnInit {
  @Input() isSelectorOpen: boolean;
  @Input() hideSelector: string;
  @Output() toggle = new EventEmitter();
  selectedAccount: PrivacySettingSelectorInterface;
  selectorValues: PrivacySettingSelectorInterface[] = [
    {
      name: 'ng.account-selector.lbl.your-privacy-settings',
      value: 'contact',
    },
    {
      name: 'ng.account-selector.lbl.company-privacy-settings',
      value: 'account',
    },
  ];

  constructor(
    private readonly accountSelectorService: AccountSelectorService,
    private readonly loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.loginService.getLoginDetails().subscribe((login) => {
      if (login.isContractHolder()) {
        this.selectedAccount = this.selectorValues[0];
        this.accountSelectorService.setSelectedAccount(this.selectedAccount.value);
      } else {
        this.accountSelectorService.setSelectedAccount('');
        this.hideSelector = 'true';
      }
    });
  }

  isActive(account: PrivacySettingSelectorInterface): boolean {
    return this.selectedAccount && account.value === this.selectedAccount.value;
  }

  onSelectAccount(account: PrivacySettingSelectorInterface): void {
    this.selectedAccount = account;
    this.accountSelectorService.setSelectedAccount(account.value);
  }
}
