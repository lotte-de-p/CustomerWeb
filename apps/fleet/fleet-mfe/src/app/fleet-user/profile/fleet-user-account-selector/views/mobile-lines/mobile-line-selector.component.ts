import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AbstractBaseComponent, UrlService } from '@telenet/ng-lib-page';
import { AccountSelectorConstants } from '../../constants/account-selector.constant';
import { orderBy, filter, isEmpty } from 'lodash-es';
import { NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MobileService } from '../../../../shared/services/mobile.service';
import { MobileSubscriptionModel } from '../../../../shared/models/mobile-subscription.model';
import { AccountSelectorService } from '../../../../shared/services/account-selector.service';

@Component({
  selector: 'app-mobile-line-selector',
  templateUrl: './mobile-line-selector.component.html',
  imports: [NgClass, TranslateModule],
  standalone: true,
})
export class MobileLineSelectorComponent extends AbstractBaseComponent implements OnInit {
  @Input() hideSelector: string;
  @Input() showOnlyLoggedInLine: string;
  @Input() isSelectorOpen: boolean;
  @Input() status = '';
  @Input() identityId: string;
  @Input() isPrepaidOnly: boolean;
  @Output() toggle = new EventEmitter();
  messageGroupName: string = AccountSelectorConstants.MESSAGE_GROUP;
  mobileLines: MobileSubscriptionModel[];
  lineSelected: MobileSubscriptionModel;
  isInitialized: boolean;
  isBusinessCustomer: boolean;
  isOnlyPayForElseEnabled: boolean;
  BASE_PHONE_NUMBER_REGEX = /^(((0|0032|\+32|032|32)4\d{8})|((00|\+)(?!32)4\d{8})|(4\d{8}))$/;

  constructor(
    private readonly mobileService: MobileService,
    private readonly accountSelectorService: AccountSelectorService,
    private readonly urlService: UrlService
  ) {
    super();
  }

  ngOnInit(): void {
    this.loadMobileLines();
  }

  loadMobileLines(): void {
    const status = this.status.includes(AccountSelectorConstants.SOME_ONE_ELSE) ? '' : this.status;
    this.mobileService.getMobileLines(this.messageGroupName, status).subscribe({
      next: (mobileLines: MobileSubscriptionModel[]) => {
        if (!isEmpty(mobileLines)) {
          this.mobileLines = this.sortMobileLines(mobileLines);
          if (this.showOnlyLoggedInLine === 'true' && this.identityId) {
            this.mobileLines = filter(this.mobileLines, (mobileLine) => {
              return mobileLine.msisdn === this.identityId;
            });
          }
          if (this.isPrepaidOnly) {
            this.filterPrepaidLines();
          }
          this.lineSelected = this.getDefaultMobileLine();
          this.isInitialized = true;
          this.accountSelectorService.setSelectedAccount<MobileSubscriptionModel>(this.lineSelected);
        } else {
          this.accountSelectorService.setError(false, 'mobile-line');
        }
      },
      error: () => {
        this.accountSelectorService.setError(true, '');
      },
    });
  }

  filterPrepaidLines(): void {
    const prepaidLines = this.mobileLines.filter((mobileLine) => {
      return (
        mobileLine.status === AccountSelectorConstants.ACTIVE_MOBILE &&
        mobileLine.plan.categories.includes(AccountSelectorConstants.PREPAID_MOBILE)
      );
    });
    if (this.status === AccountSelectorConstants.SOME_ONE_ELSE) {
      const someOneElse = {} as MobileSubscriptionModel;
      someOneElse['isSomeoneElse'] = true;
      someOneElse['isOnlyPayForElseEnabled'] = !prepaidLines.length;
      this.isOnlyPayForElseEnabled = someOneElse['isOnlyPayForElseEnabled'];
      prepaidLines.push(someOneElse);
    }
    this.mobileLines = prepaidLines;
  }

  getDefaultMobileLine(): MobileSubscriptionModel {
    if (this.urlService.requestParamsContains(AccountSelectorConstants.MSISDN)) {
      const msisdnFromRequest = this.urlService.getRequestParameterOrDefault(AccountSelectorConstants.MSISDN, '');
      return this.filterMobileLineByMsisdn(msisdnFromRequest);
    } else {
      if (
        !this.isOnlyPayForElseEnabled &&
        this.identityId &&
        this.BASE_PHONE_NUMBER_REGEX.test(this.identityId.replace(/[-/\\,\s.]/g, ''))
      ) {
        this.identityId = this.getCountryCodeStrippedIdentityId(this.identityId);
        const selectedLine = this.filterMobileLineByMsisdn(this.identityId);
        return !selectedLine && this.isPrepaidOnly ? this.mobileLines[0] : selectedLine;
      } else {
        const [mobileLine] = this.mobileLines;
        return mobileLine;
      }
    }
  }

  filterMobileLineByMsisdn(msisdn: string): MobileSubscriptionModel {
    const [filteredLine] = this.mobileLines.filter((mobileLine) => mobileLine.msisdn === msisdn);
    return filteredLine || undefined;
  }

  getCountryCodeStrippedIdentityId(identityId: string): string {
    if (identityId && identityId.indexOf('32') === 0) {
      return identityId.replace('32', '0');
    }
    return identityId;
  }

  onSelectAccount(selectedAccount): void {
    this.lineSelected = selectedAccount;
    this.accountSelectorService.setSelectedAccount<MobileSubscriptionModel>(selectedAccount);
  }

  isActive(account): boolean {
    return this.lineSelected && this.lineSelected['msisdn'] && this.lineSelected['msisdn'] === account['msisdn'];
  }

  private sortMobileLines(mobileLines: MobileSubscriptionModel[]): MobileSubscriptionModel[] {
    return orderBy(mobileLines, ['msisdn'], ['asc']);
  }
}
