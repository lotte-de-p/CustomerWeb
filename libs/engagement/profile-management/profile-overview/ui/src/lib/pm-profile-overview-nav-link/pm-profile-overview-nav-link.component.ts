import { NgClass } from '@angular/common';
import { Component, EventEmitter, input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PmProfileIconComponent } from '../pm-profile-icon/pm-profile-icon.component';

@Component({
  standalone: true,
  templateUrl: './pm-profile-overview-nav-link.component.html',
  selector: 'tg-pm-profile-overview-nav-link',
  imports: [TranslateModule, NgClass, PmProfileIconComponent],
})
export class PmProfileOverviewNavLinkComponent {
  type = input.required<string>();
  icon = input.required<string>();
  link = input<string>();
  subTitle = input<boolean>();
  isBaseCustomer = input<boolean>();

  @Output() linkClick = new EventEmitter<{ type: string; link?: string }>();

  trackLinkClick(event: Event): void {
    event.preventDefault();

    this.linkClick.emit({ type: this.type(), link: this.link() });
  }
}
