import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { KlikMockProductConfiguratorComponent } from './klik-mock-product-configurator.component';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';
import { KlikOmapiFamily, OmapiFamilyService, OmapiProductTestfactory } from '@telenet/ng-lib-omapi';
import { Observable, of } from 'rxjs';
import {
  klikOmapiFamilyTierFactory,
  klikOmapiOptinsFactory,
  klikOmapiOptionsFactory,
  klikOmapiProductFactory,
  klikOmapiTierFactory,
} from './klik-omapi-family.interface.testfactory';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { importProvidersFrom } from '@angular/core';

const omapiFamilyServiceMock = {
  getKlikFamily: (): Observable<KlikOmapiFamily> =>
    of(
      klikOmapiFamilyTierFactory.build({
        tiers: [klikOmapiTierFactory.build()],
        products: [
          klikOmapiProductFactory.build({
            type: 'mobile',
            tiers: [
              {
                key: 'klik',
                products: [
                  {
                    omapiId: 'KLIK0001',
                    mobileData: [
                      {
                        omapiId: 'KLIK0001',
                        key: 'limited',
                        productInfo: OmapiProductTestfactory.build({
                          productConstituents: [
                            {
                              type: 'mobile_line',
                              maxCount: '1',
                            },
                            {
                              type: 'internet_line',
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
                            {
                              type: 'internet_line',
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
          }),
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
      })
    ),
};

export default {
  title: 'Mock/KlikMockProductConfiguratorComponent',
  component: KlikMockProductConfiguratorComponent,
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(TgTranslateTestingModule.forRoot()),
        importProvidersFrom(TgTelenetTestingModule.forRoot()),
        {
          provide: OmapiFamilyService,
          useValue: omapiFamilyServiceMock,
        },
      ],
    }),
  ],
} as Meta<KlikMockProductConfiguratorComponent>;

type Story = StoryObj<KlikMockProductConfiguratorComponent>;

export const Primary: Story = {
  args: {
    title: '',
    salesUrl: '',
  },
};
