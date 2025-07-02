import { Component, Element, h, Host, Listen, Prop, State } from '@stencil/core';
import { DROPDOWN_ALIGN, DropdownAlign } from './models/dropdown-menu.types';
import { ICON_SIZES } from '../icon/models/icon.types';

@Component({
  tag: 'wink-dropdown-menu',
  styleUrls: {
    telenet: 'styles/brands/dropdown-menu.telenet.scss',
    base: 'styles/brands/dropdown-menu.base.scss',
  },
  shadow: true,
})
export class DropdownMenu {
  @Element() host!: HTMLWinkDropdownMenuElement;

  @Prop() heading?: string = 'default-1';
  @Prop({ mutable: true }) isExpanded?: boolean = false;
  @Prop() dropdownTabIndex?: number = 1;
  @Prop() itemSelected?: string;

  @State() listPosition: DropdownAlign = DROPDOWN_ALIGN.topLeft;
  @State() focusableItem = NaN;

  componentDidLoad(): void {
    this.setPosition();
    for (let i = 0; i < this.getDropdownItems().length; i++) {
      if (this.getDropdownItems()[i].innerText === this.itemSelected) {
        this.getDropdownItems()[i].classList.add('active');
      }
    }
  }

  @Listen('keydown', {
    passive: true,
  })
  handleKeyDown(ev: KeyboardEvent) {
    switch (ev.key) {
      case ' ':
      case 'Enter': {
        const element = ev?.target as HTMLElement;
        if (element.tagName.toUpperCase() === 'WINK-LINK') {
          element?.shadowRoot?.querySelector('a')?.click();
        } else {
          this.toggleDropdown(ev);
        }
        break;
      }
      case 'Tab': {
        if (ev.target === this.getDropdownItems()[this.getDropdownItems().length - 1]) {
          this.toggleDropdown(ev);
        }
        break;
      }
      case 'ArrowDown': {
        if (Number.isNaN(this.focusableItem) || this.focusableItem === this.getDropdownItems().length - 1) {
          this.focusableItem = 0;
        } else {
          this.focusableItem++;
        }
        this.focusOnItem(this.focusableItem);
        break;
      }
      case 'ArrowUp': {
        if (!this.focusableItem || this.focusableItem === -1) {
          this.focusableItem = this.getDropdownItems().length - 1;
        } else {
          this.focusableItem--;
        }
        this.focusOnItem(this.focusableItem);
        break;
      }
      case 'Escape': {
        this.isExpanded = false;
        this.host.shadowRoot?.querySelector('button')?.focus();
        break;
      }
      case 'Home': {
        this.focusableItem = 0;
        this.focusOnItem(this.focusableItem);
        break;
      }
      case 'End': {
        this.focusableItem = this.getDropdownItems().length - 1;
        this.focusOnItem(this.focusableItem);
        break;
      }
    }
  }

  private focusOnItem(focusItem: number) {
    const itemToFocus = this.getDropdownItems()[focusItem];
    if (itemToFocus instanceof HTMLElement) {
      return itemToFocus?.shadowRoot?.querySelector('a')?.focus();
    }
  }

  private getDropdownItems() {
    return this.host.querySelectorAll('wink-link');
  }

  private readonly toggleDropdown = (_e: Event) => {
    this.setPosition();
    this.isExpanded = !this.isExpanded;
  };

  private readonly setPosition = () => {
    const dropdownRect = this.host.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const spaceOnLeft = dropdownRect.left;
    const spaceOnRight = viewportWidth - dropdownRect.right;
    const spaceOnTop = dropdownRect.top;
    const spaceOnBottom = viewportHeight - dropdownRect.bottom;

    const positionX = Math.max(spaceOnLeft, spaceOnRight) === spaceOnRight ? 'left' : 'right';
    const positionY = Math.max(spaceOnTop, spaceOnBottom) === spaceOnBottom ? 'top' : 'bottom';

    this.listPosition = `${positionY}-${positionX}`;
  };

  render() {
    return (
      <Host
        class={`dropdown-menu--align-list--${this.listPosition}`}
        is-expanded={this.isExpanded}
        onMouseDown={this.toggleDropdown}
        exportparts="icon, icon-chevron-down-small">
        <button class="dropdown-menu--heading" tabindex={this.dropdownTabIndex}>
          <slot name="dropdown-menu--avatar" />
          {this.heading}
          <div class="dropdown-menu--chevron">
            <wink-icon size={ICON_SIZES.sm} icon="chevron-down-small"></wink-icon>
          </div>
        </button>
        <ul class="dropdown-menu--list">
          <slot></slot>
        </ul>
      </Host>
    );
  }
}
