import { html } from "lit-html";
import { BADGES } from "../../../models/badges.types";
export default {
    title: 'PATTERNS/Login',
    component: 'Login',
    parameters: {
        badges: [BADGES.inProgress],
    },
    argTypes: {},
    args: {
        loginOptions: [
            {
                name: 'itsme',
                href: '#',
                img: 'logo-itsme.svg',
            },
            {
                name: 'Google',
                href: '#',
                img: 'logo-google.svg',
            },
        ],
    },
    render: (args) => {
        const renderLoginForm = html ` <wink-input label="Login" type="text" name="login" is-required></wink-input>
      <wink-spacer size="lg"></wink-spacer>
      <wink-input
        label="Password"
        type="password"
        placeholder="Case-sensitive"
        name="password"
        is-required></wink-input>
      <wink-spacer size="lg"></wink-spacer>
      <wink-check-box
        label="Checkbox 1"
        checked="true"
        helper="Dit is een helper tekst"
        name="example-1"
        id="example-01"></wink-check-box>
      <wink-spacer size="lg"></wink-spacer>
      <wink-button
        text="Sign in"
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
          Don't have a login yet? Create one.
        </wink-link>
      </wink-paragraph>`;
        const loginOptions = args.loginOptions.map((item) => html `
        <wink-button
          text="Login with ${item.name}"
          appearance="secondary"
          size="md"
          width="full"
          icon-position="left"
          status="none"
          element="button"
          type="submit"></wink-button>
        <wink-spacer size="lg"></wink-spacer>
      `);
        return html `
      <wink-column-count cols-count="2">
        <div>${renderLoginForm}</div>
        <div>
          <wink-paragraph size="small" appearance="body" class="font--body-regular">Or continue with...</wink-paragraph>
          <wink-spacer size="lg"></wink-spacer>
          ${loginOptions}
        </div>
      </wink-column-count>
    `;
    },
};
export const Default = {};
//# sourceMappingURL=login.stories.js.map
