import { html } from 'lit-html';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { mainNavigationItems } from '../../assets/shared/data/global-header.data';
import { BADGES } from '../../models/badges.types';

type SlotArgs = {
  [slotName: string]: boolean;
};

const generateSlot = (args: SlotArgs, slotName: string, htmlContent: string) =>
  args[slotName] ? html`${unsafeHTML(htmlContent)}` : null;

export default {
  title: 'COMPONENTS/Global header',
  component: 'GlobalHeader',

  argTypes: {
    customerOrientation: { control: 'boolean', table: { defaultValue: { summary: true }, disable: true } },
    intentBar: { control: 'boolean', table: { defaultValue: { summary: true }, disable: true } },
    customerZone: { control: 'boolean', table: { defaultValue: { summary: true }, disable: true } },
    language: { control: 'boolean', table: { defaultValue: { summary: true }, disable: true } },
    brand: { control: 'boolean', table: { defaultValue: { summary: true }, disable: true } },
    mainNavigation: { control: 'boolean', table: { defaultValue: { summary: true }, disable: true } },
    search: { control: 'boolean', table: { defaultValue: { summary: true }, disable: true } },
    callToAction: { control: 'boolean', table: { defaultValue: { summary: true }, disable: true } },
    flyout: { control: 'boolean', table: { defaultValue: { summary: true }, disable: true } },

    mobileCustomerOrientation: { control: 'boolean', table: { defaultValue: { summary: true }, disable: true } },
    mobileIntentBar: { control: 'boolean', table: { defaultValue: { summary: true }, disable: true } },
    mobileCustomerZone: { control: 'boolean', table: { defaultValue: { summary: true }, disable: true } },
    mobileLanguage: { control: 'boolean', table: { defaultValue: { summary: true }, disable: true } },
    mobileBrand: { control: 'boolean', table: { defaultValue: { summary: true }, disable: true } },
    mobileMainNavigation: { control: 'boolean', table: { defaultValue: { summary: true }, disable: true } },
    mobileSearch: { control: 'boolean', table: { defaultValue: { summary: true }, disable: true } },
    mobileCallToAction: { control: 'boolean', table: { defaultValue: { summary: true }, disable: true } },
    mobileFlyout: { control: 'boolean', table: { defaultValue: { summary: true }, disable: true } },
  },
  args: {
    customerOrientation: true,
    intentBar: true,
    customerZone: true,
    language: true,
    brand: true,
    mainNavigation: true,
    search: true,
    callToAction: true,
    flyout: true,

    mobileCustomerOrientation: true,
    mobileIntentBar: true,
    mobileCustomerZone: true,
    mobileLanguage: true,
    mobileBrand: true,
    mobileMainNavigation: true,
    mobileSearch: true,
    mobileCallToAction: true,
    mobileFlyout: true,
  },
  parameters: {
    badges: [BADGES.ready],
  },

  render: (args: any) =>
    html` <wink-global-header>
      ${generateSlot(
        args,
        'customerOrientation',
        `<wink-customer-orientation slot="customer-orientation"></wink-customer-orientation>`
      )}
      ${generateSlot(args, 'intentBar', `<wink-intent-bar slot="intent-bar"></wink-intent-bar>`)}
      ${generateSlot(
        args,
        'customerZone',
        `<div slot="customer-zone">
            <wink-dropdown-menu heading="Account" align-items="top-left" item-selected="Account">
              <wink-avatar size="sm" slot="dropdown-menu--avatar"></wink-avatar>
              <wink-link
                appearance="dropdown-menu-link"
                size="inherit"
                icon-position="left"
                icon-appearance="secondary"
                is-disabled="false"
                href="/"
                class="active">
                <wink-icon
                  slot="link-icon"
                  appearance="secondary"
                  icon="user"
                  size="sm"
                ></wink-icon>
                Account
              </wink-link>
              <wink-link
                appearance="dropdown-menu-link"
                size="inherit"
                icon-position="left"
                icon-appearance="secondary"
                is-disabled="false"
                href="/"
              >
                <wink-icon
                  slot="link-icon"
                  appearance="secondary"
                  icon="stack"
                  size="sm"
                ></wink-icon>
                Products
              </wink-link>
              <wink-link
                appearance="dropdown-menu-link"
                size="inherit"
                icon-position="left"
                icon-appearance="secondary"
                is-disabled="false"
                href="#"
              >
                <wink-icon
                  slot="link-icon"
                  appearance="secondary"
                  icon="bill"
                  size="sm"
                ></wink-icon>
                Billy
              </wink-link>
            </wink-dropdown-menu>
          </div>`
      )}
      ${generateSlot(
        args,
        'language',
        `<div slot="language">
          <wink-dropdown-menu heading="NL" list-position="left" item-selected="NL">
            <wink-link appearance="dropdown-menu-link">NL</wink-link>
            <wink-link appearance="dropdown-menu-link">FR</wink-link>
            <wink-link appearance="dropdown-menu-link">EN</wink-link>
          </wink-dropdown-menu>
        </div>`
      )}
      ${generateSlot(
        args,
        'brand',
        `<div slot="brand">
          <wink-logo
            appearance="telenet-yellow"
            href="https://www.telenet.be"
            alt="Inspect element to check"
            target="_self" />
        </div>`
      )}
      ${generateSlot(
        args,
        'mainNavigation',
        `<div slot="main-navigation"><wink-main-navigation menu-items=${JSON.stringify(mainNavigationItems)} /></div>`
      )}
      ${generateSlot(
        args,
        'search',
        `<div slot="search">
            <wink-input
              appearance="search"
              icon-left="search"
              icon-right="backspace"
              input-mode-option="text"
              type="text"
              size="sm"
              placeholder="Zoeken"
              name="input name" />
          </div>`
      )}
      ${generateSlot(
        args,
        'callToAction',
        `<div slot="call-to-action">
            <wink-button
              text="Shopping cart"
              element="button"
              type="button"
              appearance="primary"
              size="sm"
              status="none"
              icon="basket"
              icon-position="left" />
          </div>`
      )}
      ${generateSlot(
        args,
        'flyout',
        `
        <wink-flyout flyout-id="0" slot="flyout">
          <div slot="col-1">
            <wink-navigation-list has-bold-links>
              <wink-navigation-list-item href="#">Landing page</wink-navigation-list-item>
            </wink-navigation-list>

            <wink-navigation-list list-title="Uitgelicht" has-bold-links>
              <wink-navigation-list-item href="#">Internet Abonnementen</wink-navigation-list-item>
              <wink-navigation-list-item href="#">Bundels met internet</wink-navigation-list-item>
            </wink-navigation-list>

            <wink-navigation-list list-title="Welk aanbod past bij jou?">
              <wink-navigation-list-item href=""> Doe de test</wink-navigation-list-item>
            </wink-navigation-list>
          </div>

          <div slot="col-2">
            <wink-navigation-list list-title="Internet Producten" has-bold-links="true">
              <wink-navigation-list-item href="">Internet + Mobiel + TV</wink-navigation-list-item>
              <wink-navigation-list-item href="#">Internet + Mobiel</wink-navigation-list-item>
              <wink-navigation-list-item href="#">Internet + TV</wink-navigation-list-item>
              <wink-navigation-list-item href="#">Internet only</wink-navigation-list-item>
            </wink-navigation-list>
          </div>

          <div slot="col-3">
            <wink-navigation-list list-title="Support">
              <wink-navigation-list-item href="">Hulp nodig met internet</wink-navigation-list-item>
              <wink-navigation-list-item href="#">Jouw product beheren</wink-navigation-list-item>
              <wink-navigation-list-item href="#">Meer inspiratie omtrent internet</wink-navigation-list-item>
              <wink-navigation-list-item href="#">Meer inspiratie omtrent internet</wink-navigation-list-item>
            </wink-navigation-list>
          </div>

          <div slot="col-4">
            <wink-img
              src-desktop="/assets/shared/img/place-holders/flyout.svg"
              alt="flyout image"
              loading="lazy" />
          </div>
        </wink-flyout>

        <wink-flyout flyout-id="2" slot="flyout">
          <div slot="col-1">
            <wink-navigation-list has-bold-links>
              <wink-navigation-list-item href="#">Landing page</wink-navigation-list-item>
            </wink-navigation-list>

            <wink-navigation-list has-bold-links="true">
              <wink-navigation-list-item href=""> Internet + Mobiel + TV</wink-navigation-list-item>
            </wink-navigation-list has-bold-links="true">

            <wink-navigation-list has-bold-links="true">
              <wink-navigation-list-item href=""> Internet + Mobiel</wink-navigation-list-item>
            </wink-navigation-list has-bold-links="true">

            <wink-navigation-list has-bold-links="true">
              <wink-navigation-list-item href=""> Internet + TV</wink-navigation-list-item>
            </wink-navigation-list has-bold-links="true">

            <wink-navigation-list has-bold-links="true">
              <wink-navigation-list-item href=""> Internet</wink-navigation-list-item>
            </wink-navigation-list>
          </div>

          <div slot="col-2">
            <wink-navigation-list list-title="Welk aanbod past bij jou?">
              <wink-navigation-list-item href=""> Doe de test</wink-navigation-list-item>
            </wink-navigation-list>

            <wink-navigation-list list-title="Internet Producten" has-bold-links="true">
              <wink-navigation-list-item href="">Internet + Mobiel + TV</wink-navigation-list-item>
              <wink-navigation-list-item href="#">Internet + Mobiel</wink-navigation-list-item>
              <wink-navigation-list-item href="#">Internet + TV</wink-navigation-list-item>
              <wink-navigation-list-item href="#">Internet only</wink-navigation-list-item>
            </wink-navigation-list>
          </div>

          <div slot="col-4"></div>

          <div slot="col-4">
            <wink-img
              src-desktop="/assets/shared/img/place-holders/flyout.svg"
              alt="flyout image"
              loading="lazy" />
          </div>
        </wink-flyout>

        <wink-flyout flyout-id="3" slot="flyout">
          <div slot="col-1">
            <wink-navigation-list has-bold-links>
              <wink-navigation-list-item href="#">Landing page</wink-navigation-list-item>
            </wink-navigation-list>
          </div>

          <div slot="col-2">
            <wink-navigation-list list-title="Welk aanbod past bij jou?">
              <wink-navigation-list-item href=""> Doe de test</wink-navigation-list-item>
            </wink-navigation-list>

            <wink-navigation-list list-title="Internet Producten" has-bold-links="true">
              <wink-navigation-list-item href="">Internet + Mobiel + TV</wink-navigation-list-item>
              <wink-navigation-list-item href="#">Internet + Mobiel</wink-navigation-list-item>
              <wink-navigation-list-item href="#">Internet + TV</wink-navigation-list-item>
              <wink-navigation-list-item href="#">Internet only</wink-navigation-list-item>
            </wink-navigation-list>
          </div>

          <div slot="col-3">
            <wink-navigation-list list-title="Support">
              <wink-navigation-list-item href="">Hulp nodig met internet</wink-navigation-list-item>
              <wink-navigation-list-item href="#">Jouw product beheren</wink-navigation-list-item>
              <wink-navigation-list-item href="#">Meer inspiratie omtrent internet</wink-navigation-list-item>
              <wink-navigation-list-item href="#">Meer inspiratie omtrent internet</wink-navigation-list-item>
            </wink-navigation-list>
          </div>

          <div slot="col-4">
            <wink-navigation-list has-bold-links>
              <wink-navigation-list-item href="#">Netwerk</wink-navigation-list-item>
            </wink-navigation-list>

            <wink-navigation-list list-title="Uitgelicht" has-bold-links>
              <wink-navigation-list-item href="#">Internet Abonnementen</wink-navigation-list-item>
              <wink-navigation-list-item href="#">Bundels met internet</wink-navigation-list-item>
            </wink-navigation-list>
          </div>
        </wink-flyout>
        `
      )}
      ${generateSlot(
        args,
        'mobileCustomerOrientation',
        `<wink-customer-orientation slot="mobile-customer-orientation"></wink-customer-orientation>`
      )}
      ${generateSlot(args, 'mobileIntentBar', `<wink-intent-bar slot="mobile-intent-bar"></wink-intent-bar>`)}
      ${generateSlot(
        args,
        'mobileCustomerZone',
        `<div slot="mobile-customer-zone">
            <wink-icon
            appearance="default"
            icon="user"
            size="md"
            exportparts="icon, icon-user" />
          </div>`
      )}
      ${generateSlot(
        args,
        'mobileLanguage',
        `<div slot="mobile-language">
            <wink-dropdown-menu heading="NL" list-position="left" item-selected="NL">
              <wink-link appearance="dropdown-menu-link">NL</wink-link>
              <wink-link appearance="dropdown-menu-link">FR</wink-link>
              <wink-link appearance="dropdown-menu-link">EN</wink-link>
            </wink-dropdown-menu>
          </div>`
      )}
      ${generateSlot(
        args,
        'mobileBrand',
        `<div slot="mobile-brand">
            <wink-logo
              appearance="telenet-yellow"
              href="https://www.telenet.be"
              alt="Inspect element to check"
              target="_self" />
          </div>`
      )}
      ${generateSlot(
        args,
        'mobileMainNavigation',
        `<wink-main-navigation slot="mobile-main-navigation" menu-items=${JSON.stringify(mainNavigationItems)} />`
      )}
      ${generateSlot(
        args,
        'mobileSearch',
        `<div slot="mobile-search">
            <wink-icon
            appearance="default"
            icon="search"
            size="md"
            exportparts="icon, icon-search" />
          </div>`
      )}
      ${generateSlot(
        args,
        'mobileFlyout',
        `
        <wink-flyout flyout-id="0" slot="mobile-flyout">
          <div slot="col-1">
            <wink-navigation-list list-title="Uitgelicht" has-bold-links>
              <wink-navigation-list-item href="#">Internet Abonnementen</wink-navigation-list-item>
              <wink-navigation-list-item href="#">Bundels met internet</wink-navigation-list-item>
            </wink-navigation-list>

            <wink-navigation-list list-title="Welk aanbod past bij jou?">
              <wink-navigation-list-item href=""> Doe de test</wink-navigation-list-item>
            </wink-navigation-list>
          </div>

          <div slot="col-2">
            <wink-navigation-list list-title="Internet Producten" has-bold-links="true">
              <wink-navigation-list-item href="">Internet + Mobiel + TV</wink-navigation-list-item>
              <wink-navigation-list-item href="#">Internet + Mobiel</wink-navigation-list-item>
              <wink-navigation-list-item href="#">Internet + TV</wink-navigation-list-item>
              <wink-navigation-list-item href="#">Internet only</wink-navigation-list-item>
            </wink-navigation-list>
          </div>

          <div slot="col-3">
            <wink-navigation-list list-title="Support">
              <wink-navigation-list-item href="">Hulp nodig met internet</wink-navigation-list-item>
              <wink-navigation-list-item href="#">Jouw product beheren</wink-navigation-list-item>
              <wink-navigation-list-item href="#">Meer inspiratie omtrent internet</wink-navigation-list-item>
              <wink-navigation-list-item href="#">Meer inspiratie omtrent internet</wink-navigation-list-item>
            </wink-navigation-list>
          </div>

        </wink-flyout>

        <wink-flyout flyout-id="2" slot="mobile-flyout">
          <div slot="col-1">
            <wink-navigation-list has-bold-links>
              <wink-navigation-list-item href="#">Promo's</wink-navigation-list-item>
            </wink-navigation-list>

            <wink-navigation-list has-bold-links="true">
              <wink-navigation-list-item href=""> Internet + Mobiel + TV</wink-navigation-list-item>
            </wink-navigation-list has-bold-links="true">

            <wink-navigation-list has-bold-links="true">
              <wink-navigation-list-item href=""> Internet + Mobiel</wink-navigation-list-item>
            </wink-navigation-list has-bold-links="true">

            <wink-navigation-list has-bold-links="true">
              <wink-navigation-list-item href=""> Internet + TV</wink-navigation-list-item>
            </wink-navigation-list has-bold-links="true">

            <wink-navigation-list has-bold-links="true">
              <wink-navigation-list-item href=""> Internet</wink-navigation-list-item>
            </wink-navigation-list>

            <wink-navigation-list has-bold-links="true" list-title="Mobiel">
              <wink-navigation-list-item href=""> Mobiele abonnementen</wink-navigation-list-item>
              <wink-navigation-list-item href=""> Telenet Pay</wink-navigation-list-item>
              <wink-navigation-list-item href=""> eSIM</wink-navigation-list-item>
            </wink-navigation-list>
          </div>

          <div slot="col-2">
            <wink-navigation-list list-title="Welk aanbod past bij jou?">
              <wink-navigation-list-item href=""> Doe de test</wink-navigation-list-item>
            </wink-navigation-list>

            <wink-navigation-list list-title="Internet Producten" has-bold-links="true">
              <wink-navigation-list-item href="">Internet + Mobiel + TV</wink-navigation-list-item>
              <wink-navigation-list-item href="#">Internet + Mobiel</wink-navigation-list-item>
              <wink-navigation-list-item href="#">Internet + TV</wink-navigation-list-item>
              <wink-navigation-list-item href="#">Internet only</wink-navigation-list-item>
            </wink-navigation-list>
          </div>

          <div slot="col-3">
            <wink-navigation-list list-title="Entertainment" has-bold-links="true">
              <wink-navigation-list-item href="#">Play Sports</wink-navigation-list-item>
              <wink-navigation-list-item href="#">Netflix & Streamz combo</wink-navigation-list-item>
              <wink-navigation-list-item href="#">Streamz</wink-navigation-list-item>
              <wink-navigation-list-item href="#">Play More</wink-navigation-list-item>
              <wink-navigation-list-item href="#">Disney+</wink-navigation-list-item>
              <wink-navigation-list-item href="#">Netflix</wink-navigation-list-item>
              <wink-navigation-list-item href="#">The Park (VR)</wink-navigation-list-item>
            </wink-navigation-list>

            <wink-navigation-list has-bold-links="true">
              <wink-navigation-list-item href="#">TV</wink-navigation-list-item>
            </wink-navigation-list>

            <wink-navigation-list has-bold-links="true">
              <wink-navigation-list-item href="#">Vaste telefoonlijn</wink-navigation-list-item>
            </wink-navigation-list>
          </div>
        </wink-flyout>

        <wink-flyout flyout-id="3" slot="mobile-flyout">
          <div slot="col-1">
            <wink-navigation-list has-bold-links>
              <wink-navigation-list-item href="#">Netwerk</wink-navigation-list-item>
            </wink-navigation-list>
          </div>

          <div slot="col-2">
            <wink-navigation-list list-title="Welk aanbod past bij jou?">
              <wink-navigation-list-item href=""> Doe de test</wink-navigation-list-item>
            </wink-navigation-list>

            <wink-navigation-list list-title="Internet Producten" has-bold-links="true">
              <wink-navigation-list-item href="">Internet + Mobiel + TV</wink-navigation-list-item>
              <wink-navigation-list-item href="#">Internet + Mobiel</wink-navigation-list-item>
              <wink-navigation-list-item href="#">Internet + TV</wink-navigation-list-item>
              <wink-navigation-list-item href="#">Internet only</wink-navigation-list-item>
            </wink-navigation-list>
          </div>

          <div slot="col-3">
            <wink-navigation-list list-title="Support">
              <wink-navigation-list-item href="">Hulp nodig met internet</wink-navigation-list-item>
              <wink-navigation-list-item href="#">Jouw product beheren</wink-navigation-list-item>
              <wink-navigation-list-item href="#">Meer inspiratie omtrent internet</wink-navigation-list-item>
              <wink-navigation-list-item href="#">Meer inspiratie omtrent internet</wink-navigation-list-item>
            </wink-navigation-list>
          </div>

          <div slot="col-4">
            <wink-navigation-list has-bold-links>
              <wink-navigation-list-item href="#">Netwerk</wink-navigation-list-item>
            </wink-navigation-list>

            <wink-navigation-list list-title="Uitgelicht" has-bold-links>
              <wink-navigation-list-item href="#">Internet Abonnementen</wink-navigation-list-item>
              <wink-navigation-list-item href="#">Bundels met internet</wink-navigation-list-item>
            </wink-navigation-list>
          </div>
        </wink-flyout>
        `
      )}
      ${generateSlot(
        args,
        'mobileCallToAction',
        `<div slot="mobile-call-to-action">
            <wink-button
              text="Button primary"
              element="button"
              type="button"
              appearance="primary"
              width="full"
              status="none"/>
          </div>`
      )}
    </wink-global-header>`,
};

export const Full = {};

export const Compact = {
  args: {
    customerOrientation: false,
    intentBar: false,
    customerZone: false,
    mobileCustomerOrientation: false,
    mobileIntentBar: false,
    mobileCustomerZone: false,
  },
};

export const Minimal = {
  args: {
    customerOrientation: false,
    intentBar: false,
    customerZone: false,
    mainNavigation: false,
    search: false,
    callToAction: false,
    mobileCustomerOrientation: false,
    mobileIntentBar: false,
    mobileCustomerZone: false,
    mobileMainNavigation: false,
    mobileSearch: false,
    mobileCallToAction: false,
    flyout: false,
    mobileFlyout: false,
  },
};
