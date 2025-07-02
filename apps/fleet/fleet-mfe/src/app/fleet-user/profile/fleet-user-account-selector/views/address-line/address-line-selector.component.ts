import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountSelectorConstants } from '../../constants/account-selector.constant';
import { AbstractBaseComponent, UrlService } from '@telenet/ng-lib-page';
import { sortBy, first, find, isEmpty, uniqBy } from 'lodash-es';
import { NgClass } from '@angular/common';
import { ProductSubscriptionsInterface } from '../../../../shared/interfaces/product/product-subscriptions.interface';
import { FleetUserProductService } from '../../../../shared/services/product/fleet-user-product.service';
import { AccountSelectorService } from '../../../../shared/services/account-selector.service';

@Component({
  selector: 'app-address-line-selector',
  templateUrl: './address-line-selector.component.html',
  standalone: true,
  imports: [NgClass],
})
export class AddressLineSelectorComponent extends AbstractBaseComponent implements OnInit {
  @Input() hideSelector: string;
  @Input() showOnlyLoggedInLine: string;
  @Input() onlyFpbProducts: string;
  @Input() identityId: string;
  @Input() isSelectorOpen: boolean;
  @Input() status: string;
  @Output() toggle = new EventEmitter();
  messageGroupName: string = AccountSelectorConstants.MESSAGE_GROUP;
  addressLines: ProductSubscriptionsInterface[];
  addressLineSelected: ProductSubscriptionsInterface;
  isInitialized: boolean;

  readonly SESSION_STORAGE_KEY = 'address-line-selector';

  constructor(
    private readonly productService: FleetUserProductService,
    private readonly accountSelectorService: AccountSelectorService,
    private readonly urlService: UrlService
  ) {
    super();
  }

  ngOnInit(): void {
    this.loadAddressLines();
  }

  loadAddressLines(): void {
    this.productService
      .getProductLinesByType(this.messageGroupName, AccountSelectorConstants.PRODUCT_TYPE_PLAN, null, this.status)
      .subscribe({
        next: (addressLines: ProductSubscriptionsInterface[]) => {
          this.handleResponse(addressLines.filter(this.getFilterForProductSubscription()));
        },
        error: () => {
          this.accountSelectorService.setError(true, '');
        },
      });
  }

  handleResponse(addressLines: ProductSubscriptionsInterface[]): void {
    if (!isEmpty(addressLines)) {
      this.addressLines = uniqBy(addressLines, 'addressId');
      this.addressLines = sortBy(this.addressLines, 'activationDate');
      this.accountSelectorService.loadAddresses(this.messageGroupName, this.addressLines).subscribe(() => {
        this.addressLineSelected = this.getDefaultAddressLine();
        this.isInitialized = true;
        this.accountSelectorService.setSelectedAccount<ProductSubscriptionsInterface>(this.addressLineSelected);
      });
    } else {
      this.accountSelectorService.setError(false, 'address-line');
    }
  }

  getDefaultAddressLine(): ProductSubscriptionsInterface {
    let defaultAccount: ProductSubscriptionsInterface;
    if (this.urlService.requestParamsContains(AccountSelectorConstants.IDENTIFIER)) {
      const identifierFromUrl = this.urlService.getRequestParameterOrDefault(AccountSelectorConstants.IDENTIFIER, '');
      defaultAccount = find(this.addressLines, (addressLine: ProductSubscriptionsInterface) => {
        return addressLine.identifier === identifierFromUrl;
      });
      if (defaultAccount) {
        return defaultAccount;
      }
    }

    const storedAddressId = window.sessionStorage.getItem(this.SESSION_STORAGE_KEY);
    if (storedAddressId) {
      defaultAccount = this.addressLines.find((acc) => acc.addressId === storedAddressId);
      if (defaultAccount) {
        return defaultAccount;
      }
    }

    return first(this.addressLines);
  }

  onSelectAccount(selectedAccount): void {
    this.addressLineSelected = selectedAccount;
    this.accountSelectorService.setSelectedAccount<ProductSubscriptionsInterface>(selectedAccount);
    window.sessionStorage.setItem(this.SESSION_STORAGE_KEY, selectedAccount.addressId);
  }

  isActive(account): boolean {
    return (
      this.addressLineSelected &&
      this.addressLineSelected['identifier'] &&
      this.addressLineSelected['identifier'] === account['identifier']
    );
  }

  private getFilterForProductSubscription() {
    return this.onlyFpbProducts === 'true' ? (e) => e.productInfo?.isFPBProduct : () => true;
  }
}
