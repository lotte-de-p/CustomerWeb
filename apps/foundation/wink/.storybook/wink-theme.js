import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  // Typography

  brandTitle: 'Wink',
  brandImage:
    'https://customer-web-foundation-wink-cdn.aem-modules-dev.awscloud.external.telenet.be/v1.3.0/assets/shared/logos/logo-wink.svg',
  brandTarget: '_self',

  //
  colorPrimary: '#ffc421',
  colorSecondary: '#291d18',

  // UI
  appBg: '#f7f6f6',
  // Text colors
  textColor: '#291d18',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#291d18',
  barSelectedColor: '#291d18',
  barBg: '#fff7c7',

  // Form colors
  inputBg: '#f7f6f6',
  inputBorder: '#ffc421',
  inputTextColor: '#291d18',
  inputBorderRadius: 8,
});
