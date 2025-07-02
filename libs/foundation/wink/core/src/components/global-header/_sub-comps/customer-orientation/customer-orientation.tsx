import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'wink-customer-orientation',
  styleUrls: {
    telenet: 'styles/brands/customer-orientation.telenet.scss',
    base: 'styles/brands/customer-orientation.base.scss',
  },
  shadow: true,
})
export class CustomerOrientation {
  render() {
    return (
      <Host>
        <wink-dropdown-menu heading="Particulieren" item-selected="Particulieren" list-position="left">
          <wink-link appearance="dropdown-menu-link">Particulieren</wink-link>
          <wink-link appearance="dropdown-menu-link">Zelfstandigen</wink-link>
          <wink-link appearance="dropdown-menu-link">Bedrijven</wink-link>
        </wink-dropdown-menu>

        <wink-dropdown-menu heading="Alle websites" item-selected="Alle websites" list-position="left">
          <wink-link appearance="dropdown-menu-link">Alle websites</wink-link>
          <wink-link appearance="dropdown-menu-link">Play sports</wink-link>
          <wink-link appearance="dropdown-menu-link">Telenet-apps</wink-link>
        </wink-dropdown-menu>
      </Host>
    );
  }
}
