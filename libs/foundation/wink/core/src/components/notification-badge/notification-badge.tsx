import { Component, h, Host, Prop, State, Element } from '@stencil/core';
import { NOTIFICATION_BADGE_SIZES, NotificationBadgeSize } from './models/notification-badge.types';

@Component({
  tag: 'wink-notification-badge',
  styleUrls: {
    telenet: 'styles/brands/notification-badge.telenet.scss',
    base: 'styles/brands/notification-badge.base.scss',
  },
  shadow: true,
})
export class NotificationBadge {
  @Element() host!: HTMLWinkNotificationBadgeElement;

  @Prop({ reflect: true }) size: NotificationBadgeSize = NOTIFICATION_BADGE_SIZES.md;
  @Prop() visible = true;
  @Prop() showNumber? = false;
  @Prop() amount?: number;

  @State() hasSlot = false;
  @State() isVisible = this.visible;

  private slotElement!: HTMLSlotElement;

  private getContent() {
    if (this.size === NOTIFICATION_BADGE_SIZES.sm) {
      return '';
    }

    if (this.amount && this.showNumber) {
      if (this.amount > 99) {
        return '99+';
      }

      if (this.amount > 0) {
        return this.amount;
      }
    }

    return <div class="dot"></div>;
  }

  private checkSlotContent() {
    if (this.slotElement) {
      const slottedElements = this.slotElement.assignedNodes?.({ flatten: true });
      if (slottedElements) {
        this.hasSlot = slottedElements.length > 0;
      }
    }
  }

  private setHidden() {
    this.isVisible = this.visible;

    if (this.showNumber && this.isVisible && !this.amount) {
      this.isVisible = false;
    }
  }

  componentDidLoad() {
    this.checkSlotContent();

    this.slotElement.addEventListener('slotchange', () => {
      this.checkSlotContent();
    });

    this.setHidden();
  }

  componentWillUpdate() {
    this.setHidden();
  }

  render() {
    return (
      <Host class={this.hasSlot ? 'has-slot' : ''}>
        <span class={`notification-badge ${this.isVisible ? '' : 'hidden'}`}>{this.getContent()}</span>
        <slot ref={(el) => (this.slotElement = el as HTMLSlotElement)} />
      </Host>
    );
  }
}
