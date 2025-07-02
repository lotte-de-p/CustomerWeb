import { Component, h, Host, Prop, State } from '@stencil/core';
import { NOTIFICATION_TYPES, NotificationType } from './models/notification.types';
import { ICON_SIZES } from '../icon/models/icon.types';

@Component({
  tag: 'wink-notification',
  styleUrls: {
    telenet: 'styles/brands/notification.telenet.scss',
    base: 'styles/brands/notification.base.scss',
  },
  shadow: true,
})
export class Notification {
  @Prop() appearance: NotificationType = NOTIFICATION_TYPES.information;
  @Prop() hasCloseIcon = false;

  @State() isNotificationVisible = true;

  private readonly iconsNamesMap = new Map([
    ['information', 'information-shape'],
    ['success', 'check-shape'],
    ['error', 'error-shape'],
    ['warning', 'alert-shape'],
  ]);

  private readonly closeNotification = () => {
    this.isNotificationVisible = false;
  };

  render() {
    return (
      this.isNotificationVisible && (
        <Host exportparts={`icon, icon-cross-small, icon-${this.iconsNamesMap.get(this.appearance)}`}>
          <div class={`notification ${this.appearance} ${this.hasCloseIcon ? 'has-close-icon' : ''}`}>
            <wink-icon size={ICON_SIZES.md} icon={this.iconsNamesMap.get(this.appearance)}></wink-icon>

            {this.hasCloseIcon && (
              <wink-icon
                class="close-icon"
                appearance="default"
                icon="cross-small"
                size={ICON_SIZES.md}
                onClick={this.closeNotification}
                icon-color="default"></wink-icon>
            )}

            <div class="notification-text">
              <slot name="heading" />
              <slot name="content" />
            </div>
          </div>
        </Host>
      )
    );
  }
}
