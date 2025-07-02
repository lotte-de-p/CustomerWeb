const rootMain = require('../../../../.storybook/main.js');

const config = {
  ...rootMain,
  core: { ...rootMain.core, builder: 'webpack5' },
  stories: [
    '../../../../libs/**/*.stories.mdx',
    '../../../../libs/foundation/!(wink)/**/*.stories.@(js|jsx|ts|tsx)',
    '../../monorepo-storybook/src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [...rootMain.addons],
  staticDirs: [{ from: '../../../../node_modules/atomic-library/public', to: '/assets' }],
  refs: {
    'account/discount-mfe': {
      title: 'Account - Discount MFE: Storybook',
      url: 'https://customer-web-account-discount.aem-modules-dev.awscloud.external.telenet.be/storybook/',
      expanded: false,
    },
    'account/entertainment-management-mfe': {
      title: 'Account - Entertainment Manager MFE: Storybook',
      url: 'https://customer-web-entertainment-manager-mfe.aem-modules-dev.awscloud.external.telenet.be/storybook/',
      expanded: false,
    },
    'account/product-mfe': {
      title: 'Account Product MFE: Storybook',
      url: 'https://customer-web-account-product.aem-modules-dev.awscloud.external.telenet.be/storybook/',
      expanded: false,
    },
    'activate/address-checker-mfe': {
      title: 'Activate - Address Checker MFE: Storybook',
      url: 'https://customer-web-address-checker.aem-modules-dev.awscloud.external.telenet.be/storybook/',
      expanded: false,
    },
    'activate/entertainment-mfe': {
      title: 'Activate - Entertainment MFE: Storybook',
      url: 'https://customer-web-activate-entertainment-mfe.aem-modules-dev.awscloud.external.telenet.be/storybook/',
      expanded: false,
    },
    'activate/sim-management-mfe': {
      title: 'Activate - Sim management MFE: Storybook',
      url: 'https://customer-web-activate-sim-management-mfe.aem-modules-dev.awscloud.external.telenet.be/storybook/',
      expanded: false,
    },
    'base-customerzone/dashboard-mfe': {
      title: 'Base Customerzone - Dashboard MFE: Storybook',
      url: 'https://customer-web-base-customerzone-dashboard.aem-modules-dev.awscloud.external.telenet.be/storybook/',
      expanded: false,
    },
    'billing/barrings-mfe': {
      title: 'Billing - Barrings MFE: Storybook',
      url: 'https://customer-web-billing-barrings.aem-modules-dev.awscloud.external.telenet.be/storybook/',
      expanded: false,
    },
    'billing/invoice-mfe': {
      title: 'Billing - Invoice MFE: Storybook',
      url: 'https://customer-web-billing-invoice.aem-modules-dev.awscloud.external.telenet.be/storybook/',
      expanded: false,
    },
    'billing/limits-mfe': {
      title: 'Billing - Limits MFE: Storybook',
      url: 'https://customer-web-billing-limits.aem-modules-dev.awscloud.external.telenet.be/storybook/',
      expanded: false,
    },
    'billing/payment-mfe': {
      title: 'Billing - Payment MFE: Storybook',
      url: 'https://customer-web-billing-payment.aem-modules-dev.awscloud.external.telenet.be/storybook/',
      expanded: false,
    },
    'engagement/care-service-cases-mfe': {
      title: 'Engagement - Care Service Cases MFE: Storybook',
      url: 'https://care-service-cases.aem-modules-dev.awscloud.external.telenet.be/storybook/',
      expanded: false,
    },
    'engagement/inbox-messages-mfe': {
      title: 'Engagement - Inbox Messages MFE: Storybook',
      url: 'https://inbox-messages.aem-modules-dev.awscloud.external.telenet.be/storybook/',
      expanded: false,
    },
    'engagement/profile-management-mfe': {
      title: 'Engagement - Profile management MFE: Storybook',
      url: 'https://customer-web-engagement-profile-management.aem-modules-dev.awscloud.external.telenet.be/storybook/',
      expanded: false,
    },
    'foundation/general-mfe': {
      title: 'Foundation - General MFE: Storybook',
      url: 'https://general.aem-modules-dev.awscloud.external.telenet.be/storybook/',
      expanded: false,
    },
    'install/product-journey-mfe': {
      title: 'Install - Product Journey MFE: Storybook',
      url: 'https://product-journey.aem-modules-dev.awscloud.external.telenet.be/storybook/',
      expanded: false,
    },
    'install/return-devices-mfe': {
      title: 'Install - Return Devices MFE: Storybook',
      url: 'https://return-devices.aem-modules-dev.awscloud.external.telenet.be/storybook/',
      expanded: false,
    },
    'marketing-mfe': {
      title: 'Marketing MFE: Storybook',
      url: 'https://marketing.aem-modules-dev.awscloud.external.telenet.be/storybook/',
      expanded: false,
    },
    'sales-mfe': {
      title: 'Sales MFE: Storybook',
      url: 'https://sales.aem-modules-dev.awscloud.external.telenet.be/storybook/',
      expanded: false,
    },
    wink: {
      title: 'Wink: Storybook',
      url: 'https://customer-web-foundation-wink.aem-modules-dev.awscloud.external.telenet.be/',
      expanded: false,
    },
  },
  // @ts-ignore
  webpackFinal: async (config, { configType }) => {
    // apply any global webpack configs that might have been specified in .storybook/main.ts
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType });
    }

    // add your own webpack tweaks if needed

    return config;
  },
};

module.exports = config;
