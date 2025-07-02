import { NgIf } from '@angular/common';
import { Component, computed, EventEmitter, input, Output } from '@angular/core';
import { ProfileOverview } from '@profile-management/data-access';
import { PmProfileOverviewNavLinkComponent } from '../pm-profile-overview-nav-link/pm-profile-overview-nav-link.component';
import { ProfileOverviewNavLinksUrls } from '../interfaces/profile-overview-nav-links-urls.interface';

@Component({
  standalone: true,
  templateUrl: './pm-profile-overview-nav-links.component.html',
  selector: 'tg-pm-profile-overview-nav-links',
  imports: [PmProfileOverviewNavLinkComponent, NgIf],
})
export class PmProfileOverviewNavLinksComponent {
  navLinkUrls = input.required<ProfileOverviewNavLinksUrls>();
  profileOverview = input.required<ProfileOverview>();
  isMember = input.required<boolean>();
  isBaseCustomer = input.required<boolean>();

  showProductRelatedLinks = computed(() => this.checkProductLinksVisibility);
  showConnectivityOptions = computed(() => this.checkConnectivityOptionsVisibility);

  readonly ROLE_MEMBER = 'Member';

  @Output() linkClick = new EventEmitter<{ type: string; link?: string }>();

  handleLinkClick(data: { type: string; link?: string }): void {
    this.linkClick.emit({ ...data });
  }

  get checkProductLinksVisibility(): boolean {
    const { easySwitchUrl, invoiceSettingsUrl } = this.navLinkUrls();
    const { canManageDtvProducts, canManageInternetProducts } = this.profileOverview();
    const hasEasySwitchUrl = easySwitchUrl && (canManageDtvProducts || canManageInternetProducts);
    const hasInvoiceSettingsUrl = !!invoiceSettingsUrl;

    return hasEasySwitchUrl || hasInvoiceSettingsUrl;
  }

  get checkConnectivityOptionsVisibility(): boolean {
    const { wifiPasswordUrl, simManagementPageUrl } = this.navLinkUrls();
    const { canManageInternetProducts, canManageSimCards } = this.profileOverview();

    return (!!wifiPasswordUrl && canManageInternetProducts) || (!!simManagementPageUrl && canManageSimCards);
  }
}
