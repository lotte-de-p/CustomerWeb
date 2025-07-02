import * as Factory from 'factory.ts';
import {
  KlikMobileData,
  KlikOmapiFamily,
  KlikOmapiFamilyOptIn,
  KlikOmapiFamilyOption,
  KlikOmapiFamilyProduct,
  KlikOmapiFamilyTier,
  KlikOmapiProduct,
  OmapiProductTestfactory,
} from '@telenet/ng-lib-omapi';

export const klikOmapiMobileDataFactory = Factory.Sync.makeFactory<KlikMobileData>({
  omapiId: 'KLIK0001',
  productInfo: OmapiProductTestfactory.build(),
  key: 'limited',
});

export const omapiProductInfoFactory = Factory.Sync.makeFactory<KlikOmapiProduct>({
  omapiId: 'KLIK0001',
  productInfo: OmapiProductTestfactory.build(),
  mobileData: [],
});

export const omapiFamilyOptionFactory = Factory.Sync.makeFactory<KlikOmapiFamilyOptIn>({
  key: 'international_calling',
  tiers: [],
});

export const klikOmapiTierFactory = Factory.Sync.makeFactory<KlikOmapiFamilyTier>({
  omapiId: 'KLIK0001',
  key: 'klik',
  productInfo: OmapiProductTestfactory.build({
    productType: 'BUNDLE',
    productConstituents: [
      {
        type: 'mobile_line',
        maxCount: '1',
      },
    ],
  }),
});

export const klikOmapiProductFactory = Factory.Sync.makeFactory<KlikOmapiFamilyProduct>({
  type: 'mobile',
  tiers: [
    {
      key: 'klik',
      products: [
        {
          omapiId: 'KLIK0001',
          mobileData: [
            {
              key: 'limited',
              omapiId: 'KLIK0001',
              productInfo: OmapiProductTestfactory.build({
                productConstituents: [
                  {
                    type: 'mobile_line',
                    maxCount: '1',
                  },
                ],
              }),
            },
            {
              key: 'unlimited',
              omapiId: 'KLIK0005',
              productInfo: OmapiProductTestfactory.build({
                productConstituents: [
                  {
                    type: 'mobile_line',
                    maxCount: '1',
                  },
                ],
              }),
            },
          ],
        },
      ],
    },
  ],
});

export const klikOmapiOptinsFactory = Factory.Sync.makeFactory<KlikOmapiFamilyOptIn>({
  key: 'speedboost',
  tiers: [
    {
      key: 'klik',
      pax: [
        {
          omapiId: 'KLIK0001',
          optinId: 'IOPT0205',
          productInfo: OmapiProductTestfactory.build({
            name: 'Speedboost 1G Business',
            productId: 'IOPT0205',
            productType: 'OPTION',
          }),
        },
      ],
    },
  ],
});

export const klikOmapiOptionsFactory = Factory.Sync.makeFactory<KlikOmapiFamilyOption>({
  type: 'entertainment',
  key: 'be_tv',
  omapiId: 'TVPK1005',
  productInfo: OmapiProductTestfactory.build({
    name: 'Be tv',
    productId: 'TVPK1005',
    productType: 'OPTION',
  }),
});

export const klikOmapiFamilyTierFactory = Factory.Sync.makeFactory<KlikOmapiFamily>({
  tiers: [klikOmapiTierFactory.build()],
  products: [klikOmapiProductFactory.build()],
  optins: [klikOmapiOptinsFactory.build()],
  options: [klikOmapiOptionsFactory.build()],
});

export const klikFamilyBUND112MobileDataFactory = Factory.Sync.makeFactory<KlikOmapiFamily>({
  tiers: [
    {
      omapiId: 'BUNDLE112',
      key: 'klik',
      productInfo: OmapiProductTestfactory.build({
        productType: 'BUNDLE',
        productConstituents: [
          {
            type: 'mobile_line',
            maxCount: '1',
          },
        ],
      }),
    },
  ],
  products: [
    klikOmapiProductFactory.build({
      type: 'mobile',
      tiers: [
        {
          key: 'klik',
          products: [
            {
              omapiId: 'TEOS0101',
              mobileData: [{ omapiId: 'BUND112' }],
            },
          ],
        },
      ],
    }),
  ],
  optins: [klikOmapiOptinsFactory.build()],
  options: [klikOmapiOptionsFactory.build()],
});

export const klikFamilyEntertainmentWithoutTiersFactory = Factory.Sync.makeFactory<KlikOmapiFamily>({
  tiers: [
    {
      omapiId: 'BUNDLE112',
      key: 'klik',
      productInfo: OmapiProductTestfactory.build({
        productType: 'BUNDLE',
        productConstituents: [
          {
            type: 'mobile_line',
            maxCount: '1',
          },
        ],
      }),
    },
  ],
  products: [
    klikOmapiProductFactory.build({
      type: 'entertainment',
      tiers: undefined,
    }),
  ],
  optins: [klikOmapiOptinsFactory.build()],
  options: [klikOmapiOptionsFactory.build()],
});

export const klikFamilyEntertainmentWithoutTierProductsFactory = Factory.Sync.makeFactory<KlikOmapiFamily>({
  tiers: [
    {
      omapiId: 'BUNDLE112',
      key: 'klik',
      productInfo: OmapiProductTestfactory.build({
        productType: 'BUNDLE',
        productConstituents: [
          {
            type: 'mobile_line',
            maxCount: '1',
          },
        ],
      }),
    },
  ],
  products: [
    klikOmapiProductFactory.build({
      type: 'entertainment',
      tiers: [
        {
          key: 'klik',
        },
      ],
    }),
  ],
  optins: [klikOmapiOptinsFactory.build()],
  options: [klikOmapiOptionsFactory.build()],
});
export const klikFamilyEntertainmentFactory = Factory.Sync.makeFactory<KlikOmapiFamily>({
  tiers: [
    {
      omapiId: 'BUNDLE112',
      key: 'klik',
      productInfo: OmapiProductTestfactory.build({
        productType: 'BUNDLE',
        productConstituents: [
          {
            type: 'mobile_line',
            maxCount: '1',
          },
        ],
      }),
    },
  ],
  products: [
    klikOmapiProductFactory.build({
      type: 'entertainment',
      tiers: [
        {
          key: 'klik',
          products: [
            {
              omapiId: 'TEOS0101',
              mobileData: [{ omapiId: 'KLIK' }],
            },
          ],
        },
      ],
    }),
  ],
  optins: [klikOmapiOptinsFactory.build()],
  options: [klikOmapiOptionsFactory.build()],
});
export const klikFamilyWithoutProductInfoFactory = Factory.Sync.makeFactory<KlikOmapiFamily>({
  tiers: [
    {
      omapiId: 'BUNDLE112',
      key: 'klik',
      productInfo: OmapiProductTestfactory.build({
        productType: 'BUNDLE',
        productConstituents: [
          {
            type: 'mobile_line',
            maxCount: '1',
          },
        ],
      }),
    },
  ],
  products: [
    klikOmapiProductFactory.build({
      type: 'mobile',
      tiers: [
        {
          key: 'klik',
          products: [
            {
              omapiId: 'TEOS0101',
              mobileData: [{ omapiId: 'KLIK' }],
            },
          ],
        },
      ],
    }),
  ],
  optins: [klikOmapiOptinsFactory.build()],
  options: [klikOmapiOptionsFactory.build()],
});

export const klikFamilyBUND111MobileDataFactory = Factory.Sync.makeFactory<KlikOmapiFamily>({
  tiers: [
    {
      omapiId: 'BUNDLE112',
      key: 'klik',
      productInfo: OmapiProductTestfactory.build({
        productType: 'BUNDLE',
        productConstituents: [
          {
            type: 'mobile_line',
            maxCount: '1',
          },
        ],
      }),
    },
  ],
  products: [
    klikOmapiProductFactory.build({
      type: 'mobile',
      tiers: [
        {
          key: 'klik',
          products: [
            {
              omapiId: 'TEOS0101',
              mobileData: [{ omapiId: 'BUND111' }],
            },
          ],
        },
      ],
    }),
  ],
  optins: [klikOmapiOptinsFactory.build()],
  options: [klikOmapiOptionsFactory.build()],
});

export const klikFamilyWithoutMobileDataFactory = Factory.Sync.makeFactory<KlikOmapiFamily>({
  tiers: [
    {
      omapiId: 'BUNDLE112',
      key: 'klik',
      productInfo: OmapiProductTestfactory.build({
        productType: 'BUNDLE',
        productConstituents: [
          {
            type: 'mobile_line',
            maxCount: '1',
          },
        ],
      }),
    },
  ],
  products: [
    klikOmapiProductFactory.build({
      type: 'mobile',
      tiers: [
        {
          key: 'klik',
          products: [
            {
              omapiId: 'TEOS0101',
            },
          ],
        },
      ],
    }),
  ],
  optins: [klikOmapiOptinsFactory.build()],
  options: [klikOmapiOptionsFactory.build()],
});

export const klikFamilyNoMobileProductFactory = Factory.Sync.makeFactory<KlikOmapiFamily>({
  tiers: [
    {
      omapiId: 'KLIK0001',
      key: 'klik',
      productInfo: OmapiProductTestfactory.build({
        productType: 'BUNDLE',
        productConstituents: [
          {
            type: 'mobile_line',
            maxCount: '1',
          },
        ],
      }),
    },
  ],
  products: [
    klikOmapiProductFactory.build({
      type: 'entertainment',
      tiers: [
        {
          key: 'klik',
          products: [
            {
              omapiId: 'TEOS0101',
              mobileData: [],
            },
          ],
        },
      ],
    }),
    klikOmapiProductFactory.build({
      type: 'fixedTelephony',
      tiers: [
        {
          key: 'klik',
          products: [
            {
              omapiId: 'FLIN0101',
              mobileData: [],
            },
          ],
        },
      ],
    }),
  ],
  optins: [klikOmapiOptinsFactory.build()],
  options: [klikOmapiOptionsFactory.build()],
});
