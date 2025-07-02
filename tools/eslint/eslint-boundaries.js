module.exports = {
  rules: {
    '@nx/enforce-module-boundaries': [
      'error',
      {
        allow: [],
        depConstraints: [
          {
            sourceTag: 'type:e2e',
            onlyDependOnLibsWithTags: [
              'type:feature',
              'type:ui',
              'type:data-access',
              'type:api',
              'type:util',
              'type:model',
            ],
          },
          {
            sourceTag: 'type:app',
            onlyDependOnLibsWithTags: [
              'type:feature',
              'type:ui',
              'type:data-access',
              'type:api',
              'type:util',
              'type:model',
            ],
          },
          {
            sourceTag: 'type:feature',
            onlyDependOnLibsWithTags: [
              'type:feature',
              'type:api',
              'type:ui',
              'type:data-access',
              'type:util',
              'type:api',
              'type:model',
            ],
          },
          {
            sourceTag: 'type:ui',
            onlyDependOnLibsWithTags: [
              'type:ui',
              'type:data-access',
              'type:util',
              'type:wink',
              'type:model',
              'scope:page',
              'scope:datalayer',
            ],
          },
          {
            sourceTag: 'type:data-access',
            onlyDependOnLibsWithTags: ['type:data-access', 'type:util', 'type:api', 'type:model'],
          },
          {
            sourceTag: 'type:util',
            onlyDependOnLibsWithTags: ['type:util', 'type:model', 'scope:config'],
          },
          {
            sourceTag: 'type:model',
            onlyDependOnLibsWithTags: [],
          },
          {
            sourceTag: 'scope:address-checker-mfe',
            onlyDependOnLibsWithTags: ['scope:address-checker-mfe', 'type:api', 'type:wink'],
          },
          {
            sourceTag: 'scope:product-mfe',
            onlyDependOnLibsWithTags: ['scope:product-mfe', 'type:api'],
          },
          {
            sourceTag: 'scope:care-service-cases-mfe',
            onlyDependOnLibsWithTags: ['scope:care-service-cases-mfe', 'type:api', 'scope:ionic-portal-mfe'],
          },
          {
            sourceTag: 'scope:demo-mfe',
            onlyDependOnLibsWithTags: ['scope:demo-mfe', 'type:api'],
          },
          {
            sourceTag: 'scope:fleet-mfe',
            onlyDependOnLibsWithTags: ['scope:fleet-mfe', 'type:api'],
          },
          {
            sourceTag: 'scope:general-mfe',
            onlyDependOnLibsWithTags: ['scope:general-mfe', 'type:api'],
          },
          {
            sourceTag: 'scope:marketing-mfe',
            onlyDependOnLibsWithTags: ['scope:marketing-mfe', 'type:api', 'type:wink'],
          },
          {
            sourceTag: 'scope:monorepo-storybook-mfe',
            onlyDependOnLibsWithTags: ['scope:monorepo-storybook-mfe', 'type:api'],
          },
          {
            sourceTag: 'scope:mybase-dashboard-mfe',
            onlyDependOnLibsWithTags: ['scope:mybase-dashboard-mfe', 'type:api'],
          },
          {
            sourceTag: 'scope:product-journey-mfe',
            onlyDependOnLibsWithTags: ['scope:product-journey-mfe', 'type:api'],
          },
          {
            sourceTag: 'scope:sales-mfe',
            onlyDependOnLibsWithTags: ['scope:sales-mfe', 'type:api'],
          },
          {
            sourceTag: 'scope:return-devices-mfe',
            onlyDependOnLibsWithTags: ['scope:return-devices-mfe', 'type:api'],
          },
          {
            sourceTag: 'scope:customer-web-billing-payment-mfe',
            onlyDependOnLibsWithTags: [
              'scope:customer-web-billing-payment-mfe',
              'type:api',
              'scope:ionic-portal-mfe',
              'scope:customer-web-billing-shared',
              'type:wink',
            ],
          },
          {
            sourceTag: 'scope:customer-web-billing-limits-mfe',
            onlyDependOnLibsWithTags: [
              'scope:customer-web-billing-limits-mfe',
              'type:api',
              'scope:ionic-portal-mfe',
              'scope:customer-web-billing-shared',
              'type:wink',
            ],
          },
          {
            sourceTag: 'scope:customer-web-billing-barrings-mfe',
            onlyDependOnLibsWithTags: [
              'scope:customer-web-billing-barrings-mfe',
              'type:api',
              'scope:ionic-portal-mfe',
              'scope:customer-web-billing-shared',
              'type:wink',
            ],
          },
          {
            sourceTag: 'scope:customer-web-billing-invoice-mfe',
            onlyDependOnLibsWithTags: [
              'scope:customer-web-billing-invoice-mfe',
              'type:api',
              'scope:ionic-portal-mfe',
              'scope:customer-web-billing-shared',
              'type:wink',
            ],
          },
          {
            sourceTag: 'scope:entertainment-mfe',
            onlyDependOnLibsWithTags: ['scope:entertainment-mfe', 'type:api'],
          },
          {
            sourceTag: 'scope:sim-management-mfe',
            onlyDependOnLibsWithTags: ['scope:sim-management-mfe', 'type:api', 'type:wink'],
          },
          {
            sourceTag: 'scope:account',
            onlyDependOnLibsWithTags: [],
          },
          {
            sourceTag: 'scope:config',
            onlyDependOnLibsWithTags: ['scope:message', 'scope:shared'],
          },
          {
            sourceTag: 'scope:datalayer',
            onlyDependOnLibsWithTags: ['scope:message', 'scope:shared'],
          },
          {
            sourceTag: 'scope:form',
            onlyDependOnLibsWithTags: [
              'scope:config',
              'scope:datalayer',
              'scope:message',
              'scope:omapi',
              'scope:page',
              'scope:shared',
            ],
          },
          {
            sourceTag: 'scope:layout',
            onlyDependOnLibsWithTags: ['scope:form', 'scope:shared'],
          },
          {
            sourceTag: 'scope:message',
            onlyDependOnLibsWithTags: ['scope:shared'],
          },
          {
            sourceTag: 'scope:ocapi',
            onlyDependOnLibsWithTags: [
              'scope:config',
              'scope:datalayer',
              'scope:message',
              'scope:shared',
              'scope:page',
              'scope:omapi',
              'scope:omapi-query',
            ],
          },
          {
            sourceTag: 'scope:omapi',
            onlyDependOnLibsWithTags: [
              'scope:datalayer',
              'scope:message',
              'scope:config',
              'scope:shared',
              'scope:page',
            ],
          },
          {
            sourceTag: 'scope:omapi-query',
            onlyDependOnLibsWithTags: ['scope:message', 'scope:page', 'scope:config', 'scope:shared', 'scope:omapi'],
          },
          {
            sourceTag: 'scope:page',
            onlyDependOnLibsWithTags: ['scope:datalayer', 'scope:shared'],
          },
          {
            sourceTag: 'scope:personalisation',
            onlyDependOnLibsWithTags: ['scope:ocapi', 'scope:datalayer', 'scope:page', 'scope:shared', 'scope:config'],
          },
          {
            sourceTag: 'scope:shared',
            onlyDependOnLibsWithTags: ['scope:shared'],
          },
          {
            sourceTag: 'scope:sofy',
            onlyDependOnLibsWithTags: ['scope:message', 'scope:shared', 'scope:omapi', 'scope:config', 'scope:page'],
          },
          {
            sourceTag: 'scope:step-flow',
            onlyDependOnLibsWithTags: [
              'scope:datalayer',
              'scope:page',
              'scope:omapi',
              'scope:message',
              'scope:config',
              'scope:shared',
              'scope:form',
            ],
          },
          {
            sourceTag: 'scope:topup-mfe',
            onlyDependOnLibsWithTags: ['scope:topup-mfe', 'type:api'],
          },
          {
            sourceTag: 'scope:telenet-customerzone-dashboard-mfe',
            onlyDependOnLibsWithTags: ['scope:telenet-customerzone-dashboard-mfe', 'type:api'],
          },
          {
            sourceTag: 'scope:home-network-mfe',
            onlyDependOnLibsWithTags: ['scope:home-network-mfe', 'type:api'],
          },
        ],
        enforceBuildableLibDependency: true,
      },
    ],
  },
};
