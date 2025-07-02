import { Component, ElementRef, EventEmitter, HostListener, Inject, Input, Output } from '@angular/core';
import { DOCUMENT, NgClass, NgForOf, NgIf } from '@angular/common';
import { AccountSelectorOrderByPipe } from './account-selector.pipe';

@Component({
  standalone: true,
  selector: 'product-price-changes-account-selector',
  templateUrl: './account-selector.component.html',
  styleUrls: ['./account-selector.component.scss'],
  imports: [NgClass, NgIf, NgForOf, AccountSelectorOrderByPipe],
})
export class AccountSelectorComponent {
  @Input() billingAccounts: string[] = [];
  @Input() accountSelected: string | undefined | null;
  @Output() selectBillingAccount = new EventEmitter<string>();

  isSelectorOpen?: boolean;

  constructor(
    private readonly eRef: ElementRef,
    @Inject(DOCUMENT) private readonly document: Document
  ) {}

  onSelectAccount(selectedAccount: string) {
    this.accountSelected = selectedAccount;
    this.dispatchCustomEvent(selectedAccount);
    this.selectBillingAccount.emit(selectedAccount);
  }

  isActive(account: string): boolean {
    return this.accountSelected === account;
  }

  toggleSelector() {
    if (this.billingAccounts.length > 1) {
      this.isSelectorOpen = !this.isSelectorOpen;
    }
  }

  private dispatchCustomEvent(account: string): void {
    this.document.dispatchEvent(
      new CustomEvent('selectedAccountModified', { bubbles: true, detail: { selectedAccount: account } })
    );
  }

  @HostListener('document:click', ['$event'])
  @HostListener('document:touchstart', ['$event'])
  handleOutsideClick(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isSelectorOpen = false;
    }
  }
}
