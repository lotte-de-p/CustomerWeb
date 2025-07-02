import { AbstractBaseComponent } from '@telenet/ng-lib-page';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MessageService } from '@telenet/ng-lib-message';
import { sortBy, isString, isEmpty } from 'lodash-es';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ProductSubscriptionsInterface } from '../../../../../shared/interfaces/product/product-subscriptions.interface';
import { AccountSelectorService } from '../../../../../shared/services/account-selector.service';
import { ProductConstants } from '../../../../../shared/constants/product/product.constant';
import { PhoneNumberPipe } from '../../../../../../shared/common/pipes/phone-number.pipe';

@Component({
  selector: 'app-bundle-line-selector',
  templateUrl: './bundle-line-selector.component.html',
  standalone: true,
  imports: [CommonModule, TranslateModule, PhoneNumberPipe],
})
export class BundleLineSelectorComponent extends AbstractBaseComponent implements OnInit {
  @Input() messageGroupName: string;
  @Output() bundleLines = new EventEmitter();

  selectedAccount: ProductSubscriptionsInterface;
  bundleAccounts: ProductSubscriptionsInterface[] = [];
  selectedBundleIdentifier: string;
  isSelectorOpen = false;
  isFirstLoad = true;
  showGroupView = true;

  constructor(
    private readonly accountSelectorService: AccountSelectorService,
    private readonly eRef: ElementRef,
    private readonly cdr: ChangeDetectorRef,
    private readonly messageService: MessageService
  ) {
    super();
  }

  ngOnInit(): void {
    this.loadSelectedBundle();
  }

  ngOnChanges() {
    this.loadSelectedBundle();
  }

  asProductSubscriptions = (selectedAccount: unknown) => selectedAccount as ProductSubscriptionsInterface;

  loadSelectedBundle(): void {
    this.obs(this.accountSelectorService.getSelectedBundle()).subscribe((response: ProductSubscriptionsInterface) => {
      this.selectedAccount = response;
      if (isEmpty(this.selectedAccount)) {
        this.bundleAccounts = [];
        this.isFirstLoad = false;
      } else {
        this.selectedBundleIdentifier = this.selectedAccount.bundleIdentifier;
        this.loadBundleAccounts(this.selectedAccount);
        this.accountSelectorService.setSelectedAccount(this.selectedAccount);
        if (this.showGroupView) {
          this.selectedAccount = this.loadGroupBundle();
          this.onSelectAccount(this.loadGroupBundle());
        }
        this.isFirstLoad = false;
        this.accountSelectorService.setMobileUsageRetrieved(true);
      }
    });
  }

  toggleSelector(): void {
    if (this.bundleAccounts && this.bundleAccounts.length > 1) {
      this.isSelectorOpen = !this.isSelectorOpen;
    }
  }

  isActive(account: ProductSubscriptionsInterface | string): boolean {
    return (
      this.selectedAccount &&
      this.selectedAccount['identifier'] &&
      this.selectedAccount['identifier'] === account['identifier']
    );
  }

  onSelectAccount(bundleAccount: ProductSubscriptionsInterface | string): void {
    this.messageService.clearMessages(this.messageGroupName);
    if (isString(bundleAccount)) {
      this.selectedAccount = this.bundleAccounts.find((account) => account.identifier === bundleAccount);
    } else {
      this.selectedAccount = bundleAccount;
    }
    this.accountSelectorService.setSelectedAccount(this.selectedAccount);
    this.cdr.detectChanges();
  }

  private loadBundleAccounts(selectedAccount: ProductSubscriptionsInterface): void {
    this.bundleAccounts = [];
    if (selectedAccount.productType.toLowerCase() === ProductConstants.PRODUCT_TYPE_BUNDLE) {
      this.obs(this.accountSelectorService.getCustomerAccounts()).subscribe(
        (response: ProductSubscriptionsInterface[]) => {
          if (!isEmpty(response)) {
            this.bundleAccounts = response.filter((value) => value.bundleIdentifier === this.selectedBundleIdentifier);
            if (this.showGroupView) {
              this.bundleAccounts.push(this.loadGroupBundle());
            }
          }
          this.bundleLines.emit(this.bundleAccounts);
          if (!isEmpty(this.bundleAccounts)) {
            this.bundleAccounts = sortBy(this.bundleAccounts, (line) => line.identifier);
          }
        }
      );
    }
  }

  private loadGroupBundle(): ProductSubscriptionsInterface {
    return {
      description: '',
      id: '',
      identifier: '',
      externalProductCode: '',
      label: 'ng.fleet-user-mobile-usage-overview.lbl.group-view',
      addressId: '',
      locationId: '',
      status: '',
      productType: ProductConstants.PRODUCT_TYPE_BUNDLE,
      bundleIdentifier: this.selectedAccount ? this.selectedAccount['bundleIdentifier'] : '',
    };
  }

  getNameByLabel(label: string): string {
    return label && label.split('/')[0].trimEnd();
  }

  @HostListener('document:click', ['$event'])
  @HostListener('document:touchstart', ['$event'])
  handleOutsideClick(event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isSelectorOpen = false;
    }
  }
}
