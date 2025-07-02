import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderIconComponent } from '../header-icon/header-icon.component';
import { ButtonComponent, IconType } from '@general/ui-search';

@Component({
  selector: 'tg-foundation-general-search-header-button',
  standalone: true,
  imports: [CommonModule, HeaderIconComponent, ButtonComponent],
  template: `
    <tg-foundation-general-search-button
      [attr.data-testid]="'general-search-button'"
      class="display--flex height--full"
      [hideMobile]="hideMobile"
      [customClasses]="[
        type === 'backspace' ? 'status-active-icon-backspace ' : '',
        type === 'search' || type === 'backspace' ? 'search-bar__form--button-icon-' + type : '',
        type === 'cancel' || type === 'close' ? 'search-bar__button-item search-bar__button-item-' + type : ''
      ]">
      <ng-content></ng-content>
      <tg-foundation-general-search-header-icon [attr.data-testid]="'general-search-header-icon'" [type]="type">
      </tg-foundation-general-search-header-icon>
    </tg-foundation-general-search-button>
  `,
})
export class HeaderButtonComponent {
  @Input() type: IconType | undefined;
  @Input() expanded = false;
  @Input() hideMobile = false;
}
