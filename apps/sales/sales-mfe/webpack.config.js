const { withModuleFederationPlugin, share } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'sales-mfe',
  exposes: {
    OneConfigurator: './apps/sales/sales-mfe/src/app/one-configurator/one-configurator.component.ts',
    HardwareCheckout: './apps/sales/sales-mfe/src/app/hardware-checkout/hardware-checkout.component.ts',
    ProductFinder: './apps/sales/sales-mfe/src/app/product-finder/product-finder.component.ts',
    ProductsDetailsSummaryComponent:
      './libs/sales/products-details/feat-products-details/src/lib/products-details-summary/products-details-summary.component.ts',
    ProductsDetailsOrderComponent:
      './libs/sales/products-details/feat-products-details/src/lib/products-details-order/products-details-order.component.ts',
    ProductsDetailsRowContainerComponent:
      './libs/sales/products-details/feat-products-details/src/lib/products-details-row-container/products-details-row-container.component.ts',
    SalesStepper: './libs/sales/shared/feature-sales-stepper/src/lib/components/sales-stepper.component.ts',
  },
  library: {
    type: 'module',
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
