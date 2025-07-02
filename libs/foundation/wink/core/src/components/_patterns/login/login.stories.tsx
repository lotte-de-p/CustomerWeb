import { html } from 'lit-html';
import { Meta } from '@storybook/web-components';
import { BADGES } from '../../../models/badges.types';

export default {
  title: 'PATTERNS/Login',
  component: 'Login',
  parameters: {
    badges: [BADGES.inProgress],
  },
  argTypes: {
    loginOptions: {
      control: 'object',
      description: 'Option to add more buttons of external login options.',
      table: {
        category: 'login',
      },
    },
  },
  args: {
    loginOptions: [
      {
        href: '#',
        text: 'Aanmelden met itsme',
      },
      {
        href: '#',
        text: 'Aanmelden met Google',
      },
    ],
  },
  render: (args: any) => {
    const renderLoginForm = html` <wink-input
        label="Login"
        type="text"
        name="login"
        is-required
        label-link-text="Vergeten?"
        label-href="#"></wink-input>
      <wink-spacer size="lg"></wink-spacer>
      <wink-input
        label="Wachtwoord"
        type="password"
        placeholder="Hoofdlettergevoelig"
        name="password"
        label-link-text="Vergeten?"
        label-href="#"
        is-required></wink-input>
      <wink-spacer size="lg"></wink-spacer>
      <wink-checkbox label="Aangemeld blijven" checked="true" name="example-1" id="example-01"></wink-checkbox>
      <wink-spacer size="lg"></wink-spacer>
      <wink-button
        text="Aanmelden"
        appearance="primary"
        size="md"
        width="full"
        icon-position="right"
        status="none"
        element="button"
        type="submit"></wink-button>
      <wink-spacer size="lg"></wink-spacer>
      <wink-paragraph size="small" appearance="body" class="font--body-regular">
        <wink-link appearance="default" size="inherit" href="#" icon="" is-disabled="false">
          Nog geen Login ? Maak er één aan.
        </wink-link>
      </wink-paragraph>`;

    const loginOptions = args.loginOptions.map(
      (item: { href: string; text: string }) => html`
        <wink-button
          text="${item.text}"
          appearance="secondary"
          size="md"
          width="full"
          icon-position="left"
          status="none"
          element="button"
          type="submit"></wink-button>
        <wink-spacer size="lg"></wink-spacer>
      `
    );

    return html`
      <wink-column-count cols-count="2">
        <div>${renderLoginForm}</div>
        <div>
          <wink-paragraph size="small" appearance="body" class="font--body-regular">Of doorgaan met...</wink-paragraph>
          <wink-spacer size="lg"></wink-spacer>
          ${loginOptions}
        </div>
      </wink-column-count>
    `;
  },
} as Meta;

export const Default = {};
