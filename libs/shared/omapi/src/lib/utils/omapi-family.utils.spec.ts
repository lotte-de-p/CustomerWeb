import { OmapiFamilyUtils } from './omapi-family.utils';
import { OmapiProductTestfactory } from '../models/omapi-product.testfactory';
import {
  omapiFamilyFactory,
  omapiFamilyTierFactory,
  omapiProductInfoFactory,
} from '../interfaces/omapi-family.testfactory';
import { OmapiFamilyTierEnum } from '../constants/omapi-family.constants';

describe('omapiFamilyUtils', () => {
  describe('getFamilyTier', () => {
    const omapiFamily = omapiFamilyFactory.build({
      tiers: [
        omapiFamilyTierFactory.build({
          key: 'klik',
          omapiId: '45840',
          mobile: [
            omapiProductInfoFactory.build({
              omapiId: '45841',
              productInfo: OmapiProductTestfactory.build(),
            }),
          ],
        }),
        omapiFamilyTierFactory.build({
          key: 'fast',
          omapiId: '42797',
          mobile: [
            omapiProductInfoFactory.build({
              omapiId: '36860',
              productInfo: OmapiProductTestfactory.build(),
            }),
          ],
        }),
        omapiFamilyTierFactory.build({
          key: 'furious',
          omapiId: '42790',
          mobile: [
            omapiProductInfoFactory.build({
              omapiId: '36861',
              productInfo: OmapiProductTestfactory.build(),
            }),
          ],
        }),
        omapiFamilyTierFactory.build({
          key: 'ONE',
          omapiId: 'C5FA0001',
          mobile: [
            omapiProductInfoFactory.build({
              omapiId: 'C5FA0001',
              productInfo: OmapiProductTestfactory.build(),
            }),
          ],
        }),
        omapiFamilyTierFactory.build({
          key: 'ONEup',
          omapiId: 'C5FU0001',
          mobile: [
            omapiProductInfoFactory.build({
              omapiId: 'C5FU0002',
              productInfo: OmapiProductTestfactory.build(),
            }),
          ],
        }),
        omapiFamilyTierFactory.build({
          key: 'I_DONT_EXIST',
          omapiId: 'X001',
          mobile: [
            omapiProductInfoFactory.build({
              omapiId: 'X002',
              productInfo: OmapiProductTestfactory.build(),
            }),
          ],
        }),
      ],
    });

    it('should return fast when given correct tier omapiId', () => {
      const actual = OmapiFamilyUtils.getFamilyTier('42797', omapiFamily);
      expect(actual).toEqual(OmapiFamilyTierEnum.FAST);
    });
    it('should return fast when given correct mobile omapiId', () => {
      const actual = OmapiFamilyUtils.getFamilyTier('36860', omapiFamily);
      expect(actual).toEqual(OmapiFamilyTierEnum.FAST);
    });
    it('should return furious when given correct tier omapiId', () => {
      const actual = OmapiFamilyUtils.getFamilyTier('42790', omapiFamily);
      expect(actual).toEqual(OmapiFamilyTierEnum.FURIOUS);
    });
    it('should return furious when given correct mobile omapiId', () => {
      const actual = OmapiFamilyUtils.getFamilyTier('36861', omapiFamily);
      expect(actual).toEqual(OmapiFamilyTierEnum.FURIOUS);
    });
    it('should return KLIK when given correct tier omapiId', () => {
      const actual = OmapiFamilyUtils.getFamilyTier('45840', omapiFamily);
      expect(actual).toEqual(OmapiFamilyTierEnum.KLIK);
    });
    it('should return KLIK when given correct mobile omapiId', () => {
      const actual = OmapiFamilyUtils.getFamilyTier('45841', omapiFamily);
      expect(actual).toEqual(OmapiFamilyTierEnum.KLIK);
    });
    it('should return ONE when given correct tier omapiId', () => {
      const actual = OmapiFamilyUtils.getFamilyTier('C5FA0001', omapiFamily);
      expect(actual).toEqual(OmapiFamilyTierEnum.ONE);
    });
    it('should return ONE when given correct mobile omapiId', () => {
      const actual = OmapiFamilyUtils.getFamilyTier('C5FA0001', omapiFamily);
      expect(actual).toEqual(OmapiFamilyTierEnum.ONE);
    });
    it('should return ONEup when given correct tier omapiId', () => {
      const actual = OmapiFamilyUtils.getFamilyTier('C5FU0001', omapiFamily);
      expect(actual).toEqual(OmapiFamilyTierEnum.ONE_UP);
    });
    it('should return ONEup when given correct mobile omapiId', () => {
      const actual = OmapiFamilyUtils.getFamilyTier('C5FU0002', omapiFamily);
      expect(actual).toEqual(OmapiFamilyTierEnum.ONE_UP);
    });
    it('should return fast when given correct tier omapiId of tier that does not exist', () => {
      const actual = OmapiFamilyUtils.getFamilyTier('X001', omapiFamily);
      expect(actual).toEqual(OmapiFamilyTierEnum.FAST);
    });
    it('should return fast when given correct mobile omapiId of tier that does not exist', () => {
      const actual = OmapiFamilyUtils.getFamilyTier('X002', omapiFamily);
      expect(actual).toEqual(OmapiFamilyTierEnum.FAST);
    });
    it('should return fast when given incorrect mobile omapiId of tier', () => {
      const actual = OmapiFamilyUtils.getFamilyTier('000', omapiFamily);
      expect(actual).toEqual(OmapiFamilyTierEnum.FAST);
    });
    it('should return fast when given incorrect tier omapiId of tier', () => {
      const actual = OmapiFamilyUtils.getFamilyTier('001', omapiFamily);
      expect(actual).toEqual(OmapiFamilyTierEnum.FAST);
    });
  });
});
