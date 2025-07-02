const { withModuleFederationPlugin, share } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'mybase-dashboard-mfe',

  exposes: {
    './MyBaseDashboardModule': './apps/base-customerzone/dashboard-mfe/src/app/mybase-dashboard.module.ts',
    './MyBaseDashboard':
      './libs/base-customerzone/dashboard/feat-mybase-dashboard/src/lib/mybase-dashboard.component.ts',
    './MyBaseDashboardMobile':
      './libs/base-customerzone/dashboard/feat-mybase-dashboard-mobile/src/lib/mybase-dashboard-mobile.component.ts',
    './MyBaseDashboardInternet':
      './libs/base-customerzone/dashboard/feat-mybase-dashboard-internet/src/lib/mybase-dashboard-internet.component.ts',
    './MyBaseDashboardDtvComponent':
      './libs/base-customerzone/dashboard/feat-mybase-dashboard-dtv/src/lib/mybase-dashboard-dtv.component.ts',
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
