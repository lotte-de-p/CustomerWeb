const { withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');
const mf = require('@angular-architects/module-federation/webpack');

const share = mf.share;

/**
 * Each exposed module relates to a FederatedModuleDefinition as defined by MFE shell.
 */
module.exports = withModuleFederationPlugin({
  name: 'FleetMFE',

  exposes: {
    // Legacy module definitions (to be removed once standalone components are used on PRD)
    './FleetAccountModule': './/apps/fleet/fleet-mfe/src/app/fleet-account/fleet-account.module.ts',
    './FleetProductModule': './/apps/fleet/fleet-mfe/src/app/fleet-product/fleet-product.module.ts',
    './FleetProfileModule': './/apps/fleet/fleet-mfe//src/app/fleet-profile/fleet-profile.module.ts',
    './FleetSimCardModule': './/apps/fleet/fleet-mfe//src/app/fleet-sim-card/fleet-sim-card.module.ts',
    './FleetUserModule': './/apps/fleet/fleet-mfe/src/app/fleet-user/fleet-user.module.ts',

    // Account Module
    './BundleUsageReminders':
      './apps/fleet/fleet-mfe/src/app/fleet-account/bundle-usage-reminders/bundle-usage-reminders.component.ts',
    './ManageProfile': './apps/fleet/fleet-mfe/src/app/fleet-account/manage-profile/manage-profile.component.ts',

    // Product Module
    './ProductOverview': './apps/fleet/fleet-mfe/src/app/fleet-product/product-overview/product-overview.component.ts',
    './MsaContainer': './apps/fleet/fleet-mfe/src/app/fleet-profile/msa/msa.container.ts', // not yet used
    './FleetManagerLineProductDetails':
      './apps/fleet/fleet-mfe/src/app/fleet-product/line/line-product-details/fleet-manager-line-product-details.component.ts',
    './FleetManagerLineRemoveOptions':
      './apps/fleet/fleet-mfe/src/app/fleet-product/line/line-remove-options/fleet-manager-line-remove-options.component.ts',
    './FleetManagerLineChangeTariffPlan':
      './apps/fleet/fleet-mfe/src/app/fleet-product/line/line-change-tariff-plan/fleet-manager-line-change-tariff-plan.component.ts',
    './FleetManagerLineAddOptions':
      './apps/fleet/fleet-mfe/src/app/fleet-product/line/line-add-options/fleet-manager-line-add-options.component.ts',

    // Profile Module
    './LineIdentificationDetails':
      './apps/fleet/fleet-mfe/src/app/fleet-profile/line-identification-details/line-identification-details.component.ts',
    './LineAddressDetails':
      './apps/fleet/fleet-mfe/src/app/fleet-profile/line-address-details/line-address-details.component.ts', // not yet used
    // Sim Card Module
    './LineMoreDetails':
      './apps/fleet/fleet-mfe/src/app/fleet-sim-card/line-more-details/line-more-details.component.ts',
    './OrderHistory': './apps/fleet/fleet-mfe/src/app/fleet-sim-card/order-history/order-history.component.ts',
    './LineApnDetails': './apps/fleet/fleet-mfe/src/app/fleet-sim-card/line-apn-details/line-apn-details.component.ts',
    './LineNumber': './apps/fleet/fleet-mfe/src/app/fleet-sim-card/line-number/line-number.component.ts',
    './LineNavigationList':
      './apps/fleet/fleet-mfe/src/app/fleet-sim-card/line-navigation-list/line-navigation-list.component.ts',

    //User (portal) Module
    './FleetUserLineAddOptions':
      './apps/fleet/fleet-mfe/src/app/fleet-user/product/line-add-options/fleet-user-line-add-options.component.ts',
    './FleetUserLineRemoveOptions':
      './apps/fleet/fleet-mfe/src/app/fleet-user/product/line-remove-options/fleet-user-line-remove-options.component.ts',
    './FleetUserLineChangeTariffPlan':
      './apps/fleet/fleet-mfe/src/app/fleet-user/product/line-change-tariff-plan/fleet-user-line-change-tariff-plan.component.ts',
    './FleetUserProductOverview':
      './apps/fleet/fleet-mfe/src/app/fleet-user/product/product-overview/fleet-user-product-overview.component.ts',
    './FleetUserMobileUsageOverview':
      './apps/fleet/fleet-mfe/src/app/fleet-user/product/usage/mobile-usage-overview/fleet-user-mobile-usage-overview.component.ts',
    './FleetUserAccountSelector':
      './apps/fleet/fleet-mfe/src/app/fleet-user/profile/fleet-user-account-selector/fleet-user-account-selector.component.ts',
  },

  shared: share({
    '@angular/core': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@angular/common': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@angular/common/http': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@angular/router': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@ngx-translate/core': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    'ngx-mask': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@ngxs/store': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@ngrx/store-devtools': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    '@ngrx/store': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    '@ngrx/effects': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    '@angular/material': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@angular/material-moment-adapter': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@angular/forms': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
  }),
});
