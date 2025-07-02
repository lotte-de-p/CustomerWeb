import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { MockProductConfiguratorComponent } from './mock-product-configurator.component';
import { TgTelenetTestingModule } from '@telenet/ng-lib-shared';
import {
  OmapiFamily,
  omapiFamilyFactory,
  omapiFamilyOptinFactory,
  OmapiFamilyService,
  omapiFamilyTierFactory,
  omapiProductInfoFactory,
  OmapiProductTestfactory,
} from '@telenet/ng-lib-omapi';
import { Observable, of } from 'rxjs';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { importProvidersFrom } from '@angular/core';

const omapiFamilyServiceMock = {
  getFamily: (): Observable<OmapiFamily> =>
    of(
      omapiFamilyFactory.build({
        tiers: [
          omapiFamilyTierFactory.build({
            key: 'ONE',
            omapiId: 'C5FA0001',
            entertainment: [
              omapiProductInfoFactory.build({ omapiId: 'TEOS0001' }),
              omapiProductInfoFactory.build({ omapiId: 'OTT0000' }),
            ],
            mobile: [
              omapiProductInfoFactory.build({
                omapiId: 'C5FA0001',
                productInfo: OmapiProductTestfactory.build({
                  productConstituents: [
                    {
                      type: 'mobile_line',
                      maxCount: '1',
                    },
                  ],
                }),
              }),
            ],
            optins: [
              omapiFamilyOptinFactory.build({ omapiId: 'MBLN0002' }),
              omapiFamilyOptinFactory.build({ omapiId: 'FLIN0001' }),
            ],
            options: [omapiFamilyOptinFactory.build({ omapiId: 'BERU0001' })],
          }),
          omapiFamilyTierFactory.build({
            key: 'ONEup',
            omapiId: 'C5FU0001',
            entertainment: [
              omapiProductInfoFactory.build({ omapiId: 'TEOS0001' }),
              omapiProductInfoFactory.build({ omapiId: 'OTT0000' }),
            ],
            mobile: [
              omapiProductInfoFactory.build({
                omapiId: 'C5FU0001',
                productInfo: OmapiProductTestfactory.build({
                  productConstituents: [
                    {
                      type: 'mobile_line',
                      maxCount: '1',
                    },
                  ],
                }),
              }),
              omapiProductInfoFactory.build({
                omapiId: 'C5FU0002',
                productInfo: OmapiProductTestfactory.build({
                  productConstituents: [
                    {
                      type: 'mobile_line',
                      maxCount: '2',
                    },
                  ],
                }),
              }),
              omapiProductInfoFactory.build({
                omapiId: 'C5FU0003',
                productInfo: OmapiProductTestfactory.build({
                  productConstituents: [
                    {
                      type: 'mobile_line',
                      maxCount: '3',
                    },
                    {
                      type: 'mobile_line',
                      maxCount: '1',
                    },
                  ],
                }),
              }),
            ],
            optins: [
              omapiFamilyOptinFactory.build({ omapiId: 'MBLN0002' }),
              omapiFamilyOptinFactory.build({ omapiId: 'FLIN0001' }),
            ],
            options: [omapiFamilyOptinFactory.build({ omapiId: 'BERU0001' })],
          }),
          omapiFamilyTierFactory.build({
            key: 'Limited Internet',
            omapiId: 'KLIK001',
            entertainment: [omapiProductInfoFactory.build({ omapiId: 'TEOS0101' })],
            mobile: [
              omapiProductInfoFactory.build({
                omapiId: 'BUND112',
                productInfo: OmapiProductTestfactory.build({
                  productConstituents: [
                    {
                      type: 'mobile_line',
                      maxCount: '1',
                    },
                  ],
                }),
              }),
              omapiProductInfoFactory.build({
                omapiId: 'KLIK001',
                productInfo: OmapiProductTestfactory.build({
                  productConstituents: [
                    {
                      type: 'mobile_line',
                      maxCount: '2',
                    },
                  ],
                }),
              }),
              omapiProductInfoFactory.build({
                omapiId: 'KLIK002',
                productInfo: OmapiProductTestfactory.build({
                  productConstituents: [
                    {
                      type: 'mobile_line',
                      maxCount: '3',
                    },
                    {
                      type: 'mobile_line',
                      maxCount: '1',
                    },
                  ],
                }),
              }),
            ],
            optins: [
              omapiFamilyOptinFactory.build({ omapiId: 'MBLN0002' }),
              omapiFamilyOptinFactory.build({ omapiId: 'FLIN0001' }),
            ],
            options: [omapiFamilyOptinFactory.build({ omapiId: 'BERU0001' })],
          }),
        ],
      })
    ),
};
export default {
  title: 'Mock/MockProductConfiguratorComponent',
  component: MockProductConfiguratorComponent,
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
} as Meta<MockProductConfiguratorComponent>;

type Story = StoryObj<MockProductConfiguratorComponent>;
export const Primary: Story = {
  args: {
    title: 'Configure Product as per your choice',
    salesUrl: 'http://www.int.telenet.be/residential/en/sales.html',
  },
};
