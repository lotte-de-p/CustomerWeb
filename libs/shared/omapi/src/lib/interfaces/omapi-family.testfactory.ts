import * as Factory from 'factory.ts';
import {
  OmapiFamily,
  OmapiFamilyOptin,
  OmapiFamilyOption,
  OmapiFamilyTier,
  OmapiMobileData,
  OmapiProductInfo,
} from './omapi-family.interface';
import { OmapiProductTestfactory } from '../models/omapi-product.testfactory';

export const omapiMobileDataFactory = Factory.Sync.makeFactory<OmapiMobileData>({
  omapiId: '456',
  productInfo: OmapiProductTestfactory.build(),
  key: 'limited',
});

export const omapiProductInfoFactory = Factory.Sync.makeFactory<OmapiProductInfo>({
  omapiId: '456',
  productInfo: OmapiProductTestfactory.build(),
  mobileData: [],
});

export const omapiFamilyOptinFactory = Factory.Sync.makeFactory<OmapiFamilyOptin>({
  key: 'fixed_telephony',
  omapiId: '37785',
  mobileId: '36860',
});

export const omapiFamilyOptionFactory = Factory.Sync.makeFactory<OmapiFamilyOption>({
  type: 'mobile',
  key: 'international_calling',
  omapiId: 'BERU0001',
  productInfo: OmapiProductTestfactory.build(),
  parents: [],
});

export const omapiFamilyTierFactory = Factory.Sync.makeFactory<OmapiFamilyTier>({
  key: 'name',
  omapiId: '123',
  productInfo: OmapiProductTestfactory.build(),
  mobile: [omapiProductInfoFactory.build({ omapiId: '567' }), omapiProductInfoFactory.build({ omapiId: '568' })],
  entertainment: [omapiProductInfoFactory.build({ omapiId: '789' }), omapiProductInfoFactory.build({ omapiId: '780' })],
  fixedTelephony: [omapiProductInfoFactory.build({ omapiId: '121' })],
  optins: [omapiFamilyOptinFactory.build()],
  options: [omapiFamilyOptionFactory.build()],
});

export const omapiFamilyFactory = Factory.Sync.makeFactory<OmapiFamily>({
  tiers: [omapiFamilyTierFactory.build()],
});

const KLIK_2_LIM = 'm-klik-2-lim';
const ENTERTAINMENT_1 = 'entertainment-id-1';
export const omapiKlikFamily = () => {
  return omapiFamilyFactory.build({
    tiers: [
      omapiFamilyTierFactory.build({
        key: 'klik',
        omapiId: KLIK_2_LIM,
        entertainment: [omapiProductInfoFactory.build({ omapiId: ENTERTAINMENT_1 })],
        mobile: [
          omapiProductInfoFactory.build({
            omapiId: 'm-klik-1-lim',
            productInfo: OmapiProductTestfactory.build({ characteristics: { maxMobileLines: 1 } }),
            mobileData: [
              { omapiId: 'm-klik-1-lim', key: 'limited' } as OmapiMobileData,
              { omapiId: 'm-klik-1-unl', key: 'unlimited' } as OmapiMobileData,
            ],
          }),
          omapiProductInfoFactory.build({
            omapiId: KLIK_2_LIM,
            productInfo: OmapiProductTestfactory.build({ characteristics: { maxMobileLines: 1 } }),
            mobileData: [
              { omapiId: KLIK_2_LIM, key: 'limited' } as OmapiMobileData,
              { omapiId: 'm-klik-2-unl', key: 'unlimited' } as OmapiMobileData,
            ],
          }),
        ],
        optins: [],
      }),
    ],
  });
};

const THRILL_1 = 'm-thrill-1';
const THRILL_2 = 'm-thrill-2';
const THRILL_3 = 'm-thrill-3';
export const omapiConnectFiveFamily = () => {
  return omapiFamilyFactory.build({
    tiers: [
      omapiFamilyTierFactory.build({
        key: 'chill',
        omapiId: 'm-chill-1',
        entertainment: [
          omapiProductInfoFactory.build({ omapiId: ENTERTAINMENT_1 }),
          omapiProductInfoFactory.build({ omapiId: 'entertainment-id-2' }),
        ],
        mobile: [
          omapiProductInfoFactory.build({
            omapiId: 'm-chill-1',
            productInfo: OmapiProductTestfactory.build({ characteristics: { maxMobileLines: 1 } }),
          }),
          omapiProductInfoFactory.build({
            omapiId: 'm-chill-2',
            productInfo: OmapiProductTestfactory.build({ characteristics: { maxMobileLines: 2 } }),
          }),
          omapiProductInfoFactory.build({
            omapiId: 'm-chill-3',
            productInfo: OmapiProductTestfactory.build({ characteristics: { maxMobileLines: 3 } }),
          }),
        ],
        optins: [
          omapiFamilyOptinFactory.build({
            key: 'fixed_telephony',
            omapiId: 'o-chill-1-ft',
            mobileId: 'm-chill-1',
          }),
          omapiFamilyOptinFactory.build({
            key: 'fixed_telephony',
            omapiId: 'o-chill-2-ft',
            mobileId: 'm-chill-2',
          }),
          omapiFamilyOptinFactory.build({
            key: 'fixed_telephony',
            omapiId: 'o-chill-3-ft',
            mobileId: 'm-chill-3',
          }),
          omapiFamilyOptinFactory.build({
            key: 'data_sim',
            omapiId: 'o-chill-1-ds',
            mobileId: 'm-chill-1',
          }),
          omapiFamilyOptinFactory.build({
            key: 'data_sim',
            omapiId: 'o-chill-2-ds',
            mobileId: 'm-chill-2',
          }),
          omapiFamilyOptinFactory.build({
            key: 'data_sim',
            omapiId: 'o-chill-3-ds',
            mobileId: 'm-chill-3',
          }),
        ],
      }),
      omapiFamilyTierFactory.build({
        key: 'thrill',
        omapiId: THRILL_1,
        entertainment: [
          omapiProductInfoFactory.build({ omapiId: ENTERTAINMENT_1 }),
          omapiProductInfoFactory.build({ omapiId: 'entertainment-id-2' }),
        ],
        mobile: [
          omapiProductInfoFactory.build({
            omapiId: THRILL_1,
            productInfo: OmapiProductTestfactory.build({ characteristics: { maxMobileLines: 1 } }),
          }),
          omapiProductInfoFactory.build({
            omapiId: THRILL_2,
            productInfo: OmapiProductTestfactory.build({ characteristics: { maxMobileLines: 2 } }),
          }),
          omapiProductInfoFactory.build({
            omapiId: THRILL_3,
            productInfo: OmapiProductTestfactory.build({ characteristics: { maxMobileLines: 3 } }),
          }),
        ],
        optins: [
          omapiFamilyOptinFactory.build({
            key: 'fixed_telephony',
            omapiId: 'o-thrill-1-ft',
            mobileId: THRILL_1,
          }),
          omapiFamilyOptinFactory.build({
            key: 'fixed_telephony',
            omapiId: 'o-thrill-2-ft',
            mobileId: THRILL_2,
          }),
          omapiFamilyOptinFactory.build({
            key: 'fixed_telephony',
            omapiId: 'o-thrill-3-ft',
            mobileId: THRILL_3,
          }),
          omapiFamilyOptinFactory.build({
            key: 'data_sim',
            omapiId: 'o-thrill-1-ds',
            mobileId: THRILL_1,
          }),
          omapiFamilyOptinFactory.build({
            key: 'data_sim',
            omapiId: 'o-thrill-2-ds',
            mobileId: THRILL_2,
          }),
          omapiFamilyOptinFactory.build({
            key: 'data_sim',
            omapiId: 'o-thrill-3-ds',
            mobileId: THRILL_3,
          }),
        ],
      }),
    ],
  });
};

export const omapiConnectFiveNcFamily = () => {
  return omapiFamilyFactory.build({
    tiers: [
      omapiFamilyTierFactory.build({
        key: 'ONE',
        omapiId: 'C5FA0006',
        entertainment: [
          omapiProductInfoFactory.build({ omapiId: 'TEOS0001' }),
          omapiProductInfoFactory.build({ omapiId: 'OTTV0000' }),
        ],
        mobile: [
          omapiProductInfoFactory.build({
            omapiId: 'C5FA0006',
            productInfo: OmapiProductTestfactory.build({ characteristics: { maxMobileLines: '1' } }),
          }),
          omapiProductInfoFactory.build({
            omapiId: 'C5FA0007',
            productInfo: OmapiProductTestfactory.build({ characteristics: { maxMobileLines: '2' } }),
          }),
          omapiProductInfoFactory.build({
            omapiId: 'C5FA0008',
            productInfo: OmapiProductTestfactory.build({ characteristics: { maxMobileLines: '3' } }),
          }),
          omapiProductInfoFactory.build({
            omapiId: 'C5FA0009',
            productInfo: OmapiProductTestfactory.build({ characteristics: { maxMobileLines: '4' } }),
          }),
          omapiProductInfoFactory.build({
            omapiId: 'C5FA0010',
            productInfo: OmapiProductTestfactory.build({ characteristics: { maxMobileLines: '5' } }),
          }),
        ],
        optins: [
          omapiFamilyOptinFactory.build({
            key: 'fixed_telephony',
            omapiId: 'FLIN0001',
            mobileId: 'C5FA0006',
          }),
          omapiFamilyOptinFactory.build({
            key: 'fixed_telephony',
            omapiId: 'FLIN0001',
            mobileId: 'C5FA0007',
          }),
          omapiFamilyOptinFactory.build({
            key: 'fixed_telephony',
            omapiId: 'FLIN0001',
            mobileId: 'C5FA0008',
          }),
          omapiFamilyOptinFactory.build({
            key: 'fixed_telephony',
            omapiId: 'FLIN0001',
            mobileId: 'C5FA0009',
          }),
          omapiFamilyOptinFactory.build({
            key: 'fixed_telephony',
            omapiId: 'FLIN0001',
            mobileId: 'C5FA0010',
          }),
          omapiFamilyOptinFactory.build({
            key: 'data_sim',
            omapiId: 'MBLN0002',
            mobileId: 'C5FA0006',
          }),
          omapiFamilyOptinFactory.build({
            key: 'data_sim',
            omapiId: 'MBLN0002',
            mobileId: 'C5FA0007',
          }),
          omapiFamilyOptinFactory.build({
            key: 'data_sim',
            omapiId: 'MBLN0002',
            mobileId: 'C5FA0008',
          }),
          omapiFamilyOptinFactory.build({
            key: 'data_sim',
            omapiId: 'MBLN0002',
            mobileId: 'C5FA0009',
          }),
          omapiFamilyOptinFactory.build({
            key: 'data_sim',
            omapiId: 'MBLN0002',
            mobileId: 'C5FA0010',
          }),
        ],
      }),
      omapiFamilyTierFactory.build({
        key: 'ONEup',
        omapiId: 'C5FU0006',
        entertainment: [
          omapiProductInfoFactory.build({ omapiId: 'TEOS0001' }),
          omapiProductInfoFactory.build({ omapiId: 'OTTV0000' }),
        ],
        mobile: [
          omapiProductInfoFactory.build({
            omapiId: 'C5FU0006',
            productInfo: OmapiProductTestfactory.build({ characteristics: { maxMobileLines: '1' } }),
          }),
          omapiProductInfoFactory.build({
            omapiId: 'C5FU0007',
            productInfo: OmapiProductTestfactory.build({ characteristics: { maxMobileLines: '2' } }),
          }),
          omapiProductInfoFactory.build({
            omapiId: 'C5FU0008',
            productInfo: OmapiProductTestfactory.build({ characteristics: { maxMobileLines: '3' } }),
          }),
          omapiProductInfoFactory.build({
            omapiId: 'C5FU0009',
            productInfo: OmapiProductTestfactory.build({ characteristics: { maxMobileLines: '4' } }),
          }),
          omapiProductInfoFactory.build({
            omapiId: 'C5FU0010',
            productInfo: OmapiProductTestfactory.build({ characteristics: { maxMobileLines: '5' } }),
          }),
        ],
        optins: [
          omapiFamilyOptinFactory.build({
            key: 'fixed_telephony',
            omapiId: 'FLIN0001',
            mobileId: 'C5FU0006',
          }),
          omapiFamilyOptinFactory.build({
            key: 'fixed_telephony',
            omapiId: 'FLIN0001',
            mobileId: 'C5FU0007',
          }),
          omapiFamilyOptinFactory.build({
            key: 'fixed_telephony',
            omapiId: 'FLIN0001',
            mobileId: 'C5FU0008',
          }),
          omapiFamilyOptinFactory.build({
            key: 'fixed_telephony',
            omapiId: 'FLIN0001',
            mobileId: 'C5FU0009',
          }),
          omapiFamilyOptinFactory.build({
            key: 'fixed_telephony',
            omapiId: 'FLIN0001',
            mobileId: 'C5FU0010',
          }),
          omapiFamilyOptinFactory.build({
            key: 'data_sim',
            omapiId: 'MBLN0002',
            mobileId: 'C5FU0006',
          }),
          omapiFamilyOptinFactory.build({
            key: 'data_sim',
            omapiId: 'MBLN0002',
            mobileId: 'C5FU0007',
          }),
          omapiFamilyOptinFactory.build({
            key: 'data_sim',
            omapiId: 'MBLN0002',
            mobileId: 'C5FU0008',
          }),
          omapiFamilyOptinFactory.build({
            key: 'data_sim',
            omapiId: 'MBLN0002',
            mobileId: 'C5FU0009',
          }),
          omapiFamilyOptinFactory.build({
            key: 'data_sim',
            omapiId: 'MBLN0002',
            mobileId: 'C5FU0010',
          }),
        ],
      }),
    ],
  });
};
