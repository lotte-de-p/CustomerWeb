import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountSelectorConstants } from '../../constants/account-selector.constant';
import { AbstractBaseComponent, UrlService } from '@telenet/ng-lib-page';
import { ConfigConstants, ConfigService } from '@telenet/ng-lib-config';
import { sortBy, filter, first, find, isEmpty, uniqBy } from 'lodash-es';
import { NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ProductSubscriptionsInterface } from '../../../../shared/interfaces/product/product-subscriptions.interface';
import { FleetUserProductService } from '../../../../shared/services/product/fleet-user-product.service';
import { ProductSubscriptionsModel } from '../../../../shared/models/product-subscriptions.model';
import { AccountSelectorService } from '../../../../shared/services/account-selector.service';
import { FleetUserAccountSelectorModule } from '../../fleet-user-account-selector.module';
import { PhoneNumberPipe } from '../../../../../shared/common/pipes/phone-number.pipe';

@Component({
  selector: 'app-telenet-mobile-line-selector',
  templateUrl: './telenet-mobile-line-selector.component.html',
  imports: [NgClass, TranslateModule, FleetUserAccountSelectorModule, PhoneNumberPipe],
  standalone: true,
})
export class TelenetMobileLineSelectorComponent extends AbstractBaseComponent implements OnInit {
  @Input() hideSelector: string;
  @Input() showOnlyLoggedInLine: string;
  @Input() isSelectorOpen: boolean;
  @Input() identityId: string;
  @Input() status = '';
  @Input() isPrepaidOnly: boolean;
  @Input() isFleetCustomer: boolean;
  @Input() showAllLines: string;
  @Output() toggle = new EventEmitter();

  messageGroupName = AccountSelectorConstants.MESSAGE_GROUP;
  mobileLines: ProductSubscriptionsInterface[];
  uniqueMobileLines: ProductSubscriptionsInterface[];
  mobileLineSelected: ProductSubscriptionsInterface;
  isInitialized: boolean;
  isOnlyPayForElseEnabled: boolean;

  readonly SESSION_STORAGE_KEY = 'mobile-line-selector';

  constructor(
    private readonly productService: FleetUserProductService,
    protected accountSelectorService: AccountSelectorService,
    private readonly urlService: UrlService,
    private readonly configService: ConfigService
  ) {
    super();
  }

  ngOnInit(): void {
    this.loadMobileLines();
  }

  loadMobileLines(): void {
    const status = this.status && this.status.includes(AccountSelectorConstants.SOME_ONE_ELSE) ? '' : this.status;
    this.productService
      .getProductLinesByType(this.messageGroupName, AccountSelectorConstants.PRODUCT_TYPE_MOBILE, '', status)
      .subscribe({
        next: (mobileLines: ProductSubscriptionsInterface[]) => {
          this.mobileLines = mobileLines;
          if (!isEmpty(this.mobileLines)) {
            this.checkPIDLinkedLines();
            this.filterAndUpdateLoggedinMobileLine();
            this.loadAddress();
          } else {
            this.handleEmptyMobileLines();
          }
        },
        error: () => {
          this.accountSelectorService.setError(true, '');
        },
      });
  }

  private handleEmptyMobileLines(): void {
    if (this.isPrepaidOnly && this.status.includes(AccountSelectorConstants.SOME_ONE_ELSE)) {
      this.filterPrepaidLines();
    } else {
      this.accountSelectorService.setError(false, 'mobile-line');
    }
  }

  private filterAndUpdateLoggedinMobileLine(): void {
    if (this.showOnlyLoggedInLine === 'true' && this.identityId) {
      this.mobileLines = filter(this.mobileLines, (mobileLine) => {
        return mobileLine.identifier === this.identityId;
      });
    }
  }

  private loadAddress(): void {
    this.accountSelectorService.loadAddresses(this.messageGroupName, this.mobileLines).subscribe(() => {
      if (this.isPrepaidOnly) {
        this.filterPrepaidLines();
      } else {
        this.setSelectedLine();
      }
    });
  }

  filterPrepaidLines(): void {
    const prepaidLines = this.mobileLines.filter((mobileLine) => {
      return (
        mobileLine.status === AccountSelectorConstants.ACTIVE_MOBILE &&
        mobileLine.productInfo.categories.includes(AccountSelectorConstants.PREPAID_MOBILE)
      );
    });
    if (this.status === AccountSelectorConstants.SOME_ONE_ELSE) {
      const someOneElse = new ProductSubscriptionsModel();
      someOneElse['isSomeoneElse'] = true;
      someOneElse['isOnlyPayForElseEnabled'] = !prepaidLines.length;
      this.isOnlyPayForElseEnabled = someOneElse['isOnlyPayForElseEnabled'];
      prepaidLines.push(someOneElse);
    }
    this.mobileLines = prepaidLines;
    this.setSelectedLine();
  }

  private setSelectedLine(): void {
    this.mobileLines = sortBy(this.mobileLines, (line) => line.identifier);
    this.mobileLineSelected = this.getDefaultMobileLine();
    this.isInitialized = true;
    this.setMobileLine();
    if (this.showAllLines === 'true') {
      this.uniqueMobileLines = this.mobileLines;
    } else {
      this.getUniqueMobileIdentifiers();
    }
    this.accountSelectorService.setCustomerAccounts<ProductSubscriptionsInterface[]>(this.mobileLines);
  }

  private setMobileLine(): void {
    if (
      this.mobileLineSelected.productType === AccountSelectorConstants.PRODUCT_TYPE_BUNDLE &&
      this.showAllLines === 'false'
    ) {
      this.accountSelectorService.setSelectedBundle<ProductSubscriptionsInterface>(this.mobileLineSelected);
    } else {
      this.accountSelectorService.setSelectedBundle<ProductSubscriptionsInterface>({} as ProductSubscriptionsInterface);
      this.accountSelectorService.setSelectedAccount<ProductSubscriptionsInterface>(this.mobileLineSelected);
    }
  }

  getUniqueMobileIdentifiers(): void {
    let bundleAccounts = [];
    bundleAccounts = this.mobileLines.filter(
      (mobileLine) => mobileLine.productType === AccountSelectorConstants.PRODUCT_TYPE_BUNDLE
    );
    bundleAccounts = uniqBy(bundleAccounts, 'bundleIdentifier');
    const standAloneAccounts = this.mobileLines.filter(
      (mobileLine) => mobileLine.productType !== AccountSelectorConstants.PRODUCT_TYPE_BUNDLE
    );
    this.uniqueMobileLines = bundleAccounts.concat(standAloneAccounts);
  }

  getMobileLineByRequestParam(): ProductSubscriptionsInterface {
    let defaultAccount: ProductSubscriptionsInterface;
    const identifierFromUrl =
      this.urlService.getRequestParameterOrDefault(AccountSelectorConstants.IDENTIFIER, '') ||
      this.urlService.getRequestParameterOrDefault(AccountSelectorConstants.MSISDN, '');
    if (identifierFromUrl) {
      defaultAccount = find(this.mobileLines, (mobileLine: ProductSubscriptionsInterface) => {
        return mobileLine.identifier === identifierFromUrl;
      });
    }
    return defaultAccount;
  }

  getDefaultMobileLine(): ProductSubscriptionsInterface {
    let defaultAccount: ProductSubscriptionsInterface = this.getMobileLineByRequestParam();
    if (!defaultAccount) {
      defaultAccount = this.getMobileLineFromSessionStorage();
    }
    if (!defaultAccount) {
      defaultAccount = this.getMobileLineByUserPIDLinked();
    }
    if (!defaultAccount) {
      defaultAccount = first(this.mobileLines);
    }
    return defaultAccount;
  }

  getMobileLineByUserPIDLinked(): ProductSubscriptionsInterface {
    let defaultAccount: ProductSubscriptionsInterface;
    defaultAccount = find(this.mobileLines, (line) => {
      return line.userPIDLinked;
    });
    return defaultAccount;
  }

  getMobileLineFromSessionStorage(): ProductSubscriptionsInterface {
    let defaultAccount: ProductSubscriptionsInterface;

    const storedIdentifier = window.sessionStorage.getItem(this.SESSION_STORAGE_KEY);
    if (storedIdentifier) {
      defaultAccount = this.mobileLines.find((line) => line.identifier === storedIdentifier);
    }

    return defaultAccount;
  }

  onSelectAccount(selectedAccount: ProductSubscriptionsInterface) {
    this.mobileLineSelected = selectedAccount;
    this.setMobileLine();
    window.sessionStorage.setItem(this.SESSION_STORAGE_KEY, selectedAccount.identifier);
  }

  isActive(account): boolean {
    return (
      this.mobileLineSelected &&
      this.mobileLineSelected['identifier'] &&
      this.mobileLineSelected['identifier'] === account['identifier']
    );
  }

  getProfileImageUrl(pid: string): string {
    return this.configService.getConfig(ConfigConstants.OCAPI_URl) + AccountSelectorConstants.OCAPI_RESOURCE_URL + pid;
  }

  isSelectedLineDataOnly(): boolean {
    return this.mobileLineSelected && this.mobileLineSelected.isDataOnlyPlan && !this.isFleetCustomer;
  }

  isESim(): boolean {
    return (
      this.mobileLineSelected &&
      this.mobileLineSelected.simType &&
      this.mobileLineSelected.simType === AccountSelectorConstants.E_SIM
    );
  }

  private checkPIDLinkedLines(): void {
    const isMultipleUserPIDLinked =
      this.mobileLines.filter((item) => {
        return !item.isDataOnlyPlan && item.userPIDLinked;
      }).length > 1;
    const hasNoLinesMappedToPID = this.mobileLines.every((item) => {
      return !item.userPIDLinked;
    });
    this.mobileLines.forEach((line) => {
      line['isMultipleUserPIDLinked'] = isMultipleUserPIDLinked;
      line['hasNoLinesMappedToPID'] = hasNoLinesMappedToPID;
    });
  }
}
