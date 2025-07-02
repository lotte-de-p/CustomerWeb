const { withModuleFederationPlugin, share } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'care-service-cases-mfe',

  exposes: {
    './ServiceCaseOverview':
      './libs/engagement/care-service-cases/service-case/feat-service-case-overview/src/lib/service-cases-overview.component.ts',
    './ServiceCasesCard':
      './apps/engagement/care-service-cases-mfe/src/app/service-case/service-cases-card/service-cases-card.component.ts',
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
