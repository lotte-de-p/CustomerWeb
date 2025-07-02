import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'wink-intent-bar',
  styleUrls: {
    telenet: 'styles/brands/intent-bar.telenet.scss',
    base: 'styles/brands/intent-bar.base.scss',
  },
  shadow: true,
})
export class IntentBar {
  render() {
    return (
      <Host>
        <wink-link
          appearance="menu-secondary"
          icon="headset"
          size="body-regular"
          icon-position="left"
          icon-appearance="default"
          href="#">
          <wink-icon slot="link-icon" appearance="default" icon="message-question" size="sm"></wink-icon>
          Hulp
        </wink-link>

        <wink-link
          appearance="menu-secondary"
          icon="headset"
          size="body-regular"
          icon-position="left"
          icon-appearance="default"
          href="#">
          <wink-icon slot="link-icon" appearance="default" icon="headset" size="sm"></wink-icon>
          Contact
        </wink-link>

        <wink-link
          appearance="menu-secondary"
          icon="headset"
          size="body-regular"
          icon-position="left"
          icon-appearance="default"
          href="#">
          <wink-icon slot="link-icon" appearance="default" icon="email" size="sm"></wink-icon>
          Webmail
        </wink-link>
      </Host>
    );
  }
}
