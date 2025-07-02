import { NgClass } from '@angular/common';
import { Component, EventEmitter, input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PmProfileIconComponent } from '../pm-profile-icon/pm-profile-icon.component';
import { ProfileOverview } from '@profile-management/data-access';

@Component({
  standalone: true,
  templateUrl: './pm-profile-overview-header.component.html',
  selector: 'tg-pm-profile-overview-header',
  imports: [TranslateModule, NgClass, PmProfileIconComponent],
})
export class PmProfileOverviewHeaderComponent {
  profileOverview = input.required<ProfileOverview>();
  hasProfilePicture = input.required<boolean>();
  profilePictureUrl = input.required<string>();
  moreInfoLink = input.required<string>();
  isMember = input.required<boolean>();
  isBaseCustomer = input.required<boolean>();

  @Output() linkClick = new EventEmitter<{ type: string; link?: string }>();

  readonly ROLE_MEMBER = 'Member';
  readonly MORE_INFO = 'more-info';

  copyToClipboard(): void {
    navigator.clipboard
      .writeText(this.profileOverview().customerNumber)
      .then(() => {
        console.info('Customer number copied to clipboard');
      })
      .catch((err) => {
        console.error('Could not copy text: ', err);
      });
  }

  trackLinkClick(event: Event): void {
    event.preventDefault();

    this.linkClick.emit({ type: this.MORE_INFO, link: this.moreInfoLink() });
  }
}
