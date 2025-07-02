const { withModuleFederationPlugin, share } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'marketing-mfe',
  exposes: {
    Price: './/apps/marketing/marketing-mfe/src/app/cafe/pricing/ui/pricing/pricing.component.ts',
    WinkPrice: './/apps/marketing/marketing-mfe/src/app/cafe/wink-pricing/ui/pricing/wink-pricing.component.ts',
    PricedCustomerProductHolding:
      './/apps/marketing/marketing-mfe/src/app/cafe/priced-customer-product-holding/ui/priced-customer-product-holding/priced-customer-product-holding.component.ts',
    MockMarketing: './/apps/marketing/marketing-mfe/src/app/nc/mock/mock-marketing/mock-marketing.component.ts',
    MockProductConfigurator:
      './/apps/marketing/marketing-mfe/src/app/nc/mock/mock-product-configurator/mock-product-configurator.component.ts',
    KlikMockProductConfigurator:
      './/apps/marketing/marketing-mfe/src/app/nc/mock/klik-mock-product-configurator/klik-mock-product-configurator.component.ts',
    ProductSummary:
      './/apps/marketing/marketing-mfe/src/app/nc/mock/mock-marketing/partials/product-summary/product-summary.component.ts',
    Rates: './/libs/marketing/roaming-international/feat-rates/src/lib/rates/rates.component.ts',
    CountryList: './/libs/marketing/roaming-international/feat-rates/src/lib/country-list/country-list.component.ts',
  },

  shared: share({
    '@angular/core': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@angular/common': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@angular/common/http': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@angular/forms': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@angular/router': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@angular/material': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@angular/material-moment-adapter': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@ngx-translate/core': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@ngx-translate/http-loader': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@ngxs/store': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@ngrx/effects': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@ngrx/store': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@ngrx/store-devtools': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    'ngx-mask': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    rxjs: { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    udl: { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    'slick-carousel': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
  }),
});
